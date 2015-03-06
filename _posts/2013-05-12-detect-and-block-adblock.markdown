---
author: Abhilash
comments: false
date: 2013-05-12 12:16:44+00:00
excerpt: 'If your website depends mainly on advertising revenue, tell it to your users
  who have Adblock installed. Here is how to install Antiblock script on your website. '
layout: post
slug: detect-and-block-adblock
title: How to detect and block users with Adblock installed
wordpress_id: 161
categories:
- Internet
- Tips
tags:
- Adblock
- JavaScript
- Wordpress
---

Adblock is usually a plugin for your browser (or a modified host file) that effectively blocks out all advertisements from websites, intrusive or not. Adblock wasn’t much famous during the previous years, but as of now, many people have it installed in their browsers and [mobile phones too](http://www.techcovered.org/105/install-adblock-plus-android). This is bad news to many web admins and blog authors, whose main income relies on the advertising revenue of their site.

But web admins and blog owners, fret not. There are ways to block users (or even send them a subtle message) who have adblock software installed on their computers. Here, we use the Anti-Adblock script from [antiblock](http://antiblock.org/). The website is actually in German but they do provide a Google Translate toolbar to convert it into English.


## The Anti-Adblock Script


The script can be downloaded (copied actually) as per your specifications from the [website](http://antiblock.org/?p=script). You can select either the HTML or PHP version, force enable JavaScript option, the time period in which to display the message and also your custom ad filters. The default setting is good enough for most web admins.

Here is my modified version of the script, full credits to antiblock, of course.

    
    <style><!--
        #n968 {
            position:fixed!important;
            position:absolute;
            top:0;
            top:expression((t=document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop)+"px");
            left:0;
            width:100%;
            height:100%;
            background-color:#fff;
            opacity:0.9;
            filter:alpha(opacity=90);
            display:block
        }
        #n968 p {
            opacity:1;
            filter:none;
            font:bold 16px Verdana, Arial, sans-serif;
            text-align:center;
            margin:20% 0
        }
        #n968 p a, #n968 p i {
            font-size:12px
        }
        #n968 ~ * {
            display:none
        }
    --></style><script type="text/javascript">// <![CDATA[
        (function (w, u) {
            var d = w.document,
                z = typeof u;
    
            function n968() {
                function c(c, i) {
                    var e = d.createElement('span'),
                        b = d.body,
                        s = b.style,
                        l = b.childNodes.length;
                    if (typeof i != z) {
                        e.setAttribute('id', i);
                        s.margin = s.padding = 0;
                        s.height = '100%';
                        l = Math.floor(Math.random() * l) + 1
                    }
                    e.innerHTML = c;
                    b.insertBefore(e, b.childNodes[l - 1])
                }
                function g(i, t) {
                    return !t ? d.getElementById(i) : d.getElementsByTagName(t)
                };
    
                function f(v) {
                    if (!g('n968')) {
                        c('
    
    Hello there! It looks like you are using Adblock. This site depends mostly on revenue from ads for its existance. 
    
    So please disable your Adblocker and help us serve better. Thank you!
    <input type="button" onclick="(function(){document.getElementById(\'n968\').style.display=\'none\'})()" value=Close>
    
    ', 'n968')
                    }
                };
                (function () {
                    var a = ['AD_CONTROL_8', 'TopAdBox', 'adsense03', 'advertiserLinks', 'ctl00_cphMain_hlAd2', 'google_ad_test', 'ttp_ad_slot1', 'ad', 'ads', 'adsense'],
                        l = a.length,
                        i, s = '',
                        e;
                    for (i = 0; i < l; i++) {
                        if (!g(a[i])) {
                            s += '<a id="' + a[i] + '"></a>'
                        }
                    }
                    c(s);
                    l = a.length;
                    for (i = 0; i < l; i++) {
                        e = g(a[i]);
                        if (e.offsetParent == null || (w.getComputedStyle ? d.defaultView.getComputedStyle(e, null).getPropertyValue('display') : e.currentStyle.display) == 'none') {
                            return f('#' + a[i])
                        }
                    }
                }());
                (function () {
                    var t = g(0, 'img'),
                        a = ['/adfrequencycapping.', '/dynbanner/flash/ad', '/emailads/ad', '/google-adsense.', '/retrad.', '/top_ads_', '/ukc-ad.', '/wallpaperads/ad', '_ad_minileaderboard.', '_468.gif'],
                        i;
                    if (typeof t[0] != z && typeof t[0].src != z) {
                        i = new Image();
                        i.onload = function () {
                            this.onload = z;
                            this.onerror = function () {
                                f(this.src)
                            };
                            this.src = t[0].src + '#' + a.join('')
                        };
                        i.src = t[0].src
                    }
                }());
                (function () {
                    var o = {
                        'http://pagead2.googlesyndication.com/pagead/show_ads.js': 'google_ad_client',
                        'http://js.adscale.de/getads.js': 'adscale_slot_id',
                        'http://get.mirando.de/mirando.js': 'adPlaceId'
                    }, S = g(0, 'script'),
                        l = S.length - 1,
                        n, r, i, v, s;
                    d.write = null;
                    for (i = l; i >= 0; --i) {
                        s = S[i];
                        if (typeof o[s.src] != z) {
                            n = d.createElement('script');
                            n.type = 'text/javascript';
                            n.src = s.src;
                            v = o[s.src];
                            w[v] = u;
                            r = S[0];
                            n.onload = n.onreadystatechange = function () {
                                if (typeof w[v] == z && (!this.readyState || this.readyState === "loaded" || this.readyState === "complete")) {
                                    n.onload = n.onreadystatechange = null;
                                    r.parentNode.removeChild(n);
                                    w[v] = null
                                }
                            };
                            r.parentNode.insertBefore(n, r);
                            setTimeout(function () {
                                if (w[v] !== null) {
                                    f(n.src)
                                }
                            }, 2000);
                            break
                        }
                    }
                }())
            }
            if (d.addEventListener) {
                w.addEventListener('load', n968, false)
            } else {
                w.attachEvent('onload', n968)
            }
        })(window);
    // ]]></script>


Here is a demo of the script that displays an alert of you have Adblock installed.
[Demo](http://img.techcovered.org/adblock-test.html)


## One issue though


There is an issue though. Whenever I placed the script just after the body tag, the alert is displayed, but after it is closed, the normal content didn’t seem to be rendered. Therefore, I’d advise you putting the script just before the body tag ends.
