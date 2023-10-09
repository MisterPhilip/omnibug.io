---
title: Omnibug does not show all data points
meta_description: Learn why Omnibug might not show all data points
layout: layouts/help-article.njk
eleventyNavigation:
    key: help.omnibug-missing-data
    title: Omnibug does not show all data points
    parent: help
---
In some instances you may notice that the parsed data does not look complete. 

### Check the network tab to verify that there is a payload passed
Verifying against the network tab is the best way to confirm if this is an issue on the site, with your browser, or with Omnibug. 
If you see the same number of URL parameters, POST data, etc. then the issue is with your implementation.

### Check the network tab to verify the request type
Omnibug may show partial data when the request has a `POST` method _and_ `PING` type. 
This is due to a Chromium bug where the POST data is not passed to Omnibug for parsing.
This does not impact non-Chromium browsers, ping requests that do not include POST data, nor non-ping request types.
This is currently being tracked in [issue 213](https://github.com/MisterPhilip/omnibug/issues/213).

<figure class="figure text-center">
    <img src="/assets/images/help/ping-post-request.png" class="mx-auto border" alt="Ping POST request screenshot">
    <figcaption>Multiple ping requests that include POST data.</figcaption>
</figure>

### There is an issue with Omnibug's parsing
If the instructions above do not uncover any issues, please [log a bug](https://github.com/MisterPhilip/omnibug/issues/new/choose)!
