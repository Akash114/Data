    !function(pe, _e) {
        var e, s, v, h, k, fe, b, w, i, o, x, A, S, me, t, he, ge, C, c, g, d, ye, u, y, F, E, p, a, ve, n, B, T, N, ke, r, L, l, z, be, I, we, j, M, xe, _, Ae, Se, Ce, D, f, Fe, O, H, R, Ee, m, P, $, U, W, q, V, Y, J, G, K, X, Be, Te, Ne, Q, Z, ee, ae, te, ne, ie, oe, re, le, se, ce, Le, de, ue, ze, Ie, je, Me, De, Oe, He, Re, Pe, $e, Ue, We, qe, Ve, Ye, Je, Ge, Ke, Xe, Qe, Ze;
        "object" == typeof pe.a2a && pe.a2a.init ? pe.a2a.init_all("page") : (e = this && this.__assign || function() {
            return (e = Object.assign || function(e) {
                    for (var a, t = 1, n = arguments.length; t < n; t++)
                        for (var i in a = arguments[t])
                            Object.prototype.hasOwnProperty.call(a, i) && (e[i] = a[i]);
                    return e
                }
            ).apply(this, arguments)
        }
            ,
            s = function() {}
            ,
            v = void 0,
            pe.a2a_config = pe.a2a_config || {},
            Ze = {
                localize: pe.a2a_localize || {},
                static_server: pe.a2a_config.static_server || "https://static.addtoany.com/menu",
                http_s: "http:" != _e.location.protocol ? "s" : "",
                templates: {},
                track_links: !1,
                track_links_key: "",
                callbacks: [],
                tracking_callback: v,
                add_services: !1,
                thanks: {},
                locale: v,
                no_3p: v,
                icon_color: v,
                color_main: v,
                color_bg: v,
                color_border: v,
                color_link_text: v,
                color_link_text_hover: v,
                counts: v,
                overlays: []
            },
            h = {
                onclick: !1,
                num_services: 8,
                prioritize: v,
                exclude_services: v,
                custom_services: v,
                delay: 0,
                show_menu: v,
                bookmarklet: v
            },
            k = {
                linkmedia: v,
                linkname: v,
                linkurl: v,
                linkname_escape: v,
                menu_type: v,
                orientation: v,
                target: v
            },
            fe = e(e(e({}, Ze), h), k),
            w = function(e) {
                for (var a in e)
                    fe[a] = e[a],
                    pe.a2a_config[a] && (pe.a2a_config[a] = e[a])
            }
            ,
            (b = function() {
                    for (var e in pe.a2a_config)
                        fe[e] = pe.a2a_config[e]
                }
            )(),
            i = "https://static.addtoany.com/menu",
            o = ["feed", "mail", "page"],
            x = "",
            S = A = 0,
            me = {},
            t = {
                feed: [],
                page: []
            },
            he = [],
            ge = [],
            g = c = C = v,
            d = _e.getElementsByTagName("head")[0],
            ye = function() {
                if (!_e.querySelector)
                    return !1;
                var e = _e.querySelector('meta[property="og:url"]')
                    , a = e ? e.getAttribute("content") : !!(a = _e.querySelector('link[rel="canonical"]')) && a.href;
                return a
            }(),
            u = _e.currentScript && _e.currentScript.nonce ? _e.currentScript.nonce : null,
            y = function() {
                for (var e = -1, a = _e.createElement("b"); a.innerHTML = "\x3c!--[if gt IE " + ++e + "]>1<![endif]--\x3e",
                    +a.innerHTML; )
                    ;
                return y = function() {
                    return e
                }
                    ,
                    e
            }
            ,
            F = navigator.userAgent.match(/Mobi/) || "screen"in pe && pe.screen.width < 1366,
            E = "ontouchend"in pe,
            p = {
                isReady: !1,
                ready: function(e) {
                    function a() {
                        if (!_e.body)
                            return setTimeout(function() {
                                p.ready(e)
                            });
                        e(),
                            p.isReady = !0
                    }
                    var t = function(e) {
                        !_e.addEventListener && "load" !== e.type && "complete" !== _e.readyState || (_e.removeEventListener("DOMContentLoaded", t, !1),
                            pe.removeEventListener("load", t, !1),
                            a())
                    };
                    "complete" === _e.readyState ? a() : _e.addEventListener && (_e.addEventListener("DOMContentLoaded", t, !1),
                        pe.addEventListener("load", t, !1))
                }
            },
            a = function() {
                x = "page",
                    Be("ready"),
                    a = s
            }
            ,
            ve = function(e, a) {
                b();
                var t, n, i, o, r, l, s, c, d, u, p, _, f = fe, a = a || {}, m = {}, h = null, g = {}, y = location.href;
                for (i in Xe(e),
                    a)
                    f[i] = a[i];
                for (i in f)
                    m[i] = f[i];
                if (n = f.target)
                    if ("string" == typeof n) {
                        if (t = n.substr(0, 1),
                            n = n.substr(1),
                        "." == t)
                            return B(we(I(n, _e)), e, a),
                                void (f.target = v);
                        0 <= (n = (h = be(n)).className).indexOf("a2a_kit") && n.indexOf("a2a_target") < 0 && (h = null)
                    } else
                        h = f.target;
                g.type = x,
                    g.node = h,
                    g.linkmedia = f.linkmedia,
                    g.linkname = f.linkname || _e.title || location.href,
                    g.linkurl = f.linkurl || location.href,
                    g.linkname_escape = f.linkname_escape,
                    g.linkname_implicit = !f.linkname_escape && (_e.title || y) == g.linkname,
                    g.linkurl_implicit = y == g.linkurl,
                    g.orientation = f.orientation || !1,
                    g.track_links = f.track_links || !1,
                    g.track_links_key = f.track_links_key || "",
                    w(k),
                "custom" == fe.track_links && (fe.track_links = pe.a2a_config.track_links = !1,
                    fe.track_links_key = pe.a2a_config.track_links_key = ""),
                    pe["a2a" + x + "_init"] = 1,
                    o = g,
                    r = m,
                    s = (me["n" + (A = ++S)] = o).node = z(o.node),
                    c = me[e],
                    d = _e.createElement("div"),
                    u = Ee(s)["a2a-media"],
                    p = Ee(s)["a2a-title"],
                    _ = Ee(s)["a2a-url"],
                    s ? (o.linkname_escape && (l = I("a2a_linkname_escape", s.parentNode)[0] || I("a2a_linkname_escape", s.parentNode.parentNode)[0]) && (o.linkname = l.textContent || l.innerText),
                        o.linkmedia = r.linkmedia = u || o.linkmedia,
                        o.linkname = r.linkname = p || o.linkname,
                        o.linkurl = r.linkurl = _ || o.linkurl,
                    p && (o.linkname_implicit = !1),
                    _ && (o.linkurl_implicit = !1),
                        "textContent"in _e ? d.textContent = o.linkname : d.innerText = o.linkname,
                    (d = d.childNodes[0]) && (o.linkname = d.nodeValue),
                        s.a2a_kit ? N(o, r) : T(o)) : c.show_menu || S--,
                    L()
            }
            ,
            n = function(a) {
                l(function(e) {
                    0 <= e.className.indexOf("a2a_follow") ? ve("feed", {
                        target: e
                    }) : ve(a || "page", {
                        target: e
                    })
                }, !0) || !be("a2a_menu_container") || L.a2a_done || ve(a)
            }
            ,
            B = function(e, a, t) {
                for (var n = 0, i = e.length; n < i; n++)
                    t.target = e[n],
                        ve(a, t)
            }
            ,
            T = function(e) {
                var t = e.node
                    , n = e.type
                    , i = "a2a" + n
                    , o = be(i + "_dropdown")
                    , a = be(i + "_full")
                    , r = t.firstChild
                    , l = me[n].onclick;
                t.getAttribute("onclick") && -1 != (t.getAttribute("onclick") + "").indexOf("a2a_") || t.getAttribute("onmouseover") && -1 != (t.getAttribute("onmouseover") + "").indexOf("a2a_") || (xe(t, "click", function(e) {
                    Ae(e),
                        _(e);
                    var a = !!P(o)
                        , e = _e.activeElement;
                    a ? R("none", n) : 2 !== l && (ne(t),
                        me[n].last_focus = e,
                        o.focus()),
                    (a && P(be(i + "_show_more_less")) || 2 === l) && "mail" != n && (te(),
                        me[n].last_focus = e)
                }),
                    xe(t, "click", _),
                    xe(t, "touchstart", _, !!M() && {
                        passive: !0
                    }),
                me[x].onclick || (me[x].delay ? t.onmouseenter = function() {
                            me[x].over_delay = setTimeout(function() {
                                ne(t)
                            }, me[x].delay)
                        }
                        : t.onmouseenter = function() {
                            ne(t)
                        }
                        ,
                        t.onmouseleave = function() {
                            O(),
                            me[x].over_delay && clearTimeout(me[x].over_delay)
                        }
                ),
                    xe(t, "mouseenter", function() {
                        a.style.willChange = "transform, opacity",
                            be("a2a_overlay").style.willChange = "backdrop-filter, opacity"
                    })),
                "a" == t.tagName.toLowerCase() && "page" == x && (t.href = "https://www.addtoany.com/share#url=" + encodeURIComponent(e.linkurl) + "&title=" + encodeURIComponent(e.linkname).replace(/'/g, "%27")),
                r && void 0 !== r.srcset && /\/share_save_171_16.(?:gif|png)$/.test(r.src) && (r.srcset = "https://static.addtoany.com/buttons/share_save_342_32.png 2x")
            }
            ,
            N = function(n, e) {
                function a(e, a) {
                    if (e && !Ce(e, o))
                        for (var t = 0, n = a ? me[p].services.most.concat(me[p].services.email) : he, i = n.length; t < i; t++)
                            if (e == n[t][1])
                                return [n[t][0], n[t][2], n[t][3], n[t][4], n[t][5]];
                    return !a && [e, e]
                }
                function r(e, a) {
                    for (var t, n = 0, i = e.attributes.length, o = a; n < i; n++)
                        (t = e.attributes[n]).name && "data-" == t.name.substr(0, 5) && (o[t.name.substr(5)] = t.value);
                    return o
                }
                function t() {
                    v = n.linkurl = Ee(_)["a2a-url"] || v,
                        b = n.linkname = Ee(_)["a2a-title"] || b,
                        w = n.linkmedia = Ee(_)["a2a-media"] || w,
                        Te(this)
                }
                function u(e, a, t) {
                    return e = {
                        node: a,
                        service: e,
                        title: b,
                        url: v,
                        media: w,
                        mediaNode: _.a2a_mediaNode
                    },
                    void 0 !== (e = Be("share", e)) && (e.url && (n.linkurl = e.url,
                        n.linkurl_implicit = !1),
                    e.title && (n.linkname = e.title,
                        n.linkname_implicit = !1),
                    e.media && (n.linkmedia = e.media),
                        Te(a),
                    e.stop && t && Ae(t)),
                        e
                }
                var p = n.type
                    , i = {
                    behance: {
                        name: "Behance",
                        icon: "behance",
                        color: "007EFF",
                        url: "https://www.behance.net/${id}"
                    },
                    facebook: {
                        name: "Facebook",
                        icon: "facebook",
                        color: "1877f2",
                        url: "https://www.facebook.com/${id}"
                    },
                    flickr: {
                        name: "Flickr",
                        icon: "flickr",
                        color: "FF0084",
                        url: "https://www.flickr.com/photos/${id}"
                    },
                    foursquare: {
                        name: "Foursquare",
                        icon: "foursquare",
                        color: "F94877",
                        url: "https://foursquare.com/${id}"
                    },
                    github: {
                        name: "GitHub",
                        icon: "github",
                        color: "2A2A2A",
                        url: "https://github.com/${id}"
                    },
                    instagram: {
                        name: "Instagram",
                        icon: "instagram",
                        color: "E4405F",
                        url: "https://www.instagram.com/${id}"
                    },
                    linkedin: {
                        name: "LinkedIn",
                        icon: "linkedin",
                        color: "007BB5",
                        url: "https://www.linkedin.com/in/${id}"
                    },
                    linkedin_company: {
                        name: "LinkedIn",
                        icon: "linkedin",
                        color: "007BB5",
                        url: "https://www.linkedin.com/company/${id}"
                    },
                    medium: {
                        name: "Medium",
                        icon: "medium",
                        color: "2A2A2A",
                        url: "https://medium.com/@${id}"
                    },
                    pinterest: {
                        name: "Pinterest",
                        icon: "pinterest",
                        color: "BD081C",
                        url: "https://www.pinterest.com/${id}"
                    },
                    snapchat: {
                        name: "Snapchat",
                        icon: "snapchat",
                        color: "2A2A2A",
                        url: "https://www.snapchat.com/add/${id}"
                    },
                    tumblr: {
                        name: "Tumblr",
                        icon: "tumblr",
                        color: "35465C",
                        url: "http://${id}.tumblr.com"
                    },
                    twitter: {
                        name: "Twitter",
                        icon: "twitter",
                        color: "1D9BF0",
                        url: "https://twitter.com/${id}"
                    },
                    vimeo: {
                        name: "Vimeo",
                        icon: "vimeo",
                        color: "1AB7EA",
                        url: "https://vimeo.com/${id}"
                    },
                    youtube: {
                        name: "YouTube",
                        icon: "youtube",
                        color: "FF0000",
                        url: "https://www.youtube.com/user/${id}"
                    },
                    youtube_channel: {
                        name: "YouTube Channel",
                        icon: "youtube",
                        color: "FF0000",
                        url: "https://www.youtube.com/channel/${id}"
                    }
                }
                    , o = ["facebook_like", "twitter_tweet", "pinterest_pin", "linkedin_share"]
                    , l = ke.avail
                    , s = fe.templates
                    , _ = n.node
                    , c = Ee(_)
                    , d = _.className
                    , f = _.a2a_follow
                    , m = we(_.getElementsByTagName("a"))
                    , h = m.length
                    , g = _e.createElement("div")
                    , y = encodeURIComponent
                    , v = n.linkurl
                    , k = y(n.linkurl).replace(/'/g, "%27")
                    , b = n.linkname
                    , w = (y(n.linkname).replace(/'/g, "%27"),
                    n.linkmedia)
                    , x = (w && y(n.linkmedia).replace(/'/g, "%27"),
                c["a2a-icon-color"] || fe.icon_color)
                    , A = x && x.split(",", 2)
                    , S = A && A[0]
                    , C = A && A[1]
                    , A = d.match(/a2a_kit_size_([\w\.]+)(?:\s|$)/)
                    , F = A ? A[1] : "16"
                    , A = F + "px"
                    , E = "a2a_svg a2a_s__default a2a_s_"
                    , B = {}
                    , T = {}
                    , N = n.linkurl_implicit && ye ? encodeURIComponent(ye).replace(/'/g, "%27") : k
                    , c = c["a2a-scroll-show"]
                    , L = 0 <= d.indexOf("a2a_vertical_style");
                F && !isNaN(F) && (Ve.load(),
                x && "unset" != x && Ve.works() && (S && "unset" != S && (B.backgroundColor = S),
                C && "unset" != C.trim() && (C = C.trim())),
                    _.style.lineHeight = T.height = T.lineHeight = A,
                    T.width = 2 * F + "px",
                    T.fontSize = "16px",
                L && (T.height = T.lineHeight = F / 2 + "px",
                    T.fontSize = "10px",
                    T.width = F + "px"),
                c && Fe(_, c),
                32 != F && (B.backgroundSize = B.height = B.lineHeight = B.width = A,
                    T.borderRadius = B.borderRadius = (.14 * F).toFixed() + "px",
                    T.fontSize = (parseInt(T.height, 10) + (L ? 4 : 0)) / 2 + "px")),
                    _.facebook_like = function() {
                        oe.href = v,
                            oe.width = "90",
                            oe.layout = "button_count",
                            oe.ref = "addtoany",
                            oe = r($, oe),
                            $.style.width = oe.width + "px";
                        var e, a, t, n, i = "v3.1", o = Je();
                        for (e in 2 == (o = o ? o.replace(/-/, "_") : "en_US").length && (o += "_" + o.toUpperCase()),
                            oe)
                            ie += " data-" + e + '="' + oe[e] + '"';
                        pe.fbAsyncInit || (pe.fbAsyncInit = function() {
                            pe.FB.init({
                                appId: "0",
                                status: !1,
                                xfbml: !0,
                                version: i
                            }),
                                pe.FB.Event.subscribe("edge.create", function(e, a) {
                                    je.track("Facebook Like", "facebook_like", e, "pages", "AddToAny Share/Save Button"),
                                        u("Facebook Like", $)
                                })
                        }
                            ,
                            (O = _e.createElement("span")).id = "fb-root",
                            _e.body.insertBefore(O, _e.body.firstChild)),
                        _.facebook_like_script || (t = "facebook-jssdk",
                            n = (a = _e).getElementsByTagName("script")[0],
                        a.getElementById(t) || ((a = a.createElement("script")).id = t,
                            a.src = "https://connect.facebook.net/" + o + "/sdk.js#xfbml=1&version=" + i,
                            n.parentNode.insertBefore(a, n))),
                            _.facebook_like_script = 1,
                            $.innerHTML = '<div class="fb-like"' + ie + "></div>";
                        try {
                            pe.FB.XFBML.parse($)
                        } catch (e) {}
                    }
                    ,
                    _.twitter_tweet = function() {
                        oe.url = v,
                            oe.lang = Je() || "en",
                            oe.related = "AddToAny,micropat";
                        var e = s.twitter
                            , a = "string" == typeof e ? e.lastIndexOf("@") : null;
                        a && -1 !== a && (a = (a = e.substr(++a).split(" ", 1))[0].replace(/:/g, "").replace(/\//g, "").replace(/-/g, "").replace(/\./g, "").replace(/,/g, "").replace(/;/g, "").replace(/!/g, ""),
                            oe.related = a + ",AddToAny"),
                            oe = r($, oe);
                        var t, n, i, o = _e.createElement("a");
                        for (t in o.className = "twitter-share-button",
                            oe)
                            o.setAttribute("data-" + t, oe[t]);
                        $.appendChild(o),
                        _.twitter_tweet_script || (n = "twitter-wjs",
                            a = (e = _e).getElementsByTagName("script")[0],
                        e.getElementById(n) || ((e = e.createElement("script")).id = n,
                            e.src = "https://platform.twitter.com/widgets.js",
                            a.parentNode.insertBefore(e, a),
                            pe.twttr = pe.twttr || (i = {
                                _e: [],
                                ready: function(e) {
                                    i._e.push(e)
                                }
                            }))),
                            _.twitter_tweet_script = 1;
                        try {
                            pe.twttr.ready(function(e) {
                                _.twitter_bind || (e.events.bind("click", function(r) {
                                    var e;
                                    !r || "tweet" != r.region || (e = function() {
                                        var e = r.target.src.split("#")[1] || "";
                                        if (e && -1 < e.indexOf("url=")) {
                                            for (var a = {}, t = e.split("&"), n = t.length, i = 0; i < n; i++) {
                                                var o = t[i].split("=");
                                                a[o[0]] = o[1]
                                            }
                                            return a
                                        }
                                        return !1
                                    }()) && e.url && (je.track("Twitter Tweet", "twitter_tweet", unescape(e.url), "pages", "AddToAny Share/Save Button"),
                                        u("Twitter Tweet", $))
                                }),
                                    _.twitter_bind = 1),
                                e.widgets && e.widgets.load()
                            })
                        } catch (e) {}
                    }
                    ,
                    _.pinterest_pin = function() {
                        oe["pin-config"] = "beside",
                            oe["pin-do"] = "buttonPin",
                            oe.media = w,
                            oe.url = v,
                            oe = r($, oe);
                        var e, a, t, n = _e.createElement("a");
                        for (e in oe)
                            n.setAttribute("data-" + e, oe[e]);
                        "beside" == oe["pin-config"] && "buttonPin" == oe["pin-do"] && ($.style.width = "76px"),
                            n.href = "https://www.pinterest.com/pin/create/button/?url=" + oe.url + (oe.media ? "&media=" + oe.media : "") + (oe.description ? "&description=" + encodeURIComponent(oe.description).replace(/'/g, "%27") : ""),
                            xe($, "click", function() {
                                je.track("Pinterest Pin", "pinterest_pin", v, "pages", "AddToAny Share/Save Button"),
                                    u("Pinterest Pin", $)
                            }),
                            $.appendChild(n),
                        _.pinterest_pin_script || (t = (a = _e).createElement("script"),
                            a = a.getElementsByTagName("script")[0],
                            t.async = !0,
                            t.src = "https://assets.pinterest.com/js/pinit.js",
                            a.parentNode.insertBefore(t, a)),
                            _.pinterest_pin_script = 1
                    }
                    ,
                    _.linkedin_share = function() {
                        for (var e in oe.onsuccess = "kit.linkedin_share_event",
                            oe.url = v,
                            oe = r($, oe))
                            ie += " data-" + e + '="' + oe[e] + '"';
                        var a, t;
                        _.linkedin_share_event = function() {
                            je.track("LinkedIn Share", "linkedin_share", v, "pages", "AddToAny Share/Save Button"),
                                u("LinkedIn Share", $)
                        }
                            ,
                        _.linkedin_share_script || (t = (a = _e).createElement("script"),
                            a = a.getElementsByTagName("script")[0],
                            t.type = "text/javascript",
                            t.async = !0,
                            t.src = "https://platform.linkedin.com/in.js",
                            a.parentNode.insertBefore(t, a)),
                            _.linkedin_share_script = 1,
                            $.innerHTML = '<script type="IN/Share"' + ie + "><\/script>"
                    }
                ;
                for (var z, I, j, M, D = 0; D < h; D++) {
                    var O, H, R, P, $ = m[D], U = $.className, W = U.match(/a2a_button_([\w\.]+)(?:\s|$)/), q = 0 <= U.indexOf("a2a_dd"), V = 0 <= U.indexOf("a2a_counter"), Y = !!W && W[1], J = $.childNodes, G = a(Y), K = f && i[Y] ? i[Y].name : G[0], X = " noopener", Q = "_blank", Z = f && i[Y] ? i[Y].icon : G[1], ee = f && i[Y] ? i[Y].color : G[2] || "CAE0FF", ae = G[3] || {}, te = ae.type, ne = G[4], W = !1, G = !1, ie = "", oe = {};
                    if (q ? (e.target = $,
                        ve(p, e),
                        ee = "0166FF",
                        Z = Y = "a2a",
                        G = V,
                    0 <= d.indexOf("a2a_floating_style") && ($.a2a_floating = 1)) : "feed" == Y || "print" == Y ? X = Q = "" : "copy_link" == Y ? xe($, "mouseenter", function() {
                        be("a2a_modal").style.willChange = "transform, opacity",
                            be("a2a_overlay").style.willChange = "backdrop-filter, opacity"
                    }) : V && Y && Ce(Y, l) ? G = !0 : Y && Ce(Y, o) && (_[Y](),
                        W = !0),
                    Y && !Ce(Y, ["google_plus", "stumbleupon"]) && !W) {
                        if (q || ($.target = Q,
                            !f || !i[Y] && a(Y, !0) ? "feed" == Y ? $.href = $.href || n.linkurl : ($.href = "/#" + Y,
                                "js" === te ? xe($, "click", t) : (xe($, "mousedown", t),
                                    xe($, "keydown", t)),
                                $.rel = "nofollow" + X) : $.href = (I = Y,
                                M = j = void 0,
                                M = r(z = $, {})["a2a-follow"],
                                I = i[I],
                            (j = M && I ? I.url.replace("${id}", M) : j) || z.href),
                            $.a2a = {},
                            $.a2a.customserviceuri = ne,
                            $.a2a.stype = te,
                            $.a2a.linkurl = n.linkurl,
                            $.a2a.servicename = K,
                            $.a2a.safename = Y,
                        ae.src && ($.a2a.js_src = ae.src),
                        ae.url && ($.a2a.url = ae.url),
                        ae.pu && ($.a2a.popup = 1),
                        ae.na && ($.a2a.na = 1),
                        ae.media && ($.a2a.media = 1),
                            _.a2a_codes = _.a2a_codes || [],
                            _.a2a_codes.push(Y),
                        f || xe($, "click", function(r, l, s, c, d) {
                            return function(e) {
                                var a = "js" === d.a2a.stype
                                    , t = screen.height
                                    , n = "event=service_click&url=" + y(location.href) + "&title=" + y(_e.title || "") + "&ev_service=" + y(r) + "&ev_service_type=kit&ev_menu_type=" + p + "&ev_url=" + y(s) + "&ev_title=" + y(c).replace(/'/g, "%27")
                                    , i = u(l, d, e)
                                    , o = !(!i || !i.stop)
                                    , i = d.a2a.js_skip;
                                "feed" == p || d.a2a.url || d.a2a.js_src || Le(_),
                                !d.a2a.popup || Se(e) || "_blank" !== d.target || a || (Ae(e),
                                    pe.open(d.href, "_blank", "toolbar=0,personalbar=0,resizable,scrollbars,status,width=550,height=450,top=" + (450 < t ? Math.round(t / 2 - 225) : 40) + ",left=" + Math.round(screen.width / 2 - 275))),
                                !d.a2a.externalJS && !d.a2a.literalJS || o || i || Ne(d.a2a),
                                a && !i && Ae(e),
                                i && delete d.a2a.js_skip,
                                    Re(p, n),
                                    je.track(l, r, s, "pages", "AddToAny Share/Save Button")
                            }
                        }(Y, K, v, b, $))),
                            J.length) {
                            for (var re, le, se, ce = 0, de = J.length; ce < de; ce++)
                                if (se = (le = "string" == typeof (re = J[ce].className)) && ("a2a_label" === re || 0 <= re.indexOf("a2a_ignore")),
                                1 == J[ce].nodeType && (se || (P = !0),
                                le && 0 <= re.indexOf("a2a_count"))) {
                                    R = !0;
                                    break
                                }
                            if (!P) {
                                for (var ue in (O = _e.createElement("span")).className = E + Z + " a2a_img_text",
                                ee && (O.style.backgroundColor = "#" + ee),
                                "pending" !== (H = Ve.get(Z, O, C)) && (O.innerHTML = H),
                                    B)
                                    O.style[ue] = B[ue];
                                $.insertBefore(O, J[0])
                            }
                        } else {
                            for (var ue in (O = _e.createElement("span")).className = E + Z,
                            ee && (O.style.backgroundColor = "#" + ee),
                            "pending" !== (H = Ve.get(Z, O, C)) && (O.innerHTML = H),
                                B)
                                O.style[ue] = B[ue];
                            $.appendChild(O),
                                (O = _e.createElement("span")).className = "a2a_label",
                                O.innerHTML = K || ("feed" == p ? fe.localize.Subscribe : fe.localize.Share),
                            K || (O.className += " a2a_localize",
                                O.setAttribute("data-a2a-localize", "inner," + ("feed" == p ? "Subscribe" : "Share"))),
                                $.appendChild(O)
                        }
                        if ((G = L && F && F < 20 ? !1 : G) && !R) {
                            for (var ue in (O = _e.createElement("span")).className = "a2a_count",
                                O.a2a = {},
                                O.a2a.kit = _,
                                T)
                                O.style[ue] = T[ue];
                            $.appendChild(O),
                                q ? (O.a2a.is_a2a_dd_counter = 1,
                                    _.a2a_dd_counter = O,
                                    ke.get("facebook", O, N)) : ke.get(Y, O, N)
                        }
                        "a2a_dd" != U && ge.push($)
                    }
                }
                0 <= d.indexOf("a2a_default_style") && (g.style.clear = "both",
                    _.appendChild(g))
            }
            ,
            ke = {
                get: function(o, r, e, l) {
                    fe.counts;
                    var s, a, t = decodeURIComponent(e), n = ke.bonus(o, t, e, r.a2a.kit), c = "", i = ke[o], d = i.api, u = (i.cb,
                        r.a2a.is_a2a_dd_counter);
                    !l && n && (c = "2",
                        ke.get(o, r, n, !0)),
                        "string" != typeof (s = i[t] = i[t] || {}).num || l ? "number" != typeof s.num ? (s.queued = s.queued || [],
                            s.queued.push(r),
                            i.n = i.n || 0,
                            i.n++,
                            i["cb" + i.n] = function(e) {
                                var a, t = ke[o].cb(e, r);
                                if (void 0 !== t) {
                                    if ("string" == typeof t && "facebook" == o)
                                        return "empty" == t ? a = "Note: Facebook no longer provides public API access to share counts. AddToAny is soon launching a premium service to manage private API access to Facebook and display share counts." : "limit" == t && (a = "Facebook's public share counts API has reached its request limit from your connection. Try again later."),
                                        console && "function" == typeof console.log && console.log("%c" + a, "color:#1877f2"),
                                        l || (r.style.display = "none"),
                                            void (s.num = "error");
                                    for (var n, i = 0; i < s.queued.length; i++)
                                        n = s.queued[i],
                                            s.num = t,
                                            n.a2a.is_a2a_dd_counter ? ke.sum(n, t, o + c) : ke.set(n, t, o + c)
                                }
                            }
                            ,
                        1 == s.queued.length && (a = d[0] + e + (d[1] || "&callback") + "=a2a.counters." + o + ".cb" + i.n,
                            p.ready(function() {
                                de(a)
                            }))) : u ? ke.sum(r, s.num, o + c) : ke.set(r, s.num, o + c) : r.style.display = "none"
                },
                set: function(e, a, t) {
                    var n = a;
                    a = void 0 !== e.a2a.last_count ? e.a2a.last_count + a : a,
                        e.innerHTML = "<span>" + ke.format(a) + "</span>",
                    "a2a" != t && (e.a2a.last_count = n,
                        ke.sum(e, n, t))
                },
                sum: function(e, a, t) {
                    var n = e.a2a.kit
                        , i = n.a2a_counts_sum || 0
                        , e = n.a2a_counts_summed || [];
                    "a2a" != t && -1 === e.indexOf(t) && (i = n.a2a_counts_sum = i + a,
                        (e = n.a2a_counts_summed = e || []).push(t)),
                    n.a2a_dd_counter && ke.set(n.a2a_dd_counter, i, "a2a")
                },
                format: function(e) {
                    var a = ke.format
                        , t = "localize";
                    return a[t] || (a.locale = Je(),
                            a[t] = "object" == typeof Intl && Intl && "function" == typeof Intl.NumberFormat ? function(e) {
                                    return e.toLocaleString(a.locale, {
                                        maximumFractionDigits: 1
                                    })
                                }
                                : function(e, a) {
                                    return a && "decimal" === a ? Math.round(10 * e) / 10 : e = (e += "").charAt(0) + "," + e.substring(1)
                                }
                    ),
                        e = 999 < e ? e < 1e6 ? 1e4 < e ? a[t](e / 1e3, "decimal") + "k" : a[t](e) : e < 1e9 ? a[t](e / 1e6, "decimal") + "M" : "1B+" : e
                },
                bonus: function(e, a, t, n) {
                    var i, o, r = fe.counts, l = "%3A%2F%2F";
                    return r && (r.recover_protocol && "http" === r.recover_protocol && (i = t.replace(/^https%/, "http%"),
                        a = decodeURIComponent(i)),
                    r.recover_domain && (i = encodeURIComponent(a.replace(/^(https?\:\/\/)(?:[^\/?#]+)([\/?#]|$)/i, "$1" + r.recover_domain + "$2")),
                        a = decodeURIComponent(i)),
                    r.recover && "function" == typeof r.recover && (n = {
                        url: (o = _e.createElement("a")).href = a,
                        pathParts: o.pathname.split("/"),
                        domain: o.hostname,
                        protocol: o.protocol,
                        kit: n
                    },
                        i = encodeURIComponent(r.recover(n)))),
                    !(!i || i === t || -1 !== ["tumblr"].indexOf(e) && i.split(l).pop() === t.split(l).pop()) && i
                },
                avail: ["facebook", "pinterest", "reddit", "tumblr"],
                facebook: {
                    api: ["https://graph.facebook.com/?fields=og_object%7Bengagement%7D&id=", "&callback"],
                    cb: function(e, a) {
                        return e && e.og_object && e.og_object.engagement && !isNaN(e.og_object.engagement.count) ? e.og_object.engagement.count : e && e.error && e.error.code && 4 === e.error.code ? "limit" : "empty"
                    }
                },
                pinterest: {
                    api: ["https://widgets.pinterest.com/v1/urls/count.json?url="],
                    cb: function(e, a) {
                        if (e && !isNaN(e.count))
                            return e.count
                    }
                },
                reddit: {
                    api: ["https://www.reddit.com/api/info.json?url=", "&jsonp"],
                    cb: function(e, a) {
                        var t = e.data;
                        if (e && t && t.children) {
                            for (var n, i = 0, o = [], r = t.children; i < r.length; i++)
                                (n = r[i].data) && !isNaN(n.ups) && o.push(n.ups);
                            return 0 < o.length ? Math.max.apply(null, o) : 0
                        }
                    }
                },
                tumblr: {
                    api: ["https://api.tumblr.com/v2/share/stats?url="],
                    cb: function(e, a) {
                        if (e && e.response && !isNaN(e.response.note_count))
                            return e.response.note_count
                    }
                }
            },
            r = function() {
                var e = fe.overlays || []
                    , a = !!M() && {
                    passive: !0
                }
                    , t = pe.innerWidth
                    , n = pe.innerHeight
                    , p = t && (t < 375 || n < 375) ? 150 : 200
                    , _ = location.href
                    , f = _e.title || _;
                for (var i = 0, o = e.length; i < o; i++) {
                    var r, l = e[i], s = l.services || ["pinterest", "facebook"], c = "", d = l.html, u = l.position, m = l.style, h = l.size || 32, g = l.target, l = l.useImage, y = Math.round, u = u && 2 < u.length ? u.split(" ") : ["top", "left"], m = !m || "horizontal" !== m && "default" !== m ? "vertical" : "default", g = g || "img";
                    if (d)
                        _e.body.insertAdjacentHTML("beforeend", d),
                            r = _e.body.lastChild;
                    else {
                        for (var v = 0, k = s.length; v < k; v++)
                            c += '<a class="a2a_button_' + s[v] + '"></a>';
                        (r = _e.createElement("div")).className = "a2a_kit a2a_kit_size_" + h + " a2a_overlay_style a2a_" + m + "_style",
                            r.innerHTML = c,
                            _e.body.insertBefore(r, null)
                    }
                    r.style.display = "none",
                        r.style.position = "absolute",
                        r.setAttribute("data-a2a-title", f),
                        r.setAttribute("data-a2a-url", _),
                        xe(_e.body, "mouseover", function(a, t, n, i) {
                            return function(e) {
                                !function(e, a, t, n, i) {
                                    var o, r, l = (r = e).target ? 3 === r.target.nodeType ? r.target.parentNode : r.target : r.srcElement, s = l, c = 0, d = 0, u = l.longDesc;
                                    if (j(l, n) && "false" !== l.getAttribute("data-a2a-overlay"))
                                        e = l.width < p || l.height < p,
                                            r = "naturalWidth"in l && (l.naturalWidth < 200 || l.naturalHeight < 200),
                                        e || r || j(l, "header img,footer img") || (n = $(l, "scroll"),
                                            a.style.display = "",
                                            e = a.clientHeight || a.offsetHeight,
                                            r = a.clientWidth || a.offsetWidth,
                                        t[0] && ("bottom" === t[0] ? d = l.height - e : "center" === t[0] && (d = y((l.height - e) / 2))),
                                        t[1] && ("right" === t[1] ? c = l.width - r : "center" === t[1] && (c = y((l.width - r) / 2))),
                                            c = n.left + c,
                                            d = n.top + d,
                                            a.style.left = c + "px",
                                            a.style.top = d + "px",
                                            a.setAttribute("data-a2a-media", l.src),
                                            (a.a2a_mediaNode = l).alt ? a.setAttribute("data-a2a-title", l.alt) : a.setAttribute("data-a2a-title", f),
                                            !u || "#" !== u.substr(0, 1) && "http" !== u.substr(0, 4) ? i ? a.setAttribute("data-a2a-url", l.src) : a.setAttribute("data-a2a-url", _) : (u = "#" === u.substr(0, 1) ? _.split("#")[0] + l.longDesc : u,
                                                a.setAttribute("data-a2a-url", u)));
                                    else if ("none" !== a.style.display) {
                                        for (; (o = s) && "body" !== s.tagName.toLowerCase(); ) {
                                            if (o === a)
                                                return;
                                            s = s.parentNode
                                        }
                                        a.style.display = "none"
                                    }
                                }(e, a, t, n, i)
                            }
                        }(r, u, g, l), a)
                }
                fe.overlays = []
            }
            ,
            L = function() {
                var e = me[x]
                    , a = A;
                e.bookmarklet && (e.no_hide = 1,
                    C = a,
                    ne()),
                e.show_menu && (e.no_hide = 1,
                    C = a,
                    ne(null, e.show_menu),
                    e.show_menu = v),
                    L.a2a_done = 1
            }
            ,
            l = function(o, e) {
                var a = I
                    , t = a("a2a_kit", _e)
                    , a = we(_e.getElementsByName("a2a_dd")).concat(a("a2a_dd", _e));
                function n(e) {
                    for (var a, t, n = 0, i = e.length; n < i; n++)
                        if (t = (void 0 === (a = e[n]).a2a_index || "" === a.a2a_index) && a.className.indexOf("a2a_target") < 0 && a.parentNode.className.indexOf("a2a_kit") < 0 ? o(a) : t)
                            return t;
                    return null
                }
                if (e)
                    return n(t) || n(a);
                n(t.concat(a))
            }
            ,
            z = function(e) {
                function a(e) {
                    0 <= e.className.indexOf("a2a_kit") && (e.a2a_kit = 1,
                    0 <= e.className.indexOf("a2a_follow") && (e.a2a_follow = 1))
                }
                return e ? (e.a2a_index = A,
                    a(e),
                    e) : l(function(e) {
                    return e.a2a_index = A,
                        a(e),
                        e
                }, !0)
            }
            ,
            be = function(e) {
                return _e.getElementById(e)
            }
            ,
            I = function(e, a, t) {
                for (var n, i = (a = a || be("a2a" + x + "_dropdown")).getElementsByClassName(e), o = t ? new RegExp("\\b" + t + "\\b","i") : null, r = [], l = 0, s = i.length; l < s; l += 1)
                    n = i[l],
                    o && !o.test(n.nodeName) || r.push(n);
                return r
            }
            ,
            we = function(e) {
                for (var a = [], t = e.length, n = 0; n < t; n++)
                    a[a.length] = e[n];
                return a
            }
            ,
            j = function(e, a) {
                var t, n = "MatchesSelector", i = "ms" + n, n = "webkit" + n;
                if (e.matches)
                    t = "matches";
                else if (e[i])
                    t = i;
                else {
                    if (!e[n])
                        return !(j = function(e, a) {
                                return !1
                            }
                        );
                    t = n
                }
                return (j = function(e, a) {
                        return e[t](a)
                    }
                )(e, a)
            }
            ,
            M = function() {
                var e = !1;
                try {
                    var a = Object.defineProperty({}, "passive", {
                        get: function() {
                            e = !0
                        }
                    });
                    pe.addEventListener("test", null, a)
                } catch (e) {}
                return M = function() {
                    return e
                }
                    ,
                    e
            }
            ,
            xe = function(e, a, t, n) {
                var i;
                if (e.addEventListener)
                    return "object" == typeof n && (i = !!n.useCapture,
                        n = M() ? n : i),
                        e.addEventListener(a, t, n),
                        {
                            destroy: function() {
                                e.removeEventListener(a, t, n)
                            }
                        };
                function o() {
                    t.call(e, pe.event)
                }
                return e.attachEvent("on" + a, o),
                    {
                        destroy: function() {
                            e.detachEvent("on" + a, o)
                        }
                    }
            }
            ,
            _ = function(e) {
                (e = e || pe.event).cancelBubble = !0,
                e.stopPropagation && e.stopPropagation()
            }
            ,
            Ae = function(e) {
                e.preventDefault ? e.preventDefault() : e.returnValue = !1
            }
            ,
            Se = function(e) {
                return !!(e.defaultPrevented || !1 === e.returnValue || void 0 === e.defaultPrevented && e.getPreventDefault && e.getPreventDefault())
            }
            ,
            Ce = function(e, a, t, n, i) {
                if ("object" == typeof a) {
                    e = e.toLowerCase();
                    for (var o, r = a.length, l = 0; l < r; l++)
                        if (o = n ? a[l][n] : a[l],
                            o = i ? o[i] : o,
                            t) {
                            if (e == o.toLowerCase())
                                return a[l]
                        } else if (-1 != e.indexOf(o.toLowerCase()) && "" !== o)
                            return a[l]
                }
                return !1
            }
            ,
            D = function(e, a) {
                var t, n, i, o = [];
                for (t in e)
                    e.hasOwnProperty(t) && (n = a ? a + "[" + t + "]" : t,
                        i = e[t],
                        o.push("object" == typeof i ? D(i, n) : encodeURIComponent(n) + "=" + encodeURIComponent(i)));
                return o.join("&")
            }
            ,
            f = function(t, n, i) {
                void 0 === i && (i = {});
                function o() {
                    d = !1 === i.leading ? 0 : u(),
                        r = null,
                        c = t.apply(l, s),
                    r || (l = s = null)
                }
                function e() {
                    var e = u();
                    d || !1 !== i.leading || (d = e);
                    var a = n - (e - d);
                    return l = this,
                        s = arguments,
                        a <= 0 || n < a ? (r && (clearTimeout(r),
                            r = null),
                            d = e,
                            c = t.apply(l, s),
                        r || (l = s = null)) : r || !1 === i.trailing || (r = setTimeout(o, a)),
                        c
                }
                var r, l, s, c, d = 0, u = Date.now || function() {
                        return (new Date).getTime()
                    }
                ;
                return e.cancel = function() {
                    clearTimeout(r),
                        d = 0,
                        r = l = s = null
                }
                    ,
                    e
            }
            ,
            Fe = function(e, a) {
                (a = a.split(","))[0] && a[0].trim(),
                a[1] && a[1].trim();
                var n, t = parseInt(a[0], 10) || 0, a = parseInt(a[1], 10) || 0, e = function(e, a, t) {
                    var n = pe.pageYOffset
                        , i = _e.documentElement.scrollHeight - pe.innerHeight - n;
                    e.style.display = a <= n && t <= i ? "" : "none"
                }
                    .bind(null, e, t, a);
                (t || a) && (Fe.handlers = Fe.handlers || [],
                    (n = Fe.handlers).push(e),
                n.length < 2 && (a = f(function() {
                    for (var e = 0, a = n, t = a.length; e < t; e++)
                        a[e]()
                }, 20),
                    pe.addEventListener("scroll", a)),
                    e())
            }
            ,
            O = function() {
                var e = x
                    , a = "a2a" + e
                    , t = me[e];
                P(be(a + "_dropdown")) && "none" === m(be(a + "_full"), "display") && (t.out_delay = setTimeout(function() {
                    R("none", e),
                        t.out_delay = null
                }, 501))
            }
            ,
            H = function() {
                var e = x = me["n" + (C || A)].type;
                me[e] && me[e].out_delay && clearTimeout(me[e].out_delay)
            }
            ,
            R = function(e, a) {
                var t, n;
                "none" == e && me[a].no_hide || (t = be("a2a" + a + "_dropdown"),
                    _e.activeElement,
                    n = ne.key_listener,
                    t.style.display = e,
                    H(),
                    "none" == e ? (ne["doc_click_listener_" + a].destroy(),
                        delete me[a].doc_click_close_mini,
                    n && n[a] && n[a].destroy()) : o.forEach(function(e) {
                        e !== a && ne["doc_click_listener_" + e] && R("none", e)
                    }))
            }
            ,
            Ee = function(e) {
                if (!e)
                    return {};
                for (var a, t = 0, n = e.attributes.length, i = {}; t < n; t++)
                    (a = e.attributes[t]).name && "data-" == a.name.substr(0, 5) && (i[a.name.substr(5)] = a.value);
                return i
            }
            ,
            m = function(e, a) {
                return e ? e.currentStyle ? e.currentStyle[a.replace(/-(\w)/gi, function(e, a) {
                    return a.toUpperCase()
                })] : pe.getComputedStyle(e, null).getPropertyValue(a) : null
            }
            ,
            P = function(e) {
                e = m(e, "display");
                return !(!e || "none" === e)
            }
            ,
            $ = function(e, a) {
                var t = Math.round
                    , n = "scroll" === a ? q("w") : 0
                    , a = "scroll" === a ? q("h") : 0;
                return void 0 === e.getBoundingClientRect ? U(e) : {
                    left: t((e = e.getBoundingClientRect()).left + n),
                    top: t(e.top + a)
                }
            }
            ,
            U = function(e) {
                for (var a = 0, t = 0; a += e.offsetLeft || 0,
                    t += e.offsetTop || 0,
                    e = e.offsetParent; )
                    ;
                return {
                    left: a,
                    top: t
                }
            }
            ,
            W = function(e) {
                var a = 0
                    , t = 0;
                return "number" == typeof pe.innerWidth ? (a = pe.innerWidth,
                    t = pe.innerHeight) : _e.documentElement && (_e.documentElement.clientWidth || _e.documentElement.clientHeight) ? (a = _e.documentElement.clientWidth,
                    t = _e.documentElement.clientHeight) : _e.body && (_e.body.clientWidth || _e.body.clientHeight) && (a = _e.body.clientWidth,
                    t = _e.body.clientHeight),
                    "w" == e ? a : t
            }
            ,
            q = function(e) {
                var a = 0
                    , t = 0;
                return "number" == typeof pe.pageYOffset ? (a = pe.pageXOffset,
                    t = pe.pageYOffset) : _e.body && (_e.body.scrollLeft || _e.body.scrollTop) ? (a = _e.body.scrollLeft,
                    t = _e.body.scrollTop) : _e.documentElement && (_e.documentElement.scrollLeft || _e.documentElement.scrollTop) && (a = _e.documentElement.scrollLeft,
                    t = _e.documentElement.scrollTop),
                    "w" == e ? a : t
            }
            ,
            V = function() {
                be("a2a" + x + "_show_more_less");
                te()
            }
            ,
            Y = function() {
                var e = be("a2a" + x + "_find");
                "none" != be("a2a" + x + "_find_container").style.display && e.focus()
            }
            ,
            J = function(e) {
                for (var a = me[e || x].main_services_col_1, t = a.length, n = 0; n < t; n++)
                    a[n].style.display = ""
            }
            ,
            G = function() {
                var e = me[x].main_services
                    , a = e.length
                    , t = be("a2a" + x + "_find").value;
                if ("" !== t)
                    for (var n, i = t.split(" "), o = 0; o < a; o++)
                        n = e[o].a2a.serviceNameLowerCase,
                            Ce(n, i, !1) ? e[o].style.display = "" : e[o].style.display = "none";
                else
                    J()
            }
            ,
            K = function(e) {
                var a, t, n = _e.getElementsByTagName("meta"), i = n.length;
                if ((a = pe.getSelection ? pe.getSelection() + "" : a) && "" !== a)
                    return a;
                if (me["n" + A].linkurl === location.href && -1 === ["facebook", "twitter", "linkedin"].indexOf(e))
                    for (var o, r, l = 0; l < i; l++)
                        if (o = (o = n[l].getAttribute("name")) ? o.toLowerCase() : "",
                            r = (r = n[l].getAttribute("property")) ? r.toLowerCase() : "",
                        o && "description" === o || r && "og:description" === r) {
                            t = n[l].getAttribute("content");
                            break
                        }
                return t ? t.substring(0, 1200) : ""
            }
            ,
            X = function(e) {
                var a = me[e]
                    , e = "a2a" + e;
                a.main_services_col_1 = I("a2a_i", be(e + "_full_services"), "a"),
                    a.main_services = a.main_services_col_1,
                    a.email_services = I("a2a_i", be(e + "_2_col1"), "a"),
                    a.all_services = a.main_services.concat(a.email_services)
            }
            ,
            Be = function(e, a) {
                var t = fe.callbacks || []
                    , n = fe.tracking_callback
                    , i = {};
                n && (n[e] ? t.push(n) : n[0] == e ? (i[e] = n[1],
                    t.push(i)) : "function" == typeof n && (i[e] = n,
                    t.push(i)),
                    fe.tracking_callback = null);
                for (var o, r, l = 0, s = t.length; l < s; l++)
                    if ("function" == typeof (o = t[l][e]) && (r = o(a),
                    "ready" == e && (o = null),
                    void 0 !== r))
                        return r
            }
            ,
            Te = function(e) {
                var a, t, n = location.href, i = _e.title || n, o = e.parentNode, r = me["n" + (o.a2a_index || o.parentNode.a2a_index || C || A)], l = r.type, s = e.a2a.safename, c = r.linkurl_implicit && n != r.linkurl ? n : r.linkurl, d = encodeURIComponent(c).replace(/'/g, "%27"), u = r.linkname_implicit && i != r.linkname ? i : r.linkname, p = encodeURIComponent(u).replace(/'/g, "%27"), _ = r.linkmedia, f = !!_ && encodeURIComponent(_).replace(/'/g, "%27"), m = encodeURIComponent(K(s)).replace(/'/g, "%27"), o = !r.track_links || "page" != l && "mail" != l ? "" : "&linktrack=" + r.track_links + "&linktrackkey=" + encodeURIComponent(r.track_links_key), n = e.a2a.customserviceuri || !1, h = e.a2a.stype, i = e.a2a.js_src, g = e.a2a.url, u = e.a2a.media, _ = e.a2a.na, y = fe.templates, v = y[s], k = "email", r = navigator.userAgent, r = -1 != r.indexOf("Safari") && -1 == r.indexOf("Chrome");
                function b(e) {
                    return encodeURIComponent(e).replace(/'/g, "%27").replace(/%24%7Blink%7D/g, "${link}").replace(/%24%7Blink_noenc%7D/g, "${link_noenc}").replace(/%24%7Blink_nohttp%7D/g, "${link_nohttp}").replace(/%24%7Bmedia%7D/g, "${media}").replace(/%24%7Btitle%7D/g, "${title}").replace(/%24%7Btitle_noenc%7D/g, "${title_noenc}").replace(/%24%7Bnotes%7D/g, "${notes}")
                }
                if (u && f)
                    e.a2a.js_skip = 1,
                        e.target = "_blank";
                else if (h && "js" == h && i)
                    e.target = "_top",
                        "javascript:" == i.substr(0, 11) ? (a = i.replace("${link}", c.replace(/'/g, "\\'")),
                            e.a2a.literalJS = a.substr(11)) : e.a2a.externalJS = i,
                        a = "#" + s;
                else if (g && (s != k || s == k && (F || r)) && !o) {
                    if (e.target = "_top",
                    "object" == typeof v)
                        for (var w in v)
                            g = Pe(g, w, b(v[w]));
                    else
                        "string" == typeof v && (g = Pe(g, "text", b(v)));
                    a = g.replace(/\$\{link\}/g, d).replace(/\$\{media\}/g, f).replace(/\$\{link_noenc\}/g, c).replace(/\$\{link_nohttp\}/g, c.replace(/^https?:\/\//, "")).replace(/\$\{title\}/g, p)
                } else
                    n && "undefined" != n && (a = n.replace(/A2A_LINKNAME_ENC/, p).replace(/A2A_LINKURL_ENC/, d).replace(/A2A_LINKNOTE_ENC/, m));
                return F && _ && (e.target = "_top"),
                    e.href = a || "http" + fe.http_s + "://www.addtoany.com/add_to/" + s + "?linkurl=" + d + "&linkname=" + p + (f ? "&linkmedia=" + f : "") + o + (t = "",
                        v ? t = "&" + D({
                            template: v
                        }) : y[k] && h && h == k && (t = "&" + D({
                            template: y[k]
                        })),
                        t) + ("feed" == l ? "&type=feed" : "") + "&linknote=" + m,
                    !0
            }
            ,
            Ne = function(e) {
                var a;
                e.literalJS ? (a = _e.createElement("script"),
                u && a.setAttribute("nonce", u),
                    a.textContent = e.literalJS,
                    d.appendChild(a)) : e.externalJS && de(e.externalJS)
            }
            ,
            Q = function(a, t, n) {
                var e, i, o, r, l, s;
                t && (e = P(t),
                    i = t.classList,
                    o = "a2a_starting",
                    r = "transitionend",
                    "show" === a ? e || (l = t,
                    (s = i) && m(l, "transition-duration") && s.add(o),
                        t.style.display = "block",
                    i && setTimeout(function() {
                        i.remove(o)
                    }, 1)) : i ? e ? (t.addEventListener(r, function e() {
                        t.style.display = "show" === a ? "block" : "none",
                        n && n(),
                            t.removeEventListener(r, e, !1)
                    }, !1),
                        i.add(o)) : n && n() : n && (t.style.display = "none",
                        n()))
            }
            ,
            Z = {
                show: function() {
                    var e = "a2a" + x
                        , a = be("a2a_overlay")
                        , t = be(e + "_find");
                    "none" === m(a, "display") && (Q("show", a),
                        Z.key_listener = xe(_e, "keydown", function(e) {
                            var a = (e = e || pe.event).which || e.keyCode
                                , e = _e.activeElement;
                            27 == a && t != e ? ee(x) : 40 < a && a < 91 && t != e && t.focus()
                        }))
                },
                hide: function(e) {
                    var a = be("a2a_overlay")
                        , t = Z
                        , n = t.key_listener;
                    Q("hide", a, e),
                    n && (n.destroy(),
                        setTimeout(function() {
                            delete t.key_listener
                        }, 1))
                },
                key_listener: v
            },
            ee = function(e) {
                var a = "a2a" + e
                    , t = be(a + "_full")
                    , n = be("a2a_overlay")
                    , i = be("a2a_modal");
                te.full_shown = !1,
                    Q("hide", i),
                    Q("hide", t),
                    Z.hide(function() {
                        n.style.display = i.style.display = "none",
                            n.style.willChange = i.style.willChange = "",
                        t && (t.style.display = "none",
                            t.style.willChange = ""),
                            ce.showing = !1,
                        P(be(a + "_dropdown")) && be(a + "_show_more_less").focus()
                    })
            }
            ,
            ae = function() {
                be("a2a_overlay");
                for (var e = be("a2a_modal"), a = I("a2a_modal_body", e), t = 0; t < a.length; t++)
                    a[t].style.display = "none";
                Z.show(),
                    Q("show", e)
            }
            ,
            (te = function() {
                    var e = "a2a" + x
                        , a = I
                        , t = be(e + "_full")
                        , n = a("a2a_full_header", t)[0]
                        , e = be(e + "_full_services")
                        , a = a("a2a_full_footer", t)[0];
                    ie(x),
                        Z.show(),
                        Q("show", t),
                        e.style.cssText = "height:calc(10px)",
                    e.style.height.length && (e.style.height = "calc(100% - " + (n.offsetHeight + a.offsetHeight) + "px)"),
                        t.focus(),
                        Ie("full")
                }
            ).full_shown = v,
            (ne = function(e, a) {
                    e ? A = e.a2a_index : C && (A = C);
                    var t, n, i, o, r, l, s, c, d, u = me["n" + A], p = E ? "touchstart" : "click", _ = !(!E || !M()) && {
                        passive: !0
                    };
                    x = u.type;
                    var f, m = be("a2a" + x + "_dropdown");
                    ie(x),
                        R("block", x),
                        n = [m.clientWidth, m.clientHeight],
                        i = W("w"),
                        o = W("h"),
                        e ? (t = (s = e.a2a_floating) ? "viewport" : "scroll",
                            m.style.position = s ? "fixed" : "",
                            r = s ? 0 : q("w"),
                            l = s ? 0 : q("h"),
                            e = (s = e.getElementsByTagName("img")[0]) ? (c = $(s, t),
                                d = s.clientWidth,
                                s.clientHeight) : (c = $(e, t),
                                d = e.offsetWidth,
                                e.offsetHeight),
                        c.left - r + n[0] + d > i && (c.left = c.left - n[0] + d - 8),
                        ("up" == u.orientation || "down" != u.orientation && c.top - l + n[1] + e > o && c.top > n[1]) && (c.top = c.top - n[1] - e),
                            m.style.left = (c.left < 0 ? 0 : c.left) + 2 + "px",
                            m.style.top = c.top + e + "px") : (m.style.position = (a = a || {}).position || "absolute",
                            m.style.left = a.left || i / 2 - n[0] / 2 + "px",
                            m.style.top = a.top || o / 2 - n[1] / 2 + "px"),
                    me[x].doc_click_close_mini || me[x].no_hide || (me[x].doc_click_close_mini = (f = x,
                            function(e) {
                                !y() && "number" == typeof e.button && 0 < e.button || (me[x].last_focus && me[x].last_focus.focus(),
                                    R("none", f))
                            }
                    ),
                        ne["doc_click_listener_" + x] = xe(_e, p, me[x].doc_click_close_mini, _)),
                        ne.key_listener = ne.key_listener || {},
                        ne.key_listener[x] = xe(_e, "keydown", function(e) {
                            27 != ((e = e || pe.event).which || e.keyCode) || Z.key_listener || R("none", x)
                        }),
                        Ve.load();
                    _ = encodeURIComponent,
                        _ = "event=menu_show&url=" + _(location.href) + "&title=" + _(_e.title || "") + "&ev_menu_type=" + x;
                    Re(x, _)
                }
            ).key_listener = v,
            oe = {
                feed: !(ie = function(e) {
                        if (!oe[e]) {
                            var a, t, n = "a2a" + e, i = _e.createDocumentFragment(), o = _e.createDocumentFragment(), r = me[e].services, l = be(n + "_find"), s = _e.createElement("i");
                            if ("mail" != e) {
                                for (var c = 0, d = r.most, u = d.length, p = parseInt(me[e].num_services), _ = 0, f = me[e].exclude_services; c < u; c++) {
                                    var m = d[c];
                                    f && Ce(m[1], f, !0) || i.appendChild(Ye(m[0], m[1], m[2], m[3], m[4])),
                                    !(_ < p) || f && Ce(m[1], f, !0) || (o.appendChild(Ye(m[0], m[1], m[2], m[3], m[4])),
                                        _++)
                                }
                                be(n + "_full_services").appendChild(i),
                                    be(n + "_mini_services").appendChild(o)
                            }
                            t = be(n + "_full_services"),
                                s.className = "a2a_i",
                                a = s.cloneNode(),
                                t.appendChild(s),
                                t.appendChild(a);
                            for (var c = 0, h = r.email, g = h.length; c < g; c++) {
                                m = h[c];
                                f && Ce(m[1], f, !0) || be(n + "_2_col1").appendChild(Ye(m[0], m[1], m[2], m[3], m[4]))
                            }
                            $e(),
                                re(e),
                            "mail" != e && (l.onkeydown = function(e) {
                                    e = e || pe.event,
                                        e = e.which || e.keyCode;
                                    if (13 == e) {
                                        for (var a, t = 0, n = me[x].main_services, i = n.length; t < i; t++)
                                            if ("none" != (a = n[t]).style.display)
                                                return a.focus(),
                                                    !1
                                    } else
                                        27 == e && ("" == l.value && l.blur(),
                                            l.value = "",
                                            G())
                                }
                            ),
                                oe[e] = !0
                        }
                    }
                ),
                page: !1
            },
            re = function(e) {
                me[e] && (Ue(t[e], e, " a2a_sss"),
                    X(e),
                    J(e))
            }
            ,
            le = s,
            (se = function(e) {
                    var a = be("a2apage_full")
                        , t = (be("a2a_overlay"),
                        be("a2a_modal"))
                        , n = be("a2a_copy_link")
                        , i = be("a2a_copy_link_copied")
                        , o = be("a2a_copy_link_text");
                    function r() {
                        t.setAttribute("aria-label", "Copy link"),
                            o.value = e,
                            ae(),
                            n.style.display = "block",
                            t.focus(),
                            Ie("copy")
                    }
                    te.full_shown = P(a),
                    se.clickListen || (xe(o, "click", function(e) {
                        o.setSelectionRange ? o.setSelectionRange(0, o.value.length) : o.select(),
                        _e.execCommand && _e.execCommand("copy") && (o.blur(),
                            i.style.display = "block",
                            setTimeout(function() {
                                t.style.display = n.style.display = i.style.display = "none",
                                    te.full_shown ? te() : ee("page")
                            }, 700))
                    }),
                        se.clickListen = 1),
                        te.full_shown ? Q("hide", a, r) : r()
                }
            ).clickListen = v,
            ce = {
                off: function() {
                    var e = fe.thanks;
                    return "boolean" == typeof e && !1 === e || e && "boolean" == typeof e.postShare && !1 === e.postShare
                },
                show: function() {
                    var e = "a2a" + x
                        , a = be("a2a_modal")
                        , t = be(e + "_full")
                        , n = be("a2a_thanks")
                        , i = fe.thanks
                        , e = ce.off();
                    function o() {
                        a.setAttribute("aria-label", "Thanks for sharing"),
                            ae(),
                            n.style.display = "inline-block",
                            ce.showing = !0
                    }
                    ze.lit() && i && !e && (ze.has(!0) || i.postShare) && !ce.showing && "none" === m(a, "display") && (P(t) ? Q("hide", t, o) : o())
                },
                showing: !1
            },
            Le = function(e) {
                var a = ce
                    , t = "focus"
                    , n = "waiting";
                function i() {
                    Ie("post"),
                        ce.show(),
                        pe.removeEventListener(t, i),
                        a[n] = 0
                }
                function o() {
                    pe.removeEventListener("blur", o),
                        pe.addEventListener(t, i),
                        function(e) {
                            var a = ""
                                , t = e ? e.a2a_index : null
                                , n = e ? e.a2a_codes : ["facebook", "twitter", "email"]
                                , i = me["n" + (t || A)]
                                , o = i.type
                                , r = be("a2a_thanks");
                            (t = be(e = "a2a_thanks_kit")) || ((t = _e.createElement("div")).id = e,
                                r.appendChild(t)),
                                t.innerHTML = "",
                                (r = _e.createElement("div")).className = "a2a_kit a2a_kit_size_32 a2a_default_style",
                                r.setAttribute("data-a2a-url", i.linkurl),
                                r.setAttribute("data-a2a-title", i.linkname),
                            i.linkmedia && r.setAttribute("data-a2a-media", i.linkmedia),
                                r.style.display = "flex",
                                r.style.justifyContent = "center";
                            for (var l = 0; l < n.length && l < 8; l++)
                                a += '<a class="a2a_button_' + n[l] + '"></a>';
                            r.innerHTML = a,
                                t.appendChild(r),
                                ve("page", {
                                    target: r
                                }),
                                x = o
                        }(e)
                }
                a[n] || (a[n] = 1,
                    pe.addEventListener("blur", o))
            }
            ,
            de = function(e, a) {
                var t = _e.createElement("script");
                t.src = e,
                a && (t.readyState ? t.onreadystatechange = function() {
                        "loaded" !== t.readyState && "complete" !== t.readyState || (t.onreadystatechange = null,
                            a())
                    }
                    : t.onload = a),
                    _e.body.appendChild(t)
            }
            ,
            ue = function(e, a) {
                var t, i, o, r = /^$|^module$|\/(?:java|ecma)script/i;
                function n() {
                    var e = _e.createEvent("Event");
                    e.initEvent("DOMContentLoaded", !0, !0),
                        _e.dispatchEvent(e)
                }
                a.innerHTML = e,
                    t = (t = a).querySelectorAll("script"),
                    o = [],
                    [].forEach.call(t, function(n) {
                        (i = n.getAttribute("type")) && !r.test(i) || o.push(function(e) {
                            var a, t;
                            a = n,
                                t = e,
                                e = _e.createElement("script"),
                                a.src ? (e.onload = t,
                                    e.onerror = t,
                                    e.src = a.src) : e.textContent = a.innerText,
                                _e.head.appendChild(e),
                            a.src || t()
                        })
                    }),
                o.length && function e(a, t, n) {
                    a[n = void 0 === n ? 0 : n](function() {
                        ++n === a.length ? t() : e(a, t, n)
                    })
                }(o, n)
            }
            ,
            ze = {
                lit: function() {
                    var e = fe.thanks;
                    return !((be("wpadminbar") || void 0 !== pe.wp && pe.wp.customize) && (!e || !e.postShare))
                },
                has: function(e) {
                    void 0 === e && (e = !1);
                    var a = {}
                        , t = !1;
                    return ("object" == typeof pe.adsbygoogle && pe.adsbygoogle.loaded || "object" == typeof pe.google_ad_modifications) && (a.as = t = !0),
                    "object" == typeof pe.googletag && pe.googletag.slots && "function" == typeof Object.keys && 0 < Object.keys(pe.googletag.slots).length && (a.dc = t = !0),
                    pe.vglnk && pe.vglnk.key && (a.vl = t = !0),
                    pe.__SKIM_JS_GLOBAL__ && (a.sl = t = !0),
                    (pe.amazon_ad_tag || pe.amzn_assoc_ad) && (a.az = t = !0),
                    !(e && !a.as && !a.dc) && (t ? a : void 0)
                },
                set: function(e) {
                    void 0 === e && (e = !1);
                    var a, n = "a2a_thanks_a2a_ad", t = "a2a_thanks_pub_ad", i = be("a2a_thanks"), o = fe.thanks, r = "boolean" == typeof o && !1 === o || o && "boolean" == typeof o.postShare && !1 === o.postShare || o && "boolean" == typeof o.ad && !1 === o.ad, l = o && void 0 !== o.ad && !1 !== o.ad, s = be(n), c = be(t);
                    function d() {
                        var e, a = encodeURIComponent(location.href), t = "width:300px;height:250px;";
                        c && (c.style.display = "none"),
                            s ? pe.postMessage && be("a2a_thanks_ifr").contentWindow.postMessage("a2a_refresh_slot1", "*") : (function() {
                                {
                                    var a;
                                    pe.postMessage ? a = xe(pe, "message", function(e) {
                                        ".a2a.me" !== e.origin.substr(-7) || (e = e.data) && "a2a_display_slot1" === e && (s.style.display = "",
                                            a.destroy())
                                    }) : s.style.display = ""
                                }
                            }(),
                                (e = _e.createElement("iframe")).id = "a2a_thanks_ifr",
                                e.title = "Post-Share Container",
                                e.setAttribute("transparency", "true"),
                                e.setAttribute("allowTransparency", "true"),
                                e.setAttribute("frameBorder", "0"),
                                e.src = "https://www.a2a.me/html/tag.html#url=" + a,
                                (s = _e.createElement("div")).id = n,
                                s.insertBefore(e, null),
                                e.style = t,
                                s.style = t + "display:none;border-radius:6px;margin:45px auto 0;overflow:hidden;",
                                i.appendChild(s),
                                u(),
                                xe(pe, "resize", u))
                    }
                    function u() {
                        var e = pe.innerHeight
                            , a = e < 460
                            , t = Math.max(.5, parseInt((e / 600).toFixed(1), 10))
                            , n = Math.floor(250 * (t - 1) / 2);
                        s.style.marginTop = e < 360 ? "25px" : "45px",
                            s.style.transform = a ? "translateY(" + n + "px) scale(" + t + ")" : "none"
                    }
                    (ze.lit() && ze.has(!0) && !r || l) && (o && "string" == typeof o.ad && o.ad && .5 <= Math.random() ? (s && (s.style.display = "none"),
                    c || ((a = _e.createElement("div")).id = t,
                        a.style.margin = "45px auto 0",
                        i.appendChild(a),
                        ue(o.ad, a))) : e && d())
                }
            },
            Ie = function(a) {
                var e, t, n, i, o, r, l;
                Ie.a2a = Ie.a2a || {},
                Ie.a2a[a] || (e = "&domain=" + encodeURIComponent(location.href.split("/")[2]),
                    t = (r = ze.has()) && r.as ? "&as=1" : "",
                    n = r && r.dc ? "&dc=1" : "",
                r && r.vl,
                    i = r && r.sl ? "&sl=1" : "",
                    o = r && r.az ? "&az=1" : "",
                    r = r ? "&ad=1" : "",
                    (l = new XMLHttpRequest).open("POST", "https://stats.addtoany.com/menu"),
                    l.setRequestHeader("Content-Type", "application/x-www-form-urlencoded"),
                    l.timeout = 3e3,
                    l.ontimeout = function(e) {
                        l.abort(),
                        "post" === a && ze.set()
                    }
                    ,
                "post" === a && (l.onload = function(e) {
                        var a = this.responseText;
                        200 === this.status && a && "1" === a ? ze.set(!0) : ze.set()
                    }
                ),
                    l.send("view=" + a + e + r + t + n + i + o),
                    Ie.a2a[a] = 1)
            }
            ,
            (je = function() {
                    function e() {
                        "function" == typeof pe.urchinTracker ? je.track = function(e, a, t, n, i) {
                                pe.urchinTracker("/addtoany.com/" + n),
                                    pe.urchinTracker("/addtoany.com/" + n + "/" + (t || me["n" + A].linkurl)),
                                    pe.urchinTracker("/addtoany.com/services/" + a)
                            }
                            : "object" == typeof pe.pageTracker && "object" == typeof pe._gat ? je.track = function(e, a, t, n, i) {
                                    r != l && (pe._gat._anonymizeIp(),
                                        pe._gat._forceSSL(),
                                        pe.pageTracker._trackSocial("AddToAny", e, t || me["n" + A].linkurl))
                                }
                                : "object" == typeof pe._gaq ? je.track = function(e, a, t, n, i) {
                                        r != l && (pe._gaq.push(["_gat._anonymizeIp"]),
                                            pe._gaq.push(["_gat._forceSSL"]),
                                            pe._gaq.push(["_trackSocial", "AddToAny", e, t || me["n" + A].linkurl]))
                                    }
                                    : "string" == typeof pe.GoogleAnalyticsObject && "object" != typeof pe.dataLayer ? je.track = function(e, a, t, n, i) {
                                            r != l && (t = t || me["n" + A].linkurl,
                                                pe[GoogleAnalyticsObject]("send", "social", {
                                                    anonymizeIp: !0,
                                                    forceSSL: !0,
                                                    socialNetwork: "AddToAny",
                                                    socialAction: e,
                                                    socialTarget: t,
                                                    page: t
                                                }))
                                        }
                                        : "object" == typeof pe.dataLayer && (je.track = function(e, a, t, n, i) {
                                            var o;
                                            r != l && (o = t || me["n" + A].linkurl,
                                                t = fe.callbacks,
                                                function() {
                                                    pe.dataLayer.push(arguments)
                                                }("event", e, {
                                                    anonymize_ip: !0,
                                                    event_category: "AddToAny",
                                                    event_label: o
                                                }),
                                            t && t.length && "function" == typeof t.some && t.some(function(e) {
                                                return !!(e = e.share) && /dataLayer[^]+AddToAnyShare[^]+socialAction/.test(e.toString())
                                            }) || pe.dataLayer.push({
                                                event: "AddToAnyShare",
                                                socialNetwork: "AddToAny",
                                                socialAction: e,
                                                socialTarget: o
                                            }))
                                        }
                                    )
                    }
                    var r = x
                        , l = "feed";
                    je.track = s,
                        e(),
                    je.track === s && pe.addEventListener("load", e)
                }
            ).track = v,
            Me = function() {
                var e, a = parseInt(me[x].num_services), t = be("a2a" + x + "_full_services"), n = be("a2a" + x + "_mini_services");
                if (me[x].custom_services) {
                    var i = (l = me[x].custom_services).length;
                    l.reverse();
                    for (var o, r = 0; r < i; r++)
                        l[r] && (o = Ye(l[r][0], l[r][0].replace(/ /g, "_"), null, null, {}, l[r][1], l[r][2]),
                            t.insertBefore(o, t.firstChild),
                            o = Ye(l[r][0], l[r][0].replace(/ /g, "_"), null, null, {}, l[r][1], l[r][2]),
                            n.insertBefore(o, n.firstChild))
                }
                if ("page" == x && fe.add_services)
                    for (var l, i = (l = fe.add_services).length, s = fe.http_s, r = 0; r < i; r++)
                        l[r] && (s && (l[r].icon = !1),
                            o = Ye(l[r].name, l[r].safe_name, null, null, {}, null, l[r].icon),
                            t.insertBefore(o, t.firstChild),
                            o = Ye(l[r].name, l[r].safe_name, null, null, {}, null, l[r].icon),
                            n.insertBefore(o, n.firstChild));
                if ((e = I("a2a_i", n, "a")).length > a)
                    for (var r = 0, c = e.length; r < c - a; r++)
                        n.removeChild(n.lastChild)
            }
            ,
            De = function() {
                var e = _e.createElement("iframe")
                    , a = _e.createElement("div")
                    , t = encodeURIComponent
                    , n = navigator
                    , i = _e.referrer ? t(_e.referrer) : ""
                    , o = t(location.href)
                    , n = (t(_e.title || ""),
                n.browserLanguage || n.language,
                    fe.no_3p ? "&no_3p=1" : "");
                e.id = "a2a_sm_ifr",
                    e.style.width = e.style.height = a.style.width = a.style.height = "1px",
                    e.style.top = e.style.left = e.frameborder = e.style.border = "0",
                    e.style.position = a.style.position = "absolute",
                    e.style.zIndex = a.style.zIndex = "100000",
                    e.title = "AddToAny Utility Frame",
                    e.setAttribute("transparency", "true"),
                    e.setAttribute("allowTransparency", "true"),
                    e.setAttribute("frameBorder", "0"),
                    e.src = "https://static.addtoany.com/menu/sm.23.html#type=core&event=load&url=" + o + "&referrer=" + i + n,
                    a.style.top = "0",
                    a.style.visibility = "hidden",
                    g.insertBefore(a, null),
                    a.insertBefore(e, null)
            }
            ,
            He = !(Oe = function() {
                    pe.postMessage && !He && (De(),
                        xe(pe, "message", function(e) {
                            var a;
                            ".addtoany.com" !== e.origin.substr(-13) || "object" == typeof (a = e.data) && a.a2a && (fe.http_s = "s",
                                ["feed", "page"].forEach(function(e) {
                                    t[e] = a.user_services[e],
                                    oe[e] && re(e)
                                }),
                                be("a2a_sm_ifr").style.display = "none")
                        }),
                        He = !0)
                }
            ),
            Re = function(e, a) {
                var t = be("a2a_sm_ifr");
                pe.postMessage && t && t.contentWindow.postMessage(a, "*")
            }
            ,
            Pe = function(e, a, t) {
                var n, i = new RegExp("[?&]" + a.replace(/[.\\+*?\[\^\]$(){}=!<>|:\-]/g, "\\$&") + "=([^&#]*)","i"), o = i.exec(e);
                return null === o ? e + (n = /\?/.test(e) ? "&" : "?") + a + "=" + t : (n = o[0].charAt(0),
                    e.replace(i, n + a + "=" + t))
            }
            ,
            $e = function() {
                var e = me[x].prioritize;
                e && Ue(e, x),
                    Me()
            }
            ,
            Ue = function(e, a, t) {
                var n = parseInt(me[a].num_services)
                    , i = be("a2a" + a + "_full_services")
                    , o = be("a2a" + a + "_mini_services")
                    , r = I("a2a_i", i, "a")
                    , l = I("a2a_i", o, "a")
                    , s = [];
                if (e) {
                    for (var c = e.length - 1, t = t; -1 < c; c--) {
                        var d = e[c]
                            , d = Ce(d, r, !0, "a2a", "safename");
                        d && (t && (d.className = d.className + t),
                            i.insertBefore(d, i.firstChild),
                            s.push(d))
                    }
                    if (0 < s.length) {
                        for (var u, p, c = 0, t = t; c < s.length; c++)
                            p = (u = Ce(s[c].a2a.safename, l, !0, "a2a", "safename")) ? u : (p = s[c].a2a,
                                Ye(p.servicename, p.safename, p.serviceIcon, p.serviceColor, {
                                    src: p.js_src,
                                    url: p.url,
                                    type: p.serviceType,
                                    pu: p.popup,
                                    na: p.na,
                                    media: p.media
                                })),
                            t && (p.className = p.className + t),
                                o.insertBefore(p, o.firstChild);
                        if ((l = I("a2a_i", o, "a")).length > n)
                            for (var c = 0, _ = l.length; c < _ - n; c++)
                                o.removeChild(o.lastChild)
                    }
                }
            }
            ,
            We = function(e) {
                var a = fe
                    , t = a.color_main || "EEE"
                    , n = a.color_bg || "FFF"
                    , i = a.color_border || "CCC"
                    , o = a.color_link_text || "0166FF"
                    , r = a.color_link_text_hover || "2A2A2A"
                    , l = a.color_link_text || "2A2A2A"
                    , s = a.color_link_text || "2A2A2A"
                    , a = a.color_border || i
                    , t = ".a2a_hide{display:none}.a2a_logo_color{background-color:" + (e || "#0166FF") + "}.a2a_menu,.a2a_menu *{-moz-box-sizing:content-box;-webkit-box-sizing:content-box;box-sizing:content-box;float:none;margin:0;padding:0;position:static;height:auto;width:auto}.a2a_menu{border-radius:6px;display:none;direction:ltr;background:#" + n + ';font:16px sans-serif-light,HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Arial,Helvetica,"Liberation Sans",sans-serif;color:#000;line-height:12px;border:1px solid #' + i + ";vertical-align:baseline;overflow:hidden}.a2a_mini{min-width:200px;position:absolute;width:300px;z-index:9999997}.a2a_overlay{display:none;background:#616c7d;opacity:.92;backdrop-filter:blur(8px);position:fixed;top:0;right:0;left:0;bottom:0;z-index:9999998;-webkit-tap-highlight-color:transparent;transition:opacity .14s,backdrop-filter .14s}.a2a_full{background:#" + n + ";border:1px solid #" + n + ";height:auto;height:calc(320px);top:15%;left:50%;margin-left:-320px;position:fixed;text-align:center;width:640px;z-index:9999999;transition:transform .14s,opacity .14s}.a2a_full_footer,.a2a_full_header,.a2a_full_services{border:0;margin:0;padding:12px;box-sizing:border-box}.a2a_full_header{padding-bottom:8px}.a2a_full_services{height:280px;overflow-y:scroll;padding:0 12px;-webkit-overflow-scrolling:touch}.a2a_full_services .a2a_i{display:inline-block;float:none;width:181px;width:calc(33.334% - 18px)}div.a2a_full_footer{font-size:12px;text-align:center;padding:8px 14px}div.a2a_full_footer a,div.a2a_full_footer a:visited{display:inline;font-size:12px;line-height:14px;padding:8px 14px}div.a2a_full_footer a:focus,div.a2a_full_footer a:hover{background:0 0;border:0;color:#" + o + '}div.a2a_full_footer a span.a2a_s_a2a,div.a2a_full_footer a span.a2a_w_a2a{background-size:14px;border-radius:3px;display:inline-block;height:14px;line-height:14px;margin:0 3px 0 0;vertical-align:top;width:14px}.a2a_modal{height:0;left:50%;margin-left:-320px;position:fixed;text-align:center;top:15%;width:640px;z-index:9999999;transition:transform .14s,opacity .14s;-webkit-tap-highlight-color:transparent}.a2a_modal_body{background:0 0;border:0;font:24px sans-serif-light,HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Arial,Helvetica,"Liberation Sans",sans-serif;position:relative;height:auto;width:auto}.a2a_thanks{color:#fff;height:auto;margin-top:20px;width:auto}.a2a_thanks>div:first-child{margin:0 0 40px 0}.a2a_thanks div *{height:inherit}#a2a_copy_link{background:#' + n + ";border:1px solid #" + n + ";margin-top:15%}span.a2a_s_link#a2a_copy_link_icon,span.a2a_w_link#a2a_copy_link_icon{background-size:48px;border-radius:0;display:inline-block;height:48px;left:0;line-height:48px;margin:0 3px 0 0;position:absolute;vertical-align:top;width:48px}#a2a_modal input#a2a_copy_link_text{background-color:transparent;border:0;color:#" + s + ";font:inherit;height:48px;left:62px;max-width:initial;padding:0;position:relative;width:564px;width:calc(100% - 76px)}#a2a_copy_link_copied{background-color:#0166ff;color:#fff;display:none;font:inherit;font-size:16px;margin-top:1px;padding:3px 8px}@media (prefers-color-scheme:dark){.a2a_menu a,.a2a_menu a.a2a_i,.a2a_menu a.a2a_i:visited,.a2a_menu a.a2a_more,i.a2a_i{border-color:#2a2a2a!important;color:#fff!important}.a2a_menu a.a2a_i:active,.a2a_menu a.a2a_i:focus,.a2a_menu a.a2a_i:hover,.a2a_menu a.a2a_more:active,.a2a_menu a.a2a_more:focus,.a2a_menu a.a2a_more:hover,.a2a_menu_find_container{border-color:#444!important;background-color:#444!important}.a2a_menu{background-color:#2a2a2a;border-color:#2a2a2a}.a2a_menu_find{color:#fff!important}.a2a_menu span.a2a_s_find svg{background-color:transparent!important}.a2a_menu span.a2a_s_find svg path{fill:#fff!important}}@media print{.a2a_floating_style,.a2a_menu,.a2a_overlay{visibility:hidden}}@keyframes a2aFadeIn{from{opacity:0}to{opacity:1}}.a2a_starting{opacity:0}.a2a_starting.a2a_full,.a2a_starting.a2a_modal{transform:scale(.8)}@media (max-width:639px){.a2a_full{border-radius:0;top:15%;left:0;margin-left:auto;width:100%}.a2a_modal{left:0;margin-left:10px;width:calc(100% - 20px)}}@media (min-width:318px) and (max-width:437px){.a2a_full .a2a_full_services .a2a_i{width:calc(50% - 18px)}}@media (max-width:317px){.a2a_full .a2a_full_services .a2a_i{width:calc(100% - 18px)}}@media (max-height:436px){.a2a_full{bottom:40px;height:auto;top:40px}}@media (max-height:550px){.a2a_modal{top:30px}}@media (max-height:360px){.a2a_modal{top:20px}.a2a_thanks>div:first-child{margin-bottom:20px}}.a2a_menu a{color:#" + o + ';text-decoration:none;font:16px sans-serif-light,HelveticaNeue-Light,"Helvetica Neue Light","Helvetica Neue",Arial,Helvetica,"Liberation Sans",sans-serif;line-height:14px;height:auto;width:auto;outline:0}.a2a_menu a.a2a_i:visited,.a2a_menu a.a2a_more{color:#' + o + "}.a2a_menu a.a2a_i:active,.a2a_menu a.a2a_i:focus,.a2a_menu a.a2a_i:hover,.a2a_menu a.a2a_more:active,.a2a_menu a.a2a_more:focus,.a2a_menu a.a2a_more:hover{color:#" + r + ";border-color:#" + t + ";border-style:solid;background-color:#" + t + ";text-decoration:none}.a2a_menu span.a2a_s_find{background-size:24px;height:24px;left:8px;position:absolute;top:7px;width:24px}.a2a_menu span.a2a_s_find svg{background-color:#" + n + "}.a2a_menu span.a2a_s_find svg path{fill:#" + a + "}#a2a_menu_container{display:inline-block}.a2a_menu_find_container{border:1px solid #" + a + ";border-radius:6px;padding:2px 24px 2px 0;position:relative;text-align:left}.a2a_cols_container .a2a_col1{overflow-x:hidden;overflow-y:auto;-webkit-overflow-scrolling:touch}#a2a_modal input,#a2a_modal input[type=text],.a2a_menu input,.a2a_menu input[type=text]{display:block;background-image:none;box-shadow:none;line-height:100%;margin:0;outline:0;overflow:hidden;padding:0;-moz-box-shadow:none;-webkit-box-shadow:none;-webkit-appearance:none}#a2afeed_find_container input,#a2afeed_find_container input[type=text],#a2apage_find_container input,#a2apage_find_container input[type=text]{background-color:transparent;border:0;box-sizing:content-box;color:#" + s + ";font:inherit;font-size:16px;height:28px;line-height:20px;left:38px;outline:0;margin:0;max-width:initial;padding:2px 0;position:relative;width:99%}.a2a_clear{clear:both}.a2a_svg{background-repeat:no-repeat;display:block;overflow:hidden;height:32px;line-height:32px;padding:0;width:32px}.a2a_svg svg{background-repeat:no-repeat;background-position:50% 50%;border:none;display:block;left:0;margin:0 auto;overflow:hidden;padding:0;position:relative;top:0;width:auto;height:auto}a.a2a_i,i.a2a_i{display:block;float:left;border:1px solid #" + n + ";line-height:24px;padding:6px 8px;text-align:left;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:132px}a.a2a_i span,a.a2a_more span{display:inline-block;overflow:hidden;vertical-align:top}a.a2a_i .a2a_svg{margin:0 6px 0 0}a.a2a_i .a2a_svg,a.a2a_more .a2a_svg{background-size:24px;height:24px;line-height:24px;width:24px}a.a2a_sss:hover{border-left:1px solid #" + i + "}a.a2a_menu_show_more_less{border-bottom:1px solid #" + n + ';border-left:0;border-right:0;line-height:24px;margin:6px 0 0;padding:6px;-webkit-touch-callout:none}a.a2a_menu_show_more_less span{height:24px;margin:0 6px 0 0}.a2a_kit .a2a_svg{background-repeat:repeat}.a2a_default_style a{float:left;line-height:16px;padding:0 2px}.a2a_default_style a:hover .a2a_svg,.a2a_floating_style a:hover .a2a_svg,.a2a_overlay_style a:hover .a2a_svg svg{opacity:.7}.a2a_overlay_style.a2a_default_style a:hover .a2a_svg{opacity:1}.a2a_default_style .a2a_count,.a2a_default_style .a2a_svg,.a2a_floating_style .a2a_svg,.a2a_menu .a2a_svg,.a2a_vertical_style .a2a_count,.a2a_vertical_style .a2a_svg{border-radius:4px}.a2a_default_style .a2a_counter img,.a2a_default_style .a2a_dd,.a2a_default_style .a2a_svg{float:left}.a2a_default_style .a2a_img_text{margin-right:4px}.a2a_default_style .a2a_divider{border-left:1px solid #000;display:inline;float:left;height:16px;line-height:16px;margin:0 5px}.a2a_kit a{cursor:pointer}.a2a_floating_style{background-color:#fff;border-radius:6px;position:fixed;z-index:9999995}.a2a_overlay_style{z-index:2147483647}.a2a_floating_style,.a2a_overlay_style{animation:a2aFadeIn .2s ease-in;padding:4px}.a2a_vertical_style a{clear:left;display:block;overflow:hidden;padding:4px;text-decoration:none}.a2a_floating_style.a2a_default_style{bottom:0}.a2a_floating_style.a2a_default_style a,.a2a_overlay_style.a2a_default_style a{padding:4px}.a2a_count{background-color:#fff;border:1px solid #ccc;box-sizing:border-box;color:#2a2a2a;display:block;float:left;font:12px Arial,Helvetica,sans-serif;height:16px;margin-left:4px;position:relative;text-align:center;width:50px}.a2a_count:after,.a2a_count:before{border:solid transparent;border-width:4px 4px 4px 0;content:"";height:0;left:0;line-height:0;margin:-4px 0 0 -4px;position:absolute;top:50%;width:0}.a2a_count:before{border-right-color:#ccc}.a2a_count:after{border-right-color:#fff;margin-left:-3px}.a2a_count span{animation:a2aFadeIn .14s ease-in}.a2a_vertical_style .a2a_counter img{display:block}.a2a_vertical_style .a2a_count{float:none;margin-left:0;margin-top:6px}.a2a_vertical_style .a2a_count:after,.a2a_vertical_style .a2a_count:before{border:solid transparent;border-width:0 4px 4px 4px;content:"";height:0;left:50%;line-height:0;margin:-4px 0 0 -4px;position:absolute;top:0;width:0}.a2a_vertical_style .a2a_count:before{border-bottom-color:#ccc}.a2a_vertical_style .a2a_count:after{border-bottom-color:#fff;margin-top:-3px}.a2a_nowrap{white-space:nowrap}.a2a_note{margin:0 auto;padding:9px;font-size:12px;text-align:center}.a2a_note .a2a_note_note{margin:0;color:#' + l + "}.a2a_wide a{display:block;margin-top:3px;border-top:1px solid #" + t + ";text-align:center}.a2a_label{position:absolute!important;clip-path:polygon(0 0,0 0,0 0);-webkit-clip-path:polygon(0 0,0 0,0 0);overflow:hidden;height:1px;width:1px}.a2a_kit,.a2a_menu,.a2a_modal,.a2a_overlay{-ms-touch-action:manipulation;touch-action:manipulation;outline:0}.a2a_dd img{border:0}.a2a_button_facebook_like iframe{max-width:none}";
                (c = _e.createElement("style")).setAttribute("type", "text/css"),
                u && c.setAttribute("nonce", u),
                    d.appendChild(c),
                    c.styleSheet ? c.styleSheet.cssText = t : (t = _e.createTextNode(t),
                        c.appendChild(t))
            }
            ,
            qe = function() {
                ve("page");
                for (var e, a, t = c.sheet || c.styleSheet || {}, n = ("insertRule"in t), i = ("addRule"in t), o = he.concat([[0, 0, "a2a", "0166FF"]]), r = 0, l = o.length; r < l; r++)
                    e = ".a2a_s_" + o[r][2],
                        a = "background-color:#" + o[r][3] + ";",
                        n ? t.insertRule(e + "{" + a + "}", 0) : i && t.addRule(e, a, 0);
                Ve.load(!0),
                    qe = s
            }
            ,
            Ve = {
                icons: {},
                queue: [],
                tagO: '<svg focusable="false" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">',
                tagC: "</svg>",
                fill: function(e, a) {
                    return e.replace(/#FFF/gi, a)
                },
                get: function(e, a, t) {
                    var n = Ve.fill
                        , i = Ve.icons
                        , o = Ve.tagO
                        , r = Ve.tagC
                        , l = i[e]
                        , i = i.a2a;
                    return l ? o + (l = t ? n(l, t) : l) + r : i ? o + (i = t ? n(i, t) : i) + r : (Ve.queue.push({
                        name: e,
                        node: a,
                        color: t
                    }),
                        "pending")
                },
                set: function(e) {
                    var a = Ve.queue
                        , t = Ve.icons = e
                        , n = Ve.tagO
                        , i = Ve.tagC;
                    if (t.a2a)
                        for (var o, r, l, s = 0, c = a.length; s < c; s++)
                            l = (o = a[s]).name,
                                r = o.color,
                                l = t[l] || t.a2a,
                                l = r ? Ve.fill(l, r) : l,
                                o.node.innerHTML = n + l + i
                },
                load: function(t) {
                    var n = new pe.Image;
                    n.onerror = function() {
                        Ve.loadCSS(!1)
                    }
                        ,
                        n.onload = function() {
                            var a, e = 1 === n.width && 1 === n.height;
                            Ve.works() && !t ? Ve.loadJS(_e) : Ve.loadCSS(e),
                                Ve.load = (a = e,
                                        function(e) {
                                            e && Ve.loadCSS(a)
                                        }
                                )
                        }
                        ,
                        Ve.load = s,
                        n.src = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw=="
                },
                loadCSS: function(e) {
                    var a = fe.static_server
                        , t = Ve.works()
                        , n = _e.createElement("link")
                        , a = e && t && a != i ? a + "/" : i + "/svg/";
                    n.rel = "stylesheet",
                        n.href = a + ["icons.29.svg.css", "icons.29.png.css", "icons.29.old.css"][e && t ? 0 : e ? 1 : 2],
                        d.appendChild(n)
                },
                loadJS: function() {
                    var e = fe.static_server
                        , a = _e.createElement("script")
                        , t = _e.getElementsByTagName("script")[0]
                        , e = e != i ? e + "/" : e + "/svg/";
                    u && a.setAttribute("nonce", u),
                        a.async = !0,
                        a.src = e + "icons.29.svg.js",
                        t.parentNode.insertBefore(a, t),
                        Ve.loadJS = s
                },
                works: function() {
                    var e = !(!_e.createElementNS || !_e.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect || !_e.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1") || pe.opera && -1 === navigator.userAgent.indexOf("Chrome"));
                    return Ve.works = function() {
                        return e
                    }
                        ,
                        Ve
                }
            },
            Ye = function(d, u, e, a, t, n, i) {
                function o(e) {
                    Te(this)
                }
                var p = _e.createElement("a")
                    , t = t || {}
                    , r = "a2a_svg a2a_s__default"
                    , l = fe.icon_color
                    , s = l ? l.split(",", 2) : v
                    , c = s ? s[0] : v
                    , _ = s ? s[1] : v;
                return p.rel = "nofollow noopener",
                    p.className = "a2a_i",
                    p.href = "/#" + u,
                    p.target = "_blank",
                    p.a2a = {},
                    p.a2a.safename = u,
                    p.a2a.servicename = d,
                    p.a2a.serviceNameLowerCase = d.toLowerCase(),
                    p.a2a.serviceIcon = e,
                    p.a2a.serviceColor = a,
                    p.a2a.serviceType = t.type,
                    p.innerHTML = "<span></span>" + d + " ",
                    s = p.firstChild,
                t.type && (p.a2a.stype = t.type),
                t.src && (p.a2a.js_src = t.src),
                t.url && (p.a2a.url = t.url),
                t.pu && (p.a2a.popup = 1),
                t.na && (p.a2a.na = 1),
                t.media && (p.a2a.media = 1),
                n && (p.a2a.customserviceuri = n),
                    i ? (s.style.backgroundImage = "url(" + i + ")",
                        s.className = r) : l && Ve.works() ? (s.className = r + " a2a_s_" + e,
                        c && "unset" != c ? s.style.backgroundColor = c : a && (s.style.backgroundColor = "#" + a),
                        _ = _ && _.trim()) : e ? (s.className = r + " a2a_s_" + e,
                    a && (s.style.backgroundColor = "#" + a)) : s.className = r,
                i || "pending" !== (_ = Ve.get(e, s, _)) && (s.innerHTML = _),
                    "js" === p.a2a.stype ? xe(p, "click", o) : (xe(p, "mousedown", o),
                        xe(p, "keydown", o)),
                "copy_link" == u && xe(p, "mouseenter", function() {
                    be("a2a_modal").style.willChange = "transform, opacity",
                        be("a2a_overlay").style.willChange = "backdrop-filter, opacity"
                }),
                    xe(p, "click", function(e) {
                        var a = me["n" + A]
                            , t = {
                            node: p,
                            service: d,
                            title: a.linkname,
                            url: a.linkurl,
                            media: a.linkmedia
                        }
                            , n = encodeURIComponent
                            , i = "page" == x ? "pages" : "subscriptions"
                            , o = "page" == x ? "AddToAny Share/Save Button" : "AddToAny Subscribe Button"
                            , r = p.a2a
                            , l = "js" === r.stype
                            , s = screen.height
                            , c = "event=service_click&url=" + n(location.href) + "&title=" + n(_e.title || "") + "&ev_service=" + n(u) + "&ev_service_type=menu&ev_menu_type=" + x + "&ev_url=" + n(a.linkurl) + "&ev_title=" + n(a.linkname).replace(/'/g, "%27")
                            , n = Be("share", t)
                            , t = !1;
                        void 0 !== n && (n.url && (a.linkurl = n.url,
                            a.linkurl_implicit = !1),
                        n.title && (a.linkname = n.title,
                            a.linkname_implicit = !1),
                        n.media && (a.linkmedia = n.media),
                            Te(p),
                        n.stop && (t = !0,
                            Ae(e))),
                        "feed" == x || r.url || r.js_src || Le(),
                        !r.popup || Se(e) || "_blank" !== p.target || l || (Ae(e),
                            pe.open(p.href, "_blank", "toolbar=0,personalbar=0,resizable,scrollbars,status,width=550,height=450,top=" + (450 < s ? Math.round(s / 2 - 225) : 40) + ",left=" + Math.round(screen.width / 2 - 275))),
                            s = r.js_skip,
                        !r.externalJS && !r.literalJS || t || s || Ne(r),
                        l && !s && Ae(e),
                        s && delete p.a2a.js_skip,
                            Re(x, c),
                            je.track(d, u, a.linkurl, i, o)
                    }),
                    p
            }
            ,
            Je = function() {
                if (fe.static_server != i)
                    return !1;
                var e = navigator
                    , a = ["ar", "id", "ms", "ms-MY", "bn", "bn-IN", "bs", "bs-BA", "bg", "ca", "ca-AD", "ca-ES", "cs", "cs-CZ", "cy", "cy-GB", "da", "da-DK", "de", "dv", "el", "el-GR", "et", "et-EE", "es", "es-AR", "es-VE", "eo", "en-US", "eu", "eu-ES", "fa", "fa-IR", "fr", "fr-CA", "gd", "he", "hi", "hi-IN", "hr", "hy", "hy-AM", "is", "it", "ja", "ja-JP", "ko", "ko-KR", "ku", "ku-TR", "lv", "lt", "li", "li-NL", "hu", "mk", "nl", "nn-NO", "no", "pl", "pt", "pt-BR", "pt-PT", "ro", "ru", "sr", "sr-RS", "fi", "sk", "sl", "sl-SI", "sv", "sv-SE", "ta", "ta-IN", "tr", "te-IN", "uk", "uk-UA", "vi", "vi-VN", "zh-CN", "zh-TW"]
                    , t = fe.locale || (e.browserLanguage || e.language).toLowerCase()
                    , n = Ce(t, a, !0);
                return n || -1 != (e = t.indexOf("-")) && (n = Ce(t.substr(0, e), a, !0)),
                !("en-us" == t || !n) && n
            }
            ,
            Ge = function() {
                var e = I("a2a_localize", _e)
                    , a = fe.localize
                    , t = Ke;
                function n(e) {
                    var a, t = _e.createElement("div");
                    return t.innerHTML = e,
                        a = (t = t.childNodes[0]) ? t.nodeValue : a
                }
                for (var i, o, r, l = 0, s = e.length; l < s; l++)
                    (r = (r = (i = e[l]).getAttribute("data-a2a-localize")) && r.split(",", 2)) && (o = r[0],
                        r = a[r = r[1]] || t[r] || "",
                        "inner" === o ? i.innerHTML = r : "label" === o ? i.setAttribute("aria-label", n(r)) : "title" === o && i.setAttribute("title", n(r)))
            }
            ,
            Ke = {
                Share: "Share",
                Save: "Save",
                Subscribe: "Subscribe",
                Email: "Email",
                Bookmark: "Bookmark",
                ShowAll: "Show all",
                ShowLess: "Show less",
                FindAnyServiceToAddTo: "Find any service",
                PoweredBy: "By",
                AnyEmail: "Any email",
                ShareViaEmail: "Share via email",
                SubscribeViaEmail: "Subscribe via email",
                BookmarkInYourBrowser: "Bookmark in your browser",
                BookmarkInstructions: "Press Ctrl+D or &#8984;+D to bookmark this page",
                AddToYourFavorites: "Add to Favorites",
                SendFromWebOrProgram: "Send from any other email service",
                EmailProgram: "Email application",
                More: "More&#8230;",
                ThanksForSharing: "Thanks for sharing!",
                ThanksForFollowing: "Thanks for following!"
            },
            Xe = function(e) {
                if (x = fe.menu_type || e,
                !me[x] && !pe["a2a" + x + "_init"]) {
                    me[x] = {},
                        pe.a2a_show_dropdown = ne,
                        pe.a2a_miniLeaveDelay = O,
                        pe.a2a_init = ve;
                    var a = {
                        page: {
                            most: [["Facebook", "facebook", "facebook", "1877F2", {
                                pu: 1
                            }], ["Twitter", "twitter", "twitter", "1D9BF0", {
                                pu: 1,
                                na: 1
                            }], ["WhatsApp", "whatsapp", "whatsapp", "12AF0A", {
                                pu: 1,
                                na: 1
                            }], ["Email", "email", "email", "0166FF", {
                                url: "mailto:?subject=${title}&body=${link}"
                            }], ["LinkedIn", "linkedin", "linkedin", "007BB5", {
                                pu: 1,
                                na: 1
                            }], ["Pinterest", "pinterest", "pinterest", "BD081C", {
                                type: "js",
                                src: "https://assets.pinterest.com/js/pinmarklet.js",
                                media: 1,
                                pu: 1
                            }], ["Telegram", "telegram", "telegram", "2CA5E0", {
                                na: 1
                            }], ["Messenger", "facebook_messenger", "facebook_messenger", "0084FF", {
                                pu: 1,
                                na: 1
                            }], ["Reddit", "reddit", "reddit", "ff4500", {
                                na: 1
                            }], ["Gmail", "google_gmail", "gmail", "DD5347", {
                                type: "email",
                                pu: 1
                            }], ["Pocket", "pocket", "pocket", "EE4056"], ["Tumblr", "tumblr", "tumblr", "35465C", {
                                media: 1,
                                pu: 1
                            }], ["Amazon Wish List", "amazon_wish_list", "amazon", "F90"], ["AOL Mail", "aol_mail", "aol", "2A2A2A", {
                                type: "email",
                                pu: 1
                            }], ["Balatarin", "balatarin", "balatarin", "079948"], ["BibSonomy", "bibsonomy", "bibsonomy", "2A2A2A"], ["Bitty Browser", "bitty_browser", "bitty", "999"], ["Blogger", "blogger", "blogger", "FDA352"], ["BlogMarks", "blogmarks", "blogmarks", "535353"], ["Bookmarks.fr", "bookmarks_fr", "bookmarks_fr", "96C044"], ["Box.net", "box_net", "box", "1A74B0"], ["Buffer", "buffer", "buffer", "2A2A2A"], ["Care2 News", "care2_news", "care2", "6EB43F"], ["CiteULike", "citeulike", "citeulike", "2781CD"], ["Copy Link", "copy_link", "link", "0166FF", {
                                type: "js",
                                src: "javascript:a2a.copyLink('${link}')"
                            }], ["Design Float", "design_float", "designfloat", "8AC8FF"], ["Diary.Ru", "diary_ru", "diary_ru", "912D31"], ["Diaspora", "diaspora", "diaspora", "2E3436"], ["Digg", "digg", "digg", "2A2A2A"], ["Diigo", "diigo", "diigo", "4A8BCA"], ["Douban", "douban", "douban", "071", {
                                pu: 1
                            }], ["Draugiem", "draugiem", "draugiem", "F60", {
                                pu: 1
                            }], ["DZone", "dzone", "dzone", "82C251"], ["Evernote", "evernote", "evernote", "00A82D"], ["Fark", "fark", "fark", "555"], ["Flipboard", "flipboard", "flipboard", "C00", {
                                pu: 1
                            }], ["Folkd", "folkd", "folkd", "0F70B2"], ["Google Bookmarks", "google_bookmarks", "google", "4285F4"], ["Google Classroom", "google_classroom", "google_classroom", "FFC112"], ["Hacker News", "hacker_news", "y18", "F60"], ["Hatena", "hatena", "hatena", "00A6DB"], ["Houzz", "houzz", "houzz", "7AC143", {
                                type: "js",
                                src: "https://www.houzz.com/js/clipperBookmarklet.js",
                                media: 1,
                                pu: 1
                            }], ["Instapaper", "instapaper", "instapaper", "2A2A2A"], ["Kakao", "kakao", "kakao", "FCB700", {
                                pu: 1
                            }], ["Kik", "kik", "kik", "2A2A2A"], ["Push to Kindle", "kindle_it", "kindle", "2A2A2A"], ["Known", "known", "known", "2A2A2A"], ["Line", "line", "line", "00C300", {
                                pu: 1,
                                na: 1
                            }], ["LiveJournal", "livejournal", "livejournal", "113140"], ["Mail.Ru", "mail_ru", "mail_ru", "356FAC"], ["Mastodon", "mastodon", "mastodon", "2b90d9"], ["Mendeley", "mendeley", "mendeley", "A70805"], ["Meneame", "meneame", "meneame", "FF7D12"], ["MeWe", "mewe", "mewe", "007DA1"], ["Mixi", "mixi", "mixi", "D1AD5A"], ["MySpace", "myspace", "myspace", "2A2A2A"], ["Netvouz", "netvouz", "netvouz", "6C3"], ["Odnoklassniki", "odnoklassniki", "odnoklassniki", "F2720C"], ["Outlook.com", "outlook_com", "outlook_com", "0072C6", {
                                type: "email"
                            }], ["Papaly", "papaly", "papaly", "3AC0F6", {
                                pu: 1
                            }], ["Pinboard", "pinboard", "pinboard", "1341DE", {
                                pu: 1
                            }], ["Plurk", "plurk", "plurk", "CF682F"], ["Print", "print", "print", "0166FF", {
                                type: "js",
                                src: "javascript:print()"
                            }], ["PrintFriendly", "printfriendly", "printfriendly", "6D9F00"], ["Protopage Bookmarks", "protopage_bookmarks", "protopage", "413FFF"], ["Pusha", "pusha", "pusha", "0072B8"], ["Qzone", "qzone", "qzone", "2B82D9"], ["Rediff MyPage", "rediff", "rediff", "D20000"], ["Refind", "refind", "refind", "1492ef"], ["Renren", "renren", "renren", "005EAC", {
                                pu: 1
                            }], ["Sina Weibo", "sina_weibo", "sina_weibo", "E6162D"], ["SiteJot", "sitejot", "sitejot", "FFC808"], ["Skype", "skype", "skype", "00AFF0"], ["Slashdot", "slashdot", "slashdot", "004242"], ["SMS", "sms", "sms", "6CBE45", {
                                url: "sms:?&body=${title}%20${link}"
                            }], ["StockTwits", "stocktwits", "stocktwits", "40576F", {
                                pu: 1
                            }], ["Svejo", "svejo", "svejo", "5BD428"], ["Symbaloo Bookmarks", "symbaloo_bookmarks", "symbaloo", "6DA8F7"], ["Threema", "threema", "threema", "2A2A2A", {
                                url: "threema://compose?text=${title}%20${link}",
                                na: 1
                            }], ["Trello", "trello", "trello", "0079BF", {
                                pu: 1
                            }], ["Tuenti", "tuenti", "tuenti", "0075C9"], ["Twiddla", "twiddla", "twiddla", "2A2A2A"], ["TypePad Post", "typepad_post", "typepad", "D2DE61"], ["Viadeo", "viadeo", "viadeo", "2A2A2A", {
                                pu: 1
                            }], ["Viber", "viber", "viber", "7C529E", {
                                url: "viber://forward?text=${title}%20${link}",
                                na: 1
                            }], ["VK", "vk", "vk", "587EA3", {
                                pu: 1
                            }], ["Wanelo", "wanelo", "wanelo", "9cb092"], ["WeChat", "wechat", "wechat", "7BB32E"], ["WordPress", "wordpress", "wordpress", "464646"], ["Wykop", "wykop", "wykop", "367DA9"], ["XING", "xing", "xing", "165B66", {
                                pu: 1
                            }], ["Yahoo Mail", "yahoo_mail", "yahoo", "400090", {
                                type: "email"
                            }], ["Yoolink", "yoolink", "yoolink", "A2C538"], ["Yummly", "yummly", "yummly", "E16120", {
                                type: "js",
                                src: "https://www.yummly.com/js/yumlet.js",
                                media: 1,
                                pu: 1
                            }]],
                            email: [["Email", "email", "email", "0166FF", {
                                type: "email"
                            }], ["Gmail", "google_gmail", "gmail", "DD5347", {
                                type: "email",
                                pu: 1
                            }], ["AOL Mail", "aol_mail", "aol", "2A2A2A", {
                                type: "email",
                                pu: 1
                            }], ["Outlook.com", "outlook_com", "outlook_com", "0072C6", {
                                type: "email"
                            }], ["Yahoo Mail", "yahoo_mail", "yahoo", "400090", {
                                type: "email"
                            }]]
                        },
                        feed: {
                            most: [["Feed", "feed", "feed", "E3702D", {
                                url: "${link_noenc}"
                            }], ["Feedly", "feedly", "feedly", "2BB24C"], ["My Yahoo", "my_yahoo", "yahoo", "400090"], ["FeedBlitz", "feedblitz", "feedblitz", "FF8B23", {
                                type: "email"
                            }], ["AOL Reader", "my_aol", "aol", "2A2A2A"], ["The Old Reader", "oldreader", "oldreader", "D73F31"], ["Agregator", "agregator", "agregator", "359440"], ["Bitty Browser Preview", "bitty_browser_preview", "bitty", "999"], ["Daily Rotation", "daily_rotation", "dailyrotation", "2A2A2A"], ["Feed Mailer", "feed_mailer", "feedmailer", "78A8D1"], ["FeedBucket", "feedbucket", "feedbucket", "E3702D"], ["iTunes", "itunes", "itunes", "FB233A", {
                                url: "itpc://${link_nohttp}"
                            }], ["Miro", "miro", "miro", "D41700"], ["Netvibes", "netvibes", "netvibes", "7CA900"], ["NewsAlloy", "newsalloy", "newsalloy", "8E2B3D"], ["NewsIsFree", "newsisfree", "newsisfree", "316CA9"], ["Outlook", "outlook", "outlook_com", "0072C6", {
                                url: "feed://${link_nohttp}"
                            }], ["PodNova", "podnova", "podnova", "B50419"], ["Protopage News Feeds", "protopage_news_feeds", "protopage", "413FFF"], ["Symbaloo Feeds", "symbaloo_feeds", "symbaloo", "6DA8F7"], ["The Free Dictionary", "the_free_dictionary", "thefreedictionary", "004B85"], ["The Free Library", "the_free_library", "thefreelibrary", "004B85"], ["WINKsite", "winksite", "winksite", "6FE738"]],
                            email: [["FeedBlitz", "feedblitz", "feedblitz", "FF8B23", {
                                type: "email"
                            }]]
                        }
                    };
                    he = a.page.most.concat(a.feed.most);
                    var t, n, i, o, r, l, s, c, d, u, p, _ = me[x], f = "feed" == x ? "feed" : "page", m = fe;
                    location.host.split(".").slice(-1);
                    for (t in h)
                        _[t] = m[t];
                    (p = Je()) && "custom" != p && de(m.static_server + "/locale/" + p + ".js", function() {
                        m.localize = pe.a2a_localize,
                            Ge()
                    }),
                        n = x,
                        i = a[f],
                        r = o = "",
                        l = "a2a" + x,
                        s = fe,
                        y(),
                        _e.createElement("a"),
                        c = s.icon_color,
                        d = c && c.split(",", 2),
                        u = d && d[0],
                        e = d && d[1],
                        p = "a2a_svg a2a_s__default a2a_s_",
                        a = u && "unset" != u ? u : "#0166ff",
                        c = '<svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><g fill="' + (f = e || "#FFF") + '"><path d="M14 7h4v18h-4z"/><path d="M7 14h18v4H7z"/></g></svg>',
                        d = Ke,
                        e = s.localize,
                        u = be("a2a_overlay"),
                        x = n,
                        We(a),
                        e = s.localize = {
                            Share: e.Share || d.Share,
                            Save: e.Save || d.Save,
                            Subscribe: e.Subscribe || d.Subscribe,
                            Email: e.Email || d.Email,
                            Bookmark: e.Bookmark || d.Bookmark,
                            ShowAll: e.ShowAll || d.ShowAll,
                            ShowLess: e.ShowLess || d.ShowLess,
                            FindAnyServiceToAddTo: e.FindAnyServiceToAddTo || d.FindAnyServiceToAddTo,
                            PoweredBy: e.PoweredBy || d.PoweredBy,
                            AnyEmail: "Any email",
                            ShareViaEmail: e.ShareViaEmail || d.ShareViaEmail,
                            SubscribeViaEmail: e.SubscribeViaEmail || d.SubscribeViaEmail,
                            BookmarkInYourBrowser: e.BookmarkInYourBrowser || d.BookmarkInYourBrowser,
                            BookmarkInstructions: e.BookmarkInstructions || d.BookmarkInstructions,
                            AddToYourFavorites: e.AddToYourFavorites || d.AddToYourFavorites,
                            SendFromWebOrProgram: e.SendFromWebOrProgram || d.SendFromWebOrProgram,
                            EmailProgram: e.EmailProgram || d.EmailProgram,
                            More: e.More || d.More,
                            ThanksForSharing: e.ThanksForSharing || d.ThanksForSharing,
                            ThanksForFollowing: e.ThanksForFollowing || d.ThanksForFollowing
                        },
                    u || (r += '<div class="a2a_overlay" id="a2a_overlay"></div>',
                        r += '<div id="a2a_modal" class="a2a_modal a2a_hide" role="dialog" tabindex="-1" aria-label="">',
                        r += '<div class="a2a_modal_body a2a_menu a2a_hide" id="a2a_copy_link"><span id="a2a_copy_link_icon" class="a2a_svg a2a_s_link a2a_logo_color"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="' + f + '" d="M24.4 21.18c0-.36-.1-.67-.36-.92l-2.8-2.8a1.24 1.24 0 0 0-.92-.38c-.38 0-.7.14-.97.43.02.04.1.12.25.26l.3.3.2.24c.08.12.14.24.17.35.03.1.05.23.05.37 0 .36-.13.66-.38.92a1.25 1.25 0 0 1-.92.37 1.4 1.4 0 0 1-.37-.03 1.06 1.06 0 0 1-.35-.18 2.27 2.27 0 0 1-.25-.2 6.82 6.82 0 0 1-.3-.3l-.24-.25c-.3.28-.44.6-.44.98 0 .36.13.66.38.92l2.78 2.8c.24.23.54.35.9.35.37 0 .68-.12.93-.35l1.98-1.97c.26-.25.38-.55.38-.9zm-9.46-9.5c0-.37-.13-.67-.38-.92l-2.78-2.8a1.24 1.24 0 0 0-.9-.37c-.36 0-.67.1-.93.35L7.97 9.92c-.26.25-.38.55-.38.9 0 .36.1.67.37.92l2.8 2.8c.24.25.55.37.92.37.36 0 .7-.13.96-.4-.03-.04-.1-.12-.26-.26s-.24-.23-.3-.3a2.67 2.67 0 0 1-.2-.24 1.05 1.05 0 0 1-.17-.35 1.4 1.4 0 0 1-.04-.37c0-.36.1-.66.36-.9.26-.26.56-.4.92-.4.14 0 .26.03.37.06.12.03.23.1.35.17.1.1.2.16.25.2l.3.3.24.26c.3-.28.44-.6.44-.98zM27 21.17c0 1.07-.38 2-1.15 2.73l-1.98 1.98c-.74.75-1.66 1.12-2.73 1.12-1.1 0-2-.38-2.75-1.14l-2.8-2.8c-.74-.74-1.1-1.65-1.1-2.73 0-1.1.38-2.04 1.17-2.82l-1.18-1.17c-.8.8-1.72 1.18-2.82 1.18-1.08 0-2-.36-2.75-1.12l-2.8-2.8C5.38 12.8 5 11.9 5 10.82c0-1.08.38-2 1.15-2.74L8.13 6.1C8.87 5.37 9.78 5 10.86 5c1.1 0 2 .38 2.75 1.15l2.8 2.8c.74.73 1.1 1.65 1.1 2.72 0 1.1-.38 2.05-1.17 2.82l1.18 1.18c.8-.8 1.72-1.2 2.82-1.2 1.08 0 2 .4 2.75 1.14l2.8 2.8c.76.76 1.13 1.68 1.13 2.76z"/></svg></span><input id="a2a_copy_link_text" type="text" title="Copy link" readonly><div id="a2a_copy_link_copied">&check;</div></div>',
                        r += '<div class="a2a_modal_body a2a_menu a2a_thanks a2a_hide" id="a2a_thanks"><div class="a2a_localize" data-a2a-localize="inner,ThanksForSharing">' + e.ThanksForSharing + "</div></div>",
                        r += "</div>"),
                        o += '<div class="a2a_menu a2a_full a2a_localize" id="a2a' + x + '_full" role="dialog" tabindex="-1" aria-label="' + ("feed" == x ? e.Subscribe : e.Share) + '" data-a2a-localize="title,' + ("feed" == x ? "Subscribe" : "Share") + '"><div class="a2a_full_header"><div id="a2a' + x + '_find_container" class="a2a_menu_find_container"><input id="a2a' + x + '_find" class="a2a_menu_find a2a_localize" type="text" autocomplete="off" title="' + e.FindAnyServiceToAddTo + '" data-a2a-localize="title,FindAnyServiceToAddTo"><span id="a2a' + x + '_find_icon" class="a2a_svg a2a_s_find"><svg focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path fill="#CCC" d="M19.7 18.2l-4.5-4.5c.7-1.1 1.2-2.3 1.2-3.6 0-3.5-2.8-6.3-6.3-6.3s-6.3 2.8-6.3 6.3 2.8 6.3 6.3 6.3c1.4 0 2.6-.4 3.6-1.2l4.5 4.5c.6.6 1.3.7 1.7.2.5-.4.4-1.1-.2-1.7zm-9.6-3.6c-2.5 0-4.5-2.1-4.5-4.5 0-2.5 2.1-4.5 4.5-4.5 2.5 0 4.5 2.1 4.5 4.5s-2 4.5-4.5 4.5z"/></svg></span></div></div><div class="a2a_full_services" id="a2a' + x + '_full_services" role="presentation"></div><div class="a2a_full_footer"><a href="https://www.addtoany.com" title="Share Buttons" rel="noopener" target="_blank"><span class="' + p + 'a2a a2a_logo_color">' + c + '</span>AddToAny</a></div></div><div id="a2a' + x + '_dropdown" class="a2a_menu a2a_mini a2a_localize a2a_hide" tabindex="-1" aria-label="' + ("feed" == x ? e.Subscribe : e.Share) + '" data-a2a-localize="label,' + ("feed" == x ? "Subscribe" : "Share") + '"><div class="a2a_mini_services" id="a2a' + x + '_mini_services"></div><div id="a2a' + x + '_cols_container" class="a2a_cols_container"><div class="a2a_col1' + ("mail" == x ? " a2a_hide" : "") + '" id="a2a' + x + '_col1"></div><div id="a2a' + x + '_2_col1"' + ("mail" != x ? ' class="a2a_hide"' : "") + '></div><div class="a2a_clear"></div></div>',
                    "mail" != x && (o += '<div class="a2a' + x + '_wide a2a_wide"><a href="" id="a2a' + x + '_show_more_less" class="a2a_menu_show_more_less a2a_more a2a_localize" title="' + e.ShowAll + '" data-a2a-localize="title,ShowAll"><span class="' + p + 'a2a a2a_logo_color">' + c + '</span><span class="a2a_localize" data-a2a-localize="inner,More">' + e.More + "</a></span></div>"),
                        o += "</div>",
                        u ? g.insertAdjacentHTML("beforeend", o) : g.insertAdjacentHTML("afterbegin", r + o),
                    (o = be(l + "_dropdown")) && (xe(o, "mouseenter", H),
                    me[x].onclick || xe(o, "mouseleave", O)),
                    (o = be(l + "_find")) && (xe(be(l + "_find_icon"), "click", Y),
                        xe(o, "click", Y),
                        xe(o, "keyup", G)),
                    (o = be("a2a_copy_link_icon")) && xe(o, "click", function() {
                        be("a2a_copy_link_text").click()
                    }),
                        me[x].services = i,
                        xe(be("a2a_overlay"), "click", function(e) {
                            ee(x)
                        }),
                    "mail" != x && xe(be(l + "_show_more_less"), "click", function(e) {
                        Ae(e),
                            V()
                    }),
                        je(),
                        w(h)
                }
            }
            ,
            Qe = function() {
                var e, a;
                g || (a = be(e = "a2a_menu_container"),
                    g = a && !L.a2a_done ? a : _e.createElement("div"),
                    xe(g, "click", _),
                    xe(g, "touchstart", _, !!M() && {
                        passive: !0
                    }),
                g.id != e && (g.style.position = "static",
                    _e.body.insertBefore(g, null)))
            }
            ,
            Ze = function() {
                r(),
                    Qe(),
                    n("page"),
                    Oe(),
                    a()
            }
            ,
            pe.a2a = pe.a2a || {},
            pe.a2a.bmBrowser = le,
            pe.a2a.copyLink = se,
            pe.a2a.counters = ke,
            pe.a2a.GA = je,
            pe.a2a.init = ve,
            pe.a2a.init_all = n,
            pe.a2a.svg = Ve,
            pe.a2a.svg_css = qe,
            _e.body && Ze(),
            p.ready(Ze))
    }(window, document);
    !function(e, t) {
        "use strict";
        "object" == typeof module && "object" == typeof module.exports ? module.exports = e.document ? t(e, !0) : function(e) {
            if (!e.document)
                throw new Error("jQuery requires a window with a document");
            return t(e)
        }
        : t(e)
    }("undefined" != typeof window ? window : this, function(C, e) {
        "use strict";
        var t = []
          , r = Object.getPrototypeOf
          , s = t.slice
          , g = t.flat ? function(e) {
            return t.flat.call(e)
        }
        : function(e) {
            return t.concat.apply([], e)
        }
          , u = t.push
          , i = t.indexOf
          , n = {}
          , o = n.toString
          , v = n.hasOwnProperty
          , a = v.toString
          , l = a.call(Object)
          , y = {}
          , m = function(e) {
            return "function" == typeof e && "number" != typeof e.nodeType && "function" != typeof e.item
        }
          , x = function(e) {
            return null != e && e === e.window
        }
          , E = C.document
          , c = {
            type: !0,
            src: !0,
            nonce: !0,
            noModule: !0
        };
        function b(e, t, n) {
            var r, i, o = (n = n || E).createElement("script");
            if (o.text = e,
            t)
                for (r in c)
                    (i = t[r] || t.getAttribute && t.getAttribute(r)) && o.setAttribute(r, i);
            n.head.appendChild(o).parentNode.removeChild(o)
        }
        function w(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? n[o.call(e)] || "object" : typeof e
        }
        var f = "3.6.0"
          , S = function(e, t) {
            return new S.fn.init(e,t)
        };
        function p(e) {
            var t = !!e && "length"in e && e.length
              , n = w(e);
            return !m(e) && !x(e) && ("array" === n || 0 === t || "number" == typeof t && 0 < t && t - 1 in e)
        }
        S.fn = S.prototype = {
            jquery: f,
            constructor: S,
            length: 0,
            toArray: function() {
                return s.call(this)
            },
            get: function(e) {
                return null == e ? s.call(this) : e < 0 ? this[e + this.length] : this[e]
            },
            pushStack: function(e) {
                var t = S.merge(this.constructor(), e);
                return t.prevObject = this,
                t
            },
            each: function(e) {
                return S.each(this, e)
            },
            map: function(n) {
                return this.pushStack(S.map(this, function(e, t) {
                    return n.call(e, t, e)
                }))
            },
            slice: function() {
                return this.pushStack(s.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            even: function() {
                return this.pushStack(S.grep(this, function(e, t) {
                    return (t + 1) % 2
                }))
            },
            odd: function() {
                return this.pushStack(S.grep(this, function(e, t) {
                    return t % 2
                }))
            },
            eq: function(e) {
                var t = this.length
                  , n = +e + (e < 0 ? t : 0);
                return this.pushStack(0 <= n && n < t ? [this[n]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor()
            },
            push: u,
            sort: t.sort,
            splice: t.splice
        },
        S.extend = S.fn.extend = function() {
            var e, t, n, r, i, o, a = arguments[0] || {}, s = 1, u = arguments.length, l = !1;
            for ("boolean" == typeof a && (l = a,
            a = arguments[s] || {},
            s++),
            "object" == typeof a || m(a) || (a = {}),
            s === u && (a = this,
            s--); s < u; s++)
                if (null != (e = arguments[s]))
                    for (t in e)
                        r = e[t],
                        "__proto__" !== t && a !== r && (l && r && (S.isPlainObject(r) || (i = Array.isArray(r))) ? (n = a[t],
                        o = i && !Array.isArray(n) ? [] : i || S.isPlainObject(n) ? n : {},
                        i = !1,
                        a[t] = S.extend(l, o, r)) : void 0 !== r && (a[t] = r));
            return a
        }
        ,
        S.extend({
            expando: "jQuery" + (f + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(e) {
                throw new Error(e)
            },
            noop: function() {},
            isPlainObject: function(e) {
                var t, n;
                return !(!e || "[object Object]" !== o.call(e)) && (!(t = r(e)) || "function" == typeof (n = v.call(t, "constructor") && t.constructor) && a.call(n) === l)
            },
            isEmptyObject: function(e) {
                var t;
                for (t in e)
                    return !1;
                return !0
            },
            globalEval: function(e, t, n) {
                b(e, {
                    nonce: t && t.nonce
                }, n)
            },
            each: function(e, t) {
                var n, r = 0;
                if (p(e)) {
                    for (n = e.length; r < n; r++)
                        if (!1 === t.call(e[r], r, e[r]))
                            break
                } else
                    for (r in e)
                        if (!1 === t.call(e[r], r, e[r]))
                            break;
                return e
            },
            makeArray: function(e, t) {
                var n = t || [];
                return null != e && (p(Object(e)) ? S.merge(n, "string" == typeof e ? [e] : e) : u.call(n, e)),
                n
            },
            inArray: function(e, t, n) {
                return null == t ? -1 : i.call(t, e, n)
            },
            merge: function(e, t) {
                for (var n = +t.length, r = 0, i = e.length; r < n; r++)
                    e[i++] = t[r];
                return e.length = i,
                e
            },
            grep: function(e, t, n) {
                for (var r = [], i = 0, o = e.length, a = !n; i < o; i++)
                    !t(e[i], i) !== a && r.push(e[i]);
                return r
            },
            map: function(e, t, n) {
                var r, i, o = 0, a = [];
                if (p(e))
                    for (r = e.length; o < r; o++)
                        null != (i = t(e[o], o, n)) && a.push(i);
                else
                    for (o in e)
                        null != (i = t(e[o], o, n)) && a.push(i);
                return g(a)
            },
            guid: 1,
            support: y
        }),
        "function" == typeof Symbol && (S.fn[Symbol.iterator] = t[Symbol.iterator]),
        S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            n["[object " + t + "]"] = t.toLowerCase()
        });
        var d = function(n) {
            var e, d, b, o, i, h, f, g, w, u, l, T, C, a, E, v, s, c, y, S = "sizzle" + 1 * new Date, p = n.document, k = 0, r = 0, m = ue(), x = ue(), A = ue(), N = ue(), j = function(e, t) {
                return e === t && (l = !0),
                0
            }, D = {}.hasOwnProperty, t = [], q = t.pop, L = t.push, H = t.push, O = t.slice, P = function(e, t) {
                for (var n = 0, r = e.length; n < r; n++)
                    if (e[n] === t)
                        return n;
                return -1
            }, R = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", M = "[\\x20\\t\\r\\n\\f]", I = "(?:\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+", W = "\\[" + M + "*(" + I + ")(?:" + M + "*([*^$|!~]?=)" + M + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + I + "))|)" + M + "*\\]", F = ":(" + I + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + W + ")*)|.*)\\)|)", B = new RegExp(M + "+","g"), $ = new RegExp("^" + M + "+|((?:^|[^\\\\])(?:\\\\.)*)" + M + "+$","g"), _ = new RegExp("^" + M + "*," + M + "*"), z = new RegExp("^" + M + "*([>+~]|" + M + ")" + M + "*"), U = new RegExp(M + "|>"), X = new RegExp(F), V = new RegExp("^" + I + "$"), G = {
                ID: new RegExp("^#(" + I + ")"),
                CLASS: new RegExp("^\\.(" + I + ")"),
                TAG: new RegExp("^(" + I + "|[*])"),
                ATTR: new RegExp("^" + W),
                PSEUDO: new RegExp("^" + F),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + M + "*(even|odd|(([+-]|)(\\d*)n|)" + M + "*(?:([+-]|)" + M + "*(\\d+)|))" + M + "*\\)|)","i"),
                bool: new RegExp("^(?:" + R + ")$","i"),
                needsContext: new RegExp("^" + M + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + M + "*((?:-\\d)?\\d*)" + M + "*\\)|)(?=[^-]|$)","i")
            }, Y = /HTML$/i, Q = /^(?:input|select|textarea|button)$/i, J = /^h\d$/i, K = /^[^{]+\{\s*\[native \w/, Z = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ee = /[+~]/, te = new RegExp("\\\\[\\da-fA-F]{1,6}" + M + "?|\\\\([^\\r\\n\\f])","g"), ne = function(e, t) {
                var n = "0x" + e.slice(1) - 65536;
                return t || (n < 0 ? String.fromCharCode(n + 65536) : String.fromCharCode(n >> 10 | 55296, 1023 & n | 56320))
            }, re = /([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g, ie = function(e, t) {
                return t ? "\0" === e ? "\ufffd" : e.slice(0, -1) + "\\" + e.charCodeAt(e.length - 1).toString(16) + " " : "\\" + e
            }, oe = function() {
                T()
            }, ae = be(function(e) {
                return !0 === e.disabled && "fieldset" === e.nodeName.toLowerCase()
            }, {
                dir: "parentNode",
                next: "legend"
            });
            try {
                H.apply(t = O.call(p.childNodes), p.childNodes),
                t[p.childNodes.length].nodeType
            } catch (e) {
                H = {
                    apply: t.length ? function(e, t) {
                        L.apply(e, O.call(t))
                    }
                    : function(e, t) {
                        var n = e.length
                          , r = 0;
                        while (e[n++] = t[r++])
                            ;
                        e.length = n - 1
                    }
                }
            }
            function se(t, e, n, r) {
                var i, o, a, s, u, l, c, f = e && e.ownerDocument, p = e ? e.nodeType : 9;
                if (n = n || [],
                "string" != typeof t || !t || 1 !== p && 9 !== p && 11 !== p)
                    return n;
                if (!r && (T(e),
                e = e || C,
                E)) {
                    if (11 !== p && (u = Z.exec(t)))
                        if (i = u[1]) {
                            if (9 === p) {
                                if (!(a = e.getElementById(i)))
                                    return n;
                                if (a.id === i)
                                    return n.push(a),
                                    n
                            } else if (f && (a = f.getElementById(i)) && y(e, a) && a.id === i)
                                return n.push(a),
                                n
                        } else {
                            if (u[2])
                                return H.apply(n, e.getElementsByTagName(t)),
                                n;
                            if ((i = u[3]) && d.getElementsByClassName && e.getElementsByClassName)
                                return H.apply(n, e.getElementsByClassName(i)),
                                n
                        }
                    if (d.qsa && !N[t + " "] && (!v || !v.test(t)) && (1 !== p || "object" !== e.nodeName.toLowerCase())) {
                        if (c = t,
                        f = e,
                        1 === p && (U.test(t) || z.test(t))) {
                            (f = ee.test(t) && ye(e.parentNode) || e) === e && d.scope || ((s = e.getAttribute("id")) ? s = s.replace(re, ie) : e.setAttribute("id", s = S)),
                            o = (l = h(t)).length;
                            while (o--)
                                l[o] = (s ? "#" + s : ":scope") + " " + xe(l[o]);
                            c = l.join(",")
                        }
                        try {
                            return H.apply(n, f.querySelectorAll(c)),
                            n
                        } catch (e) {
                            N(t, !0)
                        } finally {
                            s === S && e.removeAttribute("id")
                        }
                    }
                }
                return g(t.replace($, "$1"), e, n, r)
            }
            function ue() {
                var r = [];
                return function e(t, n) {
                    return r.push(t + " ") > b.cacheLength && delete e[r.shift()],
                    e[t + " "] = n
                }
            }
            function le(e) {
                return e[S] = !0,
                e
            }
            function ce(e) {
                var t = C.createElement("fieldset");
                try {
                    return !!e(t)
                } catch (e) {
                    return !1
                } finally {
                    t.parentNode && t.parentNode.removeChild(t),
                    t = null
                }
            }
            function fe(e, t) {
                var n = e.split("|")
                  , r = n.length;
                while (r--)
                    b.attrHandle[n[r]] = t
            }
            function pe(e, t) {
                var n = t && e
                  , r = n && 1 === e.nodeType && 1 === t.nodeType && e.sourceIndex - t.sourceIndex;
                if (r)
                    return r;
                if (n)
                    while (n = n.nextSibling)
                        if (n === t)
                            return -1;
                return e ? 1 : -1
            }
            function de(t) {
                return function(e) {
                    return "input" === e.nodeName.toLowerCase() && e.type === t
                }
            }
            function he(n) {
                return function(e) {
                    var t = e.nodeName.toLowerCase();
                    return ("input" === t || "button" === t) && e.type === n
                }
            }
            function ge(t) {
                return function(e) {
                    return "form"in e ? e.parentNode && !1 === e.disabled ? "label"in e ? "label"in e.parentNode ? e.parentNode.disabled === t : e.disabled === t : e.isDisabled === t || e.isDisabled !== !t && ae(e) === t : e.disabled === t : "label"in e && e.disabled === t
                }
            }
            function ve(a) {
                return le(function(o) {
                    return o = +o,
                    le(function(e, t) {
                        var n, r = a([], e.length, o), i = r.length;
                        while (i--)
                            e[n = r[i]] && (e[n] = !(t[n] = e[n]))
                    })
                })
            }
            function ye(e) {
                return e && "undefined" != typeof e.getElementsByTagName && e
            }
            for (e in d = se.support = {},
            i = se.isXML = function(e) {
                var t = e && e.namespaceURI
                  , n = e && (e.ownerDocument || e).documentElement;
                return !Y.test(t || n && n.nodeName || "HTML")
            }
            ,
            T = se.setDocument = function(e) {
                var t, n, r = e ? e.ownerDocument || e : p;
                return r != C && 9 === r.nodeType && r.documentElement && (a = (C = r).documentElement,
                E = !i(C),
                p != C && (n = C.defaultView) && n.top !== n && (n.addEventListener ? n.addEventListener("unload", oe, !1) : n.attachEvent && n.attachEvent("onunload", oe)),
                d.scope = ce(function(e) {
                    return a.appendChild(e).appendChild(C.createElement("div")),
                    "undefined" != typeof e.querySelectorAll && !e.querySelectorAll(":scope fieldset div").length
                }),
                d.attributes = ce(function(e) {
                    return e.className = "i",
                    !e.getAttribute("className")
                }),
                d.getElementsByTagName = ce(function(e) {
                    return e.appendChild(C.createComment("")),
                    !e.getElementsByTagName("*").length
                }),
                d.getElementsByClassName = K.test(C.getElementsByClassName),
                d.getById = ce(function(e) {
                    return a.appendChild(e).id = S,
                    !C.getElementsByName || !C.getElementsByName(S).length
                }),
                d.getById ? (b.filter.ID = function(e) {
                    var t = e.replace(te, ne);
                    return function(e) {
                        return e.getAttribute("id") === t
                    }
                }
                ,
                b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n = t.getElementById(e);
                        return n ? [n] : []
                    }
                }
                ) : (b.filter.ID = function(e) {
                    var n = e.replace(te, ne);
                    return function(e) {
                        var t = "undefined" != typeof e.getAttributeNode && e.getAttributeNode("id");
                        return t && t.value === n
                    }
                }
                ,
                b.find.ID = function(e, t) {
                    if ("undefined" != typeof t.getElementById && E) {
                        var n, r, i, o = t.getElementById(e);
                        if (o) {
                            if ((n = o.getAttributeNode("id")) && n.value === e)
                                return [o];
                            i = t.getElementsByName(e),
                            r = 0;
                            while (o = i[r++])
                                if ((n = o.getAttributeNode("id")) && n.value === e)
                                    return [o]
                        }
                        return []
                    }
                }
                ),
                b.find.TAG = d.getElementsByTagName ? function(e, t) {
                    return "undefined" != typeof t.getElementsByTagName ? t.getElementsByTagName(e) : d.qsa ? t.querySelectorAll(e) : void 0
                }
                : function(e, t) {
                    var n, r = [], i = 0, o = t.getElementsByTagName(e);
                    if ("*" === e) {
                        while (n = o[i++])
                            1 === n.nodeType && r.push(n);
                        return r
                    }
                    return o
                }
                ,
                b.find.CLASS = d.getElementsByClassName && function(e, t) {
                    if ("undefined" != typeof t.getElementsByClassName && E)
                        return t.getElementsByClassName(e)
                }
                ,
                s = [],
                v = [],
                (d.qsa = K.test(C.querySelectorAll)) && (ce(function(e) {
                    var t;
                    a.appendChild(e).innerHTML = "<a id='" + S + "'></a><select id='" + S + "-\r\\' msallowcapture=''><option selected=''></option></select>",
                    e.querySelectorAll("[msallowcapture^='']").length && v.push("[*^$]=" + M + "*(?:''|\"\")"),
                    e.querySelectorAll("[selected]").length || v.push("\\[" + M + "*(?:value|" + R + ")"),
                    e.querySelectorAll("[id~=" + S + "-]").length || v.push("~="),
                    (t = C.createElement("input")).setAttribute("name", ""),
                    e.appendChild(t),
                    e.querySelectorAll("[name='']").length || v.push("\\[" + M + "*name" + M + "*=" + M + "*(?:''|\"\")"),
                    e.querySelectorAll(":checked").length || v.push(":checked"),
                    e.querySelectorAll("a#" + S + "+*").length || v.push(".#.+[+~]"),
                    e.querySelectorAll("\\\f"),
                    v.push("[\\r\\n\\f]")
                }),
                ce(function(e) {
                    e.innerHTML = "<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";
                    var t = C.createElement("input");
                    t.setAttribute("type", "hidden"),
                    e.appendChild(t).setAttribute("name", "D"),
                    e.querySelectorAll("[name=d]").length && v.push("name" + M + "*[*^$|!~]?="),
                    2 !== e.querySelectorAll(":enabled").length && v.push(":enabled", ":disabled"),
                    a.appendChild(e).disabled = !0,
                    2 !== e.querySelectorAll(":disabled").length && v.push(":enabled", ":disabled"),
                    e.querySelectorAll("*,:x"),
                    v.push(",.*:")
                })),
                (d.matchesSelector = K.test(c = a.matches || a.webkitMatchesSelector || a.mozMatchesSelector || a.oMatchesSelector || a.msMatchesSelector)) && ce(function(e) {
                    d.disconnectedMatch = c.call(e, "*"),
                    c.call(e, "[s!='']:x"),
                    s.push("!=", F)
                }),
                v = v.length && new RegExp(v.join("|")),
                s = s.length && new RegExp(s.join("|")),
                t = K.test(a.compareDocumentPosition),
                y = t || K.test(a.contains) ? function(e, t) {
                    var n = 9 === e.nodeType ? e.documentElement : e
                      , r = t && t.parentNode;
                    return e === r || !(!r || 1 !== r.nodeType || !(n.contains ? n.contains(r) : e.compareDocumentPosition && 16 & e.compareDocumentPosition(r)))
                }
                : function(e, t) {
                    if (t)
                        while (t = t.parentNode)
                            if (t === e)
                                return !0;
                    return !1
                }
                ,
                j = t ? function(e, t) {
                    if (e === t)
                        return l = !0,
                        0;
                    var n = !e.compareDocumentPosition - !t.compareDocumentPosition;
                    return n || (1 & (n = (e.ownerDocument || e) == (t.ownerDocument || t) ? e.compareDocumentPosition(t) : 1) || !d.sortDetached && t.compareDocumentPosition(e) === n ? e == C || e.ownerDocument == p && y(p, e) ? -1 : t == C || t.ownerDocument == p && y(p, t) ? 1 : u ? P(u, e) - P(u, t) : 0 : 4 & n ? -1 : 1)
                }
                : function(e, t) {
                    if (e === t)
                        return l = !0,
                        0;
                    var n, r = 0, i = e.parentNode, o = t.parentNode, a = [e], s = [t];
                    if (!i || !o)
                        return e == C ? -1 : t == C ? 1 : i ? -1 : o ? 1 : u ? P(u, e) - P(u, t) : 0;
                    if (i === o)
                        return pe(e, t);
                    n = e;
                    while (n = n.parentNode)
                        a.unshift(n);
                    n = t;
                    while (n = n.parentNode)
                        s.unshift(n);
                    while (a[r] === s[r])
                        r++;
                    return r ? pe(a[r], s[r]) : a[r] == p ? -1 : s[r] == p ? 1 : 0
                }
                ),
                C
            }
            ,
            se.matches = function(e, t) {
                return se(e, null, null, t)
            }
            ,
            se.matchesSelector = function(e, t) {
                if (T(e),
                d.matchesSelector && E && !N[t + " "] && (!s || !s.test(t)) && (!v || !v.test(t)))
                    try {
                        var n = c.call(e, t);
                        if (n || d.disconnectedMatch || e.document && 11 !== e.document.nodeType)
                            return n
                    } catch (e) {
                        N(t, !0)
                    }
                return 0 < se(t, C, null, [e]).length
            }
            ,
            se.contains = function(e, t) {
                return (e.ownerDocument || e) != C && T(e),
                y(e, t)
            }
            ,
            se.attr = function(e, t) {
                (e.ownerDocument || e) != C && T(e);
                var n = b.attrHandle[t.toLowerCase()]
                  , r = n && D.call(b.attrHandle, t.toLowerCase()) ? n(e, t, !E) : void 0;
                return void 0 !== r ? r : d.attributes || !E ? e.getAttribute(t) : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }
            ,
            se.escape = function(e) {
                return (e + "").replace(re, ie)
            }
            ,
            se.error = function(e) {
                throw new Error("Syntax error, unrecognized expression: " + e)
            }
            ,
            se.uniqueSort = function(e) {
                var t, n = [], r = 0, i = 0;
                if (l = !d.detectDuplicates,
                u = !d.sortStable && e.slice(0),
                e.sort(j),
                l) {
                    while (t = e[i++])
                        t === e[i] && (r = n.push(i));
                    while (r--)
                        e.splice(n[r], 1)
                }
                return u = null,
                e
            }
            ,
            o = se.getText = function(e) {
                var t, n = "", r = 0, i = e.nodeType;
                if (i) {
                    if (1 === i || 9 === i || 11 === i) {
                        if ("string" == typeof e.textContent)
                            return e.textContent;
                        for (e = e.firstChild; e; e = e.nextSibling)
                            n += o(e)
                    } else if (3 === i || 4 === i)
                        return e.nodeValue
                } else
                    while (t = e[r++])
                        n += o(t);
                return n
            }
            ,
            (b = se.selectors = {
                cacheLength: 50,
                createPseudo: le,
                match: G,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(e) {
                        return e[1] = e[1].replace(te, ne),
                        e[3] = (e[3] || e[4] || e[5] || "").replace(te, ne),
                        "~=" === e[2] && (e[3] = " " + e[3] + " "),
                        e.slice(0, 4)
                    },
                    CHILD: function(e) {
                        return e[1] = e[1].toLowerCase(),
                        "nth" === e[1].slice(0, 3) ? (e[3] || se.error(e[0]),
                        e[4] = +(e[4] ? e[5] + (e[6] || 1) : 2 * ("even" === e[3] || "odd" === e[3])),
                        e[5] = +(e[7] + e[8] || "odd" === e[3])) : e[3] && se.error(e[0]),
                        e
                    },
                    PSEUDO: function(e) {
                        var t, n = !e[6] && e[2];
                        return G.CHILD.test(e[0]) ? null : (e[3] ? e[2] = e[4] || e[5] || "" : n && X.test(n) && (t = h(n, !0)) && (t = n.indexOf(")", n.length - t) - n.length) && (e[0] = e[0].slice(0, t),
                        e[2] = n.slice(0, t)),
                        e.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(e) {
                        var t = e.replace(te, ne).toLowerCase();
                        return "*" === e ? function() {
                            return !0
                        }
                        : function(e) {
                            return e.nodeName && e.nodeName.toLowerCase() === t
                        }
                    },
                    CLASS: function(e) {
                        var t = m[e + " "];
                        return t || (t = new RegExp("(^|" + M + ")" + e + "(" + M + "|$)")) && m(e, function(e) {
                            return t.test("string" == typeof e.className && e.className || "undefined" != typeof e.getAttribute && e.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(n, r, i) {
                        return function(e) {
                            var t = se.attr(e, n);
                            return null == t ? "!=" === r : !r || (t += "",
                            "=" === r ? t === i : "!=" === r ? t !== i : "^=" === r ? i && 0 === t.indexOf(i) : "*=" === r ? i && -1 < t.indexOf(i) : "$=" === r ? i && t.slice(-i.length) === i : "~=" === r ? -1 < (" " + t.replace(B, " ") + " ").indexOf(i) : "|=" === r && (t === i || t.slice(0, i.length + 1) === i + "-"))
                        }
                    },
                    CHILD: function(h, e, t, g, v) {
                        var y = "nth" !== h.slice(0, 3)
                          , m = "last" !== h.slice(-4)
                          , x = "of-type" === e;
                        return 1 === g && 0 === v ? function(e) {
                            return !!e.parentNode
                        }
                        : function(e, t, n) {
                            var r, i, o, a, s, u, l = y !== m ? "nextSibling" : "previousSibling", c = e.parentNode, f = x && e.nodeName.toLowerCase(), p = !n && !x, d = !1;
                            if (c) {
                                if (y) {
                                    while (l) {
                                        a = e;
                                        while (a = a[l])
                                            if (x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType)
                                                return !1;
                                        u = l = "only" === h && !u && "nextSibling"
                                    }
                                    return !0
                                }
                                if (u = [m ? c.firstChild : c.lastChild],
                                m && p) {
                                    d = (s = (r = (i = (o = (a = c)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]) && r[2],
                                    a = s && c.childNodes[s];
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if (1 === a.nodeType && ++d && a === e) {
                                            i[h] = [k, s, d];
                                            break
                                        }
                                } else if (p && (d = s = (r = (i = (o = (a = e)[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] || [])[0] === k && r[1]),
                                !1 === d)
                                    while (a = ++s && a && a[l] || (d = s = 0) || u.pop())
                                        if ((x ? a.nodeName.toLowerCase() === f : 1 === a.nodeType) && ++d && (p && ((i = (o = a[S] || (a[S] = {}))[a.uniqueID] || (o[a.uniqueID] = {}))[h] = [k, d]),
                                        a === e))
                                            break;
                                return (d -= v) === g || d % g == 0 && 0 <= d / g
                            }
                        }
                    },
                    PSEUDO: function(e, o) {
                        var t, a = b.pseudos[e] || b.setFilters[e.toLowerCase()] || se.error("unsupported pseudo: " + e);
                        return a[S] ? a(o) : 1 < a.length ? (t = [e, e, "", o],
                        b.setFilters.hasOwnProperty(e.toLowerCase()) ? le(function(e, t) {
                            var n, r = a(e, o), i = r.length;
                            while (i--)
                                e[n = P(e, r[i])] = !(t[n] = r[i])
                        }) : function(e) {
                            return a(e, 0, t)
                        }
                        ) : a
                    }
                },
                pseudos: {
                    not: le(function(e) {
                        var r = []
                          , i = []
                          , s = f(e.replace($, "$1"));
                        return s[S] ? le(function(e, t, n, r) {
                            var i, o = s(e, null, r, []), a = e.length;
                            while (a--)
                                (i = o[a]) && (e[a] = !(t[a] = i))
                        }) : function(e, t, n) {
                            return r[0] = e,
                            s(r, null, n, i),
                            r[0] = null,
                            !i.pop()
                        }
                    }),
                    has: le(function(t) {
                        return function(e) {
                            return 0 < se(t, e).length
                        }
                    }),
                    contains: le(function(t) {
                        return t = t.replace(te, ne),
                        function(e) {
                            return -1 < (e.textContent || o(e)).indexOf(t)
                        }
                    }),
                    lang: le(function(n) {
                        return V.test(n || "") || se.error("unsupported lang: " + n),
                        n = n.replace(te, ne).toLowerCase(),
                        function(e) {
                            var t;
                            do {
                                if (t = E ? e.lang : e.getAttribute("xml:lang") || e.getAttribute("lang"))
                                    return (t = t.toLowerCase()) === n || 0 === t.indexOf(n + "-")
                            } while ((e = e.parentNode) && 1 === e.nodeType);
                            return !1
                        }
                    }),
                    target: function(e) {
                        var t = n.location && n.location.hash;
                        return t && t.slice(1) === e.id
                    },
                    root: function(e) {
                        return e === a
                    },
                    focus: function(e) {
                        return e === C.activeElement && (!C.hasFocus || C.hasFocus()) && !!(e.type || e.href || ~e.tabIndex)
                    },
                    enabled: ge(!1),
                    disabled: ge(!0),
                    checked: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && !!e.checked || "option" === t && !!e.selected
                    },
                    selected: function(e) {
                        return e.parentNode && e.parentNode.selectedIndex,
                        !0 === e.selected
                    },
                    empty: function(e) {
                        for (e = e.firstChild; e; e = e.nextSibling)
                            if (e.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(e) {
                        return !b.pseudos.empty(e)
                    },
                    header: function(e) {
                        return J.test(e.nodeName)
                    },
                    input: function(e) {
                        return Q.test(e.nodeName)
                    },
                    button: function(e) {
                        var t = e.nodeName.toLowerCase();
                        return "input" === t && "button" === e.type || "button" === t
                    },
                    text: function(e) {
                        var t;
                        return "input" === e.nodeName.toLowerCase() && "text" === e.type && (null == (t = e.getAttribute("type")) || "text" === t.toLowerCase())
                    },
                    first: ve(function() {
                        return [0]
                    }),
                    last: ve(function(e, t) {
                        return [t - 1]
                    }),
                    eq: ve(function(e, t, n) {
                        return [n < 0 ? n + t : n]
                    }),
                    even: ve(function(e, t) {
                        for (var n = 0; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    odd: ve(function(e, t) {
                        for (var n = 1; n < t; n += 2)
                            e.push(n);
                        return e
                    }),
                    lt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : t < n ? t : n; 0 <= --r; )
                            e.push(r);
                        return e
                    }),
                    gt: ve(function(e, t, n) {
                        for (var r = n < 0 ? n + t : n; ++r < t; )
                            e.push(r);
                        return e
                    })
                }
            }).pseudos.nth = b.pseudos.eq,
            {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                b.pseudos[e] = de(e);
            for (e in {
                submit: !0,
                reset: !0
            })
                b.pseudos[e] = he(e);
            function me() {}
            function xe(e) {
                for (var t = 0, n = e.length, r = ""; t < n; t++)
                    r += e[t].value;
                return r
            }
            function be(s, e, t) {
                var u = e.dir
                  , l = e.next
                  , c = l || u
                  , f = t && "parentNode" === c
                  , p = r++;
                return e.first ? function(e, t, n) {
                    while (e = e[u])
                        if (1 === e.nodeType || f)
                            return s(e, t, n);
                    return !1
                }
                : function(e, t, n) {
                    var r, i, o, a = [k, p];
                    if (n) {
                        while (e = e[u])
                            if ((1 === e.nodeType || f) && s(e, t, n))
                                return !0
                    } else
                        while (e = e[u])
                            if (1 === e.nodeType || f)
                                if (i = (o = e[S] || (e[S] = {}))[e.uniqueID] || (o[e.uniqueID] = {}),
                                l && l === e.nodeName.toLowerCase())
                                    e = e[u] || e;
                                else {
                                    if ((r = i[c]) && r[0] === k && r[1] === p)
                                        return a[2] = r[2];
                                    if ((i[c] = a)[2] = s(e, t, n))
                                        return !0
                                }
                    return !1
                }
            }
            function we(i) {
                return 1 < i.length ? function(e, t, n) {
                    var r = i.length;
                    while (r--)
                        if (!i[r](e, t, n))
                            return !1;
                    return !0
                }
                : i[0]
            }
            function Te(e, t, n, r, i) {
                for (var o, a = [], s = 0, u = e.length, l = null != t; s < u; s++)
                    (o = e[s]) && (n && !n(o, r, i) || (a.push(o),
                    l && t.push(s)));
                return a
            }
            function Ce(d, h, g, v, y, e) {
                return v && !v[S] && (v = Ce(v)),
                y && !y[S] && (y = Ce(y, e)),
                le(function(e, t, n, r) {
                    var i, o, a, s = [], u = [], l = t.length, c = e || function(e, t, n) {
                        for (var r = 0, i = t.length; r < i; r++)
                            se(e, t[r], n);
                        return n
                    }(h || "*", n.nodeType ? [n] : n, []), f = !d || !e && h ? c : Te(c, s, d, n, r), p = g ? y || (e ? d : l || v) ? [] : t : f;
                    if (g && g(f, p, n, r),
                    v) {
                        i = Te(p, u),
                        v(i, [], n, r),
                        o = i.length;
                        while (o--)
                            (a = i[o]) && (p[u[o]] = !(f[u[o]] = a))
                    }
                    if (e) {
                        if (y || d) {
                            if (y) {
                                i = [],
                                o = p.length;
                                while (o--)
                                    (a = p[o]) && i.push(f[o] = a);
                                y(null, p = [], i, r)
                            }
                            o = p.length;
                            while (o--)
                                (a = p[o]) && -1 < (i = y ? P(e, a) : s[o]) && (e[i] = !(t[i] = a))
                        }
                    } else
                        p = Te(p === t ? p.splice(l, p.length) : p),
                        y ? y(null, t, p, r) : H.apply(t, p)
                })
            }
            function Ee(e) {
                for (var i, t, n, r = e.length, o = b.relative[e[0].type], a = o || b.relative[" "], s = o ? 1 : 0, u = be(function(e) {
                    return e === i
                }, a, !0), l = be(function(e) {
                    return -1 < P(i, e)
                }, a, !0), c = [function(e, t, n) {
                    var r = !o && (n || t !== w) || ((i = t).nodeType ? u(e, t, n) : l(e, t, n));
                    return i = null,
                    r
                }
                ]; s < r; s++)
                    if (t = b.relative[e[s].type])
                        c = [be(we(c), t)];
                    else {
                        if ((t = b.filter[e[s].type].apply(null, e[s].matches))[S]) {
                            for (n = ++s; n < r; n++)
                                if (b.relative[e[n].type])
                                    break;
                            return Ce(1 < s && we(c), 1 < s && xe(e.slice(0, s - 1).concat({
                                value: " " === e[s - 2].type ? "*" : ""
                            })).replace($, "$1"), t, s < n && Ee(e.slice(s, n)), n < r && Ee(e = e.slice(n)), n < r && xe(e))
                        }
                        c.push(t)
                    }
                return we(c)
            }
            return me.prototype = b.filters = b.pseudos,
            b.setFilters = new me,
            h = se.tokenize = function(e, t) {
                var n, r, i, o, a, s, u, l = x[e + " "];
                if (l)
                    return t ? 0 : l.slice(0);
                a = e,
                s = [],
                u = b.preFilter;
                while (a) {
                    for (o in n && !(r = _.exec(a)) || (r && (a = a.slice(r[0].length) || a),
                    s.push(i = [])),
                    n = !1,
                    (r = z.exec(a)) && (n = r.shift(),
                    i.push({
                        value: n,
                        type: r[0].replace($, " ")
                    }),
                    a = a.slice(n.length)),
                    b.filter)
                        !(r = G[o].exec(a)) || u[o] && !(r = u[o](r)) || (n = r.shift(),
                        i.push({
                            value: n,
                            type: o,
                            matches: r
                        }),
                        a = a.slice(n.length));
                    if (!n)
                        break
                }
                return t ? a.length : a ? se.error(e) : x(e, s).slice(0)
            }
            ,
            f = se.compile = function(e, t) {
                var n, v, y, m, x, r, i = [], o = [], a = A[e + " "];
                if (!a) {
                    t || (t = h(e)),
                    n = t.length;
                    while (n--)
                        (a = Ee(t[n]))[S] ? i.push(a) : o.push(a);
                    (a = A(e, (v = o,
                    m = 0 < (y = i).length,
                    x = 0 < v.length,
                    r = function(e, t, n, r, i) {
                        var o, a, s, u = 0, l = "0", c = e && [], f = [], p = w, d = e || x && b.find.TAG("*", i), h = k += null == p ? 1 : Math.random() || .1, g = d.length;
                        for (i && (w = t == C || t || i); l !== g && null != (o = d[l]); l++) {
                            if (x && o) {
                                a = 0,
                                t || o.ownerDocument == C || (T(o),
                                n = !E);
                                while (s = v[a++])
                                    if (s(o, t || C, n)) {
                                        r.push(o);
                                        break
                                    }
                                i && (k = h)
                            }
                            m && ((o = !s && o) && u--,
                            e && c.push(o))
                        }
                        if (u += l,
                        m && l !== u) {
                            a = 0;
                            while (s = y[a++])
                                s(c, f, t, n);
                            if (e) {
                                if (0 < u)
                                    while (l--)
                                        c[l] || f[l] || (f[l] = q.call(r));
                                f = Te(f)
                            }
                            H.apply(r, f),
                            i && !e && 0 < f.length && 1 < u + y.length && se.uniqueSort(r)
                        }
                        return i && (k = h,
                        w = p),
                        c
                    }
                    ,
                    m ? le(r) : r))).selector = e
                }
                return a
            }
            ,
            g = se.select = function(e, t, n, r) {
                var i, o, a, s, u, l = "function" == typeof e && e, c = !r && h(e = l.selector || e);
                if (n = n || [],
                1 === c.length) {
                    if (2 < (o = c[0] = c[0].slice(0)).length && "ID" === (a = o[0]).type && 9 === t.nodeType && E && b.relative[o[1].type]) {
                        if (!(t = (b.find.ID(a.matches[0].replace(te, ne), t) || [])[0]))
                            return n;
                        l && (t = t.parentNode),
                        e = e.slice(o.shift().value.length)
                    }
                    i = G.needsContext.test(e) ? 0 : o.length;
                    while (i--) {
                        if (a = o[i],
                        b.relative[s = a.type])
                            break;
                        if ((u = b.find[s]) && (r = u(a.matches[0].replace(te, ne), ee.test(o[0].type) && ye(t.parentNode) || t))) {
                            if (o.splice(i, 1),
                            !(e = r.length && xe(o)))
                                return H.apply(n, r),
                                n;
                            break
                        }
                    }
                }
                return (l || f(e, c))(r, t, !E, n, !t || ee.test(e) && ye(t.parentNode) || t),
                n
            }
            ,
            d.sortStable = S.split("").sort(j).join("") === S,
            d.detectDuplicates = !!l,
            T(),
            d.sortDetached = ce(function(e) {
                return 1 & e.compareDocumentPosition(C.createElement("fieldset"))
            }),
            ce(function(e) {
                return e.innerHTML = "<a href='#'></a>",
                "#" === e.firstChild.getAttribute("href")
            }) || fe("type|href|height|width", function(e, t, n) {
                if (!n)
                    return e.getAttribute(t, "type" === t.toLowerCase() ? 1 : 2)
            }),
            d.attributes && ce(function(e) {
                return e.innerHTML = "<input/>",
                e.firstChild.setAttribute("value", ""),
                "" === e.firstChild.getAttribute("value")
            }) || fe("value", function(e, t, n) {
                if (!n && "input" === e.nodeName.toLowerCase())
                    return e.defaultValue
            }),
            ce(function(e) {
                return null == e.getAttribute("disabled")
            }) || fe(R, function(e, t, n) {
                var r;
                if (!n)
                    return !0 === e[t] ? t.toLowerCase() : (r = e.getAttributeNode(t)) && r.specified ? r.value : null
            }),
            se
        }(C);
        S.find = d,
        S.expr = d.selectors,
        S.expr[":"] = S.expr.pseudos,
        S.uniqueSort = S.unique = d.uniqueSort,
        S.text = d.getText,
        S.isXMLDoc = d.isXML,
        S.contains = d.contains,
        S.escapeSelector = d.escape;
        var h = function(e, t, n) {
            var r = []
              , i = void 0 !== n;
            while ((e = e[t]) && 9 !== e.nodeType)
                if (1 === e.nodeType) {
                    if (i && S(e).is(n))
                        break;
                    r.push(e)
                }
            return r
        }
          , T = function(e, t) {
            for (var n = []; e; e = e.nextSibling)
                1 === e.nodeType && e !== t && n.push(e);
            return n
        }
          , k = S.expr.match.needsContext;
        function A(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }
        var N = /^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;
        function j(e, n, r) {
            return m(n) ? S.grep(e, function(e, t) {
                return !!n.call(e, t, e) !== r
            }) : n.nodeType ? S.grep(e, function(e) {
                return e === n !== r
            }) : "string" != typeof n ? S.grep(e, function(e) {
                return -1 < i.call(n, e) !== r
            }) : S.filter(n, e, r)
        }
        S.filter = function(e, t, n) {
            var r = t[0];
            return n && (e = ":not(" + e + ")"),
            1 === t.length && 1 === r.nodeType ? S.find.matchesSelector(r, e) ? [r] : [] : S.find.matches(e, S.grep(t, function(e) {
                return 1 === e.nodeType
            }))
        }
        ,
        S.fn.extend({
            find: function(e) {
                var t, n, r = this.length, i = this;
                if ("string" != typeof e)
                    return this.pushStack(S(e).filter(function() {
                        for (t = 0; t < r; t++)
                            if (S.contains(i[t], this))
                                return !0
                    }));
                for (n = this.pushStack([]),
                t = 0; t < r; t++)
                    S.find(e, i[t], n);
                return 1 < r ? S.uniqueSort(n) : n
            },
            filter: function(e) {
                return this.pushStack(j(this, e || [], !1))
            },
            not: function(e) {
                return this.pushStack(j(this, e || [], !0))
            },
            is: function(e) {
                return !!j(this, "string" == typeof e && k.test(e) ? S(e) : e || [], !1).length
            }
        });
        var D, q = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;
        (S.fn.init = function(e, t, n) {
            var r, i;
            if (!e)
                return this;
            if (n = n || D,
            "string" == typeof e) {
                if (!(r = "<" === e[0] && ">" === e[e.length - 1] && 3 <= e.length ? [null, e, null] : q.exec(e)) || !r[1] && t)
                    return !t || t.jquery ? (t || n).find(e) : this.constructor(t).find(e);
                if (r[1]) {
                    if (t = t instanceof S ? t[0] : t,
                    S.merge(this, S.parseHTML(r[1], t && t.nodeType ? t.ownerDocument || t : E, !0)),
                    N.test(r[1]) && S.isPlainObject(t))
                        for (r in t)
                            m(this[r]) ? this[r](t[r]) : this.attr(r, t[r]);
                    return this
                }
                return (i = E.getElementById(r[2])) && (this[0] = i,
                this.length = 1),
                this
            }
            return e.nodeType ? (this[0] = e,
            this.length = 1,
            this) : m(e) ? void 0 !== n.ready ? n.ready(e) : e(S) : S.makeArray(e, this)
        }
        ).prototype = S.fn,
        D = S(E);
        var L = /^(?:parents|prev(?:Until|All))/
          , H = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        function O(e, t) {
            while ((e = e[t]) && 1 !== e.nodeType)
                ;
            return e
        }
        S.fn.extend({
            has: function(e) {
                var t = S(e, this)
                  , n = t.length;
                return this.filter(function() {
                    for (var e = 0; e < n; e++)
                        if (S.contains(this, t[e]))
                            return !0
                })
            },
            closest: function(e, t) {
                var n, r = 0, i = this.length, o = [], a = "string" != typeof e && S(e);
                if (!k.test(e))
                    for (; r < i; r++)
                        for (n = this[r]; n && n !== t; n = n.parentNode)
                            if (n.nodeType < 11 && (a ? -1 < a.index(n) : 1 === n.nodeType && S.find.matchesSelector(n, e))) {
                                o.push(n);
                                break
                            }
                return this.pushStack(1 < o.length ? S.uniqueSort(o) : o)
            },
            index: function(e) {
                return e ? "string" == typeof e ? i.call(S(e), this[0]) : i.call(this, e.jquery ? e[0] : e) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(e, t) {
                return this.pushStack(S.uniqueSort(S.merge(this.get(), S(e, t))))
            },
            addBack: function(e) {
                return this.add(null == e ? this.prevObject : this.prevObject.filter(e))
            }
        }),
        S.each({
            parent: function(e) {
                var t = e.parentNode;
                return t && 11 !== t.nodeType ? t : null
            },
            parents: function(e) {
                return h(e, "parentNode")
            },
            parentsUntil: function(e, t, n) {
                return h(e, "parentNode", n)
            },
            next: function(e) {
                return O(e, "nextSibling")
            },
            prev: function(e) {
                return O(e, "previousSibling")
            },
            nextAll: function(e) {
                return h(e, "nextSibling")
            },
            prevAll: function(e) {
                return h(e, "previousSibling")
            },
            nextUntil: function(e, t, n) {
                return h(e, "nextSibling", n)
            },
            prevUntil: function(e, t, n) {
                return h(e, "previousSibling", n)
            },
            siblings: function(e) {
                return T((e.parentNode || {}).firstChild, e)
            },
            children: function(e) {
                return T(e.firstChild)
            },
            contents: function(e) {
                return null != e.contentDocument && r(e.contentDocument) ? e.contentDocument : (A(e, "template") && (e = e.content || e),
                S.merge([], e.childNodes))
            }
        }, function(r, i) {
            S.fn[r] = function(e, t) {
                var n = S.map(this, i, e);
                return "Until" !== r.slice(-5) && (t = e),
                t && "string" == typeof t && (n = S.filter(t, n)),
                1 < this.length && (H[r] || S.uniqueSort(n),
                L.test(r) && n.reverse()),
                this.pushStack(n)
            }
        });
        var P = /[^\x20\t\r\n\f]+/g;
        function R(e) {
            return e
        }
        function M(e) {
            throw e
        }
        function I(e, t, n, r) {
            var i;
            try {
                e && m(i = e.promise) ? i.call(e).done(t).fail(n) : e && m(i = e.then) ? i.call(e, t, n) : t.apply(void 0, [e].slice(r))
            } catch (e) {
                n.apply(void 0, [e])
            }
        }
        S.Callbacks = function(r) {
            var e, n;
            r = "string" == typeof r ? (e = r,
            n = {},
            S.each(e.match(P) || [], function(e, t) {
                n[t] = !0
            }),
            n) : S.extend({}, r);
            var i, t, o, a, s = [], u = [], l = -1, c = function() {
                for (a = a || r.once,
                o = i = !0; u.length; l = -1) {
                    t = u.shift();
                    while (++l < s.length)
                        !1 === s[l].apply(t[0], t[1]) && r.stopOnFalse && (l = s.length,
                        t = !1)
                }
                r.memory || (t = !1),
                i = !1,
                a && (s = t ? [] : "")
            }, f = {
                add: function() {
                    return s && (t && !i && (l = s.length - 1,
                    u.push(t)),
                    function n(e) {
                        S.each(e, function(e, t) {
                            m(t) ? r.unique && f.has(t) || s.push(t) : t && t.length && "string" !== w(t) && n(t)
                        })
                    }(arguments),
                    t && !i && c()),
                    this
                },
                remove: function() {
                    return S.each(arguments, function(e, t) {
                        var n;
                        while (-1 < (n = S.inArray(t, s, n)))
                            s.splice(n, 1),
                            n <= l && l--
                    }),
                    this
                },
                has: function(e) {
                    return e ? -1 < S.inArray(e, s) : 0 < s.length
                },
                empty: function() {
                    return s && (s = []),
                    this
                },
                disable: function() {
                    return a = u = [],
                    s = t = "",
                    this
                },
                disabled: function() {
                    return !s
                },
                lock: function() {
                    return a = u = [],
                    t || i || (s = t = ""),
                    this
                },
                locked: function() {
                    return !!a
                },
                fireWith: function(e, t) {
                    return a || (t = [e, (t = t || []).slice ? t.slice() : t],
                    u.push(t),
                    i || c()),
                    this
                },
                fire: function() {
                    return f.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!o
                }
            };
            return f
        }
        ,
        S.extend({
            Deferred: function(e) {
                var o = [["notify", "progress", S.Callbacks("memory"), S.Callbacks("memory"), 2], ["resolve", "done", S.Callbacks("once memory"), S.Callbacks("once memory"), 0, "resolved"], ["reject", "fail", S.Callbacks("once memory"), S.Callbacks("once memory"), 1, "rejected"]]
                  , i = "pending"
                  , a = {
                    state: function() {
                        return i
                    },
                    always: function() {
                        return s.done(arguments).fail(arguments),
                        this
                    },
                    "catch": function(e) {
                        return a.then(null, e)
                    },
                    pipe: function() {
                        var i = arguments;
                        return S.Deferred(function(r) {
                            S.each(o, function(e, t) {
                                var n = m(i[t[4]]) && i[t[4]];
                                s[t[1]](function() {
                                    var e = n && n.apply(this, arguments);
                                    e && m(e.promise) ? e.promise().progress(r.notify).done(r.resolve).fail(r.reject) : r[t[0] + "With"](this, n ? [e] : arguments)
                                })
                            }),
                            i = null
                        }).promise()
                    },
                    then: function(t, n, r) {
                        var u = 0;
                        function l(i, o, a, s) {
                            return function() {
                                var n = this
                                  , r = arguments
                                  , e = function() {
                                    var e, t;
                                    if (!(i < u)) {
                                        if ((e = a.apply(n, r)) === o.promise())
                                            throw new TypeError("Thenable self-resolution");
                                        t = e && ("object" == typeof e || "function" == typeof e) && e.then,
                                        m(t) ? s ? t.call(e, l(u, o, R, s), l(u, o, M, s)) : (u++,
                                        t.call(e, l(u, o, R, s), l(u, o, M, s), l(u, o, R, o.notifyWith))) : (a !== R && (n = void 0,
                                        r = [e]),
                                        (s || o.resolveWith)(n, r))
                                    }
                                }
                                  , t = s ? e : function() {
                                    try {
                                        e()
                                    } catch (e) {
                                        S.Deferred.exceptionHook && S.Deferred.exceptionHook(e, t.stackTrace),
                                        u <= i + 1 && (a !== M && (n = void 0,
                                        r = [e]),
                                        o.rejectWith(n, r))
                                    }
                                }
                                ;
                                i ? t() : (S.Deferred.getStackHook && (t.stackTrace = S.Deferred.getStackHook()),
                                C.setTimeout(t))
                            }
                        }
                        return S.Deferred(function(e) {
                            o[0][3].add(l(0, e, m(r) ? r : R, e.notifyWith)),
                            o[1][3].add(l(0, e, m(t) ? t : R)),
                            o[2][3].add(l(0, e, m(n) ? n : M))
                        }).promise()
                    },
                    promise: function(e) {
                        return null != e ? S.extend(e, a) : a
                    }
                }
                  , s = {};
                return S.each(o, function(e, t) {
                    var n = t[2]
                      , r = t[5];
                    a[t[1]] = n.add,
                    r && n.add(function() {
                        i = r
                    }, o[3 - e][2].disable, o[3 - e][3].disable, o[0][2].lock, o[0][3].lock),
                    n.add(t[3].fire),
                    s[t[0]] = function() {
                        return s[t[0] + "With"](this === s ? void 0 : this, arguments),
                        this
                    }
                    ,
                    s[t[0] + "With"] = n.fireWith
                }),
                a.promise(s),
                e && e.call(s, s),
                s
            },
            when: function(e) {
                var n = arguments.length
                  , t = n
                  , r = Array(t)
                  , i = s.call(arguments)
                  , o = S.Deferred()
                  , a = function(t) {
                    return function(e) {
                        r[t] = this,
                        i[t] = 1 < arguments.length ? s.call(arguments) : e,
                        --n || o.resolveWith(r, i)
                    }
                };
                if (n <= 1 && (I(e, o.done(a(t)).resolve, o.reject, !n),
                "pending" === o.state() || m(i[t] && i[t].then)))
                    return o.then();
                while (t--)
                    I(i[t], a(t), o.reject);
                return o.promise()
            }
        });
        var W = /^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;
        S.Deferred.exceptionHook = function(e, t) {
            C.console && C.console.warn && e && W.test(e.name) && C.console.warn("jQuery.Deferred exception: " + e.message, e.stack, t)
        }
        ,
        S.readyException = function(e) {
            C.setTimeout(function() {
                throw e
            })
        }
        ;
        var F = S.Deferred();
        function B() {
            E.removeEventListener("DOMContentLoaded", B),
            C.removeEventListener("load", B),
            S.ready()
        }
        S.fn.ready = function(e) {
            return F.then(e)["catch"](function(e) {
                S.readyException(e)
            }),
            this
        }
        ,
        S.extend({
            isReady: !1,
            readyWait: 1,
            ready: function(e) {
                (!0 === e ? --S.readyWait : S.isReady) || (S.isReady = !0) !== e && 0 < --S.readyWait || F.resolveWith(E, [S])
            }
        }),
        S.ready.then = F.then,
        "complete" === E.readyState || "loading" !== E.readyState && !E.documentElement.doScroll ? C.setTimeout(S.ready) : (E.addEventListener("DOMContentLoaded", B),
        C.addEventListener("load", B));
        var $ = function(e, t, n, r, i, o, a) {
            var s = 0
              , u = e.length
              , l = null == n;
            if ("object" === w(n))
                for (s in i = !0,
                n)
                    $(e, t, s, n[s], !0, o, a);
            else if (void 0 !== r && (i = !0,
            m(r) || (a = !0),
            l && (a ? (t.call(e, r),
            t = null) : (l = t,
            t = function(e, t, n) {
                return l.call(S(e), n)
            }
            )),
            t))
                for (; s < u; s++)
                    t(e[s], n, a ? r : r.call(e[s], s, t(e[s], n)));
            return i ? e : l ? t.call(e) : u ? t(e[0], n) : o
        }
          , _ = /^-ms-/
          , z = /-([a-z])/g;
        function U(e, t) {
            return t.toUpperCase()
        }
        function X(e) {
            return e.replace(_, "ms-").replace(z, U)
        }
        var V = function(e) {
            return 1 === e.nodeType || 9 === e.nodeType || !+e.nodeType
        };
        function G() {
            this.expando = S.expando + G.uid++
        }
        G.uid = 1,
        G.prototype = {
            cache: function(e) {
                var t = e[this.expando];
                return t || (t = {},
                V(e) && (e.nodeType ? e[this.expando] = t : Object.defineProperty(e, this.expando, {
                    value: t,
                    configurable: !0
                }))),
                t
            },
            set: function(e, t, n) {
                var r, i = this.cache(e);
                if ("string" == typeof t)
                    i[X(t)] = n;
                else
                    for (r in t)
                        i[X(r)] = t[r];
                return i
            },
            get: function(e, t) {
                return void 0 === t ? this.cache(e) : e[this.expando] && e[this.expando][X(t)]
            },
            access: function(e, t, n) {
                return void 0 === t || t && "string" == typeof t && void 0 === n ? this.get(e, t) : (this.set(e, t, n),
                void 0 !== n ? n : t)
            },
            remove: function(e, t) {
                var n, r = e[this.expando];
                if (void 0 !== r) {
                    if (void 0 !== t) {
                        n = (t = Array.isArray(t) ? t.map(X) : (t = X(t))in r ? [t] : t.match(P) || []).length;
                        while (n--)
                            delete r[t[n]]
                    }
                    (void 0 === t || S.isEmptyObject(r)) && (e.nodeType ? e[this.expando] = void 0 : delete e[this.expando])
                }
            },
            hasData: function(e) {
                var t = e[this.expando];
                return void 0 !== t && !S.isEmptyObject(t)
            }
        };
        var Y = new G
          , Q = new G
          , J = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , K = /[A-Z]/g;
        function Z(e, t, n) {
            var r, i;
            if (void 0 === n && 1 === e.nodeType)
                if (r = "data-" + t.replace(K, "-$&").toLowerCase(),
                "string" == typeof (n = e.getAttribute(r))) {
                    try {
                        n = "true" === (i = n) || "false" !== i && ("null" === i ? null : i === +i + "" ? +i : J.test(i) ? JSON.parse(i) : i)
                    } catch (e) {}
                    Q.set(e, t, n)
                } else
                    n = void 0;
            return n
        }
        S.extend({
            hasData: function(e) {
                return Q.hasData(e) || Y.hasData(e)
            },
            data: function(e, t, n) {
                return Q.access(e, t, n)
            },
            removeData: function(e, t) {
                Q.remove(e, t)
            },
            _data: function(e, t, n) {
                return Y.access(e, t, n)
            },
            _removeData: function(e, t) {
                Y.remove(e, t)
            }
        }),
        S.fn.extend({
            data: function(n, e) {
                var t, r, i, o = this[0], a = o && o.attributes;
                if (void 0 === n) {
                    if (this.length && (i = Q.get(o),
                    1 === o.nodeType && !Y.get(o, "hasDataAttrs"))) {
                        t = a.length;
                        while (t--)
                            a[t] && 0 === (r = a[t].name).indexOf("data-") && (r = X(r.slice(5)),
                            Z(o, r, i[r]));
                        Y.set(o, "hasDataAttrs", !0)
                    }
                    return i
                }
                return "object" == typeof n ? this.each(function() {
                    Q.set(this, n)
                }) : $(this, function(e) {
                    var t;
                    if (o && void 0 === e)
                        return void 0 !== (t = Q.get(o, n)) ? t : void 0 !== (t = Z(o, n)) ? t : void 0;
                    this.each(function() {
                        Q.set(this, n, e)
                    })
                }, null, e, 1 < arguments.length, null, !0)
            },
            removeData: function(e) {
                return this.each(function() {
                    Q.remove(this, e)
                })
            }
        }),
        S.extend({
            queue: function(e, t, n) {
                var r;
                if (e)
                    return t = (t || "fx") + "queue",
                    r = Y.get(e, t),
                    n && (!r || Array.isArray(n) ? r = Y.access(e, t, S.makeArray(n)) : r.push(n)),
                    r || []
            },
            dequeue: function(e, t) {
                t = t || "fx";
                var n = S.queue(e, t)
                  , r = n.length
                  , i = n.shift()
                  , o = S._queueHooks(e, t);
                "inprogress" === i && (i = n.shift(),
                r--),
                i && ("fx" === t && n.unshift("inprogress"),
                delete o.stop,
                i.call(e, function() {
                    S.dequeue(e, t)
                }, o)),
                !r && o && o.empty.fire()
            },
            _queueHooks: function(e, t) {
                var n = t + "queueHooks";
                return Y.get(e, n) || Y.access(e, n, {
                    empty: S.Callbacks("once memory").add(function() {
                        Y.remove(e, [t + "queue", n])
                    })
                })
            }
        }),
        S.fn.extend({
            queue: function(t, n) {
                var e = 2;
                return "string" != typeof t && (n = t,
                t = "fx",
                e--),
                arguments.length < e ? S.queue(this[0], t) : void 0 === n ? this : this.each(function() {
                    var e = S.queue(this, t, n);
                    S._queueHooks(this, t),
                    "fx" === t && "inprogress" !== e[0] && S.dequeue(this, t)
                })
            },
            dequeue: function(e) {
                return this.each(function() {
                    S.dequeue(this, e)
                })
            },
            clearQueue: function(e) {
                return this.queue(e || "fx", [])
            },
            promise: function(e, t) {
                var n, r = 1, i = S.Deferred(), o = this, a = this.length, s = function() {
                    --r || i.resolveWith(o, [o])
                };
                "string" != typeof e && (t = e,
                e = void 0),
                e = e || "fx";
                while (a--)
                    (n = Y.get(o[a], e + "queueHooks")) && n.empty && (r++,
                    n.empty.add(s));
                return s(),
                i.promise(t)
            }
        });
        var ee = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , te = new RegExp("^(?:([+-])=|)(" + ee + ")([a-z%]*)$","i")
          , ne = ["Top", "Right", "Bottom", "Left"]
          , re = E.documentElement
          , ie = function(e) {
            return S.contains(e.ownerDocument, e)
        }
          , oe = {
            composed: !0
        };
        re.getRootNode && (ie = function(e) {
            return S.contains(e.ownerDocument, e) || e.getRootNode(oe) === e.ownerDocument
        }
        );
        var ae = function(e, t) {
            return "none" === (e = t || e).style.display || "" === e.style.display && ie(e) && "none" === S.css(e, "display")
        };
        function se(e, t, n, r) {
            var i, o, a = 20, s = r ? function() {
                return r.cur()
            }
            : function() {
                return S.css(e, t, "")
            }
            , u = s(), l = n && n[3] || (S.cssNumber[t] ? "" : "px"), c = e.nodeType && (S.cssNumber[t] || "px" !== l && +u) && te.exec(S.css(e, t));
            if (c && c[3] !== l) {
                u /= 2,
                l = l || c[3],
                c = +u || 1;
                while (a--)
                    S.style(e, t, c + l),
                    (1 - o) * (1 - (o = s() / u || .5)) <= 0 && (a = 0),
                    c /= o;
                c *= 2,
                S.style(e, t, c + l),
                n = n || []
            }
            return n && (c = +c || +u || 0,
            i = n[1] ? c + (n[1] + 1) * n[2] : +n[2],
            r && (r.unit = l,
            r.start = c,
            r.end = i)),
            i
        }
        var ue = {};
        function le(e, t) {
            for (var n, r, i, o, a, s, u, l = [], c = 0, f = e.length; c < f; c++)
                (r = e[c]).style && (n = r.style.display,
                t ? ("none" === n && (l[c] = Y.get(r, "display") || null,
                l[c] || (r.style.display = "")),
                "" === r.style.display && ae(r) && (l[c] = (u = a = o = void 0,
                a = (i = r).ownerDocument,
                s = i.nodeName,
                (u = ue[s]) || (o = a.body.appendChild(a.createElement(s)),
                u = S.css(o, "display"),
                o.parentNode.removeChild(o),
                "none" === u && (u = "block"),
                ue[s] = u)))) : "none" !== n && (l[c] = "none",
                Y.set(r, "display", n)));
            for (c = 0; c < f; c++)
                null != l[c] && (e[c].style.display = l[c]);
            return e
        }
        S.fn.extend({
            show: function() {
                return le(this, !0)
            },
            hide: function() {
                return le(this)
            },
            toggle: function(e) {
                return "boolean" == typeof e ? e ? this.show() : this.hide() : this.each(function() {
                    ae(this) ? S(this).show() : S(this).hide()
                })
            }
        });
        var ce, fe, pe = /^(?:checkbox|radio)$/i, de = /<([a-z][^\/\0>\x20\t\r\n\f]*)/i, he = /^$|^module$|\/(?:java|ecma)script/i;
        ce = E.createDocumentFragment().appendChild(E.createElement("div")),
        (fe = E.createElement("input")).setAttribute("type", "radio"),
        fe.setAttribute("checked", "checked"),
        fe.setAttribute("name", "t"),
        ce.appendChild(fe),
        y.checkClone = ce.cloneNode(!0).cloneNode(!0).lastChild.checked,
        ce.innerHTML = "<textarea>x</textarea>",
        y.noCloneChecked = !!ce.cloneNode(!0).lastChild.defaultValue,
        ce.innerHTML = "<option></option>",
        y.option = !!ce.lastChild;
        var ge = {
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        function ve(e, t) {
            var n;
            return n = "undefined" != typeof e.getElementsByTagName ? e.getElementsByTagName(t || "*") : "undefined" != typeof e.querySelectorAll ? e.querySelectorAll(t || "*") : [],
            void 0 === t || t && A(e, t) ? S.merge([e], n) : n
        }
        function ye(e, t) {
            for (var n = 0, r = e.length; n < r; n++)
                Y.set(e[n], "globalEval", !t || Y.get(t[n], "globalEval"))
        }
        ge.tbody = ge.tfoot = ge.colgroup = ge.caption = ge.thead,
        ge.th = ge.td,
        y.option || (ge.optgroup = ge.option = [1, "<select multiple='multiple'>", "</select>"]);
        var me = /<|&#?\w+;/;
        function xe(e, t, n, r, i) {
            for (var o, a, s, u, l, c, f = t.createDocumentFragment(), p = [], d = 0, h = e.length; d < h; d++)
                if ((o = e[d]) || 0 === o)
                    if ("object" === w(o))
                        S.merge(p, o.nodeType ? [o] : o);
                    else if (me.test(o)) {
                        a = a || f.appendChild(t.createElement("div")),
                        s = (de.exec(o) || ["", ""])[1].toLowerCase(),
                        u = ge[s] || ge._default,
                        a.innerHTML = u[1] + S.htmlPrefilter(o) + u[2],
                        c = u[0];
                        while (c--)
                            a = a.lastChild;
                        S.merge(p, a.childNodes),
                        (a = f.firstChild).textContent = ""
                    } else
                        p.push(t.createTextNode(o));
            f.textContent = "",
            d = 0;
            while (o = p[d++])
                if (r && -1 < S.inArray(o, r))
                    i && i.push(o);
                else if (l = ie(o),
                a = ve(f.appendChild(o), "script"),
                l && ye(a),
                n) {
                    c = 0;
                    while (o = a[c++])
                        he.test(o.type || "") && n.push(o)
                }
            return f
        }
        var be = /^([^.]*)(?:\.(.+)|)/;
        function we() {
            return !0
        }
        function Te() {
            return !1
        }
        function Ce(e, t) {
            return e === function() {
                try {
                    return E.activeElement
                } catch (e) {}
            }() == ("focus" === t)
        }
        function Ee(e, t, n, r, i, o) {
            var a, s;
            if ("object" == typeof t) {
                for (s in "string" != typeof n && (r = r || n,
                n = void 0),
                t)
                    Ee(e, s, n, r, t[s], o);
                return e
            }
            if (null == r && null == i ? (i = n,
            r = n = void 0) : null == i && ("string" == typeof n ? (i = r,
            r = void 0) : (i = r,
            r = n,
            n = void 0)),
            !1 === i)
                i = Te;
            else if (!i)
                return e;
            return 1 === o && (a = i,
            (i = function(e) {
                return S().off(e),
                a.apply(this, arguments)
            }
            ).guid = a.guid || (a.guid = S.guid++)),
            e.each(function() {
                S.event.add(this, t, i, r, n)
            })
        }
        function Se(e, i, o) {
            o ? (Y.set(e, i, !1),
            S.event.add(e, i, {
                namespace: !1,
                handler: function(e) {
                    var t, n, r = Y.get(this, i);
                    if (1 & e.isTrigger && this[i]) {
                        if (r.length)
                            (S.event.special[i] || {}).delegateType && e.stopPropagation();
                        else if (r = s.call(arguments),
                        Y.set(this, i, r),
                        t = o(this, i),
                        this[i](),
                        r !== (n = Y.get(this, i)) || t ? Y.set(this, i, !1) : n = {},
                        r !== n)
                            return e.stopImmediatePropagation(),
                            e.preventDefault(),
                            n && n.value
                    } else
                        r.length && (Y.set(this, i, {
                            value: S.event.trigger(S.extend(r[0], S.Event.prototype), r.slice(1), this)
                        }),
                        e.stopImmediatePropagation())
                }
            })) : void 0 === Y.get(e, i) && S.event.add(e, i, we)
        }
        S.event = {
            global: {},
            add: function(t, e, n, r, i) {
                var o, a, s, u, l, c, f, p, d, h, g, v = Y.get(t);
                if (V(t)) {
                    n.handler && (n = (o = n).handler,
                    i = o.selector),
                    i && S.find.matchesSelector(re, i),
                    n.guid || (n.guid = S.guid++),
                    (u = v.events) || (u = v.events = Object.create(null)),
                    (a = v.handle) || (a = v.handle = function(e) {
                        return "undefined" != typeof S && S.event.triggered !== e.type ? S.event.dispatch.apply(t, arguments) : void 0
                    }
                    ),
                    l = (e = (e || "").match(P) || [""]).length;
                    while (l--)
                        d = g = (s = be.exec(e[l]) || [])[1],
                        h = (s[2] || "").split(".").sort(),
                        d && (f = S.event.special[d] || {},
                        d = (i ? f.delegateType : f.bindType) || d,
                        f = S.event.special[d] || {},
                        c = S.extend({
                            type: d,
                            origType: g,
                            data: r,
                            handler: n,
                            guid: n.guid,
                            selector: i,
                            needsContext: i && S.expr.match.needsContext.test(i),
                            namespace: h.join(".")
                        }, o),
                        (p = u[d]) || ((p = u[d] = []).delegateCount = 0,
                        f.setup && !1 !== f.setup.call(t, r, h, a) || t.addEventListener && t.addEventListener(d, a)),
                        f.add && (f.add.call(t, c),
                        c.handler.guid || (c.handler.guid = n.guid)),
                        i ? p.splice(p.delegateCount++, 0, c) : p.push(c),
                        S.event.global[d] = !0)
                }
            },
            remove: function(e, t, n, r, i) {
                var o, a, s, u, l, c, f, p, d, h, g, v = Y.hasData(e) && Y.get(e);
                if (v && (u = v.events)) {
                    l = (t = (t || "").match(P) || [""]).length;
                    while (l--)
                        if (d = g = (s = be.exec(t[l]) || [])[1],
                        h = (s[2] || "").split(".").sort(),
                        d) {
                            f = S.event.special[d] || {},
                            p = u[d = (r ? f.delegateType : f.bindType) || d] || [],
                            s = s[2] && new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            a = o = p.length;
                            while (o--)
                                c = p[o],
                                !i && g !== c.origType || n && n.guid !== c.guid || s && !s.test(c.namespace) || r && r !== c.selector && ("**" !== r || !c.selector) || (p.splice(o, 1),
                                c.selector && p.delegateCount--,
                                f.remove && f.remove.call(e, c));
                            a && !p.length && (f.teardown && !1 !== f.teardown.call(e, h, v.handle) || S.removeEvent(e, d, v.handle),
                            delete u[d])
                        } else
                            for (d in u)
                                S.event.remove(e, d + t[l], n, r, !0);
                    S.isEmptyObject(u) && Y.remove(e, "handle events")
                }
            },
            dispatch: function(e) {
                var t, n, r, i, o, a, s = new Array(arguments.length), u = S.event.fix(e), l = (Y.get(this, "events") || Object.create(null))[u.type] || [], c = S.event.special[u.type] || {};
                for (s[0] = u,
                t = 1; t < arguments.length; t++)
                    s[t] = arguments[t];
                if (u.delegateTarget = this,
                !c.preDispatch || !1 !== c.preDispatch.call(this, u)) {
                    a = S.event.handlers.call(this, u, l),
                    t = 0;
                    while ((i = a[t++]) && !u.isPropagationStopped()) {
                        u.currentTarget = i.elem,
                        n = 0;
                        while ((o = i.handlers[n++]) && !u.isImmediatePropagationStopped())
                            u.rnamespace && !1 !== o.namespace && !u.rnamespace.test(o.namespace) || (u.handleObj = o,
                            u.data = o.data,
                            void 0 !== (r = ((S.event.special[o.origType] || {}).handle || o.handler).apply(i.elem, s)) && !1 === (u.result = r) && (u.preventDefault(),
                            u.stopPropagation()))
                    }
                    return c.postDispatch && c.postDispatch.call(this, u),
                    u.result
                }
            },
            handlers: function(e, t) {
                var n, r, i, o, a, s = [], u = t.delegateCount, l = e.target;
                if (u && l.nodeType && !("click" === e.type && 1 <= e.button))
                    for (; l !== this; l = l.parentNode || this)
                        if (1 === l.nodeType && ("click" !== e.type || !0 !== l.disabled)) {
                            for (o = [],
                            a = {},
                            n = 0; n < u; n++)
                                void 0 === a[i = (r = t[n]).selector + " "] && (a[i] = r.needsContext ? -1 < S(i, this).index(l) : S.find(i, this, null, [l]).length),
                                a[i] && o.push(r);
                            o.length && s.push({
                                elem: l,
                                handlers: o
                            })
                        }
                return l = this,
                u < t.length && s.push({
                    elem: l,
                    handlers: t.slice(u)
                }),
                s
            },
            addProp: function(t, e) {
                Object.defineProperty(S.Event.prototype, t, {
                    enumerable: !0,
                    configurable: !0,
                    get: m(e) ? function() {
                        if (this.originalEvent)
                            return e(this.originalEvent)
                    }
                    : function() {
                        if (this.originalEvent)
                            return this.originalEvent[t]
                    }
                    ,
                    set: function(e) {
                        Object.defineProperty(this, t, {
                            enumerable: !0,
                            configurable: !0,
                            writable: !0,
                            value: e
                        })
                    }
                })
            },
            fix: function(e) {
                return e[S.expando] ? e : new S.Event(e)
            },
            special: {
                load: {
                    noBubble: !0
                },
                click: {
                    setup: function(e) {
                        var t = this || e;
                        return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click", we),
                        !1
                    },
                    trigger: function(e) {
                        var t = this || e;
                        return pe.test(t.type) && t.click && A(t, "input") && Se(t, "click"),
                        !0
                    },
                    _default: function(e) {
                        var t = e.target;
                        return pe.test(t.type) && t.click && A(t, "input") && Y.get(t, "click") || A(t, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(e) {
                        void 0 !== e.result && e.originalEvent && (e.originalEvent.returnValue = e.result)
                    }
                }
            }
        },
        S.removeEvent = function(e, t, n) {
            e.removeEventListener && e.removeEventListener(t, n)
        }
        ,
        S.Event = function(e, t) {
            if (!(this instanceof S.Event))
                return new S.Event(e,t);
            e && e.type ? (this.originalEvent = e,
            this.type = e.type,
            this.isDefaultPrevented = e.defaultPrevented || void 0 === e.defaultPrevented && !1 === e.returnValue ? we : Te,
            this.target = e.target && 3 === e.target.nodeType ? e.target.parentNode : e.target,
            this.currentTarget = e.currentTarget,
            this.relatedTarget = e.relatedTarget) : this.type = e,
            t && S.extend(this, t),
            this.timeStamp = e && e.timeStamp || Date.now(),
            this[S.expando] = !0
        }
        ,
        S.Event.prototype = {
            constructor: S.Event,
            isDefaultPrevented: Te,
            isPropagationStopped: Te,
            isImmediatePropagationStopped: Te,
            isSimulated: !1,
            preventDefault: function() {
                var e = this.originalEvent;
                this.isDefaultPrevented = we,
                e && !this.isSimulated && e.preventDefault()
            },
            stopPropagation: function() {
                var e = this.originalEvent;
                this.isPropagationStopped = we,
                e && !this.isSimulated && e.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var e = this.originalEvent;
                this.isImmediatePropagationStopped = we,
                e && !this.isSimulated && e.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        S.each({
            altKey: !0,
            bubbles: !0,
            cancelable: !0,
            changedTouches: !0,
            ctrlKey: !0,
            detail: !0,
            eventPhase: !0,
            metaKey: !0,
            pageX: !0,
            pageY: !0,
            shiftKey: !0,
            view: !0,
            "char": !0,
            code: !0,
            charCode: !0,
            key: !0,
            keyCode: !0,
            button: !0,
            buttons: !0,
            clientX: !0,
            clientY: !0,
            offsetX: !0,
            offsetY: !0,
            pointerId: !0,
            pointerType: !0,
            screenX: !0,
            screenY: !0,
            targetTouches: !0,
            toElement: !0,
            touches: !0,
            which: !0
        }, S.event.addProp),
        S.each({
            focus: "focusin",
            blur: "focusout"
        }, function(e, t) {
            S.event.special[e] = {
                setup: function() {
                    return Se(this, e, Ce),
                    !1
                },
                trigger: function() {
                    return Se(this, e),
                    !0
                },
                _default: function() {
                    return !0
                },
                delegateType: t
            }
        }),
        S.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(e, i) {
            S.event.special[e] = {
                delegateType: i,
                bindType: i,
                handle: function(e) {
                    var t, n = e.relatedTarget, r = e.handleObj;
                    return n && (n === this || S.contains(this, n)) || (e.type = r.origType,
                    t = r.handler.apply(this, arguments),
                    e.type = i),
                    t
                }
            }
        }),
        S.fn.extend({
            on: function(e, t, n, r) {
                return Ee(this, e, t, n, r)
            },
            one: function(e, t, n, r) {
                return Ee(this, e, t, n, r, 1)
            },
            off: function(e, t, n) {
                var r, i;
                if (e && e.preventDefault && e.handleObj)
                    return r = e.handleObj,
                    S(e.delegateTarget).off(r.namespace ? r.origType + "." + r.namespace : r.origType, r.selector, r.handler),
                    this;
                if ("object" == typeof e) {
                    for (i in e)
                        this.off(i, t, e[i]);
                    return this
                }
                return !1 !== t && "function" != typeof t || (n = t,
                t = void 0),
                !1 === n && (n = Te),
                this.each(function() {
                    S.event.remove(this, e, n, t)
                })
            }
        });
        var ke = /<script|<style|<link/i
          , Ae = /checked\s*(?:[^=]|=\s*.checked.)/i
          , Ne = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;
        function je(e, t) {
            return A(e, "table") && A(11 !== t.nodeType ? t : t.firstChild, "tr") && S(e).children("tbody")[0] || e
        }
        function De(e) {
            return e.type = (null !== e.getAttribute("type")) + "/" + e.type,
            e
        }
        function qe(e) {
            return "true/" === (e.type || "").slice(0, 5) ? e.type = e.type.slice(5) : e.removeAttribute("type"),
            e
        }
        function Le(e, t) {
            var n, r, i, o, a, s;
            if (1 === t.nodeType) {
                if (Y.hasData(e) && (s = Y.get(e).events))
                    for (i in Y.remove(t, "handle events"),
                    s)
                        for (n = 0,
                        r = s[i].length; n < r; n++)
                            S.event.add(t, i, s[i][n]);
                Q.hasData(e) && (o = Q.access(e),
                a = S.extend({}, o),
                Q.set(t, a))
            }
        }
        function He(n, r, i, o) {
            r = g(r);
            var e, t, a, s, u, l, c = 0, f = n.length, p = f - 1, d = r[0], h = m(d);
            if (h || 1 < f && "string" == typeof d && !y.checkClone && Ae.test(d))
                return n.each(function(e) {
                    var t = n.eq(e);
                    h && (r[0] = d.call(this, e, t.html())),
                    He(t, r, i, o)
                });
            if (f && (t = (e = xe(r, n[0].ownerDocument, !1, n, o)).firstChild,
            1 === e.childNodes.length && (e = t),
            t || o)) {
                for (s = (a = S.map(ve(e, "script"), De)).length; c < f; c++)
                    u = e,
                    c !== p && (u = S.clone(u, !0, !0),
                    s && S.merge(a, ve(u, "script"))),
                    i.call(n[c], u, c);
                if (s)
                    for (l = a[a.length - 1].ownerDocument,
                    S.map(a, qe),
                    c = 0; c < s; c++)
                        u = a[c],
                        he.test(u.type || "") && !Y.access(u, "globalEval") && S.contains(l, u) && (u.src && "module" !== (u.type || "").toLowerCase() ? S._evalUrl && !u.noModule && S._evalUrl(u.src, {
                            nonce: u.nonce || u.getAttribute("nonce")
                        }, l) : b(u.textContent.replace(Ne, ""), u, l))
            }
            return n
        }
        function Oe(e, t, n) {
            for (var r, i = t ? S.filter(t, e) : e, o = 0; null != (r = i[o]); o++)
                n || 1 !== r.nodeType || S.cleanData(ve(r)),
                r.parentNode && (n && ie(r) && ye(ve(r, "script")),
                r.parentNode.removeChild(r));
            return e
        }
        S.extend({
            htmlPrefilter: function(e) {
                return e
            },
            clone: function(e, t, n) {
                var r, i, o, a, s, u, l, c = e.cloneNode(!0), f = ie(e);
                if (!(y.noCloneChecked || 1 !== e.nodeType && 11 !== e.nodeType || S.isXMLDoc(e)))
                    for (a = ve(c),
                    r = 0,
                    i = (o = ve(e)).length; r < i; r++)
                        s = o[r],
                        u = a[r],
                        void 0,
                        "input" === (l = u.nodeName.toLowerCase()) && pe.test(s.type) ? u.checked = s.checked : "input" !== l && "textarea" !== l || (u.defaultValue = s.defaultValue);
                if (t)
                    if (n)
                        for (o = o || ve(e),
                        a = a || ve(c),
                        r = 0,
                        i = o.length; r < i; r++)
                            Le(o[r], a[r]);
                    else
                        Le(e, c);
                return 0 < (a = ve(c, "script")).length && ye(a, !f && ve(e, "script")),
                c
            },
            cleanData: function(e) {
                for (var t, n, r, i = S.event.special, o = 0; void 0 !== (n = e[o]); o++)
                    if (V(n)) {
                        if (t = n[Y.expando]) {
                            if (t.events)
                                for (r in t.events)
                                    i[r] ? S.event.remove(n, r) : S.removeEvent(n, r, t.handle);
                            n[Y.expando] = void 0
                        }
                        n[Q.expando] && (n[Q.expando] = void 0)
                    }
            }
        }),
        S.fn.extend({
            detach: function(e) {
                return Oe(this, e, !0)
            },
            remove: function(e) {
                return Oe(this, e)
            },
            text: function(e) {
                return $(this, function(e) {
                    return void 0 === e ? S.text(this) : this.empty().each(function() {
                        1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || (this.textContent = e)
                    })
                }, null, e, arguments.length)
            },
            append: function() {
                return He(this, arguments, function(e) {
                    1 !== this.nodeType && 11 !== this.nodeType && 9 !== this.nodeType || je(this, e).appendChild(e)
                })
            },
            prepend: function() {
                return He(this, arguments, function(e) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var t = je(this, e);
                        t.insertBefore(e, t.firstChild)
                    }
                })
            },
            before: function() {
                return He(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this)
                })
            },
            after: function() {
                return He(this, arguments, function(e) {
                    this.parentNode && this.parentNode.insertBefore(e, this.nextSibling)
                })
            },
            empty: function() {
                for (var e, t = 0; null != (e = this[t]); t++)
                    1 === e.nodeType && (S.cleanData(ve(e, !1)),
                    e.textContent = "");
                return this
            },
            clone: function(e, t) {
                return e = null != e && e,
                t = null == t ? e : t,
                this.map(function() {
                    return S.clone(this, e, t)
                })
            },
            html: function(e) {
                return $(this, function(e) {
                    var t = this[0] || {}
                      , n = 0
                      , r = this.length;
                    if (void 0 === e && 1 === t.nodeType)
                        return t.innerHTML;
                    if ("string" == typeof e && !ke.test(e) && !ge[(de.exec(e) || ["", ""])[1].toLowerCase()]) {
                        e = S.htmlPrefilter(e);
                        try {
                            for (; n < r; n++)
                                1 === (t = this[n] || {}).nodeType && (S.cleanData(ve(t, !1)),
                                t.innerHTML = e);
                            t = 0
                        } catch (e) {}
                    }
                    t && this.empty().append(e)
                }, null, e, arguments.length)
            },
            replaceWith: function() {
                var n = [];
                return He(this, arguments, function(e) {
                    var t = this.parentNode;
                    S.inArray(this, n) < 0 && (S.cleanData(ve(this)),
                    t && t.replaceChild(e, this))
                }, n)
            }
        }),
        S.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(e, a) {
            S.fn[e] = function(e) {
                for (var t, n = [], r = S(e), i = r.length - 1, o = 0; o <= i; o++)
                    t = o === i ? this : this.clone(!0),
                    S(r[o])[a](t),
                    u.apply(n, t.get());
                return this.pushStack(n)
            }
        });
        var Pe = new RegExp("^(" + ee + ")(?!px)[a-z%]+$","i")
          , Re = function(e) {
            var t = e.ownerDocument.defaultView;
            return t && t.opener || (t = C),
            t.getComputedStyle(e)
        }
          , Me = function(e, t, n) {
            var r, i, o = {};
            for (i in t)
                o[i] = e.style[i],
                e.style[i] = t[i];
            for (i in r = n.call(e),
            t)
                e.style[i] = o[i];
            return r
        }
          , Ie = new RegExp(ne.join("|"),"i");
        function We(e, t, n) {
            var r, i, o, a, s = e.style;
            return (n = n || Re(e)) && ("" !== (a = n.getPropertyValue(t) || n[t]) || ie(e) || (a = S.style(e, t)),
            !y.pixelBoxStyles() && Pe.test(a) && Ie.test(t) && (r = s.width,
            i = s.minWidth,
            o = s.maxWidth,
            s.minWidth = s.maxWidth = s.width = a,
            a = n.width,
            s.width = r,
            s.minWidth = i,
            s.maxWidth = o)),
            void 0 !== a ? a + "" : a
        }
        function Fe(e, t) {
            return {
                get: function() {
                    if (!e())
                        return (this.get = t).apply(this, arguments);
                    delete this.get
                }
            }
        }
        !function() {
            function e() {
                if (l) {
                    u.style.cssText = "position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",
                    l.style.cssText = "position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",
                    re.appendChild(u).appendChild(l);
                    var e = C.getComputedStyle(l);
                    n = "1%" !== e.top,
                    s = 12 === t(e.marginLeft),
                    l.style.right = "60%",
                    o = 36 === t(e.right),
                    r = 36 === t(e.width),
                    l.style.position = "absolute",
                    i = 12 === t(l.offsetWidth / 3),
                    re.removeChild(u),
                    l = null
                }
            }
            function t(e) {
                return Math.round(parseFloat(e))
            }
            var n, r, i, o, a, s, u = E.createElement("div"), l = E.createElement("div");
            l.style && (l.style.backgroundClip = "content-box",
            l.cloneNode(!0).style.backgroundClip = "",
            y.clearCloneStyle = "content-box" === l.style.backgroundClip,
            S.extend(y, {
                boxSizingReliable: function() {
                    return e(),
                    r
                },
                pixelBoxStyles: function() {
                    return e(),
                    o
                },
                pixelPosition: function() {
                    return e(),
                    n
                },
                reliableMarginLeft: function() {
                    return e(),
                    s
                },
                scrollboxSize: function() {
                    return e(),
                    i
                },
                reliableTrDimensions: function() {
                    var e, t, n, r;
                    return null == a && (e = E.createElement("table"),
                    t = E.createElement("tr"),
                    n = E.createElement("div"),
                    e.style.cssText = "position:absolute;left:-11111px;border-collapse:separate",
                    t.style.cssText = "border:1px solid",
                    t.style.height = "1px",
                    n.style.height = "9px",
                    n.style.display = "block",
                    re.appendChild(e).appendChild(t).appendChild(n),
                    r = C.getComputedStyle(t),
                    a = parseInt(r.height, 10) + parseInt(r.borderTopWidth, 10) + parseInt(r.borderBottomWidth, 10) === t.offsetHeight,
                    re.removeChild(e)),
                    a
                }
            }))
        }();
        var Be = ["Webkit", "Moz", "ms"]
          , $e = E.createElement("div").style
          , _e = {};
        function ze(e) {
            var t = S.cssProps[e] || _e[e];
            return t || (e in $e ? e : _e[e] = function(e) {
                var t = e[0].toUpperCase() + e.slice(1)
                  , n = Be.length;
                while (n--)
                    if ((e = Be[n] + t)in $e)
                        return e
            }(e) || e)
        }
        var Ue = /^(none|table(?!-c[ea]).+)/
          , Xe = /^--/
          , Ve = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , Ge = {
            letterSpacing: "0",
            fontWeight: "400"
        };
        function Ye(e, t, n) {
            var r = te.exec(t);
            return r ? Math.max(0, r[2] - (n || 0)) + (r[3] || "px") : t
        }
        function Qe(e, t, n, r, i, o) {
            var a = "width" === t ? 1 : 0
              , s = 0
              , u = 0;
            if (n === (r ? "border" : "content"))
                return 0;
            for (; a < 4; a += 2)
                "margin" === n && (u += S.css(e, n + ne[a], !0, i)),
                r ? ("content" === n && (u -= S.css(e, "padding" + ne[a], !0, i)),
                "margin" !== n && (u -= S.css(e, "border" + ne[a] + "Width", !0, i))) : (u += S.css(e, "padding" + ne[a], !0, i),
                "padding" !== n ? u += S.css(e, "border" + ne[a] + "Width", !0, i) : s += S.css(e, "border" + ne[a] + "Width", !0, i));
            return !r && 0 <= o && (u += Math.max(0, Math.ceil(e["offset" + t[0].toUpperCase() + t.slice(1)] - o - u - s - .5)) || 0),
            u
        }
        function Je(e, t, n) {
            var r = Re(e)
              , i = (!y.boxSizingReliable() || n) && "border-box" === S.css(e, "boxSizing", !1, r)
              , o = i
              , a = We(e, t, r)
              , s = "offset" + t[0].toUpperCase() + t.slice(1);
            if (Pe.test(a)) {
                if (!n)
                    return a;
                a = "auto"
            }
            return (!y.boxSizingReliable() && i || !y.reliableTrDimensions() && A(e, "tr") || "auto" === a || !parseFloat(a) && "inline" === S.css(e, "display", !1, r)) && e.getClientRects().length && (i = "border-box" === S.css(e, "boxSizing", !1, r),
            (o = s in e) && (a = e[s])),
            (a = parseFloat(a) || 0) + Qe(e, t, n || (i ? "border" : "content"), o, r, a) + "px"
        }
        function Ke(e, t, n, r, i) {
            return new Ke.prototype.init(e,t,n,r,i)
        }
        S.extend({
            cssHooks: {
                opacity: {
                    get: function(e, t) {
                        if (t) {
                            var n = We(e, "opacity");
                            return "" === n ? "1" : n
                        }
                    }
                }
            },
            cssNumber: {
                animationIterationCount: !0,
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                gridArea: !0,
                gridColumn: !0,
                gridColumnEnd: !0,
                gridColumnStart: !0,
                gridRow: !0,
                gridRowEnd: !0,
                gridRowStart: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {},
            style: function(e, t, n, r) {
                if (e && 3 !== e.nodeType && 8 !== e.nodeType && e.style) {
                    var i, o, a, s = X(t), u = Xe.test(t), l = e.style;
                    if (u || (t = ze(s)),
                    a = S.cssHooks[t] || S.cssHooks[s],
                    void 0 === n)
                        return a && "get"in a && void 0 !== (i = a.get(e, !1, r)) ? i : l[t];
                    "string" === (o = typeof n) && (i = te.exec(n)) && i[1] && (n = se(e, t, i),
                    o = "number"),
                    null != n && n == n && ("number" !== o || u || (n += i && i[3] || (S.cssNumber[s] ? "" : "px")),
                    y.clearCloneStyle || "" !== n || 0 !== t.indexOf("background") || (l[t] = "inherit"),
                    a && "set"in a && void 0 === (n = a.set(e, n, r)) || (u ? l.setProperty(t, n) : l[t] = n))
                }
            },
            css: function(e, t, n, r) {
                var i, o, a, s = X(t);
                return Xe.test(t) || (t = ze(s)),
                (a = S.cssHooks[t] || S.cssHooks[s]) && "get"in a && (i = a.get(e, !0, n)),
                void 0 === i && (i = We(e, t, r)),
                "normal" === i && t in Ge && (i = Ge[t]),
                "" === n || n ? (o = parseFloat(i),
                !0 === n || isFinite(o) ? o || 0 : i) : i
            }
        }),
        S.each(["height", "width"], function(e, u) {
            S.cssHooks[u] = {
                get: function(e, t, n) {
                    if (t)
                        return !Ue.test(S.css(e, "display")) || e.getClientRects().length && e.getBoundingClientRect().width ? Je(e, u, n) : Me(e, Ve, function() {
                            return Je(e, u, n)
                        })
                },
                set: function(e, t, n) {
                    var r, i = Re(e), o = !y.scrollboxSize() && "absolute" === i.position, a = (o || n) && "border-box" === S.css(e, "boxSizing", !1, i), s = n ? Qe(e, u, n, a, i) : 0;
                    return a && o && (s -= Math.ceil(e["offset" + u[0].toUpperCase() + u.slice(1)] - parseFloat(i[u]) - Qe(e, u, "border", !1, i) - .5)),
                    s && (r = te.exec(t)) && "px" !== (r[3] || "px") && (e.style[u] = t,
                    t = S.css(e, u)),
                    Ye(0, t, s)
                }
            }
        }),
        S.cssHooks.marginLeft = Fe(y.reliableMarginLeft, function(e, t) {
            if (t)
                return (parseFloat(We(e, "marginLeft")) || e.getBoundingClientRect().left - Me(e, {
                    marginLeft: 0
                }, function() {
                    return e.getBoundingClientRect().left
                })) + "px"
        }),
        S.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(i, o) {
            S.cssHooks[i + o] = {
                expand: function(e) {
                    for (var t = 0, n = {}, r = "string" == typeof e ? e.split(" ") : [e]; t < 4; t++)
                        n[i + ne[t] + o] = r[t] || r[t - 2] || r[0];
                    return n
                }
            },
            "margin" !== i && (S.cssHooks[i + o].set = Ye)
        }),
        S.fn.extend({
            css: function(e, t) {
                return $(this, function(e, t, n) {
                    var r, i, o = {}, a = 0;
                    if (Array.isArray(t)) {
                        for (r = Re(e),
                        i = t.length; a < i; a++)
                            o[t[a]] = S.css(e, t[a], !1, r);
                        return o
                    }
                    return void 0 !== n ? S.style(e, t, n) : S.css(e, t)
                }, e, t, 1 < arguments.length)
            }
        }),
        ((S.Tween = Ke).prototype = {
            constructor: Ke,
            init: function(e, t, n, r, i, o) {
                this.elem = e,
                this.prop = n,
                this.easing = i || S.easing._default,
                this.options = t,
                this.start = this.now = this.cur(),
                this.end = r,
                this.unit = o || (S.cssNumber[n] ? "" : "px")
            },
            cur: function() {
                var e = Ke.propHooks[this.prop];
                return e && e.get ? e.get(this) : Ke.propHooks._default.get(this)
            },
            run: function(e) {
                var t, n = Ke.propHooks[this.prop];
                return this.options.duration ? this.pos = t = S.easing[this.easing](e, this.options.duration * e, 0, 1, this.options.duration) : this.pos = t = e,
                this.now = (this.end - this.start) * t + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                n && n.set ? n.set(this) : Ke.propHooks._default.set(this),
                this
            }
        }).init.prototype = Ke.prototype,
        (Ke.propHooks = {
            _default: {
                get: function(e) {
                    var t;
                    return 1 !== e.elem.nodeType || null != e.elem[e.prop] && null == e.elem.style[e.prop] ? e.elem[e.prop] : (t = S.css(e.elem, e.prop, "")) && "auto" !== t ? t : 0
                },
                set: function(e) {
                    S.fx.step[e.prop] ? S.fx.step[e.prop](e) : 1 !== e.elem.nodeType || !S.cssHooks[e.prop] && null == e.elem.style[ze(e.prop)] ? e.elem[e.prop] = e.now : S.style(e.elem, e.prop, e.now + e.unit)
                }
            }
        }).scrollTop = Ke.propHooks.scrollLeft = {
            set: function(e) {
                e.elem.nodeType && e.elem.parentNode && (e.elem[e.prop] = e.now)
            }
        },
        S.easing = {
            linear: function(e) {
                return e
            },
            swing: function(e) {
                return .5 - Math.cos(e * Math.PI) / 2
            },
            _default: "swing"
        },
        S.fx = Ke.prototype.init,
        S.fx.step = {};
        var Ze, et, tt, nt, rt = /^(?:toggle|show|hide)$/, it = /queueHooks$/;
        function ot() {
            et && (!1 === E.hidden && C.requestAnimationFrame ? C.requestAnimationFrame(ot) : C.setTimeout(ot, S.fx.interval),
            S.fx.tick())
        }
        function at() {
            return C.setTimeout(function() {
                Ze = void 0
            }),
            Ze = Date.now()
        }
        function st(e, t) {
            var n, r = 0, i = {
                height: e
            };
            for (t = t ? 1 : 0; r < 4; r += 2 - t)
                i["margin" + (n = ne[r])] = i["padding" + n] = e;
            return t && (i.opacity = i.width = e),
            i
        }
        function ut(e, t, n) {
            for (var r, i = (lt.tweeners[t] || []).concat(lt.tweeners["*"]), o = 0, a = i.length; o < a; o++)
                if (r = i[o].call(n, t, e))
                    return r
        }
        function lt(o, e, t) {
            var n, a, r = 0, i = lt.prefilters.length, s = S.Deferred().always(function() {
                delete u.elem
            }), u = function() {
                if (a)
                    return !1;
                for (var e = Ze || at(), t = Math.max(0, l.startTime + l.duration - e), n = 1 - (t / l.duration || 0), r = 0, i = l.tweens.length; r < i; r++)
                    l.tweens[r].run(n);
                return s.notifyWith(o, [l, n, t]),
                n < 1 && i ? t : (i || s.notifyWith(o, [l, 1, 0]),
                s.resolveWith(o, [l]),
                !1)
            }, l = s.promise({
                elem: o,
                props: S.extend({}, e),
                opts: S.extend(!0, {
                    specialEasing: {},
                    easing: S.easing._default
                }, t),
                originalProperties: e,
                originalOptions: t,
                startTime: Ze || at(),
                duration: t.duration,
                tweens: [],
                createTween: function(e, t) {
                    var n = S.Tween(o, l.opts, e, t, l.opts.specialEasing[e] || l.opts.easing);
                    return l.tweens.push(n),
                    n
                },
                stop: function(e) {
                    var t = 0
                      , n = e ? l.tweens.length : 0;
                    if (a)
                        return this;
                    for (a = !0; t < n; t++)
                        l.tweens[t].run(1);
                    return e ? (s.notifyWith(o, [l, 1, 0]),
                    s.resolveWith(o, [l, e])) : s.rejectWith(o, [l, e]),
                    this
                }
            }), c = l.props;
            for (!function(e, t) {
                var n, r, i, o, a;
                for (n in e)
                    if (i = t[r = X(n)],
                    o = e[n],
                    Array.isArray(o) && (i = o[1],
                    o = e[n] = o[0]),
                    n !== r && (e[r] = o,
                    delete e[n]),
                    (a = S.cssHooks[r]) && "expand"in a)
                        for (n in o = a.expand(o),
                        delete e[r],
                        o)
                            n in e || (e[n] = o[n],
                            t[n] = i);
                    else
                        t[r] = i
            }(c, l.opts.specialEasing); r < i; r++)
                if (n = lt.prefilters[r].call(l, o, c, l.opts))
                    return m(n.stop) && (S._queueHooks(l.elem, l.opts.queue).stop = n.stop.bind(n)),
                    n;
            return S.map(c, ut, l),
            m(l.opts.start) && l.opts.start.call(o, l),
            l.progress(l.opts.progress).done(l.opts.done, l.opts.complete).fail(l.opts.fail).always(l.opts.always),
            S.fx.timer(S.extend(u, {
                elem: o,
                anim: l,
                queue: l.opts.queue
            })),
            l
        }
        S.Animation = S.extend(lt, {
            tweeners: {
                "*": [function(e, t) {
                    var n = this.createTween(e, t);
                    return se(n.elem, e, te.exec(t), n),
                    n
                }
                ]
            },
            tweener: function(e, t) {
                m(e) ? (t = e,
                e = ["*"]) : e = e.match(P);
                for (var n, r = 0, i = e.length; r < i; r++)
                    n = e[r],
                    lt.tweeners[n] = lt.tweeners[n] || [],
                    lt.tweeners[n].unshift(t)
            },
            prefilters: [function(e, t, n) {
                var r, i, o, a, s, u, l, c, f = "width"in t || "height"in t, p = this, d = {}, h = e.style, g = e.nodeType && ae(e), v = Y.get(e, "fxshow");
                for (r in n.queue || (null == (a = S._queueHooks(e, "fx")).unqueued && (a.unqueued = 0,
                s = a.empty.fire,
                a.empty.fire = function() {
                    a.unqueued || s()
                }
                ),
                a.unqueued++,
                p.always(function() {
                    p.always(function() {
                        a.unqueued--,
                        S.queue(e, "fx").length || a.empty.fire()
                    })
                })),
                t)
                    if (i = t[r],
                    rt.test(i)) {
                        if (delete t[r],
                        o = o || "toggle" === i,
                        i === (g ? "hide" : "show")) {
                            if ("show" !== i || !v || void 0 === v[r])
                                continue;
                            g = !0
                        }
                        d[r] = v && v[r] || S.style(e, r)
                    }
                if ((u = !S.isEmptyObject(t)) || !S.isEmptyObject(d))
                    for (r in f && 1 === e.nodeType && (n.overflow = [h.overflow, h.overflowX, h.overflowY],
                    null == (l = v && v.display) && (l = Y.get(e, "display")),
                    "none" === (c = S.css(e, "display")) && (l ? c = l : (le([e], !0),
                    l = e.style.display || l,
                    c = S.css(e, "display"),
                    le([e]))),
                    ("inline" === c || "inline-block" === c && null != l) && "none" === S.css(e, "float") && (u || (p.done(function() {
                        h.display = l
                    }),
                    null == l && (c = h.display,
                    l = "none" === c ? "" : c)),
                    h.display = "inline-block")),
                    n.overflow && (h.overflow = "hidden",
                    p.always(function() {
                        h.overflow = n.overflow[0],
                        h.overflowX = n.overflow[1],
                        h.overflowY = n.overflow[2]
                    })),
                    u = !1,
                    d)
                        u || (v ? "hidden"in v && (g = v.hidden) : v = Y.access(e, "fxshow", {
                            display: l
                        }),
                        o && (v.hidden = !g),
                        g && le([e], !0),
                        p.done(function() {
                            for (r in g || le([e]),
                            Y.remove(e, "fxshow"),
                            d)
                                S.style(e, r, d[r])
                        })),
                        u = ut(g ? v[r] : 0, r, p),
                        r in v || (v[r] = u.start,
                        g && (u.end = u.start,
                        u.start = 0))
            }
            ],
            prefilter: function(e, t) {
                t ? lt.prefilters.unshift(e) : lt.prefilters.push(e)
            }
        }),
        S.speed = function(e, t, n) {
            var r = e && "object" == typeof e ? S.extend({}, e) : {
                complete: n || !n && t || m(e) && e,
                duration: e,
                easing: n && t || t && !m(t) && t
            };
            return S.fx.off ? r.duration = 0 : "number" != typeof r.duration && (r.duration in S.fx.speeds ? r.duration = S.fx.speeds[r.duration] : r.duration = S.fx.speeds._default),
            null != r.queue && !0 !== r.queue || (r.queue = "fx"),
            r.old = r.complete,
            r.complete = function() {
                m(r.old) && r.old.call(this),
                r.queue && S.dequeue(this, r.queue)
            }
            ,
            r
        }
        ,
        S.fn.extend({
            fadeTo: function(e, t, n, r) {
                return this.filter(ae).css("opacity", 0).show().end().animate({
                    opacity: t
                }, e, n, r)
            },
            animate: function(t, e, n, r) {
                var i = S.isEmptyObject(t)
                  , o = S.speed(e, n, r)
                  , a = function() {
                    var e = lt(this, S.extend({}, t), o);
                    (i || Y.get(this, "finish")) && e.stop(!0)
                };
                return a.finish = a,
                i || !1 === o.queue ? this.each(a) : this.queue(o.queue, a)
            },
            stop: function(i, e, o) {
                var a = function(e) {
                    var t = e.stop;
                    delete e.stop,
                    t(o)
                };
                return "string" != typeof i && (o = e,
                e = i,
                i = void 0),
                e && this.queue(i || "fx", []),
                this.each(function() {
                    var e = !0
                      , t = null != i && i + "queueHooks"
                      , n = S.timers
                      , r = Y.get(this);
                    if (t)
                        r[t] && r[t].stop && a(r[t]);
                    else
                        for (t in r)
                            r[t] && r[t].stop && it.test(t) && a(r[t]);
                    for (t = n.length; t--; )
                        n[t].elem !== this || null != i && n[t].queue !== i || (n[t].anim.stop(o),
                        e = !1,
                        n.splice(t, 1));
                    !e && o || S.dequeue(this, i)
                })
            },
            finish: function(a) {
                return !1 !== a && (a = a || "fx"),
                this.each(function() {
                    var e, t = Y.get(this), n = t[a + "queue"], r = t[a + "queueHooks"], i = S.timers, o = n ? n.length : 0;
                    for (t.finish = !0,
                    S.queue(this, a, []),
                    r && r.stop && r.stop.call(this, !0),
                    e = i.length; e--; )
                        i[e].elem === this && i[e].queue === a && (i[e].anim.stop(!0),
                        i.splice(e, 1));
                    for (e = 0; e < o; e++)
                        n[e] && n[e].finish && n[e].finish.call(this);
                    delete t.finish
                })
            }
        }),
        S.each(["toggle", "show", "hide"], function(e, r) {
            var i = S.fn[r];
            S.fn[r] = function(e, t, n) {
                return null == e || "boolean" == typeof e ? i.apply(this, arguments) : this.animate(st(r, !0), e, t, n)
            }
        }),
        S.each({
            slideDown: st("show"),
            slideUp: st("hide"),
            slideToggle: st("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(e, r) {
            S.fn[e] = function(e, t, n) {
                return this.animate(r, e, t, n)
            }
        }),
        S.timers = [],
        S.fx.tick = function() {
            var e, t = 0, n = S.timers;
            for (Ze = Date.now(); t < n.length; t++)
                (e = n[t])() || n[t] !== e || n.splice(t--, 1);
            n.length || S.fx.stop(),
            Ze = void 0
        }
        ,
        S.fx.timer = function(e) {
            S.timers.push(e),
            S.fx.start()
        }
        ,
        S.fx.interval = 13,
        S.fx.start = function() {
            et || (et = !0,
            ot())
        }
        ,
        S.fx.stop = function() {
            et = null
        }
        ,
        S.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        S.fn.delay = function(r, e) {
            return r = S.fx && S.fx.speeds[r] || r,
            e = e || "fx",
            this.queue(e, function(e, t) {
                var n = C.setTimeout(e, r);
                t.stop = function() {
                    C.clearTimeout(n)
                }
            })
        }
        ,
        tt = E.createElement("input"),
        nt = E.createElement("select").appendChild(E.createElement("option")),
        tt.type = "checkbox",
        y.checkOn = "" !== tt.value,
        y.optSelected = nt.selected,
        (tt = E.createElement("input")).value = "t",
        tt.type = "radio",
        y.radioValue = "t" === tt.value;
        var ct, ft = S.expr.attrHandle;
        S.fn.extend({
            attr: function(e, t) {
                return $(this, S.attr, e, t, 1 < arguments.length)
            },
            removeAttr: function(e) {
                return this.each(function() {
                    S.removeAttr(this, e)
                })
            }
        }),
        S.extend({
            attr: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return "undefined" == typeof e.getAttribute ? S.prop(e, t, n) : (1 === o && S.isXMLDoc(e) || (i = S.attrHooks[t.toLowerCase()] || (S.expr.match.bool.test(t) ? ct : void 0)),
                    void 0 !== n ? null === n ? void S.removeAttr(e, t) : i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : (e.setAttribute(t, n + ""),
                    n) : i && "get"in i && null !== (r = i.get(e, t)) ? r : null == (r = S.find.attr(e, t)) ? void 0 : r)
            },
            attrHooks: {
                type: {
                    set: function(e, t) {
                        if (!y.radioValue && "radio" === t && A(e, "input")) {
                            var n = e.value;
                            return e.setAttribute("type", t),
                            n && (e.value = n),
                            t
                        }
                    }
                }
            },
            removeAttr: function(e, t) {
                var n, r = 0, i = t && t.match(P);
                if (i && 1 === e.nodeType)
                    while (n = i[r++])
                        e.removeAttribute(n)
            }
        }),
        ct = {
            set: function(e, t, n) {
                return !1 === t ? S.removeAttr(e, n) : e.setAttribute(n, n),
                n
            }
        },
        S.each(S.expr.match.bool.source.match(/\w+/g), function(e, t) {
            var a = ft[t] || S.find.attr;
            ft[t] = function(e, t, n) {
                var r, i, o = t.toLowerCase();
                return n || (i = ft[o],
                ft[o] = r,
                r = null != a(e, t, n) ? o : null,
                ft[o] = i),
                r
            }
        });
        var pt = /^(?:input|select|textarea|button)$/i
          , dt = /^(?:a|area)$/i;
        function ht(e) {
            return (e.match(P) || []).join(" ")
        }
        function gt(e) {
            return e.getAttribute && e.getAttribute("class") || ""
        }
        function vt(e) {
            return Array.isArray(e) ? e : "string" == typeof e && e.match(P) || []
        }
        S.fn.extend({
            prop: function(e, t) {
                return $(this, S.prop, e, t, 1 < arguments.length)
            },
            removeProp: function(e) {
                return this.each(function() {
                    delete this[S.propFix[e] || e]
                })
            }
        }),
        S.extend({
            prop: function(e, t, n) {
                var r, i, o = e.nodeType;
                if (3 !== o && 8 !== o && 2 !== o)
                    return 1 === o && S.isXMLDoc(e) || (t = S.propFix[t] || t,
                    i = S.propHooks[t]),
                    void 0 !== n ? i && "set"in i && void 0 !== (r = i.set(e, n, t)) ? r : e[t] = n : i && "get"in i && null !== (r = i.get(e, t)) ? r : e[t]
            },
            propHooks: {
                tabIndex: {
                    get: function(e) {
                        var t = S.find.attr(e, "tabindex");
                        return t ? parseInt(t, 10) : pt.test(e.nodeName) || dt.test(e.nodeName) && e.href ? 0 : -1
                    }
                }
            },
            propFix: {
                "for": "htmlFor",
                "class": "className"
            }
        }),
        y.optSelected || (S.propHooks.selected = {
            get: function(e) {
                var t = e.parentNode;
                return t && t.parentNode && t.parentNode.selectedIndex,
                null
            },
            set: function(e) {
                var t = e.parentNode;
                t && (t.selectedIndex,
                t.parentNode && t.parentNode.selectedIndex)
            }
        }),
        S.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            S.propFix[this.toLowerCase()] = this
        }),
        S.fn.extend({
            addClass: function(t) {
                var e, n, r, i, o, a, s, u = 0;
                if (m(t))
                    return this.each(function(e) {
                        S(this).addClass(t.call(this, e, gt(this)))
                    });
                if ((e = vt(t)).length)
                    while (n = this[u++])
                        if (i = gt(n),
                        r = 1 === n.nodeType && " " + ht(i) + " ") {
                            a = 0;
                            while (o = e[a++])
                                r.indexOf(" " + o + " ") < 0 && (r += o + " ");
                            i !== (s = ht(r)) && n.setAttribute("class", s)
                        }
                return this
            },
            removeClass: function(t) {
                var e, n, r, i, o, a, s, u = 0;
                if (m(t))
                    return this.each(function(e) {
                        S(this).removeClass(t.call(this, e, gt(this)))
                    });
                if (!arguments.length)
                    return this.attr("class", "");
                if ((e = vt(t)).length)
                    while (n = this[u++])
                        if (i = gt(n),
                        r = 1 === n.nodeType && " " + ht(i) + " ") {
                            a = 0;
                            while (o = e[a++])
                                while (-1 < r.indexOf(" " + o + " "))
                                    r = r.replace(" " + o + " ", " ");
                            i !== (s = ht(r)) && n.setAttribute("class", s)
                        }
                return this
            },
            toggleClass: function(i, t) {
                var o = typeof i
                  , a = "string" === o || Array.isArray(i);
                return "boolean" == typeof t && a ? t ? this.addClass(i) : this.removeClass(i) : m(i) ? this.each(function(e) {
                    S(this).toggleClass(i.call(this, e, gt(this), t), t)
                }) : this.each(function() {
                    var e, t, n, r;
                    if (a) {
                        t = 0,
                        n = S(this),
                        r = vt(i);
                        while (e = r[t++])
                            n.hasClass(e) ? n.removeClass(e) : n.addClass(e)
                    } else
                        void 0 !== i && "boolean" !== o || ((e = gt(this)) && Y.set(this, "__className__", e),
                        this.setAttribute && this.setAttribute("class", e || !1 === i ? "" : Y.get(this, "__className__") || ""))
                })
            },
            hasClass: function(e) {
                var t, n, r = 0;
                t = " " + e + " ";
                while (n = this[r++])
                    if (1 === n.nodeType && -1 < (" " + ht(gt(n)) + " ").indexOf(t))
                        return !0;
                return !1
            }
        });
        var yt = /\r/g;
        S.fn.extend({
            val: function(n) {
                var r, e, i, t = this[0];
                return arguments.length ? (i = m(n),
                this.each(function(e) {
                    var t;
                    1 === this.nodeType && (null == (t = i ? n.call(this, e, S(this).val()) : n) ? t = "" : "number" == typeof t ? t += "" : Array.isArray(t) && (t = S.map(t, function(e) {
                        return null == e ? "" : e + ""
                    })),
                    (r = S.valHooks[this.type] || S.valHooks[this.nodeName.toLowerCase()]) && "set"in r && void 0 !== r.set(this, t, "value") || (this.value = t))
                })) : t ? (r = S.valHooks[t.type] || S.valHooks[t.nodeName.toLowerCase()]) && "get"in r && void 0 !== (e = r.get(t, "value")) ? e : "string" == typeof (e = t.value) ? e.replace(yt, "") : null == e ? "" : e : void 0
            }
        }),
        S.extend({
            valHooks: {
                option: {
                    get: function(e) {
                        var t = S.find.attr(e, "value");
                        return null != t ? t : ht(S.text(e))
                    }
                },
                select: {
                    get: function(e) {
                        var t, n, r, i = e.options, o = e.selectedIndex, a = "select-one" === e.type, s = a ? null : [], u = a ? o + 1 : i.length;
                        for (r = o < 0 ? u : a ? o : 0; r < u; r++)
                            if (((n = i[r]).selected || r === o) && !n.disabled && (!n.parentNode.disabled || !A(n.parentNode, "optgroup"))) {
                                if (t = S(n).val(),
                                a)
                                    return t;
                                s.push(t)
                            }
                        return s
                    },
                    set: function(e, t) {
                        var n, r, i = e.options, o = S.makeArray(t), a = i.length;
                        while (a--)
                            ((r = i[a]).selected = -1 < S.inArray(S.valHooks.option.get(r), o)) && (n = !0);
                        return n || (e.selectedIndex = -1),
                        o
                    }
                }
            }
        }),
        S.each(["radio", "checkbox"], function() {
            S.valHooks[this] = {
                set: function(e, t) {
                    if (Array.isArray(t))
                        return e.checked = -1 < S.inArray(S(e).val(), t)
                }
            },
            y.checkOn || (S.valHooks[this].get = function(e) {
                return null === e.getAttribute("value") ? "on" : e.value
            }
            )
        }),
        y.focusin = "onfocusin"in C;
        var mt = /^(?:focusinfocus|focusoutblur)$/
          , xt = function(e) {
            e.stopPropagation()
        };
        S.extend(S.event, {
            trigger: function(e, t, n, r) {
                var i, o, a, s, u, l, c, f, p = [n || E], d = v.call(e, "type") ? e.type : e, h = v.call(e, "namespace") ? e.namespace.split(".") : [];
                if (o = f = a = n = n || E,
                3 !== n.nodeType && 8 !== n.nodeType && !mt.test(d + S.event.triggered) && (-1 < d.indexOf(".") && (d = (h = d.split(".")).shift(),
                h.sort()),
                u = d.indexOf(":") < 0 && "on" + d,
                (e = e[S.expando] ? e : new S.Event(d,"object" == typeof e && e)).isTrigger = r ? 2 : 3,
                e.namespace = h.join("."),
                e.rnamespace = e.namespace ? new RegExp("(^|\\.)" + h.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                e.result = void 0,
                e.target || (e.target = n),
                t = null == t ? [e] : S.makeArray(t, [e]),
                c = S.event.special[d] || {},
                r || !c.trigger || !1 !== c.trigger.apply(n, t))) {
                    if (!r && !c.noBubble && !x(n)) {
                        for (s = c.delegateType || d,
                        mt.test(s + d) || (o = o.parentNode); o; o = o.parentNode)
                            p.push(o),
                            a = o;
                        a === (n.ownerDocument || E) && p.push(a.defaultView || a.parentWindow || C)
                    }
                    i = 0;
                    while ((o = p[i++]) && !e.isPropagationStopped())
                        f = o,
                        e.type = 1 < i ? s : c.bindType || d,
                        (l = (Y.get(o, "events") || Object.create(null))[e.type] && Y.get(o, "handle")) && l.apply(o, t),
                        (l = u && o[u]) && l.apply && V(o) && (e.result = l.apply(o, t),
                        !1 === e.result && e.preventDefault());
                    return e.type = d,
                    r || e.isDefaultPrevented() || c._default && !1 !== c._default.apply(p.pop(), t) || !V(n) || u && m(n[d]) && !x(n) && ((a = n[u]) && (n[u] = null),
                    S.event.triggered = d,
                    e.isPropagationStopped() && f.addEventListener(d, xt),
                    n[d](),
                    e.isPropagationStopped() && f.removeEventListener(d, xt),
                    S.event.triggered = void 0,
                    a && (n[u] = a)),
                    e.result
                }
            },
            simulate: function(e, t, n) {
                var r = S.extend(new S.Event, n, {
                    type: e,
                    isSimulated: !0
                });
                S.event.trigger(r, null, t)
            }
        }),
        S.fn.extend({
            trigger: function(e, t) {
                return this.each(function() {
                    S.event.trigger(e, t, this)
                })
            },
            triggerHandler: function(e, t) {
                var n = this[0];
                if (n)
                    return S.event.trigger(e, t, n, !0)
            }
        }),
        y.focusin || S.each({
            focus: "focusin",
            blur: "focusout"
        }, function(n, r) {
            var i = function(e) {
                S.event.simulate(r, e.target, S.event.fix(e))
            };
            S.event.special[r] = {
                setup: function() {
                    var e = this.ownerDocument || this.document || this
                      , t = Y.access(e, r);
                    t || e.addEventListener(n, i, !0),
                    Y.access(e, r, (t || 0) + 1)
                },
                teardown: function() {
                    var e = this.ownerDocument || this.document || this
                      , t = Y.access(e, r) - 1;
                    t ? Y.access(e, r, t) : (e.removeEventListener(n, i, !0),
                    Y.remove(e, r))
                }
            }
        });
        var bt = C.location
          , wt = {
            guid: Date.now()
        }
          , Tt = /\?/;
        S.parseXML = function(e) {
            var t, n;
            if (!e || "string" != typeof e)
                return null;
            try {
                t = (new C.DOMParser).parseFromString(e, "text/xml")
            } catch (e) {}
            return n = t && t.getElementsByTagName("parsererror")[0],
            t && !n || S.error("Invalid XML: " + (n ? S.map(n.childNodes, function(e) {
                return e.textContent
            }).join("\n") : e)),
            t
        }
        ;
        var Ct = /\[\]$/
          , Et = /\r?\n/g
          , St = /^(?:submit|button|image|reset|file)$/i
          , kt = /^(?:input|select|textarea|keygen)/i;
        function At(n, e, r, i) {
            var t;
            if (Array.isArray(e))
                S.each(e, function(e, t) {
                    r || Ct.test(n) ? i(n, t) : At(n + "[" + ("object" == typeof t && null != t ? e : "") + "]", t, r, i)
                });
            else if (r || "object" !== w(e))
                i(n, e);
            else
                for (t in e)
                    At(n + "[" + t + "]", e[t], r, i)
        }
        S.param = function(e, t) {
            var n, r = [], i = function(e, t) {
                var n = m(t) ? t() : t;
                r[r.length] = encodeURIComponent(e) + "=" + encodeURIComponent(null == n ? "" : n)
            };
            if (null == e)
                return "";
            if (Array.isArray(e) || e.jquery && !S.isPlainObject(e))
                S.each(e, function() {
                    i(this.name, this.value)
                });
            else
                for (n in e)
                    At(n, e[n], t, i);
            return r.join("&")
        }
        ,
        S.fn.extend({
            serialize: function() {
                return S.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var e = S.prop(this, "elements");
                    return e ? S.makeArray(e) : this
                }).filter(function() {
                    var e = this.type;
                    return this.name && !S(this).is(":disabled") && kt.test(this.nodeName) && !St.test(e) && (this.checked || !pe.test(e))
                }).map(function(e, t) {
                    var n = S(this).val();
                    return null == n ? null : Array.isArray(n) ? S.map(n, function(e) {
                        return {
                            name: t.name,
                            value: e.replace(Et, "\r\n")
                        }
                    }) : {
                        name: t.name,
                        value: n.replace(Et, "\r\n")
                    }
                }).get()
            }
        });
        var Nt = /%20/g
          , jt = /#.*$/
          , Dt = /([?&])_=[^&]*/
          , qt = /^(.*?):[ \t]*([^\r\n]*)$/gm
          , Lt = /^(?:GET|HEAD)$/
          , Ht = /^\/\//
          , Ot = {}
          , Pt = {}
          , Rt = "*/".concat("*")
          , Mt = E.createElement("a");
        function It(o) {
            return function(e, t) {
                "string" != typeof e && (t = e,
                e = "*");
                var n, r = 0, i = e.toLowerCase().match(P) || [];
                if (m(t))
                    while (n = i[r++])
                        "+" === n[0] ? (n = n.slice(1) || "*",
                        (o[n] = o[n] || []).unshift(t)) : (o[n] = o[n] || []).push(t)
            }
        }
        function Wt(t, i, o, a) {
            var s = {}
              , u = t === Pt;
            function l(e) {
                var r;
                return s[e] = !0,
                S.each(t[e] || [], function(e, t) {
                    var n = t(i, o, a);
                    return "string" != typeof n || u || s[n] ? u ? !(r = n) : void 0 : (i.dataTypes.unshift(n),
                    l(n),
                    !1)
                }),
                r
            }
            return l(i.dataTypes[0]) || !s["*"] && l("*")
        }
        function Ft(e, t) {
            var n, r, i = S.ajaxSettings.flatOptions || {};
            for (n in t)
                void 0 !== t[n] && ((i[n] ? e : r || (r = {}))[n] = t[n]);
            return r && S.extend(!0, e, r),
            e
        }
        Mt.href = bt.href,
        S.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: bt.href,
                type: "GET",
                isLocal: /^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": Rt,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /\bxml\b/,
                    html: /\bhtml/,
                    json: /\bjson\b/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": JSON.parse,
                    "text xml": S.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(e, t) {
                return t ? Ft(Ft(e, S.ajaxSettings), t) : Ft(S.ajaxSettings, e)
            },
            ajaxPrefilter: It(Ot),
            ajaxTransport: It(Pt),
            ajax: function(e, t) {
                "object" == typeof e && (t = e,
                e = void 0),
                t = t || {};
                var c, f, p, n, d, r, h, g, i, o, v = S.ajaxSetup({}, t), y = v.context || v, m = v.context && (y.nodeType || y.jquery) ? S(y) : S.event, x = S.Deferred(), b = S.Callbacks("once memory"), w = v.statusCode || {}, a = {}, s = {}, u = "canceled", T = {
                    readyState: 0,
                    getResponseHeader: function(e) {
                        var t;
                        if (h) {
                            if (!n) {
                                n = {};
                                while (t = qt.exec(p))
                                    n[t[1].toLowerCase() + " "] = (n[t[1].toLowerCase() + " "] || []).concat(t[2])
                            }
                            t = n[e.toLowerCase() + " "]
                        }
                        return null == t ? null : t.join(", ")
                    },
                    getAllResponseHeaders: function() {
                        return h ? p : null
                    },
                    setRequestHeader: function(e, t) {
                        return null == h && (e = s[e.toLowerCase()] = s[e.toLowerCase()] || e,
                        a[e] = t),
                        this
                    },
                    overrideMimeType: function(e) {
                        return null == h && (v.mimeType = e),
                        this
                    },
                    statusCode: function(e) {
                        var t;
                        if (e)
                            if (h)
                                T.always(e[T.status]);
                            else
                                for (t in e)
                                    w[t] = [w[t], e[t]];
                        return this
                    },
                    abort: function(e) {
                        var t = e || u;
                        return c && c.abort(t),
                        l(0, t),
                        this
                    }
                };
                if (x.promise(T),
                v.url = ((e || v.url || bt.href) + "").replace(Ht, bt.protocol + "//"),
                v.type = t.method || t.type || v.method || v.type,
                v.dataTypes = (v.dataType || "*").toLowerCase().match(P) || [""],
                null == v.crossDomain) {
                    r = E.createElement("a");
                    try {
                        r.href = v.url,
                        r.href = r.href,
                        v.crossDomain = Mt.protocol + "//" + Mt.host != r.protocol + "//" + r.host
                    } catch (e) {
                        v.crossDomain = !0
                    }
                }
                if (v.data && v.processData && "string" != typeof v.data && (v.data = S.param(v.data, v.traditional)),
                Wt(Ot, v, t, T),
                h)
                    return T;
                for (i in (g = S.event && v.global) && 0 == S.active++ && S.event.trigger("ajaxStart"),
                v.type = v.type.toUpperCase(),
                v.hasContent = !Lt.test(v.type),
                f = v.url.replace(jt, ""),
                v.hasContent ? v.data && v.processData && 0 === (v.contentType || "").indexOf("application/x-www-form-urlencoded") && (v.data = v.data.replace(Nt, "+")) : (o = v.url.slice(f.length),
                v.data && (v.processData || "string" == typeof v.data) && (f += (Tt.test(f) ? "&" : "?") + v.data,
                delete v.data),
                !1 === v.cache && (f = f.replace(Dt, "$1"),
                o = (Tt.test(f) ? "&" : "?") + "_=" + wt.guid++ + o),
                v.url = f + o),
                v.ifModified && (S.lastModified[f] && T.setRequestHeader("If-Modified-Since", S.lastModified[f]),
                S.etag[f] && T.setRequestHeader("If-None-Match", S.etag[f])),
                (v.data && v.hasContent && !1 !== v.contentType || t.contentType) && T.setRequestHeader("Content-Type", v.contentType),
                T.setRequestHeader("Accept", v.dataTypes[0] && v.accepts[v.dataTypes[0]] ? v.accepts[v.dataTypes[0]] + ("*" !== v.dataTypes[0] ? ", " + Rt + "; q=0.01" : "") : v.accepts["*"]),
                v.headers)
                    T.setRequestHeader(i, v.headers[i]);
                if (v.beforeSend && (!1 === v.beforeSend.call(y, T, v) || h))
                    return T.abort();
                if (u = "abort",
                b.add(v.complete),
                T.done(v.success),
                T.fail(v.error),
                c = Wt(Pt, v, t, T)) {
                    if (T.readyState = 1,
                    g && m.trigger("ajaxSend", [T, v]),
                    h)
                        return T;
                    v.async && 0 < v.timeout && (d = C.setTimeout(function() {
                        T.abort("timeout")
                    }, v.timeout));
                    try {
                        h = !1,
                        c.send(a, l)
                    } catch (e) {
                        if (h)
                            throw e;
                        l(-1, e)
                    }
                } else
                    l(-1, "No Transport");
                function l(e, t, n, r) {
                    var i, o, a, s, u, l = t;
                    h || (h = !0,
                    d && C.clearTimeout(d),
                    c = void 0,
                    p = r || "",
                    T.readyState = 0 < e ? 4 : 0,
                    i = 200 <= e && e < 300 || 304 === e,
                    n && (s = function(e, t, n) {
                        var r, i, o, a, s = e.contents, u = e.dataTypes;
                        while ("*" === u[0])
                            u.shift(),
                            void 0 === r && (r = e.mimeType || t.getResponseHeader("Content-Type"));
                        if (r)
                            for (i in s)
                                if (s[i] && s[i].test(r)) {
                                    u.unshift(i);
                                    break
                                }
                        if (u[0]in n)
                            o = u[0];
                        else {
                            for (i in n) {
                                if (!u[0] || e.converters[i + " " + u[0]]) {
                                    o = i;
                                    break
                                }
                                a || (a = i)
                            }
                            o = o || a
                        }
                        if (o)
                            return o !== u[0] && u.unshift(o),
                            n[o]
                    }(v, T, n)),
                    !i && -1 < S.inArray("script", v.dataTypes) && S.inArray("json", v.dataTypes) < 0 && (v.converters["text script"] = function() {}
                    ),
                    s = function(e, t, n, r) {
                        var i, o, a, s, u, l = {}, c = e.dataTypes.slice();
                        if (c[1])
                            for (a in e.converters)
                                l[a.toLowerCase()] = e.converters[a];
                        o = c.shift();
                        while (o)
                            if (e.responseFields[o] && (n[e.responseFields[o]] = t),
                            !u && r && e.dataFilter && (t = e.dataFilter(t, e.dataType)),
                            u = o,
                            o = c.shift())
                                if ("*" === o)
                                    o = u;
                                else if ("*" !== u && u !== o) {
                                    if (!(a = l[u + " " + o] || l["* " + o]))
                                        for (i in l)
                                            if ((s = i.split(" "))[1] === o && (a = l[u + " " + s[0]] || l["* " + s[0]])) {
                                                !0 === a ? a = l[i] : !0 !== l[i] && (o = s[0],
                                                c.unshift(s[1]));
                                                break
                                            }
                                    if (!0 !== a)
                                        if (a && e["throws"])
                                            t = a(t);
                                        else
                                            try {
                                                t = a(t)
                                            } catch (e) {
                                                return {
                                                    state: "parsererror",
                                                    error: a ? e : "No conversion from " + u + " to " + o
                                                }
                                            }
                                }
                        return {
                            state: "success",
                            data: t
                        }
                    }(v, s, T, i),
                    i ? (v.ifModified && ((u = T.getResponseHeader("Last-Modified")) && (S.lastModified[f] = u),
                    (u = T.getResponseHeader("etag")) && (S.etag[f] = u)),
                    204 === e || "HEAD" === v.type ? l = "nocontent" : 304 === e ? l = "notmodified" : (l = s.state,
                    o = s.data,
                    i = !(a = s.error))) : (a = l,
                    !e && l || (l = "error",
                    e < 0 && (e = 0))),
                    T.status = e,
                    T.statusText = (t || l) + "",
                    i ? x.resolveWith(y, [o, l, T]) : x.rejectWith(y, [T, l, a]),
                    T.statusCode(w),
                    w = void 0,
                    g && m.trigger(i ? "ajaxSuccess" : "ajaxError", [T, v, i ? o : a]),
                    b.fireWith(y, [T, l]),
                    g && (m.trigger("ajaxComplete", [T, v]),
                    --S.active || S.event.trigger("ajaxStop")))
                }
                return T
            },
            getJSON: function(e, t, n) {
                return S.get(e, t, n, "json")
            },
            getScript: function(e, t) {
                return S.get(e, void 0, t, "script")
            }
        }),
        S.each(["get", "post"], function(e, i) {
            S[i] = function(e, t, n, r) {
                return m(t) && (r = r || n,
                n = t,
                t = void 0),
                S.ajax(S.extend({
                    url: e,
                    type: i,
                    dataType: r,
                    data: t,
                    success: n
                }, S.isPlainObject(e) && e))
            }
        }),
        S.ajaxPrefilter(function(e) {
            var t;
            for (t in e.headers)
                "content-type" === t.toLowerCase() && (e.contentType = e.headers[t] || "")
        }),
        S._evalUrl = function(e, t, n) {
            return S.ajax({
                url: e,
                type: "GET",
                dataType: "script",
                cache: !0,
                async: !1,
                global: !1,
                converters: {
                    "text script": function() {}
                },
                dataFilter: function(e) {
                    S.globalEval(e, t, n)
                }
            })
        }
        ,
        S.fn.extend({
            wrapAll: function(e) {
                var t;
                return this[0] && (m(e) && (e = e.call(this[0])),
                t = S(e, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && t.insertBefore(this[0]),
                t.map(function() {
                    var e = this;
                    while (e.firstElementChild)
                        e = e.firstElementChild;
                    return e
                }).append(this)),
                this
            },
            wrapInner: function(n) {
                return m(n) ? this.each(function(e) {
                    S(this).wrapInner(n.call(this, e))
                }) : this.each(function() {
                    var e = S(this)
                      , t = e.contents();
                    t.length ? t.wrapAll(n) : e.append(n)
                })
            },
            wrap: function(t) {
                var n = m(t);
                return this.each(function(e) {
                    S(this).wrapAll(n ? t.call(this, e) : t)
                })
            },
            unwrap: function(e) {
                return this.parent(e).not("body").each(function() {
                    S(this).replaceWith(this.childNodes)
                }),
                this
            }
        }),
        S.expr.pseudos.hidden = function(e) {
            return !S.expr.pseudos.visible(e)
        }
        ,
        S.expr.pseudos.visible = function(e) {
            return !!(e.offsetWidth || e.offsetHeight || e.getClientRects().length)
        }
        ,
        S.ajaxSettings.xhr = function() {
            try {
                return new C.XMLHttpRequest
            } catch (e) {}
        }
        ;
        var Bt = {
            0: 200,
            1223: 204
        }
          , $t = S.ajaxSettings.xhr();
        y.cors = !!$t && "withCredentials"in $t,
        y.ajax = $t = !!$t,
        S.ajaxTransport(function(i) {
            var o, a;
            if (y.cors || $t && !i.crossDomain)
                return {
                    send: function(e, t) {
                        var n, r = i.xhr();
                        if (r.open(i.type, i.url, i.async, i.username, i.password),
                        i.xhrFields)
                            for (n in i.xhrFields)
                                r[n] = i.xhrFields[n];
                        for (n in i.mimeType && r.overrideMimeType && r.overrideMimeType(i.mimeType),
                        i.crossDomain || e["X-Requested-With"] || (e["X-Requested-With"] = "XMLHttpRequest"),
                        e)
                            r.setRequestHeader(n, e[n]);
                        o = function(e) {
                            return function() {
                                o && (o = a = r.onload = r.onerror = r.onabort = r.ontimeout = r.onreadystatechange = null,
                                "abort" === e ? r.abort() : "error" === e ? "number" != typeof r.status ? t(0, "error") : t(r.status, r.statusText) : t(Bt[r.status] || r.status, r.statusText, "text" !== (r.responseType || "text") || "string" != typeof r.responseText ? {
                                    binary: r.response
                                } : {
                                    text: r.responseText
                                }, r.getAllResponseHeaders()))
                            }
                        }
                        ,
                        r.onload = o(),
                        a = r.onerror = r.ontimeout = o("error"),
                        void 0 !== r.onabort ? r.onabort = a : r.onreadystatechange = function() {
                            4 === r.readyState && C.setTimeout(function() {
                                o && a()
                            })
                        }
                        ,
                        o = o("abort");
                        try {
                            r.send(i.hasContent && i.data || null)
                        } catch (e) {
                            if (o)
                                throw e
                        }
                    },
                    abort: function() {
                        o && o()
                    }
                }
        }),
        S.ajaxPrefilter(function(e) {
            e.crossDomain && (e.contents.script = !1)
        }),
        S.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /\b(?:java|ecma)script\b/
            },
            converters: {
                "text script": function(e) {
                    return S.globalEval(e),
                    e
                }
            }
        }),
        S.ajaxPrefilter("script", function(e) {
            void 0 === e.cache && (e.cache = !1),
            e.crossDomain && (e.type = "GET")
        }),
        S.ajaxTransport("script", function(n) {
            var r, i;
            if (n.crossDomain || n.scriptAttrs)
                return {
                    send: function(e, t) {
                        r = S("<script>").attr(n.scriptAttrs || {}).prop({
                            charset: n.scriptCharset,
                            src: n.url
                        }).on("load error", i = function(e) {
                            r.remove(),
                            i = null,
                            e && t("error" === e.type ? 404 : 200, e.type)
                        }
                        ),
                        E.head.appendChild(r[0])
                    },
                    abort: function() {
                        i && i()
                    }
                }
        });
        var _t, zt = [], Ut = /(=)\?(?=&|$)|\?\?/;
        S.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var e = zt.pop() || S.expando + "_" + wt.guid++;
                return this[e] = !0,
                e
            }
        }),
        S.ajaxPrefilter("json jsonp", function(e, t, n) {
            var r, i, o, a = !1 !== e.jsonp && (Ut.test(e.url) ? "url" : "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && Ut.test(e.data) && "data");
            if (a || "jsonp" === e.dataTypes[0])
                return r = e.jsonpCallback = m(e.jsonpCallback) ? e.jsonpCallback() : e.jsonpCallback,
                a ? e[a] = e[a].replace(Ut, "$1" + r) : !1 !== e.jsonp && (e.url += (Tt.test(e.url) ? "&" : "?") + e.jsonp + "=" + r),
                e.converters["script json"] = function() {
                    return o || S.error(r + " was not called"),
                    o[0]
                }
                ,
                e.dataTypes[0] = "json",
                i = C[r],
                C[r] = function() {
                    o = arguments
                }
                ,
                n.always(function() {
                    void 0 === i ? S(C).removeProp(r) : C[r] = i,
                    e[r] && (e.jsonpCallback = t.jsonpCallback,
                    zt.push(r)),
                    o && m(i) && i(o[0]),
                    o = i = void 0
                }),
                "script"
        }),
        y.createHTMLDocument = ((_t = E.implementation.createHTMLDocument("").body).innerHTML = "<form></form><form></form>",
        2 === _t.childNodes.length),
        S.parseHTML = function(e, t, n) {
            return "string" != typeof e ? [] : ("boolean" == typeof t && (n = t,
            t = !1),
            t || (y.createHTMLDocument ? ((r = (t = E.implementation.createHTMLDocument("")).createElement("base")).href = E.location.href,
            t.head.appendChild(r)) : t = E),
            o = !n && [],
            (i = N.exec(e)) ? [t.createElement(i[1])] : (i = xe([e], t, o),
            o && o.length && S(o).remove(),
            S.merge([], i.childNodes)));
            var r, i, o
        }
        ,
        S.fn.load = function(e, t, n) {
            var r, i, o, a = this, s = e.indexOf(" ");
            return -1 < s && (r = ht(e.slice(s)),
            e = e.slice(0, s)),
            m(t) ? (n = t,
            t = void 0) : t && "object" == typeof t && (i = "POST"),
            0 < a.length && S.ajax({
                url: e,
                type: i || "GET",
                dataType: "html",
                data: t
            }).done(function(e) {
                o = arguments,
                a.html(r ? S("<div>").append(S.parseHTML(e)).find(r) : e)
            }).always(n && function(e, t) {
                a.each(function() {
                    n.apply(this, o || [e.responseText, t, e])
                })
            }
            ),
            this
        }
        ,
        S.expr.pseudos.animated = function(t) {
            return S.grep(S.timers, function(e) {
                return t === e.elem
            }).length
        }
        ,
        S.offset = {
            setOffset: function(e, t, n) {
                var r, i, o, a, s, u, l = S.css(e, "position"), c = S(e), f = {};
                "static" === l && (e.style.position = "relative"),
                s = c.offset(),
                o = S.css(e, "top"),
                u = S.css(e, "left"),
                ("absolute" === l || "fixed" === l) && -1 < (o + u).indexOf("auto") ? (a = (r = c.position()).top,
                i = r.left) : (a = parseFloat(o) || 0,
                i = parseFloat(u) || 0),
                m(t) && (t = t.call(e, n, S.extend({}, s))),
                null != t.top && (f.top = t.top - s.top + a),
                null != t.left && (f.left = t.left - s.left + i),
                "using"in t ? t.using.call(e, f) : c.css(f)
            }
        },
        S.fn.extend({
            offset: function(t) {
                if (arguments.length)
                    return void 0 === t ? this : this.each(function(e) {
                        S.offset.setOffset(this, t, e)
                    });
                var e, n, r = this[0];
                return r ? r.getClientRects().length ? (e = r.getBoundingClientRect(),
                n = r.ownerDocument.defaultView,
                {
                    top: e.top + n.pageYOffset,
                    left: e.left + n.pageXOffset
                }) : {
                    top: 0,
                    left: 0
                } : void 0
            },
            position: function() {
                if (this[0]) {
                    var e, t, n, r = this[0], i = {
                        top: 0,
                        left: 0
                    };
                    if ("fixed" === S.css(r, "position"))
                        t = r.getBoundingClientRect();
                    else {
                        t = this.offset(),
                        n = r.ownerDocument,
                        e = r.offsetParent || n.documentElement;
                        while (e && (e === n.body || e === n.documentElement) && "static" === S.css(e, "position"))
                            e = e.parentNode;
                        e && e !== r && 1 === e.nodeType && ((i = S(e).offset()).top += S.css(e, "borderTopWidth", !0),
                        i.left += S.css(e, "borderLeftWidth", !0))
                    }
                    return {
                        top: t.top - i.top - S.css(r, "marginTop", !0),
                        left: t.left - i.left - S.css(r, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var e = this.offsetParent;
                    while (e && "static" === S.css(e, "position"))
                        e = e.offsetParent;
                    return e || re
                })
            }
        }),
        S.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(t, i) {
            var o = "pageYOffset" === i;
            S.fn[t] = function(e) {
                return $(this, function(e, t, n) {
                    var r;
                    if (x(e) ? r = e : 9 === e.nodeType && (r = e.defaultView),
                    void 0 === n)
                        return r ? r[i] : e[t];
                    r ? r.scrollTo(o ? r.pageXOffset : n, o ? n : r.pageYOffset) : e[t] = n
                }, t, e, arguments.length)
            }
        }),
        S.each(["top", "left"], function(e, n) {
            S.cssHooks[n] = Fe(y.pixelPosition, function(e, t) {
                if (t)
                    return t = We(e, n),
                    Pe.test(t) ? S(e).position()[n] + "px" : t
            })
        }),
        S.each({
            Height: "height",
            Width: "width"
        }, function(a, s) {
            S.each({
                padding: "inner" + a,
                content: s,
                "": "outer" + a
            }, function(r, o) {
                S.fn[o] = function(e, t) {
                    var n = arguments.length && (r || "boolean" != typeof e)
                      , i = r || (!0 === e || !0 === t ? "margin" : "border");
                    return $(this, function(e, t, n) {
                        var r;
                        return x(e) ? 0 === o.indexOf("outer") ? e["inner" + a] : e.document.documentElement["client" + a] : 9 === e.nodeType ? (r = e.documentElement,
                        Math.max(e.body["scroll" + a], r["scroll" + a], e.body["offset" + a], r["offset" + a], r["client" + a])) : void 0 === n ? S.css(e, t, i) : S.style(e, t, n, i)
                    }, s, n ? e : void 0, n)
                }
            })
        }),
        S.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(e, t) {
            S.fn[t] = function(e) {
                return this.on(t, e)
            }
        }),
        S.fn.extend({
            bind: function(e, t, n) {
                return this.on(e, null, t, n)
            },
            unbind: function(e, t) {
                return this.off(e, null, t)
            },
            delegate: function(e, t, n, r) {
                return this.on(t, e, n, r)
            },
            undelegate: function(e, t, n) {
                return 1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", n)
            },
            hover: function(e, t) {
                return this.mouseenter(e).mouseleave(t || e)
            }
        }),
        S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, n) {
            S.fn[n] = function(e, t) {
                return 0 < arguments.length ? this.on(n, null, e, t) : this.trigger(n)
            }
        });
        var Xt = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        S.proxy = function(e, t) {
            var n, r, i;
            if ("string" == typeof t && (n = e[t],
            t = e,
            e = n),
            m(e))
                return r = s.call(arguments, 2),
                (i = function() {
                    return e.apply(t || this, r.concat(s.call(arguments)))
                }
                ).guid = e.guid = e.guid || S.guid++,
                i
        }
        ,
        S.holdReady = function(e) {
            e ? S.readyWait++ : S.ready(!0)
        }
        ,
        S.isArray = Array.isArray,
        S.parseJSON = JSON.parse,
        S.nodeName = A,
        S.isFunction = m,
        S.isWindow = x,
        S.camelCase = X,
        S.type = w,
        S.now = Date.now,
        S.isNumeric = function(e) {
            var t = S.type(e);
            return ("number" === t || "string" === t) && !isNaN(e - parseFloat(e))
        }
        ,
        S.trim = function(e) {
            return null == e ? "" : (e + "").replace(Xt, "")
        }
        ,
        "function" == typeof define && define.amd && define("jquery", [], function() {
            return S
        });
        var Vt = C.jQuery
          , Gt = C.$;
        return S.noConflict = function(e) {
            return C.$ === S && (C.$ = Gt),
            e && C.jQuery === S && (C.jQuery = Vt),
            S
        }
        ,
        "undefined" == typeof e && (C.jQuery = C.$ = S),
        S
    });
    jQuery.noConflict();
    /*! jQuery v2.1.3 | (c) 2005, 2014 jQuery Foundation, Inc. | jquery.org/license */
    !function(a, b) {
        "object" == typeof module && "object" == typeof module.exports ? module.exports = a.document ? b(a, !0) : function(a) {
            if (!a.document)
                throw new Error("jQuery requires a window with a document");
            return b(a)
        }
        : b(a)
    }("undefined" != typeof window ? window : this, function(a, b) {
        var c = []
          , d = c.slice
          , e = c.concat
          , f = c.push
          , g = c.indexOf
          , h = {}
          , i = h.toString
          , j = h.hasOwnProperty
          , k = {}
          , l = a.document
          , m = "2.1.3"
          , n = function(a, b) {
            return new n.fn.init(a,b)
        }
          , o = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g
          , p = /^-ms-/
          , q = /-([\da-z])/gi
          , r = function(a, b) {
            return b.toUpperCase()
        };
        n.fn = n.prototype = {
            jquery: m,
            constructor: n,
            selector: "",
            length: 0,
            toArray: function() {
                return d.call(this)
            },
            get: function(a) {
                return null != a ? 0 > a ? this[a + this.length] : this[a] : d.call(this)
            },
            pushStack: function(a) {
                var b = n.merge(this.constructor(), a);
                return b.prevObject = this,
                b.context = this.context,
                b
            },
            each: function(a, b) {
                return n.each(this, a, b)
            },
            map: function(a) {
                return this.pushStack(n.map(this, function(b, c) {
                    return a.call(b, c, b)
                }))
            },
            slice: function() {
                return this.pushStack(d.apply(this, arguments))
            },
            first: function() {
                return this.eq(0)
            },
            last: function() {
                return this.eq(-1)
            },
            eq: function(a) {
                var b = this.length
                  , c = +a + (0 > a ? b : 0);
                return this.pushStack(c >= 0 && b > c ? [this[c]] : [])
            },
            end: function() {
                return this.prevObject || this.constructor(null)
            },
            push: f,
            sort: c.sort,
            splice: c.splice
        },
        n.extend = n.fn.extend = function() {
            var a, b, c, d, e, f, g = arguments[0] || {}, h = 1, i = arguments.length, j = !1;
            for ("boolean" == typeof g && (j = g,
            g = arguments[h] || {},
            h++),
            "object" == typeof g || n.isFunction(g) || (g = {}),
            h === i && (g = this,
            h--); i > h; h++)
                if (null != (a = arguments[h]))
                    for (b in a)
                        c = g[b],
                        d = a[b],
                        g !== d && (j && d && (n.isPlainObject(d) || (e = n.isArray(d))) ? (e ? (e = !1,
                        f = c && n.isArray(c) ? c : []) : f = c && n.isPlainObject(c) ? c : {},
                        g[b] = n.extend(j, f, d)) : void 0 !== d && (g[b] = d));
            return g
        }
        ,
        n.extend({
            expando: "jQuery" + (m + Math.random()).replace(/\D/g, ""),
            isReady: !0,
            error: function(a) {
                throw new Error(a)
            },
            noop: function() {},
            isFunction: function(a) {
                return "function" === n.type(a)
            },
            isArray: Array.isArray,
            isWindow: function(a) {
                return null != a && a === a.window
            },
            isNumeric: function(a) {
                return !n.isArray(a) && a - parseFloat(a) + 1 >= 0
            },
            isPlainObject: function(a) {
                return "object" !== n.type(a) || a.nodeType || n.isWindow(a) ? !1 : a.constructor && !j.call(a.constructor.prototype, "isPrototypeOf") ? !1 : !0
            },
            isEmptyObject: function(a) {
                var b;
                for (b in a)
                    return !1;
                return !0
            },
            type: function(a) {
                return null == a ? a + "" : "object" == typeof a || "function" == typeof a ? h[i.call(a)] || "object" : typeof a
            },
            globalEval: function(a) {
                var b, c = eval;
                a = n.trim(a),
                a && (1 === a.indexOf("use strict") ? (b = l.createElement("script"),
                b.text = a,
                l.head.appendChild(b).parentNode.removeChild(b)) : c(a))
            },
            camelCase: function(a) {
                return a.replace(p, "ms-").replace(q, r)
            },
            nodeName: function(a, b) {
                return a.nodeName && a.nodeName.toLowerCase() === b.toLowerCase()
            },
            each: function(a, b, c) {
                var d, e = 0, f = a.length, g = s(a);
                if (c) {
                    if (g) {
                        for (; f > e; e++)
                            if (d = b.apply(a[e], c),
                            d === !1)
                                break
                    } else
                        for (e in a)
                            if (d = b.apply(a[e], c),
                            d === !1)
                                break
                } else if (g) {
                    for (; f > e; e++)
                        if (d = b.call(a[e], e, a[e]),
                        d === !1)
                            break
                } else
                    for (e in a)
                        if (d = b.call(a[e], e, a[e]),
                        d === !1)
                            break;
                return a
            },
            trim: function(a) {
                return null == a ? "" : (a + "").replace(o, "")
            },
            makeArray: function(a, b) {
                var c = b || [];
                return null != a && (s(Object(a)) ? n.merge(c, "string" == typeof a ? [a] : a) : f.call(c, a)),
                c
            },
            inArray: function(a, b, c) {
                return null == b ? -1 : g.call(b, a, c)
            },
            merge: function(a, b) {
                for (var c = +b.length, d = 0, e = a.length; c > d; d++)
                    a[e++] = b[d];
                return a.length = e,
                a
            },
            grep: function(a, b, c) {
                for (var d, e = [], f = 0, g = a.length, h = !c; g > f; f++)
                    d = !b(a[f], f),
                    d !== h && e.push(a[f]);
                return e
            },
            map: function(a, b, c) {
                var d, f = 0, g = a.length, h = s(a), i = [];
                if (h)
                    for (; g > f; f++)
                        d = b(a[f], f, c),
                        null != d && i.push(d);
                else
                    for (f in a)
                        d = b(a[f], f, c),
                        null != d && i.push(d);
                return e.apply([], i)
            },
            guid: 1,
            proxy: function(a, b) {
                var c, e, f;
                return "string" == typeof b && (c = a[b],
                b = a,
                a = c),
                n.isFunction(a) ? (e = d.call(arguments, 2),
                f = function() {
                    return a.apply(b || this, e.concat(d.call(arguments)))
                }
                ,
                f.guid = a.guid = a.guid || n.guid++,
                f) : void 0
            },
            now: Date.now,
            support: k
        }),
        n.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(a, b) {
            h["[object " + b + "]"] = b.toLowerCase()
        });
        function s(a) {
            var b = a.length
              , c = n.type(a);
            return "function" === c || n.isWindow(a) ? !1 : 1 === a.nodeType && b ? !0 : "array" === c || 0 === b || "number" == typeof b && b > 0 && b - 1 in a
        }
        var t = function(a) {
            var b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u = "sizzle" + 1 * new Date, v = a.document, w = 0, x = 0, y = hb(), z = hb(), A = hb(), B = function(a, b) {
                return a === b && (l = !0),
                0
            }, C = 1 << 31, D = {}.hasOwnProperty, E = [], F = E.pop, G = E.push, H = E.push, I = E.slice, J = function(a, b) {
                for (var c = 0, d = a.length; d > c; c++)
                    if (a[c] === b)
                        return c;
                return -1
            }, K = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped", L = "[\\x20\\t\\r\\n\\f]", M = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+", N = M.replace("w", "w#"), O = "\\[" + L + "*(" + M + ")(?:" + L + "*([*^$|!~]?=)" + L + "*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + N + "))|)" + L + "*\\]", P = ":(" + M + ")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|" + O + ")*)|.*)\\)|)", Q = new RegExp(L + "+","g"), R = new RegExp("^" + L + "+|((?:^|[^\\\\])(?:\\\\.)*)" + L + "+$","g"), S = new RegExp("^" + L + "*," + L + "*"), T = new RegExp("^" + L + "*([>+~]|" + L + ")" + L + "*"), U = new RegExp("=" + L + "*([^\\]'\"]*?)" + L + "*\\]","g"), V = new RegExp(P), W = new RegExp("^" + N + "$"), X = {
                ID: new RegExp("^#(" + M + ")"),
                CLASS: new RegExp("^\\.(" + M + ")"),
                TAG: new RegExp("^(" + M.replace("w", "w*") + ")"),
                ATTR: new RegExp("^" + O),
                PSEUDO: new RegExp("^" + P),
                CHILD: new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + L + "*(even|odd|(([+-]|)(\\d*)n|)" + L + "*(?:([+-]|)" + L + "*(\\d+)|))" + L + "*\\)|)","i"),
                bool: new RegExp("^(?:" + K + ")$","i"),
                needsContext: new RegExp("^" + L + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" + L + "*((?:-\\d)?\\d*)" + L + "*\\)|)(?=[^-]|$)","i")
            }, Y = /^(?:input|select|textarea|button)$/i, Z = /^h\d$/i, $ = /^[^{]+\{\s*\[native \w/, _ = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/, ab = /[+~]/, bb = /'|\\/g, cb = new RegExp("\\\\([\\da-f]{1,6}" + L + "?|(" + L + ")|.)","ig"), db = function(a, b, c) {
                var d = "0x" + b - 65536;
                return d !== d || c ? b : 0 > d ? String.fromCharCode(d + 65536) : String.fromCharCode(d >> 10 | 55296, 1023 & d | 56320)
            }, eb = function() {
                m()
            };
            try {
                H.apply(E = I.call(v.childNodes), v.childNodes),
                E[v.childNodes.length].nodeType
            } catch (fb) {
                H = {
                    apply: E.length ? function(a, b) {
                        G.apply(a, I.call(b))
                    }
                    : function(a, b) {
                        var c = a.length
                          , d = 0;
                        while (a[c++] = b[d++])
                            ;
                        a.length = c - 1
                    }
                }
            }
            function gb(a, b, d, e) {
                var f, h, j, k, l, o, r, s, w, x;
                if ((b ? b.ownerDocument || b : v) !== n && m(b),
                b = b || n,
                d = d || [],
                k = b.nodeType,
                "string" != typeof a || !a || 1 !== k && 9 !== k && 11 !== k)
                    return d;
                if (!e && p) {
                    if (11 !== k && (f = _.exec(a)))
                        if (j = f[1]) {
                            if (9 === k) {
                                if (h = b.getElementById(j),
                                !h || !h.parentNode)
                                    return d;
                                if (h.id === j)
                                    return d.push(h),
                                    d
                            } else if (b.ownerDocument && (h = b.ownerDocument.getElementById(j)) && t(b, h) && h.id === j)
                                return d.push(h),
                                d
                        } else {
                            if (f[2])
                                return H.apply(d, b.getElementsByTagName(a)),
                                d;
                            if ((j = f[3]) && c.getElementsByClassName)
                                return H.apply(d, b.getElementsByClassName(j)),
                                d
                        }
                    if (c.qsa && (!q || !q.test(a))) {
                        if (s = r = u,
                        w = b,
                        x = 1 !== k && a,
                        1 === k && "object" !== b.nodeName.toLowerCase()) {
                            o = g(a),
                            (r = b.getAttribute("id")) ? s = r.replace(bb, "\\$&") : b.setAttribute("id", s),
                            s = "[id='" + s + "'] ",
                            l = o.length;
                            while (l--)
                                o[l] = s + rb(o[l]);
                            w = ab.test(a) && pb(b.parentNode) || b,
                            x = o.join(",")
                        }
                        if (x)
                            try {
                                return H.apply(d, w.querySelectorAll(x)),
                                d
                            } catch (y) {} finally {
                                r || b.removeAttribute("id")
                            }
                    }
                }
                return i(a.replace(R, "$1"), b, d, e)
            }
            function hb() {
                var a = [];
                function b(c, e) {
                    return a.push(c + " ") > d.cacheLength && delete b[a.shift()],
                    b[c + " "] = e
                }
                return b
            }
            function ib(a) {
                return a[u] = !0,
                a
            }
            function jb(a) {
                var b = n.createElement("div");
                try {
                    return !!a(b)
                } catch (c) {
                    return !1
                } finally {
                    b.parentNode && b.parentNode.removeChild(b),
                    b = null
                }
            }
            function kb(a, b) {
                var c = a.split("|")
                  , e = a.length;
                while (e--)
                    d.attrHandle[c[e]] = b
            }
            function lb(a, b) {
                var c = b && a
                  , d = c && 1 === a.nodeType && 1 === b.nodeType && (~b.sourceIndex || C) - (~a.sourceIndex || C);
                if (d)
                    return d;
                if (c)
                    while (c = c.nextSibling)
                        if (c === b)
                            return -1;
                return a ? 1 : -1
            }
            function mb(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return "input" === c && b.type === a
                }
            }
            function nb(a) {
                return function(b) {
                    var c = b.nodeName.toLowerCase();
                    return ("input" === c || "button" === c) && b.type === a
                }
            }
            function ob(a) {
                return ib(function(b) {
                    return b = +b,
                    ib(function(c, d) {
                        var e, f = a([], c.length, b), g = f.length;
                        while (g--)
                            c[e = f[g]] && (c[e] = !(d[e] = c[e]))
                    })
                })
            }
            function pb(a) {
                return a && "undefined" != typeof a.getElementsByTagName && a
            }
            c = gb.support = {},
            f = gb.isXML = function(a) {
                var b = a && (a.ownerDocument || a).documentElement;
                return b ? "HTML" !== b.nodeName : !1
            }
            ,
            m = gb.setDocument = function(a) {
                var b, e, g = a ? a.ownerDocument || a : v;
                return g !== n && 9 === g.nodeType && g.documentElement ? (n = g,
                o = g.documentElement,
                e = g.defaultView,
                e && e !== e.top && (e.addEventListener ? e.addEventListener("unload", eb, !1) : e.attachEvent && e.attachEvent("onunload", eb)),
                p = !f(g),
                c.attributes = jb(function(a) {
                    return a.className = "i",
                    !a.getAttribute("className")
                }),
                c.getElementsByTagName = jb(function(a) {
                    return a.appendChild(g.createComment("")),
                    !a.getElementsByTagName("*").length
                }),
                c.getElementsByClassName = $.test(g.getElementsByClassName),
                c.getById = jb(function(a) {
                    return o.appendChild(a).id = u,
                    !g.getElementsByName || !g.getElementsByName(u).length
                }),
                c.getById ? (d.find.ID = function(a, b) {
                    if ("undefined" != typeof b.getElementById && p) {
                        var c = b.getElementById(a);
                        return c && c.parentNode ? [c] : []
                    }
                }
                ,
                d.filter.ID = function(a) {
                    var b = a.replace(cb, db);
                    return function(a) {
                        return a.getAttribute("id") === b
                    }
                }
                ) : (delete d.find.ID,
                d.filter.ID = function(a) {
                    var b = a.replace(cb, db);
                    return function(a) {
                        var c = "undefined" != typeof a.getAttributeNode && a.getAttributeNode("id");
                        return c && c.value === b
                    }
                }
                ),
                d.find.TAG = c.getElementsByTagName ? function(a, b) {
                    return "undefined" != typeof b.getElementsByTagName ? b.getElementsByTagName(a) : c.qsa ? b.querySelectorAll(a) : void 0
                }
                : function(a, b) {
                    var c, d = [], e = 0, f = b.getElementsByTagName(a);
                    if ("*" === a) {
                        while (c = f[e++])
                            1 === c.nodeType && d.push(c);
                        return d
                    }
                    return f
                }
                ,
                d.find.CLASS = c.getElementsByClassName && function(a, b) {
                    return p ? b.getElementsByClassName(a) : void 0
                }
                ,
                r = [],
                q = [],
                (c.qsa = $.test(g.querySelectorAll)) && (jb(function(a) {
                    o.appendChild(a).innerHTML = "<a id='" + u + "'></a><select id='" + u + "-\f]' msallowcapture=''><option selected=''></option></select>",
                    a.querySelectorAll("[msallowcapture^='']").length && q.push("[*^$]=" + L + "*(?:''|\"\")"),
                    a.querySelectorAll("[selected]").length || q.push("\\[" + L + "*(?:value|" + K + ")"),
                    a.querySelectorAll("[id~=" + u + "-]").length || q.push("~="),
                    a.querySelectorAll(":checked").length || q.push(":checked"),
                    a.querySelectorAll("a#" + u + "+*").length || q.push(".#.+[+~]")
                }),
                jb(function(a) {
                    var b = g.createElement("input");
                    b.setAttribute("type", "hidden"),
                    a.appendChild(b).setAttribute("name", "D"),
                    a.querySelectorAll("[name=d]").length && q.push("name" + L + "*[*^$|!~]?="),
                    a.querySelectorAll(":enabled").length || q.push(":enabled", ":disabled"),
                    a.querySelectorAll("*,:x"),
                    q.push(",.*:")
                })),
                (c.matchesSelector = $.test(s = o.matches || o.webkitMatchesSelector || o.mozMatchesSelector || o.oMatchesSelector || o.msMatchesSelector)) && jb(function(a) {
                    c.disconnectedMatch = s.call(a, "div"),
                    s.call(a, "[s!='']:x"),
                    r.push("!=", P)
                }),
                q = q.length && new RegExp(q.join("|")),
                r = r.length && new RegExp(r.join("|")),
                b = $.test(o.compareDocumentPosition),
                t = b || $.test(o.contains) ? function(a, b) {
                    var c = 9 === a.nodeType ? a.documentElement : a
                      , d = b && b.parentNode;
                    return a === d || !(!d || 1 !== d.nodeType || !(c.contains ? c.contains(d) : a.compareDocumentPosition && 16 & a.compareDocumentPosition(d)))
                }
                : function(a, b) {
                    if (b)
                        while (b = b.parentNode)
                            if (b === a)
                                return !0;
                    return !1
                }
                ,
                B = b ? function(a, b) {
                    if (a === b)
                        return l = !0,
                        0;
                    var d = !a.compareDocumentPosition - !b.compareDocumentPosition;
                    return d ? d : (d = (a.ownerDocument || a) === (b.ownerDocument || b) ? a.compareDocumentPosition(b) : 1,
                    1 & d || !c.sortDetached && b.compareDocumentPosition(a) === d ? a === g || a.ownerDocument === v && t(v, a) ? -1 : b === g || b.ownerDocument === v && t(v, b) ? 1 : k ? J(k, a) - J(k, b) : 0 : 4 & d ? -1 : 1)
                }
                : function(a, b) {
                    if (a === b)
                        return l = !0,
                        0;
                    var c, d = 0, e = a.parentNode, f = b.parentNode, h = [a], i = [b];
                    if (!e || !f)
                        return a === g ? -1 : b === g ? 1 : e ? -1 : f ? 1 : k ? J(k, a) - J(k, b) : 0;
                    if (e === f)
                        return lb(a, b);
                    c = a;
                    while (c = c.parentNode)
                        h.unshift(c);
                    c = b;
                    while (c = c.parentNode)
                        i.unshift(c);
                    while (h[d] === i[d])
                        d++;
                    return d ? lb(h[d], i[d]) : h[d] === v ? -1 : i[d] === v ? 1 : 0
                }
                ,
                g) : n
            }
            ,
            gb.matches = function(a, b) {
                return gb(a, null, null, b)
            }
            ,
            gb.matchesSelector = function(a, b) {
                if ((a.ownerDocument || a) !== n && m(a),
                b = b.replace(U, "='$1']"),
                !(!c.matchesSelector || !p || r && r.test(b) || q && q.test(b)))
                    try {
                        var d = s.call(a, b);
                        if (d || c.disconnectedMatch || a.document && 11 !== a.document.nodeType)
                            return d
                    } catch (e) {}
                return gb(b, n, null, [a]).length > 0
            }
            ,
            gb.contains = function(a, b) {
                return (a.ownerDocument || a) !== n && m(a),
                t(a, b)
            }
            ,
            gb.attr = function(a, b) {
                (a.ownerDocument || a) !== n && m(a);
                var e = d.attrHandle[b.toLowerCase()]
                  , f = e && D.call(d.attrHandle, b.toLowerCase()) ? e(a, b, !p) : void 0;
                return void 0 !== f ? f : c.attributes || !p ? a.getAttribute(b) : (f = a.getAttributeNode(b)) && f.specified ? f.value : null
            }
            ,
            gb.error = function(a) {
                throw new Error("Syntax error, unrecognized expression: " + a)
            }
            ,
            gb.uniqueSort = function(a) {
                var b, d = [], e = 0, f = 0;
                if (l = !c.detectDuplicates,
                k = !c.sortStable && a.slice(0),
                a.sort(B),
                l) {
                    while (b = a[f++])
                        b === a[f] && (e = d.push(f));
                    while (e--)
                        a.splice(d[e], 1)
                }
                return k = null,
                a
            }
            ,
            e = gb.getText = function(a) {
                var b, c = "", d = 0, f = a.nodeType;
                if (f) {
                    if (1 === f || 9 === f || 11 === f) {
                        if ("string" == typeof a.textContent)
                            return a.textContent;
                        for (a = a.firstChild; a; a = a.nextSibling)
                            c += e(a)
                    } else if (3 === f || 4 === f)
                        return a.nodeValue
                } else
                    while (b = a[d++])
                        c += e(b);
                return c
            }
            ,
            d = gb.selectors = {
                cacheLength: 50,
                createPseudo: ib,
                match: X,
                attrHandle: {},
                find: {},
                relative: {
                    ">": {
                        dir: "parentNode",
                        first: !0
                    },
                    " ": {
                        dir: "parentNode"
                    },
                    "+": {
                        dir: "previousSibling",
                        first: !0
                    },
                    "~": {
                        dir: "previousSibling"
                    }
                },
                preFilter: {
                    ATTR: function(a) {
                        return a[1] = a[1].replace(cb, db),
                        a[3] = (a[3] || a[4] || a[5] || "").replace(cb, db),
                        "~=" === a[2] && (a[3] = " " + a[3] + " "),
                        a.slice(0, 4)
                    },
                    CHILD: function(a) {
                        return a[1] = a[1].toLowerCase(),
                        "nth" === a[1].slice(0, 3) ? (a[3] || gb.error(a[0]),
                        a[4] = +(a[4] ? a[5] + (a[6] || 1) : 2 * ("even" === a[3] || "odd" === a[3])),
                        a[5] = +(a[7] + a[8] || "odd" === a[3])) : a[3] && gb.error(a[0]),
                        a
                    },
                    PSEUDO: function(a) {
                        var b, c = !a[6] && a[2];
                        return X.CHILD.test(a[0]) ? null : (a[3] ? a[2] = a[4] || a[5] || "" : c && V.test(c) && (b = g(c, !0)) && (b = c.indexOf(")", c.length - b) - c.length) && (a[0] = a[0].slice(0, b),
                        a[2] = c.slice(0, b)),
                        a.slice(0, 3))
                    }
                },
                filter: {
                    TAG: function(a) {
                        var b = a.replace(cb, db).toLowerCase();
                        return "*" === a ? function() {
                            return !0
                        }
                        : function(a) {
                            return a.nodeName && a.nodeName.toLowerCase() === b
                        }
                    },
                    CLASS: function(a) {
                        var b = y[a + " "];
                        return b || (b = new RegExp("(^|" + L + ")" + a + "(" + L + "|$)")) && y(a, function(a) {
                            return b.test("string" == typeof a.className && a.className || "undefined" != typeof a.getAttribute && a.getAttribute("class") || "")
                        })
                    },
                    ATTR: function(a, b, c) {
                        return function(d) {
                            var e = gb.attr(d, a);
                            return null == e ? "!=" === b : b ? (e += "",
                            "=" === b ? e === c : "!=" === b ? e !== c : "^=" === b ? c && 0 === e.indexOf(c) : "*=" === b ? c && e.indexOf(c) > -1 : "$=" === b ? c && e.slice(-c.length) === c : "~=" === b ? (" " + e.replace(Q, " ") + " ").indexOf(c) > -1 : "|=" === b ? e === c || e.slice(0, c.length + 1) === c + "-" : !1) : !0
                        }
                    },
                    CHILD: function(a, b, c, d, e) {
                        var f = "nth" !== a.slice(0, 3)
                          , g = "last" !== a.slice(-4)
                          , h = "of-type" === b;
                        return 1 === d && 0 === e ? function(a) {
                            return !!a.parentNode
                        }
                        : function(b, c, i) {
                            var j, k, l, m, n, o, p = f !== g ? "nextSibling" : "previousSibling", q = b.parentNode, r = h && b.nodeName.toLowerCase(), s = !i && !h;
                            if (q) {
                                if (f) {
                                    while (p) {
                                        l = b;
                                        while (l = l[p])
                                            if (h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType)
                                                return !1;
                                        o = p = "only" === a && !o && "nextSibling"
                                    }
                                    return !0
                                }
                                if (o = [g ? q.firstChild : q.lastChild],
                                g && s) {
                                    k = q[u] || (q[u] = {}),
                                    j = k[a] || [],
                                    n = j[0] === w && j[1],
                                    m = j[0] === w && j[2],
                                    l = n && q.childNodes[n];
                                    while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                        if (1 === l.nodeType && ++m && l === b) {
                                            k[a] = [w, n, m];
                                            break
                                        }
                                } else if (s && (j = (b[u] || (b[u] = {}))[a]) && j[0] === w)
                                    m = j[1];
                                else
                                    while (l = ++n && l && l[p] || (m = n = 0) || o.pop())
                                        if ((h ? l.nodeName.toLowerCase() === r : 1 === l.nodeType) && ++m && (s && ((l[u] || (l[u] = {}))[a] = [w, m]),
                                        l === b))
                                            break;
                                return m -= e,
                                m === d || m % d === 0 && m / d >= 0
                            }
                        }
                    },
                    PSEUDO: function(a, b) {
                        var c, e = d.pseudos[a] || d.setFilters[a.toLowerCase()] || gb.error("unsupported pseudo: " + a);
                        return e[u] ? e(b) : e.length > 1 ? (c = [a, a, "", b],
                        d.setFilters.hasOwnProperty(a.toLowerCase()) ? ib(function(a, c) {
                            var d, f = e(a, b), g = f.length;
                            while (g--)
                                d = J(a, f[g]),
                                a[d] = !(c[d] = f[g])
                        }) : function(a) {
                            return e(a, 0, c)
                        }
                        ) : e
                    }
                },
                pseudos: {
                    not: ib(function(a) {
                        var b = []
                          , c = []
                          , d = h(a.replace(R, "$1"));
                        return d[u] ? ib(function(a, b, c, e) {
                            var f, g = d(a, null, e, []), h = a.length;
                            while (h--)
                                (f = g[h]) && (a[h] = !(b[h] = f))
                        }) : function(a, e, f) {
                            return b[0] = a,
                            d(b, null, f, c),
                            b[0] = null,
                            !c.pop()
                        }
                    }),
                    has: ib(function(a) {
                        return function(b) {
                            return gb(a, b).length > 0
                        }
                    }),
                    contains: ib(function(a) {
                        return a = a.replace(cb, db),
                        function(b) {
                            return (b.textContent || b.innerText || e(b)).indexOf(a) > -1
                        }
                    }),
                    lang: ib(function(a) {
                        return W.test(a || "") || gb.error("unsupported lang: " + a),
                        a = a.replace(cb, db).toLowerCase(),
                        function(b) {
                            var c;
                            do
                                if (c = p ? b.lang : b.getAttribute("xml:lang") || b.getAttribute("lang"))
                                    return c = c.toLowerCase(),
                                    c === a || 0 === c.indexOf(a + "-");
                            while ((b = b.parentNode) && 1 === b.nodeType);
                            return !1
                        }
                    }),
                    target: function(b) {
                        var c = a.location && a.location.hash;
                        return c && c.slice(1) === b.id
                    },
                    root: function(a) {
                        return a === o
                    },
                    focus: function(a) {
                        return a === n.activeElement && (!n.hasFocus || n.hasFocus()) && !!(a.type || a.href || ~a.tabIndex)
                    },
                    enabled: function(a) {
                        return a.disabled === !1
                    },
                    disabled: function(a) {
                        return a.disabled === !0
                    },
                    checked: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && !!a.checked || "option" === b && !!a.selected
                    },
                    selected: function(a) {
                        return a.parentNode && a.parentNode.selectedIndex,
                        a.selected === !0
                    },
                    empty: function(a) {
                        for (a = a.firstChild; a; a = a.nextSibling)
                            if (a.nodeType < 6)
                                return !1;
                        return !0
                    },
                    parent: function(a) {
                        return !d.pseudos.empty(a)
                    },
                    header: function(a) {
                        return Z.test(a.nodeName)
                    },
                    input: function(a) {
                        return Y.test(a.nodeName)
                    },
                    button: function(a) {
                        var b = a.nodeName.toLowerCase();
                        return "input" === b && "button" === a.type || "button" === b
                    },
                    text: function(a) {
                        var b;
                        return "input" === a.nodeName.toLowerCase() && "text" === a.type && (null == (b = a.getAttribute("type")) || "text" === b.toLowerCase())
                    },
                    first: ob(function() {
                        return [0]
                    }),
                    last: ob(function(a, b) {
                        return [b - 1]
                    }),
                    eq: ob(function(a, b, c) {
                        return [0 > c ? c + b : c]
                    }),
                    even: ob(function(a, b) {
                        for (var c = 0; b > c; c += 2)
                            a.push(c);
                        return a
                    }),
                    odd: ob(function(a, b) {
                        for (var c = 1; b > c; c += 2)
                            a.push(c);
                        return a
                    }),
                    lt: ob(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; --d >= 0; )
                            a.push(d);
                        return a
                    }),
                    gt: ob(function(a, b, c) {
                        for (var d = 0 > c ? c + b : c; ++d < b; )
                            a.push(d);
                        return a
                    })
                }
            },
            d.pseudos.nth = d.pseudos.eq;
            for (b in {
                radio: !0,
                checkbox: !0,
                file: !0,
                password: !0,
                image: !0
            })
                d.pseudos[b] = mb(b);
            for (b in {
                submit: !0,
                reset: !0
            })
                d.pseudos[b] = nb(b);
            function qb() {}
            qb.prototype = d.filters = d.pseudos,
            d.setFilters = new qb,
            g = gb.tokenize = function(a, b) {
                var c, e, f, g, h, i, j, k = z[a + " "];
                if (k)
                    return b ? 0 : k.slice(0);
                h = a,
                i = [],
                j = d.preFilter;
                while (h) {
                    (!c || (e = S.exec(h))) && (e && (h = h.slice(e[0].length) || h),
                    i.push(f = [])),
                    c = !1,
                    (e = T.exec(h)) && (c = e.shift(),
                    f.push({
                        value: c,
                        type: e[0].replace(R, " ")
                    }),
                    h = h.slice(c.length));
                    for (g in d.filter)
                        !(e = X[g].exec(h)) || j[g] && !(e = j[g](e)) || (c = e.shift(),
                        f.push({
                            value: c,
                            type: g,
                            matches: e
                        }),
                        h = h.slice(c.length));
                    if (!c)
                        break
                }
                return b ? h.length : h ? gb.error(a) : z(a, i).slice(0)
            }
            ;
            function rb(a) {
                for (var b = 0, c = a.length, d = ""; c > b; b++)
                    d += a[b].value;
                return d
            }
            function sb(a, b, c) {
                var d = b.dir
                  , e = c && "parentNode" === d
                  , f = x++;
                return b.first ? function(b, c, f) {
                    while (b = b[d])
                        if (1 === b.nodeType || e)
                            return a(b, c, f)
                }
                : function(b, c, g) {
                    var h, i, j = [w, f];
                    if (g) {
                        while (b = b[d])
                            if ((1 === b.nodeType || e) && a(b, c, g))
                                return !0
                    } else
                        while (b = b[d])
                            if (1 === b.nodeType || e) {
                                if (i = b[u] || (b[u] = {}),
                                (h = i[d]) && h[0] === w && h[1] === f)
                                    return j[2] = h[2];
                                if (i[d] = j,
                                j[2] = a(b, c, g))
                                    return !0
                            }
                }
            }
            function tb(a) {
                return a.length > 1 ? function(b, c, d) {
                    var e = a.length;
                    while (e--)
                        if (!a[e](b, c, d))
                            return !1;
                    return !0
                }
                : a[0]
            }
            function ub(a, b, c) {
                for (var d = 0, e = b.length; e > d; d++)
                    gb(a, b[d], c);
                return c
            }
            function vb(a, b, c, d, e) {
                for (var f, g = [], h = 0, i = a.length, j = null != b; i > h; h++)
                    (f = a[h]) && (!c || c(f, d, e)) && (g.push(f),
                    j && b.push(h));
                return g
            }
            function wb(a, b, c, d, e, f) {
                return d && !d[u] && (d = wb(d)),
                e && !e[u] && (e = wb(e, f)),
                ib(function(f, g, h, i) {
                    var j, k, l, m = [], n = [], o = g.length, p = f || ub(b || "*", h.nodeType ? [h] : h, []), q = !a || !f && b ? p : vb(p, m, a, h, i), r = c ? e || (f ? a : o || d) ? [] : g : q;
                    if (c && c(q, r, h, i),
                    d) {
                        j = vb(r, n),
                        d(j, [], h, i),
                        k = j.length;
                        while (k--)
                            (l = j[k]) && (r[n[k]] = !(q[n[k]] = l))
                    }
                    if (f) {
                        if (e || a) {
                            if (e) {
                                j = [],
                                k = r.length;
                                while (k--)
                                    (l = r[k]) && j.push(q[k] = l);
                                e(null, r = [], j, i)
                            }
                            k = r.length;
                            while (k--)
                                (l = r[k]) && (j = e ? J(f, l) : m[k]) > -1 && (f[j] = !(g[j] = l))
                        }
                    } else
                        r = vb(r === g ? r.splice(o, r.length) : r),
                        e ? e(null, g, r, i) : H.apply(g, r)
                })
            }
            function xb(a) {
                for (var b, c, e, f = a.length, g = d.relative[a[0].type], h = g || d.relative[" "], i = g ? 1 : 0, k = sb(function(a) {
                    return a === b
                }, h, !0), l = sb(function(a) {
                    return J(b, a) > -1
                }, h, !0), m = [function(a, c, d) {
                    var e = !g && (d || c !== j) || ((b = c).nodeType ? k(a, c, d) : l(a, c, d));
                    return b = null,
                    e
                }
                ]; f > i; i++)
                    if (c = d.relative[a[i].type])
                        m = [sb(tb(m), c)];
                    else {
                        if (c = d.filter[a[i].type].apply(null, a[i].matches),
                        c[u]) {
                            for (e = ++i; f > e; e++)
                                if (d.relative[a[e].type])
                                    break;
                            return wb(i > 1 && tb(m), i > 1 && rb(a.slice(0, i - 1).concat({
                                value: " " === a[i - 2].type ? "*" : ""
                            })).replace(R, "$1"), c, e > i && xb(a.slice(i, e)), f > e && xb(a = a.slice(e)), f > e && rb(a))
                        }
                        m.push(c)
                    }
                return tb(m)
            }
            function yb(a, b) {
                var c = b.length > 0
                  , e = a.length > 0
                  , f = function(f, g, h, i, k) {
                    var l, m, o, p = 0, q = "0", r = f && [], s = [], t = j, u = f || e && d.find.TAG("*", k), v = w += null == t ? 1 : Math.random() || .1, x = u.length;
                    for (k && (j = g !== n && g); q !== x && null != (l = u[q]); q++) {
                        if (e && l) {
                            m = 0;
                            while (o = a[m++])
                                if (o(l, g, h)) {
                                    i.push(l);
                                    break
                                }
                            k && (w = v)
                        }
                        c && ((l = !o && l) && p--,
                        f && r.push(l))
                    }
                    if (p += q,
                    c && q !== p) {
                        m = 0;
                        while (o = b[m++])
                            o(r, s, g, h);
                        if (f) {
                            if (p > 0)
                                while (q--)
                                    r[q] || s[q] || (s[q] = F.call(i));
                            s = vb(s)
                        }
                        H.apply(i, s),
                        k && !f && s.length > 0 && p + b.length > 1 && gb.uniqueSort(i)
                    }
                    return k && (w = v,
                    j = t),
                    r
                };
                return c ? ib(f) : f
            }
            return h = gb.compile = function(a, b) {
                var c, d = [], e = [], f = A[a + " "];
                if (!f) {
                    b || (b = g(a)),
                    c = b.length;
                    while (c--)
                        f = xb(b[c]),
                        f[u] ? d.push(f) : e.push(f);
                    f = A(a, yb(e, d)),
                    f.selector = a
                }
                return f
            }
            ,
            i = gb.select = function(a, b, e, f) {
                var i, j, k, l, m, n = "function" == typeof a && a, o = !f && g(a = n.selector || a);
                if (e = e || [],
                1 === o.length) {
                    if (j = o[0] = o[0].slice(0),
                    j.length > 2 && "ID" === (k = j[0]).type && c.getById && 9 === b.nodeType && p && d.relative[j[1].type]) {
                        if (b = (d.find.ID(k.matches[0].replace(cb, db), b) || [])[0],
                        !b)
                            return e;
                        n && (b = b.parentNode),
                        a = a.slice(j.shift().value.length)
                    }
                    i = X.needsContext.test(a) ? 0 : j.length;
                    while (i--) {
                        if (k = j[i],
                        d.relative[l = k.type])
                            break;
                        if ((m = d.find[l]) && (f = m(k.matches[0].replace(cb, db), ab.test(j[0].type) && pb(b.parentNode) || b))) {
                            if (j.splice(i, 1),
                            a = f.length && rb(j),
                            !a)
                                return H.apply(e, f),
                                e;
                            break
                        }
                    }
                }
                return (n || h(a, o))(f, b, !p, e, ab.test(a) && pb(b.parentNode) || b),
                e
            }
            ,
            c.sortStable = u.split("").sort(B).join("") === u,
            c.detectDuplicates = !!l,
            m(),
            c.sortDetached = jb(function(a) {
                return 1 & a.compareDocumentPosition(n.createElement("div"))
            }),
            jb(function(a) {
                return a.innerHTML = "<a href='#'></a>",
                "#" === a.firstChild.getAttribute("href")
            }) || kb("type|href|height|width", function(a, b, c) {
                return c ? void 0 : a.getAttribute(b, "type" === b.toLowerCase() ? 1 : 2)
            }),
            c.attributes && jb(function(a) {
                return a.innerHTML = "<input/>",
                a.firstChild.setAttribute("value", ""),
                "" === a.firstChild.getAttribute("value")
            }) || kb("value", function(a, b, c) {
                return c || "input" !== a.nodeName.toLowerCase() ? void 0 : a.defaultValue
            }),
            jb(function(a) {
                return null == a.getAttribute("disabled")
            }) || kb(K, function(a, b, c) {
                var d;
                return c ? void 0 : a[b] === !0 ? b.toLowerCase() : (d = a.getAttributeNode(b)) && d.specified ? d.value : null
            }),
            gb
        }(a);
        n.find = t,
        n.expr = t.selectors,
        n.expr[":"] = n.expr.pseudos,
        n.unique = t.uniqueSort,
        n.text = t.getText,
        n.isXMLDoc = t.isXML,
        n.contains = t.contains;
        var u = n.expr.match.needsContext
          , v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/
          , w = /^.[^:#\[\.,]*$/;
        function x(a, b, c) {
            if (n.isFunction(b))
                return n.grep(a, function(a, d) {
                    return !!b.call(a, d, a) !== c
                });
            if (b.nodeType)
                return n.grep(a, function(a) {
                    return a === b !== c
                });
            if ("string" == typeof b) {
                if (w.test(b))
                    return n.filter(b, a, c);
                b = n.filter(b, a)
            }
            return n.grep(a, function(a) {
                return g.call(b, a) >= 0 !== c
            })
        }
        n.filter = function(a, b, c) {
            var d = b[0];
            return c && (a = ":not(" + a + ")"),
            1 === b.length && 1 === d.nodeType ? n.find.matchesSelector(d, a) ? [d] : [] : n.find.matches(a, n.grep(b, function(a) {
                return 1 === a.nodeType
            }))
        }
        ,
        n.fn.extend({
            find: function(a) {
                var b, c = this.length, d = [], e = this;
                if ("string" != typeof a)
                    return this.pushStack(n(a).filter(function() {
                        for (b = 0; c > b; b++)
                            if (n.contains(e[b], this))
                                return !0
                    }));
                for (b = 0; c > b; b++)
                    n.find(a, e[b], d);
                return d = this.pushStack(c > 1 ? n.unique(d) : d),
                d.selector = this.selector ? this.selector + " " + a : a,
                d
            },
            filter: function(a) {
                return this.pushStack(x(this, a || [], !1))
            },
            not: function(a) {
                return this.pushStack(x(this, a || [], !0))
            },
            is: function(a) {
                return !!x(this, "string" == typeof a && u.test(a) ? n(a) : a || [], !1).length
            }
        });
        var y, z = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/, A = n.fn.init = function(a, b) {
            var c, d;
            if (!a)
                return this;
            if ("string" == typeof a) {
                if (c = "<" === a[0] && ">" === a[a.length - 1] && a.length >= 3 ? [null, a, null] : z.exec(a),
                !c || !c[1] && b)
                    return !b || b.jquery ? (b || y).find(a) : this.constructor(b).find(a);
                if (c[1]) {
                    if (b = b instanceof n ? b[0] : b,
                    n.merge(this, n.parseHTML(c[1], b && b.nodeType ? b.ownerDocument || b : l, !0)),
                    v.test(c[1]) && n.isPlainObject(b))
                        for (c in b)
                            n.isFunction(this[c]) ? this[c](b[c]) : this.attr(c, b[c]);
                    return this
                }
                return d = l.getElementById(c[2]),
                d && d.parentNode && (this.length = 1,
                this[0] = d),
                this.context = l,
                this.selector = a,
                this
            }
            return a.nodeType ? (this.context = this[0] = a,
            this.length = 1,
            this) : n.isFunction(a) ? "undefined" != typeof y.ready ? y.ready(a) : a(n) : (void 0 !== a.selector && (this.selector = a.selector,
            this.context = a.context),
            n.makeArray(a, this))
        }
        ;
        A.prototype = n.fn,
        y = n(l);
        var B = /^(?:parents|prev(?:Until|All))/
          , C = {
            children: !0,
            contents: !0,
            next: !0,
            prev: !0
        };
        n.extend({
            dir: function(a, b, c) {
                var d = []
                  , e = void 0 !== c;
                while ((a = a[b]) && 9 !== a.nodeType)
                    if (1 === a.nodeType) {
                        if (e && n(a).is(c))
                            break;
                        d.push(a)
                    }
                return d
            },
            sibling: function(a, b) {
                for (var c = []; a; a = a.nextSibling)
                    1 === a.nodeType && a !== b && c.push(a);
                return c
            }
        }),
        n.fn.extend({
            has: function(a) {
                var b = n(a, this)
                  , c = b.length;
                return this.filter(function() {
                    for (var a = 0; c > a; a++)
                        if (n.contains(this, b[a]))
                            return !0
                })
            },
            closest: function(a, b) {
                for (var c, d = 0, e = this.length, f = [], g = u.test(a) || "string" != typeof a ? n(a, b || this.context) : 0; e > d; d++)
                    for (c = this[d]; c && c !== b; c = c.parentNode)
                        if (c.nodeType < 11 && (g ? g.index(c) > -1 : 1 === c.nodeType && n.find.matchesSelector(c, a))) {
                            f.push(c);
                            break
                        }
                return this.pushStack(f.length > 1 ? n.unique(f) : f)
            },
            index: function(a) {
                return a ? "string" == typeof a ? g.call(n(a), this[0]) : g.call(this, a.jquery ? a[0] : a) : this[0] && this[0].parentNode ? this.first().prevAll().length : -1
            },
            add: function(a, b) {
                return this.pushStack(n.unique(n.merge(this.get(), n(a, b))))
            },
            addBack: function(a) {
                return this.add(null == a ? this.prevObject : this.prevObject.filter(a))
            }
        });
        function D(a, b) {
            while ((a = a[b]) && 1 !== a.nodeType)
                ;
            return a
        }
        n.each({
            parent: function(a) {
                var b = a.parentNode;
                return b && 11 !== b.nodeType ? b : null
            },
            parents: function(a) {
                return n.dir(a, "parentNode")
            },
            parentsUntil: function(a, b, c) {
                return n.dir(a, "parentNode", c)
            },
            next: function(a) {
                return D(a, "nextSibling")
            },
            prev: function(a) {
                return D(a, "previousSibling")
            },
            nextAll: function(a) {
                return n.dir(a, "nextSibling")
            },
            prevAll: function(a) {
                return n.dir(a, "previousSibling")
            },
            nextUntil: function(a, b, c) {
                return n.dir(a, "nextSibling", c)
            },
            prevUntil: function(a, b, c) {
                return n.dir(a, "previousSibling", c)
            },
            siblings: function(a) {
                return n.sibling((a.parentNode || {}).firstChild, a)
            },
            children: function(a) {
                return n.sibling(a.firstChild)
            },
            contents: function(a) {
                return a.contentDocument || n.merge([], a.childNodes)
            }
        }, function(a, b) {
            n.fn[a] = function(c, d) {
                var e = n.map(this, b, c);
                return "Until" !== a.slice(-5) && (d = c),
                d && "string" == typeof d && (e = n.filter(d, e)),
                this.length > 1 && (C[a] || n.unique(e),
                B.test(a) && e.reverse()),
                this.pushStack(e)
            }
        });
        var E = /\S+/g
          , F = {};
        function G(a) {
            var b = F[a] = {};
            return n.each(a.match(E) || [], function(a, c) {
                b[c] = !0
            }),
            b
        }
        n.Callbacks = function(a) {
            a = "string" == typeof a ? F[a] || G(a) : n.extend({}, a);
            var b, c, d, e, f, g, h = [], i = !a.once && [], j = function(l) {
                for (b = a.memory && l,
                c = !0,
                g = e || 0,
                e = 0,
                f = h.length,
                d = !0; h && f > g; g++)
                    if (h[g].apply(l[0], l[1]) === !1 && a.stopOnFalse) {
                        b = !1;
                        break
                    }
                d = !1,
                h && (i ? i.length && j(i.shift()) : b ? h = [] : k.disable())
            }, k = {
                add: function() {
                    if (h) {
                        var c = h.length;
                        !function g(b) {
                            n.each(b, function(b, c) {
                                var d = n.type(c);
                                "function" === d ? a.unique && k.has(c) || h.push(c) : c && c.length && "string" !== d && g(c)
                            })
                        }(arguments),
                        d ? f = h.length : b && (e = c,
                        j(b))
                    }
                    return this
                },
                remove: function() {
                    return h && n.each(arguments, function(a, b) {
                        var c;
                        while ((c = n.inArray(b, h, c)) > -1)
                            h.splice(c, 1),
                            d && (f >= c && f--,
                            g >= c && g--)
                    }),
                    this
                },
                has: function(a) {
                    return a ? n.inArray(a, h) > -1 : !(!h || !h.length)
                },
                empty: function() {
                    return h = [],
                    f = 0,
                    this
                },
                disable: function() {
                    return h = i = b = void 0,
                    this
                },
                disabled: function() {
                    return !h
                },
                lock: function() {
                    return i = void 0,
                    b || k.disable(),
                    this
                },
                locked: function() {
                    return !i
                },
                fireWith: function(a, b) {
                    return !h || c && !i || (b = b || [],
                    b = [a, b.slice ? b.slice() : b],
                    d ? i.push(b) : j(b)),
                    this
                },
                fire: function() {
                    return k.fireWith(this, arguments),
                    this
                },
                fired: function() {
                    return !!c
                }
            };
            return k
        }
        ,
        n.extend({
            Deferred: function(a) {
                var b = [["resolve", "done", n.Callbacks("once memory"), "resolved"], ["reject", "fail", n.Callbacks("once memory"), "rejected"], ["notify", "progress", n.Callbacks("memory")]]
                  , c = "pending"
                  , d = {
                    state: function() {
                        return c
                    },
                    always: function() {
                        return e.done(arguments).fail(arguments),
                        this
                    },
                    then: function() {
                        var a = arguments;
                        return n.Deferred(function(c) {
                            n.each(b, function(b, f) {
                                var g = n.isFunction(a[b]) && a[b];
                                e[f[1]](function() {
                                    var a = g && g.apply(this, arguments);
                                    a && n.isFunction(a.promise) ? a.promise().done(c.resolve).fail(c.reject).progress(c.notify) : c[f[0] + "With"](this === d ? c.promise() : this, g ? [a] : arguments)
                                })
                            }),
                            a = null
                        }).promise()
                    },
                    promise: function(a) {
                        return null != a ? n.extend(a, d) : d
                    }
                }
                  , e = {};
                return d.pipe = d.then,
                n.each(b, function(a, f) {
                    var g = f[2]
                      , h = f[3];
                    d[f[1]] = g.add,
                    h && g.add(function() {
                        c = h
                    }, b[1 ^ a][2].disable, b[2][2].lock),
                    e[f[0]] = function() {
                        return e[f[0] + "With"](this === e ? d : this, arguments),
                        this
                    }
                    ,
                    e[f[0] + "With"] = g.fireWith
                }),
                d.promise(e),
                a && a.call(e, e),
                e
            },
            when: function(a) {
                var b = 0, c = d.call(arguments), e = c.length, f = 1 !== e || a && n.isFunction(a.promise) ? e : 0, g = 1 === f ? a : n.Deferred(), h = function(a, b, c) {
                    return function(e) {
                        b[a] = this,
                        c[a] = arguments.length > 1 ? d.call(arguments) : e,
                        c === i ? g.notifyWith(b, c) : --f || g.resolveWith(b, c)
                    }
                }, i, j, k;
                if (e > 1)
                    for (i = new Array(e),
                    j = new Array(e),
                    k = new Array(e); e > b; b++)
                        c[b] && n.isFunction(c[b].promise) ? c[b].promise().done(h(b, k, c)).fail(g.reject).progress(h(b, j, i)) : --f;
                return f || g.resolveWith(k, c),
                g.promise()
            }
        });
        var H;
        n.fn.ready = function(a) {
            return n.ready.promise().done(a),
            this
        }
        ,
        n.extend({
            isReady: !1,
            readyWait: 1,
            holdReady: function(a) {
                a ? n.readyWait++ : n.ready(!0)
            },
            ready: function(a) {
                (a === !0 ? --n.readyWait : n.isReady) || (n.isReady = !0,
                a !== !0 && --n.readyWait > 0 || (H.resolveWith(l, [n]),
                n.fn.triggerHandler && (n(l).triggerHandler("ready"),
                n(l).off("ready"))))
            }
        });
        function I() {
            l.removeEventListener("DOMContentLoaded", I, !1),
            a.removeEventListener("load", I, !1),
            n.ready()
        }
        n.ready.promise = function(b) {
            return H || (H = n.Deferred(),
            "complete" === l.readyState ? setTimeout(n.ready) : (l.addEventListener("DOMContentLoaded", I, !1),
            a.addEventListener("load", I, !1))),
            H.promise(b)
        }
        ,
        n.ready.promise();
        var J = n.access = function(a, b, c, d, e, f, g) {
            var h = 0
              , i = a.length
              , j = null == c;
            if ("object" === n.type(c)) {
                e = !0;
                for (h in c)
                    n.access(a, b, h, c[h], !0, f, g)
            } else if (void 0 !== d && (e = !0,
            n.isFunction(d) || (g = !0),
            j && (g ? (b.call(a, d),
            b = null) : (j = b,
            b = function(a, b, c) {
                return j.call(n(a), c)
            }
            )),
            b))
                for (; i > h; h++)
                    b(a[h], c, g ? d : d.call(a[h], h, b(a[h], c)));
            return e ? a : j ? b.call(a) : i ? b(a[0], c) : f
        }
        ;
        n.acceptData = function(a) {
            return 1 === a.nodeType || 9 === a.nodeType || !+a.nodeType
        }
        ;
        function K() {
            Object.defineProperty(this.cache = {}, 0, {
                get: function() {
                    return {}
                }
            }),
            this.expando = n.expando + K.uid++
        }
        K.uid = 1,
        K.accepts = n.acceptData,
        K.prototype = {
            key: function(a) {
                if (!K.accepts(a))
                    return 0;
                var b = {}
                  , c = a[this.expando];
                if (!c) {
                    c = K.uid++;
                    try {
                        b[this.expando] = {
                            value: c
                        },
                        Object.defineProperties(a, b)
                    } catch (d) {
                        b[this.expando] = c,
                        n.extend(a, b)
                    }
                }
                return this.cache[c] || (this.cache[c] = {}),
                c
            },
            set: function(a, b, c) {
                var d, e = this.key(a), f = this.cache[e];
                if ("string" == typeof b)
                    f[b] = c;
                else if (n.isEmptyObject(f))
                    n.extend(this.cache[e], b);
                else
                    for (d in b)
                        f[d] = b[d];
                return f
            },
            get: function(a, b) {
                var c = this.cache[this.key(a)];
                return void 0 === b ? c : c[b]
            },
            access: function(a, b, c) {
                var d;
                return void 0 === b || b && "string" == typeof b && void 0 === c ? (d = this.get(a, b),
                void 0 !== d ? d : this.get(a, n.camelCase(b))) : (this.set(a, b, c),
                void 0 !== c ? c : b)
            },
            remove: function(a, b) {
                var c, d, e, f = this.key(a), g = this.cache[f];
                if (void 0 === b)
                    this.cache[f] = {};
                else {
                    n.isArray(b) ? d = b.concat(b.map(n.camelCase)) : (e = n.camelCase(b),
                    b in g ? d = [b, e] : (d = e,
                    d = d in g ? [d] : d.match(E) || [])),
                    c = d.length;
                    while (c--)
                        delete g[d[c]]
                }
            },
            hasData: function(a) {
                return !n.isEmptyObject(this.cache[a[this.expando]] || {})
            },
            discard: function(a) {
                a[this.expando] && delete this.cache[a[this.expando]]
            }
        };
        var L = new K
          , M = new K
          , N = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/
          , O = /([A-Z])/g;
        function P(a, b, c) {
            var d;
            if (void 0 === c && 1 === a.nodeType)
                if (d = "data-" + b.replace(O, "-$1").toLowerCase(),
                c = a.getAttribute(d),
                "string" == typeof c) {
                    try {
                        c = "true" === c ? !0 : "false" === c ? !1 : "null" === c ? null : +c + "" === c ? +c : N.test(c) ? n.parseJSON(c) : c
                    } catch (e) {}
                    M.set(a, b, c)
                } else
                    c = void 0;
            return c
        }
        n.extend({
            hasData: function(a) {
                return M.hasData(a) || L.hasData(a)
            },
            data: function(a, b, c) {
                return M.access(a, b, c)
            },
            removeData: function(a, b) {
                M.remove(a, b)
            },
            _data: function(a, b, c) {
                return L.access(a, b, c)
            },
            _removeData: function(a, b) {
                L.remove(a, b)
            }
        }),
        n.fn.extend({
            data: function(a, b) {
                var c, d, e, f = this[0], g = f && f.attributes;
                if (void 0 === a) {
                    if (this.length && (e = M.get(f),
                    1 === f.nodeType && !L.get(f, "hasDataAttrs"))) {
                        c = g.length;
                        while (c--)
                            g[c] && (d = g[c].name,
                            0 === d.indexOf("data-") && (d = n.camelCase(d.slice(5)),
                            P(f, d, e[d])));
                        L.set(f, "hasDataAttrs", !0)
                    }
                    return e
                }
                return "object" == typeof a ? this.each(function() {
                    M.set(this, a)
                }) : J(this, function(b) {
                    var c, d = n.camelCase(a);
                    if (f && void 0 === b) {
                        if (c = M.get(f, a),
                        void 0 !== c)
                            return c;
                        if (c = M.get(f, d),
                        void 0 !== c)
                            return c;
                        if (c = P(f, d, void 0),
                        void 0 !== c)
                            return c
                    } else
                        this.each(function() {
                            var c = M.get(this, d);
                            M.set(this, d, b),
                            -1 !== a.indexOf("-") && void 0 !== c && M.set(this, a, b)
                        })
                }, null, b, arguments.length > 1, null, !0)
            },
            removeData: function(a) {
                return this.each(function() {
                    M.remove(this, a)
                })
            }
        }),
        n.extend({
            queue: function(a, b, c) {
                var d;
                return a ? (b = (b || "fx") + "queue",
                d = L.get(a, b),
                c && (!d || n.isArray(c) ? d = L.access(a, b, n.makeArray(c)) : d.push(c)),
                d || []) : void 0
            },
            dequeue: function(a, b) {
                b = b || "fx";
                var c = n.queue(a, b)
                  , d = c.length
                  , e = c.shift()
                  , f = n._queueHooks(a, b)
                  , g = function() {
                    n.dequeue(a, b)
                };
                "inprogress" === e && (e = c.shift(),
                d--),
                e && ("fx" === b && c.unshift("inprogress"),
                delete f.stop,
                e.call(a, g, f)),
                !d && f && f.empty.fire()
            },
            _queueHooks: function(a, b) {
                var c = b + "queueHooks";
                return L.get(a, c) || L.access(a, c, {
                    empty: n.Callbacks("once memory").add(function() {
                        L.remove(a, [b + "queue", c])
                    })
                })
            }
        }),
        n.fn.extend({
            queue: function(a, b) {
                var c = 2;
                return "string" != typeof a && (b = a,
                a = "fx",
                c--),
                arguments.length < c ? n.queue(this[0], a) : void 0 === b ? this : this.each(function() {
                    var c = n.queue(this, a, b);
                    n._queueHooks(this, a),
                    "fx" === a && "inprogress" !== c[0] && n.dequeue(this, a)
                })
            },
            dequeue: function(a) {
                return this.each(function() {
                    n.dequeue(this, a)
                })
            },
            clearQueue: function(a) {
                return this.queue(a || "fx", [])
            },
            promise: function(a, b) {
                var c, d = 1, e = n.Deferred(), f = this, g = this.length, h = function() {
                    --d || e.resolveWith(f, [f])
                };
                "string" != typeof a && (b = a,
                a = void 0),
                a = a || "fx";
                while (g--)
                    c = L.get(f[g], a + "queueHooks"),
                    c && c.empty && (d++,
                    c.empty.add(h));
                return h(),
                e.promise(b)
            }
        });
        var Q = /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source
          , R = ["Top", "Right", "Bottom", "Left"]
          , S = function(a, b) {
            return a = b || a,
            "none" === n.css(a, "display") || !n.contains(a.ownerDocument, a)
        }
          , T = /^(?:checkbox|radio)$/i;
        !function() {
            var a = l.createDocumentFragment()
              , b = a.appendChild(l.createElement("div"))
              , c = l.createElement("input");
            c.setAttribute("type", "radio"),
            c.setAttribute("checked", "checked"),
            c.setAttribute("name", "t"),
            b.appendChild(c),
            k.checkClone = b.cloneNode(!0).cloneNode(!0).lastChild.checked,
            b.innerHTML = "<textarea>x</textarea>",
            k.noCloneChecked = !!b.cloneNode(!0).lastChild.defaultValue
        }();
        var U = "undefined";
        k.focusinBubbles = "onfocusin"in a;
        var V = /^key/
          , W = /^(?:mouse|pointer|contextmenu)|click/
          , X = /^(?:focusinfocus|focusoutblur)$/
          , Y = /^([^.]*)(?:\.(.+)|)$/;
        function Z() {
            return !0
        }
        function $() {
            return !1
        }
        function _() {
            try {
                return l.activeElement
            } catch (a) {}
        }
        n.event = {
            global: {},
            add: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, o, p, q, r = L.get(a);
                if (r) {
                    c.handler && (f = c,
                    c = f.handler,
                    e = f.selector),
                    c.guid || (c.guid = n.guid++),
                    (i = r.events) || (i = r.events = {}),
                    (g = r.handle) || (g = r.handle = function(b) {
                        return typeof n !== U && n.event.triggered !== b.type ? n.event.dispatch.apply(a, arguments) : void 0
                    }
                    ),
                    b = (b || "").match(E) || [""],
                    j = b.length;
                    while (j--)
                        h = Y.exec(b[j]) || [],
                        o = q = h[1],
                        p = (h[2] || "").split(".").sort(),
                        o && (l = n.event.special[o] || {},
                        o = (e ? l.delegateType : l.bindType) || o,
                        l = n.event.special[o] || {},
                        k = n.extend({
                            type: o,
                            origType: q,
                            data: d,
                            handler: c,
                            guid: c.guid,
                            selector: e,
                            needsContext: e && n.expr.match.needsContext.test(e),
                            namespace: p.join(".")
                        }, f),
                        (m = i[o]) || (m = i[o] = [],
                        m.delegateCount = 0,
                        l.setup && l.setup.call(a, d, p, g) !== !1 || a.addEventListener && a.addEventListener(o, g, !1)),
                        l.add && (l.add.call(a, k),
                        k.handler.guid || (k.handler.guid = c.guid)),
                        e ? m.splice(m.delegateCount++, 0, k) : m.push(k),
                        n.event.global[o] = !0)
                }
            },
            remove: function(a, b, c, d, e) {
                var f, g, h, i, j, k, l, m, o, p, q, r = L.hasData(a) && L.get(a);
                if (r && (i = r.events)) {
                    b = (b || "").match(E) || [""],
                    j = b.length;
                    while (j--)
                        if (h = Y.exec(b[j]) || [],
                        o = q = h[1],
                        p = (h[2] || "").split(".").sort(),
                        o) {
                            l = n.event.special[o] || {},
                            o = (d ? l.delegateType : l.bindType) || o,
                            m = i[o] || [],
                            h = h[2] && new RegExp("(^|\\.)" + p.join("\\.(?:.*\\.|)") + "(\\.|$)"),
                            g = f = m.length;
                            while (f--)
                                k = m[f],
                                !e && q !== k.origType || c && c.guid !== k.guid || h && !h.test(k.namespace) || d && d !== k.selector && ("**" !== d || !k.selector) || (m.splice(f, 1),
                                k.selector && m.delegateCount--,
                                l.remove && l.remove.call(a, k));
                            g && !m.length && (l.teardown && l.teardown.call(a, p, r.handle) !== !1 || n.removeEvent(a, o, r.handle),
                            delete i[o])
                        } else
                            for (o in i)
                                n.event.remove(a, o + b[j], c, d, !0);
                    n.isEmptyObject(i) && (delete r.handle,
                    L.remove(a, "events"))
                }
            },
            trigger: function(b, c, d, e) {
                var f, g, h, i, k, m, o, p = [d || l], q = j.call(b, "type") ? b.type : b, r = j.call(b, "namespace") ? b.namespace.split(".") : [];
                if (g = h = d = d || l,
                3 !== d.nodeType && 8 !== d.nodeType && !X.test(q + n.event.triggered) && (q.indexOf(".") >= 0 && (r = q.split("."),
                q = r.shift(),
                r.sort()),
                k = q.indexOf(":") < 0 && "on" + q,
                b = b[n.expando] ? b : new n.Event(q,"object" == typeof b && b),
                b.isTrigger = e ? 2 : 3,
                b.namespace = r.join("."),
                b.namespace_re = b.namespace ? new RegExp("(^|\\.)" + r.join("\\.(?:.*\\.|)") + "(\\.|$)") : null,
                b.result = void 0,
                b.target || (b.target = d),
                c = null == c ? [b] : n.makeArray(c, [b]),
                o = n.event.special[q] || {},
                e || !o.trigger || o.trigger.apply(d, c) !== !1)) {
                    if (!e && !o.noBubble && !n.isWindow(d)) {
                        for (i = o.delegateType || q,
                        X.test(i + q) || (g = g.parentNode); g; g = g.parentNode)
                            p.push(g),
                            h = g;
                        h === (d.ownerDocument || l) && p.push(h.defaultView || h.parentWindow || a)
                    }
                    f = 0;
                    while ((g = p[f++]) && !b.isPropagationStopped())
                        b.type = f > 1 ? i : o.bindType || q,
                        m = (L.get(g, "events") || {})[b.type] && L.get(g, "handle"),
                        m && m.apply(g, c),
                        m = k && g[k],
                        m && m.apply && n.acceptData(g) && (b.result = m.apply(g, c),
                        b.result === !1 && b.preventDefault());
                    return b.type = q,
                    e || b.isDefaultPrevented() || o._default && o._default.apply(p.pop(), c) !== !1 || !n.acceptData(d) || k && n.isFunction(d[q]) && !n.isWindow(d) && (h = d[k],
                    h && (d[k] = null),
                    n.event.triggered = q,
                    d[q](),
                    n.event.triggered = void 0,
                    h && (d[k] = h)),
                    b.result
                }
            },
            dispatch: function(a) {
                a = n.event.fix(a);
                var b, c, e, f, g, h = [], i = d.call(arguments), j = (L.get(this, "events") || {})[a.type] || [], k = n.event.special[a.type] || {};
                if (i[0] = a,
                a.delegateTarget = this,
                !k.preDispatch || k.preDispatch.call(this, a) !== !1) {
                    h = n.event.handlers.call(this, a, j),
                    b = 0;
                    while ((f = h[b++]) && !a.isPropagationStopped()) {
                        a.currentTarget = f.elem,
                        c = 0;
                        while ((g = f.handlers[c++]) && !a.isImmediatePropagationStopped())
                            (!a.namespace_re || a.namespace_re.test(g.namespace)) && (a.handleObj = g,
                            a.data = g.data,
                            e = ((n.event.special[g.origType] || {}).handle || g.handler).apply(f.elem, i),
                            void 0 !== e && (a.result = e) === !1 && (a.preventDefault(),
                            a.stopPropagation()))
                    }
                    return k.postDispatch && k.postDispatch.call(this, a),
                    a.result
                }
            },
            handlers: function(a, b) {
                var c, d, e, f, g = [], h = b.delegateCount, i = a.target;
                if (h && i.nodeType && (!a.button || "click" !== a.type))
                    for (; i !== this; i = i.parentNode || this)
                        if (i.disabled !== !0 || "click" !== a.type) {
                            for (d = [],
                            c = 0; h > c; c++)
                                f = b[c],
                                e = f.selector + " ",
                                void 0 === d[e] && (d[e] = f.needsContext ? n(e, this).index(i) >= 0 : n.find(e, this, null, [i]).length),
                                d[e] && d.push(f);
                            d.length && g.push({
                                elem: i,
                                handlers: d
                            })
                        }
                return h < b.length && g.push({
                    elem: this,
                    handlers: b.slice(h)
                }),
                g
            },
            props: "altKey bubbles cancelable ctrlKey currentTarget eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),
            fixHooks: {},
            keyHooks: {
                props: "char charCode key keyCode".split(" "),
                filter: function(a, b) {
                    return null == a.which && (a.which = null != b.charCode ? b.charCode : b.keyCode),
                    a
                }
            },
            mouseHooks: {
                props: "button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),
                filter: function(a, b) {
                    var c, d, e, f = b.button;
                    return null == a.pageX && null != b.clientX && (c = a.target.ownerDocument || l,
                    d = c.documentElement,
                    e = c.body,
                    a.pageX = b.clientX + (d && d.scrollLeft || e && e.scrollLeft || 0) - (d && d.clientLeft || e && e.clientLeft || 0),
                    a.pageY = b.clientY + (d && d.scrollTop || e && e.scrollTop || 0) - (d && d.clientTop || e && e.clientTop || 0)),
                    a.which || void 0 === f || (a.which = 1 & f ? 1 : 2 & f ? 3 : 4 & f ? 2 : 0),
                    a
                }
            },
            fix: function(a) {
                if (a[n.expando])
                    return a;
                var b, c, d, e = a.type, f = a, g = this.fixHooks[e];
                g || (this.fixHooks[e] = g = W.test(e) ? this.mouseHooks : V.test(e) ? this.keyHooks : {}),
                d = g.props ? this.props.concat(g.props) : this.props,
                a = new n.Event(f),
                b = d.length;
                while (b--)
                    c = d[b],
                    a[c] = f[c];
                return a.target || (a.target = l),
                3 === a.target.nodeType && (a.target = a.target.parentNode),
                g.filter ? g.filter(a, f) : a
            },
            special: {
                load: {
                    noBubble: !0
                },
                focus: {
                    trigger: function() {
                        return this !== _() && this.focus ? (this.focus(),
                        !1) : void 0
                    },
                    delegateType: "focusin"
                },
                blur: {
                    trigger: function() {
                        return this === _() && this.blur ? (this.blur(),
                        !1) : void 0
                    },
                    delegateType: "focusout"
                },
                click: {
                    trigger: function() {
                        return "checkbox" === this.type && this.click && n.nodeName(this, "input") ? (this.click(),
                        !1) : void 0
                    },
                    _default: function(a) {
                        return n.nodeName(a.target, "a")
                    }
                },
                beforeunload: {
                    postDispatch: function(a) {
                        void 0 !== a.result && a.originalEvent && (a.originalEvent.returnValue = a.result)
                    }
                }
            },
            simulate: function(a, b, c, d) {
                var e = n.extend(new n.Event, c, {
                    type: a,
                    isSimulated: !0,
                    originalEvent: {}
                });
                d ? n.event.trigger(e, null, b) : n.event.dispatch.call(b, e),
                e.isDefaultPrevented() && c.preventDefault()
            }
        },
        n.removeEvent = function(a, b, c) {
            a.removeEventListener && a.removeEventListener(b, c, !1)
        }
        ,
        n.Event = function(a, b) {
            return this instanceof n.Event ? (a && a.type ? (this.originalEvent = a,
            this.type = a.type,
            this.isDefaultPrevented = a.defaultPrevented || void 0 === a.defaultPrevented && a.returnValue === !1 ? Z : $) : this.type = a,
            b && n.extend(this, b),
            this.timeStamp = a && a.timeStamp || n.now(),
            void (this[n.expando] = !0)) : new n.Event(a,b)
        }
        ,
        n.Event.prototype = {
            isDefaultPrevented: $,
            isPropagationStopped: $,
            isImmediatePropagationStopped: $,
            preventDefault: function() {
                var a = this.originalEvent;
                this.isDefaultPrevented = Z,
                a && a.preventDefault && a.preventDefault()
            },
            stopPropagation: function() {
                var a = this.originalEvent;
                this.isPropagationStopped = Z,
                a && a.stopPropagation && a.stopPropagation()
            },
            stopImmediatePropagation: function() {
                var a = this.originalEvent;
                this.isImmediatePropagationStopped = Z,
                a && a.stopImmediatePropagation && a.stopImmediatePropagation(),
                this.stopPropagation()
            }
        },
        n.each({
            mouseenter: "mouseover",
            mouseleave: "mouseout",
            pointerenter: "pointerover",
            pointerleave: "pointerout"
        }, function(a, b) {
            n.event.special[a] = {
                delegateType: b,
                bindType: b,
                handle: function(a) {
                    var c, d = this, e = a.relatedTarget, f = a.handleObj;
                    return (!e || e !== d && !n.contains(d, e)) && (a.type = f.origType,
                    c = f.handler.apply(this, arguments),
                    a.type = b),
                    c
                }
            }
        }),
        k.focusinBubbles || n.each({
            focus: "focusin",
            blur: "focusout"
        }, function(a, b) {
            var c = function(a) {
                n.event.simulate(b, a.target, n.event.fix(a), !0)
            };
            n.event.special[b] = {
                setup: function() {
                    var d = this.ownerDocument || this
                      , e = L.access(d, b);
                    e || d.addEventListener(a, c, !0),
                    L.access(d, b, (e || 0) + 1)
                },
                teardown: function() {
                    var d = this.ownerDocument || this
                      , e = L.access(d, b) - 1;
                    e ? L.access(d, b, e) : (d.removeEventListener(a, c, !0),
                    L.remove(d, b))
                }
            }
        }),
        n.fn.extend({
            on: function(a, b, c, d, e) {
                var f, g;
                if ("object" == typeof a) {
                    "string" != typeof b && (c = c || b,
                    b = void 0);
                    for (g in a)
                        this.on(g, b, c, a[g], e);
                    return this
                }
                if (null == c && null == d ? (d = b,
                c = b = void 0) : null == d && ("string" == typeof b ? (d = c,
                c = void 0) : (d = c,
                c = b,
                b = void 0)),
                d === !1)
                    d = $;
                else if (!d)
                    return this;
                return 1 === e && (f = d,
                d = function(a) {
                    return n().off(a),
                    f.apply(this, arguments)
                }
                ,
                d.guid = f.guid || (f.guid = n.guid++)),
                this.each(function() {
                    n.event.add(this, a, d, c, b)
                })
            },
            one: function(a, b, c, d) {
                return this.on(a, b, c, d, 1)
            },
            off: function(a, b, c) {
                var d, e;
                if (a && a.preventDefault && a.handleObj)
                    return d = a.handleObj,
                    n(a.delegateTarget).off(d.namespace ? d.origType + "." + d.namespace : d.origType, d.selector, d.handler),
                    this;
                if ("object" == typeof a) {
                    for (e in a)
                        this.off(e, b, a[e]);
                    return this
                }
                return (b === !1 || "function" == typeof b) && (c = b,
                b = void 0),
                c === !1 && (c = $),
                this.each(function() {
                    n.event.remove(this, a, c, b)
                })
            },
            trigger: function(a, b) {
                return this.each(function() {
                    n.event.trigger(a, b, this)
                })
            },
            triggerHandler: function(a, b) {
                var c = this[0];
                return c ? n.event.trigger(a, b, c, !0) : void 0
            }
        });
        var ab = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi
          , bb = /<([\w:]+)/
          , cb = /<|&#?\w+;/
          , db = /<(?:script|style|link)/i
          , eb = /checked\s*(?:[^=]|=\s*.checked.)/i
          , fb = /^$|\/(?:java|ecma)script/i
          , gb = /^true\/(.*)/
          , hb = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g
          , ib = {
            option: [1, "<select multiple='multiple'>", "</select>"],
            thead: [1, "<table>", "</table>"],
            col: [2, "<table><colgroup>", "</colgroup></table>"],
            tr: [2, "<table><tbody>", "</tbody></table>"],
            td: [3, "<table><tbody><tr>", "</tr></tbody></table>"],
            _default: [0, "", ""]
        };
        ib.optgroup = ib.option,
        ib.tbody = ib.tfoot = ib.colgroup = ib.caption = ib.thead,
        ib.th = ib.td;
        function jb(a, b) {
            return n.nodeName(a, "table") && n.nodeName(11 !== b.nodeType ? b : b.firstChild, "tr") ? a.getElementsByTagName("tbody")[0] || a.appendChild(a.ownerDocument.createElement("tbody")) : a
        }
        function kb(a) {
            return a.type = (null !== a.getAttribute("type")) + "/" + a.type,
            a
        }
        function lb(a) {
            var b = gb.exec(a.type);
            return b ? a.type = b[1] : a.removeAttribute("type"),
            a
        }
        function mb(a, b) {
            for (var c = 0, d = a.length; d > c; c++)
                L.set(a[c], "globalEval", !b || L.get(b[c], "globalEval"))
        }
        function nb(a, b) {
            var c, d, e, f, g, h, i, j;
            if (1 === b.nodeType) {
                if (L.hasData(a) && (f = L.access(a),
                g = L.set(b, f),
                j = f.events)) {
                    delete g.handle,
                    g.events = {};
                    for (e in j)
                        for (c = 0,
                        d = j[e].length; d > c; c++)
                            n.event.add(b, e, j[e][c])
                }
                M.hasData(a) && (h = M.access(a),
                i = n.extend({}, h),
                M.set(b, i))
            }
        }
        function ob(a, b) {
            var c = a.getElementsByTagName ? a.getElementsByTagName(b || "*") : a.querySelectorAll ? a.querySelectorAll(b || "*") : [];
            return void 0 === b || b && n.nodeName(a, b) ? n.merge([a], c) : c
        }
        function pb(a, b) {
            var c = b.nodeName.toLowerCase();
            "input" === c && T.test(a.type) ? b.checked = a.checked : ("input" === c || "textarea" === c) && (b.defaultValue = a.defaultValue)
        }
        n.extend({
            clone: function(a, b, c) {
                var d, e, f, g, h = a.cloneNode(!0), i = n.contains(a.ownerDocument, a);
                if (!(k.noCloneChecked || 1 !== a.nodeType && 11 !== a.nodeType || n.isXMLDoc(a)))
                    for (g = ob(h),
                    f = ob(a),
                    d = 0,
                    e = f.length; e > d; d++)
                        pb(f[d], g[d]);
                if (b)
                    if (c)
                        for (f = f || ob(a),
                        g = g || ob(h),
                        d = 0,
                        e = f.length; e > d; d++)
                            nb(f[d], g[d]);
                    else
                        nb(a, h);
                return g = ob(h, "script"),
                g.length > 0 && mb(g, !i && ob(a, "script")),
                h
            },
            buildFragment: function(a, b, c, d) {
                for (var e, f, g, h, i, j, k = b.createDocumentFragment(), l = [], m = 0, o = a.length; o > m; m++)
                    if (e = a[m],
                    e || 0 === e)
                        if ("object" === n.type(e))
                            n.merge(l, e.nodeType ? [e] : e);
                        else if (cb.test(e)) {
                            f = f || k.appendChild(b.createElement("div")),
                            g = (bb.exec(e) || ["", ""])[1].toLowerCase(),
                            h = ib[g] || ib._default,
                            f.innerHTML = h[1] + e.replace(ab, "<$1></$2>") + h[2],
                            j = h[0];
                            while (j--)
                                f = f.lastChild;
                            n.merge(l, f.childNodes),
                            f = k.firstChild,
                            f.textContent = ""
                        } else
                            l.push(b.createTextNode(e));
                k.textContent = "",
                m = 0;
                while (e = l[m++])
                    if ((!d || -1 === n.inArray(e, d)) && (i = n.contains(e.ownerDocument, e),
                    f = ob(k.appendChild(e), "script"),
                    i && mb(f),
                    c)) {
                        j = 0;
                        while (e = f[j++])
                            fb.test(e.type || "") && c.push(e)
                    }
                return k
            },
            cleanData: function(a) {
                for (var b, c, d, e, f = n.event.special, g = 0; void 0 !== (c = a[g]); g++) {
                    if (n.acceptData(c) && (e = c[L.expando],
                    e && (b = L.cache[e]))) {
                        if (b.events)
                            for (d in b.events)
                                f[d] ? n.event.remove(c, d) : n.removeEvent(c, d, b.handle);
                        L.cache[e] && delete L.cache[e]
                    }
                    delete M.cache[c[M.expando]]
                }
            }
        }),
        n.fn.extend({
            text: function(a) {
                return J(this, function(a) {
                    return void 0 === a ? n.text(this) : this.empty().each(function() {
                        (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) && (this.textContent = a)
                    })
                }, null, a, arguments.length)
            },
            append: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = jb(this, a);
                        b.appendChild(a)
                    }
                })
            },
            prepend: function() {
                return this.domManip(arguments, function(a) {
                    if (1 === this.nodeType || 11 === this.nodeType || 9 === this.nodeType) {
                        var b = jb(this, a);
                        b.insertBefore(a, b.firstChild)
                    }
                })
            },
            before: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this)
                })
            },
            after: function() {
                return this.domManip(arguments, function(a) {
                    this.parentNode && this.parentNode.insertBefore(a, this.nextSibling)
                })
            },
            remove: function(a, b) {
                for (var c, d = a ? n.filter(a, this) : this, e = 0; null != (c = d[e]); e++)
                    b || 1 !== c.nodeType || n.cleanData(ob(c)),
                    c.parentNode && (b && n.contains(c.ownerDocument, c) && mb(ob(c, "script")),
                    c.parentNode.removeChild(c));
                return this
            },
            empty: function() {
                for (var a, b = 0; null != (a = this[b]); b++)
                    1 === a.nodeType && (n.cleanData(ob(a, !1)),
                    a.textContent = "");
                return this
            },
            clone: function(a, b) {
                return a = null == a ? !1 : a,
                b = null == b ? a : b,
                this.map(function() {
                    return n.clone(this, a, b)
                })
            },
            html: function(a) {
                return J(this, function(a) {
                    var b = this[0] || {}
                      , c = 0
                      , d = this.length;
                    if (void 0 === a && 1 === b.nodeType)
                        return b.innerHTML;
                    if ("string" == typeof a && !db.test(a) && !ib[(bb.exec(a) || ["", ""])[1].toLowerCase()]) {
                        a = a.replace(ab, "<$1></$2>");
                        try {
                            for (; d > c; c++)
                                b = this[c] || {},
                                1 === b.nodeType && (n.cleanData(ob(b, !1)),
                                b.innerHTML = a);
                            b = 0
                        } catch (e) {}
                    }
                    b && this.empty().append(a)
                }, null, a, arguments.length)
            },
            replaceWith: function() {
                var a = arguments[0];
                return this.domManip(arguments, function(b) {
                    a = this.parentNode,
                    n.cleanData(ob(this)),
                    a && a.replaceChild(b, this)
                }),
                a && (a.length || a.nodeType) ? this : this.remove()
            },
            detach: function(a) {
                return this.remove(a, !0)
            },
            domManip: function(a, b) {
                a = e.apply([], a);
                var c, d, f, g, h, i, j = 0, l = this.length, m = this, o = l - 1, p = a[0], q = n.isFunction(p);
                if (q || l > 1 && "string" == typeof p && !k.checkClone && eb.test(p))
                    return this.each(function(c) {
                        var d = m.eq(c);
                        q && (a[0] = p.call(this, c, d.html())),
                        d.domManip(a, b)
                    });
                if (l && (c = n.buildFragment(a, this[0].ownerDocument, !1, this),
                d = c.firstChild,
                1 === c.childNodes.length && (c = d),
                d)) {
                    for (f = n.map(ob(c, "script"), kb),
                    g = f.length; l > j; j++)
                        h = c,
                        j !== o && (h = n.clone(h, !0, !0),
                        g && n.merge(f, ob(h, "script"))),
                        b.call(this[j], h, j);
                    if (g)
                        for (i = f[f.length - 1].ownerDocument,
                        n.map(f, lb),
                        j = 0; g > j; j++)
                            h = f[j],
                            fb.test(h.type || "") && !L.access(h, "globalEval") && n.contains(i, h) && (h.src ? n._evalUrl && n._evalUrl(h.src) : n.globalEval(h.textContent.replace(hb, "")))
                }
                return this
            }
        }),
        n.each({
            appendTo: "append",
            prependTo: "prepend",
            insertBefore: "before",
            insertAfter: "after",
            replaceAll: "replaceWith"
        }, function(a, b) {
            n.fn[a] = function(a) {
                for (var c, d = [], e = n(a), g = e.length - 1, h = 0; g >= h; h++)
                    c = h === g ? this : this.clone(!0),
                    n(e[h])[b](c),
                    f.apply(d, c.get());
                return this.pushStack(d)
            }
        });
        var qb, rb = {};
        function sb(b, c) {
            var d, e = n(c.createElement(b)).appendTo(c.body), f = a.getDefaultComputedStyle && (d = a.getDefaultComputedStyle(e[0])) ? d.display : n.css(e[0], "display");
            return e.detach(),
            f
        }
        function tb(a) {
            var b = l
              , c = rb[a];
            return c || (c = sb(a, b),
            "none" !== c && c || (qb = (qb || n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),
            b = qb[0].contentDocument,
            b.write(),
            b.close(),
            c = sb(a, b),
            qb.detach()),
            rb[a] = c),
            c
        }
        var ub = /^margin/
          , vb = new RegExp("^(" + Q + ")(?!px)[a-z%]+$","i")
          , wb = function(b) {
            return b.ownerDocument.defaultView.opener ? b.ownerDocument.defaultView.getComputedStyle(b, null) : a.getComputedStyle(b, null)
        };
        function xb(a, b, c) {
            var d, e, f, g, h = a.style;
            return c = c || wb(a),
            c && (g = c.getPropertyValue(b) || c[b]),
            c && ("" !== g || n.contains(a.ownerDocument, a) || (g = n.style(a, b)),
            vb.test(g) && ub.test(b) && (d = h.width,
            e = h.minWidth,
            f = h.maxWidth,
            h.minWidth = h.maxWidth = h.width = g,
            g = c.width,
            h.width = d,
            h.minWidth = e,
            h.maxWidth = f)),
            void 0 !== g ? g + "" : g
        }
        function yb(a, b) {
            return {
                get: function() {
                    return a() ? void delete this.get : (this.get = b).apply(this, arguments)
                }
            }
        }
        !function() {
            var b, c, d = l.documentElement, e = l.createElement("div"), f = l.createElement("div");
            if (f.style) {
                f.style.backgroundClip = "content-box",
                f.cloneNode(!0).style.backgroundClip = "",
                k.clearCloneStyle = "content-box" === f.style.backgroundClip,
                e.style.cssText = "border:0;width:0;height:0;top:0;left:-9999px;margin-top:1px;position:absolute",
                e.appendChild(f);
                function g() {
                    f.style.cssText = "-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;display:block;margin-top:1%;top:1%;border:1px;padding:1px;width:4px;position:absolute",
                    f.innerHTML = "",
                    d.appendChild(e);
                    var g = a.getComputedStyle(f, null);
                    b = "1%" !== g.top,
                    c = "4px" === g.width,
                    d.removeChild(e)
                }
                a.getComputedStyle && n.extend(k, {
                    pixelPosition: function() {
                        return g(),
                        b
                    },
                    boxSizingReliable: function() {
                        return null == c && g(),
                        c
                    },
                    reliableMarginRight: function() {
                        var b, c = f.appendChild(l.createElement("div"));
                        return c.style.cssText = f.style.cssText = "-webkit-box-sizing:content-box;-moz-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",
                        c.style.marginRight = c.style.width = "0",
                        f.style.width = "1px",
                        d.appendChild(e),
                        b = !parseFloat(a.getComputedStyle(c, null).marginRight),
                        d.removeChild(e),
                        f.removeChild(c),
                        b
                    }
                })
            }
        }(),
        n.swap = function(a, b, c, d) {
            var e, f, g = {};
            for (f in b)
                g[f] = a.style[f],
                a.style[f] = b[f];
            e = c.apply(a, d || []);
            for (f in b)
                a.style[f] = g[f];
            return e
        }
        ;
        var zb = /^(none|table(?!-c[ea]).+)/
          , Ab = new RegExp("^(" + Q + ")(.*)$","i")
          , Bb = new RegExp("^([+-])=(" + Q + ")","i")
          , Cb = {
            position: "absolute",
            visibility: "hidden",
            display: "block"
        }
          , Db = {
            letterSpacing: "0",
            fontWeight: "400"
        }
          , Eb = ["Webkit", "O", "Moz", "ms"];
        function Fb(a, b) {
            if (b in a)
                return b;
            var c = b[0].toUpperCase() + b.slice(1)
              , d = b
              , e = Eb.length;
            while (e--)
                if (b = Eb[e] + c,
                b in a)
                    return b;
            return d
        }
        function Gb(a, b, c) {
            var d = Ab.exec(b);
            return d ? Math.max(0, d[1] - (c || 0)) + (d[2] || "px") : b
        }
        function Hb(a, b, c, d, e) {
            for (var f = c === (d ? "border" : "content") ? 4 : "width" === b ? 1 : 0, g = 0; 4 > f; f += 2)
                "margin" === c && (g += n.css(a, c + R[f], !0, e)),
                d ? ("content" === c && (g -= n.css(a, "padding" + R[f], !0, e)),
                "margin" !== c && (g -= n.css(a, "border" + R[f] + "Width", !0, e))) : (g += n.css(a, "padding" + R[f], !0, e),
                "padding" !== c && (g += n.css(a, "border" + R[f] + "Width", !0, e)));
            return g
        }
        function Ib(a, b, c) {
            var d = !0
              , e = "width" === b ? a.offsetWidth : a.offsetHeight
              , f = wb(a)
              , g = "border-box" === n.css(a, "boxSizing", !1, f);
            if (0 >= e || null == e) {
                if (e = xb(a, b, f),
                (0 > e || null == e) && (e = a.style[b]),
                vb.test(e))
                    return e;
                d = g && (k.boxSizingReliable() || e === a.style[b]),
                e = parseFloat(e) || 0
            }
            return e + Hb(a, b, c || (g ? "border" : "content"), d, f) + "px"
        }
        function Jb(a, b) {
            for (var c, d, e, f = [], g = 0, h = a.length; h > g; g++)
                d = a[g],
                d.style && (f[g] = L.get(d, "olddisplay"),
                c = d.style.display,
                b ? (f[g] || "none" !== c || (d.style.display = ""),
                "" === d.style.display && S(d) && (f[g] = L.access(d, "olddisplay", tb(d.nodeName)))) : (e = S(d),
                "none" === c && e || L.set(d, "olddisplay", e ? c : n.css(d, "display"))));
            for (g = 0; h > g; g++)
                d = a[g],
                d.style && (b && "none" !== d.style.display && "" !== d.style.display || (d.style.display = b ? f[g] || "" : "none"));
            return a
        }
        n.extend({
            cssHooks: {
                opacity: {
                    get: function(a, b) {
                        if (b) {
                            var c = xb(a, "opacity");
                            return "" === c ? "1" : c
                        }
                    }
                }
            },
            cssNumber: {
                columnCount: !0,
                fillOpacity: !0,
                flexGrow: !0,
                flexShrink: !0,
                fontWeight: !0,
                lineHeight: !0,
                opacity: !0,
                order: !0,
                orphans: !0,
                widows: !0,
                zIndex: !0,
                zoom: !0
            },
            cssProps: {
                "float": "cssFloat"
            },
            style: function(a, b, c, d) {
                if (a && 3 !== a.nodeType && 8 !== a.nodeType && a.style) {
                    var e, f, g, h = n.camelCase(b), i = a.style;
                    return b = n.cssProps[h] || (n.cssProps[h] = Fb(i, h)),
                    g = n.cssHooks[b] || n.cssHooks[h],
                    void 0 === c ? g && "get"in g && void 0 !== (e = g.get(a, !1, d)) ? e : i[b] : (f = typeof c,
                    "string" === f && (e = Bb.exec(c)) && (c = (e[1] + 1) * e[2] + parseFloat(n.css(a, b)),
                    f = "number"),
                    null != c && c === c && ("number" !== f || n.cssNumber[h] || (c += "px"),
                    k.clearCloneStyle || "" !== c || 0 !== b.indexOf("background") || (i[b] = "inherit"),
                    g && "set"in g && void 0 === (c = g.set(a, c, d)) || (i[b] = c)),
                    void 0)
                }
            },
            css: function(a, b, c, d) {
                var e, f, g, h = n.camelCase(b);
                return b = n.cssProps[h] || (n.cssProps[h] = Fb(a.style, h)),
                g = n.cssHooks[b] || n.cssHooks[h],
                g && "get"in g && (e = g.get(a, !0, c)),
                void 0 === e && (e = xb(a, b, d)),
                "normal" === e && b in Db && (e = Db[b]),
                "" === c || c ? (f = parseFloat(e),
                c === !0 || n.isNumeric(f) ? f || 0 : e) : e
            }
        }),
        n.each(["height", "width"], function(a, b) {
            n.cssHooks[b] = {
                get: function(a, c, d) {
                    return c ? zb.test(n.css(a, "display")) && 0 === a.offsetWidth ? n.swap(a, Cb, function() {
                        return Ib(a, b, d)
                    }) : Ib(a, b, d) : void 0
                },
                set: function(a, c, d) {
                    var e = d && wb(a);
                    return Gb(a, c, d ? Hb(a, b, d, "border-box" === n.css(a, "boxSizing", !1, e), e) : 0)
                }
            }
        }),
        n.cssHooks.marginRight = yb(k.reliableMarginRight, function(a, b) {
            return b ? n.swap(a, {
                display: "inline-block"
            }, xb, [a, "marginRight"]) : void 0
        }),
        n.each({
            margin: "",
            padding: "",
            border: "Width"
        }, function(a, b) {
            n.cssHooks[a + b] = {
                expand: function(c) {
                    for (var d = 0, e = {}, f = "string" == typeof c ? c.split(" ") : [c]; 4 > d; d++)
                        e[a + R[d] + b] = f[d] || f[d - 2] || f[0];
                    return e
                }
            },
            ub.test(a) || (n.cssHooks[a + b].set = Gb)
        }),
        n.fn.extend({
            css: function(a, b) {
                return J(this, function(a, b, c) {
                    var d, e, f = {}, g = 0;
                    if (n.isArray(b)) {
                        for (d = wb(a),
                        e = b.length; e > g; g++)
                            f[b[g]] = n.css(a, b[g], !1, d);
                        return f
                    }
                    return void 0 !== c ? n.style(a, b, c) : n.css(a, b)
                }, a, b, arguments.length > 1)
            },
            show: function() {
                return Jb(this, !0)
            },
            hide: function() {
                return Jb(this)
            },
            toggle: function(a) {
                return "boolean" == typeof a ? a ? this.show() : this.hide() : this.each(function() {
                    S(this) ? n(this).show() : n(this).hide()
                })
            }
        });
        function Kb(a, b, c, d, e) {
            return new Kb.prototype.init(a,b,c,d,e)
        }
        n.Tween = Kb,
        Kb.prototype = {
            constructor: Kb,
            init: function(a, b, c, d, e, f) {
                this.elem = a,
                this.prop = c,
                this.easing = e || "swing",
                this.options = b,
                this.start = this.now = this.cur(),
                this.end = d,
                this.unit = f || (n.cssNumber[c] ? "" : "px")
            },
            cur: function() {
                var a = Kb.propHooks[this.prop];
                return a && a.get ? a.get(this) : Kb.propHooks._default.get(this)
            },
            run: function(a) {
                var b, c = Kb.propHooks[this.prop];
                return this.pos = b = this.options.duration ? n.easing[this.easing](a, this.options.duration * a, 0, 1, this.options.duration) : a,
                this.now = (this.end - this.start) * b + this.start,
                this.options.step && this.options.step.call(this.elem, this.now, this),
                c && c.set ? c.set(this) : Kb.propHooks._default.set(this),
                this
            }
        },
        Kb.prototype.init.prototype = Kb.prototype,
        Kb.propHooks = {
            _default: {
                get: function(a) {
                    var b;
                    return null == a.elem[a.prop] || a.elem.style && null != a.elem.style[a.prop] ? (b = n.css(a.elem, a.prop, ""),
                    b && "auto" !== b ? b : 0) : a.elem[a.prop]
                },
                set: function(a) {
                    n.fx.step[a.prop] ? n.fx.step[a.prop](a) : a.elem.style && (null != a.elem.style[n.cssProps[a.prop]] || n.cssHooks[a.prop]) ? n.style(a.elem, a.prop, a.now + a.unit) : a.elem[a.prop] = a.now
                }
            }
        },
        Kb.propHooks.scrollTop = Kb.propHooks.scrollLeft = {
            set: function(a) {
                a.elem.nodeType && a.elem.parentNode && (a.elem[a.prop] = a.now)
            }
        },
        n.easing = {
            linear: function(a) {
                return a
            },
            swing: function(a) {
                return .5 - Math.cos(a * Math.PI) / 2
            }
        },
        n.fx = Kb.prototype.init,
        n.fx.step = {};
        var Lb, Mb, Nb = /^(?:toggle|show|hide)$/, Ob = new RegExp("^(?:([+-])=|)(" + Q + ")([a-z%]*)$","i"), Pb = /queueHooks$/, Qb = [Vb], Rb = {
            "*": [function(a, b) {
                var c = this.createTween(a, b)
                  , d = c.cur()
                  , e = Ob.exec(b)
                  , f = e && e[3] || (n.cssNumber[a] ? "" : "px")
                  , g = (n.cssNumber[a] || "px" !== f && +d) && Ob.exec(n.css(c.elem, a))
                  , h = 1
                  , i = 20;
                if (g && g[3] !== f) {
                    f = f || g[3],
                    e = e || [],
                    g = +d || 1;
                    do
                        h = h || ".5",
                        g /= h,
                        n.style(c.elem, a, g + f);
                    while (h !== (h = c.cur() / d) && 1 !== h && --i)
                }
                return e && (g = c.start = +g || +d || 0,
                c.unit = f,
                c.end = e[1] ? g + (e[1] + 1) * e[2] : +e[2]),
                c
            }
            ]
        };
        function Sb() {
            return setTimeout(function() {
                Lb = void 0
            }),
            Lb = n.now()
        }
        function Tb(a, b) {
            var c, d = 0, e = {
                height: a
            };
            for (b = b ? 1 : 0; 4 > d; d += 2 - b)
                c = R[d],
                e["margin" + c] = e["padding" + c] = a;
            return b && (e.opacity = e.width = a),
            e
        }
        function Ub(a, b, c) {
            for (var d, e = (Rb[b] || []).concat(Rb["*"]), f = 0, g = e.length; g > f; f++)
                if (d = e[f].call(c, b, a))
                    return d
        }
        function Vb(a, b, c) {
            var d, e, f, g, h, i, j, k, l = this, m = {}, o = a.style, p = a.nodeType && S(a), q = L.get(a, "fxshow");
            c.queue || (h = n._queueHooks(a, "fx"),
            null == h.unqueued && (h.unqueued = 0,
            i = h.empty.fire,
            h.empty.fire = function() {
                h.unqueued || i()
            }
            ),
            h.unqueued++,
            l.always(function() {
                l.always(function() {
                    h.unqueued--,
                    n.queue(a, "fx").length || h.empty.fire()
                })
            })),
            1 === a.nodeType && ("height"in b || "width"in b) && (c.overflow = [o.overflow, o.overflowX, o.overflowY],
            j = n.css(a, "display"),
            k = "none" === j ? L.get(a, "olddisplay") || tb(a.nodeName) : j,
            "inline" === k && "none" === n.css(a, "float") && (o.display = "inline-block")),
            c.overflow && (o.overflow = "hidden",
            l.always(function() {
                o.overflow = c.overflow[0],
                o.overflowX = c.overflow[1],
                o.overflowY = c.overflow[2]
            }));
            for (d in b)
                if (e = b[d],
                Nb.exec(e)) {
                    if (delete b[d],
                    f = f || "toggle" === e,
                    e === (p ? "hide" : "show")) {
                        if ("show" !== e || !q || void 0 === q[d])
                            continue;
                        p = !0
                    }
                    m[d] = q && q[d] || n.style(a, d)
                } else
                    j = void 0;
            if (n.isEmptyObject(m))
                "inline" === ("none" === j ? tb(a.nodeName) : j) && (o.display = j);
            else {
                q ? "hidden"in q && (p = q.hidden) : q = L.access(a, "fxshow", {}),
                f && (q.hidden = !p),
                p ? n(a).show() : l.done(function() {
                    n(a).hide()
                }),
                l.done(function() {
                    var b;
                    L.remove(a, "fxshow");
                    for (b in m)
                        n.style(a, b, m[b])
                });
                for (d in m)
                    g = Ub(p ? q[d] : 0, d, l),
                    d in q || (q[d] = g.start,
                    p && (g.end = g.start,
                    g.start = "width" === d || "height" === d ? 1 : 0))
            }
        }
        function Wb(a, b) {
            var c, d, e, f, g;
            for (c in a)
                if (d = n.camelCase(c),
                e = b[d],
                f = a[c],
                n.isArray(f) && (e = f[1],
                f = a[c] = f[0]),
                c !== d && (a[d] = f,
                delete a[c]),
                g = n.cssHooks[d],
                g && "expand"in g) {
                    f = g.expand(f),
                    delete a[d];
                    for (c in f)
                        c in a || (a[c] = f[c],
                        b[c] = e)
                } else
                    b[d] = e
        }
        function Xb(a, b, c) {
            var d, e, f = 0, g = Qb.length, h = n.Deferred().always(function() {
                delete i.elem
            }), i = function() {
                if (e)
                    return !1;
                for (var b = Lb || Sb(), c = Math.max(0, j.startTime + j.duration - b), d = c / j.duration || 0, f = 1 - d, g = 0, i = j.tweens.length; i > g; g++)
                    j.tweens[g].run(f);
                return h.notifyWith(a, [j, f, c]),
                1 > f && i ? c : (h.resolveWith(a, [j]),
                !1)
            }, j = h.promise({
                elem: a,
                props: n.extend({}, b),
                opts: n.extend(!0, {
                    specialEasing: {}
                }, c),
                originalProperties: b,
                originalOptions: c,
                startTime: Lb || Sb(),
                duration: c.duration,
                tweens: [],
                createTween: function(b, c) {
                    var d = n.Tween(a, j.opts, b, c, j.opts.specialEasing[b] || j.opts.easing);
                    return j.tweens.push(d),
                    d
                },
                stop: function(b) {
                    var c = 0
                      , d = b ? j.tweens.length : 0;
                    if (e)
                        return this;
                    for (e = !0; d > c; c++)
                        j.tweens[c].run(1);
                    return b ? h.resolveWith(a, [j, b]) : h.rejectWith(a, [j, b]),
                    this
                }
            }), k = j.props;
            for (Wb(k, j.opts.specialEasing); g > f; f++)
                if (d = Qb[f].call(j, a, k, j.opts))
                    return d;
            return n.map(k, Ub, j),
            n.isFunction(j.opts.start) && j.opts.start.call(a, j),
            n.fx.timer(n.extend(i, {
                elem: a,
                anim: j,
                queue: j.opts.queue
            })),
            j.progress(j.opts.progress).done(j.opts.done, j.opts.complete).fail(j.opts.fail).always(j.opts.always)
        }
        n.Animation = n.extend(Xb, {
            tweener: function(a, b) {
                n.isFunction(a) ? (b = a,
                a = ["*"]) : a = a.split(" ");
                for (var c, d = 0, e = a.length; e > d; d++)
                    c = a[d],
                    Rb[c] = Rb[c] || [],
                    Rb[c].unshift(b)
            },
            prefilter: function(a, b) {
                b ? Qb.unshift(a) : Qb.push(a)
            }
        }),
        n.speed = function(a, b, c) {
            var d = a && "object" == typeof a ? n.extend({}, a) : {
                complete: c || !c && b || n.isFunction(a) && a,
                duration: a,
                easing: c && b || b && !n.isFunction(b) && b
            };
            return d.duration = n.fx.off ? 0 : "number" == typeof d.duration ? d.duration : d.duration in n.fx.speeds ? n.fx.speeds[d.duration] : n.fx.speeds._default,
            (null == d.queue || d.queue === !0) && (d.queue = "fx"),
            d.old = d.complete,
            d.complete = function() {
                n.isFunction(d.old) && d.old.call(this),
                d.queue && n.dequeue(this, d.queue)
            }
            ,
            d
        }
        ,
        n.fn.extend({
            fadeTo: function(a, b, c, d) {
                return this.filter(S).css("opacity", 0).show().end().animate({
                    opacity: b
                }, a, c, d)
            },
            animate: function(a, b, c, d) {
                var e = n.isEmptyObject(a)
                  , f = n.speed(b, c, d)
                  , g = function() {
                    var b = Xb(this, n.extend({}, a), f);
                    (e || L.get(this, "finish")) && b.stop(!0)
                };
                return g.finish = g,
                e || f.queue === !1 ? this.each(g) : this.queue(f.queue, g)
            },
            stop: function(a, b, c) {
                var d = function(a) {
                    var b = a.stop;
                    delete a.stop,
                    b(c)
                };
                return "string" != typeof a && (c = b,
                b = a,
                a = void 0),
                b && a !== !1 && this.queue(a || "fx", []),
                this.each(function() {
                    var b = !0
                      , e = null != a && a + "queueHooks"
                      , f = n.timers
                      , g = L.get(this);
                    if (e)
                        g[e] && g[e].stop && d(g[e]);
                    else
                        for (e in g)
                            g[e] && g[e].stop && Pb.test(e) && d(g[e]);
                    for (e = f.length; e--; )
                        f[e].elem !== this || null != a && f[e].queue !== a || (f[e].anim.stop(c),
                        b = !1,
                        f.splice(e, 1));
                    (b || !c) && n.dequeue(this, a)
                })
            },
            finish: function(a) {
                return a !== !1 && (a = a || "fx"),
                this.each(function() {
                    var b, c = L.get(this), d = c[a + "queue"], e = c[a + "queueHooks"], f = n.timers, g = d ? d.length : 0;
                    for (c.finish = !0,
                    n.queue(this, a, []),
                    e && e.stop && e.stop.call(this, !0),
                    b = f.length; b--; )
                        f[b].elem === this && f[b].queue === a && (f[b].anim.stop(!0),
                        f.splice(b, 1));
                    for (b = 0; g > b; b++)
                        d[b] && d[b].finish && d[b].finish.call(this);
                    delete c.finish
                })
            }
        }),
        n.each(["toggle", "show", "hide"], function(a, b) {
            var c = n.fn[b];
            n.fn[b] = function(a, d, e) {
                return null == a || "boolean" == typeof a ? c.apply(this, arguments) : this.animate(Tb(b, !0), a, d, e)
            }
        }),
        n.each({
            slideDown: Tb("show"),
            slideUp: Tb("hide"),
            slideToggle: Tb("toggle"),
            fadeIn: {
                opacity: "show"
            },
            fadeOut: {
                opacity: "hide"
            },
            fadeToggle: {
                opacity: "toggle"
            }
        }, function(a, b) {
            n.fn[a] = function(a, c, d) {
                return this.animate(b, a, c, d)
            }
        }),
        n.timers = [],
        n.fx.tick = function() {
            var a, b = 0, c = n.timers;
            for (Lb = n.now(); b < c.length; b++)
                a = c[b],
                a() || c[b] !== a || c.splice(b--, 1);
            c.length || n.fx.stop(),
            Lb = void 0
        }
        ,
        n.fx.timer = function(a) {
            n.timers.push(a),
            a() ? n.fx.start() : n.timers.pop()
        }
        ,
        n.fx.interval = 13,
        n.fx.start = function() {
            Mb || (Mb = setInterval(n.fx.tick, n.fx.interval))
        }
        ,
        n.fx.stop = function() {
            clearInterval(Mb),
            Mb = null
        }
        ,
        n.fx.speeds = {
            slow: 600,
            fast: 200,
            _default: 400
        },
        n.fn.delay = function(a, b) {
            return a = n.fx ? n.fx.speeds[a] || a : a,
            b = b || "fx",
            this.queue(b, function(b, c) {
                var d = setTimeout(b, a);
                c.stop = function() {
                    clearTimeout(d)
                }
            })
        }
        ,
        function() {
            var a = l.createElement("input")
              , b = l.createElement("select")
              , c = b.appendChild(l.createElement("option"));
            a.type = "checkbox",
            k.checkOn = "" !== a.value,
            k.optSelected = c.selected,
            b.disabled = !0,
            k.optDisabled = !c.disabled,
            a = l.createElement("input"),
            a.value = "t",
            a.type = "radio",
            k.radioValue = "t" === a.value
        }();
        var Yb, Zb, $b = n.expr.attrHandle;
        n.fn.extend({
            attr: function(a, b) {
                return J(this, n.attr, a, b, arguments.length > 1)
            },
            removeAttr: function(a) {
                return this.each(function() {
                    n.removeAttr(this, a)
                })
            }
        }),
        n.extend({
            attr: function(a, b, c) {
                var d, e, f = a.nodeType;
                if (a && 3 !== f && 8 !== f && 2 !== f)
                    return typeof a.getAttribute === U ? n.prop(a, b, c) : (1 === f && n.isXMLDoc(a) || (b = b.toLowerCase(),
                    d = n.attrHooks[b] || (n.expr.match.bool.test(b) ? Zb : Yb)),
                    void 0 === c ? d && "get"in d && null !== (e = d.get(a, b)) ? e : (e = n.find.attr(a, b),
                    null == e ? void 0 : e) : null !== c ? d && "set"in d && void 0 !== (e = d.set(a, c, b)) ? e : (a.setAttribute(b, c + ""),
                    c) : void n.removeAttr(a, b))
            },
            removeAttr: function(a, b) {
                var c, d, e = 0, f = b && b.match(E);
                if (f && 1 === a.nodeType)
                    while (c = f[e++])
                        d = n.propFix[c] || c,
                        n.expr.match.bool.test(c) && (a[d] = !1),
                        a.removeAttribute(c)
            },
            attrHooks: {
                type: {
                    set: function(a, b) {
                        if (!k.radioValue && "radio" === b && n.nodeName(a, "input")) {
                            var c = a.value;
                            return a.setAttribute("type", b),
                            c && (a.value = c),
                            b
                        }
                    }
                }
            }
        }),
        Zb = {
            set: function(a, b, c) {
                return b === !1 ? n.removeAttr(a, c) : a.setAttribute(c, c),
                c
            }
        },
        n.each(n.expr.match.bool.source.match(/\w+/g), function(a, b) {
            var c = $b[b] || n.find.attr;
            $b[b] = function(a, b, d) {
                var e, f;
                return d || (f = $b[b],
                $b[b] = e,
                e = null != c(a, b, d) ? b.toLowerCase() : null,
                $b[b] = f),
                e
            }
        });
        var _b = /^(?:input|select|textarea|button)$/i;
        n.fn.extend({
            prop: function(a, b) {
                return J(this, n.prop, a, b, arguments.length > 1)
            },
            removeProp: function(a) {
                return this.each(function() {
                    delete this[n.propFix[a] || a]
                })
            }
        }),
        n.extend({
            propFix: {
                "for": "htmlFor",
                "class": "className"
            },
            prop: function(a, b, c) {
                var d, e, f, g = a.nodeType;
                if (a && 3 !== g && 8 !== g && 2 !== g)
                    return f = 1 !== g || !n.isXMLDoc(a),
                    f && (b = n.propFix[b] || b,
                    e = n.propHooks[b]),
                    void 0 !== c ? e && "set"in e && void 0 !== (d = e.set(a, c, b)) ? d : a[b] = c : e && "get"in e && null !== (d = e.get(a, b)) ? d : a[b]
            },
            propHooks: {
                tabIndex: {
                    get: function(a) {
                        return a.hasAttribute("tabindex") || _b.test(a.nodeName) || a.href ? a.tabIndex : -1
                    }
                }
            }
        }),
        k.optSelected || (n.propHooks.selected = {
            get: function(a) {
                var b = a.parentNode;
                return b && b.parentNode && b.parentNode.selectedIndex,
                null
            }
        }),
        n.each(["tabIndex", "readOnly", "maxLength", "cellSpacing", "cellPadding", "rowSpan", "colSpan", "useMap", "frameBorder", "contentEditable"], function() {
            n.propFix[this.toLowerCase()] = this
        });
        var ac = /[\t\r\n\f]/g;
        n.fn.extend({
            addClass: function(a) {
                var b, c, d, e, f, g, h = "string" == typeof a && a, i = 0, j = this.length;
                if (n.isFunction(a))
                    return this.each(function(b) {
                        n(this).addClass(a.call(this, b, this.className))
                    });
                if (h)
                    for (b = (a || "").match(E) || []; j > i; i++)
                        if (c = this[i],
                        d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : " ")) {
                            f = 0;
                            while (e = b[f++])
                                d.indexOf(" " + e + " ") < 0 && (d += e + " ");
                            g = n.trim(d),
                            c.className !== g && (c.className = g)
                        }
                return this
            },
            removeClass: function(a) {
                var b, c, d, e, f, g, h = 0 === arguments.length || "string" == typeof a && a, i = 0, j = this.length;
                if (n.isFunction(a))
                    return this.each(function(b) {
                        n(this).removeClass(a.call(this, b, this.className))
                    });
                if (h)
                    for (b = (a || "").match(E) || []; j > i; i++)
                        if (c = this[i],
                        d = 1 === c.nodeType && (c.className ? (" " + c.className + " ").replace(ac, " ") : "")) {
                            f = 0;
                            while (e = b[f++])
                                while (d.indexOf(" " + e + " ") >= 0)
                                    d = d.replace(" " + e + " ", " ");
                            g = a ? n.trim(d) : "",
                            c.className !== g && (c.className = g)
                        }
                return this
            },
            toggleClass: function(a, b) {
                var c = typeof a;
                return "boolean" == typeof b && "string" === c ? b ? this.addClass(a) : this.removeClass(a) : this.each(n.isFunction(a) ? function(c) {
                    n(this).toggleClass(a.call(this, c, this.className, b), b)
                }
                : function() {
                    if ("string" === c) {
                        var b, d = 0, e = n(this), f = a.match(E) || [];
                        while (b = f[d++])
                            e.hasClass(b) ? e.removeClass(b) : e.addClass(b)
                    } else
                        (c === U || "boolean" === c) && (this.className && L.set(this, "__className__", this.className),
                        this.className = this.className || a === !1 ? "" : L.get(this, "__className__") || "")
                }
                )
            },
            hasClass: function(a) {
                for (var b = " " + a + " ", c = 0, d = this.length; d > c; c++)
                    if (1 === this[c].nodeType && (" " + this[c].className + " ").replace(ac, " ").indexOf(b) >= 0)
                        return !0;
                return !1
            }
        });
        var bc = /\r/g;
        n.fn.extend({
            val: function(a) {
                var b, c, d, e = this[0];
                {
                    if (arguments.length)
                        return d = n.isFunction(a),
                        this.each(function(c) {
                            var e;
                            1 === this.nodeType && (e = d ? a.call(this, c, n(this).val()) : a,
                            null == e ? e = "" : "number" == typeof e ? e += "" : n.isArray(e) && (e = n.map(e, function(a) {
                                return null == a ? "" : a + ""
                            })),
                            b = n.valHooks[this.type] || n.valHooks[this.nodeName.toLowerCase()],
                            b && "set"in b && void 0 !== b.set(this, e, "value") || (this.value = e))
                        });
                    if (e)
                        return b = n.valHooks[e.type] || n.valHooks[e.nodeName.toLowerCase()],
                        b && "get"in b && void 0 !== (c = b.get(e, "value")) ? c : (c = e.value,
                        "string" == typeof c ? c.replace(bc, "") : null == c ? "" : c)
                }
            }
        }),
        n.extend({
            valHooks: {
                option: {
                    get: function(a) {
                        var b = n.find.attr(a, "value");
                        return null != b ? b : n.trim(n.text(a))
                    }
                },
                select: {
                    get: function(a) {
                        for (var b, c, d = a.options, e = a.selectedIndex, f = "select-one" === a.type || 0 > e, g = f ? null : [], h = f ? e + 1 : d.length, i = 0 > e ? h : f ? e : 0; h > i; i++)
                            if (c = d[i],
                            !(!c.selected && i !== e || (k.optDisabled ? c.disabled : null !== c.getAttribute("disabled")) || c.parentNode.disabled && n.nodeName(c.parentNode, "optgroup"))) {
                                if (b = n(c).val(),
                                f)
                                    return b;
                                g.push(b)
                            }
                        return g
                    },
                    set: function(a, b) {
                        var c, d, e = a.options, f = n.makeArray(b), g = e.length;
                        while (g--)
                            d = e[g],
                            (d.selected = n.inArray(d.value, f) >= 0) && (c = !0);
                        return c || (a.selectedIndex = -1),
                        f
                    }
                }
            }
        }),
        n.each(["radio", "checkbox"], function() {
            n.valHooks[this] = {
                set: function(a, b) {
                    return n.isArray(b) ? a.checked = n.inArray(n(a).val(), b) >= 0 : void 0
                }
            },
            k.checkOn || (n.valHooks[this].get = function(a) {
                return null === a.getAttribute("value") ? "on" : a.value
            }
            )
        }),
        n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "), function(a, b) {
            n.fn[b] = function(a, c) {
                return arguments.length > 0 ? this.on(b, null, a, c) : this.trigger(b)
            }
        }),
        n.fn.extend({
            hover: function(a, b) {
                return this.mouseenter(a).mouseleave(b || a)
            },
            bind: function(a, b, c) {
                return this.on(a, null, b, c)
            },
            unbind: function(a, b) {
                return this.off(a, null, b)
            },
            delegate: function(a, b, c, d) {
                return this.on(b, a, c, d)
            },
            undelegate: function(a, b, c) {
                return 1 === arguments.length ? this.off(a, "**") : this.off(b, a || "**", c)
            }
        });
        var cc = n.now()
          , dc = /\?/;
        n.parseJSON = function(a) {
            return JSON.parse(a + "")
        }
        ,
        n.parseXML = function(a) {
            var b, c;
            if (!a || "string" != typeof a)
                return null;
            try {
                c = new DOMParser,
                b = c.parseFromString(a, "text/xml")
            } catch (d) {
                b = void 0
            }
            return (!b || b.getElementsByTagName("parsererror").length) && n.error("Invalid XML: " + a),
            b
        }
        ;
        var ec = /#.*$/
          , fc = /([?&])_=[^&]*/
          , gc = /^(.*?):[ \t]*([^\r\n]*)$/gm
          , hc = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/
          , ic = /^(?:GET|HEAD)$/
          , jc = /^\/\//
          , kc = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/
          , lc = {}
          , mc = {}
          , nc = "*/".concat("*")
          , oc = a.location.href
          , pc = kc.exec(oc.toLowerCase()) || [];
        function qc(a) {
            return function(b, c) {
                "string" != typeof b && (c = b,
                b = "*");
                var d, e = 0, f = b.toLowerCase().match(E) || [];
                if (n.isFunction(c))
                    while (d = f[e++])
                        "+" === d[0] ? (d = d.slice(1) || "*",
                        (a[d] = a[d] || []).unshift(c)) : (a[d] = a[d] || []).push(c)
            }
        }
        function rc(a, b, c, d) {
            var e = {}
              , f = a === mc;
            function g(h) {
                var i;
                return e[h] = !0,
                n.each(a[h] || [], function(a, h) {
                    var j = h(b, c, d);
                    return "string" != typeof j || f || e[j] ? f ? !(i = j) : void 0 : (b.dataTypes.unshift(j),
                    g(j),
                    !1)
                }),
                i
            }
            return g(b.dataTypes[0]) || !e["*"] && g("*")
        }
        function sc(a, b) {
            var c, d, e = n.ajaxSettings.flatOptions || {};
            for (c in b)
                void 0 !== b[c] && ((e[c] ? a : d || (d = {}))[c] = b[c]);
            return d && n.extend(!0, a, d),
            a
        }
        function tc(a, b, c) {
            var d, e, f, g, h = a.contents, i = a.dataTypes;
            while ("*" === i[0])
                i.shift(),
                void 0 === d && (d = a.mimeType || b.getResponseHeader("Content-Type"));
            if (d)
                for (e in h)
                    if (h[e] && h[e].test(d)) {
                        i.unshift(e);
                        break
                    }
            if (i[0]in c)
                f = i[0];
            else {
                for (e in c) {
                    if (!i[0] || a.converters[e + " " + i[0]]) {
                        f = e;
                        break
                    }
                    g || (g = e)
                }
                f = f || g
            }
            return f ? (f !== i[0] && i.unshift(f),
            c[f]) : void 0
        }
        function uc(a, b, c, d) {
            var e, f, g, h, i, j = {}, k = a.dataTypes.slice();
            if (k[1])
                for (g in a.converters)
                    j[g.toLowerCase()] = a.converters[g];
            f = k.shift();
            while (f)
                if (a.responseFields[f] && (c[a.responseFields[f]] = b),
                !i && d && a.dataFilter && (b = a.dataFilter(b, a.dataType)),
                i = f,
                f = k.shift())
                    if ("*" === f)
                        f = i;
                    else if ("*" !== i && i !== f) {
                        if (g = j[i + " " + f] || j["* " + f],
                        !g)
                            for (e in j)
                                if (h = e.split(" "),
                                h[1] === f && (g = j[i + " " + h[0]] || j["* " + h[0]])) {
                                    g === !0 ? g = j[e] : j[e] !== !0 && (f = h[0],
                                    k.unshift(h[1]));
                                    break
                                }
                        if (g !== !0)
                            if (g && a["throws"])
                                b = g(b);
                            else
                                try {
                                    b = g(b)
                                } catch (l) {
                                    return {
                                        state: "parsererror",
                                        error: g ? l : "No conversion from " + i + " to " + f
                                    }
                                }
                    }
            return {
                state: "success",
                data: b
            }
        }
        n.extend({
            active: 0,
            lastModified: {},
            etag: {},
            ajaxSettings: {
                url: oc,
                type: "GET",
                isLocal: hc.test(pc[1]),
                global: !0,
                processData: !0,
                async: !0,
                contentType: "application/x-www-form-urlencoded; charset=UTF-8",
                accepts: {
                    "*": nc,
                    text: "text/plain",
                    html: "text/html",
                    xml: "application/xml, text/xml",
                    json: "application/json, text/javascript"
                },
                contents: {
                    xml: /xml/,
                    html: /html/,
                    json: /json/
                },
                responseFields: {
                    xml: "responseXML",
                    text: "responseText",
                    json: "responseJSON"
                },
                converters: {
                    "* text": String,
                    "text html": !0,
                    "text json": n.parseJSON,
                    "text xml": n.parseXML
                },
                flatOptions: {
                    url: !0,
                    context: !0
                }
            },
            ajaxSetup: function(a, b) {
                return b ? sc(sc(a, n.ajaxSettings), b) : sc(n.ajaxSettings, a)
            },
            ajaxPrefilter: qc(lc),
            ajaxTransport: qc(mc),
            ajax: function(a, b) {
                "object" == typeof a && (b = a,
                a = void 0),
                b = b || {};
                var c, d, e, f, g, h, i, j, k = n.ajaxSetup({}, b), l = k.context || k, m = k.context && (l.nodeType || l.jquery) ? n(l) : n.event, o = n.Deferred(), p = n.Callbacks("once memory"), q = k.statusCode || {}, r = {}, s = {}, t = 0, u = "canceled", v = {
                    readyState: 0,
                    getResponseHeader: function(a) {
                        var b;
                        if (2 === t) {
                            if (!f) {
                                f = {};
                                while (b = gc.exec(e))
                                    f[b[1].toLowerCase()] = b[2]
                            }
                            b = f[a.toLowerCase()]
                        }
                        return null == b ? null : b
                    },
                    getAllResponseHeaders: function() {
                        return 2 === t ? e : null
                    },
                    setRequestHeader: function(a, b) {
                        var c = a.toLowerCase();
                        return t || (a = s[c] = s[c] || a,
                        r[a] = b),
                        this
                    },
                    overrideMimeType: function(a) {
                        return t || (k.mimeType = a),
                        this
                    },
                    statusCode: function(a) {
                        var b;
                        if (a)
                            if (2 > t)
                                for (b in a)
                                    q[b] = [q[b], a[b]];
                            else
                                v.always(a[v.status]);
                        return this
                    },
                    abort: function(a) {
                        var b = a || u;
                        return c && c.abort(b),
                        x(0, b),
                        this
                    }
                };
                if (o.promise(v).complete = p.add,
                v.success = v.done,
                v.error = v.fail,
                k.url = ((a || k.url || oc) + "").replace(ec, "").replace(jc, pc[1] + "//"),
                k.type = b.method || b.type || k.method || k.type,
                k.dataTypes = n.trim(k.dataType || "*").toLowerCase().match(E) || [""],
                null == k.crossDomain && (h = kc.exec(k.url.toLowerCase()),
                k.crossDomain = !(!h || h[1] === pc[1] && h[2] === pc[2] && (h[3] || ("http:" === h[1] ? "80" : "443")) === (pc[3] || ("http:" === pc[1] ? "80" : "443")))),
                k.data && k.processData && "string" != typeof k.data && (k.data = n.param(k.data, k.traditional)),
                rc(lc, k, b, v),
                2 === t)
                    return v;
                i = n.event && k.global,
                i && 0 === n.active++ && n.event.trigger("ajaxStart"),
                k.type = k.type.toUpperCase(),
                k.hasContent = !ic.test(k.type),
                d = k.url,
                k.hasContent || (k.data && (d = k.url += (dc.test(d) ? "&" : "?") + k.data,
                delete k.data),
                k.cache === !1 && (k.url = fc.test(d) ? d.replace(fc, "$1_=" + cc++) : d + (dc.test(d) ? "&" : "?") + "_=" + cc++)),
                k.ifModified && (n.lastModified[d] && v.setRequestHeader("If-Modified-Since", n.lastModified[d]),
                n.etag[d] && v.setRequestHeader("If-None-Match", n.etag[d])),
                (k.data && k.hasContent && k.contentType !== !1 || b.contentType) && v.setRequestHeader("Content-Type", k.contentType),
                v.setRequestHeader("Accept", k.dataTypes[0] && k.accepts[k.dataTypes[0]] ? k.accepts[k.dataTypes[0]] + ("*" !== k.dataTypes[0] ? ", " + nc + "; q=0.01" : "") : k.accepts["*"]);
                for (j in k.headers)
                    v.setRequestHeader(j, k.headers[j]);
                if (k.beforeSend && (k.beforeSend.call(l, v, k) === !1 || 2 === t))
                    return v.abort();
                u = "abort";
                for (j in {
                    success: 1,
                    error: 1,
                    complete: 1
                })
                    v[j](k[j]);
                if (c = rc(mc, k, b, v)) {
                    v.readyState = 1,
                    i && m.trigger("ajaxSend", [v, k]),
                    k.async && k.timeout > 0 && (g = setTimeout(function() {
                        v.abort("timeout")
                    }, k.timeout));
                    try {
                        t = 1,
                        c.send(r, x)
                    } catch (w) {
                        if (!(2 > t))
                            throw w;
                        x(-1, w)
                    }
                } else
                    x(-1, "No Transport");
                function x(a, b, f, h) {
                    var j, r, s, u, w, x = b;
                    2 !== t && (t = 2,
                    g && clearTimeout(g),
                    c = void 0,
                    e = h || "",
                    v.readyState = a > 0 ? 4 : 0,
                    j = a >= 200 && 300 > a || 304 === a,
                    f && (u = tc(k, v, f)),
                    u = uc(k, u, v, j),
                    j ? (k.ifModified && (w = v.getResponseHeader("Last-Modified"),
                    w && (n.lastModified[d] = w),
                    w = v.getResponseHeader("etag"),
                    w && (n.etag[d] = w)),
                    204 === a || "HEAD" === k.type ? x = "nocontent" : 304 === a ? x = "notmodified" : (x = u.state,
                    r = u.data,
                    s = u.error,
                    j = !s)) : (s = x,
                    (a || !x) && (x = "error",
                    0 > a && (a = 0))),
                    v.status = a,
                    v.statusText = (b || x) + "",
                    j ? o.resolveWith(l, [r, x, v]) : o.rejectWith(l, [v, x, s]),
                    v.statusCode(q),
                    q = void 0,
                    i && m.trigger(j ? "ajaxSuccess" : "ajaxError", [v, k, j ? r : s]),
                    p.fireWith(l, [v, x]),
                    i && (m.trigger("ajaxComplete", [v, k]),
                    --n.active || n.event.trigger("ajaxStop")))
                }
                return v
            },
            getJSON: function(a, b, c) {
                return n.get(a, b, c, "json")
            },
            getScript: function(a, b) {
                return n.get(a, void 0, b, "script")
            }
        }),
        n.each(["get", "post"], function(a, b) {
            n[b] = function(a, c, d, e) {
                return n.isFunction(c) && (e = e || d,
                d = c,
                c = void 0),
                n.ajax({
                    url: a,
                    type: b,
                    dataType: e,
                    data: c,
                    success: d
                })
            }
        }),
        n._evalUrl = function(a) {
            return n.ajax({
                url: a,
                type: "GET",
                dataType: "script",
                async: !1,
                global: !1,
                "throws": !0
            })
        }
        ,
        n.fn.extend({
            wrapAll: function(a) {
                var b;
                return n.isFunction(a) ? this.each(function(b) {
                    n(this).wrapAll(a.call(this, b))
                }) : (this[0] && (b = n(a, this[0].ownerDocument).eq(0).clone(!0),
                this[0].parentNode && b.insertBefore(this[0]),
                b.map(function() {
                    var a = this;
                    while (a.firstElementChild)
                        a = a.firstElementChild;
                    return a
                }).append(this)),
                this)
            },
            wrapInner: function(a) {
                return this.each(n.isFunction(a) ? function(b) {
                    n(this).wrapInner(a.call(this, b))
                }
                : function() {
                    var b = n(this)
                      , c = b.contents();
                    c.length ? c.wrapAll(a) : b.append(a)
                }
                )
            },
            wrap: function(a) {
                var b = n.isFunction(a);
                return this.each(function(c) {
                    n(this).wrapAll(b ? a.call(this, c) : a)
                })
            },
            unwrap: function() {
                return this.parent().each(function() {
                    n.nodeName(this, "body") || n(this).replaceWith(this.childNodes)
                }).end()
            }
        }),
        n.expr.filters.hidden = function(a) {
            return a.offsetWidth <= 0 && a.offsetHeight <= 0
        }
        ,
        n.expr.filters.visible = function(a) {
            return !n.expr.filters.hidden(a)
        }
        ;
        var vc = /%20/g
          , wc = /\[\]$/
          , xc = /\r?\n/g
          , yc = /^(?:submit|button|image|reset|file)$/i
          , zc = /^(?:input|select|textarea|keygen)/i;
        function Ac(a, b, c, d) {
            var e;
            if (n.isArray(b))
                n.each(b, function(b, e) {
                    c || wc.test(a) ? d(a, e) : Ac(a + "[" + ("object" == typeof e ? b : "") + "]", e, c, d)
                });
            else if (c || "object" !== n.type(b))
                d(a, b);
            else
                for (e in b)
                    Ac(a + "[" + e + "]", b[e], c, d)
        }
        n.param = function(a, b) {
            var c, d = [], e = function(a, b) {
                b = n.isFunction(b) ? b() : null == b ? "" : b,
                d[d.length] = encodeURIComponent(a) + "=" + encodeURIComponent(b)
            };
            if (void 0 === b && (b = n.ajaxSettings && n.ajaxSettings.traditional),
            n.isArray(a) || a.jquery && !n.isPlainObject(a))
                n.each(a, function() {
                    e(this.name, this.value)
                });
            else
                for (c in a)
                    Ac(c, a[c], b, e);
            return d.join("&").replace(vc, "+")
        }
        ,
        n.fn.extend({
            serialize: function() {
                return n.param(this.serializeArray())
            },
            serializeArray: function() {
                return this.map(function() {
                    var a = n.prop(this, "elements");
                    return a ? n.makeArray(a) : this
                }).filter(function() {
                    var a = this.type;
                    return this.name && !n(this).is(":disabled") && zc.test(this.nodeName) && !yc.test(a) && (this.checked || !T.test(a))
                }).map(function(a, b) {
                    var c = n(this).val();
                    return null == c ? null : n.isArray(c) ? n.map(c, function(a) {
                        return {
                            name: b.name,
                            value: a.replace(xc, "\r\n")
                        }
                    }) : {
                        name: b.name,
                        value: c.replace(xc, "\r\n")
                    }
                }).get()
            }
        }),
        n.ajaxSettings.xhr = function() {
            try {
                return new XMLHttpRequest
            } catch (a) {}
        }
        ;
        var Bc = 0
          , Cc = {}
          , Dc = {
            0: 200,
            1223: 204
        }
          , Ec = n.ajaxSettings.xhr();
        a.attachEvent && a.attachEvent("onunload", function() {
            for (var a in Cc)
                Cc[a]()
        }),
        k.cors = !!Ec && "withCredentials"in Ec,
        k.ajax = Ec = !!Ec,
        n.ajaxTransport(function(a) {
            var b;
            return k.cors || Ec && !a.crossDomain ? {
                send: function(c, d) {
                    var e, f = a.xhr(), g = ++Bc;
                    if (f.open(a.type, a.url, a.async, a.username, a.password),
                    a.xhrFields)
                        for (e in a.xhrFields)
                            f[e] = a.xhrFields[e];
                    a.mimeType && f.overrideMimeType && f.overrideMimeType(a.mimeType),
                    a.crossDomain || c["X-Requested-With"] || (c["X-Requested-With"] = "XMLHttpRequest");
                    for (e in c)
                        f.setRequestHeader(e, c[e]);
                    b = function(a) {
                        return function() {
                            b && (delete Cc[g],
                            b = f.onload = f.onerror = null,
                            "abort" === a ? f.abort() : "error" === a ? d(f.status, f.statusText) : d(Dc[f.status] || f.status, f.statusText, "string" == typeof f.responseText ? {
                                text: f.responseText
                            } : void 0, f.getAllResponseHeaders()))
                        }
                    }
                    ,
                    f.onload = b(),
                    f.onerror = b("error"),
                    b = Cc[g] = b("abort");
                    try {
                        f.send(a.hasContent && a.data || null)
                    } catch (h) {
                        if (b)
                            throw h
                    }
                },
                abort: function() {
                    b && b()
                }
            } : void 0
        }),
        n.ajaxSetup({
            accepts: {
                script: "text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"
            },
            contents: {
                script: /(?:java|ecma)script/
            },
            converters: {
                "text script": function(a) {
                    return n.globalEval(a),
                    a
                }
            }
        }),
        n.ajaxPrefilter("script", function(a) {
            void 0 === a.cache && (a.cache = !1),
            a.crossDomain && (a.type = "GET")
        }),
        n.ajaxTransport("script", function(a) {
            if (a.crossDomain) {
                var b, c;
                return {
                    send: function(d, e) {
                        b = n("<script>").prop({
                            async: !0,
                            charset: a.scriptCharset,
                            src: a.url
                        }).on("load error", c = function(a) {
                            b.remove(),
                            c = null,
                            a && e("error" === a.type ? 404 : 200, a.type)
                        }
                        ),
                        l.head.appendChild(b[0])
                    },
                    abort: function() {
                        c && c()
                    }
                }
            }
        });
        var Fc = []
          , Gc = /(=)\?(?=&|$)|\?\?/;
        n.ajaxSetup({
            jsonp: "callback",
            jsonpCallback: function() {
                var a = Fc.pop() || n.expando + "_" + cc++;
                return this[a] = !0,
                a
            }
        }),
        n.ajaxPrefilter("json jsonp", function(b, c, d) {
            var e, f, g, h = b.jsonp !== !1 && (Gc.test(b.url) ? "url" : "string" == typeof b.data && !(b.contentType || "").indexOf("application/x-www-form-urlencoded") && Gc.test(b.data) && "data");
            return h || "jsonp" === b.dataTypes[0] ? (e = b.jsonpCallback = n.isFunction(b.jsonpCallback) ? b.jsonpCallback() : b.jsonpCallback,
            h ? b[h] = b[h].replace(Gc, "$1" + e) : b.jsonp !== !1 && (b.url += (dc.test(b.url) ? "&" : "?") + b.jsonp + "=" + e),
            b.converters["script json"] = function() {
                return g || n.error(e + " was not called"),
                g[0]
            }
            ,
            b.dataTypes[0] = "json",
            f = a[e],
            a[e] = function() {
                g = arguments
            }
            ,
            d.always(function() {
                a[e] = f,
                b[e] && (b.jsonpCallback = c.jsonpCallback,
                Fc.push(e)),
                g && n.isFunction(f) && f(g[0]),
                g = f = void 0
            }),
            "script") : void 0
        }),
        n.parseHTML = function(a, b, c) {
            if (!a || "string" != typeof a)
                return null;
            "boolean" == typeof b && (c = b,
            b = !1),
            b = b || l;
            var d = v.exec(a)
              , e = !c && [];
            return d ? [b.createElement(d[1])] : (d = n.buildFragment([a], b, e),
            e && e.length && n(e).remove(),
            n.merge([], d.childNodes))
        }
        ;
        var Hc = n.fn.load;
        n.fn.load = function(a, b, c) {
            if ("string" != typeof a && Hc)
                return Hc.apply(this, arguments);
            var d, e, f, g = this, h = a.indexOf(" ");
            return h >= 0 && (d = n.trim(a.slice(h)),
            a = a.slice(0, h)),
            n.isFunction(b) ? (c = b,
            b = void 0) : b && "object" == typeof b && (e = "POST"),
            g.length > 0 && n.ajax({
                url: a,
                type: e,
                dataType: "html",
                data: b
            }).done(function(a) {
                f = arguments,
                g.html(d ? n("<div>").append(n.parseHTML(a)).find(d) : a)
            }).complete(c && function(a, b) {
                g.each(c, f || [a.responseText, b, a])
            }
            ),
            this
        }
        ,
        n.each(["ajaxStart", "ajaxStop", "ajaxComplete", "ajaxError", "ajaxSuccess", "ajaxSend"], function(a, b) {
            n.fn[b] = function(a) {
                return this.on(b, a)
            }
        }),
        n.expr.filters.animated = function(a) {
            return n.grep(n.timers, function(b) {
                return a === b.elem
            }).length
        }
        ;
        var Ic = a.document.documentElement;
        function Jc(a) {
            return n.isWindow(a) ? a : 9 === a.nodeType && a.defaultView
        }
        n.offset = {
            setOffset: function(a, b, c) {
                var d, e, f, g, h, i, j, k = n.css(a, "position"), l = n(a), m = {};
                "static" === k && (a.style.position = "relative"),
                h = l.offset(),
                f = n.css(a, "top"),
                i = n.css(a, "left"),
                j = ("absolute" === k || "fixed" === k) && (f + i).indexOf("auto") > -1,
                j ? (d = l.position(),
                g = d.top,
                e = d.left) : (g = parseFloat(f) || 0,
                e = parseFloat(i) || 0),
                n.isFunction(b) && (b = b.call(a, c, h)),
                null != b.top && (m.top = b.top - h.top + g),
                null != b.left && (m.left = b.left - h.left + e),
                "using"in b ? b.using.call(a, m) : l.css(m)
            }
        },
        n.fn.extend({
            offset: function(a) {
                if (arguments.length)
                    return void 0 === a ? this : this.each(function(b) {
                        n.offset.setOffset(this, a, b)
                    });
                var b, c, d = this[0], e = {
                    top: 0,
                    left: 0
                }, f = d && d.ownerDocument;
                if (f)
                    return b = f.documentElement,
                    n.contains(b, d) ? (typeof d.getBoundingClientRect !== U && (e = d.getBoundingClientRect()),
                    c = Jc(f),
                    {
                        top: e.top + c.pageYOffset - b.clientTop,
                        left: e.left + c.pageXOffset - b.clientLeft
                    }) : e
            },
            position: function() {
                if (this[0]) {
                    var a, b, c = this[0], d = {
                        top: 0,
                        left: 0
                    };
                    return "fixed" === n.css(c, "position") ? b = c.getBoundingClientRect() : (a = this.offsetParent(),
                    b = this.offset(),
                    n.nodeName(a[0], "html") || (d = a.offset()),
                    d.top += n.css(a[0], "borderTopWidth", !0),
                    d.left += n.css(a[0], "borderLeftWidth", !0)),
                    {
                        top: b.top - d.top - n.css(c, "marginTop", !0),
                        left: b.left - d.left - n.css(c, "marginLeft", !0)
                    }
                }
            },
            offsetParent: function() {
                return this.map(function() {
                    var a = this.offsetParent || Ic;
                    while (a && !n.nodeName(a, "html") && "static" === n.css(a, "position"))
                        a = a.offsetParent;
                    return a || Ic
                })
            }
        }),
        n.each({
            scrollLeft: "pageXOffset",
            scrollTop: "pageYOffset"
        }, function(b, c) {
            var d = "pageYOffset" === c;
            n.fn[b] = function(e) {
                return J(this, function(b, e, f) {
                    var g = Jc(b);
                    return void 0 === f ? g ? g[c] : b[e] : void (g ? g.scrollTo(d ? a.pageXOffset : f, d ? f : a.pageYOffset) : b[e] = f)
                }, b, e, arguments.length, null)
            }
        }),
        n.each(["top", "left"], function(a, b) {
            n.cssHooks[b] = yb(k.pixelPosition, function(a, c) {
                return c ? (c = xb(a, b),
                vb.test(c) ? n(a).position()[b] + "px" : c) : void 0
            })
        }),
        n.each({
            Height: "height",
            Width: "width"
        }, function(a, b) {
            n.each({
                padding: "inner" + a,
                content: b,
                "": "outer" + a
            }, function(c, d) {
                n.fn[d] = function(d, e) {
                    var f = arguments.length && (c || "boolean" != typeof d)
                      , g = c || (d === !0 || e === !0 ? "margin" : "border");
                    return J(this, function(b, c, d) {
                        var e;
                        return n.isWindow(b) ? b.document.documentElement["client" + a] : 9 === b.nodeType ? (e = b.documentElement,
                        Math.max(b.body["scroll" + a], e["scroll" + a], b.body["offset" + a], e["offset" + a], e["client" + a])) : void 0 === d ? n.css(b, c, g) : n.style(b, c, d, g)
                    }, b, f ? d : void 0, f, null)
                }
            })
        }),
        n.fn.size = function() {
            return this.length
        }
        ,
        n.fn.andSelf = n.fn.addBack,
        "function" == typeof define && define.amd && define("jquery", [], function() {
            return n
        });
        var Kc = a.jQuery
          , Lc = a.$;
        return n.noConflict = function(b) {
            return a.$ === n && (a.$ = Lc),
            b && a.jQuery === n && (a.jQuery = Kc),
            n
        }
        ,
        typeof b === U && (a.jQuery = a.$ = n),
        n
    });
    //# sourceMappingURL=jquery.min.map
    /**
     * Owl Carousel v2.2.1
     * Copyright 2013-2017 David Deutsch
     * Licensed under  ()
     */
    !function(a, b, c, d) {
        function e(b, c) {
            this.settings = null,
            this.options = a.extend({}, e.Defaults, c),
            this.$element = a(b),
            this._handlers = {},
            this._plugins = {},
            this._supress = {},
            this._current = null,
            this._speed = null,
            this._coordinates = [],
            this._breakpoint = null,
            this._width = null,
            this._items = [],
            this._clones = [],
            this._mergers = [],
            this._widths = [],
            this._invalidated = {},
            this._pipe = [],
            this._drag = {
                time: null,
                target: null,
                pointer: null,
                stage: {
                    start: null,
                    current: null
                },
                direction: null
            },
            this._states = {
                current: {},
                tags: {
                    initializing: ["busy"],
                    animating: ["busy"],
                    dragging: ["interacting"]
                }
            },
            a.each(["onResize", "onThrottledResize"], a.proxy(function(b, c) {
                this._handlers[c] = a.proxy(this[c], this)
            }, this)),
            a.each(e.Plugins, a.proxy(function(a, b) {
                this._plugins[a.charAt(0).toLowerCase() + a.slice(1)] = new b(this)
            }, this)),
            a.each(e.Workers, a.proxy(function(b, c) {
                this._pipe.push({
                    filter: c.filter,
                    run: a.proxy(c.run, this)
                })
            }, this)),
            this.setup(),
            this.initialize()
        }
        e.Defaults = {
            items: 3,
            loop: !1,
            center: !1,
            rewind: !1,
            mouseDrag: !0,
            touchDrag: !0,
            pullDrag: !0,
            freeDrag: !1,
            margin: 0,
            stagePadding: 0,
            merge: !1,
            mergeFit: !0,
            autoWidth: !1,
            startPosition: 0,
            rtl: !1,
            smartSpeed: 250,
            fluidSpeed: !1,
            dragEndSpeed: !1,
            responsive: {},
            responsiveRefreshRate: 200,
            responsiveBaseElement: b,
            fallbackEasing: "swing",
            info: !1,
            nestedItemSelector: !1,
            itemElement: "div",
            stageElement: "div",
            refreshClass: "owl-refresh",
            loadedClass: "owl-loaded",
            loadingClass: "owl-loading",
            rtlClass: "owl-rtl",
            responsiveClass: "owl-responsive",
            dragClass: "owl-drag",
            itemClass: "owl-item",
            stageClass: "owl-stage",
            stageOuterClass: "owl-stage-outer",
            grabClass: "owl-grab"
        },
        e.Width = {
            Default: "default",
            Inner: "inner",
            Outer: "outer"
        },
        e.Type = {
            Event: "event",
            State: "state"
        },
        e.Plugins = {},
        e.Workers = [{
            filter: ["width", "settings"],
            run: function() {
                this._width = this.$element.width()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                a.current = this._items && this._items[this.relative(this._current)]
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                this.$stage.children(".cloned").remove()
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                var b = this.settings.margin || ""
                  , c = !this.settings.autoWidth
                  , d = this.settings.rtl
                  , e = {
                    width: "auto",
                    "margin-left": d ? b : "",
                    "margin-right": d ? "" : b
                };
                !c && this.$stage.children().css(e),
                a.css = e
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                var b = (this.width() / this.settings.items).toFixed(3) - this.settings.margin
                  , c = null
                  , d = this._items.length
                  , e = !this.settings.autoWidth
                  , f = [];
                for (a.items = {
                    merge: !1,
                    width: b
                }; d--; )
                    c = this._mergers[d],
                    c = this.settings.mergeFit && Math.min(c, this.settings.items) || c,
                    a.items.merge = c > 1 || a.items.merge,
                    f[d] = e ? b * c : this._items[d].width();
                this._widths = f
            }
        }, {
            filter: ["items", "settings"],
            run: function() {
                var b = []
                  , c = this._items
                  , d = this.settings
                  , e = Math.max(2 * d.items, 4)
                  , f = 2 * Math.ceil(c.length / 2)
                  , g = d.loop && c.length ? d.rewind ? e : Math.max(e, f) : 0
                  , h = ""
                  , i = "";
                for (g /= 2; g--; )
                    b.push(this.normalize(b.length / 2, !0)),
                    h += c[b[b.length - 1]][0].outerHTML,
                    b.push(this.normalize(c.length - 1 - (b.length - 1) / 2, !0)),
                    i = c[b[b.length - 1]][0].outerHTML + i;
                this._clones = b,
                a(h).addClass("cloned").appendTo(this.$stage),
                a(i).addClass("cloned").prependTo(this.$stage)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                for (var a = this.settings.rtl ? 1 : -1, b = this._clones.length + this._items.length, c = -1, d = 0, e = 0, f = []; ++c < b; )
                    d = f[c - 1] || 0,
                    e = this._widths[this.relative(c)] + this.settings.margin,
                    f.push(d + e * a);
                this._coordinates = f
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function() {
                var a = this.settings.stagePadding
                  , b = this._coordinates
                  , c = {
                    width: Math.ceil(Math.abs(b[b.length - 1])) + 2 * a,
                    "padding-left": a || "",
                    "padding-right": a || ""
                };
                this.$stage.css(c)
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                var b = this._coordinates.length
                  , c = !this.settings.autoWidth
                  , d = this.$stage.children();
                if (c && a.items.merge)
                    for (; b--; )
                        a.css.width = this._widths[this.relative(b)],
                        d.eq(b).css(a.css);
                else
                    c && (a.css.width = a.items.width,
                    d.css(a.css))
            }
        }, {
            filter: ["items"],
            run: function() {
                this._coordinates.length < 1 && this.$stage.removeAttr("style")
            }
        }, {
            filter: ["width", "items", "settings"],
            run: function(a) {
                a.current = a.current ? this.$stage.children().index(a.current) : 0,
                a.current = Math.max(this.minimum(), Math.min(this.maximum(), a.current)),
                this.reset(a.current)
            }
        }, {
            filter: ["position"],
            run: function() {
                this.animate(this.coordinates(this._current))
            }
        }, {
            filter: ["width", "position", "items", "settings"],
            run: function() {
                var a, b, c, d, e = this.settings.rtl ? 1 : -1, f = 2 * this.settings.stagePadding, g = this.coordinates(this.current()) + f, h = g + this.width() * e, i = [];
                for (c = 0,
                d = this._coordinates.length; c < d; c++)
                    a = this._coordinates[c - 1] || 0,
                    b = Math.abs(this._coordinates[c]) + f * e,
                    (this.op(a, "<=", g) && this.op(a, ">", h) || this.op(b, "<", g) && this.op(b, ">", h)) && i.push(c);
                this.$stage.children(".active").removeClass("active"),
                this.$stage.children(":eq(" + i.join("), :eq(") + ")").addClass("active"),
                this.settings.center && (this.$stage.children(".center").removeClass("center"),
                this.$stage.children().eq(this.current()).addClass("center"))
            }
        }],
        e.prototype.initialize = function() {
            if (this.enter("initializing"),
            this.trigger("initialize"),
            this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl),
            this.settings.autoWidth && !this.is("pre-loading")) {
                var b, c, e;
                b = this.$element.find("img"),
                c = this.settings.nestedItemSelector ? "." + this.settings.nestedItemSelector : d,
                e = this.$element.children(c).width(),
                b.length && e <= 0 && this.preloadAutoWidthImages(b)
            }
            this.$element.addClass(this.options.loadingClass),
            this.$stage = a("<" + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>').wrap('<div class="' + this.settings.stageOuterClass + '"/>'),
            this.$element.append(this.$stage.parent()),
            this.replace(this.$element.children().not(this.$stage.parent())),
            this.$element.is(":visible") ? this.refresh() : this.invalidate("width"),
            this.$element.removeClass(this.options.loadingClass).addClass(this.options.loadedClass),
            this.registerEventHandlers(),
            this.leave("initializing"),
            this.trigger("initialized")
        }
        ,
        e.prototype.setup = function() {
            var b = this.viewport()
              , c = this.options.responsive
              , d = -1
              , e = null;
            c ? (a.each(c, function(a) {
                a <= b && a > d && (d = Number(a))
            }),
            e = a.extend({}, this.options, c[d]),
            "function" == typeof e.stagePadding && (e.stagePadding = e.stagePadding()),
            delete e.responsive,
            e.responsiveClass && this.$element.attr("class", this.$element.attr("class").replace(new RegExp("(" + this.options.responsiveClass + "-)\\S+\\s","g"), "$1" + d))) : e = a.extend({}, this.options),
            this.trigger("change", {
                property: {
                    name: "settings",
                    value: e
                }
            }),
            this._breakpoint = d,
            this.settings = e,
            this.invalidate("settings"),
            this.trigger("changed", {
                property: {
                    name: "settings",
                    value: this.settings
                }
            })
        }
        ,
        e.prototype.optionsLogic = function() {
            this.settings.autoWidth && (this.settings.stagePadding = !1,
            this.settings.merge = !1)
        }
        ,
        e.prototype.prepare = function(b) {
            var c = this.trigger("prepare", {
                content: b
            });
            return c.data || (c.data = a("<" + this.settings.itemElement + "/>").addClass(this.options.itemClass).append(b)),
            this.trigger("prepared", {
                content: c.data
            }),
            c.data
        }
        ,
        e.prototype.update = function() {
            for (var b = 0, c = this._pipe.length, d = a.proxy(function(a) {
                return this[a]
            }, this._invalidated), e = {}; b < c; )
                (this._invalidated.all || a.grep(this._pipe[b].filter, d).length > 0) && this._pipe[b].run(e),
                b++;
            this._invalidated = {},
            !this.is("valid") && this.enter("valid")
        }
        ,
        e.prototype.width = function(a) {
            switch (a = a || e.Width.Default) {
            case e.Width.Inner:
            case e.Width.Outer:
                return this._width;
            default:
                return this._width - 2 * this.settings.stagePadding + this.settings.margin
            }
        }
        ,
        e.prototype.refresh = function() {
            this.enter("refreshing"),
            this.trigger("refresh"),
            this.setup(),
            this.optionsLogic(),
            this.$element.addClass(this.options.refreshClass),
            this.update(),
            this.$element.removeClass(this.options.refreshClass),
            this.leave("refreshing"),
            this.trigger("refreshed")
        }
        ,
        e.prototype.onThrottledResize = function() {
            b.clearTimeout(this.resizeTimer),
            this.resizeTimer = b.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate)
        }
        ,
        e.prototype.onResize = function() {
            return !!this._items.length && (this._width !== this.$element.width() && (!!this.$element.is(":visible") && (this.enter("resizing"),
            this.trigger("resize").isDefaultPrevented() ? (this.leave("resizing"),
            !1) : (this.invalidate("width"),
            this.refresh(),
            this.leave("resizing"),
            void this.trigger("resized")))))
        }
        ,
        e.prototype.registerEventHandlers = function() {
            a.support.transition && this.$stage.on(a.support.transition.end + ".owl.core", a.proxy(this.onTransitionEnd, this)),
            this.settings.responsive !== !1 && this.on(b, "resize", this._handlers.onThrottledResize),
            this.settings.mouseDrag && (this.$element.addClass(this.options.dragClass),
            this.$stage.on("mousedown.owl.core", a.proxy(this.onDragStart, this)),
            this.$stage.on("dragstart.owl.core selectstart.owl.core", function() {
                return !1
            })),
            this.settings.touchDrag && (this.$stage.on("touchstart.owl.core", a.proxy(this.onDragStart, this)),
            this.$stage.on("touchcancel.owl.core", a.proxy(this.onDragEnd, this)))
        }
        ,
        e.prototype.onDragStart = function(b) {
            var d = null;
            3 !== b.which && (a.support.transform ? (d = this.$stage.css("transform").replace(/.*\(|\)| /g, "").split(","),
            d = {
                x: d[16 === d.length ? 12 : 4],
                y: d[16 === d.length ? 13 : 5]
            }) : (d = this.$stage.position(),
            d = {
                x: this.settings.rtl ? d.left + this.$stage.width() - this.width() + this.settings.margin : d.left,
                y: d.top
            }),
            this.is("animating") && (a.support.transform ? this.animate(d.x) : this.$stage.stop(),
            this.invalidate("position")),
            this.$element.toggleClass(this.options.grabClass, "mousedown" === b.type),
            this.speed(0),
            this._drag.time = (new Date).getTime(),
            this._drag.target = a(b.target),
            this._drag.stage.start = d,
            this._drag.stage.current = d,
            this._drag.pointer = this.pointer(b),
            a(c).on("mouseup.owl.core touchend.owl.core", a.proxy(this.onDragEnd, this)),
            a(c).one("mousemove.owl.core touchmove.owl.core", a.proxy(function(b) {
                var d = this.difference(this._drag.pointer, this.pointer(b));
                a(c).on("mousemove.owl.core touchmove.owl.core", a.proxy(this.onDragMove, this)),
                Math.abs(d.x) < Math.abs(d.y) && this.is("valid") || (b.preventDefault(),
                this.enter("dragging"),
                this.trigger("drag"))
            }, this)))
        }
        ,
        e.prototype.onDragMove = function(a) {
            var b = null
              , c = null
              , d = null
              , e = this.difference(this._drag.pointer, this.pointer(a))
              , f = this.difference(this._drag.stage.start, e);
            this.is("dragging") && (a.preventDefault(),
            this.settings.loop ? (b = this.coordinates(this.minimum()),
            c = this.coordinates(this.maximum() + 1) - b,
            f.x = ((f.x - b) % c + c) % c + b) : (b = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum()),
            c = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum()),
            d = this.settings.pullDrag ? -1 * e.x / 5 : 0,
            f.x = Math.max(Math.min(f.x, b + d), c + d)),
            this._drag.stage.current = f,
            this.animate(f.x))
        }
        ,
        e.prototype.onDragEnd = function(b) {
            var d = this.difference(this._drag.pointer, this.pointer(b))
              , e = this._drag.stage.current
              , f = d.x > 0 ^ this.settings.rtl ? "left" : "right";
            a(c).off(".owl.core"),
            this.$element.removeClass(this.options.grabClass),
            (0 !== d.x && this.is("dragging") || !this.is("valid")) && (this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed),
            this.current(this.closest(e.x, 0 !== d.x ? f : this._drag.direction)),
            this.invalidate("position"),
            this.update(),
            this._drag.direction = f,
            (Math.abs(d.x) > 3 || (new Date).getTime() - this._drag.time > 300) && this._drag.target.one("click.owl.core", function() {
                return !1
            })),
            this.is("dragging") && (this.leave("dragging"),
            this.trigger("dragged"))
        }
        ,
        e.prototype.closest = function(b, c) {
            var d = -1
              , e = 30
              , f = this.width()
              , g = this.coordinates();
            return this.settings.freeDrag || a.each(g, a.proxy(function(a, h) {
                return "left" === c && b > h - e && b < h + e ? d = a : "right" === c && b > h - f - e && b < h - f + e ? d = a + 1 : this.op(b, "<", h) && this.op(b, ">", g[a + 1] || h - f) && (d = "left" === c ? a + 1 : a),
                d === -1
            }, this)),
            this.settings.loop || (this.op(b, ">", g[this.minimum()]) ? d = b = this.minimum() : this.op(b, "<", g[this.maximum()]) && (d = b = this.maximum())),
            d
        }
        ,
        e.prototype.animate = function(b) {
            var c = this.speed() > 0;
            this.is("animating") && this.onTransitionEnd(),
            c && (this.enter("animating"),
            this.trigger("translate")),
            a.support.transform3d && a.support.transition ? this.$stage.css({
                transform: "translate3d(" + b + "px,0px,0px)",
                transition: this.speed() / 1e3 + "s"
            }) : c ? this.$stage.animate({
                left: b + "px"
            }, this.speed(), this.settings.fallbackEasing, a.proxy(this.onTransitionEnd, this)) : this.$stage.css({
                left: b + "px"
            })
        }
        ,
        e.prototype.is = function(a) {
            return this._states.current[a] && this._states.current[a] > 0
        }
        ,
        e.prototype.current = function(a) {
            if (a === d)
                return this._current;
            if (0 === this._items.length)
                return d;
            if (a = this.normalize(a),
            this._current !== a) {
                var b = this.trigger("change", {
                    property: {
                        name: "position",
                        value: a
                    }
                });
                b.data !== d && (a = this.normalize(b.data)),
                this._current = a,
                this.invalidate("position"),
                this.trigger("changed", {
                    property: {
                        name: "position",
                        value: this._current
                    }
                })
            }
            return this._current
        }
        ,
        e.prototype.invalidate = function(b) {
            return "string" === a.type(b) && (this._invalidated[b] = !0,
            this.is("valid") && this.leave("valid")),
            a.map(this._invalidated, function(a, b) {
                return b
            })
        }
        ,
        e.prototype.reset = function(a) {
            a = this.normalize(a),
            a !== d && (this._speed = 0,
            this._current = a,
            this.suppress(["translate", "translated"]),
            this.animate(this.coordinates(a)),
            this.release(["translate", "translated"]))
        }
        ,
        e.prototype.normalize = function(a, b) {
            var c = this._items.length
              , e = b ? 0 : this._clones.length;
            return !this.isNumeric(a) || c < 1 ? a = d : (a < 0 || a >= c + e) && (a = ((a - e / 2) % c + c) % c + e / 2),
            a
        }
        ,
        e.prototype.relative = function(a) {
            return a -= this._clones.length / 2,
            this.normalize(a, !0)
        }
        ,
        e.prototype.maximum = function(a) {
            var b, c, d, e = this.settings, f = this._coordinates.length;
            if (e.loop)
                f = this._clones.length / 2 + this._items.length - 1;
            else if (e.autoWidth || e.merge) {
                for (b = this._items.length,
                c = this._items[--b].width(),
                d = this.$element.width(); b-- && (c += this._items[b].width() + this.settings.margin,
                !(c > d)); )
                    ;
                f = b + 1
            } else
                f = e.center ? this._items.length - 1 : this._items.length - e.items;
            return a && (f -= this._clones.length / 2),
            Math.max(f, 0)
        }
        ,
        e.prototype.minimum = function(a) {
            return a ? 0 : this._clones.length / 2
        }
        ,
        e.prototype.items = function(a) {
            return a === d ? this._items.slice() : (a = this.normalize(a, !0),
            this._items[a])
        }
        ,
        e.prototype.mergers = function(a) {
            return a === d ? this._mergers.slice() : (a = this.normalize(a, !0),
            this._mergers[a])
        }
        ,
        e.prototype.clones = function(b) {
            var c = this._clones.length / 2
              , e = c + this._items.length
              , f = function(a) {
                return a % 2 === 0 ? e + a / 2 : c - (a + 1) / 2
            };
            return b === d ? a.map(this._clones, function(a, b) {
                return f(b)
            }) : a.map(this._clones, function(a, c) {
                return a === b ? f(c) : null
            })
        }
        ,
        e.prototype.speed = function(a) {
            return a !== d && (this._speed = a),
            this._speed
        }
        ,
        e.prototype.coordinates = function(b) {
            var c, e = 1, f = b - 1;
            return b === d ? a.map(this._coordinates, a.proxy(function(a, b) {
                return this.coordinates(b)
            }, this)) : (this.settings.center ? (this.settings.rtl && (e = -1,
            f = b + 1),
            c = this._coordinates[b],
            c += (this.width() - c + (this._coordinates[f] || 0)) / 2 * e) : c = this._coordinates[f] || 0,
            c = Math.ceil(c))
        }
        ,
        e.prototype.duration = function(a, b, c) {
            return 0 === c ? 0 : Math.min(Math.max(Math.abs(b - a), 1), 6) * Math.abs(c || this.settings.smartSpeed)
        }
        ,
        e.prototype.to = function(a, b) {
            var c = this.current()
              , d = null
              , e = a - this.relative(c)
              , f = (e > 0) - (e < 0)
              , g = this._items.length
              , h = this.minimum()
              , i = this.maximum();
            this.settings.loop ? (!this.settings.rewind && Math.abs(e) > g / 2 && (e += f * -1 * g),
            a = c + e,
            d = ((a - h) % g + g) % g + h,
            d !== a && d - e <= i && d - e > 0 && (c = d - e,
            a = d,
            this.reset(c))) : this.settings.rewind ? (i += 1,
            a = (a % i + i) % i) : a = Math.max(h, Math.min(i, a)),
            this.speed(this.duration(c, a, b)),
            this.current(a),
            this.$element.is(":visible") && this.update()
        }
        ,
        e.prototype.next = function(a) {
            a = a || !1,
            this.to(this.relative(this.current()) + 1, a)
        }
        ,
        e.prototype.prev = function(a) {
            a = a || !1,
            this.to(this.relative(this.current()) - 1, a)
        }
        ,
        e.prototype.onTransitionEnd = function(a) {
            if (a !== d && (a.stopPropagation(),
            (a.target || a.srcElement || a.originalTarget) !== this.$stage.get(0)))
                return !1;
            this.leave("animating"),
            this.trigger("translated")
        }
        ,
        e.prototype.viewport = function() {
            var d;
            return this.options.responsiveBaseElement !== b ? d = a(this.options.responsiveBaseElement).width() : b.innerWidth ? d = b.innerWidth : c.documentElement && c.documentElement.clientWidth ? d = c.documentElement.clientWidth : console.warn("Can not detect viewport width."),
            d
        }
        ,
        e.prototype.replace = function(b) {
            this.$stage.empty(),
            this._items = [],
            b && (b = b instanceof jQuery ? b : a(b)),
            this.settings.nestedItemSelector && (b = b.find("." + this.settings.nestedItemSelector)),
            b.filter(function() {
                return 1 === this.nodeType
            }).each(a.proxy(function(a, b) {
                b = this.prepare(b),
                this.$stage.append(b),
                this._items.push(b),
                this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)
            }, this)),
            this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0),
            this.invalidate("items")
        }
        ,
        e.prototype.add = function(b, c) {
            var e = this.relative(this._current);
            c = c === d ? this._items.length : this.normalize(c, !0),
            b = b instanceof jQuery ? b : a(b),
            this.trigger("add", {
                content: b,
                position: c
            }),
            b = this.prepare(b),
            0 === this._items.length || c === this._items.length ? (0 === this._items.length && this.$stage.append(b),
            0 !== this._items.length && this._items[c - 1].after(b),
            this._items.push(b),
            this._mergers.push(1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)) : (this._items[c].before(b),
            this._items.splice(c, 0, b),
            this._mergers.splice(c, 0, 1 * b.find("[data-merge]").addBack("[data-merge]").attr("data-merge") || 1)),
            this._items[e] && this.reset(this._items[e].index()),
            this.invalidate("items"),
            this.trigger("added", {
                content: b,
                position: c
            })
        }
        ,
        e.prototype.remove = function(a) {
            a = this.normalize(a, !0),
            a !== d && (this.trigger("remove", {
                content: this._items[a],
                position: a
            }),
            this._items[a].remove(),
            this._items.splice(a, 1),
            this._mergers.splice(a, 1),
            this.invalidate("items"),
            this.trigger("removed", {
                content: null,
                position: a
            }))
        }
        ,
        e.prototype.preloadAutoWidthImages = function(b) {
            b.each(a.proxy(function(b, c) {
                this.enter("pre-loading"),
                c = a(c),
                a(new Image).one("load", a.proxy(function(a) {
                    c.attr("src", a.target.src),
                    c.css("opacity", 1),
                    this.leave("pre-loading"),
                    !this.is("pre-loading") && !this.is("initializing") && this.refresh()
                }, this)).attr("src", c.attr("src") || c.attr("data-src") || c.attr("data-src-retina"))
            }, this))
        }
        ,
        e.prototype.destroy = function() {
            this.$element.off(".owl.core"),
            this.$stage.off(".owl.core"),
            a(c).off(".owl.core"),
            this.settings.responsive !== !1 && (b.clearTimeout(this.resizeTimer),
            this.off(b, "resize", this._handlers.onThrottledResize));
            for (var d in this._plugins)
                this._plugins[d].destroy();
            this.$stage.children(".cloned").remove(),
            this.$stage.unwrap(),
            this.$stage.children().contents().unwrap(),
            this.$stage.children().unwrap(),
            this.$element.removeClass(this.options.refreshClass).removeClass(this.options.loadingClass).removeClass(this.options.loadedClass).removeClass(this.options.rtlClass).removeClass(this.options.dragClass).removeClass(this.options.grabClass).attr("class", this.$element.attr("class").replace(new RegExp(this.options.responsiveClass + "-\\S+\\s","g"), "")).removeData("owl.carousel")
        }
        ,
        e.prototype.op = function(a, b, c) {
            var d = this.settings.rtl;
            switch (b) {
            case "<":
                return d ? a > c : a < c;
            case ">":
                return d ? a < c : a > c;
            case ">=":
                return d ? a <= c : a >= c;
            case "<=":
                return d ? a >= c : a <= c
            }
        }
        ,
        e.prototype.on = function(a, b, c, d) {
            a.addEventListener ? a.addEventListener(b, c, d) : a.attachEvent && a.attachEvent("on" + b, c)
        }
        ,
        e.prototype.off = function(a, b, c, d) {
            a.removeEventListener ? a.removeEventListener(b, c, d) : a.detachEvent && a.detachEvent("on" + b, c)
        }
        ,
        e.prototype.trigger = function(b, c, d, f, g) {
            var h = {
                item: {
                    count: this._items.length,
                    index: this.current()
                }
            }
              , i = a.camelCase(a.grep(["on", b, d], function(a) {
                return a
            }).join("-").toLowerCase())
              , j = a.Event([b, "owl", d || "carousel"].join(".").toLowerCase(), a.extend({
                relatedTarget: this
            }, h, c));
            return this._supress[b] || (a.each(this._plugins, function(a, b) {
                b.onTrigger && b.onTrigger(j)
            }),
            this.register({
                type: e.Type.Event,
                name: b
            }),
            this.$element.trigger(j),
            this.settings && "function" == typeof this.settings[i] && this.settings[i].call(this, j)),
            j
        }
        ,
        e.prototype.enter = function(b) {
            a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
                this._states.current[b] === d && (this._states.current[b] = 0),
                this._states.current[b]++
            }, this))
        }
        ,
        e.prototype.leave = function(b) {
            a.each([b].concat(this._states.tags[b] || []), a.proxy(function(a, b) {
                this._states.current[b]--
            }, this))
        }
        ,
        e.prototype.register = function(b) {
            if (b.type === e.Type.Event) {
                if (a.event.special[b.name] || (a.event.special[b.name] = {}),
                !a.event.special[b.name].owl) {
                    var c = a.event.special[b.name]._default;
                    a.event.special[b.name]._default = function(a) {
                        return !c || !c.apply || a.namespace && a.namespace.indexOf("owl") !== -1 ? a.namespace && a.namespace.indexOf("owl") > -1 : c.apply(this, arguments)
                    }
                    ,
                    a.event.special[b.name].owl = !0
                }
            } else
                b.type === e.Type.State && (this._states.tags[b.name] ? this._states.tags[b.name] = this._states.tags[b.name].concat(b.tags) : this._states.tags[b.name] = b.tags,
                this._states.tags[b.name] = a.grep(this._states.tags[b.name], a.proxy(function(c, d) {
                    return a.inArray(c, this._states.tags[b.name]) === d
                }, this)))
        }
        ,
        e.prototype.suppress = function(b) {
            a.each(b, a.proxy(function(a, b) {
                this._supress[b] = !0
            }, this))
        }
        ,
        e.prototype.release = function(b) {
            a.each(b, a.proxy(function(a, b) {
                delete this._supress[b]
            }, this))
        }
        ,
        e.prototype.pointer = function(a) {
            var c = {
                x: null,
                y: null
            };
            return a = a.originalEvent || a || b.event,
            a = a.touches && a.touches.length ? a.touches[0] : a.changedTouches && a.changedTouches.length ? a.changedTouches[0] : a,
            a.pageX ? (c.x = a.pageX,
            c.y = a.pageY) : (c.x = a.clientX,
            c.y = a.clientY),
            c
        }
        ,
        e.prototype.isNumeric = function(a) {
            return !isNaN(parseFloat(a))
        }
        ,
        e.prototype.difference = function(a, b) {
            return {
                x: a.x - b.x,
                y: a.y - b.y
            }
        }
        ,
        a.fn.owlCarousel = function(b) {
            var c = Array.prototype.slice.call(arguments, 1);
            return this.each(function() {
                var d = a(this)
                  , f = d.data("owl.carousel");
                f || (f = new e(this,"object" == typeof b && b),
                d.data("owl.carousel", f),
                a.each(["next", "prev", "to", "destroy", "refresh", "replace", "add", "remove"], function(b, c) {
                    f.register({
                        type: e.Type.Event,
                        name: c
                    }),
                    f.$element.on(c + ".owl.carousel.core", a.proxy(function(a) {
                        a.namespace && a.relatedTarget !== this && (this.suppress([c]),
                        f[c].apply(this, [].slice.call(arguments, 1)),
                        this.release([c]))
                    }, f))
                })),
                "string" == typeof b && "_" !== b.charAt(0) && f[b].apply(f, c)
            })
        }
        ,
        a.fn.owlCarousel.Constructor = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b,
            this._interval = null,
            this._visible = null,
            this._handlers = {
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoRefresh && this.watch()
                }, this)
            },
            this._core.options = a.extend({}, e.Defaults, this._core.options),
            this._core.$element.on(this._handlers)
        };
        e.Defaults = {
            autoRefresh: !0,
            autoRefreshInterval: 500
        },
        e.prototype.watch = function() {
            this._interval || (this._visible = this._core.$element.is(":visible"),
            this._interval = b.setInterval(a.proxy(this.refresh, this), this._core.settings.autoRefreshInterval))
        }
        ,
        e.prototype.refresh = function() {
            this._core.$element.is(":visible") !== this._visible && (this._visible = !this._visible,
            this._core.$element.toggleClass("owl-hidden", !this._visible),
            this._visible && this._core.invalidate("width") && this._core.refresh())
        }
        ,
        e.prototype.destroy = function() {
            var a, c;
            b.clearInterval(this._interval);
            for (a in this._handlers)
                this._core.$element.off(a, this._handlers[a]);
            for (c in Object.getOwnPropertyNames(this))
                "function" != typeof this[c] && (this[c] = null)
        }
        ,
        a.fn.owlCarousel.Constructor.Plugins.AutoRefresh = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b,
            this._loaded = [],
            this._handlers = {
                "initialized.owl.carousel change.owl.carousel resized.owl.carousel": a.proxy(function(b) {
                    if (b.namespace && this._core.settings && this._core.settings.lazyLoad && (b.property && "position" == b.property.name || "initialized" == b.type))
                        for (var c = this._core.settings, e = c.center && Math.ceil(c.items / 2) || c.items, f = c.center && e * -1 || 0, g = (b.property && b.property.value !== d ? b.property.value : this._core.current()) + f, h = this._core.clones().length, i = a.proxy(function(a, b) {
                            this.load(b)
                        }, this); f++ < e; )
                            this.load(h / 2 + this._core.relative(g)),
                            h && a.each(this._core.clones(this._core.relative(g)), i),
                            g++
                }, this)
            },
            this._core.options = a.extend({}, e.Defaults, this._core.options),
            this._core.$element.on(this._handlers)
        };
        e.Defaults = {
            lazyLoad: !1
        },
        e.prototype.load = function(c) {
            var d = this._core.$stage.children().eq(c)
              , e = d && d.find(".owl-lazy");
            !e || a.inArray(d.get(0), this._loaded) > -1 || (e.each(a.proxy(function(c, d) {
                var e, f = a(d), g = b.devicePixelRatio > 1 && f.attr("data-src-retina") || f.attr("data-src");
                this._core.trigger("load", {
                    element: f,
                    url: g
                }, "lazy"),
                f.is("img") ? f.one("load.owl.lazy", a.proxy(function() {
                    f.css("opacity", 1),
                    this._core.trigger("loaded", {
                        element: f,
                        url: g
                    }, "lazy")
                }, this)).attr("src", g) : (e = new Image,
                e.onload = a.proxy(function() {
                    f.css({
                        "background-image": 'url("' + g + '")',
                        opacity: "1"
                    }),
                    this._core.trigger("loaded", {
                        element: f,
                        url: g
                    }, "lazy")
                }, this),
                e.src = g)
            }, this)),
            this._loaded.push(d.get(0)))
        }
        ,
        e.prototype.destroy = function() {
            var a, b;
            for (a in this.handlers)
                this._core.$element.off(a, this.handlers[a]);
            for (b in Object.getOwnPropertyNames(this))
                "function" != typeof this[b] && (this[b] = null)
        }
        ,
        a.fn.owlCarousel.Constructor.Plugins.Lazy = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b,
            this._handlers = {
                "initialized.owl.carousel refreshed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoHeight && this.update()
                }, this),
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoHeight && "position" == a.property.name && this.update()
                }, this),
                "loaded.owl.lazy": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoHeight && a.element.closest("." + this._core.settings.itemClass).index() === this._core.current() && this.update()
                }, this)
            },
            this._core.options = a.extend({}, e.Defaults, this._core.options),
            this._core.$element.on(this._handlers)
        };
        e.Defaults = {
            autoHeight: !1,
            autoHeightClass: "owl-height"
        },
        e.prototype.update = function() {
            var b = this._core._current
              , c = b + this._core.settings.items
              , d = this._core.$stage.children().toArray().slice(b, c)
              , e = []
              , f = 0;
            a.each(d, function(b, c) {
                e.push(a(c).height())
            }),
            f = Math.max.apply(null, e),
            this._core.$stage.parent().height(f).addClass(this._core.settings.autoHeightClass)
        }
        ,
        e.prototype.destroy = function() {
            var a, b;
            for (a in this._handlers)
                this._core.$element.off(a, this._handlers[a]);
            for (b in Object.getOwnPropertyNames(this))
                "function" != typeof this[b] && (this[b] = null)
        }
        ,
        a.fn.owlCarousel.Constructor.Plugins.AutoHeight = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b,
            this._videos = {},
            this._playing = null,
            this._handlers = {
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.register({
                        type: "state",
                        name: "playing",
                        tags: ["interacting"]
                    })
                }, this),
                "resize.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.video && this.isInFullScreen() && a.preventDefault()
                }, this),
                "refreshed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.is("resizing") && this._core.$stage.find(".cloned .owl-video-frame").remove()
                }, this),
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && "position" === a.property.name && this._playing && this.stop()
                }, this),
                "prepared.owl.carousel": a.proxy(function(b) {
                    if (b.namespace) {
                        var c = a(b.content).find(".owl-video");
                        c.length && (c.css("display", "none"),
                        this.fetch(c, a(b.content)))
                    }
                }, this)
            },
            this._core.options = a.extend({}, e.Defaults, this._core.options),
            this._core.$element.on(this._handlers),
            this._core.$element.on("click.owl.video", ".owl-video-play-icon", a.proxy(function(a) {
                this.play(a)
            }, this))
        };
        e.Defaults = {
            video: !1,
            videoHeight: !1,
            videoWidth: !1
        },
        e.prototype.fetch = function(a, b) {
            var c = function() {
                return a.attr("data-vimeo-id") ? "vimeo" : a.attr("data-vzaar-id") ? "vzaar" : "youtube"
            }()
              , d = a.attr("data-vimeo-id") || a.attr("data-youtube-id") || a.attr("data-vzaar-id")
              , e = a.attr("data-width") || this._core.settings.videoWidth
              , f = a.attr("data-height") || this._core.settings.videoHeight
              , g = a.attr("href");
            if (!g)
                throw new Error("Missing video URL.");
            if (d = g.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/),
            d[3].indexOf("youtu") > -1)
                c = "youtube";
            else if (d[3].indexOf("vimeo") > -1)
                c = "vimeo";
            else {
                if (!(d[3].indexOf("vzaar") > -1))
                    throw new Error("Video URL not supported.");
                c = "vzaar"
            }
            d = d[6],
            this._videos[g] = {
                type: c,
                id: d,
                width: e,
                height: f
            },
            b.attr("data-video", g),
            this.thumbnail(a, this._videos[g])
        }
        ,
        e.prototype.thumbnail = function(b, c) {
            var d, e, f, g = c.width && c.height ? 'style="width:' + c.width + "px;height:" + c.height + 'px;"' : "", h = b.find("img"), i = "src", j = "", k = this._core.settings, l = function(a) {
                e = '<div class="owl-video-play-icon"></div>',
                d = k.lazyLoad ? '<div class="owl-video-tn ' + j + '" ' + i + '="' + a + '"></div>' : '<div class="owl-video-tn" style="opacity:1;background-image:url(' + a + ')"></div>',
                b.after(d),
                b.after(e)
            };
            if (b.wrap('<div class="owl-video-wrapper"' + g + "></div>"),
            this._core.settings.lazyLoad && (i = "data-src",
            j = "owl-lazy"),
            h.length)
                return l(h.attr(i)),
                h.remove(),
                !1;
            "youtube" === c.type ? (f = "//img.youtube.com/vi/" + c.id + "/hqdefault.jpg",
            l(f)) : "vimeo" === c.type ? a.ajax({
                type: "GET",
                url: "//vimeo.com/api/v2/video/" + c.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(a) {
                    f = a[0].thumbnail_large,
                    l(f)
                }
            }) : "vzaar" === c.type && a.ajax({
                type: "GET",
                url: "//vzaar.com/api/videos/" + c.id + ".json",
                jsonp: "callback",
                dataType: "jsonp",
                success: function(a) {
                    f = a.framegrab_url,
                    l(f)
                }
            })
        }
        ,
        e.prototype.stop = function() {
            this._core.trigger("stop", null, "video"),
            this._playing.find(".owl-video-frame").remove(),
            this._playing.removeClass("owl-video-playing"),
            this._playing = null,
            this._core.leave("playing"),
            this._core.trigger("stopped", null, "video")
        }
        ,
        e.prototype.play = function(b) {
            var c, d = a(b.target), e = d.closest("." + this._core.settings.itemClass), f = this._videos[e.attr("data-video")], g = f.width || "100%", h = f.height || this._core.$stage.height();
            this._playing || (this._core.enter("playing"),
            this._core.trigger("play", null, "video"),
            e = this._core.items(this._core.relative(e.index())),
            this._core.reset(e.index()),
            "youtube" === f.type ? c = '<iframe width="' + g + '" height="' + h + '" src="//www.youtube.com/embed/' + f.id + "?autoplay=1&rel=0&v=" + f.id + '" frameborder="0" allowfullscreen></iframe>' : "vimeo" === f.type ? c = '<iframe src="//player.vimeo.com/video/' + f.id + '?autoplay=1" width="' + g + '" height="' + h + '" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>' : "vzaar" === f.type && (c = '<iframe frameborder="0"height="' + h + '"width="' + g + '" allowfullscreen mozallowfullscreen webkitAllowFullScreen src="//view.vzaar.com/' + f.id + '/player?autoplay=true"></iframe>'),
            a('<div class="owl-video-frame">' + c + "</div>").insertAfter(e.find(".owl-video")),
            this._playing = e.addClass("owl-video-playing"))
        }
        ,
        e.prototype.isInFullScreen = function() {
            var b = c.fullscreenElement || c.mozFullScreenElement || c.webkitFullscreenElement;
            return b && a(b).parent().hasClass("owl-video-frame")
        }
        ,
        e.prototype.destroy = function() {
            var a, b;
            this._core.$element.off("click.owl.video");
            for (a in this._handlers)
                this._core.$element.off(a, this._handlers[a]);
            for (b in Object.getOwnPropertyNames(this))
                "function" != typeof this[b] && (this[b] = null)
        }
        ,
        a.fn.owlCarousel.Constructor.Plugins.Video = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this.core = b,
            this.core.options = a.extend({}, e.Defaults, this.core.options),
            this.swapping = !0,
            this.previous = d,
            this.next = d,
            this.handlers = {
                "change.owl.carousel": a.proxy(function(a) {
                    a.namespace && "position" == a.property.name && (this.previous = this.core.current(),
                    this.next = a.property.value)
                }, this),
                "drag.owl.carousel dragged.owl.carousel translated.owl.carousel": a.proxy(function(a) {
                    a.namespace && (this.swapping = "translated" == a.type)
                }, this),
                "translate.owl.carousel": a.proxy(function(a) {
                    a.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn) && this.swap()
                }, this)
            },
            this.core.$element.on(this.handlers)
        };
        e.Defaults = {
            animateOut: !1,
            animateIn: !1
        },
        e.prototype.swap = function() {
            if (1 === this.core.settings.items && a.support.animation && a.support.transition) {
                this.core.speed(0);
                var b, c = a.proxy(this.clear, this), d = this.core.$stage.children().eq(this.previous), e = this.core.$stage.children().eq(this.next), f = this.core.settings.animateIn, g = this.core.settings.animateOut;
                this.core.current() !== this.previous && (g && (b = this.core.coordinates(this.previous) - this.core.coordinates(this.next),
                d.one(a.support.animation.end, c).css({
                    left: b + "px"
                }).addClass("animated owl-animated-out").addClass(g)),
                f && e.one(a.support.animation.end, c).addClass("animated owl-animated-in").addClass(f))
            }
        }
        ,
        e.prototype.clear = function(b) {
            a(b.target).css({
                left: ""
            }).removeClass("animated owl-animated-out owl-animated-in").removeClass(this.core.settings.animateIn).removeClass(this.core.settings.animateOut),
            this.core.onTransitionEnd()
        }
        ,
        e.prototype.destroy = function() {
            var a, b;
            for (a in this.handlers)
                this.core.$element.off(a, this.handlers[a]);
            for (b in Object.getOwnPropertyNames(this))
                "function" != typeof this[b] && (this[b] = null)
        }
        ,
        a.fn.owlCarousel.Constructor.Plugins.Animate = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        var e = function(b) {
            this._core = b,
            this._timeout = null,
            this._paused = !1,
            this._handlers = {
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && "settings" === a.property.name ? this._core.settings.autoplay ? this.play() : this.stop() : a.namespace && "position" === a.property.name && this._core.settings.autoplay && this._setAutoPlayInterval()
                }, this),
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.autoplay && this.play()
                }, this),
                "play.owl.autoplay": a.proxy(function(a, b, c) {
                    a.namespace && this.play(b, c)
                }, this),
                "stop.owl.autoplay": a.proxy(function(a) {
                    a.namespace && this.stop()
                }, this),
                "mouseover.owl.autoplay": a.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "mouseleave.owl.autoplay": a.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.play()
                }, this),
                "touchstart.owl.core": a.proxy(function() {
                    this._core.settings.autoplayHoverPause && this._core.is("rotating") && this.pause()
                }, this),
                "touchend.owl.core": a.proxy(function() {
                    this._core.settings.autoplayHoverPause && this.play()
                }, this)
            },
            this._core.$element.on(this._handlers),
            this._core.options = a.extend({}, e.Defaults, this._core.options)
        };
        e.Defaults = {
            autoplay: !1,
            autoplayTimeout: 5e3,
            autoplayHoverPause: !1,
            autoplaySpeed: !1
        },
        e.prototype.play = function(a, b) {
            this._paused = !1,
            this._core.is("rotating") || (this._core.enter("rotating"),
            this._setAutoPlayInterval())
        }
        ,
        e.prototype._getNextTimeout = function(d, e) {
            return this._timeout && b.clearTimeout(this._timeout),
            b.setTimeout(a.proxy(function() {
                this._paused || this._core.is("busy") || this._core.is("interacting") || c.hidden || this._core.next(e || this._core.settings.autoplaySpeed)
            }, this), d || this._core.settings.autoplayTimeout)
        }
        ,
        e.prototype._setAutoPlayInterval = function() {
            this._timeout = this._getNextTimeout()
        }
        ,
        e.prototype.stop = function() {
            this._core.is("rotating") && (b.clearTimeout(this._timeout),
            this._core.leave("rotating"))
        }
        ,
        e.prototype.pause = function() {
            this._core.is("rotating") && (this._paused = !0)
        }
        ,
        e.prototype.destroy = function() {
            var a, b;
            this.stop();
            for (a in this._handlers)
                this._core.$element.off(a, this._handlers[a]);
            for (b in Object.getOwnPropertyNames(this))
                "function" != typeof this[b] && (this[b] = null)
        }
        ,
        a.fn.owlCarousel.Constructor.Plugins.autoplay = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        "use strict";
        var e = function(b) {
            this._core = b,
            this._initialized = !1,
            this._pages = [],
            this._controls = {},
            this._templates = [],
            this.$element = this._core.$element,
            this._overrides = {
                next: this._core.next,
                prev: this._core.prev,
                to: this._core.to
            },
            this._handlers = {
                "prepared.owl.carousel": a.proxy(function(b) {
                    b.namespace && this._core.settings.dotsData && this._templates.push('<div class="' + this._core.settings.dotClass + '">' + a(b.content).find("[data-dot]").addBack("[data-dot]").attr("data-dot") + "</div>")
                }, this),
                "added.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 0, this._templates.pop())
                }, this),
                "remove.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._core.settings.dotsData && this._templates.splice(a.position, 1)
                }, this),
                "changed.owl.carousel": a.proxy(function(a) {
                    a.namespace && "position" == a.property.name && this.draw()
                }, this),
                "initialized.owl.carousel": a.proxy(function(a) {
                    a.namespace && !this._initialized && (this._core.trigger("initialize", null, "navigation"),
                    this.initialize(),
                    this.update(),
                    this.draw(),
                    this._initialized = !0,
                    this._core.trigger("initialized", null, "navigation"))
                }, this),
                "refreshed.owl.carousel": a.proxy(function(a) {
                    a.namespace && this._initialized && (this._core.trigger("refresh", null, "navigation"),
                    this.update(),
                    this.draw(),
                    this._core.trigger("refreshed", null, "navigation"))
                }, this)
            },
            this._core.options = a.extend({}, e.Defaults, this._core.options),
            this.$element.on(this._handlers)
        };
        e.Defaults = {
            nav: !1,
            navText: ["prev", "next"],
            navSpeed: !1,
            navElement: "div",
            navContainer: !1,
            navContainerClass: "owl-nav",
            navClass: ["owl-prev", "owl-next"],
            slideBy: 1,
            dotClass: "owl-dot",
            dotsClass: "owl-dots",
            dots: !0,
            dotsEach: !1,
            dotsData: !1,
            dotsSpeed: !1,
            dotsContainer: !1
        },
        e.prototype.initialize = function() {
            var b, c = this._core.settings;
            this._controls.$relative = (c.navContainer ? a(c.navContainer) : a("<div>").addClass(c.navContainerClass).appendTo(this.$element)).addClass("disabled"),
            this._controls.$previous = a("<" + c.navElement + ">").addClass(c.navClass[0]).html(c.navText[0]).prependTo(this._controls.$relative).on("click", a.proxy(function(a) {
                this.prev(c.navSpeed)
            }, this)),
            this._controls.$next = a("<" + c.navElement + ">").addClass(c.navClass[1]).html(c.navText[1]).appendTo(this._controls.$relative).on("click", a.proxy(function(a) {
                this.next(c.navSpeed)
            }, this)),
            c.dotsData || (this._templates = [a("<div>").addClass(c.dotClass).append(a("<span>")).prop("outerHTML")]),
            this._controls.$absolute = (c.dotsContainer ? a(c.dotsContainer) : a("<div>").addClass(c.dotsClass).appendTo(this.$element)).addClass("disabled"),
            this._controls.$absolute.on("click", "div", a.proxy(function(b) {
                var d = a(b.target).parent().is(this._controls.$absolute) ? a(b.target).index() : a(b.target).parent().index();
                b.preventDefault(),
                this.to(d, c.dotsSpeed)
            }, this));
            for (b in this._overrides)
                this._core[b] = a.proxy(this[b], this)
        }
        ,
        e.prototype.destroy = function() {
            var a, b, c, d;
            for (a in this._handlers)
                this.$element.off(a, this._handlers[a]);
            for (b in this._controls)
                this._controls[b].remove();
            for (d in this.overides)
                this._core[d] = this._overrides[d];
            for (c in Object.getOwnPropertyNames(this))
                "function" != typeof this[c] && (this[c] = null)
        }
        ,
        e.prototype.update = function() {
            var a, b, c, d = this._core.clones().length / 2, e = d + this._core.items().length, f = this._core.maximum(!0), g = this._core.settings, h = g.center || g.autoWidth || g.dotsData ? 1 : g.dotsEach || g.items;
            if ("page" !== g.slideBy && (g.slideBy = Math.min(g.slideBy, g.items)),
            g.dots || "page" == g.slideBy)
                for (this._pages = [],
                a = d,
                b = 0,
                c = 0; a < e; a++) {
                    if (b >= h || 0 === b) {
                        if (this._pages.push({
                            start: Math.min(f, a - d),
                            end: a - d + h - 1
                        }),
                        Math.min(f, a - d) === f)
                            break;
                        b = 0,
                        ++c
                    }
                    b += this._core.mergers(this._core.relative(a))
                }
        }
        ,
        e.prototype.draw = function() {
            var b, c = this._core.settings, d = this._core.items().length <= c.items, e = this._core.relative(this._core.current()), f = c.loop || c.rewind;
            this._controls.$relative.toggleClass("disabled", !c.nav || d),
            c.nav && (this._controls.$previous.toggleClass("disabled", !f && e <= this._core.minimum(!0)),
            this._controls.$next.toggleClass("disabled", !f && e >= this._core.maximum(!0))),
            this._controls.$absolute.toggleClass("disabled", !c.dots || d),
            c.dots && (b = this._pages.length - this._controls.$absolute.children().length,
            c.dotsData && 0 !== b ? this._controls.$absolute.html(this._templates.join("")) : b > 0 ? this._controls.$absolute.append(new Array(b + 1).join(this._templates[0])) : b < 0 && this._controls.$absolute.children().slice(b).remove(),
            this._controls.$absolute.find(".active").removeClass("active"),
            this._controls.$absolute.children().eq(a.inArray(this.current(), this._pages)).addClass("active"))
        }
        ,
        e.prototype.onTrigger = function(b) {
            var c = this._core.settings;
            b.page = {
                index: a.inArray(this.current(), this._pages),
                count: this._pages.length,
                size: c && (c.center || c.autoWidth || c.dotsData ? 1 : c.dotsEach || c.items)
            }
        }
        ,
        e.prototype.current = function() {
            var b = this._core.relative(this._core.current());
            return a.grep(this._pages, a.proxy(function(a, c) {
                return a.start <= b && a.end >= b
            }, this)).pop()
        }
        ,
        e.prototype.getPosition = function(b) {
            var c, d, e = this._core.settings;
            return "page" == e.slideBy ? (c = a.inArray(this.current(), this._pages),
            d = this._pages.length,
            b ? ++c : --c,
            c = this._pages[(c % d + d) % d].start) : (c = this._core.relative(this._core.current()),
            d = this._core.items().length,
            b ? c += e.slideBy : c -= e.slideBy),
            c
        }
        ,
        e.prototype.next = function(b) {
            a.proxy(this._overrides.to, this._core)(this.getPosition(!0), b)
        }
        ,
        e.prototype.prev = function(b) {
            a.proxy(this._overrides.to, this._core)(this.getPosition(!1), b)
        }
        ,
        e.prototype.to = function(b, c, d) {
            var e;
            !d && this._pages.length ? (e = this._pages.length,
            a.proxy(this._overrides.to, this._core)(this._pages[(b % e + e) % e].start, c)) : a.proxy(this._overrides.to, this._core)(b, c)
        }
        ,
        a.fn.owlCarousel.Constructor.Plugins.Navigation = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        "use strict";
        var e = function(c) {
            this._core = c,
            this._hashes = {},
            this.$element = this._core.$element,
            this._handlers = {
                "initialized.owl.carousel": a.proxy(function(c) {
                    c.namespace && "URLHash" === this._core.settings.startPosition && a(b).trigger("hashchange.owl.navigation")
                }, this),
                "prepared.owl.carousel": a.proxy(function(b) {
                    if (b.namespace) {
                        var c = a(b.content).find("[data-hash]").addBack("[data-hash]").attr("data-hash");
                        if (!c)
                            return;
                        this._hashes[c] = b.content
                    }
                }, this),
                "changed.owl.carousel": a.proxy(function(c) {
                    if (c.namespace && "position" === c.property.name) {
                        var d = this._core.items(this._core.relative(this._core.current()))
                          , e = a.map(this._hashes, function(a, b) {
                            return a === d ? b : null
                        }).join();
                        if (!e || b.location.hash.slice(1) === e)
                            return;
                        b.location.hash = e
                    }
                }, this)
            },
            this._core.options = a.extend({}, e.Defaults, this._core.options),
            this.$element.on(this._handlers),
            a(b).on("hashchange.owl.navigation", a.proxy(function(a) {
                var c = b.location.hash.substring(1)
                  , e = this._core.$stage.children()
                  , f = this._hashes[c] && e.index(this._hashes[c]);
                f !== d && f !== this._core.current() && this._core.to(this._core.relative(f), !1, !0)
            }, this))
        };
        e.Defaults = {
            URLhashListener: !1
        },
        e.prototype.destroy = function() {
            var c, d;
            a(b).off("hashchange.owl.navigation");
            for (c in this._handlers)
                this._core.$element.off(c, this._handlers[c]);
            for (d in Object.getOwnPropertyNames(this))
                "function" != typeof this[d] && (this[d] = null)
        }
        ,
        a.fn.owlCarousel.Constructor.Plugins.Hash = e
    }(window.Zepto || window.jQuery, window, document),
    function(a, b, c, d) {
        function e(b, c) {
            var e = !1
              , f = b.charAt(0).toUpperCase() + b.slice(1);
            return a.each((b + " " + h.join(f + " ") + f).split(" "), function(a, b) {
                if (g[b] !== d)
                    return e = !c || b,
                    !1
            }),
            e
        }
        function f(a) {
            return e(a, !0)
        }
        var g = a("<support>").get(0).style
          , h = "Webkit Moz O ms".split(" ")
          , i = {
            transition: {
                end: {
                    WebkitTransition: "webkitTransitionEnd",
                    MozTransition: "transitionend",
                    OTransition: "oTransitionEnd",
                    transition: "transitionend"
                }
            },
            animation: {
                end: {
                    WebkitAnimation: "webkitAnimationEnd",
                    MozAnimation: "animationend",
                    OAnimation: "oAnimationEnd",
                    animation: "animationend"
                }
            }
        }
          , j = {
            csstransforms: function() {
                return !!e("transform")
            },
            csstransforms3d: function() {
                return !!e("perspective")
            },
            csstransitions: function() {
                return !!e("transition")
            },
            cssanimations: function() {
                return !!e("animation")
            }
        };
        j.csstransitions() && (a.support.transition = new String(f("transition")),
        a.support.transition.end = i.transition.end[a.support.transition]),
        j.cssanimations() && (a.support.animation = new String(f("animation")),
        a.support.animation.end = i.animation.end[a.support.animation]),
        j.csstransforms() && (a.support.transform = new String(f("transform")),
        a.support.transform3d = j.csstransforms3d())
    }(window.Zepto || window.jQuery, window, document);
    
    /*!
     * Bootstrap v3.3.7 (http://getbootstrap.com)
     * Copyright 2011-2016 Twitter, Inc.
     * Licensed under the MIT license
     */
    if ("undefined" == typeof jQuery)
        throw new Error("Bootstrap's JavaScript requires jQuery");
    +function(a) {
        "use strict";
        var b = a.fn.jquery.split(" ")[0].split(".");
        if (b[0] < 2 && b[1] < 9 || 1 == b[0] && 9 == b[1] && b[2] < 1 || b[0] > 3)
            throw new Error("Bootstrap's JavaScript requires jQuery version 1.9.1 or higher, but lower than version 4")
    }(jQuery),
    +function(a) {
        "use strict";
        function b() {
            var a = document.createElement("bootstrap")
              , b = {
                WebkitTransition: "webkitTransitionEnd",
                MozTransition: "transitionend",
                OTransition: "oTransitionEnd otransitionend",
                transition: "transitionend"
            };
            for (var c in b)
                if (void 0 !== a.style[c])
                    return {
                        end: b[c]
                    };
            return !1
        }
        a.fn.emulateTransitionEnd = function(b) {
            var c = !1
              , d = this;
            a(this).one("bsTransitionEnd", function() {
                c = !0
            });
            var e = function() {
                c || a(d).trigger(a.support.transition.end)
            };
            return setTimeout(e, b),
            this
        }
        ,
        a(function() {
            a.support.transition = b(),
            a.support.transition && (a.event.special.bsTransitionEnd = {
                bindType: a.support.transition.end,
                delegateType: a.support.transition.end,
                handle: function(b) {
                    if (a(b.target).is(this))
                        return b.handleObj.handler.apply(this, arguments)
                }
            })
        })
    }(jQuery),
    +function(a) {
        "use strict";
        function b(b) {
            return this.each(function() {
                var c = a(this)
                  , e = c.data("bs.alert");
                e || c.data("bs.alert", e = new d(this)),
                "string" == typeof b && e[b].call(c)
            })
        }
        var c = '[data-dismiss="alert"]'
          , d = function(b) {
            a(b).on("click", c, this.close)
        };
        d.VERSION = "3.3.7",
        d.TRANSITION_DURATION = 150,
        d.prototype.close = function(b) {
            function c() {
                g.detach().trigger("closed.bs.alert").remove()
            }
            var e = a(this)
              , f = e.attr("data-target");
            f || (f = e.attr("href"),
            f = f && f.replace(/.*(?=#[^\s]*$)/, ""));
            var g = a("#" === f ? [] : f);
            b && b.preventDefault(),
            g.length || (g = e.closest(".alert")),
            g.trigger(b = a.Event("close.bs.alert")),
            b.isDefaultPrevented() || (g.removeClass("in"),
            a.support.transition && g.hasClass("fade") ? g.one("bsTransitionEnd", c).emulateTransitionEnd(d.TRANSITION_DURATION) : c())
        }
        ;
        var e = a.fn.alert;
        a.fn.alert = b,
        a.fn.alert.Constructor = d,
        a.fn.alert.noConflict = function() {
            return a.fn.alert = e,
            this
        }
        ,
        a(document).on("click.bs.alert.data-api", c, d.prototype.close)
    }(jQuery),
    +function(a) {
        "use strict";
        function b(b) {
            return this.each(function() {
                var d = a(this)
                  , e = d.data("bs.button")
                  , f = "object" == typeof b && b;
                e || d.data("bs.button", e = new c(this,f)),
                "toggle" == b ? e.toggle() : b && e.setState(b)
            })
        }
        var c = function(b, d) {
            this.$element = a(b),
            this.options = a.extend({}, c.DEFAULTS, d),
            this.isLoading = !1
        };
        c.VERSION = "3.3.7",
        c.DEFAULTS = {
            loadingText: "loading..."
        },
        c.prototype.setState = function(b) {
            var c = "disabled"
              , d = this.$element
              , e = d.is("input") ? "val" : "html"
              , f = d.data();
            b += "Text",
            null == f.resetText && d.data("resetText", d[e]()),
            setTimeout(a.proxy(function() {
                d[e](null == f[b] ? this.options[b] : f[b]),
                "loadingText" == b ? (this.isLoading = !0,
                d.addClass(c).attr(c, c).prop(c, !0)) : this.isLoading && (this.isLoading = !1,
                d.removeClass(c).removeAttr(c).prop(c, !1))
            }, this), 0)
        }
        ,
        c.prototype.toggle = function() {
            var a = !0
              , b = this.$element.closest('[data-toggle="buttons"]');
            if (b.length) {
                var c = this.$element.find("input");
                "radio" == c.prop("type") ? (c.prop("checked") && (a = !1),
                b.find(".active").removeClass("active"),
                this.$element.addClass("active")) : "checkbox" == c.prop("type") && (c.prop("checked") !== this.$element.hasClass("active") && (a = !1),
                this.$element.toggleClass("active")),
                c.prop("checked", this.$element.hasClass("active")),
                a && c.trigger("change")
            } else
                this.$element.attr("aria-pressed", !this.$element.hasClass("active")),
                this.$element.toggleClass("active")
        }
        ;
        var d = a.fn.button;
        a.fn.button = b,
        a.fn.button.Constructor = c,
        a.fn.button.noConflict = function() {
            return a.fn.button = d,
            this
        }
        ,
        a(document).on("click.bs.button.data-api", '[data-toggle^="button"]', function(c) {
            var d = a(c.target).closest(".btn");
            b.call(d, "toggle"),
            a(c.target).is('input[type="radio"], input[type="checkbox"]') || (c.preventDefault(),
            d.is("input,button") ? d.trigger("focus") : d.find("input:visible,button:visible").first().trigger("focus"))
        }).on("focus.bs.button.data-api blur.bs.button.data-api", '[data-toggle^="button"]', function(b) {
            a(b.target).closest(".btn").toggleClass("focus", /^focus(in)?$/.test(b.type))
        })
    }(jQuery),
    +function(a) {
        "use strict";
        function b(b) {
            return this.each(function() {
                var d = a(this)
                  , e = d.data("bs.carousel")
                  , f = a.extend({}, c.DEFAULTS, d.data(), "object" == typeof b && b)
                  , g = "string" == typeof b ? b : f.slide;
                e || d.data("bs.carousel", e = new c(this,f)),
                "number" == typeof b ? e.to(b) : g ? e[g]() : f.interval && e.pause().cycle()
            })
        }
        var c = function(b, c) {
            this.$element = a(b),
            this.$indicators = this.$element.find(".carousel-indicators"),
            this.options = c,
            this.paused = null,
            this.sliding = null,
            this.interval = null,
            this.$active = null,
            this.$items = null,
            this.options.keyboard && this.$element.on("keydown.bs.carousel", a.proxy(this.keydown, this)),
            "hover" == this.options.pause && !("ontouchstart"in document.documentElement) && this.$element.on("mouseenter.bs.carousel", a.proxy(this.pause, this)).on("mouseleave.bs.carousel", a.proxy(this.cycle, this))
        };
        c.VERSION = "3.3.7",
        c.TRANSITION_DURATION = 600,
        c.DEFAULTS = {
            interval: 5e3,
            pause: "hover",
            wrap: !0,
            keyboard: !0
        },
        c.prototype.keydown = function(a) {
            if (!/input|textarea/i.test(a.target.tagName)) {
                switch (a.which) {
                case 37:
                    this.prev();
                    break;
                case 39:
                    this.next();
                    break;
                default:
                    return
                }
                a.preventDefault()
            }
        }
        ,
        c.prototype.cycle = function(b) {
            return b || (this.paused = !1),
            this.interval && clearInterval(this.interval),
            this.options.interval && !this.paused && (this.interval = setInterval(a.proxy(this.next, this), this.options.interval)),
            this
        }
        ,
        c.prototype.getItemIndex = function(a) {
            return this.$items = a.parent().children(".item"),
            this.$items.index(a || this.$active)
        }
        ,
        c.prototype.getItemForDirection = function(a, b) {
            var c = this.getItemIndex(b)
              , d = "prev" == a && 0 === c || "next" == a && c == this.$items.length - 1;
            if (d && !this.options.wrap)
                return b;
            var e = "prev" == a ? -1 : 1
              , f = (c + e) % this.$items.length;
            return this.$items.eq(f)
        }
        ,
        c.prototype.to = function(a) {
            var b = this
              , c = this.getItemIndex(this.$active = this.$element.find(".item.active"));
            if (!(a > this.$items.length - 1 || a < 0))
                return this.sliding ? this.$element.one("slid.bs.carousel", function() {
                    b.to(a)
                }) : c == a ? this.pause().cycle() : this.slide(a > c ? "next" : "prev", this.$items.eq(a))
        }
        ,
        c.prototype.pause = function(b) {
            return b || (this.paused = !0),
            this.$element.find(".next, .prev").length && a.support.transition && (this.$element.trigger(a.support.transition.end),
            this.cycle(!0)),
            this.interval = clearInterval(this.interval),
            this
        }
        ,
        c.prototype.next = function() {
            if (!this.sliding)
                return this.slide("next")
        }
        ,
        c.prototype.prev = function() {
            if (!this.sliding)
                return this.slide("prev")
        }
        ,
        c.prototype.slide = function(b, d) {
            var e = this.$element.find(".item.active")
              , f = d || this.getItemForDirection(b, e)
              , g = this.interval
              , h = "next" == b ? "left" : "right"
              , i = this;
            if (f.hasClass("active"))
                return this.sliding = !1;
            var j = f[0]
              , k = a.Event("slide.bs.carousel", {
                relatedTarget: j,
                direction: h
            });
            if (this.$element.trigger(k),
            !k.isDefaultPrevented()) {
                if (this.sliding = !0,
                g && this.pause(),
                this.$indicators.length) {
                    this.$indicators.find(".active").removeClass("active");
                    var l = a(this.$indicators.children()[this.getItemIndex(f)]);
                    l && l.addClass("active")
                }
                var m = a.Event("slid.bs.carousel", {
                    relatedTarget: j,
                    direction: h
                });
                return a.support.transition && this.$element.hasClass("slide") ? (f.addClass(b),
                f[0].offsetWidth,
                e.addClass(h),
                f.addClass(h),
                e.one("bsTransitionEnd", function() {
                    f.removeClass([b, h].join(" ")).addClass("active"),
                    e.removeClass(["active", h].join(" ")),
                    i.sliding = !1,
                    setTimeout(function() {
                        i.$element.trigger(m)
                    }, 0)
                }).emulateTransitionEnd(c.TRANSITION_DURATION)) : (e.removeClass("active"),
                f.addClass("active"),
                this.sliding = !1,
                this.$element.trigger(m)),
                g && this.cycle(),
                this
            }
        }
        ;
        var d = a.fn.carousel;
        a.fn.carousel = b,
        a.fn.carousel.Constructor = c,
        a.fn.carousel.noConflict = function() {
            return a.fn.carousel = d,
            this
        }
        ;
        var e = function(c) {
            var d, e = a(this), f = a(e.attr("data-target") || (d = e.attr("href")) && d.replace(/.*(?=#[^\s]+$)/, ""));
            if (f.hasClass("carousel")) {
                var g = a.extend({}, f.data(), e.data())
                  , h = e.attr("data-slide-to");
                h && (g.interval = !1),
                b.call(f, g),
                h && f.data("bs.carousel").to(h),
                c.preventDefault()
            }
        };
        a(document).on("click.bs.carousel.data-api", "[data-slide]", e).on("click.bs.carousel.data-api", "[data-slide-to]", e),
        a(window).on("load", function() {
            a('[data-ride="carousel"]').each(function() {
                var c = a(this);
                b.call(c, c.data())
            })
        })
    }(jQuery),
    +function(a) {
        "use strict";
        function b(b) {
            var c, d = b.attr("data-target") || (c = b.attr("href")) && c.replace(/.*(?=#[^\s]+$)/, "");
            return a(d)
        }
        function c(b) {
            return this.each(function() {
                var c = a(this)
                  , e = c.data("bs.collapse")
                  , f = a.extend({}, d.DEFAULTS, c.data(), "object" == typeof b && b);
                !e && f.toggle && /show|hide/.test(b) && (f.toggle = !1),
                e || c.data("bs.collapse", e = new d(this,f)),
                "string" == typeof b && e[b]()
            })
        }
        var d = function(b, c) {
            this.$element = a(b),
            this.options = a.extend({}, d.DEFAULTS, c),
            this.$trigger = a('[data-toggle="collapse"][href="#' + b.id + '"],[data-toggle="collapse"][data-target="#' + b.id + '"]'),
            this.transitioning = null,
            this.options.parent ? this.$parent = this.getParent() : this.addAriaAndCollapsedClass(this.$element, this.$trigger),
            this.options.toggle && this.toggle()
        };
        d.VERSION = "3.3.7",
        d.TRANSITION_DURATION = 350,
        d.DEFAULTS = {
            toggle: !0
        },
        d.prototype.dimension = function() {
            var a = this.$element.hasClass("width");
            return a ? "width" : "height"
        }
        ,
        d.prototype.show = function() {
            if (!this.transitioning && !this.$element.hasClass("in")) {
                var b, e = this.$parent && this.$parent.children(".panel").children(".in, .collapsing");
                if (!(e && e.length && (b = e.data("bs.collapse"),
                b && b.transitioning))) {
                    var f = a.Event("show.bs.collapse");
                    if (this.$element.trigger(f),
                    !f.isDefaultPrevented()) {
                        e && e.length && (c.call(e, "hide"),
                        b || e.data("bs.collapse", null));
                        var g = this.dimension();
                        this.$element.removeClass("collapse").addClass("collapsing")[g](0).attr("aria-expanded", !0),
                        this.$trigger.removeClass("collapsed").attr("aria-expanded", !0),
                        this.transitioning = 1;
                        var h = function() {
                            this.$element.removeClass("collapsing").addClass("collapse in")[g](""),
                            this.transitioning = 0,
                            this.$element.trigger("shown.bs.collapse")
                        };
                        if (!a.support.transition)
                            return h.call(this);
                        var i = a.camelCase(["scroll", g].join("-"));
                        this.$element.one("bsTransitionEnd", a.proxy(h, this)).emulateTransitionEnd(d.TRANSITION_DURATION)[g](this.$element[0][i])
                    }
                }
            }
        }
        ,
        d.prototype.hide = function() {
            if (!this.transitioning && this.$element.hasClass("in")) {
                var b = a.Event("hide.bs.collapse");
                if (this.$element.trigger(b),
                !b.isDefaultPrevented()) {
                    var c = this.dimension();
                    this.$element[c](this.$element[c]())[0].offsetHeight,
                    this.$element.addClass("collapsing").removeClass("collapse in").attr("aria-expanded", !1),
                    this.$trigger.addClass("collapsed").attr("aria-expanded", !1),
                    this.transitioning = 1;
                    var e = function() {
                        this.transitioning = 0,
                        this.$element.removeClass("collapsing").addClass("collapse").trigger("hidden.bs.collapse")
                    };
                    return a.support.transition ? void this.$element[c](0).one("bsTransitionEnd", a.proxy(e, this)).emulateTransitionEnd(d.TRANSITION_DURATION) : e.call(this)
                }
            }
        }
        ,
        d.prototype.toggle = function() {
            this[this.$element.hasClass("in") ? "hide" : "show"]()
        }
        ,
        d.prototype.getParent = function() {
            return a(this.options.parent).find('[data-toggle="collapse"][data-parent="' + this.options.parent + '"]').each(a.proxy(function(c, d) {
                var e = a(d);
                this.addAriaAndCollapsedClass(b(e), e)
            }, this)).end()
        }
        ,
        d.prototype.addAriaAndCollapsedClass = function(a, b) {
            var c = a.hasClass("in");
            a.attr("aria-expanded", c),
            b.toggleClass("collapsed", !c).attr("aria-expanded", c)
        }
        ;
        var e = a.fn.collapse;
        a.fn.collapse = c,
        a.fn.collapse.Constructor = d,
        a.fn.collapse.noConflict = function() {
            return a.fn.collapse = e,
            this
        }
        ,
        a(document).on("click.bs.collapse.data-api", '[data-toggle="collapse"]', function(d) {
            var e = a(this);
            e.attr("data-target") || d.preventDefault();
            var f = b(e)
              , g = f.data("bs.collapse")
              , h = g ? "toggle" : e.data();
            c.call(f, h)
        })
    }(jQuery),
    +function(a) {
        "use strict";
        function b(b) {
            var c = b.attr("data-target");
            c || (c = b.attr("href"),
            c = c && /#[A-Za-z]/.test(c) && c.replace(/.*(?=#[^\s]*$)/, ""));
            var d = c && a(c);
            return d && d.length ? d : b.parent()
        }
        function c(c) {
            c && 3 === c.which || (a(e).remove(),
            a(f).each(function() {
                var d = a(this)
                  , e = b(d)
                  , f = {
                    relatedTarget: this
                };
                e.hasClass("open") && (c && "click" == c.type && /input|textarea/i.test(c.target.tagName) && a.contains(e[0], c.target) || (e.trigger(c = a.Event("hide.bs.dropdown", f)),
                c.isDefaultPrevented() || (d.attr("aria-expanded", "false"),
                e.removeClass("open").trigger(a.Event("hidden.bs.dropdown", f)))))
            }))
        }
        function d(b) {
            return this.each(function() {
                var c = a(this)
                  , d = c.data("bs.dropdown");
                d || c.data("bs.dropdown", d = new g(this)),
                "string" == typeof b && d[b].call(c)
            })
        }
        var e = ".dropdown-backdrop"
          , f = '[data-toggle="dropdown"]'
          , g = function(b) {
            a(b).on("click.bs.dropdown", this.toggle)
        };
        g.VERSION = "3.3.7",
        g.prototype.toggle = function(d) {
            var e = a(this);
            if (!e.is(".disabled, :disabled")) {
                var f = b(e)
                  , g = f.hasClass("open");
                if (c(),
                !g) {
                    "ontouchstart"in document.documentElement && !f.closest(".navbar-nav").length && a(document.createElement("div")).addClass("dropdown-backdrop").insertAfter(a(this)).on("click", c);
                    var h = {
                        relatedTarget: this
                    };
                    if (f.trigger(d = a.Event("show.bs.dropdown", h)),
                    d.isDefaultPrevented())
                        return;
                    e.trigger("focus").attr("aria-expanded", "true"),
                    f.toggleClass("open").trigger(a.Event("shown.bs.dropdown", h))
                }
                return !1
            }
        }
        ,
        g.prototype.keydown = function(c) {
            if (/(38|40|27|32)/.test(c.which) && !/input|textarea/i.test(c.target.tagName)) {
                var d = a(this);
                if (c.preventDefault(),
                c.stopPropagation(),
                !d.is(".disabled, :disabled")) {
                    var e = b(d)
                      , g = e.hasClass("open");
                    if (!g && 27 != c.which || g && 27 == c.which)
                        return 27 == c.which && e.find(f).trigger("focus"),
                        d.trigger("click");
                    var h = " li:not(.disabled):visible a"
                      , i = e.find(".dropdown-menu" + h);
                    if (i.length) {
                        var j = i.index(c.target);
                        38 == c.which && j > 0 && j--,
                        40 == c.which && j < i.length - 1 && j++,
                        ~j || (j = 0),
                        i.eq(j).trigger("focus")
                    }
                }
            }
        }
        ;
        var h = a.fn.dropdown;
        a.fn.dropdown = d,
        a.fn.dropdown.Constructor = g,
        a.fn.dropdown.noConflict = function() {
            return a.fn.dropdown = h,
            this
        }
        ,
        a(document).on("click.bs.dropdown.data-api", c).on("click.bs.dropdown.data-api", ".dropdown form", function(a) {
            a.stopPropagation()
        }).on("click.bs.dropdown.data-api", f, g.prototype.toggle).on("keydown.bs.dropdown.data-api", f, g.prototype.keydown).on("keydown.bs.dropdown.data-api", ".dropdown-menu", g.prototype.keydown)
    }(jQuery),
    +function(a) {
        "use strict";
        function b(b, d) {
            return this.each(function() {
                var e = a(this)
                  , f = e.data("bs.modal")
                  , g = a.extend({}, c.DEFAULTS, e.data(), "object" == typeof b && b);
                f || e.data("bs.modal", f = new c(this,g)),
                "string" == typeof b ? f[b](d) : g.show && f.show(d)
            })
        }
        var c = function(b, c) {
            this.options = c,
            this.$body = a(document.body),
            this.$element = a(b),
            this.$dialog = this.$element.find(".modal-dialog"),
            this.$backdrop = null,
            this.isShown = null,
            this.originalBodyPad = null,
            this.scrollbarWidth = 0,
            this.ignoreBackdropClick = !1,
            this.options.remote && this.$element.find(".modal-content").load(this.options.remote, a.proxy(function() {
                this.$element.trigger("loaded.bs.modal")
            }, this))
        };
        c.VERSION = "3.3.7",
        c.TRANSITION_DURATION = 300,
        c.BACKDROP_TRANSITION_DURATION = 150,
        c.DEFAULTS = {
            backdrop: !0,
            keyboard: !0,
            show: !0
        },
        c.prototype.toggle = function(a) {
            return this.isShown ? this.hide() : this.show(a)
        }
        ,
        c.prototype.show = function(b) {
            var d = this
              , e = a.Event("show.bs.modal", {
                relatedTarget: b
            });
            this.$element.trigger(e),
            this.isShown || e.isDefaultPrevented() || (this.isShown = !0,
            this.checkScrollbar(),
            this.setScrollbar(),
            this.$body.addClass("modal-open"),
            this.escape(),
            this.resize(),
            this.$element.on("click.dismiss.bs.modal", '[data-dismiss="modal"]', a.proxy(this.hide, this)),
            this.$dialog.on("mousedown.dismiss.bs.modal", function() {
                d.$element.one("mouseup.dismiss.bs.modal", function(b) {
                    a(b.target).is(d.$element) && (d.ignoreBackdropClick = !0)
                })
            }),
            this.backdrop(function() {
                var e = a.support.transition && d.$element.hasClass("fade");
                d.$element.parent().length || d.$element.appendTo(d.$body),
                d.$element.show().scrollTop(0),
                d.adjustDialog(),
                e && d.$element[0].offsetWidth,
                d.$element.addClass("in"),
                d.enforceFocus();
                var f = a.Event("shown.bs.modal", {
                    relatedTarget: b
                });
                e ? d.$dialog.one("bsTransitionEnd", function() {
                    d.$element.trigger("focus").trigger(f)
                }).emulateTransitionEnd(c.TRANSITION_DURATION) : d.$element.trigger("focus").trigger(f)
            }))
        }
        ,
        c.prototype.hide = function(b) {
            b && b.preventDefault(),
            b = a.Event("hide.bs.modal"),
            this.$element.trigger(b),
            this.isShown && !b.isDefaultPrevented() && (this.isShown = !1,
            this.escape(),
            this.resize(),
            a(document).off("focusin.bs.modal"),
            this.$element.removeClass("in").off("click.dismiss.bs.modal").off("mouseup.dismiss.bs.modal"),
            this.$dialog.off("mousedown.dismiss.bs.modal"),
            a.support.transition && this.$element.hasClass("fade") ? this.$element.one("bsTransitionEnd", a.proxy(this.hideModal, this)).emulateTransitionEnd(c.TRANSITION_DURATION) : this.hideModal())
        }
        ,
        c.prototype.enforceFocus = function() {
            a(document).off("focusin.bs.modal").on("focusin.bs.modal", a.proxy(function(a) {
                document === a.target || this.$element[0] === a.target || this.$element.has(a.target).length || this.$element.trigger("focus")
            }, this))
        }
        ,
        c.prototype.escape = function() {
            this.isShown && this.options.keyboard ? this.$element.on("keydown.dismiss.bs.modal", a.proxy(function(a) {
                27 == a.which && this.hide()
            }, this)) : this.isShown || this.$element.off("keydown.dismiss.bs.modal")
        }
        ,
        c.prototype.resize = function() {
            this.isShown ? a(window).on("resize.bs.modal", a.proxy(this.handleUpdate, this)) : a(window).off("resize.bs.modal")
        }
        ,
        c.prototype.hideModal = function() {
            var a = this;
            this.$element.hide(),
            this.backdrop(function() {
                a.$body.removeClass("modal-open"),
                a.resetAdjustments(),
                a.resetScrollbar(),
                a.$element.trigger("hidden.bs.modal")
            })
        }
        ,
        c.prototype.removeBackdrop = function() {
            this.$backdrop && this.$backdrop.remove(),
            this.$backdrop = null
        }
        ,
        c.prototype.backdrop = function(b) {
            var d = this
              , e = this.$element.hasClass("fade") ? "fade" : "";
            if (this.isShown && this.options.backdrop) {
                var f = a.support.transition && e;
                if (this.$backdrop = a(document.createElement("div")).addClass("modal-backdrop " + e).appendTo(this.$body),
                this.$element.on("click.dismiss.bs.modal", a.proxy(function(a) {
                    return this.ignoreBackdropClick ? void (this.ignoreBackdropClick = !1) : void (a.target === a.currentTarget && ("static" == this.options.backdrop ? this.$element[0].focus() : this.hide()))
                }, this)),
                f && this.$backdrop[0].offsetWidth,
                this.$backdrop.addClass("in"),
                !b)
                    return;
                f ? this.$backdrop.one("bsTransitionEnd", b).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : b()
            } else if (!this.isShown && this.$backdrop) {
                this.$backdrop.removeClass("in");
                var g = function() {
                    d.removeBackdrop(),
                    b && b()
                };
                a.support.transition && this.$element.hasClass("fade") ? this.$backdrop.one("bsTransitionEnd", g).emulateTransitionEnd(c.BACKDROP_TRANSITION_DURATION) : g()
            } else
                b && b()
        }
        ,
        c.prototype.handleUpdate = function() {
            this.adjustDialog()
        }
        ,
        c.prototype.adjustDialog = function() {
            var a = this.$element[0].scrollHeight > document.documentElement.clientHeight;
            this.$element.css({
                paddingLeft: !this.bodyIsOverflowing && a ? this.scrollbarWidth : "",
                paddingRight: this.bodyIsOverflowing && !a ? this.scrollbarWidth : ""
            })
        }
        ,
        c.prototype.resetAdjustments = function() {
            this.$element.css({
                paddingLeft: "",
                paddingRight: ""
            })
        }
        ,
        c.prototype.checkScrollbar = function() {
            var a = window.innerWidth;
            if (!a) {
                var b = document.documentElement.getBoundingClientRect();
                a = b.right - Math.abs(b.left)
            }
            this.bodyIsOverflowing = document.body.clientWidth < a,
            this.scrollbarWidth = this.measureScrollbar()
        }
        ,
        c.prototype.setScrollbar = function() {
            var a = parseInt(this.$body.css("padding-right") || 0, 10);
            this.originalBodyPad = document.body.style.paddingRight || "",
            this.bodyIsOverflowing && this.$body.css("padding-right", a + this.scrollbarWidth)
        }
        ,
        c.prototype.resetScrollbar = function() {
            this.$body.css("padding-right", this.originalBodyPad)
        }
        ,
        c.prototype.measureScrollbar = function() {
            var a = document.createElement("div");
            a.className = "modal-scrollbar-measure",
            this.$body.append(a);
            var b = a.offsetWidth - a.clientWidth;
            return this.$body[0].removeChild(a),
            b
        }
        ;
        var d = a.fn.modal;
        a.fn.modal = b,
        a.fn.modal.Constructor = c,
        a.fn.modal.noConflict = function() {
            return a.fn.modal = d,
            this
        }
        ,
        a(document).on("click.bs.modal.data-api", '[data-toggle="modal"]', function(c) {
            var d = a(this)
              , e = d.attr("href")
              , f = a(d.attr("data-target") || e && e.replace(/.*(?=#[^\s]+$)/, ""))
              , g = f.data("bs.modal") ? "toggle" : a.extend({
                remote: !/#/.test(e) && e
            }, f.data(), d.data());
            d.is("a") && c.preventDefault(),
            f.one("show.bs.modal", function(a) {
                a.isDefaultPrevented() || f.one("hidden.bs.modal", function() {
                    d.is(":visible") && d.trigger("focus")
                })
            }),
            b.call(f, g, this)
        })
    }(jQuery),
    +function(a) {
        "use strict";
        function b(b) {
            return this.each(function() {
                var d = a(this)
                  , e = d.data("bs.tooltip")
                  , f = "object" == typeof b && b;
                !e && /destroy|hide/.test(b) || (e || d.data("bs.tooltip", e = new c(this,f)),
                "string" == typeof b && e[b]())
            })
        }
        var c = function(a, b) {
            this.type = null,
            this.options = null,
            this.enabled = null,
            this.timeout = null,
            this.hoverState = null,
            this.$element = null,
            this.inState = null,
            this.init("tooltip", a, b)
        };
        c.VERSION = "3.3.7",
        c.TRANSITION_DURATION = 150,
        c.DEFAULTS = {
            animation: !0,
            placement: "top",
            selector: !1,
            template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
            trigger: "hover focus",
            title: "",
            delay: 0,
            html: !1,
            container: !1,
            viewport: {
                selector: "body",
                padding: 0
            }
        },
        c.prototype.init = function(b, c, d) {
            if (this.enabled = !0,
            this.type = b,
            this.$element = a(c),
            this.options = this.getOptions(d),
            this.$viewport = this.options.viewport && a(a.isFunction(this.options.viewport) ? this.options.viewport.call(this, this.$element) : this.options.viewport.selector || this.options.viewport),
            this.inState = {
                click: !1,
                hover: !1,
                focus: !1
            },
            this.$element[0]instanceof document.constructor && !this.options.selector)
                throw new Error("`selector` option must be specified when initializing " + this.type + " on the window.document object!");
            for (var e = this.options.trigger.split(" "), f = e.length; f--; ) {
                var g = e[f];
                if ("click" == g)
                    this.$element.on("click." + this.type, this.options.selector, a.proxy(this.toggle, this));
                else if ("manual" != g) {
                    var h = "hover" == g ? "mouseenter" : "focusin"
                      , i = "hover" == g ? "mouseleave" : "focusout";
                    this.$element.on(h + "." + this.type, this.options.selector, a.proxy(this.enter, this)),
                    this.$element.on(i + "." + this.type, this.options.selector, a.proxy(this.leave, this))
                }
            }
            this.options.selector ? this._options = a.extend({}, this.options, {
                trigger: "manual",
                selector: ""
            }) : this.fixTitle()
        }
        ,
        c.prototype.getDefaults = function() {
            return c.DEFAULTS
        }
        ,
        c.prototype.getOptions = function(b) {
            return b = a.extend({}, this.getDefaults(), this.$element.data(), b),
            b.delay && "number" == typeof b.delay && (b.delay = {
                show: b.delay,
                hide: b.delay
            }),
            b
        }
        ,
        c.prototype.getDelegateOptions = function() {
            var b = {}
              , c = this.getDefaults();
            return this._options && a.each(this._options, function(a, d) {
                c[a] != d && (b[a] = d)
            }),
            b
        }
        ,
        c.prototype.enter = function(b) {
            var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
            return c || (c = new this.constructor(b.currentTarget,this.getDelegateOptions()),
            a(b.currentTarget).data("bs." + this.type, c)),
            b instanceof a.Event && (c.inState["focusin" == b.type ? "focus" : "hover"] = !0),
            c.tip().hasClass("in") || "in" == c.hoverState ? void (c.hoverState = "in") : (clearTimeout(c.timeout),
            c.hoverState = "in",
            c.options.delay && c.options.delay.show ? void (c.timeout = setTimeout(function() {
                "in" == c.hoverState && c.show()
            }, c.options.delay.show)) : c.show())
        }
        ,
        c.prototype.isInStateTrue = function() {
            for (var a in this.inState)
                if (this.inState[a])
                    return !0;
            return !1
        }
        ,
        c.prototype.leave = function(b) {
            var c = b instanceof this.constructor ? b : a(b.currentTarget).data("bs." + this.type);
            if (c || (c = new this.constructor(b.currentTarget,this.getDelegateOptions()),
            a(b.currentTarget).data("bs." + this.type, c)),
            b instanceof a.Event && (c.inState["focusout" == b.type ? "focus" : "hover"] = !1),
            !c.isInStateTrue())
                return clearTimeout(c.timeout),
                c.hoverState = "out",
                c.options.delay && c.options.delay.hide ? void (c.timeout = setTimeout(function() {
                    "out" == c.hoverState && c.hide()
                }, c.options.delay.hide)) : c.hide()
        }
        ,
        c.prototype.show = function() {
            var b = a.Event("show.bs." + this.type);
            if (this.hasContent() && this.enabled) {
                this.$element.trigger(b);
                var d = a.contains(this.$element[0].ownerDocument.documentElement, this.$element[0]);
                if (b.isDefaultPrevented() || !d)
                    return;
                var e = this
                  , f = this.tip()
                  , g = this.getUID(this.type);
                this.setContent(),
                f.attr("id", g),
                this.$element.attr("aria-describedby", g),
                this.options.animation && f.addClass("fade");
                var h = "function" == typeof this.options.placement ? this.options.placement.call(this, f[0], this.$element[0]) : this.options.placement
                  , i = /\s?auto?\s?/i
                  , j = i.test(h);
                j && (h = h.replace(i, "") || "top"),
                f.detach().css({
                    top: 0,
                    left: 0,
                    display: "block"
                }).addClass(h).data("bs." + this.type, this),
                this.options.container ? f.appendTo(this.options.container) : f.insertAfter(this.$element),
                this.$element.trigger("inserted.bs." + this.type);
                var k = this.getPosition()
                  , l = f[0].offsetWidth
                  , m = f[0].offsetHeight;
                if (j) {
                    var n = h
                      , o = this.getPosition(this.$viewport);
                    h = "bottom" == h && k.bottom + m > o.bottom ? "top" : "top" == h && k.top - m < o.top ? "bottom" : "right" == h && k.right + l > o.width ? "left" : "left" == h && k.left - l < o.left ? "right" : h,
                    f.removeClass(n).addClass(h)
                }
                var p = this.getCalculatedOffset(h, k, l, m);
                this.applyPlacement(p, h);
                var q = function() {
                    var a = e.hoverState;
                    e.$element.trigger("shown.bs." + e.type),
                    e.hoverState = null,
                    "out" == a && e.leave(e)
                };
                a.support.transition && this.$tip.hasClass("fade") ? f.one("bsTransitionEnd", q).emulateTransitionEnd(c.TRANSITION_DURATION) : q()
            }
        }
        ,
        c.prototype.applyPlacement = function(b, c) {
            var d = this.tip()
              , e = d[0].offsetWidth
              , f = d[0].offsetHeight
              , g = parseInt(d.css("margin-top"), 10)
              , h = parseInt(d.css("margin-left"), 10);
            isNaN(g) && (g = 0),
            isNaN(h) && (h = 0),
            b.top += g,
            b.left += h,
            a.offset.setOffset(d[0], a.extend({
                using: function(a) {
                    d.css({
                        top: Math.round(a.top),
                        left: Math.round(a.left)
                    })
                }
            }, b), 0),
            d.addClass("in");
            var i = d[0].offsetWidth
              , j = d[0].offsetHeight;
            "top" == c && j != f && (b.top = b.top + f - j);
            var k = this.getViewportAdjustedDelta(c, b, i, j);
            k.left ? b.left += k.left : b.top += k.top;
            var l = /top|bottom/.test(c)
              , m = l ? 2 * k.left - e + i : 2 * k.top - f + j
              , n = l ? "offsetWidth" : "offsetHeight";
            d.offset(b),
            this.replaceArrow(m, d[0][n], l)
        }
        ,
        c.prototype.replaceArrow = function(a, b, c) {
            this.arrow().css(c ? "left" : "top", 50 * (1 - a / b) + "%").css(c ? "top" : "left", "")
        }
        ,
        c.prototype.setContent = function() {
            var a = this.tip()
              , b = this.getTitle();
            a.find(".tooltip-inner")[this.options.html ? "html" : "text"](b),
            a.removeClass("fade in top bottom left right")
        }
        ,
        c.prototype.hide = function(b) {
            function d() {
                "in" != e.hoverState && f.detach(),
                e.$element && e.$element.removeAttr("aria-describedby").trigger("hidden.bs." + e.type),
                b && b()
            }
            var e = this
              , f = a(this.$tip)
              , g = a.Event("hide.bs." + this.type);
            if (this.$element.trigger(g),
            !g.isDefaultPrevented())
                return f.removeClass("in"),
                a.support.transition && f.hasClass("fade") ? f.one("bsTransitionEnd", d).emulateTransitionEnd(c.TRANSITION_DURATION) : d(),
                this.hoverState = null,
                this
        }
        ,
        c.prototype.fixTitle = function() {
            var a = this.$element;
            (a.attr("title") || "string" != typeof a.attr("data-original-title")) && a.attr("data-original-title", a.attr("title") || "").attr("title", "")
        }
        ,
        c.prototype.hasContent = function() {
            return this.getTitle()
        }
        ,
        c.prototype.getPosition = function(b) {
            b = b || this.$element;
            var c = b[0]
              , d = "BODY" == c.tagName
              , e = c.getBoundingClientRect();
            null == e.width && (e = a.extend({}, e, {
                width: e.right - e.left,
                height: e.bottom - e.top
            }));
            var f = window.SVGElement && c instanceof window.SVGElement
              , g = d ? {
                top: 0,
                left: 0
            } : f ? null : b.offset()
              , h = {
                scroll: d ? document.documentElement.scrollTop || document.body.scrollTop : b.scrollTop()
            }
              , i = d ? {
                width: a(window).width(),
                height: a(window).height()
            } : null;
            return a.extend({}, e, h, i, g)
        }
        ,
        c.prototype.getCalculatedOffset = function(a, b, c, d) {
            return "bottom" == a ? {
                top: b.top + b.height,
                left: b.left + b.width / 2 - c / 2
            } : "top" == a ? {
                top: b.top - d,
                left: b.left + b.width / 2 - c / 2
            } : "left" == a ? {
                top: b.top + b.height / 2 - d / 2,
                left: b.left - c
            } : {
                top: b.top + b.height / 2 - d / 2,
                left: b.left + b.width
            }
        }
        ,
        c.prototype.getViewportAdjustedDelta = function(a, b, c, d) {
            var e = {
                top: 0,
                left: 0
            };
            if (!this.$viewport)
                return e;
            var f = this.options.viewport && this.options.viewport.padding || 0
              , g = this.getPosition(this.$viewport);
            if (/right|left/.test(a)) {
                var h = b.top - f - g.scroll
                  , i = b.top + f - g.scroll + d;
                h < g.top ? e.top = g.top - h : i > g.top + g.height && (e.top = g.top + g.height - i)
            } else {
                var j = b.left - f
                  , k = b.left + f + c;
                j < g.left ? e.left = g.left - j : k > g.right && (e.left = g.left + g.width - k)
            }
            return e
        }
        ,
        c.prototype.getTitle = function() {
            var a, b = this.$element, c = this.options;
            return a = b.attr("data-original-title") || ("function" == typeof c.title ? c.title.call(b[0]) : c.title)
        }
        ,
        c.prototype.getUID = function(a) {
            do
                a += ~~(1e6 * Math.random());
            while (document.getElementById(a));
            return a
        }
        ,
        c.prototype.tip = function() {
            if (!this.$tip && (this.$tip = a(this.options.template),
            1 != this.$tip.length))
                throw new Error(this.type + " `template` option must consist of exactly 1 top-level element!");
            return this.$tip
        }
        ,
        c.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".tooltip-arrow")
        }
        ,
        c.prototype.enable = function() {
            this.enabled = !0
        }
        ,
        c.prototype.disable = function() {
            this.enabled = !1
        }
        ,
        c.prototype.toggleEnabled = function() {
            this.enabled = !this.enabled
        }
        ,
        c.prototype.toggle = function(b) {
            var c = this;
            b && (c = a(b.currentTarget).data("bs." + this.type),
            c || (c = new this.constructor(b.currentTarget,this.getDelegateOptions()),
            a(b.currentTarget).data("bs." + this.type, c))),
            b ? (c.inState.click = !c.inState.click,
            c.isInStateTrue() ? c.enter(c) : c.leave(c)) : c.tip().hasClass("in") ? c.leave(c) : c.enter(c)
        }
        ,
        c.prototype.destroy = function() {
            var a = this;
            clearTimeout(this.timeout),
            this.hide(function() {
                a.$element.off("." + a.type).removeData("bs." + a.type),
                a.$tip && a.$tip.detach(),
                a.$tip = null,
                a.$arrow = null,
                a.$viewport = null,
                a.$element = null
            })
        }
        ;
        var d = a.fn.tooltip;
        a.fn.tooltip = b,
        a.fn.tooltip.Constructor = c,
        a.fn.tooltip.noConflict = function() {
            return a.fn.tooltip = d,
            this
        }
    }(jQuery),
    +function(a) {
        "use strict";
        function b(b) {
            return this.each(function() {
                var d = a(this)
                  , e = d.data("bs.popover")
                  , f = "object" == typeof b && b;
                !e && /destroy|hide/.test(b) || (e || d.data("bs.popover", e = new c(this,f)),
                "string" == typeof b && e[b]())
            })
        }
        var c = function(a, b) {
            this.init("popover", a, b)
        };
        if (!a.fn.tooltip)
            throw new Error("Popover requires tooltip.js");
        c.VERSION = "3.3.7",
        c.DEFAULTS = a.extend({}, a.fn.tooltip.Constructor.DEFAULTS, {
            placement: "right",
            trigger: "click",
            content: "",
            template: '<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-title"></h3><div class="popover-content"></div></div>'
        }),
        c.prototype = a.extend({}, a.fn.tooltip.Constructor.prototype),
        c.prototype.constructor = c,
        c.prototype.getDefaults = function() {
            return c.DEFAULTS
        }
        ,
        c.prototype.setContent = function() {
            var a = this.tip()
              , b = this.getTitle()
              , c = this.getContent();
            a.find(".popover-title")[this.options.html ? "html" : "text"](b),
            a.find(".popover-content").children().detach().end()[this.options.html ? "string" == typeof c ? "html" : "append" : "text"](c),
            a.removeClass("fade top bottom left right in"),
            a.find(".popover-title").html() || a.find(".popover-title").hide()
        }
        ,
        c.prototype.hasContent = function() {
            return this.getTitle() || this.getContent()
        }
        ,
        c.prototype.getContent = function() {
            var a = this.$element
              , b = this.options;
            return a.attr("data-content") || ("function" == typeof b.content ? b.content.call(a[0]) : b.content)
        }
        ,
        c.prototype.arrow = function() {
            return this.$arrow = this.$arrow || this.tip().find(".arrow")
        }
        ;
        var d = a.fn.popover;
        a.fn.popover = b,
        a.fn.popover.Constructor = c,
        a.fn.popover.noConflict = function() {
            return a.fn.popover = d,
            this
        }
    }(jQuery),
    +function(a) {
        "use strict";
        function b(c, d) {
            this.$body = a(document.body),
            this.$scrollElement = a(a(c).is(document.body) ? window : c),
            this.options = a.extend({}, b.DEFAULTS, d),
            this.selector = (this.options.target || "") + " .nav li > a",
            this.offsets = [],
            this.targets = [],
            this.activeTarget = null,
            this.scrollHeight = 0,
            this.$scrollElement.on("scroll.bs.scrollspy", a.proxy(this.process, this)),
            this.refresh(),
            this.process()
        }
        function c(c) {
            return this.each(function() {
                var d = a(this)
                  , e = d.data("bs.scrollspy")
                  , f = "object" == typeof c && c;
                e || d.data("bs.scrollspy", e = new b(this,f)),
                "string" == typeof c && e[c]()
            })
        }
        b.VERSION = "3.3.7",
        b.DEFAULTS = {
            offset: 10
        },
        b.prototype.getScrollHeight = function() {
            return this.$scrollElement[0].scrollHeight || Math.max(this.$body[0].scrollHeight, document.documentElement.scrollHeight)
        }
        ,
        b.prototype.refresh = function() {
            var b = this
              , c = "offset"
              , d = 0;
            this.offsets = [],
            this.targets = [],
            this.scrollHeight = this.getScrollHeight(),
            a.isWindow(this.$scrollElement[0]) || (c = "position",
            d = this.$scrollElement.scrollTop()),
            this.$body.find(this.selector).map(function() {
                var b = a(this)
                  , e = b.data("target") || b.attr("href")
                  , f = /^#./.test(e) && a(e);
                return f && f.length && f.is(":visible") && [[f[c]().top + d, e]] || null
            }).sort(function(a, b) {
                return a[0] - b[0]
            }).each(function() {
                b.offsets.push(this[0]),
                b.targets.push(this[1])
            })
        }
        ,
        b.prototype.process = function() {
            var a, b = this.$scrollElement.scrollTop() + this.options.offset, c = this.getScrollHeight(), d = this.options.offset + c - this.$scrollElement.height(), e = this.offsets, f = this.targets, g = this.activeTarget;
            if (this.scrollHeight != c && this.refresh(),
            b >= d)
                return g != (a = f[f.length - 1]) && this.activate(a);
            if (g && b < e[0])
                return this.activeTarget = null,
                this.clear();
            for (a = e.length; a--; )
                g != f[a] && b >= e[a] && (void 0 === e[a + 1] || b < e[a + 1]) && this.activate(f[a])
        }
        ,
        b.prototype.activate = function(b) {
            this.activeTarget = b,
            this.clear();
            var c = this.selector + '[data-target="' + b + '"],' + this.selector + '[href="' + b + '"]'
              , d = a(c).parents("li").addClass("active");
            d.parent(".dropdown-menu").length && (d = d.closest("li.dropdown").addClass("active")),
            d.trigger("activate.bs.scrollspy")
        }
        ,
        b.prototype.clear = function() {
            a(this.selector).parentsUntil(this.options.target, ".active").removeClass("active")
        }
        ;
        var d = a.fn.scrollspy;
        a.fn.scrollspy = c,
        a.fn.scrollspy.Constructor = b,
        a.fn.scrollspy.noConflict = function() {
            return a.fn.scrollspy = d,
            this
        }
        ,
        a(window).on("load.bs.scrollspy.data-api", function() {
            a('[data-spy="scroll"]').each(function() {
                var b = a(this);
                c.call(b, b.data())
            })
        })
    }(jQuery),
    +function(a) {
        "use strict";
        function b(b) {
            return this.each(function() {
                var d = a(this)
                  , e = d.data("bs.tab");
                e || d.data("bs.tab", e = new c(this)),
                "string" == typeof b && e[b]()
            })
        }
        var c = function(b) {
            this.element = a(b)
        };
        c.VERSION = "3.3.7",
        c.TRANSITION_DURATION = 150,
        c.prototype.show = function() {
            var b = this.element
              , c = b.closest("ul:not(.dropdown-menu)")
              , d = b.data("target");
            if (d || (d = b.attr("href"),
            d = d && d.replace(/.*(?=#[^\s]*$)/, "")),
            !b.parent("li").hasClass("active")) {
                var e = c.find(".active:last a")
                  , f = a.Event("hide.bs.tab", {
                    relatedTarget: b[0]
                })
                  , g = a.Event("show.bs.tab", {
                    relatedTarget: e[0]
                });
                if (e.trigger(f),
                b.trigger(g),
                !g.isDefaultPrevented() && !f.isDefaultPrevented()) {
                    var h = a(d);
                    this.activate(b.closest("li"), c),
                    this.activate(h, h.parent(), function() {
                        e.trigger({
                            type: "hidden.bs.tab",
                            relatedTarget: b[0]
                        }),
                        b.trigger({
                            type: "shown.bs.tab",
                            relatedTarget: e[0]
                        })
                    })
                }
            }
        }
        ,
        c.prototype.activate = function(b, d, e) {
            function f() {
                g.removeClass("active").find("> .dropdown-menu > .active").removeClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !1),
                b.addClass("active").find('[data-toggle="tab"]').attr("aria-expanded", !0),
                h ? (b[0].offsetWidth,
                b.addClass("in")) : b.removeClass("fade"),
                b.parent(".dropdown-menu").length && b.closest("li.dropdown").addClass("active").end().find('[data-toggle="tab"]').attr("aria-expanded", !0),
                e && e()
            }
            var g = d.find("> .active")
              , h = e && a.support.transition && (g.length && g.hasClass("fade") || !!d.find("> .fade").length);
            g.length && h ? g.one("bsTransitionEnd", f).emulateTransitionEnd(c.TRANSITION_DURATION) : f(),
            g.removeClass("in")
        }
        ;
        var d = a.fn.tab;
        a.fn.tab = b,
        a.fn.tab.Constructor = c,
        a.fn.tab.noConflict = function() {
            return a.fn.tab = d,
            this
        }
        ;
        var e = function(c) {
            c.preventDefault(),
            b.call(a(this), "show")
        };
        a(document).on("click.bs.tab.data-api", '[data-toggle="tab"]', e).on("click.bs.tab.data-api", '[data-toggle="pill"]', e)
    }(jQuery),
    +function(a) {
        "use strict";
        function b(b) {
            return this.each(function() {
                var d = a(this)
                  , e = d.data("bs.affix")
                  , f = "object" == typeof b && b;
                e || d.data("bs.affix", e = new c(this,f)),
                "string" == typeof b && e[b]()
            })
        }
        var c = function(b, d) {
            this.options = a.extend({}, c.DEFAULTS, d),
            this.$target = a(this.options.target).on("scroll.bs.affix.data-api", a.proxy(this.checkPosition, this)).on("click.bs.affix.data-api", a.proxy(this.checkPositionWithEventLoop, this)),
            this.$element = a(b),
            this.affixed = null,
            this.unpin = null,
            this.pinnedOffset = null,
            this.checkPosition()
        };
        c.VERSION = "3.3.7",
        c.RESET = "affix affix-top affix-bottom",
        c.DEFAULTS = {
            offset: 0,
            target: window
        },
        c.prototype.getState = function(a, b, c, d) {
            var e = this.$target.scrollTop()
              , f = this.$element.offset()
              , g = this.$target.height();
            if (null != c && "top" == this.affixed)
                return e < c && "top";
            if ("bottom" == this.affixed)
                return null != c ? !(e + this.unpin <= f.top) && "bottom" : !(e + g <= a - d) && "bottom";
            var h = null == this.affixed
              , i = h ? e : f.top
              , j = h ? g : b;
            return null != c && e <= c ? "top" : null != d && i + j >= a - d && "bottom"
        }
        ,
        c.prototype.getPinnedOffset = function() {
            if (this.pinnedOffset)
                return this.pinnedOffset;
            this.$element.removeClass(c.RESET).addClass("affix");
            var a = this.$target.scrollTop()
              , b = this.$element.offset();
            return this.pinnedOffset = b.top - a
        }
        ,
        c.prototype.checkPositionWithEventLoop = function() {
            setTimeout(a.proxy(this.checkPosition, this), 1)
        }
        ,
        c.prototype.checkPosition = function() {
            if (this.$element.is(":visible")) {
                var b = this.$element.height()
                  , d = this.options.offset
                  , e = d.top
                  , f = d.bottom
                  , g = Math.max(a(document).height(), a(document.body).height());
                "object" != typeof d && (f = e = d),
                "function" == typeof e && (e = d.top(this.$element)),
                "function" == typeof f && (f = d.bottom(this.$element));
                var h = this.getState(g, b, e, f);
                if (this.affixed != h) {
                    null != this.unpin && this.$element.css("top", "");
                    var i = "affix" + (h ? "-" + h : "")
                      , j = a.Event(i + ".bs.affix");
                    if (this.$element.trigger(j),
                    j.isDefaultPrevented())
                        return;
                    this.affixed = h,
                    this.unpin = "bottom" == h ? this.getPinnedOffset() : null,
                    this.$element.removeClass(c.RESET).addClass(i).trigger(i.replace("affix", "affixed") + ".bs.affix")
                }
                "bottom" == h && this.$element.offset({
                    top: g - b - f
                })
            }
        }
        ;
        var d = a.fn.affix;
        a.fn.affix = b,
        a.fn.affix.Constructor = c,
        a.fn.affix.noConflict = function() {
            return a.fn.affix = d,
            this
        }
        ,
        a(window).on("load", function() {
            a('[data-spy="affix"]').each(function() {
                var c = a(this)
                  , d = c.data();
                d.offset = d.offset || {},
                null != d.offsetBottom && (d.offset.bottom = d.offsetBottom),
                null != d.offsetTop && (d.offset.top = d.offsetTop),
                b.call(c, d)
            })
        })
    }(jQuery);
    
    (function() {
        /*
    
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
        var n = this || self
          , p = function(a, b) {
            a = a.split(".");
            var c = n;
            a[0]in c || "undefined" == typeof c.execScript || c.execScript("var " + a[0]);
            for (var d; a.length && (d = a.shift()); )
                a.length || void 0 === b ? c = c[d] && c[d] !== Object.prototype[d] ? c[d] : c[d] = {} : c[d] = b
        };
        var q = function(a, b) {
            for (var c in b)
                b.hasOwnProperty(c) && (a[c] = b[c])
        }
          , r = function(a) {
            for (var b in a)
                if (a.hasOwnProperty(b))
                    return !0;
            return !1
        };
        var t = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;
        /*
    
     Copyright 2021 The Safevalues Authors
     SPDX-License-Identifier: Apache-2.0
    */
        var v = window
          , x = document
          , y = function(a, b) {
            x.addEventListener ? x.addEventListener(a, b, !1) : x.attachEvent && x.attachEvent("on" + a, b)
        };
        var z = {}
          , A = function() {
            z.TAGGING = z.TAGGING || [];
            z.TAGGING[1] = !0
        };
        var B = /:[0-9]+$/
          , C = function(a, b, c) {
            a = a.split("&");
            for (var d = 0; d < a.length; d++) {
                var e = a[d].split("=");
                if (decodeURIComponent(e[0]).replace(/\+/g, " ") === b)
                    return b = e.slice(1).join("="),
                    c ? b : decodeURIComponent(b).replace(/\+/g, " ")
            }
        }
          , F = function(a, b) {
            b && (b = String(b).toLowerCase());
            if ("protocol" === b || "port" === b)
                a.protocol = D(a.protocol) || D(v.location.protocol);
            "port" === b ? a.port = String(Number(a.hostname ? a.port : v.location.port) || ("http" == a.protocol ? 80 : "https" == a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || v.location.hostname).replace(B, "").toLowerCase());
            return E(a, b, void 0, void 0, void 0)
        }
          , E = function(a, b, c, d, e) {
            var f = D(a.protocol);
            b && (b = String(b).toLowerCase());
            switch (b) {
            case "url_no_fragment":
                d = "";
                a && a.href && (d = a.href.indexOf("#"),
                d = 0 > d ? a.href : a.href.substr(0, d));
                a = d;
                break;
            case "protocol":
                a = f;
                break;
            case "host":
                a = a.hostname.replace(B, "").toLowerCase();
                c && (d = /^www\d*\./.exec(a)) && d[0] && (a = a.substr(d[0].length));
                break;
            case "port":
                a = String(Number(a.port) || ("http" == f ? 80 : "https" == f ? 443 : ""));
                break;
            case "path":
                a.pathname || a.hostname || A();
                a = "/" == a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
                a = a.split("/");
                a: if (d = d || [],
                c = a[a.length - 1],
                Array.prototype.indexOf)
                    d = d.indexOf(c),
                    d = "number" == typeof d ? d : -1;
                else {
                    for (e = 0; e < d.length; e++)
                        if (d[e] === c) {
                            d = e;
                            break a
                        }
                    d = -1
                }
                0 <= d && (a[a.length - 1] = "");
                a = a.join("/");
                break;
            case "query":
                a = a.search.replace("?", "");
                e && (a = C(a, e, void 0));
                break;
            case "extension":
                a = a.pathname.split(".");
                a = 1 < a.length ? a[a.length - 1] : "";
                a = a.split("/")[0];
                break;
            case "fragment":
                a = a.hash.replace("#", "");
                break;
            default:
                a = a && a.href
            }
            return a
        }
          , D = function(a) {
            return a ? a.replace(":", "").toLowerCase() : ""
        }
          , G = function(a) {
            var b = x.createElement("a");
            a && (b.href = a);
            var c = b.pathname;
            "/" !== c[0] && (a || A(),
            c = "/" + c);
            a = b.hostname.replace(B, "");
            return {
                href: b.href,
                protocol: b.protocol,
                host: b.host,
                hostname: a,
                pathname: c,
                search: b.search,
                hash: b.hash,
                port: b.port
            }
        };
        function H() {
            for (var a = I, b = {}, c = 0; c < a.length; ++c)
                b[a[c]] = c;
            return b
        }
        function J() {
            var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
            a += a.toLowerCase() + "0123456789-_";
            return a + "."
        }
        var I, K;
        function aa(a) {
            function b(k) {
                for (; d < a.length; ) {
                    var m = a.charAt(d++)
                      , l = K[m];
                    if (null != l)
                        return l;
                    if (!/^[\s\xa0]*$/.test(m))
                        throw Error("Unknown base64 encoding at char: " + m);
                }
                return k
            }
            I = I || J();
            K = K || H();
            for (var c = "", d = 0; ; ) {
                var e = b(-1)
                  , f = b(0)
                  , g = b(64)
                  , h = b(64);
                if (64 === h && -1 === e)
                    return c;
                c += String.fromCharCode(e << 2 | f >> 4);
                64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2),
                64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
            }
        }
        ;var L;
        var N = function() {
            var a = ba
              , b = ca
              , c = M()
              , d = function(g) {
                a(g.target || g.srcElement || {})
            }
              , e = function(g) {
                b(g.target || g.srcElement || {})
            };
            if (!c.init) {
                y("mousedown", d);
                y("keyup", d);
                y("submit", e);
                var f = HTMLFormElement.prototype.submit;
                HTMLFormElement.prototype.submit = function() {
                    b(this);
                    f.call(this)
                }
                ;
                c.init = !0
            }
        }
          , O = function(a, b, c, d, e) {
            a = {
                callback: a,
                domains: b,
                fragment: 2 === c,
                placement: c,
                forms: d,
                sameHost: e
            };
            M().decorators.push(a)
        }
          , P = function(a, b, c) {
            for (var d = M().decorators, e = {}, f = 0; f < d.length; ++f) {
                var g = d[f], h;
                if (h = !c || g.forms)
                    a: {
                        h = g.domains;
                        var k = a
                          , m = !!g.sameHost;
                        if (h && (m || k !== x.location.hostname))
                            for (var l = 0; l < h.length; l++)
                                if (h[l]instanceof RegExp) {
                                    if (h[l].test(k)) {
                                        h = !0;
                                        break a
                                    }
                                } else if (0 <= k.indexOf(h[l]) || m && 0 <= h[l].indexOf(k)) {
                                    h = !0;
                                    break a
                                }
                        h = !1
                    }
                h && (h = g.placement,
                void 0 == h && (h = g.fragment ? 2 : 1),
                h === b && q(e, g.callback()))
            }
            return e
        }
          , M = function() {
            var a = {};
            var b = v.google_tag_data;
            v.google_tag_data = void 0 === b ? a : b;
            a = v.google_tag_data;
            b = a.gl;
            b && b.decorators || (b = {
                decorators: []
            },
            a.gl = b);
            return b
        };
        var da = /(.*?)\*(.*?)\*(.*)/
          , ea = /([^?#]+)(\?[^#]*)?(#.*)?/;
        function Q(a) {
            return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
        }
        var S = function(a) {
            var b = [], c;
            for (c in a)
                if (a.hasOwnProperty(c)) {
                    var d = a[c];
                    if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
                        b.push(c);
                        var e = b
                          , f = e.push;
                        d = String(d);
                        I = I || J();
                        K = K || H();
                        for (var g = [], h = 0; h < d.length; h += 3) {
                            var k = h + 1 < d.length
                              , m = h + 2 < d.length
                              , l = d.charCodeAt(h)
                              , u = k ? d.charCodeAt(h + 1) : 0
                              , w = m ? d.charCodeAt(h + 2) : 0
                              , fa = l >> 2;
                            l = (l & 3) << 4 | u >> 4;
                            u = (u & 15) << 2 | w >> 6;
                            w &= 63;
                            m || (w = 64,
                            k || (u = 64));
                            g.push(I[fa], I[l], I[u], I[w])
                        }
                        f.call(e, g.join(""))
                    }
                }
            a = b.join("*");
            return ["1", R(a), a].join("*")
        }
          , R = function(a, b) {
            a = [window.navigator.userAgent, (new Date).getTimezoneOffset(), window.navigator.userLanguage || window.navigator.language, Math.floor((new Date).getTime() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*");
            if (!(b = L)) {
                b = Array(256);
                for (var c = 0; 256 > c; c++) {
                    for (var d = c, e = 0; 8 > e; e++)
                        d = d & 1 ? d >>> 1 ^ 3988292384 : d >>> 1;
                    b[c] = d
                }
            }
            L = b;
            b = 4294967295;
            for (c = 0; c < a.length; c++)
                b = b >>> 8 ^ L[(b ^ a.charCodeAt(c)) & 255];
            return ((b ^ -1) >>> 0).toString(36)
        }
          , ia = function(a) {
            return function(b) {
                var c = G(v.location.href)
                  , d = c.search.replace("?", "");
                var e = C(d, "_gl", !0);
                b.query = T(e || "") || {};
                e = F(c, "fragment");
                var f = e.match(Q("_gl"));
                b.fragment = T(f && f[3] || "") || {};
                a && ha(c, d, e)
            }
        };
        function U(a, b) {
            if (a = Q(a).exec(b)) {
                var c = a[2]
                  , d = a[4];
                b = a[1];
                d && (b = b + c + d)
            }
            return b
        }
        var ha = function(a, b, c) {
            function d(f, g) {
                f = U("_gl", f);
                f.length && (f = g + f);
                return f
            }
            if (v.history && v.history.replaceState) {
                var e = Q("_gl");
                if (e.test(b) || e.test(c))
                    a = F(a, "path"),
                    b = d(b, "?"),
                    c = d(c, "#"),
                    v.history.replaceState({}, void 0, "" + a + b + c)
            }
        }
          , T = function(a) {
            var b = void 0 === b ? 3 : b;
            try {
                if (a) {
                    a: {
                        for (var c = 0; 3 > c; ++c) {
                            var d = da.exec(a);
                            if (d) {
                                var e = d;
                                break a
                            }
                            a = decodeURIComponent(a)
                        }
                        e = void 0
                    }
                    if (e && "1" === e[1]) {
                        var f = e[2]
                          , g = e[3];
                        a: {
                            for (e = 0; e < b; ++e)
                                if (f === R(g, e)) {
                                    var h = !0;
                                    break a
                                }
                            h = !1
                        }
                        if (h) {
                            b = {};
                            var k = g ? g.split("*") : [];
                            for (g = 0; g < k.length; g += 2)
                                b[k[g]] = aa(k[g + 1]);
                            return b
                        }
                    }
                }
            } catch (m) {}
        };
        function V(a, b, c, d) {
            function e(k) {
                k = U(a, k);
                var m = k.charAt(k.length - 1);
                k && "&" !== m && (k += "&");
                return k + h
            }
            d = void 0 === d ? !1 : d;
            var f = ea.exec(c);
            if (!f)
                return "";
            c = f[1];
            var g = f[2] || "";
            f = f[3] || "";
            var h = a + "=" + b;
            d ? f = "#" + e(f.substring(1)) : g = "?" + e(g.substring(1));
            return "" + c + g + f
        }
        function W(a, b) {
            var c = "FORM" === (a.tagName || "").toUpperCase()
              , d = P(b, 1, c)
              , e = P(b, 2, c);
            b = P(b, 3, c);
            r(d) && (d = S(d),
            c ? X("_gl", d, a) : Y("_gl", d, a, !1));
            !c && r(e) && (c = S(e),
            Y("_gl", c, a, !0));
            for (var f in b)
                b.hasOwnProperty(f) && Z(f, b[f], a)
        }
        function Z(a, b, c, d) {
            if (c.tagName) {
                if ("a" === c.tagName.toLowerCase())
                    return Y(a, b, c, d);
                if ("form" === c.tagName.toLowerCase())
                    return X(a, b, c)
            }
            if ("string" == typeof c)
                return V(a, b, c, d)
        }
        function Y(a, b, c, d) {
            c.href && (a = V(a, b, c.href, void 0 === d ? !1 : d),
            t.test(a) && (c.href = a))
        }
        function X(a, b, c) {
            if (c && c.action) {
                var d = (c.method || "").toLowerCase();
                if ("get" === d) {
                    d = c.childNodes || [];
                    for (var e = !1, f = 0; f < d.length; f++) {
                        var g = d[f];
                        if (g.name === a) {
                            g.setAttribute("value", b);
                            e = !0;
                            break
                        }
                    }
                    e || (d = x.createElement("input"),
                    d.setAttribute("type", "hidden"),
                    d.setAttribute("name", a),
                    d.setAttribute("value", b),
                    c.appendChild(d))
                } else
                    "post" === d && (a = V(a, b, c.action),
                    t.test(a) && (c.action = a))
            }
        }
        var ba = function(a) {
            try {
                a: {
                    for (var b = 100; a && 0 < b; ) {
                        if (a.href && a.nodeName.match(/^a(?:rea)?$/i)) {
                            var c = a;
                            break a
                        }
                        a = a.parentNode;
                        b--
                    }
                    c = null
                }
                if (c) {
                    var d = c.protocol;
                    "http:" !== d && "https:" !== d || W(c, c.hostname)
                }
            } catch (e) {}
        }
          , ca = function(a) {
            try {
                if (a.action) {
                    var b = F(G(a.action), "host");
                    W(a, b)
                }
            } catch (c) {}
        };
        p("google_tag_data.glBridge.auto", function(a, b, c, d) {
            N();
            O(a, b, "fragment" === c ? 2 : 1, !!d, !1)
        });
        p("google_tag_data.glBridge.passthrough", function(a, b, c) {
            N();
            O(a, [E(v.location, "host", !0)], b, !!c, !0)
        });
        p("google_tag_data.glBridge.decorate", function(a, b, c) {
            a = S(a);
            return Z("_gl", a, b, !!c)
        });
        p("google_tag_data.glBridge.generate", S);
        p("google_tag_data.glBridge.get", function(a, b) {
            var c = ia(!!b);
            b = M();
            b.data || (b.data = {
                query: {},
                fragment: {}
            },
            c(b.data));
            c = {};
            if (b = b.data)
                q(c, b.query),
                a && q(c, b.fragment);
            return c
        });
    }
    )(window);
    (function() {
        function La(a) {
            var b = 1, c;
            if (a)
                for (b = 0,
                c = a.length - 1; 0 <= c; c--) {
                    var d = a.charCodeAt(c);
                    b = (b << 6 & 268435455) + d + (d << 14);
                    d = b & 266338304;
                    b = 0 != d ? b ^ d >> 21 : b
                }
            return b
        }
        ;/*
    
     Copyright The Closure Library Authors.
     SPDX-License-Identifier: Apache-2.0
    */
        var $c = function(a) {
            this.C = a || []
        };
        $c.prototype.set = function(a) {
            this.C[a] = !0
        }
        ;
        $c.prototype.encode = function() {
            for (var a = [], b = 0; b < this.C.length; b++)
                this.C[b] && (a[Math.floor(b / 6)] ^= 1 << b % 6);
            for (b = 0; b < a.length; b++)
                a[b] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(a[b] || 0);
            return a.join("") + "~"
        }
        ;
        var ha = window.GoogleAnalyticsObject, wa;
        if (wa = void 0 != ha)
            wa = -1 < (ha.constructor + "").indexOf("String");
        var ya;
        if (ya = wa) {
            var fc = window.GoogleAnalyticsObject;
            ya = fc ? fc.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
        }
        var gb = ya || "ga"
          , jd = /^(?:utma\.)?\d+\.\d+$/
          , kd = /^amp-[\w.-]{22,64}$/
          , Ba = !1;
        var vd = new $c;
        function J(a) {
            vd.set(a)
        }
        var Td = function(a) {
            a = Dd(a);
            a = new $c(a);
            for (var b = vd.C.slice(), c = 0; c < a.C.length; c++)
                b[c] = b[c] || a.C[c];
            return (new $c(b)).encode()
        }
          , Dd = function(a) {
            a = a.get(Gd);
            ka(a) || (a = []);
            return a
        };
        var ea = function(a) {
            return "function" == typeof a
        }
          , ka = function(a) {
            return "[object Array]" == Object.prototype.toString.call(Object(a))
        }
          , qa = function(a) {
            return void 0 != a && -1 < (a.constructor + "").indexOf("String")
        }
          , D = function(a, b) {
            return 0 == a.indexOf(b)
        }
          , sa = function(a) {
            return a ? a.replace(/^[\s\xa0]+|[\s\xa0]+$/g, "") : ""
        }
          , ra = function() {
            for (var a = O.navigator.userAgent + (M.cookie ? M.cookie : "") + (M.referrer ? M.referrer : ""), b = a.length, c = O.history.length; 0 < c; )
                a += c-- ^ b++;
            return [hd() ^ La(a) & 2147483647, Math.round((new Date).getTime() / 1E3)].join(".")
        }
          , ta = function(a) {
            var b = M.createElement("img");
            b.width = 1;
            b.height = 1;
            b.src = a;
            return b
        }
          , ua = function() {}
          , K = function(a) {
            if (encodeURIComponent instanceof Function)
                return encodeURIComponent(a);
            J(28);
            return a
        }
          , L = function(a, b, c, d) {
            try {
                a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
            } catch (e) {
                J(27)
            }
        }
          , f = /^[\w\-:/.?=&%!\[\]]+$/
          , Nd = /^[\w+/_-]+[=]{0,2}$/
          , ff = null
          , Id = function(a, b, c, d, e) {
            if (!ff) {
                ff = {
                    createScriptURL: function(ca) {
                        return ca
                    },
                    createHTML: function(ca) {
                        return ca
                    }
                };
                try {
                    ff = window.trustedTypes.createPolicy("google-analytics", ff)
                } catch (ca) {}
            }
            if (a) {
                var g = M.querySelector && M.querySelector("script[nonce]") || null;
                g = g ? g.nonce || g.getAttribute && g.getAttribute("nonce") || "" : "";
                c ? (e = d = "",
                b && f.test(b) && (d = ' id="' + b + '"'),
                g && Nd.test(g) && (e = ' nonce="' + g + '"'),
                f.test(a) && M.write(ff.createHTML("<script" + d + e + ' src="' + a + '">\x3c/script>'))) : (c = M.createElement("script"),
                c.type = "text/javascript",
                c.async = !0,
                c.src = ff.createScriptURL(a),
                d && (c.onload = d),
                e && (c.onerror = e),
                b && (c.id = b),
                g && c.setAttribute("nonce", g),
                a = M.getElementsByTagName("script")[0],
                a.parentNode.insertBefore(c, a))
            }
        }
          , be = function(a, b) {
            return E(M.location[b ? "href" : "search"], a)
        }
          , E = function(a, b) {
            return (a = a.match("(?:&|#|\\?)" + K(b).replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1") + "=([^&#]*)")) && 2 == a.length ? a[1] : ""
        }
          , xa = function() {
            var a = "" + M.location.hostname;
            return 0 == a.indexOf("www.") ? a.substring(4) : a
        }
          , de = function(a, b) {
            var c = a.indexOf(b);
            if (5 == c || 6 == c)
                if (a = a.charAt(c + b.length),
                "/" == a || "?" == a || "" == a || ":" == a)
                    return !0;
            return !1
        }
          , za = function(a, b) {
            if (1 == b.length && null != b[0] && "object" === typeof b[0])
                return b[0];
            for (var c = {}, d = Math.min(a.length + 1, b.length), e = 0; e < d; e++)
                if ("object" === typeof b[e]) {
                    for (var g in b[e])
                        b[e].hasOwnProperty(g) && (c[g] = b[e][g]);
                    break
                } else
                    e < a.length && (c[a[e]] = b[e]);
            return c
        }
          , Ee = function(a, b) {
            for (var c = 0; c < a.length; c++)
                if (b == a[c])
                    return !0;
            return !1
        };
        var ee = function() {
            this.oa = [];
            this.ea = {};
            this.m = {}
        };
        ee.prototype.set = function(a, b, c) {
            this.oa.push(a);
            c ? this.m[":" + a] = b : this.ea[":" + a] = b
        }
        ;
        ee.prototype.get = function(a) {
            return this.m.hasOwnProperty(":" + a) ? this.m[":" + a] : this.ea[":" + a]
        }
        ;
        ee.prototype.map = function(a) {
            for (var b = 0; b < this.oa.length; b++) {
                var c = this.oa[b]
                  , d = this.get(c);
                d && a(c, d)
            }
        }
        ;
        var O = window
          , M = document
          , jf = document.currentScript ? document.currentScript.src : ""
          , va = function(a, b) {
            return setTimeout(a, b)
        };
        var Qa = window
          , Za = document
          , G = function(a) {
            var b = Qa._gaUserPrefs;
            if (b && b.ioo && b.ioo() || a && !0 === Qa["ga-disable-" + a])
                return !0;
            try {
                var c = Qa.external;
                if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs)
                    return !0
            } catch (g) {}
            a = [];
            b = String(Za.cookie).split(";");
            for (c = 0; c < b.length; c++) {
                var d = b[c].split("=")
                  , e = d[0].replace(/^\s*|\s*$/g, "");
                e && "AMP_TOKEN" == e && ((d = d.slice(1).join("=").replace(/^\s*|\s*$/g, "")) && (d = decodeURIComponent(d)),
                a.push(d))
            }
            for (b = 0; b < a.length; b++)
                if ("$OPT_OUT" == a[b])
                    return !0;
            return Za.getElementById("__gaOptOutExtension") ? !0 : !1
        };
        var Ca = function(a) {
            var b = []
              , c = M.cookie.split(";");
            a = new RegExp("^\\s*" + a + "=\\s*(.*?)\\s*$");
            for (var d = 0; d < c.length; d++) {
                var e = c[d].match(a);
                e && b.push(e[1])
            }
            return b
        }
          , zc = function(a, b, c, d, e, g, ca) {
            e = G(e) ? !1 : eb.test(M.location.hostname) || "/" == c && vc.test(d) ? !1 : !0;
            if (!e)
                return !1;
            b && 1200 < b.length && (b = b.substring(0, 1200));
            c = a + "=" + b + "; path=" + c + "; ";
            g && (c += "expires=" + (new Date((new Date).getTime() + g)).toGMTString() + "; ");
            d && "none" !== d && (c += "domain=" + d + ";");
            ca && (c += ca + ";");
            d = M.cookie;
            M.cookie = c;
            if (!(d = d != M.cookie))
                a: {
                    a = Ca(a);
                    for (d = 0; d < a.length; d++)
                        if (b == a[d]) {
                            d = !0;
                            break a
                        }
                    d = !1
                }
            return d
        }
          , Cc = function(a) {
            return encodeURIComponent ? encodeURIComponent(a).replace(/\(/g, "%28").replace(/\)/g, "%29") : a
        }
          , vc = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/
          , eb = /(^|\.)doubleclick\.net$/i;
        var Oe = function(a) {
            var b = []
              , c = M.cookie.split(";");
            a = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$");
            for (var d = 0; d < c.length; d++) {
                var e = c[d].match(a);
                e && b.push({
                    ja: e[1],
                    value: e[2],
                    timestamp: Number(e[2].split(".")[1]) || 0
                })
            }
            b.sort(function(g, ca) {
                return ca.timestamp - g.timestamp
            });
            return b
        };
        function df(a, b, c) {
            b = Oe(b);
            var d = {};
            if (!b || !b.length)
                return d;
            for (var e = 0; e < b.length; e++) {
                var g = b[e].value.split(".");
                if ("1" !== g[0] || c && 3 > g.length || !c && 3 !== g.length)
                    a && (a.na = !0);
                else if (Number(g[1])) {
                    d[b[e].ja] ? a && (a.pa = !0) : d[b[e].ja] = [];
                    var ca = {
                        version: g[0],
                        timestamp: 1E3 * Number(g[1]),
                        qa: g[2]
                    };
                    c && 3 < g.length && (ca.labels = g.slice(3));
                    d[b[e].ja].push(ca)
                }
            }
            return d
        }
        ;var Fa, Ga, fb, Ab, ja = /^https?:\/\/[^/]*cdn\.ampproject\.org\//, Ue = /^(?:www\.|m\.|amp\.)+/, Ub = [], da = function(a) {
            if (ye(a[Kd])) {
                if (void 0 === Ab) {
                    var b;
                    if (b = (b = De.get()) && b._ga || void 0)
                        Ab = b,
                        J(81)
                }
                if (void 0 !== Ab)
                    return a[Q] || (a[Q] = Ab),
                    !1
            }
            if (a[Kd]) {
                J(67);
                if (a[ac] && "cookie" != a[ac])
                    return !1;
                if (void 0 !== Ab)
                    a[Q] || (a[Q] = Ab);
                else {
                    a: {
                        b = String(a[W] || xa());
                        var c = String(a[Yb] || "/")
                          , d = Ca(String(a[U] || "_ga"));
                        b = na(d, b, c);
                        if (!b || jd.test(b))
                            b = !0;
                        else if (b = Ca("AMP_TOKEN"),
                        0 == b.length)
                            b = !0;
                        else {
                            if (1 == b.length && (b = decodeURIComponent(b[0]),
                            "$RETRIEVING" == b || "$OPT_OUT" == b || "$ERROR" == b || "$NOT_FOUND" == b)) {
                                b = !0;
                                break a
                            }
                            b = !1
                        }
                    }
                    if (b && tc(ic, String(a[Na])))
                        return !0
                }
            }
            return !1
        }, ic = function() {
            Z.D([ua])
        }, tc = function(a, b) {
            var c = Ca("AMP_TOKEN");
            if (1 < c.length)
                return J(55),
                !1;
            c = decodeURIComponent(c[0] || "");
            if ("$OPT_OUT" == c || "$ERROR" == c || G(b))
                return J(62),
                !1;
            if (!ja.test(M.referrer) && "$NOT_FOUND" == c)
                return J(68),
                !1;
            if (void 0 !== Ab)
                return J(56),
                va(function() {
                    a(Ab)
                }, 0),
                !0;
            if (Fa)
                return Ub.push(a),
                !0;
            if ("$RETRIEVING" == c)
                return J(57),
                va(function() {
                    tc(a, b)
                }, 1E4),
                !0;
            Fa = !0;
            c && "$" != c[0] || (xc("$RETRIEVING", 3E4),
            setTimeout(Mc, 3E4),
            c = "");
            return Pc(c, b) ? (Ub.push(a),
            !0) : !1
        }, Pc = function(a, b, c) {
            if (!window.JSON)
                return J(58),
                !1;
            var d = O.XMLHttpRequest;
            if (!d)
                return J(59),
                !1;
            var e = new d;
            if (!("withCredentials"in e))
                return J(60),
                !1;
            e.open("POST", (c || "https://ampcid.google.com/v1/publisher:getClientId") + "?key=AIzaSyA65lEHUEizIsNtlbNo-l2K18dT680nsaM", !0);
            e.withCredentials = !0;
            e.setRequestHeader("Content-Type", "text/plain");
            e.onload = function() {
                Fa = !1;
                if (4 == e.readyState) {
                    try {
                        200 != e.status && (J(61),
                        Qc("", "$ERROR", 3E4));
                        var g = JSON.parse(e.responseText);
                        g.optOut ? (J(63),
                        Qc("", "$OPT_OUT", 31536E6)) : g.clientId ? Qc(g.clientId, g.securityToken, 31536E6) : !c && g.alternateUrl ? (Ga && clearTimeout(Ga),
                        Fa = !0,
                        Pc(a, b, g.alternateUrl)) : (J(64),
                        Qc("", "$NOT_FOUND", 36E5))
                    } catch (ca) {
                        J(65),
                        Qc("", "$ERROR", 3E4)
                    }
                    e = null
                }
            }
            ;
            d = {
                originScope: "AMP_ECID_GOOGLE"
            };
            a && (d.securityToken = a);
            e.send(JSON.stringify(d));
            Ga = va(function() {
                J(66);
                Qc("", "$ERROR", 3E4)
            }, 1E4);
            return !0
        }, Mc = function() {
            Fa = !1
        }, xc = function(a, b) {
            if (void 0 === fb) {
                fb = "";
                for (var c = id(), d = 0; d < c.length; d++) {
                    var e = c[d];
                    if (zc("AMP_TOKEN", encodeURIComponent(a), "/", e, "", b)) {
                        fb = e;
                        return
                    }
                }
            }
            zc("AMP_TOKEN", encodeURIComponent(a), "/", fb, "", b)
        }, Qc = function(a, b, c) {
            Ga && clearTimeout(Ga);
            b && xc(b, c);
            Ab = a;
            b = Ub;
            Ub = [];
            for (c = 0; c < b.length; c++)
                b[c](a)
        }, ye = function(a) {
            a: {
                if (ja.test(M.referrer)) {
                    var b = M.location.hostname.replace(Ue, "");
                    b: {
                        var c = M.referrer;
                        c = c.replace(/^https?:\/\//, "");
                        var d = c.replace(/^[^/]+/, "").split("/")
                          , e = d[2];
                        d = (d = "s" == e ? d[3] : e) ? decodeURIComponent(d) : d;
                        if (!d) {
                            if (0 == c.indexOf("xn--")) {
                                c = "";
                                break b
                            }
                            (c = c.match(/(.*)\.cdn\.ampproject\.org\/?$/)) && 2 == c.length && (d = c[1].replace(/-/g, ".").replace(/\.\./g, "-"))
                        }
                        c = d ? d.replace(Ue, "") : ""
                    }
                    (d = b === c) || (c = "." + c,
                    d = b.substring(b.length - c.length, b.length) === c);
                    if (d) {
                        b = !0;
                        break a
                    } else
                        J(78)
                }
                b = !1
            }
            return b && !1 !== a
        };
        var bd = function(a) {
            return (a ? "https:" : Ba || "https:" == M.location.protocol ? "https:" : "http:") + "//www.google-analytics.com"
        }
          , Ge = function(a) {
            switch (a) {
            default:
            case 1:
                return "https://www.google-analytics.com/gtm/js?id=";
            case 2:
                return "https://www.googletagmanager.com/gtag/js?id="
            }
        }
          , Da = function(a) {
            this.name = "len";
            this.message = a + "-8192"
        }
          , ba = function(a, b, c) {
            c = c || ua;
            if (2036 >= b.length)
                wc(a, b, c);
            else if (8192 >= b.length)
                x(a, b, c) || wd(a, b, c) || wc(a, b, c);
            else
                throw ge("len", b.length),
                new Da(b.length);
        }
          , pe = function(a, b, c, d) {
            d = d || ua;
            wd(a + "?" + b, "", d, c)
        }
          , wc = function(a, b, c) {
            var d = ta(a + "?" + b);
            d.onload = d.onerror = function() {
                d.onload = null;
                d.onerror = null;
                c()
            }
        }
          , wd = function(a, b, c, d) {
            var e = O.XMLHttpRequest;
            if (!e)
                return !1;
            var g = new e;
            if (!("withCredentials"in g))
                return !1;
            a = a.replace(/^http:/, "https:");
            g.open("POST", a, !0);
            g.withCredentials = !0;
            g.setRequestHeader("Content-Type", "text/plain");
            g.onreadystatechange = function() {
                if (4 == g.readyState) {
                    if (d && "text/plain" === g.getResponseHeader("Content-Type"))
                        try {
                            Ea(d, g.responseText, c)
                        } catch (ca) {
                            ge("xhr", "rsp"),
                            c()
                        }
                    else
                        c();
                    g = null
                }
            }
            ;
            g.send(b);
            return !0
        }
          , Ea = function(a, b, c) {
            if (1 > b.length)
                ge("xhr", "ver", "0"),
                c();
            else if (3 < a.count++)
                ge("xhr", "tmr", "" + a.count),
                c();
            else {
                var d = b.charAt(0);
                if ("1" === d)
                    oc(a, b.substring(1), c);
                else if (a.V && "2" === d) {
                    var e = b.substring(1).split(",")
                      , g = 0;
                    b = function() {
                        ++g === e.length && c()
                    }
                    ;
                    for (d = 0; d < e.length; d++)
                        oc(a, e[d], b)
                } else
                    ge("xhr", "ver", String(b.length)),
                    c()
            }
        }
          , oc = function(a, b, c) {
            if (0 === b.length)
                c();
            else {
                var d = b.charAt(0);
                switch (d) {
                case "d":
                    pe("https://stats.g.doubleclick.net/j/collect", a.U, a, c);
                    break;
                case "g":
                    wc("https://www.google.com/ads/ga-audiences", a.google, c);
                    (b = b.substring(1)) && (/^[a-z.]{1,6}$/.test(b) ? wc("https://www.google.%/ads/ga-audiences".replace("%", b), a.google, ua) : ge("tld", "bcc", b));
                    break;
                case "G":
                    if (a.V) {
                        a.V("G-" + b.substring(1));
                        c();
                        break
                    }
                case "x":
                    if (a.V) {
                        a.V();
                        c();
                        break
                    }
                default:
                    ge("xhr", "brc", d),
                    c()
                }
            }
        }
          , x = function(a, b, c) {
            return O.navigator.sendBeacon ? O.navigator.sendBeacon(a, b) ? (c(),
            !0) : !1 : !1
        }
          , ge = function(a, b, c) {
            1 <= 100 * Math.random() || G("?") || (a = ["t=error", "_e=" + a, "_v=j94", "sr=1"],
            b && a.push("_f=" + b),
            c && a.push("_m=" + K(c.substring(0, 100))),
            a.push("aip=1"),
            a.push("z=" + hd()),
            wc(bd(!0) + "/u/d", a.join("&"), ua))
        };
        var qc = function() {
            return O.gaData = O.gaData || {}
        }
          , h = function(a) {
            var b = qc();
            return b[a] = b[a] || {}
        };
        var Ha = function() {
            this.M = []
        };
        Ha.prototype.add = function(a) {
            this.M.push(a)
        }
        ;
        Ha.prototype.D = function(a) {
            try {
                for (var b = 0; b < this.M.length; b++) {
                    var c = a.get(this.M[b]);
                    c && ea(c) && c.call(O, a)
                }
            } catch (d) {}
            b = a.get(Ia);
            b != ua && ea(b) && (a.set(Ia, ua, !0),
            setTimeout(b, 10))
        }
        ;
        function Ja(a) {
            if (100 != a.get(Ka) && La(P(a, Q)) % 1E4 >= 100 * R(a, Ka))
                throw "abort";
        }
        function Ma(a) {
            if (G(P(a, Na)))
                throw "abort";
        }
        function Oa() {
            var a = M.location.protocol;
            if ("http:" != a && "https:" != a)
                throw "abort";
        }
        function Pa(a) {
            try {
                O.navigator.sendBeacon ? J(42) : O.XMLHttpRequest && "withCredentials"in new O.XMLHttpRequest && J(40)
            } catch (c) {}
            a.set(ld, Td(a), !0);
            a.set(Ac, R(a, Ac) + 1);
            var b = [];
            ue.map(function(c, d) {
                d.F && (c = a.get(c),
                void 0 != c && c != d.defaultValue && ("boolean" == typeof c && (c *= 1),
                b.push(d.F + "=" + K("" + c))))
            });
            !1 === a.get(xe) && b.push("npa=1");
            b.push("z=" + Bd());
            a.set(Ra, b.join("&"), !0)
        }
        function Sa(a) {
            var b = P(a, fa);
            !b && a.get(Vd) && (b = "beacon");
            var c = P(a, gd)
              , d = P(a, oe)
              , e = c || (d || bd(!1) + "") + "/collect";
            switch (P(a, ad)) {
            case "d":
                e = c || (d || bd(!1) + "") + "/j/collect";
                b = a.get(qe) || void 0;
                pe(e, P(a, Ra), b, a.Z(Ia));
                break;
            default:
                b ? (c = P(a, Ra),
                d = (d = a.Z(Ia)) || ua,
                "image" == b ? wc(e, c, d) : "xhr" == b && wd(e, c, d) || "beacon" == b && x(e, c, d) || ba(e, c, d)) : ba(e, P(a, Ra), a.Z(Ia))
            }
            e = P(a, Na);
            e = h(e);
            b = e.hitcount;
            e.hitcount = b ? b + 1 : 1;
            e.first_hit || (e.first_hit = (new Date).getTime());
            e = P(a, Na);
            delete h(e).pending_experiments;
            a.set(Ia, ua, !0)
        }
        function Hc(a) {
            qc().expId && a.set(Nc, qc().expId);
            qc().expVar && a.set(Oc, qc().expVar);
            var b = P(a, Na);
            if (b = h(b).pending_experiments) {
                var c = [];
                for (d in b)
                    b.hasOwnProperty(d) && b[d] && c.push(encodeURIComponent(d) + "." + encodeURIComponent(b[d]));
                var d = c.join("!")
            } else
                d = void 0;
            d && ((b = a.get(m)) && (d = b + "!" + d),
            a.set(m, d, !0))
        }
        function cd() {
            if (O.navigator && "preview" == O.navigator.loadPurpose)
                throw "abort";
        }
        function yd(a) {
            var b = O.gaDevIds || [];
            if (ka(b)) {
                var c = a.get("&did");
                qa(c) && 0 < c.length && (b = b.concat(c.split(",")));
                c = [];
                for (var d = 0; d < b.length; d++)
                    Ee(c, b[d]) || c.push(b[d]);
                0 != c.length && a.set("&did", c.join(","), !0)
            }
        }
        function vb(a) {
            if (!a.get(Na))
                throw "abort";
        }
        function Pe(a) {
            try {
                if (!a.get(Qe) && (a.set(Qe, !0),
                !a.get("&gtm"))) {
                    var b = void 0
                      , c = be("gtm_debug");
                    "x" === c && (b = 1);
                    !b && lf(Number(c)) && (b = 2);
                    !b && D(M.referrer, "https://tagassistant.google.com/") && (b = 3);
                    !b && Ee(M.cookie.split("; "), "__TAG_ASSISTANT=x") && (b = 4);
                    if (!b) {
                        var d = Number(M.documentElement.getAttribute("data-tag-assistant-present"));
                        lf(d) && (b = 5)
                    }
                    if (b) {
                        O["google.tagmanager.debugui2.queue"] || (O["google.tagmanager.debugui2.queue"] = [],
                        Id("https://www.google-analytics.com/debug/bootstrap?id=" + a.get(Na) + "&src=LEGACY&cond=" + b));
                        var e = M.currentScript;
                        O["google.tagmanager.debugui2.queue"].push({
                            messageType: "LEGACY_CONTAINER_STARTING",
                            data: {
                                id: a.get(Na),
                                scriptSource: e && e.src || ""
                            }
                        })
                    }
                }
            } catch (g) {}
        }
        function lf(a) {
            var b = Date.now();
            return a < b + 3E5 && a > b - 9E5
        }
        ;var hd = function() {
            return Math.round(2147483647 * Math.random())
        }
          , Bd = function() {
            try {
                var a = new Uint32Array(1);
                O.crypto.getRandomValues(a);
                return a[0] & 2147483647
            } catch (b) {
                return hd()
            }
        };
        function Ta(a) {
            var b = R(a, Ua);
            500 <= b && J(15);
            var c = P(a, Va);
            if ("transaction" != c && "item" != c) {
                c = R(a, Wa);
                var d = (new Date).getTime()
                  , e = R(a, Xa);
                0 == e && a.set(Xa, d);
                e = Math.round(2 * (d - e) / 1E3);
                0 < e && (c = Math.min(c + e, 20),
                a.set(Xa, d));
                if (0 >= c)
                    throw "abort";
                a.set(Wa, --c)
            }
            a.set(Ua, ++b)
        }
        ;var Ya = function() {
            this.data = new ee
        };
        Ya.prototype.get = function(a) {
            var b = $a(a)
              , c = this.data.get(a);
            b && void 0 == c && (c = ea(b.defaultValue) ? b.defaultValue() : b.defaultValue);
            return b && b.Z ? b.Z(this, a, c) : c
        }
        ;
        var P = function(a, b) {
            a = a.get(b);
            return void 0 == a ? "" : "" + a
        }
          , R = function(a, b) {
            a = a.get(b);
            return void 0 == a || "" === a ? 0 : Number(a)
        };
        Ya.prototype.Z = function(a) {
            return (a = this.get(a)) && ea(a) ? a : ua
        }
        ;
        Ya.prototype.set = function(a, b, c) {
            if (a)
                if ("object" == typeof a)
                    for (var d in a)
                        a.hasOwnProperty(d) && ab(this, d, a[d], c);
                else
                    ab(this, a, b, c)
        }
        ;
        var ab = function(a, b, c, d) {
            if (void 0 != c)
                switch (b) {
                case Na:
                    wb.test(c)
                }
            var e = $a(b);
            e && e.o ? e.o(a, b, c, d) : a.data.set(b, c, d)
        };
        var ue = new ee
          , ve = []
          , bb = function(a, b, c, d, e) {
            this.name = a;
            this.F = b;
            this.Z = d;
            this.o = e;
            this.defaultValue = c
        }
          , $a = function(a) {
            var b = ue.get(a);
            if (!b)
                for (var c = 0; c < ve.length; c++) {
                    var d = ve[c]
                      , e = d[0].exec(a);
                    if (e) {
                        b = d[1](e);
                        ue.set(b.name, b);
                        break
                    }
                }
            return b
        }
          , yc = function(a) {
            var b;
            ue.map(function(c, d) {
                d.F == a && (b = d)
            });
            return b && b.name
        }
          , S = function(a, b, c, d, e) {
            a = new bb(a,b,c,d,e);
            ue.set(a.name, a);
            return a.name
        }
          , cb = function(a, b) {
            ve.push([new RegExp("^" + a + "$"), b])
        }
          , T = function(a, b, c) {
            return S(a, b, c, void 0, db)
        }
          , db = function() {};
        var hb = T("apiVersion", "v")
          , ib = T("clientVersion", "_v");
        S("anonymizeIp", "aip");
        var jb = S("adSenseId", "a")
          , Va = S("hitType", "t")
          , Ia = S("hitCallback")
          , Ra = S("hitPayload");
        S("nonInteraction", "ni");
        S("currencyCode", "cu");
        S("dataSource", "ds");
        var Vd = S("useBeacon", void 0, !1)
          , fa = S("transport");
        S("sessionControl", "sc", "");
        S("sessionGroup", "sg");
        S("queueTime", "qt");
        var Ac = S("_s", "_s");
        S("screenName", "cd");
        var kb = S("location", "dl", "")
          , lb = S("referrer", "dr")
          , mb = S("page", "dp", "");
        S("hostname", "dh");
        var nb = S("language", "ul")
          , ob = S("encoding", "de");
        S("title", "dt", function() {
            return M.title || void 0
        });
        cb("contentGroup([0-9]+)", function(a) {
            return new bb(a[0],"cg" + a[1])
        });
        var pb = S("screenColors", "sd")
          , qb = S("screenResolution", "sr")
          , rb = S("viewportSize", "vp")
          , sb = S("javaEnabled", "je")
          , tb = S("flashVersion", "fl");
        S("campaignId", "ci");
        S("campaignName", "cn");
        S("campaignSource", "cs");
        S("campaignMedium", "cm");
        S("campaignKeyword", "ck");
        S("campaignContent", "cc");
        var ub = S("eventCategory", "ec")
          , xb = S("eventAction", "ea")
          , yb = S("eventLabel", "el")
          , zb = S("eventValue", "ev")
          , Bb = S("socialNetwork", "sn")
          , Cb = S("socialAction", "sa")
          , Db = S("socialTarget", "st")
          , Eb = S("l1", "plt")
          , Fb = S("l2", "pdt")
          , Gb = S("l3", "dns")
          , Hb = S("l4", "rrt")
          , Ib = S("l5", "srt")
          , Jb = S("l6", "tcp")
          , Kb = S("l7", "dit")
          , Lb = S("l8", "clt")
          , Ve = S("l9", "_gst")
          , We = S("l10", "_gbt")
          , Xe = S("l11", "_cst")
          , Ye = S("l12", "_cbt")
          , Mb = S("timingCategory", "utc")
          , Nb = S("timingVar", "utv")
          , Ob = S("timingLabel", "utl")
          , Pb = S("timingValue", "utt");
        S("appName", "an");
        S("appVersion", "av", "");
        S("appId", "aid", "");
        S("appInstallerId", "aiid", "");
        S("exDescription", "exd");
        S("exFatal", "exf");
        var Nc = S("expId", "xid")
          , Oc = S("expVar", "xvar")
          , m = S("exp", "exp")
          , Rc = S("_utma", "_utma")
          , Sc = S("_utmz", "_utmz")
          , Tc = S("_utmht", "_utmht")
          , Ua = S("_hc", void 0, 0)
          , Xa = S("_ti", void 0, 0)
          , Wa = S("_to", void 0, 20);
        cb("dimension([0-9]+)", function(a) {
            return new bb(a[0],"cd" + a[1])
        });
        cb("metric([0-9]+)", function(a) {
            return new bb(a[0],"cm" + a[1])
        });
        S("linkerParam", void 0, void 0, Bc, db);
        var Ze = T("_cd2l", void 0, !1)
          , ld = S("usage", "_u")
          , Gd = S("_um");
        S("forceSSL", void 0, void 0, function() {
            return Ba
        }, function(a, b, c) {
            J(34);
            Ba = !!c
        });
        var ed = S("_j1", "jid")
          , ia = S("_j2", "gjid");
        cb("\\&(.*)", function(a) {
            var b = new bb(a[0],a[1])
              , c = yc(a[0].substring(1));
            c && (b.Z = function(d) {
                return d.get(c)
            }
            ,
            b.o = function(d, e, g, ca) {
                d.set(c, g, ca)
            }
            ,
            b.F = void 0);
            return b
        });
        var Qb = T("_oot")
          , dd = S("previewTask")
          , Rb = S("checkProtocolTask")
          , md = S("validationTask")
          , Sb = S("checkStorageTask")
          , Uc = S("historyImportTask")
          , Tb = S("samplerTask")
          , Vb = S("_rlt")
          , Wb = S("buildHitTask")
          , Xb = S("sendHitTask")
          , Vc = S("ceTask")
          , zd = S("devIdTask")
          , Cd = S("timingTask")
          , Ld = S("displayFeaturesTask")
          , oa = S("customTask")
          , ze = S("fpsCrossDomainTask")
          , Re = T("_cta")
          , V = T("name")
          , Q = T("clientId", "cid")
          , n = T("clientIdTime")
          , xd = T("storedClientId")
          , Ad = S("userId", "uid")
          , Na = T("trackingId", "tid")
          , U = T("cookieName", void 0, "_ga")
          , W = T("cookieDomain")
          , Yb = T("cookiePath", void 0, "/")
          , Zb = T("cookieExpires", void 0, 63072E3)
          , Hd = T("cookieUpdate", void 0, !0)
          , Be = T("cookieFlags", void 0, "")
          , $b = T("legacyCookieDomain")
          , Wc = T("legacyHistoryImport", void 0, !0)
          , ac = T("storage", void 0, "cookie")
          , bc = T("allowLinker", void 0, !1)
          , cc = T("allowAnchor", void 0, !0)
          , Ka = T("sampleRate", "sf", 100)
          , dc = T("siteSpeedSampleRate", void 0, 1)
          , ec = T("alwaysSendReferrer", void 0, !1)
          , I = T("_gid", "_gid")
          , la = T("_gcn")
          , Kd = T("useAmpClientId")
          , ce = T("_gclid")
          , fe = T("_gt")
          , he = T("_ge", void 0, 7776E6)
          , ie = T("_gclsrc")
          , je = T("storeGac", void 0, !0)
          , oe = S("_x_19")
          , Ae = S("_fplc", "_fplc")
          , F = T("_cs")
          , Je = T("_useUp", void 0, !1)
          , Le = S("up", "up")
          , Qe = S("_tac", void 0, !1)
          , Se = T("_gbraid")
          , Te = T("_gbt")
          , bf = T("_gbe", void 0, 7776E6)
          , gd = S("transportUrl")
          , Md = S("_r", "_r")
          , Od = S("_slc", "_slc")
          , qe = S("_dp")
          , ad = S("_jt", void 0, "n")
          , Ud = S("allowAdFeatures", void 0, !0)
          , xe = S("allowAdPersonalizationSignals", void 0, !0);
        function X(a, b, c, d) {
            b[a] = function() {
                try {
                    return d && J(d),
                    c.apply(this, arguments)
                } catch (e) {
                    throw ge("exc", a, e && e.name),
                    e;
                }
            }
        }
        ;var Ed = function(a) {
            if ("cookie" == a.get(ac))
                return a = Ca("FPLC"),
                0 < a.length ? a[0] : void 0
        }
          , Fe = function(a) {
            var b;
            if (b = P(a, oe) && a.get(Ze))
                b = De.get(a.get(cc)),
                b = !(b && b._fplc);
            b && !Ed(a) && a.set(Ae, "0")
        };
        var aa = function(a) {
            var b = Math.min(R(a, dc), 100);
            return La(P(a, Q)) % 100 >= b ? !1 : !0
        }
          , gc = function(a) {
            var b = {};
            if (Ec(b) || Fc(b)) {
                var c = b[Eb];
                void 0 == c || Infinity == c || isNaN(c) || (0 < c ? (Y(b, Gb),
                Y(b, Jb),
                Y(b, Ib),
                Y(b, Fb),
                Y(b, Hb),
                Y(b, Kb),
                Y(b, Lb),
                Y(b, Ve),
                Y(b, We),
                Y(b, Xe),
                Y(b, Ye),
                va(function() {
                    a(b)
                }, 10)) : L(O, "load", function() {
                    gc(a)
                }, !1))
            }
        }
          , Ec = function(a) {
            var b = O.performance || O.webkitPerformance;
            b = b && b.timing;
            if (!b)
                return !1;
            var c = b.navigationStart;
            if (0 == c)
                return !1;
            a[Eb] = b.loadEventStart - c;
            a[Gb] = b.domainLookupEnd - b.domainLookupStart;
            a[Jb] = b.connectEnd - b.connectStart;
            a[Ib] = b.responseStart - b.requestStart;
            a[Fb] = b.responseEnd - b.responseStart;
            a[Hb] = b.fetchStart - c;
            a[Kb] = b.domInteractive - c;
            a[Lb] = b.domContentLoadedEventStart - c;
            a[Ve] = N.L - c;
            a[We] = N.ya - c;
            O.google_tag_manager && O.google_tag_manager._li && (b = O.google_tag_manager._li,
            a[Xe] = b.cst,
            a[Ye] = b.cbt);
            return !0
        }
          , Fc = function(a) {
            if (O.top != O)
                return !1;
            var b = O.external
              , c = b && b.onloadT;
            b && !b.isValidLoadTime && (c = void 0);
            2147483648 < c && (c = void 0);
            0 < c && b.setPageReadyTime();
            if (void 0 == c)
                return !1;
            a[Eb] = c;
            return !0
        }
          , Y = function(a, b) {
            var c = a[b];
            if (isNaN(c) || Infinity == c || 0 > c)
                a[b] = void 0
        }
          , Fd = function(a) {
            return function(b) {
                if ("pageview" == b.get(Va) && !a.I) {
                    a.I = !0;
                    var c = aa(b)
                      , d = 0 < E(P(b, kb), "gclid").length
                      , e = 0 < E(P(b, kb), "wbraid").length;
                    (c || d || e) && gc(function(g) {
                        c && a.send("timing", g);
                        (d || e) && a.send("adtiming", g)
                    })
                }
            }
        };
        var hc = !1
          , mc = function(a) {
            if ("cookie" == P(a, ac)) {
                if (a.get(Hd) || P(a, xd) != P(a, Q)) {
                    var b = 1E3 * R(a, Zb);
                    ma(a, Q, U, b);
                    a.data.set(xd, P(a, Q))
                }
                (a.get(Hd) || uc(a) != P(a, I)) && ma(a, I, la, 864E5);
                if (a.get(je)) {
                    if (b = P(a, ce)) {
                        var c = Math.min(R(a, he), 1E3 * R(a, Zb));
                        c = 0 === c ? 0 : Math.min(c, 1E3 * R(a, fe) + c - (new Date).getTime());
                        a.data.set(he, c);
                        var d = {}
                          , e = P(a, fe)
                          , g = P(a, ie)
                          , ca = kc(P(a, Yb))
                          , l = lc(P(a, W))
                          , k = P(a, Na)
                          , w = P(a, Be);
                        g && "aw.ds" != g ? d && (d.ua = !0) : (b = ["1", e, Cc(b)].join("."),
                        0 <= c && (d && (d.ta = !0),
                        zc("_gac_" + Cc(k), b, ca, l, k, c, w)));
                        le(d)
                    }
                } else
                    J(75);
                a.get(je) && (b = P(a, Se)) && (c = Math.min(R(a, bf), 1E3 * R(a, Zb)),
                c = 0 === c ? 0 : Math.min(c, 1E3 * R(a, Te) + c - (new Date).getTime()),
                a.data.set(bf, c),
                d = {},
                w = P(a, Te),
                ca = kc(P(a, Yb)),
                l = lc(P(a, W)),
                k = P(a, Na),
                a = P(a, Be),
                b = ["1", w, Cc(b)].join("."),
                0 <= c && (d && (d.ta = !0),
                zc("_gac_gb_" + Cc(k), b, ca, l, k, c, a)),
                ef(d))
            }
        }
          , ma = function(a, b, c, d) {
            var e = nd(a, b);
            if (e) {
                c = P(a, c);
                var g = kc(P(a, Yb))
                  , ca = lc(P(a, W))
                  , l = P(a, Be)
                  , k = P(a, Na);
                if ("auto" != ca)
                    zc(c, e, g, ca, k, d, l) && (hc = !0);
                else {
                    J(32);
                    for (var w = id(), Ce = 0; Ce < w.length; Ce++)
                        if (ca = w[Ce],
                        a.data.set(W, ca),
                        e = nd(a, b),
                        zc(c, e, g, ca, k, d, l)) {
                            hc = !0;
                            return
                        }
                    a.data.set(W, "auto")
                }
            }
        }
          , uc = function(a) {
            var b = Ca(P(a, la));
            return Xd(a, b)
        }
          , nc = function(a) {
            if ("cookie" == P(a, ac) && !hc && (mc(a),
            !hc))
                throw "abort";
        }
          , Yc = function(a) {
            if (a.get(Wc)) {
                var b = P(a, W)
                  , c = P(a, $b) || xa()
                  , d = Xc("__utma", c, b);
                d && (J(19),
                a.set(Tc, (new Date).getTime(), !0),
                a.set(Rc, d.R),
                (b = Xc("__utmz", c, b)) && d.hash == b.hash && a.set(Sc, b.R))
            }
        }
          , nd = function(a, b) {
            b = Cc(P(a, b));
            var c = lc(P(a, W)).split(".").length;
            a = jc(P(a, Yb));
            1 < a && (c += "-" + a);
            return b ? ["GA1", c, b].join(".") : ""
        }
          , Xd = function(a, b) {
            return na(b, P(a, W), P(a, Yb))
        }
          , na = function(a, b, c) {
            if (!a || 1 > a.length)
                J(12);
            else {
                for (var d = [], e = 0; e < a.length; e++) {
                    var g = a[e];
                    var ca = g.split(".");
                    var l = ca.shift();
                    ("GA1" == l || "1" == l) && 1 < ca.length ? (g = ca.shift().split("-"),
                    1 == g.length && (g[1] = "1"),
                    g[0] *= 1,
                    g[1] *= 1,
                    ca = {
                        H: g,
                        s: ca.join(".")
                    }) : ca = kd.test(g) ? {
                        H: [0, 0],
                        s: g
                    } : void 0;
                    ca && d.push(ca)
                }
                if (1 == d.length)
                    return J(13),
                    d[0].s;
                if (0 == d.length)
                    J(12);
                else {
                    J(14);
                    d = Gc(d, lc(b).split(".").length, 0);
                    if (1 == d.length)
                        return d[0].s;
                    d = Gc(d, jc(c), 1);
                    1 < d.length && J(41);
                    return d[0] && d[0].s
                }
            }
        }
          , Gc = function(a, b, c) {
            for (var d = [], e = [], g, ca = 0; ca < a.length; ca++) {
                var l = a[ca];
                l.H[c] == b ? d.push(l) : void 0 == g || l.H[c] < g ? (e = [l],
                g = l.H[c]) : l.H[c] == g && e.push(l)
            }
            return 0 < d.length ? d : e
        }
          , lc = function(a) {
            return 0 == a.indexOf(".") ? a.substr(1) : a
        }
          , id = function() {
            var a = []
              , b = xa().split(".");
            if (4 == b.length) {
                var c = b[b.length - 1];
                if (parseInt(c, 10) == c)
                    return ["none"]
            }
            for (c = b.length - 2; 0 <= c; c--)
                a.push(b.slice(c).join("."));
            b = M.location.hostname;
            eb.test(b) || vc.test(b) || a.push("none");
            return a
        }
          , kc = function(a) {
            if (!a)
                return "/";
            1 < a.length && a.lastIndexOf("/") == a.length - 1 && (a = a.substr(0, a.length - 1));
            0 != a.indexOf("/") && (a = "/" + a);
            return a
        }
          , jc = function(a) {
            a = kc(a);
            return "/" == a ? 1 : a.split("/").length
        }
          , le = function(a) {
            a.ta && J(77);
            a.na && J(74);
            a.pa && J(73);
            a.ua && J(69)
        }
          , ef = function(a) {
            a.ta && J(85);
            a.na && J(86);
            a.pa && J(87)
        };
        function Xc(a, b, c) {
            "none" == b && (b = "");
            var d = []
              , e = Ca(a);
            a = "__utma" == a ? 6 : 2;
            for (var g = 0; g < e.length; g++) {
                var ca = ("" + e[g]).split(".");
                ca.length >= a && d.push({
                    hash: ca[0],
                    R: e[g],
                    O: ca
                })
            }
            if (0 != d.length)
                return 1 == d.length ? d[0] : Zc(b, d) || Zc(c, d) || Zc(null, d) || d[0]
        }
        function Zc(a, b) {
            if (null == a)
                var c = a = 1;
            else
                c = La(a),
                a = La(D(a, ".") ? a.substring(1) : "." + a);
            for (var d = 0; d < b.length; d++)
                if (b[d].hash == c || b[d].hash == a)
                    return b[d]
        }
        ;var Jc = new RegExp(/^https?:\/\/([^\/:]+)/)
          , De = O.google_tag_data.glBridge
          , Kc = RegExp("(.*)([?&#])(?:_ga=[^&#]*)(?:&?)(.*)")
          , od = RegExp("(.*)([?&#])(?:_gac=[^&#]*)(?:&?)(.*)");
        function Bc(a) {
            if (a.get(Ze))
                return J(35),
                De.generate($e(a));
            var b = P(a, Q)
              , c = P(a, I) || "";
            b = "_ga=2." + K(pa(c + b, 0) + "." + c + "-" + b);
            (a = af(a)) ? (J(44),
            a = "&_gac=1." + K([pa(a.qa, 0), a.timestamp, a.qa].join("."))) : a = "";
            return b + a
        }
        function Ic(a, b) {
            var c = new Date
              , d = O.navigator
              , e = d.plugins || [];
            a = [a, d.userAgent, c.getTimezoneOffset(), c.getYear(), c.getDate(), c.getHours(), c.getMinutes() + b];
            for (b = 0; b < e.length; ++b)
                a.push(e[b].description);
            return La(a.join("."))
        }
        function pa(a, b) {
            var c = new Date
              , d = O.navigator
              , e = c.getHours() + Math.floor((c.getMinutes() + b) / 60);
            return La([a, d.userAgent, d.language || "", c.getTimezoneOffset(), c.getYear(), c.getDate() + Math.floor(e / 24), (24 + e) % 24, (60 + c.getMinutes() + b) % 60].join("."))
        }
        var Dc = function(a) {
            J(48);
            this.target = a;
            this.T = !1
        };
        Dc.prototype.ca = function(a, b) {
            if (a) {
                if (this.target.get(Ze))
                    return De.decorate($e(this.target), a, b);
                if (a.tagName) {
                    if ("a" == a.tagName.toLowerCase()) {
                        a.href && (a.href = qd(this, a.href, b));
                        return
                    }
                    if ("form" == a.tagName.toLowerCase())
                        return rd(this, a)
                }
                if ("string" == typeof a)
                    return qd(this, a, b)
            }
        }
        ;
        var qd = function(a, b, c) {
            var d = Kc.exec(b);
            d && 3 <= d.length && (b = d[1] + (d[3] ? d[2] + d[3] : ""));
            (d = od.exec(b)) && 3 <= d.length && (b = d[1] + (d[3] ? d[2] + d[3] : ""));
            a = a.target.get("linkerParam");
            d = b.indexOf("?");
            var e = b.indexOf("#");
            b = c ? b + ((-1 == e ? "#" : "&") + a) : -1 == e ? b + ((-1 === d ? "?" : "&") + a) : b.substring(0, e) + (-1 === d || d > e ? "?" : "&") + a + b.substring(e);
            b = b.replace(/&+_ga=/, "&_ga=");
            return b = b.replace(RegExp("&+_gac="), "&_gac=")
        }
          , rd = function(a, b) {
            if (b && b.action)
                if ("get" == b.method.toLowerCase()) {
                    a = a.target.get("linkerParam").split("&");
                    for (var c = 0; c < a.length; c++) {
                        var d = a[c].split("=")
                          , e = d[1];
                        d = d[0];
                        for (var g = b.childNodes || [], ca = !1, l = 0; l < g.length; l++)
                            if (g[l].name == d) {
                                g[l].setAttribute("value", e);
                                ca = !0;
                                break
                            }
                        ca || (g = M.createElement("input"),
                        g.setAttribute("type", "hidden"),
                        g.setAttribute("name", d),
                        g.setAttribute("value", e),
                        b.appendChild(g))
                    }
                } else
                    "post" == b.method.toLowerCase() && (b.action = qd(a, b.action))
        };
        Dc.prototype.S = function(a, b, c) {
            function d(g) {
                try {
                    g = g || O.event;
                    a: {
                        var ca = g.target || g.srcElement;
                        for (g = 100; ca && 0 < g; ) {
                            if (ca.href && ca.nodeName.match(/^a(?:rea)?$/i)) {
                                var l = ca;
                                break a
                            }
                            ca = ca.parentNode;
                            g--
                        }
                        l = {}
                    }
                    ("http:" == l.protocol || "https:" == l.protocol) && sd(a, l.hostname || "") && l.href && (l.href = qd(e, l.href, b))
                } catch (k) {
                    J(26)
                }
            }
            var e = this;
            this.target.get(Ze) ? De.auto(function() {
                return $e(e.target)
            }, a, b ? "fragment" : "", c) : (this.T || (this.T = !0,
            L(M, "mousedown", d, !1),
            L(M, "keyup", d, !1)),
            c && L(M, "submit", function(g) {
                g = g || O.event;
                if ((g = g.target || g.srcElement) && g.action) {
                    var ca = g.action.match(Jc);
                    ca && sd(a, ca[1]) && rd(e, g)
                }
            }))
        }
        ;
        Dc.prototype.$ = function(a) {
            if (a) {
                var b = this
                  , c = b.target.get(F);
                void 0 !== c && De.passthrough(function() {
                    if (c("analytics_storage"))
                        return {};
                    var d = {};
                    return d._ga = b.target.get(Q),
                    d._up = "1",
                    d
                }, 1, !0)
            }
        }
        ;
        function sd(a, b) {
            if (b == M.location.hostname)
                return !1;
            for (var c = 0; c < a.length; c++)
                if (a[c]instanceof RegExp) {
                    if (a[c].test(b))
                        return !0
                } else if (0 <= b.indexOf(a[c]))
                    return !0;
            return !1
        }
        function ke(a, b) {
            return b != Ic(a, 0) && b != Ic(a, -1) && b != Ic(a, -2) && b != pa(a, 0) && b != pa(a, -1) && b != pa(a, -2)
        }
        function $e(a) {
            var b = af(a)
              , c = {};
            c._ga = a.get(Q);
            c._gid = a.get(I) || void 0;
            c._gac = b ? [b.qa, b.timestamp].join(".") : void 0;
            b = a.get(Ae);
            a = Ed(a);
            return c._fplc = b && "0" !== b ? b : a,
            c
        }
        function af(a) {
            function b(e) {
                return void 0 == e || "" === e ? 0 : Number(e)
            }
            var c = a.get(ce);
            if (c && a.get(je)) {
                var d = b(a.get(fe));
                if (1E3 * d + b(a.get(he)) <= (new Date).getTime())
                    J(76);
                else
                    return {
                        timestamp: d,
                        qa: c
                    }
            }
        }
        ;var p = /^(GTM|OPT)-[A-Z0-9]+$/
          , Ie = /^G-[A-Z0-9]+$/
          , q = /;_gaexp=[^;]*/g
          , r = /;((__utma=)|([^;=]+=GAX?\d+\.))[^;]*/g
          , Aa = /^https?:\/\/[\w\-.]+\.google.com(:\d+)?\/optimize\/opt-launch\.html\?.*$/
          , t = function(a) {
            function b(d, e) {
                e && (c += "&" + d + "=" + K(e))
            }
            var c = Ge(a.type) + K(a.id);
            "dataLayer" != a.B && b("l", a.B);
            b("cx", a.context);
            b("t", a.target);
            b("cid", a.clientId);
            b("cidt", a.ka);
            b("gac", a.la);
            b("aip", a.ia);
            a.sync && b("m", "sync");
            b("cycle", a.G);
            a.qa && b("gclid", a.qa);
            Aa.test(M.referrer) && b("cb", String(hd()));
            return c
        }
          , He = function(a, b) {
            var c = (new Date).getTime();
            O[a.B] = O[a.B] || [];
            c = {
                "gtm.start": c
            };
            a.sync || (c.event = "gtm.js");
            O[a.B].push(c);
            2 === a.type && function(d, e, g) {
                O[a.B].push(arguments)
            }("config", a.id, b)
        }
          , Ke = function(a, b, c, d) {
            c = c || {};
            var e = 1;
            Ie.test(b) && (e = 2);
            var g = {
                id: b,
                type: e,
                B: c.dataLayer || "dataLayer",
                G: !1
            }
              , ca = void 0;
            a.get("&gtm") == b && (g.G = !0);
            1 === e ? (g.ia = !!a.get("anonymizeIp"),
            g.sync = d,
            b = String(a.get("name")),
            "t0" != b && (g.target = b),
            G(String(a.get("trackingId"))) || (g.clientId = String(a.get(Q)),
            g.ka = Number(a.get(n)),
            c = c.palindrome ? r : q,
            c = (c = M.cookie.replace(/^|(; +)/g, ";").match(c)) ? c.sort().join("").substring(1) : void 0,
            g.la = c,
            g.qa = E(P(a, kb), "gclid"))) : 2 === e && (g.context = "c",
            ca = {
                allow_google_signals: a.get(Ud),
                allow_ad_personalization_signals: a.get(xe)
            });
            He(g, ca);
            return t(g)
        };
        var H = {}
          , Jd = function(a, b) {
            b || (b = (b = P(a, V)) && "t0" != b ? Wd.test(b) ? "_gat_" + Cc(P(a, Na)) : "_gat_" + Cc(b) : "_gat");
            this.Y = b
        }
          , Rd = function(a, b) {
            var c = b.get(Wb);
            b.set(Wb, function(e) {
                Pd(a, e, ed);
                Pd(a, e, ia);
                var g = c(e);
                Qd(a, e);
                return g
            });
            var d = b.get(Xb);
            b.set(Xb, function(e) {
                var g = d(e);
                if (se(e)) {
                    J(80);
                    var ca = {
                        U: re(e, 1),
                        google: re(e, 2),
                        count: 0
                    };
                    pe("https://stats.g.doubleclick.net/j/collect", ca.U, ca);
                    e.set(ed, "", !0)
                }
                return g
            })
        }
          , Pd = function(a, b, c) {
            !1 === b.get(Ud) || b.get(c) || ("1" == Ca(a.Y)[0] ? b.set(c, "", !0) : b.set(c, "" + hd(), !0))
        }
          , Qd = function(a, b) {
            se(b) && zc(a.Y, "1", P(b, Yb), P(b, W), P(b, Na), 6E4, P(b, Be))
        }
          , se = function(a) {
            return !!a.get(ed) && !1 !== a.get(Ud)
        }
          , Ne = function(a) {
            return !H[P(a, Na)] && void 0 === a.get("&gtm") && void 0 === a.get(fa) && void 0 === a.get(gd) && void 0 === a.get(oe)
        }
          , re = function(a, b) {
            var c = new ee
              , d = function(g) {
                $a(g).F && c.set($a(g).F, a.get(g))
            };
            d(hb);
            d(ib);
            d(Na);
            d(Q);
            d(ed);
            1 == b && (d(Ad),
            d(ia),
            d(I));
            !1 === a.get(xe) && c.set("npa", "1");
            c.set($a(ld).F, Td(a));
            var e = "";
            c.map(function(g, ca) {
                e += K(g) + "=";
                e += K("" + ca) + "&"
            });
            e += "z=" + hd();
            1 == b ? e = "t=dc&aip=1&_r=3&" + e : 2 == b && (e = "t=sr&aip=1&_r=4&slf_rd=1&" + e);
            return e
        }
          , Me = function(a) {
            if (Ne(a))
                return H[P(a, Na)] = !0,
                function(b) {
                    if (b && !H[b]) {
                        var c = Ke(a, b);
                        Id(c);
                        H[b] = !0
                    }
                }
        }
          , Wd = /^gtm\d+$/;
        var fd = function(a, b) {
            a = a.model;
            if (!a.get("dcLoaded")) {
                var c = new $c(Dd(a));
                c.set(29);
                a.set(Gd, c.C);
                b = b || {};
                var d;
                b[U] && (d = Cc(b[U]));
                b = new Jd(a,d);
                Rd(b, a);
                a.set("dcLoaded", !0)
            }
        };
        var Sd = function(a) {
            if (!a.get("dcLoaded") && "cookie" == a.get(ac)) {
                var b = new Jd(a);
                Pd(b, a, ed);
                Pd(b, a, ia);
                Qd(b, a);
                b = se(a);
                var c = Ne(a);
                b && a.set(Md, 1, !0);
                c && a.set(Od, 1, !0);
                if (b || c)
                    a.set(ad, "d", !0),
                    J(79),
                    a.set(qe, {
                        U: re(a, 1),
                        google: re(a, 2),
                        V: Me(a),
                        count: 0
                    }, !0)
            }
        };
        var Lc = function() {
            var a = O.gaGlobal = O.gaGlobal || {};
            return a.hid = a.hid || hd()
        };
        var wb = /^(UA|YT|MO|GP)-(\d+)-(\d+)$/
          , pc = function(a) {
            function b(e, g) {
                d.model.data.set(e, g)
            }
            function c(e, g) {
                b(e, g);
                d.filters.add(e)
            }
            var d = this;
            this.model = new Ya;
            this.filters = new Ha;
            b(V, a[V]);
            b(Na, sa(a[Na]));
            b(U, a[U]);
            b(W, a[W] || xa());
            b(Yb, a[Yb]);
            b(Zb, a[Zb]);
            b(Hd, a[Hd]);
            b(Be, a[Be]);
            b($b, a[$b]);
            b(Wc, a[Wc]);
            b(bc, a[bc]);
            b(cc, a[cc]);
            b(Ka, a[Ka]);
            b(dc, a[dc]);
            b(ec, a[ec]);
            b(ac, a[ac]);
            b(Ad, a[Ad]);
            b(n, a[n]);
            b(Kd, a[Kd]);
            b(je, a[je]);
            b(Ze, a[Ze]);
            b(oe, a[oe]);
            b(Je, a[Je]);
            b(F, a[F]);
            b(hb, 1);
            b(ib, "j94");
            c(Re, Pe);
            c(Qb, Ma);
            c(oa, ua);
            c(dd, cd);
            c(Rb, Oa);
            c(md, vb);
            c(Sb, nc);
            c(Uc, Yc);
            c(Tb, Ja);
            c(Vb, Ta);
            c(Vc, Hc);
            c(zd, yd);
            c(Ld, Sd);
            c(ze, Fe);
            c(Wb, Pa);
            c(Xb, Sa);
            c(Cd, Fd(this));
            pd(this.model);
            td(this.model, a[Q]);
            this.model.set(jb, Lc())
        };
        pc.prototype.get = function(a) {
            return this.model.get(a)
        }
        ;
        pc.prototype.set = function(a, b) {
            this.model.set(a, b)
        }
        ;
        pc.prototype.send = function(a) {
            if (!(1 > arguments.length)) {
                if ("string" === typeof arguments[0]) {
                    var b = arguments[0];
                    var c = [].slice.call(arguments, 1)
                } else
                    b = arguments[0] && arguments[0][Va],
                    c = arguments;
                b && (c = za(me[b] || [], c),
                c[Va] = b,
                this.model.set(c, void 0, !0),
                this.filters.D(this.model),
                this.model.data.m = {})
            }
        }
        ;
        pc.prototype.ma = function(a, b) {
            var c = this;
            u(a, c, b) || (v(a, function() {
                u(a, c, b)
            }),
            y(String(c.get(V)), a, void 0, b, !0))
        }
        ;
        var td = function(a, b) {
            var c = P(a, U);
            a.data.set(la, "_ga" == c ? "_gid" : c + "_gid");
            if ("cookie" == P(a, ac)) {
                hc = !1;
                c = Ca(P(a, U));
                c = Xd(a, c);
                if (!c) {
                    c = P(a, W);
                    var d = P(a, $b) || xa();
                    c = Xc("__utma", d, c);
                    void 0 != c ? (J(10),
                    c = c.O[1] + "." + c.O[2]) : c = void 0
                }
                c && (hc = !0);
                if (d = c && !a.get(Hd))
                    if (d = c.split("."),
                    2 != d.length)
                        d = !1;
                    else if (d = Number(d[1])) {
                        var e = R(a, Zb);
                        d = d + e < (new Date).getTime() / 1E3
                    } else
                        d = !1;
                d && (c = void 0);
                c && (a.data.set(xd, c),
                a.data.set(Q, c),
                (c = uc(a)) && a.data.set(I, c));
                a.get(je) && (c = a.get(ce),
                d = a.get(ie),
                !c || d && "aw.ds" != d) && (c = {},
                d = (M ? df(c) : {})[P(a, Na)],
                le(c),
                d && 0 != d.length && (c = d[0],
                a.data.set(fe, c.timestamp / 1E3),
                a.data.set(ce, c.qa)));
                a.get(je) && (c = a.get(Se),
                d = {},
                e = (M ? df(d, "_gac_gb", !0) : {})[P(a, Na)],
                ef(d),
                e && 0 != e.length && (d = e[0],
                e = d.qa,
                c && c !== e || (d.labels && d.labels.length && (e += "." + d.labels.join(".")),
                a.data.set(Te, d.timestamp / 1E3),
                a.data.set(Se, e))))
            }
            if (a.get(Hd)) {
                c = be("_ga", !!a.get(cc));
                var g = be("_gl", !!a.get(cc));
                d = De.get(a.get(cc));
                e = d._ga;
                g && 0 < g.indexOf("_ga*") && !e && J(30);
                if (b || !a.get(Je))
                    g = !1;
                else if (g = a.get(F),
                void 0 === g || g("analytics_storage"))
                    g = !1;
                else {
                    J(84);
                    a.data.set(Le, 1);
                    if (g = d._up)
                        if (g = Jc.exec(M.referrer)) {
                            g = g[1];
                            var ca = M.location.hostname;
                            g = ca === g || 0 <= ca.indexOf("." + g) || 0 <= g.indexOf("." + ca) ? !0 : !1
                        } else
                            g = !1;
                    g = g ? !0 : !1
                }
                ca = d.gclid;
                var l = d._gac;
                if (c || e || ca || l)
                    if (c && e && J(36),
                    a.get(bc) || ye(a.get(Kd)) || g) {
                        if (e && (J(38),
                        a.data.set(Q, e),
                        d._gid && (J(51),
                        a.data.set(I, d._gid))),
                        ca ? (J(82),
                        a.data.set(ce, ca),
                        d.gclsrc && a.data.set(ie, d.gclsrc)) : l && (e = l.split(".")) && 2 === e.length && (J(37),
                        a.data.set(ce, e[0]),
                        a.data.set(fe, e[1])),
                        (d = d._fplc) && P(a, oe) && (J(83),
                        a.data.set(Ae, d)),
                        c)
                            b: if (d = c.indexOf("."),
                            -1 == d)
                                J(22);
                            else {
                                e = c.substring(0, d);
                                g = c.substring(d + 1);
                                d = g.indexOf(".");
                                c = g.substring(0, d);
                                g = g.substring(d + 1);
                                if ("1" == e) {
                                    if (d = g,
                                    ke(d, c)) {
                                        J(23);
                                        break b
                                    }
                                } else if ("2" == e) {
                                    d = g.indexOf("-");
                                    e = "";
                                    0 < d ? (e = g.substring(0, d),
                                    d = g.substring(d + 1)) : d = g.substring(1);
                                    if (ke(e + d, c)) {
                                        J(53);
                                        break b
                                    }
                                    e && (J(2),
                                    a.data.set(I, e))
                                } else {
                                    J(22);
                                    break b
                                }
                                J(11);
                                a.data.set(Q, d);
                                if (c = be("_gac", !!a.get(cc)))
                                    c = c.split("."),
                                    "1" != c[0] || 4 != c.length ? J(72) : ke(c[3], c[1]) ? J(71) : (a.data.set(ce, c[3]),
                                    a.data.set(fe, c[2]),
                                    J(70))
                            }
                    } else
                        J(21)
            }
            b && (J(9),
            a.data.set(Q, K(b)));
            a.get(Q) || (b = (b = O.gaGlobal) && b.from_cookie && "cookie" !== P(a, ac) ? void 0 : (b = b && b.vid) && -1 !== b.search(jd) ? b : void 0,
            b ? (J(17),
            a.data.set(Q, b)) : (J(8),
            a.data.set(Q, ra())));
            a.get(I) || (J(3),
            a.data.set(I, ra()));
            mc(a);
            b = O.gaGlobal = O.gaGlobal || {};
            c = P(a, Q);
            a = c === P(a, xd);
            if (void 0 == b.vid || a && !b.from_cookie)
                b.vid = c,
                b.from_cookie = a
        }
          , pd = function(a) {
            var b = O.navigator
              , c = O.screen
              , d = M.location
              , e = a.set;
            a: {
                var g = !!a.get(ec)
                  , ca = !!a.get(Kd);
                var l = M.referrer;
                if (/^(https?|android-app):\/\//i.test(l)) {
                    if (g)
                        break a;
                    g = "//" + M.location.hostname;
                    if (!de(l, g)) {
                        if (ca && (ca = g.replace(/\./g, "-") + ".cdn.ampproject.org",
                        de(l, ca))) {
                            l = void 0;
                            break a
                        }
                        break a
                    }
                }
                l = void 0
            }
            e.call(a, lb, l);
            d && (e = d.pathname || "",
            "/" != e.charAt(0) && (J(31),
            e = "/" + e),
            a.set(kb, d.protocol + "//" + d.hostname + e + d.search));
            c && a.set(qb, c.width + "x" + c.height);
            c && a.set(pb, c.colorDepth + "-bit");
            c = M.documentElement;
            l = (e = M.body) && e.clientWidth && e.clientHeight;
            ca = [];
            c && c.clientWidth && c.clientHeight && ("CSS1Compat" === M.compatMode || !l) ? ca = [c.clientWidth, c.clientHeight] : l && (ca = [e.clientWidth, e.clientHeight]);
            c = 0 >= ca[0] || 0 >= ca[1] ? "" : ca.join("x");
            a.set(rb, c);
            c = a.set;
            var k;
            if ((e = (e = O.navigator) ? e.plugins : null) && e.length)
                for (l = 0; l < e.length && !k; l++)
                    ca = e[l],
                    -1 < ca.name.indexOf("Shockwave Flash") && (k = ca.description);
            if (!k)
                try {
                    var w = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.7");
                    k = w.GetVariable("$version")
                } catch (Ce) {}
            if (!k)
                try {
                    w = new ActiveXObject("ShockwaveFlash.ShockwaveFlash.6"),
                    k = "WIN 6,0,21,0",
                    w.AllowScriptAccess = "always",
                    k = w.GetVariable("$version")
                } catch (Ce) {}
            if (!k)
                try {
                    w = new ActiveXObject("ShockwaveFlash.ShockwaveFlash"),
                    k = w.GetVariable("$version")
                } catch (Ce) {}
            k && (w = k.match(/[\d]+/g)) && 3 <= w.length && (k = w[0] + "." + w[1] + " r" + w[2]);
            c.call(a, tb, k || void 0);
            a.set(ob, M.characterSet || M.charset);
            a.set(sb, b && "function" === typeof b.javaEnabled && b.javaEnabled() || !1);
            a.set(nb, (b && (b.language || b.browserLanguage) || "").toLowerCase());
            a.data.set(ce, be("gclid", !0));
            a.data.set(ie, be("gclsrc", !0));
            a.data.set(fe, Math.round((new Date).getTime() / 1E3));
            a.get(ce) || (a.data.set(Se, be("wbraid", !0)),
            a.data.set(Te, Math.round((new Date).getTime() / 1E3)));
            if (d && a.get(cc) && (b = M.location.hash)) {
                b = b.split(/[?&#]+/);
                d = [];
                for (k = 0; k < b.length; ++k)
                    (D(b[k], "utm_id") || D(b[k], "utm_campaign") || D(b[k], "utm_source") || D(b[k], "utm_medium") || D(b[k], "utm_term") || D(b[k], "utm_content") || D(b[k], "gclid") || D(b[k], "dclid") || D(b[k], "gclsrc") || D(b[k], "wbraid")) && d.push(b[k]);
                0 < d.length && (b = "#" + d.join("&"),
                a.set(kb, a.get(kb) + b))
            }
        }
          , me = {
            pageview: [mb],
            event: [ub, xb, yb, zb],
            social: [Bb, Cb, Db],
            timing: [Mb, Nb, Pb, Ob]
        };
        var rc = function(a) {
            if ("prerender" == M.visibilityState)
                return !1;
            a();
            return !0
        }
          , z = function(a) {
            if (!rc(a)) {
                J(16);
                var b = !1
                  , c = function() {
                    if (!b && rc(a)) {
                        b = !0;
                        var d = c
                          , e = M;
                        e.removeEventListener ? e.removeEventListener("visibilitychange", d, !1) : e.detachEvent && e.detachEvent("onvisibilitychange", d)
                    }
                };
                L(M, "visibilitychange", c)
            }
        };
        var te = /^(?:(\w+)\.)?(?:(\w+):)?(\w+)$/
          , sc = function(a) {
            if (ea(a[0]))
                this.u = a[0];
            else {
                var b = te.exec(a[0]);
                null != b && 4 == b.length && (this.da = b[1] || "t0",
                this.K = b[2] || "",
                this.methodName = b[3],
                this.aa = [].slice.call(a, 1),
                this.K || (this.A = "create" == this.methodName,
                this.i = "require" == this.methodName,
                this.g = "provide" == this.methodName,
                this.ba = "remove" == this.methodName),
                this.i && (3 <= this.aa.length ? (this.X = this.aa[1],
                this.W = this.aa[2]) : this.aa[1] && (qa(this.aa[1]) ? this.X = this.aa[1] : this.W = this.aa[1])));
                b = a[1];
                a = a[2];
                if (!this.methodName)
                    throw "abort";
                if (this.i && (!qa(b) || "" == b))
                    throw "abort";
                if (this.g && (!qa(b) || "" == b || !ea(a)))
                    throw "abort";
                if (ud(this.da) || ud(this.K))
                    throw "abort";
                if (this.g && "t0" != this.da)
                    throw "abort";
            }
        };
        function ud(a) {
            return 0 <= a.indexOf(".") || 0 <= a.indexOf(":")
        }
        ;var Yd, Zd, $d, A;
        Yd = new ee;
        $d = new ee;
        A = new ee;
        Zd = {
            ec: 45,
            ecommerce: 46,
            linkid: 47
        };
        var u = function(a, b, c) {
            b == N || b.get(V);
            var d = Yd.get(a);
            if (!ea(d))
                return !1;
            b.plugins_ = b.plugins_ || new ee;
            if (b.plugins_.get(a))
                return !0;
            b.plugins_.set(a, new d(b,c || {}));
            return !0
        }
          , y = function(a, b, c, d, e) {
            if (!ea(Yd.get(b)) && !$d.get(b)) {
                Zd.hasOwnProperty(b) && J(Zd[b]);
                a = N.j(a);
                var g = void 0;
                if (p.test(b)) {
                    J(52);
                    if (!a)
                        return !0;
                    c = Ke(a.model, b, d, e);
                    g = function() {
                        Z.D(["provide", b, function() {}
                        ]);
                        var l = O[d && d.dataLayer || "dataLayer"];
                        l && l.hide && ea(l.hide.end) && l.hide[b] && (l.hide.end(),
                        l.hide.end = void 0)
                    }
                }
                !c && Zd.hasOwnProperty(b) ? (J(39),
                c = b + ".js") : J(43);
                if (c) {
                    var ca;
                    a && a.get(oe) ? ca = a.get(oe) : d && (ca = d[oe]);
                    qa(ca) || (ca = void 0);
                    a = ae(cf(c, ca));
                    !ca || ne(a.protocol) && B(a) || (a = ae(cf(c)));
                    ne(a.protocol) && B(a) && (Id(a.url, void 0, e, void 0, g),
                    $d.set(b, !0))
                }
            }
        }
          , v = function(a, b) {
            var c = A.get(a) || [];
            c.push(b);
            A.set(a, c)
        }
          , C = function(a, b) {
            Yd.set(a, b);
            b = A.get(a) || [];
            for (var c = 0; c < b.length; c++)
                b[c]();
            A.set(a, [])
        }
          , B = function(a) {
            var b = ae(M.location.href);
            if (D(a.url, Ge(1)) || D(a.url, Ge(2)))
                return !0;
            if (a.query || 0 <= a.url.indexOf("?") || 0 <= a.path.indexOf("://"))
                return !1;
            if (a.host == b.host && a.port == b.port || jf && (b = M.createElement("a"),
            b.href = jf,
            b = kf(b),
            a.host === b[0] && a.port === b[1]))
                return !0;
            b = "http:" == a.protocol ? 80 : 443;
            return "www.google-analytics.com" == a.host && (a.port || b) == b && D(a.path, "/plugins/") ? !0 : !1
        }
          , ne = function(a) {
            var b = M.location.protocol;
            return "https:" == a || a == b ? !0 : "http:" != a ? !1 : "http:" == b
        }
          , kf = function(a) {
            var b = a.hostname || ""
              , c = 0 <= b.indexOf("]");
            b = b.split(c ? "]" : ":")[0].toLowerCase();
            c && (b += "]");
            c = (a.protocol || "").toLowerCase();
            c = 1 * a.port || ("http:" == c ? 80 : "https:" == c ? 443 : "");
            a = a.pathname || "";
            D(a, "/") || (a = "/" + a);
            return [b, "" + c, a]
        }
          , ae = function(a) {
            var b = M.createElement("a");
            b.href = M.location.href;
            var c = (b.protocol || "").toLowerCase()
              , d = kf(b)
              , e = b.search || ""
              , g = c + "//" + d[0] + (d[1] ? ":" + d[1] : "");
            D(a, "//") ? a = c + a : D(a, "/") ? a = g + a : !a || D(a, "?") ? a = g + d[2] + (a || e) : 0 > a.split("/")[0].indexOf(":") && (a = g + d[2].substring(0, d[2].lastIndexOf("/")) + "/" + a);
            b.href = a;
            c = kf(b);
            return {
                protocol: (b.protocol || "").toLowerCase(),
                host: c[0],
                port: c[1],
                path: c[2],
                query: b.search || "",
                url: a || ""
            }
        }
          , cf = function(a, b) {
            return a && 0 <= a.indexOf("/") ? a : (b || bd(!1)) + "/plugins/ua/" + a
        };
        var Z = {
            ga: function() {
                Z.fa = []
            }
        };
        Z.ga();
        Z.D = function(a) {
            var b = Z.J.apply(Z, arguments);
            b = Z.fa.concat(b);
            for (Z.fa = []; 0 < b.length && !Z.v(b[0]) && !(b.shift(),
            0 < Z.fa.length); )
                ;
            Z.fa = Z.fa.concat(b)
        }
        ;
        Z.ra = function(a) {
            N.q && (300 === N.q.length && (N.q.shift(),
            N.qd++),
            N.q.push(a))
        }
        ;
        Z.J = function(a) {
            for (var b = [], c = 0; c < arguments.length; c++)
                try {
                    var d = new sc(arguments[c]);
                    d.g ? C(d.aa[0], d.aa[1]) : (d.i && (d.ha = y(d.da, d.aa[0], d.X, d.W)),
                    b.push(d));
                    Z.ra(arguments[c])
                } catch (e) {}
            return b
        }
        ;
        Z.v = function(a) {
            try {
                if (a.u)
                    a.u.call(O, N.j("t0"));
                else {
                    var b = a.da == gb ? N : N.j(a.da);
                    if (a.A) {
                        if ("t0" == a.da && (b = N.create.apply(N, a.aa),
                        null === b))
                            return !0
                    } else if (a.ba)
                        N.remove(a.da);
                    else if (b)
                        if (a.i) {
                            if (a.ha && (a.ha = y(a.da, a.aa[0], a.X, a.W)),
                            !u(a.aa[0], b, a.W))
                                return !0
                        } else if (a.K) {
                            var c = a.methodName
                              , d = a.aa
                              , e = b.plugins_.get(a.K);
                            e[c].apply(e, d)
                        } else
                            b[a.methodName].apply(b, a.aa)
                }
            } catch (g) {}
        }
        ;
        var N = function(a) {
            J(1);
            Z.D.apply(Z, [arguments])
        };
        N.h = {};
        N.P = [];
        N.L = 0;
        N.ya = 0;
        N.answer = 42;
        var we = [Na, W, V];
        N.create = function(a) {
            var b = za(we, [].slice.call(arguments));
            b[V] || (b[V] = "t0");
            var c = "" + b[V];
            if (N.h[c])
                return N.h[c];
            if (da(b))
                return null;
            b = new pc(b);
            N.h[c] = b;
            N.P.push(b);
            c = qc().tracker_created;
            if (ea(c))
                try {
                    c(b)
                } catch (d) {}
            return b
        }
        ;
        N.remove = function(a) {
            for (var b = 0; b < N.P.length; b++)
                if (N.P[b].get(V) == a) {
                    N.P.splice(b, 1);
                    N.h[a] = null;
                    break
                }
        }
        ;
        N.j = function(a) {
            return N.h[a]
        }
        ;
        N.getAll = function() {
            return N.P.slice(0)
        }
        ;
        N.N = function() {
            "ga" != gb && J(49);
            var a = O[gb];
            if (!a || 42 != a.answer) {
                N.L = a && a.l;
                N.ya = 1 * new Date;
                N.loaded = !0;
                var b = a && a.q
                  , c = ka(b);
                a = [];
                c ? a = b.slice(0) : J(50);
                N.q = c ? b : [];
                N.q.splice(0);
                N.qd = 0;
                b = O[gb] = N;
                X("create", b, b.create);
                X("remove", b, b.remove);
                X("getByName", b, b.j, 5);
                X("getAll", b, b.getAll, 6);
                b = pc.prototype;
                X("get", b, b.get, 7);
                X("set", b, b.set, 4);
                X("send", b, b.send);
                X("requireSync", b, b.ma);
                b = Ya.prototype;
                X("get", b, b.get);
                X("set", b, b.set);
                if ("https:" != M.location.protocol && !Ba) {
                    a: {
                        b = M.getElementsByTagName("script");
                        for (c = 0; c < b.length && 100 > c; c++) {
                            var d = b[c].src;
                            if (d && 0 == d.indexOf(bd(!0) + "/analytics")) {
                                b = !0;
                                break a
                            }
                        }
                        b = !1
                    }
                    b && (Ba = !0)
                }
                (O.gaplugins = O.gaplugins || {}).Linker = Dc;
                b = Dc.prototype;
                C("linker", Dc);
                X("decorate", b, b.ca, 20);
                X("autoLink", b, b.S, 25);
                X("passthrough", b, b.$, 25);
                C("displayfeatures", fd);
                C("adfeatures", fd);
                Z.D.apply(N, a)
            }
        }
        ;
        var gf = N.N
          , hf = O[gb];
        hf && hf.r ? gf() : z(gf);
        z(function() {
            Z.D(["provide", "render", ua])
        });
    }
    )(window);
    (function() {
        // Check if target matches to an element.
        function awpbusinesspressTargetMatches(selector) {
            return event.target.matches ? event.target.matches(selector) : event.target.msMatchesSelector(selector);
        }
    
        // Get next sibling.
        function awpbusinesspressNextSibling(element) {
            do {
                element = element.nextSibling;
            } while (element && element.nodeType !== 1);
            return element;
        }
    
        // Handle sub-menu arrow clicks.
        function awpbusinesspressSubMenuArrowClick(subMenuArrow, subMenuArrows, subMenus) {
            var awpbusinesspressSubMenu = awpbusinesspressNextSibling(subMenuArrow);
            if (awpbusinesspressSubMenu) {
                // Accessibility support for dropdown menu.
                var awpbusinesspressSubMenuLink = subMenuArrow.previousSibling;
    
                awpbusinesspressSetTabIndex(subMenus, -1);
    
                if (awpbusinesspressSubMenu.classList.contains('sub-menu--open')) {
                    subMenuArrow.classList.remove('sub-menu-show');
                    awpbusinesspressSubMenu.classList.remove('sub-menu--open');
                    awpbusinesspressSubMenuLink.setAttribute('aria-expanded', 'false');
                    subMenuArrow.getElementsByClassName('menu-arrow-button-hide')[0].setAttribute('aria-hidden', 'true');
                    subMenuArrow.getElementsByClassName('menu-arrow-button-show')[0].setAttribute('aria-hidden', 'false');
                } else {
                    if (subMenus.length) {
                        [].forEach.call(subMenus, function(el) {
                            el.classList.remove('sub-menu--open');
                        });
                    }
                    if (subMenuArrows.length) {
                        for (var i = 0; i < subMenuArrows.length; i++) {
                            subMenuArrows[i].classList.remove('sub-menu-show');
                            subMenuArrows[i].previousSibling.setAttribute('aria-expanded', 'false');
                            subMenuArrows[i].getElementsByClassName('menu-arrow-button-hide')[0].setAttribute('aria-hidden', 'true');
                            subMenuArrows[i].getElementsByClassName('menu-arrow-button-show')[0].setAttribute('aria-hidden', 'false');
                        }
                    }
    
                    subMenuArrow.classList.add('sub-menu-show');
                    awpbusinesspressSubMenu.classList.add('sub-menu--open');
                    awpbusinesspressSubMenuLink.setAttribute('aria-expanded', 'true');
                    subMenuArrow.getElementsByClassName('menu-arrow-button-hide')[0].setAttribute('aria-hidden', 'false');
                    subMenuArrow.getElementsByClassName('menu-arrow-button-show')[0].setAttribute('aria-hidden', 'true');
                    awpbusinesspressSetTabIndex(awpbusinesspressSubMenu, 0);
                    awpbusinesspressSetTabIndex(awpbusinesspressSubMenu.querySelectorAll('.sub-menu'), -1);
                }
            }
        }
    
        // Setup mobile menu.
        function awpbusinesspressMobileMenu() {
            document.addEventListener('click', function(event) {
                if (awpbusinesspressTargetMatches('.menu-toggle')) {
                    event.preventDefault();
                    var awpbusinesspressNavIcon = event.target || event.srcElement;
                    var awpbusinesspressMainNav = document.querySelector('.main-navigation > .primary-menu-container');
    
                    // Slide mobile menu.
                    awpbusinesspressNavIcon.classList.toggle('menu-toggle--open');
                    awpbusinesspressMainNav.classList.toggle('primary-menu-container--open');
    
                    if (awpbusinesspressNavIcon.classList.contains('menu-toggle--open')) {
                        awpbusinesspressNavIcon.setAttribute('aria-expanded', 'true');
                        awpbusinesspressSetTabIndex(document.querySelector('.main-navigation .menu'), 0);
                        awpbusinesspressSetTabIndex(document.querySelectorAll('.main-navigation .sub-menu'), -1);
                    } else {
                        awpbusinesspressNavIcon.setAttribute('aria-expanded', 'false');
                    }
    
                } else if (awpbusinesspressTargetMatches('.main-navigation .menu .sub-menu li.menu-item-has-children > .menu-arrow-button')) {
                    event.preventDefault();
                    var awpbusinesspressSubMenuArrow1 = event.target || event.srcElement;
    
                    var awpbusinesspressSubMenuArrows1 = document.querySelectorAll('.main-navigation .menu .sub-menu > li.menu-item-has-children > .menu-arrow-button');
                    var awpbusinesspressSubMenus1 = document.querySelectorAll('.main-navigation .menu .sub-menu > li.menu-item-has-children > .sub-menu');
    
                    awpbusinesspressSubMenuArrowClick(awpbusinesspressSubMenuArrow1, awpbusinesspressSubMenuArrows1, awpbusinesspressSubMenus1);
    
                } else if (awpbusinesspressTargetMatches('.main-navigation .menu li.menu-item-has-children > .menu-arrow-button')) {
                    event.preventDefault();
                    var awpbusinesspressSubMenuArrow2 = event.target || event.srcElement;
    
                    var awpbusinesspressSubMenuArrows2 = document.querySelectorAll('.main-navigation .menu > li.menu-item-has-children > .menu-arrow-button');
                    var awpbusinesspressSubMenus2 = document.querySelectorAll('.main-navigation .menu > li.menu-item-has-children > .sub-menu');
    
                    awpbusinesspressSubMenuArrowClick(awpbusinesspressSubMenuArrow2, awpbusinesspressSubMenuArrows2, awpbusinesspressSubMenus2);
    
                } else {
                    var awpbusinesspressSubMenuArrows3 = document.querySelectorAll('.main-navigation .menu > li.menu-item-has-children > .menu-arrow-button');
                    var awpbusinesspressSubMenus3 = document.querySelectorAll('.main-navigation .menu > li.menu-item-has-children > .sub-menu');
                    if (awpbusinesspressSubMenus3.length) {
                        [].forEach.call(awpbusinesspressSubMenus3, function(el) {
                            el.classList.remove('sub-menu--open');
                        });
                    }
                    if (awpbusinesspressSubMenuArrows3.length) {
                        for (var i = 0; i < awpbusinesspressSubMenuArrows3.length; i++) {
                            awpbusinesspressSubMenuArrows3[i].classList.remove('sub-menu-show');
                            awpbusinesspressSubMenuArrows3[i].previousSibling.setAttribute('aria-expanded', 'false');
                            awpbusinesspressSubMenuArrows3[i].getElementsByClassName('menu-arrow-button-hide')[0].setAttribute('aria-hidden', 'true');
                            awpbusinesspressSubMenuArrows3[i].getElementsByClassName('menu-arrow-button-show')[0].setAttribute('aria-hidden', 'false');
                        }
                    }
                    awpbusinesspressSetTabIndex(document.querySelectorAll('.main-navigation .sub-menu'), -1);
                }
            });
        }
    
        // Mobile menu.
        awpbusinesspressMobileMenu();
    
        var awpbusinesspressFocusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    
        // Set tabindex of focusable elements.
        function awpbusinesspressSetTabIndex(element, value) {
            if (NodeList.prototype.isPrototypeOf(element)) {
                [].forEach.call(element, function(el) {
                    [].forEach.call(el.querySelectorAll(awpbusinesspressFocusableElements), function(el) {
                        el.setAttribute('tabindex', value);
                    });
                });
    
            } else {
                [].forEach.call(element.querySelectorAll(awpbusinesspressFocusableElements), function(el) {
                    el.setAttribute('tabindex', value);
                });
            }
        }
    
        awpbusinesspressSetTabIndex(document.querySelectorAll('.main-navigation .sub-menu'), -1);
    
        document.addEventListener('keydown', function(event) {
            var awpbusinesspressIsTabPressed = ('Tab' === event.key || 9 === event.keyCode);
            if (!awpbusinesspressIsTabPressed) {
                return;
            }
    
            var awpbusinesspressNavIcon = document.querySelector('.menu-toggle');
            if (awpbusinesspressNavIcon && ('none' !== getComputedStyle(awpbusinesspressNavIcon, null).display)) {
                if (!awpbusinesspressNavIcon.classList.contains('menu-toggle--open')) {
                    awpbusinesspressSetTabIndex(document.querySelector('.main-navigation .menu'), -1);
                }
    
                if (!event.shiftKey) {
                    if (!document.activeElement.classList || !document.activeElement.classList.contains('sub-menu-show')) {
                        var awpbusinesspressActiveElementArrow = awpbusinesspressNextSibling(document.activeElement);
                        if (!awpbusinesspressActiveElementArrow || (awpbusinesspressActiveElementArrow.classList && !awpbusinesspressActiveElementArrow.classList.contains('menu-arrow-button'))) {
                            var awpbusinesspressActiveElementSibling = awpbusinesspressNextSibling(document.activeElement.parentNode);
                            if (!awpbusinesspressActiveElementSibling && document.activeElement.parentNode.parentNode.id && 'primary-menu' === document.activeElement.parentNode.parentNode.id) {
                                var awpbusinesspressMenuFocusableElements = document.activeElement.parentNode.parentNode.querySelectorAll(awpbusinesspressFocusableElements);
                                if (awpbusinesspressMenuFocusableElements.length > 0) {
                                    event.preventDefault();
                                    awpbusinesspressNavIcon.focus();
                                }
                            }
                        }
                    }
                } else {
                    if (document.activeElement.classList && document.activeElement.classList.contains('menu-toggle--open')) {
                        var awpbusinesspressLastMenuItemArrowButton = document.querySelector('.main-navigation .menu > li:last-child > .menu-arrow-button');
                        if (awpbusinesspressLastMenuItemArrowButton) {
                            awpbusinesspressLastMenuItemArrowButton.focus();
                            event.preventDefault();
                        } else {
                            var awpbusinesspressLastMenuItemAnchor = document.querySelector('.main-navigation .menu > li:last-child > a');
                            if (awpbusinesspressLastMenuItemAnchor) {
                                awpbusinesspressLastMenuItemAnchor.focus();
                                event.preventDefault();
                            }
                        }
                    }
                }
            }
    
            if (!event.shiftKey) {
                if (!document.activeElement.classList || !document.activeElement.classList.contains('sub-menu-show')) {
                    var awpbusinesspressActiveElementArrow = awpbusinesspressNextSibling(document.activeElement);
                    if (!awpbusinesspressActiveElementArrow || (awpbusinesspressActiveElementArrow.classList && !awpbusinesspressActiveElementArrow.classList.contains('menu-arrow-button'))) {
                        var awpbusinesspressActiveElementSibling = awpbusinesspressNextSibling(document.activeElement.parentNode);
                        if (!awpbusinesspressActiveElementSibling && document.activeElement.parentNode.parentNode.classList && document.activeElement.parentNode.parentNode.classList.contains('sub-menu--open')) {
                            var subMenuFocusableElements = document.activeElement.parentNode.parentNode.querySelectorAll(awpbusinesspressFocusableElements);
                            if (subMenuFocusableElements.length > 0) {
                                event.preventDefault();
                                subMenuFocusableElements[0].focus();
                            }
                        }
                    }
                }
            }
        });
    
        // Sticky menu.
        var awpbusinesspressMainMenuSticky = document.querySelector('.site-menu-content--sticky');
        if (awpbusinesspressMainMenuSticky) {
            var awpbusinesspressAfterMainMenu = awpbusinesspressNextSibling(awpbusinesspressMainMenuSticky);
            if (awpbusinesspressAfterMainMenu) {
                var awpbusinesspressSiteContent = awpbusinesspressAfterMainMenu;
            } else {
                var awpbusinesspressSiteContent = document.querySelector('.site-content');
            }
    
            var awpbusinesspressSiteContentMarginTop = window.getComputedStyle(awpbusinesspressSiteContent).marginTop;
    
            var awpbusinesspressStickyMenuHeight = awpbusinesspressMainMenuSticky.offsetHeight;
            var awpbusinesspressStickyMenuClass = 'sticky-menu';
            var awpbusinesspressContainerMenuClass = 'container';
            var awpbusinesspressStickyMenuInViewClass = 'sticky-menu-in-view';
            var awpbusinesspressHeaderHeight = document.querySelector('.site-header').offsetHeight;
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > awpbusinesspressHeaderHeight) {
                    awpbusinesspressMainMenuSticky.classList.add(awpbusinesspressStickyMenuClass);
                    awpbusinesspressSiteContent.style.marginTop = awpbusinesspressStickyMenuHeight + 'px';
                } else {
                    awpbusinesspressMainMenuSticky.classList.remove(awpbusinesspressStickyMenuClass);
                    awpbusinesspressSiteContent.style.marginTop = awpbusinesspressSiteContentMarginTop;
                }
                if (window.pageYOffset > (awpbusinesspressHeaderHeight * 3)) {
                    awpbusinesspressMainMenuSticky.classList.add(awpbusinesspressStickyMenuInViewClass);
                    awpbusinesspressMainMenuSticky.classList.remove(awpbusinesspressContainerMenuClass);
                } else {
                    awpbusinesspressMainMenuSticky.classList.remove(awpbusinesspressStickyMenuInViewClass);
                    awpbusinesspressMainMenuSticky.classList.add(awpbusinesspressContainerMenuClass);
                }
            });
        }
    
        // Utility function.
        function awpbusinesspressUtil() {}
    
        // Smooth scroll.
        awpbusinesspressUtil.scrollTo = function(final, duration, cb) {
            var awpbusinesspressStart = window.scrollY || document.documentElement.scrollTop
              , awpbusinesspressCurrentTime = null;
    
            var awpbusinesspressAnimateScroll = function(timestamp) {
                if (!awpbusinesspressCurrentTime) {
                    awpbusinesspressCurrentTime = timestamp;
                }
    
                var awpbusinesspressProgress = timestamp - awpbusinesspressCurrentTime;
    
                if (awpbusinesspressProgress > duration) {
                    awpbusinesspressProgress = duration;
                }
    
                var awpbusinesspressVal = Math.easeInOutQuad(awpbusinesspressProgress, awpbusinesspressStart, final - awpbusinesspressStart, duration);
    
                window.scrollTo(0, awpbusinesspressVal);
                if (awpbusinesspressProgress < duration) {
                    window.requestAnimationFrame(awpbusinesspressAnimateScroll);
                } else {
                    cb && cb();
                }
            };
    
            window.requestAnimationFrame(awpbusinesspressAnimateScroll);
        }
        ;
    
        // Animation curves.
        Math.easeInOutQuad = function(t, b, c, d) {
            t /= d / 2;
            if (t < 1)
                return c / 2 * t * t + b;
            t--;
            return -c / 2 * (t * (t - 2) - 1) + b;
        }
        ;
    
        // Back to top.
        var awpbusinesspressBackTop = document.querySelector('.back-to-top');
        if (awpbusinesspressBackTop) {
            var awpbusinesspressOffset = 300;
            var awpbusinesspressOffsetOpacity = 1200;
            var awpbusinesspressScrollDuration = 700;
            var awpbusinesspressScrolling = false;
            window.addEventListener('scroll', function() {
                if (!awpbusinesspressScrolling) {
                    awpbusinesspressScrolling = true;
                    (!window.requestAnimationFrame) ? setTimeout(awpbusinesspressCheckBackToTop, 250) : window.requestAnimationFrame(awpbusinesspressCheckBackToTop);
                }
            });
    
            document.addEventListener('click', function(event) {
                if (awpbusinesspressTargetMatches('.back-to-top')) {
                    event.preventDefault();
                    (!window.requestAnimationFrame) ? window.scrollTo(0, 0) : awpbusinesspressUtil.scrollTo(0, awpbusinesspressScrollDuration);
                }
            });
        }
    
        function awpbusinesspressCheckBackToTop() {
            var awpbusinesspressWindowTop = window.scrollY || document.documentElement.scrollTop;
            (awpbusinesspressWindowTop > awpbusinesspressOffset) ? awpbusinesspressBackTop.classList.add('back-to-top--show') : awpbusinesspressBackTop.classList.remove('back-to-top--show', 'back-to-top--fade-out');
            (awpbusinesspressWindowTop > awpbusinesspressOffsetOpacity) && awpbusinesspressBackTop.classList.add('back-to-top--fade-out');
            awpbusinesspressScrolling = false;
        }
    
    }
    )();
    //Intialise variable
    var x = window.matchMedia("(max-width: 767px)")
    myFunction(x)
    // Call listener function at run time
    x.addListener(myFunction)
    
    function myFunction(x) {
        if (x.matches) {
            // If media query matches
            // jQuery element variables
            var $hamburgerMenuBtn, $slideNav, $closeBtn, $main;
    
            // focus management variables
            var $focusableInNav, $firstFocusableElement, $lastFocusableElement;
    
            jQuery(document).ready(function() {
                $hamburgerMenuBtn = jQuery("#hamburger-menu"),
                $slideNav = jQuery("#slide-nav"),
                $closeBtn = jQuery("#close"),
                $main = jQuery("main"),
                $focusableInNav = jQuery('#slide-nav button, #slide-nav [href], #slide-nav input, #slide-nav select, #slide-nav textarea, #slide-nav [tabindex]:not([tabindex="-1"])');
                if ($focusableInNav.length) {
                    $firstFocusableElement = $focusableInNav.first();
                    $lastFocusableElement = $focusableInNav.last();
                }
                addEventListeners();
            });
    
            function addEventListeners() {
                $hamburgerMenuBtn.click(openNav);
                $closeBtn.click(closeNav);
                $slideNav.on("keyup", closeNav);
                $firstFocusableElement.on("keydown", moveFocusToBottom);
                $lastFocusableElement.on("keydown", moveFocusToTop);
            }
    
            function openNav() {
                $slideNav.addClass("visible active");
                setTimeout(function() {
                    $firstFocusableElement.focus()
                }, 1);
                $main.attr("aria-hidden", "true");
                $hamburgerMenuBtn.attr("aria-hidden", "true");
            }
    
            function closeNav(e) {
                if (e.type === "keyup" && e.key !== "Escape") {
                    return;
                }
    
                $slideNav.removeClass("active");
                $main.removeAttr("aria-hidden");
                $hamburgerMenuBtn.removeAttr("aria-hidden");
                setTimeout(function() {
                    $hamburgerMenuBtn.focus()
                }, 1);
                setTimeout(function() {
                    $slideNav.removeClass("visible")
                }, 501);
            }
    
            function moveFocusToTop(e) {
                if (e.key === "Tab" && !e.shiftKey) {
                    e.preventDefault();
                    $firstFocusableElement.focus();
                }
            }
    
            function moveFocusToBottom(e) {
                if (e.key === "Tab" && e.shiftKey) {
                    e.preventDefault();
                    $lastFocusableElement.focus()
                }
            }
        }
    }
    "function" == typeof jQuery && jQuery(document).ready(function(a) {
        a("body").on("post-load", function() {
            window.a2a && a2a.init_all()
        })
    });
    
    
    jQuery(document).ready(function() {
        //For Menu Drop-down Focus (sub-menu)
        const topLevelLinks = document.querySelectorAll('.dropdown-toggle');
        console.log(topLevelLinks);
    
        topLevelLinks.forEach(link=>{
            if (link.nextElementSibling) {
                link.addEventListener('focus', function() {
                    this.parentElement.classList.add('focus');
                });
    
                const subMenu = link.nextElementSibling;
                const subMenuLinks = subMenu.querySelectorAll('a');
                const lastLinkIndex = subMenuLinks.length - 1;
                const lastLink = subMenuLinks[lastLinkIndex];
    
                lastLink.addEventListener('blur', function() {
                    link.parentElement.classList.remove('focus');
                });
            }
        }
        );
    });
    
    jQuery(document).ready(function() {
        //For Menu Drop-down Focus (sub-menu)
        const topLevelLinks = document.querySelectorAll('.dropdown-toggle');
        console.log(topLevelLinks);
    
        topLevelLinks.forEach(link=>{
            if (link.nextElementSibling) {
                link.addEventListener('focus', function() {
                    this.parentElement.classList.add('focus');
                });
    
                const subMenu = link.nextElementSibling;
                const subMenuLinks = subMenu.querySelectorAll('a');
                const lastLinkIndex = subMenuLinks.length - 1;
                const lastLink = subMenuLinks[lastLinkIndex];
    
                lastLink.addEventListener('blur', function() {
                    link.parentElement.classList.remove('focus');
                });
            }
        }
        );
    });
    $(document).ready(function() {
    
        // Tooltip Js
        $(function() {
            $('[data-toggle="tooltip"]').tooltip()
        });
    
        //For Menu Drop-down Focus (sub-menu)
        const topLevelLinks = document.querySelectorAll('.dropdown-toggle');
        console.log(topLevelLinks);
    
        topLevelLinks.forEach(link=>{
            if (link.nextElementSibling) {
                link.addEventListener('focus', function() {
                    this.parentElement.classList.add('focus', 'open');
                });
    
                const subMenu = link.nextElementSibling;
                const subMenuLinks = subMenu.querySelectorAll('a');
                const lastLinkIndex = subMenuLinks.length - 1;
                const lastLink = subMenuLinks[lastLinkIndex];
    
                lastLink.addEventListener('blur', function() {
                    link.parentElement.classList.remove('focus', 'open');
                });
            }
        }
        );
    
        // New Menu onScroll to Fix Js
        jQuery(window).scroll(function() {
            if (jQuery(window).scrollTop() >= 90) {
                jQuery('.header-sticky').addClass('navbar-fixed');
                jQuery('.header-sticky').removeClass('not-sticky');
                jQuery('.navbar-collapse').removeClass('show');
            } else {
                jQuery('.header-sticky').removeClass('navbar-fixed');
                jQuery('.header-sticky').addClass('not-sticky');
            }
        });
    });
    //console.log('%c Proudly Crafted with ZiOn.', 'background: #222; color: #bada55');
    
    /* ---------------------------------------------- /*
     * Preloader
     /* ---------------------------------------------- */
    (function() {
        jQuery(window).on('load', function() {
            jQuery('.loader').fadeOut();
            jQuery('.page-loader').delay(350).fadeOut('slow');
    
            jQuery(".theme-main-slider").focusin(function() {
                jQuery('.navbar-collapse').removeClass('show');
            });
            jQuery(".theme-page-header-area").focusin(function() {
                jQuery('.navbar-collapse').removeClass('show');
            });
    
            // Slider JS
            jQuery("#slider-demo").owlCarousel({
                navigation: true,
                // Show next and prev buttons
                slideSpeed: 300,
                /* autoplay : 7000, */
                smartSpeed: 1000,
                autoplayTimeout: 2500,
                autoplayHoverPause: true,
                singleItem: true,
                mouseDrag: true,
                loop: true,
                // loop is true up to 1199px screen.
                nav: true,
                // is true across all sizes
                margin: 0,
                // margin 10px till 960 breakpoint
                autoHeight: true,
                responsiveClass: true,
                // Optional helper class. Add 'owl-reponsive-' + 'breakpoint' class to main element.
                items: 1,
                dots: false,
                navText: ["<i class='fa fa-long-arrow-left'></i>", "<i class='fa fa-long-arrow-right'></i>"]
            });
    
        });
    
        jQuery(document).ready(function() {
    
            /* ---------------------------------------------- /*
             * WOW Animation When You Scroll
             /* ---------------------------------------------- */
    
            /*  wow = new WOW({
                mobile: false
            });
            wow.init(); */
    
            /* ---------------------------------------------- /*
             * Scroll top
             /* ---------------------------------------------- */
    
            jQuery(window).scroll(function() {
                if (jQuery(this).scrollTop() > 100) {
                    jQuery('.page-scroll-up').fadeIn();
                } else {
                    jQuery('.page-scroll-up').fadeOut();
                }
            });
    
            jQuery('.page-scroll-up').click(function() {
                jQuery("html, body").animate({
                    scrollTop: 0
                }, 700);
                return false;
            });
    
            jQuery('a[href="#totop"]').click(function() {
                jQuery('html, body').animate({
                    scrollTop: 0
                }, 'slow');
                return false;
            });
    
            /* ---------------------------------------------- /*
             * Initialization General Scripts for all pages
             /* ---------------------------------------------- */
    
            var homeSection = jQuery('.home-section')
              , navbar = jQuery('.navbar-custom')
              , navHeight = navbar.height()
              , worksgrid = jQuery('#works-grid')
              , width = Math.max(jQuery(window).width(), window.innerWidth)
              , mobileTest = false;
    
            if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
                mobileTest = true;
            }
    
            buildHomeSection(homeSection);
            navbarAnimation(navbar, homeSection, navHeight);
            navbarSubmenu(width);
            hoverDropdown(width, mobileTest);
    
            jQuery(window).resize(function() {
                var width = Math.max(jQuery(window).width(), window.innerWidth);
                buildHomeSection(homeSection);
                hoverDropdown(width, mobileTest);
            });
    
            /* ---------------------------------------------- /*
             * Home section height
             /* ---------------------------------------------- */
    
            function buildHomeSection(homeSection) {
                if (homeSection.length > 0) {
                    if (homeSection.hasClass('home-full-height')) {
                        homeSection.height(jQuery(window).height());
                    } else {
                        homeSection.height(jQuery(window).height() * 0.85);
                    }
                }
            }
    
            /* ---------------------------------------------- /*
             * Transparent navbar animation
             /* ---------------------------------------------- */
    
            function navbarAnimation(navbar, homeSection, navHeight) {
                var topScroll = jQuery(window).scrollTop();
                if (navbar.length > 0 && homeSection.length > 0) {
                    if (topScroll >= navHeight) {
                        navbar.removeClass('navbar-transparent');
                    } else {
                        navbar.addClass('navbar-transparent');
                    }
                }
            }
    
            /* ---------------------------------------------- /*
             * Navbar submenu
             /* ---------------------------------------------- */
    
            function navbarSubmenu(width) {
                if (width > 991) {
                    jQuery('.navbar-custom .navbar-nav > li.dropdown').hover(function() {
                        var MenuLeftOffset = jQuery('.dropdown-menu', jQuery(this)).offset().left;
                        var Menu1LevelWidth = jQuery('.dropdown-menu', jQuery(this)).width();
                        if (width - MenuLeftOffset < Menu1LevelWidth * 2) {
                            jQuery(this).children('.dropdown-menu').addClass('leftauto');
                        } else {
                            jQuery(this).children('.dropdown-menu').removeClass('leftauto');
                        }
                        if (jQuery('.dropdown', jQuery(this)).length > 0) {
                            var Menu2LevelWidth = jQuery('.dropdown-menu', jQuery(this)).width();
                            if (width - MenuLeftOffset - Menu1LevelWidth < Menu2LevelWidth) {
                                jQuery(this).children('.dropdown-menu').addClass('left-side');
                            } else {
                                jQuery(this).children('.dropdown-menu').removeClass('left-side');
                            }
                        }
                    });
                }
            }
    
            /* ---------------------------------------------- /*
             * Navbar hover dropdown on desctop
             /* ---------------------------------------------- */
    
            function hoverDropdown(width, mobileTest) {
                if ((width > 991) && (mobileTest !== true)) {
                    jQuery('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').removeClass('open');
                    var delay = 0;
                    var setTimeoutConst;
                    jQuery('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').hover(function() {
                        var jQuerythis = jQuery(this);
                        setTimeoutConst = setTimeout(function() {
                            jQuerythis.addClass('open');
                            jQuerythis.find('.dropdown-toggle').addClass('disabled');
                        }, delay);
                    }, function() {
                        clearTimeout(setTimeoutConst);
                        jQuery(this).removeClass('open');
                        jQuery(this).find('.dropdown-toggle').removeClass('disabled');
                    });
                } else {
                    jQuery('.navbar-custom .navbar-nav > li.dropdown, .navbar-custom li.dropdown > ul > li.dropdown').unbind('mouseenter mouseleave');
                    jQuery('.navbar-custom [data-toggle=dropdown]').not('.binded').addClass('binded').on('click', function(event) {
                        event.preventDefault();
                        event.stopPropagation();
                        jQuery(this).parent().siblings().removeClass('open');
                        jQuery(this).parent().siblings().find('[data-toggle=dropdown]').parent().removeClass('open');
                        jQuery(this).parent().toggleClass('open');
                    });
                }
            }
    
            /* ---------------------------------------------- /*
             * Navbar collapse on click
             /* ---------------------------------------------- */
    
            jQuery(document).on('click', '.navbar-collapse.in', function(e) {
                if (jQuery(e.target).is('a') && jQuery(e.target).attr('class') != 'dropdown-toggle') {
                    jQuery(this).collapse('hide');
                }
            });
    
        });
    }
    )(jQuery);
    /*! This file is auto-generated */
    // Source: wp-includes/js/twemoji.min.js
    var twemoji = function() {
        "use strict";
        var f = {
            base: "https://twemoji.maxcdn.com/v/13.1.0/",
            ext: ".png",
            size: "72x72",
            className: "emoji",
            convert: {
                fromCodePoint: function(d) {
                    d = "string" == typeof d ? parseInt(d, 16) : d;
                    if (d < 65536)
                        return b(d);
                    return b(55296 + ((d -= 65536) >> 10), 56320 + (1023 & d))
                },
                toCodePoint: i
            },
            onerror: function() {
                this.parentNode && this.parentNode.replaceChild(g(this.alt, !1), this)
            },
            parse: function(d, u) {
                u && "function" != typeof u || (u = {
                    callback: u
                });
                return ("string" == typeof d ? function(d, a) {
                    return o(d, function(d) {
                        var u, f, c = d, e = x(d), b = a.callback(e, a);
                        if (e && b) {
                            for (f in c = "<img ".concat('class="', a.className, '" ', 'draggable="false" ', 'alt="', d, '"', ' src="', b, '"'),
                            u = a.attributes(d, e))
                                u.hasOwnProperty(f) && 0 !== f.indexOf("on") && -1 === c.indexOf(" " + f + "=") && (c = c.concat(" ", f, '="', u[f].replace(t, n), '"'));
                            c = c.concat("/>")
                        }
                        return c
                    })
                }
                : function(d, u) {
                    var f, c, e, b, a, t, n, r, o, i, s, l = function d(u, f) {
                        var c, e, b = u.childNodes, a = b.length;
                        for (; a--; )
                            c = b[a],
                            3 === (e = c.nodeType) ? f.push(c) : 1 !== e || "ownerSVGElement"in c || h.test(c.nodeName.toLowerCase()) || d(c, f);
                        return f
                    }(d, []), p = l.length;
                    for (; p--; ) {
                        for (e = !1,
                        b = document.createDocumentFragment(),
                        a = l[p],
                        t = a.nodeValue,
                        n = 0; i = m.exec(t); ) {
                            if ((s = i.index) !== n && b.appendChild(g(t.slice(n, s), !0)),
                            o = i[0],
                            i = x(o),
                            n = s + o.length,
                            s = u.callback(i, u),
                            i && s) {
                                for (c in (r = new Image).onerror = u.onerror,
                                r.setAttribute("draggable", "false"),
                                f = u.attributes(o, i))
                                    f.hasOwnProperty(c) && 0 !== c.indexOf("on") && !r.hasAttribute(c) && r.setAttribute(c, f[c]);
                                r.className = u.className,
                                r.alt = o,
                                r.src = s,
                                e = !0,
                                b.appendChild(r)
                            }
                            r || b.appendChild(g(o, !1)),
                            r = null
                        }
                        e && (n < t.length && b.appendChild(g(t.slice(n), !0)),
                        a.parentNode.replaceChild(b, a))
                    }
                    return d
                }
                )(d, {
                    callback: u.callback || a,
                    attributes: "function" == typeof u.attributes ? u.attributes : r,
                    base: ("string" == typeof u.base ? u : f).base,
                    ext: u.ext || f.ext,
                    size: u.folder || function(d) {
                        return "number" == typeof d ? d + "x" + d : d
                    }(u.size || f.size),
                    className: u.className || f.className,
                    onerror: u.onerror || f.onerror
                })
            },
            replace: o,
            test: function(d) {
                m.lastIndex = 0;
                d = m.test(d);
                return m.lastIndex = 0,
                d
            }
        }
          , u = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            "'": "&#39;",
            '"': "&quot;"
        }
          , m = /(?:\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83d\udc68\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc68\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc68\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc68\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffc-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffd-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb\udffc\udffe\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffd\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc68\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83d\udc69\ud83c[\udffb-\udfff]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc68\ud83c[\udffb-\udffe]|\ud83d\udc69\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83d\udc69\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udffb\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffc-\udfff]|\ud83e\uddd1\ud83c\udffb\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffd-\udfff]|\ud83e\uddd1\ud83c\udffc\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb\udffc\udffe\udfff]|\ud83e\uddd1\ud83c\udffd\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffd\udfff]|\ud83e\uddd1\ud83c\udffe\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83e\uddd1\ud83c\udfff\u200d\u2764\ufe0f\u200d\ud83e\uddd1\ud83c[\udffb-\udffe]|\ud83e\uddd1\ud83c\udfff\u200d\ud83e\udd1d\u200d\ud83e\uddd1\ud83c[\udffb-\udfff]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d\udc8b\u200d\ud83d[\udc68\udc69]|\ud83d\udc68\u200d\u2764\ufe0f\u200d\ud83d\udc68|\ud83d\udc69\u200d\u2764\ufe0f\u200d\ud83d[\udc68\udc69]|\ud83e\uddd1\u200d\ud83e\udd1d\u200d\ud83e\uddd1|\ud83d\udc6b\ud83c[\udffb-\udfff]|\ud83d\udc6c\ud83c[\udffb-\udfff]|\ud83d\udc6d\ud83c[\udffb-\udfff]|\ud83d\udc8f\ud83c[\udffb-\udfff]|\ud83d\udc91\ud83c[\udffb-\udfff]|\ud83d[\udc6b-\udc6d\udc8f\udc91])|(?:\ud83d[\udc68\udc69]|\ud83e\uddd1)(?:\ud83c[\udffb-\udfff])?\u200d(?:\u2695\ufe0f|\u2696\ufe0f|\u2708\ufe0f|\ud83c[\udf3e\udf73\udf7c\udf84\udf93\udfa4\udfa8\udfeb\udfed]|\ud83d[\udcbb\udcbc\udd27\udd2c\ude80\ude92]|\ud83e[\uddaf-\uddb3\uddbc\uddbd])|(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75]|\u26f9)((?:\ud83c[\udffb-\udfff]|\ufe0f)\u200d[\u2640\u2642]\ufe0f)|(?:\ud83c[\udfc3\udfc4\udfca]|\ud83d[\udc6e\udc70\udc71\udc73\udc77\udc81\udc82\udc86\udc87\ude45-\ude47\ude4b\ude4d\ude4e\udea3\udeb4-\udeb6]|\ud83e[\udd26\udd35\udd37-\udd39\udd3d\udd3e\uddb8\uddb9\uddcd-\uddcf\uddd4\uddd6-\udddd])(?:\ud83c[\udffb-\udfff])?\u200d[\u2640\u2642]\ufe0f|(?:\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc68\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc68\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc66\u200d\ud83d\udc66|\ud83d\udc69\u200d\ud83d\udc67\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83c\udff3\ufe0f\u200d\u26a7\ufe0f|\ud83c\udff3\ufe0f\u200d\ud83c\udf08|\ud83d\ude36\u200d\ud83c\udf2b\ufe0f|\u2764\ufe0f\u200d\ud83d\udd25|\u2764\ufe0f\u200d\ud83e\ude79|\ud83c\udff4\u200d\u2620\ufe0f|\ud83d\udc15\u200d\ud83e\uddba|\ud83d\udc3b\u200d\u2744\ufe0f|\ud83d\udc41\u200d\ud83d\udde8|\ud83d\udc68\u200d\ud83d[\udc66\udc67]|\ud83d\udc69\u200d\ud83d[\udc66\udc67]|\ud83d\udc6f\u200d\u2640\ufe0f|\ud83d\udc6f\u200d\u2642\ufe0f|\ud83d\ude2e\u200d\ud83d\udca8|\ud83d\ude35\u200d\ud83d\udcab|\ud83e\udd3c\u200d\u2640\ufe0f|\ud83e\udd3c\u200d\u2642\ufe0f|\ud83e\uddde\u200d\u2640\ufe0f|\ud83e\uddde\u200d\u2642\ufe0f|\ud83e\udddf\u200d\u2640\ufe0f|\ud83e\udddf\u200d\u2642\ufe0f|\ud83d\udc08\u200d\u2b1b)|[#*0-9]\ufe0f?\u20e3|(?:[\xa9\xae\u2122\u265f]\ufe0f)|(?:\ud83c[\udc04\udd70\udd71\udd7e\udd7f\ude02\ude1a\ude2f\ude37\udf21\udf24-\udf2c\udf36\udf7d\udf96\udf97\udf99-\udf9b\udf9e\udf9f\udfcd\udfce\udfd4-\udfdf\udff3\udff5\udff7]|\ud83d[\udc3f\udc41\udcfd\udd49\udd4a\udd6f\udd70\udd73\udd76-\udd79\udd87\udd8a-\udd8d\udda5\udda8\uddb1\uddb2\uddbc\uddc2-\uddc4\uddd1-\uddd3\udddc-\uddde\udde1\udde3\udde8\uddef\uddf3\uddfa\udecb\udecd-\udecf\udee0-\udee5\udee9\udef0\udef3]|[\u203c\u2049\u2139\u2194-\u2199\u21a9\u21aa\u231a\u231b\u2328\u23cf\u23ed-\u23ef\u23f1\u23f2\u23f8-\u23fa\u24c2\u25aa\u25ab\u25b6\u25c0\u25fb-\u25fe\u2600-\u2604\u260e\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262a\u262e\u262f\u2638-\u263a\u2640\u2642\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267b\u267f\u2692-\u2697\u2699\u269b\u269c\u26a0\u26a1\u26a7\u26aa\u26ab\u26b0\u26b1\u26bd\u26be\u26c4\u26c5\u26c8\u26cf\u26d1\u26d3\u26d4\u26e9\u26ea\u26f0-\u26f5\u26f8\u26fa\u26fd\u2702\u2708\u2709\u270f\u2712\u2714\u2716\u271d\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u2764\u27a1\u2934\u2935\u2b05-\u2b07\u2b1b\u2b1c\u2b50\u2b55\u3030\u303d\u3297\u3299])(?:\ufe0f|(?!\ufe0e))|(?:(?:\ud83c[\udfcb\udfcc]|\ud83d[\udd74\udd75\udd90]|[\u261d\u26f7\u26f9\u270c\u270d])(?:\ufe0f|(?!\ufe0e))|(?:\ud83c[\udf85\udfc2-\udfc4\udfc7\udfca]|\ud83d[\udc42\udc43\udc46-\udc50\udc66-\udc69\udc6e\udc70-\udc78\udc7c\udc81-\udc83\udc85-\udc87\udcaa\udd7a\udd95\udd96\ude45-\ude47\ude4b-\ude4f\udea3\udeb4-\udeb6\udec0\udecc]|\ud83e[\udd0c\udd0f\udd18-\udd1c\udd1e\udd1f\udd26\udd30-\udd39\udd3d\udd3e\udd77\uddb5\uddb6\uddb8\uddb9\uddbb\uddcd-\uddcf\uddd1-\udddd]|[\u270a\u270b]))(?:\ud83c[\udffb-\udfff])?|(?:\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc65\udb40\udc6e\udb40\udc67\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc73\udb40\udc63\udb40\udc74\udb40\udc7f|\ud83c\udff4\udb40\udc67\udb40\udc62\udb40\udc77\udb40\udc6c\udb40\udc73\udb40\udc7f|\ud83c\udde6\ud83c[\udde8-\uddec\uddee\uddf1\uddf2\uddf4\uddf6-\uddfa\uddfc\uddfd\uddff]|\ud83c\udde7\ud83c[\udde6\udde7\udde9-\uddef\uddf1-\uddf4\uddf6-\uddf9\uddfb\uddfc\uddfe\uddff]|\ud83c\udde8\ud83c[\udde6\udde8\udde9\uddeb-\uddee\uddf0-\uddf5\uddf7\uddfa-\uddff]|\ud83c\udde9\ud83c[\uddea\uddec\uddef\uddf0\uddf2\uddf4\uddff]|\ud83c\uddea\ud83c[\udde6\udde8\uddea\uddec\udded\uddf7-\uddfa]|\ud83c\uddeb\ud83c[\uddee-\uddf0\uddf2\uddf4\uddf7]|\ud83c\uddec\ud83c[\udde6\udde7\udde9-\uddee\uddf1-\uddf3\uddf5-\uddfa\uddfc\uddfe]|\ud83c\udded\ud83c[\uddf0\uddf2\uddf3\uddf7\uddf9\uddfa]|\ud83c\uddee\ud83c[\udde8-\uddea\uddf1-\uddf4\uddf6-\uddf9]|\ud83c\uddef\ud83c[\uddea\uddf2\uddf4\uddf5]|\ud83c\uddf0\ud83c[\uddea\uddec-\uddee\uddf2\uddf3\uddf5\uddf7\uddfc\uddfe\uddff]|\ud83c\uddf1\ud83c[\udde6-\udde8\uddee\uddf0\uddf7-\uddfb\uddfe]|\ud83c\uddf2\ud83c[\udde6\udde8-\udded\uddf0-\uddff]|\ud83c\uddf3\ud83c[\udde6\udde8\uddea-\uddec\uddee\uddf1\uddf4\uddf5\uddf7\uddfa\uddff]|\ud83c\uddf4\ud83c\uddf2|\ud83c\uddf5\ud83c[\udde6\uddea-\udded\uddf0-\uddf3\uddf7-\uddf9\uddfc\uddfe]|\ud83c\uddf6\ud83c\udde6|\ud83c\uddf7\ud83c[\uddea\uddf4\uddf8\uddfa\uddfc]|\ud83c\uddf8\ud83c[\udde6-\uddea\uddec-\uddf4\uddf7-\uddf9\uddfb\uddfd-\uddff]|\ud83c\uddf9\ud83c[\udde6\udde8\udde9\uddeb-\udded\uddef-\uddf4\uddf7\uddf9\uddfb\uddfc\uddff]|\ud83c\uddfa\ud83c[\udde6\uddec\uddf2\uddf3\uddf8\uddfe\uddff]|\ud83c\uddfb\ud83c[\udde6\udde8\uddea\uddec\uddee\uddf3\uddfa]|\ud83c\uddfc\ud83c[\uddeb\uddf8]|\ud83c\uddfd\ud83c\uddf0|\ud83c\uddfe\ud83c[\uddea\uddf9]|\ud83c\uddff\ud83c[\udde6\uddf2\uddfc]|\ud83c[\udccf\udd8e\udd91-\udd9a\udde6-\uddff\ude01\ude32-\ude36\ude38-\ude3a\ude50\ude51\udf00-\udf20\udf2d-\udf35\udf37-\udf7c\udf7e-\udf84\udf86-\udf93\udfa0-\udfc1\udfc5\udfc6\udfc8\udfc9\udfcf-\udfd3\udfe0-\udff0\udff4\udff8-\udfff]|\ud83d[\udc00-\udc3e\udc40\udc44\udc45\udc51-\udc65\udc6a\udc6f\udc79-\udc7b\udc7d-\udc80\udc84\udc88-\udc8e\udc90\udc92-\udca9\udcab-\udcfc\udcff-\udd3d\udd4b-\udd4e\udd50-\udd67\udda4\uddfb-\ude44\ude48-\ude4a\ude80-\udea2\udea4-\udeb3\udeb7-\udebf\udec1-\udec5\uded0-\uded2\uded5-\uded7\udeeb\udeec\udef4-\udefc\udfe0-\udfeb]|\ud83e[\udd0d\udd0e\udd10-\udd17\udd1d\udd20-\udd25\udd27-\udd2f\udd3a\udd3c\udd3f-\udd45\udd47-\udd76\udd78\udd7a-\uddb4\uddb7\uddba\uddbc-\uddcb\uddd0\uddde-\uddff\ude70-\ude74\ude78-\ude7a\ude80-\ude86\ude90-\udea8\udeb0-\udeb6\udec0-\udec2\uded0-\uded6]|[\u23e9-\u23ec\u23f0\u23f3\u267e\u26ce\u2705\u2728\u274c\u274e\u2753-\u2755\u2795-\u2797\u27b0\u27bf\ue50a])|\ufe0f/g
          , c = /\uFE0F/g
          , e = String.fromCharCode(8205)
          , t = /[&<>'"]/g
          , h = /^(?:iframe|noframes|noscript|script|select|style|textarea)$/
          , b = String.fromCharCode;
        return f;
        function g(d, u) {
            return document.createTextNode(u ? d.replace(c, "") : d)
        }
        function a(d, u) {
            return "".concat(u.base, u.size, "/", d, u.ext)
        }
        function x(d) {
            return i(d.indexOf(e) < 0 ? d.replace(c, "") : d)
        }
        function n(d) {
            return u[d]
        }
        function r() {
            return null
        }
        function o(d, u) {
            return String(d).replace(m, u)
        }
        function i(d, u) {
            for (var f = [], c = 0, e = 0, b = 0; b < d.length; )
                c = d.charCodeAt(b++),
                e ? (f.push((65536 + (e - 55296 << 10) + (c - 56320)).toString(16)),
                e = 0) : 55296 <= c && c <= 56319 ? e = c : f.push(c.toString(16));
            return f.join(u || "-")
        }
    }();
    // Source: wp-includes/js/wp-emoji.min.js
    !function(c, l) {
        c.wp = c.wp || {},
        c.wp.emoji = new function() {
            var n, u, e = c.MutationObserver || c.WebKitMutationObserver || c.MozMutationObserver, a = c.document, t = !1, r = 0, o = 0 < c.navigator.userAgent.indexOf("Trident/7.0");
            function i() {
                return !a.implementation.hasFeature || a.implementation.hasFeature("http://www.w3.org/TR/SVG11/feature#Image", "1.1")
            }
            function s() {
                if (!t) {
                    if (void 0 === c.twemoji)
                        return 600 < r ? void 0 : (c.clearTimeout(u),
                        u = c.setTimeout(s, 50),
                        void r++);
                    n = c.twemoji,
                    t = !0,
                    e && new e(function(u) {
                        for (var e, t, n, a, r = u.length; r--; ) {
                            if (e = u[r].addedNodes,
                            t = u[r].removedNodes,
                            1 === (n = e.length) && 1 === t.length && 3 === e[0].nodeType && "IMG" === t[0].nodeName && e[0].data === t[0].alt && "load-failed" === t[0].getAttribute("data-error"))
                                return;
                            for (; n--; ) {
                                if (3 === (a = e[n]).nodeType) {
                                    if (!a.parentNode)
                                        continue;
                                    if (o)
                                        for (; a.nextSibling && 3 === a.nextSibling.nodeType; )
                                            a.nodeValue = a.nodeValue + a.nextSibling.nodeValue,
                                            a.parentNode.removeChild(a.nextSibling);
                                    a = a.parentNode
                                }
                                !a || 1 !== a.nodeType || a.className && "string" == typeof a.className && -1 !== a.className.indexOf("wp-exclude-emoji") || d(a.textContent) && f(a)
                            }
                        }
                    }
                    ).observe(a.body, {
                        childList: !0,
                        subtree: !0
                    }),
                    f(a.body)
                }
            }
            function d(u) {
                return !!u && (/[\uDC00-\uDFFF]/.test(u) || /[\u203C\u2049\u20E3\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2300\u231A\u231B\u2328\u2388\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638\u2639\u263A\u2648-\u2653\u2660\u2663\u2665\u2666\u2668\u267B\u267F\u2692\u2693\u2694\u2696\u2697\u2699\u269B\u269C\u26A0\u26A1\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753\u2754\u2755\u2757\u2763\u2764\u2795\u2796\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05\u2B06\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]/.test(u))
            }
            function f(u, e) {
                var t;
                return !l.supports.everything && n && u && ("string" == typeof u || u.childNodes && u.childNodes.length) ? (e = e || {},
                t = {
                    base: i() ? l.svgUrl : l.baseUrl,
                    ext: i() ? l.svgExt : l.ext,
                    className: e.className || "emoji",
                    callback: function(u, e) {
                        switch (u) {
                        case "a9":
                        case "ae":
                        case "2122":
                        case "2194":
                        case "2660":
                        case "2663":
                        case "2665":
                        case "2666":
                            return !1
                        }
                        return !(l.supports.everythingExceptFlag && !/^1f1(?:e[6-9a-f]|f[0-9a-f])-1f1(?:e[6-9a-f]|f[0-9a-f])$/.test(u) && !/^(1f3f3-fe0f-200d-1f308|1f3f4-200d-2620-fe0f)$/.test(u)) && "".concat(e.base, u, e.ext)
                    },
                    attributes: function() {
                        return {
                            role: "img"
                        }
                    },
                    onerror: function() {
                        n.parentNode && (this.setAttribute("data-error", "load-failed"),
                        n.parentNode.replaceChild(a.createTextNode(n.alt), n))
                    }
                },
                "object" == typeof e.imgAttr && (t.attributes = function() {
                    return e.imgAttr
                }
                ),
                n.parse(u, t)) : u
            }
            return l && (l.DOMReady ? s() : l.readyCallback = s),
            {
                parse: f,
                test: d
            }
        }
    }(window, window._wpemojiSettings);
    
    /*! jQuery Migrate v3.3.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
    "undefined" == typeof jQuery.migrateMute && (jQuery.migrateMute = !0),
    function(t) {
        "use strict";
        "function" == typeof define && define.amd ? define(["jquery"], function(e) {
            return t(e, window)
        }) : "object" == typeof module && module.exports ? module.exports = t(require("jquery"), window) : t(jQuery, window)
    }(function(s, n) {
        "use strict";
        function e(e) {
            return 0 <= function(e, t) {
                for (var r = /^(\d+)\.(\d+)\.(\d+)/, n = r.exec(e) || [], o = r.exec(t) || [], i = 1; i <= 3; i++) {
                    if (+o[i] < +n[i])
                        return 1;
                    if (+n[i] < +o[i])
                        return -1
                }
                return 0
            }(s.fn.jquery, e)
        }
        s.migrateVersion = "3.3.2",
        n.console && n.console.log && (s && e("3.0.0") || n.console.log("JQMIGRATE: jQuery 3.0.0+ REQUIRED"),
        s.migrateWarnings && n.console.log("JQMIGRATE: Migrate plugin loaded multiple times"),
        n.console.log("JQMIGRATE: Migrate is installed" + (s.migrateMute ? "" : " with logging active") + ", version " + s.migrateVersion));
        var r = {};
        function u(e) {
            var t = n.console;
            s.migrateDeduplicateWarnings && r[e] || (r[e] = !0,
            s.migrateWarnings.push(e),
            t && t.warn && !s.migrateMute && (t.warn("JQMIGRATE: " + e),
            s.migrateTrace && t.trace && t.trace()))
        }
        function t(e, t, r, n) {
            Object.defineProperty(e, t, {
                configurable: !0,
                enumerable: !0,
                get: function() {
                    return u(n),
                    r
                },
                set: function(e) {
                    u(n),
                    r = e
                }
            })
        }
        function o(e, t, r, n) {
            e[t] = function() {
                return u(n),
                r.apply(this, arguments)
            }
        }
        s.migrateDeduplicateWarnings = !0,
        s.migrateWarnings = [],
        void 0 === s.migrateTrace && (s.migrateTrace = !0),
        s.migrateReset = function() {
            r = {},
            s.migrateWarnings.length = 0
        }
        ,
        "BackCompat" === n.document.compatMode && u("jQuery is not compatible with Quirks Mode");
        var i, a, c, d = {}, l = s.fn.init, p = s.find, f = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/, y = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g, m = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
        for (i in s.fn.init = function(e) {
            var t = Array.prototype.slice.call(arguments);
            return "string" == typeof e && "#" === e && (u("jQuery( '#' ) is not a valid selector"),
            t[0] = []),
            l.apply(this, t)
        }
        ,
        s.fn.init.prototype = s.fn,
        s.find = function(t) {
            var r = Array.prototype.slice.call(arguments);
            if ("string" == typeof t && f.test(t))
                try {
                    n.document.querySelector(t)
                } catch (e) {
                    t = t.replace(y, function(e, t, r, n) {
                        return "[" + t + r + '"' + n + '"]'
                    });
                    try {
                        n.document.querySelector(t),
                        u("Attribute selector with '#' must be quoted: " + r[0]),
                        r[0] = t
                    } catch (e) {
                        u("Attribute selector with '#' was not fixed: " + r[0])
                    }
                }
            return p.apply(this, r)
        }
        ,
        p)
            Object.prototype.hasOwnProperty.call(p, i) && (s.find[i] = p[i]);
        o(s.fn, "size", function() {
            return this.length
        }, "jQuery.fn.size() is deprecated and removed; use the .length property"),
        o(s, "parseJSON", function() {
            return JSON.parse.apply(null, arguments)
        }, "jQuery.parseJSON is deprecated; use JSON.parse"),
        o(s, "holdReady", s.holdReady, "jQuery.holdReady is deprecated"),
        o(s, "unique", s.uniqueSort, "jQuery.unique is deprecated; use jQuery.uniqueSort"),
        t(s.expr, "filters", s.expr.pseudos, "jQuery.expr.filters is deprecated; use jQuery.expr.pseudos"),
        t(s.expr, ":", s.expr.pseudos, "jQuery.expr[':'] is deprecated; use jQuery.expr.pseudos"),
        e("3.1.1") && o(s, "trim", function(e) {
            return null == e ? "" : (e + "").replace(m, "")
        }, "jQuery.trim is deprecated; use String.prototype.trim"),
        e("3.2.0") && (o(s, "nodeName", function(e, t) {
            return e.nodeName && e.nodeName.toLowerCase() === t.toLowerCase()
        }, "jQuery.nodeName is deprecated"),
        o(s, "isArray", Array.isArray, "jQuery.isArray is deprecated; use Array.isArray")),
        e("3.3.0") && (o(s, "isNumeric", function(e) {
            var t = typeof e;
            return ("number" == t || "string" == t) && !isNaN(e - parseFloat(e))
        }, "jQuery.isNumeric() is deprecated"),
        s.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "), function(e, t) {
            d["[object " + t + "]"] = t.toLowerCase()
        }),
        o(s, "type", function(e) {
            return null == e ? e + "" : "object" == typeof e || "function" == typeof e ? d[Object.prototype.toString.call(e)] || "object" : typeof e
        }, "jQuery.type is deprecated"),
        o(s, "isFunction", function(e) {
            return "function" == typeof e
        }, "jQuery.isFunction() is deprecated"),
        o(s, "isWindow", function(e) {
            return null != e && e === e.window
        }, "jQuery.isWindow() is deprecated")),
        s.ajax && (a = s.ajax,
        c = /(=)\?(?=&|$)|\?\?/,
        s.ajax = function() {
            var e = a.apply(this, arguments);
            return e.promise && (o(e, "success", e.done, "jQXHR.success is deprecated and removed"),
            o(e, "error", e.fail, "jQXHR.error is deprecated and removed"),
            o(e, "complete", e.always, "jQXHR.complete is deprecated and removed")),
            e
        }
        ,
        e("4.0.0") || s.ajaxPrefilter("+json", function(e) {
            !1 !== e.jsonp && (c.test(e.url) || "string" == typeof e.data && 0 === (e.contentType || "").indexOf("application/x-www-form-urlencoded") && c.test(e.data)) && u("JSON-to-JSONP auto-promotion is deprecated")
        }));
        var g = s.fn.removeAttr
          , h = s.fn.toggleClass
          , v = /\S+/g;
        function j(e) {
            return e.replace(/-([a-z])/g, function(e, t) {
                return t.toUpperCase()
            })
        }
        s.fn.removeAttr = function(e) {
            var r = this;
            return s.each(e.match(v), function(e, t) {
                s.expr.match.bool.test(t) && (u("jQuery.fn.removeAttr no longer sets boolean properties: " + t),
                r.prop(t, !1))
            }),
            g.apply(this, arguments)
        }
        ;
        var Q, b = !(s.fn.toggleClass = function(t) {
            return void 0 !== t && "boolean" != typeof t ? h.apply(this, arguments) : (u("jQuery.fn.toggleClass( boolean ) is deprecated"),
            this.each(function() {
                var e = this.getAttribute && this.getAttribute("class") || "";
                e && s.data(this, "__className__", e),
                this.setAttribute && this.setAttribute("class", !e && !1 !== t && s.data(this, "__className__") || "")
            }))
        }
        ), w = /^[a-z]/, x = /^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;
        s.swap && s.each(["height", "width", "reliableMarginRight"], function(e, t) {
            var r = s.cssHooks[t] && s.cssHooks[t].get;
            r && (s.cssHooks[t].get = function() {
                var e;
                return b = !0,
                e = r.apply(this, arguments),
                b = !1,
                e
            }
            )
        }),
        s.swap = function(e, t, r, n) {
            var o, i, a = {};
            for (i in b || u("jQuery.swap() is undocumented and deprecated"),
            t)
                a[i] = e.style[i],
                e.style[i] = t[i];
            for (i in o = r.apply(e, n || []),
            t)
                e.style[i] = a[i];
            return o
        }
        ,
        e("3.4.0") && "undefined" != typeof Proxy && (s.cssProps = new Proxy(s.cssProps || {},{
            set: function() {
                return u("JQMIGRATE: jQuery.cssProps is deprecated"),
                Reflect.set.apply(this, arguments)
            }
        })),
        s.cssNumber || (s.cssNumber = {}),
        Q = s.fn.css,
        s.fn.css = function(e, t) {
            var r, n, o = this;
            return e && "object" == typeof e && !Array.isArray(e) ? (s.each(e, function(e, t) {
                s.fn.css.call(o, e, t)
            }),
            this) : ("number" == typeof t && (r = j(e),
            n = r,
            w.test(n) && x.test(n[0].toUpperCase() + n.slice(1)) || s.cssNumber[r] || u('Number-typed values are deprecated for jQuery.fn.css( "' + e + '", value )')),
            Q.apply(this, arguments))
        }
        ;
        var A, k, S, M, N = s.data;
        s.data = function(e, t, r) {
            var n, o, i;
            if (t && "object" == typeof t && 2 === arguments.length) {
                for (i in n = s.hasData(e) && N.call(this, e),
                o = {},
                t)
                    i !== j(i) ? (u("jQuery.data() always sets/gets camelCased names: " + i),
                    n[i] = t[i]) : o[i] = t[i];
                return N.call(this, e, o),
                t
            }
            return t && "string" == typeof t && t !== j(t) && (n = s.hasData(e) && N.call(this, e)) && t in n ? (u("jQuery.data() always sets/gets camelCased names: " + t),
            2 < arguments.length && (n[t] = r),
            n[t]) : N.apply(this, arguments)
        }
        ,
        s.fx && (S = s.Tween.prototype.run,
        M = function(e) {
            return e
        }
        ,
        s.Tween.prototype.run = function() {
            1 < s.easing[this.easing].length && (u("'jQuery.easing." + this.easing.toString() + "' should use only one argument"),
            s.easing[this.easing] = M),
            S.apply(this, arguments)
        }
        ,
        A = s.fx.interval || 13,
        k = "jQuery.fx.interval is deprecated",
        n.requestAnimationFrame && Object.defineProperty(s.fx, "interval", {
            configurable: !0,
            enumerable: !0,
            get: function() {
                return n.document.hidden || u(k),
                A
            },
            set: function(e) {
                u(k),
                A = e
            }
        }));
        var R = s.fn.load
          , H = s.event.add
          , C = s.event.fix;
        s.event.props = [],
        s.event.fixHooks = {},
        t(s.event.props, "concat", s.event.props.concat, "jQuery.event.props.concat() is deprecated and removed"),
        s.event.fix = function(e) {
            var t, r = e.type, n = this.fixHooks[r], o = s.event.props;
            if (o.length) {
                u("jQuery.event.props are deprecated and removed: " + o.join());
                while (o.length)
                    s.event.addProp(o.pop())
            }
            if (n && !n._migrated_ && (n._migrated_ = !0,
            u("jQuery.event.fixHooks are deprecated and removed: " + r),
            (o = n.props) && o.length))
                while (o.length)
                    s.event.addProp(o.pop());
            return t = C.call(this, e),
            n && n.filter ? n.filter(t, e) : t
        }
        ,
        s.event.add = function(e, t) {
            return e === n && "load" === t && "complete" === n.document.readyState && u("jQuery(window).on('load'...) called after load event occurred"),
            H.apply(this, arguments)
        }
        ,
        s.each(["load", "unload", "error"], function(e, t) {
            s.fn[t] = function() {
                var e = Array.prototype.slice.call(arguments, 0);
                return "load" === t && "string" == typeof e[0] ? R.apply(this, e) : (u("jQuery.fn." + t + "() is deprecated"),
                e.splice(0, 0, t),
                arguments.length ? this.on.apply(this, e) : (this.triggerHandler.apply(this, e),
                this))
            }
        }),
        s.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "), function(e, r) {
            s.fn[r] = function(e, t) {
                return u("jQuery.fn." + r + "() event shorthand is deprecated"),
                0 < arguments.length ? this.on(r, null, e, t) : this.trigger(r)
            }
        }),
        s(function() {
            s(n.document).triggerHandler("ready")
        }),
        s.event.special.ready = {
            setup: function() {
                this === n.document && u("'ready' event is deprecated")
            }
        },
        s.fn.extend({
            bind: function(e, t, r) {
                return u("jQuery.fn.bind() is deprecated"),
                this.on(e, null, t, r)
            },
            unbind: function(e, t) {
                return u("jQuery.fn.unbind() is deprecated"),
                this.off(e, null, t)
            },
            delegate: function(e, t, r, n) {
                return u("jQuery.fn.delegate() is deprecated"),
                this.on(t, e, r, n)
            },
            undelegate: function(e, t, r) {
                return u("jQuery.fn.undelegate() is deprecated"),
                1 === arguments.length ? this.off(e, "**") : this.off(t, e || "**", r)
            },
            hover: function(e, t) {
                return u("jQuery.fn.hover() is deprecated"),
                this.on("mouseenter", e).on("mouseleave", t || e)
            }
        });
        function T(e) {
            var t = n.document.implementation.createHTMLDocument("");
            return t.body.innerHTML = e,
            t.body && t.body.innerHTML
        }
        function P(e) {
            var t = e.replace(O, "<$1></$2>");
            t !== e && T(e) !== T(t) && u("HTML tags must be properly nested and closed: " + e)
        }
        var O = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi
          , q = s.htmlPrefilter;
        s.UNSAFE_restoreLegacyHtmlPrefilter = function() {
            s.htmlPrefilter = function(e) {
                return P(e),
                e.replace(O, "<$1></$2>")
            }
        }
        ,
        s.htmlPrefilter = function(e) {
            return P(e),
            q(e)
        }
        ;
        var D, _ = s.fn.offset;
        s.fn.offset = function() {
            var e = this[0];
            return !e || e.nodeType && e.getBoundingClientRect ? _.apply(this, arguments) : (u("jQuery.fn.offset() requires a valid DOM element"),
            arguments.length ? this : void 0)
        }
        ,
        s.ajax && (D = s.param,
        s.param = function(e, t) {
            var r = s.ajaxSettings && s.ajaxSettings.traditional;
            return void 0 === t && r && (u("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"),
            t = r),
            D.call(this, e, t)
        }
        );
        var E, F, J = s.fn.andSelf || s.fn.addBack;
        return s.fn.andSelf = function() {
            return u("jQuery.fn.andSelf() is deprecated and removed, use jQuery.fn.addBack()"),
            J.apply(this, arguments)
        }
        ,
        s.Deferred && (E = s.Deferred,
        F = [["resolve", "done", s.Callbacks("once memory"), s.Callbacks("once memory"), "resolved"], ["reject", "fail", s.Callbacks("once memory"), s.Callbacks("once memory"), "rejected"], ["notify", "progress", s.Callbacks("memory"), s.Callbacks("memory")]],
        s.Deferred = function(e) {
            var i = E()
              , a = i.promise();
            return i.pipe = a.pipe = function() {
                var o = arguments;
                return u("deferred.pipe() is deprecated"),
                s.Deferred(function(n) {
                    s.each(F, function(e, t) {
                        var r = "function" == typeof o[e] && o[e];
                        i[t[1]](function() {
                            var e = r && r.apply(this, arguments);
                            e && "function" == typeof e.promise ? e.promise().done(n.resolve).fail(n.reject).progress(n.notify) : n[t[0] + "With"](this === a ? n.promise() : this, r ? [e] : arguments)
                        })
                    }),
                    o = null
                }).promise()
            }
            ,
            e && e.call(i, i),
            i
        }
        ,
        s.Deferred.exceptionHook = E.exceptionHook),
        s
    });
