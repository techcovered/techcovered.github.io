---
author: Abhilash
comments: false
date: 2014-06-08 17:09:33+00:00
excerpt: 'You can easily create your own Twitter bot that will automatically retweet
  whatever you want in twitter, including topics, selected accounts, lists, favorites
  and more! '
layout: post
slug: how-to-create-your-own-twitter-auto-retweet-bot
title: How to Create Your Own Twitter Auto Retweet Bot
wordpress_id: 358
categories:
- Featured
- How to
- Internet
- Tips
tags:
- Code
- Google
- JavaScript
- Twitter
- Website
redirect_from:
- /358/how-to-create-your-own-twitter-auto-retweet-bot/

---

In this elaborate tutorial, you will be able to create a twitter auto retweet bot, which will automatically search the whole of twitter for any topic of your interest and will automatically tweet them for you. Also, you can also make this bot retweet your favorite accounts, lists, your favorites, etc. 

![sample-retweet](https://techcovered.github.io/images/sample-retweet.png) 

To see this bot in action, if you tweet something with the word “techcovered”, <del>it will automatically be retweeted by this blog’s twitter account </del>(I have disabled this, at the moment, because of too much spam). You can also create a similar one, following the instructions given below:


## What we will be using:

	
  1. A Twitter account for your bot (or even your own twitter account if you wish to retweet yourself)

	
  2. [Google Scripts ](http://script.google.com/)(You don’t have to code anything, though)

	
  3. [IFTTT ](http://www.ifttt.com)(For retweeting)


## How will we be doing it?


Twitter has disabled RSS feeds for profiles, so the major step to do this is obtaining tweets in RSS form. [A script ](http://ctrlq.org/code/19491-embed-twitter-rss)from Amit Agarwal, a well known blogger, solves this issue. With a little modification to the script, we create a non-repeating version (i.e, same tweet will not be retweeted multiple times). With the help of IFTTT, we tweet these feeds. Hence, the auto-retweet bot. ![twitter-activity-retweet](https://techcovered.github.io/images/twitter-activity-retweet.png)


## Let's start, then..


First, you need to create a twitter widget. Log in to your twitter account and click on Settings and select [Widgets](http://www.twitter.com/settings/widgets). Click on Create. Now, you should create a widget with what content you would like to retweet. If you would like to retweet whatever a particular user has tweeted, then click on “User Timeline” and enter that user’s name.  Or if you would like to retweet tweets of a particular group of people, create a list and make a widget of it. If you would like to know about a particular topic on twitter, click on the “Search” tab and enter your search query. Click on “Create Widget” after you finish. In the URL bar, copy the ID of your widget, which will look something like “363815745370191000”.


## Converting your Widget to RSS Feed.


[This script ](http://ctrlq.org/code/19491-embed-twitter-rss)from [Amit Agarwal ](http://www.labnol.org/about/)converts your twitter feed to RSS. However, with minor modifications, the below script can be used for this purpose. To execute this script, go to Google Scripts and open a blank project. Copy and paste the following code. Then, click on Run> getTweets. When asked to Authorize, click on the authorize button. (This is a one time procedure only).

    
    function Twitter_RSS() {
      return; 
    }
     
    function doGet(e) {
       
      var widgetID = e.queryString? e.queryString : "ERROR_NO_ID_FOUND";
      var cache = CacheService.getPublicCache();
      var id = "Twitter" + widgetID;
      var rss = cache.get(id);
       
      if ( ! rss ) {
        rss = getTweets(widgetID);
        cache.put(id, rss, 120); // Expire in 2 minutes
      }
       
      return ContentService.createTextOutput(rss)
      .setMimeType(ContentService.MimeType.XML);
    }
     
     
    function getTweets(id) {
         
      try {
                 
        var widget, json, tweets, regex, tweet, list, time, url, when, rss, heading, title, link, alltweets, permalink, permatitle; 
         
        title = "Twitter RSS Feed : " + id;
        link  = "http://www.techcovered.org/#" + id;              
        url   = "http://cdn.syndication.twimg.com/widgets/timelines/" + id;
         
        widget  = UrlFetchApp.fetch(url);
        json    = Utilities.jsonParse(widget);   
         
        if ( ! json.body ) {
          return;
        }
         
        list = json.body.replace(/(\r\n|\n|\r)/gm," ")
                        .replace(/\s+/g, " ")
                        .replace(/<div class=\"(h-card|footer|detail-expander|retweet-credit)[^>]*>(.*?)<\/div>/gi, "")
                        .replace(/<time[^>]*>(.*?)<\/time>/gi, "");
         
        regex = new RegExp(/<h1[^>]*>(.*?)<\/h1>/ig);
         
        if ((heading = regex.exec(list)) !== null) {
           
          regex = RegExp(/href="(.*?)"/ig);
          if ((permalink = regex.exec(heading[1])) !== null) {
            link = permalink[1];
          }
           
          regex = RegExp(/title="(.*?)"/ig);
          if ((permatitle = regex.exec(heading[1])) !== null) {
            title = permatitle[1];
          }
        }
         
        var self = ScriptApp.getService().getUrl() + "?" + id;
         
        rss  = '<?xml version="1.0"?><rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">';
        rss += ' <channel><title>' + title + '</title>';
        rss += ' <link>' + link + '</link>';
        rss += ' <atom:link href="' + self + '" rel="self" type="application/rss+xml" />';
        rss += ' <description>' + title + ' :: RSS Generator available at http://www.labnol.org/?p=28149</description>';
         
        regex = RegExp(/<ol[^>]*>(.*?)<\/ol>/ig);
         
        if ((alltweets = regex.exec(list)) !== null) {
           
          alltweets = alltweets[1].replace(/\s+/g, " ");
           
          var re = /<a class=".*?permalink.*?" href="(.*?)" data-datetime="(.*?)"[^>]*>(.*?)<\/a>(.*?)<p[^>]*>(.*?)<\/p>/gm;
           
          while (tweet = re.exec(alltweets)) {
             
            url   = tweet[1];
            when  = Utilities.formatDate(parseDate(tweet[2]), "UTC", "EEE, d MMM yyyy HH:mm:ss");
     
            tweet = tweet[5].replace(/<\s*(div|span|b|p)[^>]*>/gi, "")
                            .replace(/<\s*\/\s*(div|span|b|p)[^>]*>/gi, "")
                            .replace(/class=".*?"|rel=".*?"|title=".*?"|target=".*?"|data-expanded-url=".*?"|data-query-source=".*?"|dir=".*?"|data-scribe=".*?"/gi, "")
                            .replace(/\s+/g, " ");
            if(tweet.substring(0,2)!="RT") {
            rss += "<item>";
            rss += " <title>"+ tweet.replace(/<a[^>]*>(.*?)<\/a>/gi, "") + "</title>";
            rss += " <pubDate>" + when + " +0000</pubDate>";
            rss += " <guid>" + url + "</guid>";
            rss += " <link>" + url + "</link>";
            rss += " <description><![CDATA[ @"+url.split("/")[3] + ": " + tweet + "]]></description>";
            rss += "</item>";            
            } 
            
          }
                 
          rss += "</channel></rss>";
          return rss;
        }
         
      } catch (e) {
        Logger.log(e.toString());
      }
    }
     
    function parseDate(d) {
     
      var date = /(\d{4})-(\d{2})-(\d{2})T(\d{2}):(\d{2}):(\d{2})/;
      var m = date.exec(d);
      var year   = +m[1];
      var month  = +m[2];
      var day    = +m[3];
      var hour   = +m[4];
      var minute = +m[5];
      var second = +m[6];
       
      return new Date(year, month - 1, day, hour, minute, second);
    }
    



After that, go to Publish> Deploy as a web app. Enter a version number and in the “Who has access to the app” select “**Anyone, Even Anonymous**”. Click Create. Copy the link in the box. To test your feed, paste this URL in the address bar and in the end, add “?” followed by your twitter widget ID. It will look something like this: _https://script.google.com/macros/s/AKfycbufejQanpLBnFIelEaq5e774Ya7GIFFd33OE-srjTF8n7Pi3sc/exec?363815745370191000_ In the URL, you will be able to see the twitter feed you asked for. Do note that it is displayed as just code in Chrome, but is displayed as RSS in Firefox and Internet Explorer.


## The Final Step


After you have the RSS link, its now time to go [IFTTT](http://ifttt.com), the awesome website that you can use to make trigger-action based events and more. Create an account and select the “Create” link on the top. Select “this” and click on the RSS feed icon. In the next step, click on “New Feed Item” and type in the URL you copied. Then, select “that” Next, select Twitter in the next list and click on “Activate” button to link your twitter profile in which you would like to post your retweets. In the next step, click on “Post a tweet”. In the “What’s happening box"?”, type the following: _RT {{EntryContent}}_ Click on “Create Action”.


## And, you’re done…


After this, whenever your twitter widget gets updated automatically according to your preferences, your feeds will also be updated and hence, your linked twitter account will automatically retweet the tweet. You now have your own auto retweet bot for twitter. If you have any problems, or would like suggest any modifications, do comment!

**UPDATE 1 **: IFTTT doesn't allow '@' now, so there is a slight modification in the script. Delete the previous copy in your Google Drive account and use the new one. Thanks!

**UPDATE 2**: If you have problems using IFTTT, you can also use other feed-to-twitter services like [TwitterFeed](http://twitterfeed.com/), etc. But remember to change the **line 71** and add a RT right next to '@'. [Here is how it will look like](http://img.techcovered.org/rss-twitter-autobot.png).

**UPDATE 3 **: I have modified the script according to the many requests I got. It is fully working now. (Thanks a lot, Amit). Delete the previous copy in your Google Drive account and use the new one. Thanks!

**UPDATE 4:** Fixed a minor bug. It should work well with IFTTT now.

**UPDATE 5:** Fixed the bug which causes it to loop itself. It works properly now. Really guys, I double-checked.
