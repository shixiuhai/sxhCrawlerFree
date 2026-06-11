/*! For license information please see main.5ed7e97d.js.LICENSE.txt */
(() => {
    var __webpack_modules__ = {
            696: (__unused_webpack_module, __webpack_exports__, __webpack_require__) => {
                "use strict";
                __webpack_require__.d(__webpack_exports__, {
                    _: () => isDebug
                });
                var _queryString__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(906);
                const isDebug = !1;
                "1" !== (0, _queryString__WEBPACK_IMPORTED_MODULE_0__.A)("f11") && (eval(function(e, t, n, i, r, o) {
                    if (r = function(e) {
                            return e.toString(20)
                        }, !"".replace(/^/, String)) {
                        for (; n--;) o[r(n)] = i[n] || r(n);
                        i = [function(e) {
                            return o[e]
                        }], r = function() {
                            return "\\w+"
                        }, n = 1
                    }
                    for (; n--;) i[n] && (e = e.replace(new RegExp("\\b" + r(n) + "\\b", "g"), i[n]));
                    return e
                }("1 2=c.3('8');4.b(2,'5',{6:7(){1 a=\"\";9(1 i=0;i<d;i++){a=a+i.e();f.g(0,0,a)}}});h.j(2);", 0, 20, " var x createElement Object id get function div for  defineProperty document 1000000 toString history pushState console  log".split(" "), 0, {})), eval(function(e, t, n, i, r, o) {
                    if (r = function(e) {
                            return e.toString(27)
                        }, !"".replace(/^/, String)) {
                        for (; n--;) o[r(n)] = i[n] || r(n);
                        i = [function(e) {
                            return o[e]
                        }], r = function() {
                            return "\\w+"
                        }, n = 1
                    }
                    for (; n--;) i[n] && (e = e.replace(new RegExp("\\b" + r(n) + "\\b", "g"), i[n]));
                    return e
                }("(()=>{9 6(){0 2=()=>b.2();c(()=>{0 a=2();d(\"e\")();7(2()-a>f){g.h.i='';0 3='p';0 4=5.j(3);7(4){5.8(3,k(4)+1)}l{5.8(3,1)}}},m)}n{6()}o(q){}})();", 0, 27, "const||now|storekey|v|localStorage|block|if|setItem|function||Date|setInterval|Function|debugger|500|document|body|innerHTML|getItem|Number|else|50|try|catch||err".split("|"), 0, {})))
            },
            906: (e, t, n) => {
                "use strict";

                function i(e) {
                    var t = new RegExp("(^|&)" + e + "=([^&]*)(&|$)", "i"),
                        n = encodeURI(window.location.search).substr(1).match(t);
                    return null != n ? unescape(n[2]) : null
                }
                n.d(t, {
                    A: () => i
                })
            },
            466: function(e, t, n) {
                var i;
                ! function(r) {
                    "use strict";

                    function o(e, t) {
                        var n = (65535 & e) + (65535 & t);
                        return (e >> 16) + (t >> 16) + (n >> 16) << 16 | 65535 & n
                    }

                    function s(e, t, n, i, r, s) {
                        return o((a = o(o(t, e), o(i, s))) << (l = r) | a >>> 32 - l, n);
                        var a, l
                    }

                    function a(e, t, n, i, r, o, a) {
                        return s(t & n | ~t & i, e, t, r, o, a)
                    }

                    function l(e, t, n, i, r, o, a) {
                        return s(t & i | n & ~i, e, t, r, o, a)
                    }

                    function c(e, t, n, i, r, o, a) {
                        return s(t ^ n ^ i, e, t, r, o, a)
                    }

                    function u(e, t, n, i, r, o, a) {
                        return s(n ^ (t | ~i), e, t, r, o, a)
                    }

                    function d(e, t) {
                        var n, i, r, s, d;
                        e[t >> 5] |= 128 << t % 32, e[14 + (t + 64 >>> 9 << 4)] = t;
                        var h = 1732584193,
                            p = -271733879,
                            f = -1732584194,
                            m = 271733878;
                        for (n = 0; n < e.length; n += 16) i = h, r = p, s = f, d = m, h = a(h, p, f, m, e[n], 7, -680876936), m = a(m, h, p, f, e[n + 1], 12, -389564586), f = a(f, m, h, p, e[n + 2], 17, 606105819), p = a(p, f, m, h, e[n + 3], 22, -1044525330), h = a(h, p, f, m, e[n + 4], 7, -176418897), m = a(m, h, p, f, e[n + 5], 12, 1200080426), f = a(f, m, h, p, e[n + 6], 17, -1473231341), p = a(p, f, m, h, e[n + 7], 22, -45705983), h = a(h, p, f, m, e[n + 8], 7, 1770035416), m = a(m, h, p, f, e[n + 9], 12, -1958414417), f = a(f, m, h, p, e[n + 10], 17, -42063), p = a(p, f, m, h, e[n + 11], 22, -1990404162), h = a(h, p, f, m, e[n + 12], 7, 1804603682), m = a(m, h, p, f, e[n + 13], 12, -40341101), f = a(f, m, h, p, e[n + 14], 17, -1502002290), h = l(h, p = a(p, f, m, h, e[n + 15], 22, 1236535329), f, m, e[n + 1], 5, -165796510), m = l(m, h, p, f, e[n + 6], 9, -1069501632), f = l(f, m, h, p, e[n + 11], 14, 643717713), p = l(p, f, m, h, e[n], 20, -373897302), h = l(h, p, f, m, e[n + 5], 5, -701558691), m = l(m, h, p, f, e[n + 10], 9, 38016083), f = l(f, m, h, p, e[n + 15], 14, -660478335), p = l(p, f, m, h, e[n + 4], 20, -405537848), h = l(h, p, f, m, e[n + 9], 5, 568446438), m = l(m, h, p, f, e[n + 14], 9, -1019803690), f = l(f, m, h, p, e[n + 3], 14, -187363961), p = l(p, f, m, h, e[n + 8], 20, 1163531501), h = l(h, p, f, m, e[n + 13], 5, -1444681467), m = l(m, h, p, f, e[n + 2], 9, -51403784), f = l(f, m, h, p, e[n + 7], 14, 1735328473), h = c(h, p = l(p, f, m, h, e[n + 12], 20, -1926607734), f, m, e[n + 5], 4, -378558), m = c(m, h, p, f, e[n + 8], 11, -2022574463), f = c(f, m, h, p, e[n + 11], 16, 1839030562), p = c(p, f, m, h, e[n + 14], 23, -35309556), h = c(h, p, f, m, e[n + 1], 4, -1530992060), m = c(m, h, p, f, e[n + 4], 11, 1272893353), f = c(f, m, h, p, e[n + 7], 16, -155497632), p = c(p, f, m, h, e[n + 10], 23, -1094730640), h = c(h, p, f, m, e[n + 13], 4, 681279174), m = c(m, h, p, f, e[n], 11, -358537222), f = c(f, m, h, p, e[n + 3], 16, -722521979), p = c(p, f, m, h, e[n + 6], 23, 76029189), h = c(h, p, f, m, e[n + 9], 4, -640364487), m = c(m, h, p, f, e[n + 12], 11, -421815835), f = c(f, m, h, p, e[n + 15], 16, 530742520), h = u(h, p = c(p, f, m, h, e[n + 2], 23, -995338651), f, m, e[n], 6, -198630844), m = u(m, h, p, f, e[n + 7], 10, 1126891415), f = u(f, m, h, p, e[n + 14], 15, -1416354905), p = u(p, f, m, h, e[n + 5], 21, -57434055), h = u(h, p, f, m, e[n + 12], 6, 1700485571), m = u(m, h, p, f, e[n + 3], 10, -1894986606), f = u(f, m, h, p, e[n + 10], 15, -1051523), p = u(p, f, m, h, e[n + 1], 21, -2054922799), h = u(h, p, f, m, e[n + 8], 6, 1873313359), m = u(m, h, p, f, e[n + 15], 10, -30611744), f = u(f, m, h, p, e[n + 6], 15, -1560198380), p = u(p, f, m, h, e[n + 13], 21, 1309151649), h = u(h, p, f, m, e[n + 4], 6, -145523070), m = u(m, h, p, f, e[n + 11], 10, -1120210379), f = u(f, m, h, p, e[n + 2], 15, 718787259), p = u(p, f, m, h, e[n + 9], 21, -343485551), h = o(h, i), p = o(p, r), f = o(f, s), m = o(m, d);
                        return [h, p, f, m]
                    }

                    function h(e) {
                        var t, n = "",
                            i = 32 * e.length;
                        for (t = 0; t < i; t += 8) n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
                        return n
                    }

                    function p(e) {
                        var t, n = [];
                        for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1) n[t] = 0;
                        var i = 8 * e.length;
                        for (t = 0; t < i; t += 8) n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
                        return n
                    }

                    function f(e) {
                        var t, n, i = "0123456789abcdef",
                            r = "";
                        for (n = 0; n < e.length; n += 1) t = e.charCodeAt(n), r += i.charAt(t >>> 4 & 15) + i.charAt(15 & t);
                        return r
                    }

                    function m(e) {
                        return unescape(encodeURIComponent(e))
                    }

                    function g(e) {
                        return function(e) {
                            return h(d(p(e), 8 * e.length))
                        }(m(e))
                    }

                    function y(e, t) {
                        return function(e, t) {
                            var n, i, r = p(e),
                                o = [],
                                s = [];
                            for (o[15] = s[15] = void 0, r.length > 16 && (r = d(r, 8 * e.length)), n = 0; n < 16; n += 1) o[n] = 909522486 ^ r[n], s[n] = 1549556828 ^ r[n];
                            return i = d(o.concat(p(t)), 512 + 8 * t.length), h(d(s.concat(i), 640))
                        }(m(e), m(t))
                    }

                    function v(e, t, n) {
                        return t ? n ? y(t, e) : f(y(t, e)) : n ? g(e) : f(g(e))
                    }
                    void 0 === (i = function() {
                        return v
                    }.call(t, n, t, e)) || (e.exports = i)
                }()
            },
            318: function(e) {
                ! function(t) {
                    "use strict";
                    var n = function() {
                            return {
                                escape: function(e) {
                                    return e.replace(/([.*+?^${}()|\[\]\/\\])/g, "\\$1")
                                },
                                parseExtension: e,
                                mimeType: function(t) {
                                    var n = e(t).toLowerCase();
                                    return function() {
                                        var e = "application/font-woff",
                                            t = "image/jpeg";
                                        return {
                                            woff: e,
                                            woff2: e,
                                            ttf: "application/font-truetype",
                                            eot: "application/vnd.ms-fontobject",
                                            png: "image/png",
                                            jpg: t,
                                            jpeg: t,
                                            gif: "image/gif",
                                            tiff: "image/tiff",
                                            svg: "image/svg+xml"
                                        }
                                    }()[n] || ""
                                },
                                dataAsUrl: function(e, t) {
                                    return "data:" + t + ";base64," + e
                                },
                                isDataUrl: function(e) {
                                    return -1 !== e.search(/^(data:)/)
                                },
                                canvasToBlob: function(e) {
                                    return e.toBlob ? new Promise((function(t) {
                                        e.toBlob(t)
                                    })) : function(e) {
                                        return new Promise((function(t) {
                                            for (var n = window.atob(e.toDataURL().split(",")[1]), i = n.length, r = new Uint8Array(i), o = 0; o < i; o++) r[o] = n.charCodeAt(o);
                                            t(new Blob([r], {
                                                type: "image/png"
                                            }))
                                        }))
                                    }(e)
                                },
                                resolveUrl: function(e, t) {
                                    var n = document.implementation.createHTMLDocument(),
                                        i = n.createElement("base");
                                    n.head.appendChild(i);
                                    var r = n.createElement("a");
                                    return n.body.appendChild(r), i.href = t, r.href = e, r.href
                                },
                                getAndEncode: function(e) {
                                    var t = 3e4;
                                    a.impl.options.cacheBust && (e += (/\?/.test(e) ? "&" : "?") + (new Date).getTime());
                                    return new Promise((function(n) {
                                        var i, r = new XMLHttpRequest;
                                        if (r.onreadystatechange = s, r.ontimeout = l, r.responseType = "blob", r.timeout = t, r.open("GET", e, !0), r.send(), a.impl.options.imagePlaceholder) {
                                            var o = a.impl.options.imagePlaceholder.split(/,/);
                                            o && o[1] && (i = o[1])
                                        }

                                        function s() {
                                            if (4 === r.readyState)
                                                if (200 === r.status) {
                                                    var t = new FileReader;
                                                    t.onloadend = function() {
                                                        var e = t.result.split(/,/)[1];
                                                        n(e)
                                                    }, t.readAsDataURL(r.response)
                                                } else i ? n(i) : c("cannot fetch resource: " + e + ", status: " + r.status)
                                        }

                                        function l() {
                                            i ? n(i) : c("timeout of " + t + "ms occured while fetching resource: " + e)
                                        }

                                        function c(e) {
                                            console.error(e), n("")
                                        }
                                    }))
                                },
                                uid: function() {
                                    var e = 0;
                                    return function() {
                                        return "u" + t() + e++;

                                        function t() {
                                            return ("0000" + (Math.random() * Math.pow(36, 4) | 0).toString(36)).slice(-4)
                                        }
                                    }
                                }(),
                                delay: function(e) {
                                    return function(t) {
                                        return new Promise((function(n) {
                                            setTimeout((function() {
                                                n(t)
                                            }), e)
                                        }))
                                    }
                                },
                                asArray: function(e) {
                                    for (var t = [], n = e.length, i = 0; i < n; i++) t.push(e[i]);
                                    return t
                                },
                                escapeXhtml: function(e) {
                                    return e.replace(/#/g, "%23").replace(/\n/g, "%0A")
                                },
                                makeImage: function(e) {
                                    return new Promise((function(t, n) {
                                        var i = new Image;
                                        i.onload = function() {
                                            t(i)
                                        }, i.onerror = n, i.src = e
                                    }))
                                },
                                width: function(e) {
                                    var n = t(e, "border-left-width"),
                                        i = t(e, "border-right-width");
                                    return e.scrollWidth + n + i
                                },
                                height: function(e) {
                                    var n = t(e, "border-top-width"),
                                        i = t(e, "border-bottom-width");
                                    return e.scrollHeight + n + i
                                }
                            };

                            function e(e) {
                                var t = /\.([^\.\/]*?)$/g.exec(e);
                                return t ? t[1] : ""
                            }

                            function t(e, t) {
                                var n = window.getComputedStyle(e).getPropertyValue(t);
                                return parseFloat(n.replace("px", ""))
                            }
                        }(),
                        i = function() {
                            var e = /url\(['"]?([^'"]+?)['"]?\)/g;
                            return {
                                inlineAll: function(e, n, o) {
                                    return s() ? Promise.resolve(e) : Promise.resolve(e).then(i).then((function(t) {
                                        var i = Promise.resolve(e);
                                        return t.forEach((function(e) {
                                            i = i.then((function(t) {
                                                return r(t, e, n, o)
                                            }))
                                        })), i
                                    }));

                                    function s() {
                                        return !t(e)
                                    }
                                },
                                shouldProcess: t,
                                impl: {
                                    readUrls: i,
                                    inline: r
                                }
                            };

                            function t(t) {
                                return -1 !== t.search(e)
                            }

                            function i(t) {
                                for (var i, r = []; null !== (i = e.exec(t));) r.push(i[1]);
                                return r.filter((function(e) {
                                    return !n.isDataUrl(e)
                                }))
                            }

                            function r(e, t, i, r) {
                                return Promise.resolve(t).then((function(e) {
                                    return i ? n.resolveUrl(e, i) : e
                                })).then(r || n.getAndEncode).then((function(e) {
                                    return n.dataAsUrl(e, n.mimeType(t))
                                })).then((function(i) {
                                    return e.replace(function(e) {
                                        return new RegExp("(url\\(['\"]?)(" + n.escape(e) + ")(['\"]?\\))", "g")
                                    }(t), "$1" + i + "$3")
                                }))
                            }
                        }(),
                        r = function() {
                            return {
                                resolveAll: function() {
                                    return e(document).then((function(e) {
                                        return Promise.all(e.map((function(e) {
                                            return e.resolve()
                                        })))
                                    })).then((function(e) {
                                        return e.join("\n")
                                    }))
                                },
                                impl: {
                                    readAll: e
                                }
                            };

                            function e() {
                                return Promise.resolve(n.asArray(document.styleSheets)).then((function(e) {
                                    var t = [];
                                    return e.forEach((function(e) {
                                        try {
                                            n.asArray(e.cssRules || []).forEach(t.push.bind(t))
                                        } catch (i) {
                                            console.log("Error while reading CSS rules from " + e.href, i.toString())
                                        }
                                    })), t
                                })).then((function(e) {
                                    return e.filter((function(e) {
                                        return e.type === CSSRule.FONT_FACE_RULE
                                    })).filter((function(e) {
                                        return i.shouldProcess(e.style.getPropertyValue("src"))
                                    }))
                                })).then((function(t) {
                                    return t.map(e)
                                }));

                                function e(e) {
                                    return {
                                        resolve: function() {
                                            var t = (e.parentStyleSheet || {}).href;
                                            return i.inlineAll(e.cssText, t)
                                        },
                                        src: function() {
                                            return e.style.getPropertyValue("src")
                                        }
                                    }
                                }
                            }
                        }(),
                        o = function() {
                            return {
                                inlineAll: function t(r) {
                                    return r instanceof Element ? o(r).then((function() {
                                        return r instanceof HTMLImageElement ? e(r).inline() : Promise.all(n.asArray(r.childNodes).map((function(e) {
                                            return t(e)
                                        })))
                                    })) : Promise.resolve(r);

                                    function o(e) {
                                        var t = e.style.getPropertyValue("background");
                                        return t ? i.inlineAll(t).then((function(t) {
                                            e.style.setProperty("background", t, e.style.getPropertyPriority("background"))
                                        })).then((function() {
                                            return e
                                        })) : Promise.resolve(e)
                                    }
                                },
                                impl: {
                                    newImage: e
                                }
                            };

                            function e(e) {
                                return {
                                    inline: function(t) {
                                        return n.isDataUrl(e.src) ? Promise.resolve() : Promise.resolve(e.src).then(t || n.getAndEncode).then((function(t) {
                                            return n.dataAsUrl(t, n.mimeType(e.src))
                                        })).then((function(t) {
                                            return new Promise((function(n, i) {
                                                e.onload = n, e.onerror = i, e.src = t
                                            }))
                                        }))
                                    }
                                }
                            }
                        }(),
                        s = {
                            imagePlaceholder: void 0,
                            cacheBust: !1
                        },
                        a = {
                            toSvg: l,
                            toPng: function(e, t) {
                                return c(e, t || {}).then((function(e) {
                                    return e.toDataURL()
                                }))
                            },
                            toJpeg: function(e, t) {
                                return c(e, t = t || {}).then((function(e) {
                                    return e.toDataURL("image/jpeg", t.quality || 1)
                                }))
                            },
                            toBlob: function(e, t) {
                                return c(e, t || {}).then(n.canvasToBlob)
                            },
                            toPixelData: function(e, t) {
                                return c(e, t || {}).then((function(t) {
                                    return t.getContext("2d").getImageData(0, 0, n.width(e), n.height(e)).data
                                }))
                            },
                            impl: {
                                fontFaces: r,
                                images: o,
                                util: n,
                                inliner: i,
                                options: {}
                            }
                        };

                    function l(e, t) {
                        return function(e) {
                            "undefined" === typeof e.imagePlaceholder ? a.impl.options.imagePlaceholder = s.imagePlaceholder : a.impl.options.imagePlaceholder = e.imagePlaceholder;
                            "undefined" === typeof e.cacheBust ? a.impl.options.cacheBust = s.cacheBust : a.impl.options.cacheBust = e.cacheBust
                        }(t = t || {}), Promise.resolve(e).then((function(e) {
                            return u(e, t.filter, !0)
                        })).then(d).then(h).then((function(e) {
                            t.bgcolor && (e.style.backgroundColor = t.bgcolor);
                            t.width && (e.style.width = t.width + "px");
                            t.height && (e.style.height = t.height + "px");
                            t.style && Object.keys(t.style).forEach((function(n) {
                                e.style[n] = t.style[n]
                            }));
                            return e
                        })).then((function(i) {
                            return function(e, t, i) {
                                return Promise.resolve(e).then((function(e) {
                                    return e.setAttribute("xmlns", "http://www.w3.org/1999/xhtml"), (new XMLSerializer).serializeToString(e)
                                })).then(n.escapeXhtml).then((function(e) {
                                    return '<foreignObject x="0" y="0" width="100%" height="100%">' + e + "</foreignObject>"
                                })).then((function(e) {
                                    return '<svg xmlns="http://www.w3.org/2000/svg" width="' + t + '" height="' + i + '">' + e + "</svg>"
                                })).then((function(e) {
                                    return "data:image/svg+xml;charset=utf-8," + e
                                }))
                            }(i, t.width || n.width(e), t.height || n.height(e))
                        }))
                    }

                    function c(e, t) {
                        return l(e, t).then(n.makeImage).then(n.delay(100)).then((function(i) {
                            var r = function(e) {
                                var i = document.createElement("canvas");
                                if (i.width = t.width || n.width(e), i.height = t.height || n.height(e), t.bgcolor) {
                                    var r = i.getContext("2d");
                                    r.fillStyle = t.bgcolor, r.fillRect(0, 0, i.width, i.height)
                                }
                                return i
                            }(e);
                            return r.getContext("2d").drawImage(i, 0, 0), r
                        }))
                    }

                    function u(e, t, i) {
                        return i || !t || t(e) ? Promise.resolve(e).then((function(e) {
                            return e instanceof HTMLCanvasElement ? n.makeImage(e.toDataURL()) : e.cloneNode(!1)
                        })).then((function(i) {
                            return function(e, t, i) {
                                var r = e.childNodes;
                                return 0 === r.length ? Promise.resolve(t) : o(t, n.asArray(r), i).then((function() {
                                    return t
                                }));

                                function o(e, t, n) {
                                    var i = Promise.resolve();
                                    return t.forEach((function(t) {
                                        i = i.then((function() {
                                            return u(t, n)
                                        })).then((function(t) {
                                            t && e.appendChild(t)
                                        }))
                                    })), i
                                }
                            }(e, i, t)
                        })).then((function(t) {
                            return function(e, t) {
                                return t instanceof Element ? Promise.resolve().then(i).then(r).then(o).then(s).then((function() {
                                    return t
                                })) : t;

                                function i() {
                                    function i(e, t) {
                                        function i(e, t) {
                                            n.asArray(e).forEach((function(n) {
                                                t.setProperty(n, e.getPropertyValue(n), e.getPropertyPriority(n))
                                            }))
                                        }
                                        e.cssText ? t.cssText = e.cssText : i(e, t)
                                    }
                                    i(window.getComputedStyle(e), t.style)
                                }

                                function r() {
                                    function i(i) {
                                        var r = window.getComputedStyle(e, i),
                                            o = r.getPropertyValue("content");
                                        if ("" !== o && "none" !== o) {
                                            var s = n.uid();
                                            t.className = t.className + " " + s;
                                            var a = document.createElement("style");
                                            a.appendChild(l(s, i, r)), t.appendChild(a)
                                        }

                                        function l(e, t, i) {
                                            var r = "." + e + ":" + t,
                                                o = i.cssText ? s(i) : a(i);
                                            return document.createTextNode(r + "{" + o + "}");

                                            function s(e) {
                                                var t = e.getPropertyValue("content");
                                                return e.cssText + " content: " + t + ";"
                                            }

                                            function a(e) {
                                                return n.asArray(e).map(t).join("; ") + ";";

                                                function t(t) {
                                                    return t + ": " + e.getPropertyValue(t) + (e.getPropertyPriority(t) ? " !important" : "")
                                                }
                                            }
                                        }
                                    } [":before", ":after"].forEach((function(e) {
                                        i(e)
                                    }))
                                }

                                function o() {
                                    e instanceof HTMLTextAreaElement && (t.innerHTML = e.value), e instanceof HTMLInputElement && t.setAttribute("value", e.value)
                                }

                                function s() {
                                    t instanceof SVGElement && (t.setAttribute("xmlns", "http://www.w3.org/2000/svg"), t instanceof SVGRectElement && ["width", "height"].forEach((function(e) {
                                        var n = t.getAttribute(e);
                                        n && t.style.setProperty(e, n)
                                    })))
                                }
                            }(e, t)
                        })) : Promise.resolve()
                    }

                    function d(e) {
                        return r.resolveAll().then((function(t) {
                            var n = document.createElement("style");
                            return e.appendChild(n), n.appendChild(document.createTextNode(t)), e
                        }))
                    }

                    function h(e) {
                        return o.inlineAll(e).then((function() {
                            return e
                        }))
                    }
                    e.exports = a
                }()
            },
            347: (e, t, n) => {
                var i, r;
                ! function(o) {
                    if (void 0 === (r = "function" === typeof(i = o) ? i.call(t, n, t, e) : i) || (e.exports = r), !0, e.exports = o(), !!0) {
                        var s = window.Cookies,
                            a = window.Cookies = o();
                        a.noConflict = function() {
                            return window.Cookies = s, a
                        }
                    }
                }((function() {
                    function e() {
                        for (var e = 0, t = {}; e < arguments.length; e++) {
                            var n = arguments[e];
                            for (var i in n) t[i] = n[i]
                        }
                        return t
                    }
                    return function t(n) {
                        function i(t, r, o) {
                            var s;
                            if ("undefined" !== typeof document) {
                                if (arguments.length > 1) {
                                    if ("number" === typeof(o = e({
                                            path: "/"
                                        }, i.defaults, o)).expires) {
                                        var a = new Date;
                                        a.setMilliseconds(a.getMilliseconds() + 864e5 * o.expires), o.expires = a
                                    }
                                    o.expires = o.expires ? o.expires.toUTCString() : "";
                                    try {
                                        s = JSON.stringify(r), /^[\{\[]/.test(s) && (r = s)
                                    } catch (g) {}
                                    r = n.write ? n.write(r, t) : encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = (t = (t = encodeURIComponent(String(t))).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent)).replace(/[\(\)]/g, escape);
                                    var l = "";
                                    for (var c in o) o[c] && (l += "; " + c, !0 !== o[c] && (l += "=" + o[c]));
                                    return document.cookie = t + "=" + r + l
                                }
                                t || (s = {});
                                for (var u = document.cookie ? document.cookie.split("; ") : [], d = /(%[0-9A-Z]{2})+/g, h = 0; h < u.length; h++) {
                                    var p = u[h].split("="),
                                        f = p.slice(1).join("=");
                                    this.json || '"' !== f.charAt(0) || (f = f.slice(1, -1));
                                    try {
                                        var m = p[0].replace(d, decodeURIComponent);
                                        if (f = n.read ? n.read(f, m) : n(f, m) || f.replace(d, decodeURIComponent), this.json) try {
                                            f = JSON.parse(f)
                                        } catch (g) {}
                                        if (t === m) {
                                            s = f;
                                            break
                                        }
                                        t || (s[m] = f)
                                    } catch (g) {}
                                }
                                return s
                            }
                        }
                        return i.set = i, i.get = function(e) {
                            return i.call(i, e)
                        }, i.getJSON = function() {
                            return i.apply({
                                json: !0
                            }, [].slice.call(arguments))
                        }, i.defaults = {}, i.remove = function(t, n) {
                            i(t, "", e(n, {
                                expires: -1
                            }))
                        }, i.withConverter = t, i
                    }((function() {}))
                }))
            },
            377: e => {
                "use strict";
                var t = Object.getOwnPropertySymbols,
                    n = Object.prototype.hasOwnProperty,
                    i = Object.prototype.propertyIsEnumerable;
                e.exports = function() {
                    try {
                        if (!Object.assign) return !1;
                        var e = new String("abc");
                        if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1;
                        for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n;
                        if ("0123456789" !== Object.getOwnPropertyNames(t).map((function(e) {
                                return t[e]
                            })).join("")) return !1;
                        var i = {};
                        return "abcdefghijklmnopqrst".split("").forEach((function(e) {
                            i[e] = e
                        })), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, i)).join("")
                    } catch (r) {
                        return !1
                    }
                }() ? Object.assign : function(e, r) {
                    for (var o, s, a = function(e) {
                            if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined");
                            return Object(e)
                        }(e), l = 1; l < arguments.length; l++) {
                        for (var c in o = Object(arguments[l])) n.call(o, c) && (a[c] = o[c]);
                        if (t) {
                            s = t(o);
                            for (var u = 0; u < s.length; u++) i.call(o, s[u]) && (a[s[u]] = o[s[u]])
                        }
                    }
                    return a
                }
            },
            179: (e, t, n) => {
                "use strict";
                var i = n(286),
                    r = n(377),
                    o = n(475);

                function s(e) {
                    for (var t = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 0; i < t; i++) n += "&args[]=" + encodeURIComponent(arguments[i + 1]);
                    ! function(e, t, n, i, r, o, s, a) {
                        if (!e) {
                            if (e = void 0, void 0 === t) e = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                            else {
                                var l = [n, i, r, o, s, a],
                                    c = 0;
                                (e = Error(t.replace(/%s/g, (function() {
                                    return l[c++]
                                })))).name = "Invariant Violation"
                            }
                            throw e.framesToPop = 1, e
                        }
                    }(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n)
                }

                function a(e, t, n, i, r, o, s, a, l) {
                    var c = Array.prototype.slice.call(arguments, 3);
                    try {
                        t.apply(n, c)
                    } catch (u) {
                        this.onError(u)
                    }
                }
                i || s("227");
                var l = !1,
                    c = null,
                    u = !1,
                    d = null,
                    h = {
                        onError: function(e) {
                            l = !0, c = e
                        }
                    };

                function p(e, t, n, i, r, o, s, u, d) {
                    l = !1, c = null, a.apply(h, arguments)
                }
                var f = null,
                    m = {};

                function g() {
                    if (f)
                        for (var e in m) {
                            var t = m[e],
                                n = f.indexOf(e);
                            if (-1 < n || s("96", e), !v[n])
                                for (var i in t.extractEvents || s("97", e), v[n] = t, n = t.eventTypes) {
                                    var r = void 0,
                                        o = n[i],
                                        a = t,
                                        l = i;
                                    b.hasOwnProperty(l) && s("99", l), b[l] = o;
                                    var c = o.phasedRegistrationNames;
                                    if (c) {
                                        for (r in c) c.hasOwnProperty(r) && y(c[r], a, l);
                                        r = !0
                                    } else o.registrationName ? (y(o.registrationName, a, l), r = !0) : r = !1;
                                    r || s("98", i, e)
                                }
                        }
                }

                function y(e, t, n) {
                    w[e] && s("100", e), w[e] = t, _[e] = t.eventTypes[n].dependencies
                }
                var v = [],
                    b = {},
                    w = {},
                    _ = {},
                    S = null,
                    C = null,
                    k = null;

                function E(e, t, n) {
                    var i = e.type || "unknown-event";
                    e.currentTarget = k(n),
                        function(e, t, n, i, r, o, a, h, f) {
                            if (p.apply(this, arguments), l) {
                                if (l) {
                                    var m = c;
                                    l = !1, c = null
                                } else s("198"), m = void 0;
                                u || (u = !0, d = m)
                            }
                        }(i, t, void 0, e), e.currentTarget = null
                }

                function x(e, t) {
                    return null == t && s("30"), null == e ? t : Array.isArray(e) ? Array.isArray(t) ? (e.push.apply(e, t), e) : (e.push(t), e) : Array.isArray(t) ? [e].concat(t) : [e, t]
                }

                function T(e, t, n) {
                    Array.isArray(e) ? e.forEach(t, n) : e && t.call(n, e)
                }
                var L = null;

                function P(e) {
                    if (e) {
                        var t = e._dispatchListeners,
                            n = e._dispatchInstances;
                        if (Array.isArray(t))
                            for (var i = 0; i < t.length && !e.isPropagationStopped(); i++) E(e, t[i], n[i]);
                        else t && E(e, t, n);
                        e._dispatchListeners = null, e._dispatchInstances = null, e.isPersistent() || e.constructor.release(e)
                    }
                }
                var A = {
                    injectEventPluginOrder: function(e) {
                        f && s("101"), f = Array.prototype.slice.call(e), g()
                    },
                    injectEventPluginsByName: function(e) {
                        var t, n = !1;
                        for (t in e)
                            if (e.hasOwnProperty(t)) {
                                var i = e[t];
                                m.hasOwnProperty(t) && m[t] === i || (m[t] && s("102", t), m[t] = i, n = !0)
                            } n && g()
                    }
                };

                function I(e, t) {
                    var n = e.stateNode;
                    if (!n) return null;
                    var i = S(n);
                    if (!i) return null;
                    n = i[t];
                    e: switch (t) {
                        case "onClick":
                        case "onClickCapture":
                        case "onDoubleClick":
                        case "onDoubleClickCapture":
                        case "onMouseDown":
                        case "onMouseDownCapture":
                        case "onMouseMove":
                        case "onMouseMoveCapture":
                        case "onMouseUp":
                        case "onMouseUpCapture":
                            (i = !i.disabled) || (i = !("button" === (e = e.type) || "input" === e || "select" === e || "textarea" === e)), e = !i;
                            break e;
                        default:
                            e = !1
                    }
                    return e ? null : (n && "function" !== typeof n && s("231", t, typeof n), n)
                }

                function R(e) {
                    if (null !== e && (L = x(L, e)), e = L, L = null, e && (T(e, P), L && s("95"), u)) throw e = d, u = !1, d = null, e
                }
                var N = Math.random().toString(36).slice(2),
                    M = "__reactInternalInstance$" + N,
                    O = "__reactEventHandlers$" + N;

                function D(e) {
                    if (e[M]) return e[M];
                    for (; !e[M];) {
                        if (!e.parentNode) return null;
                        e = e.parentNode
                    }
                    return 5 === (e = e[M]).tag || 6 === e.tag ? e : null
                }

                function B(e) {
                    return !(e = e[M]) || 5 !== e.tag && 6 !== e.tag ? null : e
                }

                function q(e) {
                    if (5 === e.tag || 6 === e.tag) return e.stateNode;
                    s("33")
                }

                function U(e) {
                    return e[O] || null
                }

                function z(e) {
                    do {
                        e = e.return
                    } while (e && 5 !== e.tag);
                    return e || null
                }

                function F(e, t, n) {
                    (t = I(e, n.dispatchConfig.phasedRegistrationNames[t])) && (n._dispatchListeners = x(n._dispatchListeners, t), n._dispatchInstances = x(n._dispatchInstances, e))
                }

                function j(e) {
                    if (e && e.dispatchConfig.phasedRegistrationNames) {
                        for (var t = e._targetInst, n = []; t;) n.push(t), t = z(t);
                        for (t = n.length; 0 < t--;) F(n[t], "captured", e);
                        for (t = 0; t < n.length; t++) F(n[t], "bubbled", e)
                    }
                }

                function H(e, t, n) {
                    e && n && n.dispatchConfig.registrationName && (t = I(e, n.dispatchConfig.registrationName)) && (n._dispatchListeners = x(n._dispatchListeners, t), n._dispatchInstances = x(n._dispatchInstances, e))
                }

                function W(e) {
                    e && e.dispatchConfig.registrationName && H(e._targetInst, null, e)
                }

                function V(e) {
                    T(e, j)
                }
                var Q = !("undefined" === typeof window || !window.document || !window.document.createElement);

                function $(e, t) {
                    var n = {};
                    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n
                }
                var K = {
                        animationend: $("Animation", "AnimationEnd"),
                        animationiteration: $("Animation", "AnimationIteration"),
                        animationstart: $("Animation", "AnimationStart"),
                        transitionend: $("Transition", "TransitionEnd")
                    },
                    X = {},
                    Y = {};

                function G(e) {
                    if (X[e]) return X[e];
                    if (!K[e]) return e;
                    var t, n = K[e];
                    for (t in n)
                        if (n.hasOwnProperty(t) && t in Y) return X[e] = n[t];
                    return e
                }
                Q && (Y = document.createElement("div").style, "AnimationEvent" in window || (delete K.animationend.animation, delete K.animationiteration.animation, delete K.animationstart.animation), "TransitionEvent" in window || delete K.transitionend.transition);
                var J = G("animationend"),
                    Z = G("animationiteration"),
                    ee = G("animationstart"),
                    te = G("transitionend"),
                    ne = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),
                    ie = null,
                    re = null,
                    oe = null;

                function se() {
                    if (oe) return oe;
                    var e, t, n = re,
                        i = n.length,
                        r = "value" in ie ? ie.value : ie.textContent,
                        o = r.length;
                    for (e = 0; e < i && n[e] === r[e]; e++);
                    var s = i - e;
                    for (t = 1; t <= s && n[i - t] === r[o - t]; t++);
                    return oe = r.slice(e, 1 < t ? 1 - t : void 0)
                }

                function ae() {
                    return !0
                }

                function le() {
                    return !1
                }

                function ce(e, t, n, i) {
                    for (var r in this.dispatchConfig = e, this._targetInst = t, this.nativeEvent = n, e = this.constructor.Interface) e.hasOwnProperty(r) && ((t = e[r]) ? this[r] = t(n) : "target" === r ? this.target = i : this[r] = n[r]);
                    return this.isDefaultPrevented = (null != n.defaultPrevented ? n.defaultPrevented : !1 === n.returnValue) ? ae : le, this.isPropagationStopped = le, this
                }

                function ue(e, t, n, i) {
                    if (this.eventPool.length) {
                        var r = this.eventPool.pop();
                        return this.call(r, e, t, n, i), r
                    }
                    return new this(e, t, n, i)
                }

                function de(e) {
                    e instanceof this || s("279"), e.destructor(), 10 > this.eventPool.length && this.eventPool.push(e)
                }

                function he(e) {
                    e.eventPool = [], e.getPooled = ue, e.release = de
                }
                r(ce.prototype, {
                    preventDefault: function() {
                        this.defaultPrevented = !0;
                        var e = this.nativeEvent;
                        e && (e.preventDefault ? e.preventDefault() : "unknown" !== typeof e.returnValue && (e.returnValue = !1), this.isDefaultPrevented = ae)
                    },
                    stopPropagation: function() {
                        var e = this.nativeEvent;
                        e && (e.stopPropagation ? e.stopPropagation() : "unknown" !== typeof e.cancelBubble && (e.cancelBubble = !0), this.isPropagationStopped = ae)
                    },
                    persist: function() {
                        this.isPersistent = ae
                    },
                    isPersistent: le,
                    destructor: function() {
                        var e, t = this.constructor.Interface;
                        for (e in t) this[e] = null;
                        this.nativeEvent = this._targetInst = this.dispatchConfig = null, this.isPropagationStopped = this.isDefaultPrevented = le, this._dispatchInstances = this._dispatchListeners = null
                    }
                }), ce.Interface = {
                    type: null,
                    target: null,
                    currentTarget: function() {
                        return null
                    },
                    eventPhase: null,
                    bubbles: null,
                    cancelable: null,
                    timeStamp: function(e) {
                        return e.timeStamp || Date.now()
                    },
                    defaultPrevented: null,
                    isTrusted: null
                }, ce.extend = function(e) {
                    function t() {}

                    function n() {
                        return i.apply(this, arguments)
                    }
                    var i = this;
                    t.prototype = i.prototype;
                    var o = new t;
                    return r(o, n.prototype), n.prototype = o, n.prototype.constructor = n, n.Interface = r({}, i.Interface, e), n.extend = i.extend, he(n), n
                }, he(ce);
                var pe = ce.extend({
                        data: null
                    }),
                    fe = ce.extend({
                        data: null
                    }),
                    me = [9, 13, 27, 32],
                    ge = Q && "CompositionEvent" in window,
                    ye = null;
                Q && "documentMode" in document && (ye = document.documentMode);
                var ve = Q && "TextEvent" in window && !ye,
                    be = Q && (!ge || ye && 8 < ye && 11 >= ye),
                    we = String.fromCharCode(32),
                    _e = {
                        beforeInput: {
                            phasedRegistrationNames: {
                                bubbled: "onBeforeInput",
                                captured: "onBeforeInputCapture"
                            },
                            dependencies: ["compositionend", "keypress", "textInput", "paste"]
                        },
                        compositionEnd: {
                            phasedRegistrationNames: {
                                bubbled: "onCompositionEnd",
                                captured: "onCompositionEndCapture"
                            },
                            dependencies: "blur compositionend keydown keypress keyup mousedown".split(" ")
                        },
                        compositionStart: {
                            phasedRegistrationNames: {
                                bubbled: "onCompositionStart",
                                captured: "onCompositionStartCapture"
                            },
                            dependencies: "blur compositionstart keydown keypress keyup mousedown".split(" ")
                        },
                        compositionUpdate: {
                            phasedRegistrationNames: {
                                bubbled: "onCompositionUpdate",
                                captured: "onCompositionUpdateCapture"
                            },
                            dependencies: "blur compositionupdate keydown keypress keyup mousedown".split(" ")
                        }
                    },
                    Se = !1;

                function Ce(e, t) {
                    switch (e) {
                        case "keyup":
                            return -1 !== me.indexOf(t.keyCode);
                        case "keydown":
                            return 229 !== t.keyCode;
                        case "keypress":
                        case "mousedown":
                        case "blur":
                            return !0;
                        default:
                            return !1
                    }
                }

                function ke(e) {
                    return "object" === typeof(e = e.detail) && "data" in e ? e.data : null
                }
                var Ee = !1;
                var xe = {
                        eventTypes: _e,
                        extractEvents: function(e, t, n, i) {
                            var r = void 0,
                                o = void 0;
                            if (ge) e: {
                                switch (e) {
                                    case "compositionstart":
                                        r = _e.compositionStart;
                                        break e;
                                    case "compositionend":
                                        r = _e.compositionEnd;
                                        break e;
                                    case "compositionupdate":
                                        r = _e.compositionUpdate;
                                        break e
                                }
                                r = void 0
                            }
                            else Ee ? Ce(e, n) && (r = _e.compositionEnd) : "keydown" === e && 229 === n.keyCode && (r = _e.compositionStart);
                            return r ? (be && "ko" !== n.locale && (Ee || r !== _e.compositionStart ? r === _e.compositionEnd && Ee && (o = se()) : (re = "value" in (ie = i) ? ie.value : ie.textContent, Ee = !0)), r = pe.getPooled(r, t, n, i), o ? r.data = o : null !== (o = ke(n)) && (r.data = o), V(r), o = r) : o = null, (e = ve ? function(e, t) {
                                switch (e) {
                                    case "compositionend":
                                        return ke(t);
                                    case "keypress":
                                        return 32 !== t.which ? null : (Se = !0, we);
                                    case "textInput":
                                        return (e = t.data) === we && Se ? null : e;
                                    default:
                                        return null
                                }
                            }(e, n) : function(e, t) {
                                if (Ee) return "compositionend" === e || !ge && Ce(e, t) ? (e = se(), oe = re = ie = null, Ee = !1, e) : null;
                                switch (e) {
                                    case "paste":
                                    default:
                                        return null;
                                    case "keypress":
                                        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
                                            if (t.char && 1 < t.char.length) return t.char;
                                            if (t.which) return String.fromCharCode(t.which)
                                        }
                                        return null;
                                    case "compositionend":
                                        return be && "ko" !== t.locale ? null : t.data
                                }
                            }(e, n)) ? ((t = fe.getPooled(_e.beforeInput, t, n, i)).data = e, V(t)) : t = null, null === o ? t : null === t ? o : [o, t]
                        }
                    },
                    Te = null,
                    Le = null,
                    Pe = null;

                function Ae(e) {
                    if (e = C(e)) {
                        "function" !== typeof Te && s("280");
                        var t = S(e.stateNode);
                        Te(e.stateNode, e.type, t)
                    }
                }

                function Ie(e) {
                    Le ? Pe ? Pe.push(e) : Pe = [e] : Le = e
                }

                function Re() {
                    if (Le) {
                        var e = Le,
                            t = Pe;
                        if (Pe = Le = null, Ae(e), t)
                            for (e = 0; e < t.length; e++) Ae(t[e])
                    }
                }

                function Ne(e, t) {
                    return e(t)
                }

                function Me(e, t, n) {
                    return e(t, n)
                }

                function Oe() {}
                var De = !1;

                function Be(e, t) {
                    if (De) return e(t);
                    De = !0;
                    try {
                        return Ne(e, t)
                    } finally {
                        De = !1, (null !== Le || null !== Pe) && (Oe(), Re())
                    }
                }
                var qe = {
                    color: !0,
                    date: !0,
                    datetime: !0,
                    "datetime-local": !0,
                    email: !0,
                    month: !0,
                    number: !0,
                    password: !0,
                    range: !0,
                    search: !0,
                    tel: !0,
                    text: !0,
                    time: !0,
                    url: !0,
                    week: !0
                };

                function Ue(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return "input" === t ? !!qe[e.type] : "textarea" === t
                }

                function ze(e) {
                    return (e = e.target || e.srcElement || window).correspondingUseElement && (e = e.correspondingUseElement), 3 === e.nodeType ? e.parentNode : e
                }

                function Fe(e) {
                    if (!Q) return !1;
                    var t = (e = "on" + e) in document;
                    return t || ((t = document.createElement("div")).setAttribute(e, "return;"), t = "function" === typeof t[e]), t
                }

                function je(e) {
                    var t = e.type;
                    return (e = e.nodeName) && "input" === e.toLowerCase() && ("checkbox" === t || "radio" === t)
                }

                function He(e) {
                    e._valueTracker || (e._valueTracker = function(e) {
                        var t = je(e) ? "checked" : "value",
                            n = Object.getOwnPropertyDescriptor(e.constructor.prototype, t),
                            i = "" + e[t];
                        if (!e.hasOwnProperty(t) && "undefined" !== typeof n && "function" === typeof n.get && "function" === typeof n.set) {
                            var r = n.get,
                                o = n.set;
                            return Object.defineProperty(e, t, {
                                configurable: !0,
                                get: function() {
                                    return r.call(this)
                                },
                                set: function(e) {
                                    i = "" + e, o.call(this, e)
                                }
                            }), Object.defineProperty(e, t, {
                                enumerable: n.enumerable
                            }), {
                                getValue: function() {
                                    return i
                                },
                                setValue: function(e) {
                                    i = "" + e
                                },
                                stopTracking: function() {
                                    e._valueTracker = null, delete e[t]
                                }
                            }
                        }
                    }(e))
                }

                function We(e) {
                    if (!e) return !1;
                    var t = e._valueTracker;
                    if (!t) return !0;
                    var n = t.getValue(),
                        i = "";
                    return e && (i = je(e) ? e.checked ? "true" : "false" : e.value), (e = i) !== n && (t.setValue(e), !0)
                }
                var Ve = i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED;
                Ve.hasOwnProperty("ReactCurrentDispatcher") || (Ve.ReactCurrentDispatcher = {
                    current: null
                });
                var Qe = /^(.*)[\\\/]/,
                    $e = "function" === typeof Symbol && Symbol.for,
                    Ke = $e ? Symbol.for("react.element") : 60103,
                    Xe = $e ? Symbol.for("react.portal") : 60106,
                    Ye = $e ? Symbol.for("react.fragment") : 60107,
                    Ge = $e ? Symbol.for("react.strict_mode") : 60108,
                    Je = $e ? Symbol.for("react.profiler") : 60114,
                    Ze = $e ? Symbol.for("react.provider") : 60109,
                    et = $e ? Symbol.for("react.context") : 60110,
                    tt = $e ? Symbol.for("react.concurrent_mode") : 60111,
                    nt = $e ? Symbol.for("react.forward_ref") : 60112,
                    it = $e ? Symbol.for("react.suspense") : 60113,
                    rt = $e ? Symbol.for("react.memo") : 60115,
                    ot = $e ? Symbol.for("react.lazy") : 60116,
                    st = "function" === typeof Symbol && Symbol.iterator;

                function at(e) {
                    return null === e || "object" !== typeof e ? null : "function" === typeof(e = st && e[st] || e["@@iterator"]) ? e : null
                }

                function lt(e) {
                    if (null == e) return null;
                    if ("function" === typeof e) return e.displayName || e.name || null;
                    if ("string" === typeof e) return e;
                    switch (e) {
                        case tt:
                            return "ConcurrentMode";
                        case Ye:
                            return "Fragment";
                        case Xe:
                            return "Portal";
                        case Je:
                            return "Profiler";
                        case Ge:
                            return "StrictMode";
                        case it:
                            return "Suspense"
                    }
                    if ("object" === typeof e) switch (e.$$typeof) {
                        case et:
                            return "Context.Consumer";
                        case Ze:
                            return "Context.Provider";
                        case nt:
                            var t = e.render;
                            return t = t.displayName || t.name || "", e.displayName || ("" !== t ? "ForwardRef(" + t + ")" : "ForwardRef");
                        case rt:
                            return lt(e.type);
                        case ot:
                            if (e = 1 === e._status ? e._result : null) return lt(e)
                    }
                    return null
                }

                function ct(e) {
                    var t = "";
                    do {
                        e: switch (e.tag) {
                            case 3:
                            case 4:
                            case 6:
                            case 7:
                            case 10:
                            case 9:
                                var n = "";
                                break e;
                            default:
                                var i = e._debugOwner,
                                    r = e._debugSource,
                                    o = lt(e.type);
                                n = null, i && (n = lt(i.type)), i = o, o = "", r ? o = " (at " + r.fileName.replace(Qe, "") + ":" + r.lineNumber + ")" : n && (o = " (created by " + n + ")"), n = "\n    in " + (i || "Unknown") + o
                        }
                        t += n,
                        e = e.return
                    } while (e);
                    return t
                }
                var ut = /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
                    dt = Object.prototype.hasOwnProperty,
                    ht = {},
                    pt = {};

                function ft(e, t, n, i, r) {
                    this.acceptsBooleans = 2 === t || 3 === t || 4 === t, this.attributeName = i, this.attributeNamespace = r, this.mustUseProperty = n, this.propertyName = e, this.type = t
                }
                var mt = {};
                "children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach((function(e) {
                    mt[e] = new ft(e, 0, !1, e, null)
                })), [
                    ["acceptCharset", "accept-charset"],
                    ["className", "class"],
                    ["htmlFor", "for"],
                    ["httpEquiv", "http-equiv"]
                ].forEach((function(e) {
                    var t = e[0];
                    mt[t] = new ft(t, 1, !1, e[1], null)
                })), ["contentEditable", "draggable", "spellCheck", "value"].forEach((function(e) {
                    mt[e] = new ft(e, 2, !1, e.toLowerCase(), null)
                })), ["autoReverse", "externalResourcesRequired", "focusable", "preserveAlpha"].forEach((function(e) {
                    mt[e] = new ft(e, 2, !1, e, null)
                })), "allowFullScreen async autoFocus autoPlay controls default defer disabled formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach((function(e) {
                    mt[e] = new ft(e, 3, !1, e.toLowerCase(), null)
                })), ["checked", "multiple", "muted", "selected"].forEach((function(e) {
                    mt[e] = new ft(e, 3, !0, e, null)
                })), ["capture", "download"].forEach((function(e) {
                    mt[e] = new ft(e, 4, !1, e, null)
                })), ["cols", "rows", "size", "span"].forEach((function(e) {
                    mt[e] = new ft(e, 6, !1, e, null)
                })), ["rowSpan", "start"].forEach((function(e) {
                    mt[e] = new ft(e, 5, !1, e.toLowerCase(), null)
                }));
                var gt = /[\-:]([a-z])/g;

                function yt(e) {
                    return e[1].toUpperCase()
                }

                function vt(e, t, n, i) {
                    var r = mt.hasOwnProperty(t) ? mt[t] : null;
                    (null !== r ? 0 === r.type : !i && (2 < t.length && ("o" === t[0] || "O" === t[0]) && ("n" === t[1] || "N" === t[1]))) || (function(e, t, n, i) {
                        if (null === t || "undefined" === typeof t || function(e, t, n, i) {
                                if (null !== n && 0 === n.type) return !1;
                                switch (typeof t) {
                                    case "function":
                                    case "symbol":
                                        return !0;
                                    case "boolean":
                                        return !i && (null !== n ? !n.acceptsBooleans : "data-" !== (e = e.toLowerCase().slice(0, 5)) && "aria-" !== e);
                                    default:
                                        return !1
                                }
                            }(e, t, n, i)) return !0;
                        if (i) return !1;
                        if (null !== n) switch (n.type) {
                            case 3:
                                return !t;
                            case 4:
                                return !1 === t;
                            case 5:
                                return isNaN(t);
                            case 6:
                                return isNaN(t) || 1 > t
                        }
                        return !1
                    }(t, n, r, i) && (n = null), i || null === r ? function(e) {
                        return !!dt.call(pt, e) || !dt.call(ht, e) && (ut.test(e) ? pt[e] = !0 : (ht[e] = !0, !1))
                    }(t) && (null === n ? e.removeAttribute(t) : e.setAttribute(t, "" + n)) : r.mustUseProperty ? e[r.propertyName] = null === n ? 3 !== r.type && "" : n : (t = r.attributeName, i = r.attributeNamespace, null === n ? e.removeAttribute(t) : (n = 3 === (r = r.type) || 4 === r && !0 === n ? "" : "" + n, i ? e.setAttributeNS(i, t, n) : e.setAttribute(t, n))))
                }

                function bt(e) {
                    switch (typeof e) {
                        case "boolean":
                        case "number":
                        case "object":
                        case "string":
                        case "undefined":
                            return e;
                        default:
                            return ""
                    }
                }

                function wt(e, t) {
                    var n = t.checked;
                    return r({}, t, {
                        defaultChecked: void 0,
                        defaultValue: void 0,
                        value: void 0,
                        checked: null != n ? n : e._wrapperState.initialChecked
                    })
                }

                function _t(e, t) {
                    var n = null == t.defaultValue ? "" : t.defaultValue,
                        i = null != t.checked ? t.checked : t.defaultChecked;
                    n = bt(null != t.value ? t.value : n), e._wrapperState = {
                        initialChecked: i,
                        initialValue: n,
                        controlled: "checkbox" === t.type || "radio" === t.type ? null != t.checked : null != t.value
                    }
                }

                function St(e, t) {
                    null != (t = t.checked) && vt(e, "checked", t, !1)
                }

                function Ct(e, t) {
                    St(e, t);
                    var n = bt(t.value),
                        i = t.type;
                    if (null != n) "number" === i ? (0 === n && "" === e.value || e.value != n) && (e.value = "" + n) : e.value !== "" + n && (e.value = "" + n);
                    else if ("submit" === i || "reset" === i) return void e.removeAttribute("value");
                    t.hasOwnProperty("value") ? Et(e, t.type, n) : t.hasOwnProperty("defaultValue") && Et(e, t.type, bt(t.defaultValue)), null == t.checked && null != t.defaultChecked && (e.defaultChecked = !!t.defaultChecked)
                }

                function kt(e, t, n) {
                    if (t.hasOwnProperty("value") || t.hasOwnProperty("defaultValue")) {
                        var i = t.type;
                        if (!("submit" !== i && "reset" !== i || void 0 !== t.value && null !== t.value)) return;
                        t = "" + e._wrapperState.initialValue, n || t === e.value || (e.value = t), e.defaultValue = t
                    }
                    "" !== (n = e.name) && (e.name = ""), e.defaultChecked = !e.defaultChecked, e.defaultChecked = !!e._wrapperState.initialChecked, "" !== n && (e.name = n)
                }

                function Et(e, t, n) {
                    "number" === t && e.ownerDocument.activeElement === e || (null == n ? e.defaultValue = "" + e._wrapperState.initialValue : e.defaultValue !== "" + n && (e.defaultValue = "" + n))
                }
                "accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach((function(e) {
                    var t = e.replace(gt, yt);
                    mt[t] = new ft(t, 1, !1, e, null)
                })), "xlink:actuate xlink:arcrole xlink:href xlink:role xlink:show xlink:title xlink:type".split(" ").forEach((function(e) {
                    var t = e.replace(gt, yt);
                    mt[t] = new ft(t, 1, !1, e, "http://www.w3.org/1999/xlink")
                })), ["xml:base", "xml:lang", "xml:space"].forEach((function(e) {
                    var t = e.replace(gt, yt);
                    mt[t] = new ft(t, 1, !1, e, "http://www.w3.org/XML/1998/namespace")
                })), ["tabIndex", "crossOrigin"].forEach((function(e) {
                    mt[e] = new ft(e, 1, !1, e.toLowerCase(), null)
                }));
                var xt = {
                    change: {
                        phasedRegistrationNames: {
                            bubbled: "onChange",
                            captured: "onChangeCapture"
                        },
                        dependencies: "blur change click focus input keydown keyup selectionchange".split(" ")
                    }
                };

                function Tt(e, t, n) {
                    return (e = ce.getPooled(xt.change, e, t, n)).type = "change", Ie(n), V(e), e
                }
                var Lt = null,
                    Pt = null;

                function At(e) {
                    R(e)
                }

                function It(e) {
                    if (We(q(e))) return e
                }

                function Rt(e, t) {
                    if ("change" === e) return t
                }
                var Nt = !1;

                function Mt() {
                    Lt && (Lt.detachEvent("onpropertychange", Ot), Pt = Lt = null)
                }

                function Ot(e) {
                    "value" === e.propertyName && It(Pt) && Be(At, e = Tt(Pt, e, ze(e)))
                }

                function Dt(e, t, n) {
                    "focus" === e ? (Mt(), Pt = n, (Lt = t).attachEvent("onpropertychange", Ot)) : "blur" === e && Mt()
                }

                function Bt(e) {
                    if ("selectionchange" === e || "keyup" === e || "keydown" === e) return It(Pt)
                }

                function qt(e, t) {
                    if ("click" === e) return It(t)
                }

                function Ut(e, t) {
                    if ("input" === e || "change" === e) return It(t)
                }
                Q && (Nt = Fe("input") && (!document.documentMode || 9 < document.documentMode));
                var zt = {
                        eventTypes: xt,
                        _isInputEventSupported: Nt,
                        extractEvents: function(e, t, n, i) {
                            var r = t ? q(t) : window,
                                o = void 0,
                                s = void 0,
                                a = r.nodeName && r.nodeName.toLowerCase();
                            if ("select" === a || "input" === a && "file" === r.type ? o = Rt : Ue(r) ? Nt ? o = Ut : (o = Bt, s = Dt) : (a = r.nodeName) && "input" === a.toLowerCase() && ("checkbox" === r.type || "radio" === r.type) && (o = qt), o && (o = o(e, t))) return Tt(o, n, i);
                            s && s(e, r, t), "blur" === e && (e = r._wrapperState) && e.controlled && "number" === r.type && Et(r, "number", r.value)
                        }
                    },
                    Ft = ce.extend({
                        view: null,
                        detail: null
                    }),
                    jt = {
                        Alt: "altKey",
                        Control: "ctrlKey",
                        Meta: "metaKey",
                        Shift: "shiftKey"
                    };

                function Ht(e) {
                    var t = this.nativeEvent;
                    return t.getModifierState ? t.getModifierState(e) : !!(e = jt[e]) && !!t[e]
                }

                function Wt() {
                    return Ht
                }
                var Vt = 0,
                    Qt = 0,
                    $t = !1,
                    Kt = !1,
                    Xt = Ft.extend({
                        screenX: null,
                        screenY: null,
                        clientX: null,
                        clientY: null,
                        pageX: null,
                        pageY: null,
                        ctrlKey: null,
                        shiftKey: null,
                        altKey: null,
                        metaKey: null,
                        getModifierState: Wt,
                        button: null,
                        buttons: null,
                        relatedTarget: function(e) {
                            return e.relatedTarget || (e.fromElement === e.srcElement ? e.toElement : e.fromElement)
                        },
                        movementX: function(e) {
                            if ("movementX" in e) return e.movementX;
                            var t = Vt;
                            return Vt = e.screenX, $t ? "mousemove" === e.type ? e.screenX - t : 0 : ($t = !0, 0)
                        },
                        movementY: function(e) {
                            if ("movementY" in e) return e.movementY;
                            var t = Qt;
                            return Qt = e.screenY, Kt ? "mousemove" === e.type ? e.screenY - t : 0 : (Kt = !0, 0)
                        }
                    }),
                    Yt = Xt.extend({
                        pointerId: null,
                        width: null,
                        height: null,
                        pressure: null,
                        tangentialPressure: null,
                        tiltX: null,
                        tiltY: null,
                        twist: null,
                        pointerType: null,
                        isPrimary: null
                    }),
                    Gt = {
                        mouseEnter: {
                            registrationName: "onMouseEnter",
                            dependencies: ["mouseout", "mouseover"]
                        },
                        mouseLeave: {
                            registrationName: "onMouseLeave",
                            dependencies: ["mouseout", "mouseover"]
                        },
                        pointerEnter: {
                            registrationName: "onPointerEnter",
                            dependencies: ["pointerout", "pointerover"]
                        },
                        pointerLeave: {
                            registrationName: "onPointerLeave",
                            dependencies: ["pointerout", "pointerover"]
                        }
                    },
                    Jt = {
                        eventTypes: Gt,
                        extractEvents: function(e, t, n, i) {
                            var r = "mouseover" === e || "pointerover" === e,
                                o = "mouseout" === e || "pointerout" === e;
                            if (r && (n.relatedTarget || n.fromElement) || !o && !r) return null;
                            if (r = i.window === i ? i : (r = i.ownerDocument) ? r.defaultView || r.parentWindow : window, o ? (o = t, t = (t = n.relatedTarget || n.toElement) ? D(t) : null) : o = null, o === t) return null;
                            var s = void 0,
                                a = void 0,
                                l = void 0,
                                c = void 0;
                            "mouseout" === e || "mouseover" === e ? (s = Xt, a = Gt.mouseLeave, l = Gt.mouseEnter, c = "mouse") : "pointerout" !== e && "pointerover" !== e || (s = Yt, a = Gt.pointerLeave, l = Gt.pointerEnter, c = "pointer");
                            var u = null == o ? r : q(o);
                            if (r = null == t ? r : q(t), (e = s.getPooled(a, o, n, i)).type = c + "leave", e.target = u, e.relatedTarget = r, (n = s.getPooled(l, t, n, i)).type = c + "enter", n.target = r, n.relatedTarget = u, i = t, o && i) e: {
                                for (r = i, c = 0, s = t = o; s; s = z(s)) c++;
                                for (s = 0, l = r; l; l = z(l)) s++;
                                for (; 0 < c - s;) t = z(t),
                                c--;
                                for (; 0 < s - c;) r = z(r),
                                s--;
                                for (; c--;) {
                                    if (t === r || t === r.alternate) break e;
                                    t = z(t), r = z(r)
                                }
                                t = null
                            }
                            else t = null;
                            for (r = t, t = []; o && o !== r && (null === (c = o.alternate) || c !== r);) t.push(o), o = z(o);
                            for (o = []; i && i !== r && (null === (c = i.alternate) || c !== r);) o.push(i), i = z(i);
                            for (i = 0; i < t.length; i++) H(t[i], "bubbled", e);
                            for (i = o.length; 0 < i--;) H(o[i], "captured", n);
                            return [e, n]
                        }
                    };

                function Zt(e, t) {
                    return e === t && (0 !== e || 1 / e === 1 / t) || e !== e && t !== t
                }
                var en = Object.prototype.hasOwnProperty;

                function tn(e, t) {
                    if (Zt(e, t)) return !0;
                    if ("object" !== typeof e || null === e || "object" !== typeof t || null === t) return !1;
                    var n = Object.keys(e),
                        i = Object.keys(t);
                    if (n.length !== i.length) return !1;
                    for (i = 0; i < n.length; i++)
                        if (!en.call(t, n[i]) || !Zt(e[n[i]], t[n[i]])) return !1;
                    return !0
                }

                function nn(e) {
                    var t = e;
                    if (e.alternate)
                        for (; t.return;) t = t.return;
                    else {
                        if (0 !== (2 & t.effectTag)) return 1;
                        for (; t.return;)
                            if (0 !== (2 & (t = t.return).effectTag)) return 1
                    }
                    return 3 === t.tag ? 2 : 3
                }

                function rn(e) {
                    2 !== nn(e) && s("188")
                }

                function on(e) {
                    if (e = function(e) {
                            var t = e.alternate;
                            if (!t) return 3 === (t = nn(e)) && s("188"), 1 === t ? null : e;
                            for (var n = e, i = t;;) {
                                var r = n.return,
                                    o = r ? r.alternate : null;
                                if (!r || !o) break;
                                if (r.child === o.child) {
                                    for (var a = r.child; a;) {
                                        if (a === n) return rn(r), e;
                                        if (a === i) return rn(r), t;
                                        a = a.sibling
                                    }
                                    s("188")
                                }
                                if (n.return !== i.return) n = r, i = o;
                                else {
                                    a = !1;
                                    for (var l = r.child; l;) {
                                        if (l === n) {
                                            a = !0, n = r, i = o;
                                            break
                                        }
                                        if (l === i) {
                                            a = !0, i = r, n = o;
                                            break
                                        }
                                        l = l.sibling
                                    }
                                    if (!a) {
                                        for (l = o.child; l;) {
                                            if (l === n) {
                                                a = !0, n = o, i = r;
                                                break
                                            }
                                            if (l === i) {
                                                a = !0, i = o, n = r;
                                                break
                                            }
                                            l = l.sibling
                                        }
                                        a || s("189")
                                    }
                                }
                                n.alternate !== i && s("190")
                            }
                            return 3 !== n.tag && s("188"), n.stateNode.current === n ? e : t
                        }(e), !e) return null;
                    for (var t = e;;) {
                        if (5 === t.tag || 6 === t.tag) return t;
                        if (t.child) t.child.return = t, t = t.child;
                        else {
                            if (t === e) break;
                            for (; !t.sibling;) {
                                if (!t.return || t.return === e) return null;
                                t = t.return
                            }
                            t.sibling.return = t.return, t = t.sibling
                        }
                    }
                    return null
                }
                var sn = ce.extend({
                        animationName: null,
                        elapsedTime: null,
                        pseudoElement: null
                    }),
                    an = ce.extend({
                        clipboardData: function(e) {
                            return "clipboardData" in e ? e.clipboardData : window.clipboardData
                        }
                    }),
                    ln = Ft.extend({
                        relatedTarget: null
                    });

                function cn(e) {
                    var t = e.keyCode;
                    return "charCode" in e ? 0 === (e = e.charCode) && 13 === t && (e = 13) : e = t, 10 === e && (e = 13), 32 <= e || 13 === e ? e : 0
                }
                var un = {
                        Esc: "Escape",
                        Spacebar: " ",
                        Left: "ArrowLeft",
                        Up: "ArrowUp",
                        Right: "ArrowRight",
                        Down: "ArrowDown",
                        Del: "Delete",
                        Win: "OS",
                        Menu: "ContextMenu",
                        Apps: "ContextMenu",
                        Scroll: "ScrollLock",
                        MozPrintableKey: "Unidentified"
                    },
                    dn = {
                        8: "Backspace",
                        9: "Tab",
                        12: "Clear",
                        13: "Enter",
                        16: "Shift",
                        17: "Control",
                        18: "Alt",
                        19: "Pause",
                        20: "CapsLock",
                        27: "Escape",
                        32: " ",
                        33: "PageUp",
                        34: "PageDown",
                        35: "End",
                        36: "Home",
                        37: "ArrowLeft",
                        38: "ArrowUp",
                        39: "ArrowRight",
                        40: "ArrowDown",
                        45: "Insert",
                        46: "Delete",
                        112: "F1",
                        113: "F2",
                        114: "F3",
                        115: "F4",
                        116: "F5",
                        117: "F6",
                        118: "F7",
                        119: "F8",
                        120: "F9",
                        121: "F10",
                        122: "F11",
                        123: "F12",
                        144: "NumLock",
                        145: "ScrollLock",
                        224: "Meta"
                    },
                    hn = Ft.extend({
                        key: function(e) {
                            if (e.key) {
                                var t = un[e.key] || e.key;
                                if ("Unidentified" !== t) return t
                            }
                            return "keypress" === e.type ? 13 === (e = cn(e)) ? "Enter" : String.fromCharCode(e) : "keydown" === e.type || "keyup" === e.type ? dn[e.keyCode] || "Unidentified" : ""
                        },
                        location: null,
                        ctrlKey: null,
                        shiftKey: null,
                        altKey: null,
                        metaKey: null,
                        repeat: null,
                        locale: null,
                        getModifierState: Wt,
                        charCode: function(e) {
                            return "keypress" === e.type ? cn(e) : 0
                        },
                        keyCode: function(e) {
                            return "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        },
                        which: function(e) {
                            return "keypress" === e.type ? cn(e) : "keydown" === e.type || "keyup" === e.type ? e.keyCode : 0
                        }
                    }),
                    pn = Xt.extend({
                        dataTransfer: null
                    }),
                    fn = Ft.extend({
                        touches: null,
                        targetTouches: null,
                        changedTouches: null,
                        altKey: null,
                        metaKey: null,
                        ctrlKey: null,
                        shiftKey: null,
                        getModifierState: Wt
                    }),
                    mn = ce.extend({
                        propertyName: null,
                        elapsedTime: null,
                        pseudoElement: null
                    }),
                    gn = Xt.extend({
                        deltaX: function(e) {
                            return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0
                        },
                        deltaY: function(e) {
                            return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0
                        },
                        deltaZ: null,
                        deltaMode: null
                    }),
                    yn = [
                        ["abort", "abort"],
                        [J, "animationEnd"],
                        [Z, "animationIteration"],
                        [ee, "animationStart"],
                        ["canplay", "canPlay"],
                        ["canplaythrough", "canPlayThrough"],
                        ["drag", "drag"],
                        ["dragenter", "dragEnter"],
                        ["dragexit", "dragExit"],
                        ["dragleave", "dragLeave"],
                        ["dragover", "dragOver"],
                        ["durationchange", "durationChange"],
                        ["emptied", "emptied"],
                        ["encrypted", "encrypted"],
                        ["ended", "ended"],
                        ["error", "error"],
                        ["gotpointercapture", "gotPointerCapture"],
                        ["load", "load"],
                        ["loadeddata", "loadedData"],
                        ["loadedmetadata", "loadedMetadata"],
                        ["loadstart", "loadStart"],
                        ["lostpointercapture", "lostPointerCapture"],
                        ["mousemove", "mouseMove"],
                        ["mouseout", "mouseOut"],
                        ["mouseover", "mouseOver"],
                        ["playing", "playing"],
                        ["pointermove", "pointerMove"],
                        ["pointerout", "pointerOut"],
                        ["pointerover", "pointerOver"],
                        ["progress", "progress"],
                        ["scroll", "scroll"],
                        ["seeking", "seeking"],
                        ["stalled", "stalled"],
                        ["suspend", "suspend"],
                        ["timeupdate", "timeUpdate"],
                        ["toggle", "toggle"],
                        ["touchmove", "touchMove"],
                        [te, "transitionEnd"],
                        ["waiting", "waiting"],
                        ["wheel", "wheel"]
                    ],
                    vn = {},
                    bn = {};

                function wn(e, t) {
                    var n = e[0],
                        i = "on" + ((e = e[1])[0].toUpperCase() + e.slice(1));
                    t = {
                        phasedRegistrationNames: {
                            bubbled: i,
                            captured: i + "Capture"
                        },
                        dependencies: [n],
                        isInteractive: t
                    }, vn[e] = t, bn[n] = t
                } [
                    ["blur", "blur"],
                    ["cancel", "cancel"],
                    ["click", "click"],
                    ["close", "close"],
                    ["contextmenu", "contextMenu"],
                    ["copy", "copy"],
                    ["cut", "cut"],
                    ["auxclick", "auxClick"],
                    ["dblclick", "doubleClick"],
                    ["dragend", "dragEnd"],
                    ["dragstart", "dragStart"],
                    ["drop", "drop"],
                    ["focus", "focus"],
                    ["input", "input"],
                    ["invalid", "invalid"],
                    ["keydown", "keyDown"],
                    ["keypress", "keyPress"],
                    ["keyup", "keyUp"],
                    ["mousedown", "mouseDown"],
                    ["mouseup", "mouseUp"],
                    ["paste", "paste"],
                    ["pause", "pause"],
                    ["play", "play"],
                    ["pointercancel", "pointerCancel"],
                    ["pointerdown", "pointerDown"],
                    ["pointerup", "pointerUp"],
                    ["ratechange", "rateChange"],
                    ["reset", "reset"],
                    ["seeked", "seeked"],
                    ["submit", "submit"],
                    ["touchcancel", "touchCancel"],
                    ["touchend", "touchEnd"],
                    ["touchstart", "touchStart"],
                    ["volumechange", "volumeChange"]
                ].forEach((function(e) {
                    wn(e, !0)
                })), yn.forEach((function(e) {
                    wn(e, !1)
                }));
                var _n = {
                        eventTypes: vn,
                        isInteractiveTopLevelEventType: function(e) {
                            return void 0 !== (e = bn[e]) && !0 === e.isInteractive
                        },
                        extractEvents: function(e, t, n, i) {
                            var r = bn[e];
                            if (!r) return null;
                            switch (e) {
                                case "keypress":
                                    if (0 === cn(n)) return null;
                                case "keydown":
                                case "keyup":
                                    e = hn;
                                    break;
                                case "blur":
                                case "focus":
                                    e = ln;
                                    break;
                                case "click":
                                    if (2 === n.button) return null;
                                case "auxclick":
                                case "dblclick":
                                case "mousedown":
                                case "mousemove":
                                case "mouseup":
                                case "mouseout":
                                case "mouseover":
                                case "contextmenu":
                                    e = Xt;
                                    break;
                                case "drag":
                                case "dragend":
                                case "dragenter":
                                case "dragexit":
                                case "dragleave":
                                case "dragover":
                                case "dragstart":
                                case "drop":
                                    e = pn;
                                    break;
                                case "touchcancel":
                                case "touchend":
                                case "touchmove":
                                case "touchstart":
                                    e = fn;
                                    break;
                                case J:
                                case Z:
                                case ee:
                                    e = sn;
                                    break;
                                case te:
                                    e = mn;
                                    break;
                                case "scroll":
                                    e = Ft;
                                    break;
                                case "wheel":
                                    e = gn;
                                    break;
                                case "copy":
                                case "cut":
                                case "paste":
                                    e = an;
                                    break;
                                case "gotpointercapture":
                                case "lostpointercapture":
                                case "pointercancel":
                                case "pointerdown":
                                case "pointermove":
                                case "pointerout":
                                case "pointerover":
                                case "pointerup":
                                    e = Yt;
                                    break;
                                default:
                                    e = ce
                            }
                            return V(t = e.getPooled(r, t, n, i)), t
                        }
                    },
                    Sn = _n.isInteractiveTopLevelEventType,
                    Cn = [];

                function kn(e) {
                    var t = e.targetInst,
                        n = t;
                    do {
                        if (!n) {
                            e.ancestors.push(n);
                            break
                        }
                        var i;
                        for (i = n; i.return;) i = i.return;
                        if (!(i = 3 !== i.tag ? null : i.stateNode.containerInfo)) break;
                        e.ancestors.push(n), n = D(i)
                    } while (n);
                    for (n = 0; n < e.ancestors.length; n++) {
                        t = e.ancestors[n];
                        var r = ze(e.nativeEvent);
                        i = e.topLevelType;
                        for (var o = e.nativeEvent, s = null, a = 0; a < v.length; a++) {
                            var l = v[a];
                            l && (l = l.extractEvents(i, t, o, r)) && (s = x(s, l))
                        }
                        R(s)
                    }
                }
                var En = !0;

                function xn(e, t) {
                    if (!t) return null;
                    var n = (Sn(e) ? Ln : Pn).bind(null, e);
                    t.addEventListener(e, n, !1)
                }

                function Tn(e, t) {
                    if (!t) return null;
                    var n = (Sn(e) ? Ln : Pn).bind(null, e);
                    t.addEventListener(e, n, !0)
                }

                function Ln(e, t) {
                    Me(Pn, e, t)
                }

                function Pn(e, t) {
                    if (En) {
                        var n = ze(t);
                        if (null === (n = D(n)) || "number" !== typeof n.tag || 2 === nn(n) || (n = null), Cn.length) {
                            var i = Cn.pop();
                            i.topLevelType = e, i.nativeEvent = t, i.targetInst = n, e = i
                        } else e = {
                            topLevelType: e,
                            nativeEvent: t,
                            targetInst: n,
                            ancestors: []
                        };
                        try {
                            Be(kn, e)
                        } finally {
                            e.topLevelType = null, e.nativeEvent = null, e.targetInst = null, e.ancestors.length = 0, 10 > Cn.length && Cn.push(e)
                        }
                    }
                }
                var An = {},
                    In = 0,
                    Rn = "_reactListenersID" + ("" + Math.random()).slice(2);

                function Nn(e) {
                    return Object.prototype.hasOwnProperty.call(e, Rn) || (e[Rn] = In++, An[e[Rn]] = {}), An[e[Rn]]
                }

                function Mn(e) {
                    if ("undefined" === typeof(e = e || ("undefined" !== typeof document ? document : void 0))) return null;
                    try {
                        return e.activeElement || e.body
                    } catch (t) {
                        return e.body
                    }
                }

                function On(e) {
                    for (; e && e.firstChild;) e = e.firstChild;
                    return e
                }

                function Dn(e, t) {
                    var n, i = On(e);
                    for (e = 0; i;) {
                        if (3 === i.nodeType) {
                            if (n = e + i.textContent.length, e <= t && n >= t) return {
                                node: i,
                                offset: t - e
                            };
                            e = n
                        }
                        e: {
                            for (; i;) {
                                if (i.nextSibling) {
                                    i = i.nextSibling;
                                    break e
                                }
                                i = i.parentNode
                            }
                            i = void 0
                        }
                        i = On(i)
                    }
                }

                function Bn(e, t) {
                    return !(!e || !t) && (e === t || (!e || 3 !== e.nodeType) && (t && 3 === t.nodeType ? Bn(e, t.parentNode) : "contains" in e ? e.contains(t) : !!e.compareDocumentPosition && !!(16 & e.compareDocumentPosition(t))))
                }

                function qn() {
                    for (var e = window, t = Mn(); t instanceof e.HTMLIFrameElement;) {
                        try {
                            var n = "string" === typeof t.contentWindow.location.href
                        } catch (i) {
                            n = !1
                        }
                        if (!n) break;
                        t = Mn((e = t.contentWindow).document)
                    }
                    return t
                }

                function Un(e) {
                    var t = e && e.nodeName && e.nodeName.toLowerCase();
                    return t && ("input" === t && ("text" === e.type || "search" === e.type || "tel" === e.type || "url" === e.type || "password" === e.type) || "textarea" === t || "true" === e.contentEditable)
                }

                function zn(e) {
                    var t = qn(),
                        n = e.focusedElem,
                        i = e.selectionRange;
                    if (t !== n && n && n.ownerDocument && Bn(n.ownerDocument.documentElement, n)) {
                        if (null !== i && Un(n))
                            if (t = i.start, void 0 === (e = i.end) && (e = t), "selectionStart" in n) n.selectionStart = t, n.selectionEnd = Math.min(e, n.value.length);
                            else if ((e = (t = n.ownerDocument || document) && t.defaultView || window).getSelection) {
                            e = e.getSelection();
                            var r = n.textContent.length,
                                o = Math.min(i.start, r);
                            i = void 0 === i.end ? o : Math.min(i.end, r), !e.extend && o > i && (r = i, i = o, o = r), r = Dn(n, o);
                            var s = Dn(n, i);
                            r && s && (1 !== e.rangeCount || e.anchorNode !== r.node || e.anchorOffset !== r.offset || e.focusNode !== s.node || e.focusOffset !== s.offset) && ((t = t.createRange()).setStart(r.node, r.offset), e.removeAllRanges(), o > i ? (e.addRange(t), e.extend(s.node, s.offset)) : (t.setEnd(s.node, s.offset), e.addRange(t)))
                        }
                        for (t = [], e = n; e = e.parentNode;) 1 === e.nodeType && t.push({
                            element: e,
                            left: e.scrollLeft,
                            top: e.scrollTop
                        });
                        for ("function" === typeof n.focus && n.focus(), n = 0; n < t.length; n++)(e = t[n]).element.scrollLeft = e.left, e.element.scrollTop = e.top
                    }
                }
                var Fn = Q && "documentMode" in document && 11 >= document.documentMode,
                    jn = {
                        select: {
                            phasedRegistrationNames: {
                                bubbled: "onSelect",
                                captured: "onSelectCapture"
                            },
                            dependencies: "blur contextmenu dragend focus keydown keyup mousedown mouseup selectionchange".split(" ")
                        }
                    },
                    Hn = null,
                    Wn = null,
                    Vn = null,
                    Qn = !1;

                function $n(e, t) {
                    var n = t.window === t ? t.document : 9 === t.nodeType ? t : t.ownerDocument;
                    return Qn || null == Hn || Hn !== Mn(n) ? null : ("selectionStart" in (n = Hn) && Un(n) ? n = {
                        start: n.selectionStart,
                        end: n.selectionEnd
                    } : n = {
                        anchorNode: (n = (n.ownerDocument && n.ownerDocument.defaultView || window).getSelection()).anchorNode,
                        anchorOffset: n.anchorOffset,
                        focusNode: n.focusNode,
                        focusOffset: n.focusOffset
                    }, Vn && tn(Vn, n) ? null : (Vn = n, (e = ce.getPooled(jn.select, Wn, e, t)).type = "select", e.target = Hn, V(e), e))
                }
                var Kn = {
                    eventTypes: jn,
                    extractEvents: function(e, t, n, i) {
                        var r, o = i.window === i ? i.document : 9 === i.nodeType ? i : i.ownerDocument;
                        if (!(r = !o)) {
                            e: {
                                o = Nn(o),
                                r = _.onSelect;
                                for (var s = 0; s < r.length; s++) {
                                    var a = r[s];
                                    if (!o.hasOwnProperty(a) || !o[a]) {
                                        o = !1;
                                        break e
                                    }
                                }
                                o = !0
                            }
                            r = !o
                        }
                        if (r) return null;
                        switch (o = t ? q(t) : window, e) {
                            case "focus":
                                (Ue(o) || "true" === o.contentEditable) && (Hn = o, Wn = t, Vn = null);
                                break;
                            case "blur":
                                Vn = Wn = Hn = null;
                                break;
                            case "mousedown":
                                Qn = !0;
                                break;
                            case "contextmenu":
                            case "mouseup":
                            case "dragend":
                                return Qn = !1, $n(n, i);
                            case "selectionchange":
                                if (Fn) break;
                            case "keydown":
                            case "keyup":
                                return $n(n, i)
                        }
                        return null
                    }
                };

                function Xn(e, t) {
                    return e = r({
                        children: void 0
                    }, t), (t = function(e) {
                        var t = "";
                        return i.Children.forEach(e, (function(e) {
                            null != e && (t += e)
                        })), t
                    }(t.children)) && (e.children = t), e
                }

                function Yn(e, t, n, i) {
                    if (e = e.options, t) {
                        t = {};
                        for (var r = 0; r < n.length; r++) t["$" + n[r]] = !0;
                        for (n = 0; n < e.length; n++) r = t.hasOwnProperty("$" + e[n].value), e[n].selected !== r && (e[n].selected = r), r && i && (e[n].defaultSelected = !0)
                    } else {
                        for (n = "" + bt(n), t = null, r = 0; r < e.length; r++) {
                            if (e[r].value === n) return e[r].selected = !0, void(i && (e[r].defaultSelected = !0));
                            null !== t || e[r].disabled || (t = e[r])
                        }
                        null !== t && (t.selected = !0)
                    }
                }

                function Gn(e, t) {
                    return null != t.dangerouslySetInnerHTML && s("91"), r({}, t, {
                        value: void 0,
                        defaultValue: void 0,
                        children: "" + e._wrapperState.initialValue
                    })
                }

                function Jn(e, t) {
                    var n = t.value;
                    null == n && (n = t.defaultValue, null != (t = t.children) && (null != n && s("92"), Array.isArray(t) && (1 >= t.length || s("93"), t = t[0]), n = t), null == n && (n = "")), e._wrapperState = {
                        initialValue: bt(n)
                    }
                }

                function Zn(e, t) {
                    var n = bt(t.value),
                        i = bt(t.defaultValue);
                    null != n && ((n = "" + n) !== e.value && (e.value = n), null == t.defaultValue && e.defaultValue !== n && (e.defaultValue = n)), null != i && (e.defaultValue = "" + i)
                }

                function ei(e) {
                    var t = e.textContent;
                    t === e._wrapperState.initialValue && (e.value = t)
                }
                A.injectEventPluginOrder("ResponderEventPlugin SimpleEventPlugin EnterLeaveEventPlugin ChangeEventPlugin SelectEventPlugin BeforeInputEventPlugin".split(" ")), S = U, C = B, k = q, A.injectEventPluginsByName({
                    SimpleEventPlugin: _n,
                    EnterLeaveEventPlugin: Jt,
                    ChangeEventPlugin: zt,
                    SelectEventPlugin: Kn,
                    BeforeInputEventPlugin: xe
                });
                var ti = {
                    html: "http://www.w3.org/1999/xhtml",
                    mathml: "http://www.w3.org/1998/Math/MathML",
                    svg: "http://www.w3.org/2000/svg"
                };

                function ni(e) {
                    switch (e) {
                        case "svg":
                            return "http://www.w3.org/2000/svg";
                        case "math":
                            return "http://www.w3.org/1998/Math/MathML";
                        default:
                            return "http://www.w3.org/1999/xhtml"
                    }
                }

                function ii(e, t) {
                    return null == e || "http://www.w3.org/1999/xhtml" === e ? ni(t) : "http://www.w3.org/2000/svg" === e && "foreignObject" === t ? "http://www.w3.org/1999/xhtml" : e
                }
                var ri, oi = void 0,
                    si = (ri = function(e, t) {
                        if (e.namespaceURI !== ti.svg || "innerHTML" in e) e.innerHTML = t;
                        else {
                            for ((oi = oi || document.createElement("div")).innerHTML = "<svg>" + t + "</svg>", t = oi.firstChild; e.firstChild;) e.removeChild(e.firstChild);
                            for (; t.firstChild;) e.appendChild(t.firstChild)
                        }
                    }, "undefined" !== typeof MSApp && MSApp.execUnsafeLocalFunction ? function(e, t, n, i) {
                        MSApp.execUnsafeLocalFunction((function() {
                            return ri(e, t)
                        }))
                    } : ri);

                function ai(e, t) {
                    if (t) {
                        var n = e.firstChild;
                        if (n && n === e.lastChild && 3 === n.nodeType) return void(n.nodeValue = t)
                    }
                    e.textContent = t
                }
                var li = {
                        animationIterationCount: !0,
                        borderImageOutset: !0,
                        borderImageSlice: !0,
                        borderImageWidth: !0,
                        boxFlex: !0,
                        boxFlexGroup: !0,
                        boxOrdinalGroup: !0,
                        columnCount: !0,
                        columns: !0,
                        flex: !0,
                        flexGrow: !0,
                        flexPositive: !0,
                        flexShrink: !0,
                        flexNegative: !0,
                        flexOrder: !0,
                        gridArea: !0,
                        gridRow: !0,
                        gridRowEnd: !0,
                        gridRowSpan: !0,
                        gridRowStart: !0,
                        gridColumn: !0,
                        gridColumnEnd: !0,
                        gridColumnSpan: !0,
                        gridColumnStart: !0,
                        fontWeight: !0,
                        lineClamp: !0,
                        lineHeight: !0,
                        opacity: !0,
                        order: !0,
                        orphans: !0,
                        tabSize: !0,
                        widows: !0,
                        zIndex: !0,
                        zoom: !0,
                        fillOpacity: !0,
                        floodOpacity: !0,
                        stopOpacity: !0,
                        strokeDasharray: !0,
                        strokeDashoffset: !0,
                        strokeMiterlimit: !0,
                        strokeOpacity: !0,
                        strokeWidth: !0
                    },
                    ci = ["Webkit", "ms", "Moz", "O"];

                function ui(e, t, n) {
                    return null == t || "boolean" === typeof t || "" === t ? "" : n || "number" !== typeof t || 0 === t || li.hasOwnProperty(e) && li[e] ? ("" + t).trim() : t + "px"
                }

                function di(e, t) {
                    for (var n in e = e.style, t)
                        if (t.hasOwnProperty(n)) {
                            var i = 0 === n.indexOf("--"),
                                r = ui(n, t[n], i);
                            "float" === n && (n = "cssFloat"), i ? e.setProperty(n, r) : e[n] = r
                        }
                }
                Object.keys(li).forEach((function(e) {
                    ci.forEach((function(t) {
                        t = t + e.charAt(0).toUpperCase() + e.substring(1), li[t] = li[e]
                    }))
                }));
                var hi = r({
                    menuitem: !0
                }, {
                    area: !0,
                    base: !0,
                    br: !0,
                    col: !0,
                    embed: !0,
                    hr: !0,
                    img: !0,
                    input: !0,
                    keygen: !0,
                    link: !0,
                    meta: !0,
                    param: !0,
                    source: !0,
                    track: !0,
                    wbr: !0
                });

                function pi(e, t) {
                    t && (hi[e] && (null != t.children || null != t.dangerouslySetInnerHTML) && s("137", e, ""), null != t.dangerouslySetInnerHTML && (null != t.children && s("60"), "object" === typeof t.dangerouslySetInnerHTML && "__html" in t.dangerouslySetInnerHTML || s("61")), null != t.style && "object" !== typeof t.style && s("62", ""))
                }

                function fi(e, t) {
                    if (-1 === e.indexOf("-")) return "string" === typeof t.is;
                    switch (e) {
                        case "annotation-xml":
                        case "color-profile":
                        case "font-face":
                        case "font-face-src":
                        case "font-face-uri":
                        case "font-face-format":
                        case "font-face-name":
                        case "missing-glyph":
                            return !1;
                        default:
                            return !0
                    }
                }

                function mi(e, t) {
                    var n = Nn(e = 9 === e.nodeType || 11 === e.nodeType ? e : e.ownerDocument);
                    t = _[t];
                    for (var i = 0; i < t.length; i++) {
                        var r = t[i];
                        if (!n.hasOwnProperty(r) || !n[r]) {
                            switch (r) {
                                case "scroll":
                                    Tn("scroll", e);
                                    break;
                                case "focus":
                                case "blur":
                                    Tn("focus", e), Tn("blur", e), n.blur = !0, n.focus = !0;
                                    break;
                                case "cancel":
                                case "close":
                                    Fe(r) && Tn(r, e);
                                    break;
                                case "invalid":
                                case "submit":
                                case "reset":
                                    break;
                                default:
                                    -1 === ne.indexOf(r) && xn(r, e)
                            }
                            n[r] = !0
                        }
                    }
                }

                function gi() {}
                var yi = null,
                    vi = null;

                function bi(e, t) {
                    switch (e) {
                        case "button":
                        case "input":
                        case "select":
                        case "textarea":
                            return !!t.autoFocus
                    }
                    return !1
                }

                function wi(e, t) {
                    return "textarea" === e || "option" === e || "noscript" === e || "string" === typeof t.children || "number" === typeof t.children || "object" === typeof t.dangerouslySetInnerHTML && null !== t.dangerouslySetInnerHTML && null != t.dangerouslySetInnerHTML.__html
                }
                var _i = "function" === typeof setTimeout ? setTimeout : void 0,
                    Si = "function" === typeof clearTimeout ? clearTimeout : void 0,
                    Ci = o.unstable_scheduleCallback,
                    ki = o.unstable_cancelCallback;

                function Ei(e) {
                    for (e = e.nextSibling; e && 1 !== e.nodeType && 3 !== e.nodeType;) e = e.nextSibling;
                    return e
                }

                function xi(e) {
                    for (e = e.firstChild; e && 1 !== e.nodeType && 3 !== e.nodeType;) e = e.nextSibling;
                    return e
                }
                new Set;
                var Ti = [],
                    Li = -1;

                function Pi(e) {
                    0 > Li || (e.current = Ti[Li], Ti[Li] = null, Li--)
                }

                function Ai(e, t) {
                    Li++, Ti[Li] = e.current, e.current = t
                }
                var Ii = {},
                    Ri = {
                        current: Ii
                    },
                    Ni = {
                        current: !1
                    },
                    Mi = Ii;

                function Oi(e, t) {
                    var n = e.type.contextTypes;
                    if (!n) return Ii;
                    var i = e.stateNode;
                    if (i && i.__reactInternalMemoizedUnmaskedChildContext === t) return i.__reactInternalMemoizedMaskedChildContext;
                    var r, o = {};
                    for (r in n) o[r] = t[r];
                    return i && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = t, e.__reactInternalMemoizedMaskedChildContext = o), o
                }

                function Di(e) {
                    return null !== (e = e.childContextTypes) && void 0 !== e
                }

                function Bi(e) {
                    Pi(Ni), Pi(Ri)
                }

                function qi(e) {
                    Pi(Ni), Pi(Ri)
                }

                function Ui(e, t, n) {
                    Ri.current !== Ii && s("168"), Ai(Ri, t), Ai(Ni, n)
                }

                function zi(e, t, n) {
                    var i = e.stateNode;
                    if (e = t.childContextTypes, "function" !== typeof i.getChildContext) return n;
                    for (var o in i = i.getChildContext()) o in e || s("108", lt(t) || "Unknown", o);
                    return r({}, n, i)
                }

                function Fi(e) {
                    var t = e.stateNode;
                    return t = t && t.__reactInternalMemoizedMergedChildContext || Ii, Mi = Ri.current, Ai(Ri, t), Ai(Ni, Ni.current), !0
                }

                function ji(e, t, n) {
                    var i = e.stateNode;
                    i || s("169"), n ? (t = zi(e, t, Mi), i.__reactInternalMemoizedMergedChildContext = t, Pi(Ni), Pi(Ri), Ai(Ri, t)) : Pi(Ni), Ai(Ni, n)
                }
                var Hi = null,
                    Wi = null;

                function Vi(e) {
                    return function(t) {
                        try {
                            return e(t)
                        } catch (n) {}
                    }
                }

                function Qi(e, t, n, i) {
                    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.ref = null, this.pendingProps = t, this.contextDependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = i, this.effectTag = 0, this.lastEffect = this.firstEffect = this.nextEffect = null, this.childExpirationTime = this.expirationTime = 0, this.alternate = null
                }

                function $i(e, t, n, i) {
                    return new Qi(e, t, n, i)
                }

                function Ki(e) {
                    return !(!(e = e.prototype) || !e.isReactComponent)
                }

                function Xi(e, t) {
                    var n = e.alternate;
                    return null === n ? ((n = $i(e.tag, t, e.key, e.mode)).elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.effectTag = 0, n.nextEffect = null, n.firstEffect = null, n.lastEffect = null), n.childExpirationTime = e.childExpirationTime, n.expirationTime = e.expirationTime, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, n.contextDependencies = e.contextDependencies, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n
                }

                function Yi(e, t, n, i, r, o) {
                    var a = 2;
                    if (i = e, "function" === typeof e) Ki(e) && (a = 1);
                    else if ("string" === typeof e) a = 5;
                    else e: switch (e) {
                        case Ye:
                            return Gi(n.children, r, o, t);
                        case tt:
                            return Ji(n, 3 | r, o, t);
                        case Ge:
                            return Ji(n, 2 | r, o, t);
                        case Je:
                            return (e = $i(12, n, t, 4 | r)).elementType = Je, e.type = Je, e.expirationTime = o, e;
                        case it:
                            return (e = $i(13, n, t, r)).elementType = it, e.type = it, e.expirationTime = o, e;
                        default:
                            if ("object" === typeof e && null !== e) switch (e.$$typeof) {
                                case Ze:
                                    a = 10;
                                    break e;
                                case et:
                                    a = 9;
                                    break e;
                                case nt:
                                    a = 11;
                                    break e;
                                case rt:
                                    a = 14;
                                    break e;
                                case ot:
                                    a = 16, i = null;
                                    break e
                            }
                            s("130", null == e ? e : typeof e, "")
                    }
                    return (t = $i(a, n, t, r)).elementType = e, t.type = i, t.expirationTime = o, t
                }

                function Gi(e, t, n, i) {
                    return (e = $i(7, e, i, t)).expirationTime = n, e
                }

                function Ji(e, t, n, i) {
                    return e = $i(8, e, i, t), t = 0 === (1 & t) ? Ge : tt, e.elementType = t, e.type = t, e.expirationTime = n, e
                }

                function Zi(e, t, n) {
                    return (e = $i(6, e, null, t)).expirationTime = n, e
                }

                function er(e, t, n) {
                    return (t = $i(4, null !== e.children ? e.children : [], e.key, t)).expirationTime = n, t.stateNode = {
                        containerInfo: e.containerInfo,
                        pendingChildren: null,
                        implementation: e.implementation
                    }, t
                }

                function tr(e, t) {
                    e.didError = !1;
                    var n = e.earliestPendingTime;
                    0 === n ? e.earliestPendingTime = e.latestPendingTime = t : n < t ? e.earliestPendingTime = t : e.latestPendingTime > t && (e.latestPendingTime = t), rr(t, e)
                }

                function nr(e, t) {
                    e.didError = !1, e.latestPingedTime >= t && (e.latestPingedTime = 0);
                    var n = e.earliestPendingTime,
                        i = e.latestPendingTime;
                    n === t ? e.earliestPendingTime = i === t ? e.latestPendingTime = 0 : i : i === t && (e.latestPendingTime = n), n = e.earliestSuspendedTime, i = e.latestSuspendedTime, 0 === n ? e.earliestSuspendedTime = e.latestSuspendedTime = t : n < t ? e.earliestSuspendedTime = t : i > t && (e.latestSuspendedTime = t), rr(t, e)
                }

                function ir(e, t) {
                    var n = e.earliestPendingTime;
                    return n > t && (t = n), (e = e.earliestSuspendedTime) > t && (t = e), t
                }

                function rr(e, t) {
                    var n = t.earliestSuspendedTime,
                        i = t.latestSuspendedTime,
                        r = t.earliestPendingTime,
                        o = t.latestPingedTime;
                    0 === (r = 0 !== r ? r : o) && (0 === e || i < e) && (r = i), 0 !== (e = r) && n > e && (e = n), t.nextExpirationTimeToWorkOn = r, t.expirationTime = e
                }

                function or(e, t) {
                    if (e && e.defaultProps)
                        for (var n in t = r({}, t), e = e.defaultProps) void 0 === t[n] && (t[n] = e[n]);
                    return t
                }
                var sr = (new i.Component).refs;

                function ar(e, t, n, i) {
                    n = null === (n = n(i, t = e.memoizedState)) || void 0 === n ? t : r({}, t, n), e.memoizedState = n, null !== (i = e.updateQueue) && 0 === e.expirationTime && (i.baseState = n)
                }
                var lr = {
                    isMounted: function(e) {
                        return !!(e = e._reactInternalFiber) && 2 === nn(e)
                    },
                    enqueueSetState: function(e, t, n) {
                        e = e._reactInternalFiber;
                        var i = Ta(),
                            r = Jo(i = Js(i, e));
                        r.payload = t, void 0 !== n && null !== n && (r.callback = n), Qs(), es(e, r), na(e, i)
                    },
                    enqueueReplaceState: function(e, t, n) {
                        e = e._reactInternalFiber;
                        var i = Ta(),
                            r = Jo(i = Js(i, e));
                        r.tag = Qo, r.payload = t, void 0 !== n && null !== n && (r.callback = n), Qs(), es(e, r), na(e, i)
                    },
                    enqueueForceUpdate: function(e, t) {
                        e = e._reactInternalFiber;
                        var n = Ta(),
                            i = Jo(n = Js(n, e));
                        i.tag = $o, void 0 !== t && null !== t && (i.callback = t), Qs(), es(e, i), na(e, n)
                    }
                };

                function cr(e, t, n, i, r, o, s) {
                    return "function" === typeof(e = e.stateNode).shouldComponentUpdate ? e.shouldComponentUpdate(i, o, s) : !t.prototype || !t.prototype.isPureReactComponent || (!tn(n, i) || !tn(r, o))
                }

                function ur(e, t, n) {
                    var i = !1,
                        r = Ii,
                        o = t.contextType;
                    return "object" === typeof o && null !== o ? o = Wo(o) : (r = Di(t) ? Mi : Ri.current, o = (i = null !== (i = t.contextTypes) && void 0 !== i) ? Oi(e, r) : Ii), t = new t(n, o), e.memoizedState = null !== t.state && void 0 !== t.state ? t.state : null, t.updater = lr, e.stateNode = t, t._reactInternalFiber = e, i && ((e = e.stateNode).__reactInternalMemoizedUnmaskedChildContext = r, e.__reactInternalMemoizedMaskedChildContext = o), t
                }

                function dr(e, t, n, i) {
                    e = t.state, "function" === typeof t.componentWillReceiveProps && t.componentWillReceiveProps(n, i), "function" === typeof t.UNSAFE_componentWillReceiveProps && t.UNSAFE_componentWillReceiveProps(n, i), t.state !== e && lr.enqueueReplaceState(t, t.state, null)
                }

                function hr(e, t, n, i) {
                    var r = e.stateNode;
                    r.props = n, r.state = e.memoizedState, r.refs = sr;
                    var o = t.contextType;
                    "object" === typeof o && null !== o ? r.context = Wo(o) : (o = Di(t) ? Mi : Ri.current, r.context = Oi(e, o)), null !== (o = e.updateQueue) && (rs(e, o, n, r, i), r.state = e.memoizedState), "function" === typeof(o = t.getDerivedStateFromProps) && (ar(e, t, o, n), r.state = e.memoizedState), "function" === typeof t.getDerivedStateFromProps || "function" === typeof r.getSnapshotBeforeUpdate || "function" !== typeof r.UNSAFE_componentWillMount && "function" !== typeof r.componentWillMount || (t = r.state, "function" === typeof r.componentWillMount && r.componentWillMount(), "function" === typeof r.UNSAFE_componentWillMount && r.UNSAFE_componentWillMount(), t !== r.state && lr.enqueueReplaceState(r, r.state, null), null !== (o = e.updateQueue) && (rs(e, o, n, r, i), r.state = e.memoizedState)), "function" === typeof r.componentDidMount && (e.effectTag |= 4)
                }
                var pr = Array.isArray;

                function fr(e, t, n) {
                    if (null !== (e = n.ref) && "function" !== typeof e && "object" !== typeof e) {
                        if (n._owner) {
                            n = n._owner;
                            var i = void 0;
                            n && (1 !== n.tag && s("309"), i = n.stateNode), i || s("147", e);
                            var r = "" + e;
                            return null !== t && null !== t.ref && "function" === typeof t.ref && t.ref._stringRef === r ? t.ref : (t = function(e) {
                                var t = i.refs;
                                t === sr && (t = i.refs = {}), null === e ? delete t[r] : t[r] = e
                            }, t._stringRef = r, t)
                        }
                        "string" !== typeof e && s("284"), n._owner || s("290", e)
                    }
                    return e
                }

                function mr(e, t) {
                    "textarea" !== e.type && s("31", "[object Object]" === Object.prototype.toString.call(t) ? "object with keys {" + Object.keys(t).join(", ") + "}" : t, "")
                }

                function gr(e) {
                    function t(t, n) {
                        if (e) {
                            var i = t.lastEffect;
                            null !== i ? (i.nextEffect = n, t.lastEffect = n) : t.firstEffect = t.lastEffect = n, n.nextEffect = null, n.effectTag = 8
                        }
                    }

                    function n(n, i) {
                        if (!e) return null;
                        for (; null !== i;) t(n, i), i = i.sibling;
                        return null
                    }

                    function i(e, t) {
                        for (e = new Map; null !== t;) null !== t.key ? e.set(t.key, t) : e.set(t.index, t), t = t.sibling;
                        return e
                    }

                    function r(e, t, n) {
                        return (e = Xi(e, t)).index = 0, e.sibling = null, e
                    }

                    function o(t, n, i) {
                        return t.index = i, e ? null !== (i = t.alternate) ? (i = i.index) < n ? (t.effectTag = 2, n) : i : (t.effectTag = 2, n) : n
                    }

                    function a(t) {
                        return e && null === t.alternate && (t.effectTag = 2), t
                    }

                    function l(e, t, n, i) {
                        return null === t || 6 !== t.tag ? ((t = Zi(n, e.mode, i)).return = e, t) : ((t = r(t, n)).return = e, t)
                    }

                    function c(e, t, n, i) {
                        return null !== t && t.elementType === n.type ? ((i = r(t, n.props)).ref = fr(e, t, n), i.return = e, i) : ((i = Yi(n.type, n.key, n.props, null, e.mode, i)).ref = fr(e, t, n), i.return = e, i)
                    }

                    function u(e, t, n, i) {
                        return null === t || 4 !== t.tag || t.stateNode.containerInfo !== n.containerInfo || t.stateNode.implementation !== n.implementation ? ((t = er(n, e.mode, i)).return = e, t) : ((t = r(t, n.children || [])).return = e, t)
                    }

                    function d(e, t, n, i, o) {
                        return null === t || 7 !== t.tag ? ((t = Gi(n, e.mode, i, o)).return = e, t) : ((t = r(t, n)).return = e, t)
                    }

                    function h(e, t, n) {
                        if ("string" === typeof t || "number" === typeof t) return (t = Zi("" + t, e.mode, n)).return = e, t;
                        if ("object" === typeof t && null !== t) {
                            switch (t.$$typeof) {
                                case Ke:
                                    return (n = Yi(t.type, t.key, t.props, null, e.mode, n)).ref = fr(e, null, t), n.return = e, n;
                                case Xe:
                                    return (t = er(t, e.mode, n)).return = e, t
                            }
                            if (pr(t) || at(t)) return (t = Gi(t, e.mode, n, null)).return = e, t;
                            mr(e, t)
                        }
                        return null
                    }

                    function p(e, t, n, i) {
                        var r = null !== t ? t.key : null;
                        if ("string" === typeof n || "number" === typeof n) return null !== r ? null : l(e, t, "" + n, i);
                        if ("object" === typeof n && null !== n) {
                            switch (n.$$typeof) {
                                case Ke:
                                    return n.key === r ? n.type === Ye ? d(e, t, n.props.children, i, r) : c(e, t, n, i) : null;
                                case Xe:
                                    return n.key === r ? u(e, t, n, i) : null
                            }
                            if (pr(n) || at(n)) return null !== r ? null : d(e, t, n, i, null);
                            mr(e, n)
                        }
                        return null
                    }

                    function f(e, t, n, i, r) {
                        if ("string" === typeof i || "number" === typeof i) return l(t, e = e.get(n) || null, "" + i, r);
                        if ("object" === typeof i && null !== i) {
                            switch (i.$$typeof) {
                                case Ke:
                                    return e = e.get(null === i.key ? n : i.key) || null, i.type === Ye ? d(t, e, i.props.children, r, i.key) : c(t, e, i, r);
                                case Xe:
                                    return u(t, e = e.get(null === i.key ? n : i.key) || null, i, r)
                            }
                            if (pr(i) || at(i)) return d(t, e = e.get(n) || null, i, r, null);
                            mr(t, i)
                        }
                        return null
                    }

                    function m(r, s, a, l) {
                        for (var c = null, u = null, d = s, m = s = 0, g = null; null !== d && m < a.length; m++) {
                            d.index > m ? (g = d, d = null) : g = d.sibling;
                            var y = p(r, d, a[m], l);
                            if (null === y) {
                                null === d && (d = g);
                                break
                            }
                            e && d && null === y.alternate && t(r, d), s = o(y, s, m), null === u ? c = y : u.sibling = y, u = y, d = g
                        }
                        if (m === a.length) return n(r, d), c;
                        if (null === d) {
                            for (; m < a.length; m++)(d = h(r, a[m], l)) && (s = o(d, s, m), null === u ? c = d : u.sibling = d, u = d);
                            return c
                        }
                        for (d = i(r, d); m < a.length; m++)(g = f(d, r, m, a[m], l)) && (e && null !== g.alternate && d.delete(null === g.key ? m : g.key), s = o(g, s, m), null === u ? c = g : u.sibling = g, u = g);
                        return e && d.forEach((function(e) {
                            return t(r, e)
                        })), c
                    }

                    function g(r, a, l, c) {
                        var u = at(l);
                        "function" !== typeof u && s("150"), null == (l = u.call(l)) && s("151");
                        for (var d = u = null, m = a, g = a = 0, y = null, v = l.next(); null !== m && !v.done; g++, v = l.next()) {
                            m.index > g ? (y = m, m = null) : y = m.sibling;
                            var b = p(r, m, v.value, c);
                            if (null === b) {
                                m || (m = y);
                                break
                            }
                            e && m && null === b.alternate && t(r, m), a = o(b, a, g), null === d ? u = b : d.sibling = b, d = b, m = y
                        }
                        if (v.done) return n(r, m), u;
                        if (null === m) {
                            for (; !v.done; g++, v = l.next()) null !== (v = h(r, v.value, c)) && (a = o(v, a, g), null === d ? u = v : d.sibling = v, d = v);
                            return u
                        }
                        for (m = i(r, m); !v.done; g++, v = l.next()) null !== (v = f(m, r, g, v.value, c)) && (e && null !== v.alternate && m.delete(null === v.key ? g : v.key), a = o(v, a, g), null === d ? u = v : d.sibling = v, d = v);
                        return e && m.forEach((function(e) {
                            return t(r, e)
                        })), u
                    }
                    return function(e, i, o, l) {
                        var c = "object" === typeof o && null !== o && o.type === Ye && null === o.key;
                        c && (o = o.props.children);
                        var u = "object" === typeof o && null !== o;
                        if (u) switch (o.$$typeof) {
                            case Ke:
                                e: {
                                    for (u = o.key, c = i; null !== c;) {
                                        if (c.key === u) {
                                            if (7 === c.tag ? o.type === Ye : c.elementType === o.type) {
                                                n(e, c.sibling), (i = r(c, o.type === Ye ? o.props.children : o.props)).ref = fr(e, c, o), i.return = e, e = i;
                                                break e
                                            }
                                            n(e, c);
                                            break
                                        }
                                        t(e, c), c = c.sibling
                                    }
                                    o.type === Ye ? ((i = Gi(o.props.children, e.mode, l, o.key)).return = e, e = i) : ((l = Yi(o.type, o.key, o.props, null, e.mode, l)).ref = fr(e, i, o), l.return = e, e = l)
                                }
                                return a(e);
                            case Xe:
                                e: {
                                    for (c = o.key; null !== i;) {
                                        if (i.key === c) {
                                            if (4 === i.tag && i.stateNode.containerInfo === o.containerInfo && i.stateNode.implementation === o.implementation) {
                                                n(e, i.sibling), (i = r(i, o.children || [])).return = e, e = i;
                                                break e
                                            }
                                            n(e, i);
                                            break
                                        }
                                        t(e, i), i = i.sibling
                                    }(i = er(o, e.mode, l)).return = e,
                                    e = i
                                }
                                return a(e)
                        }
                        if ("string" === typeof o || "number" === typeof o) return o = "" + o, null !== i && 6 === i.tag ? (n(e, i.sibling), (i = r(i, o)).return = e, e = i) : (n(e, i), (i = Zi(o, e.mode, l)).return = e, e = i), a(e);
                        if (pr(o)) return m(e, i, o, l);
                        if (at(o)) return g(e, i, o, l);
                        if (u && mr(e, o), "undefined" === typeof o && !c) switch (e.tag) {
                            case 1:
                            case 0:
                                s("152", (l = e.type).displayName || l.name || "Component")
                        }
                        return n(e, i)
                    }
                }
                var yr = gr(!0),
                    vr = gr(!1),
                    br = {},
                    wr = {
                        current: br
                    },
                    _r = {
                        current: br
                    },
                    Sr = {
                        current: br
                    };

                function Cr(e) {
                    return e === br && s("174"), e
                }

                function kr(e, t) {
                    Ai(Sr, t), Ai(_r, e), Ai(wr, br);
                    var n = t.nodeType;
                    switch (n) {
                        case 9:
                        case 11:
                            t = (t = t.documentElement) ? t.namespaceURI : ii(null, "");
                            break;
                        default:
                            t = ii(t = (n = 8 === n ? t.parentNode : t).namespaceURI || null, n = n.tagName)
                    }
                    Pi(wr), Ai(wr, t)
                }

                function Er(e) {
                    Pi(wr), Pi(_r), Pi(Sr)
                }

                function xr(e) {
                    Cr(Sr.current);
                    var t = Cr(wr.current),
                        n = ii(t, e.type);
                    t !== n && (Ai(_r, e), Ai(wr, n))
                }

                function Tr(e) {
                    _r.current === e && (Pi(wr), Pi(_r))
                }
                var Lr = 0,
                    Pr = 2,
                    Ar = 4,
                    Ir = 8,
                    Rr = 16,
                    Nr = 32,
                    Mr = 64,
                    Or = 128,
                    Dr = Ve.ReactCurrentDispatcher,
                    Br = 0,
                    qr = null,
                    Ur = null,
                    zr = null,
                    Fr = null,
                    jr = null,
                    Hr = null,
                    Wr = 0,
                    Vr = null,
                    Qr = 0,
                    $r = !1,
                    Kr = null,
                    Xr = 0;

                function Yr() {
                    s("321")
                }

                function Gr(e, t) {
                    if (null === t) return !1;
                    for (var n = 0; n < t.length && n < e.length; n++)
                        if (!Zt(e[n], t[n])) return !1;
                    return !0
                }

                function Jr(e, t, n, i, r, o) {
                    if (Br = o, qr = t, zr = null !== e ? e.memoizedState : null, Dr.current = null === zr ? ho : po, t = n(i, r), $r) {
                        do {
                            $r = !1, Xr += 1, zr = null !== e ? e.memoizedState : null, Hr = Fr, Vr = jr = Ur = null, Dr.current = po, t = n(i, r)
                        } while ($r);
                        Kr = null, Xr = 0
                    }
                    return Dr.current = uo, (e = qr).memoizedState = Fr, e.expirationTime = Wr, e.updateQueue = Vr, e.effectTag |= Qr, e = null !== Ur && null !== Ur.next, Br = 0, Hr = jr = Fr = zr = Ur = qr = null, Wr = 0, Vr = null, Qr = 0, e && s("300"), t
                }

                function Zr() {
                    Dr.current = uo, Br = 0, Hr = jr = Fr = zr = Ur = qr = null, Wr = 0, Vr = null, Qr = 0, $r = !1, Kr = null, Xr = 0
                }

                function eo() {
                    var e = {
                        memoizedState: null,
                        baseState: null,
                        queue: null,
                        baseUpdate: null,
                        next: null
                    };
                    return null === jr ? Fr = jr = e : jr = jr.next = e, jr
                }

                function to() {
                    if (null !== Hr) Hr = (jr = Hr).next, zr = null !== (Ur = zr) ? Ur.next : null;
                    else {
                        null === zr && s("310");
                        var e = {
                            memoizedState: (Ur = zr).memoizedState,
                            baseState: Ur.baseState,
                            queue: Ur.queue,
                            baseUpdate: Ur.baseUpdate,
                            next: null
                        };
                        jr = null === jr ? Fr = e : jr.next = e, zr = Ur.next
                    }
                    return jr
                }

                function no(e, t) {
                    return "function" === typeof t ? t(e) : t
                }

                function io(e) {
                    var t = to(),
                        n = t.queue;
                    if (null === n && s("311"), n.lastRenderedReducer = e, 0 < Xr) {
                        var i = n.dispatch;
                        if (null !== Kr) {
                            var r = Kr.get(n);
                            if (void 0 !== r) {
                                Kr.delete(n);
                                var o = t.memoizedState;
                                do {
                                    o = e(o, r.action), r = r.next
                                } while (null !== r);
                                return Zt(o, t.memoizedState) || (ko = !0), t.memoizedState = o, t.baseUpdate === n.last && (t.baseState = o), n.lastRenderedState = o, [o, i]
                            }
                        }
                        return [t.memoizedState, i]
                    }
                    i = n.last;
                    var a = t.baseUpdate;
                    if (o = t.baseState, null !== a ? (null !== i && (i.next = null), i = a.next) : i = null !== i ? i.next : null, null !== i) {
                        var l = r = null,
                            c = i,
                            u = !1;
                        do {
                            var d = c.expirationTime;
                            d < Br ? (u || (u = !0, l = a, r = o), d > Wr && (Wr = d)) : o = c.eagerReducer === e ? c.eagerState : e(o, c.action), a = c, c = c.next
                        } while (null !== c && c !== i);
                        u || (l = a, r = o), Zt(o, t.memoizedState) || (ko = !0), t.memoizedState = o, t.baseUpdate = l, t.baseState = r, n.lastRenderedState = o
                    }
                    return [t.memoizedState, n.dispatch]
                }

                function ro(e, t, n, i) {
                    return e = {
                        tag: e,
                        create: t,
                        destroy: n,
                        deps: i,
                        next: null
                    }, null === Vr ? (Vr = {
                        lastEffect: null
                    }).lastEffect = e.next = e : null === (t = Vr.lastEffect) ? Vr.lastEffect = e.next = e : (n = t.next, t.next = e, e.next = n, Vr.lastEffect = e), e
                }

                function oo(e, t, n, i) {
                    var r = eo();
                    Qr |= e, r.memoizedState = ro(t, n, void 0, void 0 === i ? null : i)
                }

                function so(e, t, n, i) {
                    var r = to();
                    i = void 0 === i ? null : i;
                    var o = void 0;
                    if (null !== Ur) {
                        var s = Ur.memoizedState;
                        if (o = s.destroy, null !== i && Gr(i, s.deps)) return void ro(Lr, n, o, i)
                    }
                    Qr |= e, r.memoizedState = ro(t, n, o, i)
                }

                function ao(e, t) {
                    return "function" === typeof t ? (e = e(), t(e), function() {
                        t(null)
                    }) : null !== t && void 0 !== t ? (e = e(), t.current = e, function() {
                        t.current = null
                    }) : void 0
                }

                function lo() {}

                function co(e, t, n) {
                    25 > Xr || s("301");
                    var i = e.alternate;
                    if (e === qr || null !== i && i === qr)
                        if ($r = !0, e = {
                                expirationTime: Br,
                                action: n,
                                eagerReducer: null,
                                eagerState: null,
                                next: null
                            }, null === Kr && (Kr = new Map), void 0 === (n = Kr.get(t))) Kr.set(t, e);
                        else {
                            for (t = n; null !== t.next;) t = t.next;
                            t.next = e
                        }
                    else {
                        Qs();
                        var r = Ta(),
                            o = {
                                expirationTime: r = Js(r, e),
                                action: n,
                                eagerReducer: null,
                                eagerState: null,
                                next: null
                            },
                            a = t.last;
                        if (null === a) o.next = o;
                        else {
                            var l = a.next;
                            null !== l && (o.next = l), a.next = o
                        }
                        if (t.last = o, 0 === e.expirationTime && (null === i || 0 === i.expirationTime) && null !== (i = t.lastRenderedReducer)) try {
                            var c = t.lastRenderedState,
                                u = i(c, n);
                            if (o.eagerReducer = i, o.eagerState = u, Zt(u, c)) return
                        } catch (d) {}
                        na(e, r)
                    }
                }
                var uo = {
                        readContext: Wo,
                        useCallback: Yr,
                        useContext: Yr,
                        useEffect: Yr,
                        useImperativeHandle: Yr,
                        useLayoutEffect: Yr,
                        useMemo: Yr,
                        useReducer: Yr,
                        useRef: Yr,
                        useState: Yr,
                        useDebugValue: Yr
                    },
                    ho = {
                        readContext: Wo,
                        useCallback: function(e, t) {
                            return eo().memoizedState = [e, void 0 === t ? null : t], e
                        },
                        useContext: Wo,
                        useEffect: function(e, t) {
                            return oo(516, Or | Mr, e, t)
                        },
                        useImperativeHandle: function(e, t, n) {
                            return n = null !== n && void 0 !== n ? n.concat([e]) : null, oo(4, Ar | Nr, ao.bind(null, t, e), n)
                        },
                        useLayoutEffect: function(e, t) {
                            return oo(4, Ar | Nr, e, t)
                        },
                        useMemo: function(e, t) {
                            var n = eo();
                            return t = void 0 === t ? null : t, e = e(), n.memoizedState = [e, t], e
                        },
                        useReducer: function(e, t, n) {
                            var i = eo();
                            return t = void 0 !== n ? n(t) : t, i.memoizedState = i.baseState = t, e = (e = i.queue = {
                                last: null,
                                dispatch: null,
                                lastRenderedReducer: e,
                                lastRenderedState: t
                            }).dispatch = co.bind(null, qr, e), [i.memoizedState, e]
                        },
                        useRef: function(e) {
                            return e = {
                                current: e
                            }, eo().memoizedState = e
                        },
                        useState: function(e) {
                            var t = eo();
                            return "function" === typeof e && (e = e()), t.memoizedState = t.baseState = e, e = (e = t.queue = {
                                last: null,
                                dispatch: null,
                                lastRenderedReducer: no,
                                lastRenderedState: e
                            }).dispatch = co.bind(null, qr, e), [t.memoizedState, e]
                        },
                        useDebugValue: lo
                    },
                    po = {
                        readContext: Wo,
                        useCallback: function(e, t) {
                            var n = to();
                            t = void 0 === t ? null : t;
                            var i = n.memoizedState;
                            return null !== i && null !== t && Gr(t, i[1]) ? i[0] : (n.memoizedState = [e, t], e)
                        },
                        useContext: Wo,
                        useEffect: function(e, t) {
                            return so(516, Or | Mr, e, t)
                        },
                        useImperativeHandle: function(e, t, n) {
                            return n = null !== n && void 0 !== n ? n.concat([e]) : null, so(4, Ar | Nr, ao.bind(null, t, e), n)
                        },
                        useLayoutEffect: function(e, t) {
                            return so(4, Ar | Nr, e, t)
                        },
                        useMemo: function(e, t) {
                            var n = to();
                            t = void 0 === t ? null : t;
                            var i = n.memoizedState;
                            return null !== i && null !== t && Gr(t, i[1]) ? i[0] : (e = e(), n.memoizedState = [e, t], e)
                        },
                        useReducer: io,
                        useRef: function() {
                            return to().memoizedState
                        },
                        useState: function(e) {
                            return io(no)
                        },
                        useDebugValue: lo
                    },
                    fo = null,
                    mo = null,
                    go = !1;

                function yo(e, t) {
                    var n = $i(5, null, null, 0);
                    n.elementType = "DELETED", n.type = "DELETED", n.stateNode = t, n.return = e, n.effectTag = 8, null !== e.lastEffect ? (e.lastEffect.nextEffect = n, e.lastEffect = n) : e.firstEffect = e.lastEffect = n
                }

                function vo(e, t) {
                    switch (e.tag) {
                        case 5:
                            var n = e.type;
                            return null !== (t = 1 !== t.nodeType || n.toLowerCase() !== t.nodeName.toLowerCase() ? null : t) && (e.stateNode = t, !0);
                        case 6:
                            return null !== (t = "" === e.pendingProps || 3 !== t.nodeType ? null : t) && (e.stateNode = t, !0);
                        default:
                            return !1
                    }
                }

                function bo(e) {
                    if (go) {
                        var t = mo;
                        if (t) {
                            var n = t;
                            if (!vo(e, t)) {
                                if (!(t = Ei(n)) || !vo(e, t)) return e.effectTag |= 2, go = !1, void(fo = e);
                                yo(fo, n)
                            }
                            fo = e, mo = xi(t)
                        } else e.effectTag |= 2, go = !1, fo = e
                    }
                }

                function wo(e) {
                    for (e = e.return; null !== e && 5 !== e.tag && 3 !== e.tag && 18 !== e.tag;) e = e.return;
                    fo = e
                }

                function _o(e) {
                    if (e !== fo) return !1;
                    if (!go) return wo(e), go = !0, !1;
                    var t = e.type;
                    if (5 !== e.tag || "head" !== t && "body" !== t && !wi(t, e.memoizedProps))
                        for (t = mo; t;) yo(e, t), t = Ei(t);
                    return wo(e), mo = fo ? Ei(e.stateNode) : null, !0
                }

                function So() {
                    mo = fo = null, go = !1
                }
                var Co = Ve.ReactCurrentOwner,
                    ko = !1;

                function Eo(e, t, n, i) {
                    t.child = null === e ? vr(t, null, n, i) : yr(t, e.child, n, i)
                }

                function xo(e, t, n, i, r) {
                    n = n.render;
                    var o = t.ref;
                    return Ho(t, r), i = Jr(e, t, n, i, o, r), null === e || ko ? (t.effectTag |= 1, Eo(e, t, i, r), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= r && (e.expirationTime = 0), Oo(e, t, r))
                }

                function To(e, t, n, i, r, o) {
                    if (null === e) {
                        var s = n.type;
                        return "function" !== typeof s || Ki(s) || void 0 !== s.defaultProps || null !== n.compare || void 0 !== n.defaultProps ? ((e = Yi(n.type, null, i, null, t.mode, o)).ref = t.ref, e.return = t, t.child = e) : (t.tag = 15, t.type = s, Lo(e, t, s, i, r, o))
                    }
                    return s = e.child, r < o && (r = s.memoizedProps, (n = null !== (n = n.compare) ? n : tn)(r, i) && e.ref === t.ref) ? Oo(e, t, o) : (t.effectTag |= 1, (e = Xi(s, i)).ref = t.ref, e.return = t, t.child = e)
                }

                function Lo(e, t, n, i, r, o) {
                    return null !== e && tn(e.memoizedProps, i) && e.ref === t.ref && (ko = !1, r < o) ? Oo(e, t, o) : Ao(e, t, n, i, o)
                }

                function Po(e, t) {
                    var n = t.ref;
                    (null === e && null !== n || null !== e && e.ref !== n) && (t.effectTag |= 128)
                }

                function Ao(e, t, n, i, r) {
                    var o = Di(n) ? Mi : Ri.current;
                    return o = Oi(t, o), Ho(t, r), n = Jr(e, t, n, i, o, r), null === e || ko ? (t.effectTag |= 1, Eo(e, t, n, r), t.child) : (t.updateQueue = e.updateQueue, t.effectTag &= -517, e.expirationTime <= r && (e.expirationTime = 0), Oo(e, t, r))
                }

                function Io(e, t, n, i, r) {
                    if (Di(n)) {
                        var o = !0;
                        Fi(t)
                    } else o = !1;
                    if (Ho(t, r), null === t.stateNode) null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), ur(t, n, i), hr(t, n, i, r), i = !0;
                    else if (null === e) {
                        var s = t.stateNode,
                            a = t.memoizedProps;
                        s.props = a;
                        var l = s.context,
                            c = n.contextType;
                        "object" === typeof c && null !== c ? c = Wo(c) : c = Oi(t, c = Di(n) ? Mi : Ri.current);
                        var u = n.getDerivedStateFromProps,
                            d = "function" === typeof u || "function" === typeof s.getSnapshotBeforeUpdate;
                        d || "function" !== typeof s.UNSAFE_componentWillReceiveProps && "function" !== typeof s.componentWillReceiveProps || (a !== i || l !== c) && dr(t, s, i, c), Xo = !1;
                        var h = t.memoizedState;
                        l = s.state = h;
                        var p = t.updateQueue;
                        null !== p && (rs(t, p, i, s, r), l = t.memoizedState), a !== i || h !== l || Ni.current || Xo ? ("function" === typeof u && (ar(t, n, u, i), l = t.memoizedState), (a = Xo || cr(t, n, a, i, h, l, c)) ? (d || "function" !== typeof s.UNSAFE_componentWillMount && "function" !== typeof s.componentWillMount || ("function" === typeof s.componentWillMount && s.componentWillMount(), "function" === typeof s.UNSAFE_componentWillMount && s.UNSAFE_componentWillMount()), "function" === typeof s.componentDidMount && (t.effectTag |= 4)) : ("function" === typeof s.componentDidMount && (t.effectTag |= 4), t.memoizedProps = i, t.memoizedState = l), s.props = i, s.state = l, s.context = c, i = a) : ("function" === typeof s.componentDidMount && (t.effectTag |= 4), i = !1)
                    } else s = t.stateNode, a = t.memoizedProps, s.props = t.type === t.elementType ? a : or(t.type, a), l = s.context, "object" === typeof(c = n.contextType) && null !== c ? c = Wo(c) : c = Oi(t, c = Di(n) ? Mi : Ri.current), (d = "function" === typeof(u = n.getDerivedStateFromProps) || "function" === typeof s.getSnapshotBeforeUpdate) || "function" !== typeof s.UNSAFE_componentWillReceiveProps && "function" !== typeof s.componentWillReceiveProps || (a !== i || l !== c) && dr(t, s, i, c), Xo = !1, l = t.memoizedState, h = s.state = l, null !== (p = t.updateQueue) && (rs(t, p, i, s, r), h = t.memoizedState), a !== i || l !== h || Ni.current || Xo ? ("function" === typeof u && (ar(t, n, u, i), h = t.memoizedState), (u = Xo || cr(t, n, a, i, l, h, c)) ? (d || "function" !== typeof s.UNSAFE_componentWillUpdate && "function" !== typeof s.componentWillUpdate || ("function" === typeof s.componentWillUpdate && s.componentWillUpdate(i, h, c), "function" === typeof s.UNSAFE_componentWillUpdate && s.UNSAFE_componentWillUpdate(i, h, c)), "function" === typeof s.componentDidUpdate && (t.effectTag |= 4), "function" === typeof s.getSnapshotBeforeUpdate && (t.effectTag |= 256)) : ("function" !== typeof s.componentDidUpdate || a === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 4), "function" !== typeof s.getSnapshotBeforeUpdate || a === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 256), t.memoizedProps = i, t.memoizedState = h), s.props = i, s.state = h, s.context = c, i = u) : ("function" !== typeof s.componentDidUpdate || a === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 4), "function" !== typeof s.getSnapshotBeforeUpdate || a === e.memoizedProps && l === e.memoizedState || (t.effectTag |= 256), i = !1);
                    return Ro(e, t, n, i, o, r)
                }

                function Ro(e, t, n, i, r, o) {
                    Po(e, t);
                    var s = 0 !== (64 & t.effectTag);
                    if (!i && !s) return r && ji(t, n, !1), Oo(e, t, o);
                    i = t.stateNode, Co.current = t;
                    var a = s && "function" !== typeof n.getDerivedStateFromError ? null : i.render();
                    return t.effectTag |= 1, null !== e && s ? (t.child = yr(t, e.child, null, o), t.child = yr(t, null, a, o)) : Eo(e, t, a, o), t.memoizedState = i.state, r && ji(t, n, !0), t.child
                }

                function No(e) {
                    var t = e.stateNode;
                    t.pendingContext ? Ui(0, t.pendingContext, t.pendingContext !== t.context) : t.context && Ui(0, t.context, !1), kr(e, t.containerInfo)
                }

                function Mo(e, t, n) {
                    var i = t.mode,
                        r = t.pendingProps,
                        o = t.memoizedState;
                    if (0 === (64 & t.effectTag)) {
                        o = null;
                        var s = !1
                    } else o = {
                        timedOutAt: null !== o ? o.timedOutAt : 0
                    }, s = !0, t.effectTag &= -65;
                    if (null === e)
                        if (s) {
                            var a = r.fallback;
                            e = Gi(null, i, 0, null), 0 === (1 & t.mode) && (e.child = null !== t.memoizedState ? t.child.child : t.child), i = Gi(a, i, n, null), e.sibling = i, (n = e).return = i.return = t
                        } else n = i = vr(t, null, r.children, n);
                    else null !== e.memoizedState ? (a = (i = e.child).sibling, s ? (n = r.fallback, r = Xi(i, i.pendingProps), 0 === (1 & t.mode) && ((s = null !== t.memoizedState ? t.child.child : t.child) !== i.child && (r.child = s)), i = r.sibling = Xi(a, n, a.expirationTime), n = r, r.childExpirationTime = 0, n.return = i.return = t) : n = i = yr(t, i.child, r.children, n)) : (a = e.child, s ? (s = r.fallback, (r = Gi(null, i, 0, null)).child = a, 0 === (1 & t.mode) && (r.child = null !== t.memoizedState ? t.child.child : t.child), (i = r.sibling = Gi(s, i, n, null)).effectTag |= 2, n = r, r.childExpirationTime = 0, n.return = i.return = t) : i = n = yr(t, a, r.children, n)), t.stateNode = e.stateNode;
                    return t.memoizedState = o, t.child = n, i
                }

                function Oo(e, t, n) {
                    if (null !== e && (t.contextDependencies = e.contextDependencies), t.childExpirationTime < n) return null;
                    if (null !== e && t.child !== e.child && s("153"), null !== t.child) {
                        for (n = Xi(e = t.child, e.pendingProps, e.expirationTime), t.child = n, n.return = t; null !== e.sibling;) e = e.sibling, (n = n.sibling = Xi(e, e.pendingProps, e.expirationTime)).return = t;
                        n.sibling = null
                    }
                    return t.child
                }

                function Do(e, t, n) {
                    var i = t.expirationTime;
                    if (null !== e) {
                        if (e.memoizedProps !== t.pendingProps || Ni.current) ko = !0;
                        else if (i < n) {
                            switch (ko = !1, t.tag) {
                                case 3:
                                    No(t), So();
                                    break;
                                case 5:
                                    xr(t);
                                    break;
                                case 1:
                                    Di(t.type) && Fi(t);
                                    break;
                                case 4:
                                    kr(t, t.stateNode.containerInfo);
                                    break;
                                case 10:
                                    Fo(t, t.memoizedProps.value);
                                    break;
                                case 13:
                                    if (null !== t.memoizedState) return 0 !== (i = t.child.childExpirationTime) && i >= n ? Mo(e, t, n) : null !== (t = Oo(e, t, n)) ? t.sibling : null
                            }
                            return Oo(e, t, n)
                        }
                    } else ko = !1;
                    switch (t.expirationTime = 0, t.tag) {
                        case 2:
                            i = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), e = t.pendingProps;
                            var r = Oi(t, Ri.current);
                            if (Ho(t, n), r = Jr(null, t, i, e, r, n), t.effectTag |= 1, "object" === typeof r && null !== r && "function" === typeof r.render && void 0 === r.$$typeof) {
                                if (t.tag = 1, Zr(), Di(i)) {
                                    var o = !0;
                                    Fi(t)
                                } else o = !1;
                                t.memoizedState = null !== r.state && void 0 !== r.state ? r.state : null;
                                var a = i.getDerivedStateFromProps;
                                "function" === typeof a && ar(t, i, a, e), r.updater = lr, t.stateNode = r, r._reactInternalFiber = t, hr(t, i, e, n), t = Ro(null, t, i, !0, o, n)
                            } else t.tag = 0, Eo(null, t, r, n), t = t.child;
                            return t;
                        case 16:
                            switch (r = t.elementType, null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), o = t.pendingProps, e = function(e) {
                                    var t = e._result;
                                    switch (e._status) {
                                        case 1:
                                            return t;
                                        case 2:
                                        case 0:
                                            throw t;
                                        default:
                                            switch (e._status = 0, (t = (t = e._ctor)()).then((function(t) {
                                                    0 === e._status && (t = t.default, e._status = 1, e._result = t)
                                                }), (function(t) {
                                                    0 === e._status && (e._status = 2, e._result = t)
                                                })), e._status) {
                                                case 1:
                                                    return e._result;
                                                case 2:
                                                    throw e._result
                                            }
                                            throw e._result = t, t
                                    }
                                }(r), t.type = e, r = t.tag = function(e) {
                                    if ("function" === typeof e) return Ki(e) ? 1 : 0;
                                    if (void 0 !== e && null !== e) {
                                        if ((e = e.$$typeof) === nt) return 11;
                                        if (e === rt) return 14
                                    }
                                    return 2
                                }(e), o = or(e, o), a = void 0, r) {
                                case 0:
                                    a = Ao(null, t, e, o, n);
                                    break;
                                case 1:
                                    a = Io(null, t, e, o, n);
                                    break;
                                case 11:
                                    a = xo(null, t, e, o, n);
                                    break;
                                case 14:
                                    a = To(null, t, e, or(e.type, o), i, n);
                                    break;
                                default:
                                    s("306", e, "")
                            }
                            return a;
                        case 0:
                            return i = t.type, r = t.pendingProps, Ao(e, t, i, r = t.elementType === i ? r : or(i, r), n);
                        case 1:
                            return i = t.type, r = t.pendingProps, Io(e, t, i, r = t.elementType === i ? r : or(i, r), n);
                        case 3:
                            return No(t), null === (i = t.updateQueue) && s("282"), r = null !== (r = t.memoizedState) ? r.element : null, rs(t, i, t.pendingProps, null, n), (i = t.memoizedState.element) === r ? (So(), t = Oo(e, t, n)) : (r = t.stateNode, (r = (null === e || null === e.child) && r.hydrate) && (mo = xi(t.stateNode.containerInfo), fo = t, r = go = !0), r ? (t.effectTag |= 2, t.child = vr(t, null, i, n)) : (Eo(e, t, i, n), So()), t = t.child), t;
                        case 5:
                            return xr(t), null === e && bo(t), i = t.type, r = t.pendingProps, o = null !== e ? e.memoizedProps : null, a = r.children, wi(i, r) ? a = null : null !== o && wi(i, o) && (t.effectTag |= 16), Po(e, t), 1 !== n && 1 & t.mode && r.hidden ? (t.expirationTime = t.childExpirationTime = 1, t = null) : (Eo(e, t, a, n), t = t.child), t;
                        case 6:
                            return null === e && bo(t), null;
                        case 13:
                            return Mo(e, t, n);
                        case 4:
                            return kr(t, t.stateNode.containerInfo), i = t.pendingProps, null === e ? t.child = yr(t, null, i, n) : Eo(e, t, i, n), t.child;
                        case 11:
                            return i = t.type, r = t.pendingProps, xo(e, t, i, r = t.elementType === i ? r : or(i, r), n);
                        case 7:
                            return Eo(e, t, t.pendingProps, n), t.child;
                        case 8:
                        case 12:
                            return Eo(e, t, t.pendingProps.children, n), t.child;
                        case 10:
                            e: {
                                if (i = t.type._context, r = t.pendingProps, a = t.memoizedProps, Fo(t, o = r.value), null !== a) {
                                    var l = a.value;
                                    if (0 === (o = Zt(l, o) ? 0 : 0 | ("function" === typeof i._calculateChangedBits ? i._calculateChangedBits(l, o) : 1073741823))) {
                                        if (a.children === r.children && !Ni.current) {
                                            t = Oo(e, t, n);
                                            break e
                                        }
                                    } else
                                        for (null !== (l = t.child) && (l.return = t); null !== l;) {
                                            var c = l.contextDependencies;
                                            if (null !== c) {
                                                a = l.child;
                                                for (var u = c.first; null !== u;) {
                                                    if (u.context === i && 0 !== (u.observedBits & o)) {
                                                        1 === l.tag && ((u = Jo(n)).tag = $o, es(l, u)), l.expirationTime < n && (l.expirationTime = n), null !== (u = l.alternate) && u.expirationTime < n && (u.expirationTime = n), u = n;
                                                        for (var d = l.return; null !== d;) {
                                                            var h = d.alternate;
                                                            if (d.childExpirationTime < u) d.childExpirationTime = u, null !== h && h.childExpirationTime < u && (h.childExpirationTime = u);
                                                            else {
                                                                if (!(null !== h && h.childExpirationTime < u)) break;
                                                                h.childExpirationTime = u
                                                            }
                                                            d = d.return
                                                        }
                                                        c.expirationTime < n && (c.expirationTime = n);
                                                        break
                                                    }
                                                    u = u.next
                                                }
                                            } else a = 10 === l.tag && l.type === t.type ? null : l.child;
                                            if (null !== a) a.return = l;
                                            else
                                                for (a = l; null !== a;) {
                                                    if (a === t) {
                                                        a = null;
                                                        break
                                                    }
                                                    if (null !== (l = a.sibling)) {
                                                        l.return = a.return, a = l;
                                                        break
                                                    }
                                                    a = a.return
                                                }
                                            l = a
                                        }
                                }
                                Eo(e, t, r.children, n),
                                t = t.child
                            }
                            return t;
                        case 9:
                            return r = t.type, i = (o = t.pendingProps).children, Ho(t, n), i = i(r = Wo(r, o.unstable_observedBits)), t.effectTag |= 1, Eo(e, t, i, n), t.child;
                        case 14:
                            return o = or(r = t.type, t.pendingProps), To(e, t, r, o = or(r.type, o), i, n);
                        case 15:
                            return Lo(e, t, t.type, t.pendingProps, i, n);
                        case 17:
                            return i = t.type, r = t.pendingProps, r = t.elementType === i ? r : or(i, r), null !== e && (e.alternate = null, t.alternate = null, t.effectTag |= 2), t.tag = 1, Di(i) ? (e = !0, Fi(t)) : e = !1, Ho(t, n), ur(t, i, r), hr(t, i, r, n), Ro(null, t, i, !0, e, n)
                    }
                    s("156")
                }
                var Bo = {
                        current: null
                    },
                    qo = null,
                    Uo = null,
                    zo = null;

                function Fo(e, t) {
                    var n = e.type._context;
                    Ai(Bo, n._currentValue), n._currentValue = t
                }

                function jo(e) {
                    var t = Bo.current;
                    Pi(Bo), e.type._context._currentValue = t
                }

                function Ho(e, t) {
                    qo = e, zo = Uo = null;
                    var n = e.contextDependencies;
                    null !== n && n.expirationTime >= t && (ko = !0), e.contextDependencies = null
                }

                function Wo(e, t) {
                    return zo !== e && !1 !== t && 0 !== t && ("number" === typeof t && 1073741823 !== t || (zo = e, t = 1073741823), t = {
                        context: e,
                        observedBits: t,
                        next: null
                    }, null === Uo ? (null === qo && s("308"), Uo = t, qo.contextDependencies = {
                        first: t,
                        expirationTime: 0
                    }) : Uo = Uo.next = t), e._currentValue
                }
                var Vo = 0,
                    Qo = 1,
                    $o = 2,
                    Ko = 3,
                    Xo = !1;

                function Yo(e) {
                    return {
                        baseState: e,
                        firstUpdate: null,
                        lastUpdate: null,
                        firstCapturedUpdate: null,
                        lastCapturedUpdate: null,
                        firstEffect: null,
                        lastEffect: null,
                        firstCapturedEffect: null,
                        lastCapturedEffect: null
                    }
                }

                function Go(e) {
                    return {
                        baseState: e.baseState,
                        firstUpdate: e.firstUpdate,
                        lastUpdate: e.lastUpdate,
                        firstCapturedUpdate: null,
                        lastCapturedUpdate: null,
                        firstEffect: null,
                        lastEffect: null,
                        firstCapturedEffect: null,
                        lastCapturedEffect: null
                    }
                }

                function Jo(e) {
                    return {
                        expirationTime: e,
                        tag: Vo,
                        payload: null,
                        callback: null,
                        next: null,
                        nextEffect: null
                    }
                }

                function Zo(e, t) {
                    null === e.lastUpdate ? e.firstUpdate = e.lastUpdate = t : (e.lastUpdate.next = t, e.lastUpdate = t)
                }

                function es(e, t) {
                    var n = e.alternate;
                    if (null === n) {
                        var i = e.updateQueue,
                            r = null;
                        null === i && (i = e.updateQueue = Yo(e.memoizedState))
                    } else i = e.updateQueue, r = n.updateQueue, null === i ? null === r ? (i = e.updateQueue = Yo(e.memoizedState), r = n.updateQueue = Yo(n.memoizedState)) : i = e.updateQueue = Go(r) : null === r && (r = n.updateQueue = Go(i));
                    null === r || i === r ? Zo(i, t) : null === i.lastUpdate || null === r.lastUpdate ? (Zo(i, t), Zo(r, t)) : (Zo(i, t), r.lastUpdate = t)
                }

                function ts(e, t) {
                    var n = e.updateQueue;
                    null === (n = null === n ? e.updateQueue = Yo(e.memoizedState) : ns(e, n)).lastCapturedUpdate ? n.firstCapturedUpdate = n.lastCapturedUpdate = t : (n.lastCapturedUpdate.next = t, n.lastCapturedUpdate = t)
                }

                function ns(e, t) {
                    var n = e.alternate;
                    return null !== n && t === n.updateQueue && (t = e.updateQueue = Go(t)), t
                }

                function is(e, t, n, i, o, s) {
                    switch (n.tag) {
                        case Qo:
                            return "function" === typeof(e = n.payload) ? e.call(s, i, o) : e;
                        case Ko:
                            e.effectTag = -2049 & e.effectTag | 64;
                        case Vo:
                            if (null === (o = "function" === typeof(e = n.payload) ? e.call(s, i, o) : e) || void 0 === o) break;
                            return r({}, i, o);
                        case $o:
                            Xo = !0
                    }
                    return i
                }

                function rs(e, t, n, i, r) {
                    Xo = !1;
                    for (var o = (t = ns(e, t)).baseState, s = null, a = 0, l = t.firstUpdate, c = o; null !== l;) {
                        var u = l.expirationTime;
                        u < r ? (null === s && (s = l, o = c), a < u && (a = u)) : (c = is(e, 0, l, c, n, i), null !== l.callback && (e.effectTag |= 32, l.nextEffect = null, null === t.lastEffect ? t.firstEffect = t.lastEffect = l : (t.lastEffect.nextEffect = l, t.lastEffect = l))), l = l.next
                    }
                    for (u = null, l = t.firstCapturedUpdate; null !== l;) {
                        var d = l.expirationTime;
                        d < r ? (null === u && (u = l, null === s && (o = c)), a < d && (a = d)) : (c = is(e, 0, l, c, n, i), null !== l.callback && (e.effectTag |= 32, l.nextEffect = null, null === t.lastCapturedEffect ? t.firstCapturedEffect = t.lastCapturedEffect = l : (t.lastCapturedEffect.nextEffect = l, t.lastCapturedEffect = l))), l = l.next
                    }
                    null === s && (t.lastUpdate = null), null === u ? t.lastCapturedUpdate = null : e.effectTag |= 32, null === s && null === u && (o = c), t.baseState = o, t.firstUpdate = s, t.firstCapturedUpdate = u, e.expirationTime = a, e.memoizedState = c
                }

                function os(e, t, n) {
                    null !== t.firstCapturedUpdate && (null !== t.lastUpdate && (t.lastUpdate.next = t.firstCapturedUpdate, t.lastUpdate = t.lastCapturedUpdate), t.firstCapturedUpdate = t.lastCapturedUpdate = null), ss(t.firstEffect, n), t.firstEffect = t.lastEffect = null, ss(t.firstCapturedEffect, n), t.firstCapturedEffect = t.lastCapturedEffect = null
                }

                function ss(e, t) {
                    for (; null !== e;) {
                        var n = e.callback;
                        if (null !== n) {
                            e.callback = null;
                            var i = t;
                            "function" !== typeof n && s("191", n), n.call(i)
                        }
                        e = e.nextEffect
                    }
                }

                function as(e, t) {
                    return {
                        value: e,
                        source: t,
                        stack: ct(t)
                    }
                }

                function ls(e) {
                    e.effectTag |= 4
                }
                var cs = void 0,
                    us = void 0,
                    ds = void 0,
                    hs = void 0;
                cs = function(e, t) {
                    for (var n = t.child; null !== n;) {
                        if (5 === n.tag || 6 === n.tag) e.appendChild(n.stateNode);
                        else if (4 !== n.tag && null !== n.child) {
                            n.child.return = n, n = n.child;
                            continue
                        }
                        if (n === t) break;
                        for (; null === n.sibling;) {
                            if (null === n.return || n.return === t) return;
                            n = n.return
                        }
                        n.sibling.return = n.return, n = n.sibling
                    }
                }, us = function() {}, ds = function(e, t, n, i, o) {
                    var s = e.memoizedProps;
                    if (s !== i) {
                        var a = t.stateNode;
                        switch (Cr(wr.current), e = null, n) {
                            case "input":
                                s = wt(a, s), i = wt(a, i), e = [];
                                break;
                            case "option":
                                s = Xn(a, s), i = Xn(a, i), e = [];
                                break;
                            case "select":
                                s = r({}, s, {
                                    value: void 0
                                }), i = r({}, i, {
                                    value: void 0
                                }), e = [];
                                break;
                            case "textarea":
                                s = Gn(a, s), i = Gn(a, i), e = [];
                                break;
                            default:
                                "function" !== typeof s.onClick && "function" === typeof i.onClick && (a.onclick = gi)
                        }
                        pi(n, i), a = n = void 0;
                        var l = null;
                        for (n in s)
                            if (!i.hasOwnProperty(n) && s.hasOwnProperty(n) && null != s[n])
                                if ("style" === n) {
                                    var c = s[n];
                                    for (a in c) c.hasOwnProperty(a) && (l || (l = {}), l[a] = "")
                                } else "dangerouslySetInnerHTML" !== n && "children" !== n && "suppressContentEditableWarning" !== n && "suppressHydrationWarning" !== n && "autoFocus" !== n && (w.hasOwnProperty(n) ? e || (e = []) : (e = e || []).push(n, null));
                        for (n in i) {
                            var u = i[n];
                            if (c = null != s ? s[n] : void 0, i.hasOwnProperty(n) && u !== c && (null != u || null != c))
                                if ("style" === n)
                                    if (c) {
                                        for (a in c) !c.hasOwnProperty(a) || u && u.hasOwnProperty(a) || (l || (l = {}), l[a] = "");
                                        for (a in u) u.hasOwnProperty(a) && c[a] !== u[a] && (l || (l = {}), l[a] = u[a])
                                    } else l || (e || (e = []), e.push(n, l)), l = u;
                            else "dangerouslySetInnerHTML" === n ? (u = u ? u.__html : void 0, c = c ? c.__html : void 0, null != u && c !== u && (e = e || []).push(n, "" + u)) : "children" === n ? c === u || "string" !== typeof u && "number" !== typeof u || (e = e || []).push(n, "" + u) : "suppressContentEditableWarning" !== n && "suppressHydrationWarning" !== n && (w.hasOwnProperty(n) ? (null != u && mi(o, n), e || c === u || (e = [])) : (e = e || []).push(n, u))
                        }
                        l && (e = e || []).push("style", l), o = e, (t.updateQueue = o) && ls(t)
                    }
                }, hs = function(e, t, n, i) {
                    n !== i && ls(t)
                };
                var ps = "function" === typeof WeakSet ? WeakSet : Set;

                function fs(e, t) {
                    var n = t.source,
                        i = t.stack;
                    null === i && null !== n && (i = ct(n)), null !== n && lt(n.type), t = t.value, null !== e && 1 === e.tag && lt(e.type);
                    try {
                        console.error(t)
                    } catch (r) {
                        setTimeout((function() {
                            throw r
                        }))
                    }
                }

                function ms(e) {
                    var t = e.ref;
                    if (null !== t)
                        if ("function" === typeof t) try {
                            t(null)
                        } catch (n) {
                            Gs(e, n)
                        } else t.current = null
                }

                function gs(e, t, n) {
                    if (null !== (n = null !== (n = n.updateQueue) ? n.lastEffect : null)) {
                        var i = n = n.next;
                        do {
                            if ((i.tag & e) !== Lr) {
                                var r = i.destroy;
                                i.destroy = void 0, void 0 !== r && r()
                            }(i.tag & t) !== Lr && (r = i.create, i.destroy = r()), i = i.next
                        } while (i !== n)
                    }
                }

                function ys(e) {
                    switch ("function" === typeof Wi && Wi(e), e.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            var t = e.updateQueue;
                            if (null !== t && null !== (t = t.lastEffect)) {
                                var n = t = t.next;
                                do {
                                    var i = n.destroy;
                                    if (void 0 !== i) {
                                        var r = e;
                                        try {
                                            i()
                                        } catch (o) {
                                            Gs(r, o)
                                        }
                                    }
                                    n = n.next
                                } while (n !== t)
                            }
                            break;
                        case 1:
                            if (ms(e), "function" === typeof(t = e.stateNode).componentWillUnmount) try {
                                t.props = e.memoizedProps, t.state = e.memoizedState, t.componentWillUnmount()
                            } catch (o) {
                                Gs(e, o)
                            }
                            break;
                        case 5:
                            ms(e);
                            break;
                        case 4:
                            ws(e)
                    }
                }

                function vs(e) {
                    return 5 === e.tag || 3 === e.tag || 4 === e.tag
                }

                function bs(e) {
                    e: {
                        for (var t = e.return; null !== t;) {
                            if (vs(t)) {
                                var n = t;
                                break e
                            }
                            t = t.return
                        }
                        s("160"),
                        n = void 0
                    }
                    var i = t = void 0;
                    switch (n.tag) {
                        case 5:
                            t = n.stateNode, i = !1;
                            break;
                        case 3:
                        case 4:
                            t = n.stateNode.containerInfo, i = !0;
                            break;
                        default:
                            s("161")
                    }
                    16 & n.effectTag && (ai(t, ""), n.effectTag &= -17);e: t: for (n = e;;) {
                        for (; null === n.sibling;) {
                            if (null === n.return || vs(n.return)) {
                                n = null;
                                break e
                            }
                            n = n.return
                        }
                        for (n.sibling.return = n.return, n = n.sibling; 5 !== n.tag && 6 !== n.tag && 18 !== n.tag;) {
                            if (2 & n.effectTag) continue t;
                            if (null === n.child || 4 === n.tag) continue t;
                            n.child.return = n, n = n.child
                        }
                        if (!(2 & n.effectTag)) {
                            n = n.stateNode;
                            break e
                        }
                    }
                    for (var r = e;;) {
                        if (5 === r.tag || 6 === r.tag)
                            if (n)
                                if (i) {
                                    var o = t,
                                        a = r.stateNode,
                                        l = n;
                                    8 === o.nodeType ? o.parentNode.insertBefore(a, l) : o.insertBefore(a, l)
                                } else t.insertBefore(r.stateNode, n);
                        else i ? (a = t, l = r.stateNode, 8 === a.nodeType ? (o = a.parentNode).insertBefore(l, a) : (o = a).appendChild(l), null !== (a = a._reactRootContainer) && void 0 !== a || null !== o.onclick || (o.onclick = gi)) : t.appendChild(r.stateNode);
                        else if (4 !== r.tag && null !== r.child) {
                            r.child.return = r, r = r.child;
                            continue
                        }
                        if (r === e) break;
                        for (; null === r.sibling;) {
                            if (null === r.return || r.return === e) return;
                            r = r.return
                        }
                        r.sibling.return = r.return, r = r.sibling
                    }
                }

                function ws(e) {
                    for (var t = e, n = !1, i = void 0, r = void 0;;) {
                        if (!n) {
                            n = t.return;
                            e: for (;;) {
                                switch (null === n && s("160"), n.tag) {
                                    case 5:
                                        i = n.stateNode, r = !1;
                                        break e;
                                    case 3:
                                    case 4:
                                        i = n.stateNode.containerInfo, r = !0;
                                        break e
                                }
                                n = n.return
                            }
                            n = !0
                        }
                        if (5 === t.tag || 6 === t.tag) {
                            e: for (var o = t, a = o;;)
                                if (ys(a), null !== a.child && 4 !== a.tag) a.child.return = a, a = a.child;
                                else {
                                    if (a === o) break;
                                    for (; null === a.sibling;) {
                                        if (null === a.return || a.return === o) break e;
                                        a = a.return
                                    }
                                    a.sibling.return = a.return, a = a.sibling
                                }r ? (o = i, a = t.stateNode, 8 === o.nodeType ? o.parentNode.removeChild(a) : o.removeChild(a)) : i.removeChild(t.stateNode)
                        }
                        else if (4 === t.tag) {
                            if (null !== t.child) {
                                i = t.stateNode.containerInfo, r = !0, t.child.return = t, t = t.child;
                                continue
                            }
                        } else if (ys(t), null !== t.child) {
                            t.child.return = t, t = t.child;
                            continue
                        }
                        if (t === e) break;
                        for (; null === t.sibling;) {
                            if (null === t.return || t.return === e) return;
                            4 === (t = t.return).tag && (n = !1)
                        }
                        t.sibling.return = t.return, t = t.sibling
                    }
                }

                function _s(e, t) {
                    switch (t.tag) {
                        case 0:
                        case 11:
                        case 14:
                        case 15:
                            gs(Ar, Ir, t);
                            break;
                        case 1:
                        case 3:
                        case 12:
                        case 17:
                            break;
                        case 5:
                            var n = t.stateNode;
                            if (null != n) {
                                var i = t.memoizedProps;
                                e = null !== e ? e.memoizedProps : i;
                                var r = t.type,
                                    o = t.updateQueue;
                                t.updateQueue = null, null !== o && function(e, t, n, i, r) {
                                    e[O] = r, "input" === n && "radio" === r.type && null != r.name && St(e, r), fi(n, i), i = fi(n, r);
                                    for (var o = 0; o < t.length; o += 2) {
                                        var s = t[o],
                                            a = t[o + 1];
                                        "style" === s ? di(e, a) : "dangerouslySetInnerHTML" === s ? si(e, a) : "children" === s ? ai(e, a) : vt(e, s, a, i)
                                    }
                                    switch (n) {
                                        case "input":
                                            Ct(e, r);
                                            break;
                                        case "textarea":
                                            Zn(e, r);
                                            break;
                                        case "select":
                                            t = e._wrapperState.wasMultiple, e._wrapperState.wasMultiple = !!r.multiple, null != (n = r.value) ? Yn(e, !!r.multiple, n, !1) : t !== !!r.multiple && (null != r.defaultValue ? Yn(e, !!r.multiple, r.defaultValue, !0) : Yn(e, !!r.multiple, r.multiple ? [] : "", !1))
                                    }
                                }(n, o, r, e, i)
                            }
                            break;
                        case 6:
                            null === t.stateNode && s("162"), t.stateNode.nodeValue = t.memoizedProps;
                            break;
                        case 13:
                            if (n = t.memoizedState, i = void 0, e = t, null === n ? i = !1 : (i = !0, e = t.child, 0 === n.timedOutAt && (n.timedOutAt = Ta())), null !== e && function(e, t) {
                                    for (var n = e;;) {
                                        if (5 === n.tag) {
                                            var i = n.stateNode;
                                            if (t) i.style.display = "none";
                                            else {
                                                i = n.stateNode;
                                                var r = n.memoizedProps.style;
                                                r = void 0 !== r && null !== r && r.hasOwnProperty("display") ? r.display : null, i.style.display = ui("display", r)
                                            }
                                        } else if (6 === n.tag) n.stateNode.nodeValue = t ? "" : n.memoizedProps;
                                        else {
                                            if (13 === n.tag && null !== n.memoizedState) {
                                                (i = n.child.sibling).return = n, n = i;
                                                continue
                                            }
                                            if (null !== n.child) {
                                                n.child.return = n, n = n.child;
                                                continue
                                            }
                                        }
                                        if (n === e) break;
                                        for (; null === n.sibling;) {
                                            if (null === n.return || n.return === e) return;
                                            n = n.return
                                        }
                                        n.sibling.return = n.return, n = n.sibling
                                    }
                                }(e, i), null !== (n = t.updateQueue)) {
                                t.updateQueue = null;
                                var a = t.stateNode;
                                null === a && (a = t.stateNode = new ps), n.forEach((function(e) {
                                    var n = ea.bind(null, t, e);
                                    a.has(e) || (a.add(e), e.then(n, n))
                                }))
                            }
                            break;
                        default:
                            s("163")
                    }
                }
                var Ss = "function" === typeof WeakMap ? WeakMap : Map;

                function Cs(e, t, n) {
                    (n = Jo(n)).tag = Ko, n.payload = {
                        element: null
                    };
                    var i = t.value;
                    return n.callback = function() {
                        Ba(i), fs(e, t)
                    }, n
                }

                function ks(e, t, n) {
                    (n = Jo(n)).tag = Ko;
                    var i = e.type.getDerivedStateFromError;
                    if ("function" === typeof i) {
                        var r = t.value;
                        n.payload = function() {
                            return i(r)
                        }
                    }
                    var o = e.stateNode;
                    return null !== o && "function" === typeof o.componentDidCatch && (n.callback = function() {
                        "function" !== typeof i && (null === zs ? zs = new Set([this]) : zs.add(this));
                        var n = t.value,
                            r = t.stack;
                        fs(e, t), this.componentDidCatch(n, {
                            componentStack: null !== r ? r : ""
                        })
                    }), n
                }

                function Es(e) {
                    switch (e.tag) {
                        case 1:
                            Di(e.type) && Bi();
                            var t = e.effectTag;
                            return 2048 & t ? (e.effectTag = -2049 & t | 64, e) : null;
                        case 3:
                            return Er(), qi(), 0 !== (64 & (t = e.effectTag)) && s("285"), e.effectTag = -2049 & t | 64, e;
                        case 5:
                            return Tr(e), null;
                        case 13:
                            return 2048 & (t = e.effectTag) ? (e.effectTag = -2049 & t | 64, e) : null;
                        case 18:
                        default:
                            return null;
                        case 4:
                            return Er(), null;
                        case 10:
                            return jo(e), null
                    }
                }
                var xs = Ve.ReactCurrentDispatcher,
                    Ts = Ve.ReactCurrentOwner,
                    Ls = 1073741822,
                    Ps = !1,
                    As = null,
                    Is = null,
                    Rs = 0,
                    Ns = -1,
                    Ms = !1,
                    Os = null,
                    Ds = !1,
                    Bs = null,
                    qs = null,
                    Us = null,
                    zs = null;

                function Fs() {
                    if (null !== As)
                        for (var e = As.return; null !== e;) {
                            var t = e;
                            switch (t.tag) {
                                case 1:
                                    var n = t.type.childContextTypes;
                                    null !== n && void 0 !== n && Bi();
                                    break;
                                case 3:
                                    Er(), qi();
                                    break;
                                case 5:
                                    Tr(t);
                                    break;
                                case 4:
                                    Er();
                                    break;
                                case 10:
                                    jo(t)
                            }
                            e = e.return
                        }
                    Is = null, Rs = 0, Ns = -1, Ms = !1, As = null
                }

                function js() {
                    for (; null !== Os;) {
                        var e = Os.effectTag;
                        if (16 & e && ai(Os.stateNode, ""), 128 & e) {
                            var t = Os.alternate;
                            null !== t && (null !== (t = t.ref) && ("function" === typeof t ? t(null) : t.current = null))
                        }
                        switch (14 & e) {
                            case 2:
                                bs(Os), Os.effectTag &= -3;
                                break;
                            case 6:
                                bs(Os), Os.effectTag &= -3, _s(Os.alternate, Os);
                                break;
                            case 4:
                                _s(Os.alternate, Os);
                                break;
                            case 8:
                                ws(e = Os), e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null, null !== (e = e.alternate) && (e.return = null, e.child = null, e.memoizedState = null, e.updateQueue = null)
                        }
                        Os = Os.nextEffect
                    }
                }

                function Hs() {
                    for (; null !== Os;) {
                        if (256 & Os.effectTag) e: {
                            var e = Os.alternate,
                                t = Os;
                            switch (t.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    gs(Pr, Lr, t);
                                    break e;
                                case 1:
                                    if (256 & t.effectTag && null !== e) {
                                        var n = e.memoizedProps,
                                            i = e.memoizedState;
                                        t = (e = t.stateNode).getSnapshotBeforeUpdate(t.elementType === t.type ? n : or(t.type, n), i), e.__reactInternalSnapshotBeforeUpdate = t
                                    }
                                    break e;
                                case 3:
                                case 5:
                                case 6:
                                case 4:
                                case 17:
                                    break e;
                                default:
                                    s("163")
                            }
                        }
                        Os = Os.nextEffect
                    }
                }

                function Ws(e, t) {
                    for (; null !== Os;) {
                        var n = Os.effectTag;
                        if (36 & n) {
                            var i = Os.alternate,
                                r = Os,
                                o = t;
                            switch (r.tag) {
                                case 0:
                                case 11:
                                case 15:
                                    gs(Rr, Nr, r);
                                    break;
                                case 1:
                                    var a = r.stateNode;
                                    if (4 & r.effectTag)
                                        if (null === i) a.componentDidMount();
                                        else {
                                            var l = r.elementType === r.type ? i.memoizedProps : or(r.type, i.memoizedProps);
                                            a.componentDidUpdate(l, i.memoizedState, a.__reactInternalSnapshotBeforeUpdate)
                                        } null !== (i = r.updateQueue) && os(0, i, a);
                                    break;
                                case 3:
                                    if (null !== (i = r.updateQueue)) {
                                        if (a = null, null !== r.child) switch (r.child.tag) {
                                            case 5:
                                            case 1:
                                                a = r.child.stateNode
                                        }
                                        os(0, i, a)
                                    }
                                    break;
                                case 5:
                                    o = r.stateNode, null === i && 4 & r.effectTag && bi(r.type, r.memoizedProps) && o.focus();
                                    break;
                                case 6:
                                case 4:
                                case 12:
                                case 13:
                                case 17:
                                    break;
                                default:
                                    s("163")
                            }
                        }
                        128 & n && (null !== (r = Os.ref) && (o = Os.stateNode, "function" === typeof r ? r(o) : r.current = o)), 512 & n && (Bs = e), Os = Os.nextEffect
                    }
                }

                function Vs(e, t) {
                    Us = qs = Bs = null;
                    var n = la;
                    la = !0;
                    do {
                        if (512 & t.effectTag) {
                            var i = !1,
                                r = void 0;
                            try {
                                var o = t;
                                gs(Or, Lr, o), gs(Lr, Mr, o)
                            } catch (s) {
                                i = !0, r = s
                            }
                            i && Gs(t, r)
                        }
                        t = t.nextEffect
                    } while (null !== t);
                    la = n, 0 !== (n = e.expirationTime) && La(e, n), fa || la || Na(1073741823, !1)
                }

                function Qs() {
                    null !== qs && ki(qs), null !== Us && Us()
                }

                function $s(e, t) {
                    Ds = Ps = !0, e.current === t && s("177");
                    var n = e.pendingCommitExpirationTime;
                    0 === n && s("261"), e.pendingCommitExpirationTime = 0;
                    var i = t.expirationTime,
                        r = t.childExpirationTime;
                    for (function(e, t) {
                            if (e.didError = !1, 0 === t) e.earliestPendingTime = 0, e.latestPendingTime = 0, e.earliestSuspendedTime = 0, e.latestSuspendedTime = 0, e.latestPingedTime = 0;
                            else {
                                t < e.latestPingedTime && (e.latestPingedTime = 0);
                                var n = e.latestPendingTime;
                                0 !== n && (n > t ? e.earliestPendingTime = e.latestPendingTime = 0 : e.earliestPendingTime > t && (e.earliestPendingTime = e.latestPendingTime)), 0 === (n = e.earliestSuspendedTime) ? tr(e, t) : t < e.latestSuspendedTime ? (e.earliestSuspendedTime = 0, e.latestSuspendedTime = 0, e.latestPingedTime = 0, tr(e, t)) : t > n && tr(e, t)
                            }
                            rr(0, e)
                        }(e, r > i ? r : i), Ts.current = null, i = void 0, 1 < t.effectTag ? null !== t.lastEffect ? (t.lastEffect.nextEffect = t, i = t.firstEffect) : i = t : i = t.firstEffect, yi = En, vi = function() {
                            var e = qn();
                            if (Un(e)) {
                                if ("selectionStart" in e) var t = {
                                    start: e.selectionStart,
                                    end: e.selectionEnd
                                };
                                else e: {
                                    var n = (t = (t = e.ownerDocument) && t.defaultView || window).getSelection && t.getSelection();
                                    if (n && 0 !== n.rangeCount) {
                                        t = n.anchorNode;
                                        var i = n.anchorOffset,
                                            r = n.focusNode;
                                        n = n.focusOffset;
                                        try {
                                            t.nodeType, r.nodeType
                                        } catch (p) {
                                            t = null;
                                            break e
                                        }
                                        var o = 0,
                                            s = -1,
                                            a = -1,
                                            l = 0,
                                            c = 0,
                                            u = e,
                                            d = null;
                                        t: for (;;) {
                                            for (var h; u !== t || 0 !== i && 3 !== u.nodeType || (s = o + i), u !== r || 0 !== n && 3 !== u.nodeType || (a = o + n), 3 === u.nodeType && (o += u.nodeValue.length), null !== (h = u.firstChild);) d = u, u = h;
                                            for (;;) {
                                                if (u === e) break t;
                                                if (d === t && ++l === i && (s = o), d === r && ++c === n && (a = o), null !== (h = u.nextSibling)) break;
                                                d = (u = d).parentNode
                                            }
                                            u = h
                                        }
                                        t = -1 === s || -1 === a ? null : {
                                            start: s,
                                            end: a
                                        }
                                    } else t = null
                                }
                                t = t || {
                                    start: 0,
                                    end: 0
                                }
                            } else t = null;
                            return {
                                focusedElem: e,
                                selectionRange: t
                            }
                        }(), En = !1, Os = i; null !== Os;) {
                        r = !1;
                        var a = void 0;
                        try {
                            Hs()
                        } catch (c) {
                            r = !0, a = c
                        }
                        r && (null === Os && s("178"), Gs(Os, a), null !== Os && (Os = Os.nextEffect))
                    }
                    for (Os = i; null !== Os;) {
                        r = !1, a = void 0;
                        try {
                            js()
                        } catch (c) {
                            r = !0, a = c
                        }
                        r && (null === Os && s("178"), Gs(Os, a), null !== Os && (Os = Os.nextEffect))
                    }
                    for (zn(vi), vi = null, En = !!yi, yi = null, e.current = t, Os = i; null !== Os;) {
                        r = !1, a = void 0;
                        try {
                            Ws(e, n)
                        } catch (c) {
                            r = !0, a = c
                        }
                        r && (null === Os && s("178"), Gs(Os, a), null !== Os && (Os = Os.nextEffect))
                    }
                    if (null !== i && null !== Bs) {
                        var l = Vs.bind(null, e, i);
                        qs = o.unstable_runWithPriority(o.unstable_NormalPriority, (function() {
                            return Ci(l)
                        })), Us = l
                    }
                    Ps = Ds = !1, "function" === typeof Hi && Hi(t.stateNode), n = t.expirationTime, 0 === (t = (t = t.childExpirationTime) > n ? t : n) && (zs = null),
                        function(e, t) {
                            e.expirationTime = t, e.finishedWork = null
                        }(e, t)
                }

                function Ks(e) {
                    for (;;) {
                        var t = e.alternate,
                            n = e.return,
                            i = e.sibling;
                        if (0 === (1024 & e.effectTag)) {
                            As = e;
                            e: {
                                var o = t,
                                    a = Rs,
                                    l = (t = e).pendingProps;
                                switch (t.tag) {
                                    case 2:
                                    case 16:
                                    case 15:
                                    case 0:
                                    case 11:
                                    case 7:
                                    case 8:
                                    case 12:
                                    case 9:
                                    case 14:
                                    case 18:
                                        break;
                                    case 1:
                                    case 17:
                                        Di(t.type) && Bi();
                                        break;
                                    case 3:
                                        Er(), qi(), (l = t.stateNode).pendingContext && (l.context = l.pendingContext, l.pendingContext = null), null !== o && null !== o.child || (_o(t), t.effectTag &= -3), us(t);
                                        break;
                                    case 5:
                                        Tr(t);
                                        var c = Cr(Sr.current);
                                        if (a = t.type, null !== o && null != t.stateNode) ds(o, t, a, l, c), o.ref !== t.ref && (t.effectTag |= 128);
                                        else if (l) {
                                            var u = Cr(wr.current);
                                            if (_o(t)) {
                                                o = (l = t).stateNode;
                                                var d = l.type,
                                                    h = l.memoizedProps,
                                                    p = c;
                                                switch (o[M] = l, o[O] = h, a = void 0, c = d) {
                                                    case "iframe":
                                                    case "object":
                                                        xn("load", o);
                                                        break;
                                                    case "video":
                                                    case "audio":
                                                        for (d = 0; d < ne.length; d++) xn(ne[d], o);
                                                        break;
                                                    case "source":
                                                        xn("error", o);
                                                        break;
                                                    case "img":
                                                    case "image":
                                                    case "link":
                                                        xn("error", o), xn("load", o);
                                                        break;
                                                    case "form":
                                                        xn("reset", o), xn("submit", o);
                                                        break;
                                                    case "details":
                                                        xn("toggle", o);
                                                        break;
                                                    case "input":
                                                        _t(o, h), xn("invalid", o), mi(p, "onChange");
                                                        break;
                                                    case "select":
                                                        o._wrapperState = {
                                                            wasMultiple: !!h.multiple
                                                        }, xn("invalid", o), mi(p, "onChange");
                                                        break;
                                                    case "textarea":
                                                        Jn(o, h), xn("invalid", o), mi(p, "onChange")
                                                }
                                                for (a in pi(c, h), d = null, h) h.hasOwnProperty(a) && (u = h[a], "children" === a ? "string" === typeof u ? o.textContent !== u && (d = ["children", u]) : "number" === typeof u && o.textContent !== "" + u && (d = ["children", "" + u]) : w.hasOwnProperty(a) && null != u && mi(p, a));
                                                switch (c) {
                                                    case "input":
                                                        He(o), kt(o, h, !0);
                                                        break;
                                                    case "textarea":
                                                        He(o), ei(o);
                                                        break;
                                                    case "select":
                                                    case "option":
                                                        break;
                                                    default:
                                                        "function" === typeof h.onClick && (o.onclick = gi)
                                                }
                                                a = d, l.updateQueue = a, (l = null !== a) && ls(t)
                                            } else {
                                                h = t, p = a, o = l, d = 9 === c.nodeType ? c : c.ownerDocument, u === ti.html && (u = ni(p)), u === ti.html ? "script" === p ? ((o = d.createElement("div")).innerHTML = "<script><\/script>", d = o.removeChild(o.firstChild)) : "string" === typeof o.is ? d = d.createElement(p, {
                                                    is: o.is
                                                }) : (d = d.createElement(p), "select" === p && (p = d, o.multiple ? p.multiple = !0 : o.size && (p.size = o.size))) : d = d.createElementNS(u, p), (o = d)[M] = h, o[O] = l, cs(o, t, !1, !1), p = o;
                                                var f = c,
                                                    m = fi(d = a, h = l);
                                                switch (d) {
                                                    case "iframe":
                                                    case "object":
                                                        xn("load", p), c = h;
                                                        break;
                                                    case "video":
                                                    case "audio":
                                                        for (c = 0; c < ne.length; c++) xn(ne[c], p);
                                                        c = h;
                                                        break;
                                                    case "source":
                                                        xn("error", p), c = h;
                                                        break;
                                                    case "img":
                                                    case "image":
                                                    case "link":
                                                        xn("error", p), xn("load", p), c = h;
                                                        break;
                                                    case "form":
                                                        xn("reset", p), xn("submit", p), c = h;
                                                        break;
                                                    case "details":
                                                        xn("toggle", p), c = h;
                                                        break;
                                                    case "input":
                                                        _t(p, h), c = wt(p, h), xn("invalid", p), mi(f, "onChange");
                                                        break;
                                                    case "option":
                                                        c = Xn(p, h);
                                                        break;
                                                    case "select":
                                                        p._wrapperState = {
                                                            wasMultiple: !!h.multiple
                                                        }, c = r({}, h, {
                                                            value: void 0
                                                        }), xn("invalid", p), mi(f, "onChange");
                                                        break;
                                                    case "textarea":
                                                        Jn(p, h), c = Gn(p, h), xn("invalid", p), mi(f, "onChange");
                                                        break;
                                                    default:
                                                        c = h
                                                }
                                                pi(d, c), u = void 0;
                                                var g = d,
                                                    y = p,
                                                    v = c;
                                                for (u in v)
                                                    if (v.hasOwnProperty(u)) {
                                                        var b = v[u];
                                                        "style" === u ? di(y, b) : "dangerouslySetInnerHTML" === u ? null != (b = b ? b.__html : void 0) && si(y, b) : "children" === u ? "string" === typeof b ? ("textarea" !== g || "" !== b) && ai(y, b) : "number" === typeof b && ai(y, "" + b) : "suppressContentEditableWarning" !== u && "suppressHydrationWarning" !== u && "autoFocus" !== u && (w.hasOwnProperty(u) ? null != b && mi(f, u) : null != b && vt(y, u, b, m))
                                                    } switch (d) {
                                                    case "input":
                                                        He(p), kt(p, h, !1);
                                                        break;
                                                    case "textarea":
                                                        He(p), ei(p);
                                                        break;
                                                    case "option":
                                                        null != h.value && p.setAttribute("value", "" + bt(h.value));
                                                        break;
                                                    case "select":
                                                        (c = p).multiple = !!h.multiple, null != (p = h.value) ? Yn(c, !!h.multiple, p, !1) : null != h.defaultValue && Yn(c, !!h.multiple, h.defaultValue, !0);
                                                        break;
                                                    default:
                                                        "function" === typeof c.onClick && (p.onclick = gi)
                                                }(l = bi(a, l)) && ls(t), t.stateNode = o
                                            }
                                            null !== t.ref && (t.effectTag |= 128)
                                        } else null === t.stateNode && s("166");
                                        break;
                                    case 6:
                                        o && null != t.stateNode ? hs(o, t, o.memoizedProps, l) : ("string" !== typeof l && (null === t.stateNode && s("166")), o = Cr(Sr.current), Cr(wr.current), _o(t) ? (a = (l = t).stateNode, o = l.memoizedProps, a[M] = l, (l = a.nodeValue !== o) && ls(t)) : (a = t, (l = (9 === o.nodeType ? o : o.ownerDocument).createTextNode(l))[M] = t, a.stateNode = l));
                                        break;
                                    case 13:
                                        if (l = t.memoizedState, 0 !== (64 & t.effectTag)) {
                                            t.expirationTime = a, As = t;
                                            break e
                                        }
                                        l = null !== l, a = null !== o && null !== o.memoizedState, null !== o && !l && a && (null !== (o = o.child.sibling) && (null !== (c = t.firstEffect) ? (t.firstEffect = o, o.nextEffect = c) : (t.firstEffect = t.lastEffect = o, o.nextEffect = null), o.effectTag = 8)), (l || a) && (t.effectTag |= 4);
                                        break;
                                    case 4:
                                        Er(), us(t);
                                        break;
                                    case 10:
                                        jo(t);
                                        break;
                                    default:
                                        s("156")
                                }
                                As = null
                            }
                            if (t = e, 1 === Rs || 1 !== t.childExpirationTime) {
                                for (l = 0, a = t.child; null !== a;)(o = a.expirationTime) > l && (l = o), (c = a.childExpirationTime) > l && (l = c), a = a.sibling;
                                t.childExpirationTime = l
                            }
                            if (null !== As) return As;
                            null !== n && 0 === (1024 & n.effectTag) && (null === n.firstEffect && (n.firstEffect = e.firstEffect), null !== e.lastEffect && (null !== n.lastEffect && (n.lastEffect.nextEffect = e.firstEffect), n.lastEffect = e.lastEffect), 1 < e.effectTag && (null !== n.lastEffect ? n.lastEffect.nextEffect = e : n.firstEffect = e, n.lastEffect = e))
                        } else {
                            if (null !== (e = Es(e))) return e.effectTag &= 1023, e;
                            null !== n && (n.firstEffect = n.lastEffect = null, n.effectTag |= 1024)
                        }
                        if (null !== i) return i;
                        if (null === n) break;
                        e = n
                    }
                    return null
                }

                function Xs(e) {
                    var t = Do(e.alternate, e, Rs);
                    return e.memoizedProps = e.pendingProps, null === t && (t = Ks(e)), Ts.current = null, t
                }

                function Ys(e, t) {
                    Ps && s("243"), Qs(), Ps = !0;
                    var n = xs.current;
                    xs.current = uo;
                    var i = e.nextExpirationTimeToWorkOn;
                    i === Rs && e === Is && null !== As || (Fs(), Rs = i, As = Xi((Is = e).current, null), e.pendingCommitExpirationTime = 0);
                    for (var r = !1;;) {
                        try {
                            if (t)
                                for (; null !== As && !Ia();) As = Xs(As);
                            else
                                for (; null !== As;) As = Xs(As)
                        } catch (y) {
                            if (zo = Uo = qo = null, Zr(), null === As) r = !0, Ba(y);
                            else {
                                null === As && s("271");
                                var o = As,
                                    a = o.return;
                                if (null !== a) {
                                    e: {
                                        var l = e,
                                            c = a,
                                            u = o,
                                            d = y;
                                        if (a = Rs, u.effectTag |= 1024, u.firstEffect = u.lastEffect = null, null !== d && "object" === typeof d && "function" === typeof d.then) {
                                            var h = d;
                                            d = c;
                                            var p = -1,
                                                f = -1;
                                            do {
                                                if (13 === d.tag) {
                                                    var m = d.alternate;
                                                    if (null !== m && null !== (m = m.memoizedState)) {
                                                        f = 10 * (1073741822 - m.timedOutAt);
                                                        break
                                                    }
                                                    "number" === typeof(m = d.pendingProps.maxDuration) && (0 >= m ? p = 0 : (-1 === p || m < p) && (p = m))
                                                }
                                                d = d.return
                                            } while (null !== d);
                                            d = c;
                                            do {
                                                if ((m = 13 === d.tag) && (m = void 0 !== d.memoizedProps.fallback && null === d.memoizedState), m) {
                                                    if (null === (c = d.updateQueue) ? ((c = new Set).add(h), d.updateQueue = c) : c.add(h), 0 === (1 & d.mode)) {
                                                        d.effectTag |= 64, u.effectTag &= -1957, 1 === u.tag && (null === u.alternate ? u.tag = 17 : ((a = Jo(1073741823)).tag = $o, es(u, a))), u.expirationTime = 1073741823;
                                                        break e
                                                    }
                                                    c = a;
                                                    var g = (u = l).pingCache;
                                                    null === g ? (g = u.pingCache = new Ss, m = new Set, g.set(h, m)) : void 0 === (m = g.get(h)) && (m = new Set, g.set(h, m)), m.has(c) || (m.add(c), u = Zs.bind(null, u, h, c), h.then(u, u)), -1 === p ? l = 1073741823 : (-1 === f && (f = 10 * (1073741822 - ir(l, a)) - 5e3), l = f + p), 0 <= l && Ns < l && (Ns = l), d.effectTag |= 2048, d.expirationTime = a;
                                                    break e
                                                }
                                                d = d.return
                                            } while (null !== d);
                                            d = Error((lt(u.type) || "A React component") + " suspended while rendering, but no fallback UI was specified.\n\nAdd a <Suspense fallback=...> component higher in the tree to provide a loading indicator or placeholder to display." + ct(u))
                                        }
                                        Ms = !0,
                                        d = as(d, u),
                                        l = c;do {
                                            switch (l.tag) {
                                                case 3:
                                                    l.effectTag |= 2048, l.expirationTime = a, ts(l, a = Cs(l, d, a));
                                                    break e;
                                                case 1:
                                                    if (p = d, f = l.type, u = l.stateNode, 0 === (64 & l.effectTag) && ("function" === typeof f.getDerivedStateFromError || null !== u && "function" === typeof u.componentDidCatch && (null === zs || !zs.has(u)))) {
                                                        l.effectTag |= 2048, l.expirationTime = a, ts(l, a = ks(l, p, a));
                                                        break e
                                                    }
                                            }
                                            l = l.return
                                        } while (null !== l)
                                    }
                                    As = Ks(o);
                                    continue
                                }
                                r = !0, Ba(y)
                            }
                        }
                        break
                    }
                    if (Ps = !1, xs.current = n, zo = Uo = qo = null, Zr(), r) Is = null, e.finishedWork = null;
                    else if (null !== As) e.finishedWork = null;
                    else {
                        if (null === (n = e.current.alternate) && s("281"), Is = null, Ms) {
                            if (r = e.latestPendingTime, o = e.latestSuspendedTime, a = e.latestPingedTime, 0 !== r && r < i || 0 !== o && o < i || 0 !== a && a < i) return nr(e, i), void Ea(e, n, i, e.expirationTime, -1);
                            if (!e.didError && t) return e.didError = !0, i = e.nextExpirationTimeToWorkOn = i, t = e.expirationTime = 1073741823, void Ea(e, n, i, t, -1)
                        }
                        t && -1 !== Ns ? (nr(e, i), (t = 10 * (1073741822 - ir(e, i))) < Ns && (Ns = t), t = 10 * (1073741822 - Ta()), t = Ns - t, Ea(e, n, i, e.expirationTime, 0 > t ? 0 : t)) : (e.pendingCommitExpirationTime = i, e.finishedWork = n)
                    }
                }

                function Gs(e, t) {
                    for (var n = e.return; null !== n;) {
                        switch (n.tag) {
                            case 1:
                                var i = n.stateNode;
                                if ("function" === typeof n.type.getDerivedStateFromError || "function" === typeof i.componentDidCatch && (null === zs || !zs.has(i))) return es(n, e = ks(n, e = as(t, e), 1073741823)), void na(n, 1073741823);
                                break;
                            case 3:
                                return es(n, e = Cs(n, e = as(t, e), 1073741823)), void na(n, 1073741823)
                        }
                        n = n.return
                    }
                    3 === e.tag && (es(e, n = Cs(e, n = as(t, e), 1073741823)), na(e, 1073741823))
                }

                function Js(e, t) {
                    var n = o.unstable_getCurrentPriorityLevel(),
                        i = void 0;
                    if (0 === (1 & t.mode)) i = 1073741823;
                    else if (Ps && !Ds) i = Rs;
                    else {
                        switch (n) {
                            case o.unstable_ImmediatePriority:
                                i = 1073741823;
                                break;
                            case o.unstable_UserBlockingPriority:
                                i = 1073741822 - 10 * (1 + ((1073741822 - e + 15) / 10 | 0));
                                break;
                            case o.unstable_NormalPriority:
                                i = 1073741822 - 25 * (1 + ((1073741822 - e + 500) / 25 | 0));
                                break;
                            case o.unstable_LowPriority:
                            case o.unstable_IdlePriority:
                                i = 1;
                                break;
                            default:
                                s("313")
                        }
                        null !== Is && i === Rs && --i
                    }
                    return n === o.unstable_UserBlockingPriority && (0 === da || i < da) && (da = i), i
                }

                function Zs(e, t, n) {
                    var i = e.pingCache;
                    null !== i && i.delete(t), null !== Is && Rs === n ? Is = null : (t = e.earliestSuspendedTime, i = e.latestSuspendedTime, 0 !== t && n <= t && n >= i && (e.didError = !1, (0 === (t = e.latestPingedTime) || t > n) && (e.latestPingedTime = n), rr(n, e), 0 !== (n = e.expirationTime) && La(e, n)))
                }

                function ea(e, t) {
                    var n = e.stateNode;
                    null !== n && n.delete(t), null !== (e = ta(e, t = Js(t = Ta(), e))) && (tr(e, t), 0 !== (t = e.expirationTime) && La(e, t))
                }

                function ta(e, t) {
                    e.expirationTime < t && (e.expirationTime = t);
                    var n = e.alternate;
                    null !== n && n.expirationTime < t && (n.expirationTime = t);
                    var i = e.return,
                        r = null;
                    if (null === i && 3 === e.tag) r = e.stateNode;
                    else
                        for (; null !== i;) {
                            if (n = i.alternate, i.childExpirationTime < t && (i.childExpirationTime = t), null !== n && n.childExpirationTime < t && (n.childExpirationTime = t), null === i.return && 3 === i.tag) {
                                r = i.stateNode;
                                break
                            }
                            i = i.return
                        }
                    return r
                }

                function na(e, t) {
                    null !== (e = ta(e, t)) && (!Ps && 0 !== Rs && t > Rs && Fs(), tr(e, t), Ps && !Ds && Is === e || La(e, e.expirationTime), _a > wa && (_a = 0, s("185")))
                }

                function ia(e, t, n, i, r) {
                    return o.unstable_runWithPriority(o.unstable_ImmediatePriority, (function() {
                        return e(t, n, i, r)
                    }))
                }
                var ra = null,
                    oa = null,
                    sa = 0,
                    aa = void 0,
                    la = !1,
                    ca = null,
                    ua = 0,
                    da = 0,
                    ha = !1,
                    pa = null,
                    fa = !1,
                    ma = !1,
                    ga = null,
                    ya = o.unstable_now(),
                    va = 1073741822 - (ya / 10 | 0),
                    ba = va,
                    wa = 50,
                    _a = 0,
                    Sa = null;

                function Ca() {
                    va = 1073741822 - ((o.unstable_now() - ya) / 10 | 0)
                }

                function ka(e, t) {
                    if (0 !== sa) {
                        if (t < sa) return;
                        null !== aa && o.unstable_cancelCallback(aa)
                    }
                    sa = t, e = o.unstable_now() - ya, aa = o.unstable_scheduleCallback(Ra, {
                        timeout: 10 * (1073741822 - t) - e
                    })
                }

                function Ea(e, t, n, i, r) {
                    e.expirationTime = i, 0 !== r || Ia() ? 0 < r && (e.timeoutHandle = _i(xa.bind(null, e, t, n), r)) : (e.pendingCommitExpirationTime = n, e.finishedWork = t)
                }

                function xa(e, t, n) {
                    e.pendingCommitExpirationTime = n, e.finishedWork = t, Ca(), ba = va, Ma(e, n)
                }

                function Ta() {
                    return la || (Pa(), 0 !== ua && 1 !== ua || (Ca(), ba = va)), ba
                }

                function La(e, t) {
                    null === e.nextScheduledRoot ? (e.expirationTime = t, null === oa ? (ra = oa = e, e.nextScheduledRoot = e) : (oa = oa.nextScheduledRoot = e).nextScheduledRoot = ra) : t > e.expirationTime && (e.expirationTime = t), la || (fa ? ma && (ca = e, ua = 1073741823, Oa(e, 1073741823, !1)) : 1073741823 === t ? Na(1073741823, !1) : ka(e, t))
                }

                function Pa() {
                    var e = 0,
                        t = null;
                    if (null !== oa)
                        for (var n = oa, i = ra; null !== i;) {
                            var r = i.expirationTime;
                            if (0 === r) {
                                if ((null === n || null === oa) && s("244"), i === i.nextScheduledRoot) {
                                    ra = oa = i.nextScheduledRoot = null;
                                    break
                                }
                                if (i === ra) ra = r = i.nextScheduledRoot, oa.nextScheduledRoot = r, i.nextScheduledRoot = null;
                                else {
                                    if (i === oa) {
                                        (oa = n).nextScheduledRoot = ra, i.nextScheduledRoot = null;
                                        break
                                    }
                                    n.nextScheduledRoot = i.nextScheduledRoot, i.nextScheduledRoot = null
                                }
                                i = n.nextScheduledRoot
                            } else {
                                if (r > e && (e = r, t = i), i === oa) break;
                                if (1073741823 === e) break;
                                n = i, i = i.nextScheduledRoot
                            }
                        }
                    ca = t, ua = e
                }
                var Aa = !1;

                function Ia() {
                    return !!Aa || !!o.unstable_shouldYield() && (Aa = !0)
                }

                function Ra() {
                    try {
                        if (!Ia() && null !== ra) {
                            Ca();
                            var e = ra;
                            do {
                                var t = e.expirationTime;
                                0 !== t && va <= t && (e.nextExpirationTimeToWorkOn = va), e = e.nextScheduledRoot
                            } while (e !== ra)
                        }
                        Na(0, !0)
                    } finally {
                        Aa = !1
                    }
                }

                function Na(e, t) {
                    if (Pa(), t)
                        for (Ca(), ba = va; null !== ca && 0 !== ua && e <= ua && !(Aa && va > ua);) Oa(ca, ua, va > ua), Pa(), Ca(), ba = va;
                    else
                        for (; null !== ca && 0 !== ua && e <= ua;) Oa(ca, ua, !1), Pa();
                    if (t && (sa = 0, aa = null), 0 !== ua && ka(ca, ua), _a = 0, Sa = null, null !== ga)
                        for (e = ga, ga = null, t = 0; t < e.length; t++) {
                            var n = e[t];
                            try {
                                n._onComplete()
                            } catch (i) {
                                ha || (ha = !0, pa = i)
                            }
                        }
                    if (ha) throw e = pa, pa = null, ha = !1, e
                }

                function Ma(e, t) {
                    la && s("253"), ca = e, ua = t, Oa(e, t, !1), Na(1073741823, !1)
                }

                function Oa(e, t, n) {
                    if (la && s("245"), la = !0, n) {
                        var i = e.finishedWork;
                        null !== i ? Da(e, i, t) : (e.finishedWork = null, -1 !== (i = e.timeoutHandle) && (e.timeoutHandle = -1, Si(i)), Ys(e, n), null !== (i = e.finishedWork) && (Ia() ? e.finishedWork = i : Da(e, i, t)))
                    } else null !== (i = e.finishedWork) ? Da(e, i, t) : (e.finishedWork = null, -1 !== (i = e.timeoutHandle) && (e.timeoutHandle = -1, Si(i)), Ys(e, n), null !== (i = e.finishedWork) && Da(e, i, t));
                    la = !1
                }

                function Da(e, t, n) {
                    var i = e.firstBatch;
                    if (null !== i && i._expirationTime >= n && (null === ga ? ga = [i] : ga.push(i), i._defer)) return e.finishedWork = t, void(e.expirationTime = 0);
                    e.finishedWork = null, e === Sa ? _a++ : (Sa = e, _a = 0), o.unstable_runWithPriority(o.unstable_ImmediatePriority, (function() {
                        $s(e, t)
                    }))
                }

                function Ba(e) {
                    null === ca && s("246"), ca.expirationTime = 0, ha || (ha = !0, pa = e)
                }

                function qa(e, t) {
                    var n = fa;
                    fa = !0;
                    try {
                        return e(t)
                    } finally {
                        (fa = n) || la || Na(1073741823, !1)
                    }
                }

                function Ua(e, t) {
                    if (fa && !ma) {
                        ma = !0;
                        try {
                            return e(t)
                        } finally {
                            ma = !1
                        }
                    }
                    return e(t)
                }

                function za(e, t, n) {
                    fa || la || 0 === da || (Na(da, !1), da = 0);
                    var i = fa;
                    fa = !0;
                    try {
                        return o.unstable_runWithPriority(o.unstable_UserBlockingPriority, (function() {
                            return e(t, n)
                        }))
                    } finally {
                        (fa = i) || la || Na(1073741823, !1)
                    }
                }

                function Fa(e, t, n, i, r) {
                    var o = t.current;
                    e: if (n) {
                        t: {
                            2 === nn(n = n._reactInternalFiber) && 1 === n.tag || s("170");
                            var a = n;do {
                                switch (a.tag) {
                                    case 3:
                                        a = a.stateNode.context;
                                        break t;
                                    case 1:
                                        if (Di(a.type)) {
                                            a = a.stateNode.__reactInternalMemoizedMergedChildContext;
                                            break t
                                        }
                                }
                                a = a.return
                            } while (null !== a);s("171"),
                            a = void 0
                        }
                        if (1 === n.tag) {
                            var l = n.type;
                            if (Di(l)) {
                                n = zi(n, l, a);
                                break e
                            }
                        }
                        n = a
                    }
                    else n = Ii;
                    return null === t.context ? t.context = n : t.pendingContext = n, t = r, (r = Jo(i)).payload = {
                        element: e
                    }, null !== (t = void 0 === t ? null : t) && (r.callback = t), Qs(), es(o, r), na(o, i), i
                }

                function ja(e, t, n, i) {
                    var r = t.current;
                    return Fa(e, t, n, r = Js(Ta(), r), i)
                }

                function Ha(e) {
                    return (e = e.current).child ? (e.child.tag, e.child.stateNode) : null
                }

                function Wa(e) {
                    var t = 1073741822 - 25 * (1 + ((1073741822 - Ta() + 500) / 25 | 0));
                    t >= Ls && (t = Ls - 1), this._expirationTime = Ls = t, this._root = e, this._callbacks = this._next = null, this._hasChildren = this._didComplete = !1, this._children = null, this._defer = !0
                }

                function Va() {
                    this._callbacks = null, this._didCommit = !1, this._onCommit = this._onCommit.bind(this)
                }

                function Qa(e, t, n) {
                    e = {
                        current: t = $i(3, null, null, t ? 3 : 0),
                        containerInfo: e,
                        pendingChildren: null,
                        pingCache: null,
                        earliestPendingTime: 0,
                        latestPendingTime: 0,
                        earliestSuspendedTime: 0,
                        latestSuspendedTime: 0,
                        latestPingedTime: 0,
                        didError: !1,
                        pendingCommitExpirationTime: 0,
                        finishedWork: null,
                        timeoutHandle: -1,
                        context: null,
                        pendingContext: null,
                        hydrate: n,
                        nextExpirationTimeToWorkOn: 0,
                        expirationTime: 0,
                        firstBatch: null,
                        nextScheduledRoot: null
                    }, this._internalRoot = t.stateNode = e
                }

                function $a(e) {
                    return !(!e || 1 !== e.nodeType && 9 !== e.nodeType && 11 !== e.nodeType && (8 !== e.nodeType || " react-mount-point-unstable " !== e.nodeValue))
                }

                function Ka(e, t, n, i, r) {
                    var o = n._reactRootContainer;
                    if (o) {
                        if ("function" === typeof r) {
                            var s = r;
                            r = function() {
                                var e = Ha(o._internalRoot);
                                s.call(e)
                            }
                        }
                        null != e ? o.legacy_renderSubtreeIntoContainer(e, t, r) : o.render(t, r)
                    } else {
                        if (o = n._reactRootContainer = function(e, t) {
                                if (t || (t = !(!(t = e ? 9 === e.nodeType ? e.documentElement : e.firstChild : null) || 1 !== t.nodeType || !t.hasAttribute("data-reactroot"))), !t)
                                    for (var n; n = e.lastChild;) e.removeChild(n);
                                return new Qa(e, !1, t)
                            }(n, i), "function" === typeof r) {
                            var a = r;
                            r = function() {
                                var e = Ha(o._internalRoot);
                                a.call(e)
                            }
                        }
                        Ua((function() {
                            null != e ? o.legacy_renderSubtreeIntoContainer(e, t, r) : o.render(t, r)
                        }))
                    }
                    return Ha(o._internalRoot)
                }

                function Xa(e, t) {
                    var n = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
                    return $a(t) || s("200"),
                        function(e, t, n) {
                            var i = 3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
                            return {
                                $$typeof: Xe,
                                key: null == i ? null : "" + i,
                                children: e,
                                containerInfo: t,
                                implementation: n
                            }
                        }(e, t, null, n)
                }
                Te = function(e, t, n) {
                    switch (t) {
                        case "input":
                            if (Ct(e, n), t = n.name, "radio" === n.type && null != t) {
                                for (n = e; n.parentNode;) n = n.parentNode;
                                for (n = n.querySelectorAll("input[name=" + JSON.stringify("" + t) + '][type="radio"]'), t = 0; t < n.length; t++) {
                                    var i = n[t];
                                    if (i !== e && i.form === e.form) {
                                        var r = U(i);
                                        r || s("90"), We(i), Ct(i, r)
                                    }
                                }
                            }
                            break;
                        case "textarea":
                            Zn(e, n);
                            break;
                        case "select":
                            null != (t = n.value) && Yn(e, !!n.multiple, t, !1)
                    }
                }, Wa.prototype.render = function(e) {
                    this._defer || s("250"), this._hasChildren = !0, this._children = e;
                    var t = this._root._internalRoot,
                        n = this._expirationTime,
                        i = new Va;
                    return Fa(e, t, null, n, i._onCommit), i
                }, Wa.prototype.then = function(e) {
                    if (this._didComplete) e();
                    else {
                        var t = this._callbacks;
                        null === t && (t = this._callbacks = []), t.push(e)
                    }
                }, Wa.prototype.commit = function() {
                    var e = this._root._internalRoot,
                        t = e.firstBatch;
                    if (this._defer && null !== t || s("251"), this._hasChildren) {
                        var n = this._expirationTime;
                        if (t !== this) {
                            this._hasChildren && (n = this._expirationTime = t._expirationTime, this.render(this._children));
                            for (var i = null, r = t; r !== this;) i = r, r = r._next;
                            null === i && s("251"), i._next = r._next, this._next = t, e.firstBatch = this
                        }
                        this._defer = !1, Ma(e, n), t = this._next, this._next = null, null !== (t = e.firstBatch = t) && t._hasChildren && t.render(t._children)
                    } else this._next = null, this._defer = !1
                }, Wa.prototype._onComplete = function() {
                    if (!this._didComplete) {
                        this._didComplete = !0;
                        var e = this._callbacks;
                        if (null !== e)
                            for (var t = 0; t < e.length; t++)(0, e[t])()
                    }
                }, Va.prototype.then = function(e) {
                    if (this._didCommit) e();
                    else {
                        var t = this._callbacks;
                        null === t && (t = this._callbacks = []), t.push(e)
                    }
                }, Va.prototype._onCommit = function() {
                    if (!this._didCommit) {
                        this._didCommit = !0;
                        var e = this._callbacks;
                        if (null !== e)
                            for (var t = 0; t < e.length; t++) {
                                var n = e[t];
                                "function" !== typeof n && s("191", n), n()
                            }
                    }
                }, Qa.prototype.render = function(e, t) {
                    var n = this._internalRoot,
                        i = new Va;
                    return null !== (t = void 0 === t ? null : t) && i.then(t), ja(e, n, null, i._onCommit), i
                }, Qa.prototype.unmount = function(e) {
                    var t = this._internalRoot,
                        n = new Va;
                    return null !== (e = void 0 === e ? null : e) && n.then(e), ja(null, t, null, n._onCommit), n
                }, Qa.prototype.legacy_renderSubtreeIntoContainer = function(e, t, n) {
                    var i = this._internalRoot,
                        r = new Va;
                    return null !== (n = void 0 === n ? null : n) && r.then(n), ja(t, i, e, r._onCommit), r
                }, Qa.prototype.createBatch = function() {
                    var e = new Wa(this),
                        t = e._expirationTime,
                        n = this._internalRoot,
                        i = n.firstBatch;
                    if (null === i) n.firstBatch = e, e._next = null;
                    else {
                        for (n = null; null !== i && i._expirationTime >= t;) n = i, i = i._next;
                        e._next = i, null !== n && (n._next = e)
                    }
                    return e
                }, Ne = qa, Me = za, Oe = function() {
                    la || 0 === da || (Na(da, !1), da = 0)
                };
                var Ya = {
                    createPortal: Xa,
                    findDOMNode: function(e) {
                        if (null == e) return null;
                        if (1 === e.nodeType) return e;
                        var t = e._reactInternalFiber;
                        return void 0 === t && ("function" === typeof e.render ? s("188") : s("268", Object.keys(e))), e = null === (e = on(t)) ? null : e.stateNode
                    },
                    hydrate: function(e, t, n) {
                        return $a(t) || s("200"), Ka(null, e, t, !0, n)
                    },
                    render: function(e, t, n) {
                        return $a(t) || s("200"), Ka(null, e, t, !1, n)
                    },
                    unstable_renderSubtreeIntoContainer: function(e, t, n, i) {
                        return $a(n) || s("200"), (null == e || void 0 === e._reactInternalFiber) && s("38"), Ka(e, t, n, !1, i)
                    },
                    unmountComponentAtNode: function(e) {
                        return $a(e) || s("40"), !!e._reactRootContainer && (Ua((function() {
                            Ka(null, null, e, !1, (function() {
                                e._reactRootContainer = null
                            }))
                        })), !0)
                    },
                    unstable_createPortal: function() {
                        return Xa.apply(void 0, arguments)
                    },
                    unstable_batchedUpdates: qa,
                    unstable_interactiveUpdates: za,
                    flushSync: function(e, t) {
                        la && s("187");
                        var n = fa;
                        fa = !0;
                        try {
                            return ia(e, t)
                        } finally {
                            fa = n, Na(1073741823, !1)
                        }
                    },
                    unstable_createRoot: function(e, t) {
                        return $a(e) || s("299", "unstable_createRoot"), new Qa(e, !0, null != t && !0 === t.hydrate)
                    },
                    unstable_flushControlled: function(e) {
                        var t = fa;
                        fa = !0;
                        try {
                            ia(e)
                        } finally {
                            (fa = t) || la || Na(1073741823, !1)
                        }
                    },
                    __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                        Events: [B, q, U, A.injectEventPluginsByName, b, V, function(e) {
                            T(e, W)
                        }, Ie, Re, Pn, R]
                    }
                };
                ! function(e) {
                    var t = e.findFiberByHostInstance;
                    (function(e) {
                        if ("undefined" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) return !1;
                        var t = __REACT_DEVTOOLS_GLOBAL_HOOK__;
                        if (t.isDisabled || !t.supportsFiber) return !0;
                        try {
                            var n = t.inject(e);
                            Hi = Vi((function(e) {
                                return t.onCommitFiberRoot(n, e)
                            })), Wi = Vi((function(e) {
                                return t.onCommitFiberUnmount(n, e)
                            }))
                        } catch (i) {}
                    })(r({}, e, {
                        overrideProps: null,
                        currentDispatcherRef: Ve.ReactCurrentDispatcher,
                        findHostInstanceByFiber: function(e) {
                            return null === (e = on(e)) ? null : e.stateNode
                        },
                        findFiberByHostInstance: function(e) {
                            return t ? t(e) : null
                        }
                    }))
                }({
                    findFiberByHostInstance: D,
                    bundleType: 0,
                    version: "16.8.6",
                    rendererPackageName: "react-dom"
                });
                var Ga = {
                        default: Ya
                    },
                    Ja = Ga && Ya || Ga;
                e.exports = Ja.default || Ja
            },
            749: (e, t, n) => {
                "use strict";
                ! function e() {
                    if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ && "function" === typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE) try {
                        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e)
                    } catch (t) {
                        console.error(t)
                    }
                }(), e.exports = n(179)
            },
            814: (e, t, n) => {
                "use strict";
                var i = n(377),
                    r = "function" === typeof Symbol && Symbol.for,
                    o = r ? Symbol.for("react.element") : 60103,
                    s = r ? Symbol.for("react.portal") : 60106,
                    a = r ? Symbol.for("react.fragment") : 60107,
                    l = r ? Symbol.for("react.strict_mode") : 60108,
                    c = r ? Symbol.for("react.profiler") : 60114,
                    u = r ? Symbol.for("react.provider") : 60109,
                    d = r ? Symbol.for("react.context") : 60110,
                    h = r ? Symbol.for("react.concurrent_mode") : 60111,
                    p = r ? Symbol.for("react.forward_ref") : 60112,
                    f = r ? Symbol.for("react.suspense") : 60113,
                    m = r ? Symbol.for("react.memo") : 60115,
                    g = r ? Symbol.for("react.lazy") : 60116,
                    y = "function" === typeof Symbol && Symbol.iterator;

                function v(e) {
                    for (var t = arguments.length - 1, n = "https://reactjs.org/docs/error-decoder.html?invariant=" + e, i = 0; i < t; i++) n += "&args[]=" + encodeURIComponent(arguments[i + 1]);
                    ! function(e, t, n, i, r, o, s, a) {
                        if (!e) {
                            if (e = void 0, void 0 === t) e = Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");
                            else {
                                var l = [n, i, r, o, s, a],
                                    c = 0;
                                (e = Error(t.replace(/%s/g, (function() {
                                    return l[c++]
                                })))).name = "Invariant Violation"
                            }
                            throw e.framesToPop = 1, e
                        }
                    }(!1, "Minified React error #" + e + "; visit %s for the full message or use the non-minified dev environment for full errors and additional helpful warnings. ", n)
                }
                var b = {
                        isMounted: function() {
                            return !1
                        },
                        enqueueForceUpdate: function() {},
                        enqueueReplaceState: function() {},
                        enqueueSetState: function() {}
                    },
                    w = {};

                function _(e, t, n) {
                    this.props = e, this.context = t, this.refs = w, this.updater = n || b
                }

                function S() {}

                function C(e, t, n) {
                    this.props = e, this.context = t, this.refs = w, this.updater = n || b
                }
                _.prototype.isReactComponent = {}, _.prototype.setState = function(e, t) {
                    "object" !== typeof e && "function" !== typeof e && null != e && v("85"), this.updater.enqueueSetState(this, e, t, "setState")
                }, _.prototype.forceUpdate = function(e) {
                    this.updater.enqueueForceUpdate(this, e, "forceUpdate")
                }, S.prototype = _.prototype;
                var k = C.prototype = new S;
                k.constructor = C, i(k, _.prototype), k.isPureReactComponent = !0;
                var E = {
                        current: null
                    },
                    x = {
                        current: null
                    },
                    T = Object.prototype.hasOwnProperty,
                    L = {
                        key: !0,
                        ref: !0,
                        __self: !0,
                        __source: !0
                    };

                function P(e, t, n) {
                    var i = void 0,
                        r = {},
                        s = null,
                        a = null;
                    if (null != t)
                        for (i in void 0 !== t.ref && (a = t.ref), void 0 !== t.key && (s = "" + t.key), t) T.call(t, i) && !L.hasOwnProperty(i) && (r[i] = t[i]);
                    var l = arguments.length - 2;
                    if (1 === l) r.children = n;
                    else if (1 < l) {
                        for (var c = Array(l), u = 0; u < l; u++) c[u] = arguments[u + 2];
                        r.children = c
                    }
                    if (e && e.defaultProps)
                        for (i in l = e.defaultProps) void 0 === r[i] && (r[i] = l[i]);
                    return {
                        $$typeof: o,
                        type: e,
                        key: s,
                        ref: a,
                        props: r,
                        _owner: x.current
                    }
                }

                function A(e) {
                    return "object" === typeof e && null !== e && e.$$typeof === o
                }
                var I = /\/+/g,
                    R = [];

                function N(e, t, n, i) {
                    if (R.length) {
                        var r = R.pop();
                        return r.result = e, r.keyPrefix = t, r.func = n, r.context = i, r.count = 0, r
                    }
                    return {
                        result: e,
                        keyPrefix: t,
                        func: n,
                        context: i,
                        count: 0
                    }
                }

                function M(e) {
                    e.result = null, e.keyPrefix = null, e.func = null, e.context = null, e.count = 0, 10 > R.length && R.push(e)
                }

                function O(e, t, n, i) {
                    var r = typeof e;
                    "undefined" !== r && "boolean" !== r || (e = null);
                    var a = !1;
                    if (null === e) a = !0;
                    else switch (r) {
                        case "string":
                        case "number":
                            a = !0;
                            break;
                        case "object":
                            switch (e.$$typeof) {
                                case o:
                                case s:
                                    a = !0
                            }
                    }
                    if (a) return n(i, e, "" === t ? "." + B(e, 0) : t), 1;
                    if (a = 0, t = "" === t ? "." : t + ":", Array.isArray(e))
                        for (var l = 0; l < e.length; l++) {
                            var c = t + B(r = e[l], l);
                            a += O(r, c, n, i)
                        } else if (null === e || "object" !== typeof e ? c = null : c = "function" === typeof(c = y && e[y] || e["@@iterator"]) ? c : null, "function" === typeof c)
                            for (e = c.call(e), l = 0; !(r = e.next()).done;) a += O(r = r.value, c = t + B(r, l++), n, i);
                        else "object" === r && v("31", "[object Object]" === (n = "" + e) ? "object with keys {" + Object.keys(e).join(", ") + "}" : n, "");
                    return a
                }

                function D(e, t, n) {
                    return null == e ? 0 : O(e, "", t, n)
                }

                function B(e, t) {
                    return "object" === typeof e && null !== e && null != e.key ? function(e) {
                        var t = {
                            "=": "=0",
                            ":": "=2"
                        };
                        return "$" + ("" + e).replace(/[=:]/g, (function(e) {
                            return t[e]
                        }))
                    }(e.key) : t.toString(36)
                }

                function q(e, t) {
                    e.func.call(e.context, t, e.count++)
                }

                function U(e, t, n) {
                    var i = e.result,
                        r = e.keyPrefix;
                    e = e.func.call(e.context, t, e.count++), Array.isArray(e) ? z(e, i, n, (function(e) {
                        return e
                    })) : null != e && (A(e) && (e = function(e, t) {
                        return {
                            $$typeof: o,
                            type: e.type,
                            key: t,
                            ref: e.ref,
                            props: e.props,
                            _owner: e._owner
                        }
                    }(e, r + (!e.key || t && t.key === e.key ? "" : ("" + e.key).replace(I, "$&/") + "/") + n)), i.push(e))
                }

                function z(e, t, n, i, r) {
                    var o = "";
                    null != n && (o = ("" + n).replace(I, "$&/") + "/"), D(e, U, t = N(t, o, i, r)), M(t)
                }

                function F() {
                    var e = E.current;
                    return null === e && v("321"), e
                }
                var j = {
                        Children: {
                            map: function(e, t, n) {
                                if (null == e) return e;
                                var i = [];
                                return z(e, i, null, t, n), i
                            },
                            forEach: function(e, t, n) {
                                if (null == e) return e;
                                D(e, q, t = N(null, null, t, n)), M(t)
                            },
                            count: function(e) {
                                return D(e, (function() {
                                    return null
                                }), null)
                            },
                            toArray: function(e) {
                                var t = [];
                                return z(e, t, null, (function(e) {
                                    return e
                                })), t
                            },
                            only: function(e) {
                                return A(e) || v("143"), e
                            }
                        },
                        createRef: function() {
                            return {
                                current: null
                            }
                        },
                        Component: _,
                        PureComponent: C,
                        createContext: function(e, t) {
                            return void 0 === t && (t = null), (e = {
                                $$typeof: d,
                                _calculateChangedBits: t,
                                _currentValue: e,
                                _currentValue2: e,
                                _threadCount: 0,
                                Provider: null,
                                Consumer: null
                            }).Provider = {
                                $$typeof: u,
                                _context: e
                            }, e.Consumer = e
                        },
                        forwardRef: function(e) {
                            return {
                                $$typeof: p,
                                render: e
                            }
                        },
                        lazy: function(e) {
                            return {
                                $$typeof: g,
                                _ctor: e,
                                _status: -1,
                                _result: null
                            }
                        },
                        memo: function(e, t) {
                            return {
                                $$typeof: m,
                                type: e,
                                compare: void 0 === t ? null : t
                            }
                        },
                        useCallback: function(e, t) {
                            return F().useCallback(e, t)
                        },
                        useContext: function(e, t) {
                            return F().useContext(e, t)
                        },
                        useEffect: function(e, t) {
                            return F().useEffect(e, t)
                        },
                        useImperativeHandle: function(e, t, n) {
                            return F().useImperativeHandle(e, t, n)
                        },
                        useDebugValue: function() {},
                        useLayoutEffect: function(e, t) {
                            return F().useLayoutEffect(e, t)
                        },
                        useMemo: function(e, t) {
                            return F().useMemo(e, t)
                        },
                        useReducer: function(e, t, n) {
                            return F().useReducer(e, t, n)
                        },
                        useRef: function(e) {
                            return F().useRef(e)
                        },
                        useState: function(e) {
                            return F().useState(e)
                        },
                        Fragment: a,
                        StrictMode: l,
                        Suspense: f,
                        createElement: P,
                        cloneElement: function(e, t, n) {
                            (null === e || void 0 === e) && v("267", e);
                            var r = void 0,
                                s = i({}, e.props),
                                a = e.key,
                                l = e.ref,
                                c = e._owner;
                            if (null != t) {
                                void 0 !== t.ref && (l = t.ref, c = x.current), void 0 !== t.key && (a = "" + t.key);
                                var u = void 0;
                                for (r in e.type && e.type.defaultProps && (u = e.type.defaultProps), t) T.call(t, r) && !L.hasOwnProperty(r) && (s[r] = void 0 === t[r] && void 0 !== u ? u[r] : t[r])
                            }
                            if (1 === (r = arguments.length - 2)) s.children = n;
                            else if (1 < r) {
                                u = Array(r);
                                for (var d = 0; d < r; d++) u[d] = arguments[d + 2];
                                s.children = u
                            }
                            return {
                                $$typeof: o,
                                type: e.type,
                                key: a,
                                ref: l,
                                props: s,
                                _owner: c
                            }
                        },
                        createFactory: function(e) {
                            var t = P.bind(null, e);
                            return t.type = e, t
                        },
                        isValidElement: A,
                        version: "16.8.6",
                        unstable_ConcurrentMode: h,
                        unstable_Profiler: c,
                        __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: {
                            ReactCurrentDispatcher: E,
                            ReactCurrentOwner: x,
                            assign: i
                        }
                    },
                    H = {
                        default: j
                    },
                    W = H && j || H;
                e.exports = W.default || W
            },
            286: (e, t, n) => {
                "use strict";
                e.exports = n(814)
            },
            76: (e, t, n) => {
                "use strict";
                Object.defineProperty(t, "__esModule", {
                    value: !0
                });
                var i = null,
                    r = !1,
                    o = 3,
                    s = -1,
                    a = -1,
                    l = !1,
                    c = !1;

                function u() {
                    if (!l) {
                        var e = i.expirationTime;
                        c ? k() : c = !0, C(p, e)
                    }
                }

                function d() {
                    var e = i,
                        t = i.next;
                    if (i === t) i = null;
                    else {
                        var n = i.previous;
                        i = n.next = t, t.previous = n
                    }
                    e.next = e.previous = null, n = e.callback, t = e.expirationTime, e = e.priorityLevel;
                    var r = o,
                        s = a;
                    o = e, a = t;
                    try {
                        var l = n()
                    } finally {
                        o = r, a = s
                    }
                    if ("function" === typeof l)
                        if (l = {
                                callback: l,
                                priorityLevel: e,
                                expirationTime: t,
                                next: null,
                                previous: null
                            }, null === i) i = l.next = l.previous = l;
                        else {
                            n = null, e = i;
                            do {
                                if (e.expirationTime >= t) {
                                    n = e;
                                    break
                                }
                                e = e.next
                            } while (e !== i);
                            null === n ? n = i : n === i && (i = l, u()), (t = n.previous).next = n.previous = l, l.next = n, l.previous = t
                        }
                }

                function h() {
                    if (-1 === s && null !== i && 1 === i.priorityLevel) {
                        l = !0;
                        try {
                            do {
                                d()
                            } while (null !== i && 1 === i.priorityLevel)
                        } finally {
                            l = !1, null !== i ? u() : c = !1
                        }
                    }
                }

                function p(e) {
                    l = !0;
                    var n = r;
                    r = e;
                    try {
                        if (e)
                            for (; null !== i;) {
                                var o = t.unstable_now();
                                if (!(i.expirationTime <= o)) break;
                                do {
                                    d()
                                } while (null !== i && i.expirationTime <= o)
                            } else if (null !== i)
                                do {
                                    d()
                                } while (null !== i && !E())
                    } finally {
                        l = !1, r = n, null !== i ? u() : c = !1, h()
                    }
                }
                var f, m, g = Date,
                    y = "function" === typeof setTimeout ? setTimeout : void 0,
                    v = "function" === typeof clearTimeout ? clearTimeout : void 0,
                    b = "function" === typeof requestAnimationFrame ? requestAnimationFrame : void 0,
                    w = "function" === typeof cancelAnimationFrame ? cancelAnimationFrame : void 0;

                function _(e) {
                    f = b((function(t) {
                        v(m), e(t)
                    })), m = y((function() {
                        w(f), e(t.unstable_now())
                    }), 100)
                }
                if ("object" === typeof performance && "function" === typeof performance.now) {
                    var S = performance;
                    t.unstable_now = function() {
                        return S.now()
                    }
                } else t.unstable_now = function() {
                    return g.now()
                };
                var C, k, E, x = null;
                if ("undefined" !== typeof window ? x = window : "undefined" !== typeof n.g && (x = n.g), x && x._schedMock) {
                    var T = x._schedMock;
                    C = T[0], k = T[1], E = T[2], t.unstable_now = T[3]
                } else if ("undefined" === typeof window || "function" !== typeof MessageChannel) {
                    var L = null,
                        P = function(e) {
                            if (null !== L) try {
                                L(e)
                            } finally {
                                L = null
                            }
                        };
                    C = function(e) {
                        null !== L ? setTimeout(C, 0, e) : (L = e, setTimeout(P, 0, !1))
                    }, k = function() {
                        L = null
                    }, E = function() {
                        return !1
                    }
                } else {
                    "undefined" !== typeof console && ("function" !== typeof b && console.error("This browser doesn't support requestAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"), "function" !== typeof w && console.error("This browser doesn't support cancelAnimationFrame. Make sure that you load a polyfill in older browsers. https://fb.me/react-polyfills"));
                    var A = null,
                        I = !1,
                        R = -1,
                        N = !1,
                        M = !1,
                        O = 0,
                        D = 33,
                        B = 33;
                    E = function() {
                        return O <= t.unstable_now()
                    };
                    var q = new MessageChannel,
                        U = q.port2;
                    q.port1.onmessage = function() {
                        I = !1;
                        var e = A,
                            n = R;
                        A = null, R = -1;
                        var i = t.unstable_now(),
                            r = !1;
                        if (0 >= O - i) {
                            if (!(-1 !== n && n <= i)) return N || (N = !0, _(z)), A = e, void(R = n);
                            r = !0
                        }
                        if (null !== e) {
                            M = !0;
                            try {
                                e(r)
                            } finally {
                                M = !1
                            }
                        }
                    };
                    var z = function(e) {
                        if (null !== A) {
                            _(z);
                            var t = e - O + B;
                            t < B && D < B ? (8 > t && (t = 8), B = t < D ? D : t) : D = t, O = e + B, I || (I = !0, U.postMessage(void 0))
                        } else N = !1
                    };
                    C = function(e, t) {
                        A = e, R = t, M || 0 > t ? U.postMessage(void 0) : N || (N = !0, _(z))
                    }, k = function() {
                        A = null, I = !1, R = -1
                    }
                }
                t.unstable_ImmediatePriority = 1, t.unstable_UserBlockingPriority = 2, t.unstable_NormalPriority = 3, t.unstable_IdlePriority = 5, t.unstable_LowPriority = 4, t.unstable_runWithPriority = function(e, n) {
                    switch (e) {
                        case 1:
                        case 2:
                        case 3:
                        case 4:
                        case 5:
                            break;
                        default:
                            e = 3
                    }
                    var i = o,
                        r = s;
                    o = e, s = t.unstable_now();
                    try {
                        return n()
                    } finally {
                        o = i, s = r, h()
                    }
                }, t.unstable_next = function(e) {
                    switch (o) {
                        case 1:
                        case 2:
                        case 3:
                            var n = 3;
                            break;
                        default:
                            n = o
                    }
                    var i = o,
                        r = s;
                    o = n, s = t.unstable_now();
                    try {
                        return e()
                    } finally {
                        o = i, s = r, h()
                    }
                }, t.unstable_scheduleCallback = function(e, n) {
                    var r = -1 !== s ? s : t.unstable_now();
                    if ("object" === typeof n && null !== n && "number" === typeof n.timeout) n = r + n.timeout;
                    else switch (o) {
                        case 1:
                            n = r + -1;
                            break;
                        case 2:
                            n = r + 250;
                            break;
                        case 5:
                            n = r + 1073741823;
                            break;
                        case 4:
                            n = r + 1e4;
                            break;
                        default:
                            n = r + 5e3
                    }
                    if (e = {
                            callback: e,
                            priorityLevel: o,
                            expirationTime: n,
                            next: null,
                            previous: null
                        }, null === i) i = e.next = e.previous = e, u();
                    else {
                        r = null;
                        var a = i;
                        do {
                            if (a.expirationTime > n) {
                                r = a;
                                break
                            }
                            a = a.next
                        } while (a !== i);
                        null === r ? r = i : r === i && (i = e, u()), (n = r.previous).next = r.previous = e, e.next = r, e.previous = n
                    }
                    return e
                }, t.unstable_cancelCallback = function(e) {
                    var t = e.next;
                    if (null !== t) {
                        if (t === e) i = null;
                        else {
                            e === i && (i = t);
                            var n = e.previous;
                            n.next = t, t.previous = n
                        }
                        e.next = e.previous = null
                    }
                }, t.unstable_wrapCallback = function(e) {
                    var n = o;
                    return function() {
                        var i = o,
                            r = s;
                        o = n, s = t.unstable_now();
                        try {
                            return e.apply(this, arguments)
                        } finally {
                            o = i, s = r, h()
                        }
                    }
                }, t.unstable_getCurrentPriorityLevel = function() {
                    return o
                }, t.unstable_shouldYield = function() {
                    return !r && (null !== i && i.expirationTime < a || E())
                }, t.unstable_continueExecution = function() {
                    null !== i && u()
                }, t.unstable_pauseExecution = function() {}, t.unstable_getFirstCallbackNode = function() {
                    return i
                }
            },
            475: (e, t, n) => {
                "use strict";
                e.exports = n(76)
            }
        },
        __webpack_module_cache__ = {};

    function __webpack_require__(e) {
        var t = __webpack_module_cache__[e];
        if (void 0 !== t) return t.exports;
        var n = __webpack_module_cache__[e] = {
            exports: {}
        };
        return __webpack_modules__[e].call(n.exports, n, n.exports, __webpack_require__), n.exports
    }
    __webpack_require__.n = e => {
        var t = e && e.__esModule ? () => e.default : () => e;
        return __webpack_require__.d(t, {
            a: t
        }), t
    }, __webpack_require__.d = (e, t) => {
        for (var n in t) __webpack_require__.o(t, n) && !__webpack_require__.o(e, n) && Object.defineProperty(e, n, {
            enumerable: !0,
            get: t[n]
        })
    }, __webpack_require__.g = function() {
        if ("object" === typeof globalThis) return globalThis;
        try {
            return this || new Function("return this")()
        } catch (e) {
            if ("object" === typeof window) return window
        }
    }(), __webpack_require__.o = (e, t) => Object.prototype.hasOwnProperty.call(e, t), __webpack_require__.p = "/";
    var __webpack_exports__ = {};
    (() => {
        "use strict";
        var e = __webpack_require__(286),
            t = __webpack_require__.n(e),
            n = __webpack_require__(749),
            i = __webpack_require__.n(n);
        const r = "rgb(251, 0, 0)";
        class o extends e.Component {
            constructor(e) {
                super(e), this.state = {
                    drag: !1,
                    per: -1
                }, this.setDurationEleWidth = this.setDurationEleWidth.bind(this), this.setCurrEle = this.setCurrEle.bind(this), this.setDrag = this.setDrag.bind(this), this.setDragCurr = this.setDragCurr.bind(this), this.setClickCurr = this.setClickCurr.bind(this), this.onMouseUp = this.onMouseUp.bind(this), this.moveOut = this.moveOut.bind(this), window.document.addEventListener("mousemove", (e => {
                    this.state.drag && this.setDragCurr(e)
                })), window.document.addEventListener("mouseup", (e => {
                    this.setDrag(!1)
                })), window.document.addEventListener("touchend", (e => {
                    this.setDrag(!1)
                }))
            }
            setDurationEleWidth(e) {
                e && (this.durationEleWidth = e.clientWidth, this.duratinEleLeft = e.offsetLeft)
            }
            setCurrEle(e) {
                e && (this.currEle = e)
            }
            setClickCurr(e) {
                let t = e.clientX - this.duratinEleLeft;
                t > this.durationEleWidth && (t = this.durationEleWidth), this.changeCurr(t / this.durationEleWidth, !0)
            }
            setDrag(e) {
                this.setState({
                    drag: e
                }), e || -1 !== this.state.per && this.changeCurr(this.state.per, !0), this.setState({
                    per: -1
                })
            }
            setDragCurr(e) {
                let t = (window.mobile && e.touches ? e.touches[0].clientX : e.clientX) - this.duratinEleLeft;
                t < 0 ? (t = 0, this.setState({
                    drag: !1
                })) : t > this.durationEleWidth && (t = this.durationEleWidth, this.setState({
                    drag: !1
                }));
                let n = t / this.durationEleWidth;
                this.moveCurr(n, e), this.state.drag && (this.changeCurr(n), this.setState({
                    per: n
                }))
            }
            onMouseUp() {
                this.setDrag(!1)
            }
            changeCurr(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                this.props.changeCurr(e, t)
            }
            moveCurr(e, t) {
                this.props.moveCurr(e, t)
            }
            moveOut() {
                this.props.moveOut()
            }
            render() {
                let e = (this.state.drag && -1 !== this.state.per ? this.state.per : this.props.curr) * this.durationEleWidth,
                    n = this.props.buff * this.durationEleWidth;
                return t().createElement("div", {
                    className: this.props.load && !window.mobile ? "f-progress-loading" : null,
                    style: s.durationBg,
                    ref: e => this.setDurationEleWidth(e),
                    onClick: this.setClickCurr,
                    onMouseUp: this.onMouseUp,
                    onMouseMove: this.setDragCurr,
                    onMouseOut: this.moveOut,
                    onTouchMove: this.setDragCurr,
                    onTouchEnd: this.onMouseUp
                }, t().createElement("div", {
                    style: {
                        ...s.buffBg,
                        width: n + "px"
                    },
                    onMouseUp: this.onMouseUp
                }, t().createElement("div", {
                    className: "curr-fire",
                    style: {
                        ...s.currBg,
                        width: e + "px"
                    },
                    ref: this.setCurrEle,
                    onMouseUp: this.onMouseUp
                }, t().createElement("div", {
                    className: "curr-shine",
                    style: {
                        ...s.curr,
                        left: e + "px"
                    },
                    onMouseDown: () => this.setDrag(!0),
                    onMouseUp: this.onMouseUp,
                    onTouchStart: () => this.setDrag(!0),
                    onTouchEnd: this.onMouseUp
                }))))
            }
        }
        const s = {
                durationBg: {
                    position: "relative",
                    display: "inline-block",
                    margin: ".1em 1em",
                    backgroundColor: "rgba(255, 255, 255, 0.19)",
                    height: ".5em",
                    borderRadius: "1em",
                    boxShadow: "0 1px 1px rgba(0,0,0,.15)",
                    cursor: "pointer",
                    flex: 1
                },
                currBg: {
                    background: r,
                    height: "100%",
                    borderRadius: "1em",
                    boxShadow: "0 1px 1px rgba(0,0,0,.15)"
                },
                buffBg: {
                    background: "rgba(255, 255, 255, 0.19)",
                    height: "100%",
                    borderRadius: "1em",
                    boxShadow: "0 1px 1px rgba(0,0,0,.15)"
                },
                curr: {
                    width: ".89em",
                    height: ".89em",
                    background: "#fff",
                    borderRadius: "100%",
                    marginTop: "-0.19em",
                    position: "absolute",
                    marginLeft: "-0.5em"
                }
            },
            a = o;
        class l extends e.Component {
            constructor(e) {
                super(e), this.state = {
                    drag: !1
                }, this.setDurationEleWidth = this.setDurationEleWidth.bind(this), this.setCurrEle = this.setCurrEle.bind(this), this.change = this.change.bind(this), this.setDrag = this.setDrag.bind(this), this.setDragCurr = this.setDragCurr.bind(this), this.setClickCurr = this.setClickCurr.bind(this), this.onMouseUp = this.onMouseUp.bind(this)
            }
            setDurationEleWidth(e) {
                e && (this.durationEleWidth = e.clientWidth, this.duratinEleLeft = e.offsetLeft)
            }
            setCurrEle(e) {
                e && (this.currEle = e)
            }
            setClickCurr(e) {
                let t = e.clientX - this.duratinEleLeft;
                t > this.durationEleWidth && (t = this.durationEleWidth), this.change(t / this.durationEleWidth)
            }
            setDrag(e) {
                this.setState({
                    drag: e
                })
            }
            setDragCurr(e) {
                let t = e.clientX - this.duratinEleLeft;
                t < 0 ? (t = 0, this.setState({
                    drag: !1
                })) : t > this.durationEleWidth && (t = this.durationEleWidth, this.setState({
                    drag: !1
                }));
                let n = t / this.durationEleWidth;
                this.state.drag && this.change(n)
            }
            onMouseUp() {
                this.setDrag(!1)
            }
            change(e) {
                this.props.change(e)
            }
            moveCurr(e, t) {
                this.props.moveCurr(e, t)
            }
            moveOut() {
                this.props.moveOut()
            }
            render() {
                let e = this.props.curr * this.durationEleWidth;
                return t().createElement("div", {
                    className: this.props.load ? "f-progress-loading" : null,
                    style: c.durationBg,
                    ref: e => this.setDurationEleWidth(e),
                    onClick: this.setClickCurr,
                    onMouseUp: this.onMouseUp,
                    onMouseMove: this.setDragCurr
                }, t().createElement("div", {
                    style: {
                        ...c.currBg,
                        width: e + "px"
                    },
                    ref: this.setCurrEle
                }, t().createElement("div", {
                    style: {
                        ...c.curr,
                        left: e + "px"
                    },
                    onMouseDown: () => this.setDrag(!0),
                    onMouseUp: this.onMouseUp
                })))
            }
        }
        const c = {
                durationBg: {
                    position: "relative",
                    display: "inline-block",
                    backgroundColor: "rgba(255, 255, 255, 0.19)",
                    width: "5em",
                    height: ".5em",
                    borderRadius: "1em",
                    boxShadow: "0 1px 1px rgba(0,0,0,.15)",
                    cursor: "pointer",
                    bottom: ".9em"
                },
                currBg: {
                    background: r,
                    height: "100%",
                    borderRadius: "1em",
                    boxShadow: "0 1px 1px rgba(0,0,0,.15)"
                },
                buffBg: {
                    background: "rgba(255, 255, 255, 0.19)",
                    height: "100%",
                    borderRadius: "1em",
                    boxShadow: "0 1px 1px rgba(0,0,0,.15)"
                },
                curr: {
                    width: ".89em",
                    height: ".89em",
                    background: "#fff",
                    borderRadius: "100%",
                    marginTop: "-0.19em",
                    position: "absolute",
                    marginLeft: "-0.5em"
                }
            },
            u = l;
        const d = __webpack_require__.p + "static/media/playStatus.f29d579765b8839becf00e148d072b5f.svg";
        class h extends e.Component {
            render() {
                return t().createElement("img", {
                    style: p.pause,
                    src: d,
                    onClick: this.props.onClick
                })
            }
        }
        const p = {
                pause: {
                    width: "5em",
                    height: "5em",
                    position: "absolute",
                    left: "50%",
                    bottom: "50%",
                    borderRadius: "100%",
                    transform: "translate(-50%,0)",
                    background: r,
                    opacity: "0.9",
                    boxShadow: "0 0px 1px rgba(0,0,0,.15)",
                    zIndex: "99",
                    cursor: "pointer"
                }
            },
            f = h,
            m = "About_line__PKMrO",
            g = "About_divider__JTo2F",
            y = "About_title__XdX+V",
            v = "About_p-info__Ps6a3",
            b = "About_url__6Ckh3";
        class w extends e.Component {
            constructor(e) {
                super(e), this.search = () => {
                    window.jiexi(this.state.searchText)
                }, this.state = {
                    searchText: ""
                }
            }
            render() {
                return t().createElement("div", {
                    style: S.bg
                }, t().createElement("div", {
                    className: m
                }, t().createElement("span", {
                    className: y
                }, "\u641c\u7d22\u89c6\u9891: "), t().createElement("input", {
                    style: S.input,
                    type: "text",
                    placeholder: "\u8bf7\u8f93\u5165\u8981\u641c\u7d22\u7684\u89c6\u9891\u540d\u79f0",
                    onChange: e => this.setState({
                        searchText: e.target.value
                    }),
                    onKeyDown: e => 13 === e.keyCode ? this.search : null
                }), t().createElement("span", {
                    style: S.buttonActive,
                    onClick: this.search
                }, "\u641c\u7d22")), t().createElement("div", {
                    className: m
                }, t().createElement("span", {
                    className: y
                }, "\u64ad\u653e\u901f\u5ea6: "), t().createElement("span", {
                    style: .5 === this.props.speed ? S.buttonActive : S.button,
                    onClick: () => this.props.setSpeed(.5)
                }, "x0.5"), t().createElement("span", {
                    style: 1 === this.props.speed ? S.buttonActive : S.button,
                    onClick: () => this.props.setSpeed(1)
                }, "\u6b63\u5e38"), t().createElement("span", {
                    style: 1.25 === this.props.speed ? S.buttonActive : S.button,
                    onClick: () => this.props.setSpeed(1.25)
                }, "x1.25"), t().createElement("span", {
                    style: 1.5 === this.props.speed ? S.buttonActive : S.button,
                    onClick: () => this.props.setSpeed(1.5)
                }, "x1.5"), t().createElement("span", {
                    style: 2 === this.props.speed ? S.buttonActive : S.button,
                    onClick: () => this.props.setSpeed(2)
                }, "x2"), t().createElement("span", {
                    style: 3 === this.props.speed ? S.buttonActive : S.button,
                    onClick: () => this.props.setSpeed(3)
                }, "x3"), t().createElement("span", {
                    style: 5 === this.props.speed ? S.buttonActive : S.button,
                    onClick: () => this.props.setSpeed(5)
                }, "x5"), t().createElement("span", {
                    style: 7 === this.props.speed ? S.buttonActive : S.button,
                    onClick: () => this.props.setSpeed(7)
                }, "x7"), t().createElement("span", {
                    style: 10 === this.props.speed ? S.buttonActive : S.button,
                    onClick: () => this.props.setSpeed(10)
                }, "x10"), t().createElement("span", null, "\u9ad8\u500d\u901f\u9700\u8981\u7cfb\u7edf\u652f\u6301")), t().createElement("div", {
                    className: m
                }, t().createElement("span", {
                    className: y
                }, "\u753b\u9762\u5c3a\u5bf8: "), t().createElement("span", {
                    style: "contain" === this.props.videoSizeType ? S.buttonActive : S.button,
                    onClick: () => this.props.setVideoSizeType("contain")
                }, "\u9ed8\u8ba4 (\u63a8\u8350)"), t().createElement("span", {
                    style: "cover" === this.props.videoSizeType ? S.buttonActive : S.button,
                    onClick: () => this.props.setVideoSizeType("cover")
                }, "\u6ee1\u5c4f (\u653e\u5927)"), t().createElement("span", {
                    style: "fill" === this.props.videoSizeType ? S.buttonActive : S.button,
                    onClick: () => this.props.setVideoSizeType("fill")
                }, "\u6ee1\u5c4f (\u53d8\u5f62)")), t().createElement("div", {
                    className: m
                }, t().createElement("span", {
                    className: y
                }, "\u81ea\u52a8\u8fde\u64ad\uff0c\u8df3\u8fc7\u7247\u5934\u7247\u5c3e:  \xa0"), t().createElement("span", {
                    style: this.props.video_skip ? S.buttonActive : S.button,
                    onClick: () => window.set_skip(!0)
                }, "\u5f00\u542f"), t().createElement("span", {
                    style: this.props.video_skip ? S.button : S.buttonActive,
                    onClick: () => window.set_skip(!1)
                }, "\u5173\u95ed")), t().createElement("div", {
                    className: m
                }, t().createElement("span", {
                    className: y
                }, "\u5feb\u6377\u6309\u952e\uff1a"), t().createElement("span", {
                    style: S.text
                }, "\u2192\u2190 \u5feb\u8fdb\u5feb\u90005\u79d2\uff0c \u2191\u2193 \u8c03\u6574\u97f3\u91cf\uff0c \u70b9\u51fb,\u7a7a\u683c \u6682\u505c/\u64ad\u653e\uff0c\u53cc\u51fb,\u56de\u8f66 \u5168\u5c4f/\u9000\u51fa\u5168\u5c4f")), window.self != window.top || window.mobile ? null : t().createElement("div", {
                    className: m
                }, t().createElement("span", {
                    className: y
                }, "\u95ee\u9898\u53cd\u9988: "), t().createElement("span", {
                    style: S.text
                }, " \xa0\xa0QQ\uff1a3366 129 856 \uff08\u975e\u5ba2\u670dQQ! \u5907\u6ce8: \u53cd\u9988+\u8981\u53cd\u9988\u7684\u95ee\u9898\uff09")), window.mobile ? t().createElement("div", {
                    className: g
                }) : null, t().createElement("div", {
                    className: window.mobile ? null : v,
                    style: {
                        marginTop: window.mobile ? ".5em" : "3.2em",
                        textAlign: window.mobile ? "center" : "end",
                        ...S.text
                    }
                }, t().createElement("span", {
                    style: S.text,
                    dangerouslySetInnerHTML: {
                        __html: this.props.p2pInfo
                    }
                })), t().createElement("div", {
                    className: window.mobile ? null : b,
                    style: {
                        textAlign: window.mobile ? "center" : "end",
                        marginTop: window.mobile ? ".5em" : "2.6em",
                        marginBottom: ".5em",
                        ...S.text
                    }
                }, t().createElement("a", {
                    href: "https://m1907.top",
                    target: "_blank"
                }, "MPlayer - m1907"), "\xa0\xa0", t().createElement("a", {
                    href: "https://m1907.top",
                    target: "_blank"
                }, "\u89c6\u9891\u52a0\u901f\u6280\u672f\u7531 KKVOD \u63d0\u4f9b")), window.mobile ? t().createElement("div", {
                    className: g
                }) : null, t().createElement("div", {
                    style: {
                        textAlign: "center"
                    }
                }, t().createElement("span", {
                    style: S.buttonActive,
                    onClick: this.props.close
                }, "\u2716")))
            }
        }
        let _ = {
            background: "rgba(0,0,0,.2)",
            position: "absolute",
            right: "15em",
            bottom: "15em",
            left: "15em",
            borderRadius: "2px",
            overflow: "auto",
            padding: "1.5em 1.5em .5em 1.5em",
            color: "rgb(159, 218, 0)",
            fontSize: "0.9em",
            lineHeight: "1.5em",
            boxShadow: "rgb(42, 42, 42) 0px 0px 5px 0px"
        };
        window.mobile && (_ = {
            fontSize: "1em",
            background: "rgba(0,0,0,.3)",
            position: "absolute",
            left: "1em",
            right: "1em",
            bottom: "3em",
            borderRadius: "2px",
            overflow: "auto",
            padding: "1em",
            color: "rgb(159, 218, 0)",
            fontSize: "0.9em",
            textShadow: "0 1px 1px #00000082",
            lineHeight: "1.5em",
            boxShadow: "0 0 5px 0px #383838",
            textAlign: "center"
        });
        const S = {
                bg: _,
                button: {
                    fontSize: ".87em",
                    padding: "0 1em",
                    cursor: "pointer"
                },
                buttonActive: {
                    padding: ".1em 1em",
                    fontSize: ".87em",
                    background: "rgb(251, 0, 0)",
                    borderRadius: "1em",
                    cursor: "pointer"
                },
                text: {
                    fontSize: ".87em"
                },
                input: {
                    marginLeft: ".5em",
                    color: "#fff",
                    width: "11em",
                    background: "none",
                    border: "none",
                    borderBottom: "1px solid rgb(159, 218, 0)"
                }
            },
            C = w;
        __webpack_require__.p;
        __webpack_require__.p;
        __webpack_require__.p;
        __webpack_require__.p;
        const k = __webpack_require__.p + "static/media/full.1d3c20c2132137e0951299618a73b077.svg";
        const E = __webpack_require__.p + "static/media/exFull.4d8266b6fe444ac4ca6f400536c01594.svg";
        const x = __webpack_require__.p + "static/media/volume.564644cbf5a6464fa88828f9e0f79aba.svg";
        const T = __webpack_require__.p + "static/media/mute.48b99c23d9fbd91d2487ee8b44860bef.svg";
        const L = __webpack_require__.p + "static/media/pip.32baef28e4602f7c0580681a177b9982.svg";
        const P = __webpack_require__.p + "static/media/flash.c533bb4065028e6ae77981733b0ec200.svg";
        const A = __webpack_require__.p + "static/media/next-ep.ec3194057b2cff775198ad61729416c4.svg";
        const I = "https://sip1.cloud.nnpp.vip:2223/unsafe/",
            R = {
                img: "Ad_img__v3eMb",
                info: "Ad_info__LUxK3",
                title: "Ad_title__ZuHTc",
                actions: "Ad_actions__VOqac",
                linkButton: "Ad_linkButton__jEVlm",
                hideButton: "Ad_hideButton__s2YLI",
                dot: "Ad_dot__u7he2"
            };
        let N = !0;
        const M = new Date,
            O = M.getHours(),
            D = M.getDay();
        6 === D || 0 === D ? N = !1 : O > 7 && O < 19 || (N = !1);
        const B = N;
        const q = e => {
            location.href = "https://sq.vving.vip?a=" + e
        };

        function U(e) {
            return e.poster.title ? t().createElement("div", {
                className: R.title,
                onClick: () => q(e.poster.id)
            }, e.poster.title) : null
        }

        function z(e) {
            return t().createElement("div", {
                className: R.info,
                style: window.mobile ? {
                    fontSize: "1em"
                } : {}
            }, t().createElement(U, e), t().createElement("div", {
                className: R.actions
            }, t().createElement("div", {
                className: R.hideButton,
                onClick: () => {
                    e.setShow(!1)
                }
            }, "\u9690\u85cf"), t().createElement("div", {
                className: R.linkButton,
                onClick: () => q(e.poster.id)
            }, "\u70b9\u51fb\u524d\u5f80\u795e\u5947\u5546\u5e97\u8d2d\u4e70", t().createElement("br", null), t().createElement("span", {
                style: {
                    fontSize: ".7em",
                    marginRight: ".2em"
                }
            }, "\u6216\u6d4f\u89c8\u5668\u8f93\u5165"), t().createElement("span", {
                style: {
                    fontSize: "1em"
                }
            }, "SQ", t().createElement("span", {
                className: R.dot
            }, "."), "Vving.vip"))))
        }
        const F = function(e) {
            if (0 === Object.keys(e.poster).length) return null;
            if (!e.show && e.play && e.setShowAd(!0), !e.show) return null;
            if (!e.load && e.play) return null;
            const n = !e.load && !e.play;
            return t().createElement("div", null, t().createElement("img", {
                className: R.img,
                style: n ? {
                    width: "96%",
                    height: "96%"
                } : {},
                src: "".concat(I).concat(e.poster.img)
            }), t().createElement(z, Object.assign({
                setShow: t => e.setShowAd(t)
            }, e)))
        };
        var j = __webpack_require__(347),
            H = __webpack_require__.n(j),
            W = __webpack_require__(906),
            V = __webpack_require__(696);
        let Q = 0,
            $ = 0,
            K = 0,
            X = 0,
            Y = [],
            G = [];

        function J(e, t) {
            const n = e / 1048576;
            "p2p" === t ? ($ += n, G.push(n)) : K += n, Y.push({
                method: t,
                size: n,
                timestamp: performance.now()
            })
        }

        function Z(e, t) {
            X += e / 1048576
        }

        function ee(e) {
            Q++
        }

        function te(e) {
            Q--
        }

        function ne(e) {
            const t = function() {
                let e = 0,
                    t = 0,
                    n = performance.now() - 1e4,
                    i = Y.length;
                for (; i--;) {
                    let r = Y[i];
                    if (r.timestamp < n) break;
                    "p2p" === r.method ? t += r.size : "http" === r.method && (e += r.size)
                }
                return Y.splice(0, i + 1), {
                    http: (e / 10).toFixed(2),
                    p2p: (t / 10).toFixed(2)
                }
            }();
            e(X.toFixed(2), $.toFixed(2), K.toFixed(2), Q, t.http, t.p2p)
        }
        var ie, re;
        const oe = function(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : null;
                e.addEventListener("onChunkDownloaded", J), e.addEventListener("onChunkUploaded", Z), e.addEventListener("onPeerConnect", ee), e.addEventListener("onPeerClose", te), ie && clearInterval(ie), t && (ie = setInterval((() => {
                    ne(t)
                }), 500)), re && clearInterval(re), re = setInterval((async () => {
                    const e = function(e) {
                        let t = 0;
                        for (let n = 0; n < e.length; n++) t += e[n];
                        return t
                    }(G.splice(0, G.length)) / 1024;
                    if (e > 0) {
                        let t = new URLSearchParams;
                        t.set("t", e), await fetch("//m1-a1.cloud.nnpp.vip:2223/api/r", {
                            method: "POST",
                            body: t
                        })
                    }
                }), 3e4)
            },
            se = "ph";

        function ae(e, t, n) {
            let i = ce();
            i || (i = {});
            let r = Date.now();
            i[e] = {
                ep: t,
                time: r,
                t: n
            };
            var o;
            (() => {
                if (Object.keys(i).length < 10) return;
                let e = {
                    key: "",
                    time: r
                };
                for (const t in i)
                    if (i.hasOwnProperty(t)) {
                        const n = i[t];
                        e.time > n.time && (e = {
                            key: t,
                            time: n.time
                        })
                    } delete i[e.key]
            })(), o = i, localStorage.setItem(se, encodeURIComponent(JSON.stringify(o)))
        }

        function le() {
            const e = ce();
            return e || {}
        }

        function ce() {
            return JSON.parse(decodeURIComponent(localStorage.getItem(se)))
        }

        function ue() {
            let e = ce(),
                t = [],
                n = [];
            for (const i in e) e.hasOwnProperty(i) && n.push({
                name: i,
                time: e[i].time
            });
            n.sort(((e, t) => t.time - e.time));
            for (const i in n) {
                const e = n[i].name;
                t.push(e)
            }
            return t
        }
        const de = new class {
            constructor() {
                this.T = -1
            }
            start() {
                this.T = setInterval((() => {
                    localStorage.setItem("pt", Number(localStorage.getItem("pt")) + 10)
                }), 1e4)
            }
            stop() {
                clearInterval(this.T)
            }
        };

        function he() {
            const e = H().getJSON("igh");
            let t = [];
            const n = Date.now() / 1e3;
            return e && e.t > n - 1200 && (t = e.h), t
        }
        const pe = {
            add: function(e) {
                (e = new URL(e).host).length > 7 && (e = e.substr(0, 7));
                let t = he(); - 1 === t.indexOf(e) && t.push(e), H().set("igh", JSON.stringify({
                    t: Date.now(),
                    h: t
                }), {
                    secure: !0,
                    sameSite: "None"
                })
            },
            getAll: he
        };
        var fe = Object.defineProperty,
            me = (e, t, n) => ((e, t, n) => t in e ? fe(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n)(e, "symbol" !== typeof t ? t + "" : t, n);
        class ge extends Error {
            constructor(e, t) {
                super(t), me(this, "timestamp"), this.type = e, this.timestamp = performance.now()
            }
        }
        class ye extends Error {
            constructor(e) {
                super(), this.type = e
            }
        }
        class ve {
            constructor(e, t, n) {
                me(this, "requestControls"), me(this, "abortController", new AbortController), me(this, "expectedBytesLength"), me(this, "requestByteRange"), me(this, "onChunkDownloaded"), this.request = e, this.httpConfig = t, this.onChunkDownloaded = n.getEventDispatcher("onChunkDownloaded");
                const {
                    byteRange: i
                } = this.request.segment;
                var r;
                (i && (this.requestByteRange = {
                    ...i
                }), 0 !== e.loadedBytes) && (this.requestByteRange = null !== (r = this.requestByteRange) && void 0 !== r ? r : {
                    start: 0
                }, this.requestByteRange.start = this.requestByteRange.start + e.loadedBytes);
                this.request.totalBytes && (this.expectedBytesLength = this.request.totalBytes - this.request.loadedBytes), this.requestControls = this.request.start({
                    downloadSource: "http"
                }, {
                    abort: () => this.abortController.abort("abort"),
                    notReceivingBytesTimeoutMs: this.httpConfig.httpNotReceivingBytesTimeoutMs
                }), this.fetch()
            }
            async fetch() {
                var e, t;
                const {
                    segment: n
                } = this.request;
                try {
                    let r = await (null == (t = (e = this.httpConfig).httpRequestSetup) ? void 0 : t.call(e, n.url, n.byteRange, this.abortController.signal, this.requestByteRange));
                    if (!r) {
                        var i;
                        const e = new Headers(this.requestByteRange ? {
                            Range: "bytes=".concat(this.requestByteRange.start, "-").concat(null !== (i = this.requestByteRange.end) && void 0 !== i ? i : "")
                        } : void 0);
                        r = new Request(n.url, {
                            headers: e,
                            signal: this.abortController.signal
                        })
                    }
                    if (this.abortController.signal.aborted) throw new DOMException("Request aborted before request fetch", "AbortError");
                    const o = await window.fetch(r);
                    if (this.handleResponseHeaders(o), !o.body) return;
                    const {
                        requestControls: s
                    } = this;
                    s.firstBytesReceived();
                    const a = o.body.getReader();
                    for await (const e of async function*(e) {
                        for (;;) {
                            const {
                                done: t,
                                value: n
                            } = await e.read();
                            if (t) break;
                            yield n
                        }
                    }(a)) this.requestControls.addLoadedChunk(e), this.onChunkDownloaded(e.byteLength, "http");
                    s.completeOnSuccess()
                } catch (r) {
                    this.handleError(r)
                }
            }
            handleResponseHeaders(e) {
                if (!e.ok) throw 406 === e.status ? (this.request.clearLoadedBytes(), new ge("http-bytes-mismatch", e.statusText)) : new ge("http-error", e.statusText);
                const {
                    requestByteRange: t
                } = this;
                if (t)
                    if (200 === e.status) {
                        if (this.request.segment.byteRange) throw new ge("http-unexpected-status-code");
                        this.request.clearLoadedBytes()
                    } else {
                        if (206 !== e.status) throw new ge("http-unexpected-status-code", e.statusText);
                        const n = e.headers.get("Content-Length");
                        if (n && void 0 !== this.expectedBytesLength && this.expectedBytesLength !== +n) throw this.request.clearLoadedBytes(), new ge("http-bytes-mismatch", e.statusText);
                        const i = e.headers.get("Content-Range"),
                            r = i ? function(e) {
                                const t = e.trim().match(/^bytes (?:(?:(\d+)|)-(?:(\d+)|)|\*)\/(?:(\d+)|\*)$/);
                                if (!t) return;
                                const [, n, i, r] = t;
                                return {
                                    from: n ? parseInt(n) : void 0,
                                    to: i ? parseInt(i) : void 0,
                                    total: r ? parseInt(r) : void 0
                                }
                            }(i) : void 0;
                        if (r) {
                            const {
                                from: n,
                                to: i,
                                total: o
                            } = r;
                            if (void 0 !== o && this.request.totalBytes !== o || void 0 !== n && t.start !== n || void 0 !== i && void 0 !== t.end && t.end !== i) throw this.request.clearLoadedBytes(), new ge("http-bytes-mismatch", e.statusText)
                        }
                    } if (200 === e.status && void 0 === this.request.totalBytes) {
                    const t = e.headers.get("Content-Length");
                    t && this.request.setTotalBytes(+t)
                }
            }
            handleError(e) {
                if (e instanceof Error) {
                    if ("abort" !== e.name) return;
                    const t = e instanceof ge ? e : new ge("http-error", e.message);
                    this.requestControls.abortOnError(t)
                }
            }
        }

        function be(e) {
            return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
        }
        var we, _e, Se = {
                exports: {}
            },
            Ce = Se.exports = {};

        function ke() {
            throw new Error("setTimeout has not been defined")
        }

        function Ee() {
            throw new Error("clearTimeout has not been defined")
        }

        function xe(e) {
            if (we === setTimeout) return setTimeout(e, 0);
            if ((we === ke || !we) && setTimeout) return we = setTimeout, setTimeout(e, 0);
            try {
                return we(e, 0)
            } catch (t) {
                try {
                    return we.call(null, e, 0)
                } catch (n) {
                    return we.call(this, e, 0)
                }
            }
        }! function() {
            try {
                we = "function" === typeof setTimeout ? setTimeout : ke
            } catch (e) {
                we = ke
            }
            try {
                _e = "function" === typeof clearTimeout ? clearTimeout : Ee
            } catch (e) {
                _e = Ee
            }
        }();
        var Te, Le = [],
            Pe = !1,
            Ae = -1;

        function Ie() {
            Pe && Te && (Pe = !1, Te.length ? Le = Te.concat(Le) : Ae = -1, Le.length && Re())
        }

        function Re() {
            if (!Pe) {
                var e = xe(Ie);
                Pe = !0;
                for (var t = Le.length; t;) {
                    for (Te = Le, Le = []; ++Ae < t;) Te && Te[Ae].run();
                    Ae = -1, t = Le.length
                }
                Te = null, Pe = !1,
                    function(e) {
                        if (_e === clearTimeout) return clearTimeout(e);
                        if ((_e === Ee || !_e) && clearTimeout) return _e = clearTimeout, clearTimeout(e);
                        try {
                            return _e(e)
                        } catch (t) {
                            try {
                                return _e.call(null, e)
                            } catch (n) {
                                return _e.call(this, e)
                            }
                        }
                    }(e)
            }
        }

        function Ne(e, t) {
            this.fun = e, this.array = t
        }

        function Me() {}
        Ce.nextTick = function(e) {
            var t = new Array(arguments.length - 1);
            if (arguments.length > 1)
                for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
            Le.push(new Ne(e, t)), 1 !== Le.length || Pe || xe(Re)
        }, Ne.prototype.run = function() {
            this.fun.apply(null, this.array)
        }, Ce.title = "browser", Ce.browser = !0, Ce.env = {}, Ce.argv = [], Ce.version = "", Ce.versions = {}, Ce.on = Me, Ce.addListener = Me, Ce.once = Me, Ce.off = Me, Ce.removeListener = Me, Ce.removeAllListeners = Me, Ce.emit = Me, Ce.prependListener = Me, Ce.prependOnceListener = Me, Ce.listeners = function(e) {
            return []
        }, Ce.binding = function(e) {
            throw new Error("process.binding is not supported")
        }, Ce.cwd = function() {
            return "/"
        }, Ce.chdir = function(e) {
            throw new Error("process.chdir is not supported")
        }, Ce.umask = function() {
            return 0
        };
        const Oe = be(Se.exports);
        var De = "undefined" !== typeof globalThis ? globalThis : "undefined" !== typeof window ? window : "undefined" !== typeof __webpack_require__.g ? __webpack_require__.g : "undefined" !== typeof self ? self : {};

        function Be(e) {
            return e && e.__esModule && Object.prototype.hasOwnProperty.call(e, "default") ? e.default : e
        }
        var qe, Ue, ze = {
            exports: {}
        };

        function Fe() {
            if (Ue) return qe;
            Ue = 1;
            var e = 1e3,
                t = 60 * e,
                n = 60 * t,
                i = 24 * n,
                r = 7 * i,
                o = 365.25 * i;

            function s(e, t, n, i) {
                var r = t >= 1.5 * n;
                return Math.round(e / n) + " " + i + (r ? "s" : "")
            }
            return qe = function(a, l) {
                l = l || {};
                var c = typeof a;
                if ("string" === c && a.length > 0) return function(s) {
                    if ((s = String(s)).length > 100) return;
                    var a = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(s);
                    if (!a) return;
                    var l = parseFloat(a[1]);
                    switch ((a[2] || "ms").toLowerCase()) {
                        case "years":
                        case "year":
                        case "yrs":
                        case "yr":
                        case "y":
                            return l * o;
                        case "weeks":
                        case "week":
                        case "w":
                            return l * r;
                        case "days":
                        case "day":
                        case "d":
                            return l * i;
                        case "hours":
                        case "hour":
                        case "hrs":
                        case "hr":
                        case "h":
                            return l * n;
                        case "minutes":
                        case "minute":
                        case "mins":
                        case "min":
                        case "m":
                            return l * t;
                        case "seconds":
                        case "second":
                        case "secs":
                        case "sec":
                        case "s":
                            return l * e;
                        case "milliseconds":
                        case "millisecond":
                        case "msecs":
                        case "msec":
                        case "ms":
                            return l;
                        default:
                            return
                    }
                }(a);
                if ("number" === c && isFinite(a)) return l.long ? function(r) {
                    var o = Math.abs(r);
                    if (o >= i) return s(r, o, i, "day");
                    if (o >= n) return s(r, o, n, "hour");
                    if (o >= t) return s(r, o, t, "minute");
                    if (o >= e) return s(r, o, e, "second");
                    return r + " ms"
                }(a) : function(r) {
                    var o = Math.abs(r);
                    if (o >= i) return Math.round(r / i) + "d";
                    if (o >= n) return Math.round(r / n) + "h";
                    if (o >= t) return Math.round(r / t) + "m";
                    if (o >= e) return Math.round(r / e) + "s";
                    return r + "ms"
                }(a);
                throw new Error("val is not a non-empty string or a valid number. val=" + JSON.stringify(a))
            }
        }
        var je = function(e) {
            function t(e) {
                let i, r, o, s = null;

                function a() {
                    for (var e = arguments.length, n = new Array(e), r = 0; r < e; r++) n[r] = arguments[r];
                    if (!a.enabled) return;
                    const o = a,
                        s = Number(new Date),
                        l = s - (i || s);
                    o.diff = l, o.prev = i, o.curr = s, i = s, n[0] = t.coerce(n[0]), "string" !== typeof n[0] && n.unshift("%O");
                    let c = 0;
                    n[0] = n[0].replace(/%([a-zA-Z%])/g, ((e, i) => {
                        if ("%%" === e) return "%";
                        c++;
                        const r = t.formatters[i];
                        if ("function" === typeof r) {
                            const t = n[c];
                            e = r.call(o, t), n.splice(c, 1), c--
                        }
                        return e
                    })), t.formatArgs.call(o, n);
                    (o.log || t.log).apply(o, n)
                }
                return a.namespace = e, a.useColors = t.useColors(), a.color = t.selectColor(e), a.extend = n, a.destroy = t.destroy, Object.defineProperty(a, "enabled", {
                    enumerable: !0,
                    configurable: !1,
                    get: () => null !== s ? s : (r !== t.namespaces && (r = t.namespaces, o = t.enabled(e)), o),
                    set: e => {
                        s = e
                    }
                }), "function" === typeof t.init && t.init(a), a
            }

            function n(e, n) {
                const i = t(this.namespace + ("undefined" === typeof n ? ":" : n) + e);
                return i.log = this.log, i
            }

            function i(e) {
                return e.toString().substring(2, e.toString().length - 2).replace(/\.\*\?$/, "*")
            }
            return t.debug = t, t.default = t, t.coerce = function(e) {
                if (e instanceof Error) return e.stack || e.message;
                return e
            }, t.disable = function() {
                const e = [...t.names.map(i), ...t.skips.map(i).map((e => "-" + e))].join(",");
                return t.enable(""), e
            }, t.enable = function(e) {
                let n;
                t.save(e), t.namespaces = e, t.names = [], t.skips = [];
                const i = ("string" === typeof e ? e : "").split(/[\s,]+/),
                    r = i.length;
                for (n = 0; n < r; n++) i[n] && ("-" === (e = i[n].replace(/\*/g, ".*?"))[0] ? t.skips.push(new RegExp("^" + e.slice(1) + "$")) : t.names.push(new RegExp("^" + e + "$")))
            }, t.enabled = function(e) {
                if ("*" === e[e.length - 1]) return !0;
                let n, i;
                for (n = 0, i = t.skips.length; n < i; n++)
                    if (t.skips[n].test(e)) return !1;
                for (n = 0, i = t.names.length; n < i; n++)
                    if (t.names[n].test(e)) return !0;
                return !1
            }, t.humanize = Fe(), t.destroy = function() {
                console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.")
            }, Object.keys(e).forEach((n => {
                t[n] = e[n]
            })), t.names = [], t.skips = [], t.formatters = {}, t.selectColor = function(e) {
                let n = 0;
                for (let t = 0; t < e.length; t++) n = (n << 5) - n + e.charCodeAt(t), n |= 0;
                return t.colors[Math.abs(n) % t.colors.length]
            }, t.enable(t.load()), t
        };
        ! function(e, t) {
            t.formatArgs = function(t) {
                if (t[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + t[0] + (this.useColors ? "%c " : " ") + "+" + e.exports.humanize(this.diff), !this.useColors) return;
                const n = "color: " + this.color;
                t.splice(1, 0, n, "color: inherit");
                let i = 0,
                    r = 0;
                t[0].replace(/%[a-zA-Z%]/g, (e => {
                    "%%" !== e && (i++, "%c" === e && (r = i))
                })), t.splice(r, 0, n)
            }, t.save = function(e) {
                try {
                    e ? t.storage.setItem("debug", e) : t.storage.removeItem("debug")
                } catch (n) {}
            }, t.load = function() {
                let e;
                try {
                    e = t.storage.getItem("debug")
                } catch (n) {}!e && "undefined" !== typeof Oe && "env" in Oe && (e = Oe.env.DEBUG);
                return e
            }, t.useColors = function() {
                if ("undefined" !== typeof window && window.process && ("renderer" === window.process.type || window.process.__nwjs)) return !0;
                if ("undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) return !1;
                let e;
                return "undefined" !== typeof document && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || "undefined" !== typeof window && window.console && (window.console.firebug || window.console.exception && window.console.table) || "undefined" !== typeof navigator && navigator.userAgent && (e = navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)) && parseInt(e[1], 10) >= 31 || "undefined" !== typeof navigator && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/)
            }, t.storage = function() {
                try {
                    return localStorage
                } catch (e) {}
            }(), t.destroy = (() => {
                let e = !1;
                return () => {
                    e || (e = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."))
                }
            })(), t.colors = ["#0000CC", "#0000FF", "#0033CC", "#0033FF", "#0066CC", "#0066FF", "#0099CC", "#0099FF", "#00CC00", "#00CC33", "#00CC66", "#00CC99", "#00CCCC", "#00CCFF", "#3300CC", "#3300FF", "#3333CC", "#3333FF", "#3366CC", "#3366FF", "#3399CC", "#3399FF", "#33CC00", "#33CC33", "#33CC66", "#33CC99", "#33CCCC", "#33CCFF", "#6600CC", "#6600FF", "#6633CC", "#6633FF", "#66CC00", "#66CC33", "#9900CC", "#9900FF", "#9933CC", "#9933FF", "#99CC00", "#99CC33", "#CC0000", "#CC0033", "#CC0066", "#CC0099", "#CC00CC", "#CC00FF", "#CC3300", "#CC3333", "#CC3366", "#CC3399", "#CC33CC", "#CC33FF", "#CC6600", "#CC6633", "#CC9900", "#CC9933", "#CCCC00", "#CCCC33", "#FF0000", "#FF0033", "#FF0066", "#FF0099", "#FF00CC", "#FF00FF", "#FF3300", "#FF3333", "#FF3366", "#FF3399", "#FF33CC", "#FF33FF", "#FF6600", "#FF6633", "#FF9900", "#FF9933", "#FFCC00", "#FFCC33"], t.log = console.debug || console.log || (() => {}), e.exports = je(t);
            const {
                formatters: n
            } = e.exports;
            n.j = function(e) {
                try {
                    return JSON.stringify(e)
                } catch (t) {
                    return "[UnexpectedJSONParseError]: " + t.message
                }
            }
        }(ze, ze.exports);
        var He = ze.exports;
        const We = Be(He);
        var Ve, Qe = {
                exports: {}
            },
            $e = "object" === typeof Reflect ? Reflect : null,
            Ke = $e && "function" === typeof $e.apply ? $e.apply : function(e, t, n) {
                return Function.prototype.apply.call(e, t, n)
            };
        Ve = $e && "function" === typeof $e.ownKeys ? $e.ownKeys : Object.getOwnPropertySymbols ? function(e) {
            return Object.getOwnPropertyNames(e).concat(Object.getOwnPropertySymbols(e))
        } : function(e) {
            return Object.getOwnPropertyNames(e)
        };
        var Xe = Number.isNaN || function(e) {
            return e !== e
        };

        function Ye() {
            Ye.init.call(this)
        }
        Qe.exports = Ye, Qe.exports.once = function(e, t) {
            return new Promise((function(n, i) {
                function r(n) {
                    e.removeListener(t, o), i(n)
                }

                function o() {
                    "function" === typeof e.removeListener && e.removeListener("error", r), n([].slice.call(arguments))
                }
                st(e, t, o, {
                    once: !0
                }), "error" !== t && function(e, t, n) {
                    "function" === typeof e.on && st(e, "error", t, n)
                }(e, r, {
                    once: !0
                })
            }))
        }, Ye.EventEmitter = Ye, Ye.prototype._events = void 0, Ye.prototype._eventsCount = 0, Ye.prototype._maxListeners = void 0;
        var Ge = 10;

        function Je(e) {
            if ("function" !== typeof e) throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof e)
        }

        function Ze(e) {
            return void 0 === e._maxListeners ? Ye.defaultMaxListeners : e._maxListeners
        }

        function et(e, t, n, i) {
            var r, o, s, a;
            if (Je(n), void 0 === (o = e._events) ? (o = e._events = Object.create(null), e._eventsCount = 0) : (void 0 !== o.newListener && (e.emit("newListener", t, n.listener ? n.listener : n), o = e._events), s = o[t]), void 0 === s) s = o[t] = n, ++e._eventsCount;
            else if ("function" === typeof s ? s = o[t] = i ? [n, s] : [s, n] : i ? s.unshift(n) : s.push(n), (r = Ze(e)) > 0 && s.length > r && !s.warned) {
                s.warned = !0;
                var l = new Error("Possible EventEmitter memory leak detected. " + s.length + " " + String(t) + " listeners added. Use emitter.setMaxListeners() to increase limit");
                l.name = "MaxListenersExceededWarning", l.emitter = e, l.type = t, l.count = s.length, a = l, console && console.warn && console.warn(a)
            }
            return e
        }

        function tt() {
            if (!this.fired) return this.target.removeListener(this.type, this.wrapFn), this.fired = !0, 0 === arguments.length ? this.listener.call(this.target) : this.listener.apply(this.target, arguments)
        }

        function nt(e, t, n) {
            var i = {
                    fired: !1,
                    wrapFn: void 0,
                    target: e,
                    type: t,
                    listener: n
                },
                r = tt.bind(i);
            return r.listener = n, i.wrapFn = r, r
        }

        function it(e, t, n) {
            var i = e._events;
            if (void 0 === i) return [];
            var r = i[t];
            return void 0 === r ? [] : "function" === typeof r ? n ? [r.listener || r] : [r] : n ? function(e) {
                for (var t = new Array(e.length), n = 0; n < t.length; ++n) t[n] = e[n].listener || e[n];
                return t
            }(r) : ot(r, r.length)
        }

        function rt(e) {
            var t = this._events;
            if (void 0 !== t) {
                var n = t[e];
                if ("function" === typeof n) return 1;
                if (void 0 !== n) return n.length
            }
            return 0
        }

        function ot(e, t) {
            for (var n = new Array(t), i = 0; i < t; ++i) n[i] = e[i];
            return n
        }

        function st(e, t, n, i) {
            if ("function" === typeof e.on) i.once ? e.once(t, n) : e.on(t, n);
            else {
                if ("function" !== typeof e.addEventListener) throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof e);
                e.addEventListener(t, (function r(o) {
                    i.once && e.removeEventListener(t, r), n(o)
                }))
            }
        }
        Object.defineProperty(Ye, "defaultMaxListeners", {
            enumerable: !0,
            get: function() {
                return Ge
            },
            set: function(e) {
                if ("number" !== typeof e || e < 0 || Xe(e)) throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + e + ".");
                Ge = e
            }
        }), Ye.init = function() {
            void 0 !== this._events && this._events !== Object.getPrototypeOf(this)._events || (this._events = Object.create(null), this._eventsCount = 0), this._maxListeners = this._maxListeners || void 0
        }, Ye.prototype.setMaxListeners = function(e) {
            if ("number" !== typeof e || e < 0 || Xe(e)) throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + e + ".");
            return this._maxListeners = e, this
        }, Ye.prototype.getMaxListeners = function() {
            return Ze(this)
        }, Ye.prototype.emit = function(e) {
            for (var t = [], n = 1; n < arguments.length; n++) t.push(arguments[n]);
            var i = "error" === e,
                r = this._events;
            if (void 0 !== r) i = i && void 0 === r.error;
            else if (!i) return !1;
            if (i) {
                var o;
                if (t.length > 0 && (o = t[0]), o instanceof Error) throw o;
                var s = new Error("Unhandled error." + (o ? " (" + o.message + ")" : ""));
                throw s.context = o, s
            }
            var a = r[e];
            if (void 0 === a) return !1;
            if ("function" === typeof a) Ke(a, this, t);
            else {
                var l = a.length,
                    c = ot(a, l);
                for (n = 0; n < l; ++n) Ke(c[n], this, t)
            }
            return !0
        }, Ye.prototype.addListener = function(e, t) {
            return et(this, e, t, !1)
        }, Ye.prototype.on = Ye.prototype.addListener, Ye.prototype.prependListener = function(e, t) {
            return et(this, e, t, !0)
        }, Ye.prototype.once = function(e, t) {
            return Je(t), this.on(e, nt(this, e, t)), this
        }, Ye.prototype.prependOnceListener = function(e, t) {
            return Je(t), this.prependListener(e, nt(this, e, t)), this
        }, Ye.prototype.removeListener = function(e, t) {
            var n, i, r, o, s;
            if (Je(t), void 0 === (i = this._events)) return this;
            if (void 0 === (n = i[e])) return this;
            if (n === t || n.listener === t) 0 === --this._eventsCount ? this._events = Object.create(null) : (delete i[e], i.removeListener && this.emit("removeListener", e, n.listener || t));
            else if ("function" !== typeof n) {
                for (r = -1, o = n.length - 1; o >= 0; o--)
                    if (n[o] === t || n[o].listener === t) {
                        s = n[o].listener, r = o;
                        break
                    } if (r < 0) return this;
                0 === r ? n.shift() : function(e, t) {
                    for (; t + 1 < e.length; t++) e[t] = e[t + 1];
                    e.pop()
                }(n, r), 1 === n.length && (i[e] = n[0]), void 0 !== i.removeListener && this.emit("removeListener", e, s || t)
            }
            return this
        }, Ye.prototype.off = Ye.prototype.removeListener, Ye.prototype.removeAllListeners = function(e) {
            var t, n, i;
            if (void 0 === (n = this._events)) return this;
            if (void 0 === n.removeListener) return 0 === arguments.length ? (this._events = Object.create(null), this._eventsCount = 0) : void 0 !== n[e] && (0 === --this._eventsCount ? this._events = Object.create(null) : delete n[e]), this;
            if (0 === arguments.length) {
                var r, o = Object.keys(n);
                for (i = 0; i < o.length; ++i) "removeListener" !== (r = o[i]) && this.removeAllListeners(r);
                return this.removeAllListeners("removeListener"), this._events = Object.create(null), this._eventsCount = 0, this
            }
            if ("function" === typeof(t = n[e])) this.removeListener(e, t);
            else if (void 0 !== t)
                for (i = t.length - 1; i >= 0; i--) this.removeListener(e, t[i]);
            return this
        }, Ye.prototype.listeners = function(e) {
            return it(this, e, !0)
        }, Ye.prototype.rawListeners = function(e) {
            return it(this, e, !1)
        }, Ye.listenerCount = function(e, t) {
            return "function" === typeof e.listenerCount ? e.listenerCount(t) : rt.call(e, t)
        }, Ye.prototype.listenerCount = rt, Ye.prototype.eventNames = function() {
            return this._eventsCount > 0 ? Ve(this._events) : []
        };
        var at = Qe.exports;
        const lt = Be(at);
        var ct = {
                exports: {}
            },
            ut = function e(t, n) {
                if (t && n) return e(t)(n);
                if ("function" !== typeof t) throw new TypeError("need wrapper function");
                return Object.keys(t).forEach((function(e) {
                    i[e] = t[e]
                })), i;

                function i() {
                    for (var e = new Array(arguments.length), n = 0; n < e.length; n++) e[n] = arguments[n];
                    var i = t.apply(this, e),
                        r = e[e.length - 1];
                    return "function" === typeof i && i !== r && Object.keys(r).forEach((function(e) {
                        i[e] = r[e]
                    })), i
                }
            };
        var dt = ut;

        function ht(e) {
            var t = function() {
                return t.called ? t.value : (t.called = !0, t.value = e.apply(this, arguments))
            };
            return t.called = !1, t
        }

        function pt(e) {
            var t = function() {
                    if (t.called) throw new Error(t.onceError);
                    return t.called = !0, t.value = e.apply(this, arguments)
                },
                n = e.name || "Function wrapped with `once`";
            return t.onceError = n + " shouldn't be called more than once", t.called = !1, t
        }
        ct.exports = dt(ht), ct.exports.strict = dt(pt), ht.proto = ht((function() {
            Object.defineProperty(Function.prototype, "once", {
                value: function() {
                    return ht(this)
                },
                configurable: !0
            }), Object.defineProperty(Function.prototype, "onceStrict", {
                value: function() {
                    return pt(this)
                },
                configurable: !0
            })
        }));
        const ft = Be(ct.exports);
        let mt;
        var gt = "function" === typeof queueMicrotask ? queueMicrotask.bind("undefined" !== typeof window ? window : De) : e => (mt || (mt = Promise.resolve())).then(e).catch((e => setTimeout((() => {
            throw e
        }), 0)));
        const yt = Be(gt);
        var vt = function(e, t) {
            let n, i, r, o = !0;
            Array.isArray(e) ? (n = [], i = e.length) : (r = Object.keys(e), n = {}, i = r.length);

            function s(e) {
                function i() {
                    t && t(e, n), t = null
                }
                o ? bt(i) : i()
            }

            function a(e, t, r) {
                n[e] = r, (0 === --i || t) && s(t)
            }
            i ? r ? r.forEach((function(t) {
                e[t]((function(e, n) {
                    a(t, e, n)
                }))
            })) : e.forEach((function(e, t) {
                e((function(e, n) {
                    a(t, e, n)
                }))
            })) : s(null);
            o = !1
        };
        const bt = gt;
        const wt = Be(vt),
            _t = "undefined" !== typeof window ? window : self,
            St = _t.RTCPeerConnection || _t.mozRTCPeerConnection || _t.webkitRTCPeerConnection,
            Ct = _t.RTCSessionDescription || _t.mozRTCSessionDescription || _t.webkitRTCSessionDescription,
            kt = _t.RTCIceCandidate || _t.mozRTCIceCandidate || _t.webkitRTCIceCandidate;
        var Et = "function" === typeof queueMicrotask ? queueMicrotask : e => Promise.resolve().then(e);
        const xt = class {
            constructor(e) {
                if (!(e > 0) || 0 !== (e - 1 & e)) throw new Error("Max size for a FixedFIFO should be a power of two");
                this.buffer = new Array(e), this.mask = e - 1, this.top = 0, this.btm = 0, this.next = null
            }
            clear() {
                this.top = this.btm = 0, this.next = null, this.buffer.fill(void 0)
            }
            push(e) {
                return void 0 === this.buffer[this.top] && (this.buffer[this.top] = e, this.top = this.top + 1 & this.mask, !0)
            }
            shift() {
                const e = this.buffer[this.btm];
                if (void 0 !== e) return this.buffer[this.btm] = void 0, this.btm = this.btm + 1 & this.mask, e
            }
            peek() {
                return this.buffer[this.btm]
            }
            isEmpty() {
                return void 0 === this.buffer[this.btm]
            }
        };
        var Tt = {
            exports: {}
        };

        function Lt(e) {
            return e.length
        }
        var Pt = {
            byteLength: Lt,
            toString: function(e) {
                const t = e.byteLength;
                let n = "";
                for (let i = 0; i < t; i++) n += String.fromCharCode(e[i]);
                return n
            },
            write: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Lt(t);
                const r = Math.min(i, e.byteLength - n);
                for (let o = 0; o < r; o++) e[n + o] = t.charCodeAt(o);
                return r
            }
        };
        const At = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            It = new Uint8Array(256);
        for (let gl = 0; gl < 64; gl++) It[At.charCodeAt(gl)] = gl;

        function Rt(e) {
            let t = e.length;
            return 61 === e.charCodeAt(t - 1) && t--, t > 1 && 61 === e.charCodeAt(t - 1) && t--, 3 * t >>> 2
        }
        It[45] = 62, It[95] = 63;
        var Nt = {
            byteLength: Rt,
            toString: function(e) {
                const t = e.byteLength;
                let n = "";
                for (let i = 0; i < t; i += 3) n += At[e[i] >> 2] + At[(3 & e[i]) << 4 | e[i + 1] >> 4] + At[(15 & e[i + 1]) << 2 | e[i + 2] >> 6] + At[63 & e[i + 2]];
                return t % 3 === 2 ? n = n.substring(0, n.length - 1) + "=" : t % 3 === 1 && (n = n.substring(0, n.length - 2) + "=="), n
            },
            write: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Rt(t);
                const r = Math.min(i, e.byteLength - n);
                for (let o = 0, s = 0; s < r; o += 4) {
                    const n = It[t.charCodeAt(o)],
                        i = It[t.charCodeAt(o + 1)],
                        r = It[t.charCodeAt(o + 2)],
                        a = It[t.charCodeAt(o + 3)];
                    e[s++] = n << 2 | i >> 4, e[s++] = (15 & i) << 4 | r >> 2, e[s++] = (3 & r) << 6 | 63 & a
                }
                return r
            }
        };

        function Mt(e) {
            return e.length >>> 1
        }
        var Ot = {
            byteLength: Mt,
            toString: function(e) {
                const t = e.byteLength;
                e = new DataView(e.buffer, e.byteOffset, t);
                let n = "",
                    i = 0;
                for (let r = t - t % 4; i < r; i += 4) n += e.getUint32(i).toString(16).padStart(8, "0");
                for (; i < t; i++) n += e.getUint8(i).toString(16).padStart(2, "0");
                return n
            },
            write: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Mt(t);
                const r = Math.min(i, e.byteLength - n);
                for (let o = 0; o < r; o++) {
                    const i = Dt(t.charCodeAt(2 * o)),
                        r = Dt(t.charCodeAt(2 * o + 1));
                    if (void 0 === i || void 0 === r) return e.subarray(0, o);
                    e[n + o] = i << 4 | r
                }
                return r
            }
        };

        function Dt(e) {
            return e >= 48 && e <= 57 ? e - 48 : e >= 65 && e <= 70 ? e - 65 + 10 : e >= 97 && e <= 102 ? e - 97 + 10 : void 0
        }

        function Bt(e) {
            let t = 0;
            for (let n = 0, i = e.length; n < i; n++) {
                const r = e.charCodeAt(n);
                if (r >= 55296 && r <= 56319 && n + 1 < i) {
                    const i = e.charCodeAt(n + 1);
                    if (i >= 56320 && i <= 57343) {
                        t += 4, n++;
                        continue
                    }
                }
                t += r <= 127 ? 1 : r <= 2047 ? 2 : 3
            }
            return t
        }
        let qt, Ut;
        if ("undefined" !== typeof TextDecoder) {
            const e = new TextDecoder;
            qt = function(t) {
                return e.decode(t)
            }
        } else qt = function(e) {
            const t = e.byteLength;
            let n = "",
                i = 0;
            for (; i < t;) {
                let r = e[i];
                if (r <= 127) {
                    n += String.fromCharCode(r), i++;
                    continue
                }
                let o = 0,
                    s = 0;
                if (r <= 223 ? (o = 1, s = 31 & r) : r <= 239 ? (o = 2, s = 15 & r) : r <= 244 && (o = 3, s = 7 & r), t - i - o > 0) {
                    let t = 0;
                    for (; t < o;) r = e[i + t + 1], s = s << 6 | 63 & r, t += 1
                } else s = 65533, o = t - i;
                n += String.fromCodePoint(s), i += o + 1
            }
            return n
        };
        if ("undefined" !== typeof TextEncoder) {
            const e = new TextEncoder;
            Ut = function(t, n) {
                let i = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Bt(n);
                const o = Math.min(r, t.byteLength - i);
                return e.encodeInto(n, t.subarray(i, i + o)), o
            }
        } else Ut = function(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Bt(t);
            const r = Math.min(i, e.byteLength - n);
            e = e.subarray(n, n + r);
            let o = 0,
                s = 0;
            for (; o < t.length;) {
                const n = t.codePointAt(o);
                if (n <= 127) {
                    e[s++] = n, o++;
                    continue
                }
                let i = 0,
                    r = 0;
                for (n <= 2047 ? (i = 6, r = 192) : n <= 65535 ? (i = 12, r = 224) : n <= 2097151 && (i = 18, r = 240), e[s++] = r | n >> i, i -= 6; i >= 0;) e[s++] = 128 | n >> i & 63, i -= 6;
                o += n >= 65536 ? 2 : 1
            }
            return r
        };
        var zt = {
            byteLength: Bt,
            toString: qt,
            write: Ut
        };

        function Ft(e) {
            return 2 * e.length
        }
        var jt = {
            byteLength: Ft,
            toString: function(e) {
                const t = e.byteLength;
                let n = "";
                for (let i = 0; i < t - 1; i += 2) n += String.fromCharCode(e[i] + 256 * e[i + 1]);
                return n
            },
            write: function(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : Ft(t);
                const r = Math.min(i, e.byteLength - n);
                let o = r;
                for (let s = 0; s < t.length && !((o -= 2) < 0); ++s) {
                    const i = t.charCodeAt(s),
                        r = i >> 8,
                        o = i % 256;
                    e[n + 2 * s] = o, e[n + 2 * s + 1] = r
                }
                return r
            }
        };
        ! function(e, t) {
            const n = Pt,
                i = Nt,
                r = Ot,
                o = zt,
                s = jt,
                a = 255 === new Uint8Array(Uint16Array.of(255).buffer)[0];

            function l(e) {
                switch (e) {
                    case "ascii":
                        return n;
                    case "base64":
                        return i;
                    case "hex":
                        return r;
                    case "utf8":
                    case "utf-8":
                    case void 0:
                        return o;
                    case "ucs2":
                    case "ucs-2":
                    case "utf16le":
                    case "utf-16le":
                        return s;
                    default:
                        throw new Error("Unknown encoding: ".concat(e))
                }
            }

            function c(e) {
                return e instanceof Uint8Array
            }

            function u(e, t, n) {
                return "string" === typeof e ? function(e, t) {
                    const n = l(t),
                        i = new Uint8Array(n.byteLength(e));
                    return n.write(i, e, 0, i.byteLength), i
                }(e, t) : Array.isArray(e) ? function(e) {
                    const t = new Uint8Array(e.length);
                    return t.set(e), t
                }(e) : ArrayBuffer.isView(e) ? function(e) {
                    const t = new Uint8Array(e.byteLength);
                    return t.set(e), t
                }(e) : function(e, t, n) {
                    return new Uint8Array(e, t, n)
                }(e, t, n)
            }

            function d(e, t, n, i, r) {
                if (0 === e.byteLength) return -1;
                if ("string" === typeof n ? (i = n, n = 0) : void 0 === n ? n = r ? 0 : e.length - 1 : n < 0 && (n += e.byteLength), n >= e.byteLength) {
                    if (r) return -1;
                    n = e.byteLength - 1
                } else if (n < 0) {
                    if (!r) return -1;
                    n = 0
                }
                if ("string" === typeof t) t = u(t, i);
                else if ("number" === typeof t) return t &= 255, r ? e.indexOf(t, n) : e.lastIndexOf(t, n);
                if (0 === t.byteLength) return -1;
                if (r) {
                    let i = -1;
                    for (let r = n; r < e.byteLength; r++)
                        if (e[r] === t[-1 === i ? 0 : r - i]) {
                            if (-1 === i && (i = r), r - i + 1 === t.byteLength) return i
                        } else - 1 !== i && (r -= r - i), i = -1
                } else {
                    n + t.byteLength > e.byteLength && (n = e.byteLength - t.byteLength);
                    for (let i = n; i >= 0; i--) {
                        let n = !0;
                        for (let r = 0; r < t.byteLength; r++)
                            if (e[i + r] !== t[r]) {
                                n = !1;
                                break
                            } if (n) return i
                    }
                }
                return -1
            }

            function h(e, t, n, i) {
                return d(e, t, n, i, !0)
            }

            function p(e, t, n) {
                const i = e[t];
                e[t] = e[n], e[n] = i
            }
            e.exports = t = {
                isBuffer: c,
                isEncoding: function(e) {
                    try {
                        return l(e), !0
                    } catch {
                        return !1
                    }
                },
                alloc: function(e, n, i) {
                    const r = new Uint8Array(e);
                    return void 0 !== n && t.fill(r, n, 0, r.byteLength, i), r
                },
                allocUnsafe: function(e) {
                    return new Uint8Array(e)
                },
                allocUnsafeSlow: function(e) {
                    return new Uint8Array(e)
                },
                byteLength: function(e, t) {
                    return l(t).byteLength(e)
                },
                compare: function(e, t) {
                    if (e === t) return 0;
                    const n = Math.min(e.byteLength, t.byteLength);
                    e = new DataView(e.buffer, e.byteOffset, e.byteLength), t = new DataView(t.buffer, t.byteOffset, t.byteLength);
                    let i = 0;
                    for (let r = n - n % 4; i < r; i += 4) {
                        if (e.getUint32(i, a) !== t.getUint32(i, a)) break
                    }
                    for (; i < n; i++) {
                        const n = e.getUint8(i),
                            r = t.getUint8(i);
                        if (n < r) return -1;
                        if (n > r) return 1
                    }
                    return e.byteLength > t.byteLength ? 1 : e.byteLength < t.byteLength ? -1 : 0
                },
                concat: function(e, t) {
                    void 0 === t && (t = e.reduce(((e, t) => e + t.byteLength), 0));
                    const n = new Uint8Array(t);
                    let i = 0;
                    for (const r of e) {
                        if (i + r.byteLength > n.byteLength) {
                            const e = r.subarray(0, n.byteLength - i);
                            return n.set(e, i), n
                        }
                        n.set(r, i), i += r.byteLength
                    }
                    return n
                },
                copy: function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : 0,
                        r = arguments.length > 4 && void 0 !== arguments[4] ? arguments[4] : e.byteLength;
                    if (r > 0 && r < i) return 0;
                    if (r === i) return 0;
                    if (0 === e.byteLength || 0 === t.byteLength) return 0;
                    if (n < 0) throw new RangeError("targetStart is out of range");
                    if (i < 0 || i >= e.byteLength) throw new RangeError("sourceStart is out of range");
                    if (r < 0) throw new RangeError("sourceEnd is out of range");
                    n >= t.byteLength && (n = t.byteLength), r > e.byteLength && (r = e.byteLength), t.byteLength - n < r - i && (r = t.length - n + i);
                    const o = r - i;
                    return e === t ? t.copyWithin(n, i, r) : t.set(e.subarray(i, r), n), o
                },
                equals: function(e, t) {
                    if (e === t) return !0;
                    if (e.byteLength !== t.byteLength) return !1;
                    const n = e.byteLength;
                    e = new DataView(e.buffer, e.byteOffset, e.byteLength), t = new DataView(t.buffer, t.byteOffset, t.byteLength);
                    let i = 0;
                    for (let r = n - n % 4; i < r; i += 4)
                        if (e.getUint32(i, a) !== t.getUint32(i, a)) return !1;
                    for (; i < n; i++)
                        if (e.getUint8(i) !== t.getUint8(i)) return !1;
                    return !0
                },
                fill: function(e, t, n, i, r) {
                    if ("string" === typeof t ? "string" === typeof n ? (r = n, n = 0, i = e.byteLength) : "string" === typeof i && (r = i, i = e.byteLength) : "number" === typeof t ? t &= 255 : "boolean" === typeof t && (t = +t), n < 0 || e.byteLength < n || e.byteLength < i) throw new RangeError("Out of range index");
                    if (void 0 === n && (n = 0), void 0 === i && (i = e.byteLength), i <= n) return e;
                    if (t || (t = 0), "number" === typeof t)
                        for (let o = n; o < i; ++o) e[o] = t;
                    else {
                        const o = (t = c(t) ? t : u(t, r)).byteLength;
                        for (let r = 0; r < i - n; ++r) e[r + n] = t[r % o]
                    }
                    return e
                },
                from: u,
                includes: function(e, t, n, i) {
                    return -1 !== h(e, t, n, i)
                },
                indexOf: h,
                lastIndexOf: function(e, t, n, i) {
                    return d(e, t, n, i, !1)
                },
                swap16: function(e) {
                    const t = e.byteLength;
                    if (t % 2 !== 0) throw new RangeError("Buffer size must be a multiple of 16-bits");
                    for (let n = 0; n < t; n += 2) p(e, n, n + 1);
                    return e
                },
                swap32: function(e) {
                    const t = e.byteLength;
                    if (t % 4 !== 0) throw new RangeError("Buffer size must be a multiple of 32-bits");
                    for (let n = 0; n < t; n += 4) p(e, n, n + 3), p(e, n + 1, n + 2);
                    return e
                },
                swap64: function(e) {
                    const t = e.byteLength;
                    if (t % 8 !== 0) throw new RangeError("Buffer size must be a multiple of 64-bits");
                    for (let n = 0; n < t; n += 8) p(e, n, n + 7), p(e, n + 1, n + 6), p(e, n + 2, n + 5), p(e, n + 3, n + 4);
                    return e
                },
                toBuffer: function(e) {
                    return e
                },
                toString: function(e, t) {
                    let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0,
                        i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : e.byteLength;
                    const r = e.byteLength;
                    return n >= r || i <= n ? "" : (n < 0 && (n = 0), i > r && (i = r), (0 !== n || i < r) && (e = e.subarray(n, i)), l(t).toString(e))
                },
                write: function(e, t, n, i, r) {
                    return void 0 === n ? r = "utf8" : void 0 === i && "string" === typeof n ? (r = n, n = void 0) : void 0 === r && "string" === typeof i && (r = i, i = void 0), l(r).write(e, t, n, i)
                },
                writeDoubleLE: function(e, t, n) {
                    return void 0 === n && (n = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).setFloat64(n, t, !0), n + 8
                },
                writeFloatLE: function(e, t, n) {
                    return void 0 === n && (n = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).setFloat32(n, t, !0), n + 4
                },
                writeUInt32LE: function(e, t, n) {
                    return void 0 === n && (n = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).setUint32(n, t, !0), n + 4
                },
                writeInt32LE: function(e, t, n) {
                    return void 0 === n && (n = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).setInt32(n, t, !0), n + 4
                },
                readDoubleLE: function(e, t) {
                    return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat64(t, !0)
                },
                readFloatLE: function(e, t) {
                    return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getFloat32(t, !0)
                },
                readUInt32LE: function(e, t) {
                    return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getUint32(t, !0)
                },
                readInt32LE: function(e, t) {
                    return void 0 === t && (t = 0), new DataView(e.buffer, e.byteOffset, e.byteLength).getInt32(t, !0)
                }
            }
        }(Tt, Tt.exports);
        var Ht = Tt.exports;
        const Wt = Ht;
        const Vt = Ht;
        const Qt = class {
                constructor(e) {
                    this.encoding = e
                }
                decode(e) {
                    return Wt.toString(e, this.encoding)
                }
                flush() {
                    return ""
                }
            },
            $t = class {
                constructor() {
                    this.codePoint = 0, this.bytesSeen = 0, this.bytesNeeded = 0, this.lowerBoundary = 128, this.upperBoundary = 191
                }
                decode(e) {
                    if (0 === this.bytesNeeded) {
                        let t = !0;
                        for (let n = Math.max(0, e.byteLength - 4), i = e.byteLength; n < i && t; n++) t = e[n] <= 127;
                        if (t) return Vt.toString(e, "utf8")
                    }
                    let t = "";
                    for (let n = 0, i = e.byteLength; n < i; n++) {
                        const i = e[n];
                        0 !== this.bytesNeeded ? i < this.lowerBoundary || i > this.upperBoundary ? (this.codePoint = 0, this.bytesNeeded = 0, this.bytesSeen = 0, this.lowerBoundary = 128, this.upperBoundary = 191, t += "\ufffd") : (this.lowerBoundary = 128, this.upperBoundary = 191, this.codePoint = this.codePoint << 6 | 63 & i, this.bytesSeen++, this.bytesSeen === this.bytesNeeded && (t += String.fromCodePoint(this.codePoint), this.codePoint = 0, this.bytesNeeded = 0, this.bytesSeen = 0)) : i <= 127 ? t += String.fromCharCode(i) : i >= 194 && i <= 223 ? (this.bytesNeeded = 1, this.codePoint = 31 & i) : i >= 224 && i <= 239 ? (224 === i ? this.lowerBoundary = 160 : 237 === i && (this.upperBoundary = 159), this.bytesNeeded = 2, this.codePoint = 15 & i) : i >= 240 && i <= 244 ? (240 === i && (this.lowerBoundary = 144), 244 === i && (this.upperBoundary = 143), this.bytesNeeded = 3, this.codePoint = 7 & i) : t += "\ufffd"
                    }
                    return t
                }
                flush() {
                    const e = this.bytesNeeded > 0 ? "\ufffd" : "";
                    return this.codePoint = 0, this.bytesNeeded = 0, this.bytesSeen = 0, this.lowerBoundary = 128, this.upperBoundary = 191, e
                }
            };
        const {
            EventEmitter: Kt
        } = at, Xt = new Error("Stream was destroyed"), Yt = (new Error("Premature close"), Et), Gt = class {
            constructor(e) {
                this.hwm = e || 16, this.head = new xt(this.hwm), this.tail = this.head, this.length = 0
            }
            clear() {
                this.head = this.tail, this.head.clear(), this.length = 0
            }
            push(e) {
                if (this.length++, !this.head.push(e)) {
                    const t = this.head;
                    this.head = t.next = new xt(2 * this.head.buffer.length), this.head.push(e)
                }
            }
            shift() {
                0 !== this.length && this.length--;
                const e = this.tail.shift();
                if (void 0 === e && this.tail.next) {
                    const e = this.tail.next;
                    return this.tail.next = null, this.tail = e, this.tail.shift()
                }
                return e
            }
            peek() {
                const e = this.tail.peek();
                return void 0 === e && this.tail.next ? this.tail.next.peek() : e
            }
            isEmpty() {
                return 0 === this.length
            }
        }, Jt = class {
            constructor() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "utf8";
                switch (this.encoding = function(e) {
                        switch (e = e.toLowerCase()) {
                            case "utf8":
                            case "utf-8":
                                return "utf8";
                            case "ucs2":
                            case "ucs-2":
                            case "utf16le":
                            case "utf-16le":
                                return "utf16le";
                            case "latin1":
                            case "binary":
                                return "latin1";
                            case "base64":
                            case "ascii":
                            case "hex":
                                return e;
                            default:
                                throw new Error("Unknown encoding: " + e)
                        }
                    }(e), this.encoding) {
                    case "utf8":
                        this.decoder = new $t;
                        break;
                    case "utf16le":
                    case "base64":
                        throw new Error("Unsupported encoding: " + this.encoding);
                    default:
                        this.decoder = new Qt(this.encoding)
                }
            }
            push(e) {
                return "string" === typeof e ? e : this.decoder.decode(e)
            }
            write(e) {
                return this.push(e)
            }
            end(e) {
                let t = "";
                return e && (t = this.push(e)), t += this.decoder.flush(), t
            }
        }, Zt = 536870911, en = 1 ^ Zt, tn = 2 ^ Zt, nn = 64, rn = 128, on = 256, sn = 1024, an = 2048, ln = 4096, cn = 8192, un = 16384, dn = 32768, hn = 131072, pn = 131328, fn = 16 ^ Zt, mn = 768 ^ Zt, gn = 536838143, yn = 32 ^ Zt, vn = 536739839, bn = 2 << 18, wn = 4 << 18, _n = 8 << 18, Sn = 16 << 18, Cn = 32 << 18, kn = 64 << 18, En = 128 << 18, xn = 512 << 18, Tn = 1024 << 18, Ln = 469499903, Pn = 535822335, An = 503316479, In = 268435455, Rn = 262160, Nn = 536608751, Mn = 8404992, On = 14, Dn = 15, Bn = 8405006, qn = 33587200, Un = 33587215, zn = 2359296, Fn = 270794767, jn = Symbol.asyncIterator || Symbol("asyncIterator");
        class Hn {
            constructor(e) {
                let {
                    highWaterMark: t = 16384,
                    map: n = null,
                    mapWritable: i,
                    byteLength: r,
                    byteLengthWritable: o
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.stream = e, this.queue = new Gt, this.highWaterMark = t, this.buffered = 0, this.error = null, this.pipeline = null, this.drains = null, this.byteLength = o || r || ai, this.map = i || n, this.afterWrite = Xn.bind(this), this.afterUpdateNextTick = Jn.bind(this)
            }
            get ended() {
                return 0 !== (this.stream._duplexState & Cn)
            }
            push(e) {
                return null !== this.map && (e = this.map(e)), this.buffered += this.byteLength(e), this.queue.push(e), this.buffered < this.highWaterMark ? (this.stream._duplexState |= _n, !0) : (this.stream._duplexState |= 6291456, !1)
            }
            shift() {
                const e = this.queue.shift();
                return this.buffered -= this.byteLength(e), 0 === this.buffered && (this.stream._duplexState &= 534773759), e
            }
            end(e) {
                "function" === typeof e ? this.stream.once("finish", e) : void 0 !== e && null !== e && this.push(e), this.stream._duplexState = (this.stream._duplexState | xn) & Pn
            }
            autoBatch(e, t) {
                const n = [],
                    i = this.stream;
                for (n.push(e);
                    (i._duplexState & Fn) === zn;) n.push(i._writableState.shift());
                if (0 !== (i._duplexState & Dn)) return t(null);
                i._writev(n, t)
            }
            update() {
                const e = this.stream;
                e._duplexState |= bn;
                do {
                    for (;
                        (e._duplexState & Fn) === _n;) {
                        const t = this.shift();
                        e._duplexState |= 67371008, e._write(t, this.afterWrite)
                    }
                    0 === (1310720 & e._duplexState) && this.updateNonPrimary()
                } while (!0 === this.continueUpdate());
                e._duplexState &= 536346623
            }
            updateNonPrimary() {
                const e = this.stream;
                if ((144965647 & e._duplexState) === xn) return e._duplexState = 402653183 & e._duplexState | 262144, void e._final($n.bind(this));
                4 !== (e._duplexState & On) ? 1 === (e._duplexState & Un) && (e._duplexState = (e._duplexState | Rn) & en, e._open(Zn.bind(this))) : 0 === (e._duplexState & qn) && (e._duplexState |= Rn, e._destroy(Kn.bind(this)))
            }
            continueUpdate() {
                return 0 !== (this.stream._duplexState & En) && (this.stream._duplexState &= An, !0)
            }
            updateCallback() {
                (35127311 & this.stream._duplexState) === wn ? this.update() : this.updateNextTick()
            }
            updateNextTick() {
                0 === (this.stream._duplexState & En) && (this.stream._duplexState |= En, 0 === (this.stream._duplexState & bn) && Yt(this.afterUpdateNextTick))
            }
        }
        class Wn {
            constructor(e) {
                let {
                    highWaterMark: t = 16384,
                    map: n = null,
                    mapReadable: i,
                    byteLength: r,
                    byteLengthReadable: o
                } = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
                this.stream = e, this.queue = new Gt, this.highWaterMark = 0 === t ? 1 : t, this.buffered = 0, this.readAhead = t > 0, this.error = null, this.pipeline = null, this.byteLength = o || r || ai, this.map = i || n, this.pipeTo = null, this.afterRead = Yn.bind(this), this.afterUpdateNextTick = Gn.bind(this)
            }
            get ended() {
                return 0 !== (this.stream._duplexState & un)
            }
            pipe(e, t) {
                if (null !== this.pipeTo) throw new Error("Can only pipe to one destination");
                if ("function" !== typeof t && (t = null), this.stream._duplexState |= 512, this.pipeTo = e, this.pipeline = new Vn(this.stream, e, t), t && this.stream.on("error", li), si(e)) e._writableState.pipeline = this.pipeline, t && e.on("error", li), e.on("finish", this.pipeline.finished.bind(this.pipeline));
                else {
                    const t = this.pipeline.done.bind(this.pipeline, e),
                        n = this.pipeline.done.bind(this.pipeline, e, null);
                    e.on("error", t), e.on("close", n), e.on("finish", this.pipeline.finished.bind(this.pipeline))
                }
                e.on("drain", Qn.bind(this)), this.stream.emit("piping", e), e.emit("pipe", this.stream)
            }
            push(e) {
                const t = this.stream;
                return null === e ? (this.highWaterMark = 0, t._duplexState = 536805311 & t._duplexState | 1024, !1) : (null !== this.map && null === (e = this.map(e)) || (this.buffered += this.byteLength(e), this.queue.push(e), t._duplexState = 536805375 & t._duplexState | 128), this.buffered < this.highWaterMark)
            }
            shift() {
                const e = this.queue.shift();
                return this.buffered -= this.byteLength(e), 0 === this.buffered && (this.stream._duplexState &= 536862591), e
            }
            unshift(e) {
                const t = [null !== this.map ? this.map(e) : e];
                for (; this.buffered > 0;) t.push(this.shift());
                for (let n = 0; n < t.length - 1; n++) {
                    const e = t[n];
                    this.buffered += this.byteLength(e), this.queue.push(e)
                }
                this.push(t[t.length - 1])
            }
            read() {
                const e = this.stream;
                if ((16527 & e._duplexState) === rn) {
                    const t = this.shift();
                    return null !== this.pipeTo && !1 === this.pipeTo.write(t) && (e._duplexState &= mn), 0 !== (e._duplexState & an) && e.emit("data", t), t
                }
                return !1 === this.readAhead && (e._duplexState |= hn, this.updateNextTick()), null
            }
            drain() {
                const e = this.stream;
                for (;
                    (16527 & e._duplexState) === rn && 0 !== (768 & e._duplexState);) {
                    const t = this.shift();
                    null !== this.pipeTo && !1 === this.pipeTo.write(t) && (e._duplexState &= mn), 0 !== (e._duplexState & an) && e.emit("data", t)
                }
            }
            update() {
                const e = this.stream;
                e._duplexState |= 32;
                do {
                    for (this.drain(); this.buffered < this.highWaterMark && (214047 & e._duplexState) === hn;) e._duplexState |= 65552, e._read(this.afterRead), this.drain();
                    4224 === (12431 & e._duplexState) && (e._duplexState |= cn, e.emit("readable")), 0 === (80 & e._duplexState) && this.updateNonPrimary()
                } while (!0 === this.continueUpdate());
                e._duplexState &= yn
            }
            updateNonPrimary() {
                const e = this.stream;
                (1167 & e._duplexState) === sn && (e._duplexState = 536869887 & e._duplexState | 16384, e.emit("end"), (e._duplexState & Bn) === Mn && (e._duplexState |= 4), null !== this.pipeTo && this.pipeTo.end()), 4 !== (e._duplexState & On) ? 1 === (e._duplexState & Un) && (e._duplexState = (e._duplexState | Rn) & en, e._open(Zn.bind(this))) : 0 === (e._duplexState & qn) && (e._duplexState |= Rn, e._destroy(Kn.bind(this)))
            }
            continueUpdate() {
                return 0 !== (this.stream._duplexState & dn) && (this.stream._duplexState &= gn, !0)
            }
            updateCallback() {
                (32879 & this.stream._duplexState) === nn ? this.update() : this.updateNextTick()
            }
            updateNextTick() {
                0 === (this.stream._duplexState & dn) && (this.stream._duplexState |= dn, 0 === (32 & this.stream._duplexState) && Yt(this.afterUpdateNextTick))
            }
        }
        class Vn {
            constructor(e, t, n) {
                this.from = e, this.to = t, this.afterPipe = n, this.error = null, this.pipeToFinished = !1
            }
            finished() {
                this.pipeToFinished = !0
            }
            done(e, t) {
                t && (this.error = t), e !== this.to || (this.to = null, null === this.from) ? e !== this.from || (this.from = null, null === this.to) ? (null !== this.afterPipe && this.afterPipe(this.error), this.to = this.from = this.afterPipe = null) : 0 === (e._duplexState & un) && this.to.destroy(this.error || new Error("Readable stream closed before ending")) : 0 !== (this.from._duplexState & un) && this.pipeToFinished || this.from.destroy(this.error || new Error("Writable stream closed prematurely"))
            }
        }

        function Qn() {
            this.stream._duplexState |= 512, this.updateCallback()
        }

        function $n(e) {
            const t = this.stream;
            e && t.destroy(e), 0 === (t._duplexState & On) && (t._duplexState |= Cn, t.emit("finish")), (t._duplexState & Bn) === Mn && (t._duplexState |= 4), t._duplexState &= Ln, 0 === (t._duplexState & bn) ? this.update() : this.updateNextTick()
        }

        function Kn(e) {
            const t = this.stream;
            e || this.error === Xt || (e = this.error), e && t.emit("error", e), t._duplexState |= 8, t.emit("close");
            const n = t._readableState,
                i = t._writableState;
            if (null !== n && null !== n.pipeline && n.pipeline.done(t, e), null !== i) {
                for (; null !== i.drains && i.drains.length > 0;) i.drains.shift().resolve(!1);
                null !== i.pipeline && i.pipeline.done(t, e)
            }
        }

        function Xn(e) {
            const t = this.stream;
            e && t.destroy(e), t._duplexState &= Ln, null !== this.drains && function(e) {
                for (let t = 0; t < e.length; t++) 0 === --e[t].writes && (e.shift().resolve(!0), t--)
            }(this.drains), (6553615 & t._duplexState) === Sn && (t._duplexState &= 532676607, (t._duplexState & kn) === kn && t.emit("drain")), this.updateCallback()
        }

        function Yn(e) {
            e && this.stream.destroy(e), this.stream._duplexState &= fn, !1 === this.readAhead && 0 === (this.stream._duplexState & on) && (this.stream._duplexState &= vn), this.updateCallback()
        }

        function Gn() {
            0 === (32 & this.stream._duplexState) && (this.stream._duplexState &= gn, this.update())
        }

        function Jn() {
            0 === (this.stream._duplexState & bn) && (this.stream._duplexState &= An, this.update())
        }

        function Zn(e) {
            const t = this.stream;
            e && t.destroy(e), 0 === (4 & t._duplexState) && (0 === (17423 & t._duplexState) && (t._duplexState |= nn), 0 === (142606351 & t._duplexState) && (t._duplexState |= wn), t.emit("open")), t._duplexState &= Nn, null !== t._writableState && t._writableState.updateCallback(), null !== t._readableState && t._readableState.updateCallback()
        }

        function ei(e) {
            null !== this._readableState && ("data" === e && (this._duplexState |= 133376, this._readableState.updateNextTick()), "readable" === e && (this._duplexState |= ln, this._readableState.updateNextTick())), null !== this._writableState && "drain" === e && (this._duplexState |= kn, this._writableState.updateNextTick())
        }
        class ti extends Kt {
            constructor(e) {
                super(), this._duplexState = 0, this._readableState = null, this._writableState = null, e && (e.open && (this._open = e.open), e.destroy && (this._destroy = e.destroy), e.predestroy && (this._predestroy = e.predestroy), e.signal && e.signal.addEventListener("abort", ci.bind(this))), this.on("newListener", ei)
            }
            _open(e) {
                e(null)
            }
            _destroy(e) {
                e(null)
            }
            _predestroy() {}
            get readable() {
                return null !== this._readableState || void 0
            }
            get writable() {
                return null !== this._writableState || void 0
            }
            get destroyed() {
                return 0 !== (8 & this._duplexState)
            }
            get destroying() {
                return 0 !== (this._duplexState & On)
            }
            destroy(e) {
                0 === (this._duplexState & On) && (e || (e = Xt), this._duplexState = 535822271 & this._duplexState | 4, null !== this._readableState && (this._readableState.highWaterMark = 0, this._readableState.error = e), null !== this._writableState && (this._writableState.highWaterMark = 0, this._writableState.error = e), this._duplexState |= 2, this._predestroy(), this._duplexState &= tn, null !== this._readableState && this._readableState.updateNextTick(), null !== this._writableState && this._writableState.updateNextTick())
            }
        }
        class ni extends ti {
            constructor(e) {
                super(e), this._duplexState |= 8519681, this._readableState = new Wn(this, e), e && (!1 === this._readableState.readAhead && (this._duplexState &= vn), e.read && (this._read = e.read), e.eagerOpen && this._readableState.updateNextTick(), e.encoding && this.setEncoding(e.encoding))
            }
            setEncoding(e) {
                const t = new Jt(e),
                    n = this._readableState.map || ri;
                return this._readableState.map = function(e) {
                    const i = t.push(e);
                    return "" === i ? null : n(i)
                }, this
            }
            _read(e) {
                e(null)
            }
            pipe(e, t) {
                return this._readableState.updateNextTick(), this._readableState.pipe(e, t), e
            }
            read() {
                return this._readableState.updateNextTick(), this._readableState.read()
            }
            push(e) {
                return this._readableState.updateNextTick(), this._readableState.push(e)
            }
            unshift(e) {
                return this._readableState.updateNextTick(), this._readableState.unshift(e)
            }
            resume() {
                return this._duplexState |= pn, this._readableState.updateNextTick(), this
            }
            pause() {
                return this._duplexState &= !1 === this._readableState.readAhead ? 536739583 : 536870655, this
            }
            static _fromAsyncIterator(e, t) {
                let n;
                const i = new ni({
                    ...t,
                    read(t) {
                        e.next().then(r).then(t.bind(null, null)).catch(t)
                    },
                    predestroy() {
                        n = e.return()
                    },
                    destroy(e) {
                        if (!n) return e(null);
                        n.then(e.bind(null, null)).catch(e)
                    }
                });
                return i;

                function r(e) {
                    e.done ? i.push(null) : i.push(e.value)
                }
            }
            static from(e, t) {
                if (si(n = e) && n.readable) return e;
                var n;
                if (e[jn]) return this._fromAsyncIterator(e[jn](), t);
                Array.isArray(e) || (e = void 0 === e ? [] : [e]);
                let i = 0;
                return new ni({
                    ...t,
                    read(t) {
                        this.push(i === e.length ? null : e[i++]), t(null)
                    }
                })
            }
            static isBackpressured(e) {
                return 0 !== (17422 & e._duplexState) || e._readableState.buffered >= e._readableState.highWaterMark
            }
            static isPaused(e) {
                return 0 === (e._duplexState & on)
            } [jn]() {
                const e = this;
                let t = null,
                    n = null,
                    i = null;
                return this.on("error", (e => {
                    t = e
                })), this.on("readable", (function() {
                    null !== n && r(e.read())
                })), this.on("close", (function() {
                    null !== n && r(null)
                })), {
                    [jn]() {
                        return this
                    },
                    next: () => new Promise((function(t, o) {
                        n = t, i = o;
                        const s = e.read();
                        null !== s ? r(s) : 0 !== (8 & e._duplexState) && r(null)
                    })),
                    return: () => o(null),
                    throw: e => o(e)
                };

                function r(r) {
                    null !== i && (t ? i(t) : null === r && 0 === (e._duplexState & un) ? i(Xt) : n({
                        value: r,
                        done: null === r
                    }), i = n = null)
                }

                function o(t) {
                    return e.destroy(t), new Promise(((n, i) => {
                        if (8 & e._duplexState) return n({
                            value: void 0,
                            done: !0
                        });
                        e.once("close", (function() {
                            t ? i(t) : n({
                                value: void 0,
                                done: !0
                            })
                        }))
                    }))
                }
            }
        }
        class ii extends ni {
            constructor(e) {
                super(e), this._duplexState = 1 | this._duplexState & hn, this._writableState = new Hn(this, e), e && (e.writev && (this._writev = e.writev), e.write && (this._write = e.write), e.final && (this._final = e.final))
            }
            cork() {
                this._duplexState |= Tn
            }
            uncork() {
                this._duplexState &= In, this._writableState.updateNextTick()
            }
            _writev(e, t) {
                t(null)
            }
            _write(e, t) {
                this._writableState.autoBatch(e, t)
            }
            _final(e) {
                e(null)
            }
            write(e) {
                return this._writableState.updateNextTick(), this._writableState.push(e)
            }
            end(e) {
                return this._writableState.updateNextTick(), this._writableState.end(e), this
            }
        }

        function ri(e) {
            return e
        }

        function oi(e) {
            return !!e._readableState || !!e._writableState
        }

        function si(e) {
            return "number" === typeof e._duplexState && oi(e)
        }

        function ai(e) {
            return function(e) {
                return "object" === typeof e && null !== e && "number" === typeof e.byteLength
            }(e) ? e.byteLength : 1024
        }

        function li() {}

        function ci() {
            this.destroy(new Error("Stream aborted."))
        }
        var ui = ii;

        function di(e, t) {
            for (const n in t) Object.defineProperty(e, n, {
                value: t[n],
                enumerable: !0,
                configurable: !0
            });
            return e
        }
        const hi = Be((function(e, t, n) {
                if (!e || "string" === typeof e) throw new TypeError("Please pass an Error to err-code");
                n || (n = {}), "object" === typeof t && (n = t, t = ""), t && (n.code = t);
                try {
                    return di(e, n)
                } catch (i) {
                    n.message = e.message, n.stack = e.stack;
                    const t = function() {};
                    t.prototype = Object.create(Object.getPrototypeOf(e));
                    return di(new t, n)
                }
            })),
            pi = "0123456789abcdef",
            fi = [],
            mi = [];
        for (let gl = 0; gl < 256; gl++) fi[gl] = pi[gl >> 4 & 15] + pi[15 & gl], gl < 16 && (gl < 10 ? mi[48 + gl] = gl : mi[87 + gl] = gl);
        const gi = e => {
                const t = e.length;
                let n = "",
                    i = 0;
                for (; i < t;) n += fi[e[i++]];
                return n
            },
            yi = e => {
                const t = e.length >> 1,
                    n = t << 1,
                    i = new Uint8Array(t);
                let r = 0,
                    o = 0;
                for (; o < n;) i[r++] = mi[e.charCodeAt(o++)] << 4 | mi[e.charCodeAt(o++)];
                return i
            };
        for (var vi = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/", bi = "undefined" === typeof Uint8Array ? [] : new Uint8Array(256), wi = 0; wi < 64; wi++) bi[vi.charCodeAt(wi)] = wi;
        const _i = new TextDecoder,
            Si = (e, t) => _i.decode(e),
            Ci = new TextEncoder,
            ki = e => Ci.encode(e),
            Ei = e => {
                let t, n = "",
                    i = 0;
                const r = e.length;
                for (; i < r;) t = e.charCodeAt(i++), n += pi[t >> 4] + pi[15 & t];
                return n
            },
            xi = e => {
                const t = yi(e);
                if (t.length <= 65536) return String.fromCharCode(...t);
                let n = "",
                    i = 0;
                for (; i < t.length;) n += String.fromCharCode(...t.subarray(i, i += 65536));
                return n
            },
            Ti = "undefined" !== typeof window ? window : self,
            Li = Ti.crypto || Ti.msCrypto || {};
        Li.subtle || Li.webkitSubtle;
        const Pi = e => {
                const t = new Uint8Array(e);
                return Li.getRandomValues(t)
            },
            Ai = We("simple-peer"),
            Ii = 65536;

        function Ri(e) {
            return e.replace(/a=ice-options:trickle\s\n/g, "")
        }
        let Ni = class e extends ui {
            constructor(t) {
                if (super(t = Object.assign({
                        allowHalfOpen: !1
                    }, t)), me(this, "_pc"), this.__objectMode = !!t.objectMode, this._id = gi(Pi(4)).slice(0, 7), this._debug("new peer %o", t), this.channelName = t.initiator ? t.channelName || gi(Pi(20)) : null, this.initiator = t.initiator || !1, this.channelConfig = t.channelConfig || e.channelConfig, this.channelNegotiated = this.channelConfig.negotiated, this.config = Object.assign({}, e.config, t.config), this.offerOptions = t.offerOptions || {}, this.answerOptions = t.answerOptions || {}, this.sdpTransform = t.sdpTransform || (e => e), this.trickle = void 0 === t.trickle || t.trickle, this.allowHalfTrickle = void 0 !== t.allowHalfTrickle && t.allowHalfTrickle, this.iceCompleteTimeout = t.iceCompleteTimeout || 5e3, this._destroying = !1, this._connected = !1, this.remoteAddress = void 0, this.remoteFamily = void 0, this.remotePort = void 0, this.localAddress = void 0, this.localFamily = void 0, this.localPort = void 0, !St) throw "undefined" === typeof window ? hi(new Error("No WebRTC support: Specify `opts.wrtc` option in this environment"), "ERR_WEBRTC_SUPPORT") : hi(new Error("No WebRTC support: Not a supported browser"), "ERR_WEBRTC_SUPPORT");
                this._pcReady = !1, this._channelReady = !1, this._iceComplete = !1, this._iceCompleteTimer = null, this._channel = null, this._pendingCandidates = [], this._isNegotiating = !1, this._firstNegotiation = !0, this._batchedNegotiation = !1, this._queuedNegotiation = !1, this._sendersAwaitingStable = [], this._closingInterval = null, this._remoteTracks = [], this._remoteStreams = [], this._chunk = null, this._cb = null, this._interval = null;
                try {
                    this._pc = new St(this.config)
                } catch (n) {
                    return void this.__destroy(hi(n, "ERR_PC_CONSTRUCTOR"))
                }
                this._isReactNativeWebrtc = "number" === typeof this._pc._peerConnectionId, this._pc.oniceconnectionstatechange = () => {
                    this._onIceStateChange()
                }, this._pc.onicegatheringstatechange = () => {
                    this._onIceStateChange()
                }, this._pc.onconnectionstatechange = () => {
                    this._onConnectionStateChange()
                }, this._pc.onsignalingstatechange = () => {
                    this._onSignalingStateChange()
                }, this._pc.onicecandidate = e => {
                    this._onIceCandidate(e)
                }, "object" === typeof this._pc.peerIdentity && this._pc.peerIdentity.catch((e => {
                    this.__destroy(hi(e, "ERR_PC_PEER_IDENTITY"))
                })), this.initiator || this.channelNegotiated ? this._setupData({
                    channel: this._pc.createDataChannel(this.channelName, this.channelConfig)
                }) : this._pc.ondatachannel = e => {
                    this._setupData(e)
                }, this._debug("initial negotiation"), this._needsNegotiation(), this._onFinishBound = () => {
                    this._onFinish()
                }, this.once("finish", this._onFinishBound)
            }
            get bufferSize() {
                return this._channel && this._channel.bufferedAmount || 0
            }
            get connected() {
                return this._connected && "open" === this._channel.readyState
            }
            address() {
                return {
                    port: this.localPort,
                    family: this.localFamily,
                    address: this.localAddress
                }
            }
            signal(e) {
                if (!this._destroying) {
                    if (this.destroyed) throw hi(new Error("cannot signal after peer is destroyed"), "ERR_DESTROYED");
                    if ("string" === typeof e) try {
                        e = JSON.parse(e)
                    } catch (t) {
                        e = {}
                    }
                    this._debug("signal()"), e.renegotiate && this.initiator && (this._debug("got request to renegotiate"), this._needsNegotiation()), e.transceiverRequest && this.initiator && (this._debug("got request for transceiver"), this.addTransceiver(e.transceiverRequest.kind, e.transceiverRequest.init)), e.candidate && (this._pc.remoteDescription && this._pc.remoteDescription.type ? this._addIceCandidate(e.candidate) : this._pendingCandidates.push(e.candidate)), e.sdp && this._pc.setRemoteDescription(new Ct(e)).then((() => {
                        this.destroyed || (this._pendingCandidates.forEach((e => {
                            this._addIceCandidate(e)
                        })), this._pendingCandidates = [], "offer" === this._pc.remoteDescription.type && this._createAnswer())
                    })).catch((e => {
                        this.__destroy(hi(e, "ERR_SET_REMOTE_DESCRIPTION"))
                    })), e.sdp || e.candidate || e.renegotiate || e.transceiverRequest || this.__destroy(hi(new Error("signal() called with invalid signal data"), "ERR_SIGNALING"))
                }
            }
            _addIceCandidate(e) {
                const t = new kt(e);
                this._pc.addIceCandidate(t).catch((e => {
                    var n;
                    !t.address || t.address.endsWith(".local") ? (n = "Ignoring unsupported ICE candidate.", console.warn(n)) : this.__destroy(hi(e, "ERR_ADD_ICE_CANDIDATE"))
                }))
            }
            send(e) {
                if (!this._destroying) {
                    if (this.destroyed) throw hi(new Error("cannot send after peer is destroyed"), "ERR_DESTROYED");
                    this._channel.send(e)
                }
            }
            _needsNegotiation() {
                this._debug("_needsNegotiation"), this._batchedNegotiation || (this._batchedNegotiation = !0, queueMicrotask((() => {
                    this._batchedNegotiation = !1, this.initiator || !this._firstNegotiation ? (this._debug("starting batched negotiation"), this.negotiate()) : this._debug("non-initiator initial negotiation request discarded"), this._firstNegotiation = !1
                })))
            }
            negotiate() {
                if (!this._destroying) {
                    if (this.destroyed) throw hi(new Error("cannot negotiate after peer is destroyed"), "ERR_DESTROYED");
                    this.initiator ? this._isNegotiating ? (this._queuedNegotiation = !0, this._debug("already negotiating, queueing")) : (this._debug("start negotiation"), setTimeout((() => {
                        this._createOffer()
                    }), 0)) : this._isNegotiating ? (this._queuedNegotiation = !0, this._debug("already negotiating, queueing")) : (this._debug("requesting negotiation from initiator"), this.emit("signal", {
                        type: "renegotiate",
                        renegotiate: !0
                    })), this._isNegotiating = !0
                }
            }
            _final(e) {
                this._readableState.ended || this.push(null), e(null)
            }
            __destroy(e) {
                this.end(), this._destroy((() => {}), e)
            }
            _destroy(e, t) {
                this.destroyed || this._destroying || (this._destroying = !0, this._debug("destroying (error: %s)", t && (t.message || t)), setTimeout((() => {
                    if (this._connected = !1, this._pcReady = !1, this._channelReady = !1, this._remoteTracks = null, this._remoteStreams = null, this._senderMap = null, clearInterval(this._closingInterval), this._closingInterval = null, clearInterval(this._interval), this._interval = null, this._chunk = null, this._cb = null, this._onFinishBound && this.removeListener("finish", this._onFinishBound), this._onFinishBound = null, this._channel) {
                        try {
                            this._channel.close()
                        } catch (n) {}
                        this._channel.onmessage = null, this._channel.onopen = null, this._channel.onclose = null, this._channel.onerror = null
                    }
                    if (this._pc) {
                        try {
                            this._pc.close()
                        } catch (n) {}
                        this._pc.oniceconnectionstatechange = null, this._pc.onicegatheringstatechange = null, this._pc.onsignalingstatechange = null, this._pc.onicecandidate = null, this._pc.ontrack = null, this._pc.ondatachannel = null
                    }
                    this._pc = null, this._channel = null, t && this.emit("error", t), e()
                }), 0))
            }
            _setupData(e) {
                if (!e.channel) return this.__destroy(hi(new Error("Data channel event is missing `channel` property"), "ERR_DATA_CHANNEL"));
                this._channel = e.channel, this._channel.binaryType = "arraybuffer", "number" === typeof this._channel.bufferedAmountLowThreshold && (this._channel.bufferedAmountLowThreshold = Ii), this.channelName = this._channel.label, this._channel.onmessage = e => {
                    this._onChannelMessage(e)
                }, this._channel.onbufferedamountlow = () => {
                    this._onChannelBufferedAmountLow()
                }, this._channel.onopen = () => {
                    this._onChannelOpen()
                }, this._channel.onclose = () => {
                    this._onChannelClose()
                }, this._channel.onerror = e => {
                    const t = e.error instanceof Error ? e.error : new Error("Datachannel error: ".concat(e.message, " ").concat(e.filename, ":").concat(e.lineno, ":").concat(e.colno));
                    this.__destroy(hi(t, "ERR_DATA_CHANNEL"))
                };
                let t = !1;
                this._closingInterval = setInterval((() => {
                    this._channel && "closing" === this._channel.readyState ? (t && this._onChannelClose(), t = !0) : t = !1
                }), 5e3)
            }
            _write(e, t) {
                if (this.destroyed) return t(hi(new Error("cannot write after peer is destroyed"), "ERR_DATA_CHANNEL"));
                if (this._connected) {
                    try {
                        this.send(e)
                    } catch (n) {
                        return this.__destroy(hi(n, "ERR_DATA_CHANNEL"))
                    }
                    this._channel.bufferedAmount > Ii ? (this._debug("start backpressure: bufferedAmount %d", this._channel.bufferedAmount), this._cb = t) : t(null)
                } else this._debug("write before connect"), this._chunk = e, this._cb = t
            }
            _onFinish() {
                if (this.destroyed) return;
                const e = () => {
                    setTimeout((() => this.__destroy()), 1e3)
                };
                this._connected ? e() : this.once("connect", e)
            }
            _startIceCompleteTimeout() {
                this.destroyed || this._iceCompleteTimer || (this._debug("started iceComplete timeout"), this._iceCompleteTimer = setTimeout((() => {
                    this._iceComplete || (this._iceComplete = !0, this._debug("iceComplete timeout completed"), this.emit("iceTimeout"), this.emit("_iceComplete"))
                }), this.iceCompleteTimeout))
            }
            _createOffer() {
                this.destroyed || this._pc.createOffer(this.offerOptions).then((e => {
                    if (this.destroyed) return;
                    this.trickle || this.allowHalfTrickle || (e.sdp = Ri(e.sdp)), e.sdp = this.sdpTransform(e.sdp);
                    const t = () => {
                        if (this.destroyed) return;
                        const t = this._pc.localDescription || e;
                        this._debug("signal"), this.emit("signal", {
                            type: t.type,
                            sdp: t.sdp
                        })
                    };
                    this._pc.setLocalDescription(e).then((() => {
                        this._debug("createOffer success"), this.destroyed || (this.trickle || this._iceComplete ? t() : this.once("_iceComplete", t))
                    })).catch((e => {
                        this.__destroy(hi(e, "ERR_SET_LOCAL_DESCRIPTION"))
                    }))
                })).catch((e => {
                    this.__destroy(hi(e, "ERR_CREATE_OFFER"))
                }))
            }
            _createAnswer() {
                this.destroyed || this._pc.createAnswer(this.answerOptions).then((e => {
                    if (this.destroyed) return;
                    this.trickle || this.allowHalfTrickle || (e.sdp = Ri(e.sdp)), e.sdp = this.sdpTransform(e.sdp);
                    const t = () => {
                        var t;
                        if (this.destroyed) return;
                        const n = this._pc.localDescription || e;
                        this._debug("signal"), this.emit("signal", {
                            type: n.type,
                            sdp: n.sdp
                        }), this.initiator || null == (t = this._requestMissingTransceivers) || t.call(this)
                    };
                    this._pc.setLocalDescription(e).then((() => {
                        this.destroyed || (this.trickle || this._iceComplete ? t() : this.once("_iceComplete", t))
                    })).catch((e => {
                        this.__destroy(hi(e, "ERR_SET_LOCAL_DESCRIPTION"))
                    }))
                })).catch((e => {
                    this.__destroy(hi(e, "ERR_CREATE_ANSWER"))
                }))
            }
            _onConnectionStateChange() {
                this.destroyed || this._destroying || "failed" === this._pc.connectionState && this.__destroy(hi(new Error("Connection failed."), "ERR_CONNECTION_FAILURE"))
            }
            _onIceStateChange() {
                if (this.destroyed) return;
                const e = this._pc.iceConnectionState,
                    t = this._pc.iceGatheringState;
                this._debug("iceStateChange (connection: %s) (gathering: %s)", e, t), this.emit("iceStateChange", e, t), "connected" !== e && "completed" !== e || (this._pcReady = !0, this._maybeReady()), "failed" === e && this.__destroy(hi(new Error("Ice connection failed."), "ERR_ICE_CONNECTION_FAILURE")), "closed" === e && this.__destroy(hi(new Error("Ice connection closed."), "ERR_ICE_CONNECTION_CLOSED"))
            }
            getStats(e) {
                const t = e => ("[object Array]" === Object.prototype.toString.call(e.values) && e.values.forEach((t => {
                    Object.assign(e, t)
                })), e);
                0 === this._pc.getStats.length || this._isReactNativeWebrtc ? this._pc.getStats().then((n => {
                    const i = [];
                    n.forEach((e => {
                        i.push(t(e))
                    })), e(null, i)
                }), (t => e(t))) : this._pc.getStats.length > 0 ? this._pc.getStats((n => {
                    if (this.destroyed) return;
                    const i = [];
                    n.result().forEach((e => {
                        const n = {};
                        e.names().forEach((t => {
                            n[t] = e.stat(t)
                        })), n.id = e.id, n.type = e.type, n.timestamp = e.timestamp, i.push(t(n))
                    })), e(null, i)
                }), (t => e(t))) : e(null, [])
            }
            _maybeReady() {
                if (this._debug("maybeReady pc %s channel %s", this._pcReady, this._channelReady), this._connected || this._connecting || !this._pcReady || !this._channelReady) return;
                this._connecting = !0;
                const e = () => {
                    this.destroyed || this._destroying || this.getStats(((t, n) => {
                        if (this.destroyed || this._destroying) return;
                        t && (n = []);
                        const i = {},
                            r = {},
                            o = {};
                        let s = !1;
                        n.forEach((e => {
                            "remotecandidate" !== e.type && "remote-candidate" !== e.type || (i[e.id] = e), "localcandidate" !== e.type && "local-candidate" !== e.type || (r[e.id] = e), "candidatepair" !== e.type && "candidate-pair" !== e.type || (o[e.id] = e)
                        }));
                        const a = e => {
                            s = !0;
                            let t = r[e.localCandidateId];
                            t && (t.ip || t.address) ? (this.localAddress = t.ip || t.address, this.localPort = Number(t.port)) : t && t.ipAddress ? (this.localAddress = t.ipAddress, this.localPort = Number(t.portNumber)) : "string" === typeof e.googLocalAddress && (t = e.googLocalAddress.split(":"), this.localAddress = t[0], this.localPort = Number(t[1])), this.localAddress && (this.localFamily = this.localAddress.includes(":") ? "IPv6" : "IPv4");
                            let n = i[e.remoteCandidateId];
                            n && (n.ip || n.address) ? (this.remoteAddress = n.ip || n.address, this.remotePort = Number(n.port)) : n && n.ipAddress ? (this.remoteAddress = n.ipAddress, this.remotePort = Number(n.portNumber)) : "string" === typeof e.googRemoteAddress && (n = e.googRemoteAddress.split(":"), this.remoteAddress = n[0], this.remotePort = Number(n[1])), this.remoteAddress && (this.remoteFamily = this.remoteAddress.includes(":") ? "IPv6" : "IPv4"), this._debug("connect local: %s:%s remote: %s:%s", this.localAddress, this.localPort, this.remoteAddress, this.remotePort)
                        };
                        if (n.forEach((e => {
                                "transport" === e.type && e.selectedCandidatePairId && a(o[e.selectedCandidatePairId]), ("googCandidatePair" === e.type && "true" === e.googActiveConnection || ("candidatepair" === e.type || "candidate-pair" === e.type) && e.selected) && a(e)
                            })), s || Object.keys(o).length && !Object.keys(r).length) {
                            if (this._connecting = !1, this._connected = !0, this._chunk) {
                                try {
                                    this.send(this._chunk)
                                } catch (l) {
                                    return this.__destroy(hi(l, "ERR_DATA_CHANNEL"))
                                }
                                this._chunk = null, this._debug('sent chunk from "write before connect"');
                                const e = this._cb;
                                this._cb = null, e(null)
                            }
                            "number" !== typeof this._channel.bufferedAmountLowThreshold && (this._interval = setInterval((() => this._onInterval()), 150), this._interval.unref && this._interval.unref()), this._debug("connect"), this.emit("connect")
                        } else setTimeout(e, 100)
                    }))
                };
                e()
            }
            _onInterval() {
                !this._cb || !this._channel || this._channel.bufferedAmount > Ii || this._onChannelBufferedAmountLow()
            }
            _onSignalingStateChange() {
                this.destroyed || ("stable" === this._pc.signalingState && (this._isNegotiating = !1, this._debug("flushing sender queue", this._sendersAwaitingStable), this._sendersAwaitingStable.forEach((e => {
                    this._pc.removeTrack(e), this._queuedNegotiation = !0
                })), this._sendersAwaitingStable = [], this._queuedNegotiation ? (this._debug("flushing negotiation queue"), this._queuedNegotiation = !1, this._needsNegotiation()) : (this._debug("negotiated"), this.emit("negotiated"))), this._debug("signalingStateChange %s", this._pc.signalingState), this.emit("signalingStateChange", this._pc.signalingState))
            }
            _onIceCandidate(e) {
                this.destroyed || (e.candidate && this.trickle ? this.emit("signal", {
                    type: "candidate",
                    candidate: {
                        candidate: e.candidate.candidate,
                        sdpMLineIndex: e.candidate.sdpMLineIndex,
                        sdpMid: e.candidate.sdpMid
                    }
                }) : e.candidate || this._iceComplete || (this._iceComplete = !0, this.emit("_iceComplete")), e.candidate && this._startIceCompleteTimeout())
            }
            _onChannelMessage(e) {
                if (this.destroyed) return;
                let t = e.data;
                t instanceof ArrayBuffer ? t = new Uint8Array(t) : !1 === this.__objectMode && (t = ki(t)), this.push(t)
            }
            _onChannelBufferedAmountLow() {
                if (this.destroyed || !this._cb) return;
                this._debug("ending backpressure: bufferedAmount %d", this._channel.bufferedAmount);
                const e = this._cb;
                this._cb = null, e(null)
            }
            _onChannelOpen() {
                this._connected || this.destroyed || (this._debug("on channel open"), this._channelReady = !0, this._maybeReady())
            }
            _onChannelClose() {
                this.destroyed || (this._debug("on channel close"), this.__destroy())
            }
            _debug() {
                const e = [].slice.call(arguments);
                e[0] = "[" + this._id + "] " + e[0], Ai.apply(null, e)
            }
        };
        Ni.WEBRTC_SUPPORT = !!St, Ni.config = {
            iceServers: [{
                urls: ["stun:stun.l.google.com:19302", "stun:global.stun.twilio.com:3478"]
            }],
            sdpSemantics: "unified-plan"
        }, Ni.channelConfig = {};
        const Mi = {},
            Oi = {
                DEFAULT_ANNOUNCE_PEERS: 50,
                MAX_ANNOUNCE_PEERS: 82,
                parseUrl: e => {
                    const t = new URL(e.replace(/^udp:/, "http:"));
                    return e.match(/^udp:/) && Object.defineProperties(t, {
                        href: {
                            value: t.href.replace(/^http/, "udp")
                        },
                        protocol: {
                            value: t.protocol.replace(/^http/, "udp")
                        },
                        origin: {
                            value: t.origin.replace(/^http/, "udp")
                        }
                    }), t
                },
                ...Object.freeze(Object.defineProperty({
                    __proto__: null,
                    default: Mi
                }, Symbol.toStringTag, {
                    value: "Module"
                }))
            },
            Di = We("simple-websocket"),
            Bi = "function" !== typeof Mi ? WebSocket : Mi;
        class qi extends ui {
            constructor() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if ("string" === typeof e && (e = {
                        url: e
                    }), e = Object.assign({
                        allowHalfOpen: !1
                    }, e), super(e), this.__objectMode = !!e.objectMode, null != e.objectMode && delete e.objectMode, null == e.url && null == e.socket) throw new Error("Missing required `url` or `socket` option");
                if (null != e.url && null != e.socket) throw new Error("Must specify either `url` or `socket` option, not both");
                if (this._id = gi(Pi(4)).slice(0, 7), this._debug("new websocket: %o", e), this.connected = !1, this._chunk = null, this._cb = null, this._interval = null, e.socket) this.url = e.socket.url, this._ws = e.socket, this.connected = e.socket.readyState === Bi.OPEN;
                else {
                    this.url = e.url;
                    try {
                        this._ws = "function" === typeof Mi ? new Bi(e.url, {
                            ...e,
                            encoding: void 0
                        }) : new Bi(e.url)
                    } catch (t) {
                        return void yt((() => this.destroy(t)))
                    }
                }
                this._ws.binaryType = "arraybuffer", e.socket && this.connected ? yt((() => this._handleOpen())) : this._ws.onopen = () => this._handleOpen(), this._ws.onmessage = e => this._handleMessage(e), this._ws.onclose = () => this._handleClose(), this._ws.onerror = e => this._handleError(e), this._handleFinishBound = () => this._handleFinish(), this.once("finish", this._handleFinishBound)
            }
            send(e) {
                this._ws.send(e)
            }
            _final(e) {
                this._readableState.ended || this.push(null), e(null)
            }
            _destroy(e) {
                if (!this.destroyed) {
                    if (this._writableState.ended || this.end(), this.connected = !1, clearInterval(this._interval), this._interval = null, this._chunk = null, this._cb = null, this._handleFinishBound && this.removeListener("finish", this._handleFinishBound), this._handleFinishBound = null, this._ws) {
                        const e = this._ws,
                            n = () => {
                                e.onclose = null
                            };
                        if (e.readyState === Bi.CLOSED) n();
                        else try {
                            e.onclose = n, e.close()
                        } catch (t) {
                            n()
                        }
                        e.onopen = null, e.onmessage = null, e.onerror = () => {}
                    }
                    this._ws = null, e()
                }
            }
            _write(e, t) {
                if (this.destroyed) return t(new Error("cannot write after socket is destroyed"));
                if (this.connected) {
                    try {
                        this.send(e)
                    } catch (n) {
                        return this.destroy(n)
                    }
                    "function" !== typeof Mi && this._ws.bufferedAmount > 65536 ? (this._debug("start backpressure: bufferedAmount %d", this._ws.bufferedAmount), this._cb = t) : t(null)
                } else this._debug("write before connect"), this._chunk = e, this._cb = t
            }
            _handleOpen() {
                if (!this.connected && !this.destroyed) {
                    if (this.connected = !0, this._chunk) {
                        try {
                            this.send(this._chunk)
                        } catch (e) {
                            return this.destroy(e)
                        }
                        this._chunk = null, this._debug('sent chunk from "write before connect"');
                        const t = this._cb;
                        this._cb = null, t(null)
                    }
                    "function" !== typeof Mi && (this._interval = setInterval((() => this._onInterval()), 150), this._interval.unref && this._interval.unref()), this._debug("connect"), this.emit("connect")
                }
            }
            _handleMessage(e) {
                if (this.destroyed) return;
                let t = e.data;
                t instanceof ArrayBuffer && (t = new Uint8Array(t)), !1 === this.__objectMode && (t = ki(t)), this.push(t)
            }
            _handleClose() {
                this.destroyed || (this._debug("on close"), this.destroy())
            }
            _handleError(e) {
                this.destroy(new Error("Error connecting to ".concat(this.url)))
            }
            _handleFinish() {
                if (this.destroyed) return;
                const e = () => {
                    setTimeout((() => this.destroy()), 1e3)
                };
                this.connected ? e() : this.once("connect", e)
            }
            _onInterval() {
                if (!this._cb || !this._ws || this._ws.bufferedAmount > 65536) return;
                this._debug("ending backpressure: bufferedAmount %d", this._ws.bufferedAmount);
                const e = this._cb;
                this._cb = null, e(null)
            }
            _debug() {
                const e = [].slice.call(arguments);
                e[0] = "[" + this._id + "] " + e[0], Di.apply(null, e)
            }
        }
        qi.WEBSOCKET_SUPPORT = !!Bi;
        class Ui extends lt {
            constructor(e, t) {
                super(), this.client = e, this.announceUrl = t, this.interval = null, this.destroyed = !1
            }
            setInterval(e) {
                null == e && (e = this.DEFAULT_ANNOUNCE_INTERVAL), clearInterval(this.interval), e && (this.interval = setInterval((() => {
                    this.announce(this.client._defaultAnnounceOpts())
                }), e), this.interval.unref && this.interval.unref())
            }
        }
        const zi = We("bittorrent-tracker:websocket-tracker"),
            Fi = {};
        class ji extends Ui {
            constructor(e, t) {
                super(e, t), zi("new websocket tracker %s", t), this.peers = {}, this.socket = null, this.reconnecting = !1, this.retries = 0, this.reconnectTimer = null, this.expectingResponse = !1, this._openSocket()
            }
            announce(e) {
                if (this.destroyed || this.reconnecting) return;
                if (!this.socket.connected) return void this.socket.once("connect", (() => {
                    this.announce(e)
                }));
                const t = Object.assign({}, e, {
                    action: "announce",
                    info_hash: this.client._infoHashBinary,
                    peer_id: this.client._peerIdBinary
                });
                if (this._trackerId && (t.trackerid = this._trackerId), "stopped" === e.event || "completed" === e.event) this._send(t);
                else {
                    const n = Math.min(e.numwant, 5);
                    this._generateOffers(n, (e => {
                        t.numwant = n, t.offers = e, this._send(t)
                    }))
                }
            }
            scrape(e) {
                if (this.destroyed || this.reconnecting) return;
                if (!this.socket.connected) return void this.socket.once("connect", (() => {
                    this.scrape(e)
                }));
                const t = {
                    action: "scrape",
                    info_hash: Array.isArray(e.infoHash) && e.infoHash.length > 0 ? e.infoHash.map((e => xi(e))) : e.infoHash && xi(e.infoHash) || this.client._infoHashBinary
                };
                this._send(t)
            }
            destroy() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : Hi;
                if (this.destroyed) return e(null);
                this.destroyed = !0, clearInterval(this.interval), clearTimeout(this.reconnectTimer);
                for (const r in this.peers) {
                    const e = this.peers[r];
                    clearTimeout(e.trackerTimeout), e.destroy()
                }
                if (this.peers = null, this.socket && (this.socket.removeListener("connect", this._onSocketConnectBound), this.socket.removeListener("data", this._onSocketDataBound), this.socket.removeListener("close", this._onSocketCloseBound), this.socket.removeListener("error", this._onSocketErrorBound), this.socket = null), this._onSocketConnectBound = null, this._onSocketErrorBound = null, this._onSocketDataBound = null, this._onSocketCloseBound = null, Fi[this.announceUrl] && (Fi[this.announceUrl].consumers -= 1), Fi[this.announceUrl].consumers > 0) return e();
                let t, n = Fi[this.announceUrl];
                if (delete Fi[this.announceUrl], n.on("error", Hi), n.once("close", e), !this.expectingResponse) return i();

                function i() {
                    t && (clearTimeout(t), t = null), n.removeListener("data", i), n.destroy(), n = null
                }
                t = setTimeout(i, Oi.DESTROY_TIMEOUT), n.once("data", i)
            }
            _openSocket() {
                if (this.destroyed = !1, this.peers || (this.peers = {}), this._onSocketConnectBound = () => {
                        this._onSocketConnect()
                    }, this._onSocketErrorBound = e => {
                        this._onSocketError(e)
                    }, this._onSocketDataBound = e => {
                        this._onSocketData(e)
                    }, this._onSocketCloseBound = () => {
                        this._onSocketClose()
                    }, this.socket = Fi[this.announceUrl], this.socket) Fi[this.announceUrl].consumers += 1, this.socket.connected && this._onSocketConnectBound();
                else {
                    const e = new URL(this.announceUrl);
                    let t;
                    this.client._proxyOpts && (t = "wss:" === e.protocol ? this.client._proxyOpts.httpsAgent : this.client._proxyOpts.httpAgent, !t && this.client._proxyOpts.socksProxy && (t = this.client._proxyOpts.socksProxy)), this.socket = Fi[this.announceUrl] = new qi({
                        url: this.announceUrl,
                        agent: t
                    }), this.socket.consumers = 1, this.socket.once("connect", this._onSocketConnectBound)
                }
                this.socket.on("data", this._onSocketDataBound), this.socket.once("close", this._onSocketCloseBound), this.socket.once("error", this._onSocketErrorBound)
            }
            _onSocketConnect() {
                this.destroyed || this.reconnecting && (this.reconnecting = !1, this.retries = 0, this.announce(this.client._defaultAnnounceOpts()))
            }
            _onSocketData(e) {
                if (!this.destroyed) {
                    this.expectingResponse = !1;
                    try {
                        e = JSON.parse(Si(e))
                    } catch (t) {
                        return void this.client.emit("warning", new Error("Invalid tracker response"))
                    }
                    "announce" === e.action ? this._onAnnounceResponse(e) : "scrape" === e.action ? this._onScrapeResponse(e) : this._onSocketError(new Error("invalid action in WS response: ".concat(e.action)))
                }
            }
            _onAnnounceResponse(e) {
                if (e.info_hash !== this.client._infoHashBinary) return void zi("ignoring websocket data from %s for %s (looking for %s: reused socket)", this.announceUrl, Ei(e.info_hash), this.client.infoHash);
                if (e.peer_id && e.peer_id === this.client._peerIdBinary) return;
                zi("received %s from %s for %s", JSON.stringify(e), this.announceUrl, this.client.infoHash);
                const t = e["failure reason"];
                if (t) return this.client.emit("warning", new Error(t));
                const n = e["warning message"];
                n && this.client.emit("warning", new Error(n));
                const i = e.interval || e["min interval"];
                i && this.setInterval(1e3 * i);
                const r = e["tracker id"];
                if (r && (this._trackerId = r), null != e.complete) {
                    const t = Object.assign({}, e, {
                        announce: this.announceUrl,
                        infoHash: Ei(e.info_hash)
                    });
                    this.client.emit("update", t)
                }
                let o;
                if (e.offer && e.peer_id && (zi("creating peer (from remote offer)"), o = this._createPeer(), o.id = Ei(e.peer_id), o.once("signal", (t => {
                        const n = {
                            action: "announce",
                            info_hash: this.client._infoHashBinary,
                            peer_id: this.client._peerIdBinary,
                            to_peer_id: e.peer_id,
                            answer: t,
                            offer_id: e.offer_id
                        };
                        this._trackerId && (n.trackerid = this._trackerId), this._send(n)
                    })), this.client.emit("peer", o), o.signal(e.offer)), e.answer && e.peer_id) {
                    const t = Ei(e.offer_id);
                    o = this.peers[t], o ? (o.id = Ei(e.peer_id), this.client.emit("peer", o), o.signal(e.answer), clearTimeout(o.trackerTimeout), o.trackerTimeout = null, delete this.peers[t]) : zi("got unexpected answer: ".concat(JSON.stringify(e.answer)))
                }
            }
            _onScrapeResponse(e) {
                e = e.files || {};
                const t = Object.keys(e);
                0 !== t.length ? t.forEach((t => {
                    const n = Object.assign(e[t], {
                        announce: this.announceUrl,
                        infoHash: Ei(t)
                    });
                    this.client.emit("scrape", n)
                })) : this.client.emit("warning", new Error("invalid scrape response"))
            }
            _onSocketClose() {
                this.destroyed || (this.destroy(), this._startReconnectTimer())
            }
            _onSocketError(e) {
                this.destroyed || (this.destroy(), this.client.emit("warning", e), this._startReconnectTimer())
            }
            _startReconnectTimer() {
                const e = Math.floor(3e5 * Math.random()) + Math.min(1e4 * Math.pow(2, this.retries), 36e5);
                this.reconnecting = !0, clearTimeout(this.reconnectTimer), this.reconnectTimer = setTimeout((() => {
                    this.retries++, this._openSocket()
                }), e), this.reconnectTimer.unref && this.reconnectTimer.unref(), zi("reconnecting socket in %s ms", e)
            }
            _send(e) {
                if (this.destroyed) return;
                this.expectingResponse = !0;
                const t = JSON.stringify(e);
                zi("send %s", t), this.socket.send(t)
            }
            _generateOffers(e, t) {
                const n = this,
                    i = [];
                zi("generating %s offers", e);
                for (let s = 0; s < e; ++s) r();

                function r() {
                    const e = gi(Pi(20));
                    zi("creating peer (from _generateOffers)");
                    const t = n.peers[e] = n._createPeer({
                        initiator: !0
                    });
                    t.once("signal", (t => {
                        i.push({
                            offer: t,
                            offer_id: xi(e)
                        }), o()
                    })), t.trackerTimeout = setTimeout((() => {
                        zi("tracker timeout: destroying peer"), t.trackerTimeout = null, delete n.peers[e], t.destroy()
                    }), 5e4), t.trackerTimeout.unref && t.trackerTimeout.unref()
                }

                function o() {
                    i.length === e && (zi("generated %s offers", e), t(i))
                }
                o()
            }
            _createPeer(e) {
                const t = this;
                e = Object.assign({
                    trickle: !1,
                    config: t.client._rtcConfig,
                    wrtc: t.client._wrtc
                }, e);
                const n = new Ni(e);
                return n.once("error", i), n.once("connect", (function e() {
                    n.removeListener("error", i), n.removeListener("connect", e)
                })), n;

                function i(e) {
                    t.client.emit("warning", new Error("Connection error: ".concat(e.message))), n.destroy()
                }
            }
        }

        function Hi() {}
        ji.prototype.DEFAULT_ANNOUNCE_INTERVAL = 3e4, ji._socketPool = Fi;
        const Wi = We("bittorrent-tracker:client");
        class Vi extends lt {
            constructor() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                if (super(), !e.peerId) throw new Error("Option `peerId` is required");
                if (!e.infoHash) throw new Error("Option `infoHash` is required");
                if (!e.announce) throw new Error("Option `announce` is required");
                if (!Oe.browser && !e.port) throw new Error("Option `port` is required");
                this.peerId = "string" === typeof e.peerId ? e.peerId : gi(e.peerId), this._peerIdBuffer = yi(this.peerId), this._peerIdBinary = xi(this.peerId), this.infoHash = "string" === typeof e.infoHash ? e.infoHash.toLowerCase() : gi(e.infoHash), this._infoHashBuffer = yi(this.infoHash), this._infoHashBinary = xi(this.infoHash), Wi("new client %s", this.infoHash), this.destroyed = !1, this._port = e.port, this._getAnnounceOpts = e.getAnnounceOpts, this._rtcConfig = e.rtcConfig, this._userAgent = e.userAgent, this._proxyOpts = e.proxyOpts, this._wrtc = "function" === typeof e.wrtc ? e.wrtc() : e.wrtc;
                let t = "string" === typeof e.announce ? [e.announce] : null == e.announce ? [] : e.announce;
                t = t.map((e => (ArrayBuffer.isView(e) && (e = Si(e)), "/" === e[e.length - 1] && (e = e.substring(0, e.length - 1)), e))), t = Array.from(new Set(t));
                const n = !1 !== this._wrtc && (!!this._wrtc || Ni.WEBRTC_SUPPORT),
                    i = e => {
                        yt((() => {
                            this.emit("warning", e)
                        }))
                    };
                this._trackers = t.map((e => {
                    let t;
                    try {
                        t = Oi.parseUrl(e)
                    } catch (s) {
                        return i(new Error("Invalid tracker URL: ".concat(e))), null
                    }
                    const r = t.port;
                    if (r < 0 || r > 65535) return i(new Error("Invalid tracker port: ".concat(e))), null;
                    const o = t.protocol;
                    return "http:" !== o && "https:" !== o || "function" !== typeof Mi ? "udp:" === o && "function" === typeof Mi ? new Mi(this, e) : "ws:" !== o && "wss:" !== o || !n || "ws:" === o && "undefined" !== typeof window && "https:" === window.location.protocol ? (i(new Error("Unsupported tracker protocol: ".concat(e))), null) : new ji(this, e) : new Mi(this, e)
                })).filter(Boolean)
            }
            start(e) {
                (e = this._defaultAnnounceOpts(e)).event = "started", Wi("send `start` %o", e), this._announce(e), this._trackers.forEach((e => {
                    e.setInterval()
                }))
            }
            stop(e) {
                (e = this._defaultAnnounceOpts(e)).event = "stopped", Wi("send `stop` %o", e), this._announce(e)
            }
            complete(e) {
                e || (e = {}), (e = this._defaultAnnounceOpts(e)).event = "completed", Wi("send `complete` %o", e), this._announce(e)
            }
            update(e) {
                (e = this._defaultAnnounceOpts(e)).event && delete e.event, Wi("send `update` %o", e), this._announce(e)
            }
            _announce(e) {
                this._trackers.forEach((t => {
                    t.announce(e)
                }))
            }
            scrape(e) {
                Wi("send `scrape`"), e || (e = {}), this._trackers.forEach((t => {
                    t.scrape(e)
                }))
            }
            setInterval(e) {
                Wi("setInterval %d", e), this._trackers.forEach((t => {
                    t.setInterval(e)
                }))
            }
            destroy(e) {
                if (this.destroyed) return;
                this.destroyed = !0, Wi("destroy");
                const t = this._trackers.map((e => t => {
                    e.destroy(t)
                }));
                wt(t, e), this._trackers = [], this._getAnnounceOpts = null
            }
            _defaultAnnounceOpts() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                return null == e.numwant && (e.numwant = Oi.DEFAULT_ANNOUNCE_PEERS), null == e.uploaded && (e.uploaded = 0), null == e.downloaded && (e.downloaded = 0), this._getAnnounceOpts && (e = Object.assign({}, e, this._getAnnounceOpts())), e
            }
        }
        Vi.scrape = (e, t) => {
            if (t = ft(t), !e.infoHash) throw new Error("Option `infoHash` is required");
            if (!e.announce) throw new Error("Option `announce` is required");
            const n = Object.assign({}, e, {
                    infoHash: Array.isArray(e.infoHash) ? e.infoHash[0] : e.infoHash,
                    peerId: ki("01234567890123456789"),
                    port: 6881
                }),
                i = new Vi(n);
            i.once("error", t), i.once("warning", t);
            let r = Array.isArray(e.infoHash) ? e.infoHash.length : 1;
            const o = {};
            return i.on("scrape", (e => {
                if (r -= 1, o[e.infoHash] = e, 0 === r) {
                    i.destroy();
                    const e = Object.keys(o);
                    1 === e.length ? t(null, o[e[0]]) : t(null, o)
                }
            })), i.scrape({
                infoHash: e.infoHash
            }), i
        };
        var Qi = {
            exports: {}
        };

        function $i(e, t, n, i, r, o, s) {
            var a = e + (t & n | ~t & i) + (r >>> 0) + s;
            return (a << o | a >>> 32 - o) + t
        }

        function Ki(e, t, n, i, r, o, s) {
            var a = e + (t & i | n & ~i) + (r >>> 0) + s;
            return (a << o | a >>> 32 - o) + t
        }

        function Xi(e, t, n, i, r, o, s) {
            var a = e + (t ^ n ^ i) + (r >>> 0) + s;
            return (a << o | a >>> 32 - o) + t
        }

        function Yi(e, t, n, i, r, o, s) {
            var a = e + (n ^ (t | ~i)) + (r >>> 0) + s;
            return (a << o | a >>> 32 - o) + t
        }

        function Gi(e) {
            return String.fromCharCode(255 & e)
        }

        function Ji(e) {
            return Gi(e) + Gi(e >>> 8) + Gi(e >>> 16) + Gi(e >>> 24)
        }
        var Zi = function(e) {
            return unescape(encodeURIComponent(e))
        };
        var er = Qi.exports = function(e) {
                return nr(e).toHex()
            },
            tr = er.fromBytes = function(e) {
                for (var t = function(e) {
                        for (var t = e.length, n = t << 3, i = new Uint32Array(t + 72 >>> 6 << 4), r = 0, o = e.length; r < o; ++r) i[r >>> 2] |= e.charCodeAt(r) << ((3 & r) << 3);
                        return i[t >> 2] |= 128 << (31 & n), i[i.length - 2] = n, i
                    }(e), n = 1732584193, i = 4023233417, r = 2562383102, o = 271733878, s = 0, a = t.length; s < a; s += 16) {
                    var l = n,
                        c = i,
                        u = r,
                        d = o;
                    n = $i(n, i, r, o, t[s + 0], 7, 3614090360), o = $i(o, n, i, r, t[s + 1], 12, 3905402710), r = $i(r, o, n, i, t[s + 2], 17, 606105819), i = $i(i, r, o, n, t[s + 3], 22, 3250441966), n = $i(n, i, r, o, t[s + 4], 7, 4118548399), o = $i(o, n, i, r, t[s + 5], 12, 1200080426), r = $i(r, o, n, i, t[s + 6], 17, 2821735955), i = $i(i, r, o, n, t[s + 7], 22, 4249261313), n = $i(n, i, r, o, t[s + 8], 7, 1770035416), o = $i(o, n, i, r, t[s + 9], 12, 2336552879), r = $i(r, o, n, i, t[s + 10], 17, 4294925233), i = $i(i, r, o, n, t[s + 11], 22, 2304563134), n = $i(n, i, r, o, t[s + 12], 7, 1804603682), o = $i(o, n, i, r, t[s + 13], 12, 4254626195), r = $i(r, o, n, i, t[s + 14], 17, 2792965006), n = Ki(n, i = $i(i, r, o, n, t[s + 15], 22, 1236535329), r, o, t[s + 1], 5, 4129170786), o = Ki(o, n, i, r, t[s + 6], 9, 3225465664), r = Ki(r, o, n, i, t[s + 11], 14, 643717713), i = Ki(i, r, o, n, t[s + 0], 20, 3921069994), n = Ki(n, i, r, o, t[s + 5], 5, 3593408605), o = Ki(o, n, i, r, t[s + 10], 9, 38016083), r = Ki(r, o, n, i, t[s + 15], 14, 3634488961), i = Ki(i, r, o, n, t[s + 4], 20, 3889429448), n = Ki(n, i, r, o, t[s + 9], 5, 568446438), o = Ki(o, n, i, r, t[s + 14], 9, 3275163606), r = Ki(r, o, n, i, t[s + 3], 14, 4107603335), i = Ki(i, r, o, n, t[s + 8], 20, 1163531501), n = Ki(n, i, r, o, t[s + 13], 5, 2850285829), o = Ki(o, n, i, r, t[s + 2], 9, 4243563512), r = Ki(r, o, n, i, t[s + 7], 14, 1735328473), n = Xi(n, i = Ki(i, r, o, n, t[s + 12], 20, 2368359562), r, o, t[s + 5], 4, 4294588738), o = Xi(o, n, i, r, t[s + 8], 11, 2272392833), r = Xi(r, o, n, i, t[s + 11], 16, 1839030562), i = Xi(i, r, o, n, t[s + 14], 23, 4259657740), n = Xi(n, i, r, o, t[s + 1], 4, 2763975236), o = Xi(o, n, i, r, t[s + 4], 11, 1272893353), r = Xi(r, o, n, i, t[s + 7], 16, 4139469664), i = Xi(i, r, o, n, t[s + 10], 23, 3200236656), n = Xi(n, i, r, o, t[s + 13], 4, 681279174), o = Xi(o, n, i, r, t[s + 0], 11, 3936430074), r = Xi(r, o, n, i, t[s + 3], 16, 3572445317), i = Xi(i, r, o, n, t[s + 6], 23, 76029189), n = Xi(n, i, r, o, t[s + 9], 4, 3654602809), o = Xi(o, n, i, r, t[s + 12], 11, 3873151461), r = Xi(r, o, n, i, t[s + 15], 16, 530742520), n = Yi(n, i = Xi(i, r, o, n, t[s + 2], 23, 3299628645), r, o, t[s + 0], 6, 4096336452), o = Yi(o, n, i, r, t[s + 7], 10, 1126891415), r = Yi(r, o, n, i, t[s + 14], 15, 2878612391), i = Yi(i, r, o, n, t[s + 5], 21, 4237533241), n = Yi(n, i, r, o, t[s + 12], 6, 1700485571), o = Yi(o, n, i, r, t[s + 3], 10, 2399980690), r = Yi(r, o, n, i, t[s + 10], 15, 4293915773), i = Yi(i, r, o, n, t[s + 1], 21, 2240044497), n = Yi(n, i, r, o, t[s + 8], 6, 1873313359), o = Yi(o, n, i, r, t[s + 15], 10, 4264355552), r = Yi(r, o, n, i, t[s + 6], 15, 2734768916), i = Yi(i, r, o, n, t[s + 13], 21, 1309151649), n = Yi(n, i, r, o, t[s + 4], 6, 4149444226), o = Yi(o, n, i, r, t[s + 11], 10, 3174756917), r = Yi(r, o, n, i, t[s + 2], 15, 718787259), i = Yi(i, r, o, n, t[s + 9], 21, 3951481745), n = n + l >>> 0, i = i + c >>> 0, r = r + u >>> 0, o = o + d >>> 0
                }
                var h = new String(Ji(n) + Ji(i) + Ji(r) + Ji(o));
                return h.toHex = function() {
                    for (var e = "", t = 0, n = h.length; t < n; ++t) e += (256 + (255 & h.charCodeAt(t))).toString(16).substr(-2);
                    return e
                }, h
            },
            nr = er.fromUtf8 = function(e) {
                return tr(Zi(e))
            },
            ir = "./0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

        function rr(e, t) {
            for (var n = ""; --t >= 0; e >>>= 6) n += ir.charAt(63 & e);
            return n
        }
        var or = [0, 6, 12, 1, 7, 13, 2, 8, 14, 3, 9, 15, 4, 10, 5, 11],
            sr = er.salt = function(e) {
                var t = "";
                e || (e = 8);
                do {
                    t += ir.charAt(64 * Math.random() >>> 0)
                } while (--e);
                return t
            };
        er.crypt = function(e, t) {
            if (e.length > 64) throw Error("too long key");
            t || (t = "$1$" + sr()), e = Zi(e);
            for (var n = Zi(t.replace(/^\$1\$([^$]+)(?:\$.*)?$/, "$1")), i = tr(e + n + e), r = e + "$1$" + n, o = e.length; o > 16; o -= 16) r += i;
            r += i.slice(0, o);
            for (o = e.length; o; o >>= 1) r += 1 & o ? "\0" : e.charAt(0);
            i = tr(r);
            for (var s = 0; s < 1e3; ++s) i = tr((1 & s ? e : i) + (s % 3 ? n : "") + (s % 7 ? e : "") + (1 & s ? i : e));
            var a = "$1$" + n + "$";
            for (s = 0; s < 15; s += 3) a += rr(i.charCodeAt(or[s + 0]) << 16 | i.charCodeAt(or[s + 1]) << 8 | i.charCodeAt(or[s + 2]), 4);
            return a + rr(i.charCodeAt(or[15]), 2)
        };
        const ar = Be(Qi.exports),
            lr = "-PM".concat(function(e) {
                const t = e.split(".");
                return "".concat(t[0].padStart(2, "0")).concat(t[1].padStart(2, "0"))
            }("1.0.5"), "-"),
            cr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

        function ur(e) {
            return "".concat(e.type, "-").concat(e.index)
        }

        function dr(e) {
            const {
                externalId: t
            } = e;
            return "(".concat(ur(e.stream), " | ").concat(t, ")")
        }

        function hr(e, t) {
            void 0 === t && (t = e.reduce(((e, t) => e + t.byteLength), 0));
            const n = new Uint8Array(t);
            let i = 0;
            for (const r of e) n.set(r, i), i += r.byteLength;
            return n
        }

        function pr(e) {
            const t = new TextEncoder,
                n = new Uint8Array(e.length);
            return t.encodeInto(e, n), n
        }

        function* fr(e) {
            for (let t = e.length - 1; t >= 0; t--) yield e[t]
        }

        function mr(e) {
            return !!e && "object" === typeof e && !Array.isArray(e)
        }

        function gr(e) {
            if (function(e) {
                    return Array.isArray(e)
                }(e)) return e.map((e => gr(e)));
            if (mr(e)) {
                const t = {};
                for (const n of Object.keys(e)) t[n] = gr(e[n]);
                return t
            }
            return e
        }

        function yr(e, t) {
            let n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
            return "object" !== typeof e || null === e || "object" !== typeof t || null === t || Object.keys(t).forEach((i => {
                if ("__proto__" === i || "constructor" === i || "prototype" === i) throw new Error("Attempt to modify restricted property '".concat(String(i), "'"));
                const r = t[i],
                    o = n[i];
                i in e && (e[i] = void 0 === r ? void 0 === o ? void 0 : o : r)
            })), e
        }

        function vr(e) {
            const {
                defaultConfig: t,
                baseConfig: n = {},
                specificStreamConfig: i = {}
            } = e, r = gr({
                ...t,
                ...n,
                ...i
            }), o = Object.keys(t), s = {};
            return o.forEach((e => {
                e in r && (s[e] = r[e])
            })), s
        }
        var br = (e => (e[e.SegmentsAnnouncement = 0] = "SegmentsAnnouncement", e[e.SegmentRequest = 1] = "SegmentRequest", e[e.SegmentData = 2] = "SegmentData", e[e.SegmentDataSendingCompleted = 3] = "SegmentDataSendingCompleted", e[e.SegmentAbsent = 4] = "SegmentAbsent", e[e.CancelSegmentRequest = 5] = "CancelSegmentRequest", e))(br || {}),
            wr = (e => (e[e.Min = -1] = "Min", e[e.Int = 0] = "Int", e[e.SimilarIntArray = 1] = "SimilarIntArray", e[e.String = 2] = "String", e[e.Max = 3] = "Max", e))(wr || {});

        function _r(e) {
            const t = e < 0,
                n = function(e) {
                    const t = e.toString(2),
                        n = e < 0 ? t.length : t.length + 1;
                    return Math.ceil(n / 8)
                }(e),
                i = new Uint8Array(n),
                r = BigInt(n);
            e = function(e) {
                return e < 0 ? -e : e
            }(e);
            for (let o = 0; o < n; o++) {
                const t = e >> 8n * (r - 1n - BigInt(o)) & 0xffn;
                i[o] = Number(t)
            }
            return t && (i[0] = 128 | i[0]), i
        }

        function Sr(e) {
            const t = BigInt(e.length),
                n = (e, n) => {
                    const i = 8n * (t - 1n - BigInt(n));
                    return BigInt(e) << i
                };
            let i = n(127 & e[0], 0);
            for (let r = 1; r < t; r++) i = n(e[r], r) | i;
            return (128 & e[0]) >> 7 !== 0 && (i = -i), i
        }

        function Cr(e) {
            const t = _r(e),
                n = 0 | t.length;
            return new Uint8Array([n, ...t])
        }

        function kr(e) {
            const t = e[0];
            if (0 !== t >> 4) throw new Error("Trying to deserialize integer with invalid serialized item code");
            const n = 15 & t,
                i = 1 + n;
            return {
                number: Sr(e.slice(1, i)),
                byteLength: n + 1
            }
        }

        function Er(e) {
            const [t, n] = e;
            if (1 !== t >> 4) throw new Error("Trying to deserialize similar int array with invalid serialized item code");
            let i = 2;
            const r = [];
            for (let o = 0; o < n; o++) {
                const {
                    number: t,
                    byteLength: n
                } = kr(e.slice(i));
                i += n;
                const o = 0xffn & t,
                    s = -256n & t;
                for (let a = 0; a < o; a++) {
                    const t = BigInt(e[i]);
                    r.push(s | t), i++
                }
            }
            return {
                numbers: r,
                byteLength: i
            }
        }

        function xr(e) {
            const [t, n] = e;
            if (2 !== t >> 4) throw new Error("Trying to deserialize bytes (sting) with invalid serialized item code.");
            const i = (15 & t) << 8 | n,
                r = e.slice(2, i + 2);
            return {
                string: new TextDecoder("utf8").decode(r),
                byteLength: i + 2
            }
        }
        class Tr {
            constructor() {
                me(this, "bytes", []), me(this, "_length", 0)
            }
            push(e) {
                this.addBytes(e, "end")
            }
            unshift(e) {
                this.addBytes(e, "start")
            }
            addBytes(e, t) {
                let n;
                n = e instanceof Uint8Array ? e : Array.isArray(e) ? new Uint8Array(e) : new Uint8Array([e]), this._length += n.length, this.bytes["start" === t ? "unshift" : "push"](n)
            }
            getBytesChunks() {
                return this.bytes
            }
            getBuffer() {
                return hr(this.bytes, this._length)
            }
            get length() {
                return this._length
            }
        }
        const Lr = Fr("cstr", 4),
            Pr = Fr("cend", 4),
            Ar = Fr("dstr", 4),
            Ir = Fr("dend", 4),
            Rr = [Lr, Ar],
            Nr = [Pr, Ir],
            Mr = Lr.length + Pr.length;

        function Or(e) {
            const t = Lr.length,
                n = e.slice(-t);
            return Rr.some((t => Hr(e, t, 4))) && Nr.some((e => Hr(n, e, 4)))
        }
        class Dr extends Error {
            constructor(e) {
                super(), this.type = e
            }
        }
        class Br {
            constructor(e) {
                me(this, "chunks", new Tr), me(this, "status", "joining"), this.onComplete = e
            }
            addCommandChunk(e) {
                if ("completed" === this.status) return;
                const t = Hr(e, Lr, 4);
                if (!this.chunks.length && !t) throw new Dr("no-first-chunk");
                if (this.chunks.length && t) throw new Dr("incomplete-joining");
                this.chunks.push(this.unframeCommandChunk(e)),
                    function(e) {
                        return Hr(e.slice(-4), Pr, 4)
                    }(e) && (this.status = "completed", this.onComplete(this.chunks.getBuffer()))
            }
            unframeCommandChunk(e) {
                return e.slice(4, e.length - 4)
            }
        }
        class qr {
            constructor(e, t) {
                me(this, "bytes", new Tr), me(this, "resultBuffers", []), me(this, "status", "creating"), this.maxChunkLength = t, this.bytes.push(e)
            }
            addInteger(e, t) {
                this.bytes.push(e.charCodeAt(0));
                const n = Cr(BigInt(t));
                this.bytes.push(n)
            }
            addSimilarIntArr(e, t) {
                this.bytes.push(e.charCodeAt(0));
                const n = function(e) {
                    const t = new Map;
                    for (const r of e) {
                        var n;
                        const e = -256n & r,
                            i = 0xffn & r,
                            o = null !== (n = t.get(e)) && void 0 !== n ? n : new Tr;
                        o.length || t.set(e, o), o.push(Number(i))
                    }
                    const i = new Tr;
                    i.push([16, t.size]);
                    for (const [r, o] of t) {
                        const {
                            length: e
                        } = o.getBytesChunks(), t = r | 0xffn & BigInt(e);
                        o.unshift(Cr(t)), i.push(o.getBuffer())
                    }
                    return i.getBuffer()
                }(t.map((e => BigInt(e))));
                this.bytes.push(n)
            }
            addString(e, t) {
                this.bytes.push(e.charCodeAt(0));
                const n = function(e) {
                    const {
                        length: t
                    } = e, n = new Tr;
                    return n.push([32 | t >> 8 & 15, 255 & t]), n.push((new TextEncoder).encode(e)), n.getBuffer()
                }(t);
                this.bytes.push(n)
            }
            complete() {
                if (!this.bytes.length) throw new Error("Buffer is empty");
                if ("completed" === this.status) return;
                this.status = "completed";
                const e = this.bytes.getBuffer();
                if (e.length + Mr <= this.maxChunkLength) return void this.resultBuffers.push(jr(e, Lr, Pr));
                let t = Math.ceil(e.length / this.maxChunkLength);
                Math.ceil(e.length / t) + Mr > this.maxChunkLength && t++;
                for (const [n, i] of
                    function*(e, t) {
                        const n = Math.ceil(e.length / t);
                        for (let i = 0; i < t; i++) yield [i, e.slice(i * n, (i + 1) * n)]
                    }(e, t)) 0 === n ? this.resultBuffers.push(jr(i, Lr, Ir)) : n === t - 1 ? this.resultBuffers.push(jr(i, Ar, Pr)) : this.resultBuffers.push(jr(i, Ar, Ir))
            }
            getResultBuffers() {
                if ("creating" === this.status || !this.resultBuffers.length) throw new Error("Command is not complete.");
                return this.resultBuffers
            }
        }

        function Ur(e) {
            const [t] = e, n = {
                c: t
            };
            let i = 1;
            for (; i < e.length;) {
                const t = String.fromCharCode(e[i]);
                i++;
                switch (zr(e[i])) {
                    case wr.Int: {
                        const {
                            number: r,
                            byteLength: o
                        } = kr(e.slice(i));
                        n[t] = Number(r), i += o
                    }
                    break;
                    case wr.SimilarIntArray: {
                        const {
                            numbers: r,
                            byteLength: o
                        } = Er(e.slice(i));
                        n[t] = r.map((e => Number(e))), i += o
                    }
                    break;
                    case wr.String: {
                        const {
                            string: r,
                            byteLength: o
                        } = xr(e.slice(i));
                        n[t] = r, i += o
                    }
                }
            }
            return n
        }

        function zr(e) {
            const t = e >> 4;
            if (t <= wr.Min || t >= wr.Max) throw new Error("Not existing type");
            return t
        }

        function Fr(e, t) {
            if (e.length !== t) throw new Error("Wrong string length");
            const n = new Uint8Array(t);
            for (let i = 0; i < e.length; i++) n[i] = e.charCodeAt(i);
            return n
        }

        function jr(e, t, n) {
            const i = new Uint8Array(e.length + t.length + n.length);
            return i.set(t), i.set(e, t.length), i.set(n, t.length + e.length), i
        }

        function Hr(e, t, n) {
            for (let i = 0; i < n; i++)
                if (e[i] !== t[i]) return !1;
            return !0
        }

        function Wr(e, t) {
            switch (e.c) {
                case br.CancelSegmentRequest:
                case br.SegmentAbsent:
                case br.SegmentDataSendingCompleted:
                    return function(e, t) {
                        const n = new qr(e.c, t);
                        return n.addInteger("i", e.i), n.addInteger("r", e.r), n.complete(), n.getResultBuffers()
                    }(e, t);
                case br.SegmentRequest:
                    return function(e, t) {
                        const n = new qr(e.c, t);
                        return n.addInteger("i", e.i), n.addInteger("r", e.r), e.b && n.addInteger("b", e.b), n.complete(), n.getResultBuffers()
                    }(e, t);
                case br.SegmentsAnnouncement:
                    return function(e, t) {
                        const {
                            c: n,
                            p: i,
                            l: r
                        } = e, o = new qr(n, t);
                        return (null == r ? void 0 : r.length) && o.addSimilarIntArr("l", r), (null == i ? void 0 : i.length) && o.addSimilarIntArr("p", i), o.complete(), o.getResultBuffers()
                    }(e, t);
                case br.SegmentData:
                    return function(e, t) {
                        const n = new qr(e.c, t);
                        return n.addInteger("i", e.i), n.addInteger("s", e.s), n.addInteger("r", e.r), n.complete(), n.getResultBuffers()
                    }(e, t)
            }
        }
        const Vr = Object.freeze(Object.defineProperty({
            __proto__: null,
            BinaryCommandChunksJoiner: Br,
            BinaryCommandJoiningError: Dr,
            PeerCommandType: br,
            deserializeCommand: Ur,
            isCommandChunk: Or,
            serializePeerCommand: Wr
        }, Symbol.toStringTag, {
            value: "Module"
        }));
        class Qr {
            constructor(e, t, n, i) {
                me(this, "commandChunks"), me(this, "uploadingContext"), me(this, "onChunkDownloaded"), me(this, "onChunkUploaded"), me(this, "onDataReceived", (e => {
                    Or(e) ? this.receivingCommandBytes(e) : (this.eventHandlers.onSegmentChunkReceived(e), this.onChunkDownloaded(e.byteLength, "p2p", this.connection.idUtf8))
                })), this.connection = e, this.peerConfig = t, this.eventHandlers = n, this.onChunkDownloaded = i.getEventDispatcher("onChunkDownloaded"), this.onChunkUploaded = i.getEventDispatcher("onChunkUploaded"), e.on("data", this.onDataReceived)
            }
            sendCommand(e) {
                const t = Wr(e, this.peerConfig.webRtcMaxMessageSize);
                for (const n of t) this.connection.write(n)
            }
            stopUploadingSegmentData() {
                var e;
                null == (e = this.uploadingContext) || e.stopUploading(), this.uploadingContext = void 0
            }
            getUploadingRequestId() {
                var e;
                return null == (e = this.uploadingContext) ? void 0 : e.requestId
            }
            async splitSegmentDataToChunksAndUploadAsync(e, t) {
                if (this.uploadingContext) throw new Error("Some segment data is already uploading.");
                const n = function*(e, t) {
                        let n = e.byteLength;
                        for (; n > 0;) {
                            const i = n >= t ? t : n,
                                r = e.byteLength - n,
                                o = e.slice(r, r + i);
                            n -= i, yield o
                        }
                    }(e, this.peerConfig.webRtcMaxMessageSize),
                    {
                        promise: i,
                        resolve: r,
                        reject: o
                    } = function() {
                        let e, t;
                        return {
                            promise: new Promise(((n, i) => {
                                e = n, t = i
                            })),
                            resolve: e,
                            reject: t
                        }
                    }();
                let s = !1;
                const a = {
                    stopUploading: () => {
                        s = !1
                    },
                    requestId: t
                };
                this.uploadingContext = a;
                const l = () => {
                    if (s)
                        for (;;) {
                            const e = n.next().value;
                            if (!e) {
                                r();
                                break
                            }
                            const t = this.connection.write(e);
                            if (this.onChunkUploaded(e.byteLength, this.connection.idUtf8), !t) break
                        } else o()
                };
                try {
                    this.connection.on("drain", l), s = !0, l(), await i
                } finally {
                    this.connection.off("drain", l), this.uploadingContext === a && (this.uploadingContext = void 0)
                }
            }
            receivingCommandBytes(e) {
                this.commandChunks || (this.commandChunks = new Br((e => {
                    this.commandChunks = void 0;
                    const t = Ur(e);
                    this.eventHandlers.onCommandReceived(t)
                })));
                try {
                    this.commandChunks.addCommandChunk(e)
                } catch (t) {
                    if (!(t instanceof Dr)) return;
                    this.commandChunks = void 0
                }
            }
        }
        const {
            PeerCommandType: $r
        } = Vr;
        class Kr {
            constructor(e, t, n, i, r) {
                me(this, "id"), me(this, "peerProtocol"), me(this, "downloadingContext"), me(this, "loadedSegments", new Set), me(this, "httpLoadingSegments", new Set), me(this, "downloadingErrors", []), me(this, "logger", We("p2pml-core:peer")), me(this, "onPeerClosed"), me(this, "onCommandReceived", (async e => {
                    var t, n, i, r;
                    switch (e.c) {
                        case $r.SegmentsAnnouncement:
                            this.loadedSegments = new Set(e.l), this.httpLoadingSegments = new Set(e.p), this.eventHandlers.onSegmentsAnnouncement();
                            break;
                        case $r.SegmentRequest:
                            this.peerProtocol.stopUploadingSegmentData(), this.eventHandlers.onSegmentRequested(this, e.i, e.r, e.b);
                            break;
                        case $r.SegmentData: {
                            if (!this.downloadingContext) break;
                            if (this.downloadingContext.isSegmentDataCommandReceived) break;
                            const {
                                request: t,
                                controls: n,
                                requestId: i
                            } = this.downloadingContext;
                            if (t.segment.externalId !== e.i || i !== e.r) break;
                            this.downloadingContext.isSegmentDataCommandReceived = !0, n.firstBytesReceived(), void 0 === t.totalBytes ? t.setTotalBytes(e.s) : t.totalBytes - t.loadedBytes !== e.s && (t.clearLoadedBytes(), this.sendCancelSegmentRequestCommand(t.segment, i), this.cancelSegmentDownloading("peer-response-bytes-length-mismatch"), this.destroy())
                        }
                        break;
                        case $r.SegmentDataSendingCompleted: {
                            var o;
                            const i = this.downloadingContext;
                            if (!(null == i ? void 0 : i.isSegmentDataCommandReceived)) return;
                            const {
                                request: r,
                                controls: s
                            } = i;
                            if (i.request.segment.externalId !== e.i || i.requestId !== e.r) return r.clearLoadedBytes(), this.cancelSegmentDownloading("peer-protocol-violation"), void this.destroy();
                            if (r.loadedBytes !== r.totalBytes) return r.clearLoadedBytes(), this.cancelSegmentDownloading("peer-response-bytes-length-mismatch"), void this.destroy();
                            const a = null === (o = await (null == (n = (t = this.peerConfig).validateP2PSegment) ? void 0 : n.call(t, r.segment.url, r.segment.byteRange))) || void 0 === o || o;
                            if (this.downloadingContext !== i) return;
                            if (!a) return r.clearLoadedBytes(), this.cancelSegmentDownloading("p2p-segment-validation-failed"), void this.destroy();
                            this.downloadingErrors = [], s.completeOnSuccess(), this.downloadingContext = void 0;
                            break
                        }
                        case $r.SegmentAbsent:
                            (null == (i = this.downloadingContext) ? void 0 : i.request.segment.externalId) === e.i && (null == (r = this.downloadingContext) ? void 0 : r.requestId) === e.r && (this.cancelSegmentDownloading("peer-segment-absent"), this.loadedSegments.delete(e.i));
                            break;
                        case $r.CancelSegmentRequest:
                            if (this.peerProtocol.getUploadingRequestId() !== e.r) break;
                            this.peerProtocol.stopUploadingSegmentData()
                    }
                })), me(this, "onSegmentChunkReceived", (e => {
                    var t;
                    if (!(null == (t = this.downloadingContext) ? void 0 : t.isSegmentDataCommandReceived)) return;
                    const {
                        request: n,
                        controls: i
                    } = this.downloadingContext;
                    if (void 0 !== n.totalBytes && n.loadedBytes + e.byteLength > n.totalBytes) return n.clearLoadedBytes(), this.cancelSegmentDownloading("peer-response-bytes-length-mismatch"), void this.destroy();
                    i.addLoadedChunk(e)
                })), me(this, "onPeerConnectionClosed", (() => {
                    this.destroy()
                })), me(this, "onConnectionError", (e => {
                    this.logger("peer connection error ".concat(this.id, " %O"), e), this.eventTarget.getEventDispatcher("onPeerError")({
                        peerId: this.id,
                        streamType: this.streamType,
                        error: e
                    });
                    const t = e.code;
                    ("ERR_DATA_CHANNEL" === t || "ERR_CONNECTION_FAILURE" === t) && this.destroy()
                })), me(this, "destroy", (() => {
                    this.cancelSegmentDownloading("peer-closed"), this.connection.destroy(), this.eventHandlers.onPeerClosed(this), this.onPeerClosed({
                        peerId: this.id,
                        streamType: this.streamType
                    }), this.logger("peer closed ".concat(this.id))
                })), this.connection = e, this.eventHandlers = t, this.peerConfig = n, this.streamType = i, this.eventTarget = r, this.onPeerClosed = r.getEventDispatcher("onPeerClose"), this.id = Kr.getPeerIdFromConnection(e), this.peerProtocol = new Qr(e, n, {
                    onSegmentChunkReceived: this.onSegmentChunkReceived,
                    onCommandReceived: this.onCommandReceived
                }, r), r.getEventDispatcher("onPeerConnect")({
                    peerId: this.id,
                    streamType: i
                }), e.on("error", this.onConnectionError), e.on("close", this.onPeerConnectionClosed), e.on("end", this.onPeerConnectionClosed), e.on("finish", this.onPeerConnectionClosed)
            }
            get downloadingSegment() {
                var e;
                return null == (e = this.downloadingContext) ? void 0 : e.request.segment
            }
            getSegmentStatus(e) {
                const {
                    externalId: t
                } = e;
                return this.loadedSegments.has(t) ? "loaded" : this.httpLoadingSegments.has(t) ? "http-loading" : void 0
            }
            downloadSegment(e) {
                if (this.downloadingContext) throw new Error("Some segment already is downloading");
                this.downloadingContext = {
                    request: e,
                    requestId: Math.floor(1e3 * Math.random()),
                    isSegmentDataCommandReceived: !1,
                    controls: e.start({
                        downloadSource: "p2p",
                        peerId: this.id
                    }, {
                        notReceivingBytesTimeoutMs: this.peerConfig.p2pNotReceivingBytesTimeoutMs,
                        abort: e => {
                            if (!this.downloadingContext) return;
                            const {
                                request: t,
                                requestId: n
                            } = this.downloadingContext;
                            this.sendCancelSegmentRequestCommand(t.segment, n), this.downloadingErrors.push(e), this.downloadingContext = void 0;
                            this.downloadingErrors.filter((e => "bytes-receiving-timeout" === e.type)).length >= this.peerConfig.p2pErrorRetries && this.destroy()
                        }
                    })
                };
                const t = {
                    c: $r.SegmentRequest,
                    r: this.downloadingContext.requestId,
                    i: e.segment.externalId
                };
                e.loadedBytes && (t.b = e.loadedBytes), this.peerProtocol.sendCommand(t)
            }
            async uploadSegmentData(e, t, n) {
                const {
                    externalId: i
                } = e;
                this.logger("send segment ".concat(e.externalId, " to ").concat(this.id));
                const r = {
                    c: $r.SegmentData,
                    i: i,
                    r: t,
                    s: n.byteLength
                };
                this.peerProtocol.sendCommand(r);
                try {
                    await this.peerProtocol.splitSegmentDataToChunksAndUploadAsync(n, t), this.sendSegmentDataSendingCompletedCommand(e, t), this.logger("segment ".concat(i, " has been sent to ").concat(this.id))
                } catch {
                    this.logger("cancel segment uploading ".concat(i))
                }
            }
            cancelSegmentDownloading(e) {
                if (!this.downloadingContext) return;
                const {
                    request: t,
                    controls: n
                } = this.downloadingContext, {
                    segment: i
                } = t;
                this.logger("cancel segment request ".concat(i.externalId, " (").concat(e, ")"));
                const r = new ge(e);
                n.abortOnError(r), this.downloadingContext = void 0, this.downloadingErrors.push(r)
            }
            sendSegmentsAnnouncementCommand(e, t) {
                const n = {
                    c: $r.SegmentsAnnouncement,
                    p: t,
                    l: e
                };
                this.peerProtocol.sendCommand(n)
            }
            sendSegmentAbsentCommand(e, t) {
                this.peerProtocol.sendCommand({
                    c: $r.SegmentAbsent,
                    i: e,
                    r: t
                })
            }
            sendCancelSegmentRequestCommand(e, t) {
                this.peerProtocol.sendCommand({
                    c: $r.CancelSegmentRequest,
                    i: e.externalId,
                    r: t
                })
            }
            sendSegmentDataSendingCompletedCommand(e, t) {
                this.peerProtocol.sendCommand({
                    c: $r.SegmentDataSendingCompleted,
                    r: t,
                    i: e.externalId
                })
            }
            static getPeerIdFromConnection(e) {
                return function(e) {
                    const t = new Uint8Array(e.length / 2);
                    for (let n = 0; n < e.length; n += 2) t[n / 2] = parseInt(e.slice(n, n + 2), 16);
                    return (new TextDecoder).decode(t)
                }(e.id)
            }
        }

        function Xr() {
            const e = /^((?!chrome|android).)*safari/i.test(navigator.userAgent),
                t = /\b(iPad|iPhone|Macintosh).*AppleWebKit(?!.*Safari)/i.test(navigator.userAgent);
            return e || t
        }
        class Yr {
            constructor(e, t, n, i, r) {
                me(this, "streamShortId"), me(this, "client"), me(this, "_peers", new Map), me(this, "logger", We("p2pml-core:p2p-tracker-client")), me(this, "onReceivePeerConnection", (e => {
                    const t = Kr.getPeerIdFromConnection(e);
                    let n = this._peers.get(t);
                    (null == n ? void 0 : n.peer) ? e.destroy(): (n || (n = {
                        potentialConnections: new Set
                    }, e.idUtf8 = t, n.potentialConnections.add(e), this._peers.set(t, n)), e.on("connect", (() => {
                        if (n && !n.peer) {
                            for (const t of n.potentialConnections) t !== e && t.destroy();
                            n.potentialConnections.clear(), n.peer = new Kr(e, {
                                onPeerClosed: this.onPeerClosed,
                                onSegmentRequested: this.eventHandlers.onSegmentRequested,
                                onSegmentsAnnouncement: this.eventHandlers.onSegmentsAnnouncement
                            }, this.config, this.stream.type, this.eventTarget), this.logger("connected with peer: ".concat(n.peer.id, " ").concat(this.streamShortId)), this.eventHandlers.onPeerConnected(n.peer)
                        }
                    })))
                })), me(this, "onTrackerClientWarning", (e => {
                    this.logger("tracker warning (".concat(this.streamShortId, ": ").concat(e, ")")), this.eventTarget.getEventDispatcher("onTrackerWarning")({
                        streamType: this.stream.type,
                        warning: e
                    })
                })), me(this, "onTrackerClientError", (e => {
                    this.logger("tracker error (".concat(this.streamShortId, ": ").concat(e, ")")), this.eventTarget.getEventDispatcher("onTrackerError")({
                        streamType: this.stream.type,
                        error: e
                    })
                })), me(this, "onPeerClosed", (e => {
                    this.logger("peer closed: ".concat(e.id)), this._peers.delete(e.id)
                })), this.stream = t, this.eventHandlers = n, this.config = i, this.eventTarget = r;
                const o = function(e) {
                    const t = ar.fromUtf8(e).slice(1);
                    return btoa(t)
                }(e);
                this.streamShortId = ur(t);
                const s = function(e) {
                    const t = [e],
                        n = 20 - e.length;
                    for (let i = 0; i < n; i++) t.push(cr[Math.floor(62 * Math.random())]);
                    return t.join("")
                }(i.trackerClientVersionPrefix);
                this.client = new Vi({
                    infoHash: pr(o),
                    peerId: pr(s),
                    announce: Xr() ? i.announceTrackers.slice(0, 1) : i.announceTrackers,
                    rtcConfig: this.config.rtcConfig
                }), this.client.on("peer", this.onReceivePeerConnection), this.client.on("warning", this.onTrackerClientWarning), this.client.on("error", this.onTrackerClientError), this.logger("create new client; \nstream: ".concat(this.streamShortId, "; hash: ").concat(o, "\npeerId: ").concat(s))
            }
            start() {
                this.client.start()
            }
            destroy() {
                this.client.destroy();
                for (const {
                        peer: e,
                        potentialConnections: t
                    }
                    of this._peers.values()) {
                    null == e || e.destroy();
                    for (const e of t) e.destroy()
                }
                this._peers.clear(), this.logger("destroy client; stream: ".concat(this.streamShortId))
            }* peers() {
                for (const e of this._peers.values())(null == e ? void 0 : e.peer) && (yield e.peer)
            }
        }

        function Gr(e, t) {
            for (const n of e.values()) {
                const e = n.segments.get(t);
                if (e) return e
            }
        }

        function Jr(e) {
            return "".concat(e.type, "-").concat(e.index)
        }

        function Zr(e, t, n, i) {
            const {
                highDemandTimeWindow: r,
                httpDownloadTimeWindow: o,
                p2pDownloadTimeWindow: s
            } = n;
            return {
                isHighDemand: eo(e, t, r),
                isHttpDownloadable: eo(e, t, o),
                isP2PDownloadable: eo(e, t, s) && (!i || i.isSegmentLoadingOrLoadedBySomeone(e))
            }
        }

        function eo(e, t, n) {
            const {
                startTime: i,
                endTime: r
            } = e, {
                position: o,
                rate: s
            } = t;
            return !(o + n * s < i || o > r)
        }
        class to {
            constructor(e, t, n, i, r, o, s) {
                var a;
                me(this, "trackerClient"), me(this, "isAnnounceMicrotaskCreated", !1), me(this, "onPeerConnected", (e => {
                    const {
                        httpLoading: t,
                        loaded: n
                    } = this.getSegmentsAnnouncement();
                    e.sendSegmentsAnnouncementCommand(n, t)
                })), me(this, "broadcastAnnouncement", (() => {
                    this.isAnnounceMicrotaskCreated || (this.isAnnounceMicrotaskCreated = !0, queueMicrotask((() => {
                        const {
                            httpLoading: e,
                            loaded: t
                        } = this.getSegmentsAnnouncement();
                        for (const n of this.trackerClient.peers()) n.sendSegmentsAnnouncementCommand(t, e);
                        this.isAnnounceMicrotaskCreated = !1
                    })))
                })), me(this, "onSegmentRequested", (async (e, t, n, i) => {
                    const r = function(e, t) {
                        for (const n of e.segments.values())
                            if (n.externalId === t) return n
                    }(this.stream, t);
                    if (!r) return;
                    const o = await this.segmentStorage.getSegmentData(r);
                    o ? await e.uploadSegmentData(r, n, void 0 !== i ? o.slice(i) : o) : e.sendSegmentAbsentCommand(t, n)
                })), this.streamManifestUrl = e, this.stream = t, this.requests = n, this.segmentStorage = i, this.config = r, this.eventTarget = o, this.onSegmentAnnouncement = s;
                const l = function(e, t) {
                    return "".concat("v2", "-").concat(e, "-").concat(Jr(t))
                }(null !== (a = this.config.swarmId) && void 0 !== a ? a : this.streamManifestUrl, this.stream);
                this.trackerClient = new Yr(l, this.stream, {
                    onPeerConnected: this.onPeerConnected,
                    onSegmentRequested: this.onSegmentRequested,
                    onSegmentsAnnouncement: this.onSegmentAnnouncement
                }, this.config, this.eventTarget), this.segmentStorage.subscribeOnUpdate(this.stream, this.broadcastAnnouncement), this.trackerClient.start()
            }
            downloadSegment(e) {
                const t = [];
                for (const o of this.trackerClient.peers()) o.downloadingSegment || "loaded" !== o.getSegmentStatus(e) || t.push(o);
                const n = (i = t)[Math.floor(Math.random() * i.length)];
                var i;
                if (!n) return;
                const r = this.requests.getOrCreateRequest(e);
                n.downloadSegment(r)
            }
            isSegmentLoadingOrLoadedBySomeone(e) {
                for (const t of this.trackerClient.peers())
                    if (t.getSegmentStatus(e)) return !0;
                return !1
            }
            isSegmentLoadedBySomeone(e) {
                for (const t of this.trackerClient.peers())
                    if ("loaded" === t.getSegmentStatus(e)) return !0;
                return !1
            }
            get connectedPeerCount() {
                let e = 0;
                for (const t of this.trackerClient.peers()) e++;
                return e
            }
            getSegmentsAnnouncement() {
                const e = this.segmentStorage.getStoredSegmentExternalIdsOfStream(this.stream),
                    t = [];
                for (const n of this.requests.httpRequests()) {
                    const e = this.stream.segments.get(n.segment.runtimeId);
                    e && t.push(e.externalId)
                }
                return {
                    loaded: e,
                    httpLoading: t
                }
            }
            destroy() {
                this.segmentStorage.unsubscribeFromUpdate(this.stream, this.broadcastAnnouncement), this.trackerClient.destroy()
            }
        }
        class no {
            constructor(e, t, n, i, r, o, s) {
                me(this, "loaders", new Map), me(this, "_currentLoaderItem"), me(this, "logger", We("p2pml-core:p2p-loaders-container")), this.streamManifestUrl = e, this.requests = n, this.segmentStorage = i, this.config = r, this.eventTarget = o, this.onSegmentAnnouncement = s, this.changeCurrentLoader(t)
            }
            createLoader(e) {
                if (this.loaders.has(e.runtimeId)) throw new Error("Loader for this stream already exists");
                const t = new to(this.streamManifestUrl, e, this.requests, this.segmentStorage, this.config, this.eventTarget, (() => {
                        this._currentLoaderItem.loader === t && this.onSegmentAnnouncement()
                    })),
                    n = ur(e);
                return this.logger("created new loader: ".concat(n)), {
                    loader: t,
                    stream: e,
                    loggerInfo: ur(e)
                }
            }
            changeCurrentLoader(e) {
                const t = this.loaders.get(e.runtimeId);
                if (this._currentLoaderItem) {
                    this.segmentStorage.getStoredSegmentExternalIdsOfStream(this._currentLoaderItem.stream).length ? this.setLoaderDestroyTimeout(this._currentLoaderItem) : this.destroyAndRemoveLoader(this._currentLoaderItem)
                }
                if (t) this._currentLoaderItem = t, clearTimeout(t.destroyTimeoutId), t.destroyTimeoutId = void 0;
                else {
                    const t = this.createLoader(e);
                    this.loaders.set(e.runtimeId, t), this._currentLoaderItem = t
                }
                this.logger("change current p2p loader: ".concat(ur(e)))
            }
            setLoaderDestroyTimeout(e) {
                e.destroyTimeoutId = window.setTimeout((() => this.destroyAndRemoveLoader(e)), this.config.p2pInactiveLoaderDestroyTimeoutMs)
            }
            destroyAndRemoveLoader(e) {
                e.loader.destroy(), this.loaders.delete(e.stream.runtimeId), this.logger("destroy p2p loader: ", e.loggerInfo)
            }
            get currentLoader() {
                return this._currentLoaderItem.loader
            }
            destroy() {
                for (const {
                        loader: e,
                        destroyTimeoutId: t
                    }
                    of this.loaders.values()) e.destroy(), clearTimeout(t);
                this.loaders.clear()
            }
        }
        let io = class {
            constructor(e, t, n, i, r, o) {
                me(this, "currentAttempt"), me(this, "_failedAttempts", new ro), me(this, "finalData"), me(this, "bytes", []), me(this, "_loadedBytes", 0), me(this, "_totalBytes"), me(this, "_status", "not-started"), me(this, "progress"), me(this, "notReceivingBytesTimeout"), me(this, "_abortRequestCallback"), me(this, "_logger"), me(this, "_isHandledByProcessQueue", !1), me(this, "onSegmentError"), me(this, "onSegmentAbort"), me(this, "onSegmentStart"), me(this, "onSegmentLoaded"), me(this, "abortOnTimeout", (() => {
                    var e;
                    if (this.throwErrorIfNotLoadingStatus(), !this.currentAttempt) return;
                    this.setStatus("failed");
                    const t = new ge("bytes-receiving-timeout");
                    null == (e = this._abortRequestCallback) || e.call(this, t), this.logger("".concat(this.downloadSource, " ").concat(this.segment.externalId, " failed ").concat(t.type)), this._failedAttempts.add({
                        ...this.currentAttempt,
                        error: t
                    }), this.onSegmentError({
                        segment: this.segment,
                        error: t,
                        downloadSource: this.currentAttempt.downloadSource,
                        peerId: "p2p" === this.currentAttempt.downloadSource ? this.currentAttempt.peerId : void 0,
                        streamType: this.segment.stream.type
                    }), this.notReceivingBytesTimeout.clear(), this.manageBandwidthCalculatorsState("stop"), this.requestProcessQueueCallback()
                })), me(this, "abortOnError", (e => {
                    this.throwErrorIfNotLoadingStatus(), this.currentAttempt && (this.setStatus("failed"), this.logger("".concat(this.downloadSource, " ").concat(this.segment.externalId, " failed ").concat(e.type)), this._failedAttempts.add({
                        ...this.currentAttempt,
                        error: e
                    }), this.onSegmentError({
                        segment: this.segment,
                        error: e,
                        downloadSource: this.currentAttempt.downloadSource,
                        peerId: "p2p" === this.currentAttempt.downloadSource ? this.currentAttempt.peerId : void 0,
                        streamType: this.segment.stream.type
                    }), this.notReceivingBytesTimeout.clear(), this.manageBandwidthCalculatorsState("stop"), this.requestProcessQueueCallback())
                })), me(this, "completeOnSuccess", (() => {
                    this.throwErrorIfNotLoadingStatus(), this.currentAttempt && (this.manageBandwidthCalculatorsState("stop"), this.notReceivingBytesTimeout.clear(), this.finalData = hr(this.bytes), this.setStatus("succeed"), this._totalBytes = this._loadedBytes, this.onSegmentLoaded({
                        segmentUrl: this.segment.url,
                        bytesLength: this.finalData.byteLength,
                        downloadSource: this.currentAttempt.downloadSource,
                        peerId: "p2p" === this.currentAttempt.downloadSource ? this.currentAttempt.peerId : void 0,
                        streamType: this.segment.stream.type
                    }), this.logger("".concat(this.currentAttempt.downloadSource, " ").concat(this.segment.externalId, " succeed")), this.requestProcessQueueCallback())
                })), me(this, "addLoadedChunk", (e => {
                    if (this.throwErrorIfNotLoadingStatus(), !this.currentAttempt || !this.progress) return;
                    this.notReceivingBytesTimeout.restart();
                    const t = e.byteLength,
                        {
                            all: n,
                            http: i
                        } = this.bandwidthCalculators;
                    n.addBytes(t), "http" === this.currentAttempt.downloadSource && i.addBytes(t), this.bytes.push(e), this.progress.lastLoadedChunkTimestamp = performance.now(), this.progress.loadedBytes += t, this._loadedBytes += t
                })), me(this, "firstBytesReceived", (() => {
                    this.throwErrorIfNotLoadingStatus(), this.notReceivingBytesTimeout.restart()
                })), this.segment = e, this.requestProcessQueueCallback = t, this.bandwidthCalculators = n, this.playback = i, this.playbackConfig = r, this.onSegmentError = o.getEventDispatcher("onSegmentError"), this.onSegmentAbort = o.getEventDispatcher("onSegmentAbort"), this.onSegmentStart = o.getEventDispatcher("onSegmentStart"), this.onSegmentLoaded = o.getEventDispatcher("onSegmentLoaded");
                const {
                    byteRange: s
                } = this.segment;
                if (s) {
                    const {
                        end: e,
                        start: t
                    } = s;
                    this._totalBytes = e - t + 1
                }
                this.notReceivingBytesTimeout = new oo(this.abortOnTimeout);
                const {
                    type: a
                } = this.segment.stream;
                this._logger = We("p2pml-core:request-".concat(a))
            }
            clearLoadedBytes() {
                this._loadedBytes = 0, this.bytes = [], this._totalBytes = void 0
            }
            get status() {
                return this._status
            }
            setStatus(e) {
                this._status = e, this._isHandledByProcessQueue = !1
            }
            get downloadSource() {
                var e;
                return null == (e = this.currentAttempt) ? void 0 : e.downloadSource
            }
            get loadedBytes() {
                return this._loadedBytes
            }
            get totalBytes() {
                return this._totalBytes
            }
            get data() {
                if ("succeed" === this.status) return this.finalData || (this.finalData = hr(this.bytes)), this.finalData
            }
            get failedAttempts() {
                return this._failedAttempts
            }
            get isHandledByProcessQueue() {
                return this._isHandledByProcessQueue
            }
            markHandledByProcessQueue() {
                this._isHandledByProcessQueue = !0
            }
            setTotalBytes(e) {
                if (void 0 !== this._totalBytes) throw new Error("Request total bytes value is already set");
                this._totalBytes = e
            }
            start(e, t) {
                if ("succeed" === this._status) throw new Error("Request ".concat(this.segment.externalId, " has been already succeed."));
                if ("loading" === this._status) throw new Error("Request ".concat(this.segment.externalId, " has been already started."));
                this.setStatus("loading"), this.currentAttempt = {
                    ...e
                }, this.progress = {
                    startFromByte: this._loadedBytes,
                    loadedBytes: 0,
                    startTimestamp: performance.now()
                }, this.manageBandwidthCalculatorsState("start");
                const {
                    notReceivingBytesTimeoutMs: n,
                    abort: i
                } = t;
                return this._abortRequestCallback = i, void 0 !== n && this.notReceivingBytesTimeout.start(n), this.logger("".concat(e.downloadSource, " ").concat(this.segment.externalId, " started")), this.onSegmentStart({
                    segment: this.segment,
                    downloadSource: e.downloadSource,
                    peerId: "p2p" === e.downloadSource ? e.peerId : void 0
                }), {
                    firstBytesReceived: this.firstBytesReceived,
                    addLoadedChunk: this.addLoadedChunk,
                    completeOnSuccess: this.completeOnSuccess,
                    abortOnError: this.abortOnError
                }
            }
            abortFromProcessQueue() {
                var e, t, n, i;
                this.throwErrorIfNotLoadingStatus(), this.setStatus("aborted"), this.logger("".concat(null == (e = this.currentAttempt) ? void 0 : e.downloadSource, " ").concat(this.segment.externalId, " aborted")), null == (t = this._abortRequestCallback) || t.call(this, new ge("abort")), this.onSegmentAbort({
                    segment: this.segment,
                    downloadSource: null == (n = this.currentAttempt) ? void 0 : n.downloadSource,
                    peerId: "p2p" === (null == (i = this.currentAttempt) ? void 0 : i.downloadSource) ? this.currentAttempt.peerId : void 0,
                    streamType: this.segment.stream.type
                }), this._abortRequestCallback = void 0, this.manageBandwidthCalculatorsState("stop"), this.notReceivingBytesTimeout.clear()
            }
            throwErrorIfNotLoadingStatus() {
                if ("loading" !== this._status) throw new Error("Request has been already ".concat(this.status, "."))
            }
            logger(e) {
                var t;
                this._logger.color = "http" === (null == (t = this.currentAttempt) ? void 0 : t.downloadSource) ? "green" : "red", this._logger(e), this._logger.color = ""
            }
            manageBandwidthCalculatorsState(e) {
                var t;
                const {
                    all: n,
                    http: i
                } = this.bandwidthCalculators, r = "start" === e ? "startLoading" : "stopLoading";
                "http" === (null == (t = this.currentAttempt) ? void 0 : t.downloadSource) && i[r](), n[r]()
            }
        };
        class ro {
            constructor() {
                me(this, "attempts", [])
            }
            add(e) {
                this.attempts.push(e)
            }
            get httpAttemptsCount() {
                return this.attempts.reduce(((e, t) => "http" === t.downloadSource ? e + 1 : e), 0)
            }
            get lastAttempt() {
                return this.attempts[this.attempts.length - 1]
            }
            clear() {
                this.attempts = []
            }
        }
        class oo {
            constructor(e) {
                me(this, "timeoutId"), me(this, "ms"), this.action = e
            }
            start(e) {
                if (this.timeoutId) throw new Error("Timeout is already started.");
                this.ms = e, this.timeoutId = window.setTimeout(this.action, this.ms)
            }
            restart(e) {
                this.timeoutId && clearTimeout(this.timeoutId), e && (this.ms = e), this.ms && (this.timeoutId = window.setTimeout(this.action, this.ms))
            }
            clear() {
                clearTimeout(this.timeoutId), this.timeoutId = void 0
            }
        }
        class so {
            constructor(e, t, n, i, r) {
                me(this, "requests", new Map), this.requestProcessQueueCallback = e, this.bandwidthCalculators = t, this.playback = n, this.config = i, this.eventTarget = r
            }
            get executingHttpCount() {
                let e = 0;
                for (const t of this.httpRequests()) "loading" === t.status && e++;
                return e
            }
            get executingP2PCount() {
                let e = 0;
                for (const t of this.p2pRequests()) "loading" === t.status && e++;
                return e
            }
            get(e) {
                return this.requests.get(e)
            }
            getOrCreateRequest(e) {
                let t = this.requests.get(e);
                return t || (t = new io(e, this.requestProcessQueueCallback, this.bandwidthCalculators, this.playback, this.config, this.eventTarget), this.requests.set(e, t)), t
            }
            remove(e) {
                this.requests.delete(e.segment)
            }
            items() {
                return this.requests.values()
            }* httpRequests() {
                for (const e of this.requests.values()) "http" === e.downloadSource && (yield e)
            }* p2pRequests() {
                for (const e of this.requests.values()) "p2p" === e.downloadSource && (yield e)
            }
            destroy() {
                for (const e of this.requests.values()) "loading" === e.status && e.abortFromProcessQueue();
                this.requests.clear()
            }
        }
        class ao {
            constructor(e, t) {
                me(this, "_status", "pending"), me(this, "_shouldBeStartedImmediately", !1), this.segment = e, this.engineCallbacks = t
            }
            get status() {
                return this._status
            }
            get shouldBeStartedImmediately() {
                return this._shouldBeStartedImmediately
            }
            resolve(e, t) {
                "pending" === this._status && (this._status = "succeed", this.engineCallbacks.onSuccess({
                    data: e,
                    bandwidth: t
                }))
            }
            reject() {
                "pending" === this._status && (this._status = "failed", this.engineCallbacks.onError(new ye("failed")))
            }
            abort() {
                "pending" === this._status && (this._status = "aborted", this.engineCallbacks.onError(new ye("aborted")))
            }
            markAsShouldBeStartedImmediately() {
                this._shouldBeStartedImmediately = !0
            }
        }

        function* lo(e, t, n, i) {
            const {
                runtimeId: r,
                stream: o
            } = e, s = o.segments.get(r);
            if (!s) return;
            const a = o.segments.values();
            let l;
            do {
                const e = a.next();
                if (e.done) return;
                l = e.value
            } while (l !== s);
            const c = Zr(l, t, n, i);
            if (co(c)) {
                const e = a.next();
                if (e.done) return;
                const r = e.value,
                    o = Zr(r, t, n, i);
                if (co(o)) return;
                c.isHighDemand = !0, yield {
                    segment: l,
                    statuses: c
                }, yield {
                    segment: r,
                    statuses: o
                }
            } else yield {
                segment: l,
                statuses: c
            };
            for (const u of a) {
                const e = Zr(u, t, n, i);
                if (co(e)) break;
                yield {
                    segment: u,
                    statuses: e
                }
            }
        }

        function co(e) {
            const {
                isHighDemand: t = !1,
                isHttpDownloadable: n = !1,
                isP2PDownloadable: i = !1
            } = e;
            return !t && !n && !i
        }
        class uo {
            constructor(e, t, n, i, r, o, s) {
                var a = this;
                me(this, "requests"), me(this, "engineRequest"), me(this, "p2pLoaders"), me(this, "playback"), me(this, "segmentAvgDuration"), me(this, "logger"), me(this, "storageCleanUpIntervalId"), me(this, "levelChangedTimestamp"), me(this, "lastQueueProcessingTimeStamp"), me(this, "randomHttpDownloadInterval"), me(this, "isProcessQueueMicrotaskCreated", !1), me(this, "requestProcessQueueMicrotask", (function() {
                    let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0];
                    const t = performance.now();
                    !e && void 0 !== a.lastQueueProcessingTimeStamp && t - a.lastQueueProcessingTimeStamp <= 1e3 || a.isProcessQueueMicrotaskCreated || (a.isProcessQueueMicrotaskCreated = !0, queueMicrotask((() => {
                        try {
                            a.processQueue(), a.lastQueueProcessingTimeStamp = t
                        } finally {
                            a.isProcessQueueMicrotaskCreated = !1
                        }
                    })))
                })), this.streamManifestUrl = e, this.lastRequestedSegment = t, this.streamDetails = n, this.config = i, this.bandwidthCalculators = r, this.segmentStorage = o, this.eventTarget = s;
                const l = this.lastRequestedSegment.stream;
                if (this.playback = {
                        position: this.lastRequestedSegment.startTime,
                        rate: 1
                    }, this.segmentAvgDuration = function(e) {
                        const {
                            segments: t
                        } = e;
                        let n = 0;
                        const i = t.size;
                        for (const r of t.values()) n += r.endTime - r.startTime;
                        return n / i
                    }(l), this.requests = new so(this.requestProcessQueueMicrotask, this.bandwidthCalculators, this.playback, this.config, this.eventTarget), !this.segmentStorage.isInitialized) throw new Error("Segment storage is not initialized.");
                this.segmentStorage.addIsSegmentLockedPredicate((e => e.stream === l && function(e, t, n) {
                    const {
                        isHighDemand: i = !1,
                        isHttpDownloadable: r = !1,
                        isP2PDownloadable: o = !1
                    } = Zr(e, t, n);
                    return i || r || o
                }(e, this.playback, this.config))), this.p2pLoaders = new no(this.streamManifestUrl, this.lastRequestedSegment.stream, this.requests, this.segmentStorage, this.config, this.eventTarget, this.requestProcessQueueMicrotask), this.logger = We("p2pml-core:hybrid-loader-".concat(l.type)), this.logger.color = "coral", this.setIntervalLoading()
            }
            setIntervalLoading() {
                const e = this.p2pLoaders.currentLoader.connectedPeerCount,
                    t = 1e3 * Math.random() * e + 1e3;
                this.randomHttpDownloadInterval = window.setTimeout((() => {
                    this.loadRandomThroughHttp(), this.setIntervalLoading()
                }), t)
            }
            async loadSegment(e, t) {
                this.logger("requests: ".concat(dr(e)));
                const {
                    stream: n
                } = e;
                n !== this.lastRequestedSegment.stream && (this.logger("stream changed to ".concat(ur(n))), this.p2pLoaders.changeCurrentLoader(n)), this.lastRequestedSegment = e;
                const i = new ao(e, t);
                if (this.segmentStorage.hasSegment(e)) {
                    const t = await this.segmentStorage.getSegmentData(e);
                    if (t) {
                        const {
                            queueDownloadRatio: e
                        } = this.generateQueue();
                        i.resolve(t, this.getBandwidth(e))
                    }
                } else this.engineRequest = i;
                this.requestProcessQueueMicrotask()
            }
            processRequests(e, t) {
                var n;
                const {
                    stream: i
                } = this.lastRequestedSegment, {
                    httpErrorRetries: r
                } = this.config, o = performance.now();
                for (const s of this.requests.items()) {
                    const {
                        downloadSource: a,
                        status: l,
                        segment: c,
                        isHandledByProcessQueue: u
                    } = s, d = (null == (n = this.engineRequest) ? void 0 : n.segment) === c ? this.engineRequest : void 0;
                    switch (l) {
                        case "loading":
                            e.has(c.runtimeId) || d || (s.abortFromProcessQueue(), this.requests.remove(s));
                            break;
                        case "succeed":
                            if (!s.data || !a) break;
                            "http" === a && this.p2pLoaders.currentLoader.broadcastAnnouncement(), d && (d.resolve(s.data, this.getBandwidth(t)), this.engineRequest = void 0), this.requests.remove(s), this.segmentStorage.storeSegment(s.segment, s.data, this.streamDetails.isLive);
                            break;
                        case "failed":
                            "http" !== a || u || this.p2pLoaders.currentLoader.broadcastAnnouncement(), d || i.segments.has(s.segment.runtimeId) || this.requests.remove(s), s.failedAttempts.httpAttemptsCount >= r && d && (this.engineRequest = void 0, d.reject());
                            break;
                        case "not-started":
                        case "aborted":
                            this.requests.remove(s)
                    }
                    s.markHandledByProcessQueue();
                    const {
                        lastAttempt: h
                    } = s.failedAttempts;
                    h && o - h.error.timestamp > 6e4 && s.failedAttempts.clear()
                }
            }
            processQueue() {
                var e;
                const {
                    queue: t,
                    queueSegmentIds: n,
                    queueDownloadRatio: i
                } = this.generateQueue();
                this.processRequests(n, i);
                const {
                    simultaneousHttpDownloads: r,
                    simultaneousP2PDownloads: o,
                    httpErrorRetries: s
                } = this.config;
                if ((null == (e = this.engineRequest) ? void 0 : e.shouldBeStartedImmediately) && "pending" === this.engineRequest.status && this.requests.executingHttpCount < r) {
                    const {
                        segment: e
                    } = this.engineRequest, t = this.requests.get(e);
                    (!t || "not-started" === t.status || "failed" === t.status && t.failedAttempts.httpAttemptsCount < this.config.httpErrorRetries) && this.loadThroughHttp(e)
                }
                for (const a of t) {
                    const {
                        statuses: e,
                        segment: n
                    } = a, i = this.requests.get(n);
                    if (e.isHighDemand) {
                        if ("http" === (null == i ? void 0 : i.downloadSource) && "loading" === i.status) continue;
                        if ("http" === (null == i ? void 0 : i.downloadSource) && "failed" === i.status && i.failedAttempts.httpAttemptsCount >= s) continue;
                        const e = "loading" === (null == i ? void 0 : i.status) && "p2p" === i.downloadSource;
                        if (this.requests.executingHttpCount < r) {
                            e && i.abortFromProcessQueue(), this.loadThroughHttp(n);
                            continue
                        }
                        if (this.abortLastHttpLoadingInQueueAfterItem(t, n) && this.requests.executingHttpCount < r) {
                            e && i.abortFromProcessQueue(), this.loadThroughHttp(n);
                            continue
                        }
                        if (e) continue;
                        if (this.requests.executingP2PCount < o) {
                            this.loadThroughP2P(n);
                            continue
                        }
                        if (this.abortLastP2PLoadingInQueueAfterItem(t, n) && this.requests.executingP2PCount < o) {
                            this.loadThroughP2P(n);
                            continue
                        }
                    } else if (e.isP2PDownloadable) {
                        if ("loading" === (null == i ? void 0 : i.status)) continue;
                        (this.requests.executingP2PCount < o || this.p2pLoaders.currentLoader.isSegmentLoadedBySomeone(n) && this.abortLastP2PLoadingInQueueAfterItem(t, n) && this.requests.executingP2PCount < o) && this.loadThroughP2P(n)
                    }
                }
            }
            abortSegmentRequest(e) {
                var t;
                (null == (t = this.engineRequest) ? void 0 : t.segment.runtimeId) === e && (this.engineRequest.abort(), this.logger("abort: ", dr(this.engineRequest.segment)), this.engineRequest = void 0, this.requestProcessQueueMicrotask())
            }
            loadThroughHttp(e) {
                const t = this.requests.getOrCreateRequest(e);
                new ve(t, this.config, this.eventTarget), this.p2pLoaders.currentLoader.broadcastAnnouncement()
            }
            loadThroughP2P(e) {
                this.p2pLoaders.currentLoader.downloadSegment(e)
            }
            loadRandomThroughHttp() {
                const {
                    simultaneousHttpDownloads: e,
                    httpErrorRetries: t
                } = this.config, n = this.p2pLoaders.currentLoader;
                if (this.requests.executingHttpCount >= e || !n.connectedPeerCount) return;
                const i = [];
                for (const {
                        segment: c,
                        statuses: u
                    }
                    of lo(this.lastRequestedSegment, this.playback, this.config, this.p2pLoaders.currentLoader)) {
                    var r;
                    if (!u.isHttpDownloadable || u.isP2PDownloadable || this.segmentStorage.hasSegment(c)) continue;
                    const e = this.requests.get(c);
                    e && ("loading" === e.status || "succeed" === e.status || (null !== (r = e.failedAttempts.httpAttemptsCount) && void 0 !== r ? r : 0) >= t) || i.push(c)
                }
                if (!i.length) return;
                if (0 === e - this.requests.executingHttpCount) return;
                const o = n.connectedPeerCount + 1,
                    s = Math.min(i.length, e * o),
                    a = function(e) {
                        for (let t = e.length - 1; t > 0; t--) {
                            const n = Math.floor(Math.random() * (t + 1));
                            [e[t], e[n]] = [e[n], e[t]]
                        }
                        return e
                    }(Array.from({
                        length: s
                    }, ((e, t) => t)));
                let l = s / o;
                for (const c of a) {
                    if (this.requests.executingHttpCount >= e) break;
                    if (l >= 1 || Math.random() <= l) {
                        const e = i[c];
                        this.loadThroughHttp(e)
                    }
                    if (l--, l <= 0) break
                }
            }
            abortLastHttpLoadingInQueueAfterItem(e, t) {
                for (const {
                        segment: n
                    }
                    of fr(e)) {
                    if (n === t) break;
                    const e = this.requests.get(n);
                    if ("http" === (null == e ? void 0 : e.downloadSource) && "loading" === e.status) return e.abortFromProcessQueue(), !0
                }
                return !1
            }
            abortLastP2PLoadingInQueueAfterItem(e, t) {
                for (const {
                        segment: n
                    }
                    of fr(e)) {
                    if (n === t) break;
                    const e = this.requests.get(n);
                    if ("p2p" === (null == e ? void 0 : e.downloadSource) && "loading" === e.status) return e.abortFromProcessQueue(), !0
                }
                return !1
            }
            generateQueue() {
                var e;
                const t = [],
                    n = new Set;
                let i = 0,
                    r = 0;
                for (const o of lo(this.lastRequestedSegment, this.playback, this.config, this.p2pLoaders.currentLoader)) {
                    i++;
                    const {
                        segment: s
                    } = o;
                    this.segmentStorage.hasSegment(s) || "succeed" === (null == (e = this.requests.get(s)) ? void 0 : e.status) ? r++ : (t.push(o), n.add(s.runtimeId))
                }
                return {
                    queue: t,
                    queueSegmentIds: n,
                    maxPossibleLength: i,
                    alreadyLoadedCount: r,
                    queueDownloadRatio: 0 !== i ? r / i : 0
                }
            }
            getBandwidth(e) {
                const {
                    http: t,
                    all: n
                } = this.bandwidthCalculators, {
                    activeLevelBitrate: i
                } = this.streamDetails;
                if (0 === this.streamDetails.activeLevelBitrate) return n.getBandwidthLoadingOnly(3);
                const r = Math.max(n.getBandwidth(30, this.levelChangedTimestamp), n.getBandwidth(60, this.levelChangedTimestamp), n.getBandwidth(90, this.levelChangedTimestamp));
                if (e >= .8 || r >= .9 * i) return Math.max(n.getBandwidthLoadingOnly(1), n.getBandwidthLoadingOnly(3), n.getBandwidthLoadingOnly(5));
                const o = Math.max(t.getBandwidthLoadingOnly(1), t.getBandwidthLoadingOnly(3), t.getBandwidthLoadingOnly(5));
                return Math.max(r, o)
            }
            notifyLevelChanged() {
                this.levelChangedTimestamp = performance.now()
            }
            updatePlayback(e, t) {
                var n;
                const i = this.playback.rate !== t,
                    r = this.playback.position !== e;
                if (!i && !r) return;
                const o = Math.abs(e - this.playback.position) / this.segmentAvgDuration > .5;
                r && (this.playback.position = e), i && 0 !== t && (this.playback.rate = t), o && (this.logger("position significantly changed"), null == (n = this.engineRequest) || n.markAsShouldBeStartedImmediately()), this.requestProcessQueueMicrotask(o)
            }
            updateStream(e) {
                e === this.lastRequestedSegment.stream && (this.logger("update stream: ".concat(ur(e))), this.requestProcessQueueMicrotask())
            }
            destroy() {
                var e;
                clearInterval(this.storageCleanUpIntervalId), clearInterval(this.randomHttpDownloadInterval), this.storageCleanUpIntervalId = void 0, null == (e = this.engineRequest) || e.abort(), this.requests.destroy(), this.p2pLoaders.destroy()
            }
        }
        class ho {
            constructor() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 2e4;
                me(this, "loadingsCount", 0), me(this, "bytes", []), me(this, "loadingOnlyTimestamps", []), me(this, "timestamps", []), me(this, "noLoadingsTime", 0), me(this, "loadingsStoppedAt", 0), this.clearThresholdMs = e
            }
            addBytes(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : performance.now();
                this.bytes.push(e), this.loadingOnlyTimestamps.push(t - this.noLoadingsTime), this.timestamps.push(t)
            }
            startLoading() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
                this.clearStale(), 0 === this.loadingsCount && 0 !== this.loadingsStoppedAt && (this.noLoadingsTime += e - this.loadingsStoppedAt), this.loadingsCount++
            }
            stopLoading() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : performance.now();
                this.loadingsCount > 0 && (this.loadingsCount--, 0 === this.loadingsCount && (this.loadingsStoppedAt = e))
            }
            getBandwidthLoadingOnly(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.NEGATIVE_INFINITY;
                if (!this.loadingOnlyTimestamps.length) return 0;
                const n = 1e3 * e,
                    i = this.loadingOnlyTimestamps[this.loadingOnlyTimestamps.length - 1];
                let r = i;
                const o = i - n;
                let s = 0;
                for (let a = this.bytes.length - 1; a >= 0; a--) {
                    const e = this.loadingOnlyTimestamps[a];
                    if (e < o || this.timestamps[a] < t) break;
                    r = e, s += this.bytes[a]
                }
                return 8e3 * s / (i - r)
            }
            getBandwidth(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : Number.NEGATIVE_INFINITY,
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : performance.now();
                if (!this.timestamps.length) return 0;
                const i = n - 1e3 * e;
                let r = n,
                    o = 0;
                for (let s = this.bytes.length - 1; s >= 0; s--) {
                    const e = this.timestamps[s];
                    if (e < i || e < t) break;
                    r = e, o += this.bytes[s]
                }
                return 8e3 * o / (n - r)
            }
            clearStale() {
                if (!this.loadingOnlyTimestamps.length) return;
                const e = this.loadingOnlyTimestamps[this.loadingOnlyTimestamps.length - 1] - this.clearThresholdMs;
                let t = 0;
                for (const n of this.loadingOnlyTimestamps) {
                    if (n > e) break;
                    t++
                }
                this.bytes.splice(0, t), this.loadingOnlyTimestamps.splice(0, t), this.timestamps.splice(0, t)
            }
        }
        class po {
            constructor() {
                me(this, "events", new Map)
            }
            dispatchEvent(e) {
                const t = this.events.get(e);
                if (t) {
                    for (var n = arguments.length, i = new Array(n > 1 ? n - 1 : 0), r = 1; r < n; r++) i[r - 1] = arguments[r];
                    for (const e of t) e(...i)
                }
            }
            getEventDispatcher(e) {
                let t = this.events.get(e);
                t || (t = [], this.events.set(e, t));
                const n = t;
                return function() {
                    for (const e of n) e(...arguments)
                }
            }
            addEventListener(e, t) {
                const n = this.events.get(e);
                n ? n.push(t) : this.events.set(e, [t])
            }
            removeEventListener(e, t) {
                const n = this.events.get(e);
                if (n) {
                    const e = n.indexOf(t); - 1 !== e && n.splice(e, 1)
                }
            }
        }

        function fo(e) {
            const t = Jr(e.stream);
            return "".concat(t, "|").concat(e.externalId)
        }
        class mo {
            constructor(e) {
                me(this, "cache", new Map), me(this, "_isInitialized", !1), me(this, "isSegmentLockedPredicates", []), me(this, "logger"), me(this, "eventTarget", new po), this.storageConfig = e, this.logger = We("p2pml-core:segment-memory-storage"), this.logger.color = "RebeccaPurple"
            }
            async initialize() {
                this._isInitialized = !0, this.logger("initialized")
            }
            get isInitialized() {
                return this._isInitialized
            }
            addIsSegmentLockedPredicate(e) {
                this.isSegmentLockedPredicates.push(e)
            }
            isSegmentLocked(e) {
                return this.isSegmentLockedPredicates.some((t => t(e)))
            }
            async storeSegment(e, t, n) {
                const i = fo(e);
                this.cache.set(i, {
                    segment: e,
                    data: t,
                    lastAccessed: performance.now()
                }), this.logger("add segment: ".concat(i)), this.dispatchStorageUpdatedEvent(e.stream), this.clear(n)
            }
            async getSegmentData(e) {
                const t = fo(e),
                    n = this.cache.get(t);
                if (void 0 !== n) return n.lastAccessed = performance.now(), n.data
            }
            hasSegment(e) {
                const t = fo(e);
                return this.cache.has(t)
            }
            getStoredSegmentExternalIdsOfStream(e) {
                const t = Jr(e),
                    n = [];
                for (const {
                        segment: i
                    }
                    of this.cache.values()) {
                    Jr(i.stream) === t && n.push(i.externalId)
                }
                return n
            }
            async clear(e) {
                var t;
                const n = 1e3 * (null !== (t = this.storageConfig.cachedSegmentExpiration) && void 0 !== t ? t : e ? 1200 : 0);
                if (0 === n) return !1;
                const i = [],
                    r = [],
                    o = new Set,
                    s = performance.now();
                for (const a of this.cache.entries()) {
                    const [e, t] = a, {
                        lastAccessed: l,
                        segment: c
                    } = t;
                    s - l > n ? this.isSegmentLocked(c) || (i.push(e), o.add(c.stream)) : r.push(a)
                }
                if (this.storageConfig.cachedSegmentsCount > 0) {
                    let e = r.length - this.storageConfig.cachedSegmentsCount;
                    if (e > 0) {
                        r.sort(((e, t) => {
                            let [, n] = e, [, i] = t;
                            return n.lastAccessed - i.lastAccessed
                        }));
                        for (const [t, {
                                segment: n
                            }] of r)
                            if (!this.isSegmentLocked(n) && (i.push(t), o.add(n.stream), e--, 0 === e)) break
                    }
                }
                if (i.length) {
                    this.logger("cleared ".concat(i.length, " segments")), i.forEach((e => this.cache.delete(e)));
                    for (const e of o) this.dispatchStorageUpdatedEvent(e)
                }
                return i.length > 0
            }
            subscribeOnUpdate(e, t) {
                const n = Jr(e);
                this.eventTarget.addEventListener("onStorageUpdated-".concat(n), t)
            }
            unsubscribeFromUpdate(e, t) {
                const n = Jr(e);
                this.eventTarget.removeEventListener("onStorageUpdated-".concat(n), t)
            }
            dispatchStorageUpdatedEvent(e) {
                this.eventTarget.dispatchEvent("onStorageUpdated-".concat(Jr(e)), e)
            }
            async destroy() {
                this.cache.clear(), this._isInitialized = !1
            }
        }
        const go = class e {
            constructor(t) {
                me(this, "eventTarget", new po), me(this, "manifestResponseUrl"), me(this, "streams", new Map), me(this, "mainStreamConfig"), me(this, "secondaryStreamConfig"), me(this, "commonCoreConfig"), me(this, "bandwidthCalculators", {
                    all: new ho,
                    http: new ho
                }), me(this, "segmentStorage"), me(this, "mainStreamLoader"), me(this, "secondaryStreamLoader"), me(this, "streamDetails", {
                    isLive: !1,
                    activeLevelBitrate: 0
                });
                const n = function e(t) {
                    if (mr(t)) {
                        const n = {};
                        return Object.keys(t).forEach((i => {
                            if (void 0 !== t[i]) {
                                const r = e(t[i]);
                                void 0 !== r && (n[i] = r)
                            }
                        })), n
                    }
                    return t
                }(null !== t && void 0 !== t ? t : {});
                this.commonCoreConfig = vr({
                    defaultConfig: e.DEFAULT_COMMON_CORE_CONFIG,
                    baseConfig: n
                }), this.mainStreamConfig = vr({
                    defaultConfig: e.DEFAULT_STREAM_CONFIG,
                    baseConfig: n,
                    specificStreamConfig: null == n ? void 0 : n.mainStream
                }), this.secondaryStreamConfig = vr({
                    defaultConfig: e.DEFAULT_STREAM_CONFIG,
                    baseConfig: n,
                    specificStreamConfig: null == n ? void 0 : n.secondaryStream
                })
            }
            getConfig() {
                return {
                    ...gr(this.commonCoreConfig),
                    mainStream: gr(this.mainStreamConfig),
                    secondaryStream: gr(this.secondaryStreamConfig)
                }
            }
            applyDynamicConfig(e) {
                const {
                    mainStream: t,
                    secondaryStream: n
                } = e;
                this.overrideAllConfigs(e, t, n), this.mainStreamConfig.isP2PDisabled && this.destroyStreamLoader("main"), this.secondaryStreamConfig.isP2PDisabled && this.destroyStreamLoader("secondary")
            }
            addEventListener(e, t) {
                this.eventTarget.addEventListener(e, t)
            }
            removeEventListener(e, t) {
                this.eventTarget.removeEventListener(e, t)
            }
            setManifestResponseUrl(e) {
                this.manifestResponseUrl = e.split("?")[0]
            }
            hasSegment(e) {
                return !!Gr(this.streams, e)
            }
            getStream(e) {
                return this.streams.get(e)
            }
            addStreamIfNoneExists(e) {
                this.streams.has(e.runtimeId) || this.streams.set(e.runtimeId, {
                    ...e,
                    segments: new Map
                })
            }
            updateStream(e, t, n) {
                var i, r;
                const o = this.streams.get(e);
                if (o) {
                    if (t)
                        for (const e of t) o.segments.has(e.runtimeId) || o.segments.set(e.runtimeId, {
                            ...e,
                            stream: o
                        });
                    if (n)
                        for (const e of n) o.segments.delete(e);
                    null == (i = this.mainStreamLoader) || i.updateStream(o), null == (r = this.secondaryStreamLoader) || r.updateStream(o)
                }
            }
            async loadSegment(e, t) {
                if (!this.manifestResponseUrl) throw new Error("Manifest response url is not defined");
                this.segmentStorage || (this.segmentStorage = new mo(this.commonCoreConfig), await this.segmentStorage.initialize());
                const n = this.identifySegment(e);
                this.getStreamHybridLoader(n).loadSegment(n, t)
            }
            abortSegmentLoading(e) {
                var t, n;
                null == (t = this.mainStreamLoader) || t.abortSegmentRequest(e), null == (n = this.secondaryStreamLoader) || n.abortSegmentRequest(e)
            }
            updatePlayback(e, t) {
                var n, i;
                null == (n = this.mainStreamLoader) || n.updatePlayback(e, t), null == (i = this.secondaryStreamLoader) || i.updatePlayback(e, t)
            }
            setActiveLevelBitrate(e) {
                var t, n;
                e !== this.streamDetails.activeLevelBitrate && (this.streamDetails.activeLevelBitrate = e, null == (t = this.mainStreamLoader) || t.notifyLevelChanged(), null == (n = this.secondaryStreamLoader) || n.notifyLevelChanged())
            }
            setIsLive(e) {
                this.streamDetails.isLive = e
            }
            isSegmentLoadable(e) {
                try {
                    const t = this.identifySegment(e);
                    return ("main" !== t.stream.type || !this.mainStreamConfig.isP2PDisabled) && ("secondary" !== t.stream.type || !this.secondaryStreamConfig.isP2PDisabled)
                } catch {
                    return !1
                }
            }
            destroy() {
                var e, t, n;
                this.streams.clear(), null == (e = this.mainStreamLoader) || e.destroy(), null == (t = this.secondaryStreamLoader) || t.destroy(), null == (n = this.segmentStorage) || n.destroy(), this.mainStreamLoader = void 0, this.secondaryStreamLoader = void 0, this.segmentStorage = void 0, this.manifestResponseUrl = void 0, this.streamDetails = {
                    isLive: !1,
                    activeLevelBitrate: 0
                }
            }
            identifySegment(e) {
                if (!this.manifestResponseUrl) throw new Error("Manifest response url is undefined");
                const t = Gr(this.streams, e);
                if (!t) throw new Error("Not found segment with id: ".concat(e));
                return t
            }
            overrideAllConfigs(e, t, n) {
                yr(this.commonCoreConfig, e), yr(this.mainStreamConfig, e), yr(this.secondaryStreamConfig, e), t && yr(this.mainStreamConfig, t), n && yr(this.secondaryStreamConfig, n)
            }
            destroyStreamLoader(e) {
                var t, n;
                "main" === e ? (null == (t = this.mainStreamLoader) || t.destroy(), this.mainStreamLoader = void 0) : (null == (n = this.secondaryStreamLoader) || n.destroy(), this.secondaryStreamLoader = void 0)
            }
            getStreamHybridLoader(e) {
                var t, n;
                return "main" === e.stream.type ? (null !== (t = this.mainStreamLoader) && void 0 !== t || (this.mainStreamLoader = this.createNewHybridLoader(e)), this.mainStreamLoader) : (null !== (n = this.secondaryStreamLoader) && void 0 !== n || (this.secondaryStreamLoader = this.createNewHybridLoader(e)), this.secondaryStreamLoader)
            }
            createNewHybridLoader(e) {
                var t;
                if (!this.manifestResponseUrl) throw new Error("Manifest response url is not defined");
                if (!(null == (t = this.segmentStorage) ? void 0 : t.isInitialized)) throw new Error("Segment storage is not initialized");
                const n = "main" === e.stream.type ? this.mainStreamConfig : this.secondaryStreamConfig;
                return new uo(this.manifestResponseUrl, e, this.streamDetails, n, this.bandwidthCalculators, this.segmentStorage, this.eventTarget)
            }
        };
        me(go, "DEFAULT_COMMON_CORE_CONFIG", {
            cachedSegmentExpiration: void 0,
            cachedSegmentsCount: 0
        }), me(go, "DEFAULT_STREAM_CONFIG", {
            isP2PDisabled: !1,
            simultaneousHttpDownloads: 2,
            simultaneousP2PDownloads: 3,
            highDemandTimeWindow: 15,
            httpDownloadTimeWindow: 3e3,
            p2pDownloadTimeWindow: 6e3,
            webRtcMaxMessageSize: 65535,
            p2pNotReceivingBytesTimeoutMs: 2e3,
            p2pInactiveLoaderDestroyTimeoutMs: 3e4,
            httpNotReceivingBytesTimeoutMs: 3e3,
            httpErrorRetries: 3,
            p2pErrorRetries: 3,
            trackerClientVersionPrefix: lr,
            announceTrackers: ["wss://tracker.novage.com.ua", "wss://tracker.webtorrent.dev", "wss://tracker.openwebtorrent.com"],
            rtcConfig: {
                iceServers: [{
                    urls: "stun:stun.l.google.com:19302"
                }, {
                    urls: "stun:global.stun.twilio.com:3478"
                }]
            },
            validateP2PSegment: void 0,
            httpRequestSetup: void 0,
            swarmId: void 0
        });
        let yo = go;
        const vo = He.debug;
        var bo, wo, _o, So, Co, ko, Eo, xo, To, Lo, Po = Object.defineProperty,
            Ao = e => {
                throw TypeError(e)
            },
            Io = (e, t, n) => ((e, t, n) => t in e ? Po(e, t, {
                enumerable: !0,
                configurable: !0,
                writable: !0,
                value: n
            }) : e[t] = n)(e, "symbol" !== typeof t ? t + "" : t, n),
            Ro = (e, t, n) => t.has(e) || Ao("Cannot " + n),
            No = (e, t, n) => (Ro(e, t, "read from private field"), n ? n.call(e) : t.get(e)),
            Mo = (e, t, n) => t.has(e) ? Ao("Cannot add the same private member more than once") : t instanceof WeakSet ? t.add(e) : t.set(e, n),
            Oo = (e, t, n, i) => (Ro(e, t, "write to private field"), i ? i.call(e, n) : t.set(e, n), n),
            Do = (e, t, n) => (Ro(e, t, "access private method"), n);

        function Bo(e, t) {
            return t ? "".concat(e, "|").concat(t.start, "-").concat(t.end) : e
        }

        function qo(e, t) {
            if (void 0 !== e && void 0 !== t && e <= t) return {
                start: e,
                end: t
            }
        }
        class Uo {
            constructor(e, t) {
                Mo(this, Eo), Io(this, "context"), Io(this, "config"), Io(this, "stats"), Mo(this, bo), Mo(this, wo), Mo(this, _o), Mo(this, So), Mo(this, Co), Mo(this, ko), Oo(this, So, t), Oo(this, wo, (() => new e.loader(e))), this.stats = {
                    aborted: !1,
                    chunkCount: 0,
                    loading: {
                        start: 0,
                        first: 0,
                        end: 0
                    },
                    buffering: {
                        start: 0,
                        first: 0,
                        end: 0
                    },
                    parsing: {
                        start: 0,
                        end: 0
                    },
                    total: 1,
                    loaded: 1,
                    bwEstimate: 0,
                    retry: 0
                }
            }
            load(e, t, n) {
                var i;
                this.context = e, this.config = t, Oo(this, bo, n);
                const r = this.stats,
                    {
                        rangeStart: o,
                        rangeEnd: s
                    } = e,
                    a = qo(o, void 0 !== s ? s - 1 : void 0);
                Oo(this, ko, Bo(e.url, a));
                const l = No(this, So).isSegmentLoadable(No(this, ko));
                if (!No(this, So).hasSegment(No(this, ko)) || !1 === l) return Oo(this, _o, No(this, wo).call(this)), No(this, _o).stats = this.stats, void(null == (i = No(this, _o)) || i.load(e, t, n));
                No(this, So).loadSegment(No(this, ko), {
                    onSuccess: t => {
                        Oo(this, Co, t);
                        const i = No(this, Co).data.byteLength;
                        r.loading = function(e, t, n) {
                            const i = 8e3 * t / e,
                                r = n - i,
                                o = r - 10;
                            return {
                                start: o,
                                first: r,
                                end: n
                            }
                        }(No(this, Co).bandwidth, i, performance.now()), r.total = r.loaded = i, n.onProgress && n.onProgress(this.stats, e, No(this, Co).data, void 0), n.onSuccess({
                            data: No(this, Co).data,
                            url: e.url
                        }, this.stats, e, void 0)
                    },
                    onError: e => {
                        e instanceof ye && "aborted" === e.type && this.stats.aborted || Do(this, Eo, xo).call(this, e)
                    }
                })
            }
            abort() {
                var e, t;
                No(this, _o) ? No(this, _o).abort() : (Do(this, Eo, To).call(this), null == (t = null == (e = No(this, bo)) ? void 0 : e.onAbort) || t.call(e, this.stats, this.context, {}))
            }
            destroy() {
                No(this, _o) ? No(this, _o).destroy() : (this.stats.aborted || Do(this, Eo, To).call(this), Oo(this, bo, null), this.config = null)
            }
        }
        bo = new WeakMap, wo = new WeakMap, _o = new WeakMap, So = new WeakMap, Co = new WeakMap, ko = new WeakMap, Eo = new WeakSet, xo = function(e) {
            var t;
            const n = {
                code: 0,
                text: ""
            };
            (e instanceof ye && "failed" === e.type || e instanceof Error) && (n.text = e.message), null == (t = No(this, bo)) || t.onError(n, this.context, null, this.stats)
        }, To = function() {
            !No(this, Co) && No(this, ko) && (this.stats.aborted = !0, No(this, So).abortSegmentLoading(No(this, ko)))
        };
        class zo {
            constructor(e) {
                Mo(this, Lo), Io(this, "context"), Io(this, "stats"), Oo(this, Lo, new e.loader(e)), this.stats = No(this, Lo).stats, this.context = No(this, Lo).context
            }
            load(e, t, n) {
                No(this, Lo).load(e, t, n)
            }
            abort() {
                No(this, Lo).abort()
            }
            destroy() {
                No(this, Lo).destroy()
            }
        }
        Lo = new WeakMap;
        class Fo {
            constructor(e) {
                Io(this, "core"), this.core = e
            }
            processMainManifest(e) {
                const {
                    levels: t,
                    audioTracks: n
                } = e;
                for (const [i, r] of t.entries()) {
                    const {
                        url: e
                    } = r;
                    this.core.addStreamIfNoneExists({
                        runtimeId: Array.isArray(e) ? e[0] : e,
                        type: "main",
                        index: i
                    })
                }
                for (const [i, r] of n.entries()) {
                    const {
                        url: e
                    } = r;
                    this.core.addStreamIfNoneExists({
                        runtimeId: Array.isArray(e) ? e[0] : e,
                        type: "secondary",
                        index: i
                    })
                }
            }
            updatePlaylist(e) {
                if (!e.details) return;
                const {
                    details: {
                        url: t,
                        fragments: n,
                        live: i
                    }
                } = e, r = this.core.getStream(t);
                if (!r) return;
                const o = new Set(r.segments.keys()),
                    s = [];
                n.forEach(((e, t) => {
                    const {
                        url: n,
                        byteRange: a,
                        sn: l,
                        start: c,
                        end: u
                    } = e;
                    if ("initSegment" === l) return;
                    const [d, h] = a, p = qo(d, void 0 !== h ? h - 1 : void 0), f = Bo(n, p);
                    o.delete(f), r.segments.has(f) || s.push({
                        runtimeId: f,
                        url: n,
                        externalId: i ? l : t,
                        byteRange: p,
                        startTime: c,
                        endTime: u
                    })
                })), (s.length || o.size) && this.core.updateStream(t, s, o.values())
            }
        }
        class jo {
            constructor(e) {
                Io(this, "core"), Io(this, "segmentManager"), Io(this, "hlsInstanceGetter"), Io(this, "currentHlsInstance"), Io(this, "debug", vo("p2pml-hlsjs:engine")), Io(this, "updateMediaElementEventHandlers", (e => {
                    var t;
                    const n = null == (t = this.currentHlsInstance) ? void 0 : t.media;
                    if (!n) return;
                    const i = "register" === e ? "addEventListener" : "removeEventListener";
                    n[i]("timeupdate", this.handlePlaybackUpdate), n[i]("seeking", this.handlePlaybackUpdate), n[i]("ratechange", this.handlePlaybackUpdate)
                })), Io(this, "handleManifestLoaded", ((e, t) => {
                    const n = t.networkDetails;
                    n instanceof XMLHttpRequest ? this.core.setManifestResponseUrl(n.responseURL) : n instanceof Response && this.core.setManifestResponseUrl(n.url), this.segmentManager.processMainManifest(t)
                })), Io(this, "handleLevelSwitching", ((e, t) => {
                    t.bitrate && this.core.setActiveLevelBitrate(t.bitrate)
                })), Io(this, "handleLevelUpdated", ((e, t) => {
                    this.currentHlsInstance && this.currentHlsInstance.config.liveSyncDurationCount !== t.details.fragments.length - 1 && t.details.live && "main" === t.details.fragments[0].type && !this.currentHlsInstance.userConfig.liveSyncDuration && !this.currentHlsInstance.userConfig.liveSyncDurationCount && t.details.fragments.length > 4 && (this.debug("set liveSyncDurationCount ".concat(t.details.fragments.length - 1)), this.currentHlsInstance.config.liveSyncDurationCount = t.details.fragments.length - 1), this.core.setIsLive(t.details.live), this.segmentManager.updatePlaylist(t)
                })), Io(this, "handleMediaAttached", (() => {
                    this.updateMediaElementEventHandlers("register")
                })), Io(this, "handleMediaDetached", (() => {
                    this.updateMediaElementEventHandlers("unregister")
                })), Io(this, "handlePlaybackUpdate", (e => {
                    const t = e.target;
                    this.core.updatePlayback(t.currentTime, t.playbackRate)
                })), Io(this, "destroyCore", (() => this.core.destroy())), Io(this, "destroy", (() => {
                    this.destroyCore(), this.updateHlsEventsHandlers("unregister"), this.updateMediaElementEventHandlers("unregister"), this.currentHlsInstance = void 0
                })), this.core = new yo(null == e ? void 0 : e.core), this.segmentManager = new Fo(this.core)
            }
            static injectMixin(e) {
                return function(e) {
                    var t, n;
                    return n = class extends e {
                        constructor() {
                            var e;
                            const n = arguments.length <= 0 ? void 0 : arguments[0],
                                {
                                    p2p: i,
                                    ...r
                                } = null !== n && void 0 !== n ? n : {},
                                o = new jo(i);
                            super({
                                ...r,
                                ...o.getConfigForHlsJs()
                            }), Mo(this, t), o.bindHls(this), Oo(this, t, o), null == (e = null == i ? void 0 : i.onHlsJsCreated) || e.call(i, this)
                        }
                        get p2pEngine() {
                            return No(this, t)
                        }
                    }, t = new WeakMap, n
                }(e)
            }
            addEventListener(e, t) {
                this.core.addEventListener(e, t)
            }
            removeEventListener(e, t) {
                this.core.removeEventListener(e, t)
            }
            getConfigForHlsJs() {
                return {
                    fLoader: this.createFragmentLoaderClass(),
                    pLoader: this.createPlaylistLoaderClass()
                }
            }
            getConfig() {
                return {
                    core: this.core.getConfig()
                }
            }
            applyDynamicConfig(e) {
                e.core && this.core.applyDynamicConfig(e.core)
            }
            bindHls(e) {
                this.hlsInstanceGetter = "function" === typeof e ? e : () => e
            }
            initHlsEvents() {
                var e;
                const t = null == (e = this.hlsInstanceGetter) ? void 0 : e.call(this);
                this.currentHlsInstance !== t && (this.currentHlsInstance && this.destroy(), this.currentHlsInstance = t, this.updateHlsEventsHandlers("register"), this.updateMediaElementEventHandlers("register"))
            }
            updateHlsEventsHandlers(e) {
                const t = this.currentHlsInstance;
                if (!t) return;
                const n = "register" === e ? "on" : "off";
                t[n]("hlsManifestLoaded", this.handleManifestLoaded), t[n]("hlsLevelSwitching", this.handleLevelSwitching), t[n]("hlsLevelUpdated", this.handleLevelUpdated), t[n]("hlsAudioTrackLoaded", this.handleLevelUpdated), t[n]("hlsDestroying", this.destroy), t[n]("hlsMediaAttaching", this.destroyCore), t[n]("hlsManifestLoading", this.destroyCore), t[n]("hlsMediaDetached", this.handleMediaDetached), t[n]("hlsMediaAttached", this.handleMediaAttached)
            }
            createFragmentLoaderClass() {
                const e = this.core,
                    t = this;
                return class extends Uo {
                    constructor(t) {
                        super(t, e)
                    }
                    static getEngine() {
                        return t
                    }
                }
            }
            createPlaylistLoaderClass() {
                const e = this;
                return class extends zo {
                    constructor(t) {
                        super(t), e.initHlsEvents()
                    }
                }
            }
        }

        function Ho() {
            const e = localStorage.getItem("rc");
            if (e) {
                return JSON.parse(e)
            }
            return e
        }
        let Wo = !1,
            Vo = !1,
            Qo = !1,
            $o = -1,
            Ko = -1,
            Xo = -1,
            Yo = -1,
            Go = 0,
            Jo = !1;
        class Zo extends e.Component {
            constructor(e) {
                super(e), this.errAlert = () => {
                    if (-1 !== Ko) return;
                    if (this.ClearReloadVideo(), Yo = 1, this.props.title) return void window.location.reload();
                    let e = "\u64ad\u653e\u9519\u8bef, \u89e3\u51b3\u529e\u6cd5: \n 1.\u5c1d\u8bd5\u5237\u65b0\u9875\u9762 \n 2.\u5c1d\u8bd5\u4f7f\u7528\u624b\u673a\u64ad\u653e \n 3.\u6216\u8005\u60a8\u5148\u89c2\u770b\u5176\u5b83\u5f71\u7247... \n\n\u70b9\u51fb\u786e\u5b9a\u540e\u4f1a\u81ea\u52a8\u4e3a\u60a8\u66f4\u6362\u670d\u52a1\u5668\u5e76\u91cd\u65b0\u52a0\u8f7d\u89c6\u9891";
                    "tibet" === (0, W.A)("lang") && (e = "\u0f56\u0f62\u0f99\u0f53\u0f0b\u0f63\u0f0b\u0f42\u0f5f\u0f72\u0f42\u0f66\u0f0b\u0f58\u0f72\u0f0b\u0f50\u0f74\u0f56\u0f0b\u0f5a\u0f7a\u0f0b\u0f50\u0f42\u0f0b\u0f42\u0f45\u0f7c\u0f51\u0f0b\u0f56\u0fb1\u0f7a\u0f51\u0f0b\u0f50\u0f56\u0f66\u0f0d \n \u0f21 \u0f61\u0f44\u0f0b\u0f56\u0f66\u0f90\u0fb1\u0f62\u0f0b\u0f41\u0f0b\u0f60\u0f56\u0fb1\u0f7a\u0f51\u0f0b\u0f54\u0f0d \n \u0f22 \u0f41\u0f0b\u0f54\u0f62\u0f0b\u0f56\u0f40\u0f7c\u0f63\u0f0b\u0f53\u0f66\u0f0b\u0f42\u0f4f\u0f7c\u0f44\u0f0b\u0f56\u0f0d \n \u0f23 \u0f61\u0f44\u0f0b\u0f53\u0f0b\u0f42\u0fb3\u0f7c\u0f42\u0f0b\u0f56\u0f62\u0f99\u0f53\u0f0b\u0f42\u0f5e\u0f53\u0f0b\u0f63\u0f0b\u0f56\u0f63\u0f9f\u0f0b\u0f56\u0f0d"), alert(e)
                }, this._checkSpeedKb = [], this._checkSpeedWaitTime = 0, this._checkSpeedIid = -1, this.playCheck = (e, t) => {
                    Yo = -1, this.ClearReloadVideo(), this.reloadVideo(), this.loadHls((() => {
                        if (-1 !== e.indexOf(".m3u8")) {
                            if (!Hls.isSupported()) return void(this.video.src = e);
                            {
                                "update" === t && this.hls && this.hls.destroy();
                                let i = !1;
                                const r = jo.injectMixin(Hls);
                                window.mpe = r;
                                try {
                                    i = window.mpe.isSupported()
                                } catch (n) {
                                    i = !1
                                }
                                const o = this.props.vip;
                                let s = (o ? "VIP" : "") + "\u89c6\u9891\u52a0\u901f\u5df2\u5f00\u542f,\u95ea\u7535\u822c\u52a0\u8f7d\u4e2d...";
                                "tibet" === (0, W.A)("lang") && (s = "\u0f45\u0f74\u0f44\u0f0b\u0f59\u0f58\u0f0b\u0f66\u0f92\u0f74\u0f42\u0f0b\u0f62\u0f7c\u0f42\u0f66\u0f0d"), this.showLeftMsg(s, "1.3em", 6e3);
                                let a = {
                                    debug: !1,
                                    autoStartLoad: !0,
                                    startPosition: this.props.video_skip ? 60 : -1,
                                    maxBufferLength: o ? 3e5 : 3e4,
                                    maxMaxBufferLength: o ? 35e4 : 35e3,
                                    maxBufferSize: o ? 3e8 : 1e8
                                };
                                if (i) {
                                    let e = 2,
                                        t = 2;
                                    switch ((new Date).getHours()) {
                                        case 18:
                                            e = 3;
                                            break;
                                        case 19:
                                            e = 5, t = 5;
                                            break;
                                        case 20:
                                        case 21:
                                        case 22:
                                        case 23:
                                            e = 10, t = 5
                                    }
                                }
                                if (i) {
                                    const e = (e, t, n, i, r, o) => {
                                        let s, a, l = this.props.src.split("/")[2],
                                            c = Number(t) + Number(n);
                                        Go = Number(r) || Number(o), s = r < 1 ? 1024 * r + "Kb/s" : r + "Mb/s", a = o < 1 ? 1024 * o + "Kb/s" : o + "Mb/s";
                                        let u = 1024 * (Number(r) + Number(o));
                                        u > 1e3 && (u = "1000+"), u > 0 ? u >= 128 ? this.setState({
                                            speedupNow: (u / 128).toFixed(0) + "Mb/s"
                                        }) : this.setState({
                                            speedupNow: (u / 128).toFixed(1) + "Mb/s"
                                        }) : this.setState({
                                            speedupNow: ""
                                        });
                                        let d = Math.round(t / c * 100);
                                        if (isNaN(d) || 0 === d ? d = "..." : d += "%", "1" === (0, W.A)("f11") || H().get("f11") || (l = "-"), "1" === (0, W.A)("f11") || H().get("f11"))
                                            if (0 === i) {
                                                let e = "\u64ad\u653e\u6e90: ".concat(l, " <br>\u4e0b\u8f7d\u901f\u5ea6(\u6e90):  ").concat(s, "<br> ").concat(this.props.vip ? "VIP\u89c6\u9891\u52a0\u901f\u5df2\u5f00\u542f" : "\u514d\u8d39\u89c6\u9891\u52a0\u901f\u5df2\u5f00\u542f", " ");
                                                this.setState({
                                                    p2pInfo: e
                                                })
                                            } else {
                                                let n = "\u64ad\u653e\u6e90: ".concat(l, " <br>\u4e0b\u8f7d\u901f\u5ea6(\u6e90):  ").concat(s, ", \u52a0\u901f: ").concat(a, "<br> \ud83d\ude80 \u5df2\u52a0\u901f: ").concat(d, ", \u4e0b\u8f7d: ").concat(t, "Mb, ").concat(e, "Mb, \u8282\u70b9\u6570\u91cf: ").concat(i, " ");
                                                this.setState({
                                                    p2pInfo: n
                                                })
                                            }
                                        else {
                                            let e = window.mobile ? "".concat(this.props.vip ? "\ud83d\ude80 VIP\u89c6\u9891\u52a0\u901f\u5df2\u5f00\u542f" : "\ud83d\ude80 \u514d\u8d39\u89c6\u9891\u52a0\u901f\u5df2\u5f00\u542f", " ") : "<br> <br> ".concat(this.props.vip ? "\ud83d\ude80 VIP\u89c6\u9891\u52a0\u901f\u5df2\u5f00\u542f" : "\ud83d\ude80 \u514d\u8d39\u89c6\u9891\u52a0\u901f\u5df2\u5f00\u542f", " ");
                                            this.setState({
                                                p2pInfo: e
                                            })
                                        }
                                        this.state.load && this.checkSpeed(u)
                                    };
                                    this.hls = new r({
                                        ...a,
                                        p2p: {
                                            core: {
                                                cachedSegmentExpiration: 72e5,
                                                highDemandTimeWindow: o ? 1e3 : 30,
                                                httpDownloadTimeWindow: o ? 6e3 : 30,
                                                p2pDownloadTimeWindow: o ? 6e3 : 15,
                                                simultaneousHttpDownloads: o ? window.mobile ? 3 : 5 : 1,
                                                simultaneousP2PDownloads: o ? window.mobile ? 3 : 5 : 1,
                                                httpNotReceivingBytesTimeoutMs: 3e4,
                                                p2pNotReceivingBytesTimeoutMs: 15e3,
                                                httpErrorRetries: 5,
                                                p2pErrorRetries: 5,
                                                announceTrackers: ["wss://cntv-21.m1907.top:5678/s"],
                                                rtcConfig: {
                                                    iceServers: [{
                                                        urls: "stun:stun.miwifi.com:3478"
                                                    }, {
                                                        urls: "stun:stun.12voip.com:3478"
                                                    }, {
                                                        urls: "stun:stun4.l.google.com:19302"
                                                    }, {
                                                        urls: "stun:stun.cloudflare.com:3478"
                                                    }]
                                                }
                                            },
                                            onHlsJsCreated(t) {
                                                oe(t.p2pEngine, e)
                                            }
                                        }
                                    })
                                } else this.hls = new Hls(a);
                                this.hls.loadSource(e), this.hls.attachMedia(this.video), this.hls.on(Hls.Events.MANIFEST_PARSED, (function() {
                                    this.video.play()
                                })), this.hls.on(Hls.Events.ERROR, ((t, n) => {
                                    V._ && console.log(n, "error hls zzzzzzzzzzzzz");
                                    var i = n.type,
                                        r = n.details,
                                        o = n.fatal;
                                    if ("networkError" !== i || "manifestLoadError" !== r || !0 !== o) {
                                        if (n.fatal) switch (n.type) {
                                            case Hls.ErrorTypes.NETWORK_ERROR:
                                                this.hls.startLoad();
                                                break;
                                            case Hls.ErrorTypes.MEDIA_ERROR:
                                                this.hls.recoverMediaError();
                                                break;
                                            default:
                                                this.hls.destroy(), this.errAlert()
                                        }
                                    } else window.mobile ? (this.hls.destroy(), this.video.src = e) : this.errAlert()
                                }))
                            }
                        } else this.video.src = e
                    }))
                }, this.loadHls = e => {
                    let t = document.createElement("script");
                    t.src = V._ ? "/h-1-6.js" : "https://m1-cn-201.cloud.nnpp.vip:2223/z1/js/h-1-6.js", t.setAttribute("crossorigin", ""), document.getElementsByTagName("head")[0].appendChild(t), t.onload = () => e()
                }, this.loadP2p = () => {}, this._showLeftMsgTid = -1, this.playClick = () => {
                    this.state.play ? (this.video.pause(), this.setState({
                        play: !1
                    }), de.stop(), this.stopCheckSpeed()) : (this.video.play(), this.setState({
                        play: !0
                    }), this.props.play && this.props.play(), de.start(), Jo = !1)
                }, this.nextEp = () => {
                    this.showLeftMsg("\u5207\u6362\u81f3\u4e0b\u4e00\u96c6 ", "1.3em", 6e3), this.props.playEnd && this.props.playEnd()
                }, this.forward_vid = () => {
                    isNaN(this.video.duration) ? this.showLeftMsg("\u8fd8\u4e0d\u80fd\u524d\u8fdb\u89c6\u9891\uff0c\u89c6\u9891\u8fd8\u5728\u52a0\u8f7d\u4e2d...", "1.3em", 6e3) : (this.video.currentTime = this.state.currTime + 5, this.setState({
                        curr: this.video.currentTime / this.video.duration,
                        buff: this.video.buffered.end(0) / this.video.duration,
                        currTime: this.video.currentTime
                    }), this.showLeftMsg("\u524d\u8fdb5\u79d2 >", "1.3em", 6e3))
                }, this.back_vid = () => {
                    isNaN(this.video.duration) ? this.showLeftMsg("\u8fd8\u4e0d\u80fd\u56de\u9000\u89c6\u9891\uff0c\u89c6\u9891\u8fd8\u5728\u52a0\u8f7d\u4e2d...", "1.3em", 6e3) : (this.video.currentTime = this.state.currTime - 5, this.setState({
                        curr: this.video.currentTime / this.video.duration,
                        buff: this.video.buffered.end(0) / this.video.duration,
                        currTime: this.video.currentTime
                    }), this.showLeftMsg("\u56de\u90005\u79d2 <", "1.3em", 6e3))
                }, this.setFullScreen = () => {
                    this.isFullScreen() ? this.exitFullScreen() : this.onFullScreen()
                }, this.fullScreenChange = () => {
                    let e = () => this.setState({
                        full: this.isFullScreen()
                    });
                    document.onfullscreenchange = function(t) {
                        e()
                    }, document.onwebkitfullscreenchange = function(t) {
                        e()
                    }, document.onmozfullscreenchange = function(t) {
                        e()
                    }, document.onmsfullscreenchange = function(t) {
                        e()
                    }
                }, this.isFullScreen = () => document.fullscreen || document.webkitIsFullScreen || document.mozFullScreen || !1, this.onFullScreen = () => {
                    let e = document.getElementById("s-video"),
                        t = document.documentElement;
                    document.requestFullscreen ? t.requestFullscreen() : document.documentElement.webkitRequestFullScreen ? t.webkitRequestFullScreen() : document.documentElement.msRequestFullscreen ? t.msRequestFullscreen() : document.documentElement.mozRequestFullScreen ? t.mozRequestFullScreen() : e.webkitEnterFullscreen && e.webkitEnterFullscreen(), this.setState({
                        full: !0
                    })
                }, this.exitFullScreen = () => {
                    document.documentElement;
                    document.ExitFullscreen ? document.ele.ExitFullscreen() : document.webkitExitFullscreen ? document.webkitExitFullscreen() : document.msExitFullscreen ? document.msExitFullScreen() : document.mozCancelFullScreen && document.mozCancelFullScreen(), this.setState({
                        full: !1
                    })
                }, this.hideQuality = () => {
                    this.setState({
                        showQualityModal: !1
                    })
                }, this.onPip = async () => {
                    try {
                        document.pictureInPictureElement ? document.exitPictureInPicture() : (Jo = !1, await this.video.requestPictureInPicture())
                    } catch (e) {
                        alert("\u89c6\u9891\u7f13\u51b2\u4e2d\uff0c\u8bf7\u7b49\u5f85\u89c6\u9891\u64ad\u653e\u540e\u518d\u542f\u7528\u753b\u4e2d\u753b\u6a21\u5f0f")
                    }
                }, this.exitPip = () => {
                    setTimeout((() => {
                        this.video.paused && !Jo && this.video.play()
                    }), 5)
                }, this.touchStart = e => {
                    this.setState({
                        toucheX: e.touches[0].pageX
                    })
                }, this.touchMove = e => {
                    this.setState({
                        toucheXX: e.touches[0].pageX
                    })
                }, this.touchEnd = e => {
                    this.state.toucheX && this.state.toucheXX && (this.state.toucheXX - this.state.toucheX > 1 ? this.forward_vid() : this.back_vid()), this.setState({
                        toucheX: 0,
                        toucheXX: 0
                    })
                }, this.time = () => {
                    const e = new Date;
                    let t, n;
                    return t = e.getHours().toString(), 1 === t.length && (t = "0" + t), n = e.getMinutes().toString(), 1 === n.length && (n = "0" + n), t + ":" + n
                };
                let t = H().get("speed");
                t = void 0 == t ? 1 : parseFloat(t);
                const n = localStorage.getItem("videoSizeType");
                let i = null;
                e.src ? (i = e.poster, localStorage.setItem("po", JSON.stringify(i))) : i = JSON.parse(localStorage.getItem("poster")), this.state = {
                    load: !0,
                    play: !1,
                    mute: !1,
                    volume: .5,
                    speed: t,
                    full: !1,
                    juchang: !1,
                    showAbout: !1,
                    showControl: !1,
                    showControlTime: 0,
                    curr: 0,
                    buff: 0,
                    currTime: 0,
                    duration: 0,
                    showTip: !1,
                    TipLeft: "4em",
                    TipType: "title",
                    tipTitle: "O(\u2229_\u2229)O~",
                    p2pInfo: "",
                    speedupNow: "",
                    showRefreshMsg: !1,
                    supportPip: !!document.pictureInPictureEnabled,
                    videoSizeType: n || "contain",
                    toucheX: 0,
                    toucheXX: 0,
                    poster: i,
                    showAd: !0
                }, this.saveHistoryTime = 0, this.loadVideo = this.loadVideo.bind(this), this.updateCurr = this.updateCurr.bind(this), this.changeCurr = this.changeCurr.bind(this), this.moveCurr = this.moveCurr.bind(this), this.moveOut = this.moveOut.bind(this), this.changeVolume = this.changeVolume.bind(this), this.setTip = this.setTip.bind(this), this.showLeftMsg = this.showLeftMsg.bind(this), this.rightMenu = this.rightMenu.bind(this), this.onWaiting = this.onWaiting.bind(this), this.onPlaying = this.onPlaying.bind(this), this.onEnded = this.onEnded.bind(this), this.onError = this.onError.bind(this), this.setSpeed = this.setSpeed.bind(this), this.setVideoSizeType = this.setVideoSizeType.bind(this), this.playClick = this.playClick.bind(this), this.setShowControl = this.setShowControl.bind(this), this.setShowAd = e => {
                    this.setState({
                        showAd: e
                    })
                }
            }
            componentDidMount() {
                this.regKey(), this.setShowControl(), this.fullScreenChange(), this.playCheck(this.props.src, "init")
            }
            componentWillReceiveProps(e) {
                if (e.src != this.props.src) return this.setState({
                    load: !0,
                    play: !1,
                    mute: !1,
                    curr: 0,
                    buff: 0,
                    currTime: 0,
                    duration: 0
                }), this.reset_video_skip(), void this.playCheck(e.src, "update")
            }
            reloadvideoMsg() {
                document.body.innerHTML = '<h3 style="color:#fff"> \u91cd\u65b0\u8f7d\u5165\u89c6\u9891 </h3>'
            }
            reloadVideo() {
                Ko = setTimeout((() => {
                    -1 === Yo && (this.video.duration || Go || !this.props.title || (pe.add(this.props.src), window.location.reload()))
                }), this.props.vip ? 1e4 : 3e4), Xo = setTimeout((() => {
                    this.video.duration || Go || !this.props.title || (this.showLeftMsg("\u5373\u5c06\u91cd\u65b0\u8fde\u63a5\u52a0\u901f\u670d\u52a1\u5668\uff0c\u8bf7\u7a0d\u5019...", "1.3em", 5e3), this.setState({
                        showRefreshMsg: !0
                    }), setTimeout((() => {
                        this.setState({
                            showRefreshMsg: !1
                        })
                    }), 5e3))
                }), this.props.vip ? 8e3 : 12e3)
            }
            ClearReloadVideo() {
                Ko && (clearTimeout(Ko), Ko = -1, clearTimeout(Xo), Xo = -1)
            }
            checkSpeed(e) {
                this._checkSpeedKb.push(e);
                const t = this._checkSpeedKb.length;
                if (t > 123 && this._checkSpeedKb.shift(), t >= 100) {
                    this._checkSpeedKb.reduce(((e, t) => e + t), 0) / t < 50 && this.props.vip && this.checkSpeedReload(1)
                }
            }
            checkSpeedTime() {
                this.stopCheckSpeed(), this._checkSpeedIid = setInterval((() => {
                    this._checkSpeedWaitTime++, this.props.vip ? this._checkSpeedWaitTime >= 50 && this.checkSpeedReload(2) : this._checkSpeedWaitTime >= 90 && this.checkSpeedReload(3)
                }), 1e3)
            }
            checkSpeedReload(e) {
                this.stopCheckSpeed();
                const t = this.props.title;
                ! function(e) {
                    let t = 0;
                    const n = Ho();
                    n && n.name === e && Date.now() - n.time < 18e5 && (t = n.count + 1);
                    const i = {
                        name: e,
                        time: Date.now(),
                        count: t
                    };
                    localStorage.setItem("rc", JSON.stringify(i))
                }(t);
                const n = Ho();
                n && n.name == t && Date.now() - n.time < 18e5 && n.count > 2 ? this.showLeftMsg("\u82e5\u65e0\u6cd5\u6b63\u5e38\u64ad\u653e\u8bf7\u624b\u52a8\u5237\u65b0\uff01", "1.3em", 5e3) : (this.showLeftMsg("\u5373\u5c06\u91cd\u65b0\u8fde\u63a5\u52a0\u901f\u670d\u52a1\u5668\uff0c\u8bf7\u7a0d\u5019...", "1.3em", 5e3), this.setState({
                    showRefreshMsg: !0
                }), setTimeout((() => {
                    pe.add(this.props.src), window.location.reload()
                }), 5e3))
            }
            stopCheckSpeed() {
                this._checkSpeedKb = [], this._checkSpeedWaitTime = 0, clearInterval(this._checkSpeedIid)
            }
            setVideo(e) {
                e && (this.video = e, this.video.playbackRate = this.state.speed ? this.state.speed : 1, this.video.addEventListener("leavepictureinpicture", this.exitPip))
            }
            loadVideo() {
                this.setState({
                    duration: this.video.duration
                })
            }
            updateCurr() {
                let e = this.video.duration,
                    t = this.video.buffered.length ? this.video.buffered.end(this.video.buffered.length - 1) / e : 0,
                    n = this.video.currentTime / e;
                this.skip_remember(), this.props.video_skip && this.video.duration >= 1200 && (this.video.currentTime < 60 && !Wo ? (this.showLeftMsg(">> \u5df2\u4e3a\u60a8\u8df3\u8fc7\u7247\u5934 ", "1.3em", 6e3), Wo = !0, n = 60 / e, this.video.currentTime = 60) : e - this.video.currentTime <= 60 && !Vo && (this.showLeftMsg(">> \u5df2\u4e3a\u60a8\u8df3\u8fc7\u7247\u5c3e ", "1.3em", 6e3), Vo = !0, n = (e - 1) / e, this.onEnded(), this.video.currentTime = e - 1)), this.setState({
                    curr: n,
                    buff: t,
                    currTime: this.video.currentTime,
                    duration: e
                }), this.playHistory(), this.props.postMsg({
                    type: "progress",
                    progress: n,
                    ep: this.props.ep
                })
            }
            reset_video_skip() {
                Vo = !1, Qo = !1, Wo = !1, this.hiddenSpeedNotice()
            }
            skip_remember() {
                const e = this.props.title;
                if (!Qo && "" !== e) {
                    const t = this.props.ep,
                        n = le()[e];
                    n && n.ep == t && (this.showLeftMsg(">> \u5df2\u4ece\u60a8\u4e0a\u6b21\u89c2\u770b\u7684\u4f4d\u7f6e\u7ee7\u7eed\u64ad\u653e", "1.3em", 6e3), Wo = !0, this.video.currentTime = n.t), Qo = !0
                }
            }
            playHistory() {
                let e = Date.now() / 1e3;
                if (e - this.saveHistoryTime < 5) return;
                let t = this.props.ep;
                ae(this.props.title, t, this.video.currentTime), this.saveHistoryTime = e
            }
            formatTime(e) {
                let t, n, i;
                isNaN(e) && (e = 0);
                return t = parseInt(e / 60 / 60), n = parseInt(e / 60 % 60), i = parseInt(e % 60), i = "0".concat(i).slice(-2), t ? t += ":" : t = "", "".concat(t).concat(n, ":").concat(i)
            }
            changeCurr(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                if (!this.video.currentTime) return null;
                if (!t) return void this.setState({
                    curr: e
                });
                let n = e * this.video.duration;
                this.video.currentTime = n, this.setState({
                    curr: e,
                    currTime: this.video.currentTime
                })
            }
            changeVolume(e) {
                e <= 0 ? (e = 0, this.video.volume = e, this.setState({
                    mute: !0
                })) : (this.video.volume = e, this.setState({
                    volume: e,
                    mute: !1
                }))
            }
            setSpeed(e) {
                this.video.playbackRate = e, this.setState({
                    speed: e
                }), H().set("speed", e)
            }
            setVideoSizeType(e) {
                this.setState({
                    videoSizeType: e
                }), localStorage.setItem("videoSizeType", e)
            }
            moveCurr(e, t) {
                let n = "\u95ea\u7535\u822c\u52a0\u8f7d\u4e2d...";
                isNaN(this.video.duration) || (n = this.formatTime(e * this.video.duration)), this.setTip(!0, "time", t.clientX, n)
            }
            moveOut() {
                this.setTip(!1)
            }
            setTip() {
                let e = !(arguments.length > 0 && void 0 !== arguments[0]) || arguments[0],
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "title",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : "4em",
                    i = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
                e ? this.setState({
                    showTip: e,
                    tipType: t,
                    TipLeft: n,
                    tipTitle: i
                }) : this.setState({
                    showTip: !1
                }), this.setShowControl()
            }
            showLeftMsg(e) {
                let t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "1.6em",
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 2e3;
                clearInterval(this._showLeftMsgTid), this.state.showControl || this.setShowControl(), this.setTip(!0, "title", t, e), this._showLeftMsgTid = setTimeout((() => {
                    this.setTip(!1)
                }), n)
            }
            setShowControl() {
                this.setState({
                    showControl: !0
                }), this.showControlTime && clearTimeout(this.showControlTime), this.showControlTime = setTimeout((() => {
                    this.setState({
                        showControl: !1
                    })
                }), window.mobile ? 3e3 : 2e3)
            }
            rightMenu(e) {
                this.state.showAbout ? this.setState({
                    showAbout: !1
                }) : this.setState({
                    showAbout: !0
                })
            }
            init() {
                this.setState({
                    play: !1,
                    curr: 0,
                    currentTime: 0,
                    buff: 0
                }), this.video.currentTime = 0
            }
            clearShowSpeedTimeout() {
                $o && clearTimeout($o)
            }
            showSpeedupNotice() {
                if (this.clearShowSpeedTimeout(), !this.props.vip && this.props.title) {
                    let e = 2e3;
                    (this.video.currentTime < 3 || 60 === this.video.currentTime) && (e = 3e3), $o = setTimeout((() => {
                        this.props.showSpeedupNotice(!0)
                    }), e)
                }
            }
            hiddenSpeedNotice() {
                this.props.vip || (this.clearShowSpeedTimeout(), this.props.showSpeedupNotice(!1))
            }
            onWaiting() {
                document.getElementsByClassName("l")[0].classList.remove("hide"), this.showSpeedupNotice(), this.setState({
                    load: !0
                }), this.checkSpeedTime()
            }
            onPlaying() {
                document.getElementsByClassName("l")[0].classList.add("hide"), this.hiddenSpeedNotice(), this.setState({
                    load: !1
                }), this.stopCheckSpeed()
            }
            onEnded() {
                this.init(), this.showLeftMsg("\u64ad\u653e\u5b8c\u6bd5", "1.3em", 1e4), this.props.playEnd && this.props.playEnd()
            }
            onError(e) {
                "" != this.video.src && void 0 != this.videoEle && (this.showLeftMsg("\u89c6\u9891\u64ad\u653e\u51fa\u9519\uff0c\u65e0\u6cd5\u7ee7\u7eed\u64ad\u653e\uff0c\u8bf7\u5c1d\u8bd5\u5237\u65b0\u9875\u9762", "1.3em", 2e4), alert("\u89c6\u9891\u64ad\u653e\u51fa\u9519\uff0c\u8bf7\u5c1d\u8bd5\u5237\u65b0\u9875\u9762\u6216\u66f4\u6362\u6d4f\u89c8\u5668\u8bbf\u95ee"))
            }
            regKey(e) {
                document.onkeydown = e => {
                    if ("text" === (e.srcElement || e.target).type) return !0;
                    switch (e.keyCode || e.which) {
                        case 32:
                            this.state.play ? this.video.pause() : this.video.play(), this.setState({
                                play: !this.state.play
                            });
                            break;
                        case 38:
                            let e = this.state.volume += .05;
                            e > 1 && (e = 1), this.video.volume = e, this.setState({
                                volume: e
                            });
                            break;
                        case 40:
                            let t = this.state.volume -= .05;
                            t < 0 && (t = 0), this.video.volume = t, this.setState({
                                volume: t
                            });
                            break;
                        case 13:
                            this.setFullScreen();
                            break;
                        case 37:
                            this.back_vid();
                            break;
                        case 39:
                            this.forward_vid()
                    }
                }
            }
            isPipPause() {
                setTimeout((() => {
                    document.pictureInPictureElement && (Jo = !0)
                }), 100)
            }
            nativeVideo() {
                return t().createElement("div", {
                    id: "s-player",
                    style: this.state.juchang ? {
                        position: "absolute",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    } : {},
                    onContextMenu: this.rightMenu
                }, t().createElement("video", {
                    controls: !0,
                    ref: e => this.setVideo(e),
                    style: {
                        position: "absolute",
                        width: "100%",
                        height: "100%"
                    },
                    playsInline: "true",
                    "webkit-playsinline": "true",
                    "x-webkit-airplay": "true",
                    "x5-playsinline": "true"
                }), this.state.play ? null : t().createElement(f, {
                    onClick: this.playClick,
                    onTouchend: this.playClick
                }), this.state.showAbout ? t().createElement(C, {
                    speed: this.state.speed,
                    setSpeed: this.setSpeed,
                    videoSizeType: this.state.videoSizeType,
                    setVideoSizeType: this.setVideoSizeType,
                    video_skip: this.props.video_skip,
                    p2pInfo: this.state.p2pInfo,
                    close: this.rightMenu,
                    src: this.props.src
                }) : null)
            }
            render() {
                var e;
                if ("tibet" === (0, W.A)("lang") && /MicroMessenger/i.test(navigator.userAgent)) return this.nativeVideo();
                if ("1" === (0, W.A)("fs") && /Android/i.test(navigator.userAgent)) return this.nativeVideo();
                const n = "https://s1.cloud.nnpp.vip:2223/m1/shop_poster.webp";
                let i = null;
                return n && (null === (e = this.video) || void 0 === e ? void 0 : e.readyState) < 3 && (i = "".concat(I).concat(n)), t().createElement("div", {
                    id: "s-player",
                    style: this.state.juchang ? {
                        position: "absolute",
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0
                    } : {},
                    onContextMenu: this.rightMenu
                }, t().createElement("div", {
                    style: {
                        cursor: this.state.showControl ? "pointer" : "none",
                        zIndex: "1",
                        width: "100%",
                        height: "100%"
                    },
                    onClick: this.playClick,
                    onDoubleClick: this.setFullScreen,
                    onMouseMove: this.setShowControl,
                    onTouchStart: this.touchStart,
                    onTouchMove: this.touchMove,
                    onTouchEnd: this.touchEnd
                }, t().createElement("video", {
                    id: "s-video",
                    ref: e => this.setVideo(e),
                    onContextMenu: e => e.preventDefault(),
                    autoPlay: !0,
                    controls: (window.mobile, !1),
                    preload: "auto",
                    "x-webkit-airplay": "true",
                    poster: i,
                    onLoadedMetadata: this.loadVideo,
                    onCanPlay: this.loadVideo,
                    onTimeUpdate: this.updateCurr,
                    onEnded: this.onEnded,
                    onError: this.onError,
                    onWaiting: this.onWaiting,
                    onPlaying: this.onPlaying,
                    onPlay: () => {
                        this.setState({
                            play: !0
                        }), Jo = !1
                    },
                    onPause: () => {
                        this.setState({
                            play: !1
                        }), this.isPipPause()
                    },
                    style: {
                        objectFit: this.state.videoSizeType
                    }
                }, "\u60a8\u7684\u6d4f\u89c8\u5668\u7248\u672c\u4e0d\u652f\u6301\uff0c\u65e0\u6cd5\u64ad\u653e\u89c6\u9891\uff01", t().createElement("br", null), "\u8bf7\u4f7f\u7528chrome \u706b\u72d0 opera \u7b49\u6d4f\u89c8\u5668\u8bbf\u95ee\u672c\u9875\u9762\u5373\u53ef\u64ad\u653e\u5f53\u524d\u89c6\u9891!!")), this.state.play ? null : t().createElement(f, {
                    onClick: this.playClick,
                    onTouchend: this.playClick
                }), t().createElement("div", {
                    className: this.state.showControl ? "show" : "hide",
                    style: {
                        position: "absolute",
                        top: "1em",
                        left: "1em",
                        color: "rgba(255,255,255,.7)"
                    }
                }, "tibet" !== (0, W.A)("lang") ? this.props.title + " " + this.props.quality_name : ""), t().createElement("div", {
                    className: this.state.showControl ? "show" : "hide",
                    style: {
                        position: "absolute",
                        top: "1em",
                        right: "1em",
                        color: "rgba(255,255,255,.5)"
                    }
                }, this.time()), t().createElement(F, {
                    load: this.state.load,
                    play: this.state.play,
                    poster: this.props.poster,
                    show: this.state.showAd,
                    setShowAd: this.setShowAd
                }), this.renderControls(), this.state.showAbout ? t().createElement(C, {
                    speed: this.state.speed,
                    setSpeed: this.setSpeed,
                    videoSizeType: this.state.videoSizeType,
                    setVideoSizeType: this.setVideoSizeType,
                    video_skip: this.props.video_skip,
                    p2pInfo: this.state.p2pInfo,
                    close: this.rightMenu,
                    src: this.props.src
                }) : null, this.state.showRefreshMsg ? t().createElement("div", {
                    style: {
                        position: "absolute",
                        top: "3em",
                        left: "1em",
                        fontSize: ".78em"
                    }
                }, "\u9700\u8981\u91cd\u65b0\u52a0\u8f7d") : null)
            }
            renderControls() {
                return t().createElement("div", {
                    id: "s-controls",
                    className: this.state.showControl ? "show" : "hide"
                }, t().createElement("div", {
                    style: {
                        fontSize: "1.1em",
                        marginLeft: "1em",
                        fontFamily: "monospace"
                    }
                }, t().createElement("span", null, this.formatTime(this.state.currTime)), t().createElement("span", {
                    style: {
                        padding: "0 .2em"
                    }
                }, "/"), t().createElement("span", null, this.state.duration && !isNaN(this.state.duration) ? this.formatTime(this.state.duration) : "-")), this.props.nextEp ? t().createElement("span", {
                    style: {
                        marginLeft: window.mobile ? "0.7em" : ".7em",
                        marginRight: (window.mobile, "0"),
                        fontSize: ".9em",
                        cursor: "pointer",
                        color: "#dce9ff",
                        textShadow: "1px 1px 1px #b9b9b9"
                    },
                    onClick: this.nextEp,
                    onMouseMove: e => this.setTip(!0, "tip", e.clientX, "\u4e0b\u4e00\u96c6"),
                    onMouseOut: () => this.moveOut()
                }, t().createElement("img", {
                    style: es.svgNextEp,
                    src: A
                })) : null, t().createElement(a, {
                    curr: this.state.curr,
                    buff: this.state.buff,
                    moveCurr: this.moveCurr,
                    moveOut: this.moveOut,
                    changeCurr: this.changeCurr,
                    load: this.state.load
                }), t().createElement("span", {
                    style: {
                        marginLeft: window.mobile ? "0" : ".7em",
                        marginRight: window.mobile ? ".5em" : "0",
                        fontSize: ".9em",
                        cursor: "pointer",
                        color: "#dce9ff",
                        textShadow: "1px 1px 1px #b9b9b9"
                    },
                    onClick: this.rightMenu,
                    onMouseMove: e => this.setTip(!0, "tip", e.clientX, "\u64ad\u653e\u8bbe\u7f6e"),
                    onMouseOut: () => this.moveOut()
                }, t().createElement("img", {
                    style: es.svgSetting,
                    src: P
                })), !window.mobile && this.state.supportPip ? t().createElement("span", {
                    style: {
                        marginLeft: ".9em",
                        fontSize: ".9em",
                        cursor: "pointer",
                        color: "#dce9ff",
                        textShadow: "1px 1px 1px #b9b9b9"
                    },
                    onClick: this.onPip,
                    onMouseMove: e => this.setTip(!0, "tip", e.clientX, "\u753b\u4e2d\u753b"),
                    onMouseOut: () => this.moveOut()
                }, t().createElement("img", {
                    style: es.svgPip,
                    src: L
                })) : null, this.props.children, window.mobile ? null : this.renderVolume(), t().createElement("span", {
                    style: {
                        marginLeft: "0.5em",
                        marginRight: "1.5em"
                    }
                }, t().createElement("img", {
                    style: es.svg,
                    src: this.state.full ? E : k,
                    onClick: () => this.setFullScreen()
                })), this.renderTip(), this.state.speedupNow ? t().createElement("span", {
                    style: {
                        ...es.tip,
                        right: "1em",
                        bottom: "3.2em",
                        transform: "none"
                    }
                }, this.props.vip ? "KKVOD\u4e3a\u60a8\u52a0\u901f" : "KKVOD\u52a0\u901f", ": ", this.state.speedupNow) : null)
            }
            renderVolume() {
                return t().createElement("div", {
                    style: {
                        marginLeft: "1em",
                        whiteSpace: "nowrap"
                    }
                }, t().createElement("img", {
                    style: es.svgYtb,
                    src: this.state.mute ? T : x,
                    onMouseMove: e => this.setTip(!0, "tip", e.clientX, this.state.mute ? "\u53d6\u6d88\u9759\u97f3" : "\u9759\u97f3"),
                    onMouseOut: () => this.moveOut(),
                    onClick: () => this.changeVolume(this.state.mute ? this.state.volume > .05 ? this.state.volume : .5 : 0)
                }), t().createElement(u, {
                    curr: this.state.volume,
                    change: this.changeVolume
                }))
            }
            renderTip() {
                return this.state.showTip ? "time" === this.state.tipType || "tip" === this.state.tipType ? t().createElement("span", {
                    style: {
                        ...es.tip,
                        left: this.state.TipLeft
                    }
                }, this.state.tipTitle, "time" === this.state.tipType ? t().createElement("div", {
                    style: es.tipArrowDown
                }) : null) : t().createElement("span", {
                    style: {
                        ...es.tip,
                        left: this.state.TipLeft,
                        bottom: "3.2em",
                        transform: "none"
                    }
                }, this.state.tipTitle) : null
            }
        }
        const es = {
                duration: {
                    fontSize: "0.8em",
                    margin: "0 .2em"
                },
                tip: {
                    background: "rgba(255,255,255,.23)",
                    color: "#fff",
                    padding: "0.2em .6em",
                    borderRadius: ".3em",
                    fontSize: ".7em",
                    position: "absolute",
                    bottom: "2.3em",
                    transform: "translate(-50%,-50%)"
                },
                tipArrowDown: {
                    width: 0,
                    height: 0,
                    borderColor: "transparent",
                    borderStyle: "solid",
                    borderWidth: ".3em .3em 0",
                    borderTopColor: "rgba(255,255,255,.23)",
                    position: "absolute",
                    left: "50%",
                    marginLeft: "-.3em",
                    bottom: "-.3em"
                },
                svgYtb: {
                    width: "2.6em",
                    height: "2.6em",
                    position: "relative",
                    bottom: "-.2em",
                    cursor: "pointer"
                },
                svg: {
                    width: "1.5em",
                    height: "1.5em",
                    position: "relative",
                    bottom: "-.2em",
                    cursor: "pointer"
                },
                svgPip: {
                    width: "1.3em",
                    height: "1.3em",
                    position: "relative",
                    bottom: "-.2em",
                    cursor: "pointer"
                },
                svgSetting: {
                    width: "1.3em",
                    height: "1.3em",
                    position: "relative",
                    bottom: "-.2em",
                    cursor: "pointer"
                },
                svgNextEp: {
                    width: "1.3em",
                    height: "1.3em",
                    position: "relative",
                    bottom: "-.1em",
                    cursor: "pointer"
                },
                speed: {
                    fontSize: ".8em",
                    marginLeft: ".7em",
                    cursor: "pointer"
                },
                speenActive: {
                    borderBottom: "1px dashed #fff"
                }
            },
            ts = Zo;
        class ns extends e.Component {
            render() {
                return t().createElement("div", {
                    style: {
                        flex: 1,
                        marginLeft: ".5em"
                    }
                }, t().createElement("div", {
                    style: {
                        marginLeft: "-.5em",
                        marginBottom: ".2em"
                    }
                }, "\u7535\u89c6:"), this.props.new_videos.map(this.render_videos))
            }
            render_videos(e, n) {
                return t().createElement("div", {
                    key: n,
                    onClick: () => window.jiexi(e.name),
                    style: {
                        cursor: "pointer",
                        marginBottom: ".1em"
                    }
                }, e.name)
            }
        }
        const is = ns;
        class rs extends e.Component {
            render() {
                return t().createElement("div", {
                    style: {
                        flex: 1,
                        marginLeft: ".5em",
                        marginRight: ".5em"
                    }
                }, t().createElement("div", {
                    style: {
                        marginLeft: "-.5em",
                        marginBottom: ".2em"
                    }
                }, "\u5927\u5bb6\u6b63\u5728\u770b:"), this.props.hot_videos.map(this.render_videos))
            }
            render_videos(e, n) {
                return t().createElement("div", {
                    key: n,
                    style: {
                        cursor: "pointer",
                        marginBottom: ".1em",
                        overflow: "hidden"
                    },
                    onClick: () => window.jiexi(e.name)
                }, e.name)
            }
        }
        const os = rs;

        function ss(n) {
            const [i, r] = (0, e.useState)(!0);
            return i ? t().createElement("div", {
                style: cs.bg,
                id: "msg"
            }, n.content, t().createElement("button", {
                style: cs.button,
                onClick: n.onClick
            }, n.confirmTitle), t().createElement("button", {
                style: cs.button,
                onClick: () => window.location.reload()
            }, "\u5237\u65b0"), t().createElement("button", {
                style: cs.button,
                onClick: () => {
                    r(!1)
                }
            }, "\u5173\u95ed")) : null
        }
        class as extends e.Component {
            render() {
                return t().createElement(ss, this.props)
            }
        }
        as.show = (e, n, r) => {
            let o = document.getElementById("message-container");
            o || (o = document.createElement("div"), o.id = "message-container", document.body.appendChild(o));
            const s = i().createPortal(t().createElement(as, {
                content: e,
                confirmTitle: n,
                onClick: r
            }), o, +new Date);
            i().render(s, o)
        };
        let ls = {
            background: "linear-gradient( rgb(82, 24, 24), rgb(73, 23, 76) )",
            position: "absolute",
            left: "50%",
            top: "2em",
            padding: "1em",
            transform: "translate(-50%, 0%)",
            width: "30em",
            opacity: ".9",
            borderRadius: "2px",
            color: "rgb(129, 255, 35)",
            boxShadow: "0 0 5px #000"
        };
        window.mobile && (ls.top = "1em", ls.left = "1em", ls.right = "1em", ls.transform = "none", ls.width = "none", ls.opacity = 1);
        const cs = {
            bg: ls,
            titlle: {
                fontSize: ".9em",
                margin: ".5em 0"
            },
            content: {
                color: "#e4e4e4",
                fontSize: ".8em",
                margin: ".2em 0"
            },
            about: {
                fontSize: ".789em",
                color: "rgb(255, 194, 194)"
            },
            button: {
                marginLeft: ".5em",
                marginTop: ".7em",
                padding: ".1em 1.9em",
                background: "#272727",
                color: "#e4e4e4",
                border: "1px solid",
                borderColor: "#6b6d00",
                float: "right"
            },
            line: {
                height: "1px",
                background: "rgb(74, 74, 74)",
                margin: ".5em auto"
            }
        };

        function us(e) {
            return t().createElement(t().Fragment, null, t().createElement("p", {
                style: ds.title
            }, e.title), t().createElement("div", {
                style: ds.line
            }), t().createElement("p", {
                style: ds.content
            }, e.content))
        }
        const ds = {
            line: {
                height: "1px",
                background: "rgb(74, 74, 74)",
                margin: ".5em auto"
            },
            title: {
                color: "rgb(255, 169, 169)",
                fontSize: ".9em",
                margin: ".5em 0"
            },
            content: {
                fontSize: ".8em",
                margin: ".3em 0",
                color: "#fff"
            },
            about: {
                fontSize: ".789em",
                color: "rgb(255, 194, 194)"
            }
        };

        function hs(n) {
            const i = () => {
                    a(!1)
                },
                [r, o] = (0, e.useState)(50),
                [s, a] = (0, e.useState)(!0);
            return (0, e.useEffect)((() => {
                let e = setInterval((() => {
                    1 === r ? (clearInterval(e), i()) : o(r - 1)
                }), 1e3);
                return () => {
                    clearInterval(e)
                }
            }), [r]), s ? t().createElement("div", {
                style: gs.bg,
                id: "msg"
            }, n.content, t().createElement("button", {
                style: gs.button,
                onClick: i
            }, "\u786e\u5b9a(", r, ")")) : null
        }
        class ps extends e.Component {
            render() {
                return t().createElement(hs, this.props)
            }
        }
        ps.show = e => {
            let n = document.getElementById("message-container");
            n || (n = document.createElement("div"), n.id = "message-container", document.body.appendChild(n));
            const r = i().createPortal(t().createElement(ps, {
                content: e
            }), n, +new Date);
            i().render(r, n)
        };
        const fs = ps;
        let ms = {
            background: "linear-gradient( rgb(82, 24, 24), rgb(73, 23, 76) )",
            position: "absolute",
            left: "50%",
            top: "2em",
            padding: "1em",
            transform: "translate(-50%, 0%)",
            width: "30em",
            opacity: ".9",
            borderRadius: "2px",
            color: "rgb(129, 255, 35)",
            boxShadow: "0 0 5px #000"
        };
        window.mobile && (ms.top = "1em", ms.left = "1em", ms.right = "1em", ms.transform = "none", ms.width = "none", ms.opacity = 1);
        const gs = {
            bg: ms,
            titlle: {
                fontSize: ".9em",
                margin: ".5em 0"
            },
            content: {
                color: "#e4e4e4",
                fontSize: ".8em",
                margin: ".2em 0"
            },
            about: {
                fontSize: ".789em",
                color: "rgb(255, 194, 194)"
            },
            button: {
                marginTop: ".7em",
                padding: ".1em 1.9em",
                background: "#272727",
                color: "#e4e4e4",
                border: "1px solid",
                borderColor: "#6b6d00",
                float: "right"
            },
            line: {
                height: "1px",
                background: "rgb(74, 74, 74)",
                margin: ".5em auto"
            }
        };

        function ys() {
            vs("bq1f3pg6kkms2ue2jna1")
        }
        const vs = async e => {
            try {
                let t = new URLSearchParams;
                t.set("id", e), await fetch("//m1-a1.cloud.nnpp.vip:2223/api/tui/click", {
                    method: "POST",
                    body: t
                })
            } catch (t) {
                console.log(t)
            }
        };
        let bs = async function(e, n, i) {
            let r = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : "";
            switch (vs(i), e) {
                case "link":
                    let e = document.referrer;
                    window.parent === window && (e = window.parent.location.href), window.location.href = "https://m1-t0ay8.cloud.nnpp.vip:2223?back=".concat(window.btoa(e), "&link=").concat(window.btoa(n), "&title=").concat(r);
                    break;
                case "text":
                    fs.show(t().createElement(us, {
                        title: r,
                        content: n
                    }))
            }
        };
        class ws extends e.Component {
            render() {
                let e = ue().slice(0, 3);
                return t().createElement(t().Fragment, null, t().createElement("div", {
                    style: _s.box
                }, e.map(this.renderHistory)))
            }
            renderHistory(e, n) {
                return t().createElement("div", {
                    key: e,
                    style: _s.text,
                    onClick: () => window.jiexi(e)
                }, e)
            }
        }
        const _s = {
                box: {
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    width: "15em",
                    margin: "auto",
                    marginTop: "1em"
                },
                text: {
                    marginLeft: ".5em",
                    marginTop: ".5em",
                    textAlign: "center",
                    borderRadius: ".2em",
                    cursor: "pointer"
                }
            },
            Ss = ws;
        const Cs = -1 !== document.referrer.indexOf(".m1907.top") || -1 !== document.referrer.indexOf(".vving.vip") || -1 !== document.referrer.indexOf(".190000000007.top");
        const ks = {
                line: {
                    height: "1px",
                    background: "rgb(74, 74, 74)",
                    margin: ".5em auto"
                },
                titlle: {
                    color: "rgb(255, 169, 169)",
                    fontSize: ".9em",
                    margin: ".5em 0"
                },
                content: {
                    color: "#e4e4e4",
                    fontSize: ".8em",
                    margin: ".3em 0"
                },
                about: {
                    fontSize: ".789em",
                    color: "rgb(255, 194, 194)"
                }
            },
            Es = function() {
                return t().createElement(t().Fragment, null, t().createElement("p", {
                    style: ks.titlle
                }, "\u8d8a\u5149\u5b9d\u76d2APP"), t().createElement("div", {
                    style: ks.line
                }), t().createElement("p", {
                    style: ks.content
                }, "\u4e0b\u8f7d\u5730\u5740 \u6d4f\u89c8\u5668\u8f93\u5165:"), t().createElement("p", {
                    style: ks.content
                }, t().createElement("p", {
                    style: {
                        color: "yellow",
                        fontSize: "1em",
                        marginTop: "0",
                        marginBottom: "0.5em"
                    }
                }, "https://yg.vving.vip")))
            };

        function xs() {
            return null
        }
        var Ts, Ls;
        class Ps extends e.Component {
            constructor(e) {
                super(e), this.onChange = e => {
                    this.setState({
                        searchText: e.target.value
                    }), /Android/i.test(navigator.userAgent) && this.onCompositionEnd(e)
                }, this.onCompositionEnd = e => {
                    let t = e.target.value;
                    this.searchPrompt(t)
                }, this.searchPrompt = async e => {
                    if (e.length >= 2) try {
                        void 0 !== Ts && Ts.abort(), "AbortController" in window && (Ts = new window.AbortController, Ls = Ts.signal);
                        let t = await fetch("//m1-a1.cloud.nnpp.vip:2223/api/search_prompt?k=" + e, {
                                signal: Ls
                            }),
                            n = await t.json();
                        this.setState({
                            searchPromptData: n
                        })
                    } catch (t) {
                        console.log(t)
                    }
                }, this.renderSearch = () => {
                    let e = window.mobile ? "2em" : "4em";
                    return t().createElement(t().Fragment, null, t().createElement("div", {
                        style: {
                            textAlign: "center",
                            marginTop: e,
                            display: "flex",
                            justifyContent: "center",
                            fontSize: ".789em"
                        }
                    }, t().createElement("input", {
                        type: "text",
                        placeholder: "\u60a8\u53ef\u4ee5\u5c1d\u8bd5\u641c\u7d22\u7247\u540d",
                        autoFocus: "autofocus",
                        onChange: this.onChange,
                        onCompositionEnd: this.onCompositionEnd,
                        onKeyDown: e => 13 === e.keyCode ? this.props.jiexi(this.state.searchText) : null,
                        style: {
                            height: "2.3em",
                            width: "15em",
                            border: "1px solid #ea7070",
                            paddingLeft: ".5em",
                            verticalAlign: "middle",
                            borderRadius: 0,
                            borderTopLeftRadius: ".3em",
                            borderBottomLeftRadius: ".3em",
                            background: "linear-gradient(90deg, rgb(228, 123, 73) 0%, rgb(228, 123, 73) 100%)",
                            outline: "none",
                            fontSize: "100%",
                            boxShadow: "1px 1px 1px #00000080",
                            color: "#fff"
                        }
                    }), t().createElement("button", {
                        style: {
                            background: "linear-gradient(90deg, #E47B49 0%, #ea4c89 100%)",
                            height: "2.3em",
                            width: "7em",
                            border: "none",
                            verticalAlign: "middle",
                            borderTopRightRadius: ".3em",
                            borderBottomRightRadius: ".3em",
                            color: "rgb(113, 255, 42)",
                            outline: "none",
                            fontSize: "100%",
                            boxShadow: "1px 1px 1px #0009",
                            borderLeft: "1px solid rgb(183, 162, 202)"
                        },
                        onClick: () => this.props.jiexi(this.state.searchText)
                    }, "\u641c\u7d22")), this.state.searchPromptData ? this.renderSearchPrompt() : null)
                }, this.renderSearchPrompt = () => t().createElement("div", {
                    style: Rs.searchPrompt
                }, this.state.searchPromptData.map(this.renderSearchPromptItem)), this.renderSearchPromptItem = (e, n) => t().createElement("div", {
                    key: n,
                    style: Rs.searchPromptItem,
                    onClick: () => window.jiexi(e.name)
                }, e.name), this.state = {
                    searchText: "",
                    searchPromptData: null,
                    searchPosition: "bottom"
                }, this.menuEle = t().createRef()
            }
            componentDidMount() {
                this.menuEle.current.clientHeight < 300 && window.mobile && this.setState({
                    searchPosition: "top"
                })
            }
            render() {
                return t().createElement("div", {
                    className: "show",
                    style: Rs.bg,
                    ref: this.menuEle
                }, (0, W.A)("jx") ? t().createElement("p", {
                    style: {
                        textAlign: "center"
                    }
                }, "\u50bb\u50bb\u7684\u673a\u5668\u4eba\u6ca1\u6709\u627e\u5230\u5f71\u7247 ", t().createElement("br", null), "\u60a8\u53ef\u4ee5\u5728\u4e0b\u65b9\u5c1d\u8bd5\u624b\u52a8\u641c\u7d22") : t().createElement("p", {
                    style: {
                        marginTop: "1em"
                    }
                }), "top" === this.state.searchPosition ? this.renderSearch() : null, t().createElement("div", {
                    style: {
                        ...Rs.list,
                        marginTop: window.mobile ? "2em" : 0
                    }
                }, t().createElement(os, {
                    hot_videos: this.props.hot_videos
                }), t().createElement(is, {
                    new_videos: this.props.new_videos
                })), "bottom" === this.state.searchPosition ? this.renderSearch() : null, t().createElement(Ss, null), t().createElement(xs, null))
            }
        }
        let As = {
                background: "linear-gradient(red, #1d1d33)",
                position: "absolute",
                top: "5em",
                right: "5em",
                bottom: "5em",
                borderRadius: "2px",
                overflow: "auto",
                padding: "1em",
                color: "rgb(159, 218, 0)",
                textShadow: "0 1px 1px #00000082"
            },
            Is = "21.5em";
        window.mobile && (As = {
            background: "linear-gradient(red, #1d1d33)",
            position: "absolute",
            top: "1em",
            left: "1em",
            right: "1em",
            bottom: "1em",
            borderRadius: "2px",
            overflow: "auto",
            padding: "1em",
            color: "rgb(159, 218, 0)",
            textShadow: "0 1px 1px #00000082",
            paddingBottom: "5em"
        }, Is = "21.5em");
        const Rs = {
                bg: As,
                list: {
                    display: "flex",
                    justifyContent: "space-around"
                },
                searchPrompt: {
                    margin: "0 auto",
                    width: "21.95em",
                    marginTop: "-.2em",
                    background: "rgba(255,255,255,.2)",
                    padding: ".789em",
                    borderRadius: ".1em",
                    boxSizing: "border-box",
                    fontSize: ".789em"
                },
                searchPromptItem: {
                    textAlign: "left",
                    marginBottom: ".3em",
                    cursor: "pointer",
                    fontSize: "1.3em"
                }
            },
            Ns = Ps;
        const Ms = __webpack_require__.p + "static/media/xiaolian.04f8fccbe5ab90a21bfb840dc6950fc5.svg";
        const Os = {
                line: {
                    height: "1px",
                    background: "rgb(74, 74, 74)",
                    margin: ".5em auto"
                },
                titlle: {
                    color: "rgb(255, 169, 169)",
                    fontSize: ".9em",
                    margin: ".5em 0"
                },
                content: {
                    fontSize: ".8em",
                    margin: ".3em 0",
                    color: "#e4e4e4"
                },
                about: {
                    fontSize: ".789em",
                    color: "rgb(255, 194, 194)"
                }
            },
            Ds = function() {
                return t().createElement(t().Fragment, null, t().createElement("p", {
                    style: Os.titlle
                }, "\u4e0b\u8f7d\u89c6\u9891"), t().createElement("div", {
                    style: Os.line
                }), t().createElement("p", {
                    style: Os.content
                }, "\u8bf7\u67e5\u770b\u4e0a\u65b9\u8d8a\u5149\u6d4f\u89c8\u5668"))
            },
            Bs = document.body.clientHeight < 500;
        const qs = {
                line: {
                    height: "1px",
                    background: "rgb(74, 74, 74)",
                    margin: ".5em auto"
                },
                titlle: {
                    color: "rgb(255, 169, 169)",
                    fontSize: "1.23em",
                    margin: ".5em 0"
                },
                content: {
                    color: "#e4e4e4",
                    fontSize: "1.2em",
                    margin: ".3em 0"
                },
                about: {
                    fontSize: ".789em",
                    color: "rgb(255, 194, 194)"
                }
            },
            Us = function() {
                return (0, e.useEffect)((() => {}), []), t().createElement("div", {
                    style: {
                        textAlign: "center"
                    }
                }, t().createElement("p", {
                    style: qs.titlle
                }, "\u795e\u5947\u5546\u5e97"), t().createElement("div", {
                    style: qs.line
                }), t().createElement("p", {
                    style: qs.content
                }, "\u4e0a\u767e\u79cd\u96f6\u98df5\u6bdb\u8d77\uff01\u6ee120\u5305\u90ae\uff01", t().createElement("br", null), "\u6b63\u54c1\u65b0\u65e5\u671f\uff0c\u8d28\u91cf\u4fdd\u8bc1\uff01", t().createElement("br", null), "\u4e70\u96f6\u98df\u6765\u795e\u5947\u5546\u5e97"), t().createElement("p", {
                    style: qs.content
                }, "\u9996\u9875\u4e0a\u65b9\u8fd8\u6709\u62a2\u767e\u5143\u96f6\u98df\u5927\u793c\u5305\u6d3b\u52a8"), t().createElement("p", {
                    style: qs.content
                }, t().createElement("p", {
                    style: {
                        color: "yellow",
                        fontSize: "1em",
                        marginTop: "0",
                        marginBottom: "0.5em"
                    }
                }, "\u5b98\u7f51\u5730\u5740(\u6d4f\u89c8\u5668\u8f93\u5165)\uff1a  ", t().createElement("a", {
                    style: {
                        fontSize: "1.5em"
                    },
                    href: "https://sq.vving.vip"
                }, "SQ.Vving.Vip")), t().createElement("p", {
                    style: {
                        textAlign: "center"
                    }
                }, t().createElement("a", {
                    style: {
                        textDecoration: "underline"
                    },
                    href: "https://sq.vving.vip?a=m1",
                    target: "_blank"
                }, "\u70b9\u6211\u76f4\u63a5\u524d\u5f80", Bs ? " (\u63a8\u8350\u4f7f\u7528\u6d4f\u89c8\u5668\u8bbf\u95ee)" : ""))))
            };

        function zs(e) {
            return t().createElement("div", {
                style: Fs.ep
            }, t().createElement("input", {
                style: Fs.cbox,
                type: "checkbox",
                id: e.id,
                checked: e.select,
                onChange: t => e.setSelect(e.name, !e.select)
            }), t().createElement("label", {
                htmlFor: e.id
            }, e.name))
        }
        const Fs = {
                line: {
                    height: "1px",
                    background: "rgb(74, 74, 74)",
                    margin: ".5em auto"
                },
                title: {
                    color: "rgb(255, 169, 169)",
                    fontSize: "1em",
                    margin: ".5em 0"
                },
                content: {
                    fontSize: "1em",
                    margin: ".3em 0",
                    color: "#e4e4e4"
                },
                about: {
                    fontSize: ".789em",
                    color: "rgb(255, 194, 194)"
                },
                space: {
                    display: "inline-block",
                    margin: "0 .5em"
                },
                ep: {
                    display: "inline-block",
                    margin: ".2em .3em",
                    cursor: "pointer"
                },
                button: {
                    cursor: "pointer",
                    color: "#ffcccc"
                }
            },
            js = function(n) {
                const i = n.videos[0].name,
                    [r, o] = (0, e.useState)(n.videos[0].source.eps),
                    s = e => {
                        o((t => t.map(((t, n) => ({
                            ...t,
                            select: e
                        })))))
                    },
                    a = (e, t) => {
                        o((n => n.map(((n, i) => n.name === e ? {
                            ...n,
                            select: t
                        } : n))))
                    },
                    l = () => {
                        window.hasOwnProperty("__VVING__") && r.forEach(((e, t) => {
                            e.select && setTimeout((() => {
                                window.__VVING__.callHandler("dl-m3u8", "".concat(i, " ").concat(e.name), e.url)
                            }), 100 * t)
                        }))
                    };
                return t().createElement(t().Fragment, null, t().createElement("p", {
                    style: Fs.title
                }, "\u4e00\u952e\u4e0b\u8f7d\u5168\u96c6"), t().createElement("div", {
                    style: Fs.line
                }), t().createElement("div", {
                    style: Fs.content
                }, t().createElement("p", null, "\u5fc5\u987b\u6761\u4ef6\u3010\u5b89\u5353\u5df2\u53ef\u7528\uff0cIOS\u8bf7\u7b49\u5f85\u66f4\u65b0\u3011\uff1a"), t().createElement("p", null, "1. \u4f7f\u7528\u8d8a\u5149\u5b9d\u76d2\u6700\u65b0\u7248 \u4e0b\u8f7d\u5730\u5740\uff1aYG.Vving.Vip"), t().createElement("p", null, "2. \u4e0b\u8f7d\u65f6\u5148\u70b9\u51fb\u64ad\u653e\u786e\u4fdd\u8981\u4e0b\u8f7d\u7684\u89c6\u9891\u6709\u753b\u9762"), t().createElement("p", null, "\u4e0b\u8f7d\u540e\u5728\u54ea\u67e5\u770b: \u70b9\u51fb \u83dc\u5355 \u300b\u89c6\u9891\u7f13\u5b58")), t().createElement("div", {
                    style: Fs.line
                }), (() => {
                    const e = function() {
                        const e = RegExp("yg/mob/(.*?)$"),
                            t = window.navigator.userAgent.match(e);
                        return t ? Number(t[1]) : 0
                    }();
                    return 0 === e || e < .22 ? t().createElement("p", null, "\uff01\u9700\u8981\u4f7f\u7528\u8d8a\u5149\u6d4f\u89c8\u5668\u6700\u65b0\u7248") : t().createElement(t().Fragment, null, t().createElement("p", null, i), t().createElement("div", {
                        style: {
                            maxHeight: "15em",
                            overflowY: "scroll"
                        }
                    }, t().createElement("div", {
                        style: {
                            ...Fs.content,
                            fontSize: "1em"
                        }
                    }, r.map(((e, n) => t().createElement(zs, {
                        key: e.url,
                        id: n,
                        name: e.name,
                        select: !!e.select,
                        setSelect: a
                    }))))), t().createElement("div", {
                        style: {
                            display: "flex"
                        }
                    }, t().createElement("div", null, t().createElement("span", {
                        style: Fs.button,
                        onClick: l
                    }, "\u4e0b\u8f7d"), t().createElement("div", {
                        style: Fs.space
                    }), t().createElement("span", {
                        style: Fs.button,
                        onClick: () => s(!0)
                    }, "\u5168\u9009"), t().createElement("div", {
                        style: Fs.space
                    }), t().createElement("span", {
                        style: Fs.button,
                        onClick: () => s(!1)
                    }, "\u5168\u4e0d\u9009"))))
                })())
            };
        var Hs = __webpack_require__(318),
            Ws = __webpack_require__.n(Hs);

        function Vs(n) {
            const [i, r] = (0, e.useState)(!0);
            return i ? t().createElement("div", {
                style: Xs.bg,
                id: "dlm3u8-msg"
            }, t().createElement(js, n), t().createElement("button", {
                style: Xs.button,
                onClick: () => {
                    r(!1)
                }
            }, "\u5173\u95ed")) : null
        }
        class Qs extends e.Component {
            render() {
                return t().createElement(Vs, this.props)
            }
        }
        Qs.show = e => {
            let n = document.getElementById("dlm3u8-container");
            n || (n = document.createElement("div"), n.id = "message-container", document.body.appendChild(n));
            const r = i().createPortal(t().createElement(Qs, {
                videos: e
            }), n, +new Date);
            i().render(r, n)
        };
        const $s = Qs;
        let Ks = {
            background: "linear-gradient( rgb(82, 24, 24), rgb(73, 23, 76) )",
            position: "absolute",
            left: "50%",
            top: "2em",
            padding: "1em",
            transform: "translate(-50%, 0%)",
            width: "30em",
            opacity: ".9",
            borderRadius: "2px",
            color: "rgb(129, 255, 35)",
            boxShadow: "0 0 5px #000"
        };
        window.mobile && (Ks.top = "1em", Ks.left = "1em", Ks.right = "1em", Ks.transform = "none", Ks.width = "none", Ks.opacity = 1);
        const Xs = {
            bg: Ks,
            titlle: {
                fontSize: ".9em",
                margin: ".5em 0"
            },
            content: {
                color: "#e4e4e4",
                fontSize: ".8em",
                margin: ".2em 0"
            },
            about: {
                fontSize: ".789em",
                color: "rgb(255, 194, 194)"
            },
            button: {
                marginLeft: ".5em",
                marginTop: ".7em",
                padding: ".26em 1.6em",
                background: "#272727",
                color: "#e4e4e4",
                border: "1px solid",
                borderColor: "#6b6d00",
                float: "right"
            },
            line: {
                height: "1px",
                background: "rgb(74, 74, 74)",
                margin: ".5em auto"
            }
        };
        class Ys extends e.Component {
            constructor(e) {
                super(e), this.close = () => {
                    window.close_switch()
                }, this.move = () => {
                    window.set_auto_close_switch()
                }, this.buyVip = () => {
                    this.props.vip, bs("link", "https://m1-z2.cloud.nnpp.vip:2223/jiasu/jihuo.html", "bq1f3pg6kkms2ue2jnag", "http://jiasu.m1907.cn")
                }, this.state = {
                    videos: this.props.videos,
                    video: this.props.video,
                    closeText: 15
                }, this.render_videos = this.render_videos.bind(this), this.render_qualitys = this.render_qualitys.bind(this)
            }
            componentDidMount() {
                window.mobile || (this.t = setInterval((() => {
                    1 === this.state.closeText ? clearInterval(this.t) : this.setState({
                        closeText: this.state.closeText - 1
                    })
                }), 1e3))
            }
            componentWillUnmount() {
                clearInterval(this.t)
            }
            render() {
                return t().createElement("div", {
                    style: {
                        flex: 1,
                        marginLeft: "1em",
                        marginBottom: "2em"
                    },
                    onMouseMove: this.move
                }, t().createElement("div", {
                    style: Gs.close,
                    onClick: this.close
                }, "\xd7"), !window.mobile && this.props.auto_close_switch ? t().createElement("div", {
                    style: {
                        float: "right",
                        marginTop: ".7em",
                        marginRight: ".2em",
                        fontSize: ".9em"
                    }
                }, "(", this.state.closeText, ")") : null, window.mobile ? t().createElement("div", null, t().createElement("img", {
                    style: {
                        width: "100%",
                        padding: "1em 0 0em 0",
                        cursor: "pointer"
                    },
                    src: "".concat(I, "https://s1.cloud.nnpp.vip:2223/m1/shop.webp"),
                    alt: "\u795e\u5947\u5546\u5e97\u96f6\u98df5\u6bdb\u8d77",
                    onClick: () => {
                        ys(), fs.show(t().createElement(Us, null))
                    }
                })) : null, t().createElement("div", {
                    style: {
                        marginBottom: "1em",
                        color: "#ffd6d6"
                    }
                }, t().createElement("br", null), "\u5f53\u524d\u64ad\u653e\uff1a", t().createElement("br", null), this.props.video.name, " ", this.props.quality_name, t().createElement("br", null), t().createElement("span", {
                    style: Gs.tips
                }, "(\u82e5\u9ed8\u8ba4\u64ad\u653e\u7684\u89c6\u9891\u540d\u79f0\u4e0d\u5bf9\uff0c\u8bf7\u624b\u52a8\u9009\u62e9)"), t().createElement("br", null), t().createElement("span", {
                    style: Gs.tips
                }, "\u64ad\u653e\u5361\u3001\u6e05\u6670\u5ea6\u4f4e\u3001\u96c6\u6570\u4e0d\u5168\uff0c\u8bf7\u5237\u65b0\u9875\u9762"), t().createElement("br", null), t().createElement("input", {
                    type: "checkbox",
                    name: "",
                    id: "video-skip",
                    defaultChecked: this.props.skip,
                    onChange: e => {
                        window.set_skip(e.target.checked)
                    },
                    style: {
                        verticalAlign: "middle"
                    }
                }), t().createElement("label", {
                    htmlFor: "video-skip",
                    style: {
                        fontSize: ".7em",
                        color: "#a5a5a5"
                    }
                }, "\u8df3\u8fc7\u7247\u5934\u7247\u5c3e\u5e76\u81ea\u52a8\u64ad\u653e\u4e0b\u4e00\u96c6"), t().createElement("div", {
                    style: {
                        ...Gs.tips,
                        marginTop: "1em",
                        color: "rgb(255, 234, 234)"
                    }
                }, t().createElement("img", {
                    src: "/warning.jpg",
                    alt: "\u8b66\u544a"
                }))), t().createElement("span", {
                    style: Gs.tips
                }, "\u82e5\u4e00\u76f4\u52a0\u8f7d\u4e0d\u51fa\u6765\u8bf7\u65ad\u5f00wifi\u75284G/5G\u8bd5\u8bd5"), t().createElement("br", null), t().createElement("div", null, this.props.videos.map(this.render_videos)), t().createElement("p", {
                    style: {
                        cursor: "pointer",
                        fontSize: ".9em",
                        marginTop: ".5em"
                    },
                    onClick: () => window.jiexi(1)
                }, "\u64ad\u653e\u7684\u89c6\u9891\u540d\u79f0\u4e0d\u5bf9\uff1f\u70b9\u6211\u624b\u52a8\u641c\u7d22"), t().createElement("p", {
                    style: {
                        cursor: "pointer",
                        fontSize: ".9em",
                        marginTop: "1em"
                    },
                    onClick: () => $s.show(this.props.videos)
                }, "\u4e00\u952e\u4e0b\u5168\u96c6"), t().createElement("div", {
                    style: {
                        marginTop: "2em"
                    }
                }, window.mobile ? null : t().createElement("div", null, t().createElement("img", {
                    style: {
                        width: "100%",
                        padding: "0em 0 1em 0",
                        cursor: "pointer"
                    },
                    src: "".concat(I, "https://s1.cloud.nnpp.vip:2223/m1/shop.webp"),
                    alt: "\u795e\u5947\u5546\u5e97\u96f6\u98df5\u6bdb\u8d77",
                    onClick: () => {
                        ys(), fs.show(t().createElement(Us, null))
                    }
                })), this.props.ads.map((e => ((e, n) => {
                    let i;
                    return i = "link" === e.clickType ? t().createElement("p", {
                        key: e.clickId,
                        style: {
                            cursor: "pointer",
                            margin: "0.2em 0"
                        },
                        onClick: () => bs("link", e.clickContent, e.clickId, e.showName)
                    }, e.showName) : t().createElement("p", {
                        key: e.clickId,
                        style: {
                            cursor: "pointer",
                            margin: "0.2em 0"
                        },
                        onClick: () => bs("text", e.clickContent, e.clickId, e.showName),
                        ref: t => n(t, e.clickId)
                    }, e.showName), i
                })(e, this.props.regAdNode))), t().createElement("p", {
                    style: {
                        cursor: "pointer",
                        fontSize: ".9em",
                        margin: ".5em 0 1em"
                    },
                    onClick: () => fs.show(t().createElement(Es, null))
                }, t().createElement("span", {
                    style: {
                        color: "#ff6161",
                        position: "relative",
                        top: "-0.0em"
                    }
                }, "new "), "\u8d8a\u5149\u6d4f\u89c8\u5668 \u89c6\u9891\u589e\u5f3a\u529f\u80fd\u9884\u89c8\u7248")), t().createElement("p", {
                    style: {
                        fontSize: ".9em",
                        marginBottom: ".5em",
                        cursor: this.props.vip ? "auto" : "pointer"
                    },
                    onClick: this.buyVip
                }, this.props.vip ? "VIP\u89c6\u9891\u52a0\u901f\u670d\u52a1\u5df2\u5f00\u542f \ud83d\ude80" : "\u6fc0\u6d3b\u52a0\u901f"), t().createElement("p", {
                    style: {
                        fontSize: ".9em",
                        marginBottom: ".5em",
                        marginTop: "0"
                    }
                }, t().createElement("a", {
                    href: "https://m1907.top",
                    target: "_blank"
                }, this.props.vip ? "\u89c6\u9891\u52a0\u901f\u670d\u52a1\u7531KKVOD\u63d0\u4f9b" : "\u514d\u8d39\u89c6\u9891\u52a0\u901f\u5df2\u5f00\u542f \u7531KKVOD\u63d0\u4f9b")), t().createElement("p", {
                    style: {
                        fontSize: ".9em",
                        marginBottom: ".789em"
                    }
                }, "\u64ad\u653e\u5f88\u5361\u5c31\u5237\u65b0 !!!"), t().createElement("p", {
                    style: {
                        cursor: "pointer",
                        fontSize: ".9em",
                        marginTop: "0",
                        marginBottom: "0"
                    },
                    onClick: () => fs.show(t().createElement(Ds, null))
                }, "\u600e\u4e48\u4e0b\u8f7d\u6216\u7f13\u5b58\u89c6\u9891\uff1f"), t().createElement("p", {
                    style: {
                        fontSize: ".9em",
                        marginBottom: ".5em",
                        marginTop: "0.5em"
                    }
                }, "\u66f4\u9ad8\u753b\u8d28\uff0c\u66f4\u5feb\u901f\u5ea6\uff0c\u656c\u8bf7\u671f\u5f85\uff01"), t().createElement("div", {
                    style: Gs.about
                }, t().createElement("p", {
                    className: "surprise"
                }, "\u8fd9\u4e2a\u4e16\u754c\u6709\u5f88\u591a\u6709\u94b1\u4eba\uff0c\u4f46\u6709\u66f4\u591a\u66f4\u591a\u7a77\u4eba\uff0c\u6709\u5f88\u591a\u5403\u4e0d\u8d77\u996d\uff0c\u4e0a\u4e0d\u8d77\u5b66\u7684\u4eba\uff0c\u7535\u5f71\u662f\u4e00\u79cd\u6587\u5316\uff0cM1907\u5e0c\u671b\u80fd\u8ba9\u66f4\u591a\u4eba\u63a5\u89e6\u5230\u7535\u5f71\u6587\u5316\uff0c\u80fd\u5e2e\u52a9\u6539\u53d8\u4ed6\u4eec\u7684\u751f\u6d3b\uff0c\u8ba9\u4ed6\u4eec\u7684\u751f\u6d3b\u66f4\u7f8e\u597d"), t().createElement("p", {
                    className: "surprise"
                }, "M1907\u6240\u6709\u529f\u80fd\u5747\u514d\u8d39\u4e3a\u5927\u5bb6\u63d0\u4f9b! \u652f\u6301\u6211\u4eec\u53ef\u4ee5\u5f00\u901aVIP\u52a0\u901f\uff0c\u8ba9\u6211\u4eec\u4e3a\u5927\u5bb6\u63d0\u4f9b\u66f4\u597d\u7684\u4f53\u9a8c(\u4e0d\u5f00\u901a\u4e5f\u6ca1\u6709\u4efb\u4f55\u9650\u5236)! \u89c6\u9891\u4e2d\u7684\u5e7f\u544a\u4e3a\u7b2c\u4e09\u65b9\u6dfb\u52a0\uff0c\u5207\u52ff\u76f8\u4fe1! "), t().createElement("p", {
                    className: "surprise"
                }, "\u6709\u6761\u4ef6\u7684\uff0c\u8bf7\u5927\u5bb6\u591a\u53bb\u5f71\u9662\u89c2\u5f71\uff0c\u4f1a\u6709\u66f4\u597d\u7684\u89c2\u5f71\u6548\u679c\uff0c\u7535\u5f71\u4e5f\u5c31\u4e0a\u6620\u7684\u65f6\u5019\u8d5a\u94b1\uff0c\u8bf7\u5927\u5bb6\u5bf9\u4ed6\u4eec\u591a\u591a\u652f\u6301\uff01"), t().createElement("p", {
                    className: "surprise",
                    style: {
                        color: "#525252",
                        textAlign: "right"
                    }
                }, "\u5173\u4e8eM1907")), t().createElement("p", {
                    style: Gs.m1907
                }, t().createElement("img", {
                    src: Ms
                })))
            }
            render_videos(e, n) {
                let i = 0 === n;
                return t().createElement("div", {
                    key: n,
                    style: {
                        marginBottom: ".789em"
                    }
                }, t().createElement("div", {
                    onClick: () => {
                        window.switch_video(e, this.state.videos)
                    },
                    style: {
                        cursor: "pointer"
                    }
                }, e.name, parseInt(e.year) ? t().createElement("span", {
                    style: Gs.year
                }, e.year) : null), t().createElement("div", {
                    style: {
                        paddingLeft: "0"
                    }
                }, this.render_qualitys(e, i)))
            }
            render_qualitys(e) {
                let n = arguments.length > 1 && void 0 !== arguments[1] && arguments[1];
                const i = le();
                let r = [];
                for (let o in e.source.eps) {
                    let s = !1; - 1 !== e.source.eps[o].name.indexOf("\u7b2c") && -1 !== e.source.eps[o].name.indexOf("\u96c6") && n && Number(o) + 1 === this.props.ep && (s = !0);
                    let a = !1;
                    i.hasOwnProperty(e.name) && i[e.name].ep - 1 >= o && (a = !0), r.push(t().createElement("div", {
                        key: o,
                        onClick: () => {
                            window.switch_quality(e, e.source.eps[o].name, e.source.eps[o].url)
                        },
                        style: s ? Gs.qualitySelect : n && a ? Gs.qualityVisited : Gs.quality
                    }, e.source.eps[o].name))
                }
                return r
            }
        }
        const Gs = {
                quality: {
                    display: "inline-block",
                    margin: "0 1em .5em .5em",
                    color: "#ffcdcd",
                    fontSize: "0.789em",
                    cursor: "pointer"
                },
                qualityVisited: {
                    display: "inline-block",
                    margin: "0 1em .5em .5em",
                    color: "rgb(187, 159, 159)",
                    fontSize: "0.789em",
                    cursor: "pointer"
                },
                qualitySelect: {
                    display: "inline-block",
                    margin: "0 1em .5em .5em",
                    color: "#ffcdcd",
                    fontSize: "0.789em",
                    cursor: "pointer",
                    borderBottom: "1px solid rgb(159, 218, 0)"
                },
                year: {
                    color: "rgb(255, 121, 114)",
                    fontSize: ".789em",
                    paddingLeft: ".2em",
                    verticalAlign: "top"
                },
                close: {
                    float: "right",
                    fontSize: "1.6em",
                    cursor: "pointer",
                    borderRadius: "2em",
                    marginRight: "1em"
                },
                tips: {
                    fontSize: ".7em",
                    color: "#a5a5a5"
                },
                about: {
                    marginTop: "2em"
                },
                m1907: {
                    opacity: ".1",
                    position: "absolute",
                    fontSize: "1.62em",
                    left: "1.7em",
                    bottom: "1.5em",
                    margin: 0,
                    fontFamily: "fantasy",
                    pointerEvents: "none"
                },
                ad: {
                    padding: ".5em",
                    background: "linear-gradient(to right, red, #2b529c)",
                    color: "rgb(159, 218, 0)",
                    fontSize: ".9em",
                    textAlign: "center",
                    borderRadius: "2px",
                    cursor: "pointer"
                },
                warn: {
                    textShadow: "0px 0px 5px #000",
                    background: "rgb(37, 47, 21)",
                    padding: "0 .3em",
                    margin: "0 .2em",
                    display: "inline-block"
                }
            },
            Js = Ys;
        const Zs = __webpack_require__.p + "static/media/qq.808790a19744c55d5953d7b6003eae08.svg";
        const ea = {
                line: {
                    height: "1px",
                    background: "rgb(74, 74, 74)",
                    margin: ".5em auto"
                },
                titlle: {
                    color: "rgb(255, 169, 169)",
                    fontSize: ".9em",
                    margin: ".5em 0"
                },
                content: {
                    fontSize: ".8em",
                    margin: ".3em 0",
                    color: "rgb(255, 58, 98)"
                },
                about: {
                    fontSize: ".789em",
                    color: "rgb(255, 194, 194)"
                }
            },
            ta = function() {
                return t().createElement(t().Fragment, null, t().createElement("p", {
                    style: ea.titlle
                }, "mplayer"), t().createElement("div", {
                    style: ea.line
                }), t().createElement("p", {
                    style: ea.content
                }, "\u89c6\u9891\u4e3e\u62a5\uff0c\u83b7\u53d6\u63a5\u53e3\u8bf7\u8054\u7cfbQQ\uff1a3366 129 856 (\u975e\u5ba2\u670dQQ)"), t().createElement("p", {
                    style: ea.content
                }, t().createElement("a", {
                    href: "https://m1907.top",
                    target: "_blank"
                }, "\u652f\u6301M3U8\u683c\u5f0f\u7684\u89c6\u9891\u64ad\u653e\u5668 - mplayer - m1907")))
            };
        class na extends e.Component {
            constructor(e) {
                super(e), this.regAdNode = (e, t) => {
                    e && (this.adNodes.hasOwnProperty(t) || (this.adNodes[t] = {
                        e: e,
                        see: !1
                    }))
                }, this.checkAds = () => {
                    for (const e in this.adNodes) this.adIsShow(e)
                }, this.adIsShow = e => {
                    let t = () => {
                            this.adNodes[e].see = !0
                        },
                        n = this.switchEle.current.clientHeight,
                        i = this.switchEle.current.scrollHeight;
                    const r = this.adNodes[e].e.getBoundingClientRect().top;
                    i - n > 100 ? n > r && (this.adNodes[e].see || t()) : t()
                }, this.onScroll = () => {
                    this.checkAds()
                }, this.m1907 = () => {
                    fs.show(t().createElement(ta, null))
                }, this.switchEle = t().createRef(), this.adNodes = {}
            }
            componentDidMount() {
                this.checkAds()
            }
            render() {
                return t().createElement("div", {
                    className: "show",
                    style: ra.bg,
                    ref: this.switchEle,
                    onScroll: this.onScroll
                }, t().createElement(Js, {
                    videos: this.props.videos,
                    video: this.props.video,
                    quality_name: this.props.quality_name,
                    auto_close_switch: this.props.auto_close_switch,
                    skip: this.props.skip,
                    ads: this.props.ads,
                    regAdNode: this.regAdNode,
                    ep: this.props.ep,
                    vip: this.props.vip
                }), t().createElement("div", {
                    style: ra.ver,
                    onClick: this.m1907,
                    title: "\u89c6\u9891\u4e3e\u62a5\uff0c\u83b7\u53d6\u63a5\u53e3\u5730\u5740"
                }, t().createElement("div", {
                    style: ra.label
                }, "M1907"), t().createElement("div", {
                    style: ra.labelVer
                }, "V2220.06.11"), t().createElement("div", {
                    style: ra.labelHelp
                }, t().createElement("img", {
                    src: Zs,
                    height: "100%"
                }))))
            }
        }
        let ia = {
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            background: "linear-gradient(red, #1d1d33)",
            position: "absolute",
            top: "5em",
            right: "5em",
            bottom: "5em",
            width: "18em",
            borderRadius: "2px",
            overflow: "auto",
            padding: "1em",
            color: "rgb(159, 218, 0)",
            textShadow: "0 1px 1px #00000082"
        };
        window.mobile && (ia = {
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
            background: "linear-gradient(red, #1d1d33)",
            position: "absolute",
            right: "1em",
            left: "1em",
            top: "1em",
            bottom: "1em",
            borderRadius: "2px",
            overflow: "auto",
            padding: "1em",
            color: "rgb(159, 218, 0)",
            textShadow: "0 1px 1px #00000082",
            paddingBottom: "10em"
        });
        const ra = {
                bg: ia,
                ver: {
                    opacity: ".3",
                    textAlign: "center",
                    cursor: "pointer"
                },
                label: {
                    background: "#ff0000",
                    display: "inline-block",
                    color: "#fff",
                    fontSize: ".8em",
                    padding: "0 .5em",
                    textShadow: "none",
                    height: "1.456em",
                    lineHeight: "1.456em",
                    verticalAlign: "middle"
                },
                labelVer: {
                    background: "rgb(255, 63, 63)",
                    display: "inline-block",
                    color: "#000",
                    fontSize: ".8em",
                    padding: "0 .5em",
                    textShadow: "none",
                    height: "1.456em",
                    lineHeight: "1.456em",
                    verticalAlign: "middle"
                },
                labelHelp: {
                    background: "#ea6363",
                    display: "inline-block",
                    color: "#000",
                    fontSize: ".8em",
                    padding: "0 .5em",
                    textShadow: "none",
                    height: "1.456em",
                    verticalAlign: "middle"
                },
                updateText: {
                    color: "#f90000",
                    margin: "0",
                    textAlign: "center",
                    fontSize: ".789em",
                    opacity: ".7",
                    borderRadius: ".2em",
                    border: "1px dashed rgb(251,0,0)",
                    width: "max-content",
                    margin: "auto",
                    padding: "0 1em"
                }
            },
            oa = na;
        const sa = function e(t, n) {
            let i = document.createElement("script");
            i.src = t, i.onerror = () => {
                if (-1 === t.indexOf("cntv-203") || -1 === t.indexOf("ckplay"));
                else {
                    e("https://m1-cn-201.cloud.nnpp.vip:2223/z1/js/ckplayer.js", n)
                }
            }, document.getElementsByTagName("head")[0].appendChild(i), n && (i.onload = () => n())
        };
        class aa extends e.Component {
            constructor(e) {
                super(e), this.init = () => {
                    new window.TencentCaptcha(document.getElementById("aCaptcha"), "2047369822", this.verify).show()
                }, this.verify = async e => {
                    if (0 === e.ret) try {
                        let t = new URLSearchParams;
                        t.set("t", e.ticket), t.set("r", e.randstr);
                        let n = await fetch("https://m1-a1.cloud.nnpp.vip:2223/api/captcha", {
                            method: "POST",
                            body: t
                        });
                        1 === await n.json() ? window.jiexi() : alert("\u9a8c\u8bc1\u5931\u8d25")
                    } catch (t) {
                        console.log(t)
                    }
                }
            }
            componentDidMount() {
                sa("https://ssl.captcha.qq.com/TCaptcha.js", this.init)
            }
            render() {
                return t().createElement("div", {
                    id: "aCaptcha",
                    style: {
                        width: "",
                        height: "",
                        color: "#fff",
                        textAlign: "center"
                    }
                }, t().createElement("h1", null, "\u8bbf\u95ee\u9891\u7387\u8fc7\u9ad8\uff0c\u8bf7\u5b8c\u6210\u9a8c\u8bc1\uff0c\u786e\u8ba4\u8fd9\u4e0d\u662f\u673a\u5668\u8bf7\u6c42"))
            }
        }
        const la = aa;
        class ca extends e.Component {
            constructor(e) {
                super(e), this.back = () => {
                    window.showAdWindow(!1);
                    let e = document.getElementById("s-video");
                    e && e.play()
                };
                let t = document.getElementById("s-video");
                t && t.pause()
            }
            componentWillMount() {}
            render() {
                return t().createElement("div", {
                    style: ua.window
                }, t().createElement("div", {
                    style: ua.head
                }, t().createElement("span", {
                    style: ua.backButton,
                    onClick: this.back
                }, " < ", t().createElement("span", {
                    style: {
                        fontSize: ".78em"
                    }
                }, "\u7ee7\u7eed\u89c2\u770b"), " "), t().createElement("span", {
                    style: {
                        marginLeft: "1em",
                        fontSize: ".7em"
                    }
                }, t().createElement("span", null, this.props.src))), t().createElement("iframe", {
                    src: "https://m1-t0ay8.cloud.nnpp.vip:2223/t2.html?link=".concat(this.props.src),
                    frameborder: "0",
                    width: "100%",
                    height: "100%"
                }))
            }
        }
        const ua = {
                window: {
                    background: "#fff",
                    zIndex: "999",
                    width: "100vw",
                    height: "100vh",
                    position: "fixed",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0
                },
                head: {
                    background: "#000",
                    color: "#fff",
                    fontSize: "1.6em"
                },
                backButton: {
                    padding: "0 .5em",
                    borderRight: "1px solid #ccc",
                    cursor: "pointer"
                }
            },
            da = ca;
        const ha = {
                line: {
                    height: "1px",
                    background: "rgb(74, 74, 74)",
                    margin: ".5em auto"
                },
                titlle: {
                    fontSize: ".9em",
                    margin: ".5em 0"
                },
                content: {
                    color: "#e4e4e4",
                    fontSize: ".8em",
                    margin: ".2em 0"
                },
                src: {
                    color: "#ffff",
                    fontSize: ".9em",
                    margin: "1em 0"
                },
                about: {
                    fontSize: ".789em",
                    color: "rgb(255, 194, 194)"
                }
            },
            pa = function(e) {
                return t().createElement(t().Fragment, null, t().createElement("p", {
                    style: ha.titlle
                }, "\u5728\u7ebf\u64ad\u653e\u6d4b\u8bd5"), t().createElement("div", {
                    style: ha.line
                }), t().createElement("div", {
                    style: ha.src
                }, t().createElement("span", null, "\u5f53\u524d\u6d4b\u8bd5\u89c6\u9891\u5730\u5740\uff1a"), t().createElement("input", {
                    type: "text",
                    defaultValue: e.src,
                    style: {
                        width: "25em",
                        height: "1.5em"
                    }
                })), t().createElement("p", {
                    style: ha.content
                }, t().createElement("a", {
                    href: "https://m1907.top",
                    target: "_blank"
                }, "\u652f\u6301M3U8\u683c\u5f0f\u7684HTML\u5728\u7ebf\u64ad\u653e\u5668 - mplayer - m1907")), t().createElement("p", {
                    style: ha.content
                }, "\u4e3e\u62a5\u3001\u8ba4\u8bc1 \u8bf7\u8054\u7cfb QQ: 3366 129 856 (\u5907\u6ce8: \u4e3e\u62a5 \u8ba4\u8bc1)"), t().createElement("p", {
                    style: ha.content
                }, "\u6d4b\u8bd5\u6a21\u5f0f\uff0c\u6b63\u5f0f\u4f7f\u7528\u65f6\u8bf7\u4f7f\u7528\u7f51\u9875\u8c03\u7528\uff01"), t().createElement("p", {
                    style: ha.content
                }, "\u7981\u6b62\u7528\u4e8e\u64ad\u653e\u8272\u60c5\u7b49\u8fdd\u6cd5\u89c6\u9891!"))
            };
        var fa = __webpack_require__(466),
            ma = __webpack_require__.n(fa);
        class ga extends e.Component {
            constructor(e) {
                super(e), this.move = () => {
                    this.setState({
                        autoClose: !1
                    })
                }, this.close = e => {
                    e.stopPropagation(), this.setState({
                        show: !1
                    })
                }, this.onClick = e => {
                    this.props.onClick(), this.close(e)
                };
                const t = this.props.closeTime ? this.props.closeTime : window.mobile ? 59 : 10;
                this.state = {
                    timeDown: t,
                    show: !0,
                    autoClose: !0
                };
                let n = null,
                    i = setInterval((() => {
                        !this.props.showSwitch && this.state.timeDown > 1 && (n || (n = document.getElementById("s-video")), n && 4 === n.readyState && this.setState({
                            timeDown: 1
                        })), this.state.autoClose && 1 !== this.state.timeDown ? this.setState({
                            timeDown: this.state.timeDown - 1
                        }) : (clearInterval(i), this.state.autoClose && this.setState({
                            show: !1
                        }))
                    }), 1e3)
            }
            componentDidMount() {}
            render() {
                if (!this.props.showSwitch && this.state.timeDown > 59 && this.setState({
                        timeDown: 60
                    }), !this.state.show) return null;
                let {
                    link: e,
                    title: n
                } = this.props;
                return t().createElement("div", {
                    style: va.bg,
                    onClick: this.onClick,
                    onMouseMove: this.move
                }, t().createElement("div", {
                    style: {
                        display: "initial"
                    }
                }, n), t().createElement("div", {
                    style: {
                        display: "initial",
                        fontSize: ".6789em",
                        color: "#fbdcdc",
                        cursor: "pointer",
                        marginRight: ".5em"
                    }
                }, this.state.autoClose ? t().createElement("span", {
                    style: {
                        color: "rgb(214, 136, 136)"
                    }
                }, " ", this.props.showSwitch ? this.state.timeDown : 1) : t().createElement("span", {
                    style: {
                        fontSize: "1.5em"
                    },
                    onClick: this.close
                }, "\xa0\u5173\u95ed ")))
            }
        }
        let ya = {
            position: "absolute",
            top: "1em",
            right: "1em",
            left: "1em",
            margin: "auto",
            width: "23em",
            padding: ".5em",
            background: "linear-gradient(to left, red, rgb(69, 69, 134))",
            boxShadow: "0px 0px 9px 0px rgb(95, 62, 62)",
            color: "rgb(159, 218, 0)",
            fontSize: ".9em",
            textAlign: "center",
            borderRadius: "2px",
            opacity: ".7",
            cursor: "pointer"
        };
        window.mobile && (ya = {
            position: "absolute",
            top: "1em",
            right: "1em",
            left: "1em",
            margin: "auto",
            padding: ".5em",
            background: "linear-gradient(to left, red, rgb(69, 69, 134))",
            boxShadow: "0px 0px 9px 0px rgb(95, 62, 62)",
            color: "rgb(159, 218, 0)",
            fontSize: ".9em",
            textAlign: "center",
            borderRadius: "2px",
            zIndex: 3
        });
        const va = {
                bg: ya
            },
            ba = ga;
        e.Component;
        let wa = {
            position: "absolute",
            top: "1em",
            right: "1em",
            left: "1em",
            margin: "auto",
            width: "23em",
            padding: ".5em",
            background: "linear-gradient(to left, red, rgb(69, 69, 134))",
            boxShadow: "0px 0px 9px 0px rgb(95, 62, 62)",
            color: "rgb(159, 218, 0)",
            fontSize: ".9em",
            textAlign: "center",
            borderRadius: "2px",
            opacity: ".7",
            cursor: "pointer"
        };
        window.mobile && (wa = {
            position: "absolute",
            top: "1em",
            right: "1em",
            left: "1em",
            margin: "auto",
            padding: ".5em",
            background: "linear-gradient(to left, red, rgb(69, 69, 134))",
            boxShadow: "0px 0px 9px 0px rgb(95, 62, 62)",
            color: "rgb(159, 218, 0)",
            fontSize: ".9em",
            textAlign: "center",
            borderRadius: "2px",
            zIndex: 3
        });
        const _a = function(e) {
                return null
            },
            Sa = "Warning_bg__T5BRv",
            Ca = "Warning_msg__1WIBL",
            ka = "Warning_action__qRe-k",
            Ea = "Warning_button__0vunc",
            xa = "Warning_return__wb20u",
            Ta = "Warning_main__P+VaL",
            La = "Warning_empower__pwAg0",
            Pa = "Warning_yg__hJkTP";
        const Aa = function(n) {
                const [i, r] = (0, e.useState)(!1);
                return t().createElement("div", {
                    className: Sa
                }, t().createElement("div", {
                    className: Ca
                }, window.mobile ? t().createElement("p", {
                    style: {
                        margin: "0",
                        color: "#ff3535"
                    }
                }, "\u4e0b\u62c9\u9605\u8bfb \u2193") : null, t().createElement("h3", null, "M1907 \u4e91\u52a0\u901f \u7ed9\u5927\u5bb6\u7684\u5b89\u5168\u63d0\u793a\uff1a"), t().createElement("h2", null, "\u60a8\u641c\u7d22\u6216\u64ad\u653e\u7684\u89c6\u9891\u6765\u6e90\u4e8e\u4e92\u8054\u7f51\u7b2c\u4e09\u65b9\u7f51\u7ad9\uff0c\u89c6\u9891\u4e2d\u53ef\u80fd\u5305\u542b\u4e0d\u826f\u6c34\u5370\u5e7f\u544a\uff01\u8bf7\u52ff\u76f8\u4fe1"), t().createElement("p", null, "\u8fd9\u91cc\u53ea\u662f\u4e2a\u5ba3\u4f20\u63d0\u793a\uff0c\u4e0d\u7ba1\u70b9", t().createElement("span", {
                    className: Ta
                }, "\u7ee7\u7eed\u89c2\u770b"), "\u8fd8\u662f\u8fd4\u56de\u90fd\u662f", t().createElement("span", {
                    className: Ta
                }, "\u5b89\u5168"), "\u7684")), t().createElement("div", {
                    className: Ca
                }, t().createElement("h5", {
                    style: {
                        marginBottom: ".2rem",
                        color: "#ff3535"
                    }
                }, "M1907 \u4e91\u52a0\u901f \u4f7f\u7528\u6761\u6b3e"), t().createElement("p", {
                    style: {
                        marginTop: "0.2rem"
                    }
                }, "\u89c6\u9891\u4e2d\u7684\u4e0d\u826f\u5e7f\u544a\u76ee\u524d\u5f88\u96be\u53bb\u9664\uff0c\u6211\u4eec\u6b63\u5728\u60f3\u529e\u6cd5\u5904\u7406\uff01", t().createElement("span", {
                    style: {
                        fontSize: "1.1rem",
                        color: "#fd3737"
                    }
                }, "\u82e5\u65e0\u6cd5\u63a5\u53d7\u8fd9\u4e9b\u5e7f\u544a\u8bf7\u70b9\u8fd4\u56de\uff01"))), t().createElement("div", {
                    className: ka
                }, t().createElement("div", {
                    className: "".concat(Ea, " ").concat(xa),
                    onClick: () => {
                        localStorage.setItem("ban", "1"), document.body.innerHTML = '<h3 style="color:#fff">\u611f\u8c22\u6765\u8bbf\uff0c\u64ad\u653e\u5df2\u963b\u6b62\uff0c \u4e3e\u62a5\u8bf7\u8054\u7cfbQQ 3366 129 856 (\u5907\u6ce8: \u4e3e\u62a5)</h3>'
                    }
                }, t().createElement("div", null, "(\u8fd4\u56de)"), "\u4e3e\u62a5/\u5c4f\u853d/\u4e0d\u63a5\u53d7\u4f7f\u7528\u6761\u6b3e"), t().createElement("div", {
                    className: Ea,
                    onClick: () => {
                        n.closeWarning(), i && localStorage.setItem("warning", "1")
                    }
                }, t().createElement("div", null, "(\u7ee7\u7eed\u89c2\u770b)"), "\u6211\u4f1a\u65e0\u89c6\u4e0d\u826f\u5e7f\u544a\uff0c\u4e0d\u4f1a\u76f8\u4fe1\u548c\u4e3b\u52a8\u8bbf\u95ee"), t().createElement("div", null, t().createElement("input", {
                    type: "checkbox",
                    id: "remember",
                    onChange: e => {
                        r(e.target.checked)
                    }
                }), t().createElement("label", {
                    htmlFor: "remember"
                }, "\u4ee5\u540e\u4e0d\u518d\u63d0\u793a")), t().createElement("div", null, t().createElement("p", null, "\u9009\u62e9\u540e\u53ef\u7ee7\u7eed\u89c2\u770b")), t().createElement("p", {
                    className: La
                }, t().createElement("a", {
                    href: "https://m1907.top",
                    onClick: () => (window.parent.location = "https://m1907.top", !1)
                }, "\u6f14\u793a\u7248\uff0c\u4ec5\u4f9b\u4e2a\u4eba\u6d4b\u8bd5\u4f7f\u7528\uff0c\u8bf7\u52ff\u8c03\u7528\u3002", t().createElement("span", {
                    style: {
                        textDecoration: "underline"
                    }
                }, "\u514d\u8d39\u6388\u6743"))), t().createElement("div", {
                    className: "".concat(La, " ").concat(Pa)
                }, t().createElement("a", {
                    href: "https://yg.vving.vip",
                    onClick: () => (window.parent.location = "https://yg.vving.vip", !1)
                }, t().createElement("p", null, "\u63a8\u8350\u4f7f\u7528\u8d8a\u5149\u6d4f\u89c8\u5668"), t().createElement("p", null, "\u65e0\u5e7f\u544a \u65e0\u63a8\u9001 \u9690\u79c1\u4fdd\u62a4"), t().createElement("p", null, "\u652f\u6301\u9009\u96c6 \u5168\u5c4f \u6295\u5c4f \u4e0b\u8f7d"), t().createElement("p", null, "\u4e0b\u8f7d\u5730\u5740\uff1a\u6d4f\u89c8\u5668\u8f93\u5165 YG.Vving.vip"))), t().createElement(_a, {
                    poster: n.poster
                })))
            },
            Ia = "M3u8_warning__gdfmg",
            Ra = "M3u8_title__phah4",
            Na = "M3u8_m1__qIZcr",
            Ma = "M3u8_button__ZI7IO",
            Oa = "M3u8_home__BIkpr",
            Da = "M3u8_url__Uwket",
            Ba = "M3u8_playMsg__gNXW4",
            qa = "M3u8_empower__xOB1u";
        const Ua = function(e) {
            return t().createElement("div", {
                className: Ia
            }, t().createElement("h2", {
                className: Ra
            }, "\u60a8\u5f53\u524d\u6253\u5f00\u7684\u5730\u5740\u4e3a\u4ed6\u4eba\u5206\u4eab\u7ed9\u60a8\u7684\u5feb\u6377\u94fe\u63a5"), t().createElement("p", {
                className: Da
            }, "\u89c6\u9891\u540d\u79f0/\u5730\u5740\u4e3a\uff1a", decodeURI(e.url), t().createElement("p", null, "[", e.url, "]")), t().createElement("p", {
                className: Ba
            }, "\u662f\u5426\u64ad\u653e\u6b64\u89c6\u9891\uff1f"), t().createElement("div", null, t().createElement("div", {
                className: Oa,
                onClick: e.black
            }, "M1907\u9996\u9875"), t().createElement("div", {
                className: Ma,
                onClick: e.play
            }, "\u64ad\u653e")), t().createElement("p", {
                className: Na
            }, "M1907\u4e91\u52a0\u901f\u64ad\u653e\u5668\u4e0d\u9650\u6d41\u91cf\uff0c\u516c\u76ca\u6027\uff0c\u6c38\u4e45\u514d\u8d39\uff0c\u65e0\u5e7f\u544a"), t().createElement("p", {
                className: qa
            }, "\u6f14\u793a\u7248\uff0c\u4ec5\u4f9b\u4e2a\u4eba\u6d4b\u8bd5\u4f7f\u7528\uff0c\u8bf7\u52ff\u8c03\u7528\u3002\u514d\u8d39\u6388\u6743QQ\uff1a3366 129 856"), t().createElement(_a, {
                poster: e.poster
            }))
        };
        const za = __webpack_require__.p + "static/media/list.406234a9dd720e6ade1df2e4588dd5a5.svg";
        const Fa = __webpack_require__.p + "static/media/switch.6e9b5a0f0c13e9fddd470ffd3f7410cd.svg",
            ja = "newUserHome_bg__0t-6F",
            Ha = "newUserHome_text__gOSBF",
            Wa = "newUserHome_search__Hg6N7",
            Va = "newUserHome_input__KD4nK",
            Qa = "newUserHome_button__+0dC6";
        const $a = function(n) {
            const [i, r] = (0, e.useState)("");
            return t().createElement("div", {
                className: ja,
                style: {
                    color: "#000"
                }
            }, t().createElement("p", {
                title: "\u5f69\u86cb",
                onClick: n.onClick,
                className: Ha,
                style: {
                    fontSize: window.mobile ? "2rem" : "5rem"
                },
                "data-text": "M1907 x \u4e91\u52a0\u901f"
            }, "M1907 x \u4e91\u52a0\u901f "), t().createElement("div", {
                className: Wa
            }, t().createElement("input", {
                className: Va,
                type: "text",
                placeholder: "\u8bf7\u8f93\u5165\u6587\u4ef6\u5730\u5740/\u540d\u79f0",
                onChange: e => {
                    r(e.target.value)
                },
                onKeyDown: e => {
                    13 === e.which && window.jiexi(i)
                }
            }), t().createElement("button", {
                className: Qa,
                onClick: () => {
                    window.jiexi(i)
                }
            }, "\u64ad\u653e")), t().createElement(xs, null))
        };
        const Ka = {
                line: {
                    height: "1px",
                    background: "rgb(74, 74, 74)",
                    margin: ".5em auto"
                },
                titlle: {
                    color: "rgb(255, 169, 169)",
                    fontSize: "1em",
                    margin: ".5em 0"
                },
                content: {
                    fontSize: "1em",
                    margin: ".3em 0",
                    color: "#e4e4e4"
                },
                about: {
                    fontSize: ".789em",
                    color: "rgb(255, 194, 194)"
                },
                space: {
                    display: "inline-block",
                    margin: "0 .5em"
                }
            },
            Xa = function() {
                return t().createElement(t().Fragment, null, t().createElement("p", {
                    style: Ka.titlle
                }, "\u8bf7\u622a\u56fe/\u62cd\u7167\u4fdd\u5b58, \u4ee5\u4fbf\u4e0d\u53ef\u7528\u65f6\u5207\u6362"), t().createElement("div", {
                    style: Ka.line
                }), t().createElement("div", {
                    style: Ka.content
                }, t().createElement("div", null, "M1907\u4e91\u52a0\u901f"), t().createElement("span", {
                    style: Ka.space
                }, "\u5f53\u524d\u4e3b\u7ad9:"), t().createElement("span", {
                    style: {
                        color: "#91ff00"
                    }
                }, "im1907.top"), t().createElement("span", {
                    style: Ka.space
                }, "\u5907\u7528:"), t().createElement("div", {
                    style: {
                        color: "#fff",
                        fontSize: "1.2em",
                        display: "inline-block"
                    }
                }, "hi1907.top", t().createElement("span", {
                    style: Ka.space
                }, "my1907.top"))), t().createElement("div", {
                    style: Ka.line
                }), t().createElement("p", {
                    style: Ka.content
                }, "\u6709\u65f6\u53ef\u6253\u5f00\u6709\u65f6\u6253\u4e0d\u5f00\u89e3\u51b3\u529e\u6cd5\uff1a"), t().createElement("p", {
                    style: {
                        ...Ka.content,
                        fontSize: "1em"
                    }
                }, "1.\u591a\u5237\u65b0", t().createElement("br", null), "2.\u4f7f\u7528\u624b\u673a\u6d41\u91cf\u8bd5\u8bd5", t().createElement("br", null), "3.\u6362\u6d4f\u89c8\u5668 / \u6362\u8bbe\u5907", t().createElement("br", null), "4.\u7f51\u7edc\u53ef\u80fd\u88ab\u52ab\u6301\uff0c\u767e\u5ea6\u641c\u7d22\u4fee\u6539DNS", t().createElement("br", null), "5.\u4f7f\u7528\u4e0a\u65b9\u5907\u7528\u5730\u5740"), t().createElement("p", {
                    style: {
                        ...Ka.content,
                        fontSize: ".89em"
                    }
                }, "\u798f\u5efa\u6cc9\u5dde\u7b49\u5730\u533a\uff0c\u8fd0\u8425\u5546\u5728\u8fdb\u884c\u7f51\u7edc\u8bd5\u70b9\uff0c\u53ef\u80fd\u5f71\u54cd\u8bbf\u95ee\uff0c\u53ef\u4ee5\u6362\u6d4f\u89c8\u5668\u8bd5\u8bd5\u3002", t().createElement("br", null)))
            };

        function Ya(n) {
            const [i, r] = (0, e.useState)(!0), [o, s] = (0, e.useState)(!1);
            return i ? t().createElement("div", {
                style: o ? {
                    ...el.bg,
                    left: "0",
                    top: "0",
                    opacity: "1",
                    transform: "none"
                } : el.bg,
                id: "urls-msg"
            }, t().createElement(Xa, null), t().createElement("button", {
                style: el.button,
                onClick: () => {
                    localStorage.setItem("saveUrl", "1"), s(!0), Ws().toJpeg(document.getElementById("urls-msg"), {
                        quality: .95
                    }).then((function(e) {
                        var t = document.createElement("a");
                        t.download = "m1907.jpeg", t.href = e, t.click(), console.log(e)
                    })).catch((e => {})), setTimeout((() => {
                        r(!1)
                    }), 500)
                }
            }, "\u4e00\u952e\u4fdd\u5b58")) : null
        }
        class Ga extends e.Component {
            render() {
                return t().createElement(Ya, this.props)
            }
        }
        Ga.show = () => {
            let e = document.getElementById("message-container");
            e || (e = document.createElement("div"), e.id = "message-container", document.body.appendChild(e));
            const n = i().createPortal(t().createElement(Ga, null), e, +new Date);
            i().render(n, e)
        };
        const Ja = Ga;
        let Za = {
            background: "linear-gradient( rgb(82, 24, 24), rgb(73, 23, 76) )",
            position: "absolute",
            left: "50%",
            top: "2em",
            padding: "1em",
            transform: "translate(-50%, 0%)",
            width: "30em",
            opacity: ".9",
            borderRadius: "2px",
            color: "rgb(129, 255, 35)",
            boxShadow: "0 0 5px #000"
        };
        window.mobile && (Za.top = "1em", Za.left = "1em", Za.right = "1em", Za.transform = "none", Za.width = "none", Za.opacity = 1);
        const el = {
                bg: Za,
                titlle: {
                    fontSize: ".9em",
                    margin: ".5em 0"
                },
                content: {
                    color: "#e4e4e4",
                    fontSize: ".8em",
                    margin: ".2em 0"
                },
                about: {
                    fontSize: ".789em",
                    color: "rgb(255, 194, 194)"
                },
                button: {
                    marginLeft: ".5em",
                    marginTop: ".7em",
                    padding: ".26em 1.6em",
                    background: "#272727",
                    color: "#e4e4e4",
                    border: "1px solid",
                    borderColor: "#6b6d00",
                    float: "right"
                },
                line: {
                    height: "1px",
                    background: "rgb(74, 74, 74)",
                    margin: ".5em auto"
                }
            },
            tl = -1 !== window.navigator.userAgent.indexOf("yg/");
        class nl extends e.Component {
            constructor(e) {
                var n;
                super(e), n = this, this.m1907Url = "m1-z2.cloud.nnpp.vip:2223", this.userUrl = "https://my.qiqtv.cn/", this.writeBody = e => {
                    document.body.innerHTML = e, document.body.style.background = "#fff"
                }, this.isOuser = () => Number(localStorage.getItem("pt")) >= 10800, this.showSpeedupNotice = e => {
                    this.setState({
                        showSpeedupNotice: e
                    })
                }, this.checkLanguage = () => {
                    console.log("%c M1907\u64ad\u653e\u5668 %c \u652f\u6301\u591a\u79cd\u683c\u5f0f\uff0c\u514d\u8d39\u52a0\u901f\u4e0d\u9650\u6d41\u91cf QQ: 3366 129 856 ", "color: #fff; background: red; padding:5px 0;", "background: #7fa3ff;color:#fff; padding:5px 0;");
                    let e = "\u6b63\u5728\u52a0\u8f7d\u89c6\u9891";
                    "tibet" === (0, W.A)("lang") && (e = "\u0f45\u0f74\u0f44\u0f0b\u0f59\u0f58\u0f0b\u0f66\u0f92\u0f74\u0f42\u0f0b\u0f62\u0f7c\u0f42\u0f66\u0f0d"), document.getElementById("l-text").innerText = e, document.getElementById("l-refresh").innerText = "(\u82e5\u957f\u65f6\u95f4\u52a0\u8f7d\u4e0d\u51fa\u6765\u8bf7\u5c1d\u8bd5\u5feb\u8fdb\u6216\u5237\u65b0\u9875\u9762)", document.getElementById("refresh").style.display = "inline-block"
                }, this.showAdWindow = (e, t, n) => {
                    this.setState({
                        show_ad_window: e,
                        ad_window_title: t,
                        ad_window_link: n
                    })
                }, this.paixu = e => {
                    for (let t = 0; t < e.length; t++)
                        for (let n = t; n > 0; n--)
                            if (e[n].source.eps.length > e[n - 1].source.eps.length) {
                                let t = e[n - 1],
                                    i = e[n];
                                e[n] = t, e[n - 1] = i
                            } else e[n].source.eps.length, e[n - 1].source.eps.length;
                    return e
                }, this.spStatus = e => !!this.state.fromVip || 0 !== e.sp, this.jiexi = async function() {
                    let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0,
                        i = n.m1907Url;
                    if (window.location.host !== i && "m1-z2.cloud.vving.vip:2223" !== window.location.host) {
                        if (1 == Math.floor(2 * Math.random() + 1)) {
                            const e = '<div style="color: #000"><br>\u52a0\u901f\u5931\u8d25 \u8bf7\u8054\u7cfb\u5ba2\u670d \u9519\u8bef\u4ee3\u7801 103</div>';
                            return void n.writeBody(e)
                        }
                    }
                    try {
                        let i = (0, W.A)("jx");
                        0 === e && i && n.setState({
                            m3u8_warning: !0
                        }), 1 === e && (n.setState({
                            show_switch: !1,
                            showTuijian: !0
                        }), i = "", window.history.pushState("", "", "/"), n.postMsg({
                            type: "name",
                            name: i
                        })), 0 !== e && 1 !== e && (i = e, window.history.pushState("", "", "/?jx=" + e), n.postMsg({
                            type: "name",
                            name: e
                        }));
                        const r = "//m1-a1.cloud.nnpp.vip:2223/";
                        if (i && (-1 !== i.indexOf(".m3u8") || -1 !== i.indexOf(".mp4"))) {
                            let e = "".concat(r, "api/po/");
                            0;
                            const o = await fetch(e, {
                                    credentials: "include"
                                }),
                                s = await o.json();
                            if (n.setState({
                                    url: i,
                                    show_tuijian: !1,
                                    poster: s
                                }), n.updateHtmlTitle("\u652f\u6301M3U8\u683c\u5f0f\u7684HTML\u5728\u7ebf\u64ad\u653e\u5668", ""), window.self == window.top || window.document.referrer === n.userUrl || -1 === window.document.referrer.indexOf(".m1907.top")) {
                                let e = await n.getBlockedUrl();
                                for (const t in e)
                                    if (-1 !== i.indexOf(e[t])) return void(window.location.href = "/ruhua.jpeg");
                                fs.show(t().createElement(pa, {
                                    src: i
                                })), n.checkSafeUrl(i)
                            }
                            return 0
                        }
                        if (i) {
                            if (-1 !== i.indexOf("\u8272\u60c5") || -1 !== i.indexOf("\u5f3a\u5978")) return void(window.location.href = "/ruhua.jpeg");
                            if (-1 !== i.indexOf("bilibili.com")) return;
                            if (B && !Cs && !n.isOuser()) {
                                const e = ["\u6625\u539f\u5e84\u7684\u7ba1\u7406\u4eba", "\u56db\u6708\u7269\u8bed", "\u65f6\u5149\u4ee3\u7406\u4eba", "\u9003\u907f\u867d\u7136\u53ef\u803b\u4f46\u6709\u7528", "\u4e09\u60a6\u6709\u4e86\u65b0\u5de5\u4f5c", "\u4e2d\u56fd\u5947\u8c2d", "\u7231\u5403\u62c9\u9762\u7684\u5c0f\u6cc9\u540c\u5b66", "\u767e\u5996\u8c31", "\u5927\u7406\u5bfa\u65e5\u5fd7", "\u96fe\u5c71\u4e94\u884c", "\u73cd\u9990\u8bb0", "\u706b\u51e4\u71ce\u539f", "\u53e4\u76f8\u601d\u66f2", "\u5b88\u62a4\u89e3\u653e\u897f"];
                                for (const t of e)
                                    if (-1 !== i.indexOf(t)) return void window.open("https://www.baidu.com/s?wd=" + i + "\u5728\u7ebf\u89c2\u770b")
                            }
                        }
                        let o = new Date,
                            s = o.getTime(),
                            a = 6e4 * o.getTimezoneOffset(),
                            l = new Date(s + a + 36e5 * 8),
                            c = l;
                        c = c.getDate() + 9 + 9 ^ 10, c = ma()(String(c)), c = c.substring(0, 10), c = ma()(c);
                        let u = l.getDay() + 11397,
                            d = "".concat(r, "api/v/?z=").concat(c, "&jx=").concat(i);
                        d += "&s1ig=".concat(u);
                        const h = pe.getAll();
                        h && (d += "&g=".concat(h.join(","))), i || (d = "".concat(r, "api/v/"));
                        const p = async () => {
                            d = "//a2.m1907.top:404/api/v/";
                            let e = await fetch(d, {
                                credentials: "include",
                                headers: {}
                            });
                            console.log(await e.json())
                        };
                        window.cc = p;
                        const f = H().get("sp");
                        f && (H().set("sp", f, {
                            expires: 666,
                            domain: ".cloud.vving.vip"
                        }), localStorage.setItem("sp", f)), H().remove("play_history");
                        let m = document.getElementsByClassName("l")[0];
                        m.classList.remove("hide");
                        let g, y = {};
                        "" === window.document.cookie && (y.csp = btoa(window.localStorage.getItem("sp"))), g = await fetch(d, {
                            credentials: "include",
                            headers: y
                        }), m.classList.add("hide");
                        let v = await g.json();
                        switch (v.type) {
                            case "movie":
                                n.setState({
                                    url: v.data[0].source.eps[0].url,
                                    title: v.data[0].name,
                                    video: v.data[0],
                                    type: "movie",
                                    videos: v.data,
                                    quality_name: v.data[0].source.eps[0].name,
                                    show_tuijian: !1,
                                    show_switch: n.state.show_eps,
                                    show_captcha: !1,
                                    ads: v.y,
                                    vip: n.spStatus(v),
                                    showVipNotice: !0,
                                    ep: 1,
                                    poster: v.po
                                }), n.updateHtmlTitle(v.data[0].name, v.data[0].source.eps[0].name);
                                break;
                            case "tv":
                                let t, i = Number(v.ep);
                                if (1 === i) {
                                    const e = le()[v.data[0].name];
                                    e && (i = e.ep)
                                }
                                let r = v.data[0].source.eps.length;
                                r >= i ? t = v.data[0].source.eps[i - 1].url : (t = v.data[0].source.eps[r - 1].url, i = r), n.setState({
                                    url: t,
                                    title: v.data[0].name,
                                    video: v.data[0],
                                    type: "tv",
                                    ep: i,
                                    videos: v.data,
                                    quality_name: "\u7b2c" + i + "\u96c6",
                                    show_tuijian: !1,
                                    show_switch: n.state.show_eps,
                                    show_captcha: !1,
                                    ads: v.y,
                                    vip: n.spStatus(v),
                                    showVipNotice: !0,
                                    poster: v.po
                                }), n.updateHtmlTitle(v.data[0].name, "\u7b2c" + i + "\u96c6");
                                break;
                            case "search":
                                break;
                            case "home":
                                n.setState({
                                    show_tuijian: !0,
                                    new_videos: v.new,
                                    hot_videos: v.hot,
                                    show_captcha: !1,
                                    ads: v.y
                                }), 0 !== e && "" !== e && 1 !== e && alert("\u6ca1\u6709\u641c\u5230");
                                break;
                            case 4e3:
                                n.setState({
                                    show_captcha: !0
                                })
                        }
                    } catch (r) {
                        window.confirm("\u7cfb\u7edf\u6b63\u5728\u5347\u7ea7\uff0c\u8bf7\u60a8\u7a0d\u7b492-3\u79d2\u62161\u5206\u949f\u540e\u518d\u5237\u65b0\u9875\u9762\uff01\n\u6216\u5c1d\u8bd5\u66f4\u6362\u6d4f\u89c8\u5668\u6216\u8bbe\u5907\u8bbf\u95ee\uff01\n\u82e5\u65e0\u6cd5\u89e3\u51b3\u53ef\u8054\u7cfbQQ 3366 129 856 \n\n2-22: \u6e56\u5317\u5730\u533a\u65e0\u6cd5\u4f7f\u7528\u9700\u7b49\u5f85\u8fd0\u8425\u5546\u4fee\u590d\uff0c\u4f1a\u4fee\u6539dns\u7684\u53ef\u4ee5\u628adns\u6539\u6210114\u5373\u53ef\u4f7f\u7528\n\n\u662f\u5426\u5c1d\u8bd5\u91cd\u65b0\u8fde\u63a5\uff1f") && (window.location.href = "/"), console.log(r)
                    }
                }, this.checkSafeUrl = async e => {
                    let t = new URLSearchParams;
                    t.set("u", e), await fetch("//m1-a1.cloud.nnpp.vip:2223/api/sf", {
                        method: "POST",
                        body: t
                    })
                }, this.getBlockedUrl = async () => {}, this.m3u8Cancel = () => {
                    this.setState({
                        url: "",
                        show_tuijian: !0,
                        m3u8_warning: !1
                    }), this.jiexi(1)
                }, this.m3u8Play = () => {
                    this.setState({
                        m3u8_warning: !1
                    }), this.jiexi((0, W.A)("jx")), ae(decodeURI((0, W.A)("jx")), 1, 0)
                }, this.switch_tuijian = () => {
                    this.setState({
                        new_home: !1
                    })
                }, this.playEnd = () => {
                    "tv" === this.state.type ? this.state.ep < this.state.video.source.eps.length && (this.setState({
                        ep: this.state.ep + 1,
                        url: this.state.video.source.eps[this.state.ep].url,
                        title: this.state.video.name,
                        quality_name: "\u7b2c".concat(this.state.ep + 1, "\u96c6")
                    }), this.updateHtmlTitle(this.state.video.name, "\u7b2c".concat(this.state.ep + 1, "\u96c6"))) : this.jiexi(1)
                }, this.switch_video = (e, t) => {
                    let n = "movie"; - 1 != e.source.eps[0].name.indexOf("\u7b2c") && -1 != e.source.eps[0].name.indexOf("\u96c6") && (n = "tv"), this.setState({
                        url: e.source.eps[0].url,
                        title: e.name,
                        video: e,
                        videos: t,
                        quality_name: e.source.eps[0].name,
                        show_tuijian: !1,
                        type: n,
                        ep: 1,
                        show_switch: !1
                    }), window.history.pushState("", "", "/?jx=" + e.name), this.updateHtmlTitle(e.name, e.source.eps[0].name)
                }, this.switch_quality = (e, t, n) => {
                    let i = 1,
                        r = "movie";
                    if (-1 != t.indexOf("\u7b2c") && -1 != t.indexOf("\u96c6")) {
                        r = "tv";
                        let e = t.match(/\d+/);
                        i = e ? Number(e[0]) : 1
                    }
                    this.setState({
                        quality_name: t,
                        url: n,
                        type: r,
                        ep: i,
                        title: e.name,
                        video: e,
                        videos: [e],
                        show_switch: !1
                    }), this.updateHtmlTitle(e.name, t)
                }, this.close_switch = () => {
                    this.setState({
                        show_switch: !1
                    })
                }, this.set_auto_close_switch = () => {
                    this.setState({
                        auto_close_switch: !1
                    })
                }, this.set_skip = e => {
                    e ? localStorage.setItem("video_skip", "1") : localStorage.setItem("video_skip", "0"), this.setState({
                        video_skip: e
                    })
                }, this.play = () => {
                    this.state.show_switch && this.setState({
                        show_switch: !1
                    })
                }, this.postMsg = e => {
                    window.parent.postMessage(e, "*")
                }, this.updateHtmlTitle = (e, t) => {
                    const n = e + " " + t;
                    document.title = n, this.postMsg({
                        type: "title",
                        title: n
                    })
                }, this.closeWarning = () => {
                    this.setState({
                        show_warning: !1
                    })
                };
                let i = "0" !== localStorage.getItem("video_skip"),
                    r = "0" !== (0, W.A)("eps");
                const o = !localStorage.getItem("warning");
                this.state = {
                    show_warning: o,
                    url: null,
                    title: "",
                    type: "",
                    ep: "",
                    video: null,
                    videos: null,
                    quality_name: "",
                    show_tuijian: !1,
                    hot_videos: [],
                    new_videos: [],
                    show_eps: r,
                    show_switch: r,
                    auto_close_switch: !0,
                    video_skip: i,
                    show_captcha: !1,
                    show_ad_window: !1,
                    ad_window_title: "",
                    ad_window_link: "",
                    ads: [],
                    vip: !1,
                    fromVip: !1,
                    poster: {},
                    showVipNotice: !1,
                    showSpeedupNotice: !1,
                    new_home: !0,
                    m3u8_warning: !1
                }, window.switch_video = this.switch_video, window.switch_quality = this.switch_quality, window.close_switch = this.close_switch, window.set_auto_close_switch = this.set_auto_close_switch, window.set_skip = this.set_skip, window.jiexi = this.jiexi, window.showAdWindow = this.showAdWindow, this.checkLanguage(), this.listenMsg()
            }
            componentDidMount() {
                if (document.getElementsByClassName("l")[0].classList.add("hide"), this.onlyYG(), !tl && (!document.referrer || window.self === window.top)) return void(window.location.href = "https://nnpp.asigin.douyin.com");
                if ("1" === localStorage.getItem("ban")) {
                    const e = '<div style="color: #000">\u6b22\u8fce\u4e3e\u62a5\u4e0d\u826f\u5185\u5bb9 \u4e3e\u62a5\u8bf7\u8054\u7cfbQQ 3366 129 856 (\u5907\u6ce8: \u4e3e\u62a5)<br>\u5df2\u505c\u6b62\u8bbf\u95ee\uff0c<a href="" onclick="localStorage.removeItem(\'ban\')" style="color:blue">\u53d6\u6d88\u5c4f\u853d</a></div>';
                    return void this.writeBody(e)
                }
                const e = (0, W.A)("r");
                e && -1 !== e.indexOf("vip.xxphp.cn") && setTimeout((() => {
                    location.href = "/blackDomain.html"
                }), 6e5);
                const t = ["773840934@qq.com", "2826426242@qq.com", "961726683@qq.com", "1192746479@qq.com", "1045573630@qq.com", "2270905404@qq.com", "391675394@qq.com", "1575748151@qq.com", "452854792@qq.com", "2729734812@qq.com", "770969029@qq.com", "914169287@qq.com", "896618413@qq.com", "13783006810", "13880163252", "19153941949", "2461337981@qq.com", "13595748158", "18028246736", "15384841455", "13309153608", "2432731444@qq.com", "17585604492", "13501550952", "13164666320", "1959906387@qq.com", "17842277991", "17785674818", "19986458826", "13635430037", "17353956694", "15234215525"],
                    n = H().get("sp");
                for (let o = 0; o < t.length; o++) {
                    if (n === t[o]) {
                        document.body.style.background = "#fff", document.body.innerText = "";
                        let e = "";
                        for (;;) e += 0, setTimeout((() => {
                            window.history.pushState(0, 0, e)
                        }), 100);
                        return
                    }
                }
                const i = ["9ecca64a18414572b8ca2eaf2ab5b6a1", "8a71538b34ea4435befe149404b86fef", "a62b3ddf622b4df2ad2c5152ac102b0a", "5674392184084392b7b1845835e2e10a", "2152a2534cf74b57848ec651f7ccc7c9", "b7467c9502dc4b718299343b80f010ed", "1040c004b1c04bf98abb67394a290d27", "8af3398406654190af2b21028a40dd6c", "2ad1d57e16ed4e128916d307d6ecf6eb", "c8f5da836a3b4517b4733da9c5c291a3", "7186686cd3ef43899757d90bffcc1baf", "caf50dcca3214974aa55d6048fa296fa", "4c7f1e84faff472ea9a22239b547590f", "75027eafb74f4099b783ad76a05c2d6a", "3364a88f34334da782e127701b52886c", "a83a4a5a1ab74ef392aae9dc7f14e7aa"],
                    r = H().get("a");
                for (let o = 0; o < i.length; o++) {
                    if (i[o] === r) {
                        document.body.style.background = "#fff", document.body.innerText = "";
                        let e = "";
                        for (;;) e += 0, setTimeout((() => {
                            window.history.pushState(0, 0, e)
                        }), 100);
                        return
                    }
                }
                if (window.self == window.top && / QQ\/|MicroMessenger|QQ|qq/i.test(navigator.userAgent)) {
                    const e = '<div style="color: #000"><br>\u8bf7\u590d\u5236\u4e0b\u9762\u94fe\u63a5\u5728\u6d4f\u89c8\u5668\u6216\u66f4\u6362\u6d4f\u89c8\u5668\u6253\u5f00\uff1a<br>'.concat(window.location.href, "</div>");
                    this.writeBody(e)
                } else this.jiexi(), window.mobile || setTimeout((() => {
                    this.state.auto_close_switch && this.setState({
                        show_switch: !1
                    })
                }), 15e3), -1 !== document.referrer.indexOf(".m1907.top") || -1 !== document.referrer.indexOf(".vving.vip") || localStorage.getItem("saveUrl") || !this.isOuser() || tl || setTimeout((() => {
                    Ja.show()
                }), 666), window.onpopstate = e => {
                    this.setState({
                        show_switch: !1
                    }), window.mobile ? window.location.reload() : this.jiexi()
                }
            }
            onlyYG() {
                const e = ["im1907.top", "am1907.top", "z1.m1907.top", "zap1.m1907.top", "m1-z2.cloud.nnpp.vip:2223", "m1-z2.cloud.vving.vip:2223"];
                let t = !1;
                for (const n of e)
                    if (-1 !== document.referrer.indexOf(n)) {
                        t = !0;
                        break
                    } if (window.mobile && !t && !tl) {
                    const e = '<div style="color: #000; padding: 1em">\n        <h4 style="margin: 0.5em 0.2em">\u683c\u5f0f\u4e0d\u652f\u6301</h4>\n        <p>\u63a8\u8350\u4f7f\u7528\u8d8a\u5149\u6d4f\u89c8\u5668 \u65e0\u5e7f\u544a \u65e0\u63a8\u9001 \u9690\u79c1\u4fdd\u62a4\uff01</p>\n        <a style="color: #3fa9f7" href="https://yg.vving.vip" onclick="window.parent.location=\'https://yg.vving.vip\';return false">\u70b9\u51fb\u8fdb\u5165\u4e0b\u8f7d\u9875\u9762 YG.Vving.vip\n      </div>';
                    throw this.writeBody(e), "err"
                }
            }
            listenMsg() {
                const e = () => {
                    this.setState({
                        fromVip: !0
                    })
                };
                window.addEventListener("message", (function(t) {
                    if ("https://mei.vving.vip" !== t.origin) return;
                    "vip" === t.data && tl && e()
                }), !1)
            }
            render() {
                if (this.state.show_captcha) return t().createElement(la, null);
                let e = !1;
                this.state.videos && "tibet" !== (0, W.A)("lang") && (e = !0);
                let n = !1;
                this.state.show_tuijian && "tibet" !== (0, W.A)("lang") && (n = !0), this.state.show_tuijian && "tibet" === (0, W.A)("lang") && (document.body.innerHTML = '<h3 style="color:#fff; text-align:center">\u0f62\u0f72\u0f58\u0f0b\u0f54\u0f0b\u0f60\u0f55\u0f62\u0f0b\u0f56\u0f5e\u0f72\u0f53\u0f0b\u0f61\u0f7c\u0f51\u0f0b\u0f54\u0f66\u0f0b\u0f45\u0f74\u0f44\u0f0b\u0f59\u0f58\u0f0b\u0f42\u0fb1\u0f72\u0f0b\u0f5a\u0f7c\u0f51\u0f0b\u0f63\u0f9f\u0f0b\u0f56\u0fb1\u0f7a\u0f51\u0f0b\u0f62\u0f7c\u0f42\u0f66\u0f0d <br>  search error s601 <br> z1.m1907.cn <h3>');
                let i = "";
                this.state.video && (i = this.state.video.name + " " + this.state.quality_name + " \u70b9\u6211\u5207\u6362");
                const r = (0, W.A)("jx");
                if (r) {
                    const e = ue().indexOf(decodeURI(r)) > -1;
                    if (this.state.m3u8_warning && !Cs && !e) return t().createElement(Ua, {
                        url: r,
                        black: this.m3u8Cancel,
                        play: this.m3u8Play,
                        poster: this.state.poster
                    })
                }
                return !Cs && this.state.url && this.state.show_warning ? t().createElement(Aa, {
                    closeWarning: this.closeWarning,
                    poster: this.state.poster
                }) : n && this.state.new_home && !Cs && !this.isOuser() ? t().createElement($a, {
                    onClick: this.switch_tuijian
                }) : t().createElement("div", {
                    style: {
                        width: "100vw",
                        height: "100vh",
                        background: "#000"
                    }
                }, this.state.url ? t().createElement(ts, {
                    src: this.state.url,
                    title: this.state.title,
                    ep: this.state.ep,
                    quality_name: this.state.quality_name,
                    play: this.play,
                    playEnd: this.playEnd,
                    nextEp: "tv" === this.state.type && this.state.ep < this.state.video.source.eps.length,
                    video_skip: this.state.video_skip,
                    vip: this.state.vip,
                    poster: this.state.poster,
                    showSpeedupNotice: this.showSpeedupNotice,
                    postMsg: this.postMsg
                }, t().createElement("div", {
                    style: {
                        marginLeft: window.mobile ? "0" : "1.2em",
                        fontSize: ".9em",
                        cursor: "pointer",
                        color: "#dce9ff",
                        textShadow: "1px 1px 1px rgba(0,0,0, .15)",
                        whiteSpace: "nowrap"
                    },
                    onClick: () => window.location.reload()
                }, t().createElement("img", {
                    style: {
                        ...il.svg,
                        ...il.qualitySvg
                    },
                    src: Fa
                }), window.mobile ? null : t().createElement("span", {
                    style: {
                        display: "inline-block",
                        verticalAlign: "top",
                        marginTop: ".2em",
                        marginLeft: ".2em"
                    }
                }, "\u753b\u8d28")), e ? t().createElement("div", {
                    style: {
                        marginLeft: (window.mobile, "1.2em"),
                        fontSize: ".9em",
                        cursor: "pointer",
                        color: "#dce9ff",
                        textShadow: "1px 1px 1px rgba(0,0,0, .15)",
                        whiteSpace: "nowrap"
                    },
                    onClick: () => this.setState({
                        show_switch: !this.state.show_switch,
                        auto_close_switch: !1
                    })
                }, t().createElement("img", {
                    style: il.svg,
                    src: za
                }), window.mobile ? null : t().createElement("span", {
                    style: {
                        display: "inline-block",
                        verticalAlign: "top",
                        marginTop: ".05em",
                        marginLeft: ".2em"
                    }
                }, "\u5267\u96c6")) : null) : null, n ? t().createElement(Ns, {
                    jiexi: this.jiexi,
                    hot_videos: this.state.hot_videos,
                    new_videos: this.state.new_videos,
                    ads: this.state.ads
                }) : null, this.state.show_switch && this.state.videos ? t().createElement(oa, {
                    videos: this.state.videos,
                    video: this.state.video,
                    quality_name: this.state.quality_name,
                    auto_close_switch: this.state.auto_close_switch,
                    skip: this.state.video_skip,
                    ads: this.state.ads,
                    ep: this.state.ep,
                    vip: this.state.vip
                }) : null, this.state.show_ad_window ? t().createElement(da, {
                    title: this.state.ad_window_title,
                    src: this.state.ad_window_link
                }) : null, !this.state.show_eps && i ? t().createElement(ba, {
                    title: i,
                    onClick: () => this.setState({
                        show_switch: !0
                    })
                }) : null, (this.state.showVipNotice && window.mobile || this.state.vip, null))
            }
        }
        const il = {
                svg: {
                    width: "1.35em",
                    height: "1.35em",
                    position: "relative",
                    cursor: "pointer",
                    verticalAlign: "sub"
                },
                qualitySvg: {
                    width: "1.6em",
                    height: "1.6em"
                }
            },
            rl = nl;
        var ol, sl = new Uint8Array(16);

        function al() {
            if (!ol && !(ol = "undefined" !== typeof crypto && crypto.getRandomValues && crypto.getRandomValues.bind(crypto) || "undefined" !== typeof msCrypto && "function" === typeof msCrypto.getRandomValues && msCrypto.getRandomValues.bind(msCrypto))) throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");
            return ol(sl)
        }
        const ll = /^(?:[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}|00000000-0000-0000-0000-000000000000)$/i;
        const cl = function(e) {
            return "string" === typeof e && ll.test(e)
        };
        for (var ul = [], dl = 0; dl < 256; ++dl) ul.push((dl + 256).toString(16).substr(1));
        const hl = function(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 0,
                n = (ul[e[t + 0]] + ul[e[t + 1]] + ul[e[t + 2]] + ul[e[t + 3]] + "-" + ul[e[t + 4]] + ul[e[t + 5]] + "-" + ul[e[t + 6]] + ul[e[t + 7]] + "-" + ul[e[t + 8]] + ul[e[t + 9]] + "-" + ul[e[t + 10]] + ul[e[t + 11]] + ul[e[t + 12]] + ul[e[t + 13]] + ul[e[t + 14]] + ul[e[t + 15]]).toLowerCase();
            if (!cl(n)) throw TypeError("Stringified UUID is invalid");
            return n
        };
        const pl = function(e, t, n) {
            var i = (e = e || {}).random || (e.rng || al)();
            if (i[6] = 15 & i[6] | 64, i[8] = 63 & i[8] | 128, t) {
                n = n || 0;
                for (var r = 0; r < 16; ++r) t[n + r] = i[r];
                return t
            }
            return hl(i)
        };
        ! function() {
            let e = H().get("a");
            void 0 === e && (e = pl().replace(/-/g, ""), H().set("a", e, {
                expires: 999,
                secure: !0,
                sameSite: "None"
            }));
            let t, n = window.document.referrer; - 1 !== n.indexOf("z2.m1907.cn:404") || -1 !== n.indexOf("z2.m1907.top:404") ? n = "" : H().set("b", n, {
                expires: 999,
                secure: !0,
                sameSite: "None"
            });
            try {
                t = localStorage.getItem("f")
            } catch (o) {
                throw document.body.innerHTML = '<div style="color: #000"><br>\u65e0\u6cd5\u8bbf\u95ee\uff0c\u8bf7\u66f4\u6362\u6d4f\u89c8\u5668\uff01<br>\u53ef\u80fd\u7684\u539f\u56e0\uff1a <br> 1.\u82f9\u679c\u6d4f\u89c8\u5668\u9ed8\u8ba4\u963b\u6b62\u4e86\u7b2c\u4e09\u65b9cookie(\u89e3\u51b3\u529e\u6cd5\uff1a\u8bf7\u5728\u6d4f\u89c8\u5668\u8bbe\u7f6e\u4e2d\u5173\u95ed) <br>2.\u4f7f\u7528\u9690\u8eab\u6a21\u5f0f\uff0c\u90e8\u5206\u529f\u80fd\u65e0\u6cd5\u4f7f\u7528 <br> 3.\u6d4f\u89c8\u5668\u7248\u672c\u8fc7\u4f4e</div>', document.body.style.background = "#fff", ""
            }
            const i = localStorage.getItem("l");
            t ? (Date.now() - Number(i || Date.now())) / 1e3 > 2592e3 && localStorage.clear() : localStorage.setItem("f", Date.now());
            const r = "v";
            if (localStorage.getItem(r)) {
                const e = localStorage.getItem(r);
                localStorage.setItem(r, Number(e) + 1)
            } else localStorage.setItem(r, "0");
            localStorage.setItem("l", Date.now())
        }();
        class fl extends e.Component {
            render() {
                return t().createElement(rl, null)
            }
        }
        const ml = fl;
        window.onload = () => {
            if (window.umami) {
                const e = new URLSearchParams(location.search).get("r"),
                    t = e || document.referrer;
                window.umami.track((e => ({
                    ...e,
                    title: t,
                    referrer: t
                })))
            }
        }, i().render(t().createElement(ml, null), document.getElementById("root"))
    })()
})();
//# sourceMappingURL=main.5ed7e97d.js.mapap