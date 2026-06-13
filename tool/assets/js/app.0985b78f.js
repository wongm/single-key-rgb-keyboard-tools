(function() {
    "use strict";
    var e = {
            4805: function(e, t, s) {
                var i = s(6369),
                    n = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            attrs: {
                                id: "app"
                            }
                        }, [t("router-view")], 1)
                    },
                    a = [],
                    o = {},
                    r = o,
                    l = s(1001),
                    c = (0, l.Z)(r, n, a, !1, null, null, null),
                    y = c.exports,
                    p = s(2631),
                    u = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            directives: [{
                                name: "loading",
                                rawName: "v-loading.fullscreen.lock",
                                value: e.fullscreenLoading,
                                expression: "fullscreenLoading",
                                modifiers: {
                                    fullscreen: !0,
                                    lock: !0
                                }
                            }],
                            staticClass: "home",
                            attrs: {
                                "element-loading-text": "Configuration data is being saved"
                            }
                        }, [e.isConnet ? e._e() : t("div", [e._m(0), e._m(1), t("p", {
                            staticClass: "title-p"
                        }, [e._v("Connect the computer and keyboard via USB, click to search for the connected keyboard device, and select the keyboard to configure!")]), t("button", {
                            staticClass: "search-btn",
                            on: {
                                click: e.findKeyboard
                            }
                        }, [e._v("Search for connected keyboard")])]), t("main-vew", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.isConnet && 1 != e.isSetting,
                                expression: "isConnet&&isSetting!=true"
                            }],
                            ref: "main",
                            on: {
                                save: e.saveSet,
                                saveble: e.saveSetBLE,
                                openSet: e.openSet
                            }
                        }), t("set-index", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.isSetting,
                                expression: "isSetting"
                            }],
                            ref: "set",
                            on: {
                                save: e.updateView,
                                backSet: e.backSetFnc
                            }
                        }), t("div", {
                            staticClass: "bottom-part"
                        }, [t("p", [e._v("For more functional experience/settings, please download the official configuration software")]), t("div", {
                            staticClass: "bottom-list"
                        }, [t("div", {
                            staticClass: "bottom-item",
                            on: {
                                click: e.downloadWin
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(8948),
                                alt: ""
                            }
                        }), t("p", [e._v("Windows")])]), t("div", {
                            staticClass: "bottom-item",
                            on: {
                                click: e.downloadMac
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(3755),
                                alt: ""
                            }
                        }), t("p", [e._v("MAC")])])])])], 1)
                    },
                    m = [function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "top-usb"
                        }, [t("img", {
                            staticClass: "bounce",
                            attrs: {
                                src: s(5175),
                                alt: ""
                            }
                        })])
                    }, function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticStyle: {
                                "margin-top": "-20px"
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(7258),
                                alt: ""
                            }
                        })])
                    }],
                    k = (s(1439), s(7585), s(5315), function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "main"
                        }, [t("h1", [e._v("Overview of custom keyboard settings")]), t("div", {
                            staticClass: "m-t-sm"
                        }, [e._v("Lighting mode:"), t("el-select", {
                            attrs: {
                                placeholder: "Please select lighting mode"
                            },
                            on: {
                                change: e.changeLightMode
                            },
                            model: {
                                value: e.value,
                                callback: function(t) {
                                    e.value = t
                                },
                                expression: "value"
                            }
                        }, e._l(e.options, (function(e) {
                            return t("el-option", {
                                key: e.value,
                                attrs: {
                                    label: e.label,
                                    value: e.value
                                }
                            })
                        })), 1)], 1), "one-key" == e.type ? t("one-key-vue", {
                            ref: "oneKey",
                            on: {
                                setIndex: e.goSetting
                            }
                        }) : e._e(), "big-one" == e.type ? t("big-one-key-vue", {
                            ref: "bigOne",
                            on: {
                                setIndex: e.goSetting
                            }
                        }) : e._e(), "two-one" == e.type ? t("two-one-key-vue", {
                            ref: "twoOne",
                            on: {
                                setIndex: e.goSetting
                            }
                        }) : e._e(), "two-high" == e.type ? t("two-high-key", {
                            ref: "twoHigh",
                            on: {
                                setIndex: e.goSetting
                            }
                        }) : e._e(), "three-one" == e.type ? t("three-one-key", {
                            ref: "threeOne",
                            on: {
                                setIndex: e.goSetting
                            }
                        }) : e._e(), "three-two" == e.type ? t("three-two-key-vue", {
                            ref: "threeTwo",
                            on: {
                                setIndex: e.goSetting
                            }
                        }) : e._e(), "four-one" == e.type ? t("four-one-key", {
                            ref: "fourOne",
                            on: {
                                setIndex: e.goSetting
                            }
                        }) : e._e(), "four-ty" == e.type ? t("t-y-four-key", {
                            ref: "fourTy",
                            on: {
                                setIndex: e.goSetting
                            }
                        }) : e._e(), "four-fx" == e.type ? t("four-fx-key-vue", {
                            ref: "fourFx",
                            on: {
                                setIndex: e.goSetting
                            }
                        }) : e._e(), "five-one" == e.type ? t("five-one-key-vue", {
                            ref: "fiveOne",
                            on: {
                                setIndex: e.goSetting
                            }
                        }) : e._e(), "five-three" == e.type ? t("five-three-key-vue", {
                            ref: "fiveThree",
                            on: {
                                setIndex: e.goSetting
                            }
                        }) : e._e(), "six-two" == e.type ? t("six-two-key-vue", {
                            ref: "sixTwo",
                            on: {
                                setIndex: e.goSetting
                            }
                        }) : e._e(), "six-one" == e.type ? t("six-one-key-vue", {
                            ref: "sixOne",
                            on: {
                                setIndex: e.goSetting
                            }
                        }) : e._e(), "six-four-two" == e.type ? t("six-four-two-key-vue", {
                            ref: "sixFourTwo",
                            on: {
                                setIndex: e.goSetting
                            }
                        }) : e._e(), "seven-one" == e.type ? t("seven-one-key-vue", {
                            ref: "sevenOne",
                            on: {
                                setIndex: e.goSetting
                            }
                        }) : e._e(), "eight-two" == e.type ? t("eight-two-key-vue", {
                            ref: "eightTwo",
                            on: {
                                setIndex: e.goSetting
                            }
                        }) : e._e(), "nine-three" == e.type ? t("nine-three-vue", {
                            ref: "nineThree",
                            on: {
                                setIndex: e.goSetting
                            }
                        }) : e._e(), "ten-25" == e.type ? t("ten-key-two-vue", {
                            ref: "tenTwo",
                            on: {
                                setIndex: e.goSetting
                            }
                        }) : e._e(), "ten-442" == e.type ? t("ten-key-four-two-vue", {
                            ref: "tenFourTwo",
                            on: {
                                setIndex: e.goSetting
                            }
                        }) : e._e(), "twelve-two" == e.type ? t("twelve-key-two", {
                            ref: "twelveTwo",
                            on: {
                                setIndex: e.goSetting
                            }
                        }) : e._e(), "twelve-four" == e.type ? t("twelve-four-key-vue", {
                            ref: "twelveFour",
                            on: {
                                setIndex: e.goSetting
                            }
                        }) : e._e(), t("div", {
                            staticClass: "btn-groups"
                        }, [e.keyObj.isBLE ? t("el-button", {
                            attrs: {
                                type: "success"
                            },
                            on: {
                                click: e.saveSetToBLEKeyboard
                            }
                        }, [e._v("save to keyboard")]) : t("el-button", {
                            attrs: {
                                type: "success"
                            },
                            on: {
                                click: e.saveSetToKeyboard
                            }
                        }, [e._v("save to keyboard")])], 1), t("el-dialog", {
                            attrs: {
                                width: "400px",
                                title: "Lighting settings",
                                visible: e.dialogVisible
                            },
                            on: {
                                "update:visible": function(t) {
                                    e.dialogVisible = t
                                }
                            }
                        }, [t("el-form", {
                            staticStyle: {
                                "text-align": "left"
                            },
                            attrs: {
                                model: e.form
                            }
                        }, [t("el-form-item", {
                            attrs: {
                                label: "light color",
                                "label-width": e.formLabelWidth
                            }
                        }, [t("el-color-picker", {
                            attrs: {
                                predefine: e.predefineColors
                            },
                            model: {
                                value: e.color,
                                callback: function(t) {
                                    e.color = t
                                },
                                expression: "color"
                            }
                        })], 1)], 1), t("div", {
                            staticClass: "dialog-footer",
                            attrs: {
                                slot: "footer"
                            },
                            slot: "footer"
                        }, [t("el-button", {
                            on: {
                                click: function(t) {
                                    e.dialogVisible = !1
                                }
                            }
                        }, [e._v("Cancel")]), t("el-button", {
                            attrs: {
                                type: "primary"
                            },
                            on: {
                                click: function(t) {
                                    e.dialogVisible = !1
                                }
                            }
                        }, [e._v("Sure")])], 1)], 1)], 1)
                    }),
                    d = [],
                    f = (s(7658), function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "keyPart"
                        }, [t("img", {
                            staticClass: "sj-img",
                            attrs: {
                                src: s(9156),
                                alt: ""
                            }
                        }), e.setList[0] ? t("div", {
                            staticClass: "list"
                        }, [t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item1",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item2",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item3",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item4",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1)]) : e._e()])
                    }),
                    v = [],
                    _ = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "item",
                            on: {
                                click: function(t) {
                                    return e.goSetting()
                                }
                            }
                        }, [1 == e.setItem.type ? [e.setItem.downStr ? [t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Press:")]), e._v(e._s(e.setItem.downStr) + " ")] : e._e(), e.setItem.upStr ? [t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Lift:")]), e._v(e._s(e.setItem.upStr) + " ")] : e._e()] : e._e(), 3 == e.setItem.type ? [e.setItem.downStr ? [t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Press in order:")]), e._v(e._s(e.setItem.downStr) + " "), t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Interval time:" + e._s(e.setItem.time) + "ms")]), t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Number of cycles:" + e._s(e.setItem.runNum))])] : e._e()] : e._e(), 2 == e.setItem.type ? [e.setItem.downStr ? [t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Press effect:")]), e._v(e._s(e.setItem.downStr) + " ")] : e._e()] : e._e()], 2)
                    },
                    C = [],
                    S = {
                        name: "KeyItemIndex",
                        data() {
                            return {
                                setItem: {},
                                indexOfList: 0
                            }
                        },
                        created() {},
                        methods: {
                            init(e, t) {
                                this.setItem = e, this.indexOfList = t
                            },
                            goSetting() {
                                this.$emit("setIndex", this.indexOfList)
                            }
                        }
                    },
                    g = S,
                    w = (0, l.Z)(g, _, C, !1, null, "14b6e020", null),
                    b = w.exports,
                    x = {
                        name: "FourOneKey",
                        components: {
                            KeyItem: b
                        },
                        data() {
                            return {
                                keyObj: JSON.parse(window.localStorage.getItem("keyObj")),
                                setList: JSON.parse(window.localStorage.getItem("keyObj")).setList
                            }
                        },
                        created() {},
                        methods: {
                            init(e) {
                                const t = this;
                                this.keyObj = e, this.setList = this.keyObj.setList, this.$nextTick((() => {
                                    t.$refs.item1.init(t.setList[0], 1), t.$refs.item2.init(t.setList[1], 2), t.$refs.item3.init(t.setList[2], 3), t.$refs.item4.init(t.setList[3], 4)
                                }))
                            },
                            goSetting(e) {
                                this.$emit("setIndex", e)
                            }
                        }
                    },
                    h = x,
                    K = (0, l.Z)(h, f, v, !1, null, "6da5ca94", null),
                    L = K.exports,
                    O = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "keyPart"
                        }, [t("img", {
                            staticClass: "sj-img",
                            attrs: {
                                src: s(9156),
                                alt: ""
                            }
                        }), e.setList[0] ? t("div", {
                            staticClass: "list"
                        }, [t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item1",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item2",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item3",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item4",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item5",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1), t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item6",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item7",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item8",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item9",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item10",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1)]) : e._e()])
                    },
                    U = [],
                    I = {
                        name: "TenKeyTwo",
                        components: {
                            KeyItem: b
                        },
                        data() {
                            return {
                                keyObj: JSON.parse(window.localStorage.getItem("keyObj")),
                                setList: JSON.parse(window.localStorage.getItem("keyObj")).setList
                            }
                        },
                        created() {},
                        methods: {
                            init(e) {
                                const t = this;
                                this.keyObj = e, this.setList = this.keyObj.setList, this.$nextTick((() => {
                                    t.$refs.item1.init(t.setList[0], 1), t.$refs.item2.init(t.setList[1], 2), t.$refs.item3.init(t.setList[2], 3), t.$refs.item4.init(t.setList[3], 4), t.$refs.item5.init(t.setList[4], 5), t.$refs.item6.init(t.setList[5], 6), t.$refs.item7.init(t.setList[6], 7), t.$refs.item8.init(t.setList[7], 8), t.$refs.item9.init(t.setList[8], 9), t.$refs.item10.init(t.setList[9], 10)
                                }))
                            },
                            goSetting(e) {
                                this.$emit("setIndex", e)
                            }
                        }
                    },
                    j = I,
                    F = (0, l.Z)(j, O, U, !1, null, "55a1f2c2", null),
                    $ = F.exports,
                    D = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "keyPart"
                        }, [t("img", {
                            staticClass: "sj-img",
                            attrs: {
                                src: s(9156),
                                alt: ""
                            }
                        }), e.setList[0] ? t("div", {
                            staticClass: "list"
                        }, [t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item1",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item2",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1), t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item3",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item4",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1)]) : e._e()])
                    },
                    T = [],
                    A = {
                        name: "TYFourKey",
                        components: {
                            KeyItem: b
                        },
                        data() {
                            return {
                                keyObj: JSON.parse(window.localStorage.getItem("keyObj")),
                                setList: JSON.parse(window.localStorage.getItem("keyObj")).setList
                            }
                        },
                        created() {},
                        methods: {
                            init(e) {
                                const t = this;
                                this.keyObj = e, this.setList = this.keyObj.setList, this.$nextTick((() => {
                                    t.$refs.item1.init(t.setList[0], 1), t.$refs.item2.init(t.setList[1], 2), t.$refs.item3.init(t.setList[2], 3), t.$refs.item4.init(t.setList[3], 4)
                                }))
                            },
                            goSetting(e) {
                                this.$emit("setIndex", e)
                            }
                        }
                    },
                    E = A,
                    B = (0, l.Z)(E, D, T, !1, null, "7cc55796", null),
                    N = B.exports,
                    P = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "keyPart"
                        }, [t("img", {
                            staticClass: "sj-img",
                            attrs: {
                                src: s(9156),
                                alt: ""
                            }
                        }), e.setList[0] ? t("div", {
                            staticClass: "list"
                        }, [t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item1",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item2",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item3",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1)]) : e._e()])
                    },
                    J = [],
                    M = {
                        name: "ThreeOneKey",
                        components: {
                            KeyItem: b
                        },
                        data() {
                            return {
                                keyObj: JSON.parse(window.localStorage.getItem("keyObj")),
                                setList: JSON.parse(window.localStorage.getItem("keyObj")).setList
                            }
                        },
                        created() {},
                        methods: {
                            init(e) {
                                const t = this;
                                this.keyObj = e, this.setList = this.keyObj.setList, this.$nextTick((() => {
                                    t.$refs.item1.init(t.setList[0], 1), t.$refs.item2.init(t.setList[1], 2), t.$refs.item3.init(t.setList[2], 3)
                                }))
                            },
                            goSetting(e) {
                                this.$emit("setIndex", e)
                            }
                        }
                    },
                    V = M,
                    Z = (0, l.Z)(V, P, J, !1, null, "1bf3fe70", null),
                    H = Z.exports,
                    R = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "keyPart"
                        }, [t("img", {
                            staticClass: "sj-img",
                            attrs: {
                                src: s(9156),
                                alt: ""
                            }
                        }), e.setList[0] ? t("div", {
                            staticClass: "list"
                        }, [t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item1",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item2",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1)]) : e._e()])
                    },
                    W = [],
                    G = {
                        name: "TwoOneKey",
                        components: {
                            KeyItem: b
                        },
                        data() {
                            return {
                                keyObj: JSON.parse(window.localStorage.getItem("keyObj")),
                                setList: JSON.parse(window.localStorage.getItem("keyObj")).setList
                            }
                        },
                        created() {},
                        methods: {
                            init(e) {
                                const t = this;
                                this.keyObj = e, this.setList = this.keyObj.setList, this.$nextTick((() => {
                                    t.$refs.item1.init(t.setList[0], 1), t.$refs.item2.init(t.setList[1], 2)
                                }))
                            },
                            goSetting(e) {
                                this.$emit("setIndex", e)
                            }
                        }
                    },
                    q = G,
                    Y = (0, l.Z)(q, R, W, !1, null, "26e819ca", null),
                    Q = Y.exports,
                    X = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "keyPart"
                        }, [t("img", {
                            staticClass: "sj-img",
                            attrs: {
                                src: s(9156),
                                alt: ""
                            }
                        }), e.setList[0] ? t("div", {
                            staticClass: "list"
                        }, [t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item1",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item2",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item3",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item4",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item5",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item6",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item7",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1)]) : e._e()])
                    },
                    z = [],
                    ee = {
                        name: "SevenOneKey",
                        components: {
                            KeyItem: b
                        },
                        data() {
                            return {
                                keyObj: JSON.parse(window.localStorage.getItem("keyObj")),
                                setList: JSON.parse(window.localStorage.getItem("keyObj")).setList
                            }
                        },
                        created() {},
                        methods: {
                            init(e) {
                                const t = this;
                                this.keyObj = e, this.setList = this.keyObj.setList, this.$nextTick((() => {
                                    t.$refs.item1.init(t.setList[0], 1), t.$refs.item2.init(t.setList[1], 2), t.$refs.item3.init(t.setList[2], 3), t.$refs.item4.init(t.setList[3], 4), t.$refs.item5.init(t.setList[4], 5), t.$refs.item6.init(t.setList[5], 6), t.$refs.item7.init(t.setList[6], 7)
                                }))
                            },
                            goSetting(e) {
                                this.$emit("setIndex", e)
                            }
                        }
                    },
                    te = ee,
                    se = (0, l.Z)(te, X, z, !1, null, "355367d4", null),
                    ie = se.exports,
                    ne = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "keyPart"
                        }, [t("img", {
                            staticClass: "sj-img",
                            attrs: {
                                src: s(9156),
                                alt: ""
                            }
                        }), e.setList[0] ? t("div", {
                            staticClass: "list"
                        }, [t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item1",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item2",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item3",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item4",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item5",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item6",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1), t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item7",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item8",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item9",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item10",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item11",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item12",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1)]) : e._e()])
                    },
                    ae = [],
                    oe = {
                        name: "TwelveKeyTwo",
                        components: {
                            KeyItem: b
                        },
                        data() {
                            return {
                                keyObj: JSON.parse(window.localStorage.getItem("keyObj")),
                                setList: JSON.parse(window.localStorage.getItem("keyObj")).setList
                            }
                        },
                        created() {},
                        methods: {
                            init(e) {
                                const t = this;
                                this.keyObj = e, this.setList = this.keyObj.setList, this.$nextTick((() => {
                                    t.$refs.item1.init(t.setList[0], 1), t.$refs.item2.init(t.setList[1], 2), t.$refs.item3.init(t.setList[2], 3), t.$refs.item4.init(t.setList[3], 4), t.$refs.item5.init(t.setList[4], 5), t.$refs.item6.init(t.setList[5], 6), t.$refs.item7.init(t.setList[6], 7), t.$refs.item8.init(t.setList[7], 8), t.$refs.item9.init(t.setList[8], 9), t.$refs.item10.init(t.setList[9], 10), t.$refs.item11.init(t.setList[10], 11), t.$refs.item12.init(t.setList[11], 12)
                                }))
                            },
                            goSetting(e) {
                                this.$emit("setIndex", e)
                            }
                        }
                    },
                    re = oe,
                    le = (0, l.Z)(re, ne, ae, !1, null, "a5fa15b6", null),
                    ce = le.exports,
                    ye = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "keyPart"
                        }, [t("img", {
                            staticClass: "sj-img",
                            attrs: {
                                src: s(9156),
                                alt: ""
                            }
                        }), e.setList[0] ? t("div", {
                            staticClass: "list"
                        }, [t("div", {
                            staticClass: "item-list"
                        }, [t("div", {
                            staticClass: "item",
                            on: {
                                click: function(t) {
                                    return e.goSetting(1)
                                }
                            }
                        }, [1 == e.setList[0].type ? [e.setList[0].downStr ? [t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Press:")]), e._v(e._s(e.setList[0].downStr) + " ")] : e._e(), e.setList[0].upStr ? [t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Lift:")]), e._v(e._s(e.setList[0].upStr) + " ")] : e._e()] : e._e(), 3 == e.setList[0].type ? [e.setList[0].downStr ? [t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Press in order:")]), e._v(e._s(e.setList[0].downStr) + " "), t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Interval time:" + e._s(e.setList[0].time) + "ms")]), t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Number of cycles:" + e._s(e.setList[0].runNum))])] : e._e()] : e._e()], 2)])]) : e._e()])
                    },
                    pe = [],
                    ue = {
                        name: "BigOneKey",
                        data() {
                            return {
                                keyObj: JSON.parse(window.localStorage.getItem("keyObj")),
                                setList: JSON.parse(window.localStorage.getItem("keyObj")).setList
                            }
                        },
                        created() {},
                        methods: {
                            init(e) {
                                this.keyObj = e, this.setList = this.keyObj.setList
                            },
                            goSetting(e) {
                                this.$emit("setIndex", e)
                            }
                        }
                    },
                    me = ue,
                    ke = (0, l.Z)(me, ye, pe, !1, null, "9fd3e8ee", null),
                    de = ke.exports,
                    fe = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "keyPart"
                        }, [t("img", {
                            staticClass: "sj-img",
                            attrs: {
                                src: s(9156),
                                alt: ""
                            }
                        }), e.setList[0] ? t("div", {
                            staticClass: "list"
                        }, [t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item1",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1)]) : e._e()])
                    },
                    ve = [],
                    _e = {
                        name: "OneKey",
                        components: {
                            KeyItem: b
                        },
                        data() {
                            return {
                                keyObj: JSON.parse(window.localStorage.getItem("keyObj")),
                                setList: JSON.parse(window.localStorage.getItem("keyObj")).setList
                            }
                        },
                        created() {},
                        methods: {
                            init(e) {
                                const t = this;
                                this.keyObj = e, this.setList = this.keyObj.setList, this.$nextTick((() => {
                                    t.$refs.item1.init(t.setList[0], 1)
                                }))
                            },
                            goSetting(e) {
                                this.$emit("setIndex", e)
                            }
                        }
                    },
                    Ce = _e,
                    Se = (0, l.Z)(Ce, fe, ve, !1, null, "1cf1283e", null),
                    ge = Se.exports,
                    we = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "keyPart"
                        }, [t("img", {
                            staticClass: "sj-img",
                            attrs: {
                                src: s(9156),
                                alt: ""
                            }
                        }), e.setList[0] ? t("div", {
                            staticClass: "list"
                        }, [t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item1",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item2",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item3",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item4",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item5",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1)]) : e._e()])
                    },
                    be = [],
                    xe = {
                        name: "FiveOneKey",
                        components: {
                            KeyItem: b
                        },
                        data() {
                            return {
                                keyObj: JSON.parse(window.localStorage.getItem("keyObj")),
                                setList: JSON.parse(window.localStorage.getItem("keyObj")).setList
                            }
                        },
                        created() {},
                        methods: {
                            init(e) {
                                const t = this;
                                this.keyObj = e, this.setList = this.keyObj.setList, this.$nextTick((() => {
                                    t.$refs.item1.init(t.setList[0], 1), t.$refs.item2.init(t.setList[1], 2), t.$refs.item3.init(t.setList[2], 3), t.$refs.item4.init(t.setList[3], 4), t.$refs.item5.init(t.setList[4], 5)
                                }))
                            },
                            goSetting(e) {
                                console.log(e), this.$emit("setIndex", e)
                            }
                        }
                    },
                    he = xe,
                    Ke = (0, l.Z)(he, we, be, !1, null, null, null),
                    Le = Ke.exports,
                    Oe = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "keyPart"
                        }, [t("img", {
                            staticClass: "sj-img",
                            attrs: {
                                src: s(9156),
                                alt: ""
                            }
                        }), e.setList[0] ? t("div", {
                            staticClass: "list"
                        }, [t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item1",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item2",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item3",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1), t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item4",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item5",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item6",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1)]) : e._e()])
                    },
                    Ue = [],
                    Ie = {
                        name: "SixTwoKey",
                        components: {
                            KeyItem: b
                        },
                        data() {
                            return {
                                keyObj: JSON.parse(window.localStorage.getItem("keyObj")),
                                setList: JSON.parse(window.localStorage.getItem("keyObj")).setList
                            }
                        },
                        created() {},
                        methods: {
                            init(e) {
                                const t = this;
                                this.keyObj = e, this.setList = this.keyObj.setList, this.$nextTick((() => {
                                    t.$refs.item1.init(t.setList[0], 1), t.$refs.item2.init(t.setList[1], 2), t.$refs.item3.init(t.setList[2], 3), t.$refs.item4.init(t.setList[3], 4), t.$refs.item5.init(t.setList[4], 5), t.$refs.item6.init(t.setList[5], 6)
                                }))
                            },
                            goSetting(e) {
                                this.$emit("setIndex", e)
                            }
                        }
                    },
                    je = Ie,
                    Fe = (0, l.Z)(je, Oe, Ue, !1, null, "6912ee2a", null),
                    $e = Fe.exports,
                    De = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "keyPart"
                        }, [t("img", {
                            staticClass: "sj-img",
                            attrs: {
                                src: s(9156),
                                alt: ""
                            }
                        }), e.setList[0] ? t("div", {
                            staticClass: "list"
                        }, [t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item1",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1), t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item2",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item3",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item4",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1)]) : e._e()])
                    },
                    Te = [],
                    Ae = {
                        name: "FourFxKey",
                        components: {
                            KeyItem: b
                        },
                        data() {
                            return {
                                keyObj: JSON.parse(window.localStorage.getItem("keyObj")),
                                setList: JSON.parse(window.localStorage.getItem("keyObj")).setList
                            }
                        },
                        created() {},
                        methods: {
                            init(e) {
                                const t = this;
                                this.keyObj = e, this.setList = this.keyObj.setList, this.$nextTick((() => {
                                    t.$refs.item1.init(t.setList[0], 1), t.$refs.item2.init(t.setList[1], 2), t.$refs.item3.init(t.setList[2], 3), t.$refs.item4.init(t.setList[3], 4)
                                }))
                            },
                            goSetting(e) {
                                this.$emit("setIndex", e)
                            }
                        }
                    },
                    Ee = Ae,
                    Be = (0, l.Z)(Ee, De, Te, !1, null, "24ed3595", null),
                    Ne = Be.exports,
                    Pe = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "keyPart"
                        }, [t("img", {
                            staticClass: "sj-img",
                            attrs: {
                                src: s(9156),
                                alt: ""
                            }
                        }), e.setList[0] ? t("div", {
                            staticClass: "list"
                        }, [t("div", {
                            staticClass: "item-list"
                        }, [t("div", {
                            staticClass: "item",
                            on: {
                                click: function(t) {
                                    return e.goSetting(1)
                                }
                            }
                        }, [1 == e.setList[0].type ? [e.setList[0].downStr ? [t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Press:")]), e._v(e._s(e.setList[0].downStr) + " ")] : e._e(), e.setList[0].upStr ? [t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Lift:")]), e._v(e._s(e.setList[0].upStr) + " ")] : e._e()] : e._e(), 3 == e.setList[0].type ? [e.setList[0].downStr ? [t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Press in order:")]), e._v(e._s(e.setList[0].downStr) + " "), t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Interval time:" + e._s(e.setList[0].time) + "ms")]), t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Number of cycles:" + e._s(e.setList[0].runNum))])] : e._e()] : e._e()], 2), t("div", {
                            staticClass: "item",
                            on: {
                                click: function(t) {
                                    return e.goSetting(2)
                                }
                            }
                        }, [1 == e.setList[1].type ? [e.setList[1].downStr ? [t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Press:")]), e._v(e._s(e.setList[1].downStr) + " ")] : e._e(), e.setList[1].upStr ? [t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Lift:")]), e._v(e._s(e.setList[1].upStr) + " ")] : e._e()] : e._e(), 3 == e.setList[1].type ? [e.setList[1].downStr ? [t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Press in order:")]), e._v(e._s(e.setList[1].downStr) + " "), t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Interval time:" + e._s(e.setList[1].time) + "ms")]), t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Number of cycles:" + e._s(e.setList[1].runNum))])] : e._e()] : e._e()], 2)]), t("div", {
                            staticClass: "item-list"
                        }, [t("div", {
                            staticClass: "item2",
                            on: {
                                click: function(t) {
                                    return e.goSetting(3)
                                }
                            }
                        }, [1 == e.setList[2].type ? [e.setList[2].downStr ? [t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Press:")]), e._v(e._s(e.setList[2].downStr) + " ")] : e._e(), e.setList[2].upStr ? [t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Lift:")]), e._v(e._s(e.setList[2].upStr) + " ")] : e._e()] : e._e(), 3 == e.setList[2].type ? [e.setList[2].downStr ? [t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Press in order:")]), e._v(e._s(e.setList[2].downStr) + " "), t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Interval time:" + e._s(e.setList[2].time) + "ms")]), t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Number of cycles:" + e._s(e.setList[2].runNum))])] : e._e()] : e._e()], 2), t("div", {
                            staticClass: "item2",
                            on: {
                                click: function(t) {
                                    return e.goSetting(4)
                                }
                            }
                        }, [1 == e.setList[3].type ? [e.setList[3].downStr ? [t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Press:")]), e._v(e._s(e.setList[3].downStr) + " ")] : e._e(), e.setList[3].upStr ? [t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Lift:")]), e._v(e._s(e.setList[3].upStr) + " ")] : e._e()] : e._e(), 3 == e.setList[3].type ? [e.setList[3].downStr ? [t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Press in order:")]), e._v(e._s(e.setList[3].downStr) + " "), t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Interval time:" + e._s(e.setList[3].time) + "ms")]), t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Number of cycles:" + e._s(e.setList[3].runNum))])] : e._e()] : e._e()], 2), t("div", {
                            staticClass: "item2",
                            on: {
                                click: function(t) {
                                    return e.goSetting(5)
                                }
                            }
                        }, [1 == e.setList[4].type ? [e.setList[4].downStr ? [t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Press:")]), e._v(e._s(e.setList[4].downStr) + " ")] : e._e(), e.setList[4].upStr ? [t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Lift:")]), e._v(e._s(e.setList[4].upStr) + " ")] : e._e()] : e._e(), 3 == e.setList[4].type ? [e.setList[4].downStr ? [t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Press in order:")]), e._v(e._s(e.setList[4].downStr) + " "), t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Interval time:" + e._s(e.setList[4].time) + "ms")]), t("span", {
                            staticClass: "type1-span"
                        }, [e._v("Number of cycles:" + e._s(e.setList[4].runNum))])] : e._e()] : e._e()], 2)])]) : e._e()])
                    },
                    Je = [],
                    Me = {
                        name: "TwoHighKey",
                        data() {
                            return {
                                keyObj: JSON.parse(window.localStorage.getItem("keyObj")),
                                setList: JSON.parse(window.localStorage.getItem("keyObj")).setList
                            }
                        },
                        created() {},
                        methods: {
                            init(e) {
                                this.keyObj = e, this.setList = this.keyObj.setList
                            },
                            goSetting(e) {
                                this.$emit("setIndex", e)
                            }
                        }
                    },
                    Ve = Me,
                    Ze = (0, l.Z)(Ve, Pe, Je, !1, null, "bd732a12", null),
                    He = Ze.exports,
                    Re = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "keyPart"
                        }, [t("img", {
                            staticClass: "sj-img",
                            attrs: {
                                src: s(9156),
                                alt: ""
                            }
                        }), e.setList[0] ? t("div", {
                            staticClass: "list"
                        }, [t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item1",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item2",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item3",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item4",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item5",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item6",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1)]) : e._e()])
                    },
                    We = [],
                    Ge = {
                        name: "SixOneKey",
                        components: {
                            KeyItem: b
                        },
                        data() {
                            return {
                                keyObj: JSON.parse(window.localStorage.getItem("keyObj")),
                                setList: JSON.parse(window.localStorage.getItem("keyObj")).setList
                            }
                        },
                        created() {},
                        methods: {
                            init(e) {
                                const t = this;
                                this.keyObj = e, this.setList = this.keyObj.setList, this.$nextTick((() => {
                                    t.$refs.item1.init(t.setList[0], 1), t.$refs.item2.init(t.setList[1], 2), t.$refs.item3.init(t.setList[2], 3), t.$refs.item4.init(t.setList[3], 4), t.$refs.item5.init(t.setList[4], 5), t.$refs.item6.init(t.setList[5], 6)
                                }))
                            },
                            goSetting(e) {
                                this.$emit("setIndex", e)
                            }
                        }
                    },
                    qe = Ge,
                    Ye = (0, l.Z)(qe, Re, We, !1, null, "751b4204", null),
                    Qe = Ye.exports,
                    Xe = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "keyPart"
                        }, [t("img", {
                            staticClass: "sj-img",
                            attrs: {
                                src: s(9156),
                                alt: ""
                            }
                        }), e.setList[0] ? t("div", {
                            staticClass: "list"
                        }, [t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item1",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item2",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item3",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item4",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1), t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item5",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item6",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item7",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item8",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1)]) : e._e()])
                    },
                    ze = [],
                    et = {
                        name: "EightTwo",
                        components: {
                            KeyItem: b
                        },
                        data() {
                            return {
                                keyObj: JSON.parse(window.localStorage.getItem("keyObj")),
                                setList: JSON.parse(window.localStorage.getItem("keyObj")).setList
                            }
                        },
                        created() {},
                        methods: {
                            init(e) {
                                const t = this;
                                this.keyObj = e, this.setList = this.keyObj.setList, this.$nextTick((() => {
                                    t.$refs.item1.init(t.setList[0], 1), t.$refs.item2.init(t.setList[1], 2), t.$refs.item3.init(t.setList[2], 3), t.$refs.item4.init(t.setList[3], 4), t.$refs.item5.init(t.setList[4], 5), t.$refs.item6.init(t.setList[5], 6), t.$refs.item7.init(t.setList[6], 7), t.$refs.item8.init(t.setList[7], 8)
                                }))
                            },
                            goSetting(e) {
                                this.$emit("setIndex", e)
                            }
                        }
                    },
                    tt = et,
                    st = (0, l.Z)(tt, Xe, ze, !1, null, null, null),
                    it = st.exports,
                    nt = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "keyPart"
                        }, [t("img", {
                            staticClass: "sj-img",
                            attrs: {
                                src: s(9156),
                                alt: ""
                            }
                        }), e.setList[0] ? t("div", {
                            staticClass: "list"
                        }, [t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item1",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item2",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item3",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1), t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item4",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item5",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item6",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1), t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item7",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item8",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item9",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1)]) : e._e()])
                    },
                    at = [],
                    ot = {
                        name: "NineThree",
                        components: {
                            KeyItem: b
                        },
                        data() {
                            return {
                                keyObj: JSON.parse(window.localStorage.getItem("keyObj")),
                                setList: JSON.parse(window.localStorage.getItem("keyObj")).setList
                            }
                        },
                        created() {},
                        methods: {
                            init(e) {
                                const t = this;
                                this.keyObj = e, this.setList = this.keyObj.setList, this.$nextTick((() => {
                                    t.$refs.item1.init(t.setList[0], 1), t.$refs.item2.init(t.setList[1], 2), t.$refs.item3.init(t.setList[2], 3), t.$refs.item4.init(t.setList[3], 4), t.$refs.item5.init(t.setList[4], 5), t.$refs.item6.init(t.setList[5], 6), t.$refs.item7.init(t.setList[6], 7), t.$refs.item8.init(t.setList[7], 8), t.$refs.item9.init(t.setList[8], 9)
                                }))
                            },
                            goSetting(e) {
                                this.$emit("setIndex", e)
                            }
                        }
                    },
                    rt = ot,
                    lt = (0, l.Z)(rt, nt, at, !1, null, "0831f8fc", null),
                    ct = lt.exports,
                    yt = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "keyPart"
                        }, [t("img", {
                            staticClass: "sj-img",
                            attrs: {
                                src: s(9156),
                                alt: ""
                            }
                        }), e.setList[0] ? t("div", {
                            staticClass: "list"
                        }, [t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item1",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item2",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item3",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1), t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item4",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item5",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item6",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1), t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item7",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item8",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item9",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1), t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item10",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item11",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item12",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1)]) : e._e()])
                    },
                    pt = [],
                    ut = {
                        name: "TwelveFourKey",
                        components: {
                            KeyItem: b
                        },
                        data() {
                            return {
                                keyObj: JSON.parse(window.localStorage.getItem("keyObj")),
                                setList: JSON.parse(window.localStorage.getItem("keyObj")).setList
                            }
                        },
                        created() {},
                        methods: {
                            init(e) {
                                const t = this;
                                this.keyObj = e, this.setList = this.keyObj.setList, this.$nextTick((() => {
                                    t.$refs.item1.init(t.setList[0], 1), t.$refs.item2.init(t.setList[1], 2), t.$refs.item3.init(t.setList[2], 3), t.$refs.item4.init(t.setList[3], 4), t.$refs.item5.init(t.setList[4], 5), t.$refs.item6.init(t.setList[5], 6), t.$refs.item7.init(t.setList[6], 7), t.$refs.item8.init(t.setList[7], 8), t.$refs.item9.init(t.setList[8], 9), t.$refs.item10.init(t.setList[9], 10), t.$refs.item11.init(t.setList[10], 11), t.$refs.item12.init(t.setList[11], 12)
                                }))
                            },
                            goSetting(e) {
                                this.$emit("setIndex", e)
                            }
                        }
                    },
                    mt = ut,
                    kt = (0, l.Z)(mt, yt, pt, !1, null, "ce5b423e", null),
                    dt = kt.exports,
                    ft = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "keyPart"
                        }, [t("img", {
                            staticClass: "sj-img",
                            attrs: {
                                src: s(9156),
                                alt: ""
                            }
                        }), e.setList[0] ? t("div", {
                            staticClass: "list"
                        }, [t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item1",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item2",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item3",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item4",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1), t("div", {
                            staticClass: "item-list2"
                        }, [t("key-item", {
                            ref: "item5",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item6",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1)]) : e._e()])
                    },
                    vt = [],
                    _t = {
                        name: "SixTwoFourKey",
                        components: {
                            KeyItem: b
                        },
                        data() {
                            return {
                                keyObj: JSON.parse(window.localStorage.getItem("keyObj")),
                                setList: JSON.parse(window.localStorage.getItem("keyObj")).setList
                            }
                        },
                        created() {},
                        methods: {
                            init(e) {
                                const t = this;
                                this.keyObj = e, this.setList = this.keyObj.setList, this.$nextTick((() => {
                                    t.$refs.item1.init(t.setList[0], 1), t.$refs.item2.init(t.setList[1], 2), t.$refs.item3.init(t.setList[2], 3), t.$refs.item4.init(t.setList[3], 4), t.$refs.item5.init(t.setList[4], 5), t.$refs.item6.init(t.setList[5], 6)
                                }))
                            },
                            goSetting(e) {
                                this.$emit("setIndex", e)
                            }
                        }
                    },
                    Ct = _t,
                    St = (0, l.Z)(Ct, ft, vt, !1, null, "0eaae2c8", null),
                    gt = St.exports,
                    wt = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "keyPart"
                        }, [t("img", {
                            staticClass: "sj-img",
                            attrs: {
                                src: s(9156),
                                alt: ""
                            }
                        }), e.setList[0] ? t("div", {
                            staticClass: "list"
                        }, [t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item1",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item2",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1), t("div", {
                            staticClass: "item-list2"
                        }, [t("key-item", {
                            ref: "item3",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1)]) : e._e()])
                    },
                    bt = [],
                    xt = {
                        name: "ThreeOneKey",
                        components: {
                            KeyItem: b
                        },
                        data() {
                            return {
                                keyObj: JSON.parse(window.localStorage.getItem("keyObj")),
                                setList: JSON.parse(window.localStorage.getItem("keyObj")).setList
                            }
                        },
                        created() {},
                        methods: {
                            init(e) {
                                const t = this;
                                this.keyObj = e, this.setList = this.keyObj.setList, this.$nextTick((() => {
                                    t.$refs.item1.init(t.setList[0], 1), t.$refs.item2.init(t.setList[1], 2), t.$refs.item3.init(t.setList[2], 3)
                                }))
                            },
                            goSetting(e) {
                                this.$emit("setIndex", e)
                            }
                        }
                    },
                    ht = xt,
                    Kt = (0, l.Z)(ht, wt, bt, !1, null, "636d4103", null),
                    Lt = Kt.exports,
                    Ot = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "keyPart"
                        }, [t("img", {
                            staticClass: "sj-img",
                            attrs: {
                                src: s(9156),
                                alt: ""
                            }
                        }), e.setList[0] ? t("div", {
                            staticClass: "list"
                        }, [t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item1",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item2",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item3",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1), t("div", {
                            staticClass: "item-list2"
                        }, [t("key-item", {
                            ref: "item4",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item5",
                            staticClass: "small",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1)]) : e._e()])
                    },
                    Ut = [],
                    It = {
                        name: "FiveThreeKey",
                        components: {
                            KeyItem: b
                        },
                        data() {
                            return {
                                keyObj: JSON.parse(window.localStorage.getItem("keyObj")),
                                setList: JSON.parse(window.localStorage.getItem("keyObj")).setList
                            }
                        },
                        created() {},
                        methods: {
                            init(e) {
                                const t = this;
                                this.keyObj = e, this.setList = this.keyObj.setList, this.$nextTick((() => {
                                    t.$refs.item1.init(t.setList[0], 1), t.$refs.item2.init(t.setList[1], 2), t.$refs.item3.init(t.setList[2], 3), t.$refs.item4.init(t.setList[3], 4), t.$refs.item5.init(t.setList[4], 5)
                                }))
                            },
                            goSetting(e) {
                                this.$emit("setIndex", e)
                            }
                        }
                    },
                    jt = It,
                    Ft = (0, l.Z)(jt, Ot, Ut, !1, null, "af1e8ace", null),
                    $t = Ft.exports,
                    Dt = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "keyPart"
                        }, [t("img", {
                            staticClass: "sj-img",
                            attrs: {
                                src: s(9156),
                                alt: ""
                            }
                        }), e.setList[0] ? t("div", {
                            staticClass: "list"
                        }, [t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item1",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item2",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item3",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item4",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1), t("div", {
                            staticClass: "item-list"
                        }, [t("key-item", {
                            ref: "item5",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item6",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item7",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item8",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1), t("div", {
                            staticClass: "item-list2"
                        }, [t("key-item", {
                            ref: "item9",
                            on: {
                                setIndex: e.goSetting
                            }
                        }), t("key-item", {
                            ref: "item10",
                            on: {
                                setIndex: e.goSetting
                            }
                        })], 1)]) : e._e()])
                    },
                    Tt = [],
                    At = {
                        name: "TenKeyFourTwo",
                        components: {
                            KeyItem: b
                        },
                        data() {
                            return {
                                keyObj: JSON.parse(window.localStorage.getItem("keyObj")),
                                setList: JSON.parse(window.localStorage.getItem("keyObj")).setList
                            }
                        },
                        created() {},
                        methods: {
                            init(e) {
                                const t = this;
                                this.keyObj = e, this.setList = this.keyObj.setList, this.$nextTick((() => {
                                    t.$refs.item1.init(t.setList[0], 1), t.$refs.item2.init(t.setList[1], 2), t.$refs.item3.init(t.setList[2], 3), t.$refs.item4.init(t.setList[3], 4), t.$refs.item5.init(t.setList[4], 5), t.$refs.item6.init(t.setList[5], 6), t.$refs.item7.init(t.setList[6], 7), t.$refs.item8.init(t.setList[7], 8), t.$refs.item9.init(t.setList[8], 9), t.$refs.item10.init(t.setList[9], 10)
                                }))
                            },
                            goSetting(e) {
                                this.$emit("setIndex", e)
                            }
                        }
                    },
                    Et = At,
                    Bt = (0, l.Z)(Et, Dt, Tt, !1, null, "14a50994", null),
                    Nt = Bt.exports,
                    Pt = {
                        name: "MainIndex",
                        components: {
                            TYFourKey: N,
                            TenKeyTwoVue: $,
                            FourOneKey: L,
                            ThreeOneKey: H,
                            TwoOneKeyVue: Q,
                            SevenOneKeyVue: ie,
                            TwelveKeyTwo: ce,
                            BigOneKeyVue: de,
                            OneKeyVue: ge,
                            FiveOneKeyVue: Le,
                            SixTwoKeyVue: $e,
                            FourFxKeyVue: Ne,
                            TwoHighKey: He,
                            SixOneKeyVue: Qe,
                            EightTwoKeyVue: it,
                            NineThreeVue: ct,
                            TwelveFourKeyVue: dt,
                            SixFourTwoKeyVue: gt,
                            ThreeTwoKeyVue: Lt,
                            FiveThreeKeyVue: $t,
                            TenKeyFourTwoVue: Nt
                        },
                        data() {
                            return {
                                type: "",
                                options: [{
                                    value: 1,
                                    label: "full color gradient"
                                }, {
                                    value: 2,
                                    label: "Single color always on"
                                }, {
                                    value: 3,
                                    label: "Monochrome streamer"
                                }, {
                                    value: 4,
                                    label: "Click to flash"
                                }, {
                                    value: 5,
                                    label: "neon streamer"
                                }, {
                                    value: 7,
                                    label: "Press to light and release"
                                }, {
                                    value: 8,
                                    label: "Click to reverse"
                                }, {
                                    value: 6,
                                    label: "turn off lights"
                                }],
                                value: 1,
                                dialogFormVisible: !1,
                                dialogVisible: !1,
                                form: {
                                    name: ""
                                },
                                keyObj: {},
                                formLabelWidth: "80px",
                                color: "#1e90ff",
                                predefineColors: ["#ff4500", "#ff8c00", "#ffd700", "#90ee90", "#00ced1", "#1e90ff", "#c71585"],
                                saveDataList: new Array(128)
                            }
                        },
                        mounted() {},
                        methods: {
                            changeLightMode() {
                                const e = this;
                                console.log(e.value), -1 != [2, 3, 4, 7, 8].indexOf(e.value) && (e.dialogVisible = !0)
                            },
                            init() {
                                const e = this;
                                this.keyObj = JSON.parse(window.localStorage.getItem("keyObj")), console.log(this.keyObj), this.type = this.keyObj.type, this.$nextTick((() => {
                                    "four-ty" == e.type && e.$refs.fourTy.init(e.keyObj), "ten-25" == e.type && e.$refs.tenTwo.init(e.keyObj), "four-one" == e.type && e.$refs.fourOne.init(e.keyObj), "three-one" == e.type && e.$refs.threeOne.init(e.keyObj), "two-one" == e.type && e.$refs.twoOne.init(e.keyObj), "seven-one" == e.type && e.$refs.sevenOne.init(e.keyObj), "twelve-two" == e.type && e.$refs.twelveTwo.init(e.keyObj), "big-one" == e.type && e.$refs.bigOne.init(e.keyObj), "one-key" == e.type && e.$refs.oneKey.init(e.keyObj), "five-one" == e.type && e.$refs.fiveOne.init(e.keyObj), "six-two" == e.type && e.$refs.sixTwo.init(e.keyObj), "four-fx" == e.type && e.$refs.fourFx.init(e.keyObj), "two-high" == e.type && e.$refs.twoHigh.init(e.keyObj), "six-one" == e.type && e.$refs.sixOne.init(e.keyObj), "eight-two" == e.type && e.$refs.eightTwo.init(e.keyObj), "nine-three" == e.type && e.$refs.nineThree.init(e.keyObj), "twelve-four" == e.type && e.$refs.twelveFour.init(e.keyObj), "six-four-two" == e.type && e.$refs.sixFourTwo.init(e.keyObj), "three-two" == e.type && e.$refs.threeTwo.init(e.keyObj), "five-three" == e.type && e.$refs.fiveThree.init(e.keyObj), "ten-442" == e.type && e.$refs.tenFourTwo.init(e.keyObj)
                                }))
                            },
                            async saveSetToBLEKeyboard() {
                                console.log(this.keyObj.setList);
                                const e = this;
                                let t = [175, 13, 0, 1, 255, 255, 255, 0],
                                    s = this.olorRgb(e.color);
                                t[3] = this.value, t[4] = s[0], t[5] = s[1], t[6] = s[2];
                                let i = [];
                                i[0] = t, this.keyObj.setList.forEach(((t, s) => {
                                    const n = i.concat(e.getKeysNumBLE(t, s + 1));
                                    i = n
                                })), console.log(i), this.$emit("saveble", {
                                    allKey: i
                                })
                            },
                            getKeysNumBLE(e, t) {
                                const s = this;
                                return 1 == e.type ? s.getCommonKeyValueBLE(e, t) : 2 == e.type ? s.getMediaKeyValueBLE(e, t) : 3 == e.type ? s.getDjhyKeyValueBLE(e, t) : void 0
                            },
                            getCommonKeyValueBLE(e, t) {
                                let s = [],
                                    i = [];
                                e.downKeys.forEach((e => {
                                    "cb" == e.type ? s.push(e.num) : i.push(e.num)
                                }));
                                let n = this.sunCbNum(s),
                                    a = [175, 9, t, n, 0, 0, 0, 0],
                                    o = [175, 2, t, 0, 15],
                                    r = this.buildConfigBuf(i),
                                    l = o.concat(r),
                                    c = [175, 4, t, 0, 1, 1];
                                return console.log([a, l, c]), [a, l, c]
                            },
                            getMediaKeyValueBLE(e, t) {
                                console.log(e);
                                let s = [175, 9, t, 2, 0, 0, 0, 0],
                                    i = e.downKeys[0].num,
                                    n = i / 256,
                                    a = i % 256,
                                    o = [175, 2, t, 0, 2, n, a],
                                    r = [175, 4, t, 2, 2, 1];
                                return console.log([s, o, r]), [s, o, r]
                            },
                            getDjhyKeyValueBLE(e, t) {
                                let s = e.time / 256,
                                    i = e.time % 256,
                                    n = [175, 9, t, 0, 0, 0, s, i],
                                    a = [];
                                e.downKeys.forEach((e => {
                                    a.push(e.name)
                                }));
                                let o = this.buildPackets(t, a),
                                    r = [175, 4, t, 3, a.length, e.runNum],
                                    l = [n].concat(o);
                                return l.push(r), console.log(l), l
                            },
                            buildConfigBuf(e) {
                                const t = new Array(15).fill(0),
                                    s = e.length;
                                for (let i = 0; i < s; i++) {
                                    const s = e[i],
                                        n = s >> 3 << 3;
                                    t[s >> 3] |= 1 << (s - n) % 8
                                }
                                return t
                            },
                            buildPackets(e, t, s = 32) {
                                const i = [],
                                    n = t.length;
                                for (let a = 0; a < n; a += s) {
                                    const n = t.slice(a, a + s),
                                        o = n.length,
                                        r = [175, 2, e, a, o, ...n];
                                    i.push(r)
                                }
                                return i
                            },
                            async saveSetToKeyboard() {
                                const e = this;
                                for (let r = 0; r < 128; r++) e.saveDataList[r] = 0;
                                let t = [];
                                this.keyObj.setList.forEach((s => {
                                    const i = t.concat(e.getKeysNum(s));
                                    t = i
                                }));
                                let s = e.olorRgb(e.color);
                                const i = this.$createElement;
                                t.length > 124 && this.$notify({
                                    message: i("i", {
                                        style: "color: teal"
                                    }, "The stored data is too long and exceeds the storage space."),
                                    duration: 3e3
                                }), t.forEach(((t, s) => {
                                    e.saveDataList[s] = t
                                })), e.saveDataList[124] = this.value, e.saveDataList[125] = s[0], e.saveDataList[126] = s[1], e.saveDataList[127] = s[2];
                                const n = [175, 2, 0, 60],
                                    a = [175, 2, 60, 60],
                                    o = [175, 2, 120, 8];
                                for (let r = 0; r < 128; r++) r < 60 && n.push(e.saveDataList[r]), r > 59 && r < 120 && a.push(e.saveDataList[r]), r > 119 && o.push(e.saveDataList[r]);
                                this.$emit("save", {
                                    arr1: n,
                                    arr2: a,
                                    arr3: o
                                })
                            },
                            olorRgb(e) {
                                var t = /^#([0-9a-fA-f]{3}|[0-9a-fA-f]{6})$/,
                                    s = e.toLowerCase();
                                if (s && t.test(s)) {
                                    if (4 === s.length) {
                                        var i = "#";
                                        for (let e = 1; e < 4; e += 1) i += s.slice(e, e + 1).concat(s.slice(e, e + 1));
                                        s = i
                                    }
                                    var n = [];
                                    for (let e = 1; e < 7; e += 2) n.push(parseInt("0x" + s.slice(e, e + 2)));
                                    return n
                                }
                                return s
                            },
                            getKeysNum(e) {
                                const t = this;
                                return 1 == e.type ? t.getCommonKeyValue(e) : 2 == e.type ? t.getMediaKeyValue(e) : 3 == e.type ? t.getDjhyKeyValue(e) : void 0
                            },
                            getDjhyKeyValue(e) {
                                let t = e.time / 256,
                                    s = e.time % 256,
                                    i = e.downKeys.length;
                                const n = [3, t, s, e.runNum, i],
                                    a = [];
                                e.downKeys.forEach((e => {
                                    a.push(e.name)
                                }));
                                let o = n.concat(a);
                                return o
                            },
                            getMediaKeyValue(e) {
                                console.log(e);
                                let t = e.downKeys[0].num,
                                    s = t / 256,
                                    i = t % 256;
                                const n = [2, s, i];
                                let a = n;
                                return a
                            },
                            getCommonKeyValue(e) {
                                const t = this,
                                    s = e.downKeys.length,
                                    i = e.upKeys.length;
                                let n = 1;
                                s < 1 && i > 0 && (n = 2), s > 0 && i > 0 && (n = 3), s > 0 && i < 1 && (n = 1), s < 1 && i < 1 && (n = 0);
                                const a = [],
                                    o = [];
                                e.downKeys.forEach((e => {
                                    "cb" == e.type ? a.push(e.num) : o.push(e.num)
                                }));
                                const r = [],
                                    l = [];
                                e.upKeys.forEach((e => {
                                    "cb" == e.type ? r.push(e.num) : l.push(e.num)
                                }));
                                let c = [];
                                if (0 === n && (c = [0, 0, 0, 0]), 1 === n && (c = [0, n, t.sunCbNum(a), o.length].concat(o)), 2 === n && (c = [0, n, t.sunCbNum(r), l.length].concat(l)), 3 === n) {
                                    const e = [0, n, t.sunCbNum(a), o.length].concat(o),
                                        s = [t.sunCbNum(r), l.length].concat(l);
                                    c = e.concat(s)
                                }
                                return c
                            },
                            sunCbNum(e) {
                                return e.reduce(((e, t) => e + t), 0)
                            },
                            goSetting(e) {
                                console.log(e), this.$emit("openSet", e)
                            }
                        }
                    },
                    Jt = Pt,
                    Mt = (0, l.Z)(Jt, k, d, !1, null, "1a58edfd", null),
                    Vt = Mt.exports,
                    Zt = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "box"
                        }, [t("h1", {
                            staticClass: "t-c"
                        }, [e._v("Button function settings")]), t("el-form", {
                            ref: "form",
                            attrs: {
                                model: e.form,
                                "label-width": "190px"
                            }
                        }, [t("el-form-item", {
                            attrs: {
                                label: "Switch key mode:"
                            }
                        }, [t("el-radio-group", {
                            model: {
                                value: e.form.setType,
                                callback: function(t) {
                                    e.$set(e.form, "setType", t)
                                },
                                expression: "form.setType"
                            }
                        }, [t("el-radio", {
                            attrs: {
                                border: "",
                                label: "Normal keys/shortcut keys"
                            }
                        }), t("el-radio", {
                            attrs: {
                                border: "",
                                label: "Multiple bonds into one"
                            }
                        }), t("el-radio", {
                            attrs: {
                                border: "",
                                label: "multimedia control"
                            }
                        })], 1)], 1)], 1), t("base-index", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: "Normal keys/shortcut keys" == e.form.setType,
                                expression: "form.setType == 'Normal keys/shortcut keys'"
                            }],
                            ref: "base",
                            on: {
                                save: e.saveSet,
                                backSet: e.backSetFnc
                            }
                        }), t("djhy-vue", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: "Multiple bonds into one" == e.form.setType,
                                expression: "form.setType == 'Multiple bonds into one'"
                            }],
                            ref: "djhy",
                            on: {
                                save: e.saveSet,
                                backSet: e.backSetFnc
                            }
                        }), t("media-vue", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: "multimedia control" == e.form.setType,
                                expression: "form.setType == 'Multimedia Control'"
                            }],
                            ref: "media",
                            on: {
                                save: e.saveSet,
                                backSet: e.backSetFnc
                            }
                        })], 1)
                    },
                    Ht = [],
                    Rt = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "base-box"
                        }, [t("el-form", {
                            ref: "form",
                            attrs: {
                                model: e.form,
                                "label-width": "140px"
                            }
                        }, [t("el-divider", [e._v("Specific settings")]), t("el-form-item", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !e.keyObj.isBLE,
                                expression: "!keyObj.isBLE"
                            }],
                            attrs: {
                                label: "Please select key action:"
                            }
                        }, [t("el-radio-group", {
                            model: {
                                value: e.form.action,
                                callback: function(t) {
                                    e.$set(e.form, "action", t)
                                },
                                expression: "form.action"
                            }
                        }, [t("el-radio", {
                            attrs: {
                                label: "Fires when a button is pressed"
                            }
                        }), t("el-radio", {
                            attrs: {
                                label: "Triggered when the button is lifted"
                            }
                        })], 1)], 1), t("el-form-item", {
                            attrs: {
                                label: "Please select a specific button:"
                            }
                        })], 1), t("key-modal", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: e.isWin,
                                expression: "isWin"
                            }],
                            on: {
                                keyAdd: e.keyAddFnc
                            }
                        }), t("key-apple-modal", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: !e.isWin,
                                expression: "!isWin"
                            }]
                        }), t("el-divider"), t("p", [e._v("Estimated key click effect:" + e._s("Fires when a button is pressed" == e.form.action ? e.keySetObj.downStr : e.keySetObj.upStr) + " ")]), t("p", {
                            staticClass: "t-r"
                        }, [t("el-button", {
                            attrs: {
                                plain: "",
                                type: "danger"
                            },
                            on: {
                                click: e.clearAll
                            }
                        }, [e._v("Clear all selections")]), t("el-button", {
                            attrs: {
                                plain: "",
                                type: "warning"
                            },
                            on: {
                                click: e.deleteLastKey
                            }
                        }, [e._v("Delete last selection")]), t("el-button", {
                            attrs: {
                                plain: ""
                            },
                            on: {
                                click: e.cancelSet
                            }
                        }, [e._v("Unset")]), t("el-button", {
                            attrs: {
                                plain: "",
                                type: "success"
                            },
                            on: {
                                click: e.confirmSelect
                            }
                        }, [e._v("Confirm settings")])], 1)], 1)
                    },
                    Wt = [],
                    Gt = function() {
                        var e = this;
                        e._self._c;
                        return e._m(0)
                    },
                    qt = [function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "keyboard-box"
                        }, [t("div", {
                            staticClass: "keyboard"
                        }, [t("div", {
                            staticClass: "row"
                        }, [t("div", {
                            staticClass: "key key__symbols",
                            staticStyle: {
                                "margin-left": "95px"
                            }
                        }, [e._v("F13")]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("F14")]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("F15")]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("F16")]), t("div", {
                            staticClass: "key key__symbols",
                            staticStyle: {
                                "margin-left": "30px"
                            }
                        }, [e._v("F17")]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("F18")]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("F19")]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("F20")]), t("div", {
                            staticClass: "key key__symbols",
                            staticStyle: {
                                "margin-left": "30px"
                            }
                        }, [e._v("F21")]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("F22")]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("F23")]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("F24")])]), t("div", {
                            staticClass: "row"
                        }, [t("div", {
                            staticClass: "key key__esc"
                        }, [e._v(" ESC ")]), t("div", {
                            staticClass: "key key__symbols",
                            staticStyle: {
                                "margin-left": "48px"
                            }
                        }, [e._v("F1")]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("F2")]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("F3")]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("F4")]), t("div", {
                            staticClass: "key key__symbols",
                            staticStyle: {
                                "margin-left": "30px"
                            }
                        }, [e._v("F5")]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("F6")]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("F7")]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("F8")]), t("div", {
                            staticClass: "key key__symbols",
                            staticStyle: {
                                "margin-left": "30px"
                            }
                        }, [e._v("F9")]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("F10")]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("F11")]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("F12")]), t("div", {
                            staticClass: "key key__symbols-sm",
                            staticStyle: {
                                "margin-left": "20px"
                            }
                        }, [e._v("PRINT"), t("br"), e._v("SCRN")]), t("div", {
                            staticClass: "key key__symbols-sm"
                        }, [e._v("SCROLL"), t("br"), e._v("LOCK")]), t("div", {
                            staticClass: "key key__symbols-sm"
                        }, [e._v("PAUSE"), t("br"), e._v("BREAK")]), t("div", {
                            staticClass: "key key__symbols-sm",
                            staticStyle: {
                                "margin-left": "21px"
                            }
                        }, [e._v("NUM"), t("br"), e._v("LOCK")]), t("div", {
                            staticClass: "key"
                        }, [e._v("/")])]), t("div", {
                            staticClass: "row"
                        }, [t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("`"), t("span", [e._v("~")])]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("! "), t("span", [e._v(" 1")])]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("@ "), t("span", [e._v(" 2")])]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("# "), t("span", [e._v(" 3")])]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("$ "), t("span", [e._v(" 4")])]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("% "), t("span", [e._v(" 5")])]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("^ "), t("span", [e._v(" 6")])]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("& "), t("span", [e._v(" 7")])]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("* "), t("span", [e._v(" 8")])]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("( "), t("span", [e._v(" 9")])]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v(") "), t("span", [e._v(" 0")])]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("_ "), t("span", [e._v(" -")])]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("+ "), t("span", [e._v(" =")])]), t("div", {
                            staticClass: "key key__delete key__icon"
                        }, [t("img", {
                            attrs: {
                                src: s(1649),
                                alt: ""
                            }
                        })]), t("div", {
                            staticClass: "key key-sm",
                            staticStyle: {
                                "margin-left": "20px"
                            }
                        }, [e._v("INSERT")]), t("div", {
                            staticClass: "key key-sm"
                        }, [e._v("HOME")]), t("div", {
                            staticClass: "key key__symbols-sm"
                        }, [e._v("PAGE"), t("br"), e._v("UP")]), t("div", {
                            staticClass: "key",
                            staticStyle: {
                                "margin-left": "21px"
                            }
                        }, [e._v("+")]), t("div", {
                            staticClass: "key"
                        }, [e._v("-")]), t("div", {
                            staticClass: "key"
                        }, [e._v("*")])]), t("div", {
                            staticClass: "row"
                        }, [t("div", {
                            staticClass: "key key__oneandhalf"
                        }, [e._v(" TAB "), t("img", {
                            staticStyle: {
                                width: "15px"
                            },
                            attrs: {
                                src: s(9185),
                                alt: ""
                            }
                        })]), t("div", {
                            staticClass: "key"
                        }, [e._v("Q")]), t("div", {
                            staticClass: "key"
                        }, [e._v("W")]), t("div", {
                            staticClass: "key"
                        }, [e._v("E")]), t("div", {
                            staticClass: "key"
                        }, [e._v("R")]), t("div", {
                            staticClass: "key"
                        }, [e._v("T")]), t("div", {
                            staticClass: "key"
                        }, [e._v("Y")]), t("div", {
                            staticClass: "key"
                        }, [e._v("U")]), t("div", {
                            staticClass: "key"
                        }, [e._v("I")]), t("div", {
                            staticClass: "key"
                        }, [e._v("O")]), t("div", {
                            staticClass: "key"
                        }, [e._v("P")]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("{ "), t("span", [e._v(" [")])]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("} "), t("span", [e._v(" ]")])]), t("div", {
                            staticClass: "key key__symbols key__oneandhalf"
                        }, [e._v("| "), t("span", [e._v(" \\")])]), t("div", {
                            staticClass: "key key-sm",
                            staticStyle: {
                                "margin-left": "20px"
                            }
                        }, [e._v("DELETE")]), t("div", {
                            staticClass: "key key-sm"
                        }, [e._v("END")]), t("div", {
                            staticClass: "key key__symbols-sm"
                        }, [e._v("PAGE"), t("br"), e._v("DOWN")]), t("div", {
                            staticClass: "key",
                            staticStyle: {
                                "margin-left": "21px"
                            }
                        }, [e._v("7")]), t("div", {
                            staticClass: "key"
                        }, [e._v("8")]), t("div", {
                            staticClass: "key"
                        }, [e._v("9")])]), t("div", {
                            staticClass: "row"
                        }, [t("div", {
                            staticClass: "key key__caps"
                        }, [e._v(" CAPSLOCK ")]), t("div", {
                            staticClass: "key"
                        }, [e._v("A")]), t("div", {
                            staticClass: "key"
                        }, [e._v("S")]), t("div", {
                            staticClass: "key"
                        }, [e._v("D")]), t("div", {
                            staticClass: "key"
                        }, [e._v("F")]), t("div", {
                            staticClass: "key"
                        }, [e._v("G")]), t("div", {
                            staticClass: "key"
                        }, [e._v("H")]), t("div", {
                            staticClass: "key"
                        }, [e._v("J")]), t("div", {
                            staticClass: "key"
                        }, [e._v("K")]), t("div", {
                            staticClass: "key"
                        }, [e._v("L")]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v(": "), t("span", [e._v(" ;")])]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v('" '), t("span", [e._v(" '")])]), t("div", {
                            staticClass: "key key__enter"
                        }, [e._v(" ENTER ")]), t("div", {
                            staticClass: "key",
                            staticStyle: {
                                "margin-left": "179px"
                            }
                        }, [e._v("4")]), t("div", {
                            staticClass: "key"
                        }, [e._v("5")]), t("div", {
                            staticClass: "key"
                        }, [e._v("6")])]), t("div", {
                            staticClass: "row"
                        }, [t("div", {
                            staticClass: "key key__shift-left"
                        }, [e._v(" SHIFT ")]), t("div", {
                            staticClass: "key"
                        }, [e._v("Z")]), t("div", {
                            staticClass: "key"
                        }, [e._v("X")]), t("div", {
                            staticClass: "key"
                        }, [e._v("C")]), t("div", {
                            staticClass: "key"
                        }, [e._v("V")]), t("div", {
                            staticClass: "key"
                        }, [e._v("B")]), t("div", {
                            staticClass: "key"
                        }, [e._v("N")]), t("div", {
                            staticClass: "key"
                        }, [e._v("M")]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("< "), t("span", [e._v(" ,")])]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("> "), t("span", [e._v(" .")])]), t("div", {
                            staticClass: "key key__symbols"
                        }, [e._v("? "), t("span", [e._v(" /")])]), t("div", {
                            staticClass: "key key__shift-right"
                        }, [e._v(" SHIFT ")]), t("div", {
                            staticClass: "key key__arrow",
                            staticStyle: {
                                "margin-left": "66px"
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(573),
                                alt: ""
                            }
                        })]), t("div", {
                            staticClass: "key",
                            staticStyle: {
                                "margin-left": "67px"
                            }
                        }, [e._v("1")]), t("div", {
                            staticClass: "key"
                        }, [e._v("2")]), t("div", {
                            staticClass: "key"
                        }, [e._v("3")])]), t("div", {
                            staticClass: "row"
                        }, [t("div", {
                            staticClass: "key key__bottom-funct"
                        }, [e._v("CTRL")]), t("div", {
                            staticClass: "key key__bottom-funct"
                        }, [e._v(" CMD ")]), t("div", {
                            staticClass: "key key__bottom-funct"
                        }, [e._v(" OPT ")]), t("div", {
                            staticClass: "key key__spacebar"
                        }), t("div", {
                            staticClass: "key key__bottom-funct"
                        }, [e._v("OPT")]), t("div", {
                            staticClass: "key key__bottom-funct"
                        }, [e._v(" CMD ")]), t("div", {
                            staticClass: "key key__bottom-funct"
                        }, [e._v(" CTRL ")]), t("div", {
                            staticClass: "key key__arrow",
                            staticStyle: {
                                "margin-left": "19px"
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(6562),
                                alt: ""
                            }
                        })]), t("div", {
                            staticClass: "key key__arrow"
                        }, [t("img", {
                            attrs: {
                                src: s(1722),
                                alt: ""
                            }
                        })]), t("div", {
                            staticClass: "key key__arrow"
                        }, [t("img", {
                            attrs: {
                                src: s(8116),
                                alt: ""
                            }
                        })]), t("div", {
                            staticClass: "key",
                            staticStyle: {
                                "margin-left": "20px"
                            }
                        }, [e._v("0")]), t("div", {
                            staticClass: "key"
                        }, [e._v(".")]), t("div", {
                            staticClass: "key key-sm"
                        }, [e._v("ENTER")])])])])
                    }],
                    Yt = {},
                    Qt = Yt,
                    Xt = (0, l.Z)(Qt, Gt, qt, !1, null, "5a81b4e7", null),
                    zt = Xt.exports,
                    es = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "keyboard-box"
                        }, [t("div", {
                            staticClass: "keyboard"
                        }, [t("div", {
                            staticClass: "row"
                        }, [t("div", {
                            staticClass: "key key__symbols",
                            staticStyle: {
                                "margin-left": "100px"
                            },
                            on: {
                                click: function(t) {
                                    return e.keyClick(104, "F13", "")
                                }
                            }
                        }, [e._v("F13")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(105, "F14", "")
                                }
                            }
                        }, [e._v("F14")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(106, "F15", "")
                                }
                            }
                        }, [e._v("F15")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(107, "F16", "")
                                }
                            }
                        }, [e._v("F16")]), t("div", {
                            staticClass: "key key__symbols",
                            staticStyle: {
                                "margin-left": "30px"
                            },
                            on: {
                                click: function(t) {
                                    return e.keyClick(108, "F17", "")
                                }
                            }
                        }, [e._v("F17")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(109, "F18", "")
                                }
                            }
                        }, [e._v("F18")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(110, "F19", "")
                                }
                            }
                        }, [e._v("F19")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(111, "F20", "")
                                }
                            }
                        }, [e._v("F20")]), t("div", {
                            staticClass: "key key__symbols",
                            staticStyle: {
                                "margin-left": "30px"
                            },
                            on: {
                                click: function(t) {
                                    return e.keyClick(112, "F21", "")
                                }
                            }
                        }, [e._v("F21")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(113, "F22", "")
                                }
                            }
                        }, [e._v("F22")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(114, "F23", "")
                                }
                            }
                        }, [e._v("F23")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(115, "F24", "")
                                }
                            }
                        }, [e._v("F24")])]), t("div", {
                            staticClass: "row"
                        }, [t("div", {
                            staticClass: "key key__esc",
                            on: {
                                click: function(t) {
                                    return e.keyClick(41, "Esc", "")
                                }
                            }
                        }, [e._v("ESC")]), t("div", {
                            staticClass: "key key__symbols",
                            staticStyle: {
                                "margin-left": "48px"
                            },
                            on: {
                                click: function(t) {
                                    return e.keyClick(58, "F1", "")
                                }
                            }
                        }, [e._v("F1")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(59, "F2", "")
                                }
                            }
                        }, [e._v("F2")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(60, "F3", "")
                                }
                            }
                        }, [e._v("F3")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(61, "F4", "")
                                }
                            }
                        }, [e._v("F4")]), t("div", {
                            staticClass: "key key__symbols",
                            staticStyle: {
                                "margin-left": "30px"
                            },
                            on: {
                                click: function(t) {
                                    return e.keyClick(62, "F5", "")
                                }
                            }
                        }, [e._v("F5")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(63, "F6", "")
                                }
                            }
                        }, [e._v("F6")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(64, "F7", "")
                                }
                            }
                        }, [e._v("F7")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(65, "F8", "")
                                }
                            }
                        }, [e._v("F8")]), t("div", {
                            staticClass: "key key__symbols",
                            staticStyle: {
                                "margin-left": "30px"
                            },
                            on: {
                                click: function(t) {
                                    return e.keyClick(66, "F9", "")
                                }
                            }
                        }, [e._v("F9")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(67, "F10", "")
                                }
                            }
                        }, [e._v("F10")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(68, "F11", "")
                                }
                            }
                        }, [e._v("F11")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(69, "F12", "")
                                }
                            }
                        }, [e._v("F12")]), t("div", {
                            staticClass: "key key__symbols-sm",
                            staticStyle: {
                                "margin-left": "20px"
                            },
                            on: {
                                click: function(t) {
                                    return e.keyClick(70, "PrintScrn", "")
                                }
                            }
                        }, [e._v("PRINT"), t("br"), e._v("SCRN")]), t("div", {
                            staticClass: "key key__symbols-sm",
                            on: {
                                click: function(t) {
                                    return e.keyClick(71, "ScrollLock", "")
                                }
                            }
                        }, [e._v("SCROLL"), t("br"), e._v("LOCK")]), t("div", {
                            staticClass: "key key__symbols-sm",
                            on: {
                                click: function(t) {
                                    return e.keyClick(72, "PauseBreak", "")
                                }
                            }
                        }, [e._v("PAUSE"), t("br"), e._v("BREAK")]), t("div", {
                            staticClass: "key key__symbols-sm",
                            staticStyle: {
                                "margin-left": "21px"
                            },
                            on: {
                                click: function(t) {
                                    return e.keyClick(83, "NumLock", "")
                                }
                            }
                        }, [e._v("NUM"), t("br"), e._v("LOCK")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(84, "/", "")
                                }
                            }
                        }, [e._v("/")])]), t("div", {
                            staticClass: "row"
                        }, [t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(53, "`~", "")
                                }
                            }
                        }, [e._v("`"), t("span", [e._v("~")])]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(30, "1!", "")
                                }
                            }
                        }, [e._v("! "), t("span", [e._v(" 1")])]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(31, "2@", "")
                                }
                            }
                        }, [e._v("@ "), t("span", [e._v(" 2")])]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(32, "3#", "")
                                }
                            }
                        }, [e._v("# "), t("span", [e._v(" 3")])]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(33, "4$", "")
                                }
                            }
                        }, [e._v("$ "), t("span", [e._v(" 4")])]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(34, "5%", "")
                                }
                            }
                        }, [e._v("% "), t("span", [e._v(" 5")])]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(35, "6^", "")
                                }
                            }
                        }, [e._v("^ "), t("span", [e._v(" 6")])]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(36, "7&", "")
                                }
                            }
                        }, [e._v("& "), t("span", [e._v(" 7")])]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(37, "8*", "")
                                }
                            }
                        }, [e._v("* "), t("span", [e._v(" 8")])]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(38, "9(", "")
                                }
                            }
                        }, [e._v("( "), t("span", [e._v(" 9")])]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    e.keyClick(39, "0)", "")
                                }
                            }
                        }, [e._v(") "), t("span", [e._v(" 0")])]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(45, "-_", "")
                                }
                            }
                        }, [e._v("_ "), t("span", [e._v(" -")])]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(46, "=+", "")
                                }
                            }
                        }, [e._v("+ "), t("span", [e._v(" =")])]), t("div", {
                            staticClass: "key key__delete key__icon",
                            on: {
                                click: function(t) {
                                    return e.keyClick(42, "Backspace", "")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(1649),
                                alt: ""
                            }
                        })]), t("div", {
                            staticClass: "key key-sm",
                            staticStyle: {
                                "margin-left": "20px"
                            },
                            on: {
                                click: function(t) {
                                    return e.keyClick(73, "Insert", "")
                                }
                            }
                        }, [e._v("INSERT")]), t("div", {
                            staticClass: "key key-sm",
                            on: {
                                click: function(t) {
                                    return e.keyClick(74, "Home", "")
                                }
                            }
                        }, [e._v("HOME")]), t("div", {
                            staticClass: "key key__symbols-sm",
                            on: {
                                click: function(t) {
                                    return e.keyClick(75, "PageUp", "")
                                }
                            }
                        }, [e._v("PAGE"), t("br"), e._v("UP")]), t("div", {
                            staticClass: "key",
                            staticStyle: {
                                "margin-left": "21px"
                            },
                            on: {
                                click: function(t) {
                                    return e.keyClick(87, "+", "")
                                }
                            }
                        }, [e._v("+")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(86, "-", "")
                                }
                            }
                        }, [e._v("-")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(85, "*", "")
                                }
                            }
                        }, [e._v("*")])]), t("div", {
                            staticClass: "row"
                        }, [t("div", {
                            staticClass: "key key__oneandhalf",
                            on: {
                                click: function(t) {
                                    return e.keyClick(43, "Tab", "")
                                }
                            }
                        }, [e._v(" TAB "), t("img", {
                            staticStyle: {
                                width: "15px"
                            },
                            attrs: {
                                src: s(9185),
                                alt: ""
                            }
                        })]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(20, "Q", "")
                                }
                            }
                        }, [e._v("Q")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(26, "W", "")
                                }
                            }
                        }, [e._v("W")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(8, "E", "")
                                }
                            }
                        }, [e._v("E")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(21, "R", "")
                                }
                            }
                        }, [e._v("R")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(23, "T", "")
                                }
                            }
                        }, [e._v("T")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(28, "Y", "")
                                }
                            }
                        }, [e._v("Y")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(24, "U", "")
                                }
                            }
                        }, [e._v("U")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(12, "I", "")
                                }
                            }
                        }, [e._v("I")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(18, "O", "")
                                }
                            }
                        }, [e._v("O")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(19, "P", "")
                                }
                            }
                        }, [e._v("P")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(47, "[{", "")
                                }
                            }
                        }, [e._v("{ "), t("span", [e._v(" [")])]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(48, "]}", "")
                                }
                            }
                        }, [e._v("} "), t("span", [e._v(" ]")])]), t("div", {
                            staticClass: "key key__symbols key__oneandhalf",
                            on: {
                                click: function(t) {
                                    return e.keyClick(49, "&#92;|", "")
                                }
                            }
                        }, [e._v("| "), t("span", [e._v(" \\")])]), t("div", {
                            staticClass: "key key-sm",
                            staticStyle: {
                                "margin-left": "20px"
                            },
                            on: {
                                click: function(t) {
                                    return e.keyClick(76, "Delete", "")
                                }
                            }
                        }, [e._v("DELETE")]), t("div", {
                            staticClass: "key key-sm",
                            on: {
                                click: function(t) {
                                    return e.keyClick(77, "End", "")
                                }
                            }
                        }, [e._v("END")]), t("div", {
                            staticClass: "key key__symbols-sm",
                            on: {
                                click: function(t) {
                                    return e.keyClick(78, "PageDown", "")
                                }
                            }
                        }, [e._v("PAGE"), t("br"), e._v("DOWN")]), t("div", {
                            staticClass: "key",
                            staticStyle: {
                                "margin-left": "21px"
                            },
                            on: {
                                click: function(t) {
                                    return e.keyClick(95, "7", "")
                                }
                            }
                        }, [e._v("7")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(96, "8", "")
                                }
                            }
                        }, [e._v("8")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(97, "9", "")
                                }
                            }
                        }, [e._v("9")])]), t("div", {
                            staticClass: "row"
                        }, [t("div", {
                            staticClass: "key key__caps",
                            on: {
                                click: function(t) {
                                    return e.keyClick(57, "CapsLock", "")
                                }
                            }
                        }, [e._v("CAPSLOCK")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(4, "A", "")
                                }
                            }
                        }, [e._v("A")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(22, "S", "")
                                }
                            }
                        }, [e._v("S")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(7, "D", "")
                                }
                            }
                        }, [e._v("D")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(9, "F", "")
                                }
                            }
                        }, [e._v("F")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(10, "G", "")
                                }
                            }
                        }, [e._v("G")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(11, "H", "")
                                }
                            }
                        }, [e._v("H")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(13, "J", "")
                                }
                            }
                        }, [e._v("J")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(14, "K", "")
                                }
                            }
                        }, [e._v("K")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(15, "L", "")
                                }
                            }
                        }, [e._v("L")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(51, ":;", "")
                                }
                            }
                        }, [e._v(": "), t("span", [e._v(" ;")])]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(52, '"&acute;', "")
                                }
                            }
                        }, [e._v('" '), t("span", [e._v(" '")])]), t("div", {
                            staticClass: "key key__enter",
                            on: {
                                click: function(t) {
                                    return e.keyClick(40, "Enter", "")
                                }
                            }
                        }, [e._v("ENTER")]), t("div", {
                            staticClass: "key",
                            staticStyle: {
                                "margin-left": "195px"
                            },
                            on: {
                                click: function(t) {
                                    return e.keyClick(92, "4", "")
                                }
                            }
                        }, [e._v("4")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(93, "5", "")
                                }
                            }
                        }, [e._v("5")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(94, "6", "")
                                }
                            }
                        }, [e._v("6")])]), t("div", {
                            staticClass: "row"
                        }, [t("div", {
                            staticClass: "key key__shift-left",
                            on: {
                                click: function(t) {
                                    return e.keyClick(2, "LeftShift", "cb")
                                }
                            }
                        }, [e._v("SHIFT")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(29, "Z", "")
                                }
                            }
                        }, [e._v("Z")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(27, "X", "")
                                }
                            }
                        }, [e._v("X")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(6, "C", "")
                                }
                            }
                        }, [e._v("C")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(25, "V", "")
                                }
                            }
                        }, [e._v("V")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(5, "B", "")
                                }
                            }
                        }, [e._v("B")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(17, "N", "")
                                }
                            }
                        }, [e._v("N")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(16, "M", "")
                                }
                            }
                        }, [e._v("M")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(54, "<,", "")
                                }
                            }
                        }, [e._v("< "), t("span", [e._v(" ,")])]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(55, ">.", "")
                                }
                            }
                        }, [e._v("> "), t("span", [e._v(" .")])]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(56, "?/", "")
                                }
                            }
                        }, [e._v("? "), t("span", [e._v(" /")])]), t("div", {
                            staticClass: "key key__shift-right",
                            on: {
                                click: function(t) {
                                    return e.keyClick(32, "RightShift", "cb")
                                }
                            }
                        }, [e._v("SHIFT")]), t("div", {
                            staticClass: "key key__arrow",
                            staticStyle: {
                                "margin-left": "72px"
                            },
                            on: {
                                click: function(t) {
                                    return e.keyClick(82, "Up", "")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(573),
                                alt: ""
                            }
                        })]), t("div", {
                            staticClass: "key",
                            staticStyle: {
                                "margin-left": "73px"
                            },
                            on: {
                                click: function(t) {
                                    return e.keyClick(89, "1", "")
                                }
                            }
                        }, [e._v("1")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(90, "2", "")
                                }
                            }
                        }, [e._v("2")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(91, "3", "")
                                }
                            }
                        }, [e._v("3")])]), t("div", {
                            staticClass: "row"
                        }, [t("div", {
                            staticClass: "key key__bottom-funct",
                            on: {
                                click: function(t) {
                                    return e.keyClick(1, "LeftCtrl", "cb")
                                }
                            }
                        }, [e._v("CTRL")]), t("div", {
                            staticClass: "key key__bottom-funct",
                            on: {
                                click: function(t) {
                                    return e.keyClick(8, "Left Win", "cb")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(1224),
                                alt: ""
                            }
                        })]), t("div", {
                            staticClass: "key key__bottom-funct",
                            on: {
                                click: function(t) {
                                    return e.keyClick(4, "LeftAlt", "cb")
                                }
                            }
                        }, [e._v("ALT")]), t("div", {
                            staticClass: "key key__spacebar",
                            on: {
                                click: function(t) {
                                    return e.keyClick(44, "Space", "")
                                }
                            }
                        }), t("div", {
                            staticClass: "key key__bottom-funct",
                            on: {
                                click: function(t) {
                                    return e.keyClick(64, "RightAlt", "cb")
                                }
                            }
                        }, [e._v("ALT")]), t("div", {
                            staticClass: "key key__bottom-funct",
                            on: {
                                click: function(t) {
                                    return e.keyClick(128, "Right Win", "cb")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(1224),
                                alt: ""
                            }
                        })]), t("div", {
                            staticClass: "key key__arrow",
                            on: {
                                click: function(t) {
                                    return e.keyClick(101, "Menu", "")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(1077),
                                alt: ""
                            }
                        })]), t("div", {
                            staticClass: "key key__bottom-funct",
                            on: {
                                click: function(t) {
                                    return e.keyClick(16, "RightCtrl", "cb")
                                }
                            }
                        }, [e._v("CTRL")]), t("div", {
                            staticClass: "key key__arrow",
                            staticStyle: {
                                "margin-left": "20px"
                            },
                            on: {
                                click: function(t) {
                                    return e.keyClick(80, "Left", "")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(6562),
                                alt: ""
                            }
                        })]), t("div", {
                            staticClass: "key key__arrow",
                            on: {
                                click: function(t) {
                                    return e.keyClick(81, "Down", "")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(1722),
                                alt: ""
                            }
                        })]), t("div", {
                            staticClass: "key key__arrow",
                            on: {
                                click: function(t) {
                                    return e.keyClick(79, "Right", "")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(8116),
                                alt: ""
                            }
                        })]), t("div", {
                            staticClass: "key",
                            staticStyle: {
                                "margin-left": "20px"
                            },
                            on: {
                                click: function(t) {
                                    return e.keyClick(98, "0", "")
                                }
                            }
                        }, [e._v("0")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(99, ".", "")
                                }
                            }
                        }, [e._v(".")]), t("div", {
                            staticClass: "key key-sm",
                            on: {
                                click: function(t) {
                                    return e.keyClick(88, "Enter", "")
                                }
                            }
                        }, [e._v("ENTER")])])])])
                    },
                    ts = [],
                    ss = {
                        methods: {
                            keyClick(e, t, s) {
                                this.$emit("keyAdd", {
                                    num: e,
                                    text: t,
                                    type: s
                                })
                            }
                        }
                    },
                    is = ss,
                    ns = (0, l.Z)(is, es, ts, !1, null, "82630fec", null),
                    as = ns.exports,
                    os = {
                        name: "BaseIndex",
                        components: {
                            keyModal: as,
                            keyAppleModal: zt
                        },
                        data() {
                            return {
                                form: {
                                    action: "Fires when a button is pressed"
                                },
                                keySetObj: {
                                    type: 1,
                                    downKeys: [],
                                    downStr: "",
                                    upKeys: [],
                                    upStr: ""
                                },
                                isWin: !0,
                                selectKeys: [],
                                indexA: 0,
                                keyObj: {}
                            }
                        },
                        methods: {
                            confirmSelect() {
                                this.keyObj.setList[this.indexA - 1] = this.keySetObj, console.log(this.keyObj), window.localStorage.setItem("keyObj", JSON.stringify(this.keyObj)), this.$emit("save")
                            },
                            init(e) {
                                this.indexA = Number.parseInt(e), this.initSetParams(), this.keyObj = JSON.parse(window.localStorage.getItem("keyObj")), console.log(this.keyObj)
                            },
                            initSetParams() {
                                this.keySetObj = {
                                    type: 1,
                                    downKeys: [],
                                    downStr: "",
                                    upKeys: [],
                                    upStr: ""
                                }
                            },
                            cancelSet() {
                                this.initSetParams(), this.$emit("backSet")
                            },
                            changeKeyboard() {
                                this.isWin = !this.isWin
                            },
                            keyAddFnc(e) {
                                const t = this;
                                if ("Fires when a button is pressed" == this.form.action) {
                                    if (t.keySetObj.downKeys.length > 5) return t.$message({
                                        type: "warning",
                                        message: "One key supports up to 6 shortcut key combinations"
                                    });
                                    t.keySetObj.downKeys.push(e), t.setShowKeys()
                                } else {
                                    if (t.keySetObj.upKeys.length > 5) return t.$message({
                                        type: "warning",
                                        message: "One key supports up to 6 shortcut key combinations"
                                    });
                                    t.keySetObj.upKeys.push(e), t.setShowKeys()
                                }
                            },
                            clearAll() {
                                const e = this;
                                "Fires when a button is pressed" == this.form.action ? (e.keySetObj.downKeys = [], e.setShowKeys()) : (e.keySetObj.upKeys = [], e.setShowKeys())
                            },
                            deleteLastKey() {
                                const e = this;
                                "Fires when a button is pressed" == this.form.action ? (e.keySetObj.downKeys.pop(), e.setShowKeys()) : (e.keySetObj.upKeys.pop(), e.setShowKeys())
                            },
                            setShowKeys() {
                                let e = "";
                                this.keySetObj.downKeys.forEach((t => {
                                    e = e + " " + t.text
                                })), this.keySetObj.downStr = e;
                                let t = "";
                                this.keySetObj.upKeys.forEach((e => {
                                    t = t + " " + e.text
                                })), this.keySetObj.upStr = t
                            }
                        }
                    },
                    rs = os,
                    ls = (0, l.Z)(rs, Rt, Wt, !1, null, "49cb1b54", null),
                    cs = ls.exports,
                    ys = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "djhy-box"
                        }, [t("el-form", {
                            ref: "form",
                            attrs: {
                                model: e.form,
                                "label-width": "140px"
                            }
                        }, [t("el-divider", [e._v("Specific settings")]), t("el-form-item", {
                            attrs: {
                                label: "Key trigger interval time:"
                            }
                        }, [t("el-input", {
                            attrs: {
                                type: "number",
                                placeholder: "1ms is one thousandth of a second"
                            },
                            model: {
                                value: e.keySetObj.time,
                                callback: function(t) {
                                    e.$set(e.keySetObj, "time", t)
                                },
                                expression: "keySetObj.time"
                            }
                        }, [t("template", {
                            slot: "append"
                        }, [e._v("ms")])], 2)], 1), t("el-form-item", {
                            attrs: {
                                label: "Number of cycle triggers:"
                            }
                        }, [t("el-input", {
                            attrs: {
                                type: "number",
                                placeholder: "Please enter the number of cycles for multi-key integration"
                            },
                            model: {
                                value: e.keySetObj.runNum,
                                callback: function(t) {
                                    e.$set(e.keySetObj, "runNum", t)
                                },
                                expression: "keySetObj.runNum"
                            }
                        }, [t("template", {
                            slot: "append"
                        }, [e._v("Enter 0 to represent an infinite loop, and the maximum number of specified loops is 255.")])], 2)], 1), t("el-form-item", {
                            attrs: {
                                label: "Please select a specific button:"
                            }
                        })], 1), t("key-djhy-modal", {
                            on: {
                                keyAdd: e.keyAddFnc
                            }
                        }), t("el-divider"), t("p", [e._v("Estimated key click effect:" + e._s(e.keySetObj.downStr) + " ")]), t("p", {
                            staticClass: "t-r"
                        }, [t("el-button", {
                            attrs: {
                                type: "danger",
                                plain: ""
                            },
                            on: {
                                click: e.clearAll
                            }
                        }, [e._v("Clear all selections")]), t("el-button", {
                            attrs: {
                                type: "warning",
                                plain: ""
                            },
                            on: {
                                click: e.deleteLastKey
                            }
                        }, [e._v("Delete last selection")]), t("el-button", {
                            attrs: {
                                plain: ""
                            },
                            on: {
                                click: e.cancelSet
                            }
                        }, [e._v("Unset")]), t("el-button", {
                            attrs: {
                                type: "success",
                                plain: ""
                            },
                            on: {
                                click: e.confirmSelect
                            }
                        }, [e._v("Confirm settings")])], 1)], 1)
                    },
                    ps = [],
                    us = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "keyboard-box"
                        }, [t("div", {
                            staticClass: "switch-box"
                        }, [t("el-switch", {
                            staticStyle: {
                                display: "block"
                            },
                            attrs: {
                                "active-color": "#13ce66",
                                "inactive-color": "#ff4949",
                                "active-text": "Show uppercase",
                                "inactive-text": "Show lowercase"
                            },
                            model: {
                                value: e.isUpper,
                                callback: function(t) {
                                    e.isUpper = t
                                },
                                expression: "isUpper"
                            }
                        })], 1), t("div", {
                            staticClass: "keyboard"
                        }, [t("div", {
                            staticClass: "row"
                        }, [t("div", {
                            staticClass: "key key__symbols",
                            staticStyle: {
                                "margin-left": "100px"
                            },
                            on: {
                                click: function(t) {
                                    return e.keyClick(104, "F13", "")
                                }
                            }
                        }, [e._v("F13")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(105, "F14", "")
                                }
                            }
                        }, [e._v("F14")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(106, "F15", "")
                                }
                            }
                        }, [e._v("F15")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(107, "F16", "")
                                }
                            }
                        }, [e._v("F16")]), t("div", {
                            staticClass: "key key__symbols",
                            staticStyle: {
                                "margin-left": "30px"
                            },
                            on: {
                                click: function(t) {
                                    return e.keyClick(108, "F17", "")
                                }
                            }
                        }, [e._v("F17")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(109, "F18", "")
                                }
                            }
                        }, [e._v("F18")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(110, "F19", "")
                                }
                            }
                        }, [e._v("F19")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(111, "F20", "")
                                }
                            }
                        }, [e._v("F20")]), t("div", {
                            staticClass: "key key__symbols",
                            staticStyle: {
                                "margin-left": "30px"
                            },
                            on: {
                                click: function(t) {
                                    return e.keyClick(112, "F21", "")
                                }
                            }
                        }, [e._v("F21")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(113, "F22", "")
                                }
                            }
                        }, [e._v("F22")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(114, "F23", "")
                                }
                            }
                        }, [e._v("F23")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(115, "F24", "")
                                }
                            }
                        }, [e._v("F24")])]), t("div", {
                            staticClass: "row"
                        }, [t("div", {
                            staticClass: "key key__esc",
                            on: {
                                click: function(t) {
                                    return e.keyClick(41, "Esc", "")
                                }
                            }
                        }, [e._v("ESC")]), t("div", {
                            staticClass: "key key__symbols",
                            staticStyle: {
                                "margin-left": "48px"
                            },
                            on: {
                                click: function(t) {
                                    return e.keyClick(58, "F1", "")
                                }
                            }
                        }, [e._v("F1")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(59, "F2", "")
                                }
                            }
                        }, [e._v("F2")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(60, "F3", "")
                                }
                            }
                        }, [e._v("F3")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(61, "F4", "")
                                }
                            }
                        }, [e._v("F4")]), t("div", {
                            staticClass: "key key__symbols",
                            staticStyle: {
                                "margin-left": "30px"
                            },
                            on: {
                                click: function(t) {
                                    return e.keyClick(62, "F5", "")
                                }
                            }
                        }, [e._v("F5")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(63, "F6", "")
                                }
                            }
                        }, [e._v("F6")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(64, "F7", "")
                                }
                            }
                        }, [e._v("F7")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(65, "F8", "")
                                }
                            }
                        }, [e._v("F8")]), t("div", {
                            staticClass: "key key__symbols",
                            staticStyle: {
                                "margin-left": "30px"
                            },
                            on: {
                                click: function(t) {
                                    return e.keyClick(66, "F9", "")
                                }
                            }
                        }, [e._v("F9")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(67, "F10", "")
                                }
                            }
                        }, [e._v("F10")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(68, "F11", "")
                                }
                            }
                        }, [e._v("F11")]), t("div", {
                            staticClass: "key key__symbols",
                            on: {
                                click: function(t) {
                                    return e.keyClick(69, "F12", "")
                                }
                            }
                        }, [e._v("F12")])]), t("div", {
                            staticClass: "row"
                        }, [t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(53, "`~", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("~")]) : t("span", [e._v("`")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(30, "1!", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("!")]) : t("span", [e._v("1")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(31, "2@", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("@")]) : t("span", [e._v("2")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(32, "3#", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("#")]) : t("span", [e._v("3")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(33, "4$", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("$")]) : t("span", [e._v("4")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(34, "5%", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("%")]) : t("span", [e._v("5")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(35, "6^", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("^")]) : t("span", [e._v("6")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(36, "7&", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("&")]) : t("span", [e._v("7")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(37, "8*", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("*")]) : t("span", [e._v("8")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(38, "9(", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("(")]) : t("span", [e._v("9")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    e.keyClick(39, "0)", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v(")")]) : t("span", [e._v("0")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(45, "-_", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("_")]) : t("span", [e._v("-")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(46, "=+", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("+")]) : t("span", [e._v("=")])]), t("div", {
                            staticClass: "key key__delete key__icon",
                            on: {
                                click: function(t) {
                                    return e.keyClick(42, "Backspace", "")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(1649),
                                alt: ""
                            }
                        })])]), t("div", {
                            staticClass: "row"
                        }, [t("div", {
                            staticClass: "key key__oneandhalf",
                            on: {
                                click: function(t) {
                                    return e.keyClick(43, "Tab", "")
                                }
                            }
                        }, [e._v(" TAB "), t("img", {
                            staticStyle: {
                                width: "15px"
                            },
                            attrs: {
                                src: s(9185),
                                alt: ""
                            }
                        })]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(20, "Q", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("Q")]) : t("span", [e._v("q")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(26, "W", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("W")]) : t("span", [e._v("w")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(8, "E", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("E")]) : t("span", [e._v("e")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(21, "R", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("R")]) : t("span", [e._v("r")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(23, "T", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("T")]) : t("span", [e._v("t")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(28, "Y", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("Y")]) : t("span", [e._v("y")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(24, "U", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("U")]) : t("span", [e._v("u")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(12, "I", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("I")]) : t("span", [e._v("i")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(18, "O", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("O")]) : t("span", [e._v("o")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(19, "P", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("P")]) : t("span", [e._v("p")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(47, "[{", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("{")]) : t("span", [e._v("[")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(48, "]}", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("}")]) : t("span", [e._v("]")])]), t("div", {
                            staticClass: "key key__oneandhalf",
                            on: {
                                click: function(t) {
                                    return e.keyClick(49, "&#92;|", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("|")]) : t("span", [e._v("\\")])])]), t("div", {
                            staticClass: "row"
                        }, [t("div", {
                            staticClass: "key key__caps",
                            on: {
                                click: function(t) {
                                    return e.keyClick(57, "CapsLock", "")
                                }
                            }
                        }, [e._v("CAPSLOCK")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(4, "A", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("A")]) : t("span", [e._v("a")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(22, "S", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("S")]) : t("span", [e._v("s")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(7, "D", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("D")]) : t("span", [e._v("d")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(9, "F", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("F")]) : t("span", [e._v("f")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(10, "G", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("G")]) : t("span", [e._v("g")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(11, "H", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("H")]) : t("span", [e._v("h")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(13, "J", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("J")]) : t("span", [e._v("j")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(14, "K", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("K")]) : t("span", [e._v("k")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(15, "L", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("L")]) : t("span", [e._v("l")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(51, ":;", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v(":")]) : t("span", [e._v(";")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(52, '"&acute;', "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v('"')]) : t("span", [e._v("'")])]), t("div", {
                            staticClass: "key key__enter",
                            on: {
                                click: function(t) {
                                    return e.keyClick(40, "Enter", "")
                                }
                            }
                        }, [e._v("ENTER")])]), t("div", {
                            staticClass: "row"
                        }, [t("div", {
                            staticClass: "key key__shift-left",
                            on: {
                                click: function(t) {
                                    return e.keyClick(202, "LeftShift", "cb")
                                }
                            }
                        }, [e._v("SHIFT")]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(29, "Z", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("Z")]) : t("span", [e._v("z")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(27, "X", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("X")]) : t("span", [e._v("x")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(6, "C", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("C")]) : t("span", [e._v("c")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(25, "V", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("V")]) : t("span", [e._v("v")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(5, "B", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("B")]) : t("span", [e._v("b")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(17, "N", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("N")]) : t("span", [e._v("n")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(16, "M", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("M")]) : t("span", [e._v("m")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(54, "<,", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("<")]) : t("span", [e._v(",")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(55, ">.", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v(">")]) : t("span", [e._v(".")])]), t("div", {
                            staticClass: "key",
                            on: {
                                click: function(t) {
                                    return e.keyClick(56, "?/", "")
                                }
                            }
                        }, [e.isUpper ? t("span", [e._v("?")]) : t("span", [e._v("/")])]), t("div", {
                            staticClass: "key key__shift-right",
                            on: {
                                click: function(t) {
                                    return e.keyClick(206, "RightShift", "cb")
                                }
                            }
                        }, [e._v("SHIFT")])]), t("div", {
                            staticClass: "row"
                        }, [t("div", {
                            staticClass: "key key__bottom-funct",
                            on: {
                                click: function(t) {
                                    return e.keyClick(201, "LeftCtrl", "cb")
                                }
                            }
                        }, [e._v("CTRL")]), t("div", {
                            staticClass: "key key__bottom-funct",
                            on: {
                                click: function(t) {
                                    return e.keyClick(204, "Left Win", "cb")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(1224),
                                alt: ""
                            }
                        })]), t("div", {
                            staticClass: "key key__bottom-funct",
                            on: {
                                click: function(t) {
                                    return e.keyClick(203, "LeftAlt", "cb")
                                }
                            }
                        }, [e._v("ALT")]), t("div", {
                            staticClass: "key key__spacebar",
                            on: {
                                click: function(t) {
                                    return e.keyClick(44, "Space", "")
                                }
                            }
                        }), t("div", {
                            staticClass: "key key__bottom-funct",
                            on: {
                                click: function(t) {
                                    return e.keyClick(207, "RightAlt", "cb")
                                }
                            }
                        }, [e._v("ALT")]), t("div", {
                            staticClass: "key key__bottom-funct",
                            on: {
                                click: function(t) {
                                    return e.keyClick(208, "Right Win", "cb")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(1224),
                                alt: ""
                            }
                        })]), t("div", {
                            staticClass: "key key__arrow",
                            on: {
                                click: function(t) {
                                    return e.keyClick(101, "Menu", "")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(1077),
                                alt: ""
                            }
                        })]), t("div", {
                            staticClass: "key key__bottom-funct",
                            on: {
                                click: function(t) {
                                    return e.keyClick(205, "RightCtrl", "cb")
                                }
                            }
                        }, [e._v("CTRL")])])])])
                    },
                    ms = [],
                    ks = {
                        data() {
                            return {
                                isUpper: !0
                            }
                        },
                        methods: {
                            keyClick(e, t, s) {
                                let i = this.$getKeyName(e, s);
                                console.log(i, t);
                                const n = this.isUpper && i.isUpDiff ? e + 128 : e,
                                    a = this.isUpper && i.isUpDiff ? i.nameUp : i.name,
                                    o = i.isCb ? "cb" : "";
                                this.$emit("keyAdd", {
                                    name: n,
                                    text: a,
                                    type: o
                                })
                            }
                        }
                    },
                    ds = ks,
                    fs = (0, l.Z)(ds, us, ms, !1, null, "5ad7b13e", null),
                    vs = fs.exports,
                    _s = {
                        name: "DjhyIndex",
                        components: {
                            keyDjhyModal: vs
                        },
                        data() {
                            return {
                                form: {
                                    action: "Fires when a button is pressed"
                                },
                                keySetObj: {
                                    type: 3,
                                    downKeys: [],
                                    downStr: "",
                                    time: 50,
                                    runNum: 1
                                },
                                isWin: !0,
                                time: 50,
                                runNum: 1,
                                selectKeys: [],
                                indexA: 0,
                                keyObj: {}
                            }
                        },
                        methods: {
                            confirmSelect() {
                                this.keyObj.setList[this.indexA - 1] = this.keySetObj, console.log(this.keyObj), window.localStorage.setItem("keyObj", JSON.stringify(this.keyObj)), this.$emit("save")
                            },
                            init(e) {
                                this.indexA = Number.parseInt(e), this.initSetParams(), this.keyObj = JSON.parse(window.localStorage.getItem("keyObj"))
                            },
                            initSetParams() {
                                this.keySetObj = {
                                    type: 3,
                                    downKeys: [],
                                    downStr: "",
                                    time: 50,
                                    runNum: 1
                                }
                            },
                            cancelSet() {
                                this.initSetParams(), this.$emit("backSet")
                            },
                            changeKeyboard() {
                                this.isWin = !this.isWin
                            },
                            keyAddFnc(e) {
                                console.log(e);
                                const t = this;
                                t.keySetObj.downKeys.push(e), t.setShowKeys()
                            },
                            clearAll() {
                                const e = this;
                                e.keySetObj.downKeys = [], e.setShowKeys()
                            },
                            deleteLastKey() {
                                const e = this;
                                e.keySetObj.downKeys.pop(), e.setShowKeys()
                            },
                            setShowKeys() {
                                let e = "";
                                this.keySetObj.downKeys.forEach((t => {
                                    e = e + " " + t.text
                                })), this.keySetObj.downStr = e
                            }
                        }
                    },
                    Cs = _s,
                    Ss = (0, l.Z)(Cs, ys, ps, !1, null, "08974273", null),
                    gs = Ss.exports,
                    ws = function() {
                        var e = this,
                            t = e._self._c;
                        return t("div", {
                            staticClass: "base-box"
                        }, [t("el-form", {
                            ref: "form",
                            attrs: {
                                model: e.form,
                                "label-width": "140px"
                            }
                        }, [t("el-divider", [e._v("Function settings")]), t("div", {
                            staticClass: "media-row"
                        }, [t("div", {
                            staticClass: "media-item",
                            class: {
                                active: -1 != e.keySetObj.downStr.indexOf("play/pause")
                            },
                            on: {
                                click: function(t) {
                                    return e.keySetFnc(52480, "play/pause")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(5300),
                                alt: "",
                                srcset: ""
                            }
                        }), t("p", [e._v("play/pause")])]), t("div", {
                            staticClass: "media-item",
                            class: {
                                active: -1 != e.keySetObj.downStr.indexOf("stop")
                            },
                            on: {
                                click: function(t) {
                                    return e.keySetFnc(46848, "stop")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(4595),
                                alt: "",
                                srcset: ""
                            }
                        }), t("p", [e._v("stop")])]), t("div", {
                            staticClass: "media-item",
                            class: {
                                active: -1 != e.keySetObj.downStr.indexOf("Previous song")
                            },
                            on: {
                                click: function(t) {
                                    return e.keySetFnc(46592, "Previous song")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(9536),
                                alt: "",
                                srcset: ""
                            }
                        }), t("p", [e._v("Previous song")])]), t("div", {
                            staticClass: "media-item",
                            class: {
                                active: -1 != e.keySetObj.downStr.indexOf("Next song")
                            },
                            on: {
                                click: function(t) {
                                    return e.keySetFnc(46336, "Next song")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(9565),
                                alt: "",
                                srcset: ""
                            }
                        }), t("p", [e._v("Next song")])]), t("div", {
                            staticClass: "media-item",
                            class: {
                                active: -1 != e.keySetObj.downStr.indexOf("Screen brightness -")
                            },
                            on: {
                                click: function(t) {
                                    return e.keySetFnc(28672, "Screen brightness -")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(559),
                                alt: "",
                                srcset: ""
                            }
                        }), t("p", [e._v("Screen brightness -")])]), t("div", {
                            staticClass: "media-item",
                            class: {
                                active: -1 != e.keySetObj.downStr.indexOf("Screen brightness+")
                            },
                            on: {
                                click: function(t) {
                                    return e.keySetFnc(28416, "Screen brightness+")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(5970),
                                alt: "",
                                srcset: ""
                            }
                        }), t("p", [e._v("Screen brightness+")])]), t("div", {
                            staticClass: "media-item",
                            class: {
                                active: -1 != e.keySetObj.downStr.indexOf("my computer")
                            },
                            on: {
                                click: function(t) {
                                    return e.keySetFnc(37889, "my computer")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(8454),
                                alt: "",
                                srcset: ""
                            }
                        }), t("p", [e._v("my computer")])])]), t("div", {
                            staticClass: "media-row"
                        }, [t("div", {
                            staticClass: "media-item",
                            class: {
                                active: -1 != e.keySetObj.downStr.indexOf("mute")
                            },
                            on: {
                                click: function(t) {
                                    return e.keySetFnc(57856, "mute")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(9869),
                                alt: "",
                                srcset: ""
                            }
                        }), t("p", [e._v("mute")])]), t("div", {
                            staticClass: "media-item",
                            class: {
                                active: -1 != e.keySetObj.downStr.indexOf("Volume +")
                            },
                            on: {
                                click: function(t) {
                                    return e.keySetFnc(59648, "Volume +")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(9038),
                                alt: "",
                                srcset: ""
                            }
                        }), t("p", [e._v("Volume +")])]), t("div", {
                            staticClass: "media-item",
                            class: {
                                active: -1 != e.keySetObj.downStr.indexOf("volume-")
                            },
                            on: {
                                click: function(t) {
                                    return e.keySetFnc(59904, "volume-")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(431),
                                alt: "",
                                srcset: ""
                            }
                        }), t("p", [e._v("volume-")])]), t("div", {
                            staticClass: "media-item",
                            class: {
                                active: -1 != e.keySetObj.downStr.indexOf("open media")
                            },
                            on: {
                                click: function(t) {
                                    return e.keySetFnc(33537, "open media")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(7024),
                                alt: "",
                                srcset: ""
                            }
                        }), t("p", [e._v("open media")])]), t("div", {
                            staticClass: "media-item",
                            class: {
                                active: -1 != e.keySetObj.downStr.indexOf("open calculator")
                            },
                            on: {
                                click: function(t) {
                                    return e.keySetFnc(37377, "open calculator")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(5770),
                                alt: "",
                                srcset: ""
                            }
                        }), t("p", [e._v("open calculator")])]), t("div", {
                            staticClass: "media-item",
                            class: {
                                active: -1 != e.keySetObj.downStr.indexOf("Open browser")
                            },
                            on: {
                                click: function(t) {
                                    return e.keySetFnc(8962, "Open browser")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(5595),
                                alt: "",
                                srcset: ""
                            }
                        }), t("p", [e._v("Open browser")])]), t("div", {
                            staticClass: "media-item",
                            class: {
                                active: -1 != e.keySetObj.downStr.indexOf("open mail")
                            },
                            on: {
                                click: function(t) {
                                    return e.keySetFnc(35329, "open mail")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(9274),
                                alt: "",
                                srcset: ""
                            }
                        }), t("p", [e._v("open mail")])])]), t("div", {
                            staticClass: "media-row"
                        }, [t("div", {
                            staticClass: "media-item",
                            class: {
                                active: -1 != e.keySetObj.downStr.indexOf("bass+")
                            },
                            on: {
                                click: function(t) {
                                    return e.keySetFnc(20993, "bass+")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(2722),
                                alt: "",
                                srcset: ""
                            }
                        }), t("p", [e._v("bass+")])]), t("div", {
                            staticClass: "media-item",
                            class: {
                                active: -1 != e.keySetObj.downStr.indexOf("bass-")
                            },
                            on: {
                                click: function(t) {
                                    return e.keySetFnc(21249, "bass-")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(2722),
                                alt: "",
                                srcset: ""
                            }
                        }), t("p", [e._v("bass-")])]), t("div", {
                            staticClass: "media-item",
                            class: {
                                active: -1 != e.keySetObj.downStr.indexOf("Treble+")
                            },
                            on: {
                                click: function(t) {
                                    return e.keySetFnc(21505, "Treble+")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(9176),
                                alt: "",
                                srcset: ""
                            }
                        }), t("p", [e._v("Treble+")])]), t("div", {
                            staticClass: "media-item",
                            class: {
                                active: -1 != e.keySetObj.downStr.indexOf("Treble -")
                            },
                            on: {
                                click: function(t) {
                                    return e.keySetFnc(21761, "Treble -")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(9176),
                                alt: "",
                                srcset: ""
                            }
                        }), t("p", [e._v("Treble -")])]), t("div", {
                            staticClass: "media-item",
                            class: {
                                active: -1 != e.keySetObj.downStr.indexOf("Web page refresh")
                            },
                            on: {
                                click: function(t) {
                                    return e.keySetFnc(9986, "Web page refresh")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(737),
                                alt: "",
                                srcset: ""
                            }
                        }), t("p", [e._v("Web page refresh")])]), t("div", {
                            staticClass: "media-item",
                            class: {
                                active: -1 != e.keySetObj.downStr.indexOf("web advance")
                            },
                            on: {
                                click: function(t) {
                                    return e.keySetFnc(9474, "web advance")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(7073),
                                alt: "",
                                srcset: ""
                            }
                        }), t("p", [e._v("web advance")])]), t("div", {
                            staticClass: "media-item",
                            class: {
                                active: -1 != e.keySetObj.downStr.indexOf("Web page back")
                            },
                            on: {
                                click: function(t) {
                                    return e.keySetFnc(9218, "Web page back")
                                }
                            }
                        }, [t("img", {
                            attrs: {
                                src: s(2911),
                                alt: "",
                                srcset: ""
                            }
                        }), t("p", [e._v("Web page back")])])])], 1), t("el-divider"), t("p", [e._v("Estimated key click effect:" + e._s("Fires when a button is pressed" == e.form.action ? e.keySetObj.downStr : e.keySetObj.upStr) + " ")]), t("p", {
                            staticClass: "t-r"
                        }, [t("el-button", {
                            attrs: {
                                plain: ""
                            },
                            on: {
                                click: e.cancelSet
                            }
                        }, [e._v("Unset")]), t("el-button", {
                            attrs: {
                                plain: "",
                                type: "success"
                            },
                            on: {
                                click: e.confirmSelect
                            }
                        }, [e._v("Confirm settings")])], 1)], 1)
                    },
                    bs = [],
                    xs = {
                        name: "MediaIndex",
                        components: {},
                        data() {
                            return {
                                form: {
                                    action: "Fires when a button is pressed"
                                },
                                keySetObj: {
                                    type: 2,
                                    downKeys: [],
                                    downStr: ""
                                },
                                isWin: !0,
                                selectKeys: [],
                                indexA: 0,
                                keyObj: {}
                            }
                        },
                        methods: {
                            confirmSelect() {
                                this.keyObj.setList[this.indexA - 1] = this.keySetObj, console.log(this.keyObj), window.localStorage.setItem("keyObj", JSON.stringify(this.keyObj)), this.$emit("save")
                            },
                            init(e) {
                                this.indexA = Number.parseInt(e), this.initSetParams(), this.keyObj = JSON.parse(window.localStorage.getItem("keyObj"))
                            },
                            initSetParams() {
                                this.keySetObj = {
                                    type: 2,
                                    downKeys: [],
                                    downStr: ""
                                }
                            },
                            cancelSet() {
                                this.initSetParams(), this.$emit("backSet")
                            },
                            changeKeyboard() {
                                this.isWin = !this.isWin
                            },
                            keySetFnc(e, t) {
                                this.keyAddFnc({
                                    num: e,
                                    text: t
                                })
                            },
                            keyAddFnc(e) {
                                this.clearAll(), console.log(e);
                                const t = this;
                                t.keySetObj.downKeys.push(e), t.setShowKeys()
                            },
                            clearAll() {
                                const e = this;
                                e.keySetObj.downKeys = [], e.setShowKeys()
                            },
                            deleteLastKey() {
                                const e = this;
                                e.keySetObj.downKeys.pop(), e.setShowKeys()
                            },
                            setShowKeys() {
                                let e = "";
                                this.keySetObj.downKeys.forEach((t => {
                                    e = e + " " + t.text
                                })), this.keySetObj.downStr = e
                            }
                        }
                    },
                    hs = xs,
                    Ks = (0, l.Z)(hs, ws, bs, !1, null, "66230b80", null),
                    Ls = Ks.exports,
                    Os = {
                        name: "SetView",
                        components: {
                            BaseIndex: cs,
                            djhyVue: gs,
                            mediaVue: Ls
                        },
                        data() {
                            return {
                                showList: !1,
                                dialogVisible: !1,
                                isWin: !0,
                                form: {
                                    setType: "Normal keys/shortcut keys"
                                },
                                indexA: 0
                            }
                        },
                        created() {
                            console.log(this.indexA)
                        },
                        methods: {
                            saveSet() {
                                this.$emit("save")
                            },
                            setIndex(e) {
                                this.indexA = e, this.$refs.base.init(e), this.$refs.djhy.init(e), this.$refs.media.init(e)
                            },
                            backSetFnc() {
                                this.$emit("backSet")
                            }
                        }
                    },
                    Us = Os,
                    Is = (0, l.Z)(Us, Zt, Ht, !1, null, "72bfb99d", null),
                    js = Is.exports,
                    Fs = {
                        name: "HomeView",
                        components: {
                            SetIndex: js,
                            MainVew: Vt
                        },
                        data() {
                            return {
                                fullscreenLoading: !1,
                                isSetting: !1,
                                isConnet: !1,
                                connect: !1,
                                device: null,
                                keyMsg: {
                                    tagA: 0,
                                    tagB: 0
                                },
                                keyTypeMsg: {}
                            }
                        },
                        created() {},
                        async mounted() {
                            this.navigator = window.navigator, this.navigator.hid.addEventListener("connet", this.connectKeyboardEvent), this.navigator.hid.addEventListener("disconnet", this.disconnectKeyboardEvent)
                        },
                        methods: {
                            downloadWin() {
                                window.open("http://xf.xuanfang.co/xfp-win.zip", "_blank")
                            },
                            downloadMac() {
                                window.open("http://xf.xuanfang.co/xfp-mac.zip", "_blank")
                            },
                            updateView() {
                                this.isSetting = !1, this.$refs.main.init()
                            },
                            openSet(e) {
                                this.isSetting = !0, this.$refs.set.setIndex(e)
                            },
                            async saveSet(e) {
                                console.log(e), this.fullscreenLoading = !0, await this.requestSaveKey(new Uint8Array(e.arr1)), await this.requestSaveKey(new Uint8Array(e.arr2)), await this.requestSaveKey(new Uint8Array(e.arr3)), await this.confirmSave()
                            },
                            async saveSetBLE(e) {
                                console.log(e.allKey);
                                const t = this;
                                this.fullscreenLoading = !0;
                                try {
                                    for (const s of e.allKey) await t.requestSaveKey(new Uint8Array(s))
                                } catch (s) {
                                    console.error("Sending failed:", s)
                                } finally {
                                    setTimeout((() => {
                                        t.fullscreenLoading = !1;
                                        const e = t.$createElement;
                                        t.$notify({
                                            message: e("i", {
                                                style: "color: teal"
                                            }, "Saved successfully"),
                                            duration: 1e3
                                        })
                                    }), 300)
                                }
                            },
                            backSetFnc() {
                                this.isSetting = !1
                            },
                            getBrowserName() {
                                const e = window.navigator.userAgent,
                                    t = t => e.indexOf(t) > -1;
                                return t("MSIE") ? "IE" : t("Firefox") ? "Firefox" : t("Chrome") ? "Chrome" : t("Opera") ? "Opera" : t("Safari") ? "Safari" : void 0
                            },
                            findKeyboard() {
                                if (!("hid" in this.navigator)) return this.$message({
                                    message: "The current browser does not support USB device configuration. Please switch to the latest 360, Edge, and Google Chrome before using it.",
                                    type: "error",
                                    duration: 3e4,
                                    showClose: !0
                                }), !1;
                                this.connectKeyboard()
                            },
                            async connectKeyboard() {
                                const e = this,
                                    t = await this.navigator.hid.requestDevice({
                                        filters: [{
                                            vendorId: "0xaf88",
                                            productId: "0x6688"
                                        }]
                                    });
                                return t && 0 !== t.length ? (t.forEach((t => t.collections ? t.collections.length < 1 ? console.log("The length of collections is less than 1, skip") : t.collections[0] && 65280 === t.collections[0].usagePage ? e.device = t : void 0 : console.log("collections is empty, skip"))), await e.device.open(), e.device.opened ? (e.connect = !0, console.log("open success"), void await e.getKeyboardMsg()) : (e.connect = !1, e.$message({
                                    message: "Initialization failed, please click again",
                                    type: "error",
                                    duration: 3e3
                                }), !1)) : (this.$message({
                                    message: "Please select the keyboard that needs to be configured",
                                    type: "error",
                                    duration: 2e3
                                }), !1)
                            },
                            async connectKeyboardEvent(e) {
                                console.log("open"), e.device.opened || (this.device = e.device, await this.device.open())
                            },
                            async disconnectKeyboardEvent(e) {
                                console.log("close"), e.device.opened && (this.device = null, await e.device.close())
                            },
                            async requestSaveKey(e) {
                                return await this.device.sendReport(0, e), new Promise(((e, t) => {
                                    function s(s) {
                                        const i = new Uint8Array(s.data.buffer)[0];
                                        175 === i ? (console.log("success"), e(!0)) : (console.log("error"), t(!1))
                                    }
                                    this.device.oninputreport = s
                                }))
                            },
                            async confirmSave() {
                                const e = this;
                                return await this.device.sendReport(0, new Uint8Array([175, 4])), new Promise(((t, s) => {
                                    function i(i) {
                                        const n = new Uint8Array(i.data.buffer)[0];
                                        setTimeout((() => {
                                            e.fullscreenLoading = !1;
                                            const t = e.$createElement;
                                            e.$notify({
                                                message: t("i", {
                                                    style: "color: teal"
                                                }, "Saved successfully"),
                                                duration: 1e3
                                            })
                                        }), 300), 175 === n ? (console.log("success"), t(!0)) : (console.log("error"), s(!1))
                                    }
                                    this.device.oninputreport = i
                                }))
                            },
                            async getKeyboardMsg() {
                                const e = this,
                                    t = new Uint8Array([175, 1]);
                                return await e.device.sendReport(0, t), new Promise(((t, s) => {
                                    function i(i) {
                                        const n = new Uint8Array(i.data.buffer)[0];
                                        e.keyMsg = {
                                            tagA: new Uint8Array(i.data.buffer)[2],
                                            tagB: new Uint8Array(i.data.buffer)[3]
                                        }, console.log(e.keyMsg.tagA, e.keyMsg.tagB), e.keyTypeMsg = e.$getKeyType(e.keyMsg.tagA, e.keyMsg.tagB);
                                        let a = "undefined" != window.localStorage.getItem("keyObj") ? JSON.parse(window.localStorage.getItem("keyObj")) : {};
                                        a && e.keyTypeMsg && a.type == e.keyTypeMsg.type && (e.keyTypeMsg = a), window.localStorage.setItem("keyObj", JSON.stringify(e.keyTypeMsg)), e.isConnet = !0, e.$nextTick((() => {
                                            e.$refs.main.init(e.keyTypeMsg)
                                        })), 175 === n ? (console.log("get msg success"), t(!0)) : (console.log(2), s(!1))
                                    }
                                    e.device.oninputreport = i
                                }))
                            }
                        },
                        async beforeDestroy() {
                            this.device && this.device.opened && (await this.device.close(), this.device = null, this.connect = !1)
                        }
                    },
                    $s = Fs,
                    Ds = (0, l.Z)($s, u, m, !1, null, "1f6978a0", null),
                    Ts = Ds.exports;
                i["default"].use(p.ZP);
                const As = [{
                        path: "/",
                        name: "home",
                        component: Ts
                    }, {
                        path: "/main",
                        name: "main",
                        component: Vt
                    }, {
                        path: "/set",
                        name: "set",
                        component: js
                    }, {
                        path: "/about",
                        name: "about",
                        component: () => s.e(443).then(s.bind(s, 5399))
                    }],
                    Es = new p.ZP({
                        routes: As
                    });
                var Bs = Es,
                    Ns = s(3822);
                i["default"].use(Ns.ZP);
                var Ps = new Ns.ZP.Store({
                        state: {
                            device: null
                        },
                        getters: {},
                        mutations: {},
                        actions: {},
                        modules: {}
                    }),
                    Js = s(8499),
                    Ms = s.n(Js),
                    Vs = JSON.parse('[{"name":"1键","type":"one-key","tagA":1,"tagB":17,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""}],"showText":[]},{"name":"大1键","type":"big-one","tagA":1,"tagB":18,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""}],"showText":[]},{"name":"2键","type":"two-one","tagA":2,"tagB":17,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":5,"text":"B"}],"downStr":"B","upKeys":[],"upStr":""}],"showText":[]},{"name":"2键","type":"two-one","tagA":2,"tagB":4,"isBLE":true,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":5,"text":"B"}],"downStr":"B","upKeys":[],"upStr":""}],"showText":[]},{"name":"2键","type":"two-one","tagA":2,"tagB":33,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":5,"text":"B"}],"downStr":"B","upKeys":[],"upStr":""}],"showText":[]},{"name":"3键","type":"three-one","tagA":3,"tagB":17,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":5,"text":"B"}],"downStr":"B","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":6,"text":"C"}],"downStr":"C","upKeys":[],"upStr":""}],"showText":[]},{"name":"3键2+1","type":"three-two","tagA":3,"tagB":19,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":5,"text":"B"}],"downStr":"B","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":6,"text":"C"}],"downStr":"C","upKeys":[],"upStr":""}],"showText":[]},{"name":"3键","type":"three-one","tagA":3,"tagB":33,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":5,"text":"B"}],"downStr":"B","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":6,"text":"C"}],"downStr":"C","upKeys":[],"upStr":""}],"showText":[]},{"name":"长条4键","type":"four-one","tagA":4,"tagB":33,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":5,"text":"B"}],"downStr":"B","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":6,"text":"C"}],"downStr":"C","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":7,"text":"D"}],"downStr":"D","upKeys":[],"upStr":""}],"showText":[]},{"name":"长条4键","type":"four-one","tagA":4,"tagB":17,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":5,"text":"B"}],"downStr":"B","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":6,"text":"C"}],"downStr":"C","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":7,"text":"D"}],"downStr":"D","upKeys":[],"upStr":""}],"showText":[]},{"name":"方向4键","type":"four-fx","tagA":4,"tagB":20,"setList":[{"type":1,"downKeys":[{"type":"","num":82,"text":"Up"}],"downStr":"Up","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":80,"text":"Left"}],"downStr":"Left","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":81,"text":"Down"}],"downStr":"Down","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":79,"text":"Right"}],"downStr":"Right","upKeys":[],"upStr":""}],"showText":[]},{"name":"方向4键","type":"four-fx","tagA":4,"tagB":18,"setList":[{"type":1,"downKeys":[{"type":"","num":82,"text":"Up"}],"downStr":"Up","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":80,"text":"Left"}],"downStr":"Left","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":81,"text":"Down"}],"downStr":"Down","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":79,"text":"Right"}],"downStr":"Right","upKeys":[],"upStr":""}],"showText":[]},{"name":"汤圆4键","type":"four-ty","tagA":4,"tagB":19,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":5,"text":"B"}],"downStr":"B","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":6,"text":"C"}],"downStr":"C","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":7,"text":"D"}],"downStr":"D","upKeys":[],"upStr":""}],"showText":[]},{"name":"长条5键","type":"five-one","tagA":5,"tagB":33,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":5,"text":"B"}],"downStr":"B","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":6,"text":"C"}],"downStr":"C","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":7,"text":"D"}],"downStr":"D","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":8,"text":"E"}],"downStr":"E","upKeys":[],"upStr":""}],"showText":[]},{"name":"双排5键","type":"five-three","tagA":5,"tagB":34,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":5,"text":"B"}],"downStr":"B","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":6,"text":"C"}],"downStr":"C","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":7,"text":"D"}],"downStr":"D","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":8,"text":"E"}],"downStr":"E","upKeys":[],"upStr":""}],"showText":[]},{"name":"两键高配","type":"two-high","tagA":2,"tagB":2,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":5,"text":"B"}],"downStr":"B","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":6,"text":"C"}],"downStr":"C","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":7,"text":"D"}],"downStr":"D","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":8,"text":"E"}],"downStr":"E","upKeys":[],"upStr":""}],"showText":[]},{"name":"两排6键","type":"six-two","tagA":6,"tagB":33,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":5,"text":"B"}],"downStr":"B","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":6,"text":"C"}],"downStr":"C","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":7,"text":"D"}],"downStr":"D","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":8,"text":"E"}],"downStr":"E","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":9,"text":"F"}],"downStr":"F","upKeys":[],"upStr":""}],"showText":[]},{"name":"两排6键","type":"six-two","tagA":6,"tagB":17,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":5,"text":"B"}],"downStr":"B","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":6,"text":"C"}],"downStr":"C","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":7,"text":"D"}],"downStr":"D","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":8,"text":"E"}],"downStr":"E","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":9,"text":"F"}],"downStr":"F","upKeys":[],"upStr":""}],"showText":[]},{"name":"4+2两排6键","type":"six-four-two","tagA":6,"tagB":19,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":5,"text":"B"}],"downStr":"B","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":6,"text":"C"}],"downStr":"C","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":7,"text":"D"}],"downStr":"D","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":8,"text":"E"}],"downStr":"E","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":9,"text":"F"}],"downStr":"F","upKeys":[],"upStr":""}],"showText":[]},{"name":"长条6键","type":"six-one","tagA":6,"tagB":18,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":5,"text":"B"}],"downStr":"B","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":6,"text":"C"}],"downStr":"C","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":7,"text":"D"}],"downStr":"D","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":8,"text":"E"}],"downStr":"E","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":9,"text":"F"}],"downStr":"F","upKeys":[],"upStr":""}],"showText":[]},{"name":"7键","type":"seven-one","tagA":7,"tagB":17,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":5,"text":"B"}],"downStr":"B","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":6,"text":"C"}],"downStr":"C","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":7,"text":"D"}],"downStr":"D","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":8,"text":"E"}],"downStr":"E","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":9,"text":"F"}],"downStr":"F","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":10,"text":"G"}],"downStr":"G","upKeys":[],"upStr":""}],"showText":[]},{"name":"8键","type":"eight-two","tagA":8,"tagB":33,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":5,"text":"B"}],"downStr":"B","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":6,"text":"C"}],"downStr":"C","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":7,"text":"D"}],"downStr":"D","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":8,"text":"E"}],"downStr":"E","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":9,"text":"F"}],"downStr":"F","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":10,"text":"G"}],"downStr":"G","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":11,"text":"H"}],"downStr":"H","upKeys":[],"upStr":""}],"showText":[]},{"name":"8键","type":"eight-two","tagA":8,"tagB":17,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":5,"text":"B"}],"downStr":"B","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":6,"text":"C"}],"downStr":"C","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":7,"text":"D"}],"downStr":"D","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":8,"text":"E"}],"downStr":"E","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":9,"text":"F"}],"downStr":"F","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":10,"text":"G"}],"downStr":"G","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":11,"text":"H"}],"downStr":"H","upKeys":[],"upStr":""}],"showText":[]},{"name":"9键","type":"nine-three","tagA":9,"tagB":17,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":5,"text":"B"}],"downStr":"B","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":6,"text":"C"}],"downStr":"C","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":7,"text":"D"}],"downStr":"D","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":8,"text":"E"}],"downStr":"E","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":9,"text":"F"}],"downStr":"F","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":10,"text":"G"}],"downStr":"G","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":11,"text":"H"}],"downStr":"H","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":12,"text":"I"}],"downStr":"I","upKeys":[],"upStr":""}],"showText":[]},{"name":"9键","type":"nine-three","tagA":9,"tagB":18,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":5,"text":"B"}],"downStr":"B","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":6,"text":"C"}],"downStr":"C","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":7,"text":"D"}],"downStr":"D","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":8,"text":"E"}],"downStr":"E","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":9,"text":"F"}],"downStr":"F","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":10,"text":"G"}],"downStr":"G","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":11,"text":"H"}],"downStr":"H","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":12,"text":"I"}],"downStr":"I","upKeys":[],"upStr":""}],"showText":[]},{"name":"9键","type":"nine-three","tagA":9,"tagB":19,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":5,"text":"B"}],"downStr":"B","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":6,"text":"C"}],"downStr":"C","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":7,"text":"D"}],"downStr":"D","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":8,"text":"E"}],"downStr":"E","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":9,"text":"F"}],"downStr":"F","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":10,"text":"G"}],"downStr":"G","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":11,"text":"H"}],"downStr":"H","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":12,"text":"I"}],"downStr":"I","upKeys":[],"upStr":""}],"showText":[]},{"name":"10键","type":"ten-25","tagA":10,"tagB":17,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":5,"text":"B"}],"downStr":"B","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":6,"text":"C"}],"downStr":"C","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":7,"text":"D"}],"downStr":"D","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":8,"text":"E"}],"downStr":"E","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":9,"text":"F"}],"downStr":"F","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":10,"text":"G"}],"downStr":"G","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":11,"text":"H"}],"downStr":"H","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":12,"text":"I"}],"downStr":"I","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":13,"text":"J"}],"downStr":"J","upKeys":[],"upStr":""}],"showText":[]},{"name":"10键442","type":"ten-442","tagA":10,"tagB":18,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":5,"text":"B"}],"downStr":"B","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":6,"text":"C"}],"downStr":"C","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":7,"text":"D"}],"downStr":"D","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":8,"text":"E"}],"downStr":"E","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":9,"text":"F"}],"downStr":"F","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":10,"text":"G"}],"downStr":"G","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":11,"text":"H"}],"downStr":"H","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":12,"text":"I"}],"downStr":"I","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":13,"text":"J"}],"downStr":"J","upKeys":[],"upStr":""}],"showText":[]},{"name":"12键","type":"twelve-two","tagA":12,"tagB":18,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":5,"text":"B"}],"downStr":"B","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":6,"text":"C"}],"downStr":"C","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":7,"text":"D"}],"downStr":"D","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":8,"text":"E"}],"downStr":"E","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":9,"text":"F"}],"downStr":"F","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":10,"text":"G"}],"downStr":"G","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":11,"text":"H"}],"downStr":"H","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":12,"text":"I"}],"downStr":"I","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":13,"text":"J"}],"downStr":"J","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":14,"text":"K"}],"downStr":"K","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":15,"text":"L"}],"downStr":"L","upKeys":[],"upStr":""}],"showText":[]},{"name":"12键","type":"twelve-four","tagA":12,"tagB":17,"setList":[{"type":1,"downKeys":[{"type":"","num":4,"text":"A"}],"downStr":"A","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":5,"text":"B"}],"downStr":"B","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":6,"text":"C"}],"downStr":"C","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":7,"text":"D"}],"downStr":"D","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":8,"text":"E"}],"downStr":"E","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":9,"text":"F"}],"downStr":"F","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":10,"text":"G"}],"downStr":"G","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":11,"text":"H"}],"downStr":"H","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":12,"text":"I"}],"downStr":"I","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":13,"text":"J"}],"downStr":"J","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":14,"text":"K"}],"downStr":"K","upKeys":[],"upStr":""},{"type":1,"downKeys":[{"type":"","num":15,"text":"L"}],"downStr":"L","upKeys":[],"upStr":""}],"showText":[]}]');

                function Zs(e, t) {
                    let s = null;
                    return Vs.forEach((i => {
                        i.tagA == e && i.tagB == t && (s = i)
                    })), s
                }
                var Hs = {
                        getKeyType: Zs
                    },
                    Rs = JSON.parse('[{"value":104,"name":"F13","nameUp":"F13","isUpDiff":false,"isCb":false},{"value":105,"name":"F14","nameUp":"F14","isUpDiff":false,"isCb":false},{"value":106,"name":"F15","nameUp":"F15","isUpDiff":false,"isCb":false},{"value":107,"name":"F16","nameUp":"F16","isUpDiff":false,"isCb":false},{"value":108,"name":"F17","nameUp":"","isUpDiff":false,"isCb":false},{"value":109,"name":"F18","nameUp":"","isUpDiff":false,"isCb":false},{"value":110,"name":"F19","nameUp":"","isUpDiff":false,"isCb":false},{"value":111,"name":"F20","nameUp":"","isUpDiff":false,"isCb":false},{"value":112,"name":"F21","nameUp":"","isUpDiff":false,"isCb":false},{"value":113,"name":"F22","nameUp":"","isUpDiff":false,"isCb":false},{"value":114,"name":"F23","nameUp":"","isUpDiff":false,"isCb":false},{"value":115,"name":"F24","nameUp":"","isUpDiff":false,"isCb":false},{"value":41,"name":"Esc","nameUp":"","isUpDiff":false,"isCb":false},{"value":58,"name":"F1","nameUp":"","isUpDiff":false,"isCb":false},{"value":59,"name":"F2","nameUp":"","isUpDiff":false,"isCb":false},{"value":60,"name":"F3","nameUp":"","isUpDiff":false,"isCb":false},{"value":61,"name":"F4","nameUp":"","isUpDiff":false,"isCb":false},{"value":62,"name":"F5","nameUp":"","isUpDiff":false,"isCb":false},{"value":63,"name":"F6","nameUp":"","isUpDiff":false,"isCb":false},{"value":64,"name":"F7","nameUp":"","isUpDiff":false,"isCb":false},{"value":65,"name":"F8","nameUp":"","isUpDiff":false,"isCb":false},{"value":66,"name":"F9","nameUp":"","isUpDiff":false,"isCb":false},{"value":67,"name":"F10","nameUp":"","isUpDiff":false,"isCb":false},{"value":68,"name":"F11","nameUp":"","isUpDiff":false,"isCb":false},{"value":69,"name":"F12","nameUp":"","isUpDiff":false,"isCb":false},{"value":70,"name":"PrintScrn","nameUp":"","isUpDiff":false,"isCb":false},{"value":71,"name":"ScrollLock","nameUp":"","isUpDiff":false,"isCb":false},{"value":72,"name":"PauseBreak","nameUp":"","isUpDiff":false,"isCb":false},{"value":83,"name":"NumLock","nameUp":"","isUpDiff":false,"isCb":false},{"value":84,"name":"/","nameUp":"","isUpDiff":false,"isCb":false},{"value":53,"name":"`","nameUp":"~","isUpDiff":true,"isCb":false},{"value":30,"name":"1","nameUp":"!","isUpDiff":true,"isCb":false},{"value":31,"name":"2","nameUp":"@","isUpDiff":true,"isCb":false},{"value":32,"name":"3","nameUp":"#","isUpDiff":true,"isCb":false},{"value":33,"name":"4","nameUp":"$","isUpDiff":true,"isCb":false},{"value":34,"name":"5","nameUp":"%","isUpDiff":true,"isCb":false},{"value":35,"name":"6","nameUp":"^","isUpDiff":true,"isCb":false},{"value":36,"name":"7","nameUp":"&amp;","isUpDiff":true,"isCb":false},{"value":37,"name":"8","nameUp":"*","isUpDiff":true,"isCb":false},{"value":38,"name":"9","nameUp":"(","isUpDiff":true,"isCb":false},{"value":39,"name":"0","nameUp":")","isUpDiff":true,"isCb":false},{"value":45,"name":"-","nameUp":"_","isUpDiff":true,"isCb":false},{"value":46,"name":"=","nameUp":"+","isUpDiff":true,"isCb":false},{"value":42,"name":"Backspace","nameUp":"","isUpDiff":false,"isCb":false},{"value":73,"name":"Insert","nameUp":"","isUpDiff":false,"isCb":false},{"value":74,"name":"Home","nameUp":"","isUpDiff":false,"isCb":false},{"value":75,"name":"PageUp","nameUp":"","isUpDiff":false,"isCb":false},{"value":87,"name":"+","nameUp":"","isUpDiff":false,"isCb":false},{"value":86,"name":"-","nameUp":"","isUpDiff":false,"isCb":false},{"value":85,"name":"*","nameUp":"","isUpDiff":false,"isCb":false},{"value":43,"name":"Tab","nameUp":"","isUpDiff":false,"isCb":false},{"value":20,"name":"q","nameUp":"Q","isUpDiff":true,"isCb":false},{"value":26,"name":"w","nameUp":"W","isUpDiff":true,"isCb":false},{"value":8,"name":"e","nameUp":"E","isUpDiff":true,"isCb":false},{"value":21,"name":"r","nameUp":"R","isUpDiff":true,"isCb":false},{"value":23,"name":"t","nameUp":"T","isUpDiff":true,"isCb":false},{"value":28,"name":"y","nameUp":"Y","isUpDiff":true,"isCb":false},{"value":24,"name":"u","nameUp":"U","isUpDiff":true,"isCb":false},{"value":12,"name":"i","nameUp":"I","isUpDiff":true,"isCb":false},{"value":18,"name":"o","nameUp":"O","isUpDiff":true,"isCb":false},{"value":19,"name":"p","nameUp":"P","isUpDiff":true,"isCb":false},{"value":47,"name":"[","nameUp":"{","isUpDiff":true,"isCb":false},{"value":48,"name":"]","nameUp":"}","isUpDiff":true,"isCb":false},{"value":49,"name":"&#92;","nameUp":"|","isUpDiff":true,"isCb":false},{"value":76,"name":"Delete","nameUp":"","isUpDiff":false,"isCb":false},{"value":77,"name":"End","nameUp":"","isUpDiff":false,"isCb":false},{"value":78,"name":"PageDown","nameUp":"","isUpDiff":false,"isCb":false},{"value":95,"name":"7","nameUp":"","isUpDiff":false,"isCb":false},{"value":96,"name":"8","nameUp":"","isUpDiff":false,"isCb":false},{"value":97,"name":"9","nameUp":"","isUpDiff":false,"isCb":false},{"value":57,"name":"CapsLock","nameUp":"","isUpDiff":false,"isCb":false},{"value":4,"name":"a","nameUp":"A","isUpDiff":true,"isCb":false},{"value":22,"name":"s","nameUp":"S","isUpDiff":true,"isCb":false},{"value":7,"name":"d","nameUp":"D","isUpDiff":true,"isCb":false},{"value":9,"name":"f","nameUp":"F","isUpDiff":true,"isCb":false},{"value":10,"name":"g","nameUp":"G","isUpDiff":true,"isCb":false},{"value":11,"name":"h","nameUp":"H","isUpDiff":true,"isCb":false},{"value":13,"name":"j","nameUp":"J","isUpDiff":true,"isCb":false},{"value":14,"name":"k","nameUp":"K","isUpDiff":true,"isCb":false},{"value":15,"name":"l","nameUp":"L","isUpDiff":true,"isCb":false},{"value":51,"name":";","nameUp":":","isUpDiff":true,"isCb":false},{"value":52,"name":"&acute;","nameUp":"&quot;","isUpDiff":true,"isCb":false},{"value":40,"name":"Enter","nameUp":"","isUpDiff":false,"isCb":false},{"value":92,"name":"4","nameUp":"","isUpDiff":false,"isCb":false},{"value":93,"name":"5","nameUp":"","isUpDiff":false,"isCb":false},{"value":94,"name":"6","nameUp":"","isUpDiff":false,"isCb":false},{"value":2,"name":"LeftShift","nameUp":"","isUpDiff":false,"isCb":true},{"value":29,"name":"z","nameUp":"Z","isUpDiff":true,"isCb":false},{"value":27,"name":"x","nameUp":"X","isUpDiff":true,"isCb":false},{"value":6,"name":"c","nameUp":"C","isUpDiff":true,"isCb":false},{"value":25,"name":"v","nameUp":"V","isUpDiff":true,"isCb":false},{"value":5,"name":"b","nameUp":"B","isUpDiff":true,"isCb":false},{"value":17,"name":"n","nameUp":"N","isUpDiff":true,"isCb":false},{"value":16,"name":"m","nameUp":"M","isUpDiff":true,"isCb":false},{"value":54,"name":",","nameUp":"<","isUpDiff":true,"isCb":false},{"value":55,"name":".","nameUp":">","isUpDiff":true,"isCb":false},{"value":56,"name":"/","nameUp":"?","isUpDiff":true,"isCb":false},{"value":32,"name":"RightShift","nameUp":"","isUpDiff":false,"isCb":true},{"value":82,"name":"Up","nameUp":"","isUpDiff":false,"isCb":false},{"value":89,"name":"1","nameUp":"","isUpDiff":false,"isCb":false},{"value":90,"name":"2","nameUp":"","isUpDiff":false,"isCb":false},{"value":91,"name":"3","nameUp":"","isUpDiff":false,"isCb":false},{"value":1,"name":"LeftCtrl","nameUp":"","isUpDiff":false,"isCb":true},{"value":8,"name":"Left Win","nameUp":"","isUpDiff":false,"isCb":true},{"value":4,"name":"LeftAlt","nameUp":"","isUpDiff":false,"isCb":true},{"value":44,"name":"Space","nameUp":"","isUpDiff":false,"isCb":false},{"value":64,"name":"RightAlt","nameUp":"","isUpDiff":false,"isCb":true},{"value":128,"name":"Right Win","nameUp":"","isUpDiff":false,"isCb":true},{"value":101,"name":"Menu","nameUp":"","isUpDiff":false,"isCb":false},{"value":16,"name":"RightCtrl","nameUp":"","isUpDiff":false,"isCb":true},{"value":80,"name":"Left","nameUp":"","isUpDiff":false,"isCb":false},{"value":81,"name":"Down","nameUp":"","isUpDiff":false,"isCb":false},{"value":79,"name":"Right","nameUp":"","isUpDiff":false,"isCb":false},{"value":98,"name":"0","nameUp":"","isUpDiff":false,"isCb":false},{"value":99,"name":".","nameUp":"","isUpDiff":false,"isCb":false},{"value":88,"name":"Enter","nameUp":"","isUpDiff":false,"isCb":false},{"value":201,"name":"LeftCtrl","nameUp":"","isUpDiff":false,"isCb":true},{"value":202,"name":"LeftShift","nameUp":"","isUpDiff":false,"isCb":true},{"value":203,"name":"LeftAlt","nameUp":"","isUpDiff":false,"isCb":true},{"value":204,"name":"Left Win","nameUp":"","isUpDiff":false,"isCb":true},{"value":205,"name":"RightCtrl","nameUp":"","isUpDiff":false,"isCb":true},{"value":206,"name":"RightShift","nameUp":"","isUpDiff":false,"isCb":true},{"value":207,"name":"RightAlt","nameUp":"","isUpDiff":false,"isCb":true},{"value":208,"name":"Right Win","nameUp":"","isUpDiff":false,"isCb":true}]');

                function Ws(e, t) {
                    console.log(e);
                    let s = null,
                        i = "cb" == t;
                    return Rs.forEach((t => {
                        t.value == e && t.isCb == i && (s = t)
                    })), s || {}
                }
                var Gs = {
                    getKeyName: Ws
                };
                i["default"].prototype.$getKeyType = Hs.getKeyType, i["default"].prototype.$getKeyName = Gs.getKeyName, i["default"].config.productionTip = !1, i["default"].use(Ms()), new i["default"]({
                    router: Bs,
                    store: Ps,
                    render: e => e(y)
                }).$mount("#app")
            },
            3755: function(e, t, s) {
                e.exports = s.p + "assets/img/apple.b24a9619.svg"
            },
            7258: function(e, t, s) {
                e.exports = s.p + "assets/img/key2.10784375.svg"
            },
            1649: function(e, t, s) {
                e.exports = s.p + "assets/img/backspace.26109797.svg"
            },
            1722: function(e, t, s) {
                e.exports = s.p + "assets/img/down.f9069a8f.svg"
            },
            1077: function(e, t, s) {
                e.exports = s.p + "assets/img/file.8f5c540b.svg"
            },
            6562: function(e, t, s) {
                e.exports = s.p + "assets/img/left.a12a4b65.svg"
            },
            8116: function(e, t, s) {
                e.exports = s.p + "assets/img/right.4d8a14db.svg"
            },
            9185: function(e, t, s) {
                e.exports = s.p + "assets/img/tab.7ef6c664.svg"
            },
            573: function(e, t, s) {
                e.exports = s.p + "assets/img/top.90567657.svg"
            },
            1224: function(e, t, s) {
                e.exports = s.p + "assets/img/win.24058b31.svg"
            },
            2911: function(e, t, s) {
                e.exports = s.p + "assets/img/back.c2f03ffa.svg"
            },
            9176: function(e, t, s) {
                e.exports = s.p + "assets/img/bvoice.889deea7.svg"
            },
            8454: function(e, t, s) {
                e.exports = s.p + "assets/img/dn.72952a3b.svg"
            },
            9274: function(e, t, s) {
                e.exports = s.p + "assets/img/email.625423f3.svg"
            },
            5595: function(e, t, s) {
                e.exports = s.p + "assets/img/explore.4f7c885b.svg"
            },
            7073: function(e, t, s) {
                e.exports = s.p + "assets/img/forward.18f258a8.svg"
            },
            5770: function(e, t, s) {
                e.exports = s.p + "assets/img/jsq.af9e9aeb.svg"
            },
            9869: function(e, t, s) {
                e.exports = s.p + "assets/img/jy.ce54d330.svg"
            },
            9536: function(e, t, s) {
                e.exports = s.p + "assets/img/last.9ae0b79b.svg"
            },
            5970: function(e, t, s) {
                e.exports = s.p + "assets/img/lightadd.a0847eb4.svg"
            },
            559: function(e, t, s) {
                e.exports = s.p + "assets/img/lightdown.28dbb969.svg"
            },
            7024: function(e, t, s) {
                e.exports = s.p + "assets/img/media.58cd56de.svg"
            },
            9565: function(e, t, s) {
                e.exports = s.p + "assets/img/next.5228e504.svg"
            },
            4595: function(e, t, s) {
                e.exports = s.p + "assets/img/pause.922cd859.svg"
            },
            5300: function(e, t, s) {
                e.exports = s.p + "assets/img/play.55e9a1b1.svg"
            },
            737: function(e, t, s) {
                e.exports = s.p + "assets/img/refresh.f63891bf.svg"
            },
            2722: function(e, t, s) {
                e.exports = s.p + "assets/img/svoice.6f3c24a0.svg"
            },
            9038: function(e, t, s) {
                e.exports = s.p + "assets/img/voiceadd.92f3f01b.svg"
            },
            431: function(e, t, s) {
                e.exports = s.p + "assets/img/voicedown.489ca2aa.svg"
            },
            9156: function(e, t, s) {
                e.exports = s.p + "assets/img/sjx.57d1b82a.svg"
            },
            5175: function(e, t, s) {
                e.exports = s.p + "assets/img/usb.a1558f8d.svg"
            },
            8948: function(e, t, s) {
                e.exports = s.p + "assets/img/win.02b4d497.svg"
            }
        },
        t = {};

    function s(i) {
        var n = t[i];
        if (void 0 !== n) return n.exports;
        var a = t[i] = {
            id: i,
            loaded: !1,
            exports: {}
        };
        return e[i].call(a.exports, a, a.exports, s), a.loaded = !0, a.exports
    }
    s.m = e,
        function() {
            s.amdO = {}
        }(),
        function() {
            var e = [];
            s.O = function(t, i, n, a) {
                if (!i) {
                    var o = 1 / 0;
                    for (y = 0; y < e.length; y++) {
                        i = e[y][0], n = e[y][1], a = e[y][2];
                        for (var r = !0, l = 0; l < i.length; l++)(!1 & a || o >= a) && Object.keys(s.O).every((function(e) {
                            return s.O[e](i[l])
                        })) ? i.splice(l--, 1) : (r = !1, a < o && (o = a));
                        if (r) {
                            e.splice(y--, 1);
                            var c = n();
                            void 0 !== c && (t = c)
                        }
                    }
                    return t
                }
                a = a || 0;
                for (var y = e.length; y > 0 && e[y - 1][2] > a; y--) e[y] = e[y - 1];
                e[y] = [i, n, a]
            }
        }(),
        function() {
            s.n = function(e) {
                var t = e && e.__esModule ? function() {
                    return e["default"]
                } : function() {
                    return e
                };
                return s.d(t, {
                    a: t
                }), t
            }
        }(),
        function() {
            s.d = function(e, t) {
                for (var i in t) s.o(t, i) && !s.o(e, i) && Object.defineProperty(e, i, {
                    enumerable: !0,
                    get: t[i]
                })
            }
        }(),
        function() {
            s.f = {}, s.e = function(e) {
                return Promise.all(Object.keys(s.f).reduce((function(t, i) {
                    return s.f[i](e, t), t
                }), []))
            }
        }(),
        function() {
            s.u = function(e) {
                return "assets/js/about.8f9e71c8.js"
            }
        }(),
        function() {
            s.miniCssF = function(e) {}
        }(),
        function() {
            s.g = function() {
                if ("object" === typeof globalThis) return globalThis;
                try {
                    return this || new Function("return this")()
                } catch (e) {
                    if ("object" === typeof window) return window
                }
            }()
        }(),
        function() {
            s.o = function(e, t) {
                return Object.prototype.hasOwnProperty.call(e, t)
            }
        }(),
        function() {
            var e = {},
                t = "keyboard-free:";
            s.l = function(i, n, a, o) {
                if (e[i]) e[i].push(n);
                else {
                    var r, l;
                    if (void 0 !== a)
                        for (var c = document.getElementsByTagName("script"), y = 0; y < c.length; y++) {
                            var p = c[y];
                            if (p.getAttribute("src") == i || p.getAttribute("data-webpack") == t + a) {
                                r = p;
                                break
                            }
                        }
                    r || (l = !0, r = document.createElement("script"), r.charset = "utf-8", r.timeout = 120, s.nc && r.setAttribute("nonce", s.nc), r.setAttribute("data-webpack", t + a), r.src = i), e[i] = [n];
                    var u = function(t, s) {
                            r.onerror = r.onload = null, clearTimeout(m);
                            var n = e[i];
                            if (delete e[i], r.parentNode && r.parentNode.removeChild(r), n && n.forEach((function(e) {
                                    return e(s)
                                })), t) return t(s)
                        },
                        m = setTimeout(u.bind(null, void 0, {
                            type: "timeout",
                            target: r
                        }), 12e4);
                    r.onerror = u.bind(null, r.onerror), r.onload = u.bind(null, r.onload), l && document.head.appendChild(r)
                }
            }
        }(),
        function() {
            s.r = function(e) {
                "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                    value: "Module"
                }), Object.defineProperty(e, "__esModule", {
                    value: !0
                })
            }
        }(),
        function() {
            s.nmd = function(e) {
                return e.paths = [], e.children || (e.children = []), e
            }
        }(),
        function() {
            s.p = ""
        }(),
        function() {
            var e = {
                143: 0
            };
            s.f.j = function(t, i) {
                var n = s.o(e, t) ? e[t] : void 0;
                if (0 !== n)
                    if (n) i.push(n[2]);
                    else {
                        var a = new Promise((function(s, i) {
                            n = e[t] = [s, i]
                        }));
                        i.push(n[2] = a);
                        var o = s.p + s.u(t),
                            r = new Error,
                            l = function(i) {
                                if (s.o(e, t) && (n = e[t], 0 !== n && (e[t] = void 0), n)) {
                                    var a = i && ("load" === i.type ? "missing" : i.type),
                                        o = i && i.target && i.target.src;
                                    r.message = "Loading chunk " + t + " failed.\n(" + a + ": " + o + ")", r.name = "ChunkLoadError", r.type = a, r.request = o, n[1](r)
                                }
                            };
                        s.l(o, l, "chunk-" + t, t)
                    }
            }, s.O.j = function(t) {
                return 0 === e[t]
            };
            var t = function(t, i) {
                    var n, a, o = i[0],
                        r = i[1],
                        l = i[2],
                        c = 0;
                    if (o.some((function(t) {
                            return 0 !== e[t]
                        }))) {
                        for (n in r) s.o(r, n) && (s.m[n] = r[n]);
                        if (l) var y = l(s)
                    }
                    for (t && t(i); c < o.length; c++) a = o[c], s.o(e, a) && e[a] && e[a][0](), e[a] = 0;
                    return s.O(y)
                },
                i = self["webpackChunkkeyboard_free"] = self["webpackChunkkeyboard_free"] || [];
            i.forEach(t.bind(null, 0)), i.push = t.bind(null, i.push.bind(i))
        }();
    var i = s.O(void 0, [998], (function() {
        return s(4805)
    }));
    i = s.O(i)
})();