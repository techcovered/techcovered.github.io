---
author: Abhilash
comments: false
date: 2013-06-28 17:22:28+00:00
excerpt: If your torrent data is accidentally deleted, then here is a simple method
  to restore them back
layout: post
slug: recover-deleted-torrent-downloads
title: How to Recover Deleted Torrent Downloads
wordpress_id: 241
categories:
- Tips
tags:
- Torrent
---

If you download files through torrent (legally or not), then you would have come across situations where you’d have mistakenly deleted some of your torrents and wanted it back. Most of you would have also restarted their download from fresh, giving up hope to resume the deleted download. This is especially painful if you are downloading a very large amount of data.

The solution is surprisingly simple. However, the exact solution will vary from one torrent client to another, but will undoubtedly work for most clients. I will be using the popular μTorrent to demonstrate.

![utorrent-remove-torrent](http://img.techcovered.org/tc/utorrent-remove-torrent.png)


## Case 1: Restoring the download


If you deleted (or removed) the torrent, your client wouldn’t have deleted the actual data files (by default) that you were downloading. It would have just removed the .torrent file of that particular download.

[ _The .torrent file is the file that controls your torrent download. Once you open the .torrent file with your torrent client, it will use the file to download the actual files that you require. It is generally recommended you don’t use “Magnet” links for downloading torrents, because there is no .torrent file involved. _]

To restore, place the files the torrent was downloading, in their default directory (if you changed the location of the files that were being downloaded, restore them back to the original location). Then, download the _exact_ .torrent file from which you started the torrent download. Open the .torrent file in your torrent client. If everything is right, your torrent client will check if the downloaded data exists on your computer, and will then resume the deleted download.


## Case 2: Restoring the download, if the data is deleted


In case (for some reason) that you also deleted the files the torrent was downloading, then your only chance to resume the download, is to restore the deleted files.

First, check your recycle bin. If you find the downloaded files, you’re in luck. Just restore the files back to their original position, and follow case 1.

Since most downloaded files are too large, Windows would probably tell you that the file won’t fit in the recycle bin and you would have to delete it permanently. In that case, you would have to recover the permanently delete file. (_Yes, this is possible in Windows, in case you didn’t know_). There are [many applications](https://www.google.com/search?q=recover+deleted+files) which let you do this. My personal favorite, [UnDeletePlus](http://undeleteplus.com/), does the job fast and easy.

If you are able to recover the file (_mind you, the chances are not that favorable, depending mostly on when you deleted the files_), follow case 1.

Hope you get back what you lost!
