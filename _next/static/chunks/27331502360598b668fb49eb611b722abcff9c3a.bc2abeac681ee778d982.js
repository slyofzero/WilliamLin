(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [3], {
        "/0+H": function(e, t, n) {
            "use strict";
            t.__esModule = !0, t.isInAmpMode = u, t.useAmp = function() {
                return u(a.default.useContext(o.AmpStateContext))
            };
            var r, a = (r = n("q1tI")) && r.__esModule ? r : {
                    default: r
                },
                o = n("lwAK");

            function u() {
                var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = e.ampFirst,
                    n = void 0 !== t && t,
                    r = e.hybrid,
                    a = void 0 !== r && r,
                    o = e.hasQuery,
                    u = void 0 !== o && o;
                return n || a && u
            }
        },
        "5fIB": function(e, t, n) {
            var r = n("7eYB");
            e.exports = function(e) {
                if (Array.isArray(e)) return r(e)
            }
        },
        "6FTQ": function(e, t, n) {
            "use strict";

            function r(e, t) {
                (null == t || t > e.length) && (t = e.length);
                for (var n = 0, r = new Array(t); n < t; n++) r[n] = e[n];
                return r
            }
            n.d(t, "a", (function() {
                return r
            }))
        },
        "8Kt/": function(e, t, n) {
            "use strict";
            n("oI91");
            t.__esModule = !0, t.defaultHead = s, t.default = void 0;
            var r, a = function(e) {
                    if (e && e.__esModule) return e;
                    if (null === e || "object" !== typeof e && "function" !== typeof e) return {
                        default: e
                    };
                    var t = f();
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
                u = n("lwAK"),
                c = n("FYa8"),
                i = n("/0+H");

            function f() {
                if ("function" !== typeof WeakMap) return null;
                var e = new WeakMap;
                return f = function() {
                    return e
                }, e
            }

            function s() {
                var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0],
                    t = [a.default.createElement("meta", {
                        charSet: "utf-8"
                    })];
                return e || t.push(a.default.createElement("meta", {
                    name: "viewport",
                    content: "width=device-width"
                })), t
            }

            function l(e, t) {
                return "string" === typeof t || "number" === typeof t ? e : t.type === a.default.Fragment ? e.concat(a.default.Children.toArray(t.props.children).reduce((function(e, t) {
                    return "string" === typeof t || "number" === typeof t ? e : e.concat(t)
                }), [])) : e.concat(t)
            }
            var d = ["name", "httpEquiv", "charSet", "itemProp"];

            function p(e, t) {
                return e.reduce((function(e, t) {
                    var n = a.default.Children.toArray(t.props.children);
                    return e.concat(n)
                }), []).reduce(l, []).reverse().concat(s(t.inAmpMode)).filter(function() {
                    var e = new Set,
                        t = new Set,
                        n = new Set,
                        r = {};
                    return function(a) {
                        var o = !0,
                            u = !1;
                        if (a.key && "number" !== typeof a.key && a.key.indexOf("$") > 0) {
                            u = !0;
                            var c = a.key.slice(a.key.indexOf("$") + 1);
                            e.has(c) ? o = !1 : e.add(c)
                        }
                        switch (a.type) {
                            case "title":
                            case "base":
                                t.has(a.type) ? o = !1 : t.add(a.type);
                                break;
                            case "meta":
                                for (var i = 0, f = d.length; i < f; i++) {
                                    var s = d[i];
                                    if (a.props.hasOwnProperty(s))
                                        if ("charSet" === s) n.has(s) ? o = !1 : n.add(s);
                                        else {
                                            var l = a.props[s],
                                                p = r[s] || new Set;
                                            "name" === s && u || !p.has(l) ? (p.add(l), r[s] = p) : o = !1
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

            function v(e) {
                var t = e.children,
                    n = (0, a.useContext)(u.AmpStateContext),
                    r = (0, a.useContext)(c.HeadManagerContext);
                return a.default.createElement(o.default, {
                    reduceComponentsToState: p,
                    headManager: r,
                    inAmpMode: (0, i.isInAmpMode)(n)
                }, t)
            }
            v.rewind = function() {};
            var h = v;
            t.default = h
        },
        "8rE2": function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return a
            }));
            var r = n("6FTQ");

            function a(e, t) {
                if (e) {
                    if ("string" === typeof e) return Object(r.a)(e, t);
                    var n = Object.prototype.toString.call(e).slice(8, -1);
                    return "Object" === n && e.constructor && (n = e.constructor.name), "Map" === n || "Set" === n ? Array.from(e) : "Arguments" === n || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n) ? Object(r.a)(e, t) : void 0
                }
            }
        },
        Xuae: function(e, t, n) {
            "use strict";
            var r = n("mPvQ"),
                a = n("/GRZ"),
                o = n("i2R6"),
                u = (n("qXWd"), n("48fX")),
                c = n("tCBg"),
                i = n("T0f4");

            function f(e) {
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
                    var n, r = i(e);
                    if (t) {
                        var a = i(this).constructor;
                        n = Reflect.construct(r, arguments, a)
                    } else n = r.apply(this, arguments);
                    return c(this, n)
                }
            }
            t.__esModule = !0, t.default = void 0;
            var s = n("q1tI"),
                l = function(e) {
                    u(n, e);
                    var t = f(n);

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
                }(s.Component);
            t.default = l
        },
        YFqc: function(e, t, n) {
            e.exports = n("cTJO")
        },
        cTJO: function(e, t, n) {
            "use strict";
            var r = n("zoAU"),
                a = n("7KCV");
            t.__esModule = !0, t.default = void 0;
            var o = a(n("q1tI")),
                u = n("elyg"),
                c = n("nOHt"),
                i = n("vNVm"),
                f = {};

            function s(e, t, n, r) {
                if (e && (0, u.isLocalURL)(t)) {
                    e.prefetch(t, n, r).catch((function(e) {
                        0
                    }));
                    var a = r && "undefined" !== typeof r.locale ? r.locale : e && e.locale;
                    f[t + "%" + n + (a ? "%" + a : "")] = !0
                }
            }
            var l = function(e) {
                var t = !1 !== e.prefetch,
                    n = (0, c.useRouter)(),
                    a = n && n.pathname || "/",
                    l = o.default.useMemo((function() {
                        var t = (0, u.resolveHref)(a, e.href, !0),
                            n = r(t, 2),
                            o = n[0],
                            c = n[1];
                        return {
                            href: o,
                            as: e.as ? (0, u.resolveHref)(a, e.as) : c || o
                        }
                    }), [a, e.href, e.as]),
                    d = l.href,
                    p = l.as,
                    v = e.children,
                    h = e.replace,
                    m = e.shallow,
                    y = e.scroll,
                    g = e.locale;
                "string" === typeof v && (v = o.default.createElement("a", null, v));
                var b = o.Children.only(v),
                    M = b && "object" === typeof b && b.ref,
                    w = (0, i.useIntersection)({
                        rootMargin: "200px"
                    }),
                    _ = r(w, 2),
                    C = _[0],
                    k = _[1],
                    I = o.default.useCallback((function(e) {
                        C(e), M && ("function" === typeof M ? M(e) : "object" === typeof M && (M.current = e))
                    }), [M, C]);
                (0, o.useEffect)((function() {
                    var e = k && t && (0, u.isLocalURL)(d),
                        r = "undefined" !== typeof g ? g : n && n.locale,
                        a = f[d + "%" + p + (r ? "%" + r : "")];
                    e && !a && s(n, d, p, {
                        locale: r
                    })
                }), [p, d, k, g, t, n]);
                var x = {
                    ref: I,
                    onClick: function(e) {
                        b.props && "function" === typeof b.props.onClick && b.props.onClick(e), e.defaultPrevented || function(e, t, n, r, a, o, c, i) {
                            ("A" !== e.currentTarget.nodeName || ! function(e) {
                                var t = e.currentTarget.target;
                                return t && "_self" !== t || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.nativeEvent && 2 === e.nativeEvent.which
                            }(e) && (0, u.isLocalURL)(n)) && (e.preventDefault(), null == c && (c = r.indexOf("#") < 0), t[a ? "replace" : "push"](n, r, {
                                shallow: o,
                                locale: i,
                                scroll: c
                            }))
                        }(e, n, d, p, h, m, y, g)
                    },
                    onMouseEnter: function(e) {
                        (0, u.isLocalURL)(d) && (b.props && "function" === typeof b.props.onMouseEnter && b.props.onMouseEnter(e), s(n, d, p, {
                            priority: !0
                        }))
                    }
                };
                if (e.passHref || "a" === b.type && !("href" in b.props)) {
                    var O = "undefined" !== typeof g ? g : n && n.locale,
                        A = n && n.isLocaleDomain && (0, u.getDomainLocale)(p, O, n && n.locales, n && n.domainLocales);
                    x.href = A || (0, u.addBasePath)((0, u.addLocale)(p, O, n && n.defaultLocale))
                }
                return o.default.cloneElement(b, x)
            };
            t.default = l
        },
        g4pe: function(e, t, n) {
            e.exports = n("8Kt/")
        },
        hLHZ: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return u
            }));
            var r = n("nKUr"),
                a = n("YFqc"),
                o = n.n(a);

            function u(e) {
                var t = e.href,
                    n = e.children,
                    a = e.newTab;
                return Object(r.jsx)(o.a, {
                    href: t,
                    children: Object(r.jsx)("a", {
                        target: a ? "_blank" : "_self",
                        rel: a && "noreferrer",
                        className: "text-blue-500 hover:text-blue-600 transition",
                        children: n
                    })
                })
            }
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
                u = n("kG2m");
            e.exports = function(e) {
                return r(e) || a(e) || o(e) || u()
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
        vNVm: function(e, t, n) {
            "use strict";
            var r = n("zoAU");
            t.__esModule = !0, t.useIntersection = function(e) {
                var t = e.rootMargin,
                    n = e.disabled || !u,
                    i = (0, a.useRef)(),
                    f = (0, a.useState)(!1),
                    s = r(f, 2),
                    l = s[0],
                    d = s[1],
                    p = (0, a.useCallback)((function(e) {
                        i.current && (i.current(), i.current = void 0), n || l || e && e.tagName && (i.current = function(e, t, n) {
                            var r = function(e) {
                                    var t = e.rootMargin || "",
                                        n = c.get(t);
                                    if (n) return n;
                                    var r = new Map,
                                        a = new IntersectionObserver((function(e) {
                                            e.forEach((function(e) {
                                                var t = r.get(e.target),
                                                    n = e.isIntersecting || e.intersectionRatio > 0;
                                                t && n && t(n)
                                            }))
                                        }), e);
                                    return c.set(t, n = {
                                        id: t,
                                        observer: a,
                                        elements: r
                                    }), n
                                }(n),
                                a = r.id,
                                o = r.observer,
                                u = r.elements;
                            return u.set(e, t), o.observe(e),
                                function() {
                                    u.delete(e), o.unobserve(e), 0 === u.size && (o.disconnect(), c.delete(a))
                                }
                        }(e, (function(e) {
                            return e && d(e)
                        }), {
                            rootMargin: t
                        }))
                    }), [n, t, l]);
                return (0, a.useEffect)((function() {
                    if (!u && !l) {
                        var e = (0, o.requestIdleCallback)((function() {
                            return d(!0)
                        }));
                        return function() {
                            return (0, o.cancelIdleCallback)(e)
                        }
                    }
                }), [l]), [p, l]
            };
            var a = n("q1tI"),
                o = n("0G5g"),
                u = "undefined" !== typeof IntersectionObserver;
            var c = new Map
        }
    }
]);