---
title: Omnibug Settings
meta_description: Learn about all the available settings in Omnibug
layout: layouts/help-article.njk
eleventyNavigation:
    key: help.settings
    title: Settings
    parent: help
---

This article discusses all of settings and options within Omnibug. Changes to the settings are done in real-time, so 
any changes made here will be reflected in any open instances of Omnibug. You can reach the settings page by clicking the 
gear icon in any open Omnibug window. 

### Table of Contents {#toc}

 - [Highlight parameters](#highlight-parameters)
 - [Enabled providers](#enabled-providers)
 - [Expand entries by default](#expand-entries-by-default)
 - [Show redirected entries](#show-redirected-entries)
 - [Show navigation entries](#show-navigation-entries)
 - [Add quotes around values](#add-quotes-around-values)
 - [Request sort order](#request-sort-order)
 - [Parameter display style](#parameter-display-style)
 - [Wrap long values](#wrap-long-values)
 - [Show note field](#show-note-field)
 - [Theme](#theme)
 - [Colors](#colors)
    - [Page load event](#color-page-load-event)
    - [Click event](#color-click-event)
    - [Highlighted parameter](#color-highlighted-parameter)
    - [Row hover](#color-row-hover)
    - [Redirected event](#color-redirected-event)
    - [Quotes](#color-quotes)
 - [Send usage stats](#color-send-usage-stats)
 - [Reset Settings](#color-reset-settings)

### Highlight parameters {#highlight-parameters}

Highlight parameters allows you to add or remove certain URL parameters so they can easily be seen. By default `pageName`,
`ch`, `events`, and `products` are all added for Adobe Analytics. This will highlight those rows with a yellow background 
(which can be changed in [Higlight Color](#color-highlighted-parameter)).

To add a new parameter, click the "Add Parameter" input field, type your parameter name, then hit enter or click off the 
input. To remove a parameter, click the `x` next to the parameter name. 

### Enabled providers {#enabled-providers}

In addition to filters within each Omnibug instance, enabled providers allows you to capture or ignore certain providers
on a global level. This is useful if you don't use certain providers (marketing tools) and you don't want to see them. 
You can uncheck the checkbox next to the provider's name, and Omnibug will no longer capture requests from that 
provider. 

### Expand entries by default {#expand-entries-by-default}

By default, each request (entry) is collapsed, so you can see the list of requests easier. If you prefer to have 
each request expanded and all the parameters / information shown by default, check this box. 

### Show redirected entries {#show-redirected-entries}

[Redirected entries](../redirected-requests/) can be hidden to de-clutter the interface or remove any confusion. It should 
be noted that both the original request and the final request made might be different, with missing or added parameters from 
what was originally sent. If you feel like you're not seeing the right data, make sure this box is checked and look for 
the original redirected entry.

### Show navigation entries {#show-navigation-entries}

Navigation entries show when you've changed between pages (e.g. going from https://omnibug.io/ to https://omnibug.io/help). 
These entries can be hidden if the setting is unchecked.

<figure class="figure text-center">
    <img src="/assets/images/help/settings-navigation.png" class="mx-auto border" alt="Example of a navigation entry">
    <figcaption>You can see here that two pages were seen: <code>/</code> and <code>/help</code></figcaption>
</figure>

### Add quotes around values {#add-quotes-around-values}

When this is checked, quotes will be added before and after each value in the request details. These quotes can show when 
there is an unexpected whitespace before or after a value.

<figure class="figure text-center">
    <img src="/assets/images/help/settings-quotes-disabled.png" class="mx-auto border" alt="Adding quotes disabled">
    <figcaption>An entry with "Add quotes around values" disabled.</figcaption>
</figure>
<figure class="figure text-center">
    <img src="/assets/images/help/settings-quotes-enabled.png" class="mx-auto border" alt="Adding quotes enabled">
    <figcaption>An entry with "Add quotes around values" enabled.</figcaption>
</figure>

### Request sort order {#request-sort-order}

The request sort order toggles how new requests are displayed: pushed to the top of the list, or added to the bottom. 
Oldest requests first is the default and previously-used way, but the newest requests first can be beneficial when you have 
many requests to sort through. 

### Parameter display style {#parameter-display-style}

Omnibug let's you choose if you want to see the user-friendly version of a URL parameter, or the actual name of the URL 
parameter. For example, in Adobe Analytics, `v0` (parameter name) stands for `Campaign` (descriptions). You can always 
hover over the first column to see both the description and parameter name.

### Wrap long values {#wrap-long-values}

Wrapping long lines lets you see the long text entries, where as if this setting is left unchecked, the value would be 
truncated until you hovered over that row.

<figure class="figure text-center">
    <img src="/assets/images/help/settings-wrap-disabled.png" class="mx-auto border" alt="Wrapping disabled">
    <figcaption>An entry with "wrap long values" disabled.</figcaption>
</figure>
<figure class="figure text-center">
    <img src="/assets/images/help/settings-wrap-enabled.png" class="mx-auto border" alt="Wrapping enabled">
    <figcaption>An entry with "wrap long values" enabled.</figcaption>
</figure>

### Show note field {#show-note-field}

Starting in 1.0, Omnibug allows you to add notes to each request for when you export the requests. This is useful for 
taking notes on what you did to get a request, or adding notes to remember that a value didn't look quite right. This is 
hidden by default to save screen space. 

<figure class="figure text-center">
    <img src="/assets/images/help/settings-note-field.png" class="mx-auto border" alt="The note field for an entry">
    <figcaption>When enabled, the notes field shows up at the top of a request.</figcaption>
</figure>

### Theme {#theme}

Chrome offers a light and dark mode for the developer tools. By default, Omnibug will match your settings, but you can 
force a light or dark theme via this option.

### Colors {#colors}

Omnibug allows you to customize various colors of the interface. If the default color is selected, the corresponding 
default value will be used for each theme. If a different color is selected, that color will remain across all 
themes. The default color is provided in the color dropdown should you want to revert the color and not all of your
settings.

##### Page load event {#color-page-load-event}

This badge color is for any request that is considered a page view, or page load. 

##### Click event {#color-click-event}

This badge color is for any request that is considered a click event (any non-page view events). 

<figure class="figure text-center">
    <img src="/assets/images/help/settings-color-page-click.png" class="mx-auto border" alt="Entries for page view and click events">
    <figcaption>Both a page load event and a click event badges are shown above.</figcaption>
</figure>

##### Highlighted parameter {#color-highlighted-parameter}

This is the background color for any highlighted parameters (_see:_ [Highlight parameters](#highlight-parameters))

##### Row hover {#color-row-hover}

This is the background color for a request entry when you hover over it.

##### Redirected event {#color-redirected-event}

This badge color is for any requests that were redirected.

<figure class="figure text-center">
    <img src="/assets/images/help/redirected-rows.png" class="mx-auto border" alt="An entry that was redirected">
    <figcaption>A redirect entry badge is shown above.</figcaption>
</figure>

##### Quotes {#color-quotes}

This is the color of the quotes surrounding values (_see:_ [Add quotes around values](#add-quotes-around-values))

<figure class="figure text-center">
    <img src="/assets/images/help/settings-quotes-enabled.png" class="mx-auto border" alt="Quotes around a value">
    <figcaption>Quotes around the values are shown in red (the default color).</figcaption>
</figure>

### Send usage stats {#send-usage-stats}

When this setting is checked, usage data is sent to Google Analytics to allow us to see how Omnibug is being interacted 
with. No personally identifiable information (PII) is sent, nor is any data about the requests or pages you are viewing. 
We appreciate those that keep this setting checked so we can improve Omnibug in the future!

### Reset Settings {#reset-settings}

Should you decide you don't like your settings and want to return to the default settings, or you're having issues with 
settings or Omnibug in general, clicking this button will reset all of your settings to the recommended defaults. Use with 
caution, as there is no undo button!
