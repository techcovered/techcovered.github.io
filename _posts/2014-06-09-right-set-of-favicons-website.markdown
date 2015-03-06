---
author: Abhilash
comments: false
date: 2014-06-09 17:05:59+00:00
excerpt: 'No matter how beautifully your website is designed, it still would look
  incomplete without a good favicon. Here is how you can easily generate favicons
  for various devices without getting into any technicalities. '
layout: post
slug: right-set-of-favicons-website
title: Get the Right Set of Favicons for your Website
wordpress_id: 626
categories:
- Internet
- Tips
tags:
- Website
- Wordpress
---

No matter how beautifully your website is designed, it still would look incomplete without a good favicon. Favicons have grown to be of more importance ever since websites started implementing responsive web designs. Because of this, mobile browsers use your website's favicon as an "icon" on mobile displays. If your favicon is of a low resolution, then it would appear hideous on mobile displays.

A few vendors like Apple need you to use a particular code, for Apple devices to use your favicon as an icon. The same applies for various devices of different resolution screens. The devices which have a higher resolution screen need a higher quality favicon, whereas a lower resolution device can make do with a lower resolution of your favicon.

![favicon_various](https://techcovered.github.io/images/favicon_various.png)

If you are a web developer, then it gets pretty difficult to deal with this issue on a device-to-device scale. [RealFaviconGenerator ](http://realfavicongenerator.net/)is a website which lets you easily create code for your website, so that all devices get their fair share of your favicon.

The process is very simple. You simply head over to their website and upload your favicon picture. If you don't already have one, it is very easy to make one in an image editing software, like Paint.NET or GIMP. The website says that your favicon image should optimally be of size 260x260 pixels for optimal results.

RealFaviconGenerator also supports Windows 8 tiles, so that if someone decides to pin your website as a tile in Windows 8, then you can customize the tile as per your liking.

After you are done, a zip file containing all the important resolution is made available for download. Download the file and extract its contents into a folder. Then, upload these files to the root of your website directory, using an FTP client such as Filezilla.

You also get few lines of code, which you should edit in your website's source code, immediately under the <head> tag. If you are a wordpress or another CMS user, you will find this in the header.php file of your theme. For other websites, it would be probably located in the index.html (or index.php) of your site.

To check if you have implemented the favicons correctly, the website has a favicon checker on the homepage. Just fill in the name of your website to check if your website is properly favicon-optimised.
