/**
 * Created by ccm on 2017/1/12.
 */
webpackJsonp([5241670810047189, 0xf5d7f47f5cb74], {
  0xeb9e744742586: function (e, t, n) {
    e.exports = {default: n(8709056445961631), __esModule: !0}
  },
  0xd9a8125d8e0e5: function (e, t, n) {
    e.exports = {default: n(4553727346613554), __esModule: !0}
  },
  0x44cfbc3c49aa0: function (e, t, n) {
    e.exports = {default: n(8301494583763115), __esModule: !0}
  },
  0xda7c48aba3626: function (e, t, n) {
    e.exports = {default: n(0xa995028706e5b), __esModule: !0}
  },
  8327643607632330: function (e, t, n) {
    e.exports = {default: n(8201880404746264), __esModule: !0}
  },
  0x850c244156086: function (e, t, n) {
    e.exports = {default: n(4665290226241213), __esModule: !0}
  },
  6861363765270330: function (e, t) {
    "use strict";
    t.__esModule = !0, t.default = function (e, t) {
      if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }
  },
  7220449874153128: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    t.__esModule = !0;
    var a = n(0xda7c48aba3626), o = r(a);
    t.default = function () {
      function e(e, t) {
        for (var n = 0; n < t.length; n++) {
          var r = t[n];
          r.enumerable = r.enumerable || !1, r.configurable = !0, "value" in r && (r.writable = !0), (0, o.default)(e, r.key, r)
        }
      }

      return function (t, n, r) {
        return n && e(t.prototype, n), r && e(t, r), t
      }
    }()
  },
  0x5c6f29e468825: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    t.__esModule = !0;
    var a = n(0xda7c48aba3626), o = r(a);
    t.default = function (e, t, n) {
      return t in e ? (0, o.default)(e, t, {value: n, enumerable: !0, configurable: !0, writable: !0}) : e[t] = n, e
    }
  },
  5909167566102083: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    t.__esModule = !0;
    var a = n(0xd9a8125d8e0e5), o = r(a);
    t.default = o.default || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      }
  },
  0x85e0a08d90f85: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    t.__esModule = !0;
    var a = n(0x850c244156086), o = r(a), i = n(0x44cfbc3c49aa0), s = r(i), l = n(7724818440676399), c = r(l);
    t.default = function (e, t) {
      if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + ("undefined" == typeof t ? "undefined" : (0, c.default)(t)));
      e.prototype = (0, s.default)(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (o.default ? (0, o.default)(e, t) : e.__proto__ = t)
    }
  },
  7004395598908739: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    t.__esModule = !0;
    var a = n(7724818440676399), o = r(a);
    t.default = function (e, t) {
      if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" !== ("undefined" == typeof t ? "undefined" : (0, o.default)(t)) && "function" != typeof t ? e : t
    }
  },
  0x66c823d1176c2: function (e, t, n) {
    var r, a;
    /*!
     Copyright (c) 2016 Jed Watson.
     Licensed under the MIT License (MIT), see
     http://jedwatson.github.io/classnames
     */
    !function () {
      "use strict";
      function n() {
        for (var e = [], t = 0; t < arguments.length; t++) {
          var r = arguments[t];
          if (r) {
            var a = typeof r;
            if ("string" === a || "number" === a)e.push(r); else if (Array.isArray(r))e.push(n.apply(null, r)); else if ("object" === a)for (var i in r)o.call(r, i) && r[i] && e.push(i)
          }
        }
        return e.join(" ")
      }

      var o = {}.hasOwnProperty;
      "undefined" != typeof e && e.exports ? e.exports = n : (r = [], a = function () {
        return n
      }.apply(t, r), !(void 0 !== a && (e.exports = a)))
    }()
  },
  0x6fa5d9eec519c: function (e, t, n) {
    function r(e) {
      if (e)return a(e)
    }

    function a(e) {
      for (var t in r.prototype)e[t] = r.prototype[t];
      return e
    }

    e.exports = r, r.prototype.on = r.prototype.addEventListener = function (e, t) {
      return this._callbacks = this._callbacks || {}, (this._callbacks["$" + e] = this._callbacks["$" + e] || []).push(t), this
    }, r.prototype.once = function (e, t) {
      function n() {
        this.off(e, n), t.apply(this, arguments)
      }

      return n.fn = t, this.on(e, n), this
    }, r.prototype.off = r.prototype.removeListener = r.prototype.removeAllListeners = r.prototype.removeEventListener = function (e, t) {
      if (this._callbacks = this._callbacks || {}, 0 == arguments.length)return this._callbacks = {}, this;
      var n = this._callbacks["$" + e];
      if (!n)return this;
      if (1 == arguments.length)return delete this._callbacks["$" + e], this;
      for (var r, a = 0; a < n.length; a++)if (r = n[a], r === t || r.fn === t) {
        n.splice(a, 1);
        break
      }
      return this
    }, r.prototype.emit = function (e) {
      this._callbacks = this._callbacks || {};
      var t = [].slice.call(arguments, 1), n = this._callbacks["$" + e];
      if (n) {
        n = n.slice(0);
        for (var r = 0, a = n.length; r < a; ++r)n[r].apply(this, t)
      }
      return this
    }, r.prototype.listeners = function (e) {
      return this._callbacks = this._callbacks || {}, this._callbacks["$" + e] || []
    }, r.prototype.hasListeners = function (e) {
      return !!this.listeners(e).length
    }
  },
  8709056445961631: function (e, t, n) {
    var r = n(0xec51ad6c50f70), a = r.JSON || (r.JSON = {stringify: JSON.stringify});
    e.exports = function (e) {
      return a.stringify.apply(a, arguments)
    }
  },
  4553727346613554: function (e, t, n) {
    n(6935897161207253), e.exports = n(0xec51ad6c50f70).Object.assign
  },
  8301494583763115: function (e, t, n) {
    n(0x935e42fd37503);
    var r = n(0xec51ad6c50f70).Object;
    e.exports = function (e, t) {
      return r.create(e, t)
    }
  },
  0xa995028706e5b: function (e, t, n) {
    n(7454997907341304);
    var r = n(0xec51ad6c50f70).Object;
    e.exports = function (e, t, n) {
      return r.defineProperty(e, t, n)
    }
  },
  8201880404746264: function (e, t, n) {
    n(5926846557217581), e.exports = n(0xec51ad6c50f70).Object.keys
  },
  4665290226241213: function (e, t, n) {
    n(0xb2a05d6bc9e4f), e.exports = n(0xec51ad6c50f70).Object.setPrototypeOf
  },
  5449839400688231: function (e, t, n) {
    "use strict";
    var r = n(8928190263932861), a = n(6473698251599824), o = n(8028416168663710), i = n(0xa21b913dd573c), s = n(7210700382462411), l = Object.assign;
    e.exports = !l || n(0xfeb3b001fe26e)(function () {
      var e = {}, t = {}, n = Symbol(), r = "abcdefghijklmnopqrst";
      return e[n] = 7, r.split("").forEach(function (e) {
        t[e] = e
      }), 7 != l({}, e)[n] || Object.keys(l({}, t)).join("") != r
    }) ? function (e, t) {
      for (var n = i(e), l = arguments.length, c = 1, u = a.f, d = o.f; l > c;)for (var p, f = s(arguments[c++]), h = u ? r(f).concat(u(f)) : r(f), m = h.length, v = 0; m > v;)d.call(f, p = h[v++]) && (n[p] = f[p]);
      return n
    } : l
  },
  5085516074601586: function (e, t, n) {
    var r = n(7663916493484732), a = n(7854100768251926), o = function (e, t) {
      if (a(e), !r(t) && null !== t)throw TypeError(t + ": can't set as prototype!")
    };
    e.exports = {
      set: Object.setPrototypeOf || ("__proto__" in {} ? function (e, t, r) {
        try {
          r = n(7690129532142045)(Function.call, n(0xcd2f4b7451c30).f(Object.prototype, "__proto__").set, 2), r(e, []), t = !(e instanceof Array)
        } catch (e) {
          t = !0
        }
        return function (e, n) {
          return o(e, n), t ? e.__proto__ = n : r(e, n), e
        }
      }({}, !1) : void 0), check: o
    }
  },
  6935897161207253: function (e, t, n) {
    var r = n(738820835529375);
    r(r.S + r.F, "Object", {assign: n(5449839400688231)})
  },
  0x935e42fd37503: function (e, t, n) {
    var r = n(738820835529375);
    r(r.S, "Object", {create: n(7521065400003331)})
  },
  7454997907341304: function (e, t, n) {
    var r = n(738820835529375);
    r(r.S + r.F * !n(6084855798944180), "Object", {defineProperty: n(4816840313827344).f})
  },
  5926846557217581: function (e, t, n) {
    var r = n(0xa21b913dd573c), a = n(8928190263932861);
    n(8765741294254560)("keys", function () {
      return function (e) {
        return a(r(e))
      }
    })
  },
  0xb2a05d6bc9e4f: function (e, t, n) {
    var r = n(738820835529375);
    r(r.S, "Object", {setPrototypeOf: n(5085516074601586).set})
  },
  0xf9826cc890569: function (e, t) {
    e.exports = function () {
      var e = [];
      return e.toString = function () {
        for (var e = [], t = 0; t < this.length; t++) {
          var n = this[t];
          n[2] ? e.push("@media " + n[2] + "{" + n[1] + "}") : e.push(n[1])
        }
        return e.join("")
      }, e.i = function (t, n) {
        "string" == typeof t && (t = [[null, t, ""]]);
        for (var r = {}, a = 0; a < this.length; a++) {
          var o = this[a][0];
          "number" == typeof o && (r[o] = !0)
        }
        for (a = 0; a < t.length; a++) {
          var i = t[a];
          "number" == typeof i[0] && r[i[0]] || (n && !i[2] ? i[2] = n : n && (i[2] = "(" + i[2] + ") and (" + n + ")"), e.push(i))
        }
      }, e
    }
  },
  0xfb20e7f021734: function (e, t, n) {
    var r, a;
    (function (n) {
      !function (n, o) {
        "use strict";
        r = [], a = function () {
          return o()
        }.apply(t, r), !(void 0 !== a && (e.exports = a))
      }(this, function (e) {
        "use strict";
        function t(e, t) {
          e.super_ = t, e.prototype = Object.create(t.prototype, {
            constructor: {
              value: e,
              enumerable: !1,
              writable: !0,
              configurable: !0
            }
          })
        }

        function r(e, t) {
          Object.defineProperty(this, "kind", {
            value: e,
            enumerable: !0
          }), t && t.length && Object.defineProperty(this, "path", {value: t, enumerable: !0})
        }

        function a(e, t, n) {
          a.super_.call(this, "E", e), Object.defineProperty(this, "lhs", {
            value: t,
            enumerable: !0
          }), Object.defineProperty(this, "rhs", {value: n, enumerable: !0})
        }

        function o(e, t) {
          o.super_.call(this, "N", e), Object.defineProperty(this, "rhs", {value: t, enumerable: !0})
        }

        function i(e, t) {
          i.super_.call(this, "D", e), Object.defineProperty(this, "lhs", {value: t, enumerable: !0})
        }

        function s(e, t, n) {
          s.super_.call(this, "A", e), Object.defineProperty(this, "index", {
            value: t,
            enumerable: !0
          }), Object.defineProperty(this, "item", {value: n, enumerable: !0})
        }

        function l(e, t, n) {
          var r = e.slice((n || t) + 1 || e.length);
          return e.length = t < 0 ? e.length + t : t, e.push.apply(e, r), e
        }

        function c(e) {
          var t = typeof e;
          return "object" !== t ? t : e === Math ? "math" : null === e ? "null" : Array.isArray(e) ? "array" : "[object Date]" === Object.prototype.toString.call(e) ? "date" : "undefined" != typeof e.toString && /^\/.*\//.test(e.toString()) ? "regexp" : "object"
        }

        function u(t, n, r, d, p, f, h) {
          p = p || [];
          var m = p.slice(0);
          if ("undefined" != typeof f) {
            if (d) {
              if ("function" == typeof d && d(m, f))return;
              if ("object" == typeof d) {
                if (d.prefilter && d.prefilter(m, f))return;
                if (d.normalize) {
                  var v = d.normalize(m, f, t, n);
                  v && (t = v[0], n = v[1])
                }
              }
            }
            m.push(f)
          }
          "regexp" === c(t) && "regexp" === c(n) && (t = t.toString(), n = n.toString());
          var g = typeof t, _ = typeof n;
          if ("undefined" === g)"undefined" !== _ && r(new o(m, n)); else if ("undefined" === _)r(new i(m, t)); else if (c(t) !== c(n))r(new a(m, t, n)); else if ("[object Date]" === Object.prototype.toString.call(t) && "[object Date]" === Object.prototype.toString.call(n) && t - n !== 0)r(new a(m, t, n)); else if ("object" === g && null !== t && null !== n) {
            if (h = h || [], h.indexOf(t) < 0) {
              if (h.push(t), Array.isArray(t)) {
                var b;
                t.length;
                for (b = 0; b < t.length; b++)b >= n.length ? r(new s(m, b, new i(e, t[b]))) : u(t[b], n[b], r, d, m, b, h);
                for (; b < n.length;)r(new s(m, b, new o(e, n[b++])))
              } else {
                var y = Object.keys(t), w = Object.keys(n);
                y.forEach(function (a, o) {
                  var i = w.indexOf(a);
                  i >= 0 ? (u(t[a], n[a], r, d, m, a, h), w = l(w, i)) : u(t[a], e, r, d, m, a, h)
                }), w.forEach(function (t) {
                  u(e, n[t], r, d, m, t, h)
                })
              }
              h.length = h.length - 1
            }
          } else t !== n && ("number" === g && isNaN(t) && isNaN(n) || r(new a(m, t, n)))
        }

        function d(t, n, r, a) {
          return a = a || [], u(t, n, function (e) {
            e && a.push(e)
          }, r), a.length ? a : e
        }

        function p(e, t, n) {
          if (n.path && n.path.length) {
            var r, a = e[t], o = n.path.length - 1;
            for (r = 0; r < o; r++)a = a[n.path[r]];
            switch (n.kind) {
              case"A":
                p(a[n.path[r]], n.index, n.item);
                break;
              case"D":
                delete a[n.path[r]];
                break;
              case"E":
              case"N":
                a[n.path[r]] = n.rhs
            }
          } else switch (n.kind) {
            case"A":
              p(e[t], n.index, n.item);
              break;
            case"D":
              e = l(e, t);
              break;
            case"E":
            case"N":
              e[t] = n.rhs
          }
          return e
        }

        function f(e, t, n) {
          if (e && t && n && n.kind) {
            for (var r = e, a = -1, o = n.path ? n.path.length - 1 : 0; ++a < o;)"undefined" == typeof r[n.path[a]] && (r[n.path[a]] = "number" == typeof n.path[a] ? [] : {}), r = r[n.path[a]];
            switch (n.kind) {
              case"A":
                p(n.path ? r[n.path[a]] : r, n.index, n.item);
                break;
              case"D":
                delete r[n.path[a]];
                break;
              case"E":
              case"N":
                r[n.path[a]] = n.rhs
            }
          }
        }

        function h(e, t, n) {
          if (n.path && n.path.length) {
            var r, a = e[t], o = n.path.length - 1;
            for (r = 0; r < o; r++)a = a[n.path[r]];
            switch (n.kind) {
              case"A":
                h(a[n.path[r]], n.index, n.item);
                break;
              case"D":
                a[n.path[r]] = n.lhs;
                break;
              case"E":
                a[n.path[r]] = n.lhs;
                break;
              case"N":
                delete a[n.path[r]]
            }
          } else switch (n.kind) {
            case"A":
              h(e[t], n.index, n.item);
              break;
            case"D":
              e[t] = n.lhs;
              break;
            case"E":
              e[t] = n.lhs;
              break;
            case"N":
              e = l(e, t)
          }
          return e
        }

        function m(e, t, n) {
          if (e && t && n && n.kind) {
            var r, a, o = e;
            for (a = n.path.length - 1, r = 0; r < a; r++)"undefined" == typeof o[n.path[r]] && (o[n.path[r]] = {}), o = o[n.path[r]];
            switch (n.kind) {
              case"A":
                h(o[n.path[r]], n.index, n.item);
                break;
              case"D":
                o[n.path[r]] = n.lhs;
                break;
              case"E":
                o[n.path[r]] = n.lhs;
                break;
              case"N":
                delete o[n.path[r]]
            }
          }
        }

        function v(e, t, n) {
          if (e && t) {
            var r = function (r) {
              n && !n(e, t, r) || f(e, t, r)
            };
            u(e, t, r)
          }
        }

        var g, _, b = [];
        return g = "object" == typeof n && n ? n : "undefined" != typeof window ? window : {}, _ = g.DeepDiff, _ && b.push(function () {
          "undefined" != typeof _ && g.DeepDiff === d && (g.DeepDiff = _, _ = e)
        }), t(a, r), t(o, r), t(i, r), t(s, r), Object.defineProperties(d, {
          diff: {value: d, enumerable: !0},
          observableDiff: {value: u, enumerable: !0},
          applyDiff: {value: v, enumerable: !0},
          applyChange: {value: f, enumerable: !0},
          revertChange: {value: m, enumerable: !0},
          isConflict: {
            value: function () {
              return "undefined" != typeof _
            }, enumerable: !0
          },
          noConflict: {
            value: function () {
              return b && (b.forEach(function (e) {
                e()
              }), b = null), d
            }, enumerable: !0
          }
        }), d
      })
    }).call(t, function () {
      return this
    }())
  },
  892495659741774: function (e, t, n) {
    "use strict";
    function r(e, t) {
      for (var n = e; n.parentNode;)n = n.parentNode;
      var r = n.querySelectorAll(t);
      return Array.prototype.indexOf.call(r, e) !== -1
    }

    var a = n(6112150961868676), o = {
      addClass: function (e, t) {
        return /\s/.test(t) ? a(!1) : void 0, t && (e.classList ? e.classList.add(t) : o.hasClass(e, t) || (e.className = e.className + " " + t)), e
      }, removeClass: function (e, t) {
        return /\s/.test(t) ? a(!1) : void 0, t && (e.classList ? e.classList.remove(t) : o.hasClass(e, t) && (e.className = e.className.replace(new RegExp("(^|\\s)" + t + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, ""))), e
      }, conditionClass: function (e, t, n) {
        return (n ? o.addClass : o.removeClass)(e, t)
      }, hasClass: function (e, t) {
        return /\s/.test(t) ? a(!1) : void 0, e.classList ? !!t && e.classList.contains(t) : (" " + e.className + " ").indexOf(" " + t + " ") > -1
      }, matchesSelector: function (e, t) {
        var n = e.matches || e.webkitMatchesSelector || e.mozMatchesSelector || e.msMatchesSelector || function (t) {
            return r(e, t)
          };
        return n.call(e, t)
      }
    };
    e.exports = o
  },
  506781095924607: function (e, t) {
    e.exports = function (e, t, n, r) {
      var a = n.root;
      n.root = function (e, t, n, o, i, s) {
        var l = e.getTemplate;
        e.getTemplate = function (e, t, a, o, i) {
          "function" == typeof t && (i = t = !1);
          var s = function (e) {
            try {
              return r[e]
            } catch (t) {
              if (n.get("_require"))return n.get("_require")(e);
              console.warn('Could not load template "%s"', e)
            }
          }, l = s(e);
          n.set("_require", s), t && l.compile(), i(null, l)
        }, a(e, t, n, o, i, function (t, n) {
          e.getTemplate = l, s(t, n)
        })
      };
      var o = {obj: n, type: "code"};
      return new e.Template(o, t)
    }
  },
  591123963979967: function (e, t, n) {/*! Browser bundle of nunjucks 3.0.0 (slim, only works with precompiled templates) */
    !function (t, n) {
      e.exports = n()
    }(this, function () {
      return function (e) {
        function t(r) {
          if (n[r])return n[r].exports;
          var a = n[r] = {exports: {}, id: r, loaded: !1};
          return e[r].call(a.exports, a, a.exports, t), a.loaded = !0, a.exports
        }

        var n = {};
        return t.m = e, t.c = n, t.p = "", t(0)
      }([function (e, t, n) {
        "use strict";
        var r = n(1), a = n(2), o = n(14), i = n(3), s = n(3);
        e.exports = {}, e.exports.Environment = a.Environment, e.exports.Template = a.Template, e.exports.Loader = o, e.exports.FileSystemLoader = i.FileSystemLoader, e.exports.PrecompiledLoader = i.PrecompiledLoader, e.exports.WebLoader = i.WebLoader, e.exports.compiler = n(3), e.exports.parser = n(3), e.exports.lexer = n(3), e.exports.runtime = n(8), e.exports.lib = r, e.exports.nodes = n(3), e.exports.installJinjaCompat = n(15);
        var l;
        e.exports.configure = function (e, t) {
          t = t || {}, r.isObject(e) && (t = e, e = null);
          var n;
          return i.FileSystemLoader ? n = new i.FileSystemLoader(e, {
            watch: t.watch,
            noCache: t.noCache
          }) : i.WebLoader && (n = new i.WebLoader(e, {
            useCache: t.web && t.web.useCache,
            async: t.web && t.web.async
          })), l = new a.Environment(n, t), t && t.express && l.express(t.express), l
        }, e.exports.compile = function (t, n, r, a) {
          return l || e.exports.configure(), new e.exports.Template(t, n, r, a)
        }, e.exports.render = function (t, n, r) {
          return l || e.exports.configure(), l.render(t, n, r)
        }, e.exports.renderString = function (t, n, r) {
          return l || e.exports.configure(), l.renderString(t, n, r)
        }, s && (e.exports.precompile = s.precompile, e.exports.precompileString = s.precompileString)
      }, function (e, t) {
        "use strict";
        var n = Array.prototype, r = Object.prototype, a = {
          "&": "&amp;",
          '"': "&quot;",
          "'": "&#39;",
          "<": "&lt;",
          ">": "&gt;"
        }, o = /[&"'<>]/g, i = function (e) {
          return a[e]
        }, t = e.exports = {};
        t.prettifyError = function (e, n, r) {
          if (r.Update || (r = new t.TemplateError(r)), r.Update(e), !n) {
            var a = r;
            r = new Error(a.message), r.name = a.name
          }
          return r
        }, t.TemplateError = function (e, t, n) {
          var r = this;
          if (e instanceof Error) {
            r = e, e = e.name + ": " + e.message;
            try {
              r.name = ""
            } catch (e) {
              r = this
            }
          } else Error.captureStackTrace && Error.captureStackTrace(r);
          return r.name = "Template render error", r.message = e, r.lineno = t, r.colno = n, r.firstUpdate = !0, r.Update = function (e) {
            var t = "(" + (e || "unknown path") + ")";
            return this.firstUpdate && (this.lineno && this.colno ? t += " [Line " + this.lineno + ", Column " + this.colno + "]" : this.lineno && (t += " [Line " + this.lineno + "]")), t += "\n ", this.firstUpdate && (t += " "), this.message = t + (this.message || ""), this.firstUpdate = !1, this
          }, r
        }, t.TemplateError.prototype = Error.prototype, t.escape = function (e) {
          return e.replace(o, i)
        }, t.isFunction = function (e) {
          return "[object Function]" === r.toString.call(e)
        }, t.isArray = Array.isArray || function (e) {
            return "[object Array]" === r.toString.call(e)
          }, t.isString = function (e) {
          return "[object String]" === r.toString.call(e)
        }, t.isObject = function (e) {
          return "[object Object]" === r.toString.call(e)
        }, t.groupBy = function (e, n) {
          for (var r = {}, a = t.isFunction(n) ? n : function (e) {
            return e[n]
          }, o = 0; o < e.length; o++) {
            var i = e[o], s = a(i, o);
            (r[s] || (r[s] = [])).push(i)
          }
          return r
        }, t.toArray = function (e) {
          return Array.prototype.slice.call(e)
        }, t.without = function (e) {
          var n = [];
          if (!e)return n;
          for (var r = -1, a = e.length, o = t.toArray(arguments).slice(1); ++r < a;)t.indexOf(o, e[r]) === -1 && n.push(e[r]);
          return n
        }, t.extend = function (e, t) {
          for (var n in t)e[n] = t[n];
          return e
        }, t.repeat = function (e, t) {
          for (var n = "", r = 0; r < t; r++)n += e;
          return n
        }, t.each = function (e, t, r) {
          if (null != e)if (n.each && e.each === n.each)e.forEach(t, r); else if (e.length === +e.length)for (var a = 0, o = e.length; a < o; a++)t.call(r, e[a], a, e)
        }, t.map = function (e, t) {
          var r = [];
          if (null == e)return r;
          if (n.map && e.map === n.map)return e.map(t);
          for (var a = 0; a < e.length; a++)r[r.length] = t(e[a], a);
          return e.length === +e.length && (r.length = e.length), r
        }, t.asyncIter = function (e, t, n) {
          function r() {
            a++, a < e.length ? t(e[a], a, r, n) : n()
          }

          var a = -1;
          r()
        }, t.asyncFor = function (e, n, r) {
          function a() {
            s++;
            var t = o[s];
            s < i ? n(t, e[t], s, i, a) : r()
          }

          var o = t.keys(e), i = o.length, s = -1;
          a()
        }, t.indexOf = Array.prototype.indexOf ? function (e, t, n) {
          return Array.prototype.indexOf.call(e, t, n)
        } : function (e, t, n) {
          var r = this.length >>> 0;
          for (n = +n || 0, Math.abs(n) === 1 / 0 && (n = 0), n < 0 && (n += r, n < 0 && (n = 0)); n < r; n++)if (e[n] === t)return n;
          return -1
        }, Array.prototype.map || (Array.prototype.map = function () {
          throw new Error("map is unimplemented for this js engine")
        }), t.keys = function (e) {
          if (Object.prototype.keys)return e.keys();
          var t = [];
          for (var n in e)e.hasOwnProperty(n) && t.push(n);
          return t
        }, t.inOperator = function (e, n) {
          if (t.isArray(n))return t.indexOf(n, e) !== -1;
          if (t.isObject(n))return e in n;
          if (t.isString(n))return n.indexOf(e) !== -1;
          throw new Error('Cannot use "in" operator to search for "' + e + '" in unexpected types.')
        }
      }, function (e, t, n) {
        "use strict";
        function r(e, t, n) {
          i(function () {
            e(t, n)
          })
        }

        var a, o = n(3), i = n(4), s = n(1), l = n(6), c = n(3), u = n(7), d = n(3), p = n(8), f = n(9), h = n(10), m = p.Frame;
        d.PrecompiledLoader = n(13);
        var v = l.extend({
          init: function (e, t) {
            t = this.opts = t || {}, this.opts.dev = !!t.dev, this.opts.autoescape = null == t.autoescape || t.autoescape, this.opts.throwOnUndefined = !!t.throwOnUndefined, this.opts.trimBlocks = !!t.trimBlocks, this.opts.lstripBlocks = !!t.lstripBlocks, this.loaders = [], e ? this.loaders = s.isArray(e) ? e : [e] : d.FileSystemLoader ? this.loaders = [new d.FileSystemLoader("views")] : d.WebLoader && (this.loaders = [new d.WebLoader("/views")]), window.nunjucksPrecompiled && this.loaders.unshift(new d.PrecompiledLoader(window.nunjucksPrecompiled)), this.initCache(), this.globals = f(), this.filters = {}, this.asyncFilters = [], this.extensions = {}, this.extensionsList = [];
            for (var n in u)this.addFilter(n, u[n])
          }, initCache: function () {
            s.each(this.loaders, function (e) {
              e.cache = {}, "function" == typeof e.on && e.on("update", function (t) {
                e.cache[t] = null
              })
            })
          }, addExtension: function (e, t) {
            return t._name = e, this.extensions[e] = t, this.extensionsList.push(t), this
          }, removeExtension: function (e) {
            var t = this.getExtension(e);
            t && (this.extensionsList = s.without(this.extensionsList, t), delete this.extensions[e])
          }, getExtension: function (e) {
            return this.extensions[e]
          }, hasExtension: function (e) {
            return !!this.extensions[e]
          }, addGlobal: function (e, t) {
            return this.globals[e] = t, this
          }, getGlobal: function (e) {
            if ("undefined" == typeof this.globals[e])throw new Error("global not found: " + e);
            return this.globals[e]
          }, addFilter: function (e, t, n) {
            var r = t;
            return n && this.asyncFilters.push(e), this.filters[e] = r, this
          }, getFilter: function (e) {
            if (!this.filters[e])throw new Error("filter not found: " + e);
            return this.filters[e]
          }, resolveTemplate: function (e, t, n) {
            var r = !(!e.isRelative || !t) && e.isRelative(n);
            return r && e.resolve ? e.resolve(t, n) : n
          }, getTemplate: function (e, t, n, r, o) {
            var i = this, l = null;
            if (e && e.raw && (e = e.raw), s.isFunction(n) && (o = n, n = null, t = t || !1), s.isFunction(t) && (o = t, t = !1), e instanceof a)l = e; else {
              if ("string" != typeof e)throw new Error("template names must be a string: " + e);
              for (var c = 0; c < this.loaders.length; c++) {
                var u = this.resolveTemplate(this.loaders[c], n, e);
                if (l = this.loaders[c].cache[u])break
              }
            }
            if (!l) {
              var d, p = this, f = function (n, i) {
                if (i || n || r || (n = new Error("template not found: " + e)), n) {
                  if (!o)throw n;
                  o(n)
                } else {
                  var s;
                  i ? (s = new a(i.src, p, i.path, t), i.noCache || (i.loader.cache[e] = s)) : s = new a("", p, "", t), o ? o(null, s) : d = s
                }
              };
              return s.asyncIter(this.loaders, function (t, r, a, o) {
                function s(e, n) {
                  e ? o(e) : n ? (n.loader = t, o(null, n)) : a()
                }

                e = i.resolveTemplate(t, n, e), t.async ? t.getSource(e, s) : s(null, t.getSource(e))
              }, f), d
            }
            return t && l.compile(), o ? void o(null, l) : l
          }, express: function (e) {
            function t(e, t) {
              if (this.name = e, this.path = e, this.defaultEngine = t.defaultEngine, this.ext = o.extname(e), !this.ext && !this.defaultEngine)throw new Error("No default engine was specified and no extension was provided.");
              this.ext || (this.name += this.ext = ("." !== this.defaultEngine[0] ? "." : "") + this.defaultEngine)
            }

            var n = this;
            return t.prototype.render = function (e, t) {
              n.render(this.name, e, t)
            }, e.set("view", t), e.set("nunjucksEnv", this), this
          }, render: function (e, t, n) {
            s.isFunction(t) && (n = t, t = null);
            var a = null;
            return this.getTemplate(e, function (e, o) {
              if (e && n)r(n, e); else {
                if (e)throw e;
                a = o.render(t, n)
              }
            }), a
          }, renderString: function (e, t, n, r) {
            s.isFunction(n) && (r = n, n = {}), n = n || {};
            var o = new a(e, this, n.path);
            return o.render(t, r)
          }, waterfall: h
        }), g = l.extend({
          init: function (e, t, n) {
            this.env = n || new v, this.ctx = {};
            for (var r in e)e.hasOwnProperty(r) && (this.ctx[r] = e[r]);
            this.blocks = {}, this.exported = [];
            for (var a in t)this.addBlock(a, t[a])
          }, lookup: function (e) {
            return e in this.env.globals && !(e in this.ctx) ? this.env.globals[e] : this.ctx[e]
          }, setVariable: function (e, t) {
            this.ctx[e] = t
          }, getVariables: function () {
            return this.ctx
          }, addBlock: function (e, t) {
            return this.blocks[e] = this.blocks[e] || [], this.blocks[e].push(t), this
          }, getBlock: function (e) {
            if (!this.blocks[e])throw new Error('unknown block "' + e + '"');
            return this.blocks[e][0]
          }, getSuper: function (e, t, n, r, a, o) {
            var i = s.indexOf(this.blocks[t] || [], n), l = this.blocks[t][i + 1], c = this;
            if (i === -1 || !l)throw new Error('no super block available for "' + t + '"');
            l(e, c, r, a, o)
          }, addExport: function (e) {
            this.exported.push(e)
          }, getExported: function () {
            for (var e = {}, t = 0; t < this.exported.length; t++) {
              var n = this.exported[t];
              e[n] = this.ctx[n]
            }
            return e
          }
        });
        a = l.extend({
          init: function (e, t, n, r) {
            if (this.env = t || new v, s.isObject(e))switch (e.type) {
              case"code":
                this.tmplProps = e.obj;
                break;
              case"string":
                this.tmplStr = e.obj
            } else {
              if (!s.isString(e))throw new Error("src must be a string or an object describing the source");
              this.tmplStr = e
            }
            if (this.path = n, r) {
              var a = this;
              try {
                a._compile()
              } catch (e) {
                throw s.prettifyError(this.path, this.env.opts.dev, e)
              }
            } else this.compiled = !1
          }, render: function (e, t, n) {
            "function" == typeof e ? (n = e, e = {}) : "function" == typeof t && (n = t, t = null);
            var a = !0;
            t && (a = !1);
            var o = this;
            try {
              o.compile()
            } catch (e) {
              var i = s.prettifyError(this.path, this.env.opts.dev, e);
              if (n)return r(n, i);
              throw i
            }
            var l = new g(e || {}, o.blocks, o.env), c = t ? t.push(!0) : new m;
            c.topLevel = !0;
            var u = null;
            return o.rootRenderFunc(o.env, l, c || new m, p, function (e, t) {
              if (e && (e = s.prettifyError(o.path, o.env.opts.dev, e)), n)a ? r(n, e, t) : n(e, t); else {
                if (e)throw e;
                u = t
              }
            }), u
          }, getExported: function (e, t, n) {
            "function" == typeof e && (n = e, e = {}), "function" == typeof t && (n = t, t = null);
            try {
              this.compile()
            } catch (e) {
              if (n)return n(e);
              throw e
            }
            var r = t ? t.push() : new m;
            r.topLevel = !0;
            var a = new g(e || {}, this.blocks, this.env);
            this.rootRenderFunc(this.env, a, r, p, function (e) {
              e ? n(e, null) : n(null, a.getExported())
            })
          }, compile: function () {
            this.compiled || this._compile()
          }, _compile: function () {
            var e;
            if (this.tmplProps)e = this.tmplProps; else {
              var t = c.compile(this.tmplStr, this.env.asyncFilters, this.env.extensionsList, this.path, this.env.opts), n = new Function(t);
              e = n()
            }
            this.blocks = this._getBlocks(e), this.rootRenderFunc = e.root, this.compiled = !0
          }, _getBlocks: function (e) {
            var t = {};
            for (var n in e)"b_" === n.slice(0, 2) && (t[n.slice(2)] = e[n]);
            return t
          }
        }), e.exports = {Environment: v, Template: a}
      }, function (e, t) {
      }, function (e, t, n) {
        "use strict";
        function r() {
          if (l.length)throw l.shift()
        }

        function a(e) {
          var t;
          t = s.length ? s.pop() : new o, t.task = e, i(t)
        }

        function o() {
          this.task = null
        }

        var i = n(5), s = [], l = [], c = i.makeRequestCallFromTimer(r);
        e.exports = a, o.prototype.call = function () {
          try {
            this.task.call()
          } catch (e) {
            a.onerror ? a.onerror(e) : (l.push(e), c())
          } finally {
            this.task = null, s[s.length] = this
          }
        }
      }, function (e, t) {
        (function (t) {
          "use strict";
          function n(e) {
            s.length || (i(), l = !0), s[s.length] = e
          }

          function r() {
            for (; c < s.length;) {
              var e = c;
              if (c += 1, s[e].call(), c > u) {
                for (var t = 0, n = s.length - c; t < n; t++)s[t] = s[t + c];
                s.length -= c, c = 0
              }
            }
            s.length = 0, c = 0, l = !1
          }

          function a(e) {
            var t = 1, n = new d(e), r = document.createTextNode("");
            return n.observe(r, {characterData: !0}), function () {
              t = -t, r.data = t
            }
          }

          function o(e) {
            return function () {
              function t() {
                clearTimeout(n), clearInterval(r), e()
              }

              var n = setTimeout(t, 0), r = setInterval(t, 50)
            }
          }

          e.exports = n;
          var i, s = [], l = !1, c = 0, u = 1024, d = t.MutationObserver || t.WebKitMutationObserver;
          i = "function" == typeof d ? a(r) : o(r), n.requestFlush = i, n.makeRequestCallFromTimer = o
        }).call(t, function () {
          return this
        }())
      }, function (e, t) {
        "use strict";
        function n(e, t, r) {
          var a = function () {
          };
          a.prototype = e.prototype;
          var o = new a, i = /xyz/.test(function () {
            xyz
          }) ? /\bparent\b/ : /.*/;
          r = r || {};
          for (var s in r) {
            var l = r[s], c = o[s];
            "function" == typeof c && "function" == typeof l && i.test(l) ? o[s] = function (e, t) {
              return function () {
                var n = this.parent;
                this.parent = t;
                var r = e.apply(this, arguments);
                return this.parent = n, r
              }
            }(l, c) : o[s] = l
          }
          o.typename = t;
          var u = function () {
            o.init && o.init.apply(this, arguments)
          };
          return u.prototype = o, u.prototype.constructor = u, u.extend = function (e, t) {
            return "object" == typeof e && (t = e, e = "anonymous"), n(u, e, t)
          }, u
        }

        e.exports = n(Object, "Object", {})
      }, function (e, t, n) {
        "use strict";
        function r(e, t) {
          return null === e || void 0 === e || e === !1 ? t : e
        }

        var a = n(1), o = n(8), i = {
          abs: function (e) {
            return Math.abs(e)
          }, batch: function (e, t, n) {
            var r, a = [], o = [];
            for (r = 0; r < e.length; r++)r % t === 0 && o.length && (a.push(o), o = []), o.push(e[r]);
            if (o.length) {
              if (n)for (r = o.length; r < t; r++)o.push(n);
              a.push(o)
            }
            return a
          }, capitalize: function (e) {
            e = r(e, "");
            var t = e.toLowerCase();
            return o.copySafeness(e, t.charAt(0).toUpperCase() + t.slice(1))
          }, center: function (e, t) {
            if (e = r(e, ""), t = t || 80, e.length >= t)return e;
            var n = t - e.length, i = a.repeat(" ", n / 2 - n % 2), s = a.repeat(" ", n / 2);
            return o.copySafeness(e, i + e + s)
          }, default: function (e, t, n) {
            return n ? e ? e : t : void 0 !== e ? e : t
          }, dictsort: function (e, t, n) {
            if (!a.isObject(e))throw new a.TemplateError("dictsort filter: val must be an object");
            var r = [];
            for (var o in e)r.push([o, e[o]]);
            var i;
            if (void 0 === n || "key" === n)i = 0; else {
              if ("value" !== n)throw new a.TemplateError("dictsort filter: You can only sort by either key or value");
              i = 1
            }
            return r.sort(function (e, n) {
              var r = e[i], o = n[i];
              return t || (a.isString(r) && (r = r.toUpperCase()), a.isString(o) && (o = o.toUpperCase())), r > o ? 1 : r === o ? 0 : -1
            }), r
          }, dump: function (e, t) {
            return JSON.stringify(e, null, t)
          }, escape: function (e) {
            return e instanceof o.SafeString ? e : (e = null === e || void 0 === e ? "" : e, o.markSafe(a.escape(e.toString())))
          }, safe: function (e) {
            return e instanceof o.SafeString ? e : (e = null === e || void 0 === e ? "" : e, o.markSafe(e.toString()))
          }, first: function (e) {
            return e[0]
          }, groupby: function (e, t) {
            return a.groupBy(e, t)
          }, indent: function (e, t, n) {
            if (e = r(e, ""), "" === e)return "";
            t = t || 4;
            for (var i = "", s = e.split("\n"), l = a.repeat(" ", t), c = 0; c < s.length; c++)i += 0 !== c || n ? l + s[c] + "\n" : s[c] + "\n";
            return o.copySafeness(e, i)
          }, join: function (e, t, n) {
            return t = t || "", n && (e = a.map(e, function (e) {
              return e[n]
            })), e.join(t)
          }, last: function (e) {
            return e[e.length - 1]
          }, length: function (e) {
            var t = r(e, "");
            return void 0 !== t ? "function" == typeof Map && t instanceof Map || "function" == typeof Set && t instanceof Set ? t.size : !a.isObject(t) || t instanceof o.SafeString ? t.length : Object.keys(t).length : 0
          }, list: function (e) {
            if (a.isString(e))return e.split("");
            if (a.isObject(e)) {
              var t = [];
              if (Object.keys)t = Object.keys(e); else for (var n in e)t.push(n);
              return a.map(t, function (t) {
                return {key: t, value: e[t]}
              })
            }
            if (a.isArray(e))return e;
            throw new a.TemplateError("list filter: type not iterable")
          }, lower: function (e) {
            return e = r(e, ""), e.toLowerCase()
          }, nl2br: function (e) {
            return null === e || void 0 === e ? "" : o.copySafeness(e, e.replace(/\r\n|\n/g, "<br />\n"))
          }, random: function (e) {
            return e[Math.floor(Math.random() * e.length)]
          }, rejectattr: function (e, t) {
            return e.filter(function (e) {
              return !e[t]
            })
          }, selectattr: function (e, t) {
            return e.filter(function (e) {
              return !!e[t]
            })
          }, replace: function (e, t, n, r) {
            var a = e;
            if (t instanceof RegExp)return e.replace(t, n);
            "undefined" == typeof r && (r = -1);
            var i = "";
            if ("number" == typeof t)t += ""; else if ("string" != typeof t)return e;
            if ("number" == typeof e && (e += ""), "string" != typeof e && !(e instanceof o.SafeString))return e;
            if ("" === t)return i = n + e.split("").join(n) + n, o.copySafeness(e, i);
            var s = e.indexOf(t);
            if (0 === r || s === -1)return e;
            for (var l = 0, c = 0; s > -1 && (r === -1 || c < r);)i += e.substring(l, s) + n, l = s + t.length, c++, s = e.indexOf(t, l);
            return l < e.length && (i += e.substring(l)), o.copySafeness(a, i)
          }, reverse: function (e) {
            var t;
            return t = a.isString(e) ? i.list(e) : a.map(e, function (e) {
              return e
            }), t.reverse(), a.isString(e) ? o.copySafeness(e, t.join("")) : t
          }, round: function (e, t, n) {
            t = t || 0;
            var r, a = Math.pow(10, t);
            return r = "ceil" === n ? Math.ceil : "floor" === n ? Math.floor : Math.round, r(e * a) / a
          }, slice: function (e, t, n) {
            for (var r = Math.floor(e.length / t), a = e.length % t, o = 0, i = [], s = 0; s < t; s++) {
              var l = o + s * r;
              s < a && o++;
              var c = o + (s + 1) * r, u = e.slice(l, c);
              n && s >= a && u.push(n), i.push(u)
            }
            return i
          }, sum: function (e, t, n) {
            var r = 0;
            "number" == typeof n && (r += n), t && (e = a.map(e, function (e) {
              return e[t]
            }));
            for (var o = 0; o < e.length; o++)r += e[o];
            return r
          }, sort: o.makeMacro(["value", "reverse", "case_sensitive", "attribute"], [], function (e, t, n, r) {
            return e = a.map(e, function (e) {
              return e
            }), e.sort(function (e, o) {
              var i, s;
              return r ? (i = e[r], s = o[r]) : (i = e, s = o), !n && a.isString(i) && a.isString(s) && (i = i.toLowerCase(), s = s.toLowerCase()), i < s ? t ? 1 : -1 : i > s ? t ? -1 : 1 : 0
            }), e
          }), string: function (e) {
            return o.copySafeness(e, e)
          }, striptags: function (e, t) {
            e = r(e, ""), t = t || !1;
            var n = /<\/?([a-z][a-z0-9]*)\b[^>]*>|<!--[\s\S]*?-->/gi, a = i.trim(e.replace(n, "")), s = "";
            return s = t ? a.replace(/^ +| +$/gm, "").replace(/ +/g, " ").replace(/(\r\n)/g, "\n").replace(/\n\n\n+/g, "\n\n") : a.replace(/\s+/gi, " "), o.copySafeness(e, s)
          }, title: function (e) {
            e = r(e, "");
            for (var t = e.split(" "), n = 0; n < t.length; n++)t[n] = i.capitalize(t[n]);
            return o.copySafeness(e, t.join(" "))
          }, trim: function (e) {
            return o.copySafeness(e, e.replace(/^\s*|\s*$/g, ""))
          }, truncate: function (e, t, n, a) {
            var i = e;
            if (e = r(e, ""), t = t || 255, e.length <= t)return e;
            if (n)e = e.substring(0, t); else {
              var s = e.lastIndexOf(" ", t);
              s === -1 && (s = t), e = e.substring(0, s)
            }
            return e += void 0 !== a && null !== a ? a : "...", o.copySafeness(i, e)
          }, upper: function (e) {
            return e = r(e, ""), e.toUpperCase()
          }, urlencode: function (e) {
            var t = encodeURIComponent;
            if (a.isString(e))return t(e);
            var n;
            if (a.isArray(e))n = e.map(function (e) {
              return t(e[0]) + "=" + t(e[1])
            }); else {
              n = [];
              for (var r in e)e.hasOwnProperty(r) && n.push(t(r) + "=" + t(e[r]))
            }
            return n.join("&")
          }, urlize: function (e, t, n) {
            isNaN(t) && (t = 1 / 0);
            var r = n === !0 ? ' rel="nofollow"' : "", a = /^(?:\(|<|&lt;)?(.*?)(?:\.|,|\)|\n|&gt;)?$/, o = /^[\w.!#$%&'*+\-\/=?\^`{|}~]+@[a-z\d\-]+(\.[a-z\d\-]+)+$/i, i = /^https?:\/\/.*$/, s = /^www\./, l = /\.(?:org|net|com)(?:\:|\/|$)/, c = e.split(/(\s+)/).filter(function (e) {
              return e && e.length
            }).map(function (e) {
              var n = e.match(a), c = n && n[1] || e;
              return i.test(c) ? '<a href="' + c + '"' + r + ">" + c.substr(0, t) + "</a>" : s.test(c) ? '<a href="http://' + c + '"' + r + ">" + c.substr(0, t) + "</a>" : o.test(c) ? '<a href="mailto:' + c + '">' + c + "</a>" : l.test(c) ? '<a href="http://' + c + '"' + r + ">" + c.substr(0, t) + "</a>" : e
            });
            return c.join("")
          }, wordcount: function (e) {
            e = r(e, "");
            var t = e ? e.match(/\w+/g) : null;
            return t ? t.length : null
          }, float: function (e, t) {
            var n = parseFloat(e);
            return isNaN(n) ? t : n
          }, int: function (e, t) {
            var n = parseInt(e, 10);
            return isNaN(n) ? t : n
          }
        };
        i.d = i.default, i.e = i.escape, e.exports = i
      }, function (e, t, n) {
        "use strict";
        function r(e, t, n) {
          return function () {
            var r, a, s = i(arguments), l = o(arguments);
            if (s > e.length) {
              r = Array.prototype.slice.call(arguments, 0, e.length);
              var c = Array.prototype.slice.call(arguments, r.length, s);
              for (a = 0; a < c.length; a++)a < t.length && (l[t[a]] = c[a]);
              r.push(l)
            } else if (s < e.length) {
              for (r = Array.prototype.slice.call(arguments, 0, s), a = s; a < e.length; a++) {
                var u = e[a];
                r.push(l[u]), delete l[u]
              }
              r.push(l)
            } else r = arguments;
            return n.apply(this, r)
          }
        }

        function a(e) {
          return e.__keywords = !0, e
        }

        function o(e) {
          var t = e.length;
          if (t) {
            var n = e[t - 1];
            if (n && n.hasOwnProperty("__keywords"))return n
          }
          return {}
        }

        function i(e) {
          var t = e.length;
          if (0 === t)return 0;
          var n = e[t - 1];
          return n && n.hasOwnProperty("__keywords") ? t - 1 : t
        }

        function s(e) {
          return "string" != typeof e ? e : (this.val = e, void(this.length = e.length))
        }

        function l(e, t) {
          return e instanceof s ? new s(t) : t.toString()
        }

        function c(e) {
          var t = typeof e;
          return "string" === t ? new s(e) : "function" !== t ? e : function () {
            var t = e.apply(this, arguments);
            return "string" == typeof t ? new s(t) : t
          }
        }

        function u(e, t) {
          return e = void 0 !== e && null !== e ? e : "", !t || e instanceof s || (e = _.escape(e.toString())), e
        }

        function d(e, t, n) {
          if (null === e || void 0 === e)throw new _.TemplateError("attempted to output null or undefined value", t + 1, n + 1);
          return e
        }

        function p(e, t) {
          return e = e || {}, "function" == typeof e[t] ? function () {
            return e[t].apply(e, arguments)
          } : e[t]
        }

        function f(e, t, n, r) {
          if (!e)throw new Error("Unable to call `" + t + "`, which is undefined or falsey");
          if ("function" != typeof e)throw new Error("Unable to call `" + t + "`, which is not a function");
          return e.apply(n, r)
        }

        function h(e, t, n) {
          var r = t.lookup(n);
          return void 0 !== r ? r : e.lookup(n)
        }

        function m(e, t, n) {
          return e.lineno ? e : new _.TemplateError(e, t, n)
        }

        function v(e, t, n, r) {
          if (_.isArray(e)) {
            var a = e.length;
            _.asyncIter(e, function (e, r, o) {
              switch (t) {
                case 1:
                  n(e, r, a, o);
                  break;
                case 2:
                  n(e[0], e[1], r, a, o);
                  break;
                case 3:
                  n(e[0], e[1], e[2], r, a, o);
                  break;
                default:
                  e.push(r, o), n.apply(this, e)
              }
            }, r)
          } else _.asyncFor(e, function (e, t, r, a, o) {
            n(e, t, r, a, o)
          }, r)
        }

        function g(e, t, n, r) {
          function a(e, t) {
            l++, s[e] = t, l === o && r(null, s.join(""))
          }

          var o, i, s, l = 0;
          if (_.isArray(e))if (o = e.length, s = new Array(o), 0 === o)r(null, ""); else for (i = 0; i < e.length; i++) {
            var c = e[i];
            switch (t) {
              case 1:
                n(c, i, o, a);
                break;
              case 2:
                n(c[0], c[1], i, o, a);
                break;
              case 3:
                n(c[0], c[1], c[2], i, o, a);
                break;
              default:
                c.push(i, a), n.apply(this, c)
            }
          } else {
            var u = _.keys(e);
            if (o = u.length, s = new Array(o), 0 === o)r(null, ""); else for (i = 0; i < u.length; i++) {
              var d = u[i];
              n(d, e[d], i, o, a)
            }
          }
        }

        var _ = n(1), b = n(6), y = b.extend({
          init: function (e, t) {
            this.variables = {}, this.parent = e, this.topLevel = !1, this.isolateWrites = t
          }, set: function (e, t, n) {
            var r = e.split("."), a = this.variables, o = this;
            if (n && (o = this.resolve(r[0], !0)))return void o.set(e, t);
            for (var i = 0; i < r.length - 1; i++) {
              var s = r[i];
              a[s] || (a[s] = {}), a = a[s]
            }
            a[r[r.length - 1]] = t
          }, get: function (e) {
            var t = this.variables[e];
            return void 0 !== t ? t : null
          }, lookup: function (e) {
            var t = this.parent, n = this.variables[e];
            return void 0 !== n ? n : t && t.lookup(e)
          }, resolve: function (e, t) {
            var n = t && this.isolateWrites ? void 0 : this.parent, r = this.variables[e];
            return void 0 !== r ? this : n && n.resolve(e)
          }, push: function (e) {
            return new y(this, e)
          }, pop: function () {
            return this.parent
          }
        });
        s.prototype = Object.create(String.prototype, {
          length: {
            writable: !0,
            configurable: !0,
            value: 0
          }
        }), s.prototype.valueOf = function () {
          return this.val
        }, s.prototype.toString = function () {
          return this.val
        }, e.exports = {
          Frame: y,
          makeMacro: r,
          makeKeywordArgs: a,
          numArgs: i,
          suppressValue: u,
          ensureDefined: d,
          memberLookup: p,
          contextOrFrameLookup: h,
          callWrap: f,
          handleError: m,
          isArray: _.isArray,
          keys: _.keys,
          SafeString: s,
          copySafeness: l,
          markSafe: c,
          asyncEach: v,
          asyncAll: g,
          inOperator: _.inOperator
        }
      }, function (e, t) {
        "use strict";
        function n(e) {
          var t = -1;
          return {
            current: null, reset: function () {
              t = -1, this.current = null
            }, next: function () {
              return t++, t >= e.length && (t = 0), this.current = e[t], this.current
            }
          }
        }

        function r(e) {
          e = e || ",";
          var t = !0;
          return function () {
            var n = t ? "" : e;
            return t = !1, n
          }
        }

        function a() {
          return {
            range: function (e, t, n) {
              "undefined" == typeof t ? (t = e, e = 0, n = 1) : n || (n = 1);
              var r, a = [];
              if (n > 0)for (r = e; r < t; r += n)a.push(r); else for (r = e; r > t; r += n)a.push(r);
              return a
            }, cycler: function () {
              return n(Array.prototype.slice.call(arguments))
            }, joiner: function (e) {
              return r(e)
            }
          }
        }

        e.exports = a
      }, function (e, t, n) {
        var r, a;
        (function (n, o) {
          !function (i) {
            "use strict";
            var s = function () {
              var e = Array.prototype.slice.call(arguments);
              "function" == typeof e[0] && e[0].apply(null, e.splice(1))
            }, l = function (e) {
              "function" == typeof n ? n(e) : "undefined" != typeof o && o.nextTick ? o.nextTick(e) : setTimeout(e, 0)
            }, c = function (e) {
              var t = function (n) {
                var r = function () {
                  return e.length && e[n].apply(null, arguments), r.next()
                };
                return r.next = function () {
                  return n < e.length - 1 ? t(n + 1) : null
                }, r
              };
              return t(0)
            }, u = Array.isArray || function (e) {
                return "[object Array]" === Object.prototype.toString.call(e)
              }, d = function (e, t, n) {
              var r = n ? l : s;
              if (t = t || function () {
                  }, !u(e)) {
                var a = new Error("First argument to waterfall must be an array of functions");
                return t(a)
              }
              if (!e.length)return t();
              var o = function (e) {
                return function (n) {
                  if (n)t.apply(null, arguments), t = function () {
                  }; else {
                    var a = Array.prototype.slice.call(arguments, 1), i = e.next();
                    i ? a.push(o(i)) : a.push(t), r(function () {
                      e.apply(null, a)
                    })
                  }
                }
              };
              o(c(e))()
            };
            r = [], a = function () {
              return d
            }.apply(t, r), !(void 0 !== a && (e.exports = a))
          }(this)
        }).call(t, n(11).setImmediate, n(3))
      }, function (e, t, n) {
        (function (e, r) {
          function a(e, t) {
            this._id = e, this._clearFn = t
          }

          var o = n(12).nextTick, i = Function.prototype.apply, s = Array.prototype.slice, l = {}, c = 0;
          t.setTimeout = function () {
            return new a(i.call(setTimeout, window, arguments), clearTimeout)
          }, t.setInterval = function () {
            return new a(i.call(setInterval, window, arguments), clearInterval)
          }, t.clearTimeout = t.clearInterval = function (e) {
            e.close()
          }, a.prototype.unref = a.prototype.ref = function () {
          }, a.prototype.close = function () {
            this._clearFn.call(window, this._id)
          }, t.enroll = function (e, t) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = t
          }, t.unenroll = function (e) {
            clearTimeout(e._idleTimeoutId), e._idleTimeout = -1
          }, t._unrefActive = t.active = function (e) {
            clearTimeout(e._idleTimeoutId);
            var t = e._idleTimeout;
            t >= 0 && (e._idleTimeoutId = setTimeout(function () {
              e._onTimeout && e._onTimeout()
            }, t))
          }, t.setImmediate = "function" == typeof e ? e : function (e) {
            var n = c++, r = !(arguments.length < 2) && s.call(arguments, 1);
            return l[n] = !0, o(function () {
              l[n] && (r ? e.apply(null, r) : e.call(null), t.clearImmediate(n))
            }), n
          }, t.clearImmediate = "function" == typeof r ? r : function (e) {
            delete l[e]
          }
        }).call(t, n(11).setImmediate, n(11).clearImmediate)
      }, function (e, t) {
        function n() {
          c = !1, i.length ? l = i.concat(l) : u = -1, l.length && r()
        }

        function r() {
          if (!c) {
            var e = setTimeout(n);
            c = !0;
            for (var t = l.length; t;) {
              for (i = l, l = []; ++u < t;)i && i[u].run();
              u = -1, t = l.length
            }
            i = null, c = !1, clearTimeout(e)
          }
        }

        function a(e, t) {
          this.fun = e, this.array = t
        }

        function o() {
        }

        var i, s = e.exports = {}, l = [], c = !1, u = -1;
        s.nextTick = function (e) {
          var t = new Array(arguments.length - 1);
          if (arguments.length > 1)for (var n = 1; n < arguments.length; n++)t[n - 1] = arguments[n];
          l.push(new a(e, t)), 1 !== l.length || c || setTimeout(r, 0)
        }, a.prototype.run = function () {
          this.fun.apply(null, this.array)
        }, s.title = "browser", s.browser = !0, s.env = {}, s.argv = [], s.version = "", s.versions = {}, s.on = o, s.addListener = o, s.once = o, s.off = o, s.removeListener = o, s.removeAllListeners = o, s.emit = o, s.binding = function (e) {
          throw new Error("process.binding is not supported")
        }, s.cwd = function () {
          return "/"
        }, s.chdir = function (e) {
          throw new Error("process.chdir is not supported")
        }, s.umask = function () {
          return 0
        }
      }, function (e, t, n) {
        "use strict";
        var r = n(14), a = r.extend({
          init: function (e) {
            this.precompiled = e || {}
          }, getSource: function (e) {
            return this.precompiled[e] ? {src: {type: "code", obj: this.precompiled[e]}, path: e} : null
          }
        });
        e.exports = a
      }, function (e, t, n) {
        "use strict";
        var r = n(3), a = n(6), o = n(1), i = a.extend({
          on: function (e, t) {
            this.listeners = this.listeners || {}, this.listeners[e] = this.listeners[e] || [], this.listeners[e].push(t)
          }, emit: function (e) {
            var t = Array.prototype.slice.call(arguments, 1);
            this.listeners && this.listeners[e] && o.each(this.listeners[e], function (e) {
              e.apply(null, t)
            })
          }, resolve: function (e, t) {
            return r.resolve(r.dirname(e), t)
          }, isRelative: function (e) {
            return 0 === e.indexOf("./") || 0 === e.indexOf("../")
          }
        });
        e.exports = i
      }, function (e, t) {
        function n() {
          "use strict";
          var e = this.runtime, t = this.lib, n = e.contextOrFrameLookup;
          e.contextOrFrameLookup = function (e, t, r) {
            var a = n.apply(this, arguments);
            if (void 0 === a)switch (r) {
              case"True":
                return !0;
              case"False":
                return !1;
              case"None":
                return null
            }
            return a
          };
          var r = e.memberLookup, a = {
            pop: function (e) {
              if (void 0 === e)return this.pop();
              if (e >= this.length || e < 0)throw new Error("KeyError");
              return this.splice(e, 1)
            }, append: function (e) {
              return this.push(e)
            }, remove: function (e) {
              for (var t = 0; t < this.length; t++)if (this[t] === e)return this.splice(t, 1);
              throw new Error("ValueError")
            }, count: function (e) {
              for (var t = 0, n = 0; n < this.length; n++)this[n] === e && t++;
              return t
            }, index: function (e) {
              var t;
              if ((t = this.indexOf(e)) === -1)throw new Error("ValueError");
              return t
            }, find: function (e) {
              return this.indexOf(e)
            }, insert: function (e, t) {
              return this.splice(e, 0, t)
            }
          }, o = {
            items: function () {
              var e = [];
              for (var t in this)e.push([t, this[t]]);
              return e
            }, values: function () {
              var e = [];
              for (var t in this)e.push(this[t]);
              return e
            }, keys: function () {
              var e = [];
              for (var t in this)e.push(t);
              return e
            }, get: function (e, t) {
              var n = this[e];
              return void 0 === n && (n = t), n
            }, has_key: function (e) {
              return this.hasOwnProperty(e)
            }, pop: function (e, t) {
              var n = this[e];
              if (void 0 === n && void 0 !== t)n = t; else {
                if (void 0 === n)throw new Error("KeyError");
                delete this[e]
              }
              return n
            }, popitem: function () {
              for (var e in this) {
                var t = this[e];
                return delete this[e], [e, t]
              }
              throw new Error("KeyError")
            }, setdefault: function (e, t) {
              return e in this ? this[e] : (void 0 === t && (t = null), this[e] = t)
            }, update: function (e) {
              for (var t in e)this[t] = e[t];
              return null
            }
          };
          o.iteritems = o.items, o.itervalues = o.values, o.iterkeys = o.keys, e.memberLookup = function (e, n, i) {
            return e = e || {}, t.isArray(e) && a.hasOwnProperty(n) ? function () {
              return a[n].apply(e, arguments)
            } : t.isObject(e) && o.hasOwnProperty(n) ? function () {
              return o[n].apply(e, arguments)
            } : r.apply(this, arguments)
          }
        }

        e.exports = n
      }])
    })
  },
  8693435815683587: function (e, t) {
    "use strict";
    var n = String.prototype.replace, r = /%20/g;
    e.exports = {
      default: "RFC3986", formatters: {
        RFC1738: function (e) {
          return n.call(e, r, "+")
        }, RFC3986: function (e) {
          return e
        }
      }, RFC1738: "RFC1738", RFC3986: "RFC3986"
    }
  },
  4994721667460726: function (e, t, n) {
    "use strict";
    var r = n(0xc28ab35a85791), a = n(8608620078914098), o = n(8693435815683587);
    e.exports = {formats: o, parse: a, stringify: r}
  },
  8608620078914098: function (e, t, n) {
    "use strict";
    var r = n(0x73f3b1753f0b0), a = Object.prototype.hasOwnProperty, o = {
      allowDots: !1,
      allowPrototypes: !1,
      arrayLimit: 20,
      decoder: r.decode,
      delimiter: "&",
      depth: 5,
      parameterLimit: 1e3,
      plainObjects: !1,
      strictNullHandling: !1
    }, i = function (e, t) {
      for (var n = {}, r = e.split(t.delimiter, t.parameterLimit === 1 / 0 ? void 0 : t.parameterLimit), o = 0; o < r.length; ++o) {
        var i, s, l = r[o], c = l.indexOf("]=") === -1 ? l.indexOf("=") : l.indexOf("]=") + 1;
        c === -1 ? (i = t.decoder(l), s = t.strictNullHandling ? null : "") : (i = t.decoder(l.slice(0, c)), s = t.decoder(l.slice(c + 1))), a.call(n, i) ? n[i] = [].concat(n[i]).concat(s) : n[i] = s
      }
      return n
    }, s = function e(t, n, r) {
      if (!t.length)return n;
      var a, o = t.shift();
      if ("[]" === o)a = [], a = a.concat(e(t, n, r)); else {
        a = r.plainObjects ? Object.create(null) : {};
        var i = "[" === o[0] && "]" === o[o.length - 1] ? o.slice(1, o.length - 1) : o, s = parseInt(i, 10);
        !isNaN(s) && o !== i && String(s) === i && s >= 0 && r.parseArrays && s <= r.arrayLimit ? (a = [], a[s] = e(t, n, r)) : a[i] = e(t, n, r)
      }
      return a
    }, l = function (e, t, n) {
      if (e) {
        var r = n.allowDots ? e.replace(/\.([^\.\[]+)/g, "[$1]") : e, o = /^([^\[\]]*)/, i = /(\[[^\[\]]*\])/g, l = o.exec(r), c = [];
        if (l[1]) {
          if (!n.plainObjects && a.call(Object.prototype, l[1]) && !n.allowPrototypes)return;
          c.push(l[1])
        }
        for (var u = 0; null !== (l = i.exec(r)) && u < n.depth;)u += 1, (n.plainObjects || !a.call(Object.prototype, l[1].replace(/\[|\]/g, "")) || n.allowPrototypes) && c.push(l[1]);
        return l && c.push("[" + r.slice(l.index) + "]"), s(c, t, n)
      }
    };
    e.exports = function (e, t) {
      var n = t || {};
      if (null !== n.decoder && void 0 !== n.decoder && "function" != typeof n.decoder)throw new TypeError("Decoder has to be a function.");
      if (n.delimiter = "string" == typeof n.delimiter || r.isRegExp(n.delimiter) ? n.delimiter : o.delimiter, n.depth = "number" == typeof n.depth ? n.depth : o.depth, n.arrayLimit = "number" == typeof n.arrayLimit ? n.arrayLimit : o.arrayLimit, n.parseArrays = n.parseArrays !== !1, n.decoder = "function" == typeof n.decoder ? n.decoder : o.decoder, n.allowDots = "boolean" == typeof n.allowDots ? n.allowDots : o.allowDots, n.plainObjects = "boolean" == typeof n.plainObjects ? n.plainObjects : o.plainObjects, n.allowPrototypes = "boolean" == typeof n.allowPrototypes ? n.allowPrototypes : o.allowPrototypes, n.parameterLimit = "number" == typeof n.parameterLimit ? n.parameterLimit : o.parameterLimit, n.strictNullHandling = "boolean" == typeof n.strictNullHandling ? n.strictNullHandling : o.strictNullHandling, "" === e || null === e || "undefined" == typeof e)return n.plainObjects ? Object.create(null) : {};
      for (var a = "string" == typeof e ? i(e, n) : e, s = n.plainObjects ? Object.create(null) : {}, c = Object.keys(a), u = 0; u < c.length; ++u) {
        var d = c[u], p = l(d, a[d], n);
        s = r.merge(s, p, n)
      }
      return r.compact(s)
    }
  },
  0xc28ab35a85791: function (e, t, n) {
    "use strict";
    var r = n(0x73f3b1753f0b0), a = n(8693435815683587), o = {
      brackets: function (e) {
        return e + "[]"
      }, indices: function (e, t) {
        return e + "[" + t + "]"
      }, repeat: function (e) {
        return e
      }
    }, i = Date.prototype.toISOString, s = {
      delimiter: "&", encode: !0, encoder: r.encode, serializeDate: function (e) {
        return i.call(e)
      }, skipNulls: !1, strictNullHandling: !1
    }, l = function e(t, n, a, o, i, s, l, c, u, d, p) {
      var f = t;
      if ("function" == typeof l)f = l(n, f); else if (f instanceof Date)f = d(f); else if (null === f) {
        if (o)return s ? s(n) : n;
        f = ""
      }
      if ("string" == typeof f || "number" == typeof f || "boolean" == typeof f || r.isBuffer(f))return s ? [p(s(n)) + "=" + p(s(f))] : [p(n) + "=" + p(String(f))];
      var h = [];
      if ("undefined" == typeof f)return h;
      var m;
      if (Array.isArray(l))m = l; else {
        var v = Object.keys(f);
        m = c ? v.sort(c) : v
      }
      for (var g = 0; g < m.length; ++g) {
        var _ = m[g];
        i && null === f[_] || (h = Array.isArray(f) ? h.concat(e(f[_], a(n, _), a, o, i, s, l, c, u, d, p)) : h.concat(e(f[_], n + (u ? "." + _ : "[" + _ + "]"), a, o, i, s, l, c, u, d, p)))
      }
      return h
    };
    e.exports = function (e, t) {
      var n = e, r = t || {}, i = "undefined" == typeof r.delimiter ? s.delimiter : r.delimiter, c = "boolean" == typeof r.strictNullHandling ? r.strictNullHandling : s.strictNullHandling, u = "boolean" == typeof r.skipNulls ? r.skipNulls : s.skipNulls, d = "boolean" == typeof r.encode ? r.encode : s.encode, p = d ? "function" == typeof r.encoder ? r.encoder : s.encoder : null, f = "function" == typeof r.sort ? r.sort : null, h = "undefined" != typeof r.allowDots && r.allowDots, m = "function" == typeof r.serializeDate ? r.serializeDate : s.serializeDate;
      if ("undefined" == typeof r.format)r.format = a.default; else if (!Object.prototype.hasOwnProperty.call(a.formatters, r.format))throw new TypeError("Unknown format option provided.");
      var v, g, _ = a.formatters[r.format];
      if (null !== r.encoder && void 0 !== r.encoder && "function" != typeof r.encoder)throw new TypeError("Encoder has to be a function.");
      "function" == typeof r.filter ? (g = r.filter, n = g("", n)) : Array.isArray(r.filter) && (g = r.filter, v = g);
      var b = [];
      if ("object" != typeof n || null === n)return "";
      var y;
      y = r.arrayFormat in o ? r.arrayFormat : "indices" in r ? r.indices ? "indices" : "repeat" : "indices";
      var w = o[y];
      v || (v = Object.keys(n)), f && v.sort(f);
      for (var x = 0; x < v.length; ++x) {
        var k = v[x];
        u && null === n[k] || (b = b.concat(l(n[k], k, w, c, u, p, g, f, h, m, _)))
      }
      return b.join(i)
    }
  },
  0x73f3b1753f0b0: function (e, t) {
    "use strict";
    var n = Object.prototype.hasOwnProperty, r = function () {
      for (var e = [], t = 0; t < 256; ++t)e.push("%" + ((t < 16 ? "0" : "") + t.toString(16)).toUpperCase());
      return e
    }();
    t.arrayToObject = function (e, t) {
      for (var n = t && t.plainObjects ? Object.create(null) : {}, r = 0; r < e.length; ++r)"undefined" != typeof e[r] && (n[r] = e[r]);
      return n
    }, t.merge = function (e, r, a) {
      if (!r)return e;
      if ("object" != typeof r) {
        if (Array.isArray(e))e.push(r); else {
          if ("object" != typeof e)return [e, r];
          e[r] = !0
        }
        return e
      }
      if ("object" != typeof e)return [e].concat(r);
      var o = e;
      return Array.isArray(e) && !Array.isArray(r) && (o = t.arrayToObject(e, a)), Array.isArray(e) && Array.isArray(r) ? (r.forEach(function (r, o) {
        n.call(e, o) ? e[o] && "object" == typeof e[o] ? e[o] = t.merge(e[o], r, a) : e.push(r) : e[o] = r
      }), e) : Object.keys(r).reduce(function (e, n) {
        var o = r[n];
        return Object.prototype.hasOwnProperty.call(e, n) ? e[n] = t.merge(e[n], o, a) : e[n] = o, e
      }, o)
    }, t.decode = function (e) {
      try {
        return decodeURIComponent(e.replace(/\+/g, " "))
      } catch (t) {
        return e
      }
    }, t.encode = function (e) {
      if (0 === e.length)return e;
      for (var t = "string" == typeof e ? e : String(e), n = "", a = 0; a < t.length; ++a) {
        var o = t.charCodeAt(a);
        45 === o || 46 === o || 95 === o || 126 === o || o >= 48 && o <= 57 || o >= 65 && o <= 90 || o >= 97 && o <= 122 ? n += t.charAt(a) : o < 128 ? n += r[o] : o < 2048 ? n += r[192 | o >> 6] + r[128 | 63 & o] : o < 55296 || o >= 57344 ? n += r[224 | o >> 12] + r[128 | o >> 6 & 63] + r[128 | 63 & o] : (a += 1, o = 65536 + ((1023 & o) << 10 | 1023 & t.charCodeAt(a)), n += r[240 | o >> 18] + r[128 | o >> 12 & 63] + r[128 | o >> 6 & 63] + r[128 | 63 & o])
      }
      return n
    }, t.compact = function (e, n) {
      if ("object" != typeof e || null === e)return e;
      var r = n || [], a = r.indexOf(e);
      if (a !== -1)return r[a];
      if (r.push(e), Array.isArray(e)) {
        for (var o = [], i = 0; i < e.length; ++i)e[i] && "object" == typeof e[i] ? o.push(t.compact(e[i], r)) : "undefined" != typeof e[i] && o.push(e[i]);
        return o
      }
      var s = Object.keys(e);
      return s.forEach(function (n) {
        e[n] = t.compact(e[n], r)
      }), e
    }, t.isRegExp = function (e) {
      return "[object RegExp]" === Object.prototype.toString.call(e)
    }, t.isBuffer = function (e) {
      return null !== e && "undefined" != typeof e && !!(e.constructor && e.constructor.isBuffer && e.constructor.isBuffer(e))
    }
  },
  7311225775605741: function (e, t) {
    "use strict";
    function n(e, t) {
      return Object.prototype.hasOwnProperty.call(e, t)
    }

    e.exports = function (e, t, r, a) {
      t = t || "&", r = r || "=";
      var o = {};
      if ("string" != typeof e || 0 === e.length)return o;
      var i = /\+/g;
      e = e.split(t);
      var s = 1e3;
      a && "number" == typeof a.maxKeys && (s = a.maxKeys);
      var l = e.length;
      s > 0 && l > s && (l = s);
      for (var c = 0; c < l; ++c) {
        var u, d, p, f, h = e[c].replace(i, "%20"), m = h.indexOf(r);
        m >= 0 ? (u = h.substr(0, m), d = h.substr(m + 1)) : (u = h, d = ""), p = decodeURIComponent(u), f = decodeURIComponent(d), n(o, p) ? Array.isArray(o[p]) ? o[p].push(f) : o[p] = [o[p], f] : o[p] = f
      }
      return o
    }
  },
  5994998932429842: function (e, t) {
    "use strict";
    var n = function (e) {
      switch (typeof e) {
        case"string":
          return e;
        case"boolean":
          return e ? "true" : "false";
        case"number":
          return isFinite(e) ? e : "";
        default:
          return ""
      }
    };
    e.exports = function (e, t, r, a) {
      return t = t || "&", r = r || "=", null === e && (e = void 0), "object" == typeof e ? Object.keys(e).map(function (a) {
        var o = encodeURIComponent(n(a)) + r;
        return Array.isArray(e[a]) ? e[a].map(function (e) {
          return o + encodeURIComponent(n(e))
        }).join(t) : o + encodeURIComponent(n(e[a]))
      }).join(t) : a ? encodeURIComponent(n(a)) + r + encodeURIComponent(n(e)) : ""
    }
  },
  0xa7c3802d76b7a: function (e, t, n) {
    "use strict";
    t.decode = t.parse = n(7311225775605741), t.encode = t.stringify = n(5994998932429842)
  },
  0xb7fb8c2568ddd: function (e, t, n) {
    e.exports = n(0xd56fd6c7272c)
  },
  7620260235716870: function (e, t, n) {
    "use strict";
    var r = n(8517380749821782), a = n(968499868068110);
    t.getReactDOM = function () {
      return r
    }, t.getReactInstanceMap = function () {
      return a
    }
  },
  0xd56fd6c7272c: function (e, t, n) {
    "use strict";
    function r(e, t) {
      if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
      if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    function i(e) {
      var t = "transition" + e + "Timeout", n = "transition" + e;
      return function (e) {
        if (e[n]) {
          if (null == e[t])return new Error(t + " wasn't supplied to ReactCSSTransitionGroup: this can cause unreliable animations and won't be supported in a future version of React. See https://fb.me/react-animation-transition-group-timeout for more information.");
          if ("number" != typeof e[t])return new Error(t + " must be a number (in milliseconds)")
        }
      }
    }

    var s = n(0x65de94e8b4502), l = n(5655222066228211), c = n(741306792710718), u = n(0xa782b660fc195), d = function (e) {
      function t() {
        var n, o, i;
        r(this, t);
        for (var s = arguments.length, c = Array(s), d = 0; d < s; d++)c[d] = arguments[d];
        return n = o = a(this, e.call.apply(e, [this].concat(c))), o._wrapChild = function (e) {
          return l.createElement(u, {
            name: o.props.transitionName,
            appear: o.props.transitionAppear,
            enter: o.props.transitionEnter,
            leave: o.props.transitionLeave,
            appearTimeout: o.props.transitionAppearTimeout,
            enterTimeout: o.props.transitionEnterTimeout,
            leaveTimeout: o.props.transitionLeaveTimeout
          }, e)
        }, i = n, a(o, i)
      }

      return o(t, e), t.prototype.render = function () {
        return l.createElement(c, s({}, this.props, {childFactory: this._wrapChild}))
      }, t
    }(l.Component);
    d.displayName = "ReactCSSTransitionGroup", d.propTypes = {
      transitionName: u.propTypes.name,
      transitionAppear: l.PropTypes.bool,
      transitionEnter: l.PropTypes.bool,
      transitionLeave: l.PropTypes.bool,
      transitionAppearTimeout: i("Appear"),
      transitionEnterTimeout: i("Enter"),
      transitionLeaveTimeout: i("Leave")
    }, d.defaultProps = {transitionAppear: !1, transitionEnter: !0, transitionLeave: !0}, e.exports = d
  },
  0xa782b660fc195: function (e, t, n) {
    "use strict";
    var r = n(5655222066228211), a = n(7620260235716870), o = n(892495659741774), i = n(23201962113621), s = n(7324699936702503), l = 17, c = r.createClass({
      displayName: "ReactCSSTransitionGroupChild",
      propTypes: {
        name: r.PropTypes.oneOfType([r.PropTypes.string, r.PropTypes.shape({
          enter: r.PropTypes.string,
          leave: r.PropTypes.string,
          active: r.PropTypes.string
        }), r.PropTypes.shape({
          enter: r.PropTypes.string,
          enterActive: r.PropTypes.string,
          leave: r.PropTypes.string,
          leaveActive: r.PropTypes.string,
          appear: r.PropTypes.string,
          appearActive: r.PropTypes.string
        })]).isRequired,
        appear: r.PropTypes.bool,
        enter: r.PropTypes.bool,
        leave: r.PropTypes.bool,
        appearTimeout: r.PropTypes.number,
        enterTimeout: r.PropTypes.number,
        leaveTimeout: r.PropTypes.number
      },
      transition: function (e, t, n) {
        var r = a.getReactDOM().findDOMNode(this);
        if (!r)return void(t && t());
        var s = this.props.name[e] || this.props.name + "-" + e, l = this.props.name[e + "Active"] || s + "-active", c = null, u = function (e) {
          e && e.target !== r || (clearTimeout(c), o.removeClass(r, s), o.removeClass(r, l), i.removeEndEventListener(r, u), t && t())
        };
        o.addClass(r, s), this.queueClassAndNode(l, r), n ? (c = setTimeout(u, n), this.transitionTimeouts.push(c)) : i.addEndEventListener(r, u)
      },
      queueClassAndNode: function (e, t) {
        this.classNameAndNodeQueue.push({
          className: e,
          node: t
        }), this.timeout || (this.timeout = setTimeout(this.flushClassNameAndNodeQueue, l))
      },
      flushClassNameAndNodeQueue: function () {
        this.isMounted() && this.classNameAndNodeQueue.forEach(function (e) {
          o.addClass(e.node, e.className)
        }), this.classNameAndNodeQueue.length = 0, this.timeout = null
      },
      componentWillMount: function () {
        this.classNameAndNodeQueue = [], this.transitionTimeouts = []
      },
      componentWillUnmount: function () {
        this.timeout && clearTimeout(this.timeout), this.transitionTimeouts.forEach(function (e) {
          clearTimeout(e)
        }), this.classNameAndNodeQueue.length = 0
      },
      componentWillAppear: function (e) {
        this.props.appear ? this.transition("appear", e, this.props.appearTimeout) : e()
      },
      componentWillEnter: function (e) {
        this.props.enter ? this.transition("enter", e, this.props.enterTimeout) : e()
      },
      componentWillLeave: function (e) {
        this.props.leave ? this.transition("leave", e, this.props.leaveTimeout) : e()
      },
      render: function () {
        return s(this.props.children)
      }
    });
    e.exports = c
  },
  5319840642057856: function (e, t, n) {
    "use strict";
    var r = n(4986289289150755), a = {
      getChildMapping: function (e, t) {
        return e ? r(e) : e
      }, mergeChildMappings: function (e, t) {
        function n(n) {
          return t.hasOwnProperty(n) ? t[n] : e[n]
        }

        e = e || {}, t = t || {};
        var r = {}, a = [];
        for (var o in e)t.hasOwnProperty(o) ? a.length && (r[o] = a, a = []) : a.push(o);
        var i, s = {};
        for (var l in t) {
          if (r.hasOwnProperty(l))for (i = 0; i < r[l].length; i++) {
            var c = r[l][i];
            s[r[l][i]] = n(c)
          }
          s[l] = n(l)
        }
        for (i = 0; i < a.length; i++)s[a[i]] = n(a[i]);
        return s
      }
    };
    e.exports = a
  },
  23201962113621: function (e, t, n) {
    "use strict";
    function r() {
      var e = s("animationend"), t = s("transitionend");
      e && l.push(e), t && l.push(t)
    }

    function a(e, t, n) {
      e.addEventListener(t, n, !1)
    }

    function o(e, t, n) {
      e.removeEventListener(t, n, !1)
    }

    var i = n(8245568001874117), s = n(8098813404188750), l = [];
    i.canUseDOM && r();
    var c = {
      addEndEventListener: function (e, t) {
        return 0 === l.length ? void window.setTimeout(t, 0) : void l.forEach(function (n) {
          a(e, n, t)
        })
      }, removeEndEventListener: function (e, t) {
        0 !== l.length && l.forEach(function (n) {
          o(e, n, t)
        })
      }
    };
    e.exports = c
  },
  741306792710718: function (e, t, n) {
    "use strict";
    function r(e, t) {
      if (!(e instanceof t))throw new TypeError("Cannot call a class as a function")
    }

    function a(e, t) {
      if (!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
      return !t || "object" != typeof t && "function" != typeof t ? e : t
    }

    function o(e, t) {
      if ("function" != typeof t && null !== t)throw new TypeError("Super expression must either be null or a function, not " + typeof t);
      e.prototype = Object.create(t && t.prototype, {
        constructor: {
          value: e,
          enumerable: !1,
          writable: !0,
          configurable: !0
        }
      }), t && (Object.setPrototypeOf ? Object.setPrototypeOf(e, t) : e.__proto__ = t)
    }

    var i = n(0x65de94e8b4502), s = n(5655222066228211), l = (n(7620260235716870), n(5319840642057856)), c = n(0x78f24a167e9c4), u = function (e) {
      function t() {
        var n, o, s;
        r(this, t);
        for (var c = arguments.length, u = Array(c), d = 0; d < c; d++)u[d] = arguments[d];
        return n = o = a(this, e.call.apply(e, [this].concat(u))), o.state = {children: l.getChildMapping(o.props.children)}, o.performAppear = function (e) {
          o.currentlyTransitioningKeys[e] = !0;
          var t = o.refs[e];
          t.componentWillAppear ? t.componentWillAppear(o._handleDoneAppearing.bind(o, e)) : o._handleDoneAppearing(e)
        }, o._handleDoneAppearing = function (e) {
          var t = o.refs[e];
          t.componentDidAppear && t.componentDidAppear(), delete o.currentlyTransitioningKeys[e];
          var n;
          n = l.getChildMapping(o.props.children), n && n.hasOwnProperty(e) || o.performLeave(e)
        }, o.performEnter = function (e) {
          o.currentlyTransitioningKeys[e] = !0;
          var t = o.refs[e];
          t.componentWillEnter ? t.componentWillEnter(o._handleDoneEntering.bind(o, e)) : o._handleDoneEntering(e)
        }, o._handleDoneEntering = function (e) {
          var t = o.refs[e];
          t.componentDidEnter && t.componentDidEnter(), delete o.currentlyTransitioningKeys[e];
          var n;
          n = l.getChildMapping(o.props.children), n && n.hasOwnProperty(e) || o.performLeave(e)
        }, o.performLeave = function (e) {
          o.currentlyTransitioningKeys[e] = !0;
          var t = o.refs[e];
          t.componentWillLeave ? t.componentWillLeave(o._handleDoneLeaving.bind(o, e)) : o._handleDoneLeaving(e)
        }, o._handleDoneLeaving = function (e) {
          var t = o.refs[e];
          t.componentDidLeave && t.componentDidLeave(), delete o.currentlyTransitioningKeys[e];
          var n;
          n = l.getChildMapping(o.props.children), n && n.hasOwnProperty(e) ? o.performEnter(e) : o.setState(function (t) {
            var n = i({}, t.children);
            return delete n[e], {children: n}
          })
        }, s = n, a(o, s)
      }

      return o(t, e), t.prototype.componentWillMount = function () {
        this.currentlyTransitioningKeys = {}, this.keysToEnter = [], this.keysToLeave = []
      }, t.prototype.componentDidMount = function () {
        var e = this.state.children;
        for (var t in e)e[t] && this.performAppear(t)
      }, t.prototype.componentWillReceiveProps = function (e) {
        var t;
        t = l.getChildMapping(e.children);
        var n = this.state.children;
        this.setState({children: l.mergeChildMappings(n, t)});
        var r;
        for (r in t) {
          var a = n && n.hasOwnProperty(r);
          !t[r] || a || this.currentlyTransitioningKeys[r] || this.keysToEnter.push(r)
        }
        for (r in n) {
          var o = t && t.hasOwnProperty(r);
          !n[r] || o || this.currentlyTransitioningKeys[r] || this.keysToLeave.push(r)
        }
      }, t.prototype.componentDidUpdate = function () {
        var e = this.keysToEnter;
        this.keysToEnter = [], e.forEach(this.performEnter);
        var t = this.keysToLeave;
        this.keysToLeave = [], t.forEach(this.performLeave)
      }, t.prototype.render = function () {
        var e = [];
        for (var t in this.state.children) {
          var n = this.state.children[t];
          n && e.push(s.cloneElement(this.props.childFactory(n), {ref: t, key: t}))
        }
        var r = i({}, this.props);
        return delete r.transitionLeave, delete r.transitionName, delete r.transitionAppear, delete r.transitionEnter, delete r.childFactory, delete r.transitionLeaveTimeout, delete r.transitionEnterTimeout, delete r.transitionAppearTimeout, delete r.component, s.createElement(this.props.component, r, e)
      }, t
    }(s.Component);
    u.displayName = "ReactTransitionGroup", u.propTypes = {
      component: s.PropTypes.any,
      childFactory: s.PropTypes.func
    }, u.defaultProps = {component: "span", childFactory: c.thatReturnsArgument}, e.exports = u
  },
  4986289289150755: function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e, t, n, r) {
        if (e && "object" == typeof e) {
          var a = e, o = void 0 === a[n];
          o && null != t && (a[n] = t)
        }
      }

      function a(e, t) {
        if (null == e)return e;
        var n = {};
        return o(e, r, n), n
      }

      var o = (n(0xcd84f7f95f664), n(7077479675640027));
      n(7130940685954697);
      e.exports = a
    }).call(t, n(0x8ec7e20f73356))
  },
  0xf41f46c94d6f3: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    function a(e) {
      if (Array.isArray(e)) {
        for (var t = 0, n = Array(e.length); t < e.length; t++)n[t] = e[t];
        return n
      }
      return Array.from(e)
    }

    function o(e) {
      return e && "undefined" != typeof Symbol && e.constructor === Symbol ? "symbol" : typeof e
    }

    function i(e, t, n, r) {
      switch ("undefined" == typeof e ? "undefined" : o(e)) {
        case"object":
          return "function" == typeof e[r] ? e[r].apply(e, a(n)) : e[r];
        case"function":
          return e(t);
        default:
          return e
      }
    }

    function s(e) {
      var t = e.timestamp, n = e.duration;
      return function (e, r, a) {
        var o = ["action"];
        return t && o.push("@ " + r), o.push(e.type), n && o.push("(in " + a.toFixed(2) + " ms)"), o.join(" ")
      }
    }

    function l(e, t) {
      var n = t.logger, r = t.actionTransformer, a = t.titleFormatter, o = void 0 === a ? s(t) : a, l = t.collapsed, u = t.colors, p = t.level, f = t.diff;
      e.forEach(function (t, a) {
        var s = t.started, h = t.startedTime, m = t.action, v = t.prevState, g = t.error, _ = t.took, b = t.nextState, y = e[a + 1];
        y && (b = y.prevState, _ = y.started - s);
        var w = r(m), x = "function" == typeof l ? l(function () {
          return b
        }, m) : l, k = (0, c.formatTime)(h), E = u.title ? "color: " + u.title(w) + ";" : null, T = o(w, k, _);
        try {
          x ? u.title ? n.groupCollapsed("%c " + T, E) : n.groupCollapsed(T) : u.title ? n.group("%c " + T, E) : n.group(T)
        } catch (e) {
          n.log(T)
        }
        var A = i(p, w, [v], "prevState"), F = i(p, w, [w], "action"), O = i(p, w, [g, v], "error"), L = i(p, w, [b], "nextState");
        A && (u.prevState ? n[A]("%c prev state", "color: " + u.prevState(v) + "; font-weight: bold", v) : n[A]("prev state", v)), F && (u.action ? n[F]("%c action", "color: " + u.action(w) + "; font-weight: bold", w) : n[F]("action", w)), g && O && (u.error ? n[O]("%c error", "color: " + u.error(g, v) + "; font-weight: bold", g) : n[O]("error", g)), L && (u.nextState ? n[L]("%c next state", "color: " + u.nextState(b) + "; font-weight: bold", b) : n[L]("next state", b)), f && (0, d.default)(v, b, n, x);
        try {
          n.groupEnd()
        } catch (e) {
          n.log("â€”â€” log end â€”â€”")
        }
      })
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.printBuffer = l;
    var c = n(5997077460040593), u = n(0x4b7f534b0d4cd), d = r(u)
  },
  702574799811853: function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0}), t.default = {
      level: "log",
      logger: console,
      logErrors: !0,
      collapsed: void 0,
      predicate: void 0,
      duration: !1,
      timestamp: !0,
      stateTransformer: function (e) {
        return e
      },
      actionTransformer: function (e) {
        return e
      },
      errorTransformer: function (e) {
        return e
      },
      colors: {
        title: function () {
          return "inherit"
        }, prevState: function () {
          return "#9E9E9E"
        }, action: function () {
          return "#03A9F4"
        }, nextState: function () {
          return "#4CAF50"
        }, error: function () {
          return "#F20404"
        }
      },
      diff: !1,
      diffPredicate: void 0,
      transformer: void 0
    }, e.exports = t.default
  },
  0x4b7f534b0d4cd: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    function a(e) {
      return "color: " + c[e].color + "; font-weight: bold"
    }

    function o(e) {
      var t = e.kind, n = e.path, r = e.lhs, a = e.rhs, o = e.index, i = e.item;
      switch (t) {
        case"E":
          return n.join(".") + " " + r + " â†’ " + a;
        case"N":
          return n.join(".") + " " + a;
        case"D":
          return "" + n.join(".");
        case"A":
          return [n.join(".") + "[" + o + "]", i];
        default:
          return null
      }
    }

    function i(e, t, n, r) {
      var i = (0, l.default)(e, t);
      try {
        r ? n.groupCollapsed("diff") : n.group("diff")
      } catch (e) {
        n.log("diff")
      }
      i ? i.forEach(function (e) {
        var t = e.kind, r = o(e);
        n.log("%c " + c[t].text, a(t), r)
      }) : n.log("â€”â€” no diff â€”â€”");
      try {
        n.groupEnd()
      } catch (e) {
        n.log("â€”â€” diff end â€”â€” ")
      }
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = i;
    var s = n(0xfb20e7f021734), l = r(s), c = {
      E: {color: "#2196F3", text: "CHANGED:"},
      N: {color: "#4CAF50", text: "ADDED:"},
      D: {color: "#F44336", text: "DELETED:"},
      A: {color: "#2196F3", text: "ARRAY:"}
    };
    e.exports = t.default
  },
  5997077460040593: function (e, t) {
    "use strict";
    Object.defineProperty(t, "__esModule", {value: !0});
    var n = t.repeat = function (e, t) {
      return new Array(t + 1).join(e)
    }, r = t.pad = function (e, t) {
      return n("0", t - e.toString().length) + e
    };
    t.formatTime = function (e) {
      return r(e.getHours(), 2) + ":" + r(e.getMinutes(), 2) + ":" + r(e.getSeconds(), 2) + "." + r(e.getMilliseconds(), 3)
    }, t.timer = "undefined" != typeof performance && null !== performance && "function" == typeof performance.now ? performance : Date
  },
  6310004466639690: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    function a() {
      var e = arguments.length <= 0 || void 0 === arguments[0] ? {} : arguments[0], t = o({}, c.default, e), n = t.logger, r = t.transformer, a = t.stateTransformer, l = t.errorTransformer, u = t.predicate, d = t.logErrors, p = t.diffPredicate;
      if ("undefined" == typeof n)return function () {
        return function (e) {
          return function (t) {
            return e(t)
          }
        }
      };
      r && console.error("Option 'transformer' is deprecated, use 'stateTransformer' instead!");
      var f = [];
      return function (e) {
        var n = e.getState;
        return function (e) {
          return function (r) {
            if ("function" == typeof u && !u(n, r))return e(r);
            var c = {};
            f.push(c), c.started = s.timer.now(), c.startedTime = new Date, c.prevState = a(n()), c.action = r;
            var h = void 0;
            if (d)try {
              h = e(r)
            } catch (e) {
              c.error = l(e)
            } else h = e(r);
            c.took = s.timer.now() - c.started, c.nextState = a(n());
            var m = t.diff && "function" == typeof p ? p(n, r) : t.diff;
            if ((0, i.printBuffer)(f, o({}, t, {diff: m})), f.length = 0, c.error)throw c.error;
            return h
          }
        }
      }
    }

    var o = Object.assign || function (e) {
        for (var t = 1; t < arguments.length; t++) {
          var n = arguments[t];
          for (var r in n)Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
        }
        return e
      };
    Object.defineProperty(t, "__esModule", {value: !0});
    var i = n(0xf41f46c94d6f3), s = n(5997077460040593), l = n(702574799811853), c = r(l);
    t.default = a, e.exports = t.default
  },
  0x9f6493926219a: function (e, t, n) {
    function r() {
    }

    function a(e) {
      if (!g(e))return e;
      var t = [];
      for (var n in e)o(t, n, e[n]);
      return t.join("&")
    }

    function o(e, t, n) {
      if (null != n)if (Array.isArray(n))n.forEach(function (n) {
        o(e, t, n)
      }); else if (g(n))for (var r in n)o(e, t + "[" + r + "]", n[r]); else e.push(encodeURIComponent(t) + "=" + encodeURIComponent(n)); else null === n && e.push(encodeURIComponent(t))
    }

    function i(e) {
      for (var t, n, r = {}, a = e.split("&"), o = 0, i = a.length; o < i; ++o)t = a[o], n = t.indexOf("="), n == -1 ? r[decodeURIComponent(t)] = "" : r[decodeURIComponent(t.slice(0, n))] = decodeURIComponent(t.slice(n + 1));
      return r
    }

    function s(e) {
      var t, n, r, a, o = e.split(/\r?\n/), i = {};
      o.pop();
      for (var s = 0, l = o.length; s < l; ++s)n = o[s], t = n.indexOf(":"), r = n.slice(0, t).toLowerCase(), a = y(n.slice(t + 1)), i[r] = a;
      return i
    }

    function l(e) {
      return /[\/+]json\b/.test(e)
    }

    function c(e) {
      return e.split(/ *; */).shift()
    }

    function u(e) {
      return e.split(/ *; */).reduce(function (e, t) {
        var n = t.split(/ *= */), r = n.shift(), a = n.shift();
        return r && a && (e[r] = a), e
      }, {})
    }

    function d(e, t) {
      t = t || {}, this.req = e, this.xhr = this.req.xhr, this.text = "HEAD" != this.req.method && ("" === this.xhr.responseType || "text" === this.xhr.responseType) || "undefined" == typeof this.xhr.responseType ? this.xhr.responseText : null, this.statusText = this.req.xhr.statusText, this._setStatusProperties(this.xhr.status), this.header = this.headers = s(this.xhr.getAllResponseHeaders()), this.header["content-type"] = this.xhr.getResponseHeader("content-type"), this._setHeaderProperties(this.header), this.body = "HEAD" != this.req.method ? this._parseBody(this.text ? this.text : this.xhr.response) : null
    }

    function p(e, t) {
      var n = this;
      this._query = this._query || [], this.method = e, this.url = t, this.header = {}, this._header = {}, this.on("end", function () {
        var e = null, t = null;
        try {
          t = new d(n)
        } catch (t) {
          return e = new Error("Parser is unable to parse the response"), e.parse = !0, e.original = t, n.xhr ? (e.rawResponse = "undefined" == typeof n.xhr.responseType ? n.xhr.responseText : n.xhr.response, e.statusCode = n.xhr.status ? n.xhr.status : null) : (e.rawResponse = null, e.statusCode = null), n.callback(e)
        }
        n.emit("response", t);
        var r;
        try {
          (t.status < 200 || t.status >= 300) && (r = new Error(t.statusText || "Unsuccessful HTTP response"), r.original = e, r.response = t, r.status = t.status)
        } catch (e) {
          r = e
        }
        r ? n.callback(r, t) : n.callback(null, t)
      })
    }

    function f(e, t) {
      var n = b("DELETE", e);
      return t && n.end(t), n
    }

    var h;
    "undefined" != typeof window ? h = window : "undefined" != typeof self ? h = self : (console.warn("Using browser-only version of superagent in non-browser environment"), h = this);
    var m = n(0x6fa5d9eec519c), v = n(4770208552087601), g = n(0x7bc8d88dd4a52), _ = n(0xfecac69ab123e), b = t = e.exports = function (e, n) {
      return "function" == typeof n ? new t.Request("GET", e).end(n) : 1 == arguments.length ? new t.Request("GET", e) : new t.Request(e, n)
    };
    t.Request = p, b.getXHR = function () {
      if (!(!h.XMLHttpRequest || h.location && "file:" == h.location.protocol && h.ActiveXObject))return new XMLHttpRequest;
      try {
        return new ActiveXObject("Microsoft.XMLHTTP")
      } catch (e) {
      }
      try {
        return new ActiveXObject("Msxml2.XMLHTTP.6.0")
      } catch (e) {
      }
      try {
        return new ActiveXObject("Msxml2.XMLHTTP.3.0")
      } catch (e) {
      }
      try {
        return new ActiveXObject("Msxml2.XMLHTTP")
      } catch (e) {
      }
      throw Error("Browser-only verison of superagent could not find XHR")
    };
    var y = "".trim ? function (e) {
      return e.trim()
    } : function (e) {
      return e.replace(/(^\s*|\s*$)/g, "")
    };
    b.serializeObject = a, b.parseString = i, b.types = {
      html: "text/html",
      json: "application/json",
      xml: "application/xml",
      urlencoded: "application/x-www-form-urlencoded",
      form: "application/x-www-form-urlencoded",
      "form-data": "application/x-www-form-urlencoded"
    }, b.serialize = {
      "application/x-www-form-urlencoded": a,
      "application/json": JSON.stringify
    }, b.parse = {
      "application/x-www-form-urlencoded": i,
      "application/json": JSON.parse
    }, d.prototype.get = function (e) {
      return this.header[e.toLowerCase()]
    }, d.prototype._setHeaderProperties = function (e) {
      var t = this.header["content-type"] || "";
      this.type = c(t);
      var n = u(t);
      for (var r in n)this[r] = n[r]
    }, d.prototype._parseBody = function (e) {
      var t = b.parse[this.type];
      return !t && l(this.type) && (t = b.parse["application/json"]), t && e && (e.length || e instanceof Object) ? t(e) : null
    }, d.prototype._setStatusProperties = function (e) {
      1223 === e && (e = 204);
      var t = e / 100 | 0;
      this.status = this.statusCode = e, this.statusType = t, this.info = 1 == t, this.ok = 2 == t, this.clientError = 4 == t, this.serverError = 5 == t, this.error = (4 == t || 5 == t) && this.toError(), this.accepted = 202 == e, this.noContent = 204 == e, this.badRequest = 400 == e, this.unauthorized = 401 == e, this.notAcceptable = 406 == e, this.notFound = 404 == e, this.forbidden = 403 == e
    }, d.prototype.toError = function () {
      var e = this.req, t = e.method, n = e.url, r = "cannot " + t + " " + n + " (" + this.status + ")", a = new Error(r);
      return a.status = this.status, a.method = t, a.url = n, a
    }, b.Response = d, m(p.prototype), v(p.prototype), p.prototype.type = function (e) {
      return this.set("Content-Type", b.types[e] || e), this
    }, p.prototype.responseType = function (e) {
      return this._responseType = e, this
    }, p.prototype.accept = function (e) {
      return this.set("Accept", b.types[e] || e), this
    }, p.prototype.auth = function (e, t, n) {
      switch (n || (n = {type: "basic"}), n.type) {
        case"basic":
          var r = btoa(e + ":" + t);
          this.set("Authorization", "Basic " + r);
          break;
        case"auto":
          this.username = e, this.password = t
      }
      return this
    }, p.prototype.query = function (e) {
      return "string" != typeof e && (e = a(e)), e && this._query.push(e), this
    }, p.prototype.attach = function (e, t, n) {
      if (this._data)throw Error("superagent can't mix .send() and .attach()");
      return this._getFormData().append(e, t, n || t.name), this
    }, p.prototype._getFormData = function () {
      return this._formData || (this._formData = new h.FormData), this._formData
    }, p.prototype.callback = function (e, t) {
      var n = this._callback;
      this.clearTimeout(), e && this.emit("error", e), n(e, t)
    }, p.prototype.crossDomainError = function () {
      var e = new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");
      e.crossDomain = !0, e.status = this.status, e.method = this.method, e.url = this.url, this.callback(e)
    }, p.prototype.buffer = p.prototype.ca = p.prototype.agent = function () {
      return console.warn("This is not supported in browser version of superagent"), this
    }, p.prototype.pipe = p.prototype.write = function () {
      throw Error("Streaming is not supported in browser version of superagent")
    }, p.prototype._timeoutError = function () {
      var e = this._timeout, t = new Error("timeout of " + e + "ms exceeded");
      t.timeout = e, this.callback(t)
    }, p.prototype._appendQueryString = function () {
      var e = this._query.join("&");
      e && (this.url += ~this.url.indexOf("?") ? "&" + e : "?" + e)
    }, p.prototype._isHost = function (e) {
      return e && "object" == typeof e && !Array.isArray(e) && "[object Object]" !== Object.prototype.toString.call(e)
    }, p.prototype.end = function (e) {
      var t = this, n = this.xhr = b.getXHR(), a = this._timeout, o = this._formData || this._data;
      this._callback = e || r, n.onreadystatechange = function () {
        if (4 == n.readyState) {
          var e;
          try {
            e = n.status
          } catch (t) {
            e = 0
          }
          if (0 == e) {
            if (t.timedout)return t._timeoutError();
            if (t._aborted)return;
            return t.crossDomainError()
          }
          t.emit("end")
        }
      };
      var i = function (e, n) {
        n.total > 0 && (n.percent = n.loaded / n.total * 100), n.direction = e, t.emit("progress", n)
      };
      if (this.hasListeners("progress"))try {
        n.onprogress = i.bind(null, "download"), n.upload && (n.upload.onprogress = i.bind(null, "upload"))
      } catch (e) {
      }
      if (a && !this._timer && (this._timer = setTimeout(function () {
          t.timedout = !0, t.abort()
        }, a)), this._appendQueryString(), this._sort) {
        var s = this.url.indexOf("?");
        if (~s) {
          var c = this.url.substring(s + 1).split("&");
          _(this._sort) ? c.sort(this._sort) : c.sort()
        }
        this.url = this.url.substring(0, s) + "?" + c.join("&")
      }
      if (this.username && this.password ? n.open(this.method, this.url, !0, this.username, this.password) : n.open(this.method, this.url, !0), this._withCredentials && (n.withCredentials = !0), !this._formData && "GET" != this.method && "HEAD" != this.method && "string" != typeof o && !this._isHost(o)) {
        var u = this._header["content-type"], d = this._serializer || b.serialize[u ? u.split(";")[0] : ""];
        !d && l(u) && (d = b.serialize["application/json"]), d && (o = d(o))
      }
      for (var p in this.header)null != this.header[p] && n.setRequestHeader(p, this.header[p]);
      return this._responseType && (n.responseType = this._responseType), this.emit("request", this), n.send("undefined" != typeof o ? o : null), this
    }, b.get = function (e, t, n) {
      var r = b("GET", e);
      return "function" == typeof t && (n = t, t = null), t && r.query(t), n && r.end(n), r
    }, b.head = function (e, t, n) {
      var r = b("HEAD", e);
      return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }, b.options = function (e, t, n) {
      var r = b("OPTIONS", e);
      return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }, b.del = f, b.delete = f, b.patch = function (e, t, n) {
      var r = b("PATCH", e);
      return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }, b.post = function (e, t, n) {
      var r = b("POST", e);
      return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }, b.put = function (e, t, n) {
      var r = b("PUT", e);
      return "function" == typeof t && (n = t, t = null), t && r.send(t), n && r.end(n), r
    }
  },
  0xfecac69ab123e: function (e, t, n) {
    function r(e) {
      var t = a(e) ? Object.prototype.toString.call(e) : "";
      return "[object Function]" === t
    }

    var a = n(0x7bc8d88dd4a52);
    e.exports = r
  },
  0x7bc8d88dd4a52: function (e, t) {
    function n(e) {
      return null !== e && "object" == typeof e
    }

    e.exports = n
  },
  4770208552087601: function (e, t, n) {
    function r(e) {
      if (e)return a(e)
    }

    function a(e) {
      for (var t in r.prototype)e[t] = r.prototype[t];
      return e
    }

    var o = n(0x7bc8d88dd4a52);
    e.exports = r, r.prototype.clearTimeout = function () {
      return this._timeout = 0, clearTimeout(this._timer), this
    }, r.prototype.parse = function (e) {
      return this._parser = e, this
    }, r.prototype.serialize = function (e) {
      return this._serializer = e, this
    }, r.prototype.timeout = function (e) {
      return this._timeout = e, this
    }, r.prototype.then = function (e, t) {
      if (!this._fullfilledPromise) {
        var n = this;
        this._fullfilledPromise = new Promise(function (e, t) {
          n.end(function (n, r) {
            n ? t(n) : e(r)
          })
        })
      }
      return this._fullfilledPromise.then(e, t)
    }, r.prototype.catch = function (e) {
      return this.then(void 0, e)
    }, r.prototype.use = function (e) {
      return e(this), this
    }, r.prototype.get = function (e) {
      return this._header[e.toLowerCase()]
    }, r.prototype.getHeader = r.prototype.get, r.prototype.set = function (e, t) {
      if (o(e)) {
        for (var n in e)this.set(n, e[n]);
        return this
      }
      return this._header[e.toLowerCase()] = t, this.header[e] = t, this
    }, r.prototype.unset = function (e) {
      return delete this._header[e.toLowerCase()], delete this.header[e], this
    }, r.prototype.field = function (e, t) {
      if (null === e || void 0 === e)throw new Error(".field(name, val) name can not be empty");
      if (o(e)) {
        for (var n in e)this.field(n, e[n]);
        return this
      }
      if (Array.isArray(t)) {
        for (var r in t)this.field(e, t[r]);
        return this
      }
      if (null === t || void 0 === t)throw new Error(".field(name, val) val can not be empty");
      return "boolean" == typeof t && (t = "" + t), this._getFormData().append(e, t), this
    }, r.prototype.abort = function () {
      return this._aborted ? this : (this._aborted = !0, this.xhr && this.xhr.abort(), this.req && this.req.abort(), this.clearTimeout(), this.emit("abort"), this)
    }, r.prototype.withCredentials = function () {
      return this._withCredentials = !0, this
    }, r.prototype.redirects = function (e) {
      return this._maxRedirects = e, this
    }, r.prototype.toJSON = function () {
      return {method: this.method, url: this.url, data: this._data, headers: this._header}
    }, r.prototype.send = function (e) {
      var t = o(e), n = this._header["content-type"];
      if (t && !this._data)Array.isArray(e) ? this._data = [] : this._isHost(e) || (this._data = {}); else if (e && this._data && this._isHost(this._data))throw Error("Can't merge these send calls");
      if (t && o(this._data))for (var r in e)this._data[r] = e[r]; else"string" == typeof e ? (n || this.type("form"), n = this._header["content-type"], "application/x-www-form-urlencoded" == n ? this._data = this._data ? this._data + "&" + e : e : this._data = (this._data || "") + e) : this._data = e;
      return !t || this._isHost(e) ? this : (n || this.type("json"), this)
    }, r.prototype.sortQuery = function (e) {
      return this._sort = "undefined" == typeof e || e, this
    }
  },
  0xefa742133d960: function (e, t, n) {
    (function (e) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : {default: e}
      }

      function a(e) {
        var t = e.cache_key || "listArticleReact___all__", n = e.data || [];
        try {
          localStorage[t] = (0, y.default)(n), localStorage[t + "_lastmodified"] = +new Date
        } catch (e) {
          console.log("æµè§ˆå™¨å·²ç¦ç”¨localStorage!")
        }
      }

      function o(e, t, n) {
        if (t.listData[t.currentChannel])return !1;
        var r = e.cache_key;
        if (!r)return !1;
        var a = localStorage.getItem(r);
        if (!a)return !1;
        a = JSON.parse(a);
        var o = Number(localStorage.getItem(r + "_lastmodified" || 0)), i = +new Date - o, s = 6e5;
        return !("number" != typeof o || i >= s) && (n({
            type: "FETCH_LIST_DATA",
            reddit: (0, _.default)({}, t.currentChannel, a)
          }), !0)
      }

      function i(t, n) {
        var r = n.direction || "prepend", o = (0, v.default)({}, t.listData), i = o[t.currentChannel] || [], s = 0, c = 0;
        i.length && (s = i[i.length - 1].behot_time, c = i[0].behot_time);
        var u = {
          tag: t.currentChannel,
          ac: "wap",
          count: 20,
          format: "json_raw",
          as: (0, A.default)().as,
          cp: (0, A.default)().cp,
          max_behot_time: "append" === r ? s : void 0,
          min_behot_time: "prepend" === r ? c : void 0
        };
        return function (n) {
          return x.default.get("/list/?" + E.default.stringify(u)).end(function (s, c) {
            if (n(l((0, _.default)({}, t.currentChannel, !1))), s)return n({
              type: "FETCH_LIST_TIPS",
              reddit: F.NETWORKTIPS.RETRY
            }), !1;
            n({type: "FETCH_LIST_TIPS", reddit: F.NETWORKTIPS.LOADING});
            var u = JSON.parse(c.text);
            if (n({
                type: "FETCH_LIST_NUMBER",
                reddit: u.return_count
              }), 0 === u.return_count)return void n({type: "FETCH_LIST_TIPS", reddit: F.NETWORKTIPS.RECOMMENDEMPTY});
            var d = u.data;
            t.doADTest.doADTest && d.splice(t.doADTest.position - 1, 0, {doADTest: !0}), a({
              cache_key: "listArticleReact_" + (t.currentChannel || "__all__"),
              data: d
            }), "append" === r ? i = [].concat(i, d) : "prepend" === r && (i = [].concat(d, i)), o[t.currentChannel] = i, n({
              type: "FETCH_LIST_DATA",
              reddit: (0, _.default)({}, t.currentChannel, i)
            }), "prepend" === r && (n({
              type: "FETCH_LIST_SHOW_REFRESHTIP",
              reddit: !0
            }), setTimeout(function () {
              n({type: "FETCH_LIST_SHOW_REFRESHTIP", reddit: !1})
            }, 2e3), L.default.scrollTop()), setTimeout(function () {
              e(window).trigger("load")
            }, 300)
          })
        }
      }

      function s(e, t) {
        return !o({cache_key: "listArticleReact_" + e.currentChannel}, e, t) && !e.fetchListLock[e.currentChannel]
      }

      function l(e) {
        return {type: "FETCH_LIST_LOCK", reddit: e}
      }

      function c() {
        var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
        return function (t, n) {
          if (s(n(), t))return t(l((0, _.default)({}, n().currentChannel, !0))), t({
            type: "ROTATE_REFRESH_BTN",
            reddit: !0
          }), setTimeout(function () {
            t({type: "ROTATE_REFRESH_BTN", reddit: !1})
          }, 1e3), t(i(n(), e))
        }
      }

      function u(e) {
        return {type: "SHOW_POPUP_BANNER", reddit: e}
      }

      function d(e) {
        return function (t, n) {
          var r = n();
          e !== r.currentChannel && t({
            type: "CHANNEL_SCROLL_POSITION",
            reddit: (0, _.default)({}, r.currentChannel, window.scrollY)
          }), e !== r.currentChannel && r.listData[e] ? t({
            type: "CHANGE_CHANNEL",
            reddit: e
          }) : (t({type: "CHANGE_CHANNEL", reddit: e}), t(c()))
        }
      }

      function p(e) {
        return {type: "LOAD_GTM_SCRIPT", reddit: e}
      }

      function f(e) {
        return function (t, n) {
          var r = n(), a = r.listData;
          return a[r.currentChannel].splice(e.pos, 0, {
            showAdMaterial: !0,
            adMaterial: e.adMaterial
          }), t({type: "FETCH_LIST_DATA", reddit: a})
        }
      }

      function h(e) {
        return {type: "DO_AD_TEST", reddit: e}
      }

      Object.defineProperty(t, "__esModule", {value: !0});
      var m = n(0xd9a8125d8e0e5), v = r(m), g = n(0x5c6f29e468825), _ = r(g), b = n(0xeb9e744742586), y = r(b);
      t.fetchListIfNeeded = c, t.showPopupBanner = u, t.clickHeaderChannel = d, t.loadGTMScript = p, t.addADMaterial = f, t.doADTest = h;
      var w = n(0x9f6493926219a), x = r(w), k = n(4994721667460726), E = r(k), T = n(5334991700515787), A = r(T), F = n(5980400199274178), O = n(5359030257400059), L = r(O)
    }).call(t, n(5915487851987839))
  },
  0xca902020511ee: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    var a = n(6553419251878407), o = r(a), i = n(6861363765270330), s = r(i), l = n(7220449874153128), c = r(l), u = n(7004395598908739), d = r(u), p = n(0x85e0a08d90f85), f = r(p), h = n(0x48bee20605e56), m = r(h), v = n(5209925294297163), g = r(v);
    n(0x5cc758217f0d1);
    var _ = function (e) {
      function t() {
        return (0, s.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, o.default)(t)).apply(this, arguments))
      }

      return (0, f.default)(t, e), (0, c.default)(t, [{
        key: "handleClick", value: function (e) {
          maevent("creative", "download", e)
        }
      }, {
        key: "render", value: function () {
          var e = this, t = this.props.datum;
          return m.default.createElement("section", {className: "has_action"}, m.default.createElement("a", {
            href: t.href,
            className: "article_link ad-material-link clearfix",
            onClick: function () {
              return e.handleClick(t.version)
            }
          }, m.default.createElement("h3", {className: "dotdot line3"}, " ", t.title), m.default.createElement("div", {className: "list_img_holder_large"}, m.default.createElement(g.default, {src: t.src})), m.default.createElement("div", {className: "item_info"}, m.default.createElement("span", {className: "ad-material space"}, "APP"), m.default.createElement("span", {className: "src"}, "ä»Šæ—¥å¤´æ¡"))))
        }
      }]), t
    }(h.Component);
    e.exports = _
  },
  0x5cc758217f0d1: 468537700344184,
  5938161677575104: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    var a = n(6553419251878407), o = r(a), i = n(6861363765270330), s = r(i), l = n(7220449874153128), c = r(l), u = n(7004395598908739), d = r(u), p = n(0x85e0a08d90f85), f = r(p), h = n(0x48bee20605e56), m = r(h), v = n(755734527867252), g = r(v), _ = n(8682704682537579), b = r(_), y = n(5359030257400059), w = r(y), x = n(6412758555905976), k = ["bonus-container", "bonus-wrapper", "bonus-icon", "weixin-bonus", "wap-bonus"], E = w.default.confused(k).map, T = x[0][1];
    k.forEach(function (e) {
      T = T.replace(new RegExp(e, "ig"), E[e])
    });
    var A = function (e) {
      function t() {
        var e, n, r, a;
        (0, s.default)(this, t);
        for (var i = arguments.length, l = Array(i), c = 0; c < i; c++)l[c] = arguments[c];
        return n = r = (0, d.default)(this, (e = t.__proto__ || (0, o.default)(t)).call.apply(e, [this].concat(l))), r.state = {
          showBonus: !1,
          showIcon: !0
        }, a = n, (0, d.default)(r, a)
      }

      return (0, f.default)(t, e), (0, c.default)(t, [{
        key: "componentDidMount", value: function () {
          var e = T, t = document.head || document.getElementsByTagName("head")[0], n = document.createElement("style");
          if (n.type = "text/css", n.styleSheet)n.styleSheet.cssText = e; else {
            var r = document.createTextNode(e);
            n.appendChild(r)
          }
          t.appendChild(n)
        }
      }, {
        key: "showBonus", value: function () {
          maevent("lucky_money", "click"), this.setState({showBonus: !0}), this.setState({showIcon: !1})
        }
      }, {
        key: "clickBonus", value: function () {
          maevent("lucky_money", "download");
          var e = "";
          g.default.os.android ? e = g.default.browser.weixin ? "//d.toutiao.com/R7d3/" : "//d.toutiao.com/fABU/?append=%7B%22postdata%22%3A%5B%7B%22group_id%22%3A6767223601%2C%22__type__%22%3A%22redpack%22%7D%5D%7D&extra=%7B%22group_id%22%3A6767223601%2C%22__type__%22%3A%22redpack%22%2C%22channel%22%3A%22wap_hongbao_2%22%7D" : g.default.os.iphone && (e = "//d.toutiao.com/FLFG/?append=%7B%22postdata%22%3A%5B%7B%22group_id%22%3A6767223601%2C%22__type__%22%3A%22redpack%22%7D%5D%7D&extra=%7B%22group_id%22%3A6767223601%2C%22__type__%22%3A%22redpack%22%2C%22channel%22%3A%22wap_hongbao_ios%22%7D"), (0, b.default)({downloadLink: e})
        }
      }, {
        key: "closeBonus", value: function (e) {
          e.preventDefault(), this.setState({showBonus: !1})
        }
      }, {
        key: "render", value: function () {
          var e = this, t = g.default.browser.weixin ? "weixin-bonus" : "wap-bonus", n = this.state, r = n.showBonus, a = n.showIcon;
          return m.default.createElement("div", {className: E["bonus-container"]}, r ? m.default.createElement("div", {className: "mask"}) : null, m.default.createElement("div", {className: E["bonus-wrapper"]}, a && !r ? m.default.createElement("i", {
            className: E["bonus-icon"],
            onClick: function () {
              return e.showBonus()
            }
          }) : null, r ? m.default.createElement("a", {
            href: "javascript:void(0)", className: E[t], onClick: function () {
              return e.clickBonus()
            }
          }, m.default.createElement("i", {
            className: "bonus-close", onClick: function (t) {
              return e.closeBonus(t)
            }
          })) : null))
        }
      }]), t
    }(h.Component);
    e.exports = A
  },
  6412758555905976: function (e, t, n) {
    t = e.exports = n(0xf9826cc890569)(), t.push([e.id, ".bonus-container .bonus-icon{position:fixed;top:50%;display:inline-block;width:2.0625rem;height:2.5rem;bottom:.5rem;right:.46875rem;background:url(" + n(8361774273605034) + ") no-repeat 50%;background-size:cover;z-index:1400}.bonus-container .bonus-close{width:40px;height:32px;background:url(" + n(5978336771477473) + ') no-repeat 50%;background-size:17px;position:absolute;left:0;top:0;opacity:.7}[data-dpr="2"] .bonus-container .bonus-close{width:80px}[data-dpr="3"] .bonus-container .bonus-close{width:120px}[data-dpr="2"] .bonus-container .bonus-close{height:64px}[data-dpr="3"] .bonus-container .bonus-close{height:96px}[data-dpr="2"] .bonus-container .bonus-close{background-size:34px}[data-dpr="3"] .bonus-container .bonus-close{background-size:51px}.bonus-container .wap-bonus,.bonus-container .weixin-bonus{position:fixed;width:8.65625rem;height:11.5625rem;top:50%;left:50%;-webkit-transform:translate(-50%,-50%);-moz-transform:translate(-50%,-50%);-ms-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:1400}.bonus-container .weixin-bonus{background:url(' + n(6820601010923534) + ") no-repeat 50%;background-size:cover}.bonus-container .wap-bonus{background:url(" + n(8673627881205878) + ") no-repeat 50%;background-size:cover}.bonus-container .bonus{display:block}.bonus-container .mask{display:block;position:absolute;width:100%;height:100%;z-index:1000;left:0;top:0;background:rgba(0,0,0,.3)}", ""])
  },
  8404547702662252: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    var a = n(6553419251878407), o = r(a), i = n(6861363765270330), s = r(i), l = n(7220449874153128), c = r(l), u = n(7004395598908739), d = r(u), p = n(0x85e0a08d90f85), f = r(p), h = n(0x48bee20605e56), m = (r(h), n(755734527867252)), v = r(m), g = function (e) {
      function t() {
        return (0, s.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, o.default)(t)).apply(this, arguments))
      }

      return (0, f.default)(t, e), (0, c.default)(t, [{
        key: "componentDidMount", value: function () {
          var e = document.createElement("script");
          e.text = "var ttBannerConf", document.body.appendChild(e);
          var t = "//d.toutiao.com/N13p/";
          t = v.default.browser.weixin ? "//d.toutiao.com/2uYv/" : t, ttBannerConf = {
            pos: "bottom",
            downloadLink: t,
            callback: function () {
              this._el.on("click", ".download", function () {
                maevent("bottom_banner", "download")
              })
            },
            isGrowthWap: !0
          };
          var n = document.createElement("script");
          n.setAttribute("src", "//s3.pstatp.com/growth/fe_sdk/bannersdk/loader.js"), document.body.appendChild(n)
        }
      }, {
        key: "render", value: function () {
          return null
        }
      }]), t
    }(h.Component);
    e.exports = g
  },
  0xfb5342f080880: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    var a, o, i = n(6553419251878407), s = r(i), l = n(6861363765270330), c = r(l), u = n(7220449874153128), d = r(u), p = n(7004395598908739), f = r(p), h = n(0x85e0a08d90f85), m = r(h), v = n(0x48bee20605e56), g = (r(v), n(6941063816955236)), _ = n(0xefa742133d960), b = n(755734527867252), y = r(b), w = (a = (0, g.connect)(), a(o = function (e) {
      function t() {
        return (0, c.default)(this, t), (0, f.default)(this, (t.__proto__ || (0, s.default)(t)).apply(this, arguments))
      }

      return (0, m.default)(t, e), (0, d.default)(t, [{
        key: "componentDidMount", value: function () {
          window.ttGTM = {};
          var e = this;
          !function (t, n, r, a, o) {
            t[a] = t[a] || [], t[a].push({"gtm.start": (new Date).getTime(), event: "gtm.js"});
            var i = n.getElementsByTagName(r)[0], s = n.createElement(r), l = "dataLayer" != a ? "&l=" + a : "";
            s.async = !0, s.src = "//www.googletagmanager.com/gtm.js?id=" + o + l, s.onload = function () {
              var t = {};
              t = window.isListPage ? window.ttGTM.list : y.default.browser.weixin ? window.ttGTM.weixin : window.ttGTM.detail, window.ttGTM.xpromtOptions && (t.xpromt = window.ttGTM.xpromtOptions), e.props.dispatch((0, _.loadGTMScript)(t || {}))
            }, i.parentNode.insertBefore(s, i)
          }(window, document, "script", "dataLayer", "GTM-NRPFDC")
        }
      }, {
        key: "render", value: function () {
          return null
        }
      }]), t
    }(v.Component)) || o);
    e.exports = w
  },
  0x7722fad92192d: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    function a(e) {
      var t = e.rotateRefreshBtn, n = e.GTMValue;
      return {rotateRefreshBtn: t, GTMValue: n}
    }

    var o, i, s = n(6553419251878407), l = r(s), c = n(6861363765270330), u = r(c), d = n(7220449874153128), p = r(d), f = n(7004395598908739), h = r(f), m = n(0x85e0a08d90f85), v = r(m), g = n(0x48bee20605e56), _ = r(g), b = n(6941063816955236), y = n(0xefa742133d960), w = n(0x66c823d1176c2), x = r(w), k = n(755734527867252), E = (r(k), n(0xe85a386169c4b)), T = r(E), A = n(0xcc15c9e3f2142), F = (r(A), n(5359030257400059)), O = (r(F), n(303016322497613)), L = r(O), C = n(7484092472500367), S = r(C), D = n(8111156497284432), M = r(D);
    n(0xca65ab632bfef);
    var j = (o = (0, b.connect)(a), o(i = function (e) {
      function t() {
        var e, n, r, a;
        (0, u.default)(this, t);
        for (var o = arguments.length, i = Array(o), s = 0; s < o; s++)i[s] = arguments[s];
        return n = r = (0, h.default)(this, (e = t.__proto__ || (0, l.default)(t)).call.apply(e, [this].concat(i))), r.state = {showMsg: !1}, a = n, (0, h.default)(r, a)
      }

      return (0, v.default)(t, e), (0, p.default)(t, [{
        key: "componentDidMount", value: function () {
          !T.default.getCookieForLocal("show_msg") && this.setState({showMsg: !0})
        }
      }, {
        key: "onRefreshBtnClick", value: function () {
          var e = this.props.dispatch;
          e((0, y.fetchListIfNeeded)()), S.default.scrollChangeDisable = !0, M.default.scrollChangeDisable = !0, maevent("refresh", "click")
        }
      }, {
        key: "onMsgClick", value: function () {
          this.setState({showMsg: !1});
          var e = this.props.dispatch;
          e((0, y.showPopupBanner)(!0)), T.default.setCookieForLocal("show_msg", !0, 864e5), maevent("left_button", "click")
        }
      }, {
        key: "render", value: function () {
          var e = this, t = (0, x.default)("refresh_btn", "btn", {rotate: this.props.rotateRefreshBtn}), n = this.props.GTMValue.hideTopBar || this.props.hideTopBar, r = this.props.GTMValue.hideMsgBox || this.props.hideMsgBox;
          return _.default.createElement("header", {id: "indexHeader"}, n ? null : _.default.createElement("div", {className: "top_bar"}, _.default.createElement("div", {
            className: "abs_m",
            onClick: function () {
              return e.onRefreshBtnClick()
            }
          }, _.default.createElement("a", {
            href: "#",
            className: "refresh_title btn"
          }), _.default.createElement("a", {
            ref: "refreshBtn",
            href: "#",
            className: t
          })), _.default.createElement("div", {className: "abs_l"}, !r && _.default.createElement("a", {
              href: "javascript:;",
              className: "msg-box",
              onClick: function () {
                return e.onMsgClick()
              }
            }, this.state.showMsg && _.default.createElement("div", {className: "circle"}))), _.default.createElement("div", {className: "abs_r"}, _.default.createElement("a", {
            href: "/search/",
            className: "btn search"
          }))), _.default.createElement(L.default, null))
        }
      }]), t
    }(g.Component)) || i);
    e.exports = j
  },
  0xca65ab632bfef: 468537700344184,
  5209925294297163: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    var a = n(5909167566102083), o = r(a), i = n(6553419251878407), s = r(i), l = n(6861363765270330), c = r(l), u = n(7220449874153128), d = r(u), p = n(7004395598908739), f = r(p), h = n(0x85e0a08d90f85), m = r(h), v = n(0x48bee20605e56), g = r(v), _ = function (e) {
      function t(e) {
        (0, c.default)(this, t);
        var n = (0, f.default)(this, (t.__proto__ || (0, s.default)(t)).call(this, e));
        return n.state = {inView: !1}, n.lazyEvent = n.lazyEvent.bind(n), n
      }

      return (0, m.default)(t, e), (0, d.default)(t, [{
        key: "hanleError", value: function (e) {
          Math.floor(100 * Math.random()) || gaeventTest("image", "error", e)
        }
      }, {
        key: "hanleLoad", value: function () {
        }
      }, {
        key: "inView", value: function (e) {
          var t = e.getBoundingClientRect();
          return t.top >= 0 && t.top <= (window.innerHeight || document.documentElement.clientHeight) || t.bottom >= 0 && t.bottom <= (window.innerHeight || document.documentElement.clientHeight)
        }
      }, {
        key: "componentDidMount", value: function () {
          window.addEventListener("scroll", this.lazyEvent), this.lazyEvent()
        }
      }, {
        key: "lazyEvent", value: function () {
          this.inView(this._image) && (this.setState({inView: !0}), window.removeEventListener("scroll", this.lazyEvent))
        }
      }, {
        key: "componentWillUnmount", value: function () {
          window.removeEventListener("scroll", this.lazyEvent)
        }
      }, {
        key: "render", value: function () {
          var e = this;
          return g.default.createElement("div", {
            ref: function (t) {
              e._image = t
            }
          }, this.state.inView ? g.default.createElement("img", (0, o.default)({}, this.props, {
            onError: function () {
              return e.hanleError(e.props.src)
            }, onLoad: function () {
              return e.hanleLoad()
            }
          })) : null)
        }
      }]), t
    }(v.Component);
    e.exports = _
  },
  6596327922181385: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    function a(e) {
      var t = e.currentChannel;
      return {currentChannel: t}
    }

    var o, i, s = n(6553419251878407), l = r(s), c = n(6861363765270330), u = r(c), d = n(7220449874153128), p = r(d), f = n(7004395598908739), h = r(f), m = n(0x85e0a08d90f85), v = r(m), g = n(0x48bee20605e56), _ = r(g), b = n(6941063816955236), y = n(5209925294297163), w = r(y), x = n(0x66c823d1176c2), k = r(x), E = n(0xba05d71f555a0), T = function (e) {
      var t = e.datum, n = (0, k.default)("dotdot", "line3", {"image-margin-right": t.middle_mode}), r = (0, k.default)("src", "space", {recommend_label: "ç™¾åº¦ç»éªŒ" === t.source}), a = (0, k.default)("dislike-news", "fr", {"mid-space": t.middle_mode}), o = (0, k.default)("item_detail", {desc: t.middle_mode});
      return _.default.createElement("a", {
        href: "javascript: void(0)",
        "data-action-label": t.action_label,
        "data-tag": t.tag,
        className: "article_link clearfix "
      }, _.default.createElement("div", {className: o}, _.default.createElement("h3", {className: n}, t.title), t.more_mode && _.default.createElement("div", {className: "list_image"}, _.default.createElement("ul", {className: "clearfix"}, t.image_list.map(function (e, t) {
          return _.default.createElement("li", {
            key: t,
            className: "list_img_holder"
          }, _.default.createElement(w.default, {src: e.url}))
        }))), t.large_mode && _.default.createElement("div", {className: "list_img_holder_large list_img_holder_large_fix"}, _.default.createElement(w.default, {src: t.large_image_url}), t.has_video && _.default.createElement("span", {className: "video-btn"})), _.default.createElement("div", {className: "item_info"}, _.default.createElement("div", null, t.hot && _.default.createElement("span", {className: "hot_label space"}, "çƒ­"), t.recommend && _.default.createElement("span", {className: "recommend_label space"}, "è"), t.subject_label && _.default.createElement("span", {className: "subject_label"}, " ", t.subject_label), !t.subject_label && _.default.createElement("span", {className: r}, t.source), _.default.createElement("span", {className: "cmt space"}, "è¯„è®º ", t.comment_count), !t.middle_mode && _.default.createElement("span", {
          className: "time",
          title: t.datetime
        }, t.timeago), _.default.createElement("span", {
        "data-id": t.group_id,
        className: a
      })))), t.middle_mode && _.default.createElement("div", {className: "list_img_holder"}, _.default.createElement(w.default, {src: t.image_url}), t.has_video && _.default.createElement("span", {className: "video-btn"})))
    }, A = (o = (0, b.connect)(a), o(i = function (e) {
      function t() {
        return (0, u.default)(this, t), (0, h.default)(this, (t.__proto__ || (0, l.default)(t)).apply(this, arguments))
      }

      return (0, v.default)(t, e), (0, p.default)(t, [{
        key: "handleClick", value: function (e) {
          maevent("feed", this.props.currentChannel, "click-" + e.index), (0, E.actionLog)({
            label: e.action_label,
            value: e.group_id,
            extra_data: {item_id: e.item_id || 0}
          }), location.href = e.source_url
        }
      }, {
        key: "render", value: function () {
          var e = this, t = this.props.datum;
          t.has_video && (t.large_mode = !1, t.middle_mode = !0, t.image_url = t.image_url || t.large_image_url);
          var n = (0, k.default)({middle_mode: t.middle_mode, has_action: !0, "item-hidden": t.honey});
          return _.default.createElement("section", {
            className: n,
            "data-hot-time": t.behot_time,
            "data-group-id": t.group_id,
            "data-item-id": t.item_id,
            "data-format": "0",
            onClick: function () {
              return e.handleClick(t)
            }
          }, _.default.createElement(T, {datum: t}))
        }
      }]), t
    }(g.Component)) || i);
    e.exports = A
  },
  0xc1f215d6e560d: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    var a = n(6553419251878407), o = r(a), i = n(6861363765270330), s = r(i), l = n(7220449874153128), c = r(l), u = n(7004395598908739), d = r(u), p = n(0x85e0a08d90f85), f = r(p), h = n(0x48bee20605e56), m = r(h), v = (n(6941063816955236), n(0x66c823d1176c2)), g = r(v), _ = n(0x8623f4947ef4a), b = r(_);
    n(7492162156586266);
    var y = function (e) {
      function t() {
        (0, s.default)(this, t);
        var e = (0, d.default)(this, (t.__proto__ || (0, o.default)(t)).call(this));
        return e.createMarkup = e.createMarkup.bind(e), e
      }

      return (0, f.default)(t, e), (0, c.default)(t, [{
        key: "createMarkup", value: function (e) {
          var t = b.default.render(e);
          return {__html: t}
        }
      }, {
        key: "render", value: function () {
          var e = this.props.datum, t = (0, g.default)({
            middle_mode: e.middle_mode,
            taobaoAd: "taobao" === e.ad_type,
            has_action: !0,
            "item-hidden": e.honey
          });
          return m.default.createElement("section", {
            className: t,
            "data-hot-time": e.behot_time,
            "data-group-id": e.group_id,
            "data-item-id": e.item_id,
            "data-format": "0",
            dangerouslySetInnerHTML: this.createMarkup(e)
          })
        }
      }]), t
    }(h.Component);
    e.exports = y
  },
  7492162156586266: 468537700344184,
  0x8623f4947ef4a: function (e, t, n) {
    var r, a = n(591123963979967);
    r = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], {autoescape: !0});
    var o = a.webpackDependencies || (a.webpackDependencies = {}), i = n(506781095924607);
    !function () {
      (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["app/components/ListCardAD/template.nunjucks"] = function () {
        function e(e, t, n, r, a) {
          var o = null, i = null, s = "";
          try {
            var l = null;
            if (s += '\n<i class="icon_ad">\n    <span data-show="show"\n        ad-log-extra="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "log_extra"), e.opts.autoescape), s += '"\n        data-track="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "ad_track_url"), e.opts.autoescape), s += '"\n        ad-id="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "ad_id"), e.opts.autoescape), s += '"\n        ad-tag="embeded_ad"\n        ad-label="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "ad_label"), e.opts.autoescape), s += '">\n    </span>\n</i>\n\n', r.contextOrFrameLookup(t, n, "is_download_ad") || r.contextOrFrameLookup(t, n, "is_phone_ad")) {
              if (s += '\n<div class="article_link clearfix creative_type"\n    ad-tag="{tag}}"\n    ad-url="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "source_url"), e.opts.autoescape), s += '"\n    ', r.contextOrFrameLookup(t, n, "is_download_ad") && (s += 'ad-load="true"'), s += '\n    ad-id="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "ad_id"), e.opts.autoescape), s += '"\n    ad-log-extra="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "log_extra"), e.opts.autoescape), s += '">\n\n    ', 2 == r.contextOrFrameLookup(t, n, "image_mode") && (s += '\n    <div class="desc">\n    '), s += '\n\n    <h3 class="dotdot line3 ', 2 == r.contextOrFrameLookup(t, n, "image_mode") && (s += "image-margin-right"), s += '"\n        ', r.contextOrFrameLookup(t, n, "highlight") && (s += 'highlight="', s += r.suppressValue(e.getFilter("dump").call(t, r.memberLookup(r.contextOrFrameLookup(t, n, "highlight"), "title")), e.opts.autoescape), s += '"'), s += ">\n        ", s += r.suppressValue(r.contextOrFrameLookup(t, n, "title"), e.opts.autoescape), s += "\n    </h3>\n\n    ", 4 == r.contextOrFrameLookup(t, n, "image_mode")) {
                s += '\n    <div class="list_image">\n        <ul class="clearfix">\n            ', n = n.push();
                var c = r.contextOrFrameLookup(t, n, "imglist");
                if (c)for (var u = c.length, d = 0; d < c.length; d++) {
                  var p = c[d];
                  n.set("img", p), n.set("loop.index", d + 1), n.set("loop.index0", d), n.set("loop.revindex", u - d), n.set("loop.revindex0", u - d - 1), n.set("loop.first", 0 === d), n.set("loop.last", d === u - 1), n.set("loop.length", u), s += '\n            <li class="list_img_holder">\n                <img src="', s += r.suppressValue(r.memberLookup(p, "url"), e.opts.autoescape), s += "\" onerror='errorimg.call(this)' onload='loadimg.call(this)'>\n            </li>\n            "
                }
                n = n.pop(), s += "\n        </ul>\n    </div>\n    "
              }
              s += "\n\n    ", 3 == r.contextOrFrameLookup(t, n, "image_mode") && (s += '\n    <div class="list_img_holder_large ', r.contextOrFrameLookup(t, n, "ad_label") || (s += "list_img_holder_large_fix"), s += '">\n        <img ', r.contextOrFrameLookup(t, n, "ad_type") || (s += 'src="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "image_url"), e.opts.autoescape), s += '"'), s += " \n            onerror='errorimg.call(this)'  \n            onload='loadimg.call(this)' />\n        ", r.contextOrFrameLookup(t, n, "has_video") && (s += '\n        <span class="video-btn"></span>\n        '), s += '\n    </div>\n\n    <div class="text_info large_info">\n        ', r.contextOrFrameLookup(t, n, "source") && (s += '\n        <span class="source">', s += r.suppressValue(r.contextOrFrameLookup(t, n, "source"), e.opts.autoescape), s += "</span>\n        "), s += "\n\n        ", r.contextOrFrameLookup(t, n, "is_download_ad") && (s += '\n        <span class="download" ad-url="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "download_url"), e.opts.autoescape), s += '">ç«‹å³ä¸‹è½½</span>\n        '), s += "\n\n        ", r.contextOrFrameLookup(t, n, "is_phone_ad") && (s += '\n        <span class="phone" ad-url="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "phone_number"), e.opts.autoescape), s += '">', s += r.suppressValue(r.contextOrFrameLookup(t, n, "button_text"), e.opts.autoescape), s += "</span>\n        "), s += "\n    </div>\n    "), s += '\n\n    <div class="item_info">\n        ', r.contextOrFrameLookup(t, n, "ad_label") && (s += '\n        <span class="gg_label space">', s += r.suppressValue(r.contextOrFrameLookup(t, n, "ad_label"), e.opts.autoescape), s += "</span>\n        "), s += '\n\n        <span class="cmt space">è¯„è®º ', s += r.suppressValue(r.contextOrFrameLookup(t, n, "comment_count"), e.opts.autoescape), s += "</span>\n\n        ", 2 == !r.contextOrFrameLookup(t, n, "image_mode") && (s += '\n        <span class="time" title="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "datetime"), e.opts.autoescape), s += '">', s += r.suppressValue(r.contextOrFrameLookup(t, n, "timeago"), e.opts.autoescape), s += "</span>\n        "), s += "\n    </div>\n\n    ", 2 == r.contextOrFrameLookup(t, n, "image_mode") && (s += '\n    </div>\n    <div class="list_img_holder ">\n        <img src="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "image_url"), e.opts.autoescape), s += "\" onerror='errorimg.call(this)'  onload='loadimg.call(this)'>\n    </div>\n    "), s += "\n\n    ", 2 != r.contextOrFrameLookup(t, n, "image_mode") && 4 != r.contextOrFrameLookup(t, n, "image_mode") || (s += '\n    <div class="text_info">\n        ', r.contextOrFrameLookup(t, n, "source") && (s += '\n        <span class="source">', s += r.suppressValue(r.contextOrFrameLookup(t, n, "source"), e.opts.autoescape), s += "</span>\n        "), s += "\n\n        ", r.contextOrFrameLookup(t, n, "is_download_ad") && (s += '\n        <span class="download" ad-url="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "download_url"), e.opts.autoescape), s += '">ç«‹å³ä¸‹è½½</span>\n        '), s += "\n\n        ", r.contextOrFrameLookup(t, n, "is_phone_ad") && (s += '\n        <span class="phone" ad-url="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "phone_number"), e.opts.autoescape), s += '">', s += r.suppressValue(r.contextOrFrameLookup(t, n, "button_text"), e.opts.autoescape), s += "</span>\n        "), s += "\n    </div>\n    "), s += "\n</div>\n"
            } else {
              if (s += '\n<a href="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "source_url"), e.opts.autoescape), s += '" \n    class="article_link clearfix " \n    data-action-label="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "action_label"), e.opts.autoescape), s += '" \n    data-tag="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "tag"), e.opts.autoescape), s += '">\n\n    ', r.contextOrFrameLookup(t, n, "middle_mode") && (s += '\n    <div class="desc">\n    '), s += '\n\n    <h3 class="dotdot line3 ', r.contextOrFrameLookup(t, n, "middle_mode") && (s += "image-margin-right"), s += '" \n        ', r.contextOrFrameLookup(t, n, "highlight") && (s += 'highlight="', s += r.suppressValue(e.getFilter("jsonify").call(t, r.memberLookup(r.contextOrFrameLookup(t, n, "highlight"), "title")), e.opts.autoescape), s += '"'), s += ">\n        ", s += r.suppressValue(r.contextOrFrameLookup(t, n, "title"), e.opts.autoescape), s += "\n    </h3>\n\n    ", r.contextOrFrameLookup(t, n, "more_mode")) {
                s += '\n    <div class="list_image">\n        <ul class="clearfix">\n            ', n = n.push();
                var f = r.contextOrFrameLookup(t, n, "image_list");
                if (f)for (var h = f.length, m = 0; m < f.length; m++) {
                  var v = f[m];
                  n.set("img", v), n.set("loop.index", m + 1), n.set("loop.index0", m), n.set("loop.revindex", h - m), n.set("loop.revindex0", h - m - 1), n.set("loop.first", 0 === m), n.set("loop.last", m === h - 1), n.set("loop.length", h), s += '\n            <li class="list_img_holder">\n                <img src="', s += r.suppressValue(r.memberLookup(v, "url"), e.opts.autoescape), s += "\" onerror='errorimg.call(this)' onload='loadimg.call(this)'>\n            </li>\n            "
                }
                n = n.pop(), s += "\n        </ul>\n    </div>\n    "
              }
              s += "\n\n    ", (r.contextOrFrameLookup(t, n, "large_mode") || "taobao" == r.contextOrFrameLookup(t, n, "ad_type")) && (s += '\n    <div class="list_img_holder_large ', r.contextOrFrameLookup(t, n, "ad_label") || (s += "list_img_holder_large_fix"), s += '">\n        <img ', r.contextOrFrameLookup(t, n, "ad_type") || (s += 'src="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "large_image_url"), e.opts.autoescape), s += '"'), s += " \n            onerror='errorimg.call(this)' \n            onload='loadimg.call(this)' />\n        ", r.contextOrFrameLookup(t, n, "has_video") && (s += '\n        <span class="video-btn"></span>\n        '), s += "\n    </div>\n    "), s += '\n    <div class="item_info">\n        ', r.contextOrFrameLookup(t, n, "hot") && (s += '\n        <span class="hot_label space">çƒ­</span>\n        '), s += "\n\n        ", r.contextOrFrameLookup(t, n, "recommend") && (s += '\n        <span class="recommend_label space">è</span>\n        '), s += "\n\n        ", r.contextOrFrameLookup(t, n, "subject_label") && (s += '\n        <span class="subject_label">', s += r.suppressValue(r.contextOrFrameLookup(t, n, "subject_label"), e.opts.autoescape), s += "</span>\n        "), s += "\n\n        ", r.contextOrFrameLookup(t, n, "ad_label") && (s += '\n        <span class="gg_label space">', s += r.suppressValue(r.contextOrFrameLookup(t, n, "ad_label"), e.opts.autoescape), s += "</span>\n        "), s += "\n\n        ", r.contextOrFrameLookup(t, n, "subject_label") || (s += '\n        <span class="src space', "ç™¾åº¦ç»éªŒ" == r.contextOrFrameLookup(t, n, "source") && (s += "recommend_label"), s += '">', s += r.suppressValue(r.contextOrFrameLookup(t, n, "source"), e.opts.autoescape), s += "</span>"), s += '\n\n        <span class="cmt space">è¯„è®º ', s += r.suppressValue(r.contextOrFrameLookup(t, n, "comment_count"), e.opts.autoescape), s += "</span>\n\n        ", r.contextOrFrameLookup(t, n, "middle_mode") || (s += '\n        <span class="time" title="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "datetime"), e.opts.autoescape), s += '">', s += r.suppressValue(r.contextOrFrameLookup(t, n, "timeago"), e.opts.autoescape), s += "</span>\n        "), s += '\n\n        <span data-id="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "group_id"), e.opts.autoescape), s += '" \n            class="dislike-news ', r.contextOrFrameLookup(t, n, "middle_mode") && (s += "mid-space"), s += ' fr">\n        </span>\n    </div>\n    ', r.contextOrFrameLookup(t, n, "middle_mode") && (s += '\n    </div>\n    <div class="list_img_holder">\n        <img ', r.contextOrFrameLookup(t, n, "ad_type") || (s += 'src="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "image_url"), e.opts.autoescape), s += '"'), s += " \n            onerror='errorimg.call(this)'  \n            onload='loadimg.call(this)'/>\n        ", r.contextOrFrameLookup(t, n, "has_video") && (s += '\n        <span class="video-btn"></span>\n        '), s += "\n    </div>\n    "), s += "\n"
            }
            s += "\n</a> \n", l ? l.rootRenderFunc(e, t, n, r, a) : a(null, s)
          } catch (e) {
            a(r.handleError(e, o, i))
          }
        }

        return {root: e}
      }()
    }(), e.exports = i(a, r, a.nunjucksPrecompiled["app/components/ListCardAD/template.nunjucks"], o)
  },
  0x5986bdd095333: function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e, t) {
        s[e.ad_id] || (i.push(e), s[e.ad_id] = !0);
        var n = ["largeA", "smallA", "listA"], r = ["largeB", "smallB", "listB"];
        o && isDoingTest() && a(n, t), o && isDoingCompare() && a(r, t)
      }

      function a(e, n) {
        for (var r = t(".ad-container"), a = (r.length, 0); a < i.length; a++) {
          var s = r.eq(a);
          s.find(".ed-link").remove(), o.init(s.get(0), i[a], !1, n).initADs(e)
        }
      }

      var o = n(6948089656354182), i = [], s = {};
      n(0xb0e0b333b6355), window.isDoingTest = function () {
        t.AbTest.setGroup("waplist5", [5, 10, "waplist5_abtest"]);
        var e = t.AbTest.getGroup("waplist5");
        return "waplist5_abtest" === e
      }, window.isDoingCompare = function () {
        t.AbTest.setGroup("waplist6", [0, 5, "waplist6_abtest"]);
        var e = t.AbTest.getGroup("waplist6");
        return "waplist6_abtest" === e
      }, e.exports = {testAD: r}
    }).call(t, n(5915487851987839))
  },
  8758279375021884: function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : {default: e}
      }

      function a(e) {
        var t = e.currentChannel;
        return {currentChannel: t}
      }

      var o, i, s = n(6553419251878407), l = r(s), c = n(6861363765270330), u = r(c), d = n(7220449874153128), p = r(d), f = n(7004395598908739), h = r(f), m = n(0x85e0a08d90f85), v = r(m), g = n(0x48bee20605e56), _ = r(g), b = n(6941063816955236), y = n(0x66c823d1176c2), w = r(y), x = n(8016237938697439), k = r(x), E = n(0xb083ce1b1859c), T = r(E);
      n(0x5986bdd095333), n(0xefa742133d960), n(0x82a69954be82e);
      n(4972245597285167);
      var A = (o = (0, b.connect)(a), o(i = function (e) {
        function n() {
          (0, u.default)(this, n);
          var e = (0, h.default)(this, (n.__proto__ || (0, l.default)(n)).call(this));
          return e.createMarkup = e.createMarkup.bind(e), e
        }

        return (0, v.default)(n, e), (0, p.default)(n, [{
          key: "componentDidMount", value: function () {
          }
        }, {
          key: "createMarkup", value: function (e) {
            var n = t.cookie("tt_webid") % 100 || "", r = n >= 25 ? T.default.render(e) : k.default.render(e);
            return {__html: r}
          }
        }, {
          key: "render", value: function () {
            var e = this.props.datum, t = (0, w.default)({
              middle_mode: e.middle_mode,
              taobaoAd: "taobao" === e.ad_type,
              has_action: !0,
              "item-hidden": e.honey
            });
            return _.default.createElement("section", {
              className: t,
              "data-hot-time": e.behot_time,
              "data-group-id": e.group_id,
              "data-item-id": e.item_id,
              "data-format": "0",
              dangerouslySetInnerHTML: this.createMarkup(e)
            })
          }
        }]), n
      }(g.Component)) || i);
      e.exports = A
    }).call(t, n(5915487851987839))
  },
  4972245597285167: 468537700344184,
  8016237938697439: function (e, t, n) {
    var r, a = n(591123963979967);
    r = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], {autoescape: !0});
    var o = a.webpackDependencies || (a.webpackDependencies = {}), i = n(506781095924607);
    !function () {
      (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["app/components/ListCardADTest/testA_template.nunjucks"] = function () {
        function e(e, t, n, r, a) {
          var o = null, i = null, s = "";
          try {
            var l = null;
            if (s += '<i class="icon_ad">\n    <span test-show="show"\n        ad-log-extra="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "log_extra"), e.opts.autoescape), s += '"\n        data-track="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "ad_track_url"), e.opts.autoescape), s += '"\n        ad-testname="', r.contextOrFrameLookup(t, n, "middle_mode") && (s += "ad_smallA"), r.contextOrFrameLookup(t, n, "more_mode") && (s += "ad_listA"), r.contextOrFrameLookup(t, n, "large_mode") && (s += "ad_largeA"), s += '"\n        ad-id="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "ad_id"), e.opts.autoescape), s += '"\n        ad-tag="embeded_ad"\n        ad-label="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "ad_label"), e.opts.autoescape), s += '">\n    </span>\n</i>\n<a href="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "source_url"), e.opts.autoescape), s += '"\n    class="article_link clearfix"\n    data-action-label="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "action_label"), e.opts.autoescape),
                s += '"\n    data-tag="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "tag"), e.opts.autoescape), s += '">\n\n    ', r.contextOrFrameLookup(t, n, "middle_mode") && (s += '\n    <div class="desc">\n    '), s += '\n\n    <h3 class="dotdot title line3 ', r.contextOrFrameLookup(t, n, "middle_mode") && (s += "image-margin-right"), s += '"\n        ', r.contextOrFrameLookup(t, n, "highlight") && (s += 'highlight="', s += r.suppressValue(e.getFilter("jsonify").call(t, r.memberLookup(r.contextOrFrameLookup(t, n, "highlight"), "title")), e.opts.autoescape), s += '"'), s += ">\n        ", s += r.suppressValue(r.contextOrFrameLookup(t, n, "title"), e.opts.autoescape), s += "\n    </h3>\n\n    ", r.contextOrFrameLookup(t, n, "more_mode")) {
              s += '\n    <div class="list_image">\n        <ul class="clearfix">\n            ', n = n.push();
              var c = r.contextOrFrameLookup(t, n, "image_list");
              if (c)for (var u = c.length, d = 0; d < c.length; d++) {
                var p = c[d];
                n.set("img", p), n.set("loop.index", d + 1), n.set("loop.index0", d), n.set("loop.revindex", u - d), n.set("loop.revindex0", u - d - 1), n.set("loop.first", 0 === d), n.set("loop.last", d === u - 1), n.set("loop.length", u), s += '\n            <li class="img_holder list_img_holder">\n                <img src="', s += r.suppressValue(r.memberLookup(p, "url"), e.opts.autoescape), s += "\" onerror='errorimg.call(this)' onload='loadimg.call(this)'>\n            </li>\n            "
              }
              n = n.pop(), s += "\n        </ul>\n    </div>\n    "
            }
            s += "\n\n    ", r.contextOrFrameLookup(t, n, "large_mode") && (s += '\n    <div class="img_holder list_img_holder_large ', r.contextOrFrameLookup(t, n, "ad_label") || (s += "list_img_holder_large_fix"), s += '">\n        <img ', r.contextOrFrameLookup(t, n, "ad_type") || (s += 'src="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "large_image_url"), e.opts.autoescape), s += '"'), s += "\n            onerror='errorimg.call(this)'\n            onload='loadimg.call(this)' />\n        ", r.contextOrFrameLookup(t, n, "has_video") && (s += '\n        <span class="video-btn"></span>\n        '), s += "\n    </div>\n    "), s += '\n    <div class="item_info">\n        ', r.contextOrFrameLookup(t, n, "hot") && (s += '\n        <span class="hot_label space">çƒ­</span>\n        '), s += "\n\n        ", r.contextOrFrameLookup(t, n, "recommend") && (s += '\n        <span class="recommend_label space">è</span>\n        '), s += "\n\n        ", r.contextOrFrameLookup(t, n, "subject_label") && (s += '\n        <span class="subject_label">', s += r.suppressValue(r.contextOrFrameLookup(t, n, "subject_label"), e.opts.autoescape), s += "</span>\n        "), s += "\n\n        ", r.contextOrFrameLookup(t, n, "ad_label") && (s += '\n        <span class="gg_label space">', s += r.suppressValue(r.contextOrFrameLookup(t, n, "ad_label"), e.opts.autoescape), s += "</span>\n        "), s += "\n\n        ", r.contextOrFrameLookup(t, n, "subject_label") || (s += '\n        <span class="src space', "ç™¾åº¦ç»éªŒ" == r.contextOrFrameLookup(t, n, "source") && (s += "recommend_label"), s += '">', s += r.suppressValue(r.contextOrFrameLookup(t, n, "source"), e.opts.autoescape), s += "</span>"), s += '\n\n        <span class="cmt space">è¯„è®º ', s += r.suppressValue(r.contextOrFrameLookup(t, n, "comment_count"), e.opts.autoescape), s += "</span>\n\n        ", r.contextOrFrameLookup(t, n, "middle_mode") || (s += '\n        <span class="time" title="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "datetime"), e.opts.autoescape), s += '">', s += r.suppressValue(r.contextOrFrameLookup(t, n, "timeago"), e.opts.autoescape), s += "</span>\n        "), s += '\n\n        <span data-id="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "group_id"), e.opts.autoescape), s += '"\n            class="dislike-news ', r.contextOrFrameLookup(t, n, "middle_mode") && (s += "mid-space"), s += ' fr">\n        </span>\n    </div>\n    ', r.contextOrFrameLookup(t, n, "middle_mode") && (s += '\n    </div>\n    <div class="img_holder list_img_holder">\n        <img ', r.contextOrFrameLookup(t, n, "ad_type") || (s += 'src="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "image_url"), e.opts.autoescape), s += '"'), s += "\n            onerror='errorimg.call(this)'\n            onload='loadimg.call(this)'/>\n        ", r.contextOrFrameLookup(t, n, "has_video") && (s += '\n        <span class="video-btn"></span>\n        '), s += "\n    </div>\n    "), s += "\n</a>\n\n", l ? l.rootRenderFunc(e, t, n, r, a) : a(null, s)
          } catch (e) {
            a(r.handleError(e, o, i))
          }
        }

        return {root: e}
      }()
    }(), e.exports = i(a, r, a.nunjucksPrecompiled["app/components/ListCardADTest/testA_template.nunjucks"], o)
  },
  0xb083ce1b1859c: function (e, t, n) {
    var r, a = n(591123963979967);
    r = a.currentEnv ? a.currentEnv : a.currentEnv = new a.Environment([], {autoescape: !0});
    var o = a.webpackDependencies || (a.webpackDependencies = {}), i = n(506781095924607);
    !function () {
      (a.nunjucksPrecompiled = a.nunjucksPrecompiled || {})["app/components/ListCardADTest/testB_template.nunjucks"] = function () {
        function e(e, t, n, r, a) {
          var o = null, i = null, s = "";
          try {
            var l = null;
            if (s += '<i class="icon_ad">\n    <span test-show="show"\n        ad-log-extra="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "log_extra"), e.opts.autoescape), s += '"\n        data-track="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "ad_track_url"), e.opts.autoescape), s += '"\n        ad-testname="', r.contextOrFrameLookup(t, n, "middle_mode") && (s += "ad_smallB"), r.contextOrFrameLookup(t, n, "more_mode") && (s += "ad_listB"), r.contextOrFrameLookup(t, n, "large_mode") && (s += "ad_largeB"), s += '"\n        ad-id="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "ad_id"), e.opts.autoescape), s += '"\n        ad-tag="embeded_ad"\n        ad-label="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "ad_label"), e.opts.autoescape), s += '">\n    </span>\n</i>\n<a href="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "source_url"), e.opts.autoescape), s += '"\n    class="article_link clearfix"\n    data-action-label="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "action_label"), e.opts.autoescape), s += '"\n    data-tag="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "tag"), e.opts.autoescape), s += '">\n\n    ', r.contextOrFrameLookup(t, n, "middle_mode") && (s += '\n    <div class="desc">\n    '), s += '\n\n    <h3 class="dotdot line3 title ', r.contextOrFrameLookup(t, n, "middle_mode") && (s += "image-margin-right"), s += '"\n        ', r.contextOrFrameLookup(t, n, "highlight") && (s += 'highlight="', s += r.suppressValue(e.getFilter("jsonify").call(t, r.memberLookup(r.contextOrFrameLookup(t, n, "highlight"), "title")), e.opts.autoescape), s += '"'), s += ">\n        ", s += r.suppressValue(r.contextOrFrameLookup(t, n, "title"), e.opts.autoescape), s += "\n    </h3>\n\n    ", r.contextOrFrameLookup(t, n, "more_mode")) {
              s += '\n    <div class="list_image">\n        <ul class="clearfix">\n            ', n = n.push();
              var c = r.contextOrFrameLookup(t, n, "image_list");
              if (c)for (var u = c.length, d = 0; d < c.length; d++) {
                var p = c[d];
                n.set("img", p), n.set("loop.index", d + 1), n.set("loop.index0", d), n.set("loop.revindex", u - d), n.set("loop.revindex0", u - d - 1), n.set("loop.first", 0 === d), n.set("loop.last", d === u - 1), n.set("loop.length", u), s += '\n            <li class="img_holder list_img_holder">\n                <img src="', s += r.suppressValue(r.memberLookup(p, "url"), e.opts.autoescape), s += "\" onerror='errorimg.call(this)' onload='loadimg.call(this)'>\n            </li>\n            "
              }
              n = n.pop(), s += "\n        </ul>\n    </div>\n    "
            }
            s += "\n\n    ", r.contextOrFrameLookup(t, n, "large_mode") && (s += '\n    <div class="img_holder list_img_holder_large ', r.contextOrFrameLookup(t, n, "ad_label") || (s += "list_img_holder_large_fix"), s += '">\n        <img ', r.contextOrFrameLookup(t, n, "ad_type") || (s += 'src="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "large_image_url"), e.opts.autoescape), s += '"'), s += "\n            onerror='errorimg.call(this)'\n            onload='loadimg.call(this)' />\n        ", r.contextOrFrameLookup(t, n, "has_video") && (s += '\n        <span class="video-btn"></span>\n        '), s += "\n    </div>\n\n    "), s += "\n\n\n    ", r.contextOrFrameLookup(t, n, "large_mode") && (s += '\n    <div class="text_info large_info">\n        ', r.contextOrFrameLookup(t, n, "source") && (s += '\n        <span class="source">', s += r.suppressValue(r.contextOrFrameLookup(t, n, "source"), e.opts.autoescape), s += "</span>\n        "), s += '\n        <span class="look_detail large_detail">æŸ¥çœ‹è¯¦æƒ…</span>\n    </div>\n    '), s += '\n\n    <div class="item_info">\n\n        ', r.contextOrFrameLookup(t, n, "ad_label") && (s += '\n        <span class="gg_label space">', s += r.suppressValue(r.contextOrFrameLookup(t, n, "ad_label"), e.opts.autoescape), s += "</span>\n        "), s += '\n\n        <span class="time" title="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "datetime"), e.opts.autoescape), s += '">', s += r.suppressValue(r.contextOrFrameLookup(t, n, "timeago"), e.opts.autoescape), s += "</span>\n\n    </div>\n    ", r.contextOrFrameLookup(t, n, "middle_mode") && (s += '\n    </div>\n    <div class="img_holder list_img_holder">\n        <img ', r.contextOrFrameLookup(t, n, "ad_type") || (s += 'src="', s += r.suppressValue(r.contextOrFrameLookup(t, n, "image_url"), e.opts.autoescape), s += '"'), s += "\n            onerror='errorimg.call(this)'\n            onload='loadimg.call(this)'/>\n        ", r.contextOrFrameLookup(t, n, "has_video") && (s += '\n        <span class="video-btn"></span>\n        '), s += "\n    </div>\n    "), s += "\n\n    ", (r.contextOrFrameLookup(t, n, "more_mode") || r.contextOrFrameLookup(t, n, "middle_mode")) && (s += '\n    <div class="text_info">\n        ', r.contextOrFrameLookup(t, n, "source") && (s += '\n        <span class="source">', s += r.suppressValue(r.contextOrFrameLookup(t, n, "source"), e.opts.autoescape), s += "</span>\n        "), s += '\n        <span class="look_detail detail">æŸ¥çœ‹è¯¦æƒ…</span>\n    </div>\n    '), s += "\n</a>", l ? l.rootRenderFunc(e, t, n, r, a) : a(null, s)
          } catch (e) {
            a(r.handleError(e, o, i))
          }
        }

        return {root: e}
      }()
    }(), e.exports = i(a, r, a.nunjucksPrecompiled["app/components/ListCardADTest/testB_template.nunjucks"], o)
  },
  8831430153797264: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    function a(e) {
      var t = e.currentChannel;
      return {currentChannel: t}
    }

    var o, i, s = n(6553419251878407), l = r(s), c = n(6861363765270330), u = r(c), d = n(7220449874153128), p = r(d), f = n(7004395598908739), h = r(f), m = n(0x85e0a08d90f85), v = r(m), g = n(0x48bee20605e56), _ = r(g), b = n(6941063816955236), y = n(5209925294297163), w = r(y), x = n(0x66c823d1176c2), k = r(x), E = n(0xba05d71f555a0), T = function (e) {
      var t = e.datum;
      t.large_image_url = t.large_image_url || t.image_url;
      var n = (0, k.default)("src", "space", {recommend_label: "ç™¾åº¦ç»éªŒ" === t.source});
      return _.default.createElement("a", {
        href: "javascript: void(0)",
        "data-action-label": t.action_label,
        "data-tag": t.tag,
        className: "article_link clearfix channel__video"
      }, _.default.createElement("div", {className: "item_detail"}, _.default.createElement("div", {className: "list_img_holder_large"}, _.default.createElement("div", {className: "video_mask"}), _.default.createElement("h3", {className: "dotdot line3"}, t.title), _.default.createElement(w.default, {src: t.large_image_url}), _.default.createElement("span", {className: "video-btn"})), _.default.createElement("div", {className: "item_info"}, _.default.createElement("div", null, t.hot && _.default.createElement("span", {className: "hot_label space"}, "çƒ­"), t.recommend && _.default.createElement("span", {className: "recommend_label space"}, "è"), t.subject_label && _.default.createElement("span", {className: "subject_label"}, " ", t.subject_label), !t.subject_label && _.default.createElement("span", {className: n}, t.source), _.default.createElement("span", {className: "cmt space"}, "è¯„è®º ", t.comment_count), _.default.createElement("span", {
        className: "time",
        title: t.datetime
      }, t.timeago), _.default.createElement("span", {"data-id": t.group_id, className: "dislike-news fr"})))))
    }, A = (o = (0, b.connect)(a), o(i = function (e) {
      function t() {
        return (0, u.default)(this, t), (0, h.default)(this, (t.__proto__ || (0, l.default)(t)).apply(this, arguments))
      }

      return (0, v.default)(t, e), (0, p.default)(t, [{
        key: "handleClick", value: function (e) {
          maevent("feed", this.props.currentChannel, "click-" + e.index), (0, E.actionLog)({
            label: e.action_label,
            value: e.group_id,
            extra_data: {item_id: e.item_id || 0}
          }), location.href = e.source_url
        }
      }, {
        key: "render", value: function () {
          var e = this, t = this.props.datum, n = (0, k.default)({has_action: !0, "item-hidden": t.honey});
          return _.default.createElement("section", {
            className: n,
            "data-hot-time": t.behot_time,
            "data-group-id": t.group_id,
            "data-item-id": t.item_id,
            "data-format": "0",
            onClick: function () {
              return e.handleClick(t)
            }
          }, _.default.createElement(T, {datum: t}))
        }
      }]), t
    }(g.Component)) || i);
    e.exports = A
  },
  458723129495606: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    var a = n(6553419251878407), o = r(a), i = n(6861363765270330), s = r(i), l = n(7220449874153128), c = r(l), u = n(7004395598908739), d = r(u), p = n(0x85e0a08d90f85), f = r(p), h = n(0x48bee20605e56), m = r(h), v = n(5209925294297163), g = r(v), _ = function (e) {
      function t(e) {
        return (0, s.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, o.default)(t)).call(this, e))
      }

      return (0, f.default)(t, e), (0, c.default)(t, [{
        key: "handleClick", value: function (e) {
          maevent(e.ga.category, "click")
        }
      }, {
        key: "singleImage", value: function (e) {
          var t = this;
          return m.default.createElement("section", {
            "data-is-video": "False",
            "data-hot-time": "",
            className: "middle_mode has_action xpromt_item",
            "data-group-id": "",
            "data-item-id": "",
            "data-format": "0"
          }, m.default.createElement("a", {
            href: e.url, className: "article_link clearfix ", onClick: function () {
              t.handleClick(e)
            }, "data-action-label": "click_xpromt_item"
          }, m.default.createElement("div", {className: "desc"}, m.default.createElement("h3", {className: "dotdot line3 image-margin-right"}, e.title), m.default.createElement("div", {className: "item_info"}, m.default.createElement("span", {className: "hot_label space"}, "çƒ­"), m.default.createElement("span", {className: "src space"}, e.src))), m.default.createElement("div", {
            className: "list_img_holder",
            style: {background: "none"}
          }, m.default.createElement(g.default, {src: "http://s3.pstatp.com/site/promotion/landing_page/img/" + e.pics[0]}))))
        }
      }, {
        key: "smallImage", value: function (e) {
          var t = this;
          return m.default.createElement("section", {
            "data-is-video": "False",
            "data-hot-time": "",
            className: "has_action xpromt_item",
            "data-group-id": "",
            "data-item-id": "",
            "data-format": "0"
          }, m.default.createElement("a", {
            href: e.url, className: "article_link clearfix ", onClick: function () {
              t.handleClick(e)
            }, "data-action-label": "click_xpromt_item"
          }, m.default.createElement("h3", {className: "dotdot line3 "}, e.title), m.default.createElement("div", {className: "list_image"}, m.default.createElement("ul", {className: "clearfix"}, e.pics.map(function (e) {
            return m.default.createElement("li", {
              className: "list_img_holder",
              style: {background: "none"}
            }, m.default.createElement(g.default, {
              src: "http://s3.pstatp.com/site/promotion/landing_page/img/" + e,
              style: {opacity: 1}
            }))
          }))), m.default.createElement("div", {className: "item_info"}, m.default.createElement("span", {className: "hot_label space"}, "çƒ­"), m.default.createElement("span", {className: "src space"}, e.src))))
        }
      }, {
        key: "render", value: function () {
          var e = this.props.datum;
          return maevent(e.ga.category, "show"), 1 === e.pics.length ? this.singleImage(e) : this.smallImage(e)
        }
      }]), t
    }(h.Component);
    e.exports = _
  },
  8253537526949383: function (e, t, n) {
    (function (t, r) {
      "use strict";
      function a(e) {
        return e && e.__esModule ? e : {default: e}
      }

      function o(e) {
        var t = e.GTMValue, n = e.currentChannel;
        return {GTMValue: t, currentChannel: n}
      }

      var i, s, l = n(7724818440676399), c = a(l), u = n(8327643607632330), d = a(u), p = n(0xeb9e744742586), f = a(p), h = n(6553419251878407), m = a(h), v = n(6861363765270330), g = a(v), _ = n(7220449874153128), b = a(_), y = n(7004395598908739), w = a(y), x = n(0x85e0a08d90f85), k = a(x), E = n(0x48bee20605e56), T = a(E), A = n(6941063816955236), F = n(0xefa742133d960), O = n(6596327922181385), L = a(O), C = n(0xc1f215d6e560d), S = a(C), D = n(8758279375021884), M = a(D), j = n(8831430153797264), N = a(j), P = n(458723129495606), R = a(P), B = n(0xca902020511ee), I = a(B), q = n(0x3be1913324ece), V = a(q), H = n(0xe85a386169c4b), X = a(H), U = n(4716986224731424), W = a(U), G = n(7484092472500367), $ = a(G), z = n(8111156497284432), J = a(z), Y = n(5359030257400059), K = a(Y);
      n(0x9fbd1944804ec), K.default.initScrollEvents();
      var Q = (i = (0, A.connect)(o), i(s = function (e) {
        function n() {
          var e, t, r, a;
          (0, g.default)(this, n);
          for (var o = arguments.length, i = Array(o), s = 0; s < o; s++)i[s] = arguments[s];
          return t = r = (0, w.default)(this, (e = n.__proto__ || (0, m.default)(n)).call.apply(e, [this].concat(i))), r.state = {listData: r.props.listData}, a = t, (0, w.default)(r, a)
        }

        return (0, k.default)(n, e), (0, b.default)(n, [{
          key: "componentWillReceiveProps", value: function (e) {
            if (0 !== e.listData.length && 0 === this.props.listData.length && this.showMaterial()) {
              var t = this.props.GTMValue.adMaterialOptions, n = JSON.parse(X.default.getCookieForLocal("ad_material_options")) || {}, r = (new Date).getTime() - t.adMaterialUpateTime;
              r >= 0 ? n.adMaterialChannels && X.default.setCookieForLocal("ad_material_options", (0, f.default)(t), 864e5 - r) : t = n;
              var a = t.adMaterialPos || 3, o = Math.floor(Math.random() * t.adMaterials.length), i = t.adMaterials[o];
              i.version = o, this.props.dispatch((0, F.addADMaterial)({
                adMaterial: i,
                pos: a
              })), maevent("creative", "show", o, 1, {nonInteraction: !0})
            }
            this.updateTimeAgo(e.listData), this.updateXpromt(e)
          }
        }, {
          key: "updateXpromt", value: function (e) {
            var n = e.currentChannel, r = e.GTMValue, a = e.listData, o = r.xpromt || {}, i = (0, d.default)(o), s = t(a);
            if (i.indexOf(n) === -1)return !1;
            var l = o[n];
            l.forEach(function (e, t) {
              e.xpromt = !0, s.splice(e.position - 1, 0, e)
            }), this.setState({listData: s})
          }
        }, {
          key: "componentDidMount", value: function () {
            var e = this;
            e.updateTimeAgo(this.props.listData), setInterval(function () {
              return e.updateTimeAgo(e.props.listData)
            }, 6e4), "object" == ("undefined" == typeof $.default ? "undefined" : (0, c.default)($.default)) && $.default.initShowEvents({attribute: "data-show"}), "object" == ("undefined" == typeof J.default ? "undefined" : (0, c.default)(J.default)) && J.default.initShowEvents({attribute: "test-show"})
          }
        }, {
          key: "componentDidUpdate", value: function () {
            $.default.scrollChangeDisable = !1, $.default.scrollUpdate(), J.default.scrollChangeDisable = !1, J.default.scrollUpdate()
          }
        }, {
          key: "updateTimeAgo", value: function (e) {
            var n = t(e);
            n.forEach(function (e) {
              var t = (0, W.default)(e.datetime, {daysAgoFormat: "MM-dd"});
              e.timeago = t
            }), this.setState({listData: n})
          }
        }, {
          key: "showMaterial", value: function () {
            var e = this.props.GTMValue.adMaterialOptions;
            if (!e || !e.adMaterialChannels)return !1;
            var t = e.adMaterialChannels;
            return t.indexOf(X.default.hash("channel")) !== -1 && !!e.adMaterials
          }
        }, {
          key: "render", value: function () {
            var e = this, t = r.cookie("tt_webid") % 100 || "";
            return T.default.createElement("content", {
              id: "pageletListContent",
              className: "feed-list-container"
            }, T.default.createElement(V.default, null), T.default.createElement("div", {
              className: "list_content",
              "data-pull-fresh": "1"
            }, this.state.listData.map(function (n, r) {
              n.index = r + 1;
              var a = n.index;
              return n.action_label = "click_" + ("__all__" === e.props.currentChannel ? "headline" : e.props.currentChannel), n.showAdMaterial ? T.default.createElement(I.default, {
                key: a,
                datum: n.adMaterial
              }) : n.ad_id ? t < 50 && !n.is_download_ad && !n.is_phone_ad ? T.default.createElement(M.default, {
                key: a,
                datum: n
              }) : T.default.createElement(S.default, {
                key: a,
                datum: n
              }) : "video" === e.props.currentChannel ? T.default.createElement(N.default, {
                key: a,
                datum: n
              }) : n.xpromt ? T.default.createElement(R.default, {
                key: a,
                datum: n
              }) : T.default.createElement(L.default, {key: a, datum: n})
            })), T.default.createElement("div", {className: "list_bottom"}, T.default.createElement("section", {className: "loadmoretip"}, T.default.createElement("a", {href: "#"}, this.props.tips))))
          }
        }]), n
      }(E.Component)) || s);
      e.exports = Q
    }).call(t, n(7761780549827576), n(5915487851987839))
  },
  0x9fbd1944804ec: 468537700344184,
  0xb104e7971b79d: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    var a, o, i = n(6553419251878407), s = r(i), l = n(6861363765270330), c = r(l), u = n(7220449874153128), d = r(u), p = n(7004395598908739), f = r(p), h = n(0x85e0a08d90f85), m = r(h), v = n(0x48bee20605e56), g = r(v), _ = n(6941063816955236), b = n(0xefa742133d960), y = n(8682704682537579), w = r(y);
    n(6808619309221561);
    var x = (a = (0, _.connect)(), a(o = function (e) {
      function t() {
        return (0, c.default)(this, t), (0, f.default)(this, (t.__proto__ || (0, s.default)(t)).apply(this, arguments))
      }

      return (0, m.default)(t, e), (0, d.default)(t, [{
        key: "handleClose", value: function () {
          var e = this.props.dispatch;
          e((0, b.showPopupBanner)(!1)), maevent("left_top", "close", "")
        }
      }, {
        key: "handleDownload", value: function () {
          maevent("left_top", "download"), (0, w.default)({downloadLink: "//d.toutiao.com/2ePc/"})
        }
      }, {
        key: "render", value: function () {
          var e = this;
          return g.default.createElement("div", {
            id: "pageletPopupBanner",
            className: "tt-modal"
          }, g.default.createElement("div", {className: "popup"}, g.default.createElement("div", {className: "banner"}), g.default.createElement("p", null, "å·²åŠ è½½å¥½æ‚¨æ„Ÿå…´è¶£çš„å¤´æ¡"), g.default.createElement("div", {
            className: "download-btn",
            "data-node": "downloadBtn",
            onClick: function () {
              return e.handleDownload()
            }
          }, "ç«‹å³æ‰“å¼€"), g.default.createElement("div", {
            className: "close",
            "data-node": "close",
            onClick: function () {
              e.handleClose()
            }
          })))
        }
      }]), t
    }(v.Component)) || o);
    e.exports = x
  },
  6808619309221561: 468537700344184,
  0x3be1913324ece: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    var a = n(6553419251878407), o = r(a), i = n(6861363765270330), s = r(i), l = n(7220449874153128), c = r(l), u = n(7004395598908739), d = r(u), p = n(0x85e0a08d90f85), f = r(p), h = n(0x48bee20605e56), m = (r(h), n(0x506d80dff7d28)), v = r(m);
    n(8070893639864965);
    var g = function (e) {
      function t() {
        return (0, s.default)(this, t), (0, d.default)(this, (t.__proto__ || (0, o.default)(t)).apply(this, arguments))
      }

      return (0, f.default)(t, e), (0, c.default)(t, [{
        key: "componentDidMount", value: function () {
          v.default.init({con: "div[data-pull-fresh]", minDistance: 4})
        }
      }, {
        key: "render", value: function () {
          return null
        }
      }]), t
    }(h.Component);
    e.exports = g
  },
  8070893639864965: 468537700344184,
  0xd18716840a7c1: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    function a(e) {
      var t = e.fetchNumber, n = e.showRefreshTip;
      return {fetchNumber: t, showRefreshTip: n}
    }

    var o, i, s = n(6553419251878407), l = r(s), c = n(6861363765270330), u = r(c), d = n(7220449874153128), p = r(d), f = n(7004395598908739), h = r(f), m = n(0x85e0a08d90f85), v = r(m), g = n(6941063816955236), _ = n(0x48bee20605e56), b = r(_), y = n(0xb7fb8c2568ddd);
    n(5927350483752789);
    var w = (o = (0, g.connect)(a), o(i = function (e) {
      function t() {
        return (0, u.default)(this, t), (0, h.default)(this, (t.__proto__ || (0, l.default)(t)).apply(this, arguments))
      }

      return (0, v.default)(t, e), (0, p.default)(t, [{
        key: "render", value: function () {
          return b.default.createElement(y, {
            transitionName: "refreshTip",
            transitionEnterTimeout: 500,
            transitionLeaveTimeout: 300
          }, this.props.showRefreshTip && b.default.createElement("p", {
              className: "refresh-tip",
              key: "refreshTip"
            }, "ä¸ºä½ æŽ¨èäº†", this.props.fetchNumber, "ç¯‡æ–‡ç« "))
        }
      }]), t
    }(_.Component)) || i);
    e.exports = w
  },
  5927350483752789: 468537700344184,
  8560193218878797: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    var a, o, i = n(6553419251878407), s = r(i), l = n(6861363765270330), c = r(l), u = n(7220449874153128), d = r(u), p = n(7004395598908739), f = r(p), h = n(0x85e0a08d90f85), m = r(h), v = n(0x48bee20605e56), g = r(v), _ = (n(5980400199274178), o = a = function (e) {
      function t() {
        (0, c.default)(this, t);
        var e = (0, f.default)(this, (t.__proto__ || (0, s.default)(t)).call(this));
        return e.state = {
          scrollY: 0,
          touchStartY: 0
        }, e.handleScroll = e.handleScroll.bind(e), e.handleTouchStart = e.handleTouchStart.bind(e), e.handleTouchEnd = e.handleTouchEnd.bind(e), e
      }

      return (0, m.default)(t, e), (0, d.default)(t, [{
        key: "componentDidMount", value: function () {
          window.addEventListener("scroll", this.handleScroll), window.addEventListener("touchstart", this.handleTouchStart), window.addEventListener("touchend", this.handleTouchEnd)
        }
      }, {
        key: "componentWillUnmount", value: function () {
          window.removeEventListener("scroll", this.handleScroll), window.removeEventListener("touchstart", this.handleTouchStart), window.removeEventListener("touchend", this.handleTouchEnd)
        }
      }, {
        key: "handleScroll", value: function (e) {
          var t = 100 * (window.responsive || {dpr: 1}).dpr, n = document.body.scrollHeight, r = window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop, a = window.innerHeight;
          r >= n - a - t && this.props.handleScroll("append")
        }
      }, {
        key: "handleTouchStart", value: function (e) {
          var t = e.changedTouches[0].clientY;
          this.setState({touchStartY: t});
          var n = window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop;
          this.setState({scrollY: n})
        }
      }, {
        key: "handleTouchEnd", value: function (e) {
          var t = e.changedTouches[0].clientY;
          if (this.state.scrollY <= 0) {
            var n = t - this.state.touchStartY;
            n > 100 && (e.preventDefault(), this.props.handleScroll("prepend"))
          }
        }
      }, {
        key: "render", value: function () {
          return g.default.createElement("div", null, this.props.children)
        }
      }]), t
    }(v.Component), a.propTypes = {handleScroll: g.default.PropTypes.func}, a.defaultProps = {
      handleScroll: function () {
      }
    }, o);
    e.exports = _
  },
  303016322497613: function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : {default: e}
      }

      function a(e) {
        var t = e.currentChannel, n = e.GTMValue, r = e.channelScrollPosition;
        return {currentChannel: t, GTMValue: n, channelScrollPosition: r}
      }

      var o, i, s, l, c = n(8327643607632330), u = r(c), d = n(6553419251878407), p = r(d), f = n(6861363765270330), h = r(f), m = n(7220449874153128), v = r(m), g = n(7004395598908739), _ = r(g), b = n(0x85e0a08d90f85), y = r(b), w = n(0x48bee20605e56), x = r(w), k = n(6941063816955236), E = n(0xefa742133d960), T = n(5359030257400059), A = (r(T), n(0xe85a386169c4b)), F = r(A), O = n(0x66c823d1176c2), L = r(O);
      n(8717425400813587);
      var C = (o = (0, k.connect)(a), o((l = s = function (e) {
        function n(e) {
          (0, h.default)(this, n);
          var t = (0, _.default)(this, (n.__proto__ || (0, p.default)(n)).call(this, e));
          return t.channelCategoryList = {
            __all__: "æŽ¨è",
            video: "è§†é¢‘",
            news_hot: "çƒ­ç‚¹",
            news_society: "ç¤¾ä¼š",
            news_entertainment: "å¨±ä¹",
            news_military: "å†›äº‹",
            news_tech: "ç§‘æŠ€",
            news_car: "æ±½è½¦",
            news_sports: "ä½“è‚²",
            news_finance: "è´¢ç»",
            news_world: "å›½é™…",
            news_fashion: "æ—¶å°š",
            news_game: "æ¸¸æˆ",
            news_travel: "æ—…æ¸¸",
            news_history: "åŽ†å²",
            news_discovery: "æŽ¢ç´¢",
            news_food: "ç¾Žé£Ÿ",
            news_baby: "è‚²å„¿",
            news_regimen: "å…»ç”Ÿ",
            news_story: "æ•…äº‹",
            news_essay: "ç¾Žæ–‡"
          }, t.defaultCategory = "__all__", t
        }

        return (0, y.default)(n, e), (0, v.default)(n, [{
          key: "componentDidMount", value: function () {
            var e = this, t = F.default.hash("channel") || F.default.request("channel") || this.defaultCategory;
            this.changeChannel(t), window.onpopstate = function (t) {
              var n = F.default.hash("channel") || F.default.request("channel") || this.defaultCategory;
              e.changeChannel(n)
            }
          }
        }, {
          key: "changeChannel", value: function (e) {
            (0, u.default)(this.channelCategoryList).indexOf(e) === -1 && (e = this.defaultCategory);
            var n = this.refs.topMenuList.querySelector('[data-channel="' + e + '"]');
            if (!(n.className.indexOf("cur") > -1)) {
              this.doTabSwitch(n), maevent("channel", e, "");
              var r = this.props.dispatch;
              r((0, E.clickHeaderChannel)(e)), t(window).trigger("channelChange")
            }
          }
        }, {
          key: "getTabs", value: function () {
            var e = 12, t = this, n = F.default.localStorageEnabled() ? localStorage.menuDefaults : "", r = n ? n.split(",") : (0, u.default)(this.channelCategoryList).slice(0, e);
            return r.reduce(function (e, n) {
              if (t.channelCategoryList[n])return e[n] = t.channelCategoryList[n], e
            }, {})
          }
        }, {
          key: "onMenuClick", value: function (e) {
            var t = e.currentTarget.dataset.url, n = e.currentTarget.dataset.channel, r = this.props, a = r.currentChannel, o = r.channelScrollPosition;
            if (!(e.currentTarget.className.indexOf("cur") > -1)) {
              if (history.replaceState) {
                var i = function () {
                  var e = [], t = F.default.request();
                  for (var n in t)"channel" !== n && e.push([n, encodeURIComponent(t[n])].join("="));
                  var r = e.join("&");
                  return r || ""
                }(), s = (i ? i + "&" : "") + [t, t].join("#");
                history.replaceState({channel: n}, null, location.pathname + "?" + s)
              } else location.hash = t;
              this.changeChannel(n), resendMA(), n !== a && window.scrollTo(0, o[n] || 0)
            }
          }
        }, {
          key: "doTabSwitch", value: function (e) {
            if (!(e.className.indexOf("cur") > -1)) {
              var t, n = e.parentNode, r = e, a = document.body.clientWidth, o = n.clientWidth, i = n.scrollWidth, s = n.scrollLeft, l = r.clientWidth, c = r.getBoundingClientRect().left;
              t = c + s <= o / 2 - l / 2 ? 0 : c + s > i - o / 2 - l / 2 ? Math.max(i - o, 0) : -a / 2 + l / 2 + c + s, n.scrollLeft = t
            }
          }
        }, {
          key: "onMoreClick", value: function () {
            maevent("channel", "channel_more")
          }
        }, {
          key: "render", value: function () {
            var e = this, t = this, n = this.getTabs(), r = this.props.GTMValue.hideTopMenuMore;
            return x.default.createElement("div", {className: "top_menu_bar"}, r ? null : x.default.createElement("div", {className: "top_menu_more"}, x.default.createElement("div", {className: "list_shadow"}), x.default.createElement("a", {
              href: "/channels/",
              className: "more_btn",
              onClick: function () {
                return e.onMoreClick()
              }
            })), x.default.createElement("div", {
              id: "top_menu",
              className: "top_menu_list",
              ref: "topMenuList"
            }, (0, u.default)(n).map(function (e) {
              var r = (0, L.default)("btn", {cur: e === t.props.currentChannel});
              return x.default.createElement("a", {
                key: e,
                "data-channel": e,
                "data-url": "channel=" + e,
                href: "javascript:;",
                onClick: function (e) {
                  return t.onMenuClick(e)
                },
                className: r
              }, n[e])
            })))
          }
        }]), n
      }(w.Component), s.propTypes = {onMenuClick: x.default.PropTypes.func}, s.defaultProps = {
        onMenuClick: function () {
        }
      }, i = l)) || i);
      e.exports = C
    }).call(t, n(5915487851987839))
  },
  8717425400813587: 468537700344184,
  6948089656354182: function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(729883573915171), a = n(0xe87a93095bfea), o = n(7004435845220439);
      n(0x63bd93ab3a26e);
      var i = {
        smallA: "middle_mode",
        smallB: "middle_mode",
        listA: "more_mode",
        listB: "more_mode",
        largeA: "large_mode",
        largeB: "large_mode",
        smallG: 2,
        detailA: 5,
        detailB: 5,
        detail2A: 5,
        detail2B: 5,
        detail2C: 5,
        detail2D: 5,
        list2A: 3,
        list2B: 3,
        list2C: 3,
        videoListA: 5,
        videoListB: 5,
        picListA: 5,
        picListB: 5,
        picListC: 5,
        picListD: 5
      }, s = {}, l = {
        ad_id: [], init: function (e, n, r, o) {
          if (this.$el = t(e), this.model = "", r && r.mode && (n = t.extend({}, a[r.mode])), n)return this.model = t.extend({}, n), this.currentChannel = o, this.bindEvent(this.model), this
        }, initADs: function (e) {
          for (var t = this, n = e.length, a = 0; a < n; a++) {
            var l = e[a], c = i[l];
            if (!this.model || this.model[c]) {
              var u = r.get(l);
              if (u instanceof Function) {
                var d = new u(this.model);
                d.init(), d.bindEvent(this.model, this.currentChannel, l), d.appendTo(this.$el), s[l] = d, t.sendLog(d.$el, this.model, l)
              }
            }
          }
          o.data2video()
        }, _inView: function (e) {
          var t = e.getBoundingClientRect();
          return t.top > 0 && t.top <= (window.innerHeight || document.documentElement.clientHeight)
        }, bindEvent: function (e) {
          var n = this;
          t(window).on("load scrollEnd.lazy", function (e) {
            for (var t in s) {
              var r = s[t];
              n.sendLog(r.$el, n.model, t)
            }
          })
        }, sendLog: function (e, t, n) {
          var r = "ad_" + n, a = "tat_" + n, o = {page: "list", etype: "pv", concrete: a};
          "showed" != e.attr("show_status") && this._inView(e.get(0)) && (e.attr("show_status", "showed"), _taq.push(["trackevent", "list", "pv", r, null]), window.ta && ta.send(o), window._vis_opt_queue = window._vis_opt_queue || [], window._vis_opt_queue.push(function () {
            _vis_opt_goal_conversion(201)
          }))
        }, get: function (e) {
          return s[e]
        }
      };
      e.exports = l
    }).call(t, n(5915487851987839))
  },
  0x63bd93ab3a26e: 468537700344184,
  7004435845220439: function (e, t) {
    "use strict";
    function n(e) {
      var t, n, r, a, o, i, s;
      for (i = e.length, o = 0, s = ""; o < i;) {
        do t = c[255 & e.charCodeAt(o++)]; while (o < i && t == -1);
        if (t == -1)break;
        do n = c[255 & e.charCodeAt(o++)]; while (o < i && n == -1);
        if (n == -1)break;
        s += String.fromCharCode(t << 2 | (48 & n) >> 4);
        do {
          if (r = 255 & e.charCodeAt(o++), 61 == r)return s;
          r = c[r]
        } while (o < i && r == -1);
        if (r == -1)break;
        s += String.fromCharCode((15 & n) << 4 | (60 & r) >> 2);
        do {
          if (a = 255 & e.charCodeAt(o++), 61 == a)return s;
          a = c[a]
        } while (o < i && a == -1);
        if (a == -1)break;
        s += String.fromCharCode((3 & r) << 6 | a)
      }
      return s
    }

    function r(e, t, n) {
      e.setAttribute("type", "text/javascript"), n && e.setAttribute("charset", n), e.setAttribute("src", t), document.getElementsByTagName("head")[0].appendChild(e)
    }

    function a(e) {
      return "[object Function]" == Object.prototype.toString.call(e)
    }

    function o(e, t, n) {
      function o(e) {
        return function () {
          try {
            e ? u.onfailure && u.onfailure() : (t.apply(window, arguments), clearTimeout(s)), window[i] = null, delete window[i]
          } catch (e) {
          } finally {
          }
        }
      }

      var i, s, l = document.createElement("SCRIPT"), c = "tt__video__", u = n || {}, d = u.charset, p = "callback", f = u.timeOut || 0;
      a(t) && (i = c + Math.floor(2147483648 * Math.random()).toString(36), window[i] = o(0)), f && (s = setTimeout(o(1), f)), e += (e.indexOf("?") < 0 ? "?" : "&") + p + "=" + i, r(l, e, d)
    }

    function i() {
      var e = document, t = "BackCompat" == e.compatMode ? e.body : e.documentElement;
      return t.offsetWidth
    }

    function s() {
      for (var e = document.querySelectorAll(".ad-video-box"), t = 0, r = [], a = 0; a < e.length; a++) {
        var s = e[a].getAttribute("tt-videoid") || "", c = e[a].getAttribute("tt-poster") || "";
        r.push({box: e[a], id: s, url: c});
        var u = 0;
        if (null == e[a].getAttribute("tt-datainited")) {
          e[a].setAttribute("tt-datainited", 1);
          var d = "//i.snssdk.com/video/urls/1/toutiao/mp4/" + s;
          o(d, function (e) {
            var a = e.data.status;
            if (0 == e.code && 10 == a) {
              var o = e.data.video_list, s = o.video_1, c = s.main_url, d = n(c), p = i();
              p > 640 && (p = 640);
              var f = 9 / 16;
              t++;
              for (var h = navigator.userAgent.toLowerCase(), m = h.match(/msie ([\d.]+)/), v = 0; v < r.length; v++)if (e.data.video_id && r[v].id == e.data.video_id) {
                var g = '<video class="trigger-event" src="' + d + '" type="video/mp4" controls="" poster="' + r[v].url + '" preload="none" style="width:100%;"></video>';
                if (/iphone|ipad/i.test(navigator.userAgent) ? (g = '<video class="trigger-event" src="' + d + '" type="video/mp4" controls="" poster="' + r[v].url + '" preload="none" webkit-playsinline style="width:100%;"></video>',
                    r[v].box.style.cssText += "margin:0 auto;") : /Android/i.test(navigator.userAgent) ? (g = '<video class="trigger-event" src="' + d + '" type="video/mp4" controls="" poster="' + r[v].url + '" preload="none" style="width:100%;"></video>', r[v].box.style.cssText += "margin:0 auto;") : m && m.length > 1 ? "8.0" == m[1] && (g = '<video class="trigger-event" src="' + d + '" type="video/mp4" controls="" poster="' + r[v].url + '.jpg" preload="none" style="width:100%;height:100%;"></video>', r[v].box.style.cssText += "width:" + p + "px;height:" + p * f + "px;margin:0 auto;background-color:#000") : (g = "true" == r[v].box.getAttribute("tt-autoplay") && "admin.bytedance.com" == location.hostname ? '<video class="trigger-event" src="' + d + '" type="video/mp4" controls="" poster="' + r[v].url + '" preload="none" autoplay="autoplay" style="width:100%;height:100%;"></video>' : '<video class="trigger-event" src="' + d + '" type="video/mp4" controls="" poster="' + r[v].url + '" preload="none" style="width:100%;height:100%;"></video>', r[v].box.style.cssText += "width:" + p + "px;height:" + p * f + "px;margin:0 auto;background-color:#000"), r[v].box.innerHTML = g, window.listener && listener.trigger("com.toutiao.m.videoContent", "video-loaded-successed"), "admin.bytedance.com" != location.hostname, m && m.length > 1 && "8.0" == m[1]) {
                  var _ = document.createElement("video");
                  _.setAttribute("src", d), _.setAttribute("type", "video/mp4"), _.setAttribute("controls", ""), _.setAttribute("poster", r[v].url + ".jpg"), _.setAttribute("preload", "none"), _.style.cssText += "width:100%;height:100%;", r[v].box.innerHTML = "", r[v].box.appendChild(_), u++, u == r.length && l()
                }
              }
            } else for (var v = 0; v < r.length; v++) {
              if (("admin.bytedance.com" == location.hostname || "mp.toutiao.com" == location.hostname) && 10 != a) {
                var b = {
                  20: "è½¬ç å¤±è´¥",
                  30: "è½¬ç è¿›è¡Œä¸­",
                  40: "è§†é¢‘idä¸å­˜åœ¨",
                  0: "unknown",
                  1: "ä¸Šä¼ ä¸­",
                  2: "ä¸Šä¼ å¤±è´¥",
                  3: "ç­‰å¾…ä¸Šä¼ ",
                  101: "è§†é¢‘è¢«å±è”½",
                  102: "è§†é¢‘è¢«åˆ é™¤",
                  103: "è§†é¢‘æ°¸ä¹…åˆ é™¤"
                }, y = "";
                for (var w in b)w == a && (y = b[w]);
                g = '<span style="display: inline-block;height: 360px;width: 100%;line-height: 360px;background-color: rgba(0, 0, 0,0.9);color: #fff;">' + e.message + "ï¼š" + y + "</span>"
              }
              r[v].box.innerHTML = g, window.listener && listener.trigger("com.toutiao.m.videoContent", "video-loaded-failed"), r[v].box.style.cssText += "margin: 0px auto;height: 360px;width: 640px;text-align: center;", "admin.bytedance.com" != location.hostname
            }
          })
        }
      }
    }

    function l() {
      var e = document.createElement("script");
      e.src = "//s3.pstatp.com/html5media1.1.8/html5media.min.js";
      var t = document.getElementsByTagName("script")[0];
      t.parentNode.insertBefore(e, t)
    }

    var c = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1), u = {data2video: s};
    e.exports = u
  },
  6702072606888888: function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : {default: e}
      }

      var a = n(0x66c823d1176c2), o = (r(a), n(0xba05d71f555a0)), i = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1), s = {
        init: function () {
          return this
        }, appendTo: function (e) {
          this.$el.appendTo(e)
        }, prependTo: function (e) {
          this.$el.prependTo(e)
        }, format: function (e, t) {
          e = String(e);
          var n = Array.prototype.slice.call(arguments, 1), r = Object.prototype.toString;
          return n.length ? (n = 1 == n.length && null !== t && /\[object Array\]|\[object Object\]/.test(r.call(t)) ? t : n, e.replace(/#\{(.+?)\}/g, function (e, t) {
            var a = n[t];
            return "[object Function]" == r.call(a) && (a = a(t)), "undefined" == typeof a ? "" : a
          })) : e
        }, bindEvent: function (e, n, r) {
          var a = this;
          this.$el.delegate(".trigger-event", "click", function (i) {
            var s = t(i.target), l = a.$el.attr("data-href");
            if (s.attr("data-href") && (l = s.attr("data-href")), maevent("feed", n, "click-" + e.index), (0, o.actionLog)({
                label: e.action_label,
                value: e.group_id,
                extra_data: {item_id: e.item_id}
              }), window._taq && window.ta) {
              var c = s.prop("tagName").toLowerCase(), u = "ad_" + r, d = "tat_" + r, p = {
                page: "list",
                concrete: d,
                target: s.get(0)
              };
              _taq.push(["trackevent", "list", "all.clicked", u, s.get(0)]), p.etype = "all.clicked", s.hasClass("detail") && (_taq.push(["trackevent", "list", "detail.clicked", u, s.get(0)]), p.etype = "detail.clicked"), s.hasClass("title") && (_taq.push(["trackevent", "list", "title.clicked", u, s.get(0)]), p.etype = "title.clicked"), "video" == c && (_taq.push(["trackevent", "list", "video.clicked", u, s.get(0)]), p.etype = "video.clicked"), ("img" == c || s.hasClass("wrap-img")) && (_taq.push(["trackevent", "list", "img.clicked", u, s.get(0)]), p.etype = "img.clicked"), ta.send(p)
            }
            l && setTimeout(function () {
              location.href = l
            }, 500)
          })
        }, getVideoData: function (e, n) {
          var r = "//i.snssdk.com/video/urls/1/adlanding/mp4/" + e + "?callback=?", a = this;
          t.ajaxJSONP({
            url: r, success: function (e) {
              var t = e.data.status;
              if (0 == e.code && 10 == t) {
                var r = e.data.video_list, o = r.video_1, i = o.main_url, s = a.base64decode(i);
                n && "function" == typeof n && n(s)
              }
            }
          })
        }, base64decode: function (e) {
          var t, n, r, a, o, s, l;
          for (s = e.length, o = 0, l = ""; o < s;) {
            do t = i[255 & e.charCodeAt(o++)]; while (o < s && t == -1);
            if (t == -1)break;
            do n = i[255 & e.charCodeAt(o++)]; while (o < s && n == -1);
            if (n == -1)break;
            l += String.fromCharCode(t << 2 | (48 & n) >> 4);
            do {
              if (r = 255 & e.charCodeAt(o++), 61 == r)return l;
              r = i[r]
            } while (o < s && r == -1);
            if (r == -1)break;
            l += String.fromCharCode((15 & n) << 4 | (60 & r) >> 2);
            do {
              if (a = 255 & e.charCodeAt(o++), 61 == a)return l;
              a = i[a]
            } while (o < s && a == -1);
            if (a == -1)break;
            l += String.fromCharCode((3 & r) << 6 | a)
          }
          return l
        }
      };
      e.exports = s
    }).call(t, n(5915487851987839))
  },
  0xe87a93095bfea: function (e, t, n) {
    "use strict";
    var r = {
      detailA: {
        comment_count: 0,
        datetime: new Date,
        desc: "çœ‹æˆ‘ã€Šä¸ƒåäºŒå˜ã€‹ï¼Œæ–°èµ„æ–™ç‰‡å…¨æ–°çŽ©æ³•é‡ç£…æ¥è¢­ï¼",
        apk_url: "http://d2.pstatp.com/game_hall/com.netease.dhxy_simple.toutiao_4.apk",
        ios_url: "https://itunes.apple.com/cn/app/da-hua-xi-you-2015zui-shou/id1015364140?mt=8",
        download_url: "",
        image: "http://p0.pstatp.com/origin/3f000002f973b7981b",
        image_mode: 5,
        is_download_ad: 1,
        req_id: 95495530622721,
        source: "å¤§è¯è¥¿æ¸¸",
        type: "app"
      },
      detailB: {
        comment_count: 0,
        datetime: new Date,
        desc: "çœ‹æˆ‘ã€Šä¸ƒåäºŒå˜ã€‹ï¼Œæ–°èµ„æ–™ç‰‡å…¨æ–°çŽ©æ³•é‡ç£…æ¥è¢­ï¼",
        apk_url: "http://d2.pstatp.com/game_hall/com.netease.dhxy_simple.toutiao_4.apk",
        ios_url: "https://itunes.apple.com/cn/app/da-hua-xi-you-2015zui-shou/id1015364140?mt=8",
        download_url: "",
        image: "http://p0.pstatp.com/origin/3f0000035ec11562d5",
        image_mode: 5,
        is_download_ad: 1,
        req_id: 95495530622722,
        source: "å¤§è¯è¥¿æ¸¸",
        type: "app"
      },
      listA: {
        comment_count: 133,
        datetime: new Date,
        desc: "ç«™ä½ï¼Œæˆ‘æ˜¯ç¥žå†œå¤§è™¾ä½ çŸ¥ä¸çŸ¥é“ï¼Ÿå”‰ä½ åˆ«èµ°å•Šï¼",
        download_url: "",
        title_url: "http://api.snssdk.com/2/ad/5911991787/",
        image_list: [{url: "http://p2.pstatp.com/origin/3f0000dbe0049f4c31"}, {url: "http://p3.pstatp.com/origin/3f0000dbe1ea96b476"}, {url: "http://p3.pstatp.com/origin/3f0000dbe2c50aad7f"}],
        image_mode: 5,
        is_download_ad: 1,
        req_id: 95495530622732,
        source: "åŠŸå¤«ç†ŠçŒ«3",
        type: "app"
      },
      listB: {
        comment_count: 23,
        datetime: new Date,
        desc: "ç«™ä½ï¼Œæˆ‘æ˜¯ç¥žå†œå¤§è™¾ä½ çŸ¥ä¸çŸ¥é“ï¼Ÿå”‰ä½ åˆ«èµ°å•Šï¼",
        download_url: "http://d2.pstatp.com/game_hall/g49_toutiao_sdk_2_g490108.apk",
        title_url: "http://api.snssdk.com/2/ad/5911991787/",
        image_list: [{url: "http://p2.pstatp.com/origin/3f0000dbe0049f4c31"}, {url: "http://p3.pstatp.com/origin/3f0000dbe1ea96b476"}, {url: "http://p3.pstatp.com/origin/3f0000dbe2c50aad7f"}],
        image_mode: 5,
        is_download_ad: 1,
        req_id: 95495530622732,
        source: "åŠŸå¤«ç†ŠçŒ«3",
        type: "app"
      },
      listC: {
        comment_count: 38,
        datetime: new Date,
        desc: "è¿™çš‡å¸æˆ‘å½“ä¸ä¸‹åŽ»äº†ï¼Œç»™ä½ å§ï¼ŒæƒæŽŒå¤©ä¸‹ï¼ŒåŽå®«ä¸‰åƒï¼",
        title_url: "http://api.snssdk.com/2/ad/5949242926/",
        download_url: "",
        image_mode: 5,
        is_download_ad: 1,
        req_id: 95495530622722,
        source: "å¤§çš‡å¸",
        type: "app",
        time: "00:30",
        videoId: "6096046383ef4c5c8063e7cec3e6e814",
        poster: "http://p3.pstatp.com/origin/b5000d1385d403f681"
      },
      listD: {
        comment_count: 112,
        datetime: new Date,
        desc: "è¿™çš‡å¸æˆ‘å½“ä¸ä¸‹åŽ»äº†ï¼Œç»™ä½ å§ï¼ŒæƒæŽŒå¤©ä¸‹ï¼ŒåŽå®«ä¸‰åƒï¼",
        title_url: "http://api.snssdk.com/2/ad/5949242926/",
        download_url: "http://d2.pstatp.com/game_hall/OL__1.2.0_release.apk",
        image_mode: 5,
        is_download_ad: 1,
        req_id: 95495530622722,
        source: "å¤§çš‡å¸",
        type: "app",
        time: "00:30",
        videoId: "6096046383ef4c5c8063e7cec3e6e814",
        poster: "http://p3.pstatp.com/origin/b5000d1385d403f681"
      },
      detail2A: {
        desc: "ç«™ä½ï¼Œæˆ‘æ˜¯ç¥žå†œå¤§è™¾ä½ çŸ¥ä¸çŸ¥é“ï¼Ÿå”‰ä½ åˆ«èµ°å•Šï¼",
        url: "http://api.snssdk.com/2/ad/5911991787/",
        download_url: "http://d2.pstatp.com/game_hall/g49_toutiao_sdk_2_g490108.apk",
        image: "http://p3.pstatp.com/origin/3f0000c4358bdd4fcc",
        image_mode: 5,
        source: "åŠŸå¤«ç†ŠçŒ«3",
        type: "app"
      },
      detail2B: {
        desc: "ç«™ä½ï¼Œæˆ‘æ˜¯ç¥žå†œå¤§è™¾ä½ çŸ¥ä¸çŸ¥é“ï¼Ÿå”‰ä½ åˆ«èµ°å•Šï¼",
        url: "http://api.snssdk.com/2/ad/5911991787/",
        download_url: "http://d2.pstatp.com/game_hall/g49_toutiao_sdk_2_g490108.apk",
        image: "http://p3.pstatp.com/origin/3f0000c4358bdd4fcc",
        image_mode: 5,
        source: "åŠŸå¤«ç†ŠçŒ«3",
        type: "app"
      },
      videoListA: {
        desc: "è¿™çš‡å¸æˆ‘å½“ä¸ä¸‹åŽ»äº†ï¼Œç»™ä½ å§ï¼ŒæƒæŽŒå¤©ä¸‹ï¼ŒåŽå®«ä¸‰åƒï¼",
        url: "http://api.snssdk.com/2/ad/5949242926/",
        download_url: "http://d2.pstatp.com/game_hall/OL__1.2.0_release.apk",
        image_mode: 5,
        source: "å¤§çš‡å¸",
        time: "00:30",
        videoId: "6096046383ef4c5c8063e7cec3e6e814",
        poster: "http://p3.pstatp.com/origin/b5000d1385d403f681"
      },
      videoListB: {
        desc: "è¿™çš‡å¸æˆ‘å½“ä¸ä¸‹åŽ»äº†ï¼Œç»™ä½ å§ï¼ŒæƒæŽŒå¤©ä¸‹ï¼ŒåŽå®«ä¸‰åƒï¼",
        url: "http://api.snssdk.com/2/ad/5949242926/",
        download_url: "http://d2.pstatp.com/game_hall/OL__1.2.0_release.apk",
        image_mode: 5,
        source: "å¤§çš‡å¸",
        time: "00:30",
        videoId: "6096046383ef4c5c8063e7cec3e6e814",
        poster: "http://p3.pstatp.com/origin/b5000d1385d403f681"
      },
      picListA: {
        desc: "æ—¶å…‰ç›¸å†Œå¸®ä½ æ™ºèƒ½è¯†åˆ«äººè„¸ï¼Œè‡ªåŠ¨åˆ†ç±»ï¼Œé‡Šæ”¾ç©ºé—´",
        url: "http://ad.toutiao.com/tetris/page/6634640137/",
        download_url: "http://album.sg/KMxY1fN7ghv2",
        image: n(5026150217922954),
        image_mode: 5,
        source: "æ—¶å…‰ç›¸å†Œ"
      },
      picListB: {
        desc: "æ—¶å…‰ç›¸å†Œå¸®ä½ æ™ºèƒ½è¯†åˆ«äººè„¸ï¼Œè‡ªåŠ¨åˆ†ç±»ï¼Œé‡Šæ”¾ç©ºé—´",
        url: "http://ad.toutiao.com/tetris/page/6634640137/",
        download_url: "http://album.sg/KMxY1fN7ghv2",
        image: n(5026150217922954),
        image_mode: 5,
        source: "æ—¶å…‰ç›¸å†Œ"
      },
      picListC: {
        desc: "ç›—å¢“ç¬”è®°ç²‰ä¸ç¥žç¦åˆ©ï¼è€ä¹é—¨æ‰‹æ¸¸ç«çˆ†å¼€æœï¼",
        url: "http://ad.toutiao.com/tetris/page/6969691169/",
        download_url: "http://d2.pstatp.com/game_hall/ljm_1.0.1.0_jinritoutiao.apk",
        imgA: n(0xa179c3e0d614),
        imgB: n(0x3add5d820ca85),
        imgC: n(8573774072548499),
        image_mode: 5,
        source: "è€ä¹é—¨"
      },
      picListD: {
        desc: "ç›—å¢“ç¬”è®°ç²‰ä¸ç¥žç¦åˆ©ï¼è€ä¹é—¨æ‰‹æ¸¸ç«çˆ†å¼€æœï¼",
        url: "http://ad.toutiao.com/tetris/page/6969691169/",
        download_url: "http://d2.pstatp.com/game_hall/ljm_1.0.1.0_jinritoutiao.apk",
        imgA: n(0xa179c3e0d614),
        imgB: n(0x3add5d820ca85),
        imgC: n(8573774072548499),
        image_mode: 5,
        source: "è€ä¹é—¨"
      }
    };
    e.exports = r
  },
  973429510659612: function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(6702072606888888);
      n(8533228366130695);
      var a = function (e) {
        this.data = e, this.tpl = ['<span class="ed-link clearfix detail2-alpha" data-href="#{download_url}">', '<div class="image-holder">', '<img src="#{image_url}" class="trigger-event" data-href="#{url}">', "</div>", '<div class="image-info">', '<div class="info-list">', '<h3 class="line2 dotdot trigger-event" data-href="#{url}">#{title}</h3>', '<div class="download-info">', '<span class="src">#{source}</span>', '<span class="download trigger-event">ç«‹å³ä¸‹è½½</span>', "</div>", "</div>", "</div>", "</span>"].join("")
      };
      t.extend(a.prototype, r, {
        init: function () {
          var e = this.format(this.tpl, this.data);
          this.$el = t(e)
        }
      }), e.exports = a
    }).call(t, n(5915487851987839))
  },
  8533228366130695: 468537700344184,
  0xfd213ec1cf808: function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(6702072606888888);
      n(7453197387179963);
      var a = function (e) {
        this.data = e, this.tpl = ['<span class="ed-link clearfix detail2-beta" data-href="#{download_url}">', '<div class="image-holder">', '<img src="#{image_url}" class="trigger-event" data-href="#{url}">', "</div>", '<div class="image-info">', '<div class="info-list">', '<h3 class="line2 dotdot trigger-event" data-href="#{url}">#{title}</h3>', '<div class="download-info">', '<span class="src">#{source}</span>', "</div>", "</div>", "</div>", "</span>"].join("")
      };
      t.extend(a.prototype, r, {
        init: function () {
          var e = this.format(this.tpl, this.data);
          this.$el = t(e)
        }
      }), e.exports = a
    }).call(t, n(5915487851987839))
  },
  7453197387179963: 468537700344184,
  7569973485456584: function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(6702072606888888);
      n(0xbc4c3cafe044b);
      var a = function (e) {
        this.data = e, this.tpl = ['<span class="clearfix ed-link detail2-delte">', '<div class="video-controls">', '<h3 class="line2 dotdot trigger-event" data-href="#{url}">#{title}</h3>', "</div>", '<div class="video-holder">', '<div class="ad-video-box" tt-videoid="#{videoId}" tt-poster="#{poster}"></div>', "</div>", '<a class="download btn trigger-event" href="#{download_url}">ç«‹å³ä¸‹è½½</a>', '<div class="item_info trigger-event">', '<span class="recommend_label space">æŽ¨å¹¿</span>', '<span class="src space">#{source}</span>', "</div>", "</span>"].join("")
      };
      t.extend(a.prototype, r, {
        init: function () {
          var e = this.format(this.tpl, this.data);
          this.$el = t(e)
        }
      }), e.exports = a
    }).call(t, n(5915487851987839))
  },
  0xbc4c3cafe044b: 468537700344184,
  5721473704349269: function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(6702072606888888);
      n(468537700344184);
      var a = function (e) {
        this.data = e, this.tpl = ['<span class="ed-link clearfix detail2-gamma">', '<div class="video-controls">', '<h3 class="line2 dotdot trigger-event" data-href="#{url}">#{desc}</h3>', "</div>", '<div class="video-holder">', '<div class="ad-video-box" tt-videoid="#{videoId}" tt-poster="#{poster}"></div>', "</div>", '<div class="video-info trigger-event">', '<h2 class="ad-title">#{source}</h2>', '<a class="download btn trigger-event" href="#{download_url}">ç«‹å³ä¸‹è½½</a>', "</div>", '<div class="item_info trigger-event">', '<span class="recommend_label space">æŽ¨å¹¿</span>', '<span class="src space">#{source}</span>', "</div>", "</span>"].join("")
      };
      t.extend(a.prototype, r, {
        init: function () {
          var e = this.format(this.tpl, this.data);
          this.$el = t(e)
        }
      }), e.exports = a
    }).call(t, n(5915487851987839))
  },
  468537700344184: function (e, t) {
  },
  5945167075156341: function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(6702072606888888);
      n(0x77c3631675c0b);
      var a = function (e) {
        this.data = e, this.tpl = ['<span class="ed-link clearfix detail-beta" data-href="#{download_url}">', '<div class="image-holder">', '<img src="#{image_url}" onerror="errorimg.call(this)" class="trigger-event"/>', '<span class="ad-label">æŽ¨å¹¿</span>', "</div>", '<div class="image-info">', '<h2 class="trigger-event">#{source}</h2>', '<div class="download btn trigger-event">ç«‹å³ä¸‹è½½</div>', "</div>", "</span>"].join("")
      };
      t.extend(a.prototype, r, {
        init: function () {
          var e = this.format(this.tpl, this.data);
          this.$el = t(e)
        }
      }), e.exports = a
    }).call(t, n(5915487851987839))
  },
  0x77c3631675c0b: 468537700344184,
  0x9361cf36e886a: function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(6702072606888888);
      n(0x781eff6eaae7d);
      var a = function (e) {
        this.data = e, this.tpl = ['<span class="ed-link clearfix large-alpha" data-href="#{url}">', '<h3 class="line2 dotdot trigger-event title">#{title}</h3>', '<div class="img-holder trigger-event wrap-img">', '<img onerror="errorimg.call(this)" src="#{large_image_url}">', "</div>", '<div class="text-info trigger-event">', '<h2 class="ad-title">#{source}</h2>', '<div class="detail btn-noborder trigger-event">æŸ¥çœ‹è¯¦æƒ…</div>', "</div>", '<div class="item_info">', '<span class="ad_label space">å¹¿å‘Š</span>', '<span class="cmt space">è¯„è®º&nbsp;#{comment_count}</span>', "</div>", "</span>"].join("")
      };
      t.extend(a.prototype, r, {
        init: function () {
          var e = this.format(this.tpl, this.data);
          this.$el = t(e)
        }
      }), e.exports = a
    }).call(t, n(5915487851987839))
  },
  0x781eff6eaae7d: 468537700344184,
  0x7951f48cd7abf: function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(6702072606888888);
      n(0xe92f0c3f038d9);
      var a = function (e) {
        this.data = e, this.tpl = ['<span class="ed-link clearfix large-alpha" data-href="#{url}">', '<h3 class="line2 dotdot trigger-event title">#{title}</h3>', '<div class="img-holder trigger-event wrap-img">', '<img onerror="errorimg.call(this)" src="#{large_image_url}">', "</div>", '<div class="item_info">', '<span class="ad_label space">å¹¿å‘Š</span>', '<span class="cmt space">è¯„è®º&nbsp;#{comment_count}</span>', '<span class="time" title="#{datetime}"></span>', "</div>", "</span>"].join("")
      };
      t.extend(a.prototype, r, {
        init: function () {
          var e = this.format(this.tpl, this.data);
          this.$el = t(e)
        }
      }), e.exports = a
    }).call(t, n(5915487851987839))
  },
  0xe92f0c3f038d9: 468537700344184,
  8336728017188639: function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(6702072606888888);
      n(0xea3c13a834335);
      var a = function (e) {
        this.data = e, this.tpl = ['<span class="ed-link clearfix list2-alpha" data-href="#{download_url}">', '<h3 class="line2 dotdot trigger-event">#{title}</h3>', '<div class="img-holder">', '<img onerror="errorimg.call(this)" src="#{image_url}" class="trigger-event">', '<div class="img-info">', '<div class="item-icon clearfix">', '<img src="http://p1.pstatp.com/origin/#{app_icon}">', "</div>", '<div class="ad-text">', '<h2 class="ad-title">#{source}</h2>', "</div>", '<div class="download btn trigger-event">ç«‹å³ä¸‹è½½</div>', '<span class="ad-size">#{app_size}MB</span>', "</div>", "</div>", '<div class="item_info">', '<span class="ad_label space">æŽ¨å¹¿</span>', '<span class="src space">#{source}</span>', '<span class="cmt space">è¯„è®º&nbsp;#{comment_count}</span>', '<span class="time" title="#{datetime}"></span>', "</div>", "</span>"].join("")
      };
      t.extend(a.prototype, r, {
        init: function () {
          var e = this.format(this.tpl, this.data);
          this.$el = t(e)
        }
      }), e.exports = a
    }).call(t, n(5915487851987839))
  },
  0xea3c13a834335: 468537700344184,
  8555237318183075: function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(6702072606888888);
      n(0x7a2a0d899a6e9);
      var a = function (e) {
        this.data = e, this.tpl = ['<span class="ed-link clearfix list2-beta" data-href="#{download_url}">', '<h3 class="line2 dotdot trigger-event">#{desc}</h3>', '<div class="img-holder">', '<img onerror="errorimg.call(this)" src="#{image}" class="trigger-event">', '<div class="img-mask"></div>', '<div class="img-info">', '<div class="item-icon clearfix">', '<img src="http://p1.pstatp.com/origin/#{app_icon}">', "</div>", '<div class="ad-text">', '<h2 class="ad-title">#{source}</h2>', "</div>", '<div class="download btn trigger-event">ç«‹å³ä¸‹è½½</div>', '<span class="ad-size">#{app_size}MB</span>', "</div>", "</div>", '<div class="item_info">', '<span class="ad_label space">æŽ¨å¹¿</span>', '<span class="src space">#{source}</span>', '<span class="cmt space">è¯„è®º&nbsp;#{comment_count}</span>', '<span class="time" title="#{datetime}"></span>', "</div>", "</span>"].join("")
      };
      t.extend(a.prototype, r, {
        init: function () {
          var e = this.format(this.tpl, this.data);
          this.$el = t(e)
        }
      }), e.exports = a
    }).call(t, n(5915487851987839))
  },
  0x7a2a0d899a6e9: 468537700344184,
  4875075339894759: function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(6702072606888888);
      n(7850173549935540);
      var a = function (e) {
        this.data = e, this.tpl = ['<span class="ed-link clearfix list2-gamma" data-href="#{download_url}">', '<h3 class="line2 dotdot trigger-event">#{desc}</h3>', '<div class="img-holder">', '<img onerror="errorimg.call(this)" src="#{image}" class="trigger-event">', '<div class="img-info">', '<div class="ad-text">', '<h2 class="ad-title">#{source}</h2>', "</div>", '<div class="download btn trigger-event">#{app_size}M</div>', "</div>", "</div>", '<div class="item_info">', '<span class="ad_label space">æŽ¨å¹¿</span>', '<span class="src space">#{source}</span>', '<span class="cmt space">è¯„è®º&nbsp;#{comment_count}</span>', '<span class="time" title="#{datetime}"></span>', "</div>", "</span>"].join("")
      };
      t.extend(a.prototype, r, {
        init: function () {
          var e = this.format(this.tpl, this.data);
          this.$el = t(e)
        }
      }), e.exports = a
    }).call(t, n(5915487851987839))
  },
  7850173549935540: 468537700344184,
  0xcd86eabf2d1a8: function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(6702072606888888);
      n(4636603908239873);
      var a = function (e) {
        this.data = e, this.tpl = ['<span class="ed-link clearfix list-alpha" data-href="#{url}">', '<div class="title-holder">', '<h3 class="line2 dotdot trigger-event title">#{title}</h3>', "</div>", '<div class="list_image">', '<ul class="list-holder clearfix trigger-event wrap-img">', "</ul>", "</div>", '<div class="item_info">', '<span class="ad_label space">å¹¿å‘Š</span>', '<span class="src space">#{source}</span>', '<span class="cmt space">è¯„è®º&nbsp;#{comment_count}</span>', '<span class="time" title="#{datetime}"></span>', "</div>", "</span>"].join(""), this.itemTpl = ["<li>", '<div style="background: none;">', '<img src="#{url}" onerror="errorimg.call(this)" onload="loadimg.call(this)" style="opacity: 1;">', "</div>", "</li>"].join("")
      };
      t.extend(a.prototype, r, {
        init: function () {
          var e = this.format(this.tpl, this.data);
          this.$el = t(e), this.$listHolder = this.$el.find(".list-holder");
          var n = this.data.image_list, r = n.length;
          if (r)for (var a = 0; a < r; a++) {
            var o = this.format(this.itemTpl, n[a]);
            this.$listHolder.append(o)
          }
        }
      }), e.exports = a
    }).call(t, n(5915487851987839))
  },
  4636603908239873: 468537700344184,
  8429396475697490: function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(6702072606888888);
      n(751372936875204);
      var a = function (e) {
        this.data = e, this.tpl = ['<span class="ed-link clearfix list-beta" data-href="#{url}">', '<div class="title-holder">', '<h3 class="line2 dotdot trigger-event title">#{title}</h3>', "</div>", '<div class="list_image">', '<ul class="list-holder clearfix trigger-event wrap-img">', "</ul>", "</div>", '<div class="text-info trigger-event">', '<h2 class="ad-title">#{source}</h2>', '<div class="detail btn-noborder trigger-event">æŸ¥çœ‹è¯¦æƒ…</div>', "</div>", '<div class="item_info">', '<span class="ad_label space">å¹¿å‘Š</span>', '<span class="cmt space">è¯„è®º&nbsp;#{comment_count}</span>', '<span class="time" title="#{datetime}"></span>', "</div>", "</span>"].join(""), this.itemTpl = ["<li>", '<div style="background: none;">', '<img src="#{url}" onerror="errorimg.call(this)" onload="loadimg.call(this)" style="opacity: 1;">', "</div>", "</li>"].join("")
      };
      t.extend(a.prototype, r, {
        init: function () {
          var e = this.format(this.tpl, this.data);
          this.$el = t(e), this.$listHolder = this.$el.find(".list-holder");
          var n = this.data.image_list, r = n.length;
          if (r)for (var a = 0; a < r; a++) {
            var o = this.format(this.itemTpl, n[a]);
            this.$listHolder.append(o)
          }
        }
      }), e.exports = a
    }).call(t, n(5915487851987839))
  },
  751372936875204: 468537700344184,
  729883573915171: function (e, t, n) {
    "use strict";
    var r = n(0x7951f48cd7abf), a = n(0x9361cf36e886a), o = n(0x6ac13cc518b5d), i = n(0xa5b5caae0ebc0), s = n(0xcd86eabf2d1a8), l = n(8429396475697490), c = (n(0x9361cf36e886a), n(5945167075156341), n(973429510659612)), u = n(0xfd213ec1cf808), d = n(7569973485456584), p = n(5721473704349269), f = n(8336728017188639), h = n(8555237318183075), m = n(4875075339894759), v = {
      largeA: r,
      largeB: a,
      smallA: o,
      smallB: i,
      listA: s,
      listB: l,
      detail2A: c,
      detail2B: u,
      list2A: f,
      list2B: h,
      list2C: m,
      videoListA: p,
      videoListB: d
    }, g = {
      get: function (e) {
        return v[e]
      }
    };
    e.exports = g
  },
  8111156497284432: function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : {default: e}
      }

      var a = n(0xeb9e744742586), o = r(a), i = n(0xe85a386169c4b), s = (r(i), n(5359030257400059)), l = (r(s), {
        ad_ids: [],
        track_ids: [],
        click_ids: [],
        scrollChangeDisable: !1,
        attribute: "",
        testADFirstFlag: !0,
        extra_data: {
          utm_source: t.cookie("utm_source") || "",
          utm_campaign: t.cookie("utm_campaign") || "",
          utm_medium: t.cookie("utm_medium") || "",
          utm_term: t.cookie("utm_term") || "",
          utm_content: t.cookie("utm_content") || "",
          is_ad_event: 1
        },
        pushAdQueue: function (e) {
          var n = t(e), r = n.attr("ad-id"), a = n.attr("ad-tag") || "embeded_ad", o = n.attr("ad-log-extra") || "", i = n.attr("data-track"), s = n.attr("ad-testname");
          if (r) {
            i && this.sendTrackEvent(r, i);
            var l = n.parents("section");
            return this.sendShowEvent(r, a, o, l, s), this
          }
        },
        initClickEvents: function (e) {
          var n = this, r = t(e).attr("ad-id"), a = t(e).attr("ad-tag") || "embeded_ad", o = "click", i = t(e).attr("ad-log-extra") || "", s = t(e).attr("ad-testname") || "";
          t(e).parents("section").find(".article_link").click(function (e) {
            var l = t(e.target), c = this.href, u = this;
            return n.sendClickEvent(r, o, a, i, function () {
              "a" == u.tagName.toLowerCase() && (location.href = c), window._taq && window.ta && (_taq.push(["trackevent", "list", "all.clicked", s, l.get(0)]), l.hasClass("look_detail") && _taq.push(["trackevent", "list", "detail.clicked", s, l.get(0)]), l.hasClass("title") && _taq.push(["trackevent", "list", "title.clicked", s, l.get(0)]), l.hasClass("img_holder") && _taq.push(["trackevent", "list", "img.clicked", s, l.get(0)]))
            }), !1
          })
        },
        delAdId: function (e) {
          var n = t(e), r = n.attr("ad-id"), a = "section" + n.parents("section").index(), o = a + r, i = this.ad_ids.indexOf(o);
          i >= 0 && this.ad_ids.splice(i, 1)
        },
        sendClickEvent: function (e, n, r, a, i) {
          if (this.click_ids.indexOf(e) >= 0)return this;
          this.click_ids.push(e);
          var s = this;
          return t.post("/log/action/", {
            label: n,
            value: e,
            tag: r,
            log_extra: a,
            extra_data: (0, o.default)(s.extra_data),
            category: "wap"
          }).done(function () {
            s.click_ids = []
          }).always(function () {
            i && i()
          }), this
        },
        sendShowEvent: function (e, n, r, a, i) {
          function s(e, n, r, a) {
            t.post("/log/action/", {
              label: n,
              value: e,
              tag: r,
              log_extra: a,
              extra_data: (0, o.default)(u.extra_data),
              category: "wap"
            })
          }

          var l = "section" + a.index(), c = l + e, u = this;
          if (this.ad_ids.indexOf(c) !== -1)return this;
          this.ad_ids.push(c);
          var d = "show";
          return s(e, d, n, r), window._taq && _taq.push(["trackevent", "list", "pv", i, null]), this
        },
        sendTrackEvent: function (e, n) {
          if (this.track_ids.indexOf(e) >= 0)return this;
          this.track_ids.push(e);
          var r = t("iframe#ad_track");
          return r.length || (t("body").append("<iframe src='' height='0' width='0' id='ad_track' style='position:absolute; top:-10px'/>"), r = t("iframe#ad_track")), r.attr("src", n), console.log("track_url : " + n), this
        },
        scrollUpdate: function () {
          this.scrollChangeDisable || this._pollLogNodes()
        },
        _inView: function (e) {
          if (!this._isVisbile(e))return !1;
          var t = e.getBoundingClientRect(), n = window.innerHeight || document.documentElement.clientHeight;
          return t.top > 0 && t.top <= n || (this.delAdId(e), !1)
        },
        _isVisbile: function (e) {
          if (!e)return !1;
          for (; e && "BODY" != e.tagName && "HTML" != e.tagName;) {
            if ("none" === t(e).css("display"))return !1;
            e = e.parentNode
          }
          return !0
        },
        _pollLogNodes: function () {
          for (var e = this.attribute || "alt_src", t = document.querySelectorAll("span[" + e + "]"), n = 0, r = t.length; n < r; ++n) {
            var a = t[n];
            if (this.initClickEvents(a), a && this._inView(a))return "undefined" != typeof indexFlow && indexFlow.storeFlow(), this.pushAdQueue(a), !1
          }
        },
        initShowEvents: function (e) {
          var n = e.attribute || "alt_src", r = (e.offset || 0, this);
          r.attribute = n, r._pollLogNodes();
          var a = t(window);
          return a.on("load scrollEnd.lazy", function (e) {
            r.scrollChangeDisable || r._pollLogNodes()
          }), a.on("channelChange", function () {
            r.testADFirstFlag = !0
          }), this
        }
      });
      e.exports = l
    }).call(t, n(5915487851987839))
  },
  0xa5b5caae0ebc0: function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(6702072606888888);
      n(7188346185091224);
      var a = function (e) {
        this.data = e, this.tpl = ['<span class="ed-link clearfix small-beta" data-href="#{url}">', '<div class="clearfix">', '<div class="img-holder trigger-event wrap-img">', '<img src="#{image_url}">', "</div>", '<div class="text-holder">', '<h3 class="line2 trigger-event title">#{title}</h3>', '<div class="item_info trigger-event">', '<span class="ad_label space">å¹¿å‘Š</span>', '<span class="time" title="#{datetime}"></span>', "</div>", "</div>", "</div>", '<div class="text-info clearfix trigger-event">', '<div class="ad-text">', '<h2 class="ad-title">#{source}</h2>', "</div>", '<span class="detail trigger-event">æŸ¥çœ‹è¯¦æƒ…</span>', "</div>", "</span>"].join("")
      };
      t.extend(a.prototype, r, {
        init: function () {
          var e = this.format(this.tpl, this.data);
          this.$el = t(e)
        }
      }), e.exports = a
    }).call(t, n(5915487851987839))
  },
  7188346185091224: 468537700344184,
  0x6ac13cc518b5d: function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(6702072606888888);
      n(5786148360057623);
      var a = function (e) {
        this.data = e, this.tpl = ['<span class="ed-link clearfix small-delte" data-href="#{url}">', '<div class="clearfix">', '<div class="img-holder trigger-event wrap-img">', '<img src="#{image_url}">', "</div>", '<div class="text-holder trigger-event">', '<h3 class="line2 title">#{title}</h3>', '<div class="text-info clearfix">', '<span class="ad_label">å¹¿å‘Š</span>', '<span class="src space">#{source}</span>', '<span class="cmt space">è¯„è®º&nbsp;#{comment_count}</span>', '<span class="time" title="#{datetime}">#{datetime}</span>', "</div>", "</div>", "</div>", "</span>"].join("")
      };
      t.extend(a.prototype, r, {
        init: function () {
          var e = this.format(this.tpl, this.data);
          this.$el = t(e)
        }
      }), e.exports = a
    }).call(t, n(5915487851987839))
  },
  5786148360057623: 468537700344184,
  0: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    function a(e) {
      var t = e.listData, n = e.fetchTips, r = e.currentChannel, a = e.GTMValue, o = e.showPopupBanner;
      return {listData: t, fetchTips: n, currentChannel: r, GTMValue: a, showPopupBanner: o}
    }

    var o, i, s = n(6553419251878407), l = r(s), c = n(6861363765270330), u = r(c), d = n(7220449874153128), p = r(d), f = n(7004395598908739), h = r(f), m = n(0x85e0a08d90f85), v = r(m), g = n(0x48bee20605e56), _ = r(g), b = n(5085359615067086), y = n(0x82a69954be82e), w = r(y), x = n(6941063816955236), k = n(0xefa742133d960), E = n(0x7722fad92192d), T = r(E), A = n(8253537526949383), F = r(A), O = n(8560193218878797), L = r(O), C = n(0xb104e7971b79d), S = r(C), D = n(5938161677575104), M = r(D), j = n(0xfb5342f080880), N = r(j), P = n(0xd18716840a7c1), R = r(P), B = n(8404547702662252), I = r(B), q = n(755734527867252), V = r(q), H = n(0x6404cff983a7a), X = r(H);
    n(0xc94c4916c9ec6), n(0x49427db3e0b23), n(489539131759075);
    var U = (o = (0, x.connect)(a), o(i = function (e) {
      function t(e) {
        (0, u.default)(this, t);
        var n = (0, h.default)(this, (t.__proto__ || (0, l.default)(t)).call(this, e));
        return (0, X.default)(), n
      }

      return (0, v.default)(t, e), (0, p.default)(t, [{
        key: "getListData", value: function (e) {
          var t = this.props.dispatch;
          t((0, k.fetchListIfNeeded)(e))
        }
      }, {
        key: "handleScroll", value: function (e) {
          this.getListData({direction: e})
        }
      }, {
        key: "render", value: function () {
          var e = this, t = V.default.os.android || V.default.os.iphone && !V.default.browser.weixin, n = this.props.GTMValue.hideTopBar;
          return _.default.createElement("div", {
            id: "indexContainer",
            className: "indexContainer " + (n ? "hideHeader " : "withHeader ")
          }, _.default.createElement(T.default, null), _.default.createElement(R.default, null), _.default.createElement(L.default, {
            handleScroll: function (t) {
              return e.handleScroll(t)
            }
          }, _.default.createElement(F.default, {
            listData: this.props.listData[this.props.currentChannel] || [],
            tips: this.props.fetchTips
          })), this.props.showPopupBanner ? _.default.createElement(S.default, null) : null, !this.props.GTMValue.hideBonus && t ? _.default.createElement(M.default, null) : null, _.default.createElement(N.default, null), _.default.createElement(I.default, null))
        }
      }]), t
    }(g.Component)) || i);
    (0, b.render)(_.default.createElement(x.Provider, {store: w.default}, _.default.createElement(U, null)), document.getElementById("main"))
  },
  0xb0e0b333b6355: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    var a = n(0xe85a386169c4b), o = r(a);
    !function (e, t) {
      e.AbTest = {
        _sampleId: !1, _sampleGroup: {}, _cookidMap: {}, getSampleId: function () {
          if (this._sampleId !== !1)return this._sampleId;
          var e = o.default.cookie("tt_webid") || "", t = e % 100;
          return this._sampleId = t, t
        }, setGroup: function () {
          if (arguments && arguments.length)for (var e = this, t = this.getSampleId(), n = "", r = 0; r < arguments.length; r++) {
            var a = arguments[r];
            if ("[object String]" == Object.prototype.toString.call(a))n = a; else if ("[object Array]" == Object.prototype.toString.call(a)) {
              for (var o = n + "." + a[2], i = a[0]; i <= a[1]; i++)e._cookidMap[i] = o;
              if (t >= a[0] && t <= a[1]) {
                e._sampleGroup[n] = a.length > 2 ? a[2] : r + 1;
                break
              }
            }
          }
        }, getGroup: function (e) {
          var t = this._sampleGroup[e] || "";
          return t
        }, getName: function () {
          var e = this.getSampleId(), t = this._cookidMap[e] || "";
          return t
        }
      }
    }(Zepto)
  },
  5334991700515787: function (e, t, n) {
    "use strict";
    // 计算as cp 算法处
    function r() {
      var e = Math.floor((new Date).getTime() / 1e3), t = e.toString(16).toUpperCase(), n = a(e).toString().toUpperCase();
      if (8 != t.length)return {as: "479BB4B7254C150", cp: "7E0AC8874BB0985"};
      for (var r = n.slice(0, 5), o = n.slice(-5), i = "", s = 0; s < 5; s++)i += r[s] + t[s];
      for (var l = "", c = 0; c < 5; c++)l += t[c + 3] + o[c];
      return {as: "A1" + i + t.slice(-3), cp: t.slice(0, 3) + l + "E1"}
    }

    var a = n(0xe6e7f1fb6bb91);
    e.exports = r
  },
  0xe6e7f1fb6bb91: function (e, t, n) {
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    var a, o = n(7724818440676399);
    r(o);
    !function (r) {
      "use strict";
      function o(e, t) {
        var n = (65535 & e) + (65535 & t), r = (e >> 16) + (t >> 16) + (n >> 16);
        return r << 16 | 65535 & n
      }

      function i(e, t) {
        return e << t | e >>> 32 - t
      }

      function s(e, t, n, r, a, s) {
        return o(i(o(o(t, e), o(r, s)), a), n)
      }

      function l(e, t, n, r, a, o, i) {
        return s(t & n | ~t & r, e, t, a, o, i)
      }

      function c(e, t, n, r, a, o, i) {
        return s(t & r | n & ~r, e, t, a, o, i)
      }

      function u(e, t, n, r, a, o, i) {
        return s(t ^ n ^ r, e, t, a, o, i)
      }

      function d(e, t, n, r, a, o, i) {
        return s(n ^ (t | ~r), e, t, a, o, i)
      }

      function p(e, t) {
        e[t >> 5] |= 128 << t % 32, e[(t + 64 >>> 9 << 4) + 14] = t;
        var n, r, a, i, s, p = 1732584193, f = -271733879, h = -1732584194, m = 271733878;
        for (n = 0; n < e.length; n += 16)r = p, a = f, i = h, s = m, p = l(p, f, h, m, e[n], 7, -680876936), m = l(m, p, f, h, e[n + 1], 12, -389564586), h = l(h, m, p, f, e[n + 2], 17, 606105819), f = l(f, h, m, p, e[n + 3], 22, -1044525330), p = l(p, f, h, m, e[n + 4], 7, -176418897), m = l(m, p, f, h, e[n + 5], 12, 1200080426), h = l(h, m, p, f, e[n + 6], 17, -1473231341), f = l(f, h, m, p, e[n + 7], 22, -45705983), p = l(p, f, h, m, e[n + 8], 7, 1770035416), m = l(m, p, f, h, e[n + 9], 12, -1958414417), h = l(h, m, p, f, e[n + 10], 17, -42063), f = l(f, h, m, p, e[n + 11], 22, -1990404162), p = l(p, f, h, m, e[n + 12], 7, 1804603682), m = l(m, p, f, h, e[n + 13], 12, -40341101), h = l(h, m, p, f, e[n + 14], 17, -1502002290),
          f = l(f, h, m, p, e[n + 15], 22, 1236535329), p = c(p, f, h, m, e[n + 1], 5, -165796510), m = c(m, p, f, h, e[n + 6], 9, -1069501632), h = c(h, m, p, f, e[n + 11], 14, 643717713), f = c(f, h, m, p, e[n], 20, -373897302), p = c(p, f, h, m, e[n + 5], 5, -701558691), m = c(m, p, f, h, e[n + 10], 9, 38016083), h = c(h, m, p, f, e[n + 15], 14, -660478335), f = c(f, h, m, p, e[n + 4], 20, -405537848), p = c(p, f, h, m, e[n + 9], 5, 568446438), m = c(m, p, f, h, e[n + 14], 9, -1019803690), h = c(h, m, p, f, e[n + 3], 14, -187363961), f = c(f, h, m, p, e[n + 8], 20, 1163531501), p = c(p, f, h, m, e[n + 13], 5, -1444681467), m = c(m, p, f, h, e[n + 2], 9, -51403784), h = c(h, m, p, f, e[n + 7], 14, 1735328473), f = c(f, h, m, p, e[n + 12], 20, -1926607734), p = u(p, f, h, m, e[n + 5], 4, -378558), m = u(m, p, f, h, e[n + 8], 11, -2022574463), h = u(h, m, p, f, e[n + 11], 16, 1839030562), f = u(f, h, m, p, e[n + 14], 23, -35309556), p = u(p, f, h, m, e[n + 1], 4, -1530992060), m = u(m, p, f, h, e[n + 4], 11, 1272893353), h = u(h, m, p, f, e[n + 7], 16, -155497632), f = u(f, h, m, p, e[n + 10], 23, -1094730640), p = u(p, f, h, m, e[n + 13], 4, 681279174), m = u(m, p, f, h, e[n], 11, -358537222), h = u(h, m, p, f, e[n + 3], 16, -722521979), f = u(f, h, m, p, e[n + 6], 23, 76029189), p = u(p, f, h, m, e[n + 9], 4, -640364487), m = u(m, p, f, h, e[n + 12], 11, -421815835), h = u(h, m, p, f, e[n + 15], 16, 530742520), f = u(f, h, m, p, e[n + 2], 23, -995338651), p = d(p, f, h, m, e[n], 6, -198630844), m = d(m, p, f, h, e[n + 7], 10, 1126891415), h = d(h, m, p, f, e[n + 14], 15, -1416354905), f = d(f, h, m, p, e[n + 5], 21, -57434055), p = d(p, f, h, m, e[n + 12], 6, 1700485571), m = d(m, p, f, h, e[n + 3], 10, -1894986606), h = d(h, m, p, f, e[n + 10], 15, -1051523), f = d(f, h, m, p, e[n + 1], 21, -2054922799), p = d(p, f, h, m, e[n + 8], 6, 1873313359), m = d(m, p, f, h, e[n + 15], 10, -30611744), h = d(h, m, p, f, e[n + 6], 15, -1560198380), f = d(f, h, m, p, e[n + 13], 21, 1309151649), p = d(p, f, h, m, e[n + 4], 6, -145523070), m = d(m, p, f, h, e[n + 11], 10, -1120210379), h = d(h, m, p, f, e[n + 2], 15, 718787259), f = d(f, h, m, p, e[n + 9], 21, -343485551), p = o(p, r), f = o(f, a), h = o(h, i), m = o(m, s);
        return [p, f, h, m]
      }

      function f(e) {
        var t, n = "";
        for (t = 0; t < 32 * e.length; t += 8)n += String.fromCharCode(e[t >> 5] >>> t % 32 & 255);
        return n
      }

      function h(e) {
        var t, n = [];
        for (n[(e.length >> 2) - 1] = void 0, t = 0; t < n.length; t += 1)n[t] = 0;
        for (t = 0; t < 8 * e.length; t += 8)n[t >> 5] |= (255 & e.charCodeAt(t / 8)) << t % 32;
        return n
      }

      function m(e) {
        return f(p(h(e), 8 * e.length))
      }

      function v(e, t) {
        var n, r, a = h(e), o = [], i = [];
        for (o[15] = i[15] = void 0, a.length > 16 && (a = p(a, 8 * e.length)), n = 0; n < 16; n += 1)o[n] = 909522486 ^ a[n], i[n] = 1549556828 ^ a[n];
        return r = p(o.concat(h(t)), 512 + 8 * t.length), f(p(i.concat(r), 640))
      }

      function g(e) {
        var t, n, r = "0123456789abcdef", a = "";
        for (n = 0; n < e.length; n += 1)t = e.charCodeAt(n), a += r.charAt(t >>> 4 & 15) + r.charAt(15 & t);
        return a
      }

      function _(e) {
        return unescape(encodeURIComponent(e))
      }

      function b(e) {
        return m(_(e))
      }

      function y(e) {
        return g(b(e))
      }

      function w(e, t) {
        return v(_(e), _(t))
      }

      function x(e, t) {
        return g(w(e, t))
      }

      // 1 ? 2 ? 3 : 4 : 5 ? 6 : 7 => 3
      function k(e, t, n) {
        return t ? (n ? w(t, e) : x(t, e)) : (n ? b(e) : y(e))
      }

      a = function () {
        return k
      }.call(t, n, t, e), !(void 0 !== a && (e.exports = a))
    }(void 0)
  },
  0xdfa3b54159663: function (e, t) {
    "use strict";
    e.exports = function (e, t) {
      function n() {
        if (!o) {
          var e = 1 == t.scale ? "width=device-width, " : "";
          if (o = r.createElement("meta"), o.setAttribute("name", "viewport"), o.setAttribute("content", e + "initial-scale=" + t.scale + ", maximum-scale=" + t.scale + ", minimum-scale=" + t.scale + ", user-scalable=no"), a.firstElementChild)a.firstElementChild.appendChild(o); else {
            var n = r.createElement("div");
            n.appendChild(o), r.write(n.innerHTML)
          }
        }
      }

      var r = e.document, a = r.documentElement, o = r.querySelector("meta[name='viewport']"), i = r.querySelector("meta[name='responsive']"), s = Math.floor(e.devicePixelRatio) || 1, l = [1, 2, 3], c = 1, u = 0, d = !1;
      if (t.init = function (n) {
          return window.noScaling = n, t.isScalable = d = function () {
            if (n)return !1;
            var t = e.navigator.appVersion.match(/iphone/gi), r = e.navigator.appVersion.match(/android/gi), a = !!e.chrome, o = e.navigator.userAgent, i = o.match(/MicroMessenger\/([\d\.]+)/i);
            if (t) {
              var s = o.match(/(iPhone\sOS)\s([\d_]+)/);
              return !(parseFloat(s[2]) < 7)
            }
            if (r) {
              var l = o.match(/AppleWebKit\/([\d\.]+)/i), c = o.match(/UCBrowser\/([\d\.]+)/i), u = (o.match(/MQQBrowser\/([\d\.]+)/i), o.match(/Chrome\/([\d\.]+)/i)), d = o.match(/MiuiBrowser/i);
              return !!(l && parseFloat(l[1]) >= 537.36 && (d || i && parseFloat(i[1]) >= 6.1)) || (!!(c && parseFloat(c[1]) >= 9.6) || !!(u && parseFloat(u[1]) >= 30 && a))
            }
            return !1
          }(), t.changeScale(), this
        }, i && d && (content = i.getAttribute("content"), content)) {
        var p = content.match(/initial\-dpr=([\d\.]+)/);
        p && (c = Math.floor(p[1]))
      }
      return t.scaleLock = !1, t.changeScale = function (t, r) {
        if (!this.scaleLock) {
          if (this.isScalable) {
            var t = Math.floor(t) || s;
            this.dpr = l.indexOf(t) > -1 ? t : 3
          } else this.dpr = 1;
          this.scale = 1 / this.dpr, o && (o.parentNode.removeChild(o), o = null), n()
        }
        if (r && (this.scaleLock = r), a.getBoundingClientRect().width > e.innerWidth) {
          var i = 1 == this.scale ? "device-width" : e.innerWidth;
          o.setAttribute("content", "width=" + i + ",initial-scale=" + this.scale + ", maximum-scale=" + this.scale + ", minimum-scale=" + this.scale + ", user-scalable=no")
        }
        this.baseFontSize = a.getBoundingClientRect().width / 10, this.baseFontSize = Math.max(this.baseFontSize, 32), a.style.fontSize = this.baseFontSize + "px", a.setAttribute("data-dpr", this.dpr)
      }, r.addEventListener("DOMContentLoaded", function (e) {
        r.body.style.fontSize = 12 * c + "px"
      }, !1), e.addEventListener("orientationchange", function (e) {
        clearTimeout(u), u = setTimeout(t.changeScale.bind(t), 300)
      }, !1), e.addEventListener("pageshow", function (e) {
        e.persisted && (clearTimeout(u), window.noScaling || (u = setTimeout(t.changeScale.bind(t), 300)))
      }, !1), t.rem2px = function (e) {
        var t = parseFloat(e) * this.dpr * this.baseFontSize;
        return "string" == typeof e && e.match(/rem$/) && (t += "px"), t
      }, t.px2rem = function (e) {
        var t = parseFloat(e) * this.dpr / this.baseFontSize;
        return "string" == typeof e && e.match(/px$/) && (t += "rem"), t
      }, t.px2px = function (e) {
        var t = parseFloat(e) * this.dpr;
        return "string" == typeof e && e.match(/px$/) && (t += "px"), t
      }, t
    }(window, window.responsive || (window.responsive = {dpr: 1}))
  },
  8682704682537579: function (e, t, n) {
    (function (t, r) {
      "use strict";
      function a(e) {
        var n = {
          downloadLink: "//d.toutiao.com/e6jY/",
          yybLink: "tmast://appdetails?r=0.27985643851570785&pname=com.ss.android.article.news&oplist=1%3B2&via=ANDROIDWXZ.YYB.OTHERBROWSER&channelid=000116083232363434363139&appid=213141",
          nativeLink: "",
          universalLink: "",
          openUrl: ""
        };
        t(n, e || {});
        var a = "click_" + (s.isWeixin() ? "weixin" : "wap") + "_" + (window.isListPage ? "list" : "detail") + "_" + n.pos;
        t(n, {gdLabel: a}), window.group_id && r.extend(!0, n, {
          id: window.group_id,
          type: "detail",
          isNewVideo: window.isNewVideoPage
        }), n.nativeLink = n.nativeLink || s.getNativeLink(n), l.os.ios ? s.isWeixin() ? (i.jumpToNativeapp(n), setTimeout(function () {
          o.gotoAppDownload(n)
        }, 1e3)) : (o.gotoAppDownload(n), setTimeout(function () {
          i.jumpToNativeapp(n)
        }, 1e3)) : (i.jumpToNativeapp(n), o.gotoAppDownload(n))
      }

      var o = n(5247693571505564), i = n(0xcc15c9e3f2142), s = n(5359030257400059), l = (n(0xe85a386169c4b), n(755734527867252));
      e.exports = a
    }).call(t, n(8406610569276718), n(5915487851987839))
  },
  7484092472500367: function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : {default: e}
      }

      var a = n(0xeb9e744742586), o = r(a), i = n(0xe85a386169c4b), s = (r(i), n(5359030257400059)), l = (r(s), {
        ad_ids: [],
        track_ids: [],
        click_ids: [],
        scrollChangeDisable: !1,
        attribute: "",
        testADFirstFlag: !0,
        extra_data: {
          utm_source: t.cookie("utm_source") || "",
          utm_campaign: t.cookie("utm_campaign") || "",
          utm_medium: t.cookie("utm_medium") || "",
          utm_term: t.cookie("utm_term") || "",
          utm_content: t.cookie("utm_content") || "",
          is_ad_event: 1
        },
        pushAdQueue: function (e) {
          var n = t(e), r = n.attr("ad-id"), a = n.attr("ad-tag") || "embeded_ad", o = n.attr("ad-log-extra") || "", i = n.attr("data-track");
          if (r) {
            i && this.sendTrackEvent(r, i);
            var s = n.parents("section");
            return this.sendShowEvent(r, a, o, s), this
          }
        },
        initClickEvents: function (e) {
          var n = this, r = t(e).attr("ad-id"), a = t(e).attr("ad-tag") || "embeded_ad", o = "click", i = t(e).attr("ad-log-extra") || "";
          t(e).parents("section").find(".article_link").click(function (e) {
            var s = this.href, l = this, c = t(this).attr("ad-url"), u = t(e.target), d = u.attr("ad-url");
            return n.sendClickEvent(r, o, a, i, function () {
              if ("a" == l.tagName.toLowerCase())return void(location.href = s);
              if (t(l).attr("ad-load")) {
                var e = t.cookie("utm_source") || "", o = t.cookie("utm_campagin") || "", p = t.cookie("utm_media") || "", f = t.cookie("utm_term") || "", h = t.cookie("utm_content") || "", m = encodeURIComponent(t(l).find(".download").attr("ad-url"));
                if (u.hasClass("download")) {
                  var v = "feed_download_ad", g = "click_start";
                  n.sendClickEvent(r, g, v, i), window.location.href = d
                } else {
                  if (u.hasClass("text_info") || u.parent().hasClass("text_info")) {
                    var v = "feed_download_ad", g = "click_card";
                    n.sendClickEvent(r, g, v, i)
                  }
                  if (c) {
                    var _ = "value=" + r + "&log_extra=" + i + "&tag=" + a + "&utm_source=" + e + "&utm_campagin=" + o + "&utm_medium=" + p + "&utm_term=" + f + "&utm_content=" + h + "&is_ad_event=1&category=wap&download_url=" + m;
                    window.location.href = c.indexOf("?") == -1 ? c + "?" + _ : c + "&" + _
                  } else window.location.href = t(l).find(".download").attr("ad-url")
                }
              } else if (t(l).attr("ad-call"))if (u.hasClass("phone")) {
                var v = "feed_call", g = "click_call";
                n.sendClickEvent(r, g, v, i), window.location.href = "tel:" + d
              } else {
                if (u.hasClass("text_info") || u.parent().hasClass("text_info")) {
                  var v = "feed_call", g = "click_card";
                  n.sendClickEvent(r, g, v, i)
                }
                window.location.href = c ? c : "tel" + t(l).find(".phone").attr("ad-url")
              }
            }), !1
          })
        },
        delAdId: function (e) {
          var n = t(e), r = n.attr("ad-id"), a = "section" + n.parents("section").index(), o = a + r, i = this.ad_ids.indexOf(o);
          i >= 0 && this.ad_ids.splice(i, 1)
        },
        sendClickEvent: function (e, n, r, a, i) {
          if (this.click_ids.indexOf(e) >= 0)return this;
          this.click_ids.push(e);
          var s = this;
          return t.post("/log/action/", {
            label: n,
            value: e,
            tag: r,
            log_extra: a,
            extra_data: (0, o.default)(s.extra_data),
            category: "wap"
          }).done(function () {
            s.click_ids = []
          }).always(function () {
            i && i()
          }), this
        },
        sendShowEvent: function (e, n, r, a) {
          function i(e, n, r, a) {
            t.post("/log/action/", {
              label: n,
              value: e,
              tag: r,
              log_extra: a,
              extra_data: (0, o.default)(c.extra_data),
              category: "wap"
            })
          }

          var s = "section" + a.index(), l = s + e, c = this;
          if (this.ad_ids.indexOf(l) !== -1)return this;
          this.ad_ids.push(l);
          var u = "show";
          i(e, u, n, r);
          var d = a.find(".article_link");
          if (d.attr("ad-load")) {
            var p = "card_show", f = "feed_download_ad";
            i(e, p, f, r)
          } else if (d.attr("ad-call")) {
            var p = "card_show", f = "feed_call";
            i(e, p, f, r)
          }
          return this
        },
        sendTrackEvent: function (e, n) {
          if (this.track_ids.indexOf(e) >= 0)return this;
          this.track_ids.push(e);
          var r = t("iframe#ad_track");
          return r.length || (t("body").append("<iframe src='' height='0' width='0' id='ad_track' style='position:absolute; top:-10px'/>"), r = t("iframe#ad_track")), r.attr("src", n), console.log("track_url : " + n), this
        },
        scrollUpdate: function () {
          this.scrollChangeDisable || this._pollLogNodes()
        },
        _inView: function (e) {
          if (!this._isVisbile(e))return !1;
          var t = e.getBoundingClientRect(), n = window.innerHeight || document.documentElement.clientHeight;
          return t.top > 0 && t.top <= n || (this.delAdId(e), !1)
        },
        _isVisbile: function (e) {
          if (!e)return !1;
          for (; e && "BODY" != e.tagName && "HTML" != e.tagName;) {
            if ("none" === t(e).css("display"))return !1;
            e = e.parentNode
          }
          return !0
        },
        _pollLogNodes: function () {
          for (var e = this.attribute || "alt_src", t = document.querySelectorAll("span[" + e + "]"), n = 0, r = t.length; n < r; ++n) {
            var a = t[n];
            if (this.initClickEvents(a), a && this._inView(a))return "undefined" != typeof indexFlow && indexFlow.storeFlow(), this.pushAdQueue(a), !1
          }
        },
        initShowEvents: function (e) {
          var n = e.attribute || "alt_src", r = (e.offset || 0, this);
          r.attribute = n, r._pollLogNodes();
          var a = t(window);
          return a.on("load scrollEnd.lazy", function (e) {
            r.scrollChangeDisable || r._pollLogNodes()
          }), a.on("channelChange", function () {
            r.testADFirstFlag = !0
          }), this
        },
        initTaobaoAds: function (e) {
          var n = t(e.selector);
          if (n.length)return n.length > 1 && (n = n.eq(0)), this.askforTaobaoAd(n, this.fillTaobaoAd), this
        },
        askforTaobaoAd: function (e, t) {
          function n(e) {
            var t = a.getElementsByTagName("head")[0] || a.documentElement, n = a.createElement("script");
            return n.src = e, n.async = !0, t.insertBefore(n, t.firstChild), n
          }

          var r = "small", a = document, o = "mm_26632268_4380651_21150073", i = "cb_" + Math.random().toString(36).substring(2), s = "http://simba.m.taobao.com/?name=itemjump&count=1&o=jp&refpid=mm_26632268_4380651_21150073&pid=" + o + "&p4p=" + i, l = {mm_26632268_4380651_21150073: [s, n, "170x170.jpg"]};
          "small" == r && (window.tb_data = [{
            text: "ã€ç²¾å“æŽ¨èã€‘æœ€å—å¥³äººè¿½æ§è¿åŠ¨å¥—è£… å¼•çˆ†è¶…é«˜å›žå¤´çŽ‡ï¼",
            pic: "http://gtms04.alicdn.com/tps/i4/T1hxcNFLFaXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E8%25BF%2590%25E5%258A%25A8%25E5%25A5%2597%25E8%25A3%2585%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘æœ€å—å¥³äººè¿½æ§ä»™å¥³é›ªçººè¡« å¼•çˆ†è¶…é«˜å›žå¤´çŽ‡ï¼",
            pic: "http://gtms03.alicdn.com/tps/i3/T1JEkPFJ0XXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E9%259B%25AA%25E7%25BA%25BA%25E8%25A1%25AB%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘æœ€å—å¥³äººè¿½æ§ä»™å¥³é›ªçººè¡« å¼•çˆ†è¶…é«˜å›žå¤´çŽ‡ï¼",
            pic: "http://gtms02.alicdn.com/tps/i2/T1b2SgFOJjXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E9%259B%25AA%25E7%25BA%25BA%25E8%25A1%25AB%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘æœ€å—å¥³äººè¿½æ§ä»™å¥³é›ªçººè¡« å¼•çˆ†è¶…é«˜å›žå¤´çŽ‡ï¼",
            pic: "http://gtms01.alicdn.com/tps/i1/T1UisNFHpbXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E9%259B%25AA%25E7%25BA%25BA%25E8%25A1%25AB%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘è¡—å¤´ååª›é£Žå¥½æ°”è´¨ä¸å¾—ä¸çˆ± å°½æ˜¾ä¼˜é›…å¤§ç‰ŒèŒƒå„¿",
            pic: "http://gtms04.alicdn.com/tps/i4/T1qtcMFFddXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E9%259B%25AA%25E7%25BA%25BA%25E8%25BF%259E%25E8%25A1%25A3%25E8%25A3%2599%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘è¡—å¤´ååª›é£Žå¥½æ°”è´¨ä¸å¾—ä¸çˆ± å°½æ˜¾ä¼˜é›…å¤§ç‰ŒèŒƒå„¿",
            pic: "http://gtms03.alicdn.com/tps/i3/T1_E3PFHhXXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E9%259B%25AA%25E7%25BA%25BA%25E8%25BF%259E%25E8%25A1%25A3%25E8%25A3%2599%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘æœ€å—å¥³äººè¿½æ§ä»™å¥³é›ªçººè¡« å¼•çˆ†è¶…é«˜å›žå¤´çŽ‡ï¼",
            pic: "http://gtms02.alicdn.com/tps/i2/T1UCsMFKlcXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E9%259B%25AA%25E7%25BA%25BA%25E8%25A1%25AB%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘åˆå¤èˆ’é€‚ç”·éž‹å°±è¦è¿™ä¸ªèŒƒå„¿ æ–°å“ä¿ƒé”€æŠ¢å…ˆè´­",
            pic: "http://gtms01.alicdn.com/tps/i1/T1hXkOFOJaXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E4%25BC%2591%25E9%2597%25B2%25E9%259E%258B%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘é€‚åº¦æ”¶è…°å°½æ˜¾å¤§åº¦å¥³äººé£ŽÂ  é•¿è£™æ—¶å°šæ½®æµæ¥è¢­",
            pic: "http://gtms03.alicdn.com/tps/i3/T1nA.IFJBdXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E6%25B2%2599%25E6%25BB%25A9%25E8%25A3%2599%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘2014æ˜Žåªšå¤è£…çœ‹ä¸åœ ç©¿å‡ºæµªæ¼«ä¸Žä¼˜é›… ç–¯æŠ¢ï¼ ",
            pic: "http://gtms02.alicdn.com/tps/i2/T1WP7NFGXbXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E6%2583%2585%25E4%25BE%25A3%25E8%25A3%2585%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘æœ€å—ç”·å£«è¿½æ§å•†åŠ¡é’±åŒ… å°½æ˜¾é«˜ç«¯å¤§ç‰ŒèŒƒå„¿",
            pic: "http://gtms01.alicdn.com/tps/i1/T1mhMpFTlbXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E9%2592%25B1%25E5%258C%2585%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘ä¸€æ¡è£¤å­å¼•çˆ†è¶…é«˜å›žå¤´çŽ‡ çº·æ‚ä¸­çš„ç®€å•é€‰æ‹©ï¼",
            pic: "http://gtms04.alicdn.com/tps/i4/T14iIPFKJXXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E4%25B8%2583%25E5%2588%2586%25E8%25A3%25A4%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘ä¸€æ¡è£¤å­å¼•çˆ†è¶…é«˜å›žå¤´çŽ‡ çº·æ‚ä¸­çš„ç®€å•é€‰æ‹©ï¼",
            pic: "http://gtms03.alicdn.com/tps/i3/T1mXkNFU4bXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E4%25B8%2583%25E5%2588%2586%25E8%25A3%25A4%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘åˆå¤è¶…ç¾Žå•éž‹çº¦ä¼šè®©ä»–å¿ƒåŠ¨ æ–°å“ä¿ƒé”€æŠ¢å…ˆè´­",
            pic: "http://gtms02.alicdn.com/tps/i2/T1kOsNFUtaXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E5%25A5%25B3%25E9%259E%258B%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘åˆå¤è¶…ç¾Žå•éž‹çº¦ä¼šè®©ä»–å¿ƒåŠ¨ æ–°å“ä¿ƒé”€æŠ¢å…ˆè´­",
            pic: "http://gtms01.alicdn.com/tps/i1/T1g5wNFJJbXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E5%25A5%25B3%25E9%259E%258B%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘2014å¤å­£äº®è‰²å¥³åŒ…è£…ç‚¹ä½ çš„é­…åŠ› æ—¶å°šåˆå®žæƒ ï¼",
            pic: "http://gtms04.alicdn.com/tps/i4/T1tr7NFQFbXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E5%25A5%25B3%25E5%258C%2585%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘2014å¤å­£äº®è‰²å¥³åŒ…è£…ç‚¹ä½ çš„é­…åŠ› æ—¶å°šåˆå®žæƒ ï¼",
            pic: "http://gtms03.alicdn.com/tps/i3/T1zO3LFHNdXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E5%25A5%25B3%25E5%258C%2585%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘2014å¤å­£äº®è‰²Tæ¤è£…ç‚¹ä½ çš„é­…åŠ› æ—¶å°šåˆå®žæƒ ï¼",
            pic: "http://gtms02.alicdn.com/tps/i2/T1XHAPFOtXXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E5%25A5%25B3t%25E6%2581%25A4%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘2014å¤å­£äº®è‰²Tæ¤è£…ç‚¹ä½ çš„é­…åŠ› æ—¶å°šåˆå®žæƒ ï¼",
            pic: "http://gtms01.alicdn.com/tps/i1/T1ZrcOFJpbXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E5%25A5%25B3t%25E6%2581%25A4%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘2014å¤å­£äº®è‰²Tæ¤è£…ç‚¹ä½ çš„é­…åŠ› æ—¶å°šåˆå®žæƒ ï¼",
            pic: "http://gtms04.alicdn.com/tps/i4/T1J6kOFPdaXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E5%25A5%25B3t%25E6%2581%25A4%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘ä¸€æ¡è£¤å­å¼•çˆ†è¶…é«˜å›žå¤´çŽ‡ çº·æ‚ä¸­çš„ç®€å•é€‰æ‹©ï¼",
            pic: "http://gtms03.alicdn.com/tps/i3/T1_hMLFFXdXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E7%2589%259B%25E4%25BB%2594%25E8%25A3%25A4%2B%25E5%25A5%25B3%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘ä¸€æ¡è£¤å­ç©¿å‡ºèˆ’é€‚ä¸Žæ½‡æ´’ çº·æ‚ä¸­çš„ç®€å•é€‰æ‹©ï¼",
            pic: "http://gtms02.alicdn.com/tps/i2/T1_JMQFG4XXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E7%2589%259B%25E4%25BB%2594%25E8%25A3%25A4%2B%25E7%2594%25B7%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘ä¸€æ¡è£¤å­ç©¿å‡ºèˆ’é€‚ä¸Žæ½‡æ´’ çº·æ‚ä¸­çš„ç®€å•é€‰æ‹©ï¼",
            pic: "http://gtms01.alicdn.com/tps/i1/T1S13QFFNXXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E7%2589%259B%25E4%25BB%2594%25E8%25A3%25A4%2B%25E7%2594%25B7%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘æ°”è´¨ç”·äººç©¿è¡£æ­é…æ³•å® è¡¬è¡«å¥½æ°”è´¨ä¸å¾—ä¸çˆ± ",
            pic: "http://gtms04.alicdn.com/tps/i4/T1YdgNFNlbXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E8%25A1%25AC%25E8%25A1%25AB%2B%25E7%2594%25B7%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘æœ€å—ç”·å£«è¿½æ§å•†åŠ¡ä¼‘é—²åŒ… å°½æ˜¾é«˜ç«¯å¤§ç‰ŒèŒƒå„¿",
            pic: "http://gtms03.alicdn.com/tps/i3/T1AlgPFHtXXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E7%2594%25B7%25E5%258C%2585%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘ç™¾æ­ç”·Tæ¤å¼•é¢†ä»Šå¤æ½®æµ çº·æ‚ä¸­çš„ç®€å•é€‰æ‹©ï¼",
            pic: "http://gtms02.alicdn.com/tps/i2/T1MuoNFPXbXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E7%2594%25B7t%25E6%2581%25A4%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘ç™¾æ­ç”·Tæ¤å¼•é¢†ä»Šå¤æ½®æµ çº·æ‚ä¸­çš„ç®€å•é€‰æ‹©ï¼",
            pic: "http://gtms01.alicdn.com/tps/i1/T1Mg7NFNVaXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E7%2594%25B7t%25E6%2581%25A4%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘ç™¾æ­ç”·Tæ¤å¼•é¢†ä»Šå¤æ½®æµ çº·æ‚ä¸­çš„ç®€å•é€‰æ‹©ï¼",
            pic: "http://gtms04.alicdn.com/tps/i4/T1o1QQFF8XXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E7%2594%25B7t%25E6%2581%25A4%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘åˆå¤èˆ’é€‚ç”·éž‹å°±è¦è¿™ä¸ªèŒƒå„¿ æ–°å“ä¿ƒé”€æŠ¢å…ˆè´­",
            pic: "http://gtms03.alicdn.com/tps/i3/T1jqwNFFdcXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E5%2587%2589%25E9%259E%258B%2B%25E7%2594%25B7%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘åˆå¤è¶…ç¾Žå‡‰éž‹çº¦ä¼šè®©ä»–å¿ƒåŠ¨ æ–°å“ä¿ƒé”€æŠ¢å…ˆè´­",
            pic: "http://gtms02.alicdn.com/tps/i2/T1LBoLFNpdXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E5%2587%2589%25E9%259E%258B%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘åˆå¤è¶…ç¾Žå‡‰éž‹çº¦ä¼šè®©ä»–å¿ƒåŠ¨ æ–°å“ä¿ƒé”€æŠ¢å…ˆè´­",
            pic: "http://gtms01.alicdn.com/tps/i1/T1R1oMFRBbXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E5%2587%2589%25E9%259E%258B%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘åªéœ€è¿žè¡£è£™å¼•çˆ†è¶…é«˜å›žå¤´çŽ‡ æ—¶å°šæ­é…æŽ¨èï¼",
            pic: "http://gtms04.alicdn.com/tps/i4/T10A3NFTBaXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E8%25BF%259E%25E8%25A1%25A3%25E8%25A3%2599%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘åªéœ€è¿žè¡£è£™å¼•çˆ†è¶…é«˜å›žå¤´çŽ‡ æ—¶å°šæ­é…æŽ¨èï¼",
            pic: "http://gtms03.alicdn.com/tps/i3/T1QPIMFL4bXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E8%25BF%259E%25E8%25A1%25A3%25E8%25A3%2599%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘åªéœ€è¿žè¡£è£™å¼•çˆ†è¶…é«˜å›žå¤´çŽ‡ æ—¶å°šæ­é…æŽ¨èï¼",
            pic: "http://gtms02.alicdn.com/tps/i2/T18EELFFpdXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E8%25BF%259E%25E8%25A1%25A3%25E8%25A3%2599%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘æ°”è´¨å¥³äººç©¿è¡£æ­é…æ³•å® å¥½æ°”è´¨ä¸å¾—ä¸çˆ± ",
            pic: "http://gtms01.alicdn.com/tps/i1/T1jGwQFM8XXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E9%2598%25B2%25E6%2599%2592%25E8%25A1%25A3%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘æ°”è´¨å¥³äººç©¿è¡£æ­é…æ³•å® å¥½æ°”è´¨ä¸å¾—ä¸çˆ± ",
            pic: "http://gtms04.alicdn.com/tps/i4/T1HfMPFHBXXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E9%2598%25B2%25E6%2599%2592%25E8%25A1%25A3%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘åˆå¤è¶…ç¾Žå•éž‹çº¦ä¼šè®©ä»–å¿ƒåŠ¨ æ–°å“ä¿ƒé”€æŠ¢å…ˆè´­",
            pic: "http://gtms03.alicdn.com/tps/i3/T1TCQOFH4aXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E5%258D%2595%25E9%259E%258B%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘é€‚åº¦æ”¶è…°å°½æ˜¾ä¼˜é›…å¥³äººé£ŽÂ  é•¿è£™æ—¶å°šæ½®æµæ¥è¢­",
            pic: "http://gtms02.alicdn.com/tps/i2/T1Rl.FFN8aXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E5%258D%258A%25E8%25BA%25AB%25E8%25A3%2599%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }, {
            text: "ã€ç²¾å“æŽ¨èã€‘é€‚åº¦æ”¶è…°å°½æ˜¾ä¼˜é›…å¥³äººé£ŽÂ  é•¿è£™æ—¶å°šæ½®æµæ¥è¢­",
            pic: "http://gtms01.alicdn.com/tps/i1/T1R3.NFOdaXXcJlSn8-172-120.jpg",
            link: "http://redirect.simba.taobao.com/rd?w=lark&f=http%3A%2F%2Fre.m.taobao.com%2Ftssearch%3Fkeyword%3D%25E5%258D%258A%25E8%25BA%25AB%25E8%25A3%2599%26refpid%3Dmm_26632268_4380651_21150073&p=mm_26632268_4380651_21150073&k=21db83549fb6dd44"
          }][39 * Math.random() | 0]), window.tb_data.type = r, window[i] = function (n) {
            try {
              var a = n[o][0].ITEM_LIST;
              window.tb_data = {type: r, text: a.TITLE, pic: a.IMGURL.replace(/sum\.jpg$/g, l[o][2]), link: a.LINKURL}
            } catch (e) {
            }
            t(e, window.tb_data)
          }, l[o][1](l[o][0])
        },
        fillTaobaoAd: function (e, t) {
          if (console.log("taobaoAd:", t), "small" == t.type) {
            e.find("h3.dotdot").wrap('<div class="desc"></div>');
            var n = e.find(".list_img_holder_large");
            n.removeClass("list_img_holder_large").removeClass("list_img_holder_large_fix").addClass("list_img_holder"), e.addClass("middle_mode").find(".list_img_holder img").attr("src", t.pic), e.find(".desc").append(e.find(".item_info")), e.find(".list_img_holder_large").remove()
          }
          "large" == t.type && (e.find(".list_img_holder_large img").attr("src", t.pic), e.find(".list_img_holder").remove()), e.find("h3").text(t.text), e.find("a.article_link").attr("href", t.link), e.removeClass("taobaoAd"), indexFlow.storeFlow(), _taq.push(["trackevent", "list", "send", "taobao_ad", e.get(0)]);
          var r = new Image, a = (new Date).getTime();
          window.tb_feedback = r, r.src = "http://gm.mmstat.com/wapebs.9.1?req=http%3A%2F%2Fm.toutiao.com%2F&refpid=mm_26632268_4380651_21150073&pvid=" + a
        }
      });
      e.exports = l
    }).call(t, n(5915487851987839))
  },
  8196992979338488: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    function a() {
    }

    function o(e) {
      !function (e, t, n, r, a, o) {
        e.ToutiaoAnalyticsObject = n, e[n] = e[n] || function () {
            (e[n].q = e[n].q || []).push(arguments)
          }, e[n].t = 1 * new Date, e[n].s = a, e[n].i = o;
        var i = t.createElement("script");
        if (i.async = 1, i.src = r, t.getElementsByTagName("head")[0].appendChild(i), o) {
          var s = document.createElement("iframe");
          s.style.display = "none", s.id = "bytedance-ba-cid-iframe", s.addEventListener("load", function () {
            this.loaded = !0
          }, !1), s.src = o, document.getElementsByTagName("body")[0].appendChild(s)
        }
      }(window, document, "ba", "//s3.bytecdn.cn/ta/resource/v0/analytics.js?v=0.1.15", "", "//s3.bytecdn.cn/ta/resource/v0/crossDomain.html?v=0.1.15"), ba("create", e, {crossDomain: !0}), ba("send", "pageview")
    }

    function i(e, t, n, r, a) {
      console.log("ba:" + e + "," + t + "," + n), ba("send", "event", {eventCategory: e, eventAction: t, eventLabel: n})
    }

    function s() {
      var e = u.default.browser.weixin ? "941fa8db85144e" : "2016b6cb651225";
      o(e), window.baevent = i
    }

    var l = n(0x48bee20605e56), c = (r(l), n(755734527867252)), u = r(c), d = n(0xe85a386169c4b);
    r(d);
    window.baevent = a, window.baeventTest = a, window.resendBA = a, e.exports = {init: s}
  },
  5810096005791206: function (e, t) {
    "use strict";
    var n = function () {
      var e = function (e, t, n, r, a, o, i, s) {
        "string" == typeof t && (t = parseFloat(t)), "string" == typeof n && (n = parseFloat(n)), "string" == typeof r && (r = parseFloat(r)), "string" == typeof a && (a = parseFloat(a)), "string" == typeof o && (o = parseFloat(o)), "string" == typeof i && (i = parseFloat(i));
        2 * Math.PI;
        switch (e.save(), e.beginPath(), e.moveTo(t, n), e.lineTo(r, a), e.lineTo(o, i), s) {
          case 0:
            var l = Math.sqrt((o - t) * (o - t) + (i - n) * (i - n));
            e.arcTo(r, a, t, n, .55 * l), e.fill();
            break;
          case 1:
            e.beginPath(), e.moveTo(t, n), e.lineTo(r, a), e.lineTo(o, i), e.lineTo(t, n), e.fill();
            break;
          case 2:
            e.stroke();
            break;
          case 3:
            var c = (t + r + o) / 3, u = (n + a + i) / 3;
            e.quadraticCurveTo(c, u, t, n), e.fill();
            break;
          case 4:
            var d, p, f, h, l, m = 5;
            if (o == t)l = i - n, d = (r + t) / 2, f = (r + t) / 2, p = a + l / m, h = a - l / m; else {
              l = Math.sqrt((o - t) * (o - t) + (i - n) * (i - n));
              var v = (t + o) / 2, g = (n + i) / 2, _ = (v + r) / 2, b = (g + a) / 2, y = (i - n) / (o - t), w = l / (2 * Math.sqrt(y * y + 1)) / m, x = y * w;
              d = _ - w, p = b - x, f = _ + w, h = b + x
            }
            e.bezierCurveTo(d, p, f, h, t, n), e.fill()
        }
        e.restore()
      }, t = function (e, t, r, a, o, i, s, l, c, u, d, p, f) {
        l = "undefined" != typeof l ? l : 3, c = "undefined" != typeof c ? c : 1, u = "undefined" != typeof u ? u : Math.PI / 8, d = "undefined" != typeof d ? d : 10, p = "undefined" != typeof p ? p : 1, e.save(), e.lineWidth = p, e.beginPath(), e.arc(t, r, a, o, i, s), e.stroke();
        var h, m, v, g, _;
        if (1 & c && (h = Math.cos(o) * a + t, m = Math.sin(o) * a + r, v = Math.atan2(t - h, m - r), s ? (g = h + 10 * Math.cos(v), _ = m + 10 * Math.sin(v)) : (g = h - 10 * Math.cos(v), _ = m - 10 * Math.sin(v)), n(e, h, m, g, _, l, 2, u, d)), 2 & c) {
          h = Math.cos(i) * a + t, m = Math.sin(i) * a + r, v = Math.atan2(t - h, m - r), s ? (g = h - 10 * Math.cos(v), _ = m - 10 * Math.sin(v)) : (g = h + 10 * Math.cos(v), _ = m + 10 * Math.sin(v)), n(e, h - f * Math.sin(i), m + f * Math.cos(i), g - f * Math.sin(i), _ + f * Math.cos(i), l, 2, u, d)
        }
        e.restore()
      }, n = function (t, n, r, a, o, i, s, l, c) {
        "string" == typeof n && (n = parseFloat(n)), "string" == typeof r && (r = parseFloat(r)), "string" == typeof a && (a = parseFloat(a)), "string" == typeof o && (o = parseFloat(o)), i = "undefined" != typeof i ? i : 3, s = "undefined" != typeof s ? s : 1, l = "undefined" != typeof l ? l : Math.PI / 8, c = "undefined" != typeof c ? c : 10;
        var u, d, p, f, h = "function" != typeof i ? e : i, m = Math.sqrt((a - n) * (a - n) + (o - r) * (o - r)), v = (m - c / 3) / m;
        1 & s ? (u = Math.round(n + (a - n) * v), d = Math.round(r + (o - r) * v)) : (u = a, d = o), 2 & s ? (p = n + (a - n) * (1 - v), f = r + (o - r) * (1 - v)) : (p = n, f = r), t.beginPath(), t.moveTo(p, f), t.lineTo(u, d), t.stroke();
        var g = Math.atan2(o - r, a - n), _ = Math.abs(c / Math.cos(l));
        if (1 & s) {
          var b = g + Math.PI + l, y = a + Math.cos(b) * _, w = o + Math.sin(b) * _, x = g + Math.PI - l, k = a + Math.cos(x) * _, E = o + Math.sin(x) * _;
          h(t, y, w, a, o, k, E, i)
        }
        if (2 & s) {
          var b = g + l, y = n + Math.cos(b) * _, w = r + Math.sin(b) * _, x = g - l, k = n + Math.cos(x) * _, E = r + Math.sin(x) * _;
          h(t, y, w, n, r, k, E, i)
        }
      };
      return {drawArrow: n, drawArcedArrow: t}
    }();
    e.exports = n
  },
  0x6404cff983a7a: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    function a(e, t, n, r, a) {
      window.gaevent(e, t, n, r, a), window.baevent(e, t, n, r, a)
    }

    function o() {
      window.resendGA(), window.resendBA()
    }

    function i() {
      c.default.init(), d.default.init(), window.maevent = a, window.resendMA = o
    }

    function s() {
      i(), h.default.init()
    }

    var l = n(5992610775796748), c = r(l), u = n(8196992979338488), d = r(u), p = n(5359030257400059), f = (r(p), n(0xdfa3b54159663)), h = r(f), m = n(755734527867252);
    r(m);
    e.exports = s
  },
  5980400199274178: function (e, t) {
    "use strict";
    e.exports = {
      nativeProxyServer: "http://[::1]:8192/",
      installNumber: "5.3",
      NETWORKTIPS: {
        RETRY: "ç½‘ç»œå¤±è´¥,ç‚¹å‡»é‡è¯•",
        COMMENTRETRY: "è¯„è®ºåŠ è½½å¤±è´¥,ç‚¹å‡»é‡è¯•",
        NETWORKERROR: "ç½‘ç»œå¤±è´¥",
        LOADING: "åŠ è½½ä¸­...",
        WAITE: "åŠ è½½ä¸­,è¯·ç¨åŽ",
        RECOMMENDING: "æ­£åœ¨æŽ¨è...",
        RECOMMENDCOUNT: "ä¸ºæ‚¨æŽ¨èäº†#n#ç¯‡æ–‡ç« ",
        RECOMMENDEMPTY: "æš‚æ— æ›´æ–°,è¯·ä¼‘æ¯ä¸€ä¼šå„¿",
        RECOMMENDDISLIKE: "å°†å‡å°‘ç±»ä¼¼æŽ¨è",
        HASMORE: "æŸ¥çœ‹æ›´å¤š",
        SENDING: "æ­£åœ¨æäº¤",
        SENDINGERROR: "å‘è¡¨å¤±è´¥",
        SENDINGSUCCESS: "å‘è¡¨æˆåŠŸ",
        GEOLOCATIONERROR: "èŽ·å–åœ°ç†ä½ç½®å¤±è´¥",
        NOSEARCHDATA: "æš‚æ— æœç´¢ç»“æžœ",
        SERVERERROR: "æœåŠ¡å¼‚å¸¸,è¯·ç¨åŽé‡è¯•",
        LOCALSTORAGEERROE: "è¯·åœ¨ è®¾ç½®->Safari->é˜»æ­¢Cookie ä¸­å‹¾é€‰ 'æ¥è‡ªç¬¬ä¸‰æ–¹å’Œå¹¿å‘Šå•†',æˆ–'æ°¸ä¸',ä»¥å…å½±å“å¤´æ¡ç½‘æ­£å¸¸ä½¿ç”¨"
      }
    }
  },
  5992610775796748: function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : {default: e}
      }

      function a() {
      }

      function o() {
        return !window.isListPage && E.default.browser.weixin
      }

      function i() {
        !function (e, t, n, r, a, o, i) {
          e.GoogleAnalyticsObject = a, e[a] = e[a] || function () {
              (e[a].q = e[a].q || []).push(arguments)
            }, e[a].l = 1 * new Date, o = t.createElement(n), i = t.getElementsByTagName(n)[0], o.async = 1, o.src = r, i.parentNode.insertBefore(o, i)
        }(window, document, "script", "//www.google-analytics.com/analytics.js", "ga")
      }

      function s() {
        ga("create", "UA-28423340-36", "auto", "testTracker", {siteSpeedSampleRate: 100}), window.gaeventTest = function (e, t, n, r, a) {
          console.log("gaTest:" + e + "," + t + "," + n), "event" != e && ga("testTracker.send", "event", e, t, n, "undefined" != typeof r ? r : 1, a)
        }
      }

      function l() {
        if (!E.default.browser.weixin)return !1;
        var e, n;
        try {
          e = sessionStorage.getItem("weixinlist_query"), n = sessionStorage.getItem("weixinlist_count")
        } catch (e) {
          console.warn(e)
        }
        if (n && "1" === n) {
          var r = A.default.request(null, !0), a = location.hash, o = location.host, i = r, s = location.pathname + "?" + e;
          history.replaceState(null, null, s);
          var l = t.request(null, !0);
          i = t.extend({}, r, l, {weixin_list: 1});
          var c = (0, x.default)(i).map(function (e) {
            return e + "=" + i[e]
          }).join("&"), u = "//" + o + location.pathname + "?" + c + a;
          history.replaceState(null, null, u)
        }
      }

      function c() {
        var e = 17, t = 2;
        o() && (e = 16, t = 5), E.default.browser.weixin && (e = 41, t = 5);
        var n = "UA-28423340-" + e, r = "10";
        (navigator.userAgent.indexOf("ArticleStreamSdk") > -1 || "open" == A.default.request("utm_campaign")) && (n = "UA-28423340-11", r = "100"), ga("create", n, "auto", {siteSpeedSampleRate: 100})
      }

      function u() {
        var e = location.pathname;
        e && e.indexOf("/sem/") != -1 ? ga("send", "pageview", {page: e}) : ga("send", "pageview", location.pathname + location.search + location.hash)
      }

      function d() {
        var e = A.default.request("wxshare_count");
        !isNaN(e) && e > 0 && ga("set", "dimension1", e);
        var t = A.default.request("wxshare_banner");
        !isNaN(t) && t > 0 && ga("set", "dimension10", t);
        var n = A.default.request("readmore");
        !isNaN(n) && n > 0 && ga("set", "dimension2", n);
        var r = A.default.hash("channel") || A.default.request("channel") || "__all__";
        r && ga("set", "dimension4", r);
        var a = Number(window.hasVideo);
        if (0 !== a && 1 !== a || ga("set", "dimension5", a), o()) {
          var i = A.default.request("app");
          i && ga("set", "dimension6", i);
          var s = A.default.request("utm_medium");
          s && ga("set", "dimension7", s);
          var l = A.default.request("isappinstalled");
          !isNaN(l) && l >= 0 && ga("set", "dimension8", l - 0 ? 1 : 0)
        } else ga(function (e) {
          var t = e.get("clientId");
          ga("set", "dimension7", t)
        }), ga("set", "dimension6", A.default.getBrowserName()), ga("set", "dimension8", navigator.userAgent), ga("set", "dimension9", window.city || "");
        var c = location.pathname;
        c && c.indexOf("/sem/") != -1 && A.default.request("atdl") && ga("set", "dimension5", A.default.request("atdl"))
      }

      function p() {
        var e = 2;
        o() && (e = 5);
        var t = A.default.cookie("tt_webid"), n = null !== t ? parseInt(t) % 100 : void 0, r = !isNaN(n) && n >= 1 && n <= e;
        return r
      }

      function f() {
        var e = new Image;
        e.src = location.protocol + "//" + location.hostname + "/__utm.gif?utmp=" + encodeURIComponent(location.href), e.onload = function (e) {
          t(this).remove()
        }, t(function () {
          t("body").append(e)
        });
        var n = 10;
        window.onerror = function (e, t, r) {
          var a = e, o = t, i = r;
          "object" === ("undefined" == typeof e ? "undefined" : (0, y.default)(e)) && (a = e.message, o = e.fileName, i = e.lineNumber);
          var s = "[" + o + " (" + i + ")]" + a;
          Math.floor(100 * Math.random()) < n && ga("send", "exception", {exDescription: s, exFatal: !1})
        }
      }

      function h(e, t, n, r, a) {
        console.log("ga:" + e + "," + t + "," + n), ga("send", "event", e, t, n, "undefined" != typeof r ? r : 1, a)
      }

      function m(e) {
        ga("send", "pageview", location.pathname + location.search + location.hash), console.log("ga:pageview", location.pathname + location.search + location.hash)
      }

      function v() {
        o() || !function () {
          var e = document.createElement("script");
          e.src = "//hm.baidu.com/hm.js?23e756494636a870d09e32c92e64fdd6";
          var t = document.getElementsByTagName("script")[0];
          t.parentNode.insertBefore(e, t)
        }()
      }

      function g() {
        _taq.push(["create", "TT-growth-01", "m.toutiao.com"]), _taq.push(["trackinit", "mobile", "wap", 1]), function () {
          var e = document.createElement("script");
          e.type = "text/javascript", e.async = !0, e.src = document.location.protocol + "//s3.pstatp.com/adstatic/resource/landing_log/dist/1.0.13/static/js/toutiao-analytics.js";
          var t = document.getElementsByTagName("script")[0];
          t.parentNode.insertBefore(e, t)
        }()
      }

      function _() {
        i(), s(), l(), g(), p() && (c(), d(), u(), v(), f(), window.gaevent = h, window.resendGA = m, window.gaqpush = gaqpush)
      }

      var b = n(7724818440676399), y = r(b), w = n(8327643607632330), x = r(w), k = n(755734527867252), E = r(k), T = n(0xe85a386169c4b), A = r(T);
      window.gaevent = a, window.gaqpush = a, window.resendGA = a, window.gaeventTest = a, window._taq = window._taq || [], e.exports = {init: _}
    }).call(t, n(5915487851987839))
  },
  5247693571505564: function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : {default: e}
      }

      function a(e) {
        setTimeout(function () {
          location.href = e
        }, 100)
      }

      function o(e) {
        var t = e.downloadLink, n = {
          openurl: e.openUrl,
          postdata: [e.postData || d.default.getAppTrackData()]
        }, r = m.default.appendQuery(t, "append=" + encodeURIComponent((0, c.default)(n))), a = document.createElement("a");
        a.href = t;
        var o = g.default.parse(a.search.slice(1));
        return o.append && (r = t), r
      }

      function i(e) {
        setTimeout(function () {
          t("body").append("<iframe id='app_dl_iframe' src='" + e.yybHref + "' style='display:none'></iframe>"), setTimeout(function () {
            t("iframe#app_dl_iframe").remove(), location.href = e.fallback
          }, 1500)
        }, 100)
      }

      function s(e) {
        var t = e.downloadLink;
        if (f.default.os.android)if (d.default.isWeixin()) {
          var n = encodeURIComponent(d.default.getNativeLink(e));
          a(m.default.appendQuery(t, "android_scheme=" + n))
        } else i({yybHref: e.yybLink, fallback: o(e)}); else a(t)
      }

      var l = n(0xeb9e744742586), c = r(l), u = n(5359030257400059), d = r(u), p = n(755734527867252), f = r(p), h = n(0xe85a386169c4b), m = r(h), v = n(0xa7c3802d76b7a), g = r(v);
      e.exports = {gotoAppDownload: s}
    }).call(t, n(5915487851987839))
  },
  0xba05d71f555a0: function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : {default: e}
      }

      function a(e) {
        var n = "/log/action/";
        e.tag = e.tag || "headline";
        var r = {
          label: e.label,
          value: e.value,
          tag: e.tag || "go_detail",
          extra_data: (0, i.default)(e.extra_data || {})
        };
        t.post(n, r)
      }

      var o = n(0xeb9e744742586), i = r(o);
      e.exports = {actionLog: a}
    }).call(t, n(5915487851987839))
  },
  0x506d80dff7d28: function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(0xdfa3b54159663), a = n(0xe68aec5280637), o = n(5810096005791206), i = function (e, t) {
        function n(e) {
          return e * (Math.PI / 180)
        }

        function a(e, t) {
          var n = [0, 0], r = [n[0], n[1] + e], a = [n[0] + e / 2, n[1] + e / 2], o = [n[0], n[1] + e / 2], i = t, s = [];
          s.push("M" + n.join(",")), s.push("L" + r.join(",")), s.push("L" + a.join(",")), s.push("L" + n.join(",")), i.find("path").attr("d", s.join(" ")), i[0].setAttribute("refX", o[0]), i[0].setAttribute("refY", o[1])
        }

        function o(t) {
          t = e.extend({
            x: 0,
            y: 0,
            radius: 0,
            margin: 0,
            startDegree: 0,
            endDegree: 0,
            arrowSize: 0,
            arrowObj: e("#markerArrow"),
            pathObj: e("#svgPath"),
            color: "#ff0000"
          }, t);
          var o = t.radius, i = t.margin, s = o + i + o * Math.sin(n(t.endDegree)), l = o + i - o * Math.cos(n(t.endDegree)), c = o + i + o * Math.sin(n(t.startDegree)), u = o + i - o * Math.cos(n(t.startDegree));
          c = r.px2px(c), u = r.px2px(u), o = r.px2px(o), s = r.px2px(s), l = r.px2px(l);
          var d = [["M" + c, u].join(",")];
          d.push([["A" + o, o].join(","), "0", [t.endDegree - t.startDegree > 180 ? "1" : "0", "1"].join(","), [s, l].join(",")].join(" "));
          var p = d.join(" ");
          e(t.pathObj).attr("d", p).css("stroke", t.color), e(t.arrowObj).find("path").css("fill", t.color), a(t.arrowSize, e(t.arrowObj))
        }

        return {drawArc: o}
      }(window.jQuery || window.Zepto, window), s = function (e, t) {
        var n = t.document, s = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function (e) {
            window.setTimeout(e, 1e3 / 60)
          }, l = {
          con: "",
          minDistance: 4
        }, c = ["onPullStart", "onMove", "onRelease", "needRefresh", "doRefresh", "noop"], u = 30, d = 10, p = 300, f = function () {
          return 85 * ((r || {dpr: 1}).dpr || 1)
        }, h = 10, m = function (e) {
          var t = 5 * e / 12;
          return t
        }, v = function () {
          var e = document.createElement("canvas"), t = !(!e.getContext || !e.getContext("2d")), n = navigator.userAgent.toLowerCase(), r = (n.match(/chrome\/([\d.]+)/), n.match(/version\/([\d.]+).*safari/)), a = (n.match(/firefox\/([\d.]+)/), n.match(/mx[\d.]+/)), o = !1;
          return a && r && (o = !0), !t && o
        }(), g = function () {
          return !0
        }(), _ = function (t) {
          "string" == typeof t.con && (t.con = n.querySelector(t.con));
          var r = {}, o = this;
          e.each(c, function (e, t) {
            r[t] = o["_" + t].bind(o)
          }), this.options = e.extend({}, l, r, t), this.shouldRefresh = !1, this.isRefreshing = !1, this.$pullTip = null, r.onPullEnd = this._onPullEnd.bind(this), t = e.extend({}, r, t), this.touchPull = a.init(t), this.refreshTimes = 0
        };
        _.prototype = {
          _onPullStart: function (e, t) {
            this.isRefreshing || (e.preventDefault(), this.addPullTip(this.options.con))
          }, _onMove: function (e, t) {
            if (!this.isRefreshing) {
              e.preventDefault();
              var n = m(t);
              n = this.isRefreshing ? n + this.minRefreshDistance : n, this.movePullTip(n), this.changePullTip(n, this.options.con)
            }
          }, _onPullEnd: function (e, n, r) {
            if (!this.isRefreshing) {
              var a = this;
              this.options.needRefresh(n), this.options.onRelease().then(function () {
                a.options.needRefresh() ? (t._vis_opt_queue = t._vis_opt_queue || [], t._vis_opt_queue.push(function () {
                  _vis_opt_goal_conversion(13359)
                }), a.isRefreshing = !0, a.refreshTimes += 1, a.options.doRefresh().always(function () {
                  a.reset()
                })) : (a.reset(), a.options.noop())
              })
            }
          }, transitionDefer: null, onTransitionEnd: function () {
            var e = this;
            e.shouldRefresh ? e.canvasObj.startAuto() : e.reset(), setTimeout(function () {
              e.transitionDefer.resolve()
            }, !1)
          }, _onRelease: function () {
            if (this.transitionDefer = e.Deferred(), this.pullTipExist()) {
              var t = this.$pullTip[0];
              t.addEventListener("webkitTransitionEnd", this.onTransitionEnd.bind(this), !1);
              var n = this.shouldRefresh ? this.minRefreshDistance : 0, r = !0;
              this.movePullTip(n, "all " + p + "ms linear", r)
            } else this.transitionDefer.resolve();
            return this.transitionDefer
          }, _doRefresh: function () {
            var t = e.Deferred();
            return t.resolve(), t
          }, _noop: function () {
          }, _needRefresh: function (e) {
            return e = m(e), !this.shouldRefresh && e >= this.minRefreshDistance && (this.shouldRefresh = !0), this.shouldRefresh
          }, pullTipExist: function () {
            return this.$pullTip && this.$pullTip[0]
          }, reset: function () {
            var e = this.isRefreshing;
            this.isRefreshing = !1, this.shouldRefresh = !1, this.removePullTip(e)
          }, canvasObj: function () {
            function t() {
              var e = (B + 1) % P.length;
              return B = e, e
            }

            function n(e) {
              return 360 + e - W
            }

            function r() {
              T || E.clearRect(0, 0, 2 * A, 2 * F)
            }

            function a(e) {
              if (!v) {
                var t = e.start, n = e.end, a = e.lineWidth, o = e.color, i = e.counterClockwise, s = e.co, l = e.clearRect;
                l && r(), E.save(), E.globalCompositeOperation = s, E.beginPath(), E.arc(A, F, O, y(t), y(n), i), E.lineWidth = a, E.strokeStyle = o, E.stroke(), E.restore()
              }
            }

            function l() {
              if (!v) {
                var e = X.speed, r = X.startAngle, o = V, i = X.color, s = X.lineWidth, l = X.counterClockwise, c = X.globalCompositeOperation, u = $ || +new Date;
                o = +new Date, e = 360 / N * (o - u), $ = o, V += e, o = Math.min(G, V);
                var d = "draw" === U;
                if (!T && (a({
                    start: r,
                    end: o,
                    color: i,
                    lineWidth: s,
                    counterClockwise: l,
                    co: c,
                    clearRect: d
                  }), V >= G))if (E.closePath(), X = "erase" !== U ? q : I, U = "erase" !== U ? "erase" : "draw", "draw" === U) {
                  R = X.color;
                  var p = t(R);
                  X.color = P[p], X.startAngle = (X.startAngle - W) % 360, V = X.startAngle, G = n(V)
                } else V = X.startAngle = I.startAngle
              }
            }

            function c(e) {
              if (!v) {
                var t = I.speed, n = I.startAngle, r = I.startAngle, a = P[0];
                if (!isNaN(e)) {
                  e = Math.min(x.minRefreshDistance - u, e);
                  var o = e / (x.minRefreshDistance - u), i = (G - h) * o - I.startAngle;
                  t = i
                }
                r += t, H = r, f({start: n, end: r, color: a, distance: e})
              }
            }

            function d() {
              var t = x.minRefreshDistance - u, n = t / N * 1.3, r = P[0], a = t, o = +new Date, i = e.Deferred(), l = function e() {
                if (a >= 0) {
                  var t = +new Date;
                  a -= n * (t - o), o = t;
                  var l = a / (x.minRefreshDistance - u), c = (G - h) * l - I.startAngle, d = H - c;
                  d = Math.min(d, H), f({start: d, end: H, color: r, distance: a}), s(e)
                } else i.resolve()
              };
              return s(l), i
            }

            function f(t) {
              var n = t.distance, a = T ? 10 : 25, s = C, l = n / (x.minRefreshDistance - u);
              isNaN(n) || (a *= l, s = C * l), r(), T ? i.drawArc({
                x: A,
                y: F,
                radius: O,
                margin: L,
                startDegree: t.start,
                endDegree: t.end,
                arrowSize: a,
                arrowObj: e(k).find("#markerArrow"),
                pathObj: e(k).find("#svgPath"),
                color: t.color
              }) : (E.strokeStyle = t.color, E.fillStyle = t.color, o.drawArcedArrow(E, A, F, O, y(t.start), y(t.end), !1, 1, 2, y(45), a, C, s))
            }

            function m(e) {
              var t = 0;
              if (e) {
                e = e.replace("matrix(", "").replace(")", ""), e = e.replace(/\s+/gi, "");
                var n = e.split(",");
                t = n[5] || 0
              }
              return t
            }

            function g() {
              var e = m(x.$pullTip.css("transform"));
              if (!(e < u)) {
                var t = p, n = e / t, r = e, a = +new Date, o = function e() {
                  if (r > u && x.$pullTip) {
                    var t = +new Date, o = n * (t - a);
                    r -= o, b(r - u), c(r - u), _(r - u), a = t, s(e)
                  }
                };
                s(o)
              }
            }

            function _(t) {
              var n = 1 * t / (x.minRefreshDistance - u);
              e(k).css("opacity", n)
            }

            function b(e, t) {
              var n = e;
              t || (n = Math.max(0, (e - u) / x.minRefreshDistance * 360)), k.style.webkitTransition = "none", k.style.webkitTransform = "rotate(" + n + "deg)"
            }

            function y(e) {
              return e * (Math.PI / 180)
            }

            function w(e) {
              clearTimeout(z), e = e || 8e3, z = setTimeout(function () {
                x.reset()
              }, e)
            }

            var x = null, k = null, E = null, T = !1, A = 100, F = 100, O = 50, L = 0, C = 15, S = !1, D = 5, M = 0, j = 1500, N = 1e3, P = ["green", "red", "blue", "#f3b000"], R = P[0], B = 1, I = {
              startAngle: M,
              speed: D,
              color: P[0],
              counterClockwise: !1,
              globalCompositeOperation: "source-out",
              lineWidth: C
            }, q = {
              startAngle: M,
              speed: D,
              color: "white",
              counterClockwise: !1,
              globalCompositeOperation: "destination-out",
              lineWidth: C + 40
            }, V = M, H = M, X = I, U = "draw", W = 50, G = 0, $ = 0, z = -1;
            return {
              init: function (e, t) {
                this.reset(), $ = 0, S = !1, k = e.find("#load-tip-svg")[0] || e.find("#load-tip-canvas")[0], E = k.getContext ? k.getContext("2d") : k, T = !k.getContext, H = V = M, I.startAngle = q.startAngle = M, G = n(V), B = 1, I.color = P[B], U = "draw", X = I, x = t, T ? (L = 9, A = F = O = (40 - 2 * L) / 2) : (A = F = 100, L = 0, O = 50)
              }, reset: function () {
                k = null, E = null
              }, drawArrowedArcByDis: function (e) {
                c(e)
              }, drawArc: function (e) {
                v ? console.log("not support") : l(e)
              }, clearCurrent: function () {
                v ? console.log("not support") : g()
              }, rotate: b, changeOpacity: _, autoRotate: function () {
                var e = k.style.webkitTransform;
                e = e.replace("rotate(", "").replace("deg", "").replace(")", "");
                var t = parseFloat(e), n = 360 / j, r = this, a = +new Date, o = function e() {
                  if (S) {
                    var o = +new Date, i = t + n * (o - a);
                    a = o, r.rotate(i, !0), t = i, s(e)
                  }
                };
                s(o)
              }, autoDraw: function () {
                if (!v) {
                  var t = function t() {
                    S && (T ? (S = !1, e(E).attr("class", "spinner")) : (l(), s(t)))
                  }, n = d();
                  n.done(function () {
                    s(t)
                  })
                }
              }, startAuto: function () {
                S = !0, x.touchPull.detachEvent(), this.autoDraw(), this.autoRotate(), w()
              }, stopAuto: function () {
                S = !1, x.touchPull.initEvent(), clearTimeout(z)
              }
            }
          }(), initCanvas: function () {
            this.canvasObj.init(this.$pullTip, this)
          }, addPullTip: function (t) {
            this.removePullTip(), t = this.options.con;
            var n = this.$pullTip;
            if (!n) {
              var a = [];
              if (a.push("<div class='list_top'>"), a.push("<div class='list_top_con v2'>"), g)a.push("<canvas \t                            id='load-tip-canvas' \t                            width='200' \t                            height='200' \t                            class='" + (v ? "not-support" : "") + "'></canvas>"); else {
                var o = r.px2px(5), i = r.px2px(20), s = r.px2px(11), l = r.px2px(10), c = r.px2px(70), u = r.px2px(3.5), p = ["M0,0", "L0," + l, "L" + o + "," + o, "L0,0"].join(" ");
                a.push('<svg id="load-tip-svg" class="">\t                                <marker id="markerArrow" markerWidth="' + l + '" markerHeight="' + l + '" refX="0" refY="' + o + '"\t                                   orient="auto" markerUnits="userSpaceOnUse">\t                                    <path d="' + p + '" style="fill: #660000;" />\t                                </marker>\t                                <path stroke-width="' + u + '" stroke-linecap="round" id="svgPath" marker-end="url(#markerArrow)" d="M125,25 A100,100 0 0,1 125,25"\t                                      style="stroke:#660000; fill:none;"/>    \t                                <circle style="stroke-dasharray:' + c + ';" id="svgCircle" class="path" fill="none" stroke-width="' + u + '" stroke-linecap="round" cx="' + i + '" cy="' + i + '" r="' + s + '"></circle> \t                            </svg>')
              }
              a.push("</div></div>"), this.$pullTip = e(a.join("")).insertAfter("body"), n = this.$pullTip, this.minRefreshDistance = n.outerHeight();
              var f = n[0];
              f.style.webkitTransition = "none", f.style.webkitTransform = "translate3d(0," + d + "px,0)", f.style.top = t.getBoundingClientRect().top - this.minRefreshDistance + "px", this.initCanvas()
            }
          }, movePullTip: function (e, t, n) {
            if (this.pullTipExist()) {
              var r = Math.min(f(), e);
              this.$pullTip[0].style.webkitTransition = t || "none", this.$pullTip[0].style.webkitTransform = "translate3d(0," + r + "px,0)", 0 === e ? this.canvasObj.clearCurrent() : e > u && (this.shouldRefresh ? this.isRefreshing || n === !0 || this.canvasObj.rotate(e) : (e <= f() - 5 && this.canvasObj.rotate(e), this.canvasObj.drawArrowedArcByDis(e - u), this.canvasObj.changeOpacity(e - u)))
            }
          }, changePullTip: function (e, t) {
            this.pullTipExist()
          }, removePullTip: function (t) {
            if (this.pullTipExist())if (t) {
              var n = this;
              n.canvasObj.stopAuto(), n.$pullTip[0].style.webkitTransition = "all 100ms linear", n.$pullTip.css("opacity", .1), n.$pullTip[0].style.webkitTransform += " scale(0.1)"
            } else this.$pullTip[0].removeEventListener("webkitTransitionEnd", this.onTransitionEnd, !1), this.$pullTip.remove(), this.$pullTip = null, e(window).trigger("pullrefresh_pulltip_removed")
          }
        };
        var b = {
          init: function (e) {
            return new _(e)
          }
        };
        return b
      }(t, window);
      e.exports = s
    }).call(t, n(5915487851987839))
  },
  0xe85a386169c4b: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    function a() {
      var e = "test";
      try {
        return localStorage.setItem(e, e), localStorage.removeItem(e), !0
      } catch (e) {
        return !1
      }
    }

    function o(e) {
      for (var t in localStorage) {
        var n = t.split("___");
        if (3 == n.length && n[0] == e) {
          var r = parseInt(n[1]), a = parseInt(n[2]);
          if (Date.now() - r < a)return localStorage[t]
        }
      }
      return null
    }

    function i(e, t, n) {
      for (var r in localStorage) {
        var a = r.split("__");
        a[0] == e && localStorage.removeItem(r)
      }
      localStorage[e + "___" + Date.now() + "___" + n] = t
    }

    function s(e, t) {
      if (!t)return e;
      var n, r = document.createElement("a");
      return r.href = e, n = r.search ? r.search + "&" + t : "?" + t, r.protocol + "//" + r.host + r.pathname + n + r.hash
    }

    function l(e) {
      for (var t = location.search, n = t.substring(1).split("&"), r = {}, a = 0, o = n.length; a < o; a++) {
        var i = n[a];
        i && (r[i.substring(0, i.indexOf("=")).toLowerCase()] = i.substring(i.indexOf("=") + 1, i.length))
      }
      if (!e)return r;
      var s = r[e.toLowerCase()];
      return s ? s.trim() : ""
    }

    function c() {
      var e = location.hash.substr(1), t = {};
      if (e)for (var n = e.split("&"), r = 0; r < n.length; r++) {
        var a = n[r].split("=");
        t[a[0]] = a[1]
      }
      if ("string" == typeof arguments[0])return t[arguments[0]];
      if ("object" == (0, m.default)(arguments[0])) {
        for (var o in arguments[0])t[o] = arguments[0][o];
        var i = (0, f.default)(t).map(function (e) {
          return "h=" + t[e]
        }).join("&");
        location.href = "#" + i.substring(0, i.length - 1)
      }
    }

    function u() {
      var e = "Other", t = window.navigator.userAgent, n = {
        Wechat: /micromessenger/,
        QQBrowser: /qqbrowser/,
        UC: /ubrowser|ucbrowser|ucweb/,
        Shoujibaidu: /baiduboxapp|baiduhd|bidubrowser|baidubrowser/,
        SamsungBrowser: /samsungbrowser/,
        MiuiBrowser: /miuibrowser/,
        Sogou: /sogoumobilebrowser|sogousearch/,
        Explorer2345: /2345explorer|2345chrome|mb2345browser/,
        Liebao: /lbbrowser/,
        Weibo: /__weibo__/,
        OPPO: /oppobrowser/,
        toutiao: /newsarticle/,
        MobileQQ: /mobile.*qq/,
        Firefox: /firefox/,
        Maxthon: /maxthon/,
        Se360: /360se/,
        Ee360: /360ee/,
        Safari: /(iphone|ipad).*version.*mobile.*safari/,
        Chrome: /chrome|crios/,
        AndroidBrowser: /android.*safari|android.*release.*browser/
      };
      for (var r in n)if (n[r].exec(t.toLowerCase())) {
        e = r;
        break
      }
      return e
    }

    function d(e) {
      return (0, f.default)(e).map(function (t) {
        return [t, e[t]].join("=")
      }).join("&")
    }

    var p = n(8327643607632330), f = r(p), h = n(7724818440676399), m = r(h), v = function e(t, n, r) {
      if ("undefined" == typeof n) {
        var a = null;
        if (document.cookie && "" != document.cookie)for (var o = document.cookie.split(";"), i = 0; i < o.length; i++) {
          var e = o[i].trim();
          if (e.substring(0, t.length + 1) == t + "=") {
            a = decodeURIComponent(e.substring(t.length + 1));
            break
          }
        }
        return a
      }
      r = r || {}, null === n && (n = "", r.expires = -1);
      var s = "";
      if (r.expires && ("number" == typeof r.expires || r.expires.toUTCString)) {
        var l;
        "number" == typeof r.expires ? (l = new Date, l.setTime(l.getTime() + r.expires)) : l = r.expires, s = "; expires=" + l.toUTCString()
      }
      var c = r.path ? "; path=" + r.path : "", u = r.domain ? "; domain=" + r.domain : "", d = r.secure ? "; secure" : "";
      document.cookie = [t, "=", encodeURIComponent(n), s, c, u, d].join("")
    }, g = {
      vendor: function () {
        for (var e = ["O", "ms", "Moz", "Khtml", "Webkit", "webkit", ""], t = document.createElement("div"), n = e.length; n--;) {
          var r = e[n], a = r ? r + "Transform" : "transform";
          if (a in t.style)return r
        }
        return null
      }, prefix: function (e, t) {
        if (null !== g.vendor()) {
          var n = g.vendor() ? "-" + g.vendor().toLowerCase() + "-" : "", r = g.vendor() || "";
          if (t) {
            var a = e.replace(/([A-Z])/g, function (e, t) {
              return "-" + e.toLowerCase()
            });
            return n + a
          }
          var o = "" !== g.vendor() ? e.charAt(0).toUpperCase() + e.substr(1) : e, i = o.replace(/(-[a-z])/g, function (e, t) {
            return e.charAt(1).toUpperCase()
          });
          return r + i
        }
      }, canRun2d: function () {
        return null !== g.vendor()
      }, canRun3d: function () {
        var e = document.createElement("div");
        if (!canRun2d() || !window.getComputedStyle)return !1;
        var t = g.prefix("transform");
        document.body.appendChild(e), e.style[t] = "translate3d(1px,1px,1px)";
        var n = window.getComputedStyle(e)[t] || "";
        return document.body.removeChild(e), !!/^matrix3d\((.*)\)$/.exec(n)
      }, canRunCanvas: function () {
        var e;
        try {
          return e = document.createElement("canvas"), e.getContext("2d"), !0
        } catch (e) {
          return !1
        }
      }, canRunWebgl: function () {
        var e, t, n;
        try {
          return e = document.createElement("canvas"), t = e.getContext("webgl") || e.getContext("experimental-webgl"), n = t.getSupportedExtensions(), !0
        } catch (e) {
          return !1
        }
      }, canUsePageVisibility: function () {
        return null !== g.vendor() && void 0 !== document[g.prefix("hidden")]
      }
    }, _ = function () {
      return g.canUsePageVisibility() ? document[g.prefix("hidden")] ? "hidden" : "visible" : "unknown"
    };
    e.exports = {
      cookie: v,
      support: g,
      pageVisible: _,
      localStorageEnabled: a,
      getCookieForLocal: o,
      setCookieForLocal: i,
      appendQuery: s,
      request: l,
      hash: c,
      getBrowserName: u,
      toQuery: d
    }
  },
  4716986224731424: function (e, t, n) {
    (function (t, n) {
      "use strict";
      function r(e, t) {
        var r = (n(s.settings, t), s.inWords(s.datetime(e)));
        return r
      }

      function a(e) {
        return (new Date).getTime() - e.getTime()
      }

      function o(e) {
        var t = new Date;
        return t.getMonth() > e.getMonth() || t.getDate() > e.getDate()
      }

      function i(e) {
        return (new Date).getFullYear() > e.getFullYear()
      }

      Date.prototype.format = function (e) {
        var t = {
          "M+": this.getMonth() + 1,
          "d+": this.getDate(),
          "h+": this.getHours(),
          "m+": this.getMinutes(),
          "s+": this.getSeconds(),
          "q+": Math.floor((this.getMonth() + 3) / 3),
          S: this.getMilliseconds()
        };
        /(y+)/.test(e) && (e = e.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var n in t)new RegExp("(" + n + ")").test(e) && (e = e.replace(RegExp.$1, 1 == RegExp.$1.length ? t[n] : ("00" + t[n]).substr(("" + t[n]).length)));
        return e
      };
      var s = {
        settings: {
          relative: !1,
          strings: {
            suffixAgo: "å‰",
            seconds: "åˆšåˆš",
            minute: "1åˆ†é’Ÿ",
            minutes: "%dåˆ†é’Ÿ",
            hour: "1å°æ—¶",
            hours: "%då°æ—¶",
            days: "%då¤©",
            months: "%dæœˆ",
            years: "%då¹´",
            numbers: []
          },
          yearsAgoFormat: "yyyy-MM-dd",
          daysAgoFormat: "MM-dd hh:mm"
        }, inWords: function (e) {
          function n(e, n) {
            var r = t.isFunction(e) ? e(n, c) : e, a = u.numbers && u.numbers[n] || n;
            return r.replace(/%d/i, a)
          }

          var r = s.settings.relative;
          if (!r && i(e))return e.format(this.settings.yearsAgoFormat);
          if (!r && o(e))return e.format(this.settings.daysAgoFormat);
          var l, c = a(e), u = this.settings.strings, d = u.suffixAgo, p = Math.abs(c) / 1e3, f = p / 60, h = f / 60, m = h / 24, v = m / 30, g = m / 365;
          return l = p < 60 ? n(u.seconds, Math.floor(p)) : f < 60 ? n(u.minutes, Math.floor(f)) : h < 24 ? n(u.hours, Math.floor(h)) : m < 30 ? n(u.days, Math.floor(m)) : m < 365 ? n(u.months, Math.floor(v)) : n(u.years, Math.floor(g)), "åˆšåˆš" == l ? l : l + d
        }, parse: function (e) {
          var n = t.trim(e);
          return n = n.replace(/\.\d+/, ""), n = n.replace(/-/, "/").replace(/-/, "/"), n = n.replace(/T/, " ").replace(/Z/, " UTC"), n = n.replace(/([\+\-]\d\d)\:?(\d\d)/, " $1$2"), new Date(n)
        }, datetime: function (e) {
          return s.parse(e)
        }
      };
      e.exports = r
    }).call(t, n(5915487851987839), n(8406610569276718))
  },
  0xe68aec5280637: function (e, t, n) {
    (function (t) {
      "use strict";
      e.exports = function (e, t) {
        var n = t.document, r = {NONE: 0, NOOP: 1, UP: 2, RIGHT: 3, DOWN: 4, LEFT: 5, LEFT_RIGHT: 6}, a = {
          con: "",
          minDistance: 4,
          onPullStart: function () {
          },
          onMove: function () {
          },
          onPullEnd: function () {
          }
        }, o = function (t) {
          "string" == typeof t.con && (t.con = n.querySelector(t.con)), this.options = e.extend({}, a, t), this.hasTouch = !1, this.direction = r.NONE, this.distanceX = this.startY = this.startX = 0, this.isPull = !1, this.initEvent()
        };
        return o.prototype = {
          initEvent: function () {
            var e = this;
            this._touchStart = function (t) {
              e.__start(t)
            }, this._touchMove = function (t) {
              e.__move(t)
            }, this._touchEnd = function (t) {
              e.__end(t)
            }, this.options.con.addEventListener("touchstart", this._touchStart, !1), this.options.con.addEventListener("touchmove", this._touchMove, !1), this.options.con.addEventListener("touchend", this._touchEnd, !1)
          }, detachEvent: function () {
            this.options.con.removeEventListener("touchstart", this._touchStart, !1), this.options.con.removeEventListener("touchmove", this._touchMove, !1), this.options.con.removeEventListener("touchend", this._touchEnd, !1)
          }, __start: function (e) {
            e = e.targetTouches, 1 === e.length && (this.startX = e[0].pageX, this.startY = e[0].pageY, this.direction = r.NONE, this.distanceX = 0, this.hasTouch = !0, this.startScrollY = t.scrollY)
          }, __move: function (e) {
            if (this.hasTouch) {
              if (this.direction === r.UP)return;
              var t = e.targetTouches[0];
              if (this.direction === r.NONE) {
                this.distanceX = t.pageX - this.startX, this.distanceY = t.pageY - this.startY;
                var n = Math.abs(this.distanceY), a = Math.abs(this.distanceX);
                a + n > this.options.minDistance && (a > 1.73 * n ? this.direction = r.LEFT_RIGHT : n > 1.73 * a ? this.direction = this.distanceY < 0 ? r.UP : r.DOWN : this.direction = r.NOOP, this.startScrollY < 10 && this.distanceY > 0 && (this.direction = r.DOWN)), this.startScrollY < 10 && this.direction === r.DOWN && this.distanceY > this.options.minDistance && (this.isPull = !0, this.options.onPullStart(e, this.distanceY))
              }
              this.isPull && this.direction === r.DOWN && (this.distanceY = t.pageY - this.startY, this.refreshY = parseInt(this.distanceY * this.options.pullRatio), this.options.onMove(e, this.distanceY))
            }
          }, __end: function (e) {
            !this.hasTouch || r.LEFT_RIGHT !== this.direction && r.DOWN !== this.direction || (this.direction === r.LEFT_RIGHT && (e.preventDefault(), this.options.onPullEnd(e, this.distanceX, r.LEFT_RIGHT)), this.direction === r.DOWN && this.isPull && (e.preventDefault(), this.options.onPullEnd(e, this.distanceY, r.DOWN))), this.hasTouch = !1, this.isPull = !1
          }
        }, {
          init: function (e) {
            return new o(e)
          }, DIRECTION: r
        }
      }(t, window)
    }).call(t, n(5915487851987839))
  },
  755734527867252: function (e, t) {
    "use strict";
    var n = navigator.userAgent, r = navigator.platform, a = {}, o = {}, i = n.match(/Web[kK]it[\/]{0,1}([\d.]+)/), s = n.match(/(Android);?[\s\/]+([\d.]+)?/), l = !!n.match(/\(Macintosh\; Intel /), c = n.match(/(iPad).*OS\s([\d_]+)/), u = n.match(/(iPod)(.*OS\s([\d_]+))?/), d = !c && n.match(/(iPhone\sOS)\s([\d_]+)/), p = n.match(/(webOS|hpwOS)[\s\/]([\d.]+)/), f = /Win\d{2}|Windows/.test(r), h = n.match(/Windows Phone ([\d.]+)/), m = p && n.match(/TouchPad/), v = n.match(/Kindle\/([\d.]+)/), g = n.match(/Silk\/([\d._]+)/), _ = n.match(/(BlackBerry).*Version\/([\d.]+)/), b = n.match(/(BB10).*Version\/([\d.]+)/), y = n.match(/(RIM\sTablet\sOS)\s([\d.]+)/), w = n.match(/PlayBook/), x = n.match(/Chrome\/([\d.]+)/) || n.match(/CriOS\/([\d.]+)/), k = n.match(/Firefox\/([\d.]+)/), E = n.match(/\((?:Mobile|Tablet); rv:([\d.]+)\).*Firefox\/[\d.]+/), T = n.match(/MSIE\s([\d.]+)/) || n.match(/Trident\/[\d](?=[^\?]+).*rv:([0-9.].)/), A = !x && n.match(/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/), F = A || n.match(/Version\/([\d.]+)([^S](Safari)|[^M]*(Mobile)[^S]*(Safari))/);
    (o.webkit = !!i) && (o.version = i[1]), s && (a.android = !0, a.version = s[2]), d && !u && (a.ios = a.iphone = !0, a.version = d[2].replace(/_/g, ".")), c && (a.ios = a.ipad = !0, a.version = c[2].replace(/_/g, ".")), u && (a.ios = a.ipod = !0, a.version = u[3] ? u[3].replace(/_/g, ".") : null), h && (a.wp = !0, a.version = h[1]), p && (a.webos = !0, a.version = p[2]), m && (a.touchpad = !0), _ && (a.blackberry = !0, a.version = _[2]), b && (a.bb10 = !0, a.version = b[2]), y && (a.rimtabletos = !0, a.version = y[2]), w && (o.playbook = !0), v && (a.kindle = !0, a.version = v[1]), g && (o.silk = !0, o.version = g[1]), !g && a.android && n.match(/Kindle Fire/) && (o.silk = !0), x && (o.chrome = !0, o.version = x[1]), k && (o.firefox = !0, o.version = k[1]), E && (a.firefoxos = !0, a.version = E[1]), T && (o.ie = !0, o.version = T[1]), F && (l || a.ios || f) && (o.safari = !0, a.ios || (o.version = F[1])), A && (o.webview = !0), a.version = parseFloat(a.version), o.ucbrowser = !!n.match(/ucbrowser/gi), o.toutiao = "http://nativeapp.toutiao.com" == document.referrer || /(News|NewsSocial|Explore|NewsArticle|News_?Article)( |\/)(\d.\d.\d)/i.test(n), o.toutiaoSDK = /(ArticleStreamSdk)( |\/)(\d+)/i.test(n), o.qqbrowser = !!n.match(/qqbrowser/gi), o.weixin = n.toLowerCase().match(/MicroMessenger/i), a.tablet = !!(c || w || s && !n.match(/Mobile/) || k && n.match(/Tablet/) || T && !n.match(/Phone/) && n.match(/Touch/)), a.phone = !(a.tablet || a.ipod || !(s || d || p || _ || b || x && n.match(/Android/) || x && n.match(/CriOS\/([\d.]+)/) || k && n.match(/Mobile/) || T && n.match(/Touch/))), e.exports = {
      os: a,
      browser: o
    }
  },
  5359030257400059: function (e, t, n) {
    (function (t) {
      "use strict";
      function r(e) {
        return e && e.__esModule ? e : {default: e}
      }

      function a() {
        window.scrollTo(0, 0)
      }

      function o() {
        var e = navigator.userAgent.toLowerCase(), t = x.default.request("debug");
        return "weixin" == t || "micromessenger" == e.match(/MicroMessenger/i)
      }

      function i() {
        if (!Utils.isWeixin())return !1;
        var e = x.default.request("isappinstalled") - 0, t = x.default.request("wxshare_count");
        return !(!e || t && !(t < 2))
      }

      function s(e) {
        return e.match(/https?:\/\/(m\.)?toutiao\.com\/[a|i](\d+)/i)
      }

      function l(e, t) {
        if (t = "undefined" != typeof t && t, window.ttGTM) {
          var n = null;
          return n = window.isListPage ? ttGTM.list : o() ? ttGTM.weixin : ttGTM.detail, n = n || {}, e in n ? n[e] : t
        }
        return t
      }

      function c(e, t) {
        e && "?" != e[0] && (e = "?" + e);
        var n, r;
        return n = new RegExp("[\\?&]" + encodeURIComponent(t) + "=([^&#]*)"), r = n.exec(e), null === r ? "" : decodeURIComponent(r[1].replace(/\+/g, " "))
      }

      function u(e) {
        var t, n = {
          joke_essay: 5,
          news_article: 14,
          news_article_social: 20,
          joke_essay_social: 21,
          saying_essay_social: 22,
          explore_article: 25,
          joke_zone: 27
        }, r = e.app || x.default.request("app") || "news_article", a = 1;
        return y.default.os.android && (a = 3), r.length ? (t = n[r], 21 != t && 24 != t || (t = 5), 22 == t && (t = 9), 20 == t && 3 == a && (t = 14), "snssdk" + t + a + "://") : ""
      }

      function d(e) {
        function t(e, t) {
          var n = null;
          return t && t.isNewVideo && (n = 64), n && (e += "&flags=" + n), e
        }

        var n = u(e), r = e.gdLabel || "click_weixin_home", a = e.type || "home", o = e.id, i = "";
        switch (a) {
          case"detail":
            i = n + "detail?groupid=" + o + "&gd_label=" + r, n = t(i, e);
            break;
          case"comment":
            i = n + "detail?groupid=" + o + "&showcomment=1&gd_label=" + r + "&gd_ext_json=" + (0, _.default)({enter_comment: r}), n = t(i, e);
            break;
          case"mediaProfile":
            i = n + "media_account?media_id=" + o + "&gd_ext_json=" + (0, _.default)({event: "pgc_profile", label: r});
            break;
          case"home":
            i = n + "home/news?gd_ext_json=" + (0, _.default)({event: "home", label: r})
        }
        return i
      }

      function p(e) {
        return x.default.cookie(e) || x.default.request(e) || ""
      }

      function f() {
        return {
          __type__: "app_track",
          resolution: window.screen.availWidth * window.devicePixelRatio + "*" + window.screen.availHeight * window.devicePixelRatio,
          webid: x.default.cookie("tt_webid") || "",
          utm_source: p("utm_source")
        }
      }

      function h(e) {
        var t = function (e) {
          for (var t = [], n = 0; n < e; n++) {
            var r = String.fromCharCode(Math.floor(26 * Math.random()) + 65), a = Math.ceil(10 * Math.random());
            a % 2 === 1 && (r = r.toLowerCase()), t.push(r)
          }
          return t.join("")
        }, n = function () {
          return Math.ceil(15 * Math.random())
        }, r = {};
        return e.forEach(function (e) {
          var a = t(n()) + t(n());
          r[e] = a
        }), {map: r}
      }

      function m() {
        function e(e) {
          var a = document.body.scrollHeight, o = window.scrollY || window.pageYOffset || document.body.scrollTop || document.documentElement.scrollTop, i = window.innerHeight;
          o >= a - i - r && t(window).trigger("scrollBottom", e.type), "scroll" == e.type && (n && clearTimeout(n), n = setTimeout(function () {
            t(window).trigger("scrollEnd")
          }, 300))
        }

        var n, r = 100 * (window.responsive || {dpr: 1}).dpr;
        t(window).on("scroll load afterflow", e)
      }

      function v() {
        var e = x.default.cookie("tt_webid"), t = null !== e ? parseInt(e) % 10 : void 0;
        return [1, 2].indexOf(t) > -1 && t
      }

      var g = n(0xeb9e744742586), _ = r(g), b = n(755734527867252), y = r(b), w = n(0xe85a386169c4b), x = r(w);
      window.loadimg = function () {
      }, window.errorimg = function () {
      };
      var k = {
        scrollTop: a,
        isWeixin: o,
        isAppInstalled: i,
        isGroupUrl: s,
        getGTMValue: l,
        getParam: c,
        getScheme: u,
        getNativeLink: d,
        getUTMValue: p,
        getAppTrackData: f,
        confused: h,
        initScrollEvents: m,
        testAD: v
      };
      e.exports = k
    }).call(t, n(5915487851987839))
  },
  0xcc15c9e3f2142: function (e, t, n) {
    (function (t) {
      "use strict";
      var r = n(755734527867252), a = n(5359030257400059), o = n(0xe85a386169c4b), i = function (e) {
        t("#app_iframe").remove(), t("body").append("<iframe id='app_iframe' src='" + e + "' style='display:none'></iframe>")
      }, s = function (e) {
        var t = a.isWeixin(), n = r.os.ios && r.os.version >= 9;
        return !(t && !n) && void(r.os.ios ? c(e) : l(e))
      }, l = function (e) {
        i(e.nativeLink)
      }, c = function (e) {
        var t = location.href, n = r.os.version;
        if (n >= 9 && !r.browser.qqbrowser) {
          var s = "//toutiao.com/m/detail/?", l = "click_" + (a.isWeixin() ? "weixin" : "wap") + "_ios_deeplink", c = e.nativeLink.replace(/gd_label=(\w+)/, "gd_label=" + l);
          c.indexOf("gd_label") === -1 && (c += "&gd_label=" + l);
          var u = {group_id: "", item_id: "", scheme: encodeURIComponent(c)};
          s += o.toQuery(u), setTimeout(function () {
            location.href = e.universalLink || s
          }, 300)
        } else if (n >= 9) {
          var d = r.browser.safari, p = d ? 2e3 : 1300;
          setTimeout(function () {
            location.href = e.nativeLink, setTimeout(function () {
              "hidden" === o.pageVisible() && (location.href = t)
            }, p)
          }, 10)
        } else i(e.nativeLink)
      };
      e.exports = {jumpToNativeapp: s}
    }).call(t, n(5915487851987839))
  },
  6257044697998665: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    function a() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments[1];
      switch (t.type) {
        case"FETCH_LIST_DATA":
          return (0, v.default)({}, e, t.reddit);
        default:
          return e
      }
    }

    function o() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : _.NETWORKTIPS.LOADING, t = arguments[1];
      switch (t.type) {
        case"FETCH_LIST_TIPS":
          return t.reddit;
        default:
          return e
      }
    }

    function i() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments[1];
      switch (t.type) {
        case"FETCH_LIST_LOCK":
          return (0, v.default)({}, e, t.reddit);
        default:
          return e
      }
    }

    function s() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : 0, t = arguments[1];
      switch (t.type) {
        case"FETCH_LIST_NUMBER":
          return t.reddit;
        default:
          return e
      }
    }

    function l() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = arguments[1];
      switch (t.type) {
        case"FETCH_LIST_SHOW_REFRESHTIP":
          return t.reddit;
        default:
          return e
      }
    }

    function c() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "", t = arguments[1];
      switch (t.type) {
        case"CHANGE_CHANNEL":
          return t.reddit;
        default:
          return e
      }
    }

    function u() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = arguments[1];
      switch (t.type) {
        case"SHOW_POPUP_BANNER":
          return t.reddit;
        default:
          return e
      }
    }

    function d() {
      var e = arguments.length > 0 && void 0 !== arguments[0] && arguments[0], t = arguments[1];
      switch (t.type) {
        case"ROTATE_REFRESH_BTN":
          return t.reddit;
        default:
          return e
      }
    }

    function p() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments[1];
      switch (t.type) {
        case"LOAD_GTM_SCRIPT":
          return t.reddit;
        default:
          return e
      }
    }

    function f() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments[1];
      switch (t.type) {
        case"DO_AD_TEST":
          return {doADTest: !0, position: t.reddit};
        default:
          return e
      }
    }

    function h() {
      var e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {}, t = arguments[1];
      switch (t.type) {
        case"CHANNEL_SCROLL_POSITION":
          return (0, v.default)({}, e, t.reddit);
        default:
          return e
      }
    }

    Object.defineProperty(t, "__esModule", {value: !0});
    var m = n(0xd9a8125d8e0e5), v = r(m), g = n(0xfb6040496a953), _ = n(5980400199274178), b = (0, g.combineReducers)({
      listData: a,
      fetchTips: o,
      fetchNumber: s,
      currentChannel: c,
      showRefreshTip: l,
      fetchListLock: i,
      showPopupBanner: u,
      rotateRefreshBtn: d,
      GTMValue: p,
      doADTest: f,
      channelScrollPosition: h
    });
    t.default = b
  },
  0xa179c3e0d614: function (e, t) {
    e.exports = "//s3b.pstatp.com/growth/mobile_list/image/group@1x_c5be3b6f6f1bd7a95594a472931a271e.jpg"
  },
  0x3add5d820ca85: function (e, t) {
    e.exports = "//s3.pstatp.com/growth/mobile_list/image/group@2x_cfe94d42e0b2ad6f530c500ce227f1b0.jpg"
  },
  8573774072548499: function (e, t) {
    e.exports = "//s3.pstatp.com/growth/mobile_list/image/group@3x_7b1a9486a7d1da7ec3d7a64868f0faa9.jpg"
  },
  5026150217922954: function (e, t) {
    e.exports = "//s3a.pstatp.com/growth/mobile_list/image/small_b486853c0659bb59ee7d2bcb95212244.jpg"
  },
  8361774273605034: function (e, t) {
    e.exports = "//s3a.pstatp.com/growth/mobile_list/image/bonus_icon@3x_f4035aa1c7322822ac0f4f5c2648bf84.png"
  },
  5978336771477473: function (e, t) {
    e.exports = "//s3b.pstatp.com/growth/mobile_list/image/popup_banner_close_e6f62910dfb9089c3949153000fcc298.png"
  },
  8673627881205878: function (e, t) {
    e.exports = "//s3a.pstatp.com/growth/mobile_list/image/wap_bonus@3x_f3bc610f36b421cbe32102dee4923c01.jpg"
  },
  6820601010923534: function (e, t) {
    e.exports = "//s3.pstatp.com/growth/mobile_list/image/weixin_bonus@3x_bfb1231a667bd442d34c8edb321d2b26.png"
  },
  4728473848743912: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    function a(e) {
      var t = (0, o.createStore)(u.default, e, (0, o.applyMiddleware)(s.default));
      return t
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.default = a;
    var o = n(0xfb6040496a953), i = n(0xc680db3f71691), s = r(i), l = n(6310004466639690), c = (r(l), n(6257044697998665)), u = r(c)
  },
  0x82a69954be82e: function (e, t, n) {
    "use strict";
    function r(e) {
      return e && e.__esModule ? e : {default: e}
    }

    Object.defineProperty(t, "__esModule", {value: !0}), t.dispatch = void 0;
    var a = n(4728473848743912), o = r(a), i = (0, o.default)();
    t.default = i;
    t.dispatch = i.dispatch
  },
  0x49427db3e0b23: 468537700344184,
  489539131759075: 468537700344184,
  0xc94c4916c9ec6: 468537700344184
});
