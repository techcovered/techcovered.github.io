---
author: Abhilash
comments: false
date: 2013-05-26 15:59:59+00:00
excerpt: If you are short of space, then you can save lot of hdd space by deleting
  system restores. Here is how to do that without putting your system at risk.
layout: post
slug: free-disk-system-restore
title: Free up disk space by deleting older System Restore Points
wordpress_id: 211
categories:
- Blog
tags:
- Windows
---

If you have an older computer with less storage space, then deleting the older system restore will probably help you save some valuable hard disk space. System restore points (on a single drive) can occupy, by default, as much as 5% of the drives total storage space.

You have many options when it comes to system restore. You can either allot only a few percentage (say 2%) to the system restore for each drive, or you can delete all your existing system restore points in order to save hard disk space.


## Allot less space to System Restore


If you do not want to delete all your current system points for a rainy day, then a wise choice is to reduce the amount of space it uses. To do so, right click on the _Computer_ icon in the desktop and select _Properties_. In the left side, click on the _System Protection. _Click on your drives in which protection is enabled (by default, it is the C drive) and select _Configure. _

![system-restore](http://img.techcovered.org/tc/system-restore.png)

In the dialog box, move the slider from the default value to somewhere around 2%. That is, only 2% of your space on that drive would be allotted for System Restore.


## Disable System Restore on other drives


Your computer doesn’t really need system restore on all the drives, so you can safely disable them on the other drives. In the same dialog (Right click _Computer_, select _Properties_, Select _System Protection_), select the drives other than the C drive and click on _Configure. _Select the _Turn off protection_ for the drives.


## Delete selected System Restore points


You have two options here. You can delete all your system restore points (not recommended) or just delete a few selected ones.

To delete all the restore points, right click on _Computer_, select _Properties_. In the left side, click on _System Protection_ and in the dialog box, select the drive with system restore turned on, and click on _configure_. Finally, click on the _Delete_ button to delete all the restore points.

Another option (which is recommended) is to install the uber-useful tool called [CCleaner](http://www.piriform.com/ccleaner) (heard of it?). This utility software is used to remove all useless and temporary files from your computer, but also comes with a registry cleaner, uninstaller, driver wiper, start-up manager and the now relevant System Restore Manager.

[![ccleaner-system-restore](http://img.techcovered.org/tc/ccleaner-system-restore_thumb.png)](http://img.techcovered.org/tc/ccleaner-system-restore.png)

Click on _Tools>System Restore._ You will then find a list of all the current System Restore points residing in your system. Click on the ones you don’t want (I’d recommend everything; The first one is disabled by default for security reasons) and click on remove. That’s it! You are now left with only your latest system restore point.

Additionally, you can also use CCleaner to wipe off temporary files off your computers to fetch you more disk space. In my personal experience, having this program run every 2 months in my computer clears as much as 6 gigabytes of hard disk space (with all the install and uninstalling I do).

Did this help you? Do comment.
