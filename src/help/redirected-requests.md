---
title: Redirected Requests
meta_description: Redirected requests show up when the provider has redirected the original network call to another location.
layout: layouts/help-article.njk
eleventyNavigation:
    key: help.redirected-requests
    title: Redirected Requests
    parent: help
---

It is common for <abbr title="Marketing Tools">providers</abbr> to redirect entries to different domains to set various 
cookies or add parameters as required by their tools. Usually, these redirects happen via [HTTP 3XX redirects](https://en.wikipedia.org/wiki/URL_redirection#HTTP_status_codes_3xx)
and don't duplicate data on the back-end. Previously in Omnibug, these showed up as separate line items without any 
indication that the redirected entries were the same as the original entries. In versions 1.0+ of Omnibug, an icon will 
appear to indicate an entry was redirected. 

<figure class="figure text-center">
    <img src="/assets/images/help/redirected-rows.png" class="mx-auto border" alt="A request that has been redirected">
    <figcaption>An icon shows that request that has been redirected</figcaption>
</figure>

Additionally, a warning banner will appear for each of the redirect entries to notify you that this entry was redirected 
and the data may not be complete.

<figure class="figure text-center">
    <img src="/assets/images/help/redirected-entry-warning.png" class="mx-auto border" alt="Warning banner for a redirected entry">
    <figcaption>A warning banner shows that a request that has been redirected</figcaption>
</figure>

If you desire, you can also completely hide redirected requests from the interface via the settings. Navigate to the 
extension settings and then uncheck "Show redirected entries"

<figure class="figure text-center">
    <img src="/assets/images/help/redirect-settings.png" class="mx-auto border" alt="The settings option for redirected entries">
    <figcaption>Unchecking this box will allow you to show only the final request made, not the original redirected entries</figcaption>
</figure>

