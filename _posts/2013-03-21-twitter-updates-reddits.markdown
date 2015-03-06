---
author: Abhilash
comments: false
date: 2013-03-21 10:32:04+00:00
excerpt: You can keep yourself updated by configuring a dummy twitter profile to tweet
  about the updates from reddits. All newer updates of Reddit will then be tweeted
  by this account, which you can follow from your twitter account.
layout: post
slug: twitter-updates-reddits
title: How to get twitter updates of custom reddits
wordpress_id: 124
categories:
- How to
- Internet
tags:
- Reddit
- RSS
---

If you are a redditor and you often go to Reddit's homepage to update yourself, then you can make things more convenient by creating a twitter profile that will tweet all the updates from the custom reddits you chose.

![twitterbot](http://img.techcovered.org/tc/twitterbot.png)

The first step is to select the Reddit feeds that you would like to follow on twitter. It can be the front page of Reddit, or it can be a subreddit (like /r/technology for example). It can also be a collection of sub reddits  For example, if you want your twitter update to be about technology, adviceanimals, lifeprotips, todayilearned, etc.

To do this, you can use the following format to combine all of them:

    
    http://www.reddit.com/r/technology+adviceanimals+lifeprotips+todayilearned


To update your twitter account from these reddits, you need the RSS feed URL of them. To get the RSS feed, just [append a .rss at the end of the URL](http://techcovered.blogspot.com/2013/02/how-to-get-rss-feed-of-sub-reddit.html).

    
    http://www.reddit.com/r/technology+adviceanimals+lifeprotips+todayilearned.rss


To publish the feeds to URL, you need a service which publishes RSS feeds to tweets, like [Twitterfeed ](http://www.twitterfeed.com)for example. You also need to create a dummy twitter account which you will use to publish the tweets. After setting up your twitter account, signup at twitterfeed and create a new feed. Then, in the feed URL, enter the URL of your custom reddits.

That's it! You are done! Twitter feed checks the feeds for new content every half an hour, so your dummy twitter account will always be updated with the latest news from these reddits. The account wont be populated right away, though.

The final part is to follow this twitter account from your original twitter account. For detailed presentation, watch this video:


Update: You can also use [IFTTT ](http://techcovered.blogspot.com/2012/12/how-to-automate-tasks-on-internet.html)to perform the same function.
