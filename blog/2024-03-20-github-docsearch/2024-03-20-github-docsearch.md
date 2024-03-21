---
slug: github-docsearch
title: GitHub and DocSearch
authors: [jgray]
tags: [Docusaurus,GitHub,GitHub Pages,DocSearch]
sidebar_position: 2
---

# Docusaurus in GitHub
Initially I goofed around with getting the Docusaurus site into GH using two different repos, one for the site source and one for the build directory. After goofing with that for a little bit, I stumbled upon the command to deploy to a different branch within your repo:

```bash
npm run deploy
```

This automatically publishes your build to the branch <code>gh-pages</code> which GH Pages is also easily tuned into. This was the way to go.

<!--truncate-->

GitHub Deployed! Look for the tutorial soon.

# GitHub Pages
After commiting my site into GH as well as publishing the static contents to the 2nd branch, it was time to setup GH Pages. This is easily configured within your GH repo under settings->pages. Use "Deploy from a branch" and set the Branch to "gh-pages". Within a few minutes the site will be live and you'll see a button on the page to visit it.

GitHub Pages Deployed! Look for the tutorial soon.

# DocSearch
Now that I've got an actual doc site on the internet, it's time to set up a search mechanism using Algolia DocSearch. Visit https://docsearch.algolia.com/apply/, put in the URL of the doc site, your email, your GH repo from previous step, and submit the form. Provided you meet all the criteria you'll be accepted into the program.


That's all for today...
