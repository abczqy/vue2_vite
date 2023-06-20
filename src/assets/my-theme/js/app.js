webpackJsonp([24], {
    "+skl": function(e, t) {},
    "/5Jc": function(e, t) {},
    "/kga": function(e, t, n) {
        "use strict";
        function i(e) {
            n("7zGH")
        }
        var a = n("JkZY")
          , s = (a.a,
        Boolean,
        String,
        String,
        Number,
        String,
        String,
        Boolean,
        Object,
        Boolean,
        {
            mixins: [a.a],
            name: "x-dialog",
            model: {
                prop: "show",
                event: "change"
            },
            props: {
                show: {
                    type: Boolean,
                    default: !1
                },
                maskTransition: {
                    type: String,
                    default: "vux-mask"
                },
                maskZIndex: [String, Number],
                dialogTransition: {
                    type: String,
                    default: "vux-dialog"
                },
                dialogClass: {
                    type: String,
                    default: "weui-dialog"
                },
                hideOnBlur: Boolean,
                dialogStyle: Object,
                scroll: {
                    type: Boolean,
                    default: !0,
                    validator: function(e) {
                        return !0
                    }
                }
            },
            computed: {
                maskStyle: function() {
                    if (void 0 !== this.maskZIndex)
                        return {
                            zIndex: this.maskZIndex
                        }
                }
            },
            mounted: function() {
                "undefined" != typeof window && window.VUX_CONFIG && "VIEW_BOX" === window.VUX_CONFIG.$layout && (this.layout = "VIEW_BOX")
            },
            watch: {
                show: function(e) {
                    this.$emit("update:show", e),
                    this.$emit(e ? "on-show" : "on-hide"),
                    e ? this.addModalClassName() : this.removeModalClassName()
                }
            },
            methods: {
                shouldPreventScroll: function() {
                    var e = /iPad|iPhone|iPod/i.test(window.navigator.userAgent)
                      , t = this.$el.querySelector("input") || this.$el.querySelector("textarea");
                    if (e && t)
                        return !0
                },
                hide: function() {
                    this.hideOnBlur && (this.$emit("update:show", !1),
                    this.$emit("change", !1),
                    this.$emit("on-click-mask"))
                }
            },
            data: function() {
                return {
                    layout: ""
                }
            }
        })
          , r = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "vux-x-dialog",
                class: {
                    "vux-x-dialog-absolute": "VIEW_BOX" === e.layout
                }
            }, [n("transition", {
                attrs: {
                    name: e.maskTransition
                }
            }, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.show,
                    expression: "show"
                }],
                staticClass: "weui-mask",
                style: e.maskStyle,
                on: {
                    click: e.hide
                }
            })]), e._v(" "), n("transition", {
                attrs: {
                    name: e.dialogTransition
                }
            }, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.show,
                    expression: "show"
                }],
                class: e.dialogClass,
                style: e.dialogStyle
            }, [e._t("default")], 2)])], 1)
        }
          , o = []
          , l = {
            render: r,
            staticRenderFns: o
        }
          , u = l
          , c = n("VU/8")
          , _ = i
          , d = c(s, u, !1, _, null, null);
        t.a = d.exports
    },
    0: function(e, t) {},
    "2N0j": function(e, t) {
        e.exports = {
            common: {
                home: "首页",
                service: "客服中心",
                my_home: "个人主页",
                passwd: "修改密码",
                logout: "退出登录",
                recharge: "充值",
                level: "升级",
                mood: "心情",
                gift: "礼物",
                gold: "金币",
                order_pay: "支付信息",
                confirm_btn: "确认",
                cancel_btn: "取消",
                setting: "设置",
                balance: "余额",
                cancel: "取消",
                confirm: "确认",
                chat_record: "聊天记录",
                close: "关闭"
            },
            tips: {
                chat_limit: "普通用户只能发送3个聊天信息",
                chat_send_fail: "发送失败",
                blessing_null: "请填写祝福语",
                keyword_null: "请填写搜索关键词",
                email_err: "请填写正确的邮箱",
                select_level: "请选择升级的等级",
                mood_null: "请输入您要发表的心情",
                loading: "正在处理中，请稍等……",
                country_null: "请填写国家",
                city_null: "请填写城市",
                address_null: "请填写地址",
                phone_null: "请填写电话",
                email_null: "请填写邮箱",
                firstname_null: "还未填写持卡人名字",
                lastname_null: "还未填写持卡人名字",
                select_recharge: "请选择充值金额或填写自定义充值金额",
                gender_null: "请选择性别",
                birthday_null: "请选择您的生日",
                nickname_null: "请填写昵称",
                reg_ok: "注册成功",
                op_title: "操作提示",
                logout_confirm: "确定要退出登录吗？",
                old_passwd_null: "请填写原密码",
                new_passwd_null: "请填写新密码",
                re_passwd_null: "请重复填写新密码",
                re_passwd_err: "两次输入密码不一致",
                avatar_upload_ok: "头像上传成功，请等待审核",
                avatar_upload_fail: "头像上传失败",
                edit_fail: "编辑失败，请稍后再试",
                photo_upload_ok: "照片上传成功，请等待审核",
                photo_upload_fail: "照片上传失败"
            },
            login: {
                title: "欢迎登录",
                title_tips: "小姐姐/小哥哥在等你来约会",
                email: "账号",
                email_msg: "请输入账号",
                passwd: "密码",
                passwd_msg: "请输入密码",
                no_account: "没有账号",
                to_reg: "去注册",
                forgot_passwd: "忘记密码",
                login_btn: "登录",
                sub_title: "他/她们恋爱了",
                sub_content: "你还无动于衷吗？快行动起来吧！来钟爱找相爱的伴侣！！！"
            },
            register: {
                title: "欢迎注册",
                title_tips: "小姐姐/小哥哥在等你来约会",
                gender: "性别",
                gender_1: "男",
                gender_0: "女",
                birthday: "生日",
                birthday_msg: "选择日期",
                nickname: "昵称",
                nickname_msg: "请输入昵称",
                email: "邮箱",
                email_msg: "请输入邮箱",
                passwd: "密码",
                passwd_msg: "请输入密码",
                has_account: "已有账号",
                to_login: "去登录",
                forgot_passwd: "忘记密码",
                register_btn: "注册"
            },
            forgot: {
                title: "找回密码",
                title_tips: "我们将把新的密码发送到您的邮箱中。",
                email: "邮箱",
                email_msg: "请输入邮箱",
                has_account: "已有账号",
                to_login: "去登录",
                no_account: "没有账号",
                to_reg: "去注册",
                send_btn: "发送"
            },
            home: {
                keyword_msg: "请输入搜索内容",
                search_btn: "搜索"
            },
            recharge: {
                title: "充值",
                balance: "当前余额",
                ratio: "兑换比例",
                level: "会员级别",
                level_0: "普通会员",
                surplus_0: "还有",
                surplus_1: "天到期",
                custom: "自定义",
                order_btn: "去充值"
            },
            level: {
                title: "升级",
                balance: "当前余额",
                ratio: "兑换比例",
                level: "等级",
                level_0: "普通会员",
                level_1: "蓝钻会员",
                level_2: "皇冠会员",
                surplus_0: "还有",
                surplus_1: "天到期",
                custom: "自定义",
                order_btn: "确认升级",
                level_tips: "升级后可以获得更多权限",
                gold_up: "金币升级"
            },
            mood: {
                title: "心情",
                add: "发表我的心情",
                tips: "在这里可以了解每天发生在会员的事",
                content_title: "我的心情",
                content_msg: "输入您要发表的心情",
                confirm: "确定",
                cancel: "取消"
            },
            gift: {
                title: "礼物",
                shop: "礼物商城",
                shop_empty: "礼物还没上架",
                type_0: "虚拟礼物",
                type_1: "真实礼物",
                box: "礼物盒子",
                box_empty: "礼物盒子空空的",
                send: "送出礼物",
                send_empty: "还没有送出礼物",
                buy: "购买",
                chat: "聊天",
                back: "回赠",
                give: "送礼",
                buy_title: "购买礼物",
                give_user: "赠送人",
                blessing: "祝福语",
                receive_time: "赠送时间",
                give_to: "赠送给",
                give_status_0: "未送出",
                num: "数量",
                keyword_msg: "请输入昵称搜索",
                pay_money: "应付金额",
                confirm: "确定",
                cancel: "取消"
            },
            order_pay: {
                title: "订单支付",
                card_title: "信用卡信息",
                bill_title: "账单信息",
                order_title: "订单信息",
                add_card: "添加银行卡",
                change_card: "更换银行卡",
                add_card_tips: "请填写银行卡信息",
                pay_btn: "去支付",
                firstname: "持卡人名",
                lastname: "持卡人姓",
                email: "邮箱",
                phone: "电话",
                card_no: "卡号",
                card_year: "有效期年份",
                card_month: "有效期月份",
                card_cvv: "安全码",
                country: "国家",
                state: "州/省",
                city: "城市",
                postcode: "邮编",
                address: "地址",
                use: "当前使用",
                use_btn: "使用",
                confirm: "确定",
                cancel: "取消",
                bill_firstname: "名字",
                bill_lastname: "姓氏",
                bill_phone: "电话",
                bill_email: "邮箱",
                bill_firstname_msg: "输入名字",
                bill_lastname_msg: "输入姓氏",
                bill_phone_msg: "输入电话",
                bill_email_msg: "输入邮箱"
            },
            pay_ok: {
                title: "订单支付结果",
                success: "支付成功",
                fail: "支付失败",
                finish: "完成"
            },
            msg: {
                title: "消息",
                msg_empty: "还没有消息"
            },
            user_detail: {
                title: "用户资料"
            },
            user_edit: {
                title: "编辑资料",
                avatar: "头像",
                nickname: "昵称",
                signature: "个性签名",
                nation: "民族",
                nation_msg: "输入民族",
                sides: "三围",
                sides_msg: "请输入三围，用空格隔开",
                education: "学历",
                education_msg: "输入学历",
                height: "身高",
                height_msg: "输入身高",
                weight: "体重",
                weight_msg: "输入体重",
                country: "国家",
                country_msg: "输入国家",
                city: "城市",
                city_msg: "输入城市",
                smoke: "吸烟史",
                collect: "收藏癖",
                wrink: "饮酒",
                tattoo: "纹身",
                submit: "提交"
            },
            user_info: {
                title: "详细资料",
                photos: "照片"
            },
            chat: {
                send: "发送",
                more: "查看更多",
                no_more: "没有更多了"
            },
            servive: {
                title: "客服中心",
                tips_1: "尊敬的客户您好，我们是客服部门，我们将竭诚为您服务。",
                tips_2: "温馨提示：简单升级及业务问题请咨询客服一或者客服二；若有客服一或者客服二解决不了的问题请咨询客服经理。",
                chat_start: "开始聊天"
            },
            setting: {
                title: "设置",
                change_lang: "语言切换",
                change_password: "修改密码",
                logout: "退出登录",
                old_passwd: "原密码",
                new_passwd: "新密码",
                re_passwd: "重复密码"
            },
            upload: {
                title: "上传图片",
                upload: "上传"
            }
        }
    },
    "2lnh": function(e, t) {},
    "2sLL": function(e, t, n) {
        "use strict";
        function i(e) {
            n("RMDY")
        }
        var a = n("0FxO")
          , s = (Boolean,
        Boolean,
        Boolean,
        String,
        String,
        Boolean,
        String,
        Object,
        Array,
        {
            name: "x-button",
            props: {
                type: {
                    default: "default"
                },
                disabled: Boolean,
                mini: Boolean,
                plain: Boolean,
                text: String,
                actionType: String,
                showLoading: Boolean,
                link: [String, Object],
                gradients: {
                    type: Array,
                    validator: function(e) {
                        return 2 === e.length
                    }
                }
            },
            methods: {
                onClick: function() {
                    !this.disabled && Object(a.a)(this.link, this.$router)
                }
            },
            computed: {
                noBorder: function() {
                    return Array.isArray(this.gradients)
                },
                buttonStyle: function() {
                    if (this.gradients)
                        return {
                            background: "linear-gradient(90deg, " + this.gradients[0] + ", " + this.gradients[1] + ")",
                            color: "#FFFFFF"
                        }
                },
                classes: function() {
                    return [{
                        "weui-btn_disabled": !this.plain && this.disabled,
                        "weui-btn_plain-disabled": this.plain && this.disabled,
                        "weui-btn_mini": this.mini,
                        "vux-x-button-no-border": this.noBorder
                    }, this.plain ? "" : "weui-btn_" + this.type, this.plain ? "weui-btn_plain-" + this.type : "", this.showLoading ? "weui-btn_loading" : ""]
                }
            }
        })
          , r = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("button", {
                staticClass: "weui-btn",
                class: e.classes,
                style: e.buttonStyle,
                attrs: {
                    disabled: e.disabled,
                    type: e.actionType
                },
                on: {
                    click: e.onClick
                }
            }, [e.showLoading ? n("i", {
                staticClass: "weui-loading"
            }) : e._e(), e._v(" "), e._t("default", [e._v(e._s(e.text))])], 2)
        }
          , o = []
          , l = {
            render: r,
            staticRenderFns: o
        }
          , u = l
          , c = n("VU/8")
          , _ = i
          , d = c(s, u, !1, _, null, null);
        t.a = d.exports
    },
    "3iZP": function(e, t) {},
    "3k2l": function(e, t) {},
    "5LIk": function(e, t) {},
    "62KO": function(e, t, n) {
        "use strict";
        function i(e) {
            n("nnSp")
        }
        var a = n("/kga")
          , s = (a.a,
        Boolean,
        Boolean,
        String,
        String,
        Boolean,
        String,
        String,
        String,
        String,
        Number,
        String,
        String,
        String,
        Boolean,
        Object,
        Boolean,
        String,
        Boolean,
        Boolean,
        {
            name: "confirm",
            components: {
                XDialog: a.a
            },
            props: {
                value: {
                    type: Boolean,
                    default: !1
                },
                showInput: {
                    type: Boolean,
                    default: !1
                },
                placeholder: {
                    type: String,
                    default: ""
                },
                theme: {
                    type: String,
                    default: "ios"
                },
                hideOnBlur: {
                    type: Boolean,
                    default: !1
                },
                title: String,
                confirmText: String,
                cancelText: String,
                maskTransition: {
                    type: String,
                    default: "vux-fade"
                },
                maskZIndex: [Number, String],
                dialogTransition: {
                    type: String,
                    default: "vux-dialog"
                },
                content: String,
                closeOnConfirm: {
                    type: Boolean,
                    default: !0
                },
                inputAttrs: Object,
                showContent: {
                    type: Boolean,
                    default: !0
                },
                confirmType: {
                    type: String,
                    default: "primary"
                },
                showCancelButton: {
                    type: Boolean,
                    default: !0
                },
                showConfirmButton: {
                    type: Boolean,
                    default: !0
                }
            },
            created: function() {
                this.showValue = this.show,
                this.value && (this.showValue = this.value)
            },
            watch: {
                value: function(e) {
                    this.showValue = e
                },
                showValue: function(e) {
                    var t = this;
                    this.$emit("input", e),
                    e && (this.showInput && (this.msg = "",
                    setTimeout(function() {
                        t.$refs.input && t.setInputFocus()
                    }, 300)),
                    this.$emit("on-show"))
                }
            },
            data: function() {
                return {
                    msg: "",
                    showValue: !1
                }
            },
            methods: {
                getInputAttrs: function() {
                    return this.inputAttrs || {
                        type: "text"
                    }
                },
                setInputValue: function(e) {
                    this.msg = e
                },
                setInputFocus: function(e) {
                    e && e.preventDefault(),
                    this.$refs.input.focus()
                },
                _onConfirm: function() {
                    this.showValue && (this.closeOnConfirm && (this.showValue = !1),
                    this.$emit("on-confirm", this.msg))
                },
                _onCancel: function() {
                    this.showValue && (this.showValue = !1,
                    this.$emit("on-cancel"))
                }
            }
        })
          , r = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "vux-confirm"
            }, [n("x-dialog", {
                attrs: {
                    "dialog-class": "android" === e.theme ? "weui-dialog weui-skin_android" : "weui-dialog",
                    "mask-transition": e.maskTransition,
                    "dialog-transition": "android" === e.theme ? "vux-fade" : e.dialogTransition,
                    "hide-on-blur": e.hideOnBlur,
                    "mask-z-index": e.maskZIndex
                },
                on: {
                    "on-hide": function(t) {
                        return e.$emit("on-hide")
                    }
                },
                model: {
                    value: e.showValue,
                    callback: function(t) {
                        e.showValue = t
                    },
                    expression: "showValue"
                }
            }, [e.title ? n("div", {
                staticClass: "weui-dialog__hd",
                class: {
                    "with-no-content": !e.showContent
                }
            }, [n("strong", {
                staticClass: "weui-dialog__title"
            }, [e._v(e._s(e.title))])]) : e._e(), e._v(" "), e.showContent ? [e.showInput ? n("div", {
                staticClass: "vux-prompt"
            }, ["checkbox" === e.getInputAttrs().type ? n("input", e._b({
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.msg,
                    expression: "msg"
                }],
                ref: "input",
                staticClass: "vux-prompt-msgbox",
                attrs: {
                    placeholder: e.placeholder,
                    type: "checkbox"
                },
                domProps: {
                    checked: Array.isArray(e.msg) ? e._i(e.msg, null) > -1 : e.msg
                },
                on: {
                    touchend: e.setInputFocus,
                    change: function(t) {
                        var n = e.msg
                          , i = t.target
                          , a = !!i.checked;
                        if (Array.isArray(n)) {
                            var s = e._i(n, null);
                            i.checked ? s < 0 && (e.msg = n.concat([null])) : s > -1 && (e.msg = n.slice(0, s).concat(n.slice(s + 1)))
                        } else
                            e.msg = a
                    }
                }
            }, "input", e.getInputAttrs(), !1)) : "radio" === e.getInputAttrs().type ? n("input", e._b({
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.msg,
                    expression: "msg"
                }],
                ref: "input",
                staticClass: "vux-prompt-msgbox",
                attrs: {
                    placeholder: e.placeholder,
                    type: "radio"
                },
                domProps: {
                    checked: e._q(e.msg, null)
                },
                on: {
                    touchend: e.setInputFocus,
                    change: function(t) {
                        e.msg = null
                    }
                }
            }, "input", e.getInputAttrs(), !1)) : n("input", e._b({
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.msg,
                    expression: "msg"
                }],
                ref: "input",
                staticClass: "vux-prompt-msgbox",
                attrs: {
                    placeholder: e.placeholder,
                    type: e.getInputAttrs().type
                },
                domProps: {
                    value: e.msg
                },
                on: {
                    touchend: e.setInputFocus,
                    input: function(t) {
                        t.target.composing || (e.msg = t.target.value)
                    }
                }
            }, "input", e.getInputAttrs(), !1))]) : n("div", {
                staticClass: "weui-dialog__bd"
            }, [e._t("default", [n("div", {
                domProps: {
                    innerHTML: e._s(e.content)
                }
            })])], 2)] : e._e(), e._v(" "), n("div", {
                staticClass: "weui-dialog__ft"
            }, [e.showCancelButton ? n("a", {
                staticClass: "weui-dialog__btn weui-dialog__btn_default",
                attrs: {
                    href: "javascript:;"
                },
                on: {
                    click: e._onCancel
                }
            }, [e._v(e._s(e.cancelText || "取消"))]) : e._e(), e._v(" "), e.showConfirmButton ? n("a", {
                staticClass: "weui-dialog__btn",
                class: "weui-dialog__btn_" + e.confirmType,
                attrs: {
                    href: "javascript:;"
                },
                on: {
                    click: e._onConfirm
                }
            }, [e._v(e._s(e.confirmText || "确定"))]) : e._e()])], 2)], 1)
        }
          , o = []
          , l = {
            render: r,
            staticRenderFns: o
        }
          , u = l
          , c = n("VU/8")
          , _ = i
          , d = c(s, u, !1, _, null, null);
        t.a = d.exports
    },
    "7zGH": function(e, t) {},
    Bfwr: function(e, t, n) {
        "use strict";
        function i(e) {
            n("3iZP")
        }
        var a = (Boolean,
        String,
        String,
        String,
        {
            name: "loading",
            model: {
                prop: "show",
                event: "change"
            },
            props: {
                show: Boolean,
                text: String,
                position: String,
                transition: {
                    type: String,
                    default: "vux-mask"
                }
            },
            watch: {
                show: function(e) {
                    this.$emit("update:show", e)
                }
            }
        })
          , s = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("transition", {
                attrs: {
                    name: e.transition
                }
            }, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.show,
                    expression: "show"
                }],
                staticClass: "weui-loading_toast vux-loading",
                class: e.text ? "" : "vux-loading-no-text"
            }, [n("div", {
                staticClass: "weui-mask_transparent"
            }), e._v(" "), n("div", {
                staticClass: "weui-toast",
                style: {
                    position: e.position
                }
            }, [n("i", {
                staticClass: "weui-loading weui-icon_toast"
            }), e._v(" "), e.text ? n("p", {
                staticClass: "weui-toast__content"
            }, [e._v(e._s(e.text || "加载中")), e._t("default")], 2) : e._e()])])])
        }
          , r = []
          , o = {
            render: s,
            staticRenderFns: r
        }
          , l = o
          , u = n("VU/8")
          , c = i
          , _ = u(a, l, !1, c, null, null);
        t.a = _.exports
    },
    CbvS: function(e, t) {},
    D8a4: function(e, t, n) {
        "use strict";
        function i(e) {
            n("iASr")
        }
        var a = (String,
        Number,
        {
            name: "badge",
            props: {
                text: [String, Number]
            }
        })
          , s = function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("span", {
                class: ["vux-badge", {
                    "vux-badge-dot": void 0 === e.text,
                    "vux-badge-single": void 0 !== e.text && 1 === e.text.toString().length
                }],
                domProps: {
                    textContent: e._s(e.text)
                }
            })
        }
          , r = []
          , o = {
            render: s,
            staticRenderFns: r
        }
          , l = o
          , u = n("VU/8")
          , c = i
          , _ = u(a, l, !1, c, null, null);
        t.a = _.exports
    },
    FQqZ: function(e, t) {
        e.exports = {
            common: {
                home: "home",
                service: "customer service",
                my_home: "me",
                passwd: "change password",
                logout: "logout",
                recharge: "recharge",
                level: "upgrade",
                mood: "mood",
                gift: "gift",
                gold: "gold",
                order_pay: "payment information",
                confirm_btn: "confirm",
                cancel_btn: "cancel",
                setting: "setting",
                balance: "balance",
                cancel: "cancel",
                confirm: "confirm",
                chat_record: "chat record",
                close: "close"
            },
            tips: {
                chat_limit: "ordinary users can only send 3 chat messages",
                chat_send_fail: "sending failed",
                blessing_null: "please fill in the blessing words",
                keyword_null: "please fill in the search keywords",
                email_err: "please fill in the correct email address",
                select_level: "please select the upgrade level",
                mood_null: "please enter the mood you want to publish",
                loading: "processing, please wait ",
                country_null: "please fill in the country",
                city_null: "please fill in the city",
                address_null: "please fill in the address",
                phone_null: "please fill in the phone number",
                email_null: "please fill in the email address",
                firstname_null: "cardholder's name has not been filled in",
                lastname_null: "cardholder's name has not been filled in",
                select_recharge: "please select the recharge amount or fill in the custom recharge amount",
                gender_null: "please select gender",
                birthday_null: "please select your birthday",
                nickname_null: "please fill in the nickname",
                reg_ok: "registered successfully",
                op_title: "operation tips",
                logout_confirm: "are you sure you want to log out? ",
                old_passwd_null: "please fill in the original password",
                new_passwd_null: "please fill in the new password",
                re_passwd_null: "please fill in the new password again",
                re_passwd_err: "it's not the same to enter the password twice",
                avatar_upload_ok: "avatar uploaded successfully, please wait for review",
                avatar_upload_fail: "avatar upload failed",
                edit_fail: "editing failed, please try again later",
                photo_upload_ok: "photos uploaded successfully, please wait for review",
                photo_upload_fail: "photo upload failed"
            },
            login: {
                title: "welcome to login",
                title_tips: "little sister / brother is waiting for you to date.",
                email: "account",
                email_msg: "please enter the accoun",
                passwd: "password",
                passwd_msg: "please enter the password",
                no_account: "no account",
                to_reg: "to register",
                forgot_passwd: "forget password",
                login_btn: "login",
                sub_title: "he / they are in love.",
                sub_content: "are you still indifferent? Let's move! To love to find a loving partner!"
            },
            register: {
                title: "welcome to register",
                title_tips: "little sister / brother is waiting for you to date.",
                gender: "gender",
                gender_1: "Male",
                gender_0: "Female",
                birthday: "birthday",
                birthday_msg: "select date",
                nickname: "nickname",
                nickname_msg: "please enter your nickname",
                email: "account",
                email_msg: "please enter your account",
                passwd: "password",
                passwd_msg: "please enter the password",
                has_account: "existing account",
                to_login: "to login",
                forgot_passwd: "forget password",
                register_btn: "register"
            },
            forgot: {
                title: "forget password",
                title_tips: "we will send your new password to your email.",
                email: "email",
                email_msg: "please enter your email",
                has_account: "existing account",
                to_login: "to login",
                no_account: "no account",
                to_reg: "to register",
                send_btn: "send"
            },
            home: {
                keyword_msg: "please enter the search content",
                search_btn: "search"
            },
            recharge: {
                title: "recharge",
                balance: "current balance",
                ratio: "exchange ratio",
                level: "level",
                level_0: "regular member",
                surplus_0: "and",
                surplus_1: "days due",
                custom: "custom",
                order_btn: "recharge"
            },
            level: {
                title: "upgrade",
                balance: "current balance",
                ratio: "exchange ratio",
                level: "level",
                level_0: "regular member",
                level_1: "Blue Diamond member",
                level_2: "Crown member",
                surplus_0: "and",
                surplus_1: "days due",
                custom: "custom",
                order_btn: "confirm upgrade",
                level_tips: "you can get more permissions after upgrading.",
                gold_up: "gold upgrade"
            },
            mood: {
                title: "mood",
                add: "publish my mood",
                tips: "here you can learn what happens to members every day.",
                content_title: "my mood",
                content_msg: "enter the mood you want to publish.",
                confirm: "confirm",
                cancel: "cancel"
            },
            gift: {
                title: "gift",
                shop: "gift shop",
                shop_empty: "the gift hasn't been put on the shelf yet.",
                type_0: "virtual gift",
                type_1: "real gift",
                box: "gift box",
                box_empty: "the gift box is empty.",
                send: "sended gift",
                send_empty: "you haven't sent a gift yet.",
                buy: "buy",
                chat: "chat",
                back: "rebate",
                give: "gift giving",
                buy_title: "buying gifts",
                give_user: "giver",
                blessing: "blessing",
                receive_time: "gift time",
                give_to: "give to",
                give_status_0: "not sent",
                num: "num",
                keyword_msg: "please enter your nickname to search",
                pay_money: "amount payable",
                confirm: "confirm",
                cancel: "cancel"
            },
            order_pay: {
                title: "order payment",
                card_title: "credit card information",
                bill_title: "billing information",
                order_title: "order information",
                add_card: "add a credit card",
                change_card: "change credit card",
                add_card_tips: "please fill in the credit card information",
                pay_btn: "to pay",
                firstname: "firstname",
                lastname: "lastname",
                email: "email",
                phone: "phone",
                card_no: "card no",
                card_year: "valid year",
                card_month: "valid month",
                card_cvv: "cvv",
                country: "country",
                state: "state",
                city: "city",
                postcode: "postcode",
                address: "address",
                use: "currently in use",
                use_btn: "using",
                confirm: "confirm",
                cancel: "cancel",
                bill_firstname: "firstname",
                bill_lastname: "lastname",
                bill_phone: "phone",
                bill_email: "email",
                bill_firstname_msg: "enter firstname",
                bill_lastname_msg: "enter lastname",
                bill_phone_msg: "enter phone",
                bill_email_msg: "enter email"
            },
            pay_ok: {
                title: "order payment result",
                success: "payment succeeded",
                fail: "payment failed",
                finish: "finish"
            },
            msg: {
                title: "message",
                msg_empty: "no message yet"
            },
            user_detail: {
                title: "user detail"
            },
            user_edit: {
                title: "edit data",
                avatar: "avatar",
                nickname: "nickname",
                signature: "signature",
                nation: "nation",
                nation_msg: "enter nation",
                sides: "Sanwei",
                sides_msg: "please enter Sanwei, separated by spaces",
                education: "education",
                education_msg: "enter the education background",
                height: "height",
                height_msg: "enter height",
                weight: "weight",
                weight_msg: "enter weight",
                country: "country",
                country_msg: "enter country",
                city: "city",
                city_msg: "enter city",
                smoke: "smoking history",
                collect: "collection Mania",
                wrink: "drinking",
                tattoo: "tattoo",
                submit: "submit"
            },
            user_info: {
                title: "details",
                photos: "photos"
            },
            chat: {
                send: "send",
                more: "see more",
                no_more: "no more"
            },
            servive: {
                title: "customer service",
                tips_1: "Dear customer, we are the customer service department, we will serve you wholeheartedly. ",
                tips_2: "Warm tips: for simple upgrade and business problems, please consult customer service one or customer service two; if there are problems that customer service one or customer service two can't solve, please consult customer service manager. ",
                chat_start: "start chat"
            },
            setting: {
                title: "setting",
                change_lang: "language switch",
                change_password: "modify password",
                logout: "logout",
                old_passwd: "original password",
                new_passwd: "new password",
                re_passwd: "duplicate password"
            },
            upload: {
                title: "upload image",
                upload: "upload"
            }
        }
    },
    Fgsu: function(e, t) {},
    IcnI: function(e, t, n) {
        "use strict";
        var i = n("mvHQ")
          , a = n.n(i)
          , s = n("7+uW")
          , r = n("NYxO");
        s.default.use(r.a),
        t.a = new r.a.Store({
            state: {
                count: 0,
                isLogin: !1,
                token: localStorage.getItem("Xtoken"),
                expire_time: localStorage.getItem("expireTime"),
                userLogin: !1,
                userInfo: localStorage.getItem("XuserInfo"),
                tabbarShow: !0,
                expiredTime: 0,
                chatuser_id: 0
            },
            getters: {
                getTabbarShow: function(e) {
                    return e.tabbarShow
                }
            },
            mutations: {
                increment: function(e) {
                    return e.count++
                },
                decrement: function(e) {
                    return e.count--
                },
                login: function(e, t) {
                    e.token = t.token,
                    e.expire_time = t.exp_time,
                    e.isLogin = !0,
                    localStorage.setItem("Xtoken", t.token),
                    localStorage.setItem("expireTime", t.exp_time)
                },
                setChat: function(e, t) {
                    e.chatuser_id = t
                },
                setUserInfo: function(e, t) {
                    e.userInfo = t,
                    localStorage.setItem("XuserInfo", a()(t))
                },
                logout: function(e, t) {
                    e.token = null,
                    e.expire_time = 0,
                    e.isLogin = !1,
                    localStorage.setItem("Xtoken", null),
                    localStorage.setItem("XuserInfo", null)
                },
                updateTabbarShow: function(e, t) {
                    e.tabbarShow = t
                }
            },
            actions: {}
        })
    },
    NHnr: function(e, t, n) {
        "use strict";
        function i(e) {
            n("Y7ns")
        }
        function a(e) {
            n("owug")
        }
        function s(e, t) {
            if (!t)
                return void console.error(e);
            t.constructor.super.util.warn(e, t)
        }
        function r(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        function o(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                n[i - 1] = arguments[i];
            return n.forEach(function(t) {
                for (var n in t)
                    r(t, n) && (e[n] = t[n])
            }),
            e
        }
        function l() {
            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "") + re++
        }
        function u(e) {
            return e.replace(/[<>"&]/g, function(e) {
                return oe[e] || e
            })
        }
        function c(e, t) {
            if (!t)
                return void console.error(e);
            t.constructor.super.util.warn(e, t)
        }
        function _(e, t) {
            return Object.prototype.hasOwnProperty.call(e, t)
        }
        function d(e) {
            for (var t = arguments.length, n = Array(t > 1 ? t - 1 : 0), i = 1; i < t; i++)
                n[i - 1] = arguments[i];
            return n.forEach(function(t) {
                for (var n in t)
                    _(t, n) && (e[n] = t[n])
            }),
            e
        }
        function m() {
            return (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "") + ce++
        }
        function h(e) {
            return e.replace(/[<>"&]/g, function(e) {
                return _e[e] || e
            })
        }
        function p(e) {
            n("CbvS")
        }
        Object.defineProperty(t, "__esModule", {
            value: !0
        });
        var g = n("7+uW")
          , f = n("v5o6")
          , b = n.n(f)
          , v = n("YaEn")
          , w = (n("bwrR"),
        n("xzd6"))
          , y = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                attrs: {
                    id: "app"
                }
            }, [n("router-view"), e._v(" "), e.tabbar ? n("div", {
                staticClass: "bottom-tabbar"
            }, [n("tabbar", [n("tabbar-item", {
                staticClass: "tabbar-item",
                class: {
                    active: "home" == e.tabbarName
                },
                attrs: {
                    link: "/"
                }
            }, [n("i", {
                staticClass: "iconfont icon-home",
                attrs: {
                    slot: "icon"
                },
                slot: "icon"
            }), e._v(" "), n("span", {
                attrs: {
                    slot: "label"
                },
                slot: "label"
            }, [e._v(e._s(e.$t("common.home")))])]), e._v(" "), n("tabbar-item", {
                staticClass: "tabbar-item",
                class: {
                    active: "msg" == e.tabbarName
                },
                attrs: {
                    link: "/msg"
                }
            }, [n("i", {
                staticClass: "iconfont icon-msg",
                attrs: {
                    slot: "icon"
                },
                slot: "icon"
            }), e._v(" "), n("span", {
                attrs: {
                    slot: "label"
                },
                slot: "label"
            }, [e._v(e._s(e.$t("msg.title")))])]), e._v(" "), n("tabbar-item", {
                staticClass: "tabbar-item",
                class: {
                    active: "my" == e.tabbarName
                },
                attrs: {
                    link: "/my"
                }
            }, [n("i", {
                staticClass: "iconfont icon-my",
                attrs: {
                    slot: "icon"
                },
                slot: "icon"
            }), e._v(" "), n("span", {
                attrs: {
                    slot: "label"
                },
                slot: "label"
            }, [e._v(e._s(e.$t("common.my_home")))])])], 1)], 1) : e._e()], 1)
        }
          , k = []
          , x = {
            render: y,
            staticRenderFns: k
        }
          , E = x
          , S = n("VU/8")
          , I = i
          , C = S(w.a, E, !1, I, null, null)
          , O = C.exports
          , P = n("IcnI")
          , M = n("3BeM")
          , B = n("2sLL")
          , D = n("BEQ0")
          , T = n.n(D)
          , $ = (Object,
        String,
        String,
        Object,
        {
            name: "x-header",
            props: {
                leftOptions: Object,
                title: String,
                transition: String,
                rightOptions: {
                    type: Object,
                    default: function() {
                        return {
                            showMore: !1
                        }
                    }
                }
            },
            beforeMount: function() {
                this.$slots["overwrite-title"] && (this.shouldOverWriteTitle = !0)
            },
            computed: {
                _leftOptions: function() {
                    return T()({
                        showBack: !0,
                        preventGoBack: !1
                    }, this.leftOptions || {})
                }
            },
            methods: {
                onClickBack: function() {
                    this._leftOptions.preventGoBack ? this.$emit("on-click-back") : this.$router ? this.$router.back() : window.history.back()
                }
            },
            data: function() {
                return {
                    shouldOverWriteTitle: !1
                }
            }
        })
          , A = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "vux-header"
            }, [n("div", {
                staticClass: "vux-header-left"
            }, [e._t("overwrite-left", [n("transition", {
                attrs: {
                    name: e.transition
                }
            }, [n("a", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e._leftOptions.showBack,
                    expression: "_leftOptions.showBack"
                }],
                staticClass: "vux-header-back",
                on: {
                    click: [function(t) {
                        if (!t.type.indexOf("key") && e._k(t.keyCode, "preventDefault", void 0, t.key, void 0))
                            return null
                    }
                    , e.onClickBack]
                }
            }, [e._v(e._s(void 0 === e._leftOptions.backText ? "返回" : e._leftOptions.backText))])]), e._v(" "), n("transition", {
                attrs: {
                    name: e.transition
                }
            }, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e._leftOptions.showBack,
                    expression: "_leftOptions.showBack"
                }],
                staticClass: "left-arrow",
                on: {
                    click: e.onClickBack
                }
            })])]), e._v(" "), e._t("left")], 2), e._v(" "), e.shouldOverWriteTitle ? e._e() : n("h1", {
                staticClass: "vux-header-title",
                on: {
                    click: function(t) {
                        return e.$emit("on-click-title")
                    }
                }
            }, [e._t("default", [n("transition", {
                attrs: {
                    name: e.transition
                }
            }, [n("span", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.title,
                    expression: "title"
                }]
            }, [e._v(e._s(e.title))])])])], 2), e._v(" "), e.shouldOverWriteTitle ? n("div", {
                staticClass: "vux-header-title-area"
            }, [e._t("overwrite-title")], 2) : e._e(), e._v(" "), n("div", {
                staticClass: "vux-header-right"
            }, [e.rightOptions.showMore ? n("a", {
                staticClass: "vux-header-more",
                on: {
                    click: [function(t) {
                        if (!t.type.indexOf("key") && e._k(t.keyCode, "preventDefault", void 0, t.key, void 0))
                            return null
                    }
                    , function(t) {
                        return e.$emit("on-click-more")
                    }
                    ]
                }
            }) : e._e(), e._v(" "), e._t("right")], 2)])
        }
          , W = []
          , V = {
            render: A,
            staticRenderFns: W
        }
          , L = V
          , R = n("VU/8")
          , N = a
          , U = R($, L, !1, N, null, null)
          , q = U.exports
          , j = n("pDNl")
          , K = n("NXWw")
          , F = n("63CM")
          , H = n("Y+qm")
          , z = n("iqGf")
          , X = n.n(z)
          , G = n("BTaQ")
          , Z = n.n(G)
          , Y = (n("+skl"),
        n("POcy"))
          , Q = n.n(Y)
          , J = n("YZ0n")
          , ee = n.n(J)
          , te = n("Gu7T")
          , ne = n.n(te)
          , ie = n("fZjL")
          , ae = n.n(ie)
          , se = {}
          , re = (String,
        String,
        Number,
        String,
        Boolean,
        Boolean,
        Boolean,
        String,
        Number,
        String,
        0)
          , oe = {
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "&": "&amp;"
        }
          , le = {}
          , ue = {
            name: "fa-icon",
            props: {
                name: {
                    type: String,
                    validator: function(e) {
                        return !e || e in le || (c('Invalid prop: prop "name" is referring to an unregistered icon "' + e + '".\nPlease make sure you have imported this icon before using it.', this),
                        !1)
                    }
                },
                title: String,
                scale: [Number, String],
                spin: Boolean,
                inverse: Boolean,
                pulse: Boolean,
                flip: {
                    validator: function(e) {
                        return "horizontal" === e || "vertical" === e || "both" === e
                    }
                },
                label: String,
                tabindex: [Number, String]
            },
            data: function() {
                return {
                    x: !1,
                    y: !1,
                    childrenWidth: 0,
                    childrenHeight: 0,
                    outerScale: 1
                }
            },
            computed: {
                normalizedScale: function() {
                    var e = this.scale;
                    return e = void 0 === e ? 1 : Number(e),
                    isNaN(e) || e <= 0 ? (c('Invalid prop: prop "scale" should be a number over 0.', this),
                    this.outerScale) : e * this.outerScale
                },
                klass: function() {
                    var e = this
                      , t = {
                        "fa-icon": !0,
                        "fa-spin": this.spin,
                        "fa-flip-horizontal": "horizontal" === this.flip,
                        "fa-flip-vertical": "vertical" === this.flip,
                        "fa-flip-both": "both" === this.flip,
                        "fa-inverse": this.inverse,
                        "fa-pulse": this.pulse
                    };
                    return this.classes && ae()(this.classes).forEach(function(n) {
                        e.classes[n] && (t[n] = !0)
                    }),
                    t
                },
                icon: function() {
                    return this.name ? le[this.name] : null
                },
                box: function() {
                    return this.icon ? "0 0 " + this.icon.width + " " + this.icon.height : "0 0 " + this.width + " " + this.height
                },
                ratio: function() {
                    if (!this.icon)
                        return 1;
                    var e = this.icon
                      , t = e.width
                      , n = e.height;
                    return Math.max(t, n) / 16
                },
                width: function() {
                    return this.childrenWidth || this.icon && this.icon.width / this.ratio * this.normalizedScale || 0
                },
                height: function() {
                    return this.childrenHeight || this.icon && this.icon.height / this.ratio * this.normalizedScale || 0
                },
                style: function() {
                    return 1 !== this.normalizedScale && {
                        fontSize: this.normalizedScale + "em"
                    }
                },
                raw: function() {
                    if (!this.icon || !this.icon.raw)
                        return null;
                    var e = this.icon.raw
                      , t = {};
                    return e = e.replace(/\s(?:xml:)?id=(["']?)([^"')\s]+)\1/g, function(e, n, i) {
                        var a = m("vat-");
                        return t[i] = a,
                        ' id="' + a + '"'
                    }),
                    e = e.replace(/#(?:([^'")\s]+)|xpointer\(id\((['"]?)([^')]+)\2\)\))/g, function(e, n, i, a) {
                        var s = n || a;
                        return s && t[s] ? "#" + t[s] : e
                    }),
                    e
                },
                focusable: function() {
                    var e = this.tabindex;
                    return null == e ? "false" : ("string" == typeof e ? parseInt(e, 10) : e) >= 0 ? null : "false"
                }
            },
            mounted: function() {
                this.updateStack()
            },
            updated: function() {
                this.updateStack()
            },
            methods: {
                updateStack: function() {
                    var e = this;
                    if (!this.name && null !== this.name && 0 === this.$children.length)
                        return void c('Invalid prop: prop "name" is required.', this);
                    if (!this.icon) {
                        var t = 0
                          , n = 0;
                        this.$children.forEach(function(i) {
                            i.outerScale = e.normalizedScale,
                            t = Math.max(t, i.width),
                            n = Math.max(n, i.height)
                        }),
                        this.childrenWidth = t,
                        this.childrenHeight = n,
                        this.$children.forEach(function(e) {
                            e.x = (t - e.width) / 2,
                            e.y = (n - e.height) / 2
                        })
                    }
                }
            },
            render: function(e) {
                if (null === this.name)
                    return e();
                var t = {
                    class: this.klass,
                    style: this.style,
                    attrs: {
                        role: this.$attrs.role || (this.label || this.title ? "img" : null),
                        "aria-label": this.label || null,
                        "aria-hidden": !(this.label || this.title),
                        tabindex: this.tabindex,
                        x: this.x,
                        y: this.y,
                        width: this.width,
                        height: this.height,
                        viewBox: this.box,
                        focusable: this.focusable
                    },
                    on: this.$listeners
                };
                if (this.raw) {
                    var n = "<g>" + this.raw + "</g>";
                    this.title && (n = "<title>" + h(this.title) + "</title>" + n),
                    t.domProps = {
                        innerHTML: n
                    }
                }
                var i = this.title ? [e("title", this.title)] : [];
                return e("svg", t, this.raw ? null : i.concat([e("g", this.$slots.default || (this.icon ? [].concat(ne()(this.icon.paths.map(function(t, n) {
                    return e("path", {
                        attrs: t,
                        key: "path-" + n
                    })
                })), ne()(this.icon.polygons.map(function(t, n) {
                    return e("polygon", {
                        attrs: t,
                        key: "polygon-" + n
                    })
                }))) : []))]))
            },
            register: function(e) {
                for (var t in e) {
                    var n = e[t]
                      , i = n.paths
                      , a = void 0 === i ? [] : i
                      , s = n.d
                      , r = n.polygons
                      , o = void 0 === r ? [] : r
                      , l = n.points;
                    s && a.push({
                        d: s
                    }),
                    l && o.push({
                        points: l
                    }),
                    le[t] = d({}, n, {
                        paths: a,
                        polygons: o
                    })
                }
            },
            icons: le
        }
          , ce = 0
          , _e = {
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "&": "&amp;"
        }
          , de = n("VU/8")
          , me = p
          , he = de(ue, null, !1, me, null, null)
          , pe = he.exports
          , ge = n("TXmL");
        window.domain = "https://api.ggaffection.com/",
        window.chatSocket = !1,
        g.default.use(M.a),
        g.default.use(K.a),
        g.default.use(H.a),
        g.default.component("x-header", q),
        g.default.component("x-input", j.a),
        g.default.component("x-button", B.a),
        g.default.directive("transfer-dom", F.a),
        n("g3Gj"),
        n("5LIk"),
        g.default.use(X.a),
        g.default.use(Z.a),
        g.default.use(Q.a),
        g.default.use(ee.a),
        g.default.component("icon", pe),
        g.default.use(ge.a);
        var fe = new ge.a({
            locale: "tw",
            messages: {
                cn: n("2N0j"),
                tw: n("T05n"),
                en: n("FQqZ"),
                jp: n("ad1Q")
            }
        });
        b.a.attach(document.body),
        g.default.config.productionTip = !1,
        new g.default({
            router: v.a,
            store: P.a,
            render: function(e) {
                return e(O)
            },
            i18n: fe,
            data: {
                eventHub: new g.default
            }
        }).$mount("#app-box")
    },
    RMDY: function(e, t) {},
    T05n: function(e, t) {
        e.exports = {
            common: {
                home: "首頁",
                service: "客服中心",
                my_home: "個人主頁",
                passwd: "修改密碼",
                logout: "退出登錄",
                recharge: "充值",
                level: "升級",
                mood: "心情",
                gift: "禮物",
                gold: "金幣",
                order_pay: "支付信息",
                confirm_btn: "確認",
                cancel_btn: "取消",
                setting: "設置",
                balance: "余額",
                cancel: "取消",
                confirm: "確認",
                chat_record: "聊天記錄",
                close: "關閉"
            },
            tips: {
                chat_limit: "普通用戶只能發送3個聊天信息",
                chat_send_fail: "發送失敗",
                blessing_null: "請填寫祝福語",
                keyword_null: "請填寫搜索關鍵詞",
                email_err: "請填寫正確的郵箱",
                select_level: "請選擇升級的等級",
                mood_null: "請輸入您要發表的心情",
                loading: "正在處理中，請稍等……",
                country_null: "請填寫國家",
                city_null: "請填寫城市",
                address_null: "請填寫地址",
                phone_null: "請填寫電話",
                email_null: "請填寫郵箱",
                firstname_null: "還未填寫持卡人名字",
                lastname_null: "還未填寫持卡人名字",
                select_recharge: "請選擇充值金額或填寫自定義充值金額",
                gender_null: "請選擇性別",
                birthday_null: "請選擇您的生日",
                nickname_null: "請填寫昵稱",
                reg_ok: "註冊成功",
                op_title: "操作提示",
                logout_confirm: "確定要退出登錄嗎？",
                old_passwd_null: "請填寫原密碼",
                new_passwd_null: "請填寫新密碼",
                re_passwd_null: "請重復填寫新密碼",
                re_passwd_err: "兩次輸入密碼不壹致",
                avatar_upload_ok: "頭像上傳成功，請等待審核",
                avatar_upload_fail: "頭像上傳失敗",
                edit_fail: "編輯失敗，請稍後再試",
                photo_upload_ok: "照片上傳成功，請等待審核",
                photo_upload_fail: "照片上傳失敗"
            },
            login: {
                title: "歡迎登錄",
                title_tips: "小姐姐/小哥哥在等妳來約會",
                email: "賬號",
                email_msg: "請輸入賬號",
                passwd: "密碼",
                passwd_msg: "請輸入密碼",
                no_account: "沒有賬號",
                to_reg: "去註冊",
                forgot_passwd: "忘記密碼",
                login_btn: "登錄",
                sub_title: "他/她們戀愛了",
                sub_content: "妳還無動於衷嗎？快行動起來吧！來鐘愛找相愛的伴侶！！！"
            },
            register: {
                title: "歡迎註冊",
                title_tips: "小姐姐/小哥哥在等妳來約會",
                gender: "性別",
                gender_1: "男",
                gender_0: "女",
                birthday: "生日",
                birthday_msg: "選擇日期",
                nickname: "昵稱",
                nickname_msg: "請輸入昵稱",
                email: "郵箱",
                email_msg: "請輸入郵箱",
                passwd: "密碼",
                passwd_msg: "請輸入密碼",
                has_account: "已有賬號",
                to_login: "去登錄",
                forgot_passwd: "忘記密碼",
                register_btn: "註冊"
            },
            forgot: {
                title: "找回密碼",
                title_tips: "我們將把新的密碼發送到您的郵箱中。",
                email: "郵箱賬號",
                email_msg: "請輸入郵箱賬號",
                has_account: "已有賬號",
                to_login: "去登錄",
                no_account: "沒有賬號",
                to_reg: "去註冊",
                send_btn: "發送"
            },
            home: {
                keyword_msg: "請輸入搜索內容",
                search_btn: "搜索"
            },
            recharge: {
                title: "充值",
                balance: "當前余額",
                ratio: "兌換比例",
                level: "會員級別",
                level_0: "普通會員",
                surplus_0: "還有",
                surplus_1: "天到期",
                custom: "自定義",
                order_btn: "去充值"
            },
            level: {
                title: "升級",
                balance: "當前余額",
                ratio: "兌換比例",
                level: "等級",
                level_0: "普通會員",
                level_1: "藍鉆會員",
                level_2: "皇冠會員",
                surplus_0: "還有",
                surplus_1: "天到期",
                custom: "自定義",
                order_btn: "確認升級",
                level_tips: "升級後可以獲得更多權限",
                gold_up: "金幣升級"
            },
            mood: {
                title: "心情",
                add: "發表我的心情",
                tips: "在這裏可以了解每天發生在會員的事",
                content_title: "我的心情",
                content_msg: "輸入您要發表的心情",
                confirm: "確定",
                cancel: "取消"
            },
            gift: {
                title: "禮物",
                shop: "禮物商城",
                shop_empty: "禮物還沒上架",
                type_0: "虛擬禮物",
                type_1: "真實禮物",
                box: "禮物盒子",
                box_empty: "禮物盒子空空的",
                send: "送出禮物",
                send_empty: "還沒有送出禮物",
                buy: "購買",
                chat: "聊天",
                back: "回贈",
                give: "送禮",
                buy_title: "購買禮物",
                give_user: "贈送人",
                blessing: "祝福語",
                receive_time: "贈送時間",
                give_to: "贈送給",
                give_status_0: "未送出",
                num: "數量",
                keyword_msg: "請輸入昵稱搜索",
                pay_money: "應付金額",
                confirm: "確定",
                cancel: "取消"
            },
            order_pay: {
                title: "訂單支付",
                card_title: "信用卡信息",
                bill_title: "賬單信息",
                order_title: "訂單信息",
                add_card: "添加銀行卡",
                change_card: "更換銀行卡",
                add_card_tips: "請填寫銀行卡信息",
                pay_btn: "去支付",
                firstname: "持卡人名",
                lastname: "持卡人姓",
                email: "郵箱",
                phone: "電話",
                card_no: "卡號",
                card_year: "有效期年份",
                card_month: "有效期月份",
                card_cvv: "安全碼",
                country: "國家",
                state: "州/省",
                city: "城市",
                postcode: "郵編",
                address: "地址",
                use: "當前使用",
                use_btn: "使用",
                confirm: "確定",
                cancel: "取消",
                bill_firstname: "名字",
                bill_lastname: "姓氏",
                bill_phone: "電話",
                bill_email: "郵箱",
                bill_firstname_msg: "輸入名字",
                bill_lastname_msg: "輸入姓氏",
                bill_phone_msg: "輸入電話",
                bill_email_msg: "輸入郵箱"
            },
            pay_ok: {
                title: "訂單支付結果",
                success: "支付成功",
                fail: "支付失敗",
                finish: "完成"
            },
            msg: {
                title: "消息",
                msg_empty: "還沒有消息"
            },
            user_detail: {
                title: "用戶資料"
            },
            user_edit: {
                title: "編輯資料",
                avatar: "頭像",
                nickname: "昵稱",
                signature: "個性簽名",
                nation: "民族",
                nation_msg: "輸入民族",
                sides: "三圍",
                sides_msg: "請輸入三圍，用空格隔開",
                education: "學歷",
                education_msg: "輸入學歷",
                height: "身高",
                height_msg: "輸入身高",
                weight: "體重",
                weight_msg: "輸入體重",
                country: "國家",
                country_msg: "輸入國家",
                city: "城市",
                city_msg: "輸入城市",
                smoke: "吸煙史",
                collect: "收藏癖",
                wrink: "飲酒",
                tattoo: "紋身",
                submit: "提交"
            },
            user_info: {
                title: "詳細資料",
                photos: "照片"
            },
            chat: {
                send: "發送",
                more: "查看更多",
                no_more: "沒有更多了"
            },
            servive: {
                title: "客服中心",
                tips_1: "尊敬的客戶您好，我們是客服部門，我們將竭誠為您服務。",
                tips_2: "溫馨提示：簡單升級及業務問題請咨詢客服壹或者客服二；若有客服壹或者客服二解決不了的問題請咨詢客服經理。",
                chat_start: "開始聊天"
            },
            setting: {
                title: "設置",
                change_lang: "語言切換",
                change_password: "修改密碼",
                logout: "退出登錄",
                old_passwd: "原密碼",
                new_passwd: "新密碼",
                re_passwd: "重復密碼"
            },
            upload: {
                title: "上傳圖片",
                upload: "上傳"
            }
        }
    },
    UIMx: function(e, t, n) {
        "use strict";
        function i(e) {
            n("Fgsu")
        }
        var a = n("piuB")
          , s = (a.b,
        String,
        {
            mounted: function() {},
            name: "tabbar",
            mixins: [a.b],
            props: {
                iconClass: String
            }
        })
          , r = function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("div", {
                staticClass: "weui-tabbar"
            }, [e._t("default")], 2)
        }
          , o = []
          , l = {
            render: r,
            staticRenderFns: o
        }
          , u = l
          , c = n("VU/8")
          , _ = i
          , d = c(s, u, !1, _, null, null);
        t.a = d.exports
    },
    VaBq: function(e, t) {},
    Y7ns: function(e, t) {},
    YaEn: function(e, t, n) {
        "use strict";
        function i() {
            return !!l.a.state.token && (l.a.state.expire_time && l.a.state.expire_time > Date.now())
        }
        var a = n("pFYg")
          , s = n.n(a)
          , r = n("7+uW")
          , o = n("/ocq")
          , l = n("IcnI");
        r.default.use(o.a);
        var u = new o.a({
            routes: [{
                path: "/",
                name: "home",
                meta: {
                    title: "首页",
                    tabbar: 1
                },
                component: function() {
                    return Promise.all([n.e(0), n.e(1)]).then(n.bind(null, "vkyI"))
                }
            }, {
                path: "/edit",
                name: "edit",
                meta: {
                    title: "首页",
                    tabbar: 1
                },
                component: function() {
                    return Promise.all([n.e(0), n.e(16)]).then(n.bind(null, "RYrg"))
                }
            }, {
                path: "/upload",
                name: "upload",
                meta: {
                    title: "图片上传",
                    tabbar: 0
                },
                component: function() {
                    return Promise.all([n.e(0), n.e(17)]).then(n.bind(null, "PvX2"))
                }
            }, {
                path: "/main",
                name: "main",
                meta: {
                    title: "首页",
                    tabbar: 1
                },
                component: function() {
                    return Promise.all([n.e(0), n.e(4)]).then(n.bind(null, "gk7G"))
                }
            }, {
                path: "/user",
                name: "user",
                meta: {
                    title: "用户",
                    tabbar: 0
                },
                component: function() {
                    return Promise.all([n.e(0), n.e(12)]).then(n.bind(null, "R1Qy"))
                }
            }, {
                path: "/home",
                name: "home",
                meta: {
                    title: "首页",
                    tabbar: 1
                },
                component: function() {
                    return Promise.all([n.e(0), n.e(1)]).then(n.bind(null, "vkyI"))
                }
            }, {
                path: "/msg",
                name: "msg",
                meta: {
                    title: "消息",
                    tabbar: 1
                },
                component: function() {
                    return Promise.all([n.e(0), n.e(10)]).then(n.bind(null, "ytME"))
                }
            }, {
                path: "/my",
                name: "my",
                meta: {
                    title: "我的",
                    tabbar: 1
                },
                component: function() {
                    return Promise.all([n.e(0), n.e(5)]).then(n.bind(null, "6Dws"))
                }
            }, {
                path: "/login",
                name: "login",
                meta: {
                    title: "登录",
                    tabbar: 0
                },
                component: function() {
                    return Promise.all([n.e(0), n.e(18)]).then(n.bind(null, "Luci"))
                }
            }, {
                path: "/register",
                name: "register",
                meta: {
                    title: "注册",
                    tabbar: 0
                },
                component: function() {
                    return Promise.all([n.e(0), n.e(7)]).then(n.bind(null, "1cHr"))
                }
            }, {
                path: "/chat",
                name: "chat",
                meta: {
                    title: "聊天",
                    tabbar: 0
                },
                component: function() {
                    return Promise.all([n.e(0), n.e(8)]).then(n.bind(null, "IwjN"))
                }
            }, {
                path: "/recharge",
                name: "recharge",
                meta: {
                    title: "充值",
                    tabbar: 0
                },
                component: function() {
                    return Promise.all([n.e(0), n.e(13)]).then(n.bind(null, "l+9M"))
                }
            }, {
                path: "/level",
                name: "level",
                meta: {
                    title: "升级",
                    tabbar: 0
                },
                component: function() {
                    return Promise.all([n.e(0), n.e(3)]).then(n.bind(null, "znVK"))
                }
            }, {
                path: "/mood",
                name: "mood",
                meta: {
                    title: "心情",
                    tabbar: 0
                },
                component: function() {
                    return Promise.all([n.e(0), n.e(22)]).then(n.bind(null, "exPC"))
                }
            }, {
                path: "/gift",
                name: "gift",
                meta: {
                    title: "礼物",
                    tabbar: 0
                },
                component: function() {
                    return Promise.all([n.e(0), n.e(9)]).then(n.bind(null, "s3IH"))
                }
            }, {
                path: "/service",
                name: "service",
                meta: {
                    title: "客服",
                    tabbar: 0
                },
                component: function() {
                    return Promise.all([n.e(0), n.e(19)]).then(n.bind(null, "kr4C"))
                }
            }, {
                path: "/user-detail",
                name: "user-detail",
                meta: {
                    title: "用户信息",
                    tabbar: 0
                },
                component: function() {
                    return Promise.all([n.e(0), n.e(6)]).then(n.bind(null, "i8Xz"))
                }
            }, {
                path: "/user-info",
                name: "user-info",
                meta: {
                    title: "我的信息",
                    tabbar: 0
                },
                component: function() {
                    return Promise.all([n.e(0), n.e(20)]).then(n.bind(null, "dWf1"))
                }
            }, {
                path: "/user-edit",
                name: "user-edit",
                meta: {
                    title: "编辑资料",
                    tabbar: 0
                },
                component: function() {
                    return Promise.all([n.e(0), n.e(2)]).then(n.bind(null, "/2wc"))
                }
            }, {
                path: "/order-pay",
                name: "order-pay",
                meta: {
                    title: "订单支付",
                    tabbar: 0
                },
                component: function() {
                    return Promise.all([n.e(0), n.e(14)]).then(n.bind(null, "QLFD"))
                }
            }, {
                path: "/order-pay-cro",
                name: "order-pay-cro",
                meta: {
                    title: "订单支付",
                    tabbar: 0
                },
                component: function() {
                    return Promise.all([n.e(0), n.e(11)]).then(n.bind(null, "eAlI"))
                }
            }, {
                path: "/order-pay-ok",
                name: "order-pay-ok",
                meta: {
                    title: "订单支付成功",
                    tabbar: 0
                },
                component: function() {
                    return Promise.all([n.e(0), n.e(15)]).then(n.bind(null, "cMHq"))
                }
            }, {
                path: "/setting",
                name: "setting",
                meta: {
                    title: "设置",
                    tabbar: 0
                },
                component: function() {
                    return Promise.all([n.e(0), n.e(21)]).then(n.bind(null, "zm5D"))
                }
            }]
        })
          , c = ["/login", "/register"];
        u.beforeEach(function(e, t, n) {
            if (~c.indexOf(e.fullPath))
                return i() ? n({
                    path: "/"
                }) : n();
            if (i()) {
                var a = l.a.state.userInfo
                  , r = void 0 === a ? "undefined" : s()(a);
                if ("null" == a || "object" != r)
                    try {
                        localStorage.getItem("XuserInfo");
                        a = JSON.parse(localStorage.getItem("XuserInfo")),
                        l.a.commit("setUserInfo", a)
                    } catch (e) {}
                return n()
            }
            return n({
                path: "/login"
            })
        }),
        t.a = u
    },
    ad1Q: function(e, t) {
        e.exports = {
            common: {
                home: "トップページ",
                service: "お客様サービスセンター",
                my_home: "個人ホームページ",
                passwd: "パスワードを修正",
                logout: "ログアウト",
                recharge: "チャージ",
                level: "アップグレード",
                mood: "気持ち",
                gift: "贈り物",
                gold: "金貨",
                order_pay: "支払い情報",
                confirm_btn: "confirm",
                cancel_btn: "cancel"
            },
            login: {
                title: "ログイン歓迎",
                title_tips: "おねえさん/お兄さんはあなたを待っています",
                email: "アカウント",
                email_msg: "アカウントを入力してください。",
                passwd: "パスワードを",
                passwd_msg: "パスワードを入力してください",
                no_account: "口座のない",
                to_reg: "登録しに行く",
                forgot_passwd: "パスワード忘れ",
                login_btn: "ログイン",
                sub_title: "彼/彼女たちの恋爱した",
                sub_content: "あなたはびくともしない?早く行働せよ!愛のパートナーを探しに来て! ! !"
            },
            register: {
                title: "登録を歓迎します",
                title_tips: "小姉/小デート」と兄は待って",
                gender: "性别",
                gender_1: "男",
                gender_0: "女",
                birthday: "诞生日",
                birthday_msg: "選択し始めた時期を",
                nickname: "愛称",
                nickname_msg: "愛称を入力してください",
                email: "邮箱账号",
                email_msg: "请输入邮箱账号",
                passwd: "登录密码",
                passwd_msg: "请输入登录密码",
                has_account: "已有账号",
                to_login: "去登录",
                forgot_passwd: "忘记密码",
                register_btn: "注册"
            },
            forgot: {
                title: "找回密码",
                title_tips: "我们将把新的密码发送到您的邮箱中。",
                email: "邮箱账号",
                email_msg: "请输入邮箱账号",
                has_account: "已有账号",
                to_login: "去登录",
                no_account: "没有账号",
                to_reg: "去注册",
                send_btn: "发送"
            },
            home: {
                keyword_msg: "请输入搜索内容",
                search_btn: "搜索"
            },
            recharge: {
                balance: "当前余额",
                ratio: "兑换比例",
                level: "会员级别",
                level_0: "普通会员",
                surplus_0: "还有",
                surplus_1: "天到期",
                custom: "自定义",
                order_btn: "去充值"
            },
            level: {
                balance: "当前余额",
                ratio: "兑换比例",
                level: "会员级别",
                level_0: "普通会员",
                level_1: "蓝钻",
                level_2: "皇冠",
                surplus_0: "还有",
                surplus_1: "天到期",
                custom: "自定义",
                order_btn: "确认升级",
                level_tips: "升级后可以获得更多权限"
            },
            mood: {
                add: "发表我的心情",
                tips: "在这里可以了解每天发生在会员的事",
                content_msg: "输入您要发表的心情",
                confirm: "确定",
                cancel: "取消"
            },
            gift: {
                shop: "礼物商城",
                shop_empty: "礼物还没上架",
                type_0: "虚拟礼物",
                type_1: "真实礼物",
                box: "礼物盒子",
                box_empty: "礼物盒子空空的",
                send: "送出礼物",
                send_empty: "还没有送出礼物",
                buy: "购买",
                chat: "聊天",
                back: "回赠",
                give: "送礼",
                buy_title: "购买礼物",
                give_user: "赠送人",
                blessing: "祝福语",
                receive_time: "赠送时间",
                give_to: "赠送给",
                give_status_0: "未送出",
                num: "数量",
                keyword_msg: "请输入昵称搜索",
                pay_money: "应付金额",
                confirm: "确定",
                cancel: "取消"
            },
            order_pay: {
                add_card: "添加银行卡",
                change_card: "更换银行卡",
                add_card_tips: "请填写银行卡信息",
                pay_btn: "去支付",
                firstname: "更换银行卡",
                lastname: "更换银行卡",
                email: "邮箱",
                card_no: "卡号",
                card_year: "有效期年份",
                card_month: "有效期月份",
                card_cvv: "CVV",
                use: "当前使用",
                use_btn: "使用",
                confirm: "确定",
                cancel: "取消"
            }
        }
    },
    aiyf: function(e, t) {},
    bwrR: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ"), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__("bOdI"), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__), __WEBPACK_IMPORTED_MODULE_2__assets_css_style_css__ = __webpack_require__("VaBq"), __WEBPACK_IMPORTED_MODULE_2__assets_css_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_css_style_css__), __WEBPACK_IMPORTED_MODULE_3__assets_css_icon_css__ = __webpack_require__("/5Jc"), __WEBPACK_IMPORTED_MODULE_3__assets_css_icon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_css_icon_css__), __WEBPACK_IMPORTED_MODULE_4_vux_src_directives_transfer_dom_index_js__ = __webpack_require__("63CM"), __WEBPACK_IMPORTED_MODULE_5_vux_src_components_tabbar_tabbar_vue__ = __webpack_require__("UIMx"), __WEBPACK_IMPORTED_MODULE_6_vux_src_components_tabbar_tabbar_item_vue__ = __webpack_require__("dgEa"), _components, _unused_webpack_default_export = {
            name: "app",
            data: function() {
                return {
                    tabbar: !1,
                    tabbarName: "home"
                }
            },
            directives: {
                TransferDom: __WEBPACK_IMPORTED_MODULE_4_vux_src_directives_transfer_dom_index_js__.a
            },
            components: (_components = {
                Tabbar: __WEBPACK_IMPORTED_MODULE_5_vux_src_components_tabbar_tabbar_vue__.a
            },
            __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_components, "Tabbar", __WEBPACK_IMPORTED_MODULE_5_vux_src_components_tabbar_tabbar_vue__.a),
            __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_components, "TabbarItem", __WEBPACK_IMPORTED_MODULE_6_vux_src_components_tabbar_tabbar_item_vue__.a),
            _components),
            watch: {
                $route: function(e, t) {
                    "/" == e.path || "/user" == e.path || "/home" == e.path || "/msg" == e.path || "/my" == e.path ? (this.$store.commit("updateTabbarShow", !0),
                    this.tabbar = !0,
                    this.tabbarName = e.name) : (this.$store.commit("updateTabbarShow", !1),
                    this.tabbar = !1)
                }
            },
            computed: {
                tabbarShow: function() {
                    return this.$store.getters.getTabbarShow
                }
            },
            created: function() {
                console.log("App created ====================================================>>>>>>>>");
                var e = this;
                e.$root.eventHub.$on("imStart", function(t) {
                    e.imStart(t)
                }),
                e.$root.eventHub.$on("imCustom", function(t) {
                    e.imCustom(t)
                }),
                e.$root.eventHub.$on("imService", function(t) {
                    e.imService(t)
                }),
                e.$root.eventHub.$on("logout", function(t) {
                    if (e.$store.commit("logout", {}),
                    window.chatSocket) {
                        var n = {
                            token: "",
                            type: "offline",
                            data: {}
                        };
                        window.chatSocket.send(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(n))
                    }
                    e.$router.replace({
                        name: "/login"
                    })
                })
            },
            methods: {
                websocketOnopen: function() {
                    var e = this
                      , t = e.$store.state.userInfo
                      , n = e.$store.state.token
                      , i = {
                        token: n || "",
                        type: "init",
                        id: t.id,
                        username: t.chatuser_cn.nickname,
                        avatar: t.avatar,
                        sign: t.chatuser_cn.signature,
                        vip: t.vip,
                        gender: t.gender
                    };
                    e.websocketSend(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(i))
                },
                websocketOnerror: function(e) {
                    this.initWebSocket()
                },
                websocketOnmessage: function(e) {
                    JSON.parse(e.data)
                },
                websocketSend: function(e) {
                    this.websock.send(e)
                },
                websocketClose: function(e) {},
                imStart: function imStart(data) {
                    var that = this;
                    layui.use(["mobile", "layer"], function() {
                        var mobile = layui.mobile
                          , layim = mobile.layim
                          , layer = layui.layer;
                        window.layim = layim;
                        var userInfo = that.$store.state.userInfo
                          , Xtoken = that.$store.state.token;
                        layim.config({
                            init: {
                                mine: {
                                    username: userInfo.nickname,
                                    id: userInfo.id,
                                    avatar: userInfo.avatar
                                },
                                friend: [],
                                hide: !0
                            },
                            uploadImage: {
                                url: window.domain + "api/upload/uploadImg",
                                type: "post"
                            },
                            hide: !0
                        });
                        var socket = new WebSocket("wss://wss.ggaffection.com:443");
                        window.chatSocket = socket,
                        socket.onclose = function(e) {
                            window.chatSocket = !1
                        }
                        ,
                        socket.onopen = function() {
                            var e = {
                                token: Xtoken || "",
                                type: "init",
                                id: userInfo.id,
                                username: userInfo.chatuser_cn.nickname,
                                avatar: userInfo.avatar,
                                sign: userInfo.chatuser_cn.signature,
                                vip: userInfo.vip,
                                gender: userInfo.gender
                            };
                            socket.send(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(e)),
                            console.log("chat start ......")
                        }
                        ,
                        layim.on("sendMessage", function(e) {
                            var t = {
                                id: userInfo.id,
                                username: userInfo.chatuser_cn.nickname,
                                avatar: userInfo.avatar,
                                sign: userInfo.chatuser_cn.signature,
                                content: e.mine.content,
                                mine: e.mine.mine
                            }
                              , n = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(t),
                            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(e.to),
                            {
                                token: Xtoken || "",
                                type: "chatMessage",
                                data: {
                                    mine: t,
                                    to: e.to
                                }
                            });
                            socket.send(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(n)),
                            n.send = 1,
                            that.$root.eventHub.$emit("updateMsg", n)
                        }),
                        socket.onmessage = function(res) {
                            var data = eval("(" + res.data + ")");
                            switch (data.message_type) {
                            case "ping":
                                var sendData = {
                                    token: Xtoken || "",
                                    type: "ping"
                                };
                                socket.send(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(sendData));
                                break;
                            case "init":
                                break;
                            case "addUser":
                                layim.addList(data.data);
                                break;
                            case "delUser":
                                layim.removeList({
                                    type: "friend",
                                    id: data.data.id
                                });
                                break;
                            case "addGroup":
                                layim.addList(data.data);
                                break;
                            case "delGroup":
                                layim.removeList({
                                    type: "group",
                                    id: data.data.id
                                });
                                break;
                            case "limit":
                                return layer.msg(that.$t("tips.chat_limit")),
                                !1;
                            case "chatMessage":
                                data.data.send = 0;
                                var chatuser_id = that.$store.state.chatuser_id;
                                if (chatuser_id == data.data.id)
                                    that.$root.eventHub.$emit("chatReceive", data.data);
                                else {
                                    that.$root.eventHub.$emit("updateMsg", data.data);
                                    var userInfo = that.$store.state.userInfo
                                      , setKey = userInfo.id + "_chat_" + data.data.id
                                      , unreadNum = localStorage.getItem(setKey);
                                    unreadNum = unreadNum || 0,
                                    localStorage.setItem(setKey, parseInt(unreadNum) + 1)
                                }
                                var audio = new Audio;
                                audio.src = "../static/msg.mp3",
                                audio.play();
                                break;
                            case "logMessage":
                                setTimeout(function() {}, 1e3);
                                break;
                            case "logout":
                                socket.close()
                            }
                        }
                        ,
                        layim.showNew("List", !1),
                        layim.showNew("More", !1)
                    })
                },
                imCustom: function(e) {
                    return this.$router.push({
                        name: "chat",
                        query: {
                            id: e.id
                        }
                    }),
                    !1
                },
                imService: function(e) {
                    this.$router.push({
                        name: "chat",
                        query: {
                            id: e.id
                        }
                    })
                }
            }
        }
    },
    dgEa: function(e, t, n) {
        "use strict";
        var i = n("piuB")
          , a = n("D8a4")
          , s = (a.a,
        i.a,
        Boolean,
        String,
        String,
        Object,
        String,
        {
            name: "tabbar-item",
            components: {
                Badge: a.a
            },
            mounted: function() {
                this.$slots.icon || (this.simple = !0),
                this.$slots["icon-active"] && (this.hasActiveIcon = !0)
            },
            mixins: [i.a],
            props: {
                showDot: {
                    type: Boolean,
                    default: !1
                },
                badge: String,
                link: [String, Object],
                iconClass: String
            },
            computed: {
                isActive: function() {
                    return this.$parent.index === this.currentIndex
                }
            },
            data: function() {
                return {
                    simple: !1,
                    hasActiveIcon: !1
                }
            }
        })
          , r = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("a", {
                staticClass: "weui-tabbar__item",
                class: {
                    "weui-bar__item_on": e.isActive,
                    "vux-tabbar-simple": e.simple
                },
                attrs: {
                    href: "javascript:;"
                },
                on: {
                    click: function(t) {
                        return e.onItemClick(!0)
                    }
                }
            }, [e.simple ? e._e() : n("div", {
                staticClass: "weui-tabbar__icon",
                class: [e.iconClass || e.$parent.iconClass, {
                    "vux-reddot": e.showDot
                }]
            }, [e.simple || e.hasActiveIcon && e.isActive ? e._e() : e._t("icon"), e._v(" "), !e.simple && e.hasActiveIcon && e.isActive ? e._t("icon-active") : e._e(), e._v(" "), e.badge ? n("sup", [n("badge", {
                attrs: {
                    text: e.badge
                }
            })], 1) : e._e()], 2), e._v(" "), n("p", {
                staticClass: "weui-tabbar__label"
            }, [e._t("label")], 2)])
        }
          , o = []
          , l = {
            render: r,
            staticRenderFns: o
        }
          , u = l
          , c = n("VU/8")
          , _ = c(s, u, !1, null, null, null);
        t.a = _.exports
    },
    g3Gj: function(e, t) {},
    iASr: function(e, t) {},
    kbG3: function(e, t, n) {
        "use strict";
        function i(e) {
            n("3k2l")
        }
        var a = {
            name: "inline-desc"
        }
          , s = function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("span", {
                staticClass: "vux-label-desc"
            }, [e._t("default")], 2)
        }
          , r = []
          , o = {
            render: s,
            staticRenderFns: r
        }
          , l = o
          , u = n("VU/8")
          , c = i
          , _ = u(a, l, !1, c, null, null);
        t.a = _.exports
    },
    kllH: function(e, t) {},
    nnSp: function(e, t) {},
    oWtu: function(e, t, n) {
        "use strict";
        function i(e) {
            n("2lnh")
        }
        var a = (String,
        Boolean,
        {
            name: "icon",
            props: {
                type: String,
                isMsg: Boolean
            },
            computed: {
                className: function() {
                    return "weui-icon weui_icon_" + this.type + " weui-icon-" + this.type.replace(/_/g, "-")
                }
            }
        })
          , s = function() {
            var e = this
              , t = e.$createElement;
            return (e._self._c || t)("i", {
                class: [e.className, e.isMsg ? "weui-icon_msg" : ""]
            })
        }
          , r = []
          , o = {
            render: s,
            staticRenderFns: r
        }
          , l = o
          , u = n("VU/8")
          , c = i
          , _ = u(a, l, !1, c, null, null);
        t.a = _.exports
    },
    owug: function(e, t) {},
    pDNl: function(e, t, n) {
        "use strict";
        function i(e) {
            n("aiyf")
        }
        var a = n("fZjL")
          , s = n.n(a)
          , r = n("f6Hi")
          , o = n("oWtu")
          , l = n("rLAy")
          , u = n("kbG3")
          , c = n("2LX0")
          , _ = n.n(c)
          , d = n("Ewe+")
          , m = n.n(d)
          , h = n("nror")
          , p = n("lFEC")
          , g = n.n(p)
          , f = {
            email: {
                fn: _.a,
                msg: "邮箱格式"
            },
            "china-mobile": {
                fn: function(e) {
                    return m()(e, "zh-CN")
                },
                msg: "手机号码"
            },
            "china-name": {
                fn: function(e) {
                    return e.length >= 2 && e.length <= 6
                },
                msg: "中文姓名"
            }
        }
          , b = (r.a,
        o.a,
        u.a,
        l.a,
        String,
        String,
        String,
        String,
        Number,
        String,
        Boolean,
        Boolean,
        String,
        String,
        String,
        Function,
        Number,
        Number,
        Boolean,
        String,
        String,
        String,
        String,
        String,
        String,
        Boolean,
        String,
        Number,
        String,
        String,
        String,
        Boolean,
        {
            email: {
                fn: _.a,
                msg: "邮箱格式"
            },
            "china-mobile": {
                fn: function(e) {
                    return m()(e, "zh-CN")
                },
                msg: "手机号码"
            },
            "china-name": {
                fn: function(e) {
                    return e.length >= 2 && e.length <= 6
                },
                msg: "中文姓名"
            }
        })
          , v = {
            name: "x-input",
            created: function() {
                var e = this;
                this.currentValue = void 0 === this.value || null === this.value ? "" : this.mask ? this.maskValue(this.value) : this.value,
                !this.required || void 0 !== this.currentValue && "" !== this.currentValue || (this.valid = !1),
                this.handleChangeEvent = !0,
                this.debounce && (this._debounce = Object(h.a)(function() {
                    e.$emit("on-change", e.currentValue)
                }, this.debounce))
            },
            beforeMount: function() {
                this.$slots && this.$slots["restricted-label"] && (this.hasRestrictedLabel = !0),
                this.$slots && this.$slots["right-full-height"] && (this.hasRightFullHeightSlot = !0)
            },
            beforeDestroy: function() {
                this._debounce && this._debounce.cancel(),
                window.removeEventListener("resize", this.scrollIntoView)
            },
            mixins: [r.a],
            components: {
                Icon: o.a,
                InlineDesc: u.a,
                Toast: l.a
            },
            props: {
                title: {
                    type: String,
                    default: ""
                },
                type: {
                    type: String,
                    default: "text"
                },
                placeholder: String,
                value: [String, Number],
                name: String,
                readonly: Boolean,
                disabled: Boolean,
                keyboard: String,
                inlineDesc: String,
                isType: [String, Function],
                min: Number,
                max: Number,
                showClear: {
                    type: Boolean,
                    default: !0
                },
                equalWith: String,
                textAlign: String,
                autocomplete: {
                    type: String,
                    default: "off"
                },
                autocapitalize: {
                    type: String,
                    default: "off"
                },
                autocorrect: {
                    type: String,
                    default: "off"
                },
                spellcheck: {
                    type: String,
                    default: "false"
                },
                novalidate: {
                    type: Boolean,
                    default: !1
                },
                iconType: String,
                debounce: Number,
                placeholderAlign: String,
                labelWidth: String,
                mask: String,
                shouldToastError: {
                    type: Boolean,
                    default: !0
                }
            },
            computed: {
                labelStyles: function() {
                    var e = this.$parent
                      , t = void 0 === e ? {} : e;
                    return {
                        width: this.labelWidthComputed || t.labelWidth || this.labelWidthComputed,
                        textAlign: t.labelAlign,
                        marginRight: t.labelMarginRight
                    }
                },
                labelClass: function() {
                    return {
                        "vux-cell-justify": this.$parent && ("justify" === this.$parent.labelAlign || "justify" === this.$parent.$parent.labelAlign)
                    }
                },
                pattern: function() {
                    if ("number" === this.keyboard || "china-mobile" === this.isType)
                        return "[0-9]*"
                },
                labelWidthComputed: function() {
                    var e = this.title.replace(/[^x00-xff]/g, "00").length / 2 + 1;
                    if (e < 10)
                        return e + "em"
                },
                hasErrors: function() {
                    return s()(this.errors).length > 0
                },
                inputStyle: function() {
                    if (this.textAlign)
                        return {
                            textAlign: this.textAlign
                        }
                },
                showWarn: function() {
                    return !this.novalidate && !this.equalWith && !this.valid && this.firstError && (this.touched || this.forceShowError)
                }
            },
            mounted: function() {
                window.addEventListener("resize", this.scrollIntoView)
            },
            methods: {
                scrollIntoView: function() {
                    var e = this
                      , t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0;
                    /iphone/i.test(navigator.userAgent),
                    "INPUT" !== document.activeElement.tagName && "TEXTAREA" !== document.activeElement.tagName || setTimeout(function() {
                        e.$refs.input.scrollIntoViewIfNeeded(!0)
                    }, t)
                },
                onClickErrorIcon: function() {
                    this.shouldToastError && this.firstError && (this.showErrorToast = !0),
                    this.$emit("on-click-error-icon", this.firstError)
                },
                maskValue: function(e) {
                    return this.mask ? g.a.toPattern(e, this.mask) : e
                },
                reset: function() {
                    var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "";
                    this.dirty = !1,
                    this.currentValue = e,
                    this.firstError = "",
                    this.valid = !0
                },
                clear: function() {
                    this.currentValue = "",
                    this.focus(),
                    this.$emit("on-click-clear-icon")
                },
                focus: function() {
                    this.$refs.input.focus()
                },
                blur: function() {
                    this.$refs.input.blur()
                },
                focusHandler: function(e) {
                    var t = this;
                    this.$emit("on-focus", this.currentValue, e),
                    this.isFocus = !0,
                    setTimeout(function() {
                        !t.$refs.input || t.$refs.input.scrollIntoViewIfNeeded(!1)
                    }, 1e3)
                },
                onBlur: function(e) {
                    this.setTouched(),
                    this.validate(),
                    this.isFocus = !1,
                    this.$emit("on-blur", this.currentValue, e)
                },
                onKeyUp: function(e) {
                    "Enter" === e.key && (e.target.blur(),
                    this.$emit("on-enter", this.currentValue, e))
                },
                getError: function() {
                    var e = s()(this.errors)[0];
                    this.firstError = this.errors[e]
                },
                validate: function() {
                    if (void 0 !== this.equalWith)
                        return void this.validateEqual();
                    if (this.errors = {},
                    !this.currentValue && !this.required)
                        return void (this.valid = !0);
                    if (!this.currentValue && this.required)
                        return this.valid = !1,
                        this.errors.required = "必填哦",
                        void this.getError();
                    if ("string" == typeof this.isType) {
                        var e = b[this.isType];
                        if (e) {
                            var t = this.currentValue;
                            if ("china-mobile" === this.isType && "999 9999 9999" === this.mask && (t = this.currentValue.replace(/\s+/g, "")),
                            this.valid = e.fn(t),
                            !this.valid)
                                return this.forceShowError = !0,
                                this.errors.format = e.msg + "格式不对哦~",
                                void this.getError();
                            delete this.errors.format
                        }
                    }
                    if ("function" == typeof this.isType) {
                        var n = this.isType(this.currentValue);
                        if (this.valid = n.valid,
                        !this.valid)
                            return this.errors.format = n.msg,
                            this.forceShowError = !0,
                            void this.getError();
                        delete this.errors.format
                    }
                    if (this.min) {
                        if (this.currentValue.length < this.min)
                            return this.errors.min = "最少应该输入" + this.min + "个字符哦",
                            this.valid = !1,
                            void this.getError();
                        delete this.errors.min
                    }
                    if (this.max) {
                        if (this.currentValue.length > this.max)
                            return this.errors.max = "最多可以输入" + this.max + "个字符哦",
                            this.valid = !1,
                            void (this.forceShowError = !0);
                        this.forceShowError = !1,
                        delete this.errors.max
                    }
                    this.valid = !0
                },
                validateEqual: function() {
                    return !this.equalWith && this.currentValue ? (this.valid = !1,
                    void (this.errors.equal = "输入不一致")) : (this.dirty || this.currentValue.length >= this.equalWith.length) && this.currentValue !== this.equalWith ? (this.valid = !1,
                    void (this.errors.equal = "输入不一致")) : void (!this.currentValue && this.required ? this.valid = !1 : (this.valid = !0,
                    delete this.errors.equal))
                },
                _getInputMaskSelection: function(e, t, n, i) {
                    if (!this.mask || i && 0 === t)
                        return e;
                    if (0 === t && (t = this.lastDirection),
                    t > 0) {
                        if (!this.mask.substr(e - t, 1).match(/[9SA]/))
                            return this._getInputMaskSelection(e + 1, t, n, !0)
                    }
                    return e
                }
            },
            data: function() {
                return {
                    hasRightFullHeightSlot: !1,
                    hasRestrictedLabel: !1,
                    firstError: "",
                    forceShowError: !1,
                    hasLengthEqual: !1,
                    valid: !0,
                    currentValue: "",
                    showErrorToast: !1,
                    isFocus: !1
                }
            },
            watch: {
                mask: function(e) {
                    e && this.currentValue && (this.currentValue = this.maskValue(this.currentValue))
                },
                valid: function() {
                    this.getError()
                },
                value: function(e) {
                    this.currentValue = e
                },
                equalWith: function(e) {
                    e && this.equalWith ? (e.length === this.equalWith.length && (this.hasLengthEqual = !0),
                    this.validateEqual()) : this.validate()
                },
                currentValue: function(e, t) {
                    var n = this
                      , i = null;
                    !this.equalWith && e && this.validateEqual(),
                    e && this.equalWith ? (e.length === this.equalWith.length && (this.hasLengthEqual = !0),
                    this.validateEqual()) : this.validate();
                    try {
                        i = this.$refs.input.selectionStart;
                        var a = e.length - t.length;
                        i = this._getInputMaskSelection(i, a, this.maskValue(e)),
                        this.lastDirection = a
                    } catch (e) {}
                    this.$emit("input", this.maskValue(e)),
                    this.$nextTick(function() {
                        n.$refs.input.selectionStart !== i && (n.$refs.input.selectionStart = i,
                        n.$refs.input.selectionEnd = i),
                        n.currentValue !== n.maskValue(e) && (n.currentValue = n.maskValue(e))
                    }),
                    this._debounce ? this._debounce() : this.$emit("on-change", e)
                }
            }
        }
          , w = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "vux-x-input weui-cell",
                class: {
                    "weui-cell_warn": e.showWarn,
                    disabled: e.disabled,
                    "vux-x-input-has-right-full": e.hasRightFullHeightSlot
                }
            }, [n("div", {
                staticClass: "weui-cell__hd"
            }, [e.hasRestrictedLabel ? n("div", {
                style: e.labelStyles
            }, [e._t("restricted-label")], 2) : e._e(), e._v(" "), e._t("label", [e.title ? n("label", {
                staticClass: "weui-label",
                class: e.labelClass,
                style: {
                    width: e.labelWidth || e.$parent.labelWidth || e.labelWidthComputed,
                    textAlign: e.$parent.labelAlign,
                    marginRight: e.$parent.labelMarginRight
                },
                attrs: {
                    for: "vux-x-input-" + e.uuid
                },
                domProps: {
                    innerHTML: e._s(e.title)
                }
            }) : e._e(), e._v(" "), e.inlineDesc ? n("inline-desc", [e._v(e._s(e.inlineDesc))]) : e._e()])], 2), e._v(" "), n("div", {
                staticClass: "weui-cell__bd weui-cell__primary",
                class: e.placeholderAlign ? "vux-x-input-placeholder-" + e.placeholderAlign : ""
            }, [e.type && "text" !== e.type ? e._e() : n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.currentValue,
                    expression: "currentValue"
                }],
                ref: "input",
                staticClass: "weui-input",
                style: e.inputStyle,
                attrs: {
                    id: "vux-x-input-" + e.uuid,
                    maxlength: e.max,
                    autocomplete: e.autocomplete,
                    autocapitalize: e.autocapitalize,
                    autocorrect: e.autocorrect,
                    spellcheck: e.spellcheck,
                    type: "text",
                    name: e.name,
                    pattern: e.pattern,
                    placeholder: e.placeholder,
                    readonly: e.readonly,
                    disabled: e.disabled
                },
                domProps: {
                    value: e.currentValue
                },
                on: {
                    focus: e.focusHandler,
                    blur: e.onBlur,
                    keyup: e.onKeyUp,
                    input: function(t) {
                        t.target.composing || (e.currentValue = t.target.value)
                    }
                }
            }), e._v(" "), "number" === e.type ? n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.currentValue,
                    expression: "currentValue"
                }],
                ref: "input",
                staticClass: "weui-input",
                style: e.inputStyle,
                attrs: {
                    id: "vux-x-input-" + e.uuid,
                    maxlength: e.max,
                    autocomplete: e.autocomplete,
                    autocapitalize: e.autocapitalize,
                    autocorrect: e.autocorrect,
                    spellcheck: e.spellcheck,
                    type: "number",
                    name: e.name,
                    pattern: e.pattern,
                    placeholder: e.placeholder,
                    readonly: e.readonly,
                    disabled: e.disabled
                },
                domProps: {
                    value: e.currentValue
                },
                on: {
                    focus: e.focusHandler,
                    blur: e.onBlur,
                    keyup: e.onKeyUp,
                    input: function(t) {
                        t.target.composing || (e.currentValue = t.target.value)
                    }
                }
            }) : e._e(), e._v(" "), "email" === e.type ? n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.currentValue,
                    expression: "currentValue"
                }],
                ref: "input",
                staticClass: "weui-input",
                style: e.inputStyle,
                attrs: {
                    id: "vux-x-input-" + e.uuid,
                    maxlength: e.max,
                    autocomplete: e.autocomplete,
                    autocapitalize: e.autocapitalize,
                    autocorrect: e.autocorrect,
                    spellcheck: e.spellcheck,
                    type: "email",
                    name: e.name,
                    pattern: e.pattern,
                    placeholder: e.placeholder,
                    readonly: e.readonly,
                    disabled: e.disabled
                },
                domProps: {
                    value: e.currentValue
                },
                on: {
                    focus: e.focusHandler,
                    blur: e.onBlur,
                    keyup: e.onKeyUp,
                    input: function(t) {
                        t.target.composing || (e.currentValue = t.target.value)
                    }
                }
            }) : e._e(), e._v(" "), "password" === e.type ? n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.currentValue,
                    expression: "currentValue"
                }],
                ref: "input",
                staticClass: "weui-input",
                style: e.inputStyle,
                attrs: {
                    id: "vux-x-input-" + e.uuid,
                    maxlength: e.max,
                    autocomplete: e.autocomplete,
                    autocapitalize: e.autocapitalize,
                    autocorrect: e.autocorrect,
                    spellcheck: e.spellcheck,
                    type: "password",
                    name: e.name,
                    pattern: e.pattern,
                    placeholder: e.placeholder,
                    readonly: e.readonly,
                    disabled: e.disabled
                },
                domProps: {
                    value: e.currentValue
                },
                on: {
                    focus: e.focusHandler,
                    blur: e.onBlur,
                    keyup: e.onKeyUp,
                    input: function(t) {
                        t.target.composing || (e.currentValue = t.target.value)
                    }
                }
            }) : e._e(), e._v(" "), "tel" === e.type ? n("input", {
                directives: [{
                    name: "model",
                    rawName: "v-model",
                    value: e.currentValue,
                    expression: "currentValue"
                }],
                ref: "input",
                staticClass: "weui-input",
                style: e.inputStyle,
                attrs: {
                    id: "vux-x-input-" + e.uuid,
                    maxlength: e.max,
                    autocomplete: e.autocomplete,
                    autocapitalize: e.autocapitalize,
                    autocorrect: e.autocorrect,
                    spellcheck: e.spellcheck,
                    type: "tel",
                    name: e.name,
                    pattern: e.pattern,
                    placeholder: e.placeholder,
                    readonly: e.readonly,
                    disabled: e.disabled
                },
                domProps: {
                    value: e.currentValue
                },
                on: {
                    focus: e.focusHandler,
                    blur: e.onBlur,
                    keyup: e.onKeyUp,
                    input: function(t) {
                        t.target.composing || (e.currentValue = t.target.value)
                    }
                }
            }) : e._e()]), e._v(" "), n("div", {
                staticClass: "weui-cell__ft"
            }, [n("icon", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.hasRightFullHeightSlot && !e.equalWith && e.showClear && "" !== e.currentValue && !e.readonly && !e.disabled && e.isFocus,
                    expression: "!hasRightFullHeightSlot && !equalWith && showClear && currentValue !== '' && !readonly && !disabled && isFocus"
                }],
                attrs: {
                    type: "clear"
                },
                nativeOn: {
                    click: function(t) {
                        return e.clear(t)
                    }
                }
            }), e._v(" "), n("icon", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.showWarn,
                    expression: "showWarn"
                }],
                staticClass: "vux-input-icon",
                attrs: {
                    type: "warn",
                    title: e.valid ? "" : e.firstError
                },
                nativeOn: {
                    click: function(t) {
                        return e.onClickErrorIcon(t)
                    }
                }
            }), e._v(" "), !e.novalidate && e.hasLengthEqual && e.dirty && e.equalWith && !e.valid ? n("icon", {
                staticClass: "vux-input-icon",
                attrs: {
                    type: "warn"
                },
                nativeOn: {
                    click: function(t) {
                        return e.onClickErrorIcon(t)
                    }
                }
            }) : e._e(), e._v(" "), n("icon", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: !e.novalidate && e.equalWith && e.equalWith === e.currentValue && e.valid,
                    expression: "!novalidate && equalWith && equalWith === currentValue && valid"
                }],
                attrs: {
                    type: "success"
                }
            }), e._v(" "), n("icon", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.novalidate && "success" === e.iconType,
                    expression: "novalidate && iconType === 'success'"
                }],
                staticClass: "vux-input-icon",
                attrs: {
                    type: "success"
                }
            }), e._v(" "), n("icon", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.novalidate && "error" === e.iconType,
                    expression: "novalidate && iconType === 'error'"
                }],
                staticClass: "vux-input-icon",
                attrs: {
                    type: "warn"
                }
            }), e._v(" "), e._t("right"), e._v(" "), e.hasRightFullHeightSlot ? n("div", {
                staticClass: "vux-x-input-right-full"
            }, [e._t("right-full-height")], 2) : e._e()], 2), e._v(" "), n("toast", {
                attrs: {
                    type: "text",
                    width: "auto",
                    time: 600
                },
                model: {
                    value: e.showErrorToast,
                    callback: function(t) {
                        e.showErrorToast = t
                    },
                    expression: "showErrorToast"
                }
            }, [e._v(e._s(e.firstError))])], 1)
        }
          , y = []
          , k = {
            render: w,
            staticRenderFns: y
        }
          , x = k
          , E = n("VU/8")
          , S = i
          , I = E(v, x, !1, S, null, null);
        t.a = I.exports
    },
    rLAy: function(e, t, n) {
        "use strict";
        function i(e) {
            n("kllH")
        }
        var a = n("xNvf")
          , s = (a.a,
        Boolean,
        Number,
        String,
        String,
        String,
        Boolean,
        String,
        String,
        {
            name: "toast",
            mixins: [a.a],
            props: {
                value: Boolean,
                time: {
                    type: Number,
                    default: 2e3
                },
                type: {
                    type: String,
                    default: "success"
                },
                transition: String,
                width: {
                    type: String,
                    default: "7.6em"
                },
                isShowMask: {
                    type: Boolean,
                    default: !1
                },
                text: String,
                position: String
            },
            data: function() {
                return {
                    show: !1
                }
            },
            created: function() {
                this.value && (this.show = !0)
            },
            computed: {
                currentTransition: function() {
                    return this.transition ? this.transition : "top" === this.position ? "vux-slide-from-top" : "bottom" === this.position ? "vux-slide-from-bottom" : "vux-fade"
                },
                toastClass: function() {
                    return {
                        "weui-toast_forbidden": "warn" === this.type,
                        "weui-toast_cancel": "cancel" === this.type,
                        "weui-toast_success": "success" === this.type,
                        "weui-toast_text": "text" === this.type,
                        "vux-toast-top": "top" === this.position,
                        "vux-toast-bottom": "bottom" === this.position,
                        "vux-toast-middle": "middle" === this.position
                    }
                },
                style: function() {
                    if ("text" === this.type && "auto" === this.width)
                        return {
                            padding: "10px"
                        }
                }
            },
            watch: {
                show: function(e) {
                    var t = this;
                    e && (this.$emit("input", !0),
                    this.$emit("on-show"),
                    this.fixSafariOverflowScrolling("auto"),
                    clearTimeout(this.timeout),
                    this.timeout = setTimeout(function() {
                        t.show = !1,
                        t.$emit("input", !1),
                        t.$emit("on-hide"),
                        t.fixSafariOverflowScrolling("touch")
                    }, this.time))
                },
                value: function(e) {
                    this.show = e
                }
            }
        })
          , r = function() {
            var e = this
              , t = e.$createElement
              , n = e._self._c || t;
            return n("div", {
                staticClass: "vux-toast"
            }, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.isShowMask && e.show,
                    expression: "isShowMask && show"
                }],
                staticClass: "weui-mask_transparent"
            }), e._v(" "), n("transition", {
                attrs: {
                    name: e.currentTransition
                }
            }, [n("div", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: e.show,
                    expression: "show"
                }],
                staticClass: "weui-toast",
                class: e.toastClass,
                style: {
                    width: e.width
                }
            }, [n("i", {
                directives: [{
                    name: "show",
                    rawName: "v-show",
                    value: "text" !== e.type,
                    expression: "type !== 'text'"
                }],
                staticClass: "weui-icon-success-no-circle weui-icon_toast"
            }), e._v(" "), e.text ? n("p", {
                staticClass: "weui-toast__content",
                style: e.style,
                domProps: {
                    innerHTML: e._s(e.text)
                }
            }) : n("p", {
                staticClass: "weui-toast__content",
                style: e.style
            }, [e._t("default")], 2)])])], 1)
        }
          , o = []
          , l = {
            render: r,
            staticRenderFns: o
        }
          , u = l
          , c = n("VU/8")
          , _ = i
          , d = c(s, u, !1, _, null, null);
        t.a = d.exports
    },
    xzd6: function(module, __webpack_exports__, __webpack_require__) {
        "use strict";
        var __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__ = __webpack_require__("mvHQ"), __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify__), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__ = __webpack_require__("bOdI"), __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty__), __WEBPACK_IMPORTED_MODULE_2__assets_css_style_css__ = __webpack_require__("VaBq"), __WEBPACK_IMPORTED_MODULE_2__assets_css_style_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__assets_css_style_css__), __WEBPACK_IMPORTED_MODULE_3__assets_css_icon_css__ = __webpack_require__("/5Jc"), __WEBPACK_IMPORTED_MODULE_3__assets_css_icon_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__assets_css_icon_css__), __WEBPACK_IMPORTED_MODULE_4_vux_src_directives_transfer_dom_index_js__ = __webpack_require__("63CM"), __WEBPACK_IMPORTED_MODULE_5_vux_src_components_tabbar_tabbar_vue__ = __webpack_require__("UIMx"), __WEBPACK_IMPORTED_MODULE_6_vux_src_components_tabbar_tabbar_item_vue__ = __webpack_require__("dgEa"), _components;
        __webpack_exports__.a = {
            name: "app",
            data: function() {
                return {
                    tabbar: !1,
                    tabbarName: "home"
                }
            },
            directives: {
                TransferDom: __WEBPACK_IMPORTED_MODULE_4_vux_src_directives_transfer_dom_index_js__.a
            },
            components: (_components = {
                Tabbar: __WEBPACK_IMPORTED_MODULE_5_vux_src_components_tabbar_tabbar_vue__.a
            },
            __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_components, "Tabbar", __WEBPACK_IMPORTED_MODULE_5_vux_src_components_tabbar_tabbar_vue__.a),
            __WEBPACK_IMPORTED_MODULE_1_babel_runtime_helpers_defineProperty___default()(_components, "TabbarItem", __WEBPACK_IMPORTED_MODULE_6_vux_src_components_tabbar_tabbar_item_vue__.a),
            _components),
            watch: {
                $route: function(e, t) {
                    "/" == e.path || "/user" == e.path || "/home" == e.path || "/msg" == e.path || "/my" == e.path ? (this.$store.commit("updateTabbarShow", !0),
                    this.tabbar = !0,
                    this.tabbarName = e.name) : (this.$store.commit("updateTabbarShow", !1),
                    this.tabbar = !1)
                }
            },
            computed: {
                tabbarShow: function() {
                    return this.$store.getters.getTabbarShow
                }
            },
            created: function() {
                console.log("App created ====================================================>>>>>>>>");
                var e = this;
                e.$root.eventHub.$on("imStart", function(t) {
                    e.imStart(t)
                }),
                e.$root.eventHub.$on("imCustom", function(t) {
                    e.imCustom(t)
                }),
                e.$root.eventHub.$on("imService", function(t) {
                    e.imService(t)
                }),
                e.$root.eventHub.$on("logout", function(t) {
                    if (e.$store.commit("logout", {}),
                    window.chatSocket) {
                        var n = {
                            token: "",
                            type: "offline",
                            data: {}
                        };
                        window.chatSocket.send(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(n))
                    }
                    e.$router.replace({
                        name: "/login"
                    })
                })
            },
            methods: {
                websocketOnopen: function() {
                    var e = this
                      , t = e.$store.state.userInfo
                      , n = e.$store.state.token
                      , i = {
                        token: n || "",
                        type: "init",
                        id: t.id,
                        username: t.chatuser_cn.nickname,
                        avatar: t.avatar,
                        sign: t.chatuser_cn.signature,
                        vip: t.vip,
                        gender: t.gender
                    };
                    e.websocketSend(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(i))
                },
                websocketOnerror: function(e) {
                    this.initWebSocket()
                },
                websocketOnmessage: function(e) {
                    JSON.parse(e.data)
                },
                websocketSend: function(e) {
                    this.websock.send(e)
                },
                websocketClose: function(e) {},
                imStart: function imStart(data) {
                    var that = this;
                    layui.use(["mobile", "layer"], function() {
                        var mobile = layui.mobile
                          , layim = mobile.layim
                          , layer = layui.layer;
                        window.layim = layim;
                        var userInfo = that.$store.state.userInfo
                          , Xtoken = that.$store.state.token;
                        layim.config({
                            init: {
                                mine: {
                                    username: userInfo.nickname,
                                    id: userInfo.id,
                                    avatar: userInfo.avatar
                                },
                                friend: [],
                                hide: !0
                            },
                            uploadImage: {
                                url: window.domain + "api/upload/uploadImg",
                                type: "post"
                            },
                            hide: !0
                        });
                        var socket = new WebSocket("wss://wss.ggaffection.com:443");
                        window.chatSocket = socket,
                        socket.onclose = function(e) {
                            window.chatSocket = !1
                        }
                        ,
                        socket.onopen = function() {
                            var e = {
                                token: Xtoken || "",
                                type: "init",
                                id: userInfo.id,
                                username: userInfo.chatuser_cn.nickname,
                                avatar: userInfo.avatar,
                                sign: userInfo.chatuser_cn.signature,
                                vip: userInfo.vip,
                                gender: userInfo.gender
                            };
                            socket.send(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(e)),
                            console.log("chat start ......")
                        }
                        ,
                        layim.on("sendMessage", function(e) {
                            var t = {
                                id: userInfo.id,
                                username: userInfo.chatuser_cn.nickname,
                                avatar: userInfo.avatar,
                                sign: userInfo.chatuser_cn.signature,
                                content: e.mine.content,
                                mine: e.mine.mine
                            }
                              , n = (__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(t),
                            __WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(e.to),
                            {
                                token: Xtoken || "",
                                type: "chatMessage",
                                data: {
                                    mine: t,
                                    to: e.to
                                }
                            });
                            socket.send(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(n)),
                            n.send = 1,
                            that.$root.eventHub.$emit("updateMsg", n)
                        }),
                        socket.onmessage = function(res) {
                            var data = eval("(" + res.data + ")");
                            switch (data.message_type) {
                            case "ping":
                                var sendData = {
                                    token: Xtoken || "",
                                    type: "ping"
                                };
                                socket.send(__WEBPACK_IMPORTED_MODULE_0_babel_runtime_core_js_json_stringify___default()(sendData));
                                break;
                            case "init":
                                break;
                            case "addUser":
                                layim.addList(data.data);
                                break;
                            case "delUser":
                                layim.removeList({
                                    type: "friend",
                                    id: data.data.id
                                });
                                break;
                            case "addGroup":
                                layim.addList(data.data);
                                break;
                            case "delGroup":
                                layim.removeList({
                                    type: "group",
                                    id: data.data.id
                                });
                                break;
                            case "limit":
                                return layer.msg(that.$t("tips.chat_limit")),
                                !1;
                            case "chatMessage":
                                data.data.send = 0;
                                var chatuser_id = that.$store.state.chatuser_id;
                                if (chatuser_id == data.data.id)
                                    that.$root.eventHub.$emit("chatReceive", data.data);
                                else {
                                    that.$root.eventHub.$emit("updateMsg", data.data);
                                    var userInfo = that.$store.state.userInfo
                                      , setKey = userInfo.id + "_chat_" + data.data.id
                                      , unreadNum = localStorage.getItem(setKey);
                                    unreadNum = unreadNum || 0,
                                    localStorage.setItem(setKey, parseInt(unreadNum) + 1)
                                }
                                var audio = new Audio;
                                audio.src = "../static/msg.mp3",
                                audio.play();
                                break;
                            case "logMessage":
                                setTimeout(function() {}, 1e3);
                                break;
                            case "logout":
                                socket.close()
                            }
                        }
                        ,
                        layim.showNew("List", !1),
                        layim.showNew("More", !1)
                    })
                },
                imCustom: function(e) {
                    return this.$router.push({
                        name: "chat",
                        query: {
                            id: e.id
                        }
                    }),
                    !1
                },
                imService: function(e) {
                    this.$router.push({
                        name: "chat",
                        query: {
                            id: e.id
                        }
                    })
                }
            }
        }
    }
}, ["NHnr"]);
//# sourceMappingURL=app.f41c1238eb1520deb461.js.map
