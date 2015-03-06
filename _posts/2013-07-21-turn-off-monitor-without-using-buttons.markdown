---
author: Abhilash
comments: false
date: 2013-07-21 11:45:36+00:00
excerpt: If you have a laptop or if your monitor's buttons are broken, then you can
  turn your monitor off by simply running a command or by clicking an icon. As simple
  as that!
layout: post
slug: turn-off-monitor-without-using-buttons
title: How to turn off your Monitor without using it's Built in buttons
wordpress_id: 322
categories:
- How to
- Tips
tags:
- Command Line
- Windows
---

![nircmd_monitor_off](https://techcovered.github.io/images/nircmd_monitor_off.png)Monitors come with a power button (laptops’ displays don’t, however) which you can use to turn off the monitor, to save power or any other purposes. In case your monitor’s power button is broken, or you would just like an easier way to turn off your monitor, there is a way.

To do this, you first have to download [**NirCmd**](http://nirsoft.net/utils/nircmd.zip). NirCmd is a command line utility using which you can perform some incredible tasks. First, download the utility and extract its contents into a directory, say C: drive. To turn the monitor off, open command prompt and go to the directory where you extracted the utility and run the following line:

    
    nircmd.exe monitor off


As simple as that! However, if you want an easier way to do this, then on your desktop, right click anywhere and select New > Shortcut. In the location, click on Browse, and navigate to location where you extracted nircmd. In the end of the location, type monitor off. It should look something like this.

[![nircmd_shortcut_desktop](https://techcovered.github.io/images/nircmd_shortcut_desktop_thumb.png)](http://img.techcovered.org/tc/nircmd_shortcut_desktop.png)

Click on next and name the shortcut with something apt, like “Turn off Monitor”. Additionally, you can also right click and select properties and click on “Change icon” to change it to something suitable.

If you want to add more magic into this, how would you like your computer to tell something like “Monitor turning off” before it turns off? This is indeed possible with nircmd. Paste the following code in a text file and save it as a “bat” file.

    
    @echo off
    cd C:\
    nircmd speak text "Monitor turning off"
    nircmd monitor off
    exit


Replace C:\ with wherever you extracted nircmd and the text inside the quotes with whatever you please. Every time you want your monitor turned off, use this bat file instead. For a full list of things this utility can do, read its [documentation](http://nirsoft.net/utils/nircmd2.html#using).
