---
title: Changelog
meta_description: All the recent changes and releases of Omnibug
layout: layouts/help-article.njk
eleventyNavigation:
    key: help.changelog
    title: Changelog
    parent: help
---
You can find a full list of releases on our [GitHub Page](https://github.com/MisterPhilip/omnibug/releases)

<section id="changelog">
    <article data-version="1.23.0" id="v1.23.0" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.23.0</h3>
            <time class="text-sm" datetime="2023-12-02">December 2, 2023</time>
        </header>
        <h5>Updates:</h5>
        <ul>
            <li>Requests that are not successful are now highlighted with a warning message. Any request that does not return a 2xx or 3xx status code will be included in this, in addition to browser-cancelled events (e.g., ad blockers, or navigating to a new page prior to a response).</li>
        </ul>
    </article>
    <article data-version="1.22.0" id="v1.22.0" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.22.0</h3>
            <time class="text-sm" datetime="2023-10-08">October 8, 2023</time>
        </header>
        <h5>Provider Updates:</h5>
        <ul>
            <li>Added Medallia DXA (f/k/a Decibel Insights)</li>
            <li>Added Crazy Egg</li>
            <li>Added The Trade Desk Universal Pixel</li>
            <li>Added Amazon Ad Tag</li>
            <li>Added FullStory</li>
            <li>Added Braze</li>
            <li>Added Amplitude</li>
            <li>Added Adform</li>
            <li>Added Brevo</li>
            <li>Updated Segment to allow for EU endpoints (thanks <a href="https://github.com/adrian-seijo">@adrian-seijo</a>)</li>
            <li>Updated Tealium iQ to allow for first party domains</li>
            <li>Updated nomenclature for JS library load events</li>
        </ul>
    </article>
    <article data-version="1.21.1" id="v1.21.1" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.21.1</h3>
            <time class="text-sm" datetime="2023-08-09">August 9, 2023</time>
        </header>
        <h5>Provider Updates:</h5>
        <ul>
            <li>Fixed an issue where Universal Analytics would not always be captured</li>
        </ul>
    </article>
    <article data-version="1.21.0" id="v1.21.0" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.21.0</h3>
            <time class="text-sm" datetime="2023-08-03">August 3, 2023</time>
        </header>
        <h5>Provider Updates:</h5>
        <ul>
            <li>Added Parse.ly (thanks <a href="https://github.com/jshhnsn">@jshhnsn</a>)</li>
            <li>Added RudderStack</li>
            <li>Split Google Analytics into two separate providers (Universal Analytics / GA4)</li>
            <li>Minor bug fixes for Google Ads/Doubleclick</li>
        </ul>
    </article>
    <article data-version="1.20.0" id="v1.20.0" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.20.0</h3>
            <time class="text-sm" datetime="2023-02-25">February, 25 2023</time>
        </header>
        <h5>Provider Updates:</h5>
        <ul>
            <li>Added SplitIO (thanks <a href="https://github.com/michal-filip">@michal-filip</a>)</li>
            <li>Added Adobe Launch, China (thanks <a href="https://github.com/hkdigitalanalytics">@hkdigitalanalytics</a>)</li>
            <li>Added Teads</li>
            <li>Added Adobe Web SDK</li>
            <li>Minor bug fixes for TikTok & PiwikPRO</li>
        </ul>
    </article>
    <article data-version="1.19.1" id="v1.19.1" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.19.1</h3>
            <time class="text-sm" datetime="2022-05-15">May 15, 2022</time>
        </header>
        <h5>Updates:</h5>
        <ul>
            <li>Reduced the number of required permissions</li>
        </ul>
    </article>
    <article data-version="1.19.0" id="v1.19.0" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.19.0</h3>
            <time class="text-sm" datetime="2022-02-06">February 6, 2022</time>
        </header>
        <h5>Provider Updates:</h5>
        <ul>
            <li>Added Glassbox, RTB House, Zemanta, Hubspot, Outbrain</li>
        </ul>
    </article>
    <article data-version="1.18.0" id="v1.18.0" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.18.0</h3>
            <time class="text-sm" datetime="2021-10-23">October 23, 2021</time>
        </header>
        <h5>Provider Updates:</h5>
        <ul>
            <li>Added Tealium EventStream, 6Sesnse, Hotjar, and Microsoft Clarity</li>
            <li>Fixed Google Analytics's false positive with Microsoft Clarity</li>
        </ul>
    </article>
    <article data-version="1.17.3" id="v1.17.3" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.17.3</h3>
            <time class="text-sm" datetime="2021-02-08">February 8, 2021</time>
        </header>
        <h5>Provider Updates:</h5>
        <ul>
            <li>Fix Adobe Media SDK v3 Context Variables</li>
            <li>Allow nexus-test subdomain for Ensighten</li>
        </ul>
    </article>
    <article data-version="1.17.2" id="v1.17.2" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.17.2</h3>
            <time class="text-sm" datetime="2020-12-13">December 13, 2020</time>
        </header>
        <h5>Provider Updates:</h5>
        <ul>
            <li>Inclusion of Adobe Media SDK v3</li>
        </ul>
    </article>
    <article data-version="1.17.1" id="v1.17.1" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.17.1</h3>
            <time class="text-sm" datetime="2020-11-07">November 7, 2020</time>
        </header>
        <h5>Provider Updates:</h5>
        <ul>
            <li>Updated Adobe Launch to support new folder pattern</li>
        </ul>
        <h5>Bug Fixes:</h5>
        <ul>
            <li>Fixed an issue with settings not always updating in the debugging panel</li>
        </ul>
    </article>
    <article data-version="1.17.0" id="v1.17.0" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.17.0</h3>
            <time class="text-sm" datetime="2020-09-10">September 10, 2020</time>
        </header>
        <h5>Provider Updates:</h5>
        <ul>
            <li>Added TikTok, Demandbase as new providers</li>
            <li>Added support for Mparticle v3</li>
            <li>Added support for first-party implementations of Google Analytics (i.e. server-sided GTM)</li>
        </ul>
        <h5>Bug Fixes:</h5>
        <ul>
            <li>Fixed an issue with highlighted rows using default colors in dark mode</li>
            <li>Fixed an issue with Chrome and the Copy Value feature in the context menu</li>
        </ul>
        <h5>New / Updated Features:</h5>
        <ul>
            <li>Highlighted parameters are now case-insensitive</li>
        </ul>
    </article>
    <article data-version="1.16.1" id="v1.16.1" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.16.1</h3>
            <time class="text-sm" datetime="2020-08-15">August 15, 2020</time>
        </header>
        <h5>Provider Updates:</h5>
        <ul>
            <li>Renamed Universal Analytics to Google Analytics</li>
            <li>Fixed issues with Google Analytics App+Web measurement protocol</li>
        </ul>
    </article>
    <article data-version="1.16.0" id="v1.16.0" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.16.0</h3>
            <time class="text-sm" datetime="2020-05-11">May 11, 2020</time>
        </header>
        <h5>Provider Updates:</h5>
        <ul>
            <li>Added Lytics</li>
        </ul>
    </article>
    <article data-version="1.15.0" id="v1.15.0" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.15.0</h3>
            <time class="text-sm" datetime="2020-04-08">April 8, 2020</time>
        </header>
        <h5>Provider Updates:</h5>
        <ul>
            <li>Updated mParticle to allow for different account IDs</li>
            <li>Added Bing Ads UET</li>
            <li>Added Snap Pixel (Snapchat)</li>
            <li>Added LinkedIn Conversion Tag</li>
            <li>Added Pinterest Conversion Tag</li>
            <li>Added Criteo OneTag (bare implementation, more to come!)</li>
        </ul>
        <h5>Bug Fixes:</h5>
        <ul>
            <li>Fixed issues with hovering over long values when the "Wrap long values" option was not selected</li>
            <li>Added additional error handling for edge cases where the settings were not loading before requests came in</li>
        </ul>
    </article>
    <article data-version="1.14.0" id="v1.14.0" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.14.0</h3>
            <time class="text-sm" datetime="2020-03-01">March 1, 2020</time>
        </header>
        <h5>New / Updated Features:</h5>
        <ul>
            <li>Added the ability to resize the width of the variable name column</li>
            <li>Firefox users can now access the settings page from the developer tools</li>
            <li>Reduced the number of permissions required for the extension (clipboardWrite is no longer needed)</li>
            <li>Installation page now stays within the extension instead of going off-site</li>
        </ul>
        <h5>Bug Fixes:</h5>
        <ul>
            <li>A host of minor UI fixes</li>
        </ul>
    </article>
    <article data-version="1.13.2" id="v1.13.2" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.13.2</h3>
            <time class="text-sm" datetime="2020-01-08">January 8, 2020</time>
        </header>
        <h5>Provider Updates:</h5>
        <ul>
            <li>Fixed a bug with Google Ads that prevented it from showing up in certain cases</li>
        </ul>
    </article>
    <article data-version="1.13.1" id="v1.13.1" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.13.1</h3>
            <time class="text-sm" datetime="2019-12-03">December 3, 2019</time>
        </header>
        <h5>Provider Updates:</h5>
        <ul>
            <li>Added <a href="https://piwik.pro/">Piwik PRO</a> as a new provider</li>
            <li>Added <a href="https://piwik.pro/tag-manager/">Piwik PRO Tag Manager</a> as a new provider</li>
            <li>Updated a few fields in Matomo</li>
        </ul>
    </article>
    <article data-version="1.13.0" id="v1.13.0" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.13.0</h3>
            <time class="text-sm" datetime="2019-11-30">November 30, 2019</time>
        </header>
        <h5>Provider Updates:</h5>
        <ul>
            <li>Added <a href="https://matomo.org/">Matomo</a> as a new provider</li>
        </ul>
    </article>
    <article data-version="1.12.0" id="v1.12.0" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.12.0</h3>
            <time class="text-sm" datetime="2019-10-30">October 30, 2019</time>
        </header>
        <h5>New / Updated Features:</h5>
        <ul>
            <li>Added the ability to show custom data on the overview screen. This was a community-built feature that is currently in beta testing and will likely change over time</li>
        </ul>
    </article>
    <article data-version="1.11.0" id="v1.11.0" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.11.0</h3>
            <time class="text-sm" datetime="2019-08-25">August 25, 2019</time>
        </header>
        <h5>Provider Updates:</h5>
        <ul>
            <li>Added Webtrends OnDemand as a new provider</li>
        </ul>
    </article>
    <article data-version="1.10.0" id="v1.10.0" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.10.0</h3>
            <time class="text-sm" datetime="2019-08-07">August 7, 2019</time>
        </header>
        <h5>Provider Updates:</h5>
        <ul>
            <li>Added Google Analytics App+Web as a new provider. Note that this is in beta (both in GA and Omnibug)</li>
        </ul>
    </article>
    <article data-version="1.9.0" id="v1.9.0" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.9.0</h3>
            <time class="text-sm" datetime="2019-07-18">June 18, 2019</time>
        </header>
        <h5>New / Updated Features:</h5>
        <ul>
            <li>Added the ability to rename parameters manually. This was a community-built feature that is currently in beta testing and will likely change over time</li>
        </ul>
    </article>
    <article data-version="1.8.0" id="v1.8.0" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.8.0</h3>
            <time class="text-sm" datetime="2019-05-02">May 2, 2019</time>
        </header>
        <h5>New / Updated Features:</h5>
        <ul>
            <li>Added the ability to save a default filter set, which is applied to all new Omnibug windows</li>
            <li>Added a quick reset filters button</li>
        </ul>
        <h5>Provider Updates:</h5>
        <ul>
            <li>Added Comscore as a new provider</li>
        </ul>
    </article>
    <article data-version="1.7.0" id="v1.7.0" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.7.0</h3>
            <time class="text-sm" datetime="2019-04-29">April 29, 2019</time>
        </header>
        <h5>New / Updated Features:</h5>
        <ul>
            <li>New &amp; updated providers (see below!)</li>
        </ul>
        <h5>Provider Updates:</h5>
        <ul>
            <li>Added Google Ads and Google DoubleClick as new providers</li>
            <li>Added Adobe Experience Cloud ID Service, which was previously lumped under the Adobe Audience Manager provider</li>
            <li>Updated the Adobe Audience Manager to include the request type and now matches more parameters with friendly names</li>
            <li>Removed the "microdata" event type for Facebook. It provided no actionable insights and was noise in the interface</li>
            <li>Removed DoubleClick as a request type from Google Analytics. This was confusing users on if their GA call was successful or not
                (especially if they have "hide redirects" enabled). You can now check if the request has DoubleClick enabled by seeing if there is a
                "Display Features Enabled" field under the General section.</li>
        </ul>
    </article>
    <article data-version="1.6.2" id="v1.6.2" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.6.2</h3>
            <time class="text-sm" datetime="2019-04-27">April 27, 2019</time>
        </header>
        <h5>New / Updated Features:</h5>
        <ul>
            <li>Rearrangement of the parameters for Adobe Analytics (again, sorry!). List variables now have their own section, as well as Customer IDs.</li>
        </ul>
        <h5>Bug Fixes:</h5>
        <ul>
            <li>Added missing icon for AT Internet.</li>
            <li>Fixed Adobe Analytics' context data names only showing the last portion of the name (previously only showed after the last ".").</li>
        </ul>
    </article>
    <article data-version="1.6.1" id="v1.6.1" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.6.1</h3>
            <time class="text-sm" datetime="2019-04-19">April 19, 2019</time>
        </header>
        <h5>New / Updated Features:</h5>
        <ul>
            <li>Minor cleanup / rearrangement of the parameters for Adobe Analytics. Too many of the technical parameters were set in general, and list vars were not captured (now under eVars).</li>
        </ul>
    </article>
    <article data-version="1.6.0" id="v1.6.0" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.6.0</h3>
            <time class="text-sm" datetime="2019-04-18">April 18, 2019</time>
        </header>
        <h5>New / Updated Features:</h5>
        <ul>
            <li>AT Internet is now a new provider. We would love some feedback on this to make sure we have the right params or if there are any we're missing!</li>
        </ul>
        <h5>Bug Fixes:</h5>
        <ul>
            <li>Minor UI updates, fixes</li>
            <li>Updated Universal Analytics to show the correct custom dimension/metric name for products (and shortened the name)</li>
        </ul>
    </article>
    <article data-version="1.5.0" id="v1.5.0" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.5.0</h3>
            <time class="text-sm" datetime="2019-03-30">March 30, 2019</time>
        </header>
        <p>Added a custom context menu</p>
        <h5>New / Updated Features:</h5>
        <ul>
            <li>Added a context menu to let you easily (un)highlight rows and copy values</li>
            <li>Minor UI changes, including a new footer</li>
        </ul>
        <h5>Bug Fixes:</h5>
        <ul>
            <li>Fixed Firefox not opening links properly from the devtools panel</li>
            <li>Updated NPM package to prevent a potential security vulnerability</li>
        </ul>
    </article>
    <article data-version="1.4.1" id="v1.4.1" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.4.1</h3>
            <time class="text-sm" datetime="2019-03-20">March 20, 2019</time>
        </header>
        <p>Minor update for Adobe Analytics</p>
        <h5>New / Updated Features:</h5>
        <ul>
            <li>Added trackingServer for Adobe Analytics in the general section</li>
        </ul>
        <h5>Bug Fixes:</h5>
        <ul>
            <li>The pattern for Adobe Analytics has been tightened up so that the <code>b/ss</code> must be in the path instead of anywhere in the URL</li>
            <li>Fixed JS Version in Adobe Analytics</li>
            <li>Updated NPM package to prevent a potential security vulnerability</li>
        </ul>
    </article>
    <article data-version="1.4.0" id="v1.4.0" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.4.0</h3>
            <time class="text-sm" datetime="2019-03-01">March 1, 2019</time>
        </header>
        <h5>New / Updated Features:</h5>
        <ul>
            <li>Added provider icons (these can be disabled in the settings if you prefer!)</li>
            <li>Updates to DTM / Launch to show the environment / account in the accounts column.</li>
        </ul>
    </article>
    <article data-version="1.3.0" id="v1.3.0" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.3.0</h3>
            <time class="text-sm" datetime="2018-12-02">December 2, 2018</time>
        </header>
        <h5>New / Updated Features:</h5>
        <ul>
            <li>Added mParticle as a new provider. Big shout out to John Simmons for our first community-contributed provider!</li>
            <li>Added Adobe Launch and Adobe DTM as new tag manager providers. These will only show the main library / JS loader, and not any additional files that may be loaded in after.</li>
        </ul>
    </article>
    <article data-version="1.2.3" id="v1.2.3" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.2.3</h3>
            <time class="text-sm" datetime="2018-08-08">August 16, 2018</time>
        </header>
        <p>A Chrome only release to align with their developer policies.</p>
    </article>
    <article data-version="1.2.2" id="v1.2.2" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.2.2</h3>
            <time class="text-sm" datetime="2018-08-08">August 8, 2018</time>
        </header>
        <p>A minor patch for settings issues</p>
        <h5>Bug Fixes:</h5>
        <ul>
            <li>Fixed an error settings attempting to pull in providers, but failing.</li>
        </ul>
    </article>
    <article data-version="1.2.1" id="v1.2.1" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.2.1</h3>
            <time class="text-sm" datetime="2018-08-05">August 5, 2018</time>
        </header>
        <p>A hotfix for the filter panel error.</p>
        <h5>Bug Fixes:</h5>
        <ul>
            <li>Fixed an error with how providers were loaded for the filter panel</li>
        </ul>
    </article>
    <article data-version="1.2.0" id="v1.2.0" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.2.0</h3>
            <time class="text-sm" datetime="2018-08-05">August 5, 2018</time>
        </header>
        <p>A few minor bug fixes and UI tweaks, as well as Firefox support.</p>
        <h5>New / Updated Features:</h5>
        <ul>
            <li>Firefox support</li>
            <li>Some backend changes to allow us to easily add new providers</li>
            <li>New Tag Manager providers: TealiumIQ, Ensighten Manage, and Google Tag Manager. These will only show the main library / JS loader, and not any additional files that may be loaded in after.</li>
        </ul>
        <h5>Bug Fixes:</h5>
        <ul>
            <li>Adobe Audience Manager (specifically Experience Cloud ID Service) showed up under Adobe Analytics for certain requests, this has been fixed.</li>
            <li>Adobe Target now shows POST requests properly</li>
            <li>Universal Analytics product dimensions/metrics numbers were not showing their numbers in the friendly name</li>
            <li>Minor UI tweaks/bug fixes</li>
        </ul>
    </article>
    <article data-version="1.1.1" id="v1.1.1" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.1.1</h3>
            <time class="text-sm" datetime="2018-07-14">July 14, 2018</time>
        </header>
        <p>Minor backend changes for themes</p>
    </article>
    <article data-version="1.1.0" id="v1.1.0" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.1.0</h3>
            <time class="text-sm" datetime="2018-07-13">July 13, 2018</time>
        </header>
        <p>Adding the highly requested dark mode.</p>
        <h5>New / Updated Features:</h5>
        <ul>
            <li>Dark mode and theme selection</li>
        </ul>
        <h5>Bug Fix:</h5>
        <ul>
            <li>Fix Adobe Analytics media module request type</li>
        </ul>
    </article>
    <article data-version="1.0.1" id="v1.0.1" class="border-b-2 mb-2">
        <header class="mb-2">
            <h3>v1.0.1</h3>
            <time class="text-sm" datetime="2018-07-12">July 12, 2018</time>
        </header>
        <p>A minor update to the Universal Analytics provider for beacons.</p>
        <h5>Bug Fix:</h5>
        <ul>
            <li>Fix beacon transport type for UA</li>
        </ul>
    </article>
    <article data-version="1.0.0" id="v1.0.0">
        <header class="mb-2">
            <h3>v1.0.0</h3>
            <time class="text-sm" datetime="2018-07-01">July 1, 2018</time>
        </header>
        <p>Version 1.0.0 is the largest release in Omnibug history</p>
        <h5>New / Updated Features:</h5>
        <ul>
            <li>A new website to better support you! More help articles and tutorials will be added over the next few weeks.</li>
            <li>All new styles in the devtools panel, as well as updated styling in the settings panel.</li>
            <li>Added the ability to filter requests based on account ID, provider, or both.</li>
            <li>You can now export data that have been captured.</li>
            <li>Additionally, you can add notes to be included in the export. <em>Note: This is disabled by default.</em> <a href="/help/settings#show-note-field">learn more</a>.</li>
            <li>You can now choose if you want to persist or clear requests between pages.</li>
            <li>Navigation requests (e.g. moving to a new page) will show up within the requests so you can easily see what requests belong to each page.</li>
            <li>Added relevant tooltips and help links to various places in the interface.</li>
            <li>A few new providers have been added. We're working hard on adding more (including updating some older ones that were removed with 1.0.0).</li>
        </ul>
        <h5>Bug Fixes:</h5>
        <ul>
            <li>Fixed some cases where requests wouldn't show up.</li>
            <li>Updated providers URLs to have fewer false positives.</li>
        </ul>
    </article>
</section>

