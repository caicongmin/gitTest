!function (t) {
  "use strict";
  function e(t) {
    var e, o, i, r, n, a, d;
    for (a = t.length, n = 0, d = ""; a > n;) {
      do e = c[255 & t.charCodeAt(n++)]; while (a > n && -1 == e);
      if (-1 == e)break;
      do o = c[255 & t.charCodeAt(n++)]; while (a > n && -1 == o);
      if (-1 == o)break;
      d += String.fromCharCode(e << 2 | (48 & o) >> 4);
      do {
        if (i = 255 & t.charCodeAt(n++), 61 == i)return d;
        i = c[i]
      } while (a > n && -1 == i);
      if (-1 == i)break;
      d += String.fromCharCode((15 & o) << 4 | (60 & i) >> 2);
      do {
        if (r = 255 & t.charCodeAt(n++), 61 == r)return d;
        r = c[r]
      } while (a > n && -1 == r);
      if (-1 == r)break;
      d += String.fromCharCode((3 & i) << 6 | r)
    }
    return d
  }

  function o(t, e, o) {
    t.setAttribute("type", "text/javascript"), o && t.setAttribute("charset", o), t.setAttribute("src", e), document.getElementsByTagName("head")[0].appendChild(t)
  }

  function i(t) {
    return "[object Function]" == Object.prototype.toString.call(t)
  }

  function r(e, r, n) {
    function a(e) {
      return function () {
        try {
          e ? u.onfailure && u.onfailure() : (r.apply(t, arguments), clearTimeout(s)), t[d] = null, delete t[d]
        } catch (o) {
        } finally {
        }
      }

    }

    var d, s, l = document.createElement("SCRIPT"), c = "tt__video__", u = n || {}, m = u.charset, p = "callback", h = u.timeOut || 0;
    i(r) && (d = c + Math.floor(2147483648 * Math.random()).toString(36), t[d] = a(0)), h && (s = setTimeout(a(1), h)), e += (e.indexOf("?") < 0 ? "?" : "&") + p + "=" + d, o(l, e, m)
  }

  function n() {
    var t = document, e = "BackCompat" == t.compatMode ? t.body : t.documentElement;
    return e.offsetWidth
  }

  function a() {
    for (var o = document.querySelectorAll(".tt-video-box"), i = 0, a = [], d = 0; d < o.length; d++) {
      var c = o[d].getAttribute("tt-videoid") || "", u = o[d].getAttribute("tt-poster") || "";
      a.push({box: o[d], id: c, url: u});
      var m = 0;
      if (null == o[d].getAttribute("tt-datainited")) {
        o[d].setAttribute("tt-datainited", 1);
        var p = "http://i.snssdk.com/video/urls/1/toutiao/mp4/" + c;
        r(p, function (o) {
          var r = o.data.status, d = n();
          d > 640 && (d = 640);
          var u = 9 / 16;
          if (0 == o.code && 10 == r) {
            var p = o.data.video_list, h = p.video_1, v = h.main_url, g = e(v);
            i++;
            for (var b = navigator.userAgent.toLowerCase(), y = b.match(/msie ([\d.]+)/), f = 0; f < a.length; f++)if (o.data.video_id && a[f].id == o.data.video_id) {
              var x = '<video src="' + g + '" type="video/mp4" controls="" poster="' + a[f].url + '" preload="none" style="width:100%;"></video>';
              if (/iphone|ipad/i.test(navigator.userAgent) ? (x = '<video src="' + g + '" type="video/mp4" controls="" id="' + c + '" poster="' + a[f].url + '" preload="none" webkit-playsinline style="width:100%;"></video>', a[f].box.style.cssText += "margin:0 auto;") : /Android/i.test(navigator.userAgent) ? (x = '<video src="' + g + '" type="video/mp4" controls="" id="' + c + '" poster="' + a[f].url + '" preload="none" style="width:100%;"></video>', a[f].box.style.cssText += "margin:0 auto;") : y && y.length > 1 ? "8.0" == y[1] && (x = '<video src="' + g + '" type="video/mp4" controls="" poster="' + a[f].url + '.jpg" preload="none" style="width:100%;height:100%;"></video>', a[f].box.style.cssText += "width:" + d + "px;height:" + d * u + "px;margin:0 auto;background-color:#000") : (x = "true" == a[f].box.getAttribute("tt-autoplay") && "admin.bytedance.com" == location.hostname ? '<video class="reviewTab" src="' + g + '" type="video/mp4" controls="" poster="' + a[f].url + '" preload="none" autoplay="autoplay" style="width:100%;height:100%;"></video>' : '<video src="' + g + '" type="video/mp4" controls="" poster="' + a[f].url + '" preload="none" style="width:100%;height:100%;"></video>', a[f].box.style.cssText += "width:" + d + "px;height:" + d * u + "px;margin:0 auto;background-color:#000"), a[f].box.innerHTML = x, t.ttVideoStatus = 1, t.listener && listener.trigger("com.toutiao.m.videoContent", "video-loaded-successed"), l(), y && y.length > 1 && "8.0" == y[1]) {
                var w = document.createElement("video");
                w.setAttribute("src", g), w.setAttribute("type", "video/mp4"), w.setAttribute("controls", ""), w.setAttribute("poster", a[f].url + ".jpg"), w.setAttribute("preload", "none"), w.style.cssText += "width:100%;height:100%;", a[f].box.innerHTML = "", a[f].box.appendChild(w), m++, m == a.length && s()
              }
            }
          } else for (var f = 0; f < a.length; f++) {
            if (("admin.bytedance.com" == location.hostname || "mp.toutiao.com" == location.hostname || "www.kuaima.im" == location.hostname || "kuaima.toutiao.com" == location.hostname) && 10 != r) {
              var A = {
                20: "转码失败",
                30: "转码进行中",
                40: "视频id不存在",
                0: "unknown",
                1: "上传中",
                2: "上传失败",
                3: "等待上传",
                101: "视频被屏蔽",
                102: "视频被删除",
                103: "视频永久删除"
              }, k = "";
              for (var C in A)C == r && (k = A[C]);
              x = '<span style="display: inline-block;height: 100%;width: 100%;line-height: ' + d * u + 'px;background-color: rgba(0, 0, 0,0.9);color: #fff;">' + o.message + "：" + k + "</span>"
            }
            a[f].box.innerHTML = x, t.ttVideoStatus = 2, t.listener && listener.trigger("com.toutiao.m.videoContent", "video-loaded-failed"), a[f].box.style.cssText += "width:" + d + "px;height:" + d * u + "px;margin:0 auto;text-align: center;", l()
          }
        })
      }
    }
  }

  function d() {
    if ("admin.bytedance.com" == location.hostname) {
      var t = document.createElement("style");
      t.setAttribute("type", "text/css"), t.innerHTML = "video::-webkit-media-controls-panel {opacity:0.4 !important;}video::-webkit-media-controls-current-time-display {display:inline-block !important;}video::-webkit-media-controls-time-remaining-display {display:inline-block !important;}", document.getElementsByTagName("head")[0].appendChild(t)
    }
  }

  function s() {
    var t = document.createElement("script");
    t.src = "http://s0.pstatp.com/html5media1.1.8/html5media.min.js";
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(t, e)
  }

  function l() {
    var t = document.createElement("script");
    t.src = "http://s0.pstatp.com/tt_player/tt.player.log.js";
    var e = document.getElementsByTagName("script")[0];
    e.parentNode.insertBefore(t, e)
  }

  var c = new Array(-1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, -1, 62, -1, -1, -1, 63, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, -1, -1, -1, -1, -1, -1, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, -1, -1, -1, -1, -1, -1, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, -1, -1, -1, -1, -1);
  a(), d()
}(window);
