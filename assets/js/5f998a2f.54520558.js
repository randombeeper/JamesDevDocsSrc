"use strict";(self.webpackChunkjamesdevdocs=self.webpackChunkjamesdevdocs||[]).push([[941],{2609:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>r,contentTitle:()=>l,default:()=>u,frontMatter:()=>t,metadata:()=>a,toc:()=>c});var o=n(4848),i=n(8453);const t={sidebar_position:1},l="5min Tutorial",a={id:"intro",title:"5min Tutorial",description:"Let's discover Docusaurus + Algolia in less than 5 minutes. To make this a 5min tutorial, we'll be skipping all the blood sweat and tears that might occur behind the scenes to setup even the simplest aspects such as getting nodejs or establishing your GitHub username/password so that you can push to your repo. The more in depth tutorials will cover these aspects.",source:"@site/versioned_docs/version-1.1/intro.md",sourceDirName:".",slug:"/intro",permalink:"/JamesDevDocsSrc/docs/1.1/intro",draft:!1,unlisted:!1,editUrl:"https://github.com/randombeeper/JamesDevDocsSrc/versioned_docs/version-1.1/intro.md",tags:[],version:"1.1",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"config",permalink:"/JamesDevDocsSrc/docs/1.1/Crawler/config"}},r={},c=[{value:"What you&#39;ll need",id:"what-youll-need",level:2},{value:"Install Docusaurus",id:"install-docusaurus",level:2},{value:"You&#39;ll Need",id:"youll-need",level:3},{value:"View Locally",id:"view-locally",level:3},{value:"Check your site into GitHub",id:"check-your-site-into-github",level:2},{value:"Deploy to a branch",id:"deploy-to-a-branch",level:2},{value:"Setup Search",id:"setup-search",level:2},{value:"Apply for DocSearch",id:"apply-for-docsearch",level:3},{value:"Update your Crawler Config",id:"update-your-crawler-config",level:3},{value:"Update your docusaurus.config.js with the Algolia information provided in the approval email",id:"update-your-docusaurusconfigjs-with-the-algolia-information-provided-in-the-approval-email",level:3}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(s.h1,{id:"5min-tutorial",children:"5min Tutorial"}),"\n",(0,o.jsxs)(s.p,{children:["Let's discover ",(0,o.jsx)(s.strong,{children:"Docusaurus + Algolia in less than 5 minutes"}),". To make this a 5min tutorial, we'll be skipping all the blood sweat and tears that might occur behind the scenes to setup even the simplest aspects such as getting nodejs or establishing your GitHub username/password so that you can push to your repo. The more in depth tutorials will cover these aspects."]}),"\n",(0,o.jsx)(s.h2,{id:"what-youll-need",children:"What you'll need"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"A documentation site - We'll be using Docusuarus"}),"\n",(0,o.jsx)(s.li,{children:"Version Control - We'll be using GitHub"}),"\n",(0,o.jsx)(s.li,{children:"Somewhere to deploy Docusaurus - We'll be using Github Pages"}),"\n",(0,o.jsx)(s.li,{children:"Search - We'll be using Algolia DocSearch"}),"\n"]}),"\n",(0,o.jsx)(s.h2,{id:"install-docusaurus",children:"Install Docusaurus"}),"\n",(0,o.jsx)(s.h3,{id:"youll-need",children:"You'll Need"}),"\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsxs)(s.li,{children:[(0,o.jsx)(s.a,{href:"https://nodejs.org/en/download/",children:"Node.js"})," version 18.0 or above:","\n",(0,o.jsxs)(s.ul,{children:["\n",(0,o.jsx)(s.li,{children:"When installing Node.js, you are recommended to check all checkboxes related to dependencies."}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(s.p,{children:["Generate a new Docusaurus site using the ",(0,o.jsx)(s.strong,{children:"classic template"}),". The classic template will automatically be added to your project after you run the command:"]}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"npm init docusaurus@latest my-website classic\n"})}),"\n",(0,o.jsx)(s.h3,{id:"view-locally",children:"View Locally"}),"\n",(0,o.jsx)(s.p,{children:"Run the development server:"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"cd my-website\nnpm run start\n"})}),"\n",(0,o.jsxs)(s.p,{children:["The ",(0,o.jsx)(s.code,{children:"npm run start"})," command builds your website locally and serves it through a development server, ready for you to view at ",(0,o.jsx)(s.a,{href:"http://localhost:3000/",children:"http://localhost:3000/"}),". Open ",(0,o.jsx)(s.code,{children:"docs/intro.md"})," (this page) and edit some lines: the site ",(0,o.jsx)(s.strong,{children:"reloads automatically"})," and displays your changes."]}),"\n",(0,o.jsx)(s.h2,{id:"check-your-site-into-github",children:"Check your site into GitHub"}),"\n",(0,o.jsxs)(s.p,{children:["Let's just use the instructions from Docusaurus: ",(0,o.jsx)(s.a,{href:"https://docusaurus.io/docs/deployment#deploying-to-github-pages",children:"https://docusaurus.io/docs/deployment#deploying-to-github-pages"})]}),"\n",(0,o.jsx)(s.h2,{id:"deploy-to-a-branch",children:"Deploy to a branch"}),"\n",(0,o.jsx)(s.p,{children:"This will actually deploy to a branch, which will trigger GH Actions and then deploy to your site. It may take a few minutes."}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"npm run deploy\n"})}),"\n",(0,o.jsx)(s.h2,{id:"setup-search",children:"Setup Search"}),"\n",(0,o.jsx)(s.h3,{id:"apply-for-docsearch",children:"Apply for DocSearch"}),"\n",(0,o.jsxs)(s.p,{children:["Go here: ",(0,o.jsx)(s.a,{href:"https://docsearch.algolia.com/apply/",children:"https://docsearch.algolia.com/apply/"}),"\nWait for your approval email."]}),"\n",(0,o.jsx)(s.h3,{id:"update-your-crawler-config",children:"Update your Crawler Config"}),"\n",(0,o.jsxs)(s.p,{children:["Use the link in the approval email\n",(0,o.jsx)(s.a,{href:"https://docusaurus.io/docs/search#using-algolia-docsearch",children:"https://docusaurus.io/docs/search#using-algolia-docsearch"})]}),"\n",(0,o.jsx)(s.h3,{id:"update-your-docusaurusconfigjs-with-the-algolia-information-provided-in-the-approval-email",children:"Update your docusaurus.config.js with the Algolia information provided in the approval email"}),"\n",(0,o.jsx)(s.pre,{children:(0,o.jsx)(s.code,{className:"language-bash",children:"  themeConfig:\n    ({   \n      algolia: {\n        appId: 'YOURAPPID',\n        apiKey: 'apikeyprovided',\n        indexName: 'yourindexname',\n        contextualSearch: true,\n      },\n"})}),"\n",(0,o.jsx)(s.h3,{id:""})]})}function u(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,o.jsx)(s,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>l,x:()=>a});var o=n(6540);const i={},t=o.createContext(i);function l(e){const s=o.useContext(t);return o.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function a(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),o.createElement(t.Provider,{value:s},e.children)}}}]);