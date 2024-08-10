---
title: Missing POST Data
meta_description: Some requests may be missing data points due to missing POST data.
layout: layouts/help-article.njk
eleventyNavigation:
    key: help.post-data-error
    title: Missing POST Data
    parent: help
---

<abbr title="Marketing Tools">Providers</abbr> will sometimes send data via the 
[POST method](https://developer.mozilla.org/en-US/docs/Web/HTTP/Methods/POST), typically when a lot of data should be 
sent at once. In some cases, your browser will prevent Omnibug from seeing the POST data of a request. This is especially
prevalent for Chromium-based browsers when a ping or beacon request is made.

<figure class="figure text-center">
    <img src="/assets/images/help/post-data-error.png" class="mx-auto border" alt="A request that had an error retrieving POST data.">
    <figcaption>An icon shows that request that has been redirected</figcaption>
</figure>

Unfortunately, this is out of Omnibug's control. There is an [open Omnibug ticket](https://github.com/MisterPhilip/omnibug/issues/213)
where we will continue to provide updates as the Chromium team looks into this issue or as we find workarounds. 
