_N_E = (window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [9], {
        "/0+H": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.isInAmpMode = i, t.useAmp = function() {
                return i(a.default.useContext(o.AmpStateContext))
            };
            var r, a = (r = n("q1tI")) && r.__esModule ? r : {
                    default: r
                },
                o = n("lwAK");

            function i() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.ampFirst,
                    n = void 0 !== t && t,
                    r = e.hybrid,
                    a = void 0 !== r && r,
                    o = e.hasQuery,
                    i = void 0 !== o && o;
                return n || a && i
            }
        },
        0: function(e, t, n) {
            n("74v/"), e.exports = n("nOHt")
        },
        "20a2": function(e, t, n) {
            e.exports = n("nOHt")
        },
        "5fIB": function(e, t, n) {
            var r = n("7eYB");
            e.exports = function(e) {
                if (Array.isArray(e)) return r(e)
            }
        },
        "74v/": function(e, t, n) {
            (window.__NEXT_P = window.__NEXT_P || []).push(["/_app", function() {
                return n("cha2")
            }])
        },
        "8Kt/": function(e, t, n) {
            "use strict";
            n("oI91");
            t.__esModule = !0, t.defaultHead = f, t.default = void 0;
            var r, a = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== typeof e && "function" !== typeof e) return {
                        default: e
                    };
                    var t = s();
                    if (t && t.has(e)) return t.get(e);
                    var n = {},
                        r = Object.defineProperty && Object.getOwnPropertyDescriptor;
                    for (var a in e)
                        if (Object.prototype.hasOwnProperty.call(e, a)) {
                            var o = r ? Object.getOwnPropertyDescriptor(e, a) : null;
                            o && (o.get || o.set) ? Object.defineProperty(n, a, o) : n[a] = e[a]
                        }
                    n.default = e, t && t.set(e, n);
                    return n
                }(n("q1tI")),
                o = (r = n("Xuae")) && r.__esModule ? r : {
                    default: r
                },
                i = n("lwAK"),
                c = n("FYa8"),
                u = n("/0+H");

            function s() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return s = function() {
                    return e
                }, e
            }

            function f() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = [a.default.createElement("meta", {
                        charSet: "utf-8"
                    })];
                return e || t.push(a.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function p(e, t) {
                return "string" === typeof t || "number" === typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce((function(e, t) {
                    return "string" === typeof t || "number" === typeof t ? e : e.concat(t)
                }), [])) : e.concat(t)
            }
            var l = ["name", "httpEquiv", "charSet", "itemProp"];

            function d(e, t) {
                return e.reduce((function(e, t) {
                    var n = a.default.Children.toArray(t.props.children);
                    return e.concat(n)
                }), []).reduce(p, []).reverse().concat(f(t.inAmpMode)).filter(function() {
                    var e = new Set,
                        t = new Set,
                        n = new Set,
                        r = {};
                    return function(a) {
                        var o = !0,
                            i = !1;
                        if (a.key && "number" !== typeof a.key && a.key.indexOf("$") > 0) {
                            i = !0;
                            var c = a.key.slice(a.key.indexOf("$") + 1);
                            e.has(c) ? o = !1 : e.add(c)
                        }
                        switch (a.type) {
                            case "title":
                            case "base":
                                t.has(a.type) ? o = !1 : t.add(a.type);
                                break;
                            case "meta":
                                for (var u = 0, s = l.length; u < s; u++) {
                                    var f = l[u];
                                    if (a.props.hasOwnProperty(f))
                                        if ("charSet" === f) n.has(f) ? o = !1 : n.add(f);
                                        else {
                                            var p = a.props[f],
                                                d = r[f] || new Set;
                                            "name" === f && i || !d.has(p) ? (d.add(p), r[f] = d) : o = !1
                                        }
                                }
                        }
                        return o
                    }
                }()).reverse().map((function(e, t) {
                    var n = e.key || t;
                    return a.default.cloneElement(e, {
                        key: n
                    })
                }))
            }

            function m(e) {
                var t = e.children,
                    n = (0, a.useContext)(i.AmpStateContext),
                    r = (0, a.useContext)(c.HeadManagerContext);
                return a.default.createElement(o.default, {
                    reduceComponentsToState: d,
                    headManager: r,
                    inAmpMode: (0, u.isInAmpMode)(n)
                }, t)
            }
            m.rewind = function() {};
            var h = m;
            t.default = h
        },
        OFM2: function(e, t, n) {},
        Xuae: function(e, t, n) {
            "use strict";
            var r = n("mPvQ"),
                a = n("/GRZ"),
                o = n("i2R6"),
                i = (n("qXWd"), n("48fX")),
                c = n("tCBg"),
                u = n("T0f4");

            function s(e) {
                var t = function() {
                    if ("undefined" === typeof Reflect || !Reflect.construct) return !1;
                    if (Reflect.construct.sham) return !1;
                    if ("function" === typeof Proxy) return !0;
                    try {
                        return Date.prototype.toString.call(Reflect.construct(Date, [], (function() {}))), !0
                    } catch (e) {
                        return !1
                    }
                }();
                return function() {
                    var n, r = u(e);
                    if (t) {
                        var a = u(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            t.__esModule = !0, t.default = void 0;
            var f = n("q1tI"),
                p = function(e) {
                    i(n, e);
                    var t = s(n);

                    function n(e) {
                        var o;
                        return a(this, n), (o = t.call(this, e))._hasHeadManager = void 0, o.emitChange = function() {
                            o._hasHeadManager && o.props.headManager.updateHead(o.props.reduceComponentsToState(r(o.props.headManager.mountedInstances), o.props))
                        }, o._hasHeadManager = o.props.headManager && o.props.headManager.mountedInstances, o
                    }
                    return o(n, [{
                        key: "componentDidMount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.add(this), this.emitChange()
                        }
                    }, {
                        key: "componentDidUpdate",
                        value: function() {
                            this.emitChange()
                        }
                    }, {
                        key: "componentWillUnmount",
                        value: function() {
                            this._hasHeadManager && this.props.headManager.mountedInstances.delete(this), this.emitChange()
                        }
                    }, {
                        key: "render",
                        value: function() {
                            return null
                        }
                    }]), n
                }(f.Component);
            t.default = p
        },
        cha2: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "default", (function() {
                return l
            }));
            var r = n("cpVT"),
                a = n("nKUr"),
                o = (n("vg9a"), n("g4pe")),
                i = n.n(o),
                c = n("20a2"),
                u = n("q1tI"),
                s = (n("OFM2"), "G-Q5LHSPN3NB");

            function f(e, t) {
                var n = Object.keys(e);
                if (Object.getOwnPropertySymbols) {
                    var r = Object.getOwnPropertySymbols(e);
                    t && (r = r.filter((function(t) {
                        return Object.getOwnPropertyDescriptor(e, t).enumerable
                    }))), n.push.apply(n, r)
                }
                return n
            }

            function p(e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = null != arguments[t] ? arguments[t] : {};
                    t % 2 ? f(Object(n), !0).forEach((function(t) {
                        Object(r.a)(e, t, n[t])
                    })) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(n)) : f(Object(n)).forEach((function(t) {
                        Object.defineProperty(e, t, Object.getOwnPropertyDescriptor(n, t))
                    }))
                }
                return e
            }

            function l(e) {
                var t = e.Component,
                    n = e.pageProps,
                    r = Object(c.useRouter)();
                return Object(u.useEffect)((function() {
                    var e = function(e) {
                        ! function(e) {
                            window.gtag("config", s, {
                                page_path: e
                            })
                        }(e)
                    };
                    return r.events.on("routeChangeComplete", e),
                        function() {
                            r.events.off("routeChangeComplete", e)
                        }
                }), [r.events]), Object(a.jsxs)(a.Fragment, {
                    children: [Object(a.jsxs)(i.a, {
                        children: [Object(a.jsx)("link", {
                            rel: "apple-touch-icon",
                            sizes: "180x180",
                            href: "/apple-touch-icon.png"
                        }), Object(a.jsx)("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "32x32",
                            href: "/favicon-32x32.png"
                        }), Object(a.jsx)("link", {
                            rel: "icon",
                            type: "image/png",
                            sizes: "16x16",
                            href: "/favicon-16x16.png"
                        }), Object(a.jsx)("link", {
                            rel: "manifest",
                            href: "/site.webmanifest"
                        }), Object(a.jsx)("link", {
                            rel: "mask-icon",
                            href: "/safari-pinned-tab.svg",
                            color: "#5bbad5"
                        }), Object(a.jsx)("meta", {
                            name: "msapplication-TileColor",
                            content: "#da532c"
                        }), Object(a.jsx)("meta", {
                            name: "theme-color",
                            content: "#ffffff"
                        }), Object(a.jsx)("meta", {
                            property: "og:site_name",
                            content: "William Lin"
                        }), Object(a.jsx)("meta", {
                            property: "og:type",
                            content: "website"
                        }), Object(a.jsx)("meta", {
                            property: "og:image",
                            content: "https://williamlin.io/android-chrome-512x512.png"
                        }), Object(a.jsx)("meta", {
                            name: "twitter:card",
                            content: "summary"
                        }), Object(a.jsx)("meta", {
                            name: "twitter:site",
                            content: "@tmwilliamlin168"
                        }), Object(a.jsx)("meta", {
                            name: "twitter:image",
                            content: "https://williamlin.io/android-chrome-512x512.png"
                        }), Object(a.jsxs)(a.Fragment, {
                            children: [Object(a.jsx)("script", {
                                async: !0,
                                src: "https://www.googletagmanager.com/gtag/js?id=".concat(s)
                            }), Object(a.jsx)("script", {
                                dangerouslySetInnerHTML: {
                                    __html: "\n\t\t            window.dataLayer = window.dataLayer || [];\n\t\t            function gtag(){dataLayer.push(arguments);}\n\t\t            gtag('js', new Date());\n\t\t            gtag('config', '".concat(s, "', {\n\t\t              page_path: window.location.pathname,\n\t\t            });\n\t\t        \t\t")
                                }
                            })]
                        })]
                    }), Object(a.jsx)(t, p({}, n))]
                })
            }
        },
        cpVT: function(e, t, n) {
            "use strict";

            function r(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        g4pe: function(e, t, n) {
            e.exports = n("8Kt/")
        },
        kG2m: function(e, t) {
            e.exports = function() {
                throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")
            }
        },
        lwAK: function(e, t, n) {
            "use strict";
            var r;
            t.__esModule = !0, t.AmpStateContext = void 0;
            var a = ((r = n("q1tI")) && r.__esModule ? r : {
                default: r
            }).default.createContext({});
            t.AmpStateContext = a
        },
        mPvQ: function(e, t, n) {
            var r = n("5fIB"),
                a = n("rlHP"),
                o = n("KckH"),
                i = n("kG2m");
            e.exports = function(e) {
                return r(e) || a(e) || o(e) || i()
            }
        },
        oI91: function(e, t) {
            e.exports = function(e, t, n) {
                return t in e ? Object.defineProperty(e, t, {
                    value: n,
                    enumerable: !0,
                    configurable: !0,
                    writable: !0
                }) : e[t] = n, e
            }
        },
        rlHP: function(e, t) {
            e.exports = function(e) {
                if ("undefined" !== typeof Symbol && Symbol.iterator in Object(e)) return Array.from(e)
            }
        },
        vg9a: function(e, t, n) {}
    },
    [
        [0, 0, 1, 2]
    ]
]);