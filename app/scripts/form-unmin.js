! function(e) { var t = {};

    function n(r) { if (t[r]) return t[r].exports; var a = t[r] = { i: r, l: !1, exports: {} }; return e[r].call(a.exports, a, a.exports, n), a.l = !0, a.exports } n.m = e, n.c = t, n.d = function(e, t, r) { n.o(e, t) || Object.defineProperty(e, t, { enumerable: !0, get: r }) }, n.r = function(e) { "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(e, "__esModule", { value: !0 }) }, n.t = function(e, t) { if (1 & t && (e = n(e)), 8 & t) return e; if (4 & t && "object" == typeof e && e && e.__esModule) return e; var r = Object.create(null); if (n.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: e }), 2 & t && "string" != typeof e)
            for (var a in e) n.d(r, a, function(t) { return e[t] }.bind(null, a)); return r }, n.n = function(e) { var t = e && e.__esModule ? function() { return e.default } : function() { return e }; return n.d(t, "a", t), t }, n.o = function(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }, n.p = "/scripts/", n(n.s = 128) }([function(e, t, n) {
    (function(e) { e.exports = function() { "use strict"; var t, r;

            function a() { return t.apply(null, arguments) }

            function s(e) { return e instanceof Array || "[object Array]" === Object.prototype.toString.call(e) }

            function i(e) { return null != e && "[object Object]" === Object.prototype.toString.call(e) }

            function o(e) { return void 0 === e }

            function d(e) { return "number" == typeof e || "[object Number]" === Object.prototype.toString.call(e) }

            function _(e) { return e instanceof Date || "[object Date]" === Object.prototype.toString.call(e) }

            function u(e, t) { var n, r = []; for (n = 0; n < e.length; ++n) r.push(t(e[n], n)); return r }

            function l(e, t) { return Object.prototype.hasOwnProperty.call(e, t) }

            function m(e, t) { for (var n in t) l(t, n) && (e[n] = t[n]); return l(t, "toString") && (e.toString = t.toString), l(t, "valueOf") && (e.valueOf = t.valueOf), e }

            function c(e, t, n, r) { return Ot(e, t, n, r, !0).utc() }

            function h(e) { return null == e._pf && (e._pf = { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1, parsedDateParts: [], meridiem: null, rfc2822: !1, weekdayMismatch: !1 }), e._pf }

            function f(e) { if (null == e._isValid) { var t = h(e),
                        n = r.call(t.parsedDateParts, function(e) { return null != e }),
                        a = !isNaN(e._d.getTime()) && t.overflow < 0 && !t.empty && !t.invalidMonth && !t.invalidWeekday && !t.weekdayMismatch && !t.nullInput && !t.invalidFormat && !t.userInvalidated && (!t.meridiem || t.meridiem && n); if (e._strict && (a = a && 0 === t.charsLeftOver && 0 === t.unusedTokens.length && void 0 === t.bigHour), null != Object.isFrozen && Object.isFrozen(e)) return a;
                    e._isValid = a } return e._isValid }

            function M(e) { var t = c(NaN); return null != e ? m(h(t), e) : h(t).userInvalidated = !0, t } r = Array.prototype.some ? Array.prototype.some : function(e) { for (var t = Object(this), n = t.length >>> 0, r = 0; r < n; r++)
                    if (r in t && e.call(this, t[r], r, t)) return !0; return !1 }; var y = a.momentProperties = [];

            function p(e, t) { var n, r, a; if (o(t._isAMomentObject) || (e._isAMomentObject = t._isAMomentObject), o(t._i) || (e._i = t._i), o(t._f) || (e._f = t._f), o(t._l) || (e._l = t._l), o(t._strict) || (e._strict = t._strict), o(t._tzm) || (e._tzm = t._tzm), o(t._isUTC) || (e._isUTC = t._isUTC), o(t._offset) || (e._offset = t._offset), o(t._pf) || (e._pf = h(t)), o(t._locale) || (e._locale = t._locale), y.length > 0)
                    for (n = 0; n < y.length; n++) r = y[n], o(a = t[r]) || (e[r] = a); return e } var L = !1;

            function Y(e) { p(this, e), this._d = new Date(null != e._d ? e._d.getTime() : NaN), this.isValid() || (this._d = new Date(NaN)), !1 === L && (L = !0, a.updateOffset(this), L = !1) }

            function g(e) { return e instanceof Y || null != e && null != e._isAMomentObject }

            function k(e) { return e < 0 ? Math.ceil(e) || 0 : Math.floor(e) }

            function v(e) { var t = +e,
                    n = 0; return 0 !== t && isFinite(t) && (n = k(t)), n }

            function D(e, t, n) { var r, a = Math.min(e.length, t.length),
                    s = Math.abs(e.length - t.length),
                    i = 0; for (r = 0; r < a; r++)(n && e[r] !== t[r] || !n && v(e[r]) !== v(t[r])) && i++; return i + s }

            function T(e) {!1 === a.suppressDeprecationWarnings && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + e) }

            function w(e, t) { var n = !0; return m(function() { if (null != a.deprecationHandler && a.deprecationHandler(null, e), n) { for (var r, s = [], i = 0; i < arguments.length; i++) { if (r = "", "object" == typeof arguments[i]) { for (var o in r += "\n[" + i + "] ", arguments[0]) r += o + ": " + arguments[0][o] + ", ";
                                r = r.slice(0, -2) } else r = arguments[i];
                            s.push(r) } T(e + "\nArguments: " + Array.prototype.slice.call(s).join("") + "\n" + (new Error).stack), n = !1 } return t.apply(this, arguments) }, t) } var b, S = {};

            function j(e, t) { null != a.deprecationHandler && a.deprecationHandler(e, t), S[e] || (T(t), S[e] = !0) }

            function H(e) { return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e) }

            function O(e, t) { var n, r = m({}, e); for (n in t) l(t, n) && (i(e[n]) && i(t[n]) ? (r[n] = {}, m(r[n], e[n]), m(r[n], t[n])) : null != t[n] ? r[n] = t[n] : delete r[n]); for (n in e) l(e, n) && !l(t, n) && i(e[n]) && (r[n] = m({}, r[n])); return r }

            function x(e) { null != e && this.set(e) } a.suppressDeprecationWarnings = !1, a.deprecationHandler = null, b = Object.keys ? Object.keys : function(e) { var t, n = []; for (t in e) l(e, t) && n.push(t); return n }; var P = {};

            function E(e, t) { var n = e.toLowerCase();
                P[n] = P[n + "s"] = P[t] = e }

            function A(e) { return "string" == typeof e ? P[e] || P[e.toLowerCase()] : void 0 }

            function W(e) { var t, n, r = {}; for (n in e) l(e, n) && (t = A(n)) && (r[t] = e[n]); return r } var F = {};

            function I(e, t) { F[e] = t }

            function C(e, t, n) { var r = "" + Math.abs(e),
                    a = t - r.length,
                    s = e >= 0; return (s ? n ? "+" : "" : "-") + Math.pow(10, Math.max(0, a)).toString().substr(1) + r } var N = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g,
                z = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g,
                R = {},
                J = {};

            function G(e, t, n, r) { var a = r; "string" == typeof r && (a = function() { return this[r]() }), e && (J[e] = a), t && (J[t[0]] = function() { return C(a.apply(this, arguments), t[1], t[2]) }), n && (J[n] = function() { return this.localeData().ordinal(a.apply(this, arguments), e) }) }

            function U(e) { return e.match(/\[[\s\S]/) ? e.replace(/^\[|\]$/g, "") : e.replace(/\\/g, "") }

            function B(e, t) { return e.isValid() ? (t = V(t, e.localeData()), R[t] = R[t] || function(e) { var t, n, r = e.match(N); for (t = 0, n = r.length; t < n; t++) J[r[t]] ? r[t] = J[r[t]] : r[t] = U(r[t]); return function(t) { var a, s = ""; for (a = 0; a < n; a++) s += H(r[a]) ? r[a].call(t, e) : r[a]; return s } }(t), R[t](e)) : e.localeData().invalidDate() }

            function V(e, t) { var n = 5;

                function r(e) { return t.longDateFormat(e) || e } for (z.lastIndex = 0; n >= 0 && z.test(e);) e = e.replace(z, r), z.lastIndex = 0, n -= 1; return e } var $ = /\d/,
                q = /\d\d/,
                K = /\d{3}/,
                Z = /\d{4}/,
                Q = /[+-]?\d{6}/,
                X = /\d\d?/,
                ee = /\d\d\d\d?/,
                te = /\d\d\d\d\d\d?/,
                ne = /\d{1,3}/,
                re = /\d{1,4}/,
                ae = /[+-]?\d{1,6}/,
                se = /\d+/,
                ie = /[+-]?\d+/,
                oe = /Z|[+-]\d\d:?\d\d/gi,
                de = /Z|[+-]\d\d(?::?\d\d)?/gi,
                _e = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i,
                ue = {};

            function le(e, t, n) { ue[e] = H(t) ? t : function(e, r) { return e && n ? n : t } }

            function me(e, t) { return l(ue, e) ? ue[e](t._strict, t._locale) : new RegExp(function(e) { return ce(e.replace("\\", "").replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function(e, t, n, r, a) { return t || n || r || a })) }(e)) }

            function ce(e) { return e.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") } var he = {};

            function fe(e, t) { var n, r = t; for ("string" == typeof e && (e = [e]), d(t) && (r = function(e, n) { n[t] = v(e) }), n = 0; n < e.length; n++) he[e[n]] = r }

            function Me(e, t) { fe(e, function(e, n, r, a) { r._w = r._w || {}, t(e, r._w, r, a) }) }

            function ye(e, t, n) { null != t && l(he, e) && he[e](t, n._a, n, e) } var pe = 0,
                Le = 1,
                Ye = 2,
                ge = 3,
                ke = 4,
                ve = 5,
                De = 6,
                Te = 7,
                we = 8;

            function be(e) { return Se(e) ? 366 : 365 }

            function Se(e) { return e % 4 == 0 && e % 100 != 0 || e % 400 == 0 } G("Y", 0, 0, function() { var e = this.year(); return e <= 9999 ? "" + e : "+" + e }), G(0, ["YY", 2], 0, function() { return this.year() % 100 }), G(0, ["YYYY", 4], 0, "year"), G(0, ["YYYYY", 5], 0, "year"), G(0, ["YYYYYY", 6, !0], 0, "year"), E("year", "y"), I("year", 1), le("Y", ie), le("YY", X, q), le("YYYY", re, Z), le("YYYYY", ae, Q), le("YYYYYY", ae, Q), fe(["YYYYY", "YYYYYY"], pe), fe("YYYY", function(e, t) { t[pe] = 2 === e.length ? a.parseTwoDigitYear(e) : v(e) }), fe("YY", function(e, t) { t[pe] = a.parseTwoDigitYear(e) }), fe("Y", function(e, t) { t[pe] = parseInt(e, 10) }), a.parseTwoDigitYear = function(e) { return v(e) + (v(e) > 68 ? 1900 : 2e3) }; var je, He = Oe("FullYear", !0);

            function Oe(e, t) { return function(n) { return null != n ? (Pe(this, e, n), a.updateOffset(this, t), this) : xe(this, e) } }

            function xe(e, t) { return e.isValid() ? e._d["get" + (e._isUTC ? "UTC" : "") + t]() : NaN }

            function Pe(e, t, n) { e.isValid() && !isNaN(n) && ("FullYear" === t && Se(e.year()) && 1 === e.month() && 29 === e.date() ? e._d["set" + (e._isUTC ? "UTC" : "") + t](n, e.month(), Ee(n, e.month())) : e._d["set" + (e._isUTC ? "UTC" : "") + t](n)) }

            function Ee(e, t) { if (isNaN(e) || isNaN(t)) return NaN; var n = function(e, t) { return (e % t + t) % t }(t, 12); return e += (t - n) / 12, 1 === n ? Se(e) ? 29 : 28 : 31 - n % 7 % 2 } je = Array.prototype.indexOf ? Array.prototype.indexOf : function(e) { var t; for (t = 0; t < this.length; ++t)
                    if (this[t] === e) return t; return -1 }, G("M", ["MM", 2], "Mo", function() { return this.month() + 1 }), G("MMM", 0, 0, function(e) { return this.localeData().monthsShort(this, e) }), G("MMMM", 0, 0, function(e) { return this.localeData().months(this, e) }), E("month", "M"), I("month", 8), le("M", X), le("MM", X, q), le("MMM", function(e, t) { return t.monthsShortRegex(e) }), le("MMMM", function(e, t) { return t.monthsRegex(e) }), fe(["M", "MM"], function(e, t) { t[Le] = v(e) - 1 }), fe(["MMM", "MMMM"], function(e, t, n, r) { var a = n._locale.monthsParse(e, r, n._strict);
                null != a ? t[Le] = a : h(n).invalidMonth = e }); var Ae = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/,
                We = "January_February_March_April_May_June_July_August_September_October_November_December".split("_"),
                Fe = "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_");

            function Ie(e, t) { var n; if (!e.isValid()) return e; if ("string" == typeof t)
                    if (/^\d+$/.test(t)) t = v(t);
                    else if (!d(t = e.localeData().monthsParse(t))) return e; return n = Math.min(e.date(), Ee(e.year(), t)), e._d["set" + (e._isUTC ? "UTC" : "") + "Month"](t, n), e }

            function Ce(e) { return null != e ? (Ie(this, e), a.updateOffset(this, !0), this) : xe(this, "Month") } var Ne = _e,
                ze = _e;

            function Re() {
                function e(e, t) { return t.length - e.length } var t, n, r = [],
                    a = [],
                    s = []; for (t = 0; t < 12; t++) n = c([2e3, t]), r.push(this.monthsShort(n, "")), a.push(this.months(n, "")), s.push(this.months(n, "")), s.push(this.monthsShort(n, "")); for (r.sort(e), a.sort(e), s.sort(e), t = 0; t < 12; t++) r[t] = ce(r[t]), a[t] = ce(a[t]); for (t = 0; t < 24; t++) s[t] = ce(s[t]);
                this._monthsRegex = new RegExp("^(" + s.join("|") + ")", "i"), this._monthsShortRegex = this._monthsRegex, this._monthsStrictRegex = new RegExp("^(" + a.join("|") + ")", "i"), this._monthsShortStrictRegex = new RegExp("^(" + r.join("|") + ")", "i") }

            function Je(e) { var t; if (e < 100 && e >= 0) { var n = Array.prototype.slice.call(arguments);
                    n[0] = e + 400, t = new Date(Date.UTC.apply(null, n)), isFinite(t.getUTCFullYear()) && t.setUTCFullYear(e) } else t = new Date(Date.UTC.apply(null, arguments)); return t }

            function Ge(e, t, n) { var r = 7 + t - n,
                    a = (7 + Je(e, 0, r).getUTCDay() - t) % 7; return -a + r - 1 }

            function Ue(e, t, n, r, a) { var s, i, o = (7 + n - r) % 7,
                    d = Ge(e, r, a),
                    _ = 1 + 7 * (t - 1) + o + d; return _ <= 0 ? i = be(s = e - 1) + _ : _ > be(e) ? (s = e + 1, i = _ - be(e)) : (s = e, i = _), { year: s, dayOfYear: i } }

            function Be(e, t, n) { var r, a, s = Ge(e.year(), t, n),
                    i = Math.floor((e.dayOfYear() - s - 1) / 7) + 1; return i < 1 ? (a = e.year() - 1, r = i + Ve(a, t, n)) : i > Ve(e.year(), t, n) ? (r = i - Ve(e.year(), t, n), a = e.year() + 1) : (a = e.year(), r = i), { week: r, year: a } }

            function Ve(e, t, n) { var r = Ge(e, t, n),
                    a = Ge(e + 1, t, n); return (be(e) - r + a) / 7 }

            function $e(e, t) { return e.slice(t, 7).concat(e.slice(0, t)) } G("w", ["ww", 2], "wo", "week"), G("W", ["WW", 2], "Wo", "isoWeek"), E("week", "w"), E("isoWeek", "W"), I("week", 5), I("isoWeek", 5), le("w", X), le("ww", X, q), le("W", X), le("WW", X, q), Me(["w", "ww", "W", "WW"], function(e, t, n, r) { t[r.substr(0, 1)] = v(e) }), G("d", 0, "do", "day"), G("dd", 0, 0, function(e) { return this.localeData().weekdaysMin(this, e) }), G("ddd", 0, 0, function(e) { return this.localeData().weekdaysShort(this, e) }), G("dddd", 0, 0, function(e) { return this.localeData().weekdays(this, e) }), G("e", 0, 0, "weekday"), G("E", 0, 0, "isoWeekday"), E("day", "d"), E("weekday", "e"), E("isoWeekday", "E"), I("day", 11), I("weekday", 11), I("isoWeekday", 11), le("d", X), le("e", X), le("E", X), le("dd", function(e, t) { return t.weekdaysMinRegex(e) }), le("ddd", function(e, t) { return t.weekdaysShortRegex(e) }), le("dddd", function(e, t) { return t.weekdaysRegex(e) }), Me(["dd", "ddd", "dddd"], function(e, t, n, r) { var a = n._locale.weekdaysParse(e, r, n._strict);
                null != a ? t.d = a : h(n).invalidWeekday = e }), Me(["d", "e", "E"], function(e, t, n, r) { t[r] = v(e) }); var qe = "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
                Ke = "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),
                Ze = "Su_Mo_Tu_We_Th_Fr_Sa".split("_"),
                Qe = _e,
                Xe = _e,
                et = _e;

            function tt() {
                function e(e, t) { return t.length - e.length } var t, n, r, a, s, i = [],
                    o = [],
                    d = [],
                    _ = []; for (t = 0; t < 7; t++) n = c([2e3, 1]).day(t), r = this.weekdaysMin(n, ""), a = this.weekdaysShort(n, ""), s = this.weekdays(n, ""), i.push(r), o.push(a), d.push(s), _.push(r), _.push(a), _.push(s); for (i.sort(e), o.sort(e), d.sort(e), _.sort(e), t = 0; t < 7; t++) o[t] = ce(o[t]), d[t] = ce(d[t]), _[t] = ce(_[t]);
                this._weekdaysRegex = new RegExp("^(" + _.join("|") + ")", "i"), this._weekdaysShortRegex = this._weekdaysRegex, this._weekdaysMinRegex = this._weekdaysRegex, this._weekdaysStrictRegex = new RegExp("^(" + d.join("|") + ")", "i"), this._weekdaysShortStrictRegex = new RegExp("^(" + o.join("|") + ")", "i"), this._weekdaysMinStrictRegex = new RegExp("^(" + i.join("|") + ")", "i") }

            function nt() { return this.hours() % 12 || 12 }

            function rt(e, t) { G(e, 0, 0, function() { return this.localeData().meridiem(this.hours(), this.minutes(), t) }) }

            function at(e, t) { return t._meridiemParse } G("H", ["HH", 2], 0, "hour"), G("h", ["hh", 2], 0, nt), G("k", ["kk", 2], 0, function() { return this.hours() || 24 }), G("hmm", 0, 0, function() { return "" + nt.apply(this) + C(this.minutes(), 2) }), G("hmmss", 0, 0, function() { return "" + nt.apply(this) + C(this.minutes(), 2) + C(this.seconds(), 2) }), G("Hmm", 0, 0, function() { return "" + this.hours() + C(this.minutes(), 2) }), G("Hmmss", 0, 0, function() { return "" + this.hours() + C(this.minutes(), 2) + C(this.seconds(), 2) }), rt("a", !0), rt("A", !1), E("hour", "h"), I("hour", 13), le("a", at), le("A", at), le("H", X), le("h", X), le("k", X), le("HH", X, q), le("hh", X, q), le("kk", X, q), le("hmm", ee), le("hmmss", te), le("Hmm", ee), le("Hmmss", te), fe(["H", "HH"], ge), fe(["k", "kk"], function(e, t, n) { var r = v(e);
                t[ge] = 24 === r ? 0 : r }), fe(["a", "A"], function(e, t, n) { n._isPm = n._locale.isPM(e), n._meridiem = e }), fe(["h", "hh"], function(e, t, n) { t[ge] = v(e), h(n).bigHour = !0 }), fe("hmm", function(e, t, n) { var r = e.length - 2;
                t[ge] = v(e.substr(0, r)), t[ke] = v(e.substr(r)), h(n).bigHour = !0 }), fe("hmmss", function(e, t, n) { var r = e.length - 4,
                    a = e.length - 2;
                t[ge] = v(e.substr(0, r)), t[ke] = v(e.substr(r, 2)), t[ve] = v(e.substr(a)), h(n).bigHour = !0 }), fe("Hmm", function(e, t, n) { var r = e.length - 2;
                t[ge] = v(e.substr(0, r)), t[ke] = v(e.substr(r)) }), fe("Hmmss", function(e, t, n) { var r = e.length - 4,
                    a = e.length - 2;
                t[ge] = v(e.substr(0, r)), t[ke] = v(e.substr(r, 2)), t[ve] = v(e.substr(a)) }); var st, it = Oe("Hours", !0),
                ot = { calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, invalidDate: "Invalid date", ordinal: "%d", dayOfMonthOrdinalParse: /\d{1,2}/, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, months: We, monthsShort: Fe, week: { dow: 0, doy: 6 }, weekdays: qe, weekdaysMin: Ze, weekdaysShort: Ke, meridiemParse: /[ap]\.?m?\.?/i },
                dt = {},
                _t = {};

            function ut(e) { return e ? e.toLowerCase().replace("_", "-") : e }

            function lt(t) { var r = null; if (!dt[t] && void 0 !== e && e && e.exports) try { r = st._abbr, n(140)("./" + t), mt(r) } catch (e) {}
                return dt[t] }

            function mt(e, t) { var n; return e && ((n = o(t) ? ht(e) : ct(e, t)) ? st = n : "undefined" != typeof console && console.warn && console.warn("Locale " + e + " not found. Did you forget to load it?")), st._abbr }

            function ct(e, t) { if (null !== t) { var n, r = ot; if (t.abbr = e, null != dt[e]) j("defineLocaleOverride", "use moment.updateLocale(localeName, config) to change an existing locale. moment.defineLocale(localeName, config) should only be used for creating a new locale See http://momentjs.com/guides/#/warnings/define-locale/ for more info."), r = dt[e]._config;
                    else if (null != t.parentLocale)
                        if (null != dt[t.parentLocale]) r = dt[t.parentLocale]._config;
                        else { if (null == (n = lt(t.parentLocale))) return _t[t.parentLocale] || (_t[t.parentLocale] = []), _t[t.parentLocale].push({ name: e, config: t }), null;
                            r = n._config } return dt[e] = new x(O(r, t)), _t[e] && _t[e].forEach(function(e) { ct(e.name, e.config) }), mt(e), dt[e] } return delete dt[e], null }

            function ht(e) { var t; if (e && e._locale && e._locale._abbr && (e = e._locale._abbr), !e) return st; if (!s(e)) { if (t = lt(e)) return t;
                    e = [e] } return function(e) { for (var t, n, r, a, s = 0; s < e.length;) { for (a = ut(e[s]).split("-"), t = a.length, n = (n = ut(e[s + 1])) ? n.split("-") : null; t > 0;) { if (r = lt(a.slice(0, t).join("-"))) return r; if (n && n.length >= t && D(a, n, !0) >= t - 1) break;
                            t-- } s++ } return st }(e) }

            function ft(e) { var t, n = e._a; return n && -2 === h(e).overflow && (t = n[Le] < 0 || n[Le] > 11 ? Le : n[Ye] < 1 || n[Ye] > Ee(n[pe], n[Le]) ? Ye : n[ge] < 0 || n[ge] > 24 || 24 === n[ge] && (0 !== n[ke] || 0 !== n[ve] || 0 !== n[De]) ? ge : n[ke] < 0 || n[ke] > 59 ? ke : n[ve] < 0 || n[ve] > 59 ? ve : n[De] < 0 || n[De] > 999 ? De : -1, h(e)._overflowDayOfYear && (t < pe || t > Ye) && (t = Ye), h(e)._overflowWeeks && -1 === t && (t = Te), h(e)._overflowWeekday && -1 === t && (t = we), h(e).overflow = t), e }

            function Mt(e, t, n) { return null != e ? e : null != t ? t : n }

            function yt(e) { var t, n, r, s, i, o = []; if (!e._d) { for (r = function(e) { var t = new Date(a.now()); return e._useUTC ? [t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate()] : [t.getFullYear(), t.getMonth(), t.getDate()] }(e), e._w && null == e._a[Ye] && null == e._a[Le] && function(e) { var t, n, r, a, s, i, o, d; if (null != (t = e._w).GG || null != t.W || null != t.E) s = 1, i = 4, n = Mt(t.GG, e._a[pe], Be(xt(), 1, 4).year), r = Mt(t.W, 1), ((a = Mt(t.E, 1)) < 1 || a > 7) && (d = !0);
                            else { s = e._locale._week.dow, i = e._locale._week.doy; var _ = Be(xt(), s, i);
                                n = Mt(t.gg, e._a[pe], _.year), r = Mt(t.w, _.week), null != t.d ? ((a = t.d) < 0 || a > 6) && (d = !0) : null != t.e ? (a = t.e + s, (t.e < 0 || t.e > 6) && (d = !0)) : a = s } r < 1 || r > Ve(n, s, i) ? h(e)._overflowWeeks = !0 : null != d ? h(e)._overflowWeekday = !0 : (o = Ue(n, r, a, s, i), e._a[pe] = o.year, e._dayOfYear = o.dayOfYear) }(e), null != e._dayOfYear && (i = Mt(e._a[pe], r[pe]), (e._dayOfYear > be(i) || 0 === e._dayOfYear) && (h(e)._overflowDayOfYear = !0), n = Je(i, 0, e._dayOfYear), e._a[Le] = n.getUTCMonth(), e._a[Ye] = n.getUTCDate()), t = 0; t < 3 && null == e._a[t]; ++t) e._a[t] = o[t] = r[t]; for (; t < 7; t++) e._a[t] = o[t] = null == e._a[t] ? 2 === t ? 1 : 0 : e._a[t];
                    24 === e._a[ge] && 0 === e._a[ke] && 0 === e._a[ve] && 0 === e._a[De] && (e._nextDay = !0, e._a[ge] = 0), e._d = (e._useUTC ? Je : function(e, t, n, r, a, s, i) { var o; return e < 100 && e >= 0 ? (o = new Date(e + 400, t, n, r, a, s, i), isFinite(o.getFullYear()) && o.setFullYear(e)) : o = new Date(e, t, n, r, a, s, i), o }).apply(null, o), s = e._useUTC ? e._d.getUTCDay() : e._d.getDay(), null != e._tzm && e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), e._nextDay && (e._a[ge] = 24), e._w && void 0 !== e._w.d && e._w.d !== s && (h(e).weekdayMismatch = !0) } } var pt = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                Lt = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/,
                Yt = /Z|[+-]\d\d(?::?\d\d)?/,
                gt = [
                    ["YYYYYY-MM-DD", /[+-]\d{6}-\d\d-\d\d/],
                    ["YYYY-MM-DD", /\d{4}-\d\d-\d\d/],
                    ["GGGG-[W]WW-E", /\d{4}-W\d\d-\d/],
                    ["GGGG-[W]WW", /\d{4}-W\d\d/, !1],
                    ["YYYY-DDD", /\d{4}-\d{3}/],
                    ["YYYY-MM", /\d{4}-\d\d/, !1],
                    ["YYYYYYMMDD", /[+-]\d{10}/],
                    ["YYYYMMDD", /\d{8}/],
                    ["GGGG[W]WWE", /\d{4}W\d{3}/],
                    ["GGGG[W]WW", /\d{4}W\d{2}/, !1],
                    ["YYYYDDD", /\d{7}/]
                ],
                kt = [
                    ["HH:mm:ss.SSSS", /\d\d:\d\d:\d\d\.\d+/],
                    ["HH:mm:ss,SSSS", /\d\d:\d\d:\d\d,\d+/],
                    ["HH:mm:ss", /\d\d:\d\d:\d\d/],
                    ["HH:mm", /\d\d:\d\d/],
                    ["HHmmss.SSSS", /\d\d\d\d\d\d\.\d+/],
                    ["HHmmss,SSSS", /\d\d\d\d\d\d,\d+/],
                    ["HHmmss", /\d\d\d\d\d\d/],
                    ["HHmm", /\d\d\d\d/],
                    ["HH", /\d\d/]
                ],
                vt = /^\/?Date\((\-?\d+)/i;

            function Dt(e) { var t, n, r, a, s, i, o = e._i,
                    d = pt.exec(o) || Lt.exec(o); if (d) { for (h(e).iso = !0, t = 0, n = gt.length; t < n; t++)
                        if (gt[t][1].exec(d[1])) { a = gt[t][0], r = !1 !== gt[t][2]; break } if (null == a) return void(e._isValid = !1); if (d[3]) { for (t = 0, n = kt.length; t < n; t++)
                            if (kt[t][1].exec(d[3])) { s = (d[2] || " ") + kt[t][0]; break } if (null == s) return void(e._isValid = !1) } if (!r && null != s) return void(e._isValid = !1); if (d[4]) { if (!Yt.exec(d[4])) return void(e._isValid = !1);
                        i = "Z" } e._f = a + (s || "") + (i || ""), jt(e) } else e._isValid = !1 } var Tt = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;

            function wt(e, t, n, r, a, s) { var i = [function(e) { var t = parseInt(e, 10); return t <= 49 ? 2e3 + t : t <= 999 ? 1900 + t : t }(e), Fe.indexOf(t), parseInt(n, 10), parseInt(r, 10), parseInt(a, 10)]; return s && i.push(parseInt(s, 10)), i } var bt = { UT: 0, GMT: 0, EDT: -240, EST: -300, CDT: -300, CST: -360, MDT: -360, MST: -420, PDT: -420, PST: -480 };

            function St(e) { var t = Tt.exec(function(e) { return e.replace(/\([^)]*\)|[\n\t]/g, " ").replace(/(\s\s+)/g, " ").replace(/^\s\s*/, "").replace(/\s\s*$/, "") }(e._i)); if (t) { var n = wt(t[4], t[3], t[2], t[5], t[6], t[7]); if (! function(e, t, n) { if (e) { var r = Ke.indexOf(e),
                                    a = new Date(t[0], t[1], t[2]).getDay(); if (r !== a) return h(n).weekdayMismatch = !0, n._isValid = !1, !1 } return !0 }(t[1], n, e)) return;
                    e._a = n, e._tzm = function(e, t, n) { if (e) return bt[e]; if (t) return 0; var r = parseInt(n, 10),
                            a = r % 100,
                            s = (r - a) / 100; return 60 * s + a }(t[8], t[9], t[10]), e._d = Je.apply(null, e._a), e._d.setUTCMinutes(e._d.getUTCMinutes() - e._tzm), h(e).rfc2822 = !0 } else e._isValid = !1 }

            function jt(e) { if (e._f !== a.ISO_8601)
                    if (e._f !== a.RFC_2822) { e._a = [], h(e).empty = !0; var t, n, r, s, i, o = "" + e._i,
                            d = o.length,
                            _ = 0; for (r = V(e._f, e._locale).match(N) || [], t = 0; t < r.length; t++) s = r[t], (n = (o.match(me(s, e)) || [])[0]) && ((i = o.substr(0, o.indexOf(n))).length > 0 && h(e).unusedInput.push(i), o = o.slice(o.indexOf(n) + n.length), _ += n.length), J[s] ? (n ? h(e).empty = !1 : h(e).unusedTokens.push(s), ye(s, n, e)) : e._strict && !n && h(e).unusedTokens.push(s);
                        h(e).charsLeftOver = d - _, o.length > 0 && h(e).unusedInput.push(o), e._a[ge] <= 12 && !0 === h(e).bigHour && e._a[ge] > 0 && (h(e).bigHour = void 0), h(e).parsedDateParts = e._a.slice(0), h(e).meridiem = e._meridiem, e._a[ge] = function(e, t, n) { var r; return null == n ? t : null != e.meridiemHour ? e.meridiemHour(t, n) : null != e.isPM ? ((r = e.isPM(n)) && t < 12 && (t += 12), r || 12 !== t || (t = 0), t) : t }(e._locale, e._a[ge], e._meridiem), yt(e), ft(e) } else St(e);
                else Dt(e) }

            function Ht(e) { var t = e._i,
                    n = e._f; return e._locale = e._locale || ht(e._l), null === t || void 0 === n && "" === t ? M({ nullInput: !0 }) : ("string" == typeof t && (e._i = t = e._locale.preparse(t)), g(t) ? new Y(ft(t)) : (_(t) ? e._d = t : s(n) ? function(e) { var t, n, r, a, s; if (0 === e._f.length) return h(e).invalidFormat = !0, void(e._d = new Date(NaN)); for (a = 0; a < e._f.length; a++) s = 0, t = p({}, e), null != e._useUTC && (t._useUTC = e._useUTC), t._f = e._f[a], jt(t), f(t) && (s += h(t).charsLeftOver, s += 10 * h(t).unusedTokens.length, h(t).score = s, (null == r || s < r) && (r = s, n = t));
                    m(e, n || t) }(e) : n ? jt(e) : function(e) { var t = e._i;
                    o(t) ? e._d = new Date(a.now()) : _(t) ? e._d = new Date(t.valueOf()) : "string" == typeof t ? function(e) { var t = vt.exec(e._i);
                        null === t ? (Dt(e), !1 === e._isValid && (delete e._isValid, St(e), !1 === e._isValid && (delete e._isValid, a.createFromInputFallback(e)))) : e._d = new Date(+t[1]) }(e) : s(t) ? (e._a = u(t.slice(0), function(e) { return parseInt(e, 10) }), yt(e)) : i(t) ? function(e) { if (!e._d) { var t = W(e._i);
                            e._a = u([t.year, t.month, t.day || t.date, t.hour, t.minute, t.second, t.millisecond], function(e) { return e && parseInt(e, 10) }), yt(e) } }(e) : d(t) ? e._d = new Date(t) : a.createFromInputFallback(e) }(e), f(e) || (e._d = null), e)) }

            function Ot(e, t, n, r, a) { var o = {}; return !0 !== n && !1 !== n || (r = n, n = void 0), (i(e) && function(e) { if (Object.getOwnPropertyNames) return 0 === Object.getOwnPropertyNames(e).length; var t; for (t in e)
                            if (e.hasOwnProperty(t)) return !1; return !0 }(e) || s(e) && 0 === e.length) && (e = void 0), o._isAMomentObject = !0, o._useUTC = o._isUTC = a, o._l = n, o._i = e, o._f = t, o._strict = r,
                    function(e) { var t = new Y(ft(Ht(e))); return t._nextDay && (t.add(1, "d"), t._nextDay = void 0), t }(o) }

            function xt(e, t, n, r) { return Ot(e, t, n, r, !1) } a.createFromInputFallback = w("value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are discouraged and will be removed in an upcoming major release. Please refer to http://momentjs.com/guides/#/warnings/js-date/ for more info.", function(e) { e._d = new Date(e._i + (e._useUTC ? " UTC" : "")) }), a.ISO_8601 = function() {}, a.RFC_2822 = function() {}; var Pt = w("moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var e = xt.apply(null, arguments); return this.isValid() && e.isValid() ? e < this ? this : e : M() }),
                Et = w("moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/", function() { var e = xt.apply(null, arguments); return this.isValid() && e.isValid() ? e > this ? this : e : M() });

            function At(e, t) { var n, r; if (1 === t.length && s(t[0]) && (t = t[0]), !t.length) return xt(); for (n = t[0], r = 1; r < t.length; ++r) t[r].isValid() && !t[r][e](n) || (n = t[r]); return n } var Wt = ["year", "quarter", "month", "week", "day", "hour", "minute", "second", "millisecond"];

            function Ft(e) { var t = W(e),
                    n = t.year || 0,
                    r = t.quarter || 0,
                    a = t.month || 0,
                    s = t.week || t.isoWeek || 0,
                    i = t.day || 0,
                    o = t.hour || 0,
                    d = t.minute || 0,
                    _ = t.second || 0,
                    u = t.millisecond || 0;
                this._isValid = function(e) { for (var t in e)
                        if (-1 === je.call(Wt, t) || null != e[t] && isNaN(e[t])) return !1; for (var n = !1, r = 0; r < Wt.length; ++r)
                        if (e[Wt[r]]) { if (n) return !1;
                            parseFloat(e[Wt[r]]) !== v(e[Wt[r]]) && (n = !0) } return !0 }(t), this._milliseconds = +u + 1e3 * _ + 6e4 * d + 1e3 * o * 60 * 60, this._days = +i + 7 * s, this._months = +a + 3 * r + 12 * n, this._data = {}, this._locale = ht(), this._bubble() }

            function It(e) { return e instanceof Ft }

            function Ct(e) { return e < 0 ? -1 * Math.round(-1 * e) : Math.round(e) }

            function Nt(e, t) { G(e, 0, 0, function() { var e = this.utcOffset(),
                        n = "+"; return e < 0 && (e = -e, n = "-"), n + C(~~(e / 60), 2) + t + C(~~e % 60, 2) }) } Nt("Z", ":"), Nt("ZZ", ""), le("Z", de), le("ZZ", de), fe(["Z", "ZZ"], function(e, t, n) { n._useUTC = !0, n._tzm = Rt(de, e) }); var zt = /([\+\-]|\d\d)/gi;

            function Rt(e, t) { var n = (t || "").match(e); if (null === n) return null; var r = n[n.length - 1] || [],
                    a = (r + "").match(zt) || ["-", 0, 0],
                    s = 60 * a[1] + v(a[2]); return 0 === s ? 0 : "+" === a[0] ? s : -s }

            function Jt(e, t) { var n, r; return t._isUTC ? (n = t.clone(), r = (g(e) || _(e) ? e.valueOf() : xt(e).valueOf()) - n.valueOf(), n._d.setTime(n._d.valueOf() + r), a.updateOffset(n, !1), n) : xt(e).local() }

            function Gt(e) { return 15 * -Math.round(e._d.getTimezoneOffset() / 15) }

            function Ut() { return !!this.isValid() && this._isUTC && 0 === this._offset } a.updateOffset = function() {}; var Bt = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/,
                Vt = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;

            function $t(e, t) { var n, r, a, s = e,
                    i = null; return It(e) ? s = { ms: e._milliseconds, d: e._days, M: e._months } : d(e) ? (s = {}, t ? s[t] = e : s.milliseconds = e) : (i = Bt.exec(e)) ? (n = "-" === i[1] ? -1 : 1, s = { y: 0, d: v(i[Ye]) * n, h: v(i[ge]) * n, m: v(i[ke]) * n, s: v(i[ve]) * n, ms: v(Ct(1e3 * i[De])) * n }) : (i = Vt.exec(e)) ? (n = "-" === i[1] ? -1 : 1, s = { y: qt(i[2], n), M: qt(i[3], n), w: qt(i[4], n), d: qt(i[5], n), h: qt(i[6], n), m: qt(i[7], n), s: qt(i[8], n) }) : null == s ? s = {} : "object" == typeof s && ("from" in s || "to" in s) && (a = function(e, t) { var n; return e.isValid() && t.isValid() ? (t = Jt(t, e), e.isBefore(t) ? n = Kt(e, t) : ((n = Kt(t, e)).milliseconds = -n.milliseconds, n.months = -n.months), n) : { milliseconds: 0, months: 0 } }(xt(s.from), xt(s.to)), (s = {}).ms = a.milliseconds, s.M = a.months), r = new Ft(s), It(e) && l(e, "_locale") && (r._locale = e._locale), r }

            function qt(e, t) { var n = e && parseFloat(e.replace(",", ".")); return (isNaN(n) ? 0 : n) * t }

            function Kt(e, t) { var n = {}; return n.months = t.month() - e.month() + 12 * (t.year() - e.year()), e.clone().add(n.months, "M").isAfter(t) && --n.months, n.milliseconds = +t - +e.clone().add(n.months, "M"), n }

            function Zt(e, t) { return function(n, r) { var a; return null === r || isNaN(+r) || (j(t, "moment()." + t + "(period, number) is deprecated. Please use moment()." + t + "(number, period). See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info."), a = n, n = r, r = a), Qt(this, $t(n = "string" == typeof n ? +n : n, r), e), this } }

            function Qt(e, t, n, r) { var s = t._milliseconds,
                    i = Ct(t._days),
                    o = Ct(t._months);
                e.isValid() && (r = null == r || r, o && Ie(e, xe(e, "Month") + o * n), i && Pe(e, "Date", xe(e, "Date") + i * n), s && e._d.setTime(e._d.valueOf() + s * n), r && a.updateOffset(e, i || o)) } $t.fn = Ft.prototype, $t.invalid = function() { return $t(NaN) }; var Xt = Zt(1, "add"),
                en = Zt(-1, "subtract");

            function tn(e, t) { var n, r, a = 12 * (t.year() - e.year()) + (t.month() - e.month()),
                    s = e.clone().add(a, "months"); return t - s < 0 ? (n = e.clone().add(a - 1, "months"), r = (t - s) / (s - n)) : (n = e.clone().add(a + 1, "months"), r = (t - s) / (n - s)), -(a + r) || 0 }

            function nn(e) { var t; return void 0 === e ? this._locale._abbr : (null != (t = ht(e)) && (this._locale = t), this) } a.defaultFormat = "YYYY-MM-DDTHH:mm:ssZ", a.defaultFormatUtc = "YYYY-MM-DDTHH:mm:ss[Z]"; var rn = w("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function(e) { return void 0 === e ? this.localeData() : this.locale(e) });

            function an() { return this._locale } var sn = 1e3,
                on = 60 * sn,
                dn = 60 * on,
                _n = 3506328 * dn;

            function un(e, t) { return (e % t + t) % t }

            function ln(e, t, n) { return e < 100 && e >= 0 ? new Date(e + 400, t, n) - _n : new Date(e, t, n).valueOf() }

            function mn(e, t, n) { return e < 100 && e >= 0 ? Date.UTC(e + 400, t, n) - _n : Date.UTC(e, t, n) }

            function cn(e, t) { G(0, [e, e.length], 0, t) }

            function hn(e, t, n, r, a) { var s; return null == e ? Be(this, r, a).year : (s = Ve(e, r, a), t > s && (t = s), function(e, t, n, r, a) { var s = Ue(e, t, n, r, a),
                        i = Je(s.year, 0, s.dayOfYear); return this.year(i.getUTCFullYear()), this.month(i.getUTCMonth()), this.date(i.getUTCDate()), this }.call(this, e, t, n, r, a)) } G(0, ["gg", 2], 0, function() { return this.weekYear() % 100 }), G(0, ["GG", 2], 0, function() { return this.isoWeekYear() % 100 }), cn("gggg", "weekYear"), cn("ggggg", "weekYear"), cn("GGGG", "isoWeekYear"), cn("GGGGG", "isoWeekYear"), E("weekYear", "gg"), E("isoWeekYear", "GG"), I("weekYear", 1), I("isoWeekYear", 1), le("G", ie), le("g", ie), le("GG", X, q), le("gg", X, q), le("GGGG", re, Z), le("gggg", re, Z), le("GGGGG", ae, Q), le("ggggg", ae, Q), Me(["gggg", "ggggg", "GGGG", "GGGGG"], function(e, t, n, r) { t[r.substr(0, 2)] = v(e) }), Me(["gg", "GG"], function(e, t, n, r) { t[r] = a.parseTwoDigitYear(e) }), G("Q", 0, "Qo", "quarter"), E("quarter", "Q"), I("quarter", 7), le("Q", $), fe("Q", function(e, t) { t[Le] = 3 * (v(e) - 1) }), G("D", ["DD", 2], "Do", "date"), E("date", "D"), I("date", 9), le("D", X), le("DD", X, q), le("Do", function(e, t) { return e ? t._dayOfMonthOrdinalParse || t._ordinalParse : t._dayOfMonthOrdinalParseLenient }), fe(["D", "DD"], Ye), fe("Do", function(e, t) { t[Ye] = v(e.match(X)[0]) }); var fn = Oe("Date", !0);
            G("DDD", ["DDDD", 3], "DDDo", "dayOfYear"), E("dayOfYear", "DDD"), I("dayOfYear", 4), le("DDD", ne), le("DDDD", K), fe(["DDD", "DDDD"], function(e, t, n) { n._dayOfYear = v(e) }), G("m", ["mm", 2], 0, "minute"), E("minute", "m"), I("minute", 14), le("m", X), le("mm", X, q), fe(["m", "mm"], ke); var Mn = Oe("Minutes", !1);
            G("s", ["ss", 2], 0, "second"), E("second", "s"), I("second", 15), le("s", X), le("ss", X, q), fe(["s", "ss"], ve); var yn, pn = Oe("Seconds", !1); for (G("S", 0, 0, function() { return ~~(this.millisecond() / 100) }), G(0, ["SS", 2], 0, function() { return ~~(this.millisecond() / 10) }), G(0, ["SSS", 3], 0, "millisecond"), G(0, ["SSSS", 4], 0, function() { return 10 * this.millisecond() }), G(0, ["SSSSS", 5], 0, function() { return 100 * this.millisecond() }), G(0, ["SSSSSS", 6], 0, function() { return 1e3 * this.millisecond() }), G(0, ["SSSSSSS", 7], 0, function() { return 1e4 * this.millisecond() }), G(0, ["SSSSSSSS", 8], 0, function() { return 1e5 * this.millisecond() }), G(0, ["SSSSSSSSS", 9], 0, function() { return 1e6 * this.millisecond() }), E("millisecond", "ms"), I("millisecond", 16), le("S", ne, $), le("SS", ne, q), le("SSS", ne, K), yn = "SSSS"; yn.length <= 9; yn += "S") le(yn, se);

            function Ln(e, t) { t[De] = v(1e3 * ("0." + e)) } for (yn = "S"; yn.length <= 9; yn += "S") fe(yn, Ln); var Yn = Oe("Milliseconds", !1);
            G("z", 0, 0, "zoneAbbr"), G("zz", 0, 0, "zoneName"); var gn = Y.prototype;

            function kn(e) { return e } gn.add = Xt, gn.calendar = function(e, t) { var n = e || xt(),
                    r = Jt(n, this).startOf("day"),
                    s = a.calendarFormat(this, r) || "sameElse",
                    i = t && (H(t[s]) ? t[s].call(this, n) : t[s]); return this.format(i || this.localeData().calendar(s, this, xt(n))) }, gn.clone = function() { return new Y(this) }, gn.diff = function(e, t, n) { var r, a, s; if (!this.isValid()) return NaN; if (!(r = Jt(e, this)).isValid()) return NaN; switch (a = 6e4 * (r.utcOffset() - this.utcOffset()), t = A(t)) {
                    case "year":
                        s = tn(this, r) / 12; break;
                    case "month":
                        s = tn(this, r); break;
                    case "quarter":
                        s = tn(this, r) / 3; break;
                    case "second":
                        s = (this - r) / 1e3; break;
                    case "minute":
                        s = (this - r) / 6e4; break;
                    case "hour":
                        s = (this - r) / 36e5; break;
                    case "day":
                        s = (this - r - a) / 864e5; break;
                    case "week":
                        s = (this - r - a) / 6048e5; break;
                    default:
                        s = this - r } return n ? s : k(s) }, gn.endOf = function(e) { var t; if (void 0 === (e = A(e)) || "millisecond" === e || !this.isValid()) return this; var n = this._isUTC ? mn : ln; switch (e) {
                    case "year":
                        t = n(this.year() + 1, 0, 1) - 1; break;
                    case "quarter":
                        t = n(this.year(), this.month() - this.month() % 3 + 3, 1) - 1; break;
                    case "month":
                        t = n(this.year(), this.month() + 1, 1) - 1; break;
                    case "week":
                        t = n(this.year(), this.month(), this.date() - this.weekday() + 7) - 1; break;
                    case "isoWeek":
                        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1; break;
                    case "day":
                    case "date":
                        t = n(this.year(), this.month(), this.date() + 1) - 1; break;
                    case "hour":
                        t = this._d.valueOf(), t += dn - un(t + (this._isUTC ? 0 : this.utcOffset() * on), dn) - 1; break;
                    case "minute":
                        t = this._d.valueOf(), t += on - un(t, on) - 1; break;
                    case "second":
                        t = this._d.valueOf(), t += sn - un(t, sn) - 1 } return this._d.setTime(t), a.updateOffset(this, !0), this }, gn.format = function(e) { e || (e = this.isUtc() ? a.defaultFormatUtc : a.defaultFormat); var t = B(this, e); return this.localeData().postformat(t) }, gn.from = function(e, t) { return this.isValid() && (g(e) && e.isValid() || xt(e).isValid()) ? $t({ to: this, from: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }, gn.fromNow = function(e) { return this.from(xt(), e) }, gn.to = function(e, t) { return this.isValid() && (g(e) && e.isValid() || xt(e).isValid()) ? $t({ from: this, to: e }).locale(this.locale()).humanize(!t) : this.localeData().invalidDate() }, gn.toNow = function(e) { return this.to(xt(), e) }, gn.get = function(e) { return H(this[e = A(e)]) ? this[e]() : this }, gn.invalidAt = function() { return h(this).overflow }, gn.isAfter = function(e, t) { var n = g(e) ? e : xt(e); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = A(t) || "millisecond") ? this.valueOf() > n.valueOf() : n.valueOf() < this.clone().startOf(t).valueOf()) }, gn.isBefore = function(e, t) { var n = g(e) ? e : xt(e); return !(!this.isValid() || !n.isValid()) && ("millisecond" === (t = A(t) || "millisecond") ? this.valueOf() < n.valueOf() : this.clone().endOf(t).valueOf() < n.valueOf()) }, gn.isBetween = function(e, t, n, r) { var a = g(e) ? e : xt(e),
                    s = g(t) ? t : xt(t); return !!(this.isValid() && a.isValid() && s.isValid()) && (("(" === (r = r || "()")[0] ? this.isAfter(a, n) : !this.isBefore(a, n)) && (")" === r[1] ? this.isBefore(s, n) : !this.isAfter(s, n))) }, gn.isSame = function(e, t) { var n, r = g(e) ? e : xt(e); return !(!this.isValid() || !r.isValid()) && ("millisecond" === (t = A(t) || "millisecond") ? this.valueOf() === r.valueOf() : (n = r.valueOf(), this.clone().startOf(t).valueOf() <= n && n <= this.clone().endOf(t).valueOf())) }, gn.isSameOrAfter = function(e, t) { return this.isSame(e, t) || this.isAfter(e, t) }, gn.isSameOrBefore = function(e, t) { return this.isSame(e, t) || this.isBefore(e, t) }, gn.isValid = function() { return f(this) }, gn.lang = rn, gn.locale = nn, gn.localeData = an, gn.max = Et, gn.min = Pt, gn.parsingFlags = function() { return m({}, h(this)) }, gn.set = function(e, t) { if ("object" == typeof e)
                    for (var n = function(e) { var t = []; for (var n in e) t.push({ unit: n, priority: F[n] }); return t.sort(function(e, t) { return e.priority - t.priority }), t }(e = W(e)), r = 0; r < n.length; r++) this[n[r].unit](e[n[r].unit]);
                else if (H(this[e = A(e)])) return this[e](t); return this }, gn.startOf = function(e) { var t; if (void 0 === (e = A(e)) || "millisecond" === e || !this.isValid()) return this; var n = this._isUTC ? mn : ln; switch (e) {
                    case "year":
                        t = n(this.year(), 0, 1); break;
                    case "quarter":
                        t = n(this.year(), this.month() - this.month() % 3, 1); break;
                    case "month":
                        t = n(this.year(), this.month(), 1); break;
                    case "week":
                        t = n(this.year(), this.month(), this.date() - this.weekday()); break;
                    case "isoWeek":
                        t = n(this.year(), this.month(), this.date() - (this.isoWeekday() - 1)); break;
                    case "day":
                    case "date":
                        t = n(this.year(), this.month(), this.date()); break;
                    case "hour":
                        t = this._d.valueOf(), t -= un(t + (this._isUTC ? 0 : this.utcOffset() * on), dn); break;
                    case "minute":
                        t = this._d.valueOf(), t -= un(t, on); break;
                    case "second":
                        t = this._d.valueOf(), t -= un(t, sn) } return this._d.setTime(t), a.updateOffset(this, !0), this }, gn.subtract = en, gn.toArray = function() { var e = this; return [e.year(), e.month(), e.date(), e.hour(), e.minute(), e.second(), e.millisecond()] }, gn.toObject = function() { var e = this; return { years: e.year(), months: e.month(), date: e.date(), hours: e.hours(), minutes: e.minutes(), seconds: e.seconds(), milliseconds: e.milliseconds() } }, gn.toDate = function() { return new Date(this.valueOf()) }, gn.toISOString = function(e) { if (!this.isValid()) return null; var t = !0 !== e,
                    n = t ? this.clone().utc() : this; return n.year() < 0 || n.year() > 9999 ? B(n, t ? "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYYYY-MM-DD[T]HH:mm:ss.SSSZ") : H(Date.prototype.toISOString) ? t ? this.toDate().toISOString() : new Date(this.valueOf() + 60 * this.utcOffset() * 1e3).toISOString().replace("Z", B(n, "Z")) : B(n, t ? "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]" : "YYYY-MM-DD[T]HH:mm:ss.SSSZ") }, gn.inspect = function() { if (!this.isValid()) return "moment.invalid(/* " + this._i + " */)"; var e = "moment",
                    t = "";
                this.isLocal() || (e = 0 === this.utcOffset() ? "moment.utc" : "moment.parseZone", t = "Z"); var n = "[" + e + '("]',
                    r = 0 <= this.year() && this.year() <= 9999 ? "YYYY" : "YYYYYY",
                    a = t + '[")]'; return this.format(n + r + "-MM-DD[T]HH:mm:ss.SSS" + a) }, gn.toJSON = function() { return this.isValid() ? this.toISOString() : null }, gn.toString = function() { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }, gn.unix = function() { return Math.floor(this.valueOf() / 1e3) }, gn.valueOf = function() { return this._d.valueOf() - 6e4 * (this._offset || 0) }, gn.creationData = function() { return { input: this._i, format: this._f, locale: this._locale, isUTC: this._isUTC, strict: this._strict } }, gn.year = He, gn.isLeapYear = function() { return Se(this.year()) }, gn.weekYear = function(e) { return hn.call(this, e, this.week(), this.weekday(), this.localeData()._week.dow, this.localeData()._week.doy) }, gn.isoWeekYear = function(e) { return hn.call(this, e, this.isoWeek(), this.isoWeekday(), 1, 4) }, gn.quarter = gn.quarters = function(e) { return null == e ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (e - 1) + this.month() % 3) }, gn.month = Ce, gn.daysInMonth = function() { return Ee(this.year(), this.month()) }, gn.week = gn.weeks = function(e) { var t = this.localeData().week(this); return null == e ? t : this.add(7 * (e - t), "d") }, gn.isoWeek = gn.isoWeeks = function(e) { var t = Be(this, 1, 4).week; return null == e ? t : this.add(7 * (e - t), "d") }, gn.weeksInYear = function() { var e = this.localeData()._week; return Ve(this.year(), e.dow, e.doy) }, gn.isoWeeksInYear = function() { return Ve(this.year(), 1, 4) }, gn.date = fn, gn.day = gn.days = function(e) { if (!this.isValid()) return null != e ? this : NaN; var t = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != e ? (e = function(e, t) { return "string" != typeof e ? e : isNaN(e) ? "number" == typeof(e = t.weekdaysParse(e)) ? e : null : parseInt(e, 10) }(e, this.localeData()), this.add(e - t, "d")) : t }, gn.weekday = function(e) { if (!this.isValid()) return null != e ? this : NaN; var t = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == e ? t : this.add(e - t, "d") }, gn.isoWeekday = function(e) { if (!this.isValid()) return null != e ? this : NaN; if (null != e) { var t = function(e, t) { return "string" == typeof e ? t.weekdaysParse(e) % 7 || 7 : isNaN(e) ? null : e }(e, this.localeData()); return this.day(this.day() % 7 ? t : t - 7) } return this.day() || 7 }, gn.dayOfYear = function(e) { var t = Math.round((this.clone().startOf("day") - this.clone().startOf("year")) / 864e5) + 1; return null == e ? t : this.add(e - t, "d") }, gn.hour = gn.hours = it, gn.minute = gn.minutes = Mn, gn.second = gn.seconds = pn, gn.millisecond = gn.milliseconds = Yn, gn.utcOffset = function(e, t, n) { var r, s = this._offset || 0; if (!this.isValid()) return null != e ? this : NaN; if (null != e) { if ("string" == typeof e) { if (null === (e = Rt(de, e))) return this } else Math.abs(e) < 16 && !n && (e *= 60); return !this._isUTC && t && (r = Gt(this)), this._offset = e, this._isUTC = !0, null != r && this.add(r, "m"), s !== e && (!t || this._changeInProgress ? Qt(this, $t(e - s, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, a.updateOffset(this, !0), this._changeInProgress = null)), this } return this._isUTC ? s : Gt(this) }, gn.utc = function(e) { return this.utcOffset(0, e) }, gn.local = function(e) { return this._isUTC && (this.utcOffset(0, e), this._isUTC = !1, e && this.subtract(Gt(this), "m")), this }, gn.parseZone = function() { if (null != this._tzm) this.utcOffset(this._tzm, !1, !0);
                else if ("string" == typeof this._i) { var e = Rt(oe, this._i);
                    null != e ? this.utcOffset(e) : this.utcOffset(0, !0) } return this }, gn.hasAlignedHourOffset = function(e) { return !!this.isValid() && (e = e ? xt(e).utcOffset() : 0, (this.utcOffset() - e) % 60 == 0) }, gn.isDST = function() { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }, gn.isLocal = function() { return !!this.isValid() && !this._isUTC }, gn.isUtcOffset = function() { return !!this.isValid() && this._isUTC }, gn.isUtc = Ut, gn.isUTC = Ut, gn.zoneAbbr = function() { return this._isUTC ? "UTC" : "" }, gn.zoneName = function() { return this._isUTC ? "Coordinated Universal Time" : "" }, gn.dates = w("dates accessor is deprecated. Use date instead.", fn), gn.months = w("months accessor is deprecated. Use month instead", Ce), gn.years = w("years accessor is deprecated. Use year instead", He), gn.zone = w("moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/", function(e, t) { return null != e ? ("string" != typeof e && (e = -e), this.utcOffset(e, t), this) : -this.utcOffset() }), gn.isDSTShifted = w("isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information", function() { if (!o(this._isDSTShifted)) return this._isDSTShifted; var e = {}; if (p(e, this), (e = Ht(e))._a) { var t = e._isUTC ? c(e._a) : xt(e._a);
                    this._isDSTShifted = this.isValid() && D(e._a, t.toArray()) > 0 } else this._isDSTShifted = !1; return this._isDSTShifted }); var vn = x.prototype;

            function Dn(e, t, n, r) { var a = ht(),
                    s = c().set(r, t); return a[n](s, e) }

            function Tn(e, t, n) { if (d(e) && (t = e, e = void 0), e = e || "", null != t) return Dn(e, t, n, "month"); var r, a = []; for (r = 0; r < 12; r++) a[r] = Dn(e, r, n, "month"); return a }

            function wn(e, t, n, r) { "boolean" == typeof e ? (d(t) && (n = t, t = void 0), t = t || "") : (n = t = e, e = !1, d(t) && (n = t, t = void 0), t = t || ""); var a, s = ht(),
                    i = e ? s._week.dow : 0; if (null != n) return Dn(t, (n + i) % 7, r, "day"); var o = []; for (a = 0; a < 7; a++) o[a] = Dn(t, (a + i) % 7, r, "day"); return o } vn.calendar = function(e, t, n) { var r = this._calendar[e] || this._calendar.sameElse; return H(r) ? r.call(t, n) : r }, vn.longDateFormat = function(e) { var t = this._longDateFormat[e],
                    n = this._longDateFormat[e.toUpperCase()]; return t || !n ? t : (this._longDateFormat[e] = n.replace(/MMMM|MM|DD|dddd/g, function(e) { return e.slice(1) }), this._longDateFormat[e]) }, vn.invalidDate = function() { return this._invalidDate }, vn.ordinal = function(e) { return this._ordinal.replace("%d", e) }, vn.preparse = kn, vn.postformat = kn, vn.relativeTime = function(e, t, n, r) { var a = this._relativeTime[n]; return H(a) ? a(e, t, n, r) : a.replace(/%d/i, e) }, vn.pastFuture = function(e, t) { var n = this._relativeTime[e > 0 ? "future" : "past"]; return H(n) ? n(t) : n.replace(/%s/i, t) }, vn.set = function(e) { var t, n; for (n in e) H(t = e[n]) ? this[n] = t : this["_" + n] = t;
                this._config = e, this._dayOfMonthOrdinalParseLenient = new RegExp((this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) + "|" + /\d{1,2}/.source) }, vn.months = function(e, t) { return e ? s(this._months) ? this._months[e.month()] : this._months[(this._months.isFormat || Ae).test(t) ? "format" : "standalone"][e.month()] : s(this._months) ? this._months : this._months.standalone }, vn.monthsShort = function(e, t) { return e ? s(this._monthsShort) ? this._monthsShort[e.month()] : this._monthsShort[Ae.test(t) ? "format" : "standalone"][e.month()] : s(this._monthsShort) ? this._monthsShort : this._monthsShort.standalone }, vn.monthsParse = function(e, t, n) { var r, a, s; if (this._monthsParseExact) return function(e, t, n) { var r, a, s, i = e.toLocaleLowerCase(); if (!this._monthsParse)
                        for (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = [], r = 0; r < 12; ++r) s = c([2e3, r]), this._shortMonthsParse[r] = this.monthsShort(s, "").toLocaleLowerCase(), this._longMonthsParse[r] = this.months(s, "").toLocaleLowerCase(); return n ? "MMM" === t ? -1 !== (a = je.call(this._shortMonthsParse, i)) ? a : null : -1 !== (a = je.call(this._longMonthsParse, i)) ? a : null : "MMM" === t ? -1 !== (a = je.call(this._shortMonthsParse, i)) ? a : -1 !== (a = je.call(this._longMonthsParse, i)) ? a : null : -1 !== (a = je.call(this._longMonthsParse, i)) ? a : -1 !== (a = je.call(this._shortMonthsParse, i)) ? a : null }.call(this, e, t, n); for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), r = 0; r < 12; r++) { if (a = c([2e3, r]), n && !this._longMonthsParse[r] && (this._longMonthsParse[r] = new RegExp("^" + this.months(a, "").replace(".", "") + "$", "i"), this._shortMonthsParse[r] = new RegExp("^" + this.monthsShort(a, "").replace(".", "") + "$", "i")), n || this._monthsParse[r] || (s = "^" + this.months(a, "") + "|^" + this.monthsShort(a, ""), this._monthsParse[r] = new RegExp(s.replace(".", ""), "i")), n && "MMMM" === t && this._longMonthsParse[r].test(e)) return r; if (n && "MMM" === t && this._shortMonthsParse[r].test(e)) return r; if (!n && this._monthsParse[r].test(e)) return r } }, vn.monthsRegex = function(e) { return this._monthsParseExact ? (l(this, "_monthsRegex") || Re.call(this), e ? this._monthsStrictRegex : this._monthsRegex) : (l(this, "_monthsRegex") || (this._monthsRegex = ze), this._monthsStrictRegex && e ? this._monthsStrictRegex : this._monthsRegex) }, vn.monthsShortRegex = function(e) { return this._monthsParseExact ? (l(this, "_monthsRegex") || Re.call(this), e ? this._monthsShortStrictRegex : this._monthsShortRegex) : (l(this, "_monthsShortRegex") || (this._monthsShortRegex = Ne), this._monthsShortStrictRegex && e ? this._monthsShortStrictRegex : this._monthsShortRegex) }, vn.week = function(e) { return Be(e, this._week.dow, this._week.doy).week }, vn.firstDayOfYear = function() { return this._week.doy }, vn.firstDayOfWeek = function() { return this._week.dow }, vn.weekdays = function(e, t) { var n = s(this._weekdays) ? this._weekdays : this._weekdays[e && !0 !== e && this._weekdays.isFormat.test(t) ? "format" : "standalone"]; return !0 === e ? $e(n, this._week.dow) : e ? n[e.day()] : n }, vn.weekdaysMin = function(e) { return !0 === e ? $e(this._weekdaysMin, this._week.dow) : e ? this._weekdaysMin[e.day()] : this._weekdaysMin }, vn.weekdaysShort = function(e) { return !0 === e ? $e(this._weekdaysShort, this._week.dow) : e ? this._weekdaysShort[e.day()] : this._weekdaysShort }, vn.weekdaysParse = function(e, t, n) { var r, a, s; if (this._weekdaysParseExact) return function(e, t, n) { var r, a, s, i = e.toLocaleLowerCase(); if (!this._weekdaysParse)
                        for (this._weekdaysParse = [], this._shortWeekdaysParse = [], this._minWeekdaysParse = [], r = 0; r < 7; ++r) s = c([2e3, 1]).day(r), this._minWeekdaysParse[r] = this.weekdaysMin(s, "").toLocaleLowerCase(), this._shortWeekdaysParse[r] = this.weekdaysShort(s, "").toLocaleLowerCase(), this._weekdaysParse[r] = this.weekdays(s, "").toLocaleLowerCase(); return n ? "dddd" === t ? -1 !== (a = je.call(this._weekdaysParse, i)) ? a : null : "ddd" === t ? -1 !== (a = je.call(this._shortWeekdaysParse, i)) ? a : null : -1 !== (a = je.call(this._minWeekdaysParse, i)) ? a : null : "dddd" === t ? -1 !== (a = je.call(this._weekdaysParse, i)) ? a : -1 !== (a = je.call(this._shortWeekdaysParse, i)) ? a : -1 !== (a = je.call(this._minWeekdaysParse, i)) ? a : null : "ddd" === t ? -1 !== (a = je.call(this._shortWeekdaysParse, i)) ? a : -1 !== (a = je.call(this._weekdaysParse, i)) ? a : -1 !== (a = je.call(this._minWeekdaysParse, i)) ? a : null : -1 !== (a = je.call(this._minWeekdaysParse, i)) ? a : -1 !== (a = je.call(this._weekdaysParse, i)) ? a : -1 !== (a = je.call(this._shortWeekdaysParse, i)) ? a : null }.call(this, e, t, n); for (this._weekdaysParse || (this._weekdaysParse = [], this._minWeekdaysParse = [], this._shortWeekdaysParse = [], this._fullWeekdaysParse = []), r = 0; r < 7; r++) { if (a = c([2e3, 1]).day(r), n && !this._fullWeekdaysParse[r] && (this._fullWeekdaysParse[r] = new RegExp("^" + this.weekdays(a, "").replace(".", "\\.?") + "$", "i"), this._shortWeekdaysParse[r] = new RegExp("^" + this.weekdaysShort(a, "").replace(".", "\\.?") + "$", "i"), this._minWeekdaysParse[r] = new RegExp("^" + this.weekdaysMin(a, "").replace(".", "\\.?") + "$", "i")), this._weekdaysParse[r] || (s = "^" + this.weekdays(a, "") + "|^" + this.weekdaysShort(a, "") + "|^" + this.weekdaysMin(a, ""), this._weekdaysParse[r] = new RegExp(s.replace(".", ""), "i")), n && "dddd" === t && this._fullWeekdaysParse[r].test(e)) return r; if (n && "ddd" === t && this._shortWeekdaysParse[r].test(e)) return r; if (n && "dd" === t && this._minWeekdaysParse[r].test(e)) return r; if (!n && this._weekdaysParse[r].test(e)) return r } }, vn.weekdaysRegex = function(e) { return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || tt.call(this), e ? this._weekdaysStrictRegex : this._weekdaysRegex) : (l(this, "_weekdaysRegex") || (this._weekdaysRegex = Qe), this._weekdaysStrictRegex && e ? this._weekdaysStrictRegex : this._weekdaysRegex) }, vn.weekdaysShortRegex = function(e) { return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || tt.call(this), e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) : (l(this, "_weekdaysShortRegex") || (this._weekdaysShortRegex = Xe), this._weekdaysShortStrictRegex && e ? this._weekdaysShortStrictRegex : this._weekdaysShortRegex) }, vn.weekdaysMinRegex = function(e) { return this._weekdaysParseExact ? (l(this, "_weekdaysRegex") || tt.call(this), e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) : (l(this, "_weekdaysMinRegex") || (this._weekdaysMinRegex = et), this._weekdaysMinStrictRegex && e ? this._weekdaysMinStrictRegex : this._weekdaysMinRegex) }, vn.isPM = function(e) { return "p" === (e + "").toLowerCase().charAt(0) }, vn.meridiem = function(e, t, n) { return e > 11 ? n ? "pm" : "PM" : n ? "am" : "AM" }, mt("en", { dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(e) { var t = e % 10,
                        n = 1 === v(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th"; return e + n } }), a.lang = w("moment.lang is deprecated. Use moment.locale instead.", mt), a.langData = w("moment.langData is deprecated. Use moment.localeData instead.", ht); var bn = Math.abs;

            function Sn(e, t, n, r) { var a = $t(t, n); return e._milliseconds += r * a._milliseconds, e._days += r * a._days, e._months += r * a._months, e._bubble() }

            function jn(e) { return e < 0 ? Math.floor(e) : Math.ceil(e) }

            function Hn(e) { return 4800 * e / 146097 }

            function On(e) { return 146097 * e / 4800 }

            function xn(e) { return function() { return this.as(e) } } var Pn = xn("ms"),
                En = xn("s"),
                An = xn("m"),
                Wn = xn("h"),
                Fn = xn("d"),
                In = xn("w"),
                Cn = xn("M"),
                Nn = xn("Q"),
                zn = xn("y");

            function Rn(e) { return function() { return this.isValid() ? this._data[e] : NaN } } var Jn = Rn("milliseconds"),
                Gn = Rn("seconds"),
                Un = Rn("minutes"),
                Bn = Rn("hours"),
                Vn = Rn("days"),
                $n = Rn("months"),
                qn = Rn("years"),
                Kn = Math.round,
                Zn = { ss: 44, s: 45, m: 45, h: 22, d: 26, M: 11 },
                Qn = Math.abs;

            function Xn(e) { return (e > 0) - (e < 0) || +e }

            function er() { if (!this.isValid()) return this.localeData().invalidDate(); var e, t, n = Qn(this._milliseconds) / 1e3,
                    r = Qn(this._days),
                    a = Qn(this._months);
                e = k(n / 60), t = k(e / 60), n %= 60, e %= 60; var s = k(a / 12),
                    i = a %= 12,
                    o = r,
                    d = t,
                    _ = e,
                    u = n ? n.toFixed(3).replace(/\.?0+$/, "") : "",
                    l = this.asSeconds(); if (!l) return "P0D"; var m = l < 0 ? "-" : "",
                    c = Xn(this._months) !== Xn(l) ? "-" : "",
                    h = Xn(this._days) !== Xn(l) ? "-" : "",
                    f = Xn(this._milliseconds) !== Xn(l) ? "-" : ""; return m + "P" + (s ? c + s + "Y" : "") + (i ? c + i + "M" : "") + (o ? h + o + "D" : "") + (d || _ || u ? "T" : "") + (d ? f + d + "H" : "") + (_ ? f + _ + "M" : "") + (u ? f + u + "S" : "") } var tr = Ft.prototype; return tr.isValid = function() { return this._isValid }, tr.abs = function() { var e = this._data; return this._milliseconds = bn(this._milliseconds), this._days = bn(this._days), this._months = bn(this._months), e.milliseconds = bn(e.milliseconds), e.seconds = bn(e.seconds), e.minutes = bn(e.minutes), e.hours = bn(e.hours), e.months = bn(e.months), e.years = bn(e.years), this }, tr.add = function(e, t) { return Sn(this, e, t, 1) }, tr.subtract = function(e, t) { return Sn(this, e, t, -1) }, tr.as = function(e) { if (!this.isValid()) return NaN; var t, n, r = this._milliseconds; if ("month" === (e = A(e)) || "quarter" === e || "year" === e) switch (t = this._days + r / 864e5, n = this._months + Hn(t), e) {
                        case "month":
                            return n;
                        case "quarter":
                            return n / 3;
                        case "year":
                            return n / 12 } else switch (t = this._days + Math.round(On(this._months)), e) {
                        case "week":
                            return t / 7 + r / 6048e5;
                        case "day":
                            return t + r / 864e5;
                        case "hour":
                            return 24 * t + r / 36e5;
                        case "minute":
                            return 1440 * t + r / 6e4;
                        case "second":
                            return 86400 * t + r / 1e3;
                        case "millisecond":
                            return Math.floor(864e5 * t) + r;
                        default:
                            throw new Error("Unknown unit " + e) } }, tr.asMilliseconds = Pn, tr.asSeconds = En, tr.asMinutes = An, tr.asHours = Wn, tr.asDays = Fn, tr.asWeeks = In, tr.asMonths = Cn, tr.asQuarters = Nn, tr.asYears = zn, tr.valueOf = function() { return this.isValid() ? this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * v(this._months / 12) : NaN }, tr._bubble = function() { var e, t, n, r, a, s = this._milliseconds,
                        i = this._days,
                        o = this._months,
                        d = this._data; return s >= 0 && i >= 0 && o >= 0 || s <= 0 && i <= 0 && o <= 0 || (s += 864e5 * jn(On(o) + i), i = 0, o = 0), d.milliseconds = s % 1e3, e = k(s / 1e3), d.seconds = e % 60, t = k(e / 60), d.minutes = t % 60, n = k(t / 60), d.hours = n % 24, i += k(n / 24), a = k(Hn(i)), o += a, i -= jn(On(a)), r = k(o / 12), o %= 12, d.days = i, d.months = o, d.years = r, this }, tr.clone = function() { return $t(this) }, tr.get = function(e) { return e = A(e), this.isValid() ? this[e + "s"]() : NaN }, tr.milliseconds = Jn, tr.seconds = Gn, tr.minutes = Un, tr.hours = Bn, tr.days = Vn, tr.weeks = function() { return k(this.days() / 7) }, tr.months = $n, tr.years = qn, tr.humanize = function(e) { if (!this.isValid()) return this.localeData().invalidDate(); var t = this.localeData(),
                        n = function(e, t, n) { var r = $t(e).abs(),
                                a = Kn(r.as("s")),
                                s = Kn(r.as("m")),
                                i = Kn(r.as("h")),
                                o = Kn(r.as("d")),
                                d = Kn(r.as("M")),
                                _ = Kn(r.as("y")),
                                u = a <= Zn.ss && ["s", a] || a < Zn.s && ["ss", a] || s <= 1 && ["m"] || s < Zn.m && ["mm", s] || i <= 1 && ["h"] || i < Zn.h && ["hh", i] || o <= 1 && ["d"] || o < Zn.d && ["dd", o] || d <= 1 && ["M"] || d < Zn.M && ["MM", d] || _ <= 1 && ["y"] || ["yy", _]; return u[2] = t, u[3] = +e > 0, u[4] = n,
                                function(e, t, n, r, a) { return a.relativeTime(t || 1, !!n, e, r) }.apply(null, u) }(this, !e, t); return e && (n = t.pastFuture(+this, n)), t.postformat(n) }, tr.toISOString = er, tr.toString = er, tr.toJSON = er, tr.locale = nn, tr.localeData = an, tr.toIsoString = w("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", er), tr.lang = rn, G("X", 0, 0, "unix"), G("x", 0, 0, "valueOf"), le("x", ie), le("X", /[+-]?\d+(\.\d{1,3})?/), fe("X", function(e, t, n) { n._d = new Date(1e3 * parseFloat(e, 10)) }), fe("x", function(e, t, n) { n._d = new Date(v(e)) }), a.version = "2.24.0",
                function(e) { t = e }(xt), a.fn = gn, a.min = function() { return At("isBefore", [].slice.call(arguments, 0)) }, a.max = function() { return At("isAfter", [].slice.call(arguments, 0)) }, a.now = function() { return Date.now ? Date.now() : +new Date }, a.utc = c, a.unix = function(e) { return xt(1e3 * e) }, a.months = function(e, t) { return Tn(e, t, "months") }, a.isDate = _, a.locale = mt, a.invalid = M, a.duration = $t, a.isMoment = g, a.weekdays = function(e, t, n) { return wn(e, t, n, "weekdays") }, a.parseZone = function() { return xt.apply(null, arguments).parseZone() }, a.localeData = ht, a.isDuration = It, a.monthsShort = function(e, t) { return Tn(e, t, "monthsShort") }, a.weekdaysMin = function(e, t, n) { return wn(e, t, n, "weekdaysMin") }, a.defineLocale = ct, a.updateLocale = function(e, t) { if (null != t) { var n, r, a = ot;
                        null != (r = lt(e)) && (a = r._config), t = O(a, t), (n = new x(t)).parentLocale = dt[e], dt[e] = n, mt(e) } else null != dt[e] && (null != dt[e].parentLocale ? dt[e] = dt[e].parentLocale : null != dt[e] && delete dt[e]); return dt[e] }, a.locales = function() { return b(dt) }, a.weekdaysShort = function(e, t, n) { return wn(e, t, n, "weekdaysShort") }, a.normalizeUnits = A, a.relativeTimeRounding = function(e) { return void 0 === e ? Kn : "function" == typeof e && (Kn = e, !0) }, a.relativeTimeThreshold = function(e, t) { return void 0 !== Zn[e] && (void 0 === t ? Zn[e] : (Zn[e] = t, "s" === e && (Zn.ss = t - 1), !0)) }, a.calendarFormat = function(e, t) { var n = e.diff(t, "days", !0); return n < -6 ? "sameElse" : n < -1 ? "lastWeek" : n < 0 ? "lastDay" : n < 1 ? "sameDay" : n < 2 ? "nextDay" : n < 7 ? "nextWeek" : "sameElse" }, a.prototype = gn, a.HTML5_FMT = { DATETIME_LOCAL: "YYYY-MM-DDTHH:mm", DATETIME_LOCAL_SECONDS: "YYYY-MM-DDTHH:mm:ss", DATETIME_LOCAL_MS: "YYYY-MM-DDTHH:mm:ss.SSS", DATE: "YYYY-MM-DD", TIME: "HH:mm", TIME_SECONDS: "HH:mm:ss", TIME_MS: "HH:mm:ss.SSS", WEEK: "GGGG-[W]WW", MONTH: "YYYY-MM" }, a }() }).call(this, n(139)(e)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("af", { months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mrt_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"), weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"), weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"), weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"), meridiemParse: /vm|nm/i, isPM: function(e) { return /^nm$/i.test(e) }, meridiem: function(e, t, n) { return e < 12 ? n ? "vm" : "VM" : n ? "nm" : "NM" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Vandag om] LT", nextDay: "[Môre om] LT", nextWeek: "dddd [om] LT", lastDay: "[Gister om] LT", lastWeek: "[Laas] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oor %s", past: "%s gelede", s: "'n paar sekondes", ss: "%d sekondes", m: "'n minuut", mm: "%d minute", h: "'n uur", hh: "%d ure", d: "'n dag", dd: "%d dae", M: "'n maand", MM: "%d maande", y: "'n jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" },
            n = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" },
            r = function(e) { return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5 },
            a = { s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"], m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"], h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"], d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"], M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"], y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"] },
            s = function(e) { return function(t, n, s, i) { var o = r(t),
                        d = a[e][r(t)]; return 2 === o && (d = d[n ? 0 : 1]), d.replace(/%d/i, t) } },
            i = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        e.defineLocale("ar", { months: i, monthsShort: i, weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function(e) { return "م" === e }, meridiem: function(e, t, n) { return e < 12 ? "ص" : "م" }, calendar: { sameDay: "[اليوم عند الساعة] LT", nextDay: "[غدًا عند الساعة] LT", nextWeek: "dddd [عند الساعة] LT", lastDay: "[أمس عند الساعة] LT", lastWeek: "dddd [عند الساعة] LT", sameElse: "L" }, relativeTime: { future: "بعد %s", past: "منذ %s", s: s("s"), ss: s("s"), m: s("m"), mm: s("m"), h: s("h"), hh: s("h"), d: s("d"), dd: s("d"), M: s("M"), MM: s("M"), y: s("y"), yy: s("y") }, preparse: function(e) { return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) { return n[e] }).replace(/،/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }).replace(/,/g, "،") }, week: { dow: 6, doy: 12 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("ar-dz", { months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "احد_اثنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "أح_إث_ثلا_أر_خم_جم_سب".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", ss: "%d ثانية", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 0, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("ar-kw", { months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", ss: "%d ثانية", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 0, doy: 12 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = { 1: "1", 2: "2", 3: "3", 4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 0: "0" },
            n = function(e) { return 0 === e ? 0 : 1 === e ? 1 : 2 === e ? 2 : e % 100 >= 3 && e % 100 <= 10 ? 3 : e % 100 >= 11 ? 4 : 5 },
            r = { s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"], m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"], h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"], d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"], M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"], y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"] },
            a = function(e) { return function(t, a, s, i) { var o = n(t),
                        d = r[e][n(t)]; return 2 === o && (d = d[a ? 0 : 1]), d.replace(/%d/i, t) } },
            s = ["يناير", "فبراير", "مارس", "أبريل", "مايو", "يونيو", "يوليو", "أغسطس", "سبتمبر", "أكتوبر", "نوفمبر", "ديسمبر"];
        e.defineLocale("ar-ly", { months: s, monthsShort: s, weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/‏M/‏YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function(e) { return "م" === e }, meridiem: function(e, t, n) { return e < 12 ? "ص" : "م" }, calendar: { sameDay: "[اليوم عند الساعة] LT", nextDay: "[غدًا عند الساعة] LT", nextWeek: "dddd [عند الساعة] LT", lastDay: "[أمس عند الساعة] LT", lastWeek: "dddd [عند الساعة] LT", sameElse: "L" }, relativeTime: { future: "بعد %s", past: "منذ %s", s: a("s"), ss: a("s"), m: a("m"), mm: a("m"), h: a("h"), hh: a("h"), d: a("d"), dd: a("d"), M: a("M"), MM: a("M"), y: a("y"), yy: a("y") }, preparse: function(e) { return e.replace(/،/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }).replace(/,/g, "،") }, week: { dow: 6, doy: 12 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("ar-ma", { months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", ss: "%d ثانية", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 6, doy: 12 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" },
            n = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" };
        e.defineLocale("ar-sa", { months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /ص|م/, isPM: function(e) { return "م" === e }, meridiem: function(e, t, n) { return e < 12 ? "ص" : "م" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", ss: "%d ثانية", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, preparse: function(e) { return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) { return n[e] }).replace(/،/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }).replace(/,/g, "،") }, week: { dow: 0, doy: 6 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("ar-tn", { months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", ss: "%d ثانية", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = { 1: "-inci", 5: "-inci", 8: "-inci", 70: "-inci", 80: "-inci", 2: "-nci", 7: "-nci", 20: "-nci", 50: "-nci", 3: "-üncü", 4: "-üncü", 100: "-üncü", 6: "-ncı", 9: "-uncu", 10: "-uncu", 30: "-uncu", 60: "-ıncı", 90: "-ıncı" };
        e.defineLocale("az", { months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"), monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"), weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"), weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"), weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[bugün saat] LT", nextDay: "[sabah saat] LT", nextWeek: "[gələn həftə] dddd [saat] LT", lastDay: "[dünən] LT", lastWeek: "[keçən həftə] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s əvvəl", s: "birneçə saniyə", ss: "%d saniyə", m: "bir dəqiqə", mm: "%d dəqiqə", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" }, meridiemParse: /gecə|səhər|gündüz|axşam/, isPM: function(e) { return /^(gündüz|axşam)$/.test(e) }, meridiem: function(e, t, n) { return e < 4 ? "gecə" : e < 12 ? "səhər" : e < 17 ? "gündüz" : "axşam" }, dayOfMonthOrdinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/, ordinal: function(e) { if (0 === e) return e + "-ıncı"; var n = e % 10,
                    r = e % 100 - n,
                    a = e >= 100 ? 100 : null; return e + (t[n] || t[r] || t[a]) }, week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";

        function t(e, t, n) { var r = { ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд", mm: t ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін", hh: t ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін", dd: "дзень_дні_дзён", MM: "месяц_месяцы_месяцаў", yy: "год_гады_гадоў" }; return "m" === n ? t ? "хвіліна" : "хвіліну" : "h" === n ? t ? "гадзіна" : "гадзіну" : e + " " + function(e, t) { var n = e.split("_"); return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2] }(r[n], +e) } e.defineLocale("be", { months: { format: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_"), standalone: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_") }, monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"), weekdays: { format: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_"), standalone: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"), isFormat: /\[ ?[Ууў] ?(?:мінулую|наступную)? ?\] ?dddd/ }, weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"), weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., HH:mm", LLLL: "dddd, D MMMM YYYY г., HH:mm" }, calendar: { sameDay: "[Сёння ў] LT", nextDay: "[Заўтра ў] LT", lastDay: "[Учора ў] LT", nextWeek: function() { return "[У] dddd [ў] LT" }, lastWeek: function() { switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return "[У мінулую] dddd [ў] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[У мінулы] dddd [ў] LT" } }, sameElse: "L" }, relativeTime: { future: "праз %s", past: "%s таму", s: "некалькі секунд", m: t, mm: t, h: t, hh: t, d: "дзень", dd: t, M: "месяц", MM: t, y: "год", yy: t }, meridiemParse: /ночы|раніцы|дня|вечара/, isPM: function(e) { return /^(дня|вечара)$/.test(e) }, meridiem: function(e, t, n) { return e < 4 ? "ночы" : e < 12 ? "раніцы" : e < 17 ? "дня" : "вечара" }, dayOfMonthOrdinalParse: /\d{1,2}-(і|ы|га)/, ordinal: function(e, t) { switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return e % 10 != 2 && e % 10 != 3 || e % 100 == 12 || e % 100 == 13 ? e + "-ы" : e + "-і";
                    case "D":
                        return e + "-га";
                    default:
                        return e } }, week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("bg", { months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"), monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"), weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"), weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[Днес в] LT", nextDay: "[Утре в] LT", nextWeek: "dddd [в] LT", lastDay: "[Вчера в] LT", lastWeek: function() { switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[В изминалата] dddd [в] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[В изминалия] dddd [в] LT" } }, sameElse: "L" }, relativeTime: { future: "след %s", past: "преди %s", s: "няколко секунди", ss: "%d секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дни", M: "месец", MM: "%d месеца", y: "година", yy: "%d години" }, dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/, ordinal: function(e) { var t = e % 10,
                    n = e % 100; return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти" }, week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("bm", { months: "Zanwuyekalo_Fewuruyekalo_Marisikalo_Awirilikalo_Mɛkalo_Zuwɛnkalo_Zuluyekalo_Utikalo_Sɛtanburukalo_ɔkutɔburukalo_Nowanburukalo_Desanburukalo".split("_"), monthsShort: "Zan_Few_Mar_Awi_Mɛ_Zuw_Zul_Uti_Sɛt_ɔku_Now_Des".split("_"), weekdays: "Kari_Ntɛnɛn_Tarata_Araba_Alamisa_Juma_Sibiri".split("_"), weekdaysShort: "Kar_Ntɛ_Tar_Ara_Ala_Jum_Sib".split("_"), weekdaysMin: "Ka_Nt_Ta_Ar_Al_Ju_Si".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "MMMM [tile] D [san] YYYY", LLL: "MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm", LLLL: "dddd MMMM [tile] D [san] YYYY [lɛrɛ] HH:mm" }, calendar: { sameDay: "[Bi lɛrɛ] LT", nextDay: "[Sini lɛrɛ] LT", nextWeek: "dddd [don lɛrɛ] LT", lastDay: "[Kunu lɛrɛ] LT", lastWeek: "dddd [tɛmɛnen lɛrɛ] LT", sameElse: "L" }, relativeTime: { future: "%s kɔnɔ", past: "a bɛ %s bɔ", s: "sanga dama dama", ss: "sekondi %d", m: "miniti kelen", mm: "miniti %d", h: "lɛrɛ kelen", hh: "lɛrɛ %d", d: "tile kelen", dd: "tile %d", M: "kalo kelen", MM: "kalo %d", y: "san kelen", yy: "san %d" }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = { 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০" },
            n = { "১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0" };
        e.defineLocale("bn", { months: "জানুয়ারী_ফেব্রুয়ারি_মার্চ_এপ্রিল_মে_জুন_জুলাই_আগস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"), monthsShort: "জানু_ফেব_মার্চ_এপ্র_মে_জুন_জুল_আগ_সেপ্ট_অক্টো_নভে_ডিসে".split("_"), weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পতিবার_শুক্রবার_শনিবার".split("_"), weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পতি_শুক্র_শনি".split("_"), weekdaysMin: "রবি_সোম_মঙ্গ_বুধ_বৃহঃ_শুক্র_শনি".split("_"), longDateFormat: { LT: "A h:mm সময়", LTS: "A h:mm:ss সময়", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm সময়", LLLL: "dddd, D MMMM YYYY, A h:mm সময়" }, calendar: { sameDay: "[আজ] LT", nextDay: "[আগামীকাল] LT", nextWeek: "dddd, LT", lastDay: "[গতকাল] LT", lastWeek: "[গত] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s পরে", past: "%s আগে", s: "কয়েক সেকেন্ড", ss: "%d সেকেন্ড", m: "এক মিনিট", mm: "%d মিনিট", h: "এক ঘন্টা", hh: "%d ঘন্টা", d: "এক দিন", dd: "%d দিন", M: "এক মাস", MM: "%d মাস", y: "এক বছর", yy: "%d বছর" }, preparse: function(e) { return e.replace(/[১২৩৪৫৬৭৮৯০]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /রাত|সকাল|দুপুর|বিকাল|রাত/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "রাত" === t && e >= 4 || "দুপুর" === t && e < 5 || "বিকাল" === t ? e + 12 : e }, meridiem: function(e, t, n) { return e < 4 ? "রাত" : e < 10 ? "সকাল" : e < 17 ? "দুপুর" : e < 20 ? "বিকাল" : "রাত" }, week: { dow: 0, doy: 6 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = { 1: "༡", 2: "༢", 3: "༣", 4: "༤", 5: "༥", 6: "༦", 7: "༧", 8: "༨", 9: "༩", 0: "༠" },
            n = { "༡": "1", "༢": "2", "༣": "3", "༤": "4", "༥": "5", "༦": "6", "༧": "7", "༨": "8", "༩": "9", "༠": "0" };
        e.defineLocale("bo", { months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"), weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[དི་རིང] LT", nextDay: "[སང་ཉིན] LT", nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT", lastDay: "[ཁ་སང] LT", lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ལ་", past: "%s སྔན་ལ", s: "ལམ་སང", ss: "%d སྐར་ཆ།", m: "སྐར་མ་གཅིག", mm: "%d སྐར་མ", h: "ཆུ་ཚོད་གཅིག", hh: "%d ཆུ་ཚོད", d: "ཉིན་གཅིག", dd: "%d ཉིན་", M: "ཟླ་བ་གཅིག", MM: "%d ཟླ་བ", y: "ལོ་གཅིག", yy: "%d ལོ" }, preparse: function(e) { return e.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "མཚན་མོ" === t && e >= 4 || "ཉིན་གུང" === t && e < 5 || "དགོང་དག" === t ? e + 12 : e }, meridiem: function(e, t, n) { return e < 4 ? "མཚན་མོ" : e < 10 ? "ཞོགས་ཀས" : e < 17 ? "ཉིན་གུང" : e < 20 ? "དགོང་དག" : "མཚན་མོ" }, week: { dow: 0, doy: 6 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";

        function t(e, t, n) { return e + " " + function(e, t) { return 2 === t ? function(e) { var t = { m: "v", b: "v", d: "z" }; return void 0 === t[e.charAt(0)] ? e : t[e.charAt(0)] + e.substring(1) }(e) : e }({ mm: "munutenn", MM: "miz", dd: "devezh" } [n], e) } e.defineLocale("br", { months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"), monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"), weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"), weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"), weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h[e]mm A", LTS: "h[e]mm:ss A", L: "DD/MM/YYYY", LL: "D [a viz] MMMM YYYY", LLL: "D [a viz] MMMM YYYY h[e]mm A", LLLL: "dddd, D [a viz] MMMM YYYY h[e]mm A" }, calendar: { sameDay: "[Hiziv da] LT", nextDay: "[Warc'hoazh da] LT", nextWeek: "dddd [da] LT", lastDay: "[Dec'h da] LT", lastWeek: "dddd [paset da] LT", sameElse: "L" }, relativeTime: { future: "a-benn %s", past: "%s 'zo", s: "un nebeud segondennoù", ss: "%d eilenn", m: "ur vunutenn", mm: t, h: "un eur", hh: "%d eur", d: "un devezh", dd: t, M: "ur miz", MM: t, y: "ur bloaz", yy: function(e) { switch (function e(t) { return t > 9 ? e(t % 10) : t }(e)) {
                        case 1:
                        case 3:
                        case 4:
                        case 5:
                        case 9:
                            return e + " bloaz";
                        default:
                            return e + " vloaz" } } }, dayOfMonthOrdinalParse: /\d{1,2}(añ|vet)/, ordinal: function(e) { var t = 1 === e ? "añ" : "vet"; return e + t }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";

        function t(e, t, n) { var r = e + " "; switch (n) {
                case "ss":
                    return r += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                case "m":
                    return t ? "jedna minuta" : "jedne minute";
                case "mm":
                    return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case "h":
                    return t ? "jedan sat" : "jednog sata";
                case "hh":
                    return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case "dd":
                    return r += 1 === e ? "dan" : "dana";
                case "MM":
                    return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case "yy":
                    return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina" } } e.defineLocale("bs", { months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function() { switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT" } }, lastDay: "[jučer u] LT", lastWeek: function() { switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", ss: t, m: t, mm: t, h: t, hh: t, d: "dan", dd: t, M: "mjesec", MM: t, y: "godinu", yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("ca", { months: { standalone: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"), format: "de gener_de febrer_de març_d'abril_de maig_de juny_de juliol_d'agost_de setembre_d'octubre_de novembre_de desembre".split("_"), isFormat: /D[oD]?(\s)+MMMM/ }, monthsShort: "gen._febr._març_abr._maig_juny_jul._ag._set._oct._nov._des.".split("_"), monthsParseExact: !0, weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"), weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"), weekdaysMin: "dg_dl_dt_dc_dj_dv_ds".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [de] YYYY", ll: "D MMM YYYY", LLL: "D MMMM [de] YYYY [a les] H:mm", lll: "D MMM YYYY, H:mm", LLLL: "dddd D MMMM [de] YYYY [a les] H:mm", llll: "ddd D MMM YYYY, H:mm" }, calendar: { sameDay: function() { return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, nextDay: function() { return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, nextWeek: function() { return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, lastDay: function() { return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, lastWeek: function() { return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, sameElse: "L" }, relativeTime: { future: "d'aquí %s", past: "fa %s", s: "uns segons", ss: "%d segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys" }, dayOfMonthOrdinalParse: /\d{1,2}(r|n|t|è|a)/, ordinal: function(e, t) { var n = 1 === e ? "r" : 2 === e ? "n" : 3 === e ? "r" : 4 === e ? "t" : "è"; return "w" !== t && "W" !== t || (n = "a"), e + n }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),
            n = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"),
            r = [/^led/i, /^úno/i, /^bře/i, /^dub/i, /^kvě/i, /^(čvn|červen$|června)/i, /^(čvc|červenec|července)/i, /^srp/i, /^zář/i, /^říj/i, /^lis/i, /^pro/i],
            a = /^(leden|únor|březen|duben|květen|červenec|července|červen|června|srpen|září|říjen|listopad|prosinec|led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i;

        function s(e) { return e > 1 && e < 5 && 1 != ~~(e / 10) }

        function i(e, t, n, r) { var a = e + " "; switch (n) {
                case "s":
                    return t || r ? "pár sekund" : "pár sekundami";
                case "ss":
                    return t || r ? a + (s(e) ? "sekundy" : "sekund") : a + "sekundami";
                case "m":
                    return t ? "minuta" : r ? "minutu" : "minutou";
                case "mm":
                    return t || r ? a + (s(e) ? "minuty" : "minut") : a + "minutami";
                case "h":
                    return t ? "hodina" : r ? "hodinu" : "hodinou";
                case "hh":
                    return t || r ? a + (s(e) ? "hodiny" : "hodin") : a + "hodinami";
                case "d":
                    return t || r ? "den" : "dnem";
                case "dd":
                    return t || r ? a + (s(e) ? "dny" : "dní") : a + "dny";
                case "M":
                    return t || r ? "měsíc" : "měsícem";
                case "MM":
                    return t || r ? a + (s(e) ? "měsíce" : "měsíců") : a + "měsíci";
                case "y":
                    return t || r ? "rok" : "rokem";
                case "yy":
                    return t || r ? a + (s(e) ? "roky" : "let") : a + "lety" } } e.defineLocale("cs", { months: t, monthsShort: n, monthsRegex: a, monthsShortRegex: a, monthsStrictRegex: /^(leden|ledna|února|únor|březen|března|duben|dubna|květen|května|červenec|července|červen|června|srpen|srpna|září|říjen|října|listopadu|listopad|prosinec|prosince)/i, monthsShortStrictRegex: /^(led|úno|bře|dub|kvě|čvn|čvc|srp|zář|říj|lis|pro)/i, monthsParse: r, longMonthsParse: r, shortMonthsParse: r, weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"), weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"), weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm", l: "D. M. YYYY" }, calendar: { sameDay: "[dnes v] LT", nextDay: "[zítra v] LT", nextWeek: function() { switch (this.day()) {
                        case 0:
                            return "[v neděli v] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [v] LT";
                        case 3:
                            return "[ve středu v] LT";
                        case 4:
                            return "[ve čtvrtek v] LT";
                        case 5:
                            return "[v pátek v] LT";
                        case 6:
                            return "[v sobotu v] LT" } }, lastDay: "[včera v] LT", lastWeek: function() { switch (this.day()) {
                        case 0:
                            return "[minulou neděli v] LT";
                        case 1:
                        case 2:
                            return "[minulé] dddd [v] LT";
                        case 3:
                            return "[minulou středu v] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [v] LT";
                        case 6:
                            return "[minulou sobotu v] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "před %s", s: i, ss: i, m: i, mm: i, h: i, hh: i, d: i, dd: i, M: i, MM: i, y: i, yy: i }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("cv", { months: "кӑрлач_нарӑс_пуш_ака_май_ҫӗртме_утӑ_ҫурла_авӑн_юпа_чӳк_раштав".split("_"), monthsShort: "кӑр_нар_пуш_ака_май_ҫӗр_утӑ_ҫур_авн_юпа_чӳк_раш".split("_"), weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кӗҫнерникун_эрнекун_шӑматкун".split("_"), weekdaysShort: "выр_тун_ытл_юн_кӗҫ_эрн_шӑм".split("_"), weekdaysMin: "вр_тн_ыт_юн_кҫ_эр_шм".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ]", LLL: "YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm", LLLL: "dddd, YYYY [ҫулхи] MMMM [уйӑхӗн] D[-мӗшӗ], HH:mm" }, calendar: { sameDay: "[Паян] LT [сехетре]", nextDay: "[Ыран] LT [сехетре]", lastDay: "[Ӗнер] LT [сехетре]", nextWeek: "[Ҫитес] dddd LT [сехетре]", lastWeek: "[Иртнӗ] dddd LT [сехетре]", sameElse: "L" }, relativeTime: { future: function(e) { var t = /сехет$/i.exec(e) ? "рен" : /ҫул$/i.exec(e) ? "тан" : "ран"; return e + t }, past: "%s каялла", s: "пӗр-ик ҫеккунт", ss: "%d ҫеккунт", m: "пӗр минут", mm: "%d минут", h: "пӗр сехет", hh: "%d сехет", d: "пӗр кун", dd: "%d кун", M: "пӗр уйӑх", MM: "%d уйӑх", y: "пӗр ҫул", yy: "%d ҫул" }, dayOfMonthOrdinalParse: /\d{1,2}-мӗш/, ordinal: "%d-мӗш", week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("cy", { months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"), monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"), weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"), weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"), weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Heddiw am] LT", nextDay: "[Yfory am] LT", nextWeek: "dddd [am] LT", lastDay: "[Ddoe am] LT", lastWeek: "dddd [diwethaf am] LT", sameElse: "L" }, relativeTime: { future: "mewn %s", past: "%s yn ôl", s: "ychydig eiliadau", ss: "%d eiliad", m: "munud", mm: "%d munud", h: "awr", hh: "%d awr", d: "diwrnod", dd: "%d diwrnod", M: "mis", MM: "%d mis", y: "blwyddyn", yy: "%d flynedd" }, dayOfMonthOrdinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/, ordinal: function(e) { var t = e,
                    n = ""; return t > 20 ? n = 40 === t || 50 === t || 60 === t || 80 === t || 100 === t ? "fed" : "ain" : t > 0 && (n = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"][t]), e + n }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("da", { months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd [d.] D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "på dddd [kl.] LT", lastDay: "[i går kl.] LT", lastWeek: "[i] dddd[s kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "få sekunder", ss: "%d sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en måned", MM: "%d måneder", y: "et år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";

        function t(e, t, n, r) { var a = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] }; return t ? a[n][0] : a[n][1] } e.defineLocale("de", { months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: t, mm: "%d Minuten", h: t, hh: "%d Stunden", d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";

        function t(e, t, n, r) { var a = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] }; return t ? a[n][0] : a[n][1] } e.defineLocale("de-at", { months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jän._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: t, mm: "%d Minuten", h: t, hh: "%d Stunden", d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";

        function t(e, t, n, r) { var a = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [e + " Tage", e + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [e + " Monate", e + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [e + " Jahre", e + " Jahren"] }; return t ? a[n][0] : a[n][1] } e.defineLocale("de-ch", { months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Feb._März_Apr._Mai_Juni_Juli_Aug._Sep._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY HH:mm", LLLL: "dddd, D. MMMM YYYY HH:mm" }, calendar: { sameDay: "[heute um] LT [Uhr]", sameElse: "L", nextDay: "[morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", ss: "%d Sekunden", m: t, mm: "%d Minuten", h: t, hh: "%d Stunden", d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = ["ޖެނުއަރީ", "ފެބްރުއަރީ", "މާރިޗު", "އޭޕްރީލު", "މޭ", "ޖޫން", "ޖުލައި", "އޯގަސްޓު", "ސެޕްޓެމްބަރު", "އޮކްޓޯބަރު", "ނޮވެމްބަރު", "ޑިސެމްބަރު"],
            n = ["އާދިއްތަ", "ހޯމަ", "އަންގާރަ", "ބުދަ", "ބުރާސްފަތި", "ހުކުރު", "ހޮނިހިރު"];
        e.defineLocale("dv", { months: t, monthsShort: t, weekdays: n, weekdaysShort: n, weekdaysMin: "އާދި_ހޯމަ_އަން_ބުދަ_ބުރާ_ހުކު_ހޮނި".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "D/M/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, meridiemParse: /މކ|މފ/, isPM: function(e) { return "މފ" === e }, meridiem: function(e, t, n) { return e < 12 ? "މކ" : "މފ" }, calendar: { sameDay: "[މިއަދު] LT", nextDay: "[މާދަމާ] LT", nextWeek: "dddd LT", lastDay: "[އިއްޔެ] LT", lastWeek: "[ފާއިތުވި] dddd LT", sameElse: "L" }, relativeTime: { future: "ތެރޭގައި %s", past: "ކުރިން %s", s: "ސިކުންތުކޮޅެއް", ss: "d% ސިކުންތު", m: "މިނިޓެއް", mm: "މިނިޓު %d", h: "ގަޑިއިރެއް", hh: "ގަޑިއިރު %d", d: "ދުވަހެއް", dd: "ދުވަސް %d", M: "މަހެއް", MM: "މަސް %d", y: "އަހަރެއް", yy: "އަހަރު %d" }, preparse: function(e) { return e.replace(/،/g, ",") }, postformat: function(e) { return e.replace(/,/g, "،") }, week: { dow: 7, doy: 12 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("el", { monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"), monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"), months: function(e, t) { return e ? "string" == typeof t && /D/.test(t.substring(0, t.indexOf("MMMM"))) ? this._monthsGenitiveEl[e.month()] : this._monthsNominativeEl[e.month()] : this._monthsNominativeEl }, monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"), weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"), weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"), weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"), meridiem: function(e, t, n) { return e > 11 ? n ? "μμ" : "ΜΜ" : n ? "πμ" : "ΠΜ" }, isPM: function(e) { return "μ" === (e + "").toLowerCase()[0] }, meridiemParse: /[ΠΜ]\.?Μ?\.?/i, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendarEl: { sameDay: "[Σήμερα {}] LT", nextDay: "[Αύριο {}] LT", nextWeek: "dddd [{}] LT", lastDay: "[Χθες {}] LT", lastWeek: function() { switch (this.day()) {
                        case 6:
                            return "[το προηγούμενο] dddd [{}] LT";
                        default:
                            return "[την προηγούμενη] dddd [{}] LT" } }, sameElse: "L" }, calendar: function(e, t) { var n = this._calendarEl[e],
                    r = t && t.hours(); return function(e) { return e instanceof Function || "[object Function]" === Object.prototype.toString.call(e) }(n) && (n = n.apply(t)), n.replace("{}", r % 12 == 1 ? "στη" : "στις") }, relativeTime: { future: "σε %s", past: "%s πριν", s: "λίγα δευτερόλεπτα", ss: "%d δευτερόλεπτα", m: "ένα λεπτό", mm: "%d λεπτά", h: "μία ώρα", hh: "%d ώρες", d: "μία μέρα", dd: "%d μέρες", M: "ένας μήνας", MM: "%d μήνες", y: "ένας χρόνος", yy: "%d χρόνια" }, dayOfMonthOrdinalParse: /\d{1,2}η/, ordinal: "%dη", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("en-SG", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th"; return e + n }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("en-au", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th"; return e + n }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("en-ca", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "YYYY-MM-DD", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY h:mm A", LLLL: "dddd, MMMM D, YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th"; return e + n } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("en-gb", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th"; return e + n }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("en-ie", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th"; return e + n }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("en-il", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th"; return e + n } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("en-nz", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", ss: "%d seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th"; return e + n }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("eo", { months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"), weekdays: "dimanĉo_lundo_mardo_merkredo_ĵaŭdo_vendredo_sabato".split("_"), weekdaysShort: "dim_lun_mard_merk_ĵaŭ_ven_sab".split("_"), weekdaysMin: "di_lu_ma_me_ĵa_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D[-a de] MMMM, YYYY", LLL: "D[-a de] MMMM, YYYY HH:mm", LLLL: "dddd, [la] D[-a de] MMMM, YYYY HH:mm" }, meridiemParse: /[ap]\.t\.m/i, isPM: function(e) { return "p" === e.charAt(0).toLowerCase() }, meridiem: function(e, t, n) { return e > 11 ? n ? "p.t.m." : "P.T.M." : n ? "a.t.m." : "A.T.M." }, calendar: { sameDay: "[Hodiaŭ je] LT", nextDay: "[Morgaŭ je] LT", nextWeek: "dddd [je] LT", lastDay: "[Hieraŭ je] LT", lastWeek: "[pasinta] dddd [je] LT", sameElse: "L" }, relativeTime: { future: "post %s", past: "antaŭ %s", s: "sekundoj", ss: "%d sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago", dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj" }, dayOfMonthOrdinalParse: /\d{1,2}a/, ordinal: "%da", week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            a = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function(e, r) { return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t }, monthsRegex: a, monthsShortRegex: a, monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i, monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, monthsParse: r, longMonthsParse: r, shortMonthsParse: r, weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function() { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function() { return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function() { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function() { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function() { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            a = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-do", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function(e, r) { return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t }, monthsRegex: a, monthsShortRegex: a, monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i, monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, monthsParse: r, longMonthsParse: r, shortMonthsParse: r, weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, calendar: { sameDay: function() { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function() { return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function() { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function() { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function() { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"),
            n = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"),
            r = [/^ene/i, /^feb/i, /^mar/i, /^abr/i, /^may/i, /^jun/i, /^jul/i, /^ago/i, /^sep/i, /^oct/i, /^nov/i, /^dic/i],
            a = /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre|ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i;
        e.defineLocale("es-us", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function(e, r) { return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t }, monthsRegex: a, monthsShortRegex: a, monthsStrictRegex: /^(enero|febrero|marzo|abril|mayo|junio|julio|agosto|septiembre|octubre|noviembre|diciembre)/i, monthsShortStrictRegex: /^(ene\.?|feb\.?|mar\.?|abr\.?|may\.?|jun\.?|jul\.?|ago\.?|sep\.?|oct\.?|nov\.?|dic\.?)/i, monthsParse: r, longMonthsParse: r, shortMonthsParse: r, weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "do_lu_ma_mi_ju_vi_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "MM/DD/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY h:mm A", LLLL: "dddd, D [de] MMMM [de] YYYY h:mm A" }, calendar: { sameDay: function() { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function() { return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function() { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function() { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function() { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 0, doy: 6 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";

        function t(e, t, n, r) { var a = { s: ["mõne sekundi", "mõni sekund", "paar sekundit"], ss: [e + "sekundi", e + "sekundit"], m: ["ühe minuti", "üks minut"], mm: [e + " minuti", e + " minutit"], h: ["ühe tunni", "tund aega", "üks tund"], hh: [e + " tunni", e + " tundi"], d: ["ühe päeva", "üks päev"], M: ["kuu aja", "kuu aega", "üks kuu"], MM: [e + " kuu", e + " kuud"], y: ["ühe aasta", "aasta", "üks aasta"], yy: [e + " aasta", e + " aastat"] }; return t ? a[n][2] ? a[n][2] : a[n][1] : r ? a[n][0] : a[n][1] } e.defineLocale("et", { months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[Täna,] LT", nextDay: "[Homme,] LT", nextWeek: "[Järgmine] dddd LT", lastDay: "[Eile,] LT", lastWeek: "[Eelmine] dddd LT", sameElse: "L" }, relativeTime: { future: "%s pärast", past: "%s tagasi", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: "%d päeva", M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("eu", { months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), monthsParseExact: !0, weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] HH:mm", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] HH:mm", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] HH:mm", llll: "ddd, YYYY[ko] MMM D[a] HH:mm" }, calendar: { sameDay: "[gaur] LT[etan]", nextDay: "[bihar] LT[etan]", nextWeek: "dddd LT[etan]", lastDay: "[atzo] LT[etan]", lastWeek: "[aurreko] dddd LT[etan]", sameElse: "L" }, relativeTime: { future: "%s barru", past: "duela %s", s: "segundo batzuk", ss: "%d segundo", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = { 1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹", 0: "۰" },
            n = { "۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9", "۰": "0" };
        e.defineLocale("fa", { months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"), monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"), weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /قبل از ظهر|بعد از ظهر/, isPM: function(e) { return /بعد از ظهر/.test(e) }, meridiem: function(e, t, n) { return e < 12 ? "قبل از ظهر" : "بعد از ظهر" }, calendar: { sameDay: "[امروز ساعت] LT", nextDay: "[فردا ساعت] LT", nextWeek: "dddd [ساعت] LT", lastDay: "[دیروز ساعت] LT", lastWeek: "dddd [پیش] [ساعت] LT", sameElse: "L" }, relativeTime: { future: "در %s", past: "%s پیش", s: "چند ثانیه", ss: "ثانیه d%", m: "یک دقیقه", mm: "%d دقیقه", h: "یک ساعت", hh: "%d ساعت", d: "یک روز", dd: "%d روز", M: "یک ماه", MM: "%d ماه", y: "یک سال", yy: "%d سال" }, preparse: function(e) { return e.replace(/[۰-۹]/g, function(e) { return n[e] }).replace(/،/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }).replace(/,/g, "،") }, dayOfMonthOrdinalParse: /\d{1,2}م/, ordinal: "%dم", week: { dow: 6, doy: 12 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "),
            n = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", t[7], t[8], t[9]];

        function r(e, r, a, s) { var i = ""; switch (a) {
                case "s":
                    return s ? "muutaman sekunnin" : "muutama sekunti";
                case "ss":
                    return s ? "sekunnin" : "sekuntia";
                case "m":
                    return s ? "minuutin" : "minuutti";
                case "mm":
                    i = s ? "minuutin" : "minuuttia"; break;
                case "h":
                    return s ? "tunnin" : "tunti";
                case "hh":
                    i = s ? "tunnin" : "tuntia"; break;
                case "d":
                    return s ? "päivän" : "päivä";
                case "dd":
                    i = s ? "päivän" : "päivää"; break;
                case "M":
                    return s ? "kuukauden" : "kuukausi";
                case "MM":
                    i = s ? "kuukauden" : "kuukautta"; break;
                case "y":
                    return s ? "vuoden" : "vuosi";
                case "yy":
                    i = s ? "vuoden" : "vuotta" } return i = function(e, r) { return e < 10 ? r ? n[e] : t[e] : e }(e, s) + " " + i } e.defineLocale("fi", { months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"), weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "Do MMMM[ta] YYYY", LLL: "Do MMMM[ta] YYYY, [klo] HH.mm", LLLL: "dddd, Do MMMM[ta] YYYY, [klo] HH.mm", l: "D.M.YYYY", ll: "Do MMM YYYY", lll: "Do MMM YYYY, [klo] HH.mm", llll: "ddd, Do MMM YYYY, [klo] HH.mm" }, calendar: { sameDay: "[tänään] [klo] LT", nextDay: "[huomenna] [klo] LT", nextWeek: "dddd [klo] LT", lastDay: "[eilen] [klo] LT", lastWeek: "[viime] dddd[na] [klo] LT", sameElse: "L" }, relativeTime: { future: "%s päästä", past: "%s sitten", s: r, ss: r, m: r, mm: r, h: r, hh: r, d: r, dd: r, M: r, MM: r, y: r, yy: r }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("fo", { months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"), weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"), weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D. MMMM, YYYY HH:mm" }, calendar: { sameDay: "[Í dag kl.] LT", nextDay: "[Í morgin kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[Í gjár kl.] LT", lastWeek: "[síðstu] dddd [kl] LT", sameElse: "L" }, relativeTime: { future: "um %s", past: "%s síðani", s: "fá sekund", ss: "%d sekundir", m: "ein minuttur", mm: "%d minuttir", h: "ein tími", hh: "%d tímar", d: "ein dagur", dd: "%d dagar", M: "ein mánaður", MM: "%d mánaðir", y: "eitt ár", yy: "%d ár" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("fr", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd’hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|)/, ordinal: function(e, t) { switch (t) {
                    case "D":
                        return e + (1 === e ? "er" : "");
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                    case "W":
                        return e + (1 === e ? "re" : "e") } }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("fr-ca", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd’hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|e)/, ordinal: function(e, t) { switch (t) {
                    default:
                    case "M":
                    case "Q":
                    case "D":
                    case "DDD":
                    case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                    case "W":
                        return e + (1 === e ? "re" : "e") } } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("fr-ch", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), monthsParseExact: !0, weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "di_lu_ma_me_je_ve_sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Aujourd’hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", ss: "%d secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, dayOfMonthOrdinalParse: /\d{1,2}(er|e)/, ordinal: function(e, t) { switch (t) {
                    default:
                    case "M":
                    case "Q":
                    case "D":
                    case "DDD":
                    case "d":
                        return e + (1 === e ? "er" : "e");
                    case "w":
                    case "W":
                        return e + (1 === e ? "re" : "e") } }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"),
            n = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_");
        e.defineLocale("fy", { months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"), monthsShort: function(e, r) { return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t }, monthsParseExact: !0, weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"), weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"), weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[hjoed om] LT", nextDay: "[moarn om] LT", nextWeek: "dddd [om] LT", lastDay: "[juster om] LT", lastWeek: "[ôfrûne] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oer %s", past: "%s lyn", s: "in pear sekonden", ss: "%d sekonden", m: "ien minút", mm: "%d minuten", h: "ien oere", hh: "%d oeren", d: "ien dei", dd: "%d dagen", M: "ien moanne", MM: "%d moannen", y: "ien jier", yy: "%d jierren" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("ga", { months: ["Eanáir", "Feabhra", "Márta", "Aibreán", "Bealtaine", "Méitheamh", "Iúil", "Lúnasa", "Meán Fómhair", "Deaireadh Fómhair", "Samhain", "Nollaig"], monthsShort: ["Eaná", "Feab", "Márt", "Aibr", "Beal", "Méit", "Iúil", "Lúna", "Meán", "Deai", "Samh", "Noll"], monthsParseExact: !0, weekdays: ["Dé Domhnaigh", "Dé Luain", "Dé Máirt", "Dé Céadaoin", "Déardaoin", "Dé hAoine", "Dé Satharn"], weekdaysShort: ["Dom", "Lua", "Mái", "Céa", "Déa", "hAo", "Sat"], weekdaysMin: ["Do", "Lu", "Má", "Ce", "Dé", "hA", "Sa"], longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Inniu ag] LT", nextDay: "[Amárach ag] LT", nextWeek: "dddd [ag] LT", lastDay: "[Inné aig] LT", lastWeek: "dddd [seo caite] [ag] LT", sameElse: "L" }, relativeTime: { future: "i %s", past: "%s ó shin", s: "cúpla soicind", ss: "%d soicind", m: "nóiméad", mm: "%d nóiméad", h: "uair an chloig", hh: "%d uair an chloig", d: "lá", dd: "%d lá", M: "mí", MM: "%d mí", y: "bliain", yy: "%d bliain" }, dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/, ordinal: function(e) { var t = 1 === e ? "d" : e % 10 == 2 ? "na" : "mh"; return e + t }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("gd", { months: ["Am Faoilleach", "An Gearran", "Am Màrt", "An Giblean", "An Cèitean", "An t-Ògmhios", "An t-Iuchar", "An Lùnastal", "An t-Sultain", "An Dàmhair", "An t-Samhain", "An Dùbhlachd"], monthsShort: ["Faoi", "Gear", "Màrt", "Gibl", "Cèit", "Ògmh", "Iuch", "Lùn", "Sult", "Dàmh", "Samh", "Dùbh"], monthsParseExact: !0, weekdays: ["Didòmhnaich", "Diluain", "Dimàirt", "Diciadain", "Diardaoin", "Dihaoine", "Disathairne"], weekdaysShort: ["Did", "Dil", "Dim", "Dic", "Dia", "Dih", "Dis"], weekdaysMin: ["Dò", "Lu", "Mà", "Ci", "Ar", "Ha", "Sa"], longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[An-diugh aig] LT", nextDay: "[A-màireach aig] LT", nextWeek: "dddd [aig] LT", lastDay: "[An-dè aig] LT", lastWeek: "dddd [seo chaidh] [aig] LT", sameElse: "L" }, relativeTime: { future: "ann an %s", past: "bho chionn %s", s: "beagan diogan", ss: "%d diogan", m: "mionaid", mm: "%d mionaidean", h: "uair", hh: "%d uairean", d: "latha", dd: "%d latha", M: "mìos", MM: "%d mìosan", y: "bliadhna", yy: "%d bliadhna" }, dayOfMonthOrdinalParse: /\d{1,2}(d|na|mh)/, ordinal: function(e) { var t = 1 === e ? "d" : e % 10 == 2 ? "na" : "mh"; return e + t }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("gl", { months: "xaneiro_febreiro_marzo_abril_maio_xuño_xullo_agosto_setembro_outubro_novembro_decembro".split("_"), monthsShort: "xan._feb._mar._abr._mai._xuñ._xul._ago._set._out._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "domingo_luns_martes_mércores_xoves_venres_sábado".split("_"), weekdaysShort: "dom._lun._mar._mér._xov._ven._sáb.".split("_"), weekdaysMin: "do_lu_ma_mé_xo_ve_sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY H:mm", LLLL: "dddd, D [de] MMMM [de] YYYY H:mm" }, calendar: { sameDay: function() { return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT" }, nextDay: function() { return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT" }, nextWeek: function() { return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT" }, lastDay: function() { return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT" }, lastWeek: function() { return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT" }, sameElse: "L" }, relativeTime: { future: function(e) { return 0 === e.indexOf("un") ? "n" + e : "en " + e }, past: "hai %s", s: "uns segundos", ss: "%d segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";

        function t(e, t, n, r) { var a = { s: ["thodde secondanim", "thodde second"], ss: [e + " secondanim", e + " second"], m: ["eka mintan", "ek minute"], mm: [e + " mintanim", e + " mintam"], h: ["eka voran", "ek vor"], hh: [e + " voranim", e + " voram"], d: ["eka disan", "ek dis"], dd: [e + " disanim", e + " dis"], M: ["eka mhoinean", "ek mhoino"], MM: [e + " mhoineanim", e + " mhoine"], y: ["eka vorsan", "ek voros"], yy: [e + " vorsanim", e + " vorsam"] }; return t ? a[n][0] : a[n][1] } e.defineLocale("gom-latn", { months: "Janer_Febrer_Mars_Abril_Mai_Jun_Julai_Agost_Setembr_Otubr_Novembr_Dezembr".split("_"), monthsShort: "Jan._Feb._Mars_Abr._Mai_Jun_Jul._Ago._Set._Otu._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Aitar_Somar_Mongllar_Budvar_Brestar_Sukrar_Son'var".split("_"), weekdaysShort: "Ait._Som._Mon._Bud._Bre._Suk._Son.".split("_"), weekdaysMin: "Ai_Sm_Mo_Bu_Br_Su_Sn".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "A h:mm [vazta]", LTS: "A h:mm:ss [vazta]", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY A h:mm [vazta]", LLLL: "dddd, MMMM[achea] Do, YYYY, A h:mm [vazta]", llll: "ddd, D MMM YYYY, A h:mm [vazta]" }, calendar: { sameDay: "[Aiz] LT", nextDay: "[Faleam] LT", nextWeek: "[Ieta to] dddd[,] LT", lastDay: "[Kal] LT", lastWeek: "[Fatlo] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%s", past: "%s adim", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}(er)/, ordinal: function(e, t) { switch (t) {
                    case "D":
                        return e + "er";
                    default:
                    case "M":
                    case "Q":
                    case "DDD":
                    case "d":
                    case "w":
                    case "W":
                        return e } }, week: { dow: 1, doy: 4 }, meridiemParse: /rati|sokalli|donparam|sanje/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "rati" === t ? e < 4 ? e : e + 12 : "sokalli" === t ? e : "donparam" === t ? e > 12 ? e : e + 12 : "sanje" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "rati" : e < 12 ? "sokalli" : e < 16 ? "donparam" : e < 20 ? "sanje" : "rati" } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = { 1: "૧", 2: "૨", 3: "૩", 4: "૪", 5: "૫", 6: "૬", 7: "૭", 8: "૮", 9: "૯", 0: "૦" },
            n = { "૧": "1", "૨": "2", "૩": "3", "૪": "4", "૫": "5", "૬": "6", "૭": "7", "૮": "8", "૯": "9", "૦": "0" };
        e.defineLocale("gu", { months: "જાન્યુઆરી_ફેબ્રુઆરી_માર્ચ_એપ્રિલ_મે_જૂન_જુલાઈ_ઑગસ્ટ_સપ્ટેમ્બર_ઑક્ટ્બર_નવેમ્બર_ડિસેમ્બર".split("_"), monthsShort: "જાન્યુ._ફેબ્રુ._માર્ચ_એપ્રિ._મે_જૂન_જુલા._ઑગ._સપ્ટે._ઑક્ટ્._નવે._ડિસે.".split("_"), monthsParseExact: !0, weekdays: "રવિવાર_સોમવાર_મંગળવાર_બુધ્વાર_ગુરુવાર_શુક્રવાર_શનિવાર".split("_"), weekdaysShort: "રવિ_સોમ_મંગળ_બુધ્_ગુરુ_શુક્ર_શનિ".split("_"), weekdaysMin: "ર_સો_મં_બુ_ગુ_શુ_શ".split("_"), longDateFormat: { LT: "A h:mm વાગ્યે", LTS: "A h:mm:ss વાગ્યે", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm વાગ્યે", LLLL: "dddd, D MMMM YYYY, A h:mm વાગ્યે" }, calendar: { sameDay: "[આજ] LT", nextDay: "[કાલે] LT", nextWeek: "dddd, LT", lastDay: "[ગઇકાલે] LT", lastWeek: "[પાછલા] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s મા", past: "%s પેહલા", s: "અમુક પળો", ss: "%d સેકંડ", m: "એક મિનિટ", mm: "%d મિનિટ", h: "એક કલાક", hh: "%d કલાક", d: "એક દિવસ", dd: "%d દિવસ", M: "એક મહિનો", MM: "%d મહિનો", y: "એક વર્ષ", yy: "%d વર્ષ" }, preparse: function(e) { return e.replace(/[૧૨૩૪૫૬૭૮૯૦]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /રાત|બપોર|સવાર|સાંજ/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "રાત" === t ? e < 4 ? e : e + 12 : "સવાર" === t ? e : "બપોર" === t ? e >= 10 ? e : e + 12 : "સાંજ" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "રાત" : e < 10 ? "સવાર" : e < 17 ? "બપોર" : e < 20 ? "સાંજ" : "રાત" }, week: { dow: 0, doy: 6 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("he", { months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"), monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"), weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"), weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"), weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [ב]MMMM YYYY", LLL: "D [ב]MMMM YYYY HH:mm", LLLL: "dddd, D [ב]MMMM YYYY HH:mm", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[היום ב־]LT", nextDay: "[מחר ב־]LT", nextWeek: "dddd [בשעה] LT", lastDay: "[אתמול ב־]LT", lastWeek: "[ביום] dddd [האחרון בשעה] LT", sameElse: "L" }, relativeTime: { future: "בעוד %s", past: "לפני %s", s: "מספר שניות", ss: "%d שניות", m: "דקה", mm: "%d דקות", h: "שעה", hh: function(e) { return 2 === e ? "שעתיים" : e + " שעות" }, d: "יום", dd: function(e) { return 2 === e ? "יומיים" : e + " ימים" }, M: "חודש", MM: function(e) { return 2 === e ? "חודשיים" : e + " חודשים" }, y: "שנה", yy: function(e) { return 2 === e ? "שנתיים" : e % 10 == 0 && 10 !== e ? e + " שנה" : e + " שנים" } }, meridiemParse: /אחה"צ|לפנה"צ|אחרי הצהריים|לפני הצהריים|לפנות בוקר|בבוקר|בערב/i, isPM: function(e) { return /^(אחה"צ|אחרי הצהריים|בערב)$/.test(e) }, meridiem: function(e, t, n) { return e < 5 ? "לפנות בוקר" : e < 10 ? "בבוקר" : e < 12 ? n ? 'לפנה"צ' : "לפני הצהריים" : e < 18 ? n ? 'אחה"צ' : "אחרי הצהריים" : "בערב" } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
            n = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };
        e.defineLocale("hi", { months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"), monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"), monthsParseExact: !0, weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), longDateFormat: { LT: "A h:mm बजे", LTS: "A h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm बजे", LLLL: "dddd, D MMMM YYYY, A h:mm बजे" }, calendar: { sameDay: "[आज] LT", nextDay: "[कल] LT", nextWeek: "dddd, LT", lastDay: "[कल] LT", lastWeek: "[पिछले] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s में", past: "%s पहले", s: "कुछ ही क्षण", ss: "%d सेकंड", m: "एक मिनट", mm: "%d मिनट", h: "एक घंटा", hh: "%d घंटे", d: "एक दिन", dd: "%d दिन", M: "एक महीने", MM: "%d महीने", y: "एक वर्ष", yy: "%d वर्ष" }, preparse: function(e) { return e.replace(/[१२३४५६७८९०]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /रात|सुबह|दोपहर|शाम/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "रात" === t ? e < 4 ? e : e + 12 : "सुबह" === t ? e : "दोपहर" === t ? e >= 10 ? e : e + 12 : "शाम" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "रात" : e < 10 ? "सुबह" : e < 17 ? "दोपहर" : e < 20 ? "शाम" : "रात" }, week: { dow: 0, doy: 6 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";

        function t(e, t, n) { var r = e + " "; switch (n) {
                case "ss":
                    return r += 1 === e ? "sekunda" : 2 === e || 3 === e || 4 === e ? "sekunde" : "sekundi";
                case "m":
                    return t ? "jedna minuta" : "jedne minute";
                case "mm":
                    return r += 1 === e ? "minuta" : 2 === e || 3 === e || 4 === e ? "minute" : "minuta";
                case "h":
                    return t ? "jedan sat" : "jednog sata";
                case "hh":
                    return r += 1 === e ? "sat" : 2 === e || 3 === e || 4 === e ? "sata" : "sati";
                case "dd":
                    return r += 1 === e ? "dan" : "dana";
                case "MM":
                    return r += 1 === e ? "mjesec" : 2 === e || 3 === e || 4 === e ? "mjeseca" : "mjeseci";
                case "yy":
                    return r += 1 === e ? "godina" : 2 === e || 3 === e || 4 === e ? "godine" : "godina" } } e.defineLocale("hr", { months: { format: "siječnja_veljače_ožujka_travnja_svibnja_lipnja_srpnja_kolovoza_rujna_listopada_studenoga_prosinca".split("_"), standalone: "siječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_") }, monthsShort: "sij._velj._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function() { switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT" } }, lastDay: "[jučer u] LT", lastWeek: function() { switch (this.day()) {
                        case 0:
                        case 3:
                            return "[prošlu] dddd [u] LT";
                        case 6:
                            return "[prošle] [subote] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prošli] dddd [u] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", ss: t, m: t, mm: t, h: t, hh: t, d: "dan", dd: t, M: "mjesec", MM: t, y: "godinu", yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" ");

        function n(e, t, n, r) { var a = e; switch (n) {
                case "s":
                    return r || t ? "néhány másodperc" : "néhány másodperce";
                case "ss":
                    return a + (r || t) ? " másodperc" : " másodperce";
                case "m":
                    return "egy" + (r || t ? " perc" : " perce");
                case "mm":
                    return a + (r || t ? " perc" : " perce");
                case "h":
                    return "egy" + (r || t ? " óra" : " órája");
                case "hh":
                    return a + (r || t ? " óra" : " órája");
                case "d":
                    return "egy" + (r || t ? " nap" : " napja");
                case "dd":
                    return a + (r || t ? " nap" : " napja");
                case "M":
                    return "egy" + (r || t ? " hónap" : " hónapja");
                case "MM":
                    return a + (r || t ? " hónap" : " hónapja");
                case "y":
                    return "egy" + (r || t ? " év" : " éve");
                case "yy":
                    return a + (r || t ? " év" : " éve") } return "" }

        function r(e) { return (e ? "" : "[múlt] ") + "[" + t[this.day()] + "] LT[-kor]" } e.defineLocale("hu", { months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"), monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"), weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"), weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D. H:mm", LLLL: "YYYY. MMMM D., dddd H:mm" }, meridiemParse: /de|du/i, isPM: function(e) { return "u" === e.charAt(1).toLowerCase() }, meridiem: function(e, t, n) { return e < 12 ? !0 === n ? "de" : "DE" : !0 === n ? "du" : "DU" }, calendar: { sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function() { return r.call(this, !0) }, lastDay: "[tegnap] LT[-kor]", lastWeek: function() { return r.call(this, !1) }, sameElse: "L" }, relativeTime: { future: "%s múlva", past: "%s", s: n, ss: n, m: n, mm: n, h: n, hh: n, d: n, dd: n, M: n, MM: n, y: n, yy: n }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("hy-am", { months: { format: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_"), standalone: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_") }, monthsShort: "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"), weekdays: "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"), weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY թ.", LLL: "D MMMM YYYY թ., HH:mm", LLLL: "dddd, D MMMM YYYY թ., HH:mm" }, calendar: { sameDay: "[այսօր] LT", nextDay: "[վաղը] LT", lastDay: "[երեկ] LT", nextWeek: function() { return "dddd [օրը ժամը] LT" }, lastWeek: function() { return "[անցած] dddd [օրը ժամը] LT" }, sameElse: "L" }, relativeTime: { future: "%s հետո", past: "%s առաջ", s: "մի քանի վայրկյան", ss: "%d վայրկյան", m: "րոպե", mm: "%d րոպե", h: "ժամ", hh: "%d ժամ", d: "օր", dd: "%d օր", M: "ամիս", MM: "%d ամիս", y: "տարի", yy: "%d տարի" }, meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/, isPM: function(e) { return /^(ցերեկվա|երեկոյան)$/.test(e) }, meridiem: function(e) { return e < 4 ? "գիշերվա" : e < 12 ? "առավոտվա" : e < 17 ? "ցերեկվա" : "երեկոյան" }, dayOfMonthOrdinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/, ordinal: function(e, t) { switch (t) {
                    case "DDD":
                    case "w":
                    case "W":
                    case "DDDo":
                        return 1 === e ? e + "-ին" : e + "-րդ";
                    default:
                        return e } }, week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("id", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Agt_Sep_Okt_Nov_Des".split("_"), weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|siang|sore|malam/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "pagi" === t ? e : "siang" === t ? e >= 11 ? e : e + 12 : "sore" === t || "malam" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 11 ? "pagi" : e < 15 ? "siang" : e < 19 ? "sore" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Besok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kemarin pukul] LT", lastWeek: "dddd [lalu pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", ss: "%d detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";

        function t(e) { return e % 100 == 11 || e % 10 != 1 }

        function n(e, n, r, a) { var s = e + " "; switch (r) {
                case "s":
                    return n || a ? "nokkrar sekúndur" : "nokkrum sekúndum";
                case "ss":
                    return t(e) ? s + (n || a ? "sekúndur" : "sekúndum") : s + "sekúnda";
                case "m":
                    return n ? "mínúta" : "mínútu";
                case "mm":
                    return t(e) ? s + (n || a ? "mínútur" : "mínútum") : n ? s + "mínúta" : s + "mínútu";
                case "hh":
                    return t(e) ? s + (n || a ? "klukkustundir" : "klukkustundum") : s + "klukkustund";
                case "d":
                    return n ? "dagur" : a ? "dag" : "degi";
                case "dd":
                    return t(e) ? n ? s + "dagar" : s + (a ? "daga" : "dögum") : n ? s + "dagur" : s + (a ? "dag" : "degi");
                case "M":
                    return n ? "mánuður" : a ? "mánuð" : "mánuði";
                case "MM":
                    return t(e) ? n ? s + "mánuðir" : s + (a ? "mánuði" : "mánuðum") : n ? s + "mánuður" : s + (a ? "mánuð" : "mánuði");
                case "y":
                    return n || a ? "ár" : "ári";
                case "yy":
                    return t(e) ? s + (n || a ? "ár" : "árum") : s + (n || a ? "ár" : "ári") } } e.defineLocale("is", { months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"), monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"), weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"), weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"), weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd, D. MMMM YYYY [kl.] H:mm" }, calendar: { sameDay: "[í dag kl.] LT", nextDay: "[á morgun kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[í gær kl.] LT", lastWeek: "[síðasta] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "eftir %s", past: "fyrir %s síðan", s: n, ss: n, m: n, mm: n, h: "klukkustund", hh: n, d: n, dd: n, M: n, MM: n, y: n, yy: n }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("it", { months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Oggi alle] LT", nextDay: "[Domani alle] LT", nextWeek: "dddd [alle] LT", lastDay: "[Ieri alle] LT", lastWeek: function() { switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT" } }, sameElse: "L" }, relativeTime: { future: function(e) { return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e }, past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("it-ch", { months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "domenica_lunedì_martedì_mercoledì_giovedì_venerdì_sabato".split("_"), weekdaysShort: "dom_lun_mar_mer_gio_ven_sab".split("_"), weekdaysMin: "do_lu_ma_me_gi_ve_sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Oggi alle] LT", nextDay: "[Domani alle] LT", nextWeek: "dddd [alle] LT", lastDay: "[Ieri alle] LT", lastWeek: function() { switch (this.day()) {
                        case 0:
                            return "[la scorsa] dddd [alle] LT";
                        default:
                            return "[lo scorso] dddd [alle] LT" } }, sameElse: "L" }, relativeTime: { future: function(e) { return (/^[0-9].+$/.test(e) ? "tra" : "in") + " " + e }, past: "%s fa", s: "alcuni secondi", ss: "%d secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("ja", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"), weekdaysShort: "日_月_火_水_木_金_土".split("_"), weekdaysMin: "日_月_火_水_木_金_土".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日 dddd HH:mm", l: "YYYY/MM/DD", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日(ddd) HH:mm" }, meridiemParse: /午前|午後/i, isPM: function(e) { return "午後" === e }, meridiem: function(e, t, n) { return e < 12 ? "午前" : "午後" }, calendar: { sameDay: "[今日] LT", nextDay: "[明日] LT", nextWeek: function(e) { return e.week() < this.week() ? "[来週]dddd LT" : "dddd LT" }, lastDay: "[昨日] LT", lastWeek: function(e) { return this.week() < e.week() ? "[先週]dddd LT" : "dddd LT" }, sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}日/, ordinal: function(e, t) { switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    default:
                        return e } }, relativeTime: { future: "%s後", past: "%s前", s: "数秒", ss: "%d秒", m: "1分", mm: "%d分", h: "1時間", hh: "%d時間", d: "1日", dd: "%d日", M: "1ヶ月", MM: "%dヶ月", y: "1年", yy: "%d年" } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("jv", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_Nopember_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nop_Des".split("_"), weekdays: "Minggu_Senen_Seloso_Rebu_Kemis_Jemuwah_Septu".split("_"), weekdaysShort: "Min_Sen_Sel_Reb_Kem_Jem_Sep".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sp".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /enjing|siyang|sonten|ndalu/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "enjing" === t ? e : "siyang" === t ? e >= 11 ? e : e + 12 : "sonten" === t || "ndalu" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 11 ? "enjing" : e < 15 ? "siyang" : e < 19 ? "sonten" : "ndalu" }, calendar: { sameDay: "[Dinten puniko pukul] LT", nextDay: "[Mbenjang pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kala wingi pukul] LT", lastWeek: "dddd [kepengker pukul] LT", sameElse: "L" }, relativeTime: { future: "wonten ing %s", past: "%s ingkang kepengker", s: "sawetawis detik", ss: "%d detik", m: "setunggal menit", mm: "%d menit", h: "setunggal jam", hh: "%d jam", d: "sedinten", dd: "%d dinten", M: "sewulan", MM: "%d wulan", y: "setaun", yy: "%d taun" }, week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("ka", { months: { standalone: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"), format: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_") }, monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"), weekdays: { standalone: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"), format: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_"), isFormat: /(წინა|შემდეგ)/ }, weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"), weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[დღეს] LT[-ზე]", nextDay: "[ხვალ] LT[-ზე]", lastDay: "[გუშინ] LT[-ზე]", nextWeek: "[შემდეგ] dddd LT[-ზე]", lastWeek: "[წინა] dddd LT-ზე", sameElse: "L" }, relativeTime: { future: function(e) { return /(წამი|წუთი|საათი|წელი)/.test(e) ? e.replace(/ი$/, "ში") : e + "ში" }, past: function(e) { return /(წამი|წუთი|საათი|დღე|თვე)/.test(e) ? e.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(e) ? e.replace(/წელი$/, "წლის წინ") : void 0 }, s: "რამდენიმე წამი", ss: "%d წამი", m: "წუთი", mm: "%d წუთი", h: "საათი", hh: "%d საათი", d: "დღე", dd: "%d დღე", M: "თვე", MM: "%d თვე", y: "წელი", yy: "%d წელი" }, dayOfMonthOrdinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/, ordinal: function(e) { return 0 === e ? e : 1 === e ? e + "-ლი" : e < 20 || e <= 100 && e % 20 == 0 || e % 100 == 0 ? "მე-" + e : e + "-ე" }, week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = { 0: "-ші", 1: "-ші", 2: "-ші", 3: "-ші", 4: "-ші", 5: "-ші", 6: "-шы", 7: "-ші", 8: "-ші", 9: "-шы", 10: "-шы", 20: "-шы", 30: "-шы", 40: "-шы", 50: "-ші", 60: "-шы", 70: "-ші", 80: "-ші", 90: "-шы", 100: "-ші" };
        e.defineLocale("kk", { months: "қаңтар_ақпан_наурыз_сәуір_мамыр_маусым_шілде_тамыз_қыркүйек_қазан_қараша_желтоқсан".split("_"), monthsShort: "қаң_ақп_нау_сәу_мам_мау_шіл_там_қыр_қаз_қар_жел".split("_"), weekdays: "жексенбі_дүйсенбі_сейсенбі_сәрсенбі_бейсенбі_жұма_сенбі".split("_"), weekdaysShort: "жек_дүй_сей_сәр_бей_жұм_сен".split("_"), weekdaysMin: "жк_дй_сй_ср_бй_жм_сн".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Бүгін сағат] LT", nextDay: "[Ертең сағат] LT", nextWeek: "dddd [сағат] LT", lastDay: "[Кеше сағат] LT", lastWeek: "[Өткен аптаның] dddd [сағат] LT", sameElse: "L" }, relativeTime: { future: "%s ішінде", past: "%s бұрын", s: "бірнеше секунд", ss: "%d секунд", m: "бір минут", mm: "%d минут", h: "бір сағат", hh: "%d сағат", d: "бір күн", dd: "%d күн", M: "бір ай", MM: "%d ай", y: "бір жыл", yy: "%d жыл" }, dayOfMonthOrdinalParse: /\d{1,2}-(ші|шы)/, ordinal: function(e) { var n = e % 10,
                    r = e >= 100 ? 100 : null; return e + (t[e] || t[n] || t[r]) }, week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = { 1: "១", 2: "២", 3: "៣", 4: "៤", 5: "៥", 6: "៦", 7: "៧", 8: "៨", 9: "៩", 0: "០" },
            n = { "១": "1", "២": "2", "៣": "3", "៤": "4", "៥": "5", "៦": "6", "៧": "7", "៨": "8", "៩": "9", "០": "0" };
        e.defineLocale("km", { months: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"), monthsShort: "មករា_កុម្ភៈ_មីនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"), weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), weekdaysShort: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"), weekdaysMin: "អា_ច_អ_ព_ព្រ_សុ_ស".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /ព្រឹក|ល្ងាច/, isPM: function(e) { return "ល្ងាច" === e }, meridiem: function(e, t, n) { return e < 12 ? "ព្រឹក" : "ល្ងាច" }, calendar: { sameDay: "[ថ្ងៃនេះ ម៉ោង] LT", nextDay: "[ស្អែក ម៉ោង] LT", nextWeek: "dddd [ម៉ោង] LT", lastDay: "[ម្សិលមិញ ម៉ោង] LT", lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT", sameElse: "L" }, relativeTime: { future: "%sទៀត", past: "%sមុន", s: "ប៉ុន្មានវិនាទី", ss: "%d វិនាទី", m: "មួយនាទី", mm: "%d នាទី", h: "មួយម៉ោង", hh: "%d ម៉ោង", d: "មួយថ្ងៃ", dd: "%d ថ្ងៃ", M: "មួយខែ", MM: "%d ខែ", y: "មួយឆ្នាំ", yy: "%d ឆ្នាំ" }, dayOfMonthOrdinalParse: /ទី\d{1,2}/, ordinal: "ទី%d", preparse: function(e) { return e.replace(/[១២៣៤៥៦៧៨៩០]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = { 1: "೧", 2: "೨", 3: "೩", 4: "೪", 5: "೫", 6: "೬", 7: "೭", 8: "೮", 9: "೯", 0: "೦" },
            n = { "೧": "1", "೨": "2", "೩": "3", "೪": "4", "೫": "5", "೬": "6", "೭": "7", "೮": "8", "೯": "9", "೦": "0" };
        e.defineLocale("kn", { months: "ಜನವರಿ_ಫೆಬ್ರವರಿ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂಬರ್_ಅಕ್ಟೋಬರ್_ನವೆಂಬರ್_ಡಿಸೆಂಬರ್".split("_"), monthsShort: "ಜನ_ಫೆಬ್ರ_ಮಾರ್ಚ್_ಏಪ್ರಿಲ್_ಮೇ_ಜೂನ್_ಜುಲೈ_ಆಗಸ್ಟ್_ಸೆಪ್ಟೆಂ_ಅಕ್ಟೋ_ನವೆಂ_ಡಿಸೆಂ".split("_"), monthsParseExact: !0, weekdays: "ಭಾನುವಾರ_ಸೋಮವಾರ_ಮಂಗಳವಾರ_ಬುಧವಾರ_ಗುರುವಾರ_ಶುಕ್ರವಾರ_ಶನಿವಾರ".split("_"), weekdaysShort: "ಭಾನು_ಸೋಮ_ಮಂಗಳ_ಬುಧ_ಗುರು_ಶುಕ್ರ_ಶನಿ".split("_"), weekdaysMin: "ಭಾ_ಸೋ_ಮಂ_ಬು_ಗು_ಶು_ಶ".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[ಇಂದು] LT", nextDay: "[ನಾಳೆ] LT", nextWeek: "dddd, LT", lastDay: "[ನಿನ್ನೆ] LT", lastWeek: "[ಕೊನೆಯ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ನಂತರ", past: "%s ಹಿಂದೆ", s: "ಕೆಲವು ಕ್ಷಣಗಳು", ss: "%d ಸೆಕೆಂಡುಗಳು", m: "ಒಂದು ನಿಮಿಷ", mm: "%d ನಿಮಿಷ", h: "ಒಂದು ಗಂಟೆ", hh: "%d ಗಂಟೆ", d: "ಒಂದು ದಿನ", dd: "%d ದಿನ", M: "ಒಂದು ತಿಂಗಳು", MM: "%d ತಿಂಗಳು", y: "ಒಂದು ವರ್ಷ", yy: "%d ವರ್ಷ" }, preparse: function(e) { return e.replace(/[೧೨೩೪೫೬೭೮೯೦]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /ರಾತ್ರಿ|ಬೆಳಿಗ್ಗೆ|ಮಧ್ಯಾಹ್ನ|ಸಂಜೆ/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "ರಾತ್ರಿ" === t ? e < 4 ? e : e + 12 : "ಬೆಳಿಗ್ಗೆ" === t ? e : "ಮಧ್ಯಾಹ್ನ" === t ? e >= 10 ? e : e + 12 : "ಸಂಜೆ" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "ರಾತ್ರಿ" : e < 10 ? "ಬೆಳಿಗ್ಗೆ" : e < 17 ? "ಮಧ್ಯಾಹ್ನ" : e < 20 ? "ಸಂಜೆ" : "ರಾತ್ರಿ" }, dayOfMonthOrdinalParse: /\d{1,2}(ನೇ)/, ordinal: function(e) { return e + "ನೇ" }, week: { dow: 0, doy: 6 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("ko", { months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"), weekdaysShort: "일_월_화_수_목_금_토".split("_"), weekdaysMin: "일_월_화_수_목_금_토".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "YYYY.MM.DD.", LL: "YYYY년 MMMM D일", LLL: "YYYY년 MMMM D일 A h:mm", LLLL: "YYYY년 MMMM D일 dddd A h:mm", l: "YYYY.MM.DD.", ll: "YYYY년 MMMM D일", lll: "YYYY년 MMMM D일 A h:mm", llll: "YYYY년 MMMM D일 dddd A h:mm" }, calendar: { sameDay: "오늘 LT", nextDay: "내일 LT", nextWeek: "dddd LT", lastDay: "어제 LT", lastWeek: "지난주 dddd LT", sameElse: "L" }, relativeTime: { future: "%s 후", past: "%s 전", s: "몇 초", ss: "%d초", m: "1분", mm: "%d분", h: "한 시간", hh: "%d시간", d: "하루", dd: "%d일", M: "한 달", MM: "%d달", y: "일 년", yy: "%d년" }, dayOfMonthOrdinalParse: /\d{1,2}(일|월|주)/, ordinal: function(e, t) { switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "일";
                    case "M":
                        return e + "월";
                    case "w":
                    case "W":
                        return e + "주";
                    default:
                        return e } }, meridiemParse: /오전|오후/, isPM: function(e) { return "오후" === e }, meridiem: function(e, t, n) { return e < 12 ? "오전" : "오후" } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" },
            n = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" },
            r = ["کانونی دووەم", "شوبات", "ئازار", "نیسان", "ئایار", "حوزەیران", "تەمموز", "ئاب", "ئەیلوول", "تشرینی یەكەم", "تشرینی دووەم", "كانونی یەکەم"];
        e.defineLocale("ku", { months: r, monthsShort: r, weekdays: "یه‌كشه‌ممه‌_دووشه‌ممه‌_سێشه‌ممه‌_چوارشه‌ممه‌_پێنجشه‌ممه‌_هه‌ینی_شه‌ممه‌".split("_"), weekdaysShort: "یه‌كشه‌م_دووشه‌م_سێشه‌م_چوارشه‌م_پێنجشه‌م_هه‌ینی_شه‌ممه‌".split("_"), weekdaysMin: "ی_د_س_چ_پ_ه_ش".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, meridiemParse: /ئێواره‌|به‌یانی/, isPM: function(e) { return /ئێواره‌/.test(e) }, meridiem: function(e, t, n) { return e < 12 ? "به‌یانی" : "ئێواره‌" }, calendar: { sameDay: "[ئه‌مرۆ كاتژمێر] LT", nextDay: "[به‌یانی كاتژمێر] LT", nextWeek: "dddd [كاتژمێر] LT", lastDay: "[دوێنێ كاتژمێر] LT", lastWeek: "dddd [كاتژمێر] LT", sameElse: "L" }, relativeTime: { future: "له‌ %s", past: "%s", s: "چه‌ند چركه‌یه‌ك", ss: "چركه‌ %d", m: "یه‌ك خوله‌ك", mm: "%d خوله‌ك", h: "یه‌ك كاتژمێر", hh: "%d كاتژمێر", d: "یه‌ك ڕۆژ", dd: "%d ڕۆژ", M: "یه‌ك مانگ", MM: "%d مانگ", y: "یه‌ك ساڵ", yy: "%d ساڵ" }, preparse: function(e) { return e.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function(e) { return n[e] }).replace(/،/g, ",") }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }).replace(/,/g, "،") }, week: { dow: 6, doy: 12 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = { 0: "-чү", 1: "-чи", 2: "-чи", 3: "-чү", 4: "-чү", 5: "-чи", 6: "-чы", 7: "-чи", 8: "-чи", 9: "-чу", 10: "-чу", 20: "-чы", 30: "-чу", 40: "-чы", 50: "-чү", 60: "-чы", 70: "-чи", 80: "-чи", 90: "-чу", 100: "-чү" };
        e.defineLocale("ky", { months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), monthsShort: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"), weekdays: "Жекшемби_Дүйшөмбү_Шейшемби_Шаршемби_Бейшемби_Жума_Ишемби".split("_"), weekdaysShort: "Жек_Дүй_Шей_Шар_Бей_Жум_Ише".split("_"), weekdaysMin: "Жк_Дй_Шй_Шр_Бй_Жм_Иш".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Бүгүн саат] LT", nextDay: "[Эртең саат] LT", nextWeek: "dddd [саат] LT", lastDay: "[Кечээ саат] LT", lastWeek: "[Өткөн аптанын] dddd [күнү] [саат] LT", sameElse: "L" }, relativeTime: { future: "%s ичинде", past: "%s мурун", s: "бирнече секунд", ss: "%d секунд", m: "бир мүнөт", mm: "%d мүнөт", h: "бир саат", hh: "%d саат", d: "бир күн", dd: "%d күн", M: "бир ай", MM: "%d ай", y: "бир жыл", yy: "%d жыл" }, dayOfMonthOrdinalParse: /\d{1,2}-(чи|чы|чү|чу)/, ordinal: function(e) { var n = e % 10,
                    r = e >= 100 ? 100 : null; return e + (t[e] || t[n] || t[r]) }, week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";

        function t(e, t, n, r) { var a = { m: ["eng Minutt", "enger Minutt"], h: ["eng Stonn", "enger Stonn"], d: ["een Dag", "engem Dag"], M: ["ee Mount", "engem Mount"], y: ["ee Joer", "engem Joer"] }; return t ? a[n][0] : a[n][1] }

        function n(e) { if (e = parseInt(e, 10), isNaN(e)) return !1; if (e < 0) return !0; if (e < 10) return 4 <= e && e <= 7; if (e < 100) { var t = e % 10,
                    r = e / 10; return n(0 === t ? r : t) } if (e < 1e4) { for (; e >= 10;) e /= 10; return n(e) } return n(e /= 1e3) } e.defineLocale("lb", { months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), monthsParseExact: !0, weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"), weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm [Auer]", LTS: "H:mm:ss [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm [Auer]", LLLL: "dddd, D. MMMM YYYY H:mm [Auer]" }, calendar: { sameDay: "[Haut um] LT", sameElse: "L", nextDay: "[Muer um] LT", nextWeek: "dddd [um] LT", lastDay: "[Gëschter um] LT", lastWeek: function() { switch (this.day()) {
                        case 2:
                        case 4:
                            return "[Leschten] dddd [um] LT";
                        default:
                            return "[Leschte] dddd [um] LT" } } }, relativeTime: { future: function(e) { return n(e.substr(0, e.indexOf(" "))) ? "a " + e : "an " + e }, past: function(e) { return n(e.substr(0, e.indexOf(" "))) ? "viru " + e : "virun " + e }, s: "e puer Sekonnen", ss: "%d Sekonnen", m: t, mm: "%d Minutten", h: t, hh: "%d Stonnen", d: t, dd: "%d Deeg", M: t, MM: "%d Méint", y: t, yy: "%d Joer" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("lo", { months: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), monthsShort: "ມັງກອນ_ກຸມພາ_ມີນາ_ເມສາ_ພຶດສະພາ_ມິຖຸນາ_ກໍລະກົດ_ສິງຫາ_ກັນຍາ_ຕຸລາ_ພະຈິກ_ທັນວາ".split("_"), weekdays: "ອາທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), weekdaysShort: "ທິດ_ຈັນ_ອັງຄານ_ພຸດ_ພະຫັດ_ສຸກ_ເສົາ".split("_"), weekdaysMin: "ທ_ຈ_ອຄ_ພ_ພຫ_ສກ_ສ".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "ວັນdddd D MMMM YYYY HH:mm" }, meridiemParse: /ຕອນເຊົ້າ|ຕອນແລງ/, isPM: function(e) { return "ຕອນແລງ" === e }, meridiem: function(e, t, n) { return e < 12 ? "ຕອນເຊົ້າ" : "ຕອນແລງ" }, calendar: { sameDay: "[ມື້ນີ້ເວລາ] LT", nextDay: "[ມື້ອື່ນເວລາ] LT", nextWeek: "[ວັນ]dddd[ໜ້າເວລາ] LT", lastDay: "[ມື້ວານນີ້ເວລາ] LT", lastWeek: "[ວັນ]dddd[ແລ້ວນີ້ເວລາ] LT", sameElse: "L" }, relativeTime: { future: "ອີກ %s", past: "%sຜ່ານມາ", s: "ບໍ່ເທົ່າໃດວິນາທີ", ss: "%d ວິນາທີ", m: "1 ນາທີ", mm: "%d ນາທີ", h: "1 ຊົ່ວໂມງ", hh: "%d ຊົ່ວໂມງ", d: "1 ມື້", dd: "%d ມື້", M: "1 ເດືອນ", MM: "%d ເດືອນ", y: "1 ປີ", yy: "%d ປີ" }, dayOfMonthOrdinalParse: /(ທີ່)\d{1,2}/, ordinal: function(e) { return "ທີ່" + e } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = { ss: "sekundė_sekundžių_sekundes", m: "minutė_minutės_minutę", mm: "minutės_minučių_minutes", h: "valanda_valandos_valandą", hh: "valandos_valandų_valandas", d: "diena_dienos_dieną", dd: "dienos_dienų_dienas", M: "mėnuo_mėnesio_mėnesį", MM: "mėnesiai_mėnesių_mėnesius", y: "metai_metų_metus", yy: "metai_metų_metus" };

        function n(e, t, n, r) { return t ? a(n)[0] : r ? a(n)[1] : a(n)[2] }

        function r(e) { return e % 10 == 0 || e > 10 && e < 20 }

        function a(e) { return t[e].split("_") }

        function s(e, t, s, i) { var o = e + " "; return 1 === e ? o + n(0, t, s[0], i) : t ? o + (r(e) ? a(s)[1] : a(s)[0]) : i ? o + a(s)[1] : o + (r(e) ? a(s)[1] : a(s)[2]) } e.defineLocale("lt", { months: { format: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), standalone: "sausis_vasaris_kovas_balandis_gegužė_birželis_liepa_rugpjūtis_rugsėjis_spalis_lapkritis_gruodis".split("_"), isFormat: /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?|MMMM?(\[[^\[\]]*\]|\s)+D[oD]?/ }, monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), weekdays: { format: "sekmadienį_pirmadienį_antradienį_trečiadienį_ketvirtadienį_penktadienį_šeštadienį".split("_"), standalone: "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"), isFormat: /dddd HH:mm/ }, weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"), weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], HH:mm [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, HH:mm [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], HH:mm [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, HH:mm [val.]" }, calendar: { sameDay: "[Šiandien] LT", nextDay: "[Rytoj] LT", nextWeek: "dddd LT", lastDay: "[Vakar] LT", lastWeek: "[Praėjusį] dddd LT", sameElse: "L" }, relativeTime: { future: "po %s", past: "prieš %s", s: function(e, t, n, r) { return t ? "kelios sekundės" : r ? "kelių sekundžių" : "kelias sekundes" }, ss: s, m: n, mm: s, h: n, hh: s, d: n, dd: s, M: n, MM: s, y: n, yy: s }, dayOfMonthOrdinalParse: /\d{1,2}-oji/, ordinal: function(e) { return e + "-oji" }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = { ss: "sekundes_sekundēm_sekunde_sekundes".split("_"), m: "minūtes_minūtēm_minūte_minūtes".split("_"), mm: "minūtes_minūtēm_minūte_minūtes".split("_"), h: "stundas_stundām_stunda_stundas".split("_"), hh: "stundas_stundām_stunda_stundas".split("_"), d: "dienas_dienām_diena_dienas".split("_"), dd: "dienas_dienām_diena_dienas".split("_"), M: "mēneša_mēnešiem_mēnesis_mēneši".split("_"), MM: "mēneša_mēnešiem_mēnesis_mēneši".split("_"), y: "gada_gadiem_gads_gadi".split("_"), yy: "gada_gadiem_gads_gadi".split("_") };

        function n(e, t, n) { return n ? t % 10 == 1 && t % 100 != 11 ? e[2] : e[3] : t % 10 == 1 && t % 100 != 11 ? e[0] : e[1] }

        function r(e, r, a) { return e + " " + n(t[a], e, r) }

        function a(e, r, a) { return n(t[a], e, r) } e.defineLocale("lv", { months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"), monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"), weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"), weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY.", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, HH:mm", LLLL: "YYYY. [gada] D. MMMM, dddd, HH:mm" }, calendar: { sameDay: "[Šodien pulksten] LT", nextDay: "[Rīt pulksten] LT", nextWeek: "dddd [pulksten] LT", lastDay: "[Vakar pulksten] LT", lastWeek: "[Pagājušā] dddd [pulksten] LT", sameElse: "L" }, relativeTime: { future: "pēc %s", past: "pirms %s", s: function(e, t) { return t ? "dažas sekundes" : "dažām sekundēm" }, ss: r, m: a, mm: r, h: a, hh: r, d: a, dd: r, M: a, MM: r, y: a, yy: r }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = { words: { ss: ["sekund", "sekunda", "sekundi"], m: ["jedan minut", "jednog minuta"], mm: ["minut", "minuta", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mjesec", "mjeseca", "mjeseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function(e, t) { return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2] }, translate: function(e, n, r) { var a = t.words[r]; return 1 === r.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a) } };
        e.defineLocale("me", { months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sjutra u] LT", nextWeek: function() { switch (this.day()) {
                        case 0:
                            return "[u] [nedjelju] [u] LT";
                        case 3:
                            return "[u] [srijedu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT" } }, lastDay: "[juče u] LT", lastWeek: function() { return ["[prošle] [nedjelje] [u] LT", "[prošlog] [ponedjeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srijede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()] }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "nekoliko sekundi", ss: t.translate, m: t.translate, mm: t.translate, h: t.translate, hh: t.translate, d: "dan", dd: t.translate, M: "mjesec", MM: t.translate, y: "godinu", yy: t.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("mi", { months: "Kohi-tāte_Hui-tanguru_Poutū-te-rangi_Paenga-whāwhā_Haratua_Pipiri_Hōngoingoi_Here-turi-kōkā_Mahuru_Whiringa-ā-nuku_Whiringa-ā-rangi_Hakihea".split("_"), monthsShort: "Kohi_Hui_Pou_Pae_Hara_Pipi_Hōngoi_Here_Mahu_Whi-nu_Whi-ra_Haki".split("_"), monthsRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,3}/i, monthsShortStrictRegex: /(?:['a-z\u0101\u014D\u016B]+\-?){1,2}/i, weekdays: "Rātapu_Mane_Tūrei_Wenerei_Tāite_Paraire_Hātarei".split("_"), weekdaysShort: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), weekdaysMin: "Ta_Ma_Tū_We_Tāi_Pa_Hā".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [i] HH:mm", LLLL: "dddd, D MMMM YYYY [i] HH:mm" }, calendar: { sameDay: "[i teie mahana, i] LT", nextDay: "[apopo i] LT", nextWeek: "dddd [i] LT", lastDay: "[inanahi i] LT", lastWeek: "dddd [whakamutunga i] LT", sameElse: "L" }, relativeTime: { future: "i roto i %s", past: "%s i mua", s: "te hēkona ruarua", ss: "%d hēkona", m: "he meneti", mm: "%d meneti", h: "te haora", hh: "%d haora", d: "he ra", dd: "%d ra", M: "he marama", MM: "%d marama", y: "he tau", yy: "%d tau" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("mk", { months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"), monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"), weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"), weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"), weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[Денес во] LT", nextDay: "[Утре во] LT", nextWeek: "[Во] dddd [во] LT", lastDay: "[Вчера во] LT", lastWeek: function() { switch (this.day()) {
                        case 0:
                        case 3:
                        case 6:
                            return "[Изминатата] dddd [во] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[Изминатиот] dddd [во] LT" } }, sameElse: "L" }, relativeTime: { future: "после %s", past: "пред %s", s: "неколку секунди", ss: "%d секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дена", M: "месец", MM: "%d месеци", y: "година", yy: "%d години" }, dayOfMonthOrdinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/, ordinal: function(e) { var t = e % 10,
                    n = e % 100; return 0 === e ? e + "-ев" : 0 === n ? e + "-ен" : n > 10 && n < 20 ? e + "-ти" : 1 === t ? e + "-ви" : 2 === t ? e + "-ри" : 7 === t || 8 === t ? e + "-ми" : e + "-ти" }, week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("ml", { months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"), monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"), monthsParseExact: !0, weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"), weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"), weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"), longDateFormat: { LT: "A h:mm -നു", LTS: "A h:mm:ss -നു", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm -നു", LLLL: "dddd, D MMMM YYYY, A h:mm -നു" }, calendar: { sameDay: "[ഇന്ന്] LT", nextDay: "[നാളെ] LT", nextWeek: "dddd, LT", lastDay: "[ഇന്നലെ] LT", lastWeek: "[കഴിഞ്ഞ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s കഴിഞ്ഞ്", past: "%s മുൻപ്", s: "അൽപ നിമിഷങ്ങൾ", ss: "%d സെക്കൻഡ്", m: "ഒരു മിനിറ്റ്", mm: "%d മിനിറ്റ്", h: "ഒരു മണിക്കൂർ", hh: "%d മണിക്കൂർ", d: "ഒരു ദിവസം", dd: "%d ദിവസം", M: "ഒരു മാസം", MM: "%d മാസം", y: "ഒരു വർഷം", yy: "%d വർഷം" }, meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i, meridiemHour: function(e, t) { return 12 === e && (e = 0), "രാത്രി" === t && e >= 4 || "ഉച്ച കഴിഞ്ഞ്" === t || "വൈകുന്നേരം" === t ? e + 12 : e }, meridiem: function(e, t, n) { return e < 4 ? "രാത്രി" : e < 12 ? "രാവിലെ" : e < 17 ? "ഉച്ച കഴിഞ്ഞ്" : e < 20 ? "വൈകുന്നേരം" : "രാത്രി" } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";

        function t(e, t, n, r) { switch (n) {
                case "s":
                    return t ? "хэдхэн секунд" : "хэдхэн секундын";
                case "ss":
                    return e + (t ? " секунд" : " секундын");
                case "m":
                case "mm":
                    return e + (t ? " минут" : " минутын");
                case "h":
                case "hh":
                    return e + (t ? " цаг" : " цагийн");
                case "d":
                case "dd":
                    return e + (t ? " өдөр" : " өдрийн");
                case "M":
                case "MM":
                    return e + (t ? " сар" : " сарын");
                case "y":
                case "yy":
                    return e + (t ? " жил" : " жилийн");
                default:
                    return e } } e.defineLocale("mn", { months: "Нэгдүгээр сар_Хоёрдугаар сар_Гуравдугаар сар_Дөрөвдүгээр сар_Тавдугаар сар_Зургадугаар сар_Долдугаар сар_Наймдугаар сар_Есдүгээр сар_Аравдугаар сар_Арван нэгдүгээр сар_Арван хоёрдугаар сар".split("_"), monthsShort: "1 сар_2 сар_3 сар_4 сар_5 сар_6 сар_7 сар_8 сар_9 сар_10 сар_11 сар_12 сар".split("_"), monthsParseExact: !0, weekdays: "Ням_Даваа_Мягмар_Лхагва_Пүрэв_Баасан_Бямба".split("_"), weekdaysShort: "Ням_Дав_Мяг_Лха_Пүр_Баа_Бям".split("_"), weekdaysMin: "Ня_Да_Мя_Лх_Пү_Ба_Бя".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY оны MMMMын D", LLL: "YYYY оны MMMMын D HH:mm", LLLL: "dddd, YYYY оны MMMMын D HH:mm" }, meridiemParse: /ҮӨ|ҮХ/i, isPM: function(e) { return "ҮХ" === e }, meridiem: function(e, t, n) { return e < 12 ? "ҮӨ" : "ҮХ" }, calendar: { sameDay: "[Өнөөдөр] LT", nextDay: "[Маргааш] LT", nextWeek: "[Ирэх] dddd LT", lastDay: "[Өчигдөр] LT", lastWeek: "[Өнгөрсөн] dddd LT", sameElse: "L" }, relativeTime: { future: "%s дараа", past: "%s өмнө", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2} өдөр/, ordinal: function(e, t) { switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + " өдөр";
                    default:
                        return e } } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
            n = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };

        function r(e, t, n, r) { var a = ""; if (t) switch (n) {
                case "s":
                    a = "काही सेकंद"; break;
                case "ss":
                    a = "%d सेकंद"; break;
                case "m":
                    a = "एक मिनिट"; break;
                case "mm":
                    a = "%d मिनिटे"; break;
                case "h":
                    a = "एक तास"; break;
                case "hh":
                    a = "%d तास"; break;
                case "d":
                    a = "एक दिवस"; break;
                case "dd":
                    a = "%d दिवस"; break;
                case "M":
                    a = "एक महिना"; break;
                case "MM":
                    a = "%d महिने"; break;
                case "y":
                    a = "एक वर्ष"; break;
                case "yy":
                    a = "%d वर्षे" } else switch (n) {
                case "s":
                    a = "काही सेकंदां"; break;
                case "ss":
                    a = "%d सेकंदां"; break;
                case "m":
                    a = "एका मिनिटा"; break;
                case "mm":
                    a = "%d मिनिटां"; break;
                case "h":
                    a = "एका तासा"; break;
                case "hh":
                    a = "%d तासां"; break;
                case "d":
                    a = "एका दिवसा"; break;
                case "dd":
                    a = "%d दिवसां"; break;
                case "M":
                    a = "एका महिन्या"; break;
                case "MM":
                    a = "%d महिन्यां"; break;
                case "y":
                    a = "एका वर्षा"; break;
                case "yy":
                    a = "%d वर्षां" }
            return a.replace(/%d/i, e) } e.defineLocale("mr", { months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"), monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"), monthsParseExact: !0, weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), longDateFormat: { LT: "A h:mm वाजता", LTS: "A h:mm:ss वाजता", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm वाजता", LLLL: "dddd, D MMMM YYYY, A h:mm वाजता" }, calendar: { sameDay: "[आज] LT", nextDay: "[उद्या] LT", nextWeek: "dddd, LT", lastDay: "[काल] LT", lastWeek: "[मागील] dddd, LT", sameElse: "L" }, relativeTime: { future: "%sमध्ये", past: "%sपूर्वी", s: r, ss: r, m: r, mm: r, h: r, hh: r, d: r, dd: r, M: r, MM: r, y: r, yy: r }, preparse: function(e) { return e.replace(/[१२३४५६७८९०]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "रात्री" === t ? e < 4 ? e : e + 12 : "सकाळी" === t ? e : "दुपारी" === t ? e >= 10 ? e : e + 12 : "सायंकाळी" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "रात्री" : e < 10 ? "सकाळी" : e < 17 ? "दुपारी" : e < 20 ? "सायंकाळी" : "रात्री" }, week: { dow: 0, doy: 6 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("ms", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", ss: "%d saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("ms-my", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] HH.mm", LLLL: "dddd, D MMMM YYYY [pukul] HH.mm" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "pagi" === t ? e : "tengahari" === t ? e >= 11 ? e : e + 12 : "petang" === t || "malam" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 11 ? "pagi" : e < 15 ? "tengahari" : e < 19 ? "petang" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", ss: "%d saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("mt", { months: "Jannar_Frar_Marzu_April_Mejju_Ġunju_Lulju_Awwissu_Settembru_Ottubru_Novembru_Diċembru".split("_"), monthsShort: "Jan_Fra_Mar_Apr_Mej_Ġun_Lul_Aww_Set_Ott_Nov_Diċ".split("_"), weekdays: "Il-Ħadd_It-Tnejn_It-Tlieta_L-Erbgħa_Il-Ħamis_Il-Ġimgħa_Is-Sibt".split("_"), weekdaysShort: "Ħad_Tne_Tli_Erb_Ħam_Ġim_Sib".split("_"), weekdaysMin: "Ħa_Tn_Tl_Er_Ħa_Ġi_Si".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Illum fil-]LT", nextDay: "[Għada fil-]LT", nextWeek: "dddd [fil-]LT", lastDay: "[Il-bieraħ fil-]LT", lastWeek: "dddd [li għadda] [fil-]LT", sameElse: "L" }, relativeTime: { future: "f’ %s", past: "%s ilu", s: "ftit sekondi", ss: "%d sekondi", m: "minuta", mm: "%d minuti", h: "siegħa", hh: "%d siegħat", d: "ġurnata", dd: "%d ġranet", M: "xahar", MM: "%d xhur", y: "sena", yy: "%d sni" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = { 1: "၁", 2: "၂", 3: "၃", 4: "၄", 5: "၅", 6: "၆", 7: "၇", 8: "၈", 9: "၉", 0: "၀" },
            n = { "၁": "1", "၂": "2", "၃": "3", "၄": "4", "၅": "5", "၆": "6", "၇": "7", "၈": "8", "၉": "9", "၀": "0" };
        e.defineLocale("my", { months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"), monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"), weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"), weekdaysShort: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), weekdaysMin: "နွေ_လာ_ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[ယနေ.] LT [မှာ]", nextDay: "[မနက်ဖြန်] LT [မှာ]", nextWeek: "dddd LT [မှာ]", lastDay: "[မနေ.က] LT [မှာ]", lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]", sameElse: "L" }, relativeTime: { future: "လာမည့် %s မှာ", past: "လွန်ခဲ့သော %s က", s: "စက္ကန်.အနည်းငယ်", ss: "%d စက္ကန့်", m: "တစ်မိနစ်", mm: "%d မိနစ်", h: "တစ်နာရီ", hh: "%d နာရီ", d: "တစ်ရက်", dd: "%d ရက်", M: "တစ်လ", MM: "%d လ", y: "တစ်နှစ်", yy: "%d နှစ်" }, preparse: function(e) { return e.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("nb", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan._feb._mars_april_mai_juni_juli_aug._sep._okt._nov._des.".split("_"), monthsParseExact: !0, weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "sø._ma._ti._on._to._fr._lø.".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] HH:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[i går kl.] LT", lastWeek: "[forrige] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "noen sekunder", ss: "%d sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en måned", MM: "%d måneder", y: "ett år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" },
            n = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" };
        e.defineLocale("ne", { months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"), monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"), monthsParseExact: !0, weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"), weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"), weekdaysMin: "आ._सो._मं._बु._बि._शु._श.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "Aको h:mm बजे", LTS: "Aको h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, Aको h:mm बजे", LLLL: "dddd, D MMMM YYYY, Aको h:mm बजे" }, preparse: function(e) { return e.replace(/[१२३४५६७८९०]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /राति|बिहान|दिउँसो|साँझ/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "राति" === t ? e < 4 ? e : e + 12 : "बिहान" === t ? e : "दिउँसो" === t ? e >= 10 ? e : e + 12 : "साँझ" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 3 ? "राति" : e < 12 ? "बिहान" : e < 16 ? "दिउँसो" : e < 20 ? "साँझ" : "राति" }, calendar: { sameDay: "[आज] LT", nextDay: "[भोलि] LT", nextWeek: "[आउँदो] dddd[,] LT", lastDay: "[हिजो] LT", lastWeek: "[गएको] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%sमा", past: "%s अगाडि", s: "केही क्षण", ss: "%d सेकेण्ड", m: "एक मिनेट", mm: "%d मिनेट", h: "एक घण्टा", hh: "%d घण्टा", d: "एक दिन", dd: "%d दिन", M: "एक महिना", MM: "%d महिना", y: "एक बर्ष", yy: "%d बर्ष" }, week: { dow: 0, doy: 6 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            r = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            a = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function(e, r) { return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t }, monthsRegex: a, monthsShortRegex: a, monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: r, longMonthsParse: r, shortMonthsParse: r, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", ss: "%d seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"),
            n = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"),
            r = [/^jan/i, /^feb/i, /^maart|mrt.?$/i, /^apr/i, /^mei$/i, /^jun[i.]?$/i, /^jul[i.]?$/i, /^aug/i, /^sep/i, /^okt/i, /^nov/i, /^dec/i],
            a = /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december|jan\.?|feb\.?|mrt\.?|apr\.?|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i;
        e.defineLocale("nl-be", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function(e, r) { return e ? /-MMM-/.test(r) ? n[e.month()] : t[e.month()] : t }, monthsRegex: a, monthsShortRegex: a, monthsStrictRegex: /^(januari|februari|maart|april|mei|ju[nl]i|augustus|september|oktober|november|december)/i, monthsShortStrictRegex: /^(jan\.?|feb\.?|mrt\.?|apr\.?|mei|ju[nl]\.?|aug\.?|sep\.?|okt\.?|nov\.?|dec\.?)/i, monthsParse: r, longMonthsParse: r, shortMonthsParse: r, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "zo_ma_di_wo_do_vr_za".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", ss: "%d seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" }, dayOfMonthOrdinalParse: /\d{1,2}(ste|de)/, ordinal: function(e) { return e + (1 === e || 8 === e || e >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("nn", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"), weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] H:mm", LLLL: "dddd D. MMMM YYYY [kl.] HH:mm" }, calendar: { sameDay: "[I dag klokka] LT", nextDay: "[I morgon klokka] LT", nextWeek: "dddd [klokka] LT", lastDay: "[I går klokka] LT", lastWeek: "[Føregåande] dddd [klokka] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s sidan", s: "nokre sekund", ss: "%d sekund", m: "eit minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein månad", MM: "%d månader", y: "eit år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = { 1: "੧", 2: "੨", 3: "੩", 4: "੪", 5: "੫", 6: "੬", 7: "੭", 8: "੮", 9: "੯", 0: "੦" },
            n = { "੧": "1", "੨": "2", "੩": "3", "੪": "4", "੫": "5", "੬": "6", "੭": "7", "੮": "8", "੯": "9", "੦": "0" };
        e.defineLocale("pa-in", { months: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"), monthsShort: "ਜਨਵਰੀ_ਫ਼ਰਵਰੀ_ਮਾਰਚ_ਅਪ੍ਰੈਲ_ਮਈ_ਜੂਨ_ਜੁਲਾਈ_ਅਗਸਤ_ਸਤੰਬਰ_ਅਕਤੂਬਰ_ਨਵੰਬਰ_ਦਸੰਬਰ".split("_"), weekdays: "ਐਤਵਾਰ_ਸੋਮਵਾਰ_ਮੰਗਲਵਾਰ_ਬੁਧਵਾਰ_ਵੀਰਵਾਰ_ਸ਼ੁੱਕਰਵਾਰ_ਸ਼ਨੀਚਰਵਾਰ".split("_"), weekdaysShort: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"), weekdaysMin: "ਐਤ_ਸੋਮ_ਮੰਗਲ_ਬੁਧ_ਵੀਰ_ਸ਼ੁਕਰ_ਸ਼ਨੀ".split("_"), longDateFormat: { LT: "A h:mm ਵਜੇ", LTS: "A h:mm:ss ਵਜੇ", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm ਵਜੇ", LLLL: "dddd, D MMMM YYYY, A h:mm ਵਜੇ" }, calendar: { sameDay: "[ਅਜ] LT", nextDay: "[ਕਲ] LT", nextWeek: "[ਅਗਲਾ] dddd, LT", lastDay: "[ਕਲ] LT", lastWeek: "[ਪਿਛਲੇ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ਵਿੱਚ", past: "%s ਪਿਛਲੇ", s: "ਕੁਝ ਸਕਿੰਟ", ss: "%d ਸਕਿੰਟ", m: "ਇਕ ਮਿੰਟ", mm: "%d ਮਿੰਟ", h: "ਇੱਕ ਘੰਟਾ", hh: "%d ਘੰਟੇ", d: "ਇੱਕ ਦਿਨ", dd: "%d ਦਿਨ", M: "ਇੱਕ ਮਹੀਨਾ", MM: "%d ਮਹੀਨੇ", y: "ਇੱਕ ਸਾਲ", yy: "%d ਸਾਲ" }, preparse: function(e) { return e.replace(/[੧੨੩੪੫੬੭੮੯੦]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /ਰਾਤ|ਸਵੇਰ|ਦੁਪਹਿਰ|ਸ਼ਾਮ/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "ਰਾਤ" === t ? e < 4 ? e : e + 12 : "ਸਵੇਰ" === t ? e : "ਦੁਪਹਿਰ" === t ? e >= 10 ? e : e + 12 : "ਸ਼ਾਮ" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "ਰਾਤ" : e < 10 ? "ਸਵੇਰ" : e < 17 ? "ਦੁਪਹਿਰ" : e < 20 ? "ਸ਼ਾਮ" : "ਰਾਤ" }, week: { dow: 0, doy: 6 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"),
            n = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_");

        function r(e) { return e % 10 < 5 && e % 10 > 1 && ~~(e / 10) % 10 != 1 }

        function a(e, t, n) { var a = e + " "; switch (n) {
                case "ss":
                    return a + (r(e) ? "sekundy" : "sekund");
                case "m":
                    return t ? "minuta" : "minutę";
                case "mm":
                    return a + (r(e) ? "minuty" : "minut");
                case "h":
                    return t ? "godzina" : "godzinę";
                case "hh":
                    return a + (r(e) ? "godziny" : "godzin");
                case "MM":
                    return a + (r(e) ? "miesiące" : "miesięcy");
                case "yy":
                    return a + (r(e) ? "lata" : "lat") } } e.defineLocale("pl", { months: function(e, r) { return e ? "" === r ? "(" + n[e.month()] + "|" + t[e.month()] + ")" : /D MMMM/.test(r) ? n[e.month()] : t[e.month()] : t }, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "ndz_pon_wt_śr_czw_pt_sob".split("_"), weekdaysMin: "Nd_Pn_Wt_Śr_Cz_Pt_So".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Dziś o] LT", nextDay: "[Jutro o] LT", nextWeek: function() { switch (this.day()) {
                        case 0:
                            return "[W niedzielę o] LT";
                        case 2:
                            return "[We wtorek o] LT";
                        case 3:
                            return "[W środę o] LT";
                        case 6:
                            return "[W sobotę o] LT";
                        default:
                            return "[W] dddd [o] LT" } }, lastDay: "[Wczoraj o] LT", lastWeek: function() { switch (this.day()) {
                        case 0:
                            return "[W zeszłą niedzielę o] LT";
                        case 3:
                            return "[W zeszłą środę o] LT";
                        case 6:
                            return "[W zeszłą sobotę o] LT";
                        default:
                            return "[W zeszły] dddd [o] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", ss: a, m: a, mm: a, h: a, hh: a, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: a, y: "rok", yy: a }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("pt", { months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY HH:mm" }, calendar: { sameDay: "[Hoje às] LT", nextDay: "[Amanhã às] LT", nextWeek: "dddd [às] LT", lastDay: "[Ontem às] LT", lastWeek: function() { return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT" }, sameElse: "L" }, relativeTime: { future: "em %s", past: "há %s", s: "segundos", ss: "%d segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("pt-br", { months: "Janeiro_Fevereiro_Março_Abril_Maio_Junho_Julho_Agosto_Setembro_Outubro_Novembro_Dezembro".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingo_Segunda-feira_Terça-feira_Quarta-feira_Quinta-feira_Sexta-feira_Sábado".split("_"), weekdaysShort: "Dom_Seg_Ter_Qua_Qui_Sex_Sáb".split("_"), weekdaysMin: "Do_2ª_3ª_4ª_5ª_6ª_Sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] HH:mm", LLLL: "dddd, D [de] MMMM [de] YYYY [às] HH:mm" }, calendar: { sameDay: "[Hoje às] LT", nextDay: "[Amanhã às] LT", nextWeek: "dddd [às] LT", lastDay: "[Ontem às] LT", lastWeek: function() { return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT" }, sameElse: "L" }, relativeTime: { future: "em %s", past: "há %s", s: "poucos segundos", ss: "%d segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" }, dayOfMonthOrdinalParse: /\d{1,2}º/, ordinal: "%dº" }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";

        function t(e, t, n) { var r = " "; return (e % 100 >= 20 || e >= 100 && e % 100 == 0) && (r = " de "), e + r + { ss: "secunde", mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani" } [n] } e.defineLocale("ro", { months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"), monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[azi la] LT", nextDay: "[mâine la] LT", nextWeek: "dddd [la] LT", lastDay: "[ieri la] LT", lastWeek: "[fosta] dddd [la] LT", sameElse: "L" }, relativeTime: { future: "peste %s", past: "%s în urmă", s: "câteva secunde", ss: t, m: "un minut", mm: t, h: "o oră", hh: t, d: "o zi", dd: t, M: "o lună", MM: t, y: "un an", yy: t }, week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";

        function t(e, t, n) { var r = { ss: t ? "секунда_секунды_секунд" : "секунду_секунды_секунд", mm: t ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет" }; return "m" === n ? t ? "минута" : "минуту" : e + " " + function(e, t) { var n = e.split("_"); return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2] }(r[n], +e) } var n = [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[йя]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i];
        e.defineLocale("ru", { months: { format: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_"), standalone: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_") }, monthsShort: { format: "янв._февр._мар._апр._мая_июня_июля_авг._сент._окт._нояб._дек.".split("_"), standalone: "янв._февр._март_апр._май_июнь_июль_авг._сент._окт._нояб._дек.".split("_") }, weekdays: { standalone: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"), format: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_"), isFormat: /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/ }, weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"), weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"), monthsParse: n, longMonthsParse: n, shortMonthsParse: n, monthsRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i, monthsShortRegex: /^(январ[ья]|янв\.?|феврал[ья]|февр?\.?|марта?|мар\.?|апрел[ья]|апр\.?|ма[йя]|июн[ья]|июн\.?|июл[ья]|июл\.?|августа?|авг\.?|сентябр[ья]|сент?\.?|октябр[ья]|окт\.?|ноябр[ья]|нояб?\.?|декабр[ья]|дек\.?)/i, monthsStrictRegex: /^(январ[яь]|феврал[яь]|марта?|апрел[яь]|ма[яй]|июн[яь]|июл[яь]|августа?|сентябр[яь]|октябр[яь]|ноябр[яь]|декабр[яь])/i, monthsShortStrictRegex: /^(янв\.|февр?\.|мар[т.]|апр\.|ма[яй]|июн[ья.]|июл[ья.]|авг\.|сент?\.|окт\.|нояб?\.|дек\.)/i, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., H:mm", LLLL: "dddd, D MMMM YYYY г., H:mm" }, calendar: { sameDay: "[Сегодня, в] LT", nextDay: "[Завтра, в] LT", lastDay: "[Вчера, в] LT", nextWeek: function(e) { if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT"; switch (this.day()) {
                        case 0:
                            return "[В следующее] dddd, [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В следующий] dddd, [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В следующую] dddd, [в] LT" } }, lastWeek: function(e) { if (e.week() === this.week()) return 2 === this.day() ? "[Во] dddd, [в] LT" : "[В] dddd, [в] LT"; switch (this.day()) {
                        case 0:
                            return "[В прошлое] dddd, [в] LT";
                        case 1:
                        case 2:
                        case 4:
                            return "[В прошлый] dddd, [в] LT";
                        case 3:
                        case 5:
                        case 6:
                            return "[В прошлую] dddd, [в] LT" } }, sameElse: "L" }, relativeTime: { future: "через %s", past: "%s назад", s: "несколько секунд", ss: t, m: t, mm: t, h: "час", hh: t, d: "день", dd: t, M: "месяц", MM: t, y: "год", yy: t }, meridiemParse: /ночи|утра|дня|вечера/i, isPM: function(e) { return /^(дня|вечера)$/.test(e) }, meridiem: function(e, t, n) { return e < 4 ? "ночи" : e < 12 ? "утра" : e < 17 ? "дня" : "вечера" }, dayOfMonthOrdinalParse: /\d{1,2}-(й|го|я)/, ordinal: function(e, t) { switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                        return e + "-й";
                    case "D":
                        return e + "-го";
                    case "w":
                    case "W":
                        return e + "-я";
                    default:
                        return e } }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = ["جنوري", "فيبروري", "مارچ", "اپريل", "مئي", "جون", "جولاءِ", "آگسٽ", "سيپٽمبر", "آڪٽوبر", "نومبر", "ڊسمبر"],
            n = ["آچر", "سومر", "اڱارو", "اربع", "خميس", "جمع", "ڇنڇر"];
        e.defineLocale("sd", { months: t, monthsShort: t, weekdays: n, weekdaysShort: n, weekdaysMin: n, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd، D MMMM YYYY HH:mm" }, meridiemParse: /صبح|شام/, isPM: function(e) { return "شام" === e }, meridiem: function(e, t, n) { return e < 12 ? "صبح" : "شام" }, calendar: { sameDay: "[اڄ] LT", nextDay: "[سڀاڻي] LT", nextWeek: "dddd [اڳين هفتي تي] LT", lastDay: "[ڪالهه] LT", lastWeek: "[گزريل هفتي] dddd [تي] LT", sameElse: "L" }, relativeTime: { future: "%s پوء", past: "%s اڳ", s: "چند سيڪنڊ", ss: "%d سيڪنڊ", m: "هڪ منٽ", mm: "%d منٽ", h: "هڪ ڪلاڪ", hh: "%d ڪلاڪ", d: "هڪ ڏينهن", dd: "%d ڏينهن", M: "هڪ مهينو", MM: "%d مهينا", y: "هڪ سال", yy: "%d سال" }, preparse: function(e) { return e.replace(/،/g, ",") }, postformat: function(e) { return e.replace(/,/g, "،") }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("se", { months: "ođđajagemánnu_guovvamánnu_njukčamánnu_cuoŋománnu_miessemánnu_geassemánnu_suoidnemánnu_borgemánnu_čakčamánnu_golggotmánnu_skábmamánnu_juovlamánnu".split("_"), monthsShort: "ođđj_guov_njuk_cuo_mies_geas_suoi_borg_čakč_golg_skáb_juov".split("_"), weekdays: "sotnabeaivi_vuossárga_maŋŋebárga_gaskavahkku_duorastat_bearjadat_lávvardat".split("_"), weekdaysShort: "sotn_vuos_maŋ_gask_duor_bear_láv".split("_"), weekdaysMin: "s_v_m_g_d_b_L".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "MMMM D. [b.] YYYY", LLL: "MMMM D. [b.] YYYY [ti.] HH:mm", LLLL: "dddd, MMMM D. [b.] YYYY [ti.] HH:mm" }, calendar: { sameDay: "[otne ti] LT", nextDay: "[ihttin ti] LT", nextWeek: "dddd [ti] LT", lastDay: "[ikte ti] LT", lastWeek: "[ovddit] dddd [ti] LT", sameElse: "L" }, relativeTime: { future: "%s geažes", past: "maŋit %s", s: "moadde sekunddat", ss: "%d sekunddat", m: "okta minuhta", mm: "%d minuhtat", h: "okta diimmu", hh: "%d diimmut", d: "okta beaivi", dd: "%d beaivvit", M: "okta mánnu", MM: "%d mánut", y: "okta jahki", yy: "%d jagit" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("si", { months: "ජනවාරි_පෙබරවාරි_මාර්තු_අප්‍රේල්_මැයි_ජූනි_ජූලි_අගෝස්තු_සැප්තැම්බර්_ඔක්තෝබර්_නොවැම්බර්_දෙසැම්බර්".split("_"), monthsShort: "ජන_පෙබ_මාර්_අප්_මැයි_ජූනි_ජූලි_අගෝ_සැප්_ඔක්_නොවැ_දෙසැ".split("_"), weekdays: "ඉරිදා_සඳුදා_අඟහරුවාදා_බදාදා_බ්‍රහස්පතින්දා_සිකුරාදා_සෙනසුරාදා".split("_"), weekdaysShort: "ඉරි_සඳු_අඟ_බදා_බ්‍රහ_සිකු_සෙන".split("_"), weekdaysMin: "ඉ_ස_අ_බ_බ්‍ර_සි_සෙ".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "a h:mm", LTS: "a h:mm:ss", L: "YYYY/MM/DD", LL: "YYYY MMMM D", LLL: "YYYY MMMM D, a h:mm", LLLL: "YYYY MMMM D [වැනි] dddd, a h:mm:ss" }, calendar: { sameDay: "[අද] LT[ට]", nextDay: "[හෙට] LT[ට]", nextWeek: "dddd LT[ට]", lastDay: "[ඊයේ] LT[ට]", lastWeek: "[පසුගිය] dddd LT[ට]", sameElse: "L" }, relativeTime: { future: "%sකින්", past: "%sකට පෙර", s: "තත්පර කිහිපය", ss: "තත්පර %d", m: "මිනිත්තුව", mm: "මිනිත්තු %d", h: "පැය", hh: "පැය %d", d: "දිනය", dd: "දින %d", M: "මාසය", MM: "මාස %d", y: "වසර", yy: "වසර %d" }, dayOfMonthOrdinalParse: /\d{1,2} වැනි/, ordinal: function(e) { return e + " වැනි" }, meridiemParse: /පෙර වරු|පස් වරු|පෙ.ව|ප.ව./, isPM: function(e) { return "ප.ව." === e || "පස් වරු" === e }, meridiem: function(e, t, n) { return e > 11 ? n ? "ප.ව." : "පස් වරු" : n ? "පෙ.ව." : "පෙර වරු" } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"),
            n = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_");

        function r(e) { return e > 1 && e < 5 }

        function a(e, t, n, a) { var s = e + " "; switch (n) {
                case "s":
                    return t || a ? "pár sekúnd" : "pár sekundami";
                case "ss":
                    return t || a ? s + (r(e) ? "sekundy" : "sekúnd") : s + "sekundami";
                case "m":
                    return t ? "minúta" : a ? "minútu" : "minútou";
                case "mm":
                    return t || a ? s + (r(e) ? "minúty" : "minút") : s + "minútami";
                case "h":
                    return t ? "hodina" : a ? "hodinu" : "hodinou";
                case "hh":
                    return t || a ? s + (r(e) ? "hodiny" : "hodín") : s + "hodinami";
                case "d":
                    return t || a ? "deň" : "dňom";
                case "dd":
                    return t || a ? s + (r(e) ? "dni" : "dní") : s + "dňami";
                case "M":
                    return t || a ? "mesiac" : "mesiacom";
                case "MM":
                    return t || a ? s + (r(e) ? "mesiace" : "mesiacov") : s + "mesiacmi";
                case "y":
                    return t || a ? "rok" : "rokom";
                case "yy":
                    return t || a ? s + (r(e) ? "roky" : "rokov") : s + "rokmi" } } e.defineLocale("sk", { months: t, monthsShort: n, weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"), weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"), weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd D. MMMM YYYY H:mm" }, calendar: { sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function() { switch (this.day()) {
                        case 0:
                            return "[v nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[v] dddd [o] LT";
                        case 3:
                            return "[v stredu o] LT";
                        case 4:
                            return "[vo štvrtok o] LT";
                        case 5:
                            return "[v piatok o] LT";
                        case 6:
                            return "[v sobotu o] LT" } }, lastDay: "[včera o] LT", lastWeek: function() { switch (this.day()) {
                        case 0:
                            return "[minulú nedeľu o] LT";
                        case 1:
                        case 2:
                            return "[minulý] dddd [o] LT";
                        case 3:
                            return "[minulú stredu o] LT";
                        case 4:
                        case 5:
                            return "[minulý] dddd [o] LT";
                        case 6:
                            return "[minulú sobotu o] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "pred %s", s: a, ss: a, m: a, mm: a, h: a, hh: a, d: a, dd: a, M: a, MM: a, y: a, yy: a }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";

        function t(e, t, n, r) { var a = e + " "; switch (n) {
                case "s":
                    return t || r ? "nekaj sekund" : "nekaj sekundami";
                case "ss":
                    return a += 1 === e ? t ? "sekundo" : "sekundi" : 2 === e ? t || r ? "sekundi" : "sekundah" : e < 5 ? t || r ? "sekunde" : "sekundah" : "sekund";
                case "m":
                    return t ? "ena minuta" : "eno minuto";
                case "mm":
                    return a += 1 === e ? t ? "minuta" : "minuto" : 2 === e ? t || r ? "minuti" : "minutama" : e < 5 ? t || r ? "minute" : "minutami" : t || r ? "minut" : "minutami";
                case "h":
                    return t ? "ena ura" : "eno uro";
                case "hh":
                    return a += 1 === e ? t ? "ura" : "uro" : 2 === e ? t || r ? "uri" : "urama" : e < 5 ? t || r ? "ure" : "urami" : t || r ? "ur" : "urami";
                case "d":
                    return t || r ? "en dan" : "enim dnem";
                case "dd":
                    return a += 1 === e ? t || r ? "dan" : "dnem" : 2 === e ? t || r ? "dni" : "dnevoma" : t || r ? "dni" : "dnevi";
                case "M":
                    return t || r ? "en mesec" : "enim mesecem";
                case "MM":
                    return a += 1 === e ? t || r ? "mesec" : "mesecem" : 2 === e ? t || r ? "meseca" : "mesecema" : e < 5 ? t || r ? "mesece" : "meseci" : t || r ? "mesecev" : "meseci";
                case "y":
                    return t || r ? "eno leto" : "enim letom";
                case "yy":
                    return a += 1 === e ? t || r ? "leto" : "letom" : 2 === e ? t || r ? "leti" : "letoma" : e < 5 ? t || r ? "leta" : "leti" : t || r ? "let" : "leti" } } e.defineLocale("sl", { months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"), weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"), weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function() { switch (this.day()) {
                        case 0:
                            return "[v] [nedeljo] [ob] LT";
                        case 3:
                            return "[v] [sredo] [ob] LT";
                        case 6:
                            return "[v] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[v] dddd [ob] LT" } }, lastDay: "[včeraj ob] LT", lastWeek: function() { switch (this.day()) {
                        case 0:
                            return "[prejšnjo] [nedeljo] [ob] LT";
                        case 3:
                            return "[prejšnjo] [sredo] [ob] LT";
                        case 6:
                            return "[prejšnjo] [soboto] [ob] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[prejšnji] dddd [ob] LT" } }, sameElse: "L" }, relativeTime: { future: "čez %s", past: "pred %s", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("sq", { months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"), weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"), weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"), weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"), weekdaysParseExact: !0, meridiemParse: /PD|MD/, isPM: function(e) { return "M" === e.charAt(0) }, meridiem: function(e, t, n) { return e < 12 ? "PD" : "MD" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Sot në] LT", nextDay: "[Nesër në] LT", nextWeek: "dddd [në] LT", lastDay: "[Dje në] LT", lastWeek: "dddd [e kaluar në] LT", sameElse: "L" }, relativeTime: { future: "në %s", past: "%s më parë", s: "disa sekonda", ss: "%d sekonda", m: "një minutë", mm: "%d minuta", h: "një orë", hh: "%d orë", d: "një ditë", dd: "%d ditë", M: "një muaj", MM: "%d muaj", y: "një vit", yy: "%d vite" }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = { words: { ss: ["sekunda", "sekunde", "sekundi"], m: ["jedan minut", "jedne minute"], mm: ["minut", "minute", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mesec", "meseca", "meseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function(e, t) { return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2] }, translate: function(e, n, r) { var a = t.words[r]; return 1 === r.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a) } };
        e.defineLocale("sr", { months: "januar_februar_mart_april_maj_jun_jul_avgust_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj_jun_jul_avg._sep._okt._nov._dec.".split("_"), monthsParseExact: !0, weekdays: "nedelja_ponedeljak_utorak_sreda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sre._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function() { switch (this.day()) {
                        case 0:
                            return "[u] [nedelju] [u] LT";
                        case 3:
                            return "[u] [sredu] [u] LT";
                        case 6:
                            return "[u] [subotu] [u] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[u] dddd [u] LT" } }, lastDay: "[juče u] LT", lastWeek: function() { return ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"][this.day()] }, sameElse: "L" }, relativeTime: { future: "za %s", past: "pre %s", s: "nekoliko sekundi", ss: t.translate, m: t.translate, mm: t.translate, h: t.translate, hh: t.translate, d: "dan", dd: t.translate, M: "mesec", MM: t.translate, y: "godinu", yy: t.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = { words: { ss: ["секунда", "секунде", "секунди"], m: ["један минут", "једне минуте"], mm: ["минут", "минуте", "минута"], h: ["један сат", "једног сата"], hh: ["сат", "сата", "сати"], dd: ["дан", "дана", "дана"], MM: ["месец", "месеца", "месеци"], yy: ["година", "године", "година"] }, correctGrammaticalCase: function(e, t) { return 1 === e ? t[0] : e >= 2 && e <= 4 ? t[1] : t[2] }, translate: function(e, n, r) { var a = t.words[r]; return 1 === r.length ? n ? a[0] : a[1] : e + " " + t.correctGrammaticalCase(e, a) } };
        e.defineLocale("sr-cyrl", { months: "јануар_фебруар_март_април_мај_јун_јул_август_септембар_октобар_новембар_децембар".split("_"), monthsShort: "јан._феб._мар._апр._мај_јун_јул_авг._сеп._окт._нов._дец.".split("_"), monthsParseExact: !0, weekdays: "недеља_понедељак_уторак_среда_четвртак_петак_субота".split("_"), weekdaysShort: "нед._пон._уто._сре._чет._пет._суб.".split("_"), weekdaysMin: "не_по_ут_ср_че_пе_су".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY H:mm", LLLL: "dddd, D. MMMM YYYY H:mm" }, calendar: { sameDay: "[данас у] LT", nextDay: "[сутра у] LT", nextWeek: function() { switch (this.day()) {
                        case 0:
                            return "[у] [недељу] [у] LT";
                        case 3:
                            return "[у] [среду] [у] LT";
                        case 6:
                            return "[у] [суботу] [у] LT";
                        case 1:
                        case 2:
                        case 4:
                        case 5:
                            return "[у] dddd [у] LT" } }, lastDay: "[јуче у] LT", lastWeek: function() { return ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"][this.day()] }, sameElse: "L" }, relativeTime: { future: "за %s", past: "пре %s", s: "неколико секунди", ss: t.translate, m: t.translate, mm: t.translate, h: t.translate, hh: t.translate, d: "дан", dd: t.translate, M: "месец", MM: t.translate, y: "годину", yy: t.translate }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("ss", { months: "Bhimbidvwane_Indlovana_Indlov'lenkhulu_Mabasa_Inkhwekhweti_Inhlaba_Kholwane_Ingci_Inyoni_Imphala_Lweti_Ingongoni".split("_"), monthsShort: "Bhi_Ina_Inu_Mab_Ink_Inh_Kho_Igc_Iny_Imp_Lwe_Igo".split("_"), weekdays: "Lisontfo_Umsombuluko_Lesibili_Lesitsatfu_Lesine_Lesihlanu_Umgcibelo".split("_"), weekdaysShort: "Lis_Umb_Lsb_Les_Lsi_Lsh_Umg".split("_"), weekdaysMin: "Li_Us_Lb_Lt_Ls_Lh_Ug".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Namuhla nga] LT", nextDay: "[Kusasa nga] LT", nextWeek: "dddd [nga] LT", lastDay: "[Itolo nga] LT", lastWeek: "dddd [leliphelile] [nga] LT", sameElse: "L" }, relativeTime: { future: "nga %s", past: "wenteka nga %s", s: "emizuzwana lomcane", ss: "%d mzuzwana", m: "umzuzu", mm: "%d emizuzu", h: "lihora", hh: "%d emahora", d: "lilanga", dd: "%d emalanga", M: "inyanga", MM: "%d tinyanga", y: "umnyaka", yy: "%d iminyaka" }, meridiemParse: /ekuseni|emini|entsambama|ebusuku/, meridiem: function(e, t, n) { return e < 11 ? "ekuseni" : e < 15 ? "emini" : e < 19 ? "entsambama" : "ebusuku" }, meridiemHour: function(e, t) { return 12 === e && (e = 0), "ekuseni" === t ? e : "emini" === t ? e >= 11 ? e : e + 12 : "entsambama" === t || "ebusuku" === t ? 0 === e ? 0 : e + 12 : void 0 }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: "%d", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("sv", { months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"), weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"), weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [kl.] HH:mm", LLLL: "dddd D MMMM YYYY [kl.] HH:mm", lll: "D MMM YYYY HH:mm", llll: "ddd D MMM YYYY HH:mm" }, calendar: { sameDay: "[Idag] LT", nextDay: "[Imorgon] LT", lastDay: "[Igår] LT", nextWeek: "[På] dddd LT", lastWeek: "[I] dddd[s] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "för %s sedan", s: "några sekunder", ss: "%d sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en månad", MM: "%d månader", y: "ett år", yy: "%d år" }, dayOfMonthOrdinalParse: /\d{1,2}(e|a)/, ordinal: function(e) { var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "e" : 1 === t ? "a" : 2 === t ? "a" : "e"; return e + n }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("sw", { months: "Januari_Februari_Machi_Aprili_Mei_Juni_Julai_Agosti_Septemba_Oktoba_Novemba_Desemba".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ago_Sep_Okt_Nov_Des".split("_"), weekdays: "Jumapili_Jumatatu_Jumanne_Jumatano_Alhamisi_Ijumaa_Jumamosi".split("_"), weekdaysShort: "Jpl_Jtat_Jnne_Jtan_Alh_Ijm_Jmos".split("_"), weekdaysMin: "J2_J3_J4_J5_Al_Ij_J1".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[leo saa] LT", nextDay: "[kesho saa] LT", nextWeek: "[wiki ijayo] dddd [saat] LT", lastDay: "[jana] LT", lastWeek: "[wiki iliyopita] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s baadaye", past: "tokea %s", s: "hivi punde", ss: "sekunde %d", m: "dakika moja", mm: "dakika %d", h: "saa limoja", hh: "masaa %d", d: "siku moja", dd: "masiku %d", M: "mwezi mmoja", MM: "miezi %d", y: "mwaka mmoja", yy: "miaka %d" }, week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = { 1: "௧", 2: "௨", 3: "௩", 4: "௪", 5: "௫", 6: "௬", 7: "௭", 8: "௮", 9: "௯", 0: "௦" },
            n = { "௧": "1", "௨": "2", "௩": "3", "௪": "4", "௫": "5", "௬": "6", "௭": "7", "௮": "8", "௯": "9", "௦": "0" };
        e.defineLocale("ta", { months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"), weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"), weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, HH:mm", LLLL: "dddd, D MMMM YYYY, HH:mm" }, calendar: { sameDay: "[இன்று] LT", nextDay: "[நாளை] LT", nextWeek: "dddd, LT", lastDay: "[நேற்று] LT", lastWeek: "[கடந்த வாரம்] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s இல்", past: "%s முன்", s: "ஒரு சில விநாடிகள்", ss: "%d விநாடிகள்", m: "ஒரு நிமிடம்", mm: "%d நிமிடங்கள்", h: "ஒரு மணி நேரம்", hh: "%d மணி நேரம்", d: "ஒரு நாள்", dd: "%d நாட்கள்", M: "ஒரு மாதம்", MM: "%d மாதங்கள்", y: "ஒரு வருடம்", yy: "%d ஆண்டுகள்" }, dayOfMonthOrdinalParse: /\d{1,2}வது/, ordinal: function(e) { return e + "வது" }, preparse: function(e) { return e.replace(/[௧௨௩௪௫௬௭௮௯௦]/g, function(e) { return n[e] }) }, postformat: function(e) { return e.replace(/\d/g, function(e) { return t[e] }) }, meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/, meridiem: function(e, t, n) { return e < 2 ? " யாமம்" : e < 6 ? " வைகறை" : e < 10 ? " காலை" : e < 14 ? " நண்பகல்" : e < 18 ? " எற்பாடு" : e < 22 ? " மாலை" : " யாமம்" }, meridiemHour: function(e, t) { return 12 === e && (e = 0), "யாமம்" === t ? e < 2 ? e : e + 12 : "வைகறை" === t || "காலை" === t ? e : "நண்பகல்" === t && e >= 10 ? e : e + 12 }, week: { dow: 0, doy: 6 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("te", { months: "జనవరి_ఫిబ్రవరి_మార్చి_ఏప్రిల్_మే_జూన్_జులై_ఆగస్టు_సెప్టెంబర్_అక్టోబర్_నవంబర్_డిసెంబర్".split("_"), monthsShort: "జన._ఫిబ్ర._మార్చి_ఏప్రి._మే_జూన్_జులై_ఆగ._సెప్._అక్టో._నవ._డిసె.".split("_"), monthsParseExact: !0, weekdays: "ఆదివారం_సోమవారం_మంగళవారం_బుధవారం_గురువారం_శుక్రవారం_శనివారం".split("_"), weekdaysShort: "ఆది_సోమ_మంగళ_బుధ_గురు_శుక్ర_శని".split("_"), weekdaysMin: "ఆ_సో_మం_బు_గు_శు_శ".split("_"), longDateFormat: { LT: "A h:mm", LTS: "A h:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, A h:mm", LLLL: "dddd, D MMMM YYYY, A h:mm" }, calendar: { sameDay: "[నేడు] LT", nextDay: "[రేపు] LT", nextWeek: "dddd, LT", lastDay: "[నిన్న] LT", lastWeek: "[గత] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s లో", past: "%s క్రితం", s: "కొన్ని క్షణాలు", ss: "%d సెకన్లు", m: "ఒక నిమిషం", mm: "%d నిమిషాలు", h: "ఒక గంట", hh: "%d గంటలు", d: "ఒక రోజు", dd: "%d రోజులు", M: "ఒక నెల", MM: "%d నెలలు", y: "ఒక సంవత్సరం", yy: "%d సంవత్సరాలు" }, dayOfMonthOrdinalParse: /\d{1,2}వ/, ordinal: "%dవ", meridiemParse: /రాత్రి|ఉదయం|మధ్యాహ్నం|సాయంత్రం/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "రాత్రి" === t ? e < 4 ? e : e + 12 : "ఉదయం" === t ? e : "మధ్యాహ్నం" === t ? e >= 10 ? e : e + 12 : "సాయంత్రం" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "రాత్రి" : e < 10 ? "ఉదయం" : e < 17 ? "మధ్యాహ్నం" : e < 20 ? "సాయంత్రం" : "రాత్రి" }, week: { dow: 0, doy: 6 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("tet", { months: "Janeiru_Fevereiru_Marsu_Abril_Maiu_Juñu_Jullu_Agustu_Setembru_Outubru_Novembru_Dezembru".split("_"), monthsShort: "Jan_Fev_Mar_Abr_Mai_Jun_Jul_Ago_Set_Out_Nov_Dez".split("_"), weekdays: "Domingu_Segunda_Tersa_Kuarta_Kinta_Sesta_Sabadu".split("_"), weekdaysShort: "Dom_Seg_Ters_Kua_Kint_Sest_Sab".split("_"), weekdaysMin: "Do_Seg_Te_Ku_Ki_Ses_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Ohin iha] LT", nextDay: "[Aban iha] LT", nextWeek: "dddd [iha] LT", lastDay: "[Horiseik iha] LT", lastWeek: "dddd [semana kotuk] [iha] LT", sameElse: "L" }, relativeTime: { future: "iha %s", past: "%s liuba", s: "minutu balun", ss: "minutu %d", m: "minutu ida", mm: "minutu %d", h: "oras ida", hh: "oras %d", d: "loron ida", dd: "loron %d", M: "fulan ida", MM: "fulan %d", y: "tinan ida", yy: "tinan %d" }, dayOfMonthOrdinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function(e) { var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th"; return e + n }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = { 0: "-ум", 1: "-ум", 2: "-юм", 3: "-юм", 4: "-ум", 5: "-ум", 6: "-ум", 7: "-ум", 8: "-ум", 9: "-ум", 10: "-ум", 12: "-ум", 13: "-ум", 20: "-ум", 30: "-юм", 40: "-ум", 50: "-ум", 60: "-ум", 70: "-ум", 80: "-ум", 90: "-ум", 100: "-ум" };
        e.defineLocale("tg", { months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"), monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"), weekdays: "якшанбе_душанбе_сешанбе_чоршанбе_панҷшанбе_ҷумъа_шанбе".split("_"), weekdaysShort: "яшб_дшб_сшб_чшб_пшб_ҷум_шнб".split("_"), weekdaysMin: "яш_дш_сш_чш_пш_ҷм_шб".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[Имрӯз соати] LT", nextDay: "[Пагоҳ соати] LT", lastDay: "[Дирӯз соати] LT", nextWeek: "dddd[и] [ҳафтаи оянда соати] LT", lastWeek: "dddd[и] [ҳафтаи гузашта соати] LT", sameElse: "L" }, relativeTime: { future: "баъди %s", past: "%s пеш", s: "якчанд сония", m: "як дақиқа", mm: "%d дақиқа", h: "як соат", hh: "%d соат", d: "як рӯз", dd: "%d рӯз", M: "як моҳ", MM: "%d моҳ", y: "як сол", yy: "%d сол" }, meridiemParse: /шаб|субҳ|рӯз|бегоҳ/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "шаб" === t ? e < 4 ? e : e + 12 : "субҳ" === t ? e : "рӯз" === t ? e >= 11 ? e : e + 12 : "бегоҳ" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { return e < 4 ? "шаб" : e < 11 ? "субҳ" : e < 16 ? "рӯз" : e < 19 ? "бегоҳ" : "шаб" }, dayOfMonthOrdinalParse: /\d{1,2}-(ум|юм)/, ordinal: function(e) { var n = e % 10,
                    r = e >= 100 ? 100 : null; return e + (t[e] || t[n] || t[r]) }, week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("th", { months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"), monthsShort: "ม.ค._ก.พ._มี.ค._เม.ย._พ.ค._มิ.ย._ก.ค._ส.ค._ก.ย._ต.ค._พ.ย._ธ.ค.".split("_"), monthsParseExact: !0, weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"), weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"), weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "H:mm", LTS: "H:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY เวลา H:mm", LLLL: "วันddddที่ D MMMM YYYY เวลา H:mm" }, meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/, isPM: function(e) { return "หลังเที่ยง" === e }, meridiem: function(e, t, n) { return e < 12 ? "ก่อนเที่ยง" : "หลังเที่ยง" }, calendar: { sameDay: "[วันนี้ เวลา] LT", nextDay: "[พรุ่งนี้ เวลา] LT", nextWeek: "dddd[หน้า เวลา] LT", lastDay: "[เมื่อวานนี้ เวลา] LT", lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT", sameElse: "L" }, relativeTime: { future: "อีก %s", past: "%sที่แล้ว", s: "ไม่กี่วินาที", ss: "%d วินาที", m: "1 นาที", mm: "%d นาที", h: "1 ชั่วโมง", hh: "%d ชั่วโมง", d: "1 วัน", dd: "%d วัน", M: "1 เดือน", MM: "%d เดือน", y: "1 ปี", yy: "%d ปี" } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("tl-ph", { months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"), monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"), weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"), weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"), weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY HH:mm", LLLL: "dddd, MMMM DD, YYYY HH:mm" }, calendar: { sameDay: "LT [ngayong araw]", nextDay: "[Bukas ng] LT", nextWeek: "LT [sa susunod na] dddd", lastDay: "LT [kahapon]", lastWeek: "LT [noong nakaraang] dddd", sameElse: "L" }, relativeTime: { future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", ss: "%d segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function(e) { return e }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = "pagh_wa’_cha’_wej_loS_vagh_jav_Soch_chorgh_Hut".split("_");

        function n(e, n, r, a) { var s = function(e) { var n = Math.floor(e % 1e3 / 100),
                    r = Math.floor(e % 100 / 10),
                    a = e % 10,
                    s = ""; return n > 0 && (s += t[n] + "vatlh"), r > 0 && (s += ("" !== s ? " " : "") + t[r] + "maH"), a > 0 && (s += ("" !== s ? " " : "") + t[a]), "" === s ? "pagh" : s }(e); switch (r) {
                case "ss":
                    return s + " lup";
                case "mm":
                    return s + " tup";
                case "hh":
                    return s + " rep";
                case "dd":
                    return s + " jaj";
                case "MM":
                    return s + " jar";
                case "yy":
                    return s + " DIS" } } e.defineLocale("tlh", { months: "tera’ jar wa’_tera’ jar cha’_tera’ jar wej_tera’ jar loS_tera’ jar vagh_tera’ jar jav_tera’ jar Soch_tera’ jar chorgh_tera’ jar Hut_tera’ jar wa’maH_tera’ jar wa’maH wa’_tera’ jar wa’maH cha’".split("_"), monthsShort: "jar wa’_jar cha’_jar wej_jar loS_jar vagh_jar jav_jar Soch_jar chorgh_jar Hut_jar wa’maH_jar wa’maH wa’_jar wa’maH cha’".split("_"), monthsParseExact: !0, weekdays: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysShort: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), weekdaysMin: "lojmItjaj_DaSjaj_povjaj_ghItlhjaj_loghjaj_buqjaj_ghInjaj".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[DaHjaj] LT", nextDay: "[wa’leS] LT", nextWeek: "LLL", lastDay: "[wa’Hu’] LT", lastWeek: "LLL", sameElse: "L" }, relativeTime: { future: function(e) { var t = e; return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "leS" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "waQ" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "nem" : t + " pIq" }, past: function(e) { var t = e; return t = -1 !== e.indexOf("jaj") ? t.slice(0, -3) + "Hu’" : -1 !== e.indexOf("jar") ? t.slice(0, -3) + "wen" : -1 !== e.indexOf("DIS") ? t.slice(0, -3) + "ben" : t + " ret" }, s: "puS lup", ss: n, m: "wa’ tup", mm: n, h: "wa’ rep", hh: n, d: "wa’ jaj", dd: n, M: "wa’ jar", MM: n, y: "wa’ DIS", yy: n }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = { 1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'üncü", 4: "'üncü", 100: "'üncü", 6: "'ncı", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'ıncı", 90: "'ıncı" };
        e.defineLocale("tr", { months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"), monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"), weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"), weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"), weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[bugün saat] LT", nextDay: "[yarın saat] LT", nextWeek: "[gelecek] dddd [saat] LT", lastDay: "[dün] LT", lastWeek: "[geçen] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s önce", s: "birkaç saniye", ss: "%d saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir yıl", yy: "%d yıl" }, ordinal: function(e, n) { switch (n) {
                    case "d":
                    case "D":
                    case "Do":
                    case "DD":
                        return e;
                    default:
                        if (0 === e) return e + "'ıncı"; var r = e % 10,
                            a = e % 100 - r,
                            s = e >= 100 ? 100 : null; return e + (t[r] || t[a] || t[s]) } }, week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";

        function t(e, t, n, r) { var a = { s: ["viensas secunds", "'iensas secunds"], ss: [e + " secunds", e + " secunds"], m: ["'n míut", "'iens míut"], mm: [e + " míuts", e + " míuts"], h: ["'n þora", "'iensa þora"], hh: [e + " þoras", e + " þoras"], d: ["'n ziua", "'iensa ziua"], dd: [e + " ziuas", e + " ziuas"], M: ["'n mes", "'iens mes"], MM: [e + " mesen", e + " mesen"], y: ["'n ar", "'iens ar"], yy: [e + " ars", e + " ars"] }; return r ? a[n][0] : t ? a[n][0] : a[n][1] } e.defineLocale("tzl", { months: "Januar_Fevraglh_Març_Avrïu_Mai_Gün_Julia_Guscht_Setemvar_Listopäts_Noemvar_Zecemvar".split("_"), monthsShort: "Jan_Fev_Mar_Avr_Mai_Gün_Jul_Gus_Set_Lis_Noe_Zec".split("_"), weekdays: "Súladi_Lúneçi_Maitzi_Márcuri_Xhúadi_Viénerçi_Sáturi".split("_"), weekdaysShort: "Súl_Lún_Mai_Már_Xhú_Vié_Sát".split("_"), weekdaysMin: "Sú_Lú_Ma_Má_Xh_Vi_Sá".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "D. MMMM [dallas] YYYY", LLL: "D. MMMM [dallas] YYYY HH.mm", LLLL: "dddd, [li] D. MMMM [dallas] YYYY HH.mm" }, meridiemParse: /d\'o|d\'a/i, isPM: function(e) { return "d'o" === e.toLowerCase() }, meridiem: function(e, t, n) { return e > 11 ? n ? "d'o" : "D'O" : n ? "d'a" : "D'A" }, calendar: { sameDay: "[oxhi à] LT", nextDay: "[demà à] LT", nextWeek: "dddd [à] LT", lastDay: "[ieiri à] LT", lastWeek: "[sür el] dddd [lasteu à] LT", sameElse: "L" }, relativeTime: { future: "osprei %s", past: "ja%s", s: t, ss: t, m: t, mm: t, h: t, hh: t, d: t, dd: t, M: t, MM: t, y: t, yy: t }, dayOfMonthOrdinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("tzm", { months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[ⴰⵙⴷⵅ ⴴ] LT", nextDay: "[ⴰⵙⴽⴰ ⴴ] LT", nextWeek: "dddd [ⴴ] LT", lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT", lastWeek: "dddd [ⴴ] LT", sameElse: "L" }, relativeTime: { future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s", past: "ⵢⴰⵏ %s", s: "ⵉⵎⵉⴽ", ss: "%d ⵉⵎⵉⴽ", m: "ⵎⵉⵏⵓⴺ", mm: "%d ⵎⵉⵏⵓⴺ", h: "ⵙⴰⵄⴰ", hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ", d: "ⴰⵙⵙ", dd: "%d oⵙⵙⴰⵏ", M: "ⴰⵢoⵓⵔ", MM: "%d ⵉⵢⵢⵉⵔⵏ", y: "ⴰⵙⴳⴰⵙ", yy: "%d ⵉⵙⴳⴰⵙⵏ" }, week: { dow: 6, doy: 12 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("tzm-latn", { months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd D MMMM YYYY HH:mm" }, calendar: { sameDay: "[asdkh g] LT", nextDay: "[aska g] LT", nextWeek: "dddd [g] LT", lastDay: "[assant g] LT", lastWeek: "dddd [g] LT", sameElse: "L" }, relativeTime: { future: "dadkh s yan %s", past: "yan %s", s: "imik", ss: "%d imik", m: "minuḍ", mm: "%d minuḍ", h: "saɛa", hh: "%d tassaɛin", d: "ass", dd: "%d ossan", M: "ayowr", MM: "%d iyyirn", y: "asgas", yy: "%d isgasn" }, week: { dow: 6, doy: 12 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("ug-cn", { months: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"), monthsShort: "يانۋار_فېۋرال_مارت_ئاپرېل_ماي_ئىيۇن_ئىيۇل_ئاۋغۇست_سېنتەبىر_ئۆكتەبىر_نويابىر_دېكابىر".split("_"), weekdays: "يەكشەنبە_دۈشەنبە_سەيشەنبە_چارشەنبە_پەيشەنبە_جۈمە_شەنبە".split("_"), weekdaysShort: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"), weekdaysMin: "يە_دۈ_سە_چا_پە_جۈ_شە".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY-MM-DD", LL: "YYYY-يىلىM-ئاينىڭD-كۈنى", LLL: "YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm", LLLL: "dddd، YYYY-يىلىM-ئاينىڭD-كۈنى، HH:mm" }, meridiemParse: /يېرىم كېچە|سەھەر|چۈشتىن بۇرۇن|چۈش|چۈشتىن كېيىن|كەچ/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "يېرىم كېچە" === t || "سەھەر" === t || "چۈشتىن بۇرۇن" === t ? e : "چۈشتىن كېيىن" === t || "كەچ" === t ? e + 12 : e >= 11 ? e : e + 12 }, meridiem: function(e, t, n) { var r = 100 * e + t; return r < 600 ? "يېرىم كېچە" : r < 900 ? "سەھەر" : r < 1130 ? "چۈشتىن بۇرۇن" : r < 1230 ? "چۈش" : r < 1800 ? "چۈشتىن كېيىن" : "كەچ" }, calendar: { sameDay: "[بۈگۈن سائەت] LT", nextDay: "[ئەتە سائەت] LT", nextWeek: "[كېلەركى] dddd [سائەت] LT", lastDay: "[تۆنۈگۈن] LT", lastWeek: "[ئالدىنقى] dddd [سائەت] LT", sameElse: "L" }, relativeTime: { future: "%s كېيىن", past: "%s بۇرۇن", s: "نەچچە سېكونت", ss: "%d سېكونت", m: "بىر مىنۇت", mm: "%d مىنۇت", h: "بىر سائەت", hh: "%d سائەت", d: "بىر كۈن", dd: "%d كۈن", M: "بىر ئاي", MM: "%d ئاي", y: "بىر يىل", yy: "%d يىل" }, dayOfMonthOrdinalParse: /\d{1,2}(-كۈنى|-ئاي|-ھەپتە)/, ordinal: function(e, t) { switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "-كۈنى";
                    case "w":
                    case "W":
                        return e + "-ھەپتە";
                    default:
                        return e } }, preparse: function(e) { return e.replace(/،/g, ",") }, postformat: function(e) { return e.replace(/,/g, "،") }, week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";

        function t(e, t, n) { var r = { ss: t ? "секунда_секунди_секунд" : "секунду_секунди_секунд", mm: t ? "хвилина_хвилини_хвилин" : "хвилину_хвилини_хвилин", hh: t ? "година_години_годин" : "годину_години_годин", dd: "день_дні_днів", MM: "місяць_місяці_місяців", yy: "рік_роки_років" }; return "m" === n ? t ? "хвилина" : "хвилину" : "h" === n ? t ? "година" : "годину" : e + " " + function(e, t) { var n = e.split("_"); return t % 10 == 1 && t % 100 != 11 ? n[0] : t % 10 >= 2 && t % 10 <= 4 && (t % 100 < 10 || t % 100 >= 20) ? n[1] : n[2] }(r[n], +e) }

        function n(e) { return function() { return e + "о" + (11 === this.hours() ? "б" : "") + "] LT" } } e.defineLocale("uk", { months: { format: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_"), standalone: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_") }, monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"), weekdays: function(e, t) { var n = { nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"), accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"), genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_") }; if (!0 === e) return n.nominative.slice(1, 7).concat(n.nominative.slice(0, 1)); if (!e) return n.nominative; var r = /(\[[ВвУу]\]) ?dddd/.test(t) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(t) ? "genitive" : "nominative"; return n[r][e.day()] }, weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY р.", LLL: "D MMMM YYYY р., HH:mm", LLLL: "dddd, D MMMM YYYY р., HH:mm" }, calendar: { sameDay: n("[Сьогодні "), nextDay: n("[Завтра "), lastDay: n("[Вчора "), nextWeek: n("[У] dddd ["), lastWeek: function() { switch (this.day()) {
                        case 0:
                        case 3:
                        case 5:
                        case 6:
                            return n("[Минулої] dddd [").call(this);
                        case 1:
                        case 2:
                        case 4:
                            return n("[Минулого] dddd [").call(this) } }, sameElse: "L" }, relativeTime: { future: "за %s", past: "%s тому", s: "декілька секунд", ss: t, m: t, mm: t, h: "годину", hh: t, d: "день", dd: t, M: "місяць", MM: t, y: "рік", yy: t }, meridiemParse: /ночі|ранку|дня|вечора/, isPM: function(e) { return /^(дня|вечора)$/.test(e) }, meridiem: function(e, t, n) { return e < 4 ? "ночі" : e < 12 ? "ранку" : e < 17 ? "дня" : "вечора" }, dayOfMonthOrdinalParse: /\d{1,2}-(й|го)/, ordinal: function(e, t) { switch (t) {
                    case "M":
                    case "d":
                    case "DDD":
                    case "w":
                    case "W":
                        return e + "-й";
                    case "D":
                        return e + "-го";
                    default:
                        return e } }, week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict"; var t = ["جنوری", "فروری", "مارچ", "اپریل", "مئی", "جون", "جولائی", "اگست", "ستمبر", "اکتوبر", "نومبر", "دسمبر"],
            n = ["اتوار", "پیر", "منگل", "بدھ", "جمعرات", "جمعہ", "ہفتہ"];
        e.defineLocale("ur", { months: t, monthsShort: t, weekdays: n, weekdaysShort: n, weekdaysMin: n, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd، D MMMM YYYY HH:mm" }, meridiemParse: /صبح|شام/, isPM: function(e) { return "شام" === e }, meridiem: function(e, t, n) { return e < 12 ? "صبح" : "شام" }, calendar: { sameDay: "[آج بوقت] LT", nextDay: "[کل بوقت] LT", nextWeek: "dddd [بوقت] LT", lastDay: "[گذشتہ روز بوقت] LT", lastWeek: "[گذشتہ] dddd [بوقت] LT", sameElse: "L" }, relativeTime: { future: "%s بعد", past: "%s قبل", s: "چند سیکنڈ", ss: "%d سیکنڈ", m: "ایک منٹ", mm: "%d منٹ", h: "ایک گھنٹہ", hh: "%d گھنٹے", d: "ایک دن", dd: "%d دن", M: "ایک ماہ", MM: "%d ماہ", y: "ایک سال", yy: "%d سال" }, preparse: function(e) { return e.replace(/،/g, ",") }, postformat: function(e) { return e.replace(/,/g, "،") }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("uz", { months: "январ_феврал_март_апрел_май_июн_июл_август_сентябр_октябр_ноябр_декабр".split("_"), monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"), weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"), weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"), weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[Бугун соат] LT [да]", nextDay: "[Эртага] LT [да]", nextWeek: "dddd [куни соат] LT [да]", lastDay: "[Кеча соат] LT [да]", lastWeek: "[Утган] dddd [куни соат] LT [да]", sameElse: "L" }, relativeTime: { future: "Якин %s ичида", past: "Бир неча %s олдин", s: "фурсат", ss: "%d фурсат", m: "бир дакика", mm: "%d дакика", h: "бир соат", hh: "%d соат", d: "бир кун", dd: "%d кун", M: "бир ой", MM: "%d ой", y: "бир йил", yy: "%d йил" }, week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("uz-latn", { months: "Yanvar_Fevral_Mart_Aprel_May_Iyun_Iyul_Avgust_Sentabr_Oktabr_Noyabr_Dekabr".split("_"), monthsShort: "Yan_Fev_Mar_Apr_May_Iyun_Iyul_Avg_Sen_Okt_Noy_Dek".split("_"), weekdays: "Yakshanba_Dushanba_Seshanba_Chorshanba_Payshanba_Juma_Shanba".split("_"), weekdaysShort: "Yak_Dush_Sesh_Chor_Pay_Jum_Shan".split("_"), weekdaysMin: "Ya_Du_Se_Cho_Pa_Ju_Sha".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "D MMMM YYYY, dddd HH:mm" }, calendar: { sameDay: "[Bugun soat] LT [da]", nextDay: "[Ertaga] LT [da]", nextWeek: "dddd [kuni soat] LT [da]", lastDay: "[Kecha soat] LT [da]", lastWeek: "[O'tgan] dddd [kuni soat] LT [da]", sameElse: "L" }, relativeTime: { future: "Yaqin %s ichida", past: "Bir necha %s oldin", s: "soniya", ss: "%d soniya", m: "bir daqiqa", mm: "%d daqiqa", h: "bir soat", hh: "%d soat", d: "bir kun", dd: "%d kun", M: "bir oy", MM: "%d oy", y: "bir yil", yy: "%d yil" }, week: { dow: 1, doy: 7 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("vi", { months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), monthsParseExact: !0, weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"), weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysParseExact: !0, meridiemParse: /sa|ch/i, isPM: function(e) { return /^ch$/i.test(e) }, meridiem: function(e, t, n) { return e < 12 ? n ? "sa" : "SA" : n ? "ch" : "CH" }, longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM [năm] YYYY", LLL: "D MMMM [năm] YYYY HH:mm", LLLL: "dddd, D MMMM [năm] YYYY HH:mm", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY HH:mm", llll: "ddd, D MMM YYYY HH:mm" }, calendar: { sameDay: "[Hôm nay lúc] LT", nextDay: "[Ngày mai lúc] LT", nextWeek: "dddd [tuần tới lúc] LT", lastDay: "[Hôm qua lúc] LT", lastWeek: "dddd [tuần rồi lúc] LT", sameElse: "L" }, relativeTime: { future: "%s tới", past: "%s trước", s: "vài giây", ss: "%d giây", m: "một phút", mm: "%d phút", h: "một giờ", hh: "%d giờ", d: "một ngày", dd: "%d ngày", M: "một tháng", MM: "%d tháng", y: "một năm", yy: "%d năm" }, dayOfMonthOrdinalParse: /\d{1,2}/, ordinal: function(e) { return e }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("x-pseudo", { months: "J~áñúá~rý_F~ébrú~árý_~Márc~h_Áp~ríl_~Máý_~Júñé~_Júl~ý_Áú~gúst~_Sép~témb~ér_Ó~ctób~ér_Ñ~óvém~bér_~Décé~mbér".split("_"), monthsShort: "J~áñ_~Féb_~Már_~Ápr_~Máý_~Júñ_~Júl_~Áúg_~Sép_~Óct_~Ñóv_~Déc".split("_"), monthsParseExact: !0, weekdays: "S~úñdá~ý_Mó~ñdáý~_Túé~sdáý~_Wéd~ñésd~áý_T~húrs~dáý_~Fríd~áý_S~átúr~dáý".split("_"), weekdaysShort: "S~úñ_~Móñ_~Túé_~Wéd_~Thú_~Frí_~Sát".split("_"), weekdaysMin: "S~ú_Mó~_Tú_~Wé_T~h_Fr~_Sá".split("_"), weekdaysParseExact: !0, longDateFormat: { LT: "HH:mm", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY HH:mm", LLLL: "dddd, D MMMM YYYY HH:mm" }, calendar: { sameDay: "[T~ódá~ý át] LT", nextDay: "[T~ómó~rró~w át] LT", nextWeek: "dddd [át] LT", lastDay: "[Ý~ést~érdá~ý át] LT", lastWeek: "[L~ást] dddd [át] LT", sameElse: "L" }, relativeTime: { future: "í~ñ %s", past: "%s á~gó", s: "á ~féw ~sécó~ñds", ss: "%d s~écóñ~ds", m: "á ~míñ~úté", mm: "%d m~íñú~tés", h: "á~ñ hó~úr", hh: "%d h~óúrs", d: "á ~dáý", dd: "%d d~áýs", M: "á ~móñ~th", MM: "%d m~óñt~hs", y: "á ~ýéár", yy: "%d ý~éárs" }, dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function(e) { var t = e % 10,
                    n = 1 == ~~(e % 100 / 10) ? "th" : 1 === t ? "st" : 2 === t ? "nd" : 3 === t ? "rd" : "th"; return e + n }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("yo", { months: "Sẹ́rẹ́_Èrèlè_Ẹrẹ̀nà_Ìgbé_Èbibi_Òkùdu_Agẹmo_Ògún_Owewe_Ọ̀wàrà_Bélú_Ọ̀pẹ̀̀".split("_"), monthsShort: "Sẹ́r_Èrl_Ẹrn_Ìgb_Èbi_Òkù_Agẹ_Ògú_Owe_Ọ̀wà_Bél_Ọ̀pẹ̀̀".split("_"), weekdays: "Àìkú_Ajé_Ìsẹ́gun_Ọjọ́rú_Ọjọ́bọ_Ẹtì_Àbámẹ́ta".split("_"), weekdaysShort: "Àìk_Ajé_Ìsẹ́_Ọjr_Ọjb_Ẹtì_Àbá".split("_"), weekdaysMin: "Àì_Aj_Ìs_Ọr_Ọb_Ẹt_Àb".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY h:mm A", LLLL: "dddd, D MMMM YYYY h:mm A" }, calendar: { sameDay: "[Ònì ni] LT", nextDay: "[Ọ̀la ni] LT", nextWeek: "dddd [Ọsẹ̀ tón'bọ] [ni] LT", lastDay: "[Àna ni] LT", lastWeek: "dddd [Ọsẹ̀ tólọ́] [ni] LT", sameElse: "L" }, relativeTime: { future: "ní %s", past: "%s kọjá", s: "ìsẹjú aayá die", ss: "aayá %d", m: "ìsẹjú kan", mm: "ìsẹjú %d", h: "wákati kan", hh: "wákati %d", d: "ọjọ́ kan", dd: "ọjọ́ %d", M: "osù kan", MM: "osù %d", y: "ọdún kan", yy: "ọdún %d" }, dayOfMonthOrdinalParse: /ọjọ́\s\d{1,2}/, ordinal: "ọjọ́ %d", week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("zh-cn", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日Ah点mm分", LLLL: "YYYY年M月D日ddddAh点mm分", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, meridiemParse: /凌晨|早上|上午|中午|下午|晚上/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "下午" === t || "晚上" === t ? e + 12 : e >= 11 ? e : e + 12 }, meridiem: function(e, t, n) { var r = 100 * e + t; return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上" }, calendar: { sameDay: "[今天]LT", nextDay: "[明天]LT", nextWeek: "[下]ddddLT", lastDay: "[昨天]LT", lastWeek: "[上]ddddLT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(日|月|周)/, ordinal: function(e, t) { switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "周";
                    default:
                        return e } }, relativeTime: { future: "%s内", past: "%s前", s: "几秒", ss: "%d 秒", m: "1 分钟", mm: "%d 分钟", h: "1 小时", hh: "%d 小时", d: "1 天", dd: "%d 天", M: "1 个月", MM: "%d 个月", y: "1 年", yy: "%d 年" }, week: { dow: 1, doy: 4 } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("zh-hk", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日dddd HH:mm", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, meridiemParse: /凌晨|早上|上午|中午|下午|晚上/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { var r = 100 * e + t; return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上" }, calendar: { sameDay: "[今天]LT", nextDay: "[明天]LT", nextWeek: "[下]ddddLT", lastDay: "[昨天]LT", lastWeek: "[上]ddddLT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/, ordinal: function(e, t) { switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "週";
                    default:
                        return e } }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", ss: "%d 秒", m: "1 分鐘", mm: "%d 分鐘", h: "1 小時", hh: "%d 小時", d: "1 天", dd: "%d 天", M: "1 個月", MM: "%d 個月", y: "1 年", yy: "%d 年" } }) }(n(0)) }, function(e, t, n) {! function(e) { "use strict";
        e.defineLocale("zh-tw", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日 HH:mm", LLLL: "YYYY年M月D日dddd HH:mm", l: "YYYY/M/D", ll: "YYYY年M月D日", lll: "YYYY年M月D日 HH:mm", llll: "YYYY年M月D日dddd HH:mm" }, meridiemParse: /凌晨|早上|上午|中午|下午|晚上/, meridiemHour: function(e, t) { return 12 === e && (e = 0), "凌晨" === t || "早上" === t || "上午" === t ? e : "中午" === t ? e >= 11 ? e : e + 12 : "下午" === t || "晚上" === t ? e + 12 : void 0 }, meridiem: function(e, t, n) { var r = 100 * e + t; return r < 600 ? "凌晨" : r < 900 ? "早上" : r < 1130 ? "上午" : r < 1230 ? "中午" : r < 1800 ? "下午" : "晚上" }, calendar: { sameDay: "[今天] LT", nextDay: "[明天] LT", nextWeek: "[下]dddd LT", lastDay: "[昨天] LT", lastWeek: "[上]dddd LT", sameElse: "L" }, dayOfMonthOrdinalParse: /\d{1,2}(日|月|週)/, ordinal: function(e, t) { switch (t) {
                    case "d":
                    case "D":
                    case "DDD":
                        return e + "日";
                    case "M":
                        return e + "月";
                    case "w":
                    case "W":
                        return e + "週";
                    default:
                        return e } }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", ss: "%d 秒", m: "1 分鐘", mm: "%d 分鐘", h: "1 小時", hh: "%d 小時", d: "1 天", dd: "%d 天", M: "1 個月", MM: "%d 個月", y: "1 年", yy: "%d 年" } }) }(n(0)) }, function(e, t, n) { "use strict"; var r = this && this.__awaiter || function(e, t, n, r) { return new(n || (n = Promise))(function(a, s) {
                function i(e) { try { d(r.next(e)) } catch (e) { s(e) } }

                function o(e) { try { d(r.throw(e)) } catch (e) { s(e) } }

                function d(e) { e.done ? a(e.value) : new n(function(t) { t(e.value) }).then(i, o) } d((r = r.apply(e, t || [])).next()) }) },
        a = this && this.__generator || function(e, t) { var n, r, a, s, i = { label: 0, sent: function() { if (1 & a[0]) throw a[1]; return a[1] }, trys: [], ops: [] }; return s = { next: o(0), throw: o(1), return: o(2) }, "function" == typeof Symbol && (s[Symbol.iterator] = function() { return this }), s;

            function o(s) { return function(o) { return function(s) { if (n) throw new TypeError("Generator is already executing."); for (; i;) try { if (n = 1, r && (a = 2 & s[0] ? r.return : s[0] ? r.throw || ((a = r.return) && a.call(r), 0) : r.next) && !(a = a.call(r, s[1])).done) return a; switch (r = 0, a && (s = [2 & s[0], a.value]), s[0]) {
                                case 0:
                                case 1:
                                    a = s; break;
                                case 4:
                                    return i.label++, { value: s[1], done: !1 };
                                case 5:
                                    i.label++, r = s[1], s = [0]; continue;
                                case 7:
                                    s = i.ops.pop(), i.trys.pop(); continue;
                                default:
                                    if (!(a = (a = i.trys).length > 0 && a[a.length - 1]) && (6 === s[0] || 2 === s[0])) { i = 0; continue } if (3 === s[0] && (!a || s[1] > a[0] && s[1] < a[3])) { i.label = s[1]; break } if (6 === s[0] && i.label < a[1]) { i.label = a[1], a = s; break } if (a && i.label < a[2]) { i.label = a[2], i.ops.push(s); break } a[2] && i.ops.pop(), i.trys.pop(); continue } s = t.call(e, i) } catch (e) { s = [6, e], r = 0 } finally { n = a = 0 }
                        if (5 & s[0]) throw s[1]; return { value: s[0] ? s[1] : void 0, done: !0 } }([s, o]) } } };
    Object.defineProperty(t, "__esModule", { value: !0 }); var s = n(129),
        i = n(133),
        o = n(134);
    n(135), n(138); var d = n(0);
    $('[data-page="error"]').each(function(e, t) { var n = $(t),
                r = s.parse(window.location.search);
            r && r.msg && n.find("[data-error-code]").html(r.msg) }),
        function() { r(this, void 0, void 0, function() { return a(this, function(e) { return console.log("init"), $("#cidbForm").each(function(e, t) { var n = $(t);
                        console.log(n, "Form console log"); var r = s.parse(window.location.search);
                        n.data("action"), $("input[data-other-of]").hide(), n.find("select[data-has-other]").each(function(e, t) { var r = $(t),
                                a = r.data("has-other"),
                                s = n.find("input[data-other-of=" + r.attr("id") + "]");
                            r.on("change", function(e) { for (var t = !1, n = 0, i = Array.isArray(r.val()) ? r.val().map(function(e) { return +e }) : [+r.val()]; n < i.length; n++) { var o = i[n];
                                    a.indexOf(o) > -1 && (t = !0) } t ? s.show() : s.hide() }) }), n.find("#CP_Country").on("change", function(e) { var t = i.countryMapper($(e.target).val());
                            n.find("#PR_4_92_1").val(t) }), n.on("submit", function(e) { console.log("before preventDefault"), e.preventDefault(), console.log("after preventDefault"); var t = a(); if (t) { console.log(t); var s = document.getElementById("DOB_Error"); return s ? s.classList.add("show") : console.log("no DOB div found"), !1 } try { _() } catch (e) { return console.log(e), !1 } console.log("Submit form"), o.track({ event: "customEvent", eventCategory: "Form", eventAction: "Submit RSVP form" }); var i = u();
                            console.log("DATA", i), n.find('button[type="submit"]').attr("disabled", "true").html("Submitting..."), $.ajax({ url: "/api/form", type: "post", dataType: "json", processData: !1, contentType: !1, data: i }).done(function(e) { console.log("done", e); try { if (e.cid.status && "success" === e.cid.status) return console.log("success"), window.dataLayer = window.dataLayer || [], window.dataLayer.push({ event: "pageView", pagePath: "/thankyou" }), window.location.assign("/success?form_success=1"), !r.debug } catch (e) { console.log(e) } return !r.debug }).fail(function(e) { return console.log("fail", e), window.dataLayer = window.dataLayer || [], window.dataLayer.push({ event: "pageView", pagePath: "/error" }), window.location.assign("/error"), !r.debug }).always(function() { n.find('button[type="submit"]').removeAttr("disabled").html("Submit") }) }); var a = function() { var e = !1;
                                n.find(".has-error").removeClass("has-error"), n.find("[data-max-options]").each(function(t, n) { var r = $(n);
                                    Array.isArray(r.val()) && r.val().length > 3 && (r.parent().addClass("has-error"), e = !0) }); var t = n.find("[name=CP_DOB]");
                                d(t.val()).isValid() || (t.addClass("is-invalid"), e = !0); var r = d(t.val()); return d().diff(r, "years", !1) < 21 && (t.addClass("is-invalid"), e = !0), n.find("#file-error").hasClass("show") && (e = !0), e },
                            _ = function() { var e = window.dg_footer_configurations.hg_PP_Version; if (!e) throw new Error("Cannot get Privacy Policy version");
                                n.find("#PR_4_367_1_freetext").val(e) },
                            u = function() { var e = new FormData($("#cidbForm")[0]); return $("#PR_1_64_1").prop("checked") || e.append("PR_1_64_1", "99"), e };
                        r.debug && ($("#CP_FirstName").val("John"), $("#CP_LastName").val("Doe"), $("#CP_DOB").val("1980-12-12"), $("#CP_EmailId").val("test@test.com"), $("#CP_ZipCode").val("10105"), $("#CP_City").val("NYC")) }), $("#unsibscribeForm").each(function(e, t) { var n = $(t),
                            r = s.parse(window.location.search);
                        n.find("#Country").html(n.find("#Country > option").sort(function(e, t) { return e.text === t.text ? 0 : e.text < t.text ? -1 : 1 })), r.debug && ($("#FirstName").val("John"), $("#LastName").val("Doe"), $("#DOB").val("1980-12-12"), $("#EmailId").val("test@test.com")), n.on("submit", function(e) { e.preventDefault(), console.log("Submit form"), n.find('button[type="submit"]').attr("disabled", "true").html("Submitting..."), $.ajax({ url: "/api/consumer/unsubscribe", type: "post", dataType: "json", data: n.serialize() }).done(function(e) { return console.log("done", e), e.success ? !r.debug && window.location.assign("/success") : !r.debug && window.location.assign("/error") }).fail(function(e) { return console.log("fail", e), !r.debug && window.location.assign("/error") }).always(function() { n.find('button[type="submit"]').removeAttr("disabled").html("Submit") }) }) }), [2] }) }) }() }, function(e, t, n) { "use strict"; var r = n(130),
        a = n(131),
        s = n(132);

    function i(e, t) { return t.encode ? t.strict ? r(e) : encodeURIComponent(e) : e }

    function o(e) { var t = e.indexOf("?"); return -1 === t ? "" : e.slice(t + 1) }

    function d(e, t) { var n = function(e) { var t; switch (e.arrayFormat) {
                    case "index":
                        return function(e, n, r) { t = /\[(\d*)\]$/.exec(e), e = e.replace(/\[\d*\]$/, ""), t ? (void 0 === r[e] && (r[e] = {}), r[e][t[1]] = n) : r[e] = n };
                    case "bracket":
                        return function(e, n, r) { t = /(\[\])$/.exec(e), e = e.replace(/\[\]$/, ""), t ? void 0 !== r[e] ? r[e] = [].concat(r[e], n) : r[e] = [n] : r[e] = n };
                    default:
                        return function(e, t, n) { void 0 !== n[e] ? n[e] = [].concat(n[e], t) : n[e] = t } } }(t = a({ arrayFormat: "none" }, t)),
            r = Object.create(null); return "string" != typeof e ? r : (e = e.trim().replace(/^[?#&]/, "")) ? (e.split("&").forEach(function(e) { var t = e.replace(/\+/g, " ").split("="),
                a = t.shift(),
                i = t.length > 0 ? t.join("=") : void 0;
            i = void 0 === i ? null : s(i), n(s(a), i, r) }), Object.keys(r).sort().reduce(function(e, t) { var n = r[t]; return Boolean(n) && "object" == typeof n && !Array.isArray(n) ? e[t] = function e(t) { return Array.isArray(t) ? t.sort() : "object" == typeof t ? e(Object.keys(t)).sort(function(e, t) { return Number(e) - Number(t) }).map(function(e) { return t[e] }) : t }(n) : e[t] = n, e }, Object.create(null))) : r } t.extract = o, t.parse = d, t.stringify = function(e, t) {!1 === (t = a({ encode: !0, strict: !0, arrayFormat: "none" }, t)).sort && (t.sort = function() {}); var n = function(e) { switch (e.arrayFormat) {
                case "index":
                    return function(t, n, r) { return null === n ? [i(t, e), "[", r, "]"].join("") : [i(t, e), "[", i(r, e), "]=", i(n, e)].join("") };
                case "bracket":
                    return function(t, n) { return null === n ? i(t, e) : [i(t, e), "[]=", i(n, e)].join("") };
                default:
                    return function(t, n) { return null === n ? i(t, e) : [i(t, e), "=", i(n, e)].join("") } } }(t); return e ? Object.keys(e).sort(t.sort).map(function(r) { var a = e[r]; if (void 0 === a) return ""; if (null === a) return i(r, t); if (Array.isArray(a)) { var s = []; return a.slice().forEach(function(e) { void 0 !== e && s.push(n(r, e, s.length)) }), s.join("&") } return i(r, t) + "=" + i(a, t) }).filter(function(e) { return e.length > 0 }).join("&") : "" }, t.parseUrl = function(e, t) { return { url: e.split("?")[0] || "", query: d(o(e), t) } } }, function(e, t, n) { "use strict";
    e.exports = function(e) { return encodeURIComponent(e).replace(/[!'()*]/g, function(e) { return "%" + e.charCodeAt(0).toString(16).toUpperCase() }) } }, function(e, t, n) { "use strict";
    /*
    object-assign
    (c) Sindre Sorhus
    @license MIT
    */
    var r = Object.getOwnPropertySymbols,
        a = Object.prototype.hasOwnProperty,
        s = Object.prototype.propertyIsEnumerable;
    e.exports = function() { try { if (!Object.assign) return !1; var e = new String("abc"); if (e[5] = "de", "5" === Object.getOwnPropertyNames(e)[0]) return !1; for (var t = {}, n = 0; n < 10; n++) t["_" + String.fromCharCode(n)] = n; if ("0123456789" !== Object.getOwnPropertyNames(t).map(function(e) { return t[e] }).join("")) return !1; var r = {}; return "abcdefghijklmnopqrst".split("").forEach(function(e) { r[e] = e }), "abcdefghijklmnopqrst" === Object.keys(Object.assign({}, r)).join("") } catch (e) { return !1 } }() ? Object.assign : function(e, t) { for (var n, i, o = function(e) { if (null === e || void 0 === e) throw new TypeError("Object.assign cannot be called with null or undefined"); return Object(e) }(e), d = 1; d < arguments.length; d++) { for (var _ in n = Object(arguments[d])) a.call(n, _) && (o[_] = n[_]); if (r) { i = r(n); for (var u = 0; u < i.length; u++) s.call(n, i[u]) && (o[i[u]] = n[i[u]]) } } return o } }, function(e, t, n) { "use strict"; var r = new RegExp("%[a-f0-9]{2}", "gi"),
        a = new RegExp("(%[a-f0-9]{2})+", "gi");

    function s(e, t) { try { return decodeURIComponent(e.join("")) } catch (e) {} if (1 === e.length) return e;
        t = t || 1; var n = e.slice(0, t),
            r = e.slice(t); return Array.prototype.concat.call([], s(n), s(r)) }

    function i(e) { try { return decodeURIComponent(e) } catch (a) { for (var t = e.match(r), n = 1; n < t.length; n++) t = (e = s(t, n).join("")).match(r); return e } } e.exports = function(e) { if ("string" != typeof e) throw new TypeError("Expected `encodedURI` to be of type `string`, got `" + typeof e + "`"); try { return e = e.replace(/\+/g, " "), decodeURIComponent(e) } catch (t) { return function(e) { for (var t = { "%FE%FF": "��", "%FF%FE": "��" }, n = a.exec(e); n;) { try { t[n[0]] = decodeURIComponent(n[0]) } catch (e) { var r = i(n[0]);
                        r !== n[0] && (t[n[0]] = r) } n = a.exec(e) } t["%C2"] = "�"; for (var s = Object.keys(t), o = 0; o < s.length; o++) { var d = s[o];
                    e = e.replace(new RegExp(d, "g"), t[d]) } return e }(e) } } }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }), t.countryMapper = function(e) { if (!e) return 0; return { AD: 1, AE: 2, AF: 3, AG: 4, AI: 5, AL: 6, AM: 7, AO: 9, AQ: 10, AR: 11, AS: 12, AT: 13, AU: 14, AW: 15, AZ: 16, BA: 17, BB: 18, BD: 19, BE: 20, BF: 21, BG: 22, BH: 23, BI: 24, BJ: 25, BM: 26, BN: 27, BO: 28, BR: 29, BS: 30, BT: 31, BW: 33, BY: 34, BZ: 35, CA: 36, CC: 37, CF: 38, CG: 39, CH: 40, CI: 41, CK: 42, CL: 43, CM: 44, CN: 45, CO: 46, CR: 47, CU: 49, CV: 50, CX: 51, CY: 52, CZ: 53, DE: 54, DJ: 55, DK: 56, DM: 57, DO: 58, DZ: 59, EC: 60, EE: 61, EG: 62, EH: 63, ER: 64, ES: 65, ET: 66, FI: 67, FJ: 68, FK: 69, FM: 70, FO: 71, FR: 72, GA: 74, GB: 75, GD: 76, GE: 77, GF: 78, GH: 79, GI: 80, GL: 81, GM: 82, GN: 83, GP: 84, GQ: 85, GR: 86, GS: 87, GT: 88, GU: 89, GW: 90, GY: 91, HK: 92, HM: 93, HN: 94, HR: 95, HT: 96, HU: 97, ID: 98, IE: 99, IL: 100, IN: 101, IO: 102, IQ: 103, IR: 104, IS: 105, IT: 106, JM: 107, JO: 108, JP: 109, KE: 110, KG: 111, KH: 112, KI: 113, KM: 114, KN: 115, KP: 116, KW: 117, KY: 118, KZ: 119, LA: 120, LB: 121, LC: 122, LI: 123, LK: 124, LR: 125, LS: 126, LT: 127, LU: 128, LV: 129, LY: 130, MA: 131, MC: 132, MD: 133, MG: 134, MH: 135, MK: 136, ML: 137, MM: 138, MN: 139, MO: 140, MP: 141, MQ: 142, MR: 143, MS: 144, MT: 145, MU: 146, MV: 147, MW: 148, MX: 149, MY: 150, MZ: 151, NA: 152, NC: 153, NE: 154, NF: 155, NG: 156, NI: 157, NL: 158, NO: 159, NP: 160, NR: 161, NU: 162, NZ: 163, OM: 164, PA: 165, PE: 166, PF: 167, PG: 168, PH: 169, PK: 170, PL: 171, PM: 172, PN: 173, PR: 174, PT: 175, PW: 176, PY: 177, QA: 178, RE: 179, RO: 180, RU: 181, RW: 182, SA: 183, SB: 184, SC: 185, SD: 186, SE: 187, SG: 188, SH: 189, SI: 190, SJ: 191, SK: 192, SL: 193, SM: 194, SN: 195, SO: 196, SR: 197, ST: 198, SV: 200, SY: 201, SZ: 202, TC: 203, TD: 204, TF: 205, TG: 206, TH: 207, TJ: 208, TK: 209, TM: 210, TN: 211, TO: 212, TR: 214, TT: 215, TV: 216, TW: 217, TZ: 218, UA: 219, UG: 220, UM: 221, US: 222, UY: 223, UZ: 224, VA: 225, VC: 226, VE: 227, VG: 228, VI: 229, VN: 230, VU: 231, WF: 232, WS: 233, YE: 234, YT: 235, ZA: 237, ZM: 238, ZW: 240, KR: 241, RS: 242, AX: 243, CD: 244, GG: 245, IM: 246, JE: 247, ME: 248, PS: 249, BL: 250, MF: 251, TL: 252, ZZ: 253, ND: 254, BQ: 256, CW: 257, SX: 258, SS: 259 } [e] || 0 } }, function(e, t, n) { "use strict";
    Object.defineProperty(t, "__esModule", { value: !0 }); var r = window;
    t.track = function(e) { r.dataLayer = r.dataLayer || [], r.dataLayer.push(e) } }, function(e, t, n) {
    (function(r, a) { var s, i;
        /*!
         * https://github.com/paulmillr/es6-shim
         * @license es6-shim Copyright 2013-2016 by Paul Miller (http://paulmillr.com)
         *   and contributors,  MIT License
         * es6-shim: v0.35.4
         * see https://github.com/paulmillr/es6-shim/blob/0.35.3/LICENSE
         * Details and documentation:
         * https://github.com/paulmillr/es6-shim/
         */
        void 0 === (i = "function" == typeof(s = function() { "use strict"; var e, t = Function.call.bind(Function.apply),
                n = Function.call.bind(Function.call),
                s = Array.isArray,
                i = Object.keys,
                o = function(e) { try { return e(), !1 } catch (e) { return !0 } },
                d = function(e) { try { return e() } catch (e) { return !1 } },
                _ = function(e) { return function() { return !t(e, this, arguments) } }(o),
                u = !!Object.defineProperty && !o(function() { return Object.defineProperty({}, "x", { get: function() {} }) }),
                l = "foo" === function() {}.name,
                m = Function.call.bind(Array.prototype.forEach),
                c = Function.call.bind(Array.prototype.reduce),
                h = Function.call.bind(Array.prototype.filter),
                f = Function.call.bind(Array.prototype.some),
                M = function(e, t, n, r) {!r && t in e || (u ? Object.defineProperty(e, t, { configurable: !0, enumerable: !1, writable: !0, value: n }) : e[t] = n) },
                y = function(e, t, n) { m(i(t), function(r) { var a = t[r];
                        M(e, r, a, !!n) }) },
                p = Function.call.bind(Object.prototype.toString),
                L = function(e) { return "function" == typeof e },
                Y = { getter: function(e, t, n) { if (!u) throw new TypeError("getters require true ES5 support");
                        Object.defineProperty(e, t, { configurable: !0, enumerable: !1, get: n }) }, proxy: function(e, t, n) { if (!u) throw new TypeError("getters require true ES5 support"); var r = Object.getOwnPropertyDescriptor(e, t);
                        Object.defineProperty(n, t, { configurable: r.configurable, enumerable: r.enumerable, get: function() { return e[t] }, set: function(n) { e[t] = n } }) }, redefine: function(e, t, n) { if (u) { var r = Object.getOwnPropertyDescriptor(e, t);
                            r.value = n, Object.defineProperty(e, t, r) } else e[t] = n }, defineByDescriptor: function(e, t, n) { u ? Object.defineProperty(e, t, n) : "value" in n && (e[t] = n.value) }, preserveToString: function(e, t) { t && L(t.toString) && M(e, "toString", t.toString.bind(t), !0) } },
                g = Object.create || function(e, t) { var n = function() {};
                    n.prototype = e; var r = new n; return void 0 !== t && i(t).forEach(function(e) { Y.defineByDescriptor(r, e, t[e]) }), r },
                k = function(e, t) { return !!Object.setPrototypeOf && d(function() { var n = function t(n) { var r = new e(n); return Object.setPrototypeOf(r, t.prototype), r }; return Object.setPrototypeOf(n, e), n.prototype = g(e.prototype, { constructor: { value: n } }), t(n) }) },
                v = function() { if ("undefined" != typeof self) return self; if ("undefined" != typeof window) return window; if (void 0 !== r) return r; throw new Error("unable to locate global object") }(),
                D = v.isFinite,
                T = Function.call.bind(String.prototype.indexOf),
                w = Function.apply.bind(Array.prototype.indexOf),
                b = Function.call.bind(Array.prototype.concat),
                S = Function.call.bind(String.prototype.slice),
                j = Function.call.bind(Array.prototype.push),
                H = Function.apply.bind(Array.prototype.push),
                O = Function.call.bind(Array.prototype.shift),
                x = Math.max,
                P = Math.min,
                E = Math.floor,
                A = Math.abs,
                W = Math.exp,
                F = Math.log,
                I = Math.sqrt,
                C = Function.call.bind(Object.prototype.hasOwnProperty),
                N = function() {},
                z = v.Map,
                R = z && z.prototype.delete,
                J = z && z.prototype.get,
                G = z && z.prototype.has,
                U = z && z.prototype.set,
                B = v.Symbol || {},
                V = B.species || "@@species",
                $ = Number.isNaN || function(e) { return e != e },
                q = Number.isFinite || function(e) { return "number" == typeof e && D(e) },
                K = L(Math.sign) ? Math.sign : function(e) { var t = Number(e); return 0 === t ? t : $(t) ? t : t < 0 ? -1 : 1 },
                Z = function(e) { var t = Number(e); return t < -1 || $(t) ? NaN : 0 === t || t === 1 / 0 ? t : -1 === t ? -1 / 0 : 1 + t - 1 == 0 ? t : t * (F(1 + t) / (1 + t - 1)) },
                Q = function(e) { return "[object Arguments]" === p(e) },
                X = Q(arguments) ? Q : function(e) { return null !== e && "object" == typeof e && "number" == typeof e.length && e.length >= 0 && "[object Array]" !== p(e) && "[object Function]" === p(e.callee) },
                ee = { primitive: function(e) { return null === e || "function" != typeof e && "object" != typeof e }, string: function(e) { return "[object String]" === p(e) }, regex: function(e) { return "[object RegExp]" === p(e) }, symbol: function(e) { return "function" == typeof v.Symbol && "symbol" == typeof e } },
                te = function(e, t, n) { var r = e[t];
                    M(e, t, n, !0), Y.preserveToString(e[t], r) },
                ne = "function" == typeof B && "function" == typeof B.for && ee.symbol(B()),
                re = ee.symbol(B.iterator) ? B.iterator : "_es6-shim iterator_";
            v.Set && "function" == typeof(new v.Set)["@@iterator"] && (re = "@@iterator"), v.Reflect || M(v, "Reflect", {}, !0); var ae = v.Reflect,
                se = String,
                ie = "undefined" != typeof document && document ? document.all : null,
                oe = null == ie ? function(e) { return null == e } : function(e) { return null == e && e !== ie },
                de = { Call: function(e, n) { var r = arguments.length > 2 ? arguments[2] : []; if (!de.IsCallable(e)) throw new TypeError(e + " is not a function"); return t(e, n, r) }, RequireObjectCoercible: function(e, t) { if (oe(e)) throw new TypeError(t || "Cannot call method on " + e); return e }, TypeIsObject: function(e) { return void 0 !== e && null !== e && !0 !== e && !1 !== e && ("function" == typeof e || "object" == typeof e || e === ie) }, ToObject: function(e, t) { return Object(de.RequireObjectCoercible(e, t)) }, IsCallable: L, IsConstructor: function(e) { return de.IsCallable(e) }, ToInt32: function(e) { return de.ToNumber(e) >> 0 }, ToUint32: function(e) { return de.ToNumber(e) >>> 0 }, ToNumber: function(e) { if ("[object Symbol]" === p(e)) throw new TypeError("Cannot convert a Symbol value to a number"); return +e }, ToInteger: function(e) { var t = de.ToNumber(e); return $(t) ? 0 : 0 !== t && q(t) ? (t > 0 ? 1 : -1) * E(A(t)) : t }, ToLength: function(e) { var t = de.ToInteger(e); return t <= 0 ? 0 : t > Number.MAX_SAFE_INTEGER ? Number.MAX_SAFE_INTEGER : t }, SameValue: function(e, t) { return e === t ? 0 !== e || 1 / e == 1 / t : $(e) && $(t) }, SameValueZero: function(e, t) { return e === t || $(e) && $(t) }, IsIterable: function(e) { return de.TypeIsObject(e) && (void 0 !== e[re] || X(e)) }, GetIterator: function(t) { if (X(t)) return new e(t, "value"); var n = de.GetMethod(t, re); if (!de.IsCallable(n)) throw new TypeError("value is not an iterable"); var r = de.Call(n, t); if (!de.TypeIsObject(r)) throw new TypeError("bad iterator"); return r }, GetMethod: function(e, t) { var n = de.ToObject(e)[t]; if (!oe(n)) { if (!de.IsCallable(n)) throw new TypeError("Method not callable: " + t); return n } }, IteratorComplete: function(e) { return !!e.done }, IteratorClose: function(e, t) { var n = de.GetMethod(e, "return"); if (void 0 !== n) { var r, a; try { r = de.Call(n, e) } catch (e) { a = e } if (!t) { if (a) throw a; if (!de.TypeIsObject(r)) throw new TypeError("Iterator's return method returned a non-object.") } } }, IteratorNext: function(e) { var t = arguments.length > 1 ? e.next(arguments[1]) : e.next(); if (!de.TypeIsObject(t)) throw new TypeError("bad iterator"); return t }, IteratorStep: function(e) { var t = de.IteratorNext(e),
                            n = de.IteratorComplete(t); return !n && t }, Construct: function(e, t, n, r) { var a = void 0 === n ? e : n; if (!r && ae.construct) return ae.construct(e, t, a); var s = a.prototype;
                        de.TypeIsObject(s) || (s = Object.prototype); var i = g(s),
                            o = de.Call(e, i, t); return de.TypeIsObject(o) ? o : i }, SpeciesConstructor: function(e, t) { var n = e.constructor; if (void 0 === n) return t; if (!de.TypeIsObject(n)) throw new TypeError("Bad constructor"); var r = n[V]; if (oe(r)) return t; if (!de.IsConstructor(r)) throw new TypeError("Bad @@species"); return r }, CreateHTML: function(e, t, n, r) { var a = de.ToString(e),
                            s = "<" + t; if ("" !== n) { var i = de.ToString(r),
                                o = i.replace(/"/g, "&quot;");
                            s += " " + n + '="' + o + '"' } var d = s + ">",
                            _ = d + a; return _ + "</" + t + ">" }, IsRegExp: function(e) { if (!de.TypeIsObject(e)) return !1; var t = e[B.match]; return void 0 !== t ? !!t : ee.regex(e) }, ToString: function(e) { return se(e) } }; if (u && ne) { var _e = function(e) { if (ee.symbol(B[e])) return B[e]; var t = B.for("Symbol." + e); return Object.defineProperty(B, e, { configurable: !1, enumerable: !1, writable: !1, value: t }), t }; if (!ee.symbol(B.search)) { var ue = _e("search"),
                        le = String.prototype.search;
                    M(RegExp.prototype, ue, function(e) { return de.Call(le, e, [this]) }), te(String.prototype, "search", function(e) { var t = de.RequireObjectCoercible(this); if (!oe(e)) { var n = de.GetMethod(e, ue); if (void 0 !== n) return de.Call(n, e, [t]) } return de.Call(le, t, [de.ToString(e)]) }) } if (!ee.symbol(B.replace)) { var me = _e("replace"),
                        ce = String.prototype.replace;
                    M(RegExp.prototype, me, function(e, t) { return de.Call(ce, e, [this, t]) }), te(String.prototype, "replace", function(e, t) { var n = de.RequireObjectCoercible(this); if (!oe(e)) { var r = de.GetMethod(e, me); if (void 0 !== r) return de.Call(r, e, [n, t]) } return de.Call(ce, n, [de.ToString(e), t]) }) } if (!ee.symbol(B.split)) { var he = _e("split"),
                        fe = String.prototype.split;
                    M(RegExp.prototype, he, function(e, t) { return de.Call(fe, e, [this, t]) }), te(String.prototype, "split", function(e, t) { var n = de.RequireObjectCoercible(this); if (!oe(e)) { var r = de.GetMethod(e, he); if (void 0 !== r) return de.Call(r, e, [n, t]) } return de.Call(fe, n, [de.ToString(e), t]) }) } var Me = ee.symbol(B.match),
                    ye = Me && function() { var e = {}; return e[B.match] = function() { return 42 }, 42 !== "a".match(e) }(); if (!Me || ye) { var pe = _e("match"),
                        Le = String.prototype.match;
                    M(RegExp.prototype, pe, function(e) { return de.Call(Le, e, [this]) }), te(String.prototype, "match", function(e) { var t = de.RequireObjectCoercible(this); if (!oe(e)) { var n = de.GetMethod(e, pe); if (void 0 !== n) return de.Call(n, e, [t]) } return de.Call(Le, t, [de.ToString(e)]) }) } } var Ye = function(e, t, n) { Y.preserveToString(t, e), Object.setPrototypeOf && Object.setPrototypeOf(e, t), u ? m(Object.getOwnPropertyNames(e), function(r) { r in N || n[r] || Y.proxy(e, r, t) }) : m(Object.keys(e), function(r) { r in N || n[r] || (t[r] = e[r]) }), t.prototype = e.prototype, Y.redefine(e.prototype, "constructor", t) },
                ge = function() { return this },
                ke = function(e) { u && !C(e, V) && Y.getter(e, V, ge) },
                ve = function(e, t) { var n = t || function() { return this };
                    M(e, re, n), !e[re] && ee.symbol(re) && (e[re] = n) },
                De = function(e, t, n) { if (function(e, t, n) { u ? Object.defineProperty(e, t, { configurable: !0, enumerable: !0, writable: !0, value: n }) : e[t] = n }(e, t, n), !de.SameValue(e[t], n)) throw new TypeError("property is nonconfigurable") },
                Te = function(e, t, n, r) { if (!de.TypeIsObject(e)) throw new TypeError("Constructor requires `new`: " + t.name); var a = t.prototype;
                    de.TypeIsObject(a) || (a = n); var s = g(a); for (var i in r)
                        if (C(r, i)) { var o = r[i];
                            M(s, i, o, !0) } return s }; if (String.fromCodePoint && 1 !== String.fromCodePoint.length) { var we = String.fromCodePoint;
                te(String, "fromCodePoint", function(e) { return de.Call(we, this, arguments) }) } var be = { fromCodePoint: function(e) { for (var t, n = [], r = 0, a = arguments.length; r < a; r++) { if (t = Number(arguments[r]), !de.SameValue(t, de.ToInteger(t)) || t < 0 || t > 1114111) throw new RangeError("Invalid code point " + t);
                        t < 65536 ? j(n, String.fromCharCode(t)) : (t -= 65536, j(n, String.fromCharCode(55296 + (t >> 10))), j(n, String.fromCharCode(t % 1024 + 56320))) } return n.join("") }, raw: function(e) { var t = de.ToObject(e, "bad callSite"),
                        n = de.ToObject(t.raw, "bad raw value"),
                        r = n.length,
                        a = de.ToLength(r); if (a <= 0) return ""; for (var s, i, o, d, _ = [], u = 0; u < a && (s = de.ToString(u), o = de.ToString(n[s]), j(_, o), !(u + 1 >= a));) i = u + 1 < arguments.length ? arguments[u + 1] : "", d = de.ToString(i), j(_, d), u += 1; return _.join("") } };
            String.raw && "xy" !== String.raw({ raw: { 0: "x", 1: "y", length: 2 } }) && te(String, "raw", be.raw), y(String, be); var Se = 1 / 0,
                je = { repeat: function(e) { var t = de.ToString(de.RequireObjectCoercible(this)),
                            n = de.ToInteger(e); if (n < 0 || n >= Se) throw new RangeError("repeat count must be less than infinity and not overflow maximum string size"); return function e(t, n) { if (n < 1) return ""; if (n % 2) return e(t, n - 1) + t; var r = e(t, n / 2); return r + r }(t, n) }, startsWith: function(e) { var t = de.ToString(de.RequireObjectCoercible(this)); if (de.IsRegExp(e)) throw new TypeError('Cannot call method "startsWith" with a regex'); var n, r = de.ToString(e);
                        arguments.length > 1 && (n = arguments[1]); var a = x(de.ToInteger(n), 0); return S(t, a, a + r.length) === r }, endsWith: function(e) { var t = de.ToString(de.RequireObjectCoercible(this)); if (de.IsRegExp(e)) throw new TypeError('Cannot call method "endsWith" with a regex'); var n, r = de.ToString(e),
                            a = t.length;
                        arguments.length > 1 && (n = arguments[1]); var s = void 0 === n ? a : de.ToInteger(n),
                            i = P(x(s, 0), a); return S(t, i - r.length, i) === r }, includes: function(e) { if (de.IsRegExp(e)) throw new TypeError('"includes" does not accept a RegExp'); var t, n = de.ToString(e); return arguments.length > 1 && (t = arguments[1]), -1 !== T(this, n, t) }, codePointAt: function(e) { var t = de.ToString(de.RequireObjectCoercible(this)),
                            n = de.ToInteger(e),
                            r = t.length; if (n >= 0 && n < r) { var a = t.charCodeAt(n),
                                s = n + 1 === r; if (a < 55296 || a > 56319 || s) return a; var i = t.charCodeAt(n + 1); return i < 56320 || i > 57343 ? a : 1024 * (a - 55296) + (i - 56320) + 65536 } } }; if (String.prototype.includes && !1 !== "a".includes("a", 1 / 0) && te(String.prototype, "includes", je.includes), String.prototype.startsWith && String.prototype.endsWith) { var He = o(function() { return "/a/".startsWith(/a/) }),
                    Oe = d(function() { return !1 === "abc".startsWith("a", 1 / 0) });
                He && Oe || (te(String.prototype, "startsWith", je.startsWith), te(String.prototype, "endsWith", je.endsWith)) } if (ne) { var xe = d(function() { var e = /a/; return e[B.match] = !1, "/a/".startsWith(e) });
                xe || te(String.prototype, "startsWith", je.startsWith); var Pe = d(function() { var e = /a/; return e[B.match] = !1, "/a/".endsWith(e) });
                Pe || te(String.prototype, "endsWith", je.endsWith); var Ee = d(function() { var e = /a/; return e[B.match] = !1, "/a/".includes(e) });
                Ee || te(String.prototype, "includes", je.includes) } y(String.prototype, je); var Ae = ["\t\n\v\f\r   ᠎    ", "         　\u2028", "\u2029\ufeff"].join(""),
                We = new RegExp("(^[" + Ae + "]+)|([" + Ae + "]+$)", "g"),
                Fe = function() { return de.ToString(de.RequireObjectCoercible(this)).replace(We, "") },
                Ie = ["", "​", "￾"].join(""),
                Ce = new RegExp("[" + Ie + "]", "g"),
                Ne = /^[-+]0x[0-9a-f]+$/i,
                ze = Ie.trim().length !== Ie.length;
            M(String.prototype, "trim", Fe, ze); var Re = function(e) { return { value: e, done: 0 === arguments.length } },
                Je = function(e) { de.RequireObjectCoercible(e), this._s = de.ToString(e), this._i = 0 };
            Je.prototype.next = function() { var e = this._s,
                    t = this._i; if (void 0 === e || t >= e.length) return this._s = void 0, Re(); var n, r, a = e.charCodeAt(t); return a < 55296 || a > 56319 || t + 1 === e.length ? r = 1 : (n = e.charCodeAt(t + 1), r = n < 56320 || n > 57343 ? 1 : 2), this._i = t + r, Re(e.substr(t, r)) }, ve(Je.prototype), ve(String.prototype, function() { return new Je(this) }); var Ge = { from: function(e) { var t, r, a, s = this; if (arguments.length > 1 && (t = arguments[1]), void 0 === t) r = !1;
                    else { if (!de.IsCallable(t)) throw new TypeError("Array.from: when provided, the second argument must be a function");
                        arguments.length > 2 && (a = arguments[2]), r = !0 } var i, o, d, _ = void 0 !== (X(e) || de.GetMethod(e, re)); if (_) { o = de.IsConstructor(s) ? Object(new s) : []; var u, l, m = de.GetIterator(e); for (d = 0; !1 !== (u = de.IteratorStep(m));) { l = u.value; try { r && (l = void 0 === a ? t(l, d) : n(t, a, l, d)), o[d] = l } catch (e) { throw de.IteratorClose(m, !0), e } d += 1 } i = d } else { var c, h = de.ToObject(e); for (i = de.ToLength(h.length), o = de.IsConstructor(s) ? Object(new s(i)) : new Array(i), d = 0; d < i; ++d) c = h[d], r && (c = void 0 === a ? t(c, d) : n(t, a, c, d)), De(o, d, c) } return o.length = i, o }, of: function() { for (var e = arguments.length, t = this, n = s(t) || !de.IsCallable(t) ? new Array(e) : de.Construct(t, [e]), r = 0; r < e; ++r) De(n, r, arguments[r]); return n.length = e, n } };
            y(Array, Ge), ke(Array), y((e = function(e, t) { this.i = 0, this.array = e, this.kind = t }).prototype, { next: function() { var t = this.i,
                        n = this.array; if (!(this instanceof e)) throw new TypeError("Not an ArrayIterator"); if (void 0 !== n)
                        for (var r = de.ToLength(n.length); t < r; t++) { var a, s = this.kind; return "key" === s ? a = t : "value" === s ? a = n[t] : "entry" === s && (a = [t, n[t]]), this.i = t + 1, Re(a) }
                    return this.array = void 0, Re() } }), ve(e.prototype), Array.of === Ge.of || function() { var e = function(e) { this.length = e };
                e.prototype = []; var t = Array.of.apply(e, [1, 2]); return t instanceof e && 2 === t.length }() || te(Array, "of", Ge.of); var Ue = { copyWithin: function(e, t) { var n, r = de.ToObject(this),
                        a = de.ToLength(r.length),
                        s = de.ToInteger(e),
                        i = de.ToInteger(t),
                        o = s < 0 ? x(a + s, 0) : P(s, a),
                        d = i < 0 ? x(a + i, 0) : P(i, a);
                    arguments.length > 2 && (n = arguments[2]); var _ = void 0 === n ? a : de.ToInteger(n),
                        u = _ < 0 ? x(a + _, 0) : P(_, a),
                        l = P(u - d, a - o),
                        m = 1; for (d < o && o < d + l && (m = -1, d += l - 1, o += l - 1); l > 0;) d in r ? r[o] = r[d] : delete r[o], d += m, o += m, l -= 1; return r }, fill: function(e) { var t, n;
                    arguments.length > 1 && (t = arguments[1]), arguments.length > 2 && (n = arguments[2]); var r = de.ToObject(this),
                        a = de.ToLength(r.length);
                    t = de.ToInteger(void 0 === t ? 0 : t), n = de.ToInteger(void 0 === n ? a : n); for (var s = t < 0 ? x(a + t, 0) : P(t, a), i = n < 0 ? a + n : n, o = s; o < a && o < i; ++o) r[o] = e; return r }, find: function(e) { var t = de.ToObject(this),
                        r = de.ToLength(t.length); if (!de.IsCallable(e)) throw new TypeError("Array#find: predicate must be a function"); for (var a, s = arguments.length > 1 ? arguments[1] : null, i = 0; i < r; i++)
                        if (a = t[i], s) { if (n(e, s, a, i, t)) return a } else if (e(a, i, t)) return a }, findIndex: function(e) { var t = de.ToObject(this),
                        r = de.ToLength(t.length); if (!de.IsCallable(e)) throw new TypeError("Array#findIndex: predicate must be a function"); for (var a = arguments.length > 1 ? arguments[1] : null, s = 0; s < r; s++)
                        if (a) { if (n(e, a, t[s], s, t)) return s } else if (e(t[s], s, t)) return s; return -1 }, keys: function() { return new e(this, "key") }, values: function() { return new e(this, "value") }, entries: function() { return new e(this, "entry") } }; if (Array.prototype.keys && !de.IsCallable([1].keys().next) && delete Array.prototype.keys, Array.prototype.entries && !de.IsCallable([1].entries().next) && delete Array.prototype.entries, Array.prototype.keys && Array.prototype.entries && !Array.prototype.values && Array.prototype[re] && (y(Array.prototype, { values: Array.prototype[re] }), ee.symbol(B.unscopables) && (Array.prototype[B.unscopables].values = !0)), l && Array.prototype.values && "values" !== Array.prototype.values.name) { var Be = Array.prototype.values;
                te(Array.prototype, "values", function() { return de.Call(Be, this, arguments) }), M(Array.prototype, re, Array.prototype.values, !0) } y(Array.prototype, Ue), 1 / [!0].indexOf(!0, -0) < 0 && M(Array.prototype, "indexOf", function(e) { var t = w(this, arguments); return 0 === t && 1 / t < 0 ? 0 : t }, !0), ve(Array.prototype, function() { return this.values() }), Object.getPrototypeOf && ve(Object.getPrototypeOf([].values())); var Ve = d(function() { return 0 === Array.from({ length: -1 }).length }),
                $e = function() { var e = Array.from([0].entries()); return 1 === e.length && s(e[0]) && 0 === e[0][0] && 0 === e[0][1] }(); if (Ve && $e || te(Array, "from", Ge.from), !d(function() { return Array.from([0], void 0) })) { var qe = Array.from;
                te(Array, "from", function(e) { return arguments.length > 1 && void 0 !== arguments[1] ? de.Call(qe, this, arguments) : n(qe, this, e) }) } var Ke = -(Math.pow(2, 32) - 1),
                Ze = function(e, t) { var r = { length: Ke }; return r[t ? (r.length >>> 0) - 1 : 0] = !0, d(function() { return n(e, r, function() { throw new RangeError("should not reach here") }, []), !0 }) }; if (!Ze(Array.prototype.forEach)) { var Qe = Array.prototype.forEach;
                te(Array.prototype, "forEach", function(e) { return de.Call(Qe, this.length >= 0 ? this : [], arguments) }) } if (!Ze(Array.prototype.map)) { var Xe = Array.prototype.map;
                te(Array.prototype, "map", function(e) { return de.Call(Xe, this.length >= 0 ? this : [], arguments) }) } if (!Ze(Array.prototype.filter)) { var et = Array.prototype.filter;
                te(Array.prototype, "filter", function(e) { return de.Call(et, this.length >= 0 ? this : [], arguments) }) } if (!Ze(Array.prototype.some)) { var tt = Array.prototype.some;
                te(Array.prototype, "some", function(e) { return de.Call(tt, this.length >= 0 ? this : [], arguments) }) } if (!Ze(Array.prototype.every)) { var nt = Array.prototype.every;
                te(Array.prototype, "every", function(e) { return de.Call(nt, this.length >= 0 ? this : [], arguments) }) } if (!Ze(Array.prototype.reduce)) { var rt = Array.prototype.reduce;
                te(Array.prototype, "reduce", function(e) { return de.Call(rt, this.length >= 0 ? this : [], arguments) }) } if (!Ze(Array.prototype.reduceRight, !0)) { var at = Array.prototype.reduceRight;
                te(Array.prototype, "reduceRight", function(e) { return de.Call(at, this.length >= 0 ? this : [], arguments) }) } var st = 8 !== Number("0o10"),
                it = 2 !== Number("0b10"),
                ot = f(Ie, function(e) { return 0 === Number(e + 0 + e) }); if (st || it || ot) { var dt = Number,
                    _t = /^0b[01]+$/i,
                    ut = /^0o[0-7]+$/i,
                    lt = _t.test.bind(_t),
                    mt = ut.test.bind(ut),
                    ct = Ce.test.bind(Ce),
                    ht = Ne.test.bind(Ne),
                    ft = function() { var e = function(t) { var n; "string" == typeof(n = arguments.length > 0 ? ee.primitive(t) ? t : function(e) { var t; if ("function" == typeof e.valueOf && (t = e.valueOf(), ee.primitive(t))) return t; if ("function" == typeof e.toString && (t = e.toString(), ee.primitive(t))) return t; throw new TypeError("No default value") }(t) : 0) && (n = de.Call(Fe, n), lt(n) ? n = parseInt(S(n, 2), 2) : mt(n) ? n = parseInt(S(n, 2), 8) : (ct(n) || ht(n)) && (n = NaN)); var r = this,
                                a = d(function() { return dt.prototype.valueOf.call(r), !0 }); return r instanceof e && !a ? new dt(n) : dt(n) }; return e }();
                Ye(dt, ft, {}), y(ft, { NaN: dt.NaN, MAX_VALUE: dt.MAX_VALUE, MIN_VALUE: dt.MIN_VALUE, NEGATIVE_INFINITY: dt.NEGATIVE_INFINITY, POSITIVE_INFINITY: dt.POSITIVE_INFINITY }), Number = ft, Y.redefine(v, "Number", ft) } var Mt = Math.pow(2, 53) - 1;
            y(Number, { MAX_SAFE_INTEGER: Mt, MIN_SAFE_INTEGER: -Mt, EPSILON: 2.220446049250313e-16, parseInt: v.parseInt, parseFloat: v.parseFloat, isFinite: q, isInteger: function(e) { return q(e) && de.ToInteger(e) === e }, isSafeInteger: function(e) { return Number.isInteger(e) && A(e) <= Number.MAX_SAFE_INTEGER }, isNaN: $ }), M(Number, "parseInt", v.parseInt, Number.parseInt !== v.parseInt), 1 === [, 1].find(function() { return !0 }) && te(Array.prototype, "find", Ue.find), 0 !== [, 1].findIndex(function() { return !0 }) && te(Array.prototype, "findIndex", Ue.findIndex); var yt = Function.bind.call(Function.bind, Object.prototype.propertyIsEnumerable),
                pt = function(e, t) { u && yt(e, t) && Object.defineProperty(e, t, { enumerable: !1 }) },
                Lt = function() { for (var e = Number(this), t = arguments.length, n = t - e, r = new Array(n < 0 ? 0 : n), a = e; a < t; ++a) r[a - e] = arguments[a]; return r },
                Yt = function(e) { return function(t, n) { return t[n] = e[n], t } },
                gt = function(e, t) { var n, r = i(Object(t)); return de.IsCallable(Object.getOwnPropertySymbols) && (n = h(Object.getOwnPropertySymbols(Object(t)), yt(t))), c(b(r, n || []), Yt(t), e) },
                kt = { assign: function(e, t) { var n = de.ToObject(e, "Cannot convert undefined or null to object"); return c(de.Call(Lt, 1, arguments), gt, n) }, is: function(e, t) { return de.SameValue(e, t) } }; if (Object.assign && Object.preventExtensions && function() { var e = Object.preventExtensions({ 1: 2 }); try { Object.assign(e, "xy") } catch (t) { return "y" === e[1] } }() && te(Object, "assign", kt.assign), y(Object, kt), u) { var vt = { setPrototypeOf: function(e, t) { var r, a = function(e, t) { return function(e, t) { if (!de.TypeIsObject(e)) throw new TypeError("cannot set prototype on a non-object"); if (null !== t && !de.TypeIsObject(t)) throw new TypeError("can only set prototype to an object or null" + t) }(e, t), n(r, e, t), e }; try { r = e.getOwnPropertyDescriptor(e.prototype, "__proto__").set, n(r, {}, null) } catch (t) { if (e.prototype !== {}.__proto__) return;
                            r = function(e) { this.__proto__ = e }, a.polyfill = a(a({}, null), e.prototype) instanceof e } return a }(Object) };
                y(Object, vt) } if (Object.setPrototypeOf && Object.getPrototypeOf && null !== Object.getPrototypeOf(Object.setPrototypeOf({}, null)) && null === Object.getPrototypeOf(Object.create(null)) && function() { var e = Object.create(null),
                        t = Object.getPrototypeOf,
                        n = Object.setPrototypeOf;
                    Object.getPrototypeOf = function(n) { var r = t(n); return r === e ? null : r }, Object.setPrototypeOf = function(t, r) { var a = null === r ? e : r; return n(t, a) }, Object.setPrototypeOf.polyfill = !1 }(), o(function() { return Object.keys("foo") })) { var Dt = Object.keys;
                te(Object, "keys", function(e) { return Dt(de.ToObject(e)) }), i = Object.keys } if (o(function() { return Object.keys(/a/g) })) { var Tt = Object.keys;
                te(Object, "keys", function(e) { if (ee.regex(e)) { var t = []; for (var n in e) C(e, n) && j(t, n); return t } return Tt(e) }), i = Object.keys } if (Object.getOwnPropertyNames) { var wt = !o(function() { return Object.getOwnPropertyNames("foo") }); if (!wt) { var bt = "object" == typeof window ? Object.getOwnPropertyNames(window) : [],
                        St = Object.getOwnPropertyNames;
                    te(Object, "getOwnPropertyNames", function(e) { var t = de.ToObject(e); if ("[object Window]" === p(t)) try { return St(t) } catch (e) { return b([], bt) }
                        return St(t) }) } } if (Object.getOwnPropertyDescriptor) { var jt = !o(function() { return Object.getOwnPropertyDescriptor("foo", "bar") }); if (!jt) { var Ht = Object.getOwnPropertyDescriptor;
                    te(Object, "getOwnPropertyDescriptor", function(e, t) { return Ht(de.ToObject(e), t) }) } } if (Object.seal) { var Ot = !o(function() { return Object.seal("foo") }); if (!Ot) { var xt = Object.seal;
                    te(Object, "seal", function(e) { return de.TypeIsObject(e) ? xt(e) : e }) } } if (Object.isSealed) { var Pt = !o(function() { return Object.isSealed("foo") }); if (!Pt) { var Et = Object.isSealed;
                    te(Object, "isSealed", function(e) { return !de.TypeIsObject(e) || Et(e) }) } } if (Object.freeze) { var At = !o(function() { return Object.freeze("foo") }); if (!At) { var Wt = Object.freeze;
                    te(Object, "freeze", function(e) { return de.TypeIsObject(e) ? Wt(e) : e }) } } if (Object.isFrozen) { var Ft = !o(function() { return Object.isFrozen("foo") }); if (!Ft) { var It = Object.isFrozen;
                    te(Object, "isFrozen", function(e) { return !de.TypeIsObject(e) || It(e) }) } } if (Object.preventExtensions) { var Ct = !o(function() { return Object.preventExtensions("foo") }); if (!Ct) { var Nt = Object.preventExtensions;
                    te(Object, "preventExtensions", function(e) { return de.TypeIsObject(e) ? Nt(e) : e }) } } if (Object.isExtensible) { var zt = !o(function() { return Object.isExtensible("foo") }); if (!zt) { var Rt = Object.isExtensible;
                    te(Object, "isExtensible", function(e) { return !!de.TypeIsObject(e) && Rt(e) }) } } if (Object.getPrototypeOf) { var Jt = !o(function() { return Object.getPrototypeOf("foo") }); if (!Jt) { var Gt = Object.getPrototypeOf;
                    te(Object, "getPrototypeOf", function(e) { return Gt(de.ToObject(e)) }) } } var Ut = u && function() { var e = Object.getOwnPropertyDescriptor(RegExp.prototype, "flags"); return e && de.IsCallable(e.get) }();
            u && !Ut && Y.getter(RegExp.prototype, "flags", function() { if (!de.TypeIsObject(this)) throw new TypeError("Method called on incompatible type: must be an object."); var e = ""; return this.global && (e += "g"), this.ignoreCase && (e += "i"), this.multiline && (e += "m"), this.unicode && (e += "u"), this.sticky && (e += "y"), e }); var Bt = u && d(function() { return "/a/i" === String(new RegExp(/a/g, "i")) }),
                Vt = ne && u && function() { var e = /./; return e[B.match] = !1, RegExp(e) === e }(),
                $t = d(function() { return "/abc/" === RegExp.prototype.toString.call({ source: "abc" }) }),
                qt = $t && d(function() { return "/a/b" === RegExp.prototype.toString.call({ source: "a", flags: "b" }) }); if (!$t || !qt) { var Kt = RegExp.prototype.toString;
                M(RegExp.prototype, "toString", function() { var e = de.RequireObjectCoercible(this); if (ee.regex(e)) return n(Kt, e); var t = se(e.source),
                        r = se(e.flags); return "/" + t + "/" + r }, !0), Y.preserveToString(RegExp.prototype.toString, Kt) } if (u && (!Bt || Vt)) { var Zt = Object.getOwnPropertyDescriptor(RegExp.prototype, "flags").get,
                    Qt = Object.getOwnPropertyDescriptor(RegExp.prototype, "source") || {},
                    Xt = de.IsCallable(Qt.get) ? Qt.get : function() { return this.source },
                    en = RegExp,
                    tn = function e(t, n) { var r = de.IsRegExp(t),
                            a = this instanceof e; if (!a && r && void 0 === n && t.constructor === e) return t; var s = t,
                            i = n; return ee.regex(t) ? (s = de.Call(Xt, t), i = void 0 === n ? de.Call(Zt, t) : n, new e(s, i)) : (r && (s = t.source, i = void 0 === n ? t.flags : n), new en(t, n)) };
                Ye(en, tn, { $input: !0 }), RegExp = tn, Y.redefine(v, "RegExp", tn) } if (u) { var nn = { input: "$_", lastMatch: "$&", lastParen: "$+", leftContext: "$`", rightContext: "$'" };
                m(i(nn), function(e) { e in RegExp && !(nn[e] in RegExp) && Y.getter(RegExp, nn[e], function() { return RegExp[e] }) }) } ke(RegExp); var rn = 1 / Number.EPSILON,
                an = Math.pow(2, -23),
                sn = Math.pow(2, 127) * (2 - an),
                on = Math.pow(2, -126),
                dn = Math.E,
                _n = Math.LOG2E,
                un = Math.LOG10E,
                ln = Number.prototype.clz;
            delete Number.prototype.clz; var mn = { acosh: function(e) { var t = Number(e); if ($(t) || e < 1) return NaN; if (1 === t) return 0; if (t === 1 / 0) return t; var n = 1 / (t * t); if (t < 2) return Z(t - 1 + I(1 - n) * t); var r = t / 2; return Z(r + I(1 - n) * r - 1) + 1 / _n }, asinh: function(e) { var t = Number(e); if (0 === t || !D(t)) return t; var n = A(t),
                            r = n * n,
                            a = K(t); return n < 1 ? a * Z(n + r / (I(r + 1) + 1)) : a * (Z(n / 2 + I(1 + 1 / r) * n / 2 - 1) + 1 / _n) }, atanh: function(e) { var t = Number(e); if (0 === t) return t; if (-1 === t) return -1 / 0; if (1 === t) return 1 / 0; if ($(t) || t < -1 || t > 1) return NaN; var n = A(t); return K(t) * Z(2 * n / (1 - n)) / 2 }, cbrt: function(e) { var t = Number(e); if (0 === t) return t; var n, r = t < 0; return r && (t = -t), t === 1 / 0 ? n = 1 / 0 : (n = W(F(t) / 3), n = (t / (n * n) + 2 * n) / 3), r ? -n : n }, clz32: function(e) { var t = Number(e),
                            n = de.ToUint32(t); return 0 === n ? 32 : ln ? de.Call(ln, n) : 31 - E(F(n + .5) * _n) }, cosh: function(e) { var t = Number(e); if (0 === t) return 1; if ($(t)) return NaN; if (!D(t)) return 1 / 0; var n = W(A(t) - 1); return (n + 1 / (n * dn * dn)) * (dn / 2) }, expm1: function(e) { var t = Number(e); if (t === -1 / 0) return -1; if (!D(t) || 0 === t) return t; if (A(t) > .5) return W(t) - 1; for (var n = t, r = 0, a = 1; r + n !== r;) r += n, n *= t / (a += 1); return r }, hypot: function(e, t) { for (var n = 0, r = 0, a = 0; a < arguments.length; ++a) { var s = A(Number(arguments[a]));
                            r < s ? (n *= r / s * (r / s), n += 1, r = s) : n += s > 0 ? s / r * (s / r) : s } return r === 1 / 0 ? 1 / 0 : r * I(n) }, log2: function(e) { return F(e) * _n }, log10: function(e) { return F(e) * un }, log1p: Z, sign: K, sinh: function(e) { var t = Number(e); if (!D(t) || 0 === t) return t; var n = A(t); if (n < 1) { var r = Math.expm1(n); return K(t) * r * (1 + 1 / (r + 1)) / 2 } var a = W(n - 1); return K(t) * (a - 1 / (a * dn * dn)) * (dn / 2) }, tanh: function(e) { var t = Number(e); return $(t) || 0 === t ? t : t >= 20 ? 1 : t <= -20 ? -1 : (Math.expm1(t) - Math.expm1(-t)) / (W(t) + W(-t)) }, trunc: function(e) { var t = Number(e); return t < 0 ? -E(-t) : E(t) }, imul: function(e, t) { var n = de.ToUint32(e),
                            r = de.ToUint32(t),
                            a = n >>> 16 & 65535,
                            s = 65535 & n,
                            i = r >>> 16 & 65535,
                            o = 65535 & r; return s * o + (a * o + s * i << 16 >>> 0) | 0 }, fround: function(e) { var t = Number(e); if (0 === t || t === 1 / 0 || t === -1 / 0 || $(t)) return t; var n = K(t),
                            r = A(t); if (r < on) return n * function(e) { return e + rn - rn }(r / on / an) * on * an; var a = (1 + an / Number.EPSILON) * r,
                            s = a - (a - r); return s > sn || $(s) ? n * (1 / 0) : n * s } },
                cn = function(e, t, n) { return A(1 - e / t) / Number.EPSILON < (n || 8) };
            y(Math, mn), M(Math, "sinh", mn.sinh, Math.sinh(710) === 1 / 0), M(Math, "cosh", mn.cosh, Math.cosh(710) === 1 / 0), M(Math, "log1p", mn.log1p, -1e-17 !== Math.log1p(-1e-17)), M(Math, "asinh", mn.asinh, Math.asinh(-1e7) !== -Math.asinh(1e7)), M(Math, "asinh", mn.asinh, Math.asinh(1e300) === 1 / 0), M(Math, "atanh", mn.atanh, 0 === Math.atanh(1e-300)), M(Math, "tanh", mn.tanh, -2e-17 !== Math.tanh(-2e-17)), M(Math, "acosh", mn.acosh, Math.acosh(Number.MAX_VALUE) === 1 / 0), M(Math, "acosh", mn.acosh, !cn(Math.acosh(1 + Number.EPSILON), Math.sqrt(2 * Number.EPSILON))), M(Math, "cbrt", mn.cbrt, !cn(Math.cbrt(1e-300), 1e-100)), M(Math, "sinh", mn.sinh, -2e-17 !== Math.sinh(-2e-17)); var hn = Math.expm1(10);
            M(Math, "expm1", mn.expm1, hn > 22025.465794806718 || hn < 22025.465794806718); var fn = Math.round,
                Mn = 0 === Math.round(.5 - Number.EPSILON / 4) && 1 === Math.round(Number.EPSILON / 3.99 - .5),
                yn = [rn + 1, 2 * rn - 1].every(function(e) { return Math.round(e) === e });
            M(Math, "round", function(e) { var t = E(e),
                    n = -1 === t ? -0 : t + 1; return e - t < .5 ? t : n }, !Mn || !yn), Y.preserveToString(Math.round, fn); var pn = Math.imul; - 5 !== Math.imul(4294967295, 5) && (Math.imul = mn.imul, Y.preserveToString(Math.imul, pn)), 2 !== Math.imul.length && te(Math, "imul", function(e, t) { return de.Call(pn, Math, arguments) }); var Ln = function() { var e = v.setTimeout; if ("function" == typeof e || "object" == typeof e) { de.IsPromise = function(e) { return !!de.TypeIsObject(e) && void 0 !== e._promise }; var t, r = function(e) { if (!de.IsConstructor(e)) throw new TypeError("Bad promise constructor"); var t = this; if (t.resolve = void 0, t.reject = void 0, t.promise = new e(function(e, n) { if (void 0 !== t.resolve || void 0 !== t.reject) throw new TypeError("Bad Promise implementation!");
                                t.resolve = e, t.reject = n }), !de.IsCallable(t.resolve) || !de.IsCallable(t.reject)) throw new TypeError("Bad promise constructor") }; "undefined" != typeof window && de.IsCallable(window.postMessage) && (t = function() { var e = []; return window.addEventListener("message", function(t) { if (t.source === window && "zero-timeout-message" === t.data) { if (t.stopPropagation(), 0 === e.length) return; var n = O(e);
                                    n() } }, !0),
                            function(t) { j(e, t), window.postMessage("zero-timeout-message", "*") } }); var s, i, o = de.IsCallable(v.setImmediate) ? v.setImmediate : "object" == typeof a && a.nextTick ? a.nextTick : function() { var e = v.Promise,
                                t = e && e.resolve && e.resolve(); return t && function(e) { return t.then(e) } }() || (de.IsCallable(t) ? t() : function(t) { e(t, 0) }),
                        d = function(e) { return e },
                        _ = function(e) { throw e },
                        u = {},
                        l = function(e, t, n) { o(function() { m(e, t, n) }) },
                        m = function(e, t, n) { var r, a; if (t === u) return e(n); try { r = e(n), a = t.resolve } catch (e) { r = e, a = t.reject } a(r) },
                        c = function(e, t) { var n = e._promise,
                                r = n.reactionLength; if (r > 0 && (l(n.fulfillReactionHandler0, n.reactionCapability0, t), n.fulfillReactionHandler0 = void 0, n.rejectReactions0 = void 0, n.reactionCapability0 = void 0, r > 1))
                                for (var a = 1, s = 0; a < r; a++, s += 3) l(n[s + 0], n[s + 2], t), e[s + 0] = void 0, e[s + 1] = void 0, e[s + 2] = void 0;
                            n.result = t, n.state = 1, n.reactionLength = 0 },
                        h = function(e, t) { var n = e._promise,
                                r = n.reactionLength; if (r > 0 && (l(n.rejectReactionHandler0, n.reactionCapability0, t), n.fulfillReactionHandler0 = void 0, n.rejectReactions0 = void 0, n.reactionCapability0 = void 0, r > 1))
                                for (var a = 1, s = 0; a < r; a++, s += 3) l(n[s + 1], n[s + 2], t), e[s + 0] = void 0, e[s + 1] = void 0, e[s + 2] = void 0;
                            n.result = t, n.state = 2, n.reactionLength = 0 },
                        f = function(e) { var t = !1; return { resolve: function(n) { var r; if (!t) { if (t = !0, n === e) return h(e, new TypeError("Self resolution")); if (!de.TypeIsObject(n)) return c(e, n); try { r = n.then } catch (t) { return h(e, t) } if (!de.IsCallable(r)) return c(e, n);
                                        o(function() { p(e, n, r) }) } }, reject: function(n) { if (!t) return t = !0, h(e, n) } } },
                        M = function(e, t, r, a) { e === i ? n(e, t, r, a, u) : n(e, t, r, a) },
                        p = function(e, t, n) { var r = f(e),
                                a = r.resolve,
                                s = r.reject; try { M(n, t, a, s) } catch (e) { s(e) } },
                        L = function() { var e = function(t) { if (!(this instanceof e)) throw new TypeError('Constructor Promise requires "new"'); if (this && this._promise) throw new TypeError("Bad construction"); if (!de.IsCallable(t)) throw new TypeError("not a valid resolver"); var n = Te(this, e, s, { _promise: { result: void 0, state: 0, reactionLength: 0, fulfillReactionHandler0: void 0, rejectReactionHandler0: void 0, reactionCapability0: void 0 } }),
                                    r = f(n),
                                    a = r.reject; try { t(r.resolve, a) } catch (e) { a(e) } return n }; return e }();
                    s = L.prototype; var Y = function(e, t, n, r) { var a = !1; return function(s) { if (!a && (a = !0, t[e] = s, 0 == --r.count)) { var i = n.resolve;
                                i(t) } } }; return y(L, { all: function(e) { var t = this; if (!de.TypeIsObject(t)) throw new TypeError("Promise is not object"); var n, a, s = new r(t); try { return n = de.GetIterator(e),
                                    function(e, t, n) { for (var r, a, s = e.iterator, i = [], o = { count: 1 }, d = 0;;) { try { if (!1 === (r = de.IteratorStep(s))) { e.done = !0; break } a = r.value } catch (t) { throw e.done = !0, t } i[d] = void 0; var _ = t.resolve(a),
                                                u = Y(d, i, n, o);
                                            o.count += 1, M(_.then, _, u, n.reject), d += 1 } if (0 == --o.count) { var l = n.resolve;
                                            l(i) } return n.promise }(a = { iterator: n, done: !1 }, t, s) } catch (e) { var i = e; if (a && !a.done) try { de.IteratorClose(n, !0) } catch (e) { i = e }
                                var o = s.reject; return o(i), s.promise } }, race: function(e) { var t = this; if (!de.TypeIsObject(t)) throw new TypeError("Promise is not object"); var n, a, s = new r(t); try { return n = de.GetIterator(e),
                                    function(e, t, n) { for (var r, a, s, i = e.iterator;;) { try { if (!1 === (r = de.IteratorStep(i))) { e.done = !0; break } a = r.value } catch (t) { throw e.done = !0, t } s = t.resolve(a), M(s.then, s, n.resolve, n.reject) } return n.promise }(a = { iterator: n, done: !1 }, t, s) } catch (e) { var i = e; if (a && !a.done) try { de.IteratorClose(n, !0) } catch (e) { i = e }
                                var o = s.reject; return o(i), s.promise } }, reject: function(e) { if (!de.TypeIsObject(this)) throw new TypeError("Bad promise constructor"); var t = new r(this),
                                n = t.reject; return n(e), t.promise }, resolve: function(e) { var t = this; if (!de.TypeIsObject(t)) throw new TypeError("Bad promise constructor"); if (de.IsPromise(e)) { var n = e.constructor; if (n === t) return e } var a = new r(t),
                                s = a.resolve; return s(e), a.promise } }), y(s, { catch: function(e) { return this.then(null, e) }, then: function(e, t) { if (!de.IsPromise(this)) throw new TypeError("not a promise"); var n, a = de.SpeciesConstructor(this, L),
                                s = arguments.length > 2 && arguments[2] === u;
                            n = s && a === L ? u : new r(a); var i, o = de.IsCallable(e) ? e : d,
                                m = de.IsCallable(t) ? t : _,
                                c = this._promise; if (0 === c.state) { if (0 === c.reactionLength) c.fulfillReactionHandler0 = o, c.rejectReactionHandler0 = m, c.reactionCapability0 = n;
                                else { var h = 3 * (c.reactionLength - 1);
                                    c[h + 0] = o, c[h + 1] = m, c[h + 2] = n } c.reactionLength += 1 } else if (1 === c.state) i = c.result, l(o, n, i);
                            else { if (2 !== c.state) throw new TypeError("unexpected Promise state");
                                i = c.result, l(m, n, i) } return n.promise } }), u = new r(L), i = s.then, L } }(); if (v.Promise && (delete v.Promise.accept, delete v.Promise.defer, delete v.Promise.prototype.chain), "function" == typeof Ln) { y(v, { Promise: Ln }); var Yn = k(v.Promise, function(e) { return e.resolve(42).then(function() {}) instanceof e }),
                    gn = !o(function() { return v.Promise.reject(42).then(null, 5).then(null, N) }),
                    kn = o(function() { return v.Promise.call(3, N) }),
                    vn = function(e) { var t = e.resolve(5);
                        t.constructor = {}; var n = e.resolve(t); try { n.then(null, N).then(null, N) } catch (e) { return !0 } return t === n }(v.Promise),
                    Dn = u && function() { var e = 0,
                            t = Object.defineProperty({}, "then", { get: function() { e += 1 } }); return Promise.resolve(t), 1 === e }(),
                    Tn = function e(t) { var n = new Promise(t);
                        t(3, function() {}), this.then = n.then, this.constructor = e };
                Tn.prototype = Promise.prototype, Tn.all = Promise.all; var wn = d(function() { return !!Tn.all([1, 2]) }); if (Yn && gn && kn && !vn && Dn && !wn || (Promise = Ln, te(v, "Promise", Ln)), 1 !== Promise.all.length) { var bn = Promise.all;
                    te(Promise, "all", function(e) { return de.Call(bn, this, arguments) }) } if (1 !== Promise.race.length) { var Sn = Promise.race;
                    te(Promise, "race", function(e) { return de.Call(Sn, this, arguments) }) } if (1 !== Promise.resolve.length) { var jn = Promise.resolve;
                    te(Promise, "resolve", function(e) { return de.Call(jn, this, arguments) }) } if (1 !== Promise.reject.length) { var Hn = Promise.reject;
                    te(Promise, "reject", function(e) { return de.Call(Hn, this, arguments) }) } pt(Promise, "all"), pt(Promise, "race"), pt(Promise, "resolve"), pt(Promise, "reject"), ke(Promise) } var On = function(e) { var t = i(c(e, function(e, t) { return e[t] = !0, e }, {})); return e.join(":") === t.join(":") },
                xn = On(["z", "a", "bb"]),
                Pn = On(["z", 1, "a", "3", 2]); if (u) { var En = function(e, t) { return t || xn ? oe(e) ? "^" + de.ToString(e) : "string" == typeof e ? "$" + e : "number" == typeof e ? Pn ? e : "n" + e : "boolean" == typeof e ? "b" + e : null : null },
                    An = function() { return Object.create ? Object.create(null) : {} },
                    Wn = function(e, t, r) { if (s(r) || ee.string(r)) m(r, function(e) { if (!de.TypeIsObject(e)) throw new TypeError("Iterator value " + e + " is not an entry object");
                            t.set(e[0], e[1]) });
                        else if (r instanceof e) n(e.prototype.forEach, r, function(e, n) { t.set(n, e) });
                        else { var a, i; if (!oe(r)) { if (i = t.set, !de.IsCallable(i)) throw new TypeError("bad map");
                                a = de.GetIterator(r) } if (void 0 !== a)
                                for (;;) { var o = de.IteratorStep(a); if (!1 === o) break; var d = o.value; try { if (!de.TypeIsObject(d)) throw new TypeError("Iterator value " + d + " is not an entry object");
                                        n(i, t, d[0], d[1]) } catch (e) { throw de.IteratorClose(a, !0), e } } } },
                    Fn = function(e, t, r) { if (s(r) || ee.string(r)) m(r, function(e) { t.add(e) });
                        else if (r instanceof e) n(e.prototype.forEach, r, function(e) { t.add(e) });
                        else { var a, i; if (!oe(r)) { if (i = t.add, !de.IsCallable(i)) throw new TypeError("bad set");
                                a = de.GetIterator(r) } if (void 0 !== a)
                                for (;;) { var o = de.IteratorStep(a); if (!1 === o) break; var d = o.value; try { n(i, t, d) } catch (e) { throw de.IteratorClose(a, !0), e } } } },
                    In = { Map: function() { var e = {},
                                t = function(e, t) { this.key = e, this.value = t, this.next = null, this.prev = null };
                            t.prototype.isRemoved = function() { return this.key === e }; var r, a = function(e, t) { if (!de.TypeIsObject(e) || ! function(e) { return !!e._es6map }(e)) throw new TypeError("Method Map.prototype." + t + " called on incompatible receiver " + de.ToString(e)) },
                                s = function(e, t) { a(e, "[[MapIterator]]"), this.head = e._head, this.i = this.head, this.kind = t };
                            ve(s.prototype = { isMapIterator: !0, next: function() { if (!this.isMapIterator) throw new TypeError("Not a MapIterator"); var e, t = this.i,
                                        n = this.kind,
                                        r = this.head; if (void 0 === this.i) return Re(); for (; t.isRemoved() && t !== r;) t = t.prev; for (; t.next !== r;)
                                        if (!(t = t.next).isRemoved()) return e = "key" === n ? t.key : "value" === n ? t.value : [t.key, t.value], this.i = t, Re(e); return this.i = void 0, Re() } }); var i = function e() { if (!(this instanceof e)) throw new TypeError('Constructor Map requires "new"'); if (this && this._es6map) throw new TypeError("Bad construction"); var n = Te(this, e, r, { _es6map: !0, _head: null, _map: z ? new z : null, _size: 0, _storage: An() }),
                                    a = new t(null, null); return a.next = a.prev = a, n._head = a, arguments.length > 0 && Wn(e, n, arguments[0]), n }; return Y.getter(r = i.prototype, "size", function() { if (void 0 === this._size) throw new TypeError("size method called on incompatible Map"); return this._size }), y(r, { get: function(e) { var t;
                                    a(this, "get"); var n = En(e, !0); if (null !== n) return (t = this._storage[n]) ? t.value : void 0; if (this._map) return (t = J.call(this._map, e)) ? t.value : void 0; for (var r = this._head, s = r;
                                        (s = s.next) !== r;)
                                        if (de.SameValueZero(s.key, e)) return s.value }, has: function(e) { a(this, "has"); var t = En(e, !0); if (null !== t) return void 0 !== this._storage[t]; if (this._map) return G.call(this._map, e); for (var n = this._head, r = n;
                                        (r = r.next) !== n;)
                                        if (de.SameValueZero(r.key, e)) return !0; return !1 }, set: function(e, n) { a(this, "set"); var r, s = this._head,
                                        i = s,
                                        o = En(e, !0); if (null !== o) { if (void 0 !== this._storage[o]) return this._storage[o].value = n, this;
                                        r = this._storage[o] = new t(e, n), i = s.prev } else this._map && (G.call(this._map, e) ? J.call(this._map, e).value = n : (r = new t(e, n), U.call(this._map, e, r), i = s.prev)); for (;
                                        (i = i.next) !== s;)
                                        if (de.SameValueZero(i.key, e)) return i.value = n, this; return r = r || new t(e, n), de.SameValue(-0, e) && (r.key = 0), r.next = this._head, r.prev = this._head.prev, r.prev.next = r, r.next.prev = r, this._size += 1, this }, delete: function(t) { a(this, "delete"); var n = this._head,
                                        r = n,
                                        s = En(t, !0); if (null !== s) { if (void 0 === this._storage[s]) return !1;
                                        r = this._storage[s].prev, delete this._storage[s] } else if (this._map) { if (!G.call(this._map, t)) return !1;
                                        r = J.call(this._map, t).prev, R.call(this._map, t) } for (;
                                        (r = r.next) !== n;)
                                        if (de.SameValueZero(r.key, t)) return r.key = e, r.value = e, r.prev.next = r.next, r.next.prev = r.prev, this._size -= 1, !0; return !1 }, clear: function() { a(this, "clear"), this._map = z ? new z : null, this._size = 0, this._storage = An(); for (var t = this._head, n = t, r = n.next;
                                        (n = r) !== t;) n.key = e, n.value = e, r = n.next, n.next = n.prev = t;
                                    t.next = t.prev = t }, keys: function() { return a(this, "keys"), new s(this, "key") }, values: function() { return a(this, "values"), new s(this, "value") }, entries: function() { return a(this, "entries"), new s(this, "key+value") }, forEach: function(e) { a(this, "forEach"); for (var t = arguments.length > 1 ? arguments[1] : null, r = this.entries(), s = r.next(); !s.done; s = r.next()) t ? n(e, t, s.value[1], s.value[0], this) : e(s.value[1], s.value[0], this) } }), ve(r, r.entries), i }(), Set: function() { var e, t = function(e, t) { if (!de.TypeIsObject(e) || ! function(e) { return e._es6set && void 0 !== e._storage }(e)) throw new TypeError("Set.prototype." + t + " called on incompatible receiver " + de.ToString(e)) },
                                r = function t() { if (!(this instanceof t)) throw new TypeError('Constructor Set requires "new"'); if (this && this._es6set) throw new TypeError("Bad construction"); var n = Te(this, t, e, { _es6set: !0, "[[SetData]]": null, _storage: An() }); if (!n._es6set) throw new TypeError("bad set"); return arguments.length > 0 && Fn(t, n, arguments[0]), n };
                            e = r.prototype; var a = function(e) { if (!e["[[SetData]]"]) { var t = new In.Map;
                                    e["[[SetData]]"] = t, m(i(e._storage), function(e) { var n = function(e) { var t = e; if ("^null" === t) return null; if ("^undefined" !== t) { var n = t.charAt(0); return "$" === n ? S(t, 1) : "n" === n ? +S(t, 1) : "b" === n ? "btrue" === t : +t } }(e);
                                        t.set(n, n) }), e["[[SetData]]"] = t } e._storage = null };
                            Y.getter(r.prototype, "size", function() { return t(this, "size"), this._storage ? i(this._storage).length : (a(this), this["[[SetData]]"].size) }), y(r.prototype, { has: function(e) { var n; return t(this, "has"), this._storage && null !== (n = En(e)) ? !!this._storage[n] : (a(this), this["[[SetData]]"].has(e)) }, add: function(e) { var n; return t(this, "add"), this._storage && null !== (n = En(e)) ? (this._storage[n] = !0, this) : (a(this), this["[[SetData]]"].set(e, e), this) }, delete: function(e) { var n; if (t(this, "delete"), this._storage && null !== (n = En(e))) { var r = C(this._storage, n); return delete this._storage[n] && r } return a(this), this["[[SetData]]"].delete(e) }, clear: function() { t(this, "clear"), this._storage && (this._storage = An()), this["[[SetData]]"] && this["[[SetData]]"].clear() }, values: function() { return t(this, "values"), a(this), new s(this["[[SetData]]"].values()) }, entries: function() { return t(this, "entries"), a(this), new s(this["[[SetData]]"].entries()) }, forEach: function(e) { t(this, "forEach"); var r = arguments.length > 1 ? arguments[1] : null,
                                        s = this;
                                    a(s), this["[[SetData]]"].forEach(function(t, a) { r ? n(e, r, a, a, s) : e(a, a, s) }) } }), M(r.prototype, "keys", r.prototype.values, !0), ve(r.prototype, r.prototype.values); var s = function(e) { this.it = e }; return s.prototype = { isSetIterator: !0, next: function() { if (!this.isSetIterator) throw new TypeError("Not a SetIterator"); return this.it.next() } }, ve(s.prototype), r }() },
                    Cn = v.Set && !Set.prototype.delete && Set.prototype.remove && Set.prototype.items && Set.prototype.map && Array.isArray((new Set).keys); if (Cn && (v.Set = In.Set), v.Map || v.Set) { var Nn = d(function() { return 2 === new Map([
                            [1, 2]
                        ]).get(1) });
                    Nn || (v.Map = function e() { if (!(this instanceof e)) throw new TypeError('Constructor Map requires "new"'); var t = new z; return arguments.length > 0 && Wn(e, t, arguments[0]), delete t.constructor, Object.setPrototypeOf(t, v.Map.prototype), t }, v.Map.prototype = g(z.prototype), M(v.Map.prototype, "constructor", v.Map, !0), Y.preserveToString(v.Map, z)); var zn = new Map,
                        Rn = function() { var e = new Map([
                                [1, 0],
                                [2, 0],
                                [3, 0],
                                [4, 0]
                            ]); return e.set(-0, e), e.get(0) === e && e.get(-0) === e && e.has(0) && e.has(-0) }(),
                        Jn = zn.set(1, 2) === zn;
                    Rn && Jn || te(Map.prototype, "set", function(e, t) { return n(U, this, 0 === e ? 0 : e, t), this }), Rn || (y(Map.prototype, { get: function(e) { return n(J, this, 0 === e ? 0 : e) }, has: function(e) { return n(G, this, 0 === e ? 0 : e) } }, !0), Y.preserveToString(Map.prototype.get, J), Y.preserveToString(Map.prototype.has, G)); var Gn = new Set,
                        Un = Set.prototype.delete && Set.prototype.add && Set.prototype.has && function(e) { return e.delete(0), e.add(-0), !e.has(0) }(Gn),
                        Bn = Gn.add(1) === Gn; if (!Un || !Bn) { var Vn = Set.prototype.add;
                        Set.prototype.add = function(e) { return n(Vn, this, 0 === e ? 0 : e), this }, Y.preserveToString(Set.prototype.add, Vn) } if (!Un) { var $n = Set.prototype.has;
                        Set.prototype.has = function(e) { return n($n, this, 0 === e ? 0 : e) }, Y.preserveToString(Set.prototype.has, $n); var qn = Set.prototype.delete;
                        Set.prototype.delete = function(e) { return n(qn, this, 0 === e ? 0 : e) }, Y.preserveToString(Set.prototype.delete, qn) } var Kn = k(v.Map, function(e) { var t = new e([]); return t.set(42, 42), t instanceof e }),
                        Zn = Object.setPrototypeOf && !Kn,
                        Qn = function() { try { return !(v.Map() instanceof v.Map) } catch (e) { return e instanceof TypeError } }();
                    0 === v.Map.length && !Zn && Qn || (v.Map = function e() { if (!(this instanceof e)) throw new TypeError('Constructor Map requires "new"'); var t = new z; return arguments.length > 0 && Wn(e, t, arguments[0]), delete t.constructor, Object.setPrototypeOf(t, e.prototype), t }, v.Map.prototype = z.prototype, M(v.Map.prototype, "constructor", v.Map, !0), Y.preserveToString(v.Map, z)); var Xn = k(v.Set, function(e) { var t = new e([]); return t.add(42, 42), t instanceof e }),
                        er = Object.setPrototypeOf && !Xn,
                        tr = function() { try { return !(v.Set() instanceof v.Set) } catch (e) { return e instanceof TypeError } }(); if (0 !== v.Set.length || er || !tr) { var nr = v.Set;
                        v.Set = function e() { if (!(this instanceof e)) throw new TypeError('Constructor Set requires "new"'); var t = new nr; return arguments.length > 0 && Fn(e, t, arguments[0]), delete t.constructor, Object.setPrototypeOf(t, e.prototype), t }, v.Set.prototype = nr.prototype, M(v.Set.prototype, "constructor", v.Set, !0), Y.preserveToString(v.Set, nr) } var rr = new v.Map,
                        ar = !d(function() { return rr.keys().next().done }); if (("function" != typeof v.Map.prototype.clear || 0 !== (new v.Set).size || 0 !== rr.size || "function" != typeof v.Map.prototype.keys || "function" != typeof v.Set.prototype.keys || "function" != typeof v.Map.prototype.forEach || "function" != typeof v.Set.prototype.forEach || _(v.Map) || _(v.Set) || "function" != typeof rr.keys().next || ar || !Kn) && y(v, { Map: In.Map, Set: In.Set }, !0), v.Set.prototype.keys !== v.Set.prototype.values && M(v.Set.prototype, "keys", v.Set.prototype.values, !0), ve(Object.getPrototypeOf((new v.Map).keys())), ve(Object.getPrototypeOf((new v.Set).keys())), l && "has" !== v.Set.prototype.has.name) { var sr = v.Set.prototype.has;
                        te(v.Set.prototype, "has", function(e) { return n(sr, this, e) }) } } y(v, In), ke(v.Map), ke(v.Set) } var ir = function(e) { if (!de.TypeIsObject(e)) throw new TypeError("target must be an object") },
                or = { apply: function() { return de.Call(de.Call, null, arguments) }, construct: function(e, t) { if (!de.IsConstructor(e)) throw new TypeError("First argument must be a constructor."); var n = arguments.length > 2 ? arguments[2] : e; if (!de.IsConstructor(n)) throw new TypeError("new.target must be a constructor."); return de.Construct(e, t, n, "internal") }, deleteProperty: function(e, t) { if (ir(e), u) { var n = Object.getOwnPropertyDescriptor(e, t); if (n && !n.configurable) return !1 } return delete e[t] }, has: function(e, t) { return ir(e), t in e } };
            Object.getOwnPropertyNames && Object.assign(or, { ownKeys: function(e) { ir(e); var t = Object.getOwnPropertyNames(e); return de.IsCallable(Object.getOwnPropertySymbols) && H(t, Object.getOwnPropertySymbols(e)), t } }); var dr = function(e) { return !o(e) }; if (Object.preventExtensions && Object.assign(or, { isExtensible: function(e) { return ir(e), Object.isExtensible(e) }, preventExtensions: function(e) { return ir(e), dr(function() { return Object.preventExtensions(e) }) } }), u) { var _r = function(e, t, n) { var r = Object.getOwnPropertyDescriptor(e, t); if (!r) { var a = Object.getPrototypeOf(e); if (null === a) return; return _r(a, t, n) } return "value" in r ? r.value : r.get ? de.Call(r.get, n) : void 0 },
                    ur = function(e, t, r, a) { var s = Object.getOwnPropertyDescriptor(e, t); if (!s) { var i = Object.getPrototypeOf(e); if (null !== i) return ur(i, t, r, a);
                            s = { value: void 0, writable: !0, enumerable: !0, configurable: !0 } } if ("value" in s) { if (!s.writable) return !1; if (!de.TypeIsObject(a)) return !1; var o = Object.getOwnPropertyDescriptor(a, t); return o ? ae.defineProperty(a, t, { value: r }) : ae.defineProperty(a, t, { value: r, writable: !0, enumerable: !0, configurable: !0 }) } return !!s.set && (n(s.set, a, r), !0) };
                Object.assign(or, { defineProperty: function(e, t, n) { return ir(e), dr(function() { return Object.defineProperty(e, t, n) }) }, getOwnPropertyDescriptor: function(e, t) { return ir(e), Object.getOwnPropertyDescriptor(e, t) }, get: function(e, t) { ir(e); var n = arguments.length > 2 ? arguments[2] : e; return _r(e, t, n) }, set: function(e, t, n) { ir(e); var r = arguments.length > 3 ? arguments[3] : e; return ur(e, t, n, r) } }) } if (Object.getPrototypeOf) { var lr = Object.getPrototypeOf;
                or.getPrototypeOf = function(e) { return ir(e), lr(e) } } Object.setPrototypeOf && or.getPrototypeOf && Object.assign(or, { setPrototypeOf: function(e, t) { if (ir(e), null !== t && !de.TypeIsObject(t)) throw new TypeError("proto must be an object or null"); return t === ae.getPrototypeOf(e) || !(ae.isExtensible && !ae.isExtensible(e)) && ! function(e, t) { for (var n = t; n;) { if (e === n) return !0;
                            n = or.getPrototypeOf(n) } return !1 }(e, t) && (Object.setPrototypeOf(e, t), !0) } }), Object.keys(or).forEach(function(e) {! function(e, t) { if (de.IsCallable(v.Reflect[e])) { var n = d(function() { return v.Reflect[e](1), v.Reflect[e](NaN), v.Reflect[e](!0), !0 });
                        n && te(v.Reflect, e, t) } else M(v.Reflect, e, t) }(e, or[e]) }); var mr = v.Reflect.getPrototypeOf; if (l && mr && "getPrototypeOf" !== mr.name && te(v.Reflect, "getPrototypeOf", function(e) { return n(mr, v.Reflect, e) }), v.Reflect.setPrototypeOf && d(function() { return v.Reflect.setPrototypeOf(1, {}), !0 }) && te(v.Reflect, "setPrototypeOf", or.setPrototypeOf), v.Reflect.defineProperty && (d(function() { var e = !v.Reflect.defineProperty(1, "test", { value: 1 }),
                        t = "function" != typeof Object.preventExtensions || !v.Reflect.defineProperty(Object.preventExtensions({}), "test", {}); return e && t }) || te(v.Reflect, "defineProperty", or.defineProperty)), v.Reflect.construct && (d(function() { var e = function() {}; return v.Reflect.construct(function() {}, [], e) instanceof e }) || te(v.Reflect, "construct", or.construct)), "Invalid Date" !== String(new Date(NaN))) { var cr = Date.prototype.toString;
                te(Date.prototype, "toString", function() { var e = +this; return e != e ? "Invalid Date" : de.Call(cr, this) }) } var hr = { anchor: function(e) { return de.CreateHTML(this, "a", "name", e) }, big: function() { return de.CreateHTML(this, "big", "", "") }, blink: function() { return de.CreateHTML(this, "blink", "", "") }, bold: function() { return de.CreateHTML(this, "b", "", "") }, fixed: function() { return de.CreateHTML(this, "tt", "", "") }, fontcolor: function(e) { return de.CreateHTML(this, "font", "color", e) }, fontsize: function(e) { return de.CreateHTML(this, "font", "size", e) }, italics: function() { return de.CreateHTML(this, "i", "", "") }, link: function(e) { return de.CreateHTML(this, "a", "href", e) }, small: function() { return de.CreateHTML(this, "small", "", "") }, strike: function() { return de.CreateHTML(this, "strike", "", "") }, sub: function() { return de.CreateHTML(this, "sub", "", "") }, sup: function() { return de.CreateHTML(this, "sup", "", "") } };
            m(Object.keys(hr), function(e) { var t = String.prototype[e],
                    r = !1; if (de.IsCallable(t)) { var a = n(t, "", ' " '),
                        s = b([], a.match(/"/g)).length;
                    r = a !== a.toLowerCase() || s > 2 } else r = !0;
                r && te(String.prototype, e, hr[e]) }); var fr = function() { if (!ne) return !1; var e = "object" == typeof JSON && "function" == typeof JSON.stringify ? JSON.stringify : null; if (!e) return !1; if (void 0 !== e(B())) return !0; if ("[null]" !== e([B()])) return !0; var t = { a: B() }; return t[B()] = !0, "{}" !== e(t) }(),
                Mr = d(function() { return !ne || "{}" === JSON.stringify(Object(B())) && "[{}]" === JSON.stringify([Object(B())]) }); if (fr || !Mr) { var yr = JSON.stringify;
                te(JSON, "stringify", function(e) { if ("symbol" != typeof e) { var t;
                        arguments.length > 1 && (t = arguments[1]); var r = [e]; if (s(t)) r.push(t);
                        else { var a = de.IsCallable(t) ? t : null;
                            r.push(function(e, t) { var r = a ? n(a, this, e, t) : t; if ("symbol" != typeof r) return ee.symbol(r) ? Yt({})(r) : r }) } return arguments.length > 2 && r.push(arguments[2]), yr.apply(this, r) } }) } return v }) ? s.call(t, n, t, e) : s) || (e.exports = i) }).call(this, n(136), n(137)) }, function(e, t) { var n;
    n = function() { return this }(); try { n = n || Function("return this")() || (0, eval)("this") } catch (e) { "object" == typeof window && (n = window) } e.exports = n }, function(e, t) { var n, r, a = e.exports = {};

    function s() { throw new Error("setTimeout has not been defined") }

    function i() { throw new Error("clearTimeout has not been defined") }

    function o(e) { if (n === setTimeout) return setTimeout(e, 0); if ((n === s || !n) && setTimeout) return n = setTimeout, setTimeout(e, 0); try { return n(e, 0) } catch (t) { try { return n.call(null, e, 0) } catch (t) { return n.call(this, e, 0) } } }! function() { try { n = "function" == typeof setTimeout ? setTimeout : s } catch (e) { n = s } try { r = "function" == typeof clearTimeout ? clearTimeout : i } catch (e) { r = i } }(); var d, _ = [],
        u = !1,
        l = -1;

    function m() { u && d && (u = !1, d.length ? _ = d.concat(_) : l = -1, _.length && c()) }

    function c() { if (!u) { var e = o(m);
            u = !0; for (var t = _.length; t;) { for (d = _, _ = []; ++l < t;) d && d[l].run();
                l = -1, t = _.length } d = null, u = !1,
                function(e) { if (r === clearTimeout) return clearTimeout(e); if ((r === i || !r) && clearTimeout) return r = clearTimeout, clearTimeout(e); try { r(e) } catch (t) { try { return r.call(null, e) } catch (t) { return r.call(this, e) } } }(e) } }

    function h(e, t) { this.fun = e, this.array = t }

    function f() {} a.nextTick = function(e) { var t = new Array(arguments.length - 1); if (arguments.length > 1)
            for (var n = 1; n < arguments.length; n++) t[n - 1] = arguments[n];
        _.push(new h(e, t)), 1 !== _.length || u || o(c) }, h.prototype.run = function() { this.fun.apply(null, this.array) }, a.title = "browser", a.browser = !0, a.env = {}, a.argv = [], a.version = "", a.versions = {}, a.on = f, a.addListener = f, a.once = f, a.off = f, a.removeListener = f, a.removeAllListeners = f, a.emit = f, a.prependListener = f, a.prependOnceListener = f, a.listeners = function(e) { return [] }, a.binding = function(e) { throw new Error("process.binding is not supported") }, a.cwd = function() { return "/" }, a.chdir = function(e) { throw new Error("process.chdir is not supported") }, a.umask = function() { return 0 } }, function(e, t) {! function(e) { "use strict"; if (!e.fetch) { var t = { searchParams: "URLSearchParams" in e, iterable: "Symbol" in e && "iterator" in Symbol, blob: "FileReader" in e && "Blob" in e && function() { try { return new Blob, !0 } catch (e) { return !1 } }(), formData: "FormData" in e, arrayBuffer: "ArrayBuffer" in e }; if (t.arrayBuffer) var n = ["[object Int8Array]", "[object Uint8Array]", "[object Uint8ClampedArray]", "[object Int16Array]", "[object Uint16Array]", "[object Int32Array]", "[object Uint32Array]", "[object Float32Array]", "[object Float64Array]"],
                r = function(e) { return e && DataView.prototype.isPrototypeOf(e) },
                a = ArrayBuffer.isView || function(e) { return e && n.indexOf(Object.prototype.toString.call(e)) > -1 };
            u.prototype.append = function(e, t) { e = o(e), t = d(t); var n = this.map[e];
                this.map[e] = n ? n + "," + t : t }, u.prototype.delete = function(e) { delete this.map[o(e)] }, u.prototype.get = function(e) { return e = o(e), this.has(e) ? this.map[e] : null }, u.prototype.has = function(e) { return this.map.hasOwnProperty(o(e)) }, u.prototype.set = function(e, t) { this.map[o(e)] = d(t) }, u.prototype.forEach = function(e, t) { for (var n in this.map) this.map.hasOwnProperty(n) && e.call(t, this.map[n], n, this) }, u.prototype.keys = function() { var e = []; return this.forEach(function(t, n) { e.push(n) }), _(e) }, u.prototype.values = function() { var e = []; return this.forEach(function(t) { e.push(t) }), _(e) }, u.prototype.entries = function() { var e = []; return this.forEach(function(t, n) { e.push([n, t]) }), _(e) }, t.iterable && (u.prototype[Symbol.iterator] = u.prototype.entries); var s = ["DELETE", "GET", "HEAD", "OPTIONS", "POST", "PUT"];
            M.prototype.clone = function() { return new M(this, { body: this._bodyInit }) }, f.call(M.prototype), f.call(p.prototype), p.prototype.clone = function() { return new p(this._bodyInit, { status: this.status, statusText: this.statusText, headers: new u(this.headers), url: this.url }) }, p.error = function() { var e = new p(null, { status: 0, statusText: "" }); return e.type = "error", e }; var i = [301, 302, 303, 307, 308];
            p.redirect = function(e, t) { if (-1 === i.indexOf(t)) throw new RangeError("Invalid status code"); return new p(null, { status: t, headers: { location: e } }) }, e.Headers = u, e.Request = M, e.Response = p, e.fetch = function(e, n) { return new Promise(function(r, a) { var s = new M(e, n),
                        i = new XMLHttpRequest;
                    i.onload = function() { var e = { status: i.status, statusText: i.statusText, headers: function(e) { var t = new u; return e.replace(/\r?\n[\t ]+/g, " ").split(/\r?\n/).forEach(function(e) { var n = e.split(":"),
                                        r = n.shift().trim(); if (r) { var a = n.join(":").trim();
                                        t.append(r, a) } }), t }(i.getAllResponseHeaders() || "") };
                        e.url = "responseURL" in i ? i.responseURL : e.headers.get("X-Request-URL"); var t = "response" in i ? i.response : i.responseText;
                        r(new p(t, e)) }, i.onerror = function() { a(new TypeError("Network request failed")) }, i.ontimeout = function() { a(new TypeError("Network request failed")) }, i.open(s.method, s.url, !0), "include" === s.credentials ? i.withCredentials = !0 : "omit" === s.credentials && (i.withCredentials = !1), "responseType" in i && t.blob && (i.responseType = "blob"), s.headers.forEach(function(e, t) { i.setRequestHeader(t, e) }), i.send(void 0 === s._bodyInit ? null : s._bodyInit) }) }, e.fetch.polyfill = !0 }

        function o(e) { if ("string" != typeof e && (e = String(e)), /[^a-z0-9\-#$%&'*+.\^_`|~]/i.test(e)) throw new TypeError("Invalid character in header field name"); return e.toLowerCase() }

        function d(e) { return "string" != typeof e && (e = String(e)), e }

        function _(e) { var n = { next: function() { var t = e.shift(); return { done: void 0 === t, value: t } } }; return t.iterable && (n[Symbol.iterator] = function() { return n }), n }

        function u(e) { this.map = {}, e instanceof u ? e.forEach(function(e, t) { this.append(t, e) }, this) : Array.isArray(e) ? e.forEach(function(e) { this.append(e[0], e[1]) }, this) : e && Object.getOwnPropertyNames(e).forEach(function(t) { this.append(t, e[t]) }, this) }

        function l(e) { if (e.bodyUsed) return Promise.reject(new TypeError("Already read"));
            e.bodyUsed = !0 }

        function m(e) { return new Promise(function(t, n) { e.onload = function() { t(e.result) }, e.onerror = function() { n(e.error) } }) }

        function c(e) { var t = new FileReader,
                n = m(t); return t.readAsArrayBuffer(e), n }

        function h(e) { if (e.slice) return e.slice(0); var t = new Uint8Array(e.byteLength); return t.set(new Uint8Array(e)), t.buffer }

        function f() { return this.bodyUsed = !1, this._initBody = function(e) { if (this._bodyInit = e, e)
                    if ("string" == typeof e) this._bodyText = e;
                    else if (t.blob && Blob.prototype.isPrototypeOf(e)) this._bodyBlob = e;
                else if (t.formData && FormData.prototype.isPrototypeOf(e)) this._bodyFormData = e;
                else if (t.searchParams && URLSearchParams.prototype.isPrototypeOf(e)) this._bodyText = e.toString();
                else if (t.arrayBuffer && t.blob && r(e)) this._bodyArrayBuffer = h(e.buffer), this._bodyInit = new Blob([this._bodyArrayBuffer]);
                else { if (!t.arrayBuffer || !ArrayBuffer.prototype.isPrototypeOf(e) && !a(e)) throw new Error("unsupported BodyInit type");
                    this._bodyArrayBuffer = h(e) } else this._bodyText = "";
                this.headers.get("content-type") || ("string" == typeof e ? this.headers.set("content-type", "text/plain;charset=UTF-8") : this._bodyBlob && this._bodyBlob.type ? this.headers.set("content-type", this._bodyBlob.type) : t.searchParams && URLSearchParams.prototype.isPrototypeOf(e) && this.headers.set("content-type", "application/x-www-form-urlencoded;charset=UTF-8")) }, t.blob && (this.blob = function() { var e = l(this); if (e) return e; if (this._bodyBlob) return Promise.resolve(this._bodyBlob); if (this._bodyArrayBuffer) return Promise.resolve(new Blob([this._bodyArrayBuffer])); if (this._bodyFormData) throw new Error("could not read FormData body as blob"); return Promise.resolve(new Blob([this._bodyText])) }, this.arrayBuffer = function() { return this._bodyArrayBuffer ? l(this) || Promise.resolve(this._bodyArrayBuffer) : this.blob().then(c) }), this.text = function() { var e = l(this); if (e) return e; if (this._bodyBlob) return function(e) { var t = new FileReader,
                        n = m(t); return t.readAsText(e), n }(this._bodyBlob); if (this._bodyArrayBuffer) return Promise.resolve(function(e) { for (var t = new Uint8Array(e), n = new Array(t.length), r = 0; r < t.length; r++) n[r] = String.fromCharCode(t[r]); return n.join("") }(this._bodyArrayBuffer)); if (this._bodyFormData) throw new Error("could not read FormData body as text"); return Promise.resolve(this._bodyText) }, t.formData && (this.formData = function() { return this.text().then(y) }), this.json = function() { return this.text().then(JSON.parse) }, this }

        function M(e, t) { var n = (t = t || {}).body; if (e instanceof M) { if (e.bodyUsed) throw new TypeError("Already read");
                this.url = e.url, this.credentials = e.credentials, t.headers || (this.headers = new u(e.headers)), this.method = e.method, this.mode = e.mode, n || null == e._bodyInit || (n = e._bodyInit, e.bodyUsed = !0) } else this.url = String(e); if (this.credentials = t.credentials || this.credentials || "omit", !t.headers && this.headers || (this.headers = new u(t.headers)), this.method = function(e) { var t = e.toUpperCase(); return s.indexOf(t) > -1 ? t : e }(t.method || this.method || "GET"), this.mode = t.mode || this.mode || null, this.referrer = null, ("GET" === this.method || "HEAD" === this.method) && n) throw new TypeError("Body not allowed for GET or HEAD requests");
            this._initBody(n) }

        function y(e) { var t = new FormData; return e.trim().split("&").forEach(function(e) { if (e) { var n = e.split("="),
                        r = n.shift().replace(/\+/g, " "),
                        a = n.join("=").replace(/\+/g, " ");
                    t.append(decodeURIComponent(r), decodeURIComponent(a)) } }), t }

        function p(e, t) { t || (t = {}), this.type = "default", this.status = void 0 === t.status ? 200 : t.status, this.ok = this.status >= 200 && this.status < 300, this.statusText = "statusText" in t ? t.statusText : "OK", this.headers = new u(t.headers), this.url = t.url || "", this._initBody(e) } }("undefined" != typeof self ? self : this) }, function(e, t) { e.exports = function(e) { return e.webpackPolyfill || (e.deprecate = function() {}, e.paths = [], e.children || (e.children = []), Object.defineProperty(e, "loaded", { enumerable: !0, get: function() { return e.l } }), Object.defineProperty(e, "id", { enumerable: !0, get: function() { return e.i } }), e.webpackPolyfill = 1), e } }, function(e, t, n) { var r = { "./af": 1, "./af.js": 1, "./ar": 2, "./ar-dz": 3, "./ar-dz.js": 3, "./ar-kw": 4, "./ar-kw.js": 4, "./ar-ly": 5, "./ar-ly.js": 5, "./ar-ma": 6, "./ar-ma.js": 6, "./ar-sa": 7, "./ar-sa.js": 7, "./ar-tn": 8, "./ar-tn.js": 8, "./ar.js": 2, "./az": 9, "./az.js": 9, "./be": 10, "./be.js": 10, "./bg": 11, "./bg.js": 11, "./bm": 12, "./bm.js": 12, "./bn": 13, "./bn.js": 13, "./bo": 14, "./bo.js": 14, "./br": 15, "./br.js": 15, "./bs": 16, "./bs.js": 16, "./ca": 17, "./ca.js": 17, "./cs": 18, "./cs.js": 18, "./cv": 19, "./cv.js": 19, "./cy": 20, "./cy.js": 20, "./da": 21, "./da.js": 21, "./de": 22, "./de-at": 23, "./de-at.js": 23, "./de-ch": 24, "./de-ch.js": 24, "./de.js": 22, "./dv": 25, "./dv.js": 25, "./el": 26, "./el.js": 26, "./en-SG": 27, "./en-SG.js": 27, "./en-au": 28, "./en-au.js": 28, "./en-ca": 29, "./en-ca.js": 29, "./en-gb": 30, "./en-gb.js": 30, "./en-ie": 31, "./en-ie.js": 31, "./en-il": 32, "./en-il.js": 32, "./en-nz": 33, "./en-nz.js": 33, "./eo": 34, "./eo.js": 34, "./es": 35, "./es-do": 36, "./es-do.js": 36, "./es-us": 37, "./es-us.js": 37, "./es.js": 35, "./et": 38, "./et.js": 38, "./eu": 39, "./eu.js": 39, "./fa": 40, "./fa.js": 40, "./fi": 41, "./fi.js": 41, "./fo": 42, "./fo.js": 42, "./fr": 43, "./fr-ca": 44, "./fr-ca.js": 44, "./fr-ch": 45, "./fr-ch.js": 45, "./fr.js": 43, "./fy": 46, "./fy.js": 46, "./ga": 47, "./ga.js": 47, "./gd": 48, "./gd.js": 48, "./gl": 49, "./gl.js": 49, "./gom-latn": 50, "./gom-latn.js": 50, "./gu": 51, "./gu.js": 51, "./he": 52, "./he.js": 52, "./hi": 53, "./hi.js": 53, "./hr": 54, "./hr.js": 54, "./hu": 55, "./hu.js": 55, "./hy-am": 56, "./hy-am.js": 56, "./id": 57, "./id.js": 57, "./is": 58, "./is.js": 58, "./it": 59, "./it-ch": 60, "./it-ch.js": 60, "./it.js": 59, "./ja": 61, "./ja.js": 61, "./jv": 62, "./jv.js": 62, "./ka": 63, "./ka.js": 63, "./kk": 64, "./kk.js": 64, "./km": 65, "./km.js": 65, "./kn": 66, "./kn.js": 66, "./ko": 67, "./ko.js": 67, "./ku": 68, "./ku.js": 68, "./ky": 69, "./ky.js": 69, "./lb": 70, "./lb.js": 70, "./lo": 71, "./lo.js": 71, "./lt": 72, "./lt.js": 72, "./lv": 73, "./lv.js": 73, "./me": 74, "./me.js": 74, "./mi": 75, "./mi.js": 75, "./mk": 76, "./mk.js": 76, "./ml": 77, "./ml.js": 77, "./mn": 78, "./mn.js": 78, "./mr": 79, "./mr.js": 79, "./ms": 80, "./ms-my": 81, "./ms-my.js": 81, "./ms.js": 80, "./mt": 82, "./mt.js": 82, "./my": 83, "./my.js": 83, "./nb": 84, "./nb.js": 84, "./ne": 85, "./ne.js": 85, "./nl": 86, "./nl-be": 87, "./nl-be.js": 87, "./nl.js": 86, "./nn": 88, "./nn.js": 88, "./pa-in": 89, "./pa-in.js": 89, "./pl": 90, "./pl.js": 90, "./pt": 91, "./pt-br": 92, "./pt-br.js": 92, "./pt.js": 91, "./ro": 93, "./ro.js": 93, "./ru": 94, "./ru.js": 94, "./sd": 95, "./sd.js": 95, "./se": 96, "./se.js": 96, "./si": 97, "./si.js": 97, "./sk": 98, "./sk.js": 98, "./sl": 99, "./sl.js": 99, "./sq": 100, "./sq.js": 100, "./sr": 101, "./sr-cyrl": 102, "./sr-cyrl.js": 102, "./sr.js": 101, "./ss": 103, "./ss.js": 103, "./sv": 104, "./sv.js": 104, "./sw": 105, "./sw.js": 105, "./ta": 106, "./ta.js": 106, "./te": 107, "./te.js": 107, "./tet": 108, "./tet.js": 108, "./tg": 109, "./tg.js": 109, "./th": 110, "./th.js": 110, "./tl-ph": 111, "./tl-ph.js": 111, "./tlh": 112, "./tlh.js": 112, "./tr": 113, "./tr.js": 113, "./tzl": 114, "./tzl.js": 114, "./tzm": 115, "./tzm-latn": 116, "./tzm-latn.js": 116, "./tzm.js": 115, "./ug-cn": 117, "./ug-cn.js": 117, "./uk": 118, "./uk.js": 118, "./ur": 119, "./ur.js": 119, "./uz": 120, "./uz-latn": 121, "./uz-latn.js": 121, "./uz.js": 120, "./vi": 122, "./vi.js": 122, "./x-pseudo": 123, "./x-pseudo.js": 123, "./yo": 124, "./yo.js": 124, "./zh-cn": 125, "./zh-cn.js": 125, "./zh-hk": 126, "./zh-hk.js": 126, "./zh-tw": 127, "./zh-tw.js": 127 };

    function a(e) { var t = s(e); return n(t) }

    function s(e) { var t = r[e]; if (!(t + 1)) { var n = new Error("Cannot find module '" + e + "'"); throw n.code = "MODULE_NOT_FOUND", n } return t } a.keys = function() { return Object.keys(r) }, a.resolve = s, e.exports = a, a.id = 140 }]);