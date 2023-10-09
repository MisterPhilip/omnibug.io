---
title: Omnibug doesn't show up in the developer tools
meta_description: Learn why Omnibug doesn't show up in your browser's Developer Tools
layout: layouts/help-article.njk
eleventyNavigation:
    key: help.omnibug-does-not-show
    title: Omnibug doesn't show up in the developer tools
    parent: help
---

<figure class="figure text-center">
    <img src="/assets/images/help/missing-devtools-panel.png" class="mx-auto border" alt="Omnibug missing from DevTools screenshot">
    <figcaption>Omnibug missing from the DevTools window</figcaption>
</figure>

### Omnibug is not enabled. 
Ensure that you've enabled the Omnibug in your browser's extensions page. See [how to use Omnibug](../omnibug-usage-chrome/)

### You opened the devtools window on a `chrome://` or `file://` URL. 
In Chromium v114, all extensions that add to the devtools window will no longer load on any `chrome://` or `file://` URLs. 
This includes the default New Tab screen(`chrome://new-tab-page/`), the extensions settings (`chrome://extensions`), and local files that are not hosted by a web server. 

To get around this, you will need to navigate to a webpage, then open your developer tools. If you need to see everything 
for the first page view, open a different site (e.g., [Omnibug.io](https://omnibug.io/)), then change the URL to your desired URL. 

This is currently being tracked in [issue 219](https://github.com/MisterPhilip/omnibug/issues/219) and is only an issue for Chromium-based browsers.
