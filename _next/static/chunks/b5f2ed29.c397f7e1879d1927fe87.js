(window.webpackJsonp_N_E = window.webpackJsonp_N_E || []).push([
    [5], {
        "Oy/b": function(e, t, r) {
            var n;
            "undefined" !== typeof self && self, n = function() {
                return function(e) {
                    var t = {};

                    function r(n) {
                        if (t[n]) return t[n].exports;
                        var a = t[n] = {
                            i: n,
                            l: !1,
                            exports: {}
                        };
                        return e[n].call(a.exports, a, a.exports, r), a.l = !0, a.exports
                    }
                    return r.m = e, r.c = t, r.d = function(e, t, n) {
                        r.o(e, t) || Object.defineProperty(e, t, {
                            enumerable: !0,
                            get: n
                        })
                    }, r.r = function(e) {
                        "undefined" !== typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
                            value: "Module"
                        }), Object.defineProperty(e, "__esModule", {
                            value: !0
                        })
                    }, r.t = function(e, t) {
                        if (1 & t && (e = r(e)), 8 & t) return e;
                        if (4 & t && "object" === typeof e && e && e.__esModule) return e;
                        var n = Object.create(null);
                        if (r.r(n), Object.defineProperty(n, "default", {
                                enumerable: !0,
                                value: e
                            }), 2 & t && "string" != typeof e)
                            for (var a in e) r.d(n, a, function(t) {
                                return e[t]
                            }.bind(null, a));
                        return n
                    }, r.n = function(e) {
                        var t = e && e.__esModule ? function() {
                            return e.default
                        } : function() {
                            return e
                        };
                        return r.d(t, "a", t), t
                    }, r.o = function(e, t) {
                        return Object.prototype.hasOwnProperty.call(e, t)
                    }, r.p = "", r(r.s = 1)
                }([function(e, t, r) {}, function(e, t, r) {
                    "use strict";
                    r.r(t), r(0);
                    var n = function() {
                            function e(e, t, r) {
                                this.lexer = void 0, this.start = void 0, this.end = void 0, this.lexer = e, this.start = t, this.end = r
                            }
                            return e.range = function(t, r) {
                                return r ? t && t.loc && r.loc && t.loc.lexer === r.loc.lexer ? new e(t.loc.lexer, t.loc.start, r.loc.end) : null : t && t.loc
                            }, e
                        }(),
                        a = function() {
                            function e(e, t) {
                                this.text = void 0, this.loc = void 0, this.noexpand = void 0, this.treatAsRelax = void 0, this.text = e, this.loc = t
                            }
                            return e.prototype.range = function(t, r) {
                                return new e(r, n.range(this, t))
                            }, e
                        }(),
                        i = function e(t, r) {
                            this.position = void 0;
                            var n, a = "KaTeX parse error: " + t,
                                i = r && r.loc;
                            if (i && i.start <= i.end) {
                                var o = i.lexer.input;
                                n = i.start;
                                var s = i.end;
                                n === o.length ? a += " at end of input: " : a += " at position " + (n + 1) + ": ";
                                var l = o.slice(n, s).replace(/[^]/g, "$&\u0332");
                                a += (n > 15 ? "\u2026" + o.slice(n - 15, n) : o.slice(0, n)) + l + (s + 15 < o.length ? o.slice(s, s + 15) + "\u2026" : o.slice(s))
                            }
                            var h = new Error(a);
                            return h.name = "ParseError", h.__proto__ = e.prototype, h.position = n, h
                        };
                    i.prototype.__proto__ = Error.prototype;
                    var o = i,
                        s = /([A-Z])/g,
                        l = {
                            "&": "&amp;",
                            ">": "&gt;",
                            "<": "&lt;",
                            '"': "&quot;",
                            "'": "&#x27;"
                        },
                        h = /[&><"']/g,
                        m = function e(t) {
                            return "ordgroup" === t.type || "color" === t.type ? 1 === t.body.length ? e(t.body[0]) : t : "font" === t.type ? e(t.body) : t
                        },
                        c = {
                            contains: function(e, t) {
                                return -1 !== e.indexOf(t)
                            },
                            deflt: function(e, t) {
                                return void 0 === e ? t : e
                            },
                            escape: function(e) {
                                return String(e).replace(h, (function(e) {
                                    return l[e]
                                }))
                            },
                            hyphenate: function(e) {
                                return e.replace(s, "-$1").toLowerCase()
                            },
                            getBaseElem: m,
                            isCharacterBox: function(e) {
                                var t = m(e);
                                return "mathord" === t.type || "textord" === t.type || "atom" === t.type
                            },
                            protocolFromUrl: function(e) {
                                var t = /^\s*([^\\/#]*?)(?::|&#0*58|&#x0*3a)/i.exec(e);
                                return null != t ? t[1] : "_relative"
                            }
                        },
                        u = function() {
                            function e(e) {
                                this.displayMode = void 0, this.output = void 0, this.leqno = void 0, this.fleqn = void 0, this.throwOnError = void 0, this.errorColor = void 0, this.macros = void 0, this.minRuleThickness = void 0, this.colorIsTextColor = void 0, this.strict = void 0, this.trust = void 0, this.maxSize = void 0, this.maxExpand = void 0, this.globalGroup = void 0, e = e || {}, this.displayMode = c.deflt(e.displayMode, !1), this.output = c.deflt(e.output, "htmlAndMathml"), this.leqno = c.deflt(e.leqno, !1), this.fleqn = c.deflt(e.fleqn, !1), this.throwOnError = c.deflt(e.throwOnError, !0), this.errorColor = c.deflt(e.errorColor, "#cc0000"), this.macros = e.macros || {}, this.minRuleThickness = Math.max(0, c.deflt(e.minRuleThickness, 0)), this.colorIsTextColor = c.deflt(e.colorIsTextColor, !1), this.strict = c.deflt(e.strict, "warn"), this.trust = c.deflt(e.trust, !1), this.maxSize = Math.max(0, c.deflt(e.maxSize, 1 / 0)), this.maxExpand = Math.max(0, c.deflt(e.maxExpand, 1e3)), this.globalGroup = c.deflt(e.globalGroup, !1)
                            }
                            var t = e.prototype;
                            return t.reportNonstrict = function(e, t, r) {
                                var n = this.strict;
                                if ("function" === typeof n && (n = n(e, t, r)), n && "ignore" !== n) {
                                    if (!0 === n || "error" === n) throw new o("LaTeX-incompatible input and strict mode is set to 'error': " + t + " [" + e + "]", r);
                                    "warn" === n ? "undefined" !== typeof console && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + t + " [" + e + "]") : "undefined" !== typeof console && console.warn("LaTeX-incompatible input and strict mode is set to unrecognized '" + n + "': " + t + " [" + e + "]")
                                }
                            }, t.useStrictBehavior = function(e, t, r) {
                                var n = this.strict;
                                if ("function" === typeof n) try {
                                    n = n(e, t, r)
                                } catch (a) {
                                    n = "error"
                                }
                                return !(!n || "ignore" === n) && (!0 === n || "error" === n || ("warn" === n ? ("undefined" !== typeof console && console.warn("LaTeX-incompatible input and strict mode is set to 'warn': " + t + " [" + e + "]"), !1) : ("undefined" !== typeof console && console.warn("LaTeX-incompatible input and strict mode is set to unrecognized '" + n + "': " + t + " [" + e + "]"), !1)))
                            }, t.isTrusted = function(e) {
                                e.url && !e.protocol && (e.protocol = c.protocolFromUrl(e.url));
                                var t = "function" === typeof this.trust ? this.trust(e) : this.trust;
                                return Boolean(t)
                            }, e
                        }(),
                        p = function() {
                            function e(e, t, r) {
                                this.id = void 0, this.size = void 0, this.cramped = void 0, this.id = e, this.size = t, this.cramped = r
                            }
                            var t = e.prototype;
                            return t.sup = function() {
                                return d[f[this.id]]
                            }, t.sub = function() {
                                return d[g[this.id]]
                            }, t.fracNum = function() {
                                return d[v[this.id]]
                            }, t.fracDen = function() {
                                return d[b[this.id]]
                            }, t.cramp = function() {
                                return d[y[this.id]]
                            }, t.text = function() {
                                return d[x[this.id]]
                            }, t.isTight = function() {
                                return this.size >= 2
                            }, e
                        }(),
                        d = [new p(0, 0, !1), new p(1, 0, !0), new p(2, 1, !1), new p(3, 1, !0), new p(4, 2, !1), new p(5, 2, !0), new p(6, 3, !1), new p(7, 3, !0)],
                        f = [4, 5, 4, 5, 6, 7, 6, 7],
                        g = [5, 5, 5, 5, 7, 7, 7, 7],
                        v = [2, 3, 4, 5, 6, 7, 6, 7],
                        b = [3, 3, 5, 5, 7, 7, 7, 7],
                        y = [1, 1, 3, 3, 5, 5, 7, 7],
                        x = [0, 1, 2, 3, 2, 3, 2, 3],
                        w = {
                            DISPLAY: d[0],
                            TEXT: d[2],
                            SCRIPT: d[4],
                            SCRIPTSCRIPT: d[6]
                        },
                        k = [{
                            name: "latin",
                            blocks: [
                                [256, 591],
                                [768, 879]
                            ]
                        }, {
                            name: "cyrillic",
                            blocks: [
                                [1024, 1279]
                            ]
                        }, {
                            name: "brahmic",
                            blocks: [
                                [2304, 4255]
                            ]
                        }, {
                            name: "georgian",
                            blocks: [
                                [4256, 4351]
                            ]
                        }, {
                            name: "cjk",
                            blocks: [
                                [12288, 12543],
                                [19968, 40879],
                                [65280, 65376]
                            ]
                        }, {
                            name: "hangul",
                            blocks: [
                                [44032, 55215]
                            ]
                        }],
                        S = [];

                    function M(e) {
                        for (var t = 0; t < S.length; t += 2)
                            if (e >= S[t] && e <= S[t + 1]) return !0;
                        return !1
                    }
                    k.forEach((function(e) {
                        return e.blocks.forEach((function(e) {
                            return S.push.apply(S, e)
                        }))
                    }));
                    var z = 80,
                        A = {
                            leftParenInner: "M291 0 H417 V300 H291 z",
                            rightParenInner: "M457 0 H583 V300 H457 z",
                            doubleleftarrow: "M262 157\nl10-10c34-36 62.7-77 86-123 3.3-8 5-13.3 5-16 0-5.3-6.7-8-20-8-7.3\n 0-12.2.5-14.5 1.5-2.3 1-4.8 4.5-7.5 10.5-49.3 97.3-121.7 169.3-217 216-28\n 14-57.3 25-88 33-6.7 2-11 3.8-13 5.5-2 1.7-3 4.2-3 7.5s1 5.8 3 7.5\nc2 1.7 6.3 3.5 13 5.5 68 17.3 128.2 47.8 180.5 91.5 52.3 43.7 93.8 96.2 124.5\n 157.5 9.3 8 15.3 12.3 18 13h6c12-.7 18-4 18-10 0-2-1.7-7-5-15-23.3-46-52-87\n-86-123l-10-10h399738v-40H218c328 0 0 0 0 0l-10-8c-26.7-20-65.7-43-117-69 2.7\n-2 6-3.7 10-5 36.7-16 72.3-37.3 107-64l10-8h399782v-40z\nm8 0v40h399730v-40zm0 194v40h399730v-40z",
                            doublerightarrow: "M399738 392l\n-10 10c-34 36-62.7 77-86 123-3.3 8-5 13.3-5 16 0 5.3 6.7 8 20 8 7.3 0 12.2-.5\n 14.5-1.5 2.3-1 4.8-4.5 7.5-10.5 49.3-97.3 121.7-169.3 217-216 28-14 57.3-25 88\n-33 6.7-2 11-3.8 13-5.5 2-1.7 3-4.2 3-7.5s-1-5.8-3-7.5c-2-1.7-6.3-3.5-13-5.5-68\n-17.3-128.2-47.8-180.5-91.5-52.3-43.7-93.8-96.2-124.5-157.5-9.3-8-15.3-12.3-18\n-13h-6c-12 .7-18 4-18 10 0 2 1.7 7 5 15 23.3 46 52 87 86 123l10 10H0v40h399782\nc-328 0 0 0 0 0l10 8c26.7 20 65.7 43 117 69-2.7 2-6 3.7-10 5-36.7 16-72.3 37.3\n-107 64l-10 8H0v40zM0 157v40h399730v-40zm0 194v40h399730v-40z",
                            leftarrow: "M400000 241H110l3-3c68.7-52.7 113.7-120\n 135-202 4-14.7 6-23 6-25 0-7.3-7-11-21-11-8 0-13.2.8-15.5 2.5-2.3 1.7-4.2 5.8\n-5.5 12.5-1.3 4.7-2.7 10.3-4 17-12 48.7-34.8 92-68.5 130S65.3 228.3 18 247\nc-10 4-16 7.7-18 11 0 8.7 6 14.3 18 17 47.3 18.7 87.8 47 121.5 85S196 441.3 208\n 490c.7 2 1.3 5 2 9s1.2 6.7 1.5 8c.3 1.3 1 3.3 2 6s2.2 4.5 3.5 5.5c1.3 1 3.3\n 1.8 6 2.5s6 1 10 1c14 0 21-3.7 21-11 0-2-2-10.3-6-25-20-79.3-65-146.7-135-202\n l-3-3h399890zM100 241v40h399900v-40z",
                            leftbrace: "M6 548l-6-6v-35l6-11c56-104 135.3-181.3 238-232 57.3-28.7 117\n-45 179-50h399577v120H403c-43.3 7-81 15-113 26-100.7 33-179.7 91-237 174-2.7\n 5-6 9-10 13-.7 1-7.3 1-20 1H6z",
                            leftbraceunder: "M0 6l6-6h17c12.688 0 19.313.3 20 1 4 4 7.313 8.3 10 13\n 35.313 51.3 80.813 93.8 136.5 127.5 55.688 33.7 117.188 55.8 184.5 66.5.688\n 0 2 .3 4 1 18.688 2.7 76 4.3 172 5h399450v120H429l-6-1c-124.688-8-235-61.7\n-331-161C60.687 138.7 32.312 99.3 7 54L0 41V6z",
                            leftgroup: "M400000 80\nH435C64 80 168.3 229.4 21 260c-5.9 1.2-18 0-18 0-2 0-3-1-3-3v-38C76 61 257 0\n 435 0h399565z",
                            leftgroupunder: "M400000 262\nH435C64 262 168.3 112.6 21 82c-5.9-1.2-18 0-18 0-2 0-3 1-3 3v38c76 158 257 219\n 435 219h399565z",
                            leftharpoon: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3\n-3.3 10.2-9.5 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5\n-18.3 3-21-1.3-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7\n-196 228-6.7 4.7-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40z",
                            leftharpoonplus: "M0 267c.7 5.3 3 10 7 14h399993v-40H93c3.3-3.3 10.2-9.5\n 20.5-18.5s17.8-15.8 22.5-20.5c50.7-52 88-110.3 112-175 4-11.3 5-18.3 3-21-1.3\n-4-7.3-6-18-6-8 0-13 .7-15 2s-4.7 6.7-8 16c-42 98.7-107.3 174.7-196 228-6.7 4.7\n-10.7 8-12 10-1.3 2-2 5.7-2 11zm100-26v40h399900v-40zM0 435v40h400000v-40z\nm0 0v40h400000v-40z",
                            leftharpoondown: "M7 241c-4 4-6.333 8.667-7 14 0 5.333.667 9 2 11s5.333\n 5.333 12 10c90.667 54 156 130 196 228 3.333 10.667 6.333 16.333 9 17 2 .667 5\n 1 9 1h5c10.667 0 16.667-2 18-6 2-2.667 1-9.667-3-21-32-87.333-82.667-157.667\n-152-211l-3-3h399907v-40zM93 281 H400000 v-40L7 241z",
                            leftharpoondownplus: "M7 435c-4 4-6.3 8.7-7 14 0 5.3.7 9 2 11s5.3 5.3 12\n 10c90.7 54 156 130 196 228 3.3 10.7 6.3 16.3 9 17 2 .7 5 1 9 1h5c10.7 0 16.7\n-2 18-6 2-2.7 1-9.7-3-21-32-87.3-82.7-157.7-152-211l-3-3h399907v-40H7zm93 0\nv40h399900v-40zM0 241v40h399900v-40zm0 0v40h399900v-40z",
                            lefthook: "M400000 281 H103s-33-11.2-61-33.5S0 197.3 0 164s14.2-61.2 42.5\n-83.5C70.8 58.2 104 47 142 47 c16.7 0 25 6.7 25 20 0 12-8.7 18.7-26 20-40 3.3\n-68.7 15.7-86 37-10 12-15 25.3-15 40 0 22.7 9.8 40.7 29.5 54 19.7 13.3 43.5 21\n 71.5 23h399859zM103 281v-40h399897v40z",
                            leftlinesegment: "M40 281 V428 H0 V94 H40 V241 H400000 v40z\nM40 281 V428 H0 V94 H40 V241 H400000 v40z",
                            leftmapsto: "M40 281 V448H0V74H40V241H400000v40z\nM40 281 V448H0V74H40V241H400000v40z",
                            leftToFrom: "M0 147h400000v40H0zm0 214c68 40 115.7 95.7 143 167h22c15.3 0 23\n-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69-70-101l-7-8h399905v-40H95l7-8\nc28.7-32 52-65.7 70-101 10.7-23.3 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 265.3\n 68 321 0 361zm0-174v-40h399900v40zm100 154v40h399900v-40z",
                            longequal: "M0 50 h400000 v40H0z m0 194h40000v40H0z\nM0 50 h400000 v40H0z m0 194h40000v40H0z",
                            midbrace: "M200428 334\nc-100.7-8.3-195.3-44-280-108-55.3-42-101.7-93-139-153l-9-14c-2.7 4-5.7 8.7-9 14\n-53.3 86.7-123.7 153-211 199-66.7 36-137.3 56.3-212 62H0V214h199568c178.3-11.7\n 311.7-78.3 403-201 6-8 9.7-12 11-12 .7-.7 6.7-1 18-1s17.3.3 18 1c1.3 0 5 4 11\n 12 44.7 59.3 101.3 106.3 170 141s145.3 54.3 229 60h199572v120z",
                            midbraceunder: "M199572 214\nc100.7 8.3 195.3 44 280 108 55.3 42 101.7 93 139 153l9 14c2.7-4 5.7-8.7 9-14\n 53.3-86.7 123.7-153 211-199 66.7-36 137.3-56.3 212-62h199568v120H200432c-178.3\n 11.7-311.7 78.3-403 201-6 8-9.7 12-11 12-.7.7-6.7 1-18 1s-17.3-.3-18-1c-1.3 0\n-5-4-11-12-44.7-59.3-101.3-106.3-170-141s-145.3-54.3-229-60H0V214z",
                            oiintSize1: "M512.6 71.6c272.6 0 320.3 106.8 320.3 178.2 0 70.8-47.7 177.6\n-320.3 177.6S193.1 320.6 193.1 249.8c0-71.4 46.9-178.2 319.5-178.2z\nm368.1 178.2c0-86.4-60.9-215.4-368.1-215.4-306.4 0-367.3 129-367.3 215.4 0 85.8\n60.9 214.8 367.3 214.8 307.2 0 368.1-129 368.1-214.8z",
                            oiintSize2: "M757.8 100.1c384.7 0 451.1 137.6 451.1 230 0 91.3-66.4 228.8\n-451.1 228.8-386.3 0-452.7-137.5-452.7-228.8 0-92.4 66.4-230 452.7-230z\nm502.4 230c0-111.2-82.4-277.2-502.4-277.2s-504 166-504 277.2\nc0 110 84 276 504 276s502.4-166 502.4-276z",
                            oiiintSize1: "M681.4 71.6c408.9 0 480.5 106.8 480.5 178.2 0 70.8-71.6 177.6\n-480.5 177.6S202.1 320.6 202.1 249.8c0-71.4 70.5-178.2 479.3-178.2z\nm525.8 178.2c0-86.4-86.8-215.4-525.7-215.4-437.9 0-524.7 129-524.7 215.4 0\n85.8 86.8 214.8 524.7 214.8 438.9 0 525.7-129 525.7-214.8z",
                            oiiintSize2: "M1021.2 53c603.6 0 707.8 165.8 707.8 277.2 0 110-104.2 275.8\n-707.8 275.8-606 0-710.2-165.8-710.2-275.8C311 218.8 415.2 53 1021.2 53z\nm770.4 277.1c0-131.2-126.4-327.6-770.5-327.6S248.4 198.9 248.4 330.1\nc0 130 128.8 326.4 772.7 326.4s770.5-196.4 770.5-326.4z",
                            rightarrow: "M0 241v40h399891c-47.3 35.3-84 78-110 128\n-16.7 32-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20\n 11 8 0 13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7\n 39-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85\n-40.5-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n 151.7 139 205zm0 0v40h399900v-40z",
                            rightbrace: "M400000 542l\n-6 6h-17c-12.7 0-19.3-.3-20-1-4-4-7.3-8.3-10-13-35.3-51.3-80.8-93.8-136.5-127.5\ns-117.2-55.8-184.5-66.5c-.7 0-2-.3-4-1-18.7-2.7-76-4.3-172-5H0V214h399571l6 1\nc124.7 8 235 61.7 331 161 31.3 33.3 59.7 72.7 85 118l7 13v35z",
                            rightbraceunder: "M399994 0l6 6v35l-6 11c-56 104-135.3 181.3-238 232-57.3\n 28.7-117 45-179 50H-300V214h399897c43.3-7 81-15 113-26 100.7-33 179.7-91 237\n-174 2.7-5 6-9 10-13 .7-1 7.3-1 20-1h17z",
                            rightgroup: "M0 80h399565c371 0 266.7 149.4 414 180 5.9 1.2 18 0 18 0 2 0\n 3-1 3-3v-38c-76-158-257-219-435-219H0z",
                            rightgroupunder: "M0 262h399565c371 0 266.7-149.4 414-180 5.9-1.2 18 0 18\n 0 2 0 3 1 3 3v38c-76 158-257 219-435 219H0z",
                            rightharpoon: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3\n-3.7-15.3-11-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2\n-10.7 0-16.7 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58\n 69.2 92 94.5zm0 0v40h399900v-40z",
                            rightharpoonplus: "M0 241v40h399993c4.7-4.7 7-9.3 7-14 0-9.3-3.7-15.3-11\n-18-92.7-56.7-159-133.7-199-231-3.3-9.3-6-14.7-8-16-2-1.3-7-2-15-2-10.7 0-16.7\n 2-18 6-2 2.7-1 9.7 3 21 15.3 42 36.7 81.8 64 119.5 27.3 37.7 58 69.2 92 94.5z\nm0 0v40h399900v-40z m100 194v40h399900v-40zm0 0v40h399900v-40z",
                            rightharpoondown: "M399747 511c0 7.3 6.7 11 20 11 8 0 13-.8 15-2.5s4.7-6.8\n 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3 8.5-5.8 9.5\n-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3-64.7 57-92 95\n-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 241v40h399900v-40z",
                            rightharpoondownplus: "M399747 705c0 7.3 6.7 11 20 11 8 0 13-.8\n 15-2.5s4.7-6.8 8-15.5c40-94 99.3-166.3 178-217 13.3-8 20.3-12.3 21-13 5.3-3.3\n 8.5-5.8 9.5-7.5 1-1.7 1.5-5.2 1.5-10.5s-2.3-10.3-7-15H0v40h399908c-34 25.3\n-64.7 57-92 95-27.3 38-48.7 77.7-64 119-3.3 8.7-5 14-5 16zM0 435v40h399900v-40z\nm0-194v40h400000v-40zm0 0v40h400000v-40z",
                            righthook: "M399859 241c-764 0 0 0 0 0 40-3.3 68.7-15.7 86-37 10-12 15-25.3\n 15-40 0-22.7-9.8-40.7-29.5-54-19.7-13.3-43.5-21-71.5-23-17.3-1.3-26-8-26-20 0\n-13.3 8.7-20 26-20 38 0 71 11.2 99 33.5 0 0 7 5.6 21 16.7 14 11.2 21 33.5 21\n 66.8s-14 61.2-42 83.5c-28 22.3-61 33.5-99 33.5L0 241z M0 281v-40h399859v40z",
                            rightlinesegment: "M399960 241 V94 h40 V428 h-40 V281 H0 v-40z\nM399960 241 V94 h40 V428 h-40 V281 H0 v-40z",
                            rightToFrom: "M400000 167c-70.7-42-118-97.7-142-167h-23c-15.3 0-23 .3-23\n 1 0 1.3 5.3 13.7 16 37 18 35.3 41.3 69 70 101l7 8H0v40h399905l-7 8c-28.7 32\n-52 65.7-70 101-10.7 23.3-16 35.7-16 37 0 .7 7.7 1 23 1h23c24-69.3 71.3-125 142\n-167z M100 147v40h399900v-40zM0 341v40h399900v-40z",
                            twoheadleftarrow: "M0 167c68 40\n 115.7 95.7 143 167h22c15.3 0 23-.3 23-1 0-1.3-5.3-13.7-16-37-18-35.3-41.3-69\n-70-101l-7-8h125l9 7c50.7 39.3 85 86 103 140h46c0-4.7-6.3-18.7-19-42-18-35.3\n-40-67.3-66-96l-9-9h399716v-40H284l9-9c26-28.7 48-60.7 66-96 12.7-23.333 19\n-37.333 19-42h-46c-18 54-52.3 100.7-103 140l-9 7H95l7-8c28.7-32 52-65.7 70-101\n 10.7-23.333 16-35.7 16-37 0-.7-7.7-1-23-1h-22C115.7 71.3 68 127 0 167z",
                            twoheadrightarrow: "M400000 167\nc-68-40-115.7-95.7-143-167h-22c-15.3 0-23 .3-23 1 0 1.3 5.3 13.7 16 37 18 35.3\n 41.3 69 70 101l7 8h-125l-9-7c-50.7-39.3-85-86-103-140h-46c0 4.7 6.3 18.7 19 42\n 18 35.3 40 67.3 66 96l9 9H0v40h399716l-9 9c-26 28.7-48 60.7-66 96-12.7 23.333\n-19 37.333-19 42h46c18-54 52.3-100.7 103-140l9-7h125l-7 8c-28.7 32-52 65.7-70\n 101-10.7 23.333-16 35.7-16 37 0 .7 7.7 1 23 1h22c27.3-71.3 75-127 143-167z",
                            tilde1: "M200 55.538c-77 0-168 73.953-177 73.953-3 0-7\n-2.175-9-5.437L2 97c-1-2-2-4-2-6 0-4 2-7 5-9l20-12C116 12 171 0 207 0c86 0\n 114 68 191 68 78 0 168-68 177-68 4 0 7 2 9 5l12 19c1 2.175 2 4.35 2 6.525 0\n 4.35-2 7.613-5 9.788l-19 13.05c-92 63.077-116.937 75.308-183 76.128\n-68.267.847-113-73.952-191-73.952z",
                            tilde2: "M344 55.266c-142 0-300.638 81.316-311.5 86.418\n-8.01 3.762-22.5 10.91-23.5 5.562L1 120c-1-2-1-3-1-4 0-5 3-9 8-10l18.4-9C160.9\n 31.9 283 0 358 0c148 0 188 122 331 122s314-97 326-97c4 0 8 2 10 7l7 21.114\nc1 2.14 1 3.21 1 4.28 0 5.347-3 9.626-7 10.696l-22.3 12.622C852.6 158.372 751\n 181.476 676 181.476c-149 0-189-126.21-332-126.21z",
                            tilde3: "M786 59C457 59 32 175.242 13 175.242c-6 0-10-3.457\n-11-10.37L.15 138c-1-7 3-12 10-13l19.2-6.4C378.4 40.7 634.3 0 804.3 0c337 0\n 411.8 157 746.8 157 328 0 754-112 773-112 5 0 10 3 11 9l1 14.075c1 8.066-.697\n 16.595-6.697 17.492l-21.052 7.31c-367.9 98.146-609.15 122.696-778.15 122.696\n -338 0-409-156.573-744-156.573z",
                            tilde4: "M786 58C457 58 32 177.487 13 177.487c-6 0-10-3.345\n-11-10.035L.15 143c-1-7 3-12 10-13l22-6.7C381.2 35 637.15 0 807.15 0c337 0 409\n 177 744 177 328 0 754-127 773-127 5 0 10 3 11 9l1 14.794c1 7.805-3 13.38-9\n 14.495l-20.7 5.574c-366.85 99.79-607.3 139.372-776.3 139.372-338 0-409\n -175.236-744-175.236z",
                            vec: "M377 20c0-5.333 1.833-10 5.5-14S391 0 397 0c4.667 0 8.667 1.667 12 5\n3.333 2.667 6.667 9 10 19 6.667 24.667 20.333 43.667 41 57 7.333 4.667 11\n10.667 11 18 0 6-1 10-3 12s-6.667 5-14 9c-28.667 14.667-53.667 35.667-75 63\n-1.333 1.333-3.167 3.5-5.5 6.5s-4 4.833-5 5.5c-1 .667-2.5 1.333-4.5 2s-4.333 1\n-7 1c-4.667 0-9.167-1.833-13.5-5.5S337 184 337 178c0-12.667 15.667-32.333 47-59\nH213l-171-1c-8.667-6-13-12.333-13-19 0-4.667 4.333-11.333 13-20h359\nc-16-25.333-24-45-24-59z",
                            widehat1: "M529 0h5l519 115c5 1 9 5 9 10 0 1-1 2-1 3l-4 22\nc-1 5-5 9-11 9h-2L532 67 19 159h-2c-5 0-9-4-11-9l-5-22c-1-6 2-12 8-13z",
                            widehat2: "M1181 0h2l1171 176c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 220h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
                            widehat3: "M1181 0h2l1171 236c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 280h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
                            widehat4: "M1181 0h2l1171 296c6 0 10 5 10 11l-2 23c-1 6-5 10\n-11 10h-1L1182 67 15 340h-1c-6 0-10-4-11-10l-2-23c-1-6 4-11 10-11z",
                            widecheck1: "M529,159h5l519,-115c5,-1,9,-5,9,-10c0,-1,-1,-2,-1,-3l-4,-22c-1,\n-5,-5,-9,-11,-9h-2l-512,92l-513,-92h-2c-5,0,-9,4,-11,9l-5,22c-1,6,2,12,8,13z",
                            widecheck2: "M1181,220h2l1171,-176c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,153l-1167,-153h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
                            widecheck3: "M1181,280h2l1171,-236c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,213l-1167,-213h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
                            widecheck4: "M1181,340h2l1171,-296c6,0,10,-5,10,-11l-2,-23c-1,-6,-5,-10,\n-11,-10h-1l-1168,273l-1167,-273h-1c-6,0,-10,4,-11,10l-2,23c-1,6,4,11,10,11z",
                            baraboveleftarrow: "M400000 620h-399890l3 -3c68.7 -52.7 113.7 -120 135 -202\nc4 -14.7 6 -23 6 -25c0 -7.3 -7 -11 -21 -11c-8 0 -13.2 0.8 -15.5 2.5\nc-2.3 1.7 -4.2 5.8 -5.5 12.5c-1.3 4.7 -2.7 10.3 -4 17c-12 48.7 -34.8 92 -68.5 130\ns-74.2 66.3 -121.5 85c-10 4 -16 7.7 -18 11c0 8.7 6 14.3 18 17c47.3 18.7 87.8 47\n121.5 85s56.5 81.3 68.5 130c0.7 2 1.3 5 2 9s1.2 6.7 1.5 8c0.3 1.3 1 3.3 2 6\ns2.2 4.5 3.5 5.5c1.3 1 3.3 1.8 6 2.5s6 1 10 1c14 0 21 -3.7 21 -11\nc0 -2 -2 -10.3 -6 -25c-20 -79.3 -65 -146.7 -135 -202l-3 -3h399890z\nM100 620v40h399900v-40z M0 241v40h399900v-40zM0 241v40h399900v-40z",
                            rightarrowabovebar: "M0 241v40h399891c-47.3 35.3-84 78-110 128-16.7 32\n-27.7 63.7-33 95 0 1.3-.2 2.7-.5 4-.3 1.3-.5 2.3-.5 3 0 7.3 6.7 11 20 11 8 0\n13.2-.8 15.5-2.5 2.3-1.7 4.2-5.5 5.5-11.5 2-13.3 5.7-27 11-41 14.7-44.7 39\n-84.5 73-119.5s73.7-60.2 119-75.5c6-2 9-5.7 9-11s-3-9-9-11c-45.3-15.3-85-40.5\n-119-75.5s-58.3-74.8-73-119.5c-4.7-14-8.3-27.3-11-40-1.3-6.7-3.2-10.8-5.5\n-12.5-2.3-1.7-7.5-2.5-15.5-2.5-14 0-21 3.7-21 11 0 2 2 10.3 6 25 20.7 83.3 67\n151.7 139 205zm96 379h399894v40H0zm0 0h399904v40H0z",
                            baraboveshortleftharpoon: "M507,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17\nc2,0.7,5,1,9,1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21\nc-32,-87.3,-82.7,-157.7,-152,-211c0,0,-3,-3,-3,-3l399351,0l0,-40\nc-398570,0,-399437,0,-399437,0z M593 435 v40 H399500 v-40z\nM0 281 v-40 H399908 v40z M0 281 v-40 H399908 v40z",
                            rightharpoonaboveshortbar: "M0,241 l0,40c399126,0,399993,0,399993,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM0 241 v40 H399908 v-40z M0 475 v-40 H399500 v40z M0 475 v-40 H399500 v40z",
                            shortbaraboveleftharpoon: "M7,435c-4,4,-6.3,8.7,-7,14c0,5.3,0.7,9,2,11\nc1.3,2,5.3,5.3,12,10c90.7,54,156,130,196,228c3.3,10.7,6.3,16.3,9,17c2,0.7,5,1,9,\n1c0,0,5,0,5,0c10.7,0,16.7,-2,18,-6c2,-2.7,1,-9.7,-3,-21c-32,-87.3,-82.7,-157.7,\n-152,-211c0,0,-3,-3,-3,-3l399907,0l0,-40c-399126,0,-399993,0,-399993,0z\nM93 435 v40 H400000 v-40z M500 241 v40 H400000 v-40z M500 241 v40 H400000 v-40z",
                            shortrightharpoonabovebar: "M53,241l0,40c398570,0,399437,0,399437,0\nc4.7,-4.7,7,-9.3,7,-14c0,-9.3,-3.7,-15.3,-11,-18c-92.7,-56.7,-159,-133.7,-199,\n-231c-3.3,-9.3,-6,-14.7,-8,-16c-2,-1.3,-7,-2,-15,-2c-10.7,0,-16.7,2,-18,6\nc-2,2.7,-1,9.7,3,21c15.3,42,36.7,81.8,64,119.5c27.3,37.7,58,69.2,92,94.5z\nM500 241 v40 H399408 v-40z M500 435 v40 H400000 v-40z"
                        },
                        T = function() {
                            function e(e) {
                                this.children = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.children = e, this.classes = [], this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = {}
                            }
                            var t = e.prototype;
                            return t.hasClass = function(e) {
                                return c.contains(this.classes, e)
                            }, t.toNode = function() {
                                for (var e = document.createDocumentFragment(), t = 0; t < this.children.length; t++) e.appendChild(this.children[t].toNode());
                                return e
                            }, t.toMarkup = function() {
                                for (var e = "", t = 0; t < this.children.length; t++) e += this.children[t].toMarkup();
                                return e
                            }, t.toText = function() {
                                var e = function(e) {
                                    return e.toText()
                                };
                                return this.children.map(e).join("")
                            }, e
                        }(),
                        B = function(e) {
                            return e.filter((function(e) {
                                return e
                            })).join(" ")
                        },
                        C = function(e, t, r) {
                            if (this.classes = e || [], this.attributes = {}, this.height = 0, this.depth = 0, this.maxFontSize = 0, this.style = r || {}, t) {
                                t.style.isTight() && this.classes.push("mtight");
                                var n = t.getColor();
                                n && (this.style.color = n)
                            }
                        },
                        q = function(e) {
                            var t = document.createElement(e);
                            for (var r in t.className = B(this.classes), this.style) this.style.hasOwnProperty(r) && (t.style[r] = this.style[r]);
                            for (var n in this.attributes) this.attributes.hasOwnProperty(n) && t.setAttribute(n, this.attributes[n]);
                            for (var a = 0; a < this.children.length; a++) t.appendChild(this.children[a].toNode());
                            return t
                        },
                        N = function(e) {
                            var t = "<" + e;
                            this.classes.length && (t += ' class="' + c.escape(B(this.classes)) + '"');
                            var r = "";
                            for (var n in this.style) this.style.hasOwnProperty(n) && (r += c.hyphenate(n) + ":" + this.style[n] + ";");
                            for (var a in r && (t += ' style="' + c.escape(r) + '"'), this.attributes) this.attributes.hasOwnProperty(a) && (t += " " + a + '="' + c.escape(this.attributes[a]) + '"');
                            t += ">";
                            for (var i = 0; i < this.children.length; i++) t += this.children[i].toMarkup();
                            return t += "</" + e + ">"
                        },
                        I = function() {
                            function e(e, t, r, n) {
                                this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.width = void 0, this.maxFontSize = void 0, this.style = void 0, C.call(this, e, r, n), this.children = t || []
                            }
                            var t = e.prototype;
                            return t.setAttribute = function(e, t) {
                                this.attributes[e] = t
                            }, t.hasClass = function(e) {
                                return c.contains(this.classes, e)
                            }, t.toNode = function() {
                                return q.call(this, "span")
                            }, t.toMarkup = function() {
                                return N.call(this, "span")
                            }, e
                        }(),
                        O = function() {
                            function e(e, t, r, n) {
                                this.children = void 0, this.attributes = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, C.call(this, t, n), this.children = r || [], this.setAttribute("href", e)
                            }
                            var t = e.prototype;
                            return t.setAttribute = function(e, t) {
                                this.attributes[e] = t
                            }, t.hasClass = function(e) {
                                return c.contains(this.classes, e)
                            }, t.toNode = function() {
                                return q.call(this, "a")
                            }, t.toMarkup = function() {
                                return N.call(this, "a")
                            }, e
                        }(),
                        R = function() {
                            function e(e, t, r) {
                                this.src = void 0, this.alt = void 0, this.classes = void 0, this.height = void 0, this.depth = void 0, this.maxFontSize = void 0, this.style = void 0, this.alt = t, this.src = e, this.classes = ["mord"], this.style = r
                            }
                            var t = e.prototype;
                            return t.hasClass = function(e) {
                                return c.contains(this.classes, e)
                            }, t.toNode = function() {
                                var e = document.createElement("img");
                                for (var t in e.src = this.src, e.alt = this.alt, e.className = "mord", this.style) this.style.hasOwnProperty(t) && (e.style[t] = this.style[t]);
                                return e
                            }, t.toMarkup = function() {
                                var e = "<img  src='" + this.src + " 'alt='" + this.alt + "' ",
                                    t = "";
                                for (var r in this.style) this.style.hasOwnProperty(r) && (t += c.hyphenate(r) + ":" + this.style[r] + ";");
                                return t && (e += ' style="' + c.escape(t) + '"'), e += "'/>"
                            }, e
                        }(),
                        E = {
                            "\xee": "\u0131\u0302",
                            "\xef": "\u0131\u0308",
                            "\xed": "\u0131\u0301",
                            "\xec": "\u0131\u0300"
                        },
                        L = function() {
                            function e(e, t, r, n, a, i, o, s) {
                                this.text = void 0, this.height = void 0, this.depth = void 0, this.italic = void 0, this.skew = void 0, this.width = void 0, this.maxFontSize = void 0, this.classes = void 0, this.style = void 0, this.text = e, this.height = t || 0, this.depth = r || 0, this.italic = n || 0, this.skew = a || 0, this.width = i || 0, this.classes = o || [], this.style = s || {}, this.maxFontSize = 0;
                                var l = function(e) {
                                    for (var t = 0; t < k.length; t++)
                                        for (var r = k[t], n = 0; n < r.blocks.length; n++) {
                                            var a = r.blocks[n];
                                            if (e >= a[0] && e <= a[1]) return r.name
                                        }
                                    return null
                                }(this.text.charCodeAt(0));
                                l && this.classes.push(l + "_fallback"), /[\xee\xef\xed\xec]/.test(this.text) && (this.text = E[this.text])
                            }
                            var t = e.prototype;
                            return t.hasClass = function(e) {
                                return c.contains(this.classes, e)
                            }, t.toNode = function() {
                                var e = document.createTextNode(this.text),
                                    t = null;
                                for (var r in this.italic > 0 && ((t = document.createElement("span")).style.marginRight = this.italic + "em"), this.classes.length > 0 && ((t = t || document.createElement("span")).className = B(this.classes)), this.style) this.style.hasOwnProperty(r) && ((t = t || document.createElement("span")).style[r] = this.style[r]);
                                return t ? (t.appendChild(e), t) : e
                            }, t.toMarkup = function() {
                                var e = !1,
                                    t = "<span";
                                this.classes.length && (e = !0, t += ' class="', t += c.escape(B(this.classes)), t += '"');
                                var r = "";
                                for (var n in this.italic > 0 && (r += "margin-right:" + this.italic + "em;"), this.style) this.style.hasOwnProperty(n) && (r += c.hyphenate(n) + ":" + this.style[n] + ";");
                                r && (e = !0, t += ' style="' + c.escape(r) + '"');
                                var a = c.escape(this.text);
                                return e ? (t += ">", t += a, t += "</span>") : a
                            }, e
                        }(),
                        P = function() {
                            function e(e, t) {
                                this.children = void 0, this.attributes = void 0, this.children = e || [], this.attributes = t || {}
                            }
                            var t = e.prototype;
                            return t.toNode = function() {
                                var e = document.createElementNS("http://www.w3.org/2000/svg", "svg");
                                for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
                                for (var r = 0; r < this.children.length; r++) e.appendChild(this.children[r].toNode());
                                return e
                            }, t.toMarkup = function() {
                                var e = "<svg";
                                for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + "='" + this.attributes[t] + "'");
                                e += ">";
                                for (var r = 0; r < this.children.length; r++) e += this.children[r].toMarkup();
                                return e += "</svg>"
                            }, e
                        }(),
                        D = function() {
                            function e(e, t) {
                                this.pathName = void 0, this.alternate = void 0, this.pathName = e, this.alternate = t
                            }
                            var t = e.prototype;
                            return t.toNode = function() {
                                var e = document.createElementNS("http://www.w3.org/2000/svg", "path");
                                return this.alternate ? e.setAttribute("d", this.alternate) : e.setAttribute("d", A[this.pathName]), e
                            }, t.toMarkup = function() {
                                return this.alternate ? "<path d='" + this.alternate + "'/>" : "<path d='" + A[this.pathName] + "'/>"
                            }, e
                        }(),
                        H = function() {
                            function e(e) {
                                this.attributes = void 0, this.attributes = e || {}
                            }
                            var t = e.prototype;
                            return t.toNode = function() {
                                var e = document.createElementNS("http://www.w3.org/2000/svg", "line");
                                for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
                                return e
                            }, t.toMarkup = function() {
                                var e = "<line";
                                for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + "='" + this.attributes[t] + "'");
                                return e += "/>"
                            }, e
                        }();

                    function F(e) {
                        if (e instanceof L) return e;
                        throw new Error("Expected symbolNode but got " + String(e) + ".")
                    }
                    var V = {
                            "AMS-Regular": {
                                32: [0, 0, 0, 0, .25],
                                65: [0, .68889, 0, 0, .72222],
                                66: [0, .68889, 0, 0, .66667],
                                67: [0, .68889, 0, 0, .72222],
                                68: [0, .68889, 0, 0, .72222],
                                69: [0, .68889, 0, 0, .66667],
                                70: [0, .68889, 0, 0, .61111],
                                71: [0, .68889, 0, 0, .77778],
                                72: [0, .68889, 0, 0, .77778],
                                73: [0, .68889, 0, 0, .38889],
                                74: [.16667, .68889, 0, 0, .5],
                                75: [0, .68889, 0, 0, .77778],
                                76: [0, .68889, 0, 0, .66667],
                                77: [0, .68889, 0, 0, .94445],
                                78: [0, .68889, 0, 0, .72222],
                                79: [.16667, .68889, 0, 0, .77778],
                                80: [0, .68889, 0, 0, .61111],
                                81: [.16667, .68889, 0, 0, .77778],
                                82: [0, .68889, 0, 0, .72222],
                                83: [0, .68889, 0, 0, .55556],
                                84: [0, .68889, 0, 0, .66667],
                                85: [0, .68889, 0, 0, .72222],
                                86: [0, .68889, 0, 0, .72222],
                                87: [0, .68889, 0, 0, 1],
                                88: [0, .68889, 0, 0, .72222],
                                89: [0, .68889, 0, 0, .72222],
                                90: [0, .68889, 0, 0, .66667],
                                107: [0, .68889, 0, 0, .55556],
                                160: [0, 0, 0, 0, .25],
                                165: [0, .675, .025, 0, .75],
                                174: [.15559, .69224, 0, 0, .94666],
                                240: [0, .68889, 0, 0, .55556],
                                295: [0, .68889, 0, 0, .54028],
                                710: [0, .825, 0, 0, 2.33334],
                                732: [0, .9, 0, 0, 2.33334],
                                770: [0, .825, 0, 0, 2.33334],
                                771: [0, .9, 0, 0, 2.33334],
                                989: [.08167, .58167, 0, 0, .77778],
                                1008: [0, .43056, .04028, 0, .66667],
                                8245: [0, .54986, 0, 0, .275],
                                8463: [0, .68889, 0, 0, .54028],
                                8487: [0, .68889, 0, 0, .72222],
                                8498: [0, .68889, 0, 0, .55556],
                                8502: [0, .68889, 0, 0, .66667],
                                8503: [0, .68889, 0, 0, .44445],
                                8504: [0, .68889, 0, 0, .66667],
                                8513: [0, .68889, 0, 0, .63889],
                                8592: [-.03598, .46402, 0, 0, .5],
                                8594: [-.03598, .46402, 0, 0, .5],
                                8602: [-.13313, .36687, 0, 0, 1],
                                8603: [-.13313, .36687, 0, 0, 1],
                                8606: [.01354, .52239, 0, 0, 1],
                                8608: [.01354, .52239, 0, 0, 1],
                                8610: [.01354, .52239, 0, 0, 1.11111],
                                8611: [.01354, .52239, 0, 0, 1.11111],
                                8619: [0, .54986, 0, 0, 1],
                                8620: [0, .54986, 0, 0, 1],
                                8621: [-.13313, .37788, 0, 0, 1.38889],
                                8622: [-.13313, .36687, 0, 0, 1],
                                8624: [0, .69224, 0, 0, .5],
                                8625: [0, .69224, 0, 0, .5],
                                8630: [0, .43056, 0, 0, 1],
                                8631: [0, .43056, 0, 0, 1],
                                8634: [.08198, .58198, 0, 0, .77778],
                                8635: [.08198, .58198, 0, 0, .77778],
                                8638: [.19444, .69224, 0, 0, .41667],
                                8639: [.19444, .69224, 0, 0, .41667],
                                8642: [.19444, .69224, 0, 0, .41667],
                                8643: [.19444, .69224, 0, 0, .41667],
                                8644: [.1808, .675, 0, 0, 1],
                                8646: [.1808, .675, 0, 0, 1],
                                8647: [.1808, .675, 0, 0, 1],
                                8648: [.19444, .69224, 0, 0, .83334],
                                8649: [.1808, .675, 0, 0, 1],
                                8650: [.19444, .69224, 0, 0, .83334],
                                8651: [.01354, .52239, 0, 0, 1],
                                8652: [.01354, .52239, 0, 0, 1],
                                8653: [-.13313, .36687, 0, 0, 1],
                                8654: [-.13313, .36687, 0, 0, 1],
                                8655: [-.13313, .36687, 0, 0, 1],
                                8666: [.13667, .63667, 0, 0, 1],
                                8667: [.13667, .63667, 0, 0, 1],
                                8669: [-.13313, .37788, 0, 0, 1],
                                8672: [-.064, .437, 0, 0, 1.334],
                                8674: [-.064, .437, 0, 0, 1.334],
                                8705: [0, .825, 0, 0, .5],
                                8708: [0, .68889, 0, 0, .55556],
                                8709: [.08167, .58167, 0, 0, .77778],
                                8717: [0, .43056, 0, 0, .42917],
                                8722: [-.03598, .46402, 0, 0, .5],
                                8724: [.08198, .69224, 0, 0, .77778],
                                8726: [.08167, .58167, 0, 0, .77778],
                                8733: [0, .69224, 0, 0, .77778],
                                8736: [0, .69224, 0, 0, .72222],
                                8737: [0, .69224, 0, 0, .72222],
                                8738: [.03517, .52239, 0, 0, .72222],
                                8739: [.08167, .58167, 0, 0, .22222],
                                8740: [.25142, .74111, 0, 0, .27778],
                                8741: [.08167, .58167, 0, 0, .38889],
                                8742: [.25142, .74111, 0, 0, .5],
                                8756: [0, .69224, 0, 0, .66667],
                                8757: [0, .69224, 0, 0, .66667],
                                8764: [-.13313, .36687, 0, 0, .77778],
                                8765: [-.13313, .37788, 0, 0, .77778],
                                8769: [-.13313, .36687, 0, 0, .77778],
                                8770: [-.03625, .46375, 0, 0, .77778],
                                8774: [.30274, .79383, 0, 0, .77778],
                                8776: [-.01688, .48312, 0, 0, .77778],
                                8778: [.08167, .58167, 0, 0, .77778],
                                8782: [.06062, .54986, 0, 0, .77778],
                                8783: [.06062, .54986, 0, 0, .77778],
                                8785: [.08198, .58198, 0, 0, .77778],
                                8786: [.08198, .58198, 0, 0, .77778],
                                8787: [.08198, .58198, 0, 0, .77778],
                                8790: [0, .69224, 0, 0, .77778],
                                8791: [.22958, .72958, 0, 0, .77778],
                                8796: [.08198, .91667, 0, 0, .77778],
                                8806: [.25583, .75583, 0, 0, .77778],
                                8807: [.25583, .75583, 0, 0, .77778],
                                8808: [.25142, .75726, 0, 0, .77778],
                                8809: [.25142, .75726, 0, 0, .77778],
                                8812: [.25583, .75583, 0, 0, .5],
                                8814: [.20576, .70576, 0, 0, .77778],
                                8815: [.20576, .70576, 0, 0, .77778],
                                8816: [.30274, .79383, 0, 0, .77778],
                                8817: [.30274, .79383, 0, 0, .77778],
                                8818: [.22958, .72958, 0, 0, .77778],
                                8819: [.22958, .72958, 0, 0, .77778],
                                8822: [.1808, .675, 0, 0, .77778],
                                8823: [.1808, .675, 0, 0, .77778],
                                8828: [.13667, .63667, 0, 0, .77778],
                                8829: [.13667, .63667, 0, 0, .77778],
                                8830: [.22958, .72958, 0, 0, .77778],
                                8831: [.22958, .72958, 0, 0, .77778],
                                8832: [.20576, .70576, 0, 0, .77778],
                                8833: [.20576, .70576, 0, 0, .77778],
                                8840: [.30274, .79383, 0, 0, .77778],
                                8841: [.30274, .79383, 0, 0, .77778],
                                8842: [.13597, .63597, 0, 0, .77778],
                                8843: [.13597, .63597, 0, 0, .77778],
                                8847: [.03517, .54986, 0, 0, .77778],
                                8848: [.03517, .54986, 0, 0, .77778],
                                8858: [.08198, .58198, 0, 0, .77778],
                                8859: [.08198, .58198, 0, 0, .77778],
                                8861: [.08198, .58198, 0, 0, .77778],
                                8862: [0, .675, 0, 0, .77778],
                                8863: [0, .675, 0, 0, .77778],
                                8864: [0, .675, 0, 0, .77778],
                                8865: [0, .675, 0, 0, .77778],
                                8872: [0, .69224, 0, 0, .61111],
                                8873: [0, .69224, 0, 0, .72222],
                                8874: [0, .69224, 0, 0, .88889],
                                8876: [0, .68889, 0, 0, .61111],
                                8877: [0, .68889, 0, 0, .61111],
                                8878: [0, .68889, 0, 0, .72222],
                                8879: [0, .68889, 0, 0, .72222],
                                8882: [.03517, .54986, 0, 0, .77778],
                                8883: [.03517, .54986, 0, 0, .77778],
                                8884: [.13667, .63667, 0, 0, .77778],
                                8885: [.13667, .63667, 0, 0, .77778],
                                8888: [0, .54986, 0, 0, 1.11111],
                                8890: [.19444, .43056, 0, 0, .55556],
                                8891: [.19444, .69224, 0, 0, .61111],
                                8892: [.19444, .69224, 0, 0, .61111],
                                8901: [0, .54986, 0, 0, .27778],
                                8903: [.08167, .58167, 0, 0, .77778],
                                8905: [.08167, .58167, 0, 0, .77778],
                                8906: [.08167, .58167, 0, 0, .77778],
                                8907: [0, .69224, 0, 0, .77778],
                                8908: [0, .69224, 0, 0, .77778],
                                8909: [-.03598, .46402, 0, 0, .77778],
                                8910: [0, .54986, 0, 0, .76042],
                                8911: [0, .54986, 0, 0, .76042],
                                8912: [.03517, .54986, 0, 0, .77778],
                                8913: [.03517, .54986, 0, 0, .77778],
                                8914: [0, .54986, 0, 0, .66667],
                                8915: [0, .54986, 0, 0, .66667],
                                8916: [0, .69224, 0, 0, .66667],
                                8918: [.0391, .5391, 0, 0, .77778],
                                8919: [.0391, .5391, 0, 0, .77778],
                                8920: [.03517, .54986, 0, 0, 1.33334],
                                8921: [.03517, .54986, 0, 0, 1.33334],
                                8922: [.38569, .88569, 0, 0, .77778],
                                8923: [.38569, .88569, 0, 0, .77778],
                                8926: [.13667, .63667, 0, 0, .77778],
                                8927: [.13667, .63667, 0, 0, .77778],
                                8928: [.30274, .79383, 0, 0, .77778],
                                8929: [.30274, .79383, 0, 0, .77778],
                                8934: [.23222, .74111, 0, 0, .77778],
                                8935: [.23222, .74111, 0, 0, .77778],
                                8936: [.23222, .74111, 0, 0, .77778],
                                8937: [.23222, .74111, 0, 0, .77778],
                                8938: [.20576, .70576, 0, 0, .77778],
                                8939: [.20576, .70576, 0, 0, .77778],
                                8940: [.30274, .79383, 0, 0, .77778],
                                8941: [.30274, .79383, 0, 0, .77778],
                                8994: [.19444, .69224, 0, 0, .77778],
                                8995: [.19444, .69224, 0, 0, .77778],
                                9416: [.15559, .69224, 0, 0, .90222],
                                9484: [0, .69224, 0, 0, .5],
                                9488: [0, .69224, 0, 0, .5],
                                9492: [0, .37788, 0, 0, .5],
                                9496: [0, .37788, 0, 0, .5],
                                9585: [.19444, .68889, 0, 0, .88889],
                                9586: [.19444, .74111, 0, 0, .88889],
                                9632: [0, .675, 0, 0, .77778],
                                9633: [0, .675, 0, 0, .77778],
                                9650: [0, .54986, 0, 0, .72222],
                                9651: [0, .54986, 0, 0, .72222],
                                9654: [.03517, .54986, 0, 0, .77778],
                                9660: [0, .54986, 0, 0, .72222],
                                9661: [0, .54986, 0, 0, .72222],
                                9664: [.03517, .54986, 0, 0, .77778],
                                9674: [.11111, .69224, 0, 0, .66667],
                                9733: [.19444, .69224, 0, 0, .94445],
                                10003: [0, .69224, 0, 0, .83334],
                                10016: [0, .69224, 0, 0, .83334],
                                10731: [.11111, .69224, 0, 0, .66667],
                                10846: [.19444, .75583, 0, 0, .61111],
                                10877: [.13667, .63667, 0, 0, .77778],
                                10878: [.13667, .63667, 0, 0, .77778],
                                10885: [.25583, .75583, 0, 0, .77778],
                                10886: [.25583, .75583, 0, 0, .77778],
                                10887: [.13597, .63597, 0, 0, .77778],
                                10888: [.13597, .63597, 0, 0, .77778],
                                10889: [.26167, .75726, 0, 0, .77778],
                                10890: [.26167, .75726, 0, 0, .77778],
                                10891: [.48256, .98256, 0, 0, .77778],
                                10892: [.48256, .98256, 0, 0, .77778],
                                10901: [.13667, .63667, 0, 0, .77778],
                                10902: [.13667, .63667, 0, 0, .77778],
                                10933: [.25142, .75726, 0, 0, .77778],
                                10934: [.25142, .75726, 0, 0, .77778],
                                10935: [.26167, .75726, 0, 0, .77778],
                                10936: [.26167, .75726, 0, 0, .77778],
                                10937: [.26167, .75726, 0, 0, .77778],
                                10938: [.26167, .75726, 0, 0, .77778],
                                10949: [.25583, .75583, 0, 0, .77778],
                                10950: [.25583, .75583, 0, 0, .77778],
                                10955: [.28481, .79383, 0, 0, .77778],
                                10956: [.28481, .79383, 0, 0, .77778],
                                57350: [.08167, .58167, 0, 0, .22222],
                                57351: [.08167, .58167, 0, 0, .38889],
                                57352: [.08167, .58167, 0, 0, .77778],
                                57353: [0, .43056, .04028, 0, .66667],
                                57356: [.25142, .75726, 0, 0, .77778],
                                57357: [.25142, .75726, 0, 0, .77778],
                                57358: [.41951, .91951, 0, 0, .77778],
                                57359: [.30274, .79383, 0, 0, .77778],
                                57360: [.30274, .79383, 0, 0, .77778],
                                57361: [.41951, .91951, 0, 0, .77778],
                                57366: [.25142, .75726, 0, 0, .77778],
                                57367: [.25142, .75726, 0, 0, .77778],
                                57368: [.25142, .75726, 0, 0, .77778],
                                57369: [.25142, .75726, 0, 0, .77778],
                                57370: [.13597, .63597, 0, 0, .77778],
                                57371: [.13597, .63597, 0, 0, .77778]
                            },
                            "Caligraphic-Regular": {
                                32: [0, 0, 0, 0, .25],
                                65: [0, .68333, 0, .19445, .79847],
                                66: [0, .68333, .03041, .13889, .65681],
                                67: [0, .68333, .05834, .13889, .52653],
                                68: [0, .68333, .02778, .08334, .77139],
                                69: [0, .68333, .08944, .11111, .52778],
                                70: [0, .68333, .09931, .11111, .71875],
                                71: [.09722, .68333, .0593, .11111, .59487],
                                72: [0, .68333, .00965, .11111, .84452],
                                73: [0, .68333, .07382, 0, .54452],
                                74: [.09722, .68333, .18472, .16667, .67778],
                                75: [0, .68333, .01445, .05556, .76195],
                                76: [0, .68333, 0, .13889, .68972],
                                77: [0, .68333, 0, .13889, 1.2009],
                                78: [0, .68333, .14736, .08334, .82049],
                                79: [0, .68333, .02778, .11111, .79611],
                                80: [0, .68333, .08222, .08334, .69556],
                                81: [.09722, .68333, 0, .11111, .81667],
                                82: [0, .68333, 0, .08334, .8475],
                                83: [0, .68333, .075, .13889, .60556],
                                84: [0, .68333, .25417, 0, .54464],
                                85: [0, .68333, .09931, .08334, .62583],
                                86: [0, .68333, .08222, 0, .61278],
                                87: [0, .68333, .08222, .08334, .98778],
                                88: [0, .68333, .14643, .13889, .7133],
                                89: [.09722, .68333, .08222, .08334, .66834],
                                90: [0, .68333, .07944, .13889, .72473],
                                160: [0, 0, 0, 0, .25]
                            },
                            "Fraktur-Regular": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69141, 0, 0, .29574],
                                34: [0, .69141, 0, 0, .21471],
                                38: [0, .69141, 0, 0, .73786],
                                39: [0, .69141, 0, 0, .21201],
                                40: [.24982, .74947, 0, 0, .38865],
                                41: [.24982, .74947, 0, 0, .38865],
                                42: [0, .62119, 0, 0, .27764],
                                43: [.08319, .58283, 0, 0, .75623],
                                44: [0, .10803, 0, 0, .27764],
                                45: [.08319, .58283, 0, 0, .75623],
                                46: [0, .10803, 0, 0, .27764],
                                47: [.24982, .74947, 0, 0, .50181],
                                48: [0, .47534, 0, 0, .50181],
                                49: [0, .47534, 0, 0, .50181],
                                50: [0, .47534, 0, 0, .50181],
                                51: [.18906, .47534, 0, 0, .50181],
                                52: [.18906, .47534, 0, 0, .50181],
                                53: [.18906, .47534, 0, 0, .50181],
                                54: [0, .69141, 0, 0, .50181],
                                55: [.18906, .47534, 0, 0, .50181],
                                56: [0, .69141, 0, 0, .50181],
                                57: [.18906, .47534, 0, 0, .50181],
                                58: [0, .47534, 0, 0, .21606],
                                59: [.12604, .47534, 0, 0, .21606],
                                61: [-.13099, .36866, 0, 0, .75623],
                                63: [0, .69141, 0, 0, .36245],
                                65: [0, .69141, 0, 0, .7176],
                                66: [0, .69141, 0, 0, .88397],
                                67: [0, .69141, 0, 0, .61254],
                                68: [0, .69141, 0, 0, .83158],
                                69: [0, .69141, 0, 0, .66278],
                                70: [.12604, .69141, 0, 0, .61119],
                                71: [0, .69141, 0, 0, .78539],
                                72: [.06302, .69141, 0, 0, .7203],
                                73: [0, .69141, 0, 0, .55448],
                                74: [.12604, .69141, 0, 0, .55231],
                                75: [0, .69141, 0, 0, .66845],
                                76: [0, .69141, 0, 0, .66602],
                                77: [0, .69141, 0, 0, 1.04953],
                                78: [0, .69141, 0, 0, .83212],
                                79: [0, .69141, 0, 0, .82699],
                                80: [.18906, .69141, 0, 0, .82753],
                                81: [.03781, .69141, 0, 0, .82699],
                                82: [0, .69141, 0, 0, .82807],
                                83: [0, .69141, 0, 0, .82861],
                                84: [0, .69141, 0, 0, .66899],
                                85: [0, .69141, 0, 0, .64576],
                                86: [0, .69141, 0, 0, .83131],
                                87: [0, .69141, 0, 0, 1.04602],
                                88: [0, .69141, 0, 0, .71922],
                                89: [.18906, .69141, 0, 0, .83293],
                                90: [.12604, .69141, 0, 0, .60201],
                                91: [.24982, .74947, 0, 0, .27764],
                                93: [.24982, .74947, 0, 0, .27764],
                                94: [0, .69141, 0, 0, .49965],
                                97: [0, .47534, 0, 0, .50046],
                                98: [0, .69141, 0, 0, .51315],
                                99: [0, .47534, 0, 0, .38946],
                                100: [0, .62119, 0, 0, .49857],
                                101: [0, .47534, 0, 0, .40053],
                                102: [.18906, .69141, 0, 0, .32626],
                                103: [.18906, .47534, 0, 0, .5037],
                                104: [.18906, .69141, 0, 0, .52126],
                                105: [0, .69141, 0, 0, .27899],
                                106: [0, .69141, 0, 0, .28088],
                                107: [0, .69141, 0, 0, .38946],
                                108: [0, .69141, 0, 0, .27953],
                                109: [0, .47534, 0, 0, .76676],
                                110: [0, .47534, 0, 0, .52666],
                                111: [0, .47534, 0, 0, .48885],
                                112: [.18906, .52396, 0, 0, .50046],
                                113: [.18906, .47534, 0, 0, .48912],
                                114: [0, .47534, 0, 0, .38919],
                                115: [0, .47534, 0, 0, .44266],
                                116: [0, .62119, 0, 0, .33301],
                                117: [0, .47534, 0, 0, .5172],
                                118: [0, .52396, 0, 0, .5118],
                                119: [0, .52396, 0, 0, .77351],
                                120: [.18906, .47534, 0, 0, .38865],
                                121: [.18906, .47534, 0, 0, .49884],
                                122: [.18906, .47534, 0, 0, .39054],
                                160: [0, 0, 0, 0, .25],
                                8216: [0, .69141, 0, 0, .21471],
                                8217: [0, .69141, 0, 0, .21471],
                                58112: [0, .62119, 0, 0, .49749],
                                58113: [0, .62119, 0, 0, .4983],
                                58114: [.18906, .69141, 0, 0, .33328],
                                58115: [.18906, .69141, 0, 0, .32923],
                                58116: [.18906, .47534, 0, 0, .50343],
                                58117: [0, .69141, 0, 0, .33301],
                                58118: [0, .62119, 0, 0, .33409],
                                58119: [0, .47534, 0, 0, .50073]
                            },
                            "Main-Bold": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, 0, 0, .35],
                                34: [0, .69444, 0, 0, .60278],
                                35: [.19444, .69444, 0, 0, .95833],
                                36: [.05556, .75, 0, 0, .575],
                                37: [.05556, .75, 0, 0, .95833],
                                38: [0, .69444, 0, 0, .89444],
                                39: [0, .69444, 0, 0, .31944],
                                40: [.25, .75, 0, 0, .44722],
                                41: [.25, .75, 0, 0, .44722],
                                42: [0, .75, 0, 0, .575],
                                43: [.13333, .63333, 0, 0, .89444],
                                44: [.19444, .15556, 0, 0, .31944],
                                45: [0, .44444, 0, 0, .38333],
                                46: [0, .15556, 0, 0, .31944],
                                47: [.25, .75, 0, 0, .575],
                                48: [0, .64444, 0, 0, .575],
                                49: [0, .64444, 0, 0, .575],
                                50: [0, .64444, 0, 0, .575],
                                51: [0, .64444, 0, 0, .575],
                                52: [0, .64444, 0, 0, .575],
                                53: [0, .64444, 0, 0, .575],
                                54: [0, .64444, 0, 0, .575],
                                55: [0, .64444, 0, 0, .575],
                                56: [0, .64444, 0, 0, .575],
                                57: [0, .64444, 0, 0, .575],
                                58: [0, .44444, 0, 0, .31944],
                                59: [.19444, .44444, 0, 0, .31944],
                                60: [.08556, .58556, 0, 0, .89444],
                                61: [-.10889, .39111, 0, 0, .89444],
                                62: [.08556, .58556, 0, 0, .89444],
                                63: [0, .69444, 0, 0, .54305],
                                64: [0, .69444, 0, 0, .89444],
                                65: [0, .68611, 0, 0, .86944],
                                66: [0, .68611, 0, 0, .81805],
                                67: [0, .68611, 0, 0, .83055],
                                68: [0, .68611, 0, 0, .88194],
                                69: [0, .68611, 0, 0, .75555],
                                70: [0, .68611, 0, 0, .72361],
                                71: [0, .68611, 0, 0, .90416],
                                72: [0, .68611, 0, 0, .9],
                                73: [0, .68611, 0, 0, .43611],
                                74: [0, .68611, 0, 0, .59444],
                                75: [0, .68611, 0, 0, .90138],
                                76: [0, .68611, 0, 0, .69166],
                                77: [0, .68611, 0, 0, 1.09166],
                                78: [0, .68611, 0, 0, .9],
                                79: [0, .68611, 0, 0, .86388],
                                80: [0, .68611, 0, 0, .78611],
                                81: [.19444, .68611, 0, 0, .86388],
                                82: [0, .68611, 0, 0, .8625],
                                83: [0, .68611, 0, 0, .63889],
                                84: [0, .68611, 0, 0, .8],
                                85: [0, .68611, 0, 0, .88472],
                                86: [0, .68611, .01597, 0, .86944],
                                87: [0, .68611, .01597, 0, 1.18888],
                                88: [0, .68611, 0, 0, .86944],
                                89: [0, .68611, .02875, 0, .86944],
                                90: [0, .68611, 0, 0, .70277],
                                91: [.25, .75, 0, 0, .31944],
                                92: [.25, .75, 0, 0, .575],
                                93: [.25, .75, 0, 0, .31944],
                                94: [0, .69444, 0, 0, .575],
                                95: [.31, .13444, .03194, 0, .575],
                                97: [0, .44444, 0, 0, .55902],
                                98: [0, .69444, 0, 0, .63889],
                                99: [0, .44444, 0, 0, .51111],
                                100: [0, .69444, 0, 0, .63889],
                                101: [0, .44444, 0, 0, .52708],
                                102: [0, .69444, .10903, 0, .35139],
                                103: [.19444, .44444, .01597, 0, .575],
                                104: [0, .69444, 0, 0, .63889],
                                105: [0, .69444, 0, 0, .31944],
                                106: [.19444, .69444, 0, 0, .35139],
                                107: [0, .69444, 0, 0, .60694],
                                108: [0, .69444, 0, 0, .31944],
                                109: [0, .44444, 0, 0, .95833],
                                110: [0, .44444, 0, 0, .63889],
                                111: [0, .44444, 0, 0, .575],
                                112: [.19444, .44444, 0, 0, .63889],
                                113: [.19444, .44444, 0, 0, .60694],
                                114: [0, .44444, 0, 0, .47361],
                                115: [0, .44444, 0, 0, .45361],
                                116: [0, .63492, 0, 0, .44722],
                                117: [0, .44444, 0, 0, .63889],
                                118: [0, .44444, .01597, 0, .60694],
                                119: [0, .44444, .01597, 0, .83055],
                                120: [0, .44444, 0, 0, .60694],
                                121: [.19444, .44444, .01597, 0, .60694],
                                122: [0, .44444, 0, 0, .51111],
                                123: [.25, .75, 0, 0, .575],
                                124: [.25, .75, 0, 0, .31944],
                                125: [.25, .75, 0, 0, .575],
                                126: [.35, .34444, 0, 0, .575],
                                160: [0, 0, 0, 0, .25],
                                163: [0, .69444, 0, 0, .86853],
                                168: [0, .69444, 0, 0, .575],
                                172: [0, .44444, 0, 0, .76666],
                                176: [0, .69444, 0, 0, .86944],
                                177: [.13333, .63333, 0, 0, .89444],
                                184: [.17014, 0, 0, 0, .51111],
                                198: [0, .68611, 0, 0, 1.04166],
                                215: [.13333, .63333, 0, 0, .89444],
                                216: [.04861, .73472, 0, 0, .89444],
                                223: [0, .69444, 0, 0, .59722],
                                230: [0, .44444, 0, 0, .83055],
                                247: [.13333, .63333, 0, 0, .89444],
                                248: [.09722, .54167, 0, 0, .575],
                                305: [0, .44444, 0, 0, .31944],
                                338: [0, .68611, 0, 0, 1.16944],
                                339: [0, .44444, 0, 0, .89444],
                                567: [.19444, .44444, 0, 0, .35139],
                                710: [0, .69444, 0, 0, .575],
                                711: [0, .63194, 0, 0, .575],
                                713: [0, .59611, 0, 0, .575],
                                714: [0, .69444, 0, 0, .575],
                                715: [0, .69444, 0, 0, .575],
                                728: [0, .69444, 0, 0, .575],
                                729: [0, .69444, 0, 0, .31944],
                                730: [0, .69444, 0, 0, .86944],
                                732: [0, .69444, 0, 0, .575],
                                733: [0, .69444, 0, 0, .575],
                                915: [0, .68611, 0, 0, .69166],
                                916: [0, .68611, 0, 0, .95833],
                                920: [0, .68611, 0, 0, .89444],
                                923: [0, .68611, 0, 0, .80555],
                                926: [0, .68611, 0, 0, .76666],
                                928: [0, .68611, 0, 0, .9],
                                931: [0, .68611, 0, 0, .83055],
                                933: [0, .68611, 0, 0, .89444],
                                934: [0, .68611, 0, 0, .83055],
                                936: [0, .68611, 0, 0, .89444],
                                937: [0, .68611, 0, 0, .83055],
                                8211: [0, .44444, .03194, 0, .575],
                                8212: [0, .44444, .03194, 0, 1.14999],
                                8216: [0, .69444, 0, 0, .31944],
                                8217: [0, .69444, 0, 0, .31944],
                                8220: [0, .69444, 0, 0, .60278],
                                8221: [0, .69444, 0, 0, .60278],
                                8224: [.19444, .69444, 0, 0, .51111],
                                8225: [.19444, .69444, 0, 0, .51111],
                                8242: [0, .55556, 0, 0, .34444],
                                8407: [0, .72444, .15486, 0, .575],
                                8463: [0, .69444, 0, 0, .66759],
                                8465: [0, .69444, 0, 0, .83055],
                                8467: [0, .69444, 0, 0, .47361],
                                8472: [.19444, .44444, 0, 0, .74027],
                                8476: [0, .69444, 0, 0, .83055],
                                8501: [0, .69444, 0, 0, .70277],
                                8592: [-.10889, .39111, 0, 0, 1.14999],
                                8593: [.19444, .69444, 0, 0, .575],
                                8594: [-.10889, .39111, 0, 0, 1.14999],
                                8595: [.19444, .69444, 0, 0, .575],
                                8596: [-.10889, .39111, 0, 0, 1.14999],
                                8597: [.25, .75, 0, 0, .575],
                                8598: [.19444, .69444, 0, 0, 1.14999],
                                8599: [.19444, .69444, 0, 0, 1.14999],
                                8600: [.19444, .69444, 0, 0, 1.14999],
                                8601: [.19444, .69444, 0, 0, 1.14999],
                                8636: [-.10889, .39111, 0, 0, 1.14999],
                                8637: [-.10889, .39111, 0, 0, 1.14999],
                                8640: [-.10889, .39111, 0, 0, 1.14999],
                                8641: [-.10889, .39111, 0, 0, 1.14999],
                                8656: [-.10889, .39111, 0, 0, 1.14999],
                                8657: [.19444, .69444, 0, 0, .70277],
                                8658: [-.10889, .39111, 0, 0, 1.14999],
                                8659: [.19444, .69444, 0, 0, .70277],
                                8660: [-.10889, .39111, 0, 0, 1.14999],
                                8661: [.25, .75, 0, 0, .70277],
                                8704: [0, .69444, 0, 0, .63889],
                                8706: [0, .69444, .06389, 0, .62847],
                                8707: [0, .69444, 0, 0, .63889],
                                8709: [.05556, .75, 0, 0, .575],
                                8711: [0, .68611, 0, 0, .95833],
                                8712: [.08556, .58556, 0, 0, .76666],
                                8715: [.08556, .58556, 0, 0, .76666],
                                8722: [.13333, .63333, 0, 0, .89444],
                                8723: [.13333, .63333, 0, 0, .89444],
                                8725: [.25, .75, 0, 0, .575],
                                8726: [.25, .75, 0, 0, .575],
                                8727: [-.02778, .47222, 0, 0, .575],
                                8728: [-.02639, .47361, 0, 0, .575],
                                8729: [-.02639, .47361, 0, 0, .575],
                                8730: [.18, .82, 0, 0, .95833],
                                8733: [0, .44444, 0, 0, .89444],
                                8734: [0, .44444, 0, 0, 1.14999],
                                8736: [0, .69224, 0, 0, .72222],
                                8739: [.25, .75, 0, 0, .31944],
                                8741: [.25, .75, 0, 0, .575],
                                8743: [0, .55556, 0, 0, .76666],
                                8744: [0, .55556, 0, 0, .76666],
                                8745: [0, .55556, 0, 0, .76666],
                                8746: [0, .55556, 0, 0, .76666],
                                8747: [.19444, .69444, .12778, 0, .56875],
                                8764: [-.10889, .39111, 0, 0, .89444],
                                8768: [.19444, .69444, 0, 0, .31944],
                                8771: [.00222, .50222, 0, 0, .89444],
                                8776: [.02444, .52444, 0, 0, .89444],
                                8781: [.00222, .50222, 0, 0, .89444],
                                8801: [.00222, .50222, 0, 0, .89444],
                                8804: [.19667, .69667, 0, 0, .89444],
                                8805: [.19667, .69667, 0, 0, .89444],
                                8810: [.08556, .58556, 0, 0, 1.14999],
                                8811: [.08556, .58556, 0, 0, 1.14999],
                                8826: [.08556, .58556, 0, 0, .89444],
                                8827: [.08556, .58556, 0, 0, .89444],
                                8834: [.08556, .58556, 0, 0, .89444],
                                8835: [.08556, .58556, 0, 0, .89444],
                                8838: [.19667, .69667, 0, 0, .89444],
                                8839: [.19667, .69667, 0, 0, .89444],
                                8846: [0, .55556, 0, 0, .76666],
                                8849: [.19667, .69667, 0, 0, .89444],
                                8850: [.19667, .69667, 0, 0, .89444],
                                8851: [0, .55556, 0, 0, .76666],
                                8852: [0, .55556, 0, 0, .76666],
                                8853: [.13333, .63333, 0, 0, .89444],
                                8854: [.13333, .63333, 0, 0, .89444],
                                8855: [.13333, .63333, 0, 0, .89444],
                                8856: [.13333, .63333, 0, 0, .89444],
                                8857: [.13333, .63333, 0, 0, .89444],
                                8866: [0, .69444, 0, 0, .70277],
                                8867: [0, .69444, 0, 0, .70277],
                                8868: [0, .69444, 0, 0, .89444],
                                8869: [0, .69444, 0, 0, .89444],
                                8900: [-.02639, .47361, 0, 0, .575],
                                8901: [-.02639, .47361, 0, 0, .31944],
                                8902: [-.02778, .47222, 0, 0, .575],
                                8968: [.25, .75, 0, 0, .51111],
                                8969: [.25, .75, 0, 0, .51111],
                                8970: [.25, .75, 0, 0, .51111],
                                8971: [.25, .75, 0, 0, .51111],
                                8994: [-.13889, .36111, 0, 0, 1.14999],
                                8995: [-.13889, .36111, 0, 0, 1.14999],
                                9651: [.19444, .69444, 0, 0, 1.02222],
                                9657: [-.02778, .47222, 0, 0, .575],
                                9661: [.19444, .69444, 0, 0, 1.02222],
                                9667: [-.02778, .47222, 0, 0, .575],
                                9711: [.19444, .69444, 0, 0, 1.14999],
                                9824: [.12963, .69444, 0, 0, .89444],
                                9825: [.12963, .69444, 0, 0, .89444],
                                9826: [.12963, .69444, 0, 0, .89444],
                                9827: [.12963, .69444, 0, 0, .89444],
                                9837: [0, .75, 0, 0, .44722],
                                9838: [.19444, .69444, 0, 0, .44722],
                                9839: [.19444, .69444, 0, 0, .44722],
                                10216: [.25, .75, 0, 0, .44722],
                                10217: [.25, .75, 0, 0, .44722],
                                10815: [0, .68611, 0, 0, .9],
                                10927: [.19667, .69667, 0, 0, .89444],
                                10928: [.19667, .69667, 0, 0, .89444],
                                57376: [.19444, .69444, 0, 0, 0]
                            },
                            "Main-BoldItalic": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, .11417, 0, .38611],
                                34: [0, .69444, .07939, 0, .62055],
                                35: [.19444, .69444, .06833, 0, .94444],
                                37: [.05556, .75, .12861, 0, .94444],
                                38: [0, .69444, .08528, 0, .88555],
                                39: [0, .69444, .12945, 0, .35555],
                                40: [.25, .75, .15806, 0, .47333],
                                41: [.25, .75, .03306, 0, .47333],
                                42: [0, .75, .14333, 0, .59111],
                                43: [.10333, .60333, .03306, 0, .88555],
                                44: [.19444, .14722, 0, 0, .35555],
                                45: [0, .44444, .02611, 0, .41444],
                                46: [0, .14722, 0, 0, .35555],
                                47: [.25, .75, .15806, 0, .59111],
                                48: [0, .64444, .13167, 0, .59111],
                                49: [0, .64444, .13167, 0, .59111],
                                50: [0, .64444, .13167, 0, .59111],
                                51: [0, .64444, .13167, 0, .59111],
                                52: [.19444, .64444, .13167, 0, .59111],
                                53: [0, .64444, .13167, 0, .59111],
                                54: [0, .64444, .13167, 0, .59111],
                                55: [.19444, .64444, .13167, 0, .59111],
                                56: [0, .64444, .13167, 0, .59111],
                                57: [0, .64444, .13167, 0, .59111],
                                58: [0, .44444, .06695, 0, .35555],
                                59: [.19444, .44444, .06695, 0, .35555],
                                61: [-.10889, .39111, .06833, 0, .88555],
                                63: [0, .69444, .11472, 0, .59111],
                                64: [0, .69444, .09208, 0, .88555],
                                65: [0, .68611, 0, 0, .86555],
                                66: [0, .68611, .0992, 0, .81666],
                                67: [0, .68611, .14208, 0, .82666],
                                68: [0, .68611, .09062, 0, .87555],
                                69: [0, .68611, .11431, 0, .75666],
                                70: [0, .68611, .12903, 0, .72722],
                                71: [0, .68611, .07347, 0, .89527],
                                72: [0, .68611, .17208, 0, .8961],
                                73: [0, .68611, .15681, 0, .47166],
                                74: [0, .68611, .145, 0, .61055],
                                75: [0, .68611, .14208, 0, .89499],
                                76: [0, .68611, 0, 0, .69777],
                                77: [0, .68611, .17208, 0, 1.07277],
                                78: [0, .68611, .17208, 0, .8961],
                                79: [0, .68611, .09062, 0, .85499],
                                80: [0, .68611, .0992, 0, .78721],
                                81: [.19444, .68611, .09062, 0, .85499],
                                82: [0, .68611, .02559, 0, .85944],
                                83: [0, .68611, .11264, 0, .64999],
                                84: [0, .68611, .12903, 0, .7961],
                                85: [0, .68611, .17208, 0, .88083],
                                86: [0, .68611, .18625, 0, .86555],
                                87: [0, .68611, .18625, 0, 1.15999],
                                88: [0, .68611, .15681, 0, .86555],
                                89: [0, .68611, .19803, 0, .86555],
                                90: [0, .68611, .14208, 0, .70888],
                                91: [.25, .75, .1875, 0, .35611],
                                93: [.25, .75, .09972, 0, .35611],
                                94: [0, .69444, .06709, 0, .59111],
                                95: [.31, .13444, .09811, 0, .59111],
                                97: [0, .44444, .09426, 0, .59111],
                                98: [0, .69444, .07861, 0, .53222],
                                99: [0, .44444, .05222, 0, .53222],
                                100: [0, .69444, .10861, 0, .59111],
                                101: [0, .44444, .085, 0, .53222],
                                102: [.19444, .69444, .21778, 0, .4],
                                103: [.19444, .44444, .105, 0, .53222],
                                104: [0, .69444, .09426, 0, .59111],
                                105: [0, .69326, .11387, 0, .35555],
                                106: [.19444, .69326, .1672, 0, .35555],
                                107: [0, .69444, .11111, 0, .53222],
                                108: [0, .69444, .10861, 0, .29666],
                                109: [0, .44444, .09426, 0, .94444],
                                110: [0, .44444, .09426, 0, .64999],
                                111: [0, .44444, .07861, 0, .59111],
                                112: [.19444, .44444, .07861, 0, .59111],
                                113: [.19444, .44444, .105, 0, .53222],
                                114: [0, .44444, .11111, 0, .50167],
                                115: [0, .44444, .08167, 0, .48694],
                                116: [0, .63492, .09639, 0, .385],
                                117: [0, .44444, .09426, 0, .62055],
                                118: [0, .44444, .11111, 0, .53222],
                                119: [0, .44444, .11111, 0, .76777],
                                120: [0, .44444, .12583, 0, .56055],
                                121: [.19444, .44444, .105, 0, .56166],
                                122: [0, .44444, .13889, 0, .49055],
                                126: [.35, .34444, .11472, 0, .59111],
                                160: [0, 0, 0, 0, .25],
                                168: [0, .69444, .11473, 0, .59111],
                                176: [0, .69444, 0, 0, .94888],
                                184: [.17014, 0, 0, 0, .53222],
                                198: [0, .68611, .11431, 0, 1.02277],
                                216: [.04861, .73472, .09062, 0, .88555],
                                223: [.19444, .69444, .09736, 0, .665],
                                230: [0, .44444, .085, 0, .82666],
                                248: [.09722, .54167, .09458, 0, .59111],
                                305: [0, .44444, .09426, 0, .35555],
                                338: [0, .68611, .11431, 0, 1.14054],
                                339: [0, .44444, .085, 0, .82666],
                                567: [.19444, .44444, .04611, 0, .385],
                                710: [0, .69444, .06709, 0, .59111],
                                711: [0, .63194, .08271, 0, .59111],
                                713: [0, .59444, .10444, 0, .59111],
                                714: [0, .69444, .08528, 0, .59111],
                                715: [0, .69444, 0, 0, .59111],
                                728: [0, .69444, .10333, 0, .59111],
                                729: [0, .69444, .12945, 0, .35555],
                                730: [0, .69444, 0, 0, .94888],
                                732: [0, .69444, .11472, 0, .59111],
                                733: [0, .69444, .11472, 0, .59111],
                                915: [0, .68611, .12903, 0, .69777],
                                916: [0, .68611, 0, 0, .94444],
                                920: [0, .68611, .09062, 0, .88555],
                                923: [0, .68611, 0, 0, .80666],
                                926: [0, .68611, .15092, 0, .76777],
                                928: [0, .68611, .17208, 0, .8961],
                                931: [0, .68611, .11431, 0, .82666],
                                933: [0, .68611, .10778, 0, .88555],
                                934: [0, .68611, .05632, 0, .82666],
                                936: [0, .68611, .10778, 0, .88555],
                                937: [0, .68611, .0992, 0, .82666],
                                8211: [0, .44444, .09811, 0, .59111],
                                8212: [0, .44444, .09811, 0, 1.18221],
                                8216: [0, .69444, .12945, 0, .35555],
                                8217: [0, .69444, .12945, 0, .35555],
                                8220: [0, .69444, .16772, 0, .62055],
                                8221: [0, .69444, .07939, 0, .62055]
                            },
                            "Main-Italic": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, .12417, 0, .30667],
                                34: [0, .69444, .06961, 0, .51444],
                                35: [.19444, .69444, .06616, 0, .81777],
                                37: [.05556, .75, .13639, 0, .81777],
                                38: [0, .69444, .09694, 0, .76666],
                                39: [0, .69444, .12417, 0, .30667],
                                40: [.25, .75, .16194, 0, .40889],
                                41: [.25, .75, .03694, 0, .40889],
                                42: [0, .75, .14917, 0, .51111],
                                43: [.05667, .56167, .03694, 0, .76666],
                                44: [.19444, .10556, 0, 0, .30667],
                                45: [0, .43056, .02826, 0, .35778],
                                46: [0, .10556, 0, 0, .30667],
                                47: [.25, .75, .16194, 0, .51111],
                                48: [0, .64444, .13556, 0, .51111],
                                49: [0, .64444, .13556, 0, .51111],
                                50: [0, .64444, .13556, 0, .51111],
                                51: [0, .64444, .13556, 0, .51111],
                                52: [.19444, .64444, .13556, 0, .51111],
                                53: [0, .64444, .13556, 0, .51111],
                                54: [0, .64444, .13556, 0, .51111],
                                55: [.19444, .64444, .13556, 0, .51111],
                                56: [0, .64444, .13556, 0, .51111],
                                57: [0, .64444, .13556, 0, .51111],
                                58: [0, .43056, .0582, 0, .30667],
                                59: [.19444, .43056, .0582, 0, .30667],
                                61: [-.13313, .36687, .06616, 0, .76666],
                                63: [0, .69444, .1225, 0, .51111],
                                64: [0, .69444, .09597, 0, .76666],
                                65: [0, .68333, 0, 0, .74333],
                                66: [0, .68333, .10257, 0, .70389],
                                67: [0, .68333, .14528, 0, .71555],
                                68: [0, .68333, .09403, 0, .755],
                                69: [0, .68333, .12028, 0, .67833],
                                70: [0, .68333, .13305, 0, .65277],
                                71: [0, .68333, .08722, 0, .77361],
                                72: [0, .68333, .16389, 0, .74333],
                                73: [0, .68333, .15806, 0, .38555],
                                74: [0, .68333, .14028, 0, .525],
                                75: [0, .68333, .14528, 0, .76888],
                                76: [0, .68333, 0, 0, .62722],
                                77: [0, .68333, .16389, 0, .89666],
                                78: [0, .68333, .16389, 0, .74333],
                                79: [0, .68333, .09403, 0, .76666],
                                80: [0, .68333, .10257, 0, .67833],
                                81: [.19444, .68333, .09403, 0, .76666],
                                82: [0, .68333, .03868, 0, .72944],
                                83: [0, .68333, .11972, 0, .56222],
                                84: [0, .68333, .13305, 0, .71555],
                                85: [0, .68333, .16389, 0, .74333],
                                86: [0, .68333, .18361, 0, .74333],
                                87: [0, .68333, .18361, 0, .99888],
                                88: [0, .68333, .15806, 0, .74333],
                                89: [0, .68333, .19383, 0, .74333],
                                90: [0, .68333, .14528, 0, .61333],
                                91: [.25, .75, .1875, 0, .30667],
                                93: [.25, .75, .10528, 0, .30667],
                                94: [0, .69444, .06646, 0, .51111],
                                95: [.31, .12056, .09208, 0, .51111],
                                97: [0, .43056, .07671, 0, .51111],
                                98: [0, .69444, .06312, 0, .46],
                                99: [0, .43056, .05653, 0, .46],
                                100: [0, .69444, .10333, 0, .51111],
                                101: [0, .43056, .07514, 0, .46],
                                102: [.19444, .69444, .21194, 0, .30667],
                                103: [.19444, .43056, .08847, 0, .46],
                                104: [0, .69444, .07671, 0, .51111],
                                105: [0, .65536, .1019, 0, .30667],
                                106: [.19444, .65536, .14467, 0, .30667],
                                107: [0, .69444, .10764, 0, .46],
                                108: [0, .69444, .10333, 0, .25555],
                                109: [0, .43056, .07671, 0, .81777],
                                110: [0, .43056, .07671, 0, .56222],
                                111: [0, .43056, .06312, 0, .51111],
                                112: [.19444, .43056, .06312, 0, .51111],
                                113: [.19444, .43056, .08847, 0, .46],
                                114: [0, .43056, .10764, 0, .42166],
                                115: [0, .43056, .08208, 0, .40889],
                                116: [0, .61508, .09486, 0, .33222],
                                117: [0, .43056, .07671, 0, .53666],
                                118: [0, .43056, .10764, 0, .46],
                                119: [0, .43056, .10764, 0, .66444],
                                120: [0, .43056, .12042, 0, .46389],
                                121: [.19444, .43056, .08847, 0, .48555],
                                122: [0, .43056, .12292, 0, .40889],
                                126: [.35, .31786, .11585, 0, .51111],
                                160: [0, 0, 0, 0, .25],
                                168: [0, .66786, .10474, 0, .51111],
                                176: [0, .69444, 0, 0, .83129],
                                184: [.17014, 0, 0, 0, .46],
                                198: [0, .68333, .12028, 0, .88277],
                                216: [.04861, .73194, .09403, 0, .76666],
                                223: [.19444, .69444, .10514, 0, .53666],
                                230: [0, .43056, .07514, 0, .71555],
                                248: [.09722, .52778, .09194, 0, .51111],
                                338: [0, .68333, .12028, 0, .98499],
                                339: [0, .43056, .07514, 0, .71555],
                                710: [0, .69444, .06646, 0, .51111],
                                711: [0, .62847, .08295, 0, .51111],
                                713: [0, .56167, .10333, 0, .51111],
                                714: [0, .69444, .09694, 0, .51111],
                                715: [0, .69444, 0, 0, .51111],
                                728: [0, .69444, .10806, 0, .51111],
                                729: [0, .66786, .11752, 0, .30667],
                                730: [0, .69444, 0, 0, .83129],
                                732: [0, .66786, .11585, 0, .51111],
                                733: [0, .69444, .1225, 0, .51111],
                                915: [0, .68333, .13305, 0, .62722],
                                916: [0, .68333, 0, 0, .81777],
                                920: [0, .68333, .09403, 0, .76666],
                                923: [0, .68333, 0, 0, .69222],
                                926: [0, .68333, .15294, 0, .66444],
                                928: [0, .68333, .16389, 0, .74333],
                                931: [0, .68333, .12028, 0, .71555],
                                933: [0, .68333, .11111, 0, .76666],
                                934: [0, .68333, .05986, 0, .71555],
                                936: [0, .68333, .11111, 0, .76666],
                                937: [0, .68333, .10257, 0, .71555],
                                8211: [0, .43056, .09208, 0, .51111],
                                8212: [0, .43056, .09208, 0, 1.02222],
                                8216: [0, .69444, .12417, 0, .30667],
                                8217: [0, .69444, .12417, 0, .30667],
                                8220: [0, .69444, .1685, 0, .51444],
                                8221: [0, .69444, .06961, 0, .51444],
                                8463: [0, .68889, 0, 0, .54028]
                            },
                            "Main-Regular": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, 0, 0, .27778],
                                34: [0, .69444, 0, 0, .5],
                                35: [.19444, .69444, 0, 0, .83334],
                                36: [.05556, .75, 0, 0, .5],
                                37: [.05556, .75, 0, 0, .83334],
                                38: [0, .69444, 0, 0, .77778],
                                39: [0, .69444, 0, 0, .27778],
                                40: [.25, .75, 0, 0, .38889],
                                41: [.25, .75, 0, 0, .38889],
                                42: [0, .75, 0, 0, .5],
                                43: [.08333, .58333, 0, 0, .77778],
                                44: [.19444, .10556, 0, 0, .27778],
                                45: [0, .43056, 0, 0, .33333],
                                46: [0, .10556, 0, 0, .27778],
                                47: [.25, .75, 0, 0, .5],
                                48: [0, .64444, 0, 0, .5],
                                49: [0, .64444, 0, 0, .5],
                                50: [0, .64444, 0, 0, .5],
                                51: [0, .64444, 0, 0, .5],
                                52: [0, .64444, 0, 0, .5],
                                53: [0, .64444, 0, 0, .5],
                                54: [0, .64444, 0, 0, .5],
                                55: [0, .64444, 0, 0, .5],
                                56: [0, .64444, 0, 0, .5],
                                57: [0, .64444, 0, 0, .5],
                                58: [0, .43056, 0, 0, .27778],
                                59: [.19444, .43056, 0, 0, .27778],
                                60: [.0391, .5391, 0, 0, .77778],
                                61: [-.13313, .36687, 0, 0, .77778],
                                62: [.0391, .5391, 0, 0, .77778],
                                63: [0, .69444, 0, 0, .47222],
                                64: [0, .69444, 0, 0, .77778],
                                65: [0, .68333, 0, 0, .75],
                                66: [0, .68333, 0, 0, .70834],
                                67: [0, .68333, 0, 0, .72222],
                                68: [0, .68333, 0, 0, .76389],
                                69: [0, .68333, 0, 0, .68056],
                                70: [0, .68333, 0, 0, .65278],
                                71: [0, .68333, 0, 0, .78472],
                                72: [0, .68333, 0, 0, .75],
                                73: [0, .68333, 0, 0, .36111],
                                74: [0, .68333, 0, 0, .51389],
                                75: [0, .68333, 0, 0, .77778],
                                76: [0, .68333, 0, 0, .625],
                                77: [0, .68333, 0, 0, .91667],
                                78: [0, .68333, 0, 0, .75],
                                79: [0, .68333, 0, 0, .77778],
                                80: [0, .68333, 0, 0, .68056],
                                81: [.19444, .68333, 0, 0, .77778],
                                82: [0, .68333, 0, 0, .73611],
                                83: [0, .68333, 0, 0, .55556],
                                84: [0, .68333, 0, 0, .72222],
                                85: [0, .68333, 0, 0, .75],
                                86: [0, .68333, .01389, 0, .75],
                                87: [0, .68333, .01389, 0, 1.02778],
                                88: [0, .68333, 0, 0, .75],
                                89: [0, .68333, .025, 0, .75],
                                90: [0, .68333, 0, 0, .61111],
                                91: [.25, .75, 0, 0, .27778],
                                92: [.25, .75, 0, 0, .5],
                                93: [.25, .75, 0, 0, .27778],
                                94: [0, .69444, 0, 0, .5],
                                95: [.31, .12056, .02778, 0, .5],
                                97: [0, .43056, 0, 0, .5],
                                98: [0, .69444, 0, 0, .55556],
                                99: [0, .43056, 0, 0, .44445],
                                100: [0, .69444, 0, 0, .55556],
                                101: [0, .43056, 0, 0, .44445],
                                102: [0, .69444, .07778, 0, .30556],
                                103: [.19444, .43056, .01389, 0, .5],
                                104: [0, .69444, 0, 0, .55556],
                                105: [0, .66786, 0, 0, .27778],
                                106: [.19444, .66786, 0, 0, .30556],
                                107: [0, .69444, 0, 0, .52778],
                                108: [0, .69444, 0, 0, .27778],
                                109: [0, .43056, 0, 0, .83334],
                                110: [0, .43056, 0, 0, .55556],
                                111: [0, .43056, 0, 0, .5],
                                112: [.19444, .43056, 0, 0, .55556],
                                113: [.19444, .43056, 0, 0, .52778],
                                114: [0, .43056, 0, 0, .39167],
                                115: [0, .43056, 0, 0, .39445],
                                116: [0, .61508, 0, 0, .38889],
                                117: [0, .43056, 0, 0, .55556],
                                118: [0, .43056, .01389, 0, .52778],
                                119: [0, .43056, .01389, 0, .72222],
                                120: [0, .43056, 0, 0, .52778],
                                121: [.19444, .43056, .01389, 0, .52778],
                                122: [0, .43056, 0, 0, .44445],
                                123: [.25, .75, 0, 0, .5],
                                124: [.25, .75, 0, 0, .27778],
                                125: [.25, .75, 0, 0, .5],
                                126: [.35, .31786, 0, 0, .5],
                                160: [0, 0, 0, 0, .25],
                                163: [0, .69444, 0, 0, .76909],
                                167: [.19444, .69444, 0, 0, .44445],
                                168: [0, .66786, 0, 0, .5],
                                172: [0, .43056, 0, 0, .66667],
                                176: [0, .69444, 0, 0, .75],
                                177: [.08333, .58333, 0, 0, .77778],
                                182: [.19444, .69444, 0, 0, .61111],
                                184: [.17014, 0, 0, 0, .44445],
                                198: [0, .68333, 0, 0, .90278],
                                215: [.08333, .58333, 0, 0, .77778],
                                216: [.04861, .73194, 0, 0, .77778],
                                223: [0, .69444, 0, 0, .5],
                                230: [0, .43056, 0, 0, .72222],
                                247: [.08333, .58333, 0, 0, .77778],
                                248: [.09722, .52778, 0, 0, .5],
                                305: [0, .43056, 0, 0, .27778],
                                338: [0, .68333, 0, 0, 1.01389],
                                339: [0, .43056, 0, 0, .77778],
                                567: [.19444, .43056, 0, 0, .30556],
                                710: [0, .69444, 0, 0, .5],
                                711: [0, .62847, 0, 0, .5],
                                713: [0, .56778, 0, 0, .5],
                                714: [0, .69444, 0, 0, .5],
                                715: [0, .69444, 0, 0, .5],
                                728: [0, .69444, 0, 0, .5],
                                729: [0, .66786, 0, 0, .27778],
                                730: [0, .69444, 0, 0, .75],
                                732: [0, .66786, 0, 0, .5],
                                733: [0, .69444, 0, 0, .5],
                                915: [0, .68333, 0, 0, .625],
                                916: [0, .68333, 0, 0, .83334],
                                920: [0, .68333, 0, 0, .77778],
                                923: [0, .68333, 0, 0, .69445],
                                926: [0, .68333, 0, 0, .66667],
                                928: [0, .68333, 0, 0, .75],
                                931: [0, .68333, 0, 0, .72222],
                                933: [0, .68333, 0, 0, .77778],
                                934: [0, .68333, 0, 0, .72222],
                                936: [0, .68333, 0, 0, .77778],
                                937: [0, .68333, 0, 0, .72222],
                                8211: [0, .43056, .02778, 0, .5],
                                8212: [0, .43056, .02778, 0, 1],
                                8216: [0, .69444, 0, 0, .27778],
                                8217: [0, .69444, 0, 0, .27778],
                                8220: [0, .69444, 0, 0, .5],
                                8221: [0, .69444, 0, 0, .5],
                                8224: [.19444, .69444, 0, 0, .44445],
                                8225: [.19444, .69444, 0, 0, .44445],
                                8230: [0, .12, 0, 0, 1.172],
                                8242: [0, .55556, 0, 0, .275],
                                8407: [0, .71444, .15382, 0, .5],
                                8463: [0, .68889, 0, 0, .54028],
                                8465: [0, .69444, 0, 0, .72222],
                                8467: [0, .69444, 0, .11111, .41667],
                                8472: [.19444, .43056, 0, .11111, .63646],
                                8476: [0, .69444, 0, 0, .72222],
                                8501: [0, .69444, 0, 0, .61111],
                                8592: [-.13313, .36687, 0, 0, 1],
                                8593: [.19444, .69444, 0, 0, .5],
                                8594: [-.13313, .36687, 0, 0, 1],
                                8595: [.19444, .69444, 0, 0, .5],
                                8596: [-.13313, .36687, 0, 0, 1],
                                8597: [.25, .75, 0, 0, .5],
                                8598: [.19444, .69444, 0, 0, 1],
                                8599: [.19444, .69444, 0, 0, 1],
                                8600: [.19444, .69444, 0, 0, 1],
                                8601: [.19444, .69444, 0, 0, 1],
                                8614: [.011, .511, 0, 0, 1],
                                8617: [.011, .511, 0, 0, 1.126],
                                8618: [.011, .511, 0, 0, 1.126],
                                8636: [-.13313, .36687, 0, 0, 1],
                                8637: [-.13313, .36687, 0, 0, 1],
                                8640: [-.13313, .36687, 0, 0, 1],
                                8641: [-.13313, .36687, 0, 0, 1],
                                8652: [.011, .671, 0, 0, 1],
                                8656: [-.13313, .36687, 0, 0, 1],
                                8657: [.19444, .69444, 0, 0, .61111],
                                8658: [-.13313, .36687, 0, 0, 1],
                                8659: [.19444, .69444, 0, 0, .61111],
                                8660: [-.13313, .36687, 0, 0, 1],
                                8661: [.25, .75, 0, 0, .61111],
                                8704: [0, .69444, 0, 0, .55556],
                                8706: [0, .69444, .05556, .08334, .5309],
                                8707: [0, .69444, 0, 0, .55556],
                                8709: [.05556, .75, 0, 0, .5],
                                8711: [0, .68333, 0, 0, .83334],
                                8712: [.0391, .5391, 0, 0, .66667],
                                8715: [.0391, .5391, 0, 0, .66667],
                                8722: [.08333, .58333, 0, 0, .77778],
                                8723: [.08333, .58333, 0, 0, .77778],
                                8725: [.25, .75, 0, 0, .5],
                                8726: [.25, .75, 0, 0, .5],
                                8727: [-.03472, .46528, 0, 0, .5],
                                8728: [-.05555, .44445, 0, 0, .5],
                                8729: [-.05555, .44445, 0, 0, .5],
                                8730: [.2, .8, 0, 0, .83334],
                                8733: [0, .43056, 0, 0, .77778],
                                8734: [0, .43056, 0, 0, 1],
                                8736: [0, .69224, 0, 0, .72222],
                                8739: [.25, .75, 0, 0, .27778],
                                8741: [.25, .75, 0, 0, .5],
                                8743: [0, .55556, 0, 0, .66667],
                                8744: [0, .55556, 0, 0, .66667],
                                8745: [0, .55556, 0, 0, .66667],
                                8746: [0, .55556, 0, 0, .66667],
                                8747: [.19444, .69444, .11111, 0, .41667],
                                8764: [-.13313, .36687, 0, 0, .77778],
                                8768: [.19444, .69444, 0, 0, .27778],
                                8771: [-.03625, .46375, 0, 0, .77778],
                                8773: [-.022, .589, 0, 0, 1],
                                8776: [-.01688, .48312, 0, 0, .77778],
                                8781: [-.03625, .46375, 0, 0, .77778],
                                8784: [-.133, .67, 0, 0, .778],
                                8801: [-.03625, .46375, 0, 0, .77778],
                                8804: [.13597, .63597, 0, 0, .77778],
                                8805: [.13597, .63597, 0, 0, .77778],
                                8810: [.0391, .5391, 0, 0, 1],
                                8811: [.0391, .5391, 0, 0, 1],
                                8826: [.0391, .5391, 0, 0, .77778],
                                8827: [.0391, .5391, 0, 0, .77778],
                                8834: [.0391, .5391, 0, 0, .77778],
                                8835: [.0391, .5391, 0, 0, .77778],
                                8838: [.13597, .63597, 0, 0, .77778],
                                8839: [.13597, .63597, 0, 0, .77778],
                                8846: [0, .55556, 0, 0, .66667],
                                8849: [.13597, .63597, 0, 0, .77778],
                                8850: [.13597, .63597, 0, 0, .77778],
                                8851: [0, .55556, 0, 0, .66667],
                                8852: [0, .55556, 0, 0, .66667],
                                8853: [.08333, .58333, 0, 0, .77778],
                                8854: [.08333, .58333, 0, 0, .77778],
                                8855: [.08333, .58333, 0, 0, .77778],
                                8856: [.08333, .58333, 0, 0, .77778],
                                8857: [.08333, .58333, 0, 0, .77778],
                                8866: [0, .69444, 0, 0, .61111],
                                8867: [0, .69444, 0, 0, .61111],
                                8868: [0, .69444, 0, 0, .77778],
                                8869: [0, .69444, 0, 0, .77778],
                                8872: [.249, .75, 0, 0, .867],
                                8900: [-.05555, .44445, 0, 0, .5],
                                8901: [-.05555, .44445, 0, 0, .27778],
                                8902: [-.03472, .46528, 0, 0, .5],
                                8904: [.005, .505, 0, 0, .9],
                                8942: [.03, .9, 0, 0, .278],
                                8943: [-.19, .31, 0, 0, 1.172],
                                8945: [-.1, .82, 0, 0, 1.282],
                                8968: [.25, .75, 0, 0, .44445],
                                8969: [.25, .75, 0, 0, .44445],
                                8970: [.25, .75, 0, 0, .44445],
                                8971: [.25, .75, 0, 0, .44445],
                                8994: [-.14236, .35764, 0, 0, 1],
                                8995: [-.14236, .35764, 0, 0, 1],
                                9136: [.244, .744, 0, 0, .412],
                                9137: [.244, .744, 0, 0, .412],
                                9651: [.19444, .69444, 0, 0, .88889],
                                9657: [-.03472, .46528, 0, 0, .5],
                                9661: [.19444, .69444, 0, 0, .88889],
                                9667: [-.03472, .46528, 0, 0, .5],
                                9711: [.19444, .69444, 0, 0, 1],
                                9824: [.12963, .69444, 0, 0, .77778],
                                9825: [.12963, .69444, 0, 0, .77778],
                                9826: [.12963, .69444, 0, 0, .77778],
                                9827: [.12963, .69444, 0, 0, .77778],
                                9837: [0, .75, 0, 0, .38889],
                                9838: [.19444, .69444, 0, 0, .38889],
                                9839: [.19444, .69444, 0, 0, .38889],
                                10216: [.25, .75, 0, 0, .38889],
                                10217: [.25, .75, 0, 0, .38889],
                                10222: [.244, .744, 0, 0, .412],
                                10223: [.244, .744, 0, 0, .412],
                                10229: [.011, .511, 0, 0, 1.609],
                                10230: [.011, .511, 0, 0, 1.638],
                                10231: [.011, .511, 0, 0, 1.859],
                                10232: [.024, .525, 0, 0, 1.609],
                                10233: [.024, .525, 0, 0, 1.638],
                                10234: [.024, .525, 0, 0, 1.858],
                                10236: [.011, .511, 0, 0, 1.638],
                                10815: [0, .68333, 0, 0, .75],
                                10927: [.13597, .63597, 0, 0, .77778],
                                10928: [.13597, .63597, 0, 0, .77778],
                                57376: [.19444, .69444, 0, 0, 0]
                            },
                            "Math-BoldItalic": {
                                32: [0, 0, 0, 0, .25],
                                48: [0, .44444, 0, 0, .575],
                                49: [0, .44444, 0, 0, .575],
                                50: [0, .44444, 0, 0, .575],
                                51: [.19444, .44444, 0, 0, .575],
                                52: [.19444, .44444, 0, 0, .575],
                                53: [.19444, .44444, 0, 0, .575],
                                54: [0, .64444, 0, 0, .575],
                                55: [.19444, .44444, 0, 0, .575],
                                56: [0, .64444, 0, 0, .575],
                                57: [.19444, .44444, 0, 0, .575],
                                65: [0, .68611, 0, 0, .86944],
                                66: [0, .68611, .04835, 0, .8664],
                                67: [0, .68611, .06979, 0, .81694],
                                68: [0, .68611, .03194, 0, .93812],
                                69: [0, .68611, .05451, 0, .81007],
                                70: [0, .68611, .15972, 0, .68889],
                                71: [0, .68611, 0, 0, .88673],
                                72: [0, .68611, .08229, 0, .98229],
                                73: [0, .68611, .07778, 0, .51111],
                                74: [0, .68611, .10069, 0, .63125],
                                75: [0, .68611, .06979, 0, .97118],
                                76: [0, .68611, 0, 0, .75555],
                                77: [0, .68611, .11424, 0, 1.14201],
                                78: [0, .68611, .11424, 0, .95034],
                                79: [0, .68611, .03194, 0, .83666],
                                80: [0, .68611, .15972, 0, .72309],
                                81: [.19444, .68611, 0, 0, .86861],
                                82: [0, .68611, .00421, 0, .87235],
                                83: [0, .68611, .05382, 0, .69271],
                                84: [0, .68611, .15972, 0, .63663],
                                85: [0, .68611, .11424, 0, .80027],
                                86: [0, .68611, .25555, 0, .67778],
                                87: [0, .68611, .15972, 0, 1.09305],
                                88: [0, .68611, .07778, 0, .94722],
                                89: [0, .68611, .25555, 0, .67458],
                                90: [0, .68611, .06979, 0, .77257],
                                97: [0, .44444, 0, 0, .63287],
                                98: [0, .69444, 0, 0, .52083],
                                99: [0, .44444, 0, 0, .51342],
                                100: [0, .69444, 0, 0, .60972],
                                101: [0, .44444, 0, 0, .55361],
                                102: [.19444, .69444, .11042, 0, .56806],
                                103: [.19444, .44444, .03704, 0, .5449],
                                104: [0, .69444, 0, 0, .66759],
                                105: [0, .69326, 0, 0, .4048],
                                106: [.19444, .69326, .0622, 0, .47083],
                                107: [0, .69444, .01852, 0, .6037],
                                108: [0, .69444, .0088, 0, .34815],
                                109: [0, .44444, 0, 0, 1.0324],
                                110: [0, .44444, 0, 0, .71296],
                                111: [0, .44444, 0, 0, .58472],
                                112: [.19444, .44444, 0, 0, .60092],
                                113: [.19444, .44444, .03704, 0, .54213],
                                114: [0, .44444, .03194, 0, .5287],
                                115: [0, .44444, 0, 0, .53125],
                                116: [0, .63492, 0, 0, .41528],
                                117: [0, .44444, 0, 0, .68102],
                                118: [0, .44444, .03704, 0, .56666],
                                119: [0, .44444, .02778, 0, .83148],
                                120: [0, .44444, 0, 0, .65903],
                                121: [.19444, .44444, .03704, 0, .59028],
                                122: [0, .44444, .04213, 0, .55509],
                                160: [0, 0, 0, 0, .25],
                                915: [0, .68611, .15972, 0, .65694],
                                916: [0, .68611, 0, 0, .95833],
                                920: [0, .68611, .03194, 0, .86722],
                                923: [0, .68611, 0, 0, .80555],
                                926: [0, .68611, .07458, 0, .84125],
                                928: [0, .68611, .08229, 0, .98229],
                                931: [0, .68611, .05451, 0, .88507],
                                933: [0, .68611, .15972, 0, .67083],
                                934: [0, .68611, 0, 0, .76666],
                                936: [0, .68611, .11653, 0, .71402],
                                937: [0, .68611, .04835, 0, .8789],
                                945: [0, .44444, 0, 0, .76064],
                                946: [.19444, .69444, .03403, 0, .65972],
                                947: [.19444, .44444, .06389, 0, .59003],
                                948: [0, .69444, .03819, 0, .52222],
                                949: [0, .44444, 0, 0, .52882],
                                950: [.19444, .69444, .06215, 0, .50833],
                                951: [.19444, .44444, .03704, 0, .6],
                                952: [0, .69444, .03194, 0, .5618],
                                953: [0, .44444, 0, 0, .41204],
                                954: [0, .44444, 0, 0, .66759],
                                955: [0, .69444, 0, 0, .67083],
                                956: [.19444, .44444, 0, 0, .70787],
                                957: [0, .44444, .06898, 0, .57685],
                                958: [.19444, .69444, .03021, 0, .50833],
                                959: [0, .44444, 0, 0, .58472],
                                960: [0, .44444, .03704, 0, .68241],
                                961: [.19444, .44444, 0, 0, .6118],
                                962: [.09722, .44444, .07917, 0, .42361],
                                963: [0, .44444, .03704, 0, .68588],
                                964: [0, .44444, .13472, 0, .52083],
                                965: [0, .44444, .03704, 0, .63055],
                                966: [.19444, .44444, 0, 0, .74722],
                                967: [.19444, .44444, 0, 0, .71805],
                                968: [.19444, .69444, .03704, 0, .75833],
                                969: [0, .44444, .03704, 0, .71782],
                                977: [0, .69444, 0, 0, .69155],
                                981: [.19444, .69444, 0, 0, .7125],
                                982: [0, .44444, .03194, 0, .975],
                                1009: [.19444, .44444, 0, 0, .6118],
                                1013: [0, .44444, 0, 0, .48333],
                                57649: [0, .44444, 0, 0, .39352],
                                57911: [.19444, .44444, 0, 0, .43889]
                            },
                            "Math-Italic": {
                                32: [0, 0, 0, 0, .25],
                                48: [0, .43056, 0, 0, .5],
                                49: [0, .43056, 0, 0, .5],
                                50: [0, .43056, 0, 0, .5],
                                51: [.19444, .43056, 0, 0, .5],
                                52: [.19444, .43056, 0, 0, .5],
                                53: [.19444, .43056, 0, 0, .5],
                                54: [0, .64444, 0, 0, .5],
                                55: [.19444, .43056, 0, 0, .5],
                                56: [0, .64444, 0, 0, .5],
                                57: [.19444, .43056, 0, 0, .5],
                                65: [0, .68333, 0, .13889, .75],
                                66: [0, .68333, .05017, .08334, .75851],
                                67: [0, .68333, .07153, .08334, .71472],
                                68: [0, .68333, .02778, .05556, .82792],
                                69: [0, .68333, .05764, .08334, .7382],
                                70: [0, .68333, .13889, .08334, .64306],
                                71: [0, .68333, 0, .08334, .78625],
                                72: [0, .68333, .08125, .05556, .83125],
                                73: [0, .68333, .07847, .11111, .43958],
                                74: [0, .68333, .09618, .16667, .55451],
                                75: [0, .68333, .07153, .05556, .84931],
                                76: [0, .68333, 0, .02778, .68056],
                                77: [0, .68333, .10903, .08334, .97014],
                                78: [0, .68333, .10903, .08334, .80347],
                                79: [0, .68333, .02778, .08334, .76278],
                                80: [0, .68333, .13889, .08334, .64201],
                                81: [.19444, .68333, 0, .08334, .79056],
                                82: [0, .68333, .00773, .08334, .75929],
                                83: [0, .68333, .05764, .08334, .6132],
                                84: [0, .68333, .13889, .08334, .58438],
                                85: [0, .68333, .10903, .02778, .68278],
                                86: [0, .68333, .22222, 0, .58333],
                                87: [0, .68333, .13889, 0, .94445],
                                88: [0, .68333, .07847, .08334, .82847],
                                89: [0, .68333, .22222, 0, .58056],
                                90: [0, .68333, .07153, .08334, .68264],
                                97: [0, .43056, 0, 0, .52859],
                                98: [0, .69444, 0, 0, .42917],
                                99: [0, .43056, 0, .05556, .43276],
                                100: [0, .69444, 0, .16667, .52049],
                                101: [0, .43056, 0, .05556, .46563],
                                102: [.19444, .69444, .10764, .16667, .48959],
                                103: [.19444, .43056, .03588, .02778, .47697],
                                104: [0, .69444, 0, 0, .57616],
                                105: [0, .65952, 0, 0, .34451],
                                106: [.19444, .65952, .05724, 0, .41181],
                                107: [0, .69444, .03148, 0, .5206],
                                108: [0, .69444, .01968, .08334, .29838],
                                109: [0, .43056, 0, 0, .87801],
                                110: [0, .43056, 0, 0, .60023],
                                111: [0, .43056, 0, .05556, .48472],
                                112: [.19444, .43056, 0, .08334, .50313],
                                113: [.19444, .43056, .03588, .08334, .44641],
                                114: [0, .43056, .02778, .05556, .45116],
                                115: [0, .43056, 0, .05556, .46875],
                                116: [0, .61508, 0, .08334, .36111],
                                117: [0, .43056, 0, .02778, .57246],
                                118: [0, .43056, .03588, .02778, .48472],
                                119: [0, .43056, .02691, .08334, .71592],
                                120: [0, .43056, 0, .02778, .57153],
                                121: [.19444, .43056, .03588, .05556, .49028],
                                122: [0, .43056, .04398, .05556, .46505],
                                160: [0, 0, 0, 0, .25],
                                915: [0, .68333, .13889, .08334, .61528],
                                916: [0, .68333, 0, .16667, .83334],
                                920: [0, .68333, .02778, .08334, .76278],
                                923: [0, .68333, 0, .16667, .69445],
                                926: [0, .68333, .07569, .08334, .74236],
                                928: [0, .68333, .08125, .05556, .83125],
                                931: [0, .68333, .05764, .08334, .77986],
                                933: [0, .68333, .13889, .05556, .58333],
                                934: [0, .68333, 0, .08334, .66667],
                                936: [0, .68333, .11, .05556, .61222],
                                937: [0, .68333, .05017, .08334, .7724],
                                945: [0, .43056, .0037, .02778, .6397],
                                946: [.19444, .69444, .05278, .08334, .56563],
                                947: [.19444, .43056, .05556, 0, .51773],
                                948: [0, .69444, .03785, .05556, .44444],
                                949: [0, .43056, 0, .08334, .46632],
                                950: [.19444, .69444, .07378, .08334, .4375],
                                951: [.19444, .43056, .03588, .05556, .49653],
                                952: [0, .69444, .02778, .08334, .46944],
                                953: [0, .43056, 0, .05556, .35394],
                                954: [0, .43056, 0, 0, .57616],
                                955: [0, .69444, 0, 0, .58334],
                                956: [.19444, .43056, 0, .02778, .60255],
                                957: [0, .43056, .06366, .02778, .49398],
                                958: [.19444, .69444, .04601, .11111, .4375],
                                959: [0, .43056, 0, .05556, .48472],
                                960: [0, .43056, .03588, 0, .57003],
                                961: [.19444, .43056, 0, .08334, .51702],
                                962: [.09722, .43056, .07986, .08334, .36285],
                                963: [0, .43056, .03588, 0, .57141],
                                964: [0, .43056, .1132, .02778, .43715],
                                965: [0, .43056, .03588, .02778, .54028],
                                966: [.19444, .43056, 0, .08334, .65417],
                                967: [.19444, .43056, 0, .05556, .62569],
                                968: [.19444, .69444, .03588, .11111, .65139],
                                969: [0, .43056, .03588, 0, .62245],
                                977: [0, .69444, 0, .08334, .59144],
                                981: [.19444, .69444, 0, .08334, .59583],
                                982: [0, .43056, .02778, 0, .82813],
                                1009: [.19444, .43056, 0, .08334, .51702],
                                1013: [0, .43056, 0, .05556, .4059],
                                57649: [0, .43056, 0, .02778, .32246],
                                57911: [.19444, .43056, 0, .08334, .38403]
                            },
                            "SansSerif-Bold": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, 0, 0, .36667],
                                34: [0, .69444, 0, 0, .55834],
                                35: [.19444, .69444, 0, 0, .91667],
                                36: [.05556, .75, 0, 0, .55],
                                37: [.05556, .75, 0, 0, 1.02912],
                                38: [0, .69444, 0, 0, .83056],
                                39: [0, .69444, 0, 0, .30556],
                                40: [.25, .75, 0, 0, .42778],
                                41: [.25, .75, 0, 0, .42778],
                                42: [0, .75, 0, 0, .55],
                                43: [.11667, .61667, 0, 0, .85556],
                                44: [.10556, .13056, 0, 0, .30556],
                                45: [0, .45833, 0, 0, .36667],
                                46: [0, .13056, 0, 0, .30556],
                                47: [.25, .75, 0, 0, .55],
                                48: [0, .69444, 0, 0, .55],
                                49: [0, .69444, 0, 0, .55],
                                50: [0, .69444, 0, 0, .55],
                                51: [0, .69444, 0, 0, .55],
                                52: [0, .69444, 0, 0, .55],
                                53: [0, .69444, 0, 0, .55],
                                54: [0, .69444, 0, 0, .55],
                                55: [0, .69444, 0, 0, .55],
                                56: [0, .69444, 0, 0, .55],
                                57: [0, .69444, 0, 0, .55],
                                58: [0, .45833, 0, 0, .30556],
                                59: [.10556, .45833, 0, 0, .30556],
                                61: [-.09375, .40625, 0, 0, .85556],
                                63: [0, .69444, 0, 0, .51945],
                                64: [0, .69444, 0, 0, .73334],
                                65: [0, .69444, 0, 0, .73334],
                                66: [0, .69444, 0, 0, .73334],
                                67: [0, .69444, 0, 0, .70278],
                                68: [0, .69444, 0, 0, .79445],
                                69: [0, .69444, 0, 0, .64167],
                                70: [0, .69444, 0, 0, .61111],
                                71: [0, .69444, 0, 0, .73334],
                                72: [0, .69444, 0, 0, .79445],
                                73: [0, .69444, 0, 0, .33056],
                                74: [0, .69444, 0, 0, .51945],
                                75: [0, .69444, 0, 0, .76389],
                                76: [0, .69444, 0, 0, .58056],
                                77: [0, .69444, 0, 0, .97778],
                                78: [0, .69444, 0, 0, .79445],
                                79: [0, .69444, 0, 0, .79445],
                                80: [0, .69444, 0, 0, .70278],
                                81: [.10556, .69444, 0, 0, .79445],
                                82: [0, .69444, 0, 0, .70278],
                                83: [0, .69444, 0, 0, .61111],
                                84: [0, .69444, 0, 0, .73334],
                                85: [0, .69444, 0, 0, .76389],
                                86: [0, .69444, .01528, 0, .73334],
                                87: [0, .69444, .01528, 0, 1.03889],
                                88: [0, .69444, 0, 0, .73334],
                                89: [0, .69444, .0275, 0, .73334],
                                90: [0, .69444, 0, 0, .67223],
                                91: [.25, .75, 0, 0, .34306],
                                93: [.25, .75, 0, 0, .34306],
                                94: [0, .69444, 0, 0, .55],
                                95: [.35, .10833, .03056, 0, .55],
                                97: [0, .45833, 0, 0, .525],
                                98: [0, .69444, 0, 0, .56111],
                                99: [0, .45833, 0, 0, .48889],
                                100: [0, .69444, 0, 0, .56111],
                                101: [0, .45833, 0, 0, .51111],
                                102: [0, .69444, .07639, 0, .33611],
                                103: [.19444, .45833, .01528, 0, .55],
                                104: [0, .69444, 0, 0, .56111],
                                105: [0, .69444, 0, 0, .25556],
                                106: [.19444, .69444, 0, 0, .28611],
                                107: [0, .69444, 0, 0, .53056],
                                108: [0, .69444, 0, 0, .25556],
                                109: [0, .45833, 0, 0, .86667],
                                110: [0, .45833, 0, 0, .56111],
                                111: [0, .45833, 0, 0, .55],
                                112: [.19444, .45833, 0, 0, .56111],
                                113: [.19444, .45833, 0, 0, .56111],
                                114: [0, .45833, .01528, 0, .37222],
                                115: [0, .45833, 0, 0, .42167],
                                116: [0, .58929, 0, 0, .40417],
                                117: [0, .45833, 0, 0, .56111],
                                118: [0, .45833, .01528, 0, .5],
                                119: [0, .45833, .01528, 0, .74445],
                                120: [0, .45833, 0, 0, .5],
                                121: [.19444, .45833, .01528, 0, .5],
                                122: [0, .45833, 0, 0, .47639],
                                126: [.35, .34444, 0, 0, .55],
                                160: [0, 0, 0, 0, .25],
                                168: [0, .69444, 0, 0, .55],
                                176: [0, .69444, 0, 0, .73334],
                                180: [0, .69444, 0, 0, .55],
                                184: [.17014, 0, 0, 0, .48889],
                                305: [0, .45833, 0, 0, .25556],
                                567: [.19444, .45833, 0, 0, .28611],
                                710: [0, .69444, 0, 0, .55],
                                711: [0, .63542, 0, 0, .55],
                                713: [0, .63778, 0, 0, .55],
                                728: [0, .69444, 0, 0, .55],
                                729: [0, .69444, 0, 0, .30556],
                                730: [0, .69444, 0, 0, .73334],
                                732: [0, .69444, 0, 0, .55],
                                733: [0, .69444, 0, 0, .55],
                                915: [0, .69444, 0, 0, .58056],
                                916: [0, .69444, 0, 0, .91667],
                                920: [0, .69444, 0, 0, .85556],
                                923: [0, .69444, 0, 0, .67223],
                                926: [0, .69444, 0, 0, .73334],
                                928: [0, .69444, 0, 0, .79445],
                                931: [0, .69444, 0, 0, .79445],
                                933: [0, .69444, 0, 0, .85556],
                                934: [0, .69444, 0, 0, .79445],
                                936: [0, .69444, 0, 0, .85556],
                                937: [0, .69444, 0, 0, .79445],
                                8211: [0, .45833, .03056, 0, .55],
                                8212: [0, .45833, .03056, 0, 1.10001],
                                8216: [0, .69444, 0, 0, .30556],
                                8217: [0, .69444, 0, 0, .30556],
                                8220: [0, .69444, 0, 0, .55834],
                                8221: [0, .69444, 0, 0, .55834]
                            },
                            "SansSerif-Italic": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, .05733, 0, .31945],
                                34: [0, .69444, .00316, 0, .5],
                                35: [.19444, .69444, .05087, 0, .83334],
                                36: [.05556, .75, .11156, 0, .5],
                                37: [.05556, .75, .03126, 0, .83334],
                                38: [0, .69444, .03058, 0, .75834],
                                39: [0, .69444, .07816, 0, .27778],
                                40: [.25, .75, .13164, 0, .38889],
                                41: [.25, .75, .02536, 0, .38889],
                                42: [0, .75, .11775, 0, .5],
                                43: [.08333, .58333, .02536, 0, .77778],
                                44: [.125, .08333, 0, 0, .27778],
                                45: [0, .44444, .01946, 0, .33333],
                                46: [0, .08333, 0, 0, .27778],
                                47: [.25, .75, .13164, 0, .5],
                                48: [0, .65556, .11156, 0, .5],
                                49: [0, .65556, .11156, 0, .5],
                                50: [0, .65556, .11156, 0, .5],
                                51: [0, .65556, .11156, 0, .5],
                                52: [0, .65556, .11156, 0, .5],
                                53: [0, .65556, .11156, 0, .5],
                                54: [0, .65556, .11156, 0, .5],
                                55: [0, .65556, .11156, 0, .5],
                                56: [0, .65556, .11156, 0, .5],
                                57: [0, .65556, .11156, 0, .5],
                                58: [0, .44444, .02502, 0, .27778],
                                59: [.125, .44444, .02502, 0, .27778],
                                61: [-.13, .37, .05087, 0, .77778],
                                63: [0, .69444, .11809, 0, .47222],
                                64: [0, .69444, .07555, 0, .66667],
                                65: [0, .69444, 0, 0, .66667],
                                66: [0, .69444, .08293, 0, .66667],
                                67: [0, .69444, .11983, 0, .63889],
                                68: [0, .69444, .07555, 0, .72223],
                                69: [0, .69444, .11983, 0, .59722],
                                70: [0, .69444, .13372, 0, .56945],
                                71: [0, .69444, .11983, 0, .66667],
                                72: [0, .69444, .08094, 0, .70834],
                                73: [0, .69444, .13372, 0, .27778],
                                74: [0, .69444, .08094, 0, .47222],
                                75: [0, .69444, .11983, 0, .69445],
                                76: [0, .69444, 0, 0, .54167],
                                77: [0, .69444, .08094, 0, .875],
                                78: [0, .69444, .08094, 0, .70834],
                                79: [0, .69444, .07555, 0, .73611],
                                80: [0, .69444, .08293, 0, .63889],
                                81: [.125, .69444, .07555, 0, .73611],
                                82: [0, .69444, .08293, 0, .64584],
                                83: [0, .69444, .09205, 0, .55556],
                                84: [0, .69444, .13372, 0, .68056],
                                85: [0, .69444, .08094, 0, .6875],
                                86: [0, .69444, .1615, 0, .66667],
                                87: [0, .69444, .1615, 0, .94445],
                                88: [0, .69444, .13372, 0, .66667],
                                89: [0, .69444, .17261, 0, .66667],
                                90: [0, .69444, .11983, 0, .61111],
                                91: [.25, .75, .15942, 0, .28889],
                                93: [.25, .75, .08719, 0, .28889],
                                94: [0, .69444, .0799, 0, .5],
                                95: [.35, .09444, .08616, 0, .5],
                                97: [0, .44444, .00981, 0, .48056],
                                98: [0, .69444, .03057, 0, .51667],
                                99: [0, .44444, .08336, 0, .44445],
                                100: [0, .69444, .09483, 0, .51667],
                                101: [0, .44444, .06778, 0, .44445],
                                102: [0, .69444, .21705, 0, .30556],
                                103: [.19444, .44444, .10836, 0, .5],
                                104: [0, .69444, .01778, 0, .51667],
                                105: [0, .67937, .09718, 0, .23889],
                                106: [.19444, .67937, .09162, 0, .26667],
                                107: [0, .69444, .08336, 0, .48889],
                                108: [0, .69444, .09483, 0, .23889],
                                109: [0, .44444, .01778, 0, .79445],
                                110: [0, .44444, .01778, 0, .51667],
                                111: [0, .44444, .06613, 0, .5],
                                112: [.19444, .44444, .0389, 0, .51667],
                                113: [.19444, .44444, .04169, 0, .51667],
                                114: [0, .44444, .10836, 0, .34167],
                                115: [0, .44444, .0778, 0, .38333],
                                116: [0, .57143, .07225, 0, .36111],
                                117: [0, .44444, .04169, 0, .51667],
                                118: [0, .44444, .10836, 0, .46111],
                                119: [0, .44444, .10836, 0, .68334],
                                120: [0, .44444, .09169, 0, .46111],
                                121: [.19444, .44444, .10836, 0, .46111],
                                122: [0, .44444, .08752, 0, .43472],
                                126: [.35, .32659, .08826, 0, .5],
                                160: [0, 0, 0, 0, .25],
                                168: [0, .67937, .06385, 0, .5],
                                176: [0, .69444, 0, 0, .73752],
                                184: [.17014, 0, 0, 0, .44445],
                                305: [0, .44444, .04169, 0, .23889],
                                567: [.19444, .44444, .04169, 0, .26667],
                                710: [0, .69444, .0799, 0, .5],
                                711: [0, .63194, .08432, 0, .5],
                                713: [0, .60889, .08776, 0, .5],
                                714: [0, .69444, .09205, 0, .5],
                                715: [0, .69444, 0, 0, .5],
                                728: [0, .69444, .09483, 0, .5],
                                729: [0, .67937, .07774, 0, .27778],
                                730: [0, .69444, 0, 0, .73752],
                                732: [0, .67659, .08826, 0, .5],
                                733: [0, .69444, .09205, 0, .5],
                                915: [0, .69444, .13372, 0, .54167],
                                916: [0, .69444, 0, 0, .83334],
                                920: [0, .69444, .07555, 0, .77778],
                                923: [0, .69444, 0, 0, .61111],
                                926: [0, .69444, .12816, 0, .66667],
                                928: [0, .69444, .08094, 0, .70834],
                                931: [0, .69444, .11983, 0, .72222],
                                933: [0, .69444, .09031, 0, .77778],
                                934: [0, .69444, .04603, 0, .72222],
                                936: [0, .69444, .09031, 0, .77778],
                                937: [0, .69444, .08293, 0, .72222],
                                8211: [0, .44444, .08616, 0, .5],
                                8212: [0, .44444, .08616, 0, 1],
                                8216: [0, .69444, .07816, 0, .27778],
                                8217: [0, .69444, .07816, 0, .27778],
                                8220: [0, .69444, .14205, 0, .5],
                                8221: [0, .69444, .00316, 0, .5]
                            },
                            "SansSerif-Regular": {
                                32: [0, 0, 0, 0, .25],
                                33: [0, .69444, 0, 0, .31945],
                                34: [0, .69444, 0, 0, .5],
                                35: [.19444, .69444, 0, 0, .83334],
                                36: [.05556, .75, 0, 0, .5],
                                37: [.05556, .75, 0, 0, .83334],
                                38: [0, .69444, 0, 0, .75834],
                                39: [0, .69444, 0, 0, .27778],
                                40: [.25, .75, 0, 0, .38889],
                                41: [.25, .75, 0, 0, .38889],
                                42: [0, .75, 0, 0, .5],
                                43: [.08333, .58333, 0, 0, .77778],
                                44: [.125, .08333, 0, 0, .27778],
                                45: [0, .44444, 0, 0, .33333],
                                46: [0, .08333, 0, 0, .27778],
                                47: [.25, .75, 0, 0, .5],
                                48: [0, .65556, 0, 0, .5],
                                49: [0, .65556, 0, 0, .5],
                                50: [0, .65556, 0, 0, .5],
                                51: [0, .65556, 0, 0, .5],
                                52: [0, .65556, 0, 0, .5],
                                53: [0, .65556, 0, 0, .5],
                                54: [0, .65556, 0, 0, .5],
                                55: [0, .65556, 0, 0, .5],
                                56: [0, .65556, 0, 0, .5],
                                57: [0, .65556, 0, 0, .5],
                                58: [0, .44444, 0, 0, .27778],
                                59: [.125, .44444, 0, 0, .27778],
                                61: [-.13, .37, 0, 0, .77778],
                                63: [0, .69444, 0, 0, .47222],
                                64: [0, .69444, 0, 0, .66667],
                                65: [0, .69444, 0, 0, .66667],
                                66: [0, .69444, 0, 0, .66667],
                                67: [0, .69444, 0, 0, .63889],
                                68: [0, .69444, 0, 0, .72223],
                                69: [0, .69444, 0, 0, .59722],
                                70: [0, .69444, 0, 0, .56945],
                                71: [0, .69444, 0, 0, .66667],
                                72: [0, .69444, 0, 0, .70834],
                                73: [0, .69444, 0, 0, .27778],
                                74: [0, .69444, 0, 0, .47222],
                                75: [0, .69444, 0, 0, .69445],
                                76: [0, .69444, 0, 0, .54167],
                                77: [0, .69444, 0, 0, .875],
                                78: [0, .69444, 0, 0, .70834],
                                79: [0, .69444, 0, 0, .73611],
                                80: [0, .69444, 0, 0, .63889],
                                81: [.125, .69444, 0, 0, .73611],
                                82: [0, .69444, 0, 0, .64584],
                                83: [0, .69444, 0, 0, .55556],
                                84: [0, .69444, 0, 0, .68056],
                                85: [0, .69444, 0, 0, .6875],
                                86: [0, .69444, .01389, 0, .66667],
                                87: [0, .69444, .01389, 0, .94445],
                                88: [0, .69444, 0, 0, .66667],
                                89: [0, .69444, .025, 0, .66667],
                                90: [0, .69444, 0, 0, .61111],
                                91: [.25, .75, 0, 0, .28889],
                                93: [.25, .75, 0, 0, .28889],
                                94: [0, .69444, 0, 0, .5],
                                95: [.35, .09444, .02778, 0, .5],
                                97: [0, .44444, 0, 0, .48056],
                                98: [0, .69444, 0, 0, .51667],
                                99: [0, .44444, 0, 0, .44445],
                                100: [0, .69444, 0, 0, .51667],
                                101: [0, .44444, 0, 0, .44445],
                                102: [0, .69444, .06944, 0, .30556],
                                103: [.19444, .44444, .01389, 0, .5],
                                104: [0, .69444, 0, 0, .51667],
                                105: [0, .67937, 0, 0, .23889],
                                106: [.19444, .67937, 0, 0, .26667],
                                107: [0, .69444, 0, 0, .48889],
                                108: [0, .69444, 0, 0, .23889],
                                109: [0, .44444, 0, 0, .79445],
                                110: [0, .44444, 0, 0, .51667],
                                111: [0, .44444, 0, 0, .5],
                                112: [.19444, .44444, 0, 0, .51667],
                                113: [.19444, .44444, 0, 0, .51667],
                                114: [0, .44444, .01389, 0, .34167],
                                115: [0, .44444, 0, 0, .38333],
                                116: [0, .57143, 0, 0, .36111],
                                117: [0, .44444, 0, 0, .51667],
                                118: [0, .44444, .01389, 0, .46111],
                                119: [0, .44444, .01389, 0, .68334],
                                120: [0, .44444, 0, 0, .46111],
                                121: [.19444, .44444, .01389, 0, .46111],
                                122: [0, .44444, 0, 0, .43472],
                                126: [.35, .32659, 0, 0, .5],
                                160: [0, 0, 0, 0, .25],
                                168: [0, .67937, 0, 0, .5],
                                176: [0, .69444, 0, 0, .66667],
                                184: [.17014, 0, 0, 0, .44445],
                                305: [0, .44444, 0, 0, .23889],
                                567: [.19444, .44444, 0, 0, .26667],
                                710: [0, .69444, 0, 0, .5],
                                711: [0, .63194, 0, 0, .5],
                                713: [0, .60889, 0, 0, .5],
                                714: [0, .69444, 0, 0, .5],
                                715: [0, .69444, 0, 0, .5],
                                728: [0, .69444, 0, 0, .5],
                                729: [0, .67937, 0, 0, .27778],
                                730: [0, .69444, 0, 0, .66667],
                                732: [0, .67659, 0, 0, .5],
                                733: [0, .69444, 0, 0, .5],
                                915: [0, .69444, 0, 0, .54167],
                                916: [0, .69444, 0, 0, .83334],
                                920: [0, .69444, 0, 0, .77778],
                                923: [0, .69444, 0, 0, .61111],
                                926: [0, .69444, 0, 0, .66667],
                                928: [0, .69444, 0, 0, .70834],
                                931: [0, .69444, 0, 0, .72222],
                                933: [0, .69444, 0, 0, .77778],
                                934: [0, .69444, 0, 0, .72222],
                                936: [0, .69444, 0, 0, .77778],
                                937: [0, .69444, 0, 0, .72222],
                                8211: [0, .44444, .02778, 0, .5],
                                8212: [0, .44444, .02778, 0, 1],
                                8216: [0, .69444, 0, 0, .27778],
                                8217: [0, .69444, 0, 0, .27778],
                                8220: [0, .69444, 0, 0, .5],
                                8221: [0, .69444, 0, 0, .5]
                            },
                            "Script-Regular": {
                                32: [0, 0, 0, 0, .25],
                                65: [0, .7, .22925, 0, .80253],
                                66: [0, .7, .04087, 0, .90757],
                                67: [0, .7, .1689, 0, .66619],
                                68: [0, .7, .09371, 0, .77443],
                                69: [0, .7, .18583, 0, .56162],
                                70: [0, .7, .13634, 0, .89544],
                                71: [0, .7, .17322, 0, .60961],
                                72: [0, .7, .29694, 0, .96919],
                                73: [0, .7, .19189, 0, .80907],
                                74: [.27778, .7, .19189, 0, 1.05159],
                                75: [0, .7, .31259, 0, .91364],
                                76: [0, .7, .19189, 0, .87373],
                                77: [0, .7, .15981, 0, 1.08031],
                                78: [0, .7, .3525, 0, .9015],
                                79: [0, .7, .08078, 0, .73787],
                                80: [0, .7, .08078, 0, 1.01262],
                                81: [0, .7, .03305, 0, .88282],
                                82: [0, .7, .06259, 0, .85],
                                83: [0, .7, .19189, 0, .86767],
                                84: [0, .7, .29087, 0, .74697],
                                85: [0, .7, .25815, 0, .79996],
                                86: [0, .7, .27523, 0, .62204],
                                87: [0, .7, .27523, 0, .80532],
                                88: [0, .7, .26006, 0, .94445],
                                89: [0, .7, .2939, 0, .70961],
                                90: [0, .7, .24037, 0, .8212],
                                160: [0, 0, 0, 0, .25]
                            },
                            "Size1-Regular": {
                                32: [0, 0, 0, 0, .25],
                                40: [.35001, .85, 0, 0, .45834],
                                41: [.35001, .85, 0, 0, .45834],
                                47: [.35001, .85, 0, 0, .57778],
                                91: [.35001, .85, 0, 0, .41667],
                                92: [.35001, .85, 0, 0, .57778],
                                93: [.35001, .85, 0, 0, .41667],
                                123: [.35001, .85, 0, 0, .58334],
                                125: [.35001, .85, 0, 0, .58334],
                                160: [0, 0, 0, 0, .25],
                                710: [0, .72222, 0, 0, .55556],
                                732: [0, .72222, 0, 0, .55556],
                                770: [0, .72222, 0, 0, .55556],
                                771: [0, .72222, 0, 0, .55556],
                                8214: [-99e-5, .601, 0, 0, .77778],
                                8593: [1e-5, .6, 0, 0, .66667],
                                8595: [1e-5, .6, 0, 0, .66667],
                                8657: [1e-5, .6, 0, 0, .77778],
                                8659: [1e-5, .6, 0, 0, .77778],
                                8719: [.25001, .75, 0, 0, .94445],
                                8720: [.25001, .75, 0, 0, .94445],
                                8721: [.25001, .75, 0, 0, 1.05556],
                                8730: [.35001, .85, 0, 0, 1],
                                8739: [-.00599, .606, 0, 0, .33333],
                                8741: [-.00599, .606, 0, 0, .55556],
                                8747: [.30612, .805, .19445, 0, .47222],
                                8748: [.306, .805, .19445, 0, .47222],
                                8749: [.306, .805, .19445, 0, .47222],
                                8750: [.30612, .805, .19445, 0, .47222],
                                8896: [.25001, .75, 0, 0, .83334],
                                8897: [.25001, .75, 0, 0, .83334],
                                8898: [.25001, .75, 0, 0, .83334],
                                8899: [.25001, .75, 0, 0, .83334],
                                8968: [.35001, .85, 0, 0, .47222],
                                8969: [.35001, .85, 0, 0, .47222],
                                8970: [.35001, .85, 0, 0, .47222],
                                8971: [.35001, .85, 0, 0, .47222],
                                9168: [-99e-5, .601, 0, 0, .66667],
                                10216: [.35001, .85, 0, 0, .47222],
                                10217: [.35001, .85, 0, 0, .47222],
                                10752: [.25001, .75, 0, 0, 1.11111],
                                10753: [.25001, .75, 0, 0, 1.11111],
                                10754: [.25001, .75, 0, 0, 1.11111],
                                10756: [.25001, .75, 0, 0, .83334],
                                10758: [.25001, .75, 0, 0, .83334]
                            },
                            "Size2-Regular": {
                                32: [0, 0, 0, 0, .25],
                                40: [.65002, 1.15, 0, 0, .59722],
                                41: [.65002, 1.15, 0, 0, .59722],
                                47: [.65002, 1.15, 0, 0, .81111],
                                91: [.65002, 1.15, 0, 0, .47222],
                                92: [.65002, 1.15, 0, 0, .81111],
                                93: [.65002, 1.15, 0, 0, .47222],
                                123: [.65002, 1.15, 0, 0, .66667],
                                125: [.65002, 1.15, 0, 0, .66667],
                                160: [0, 0, 0, 0, .25],
                                710: [0, .75, 0, 0, 1],
                                732: [0, .75, 0, 0, 1],
                                770: [0, .75, 0, 0, 1],
                                771: [0, .75, 0, 0, 1],
                                8719: [.55001, 1.05, 0, 0, 1.27778],
                                8720: [.55001, 1.05, 0, 0, 1.27778],
                                8721: [.55001, 1.05, 0, 0, 1.44445],
                                8730: [.65002, 1.15, 0, 0, 1],
                                8747: [.86225, 1.36, .44445, 0, .55556],
                                8748: [.862, 1.36, .44445, 0, .55556],
                                8749: [.862, 1.36, .44445, 0, .55556],
                                8750: [.86225, 1.36, .44445, 0, .55556],
                                8896: [.55001, 1.05, 0, 0, 1.11111],
                                8897: [.55001, 1.05, 0, 0, 1.11111],
                                8898: [.55001, 1.05, 0, 0, 1.11111],
                                8899: [.55001, 1.05, 0, 0, 1.11111],
                                8968: [.65002, 1.15, 0, 0, .52778],
                                8969: [.65002, 1.15, 0, 0, .52778],
                                8970: [.65002, 1.15, 0, 0, .52778],
                                8971: [.65002, 1.15, 0, 0, .52778],
                                10216: [.65002, 1.15, 0, 0, .61111],
                                10217: [.65002, 1.15, 0, 0, .61111],
                                10752: [.55001, 1.05, 0, 0, 1.51112],
                                10753: [.55001, 1.05, 0, 0, 1.51112],
                                10754: [.55001, 1.05, 0, 0, 1.51112],
                                10756: [.55001, 1.05, 0, 0, 1.11111],
                                10758: [.55001, 1.05, 0, 0, 1.11111]
                            },
                            "Size3-Regular": {
                                32: [0, 0, 0, 0, .25],
                                40: [.95003, 1.45, 0, 0, .73611],
                                41: [.95003, 1.45, 0, 0, .73611],
                                47: [.95003, 1.45, 0, 0, 1.04445],
                                91: [.95003, 1.45, 0, 0, .52778],
                                92: [.95003, 1.45, 0, 0, 1.04445],
                                93: [.95003, 1.45, 0, 0, .52778],
                                123: [.95003, 1.45, 0, 0, .75],
                                125: [.95003, 1.45, 0, 0, .75],
                                160: [0, 0, 0, 0, .25],
                                710: [0, .75, 0, 0, 1.44445],
                                732: [0, .75, 0, 0, 1.44445],
                                770: [0, .75, 0, 0, 1.44445],
                                771: [0, .75, 0, 0, 1.44445],
                                8730: [.95003, 1.45, 0, 0, 1],
                                8968: [.95003, 1.45, 0, 0, .58334],
                                8969: [.95003, 1.45, 0, 0, .58334],
                                8970: [.95003, 1.45, 0, 0, .58334],
                                8971: [.95003, 1.45, 0, 0, .58334],
                                10216: [.95003, 1.45, 0, 0, .75],
                                10217: [.95003, 1.45, 0, 0, .75]
                            },
                            "Size4-Regular": {
                                32: [0, 0, 0, 0, .25],
                                40: [1.25003, 1.75, 0, 0, .79167],
                                41: [1.25003, 1.75, 0, 0, .79167],
                                47: [1.25003, 1.75, 0, 0, 1.27778],
                                91: [1.25003, 1.75, 0, 0, .58334],
                                92: [1.25003, 1.75, 0, 0, 1.27778],
                                93: [1.25003, 1.75, 0, 0, .58334],
                                123: [1.25003, 1.75, 0, 0, .80556],
                                125: [1.25003, 1.75, 0, 0, .80556],
                                160: [0, 0, 0, 0, .25],
                                710: [0, .825, 0, 0, 1.8889],
                                732: [0, .825, 0, 0, 1.8889],
                                770: [0, .825, 0, 0, 1.8889],
                                771: [0, .825, 0, 0, 1.8889],
                                8730: [1.25003, 1.75, 0, 0, 1],
                                8968: [1.25003, 1.75, 0, 0, .63889],
                                8969: [1.25003, 1.75, 0, 0, .63889],
                                8970: [1.25003, 1.75, 0, 0, .63889],
                                8971: [1.25003, 1.75, 0, 0, .63889],
                                9115: [.64502, 1.155, 0, 0, .875],
                                9116: [1e-5, .6, 0, 0, .875],
                                9117: [.64502, 1.155, 0, 0, .875],
                                9118: [.64502, 1.155, 0, 0, .875],
                                9119: [1e-5, .6, 0, 0, .875],
                                9120: [.64502, 1.155, 0, 0, .875],
                                9121: [.64502, 1.155, 0, 0, .66667],
                                9122: [-99e-5, .601, 0, 0, .66667],
                                9123: [.64502, 1.155, 0, 0, .66667],
                                9124: [.64502, 1.155, 0, 0, .66667],
                                9125: [-99e-5, .601, 0, 0, .66667],
                                9126: [.64502, 1.155, 0, 0, .66667],
                                9127: [1e-5, .9, 0, 0, .88889],
                                9128: [.65002, 1.15, 0, 0, .88889],
                                9129: [.90001, 0, 0, 0, .88889],
                                9130: [0, .3, 0, 0, .88889],
                                9131: [1e-5, .9, 0, 0, .88889],
                                9132: [.65002, 1.15, 0, 0, .88889],
                                9133: [.90001, 0, 0, 0, .88889],
                                9143: [.88502, .915, 0, 0, 1.05556],
                                10216: [1.25003, 1.75, 0, 0, .80556],
                                10217: [1.25003, 1.75, 0, 0, .80556],
                                57344: [-.00499, .605, 0, 0, 1.05556],
                                57345: [-.00499, .605, 0, 0, 1.05556],
                                57680: [0, .12, 0, 0, .45],
                                57681: [0, .12, 0, 0, .45],
                                57682: [0, .12, 0, 0, .45],
                                57683: [0, .12, 0, 0, .45]
                            },
                            "Typewriter-Regular": {
                                32: [0, 0, 0, 0, .525],
                                33: [0, .61111, 0, 0, .525],
                                34: [0, .61111, 0, 0, .525],
                                35: [0, .61111, 0, 0, .525],
                                36: [.08333, .69444, 0, 0, .525],
                                37: [.08333, .69444, 0, 0, .525],
                                38: [0, .61111, 0, 0, .525],
                                39: [0, .61111, 0, 0, .525],
                                40: [.08333, .69444, 0, 0, .525],
                                41: [.08333, .69444, 0, 0, .525],
                                42: [0, .52083, 0, 0, .525],
                                43: [-.08056, .53055, 0, 0, .525],
                                44: [.13889, .125, 0, 0, .525],
                                45: [-.08056, .53055, 0, 0, .525],
                                46: [0, .125, 0, 0, .525],
                                47: [.08333, .69444, 0, 0, .525],
                                48: [0, .61111, 0, 0, .525],
                                49: [0, .61111, 0, 0, .525],
                                50: [0, .61111, 0, 0, .525],
                                51: [0, .61111, 0, 0, .525],
                                52: [0, .61111, 0, 0, .525],
                                53: [0, .61111, 0, 0, .525],
                                54: [0, .61111, 0, 0, .525],
                                55: [0, .61111, 0, 0, .525],
                                56: [0, .61111, 0, 0, .525],
                                57: [0, .61111, 0, 0, .525],
                                58: [0, .43056, 0, 0, .525],
                                59: [.13889, .43056, 0, 0, .525],
                                60: [-.05556, .55556, 0, 0, .525],
                                61: [-.19549, .41562, 0, 0, .525],
                                62: [-.05556, .55556, 0, 0, .525],
                                63: [0, .61111, 0, 0, .525],
                                64: [0, .61111, 0, 0, .525],
                                65: [0, .61111, 0, 0, .525],
                                66: [0, .61111, 0, 0, .525],
                                67: [0, .61111, 0, 0, .525],
                                68: [0, .61111, 0, 0, .525],
                                69: [0, .61111, 0, 0, .525],
                                70: [0, .61111, 0, 0, .525],
                                71: [0, .61111, 0, 0, .525],
                                72: [0, .61111, 0, 0, .525],
                                73: [0, .61111, 0, 0, .525],
                                74: [0, .61111, 0, 0, .525],
                                75: [0, .61111, 0, 0, .525],
                                76: [0, .61111, 0, 0, .525],
                                77: [0, .61111, 0, 0, .525],
                                78: [0, .61111, 0, 0, .525],
                                79: [0, .61111, 0, 0, .525],
                                80: [0, .61111, 0, 0, .525],
                                81: [.13889, .61111, 0, 0, .525],
                                82: [0, .61111, 0, 0, .525],
                                83: [0, .61111, 0, 0, .525],
                                84: [0, .61111, 0, 0, .525],
                                85: [0, .61111, 0, 0, .525],
                                86: [0, .61111, 0, 0, .525],
                                87: [0, .61111, 0, 0, .525],
                                88: [0, .61111, 0, 0, .525],
                                89: [0, .61111, 0, 0, .525],
                                90: [0, .61111, 0, 0, .525],
                                91: [.08333, .69444, 0, 0, .525],
                                92: [.08333, .69444, 0, 0, .525],
                                93: [.08333, .69444, 0, 0, .525],
                                94: [0, .61111, 0, 0, .525],
                                95: [.09514, 0, 0, 0, .525],
                                96: [0, .61111, 0, 0, .525],
                                97: [0, .43056, 0, 0, .525],
                                98: [0, .61111, 0, 0, .525],
                                99: [0, .43056, 0, 0, .525],
                                100: [0, .61111, 0, 0, .525],
                                101: [0, .43056, 0, 0, .525],
                                102: [0, .61111, 0, 0, .525],
                                103: [.22222, .43056, 0, 0, .525],
                                104: [0, .61111, 0, 0, .525],
                                105: [0, .61111, 0, 0, .525],
                                106: [.22222, .61111, 0, 0, .525],
                                107: [0, .61111, 0, 0, .525],
                                108: [0, .61111, 0, 0, .525],
                                109: [0, .43056, 0, 0, .525],
                                110: [0, .43056, 0, 0, .525],
                                111: [0, .43056, 0, 0, .525],
                                112: [.22222, .43056, 0, 0, .525],
                                113: [.22222, .43056, 0, 0, .525],
                                114: [0, .43056, 0, 0, .525],
                                115: [0, .43056, 0, 0, .525],
                                116: [0, .55358, 0, 0, .525],
                                117: [0, .43056, 0, 0, .525],
                                118: [0, .43056, 0, 0, .525],
                                119: [0, .43056, 0, 0, .525],
                                120: [0, .43056, 0, 0, .525],
                                121: [.22222, .43056, 0, 0, .525],
                                122: [0, .43056, 0, 0, .525],
                                123: [.08333, .69444, 0, 0, .525],
                                124: [.08333, .69444, 0, 0, .525],
                                125: [.08333, .69444, 0, 0, .525],
                                126: [0, .61111, 0, 0, .525],
                                127: [0, .61111, 0, 0, .525],
                                160: [0, 0, 0, 0, .525],
                                176: [0, .61111, 0, 0, .525],
                                184: [.19445, 0, 0, 0, .525],
                                305: [0, .43056, 0, 0, .525],
                                567: [.22222, .43056, 0, 0, .525],
                                711: [0, .56597, 0, 0, .525],
                                713: [0, .56555, 0, 0, .525],
                                714: [0, .61111, 0, 0, .525],
                                715: [0, .61111, 0, 0, .525],
                                728: [0, .61111, 0, 0, .525],
                                730: [0, .61111, 0, 0, .525],
                                770: [0, .61111, 0, 0, .525],
                                771: [0, .61111, 0, 0, .525],
                                776: [0, .61111, 0, 0, .525],
                                915: [0, .61111, 0, 0, .525],
                                916: [0, .61111, 0, 0, .525],
                                920: [0, .61111, 0, 0, .525],
                                923: [0, .61111, 0, 0, .525],
                                926: [0, .61111, 0, 0, .525],
                                928: [0, .61111, 0, 0, .525],
                                931: [0, .61111, 0, 0, .525],
                                933: [0, .61111, 0, 0, .525],
                                934: [0, .61111, 0, 0, .525],
                                936: [0, .61111, 0, 0, .525],
                                937: [0, .61111, 0, 0, .525],
                                8216: [0, .61111, 0, 0, .525],
                                8217: [0, .61111, 0, 0, .525],
                                8242: [0, .61111, 0, 0, .525],
                                9251: [.11111, .21944, 0, 0, .525]
                            }
                        },
                        U = {
                            slant: [.25, .25, .25],
                            space: [0, 0, 0],
                            stretch: [0, 0, 0],
                            shrink: [0, 0, 0],
                            xHeight: [.431, .431, .431],
                            quad: [1, 1.171, 1.472],
                            extraSpace: [0, 0, 0],
                            num1: [.677, .732, .925],
                            num2: [.394, .384, .387],
                            num3: [.444, .471, .504],
                            denom1: [.686, .752, 1.025],
                            denom2: [.345, .344, .532],
                            sup1: [.413, .503, .504],
                            sup2: [.363, .431, .404],
                            sup3: [.289, .286, .294],
                            sub1: [.15, .143, .2],
                            sub2: [.247, .286, .4],
                            supDrop: [.386, .353, .494],
                            subDrop: [.05, .071, .1],
                            delim1: [2.39, 1.7, 1.98],
                            delim2: [1.01, 1.157, 1.42],
                            axisHeight: [.25, .25, .25],
                            defaultRuleThickness: [.04, .049, .049],
                            bigOpSpacing1: [.111, .111, .111],
                            bigOpSpacing2: [.166, .166, .166],
                            bigOpSpacing3: [.2, .2, .2],
                            bigOpSpacing4: [.6, .611, .611],
                            bigOpSpacing5: [.1, .143, .143],
                            sqrtRuleThickness: [.04, .04, .04],
                            ptPerEm: [10, 10, 10],
                            doubleRuleSep: [.2, .2, .2],
                            arrayRuleWidth: [.04, .04, .04],
                            fboxsep: [.3, .3, .3],
                            fboxrule: [.04, .04, .04]
                        },
                        G = {
                            "\xc5": "A",
                            "\xc7": "C",
                            "\xd0": "D",
                            "\xde": "o",
                            "\xe5": "a",
                            "\xe7": "c",
                            "\xf0": "d",
                            "\xfe": "o",
                            "\u0410": "A",
                            "\u0411": "B",
                            "\u0412": "B",
                            "\u0413": "F",
                            "\u0414": "A",
                            "\u0415": "E",
                            "\u0416": "K",
                            "\u0417": "3",
                            "\u0418": "N",
                            "\u0419": "N",
                            "\u041a": "K",
                            "\u041b": "N",
                            "\u041c": "M",
                            "\u041d": "H",
                            "\u041e": "O",
                            "\u041f": "N",
                            "\u0420": "P",
                            "\u0421": "C",
                            "\u0422": "T",
                            "\u0423": "y",
                            "\u0424": "O",
                            "\u0425": "X",
                            "\u0426": "U",
                            "\u0427": "h",
                            "\u0428": "W",
                            "\u0429": "W",
                            "\u042a": "B",
                            "\u042b": "X",
                            "\u042c": "B",
                            "\u042d": "3",
                            "\u042e": "X",
                            "\u042f": "R",
                            "\u0430": "a",
                            "\u0431": "b",
                            "\u0432": "a",
                            "\u0433": "r",
                            "\u0434": "y",
                            "\u0435": "e",
                            "\u0436": "m",
                            "\u0437": "e",
                            "\u0438": "n",
                            "\u0439": "n",
                            "\u043a": "n",
                            "\u043b": "n",
                            "\u043c": "m",
                            "\u043d": "n",
                            "\u043e": "o",
                            "\u043f": "n",
                            "\u0440": "p",
                            "\u0441": "c",
                            "\u0442": "o",
                            "\u0443": "y",
                            "\u0444": "b",
                            "\u0445": "x",
                            "\u0446": "n",
                            "\u0447": "n",
                            "\u0448": "w",
                            "\u0449": "w",
                            "\u044a": "a",
                            "\u044b": "m",
                            "\u044c": "a",
                            "\u044d": "e",
                            "\u044e": "m",
                            "\u044f": "r"
                        };

                    function Y(e, t, r) {
                        if (!V[t]) throw new Error("Font metrics not found for font: " + t + ".");
                        var n = e.charCodeAt(0),
                            a = V[t][n];
                        if (!a && e[0] in G && (n = G[e[0]].charCodeAt(0), a = V[t][n]), a || "text" !== r || M(n) && (a = V[t][77]), a) return {
                            depth: a[0],
                            height: a[1],
                            italic: a[2],
                            skew: a[3],
                            width: a[4]
                        }
                    }
                    var _ = {},
                        W = {
                            bin: 1,
                            close: 1,
                            inner: 1,
                            open: 1,
                            punct: 1,
                            rel: 1
                        },
                        X = {
                            "accent-token": 1,
                            mathord: 1,
                            "op-token": 1,
                            spacing: 1,
                            textord: 1
                        },
                        j = {
                            math: {},
                            text: {}
                        },
                        $ = j;

                    function Z(e, t, r, n, a, i) {
                        j[e][a] = {
                            font: t,
                            group: r,
                            replace: n
                        }, i && n && (j[e][n] = j[e][a])
                    }
                    var K = "math",
                        J = "text",
                        Q = "main",
                        ee = "ams",
                        te = "accent-token",
                        re = "bin",
                        ne = "close",
                        ae = "inner",
                        ie = "mathord",
                        oe = "op-token",
                        se = "open",
                        le = "punct",
                        he = "rel",
                        me = "spacing",
                        ce = "textord";
                    Z(K, Q, he, "\u2261", "\\equiv", !0), Z(K, Q, he, "\u227a", "\\prec", !0), Z(K, Q, he, "\u227b", "\\succ", !0), Z(K, Q, he, "\u223c", "\\sim", !0), Z(K, Q, he, "\u22a5", "\\perp"), Z(K, Q, he, "\u2aaf", "\\preceq", !0), Z(K, Q, he, "\u2ab0", "\\succeq", !0), Z(K, Q, he, "\u2243", "\\simeq", !0), Z(K, Q, he, "\u2223", "\\mid", !0), Z(K, Q, he, "\u226a", "\\ll", !0), Z(K, Q, he, "\u226b", "\\gg", !0), Z(K, Q, he, "\u224d", "\\asymp", !0), Z(K, Q, he, "\u2225", "\\parallel"), Z(K, Q, he, "\u22c8", "\\bowtie", !0), Z(K, Q, he, "\u2323", "\\smile", !0), Z(K, Q, he, "\u2291", "\\sqsubseteq", !0), Z(K, Q, he, "\u2292", "\\sqsupseteq", !0), Z(K, Q, he, "\u2250", "\\doteq", !0), Z(K, Q, he, "\u2322", "\\frown", !0), Z(K, Q, he, "\u220b", "\\ni", !0), Z(K, Q, he, "\u221d", "\\propto", !0), Z(K, Q, he, "\u22a2", "\\vdash", !0), Z(K, Q, he, "\u22a3", "\\dashv", !0), Z(K, Q, he, "\u220b", "\\owns"), Z(K, Q, le, ".", "\\ldotp"), Z(K, Q, le, "\u22c5", "\\cdotp"), Z(K, Q, ce, "#", "\\#"), Z(J, Q, ce, "#", "\\#"), Z(K, Q, ce, "&", "\\&"), Z(J, Q, ce, "&", "\\&"), Z(K, Q, ce, "\u2135", "\\aleph", !0), Z(K, Q, ce, "\u2200", "\\forall", !0), Z(K, Q, ce, "\u210f", "\\hbar", !0), Z(K, Q, ce, "\u2203", "\\exists", !0), Z(K, Q, ce, "\u2207", "\\nabla", !0), Z(K, Q, ce, "\u266d", "\\flat", !0), Z(K, Q, ce, "\u2113", "\\ell", !0), Z(K, Q, ce, "\u266e", "\\natural", !0), Z(K, Q, ce, "\u2663", "\\clubsuit", !0), Z(K, Q, ce, "\u2118", "\\wp", !0), Z(K, Q, ce, "\u266f", "\\sharp", !0), Z(K, Q, ce, "\u2662", "\\diamondsuit", !0), Z(K, Q, ce, "\u211c", "\\Re", !0), Z(K, Q, ce, "\u2661", "\\heartsuit", !0), Z(K, Q, ce, "\u2111", "\\Im", !0), Z(K, Q, ce, "\u2660", "\\spadesuit", !0), Z(J, Q, ce, "\xa7", "\\S", !0), Z(J, Q, ce, "\xb6", "\\P", !0), Z(K, Q, ce, "\u2020", "\\dag"), Z(J, Q, ce, "\u2020", "\\dag"), Z(J, Q, ce, "\u2020", "\\textdagger"), Z(K, Q, ce, "\u2021", "\\ddag"), Z(J, Q, ce, "\u2021", "\\ddag"), Z(J, Q, ce, "\u2021", "\\textdaggerdbl"), Z(K, Q, ne, "\u23b1", "\\rmoustache", !0), Z(K, Q, se, "\u23b0", "\\lmoustache", !0), Z(K, Q, ne, "\u27ef", "\\rgroup", !0), Z(K, Q, se, "\u27ee", "\\lgroup", !0), Z(K, Q, re, "\u2213", "\\mp", !0), Z(K, Q, re, "\u2296", "\\ominus", !0), Z(K, Q, re, "\u228e", "\\uplus", !0), Z(K, Q, re, "\u2293", "\\sqcap", !0), Z(K, Q, re, "\u2217", "\\ast"), Z(K, Q, re, "\u2294", "\\sqcup", !0), Z(K, Q, re, "\u25ef", "\\bigcirc"), Z(K, Q, re, "\u2219", "\\bullet"), Z(K, Q, re, "\u2021", "\\ddagger"), Z(K, Q, re, "\u2240", "\\wr", !0), Z(K, Q, re, "\u2a3f", "\\amalg"), Z(K, Q, re, "&", "\\And"), Z(K, Q, he, "\u27f5", "\\longleftarrow", !0), Z(K, Q, he, "\u21d0", "\\Leftarrow", !0), Z(K, Q, he, "\u27f8", "\\Longleftarrow", !0), Z(K, Q, he, "\u27f6", "\\longrightarrow", !0), Z(K, Q, he, "\u21d2", "\\Rightarrow", !0), Z(K, Q, he, "\u27f9", "\\Longrightarrow", !0), Z(K, Q, he, "\u2194", "\\leftrightarrow", !0), Z(K, Q, he, "\u27f7", "\\longleftrightarrow", !0), Z(K, Q, he, "\u21d4", "\\Leftrightarrow", !0), Z(K, Q, he, "\u27fa", "\\Longleftrightarrow", !0), Z(K, Q, he, "\u21a6", "\\mapsto", !0), Z(K, Q, he, "\u27fc", "\\longmapsto", !0), Z(K, Q, he, "\u2197", "\\nearrow", !0), Z(K, Q, he, "\u21a9", "\\hookleftarrow", !0), Z(K, Q, he, "\u21aa", "\\hookrightarrow", !0), Z(K, Q, he, "\u2198", "\\searrow", !0), Z(K, Q, he, "\u21bc", "\\leftharpoonup", !0), Z(K, Q, he, "\u21c0", "\\rightharpoonup", !0), Z(K, Q, he, "\u2199", "\\swarrow", !0), Z(K, Q, he, "\u21bd", "\\leftharpoondown", !0), Z(K, Q, he, "\u21c1", "\\rightharpoondown", !0), Z(K, Q, he, "\u2196", "\\nwarrow", !0), Z(K, Q, he, "\u21cc", "\\rightleftharpoons", !0), Z(K, ee, he, "\u226e", "\\nless", !0), Z(K, ee, he, "\ue010", "\\@nleqslant"), Z(K, ee, he, "\ue011", "\\@nleqq"), Z(K, ee, he, "\u2a87", "\\lneq", !0), Z(K, ee, he, "\u2268", "\\lneqq", !0), Z(K, ee, he, "\ue00c", "\\@lvertneqq"), Z(K, ee, he, "\u22e6", "\\lnsim", !0), Z(K, ee, he, "\u2a89", "\\lnapprox", !0), Z(K, ee, he, "\u2280", "\\nprec", !0), Z(K, ee, he, "\u22e0", "\\npreceq", !0), Z(K, ee, he, "\u22e8", "\\precnsim", !0), Z(K, ee, he, "\u2ab9", "\\precnapprox", !0), Z(K, ee, he, "\u2241", "\\nsim", !0), Z(K, ee, he, "\ue006", "\\@nshortmid"), Z(K, ee, he, "\u2224", "\\nmid", !0), Z(K, ee, he, "\u22ac", "\\nvdash", !0), Z(K, ee, he, "\u22ad", "\\nvDash", !0), Z(K, ee, he, "\u22ea", "\\ntriangleleft"), Z(K, ee, he, "\u22ec", "\\ntrianglelefteq", !0), Z(K, ee, he, "\u228a", "\\subsetneq", !0), Z(K, ee, he, "\ue01a", "\\@varsubsetneq"), Z(K, ee, he, "\u2acb", "\\subsetneqq", !0), Z(K, ee, he, "\ue017", "\\@varsubsetneqq"), Z(K, ee, he, "\u226f", "\\ngtr", !0), Z(K, ee, he, "\ue00f", "\\@ngeqslant"), Z(K, ee, he, "\ue00e", "\\@ngeqq"), Z(K, ee, he, "\u2a88", "\\gneq", !0), Z(K, ee, he, "\u2269", "\\gneqq", !0), Z(K, ee, he, "\ue00d", "\\@gvertneqq"), Z(K, ee, he, "\u22e7", "\\gnsim", !0), Z(K, ee, he, "\u2a8a", "\\gnapprox", !0), Z(K, ee, he, "\u2281", "\\nsucc", !0), Z(K, ee, he, "\u22e1", "\\nsucceq", !0), Z(K, ee, he, "\u22e9", "\\succnsim", !0), Z(K, ee, he, "\u2aba", "\\succnapprox", !0), Z(K, ee, he, "\u2246", "\\ncong", !0), Z(K, ee, he, "\ue007", "\\@nshortparallel"), Z(K, ee, he, "\u2226", "\\nparallel", !0), Z(K, ee, he, "\u22af", "\\nVDash", !0), Z(K, ee, he, "\u22eb", "\\ntriangleright"), Z(K, ee, he, "\u22ed", "\\ntrianglerighteq", !0), Z(K, ee, he, "\ue018", "\\@nsupseteqq"), Z(K, ee, he, "\u228b", "\\supsetneq", !0), Z(K, ee, he, "\ue01b", "\\@varsupsetneq"), Z(K, ee, he, "\u2acc", "\\supsetneqq", !0), Z(K, ee, he, "\ue019", "\\@varsupsetneqq"), Z(K, ee, he, "\u22ae", "\\nVdash", !0), Z(K, ee, he, "\u2ab5", "\\precneqq", !0), Z(K, ee, he, "\u2ab6", "\\succneqq", !0), Z(K, ee, he, "\ue016", "\\@nsubseteqq"), Z(K, ee, re, "\u22b4", "\\unlhd"), Z(K, ee, re, "\u22b5", "\\unrhd"), Z(K, ee, he, "\u219a", "\\nleftarrow", !0), Z(K, ee, he, "\u219b", "\\nrightarrow", !0), Z(K, ee, he, "\u21cd", "\\nLeftarrow", !0), Z(K, ee, he, "\u21cf", "\\nRightarrow", !0), Z(K, ee, he, "\u21ae", "\\nleftrightarrow", !0), Z(K, ee, he, "\u21ce", "\\nLeftrightarrow", !0), Z(K, ee, he, "\u25b3", "\\vartriangle"), Z(K, ee, ce, "\u210f", "\\hslash"), Z(K, ee, ce, "\u25bd", "\\triangledown"), Z(K, ee, ce, "\u25ca", "\\lozenge"), Z(K, ee, ce, "\u24c8", "\\circledS"), Z(K, ee, ce, "\xae", "\\circledR"), Z(J, ee, ce, "\xae", "\\circledR"), Z(K, ee, ce, "\u2221", "\\measuredangle", !0), Z(K, ee, ce, "\u2204", "\\nexists"), Z(K, ee, ce, "\u2127", "\\mho"), Z(K, ee, ce, "\u2132", "\\Finv", !0), Z(K, ee, ce, "\u2141", "\\Game", !0), Z(K, ee, ce, "\u2035", "\\backprime"), Z(K, ee, ce, "\u25b2", "\\blacktriangle"), Z(K, ee, ce, "\u25bc", "\\blacktriangledown"), Z(K, ee, ce, "\u25a0", "\\blacksquare"), Z(K, ee, ce, "\u29eb", "\\blacklozenge"), Z(K, ee, ce, "\u2605", "\\bigstar"), Z(K, ee, ce, "\u2222", "\\sphericalangle", !0), Z(K, ee, ce, "\u2201", "\\complement", !0), Z(K, ee, ce, "\xf0", "\\eth", !0), Z(J, Q, ce, "\xf0", "\xf0"), Z(K, ee, ce, "\u2571", "\\diagup"), Z(K, ee, ce, "\u2572", "\\diagdown"), Z(K, ee, ce, "\u25a1", "\\square"), Z(K, ee, ce, "\u25a1", "\\Box"), Z(K, ee, ce, "\u25ca", "\\Diamond"), Z(K, ee, ce, "\xa5", "\\yen", !0), Z(J, ee, ce, "\xa5", "\\yen", !0), Z(K, ee, ce, "\u2713", "\\checkmark", !0), Z(J, ee, ce, "\u2713", "\\checkmark"), Z(K, ee, ce, "\u2136", "\\beth", !0), Z(K, ee, ce, "\u2138", "\\daleth", !0), Z(K, ee, ce, "\u2137", "\\gimel", !0), Z(K, ee, ce, "\u03dd", "\\digamma", !0), Z(K, ee, ce, "\u03f0", "\\varkappa"), Z(K, ee, se, "\u250c", "\\@ulcorner", !0), Z(K, ee, ne, "\u2510", "\\@urcorner", !0), Z(K, ee, se, "\u2514", "\\@llcorner", !0), Z(K, ee, ne, "\u2518", "\\@lrcorner", !0), Z(K, ee, he, "\u2266", "\\leqq", !0), Z(K, ee, he, "\u2a7d", "\\leqslant", !0), Z(K, ee, he, "\u2a95", "\\eqslantless", !0), Z(K, ee, he, "\u2272", "\\lesssim", !0), Z(K, ee, he, "\u2a85", "\\lessapprox", !0), Z(K, ee, he, "\u224a", "\\approxeq", !0), Z(K, ee, re, "\u22d6", "\\lessdot"), Z(K, ee, he, "\u22d8", "\\lll", !0), Z(K, ee, he, "\u2276", "\\lessgtr", !0), Z(K, ee, he, "\u22da", "\\lesseqgtr", !0), Z(K, ee, he, "\u2a8b", "\\lesseqqgtr", !0), Z(K, ee, he, "\u2251", "\\doteqdot"), Z(K, ee, he, "\u2253", "\\risingdotseq", !0), Z(K, ee, he, "\u2252", "\\fallingdotseq", !0), Z(K, ee, he, "\u223d", "\\backsim", !0), Z(K, ee, he, "\u22cd", "\\backsimeq", !0), Z(K, ee, he, "\u2ac5", "\\subseteqq", !0), Z(K, ee, he, "\u22d0", "\\Subset", !0), Z(K, ee, he, "\u228f", "\\sqsubset", !0), Z(K, ee, he, "\u227c", "\\preccurlyeq", !0), Z(K, ee, he, "\u22de", "\\curlyeqprec", !0), Z(K, ee, he, "\u227e", "\\precsim", !0), Z(K, ee, he, "\u2ab7", "\\precapprox", !0), Z(K, ee, he, "\u22b2", "\\vartriangleleft"), Z(K, ee, he, "\u22b4", "\\trianglelefteq"), Z(K, ee, he, "\u22a8", "\\vDash", !0), Z(K, ee, he, "\u22aa", "\\Vvdash", !0), Z(K, ee, he, "\u2323", "\\smallsmile"), Z(K, ee, he, "\u2322", "\\smallfrown"), Z(K, ee, he, "\u224f", "\\bumpeq", !0), Z(K, ee, he, "\u224e", "\\Bumpeq", !0), Z(K, ee, he, "\u2267", "\\geqq", !0), Z(K, ee, he, "\u2a7e", "\\geqslant", !0), Z(K, ee, he, "\u2a96", "\\eqslantgtr", !0), Z(K, ee, he, "\u2273", "\\gtrsim", !0), Z(K, ee, he, "\u2a86", "\\gtrapprox", !0), Z(K, ee, re, "\u22d7", "\\gtrdot"), Z(K, ee, he, "\u22d9", "\\ggg", !0), Z(K, ee, he, "\u2277", "\\gtrless", !0), Z(K, ee, he, "\u22db", "\\gtreqless", !0), Z(K, ee, he, "\u2a8c", "\\gtreqqless", !0), Z(K, ee, he, "\u2256", "\\eqcirc", !0), Z(K, ee, he, "\u2257", "\\circeq", !0), Z(K, ee, he, "\u225c", "\\triangleq", !0), Z(K, ee, he, "\u223c", "\\thicksim"), Z(K, ee, he, "\u2248", "\\thickapprox"), Z(K, ee, he, "\u2ac6", "\\supseteqq", !0), Z(K, ee, he, "\u22d1", "\\Supset", !0), Z(K, ee, he, "\u2290", "\\sqsupset", !0), Z(K, ee, he, "\u227d", "\\succcurlyeq", !0), Z(K, ee, he, "\u22df", "\\curlyeqsucc", !0), Z(K, ee, he, "\u227f", "\\succsim", !0), Z(K, ee, he, "\u2ab8", "\\succapprox", !0), Z(K, ee, he, "\u22b3", "\\vartriangleright"), Z(K, ee, he, "\u22b5", "\\trianglerighteq"), Z(K, ee, he, "\u22a9", "\\Vdash", !0), Z(K, ee, he, "\u2223", "\\shortmid"), Z(K, ee, he, "\u2225", "\\shortparallel"), Z(K, ee, he, "\u226c", "\\between", !0), Z(K, ee, he, "\u22d4", "\\pitchfork", !0), Z(K, ee, he, "\u221d", "\\varpropto"), Z(K, ee, he, "\u25c0", "\\blacktriangleleft"), Z(K, ee, he, "\u2234", "\\therefore", !0), Z(K, ee, he, "\u220d", "\\backepsilon"), Z(K, ee, he, "\u25b6", "\\blacktriangleright"), Z(K, ee, he, "\u2235", "\\because", !0), Z(K, ee, he, "\u22d8", "\\llless"), Z(K, ee, he, "\u22d9", "\\gggtr"), Z(K, ee, re, "\u22b2", "\\lhd"), Z(K, ee, re, "\u22b3", "\\rhd"), Z(K, ee, he, "\u2242", "\\eqsim", !0), Z(K, Q, he, "\u22c8", "\\Join"), Z(K, ee, he, "\u2251", "\\Doteq", !0), Z(K, ee, re, "\u2214", "\\dotplus", !0), Z(K, ee, re, "\u2216", "\\smallsetminus"), Z(K, ee, re, "\u22d2", "\\Cap", !0), Z(K, ee, re, "\u22d3", "\\Cup", !0), Z(K, ee, re, "\u2a5e", "\\doublebarwedge", !0), Z(K, ee, re, "\u229f", "\\boxminus", !0), Z(K, ee, re, "\u229e", "\\boxplus", !0), Z(K, ee, re, "\u22c7", "\\divideontimes", !0), Z(K, ee, re, "\u22c9", "\\ltimes", !0), Z(K, ee, re, "\u22ca", "\\rtimes", !0), Z(K, ee, re, "\u22cb", "\\leftthreetimes", !0), Z(K, ee, re, "\u22cc", "\\rightthreetimes", !0), Z(K, ee, re, "\u22cf", "\\curlywedge", !0), Z(K, ee, re, "\u22ce", "\\curlyvee", !0), Z(K, ee, re, "\u229d", "\\circleddash", !0), Z(K, ee, re, "\u229b", "\\circledast", !0), Z(K, ee, re, "\u22c5", "\\centerdot"), Z(K, ee, re, "\u22ba", "\\intercal", !0), Z(K, ee, re, "\u22d2", "\\doublecap"), Z(K, ee, re, "\u22d3", "\\doublecup"), Z(K, ee, re, "\u22a0", "\\boxtimes", !0), Z(K, ee, he, "\u21e2", "\\dashrightarrow", !0), Z(K, ee, he, "\u21e0", "\\dashleftarrow", !0), Z(K, ee, he, "\u21c7", "\\leftleftarrows", !0), Z(K, ee, he, "\u21c6", "\\leftrightarrows", !0), Z(K, ee, he, "\u21da", "\\Lleftarrow", !0), Z(K, ee, he, "\u219e", "\\twoheadleftarrow", !0), Z(K, ee, he, "\u21a2", "\\leftarrowtail", !0), Z(K, ee, he, "\u21ab", "\\looparrowleft", !0), Z(K, ee, he, "\u21cb", "\\leftrightharpoons", !0), Z(K, ee, he, "\u21b6", "\\curvearrowleft", !0), Z(K, ee, he, "\u21ba", "\\circlearrowleft", !0), Z(K, ee, he, "\u21b0", "\\Lsh", !0), Z(K, ee, he, "\u21c8", "\\upuparrows", !0), Z(K, ee, he, "\u21bf", "\\upharpoonleft", !0), Z(K, ee, he, "\u21c3", "\\downharpoonleft", !0), Z(K, ee, he, "\u22b8", "\\multimap", !0), Z(K, ee, he, "\u21ad", "\\leftrightsquigarrow", !0), Z(K, ee, he, "\u21c9", "\\rightrightarrows", !0), Z(K, ee, he, "\u21c4", "\\rightleftarrows", !0), Z(K, ee, he, "\u21a0", "\\twoheadrightarrow", !0), Z(K, ee, he, "\u21a3", "\\rightarrowtail", !0), Z(K, ee, he, "\u21ac", "\\looparrowright", !0), Z(K, ee, he, "\u21b7", "\\curvearrowright", !0), Z(K, ee, he, "\u21bb", "\\circlearrowright", !0), Z(K, ee, he, "\u21b1", "\\Rsh", !0), Z(K, ee, he, "\u21ca", "\\downdownarrows", !0), Z(K, ee, he, "\u21be", "\\upharpoonright", !0), Z(K, ee, he, "\u21c2", "\\downharpoonright", !0), Z(K, ee, he, "\u21dd", "\\rightsquigarrow", !0), Z(K, ee, he, "\u21dd", "\\leadsto"), Z(K, ee, he, "\u21db", "\\Rrightarrow", !0), Z(K, ee, he, "\u21be", "\\restriction"), Z(K, Q, ce, "\u2018", "`"), Z(K, Q, ce, "$", "\\$"), Z(J, Q, ce, "$", "\\$"), Z(J, Q, ce, "$", "\\textdollar"), Z(K, Q, ce, "%", "\\%"), Z(J, Q, ce, "%", "\\%"), Z(K, Q, ce, "_", "\\_"), Z(J, Q, ce, "_", "\\_"), Z(J, Q, ce, "_", "\\textunderscore"), Z(K, Q, ce, "\u2220", "\\angle", !0), Z(K, Q, ce, "\u221e", "\\infty", !0), Z(K, Q, ce, "\u2032", "\\prime"), Z(K, Q, ce, "\u25b3", "\\triangle"), Z(K, Q, ce, "\u0393", "\\Gamma", !0), Z(K, Q, ce, "\u0394", "\\Delta", !0), Z(K, Q, ce, "\u0398", "\\Theta", !0), Z(K, Q, ce, "\u039b", "\\Lambda", !0), Z(K, Q, ce, "\u039e", "\\Xi", !0), Z(K, Q, ce, "\u03a0", "\\Pi", !0), Z(K, Q, ce, "\u03a3", "\\Sigma", !0), Z(K, Q, ce, "\u03a5", "\\Upsilon", !0), Z(K, Q, ce, "\u03a6", "\\Phi", !0), Z(K, Q, ce, "\u03a8", "\\Psi", !0), Z(K, Q, ce, "\u03a9", "\\Omega", !0), Z(K, Q, ce, "A", "\u0391"), Z(K, Q, ce, "B", "\u0392"), Z(K, Q, ce, "E", "\u0395"), Z(K, Q, ce, "Z", "\u0396"), Z(K, Q, ce, "H", "\u0397"), Z(K, Q, ce, "I", "\u0399"), Z(K, Q, ce, "K", "\u039a"), Z(K, Q, ce, "M", "\u039c"), Z(K, Q, ce, "N", "\u039d"), Z(K, Q, ce, "O", "\u039f"), Z(K, Q, ce, "P", "\u03a1"), Z(K, Q, ce, "T", "\u03a4"), Z(K, Q, ce, "X", "\u03a7"), Z(K, Q, ce, "\xac", "\\neg", !0), Z(K, Q, ce, "\xac", "\\lnot"), Z(K, Q, ce, "\u22a4", "\\top"), Z(K, Q, ce, "\u22a5", "\\bot"), Z(K, Q, ce, "\u2205", "\\emptyset"), Z(K, ee, ce, "\u2205", "\\varnothing"), Z(K, Q, ie, "\u03b1", "\\alpha", !0), Z(K, Q, ie, "\u03b2", "\\beta", !0), Z(K, Q, ie, "\u03b3", "\\gamma", !0), Z(K, Q, ie, "\u03b4", "\\delta", !0), Z(K, Q, ie, "\u03f5", "\\epsilon", !0), Z(K, Q, ie, "\u03b6", "\\zeta", !0), Z(K, Q, ie, "\u03b7", "\\eta", !0), Z(K, Q, ie, "\u03b8", "\\theta", !0), Z(K, Q, ie, "\u03b9", "\\iota", !0), Z(K, Q, ie, "\u03ba", "\\kappa", !0), Z(K, Q, ie, "\u03bb", "\\lambda", !0), Z(K, Q, ie, "\u03bc", "\\mu", !0), Z(K, Q, ie, "\u03bd", "\\nu", !0), Z(K, Q, ie, "\u03be", "\\xi", !0), Z(K, Q, ie, "\u03bf", "\\omicron", !0), Z(K, Q, ie, "\u03c0", "\\pi", !0), Z(K, Q, ie, "\u03c1", "\\rho", !0), Z(K, Q, ie, "\u03c3", "\\sigma", !0), Z(K, Q, ie, "\u03c4", "\\tau", !0), Z(K, Q, ie, "\u03c5", "\\upsilon", !0), Z(K, Q, ie, "\u03d5", "\\phi", !0), Z(K, Q, ie, "\u03c7", "\\chi", !0), Z(K, Q, ie, "\u03c8", "\\psi", !0), Z(K, Q, ie, "\u03c9", "\\omega", !0), Z(K, Q, ie, "\u03b5", "\\varepsilon", !0), Z(K, Q, ie, "\u03d1", "\\vartheta", !0), Z(K, Q, ie, "\u03d6", "\\varpi", !0), Z(K, Q, ie, "\u03f1", "\\varrho", !0), Z(K, Q, ie, "\u03c2", "\\varsigma", !0), Z(K, Q, ie, "\u03c6", "\\varphi", !0), Z(K, Q, re, "\u2217", "*"), Z(K, Q, re, "+", "+"), Z(K, Q, re, "\u2212", "-"), Z(K, Q, re, "\u22c5", "\\cdot", !0), Z(K, Q, re, "\u2218", "\\circ"), Z(K, Q, re, "\xf7", "\\div", !0), Z(K, Q, re, "\xb1", "\\pm", !0), Z(K, Q, re, "\xd7", "\\times", !0), Z(K, Q, re, "\u2229", "\\cap", !0), Z(K, Q, re, "\u222a", "\\cup", !0), Z(K, Q, re, "\u2216", "\\setminus"), Z(K, Q, re, "\u2227", "\\land"), Z(K, Q, re, "\u2228", "\\lor"), Z(K, Q, re, "\u2227", "\\wedge", !0), Z(K, Q, re, "\u2228", "\\vee", !0), Z(K, Q, ce, "\u221a", "\\surd"), Z(K, Q, se, "\u27e8", "\\langle", !0), Z(K, Q, se, "\u2223", "\\lvert"), Z(K, Q, se, "\u2225", "\\lVert"), Z(K, Q, ne, "?", "?"), Z(K, Q, ne, "!", "!"), Z(K, Q, ne, "\u27e9", "\\rangle", !0), Z(K, Q, ne, "\u2223", "\\rvert"), Z(K, Q, ne, "\u2225", "\\rVert"), Z(K, Q, he, "=", "="), Z(K, Q, he, ":", ":"), Z(K, Q, he, "\u2248", "\\approx", !0), Z(K, Q, he, "\u2245", "\\cong", !0), Z(K, Q, he, "\u2265", "\\ge"), Z(K, Q, he, "\u2265", "\\geq", !0), Z(K, Q, he, "\u2190", "\\gets"), Z(K, Q, he, ">", "\\gt", !0), Z(K, Q, he, "\u2208", "\\in", !0), Z(K, Q, he, "\ue020", "\\@not"), Z(K, Q, he, "\u2282", "\\subset", !0), Z(K, Q, he, "\u2283", "\\supset", !0), Z(K, Q, he, "\u2286", "\\subseteq", !0), Z(K, Q, he, "\u2287", "\\supseteq", !0), Z(K, ee, he, "\u2288", "\\nsubseteq", !0), Z(K, ee, he, "\u2289", "\\nsupseteq", !0), Z(K, Q, he, "\u22a8", "\\models"), Z(K, Q, he, "\u2190", "\\leftarrow", !0), Z(K, Q, he, "\u2264", "\\le"), Z(K, Q, he, "\u2264", "\\leq", !0), Z(K, Q, he, "<", "\\lt", !0), Z(K, Q, he, "\u2192", "\\rightarrow", !0), Z(K, Q, he, "\u2192", "\\to"), Z(K, ee, he, "\u2271", "\\ngeq", !0), Z(K, ee, he, "\u2270", "\\nleq", !0), Z(K, Q, me, "\xa0", "\\ "), Z(K, Q, me, "\xa0", "~"), Z(K, Q, me, "\xa0", "\\space"), Z(K, Q, me, "\xa0", "\\nobreakspace"), Z(J, Q, me, "\xa0", "\\ "), Z(J, Q, me, "\xa0", " "), Z(J, Q, me, "\xa0", "~"), Z(J, Q, me, "\xa0", "\\space"), Z(J, Q, me, "\xa0", "\\nobreakspace"), Z(K, Q, me, null, "\\nobreak"), Z(K, Q, me, null, "\\allowbreak"), Z(K, Q, le, ",", ","), Z(K, Q, le, ";", ";"), Z(K, ee, re, "\u22bc", "\\barwedge", !0), Z(K, ee, re, "\u22bb", "\\veebar", !0), Z(K, Q, re, "\u2299", "\\odot", !0), Z(K, Q, re, "\u2295", "\\oplus", !0), Z(K, Q, re, "\u2297", "\\otimes", !0), Z(K, Q, ce, "\u2202", "\\partial", !0), Z(K, Q, re, "\u2298", "\\oslash", !0), Z(K, ee, re, "\u229a", "\\circledcirc", !0), Z(K, ee, re, "\u22a1", "\\boxdot", !0), Z(K, Q, re, "\u25b3", "\\bigtriangleup"), Z(K, Q, re, "\u25bd", "\\bigtriangledown"), Z(K, Q, re, "\u2020", "\\dagger"), Z(K, Q, re, "\u22c4", "\\diamond"), Z(K, Q, re, "\u22c6", "\\star"), Z(K, Q, re, "\u25c3", "\\triangleleft"), Z(K, Q, re, "\u25b9", "\\triangleright"), Z(K, Q, se, "{", "\\{"), Z(J, Q, ce, "{", "\\{"), Z(J, Q, ce, "{", "\\textbraceleft"), Z(K, Q, ne, "}", "\\}"), Z(J, Q, ce, "}", "\\}"), Z(J, Q, ce, "}", "\\textbraceright"), Z(K, Q, se, "{", "\\lbrace"), Z(K, Q, ne, "}", "\\rbrace"), Z(K, Q, se, "[", "\\lbrack", !0), Z(J, Q, ce, "[", "\\lbrack", !0), Z(K, Q, ne, "]", "\\rbrack", !0), Z(J, Q, ce, "]", "\\rbrack", !0), Z(K, Q, se, "(", "\\lparen", !0), Z(K, Q, ne, ")", "\\rparen", !0), Z(J, Q, ce, "<", "\\textless", !0), Z(J, Q, ce, ">", "\\textgreater", !0), Z(K, Q, se, "\u230a", "\\lfloor", !0), Z(K, Q, ne, "\u230b", "\\rfloor", !0), Z(K, Q, se, "\u2308", "\\lceil", !0), Z(K, Q, ne, "\u2309", "\\rceil", !0), Z(K, Q, ce, "\\", "\\backslash"), Z(K, Q, ce, "\u2223", "|"), Z(K, Q, ce, "\u2223", "\\vert"), Z(J, Q, ce, "|", "\\textbar", !0), Z(K, Q, ce, "\u2225", "\\|"), Z(K, Q, ce, "\u2225", "\\Vert"), Z(J, Q, ce, "\u2225", "\\textbardbl"), Z(J, Q, ce, "~", "\\textasciitilde"), Z(J, Q, ce, "\\", "\\textbackslash"), Z(J, Q, ce, "^", "\\textasciicircum"), Z(K, Q, he, "\u2191", "\\uparrow", !0), Z(K, Q, he, "\u21d1", "\\Uparrow", !0), Z(K, Q, he, "\u2193", "\\downarrow", !0), Z(K, Q, he, "\u21d3", "\\Downarrow", !0), Z(K, Q, he, "\u2195", "\\updownarrow", !0), Z(K, Q, he, "\u21d5", "\\Updownarrow", !0), Z(K, Q, oe, "\u2210", "\\coprod"), Z(K, Q, oe, "\u22c1", "\\bigvee"), Z(K, Q, oe, "\u22c0", "\\bigwedge"), Z(K, Q, oe, "\u2a04", "\\biguplus"), Z(K, Q, oe, "\u22c2", "\\bigcap"), Z(K, Q, oe, "\u22c3", "\\bigcup"), Z(K, Q, oe, "\u222b", "\\int"), Z(K, Q, oe, "\u222b", "\\intop"), Z(K, Q, oe, "\u222c", "\\iint"), Z(K, Q, oe, "\u222d", "\\iiint"), Z(K, Q, oe, "\u220f", "\\prod"), Z(K, Q, oe, "\u2211", "\\sum"), Z(K, Q, oe, "\u2a02", "\\bigotimes"), Z(K, Q, oe, "\u2a01", "\\bigoplus"), Z(K, Q, oe, "\u2a00", "\\bigodot"), Z(K, Q, oe, "\u222e", "\\oint"), Z(K, Q, oe, "\u2a06", "\\bigsqcup"), Z(K, Q, oe, "\u222b", "\\smallint"), Z(J, Q, ae, "\u2026", "\\textellipsis"), Z(K, Q, ae, "\u2026", "\\mathellipsis"), Z(J, Q, ae, "\u2026", "\\ldots", !0), Z(K, Q, ae, "\u2026", "\\ldots", !0), Z(K, Q, ae, "\u22ef", "\\@cdots", !0), Z(K, Q, ae, "\u22f1", "\\ddots", !0), Z(K, Q, ce, "\u22ee", "\\varvdots"), Z(K, Q, te, "\u02ca", "\\acute"), Z(K, Q, te, "\u02cb", "\\grave"), Z(K, Q, te, "\xa8", "\\ddot"), Z(K, Q, te, "~", "\\tilde"), Z(K, Q, te, "\u02c9", "\\bar"), Z(K, Q, te, "\u02d8", "\\breve"), Z(K, Q, te, "\u02c7", "\\check"), Z(K, Q, te, "^", "\\hat"), Z(K, Q, te, "\u20d7", "\\vec"), Z(K, Q, te, "\u02d9", "\\dot"), Z(K, Q, te, "\u02da", "\\mathring"), Z(K, Q, ie, "\ue131", "\\@imath"), Z(K, Q, ie, "\ue237", "\\@jmath"), Z(K, Q, ce, "\u0131", "\u0131"), Z(K, Q, ce, "\u0237", "\u0237"), Z(J, Q, ce, "\u0131", "\\i", !0), Z(J, Q, ce, "\u0237", "\\j", !0), Z(J, Q, ce, "\xdf", "\\ss", !0), Z(J, Q, ce, "\xe6", "\\ae", !0), Z(J, Q, ce, "\u0153", "\\oe", !0), Z(J, Q, ce, "\xf8", "\\o", !0), Z(J, Q, ce, "\xc6", "\\AE", !0), Z(J, Q, ce, "\u0152", "\\OE", !0), Z(J, Q, ce, "\xd8", "\\O", !0), Z(J, Q, te, "\u02ca", "\\'"), Z(J, Q, te, "\u02cb", "\\`"), Z(J, Q, te, "\u02c6", "\\^"), Z(J, Q, te, "\u02dc", "\\~"), Z(J, Q, te, "\u02c9", "\\="), Z(J, Q, te, "\u02d8", "\\u"), Z(J, Q, te, "\u02d9", "\\."), Z(J, Q, te, "\u02da", "\\r"), Z(J, Q, te, "\u02c7", "\\v"), Z(J, Q, te, "\xa8", '\\"'), Z(J, Q, te, "\u02dd", "\\H"), Z(J, Q, te, "\u25ef", "\\textcircled");
                    var ue = {
                        "--": !0,
                        "---": !0,
                        "``": !0,
                        "''": !0
                    };
                    Z(J, Q, ce, "\u2013", "--", !0), Z(J, Q, ce, "\u2013", "\\textendash"), Z(J, Q, ce, "\u2014", "---", !0), Z(J, Q, ce, "\u2014", "\\textemdash"), Z(J, Q, ce, "\u2018", "`", !0), Z(J, Q, ce, "\u2018", "\\textquoteleft"), Z(J, Q, ce, "\u2019", "'", !0), Z(J, Q, ce, "\u2019", "\\textquoteright"), Z(J, Q, ce, "\u201c", "``", !0), Z(J, Q, ce, "\u201c", "\\textquotedblleft"), Z(J, Q, ce, "\u201d", "''", !0), Z(J, Q, ce, "\u201d", "\\textquotedblright"), Z(K, Q, ce, "\xb0", "\\degree", !0), Z(J, Q, ce, "\xb0", "\\degree"), Z(J, Q, ce, "\xb0", "\\textdegree", !0), Z(K, Q, ce, "\xa3", "\\pounds"), Z(K, Q, ce, "\xa3", "\\mathsterling", !0), Z(J, Q, ce, "\xa3", "\\pounds"), Z(J, Q, ce, "\xa3", "\\textsterling", !0), Z(K, ee, ce, "\u2720", "\\maltese"), Z(J, ee, ce, "\u2720", "\\maltese");
                    for (var pe = '0123456789/@."', de = 0; de < pe.length; de++) {
                        var fe = pe.charAt(de);
                        Z(K, Q, ce, fe, fe)
                    }
                    for (var ge = '0123456789!@*()-=+";:?/.,', ve = 0; ve < ge.length; ve++) {
                        var be = ge.charAt(ve);
                        Z(J, Q, ce, be, be)
                    }
                    for (var ye = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz", xe = 0; xe < ye.length; xe++) {
                        var we = ye.charAt(xe);
                        Z(K, Q, ie, we, we), Z(J, Q, ce, we, we)
                    }
                    Z(K, ee, ce, "C", "\u2102"), Z(J, ee, ce, "C", "\u2102"), Z(K, ee, ce, "H", "\u210d"), Z(J, ee, ce, "H", "\u210d"), Z(K, ee, ce, "N", "\u2115"), Z(J, ee, ce, "N", "\u2115"), Z(K, ee, ce, "P", "\u2119"), Z(J, ee, ce, "P", "\u2119"), Z(K, ee, ce, "Q", "\u211a"), Z(J, ee, ce, "Q", "\u211a"), Z(K, ee, ce, "R", "\u211d"), Z(J, ee, ce, "R", "\u211d"), Z(K, ee, ce, "Z", "\u2124"), Z(J, ee, ce, "Z", "\u2124"), Z(K, Q, ie, "h", "\u210e"), Z(J, Q, ie, "h", "\u210e");
                    for (var ke = "", Se = 0; Se < ye.length; Se++) {
                        var Me = ye.charAt(Se);
                        Z(K, Q, ie, Me, ke = String.fromCharCode(55349, 56320 + Se)), Z(J, Q, ce, Me, ke), Z(K, Q, ie, Me, ke = String.fromCharCode(55349, 56372 + Se)), Z(J, Q, ce, Me, ke), Z(K, Q, ie, Me, ke = String.fromCharCode(55349, 56424 + Se)), Z(J, Q, ce, Me, ke), Z(K, Q, ie, Me, ke = String.fromCharCode(55349, 56580 + Se)), Z(J, Q, ce, Me, ke), Z(K, Q, ie, Me, ke = String.fromCharCode(55349, 56736 + Se)), Z(J, Q, ce, Me, ke), Z(K, Q, ie, Me, ke = String.fromCharCode(55349, 56788 + Se)), Z(J, Q, ce, Me, ke), Z(K, Q, ie, Me, ke = String.fromCharCode(55349, 56840 + Se)), Z(J, Q, ce, Me, ke), Z(K, Q, ie, Me, ke = String.fromCharCode(55349, 56944 + Se)), Z(J, Q, ce, Me, ke), Se < 26 && (Z(K, Q, ie, Me, ke = String.fromCharCode(55349, 56632 + Se)), Z(J, Q, ce, Me, ke), Z(K, Q, ie, Me, ke = String.fromCharCode(55349, 56476 + Se)), Z(J, Q, ce, Me, ke))
                    }
                    Z(K, Q, ie, "k", ke = String.fromCharCode(55349, 56668)), Z(J, Q, ce, "k", ke);
                    for (var ze = 0; ze < 10; ze++) {
                        var Ae = ze.toString();
                        Z(K, Q, ie, Ae, ke = String.fromCharCode(55349, 57294 + ze)), Z(J, Q, ce, Ae, ke), Z(K, Q, ie, Ae, ke = String.fromCharCode(55349, 57314 + ze)), Z(J, Q, ce, Ae, ke), Z(K, Q, ie, Ae, ke = String.fromCharCode(55349, 57324 + ze)), Z(J, Q, ce, Ae, ke), Z(K, Q, ie, Ae, ke = String.fromCharCode(55349, 57334 + ze)), Z(J, Q, ce, Ae, ke)
                    }
                    for (var Te = "\xc7\xd0\xde\xe7\xfe", Be = 0; Be < Te.length; Be++) {
                        var Ce = Te.charAt(Be);
                        Z(K, Q, ie, Ce, Ce), Z(J, Q, ce, Ce, Ce)
                    }
                    var qe = [
                            ["mathbf", "textbf", "Main-Bold"],
                            ["mathbf", "textbf", "Main-Bold"],
                            ["mathnormal", "textit", "Math-Italic"],
                            ["mathnormal", "textit", "Math-Italic"],
                            ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
                            ["boldsymbol", "boldsymbol", "Main-BoldItalic"],
                            ["mathscr", "textscr", "Script-Regular"],
                            ["", "", ""],
                            ["", "", ""],
                            ["", "", ""],
                            ["mathfrak", "textfrak", "Fraktur-Regular"],
                            ["mathfrak", "textfrak", "Fraktur-Regular"],
                            ["mathbb", "textbb", "AMS-Regular"],
                            ["mathbb", "textbb", "AMS-Regular"],
                            ["", "", ""],
                            ["", "", ""],
                            ["mathsf", "textsf", "SansSerif-Regular"],
                            ["mathsf", "textsf", "SansSerif-Regular"],
                            ["mathboldsf", "textboldsf", "SansSerif-Bold"],
                            ["mathboldsf", "textboldsf", "SansSerif-Bold"],
                            ["mathitsf", "textitsf", "SansSerif-Italic"],
                            ["mathitsf", "textitsf", "SansSerif-Italic"],
                            ["", "", ""],
                            ["", "", ""],
                            ["mathtt", "texttt", "Typewriter-Regular"],
                            ["mathtt", "texttt", "Typewriter-Regular"]
                        ],
                        Ne = [
                            ["mathbf", "textbf", "Main-Bold"],
                            ["", "", ""],
                            ["mathsf", "textsf", "SansSerif-Regular"],
                            ["mathboldsf", "textboldsf", "SansSerif-Bold"],
                            ["mathtt", "texttt", "Typewriter-Regular"]
                        ],
                        Ie = [
                            [1, 1, 1],
                            [2, 1, 1],
                            [3, 1, 1],
                            [4, 2, 1],
                            [5, 2, 1],
                            [6, 3, 1],
                            [7, 4, 2],
                            [8, 6, 3],
                            [9, 7, 6],
                            [10, 8, 7],
                            [11, 10, 9]
                        ],
                        Oe = [.5, .6, .7, .8, .9, 1, 1.2, 1.44, 1.728, 2.074, 2.488],
                        Re = function(e, t) {
                            return t.size < 2 ? e : Ie[e - 1][t.size - 1]
                        },
                        Ee = function() {
                            function e(t) {
                                this.style = void 0, this.color = void 0, this.size = void 0, this.textSize = void 0, this.phantom = void 0, this.font = void 0, this.fontFamily = void 0, this.fontWeight = void 0, this.fontShape = void 0, this.sizeMultiplier = void 0, this.maxSize = void 0, this.minRuleThickness = void 0, this._fontMetrics = void 0, this.style = t.style, this.color = t.color, this.size = t.size || e.BASESIZE, this.textSize = t.textSize || this.size, this.phantom = !!t.phantom, this.font = t.font || "", this.fontFamily = t.fontFamily || "", this.fontWeight = t.fontWeight || "", this.fontShape = t.fontShape || "", this.sizeMultiplier = Oe[this.size - 1], this.maxSize = t.maxSize, this.minRuleThickness = t.minRuleThickness, this._fontMetrics = void 0
                            }
                            var t = e.prototype;
                            return t.extend = function(t) {
                                var r = {
                                    style: this.style,
                                    size: this.size,
                                    textSize: this.textSize,
                                    color: this.color,
                                    phantom: this.phantom,
                                    font: this.font,
                                    fontFamily: this.fontFamily,
                                    fontWeight: this.fontWeight,
                                    fontShape: this.fontShape,
                                    maxSize: this.maxSize,
                                    minRuleThickness: this.minRuleThickness
                                };
                                for (var n in t) t.hasOwnProperty(n) && (r[n] = t[n]);
                                return new e(r)
                            }, t.havingStyle = function(e) {
                                return this.style === e ? this : this.extend({
                                    style: e,
                                    size: Re(this.textSize, e)
                                })
                            }, t.havingCrampedStyle = function() {
                                return this.havingStyle(this.style.cramp())
                            }, t.havingSize = function(e) {
                                return this.size === e && this.textSize === e ? this : this.extend({
                                    style: this.style.text(),
                                    size: e,
                                    textSize: e,
                                    sizeMultiplier: Oe[e - 1]
                                })
                            }, t.havingBaseStyle = function(t) {
                                t = t || this.style.text();
                                var r = Re(e.BASESIZE, t);
                                return this.size === r && this.textSize === e.BASESIZE && this.style === t ? this : this.extend({
                                    style: t,
                                    size: r
                                })
                            }, t.havingBaseSizing = function() {
                                var e;
                                switch (this.style.id) {
                                    case 4:
                                    case 5:
                                        e = 3;
                                        break;
                                    case 6:
                                    case 7:
                                        e = 1;
                                        break;
                                    default:
                                        e = 6
                                }
                                return this.extend({
                                    style: this.style.text(),
                                    size: e
                                })
                            }, t.withColor = function(e) {
                                return this.extend({
                                    color: e
                                })
                            }, t.withPhantom = function() {
                                return this.extend({
                                    phantom: !0
                                })
                            }, t.withFont = function(e) {
                                return this.extend({
                                    font: e
                                })
                            }, t.withTextFontFamily = function(e) {
                                return this.extend({
                                    fontFamily: e,
                                    font: ""
                                })
                            }, t.withTextFontWeight = function(e) {
                                return this.extend({
                                    fontWeight: e,
                                    font: ""
                                })
                            }, t.withTextFontShape = function(e) {
                                return this.extend({
                                    fontShape: e,
                                    font: ""
                                })
                            }, t.sizingClasses = function(e) {
                                return e.size !== this.size ? ["sizing", "reset-size" + e.size, "size" + this.size] : []
                            }, t.baseSizingClasses = function() {
                                return this.size !== e.BASESIZE ? ["sizing", "reset-size" + this.size, "size" + e.BASESIZE] : []
                            }, t.fontMetrics = function() {
                                return this._fontMetrics || (this._fontMetrics = function(e) {
                                    var t;
                                    if (!_[t = e >= 5 ? 0 : e >= 3 ? 1 : 2]) {
                                        var r = _[t] = {
                                            cssEmPerMu: U.quad[t] / 18
                                        };
                                        for (var n in U) U.hasOwnProperty(n) && (r[n] = U[n][t])
                                    }
                                    return _[t]
                                }(this.size)), this._fontMetrics
                            }, t.getColor = function() {
                                return this.phantom ? "transparent" : this.color
                            }, e
                        }();
                    Ee.BASESIZE = 6;
                    var Le = Ee,
                        Pe = {
                            pt: 1,
                            mm: 7227 / 2540,
                            cm: 7227 / 254,
                            in: 72.27,
                            bp: 1.00375,
                            pc: 12,
                            dd: 1238 / 1157,
                            cc: 14856 / 1157,
                            nd: 685 / 642,
                            nc: 1370 / 107,
                            sp: 1 / 65536,
                            px: 1.00375
                        },
                        De = {
                            ex: !0,
                            em: !0,
                            mu: !0
                        },
                        He = function(e) {
                            return "string" !== typeof e && (e = e.unit), e in Pe || e in De || "ex" === e
                        },
                        Fe = function(e, t) {
                            var r;
                            if (e.unit in Pe) r = Pe[e.unit] / t.fontMetrics().ptPerEm / t.sizeMultiplier;
                            else if ("mu" === e.unit) r = t.fontMetrics().cssEmPerMu;
                            else {
                                var n;
                                if (n = t.style.isTight() ? t.havingStyle(t.style.text()) : t, "ex" === e.unit) r = n.fontMetrics().xHeight;
                                else {
                                    if ("em" !== e.unit) throw new o("Invalid unit: '" + e.unit + "'");
                                    r = n.fontMetrics().quad
                                }
                                n !== t && (r *= n.sizeMultiplier / t.sizeMultiplier)
                            }
                            return Math.min(e.number * r, t.maxSize)
                        },
                        Ve = function(e, t, r) {
                            return $[r][e] && $[r][e].replace && (e = $[r][e].replace), {
                                value: e,
                                metrics: Y(e, t, r)
                            }
                        },
                        Ue = function(e, t, r, n, a) {
                            var i, o = Ve(e, t, r),
                                s = o.metrics;
                            if (e = o.value, s) {
                                var l = s.italic;
                                ("text" === r || n && "mathit" === n.font) && (l = 0), i = new L(e, s.height, s.depth, l, s.skew, s.width, a)
                            } else "undefined" !== typeof console && console.warn("No character metrics for '" + e + "' in style '" + t + "' and mode '" + r + "'"), i = new L(e, 0, 0, 0, 0, 0, a);
                            if (n) {
                                i.maxFontSize = n.sizeMultiplier, n.style.isTight() && i.classes.push("mtight");
                                var h = n.getColor();
                                h && (i.style.color = h)
                            }
                            return i
                        },
                        Ge = function(e, t) {
                            if (B(e.classes) !== B(t.classes) || e.skew !== t.skew || e.maxFontSize !== t.maxFontSize) return !1;
                            for (var r in e.style)
                                if (e.style.hasOwnProperty(r) && e.style[r] !== t.style[r]) return !1;
                            for (var n in t.style)
                                if (t.style.hasOwnProperty(n) && e.style[n] !== t.style[n]) return !1;
                            return !0
                        },
                        Ye = function(e) {
                            for (var t = 0, r = 0, n = 0, a = 0; a < e.children.length; a++) {
                                var i = e.children[a];
                                i.height > t && (t = i.height), i.depth > r && (r = i.depth), i.maxFontSize > n && (n = i.maxFontSize)
                            }
                            e.height = t, e.depth = r, e.maxFontSize = n
                        },
                        _e = function(e, t, r, n) {
                            var a = new I(e, t, r, n);
                            return Ye(a), a
                        },
                        We = function(e, t, r, n) {
                            return new I(e, t, r, n)
                        },
                        Xe = function(e) {
                            var t = new T(e);
                            return Ye(t), t
                        },
                        je = function(e, t, r) {
                            var n = "";
                            switch (e) {
                                case "amsrm":
                                    n = "AMS";
                                    break;
                                case "textrm":
                                    n = "Main";
                                    break;
                                case "textsf":
                                    n = "SansSerif";
                                    break;
                                case "texttt":
                                    n = "Typewriter";
                                    break;
                                default:
                                    n = e
                            }
                            return n + "-" + ("textbf" === t && "textit" === r ? "BoldItalic" : "textbf" === t ? "Bold" : "textit" === t ? "Italic" : "Regular")
                        },
                        $e = {
                            mathbf: {
                                variant: "bold",
                                fontName: "Main-Bold"
                            },
                            mathrm: {
                                variant: "normal",
                                fontName: "Main-Regular"
                            },
                            textit: {
                                variant: "italic",
                                fontName: "Main-Italic"
                            },
                            mathit: {
                                variant: "italic",
                                fontName: "Main-Italic"
                            },
                            mathnormal: {
                                variant: "italic",
                                fontName: "Math-Italic"
                            },
                            mathbb: {
                                variant: "double-struck",
                                fontName: "AMS-Regular"
                            },
                            mathcal: {
                                variant: "script",
                                fontName: "Caligraphic-Regular"
                            },
                            mathfrak: {
                                variant: "fraktur",
                                fontName: "Fraktur-Regular"
                            },
                            mathscr: {
                                variant: "script",
                                fontName: "Script-Regular"
                            },
                            mathsf: {
                                variant: "sans-serif",
                                fontName: "SansSerif-Regular"
                            },
                            mathtt: {
                                variant: "monospace",
                                fontName: "Typewriter-Regular"
                            }
                        },
                        Ze = {
                            vec: ["vec", .471, .714],
                            oiintSize1: ["oiintSize1", .957, .499],
                            oiintSize2: ["oiintSize2", 1.472, .659],
                            oiiintSize1: ["oiiintSize1", 1.304, .499],
                            oiiintSize2: ["oiiintSize2", 1.98, .659],
                            leftParenInner: ["leftParenInner", .875, .3],
                            rightParenInner: ["rightParenInner", .875, .3]
                        },
                        Ke = {
                            fontMap: $e,
                            makeSymbol: Ue,
                            mathsym: function(e, t, r, n) {
                                return void 0 === n && (n = []), "boldsymbol" === r.font && Ve(e, "Main-Bold", t).metrics ? Ue(e, "Main-Bold", t, r, n.concat(["mathbf"])) : "\\" === e || "main" === $[t][e].font ? Ue(e, "Main-Regular", t, r, n) : Ue(e, "AMS-Regular", t, r, n.concat(["amsrm"]))
                            },
                            makeSpan: _e,
                            makeSvgSpan: We,
                            makeLineSpan: function(e, t, r) {
                                var n = _e([e], [], t);
                                return n.height = Math.max(r || t.fontMetrics().defaultRuleThickness, t.minRuleThickness), n.style.borderBottomWidth = n.height + "em", n.maxFontSize = 1, n
                            },
                            makeAnchor: function(e, t, r, n) {
                                var a = new O(e, t, r, n);
                                return Ye(a), a
                            },
                            makeFragment: Xe,
                            wrapFragment: function(e, t) {
                                return e instanceof T ? _e([], [e], t) : e
                            },
                            makeVList: function(e, t) {
                                for (var r = function(e) {
                                        if ("individualShift" === e.positionType) {
                                            for (var t = e.children, r = [t[0]], n = -t[0].shift - t[0].elem.depth, a = n, i = 1; i < t.length; i++) {
                                                var o = -t[i].shift - a - t[i].elem.depth,
                                                    s = o - (t[i - 1].elem.height + t[i - 1].elem.depth);
                                                a += o, r.push({
                                                    type: "kern",
                                                    size: s
                                                }), r.push(t[i])
                                            }
                                            return {
                                                children: r,
                                                depth: n
                                            }
                                        }
                                        var l;
                                        if ("top" === e.positionType) {
                                            for (var h = e.positionData, m = 0; m < e.children.length; m++) {
                                                var c = e.children[m];
                                                h -= "kern" === c.type ? c.size : c.elem.height + c.elem.depth
                                            }
                                            l = h
                                        } else if ("bottom" === e.positionType) l = -e.positionData;
                                        else {
                                            var u = e.children[0];
                                            if ("elem" !== u.type) throw new Error('First child must have type "elem".');
                                            if ("shift" === e.positionType) l = -u.elem.depth - e.positionData;
                                            else {
                                                if ("firstBaseline" !== e.positionType) throw new Error("Invalid positionType " + e.positionType + ".");
                                                l = -u.elem.depth
                                            }
                                        }
                                        return {
                                            children: e.children,
                                            depth: l
                                        }
                                    }(e), n = r.children, a = r.depth, i = 0, o = 0; o < n.length; o++) {
                                    var s = n[o];
                                    if ("elem" === s.type) {
                                        var l = s.elem;
                                        i = Math.max(i, l.maxFontSize, l.height)
                                    }
                                }
                                i += 2;
                                var h = _e(["pstrut"], []);
                                h.style.height = i + "em";
                                for (var m = [], c = a, u = a, p = a, d = 0; d < n.length; d++) {
                                    var f = n[d];
                                    if ("kern" === f.type) p += f.size;
                                    else {
                                        var g = f.elem,
                                            v = f.wrapperClasses || [],
                                            b = f.wrapperStyle || {},
                                            y = _e(v, [h, g], void 0, b);
                                        y.style.top = -i - p - g.depth + "em", f.marginLeft && (y.style.marginLeft = f.marginLeft), f.marginRight && (y.style.marginRight = f.marginRight), m.push(y), p += g.height + g.depth
                                    }
                                    c = Math.min(c, p), u = Math.max(u, p)
                                }
                                var x, w = _e(["vlist"], m);
                                if (w.style.height = u + "em", c < 0) {
                                    var k = _e([], []),
                                        S = _e(["vlist"], [k]);
                                    S.style.height = -c + "em";
                                    var M = _e(["vlist-s"], [new L("\u200b")]);
                                    x = [_e(["vlist-r"], [w, M]), _e(["vlist-r"], [S])]
                                } else x = [_e(["vlist-r"], [w])];
                                var z = _e(["vlist-t"], x);
                                return 2 === x.length && z.classes.push("vlist-t2"), z.height = u, z.depth = -c, z
                            },
                            makeOrd: function(e, t, r) {
                                var n = e.mode,
                                    a = e.text,
                                    i = ["mord"],
                                    s = "math" === n || "text" === n && t.font,
                                    l = s ? t.font : t.fontFamily;
                                if (55349 === a.charCodeAt(0)) {
                                    var h = function(e, t) {
                                            var r = 1024 * (e.charCodeAt(0) - 55296) + (e.charCodeAt(1) - 56320) + 65536,
                                                n = "math" === t ? 0 : 1;
                                            if (119808 <= r && r < 120484) {
                                                var a = Math.floor((r - 119808) / 26);
                                                return [qe[a][2], qe[a][n]]
                                            }
                                            if (120782 <= r && r <= 120831) {
                                                var i = Math.floor((r - 120782) / 10);
                                                return [Ne[i][2], Ne[i][n]]
                                            }
                                            if (120485 === r || 120486 === r) return [qe[0][2], qe[0][n]];
                                            if (120486 < r && r < 120782) return ["", ""];
                                            throw new o("Unsupported character: " + e)
                                        }(a, n),
                                        m = h[0],
                                        c = h[1];
                                    return Ue(a, m, n, t, i.concat(c))
                                }
                                if (l) {
                                    var u, p;
                                    if ("boldsymbol" === l) {
                                        var d = function(e, t, r, n, a) {
                                            return "textord" !== a && Ve(e, "Math-BoldItalic", t).metrics ? {
                                                fontName: "Math-BoldItalic",
                                                fontClass: "boldsymbol"
                                            } : {
                                                fontName: "Main-Bold",
                                                fontClass: "mathbf"
                                            }
                                        }(a, n, 0, 0, r);
                                        u = d.fontName, p = [d.fontClass]
                                    } else s ? (u = $e[l].fontName, p = [l]) : (u = je(l, t.fontWeight, t.fontShape), p = [l, t.fontWeight, t.fontShape]);
                                    if (Ve(a, u, n).metrics) return Ue(a, u, n, t, i.concat(p));
                                    if (ue.hasOwnProperty(a) && "Typewriter" === u.substr(0, 10)) {
                                        for (var f = [], g = 0; g < a.length; g++) f.push(Ue(a[g], u, n, t, i.concat(p)));
                                        return Xe(f)
                                    }
                                }
                                if ("mathord" === r) return Ue(a, "Math-Italic", n, t, i.concat(["mathnormal"]));
                                if ("textord" === r) {
                                    var v = $[n][a] && $[n][a].font;
                                    if ("ams" === v) {
                                        var b = je("amsrm", t.fontWeight, t.fontShape);
                                        return Ue(a, b, n, t, i.concat("amsrm", t.fontWeight, t.fontShape))
                                    }
                                    if ("main" !== v && v) {
                                        var y = je(v, t.fontWeight, t.fontShape);
                                        return Ue(a, y, n, t, i.concat(y, t.fontWeight, t.fontShape))
                                    }
                                    var x = je("textrm", t.fontWeight, t.fontShape);
                                    return Ue(a, x, n, t, i.concat(t.fontWeight, t.fontShape))
                                }
                                throw new Error("unexpected type: " + r + " in makeOrd")
                            },
                            makeGlue: function(e, t) {
                                var r = _e(["mspace"], [], t),
                                    n = Fe(e, t);
                                return r.style.marginRight = n + "em", r
                            },
                            staticSvg: function(e, t) {
                                var r = Ze[e],
                                    n = r[0],
                                    a = r[1],
                                    i = r[2],
                                    o = new D(n),
                                    s = new P([o], {
                                        width: a + "em",
                                        height: i + "em",
                                        style: "width:" + a + "em",
                                        viewBox: "0 0 " + 1e3 * a + " " + 1e3 * i,
                                        preserveAspectRatio: "xMinYMin"
                                    }),
                                    l = We(["overlay"], [s], t);
                                return l.height = i, l.style.height = i + "em", l.style.width = a + "em", l
                            },
                            svgData: Ze,
                            tryCombineChars: function(e) {
                                for (var t = 0; t < e.length - 1; t++) {
                                    var r = e[t],
                                        n = e[t + 1];
                                    r instanceof L && n instanceof L && Ge(r, n) && (r.text += n.text, r.height = Math.max(r.height, n.height), r.depth = Math.max(r.depth, n.depth), r.italic = n.italic, e.splice(t + 1, 1), t--)
                                }
                                return e
                            }
                        },
                        Je = {
                            number: 3,
                            unit: "mu"
                        },
                        Qe = {
                            number: 4,
                            unit: "mu"
                        },
                        et = {
                            number: 5,
                            unit: "mu"
                        },
                        tt = {
                            mord: {
                                mop: Je,
                                mbin: Qe,
                                mrel: et,
                                minner: Je
                            },
                            mop: {
                                mord: Je,
                                mop: Je,
                                mrel: et,
                                minner: Je
                            },
                            mbin: {
                                mord: Qe,
                                mop: Qe,
                                mopen: Qe,
                                minner: Qe
                            },
                            mrel: {
                                mord: et,
                                mop: et,
                                mopen: et,
                                minner: et
                            },
                            mopen: {},
                            mclose: {
                                mop: Je,
                                mbin: Qe,
                                mrel: et,
                                minner: Je
                            },
                            mpunct: {
                                mord: Je,
                                mop: Je,
                                mrel: et,
                                mopen: Je,
                                mclose: Je,
                                mpunct: Je,
                                minner: Je
                            },
                            minner: {
                                mord: Je,
                                mop: Je,
                                mbin: Qe,
                                mrel: et,
                                mopen: Je,
                                mpunct: Je,
                                minner: Je
                            }
                        },
                        rt = {
                            mord: {
                                mop: Je
                            },
                            mop: {
                                mord: Je,
                                mop: Je
                            },
                            mbin: {},
                            mrel: {},
                            mopen: {},
                            mclose: {
                                mop: Je
                            },
                            mpunct: {},
                            minner: {
                                mop: Je
                            }
                        },
                        nt = {},
                        at = {},
                        it = {};

                    function ot(e) {
                        for (var t = e.type, r = e.names, n = e.props, a = e.handler, i = e.htmlBuilder, o = e.mathmlBuilder, s = {
                                type: t,
                                numArgs: n.numArgs,
                                argTypes: n.argTypes,
                                greediness: void 0 === n.greediness ? 1 : n.greediness,
                                allowedInText: !!n.allowedInText,
                                allowedInMath: void 0 === n.allowedInMath || n.allowedInMath,
                                numOptionalArgs: n.numOptionalArgs || 0,
                                infix: !!n.infix,
                                handler: a
                            }, l = 0; l < r.length; ++l) nt[r[l]] = s;
                        t && (i && (at[t] = i), o && (it[t] = o))
                    }

                    function st(e) {
                        ot({
                            type: e.type,
                            names: [],
                            props: {
                                numArgs: 0
                            },
                            handler: function() {
                                throw new Error("Should never be called.")
                            },
                            htmlBuilder: e.htmlBuilder,
                            mathmlBuilder: e.mathmlBuilder
                        })
                    }
                    var lt = function(e) {
                            return "ordgroup" === e.type ? e.body : [e]
                        },
                        ht = Ke.makeSpan,
                        mt = ["leftmost", "mbin", "mopen", "mrel", "mop", "mpunct"],
                        ct = ["rightmost", "mrel", "mclose", "mpunct"],
                        ut = {
                            display: w.DISPLAY,
                            text: w.TEXT,
                            script: w.SCRIPT,
                            scriptscript: w.SCRIPTSCRIPT
                        },
                        pt = {
                            mord: "mord",
                            mop: "mop",
                            mbin: "mbin",
                            mrel: "mrel",
                            mopen: "mopen",
                            mclose: "mclose",
                            mpunct: "mpunct",
                            minner: "minner"
                        },
                        dt = function(e, t, r, n) {
                            void 0 === n && (n = [null, null]);
                            for (var a = [], i = 0; i < e.length; i++) {
                                var o = xt(e[i], t);
                                if (o instanceof T) {
                                    var s = o.children;
                                    a.push.apply(a, s)
                                } else a.push(o)
                            }
                            if (!r) return a;
                            var l = t;
                            if (1 === e.length) {
                                var h = e[0];
                                "sizing" === h.type ? l = t.havingSize(h.size) : "styling" === h.type && (l = t.havingStyle(ut[h.style]))
                            }
                            var m = ht([n[0] || "leftmost"], [], t),
                                u = ht([n[1] || "rightmost"], [], t),
                                p = "root" === r;
                            return ft(a, (function(e, t) {
                                var r = t.classes[0],
                                    n = e.classes[0];
                                "mbin" === r && c.contains(ct, n) ? t.classes[0] = "mord" : "mbin" === n && c.contains(mt, r) && (e.classes[0] = "mord")
                            }), {
                                node: m
                            }, u, p), ft(a, (function(e, t) {
                                var r = bt(t),
                                    n = bt(e),
                                    a = r && n ? e.hasClass("mtight") ? rt[r][n] : tt[r][n] : null;
                                if (a) return Ke.makeGlue(a, l)
                            }), {
                                node: m
                            }, u, p), a
                        },
                        ft = function e(t, r, n, a, i) {
                            a && t.push(a);
                            for (var o = 0; o < t.length; o++) {
                                var s = t[o],
                                    l = gt(s);
                                if (l) e(l.children, r, n, null, i);
                                else {
                                    var h = !s.hasClass("mspace");
                                    if (h) {
                                        var m = r(s, n.node);
                                        m && (n.insertAfter ? n.insertAfter(m) : (t.unshift(m), o++))
                                    }
                                    h ? n.node = s : i && s.hasClass("newline") && (n.node = ht(["leftmost"])), n.insertAfter = function(e) {
                                        return function(r) {
                                            t.splice(e + 1, 0, r), o++
                                        }
                                    }(o)
                                }
                            }
                            a && t.pop()
                        },
                        gt = function(e) {
                            return e instanceof T || e instanceof O || e instanceof I && e.hasClass("enclosing") ? e : null
                        },
                        vt = function e(t, r) {
                            var n = gt(t);
                            if (n) {
                                var a = n.children;
                                if (a.length) {
                                    if ("right" === r) return e(a[a.length - 1], "right");
                                    if ("left" === r) return e(a[0], "left")
                                }
                            }
                            return t
                        },
                        bt = function(e, t) {
                            return e ? (t && (e = vt(e, t)), pt[e.classes[0]] || null) : null
                        },
                        yt = function(e, t) {
                            var r = ["nulldelimiter"].concat(e.baseSizingClasses());
                            return ht(t.concat(r))
                        },
                        xt = function(e, t, r) {
                            if (!e) return ht();
                            if (at[e.type]) {
                                var n = at[e.type](e, t);
                                if (r && t.size !== r.size) {
                                    n = ht(t.sizingClasses(r), [n], t);
                                    var a = t.sizeMultiplier / r.sizeMultiplier;
                                    n.height *= a, n.depth *= a
                                }
                                return n
                            }
                            throw new o("Got group of unknown type: '" + e.type + "'")
                        };

                    function wt(e, t) {
                        var r = ht(["base"], e, t),
                            n = ht(["strut"]);
                        return n.style.height = r.height + r.depth + "em", n.style.verticalAlign = -r.depth + "em", r.children.unshift(n), r
                    }

                    function kt(e, t) {
                        var r = null;
                        1 === e.length && "tag" === e[0].type && (r = e[0].tag, e = e[0].body);
                        for (var n, a = dt(e, t, "root"), i = [], o = [], s = 0; s < a.length; s++)
                            if (o.push(a[s]), a[s].hasClass("mbin") || a[s].hasClass("mrel") || a[s].hasClass("allowbreak")) {
                                for (var l = !1; s < a.length - 1 && a[s + 1].hasClass("mspace") && !a[s + 1].hasClass("newline");) s++, o.push(a[s]), a[s].hasClass("nobreak") && (l = !0);
                                l || (i.push(wt(o, t)), o = [])
                            } else a[s].hasClass("newline") && (o.pop(), o.length > 0 && (i.push(wt(o, t)), o = []), i.push(a[s]));
                        o.length > 0 && i.push(wt(o, t)), r && ((n = wt(dt(r, t, !0))).classes = ["tag"], i.push(n));
                        var h = ht(["katex-html"], i);
                        if (h.setAttribute("aria-hidden", "true"), n) {
                            var m = n.children[0];
                            m.style.height = h.height + h.depth + "em", m.style.verticalAlign = -h.depth + "em"
                        }
                        return h
                    }

                    function St(e) {
                        return new T(e)
                    }
                    var Mt = function() {
                            function e(e, t) {
                                this.type = void 0, this.attributes = void 0, this.children = void 0, this.type = e, this.attributes = {}, this.children = t || []
                            }
                            var t = e.prototype;
                            return t.setAttribute = function(e, t) {
                                this.attributes[e] = t
                            }, t.getAttribute = function(e) {
                                return this.attributes[e]
                            }, t.toNode = function() {
                                var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", this.type);
                                for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && e.setAttribute(t, this.attributes[t]);
                                for (var r = 0; r < this.children.length; r++) e.appendChild(this.children[r].toNode());
                                return e
                            }, t.toMarkup = function() {
                                var e = "<" + this.type;
                                for (var t in this.attributes) Object.prototype.hasOwnProperty.call(this.attributes, t) && (e += " " + t + '="', e += c.escape(this.attributes[t]), e += '"');
                                e += ">";
                                for (var r = 0; r < this.children.length; r++) e += this.children[r].toMarkup();
                                return e += "</" + this.type + ">"
                            }, t.toText = function() {
                                return this.children.map((function(e) {
                                    return e.toText()
                                })).join("")
                            }, e
                        }(),
                        zt = function() {
                            function e(e) {
                                this.text = void 0, this.text = e
                            }
                            var t = e.prototype;
                            return t.toNode = function() {
                                return document.createTextNode(this.text)
                            }, t.toMarkup = function() {
                                return c.escape(this.toText())
                            }, t.toText = function() {
                                return this.text
                            }, e
                        }(),
                        At = {
                            MathNode: Mt,
                            TextNode: zt,
                            SpaceNode: function() {
                                function e(e) {
                                    this.width = void 0, this.character = void 0, this.width = e, this.character = e >= .05555 && e <= .05556 ? "\u200a" : e >= .1666 && e <= .1667 ? "\u2009" : e >= .2222 && e <= .2223 ? "\u2005" : e >= .2777 && e <= .2778 ? "\u2005\u200a" : e >= -.05556 && e <= -.05555 ? "\u200a\u2063" : e >= -.1667 && e <= -.1666 ? "\u2009\u2063" : e >= -.2223 && e <= -.2222 ? "\u205f\u2063" : e >= -.2778 && e <= -.2777 ? "\u2005\u2063" : null
                                }
                                var t = e.prototype;
                                return t.toNode = function() {
                                    if (this.character) return document.createTextNode(this.character);
                                    var e = document.createElementNS("http://www.w3.org/1998/Math/MathML", "mspace");
                                    return e.setAttribute("width", this.width + "em"), e
                                }, t.toMarkup = function() {
                                    return this.character ? "<mtext>" + this.character + "</mtext>" : '<mspace width="' + this.width + 'em"/>'
                                }, t.toText = function() {
                                    return this.character ? this.character : " "
                                }, e
                            }(),
                            newDocumentFragment: St
                        },
                        Tt = function(e, t, r) {
                            return !$[t][e] || !$[t][e].replace || 55349 === e.charCodeAt(0) || ue.hasOwnProperty(e) && r && (r.fontFamily && "tt" === r.fontFamily.substr(4, 2) || r.font && "tt" === r.font.substr(4, 2)) || (e = $[t][e].replace), new At.TextNode(e)
                        },
                        Bt = function(e) {
                            return 1 === e.length ? e[0] : new At.MathNode("mrow", e)
                        },
                        Ct = function(e, t) {
                            if ("texttt" === t.fontFamily) return "monospace";
                            if ("textsf" === t.fontFamily) return "textit" === t.fontShape && "textbf" === t.fontWeight ? "sans-serif-bold-italic" : "textit" === t.fontShape ? "sans-serif-italic" : "textbf" === t.fontWeight ? "bold-sans-serif" : "sans-serif";
                            if ("textit" === t.fontShape && "textbf" === t.fontWeight) return "bold-italic";
                            if ("textit" === t.fontShape) return "italic";
                            if ("textbf" === t.fontWeight) return "bold";
                            var r = t.font;
                            if (!r || "mathnormal" === r) return null;
                            var n = e.mode;
                            if ("mathit" === r) return "italic";
                            if ("boldsymbol" === r) return "textord" === e.type ? "bold" : "bold-italic";
                            if ("mathbf" === r) return "bold";
                            if ("mathbb" === r) return "double-struck";
                            if ("mathfrak" === r) return "fraktur";
                            if ("mathscr" === r || "mathcal" === r) return "script";
                            if ("mathsf" === r) return "sans-serif";
                            if ("mathtt" === r) return "monospace";
                            var a = e.text;
                            return c.contains(["\\imath", "\\jmath"], a) ? null : ($[n][a] && $[n][a].replace && (a = $[n][a].replace), Y(a, Ke.fontMap[r].fontName, n) ? Ke.fontMap[r].variant : null)
                        },
                        qt = function(e, t, r) {
                            if (1 === e.length) {
                                var n = It(e[0], t);
                                return r && n instanceof Mt && "mo" === n.type && (n.setAttribute("lspace", "0em"), n.setAttribute("rspace", "0em")), [n]
                            }
                            for (var a, i = [], o = 0; o < e.length; o++) {
                                var s = It(e[o], t);
                                if (s instanceof Mt && a instanceof Mt) {
                                    if ("mtext" === s.type && "mtext" === a.type && s.getAttribute("mathvariant") === a.getAttribute("mathvariant")) {
                                        var l;
                                        (l = a.children).push.apply(l, s.children);
                                        continue
                                    }
                                    if ("mn" === s.type && "mn" === a.type) {
                                        var h;
                                        (h = a.children).push.apply(h, s.children);
                                        continue
                                    }
                                    if ("mi" === s.type && 1 === s.children.length && "mn" === a.type) {
                                        var m = s.children[0];
                                        if (m instanceof zt && "." === m.text) {
                                            var c;
                                            (c = a.children).push.apply(c, s.children);
                                            continue
                                        }
                                    } else if ("mi" === a.type && 1 === a.children.length) {
                                        var u = a.children[0];
                                        if (u instanceof zt && "\u0338" === u.text && ("mo" === s.type || "mi" === s.type || "mn" === s.type)) {
                                            var p = s.children[0];
                                            p instanceof zt && p.text.length > 0 && (p.text = p.text.slice(0, 1) + "\u0338" + p.text.slice(1), i.pop())
                                        }
                                    }
                                }
                                i.push(s), a = s
                            }
                            return i
                        },
                        Nt = function(e, t, r) {
                            return Bt(qt(e, t, r))
                        },
                        It = function(e, t) {
                            if (!e) return new At.MathNode("mrow");
                            if (it[e.type]) return it[e.type](e, t);
                            throw new o("Got group of unknown type: '" + e.type + "'")
                        };

                    function Ot(e, t, r, n, a) {
                        var i, o = qt(e, r);
                        i = 1 === o.length && o[0] instanceof Mt && c.contains(["mrow", "mtable"], o[0].type) ? o[0] : new At.MathNode("mrow", o);
                        var s = new At.MathNode("annotation", [new At.TextNode(t)]);
                        s.setAttribute("encoding", "application/x-tex");
                        var l = new At.MathNode("semantics", [i, s]),
                            h = new At.MathNode("math", [l]);
                        h.setAttribute("xmlns", "http://www.w3.org/1998/Math/MathML"), n && h.setAttribute("display", "block");
                        var m = a ? "katex" : "katex-mathml";
                        return Ke.makeSpan([m], [h])
                    }
                    var Rt = function(e) {
                            return new Le({
                                style: e.displayMode ? w.DISPLAY : w.TEXT,
                                maxSize: e.maxSize,
                                minRuleThickness: e.minRuleThickness
                            })
                        },
                        Et = function(e, t) {
                            if (t.displayMode) {
                                var r = ["katex-display"];
                                t.leqno && r.push("leqno"), t.fleqn && r.push("fleqn"), e = Ke.makeSpan(r, [e])
                            }
                            return e
                        },
                        Lt = function(e, t, r) {
                            var n, a = Rt(r);
                            if ("mathml" === r.output) return Ot(e, t, a, r.displayMode, !0);
                            if ("html" === r.output) {
                                var i = kt(e, a);
                                n = Ke.makeSpan(["katex"], [i])
                            } else {
                                var o = Ot(e, t, a, r.displayMode, !1),
                                    s = kt(e, a);
                                n = Ke.makeSpan(["katex"], [o, s])
                            }
                            return Et(n, r)
                        },
                        Pt = {
                            widehat: "^",
                            widecheck: "\u02c7",
                            widetilde: "~",
                            utilde: "~",
                            overleftarrow: "\u2190",
                            underleftarrow: "\u2190",
                            xleftarrow: "\u2190",
                            overrightarrow: "\u2192",
                            underrightarrow: "\u2192",
                            xrightarrow: "\u2192",
                            underbrace: "\u23df",
                            overbrace: "\u23de",
                            overgroup: "\u23e0",
                            undergroup: "\u23e1",
                            overleftrightarrow: "\u2194",
                            underleftrightarrow: "\u2194",
                            xleftrightarrow: "\u2194",
                            Overrightarrow: "\u21d2",
                            xRightarrow: "\u21d2",
                            overleftharpoon: "\u21bc",
                            xleftharpoonup: "\u21bc",
                            overrightharpoon: "\u21c0",
                            xrightharpoonup: "\u21c0",
                            xLeftarrow: "\u21d0",
                            xLeftrightarrow: "\u21d4",
                            xhookleftarrow: "\u21a9",
                            xhookrightarrow: "\u21aa",
                            xmapsto: "\u21a6",
                            xrightharpoondown: "\u21c1",
                            xleftharpoondown: "\u21bd",
                            xrightleftharpoons: "\u21cc",
                            xleftrightharpoons: "\u21cb",
                            xtwoheadleftarrow: "\u219e",
                            xtwoheadrightarrow: "\u21a0",
                            xlongequal: "=",
                            xtofrom: "\u21c4",
                            xrightleftarrows: "\u21c4",
                            xrightequilibrium: "\u21cc",
                            xleftequilibrium: "\u21cb"
                        },
                        Dt = {
                            overrightarrow: [
                                ["rightarrow"], .888, 522, "xMaxYMin"
                            ],
                            overleftarrow: [
                                ["leftarrow"], .888, 522, "xMinYMin"
                            ],
                            underrightarrow: [
                                ["rightarrow"], .888, 522, "xMaxYMin"
                            ],
                            underleftarrow: [
                                ["leftarrow"], .888, 522, "xMinYMin"
                            ],
                            xrightarrow: [
                                ["rightarrow"], 1.469, 522, "xMaxYMin"
                            ],
                            xleftarrow: [
                                ["leftarrow"], 1.469, 522, "xMinYMin"
                            ],
                            Overrightarrow: [
                                ["doublerightarrow"], .888, 560, "xMaxYMin"
                            ],
                            xRightarrow: [
                                ["doublerightarrow"], 1.526, 560, "xMaxYMin"
                            ],
                            xLeftarrow: [
                                ["doubleleftarrow"], 1.526, 560, "xMinYMin"
                            ],
                            overleftharpoon: [
                                ["leftharpoon"], .888, 522, "xMinYMin"
                            ],
                            xleftharpoonup: [
                                ["leftharpoon"], .888, 522, "xMinYMin"
                            ],
                            xleftharpoondown: [
                                ["leftharpoondown"], .888, 522, "xMinYMin"
                            ],
                            overrightharpoon: [
                                ["rightharpoon"], .888, 522, "xMaxYMin"
                            ],
                            xrightharpoonup: [
                                ["rightharpoon"], .888, 522, "xMaxYMin"
                            ],
                            xrightharpoondown: [
                                ["rightharpoondown"], .888, 522, "xMaxYMin"
                            ],
                            xlongequal: [
                                ["longequal"], .888, 334, "xMinYMin"
                            ],
                            xtwoheadleftarrow: [
                                ["twoheadleftarrow"], .888, 334, "xMinYMin"
                            ],
                            xtwoheadrightarrow: [
                                ["twoheadrightarrow"], .888, 334, "xMaxYMin"
                            ],
                            overleftrightarrow: [
                                ["leftarrow", "rightarrow"], .888, 522
                            ],
                            overbrace: [
                                ["leftbrace", "midbrace", "rightbrace"], 1.6, 548
                            ],
                            underbrace: [
                                ["leftbraceunder", "midbraceunder", "rightbraceunder"], 1.6, 548
                            ],
                            underleftrightarrow: [
                                ["leftarrow", "rightarrow"], .888, 522
                            ],
                            xleftrightarrow: [
                                ["leftarrow", "rightarrow"], 1.75, 522
                            ],
                            xLeftrightarrow: [
                                ["doubleleftarrow", "doublerightarrow"], 1.75, 560
                            ],
                            xrightleftharpoons: [
                                ["leftharpoondownplus", "rightharpoonplus"], 1.75, 716
                            ],
                            xleftrightharpoons: [
                                ["leftharpoonplus", "rightharpoondownplus"], 1.75, 716
                            ],
                            xhookleftarrow: [
                                ["leftarrow", "righthook"], 1.08, 522
                            ],
                            xhookrightarrow: [
                                ["lefthook", "rightarrow"], 1.08, 522
                            ],
                            overlinesegment: [
                                ["leftlinesegment", "rightlinesegment"], .888, 522
                            ],
                            underlinesegment: [
                                ["leftlinesegment", "rightlinesegment"], .888, 522
                            ],
                            overgroup: [
                                ["leftgroup", "rightgroup"], .888, 342
                            ],
                            undergroup: [
                                ["leftgroupunder", "rightgroupunder"], .888, 342
                            ],
                            xmapsto: [
                                ["leftmapsto", "rightarrow"], 1.5, 522
                            ],
                            xtofrom: [
                                ["leftToFrom", "rightToFrom"], 1.75, 528
                            ],
                            xrightleftarrows: [
                                ["baraboveleftarrow", "rightarrowabovebar"], 1.75, 901
                            ],
                            xrightequilibrium: [
                                ["baraboveshortleftharpoon", "rightharpoonaboveshortbar"], 1.75, 716
                            ],
                            xleftequilibrium: [
                                ["shortbaraboveleftharpoon", "shortrightharpoonabovebar"], 1.75, 716
                            ]
                        },
                        Ht = function(e, t, r, n) {
                            var a, i = e.height + e.depth + 2 * r;
                            if (/fbox|color/.test(t)) {
                                if (a = Ke.makeSpan(["stretchy", t], [], n), "fbox" === t) {
                                    var o = n.color && n.getColor();
                                    o && (a.style.borderColor = o)
                                }
                            } else {
                                var s = [];
                                /^[bx]cancel$/.test(t) && s.push(new H({
                                    x1: "0",
                                    y1: "0",
                                    x2: "100%",
                                    y2: "100%",
                                    "stroke-width": "0.046em"
                                })), /^x?cancel$/.test(t) && s.push(new H({
                                    x1: "0",
                                    y1: "100%",
                                    x2: "100%",
                                    y2: "0",
                                    "stroke-width": "0.046em"
                                }));
                                var l = new P(s, {
                                    width: "100%",
                                    height: i + "em"
                                });
                                a = Ke.makeSvgSpan([], [l], n)
                            }
                            return a.height = i, a.style.height = i + "em", a
                        },
                        Ft = function(e) {
                            var t = new At.MathNode("mo", [new At.TextNode(Pt[e.substr(1)])]);
                            return t.setAttribute("stretchy", "true"), t
                        },
                        Vt = function(e, t) {
                            var r = function() {
                                    var r = 4e5,
                                        n = e.label.substr(1);
                                    if (c.contains(["widehat", "widecheck", "widetilde", "utilde"], n)) {
                                        var a, i, o, s = "ordgroup" === (d = e.base).type ? d.body.length : 1;
                                        if (s > 5) "widehat" === n || "widecheck" === n ? (a = 420, r = 2364, o = .42, i = n + "4") : (a = 312, r = 2340, o = .34, i = "tilde4");
                                        else {
                                            var l = [1, 1, 2, 2, 3, 3][s];
                                            "widehat" === n || "widecheck" === n ? (r = [0, 1062, 2364, 2364, 2364][l], a = [0, 239, 300, 360, 420][l], o = [0, .24, .3, .3, .36, .42][l], i = n + l) : (r = [0, 600, 1033, 2339, 2340][l], a = [0, 260, 286, 306, 312][l], o = [0, .26, .286, .3, .306, .34][l], i = "tilde" + l)
                                        }
                                        var h = new D(i),
                                            m = new P([h], {
                                                width: "100%",
                                                height: o + "em",
                                                viewBox: "0 0 " + r + " " + a,
                                                preserveAspectRatio: "none"
                                            });
                                        return {
                                            span: Ke.makeSvgSpan([], [m], t),
                                            minWidth: 0,
                                            height: o
                                        }
                                    }
                                    var u, p, d, f = [],
                                        g = Dt[n],
                                        v = g[0],
                                        b = g[1],
                                        y = g[2],
                                        x = y / 1e3,
                                        w = v.length;
                                    if (1 === w) u = ["hide-tail"], p = [g[3]];
                                    else if (2 === w) u = ["halfarrow-left", "halfarrow-right"], p = ["xMinYMin", "xMaxYMin"];
                                    else {
                                        if (3 !== w) throw new Error("Correct katexImagesData or update code here to support\n                    " + w + " children.");
                                        u = ["brace-left", "brace-center", "brace-right"], p = ["xMinYMin", "xMidYMin", "xMaxYMin"]
                                    }
                                    for (var k = 0; k < w; k++) {
                                        var S = new D(v[k]),
                                            M = new P([S], {
                                                width: "400em",
                                                height: x + "em",
                                                viewBox: "0 0 " + r + " " + y,
                                                preserveAspectRatio: p[k] + " slice"
                                            }),
                                            z = Ke.makeSvgSpan([u[k]], [M], t);
                                        if (1 === w) return {
                                            span: z,
                                            minWidth: b,
                                            height: x
                                        };
                                        z.style.height = x + "em", f.push(z)
                                    }
                                    return {
                                        span: Ke.makeSpan(["stretchy"], f, t),
                                        minWidth: b,
                                        height: x
                                    }
                                }(),
                                n = r.span,
                                a = r.minWidth,
                                i = r.height;
                            return n.height = i, n.style.height = i + "em", a > 0 && (n.style.minWidth = a + "em"), n
                        };

                    function Ut(e, t) {
                        if (!e || e.type !== t) throw new Error("Expected node of type " + t + ", but got " + (e ? "node of type " + e.type : String(e)));
                        return e
                    }

                    function Gt(e) {
                        var t = Yt(e);
                        if (!t) throw new Error("Expected node of symbol group type, but got " + (e ? "node of type " + e.type : String(e)));
                        return t
                    }

                    function Yt(e) {
                        return e && ("atom" === e.type || X.hasOwnProperty(e.type)) ? e : null
                    }
                    var _t = function(e, t) {
                            var r, n, a;
                            e && "supsub" === e.type ? (r = (n = Ut(e.base, "accent")).base, e.base = r, a = function(e) {
                                if (e instanceof I) return e;
                                throw new Error("Expected span<HtmlDomNode> but got " + String(e) + ".")
                            }(xt(e, t)), e.base = n) : r = (n = Ut(e, "accent")).base;
                            var i = xt(r, t.havingCrampedStyle()),
                                o = 0;
                            if (n.isShifty && c.isCharacterBox(r)) {
                                var s = c.getBaseElem(r);
                                o = F(xt(s, t.havingCrampedStyle())).skew
                            }
                            var l, h = Math.min(i.height, t.fontMetrics().xHeight);
                            if (n.isStretchy) l = Vt(n, t), l = Ke.makeVList({
                                positionType: "firstBaseline",
                                children: [{
                                    type: "elem",
                                    elem: i
                                }, {
                                    type: "elem",
                                    elem: l,
                                    wrapperClasses: ["svg-align"],
                                    wrapperStyle: o > 0 ? {
                                        width: "calc(100% - " + 2 * o + "em)",
                                        marginLeft: 2 * o + "em"
                                    } : void 0
                                }]
                            }, t);
                            else {
                                var m, u;
                                "\\vec" === n.label ? (m = Ke.staticSvg("vec", t), u = Ke.svgData.vec[1]) : ((m = F(m = Ke.makeOrd({
                                    mode: n.mode,
                                    text: n.label
                                }, t, "textord"))).italic = 0, u = m.width), l = Ke.makeSpan(["accent-body"], [m]);
                                var p = "\\textcircled" === n.label;
                                p && (l.classes.push("accent-full"), h = i.height);
                                var d = o;
                                p || (d -= u / 2), l.style.left = d + "em", "\\textcircled" === n.label && (l.style.top = ".2em"), l = Ke.makeVList({
                                    positionType: "firstBaseline",
                                    children: [{
                                        type: "elem",
                                        elem: i
                                    }, {
                                        type: "kern",
                                        size: -h
                                    }, {
                                        type: "elem",
                                        elem: l
                                    }]
                                }, t)
                            }
                            var f = Ke.makeSpan(["mord", "accent"], [l], t);
                            return a ? (a.children[0] = f, a.height = Math.max(f.height, a.height), a.classes[0] = "mord", a) : f
                        },
                        Wt = function(e, t) {
                            var r = e.isStretchy ? Ft(e.label) : new At.MathNode("mo", [Tt(e.label, e.mode)]),
                                n = new At.MathNode("mover", [It(e.base, t), r]);
                            return n.setAttribute("accent", "true"), n
                        },
                        Xt = new RegExp(["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring"].map((function(e) {
                            return "\\" + e
                        })).join("|"));
                    ot({
                        type: "accent",
                        names: ["\\acute", "\\grave", "\\ddot", "\\tilde", "\\bar", "\\breve", "\\check", "\\hat", "\\vec", "\\dot", "\\mathring", "\\widecheck", "\\widehat", "\\widetilde", "\\overrightarrow", "\\overleftarrow", "\\Overrightarrow", "\\overleftrightarrow", "\\overgroup", "\\overlinesegment", "\\overleftharpoon", "\\overrightharpoon"],
                        props: {
                            numArgs: 1
                        },
                        handler: function(e, t) {
                            var r = t[0],
                                n = !Xt.test(e.funcName),
                                a = !n || "\\widehat" === e.funcName || "\\widetilde" === e.funcName || "\\widecheck" === e.funcName;
                            return {
                                type: "accent",
                                mode: e.parser.mode,
                                label: e.funcName,
                                isStretchy: n,
                                isShifty: a,
                                base: r
                            }
                        },
                        htmlBuilder: _t,
                        mathmlBuilder: Wt
                    }), ot({
                        type: "accent",
                        names: ["\\'", "\\`", "\\^", "\\~", "\\=", "\\u", "\\.", '\\"', "\\r", "\\H", "\\v", "\\textcircled"],
                        props: {
                            numArgs: 1,
                            allowedInText: !0,
                            allowedInMath: !1
                        },
                        handler: function(e, t) {
                            var r = t[0];
                            return {
                                type: "accent",
                                mode: e.parser.mode,
                                label: e.funcName,
                                isStretchy: !1,
                                isShifty: !0,
                                base: r
                            }
                        },
                        htmlBuilder: _t,
                        mathmlBuilder: Wt
                    }), ot({
                        type: "accentUnder",
                        names: ["\\underleftarrow", "\\underrightarrow", "\\underleftrightarrow", "\\undergroup", "\\underlinesegment", "\\utilde"],
                        props: {
                            numArgs: 1
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = e.funcName,
                                a = t[0];
                            return {
                                type: "accentUnder",
                                mode: r.mode,
                                label: n,
                                base: a
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = xt(e.base, t),
                                n = Vt(e, t),
                                a = "\\utilde" === e.label ? .12 : 0,
                                i = Ke.makeVList({
                                    positionType: "top",
                                    positionData: r.height,
                                    children: [{
                                        type: "elem",
                                        elem: n,
                                        wrapperClasses: ["svg-align"]
                                    }, {
                                        type: "kern",
                                        size: a
                                    }, {
                                        type: "elem",
                                        elem: r
                                    }]
                                }, t);
                            return Ke.makeSpan(["mord", "accentunder"], [i], t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = Ft(e.label),
                                n = new At.MathNode("munder", [It(e.base, t), r]);
                            return n.setAttribute("accentunder", "true"), n
                        }
                    });
                    var jt = function(e) {
                        var t = new At.MathNode("mpadded", e ? [e] : []);
                        return t.setAttribute("width", "+0.6em"), t.setAttribute("lspace", "0.3em"), t
                    };
                    ot({
                        type: "xArrow",
                        names: ["\\xleftarrow", "\\xrightarrow", "\\xLeftarrow", "\\xRightarrow", "\\xleftrightarrow", "\\xLeftrightarrow", "\\xhookleftarrow", "\\xhookrightarrow", "\\xmapsto", "\\xrightharpoondown", "\\xrightharpoonup", "\\xleftharpoondown", "\\xleftharpoonup", "\\xrightleftharpoons", "\\xleftrightharpoons", "\\xlongequal", "\\xtwoheadrightarrow", "\\xtwoheadleftarrow", "\\xtofrom", "\\xrightleftarrows", "\\xrightequilibrium", "\\xleftequilibrium"],
                        props: {
                            numArgs: 1,
                            numOptionalArgs: 1
                        },
                        handler: function(e, t, r) {
                            var n = e.parser,
                                a = e.funcName;
                            return {
                                type: "xArrow",
                                mode: n.mode,
                                label: a,
                                body: t[0],
                                below: r[0]
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r, n = t.style,
                                a = t.havingStyle(n.sup()),
                                i = Ke.wrapFragment(xt(e.body, a, t), t);
                            i.classes.push("x-arrow-pad"), e.below && (a = t.havingStyle(n.sub()), (r = Ke.wrapFragment(xt(e.below, a, t), t)).classes.push("x-arrow-pad"));
                            var o, s = Vt(e, t),
                                l = -t.fontMetrics().axisHeight + .5 * s.height,
                                h = -t.fontMetrics().axisHeight - .5 * s.height - .111;
                            if ((i.depth > .25 || "\\xleftequilibrium" === e.label) && (h -= i.depth), r) {
                                var m = -t.fontMetrics().axisHeight + r.height + .5 * s.height + .111;
                                o = Ke.makeVList({
                                    positionType: "individualShift",
                                    children: [{
                                        type: "elem",
                                        elem: i,
                                        shift: h
                                    }, {
                                        type: "elem",
                                        elem: s,
                                        shift: l
                                    }, {
                                        type: "elem",
                                        elem: r,
                                        shift: m
                                    }]
                                }, t)
                            } else o = Ke.makeVList({
                                positionType: "individualShift",
                                children: [{
                                    type: "elem",
                                    elem: i,
                                    shift: h
                                }, {
                                    type: "elem",
                                    elem: s,
                                    shift: l
                                }]
                            }, t);
                            return o.children[0].children[0].children[1].classes.push("svg-align"), Ke.makeSpan(["mrel", "x-arrow"], [o], t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r, n = Ft(e.label);
                            if (e.body) {
                                var a = jt(It(e.body, t));
                                if (e.below) {
                                    var i = jt(It(e.below, t));
                                    r = new At.MathNode("munderover", [n, i, a])
                                } else r = new At.MathNode("mover", [n, a])
                            } else if (e.below) {
                                var o = jt(It(e.below, t));
                                r = new At.MathNode("munder", [n, o])
                            } else r = jt(), r = new At.MathNode("mover", [n, r]);
                            return r
                        }
                    }), ot({
                        type: "textord",
                        names: ["\\@char"],
                        props: {
                            numArgs: 1,
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            for (var r = e.parser, n = Ut(t[0], "ordgroup").body, a = "", i = 0; i < n.length; i++) a += Ut(n[i], "textord").text;
                            var s = parseInt(a);
                            if (isNaN(s)) throw new o("\\@char has non-numeric argument " + a);
                            return {
                                type: "textord",
                                mode: r.mode,
                                text: String.fromCharCode(s)
                            }
                        }
                    });
                    var $t = function(e, t) {
                            var r = dt(e.body, t.withColor(e.color), !1);
                            return Ke.makeFragment(r)
                        },
                        Zt = function(e, t) {
                            var r = qt(e.body, t.withColor(e.color)),
                                n = new At.MathNode("mstyle", r);
                            return n.setAttribute("mathcolor", e.color), n
                        };
                    ot({
                        type: "color",
                        names: ["\\textcolor"],
                        props: {
                            numArgs: 2,
                            allowedInText: !0,
                            greediness: 3,
                            argTypes: ["color", "original"]
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = Ut(t[0], "color-token").color,
                                a = t[1];
                            return {
                                type: "color",
                                mode: r.mode,
                                color: n,
                                body: lt(a)
                            }
                        },
                        htmlBuilder: $t,
                        mathmlBuilder: Zt
                    }), ot({
                        type: "color",
                        names: ["\\color"],
                        props: {
                            numArgs: 1,
                            allowedInText: !0,
                            greediness: 3,
                            argTypes: ["color"]
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = e.breakOnTokenText,
                                a = Ut(t[0], "color-token").color;
                            r.gullet.macros.set("\\current@color", a);
                            var i = r.parseExpression(!0, n);
                            return {
                                type: "color",
                                mode: r.mode,
                                color: a,
                                body: i
                            }
                        },
                        htmlBuilder: $t,
                        mathmlBuilder: Zt
                    }), ot({
                        type: "cr",
                        names: ["\\cr", "\\newline"],
                        props: {
                            numArgs: 0,
                            numOptionalArgs: 1,
                            argTypes: ["size"],
                            allowedInText: !0
                        },
                        handler: function(e, t, r) {
                            var n = e.parser,
                                a = e.funcName,
                                i = r[0],
                                o = "\\cr" === a,
                                s = !1;
                            return o || (s = !n.settings.displayMode || !n.settings.useStrictBehavior("newLineInDisplayMode", "In LaTeX, \\\\ or \\newline does nothing in display mode")), {
                                type: "cr",
                                mode: n.mode,
                                newLine: s,
                                newRow: o,
                                size: i && Ut(i, "size").value
                            }
                        },
                        htmlBuilder: function(e, t) {
                            if (e.newRow) throw new o("\\cr valid only within a tabular/array environment");
                            var r = Ke.makeSpan(["mspace"], [], t);
                            return e.newLine && (r.classes.push("newline"), e.size && (r.style.marginTop = Fe(e.size, t) + "em")), r
                        },
                        mathmlBuilder: function(e, t) {
                            var r = new At.MathNode("mspace");
                            return e.newLine && (r.setAttribute("linebreak", "newline"), e.size && r.setAttribute("height", Fe(e.size, t) + "em")), r
                        }
                    });
                    var Kt = {
                            "\\global": "\\global",
                            "\\long": "\\\\globallong",
                            "\\\\globallong": "\\\\globallong",
                            "\\def": "\\gdef",
                            "\\gdef": "\\gdef",
                            "\\edef": "\\xdef",
                            "\\xdef": "\\xdef",
                            "\\let": "\\\\globallet",
                            "\\futurelet": "\\\\globalfuture"
                        },
                        Jt = function(e) {
                            var t = e.text;
                            if (/^(?:[\\{}$&#^_]|EOF)$/.test(t)) throw new o("Expected a control sequence", e);
                            return t
                        },
                        Qt = function(e, t, r, n) {
                            var a = e.gullet.macros.get(r.text);
                            null == a && (r.noexpand = !0, a = {
                                tokens: [r],
                                numArgs: 0,
                                unexpandable: !e.gullet.isExpandable(r.text)
                            }), e.gullet.macros.set(t, a, n)
                        };
                    ot({
                        type: "internal",
                        names: ["\\global", "\\long", "\\\\globallong"],
                        props: {
                            numArgs: 0,
                            allowedInText: !0
                        },
                        handler: function(e) {
                            var t = e.parser,
                                r = e.funcName;
                            t.consumeSpaces();
                            var n = t.fetch();
                            if (Kt[n.text]) return "\\global" !== r && "\\\\globallong" !== r || (n.text = Kt[n.text]), Ut(t.parseFunction(), "internal");
                            throw new o("Invalid token after macro prefix", n)
                        }
                    }), ot({
                        type: "internal",
                        names: ["\\def", "\\gdef", "\\edef", "\\xdef"],
                        props: {
                            numArgs: 0,
                            allowedInText: !0
                        },
                        handler: function(e) {
                            var t = e.parser,
                                r = e.funcName,
                                n = t.gullet.consumeArgs(1)[0];
                            if (1 !== n.length) throw new o("\\gdef's first argument must be a macro name");
                            var a = n[0].text,
                                i = 0;
                            for (n = t.gullet.consumeArgs(1)[0]; 1 === n.length && "#" === n[0].text;) {
                                if (1 !== (n = t.gullet.consumeArgs(1)[0]).length) throw new o('Invalid argument number length "' + n.length + '"');
                                if (!/^[1-9]$/.test(n[0].text)) throw new o('Invalid argument number "' + n[0].text + '"');
                                if (i++, parseInt(n[0].text) !== i) throw new o('Argument number "' + n[0].text + '" out of order');
                                n = t.gullet.consumeArgs(1)[0]
                            }
                            return "\\edef" !== r && "\\xdef" !== r || (n = t.gullet.expandTokens(n)).reverse(), t.gullet.macros.set(a, {
                                tokens: n,
                                numArgs: i
                            }, r === Kt[r]), {
                                type: "internal",
                                mode: t.mode
                            }
                        }
                    }), ot({
                        type: "internal",
                        names: ["\\let", "\\\\globallet"],
                        props: {
                            numArgs: 0,
                            allowedInText: !0
                        },
                        handler: function(e) {
                            var t = e.parser,
                                r = e.funcName,
                                n = Jt(t.gullet.popToken());
                            t.gullet.consumeSpaces();
                            var a = function(e) {
                                var t = e.gullet.popToken();
                                return "=" === t.text && " " === (t = e.gullet.popToken()).text && (t = e.gullet.popToken()), t
                            }(t);
                            return Qt(t, n, a, "\\\\globallet" === r), {
                                type: "internal",
                                mode: t.mode
                            }
                        }
                    }), ot({
                        type: "internal",
                        names: ["\\futurelet", "\\\\globalfuture"],
                        props: {
                            numArgs: 0,
                            allowedInText: !0
                        },
                        handler: function(e) {
                            var t = e.parser,
                                r = e.funcName,
                                n = Jt(t.gullet.popToken()),
                                a = t.gullet.popToken(),
                                i = t.gullet.popToken();
                            return Qt(t, n, i, "\\\\globalfuture" === r), t.gullet.pushToken(i), t.gullet.pushToken(a), {
                                type: "internal",
                                mode: t.mode
                            }
                        }
                    });
                    var er = function(e, t, r) {
                            var n = Y($.math[e] && $.math[e].replace || e, t, r);
                            if (!n) throw new Error("Unsupported symbol " + e + " and font size " + t + ".");
                            return n
                        },
                        tr = function(e, t, r, n) {
                            var a = r.havingBaseStyle(t),
                                i = Ke.makeSpan(n.concat(a.sizingClasses(r)), [e], r),
                                o = a.sizeMultiplier / r.sizeMultiplier;
                            return i.height *= o, i.depth *= o, i.maxFontSize = a.sizeMultiplier, i
                        },
                        rr = function(e, t, r) {
                            var n = t.havingBaseStyle(r),
                                a = (1 - t.sizeMultiplier / n.sizeMultiplier) * t.fontMetrics().axisHeight;
                            e.classes.push("delimcenter"), e.style.top = a + "em", e.height -= a, e.depth += a
                        },
                        nr = function(e, t, r, n, a, i) {
                            var o = function(e, t, r, n) {
                                    return Ke.makeSymbol(e, "Size" + t + "-Regular", r, n)
                                }(e, t, a, n),
                                s = tr(Ke.makeSpan(["delimsizing", "size" + t], [o], n), w.TEXT, n, i);
                            return r && rr(s, n, w.TEXT), s
                        },
                        ar = function(e, t, r) {
                            var n;
                            return n = "Size1-Regular" === t ? "delim-size1" : "delim-size4", {
                                type: "elem",
                                elem: Ke.makeSpan(["delimsizinginner", n], [Ke.makeSpan([], [Ke.makeSymbol(e, t, r)])])
                            }
                        },
                        ir = {
                            type: "kern",
                            size: -.005
                        },
                        or = function(e, t, r, n, a, i) {
                            var o, s, l, h;
                            o = l = h = e, s = null;
                            var m = "Size1-Regular";
                            "\\uparrow" === e ? l = h = "\u23d0" : "\\Uparrow" === e ? l = h = "\u2016" : "\\downarrow" === e ? o = l = "\u23d0" : "\\Downarrow" === e ? o = l = "\u2016" : "\\updownarrow" === e ? (o = "\\uparrow", l = "\u23d0", h = "\\downarrow") : "\\Updownarrow" === e ? (o = "\\Uparrow", l = "\u2016", h = "\\Downarrow") : "[" === e || "\\lbrack" === e ? (o = "\u23a1", l = "\u23a2", h = "\u23a3", m = "Size4-Regular") : "]" === e || "\\rbrack" === e ? (o = "\u23a4", l = "\u23a5", h = "\u23a6", m = "Size4-Regular") : "\\lfloor" === e || "\u230a" === e ? (l = o = "\u23a2", h = "\u23a3", m = "Size4-Regular") : "\\lceil" === e || "\u2308" === e ? (o = "\u23a1", l = h = "\u23a2", m = "Size4-Regular") : "\\rfloor" === e || "\u230b" === e ? (l = o = "\u23a5", h = "\u23a6", m = "Size4-Regular") : "\\rceil" === e || "\u2309" === e ? (o = "\u23a4", l = h = "\u23a5", m = "Size4-Regular") : "(" === e || "\\lparen" === e ? (o = "\u239b", l = "\u239c", h = "\u239d", m = "Size4-Regular") : ")" === e || "\\rparen" === e ? (o = "\u239e", l = "\u239f", h = "\u23a0", m = "Size4-Regular") : "\\{" === e || "\\lbrace" === e ? (o = "\u23a7", s = "\u23a8", h = "\u23a9", l = "\u23aa", m = "Size4-Regular") : "\\}" === e || "\\rbrace" === e ? (o = "\u23ab", s = "\u23ac", h = "\u23ad", l = "\u23aa", m = "Size4-Regular") : "\\lgroup" === e || "\u27ee" === e ? (o = "\u23a7", h = "\u23a9", l = "\u23aa", m = "Size4-Regular") : "\\rgroup" === e || "\u27ef" === e ? (o = "\u23ab", h = "\u23ad", l = "\u23aa", m = "Size4-Regular") : "\\lmoustache" === e || "\u23b0" === e ? (o = "\u23a7", h = "\u23ad", l = "\u23aa", m = "Size4-Regular") : "\\rmoustache" !== e && "\u23b1" !== e || (o = "\u23ab", h = "\u23a9", l = "\u23aa", m = "Size4-Regular");
                            var c = er(o, m, a),
                                u = c.height + c.depth,
                                p = er(l, m, a),
                                d = p.height + p.depth,
                                f = er(h, m, a),
                                g = f.height + f.depth,
                                v = 0,
                                b = 1;
                            if (null !== s) {
                                var y = er(s, m, a);
                                v = y.height + y.depth, b = 2
                            }
                            var x = u + g + v,
                                k = Math.max(0, Math.ceil((t - x) / (b * d))),
                                S = x + k * b * d,
                                M = n.fontMetrics().axisHeight;
                            r && (M *= n.sizeMultiplier);
                            var z = S / 2 - M,
                                A = .005 * (k + 1) - d,
                                T = [];
                            if (T.push(ar(h, m, a)), null === s)
                                for (var B = 0; B < k; B++) T.push(ir), T.push(ar(l, m, a));
                            else {
                                for (var C = 0; C < k; C++) T.push(ir), T.push(ar(l, m, a));
                                T.push({
                                    type: "kern",
                                    size: A
                                }), T.push(ar(l, m, a)), T.push(ir), T.push(ar(s, m, a));
                                for (var q = 0; q < k; q++) T.push(ir), T.push(ar(l, m, a))
                            }
                            if ("\u239c" !== l && "\u239f" !== l || 0 !== k) T.push({
                                type: "kern",
                                size: A
                            }), T.push(ar(l, m, a)), T.push(ir);
                            else {
                                var N = Ke.svgData.leftParenInner[2] / 2;
                                T.push({
                                    type: "kern",
                                    size: -N
                                });
                                var I = "\u239c" === l ? "leftParenInner" : "rightParenInner",
                                    O = Ke.staticSvg(I, n);
                                T.push({
                                    type: "elem",
                                    elem: O
                                }), T.push({
                                    type: "kern",
                                    size: -N
                                })
                            }
                            T.push(ar(o, m, a));
                            var R = n.havingBaseStyle(w.TEXT),
                                E = Ke.makeVList({
                                    positionType: "bottom",
                                    positionData: z,
                                    children: T
                                }, R);
                            return tr(Ke.makeSpan(["delimsizing", "mult"], [E], R), w.TEXT, n, i)
                        },
                        sr = .08,
                        lr = function(e, t, r, n, a) {
                            var i = function(e, t, r) {
                                    t *= 1e3;
                                    var n = "";
                                    switch (e) {
                                        case "sqrtMain":
                                            n = function(e, t) {
                                                return "M95," + (622 + e + t) + "\nc-2.7,0,-7.17,-2.7,-13.5,-8c-5.8,-5.3,-9.5,-10,-9.5,-14\nc0,-2,0.3,-3.3,1,-4c1.3,-2.7,23.83,-20.7,67.5,-54\nc44.2,-33.3,65.8,-50.3,66.5,-51c1.3,-1.3,3,-2,5,-2c4.7,0,8.7,3.3,12,10\ns173,378,173,378c0.7,0,35.3,-71,104,-213c68.7,-142,137.5,-285,206.5,-429\nc69,-144,104.5,-217.7,106.5,-221\nl" + e / 2.075 + " -" + e + "\nc5.3,-9.3,12,-14,20,-14\nH400000v" + (40 + e) + "H845.2724\ns-225.272,467,-225.272,467s-235,486,-235,486c-2.7,4.7,-9,7,-19,7\nc-6,0,-10,-1,-12,-3s-194,-422,-194,-422s-65,47,-65,47z\nM" + (834 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z"
                                            }(t, z);
                                            break;
                                        case "sqrtSize1":
                                            n = function(e, t) {
                                                return "M263," + (601 + e + t) + "c0.7,0,18,39.7,52,119\nc34,79.3,68.167,158.7,102.5,238c34.3,79.3,51.8,119.3,52.5,120\nc340,-704.7,510.7,-1060.3,512,-1067\nl" + e / 2.084 + " -" + e + "\nc4.7,-7.3,11,-11,19,-11\nH40000v" + (40 + e) + "H1012.3\ns-271.3,567,-271.3,567c-38.7,80.7,-84,175,-136,283c-52,108,-89.167,185.3,-111.5,232\nc-22.3,46.7,-33.8,70.3,-34.5,71c-4.7,4.7,-12.3,7,-23,7s-12,-1,-12,-1\ns-109,-253,-109,-253c-72.7,-168,-109.3,-252,-110,-252c-10.7,8,-22,16.7,-34,26\nc-22,17.3,-33.3,26,-34,26s-26,-26,-26,-26s76,-59,76,-59s76,-60,76,-60z\nM" + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z"
                                            }(t, z);
                                            break;
                                        case "sqrtSize2":
                                            n = function(e, t) {
                                                return "M983 " + (10 + e + t) + "\nl" + e / 3.13 + " -" + e + "\nc4,-6.7,10,-10,18,-10 H400000v" + (40 + e) + "\nH1013.1s-83.4,268,-264.1,840c-180.7,572,-277,876.3,-289,913c-4.7,4.7,-12.7,7,-24,7\ns-12,0,-12,0c-1.3,-3.3,-3.7,-11.7,-7,-25c-35.3,-125.3,-106.7,-373.3,-214,-744\nc-10,12,-21,25,-33,39s-32,39,-32,39c-6,-5.3,-15,-14,-27,-26s25,-30,25,-30\nc26.7,-32.7,52,-63,76,-91s52,-60,52,-60s208,722,208,722\nc56,-175.3,126.3,-397.3,211,-666c84.7,-268.7,153.8,-488.2,207.5,-658.5\nc53.7,-170.3,84.5,-266.8,92.5,-289.5z\nM" + (1001 + e) + " " + t + "h400000v" + (40 + e) + "h-400000z"
                                            }(t, z);
                                            break;
                                        case "sqrtSize3":
                                            n = function(e, t) {
                                                return "M424," + (2398 + e + t) + "\nc-1.3,-0.7,-38.5,-172,-111.5,-514c-73,-342,-109.8,-513.3,-110.5,-514\nc0,-2,-10.7,14.3,-32,49c-4.7,7.3,-9.8,15.7,-15.5,25c-5.7,9.3,-9.8,16,-12.5,20\ns-5,7,-5,7c-4,-3.3,-8.3,-7.7,-13,-13s-13,-13,-13,-13s76,-122,76,-122s77,-121,77,-121\ns209,968,209,968c0,-2,84.7,-361.7,254,-1079c169.3,-717.3,254.7,-1077.7,256,-1081\nl" + e / 4.223 + " -" + e + "c4,-6.7,10,-10,18,-10 H400000\nv" + (40 + e) + "H1014.6\ns-87.3,378.7,-272.6,1166c-185.3,787.3,-279.3,1182.3,-282,1185\nc-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2z M" + (1001 + e) + " " + t + "\nh400000v" + (40 + e) + "h-400000z"
                                            }(t, z);
                                            break;
                                        case "sqrtSize4":
                                            n = function(e, t) {
                                                return "M473," + (2713 + e + t) + "\nc339.3,-1799.3,509.3,-2700,510,-2702 l" + e / 5.298 + " -" + e + "\nc3.3,-7.3,9.3,-11,18,-11 H400000v" + (40 + e) + "H1017.7\ns-90.5,478,-276.2,1466c-185.7,988,-279.5,1483,-281.5,1485c-2,6,-10,9,-24,9\nc-8,0,-12,-0.7,-12,-2c0,-1.3,-5.3,-32,-16,-92c-50.7,-293.3,-119.7,-693.3,-207,-1200\nc0,-1.3,-5.3,8.7,-16,30c-10.7,21.3,-21.3,42.7,-32,64s-16,33,-16,33s-26,-26,-26,-26\ns76,-153,76,-153s77,-151,77,-151c0.7,0.7,35.7,202,105,604c67.3,400.7,102,602.7,104,\n606zM" + (1001 + e) + " " + t + "h400000v" + (40 + e) + "H1017.7z"
                                            }(t, z);
                                            break;
                                        case "sqrtTall":
                                            n = function(e, t, r) {
                                                return "M702 " + (e + t) + "H400000" + (40 + e) + "\nH742v" + (r - 54 - t - e) + "l-4 4-4 4c-.667.7 -2 1.5-4 2.5s-4.167 1.833-6.5 2.5-5.5 1-9.5 1\nh-12l-28-84c-16.667-52-96.667 -294.333-240-727l-212 -643 -85 170\nc-4-3.333-8.333-7.667-13 -13l-13-13l77-155 77-156c66 199.333 139 419.667\n219 661 l218 661zM702 " + t + "H400000v" + (40 + e) + "H742z"
                                            }(t, z, r)
                                    }
                                    return n
                                }(e, n, r),
                                o = new D(e, i),
                                s = new P([o], {
                                    width: "400em",
                                    height: t + "em",
                                    viewBox: "0 0 400000 " + r,
                                    preserveAspectRatio: "xMinYMin slice"
                                });
                            return Ke.makeSvgSpan(["hide-tail"], [s], a)
                        },
                        hr = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230a", "\u230b", "\\lceil", "\\rceil", "\u2308", "\u2309", "\\surd"],
                        mr = ["\\uparrow", "\\downarrow", "\\updownarrow", "\\Uparrow", "\\Downarrow", "\\Updownarrow", "|", "\\|", "\\vert", "\\Vert", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27ee", "\u27ef", "\\lmoustache", "\\rmoustache", "\u23b0", "\u23b1"],
                        cr = ["<", ">", "\\langle", "\\rangle", "/", "\\backslash", "\\lt", "\\gt"],
                        ur = [0, 1.2, 1.8, 2.4, 3],
                        pr = [{
                            type: "small",
                            style: w.SCRIPTSCRIPT
                        }, {
                            type: "small",
                            style: w.SCRIPT
                        }, {
                            type: "small",
                            style: w.TEXT
                        }, {
                            type: "large",
                            size: 1
                        }, {
                            type: "large",
                            size: 2
                        }, {
                            type: "large",
                            size: 3
                        }, {
                            type: "large",
                            size: 4
                        }],
                        dr = [{
                            type: "small",
                            style: w.SCRIPTSCRIPT
                        }, {
                            type: "small",
                            style: w.SCRIPT
                        }, {
                            type: "small",
                            style: w.TEXT
                        }, {
                            type: "stack"
                        }],
                        fr = [{
                            type: "small",
                            style: w.SCRIPTSCRIPT
                        }, {
                            type: "small",
                            style: w.SCRIPT
                        }, {
                            type: "small",
                            style: w.TEXT
                        }, {
                            type: "large",
                            size: 1
                        }, {
                            type: "large",
                            size: 2
                        }, {
                            type: "large",
                            size: 3
                        }, {
                            type: "large",
                            size: 4
                        }, {
                            type: "stack"
                        }],
                        gr = function(e) {
                            if ("small" === e.type) return "Main-Regular";
                            if ("large" === e.type) return "Size" + e.size + "-Regular";
                            if ("stack" === e.type) return "Size4-Regular";
                            throw new Error("Add support for delim type '" + e.type + "' here.")
                        },
                        vr = function(e, t, r, n) {
                            for (var a = Math.min(2, 3 - n.style.size); a < r.length && "stack" !== r[a].type; a++) {
                                var i = er(e, gr(r[a]), "math"),
                                    o = i.height + i.depth;
                                if ("small" === r[a].type && (o *= n.havingBaseStyle(r[a].style).sizeMultiplier), o > t) return r[a]
                            }
                            return r[r.length - 1]
                        },
                        br = function(e, t, r, n, a, i) {
                            var o;
                            "<" === e || "\\lt" === e || "\u27e8" === e ? e = "\\langle" : ">" !== e && "\\gt" !== e && "\u27e9" !== e || (e = "\\rangle"), o = c.contains(cr, e) ? pr : c.contains(hr, e) ? fr : dr;
                            var s = vr(e, t, o, n);
                            return "small" === s.type ? function(e, t, r, n, a, i) {
                                var o = Ke.makeSymbol(e, "Main-Regular", a, n),
                                    s = tr(o, t, n, i);
                                return r && rr(s, n, t), s
                            }(e, s.style, r, n, a, i) : "large" === s.type ? nr(e, s.size, r, n, a, i) : or(e, t, r, n, a, i)
                        },
                        yr = function(e, t) {
                            var r, n, a = t.havingBaseSizing(),
                                i = vr("\\surd", e * a.sizeMultiplier, fr, a),
                                o = a.sizeMultiplier,
                                s = Math.max(0, t.minRuleThickness - t.fontMetrics().sqrtRuleThickness),
                                l = 0,
                                h = 0,
                                m = 0;
                            return "small" === i.type ? (e < 1 ? o = 1 : e < 1.4 && (o = .7), h = (1 + s) / o, (r = lr("sqrtMain", l = (1 + s + sr) / o, m = 1e3 + 1e3 * s + 80, s, t)).style.minWidth = "0.853em", n = .833 / o) : "large" === i.type ? (m = 1080 * ur[i.size], h = (ur[i.size] + s) / o, l = (ur[i.size] + s + sr) / o, (r = lr("sqrtSize" + i.size, l, m, s, t)).style.minWidth = "1.02em", n = 1 / o) : (l = e + s + sr, h = e + s, m = Math.floor(1e3 * e + s) + 80, (r = lr("sqrtTall", l, m, s, t)).style.minWidth = "0.742em", n = 1.056), r.height = h, r.style.height = l + "em", {
                                span: r,
                                advanceWidth: n,
                                ruleWidth: (t.fontMetrics().sqrtRuleThickness + s) * o
                            }
                        },
                        xr = function(e, t, r, n, a) {
                            if ("<" === e || "\\lt" === e || "\u27e8" === e ? e = "\\langle" : ">" !== e && "\\gt" !== e && "\u27e9" !== e || (e = "\\rangle"), c.contains(hr, e) || c.contains(cr, e)) return nr(e, t, !1, r, n, a);
                            if (c.contains(mr, e)) return or(e, ur[t], !1, r, n, a);
                            throw new o("Illegal delimiter: '" + e + "'")
                        },
                        wr = br,
                        kr = function(e, t, r, n, a, i) {
                            var o = n.fontMetrics().axisHeight * n.sizeMultiplier,
                                s = 5 / n.fontMetrics().ptPerEm,
                                l = Math.max(t - o, r + o),
                                h = Math.max(l / 500 * 901, 2 * l - s);
                            return br(e, h, !0, n, a, i)
                        },
                        Sr = {
                            "\\bigl": {
                                mclass: "mopen",
                                size: 1
                            },
                            "\\Bigl": {
                                mclass: "mopen",
                                size: 2
                            },
                            "\\biggl": {
                                mclass: "mopen",
                                size: 3
                            },
                            "\\Biggl": {
                                mclass: "mopen",
                                size: 4
                            },
                            "\\bigr": {
                                mclass: "mclose",
                                size: 1
                            },
                            "\\Bigr": {
                                mclass: "mclose",
                                size: 2
                            },
                            "\\biggr": {
                                mclass: "mclose",
                                size: 3
                            },
                            "\\Biggr": {
                                mclass: "mclose",
                                size: 4
                            },
                            "\\bigm": {
                                mclass: "mrel",
                                size: 1
                            },
                            "\\Bigm": {
                                mclass: "mrel",
                                size: 2
                            },
                            "\\biggm": {
                                mclass: "mrel",
                                size: 3
                            },
                            "\\Biggm": {
                                mclass: "mrel",
                                size: 4
                            },
                            "\\big": {
                                mclass: "mord",
                                size: 1
                            },
                            "\\Big": {
                                mclass: "mord",
                                size: 2
                            },
                            "\\bigg": {
                                mclass: "mord",
                                size: 3
                            },
                            "\\Bigg": {
                                mclass: "mord",
                                size: 4
                            }
                        },
                        Mr = ["(", "\\lparen", ")", "\\rparen", "[", "\\lbrack", "]", "\\rbrack", "\\{", "\\lbrace", "\\}", "\\rbrace", "\\lfloor", "\\rfloor", "\u230a", "\u230b", "\\lceil", "\\rceil", "\u2308", "\u2309", "<", ">", "\\langle", "\u27e8", "\\rangle", "\u27e9", "\\lt", "\\gt", "\\lvert", "\\rvert", "\\lVert", "\\rVert", "\\lgroup", "\\rgroup", "\u27ee", "\u27ef", "\\lmoustache", "\\rmoustache", "\u23b0", "\u23b1", "/", "\\backslash", "|", "\\vert", "\\|", "\\Vert", "\\uparrow", "\\Uparrow", "\\downarrow", "\\Downarrow", "\\updownarrow", "\\Updownarrow", "."];

                    function zr(e, t) {
                        var r = Yt(e);
                        if (r && c.contains(Mr, r.text)) return r;
                        throw new o(r ? "Invalid delimiter '" + r.text + "' after '" + t.funcName + "'" : "Invalid delimiter type '" + e.type + "'", e)
                    }

                    function Ar(e) {
                        if (!e.body) throw new Error("Bug: The leftright ParseNode wasn't fully parsed.")
                    }
                    ot({
                        type: "delimsizing",
                        names: ["\\bigl", "\\Bigl", "\\biggl", "\\Biggl", "\\bigr", "\\Bigr", "\\biggr", "\\Biggr", "\\bigm", "\\Bigm", "\\biggm", "\\Biggm", "\\big", "\\Big", "\\bigg", "\\Bigg"],
                        props: {
                            numArgs: 1
                        },
                        handler: function(e, t) {
                            var r = zr(t[0], e);
                            return {
                                type: "delimsizing",
                                mode: e.parser.mode,
                                size: Sr[e.funcName].size,
                                mclass: Sr[e.funcName].mclass,
                                delim: r.text
                            }
                        },
                        htmlBuilder: function(e, t) {
                            return "." === e.delim ? Ke.makeSpan([e.mclass]) : xr(e.delim, e.size, t, e.mode, [e.mclass])
                        },
                        mathmlBuilder: function(e) {
                            var t = [];
                            "." !== e.delim && t.push(Tt(e.delim, e.mode));
                            var r = new At.MathNode("mo", t);
                            return "mopen" === e.mclass || "mclose" === e.mclass ? r.setAttribute("fence", "true") : r.setAttribute("fence", "false"), r
                        }
                    }), ot({
                        type: "leftright-right",
                        names: ["\\right"],
                        props: {
                            numArgs: 1
                        },
                        handler: function(e, t) {
                            var r = e.parser.gullet.macros.get("\\current@color");
                            if (r && "string" !== typeof r) throw new o("\\current@color set to non-string in \\right");
                            return {
                                type: "leftright-right",
                                mode: e.parser.mode,
                                delim: zr(t[0], e).text,
                                color: r
                            }
                        }
                    }), ot({
                        type: "leftright",
                        names: ["\\left"],
                        props: {
                            numArgs: 1
                        },
                        handler: function(e, t) {
                            var r = zr(t[0], e),
                                n = e.parser;
                            ++n.leftrightDepth;
                            var a = n.parseExpression(!1);
                            --n.leftrightDepth, n.expect("\\right", !1);
                            var i = Ut(n.parseFunction(), "leftright-right");
                            return {
                                type: "leftright",
                                mode: n.mode,
                                body: a,
                                left: r.text,
                                right: i.delim,
                                rightColor: i.color
                            }
                        },
                        htmlBuilder: function(e, t) {
                            Ar(e);
                            for (var r, n, a = dt(e.body, t, !0, ["mopen", "mclose"]), i = 0, o = 0, s = !1, l = 0; l < a.length; l++) a[l].isMiddle ? s = !0 : (i = Math.max(a[l].height, i), o = Math.max(a[l].depth, o));
                            if (i *= t.sizeMultiplier, o *= t.sizeMultiplier, r = "." === e.left ? yt(t, ["mopen"]) : kr(e.left, i, o, t, e.mode, ["mopen"]), a.unshift(r), s)
                                for (var h = 1; h < a.length; h++) {
                                    var m = a[h].isMiddle;
                                    m && (a[h] = kr(m.delim, i, o, m.options, e.mode, []))
                                }
                            if ("." === e.right) n = yt(t, ["mclose"]);
                            else {
                                var c = e.rightColor ? t.withColor(e.rightColor) : t;
                                n = kr(e.right, i, o, c, e.mode, ["mclose"])
                            }
                            return a.push(n), Ke.makeSpan(["minner"], a, t)
                        },
                        mathmlBuilder: function(e, t) {
                            Ar(e);
                            var r = qt(e.body, t);
                            if ("." !== e.left) {
                                var n = new At.MathNode("mo", [Tt(e.left, e.mode)]);
                                n.setAttribute("fence", "true"), r.unshift(n)
                            }
                            if ("." !== e.right) {
                                var a = new At.MathNode("mo", [Tt(e.right, e.mode)]);
                                a.setAttribute("fence", "true"), e.rightColor && a.setAttribute("mathcolor", e.rightColor), r.push(a)
                            }
                            return Bt(r)
                        }
                    }), ot({
                        type: "middle",
                        names: ["\\middle"],
                        props: {
                            numArgs: 1
                        },
                        handler: function(e, t) {
                            var r = zr(t[0], e);
                            if (!e.parser.leftrightDepth) throw new o("\\middle without preceding \\left", r);
                            return {
                                type: "middle",
                                mode: e.parser.mode,
                                delim: r.text
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r;
                            if ("." === e.delim) r = yt(t, []);
                            else {
                                r = xr(e.delim, 1, t, e.mode, []);
                                var n = {
                                    delim: e.delim,
                                    options: t
                                };
                                r.isMiddle = n
                            }
                            return r
                        },
                        mathmlBuilder: function(e, t) {
                            var r = "\\vert" === e.delim || "|" === e.delim ? Tt("|", "text") : Tt(e.delim, e.mode),
                                n = new At.MathNode("mo", [r]);
                            return n.setAttribute("fence", "true"), n.setAttribute("lspace", "0.05em"), n.setAttribute("rspace", "0.05em"), n
                        }
                    });
                    var Tr = function(e, t) {
                            var r, n, a = Ke.wrapFragment(xt(e.body, t), t),
                                i = e.label.substr(1),
                                o = t.sizeMultiplier,
                                s = 0,
                                l = c.isCharacterBox(e.body);
                            if ("sout" === i)(r = Ke.makeSpan(["stretchy", "sout"])).height = t.fontMetrics().defaultRuleThickness / o, s = -.5 * t.fontMetrics().xHeight;
                            else {
                                /cancel/.test(i) ? l || a.classes.push("cancel-pad") : a.classes.push("boxpad");
                                var h = 0,
                                    m = 0;
                                /box/.test(i) ? (m = Math.max(t.fontMetrics().fboxrule, t.minRuleThickness), h = t.fontMetrics().fboxsep + ("colorbox" === i ? 0 : m)) : h = l ? .2 : 0, r = Ht(a, i, h, t), /fbox|boxed|fcolorbox/.test(i) && (r.style.borderStyle = "solid", r.style.borderWidth = m + "em"), s = a.depth + h, e.backgroundColor && (r.style.backgroundColor = e.backgroundColor, e.borderColor && (r.style.borderColor = e.borderColor))
                            }
                            return n = e.backgroundColor ? Ke.makeVList({
                                positionType: "individualShift",
                                children: [{
                                    type: "elem",
                                    elem: r,
                                    shift: s
                                }, {
                                    type: "elem",
                                    elem: a,
                                    shift: 0
                                }]
                            }, t) : Ke.makeVList({
                                positionType: "individualShift",
                                children: [{
                                    type: "elem",
                                    elem: a,
                                    shift: 0
                                }, {
                                    type: "elem",
                                    elem: r,
                                    shift: s,
                                    wrapperClasses: /cancel/.test(i) ? ["svg-align"] : []
                                }]
                            }, t), /cancel/.test(i) && (n.height = a.height, n.depth = a.depth), /cancel/.test(i) && !l ? Ke.makeSpan(["mord", "cancel-lap"], [n], t) : Ke.makeSpan(["mord"], [n], t)
                        },
                        Br = function(e, t) {
                            var r = 0,
                                n = new At.MathNode(e.label.indexOf("colorbox") > -1 ? "mpadded" : "menclose", [It(e.body, t)]);
                            switch (e.label) {
                                case "\\cancel":
                                    n.setAttribute("notation", "updiagonalstrike");
                                    break;
                                case "\\bcancel":
                                    n.setAttribute("notation", "downdiagonalstrike");
                                    break;
                                case "\\sout":
                                    n.setAttribute("notation", "horizontalstrike");
                                    break;
                                case "\\fbox":
                                    n.setAttribute("notation", "box");
                                    break;
                                case "\\fcolorbox":
                                case "\\colorbox":
                                    if (r = t.fontMetrics().fboxsep * t.fontMetrics().ptPerEm, n.setAttribute("width", "+" + 2 * r + "pt"), n.setAttribute("height", "+" + 2 * r + "pt"), n.setAttribute("lspace", r + "pt"), n.setAttribute("voffset", r + "pt"), "\\fcolorbox" === e.label) {
                                        var a = Math.max(t.fontMetrics().fboxrule, t.minRuleThickness);
                                        n.setAttribute("style", "border: " + a + "em solid " + String(e.borderColor))
                                    }
                                    break;
                                case "\\xcancel":
                                    n.setAttribute("notation", "updiagonalstrike downdiagonalstrike")
                            }
                            return e.backgroundColor && n.setAttribute("mathbackground", e.backgroundColor), n
                        };
                    ot({
                        type: "enclose",
                        names: ["\\colorbox"],
                        props: {
                            numArgs: 2,
                            allowedInText: !0,
                            greediness: 3,
                            argTypes: ["color", "text"]
                        },
                        handler: function(e, t, r) {
                            var n = e.parser,
                                a = e.funcName,
                                i = Ut(t[0], "color-token").color,
                                o = t[1];
                            return {
                                type: "enclose",
                                mode: n.mode,
                                label: a,
                                backgroundColor: i,
                                body: o
                            }
                        },
                        htmlBuilder: Tr,
                        mathmlBuilder: Br
                    }), ot({
                        type: "enclose",
                        names: ["\\fcolorbox"],
                        props: {
                            numArgs: 3,
                            allowedInText: !0,
                            greediness: 3,
                            argTypes: ["color", "color", "text"]
                        },
                        handler: function(e, t, r) {
                            var n = e.parser,
                                a = e.funcName,
                                i = Ut(t[0], "color-token").color,
                                o = Ut(t[1], "color-token").color,
                                s = t[2];
                            return {
                                type: "enclose",
                                mode: n.mode,
                                label: a,
                                backgroundColor: o,
                                borderColor: i,
                                body: s
                            }
                        },
                        htmlBuilder: Tr,
                        mathmlBuilder: Br
                    }), ot({
                        type: "enclose",
                        names: ["\\fbox"],
                        props: {
                            numArgs: 1,
                            argTypes: ["hbox"],
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            return {
                                type: "enclose",
                                mode: e.parser.mode,
                                label: "\\fbox",
                                body: t[0]
                            }
                        }
                    }), ot({
                        type: "enclose",
                        names: ["\\cancel", "\\bcancel", "\\xcancel", "\\sout"],
                        props: {
                            numArgs: 1
                        },
                        handler: function(e, t, r) {
                            var n = e.parser,
                                a = e.funcName,
                                i = t[0];
                            return {
                                type: "enclose",
                                mode: n.mode,
                                label: a,
                                body: i
                            }
                        },
                        htmlBuilder: Tr,
                        mathmlBuilder: Br
                    });
                    var Cr = {};

                    function qr(e) {
                        for (var t = e.type, r = e.names, n = e.props, a = e.handler, i = e.htmlBuilder, o = e.mathmlBuilder, s = {
                                type: t,
                                numArgs: n.numArgs || 0,
                                greediness: 1,
                                allowedInText: !1,
                                numOptionalArgs: 0,
                                handler: a
                            }, l = 0; l < r.length; ++l) Cr[r[l]] = s;
                        i && (at[t] = i), o && (it[t] = o)
                    }

                    function Nr(e) {
                        var t = [];
                        e.consumeSpaces();
                        for (var r = e.fetch().text;
                            "\\hline" === r || "\\hdashline" === r;) e.consume(), t.push("\\hdashline" === r), e.consumeSpaces(), r = e.fetch().text;
                        return t
                    }

                    function Ir(e, t, r) {
                        var n = t.hskipBeforeAndAfter,
                            a = t.addJot,
                            i = t.cols,
                            s = t.arraystretch,
                            l = t.colSeparationType;
                        if (e.gullet.beginGroup(), e.gullet.macros.set("\\\\", "\\cr"), !s) {
                            var h = e.gullet.expandMacroAsText("\\arraystretch");
                            if (null == h) s = 1;
                            else if (!(s = parseFloat(h)) || s < 0) throw new o("Invalid \\arraystretch: " + h)
                        }
                        e.gullet.beginGroup();
                        var m = [],
                            c = [m],
                            u = [],
                            p = [];
                        for (p.push(Nr(e));;) {
                            var d = e.parseExpression(!1, "\\cr");
                            e.gullet.endGroup(), e.gullet.beginGroup(), d = {
                                type: "ordgroup",
                                mode: e.mode,
                                body: d
                            }, r && (d = {
                                type: "styling",
                                mode: e.mode,
                                style: r,
                                body: [d]
                            }), m.push(d);
                            var f = e.fetch().text;
                            if ("&" === f) e.consume();
                            else {
                                if ("\\end" === f) {
                                    1 === m.length && "styling" === d.type && 0 === d.body[0].body.length && c.pop(), p.length < c.length + 1 && p.push([]);
                                    break
                                }
                                if ("\\cr" !== f) throw new o("Expected & or \\\\ or \\cr or \\end", e.nextToken);
                                var g = Ut(e.parseFunction(), "cr");
                                u.push(g.size), p.push(Nr(e)), m = [], c.push(m)
                            }
                        }
                        return e.gullet.endGroup(), e.gullet.endGroup(), {
                            type: "array",
                            mode: e.mode,
                            addJot: a,
                            arraystretch: s,
                            body: c,
                            cols: i,
                            rowGaps: u,
                            hskipBeforeAndAfter: n,
                            hLinesBeforeRow: p,
                            colSeparationType: l
                        }
                    }

                    function Or(e) {
                        return "d" === e.substr(0, 1) ? "display" : "text"
                    }
                    var Rr = function(e, t) {
                            var r, n, a = e.body.length,
                                i = e.hLinesBeforeRow,
                                s = 0,
                                l = new Array(a),
                                h = [],
                                m = Math.max(t.fontMetrics().arrayRuleWidth, t.minRuleThickness),
                                u = 1 / t.fontMetrics().ptPerEm,
                                p = 5 * u;
                            e.colSeparationType && "small" === e.colSeparationType && (p = t.havingStyle(w.SCRIPT).sizeMultiplier / t.sizeMultiplier * .2778);
                            var d = 12 * u,
                                f = 3 * u,
                                g = e.arraystretch * d,
                                v = .7 * g,
                                b = .3 * g,
                                y = 0;

                            function x(e) {
                                for (var t = 0; t < e.length; ++t) t > 0 && (y += .25), h.push({
                                    pos: y,
                                    isDashed: e[t]
                                })
                            }
                            for (x(i[0]), r = 0; r < e.body.length; ++r) {
                                var k = e.body[r],
                                    S = v,
                                    M = b;
                                s < k.length && (s = k.length);
                                var z = new Array(k.length);
                                for (n = 0; n < k.length; ++n) {
                                    var A = xt(k[n], t);
                                    M < A.depth && (M = A.depth), S < A.height && (S = A.height), z[n] = A
                                }
                                var T = e.rowGaps[r],
                                    B = 0;
                                T && (B = Fe(T, t)) > 0 && (M < (B += b) && (M = B), B = 0), e.addJot && (M += f), z.height = S, z.depth = M, y += S, z.pos = y, y += M + B, l[r] = z, x(i[r + 1])
                            }
                            var C, q, N = y / 2 + t.fontMetrics().axisHeight,
                                I = e.cols || [],
                                O = [];
                            for (n = 0, q = 0; n < s || q < I.length; ++n, ++q) {
                                for (var R = I[q] || {}, E = !0;
                                    "separator" === R.type;) {
                                    if (E || ((C = Ke.makeSpan(["arraycolsep"], [])).style.width = t.fontMetrics().doubleRuleSep + "em", O.push(C)), "|" !== R.separator && ":" !== R.separator) throw new o("Invalid separator type: " + R.separator);
                                    var L = "|" === R.separator ? "solid" : "dashed",
                                        P = Ke.makeSpan(["vertical-separator"], [], t);
                                    P.style.height = y + "em", P.style.borderRightWidth = m + "em", P.style.borderRightStyle = L, P.style.margin = "0 -" + m / 2 + "em", P.style.verticalAlign = -(y - N) + "em", O.push(P), R = I[++q] || {}, E = !1
                                }
                                if (!(n >= s)) {
                                    var D = void 0;
                                    (n > 0 || e.hskipBeforeAndAfter) && 0 !== (D = c.deflt(R.pregap, p)) && ((C = Ke.makeSpan(["arraycolsep"], [])).style.width = D + "em", O.push(C));
                                    var H = [];
                                    for (r = 0; r < a; ++r) {
                                        var F = l[r],
                                            V = F[n];
                                        if (V) {
                                            var U = F.pos - N;
                                            V.depth = F.depth, V.height = F.height, H.push({
                                                type: "elem",
                                                elem: V,
                                                shift: U
                                            })
                                        }
                                    }
                                    H = Ke.makeVList({
                                        positionType: "individualShift",
                                        children: H
                                    }, t), H = Ke.makeSpan(["col-align-" + (R.align || "c")], [H]), O.push(H), (n < s - 1 || e.hskipBeforeAndAfter) && 0 !== (D = c.deflt(R.postgap, p)) && ((C = Ke.makeSpan(["arraycolsep"], [])).style.width = D + "em", O.push(C))
                                }
                            }
                            if (l = Ke.makeSpan(["mtable"], O), h.length > 0) {
                                for (var G = Ke.makeLineSpan("hline", t, m), Y = Ke.makeLineSpan("hdashline", t, m), _ = [{
                                        type: "elem",
                                        elem: l,
                                        shift: 0
                                    }]; h.length > 0;) {
                                    var W = h.pop(),
                                        X = W.pos - N;
                                    W.isDashed ? _.push({
                                        type: "elem",
                                        elem: Y,
                                        shift: X
                                    }) : _.push({
                                        type: "elem",
                                        elem: G,
                                        shift: X
                                    })
                                }
                                l = Ke.makeVList({
                                    positionType: "individualShift",
                                    children: _
                                }, t)
                            }
                            return Ke.makeSpan(["mord"], [l], t)
                        },
                        Er = {
                            c: "center ",
                            l: "left ",
                            r: "right "
                        },
                        Lr = function(e, t) {
                            var r = new At.MathNode("mtable", e.body.map((function(e) {
                                    return new At.MathNode("mtr", e.map((function(e) {
                                        return new At.MathNode("mtd", [It(e, t)])
                                    })))
                                }))),
                                n = .5 === e.arraystretch ? .1 : .16 + e.arraystretch - 1 + (e.addJot ? .09 : 0);
                            r.setAttribute("rowspacing", n + "em");
                            var a = "",
                                i = "";
                            if (e.cols && e.cols.length > 0) {
                                var o = e.cols,
                                    s = "",
                                    l = !1,
                                    h = 0,
                                    m = o.length;
                                "separator" === o[0].type && (a += "top ", h = 1), "separator" === o[o.length - 1].type && (a += "bottom ", m -= 1);
                                for (var c = h; c < m; c++) "align" === o[c].type ? (i += Er[o[c].align], l && (s += "none "), l = !0) : "separator" === o[c].type && l && (s += "|" === o[c].separator ? "solid " : "dashed ", l = !1);
                                r.setAttribute("columnalign", i.trim()), /[sd]/.test(s) && r.setAttribute("columnlines", s.trim())
                            }
                            if ("align" === e.colSeparationType) {
                                for (var u = e.cols || [], p = "", d = 1; d < u.length; d++) p += d % 2 ? "0em " : "1em ";
                                r.setAttribute("columnspacing", p.trim())
                            } else "alignat" === e.colSeparationType ? r.setAttribute("columnspacing", "0em") : "small" === e.colSeparationType ? r.setAttribute("columnspacing", "0.2778em") : r.setAttribute("columnspacing", "1em");
                            var f = "",
                                g = e.hLinesBeforeRow;
                            a += g[0].length > 0 ? "left " : "", a += g[g.length - 1].length > 0 ? "right " : "";
                            for (var v = 1; v < g.length - 1; v++) f += 0 === g[v].length ? "none " : g[v][0] ? "dashed " : "solid ";
                            return /[sd]/.test(f) && r.setAttribute("rowlines", f.trim()), "" !== a && (r = new At.MathNode("menclose", [r])).setAttribute("notation", a.trim()), e.arraystretch && e.arraystretch < 1 && (r = new At.MathNode("mstyle", [r])).setAttribute("scriptlevel", "1"), r
                        },
                        Pr = function(e, t) {
                            var r, n = [],
                                a = Ir(e.parser, {
                                    cols: n,
                                    addJot: !0
                                }, "display"),
                                i = 0,
                                s = {
                                    type: "ordgroup",
                                    mode: e.mode,
                                    body: []
                                };
                            if (t[0] && "ordgroup" === t[0].type) {
                                for (var l = "", h = 0; h < t[0].body.length; h++) l += Ut(t[0].body[h], "textord").text;
                                r = Number(l), i = 2 * r
                            }
                            var m = !i;
                            a.body.forEach((function(e) {
                                for (var t = 1; t < e.length; t += 2) {
                                    var n = Ut(e[t], "styling");
                                    Ut(n.body[0], "ordgroup").body.unshift(s)
                                }
                                if (m) i < e.length && (i = e.length);
                                else {
                                    var a = e.length / 2;
                                    if (r < a) throw new o("Too many math in a row: expected " + r + ", but got " + a, e[0])
                                }
                            }));
                            for (var c = 0; c < i; ++c) {
                                var u = "r",
                                    p = 0;
                                c % 2 === 1 ? u = "l" : c > 0 && m && (p = 1), n[c] = {
                                    type: "align",
                                    align: u,
                                    pregap: p,
                                    postgap: 0
                                }
                            }
                            return a.colSeparationType = m ? "align" : "alignat", a
                        };
                    qr({
                        type: "array",
                        names: ["array", "darray"],
                        props: {
                            numArgs: 1
                        },
                        handler: function(e, t) {
                            var r = {
                                cols: (Yt(t[0]) ? [t[0]] : Ut(t[0], "ordgroup").body).map((function(e) {
                                    var t = Gt(e).text;
                                    if (-1 !== "lcr".indexOf(t)) return {
                                        type: "align",
                                        align: t
                                    };
                                    if ("|" === t) return {
                                        type: "separator",
                                        separator: "|"
                                    };
                                    if (":" === t) return {
                                        type: "separator",
                                        separator: ":"
                                    };
                                    throw new o("Unknown column alignment: " + t, e)
                                })),
                                hskipBeforeAndAfter: !0
                            };
                            return Ir(e.parser, r, Or(e.envName))
                        },
                        htmlBuilder: Rr,
                        mathmlBuilder: Lr
                    }), qr({
                        type: "array",
                        names: ["matrix", "pmatrix", "bmatrix", "Bmatrix", "vmatrix", "Vmatrix"],
                        props: {
                            numArgs: 0
                        },
                        handler: function(e) {
                            var t = {
                                    matrix: null,
                                    pmatrix: ["(", ")"],
                                    bmatrix: ["[", "]"],
                                    Bmatrix: ["\\{", "\\}"],
                                    vmatrix: ["|", "|"],
                                    Vmatrix: ["\\Vert", "\\Vert"]
                                }[e.envName],
                                r = Ir(e.parser, {
                                    hskipBeforeAndAfter: !1
                                }, Or(e.envName));
                            return t ? {
                                type: "leftright",
                                mode: e.mode,
                                body: [r],
                                left: t[0],
                                right: t[1],
                                rightColor: void 0
                            } : r
                        },
                        htmlBuilder: Rr,
                        mathmlBuilder: Lr
                    }), qr({
                        type: "array",
                        names: ["smallmatrix"],
                        props: {
                            numArgs: 0
                        },
                        handler: function(e) {
                            var t = Ir(e.parser, {
                                arraystretch: .5
                            }, "script");
                            return t.colSeparationType = "small", t
                        },
                        htmlBuilder: Rr,
                        mathmlBuilder: Lr
                    }), qr({
                        type: "array",
                        names: ["subarray"],
                        props: {
                            numArgs: 1
                        },
                        handler: function(e, t) {
                            var r = (Yt(t[0]) ? [t[0]] : Ut(t[0], "ordgroup").body).map((function(e) {
                                var t = Gt(e).text;
                                if (-1 !== "lc".indexOf(t)) return {
                                    type: "align",
                                    align: t
                                };
                                throw new o("Unknown column alignment: " + t, e)
                            }));
                            if (r.length > 1) throw new o("{subarray} can contain only one column");
                            var n = {
                                cols: r,
                                hskipBeforeAndAfter: !1,
                                arraystretch: .5
                            };
                            if ((n = Ir(e.parser, n, "script")).body.length > 0 && n.body[0].length > 1) throw new o("{subarray} can contain only one column");
                            return n
                        },
                        htmlBuilder: Rr,
                        mathmlBuilder: Lr
                    }), qr({
                        type: "array",
                        names: ["cases", "dcases", "rcases", "drcases"],
                        props: {
                            numArgs: 0
                        },
                        handler: function(e) {
                            var t = Ir(e.parser, {
                                arraystretch: 1.2,
                                cols: [{
                                    type: "align",
                                    align: "l",
                                    pregap: 0,
                                    postgap: 1
                                }, {
                                    type: "align",
                                    align: "l",
                                    pregap: 0,
                                    postgap: 0
                                }]
                            }, Or(e.envName));
                            return {
                                type: "leftright",
                                mode: e.mode,
                                body: [t],
                                left: e.envName.indexOf("r") > -1 ? "." : "\\{",
                                right: e.envName.indexOf("r") > -1 ? "\\}" : ".",
                                rightColor: void 0
                            }
                        },
                        htmlBuilder: Rr,
                        mathmlBuilder: Lr
                    }), qr({
                        type: "array",
                        names: ["aligned"],
                        props: {
                            numArgs: 0
                        },
                        handler: Pr,
                        htmlBuilder: Rr,
                        mathmlBuilder: Lr
                    }), qr({
                        type: "array",
                        names: ["gathered"],
                        props: {
                            numArgs: 0
                        },
                        handler: function(e) {
                            return Ir(e.parser, {
                                cols: [{
                                    type: "align",
                                    align: "c"
                                }],
                                addJot: !0
                            }, "display")
                        },
                        htmlBuilder: Rr,
                        mathmlBuilder: Lr
                    }), qr({
                        type: "array",
                        names: ["alignedat"],
                        props: {
                            numArgs: 1
                        },
                        handler: Pr,
                        htmlBuilder: Rr,
                        mathmlBuilder: Lr
                    }), ot({
                        type: "text",
                        names: ["\\hline", "\\hdashline"],
                        props: {
                            numArgs: 0,
                            allowedInText: !0,
                            allowedInMath: !0
                        },
                        handler: function(e, t) {
                            throw new o(e.funcName + " valid only within array environment")
                        }
                    });
                    var Dr = Cr;
                    ot({
                        type: "environment",
                        names: ["\\begin", "\\end"],
                        props: {
                            numArgs: 1,
                            argTypes: ["text"]
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = e.funcName,
                                a = t[0];
                            if ("ordgroup" !== a.type) throw new o("Invalid environment name", a);
                            for (var i = "", s = 0; s < a.body.length; ++s) i += Ut(a.body[s], "textord").text;
                            if ("\\begin" === n) {
                                if (!Dr.hasOwnProperty(i)) throw new o("No such environment: " + i, a);
                                var l = Dr[i],
                                    h = r.parseArguments("\\begin{" + i + "}", l),
                                    m = h.args,
                                    c = h.optArgs,
                                    u = {
                                        mode: r.mode,
                                        envName: i,
                                        parser: r
                                    },
                                    p = l.handler(u, m, c);
                                r.expect("\\end", !1);
                                var d = r.nextToken,
                                    f = Ut(r.parseFunction(), "environment");
                                if (f.name !== i) throw new o("Mismatch: \\begin{" + i + "} matched by \\end{" + f.name + "}", d);
                                return p
                            }
                            return {
                                type: "environment",
                                mode: r.mode,
                                name: i,
                                nameGroup: a
                            }
                        }
                    });
                    var Hr = Ke.makeSpan;

                    function Fr(e, t) {
                        var r = dt(e.body, t, !0);
                        return Hr([e.mclass], r, t)
                    }

                    function Vr(e, t) {
                        var r, n = qt(e.body, t);
                        return "minner" === e.mclass ? At.newDocumentFragment(n) : ("mord" === e.mclass ? e.isCharacterBox ? (r = n[0]).type = "mi" : r = new At.MathNode("mi", n) : (e.isCharacterBox ? (r = n[0]).type = "mo" : r = new At.MathNode("mo", n), "mbin" === e.mclass ? (r.attributes.lspace = "0.22em", r.attributes.rspace = "0.22em") : "mpunct" === e.mclass ? (r.attributes.lspace = "0em", r.attributes.rspace = "0.17em") : "mopen" !== e.mclass && "mclose" !== e.mclass || (r.attributes.lspace = "0em", r.attributes.rspace = "0em")), r)
                    }
                    ot({
                        type: "mclass",
                        names: ["\\mathord", "\\mathbin", "\\mathrel", "\\mathopen", "\\mathclose", "\\mathpunct", "\\mathinner"],
                        props: {
                            numArgs: 1
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = e.funcName,
                                a = t[0];
                            return {
                                type: "mclass",
                                mode: r.mode,
                                mclass: "m" + n.substr(5),
                                body: lt(a),
                                isCharacterBox: c.isCharacterBox(a)
                            }
                        },
                        htmlBuilder: Fr,
                        mathmlBuilder: Vr
                    });
                    var Ur = function(e) {
                        var t = "ordgroup" === e.type && e.body.length ? e.body[0] : e;
                        return "atom" !== t.type || "bin" !== t.family && "rel" !== t.family ? "mord" : "m" + t.family
                    };
                    ot({
                        type: "mclass",
                        names: ["\\@binrel"],
                        props: {
                            numArgs: 2
                        },
                        handler: function(e, t) {
                            return {
                                type: "mclass",
                                mode: e.parser.mode,
                                mclass: Ur(t[0]),
                                body: [t[1]],
                                isCharacterBox: c.isCharacterBox(t[1])
                            }
                        }
                    }), ot({
                        type: "mclass",
                        names: ["\\stackrel", "\\overset", "\\underset"],
                        props: {
                            numArgs: 2
                        },
                        handler: function(e, t) {
                            var r, n = e.parser,
                                a = e.funcName,
                                i = t[1],
                                o = t[0];
                            r = "\\stackrel" !== a ? Ur(i) : "mrel";
                            var s = {
                                    type: "op",
                                    mode: i.mode,
                                    limits: !0,
                                    alwaysHandleSupSub: !0,
                                    parentIsSupSub: !1,
                                    symbol: !1,
                                    suppressBaseShift: "\\stackrel" !== a,
                                    body: lt(i)
                                },
                                l = {
                                    type: "supsub",
                                    mode: o.mode,
                                    base: s,
                                    sup: "\\underset" === a ? null : o,
                                    sub: "\\underset" === a ? o : null
                                };
                            return {
                                type: "mclass",
                                mode: n.mode,
                                mclass: r,
                                body: [l],
                                isCharacterBox: c.isCharacterBox(l)
                            }
                        },
                        htmlBuilder: Fr,
                        mathmlBuilder: Vr
                    });
                    var Gr = function(e, t) {
                            var r = e.font,
                                n = t.withFont(r);
                            return xt(e.body, n)
                        },
                        Yr = function(e, t) {
                            var r = e.font,
                                n = t.withFont(r);
                            return It(e.body, n)
                        },
                        _r = {
                            "\\Bbb": "\\mathbb",
                            "\\bold": "\\mathbf",
                            "\\frak": "\\mathfrak",
                            "\\bm": "\\boldsymbol"
                        };
                    ot({
                        type: "font",
                        names: ["\\mathrm", "\\mathit", "\\mathbf", "\\mathnormal", "\\mathbb", "\\mathcal", "\\mathfrak", "\\mathscr", "\\mathsf", "\\mathtt", "\\Bbb", "\\bold", "\\frak"],
                        props: {
                            numArgs: 1,
                            greediness: 2
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = e.funcName,
                                a = t[0],
                                i = n;
                            return i in _r && (i = _r[i]), {
                                type: "font",
                                mode: r.mode,
                                font: i.slice(1),
                                body: a
                            }
                        },
                        htmlBuilder: Gr,
                        mathmlBuilder: Yr
                    }), ot({
                        type: "mclass",
                        names: ["\\boldsymbol", "\\bm"],
                        props: {
                            numArgs: 1,
                            greediness: 2
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = t[0],
                                a = c.isCharacterBox(n);
                            return {
                                type: "mclass",
                                mode: r.mode,
                                mclass: Ur(n),
                                body: [{
                                    type: "font",
                                    mode: r.mode,
                                    font: "boldsymbol",
                                    body: n
                                }],
                                isCharacterBox: a
                            }
                        }
                    }), ot({
                        type: "font",
                        names: ["\\rm", "\\sf", "\\tt", "\\bf", "\\it", "\\cal"],
                        props: {
                            numArgs: 0,
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = e.funcName,
                                a = e.breakOnTokenText,
                                i = r.mode,
                                o = r.parseExpression(!0, a);
                            return {
                                type: "font",
                                mode: i,
                                font: "math" + n.slice(1),
                                body: {
                                    type: "ordgroup",
                                    mode: r.mode,
                                    body: o
                                }
                            }
                        },
                        htmlBuilder: Gr,
                        mathmlBuilder: Yr
                    });
                    var Wr = function(e, t) {
                            var r = t;
                            return "display" === e ? r = r.id >= w.SCRIPT.id ? r.text() : w.DISPLAY : "text" === e && r.size === w.DISPLAY.size ? r = w.TEXT : "script" === e ? r = w.SCRIPT : "scriptscript" === e && (r = w.SCRIPTSCRIPT), r
                        },
                        Xr = function(e, t) {
                            var r, n = Wr(e.size, t.style),
                                a = n.fracNum(),
                                i = n.fracDen();
                            r = t.havingStyle(a);
                            var o = xt(e.numer, r, t);
                            if (e.continued) {
                                var s = 8.5 / t.fontMetrics().ptPerEm,
                                    l = 3.5 / t.fontMetrics().ptPerEm;
                                o.height = o.height < s ? s : o.height, o.depth = o.depth < l ? l : o.depth
                            }
                            r = t.havingStyle(i);
                            var h, m, c, u, p, d, f, g, v, b, y = xt(e.denom, r, t);
                            if (e.hasBarLine ? (e.barSize ? (m = Fe(e.barSize, t), h = Ke.makeLineSpan("frac-line", t, m)) : h = Ke.makeLineSpan("frac-line", t), m = h.height, c = h.height) : (h = null, m = 0, c = t.fontMetrics().defaultRuleThickness), n.size === w.DISPLAY.size || "display" === e.size ? (u = t.fontMetrics().num1, p = m > 0 ? 3 * c : 7 * c, d = t.fontMetrics().denom1) : (m > 0 ? (u = t.fontMetrics().num2, p = c) : (u = t.fontMetrics().num3, p = 3 * c), d = t.fontMetrics().denom2), h) {
                                var x = t.fontMetrics().axisHeight;
                                u - o.depth - (x + .5 * m) < p && (u += p - (u - o.depth - (x + .5 * m))), x - .5 * m - (y.height - d) < p && (d += p - (x - .5 * m - (y.height - d)));
                                var k = -(x - .5 * m);
                                f = Ke.makeVList({
                                    positionType: "individualShift",
                                    children: [{
                                        type: "elem",
                                        elem: y,
                                        shift: d
                                    }, {
                                        type: "elem",
                                        elem: h,
                                        shift: k
                                    }, {
                                        type: "elem",
                                        elem: o,
                                        shift: -u
                                    }]
                                }, t)
                            } else {
                                var S = u - o.depth - (y.height - d);
                                S < p && (u += .5 * (p - S), d += .5 * (p - S)), f = Ke.makeVList({
                                    positionType: "individualShift",
                                    children: [{
                                        type: "elem",
                                        elem: y,
                                        shift: d
                                    }, {
                                        type: "elem",
                                        elem: o,
                                        shift: -u
                                    }]
                                }, t)
                            }
                            return r = t.havingStyle(n), f.height *= r.sizeMultiplier / t.sizeMultiplier, f.depth *= r.sizeMultiplier / t.sizeMultiplier, g = n.size === w.DISPLAY.size ? t.fontMetrics().delim1 : t.fontMetrics().delim2, v = null == e.leftDelim ? yt(t, ["mopen"]) : wr(e.leftDelim, g, !0, t.havingStyle(n), e.mode, ["mopen"]), b = e.continued ? Ke.makeSpan([]) : null == e.rightDelim ? yt(t, ["mclose"]) : wr(e.rightDelim, g, !0, t.havingStyle(n), e.mode, ["mclose"]), Ke.makeSpan(["mord"].concat(r.sizingClasses(t)), [v, Ke.makeSpan(["mfrac"], [f]), b], t)
                        },
                        jr = function(e, t) {
                            var r = new At.MathNode("mfrac", [It(e.numer, t), It(e.denom, t)]);
                            if (e.hasBarLine) {
                                if (e.barSize) {
                                    var n = Fe(e.barSize, t);
                                    r.setAttribute("linethickness", n + "em")
                                }
                            } else r.setAttribute("linethickness", "0px");
                            var a = Wr(e.size, t.style);
                            if (a.size !== t.style.size) {
                                r = new At.MathNode("mstyle", [r]);
                                var i = a.size === w.DISPLAY.size ? "true" : "false";
                                r.setAttribute("displaystyle", i), r.setAttribute("scriptlevel", "0")
                            }
                            if (null != e.leftDelim || null != e.rightDelim) {
                                var o = [];
                                if (null != e.leftDelim) {
                                    var s = new At.MathNode("mo", [new At.TextNode(e.leftDelim.replace("\\", ""))]);
                                    s.setAttribute("fence", "true"), o.push(s)
                                }
                                if (o.push(r), null != e.rightDelim) {
                                    var l = new At.MathNode("mo", [new At.TextNode(e.rightDelim.replace("\\", ""))]);
                                    l.setAttribute("fence", "true"), o.push(l)
                                }
                                return Bt(o)
                            }
                            return r
                        };
                    ot({
                        type: "genfrac",
                        names: ["\\cfrac", "\\dfrac", "\\frac", "\\tfrac", "\\dbinom", "\\binom", "\\tbinom", "\\\\atopfrac", "\\\\bracefrac", "\\\\brackfrac"],
                        props: {
                            numArgs: 2,
                            greediness: 2
                        },
                        handler: function(e, t) {
                            var r, n = e.parser,
                                a = e.funcName,
                                i = t[0],
                                o = t[1],
                                s = null,
                                l = null,
                                h = "auto";
                            switch (a) {
                                case "\\cfrac":
                                case "\\dfrac":
                                case "\\frac":
                                case "\\tfrac":
                                    r = !0;
                                    break;
                                case "\\\\atopfrac":
                                    r = !1;
                                    break;
                                case "\\dbinom":
                                case "\\binom":
                                case "\\tbinom":
                                    r = !1, s = "(", l = ")";
                                    break;
                                case "\\\\bracefrac":
                                    r = !1, s = "\\{", l = "\\}";
                                    break;
                                case "\\\\brackfrac":
                                    r = !1, s = "[", l = "]";
                                    break;
                                default:
                                    throw new Error("Unrecognized genfrac command")
                            }
                            switch (a) {
                                case "\\cfrac":
                                case "\\dfrac":
                                case "\\dbinom":
                                    h = "display";
                                    break;
                                case "\\tfrac":
                                case "\\tbinom":
                                    h = "text"
                            }
                            return {
                                type: "genfrac",
                                mode: n.mode,
                                continued: "\\cfrac" === a,
                                numer: i,
                                denom: o,
                                hasBarLine: r,
                                leftDelim: s,
                                rightDelim: l,
                                size: h,
                                barSize: null
                            }
                        },
                        htmlBuilder: Xr,
                        mathmlBuilder: jr
                    }), ot({
                        type: "infix",
                        names: ["\\over", "\\choose", "\\atop", "\\brace", "\\brack"],
                        props: {
                            numArgs: 0,
                            infix: !0
                        },
                        handler: function(e) {
                            var t, r = e.parser,
                                n = e.funcName,
                                a = e.token;
                            switch (n) {
                                case "\\over":
                                    t = "\\frac";
                                    break;
                                case "\\choose":
                                    t = "\\binom";
                                    break;
                                case "\\atop":
                                    t = "\\\\atopfrac";
                                    break;
                                case "\\brace":
                                    t = "\\\\bracefrac";
                                    break;
                                case "\\brack":
                                    t = "\\\\brackfrac";
                                    break;
                                default:
                                    throw new Error("Unrecognized infix genfrac command")
                            }
                            return {
                                type: "infix",
                                mode: r.mode,
                                replaceWith: t,
                                token: a
                            }
                        }
                    });
                    var $r = ["display", "text", "script", "scriptscript"],
                        Zr = function(e) {
                            var t = null;
                            return e.length > 0 && (t = "." === (t = e) ? null : t), t
                        };
                    ot({
                        type: "genfrac",
                        names: ["\\genfrac"],
                        props: {
                            numArgs: 6,
                            greediness: 6,
                            argTypes: ["math", "math", "size", "text", "math", "math"]
                        },
                        handler: function(e, t) {
                            var r, n = e.parser,
                                a = t[4],
                                i = t[5],
                                o = "atom" === t[0].type && "open" === t[0].family ? Zr(t[0].text) : null,
                                s = "atom" === t[1].type && "close" === t[1].family ? Zr(t[1].text) : null,
                                l = Ut(t[2], "size"),
                                h = null;
                            r = !!l.isBlank || (h = l.value).number > 0;
                            var m = "auto",
                                c = t[3];
                            if ("ordgroup" === c.type) {
                                if (c.body.length > 0) {
                                    var u = Ut(c.body[0], "textord");
                                    m = $r[Number(u.text)]
                                }
                            } else c = Ut(c, "textord"), m = $r[Number(c.text)];
                            return {
                                type: "genfrac",
                                mode: n.mode,
                                numer: a,
                                denom: i,
                                continued: !1,
                                hasBarLine: r,
                                barSize: h,
                                leftDelim: o,
                                rightDelim: s,
                                size: m
                            }
                        },
                        htmlBuilder: Xr,
                        mathmlBuilder: jr
                    }), ot({
                        type: "infix",
                        names: ["\\above"],
                        props: {
                            numArgs: 1,
                            argTypes: ["size"],
                            infix: !0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = (e.funcName, e.token);
                            return {
                                type: "infix",
                                mode: r.mode,
                                replaceWith: "\\\\abovefrac",
                                size: Ut(t[0], "size").value,
                                token: n
                            }
                        }
                    }), ot({
                        type: "genfrac",
                        names: ["\\\\abovefrac"],
                        props: {
                            numArgs: 3,
                            argTypes: ["math", "size", "math"]
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = (e.funcName, t[0]),
                                a = function(e) {
                                    if (!e) throw new Error("Expected non-null, but got " + String(e));
                                    return e
                                }(Ut(t[1], "infix").size),
                                i = t[2],
                                o = a.number > 0;
                            return {
                                type: "genfrac",
                                mode: r.mode,
                                numer: n,
                                denom: i,
                                continued: !1,
                                hasBarLine: o,
                                barSize: a,
                                leftDelim: null,
                                rightDelim: null,
                                size: "auto"
                            }
                        },
                        htmlBuilder: Xr,
                        mathmlBuilder: jr
                    });
                    var Kr = function(e, t) {
                        var r, n, a = t.style;
                        "supsub" === e.type ? (r = e.sup ? xt(e.sup, t.havingStyle(a.sup()), t) : xt(e.sub, t.havingStyle(a.sub()), t), n = Ut(e.base, "horizBrace")) : n = Ut(e, "horizBrace");
                        var i, o = xt(n.base, t.havingBaseStyle(w.DISPLAY)),
                            s = Vt(n, t);
                        if (n.isOver ? (i = Ke.makeVList({
                                positionType: "firstBaseline",
                                children: [{
                                    type: "elem",
                                    elem: o
                                }, {
                                    type: "kern",
                                    size: .1
                                }, {
                                    type: "elem",
                                    elem: s
                                }]
                            }, t)).children[0].children[0].children[1].classes.push("svg-align") : (i = Ke.makeVList({
                                positionType: "bottom",
                                positionData: o.depth + .1 + s.height,
                                children: [{
                                    type: "elem",
                                    elem: s
                                }, {
                                    type: "kern",
                                    size: .1
                                }, {
                                    type: "elem",
                                    elem: o
                                }]
                            }, t)).children[0].children[0].children[0].classes.push("svg-align"), r) {
                            var l = Ke.makeSpan(["mord", n.isOver ? "mover" : "munder"], [i], t);
                            i = n.isOver ? Ke.makeVList({
                                positionType: "firstBaseline",
                                children: [{
                                    type: "elem",
                                    elem: l
                                }, {
                                    type: "kern",
                                    size: .2
                                }, {
                                    type: "elem",
                                    elem: r
                                }]
                            }, t) : Ke.makeVList({
                                positionType: "bottom",
                                positionData: l.depth + .2 + r.height + r.depth,
                                children: [{
                                    type: "elem",
                                    elem: r
                                }, {
                                    type: "kern",
                                    size: .2
                                }, {
                                    type: "elem",
                                    elem: l
                                }]
                            }, t)
                        }
                        return Ke.makeSpan(["mord", n.isOver ? "mover" : "munder"], [i], t)
                    };
                    ot({
                        type: "horizBrace",
                        names: ["\\overbrace", "\\underbrace"],
                        props: {
                            numArgs: 1
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = e.funcName;
                            return {
                                type: "horizBrace",
                                mode: r.mode,
                                label: n,
                                isOver: /^\\over/.test(n),
                                base: t[0]
                            }
                        },
                        htmlBuilder: Kr,
                        mathmlBuilder: function(e, t) {
                            var r = Ft(e.label);
                            return new At.MathNode(e.isOver ? "mover" : "munder", [It(e.base, t), r])
                        }
                    }), ot({
                        type: "href",
                        names: ["\\href"],
                        props: {
                            numArgs: 2,
                            argTypes: ["url", "original"],
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = t[1],
                                a = Ut(t[0], "url").url;
                            return r.settings.isTrusted({
                                command: "\\href",
                                url: a
                            }) ? {
                                type: "href",
                                mode: r.mode,
                                href: a,
                                body: lt(n)
                            } : r.formatUnsupportedCmd("\\href")
                        },
                        htmlBuilder: function(e, t) {
                            var r = dt(e.body, t, !1);
                            return Ke.makeAnchor(e.href, [], r, t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = Nt(e.body, t);
                            return r instanceof Mt || (r = new Mt("mrow", [r])), r.setAttribute("href", e.href), r
                        }
                    }), ot({
                        type: "href",
                        names: ["\\url"],
                        props: {
                            numArgs: 1,
                            argTypes: ["url"],
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = Ut(t[0], "url").url;
                            if (!r.settings.isTrusted({
                                    command: "\\url",
                                    url: n
                                })) return r.formatUnsupportedCmd("\\url");
                            for (var a = [], i = 0; i < n.length; i++) {
                                var o = n[i];
                                "~" === o && (o = "\\textasciitilde"), a.push({
                                    type: "textord",
                                    mode: "text",
                                    text: o
                                })
                            }
                            var s = {
                                type: "text",
                                mode: r.mode,
                                font: "\\texttt",
                                body: a
                            };
                            return {
                                type: "href",
                                mode: r.mode,
                                href: n,
                                body: lt(s)
                            }
                        }
                    }), ot({
                        type: "html",
                        names: ["\\htmlClass", "\\htmlId", "\\htmlStyle", "\\htmlData"],
                        props: {
                            numArgs: 2,
                            argTypes: ["raw", "original"],
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            var r, n = e.parser,
                                a = e.funcName,
                                i = (e.token, Ut(t[0], "raw").string),
                                s = t[1];
                            n.settings.strict && n.settings.reportNonstrict("htmlExtension", "HTML extension is disabled on strict mode");
                            var l = {};
                            switch (a) {
                                case "\\htmlClass":
                                    l.class = i, r = {
                                        command: "\\htmlClass",
                                        class: i
                                    };
                                    break;
                                case "\\htmlId":
                                    l.id = i, r = {
                                        command: "\\htmlId",
                                        id: i
                                    };
                                    break;
                                case "\\htmlStyle":
                                    l.style = i, r = {
                                        command: "\\htmlStyle",
                                        style: i
                                    };
                                    break;
                                case "\\htmlData":
                                    for (var h = i.split(","), m = 0; m < h.length; m++) {
                                        var c = h[m].split("=");
                                        if (2 !== c.length) throw new o("Error parsing key-value for \\htmlData");
                                        l["data-" + c[0].trim()] = c[1].trim()
                                    }
                                    r = {
                                        command: "\\htmlData",
                                        attributes: l
                                    };
                                    break;
                                default:
                                    throw new Error("Unrecognized html command")
                            }
                            return n.settings.isTrusted(r) ? {
                                type: "html",
                                mode: n.mode,
                                attributes: l,
                                body: lt(s)
                            } : n.formatUnsupportedCmd(a)
                        },
                        htmlBuilder: function(e, t) {
                            var r = dt(e.body, t, !1),
                                n = ["enclosing"];
                            e.attributes.class && n.push.apply(n, e.attributes.class.trim().split(/\s+/));
                            var a = Ke.makeSpan(n, r, t);
                            for (var i in e.attributes) "class" !== i && e.attributes.hasOwnProperty(i) && a.setAttribute(i, e.attributes[i]);
                            return a
                        },
                        mathmlBuilder: function(e, t) {
                            return Nt(e.body, t)
                        }
                    }), ot({
                        type: "htmlmathml",
                        names: ["\\html@mathml"],
                        props: {
                            numArgs: 2,
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            return {
                                type: "htmlmathml",
                                mode: e.parser.mode,
                                html: lt(t[0]),
                                mathml: lt(t[1])
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = dt(e.html, t, !1);
                            return Ke.makeFragment(r)
                        },
                        mathmlBuilder: function(e, t) {
                            return Nt(e.mathml, t)
                        }
                    });
                    var Jr = function(e) {
                        if (/^[-+]? *(\d+(\.\d*)?|\.\d+)$/.test(e)) return {
                            number: +e,
                            unit: "bp"
                        };
                        var t = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(e);
                        if (!t) throw new o("Invalid size: '" + e + "' in \\includegraphics");
                        var r = {
                            number: +(t[1] + t[2]),
                            unit: t[3]
                        };
                        if (!He(r)) throw new o("Invalid unit: '" + r.unit + "' in \\includegraphics.");
                        return r
                    };
                    ot({
                        type: "includegraphics",
                        names: ["\\includegraphics"],
                        props: {
                            numArgs: 1,
                            numOptionalArgs: 1,
                            argTypes: ["raw", "url"],
                            allowedInText: !1
                        },
                        handler: function(e, t, r) {
                            var n = e.parser,
                                a = {
                                    number: 0,
                                    unit: "em"
                                },
                                i = {
                                    number: .9,
                                    unit: "em"
                                },
                                s = {
                                    number: 0,
                                    unit: "em"
                                },
                                l = "";
                            if (r[0])
                                for (var h = Ut(r[0], "raw").string.split(","), m = 0; m < h.length; m++) {
                                    var c = h[m].split("=");
                                    if (2 === c.length) {
                                        var u = c[1].trim();
                                        switch (c[0].trim()) {
                                            case "alt":
                                                l = u;
                                                break;
                                            case "width":
                                                a = Jr(u);
                                                break;
                                            case "height":
                                                i = Jr(u);
                                                break;
                                            case "totalheight":
                                                s = Jr(u);
                                                break;
                                            default:
                                                throw new o("Invalid key: '" + c[0] + "' in \\includegraphics.")
                                        }
                                    }
                                }
                            var p = Ut(t[0], "url").url;
                            return "" === l && (l = (l = (l = p).replace(/^.*[\\/]/, "")).substring(0, l.lastIndexOf("."))), n.settings.isTrusted({
                                command: "\\includegraphics",
                                url: p
                            }) ? {
                                type: "includegraphics",
                                mode: n.mode,
                                alt: l,
                                width: a,
                                height: i,
                                totalheight: s,
                                src: p
                            } : n.formatUnsupportedCmd("\\includegraphics")
                        },
                        htmlBuilder: function(e, t) {
                            var r = Fe(e.height, t),
                                n = 0;
                            e.totalheight.number > 0 && (n = Fe(e.totalheight, t) - r, n = Number(n.toFixed(2)));
                            var a = 0;
                            e.width.number > 0 && (a = Fe(e.width, t));
                            var i = {
                                height: r + n + "em"
                            };
                            a > 0 && (i.width = a + "em"), n > 0 && (i.verticalAlign = -n + "em");
                            var o = new R(e.src, e.alt, i);
                            return o.height = r, o.depth = n, o
                        },
                        mathmlBuilder: function(e, t) {
                            var r = new At.MathNode("mglyph", []);
                            r.setAttribute("alt", e.alt);
                            var n = Fe(e.height, t),
                                a = 0;
                            if (e.totalheight.number > 0 && (a = (a = Fe(e.totalheight, t) - n).toFixed(2), r.setAttribute("valign", "-" + a + "em")), r.setAttribute("height", n + a + "em"), e.width.number > 0) {
                                var i = Fe(e.width, t);
                                r.setAttribute("width", i + "em")
                            }
                            return r.setAttribute("src", e.src), r
                        }
                    }), ot({
                        type: "kern",
                        names: ["\\kern", "\\mkern", "\\hskip", "\\mskip"],
                        props: {
                            numArgs: 1,
                            argTypes: ["size"],
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = e.funcName,
                                a = Ut(t[0], "size");
                            if (r.settings.strict) {
                                var i = "m" === n[1],
                                    o = "mu" === a.value.unit;
                                i ? (o || r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " supports only mu units, not " + a.value.unit + " units"), "math" !== r.mode && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " works only in math mode")) : o && r.settings.reportNonstrict("mathVsTextUnits", "LaTeX's " + n + " doesn't support mu units")
                            }
                            return {
                                type: "kern",
                                mode: r.mode,
                                dimension: a.value
                            }
                        },
                        htmlBuilder: function(e, t) {
                            return Ke.makeGlue(e.dimension, t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = Fe(e.dimension, t);
                            return new At.SpaceNode(r)
                        }
                    }), ot({
                        type: "lap",
                        names: ["\\mathllap", "\\mathrlap", "\\mathclap"],
                        props: {
                            numArgs: 1,
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = e.funcName,
                                a = t[0];
                            return {
                                type: "lap",
                                mode: r.mode,
                                alignment: n.slice(5),
                                body: a
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r;
                            "clap" === e.alignment ? (r = Ke.makeSpan([], [xt(e.body, t)]), r = Ke.makeSpan(["inner"], [r], t)) : r = Ke.makeSpan(["inner"], [xt(e.body, t)]);
                            var n = Ke.makeSpan(["fix"], []),
                                a = Ke.makeSpan([e.alignment], [r, n], t),
                                i = Ke.makeSpan(["strut"]);
                            return i.style.height = a.height + a.depth + "em", i.style.verticalAlign = -a.depth + "em", a.children.unshift(i), a = Ke.makeSpan(["thinbox"], [a], t), Ke.makeSpan(["mord", "vbox"], [a], t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = new At.MathNode("mpadded", [It(e.body, t)]);
                            if ("rlap" !== e.alignment) {
                                var n = "llap" === e.alignment ? "-1" : "-0.5";
                                r.setAttribute("lspace", n + "width")
                            }
                            return r.setAttribute("width", "0px"), r
                        }
                    }), ot({
                        type: "styling",
                        names: ["\\(", "$"],
                        props: {
                            numArgs: 0,
                            allowedInText: !0,
                            allowedInMath: !1
                        },
                        handler: function(e, t) {
                            var r = e.funcName,
                                n = e.parser,
                                a = n.mode;
                            n.switchMode("math");
                            var i = "\\(" === r ? "\\)" : "$",
                                o = n.parseExpression(!1, i);
                            return n.expect(i), n.switchMode(a), {
                                type: "styling",
                                mode: n.mode,
                                style: "text",
                                body: o
                            }
                        }
                    }), ot({
                        type: "text",
                        names: ["\\)", "\\]"],
                        props: {
                            numArgs: 0,
                            allowedInText: !0,
                            allowedInMath: !1
                        },
                        handler: function(e, t) {
                            throw new o("Mismatched " + e.funcName)
                        }
                    });
                    var Qr = function(e, t) {
                        switch (t.style.size) {
                            case w.DISPLAY.size:
                                return e.display;
                            case w.TEXT.size:
                                return e.text;
                            case w.SCRIPT.size:
                                return e.script;
                            case w.SCRIPTSCRIPT.size:
                                return e.scriptscript;
                            default:
                                return e.text
                        }
                    };
                    ot({
                        type: "mathchoice",
                        names: ["\\mathchoice"],
                        props: {
                            numArgs: 4
                        },
                        handler: function(e, t) {
                            return {
                                type: "mathchoice",
                                mode: e.parser.mode,
                                display: lt(t[0]),
                                text: lt(t[1]),
                                script: lt(t[2]),
                                scriptscript: lt(t[3])
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = Qr(e, t),
                                n = dt(r, t, !1);
                            return Ke.makeFragment(n)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = Qr(e, t);
                            return Nt(r, t)
                        }
                    });
                    var en = function(e, t, r, n, a, i, o) {
                            var s, l, h;
                            if (e = Ke.makeSpan([], [e]), t) {
                                var m = xt(t, n.havingStyle(a.sup()), n);
                                l = {
                                    elem: m,
                                    kern: Math.max(n.fontMetrics().bigOpSpacing1, n.fontMetrics().bigOpSpacing3 - m.depth)
                                }
                            }
                            if (r) {
                                var c = xt(r, n.havingStyle(a.sub()), n);
                                s = {
                                    elem: c,
                                    kern: Math.max(n.fontMetrics().bigOpSpacing2, n.fontMetrics().bigOpSpacing4 - c.height)
                                }
                            }
                            if (l && s) {
                                var u = n.fontMetrics().bigOpSpacing5 + s.elem.height + s.elem.depth + s.kern + e.depth + o;
                                h = Ke.makeVList({
                                    positionType: "bottom",
                                    positionData: u,
                                    children: [{
                                        type: "kern",
                                        size: n.fontMetrics().bigOpSpacing5
                                    }, {
                                        type: "elem",
                                        elem: s.elem,
                                        marginLeft: -i + "em"
                                    }, {
                                        type: "kern",
                                        size: s.kern
                                    }, {
                                        type: "elem",
                                        elem: e
                                    }, {
                                        type: "kern",
                                        size: l.kern
                                    }, {
                                        type: "elem",
                                        elem: l.elem,
                                        marginLeft: i + "em"
                                    }, {
                                        type: "kern",
                                        size: n.fontMetrics().bigOpSpacing5
                                    }]
                                }, n)
                            } else if (s) {
                                var p = e.height - o;
                                h = Ke.makeVList({
                                    positionType: "top",
                                    positionData: p,
                                    children: [{
                                        type: "kern",
                                        size: n.fontMetrics().bigOpSpacing5
                                    }, {
                                        type: "elem",
                                        elem: s.elem,
                                        marginLeft: -i + "em"
                                    }, {
                                        type: "kern",
                                        size: s.kern
                                    }, {
                                        type: "elem",
                                        elem: e
                                    }]
                                }, n)
                            } else {
                                if (!l) return e;
                                var d = e.depth + o;
                                h = Ke.makeVList({
                                    positionType: "bottom",
                                    positionData: d,
                                    children: [{
                                        type: "elem",
                                        elem: e
                                    }, {
                                        type: "kern",
                                        size: l.kern
                                    }, {
                                        type: "elem",
                                        elem: l.elem,
                                        marginLeft: i + "em"
                                    }, {
                                        type: "kern",
                                        size: n.fontMetrics().bigOpSpacing5
                                    }]
                                }, n)
                            }
                            return Ke.makeSpan(["mop", "op-limits"], [h], n)
                        },
                        tn = ["\\smallint"],
                        rn = function(e, t) {
                            var r, n, a, i = !1;
                            "supsub" === e.type ? (r = e.sup, n = e.sub, a = Ut(e.base, "op"), i = !0) : a = Ut(e, "op");
                            var o, s = t.style,
                                l = !1;
                            if (s.size === w.DISPLAY.size && a.symbol && !c.contains(tn, a.name) && (l = !0), a.symbol) {
                                var h = l ? "Size2-Regular" : "Size1-Regular",
                                    m = "";
                                if ("\\oiint" !== a.name && "\\oiiint" !== a.name || (m = a.name.substr(1), a.name = "oiint" === m ? "\\iint" : "\\iiint"), o = Ke.makeSymbol(a.name, h, "math", t, ["mop", "op-symbol", l ? "large-op" : "small-op"]), m.length > 0) {
                                    var u = o.italic,
                                        p = Ke.staticSvg(m + "Size" + (l ? "2" : "1"), t);
                                    o = Ke.makeVList({
                                        positionType: "individualShift",
                                        children: [{
                                            type: "elem",
                                            elem: o,
                                            shift: 0
                                        }, {
                                            type: "elem",
                                            elem: p,
                                            shift: l ? .08 : 0
                                        }]
                                    }, t), a.name = "\\" + m, o.classes.unshift("mop"), o.italic = u
                                }
                            } else if (a.body) {
                                var d = dt(a.body, t, !0);
                                1 === d.length && d[0] instanceof L ? (o = d[0]).classes[0] = "mop" : o = Ke.makeSpan(["mop"], Ke.tryCombineChars(d), t)
                            } else {
                                for (var f = [], g = 1; g < a.name.length; g++) f.push(Ke.mathsym(a.name[g], a.mode, t));
                                o = Ke.makeSpan(["mop"], f, t)
                            }
                            var v = 0,
                                b = 0;
                            return (o instanceof L || "\\oiint" === a.name || "\\oiiint" === a.name) && !a.suppressBaseShift && (v = (o.height - o.depth) / 2 - t.fontMetrics().axisHeight, b = o.italic), i ? en(o, r, n, t, s, b, v) : (v && (o.style.position = "relative", o.style.top = v + "em"), o)
                        },
                        nn = function(e, t) {
                            var r;
                            if (e.symbol) r = new Mt("mo", [Tt(e.name, e.mode)]), c.contains(tn, e.name) && r.setAttribute("largeop", "false");
                            else if (e.body) r = new Mt("mo", qt(e.body, t));
                            else {
                                r = new Mt("mi", [new zt(e.name.slice(1))]);
                                var n = new Mt("mo", [Tt("\u2061", "text")]);
                                r = e.parentIsSupSub ? new Mt("mo", [r, n]) : St([r, n])
                            }
                            return r
                        },
                        an = {
                            "\u220f": "\\prod",
                            "\u2210": "\\coprod",
                            "\u2211": "\\sum",
                            "\u22c0": "\\bigwedge",
                            "\u22c1": "\\bigvee",
                            "\u22c2": "\\bigcap",
                            "\u22c3": "\\bigcup",
                            "\u2a00": "\\bigodot",
                            "\u2a01": "\\bigoplus",
                            "\u2a02": "\\bigotimes",
                            "\u2a04": "\\biguplus",
                            "\u2a06": "\\bigsqcup"
                        };
                    ot({
                        type: "op",
                        names: ["\\coprod", "\\bigvee", "\\bigwedge", "\\biguplus", "\\bigcap", "\\bigcup", "\\intop", "\\prod", "\\sum", "\\bigotimes", "\\bigoplus", "\\bigodot", "\\bigsqcup", "\\smallint", "\u220f", "\u2210", "\u2211", "\u22c0", "\u22c1", "\u22c2", "\u22c3", "\u2a00", "\u2a01", "\u2a02", "\u2a04", "\u2a06"],
                        props: {
                            numArgs: 0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = e.funcName;
                            return 1 === n.length && (n = an[n]), {
                                type: "op",
                                mode: r.mode,
                                limits: !0,
                                parentIsSupSub: !1,
                                symbol: !0,
                                name: n
                            }
                        },
                        htmlBuilder: rn,
                        mathmlBuilder: nn
                    }), ot({
                        type: "op",
                        names: ["\\mathop"],
                        props: {
                            numArgs: 1
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = t[0];
                            return {
                                type: "op",
                                mode: r.mode,
                                limits: !1,
                                parentIsSupSub: !1,
                                symbol: !1,
                                body: lt(n)
                            }
                        },
                        htmlBuilder: rn,
                        mathmlBuilder: nn
                    });
                    var on = {
                        "\u222b": "\\int",
                        "\u222c": "\\iint",
                        "\u222d": "\\iiint",
                        "\u222e": "\\oint",
                        "\u222f": "\\oiint",
                        "\u2230": "\\oiiint"
                    };
                    ot({
                        type: "op",
                        names: ["\\arcsin", "\\arccos", "\\arctan", "\\arctg", "\\arcctg", "\\arg", "\\ch", "\\cos", "\\cosec", "\\cosh", "\\cot", "\\cotg", "\\coth", "\\csc", "\\ctg", "\\cth", "\\deg", "\\dim", "\\exp", "\\hom", "\\ker", "\\lg", "\\ln", "\\log", "\\sec", "\\sin", "\\sinh", "\\sh", "\\tan", "\\tanh", "\\tg", "\\th"],
                        props: {
                            numArgs: 0
                        },
                        handler: function(e) {
                            var t = e.parser,
                                r = e.funcName;
                            return {
                                type: "op",
                                mode: t.mode,
                                limits: !1,
                                parentIsSupSub: !1,
                                symbol: !1,
                                name: r
                            }
                        },
                        htmlBuilder: rn,
                        mathmlBuilder: nn
                    }), ot({
                        type: "op",
                        names: ["\\det", "\\gcd", "\\inf", "\\lim", "\\max", "\\min", "\\Pr", "\\sup"],
                        props: {
                            numArgs: 0
                        },
                        handler: function(e) {
                            var t = e.parser,
                                r = e.funcName;
                            return {
                                type: "op",
                                mode: t.mode,
                                limits: !0,
                                parentIsSupSub: !1,
                                symbol: !1,
                                name: r
                            }
                        },
                        htmlBuilder: rn,
                        mathmlBuilder: nn
                    }), ot({
                        type: "op",
                        names: ["\\int", "\\iint", "\\iiint", "\\oint", "\\oiint", "\\oiiint", "\u222b", "\u222c", "\u222d", "\u222e", "\u222f", "\u2230"],
                        props: {
                            numArgs: 0
                        },
                        handler: function(e) {
                            var t = e.parser,
                                r = e.funcName;
                            return 1 === r.length && (r = on[r]), {
                                type: "op",
                                mode: t.mode,
                                limits: !1,
                                parentIsSupSub: !1,
                                symbol: !0,
                                name: r
                            }
                        },
                        htmlBuilder: rn,
                        mathmlBuilder: nn
                    });
                    var sn = function(e, t) {
                        var r, n, a, i, o = !1;
                        if ("supsub" === e.type ? (r = e.sup, n = e.sub, a = Ut(e.base, "operatorname"), o = !0) : a = Ut(e, "operatorname"), a.body.length > 0) {
                            for (var s = a.body.map((function(e) {
                                    var t = e.text;
                                    return "string" === typeof t ? {
                                        type: "textord",
                                        mode: e.mode,
                                        text: t
                                    } : e
                                })), l = dt(s, t.withFont("mathrm"), !0), h = 0; h < l.length; h++) {
                                var m = l[h];
                                m instanceof L && (m.text = m.text.replace(/\u2212/, "-").replace(/\u2217/, "*"))
                            }
                            i = Ke.makeSpan(["mop"], l, t)
                        } else i = Ke.makeSpan(["mop"], [], t);
                        return o ? en(i, r, n, t, t.style, 0, 0) : i
                    };

                    function ln(e, t, r) {
                        for (var n = dt(e, t, !1), a = t.sizeMultiplier / r.sizeMultiplier, i = 0; i < n.length; i++) {
                            var o = n[i].classes.indexOf("sizing");
                            o < 0 ? Array.prototype.push.apply(n[i].classes, t.sizingClasses(r)) : n[i].classes[o + 1] === "reset-size" + t.size && (n[i].classes[o + 1] = "reset-size" + r.size), n[i].height *= a, n[i].depth *= a
                        }
                        return Ke.makeFragment(n)
                    }
                    ot({
                        type: "operatorname",
                        names: ["\\operatorname", "\\operatorname*"],
                        props: {
                            numArgs: 1
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = e.funcName,
                                a = t[0];
                            return {
                                type: "operatorname",
                                mode: r.mode,
                                body: lt(a),
                                alwaysHandleSupSub: "\\operatorname*" === n,
                                limits: !1,
                                parentIsSupSub: !1
                            }
                        },
                        htmlBuilder: sn,
                        mathmlBuilder: function(e, t) {
                            for (var r = qt(e.body, t.withFont("mathrm")), n = !0, a = 0; a < r.length; a++) {
                                var i = r[a];
                                if (i instanceof At.SpaceNode);
                                else if (i instanceof At.MathNode) switch (i.type) {
                                    case "mi":
                                    case "mn":
                                    case "ms":
                                    case "mspace":
                                    case "mtext":
                                        break;
                                    case "mo":
                                        var o = i.children[0];
                                        1 === i.children.length && o instanceof At.TextNode ? o.text = o.text.replace(/\u2212/, "-").replace(/\u2217/, "*") : n = !1;
                                        break;
                                    default:
                                        n = !1
                                } else n = !1
                            }
                            if (n) {
                                var s = r.map((function(e) {
                                    return e.toText()
                                })).join("");
                                r = [new At.TextNode(s)]
                            }
                            var l = new At.MathNode("mi", r);
                            l.setAttribute("mathvariant", "normal");
                            var h = new At.MathNode("mo", [Tt("\u2061", "text")]);
                            return e.parentIsSupSub ? new At.MathNode("mo", [l, h]) : At.newDocumentFragment([l, h])
                        }
                    }), st({
                        type: "ordgroup",
                        htmlBuilder: function(e, t) {
                            return e.semisimple ? Ke.makeFragment(dt(e.body, t, !1)) : Ke.makeSpan(["mord"], dt(e.body, t, !0), t)
                        },
                        mathmlBuilder: function(e, t) {
                            return Nt(e.body, t, !0)
                        }
                    }), ot({
                        type: "overline",
                        names: ["\\overline"],
                        props: {
                            numArgs: 1
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = t[0];
                            return {
                                type: "overline",
                                mode: r.mode,
                                body: n
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = xt(e.body, t.havingCrampedStyle()),
                                n = Ke.makeLineSpan("overline-line", t),
                                a = t.fontMetrics().defaultRuleThickness,
                                i = Ke.makeVList({
                                    positionType: "firstBaseline",
                                    children: [{
                                        type: "elem",
                                        elem: r
                                    }, {
                                        type: "kern",
                                        size: 3 * a
                                    }, {
                                        type: "elem",
                                        elem: n
                                    }, {
                                        type: "kern",
                                        size: a
                                    }]
                                }, t);
                            return Ke.makeSpan(["mord", "overline"], [i], t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = new At.MathNode("mo", [new At.TextNode("\u203e")]);
                            r.setAttribute("stretchy", "true");
                            var n = new At.MathNode("mover", [It(e.body, t), r]);
                            return n.setAttribute("accent", "true"), n
                        }
                    }), ot({
                        type: "phantom",
                        names: ["\\phantom"],
                        props: {
                            numArgs: 1,
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = t[0];
                            return {
                                type: "phantom",
                                mode: r.mode,
                                body: lt(n)
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = dt(e.body, t.withPhantom(), !1);
                            return Ke.makeFragment(r)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = qt(e.body, t);
                            return new At.MathNode("mphantom", r)
                        }
                    }), ot({
                        type: "hphantom",
                        names: ["\\hphantom"],
                        props: {
                            numArgs: 1,
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = t[0];
                            return {
                                type: "hphantom",
                                mode: r.mode,
                                body: n
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = Ke.makeSpan([], [xt(e.body, t.withPhantom())]);
                            if (r.height = 0, r.depth = 0, r.children)
                                for (var n = 0; n < r.children.length; n++) r.children[n].height = 0, r.children[n].depth = 0;
                            return r = Ke.makeVList({
                                positionType: "firstBaseline",
                                children: [{
                                    type: "elem",
                                    elem: r
                                }]
                            }, t), Ke.makeSpan(["mord"], [r], t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = qt(lt(e.body), t),
                                n = new At.MathNode("mphantom", r),
                                a = new At.MathNode("mpadded", [n]);
                            return a.setAttribute("height", "0px"), a.setAttribute("depth", "0px"), a
                        }
                    }), ot({
                        type: "vphantom",
                        names: ["\\vphantom"],
                        props: {
                            numArgs: 1,
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = t[0];
                            return {
                                type: "vphantom",
                                mode: r.mode,
                                body: n
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = Ke.makeSpan(["inner"], [xt(e.body, t.withPhantom())]),
                                n = Ke.makeSpan(["fix"], []);
                            return Ke.makeSpan(["mord", "rlap"], [r, n], t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = qt(lt(e.body), t),
                                n = new At.MathNode("mphantom", r),
                                a = new At.MathNode("mpadded", [n]);
                            return a.setAttribute("width", "0px"), a
                        }
                    }), ot({
                        type: "raisebox",
                        names: ["\\raisebox"],
                        props: {
                            numArgs: 2,
                            argTypes: ["size", "hbox"],
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = Ut(t[0], "size").value,
                                a = t[1];
                            return {
                                type: "raisebox",
                                mode: r.mode,
                                dy: n,
                                body: a
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = xt(e.body, t),
                                n = Fe(e.dy, t);
                            return Ke.makeVList({
                                positionType: "shift",
                                positionData: -n,
                                children: [{
                                    type: "elem",
                                    elem: r
                                }]
                            }, t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = new At.MathNode("mpadded", [It(e.body, t)]),
                                n = e.dy.number + e.dy.unit;
                            return r.setAttribute("voffset", n), r
                        }
                    }), ot({
                        type: "rule",
                        names: ["\\rule"],
                        props: {
                            numArgs: 2,
                            numOptionalArgs: 1,
                            argTypes: ["size", "size", "size"]
                        },
                        handler: function(e, t, r) {
                            var n = e.parser,
                                a = r[0],
                                i = Ut(t[0], "size"),
                                o = Ut(t[1], "size");
                            return {
                                type: "rule",
                                mode: n.mode,
                                shift: a && Ut(a, "size").value,
                                width: i.value,
                                height: o.value
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = Ke.makeSpan(["mord", "rule"], [], t),
                                n = Fe(e.width, t),
                                a = Fe(e.height, t),
                                i = e.shift ? Fe(e.shift, t) : 0;
                            return r.style.borderRightWidth = n + "em", r.style.borderTopWidth = a + "em", r.style.bottom = i + "em", r.width = n, r.height = a + i, r.depth = -i, r.maxFontSize = 1.125 * a * t.sizeMultiplier, r
                        },
                        mathmlBuilder: function(e, t) {
                            var r = Fe(e.width, t),
                                n = Fe(e.height, t),
                                a = e.shift ? Fe(e.shift, t) : 0,
                                i = t.color && t.getColor() || "black",
                                o = new At.MathNode("mspace");
                            o.setAttribute("mathbackground", i), o.setAttribute("width", r + "em"), o.setAttribute("height", n + "em");
                            var s = new At.MathNode("mpadded", [o]);
                            return a >= 0 ? s.setAttribute("height", "+" + a + "em") : (s.setAttribute("height", a + "em"), s.setAttribute("depth", "+" + -a + "em")), s.setAttribute("voffset", a + "em"), s
                        }
                    });
                    var hn = ["\\tiny", "\\sixptsize", "\\scriptsize", "\\footnotesize", "\\small", "\\normalsize", "\\large", "\\Large", "\\LARGE", "\\huge", "\\Huge"];
                    ot({
                        type: "sizing",
                        names: hn,
                        props: {
                            numArgs: 0,
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            var r = e.breakOnTokenText,
                                n = e.funcName,
                                a = e.parser,
                                i = a.parseExpression(!1, r);
                            return {
                                type: "sizing",
                                mode: a.mode,
                                size: hn.indexOf(n) + 1,
                                body: i
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = t.havingSize(e.size);
                            return ln(e.body, r, t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = t.havingSize(e.size),
                                n = qt(e.body, r),
                                a = new At.MathNode("mstyle", n);
                            return a.setAttribute("mathsize", r.sizeMultiplier + "em"), a
                        }
                    }), ot({
                        type: "smash",
                        names: ["\\smash"],
                        props: {
                            numArgs: 1,
                            numOptionalArgs: 1,
                            allowedInText: !0
                        },
                        handler: function(e, t, r) {
                            var n = e.parser,
                                a = !1,
                                i = !1,
                                o = r[0] && Ut(r[0], "ordgroup");
                            if (o)
                                for (var s = "", l = 0; l < o.body.length; ++l)
                                    if ("t" === (s = o.body[l].text)) a = !0;
                                    else {
                                        if ("b" !== s) {
                                            a = !1, i = !1;
                                            break
                                        }
                                        i = !0
                                    }
                            else a = !0, i = !0;
                            var h = t[0];
                            return {
                                type: "smash",
                                mode: n.mode,
                                body: h,
                                smashHeight: a,
                                smashDepth: i
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = Ke.makeSpan([], [xt(e.body, t)]);
                            if (!e.smashHeight && !e.smashDepth) return r;
                            if (e.smashHeight && (r.height = 0, r.children))
                                for (var n = 0; n < r.children.length; n++) r.children[n].height = 0;
                            if (e.smashDepth && (r.depth = 0, r.children))
                                for (var a = 0; a < r.children.length; a++) r.children[a].depth = 0;
                            var i = Ke.makeVList({
                                positionType: "firstBaseline",
                                children: [{
                                    type: "elem",
                                    elem: r
                                }]
                            }, t);
                            return Ke.makeSpan(["mord"], [i], t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = new At.MathNode("mpadded", [It(e.body, t)]);
                            return e.smashHeight && r.setAttribute("height", "0px"), e.smashDepth && r.setAttribute("depth", "0px"), r
                        }
                    }), ot({
                        type: "sqrt",
                        names: ["\\sqrt"],
                        props: {
                            numArgs: 1,
                            numOptionalArgs: 1
                        },
                        handler: function(e, t, r) {
                            var n = e.parser,
                                a = r[0],
                                i = t[0];
                            return {
                                type: "sqrt",
                                mode: n.mode,
                                body: i,
                                index: a
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = xt(e.body, t.havingCrampedStyle());
                            0 === r.height && (r.height = t.fontMetrics().xHeight), r = Ke.wrapFragment(r, t);
                            var n = t.fontMetrics().defaultRuleThickness,
                                a = n;
                            t.style.id < w.TEXT.id && (a = t.fontMetrics().xHeight);
                            var i = n + a / 4,
                                o = r.height + r.depth + i + n,
                                s = yr(o, t),
                                l = s.span,
                                h = s.ruleWidth,
                                m = s.advanceWidth,
                                c = l.height - h;
                            c > r.height + r.depth + i && (i = (i + c - r.height - r.depth) / 2);
                            var u = l.height - r.height - i - h;
                            r.style.paddingLeft = m + "em";
                            var p = Ke.makeVList({
                                positionType: "firstBaseline",
                                children: [{
                                    type: "elem",
                                    elem: r,
                                    wrapperClasses: ["svg-align"]
                                }, {
                                    type: "kern",
                                    size: -(r.height + u)
                                }, {
                                    type: "elem",
                                    elem: l
                                }, {
                                    type: "kern",
                                    size: h
                                }]
                            }, t);
                            if (e.index) {
                                var d = t.havingStyle(w.SCRIPTSCRIPT),
                                    f = xt(e.index, d, t),
                                    g = .6 * (p.height - p.depth),
                                    v = Ke.makeVList({
                                        positionType: "shift",
                                        positionData: -g,
                                        children: [{
                                            type: "elem",
                                            elem: f
                                        }]
                                    }, t),
                                    b = Ke.makeSpan(["root"], [v]);
                                return Ke.makeSpan(["mord", "sqrt"], [b, p], t)
                            }
                            return Ke.makeSpan(["mord", "sqrt"], [p], t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = e.body,
                                n = e.index;
                            return n ? new At.MathNode("mroot", [It(r, t), It(n, t)]) : new At.MathNode("msqrt", [It(r, t)])
                        }
                    });
                    var mn = {
                        display: w.DISPLAY,
                        text: w.TEXT,
                        script: w.SCRIPT,
                        scriptscript: w.SCRIPTSCRIPT
                    };
                    ot({
                        type: "styling",
                        names: ["\\displaystyle", "\\textstyle", "\\scriptstyle", "\\scriptscriptstyle"],
                        props: {
                            numArgs: 0,
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            var r = e.breakOnTokenText,
                                n = e.funcName,
                                a = e.parser,
                                i = a.parseExpression(!0, r),
                                o = n.slice(1, n.length - 5);
                            return {
                                type: "styling",
                                mode: a.mode,
                                style: o,
                                body: i
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = mn[e.style],
                                n = t.havingStyle(r).withFont("");
                            return ln(e.body, n, t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = mn[e.style],
                                n = t.havingStyle(r),
                                a = qt(e.body, n),
                                i = new At.MathNode("mstyle", a),
                                o = {
                                    display: ["0", "true"],
                                    text: ["0", "false"],
                                    script: ["1", "false"],
                                    scriptscript: ["2", "false"]
                                }[e.style];
                            return i.setAttribute("scriptlevel", o[0]), i.setAttribute("displaystyle", o[1]), i
                        }
                    }), st({
                        type: "supsub",
                        htmlBuilder: function(e, t) {
                            var r = function(e, t) {
                                var r = e.base;
                                return r ? "op" === r.type ? r.limits && (t.style.size === w.DISPLAY.size || r.alwaysHandleSupSub) ? rn : null : "operatorname" === r.type ? r.alwaysHandleSupSub && (t.style.size === w.DISPLAY.size || r.limits) ? sn : null : "accent" === r.type ? c.isCharacterBox(r.base) ? _t : null : "horizBrace" === r.type && !e.sub === r.isOver ? Kr : null : null
                            }(e, t);
                            if (r) return r(e, t);
                            var n, a, i, o = e.base,
                                s = e.sup,
                                l = e.sub,
                                h = xt(o, t),
                                m = t.fontMetrics(),
                                u = 0,
                                p = 0,
                                d = o && c.isCharacterBox(o);
                            if (s) {
                                var f = t.havingStyle(t.style.sup());
                                n = xt(s, f, t), d || (u = h.height - f.fontMetrics().supDrop * f.sizeMultiplier / t.sizeMultiplier)
                            }
                            if (l) {
                                var g = t.havingStyle(t.style.sub());
                                a = xt(l, g, t), d || (p = h.depth + g.fontMetrics().subDrop * g.sizeMultiplier / t.sizeMultiplier)
                            }
                            i = t.style === w.DISPLAY ? m.sup1 : t.style.cramped ? m.sup3 : m.sup2;
                            var v, b = t.sizeMultiplier,
                                y = .5 / m.ptPerEm / b + "em",
                                x = null;
                            if (a) {
                                var k = e.base && "op" === e.base.type && e.base.name && ("\\oiint" === e.base.name || "\\oiiint" === e.base.name);
                                (h instanceof L || k) && (x = -h.italic + "em")
                            }
                            if (n && a) {
                                u = Math.max(u, i, n.depth + .25 * m.xHeight), p = Math.max(p, m.sub2);
                                var S = 4 * m.defaultRuleThickness;
                                if (u - n.depth - (a.height - p) < S) {
                                    p = S - (u - n.depth) + a.height;
                                    var M = .8 * m.xHeight - (u - n.depth);
                                    M > 0 && (u += M, p -= M)
                                }
                                var z = [{
                                    type: "elem",
                                    elem: a,
                                    shift: p,
                                    marginRight: y,
                                    marginLeft: x
                                }, {
                                    type: "elem",
                                    elem: n,
                                    shift: -u,
                                    marginRight: y
                                }];
                                v = Ke.makeVList({
                                    positionType: "individualShift",
                                    children: z
                                }, t)
                            } else if (a) {
                                p = Math.max(p, m.sub1, a.height - .8 * m.xHeight);
                                var A = [{
                                    type: "elem",
                                    elem: a,
                                    marginLeft: x,
                                    marginRight: y
                                }];
                                v = Ke.makeVList({
                                    positionType: "shift",
                                    positionData: p,
                                    children: A
                                }, t)
                            } else {
                                if (!n) throw new Error("supsub must have either sup or sub.");
                                u = Math.max(u, i, n.depth + .25 * m.xHeight), v = Ke.makeVList({
                                    positionType: "shift",
                                    positionData: -u,
                                    children: [{
                                        type: "elem",
                                        elem: n,
                                        marginRight: y
                                    }]
                                }, t)
                            }
                            var T = bt(h, "right") || "mord";
                            return Ke.makeSpan([T], [h, Ke.makeSpan(["msupsub"], [v])], t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r, n = !1;
                            e.base && "horizBrace" === e.base.type && !!e.sup === e.base.isOver && (n = !0, r = e.base.isOver), !e.base || "op" !== e.base.type && "operatorname" !== e.base.type || (e.base.parentIsSupSub = !0);
                            var a, i = [It(e.base, t)];
                            if (e.sub && i.push(It(e.sub, t)), e.sup && i.push(It(e.sup, t)), n) a = r ? "mover" : "munder";
                            else if (e.sub)
                                if (e.sup) {
                                    var o = e.base;
                                    a = o && "op" === o.type && o.limits && t.style === w.DISPLAY || o && "operatorname" === o.type && o.alwaysHandleSupSub && (t.style === w.DISPLAY || o.limits) ? "munderover" : "msubsup"
                                } else {
                                    var s = e.base;
                                    a = s && "op" === s.type && s.limits && (t.style === w.DISPLAY || s.alwaysHandleSupSub) || s && "operatorname" === s.type && s.alwaysHandleSupSub && (s.limits || t.style === w.DISPLAY) ? "munder" : "msub"
                                }
                            else {
                                var l = e.base;
                                a = l && "op" === l.type && l.limits && (t.style === w.DISPLAY || l.alwaysHandleSupSub) || l && "operatorname" === l.type && l.alwaysHandleSupSub && (l.limits || t.style === w.DISPLAY) ? "mover" : "msup"
                            }
                            return new At.MathNode(a, i)
                        }
                    }), st({
                        type: "atom",
                        htmlBuilder: function(e, t) {
                            return Ke.mathsym(e.text, e.mode, t, ["m" + e.family])
                        },
                        mathmlBuilder: function(e, t) {
                            var r = new At.MathNode("mo", [Tt(e.text, e.mode)]);
                            if ("bin" === e.family) {
                                var n = Ct(e, t);
                                "bold-italic" === n && r.setAttribute("mathvariant", n)
                            } else "punct" === e.family ? r.setAttribute("separator", "true") : "open" !== e.family && "close" !== e.family || r.setAttribute("stretchy", "false");
                            return r
                        }
                    });
                    var cn = {
                        mi: "italic",
                        mn: "normal",
                        mtext: "normal"
                    };
                    st({
                        type: "mathord",
                        htmlBuilder: function(e, t) {
                            return Ke.makeOrd(e, t, "mathord")
                        },
                        mathmlBuilder: function(e, t) {
                            var r = new At.MathNode("mi", [Tt(e.text, e.mode, t)]),
                                n = Ct(e, t) || "italic";
                            return n !== cn[r.type] && r.setAttribute("mathvariant", n), r
                        }
                    }), st({
                        type: "textord",
                        htmlBuilder: function(e, t) {
                            return Ke.makeOrd(e, t, "textord")
                        },
                        mathmlBuilder: function(e, t) {
                            var r, n = Tt(e.text, e.mode, t),
                                a = Ct(e, t) || "normal";
                            return r = "text" === e.mode ? new At.MathNode("mtext", [n]) : /[0-9]/.test(e.text) ? new At.MathNode("mn", [n]) : "\\prime" === e.text ? new At.MathNode("mo", [n]) : new At.MathNode("mi", [n]), a !== cn[r.type] && r.setAttribute("mathvariant", a), r
                        }
                    });
                    var un = {
                            "\\nobreak": "nobreak",
                            "\\allowbreak": "allowbreak"
                        },
                        pn = {
                            " ": {},
                            "\\ ": {},
                            "~": {
                                className: "nobreak"
                            },
                            "\\space": {},
                            "\\nobreakspace": {
                                className: "nobreak"
                            }
                        };
                    st({
                        type: "spacing",
                        htmlBuilder: function(e, t) {
                            if (pn.hasOwnProperty(e.text)) {
                                var r = pn[e.text].className || "";
                                if ("text" === e.mode) {
                                    var n = Ke.makeOrd(e, t, "textord");
                                    return n.classes.push(r), n
                                }
                                return Ke.makeSpan(["mspace", r], [Ke.mathsym(e.text, e.mode, t)], t)
                            }
                            if (un.hasOwnProperty(e.text)) return Ke.makeSpan(["mspace", un[e.text]], [], t);
                            throw new o('Unknown type of space "' + e.text + '"')
                        },
                        mathmlBuilder: function(e, t) {
                            if (!pn.hasOwnProperty(e.text)) {
                                if (un.hasOwnProperty(e.text)) return new At.MathNode("mspace");
                                throw new o('Unknown type of space "' + e.text + '"')
                            }
                            return new At.MathNode("mtext", [new At.TextNode("\xa0")])
                        }
                    });
                    var dn = function() {
                        var e = new At.MathNode("mtd", []);
                        return e.setAttribute("width", "50%"), e
                    };
                    st({
                        type: "tag",
                        mathmlBuilder: function(e, t) {
                            var r = new At.MathNode("mtable", [new At.MathNode("mtr", [dn(), new At.MathNode("mtd", [Nt(e.body, t)]), dn(), new At.MathNode("mtd", [Nt(e.tag, t)])])]);
                            return r.setAttribute("width", "100%"), r
                        }
                    });
                    var fn = {
                            "\\text": void 0,
                            "\\textrm": "textrm",
                            "\\textsf": "textsf",
                            "\\texttt": "texttt",
                            "\\textnormal": "textrm"
                        },
                        gn = {
                            "\\textbf": "textbf",
                            "\\textmd": "textmd"
                        },
                        vn = {
                            "\\textit": "textit",
                            "\\textup": "textup"
                        },
                        bn = function(e, t) {
                            var r = e.font;
                            return r ? fn[r] ? t.withTextFontFamily(fn[r]) : gn[r] ? t.withTextFontWeight(gn[r]) : t.withTextFontShape(vn[r]) : t
                        };
                    ot({
                        type: "text",
                        names: ["\\text", "\\textrm", "\\textsf", "\\texttt", "\\textnormal", "\\textbf", "\\textmd", "\\textit", "\\textup"],
                        props: {
                            numArgs: 1,
                            argTypes: ["text"],
                            greediness: 2,
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            var r = e.parser,
                                n = e.funcName,
                                a = t[0];
                            return {
                                type: "text",
                                mode: r.mode,
                                body: lt(a),
                                font: n
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = bn(e, t),
                                n = dt(e.body, r, !0);
                            return Ke.makeSpan(["mord", "text"], Ke.tryCombineChars(n), r)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = bn(e, t);
                            return Nt(e.body, r)
                        }
                    }), ot({
                        type: "underline",
                        names: ["\\underline"],
                        props: {
                            numArgs: 1,
                            allowedInText: !0
                        },
                        handler: function(e, t) {
                            return {
                                type: "underline",
                                mode: e.parser.mode,
                                body: t[0]
                            }
                        },
                        htmlBuilder: function(e, t) {
                            var r = xt(e.body, t),
                                n = Ke.makeLineSpan("underline-line", t),
                                a = t.fontMetrics().defaultRuleThickness,
                                i = Ke.makeVList({
                                    positionType: "top",
                                    positionData: r.height,
                                    children: [{
                                        type: "kern",
                                        size: a
                                    }, {
                                        type: "elem",
                                        elem: n
                                    }, {
                                        type: "kern",
                                        size: 3 * a
                                    }, {
                                        type: "elem",
                                        elem: r
                                    }]
                                }, t);
                            return Ke.makeSpan(["mord", "underline"], [i], t)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = new At.MathNode("mo", [new At.TextNode("\u203e")]);
                            r.setAttribute("stretchy", "true");
                            var n = new At.MathNode("munder", [It(e.body, t), r]);
                            return n.setAttribute("accentunder", "true"), n
                        }
                    }), ot({
                        type: "verb",
                        names: ["\\verb"],
                        props: {
                            numArgs: 0,
                            allowedInText: !0
                        },
                        handler: function(e, t, r) {
                            throw new o("\\verb ended by end of line instead of matching delimiter")
                        },
                        htmlBuilder: function(e, t) {
                            for (var r = yn(e), n = [], a = t.havingStyle(t.style.text()), i = 0; i < r.length; i++) {
                                var o = r[i];
                                "~" === o && (o = "\\textasciitilde"), n.push(Ke.makeSymbol(o, "Typewriter-Regular", e.mode, a, ["mord", "texttt"]))
                            }
                            return Ke.makeSpan(["mord", "text"].concat(a.sizingClasses(t)), Ke.tryCombineChars(n), a)
                        },
                        mathmlBuilder: function(e, t) {
                            var r = new At.TextNode(yn(e)),
                                n = new At.MathNode("mtext", [r]);
                            return n.setAttribute("mathvariant", "monospace"), n
                        }
                    });
                    var yn = function(e) {
                            return e.body.replace(/ /g, e.star ? "\u2423" : "\xa0")
                        },
                        xn = nt,
                        wn = new RegExp("^(\\\\[a-zA-Z@]+)[ \r\n\t]*$"),
                        kn = new RegExp("[\u0300-\u036f]+$"),
                        Sn = function() {
                            function e(e, t) {
                                this.input = void 0, this.settings = void 0, this.tokenRegex = void 0, this.catcodes = void 0, this.input = e, this.settings = t, this.tokenRegex = new RegExp("([ \r\n\t]+)|([!-\\[\\]-\u2027\u202a-\ud7ff\uf900-\uffff][\u0300-\u036f]*|[\ud800-\udbff][\udc00-\udfff][\u0300-\u036f]*|\\\\verb\\*([^]).*?\\3|\\\\verb([^*a-zA-Z]).*?\\4|\\\\operatorname\\*|\\\\[a-zA-Z@]+[ \r\n\t]*|\\\\[^\ud800-\udfff])", "g"), this.catcodes = {
                                    "%": 14
                                }
                            }
                            var t = e.prototype;
                            return t.setCatcode = function(e, t) {
                                this.catcodes[e] = t
                            }, t.lex = function() {
                                var e = this.input,
                                    t = this.tokenRegex.lastIndex;
                                if (t === e.length) return new a("EOF", new n(this, t, t));
                                var r = this.tokenRegex.exec(e);
                                if (null === r || r.index !== t) throw new o("Unexpected character: '" + e[t] + "'", new a(e[t], new n(this, t, t + 1)));
                                var i = r[2] || " ";
                                if (14 === this.catcodes[i]) {
                                    var s = e.indexOf("\n", this.tokenRegex.lastIndex);
                                    return -1 === s ? (this.tokenRegex.lastIndex = e.length, this.settings.reportNonstrict("commentAtEnd", "% comment has no terminating newline; LaTeX would fail because of commenting the end of math mode (e.g. $)")) : this.tokenRegex.lastIndex = s + 1, this.lex()
                                }
                                var l = i.match(wn);
                                return l && (i = l[1]), new a(i, new n(this, t, this.tokenRegex.lastIndex))
                            }, e
                        }(),
                        Mn = function() {
                            function e(e, t) {
                                void 0 === e && (e = {}), void 0 === t && (t = {}), this.current = void 0, this.builtins = void 0, this.undefStack = void 0, this.current = t, this.builtins = e, this.undefStack = []
                            }
                            var t = e.prototype;
                            return t.beginGroup = function() {
                                this.undefStack.push({})
                            }, t.endGroup = function() {
                                if (0 === this.undefStack.length) throw new o("Unbalanced namespace destruction: attempt to pop global namespace; please report this as a bug");
                                var e = this.undefStack.pop();
                                for (var t in e) e.hasOwnProperty(t) && (void 0 === e[t] ? delete this.current[t] : this.current[t] = e[t])
                            }, t.has = function(e) {
                                return this.current.hasOwnProperty(e) || this.builtins.hasOwnProperty(e)
                            }, t.get = function(e) {
                                return this.current.hasOwnProperty(e) ? this.current[e] : this.builtins[e]
                            }, t.set = function(e, t, r) {
                                if (void 0 === r && (r = !1), r) {
                                    for (var n = 0; n < this.undefStack.length; n++) delete this.undefStack[n][e];
                                    this.undefStack.length > 0 && (this.undefStack[this.undefStack.length - 1][e] = t)
                                } else {
                                    var a = this.undefStack[this.undefStack.length - 1];
                                    a && !a.hasOwnProperty(e) && (a[e] = this.current[e])
                                }
                                this.current[e] = t
                            }, e
                        }(),
                        zn = {},
                        An = zn;

                    function Tn(e, t) {
                        zn[e] = t
                    }
                    Tn("\\noexpand", (function(e) {
                        var t = e.popToken();
                        return e.isExpandable(t.text) && (t.noexpand = !0, t.treatAsRelax = !0), {
                            tokens: [t],
                            numArgs: 0
                        }
                    })), Tn("\\expandafter", (function(e) {
                        var t = e.popToken();
                        return e.expandOnce(!0), {
                            tokens: [t],
                            numArgs: 0
                        }
                    })), Tn("\\@firstoftwo", (function(e) {
                        return {
                            tokens: e.consumeArgs(2)[0],
                            numArgs: 0
                        }
                    })), Tn("\\@secondoftwo", (function(e) {
                        return {
                            tokens: e.consumeArgs(2)[1],
                            numArgs: 0
                        }
                    })), Tn("\\@ifnextchar", (function(e) {
                        var t = e.consumeArgs(3);
                        e.consumeSpaces();
                        var r = e.future();
                        return 1 === t[0].length && t[0][0].text === r.text ? {
                            tokens: t[1],
                            numArgs: 0
                        } : {
                            tokens: t[2],
                            numArgs: 0
                        }
                    })), Tn("\\@ifstar", "\\@ifnextchar *{\\@firstoftwo{#1}}"), Tn("\\TextOrMath", (function(e) {
                        var t = e.consumeArgs(2);
                        return "text" === e.mode ? {
                            tokens: t[0],
                            numArgs: 0
                        } : {
                            tokens: t[1],
                            numArgs: 0
                        }
                    }));
                    var Bn = {
                        0: 0,
                        1: 1,
                        2: 2,
                        3: 3,
                        4: 4,
                        5: 5,
                        6: 6,
                        7: 7,
                        8: 8,
                        9: 9,
                        a: 10,
                        A: 10,
                        b: 11,
                        B: 11,
                        c: 12,
                        C: 12,
                        d: 13,
                        D: 13,
                        e: 14,
                        E: 14,
                        f: 15,
                        F: 15
                    };
                    Tn("\\char", (function(e) {
                        var t, r = e.popToken(),
                            n = "";
                        if ("'" === r.text) t = 8, r = e.popToken();
                        else if ('"' === r.text) t = 16, r = e.popToken();
                        else if ("`" === r.text)
                            if ("\\" === (r = e.popToken()).text[0]) n = r.text.charCodeAt(1);
                            else {
                                if ("EOF" === r.text) throw new o("\\char` missing argument");
                                n = r.text.charCodeAt(0)
                            }
                        else t = 10;
                        if (t) {
                            if (null == (n = Bn[r.text]) || n >= t) throw new o("Invalid base-" + t + " digit " + r.text);
                            for (var a; null != (a = Bn[e.future().text]) && a < t;) n *= t, n += a, e.popToken()
                        }
                        return "\\@char{" + n + "}"
                    }));
                    var Cn = function(e, t, r) {
                        var n = e.consumeArgs(1)[0];
                        if (1 !== n.length) throw new o("\\newcommand's first argument must be a macro name");
                        var a = n[0].text,
                            i = e.isDefined(a);
                        if (i && !t) throw new o("\\newcommand{" + a + "} attempting to redefine " + a + "; use \\renewcommand");
                        if (!i && !r) throw new o("\\renewcommand{" + a + "} when command " + a + " does not yet exist; use \\newcommand");
                        var s = 0;
                        if (1 === (n = e.consumeArgs(1)[0]).length && "[" === n[0].text) {
                            for (var l = "", h = e.expandNextToken();
                                "]" !== h.text && "EOF" !== h.text;) l += h.text, h = e.expandNextToken();
                            if (!l.match(/^\s*[0-9]+\s*$/)) throw new o("Invalid number of arguments: " + l);
                            s = parseInt(l), n = e.consumeArgs(1)[0]
                        }
                        return e.macros.set(a, {
                            tokens: n,
                            numArgs: s
                        }), ""
                    };
                    Tn("\\newcommand", (function(e) {
                        return Cn(e, !1, !0)
                    })), Tn("\\renewcommand", (function(e) {
                        return Cn(e, !0, !1)
                    })), Tn("\\providecommand", (function(e) {
                        return Cn(e, !0, !0)
                    })), Tn("\\message", (function(e) {
                        var t = e.consumeArgs(1)[0];
                        return console.log(t.reverse().map((function(e) {
                            return e.text
                        })).join("")), ""
                    })), Tn("\\errmessage", (function(e) {
                        var t = e.consumeArgs(1)[0];
                        return console.error(t.reverse().map((function(e) {
                            return e.text
                        })).join("")), ""
                    })), Tn("\\show", (function(e) {
                        var t = e.popToken(),
                            r = t.text;
                        return console.log(t, e.macros.get(r), xn[r], $.math[r], $.text[r]), ""
                    })), Tn("\\bgroup", "{"), Tn("\\egroup", "}"), Tn("\\lq", "`"), Tn("\\rq", "'"), Tn("\\aa", "\\r a"), Tn("\\AA", "\\r A"), Tn("\\textcopyright", "\\html@mathml{\\textcircled{c}}{\\char`\xa9}"), Tn("\\copyright", "\\TextOrMath{\\textcopyright}{\\text{\\textcopyright}}"), Tn("\\textregistered", "\\html@mathml{\\textcircled{\\scriptsize R}}{\\char`\xae}"), Tn("\u212c", "\\mathscr{B}"), Tn("\u2130", "\\mathscr{E}"), Tn("\u2131", "\\mathscr{F}"), Tn("\u210b", "\\mathscr{H}"), Tn("\u2110", "\\mathscr{I}"), Tn("\u2112", "\\mathscr{L}"), Tn("\u2133", "\\mathscr{M}"), Tn("\u211b", "\\mathscr{R}"), Tn("\u212d", "\\mathfrak{C}"), Tn("\u210c", "\\mathfrak{H}"), Tn("\u2128", "\\mathfrak{Z}"), Tn("\\Bbbk", "\\Bbb{k}"), Tn("\xb7", "\\cdotp"), Tn("\\llap", "\\mathllap{\\textrm{#1}}"), Tn("\\rlap", "\\mathrlap{\\textrm{#1}}"), Tn("\\clap", "\\mathclap{\\textrm{#1}}"), Tn("\\not", '\\html@mathml{\\mathrel{\\mathrlap\\@not}}{\\char"338}'), Tn("\\neq", "\\html@mathml{\\mathrel{\\not=}}{\\mathrel{\\char`\u2260}}"), Tn("\\ne", "\\neq"), Tn("\u2260", "\\neq"), Tn("\\notin", "\\html@mathml{\\mathrel{{\\in}\\mathllap{/\\mskip1mu}}}{\\mathrel{\\char`\u2209}}"), Tn("\u2209", "\\notin"), Tn("\u2258", "\\html@mathml{\\mathrel{=\\kern{-1em}\\raisebox{0.4em}{$\\scriptsize\\frown$}}}{\\mathrel{\\char`\u2258}}"), Tn("\u2259", "\\html@mathml{\\stackrel{\\tiny\\wedge}{=}}{\\mathrel{\\char`\u2258}}"), Tn("\u225a", "\\html@mathml{\\stackrel{\\tiny\\vee}{=}}{\\mathrel{\\char`\u225a}}"), Tn("\u225b", "\\html@mathml{\\stackrel{\\scriptsize\\star}{=}}{\\mathrel{\\char`\u225b}}"), Tn("\u225d", "\\html@mathml{\\stackrel{\\tiny\\mathrm{def}}{=}}{\\mathrel{\\char`\u225d}}"), Tn("\u225e", "\\html@mathml{\\stackrel{\\tiny\\mathrm{m}}{=}}{\\mathrel{\\char`\u225e}}"), Tn("\u225f", "\\html@mathml{\\stackrel{\\tiny?}{=}}{\\mathrel{\\char`\u225f}}"), Tn("\u27c2", "\\perp"), Tn("\u203c", "\\mathclose{!\\mkern-0.8mu!}"), Tn("\u220c", "\\notni"), Tn("\u231c", "\\ulcorner"), Tn("\u231d", "\\urcorner"), Tn("\u231e", "\\llcorner"), Tn("\u231f", "\\lrcorner"), Tn("\xa9", "\\copyright"), Tn("\xae", "\\textregistered"), Tn("\ufe0f", "\\textregistered"), Tn("\\ulcorner", '\\html@mathml{\\@ulcorner}{\\mathop{\\char"231c}}'), Tn("\\urcorner", '\\html@mathml{\\@urcorner}{\\mathop{\\char"231d}}'), Tn("\\llcorner", '\\html@mathml{\\@llcorner}{\\mathop{\\char"231e}}'), Tn("\\lrcorner", '\\html@mathml{\\@lrcorner}{\\mathop{\\char"231f}}'), Tn("\\vdots", "\\mathord{\\varvdots\\rule{0pt}{15pt}}"), Tn("\u22ee", "\\vdots"), Tn("\\varGamma", "\\mathit{\\Gamma}"), Tn("\\varDelta", "\\mathit{\\Delta}"), Tn("\\varTheta", "\\mathit{\\Theta}"), Tn("\\varLambda", "\\mathit{\\Lambda}"), Tn("\\varXi", "\\mathit{\\Xi}"), Tn("\\varPi", "\\mathit{\\Pi}"), Tn("\\varSigma", "\\mathit{\\Sigma}"), Tn("\\varUpsilon", "\\mathit{\\Upsilon}"), Tn("\\varPhi", "\\mathit{\\Phi}"), Tn("\\varPsi", "\\mathit{\\Psi}"), Tn("\\varOmega", "\\mathit{\\Omega}"), Tn("\\substack", "\\begin{subarray}{c}#1\\end{subarray}"), Tn("\\colon", "\\nobreak\\mskip2mu\\mathpunct{}\\mathchoice{\\mkern-3mu}{\\mkern-3mu}{}{}{:}\\mskip6mu"), Tn("\\boxed", "\\fbox{$\\displaystyle{#1}$}"), Tn("\\iff", "\\DOTSB\\;\\Longleftrightarrow\\;"), Tn("\\implies", "\\DOTSB\\;\\Longrightarrow\\;"), Tn("\\impliedby", "\\DOTSB\\;\\Longleftarrow\\;");
                    var qn = {
                        ",": "\\dotsc",
                        "\\not": "\\dotsb",
                        "+": "\\dotsb",
                        "=": "\\dotsb",
                        "<": "\\dotsb",
                        ">": "\\dotsb",
                        "-": "\\dotsb",
                        "*": "\\dotsb",
                        ":": "\\dotsb",
                        "\\DOTSB": "\\dotsb",
                        "\\coprod": "\\dotsb",
                        "\\bigvee": "\\dotsb",
                        "\\bigwedge": "\\dotsb",
                        "\\biguplus": "\\dotsb",
                        "\\bigcap": "\\dotsb",
                        "\\bigcup": "\\dotsb",
                        "\\prod": "\\dotsb",
                        "\\sum": "\\dotsb",
                        "\\bigotimes": "\\dotsb",
                        "\\bigoplus": "\\dotsb",
                        "\\bigodot": "\\dotsb",
                        "\\bigsqcup": "\\dotsb",
                        "\\And": "\\dotsb",
                        "\\longrightarrow": "\\dotsb",
                        "\\Longrightarrow": "\\dotsb",
                        "\\longleftarrow": "\\dotsb",
                        "\\Longleftarrow": "\\dotsb",
                        "\\longleftrightarrow": "\\dotsb",
                        "\\Longleftrightarrow": "\\dotsb",
                        "\\mapsto": "\\dotsb",
                        "\\longmapsto": "\\dotsb",
                        "\\hookrightarrow": "\\dotsb",
                        "\\doteq": "\\dotsb",
                        "\\mathbin": "\\dotsb",
                        "\\mathrel": "\\dotsb",
                        "\\relbar": "\\dotsb",
                        "\\Relbar": "\\dotsb",
                        "\\xrightarrow": "\\dotsb",
                        "\\xleftarrow": "\\dotsb",
                        "\\DOTSI": "\\dotsi",
                        "\\int": "\\dotsi",
                        "\\oint": "\\dotsi",
                        "\\iint": "\\dotsi",
                        "\\iiint": "\\dotsi",
                        "\\iiiint": "\\dotsi",
                        "\\idotsint": "\\dotsi",
                        "\\DOTSX": "\\dotsx"
                    };
                    Tn("\\dots", (function(e) {
                        var t = "\\dotso",
                            r = e.expandAfterFuture().text;
                        return r in qn ? t = qn[r] : ("\\not" === r.substr(0, 4) || r in $.math && c.contains(["bin", "rel"], $.math[r].group)) && (t = "\\dotsb"), t
                    }));
                    var Nn = {
                        ")": !0,
                        "]": !0,
                        "\\rbrack": !0,
                        "\\}": !0,
                        "\\rbrace": !0,
                        "\\rangle": !0,
                        "\\rceil": !0,
                        "\\rfloor": !0,
                        "\\rgroup": !0,
                        "\\rmoustache": !0,
                        "\\right": !0,
                        "\\bigr": !0,
                        "\\biggr": !0,
                        "\\Bigr": !0,
                        "\\Biggr": !0,
                        $: !0,
                        ";": !0,
                        ".": !0,
                        ",": !0
                    };
                    Tn("\\dotso", (function(e) {
                        return e.future().text in Nn ? "\\ldots\\," : "\\ldots"
                    })), Tn("\\dotsc", (function(e) {
                        var t = e.future().text;
                        return t in Nn && "," !== t ? "\\ldots\\," : "\\ldots"
                    })), Tn("\\cdots", (function(e) {
                        return e.future().text in Nn ? "\\@cdots\\," : "\\@cdots"
                    })), Tn("\\dotsb", "\\cdots"), Tn("\\dotsm", "\\cdots"), Tn("\\dotsi", "\\!\\cdots"), Tn("\\dotsx", "\\ldots\\,"), Tn("\\DOTSI", "\\relax"), Tn("\\DOTSB", "\\relax"), Tn("\\DOTSX", "\\relax"), Tn("\\tmspace", "\\TextOrMath{\\kern#1#3}{\\mskip#1#2}\\relax"), Tn("\\,", "\\tmspace+{3mu}{.1667em}"), Tn("\\thinspace", "\\,"), Tn("\\>", "\\mskip{4mu}"), Tn("\\:", "\\tmspace+{4mu}{.2222em}"), Tn("\\medspace", "\\:"), Tn("\\;", "\\tmspace+{5mu}{.2777em}"), Tn("\\thickspace", "\\;"), Tn("\\!", "\\tmspace-{3mu}{.1667em}"), Tn("\\negthinspace", "\\!"), Tn("\\negmedspace", "\\tmspace-{4mu}{.2222em}"), Tn("\\negthickspace", "\\tmspace-{5mu}{.277em}"), Tn("\\enspace", "\\kern.5em "), Tn("\\enskip", "\\hskip.5em\\relax"), Tn("\\quad", "\\hskip1em\\relax"), Tn("\\qquad", "\\hskip2em\\relax"), Tn("\\tag", "\\@ifstar\\tag@literal\\tag@paren"), Tn("\\tag@paren", "\\tag@literal{({#1})}"), Tn("\\tag@literal", (function(e) {
                        if (e.macros.get("\\df@tag")) throw new o("Multiple \\tag");
                        return "\\gdef\\df@tag{\\text{#1}}"
                    })), Tn("\\bmod", "\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}\\mathbin{\\rm mod}\\mathchoice{\\mskip1mu}{\\mskip1mu}{\\mskip5mu}{\\mskip5mu}"), Tn("\\pod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern8mu}{\\mkern8mu}{\\mkern8mu}(#1)"), Tn("\\pmod", "\\pod{{\\rm mod}\\mkern6mu#1}"), Tn("\\mod", "\\allowbreak\\mathchoice{\\mkern18mu}{\\mkern12mu}{\\mkern12mu}{\\mkern12mu}{\\rm mod}\\,\\,#1"), Tn("\\pmb", "\\html@mathml{\\@binrel{#1}{\\mathrlap{#1}\\kern0.5px#1}}{\\mathbf{#1}}"), Tn("\\\\", "\\newline"), Tn("\\TeX", "\\textrm{\\html@mathml{T\\kern-.1667em\\raisebox{-.5ex}{E}\\kern-.125emX}{TeX}}");
                    var In = V["Main-Regular"]["T".charCodeAt(0)][1] - .7 * V["Main-Regular"]["A".charCodeAt(0)][1] + "em";
                    Tn("\\LaTeX", "\\textrm{\\html@mathml{L\\kern-.36em\\raisebox{" + In + "}{\\scriptstyle A}\\kern-.15em\\TeX}{LaTeX}}"), Tn("\\KaTeX", "\\textrm{\\html@mathml{K\\kern-.17em\\raisebox{" + In + "}{\\scriptstyle A}\\kern-.15em\\TeX}{KaTeX}}"), Tn("\\hspace", "\\@ifstar\\@hspacer\\@hspace"), Tn("\\@hspace", "\\hskip #1\\relax"), Tn("\\@hspacer", "\\rule{0pt}{0pt}\\hskip #1\\relax"), Tn("\\ordinarycolon", ":"), Tn("\\vcentcolon", "\\mathrel{\\mathop\\ordinarycolon}"), Tn("\\dblcolon", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-.9mu}\\vcentcolon}}{\\mathop{\\char"2237}}'), Tn("\\coloneqq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2254}}'), Tn("\\Coloneqq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}=}}{\\mathop{\\char"2237\\char"3d}}'), Tn("\\coloneq", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"3a\\char"2212}}'), Tn("\\Coloneq", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\mathrel{-}}}{\\mathop{\\char"2237\\char"2212}}'), Tn("\\eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2255}}'), Tn("\\Eqqcolon", '\\html@mathml{\\mathrel{=\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"3d\\char"2237}}'), Tn("\\eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\vcentcolon}}{\\mathop{\\char"2239}}'), Tn("\\Eqcolon", '\\html@mathml{\\mathrel{\\mathrel{-}\\mathrel{\\mkern-1.2mu}\\dblcolon}}{\\mathop{\\char"2212\\char"2237}}'), Tn("\\colonapprox", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"3a\\char"2248}}'), Tn("\\Colonapprox", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\approx}}{\\mathop{\\char"2237\\char"2248}}'), Tn("\\colonsim", '\\html@mathml{\\mathrel{\\vcentcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"3a\\char"223c}}'), Tn("\\Colonsim", '\\html@mathml{\\mathrel{\\dblcolon\\mathrel{\\mkern-1.2mu}\\sim}}{\\mathop{\\char"2237\\char"223c}}'), Tn("\u2237", "\\dblcolon"), Tn("\u2239", "\\eqcolon"), Tn("\u2254", "\\coloneqq"), Tn("\u2255", "\\eqqcolon"), Tn("\u2a74", "\\Coloneqq"), Tn("\\ratio", "\\vcentcolon"), Tn("\\coloncolon", "\\dblcolon"), Tn("\\colonequals", "\\coloneqq"), Tn("\\coloncolonequals", "\\Coloneqq"), Tn("\\equalscolon", "\\eqqcolon"), Tn("\\equalscoloncolon", "\\Eqqcolon"), Tn("\\colonminus", "\\coloneq"), Tn("\\coloncolonminus", "\\Coloneq"), Tn("\\minuscolon", "\\eqcolon"), Tn("\\minuscoloncolon", "\\Eqcolon"), Tn("\\coloncolonapprox", "\\Colonapprox"), Tn("\\coloncolonsim", "\\Colonsim"), Tn("\\simcolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), Tn("\\simcoloncolon", "\\mathrel{\\sim\\mathrel{\\mkern-1.2mu}\\dblcolon}"), Tn("\\approxcolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\vcentcolon}"), Tn("\\approxcoloncolon", "\\mathrel{\\approx\\mathrel{\\mkern-1.2mu}\\dblcolon}"), Tn("\\notni", "\\html@mathml{\\not\\ni}{\\mathrel{\\char`\u220c}}"), Tn("\\limsup", "\\DOTSB\\operatorname*{lim\\,sup}"), Tn("\\liminf", "\\DOTSB\\operatorname*{lim\\,inf}"), Tn("\\gvertneqq", "\\html@mathml{\\@gvertneqq}{\u2269}"), Tn("\\lvertneqq", "\\html@mathml{\\@lvertneqq}{\u2268}"), Tn("\\ngeqq", "\\html@mathml{\\@ngeqq}{\u2271}"), Tn("\\ngeqslant", "\\html@mathml{\\@ngeqslant}{\u2271}"), Tn("\\nleqq", "\\html@mathml{\\@nleqq}{\u2270}"), Tn("\\nleqslant", "\\html@mathml{\\@nleqslant}{\u2270}"), Tn("\\nshortmid", "\\html@mathml{\\@nshortmid}{\u2224}"), Tn("\\nshortparallel", "\\html@mathml{\\@nshortparallel}{\u2226}"), Tn("\\nsubseteqq", "\\html@mathml{\\@nsubseteqq}{\u2288}"), Tn("\\nsupseteqq", "\\html@mathml{\\@nsupseteqq}{\u2289}"), Tn("\\varsubsetneq", "\\html@mathml{\\@varsubsetneq}{\u228a}"), Tn("\\varsubsetneqq", "\\html@mathml{\\@varsubsetneqq}{\u2acb}"), Tn("\\varsupsetneq", "\\html@mathml{\\@varsupsetneq}{\u228b}"), Tn("\\varsupsetneqq", "\\html@mathml{\\@varsupsetneqq}{\u2acc}"), Tn("\\imath", "\\html@mathml{\\@imath}{\u0131}"), Tn("\\jmath", "\\html@mathml{\\@jmath}{\u0237}"), Tn("\\llbracket", "\\html@mathml{\\mathopen{[\\mkern-3.2mu[}}{\\mathopen{\\char`\u27e6}}"), Tn("\\rrbracket", "\\html@mathml{\\mathclose{]\\mkern-3.2mu]}}{\\mathclose{\\char`\u27e7}}"), Tn("\u27e6", "\\llbracket"), Tn("\u27e7", "\\rrbracket"), Tn("\\lBrace", "\\html@mathml{\\mathopen{\\{\\mkern-3.2mu[}}{\\mathopen{\\char`\u2983}}"), Tn("\\rBrace", "\\html@mathml{\\mathclose{]\\mkern-3.2mu\\}}}{\\mathclose{\\char`\u2984}}"), Tn("\u2983", "\\lBrace"), Tn("\u2984", "\\rBrace"), Tn("\\minuso", "\\mathbin{\\html@mathml{{\\mathrlap{\\mathchoice{\\kern{0.145em}}{\\kern{0.145em}}{\\kern{0.1015em}}{\\kern{0.0725em}}\\circ}{-}}}{\\char`\u29b5}}"), Tn("\u29b5", "\\minuso"), Tn("\\darr", "\\downarrow"), Tn("\\dArr", "\\Downarrow"), Tn("\\Darr", "\\Downarrow"), Tn("\\lang", "\\langle"), Tn("\\rang", "\\rangle"), Tn("\\uarr", "\\uparrow"), Tn("\\uArr", "\\Uparrow"), Tn("\\Uarr", "\\Uparrow"), Tn("\\N", "\\mathbb{N}"), Tn("\\R", "\\mathbb{R}"), Tn("\\Z", "\\mathbb{Z}"), Tn("\\alef", "\\aleph"), Tn("\\alefsym", "\\aleph"), Tn("\\Alpha", "\\mathrm{A}"), Tn("\\Beta", "\\mathrm{B}"), Tn("\\bull", "\\bullet"), Tn("\\Chi", "\\mathrm{X}"), Tn("\\clubs", "\\clubsuit"), Tn("\\cnums", "\\mathbb{C}"), Tn("\\Complex", "\\mathbb{C}"), Tn("\\Dagger", "\\ddagger"), Tn("\\diamonds", "\\diamondsuit"), Tn("\\empty", "\\emptyset"), Tn("\\Epsilon", "\\mathrm{E}"), Tn("\\Eta", "\\mathrm{H}"), Tn("\\exist", "\\exists"), Tn("\\harr", "\\leftrightarrow"), Tn("\\hArr", "\\Leftrightarrow"), Tn("\\Harr", "\\Leftrightarrow"), Tn("\\hearts", "\\heartsuit"), Tn("\\image", "\\Im"), Tn("\\infin", "\\infty"), Tn("\\Iota", "\\mathrm{I}"), Tn("\\isin", "\\in"), Tn("\\Kappa", "\\mathrm{K}"), Tn("\\larr", "\\leftarrow"), Tn("\\lArr", "\\Leftarrow"), Tn("\\Larr", "\\Leftarrow"), Tn("\\lrarr", "\\leftrightarrow"), Tn("\\lrArr", "\\Leftrightarrow"), Tn("\\Lrarr", "\\Leftrightarrow"), Tn("\\Mu", "\\mathrm{M}"), Tn("\\natnums", "\\mathbb{N}"), Tn("\\Nu", "\\mathrm{N}"), Tn("\\Omicron", "\\mathrm{O}"), Tn("\\plusmn", "\\pm"), Tn("\\rarr", "\\rightarrow"), Tn("\\rArr", "\\Rightarrow"), Tn("\\Rarr", "\\Rightarrow"), Tn("\\real", "\\Re"), Tn("\\reals", "\\mathbb{R}"), Tn("\\Reals", "\\mathbb{R}"), Tn("\\Rho", "\\mathrm{P}"), Tn("\\sdot", "\\cdot"), Tn("\\sect", "\\S"), Tn("\\spades", "\\spadesuit"), Tn("\\sub", "\\subset"), Tn("\\sube", "\\subseteq"), Tn("\\supe", "\\supseteq"), Tn("\\Tau", "\\mathrm{T}"), Tn("\\thetasym", "\\vartheta"), Tn("\\weierp", "\\wp"), Tn("\\Zeta", "\\mathrm{Z}"), Tn("\\argmin", "\\DOTSB\\operatorname*{arg\\,min}"), Tn("\\argmax", "\\DOTSB\\operatorname*{arg\\,max}"), Tn("\\plim", "\\DOTSB\\mathop{\\operatorname{plim}}\\limits"), Tn("\\bra", "\\mathinner{\\langle{#1}|}"), Tn("\\ket", "\\mathinner{|{#1}\\rangle}"), Tn("\\braket", "\\mathinner{\\langle{#1}\\rangle}"), Tn("\\Bra", "\\left\\langle#1\\right|"), Tn("\\Ket", "\\left|#1\\right\\rangle"), Tn("\\blue", "\\textcolor{##6495ed}{#1}"), Tn("\\orange", "\\textcolor{##ffa500}{#1}"), Tn("\\pink", "\\textcolor{##ff00af}{#1}"), Tn("\\red", "\\textcolor{##df0030}{#1}"), Tn("\\green", "\\textcolor{##28ae7b}{#1}"), Tn("\\gray", "\\textcolor{gray}{#1}"), Tn("\\purple", "\\textcolor{##9d38bd}{#1}"), Tn("\\blueA", "\\textcolor{##ccfaff}{#1}"), Tn("\\blueB", "\\textcolor{##80f6ff}{#1}"), Tn("\\blueC", "\\textcolor{##63d9ea}{#1}"), Tn("\\blueD", "\\textcolor{##11accd}{#1}"), Tn("\\blueE", "\\textcolor{##0c7f99}{#1}"), Tn("\\tealA", "\\textcolor{##94fff5}{#1}"), Tn("\\tealB", "\\textcolor{##26edd5}{#1}"), Tn("\\tealC", "\\textcolor{##01d1c1}{#1}"), Tn("\\tealD", "\\textcolor{##01a995}{#1}"), Tn("\\tealE", "\\textcolor{##208170}{#1}"), Tn("\\greenA", "\\textcolor{##b6ffb0}{#1}"), Tn("\\greenB", "\\textcolor{##8af281}{#1}"), Tn("\\greenC", "\\textcolor{##74cf70}{#1}"), Tn("\\greenD", "\\textcolor{##1fab54}{#1}"), Tn("\\greenE", "\\textcolor{##0d923f}{#1}"), Tn("\\goldA", "\\textcolor{##ffd0a9}{#1}"), Tn("\\goldB", "\\textcolor{##ffbb71}{#1}"), Tn("\\goldC", "\\textcolor{##ff9c39}{#1}"), Tn("\\goldD", "\\textcolor{##e07d10}{#1}"), Tn("\\goldE", "\\textcolor{##a75a05}{#1}"), Tn("\\redA", "\\textcolor{##fca9a9}{#1}"), Tn("\\redB", "\\textcolor{##ff8482}{#1}"), Tn("\\redC", "\\textcolor{##f9685d}{#1}"), Tn("\\redD", "\\textcolor{##e84d39}{#1}"), Tn("\\redE", "\\textcolor{##bc2612}{#1}"), Tn("\\maroonA", "\\textcolor{##ffbde0}{#1}"), Tn("\\maroonB", "\\textcolor{##ff92c6}{#1}"), Tn("\\maroonC", "\\textcolor{##ed5fa6}{#1}"), Tn("\\maroonD", "\\textcolor{##ca337c}{#1}"), Tn("\\maroonE", "\\textcolor{##9e034e}{#1}"), Tn("\\purpleA", "\\textcolor{##ddd7ff}{#1}"), Tn("\\purpleB", "\\textcolor{##c6b9fc}{#1}"), Tn("\\purpleC", "\\textcolor{##aa87ff}{#1}"), Tn("\\purpleD", "\\textcolor{##7854ab}{#1}"), Tn("\\purpleE", "\\textcolor{##543b78}{#1}"), Tn("\\mintA", "\\textcolor{##f5f9e8}{#1}"), Tn("\\mintB", "\\textcolor{##edf2df}{#1}"), Tn("\\mintC", "\\textcolor{##e0e5cc}{#1}"), Tn("\\grayA", "\\textcolor{##f6f7f7}{#1}"), Tn("\\grayB", "\\textcolor{##f0f1f2}{#1}"), Tn("\\grayC", "\\textcolor{##e3e5e6}{#1}"), Tn("\\grayD", "\\textcolor{##d6d8da}{#1}"), Tn("\\grayE", "\\textcolor{##babec2}{#1}"), Tn("\\grayF", "\\textcolor{##888d93}{#1}"), Tn("\\grayG", "\\textcolor{##626569}{#1}"), Tn("\\grayH", "\\textcolor{##3b3e40}{#1}"), Tn("\\grayI", "\\textcolor{##21242c}{#1}"), Tn("\\kaBlue", "\\textcolor{##314453}{#1}"), Tn("\\kaGreen", "\\textcolor{##71B307}{#1}");
                    var On = {
                            "\\relax": !0,
                            "^": !0,
                            _: !0,
                            "\\limits": !0,
                            "\\nolimits": !0
                        },
                        Rn = function() {
                            function e(e, t, r) {
                                this.settings = void 0, this.expansionCount = void 0, this.lexer = void 0, this.macros = void 0, this.stack = void 0, this.mode = void 0, this.settings = t, this.expansionCount = 0, this.feed(e), this.macros = new Mn(An, t.macros), this.mode = r, this.stack = []
                            }
                            var t = e.prototype;
                            return t.feed = function(e) {
                                this.lexer = new Sn(e, this.settings)
                            }, t.switchMode = function(e) {
                                this.mode = e
                            }, t.beginGroup = function() {
                                this.macros.beginGroup()
                            }, t.endGroup = function() {
                                this.macros.endGroup()
                            }, t.future = function() {
                                return 0 === this.stack.length && this.pushToken(this.lexer.lex()), this.stack[this.stack.length - 1]
                            }, t.popToken = function() {
                                return this.future(), this.stack.pop()
                            }, t.pushToken = function(e) {
                                this.stack.push(e)
                            }, t.pushTokens = function(e) {
                                var t;
                                (t = this.stack).push.apply(t, e)
                            }, t.consumeSpaces = function() {
                                for (;
                                    " " === this.future().text;) this.stack.pop()
                            }, t.consumeArgs = function(e) {
                                for (var t = [], r = 0; r < e; ++r) {
                                    this.consumeSpaces();
                                    var n = this.popToken();
                                    if ("{" === n.text) {
                                        for (var a = [], i = 1; 0 !== i;) {
                                            var s = this.popToken();
                                            if (a.push(s), "{" === s.text) ++i;
                                            else if ("}" === s.text) --i;
                                            else if ("EOF" === s.text) throw new o("End of input in macro argument", n)
                                        }
                                        a.pop(), a.reverse(), t[r] = a
                                    } else {
                                        if ("EOF" === n.text) throw new o("End of input expecting macro argument");
                                        t[r] = [n]
                                    }
                                }
                                return t
                            }, t.expandOnce = function(e) {
                                var t = this.popToken(),
                                    r = t.text,
                                    n = t.noexpand ? null : this._getExpansion(r);
                                if (null == n || e && n.unexpandable) {
                                    if (e && null == n && "\\" === r[0] && !this.isDefined(r)) throw new o("Undefined control sequence: " + r);
                                    return this.pushToken(t), t
                                }
                                if (this.expansionCount++, this.expansionCount > this.settings.maxExpand) throw new o("Too many expansions: infinite loop or need to increase maxExpand setting");
                                var a = n.tokens;
                                if (n.numArgs)
                                    for (var i = this.consumeArgs(n.numArgs), s = (a = a.slice()).length - 1; s >= 0; --s) {
                                        var l = a[s];
                                        if ("#" === l.text) {
                                            if (0 === s) throw new o("Incomplete placeholder at end of macro body", l);
                                            if ("#" === (l = a[--s]).text) a.splice(s + 1, 1);
                                            else {
                                                if (!/^[1-9]$/.test(l.text)) throw new o("Not a valid argument number", l);
                                                var h;
                                                (h = a).splice.apply(h, [s, 2].concat(i[+l.text - 1]))
                                            }
                                        }
                                    }
                                return this.pushTokens(a), a
                            }, t.expandAfterFuture = function() {
                                return this.expandOnce(), this.future()
                            }, t.expandNextToken = function() {
                                for (;;) {
                                    var e = this.expandOnce();
                                    if (e instanceof a) {
                                        if ("\\relax" !== e.text && !e.treatAsRelax) return this.stack.pop();
                                        this.stack.pop()
                                    }
                                }
                                throw new Error
                            }, t.expandMacro = function(e) {
                                return this.macros.has(e) ? this.expandTokens([new a(e)]) : void 0
                            }, t.expandTokens = function(e) {
                                var t = [],
                                    r = this.stack.length;
                                for (this.pushTokens(e); this.stack.length > r;) {
                                    var n = this.expandOnce(!0);
                                    n instanceof a && (n.treatAsRelax && (n.noexpand = !1, n.treatAsRelax = !1), t.push(this.stack.pop()))
                                }
                                return t
                            }, t.expandMacroAsText = function(e) {
                                var t = this.expandMacro(e);
                                return t ? t.map((function(e) {
                                    return e.text
                                })).join("") : t
                            }, t._getExpansion = function(e) {
                                var t = this.macros.get(e);
                                if (null == t) return t;
                                var r = "function" === typeof t ? t(this) : t;
                                if ("string" === typeof r) {
                                    var n = 0;
                                    if (-1 !== r.indexOf("#"))
                                        for (var a = r.replace(/##/g, ""); - 1 !== a.indexOf("#" + (n + 1));) ++n;
                                    for (var i = new Sn(r, this.settings), o = [], s = i.lex();
                                        "EOF" !== s.text;) o.push(s), s = i.lex();
                                    return o.reverse(), {
                                        tokens: o,
                                        numArgs: n
                                    }
                                }
                                return r
                            }, t.isDefined = function(e) {
                                return this.macros.has(e) || xn.hasOwnProperty(e) || $.math.hasOwnProperty(e) || $.text.hasOwnProperty(e) || On.hasOwnProperty(e)
                            }, t.isExpandable = function(e) {
                                var t = this.macros.get(e);
                                return null != t ? "string" === typeof t || "function" === typeof t || !t.unexpandable : xn.hasOwnProperty(e)
                            }, e
                        }(),
                        En = {
                            "\u0301": {
                                text: "\\'",
                                math: "\\acute"
                            },
                            "\u0300": {
                                text: "\\`",
                                math: "\\grave"
                            },
                            "\u0308": {
                                text: '\\"',
                                math: "\\ddot"
                            },
                            "\u0303": {
                                text: "\\~",
                                math: "\\tilde"
                            },
                            "\u0304": {
                                text: "\\=",
                                math: "\\bar"
                            },
                            "\u0306": {
                                text: "\\u",
                                math: "\\breve"
                            },
                            "\u030c": {
                                text: "\\v",
                                math: "\\check"
                            },
                            "\u0302": {
                                text: "\\^",
                                math: "\\hat"
                            },
                            "\u0307": {
                                text: "\\.",
                                math: "\\dot"
                            },
                            "\u030a": {
                                text: "\\r",
                                math: "\\mathring"
                            },
                            "\u030b": {
                                text: "\\H"
                            }
                        },
                        Ln = {
                            "\xe1": "a\u0301",
                            "\xe0": "a\u0300",
                            "\xe4": "a\u0308",
                            "\u01df": "a\u0308\u0304",
                            "\xe3": "a\u0303",
                            "\u0101": "a\u0304",
                            "\u0103": "a\u0306",
                            "\u1eaf": "a\u0306\u0301",
                            "\u1eb1": "a\u0306\u0300",
                            "\u1eb5": "a\u0306\u0303",
                            "\u01ce": "a\u030c",
                            "\xe2": "a\u0302",
                            "\u1ea5": "a\u0302\u0301",
                            "\u1ea7": "a\u0302\u0300",
                            "\u1eab": "a\u0302\u0303",
                            "\u0227": "a\u0307",
                            "\u01e1": "a\u0307\u0304",
                            "\xe5": "a\u030a",
                            "\u01fb": "a\u030a\u0301",
                            "\u1e03": "b\u0307",
                            "\u0107": "c\u0301",
                            "\u010d": "c\u030c",
                            "\u0109": "c\u0302",
                            "\u010b": "c\u0307",
                            "\u010f": "d\u030c",
                            "\u1e0b": "d\u0307",
                            "\xe9": "e\u0301",
                            "\xe8": "e\u0300",
                            "\xeb": "e\u0308",
                            "\u1ebd": "e\u0303",
                            "\u0113": "e\u0304",
                            "\u1e17": "e\u0304\u0301",
                            "\u1e15": "e\u0304\u0300",
                            "\u0115": "e\u0306",
                            "\u011b": "e\u030c",
                            "\xea": "e\u0302",
                            "\u1ebf": "e\u0302\u0301",
                            "\u1ec1": "e\u0302\u0300",
                            "\u1ec5": "e\u0302\u0303",
                            "\u0117": "e\u0307",
                            "\u1e1f": "f\u0307",
                            "\u01f5": "g\u0301",
                            "\u1e21": "g\u0304",
                            "\u011f": "g\u0306",
                            "\u01e7": "g\u030c",
                            "\u011d": "g\u0302",
                            "\u0121": "g\u0307",
                            "\u1e27": "h\u0308",
                            "\u021f": "h\u030c",
                            "\u0125": "h\u0302",
                            "\u1e23": "h\u0307",
                            "\xed": "i\u0301",
                            "\xec": "i\u0300",
                            "\xef": "i\u0308",
                            "\u1e2f": "i\u0308\u0301",
                            "\u0129": "i\u0303",
                            "\u012b": "i\u0304",
                            "\u012d": "i\u0306",
                            "\u01d0": "i\u030c",
                            "\xee": "i\u0302",
                            "\u01f0": "j\u030c",
                            "\u0135": "j\u0302",
                            "\u1e31": "k\u0301",
                            "\u01e9": "k\u030c",
                            "\u013a": "l\u0301",
                            "\u013e": "l\u030c",
                            "\u1e3f": "m\u0301",
                            "\u1e41": "m\u0307",
                            "\u0144": "n\u0301",
                            "\u01f9": "n\u0300",
                            "\xf1": "n\u0303",
                            "\u0148": "n\u030c",
                            "\u1e45": "n\u0307",
                            "\xf3": "o\u0301",
                            "\xf2": "o\u0300",
                            "\xf6": "o\u0308",
                            "\u022b": "o\u0308\u0304",
                            "\xf5": "o\u0303",
                            "\u1e4d": "o\u0303\u0301",
                            "\u1e4f": "o\u0303\u0308",
                            "\u022d": "o\u0303\u0304",
                            "\u014d": "o\u0304",
                            "\u1e53": "o\u0304\u0301",
                            "\u1e51": "o\u0304\u0300",
                            "\u014f": "o\u0306",
                            "\u01d2": "o\u030c",
                            "\xf4": "o\u0302",
                            "\u1ed1": "o\u0302\u0301",
                            "\u1ed3": "o\u0302\u0300",
                            "\u1ed7": "o\u0302\u0303",
                            "\u022f": "o\u0307",
                            "\u0231": "o\u0307\u0304",
                            "\u0151": "o\u030b",
                            "\u1e55": "p\u0301",
                            "\u1e57": "p\u0307",
                            "\u0155": "r\u0301",
                            "\u0159": "r\u030c",
                            "\u1e59": "r\u0307",
                            "\u015b": "s\u0301",
                            "\u1e65": "s\u0301\u0307",
                            "\u0161": "s\u030c",
                            "\u1e67": "s\u030c\u0307",
                            "\u015d": "s\u0302",
                            "\u1e61": "s\u0307",
                            "\u1e97": "t\u0308",
                            "\u0165": "t\u030c",
                            "\u1e6b": "t\u0307",
                            "\xfa": "u\u0301",
                            "\xf9": "u\u0300",
                            "\xfc": "u\u0308",
                            "\u01d8": "u\u0308\u0301",
                            "\u01dc": "u\u0308\u0300",
                            "\u01d6": "u\u0308\u0304",
                            "\u01da": "u\u0308\u030c",
                            "\u0169": "u\u0303",
                            "\u1e79": "u\u0303\u0301",
                            "\u016b": "u\u0304",
                            "\u1e7b": "u\u0304\u0308",
                            "\u016d": "u\u0306",
                            "\u01d4": "u\u030c",
                            "\xfb": "u\u0302",
                            "\u016f": "u\u030a",
                            "\u0171": "u\u030b",
                            "\u1e7d": "v\u0303",
                            "\u1e83": "w\u0301",
                            "\u1e81": "w\u0300",
                            "\u1e85": "w\u0308",
                            "\u0175": "w\u0302",
                            "\u1e87": "w\u0307",
                            "\u1e98": "w\u030a",
                            "\u1e8d": "x\u0308",
                            "\u1e8b": "x\u0307",
                            "\xfd": "y\u0301",
                            "\u1ef3": "y\u0300",
                            "\xff": "y\u0308",
                            "\u1ef9": "y\u0303",
                            "\u0233": "y\u0304",
                            "\u0177": "y\u0302",
                            "\u1e8f": "y\u0307",
                            "\u1e99": "y\u030a",
                            "\u017a": "z\u0301",
                            "\u017e": "z\u030c",
                            "\u1e91": "z\u0302",
                            "\u017c": "z\u0307",
                            "\xc1": "A\u0301",
                            "\xc0": "A\u0300",
                            "\xc4": "A\u0308",
                            "\u01de": "A\u0308\u0304",
                            "\xc3": "A\u0303",
                            "\u0100": "A\u0304",
                            "\u0102": "A\u0306",
                            "\u1eae": "A\u0306\u0301",
                            "\u1eb0": "A\u0306\u0300",
                            "\u1eb4": "A\u0306\u0303",
                            "\u01cd": "A\u030c",
                            "\xc2": "A\u0302",
                            "\u1ea4": "A\u0302\u0301",
                            "\u1ea6": "A\u0302\u0300",
                            "\u1eaa": "A\u0302\u0303",
                            "\u0226": "A\u0307",
                            "\u01e0": "A\u0307\u0304",
                            "\xc5": "A\u030a",
                            "\u01fa": "A\u030a\u0301",
                            "\u1e02": "B\u0307",
                            "\u0106": "C\u0301",
                            "\u010c": "C\u030c",
                            "\u0108": "C\u0302",
                            "\u010a": "C\u0307",
                            "\u010e": "D\u030c",
                            "\u1e0a": "D\u0307",
                            "\xc9": "E\u0301",
                            "\xc8": "E\u0300",
                            "\xcb": "E\u0308",
                            "\u1ebc": "E\u0303",
                            "\u0112": "E\u0304",
                            "\u1e16": "E\u0304\u0301",
                            "\u1e14": "E\u0304\u0300",
                            "\u0114": "E\u0306",
                            "\u011a": "E\u030c",
                            "\xca": "E\u0302",
                            "\u1ebe": "E\u0302\u0301",
                            "\u1ec0": "E\u0302\u0300",
                            "\u1ec4": "E\u0302\u0303",
                            "\u0116": "E\u0307",
                            "\u1e1e": "F\u0307",
                            "\u01f4": "G\u0301",
                            "\u1e20": "G\u0304",
                            "\u011e": "G\u0306",
                            "\u01e6": "G\u030c",
                            "\u011c": "G\u0302",
                            "\u0120": "G\u0307",
                            "\u1e26": "H\u0308",
                            "\u021e": "H\u030c",
                            "\u0124": "H\u0302",
                            "\u1e22": "H\u0307",
                            "\xcd": "I\u0301",
                            "\xcc": "I\u0300",
                            "\xcf": "I\u0308",
                            "\u1e2e": "I\u0308\u0301",
                            "\u0128": "I\u0303",
                            "\u012a": "I\u0304",
                            "\u012c": "I\u0306",
                            "\u01cf": "I\u030c",
                            "\xce": "I\u0302",
                            "\u0130": "I\u0307",
                            "\u0134": "J\u0302",
                            "\u1e30": "K\u0301",
                            "\u01e8": "K\u030c",
                            "\u0139": "L\u0301",
                            "\u013d": "L\u030c",
                            "\u1e3e": "M\u0301",
                            "\u1e40": "M\u0307",
                            "\u0143": "N\u0301",
                            "\u01f8": "N\u0300",
                            "\xd1": "N\u0303",
                            "\u0147": "N\u030c",
                            "\u1e44": "N\u0307",
                            "\xd3": "O\u0301",
                            "\xd2": "O\u0300",
                            "\xd6": "O\u0308",
                            "\u022a": "O\u0308\u0304",
                            "\xd5": "O\u0303",
                            "\u1e4c": "O\u0303\u0301",
                            "\u1e4e": "O\u0303\u0308",
                            "\u022c": "O\u0303\u0304",
                            "\u014c": "O\u0304",
                            "\u1e52": "O\u0304\u0301",
                            "\u1e50": "O\u0304\u0300",
                            "\u014e": "O\u0306",
                            "\u01d1": "O\u030c",
                            "\xd4": "O\u0302",
                            "\u1ed0": "O\u0302\u0301",
                            "\u1ed2": "O\u0302\u0300",
                            "\u1ed6": "O\u0302\u0303",
                            "\u022e": "O\u0307",
                            "\u0230": "O\u0307\u0304",
                            "\u0150": "O\u030b",
                            "\u1e54": "P\u0301",
                            "\u1e56": "P\u0307",
                            "\u0154": "R\u0301",
                            "\u0158": "R\u030c",
                            "\u1e58": "R\u0307",
                            "\u015a": "S\u0301",
                            "\u1e64": "S\u0301\u0307",
                            "\u0160": "S\u030c",
                            "\u1e66": "S\u030c\u0307",
                            "\u015c": "S\u0302",
                            "\u1e60": "S\u0307",
                            "\u0164": "T\u030c",
                            "\u1e6a": "T\u0307",
                            "\xda": "U\u0301",
                            "\xd9": "U\u0300",
                            "\xdc": "U\u0308",
                            "\u01d7": "U\u0308\u0301",
                            "\u01db": "U\u0308\u0300",
                            "\u01d5": "U\u0308\u0304",
                            "\u01d9": "U\u0308\u030c",
                            "\u0168": "U\u0303",
                            "\u1e78": "U\u0303\u0301",
                            "\u016a": "U\u0304",
                            "\u1e7a": "U\u0304\u0308",
                            "\u016c": "U\u0306",
                            "\u01d3": "U\u030c",
                            "\xdb": "U\u0302",
                            "\u016e": "U\u030a",
                            "\u0170": "U\u030b",
                            "\u1e7c": "V\u0303",
                            "\u1e82": "W\u0301",
                            "\u1e80": "W\u0300",
                            "\u1e84": "W\u0308",
                            "\u0174": "W\u0302",
                            "\u1e86": "W\u0307",
                            "\u1e8c": "X\u0308",
                            "\u1e8a": "X\u0307",
                            "\xdd": "Y\u0301",
                            "\u1ef2": "Y\u0300",
                            "\u0178": "Y\u0308",
                            "\u1ef8": "Y\u0303",
                            "\u0232": "Y\u0304",
                            "\u0176": "Y\u0302",
                            "\u1e8e": "Y\u0307",
                            "\u0179": "Z\u0301",
                            "\u017d": "Z\u030c",
                            "\u1e90": "Z\u0302",
                            "\u017b": "Z\u0307",
                            "\u03ac": "\u03b1\u0301",
                            "\u1f70": "\u03b1\u0300",
                            "\u1fb1": "\u03b1\u0304",
                            "\u1fb0": "\u03b1\u0306",
                            "\u03ad": "\u03b5\u0301",
                            "\u1f72": "\u03b5\u0300",
                            "\u03ae": "\u03b7\u0301",
                            "\u1f74": "\u03b7\u0300",
                            "\u03af": "\u03b9\u0301",
                            "\u1f76": "\u03b9\u0300",
                            "\u03ca": "\u03b9\u0308",
                            "\u0390": "\u03b9\u0308\u0301",
                            "\u1fd2": "\u03b9\u0308\u0300",
                            "\u1fd1": "\u03b9\u0304",
                            "\u1fd0": "\u03b9\u0306",
                            "\u03cc": "\u03bf\u0301",
                            "\u1f78": "\u03bf\u0300",
                            "\u03cd": "\u03c5\u0301",
                            "\u1f7a": "\u03c5\u0300",
                            "\u03cb": "\u03c5\u0308",
                            "\u03b0": "\u03c5\u0308\u0301",
                            "\u1fe2": "\u03c5\u0308\u0300",
                            "\u1fe1": "\u03c5\u0304",
                            "\u1fe0": "\u03c5\u0306",
                            "\u03ce": "\u03c9\u0301",
                            "\u1f7c": "\u03c9\u0300",
                            "\u038e": "\u03a5\u0301",
                            "\u1fea": "\u03a5\u0300",
                            "\u03ab": "\u03a5\u0308",
                            "\u1fe9": "\u03a5\u0304",
                            "\u1fe8": "\u03a5\u0306",
                            "\u038f": "\u03a9\u0301",
                            "\u1ffa": "\u03a9\u0300"
                        },
                        Pn = function() {
                            function e(e, t) {
                                this.mode = void 0, this.gullet = void 0, this.settings = void 0, this.leftrightDepth = void 0, this.nextToken = void 0, this.mode = "math", this.gullet = new Rn(e, t, this.mode), this.settings = t, this.leftrightDepth = 0
                            }
                            var t = e.prototype;
                            return t.expect = function(e, t) {
                                if (void 0 === t && (t = !0), this.fetch().text !== e) throw new o("Expected '" + e + "', got '" + this.fetch().text + "'", this.fetch());
                                t && this.consume()
                            }, t.consume = function() {
                                this.nextToken = null
                            }, t.fetch = function() {
                                return null == this.nextToken && (this.nextToken = this.gullet.expandNextToken()), this.nextToken
                            }, t.switchMode = function(e) {
                                this.mode = e, this.gullet.switchMode(e)
                            }, t.parse = function() {
                                this.settings.globalGroup || this.gullet.beginGroup(), this.settings.colorIsTextColor && this.gullet.macros.set("\\color", "\\textcolor");
                                var e = this.parseExpression(!1);
                                return this.expect("EOF"), this.settings.globalGroup || this.gullet.endGroup(), e
                            }, t.parseExpression = function(t, r) {
                                for (var n = [];;) {
                                    "math" === this.mode && this.consumeSpaces();
                                    var a = this.fetch();
                                    if (-1 !== e.endOfExpression.indexOf(a.text)) break;
                                    if (r && a.text === r) break;
                                    if (t && xn[a.text] && xn[a.text].infix) break;
                                    var i = this.parseAtom(r);
                                    if (!i) break;
                                    "internal" !== i.type && n.push(i)
                                }
                                return "text" === this.mode && this.formLigatures(n), this.handleInfixNodes(n)
                            }, t.handleInfixNodes = function(e) {
                                for (var t, r = -1, n = 0; n < e.length; n++)
                                    if ("infix" === e[n].type) {
                                        if (-1 !== r) throw new o("only one infix operator per group", e[n].token);
                                        r = n, t = e[n].replaceWith
                                    }
                                if (-1 !== r && t) {
                                    var a, i, s = e.slice(0, r),
                                        l = e.slice(r + 1);
                                    return a = 1 === s.length && "ordgroup" === s[0].type ? s[0] : {
                                        type: "ordgroup",
                                        mode: this.mode,
                                        body: s
                                    }, i = 1 === l.length && "ordgroup" === l[0].type ? l[0] : {
                                        type: "ordgroup",
                                        mode: this.mode,
                                        body: l
                                    }, ["\\\\abovefrac" === t ? this.callFunction(t, [a, e[r], i], []) : this.callFunction(t, [a, i], [])]
                                }
                                return e
                            }, t.handleSupSubscript = function(t) {
                                var r = this.fetch(),
                                    n = r.text;
                                this.consume();
                                var a = this.parseGroup(t, !1, e.SUPSUB_GREEDINESS, void 0, void 0, !0);
                                if (!a) throw new o("Expected group after '" + n + "'", r);
                                return a
                            }, t.formatUnsupportedCmd = function(e) {
                                for (var t = [], r = 0; r < e.length; r++) t.push({
                                    type: "textord",
                                    mode: "text",
                                    text: e[r]
                                });
                                var n = {
                                    type: "text",
                                    mode: this.mode,
                                    body: t
                                };
                                return {
                                    type: "color",
                                    mode: this.mode,
                                    color: this.settings.errorColor,
                                    body: [n]
                                }
                            }, t.parseAtom = function(e) {
                                var t, r, n = this.parseGroup("atom", !1, null, e);
                                if ("text" === this.mode) return n;
                                for (;;) {
                                    this.consumeSpaces();
                                    var a = this.fetch();
                                    if ("\\limits" === a.text || "\\nolimits" === a.text) {
                                        if (n && "op" === n.type) {
                                            var i = "\\limits" === a.text;
                                            n.limits = i, n.alwaysHandleSupSub = !0
                                        } else {
                                            if (!n || "operatorname" !== n.type || !n.alwaysHandleSupSub) throw new o("Limit controls must follow a math operator", a);
                                            var s = "\\limits" === a.text;
                                            n.limits = s
                                        }
                                        this.consume()
                                    } else if ("^" === a.text) {
                                        if (t) throw new o("Double superscript", a);
                                        t = this.handleSupSubscript("superscript")
                                    } else if ("_" === a.text) {
                                        if (r) throw new o("Double subscript", a);
                                        r = this.handleSupSubscript("subscript")
                                    } else {
                                        if ("'" !== a.text) break;
                                        if (t) throw new o("Double superscript", a);
                                        var l = {
                                                type: "textord",
                                                mode: this.mode,
                                                text: "\\prime"
                                            },
                                            h = [l];
                                        for (this.consume();
                                            "'" === this.fetch().text;) h.push(l), this.consume();
                                        "^" === this.fetch().text && h.push(this.handleSupSubscript("superscript")), t = {
                                            type: "ordgroup",
                                            mode: this.mode,
                                            body: h
                                        }
                                    }
                                }
                                return t || r ? {
                                    type: "supsub",
                                    mode: this.mode,
                                    base: n,
                                    sup: t,
                                    sub: r
                                } : n
                            }, t.parseFunction = function(e, t, r) {
                                var n = this.fetch(),
                                    a = n.text,
                                    i = xn[a];
                                if (!i) return null;
                                if (this.consume(), null != r && i.greediness <= r) throw new o("Got function '" + a + "' with no arguments" + (t ? " as " + t : ""), n);
                                if ("text" === this.mode && !i.allowedInText) throw new o("Can't use function '" + a + "' in text mode", n);
                                if ("math" === this.mode && !1 === i.allowedInMath) throw new o("Can't use function '" + a + "' in math mode", n);
                                var s = this.parseArguments(a, i),
                                    l = s.args,
                                    h = s.optArgs;
                                return this.callFunction(a, l, h, n, e)
                            }, t.callFunction = function(e, t, r, n, a) {
                                var i = {
                                        funcName: e,
                                        parser: this,
                                        token: n,
                                        breakOnTokenText: a
                                    },
                                    s = xn[e];
                                if (s && s.handler) return s.handler(i, t, r);
                                throw new o("No function handler for " + e)
                            }, t.parseArguments = function(e, t) {
                                var r = t.numArgs + t.numOptionalArgs;
                                if (0 === r) return {
                                    args: [],
                                    optArgs: []
                                };
                                for (var n = t.greediness, a = [], i = [], s = 0; s < r; s++) {
                                    var l = t.argTypes && t.argTypes[s],
                                        h = s < t.numOptionalArgs,
                                        m = s > 0 && !h || 0 === s && !h && "math" === this.mode,
                                        c = this.parseGroupOfType("argument to '" + e + "'", l, h, n, m);
                                    if (!c) {
                                        if (h) {
                                            i.push(null);
                                            continue
                                        }
                                        throw new o("Expected group after '" + e + "'", this.fetch())
                                    }(h ? i : a).push(c)
                                }
                                return {
                                    args: a,
                                    optArgs: i
                                }
                            }, t.parseGroupOfType = function(e, t, r, n, a) {
                                switch (t) {
                                    case "color":
                                        return a && this.consumeSpaces(), this.parseColorGroup(r);
                                    case "size":
                                        return a && this.consumeSpaces(), this.parseSizeGroup(r);
                                    case "url":
                                        return this.parseUrlGroup(r, a);
                                    case "math":
                                    case "text":
                                        return this.parseGroup(e, r, n, void 0, t, a);
                                    case "hbox":
                                        var i = this.parseGroup(e, r, n, void 0, "text", a);
                                        return i ? {
                                            type: "styling",
                                            mode: i.mode,
                                            body: [i],
                                            style: "text"
                                        } : i;
                                    case "raw":
                                        if (a && this.consumeSpaces(), r && "{" === this.fetch().text) return null;
                                        var s = this.parseStringGroup("raw", r, !0);
                                        if (s) return {
                                            type: "raw",
                                            mode: "text",
                                            string: s.text
                                        };
                                        throw new o("Expected raw group", this.fetch());
                                    case "original":
                                    case null:
                                    case void 0:
                                        return this.parseGroup(e, r, n, void 0, void 0, a);
                                    default:
                                        throw new o("Unknown group type as " + e, this.fetch())
                                }
                            }, t.consumeSpaces = function() {
                                for (;
                                    " " === this.fetch().text;) this.consume()
                            }, t.parseStringGroup = function(e, t, r) {
                                var n = t ? "[" : "{",
                                    a = t ? "]" : "}",
                                    i = this.fetch();
                                if (i.text !== n) {
                                    if (t) return null;
                                    if (r && "EOF" !== i.text && /[^{}[\]]/.test(i.text)) return this.consume(), i
                                }
                                var s = this.mode;
                                this.mode = "text", this.expect(n);
                                for (var l, h = "", m = this.fetch(), c = 0, u = m;
                                    (l = this.fetch()).text !== a || r && c > 0;) {
                                    switch (l.text) {
                                        case "EOF":
                                            throw new o("Unexpected end of input in " + e, m.range(u, h));
                                        case n:
                                            c++;
                                            break;
                                        case a:
                                            c--
                                    }
                                    h += (u = l).text, this.consume()
                                }
                                return this.expect(a), this.mode = s, m.range(u, h)
                            }, t.parseRegexGroup = function(e, t) {
                                var r = this.mode;
                                this.mode = "text";
                                for (var n, a = this.fetch(), i = a, s = "";
                                    "EOF" !== (n = this.fetch()).text && e.test(s + n.text);) s += (i = n).text, this.consume();
                                if ("" === s) throw new o("Invalid " + t + ": '" + a.text + "'", a);
                                return this.mode = r, a.range(i, s)
                            }, t.parseColorGroup = function(e) {
                                var t = this.parseStringGroup("color", e);
                                if (!t) return null;
                                var r = /^(#[a-f0-9]{3}|#?[a-f0-9]{6}|[a-z]+)$/i.exec(t.text);
                                if (!r) throw new o("Invalid color: '" + t.text + "'", t);
                                var n = r[0];
                                return /^[0-9a-f]{6}$/i.test(n) && (n = "#" + n), {
                                    type: "color-token",
                                    mode: this.mode,
                                    color: n
                                }
                            }, t.parseSizeGroup = function(e) {
                                var t, r = !1;
                                if (!(t = e || "{" === this.fetch().text ? this.parseStringGroup("size", e) : this.parseRegexGroup(/^[-+]? *(?:$|\d+|\d+\.\d*|\.\d*) *[a-z]{0,2} *$/, "size"))) return null;
                                e || 0 !== t.text.length || (t.text = "0pt", r = !0);
                                var n = /([-+]?) *(\d+(?:\.\d*)?|\.\d+) *([a-z]{2})/.exec(t.text);
                                if (!n) throw new o("Invalid size: '" + t.text + "'", t);
                                var a = {
                                    number: +(n[1] + n[2]),
                                    unit: n[3]
                                };
                                if (!He(a)) throw new o("Invalid unit: '" + a.unit + "'", t);
                                return {
                                    type: "size",
                                    mode: this.mode,
                                    value: a,
                                    isBlank: r
                                }
                            }, t.parseUrlGroup = function(e, t) {
                                this.gullet.lexer.setCatcode("%", 13);
                                var r = this.parseStringGroup("url", e, !0);
                                if (this.gullet.lexer.setCatcode("%", 14), !r) return null;
                                var n = r.text.replace(/\\([#$%&~_^{}])/g, "$1");
                                return {
                                    type: "url",
                                    mode: this.mode,
                                    url: n
                                }
                            }, t.parseGroup = function(t, r, a, i, s, l) {
                                var h = this.mode;
                                s && this.switchMode(s), l && this.consumeSpaces();
                                var m, c = this.fetch(),
                                    u = c.text;
                                if (r ? "[" === u : "{" === u || "\\begingroup" === u) {
                                    this.consume();
                                    var p = e.endOfGroup[u];
                                    this.gullet.beginGroup();
                                    var d = this.parseExpression(!1, p),
                                        f = this.fetch();
                                    this.expect(p), this.gullet.endGroup(), m = {
                                        type: "ordgroup",
                                        mode: this.mode,
                                        loc: n.range(c, f),
                                        body: d,
                                        semisimple: "\\begingroup" === u || void 0
                                    }
                                } else if (r) m = null;
                                else if (null == (m = this.parseFunction(i, t, a) || this.parseSymbol()) && "\\" === u[0] && !On.hasOwnProperty(u)) {
                                    if (this.settings.throwOnError) throw new o("Undefined control sequence: " + u, c);
                                    m = this.formatUnsupportedCmd(u), this.consume()
                                }
                                return s && this.switchMode(h), m
                            }, t.formLigatures = function(e) {
                                for (var t = e.length - 1, r = 0; r < t; ++r) {
                                    var a = e[r],
                                        i = a.text;
                                    "-" === i && "-" === e[r + 1].text && (r + 1 < t && "-" === e[r + 2].text ? (e.splice(r, 3, {
                                        type: "textord",
                                        mode: "text",
                                        loc: n.range(a, e[r + 2]),
                                        text: "---"
                                    }), t -= 2) : (e.splice(r, 2, {
                                        type: "textord",
                                        mode: "text",
                                        loc: n.range(a, e[r + 1]),
                                        text: "--"
                                    }), t -= 1)), "'" !== i && "`" !== i || e[r + 1].text !== i || (e.splice(r, 2, {
                                        type: "textord",
                                        mode: "text",
                                        loc: n.range(a, e[r + 1]),
                                        text: i + i
                                    }), t -= 1)
                                }
                            }, t.parseSymbol = function() {
                                var e = this.fetch(),
                                    t = e.text;
                                if (/^\\verb[^a-zA-Z]/.test(t)) {
                                    this.consume();
                                    var r = t.slice(5),
                                        a = "*" === r.charAt(0);
                                    if (a && (r = r.slice(1)), r.length < 2 || r.charAt(0) !== r.slice(-1)) throw new o("\\verb assertion failed --\n                    please report what input caused this bug");
                                    return {
                                        type: "verb",
                                        mode: "text",
                                        body: r = r.slice(1, -1),
                                        star: a
                                    }
                                }
                                Ln.hasOwnProperty(t[0]) && !$[this.mode][t[0]] && (this.settings.strict && "math" === this.mode && this.settings.reportNonstrict("unicodeTextInMathMode", 'Accented Unicode text character "' + t[0] + '" used in math mode', e), t = Ln[t[0]] + t.substr(1));
                                var i, s = kn.exec(t);
                                if (s && ("i" === (t = t.substring(0, s.index)) ? t = "\u0131" : "j" === t && (t = "\u0237")), $[this.mode][t]) {
                                    this.settings.strict && "math" === this.mode && Te.indexOf(t) >= 0 && this.settings.reportNonstrict("unicodeTextInMathMode", 'Latin-1/Unicode text character "' + t[0] + '" used in math mode', e);
                                    var l, h = $[this.mode][t].group,
                                        m = n.range(e);
                                    if (W.hasOwnProperty(h)) {
                                        var c = h;
                                        l = {
                                            type: "atom",
                                            mode: this.mode,
                                            family: c,
                                            loc: m,
                                            text: t
                                        }
                                    } else l = {
                                        type: h,
                                        mode: this.mode,
                                        loc: m,
                                        text: t
                                    };
                                    i = l
                                } else {
                                    if (!(t.charCodeAt(0) >= 128)) return null;
                                    this.settings.strict && (M(t.charCodeAt(0)) ? "math" === this.mode && this.settings.reportNonstrict("unicodeTextInMathMode", 'Unicode text character "' + t[0] + '" used in math mode', e) : this.settings.reportNonstrict("unknownSymbol", 'Unrecognized Unicode character "' + t[0] + '" (' + t.charCodeAt(0) + ")", e)), i = {
                                        type: "textord",
                                        mode: "text",
                                        loc: n.range(e),
                                        text: t
                                    }
                                }
                                if (this.consume(), s)
                                    for (var u = 0; u < s[0].length; u++) {
                                        var p = s[0][u];
                                        if (!En[p]) throw new o("Unknown accent ' " + p + "'", e);
                                        var d = En[p][this.mode];
                                        if (!d) throw new o("Accent " + p + " unsupported in " + this.mode + " mode", e);
                                        i = {
                                            type: "accent",
                                            mode: this.mode,
                                            loc: n.range(e),
                                            label: d,
                                            isStretchy: !1,
                                            isShifty: !0,
                                            base: i
                                        }
                                    }
                                return i
                            }, e
                        }();
                    Pn.endOfExpression = ["}", "\\endgroup", "\\end", "\\right", "&"], Pn.endOfGroup = {
                        "[": "]",
                        "{": "}",
                        "\\begingroup": "\\endgroup"
                    }, Pn.SUPSUB_GREEDINESS = 1;
                    var Dn = function(e, t) {
                            if (!("string" === typeof e || e instanceof String)) throw new TypeError("KaTeX can only parse string typed expression");
                            var r = new Pn(e, t);
                            delete r.gullet.macros.current["\\df@tag"];
                            var n = r.parse();
                            if (r.gullet.macros.get("\\df@tag")) {
                                if (!t.displayMode) throw new o("\\tag works only in display equations");
                                r.gullet.feed("\\df@tag"), n = [{
                                    type: "tag",
                                    mode: "text",
                                    body: n,
                                    tag: r.parse()
                                }]
                            }
                            return n
                        },
                        Hn = function(e, t, r) {
                            t.textContent = "";
                            var n = Vn(e, r).toNode();
                            t.appendChild(n)
                        };
                    "undefined" !== typeof document && "CSS1Compat" !== document.compatMode && ("undefined" !== typeof console && console.warn("Warning: KaTeX doesn't work in quirks mode. Make sure your website has a suitable doctype."), Hn = function() {
                        throw new o("KaTeX doesn't work in quirks mode.")
                    });
                    var Fn = function(e, t, r) {
                            if (r.throwOnError || !(e instanceof o)) throw e;
                            var n = Ke.makeSpan(["katex-error"], [new L(t)]);
                            return n.setAttribute("title", e.toString()), n.setAttribute("style", "color:" + r.errorColor), n
                        },
                        Vn = function(e, t) {
                            var r = new u(t);
                            try {
                                var n = Dn(e, r);
                                return Lt(n, e, r)
                            } catch (a) {
                                return Fn(a, e, r)
                            }
                        },
                        Un = {
                            version: "0.12.0",
                            render: Hn,
                            renderToString: function(e, t) {
                                return Vn(e, t).toMarkup()
                            },
                            ParseError: o,
                            __parse: function(e, t) {
                                var r = new u(t);
                                return Dn(e, r)
                            },
                            __renderToDomTree: Vn,
                            __renderToHTMLTree: function(e, t) {
                                var r = new u(t);
                                try {
                                    return function(e, t, r) {
                                        var n = kt(e, Rt(r)),
                                            a = Ke.makeSpan(["katex"], [n]);
                                        return Et(a, r)
                                    }(Dn(e, r), 0, r)
                                } catch (n) {
                                    return Fn(n, e, r)
                                }
                            },
                            __setFontMetrics: function(e, t) {
                                V[e] = t
                            },
                            __defineSymbol: Z,
                            __defineMacro: Tn,
                            __domTree: {
                                Span: I,
                                Anchor: O,
                                SymbolNode: L,
                                SvgNode: P,
                                PathNode: D,
                                LineNode: H
                            }
                        };
                    t.default = Un
                }]).default
            }, e.exports = n()
        }
    }
]);