---
author: Abhilash
comments: false
date: 2013-05-13 17:14:56+00:00
layout: post
slug: microsoft-security-essentials-no-good
title: Microsoft Security Essentials is no good. Install a good anti-virus instead.
wordpress_id: 168
categories:
- Blog
---

I’ve been using Microsoft Security Essentials on my XP and Windows 7 (and also my brief time in Windows 8 – where Security Essentials is built in). It served me well, even earning my recommendation to many friends and family members. MSE is as simple as an antivirus can get – no cluttered interface, simple UI, fast update and quick scanning. In fact, the UI is so simple I even began doubting the actual working of the product. But it just works. I liked it and so did my XP computer with less RAM, as did my Windows 7 laptop, as MSE wasn’t a battery drainer.

Enter a USB drive.

My sister, one day, came up with a USB drive which, confirmedly, had malware on it. It had been previously used in an infected computer, and now some of that malware spread to this, and now was waiting for me to insert the host drive in my computer – to infect it too. Forgive my dramatic narration here - but I knew, just knew, that my bare bones MSE was enough to keep my computer immune to the malware. I had never been this wrong before.

As soon as the USB was plugged in, I was expecting MSE to throw up a big red monitor alerting me of malware and thus quarantining/removing it for me. To my surprise, nothing happened. I began to question the credibility of the USB having any malware at all, and then opened the drive to check.

Surprise! Malware was indeed present in the USB and now, on my computer.

[caption id="attachment_170" align="aligncenter" width="600"]![virus-ineffective](https://techcovered.github.io/images/virus-ineffective.png) MSE detects no threat[/caption]

[caption id="attachment_169" align="aligncenter" width="600"]![bitdefender-does-it](https://techcovered.github.io/images/bitdefender-does-it.png) Bitdefender detects it immediately[/caption]



The malware  (which I later found out to be a generic Win32 Trojan) duplicated itself in every single file of every single drive in my computer. Had I not enabled the “Show extension of known File types” option in Windows Explorer, I’d have been easily fooled. The duplicated copies of the folder ended with a exe extension. How convenient. All this happened, while MSE was running in the background.

Then the inevitable happened, the folders on my desktop were also duplicated. I could now see a “Images.exe” file on my desktop, that somehow had very high privileges, thereby not allowing me to delete them. I scanned it, with MSE – showing no threat was detected. This was it. MSE is of no good. I decided to remove it and install something better.

And then the life saver – [Bitdefender](http://www.bitdefender.com/solutions/antivirus.html). [_Note that I’m not promoting anything for revenue here, just narrating my experience. Honestly, I googled “Best Antivirus 2013” and it led me to Bitdefender Antivirus Plus 2013. Kaspersky was also mentioned_]. After spending a considerable amount of time downloading the 300-odd MB offline installation file (For some reasons, the online installer didn’t work), I finally got the trail version to run. The first thing it did was to scan the memory  (thus removing any currently-running malware) and then do a quick scan, which quickly detected and quartined the “Images.exe” (_what a treacherous name_) from my desktop.

Now, as I write this post, it is running in the background, doing a full system scan, detecting a very large amount of malware, none of which was detected by – yours sincerely – Microsoft Security Essentials.

Finally, my point is laid out. Microsoft Security Essential sucks. It looks barebones and works that way too (_I guess sometimes you have to judge a book by its cover too_). Failing to detect a major malware infection was the limit for me. I am now happy with Bitdefender, also seriously contemplating buying a license (_I have my credit card next to me_).

For those of who that like things for free, I’d also recommend [Avast](http://www.avast.com), [AVG](free.avg.com) or even [MalwareByte’s AntiMalware](http://www.malwarebytes.org). Happy malware hunting!
