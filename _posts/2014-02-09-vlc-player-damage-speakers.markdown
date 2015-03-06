---
author: Abhilash
comments: false
date: 2014-02-09 16:42:59+00:00
excerpt: Dell has announced that it will not provide warranty for your laptop if you
  use VLC media player, accusing it of causing damage. Is it true?
layout: post
slug: vlc-player-damage-speakers
title: Using VLC Player can cause Damage to your Speakers
wordpress_id: 518
categories:
- Featured
- Software
tags:
- Dell
- VLC
- Windows
---

![vlc-full-volume](images/vlc-full-volume.png)

I am an avid fan of VLC media player. It is my default media player and I use it all the time, whenever opening and playing a media file is required. But here is some very interesting news – using VLC media player can cause damage to speakers and some companies are refusing warranty if they find VLC installed on your computer!

Dell recently announced that using VLC media player, with a volume above 100%, can cause permanent damage to the speakers present on its laptop range. It also announced that it [wouldn’t be providing warranty](http://en.community.dell.com/support-forums/laptop/f/3517/t/19492918.aspx) for speakers if they find media players, such as VLC media player, KM player,etc installed on the laptop. Dell also released a [BIOS update](http://www.dell.com/support/troubleshooting/us/en/04/KCS/KcsArticles/ArticleView?c=us&l=en&s=bsd&docid=557836) a while back to prevent VLC Player from damaging its components.

VLC had an age-old feature which would allow you to turn up the volume of the media file currently being played to as much as 2 times as its original volume, which is done through a process known as “[hard clipping](http://en.wikipedia.org/wiki/Clipping_%28audio%29)”. This clipping produces more power output, because of which smaller speakers which are usually unable to handle huge loads, get overheated, leading to damage. Clipping is also a strict no for audiophiles, because a clipped audio cannot distinguish between normal notes and loud notes, causing both of them to be output at the same intensity.

A VLC developer, [argues ](https://news.ycombinator.com/item?id=7205875)that VLC player only uses windows official API to output the sound, and has no control over increasing the output power to the speaker. He even goes to the length of telling that the extra volume produced, is of the same effect as increasing volume in audacity(a free audio editor) and playing the audio through Windows Media player. He even accuses Dell of producing sound cards which provide more power to the speakers, and accuses them of producing cheap hardware.

If your laptop (or computer) company is one among the few which denies warranty for speaker damage by the use of VLC (and other) player(s), you should probably stick to Windows Media Player or use other media players (which do not support audio clipping), like [Cyberlink PowerDVD](http://www.cyberlink.com/products/powerdvd-ultra/features_en_US.html?&r=1) (paid), etc. Or if you would rather just take the word from the VLC developer (which I will), I will stick with VLC player itself.

However, if you are a die-hard VLC / KM player fan, you can use them without damaging your speakers. Just remember to not increase the volume to more than 100% while playing media. Also, don’t forget to uninstall these players before you hand over your laptop to a service center under warranty.
