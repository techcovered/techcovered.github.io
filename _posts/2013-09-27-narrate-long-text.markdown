---
author: Abhilash
comments: false
date: 2013-09-27 20:05:25+00:00
excerpt: You can easily go through long articles both offline and online by listening
  to them or also saving them as mp3 audio files for later use.
layout: post
slug: narrate-long-text
title: How to Make your Computer Narrate Long Pages of Text
wordpress_id: 432
categories:
- Featured
- How to
tags:
- Firefox
- Google Chrome
- Web Browsers
- Website
redirect_from:
- /432/narrate-long-text/

---

Wouldn’t it be nice if you selected a long “wall” of text (that’s what the internet calls it) and click a button (or so), and the computer reads it to you? Of course it is. Here are a few ways to get through with reading some text. Optionally, you can also save the text as an mp3 and listen to it later, all of which is detailed below.

![talk](https://techcovered.github.io/images/talk.jpg)


## The Easy way – Browser Extensions


There are extensions for Firefox and Google Chrome for a text-to-speech service.

For **Firefox**, [Text-to-Voice](https://addons.mozilla.org/En-us/firefox/addon/text-to-voice/) does a fairly good job of translating the selected text and also offers you a link to download the file as an mp3. [FoxVox](https://addons.mozilla.org/en-US/firefox/addon/foxvox) is another addon for Firefox which does a similar job, but provides you with superior translation, but without the option to pause the audio or provide download link.

**Chrome** has the best tools for speaking out text. [Chrome Speak](https://chrome.google.com/webstore/detail/chrome-speak/diagnfimeecdcecjpnkjgbnlelkclcpj) is an awesome extension (or app). Once installed, an icon appears in your app screen where you can personalize all your settings. Once done, right click on a selected text and Select Chrome Speak>Read the selected text. iSpeech is another extension (no, it is not from Apple. They don’t make chrome extensions.) which speaks out selected text when you click the browser extension button.

For **safari**, an extension is not required. You can use your Mac OS’s Voiceover (Command + F5), or highlight a text and select start speaking.

For all other browsers (if you are one of those who still do not want to change), use this [bookmarklet](http://vozme.com/bookmarklet.php?lang=en).


## Doing it Offline


If you want something to be read offline, like something from a Word document, or a pdf file (which has selectable text), then there is a much simpler way.

If you are on a **Mac**, you can press Command + F5 and use Voice over to read stuff for you.

For **Windows**, you can do something similar too, but in a not-so-easy way. First, open notepad and type the following code, and save it as a “.vbs” file.

    
    Dim msg, sapi
    msg=InputBox("Enter your text","Talk-it by TechCovered.org")
    Set sapi=CreateObject("sapi.spvoice")
    sapi.Speak msg


Once done, open the file and paste the text you want to be read and click Ok. If you want this text to be stopped, the only way is to open this file again and click Ok, leaving the text field blank.


## Having it perfectly pronounced


![google-translate-dictation](https://techcovered.github.io/images/google-translate-dictation.png)A lot of these text-to-speech engines aren’t really that accurate. So if you want to listen to the text with precise pronunciation, then [Google Translate](http://translate.google.com) is a good option. Paste the desired text in Google translate and click on the Speaker icon in the lower left side of the right side. Voila! Perfectly pronounced text!


## Saving it as an mp3 file


If you have come across some huge piece of text that you really want to listen to, then an option is to save it as an mp3 file, which you could then download to your mobile phone, tablet or your portable device and listen to it on the go.

“[Listen](http://ctrlq.org/listen)” is a service which speaks the given text and also gives you a link to save the audio as an mp3 file. (When I last checked, it could not handle huge audio files). [Vozme](http://vozme.com/) is another text to speech service, which offers you link to download the audio of the pasted text, no matter how large the text file size is. However, the audio isn’t exactly up to the mark, but still understandable nevertheless.
