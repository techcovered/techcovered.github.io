---
author: Abhilash
comments: false
date: 2013-03-13 19:48:58+00:00
excerpt: If you strain your eyes by using your computer at night, here are some tips
  for using your computer without hurting your eyes, even during web browsing
layout: post
slug: using-computer-without-hurting-eyes
title: How to use the computer at night without eye strain
wordpress_id: 63
categories:
- How to
- Tips
tags:
- bookmarklet
- Firefox
- Google Chrome
- Windows
---

A computer monitor is a bright screen and even if the brightness is set to the very minimum, you can still strain your eyes, if you use your computer for long hours in the night. So how exactly do you prevent your eyes from strain and avoid ending up wearing spectacles or contact lenses?

For starters, whenever you use the computer, it is advised to be seated in a proper place, which is brightly lit. This prevents strain to your eyes, when compared to sitting in a dark room.


## ![computer-nightmode](images/computer-nightmode.png)




## For Windows


If a bright room during night time is not an option for you, then you can enable the Night mode on your Windows PC. To enable night mode, use the keyboard shortcut **Left Alt + Left Shift + Print Screen**. By doing so, Windows will automatically switch to a "High Contrast" theme, which is less harmful on the eye, but is not exactly that good looking either.

To go back to your actual previous theme, just use the same keyboard shortcut and you are back where you started from. You can also customize this option from the "Ease of Access" Control center in Windows. (Click the Windows button and type "Ease of Access" in the search bar or access it directly from the control panel).


## For Web Browsing


**a) Google Chrome **- Google Chrome surprises us once again. When you open Google Chrome while Windows Night mode is on, it automatically suggests you to install its Official ["High Contrast" extension](https://chrome.google.com/webstore/detail/high-contrast/djcfdncoelnlbldjfhinnjlhdjlikmph/) from the Google web store. After installing it, you get the extension icon next to the URL bar which you can toggle to enable or disable night mode (with various options too!**)**

**b) Firefox** - Firefox starts to get more awesome than chrome, in this regard. When you enable High Contrast in Windows, Firefox automatically turns to High Contrast theme and all the web pages it loads also starts to follow the same scheme. No add-on/extension required.

**c)** **For everything else** - If you use any other browser which doesn't support High Contrast, then your best bet is to use this bookmarklet. Drag this bookmarklet to your bookmarks bar and click on it whenever you want to enable night mode, though it has to be done manually on each page.

[Toggle Night Mode](javascript:(function(){function RGBtoHSL(RGBColor){with(Math){var R,G,B;var cMax,cMin;var sum,diff;var Rdelta,Gdelta,Bdelta;var H,L,S;R=RGBColor[0];G=RGBColor[1];B=RGBColor[2];cMax=max(max(R,G),B);cMin=min(min(R,G),B);sum=cMax+cMin;diff=cMax-cMin;L=sum/2;if(cMax==cMin){S=0;H=0;}else{if(L<=(1/2))S=diff/sum;else S=diff/(2-sum);Rdelta=R/6/diff;Gdelta=G/6/diff;Bdelta=B/6/diff;if(R==cMax)H=Gdelta-Bdelta;else if(G==cMax)H=(1/3)+Bdelta-Rdelta;else H=(2/3)+Rdelta-Gdelta;if(H<0)H+=1;if(H>1)H-=1;}return[H,S,L];}}function getRGBColor(node,prop){var rgb=getComputedStyle(node,null).getPropertyValue(prop);var r,g,b;if(/rgb\((\d+),\s(\d+),\s(\d+)\)/.exec(rgb)){r=parseInt(RegExp.$1,10);g=parseInt(RegExp.$2,10);b=parseInt(RegExp.$3,10);return[r/255,g/255,b/255];}return rgb;}function hslToCSS(hsl){return "hsl("+Math.round(hsl[0]*360)+", "+Math.round(hsl[1]*100)+"%, "+Math.round(hsl[2]*100)+"%)";}var props=["color","background-color","border-left-color","border-right-color","border-top-color","border-bottom-color"];var props2=["color","backgroundColor","borderLeftColor","borderRightColor","borderTopColor","borderBottomColor"];if(typeof getRGBColor(document.documentElement,"background-color")=="string")document.documentElement.style.backgroundColor="white";revl(document.documentElement);function revl(n){var i,x,color,hsl;if(n.nodeType==Node.ELEMENT_NODE){for(i=0;x=n.childNodes[i];++i)revl(x);for(i=0;x=props[i];++i){color=getRGBColor(n,x);if(typeof(color)!="string"){hsl=RGBtoHSL(color);hsl[2]=1-hsl[2];n.style[props2[i]]=hslToCSS(hsl);}}}}})())

Update: The High Contrast of Windows is tested on Windows 7 and Windows 8. If any of you use Windows XP or Vista, do let us know! Thanks!
