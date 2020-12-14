var site = function(t) {
    "use strict";
    return {
        setBody: function() {
            this.b = t("body")
        },
        zebraSections: function() {
            t(".colors-default-2").removeClass("colors-default-2"), t(".colors-default:odd").addClass("colors-default-2")
        },
        navHandler: function(n) {
            if (/^#\w+-\d+$/.test(n)) {
                var i = n.indexOf("-"),
                    s = n.substring(1, i),
                    e = n.substring(i + 1),
                    o = t(".main > ." + s + "-" + e);
                return o.length > 0 && (site.scrollTo(o), !0)
            }
        },
        bindNav: function() {
            var n = this;
            this.b.on("click.site", "a", function(i) {
                n.navHandler(t(this).attr("href")) && i.preventDefault()
            }), setTimeout(function() {
                n.navHandler(window.location.hash)
            }, 350)
        },
        bind: function() {
            this.setBody(), this.unbind(), this.b.on("refresh.site", function() {
                this.zebraSections()
            }.bind(this)), this.bindNav()
        },
        unbind: function() {
            this.b.off(".site")
        },
        init: function() {
            if (t.isReady) {
                this.bind(), this.zebraSections();
                var n = t(".editing").length,
                    i = t(".demo").length,
                    s = n || i;
                gaEvents.start(s, "nav, section")
            } else t(function() {
                this.init()
            }.bind(this))
        }
    }
}(jQuery);
site.init();
! function(i, t) {
    "use strict";
    var n = null,
        e = function() {
            var i = $(".editing").length > 0;
            sessionStorage && !i && sessionStorage.setItem("showNotification", "false"), $(".notification", n).addClass("hidden"), $(window).trigger("resize")
        },
        o = function() {
            var i = !0;
            if (sessionStorage) {
                var t = sessionStorage.getItem("showNotification");
                i = !t || "true" === t
            }
            i && $(".notification", n).removeClass("hidden")
        },
        s = function() {
            n.off("click." + t), n.off("refresh." + t)
        },
        r = function() {
            n = $("body"), s(), n.on("click." + t, ".notification-button", function(i) {
                var t = $(this).text().toLowerCase();
                ["ok", "close", "understand", "continue", "got it", "ок", "закрыть"].reduce(function(i, n) {
                    return -1 !== t.indexOf(n) || i
                }, 0) && (e(), i.preventDefault())
            }), n.on("refresh." + t, function(i, n, e) {
                if (n && e) {
                    var s = e[0] || "";
                    "refresh" === n && t === s && o()
                }
            })
        },
        a = function() {
            $.isReady ? (r(), o()) : $(a)
        };
    i[t] = {
        name: t,
        init: a
    }, i[t].init()
}(site, "notification");
! function(n, o) {
    "use strict";
    var s = null,
        e = null,
        t = null,
        i = 0,
        u = 0,
        c = 0,
        f = function() {
            t = $(".menu"), c = s.height();
            var n = $("#menu-btn", t).css("display");
            return n && -1 !== n.indexOf("block") ? (t.removeClass("menu-on-top"), !1) : (u = t.css("top", "auto").offset().top, i = t.outerHeight(), t.css("top", ""), 0 !== $("a", t).length)
        },
        l = function() {
            t = null, i = 0, u = 0, c = 0
        },
        a = function(n) {
            n > u + i && t.hasClass("menu-on-top") && t.removeClass("menu-on-top"), n >= c ? (t.addClass("menu-on-the-way"), t.css("position", "fixed"), t.css("top", "0")) : t.removeClass("menu-on-the-way"), n <= u + i && (t.removeClass("menu-on-the-way"), t.addClass("menu-on-top"), t.css("position", "absolute"), t.css("top", ""))
        },
        r = function() {
            a(s.scrollTop())
        },
        p = function() {
            l(), s.off("scroll." + o)
        },
        m = function() {
            return p(), !!f() && (s.on("scroll." + o, function() {
                a(s.scrollTop())
            }), !0)
        },
        h = function() {
            s.off("resize." + o), e.off("refresh." + o)
        },
        d = function() {
            s = $(window), e = $("body"), h(), s.on("resize." + o, function() {
                m() && r()
            }), e.on("refresh." + o, function(n, s, e) {
                if (s && e) {
                    var t = e[0] || "";
                    "refresh" === s && o === t && (m(), r())
                }
            })
        },
        v = function() {
            $.isReady ? (d(), m() && r()) : $(v)
        };
    n[o] = {
        name: o,
        init: v
    }, n[o].init()
}(site, "menu");
site["images24"] = {
    name: "images",
    id: parseInt("24", 10),
    setBody: function() {
        this.b = $("body")
    },
    bind: function() {
        this.setBody(), this.unbind(), this.initLightbox(), this.b.on("refresh." + this.name + "-" + this.id, function(i, t, h) {
            if (t && h) {
                var n = h[0] || "",
                    s = h[1] || 0;
                "refresh" === t && n === this.name && s === this.id && this.initLightbox(), "del" === t && n === this.name && s === this.id && this.del()
            }
        }.bind(this))
    },
    unbind: function() {
        this.b.off("refresh." + this.name + "-" + this.id)
    },
    del: function() {
        this.unbind(), setTimeout(function() {
            delete site["images24"]
        }, 100)
    },
    initLightbox: function() {
        $("." + this.name + "-" + this.id + " .images-image").stupidbox()
    },
    init: function() {
        $.isReady ? this.bind() : $(function() {
            this.init()
        }.bind(this))
    }
}, site["images24"].init();