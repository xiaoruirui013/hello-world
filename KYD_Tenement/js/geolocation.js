/**
 * Created by Administrator on 2016/11/29.
 */
window.qq = window.qq || {}, qq.maps = qq.maps || {}, window.soso || (window.soso = qq), soso.maps || (soso.maps = qq.maps), qq.maps.Geolocation = function () {
    "use strict";
    var t = null, e = null, o = null, n = null, l = null, i = "_geoIframe_" + Math.ceil(1e7 * Math.random()), a = document.createElement("iframe"), u = null, s = null, c = null, r = null, d = function (d, m) {
        if (!d)return void alert("请输入key！");
        if (!m)return void alert("请输入referer！");
        var p = document.getElementById(i);
        if (!p) {
            a.setAttribute("id", i);
            var g = "https:";
            navigator.userAgent.match(/jdapp;iphone;/i) && (g = "http:"), a.setAttribute("src", g + "//apis.map.qq.com/tools/geolocation?key=" + d + "&referer=" + m), a.setAttribute("style", "display: none; width: 100%; height: 30%"), document.body ? document.body.appendChild(a) : document.write(a.outerHTML), window.addEventListener("message", function (i) {
                var a = i.data;
                if (a && "geolocation" == a.module)clearTimeout(r), t && t(a), t = null, e = null, o && o(a), o = null, n = null, l && l(a); else {
                    s = (new Date).getTime();
                    var d = s - u;
                    d >= c && (e && e(), e = null, t = null, clearTimeout(r)), n && n(), n = null, o = null
                }
            }, !1)
        }
    };
    return d.prototype.getLocation = function (o, n, l) {
        t = o, e = n, u = (new Date).getTime(), c = l && l.timeout ? +l.timeout : 1e4, clearTimeout(r), r = setTimeout(function () {
            e && e(), e = null
        }, c), document.getElementById(i).contentWindow.postMessage("getLocation", "*")
    }, d.prototype.getIpLocation = function (t, e) {
        o = t, n = e, document.getElementById(i).contentWindow.postMessage("getLocation.robust", "*")
    }, d.prototype.watchPosition = function (t) {
        l = t, document.getElementById(i).contentWindow.postMessage("watchPosition", "*")
    }, d.prototype.clearWatch = function () {
        l = null, document.getElementById(i).contentWindow.postMessage("clearWatch", "*")
    }, d
}();