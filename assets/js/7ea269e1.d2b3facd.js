"use strict";(self.webpackChunkjamesdevdocs=self.webpackChunkjamesdevdocs||[]).push([[1867],{5645:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>g,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var s=n(4848),r=n(8453);const o={slug:"finetuning",title:"Why are there duplicate results?",authors:["jgray"],tags:["DocSearch"],"og:image":"./dups.png",date:"2024-03-21T11:00"},a="Crawler Config",i={permalink:"/JamesDevDocsSrc/blog/finetuning",source:"@site/blog/2024-03-21-finetuning/2024-03-21-finetuning.md",title:"Why are there duplicate results?",description:"Picking up from the last post, I'm now wondering why I'm getting multiple results in the UI when I search for phrases I know only exist on one page in the blog.",date:"2024-03-21T11:00:00.000Z",tags:[{inline:!0,label:"DocSearch",permalink:"/JamesDevDocsSrc/blog/tags/doc-search"}],readingTime:1.385,hasTruncateMarker:!0,authors:[{name:"James Gray",title:"Sr Program Manager, Algolia DocSearch",url:"https://github.com/randombeeper",imageURL:"https://github.com/randombeeper.png",key:"jgray"}],frontMatter:{slug:"finetuning",title:"Why are there duplicate results?",authors:["jgray"],tags:["DocSearch"],"og:image":"./dups.png",date:"2024-03-21T11:00"},unlisted:!1,prevItem:{title:"Changing the UI styling",permalink:"/JamesDevDocsSrc/blog/uistyle"},nextItem:{title:"Where are my results?",permalink:"/JamesDevDocsSrc/blog/noresults"}},l={authorsImageUrls:[void 0]},c=[];function h(e){const t={a:"a",code:"code",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,r.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"Picking up from the last post, I'm now wondering why I'm getting multiple results in the UI when I search for phrases I know only exist on one page in the blog."}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Duplicate Results",src:n(5843).A+"",width:"559",height:"452"})}),"\n",(0,s.jsx)(t.p,{children:"It turns out that is because there are actually four (4) different pages with that content:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"The blog page itself"}),"\n",(0,s.jsx)(t.li,{children:"The blog landing page"}),"\n",(0,s.jsx)(t.li,{children:"The tag page for Algolia"}),"\n",(0,s.jsx)(t.li,{children:"The tag page for Docusaurus"}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"When you run Build for Docusaurus, each of those pages are generated and thus, result in different search results. While technically correct I do not like this search experience. Instead, I want to see only one result, the actual blog page. Therefore, I'm thinking one of two things should happen:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsx)(t.li,{children:'Remove the "extra" results from being returned'}),"\n",(0,s.jsx)(t.li,{children:'Remove the "extra" records from being populated in my index to begin with'}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"Since I can't see a reason to want those records in my index to begin with, I'd rather just have the entries for the blog pages themselves in the index. Therefore, I think what this will require is an update to the Crawler configuration file."}),"\n",(0,s.jsx)(t.p,{children:"I see right away there are two properties to look at:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"discoveryPatterns"}),"\n",(0,s.jsx)(t.li,{children:"pathsToMatch"}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["After looking at those for a bit, what I really wanted was a way to exclude URLs. After a search on the Crawler docs, guess what, there is (",(0,s.jsx)(t.a,{href:"https://www.algolia.com/doc/tools/crawler/apis/configuration/exclusion-patterns/#examples",children:"https://www.algolia.com/doc/tools/crawler/apis/configuration/exclusion-patterns/#examples"}),"), so I added these to my crawler:"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-js",children:'  exclusionPatterns: [\n    "https://randombeeper.github.io/JamesDevDocsSrc/blog/tags/**",\n    "https://randombeeper.github.io/JamesDevDocsSrc/blog/",\n  ],\n'})}),"\n",(0,s.jsx)(t.p,{children:'Now my search results do not contain "duplicate" pages, only results that will go right to the blog post where the match is found.'}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"alt text",src:n(7185).A+"",width:"561",height:"275"})})]})}function g(e={}){const{wrapper:t}={...(0,r.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},5843:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/dups-19e854e0ae50c093d58d7713c9b8df52.png"},7185:(e,t,n)=>{n.d(t,{A:()=>s});const s=n.p+"assets/images/nomoredups-442ab48277519b5b635600f9d908f52d.png"},8453:(e,t,n)=>{n.d(t,{R:()=>a,x:()=>i});var s=n(6540);const r={},o=s.createContext(r);function a(e){const t=s.useContext(o);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:a(e.components),s.createElement(o.Provider,{value:t},e.children)}}}]);