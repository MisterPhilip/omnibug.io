---
title: No requests found in Omnibug
meta_description: Learn why Omnibug shows "No Requests Found"
layout: layouts/help-article.njk
eleventyNavigation:
    key: help.no-requests-found
    title: No requests found in Omnibug
    parent: help
---

<figure class="figure text-center">
    <img src="/assets/images/help/no-requests-found.png" class="mx-auto border" alt="No request found screenshot">
    <figcaption>Seeing "No requests found" in Omnibug</figcaption>
</figure>


### Omnibug was opened after the page load

Omnibug ignores all requests _before_ Omnibug is loaded to save on resources. If you load a page and then open Omnibug,
any requests that were sent before Omnibug was loaded will not be shown. To remedy this, open Omnibug before
loading a page, or refresh the page after you've opened Omnibug.

### You recently cleared the requests

Clearing the current requests by clicking the trash can icon will remove all requests from Omnibug. This means the same 
thing as the previous reason, where no requests have been sent since you clicked the clear button.

### A request was sent, but the provider was disabled in Omnibug

Within the Omnibug settings, you can enable or disable providers to be captured. If the provider you're looking
for is disabled, then Omnibug will not capture it, and thus not display it. To remedy this, open the Omnibug
settings and make sure your provider is enabled.

### The page hasn't sent any requests

The page might not have sent any requests yet. While a request might be expected, several factors on the page
could be preventing the requests from being sent, e.g. a JavaScript error, invalid trigger/firing rules, etc.

### The page is using service workers to cache/send requests

[Service Workers](https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers) allow 
developers to have better control over asset caching. The developer's code will be "installed" on the user's
machine and run in the background when they visit the website. This is very similar to how extensions like Omnibug work -
all in the background where the user can't see it. Note that any network requests from service workers may not show up 
in Omnibug since the request originates from the service worker and not the browser's tab. This is much more prevalent 
for Chromium browsers than Firefox. 

In Chromium browsers, you can force the network requests to come through as normal requests by going to the Dev Tools > 
Application > Service Workers > Bypass for Network as shown below:

<figure class="figure text-center">
    <img src="/assets/images/help/serviceworker.png" class="mx-auto border" alt="Disabling service worker network requests">
    <figcaption>Disabling service worker network requests</figcaption>
</figure>
