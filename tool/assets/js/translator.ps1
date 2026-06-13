# Get the directory where the script is located, and combine it with the hardcoded filename
$ScriptDir = Split-Path -Parent $MyInvocation.MyCommand.Path
if ([string]::IsNullOrEmpty($ScriptDir)) { $ScriptDir = Get-Location } 
$FilePath = Join-Path -Path $ScriptDir -ChildPath "app.0985b78f.js"

# 1. Verify the specific file exists in the directory
if (-not (Test-Path -Path $FilePath -PathType Leaf)) {
    Write-Error "Target file 'app.0985b78f.js' could not be found in the current script directory: $ScriptDir"
    exit
}

Write-Host "Targeting file: $FilePath" -ForegroundColor Cyan
$Content = [System.IO.File]::ReadAllText($FilePath, [System.Text.Encoding]::UTF8)

# 2. SAFE TWO-STEP PARSING REGEX
# This regex safely grabs all single or double quoted strings without matching nested syntax or crashing.
$StringRegex = '"[^"\\]*(?:\\.[^"\\]*)*"|''[^''\\]*(?:\\.[^''\\]*)*'''

# Helper function to invoke the online Google Translate API
function Invoke-OnlineTranslation {
    param ([string]$Text)
    
    $TargetUrl = "https://translate.googleapis.com/translate_a/single?client=gtx&sl=zh-CN&tl=en&dt=t&q=$([Uri]::EscapeDataString($Text))"
    
    try {
        $Response = Invoke-RestMethod -Uri $TargetUrl -Method Get -UserAgent "Mozilla/5.0"
        $TranslatedText = ""
        foreach ($chunk in $Response[0]) {
            $TranslatedText += $chunk[0]
        }
        return $TranslatedText
    }
    catch {
        Write-Warning "Failed to translate text: '$Text'. Error: $_"
        return $Text 
    }
}

# Helper function to write content back to file safely
function Write-ContentToFile {
    param (
        [string]$Path,
        [string]$Data
    )
    [System.IO.File]::WriteAllText($Path, $Data, [System.Text.Encoding]::UTF8)
}

# Find ALL raw string literals in the JavaScript payload safely
Write-Host "Scanning file structure safely..." -ForegroundColor Cyan
$RawMatches = [regex]::Matches($Content, $StringRegex)

# Filter out only the targets that contain Chinese characters AND are under 100 characters total
$ValidMatches = New-Object System.Collections.Generic.List[string]
foreach ($Match in $RawMatches) {
    $Val = $Match.Value
    # Check string length constraint (< 102 to account for the enclosing quotes) 
    # And check if it contains a character in the Chinese unicode block
    if ($Val.Length -le 102 -and $Val -match '[\u4e00-\u9fa5]') {
        if (-not $ValidMatches.Contains($Val)) {
            $null = $ValidMatches.Add($Val)
        }
    }
}

if ($ValidMatches.Count -eq 0) {
    Write-Host "No Chinese string literals matching the size criteria were found in app.0985b78f.js." -ForegroundColor Yellow
    exit
}

Write-Host "Found $($ValidMatches.Count) unique targeted Chinese string literals. Starting translation..." -ForegroundColor Cyan

# Track unique translations and the operational batch counter
$TranslationMap = @{}
$BatchCounter = 0

foreach ($FullStringLiteral in $ValidMatches) {
    
    # Extract the quote character used (single or double) and the inner text
    $QuoteChar = $FullStringLiteral[0]
    $InnerText = $FullStringLiteral.Substring(1, $FullStringLiteral.Length - 2)
    
    Write-Host "Translating: $InnerText" -ForegroundColor Gray
    
    # Fetch translation
    $EnglishTranslation = Invoke-OnlineTranslation -Text $InnerText
    
    # Reassemble with original quoting behavior
    $NewStringLiteral = "$QuoteChar$EnglishTranslation$QuoteChar"
    $TranslationMap[$FullStringLiteral] = $NewStringLiteral
    
    # Increment our batch tracking counter
    $BatchCounter++
    
    # 3. Save progress back to the file every 10 items translated
    if ($BatchCounter -eq 10) {
        Write-Host "Batch milestone reached! Writing current 10 translations back to app.0985b78f.js..." -ForegroundColor Yellow
        
        foreach ($Key in $TranslationMap.Keys) {
            $Content = $Content.Replace($Key, $TranslationMap[$Key])
        }
        
        Write-ContentToFile -Path $FilePath -Data $Content
        
        # Reset current batch mapping state
        $TranslationMap = @{}
        $BatchCounter = 0
    }
    
    # Small sleep delay to prevent rate-limiting (HTTP 429)
    Start-Sleep -Milliseconds 200
}

# 4. Perform final flush of any remaining items
if ($TranslationMap.Count -gt 0) {
    Write-Host "Flushing final remaining items back to app.0985b78f.js..." -ForegroundColor Yellow
    foreach ($Key in $TranslationMap.Keys) {
        $Content = $Content.Replace($Key, $TranslationMap[$Key])
    }
    Write-ContentToFile -Path $FilePath -Data $Content
}

Write-Host "Localization of app.0985b78f.js Completed Successfully!" -ForegroundColor Green