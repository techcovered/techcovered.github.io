---
author: Abhilash
comments: false
date: 2013-07-08 13:20:21+00:00
excerpt: If you come across an email from a domain, you can easily determine which
  mail server that email is using
layout: post
slug: know-mail-server-email-uses
title: How to know which Mail Server an email is using
wordpress_id: 281
categories:
- Tips
tags:
- Email
---

If you own a domain, then you can have your own email ID from that domain, like email@domain.com. Most of the hosting and domain companies provide their own mail server, which they use to send and receive email through these email IDs. However, you can also use Gmail (through Google Apps) and also Outlook, among many others, as a mail server.

If you would like to find out what mail server a email from a domain is using, all that is required is a single command. If xyz@testdomain.com is the email you’d like to know about, then all the email ID from the website uses the same mail server, so you would have to find out only the mail server of the domain.

In **Windows**, open command prompt and type the following. Change testdomain.com to any domain you want to query.

nslookup –type=mx testdomain.com

In Linux and Unix (including Mac), open up the terminal windows and type this. Again, change the domain to your liking.

$ nslookup -query=mx testdomain.com

When you run the command, you’ll see the following output.

![mail-server-nslookup](https://techcovered.github.io/images/mail-server-nslookup.png)

As expected, Microsoft's email IDs use outlook mail servers. Similarly, AOL uses its own mail servers (Anyone here remembers AOL mail?). This can also be extended to check various websites’ mail servers. It is surprising how many of them use Gmail (Including this blog), partly because of the Google Apps package Google offers. Outlook is also a serious alternative to be considered.

I don’t see why anyone would want to know the mail server of websites, but if you do, then this is the right way to do it.
