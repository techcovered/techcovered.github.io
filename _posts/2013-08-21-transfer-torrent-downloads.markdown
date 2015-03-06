---
author: Abhilash
comments: false
date: 2013-08-21 07:55:38+00:00
excerpt: If you want to switch your torrent downloads from one computer to another,
  here is a simple method that works on all clients.
layout: post
slug: transfer-torrent-downloads
title: How to Transfer Torrent Downloads from One Computer to Another
wordpress_id: 378
categories:
- How to
- Software
- Tips
tags:
- Torrent
- utorrent
---

Imagine you are downloading a big torrent, and halfway, due to some reason, you want the torrent to stop its download in your computer and resume in another computer. There is a simple way to do this, without losing any of the data you spent long hours downloading.

This method works in all types of bit torrent clients. In my example, I will be using the famous uTorrent to demonstrate.


## Steps to follow in Computer #1:


The first step you need to do, is locate the directory in which your current torrent is being downloaded. This can be found out by right clicking the torrent and selecting “Open containing folder”. Once you have located the files that you are currently downloading, stop the torrent in progress if you haven’t already done that, and copy the files over to the another computer.

The next step is to locate the torrent file that you used to start the download. It is a “.torrent” file. By default, most torrent clients store these files in your appdata folder. So, click on start and type “%appdata%” and open your torrent client folder (in this case, it is “uTorrent”). There, you find a list of all the torrent files that you downloaded. Copy the relevant torrent file to the other computer.


## Steps to follow in Computer #2:


You need to use the same torrent client in the other computer too. First, you need to move the downloaded files into the default directory (C:\Users\_user_\Downloads) or to a directory of your choice .

Then, open the .torrent file. When it asks for a location to download the files, navigate to the place where the previously stopped downloads are. Your torrent client will then check and verify the files and if they are intact, it will resume the download instead of starting the download from first.

**Related**: [Recover Deleted Torrent Files](http://www.techcovered.org/241/recover-deleted-torrent-downloads)
