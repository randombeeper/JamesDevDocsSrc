---
sidebar_position: 1
---

# 5min Tutorial

Let's discover **Docusaurus + Algolia in less than 5 minutes**. To make this a 5min tutorial, we'll be skipping all the blood sweat and tears that might occur behind the scenes to setup even the simplest aspects such as getting nodejs or establishing your GitHub username/password so that you can push to your repo. The more in depth tutorials will cover these aspects.

## What you'll need

* A documentation site - We'll be using Docusuarus
* Version Control - We'll be using GitHub
* Somewhere to deploy Docusaurus - We'll be using Github Pages
* Search - We'll be using Algolia DocSearch

## Install Docusaurus

### You'll Need
- [Node.js](https://nodejs.org/en/download/) version 18.0 or above:
  - When installing Node.js, you are recommended to check all checkboxes related to dependencies.

Generate a new Docusaurus site using the **classic template**. The classic template will automatically be added to your project after you run the command:

```bash
npm init docusaurus@latest my-website classic
```

### View Locally

Run the development server:

```bash
cd my-website
npm run start
```

The `npm run start` command builds your website locally and serves it through a development server, ready for you to view at http://localhost:3000/. Open `docs/intro.md` (this page) and edit some lines: the site **reloads automatically** and displays your changes.

## Check your site into GitHub

Let's just use the instructions from Docusaurus: https://docusaurus.io/docs/deployment#deploying-to-github-pages

## Deploy to a branch
This will actually deploy to a branch, which will trigger GH Actions and then deploy to your site. It may take a few minutes.

```bash
npm run deploy
```

## Setup Search

### Apply for DocSearch

Go here: https://docsearch.algolia.com/apply/
Wait for your approval email.
Once you recieve it, accept the invitation to begin.

### Put Records Into Your Index

Use the link in the approval email to edit the Crawler configuration file and use the Docusaurus v3 template (https://docsearch.algolia.com/docs/templates/#docusaurus-v3-template), save, and run crawler. More instructions here: https://docusaurus.io/docs/search#using-algolia-docsearch.

### Update Website

Since we are using Docusaurus, add this to your docusaurus.config.js:

```bash
  themeConfig:
    ({   
      algolia: {
        appId: 'YOURAPPID',
        apiKey: 'apikeyprovided',
        indexName: 'yourindexname',
        contextualSearch: true,
      },
```

That's it!
