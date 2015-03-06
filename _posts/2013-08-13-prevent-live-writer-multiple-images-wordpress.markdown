---
author: Abhilash
comments: false
date: 2013-08-13 17:24:44+00:00
excerpt: If you use Windows Live Writer for blogging and upload images, note that
  it uploads multiple versions of the same image. Here is how to disable it.
layout: post
slug: prevent-live-writer-multiple-images-wordpress
title: Prevent Windows Live Writer from Uploading Multiple Versions of Same Image
  to Wordpress
wordpress_id: 369
categories:
- Downloads
- Internet
- Tips
tags:
- Blogging
- Website
- Wordpress
---

If you use Windows Live Writer* for publishing blog posts to Wordpress (or even Blogger), then you might have noticed that Wordpress tends to upload multiple versions of the same image to your servers. While you are on an unlimited storage space, this might be okay, but if you have a restricted space provided by your host, then you have to know how to stop this to avoid exhausting your limit.

![wlw-duplicate-in-wordpress](images/wlw-duplicate.png)

![wlw-no-link](images/wlw-no-link.png)When you insert an image by default in Windows Live Writer, it automatically links the image to the “Source Picture” in the Format button in the ribbon toolbar. By this, windows live writer uploads two copies of the image – one the original and one the other image which live writer will be viewed when you click the image.

While this is rarely useful, it is advisable to disable this altogether. To do this, click on “Link to: Source Picture” and select “No Link”. The next time you publish a post, two copies of the image wont be uploaded.

*This method is for the latest version – [WLW 2012](http://windows.microsoft.com/en-us/windows-live/essentials).
