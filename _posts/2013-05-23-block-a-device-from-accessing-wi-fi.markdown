---
author: Abhilash
comments: false
date: 2013-05-23 12:00:18+00:00
excerpt: If you want to block certain devices from connecting to your WiFi, here is
  a simple tutorial that will help you do that easily.
layout: post
slug: block-a-device-from-accessing-wi-fi
title: How to block a particular device from accessing your Wi-Fi
wordpress_id: 194
categories:
- How to
---

If you own a Wi-Fi connection at home or if you manage the company Wi-Fi connection, then you’d probably want to restrict certain devices – computers, laptops, tablets, or even mobile phones from connecting to your precious Wi-Fi. There is a way to do this, directly from your router itself.


## Step 1: Login to your Router


The first step is to login to your router’s administrator page, using the default (or set) username and password. Open your web browser and type in the URL of your modem. This URL varies from one router (or modem-cum-router) to another. If you look in your routers manual, you’d find the URL of the admin page.

[![url-router-admin-page](https://techcovered.github.io/images/url-router-admin-page_thumb.png)](http://img.techcovered.org/tc/url-router-admin-page.png)If you are lazy, then click on the _Start_ button and type _cmd_ and press enter. In the command prompt, type _ipconfig _and press enter. The address in the _Default Gateway _is the URL for your routers admin page. Type this in your browser’s URL bar.

You will be prompted for your username and password. If this is the first time you visited your router’s admin page (and didn’t change the password), the default username and password is mostly _admin _and _admin _respectively.


## Step 2: Check the devices connected to your Wi-Fi


Depending on your router, you will land on the admin page. From there, you will find an option called “_Wireless_” which will enable you to manage your router’s wireless settings. I use a router from TP-Link, which has such options in the admin page. Most routers have the same options, but if you can’t find the said options, all you need to do is search further in the admin panel till you come across them.

Your modem will have a** _Wireless Statistics_** or a similar page, which shows you the MAC address of all devices connected to your Wi-Fi. Some modems also show how much packets they have exchanged, which will give you an idea of how much internet they use.

[![mac-address-wireless](https://techcovered.github.io/images/mac-address-wireless_thumb.png)](http://img.techcovered.org/tc/mac-address-wireless.png)


## Step 3: Identify which device you want to block


Now that you know the devices that are currently connected to your Wi-Fi, it is time to identify which one is the unwanted device. The method to identify unwanted devices is to disconnect or power off all your devices connected to the Wi-Fi, except your computer. In the _Wireless Statistics_ page, if you see only one device, it probably means you have no unwanted connections. If you get more than one device, then you may have a problem.

[![mac-address-computer](https://techcovered.github.io/images/mac-address-computer_thumb.png)](http://img.techcovered.org/tc/mac-address-computer.png)

You should now identify your computers MAC address. In Windows, open command prompt and type “_ipconfig /all_” (without quotes). In the list that follows, your computer’s MAC address is listed under the _Physical Address _of your network card. If you happen to have a lot of virtual/real network card, then the one displayed here, which matches the one in your Wireless Statistics page, is your computers MAC address.

The other MAC address is the one that needs to be blocked.


## Step 4: Blocking the unwanted device


[![mac-filtering-router](https://techcovered.github.io/images/mac-filtering-router_thumb.png)](http://img.techcovered.org/tc/mac-filtering-router.png)Now that you have the MAC address of the device you want to block, search for anything similar to _Wireless MAC Filtering_. It would be Disabled by default. Click on _Enable_ to enable it. You may also encounter something called _Filtering Rules_. The basic rules are if you want to deny Wi-Fi to all the MAC address you enter, or if you want to enable Wi-Fi for only those MAC Addresses. You can go both ways (your call) but I suggest you stick with the default.

Select "_Add New_” and enter the MAC address of the device you want to block. This is applicable for all Wi-Fi enabled devices, including but not limited to phones, tablets, computers, laptops, smart watches, etc.

Click on Save or Ok and then reboot your router.


## Step 5: Change your Wi-Fi and Router password


To be on the safer side, since your Wi-Fi was compromised in the first place, it is very advisable to change your Wi-Fi password. Another wise move would be to change your router’s default login from admin to something else, along with your password. Better safe than sorry.

Is your router any different? Can’t you find the required settings? Email me and we’ll sort it out.
