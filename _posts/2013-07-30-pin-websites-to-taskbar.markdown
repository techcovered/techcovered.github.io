---
author: Abhilash
comments: false
date: 2013-07-30 19:31:55+00:00
excerpt: If you would like to access your web apps and websites faster, pin them to
  your task bar or quick launch with these methods. You can pin them up through Internet
  Explorer, or any other browser or even open them as a pop up!
layout: post
slug: pin-websites-to-taskbar
title: How to Pin Websites to your Taskbar or Quick Launch for Easier Access
wordpress_id: 350
categories:
- Featured
- How to
- Internet
- Tips
tags:
- Firefox
- Google Chrome
- Website
- Windows
---

With a large number of interesting web apps, I recently realized that I use these web apps more than I use any of my desktop software. For instance, I heavily rely on Google Keep (Google’s note taking service) and since it has no desktop app, I would have to manually log in with my web browser every time I wanted to use it. A more easy alternative is to keep a shortcut on your taskbar, if you use Windows 7 or 8 or quick launch, if you use Windows XP or Vista.


## The Easiest Way – Using Internet Explorer (Windows 7 or 8)


Before you cringe at the thought of Internet Explorer, think about it. IE has improved drastically since the past years and has been closely following the heels of Firefox and Chrome, if not at the same level. This method works for Internet Explorer 9+ versions.

To pin a site to the taskbar, simply drag the window in IE to the task bar. As simple as that. Besides, IE opens up with a special window which has that website as its home page and a favicon on its left.

[![Internet Explorer Shortcuts](images/Internet-Explorer-Shortcuts_thumb.gif)](http://img.techcovered.org/tc/Internet-Explorer-Shortcuts.gif)


## The Moderate way – If you use any other browser


A lot of people still don’t prefer IE and if you are one of those who use Chrome or Firefox or Opera, there is another way. The first step is to create an shortcut to the website. To do this, right click and select New>Shortcut. Then in the location bar, click on Browse and navigate to the location of the browser you’d like to open it with.

In case of Google Chrome, the directory is _C:\Users\<your username>\appdata\local\Google_. However, on some computers, it is at _C:\Program Files\Google\Chrome\Application\Chrome.exe_. If you can’t find yours, you should search for it.

In case of Firefox, the directory is _C:\Program Files\Mozilla\Firefox.exe_. If you have a 64 bit system, change it to Program Files (x86).

After entering the location of your browser, type the URL you want to open. Take this picture for example.

![shortcut-website](images/shortcut-website.png)

Click on Next, type the websites name and click Ok. Now, right click on that shortcut and select Properties and click on Change Icon. Before you select an icon, head up to [iconarchive](http://www.iconarchive.com) or [iconfinder](http://www.iconfinder.com) to get a suitable icon for that shortcut. Then browse to the icon and click Ok. Now, drag the shortcut to the taskbar or quick launch.


## The slightly Difficult way – Using JavaScript and HTML


So far, these sites pinned to the task bar open up the whole browser. This way, they act like a local bookmark. How would you like these websites to be opened in a minimal browser window which is exclusively made for that website? There is a way to do this, but it is a bit lengthy.

![google-chrome-popup](images/google-chrome-popup.png)

This method makes use of the _window.open() _function in JavaScript. Both Chrome and Firefox supports this code, though the codes vary a bit.

First, open notepad and save the file as html. Paste the following code if you want to use **Google Chrome** to open the websites. Change the website URL to your specification and follow the icon change method in the earlier method to customize it. Then drag it to the taskbar.

    
    <html>
    <head><title>Launcher</title></head>
    <body>
    <script type="text/javascript">
    window.open('http://www.techcovered.org','Techcovered','toolbar=1,scrollbars=1,location=1,status=1,menubar=1,resizable=1,width=800,height=600');
    </script>
    </body>
    </html>


If you use **Firefox**. then paste this code.

    
    <html>
    <head><title>Launcher</title></head>
    <body>
    <script type="text/javascript">
    window.open('http://www.techcovered.org','TechCovered', 'directories=no,titlebar=no,toolbar=no,location=no,status=no,menubar=no,scrollbars=no,resizable=no,width=800,height=600');
    </script>
    </body>
    </html>


**Important**: It is to be noted that the first time you run this, Chrome and Firefox won’t open the window because it blocks the pop up. So the first time you run this, add an exception to the html page and then add the code _window.close(); _after line #5.

Did this work for you? Do you have an easier method? Do comment.

**UPDATE: **Apparently, this is much easier to do in Chrome. To pin a site, open that website in Google Chrome, click on the settings button in the top right and select **Tools > Create Application Shortcuts**. In the dialog box, select "**Pin to Taskbar**" and click Ok. You now have the website bookmarked to your taskbar directly!

**EDIT**: Chrome now has a [App Launcher](http://www.techcovered.org/438/chrome-app-launcher) that lets you do this even more easily.
