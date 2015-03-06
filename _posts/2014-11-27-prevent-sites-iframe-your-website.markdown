---
author: Abhilash
comments: false
date: 2014-11-27 09:09:24+00:00
excerpt: Here is a detailed security measure on how to prevent other websites from
  using iframes to display your website, thereby decreasing your rankings.
layout: post
slug: prevent-sites-iframe-your-website
title: How to Prevent Other Websites from iframing your Website
wordpress_id: 717
categories:
- How to
- Internet
tags:
- JavaScript
- SEO
- Website
---

If you own a website, then you are probably wary of other websites copying your content. You can usually deal with these websites by filing DMCA notices to them and then to Google, so that the quality of the website which copies your website, doesn't affect your site's rankings on Google.

However, a few websites go the extra mile. They directly embed your website within their website, using iframes. If you don't want anybody using iframes with your websites, all you need to do is to add a small line of javascript code to your website (or more specifically, to each web page of your website) .

    
    <script type="text/javascript">
       if (top.location != location) {
          top.location.href = document.location.href ;
       }
    </script>


This code checks whether the browser address is the same as the address of your page. If it is not (which is true in case of iframes), then the browser redirects to your website's original address.

However, it is not all that simple. When this trick was more frequently used, another bypass was found. Assume that the malicious site is A, and your website is B. Using this 'hack', everytime B uses the script to get away from A, A forces it to stay in its own website. This happens during every iteration, until the browser gives up and displays a 204 (Content not found) error.

This 'hack' is almost impossible to bypass. There is no way B can get away from A. However, if B can't get away, then it can at least display a suitable message, so that the visitors from A could be made aware that A is a malicious site and ask them to proceed to B. This is a mechanism that even Facebook uses, to protect its data from unwitting users.

The following code first checks if it is an iframe or not, and then proceeds to display a "Copied" message if it detects an iframe. It also tries to get outside the iframe 5 times.

    
    <script type="text/javascript">
      var tries=0;
      if (top.location != location) {
         document.getElementById("<span style="color: #ff0000;">print</span>").innerHTML= "<span style="color: #ff0000;">COPIED</span>";
         var trys = setInterval(function() {
             top.location.href = document.location.href;
             tries++;
             if(tries>5) clearInterval(trys);
          }, 1);
      }
    </script>


In this code, replace the red color "print" with the ID of any div element where you wish to display the error message. Also change the red "COPIED" message, with whatever message you please.

There is another method to achieve this, however, it requires editing the configuration files of your server and also, only modern browsers support this. To try this method, take a look at [Mozilla's Developer Network page](https://developer.mozilla.org/en-US/docs/Web/HTTP/X-Frame-Options).


