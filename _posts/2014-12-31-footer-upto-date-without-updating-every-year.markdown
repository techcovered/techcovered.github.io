---
author: Abhilash
comments: false
date: 2014-12-31 17:16:18+00:00
excerpt: If you are a webmaster and if you have the current year displayed on your
  footer, here is a simple script to update your footer automatically every year
layout: post
slug: footer-upto-date-without-updating-every-year
title: Keep your Footer up to date without Updating it Every Year
wordpress_id: 769
categories:
- How to
- Tips
tags:
- Blogging
- JavaScript
- Website
- Wordpress
---

![no-updated-footer](images/no-updated-footer.png)

It's the last few days of December. The year is soon coming to an end. If you are a webmaster and if you have the current year displayed on your footer, one of your worries would be updating your website's footer every year so that the site shows the current year as soon as the 31st December strikes 12:00 AM.

Instead of manually editing HTML every single year, you can instead use a simple javascript code to do it automatically for you. If you have something like _© 2014 Your website name_ in your footer, then put this simple javascript code in your footer.

    
    &copy; <script>new Date().getFullYear()>2010&&document.write(new Date().getFullYear());</script> Your website name.


However, some browsers have extensions like NoScript installed. This would cause a problem and such users wouldn't be able to see the footer. Certain bots of search engines also might have problems indexing javascript generated content. If you use wordpress or any other CMS which uses php, there is also a php code which you can replace your footer with.

    
    &copy; <?php echo date('Y'); ?> Your website name.


If your website runs on any other language, there _will_ be a date function which you can use to automatically update your footer. For static HTML users, you can either use the javascript code or be on the safer side and manually update is every year.

[Source](http://updateyourfooter.com/)
