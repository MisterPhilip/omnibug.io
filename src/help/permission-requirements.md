---
title: Permissions Required for Omnibug
meta_description: Learn about the permissions required to run Omnibug
layout: layouts/help-article.njk
eleventyNavigation:
    key: help.permission-requirements
    title: Permissions Required for Omnibug
    parent: help
---

Omnibug requires several permissions in order to work properly. Each browser will label these differently, but the 
main permission required is:

 * **Read and change all your data on the websites you visit** - This allows us to inspect the requests you make across all 
 websites, so we can identify providers that Omnibug supports. 

Digging deeper, here is a full list of required permissions in the browsers:

 * `tabs` - allows us to understand which tab requests should be associated with, as well as providing the API to developer tools
 * `storage` - allows us to store options/settings
 * `webRequest` - allows us to inspect all requests made by the browser, so we can decide if we should parse it or not to 
 ultimately show in the Omnibug interface
 * `webNavigation` - allows us to view when you've navigated from one page to another, so we can show "Navigated to ..." 
 in the Omnibug interface
 * `*://*/*` - allows the extension to run on any page instead of a specific domain/set of pages

If you're ever in doubt of what we do with these permissions, you can always 
[view the source directly](https://github.com/MisterPhilip/omnibug) to see for yourself what each permission is doing. 
You can also view our [Privacy Policy](/legal/privacy-policy) for more information about your privacy in Omnibug.
