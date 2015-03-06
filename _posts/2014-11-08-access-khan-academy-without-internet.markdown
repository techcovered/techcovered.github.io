---
author: Abhilash
comments: false
date: 2014-11-08 16:51:17+00:00
excerpt: Download the Entire Khan Academy Courses and access them, with the same online
  experience, without requiring an internet connection.
layout: post
slug: access-khan-academy-without-internet
title: Access Khan Academy Courses without an Internet Connection
wordpress_id: 711
categories:
- Downloads
- Internet
tags:
- Education
- Server
- Website
---

Khan Academy has the world's best collection of videos, education material and practise tests, with its subjects ranging from simple algebra to vector animations using computer languages. As you can imagine, this would mean that their servers are huge and the website data possibly occupies terabytes of data.

Khan's goal is to provide free quality education to the masses, but not everyone has a fast internet connection to connect and stream tutorials from Khan's website.

One possible solution is to download these videos, individually, for offline watching - but there are also many lessons which do not use videos for learning. Besides, Khan Academy also provides you with lots of practise tests, which you cannot simply _download_. However, a [summer intern](http://jamiealexandre.com/about/) at Khan's academy came up with a service which lets you use Khan Academy, without an internet connection.

![KhanAcademy](http://img.techcovered.org/tc/KhanAcademy.png)

[K.A Lite](https://learningequality.org/ka-lite/), which stands for Khan Academy Lite, is the basically what its name implies - a lightweight version of Khan Academy. K.A Lite works well offline, emulating Khan Academy by setting up a server on your computer (or even a Raspberry Pi) and allowing you to add Students, Faculties, etc, and track their progress. KA Lite allows you to have the complete online experience of Khan Academy. Here is a [demo ](http://demo.learningequality.org/)of how it looks.

KA lite stands true to its word. It isn't even that big of a download - the Windows Installation file is only 36 MB. It also works for Mac and Linux. However, expect highly compressed videos - watchable, but certainly not HD.

If you run an institution and would like implement this for your classrooms, all you have to do is to download KA Lite to a central computer (which is connected to your local network) and then provide the IP address (along with the port in which KA Lite is running) to your other computers/devices connected to the same local network. For this to work, the other computers/devices must be connected to the same network as the central computer - either through LAN or a localized WiFi network.

There are, however, a few limitations. KA Lite is the light version of Khan's Academy, and there are a lot of advanced courses missing from it. Certain subjects like Computer Programming are removed from it. However, new courses for the already existing subjects can be downloaded from the official Khan's Academy, though you need an internet connection to download them.

[**Download KA Lite**](https://learningequality.org/ka-lite/#download) | **[Support and Help installing](https://learningequality.org/ka-lite/#support)**
