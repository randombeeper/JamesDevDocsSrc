"use strict";(self.webpackChunkjamesdevdocs=self.webpackChunkjamesdevdocs||[]).push([[9557],{4047:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>u,frontMatter:()=>r,metadata:()=>i,toc:()=>h});var a=o(4848),s=o(8453);const r={slug:"noresults",title:"Where are my results?",authors:["jgray"],tags:["DocSearch"],date:"2024-03-21T10:00","og:image":"./noresultssad.jpeg"},n="No Results",i={permalink:"/JamesDevDocsSrc/blog/noresults",source:"@site/blog/2024-03-21-noresults/2024-03-21-noresults.md",title:"Where are my results?",description:"Picking up from yesterday (apply for DocSearch), I was accepted into the program. I received an email with suggested CSS/JS that I can put on my site. At first I started to do that but then as I was looking around the Docusaurus docs I found that there was an out-of-the-box integration already available for Algolia (https://docusaurus.io/docs/search#using-algolia-docsearch). So instead of trying to figure out how to put the CSS/JS code directly into the right areas of my docs, I just updated the docusaurus.config.js file as show below.",date:"2024-03-21T10:00:00.000Z",formattedDate:"March 21, 2024",tags:[{label:"DocSearch",permalink:"/JamesDevDocsSrc/blog/tags/doc-search"}],readingTime:1.895,hasTruncateMarker:!0,authors:[{name:"James Gray",title:"Sr Program Manager, Algolia DocSearch",url:"https://github.com/randombeeper",imageURL:"https://github.com/randombeeper.png",key:"jgray"}],frontMatter:{slug:"noresults",title:"Where are my results?",authors:["jgray"],tags:["DocSearch"],date:"2024-03-21T10:00","og:image":"./noresultssad.jpeg"},unlisted:!1,prevItem:{title:"Why are there duplicate results?",permalink:"/JamesDevDocsSrc/blog/finetuning"},nextItem:{title:"GitHub and DocSearch",permalink:"/JamesDevDocsSrc/blog/github-docsearch"}},c={authorsImageUrls:[void 0]},h=[];function d(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["Picking up from yesterday (apply for DocSearch), I was accepted into the program. I received an email with suggested CSS/JS that I can put on my site. At first I started to do that but then as I was looking around the Docusaurus docs I found that there was an out-of-the-box integration already available for Algolia (",(0,a.jsx)(t.a,{href:"https://docusaurus.io/docs/search#using-algolia-docsearch",children:"https://docusaurus.io/docs/search#using-algolia-docsearch"}),"). So instead of trying to figure out how to put the CSS/JS code directly into the right areas of my docs, I just updated the docusaurus.config.js file as show below."]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",metastring:'title=""',children:"export default {\n  // ...\n  themeConfig: {\n    // ...\n    algolia: {\n      // The application ID provided by Algolia\n      appId: 'YOUR_APP_ID',\n      // Public API key: it is safe to commit it\n      apiKey: 'YOUR_SEARCH_API_KEY',\n      indexName: 'YOUR_INDEX_NAME',\n    },\n  },\n};\n"})}),"\n",(0,a.jsx)(t.p,{children:"This worked and put a UI in my docs!"}),"\n",(0,a.jsxs)(t.p,{children:["However, I wasn't getting any resutls when using the UI. The first thing I did then was go into the dashboard and try the search there. The search worked and I saw there were over 100 records in my index but something in the records didn't look right to me. After some poking around, I saw that I needed to update the Crawler config to match the Docusaurus v3 configuration found at ",(0,a.jsx)(t.a,{href:"https://docsearch.algolia.com/docs/templates/#docusaurus-v2-template",children:"https://docsearch.algolia.com/docs/templates/#docusaurus-v2-template"}),". Restarting the crawler, waiting, looking at the records in the dashboard, they looked better! Searching in the dashboard, the results looked better now too. But, I still had no results when using the UI in my docs. Hmmm..."]}),"\n",(0,a.jsx)(t.h1,{id:"no-results-in-the-ui",children:"No Results in the UI"}),"\n",(0,a.jsx)(t.p,{children:"I was thinking that chances were good the credentials that I used above in the config file had a typo but that wasn't it. Then I opened up the Chrome devtools network tab and watched as I typed, responses were giving 200's, so on the surface without digging too much deeper there that was ok. I happened to then look at Discord and did a search for Docusaurus and one of the first hits was someone observing the same exact problem I have and the solution was to set contextualSearch=false in the config file. I did that and I started getting results in my UI."}),"\n",(0,a.jsx)(t.p,{children:"I want to make another but separate blog post for today so ending this one for now."})]})}function u(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>n,x:()=>i});var a=o(6540);const s={},r=a.createContext(s);function n(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:n(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);