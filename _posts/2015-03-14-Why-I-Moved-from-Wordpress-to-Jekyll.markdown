---
layout:post
title: Why I Moved to Jekyll from Wordpress
excerpt:I recently moved from a self hosted wordpress blog to a Github hosted Jekyll blog. Here are the list of reasons why.
---
This is yet another blogging platform level change I’ve made in the past two years. I had been with Blogger for 2 years before, followed by Wordpress for another 2 years. But hopefully, I'll try my best to stick with Jekyll for a while*.

[*I'll update this post two year later and let you know.]

![Moved from Blogger to Wordpress to Jekyll ](http://www.techcovered.org/images/blogger-wordpress-jekyll.png)

##No, Wordpress, it's not you. Its me.

Wordpress is a wonderful open-source CMS, which I have loved and used for more than 5 to 6 years. I am definitely not going to rant about it when something different and more suited comes along.

Jekyll is not for everyone. Jekyll is also not a Wordpress competitor. That would be Buddypress, Joomla and the many other Wordpress alternatives, of which Jekyll is not a member of.

Jekyll is a static-page-generator. It takes in your content in markdown or html and generates a static HTML page, which shown to your visitors. This makes your blog much faster than Wordpress, which generates a HTML file every time you hit reload.

To make it clear, let me list out the advantages and disadvantages:

###Wordpress - Disadvantages

1. Wordpress comes with bloat. In the many years of blogging, I have never once used all the features of Wordpress. Wordpress is just too large for a simple blogger with simple needs. With thousands of plugins and a raging theme market, it isn’t winning awards for being lightweight or blazing fast.

2. Wordpress is slow. Wordpress uses PHP and every page you visit is generated whenever you hit reload. If you use a less-than-ideal hosting package like Shared Hosting, Wordpress is even more slow and takes its own sweet time. Also, the more plugins you add, the slower your site gets.

3. Wordpress is less secure. Even though Wordpress has a very good dev team, Wordpress is insanely popular on the internet. It only takes a few bad steps from the admin to let the bad people in, who can wipe away your data and erase your blog or also spread malware. 

I once believed Wordpress was nearly impenetrable and then [Amit's blog](http://www.labnol.org/home/update/21466/) got hacked (bad timing, too). 

4. Hosting is expensive. Wordpress hosting costs anywhere from 4permonthto100 per month, depending on your usage. Meanwhile, Jekyll on Github is completely free.

Before you jump ship, Jekyll isn't exactly a *simple* alternate. Here are some reasons why.

###Jekyll - Disadvantages 

1. Jekyll is hard to setup. If you like drag and drop over lines of code, then Jekyll is not for you. I had a hard time setting up Jekyll to run on my Windows and Linux.

2. To post on Jekyll, you need to know Markdown. Though Markdown is easy to learn, it is still another syntax you need to be familiar with, just to post on a daily basis.

3. There are only a few plugins for Jekyll and there are as few themes too. If you are able to develop your own theme (and also learn Liquid - Jekyll’s choice of formatting language), then you are all set. If you suck at web development, there are many Jekyll website themes you can clone from the many online Github blogs.

4. There are not easy posting methods for Jekyll. You need to add a markdown file in the _posts folder of your repository to create a new post. Also, since there are only a few Markdown editors with syntax highlighting, creating a post in Markdown isn’t exactly the same as typing in Wordpress or a document in MS Word.

Github supports only a few Jekyll plugins and also makes your blog open source. If you don’t mind this, then feel *free* (pun) to use Github Pages with Jekyll

Comparing Jekyll to Wordpress is like comparing apples to oranges, there is no clear winner. Everything really depends on your taste, and Jekyll suited me better.


##Steps to Migrate Wordpress to Jekyll

There are no shortage of online guides and tutorials which list out many ways to install Jekyll on your computer. I’ll tell you what worked for me:

Installing Jekyll on Windows is possible, though a lot more difficult than installing it on Linux. So, I suggest installing Jekyll on a Linux installation and then using Windows to post. If you rather stick with windows and don’t want to mess with your partition tables, use VMWare or any other virtual machine to install Linux. 

###Installing

 For the most part, Jekyll's [official installation guide ](http://jekyllrb.com/docs/installation/) is good enough to help you install it on your own.

But I did face a few problems with setting up the dependencies, namely - installing the developer and the normal version of Ruby and the gem installer (which I later found out was an issue related to my Linux installation).

Another great piece of tutorial was [Andrew Munsell's Jekyll by Example](https://www.andrewmunsell.com/tutorials/jekyll-by-example). Though a few parts of the tutorial is for paid users, the free guide is more than enough to have your Jekyll running.

If you plan to use Github (which I recommend), then you also need to first install git on your computer.

For Ubuntu and Debian:
>sudo apt-get install git

For Fedora and Red Hat:
>sudo yum install git

If you run into any problems, just add a comment below and I will reply if I find a solution. Depends on my Googling skill, really.

###Setting up a Github Pages Repository

Github can be really confusing for beginners (like me) and I had to create a lot of repositories before I could get it right. [This interactive guide](http://www.thinkful.com/learn/a-guide-to-using-github-pages/) is something I could have never done without. If you plan to clone someone else's repository, then use this guide to know what to do next.

To start a Github Page, create a repository named `yourgithubusername.github.io`. Check the "Initialize this repository with a README" sign and click Create repository. Your Github pages account is now created. 

Head on to yourgithubusername.github.io to see your site in action. Clone this repository to your computer and then add the folders (link given above) to start building.

###Designing 

Designing a site for Jekyll is actually simpler than designing a wordpress theme. 

If a Jekyll site is hosted on Github, you can easily take a look at the theme. For instance, the theme of this blog can be viewed [here](http://www.github.com/techcovered/techcovered.github.io). I haven't customized my theme to be used on other blogs, but there are several (:sigh:) better themes available which you can easily clone in github and base your blog on.

###Migrating from Wordpress

This is the exciting part. If you already have a blog in Wordpress, with its own custom permalink structure et al, it is still possible to move your site to Jekyll without losing any of that Google juice. Yum.

**Exporting posts**: To export posts, you need a Wordpress plugin. [Download this zip](https://github.com/benbalter/wordpress-to-jekyll-exporter/archive/master.zip) and upload it to your `wp-content/plugins/` folder of your wordpress installation. [Here is an awesome tutorial on this](http://www.girliemac.com/blog/2013/12/27/wordpress-to-jekyll/)

For some reason, my *crappy* wordpress installation couldn't export the posts, so I had to try something else out. I downloaded the XML from the Tools > Export option in Wordpress Dashboard and then used a converter to convert all the posts to the respective markdown folders and pages. 

**Managing Redirects**: Jekyll lets you have your own URL structure for blog posts. So, you need to redirect all of your previous wordpress posts to your current ones without losing any SEO ranking. Since I used Github pages, which has no .htaccess file to edit, I had to do with meta 301 redirects and canonical URLs. 

It turns out, there is a plugin (which Github Pages also supports) which handles all redirects for you. To enable it, just add the following line in your `_config.yml` file.

>gem: <br>
> \-jekyll-redirect-from

Now, in the YAML part of every post, you need to add from what URL the redirect comes from. For example, if your previous wordpress site had a post like `example.com/category/post_title/post_ID` , then your post should have the following code:

>redirect_from: <br>
>  \- /category/post\_title/post\_ID/

Don't forget to add the slash at the start and end of the link. This makes Jekyll add folder and files to the website which redirect from this URL to your current post URL. Simple as that.

![How the _config.yml should look like](http://www.techcovered.org/images/jekyll-config-yml.png)

**URL redirection for custom domains**: Upload a file called `CNAME` to your github repository containing the url of your website. For example, I have a CNAME file with the content `www.techcovered.org` to let github know on which domain my site lies.

Now, add a CNAME record on your domain register with the link of your Github repository. For example, I have a CNAME record of techcovered.github.io with my domain register.

You also need to add an A record. For example, I have an A record for `www.techcovered.org.` and `techcovered.org.` with Github's IP address `192.30.252.153` and also `192.30.252.154` (you can have multiple A records).

It should take about a day for the domain to propagate.

##Publishing Posts

To create posts, you need to create a new file in the _posts folder in the format YYYY-MM-DD-Post-Title.md with the content in Markdown format. 

If you are not comfortable with Linux, you could download Github for Windows or Mac and then create posts there. 

Github also has the ability to create files in the online UI, so you don't even need access to your computer to create new posts, making this much similar to Wordpress. 

If there are any problems you face, let me know. Comment, Email or Tweet. Do share this article if you find this interesting.