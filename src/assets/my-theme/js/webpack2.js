webpackJsonp([18], {
    Luci: function(t, n, o) {
        "use strict";
        function a(t) {
            o("vnHo")
        }
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = o("2CGT")
          , e = o("rHil")
          , i = o("HD9R")
          , c = o("WZtS")
          , l = o("QHDY")
          , r = o("/kga")
          , u = (e.a,
        i.a,
        c.a,
        l.a,
        r.a,
        {
            components: {
                Group: e.a,
                Popup: i.a,
                PopupHeader: c.a,
                Radio: l.a,
                XDialog: r.a
            },
            data: function() {
                return {
                    accountFocus: !1,
                    passwordFocus: !1,
                    account: "",
                    password: "",
                    passwdShow: !1,
                    passwd_account: "",
                    optionsLang: [{
                        value: "cn",
                        label: "简体中文"
                    }, {
                        value: "tw",
                        label: "繁体中文"
                    }, {
                        value: "en",
                        label: "English"
                    }, {
                        value: "jp",
                        label: "わぶん"
                    }],
                    lang: "cn",
                    langShow: !1,
                    bodyHeight: 640
                }
            },
            filters: {
                langName2: function(t) {
                    return ["简体中文", "繁体中文", "English", "わぶん"][t]
                },
                langName: function(t) {
                    return ["简体中文", "繁体中文", "English", "わぶん"][["cn", "tw", "en", "jp"].indexOf(t)]
                }
            },
            methods: {
                toRegister: function(t) {
                    if ("/register" == this.$route.path)
                        return !1;
                    this.$router.replace({
                        name: "register",
                        params: {}
                    })
                },
                onLang: function() {},
                changeLang: function(t, n) {
                    this.$i18n.locale = t,
                    this.langShow = !1
                },
                onConfirm: function() {
                    var t = this
                      , n = t.passwd_account;
                    if (!/^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(n))
                        return t.$vux.toast.text(t.$t("tips.email_err")),
                        !1;
                    var o = {
                        account: n
                    };
                    Object(s.m)(o).then(function(n) {
                        t.$vux.toast.text(n.msg),
                        200 == n.code && (t.passwdShow = !1)
                    }).catch(function(t) {
                        console.log("doResetPasswd err", t)
                    })
                },
                toForgot: function(t) {
                    return this.$vux.confirm.prompt("输入您的邮箱账号", {
                        title: "找回密码",
                        content: "确定要退出登录吗？?",
                        onCancel: function() {},
                        onConfirm: function() {}
                    }),
                    !1
                },
                onLoginSubmit: function(t) {
                    var n = this
                      , o = n.account
                      , a = n.password
                      , e = 0;
                    /^[A-Za-z0-9\u4e00-\u9fa5]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/.test(o) || (e = 1);
                    var i = {
                        account: o,
                        passwd: a,
                        type: e
                    };
                    Object(s.g)(i).then(function(t) {
                        200 == t.code ? (n.$store.commit("login", t.result),
                        n.getUserData(t.result.token)) : n.$vux.toast.text(t.msg)
                    }).catch(function(t) {
                        console.log("doLogin err", t)
                    })
                },
                getUserData: function(t) {
                    var n = this
                      , o = {
                        token: t
                    };
                    Object(s.z)(o).then(function(t) {
                        if (200 == t.code)
                            return n.$store.commit("setUserInfo", t.result),
                            n.$router.replace({
                                path: "/",
                                params: {}
                            }),
                            !1
                    }).catch(function(t) {
                        console.log("getUserInfo err", t)
                    })
                }
            },
            created: function() {
                this.lang = this.$i18n.locale ? this.$i18n.locale : "cn",
                this.bodyHeight = document.documentElement.clientHeight || document.body.clientHeight
            },
            mounted: function() {}
        })
          , g = function() {
            var t = this
              , n = t.$createElement
              , o = t._self._c || n;
            return o("div", {
                staticClass: "login-page app-bg",
                style: {
                    height: t.bodyHeight + "px"
                }
            }, [o("x-header", {
                attrs: {
                    "left-options": {
                        showBack: !1
                    }
                }
            }, [t._v("\n    " + t._s(t.$t("login.title")) + " "), o("div", {
                attrs: {
                    slot: "right"
                },
                on: {
                    click: function(n) {
                        t.langShow = !0
                    }
                },
                slot: "right"
            }, [t._v(t._s(t._f("langName")(t.lang)) + " "), o("i", {
                staticClass: "iconfont icon-qiehuan"
            })])]), t._v(" "), o("div", {
                staticClass: "login-all"
            }, [o("div", {
                staticClass: "login-box"
            }, [t._m(0), t._v(" "), o("div", {
                staticClass: "login-form"
            }, [o("group", {
                staticClass: "login-input"
            }, [o("x-input", {
                attrs: {
                    title: t.$t("login.email"),
                    placeholder: t.$t("login.email_msg"),
                    type: "text"
                },
                model: {
                    value: t.account,
                    callback: function(n) {
                        t.account = n
                    },
                    expression: "account"
                }
            })], 1), t._v(" "), o("group", {
                staticClass: "login-input"
            }, [o("x-input", {
                attrs: {
                    title: t.$t("login.passwd"),
                    placeholder: t.$t("login.passwd_msg"),
                    type: "password"
                },
                model: {
                    value: t.password,
                    callback: function(n) {
                        t.password = n
                    },
                    expression: "password"
                }
            })], 1)], 1), t._v(" "), o("div", {
                staticClass: "login-btn main-btn ac"
            }, [o("span", {
                staticClass: "flex-1 tc",
                on: {
                    click: t.onLoginSubmit
                }
            }, [t._v(t._s(t.$t("login.login_btn")))])]), t._v(" "), o("div", {
                staticClass: "flex tips-btn"
            }, [o("div", {
                staticClass: "flex-1"
            }, [t._v(t._s(t.$t("login.no_account")) + "？ "), o("span", {
                on: {
                    click: t.toRegister
                }
            }, [t._v(t._s(t.$t("login.to_reg")))])]), t._v(" "), o("div", {}, [o("span", {
                on: {
                    click: function(n) {
                        t.passwdShow = !0
                    }
                }
            }, [t._v(t._s(t.$t("login.forgot_passwd")) + "？")])])])])]), t._v(" "), o("div", {
                directives: [{
                    name: "transfer-dom",
                    rawName: "v-transfer-dom"
                }]
            }, [o("x-dialog", {
                attrs: {
                    "hide-on-blur": ""
                },
                model: {
                    value: t.passwdShow,
                    callback: function(n) {
                        t.passwdShow = n
                    },
                    expression: "passwdShow"
                }
            }, [o("div", {
                staticClass: "passwd-form"
            }, [o("group", {
                staticClass: "login-input"
            }, [o("x-input", {
                attrs: {
                    title: t.$t("login.email"),
                    placeholder: t.$t("login.email_msg"),
                    type: "text"
                },
                model: {
                    value: t.passwd_account,
                    callback: function(n) {
                        t.passwd_account = n
                    },
                    expression: "passwd_account"
                }
            })], 1), t._v(" "), o("div", {
                staticClass: "passwd-btn tc flex"
            }, [o("span", {
                staticClass: "cancel flex-1",
                on: {
                    click: function(n) {
                        t.passwdShow = !1
                    }
                }
            }, [t._v(t._s(t.$t("common.cancel_btn")))]), t._v(" "), o("span", {
                staticClass: "flex-1",
                on: {
                    click: t.onConfirm
                }
            }, [t._v(t._s(t.$t("common.confirm_btn")))])])], 1)])], 1), t._v(" "), o("div", {
                directives: [{
                    name: "transfer-dom",
                    rawName: "v-transfer-dom"
                }]
            }, [o("popup", {
                model: {
                    value: t.langShow,
                    callback: function(n) {
                        t.langShow = n
                    },
                    expression: "langShow"
                }
            }, [o("group", {
                attrs: {
                    gutter: "0"
                }
            }, [o("radio", {
                attrs: {
                    options: ["cn", "tw", "en", "jp"]
                },
                on: {
                    "on-change": t.changeLang
                },
                scopedSlots: t._u([{
                    key: "each-item",
                    fn: function(n) {
                        return [t._v(t._s(t._f("langName")(n.label)))]
                    }
                }]),
                model: {
                    value: t.lang,
                    callback: function(n) {
                        t.lang = n
                    },
                    expression: "lang"
                }
            })], 1)], 1)], 1)], 1)
        }
          , p = [function() {
            var t = this
              , n = t.$createElement
              , a = t._self._c || n;
            return a("div", {
                staticClass: "logo ac"
            }, [a("img", {
                attrs: {
                    src: o("Vpqn")
                }
            })])
        }
        ]
          , d = {
            render: g,
            staticRenderFns: p
        }
          , f = d
          , m = o("VU/8")
          , v = a
          , h = m(u, f, !1, v, null, null);
        n.default = h.exports
    },
    Vpqn: function(t, n, o) {
        t.exports = o.p + "static/img/logo.db97fcb.png"
    },
    vnHo: function(t, n, o) {
        var a = o("vyXt");
        "string" == typeof a && (a = [[t.i, a, ""]]),
        a.locals && (t.exports = a.locals);
        o("rjj0")("4678a2c9", a, !0, {})
    },
    vyXt: function(t, n, o) {
        n = t.exports = o("FZ+f")(!0),
        n.push([t.i, "\n.login-page2{ min-height: 100%;\n}\n", "", {
            version: 3,
            sources: ["E:/wwwRoot/zaApp/src/pages/login.vue"],
            names: [],
            mappings: ";AACA,cAAc,iBAAiB;CAC9B",
            file: "login.vue",
            sourcesContent: ["\n.login-page2{ min-height: 100%;\n}\n"],
            sourceRoot: ""
        }])
    }
});
//# sourceMappingURL=webpack2.js.map
