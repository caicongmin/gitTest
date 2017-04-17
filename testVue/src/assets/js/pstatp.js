/**
 * Created by ccm on 2017/1/11.
 */
function gaqpush(t, e) {
  "function" == typeof sendToutiaoGifLog && sendToutiaoGifLog({event: t + "." + e})
}
function Flow(t) {
  this.container = $(t.container || window), this.list_content = $(t.list_content), this.list_top = $(t.list_top), this.list_bottom = $(t.list_bottom), this.item_selector = t.item_selector || "section", this.url = t.url, this.param = t.param, this.type = t.type || "offset", this.auto_load = "undefined" == typeof t.auto_load ? !0 : t.auto_load, this.after_flow = t.after_flow, this.before_flow = t.before_flow, this.fail_flow = t.fail_flow, this.process_data = t.process_data, this.handle_empty = t.handle_empty, this.offset = 0, this.max_time = 0, this.has_more = !0, this.lock = !1, this.duplicate = t.duplicate, this.empty_tmpl = t.empty_tmpl, this.init()
}
function flowUtil(t) {
  t.con && (this.con = t.con)
}
function showTabContent() {
  "undefined" != typeof current_tab && (current_content = contents.hide().filter("[for-tab=" + current_tab + "]").show(), all_tabs.removeClass("checked").filter("[for-tab=" + current_tab + "]").addClass("checked"), scrollTo(0, Math.min(nav_top + 1, scrollY)), $.hash("tab") && gaqpush("pgc_media", "click_tab_" + current_tab), initFlows())
}
function initFlowParams() {
  news_params = {
    page_type: PAGE_TYPE_ARTICLE,
    max_behot_time: 0,
    media_id: media_id,
    count: 10,
    version: 2,
    as: _honey.as,
    cp: _honey.cp,
    timestamp: "1476282741654"
  }, video_params = {
    page_type: PAGE_TYPE_VIDEO,
    max_behot_time: 0,
    media_id: media_id,
    count: 10,
    version: 2,
    as: _honey.as,
    cp: _honey.cp,
    timestamp: "1476282741654"
  }, matrix_collection_params = {
    page_type: PAGE_TYPE_MATRIX_FLOW,
    max_behot_time: 0,
    media_id: media_id,
    count: 10,
    version: 2
  }, page_type == PAGE_TYPE_VIDEO ? (current_tab = "video", video_params.max_behot_time = max_behot_time) : page_type == PAGE_TYPE_ARTICLE ? (current_tab = "news", news_params.max_behot_time = max_behot_time) : page_type == PAGE_TYPE_MATRIX_FLOW && (current_tab = "matrix-collection", matrix_collection_params.max_behot_time = max_behot_time)
}
function initFlows() {
  if (news_flow.lock = "news" !== current_tab, video_flow.lock = "video" !== current_tab, wenda_flow.lock = "wenda" !== current_tab, matrix_collection_flow.lock = "matrix-collection" !== current_tab, "news" == current_tab && !news_flow.has_more) {
    if (page_type == PAGE_TYPE_ARTICLE && !has_more)return void afterFlow();
    news_flow = new Flow({
      list_content: ".news-content",
      list_bottom: ".news-bottom",
      url: "/pgc/ma_mobile/",
      type: "hot_time",
      param: news_params,
      after_flow: afterFlow
    }), news_flow.lackOfContent() ? news_flow.loadmore() : afterFlow()
  }
  if ("video" == current_tab && !video_flow.has_more) {
    if (page_type == PAGE_TYPE_VIDEO && !has_more)return void afterFlow();
    video_flow = new Flow({
      list_content: ".video-content",
      list_bottom: ".video-bottom",
      url: "/pgc/ma_mobile/",
      type: "hot_time",
      param: video_params,
      after_flow: afterFlow
    }), video_flow.lackOfContent() ? video_flow.loadmore() : afterFlow()
  }
  "matrix-collection" != current_tab || matrix_collection_flow.has_more || (matrix_collection_flow = new Flow({
    list_content: ".matrix-collection-content",
    list_bottom: ".matrix-collection-bottom",
    url: "/pgc/matrix_collection/",
    type: "hot_time",
    param: matrix_collection_params,
    after_flow: afterFlow
  }), matrix_collection_flow.lackOfContent() ? matrix_collection_flow.loadmore() : afterFlow()), "matrix" != current_tab || matrix_flow.has_data || (matrix_flow = new Flow({
    list_content: ".matrix-content",
    list_bottom: ".matrix-bottom",
    url: "/pgc/gov_matrix/",
    param: {media_id: media_id},
    after_flow: afterFlow
  }), matrix_flow.has_data = !0, matrix_flow.lackOfContent() && matrix_flow.loadmore()), "column" != current_tab || column_flow.has_data || (column_flow = new Flow({
    list_content: ".column-content",
    list_bottom: ".column-bottom",
    url: "/pgc/tab_column/",
    param: {media_id: media_id},
    after_flow: afterFlow
  }), column_flow.has_data = !0, column_flow.lackOfContent() && column_flow.loadmore()), "wenda" != current_tab || wenda_flow.has_data || (wenda_flow = new Flow({
    list_content: ".wenda-content",
    list_bottom: ".wenda-bottom",
    url: "/pgc/tab_wenda/",
    type: "hot_time",
    param: {max_gid: 0, max_behot_time: 0, media_id: media_id, count: 10},
    after_flow: afterFlow
  }), wenda_flow.lackOfContent() && wenda_flow.loadmore(), wenda_flow.has_data = !0)
}
function afterFlow() {
  flowUtil.lazyLoadImages(current_content), flowUtil.timeAgo(current_content), flowUtil.showAppUrl(current_content), WWLineClamp(current_content), handleEmpty(current_content)
}
function handleEmpty(t) {
  t.find(".list-content").children().length || t.find(".article-empty").length || t.append('<div class="article-empty">未发表过文章</div>')
}
function initTabSticky() {
  var t = document.querySelector(".mpl-bar");
  if (t) {
    var e = document.querySelector(".mpl-head"), n = t.querySelector(".mpl-bar-text"), o = document.querySelector(".mpl-nav"), i = document.querySelector(".mpl-nav-holder"), a = document.querySelector(".mpl-bar-follow"), r = document.querySelector(".mpl-bar-share"), l = t.querySelector(".mpl-bar-line"), s = (document.querySelector(".mpl-bar-download"), 17), c = "0" == $.hash("tt_daymode") ? "37,37,37" : "255,255,255", u = !1;
    if (!$.browser.toutiao)return r.style.display = "none", e.appendChild(a), $(a).find("a").attr("href", "http://d.toutiao.com/e6jY/").removeAttr("data-action"), void(t.style.display = "none");
    if (!share_menu)return r.style.display = "none", e.appendChild(a), void(t.style.display = "none");
    $(r).on("click", "a", function () {
      return ToutiaoJSBridge.call("share_pgc", {id: media_id}), gaqpush("pgc_media", "share"), !1
    }), $(a).on("click", ".like-btn", function () {
      var t = "like" == this.getAttribute("data-action");
      gaqpush("pgc_media", t ? "subscribe" : "unsubscribe");
      var e = t ? mediaIntroAfterSubscribe : null;
      return mediaLike(this, media_id, e), setTimeout(function () {
        sendCustomEvents(t ? "pgc_click_sub" : "pgc_click_cancel_sub", "pgc", media_id)
      }, 500), !1
    }).on("click", ".manage-btn", function () {
      gaqpush("pgc_media", "manage")
    }), nav_top = o.offsetTop - t.offsetHeight, i.style.height = o.offsetHeight + "px", o.style.top = t.offsetHeight - 1 + "px", $.browser.ios && (t.style.backgroundColor = "rgba(" + c + ",1)", n.style.webkitTransition = "all 400ms ease"), document.addEventListener("scroll", function () {
      var e = 1;
      u ? u && nav_top > scrollY && ($.browser.android && (o.classList.remove("fixed"), i.style.display = "none"), l && (l.style.opacity = 0), e = 0, u = !1) : scrollY > nav_top ? ($.browser.android && (o.classList.add("fixed"), i.style.display = "block", t.style.backgroundColor = "rgba(" + c + ",1)"), l && (l.style.opacity = 1), u = !0) : (e = (scrollY / nav_top).toFixed(2), $.browser.android && (t.style.backgroundColor = "rgba(" + c + "," + e + ")"), l && (l.style.opacity = e)), n.style.opacity = e
    });
    {
      var d, m = 2 * a.offsetLeft - innerWidth - 10;
      n.innerHTML.length
    }
    n.style.width = m + "px", n.style.whiteSpace = "nowrap", n.style.overflow = "hidden", d = setInterval(function () {
      s >= 12 && n.scrollWidth > n.offsetWidth ? (s -= 1, n.style.fontSize = s + "px") : clearInterval(d)
    }, 100)
  }
}
function initTabClick() {
  all_tabs.on("click", function () {
    return current_tab = this.getAttribute("for-tab"), showTabContent(), !1
  })
}
function init() {
  $.browser.ios && $("body").addClass("iphone"), initFlowParams(), initTabSticky(), initTabClick(), initScrollEvents(), showTabContent(), $(".mpl-content").on("click", ".link", function () {
    this.classList.add("visited");
    var t = "click_article";
    "video" == current_tab && (t = "click_video"), "matrix" == current_tab && (t = "click_matrix"), gaqpush("pgc_media", t)
  }), ToutiaoJSBridge.on("page_state_change", function (t) {
    if ("pgc_action" === t.type && t.id == media_id) {
      var e = $(".mpl-bar-follow .btn");
      t.status ? e.attr("data-action", "unlike").text("已关注") : e.attr("data-action", "like").text("关注")
    }
  })
}
function WWLineClamp(t) {
  t.find("[line-clamp]").each(function () {
    var t = this.parentNode, e = this.innerText, n = e.length - 1, o = -10, i = o, a = parseInt(this.getAttribute("line-clamp") || 0), r = parseInt(getComputedStyle(t)["line-height"]) * a, l = "...";
    if (e && t.clientHeight > r)for (; o;)this.innerText = e.substr(0, n + i) + l, t.clientHeight > r ? o > 0 && (o = -o) : o = Math.abs(parseInt(o / 2)), i += o;
    this.removeAttribute("line-clamp")
  })
}
function mediaIntroAfterSubscribe() {
  function t(t) {
    var e = l.tmpl(t);
    e && r.html(e), window.switchConcernVersion(), window.isConcernVersion && a.addClass("concern-intro")
  }

  function e() {
    var t = r.html().trim();
    t.length && a.modal({bg_color: "rgba(0,0,0,.4)"})
  }

  function n() {
    $.get(o, i).done(function (n) {
      var o = n.recommend_medias_data;
      if ("success" == n.message && o.length) {
        var i = o.slice(0, 3), a = o.slice(3);
        t(i), window.moreMedia = a, e(), gaqpush("pgc_media", "media_intro_success"), mediaIntroImpression(i)
      }
    })
  }

  if ("true" != $.request("client_dialog_show")) {
    var o = "/pgc/recommend_list/", i = $.extend({media_id: media_id}, common_params), a = $(".media-intro"), r = a.find(".media-list"), l = $("#mediaIntroTemplate");
    window.hasMediaIntro ? e() : n(), window.hasMediaIntro = !0
  }
}
function mediaIntroLog(t) {
  gaqpush("pgc_media", "media_intro_click"), setTimeout(function () {
    sendCustomEvents("sub_rec_click", "pgc_profile", t)
  }, 500)
}
function mediaIntroSubscribe() {
  mediaIntroMore(), gaqpush("pgc_media", "media_intro_subscribe")
}
function mediaIntroImpression(t) {
  t.length ? (sendCustomEvents("sub_rec_impression", "pgc_profile", t.shift().media_id), window.impressionTimer = setTimeout(function () {
    mediaIntroImpression(t)
  }, 100)) : clearTimeout(window.impressionTimer)
}
function mediaIntroMore() {
  var t = window.moreMedia.pop(), e = $(".media-intro a[data-action=unlike]").parents("section");
  if (setTimeout(function () {
      sendCustomEvents("sub_rec_subscribe", "pgc_profile", e.attr("media-id"))
    }, 100), t && e.length) {
    var n = $("#mediaIntroTemplate").tmpl(t);
    e.fadeOut(function () {
      e.after(n), e.remove(), mediaIntroImpression([t])
    })
  }
}
function isElementInViewport(t) {
  if ("function" == typeof jQuery && t instanceof jQuery && (t = t[0]), !t.getBoundingClientRect)return !0;
  var e = t.getBoundingClientRect();
  return e.top >= 0 && e.left >= 0 && e.bottom <= (window.innerHeight || document.documentElement.clientHeight) && e.right <= (window.innerWidth || document.documentElement.clientWidth)
}
function removalDataAppend() {
  var t = {}, e = [];
  t.media_id = media_id;
  for (var n = $(".list-content section"), o = 0; o < n.length; o++)isElementInViewport(n.eq(o)) && e.push({
    group_id: n.eq(o).data("id"),
    behot_time: n.eq(o).attr("hot-time")
  });
  return t.data = JSON.stringify(e), t
}
function sendRemovalRequest(t) {
  var e = REPORTREMOVEALURI + document.location.search;
  $.post(e, t)
}
function mediaRemoval() {
  document.addEventListener("touchend", function () {
    try {
      clearTimeout(mediaRemovalTimer), mediaRemovalTimer = setTimeout(function () {
        sendRemovalRequest(removalDataAppend())
      }, 1)
    } catch (t) {
    }
  })
}
!function (t) {
  "use strict";
  function e(t, e) {
    var n = (65535 & t) + (65535 & e), o = (t >> 16) + (e >> 16) + (n >> 16);
    return o << 16 | 65535 & n
  }

  function n(t, e) {
    return t << e | t >>> 32 - e
  }

  function o(t, o, i, a, r, l) {
    return e(n(e(e(o, t), e(a, l)), r), i)
  }

  function i(t, e, n, i, a, r, l) {
    return o(e & n | ~e & i, t, e, a, r, l)
  }

  function a(t, e, n, i, a, r, l) {
    return o(e & i | n & ~i, t, e, a, r, l)
  }

  function r(t, e, n, i, a, r, l) {
    return o(e ^ n ^ i, t, e, a, r, l)
  }

  function l(t, e, n, i, a, r, l) {
    return o(n ^ (e | ~i), t, e, a, r, l)
  }

  function s(t, n) {
    t[n >> 5] |= 128 << n % 32, t[(n + 64 >>> 9 << 4) + 14] = n;
    var o, s, c, u, d, m = 1732584193, f = -271733879, p = -1732584194, _ = 271733878;
    for (o = 0; o < t.length; o += 16)s = m, c = f, u = p, d = _, m = i(m, f, p, _, t[o], 7, -680876936), _ = i(_, m, f, p, t[o + 1], 12, -389564586), p = i(p, _, m, f, t[o + 2], 17, 606105819), f = i(f, p, _, m, t[o + 3], 22, -1044525330), m = i(m, f, p, _, t[o + 4], 7, -176418897), _ = i(_, m, f, p, t[o + 5], 12, 1200080426), p = i(p, _, m, f, t[o + 6], 17, -1473231341), f = i(f, p, _, m, t[o + 7], 22, -45705983), m = i(m, f, p, _, t[o + 8], 7, 1770035416), _ = i(_, m, f, p, t[o + 9], 12, -1958414417), p = i(p, _, m, f, t[o + 10], 17, -42063), f = i(f, p, _, m, t[o + 11], 22, -1990404162), m = i(m, f, p, _, t[o + 12], 7, 1804603682), _ = i(_, m, f, p, t[o + 13], 12, -40341101), p = i(p, _, m, f, t[o + 14], 17, -1502002290), f = i(f, p, _, m, t[o + 15], 22, 1236535329), m = a(m, f, p, _, t[o + 1], 5, -165796510), _ = a(_, m, f, p, t[o + 6], 9, -1069501632), p = a(p, _, m, f, t[o + 11], 14, 643717713), f = a(f, p, _, m, t[o], 20, -373897302), m = a(m, f, p, _, t[o + 5], 5, -701558691), _ = a(_, m, f, p, t[o + 10], 9, 38016083), p = a(p, _, m, f, t[o + 15], 14, -660478335), f = a(f, p, _, m, t[o + 4], 20, -405537848), m = a(m, f, p, _, t[o + 9], 5, 568446438), _ = a(_, m, f, p, t[o + 14], 9, -1019803690), p = a(p, _, m, f, t[o + 3], 14, -187363961), f = a(f, p, _, m, t[o + 8], 20, 1163531501), m = a(m, f, p, _, t[o + 13], 5, -1444681467), _ = a(_, m, f, p, t[o + 2], 9, -51403784), p = a(p, _, m, f, t[o + 7], 14, 1735328473), f = a(f, p, _, m, t[o + 12], 20, -1926607734), m = r(m, f, p, _, t[o + 5], 4, -378558), _ = r(_, m, f, p, t[o + 8], 11, -2022574463), p = r(p, _, m, f, t[o + 11], 16, 1839030562), f = r(f, p, _, m, t[o + 14], 23, -35309556), m = r(m, f, p, _, t[o + 1], 4, -1530992060), _ = r(_, m, f, p, t[o + 4], 11, 1272893353), p = r(p, _, m, f, t[o + 7], 16, -155497632), f = r(f, p, _, m, t[o + 10], 23, -1094730640), m = r(m, f, p, _, t[o + 13], 4, 681279174), _ = r(_, m, f, p, t[o], 11, -358537222), p = r(p, _, m, f, t[o + 3], 16, -722521979), f = r(f, p, _, m, t[o + 6], 23, 76029189), m = r(m, f, p, _, t[o + 9], 4, -640364487), _ = r(_, m, f, p, t[o + 12], 11, -421815835), p = r(p, _, m, f, t[o + 15], 16, 530742520), f = r(f, p, _, m, t[o + 2], 23, -995338651), m = l(m, f, p, _, t[o], 6, -198630844), _ = l(_, m, f, p, t[o + 7], 10, 1126891415), p = l(p, _, m, f, t[o + 14], 15, -1416354905), f = l(f, p, _, m, t[o + 5], 21, -57434055), m = l(m, f, p, _, t[o + 12], 6, 1700485571), _ = l(_, m, f, p, t[o + 3], 10, -1894986606), p = l(p, _, m, f, t[o + 10], 15, -1051523), f = l(f, p, _, m, t[o + 1], 21, -2054922799), m = l(m, f, p, _, t[o + 8], 6, 1873313359), _ = l(_, m, f, p, t[o + 15], 10, -30611744), p = l(p, _, m, f, t[o + 6], 15, -1560198380), f = l(f, p, _, m, t[o + 13], 21, 1309151649), m = l(m, f, p, _, t[o + 4], 6, -145523070), _ = l(_, m, f, p, t[o + 11], 10, -1120210379), p = l(p, _, m, f, t[o + 2], 15, 718787259), f = l(f, p, _, m, t[o + 9], 21, -343485551), m = e(m, s), f = e(f, c), p = e(p, u), _ = e(_, d);
    return [m, f, p, _]
  }

  function c(t) {
    var e, n = "";
    for (e = 0; e < 32 * t.length; e += 8)n += String.fromCharCode(t[e >> 5] >>> e % 32 & 255);
    return n
  }

  function u(t) {
    var e, n = [];
    for (n[(t.length >> 2) - 1] = void 0, e = 0; e < n.length; e += 1)n[e] = 0;
    for (e = 0; e < 8 * t.length; e += 8)n[e >> 5] |= (255 & t.charCodeAt(e / 8)) << e % 32;
    return n
  }

  function d(t) {
    return c(s(u(t), 8 * t.length))
  }

  function m(t, e) {
    var n, o, i = u(t), a = [], r = [];
    for (a[15] = r[15] = void 0, i.length > 16 && (i = s(i, 8 * t.length)), n = 0; 16 > n; n += 1)a[n] = 909522486 ^ i[n], r[n] = 1549556828 ^ i[n];
    return o = s(a.concat(u(e)), 512 + 8 * e.length), c(s(r.concat(o), 640))
  }

  function f(t) {
    var e, n, o = "0123456789abcdef", i = "";
    for (n = 0; n < t.length; n += 1)e = t.charCodeAt(n), i += o.charAt(e >>> 4 & 15) + o.charAt(15 & e);
    return i
  }

  function p(t) {
    return unescape(encodeURIComponent(t))
  }

  function _(t) {
    return d(p(t))
  }

  function h(t) {
    return f(_(t))
  }

  function w(t, e) {
    return m(p(t), p(e))
  }

  function g(t, e) {
    return f(w(t, e))
  }

  function v(t, e, n) {
    return e ? n ? w(e, t) : g(e, t) : n ? _(t) : h(t)
  }

  "function" == typeof define && define.amd ? define("static/js/lib/md5", ["require"], function () {
    return v
  }) : "object" == typeof module && module.exports ? module.exports = v : t.md5 = v
}(this), !function (t) {
  var e = {};
  e.getHoney = function () {
    var t = Math.floor((new Date).getTime() / 1e3), e = t.toString(16).toUpperCase(), n = md5(t).toString().toUpperCase();
    if (8 != e.length)return {as: "479BB4B7254C150", cp: "7E0AC8874BB0985"};
    for (var o = n.slice(0, 5), i = n.slice(-5), a = "", r = 0; 5 > r; r++)a += o[r] + e[r];
    for (var l = "", s = 0; 5 > s; s++)l += e[s + 3] + i[s];
    return {as: "A1" + a + e.slice(-3), cp: e.slice(0, 3) + l + "E1"}
  }, t.ascp = e
}(window, document), function () {
  var t = ascp.getHoney(), e = {path: "/", domain: "i.snssdk.com"};
  $.cookie("cp", t.cp, e), $.cookie("as", t.as, e), window._honey = t
}(), Flow.prototype = {
  init: function () {
    var t = this;
    this.url && (t.showState(t.auto_load ? NETWORKTIPS.LOADING : NETWORKTIPS.HASMORE), this.container.on("scrollBottom", function () {
      t.auto_load && (t.lock || t.has_more && t.loadmore())
    }), this.list_bottom.on("click", "a", function () {
      return t.lock = !1, t.loadmore(), !1
    }))
  }, loadmore: function (t) {
    this.getData(this.url, this.type, this.param, t)
  }, getData: function (t, e, n, o) {
    if (!this.lock) {
      this.lock = !0;
      var i = this, a = {}, r = n;
      a = r, i.showState(NETWORKTIPS.LOADING, "loading");
      var l = +new Date;
      $.get(t, a).done(function (t) {
        var n = +new Date;
        i.success(e, t, n - l)
      }).fail(function () {
        i.fail(e), o && o()
      })
    }
  }, success: function (t, e, n) {
    "function" == typeof this.process_data && this.process_data(t, e);
    var o = e.html.trim();
    if (e.return_count) {
      var i = this.list_content;
      e.has_more ? (this.showState(this.auto_load ? NETWORKTIPS.LOADING : NETWORKTIPS.HASMORE), this.lock = !1) : (this.list_bottom.remove(), this.lock = !0), this.has_more = e.has_more, "offset" == t && (this.duplicate && (o = this.getUnduplicateItems(o)), this.param.offset = e.offset), "hot_time" == t && (this.param.max_behot_time = e.max_behot_time), i.append(o)
    } else this.hideState(), this.lock = !0, this.has_more = !1, this.isEmpty() && this.handleEmpty();
    "function" == typeof this.after_flow && this.after_flow(t, e, n)
  }, fail: function (t) {
    var e = this;
    this.showState(NETWORKTIPS.RETRY), "function" == typeof this.fail_flow && this.fail_flow(t), setTimeout(function () {
      e.lock = !1
    }, 500)
  }, getItemIds: function () {
    var t = this.list_content.children(this.item_selector), e = [];
    return t.each(function () {
      var t = this.getAttribute("data-id");
      e.push(t)
    }), e
  }, getUnduplicateItems: function (t) {
    var e, n = $("<div></div>").html(t).children(this.item_selector, "script", "style", "link"), o = "", i = this.getItemIds();
    return i.length ? (n.each(function () {
      e = this.getAttribute("data-id") || 0, -1 == i.indexOf(e) ? o += this.outerHTML : console.log("duplicate:", e)
    }), o) : t
  }, lackOfContent: function () {
    return this.list_content.height() < innerHeight && this.has_more
  }, isEmpty: function () {
    return 0 == this.list_content.html().trim().length
  }, handleEmpty: function () {
    this.empty_tmpl && this.list_content.html(this.empty_tmpl), this.handle_empty && this.handle_empty.call(this)
  }, setParams: function (t) {
    $.extend(this.param, t)
  }, showState: function (t, e) {
    this.list_bottom.show();
    var n = this.list_bottom.find("a");
    t && n.html(t), n[e ? "addClass" : "removeClass"]("loading")
  }, hideState: function () {
    this.list_bottom.hide()
  }
}, flowUtil.showAppUrl = function (t) {
  $.browser.toutiao && t.find(".link[app-url]").each(function (t, e) {
    var n = e.getAttribute("app-url");
    n && (e.href = n, e.removeAttribute("app-url"))
  })
}, flowUtil.highlight = function (t) {
  return t.find(".list-content [highlight]").each(function () {
    for (var t, e = this.getAttribute("highlight"), n = e ? JSON.parse(e) : [], o = this.innerText; n.length;) {
      var i = n.pop(), a = i[0], r = i[1];
      t && a + r > t || (t = a, o = o.substr(0, a) + "<highlight>" + o.substr(a, r) + "</highlight>" + o.substr(a + r))
    }
    this.innerHTML = o, this.removeAttribute("highlight")
  }), this
}, flowUtil.timeAgo = function (t) {
  return t.find(".time").timeago({relative: !0}), this
}, flowUtil.prepareLines = function (t) {
  for (var e = t.find(".aladdin").not("[line-justified]"), n = 0; n < e.length; n++) {
    var o = e.eq(n), i = o.prev(), a = o.next();
    i.is(".aladdin") || i.find(".line").attr("class", "line-bottom"), a.is(".aladdin") || a.find(".line-top").length || a.prepend("<div class='line-top'></div>"), n < e.length - 1 && o.attr("line-justified", "true")
  }
  return this
}, flowUtil.middleModeAlignment = function (t) {
  return t.find("section.middle-mode").not("[align-justified]").each(function () {
    var t = this.querySelector(".holder"), e = this.querySelector(".text-wrap"), n = this.querySelector(".info .label-src");
    if (t && e) {
      var o = t.clientHeight, i = e.clientHeight;
      if (o > i && (e.style.paddingTop = (o - i) / 2 + "px"), n) {
        var a = n.innerText;
        a.length > 8 && (n.innerText = a.substring(0, 6) + "...")
      }
      this.setAttribute("align-justified", "true")
    }
  }), this
}, flowUtil.lazyLoadImages = function (t) {
  return t.find("img[lazyload]").each(function (t, e) {
    var n = $(e), o = n.attr("alt-src");
    o && n.attr("src", o).removeAttr("alt-src lazy")
  }), this
}, flowUtil.iframeInit = function (t) {
  0 == TouTiao.daymode && t.find("iframe").not("[daymode-justified]").each(function () {
    var t = this;
    t.onload = function () {
      t.contentDocument.body.className += " night", t.setAttribute("daymode-justified", "true")
    }
  })
};
var all_tabs = $(".mpl-nav-box a"), current_tab = "news", contents = $(".mpl-content"), current_content, PAGE_TYPE_VIDEO = 0, PAGE_TYPE_ARTICLE = 1, PAGE_TYPE_MATRIX_FLOW = 2, common_params = $.request(), news_params, video_params, matrix_collection_params, news_flow = {}, video_flow = {}, matrix_flow = {}, column_flow = {}, wenda_flow = {}, matrix_collection_flow = {}, nav_top;
document.addEventListener("DOMContentLoaded", init, !1), !function () {
  function t() {
    return +new Date
  }

  function e(t) {
    if (r) {
      if (t)return void r.classList.add(s);
      r.classList.remove(s), a.off("touchmove"), r = null, clearTimeout(n), n = null
    }
  }

  if (!$.browser.android) {
    var n, o, i, a, r, l = 200, s = "active";
    document.addEventListener("DOMContentLoaded", function () {
      a = $("body").addClass("iphone"), a.on("touchstart", "a", function () {
        r = this, o = t(), n = setTimeout(function () {
          e(1)
        }, l), a.on("touchmove", function () {
          return !i && (i = t(), l > i - o) ? (clearTimeout(n), void(n = null)) : void e(0)
        })
      }).on("touchend", function () {
        o = null, i = null, e(0)
      })
    }, !1)
  }
}();
var TouTiao = {};
!function () {
  function t(t) {
    ["s", "m", "l", "xl"].indexOf(t) > -1 && o.removeClass("font_s font_m font_l font_xl").addClass("font_" + t)
  }

  function e(t) {
    ["0", "1", 0, 1].indexOf(t) < 0 || (t = parseInt(t), t > 0 ? o.removeClass("night") : (o.addClass("night"), i.style.background = "transparent"), TouTiao.daymode = t)
  }

  function n() {
    var n = $.hash("tt_daymode"), i = $.hash("tt_font");
    o = $("body"), n && e(n), i && t(i)
  }

  var o, i = document.documentElement;
  TouTiao.setFontSize = t, TouTiao.setDayMode = e, document.addEventListener("DOMContentLoaded", n, !1), window.onhashchange = n
}();
var REPORTREMOVEALURI = "/pgc/update_impression_data/", mediaRemovalTimer;
document.addEventListener("DOMContentLoaded", mediaRemoval, !1), !function (t) {
  function e(e, n, o, i) {
    var a = {
      data: i || 0 === i || i === !1 ? i : n ? n.data : {},
      _wrap: n ? n._wrap : null,
      tmpl: null,
      parent: n || null,
      nodes: [],
      calls: c,
      nest: u,
      wrap: d,
      html: m,
      update: f
    };
    return e && t.extend(a, e, {
      nodes: [],
      parent: n
    }), o && (a.tmpl = o, a._ctnt = a._ctnt || a.tmpl(t, a), a.key = ++y, ($.length ? v : g)[y] = a), a
  }

  function n(e, i, a) {
    var r, l = a ? t.map(a, function (t) {
      return "string" == typeof t ? e.key ? t.replace(/(<\w+)(?=[\s>])(?![^>]*_tmplitem)([^>]*)/g, "$1 " + h + '="' + e.key + '" $2') : t : n(t, e, t._ctnt)
    }) : e;
    return i ? l : (l = l.join(""), l.replace(/^\s*([^<\s][^<]*)?(<[\w\W]+>)([^>]*[^>\s])?\s*$/, function (e, n, i, a) {
      r = t(i).get(), s(r), n && (r = o(n).concat(r)), a && (r = r.concat(o(a)))
    }), r ? r : o(l))
  }

  function o(e) {
    var n = document.createElement("div");
    return n.innerHTML = e, t.makeArray(n.childNodes)
  }

  function i(e) {
    return new Function("jQuery", "$item", "var $=jQuery,call,__=[],$data=$item.data;with($data){__.push('" + t.trim(e).replace(/([\\'])/g, "\\$1").replace(/[\r\t\n]/g, " ").replace(/\$\{([^\}]*)\}/g, "{{= $1}}").replace(/\{\{(\/?)(\w+|.)(?:\(((?:[^\}]|\}(?!\}))*?)?\))?(?:\s+(.*?)?)?(\(((?:[^\}]|\}(?!\}))*?)\))?\s*\}\}/g, function (e, n, o, i, a, l, s) {
        var c, u, d, m = t.tmpl.tag[o];
        if (!m)throw"Unknown template tag: " + o;
        return c = m._default || [], l && !/\w$/.test(a) && (a += l, l = ""), a ? (a = r(a), s = s ? "," + r(s) + ")" : l ? ")" : "", u = l ? a.indexOf(".") > -1 ? a + r(l) : "(" + a + ").call($item" + s : a, d = l ? u : "(typeof(" + a + ")==='function'?(" + a + ").call($item):(" + a + "))") : d = u = c.$1 || "null", i = r(i), "');" + m[n ? "close" : "open"].split("$notnull_1").join(a ? "typeof(" + a + ")!=='undefined' && (" + a + ")!=null" : "true").split("$1a").join(d).split("$1").join(u).split("$2").join(i || c.$2 || "") + "__.push('"
      }) + "');}return __;")
  }

  function a(e, o) {
    e._wrap = n(e, !0, t.isArray(o) ? o : [w.test(o) ? o : t(o).html()]).join("")
  }

  function r(t) {
    return t ? t.replace(/\\'/g, "'").replace(/\\\\/g, "\\") : null
  }

  function l(t) {
    var e = document.createElement("div");
    return e.appendChild(t.cloneNode(!0)), e.innerHTML
  }

  function s(n) {
    function o(n) {
      function o(t) {
        t += c, r = u[t] = u[t] || e(r, g[r.parent.key + c] || r.parent)
      }

      var i, a, r, l, s = n;
      if (l = n.getAttribute(h)) {
        for (; s.parentNode && 1 === (s = s.parentNode).nodeType && !(i = s.getAttribute(h)););
        i !== l && (s = s.parentNode ? 11 === s.nodeType ? 0 : s.getAttribute(h) || 0 : 0, (r = g[l]) || (r = v[l], r = e(r, g[s] || v[s]), r.key = ++y, g[y] = r), T && o(l)), n.removeAttribute(h)
      } else T && (r = t.data(n, "tmplItem")) && (o(r.key), g[r.key] = r, s = t.data(n.parentNode, "tmplItem"), s = s ? s.key : 0);
      if (r) {
        for (a = r; a && a.key != s;)a.nodes.push(n), a = a.parent;
        delete r._ctnt, delete r._wrap, t.data(n, "tmplItem", r)
      }
    }

    var i, a, r, l, s, c = "_" + T, u = {};
    for (r = 0, l = n.length; l > r; r++)if (1 === (i = n[r]).nodeType) {
      for (a = i.getElementsByTagName("*"), s = a.length - 1; s >= 0; s--)o(a[s]);
      o(i)
    }
  }

  function c(t, e, n, o) {
    return t ? void $.push({_: t, tmpl: e, item: this, data: n, options: o}) : $.pop()
  }

  function u(e, n, o) {
    return t.tmpl(t.template(e), n, o, this)
  }

  function d(e, n) {
    var o = e.options || {};
    return o.wrapped = n, t.tmpl(t.template(e.tmpl), e.data, o, e.item)
  }

  function m(e, n) {
    var o = this._wrap;
    return t.map(t(t.isArray(o) ? o.join("") : o).filter(e || "*"), function (t) {
      return n ? t.innerText || t.textContent : t.outerHTML || l(t)
    })
  }

  function f() {
    var e = this.nodes;
    t.tmpl(null, null, null, this).insertBefore(e[0]), t(e).remove()
  }

  var p, _ = t.fn.domManip, h = "_tmplitem", w = /^[^<]*(<[\w\W]+>)[^>]*$|\{\{\! /, g = {}, v = {}, b = {
    key: 0,
    data: {}
  }, y = 0, T = 0, $ = [];
  t.each({
    appendTo: "append",
    prependTo: "prepend",
    insertBefore: "before",
    insertAfter: "after",
    replaceAll: "replaceWith"
  }, function (e, n) {
    t.fn[e] = function (o) {
      var i, a, r, l, s = [], c = t(o), u = 1 === this.length && this[0].parentNode;
      if (p = g || {}, u && 11 === u.nodeType && 1 === u.childNodes.length && 1 === c.length)c[n](this[0]), s = this; else {
        for (a = 0, r = c.length; r > a; a++)T = a, i = (a > 0 ? this.clone(!0) : this).get(), t(c[a])[n](i), s = s.concat(i);
        T = 0, s = this.pushStack(s, e, c.selector)
      }
      return l = p, p = null, t.tmpl.complete(l), s
    }
  }), t.fn.extend({
    tmpl: function (e, n, o) {
      return t.tmpl(this[0], e, n, o)
    }, tmplItem: function () {
      return t.tmplItem(this[0])
    }, template: function (e) {
      return t.template(e, this[0])
    }, domManip: function (e, n, o) {
      if (e[0] && t.isArray(e[0])) {
        for (var i, a = t.makeArray(arguments), r = e[0], l = r.length, s = 0; l > s && !(i = t.data(r[s++], "tmplItem")););
        i && T && (a[2] = function (e) {
          t.tmpl.afterManip(this, e, o)
        }), _.apply(this, a)
      } else _.apply(this, arguments);
      return T = 0, !p && t.tmpl.complete(g), this
    }
  }), t.extend({
    tmpl: function (o, i, r, l) {
      var s, c = !l;
      if (c)l = b, o = t.template[o] || t.template(null, o), v = {}; else if (!o)return o = l.tmpl, g[l.key] = l, l.nodes = [], l.wrapped && a(l, l.wrapped), t(n(l, null, l.tmpl(t, l)));
      return o ? ("function" == typeof i && (i = i.call(l || {})), r && r.wrapped && a(r, r.wrapped), s = t.isArray(i) ? t.map(i, function (t) {
        return t ? e(r, l, o, t) : null
      }) : [e(r, l, o, i)], c ? t(n(l, null, s)) : s) : []
    }, tmplItem: function (e) {
      var n;
      for (e instanceof t && (e = e[0]); e && 1 === e.nodeType && !(n = t.data(e, "tmplItem")) && (e = e.parentNode););
      return n || b
    }, template: function (e, n) {
      return n ? ("string" == typeof n ? n = i(n) : n instanceof t && (n = n[0] || {}), n.nodeType && (n = t.data(n, "tmpl") || t.data(n, "tmpl", i(n.innerHTML))), "string" == typeof e ? t.template[e] = n : n) : e ? "string" != typeof e ? t.template(null, e) : t.template[e] || t.template(null, w.test(e) ? e : t(e)) : null
    }, encode: function (t) {
      return ("" + t).split("<").join("&lt;").split(">").join("&gt;").split('"').join("&#34;").split("'").join("&#39;")
    }
  }), t.extend(t.tmpl, {
    tag: {
      tmpl: {_default: {$2: "null"}, open: "if($notnull_1){__=__.concat($item.nest($1,$2));}"},
      wrap: {
        _default: {$2: "null"},
        open: "$item.calls(__,$1,$2);__=[];",
        close: "call=$item.calls();__=call._.concat($item.wrap(call,__));"
      },
      each: {
        _default: {$2: "$index, $value"},
        open: "if($notnull_1){$.each($1a,function($2){with(this){",
        close: "}});}"
      },
      "if": {open: "if(($notnull_1) && $1a){", close: "}"},
      "else": {_default: {$1: "true"}, open: "}else if(($notnull_1) && $1a){"},
      html: {open: "if($notnull_1){__.push($1a);}"},
      "=": {_default: {$1: "$data"}, open: "if($notnull_1){__.push($.encode($1a));}"},
      "!": {open: ""}
    }, complete: function () {
      g = {}
    }, afterManip: function (e, n, o) {
      var i = 11 === n.nodeType ? t.makeArray(n.childNodes) : 1 === n.nodeType ? [n] : [];
      o.call(e, n), s(i), T++
    }
  })
}(jQuery);
