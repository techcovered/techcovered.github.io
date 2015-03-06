---
author: Abhilash
comments: false
date: 2014-10-09 14:55:59+00:00
excerpt: How to create a heat map from your previous visited locations using your
  location history from Google
layout: post
slug: heatmap-google-location-data
title: Create a Heatmap from your Google Location Data
wordpress_id: 684
categories:
- How to
- Internet
tags:
- Google
- Maps
---

Google maps and Google Search tends to store your location information and links it with your account - to offer better and localized search results. You can view all the location data that Google has stored from your, in [Google Takeouts](https://www.google.com/settings/takeout). Your location data is stored in a json file, and where there is data, there are many web services which offer you their super helpful service.

One such service, [TheoPolis' Location History Visualizer](http://theopolis.me/location-history-visualizer/), allows you to view a heat map of all the locations you have been to.

![Google Location History Heatmap ](https://techcovered.github.io/images/google-location-heatmap.png)

All you have to do is to go to Google Takeout, uncheck all options except the Location History option and click on Next > Create Archive. You need to enter your password to verify your identity and then wait for it to finish and press Download. In the archive, search for a file named "LocationHistory.json" and extract it. In the website, click on browse and navigate to the json file you just extracted.

After the website takes a little time to process your data, you get a heat map of all the places you have been to (which Google knows, anyways). The places more frequented to are marked in increasing order of warm colors and less frequented areas are marked with colder blue colors.


### Is my Google Data Safe?


Yes. It is.

If you are worried whether uploading data to a third party website is a good idea, then fret not, because the data you upload only consists of latitude and longitude details, their time stamps, how sure Google is of the location, and whether you are on vehicle or on foot. No details which denote your account information, such as your real name, your email address, or any personal information, is stored in the file.

There were many web services which offered the same details, but most of them stopped working when Google Latitude retired.
