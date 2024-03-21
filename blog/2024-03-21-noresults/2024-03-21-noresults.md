---
slug: noresults
title: Where are my results?
authors: [jgray]
tags: [DocSearch]
date: 2024-03-21T10:00
image: ./noresultssad.jpeg
---

# Search UI

Picking up from yesterday (apply for DocSearch), I was accepted into the program. I received an email with suggested CSS/JS that I can put on my site. At first I started to do that but then as I was looking around the Docusaurus docs I found that there was an out-of-the-box integration already available for Algolia (https://docusaurus.io/docs/search#using-algolia-docsearch). So instead of trying to figure out how to put the CSS/JS code directly into the right areas of my docs, I just updated the docusaurus.config.js file as show below.

<!--truncate-->

```js title=""
export default {
  // ...
  themeConfig: {
    // ...
    algolia: {
      // The application ID provided by Algolia
      appId: 'YOUR_APP_ID',
      // Public API key: it is safe to commit it
      apiKey: 'YOUR_SEARCH_API_KEY',
      indexName: 'YOUR_INDEX_NAME',
    },
  },
};
```

This worked and put a UI in my docs!

# No Results

However, I wasn't getting any resutls when using the UI. The first thing I did then was go into the dashboard and try the search there. The search worked and I saw there were over 100 records in my index but something in the records didn't look right to me. After some poking around, I saw that I needed to update the Crawler config to match the Docusaurus v3 configuration found at https://docsearch.algolia.com/docs/templates/#docusaurus-v2-template. Restarting the crawler, waiting, looking at the records in the dashboard, they looked better! Searching in the dashboard, the results looked better now too. But, I still had no results when using the UI in my docs. Hmmm...

# No Results in the UI

I was thinking that chances were good the credentials that I used above in the config file had a typo but that wasn't it. Then I opened up the Chrome devtools network tab and watched as I typed, responses were giving 200's, so on the surface without digging too much deeper there that was ok. I happened to then look at Discord and did a search for Docusaurus and one of the first hits was someone observing the same exact problem I have and the solution was to set contextualSearch=false in the config file. I did that and I started getting results in my UI.

I want to make another but separate blog post for today so ending this one for now.