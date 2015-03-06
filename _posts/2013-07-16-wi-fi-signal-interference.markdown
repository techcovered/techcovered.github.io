---
author: Abhilash
comments: false
date: 2013-07-16 10:12:19+00:00
excerpt: If you have many wireless connections near your area, your network probably
  suffers from their interference. Here is how you can see which frequencies are populated
  and switch to a less crowded one.
layout: post
slug: wi-fi-signal-interference
title: How to know if your Wi-Fi signal has Interference from other Networks
wordpress_id: 314
categories:
- Featured
- How to
- Software
- Tips
tags:
- Modem
- Wireless
---

If you live in a residential area or apartments, etc. you will find a lot of Wi-Fi networks around you, including the one which you own. With any Wi-Fi networks around, there is a high possibility that some of these Wi-Fi signals are overlapping with the frequency of your Wi-Fi signal, thus weakening your signal strength and also its speed, performance, etc.

One of the solutions to solve this problem is to keep your Wi-Fi modem or router as close to your devices as possible. This will eliminate the problem of the network being weakened over long distances.

If, due to some reasons, you cannot place them close to your devices, either because you use too many Wi-Fi enabled devices or your Desktop is far away and you cannot afford extra wiring to shift the router, you need to _change the frequency_ of your router.

**[inSSIDer](http://www.metageek.net/products/inssider/)** is a Wi-Fi analyzer tool for Windows and [Mac](http://www.metageek.net/products/inssider-for-mac/) which you can use to view and analyze all the Wi-Fi connections your computer’s network adapter can find. The most important function of this tool is that it can also find out the different frequencies (or channels) of the detected networks. For example, if many networks are using the same channel, then that particular channel becomes congested and your Wi-Fi signal will end up facing lots of interference, thereby declining its performance.

![inssider](images/inssider.png)

**WirelessMon** is another tool, but not a free one. There is a 30 day trail version, however, that will suit our needs at the moment. This tool gives more information than inSSIDer. You get many graphs regarding network speeds, strengths, etc. All the channels occupied is also graphically shown.

Now that you know more about the channel you are in, if it is crowded, you should change it to a more free one (or a less crowded one). Changing from your current channel can only be done through the router. Login to your router’s admin page.

_[For people who do not know how to do this, (in Windows) open command prompt and type ipconfig. Copy the ip address in the default gateway and then paste it into your browsers URL. It will ask for a username and password. If you don’t know this, it is usually “admin” for both username and password. If it isn’t, refer your router’s manual ]_

Depending on your router’s manufacturer, there are different ways to do it. A simple Google search will give you methods to do so. By default, some routers have set the channel to Auto. This may not be that useful, considering the fact that your preferences and network conditions may be different.

If you have a 2.4Ghz router, the channels 1,6 and 11 are ideal and recommended. If you have a 5Ghz modem, the 153, 157 and 161 are recommended. However, if these are not free, do change them.

**Note: **Some countries restrict you from using [particular channels](http://en.wikipedia.org/wiki/List_of_WLAN_channels). USA, for example, doesn’t all you to use 12-14 channels. So chose your channel carefully.
