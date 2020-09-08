---
title: How to use Omnibug in Firefox
meta_description: Learn how to use Omnibug for Mozilla Firefox
layout: layouts/help-article.njk
eleventyNavigation:
    key: help.omnibug-usage-chrome
    title: How to use Omnibug in Firefox
    parent: help
---
This article covers how to install and open Omnibug within Firefox. You should have already installed Omnibug, but if you 
 haven't, please be sure to see the [installation page](/install/) for how to install Omnibug. 

Once Omnibug has been installed, go to Firefox's add-ons page which can be visited by going to the main Firefox menu, 
then "Add Ons". You can also visit it by entering `about:addons` into the URL bar. On 
the add-ons page, you should see Omnibug listed. 

<figure class="figure text-center mb-8">
    <img src="/assets/images/help/how-to-use/firefox/extension-list.png" class="mx-auto" alt="The Firefox extensions page">
    <figcaption>You should see the Omnibug extension listed in your add-ons.</figcaption>
</figure>

In the figure above, there are two main points to make sure of. Clicking Details will let you update various settings, 
and the checkbox on the right side (1) should be checked, otherwise Omnibug will be disabled and will not work. 
Clicking on the add-on or on the add-on's menu (2) will present a menu, click on the "Manage" option in this menu.

<figure class="figure text-center mb-8">
    <img src="/assets/images/help/how-to-use/firefox/extension-details.png" class="mx-auto" alt="Omnibug extension details">
    <figcaption>The Omnibug extension details page.</figcaption>
</figure>

On the details page, the "Run in Private Windows" checkbox (1) should be set to "Allow" if you want to allow Omnibug to 
work in Firefox's private mode. We recommend that you allow this, but not required if you do not use Firefox's private mode. 
Clicking on the Options tab (2) will let you set Omnibug-specific settings. [Learn more](../omnibug-settings/) about these settings.

Now that we've explored the settings and extension details pages, let's get into how to use Omnibug. Omnibug primarily 
runs as a developer tools panel. You can open the developer tools via multiple ways:

 - Pressing `F12`
 - Pressing `ctrl + shift + i` (`ctrl + option + i` for Mac)
 - Right clicking on the page, then going to "Inspect Element"
 - Opening Firefox's main menu > "Web Developer" > "Toggle Tools"

Each browser tab or window can have their own developer tools window opened, so be sure to open the developer tools for 
the correct window! 

Once you've opened the developer tools, there should be a tab named "Omnibug". Click on that, and you'll have opened Omnibug! 
From there, Omnibug will listen to the page for requests and display them in the developer tools window. 
