---
author: Abhilash
comments: false
date: 2014-01-22 17:16:12+00:00
excerpt: If you aren't sure whether a file is the same one which you downloaded from
  the internet, use MD5 and SHA1 hashes to check the files integrity and authenticate
  the file.
layout: post
slug: verify-file-md5-sha1-hash
title: Verify and Authenticate a File by Checking its MD5 and SHA1 hash
wordpress_id: 497
categories:
- Downloads
- Featured
- Tips
tags:
- Downloads
- Website
---

I recently downloaded a few .iso files of a few Linux distributions. They were all around 4 GB each, and downloaded without a problem. However, I still wasn’t sure whether these iso files were completely downloaded and since I didn’t want to risk a failed OS installation, I had to do something to make sure that these files were intact. If you are in a similar position, then you are in luck, because there is something you can do, instead of re-downloading the whole file again.

![md5-checksum](images/md5-checksum.png)

MD5 and SHA1 are cryptographic algorithms, which are used to check the integrity of data and most commonly – large files which are downloaded off the internet. The idea employed here is to find out the MD5 (or SHA1) hash of a downloaded file and then verify this hash with the hash of the original file (which you downloaded).

There are a lot of tools which allow you to find the MD5 and SHA1 hash. My personal favorite is the [MD5 & SHA Checksum Utility](http://download.cnet.com/MD5-SHA-Checksum-Utility/3000-2092_4-10911445.html). This tool lets you easily find the hash of a file and then matches it with the hash of the original file (_Note: You should already know the MD5 hash_). Another tool is [HashMyFiles](http://www.nirsoft.net/utils/hash_my_files.html), which is small, portable and capable of finding hash for a large batch of files. [ComputeHash](http://www.softpedia.com/progDownload/ComputeHash-Download-204207.html) is yet another hash finding utility, and is lightweight and portable.

However, there is something you need to know. You can verify the integrity of a file, only if you know its hash beforehand. Usually, whenever a large file is being put up for download, the website admins make sure to post the hash of the file, so that the downloaders can verify the file integrity after it is downloaded. This holds good for most Linux distributions (like [Ubuntu’s Download Page](http://www.softpedia.com/progDownload/ComputeHash-Download-204207.html)).

If, for some reason, you can’t find the MD5/SHA1 hash of the downloaded file online, then there is no other way to check the file’s integrity and all you can do is hope that the file you downloaded is intact.
