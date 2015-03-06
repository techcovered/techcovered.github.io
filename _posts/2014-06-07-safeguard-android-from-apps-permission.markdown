---
author: Abhilash
comments: false
date: 2014-06-07 09:02:49+00:00
excerpt: There are a lot of risky apps out there which collect your data. Here is
  how you safeguard your android device from such apps and control your app permissions
layout: post
slug: safeguard-android-from-apps-permission
title: Safeguard your Android Phone from Apps with Risky Permissions
wordpress_id: 618
categories:
- Featured
- Mobile
tags:
- Android
---

Facebook's Android app has a new "feature", which automatically uses your phone's microphone to record audio discreetly and then upload it to Facebook's servers along with your status update. Many people are paranoid about this feature, and given the fear that many governments of the world are spying on their citizens, this feature does not sit well. However, Facebook's app is only one  such example. There are scores of other malicious apps which ask for more permission than is required.

At this stage, you would need a kind of permission manager, which would control how much permission to your phone's resources you'd grant for an app. Enter [XPrivacy](https://play.google.com/store/apps/details?id=biz.bokhorst.xprivacy.installer). XPrivacy is a one of a kind app, which restricts apps from accessing your data.

[![xprivacy](https://techcovered.github.io/images/xprivacy.png)](http://img.techcovered.org/tc/xprivacy.png)

To install XPrivacy, you would first need to have a rooted phone. Then, you would have to install the [Xposed framework](http://repo.xposed.info/module/de.robv.android.xposed.installer)*****. Then, install XPrivacy, and within the Xposed framework, enable XPrivacy and then hit reboot.

**[*]** Xposed framework or Xposed mod is a framework which allows you to make changes to your android phone, at the system level, without actually changing any apk files or modifying them. Here is a [video ](https://www.youtube.com/watch?v=uRR0Flqx9M8)explaining what it is and how you install it. Do note that it has the potential to break your phone's software. Use it with care.

Once you have XPrivacy installed, you can first _spoof_ your information. For instance, you can fake your location or change your phone number,etc. This is optional, though. If you do not spoof any details, XPrivay will randomly do it for you.

Next, you can individually pick apps for which you provide the fake details. However, you can also chose what details you can spoof. For example, for Facebook, you can check the microphone audio and XPrivacy will provide an empty audio file which Facebook will mistake for a microphone recording.

If you are worried whether XPrivacy could possibly break any app or its features, then you don't have to worry about it. XPrivacy does not absolutely restrict any permission which an app demands, but it only provides it fake details. Thus, it keeps your data safe and also the app working.

If your phone runs Android version > 4.3, then you could try another Xposed Module, [AppOps](http://forum.xda-developers.com/xposed/modules/xposed-appopsxposed-appops-4-3-t2564865), which can directly deny permissions to apps. This is a much safer option, though it is possible that some apps may break.
