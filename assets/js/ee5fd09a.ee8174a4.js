"use strict";(self.webpackChunkjamesdevdocs=self.webpackChunkjamesdevdocs||[]).push([[2046],{6972:(e,t,o)=>{o.r(t),o.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>l,frontMatter:()=>i,metadata:()=>n,toc:()=>u});var a=o(4848),s=o(8453);const i={slug:"github-docsearch",title:"GitHub and DocSearch",authors:["jgray"],tags:["Docusaurus","GitHub","GitHub Pages","DocSearch"],sidebar_position:2},r="Docusaurus in GitHub",n={permalink:"/JamesDevDocsSrc/blog/github-docsearch",source:"@site/blog/2024-03-20-github-docsearch.md",title:"GitHub and DocSearch",description:"Initially I goofed around with getting the Docusaurus site into GH using two different repos, one for the site source and one for the build directory. After goofing with that for a little bit, I stumbled upon the command to deploy to a different branch within your repo:",date:"2024-03-20T00:00:00.000Z",formattedDate:"March 20, 2024",tags:[{label:"Docusaurus",permalink:"/JamesDevDocsSrc/blog/tags/docusaurus"},{label:"GitHub",permalink:"/JamesDevDocsSrc/blog/tags/git-hub"},{label:"GitHub Pages",permalink:"/JamesDevDocsSrc/blog/tags/git-hub-pages"},{label:"DocSearch",permalink:"/JamesDevDocsSrc/blog/tags/doc-search"}],readingTime:1.105,hasTruncateMarker:!1,authors:[{name:"James Gray",title:"Sr Program Manager, Algolia DocSearch",url:"https://github.com/randombeeper",imageURL:"https://github.com/randombeeper.png",key:"jgray"}],frontMatter:{slug:"github-docsearch",title:"GitHub and DocSearch",authors:["jgray"],tags:["Docusaurus","GitHub","GitHub Pages","DocSearch"],sidebar_position:2},unlisted:!1,nextItem:{title:"Welcome",permalink:"/JamesDevDocsSrc/blog/welcome"}},c={authorsImageUrls:[void 0]},u=[];function h(e){const t={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:"Initially I goofed around with getting the Docusaurus site into GH using two different repos, one for the site source and one for the build directory. After goofing with that for a little bit, I stumbled upon the command to deploy to a different branch within your repo:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"npm run deploy\n"})}),"\n",(0,a.jsxs)(t.p,{children:["This automatically publishes your build to the branch ",(0,a.jsx)("code",{children:"gh-pages"})," which GH Pages is also easily tuned into. This was the way to go."]}),"\n",(0,a.jsx)(t.p,{children:"GitHub Deployed! Look for the tutorial soon."}),"\n",(0,a.jsx)(t.h1,{id:"github-pages",children:"GitHub Pages"}),"\n",(0,a.jsx)(t.p,{children:'After commiting my site into GH as well as publishing the static contents to the 2nd branch, it was time to setup GH Pages. This is easily configured within your GH repo under settings->pages. Use "Deploy from a branch" and set the Branch to "gh-pages". Within a few minutes the site will be live and you\'ll see a button on the page to visit it.'}),"\n",(0,a.jsx)(t.p,{children:"GitHub Pages Deployed! Look for the tutorial soon."}),"\n",(0,a.jsx)(t.h1,{id:"docsearch",children:"DocSearch"}),"\n",(0,a.jsxs)(t.p,{children:["Now that I've got an actual doc site on the internet, it's time to set up a search mechanism using Algolia DocSearch. Visit ",(0,a.jsx)(t.a,{href:"https://docsearch.algolia.com/apply/",children:"https://docsearch.algolia.com/apply/"}),", put in the URL of the doc site, your email, your GH repo from previous step, and submit the form. Provided you meet all the criteria you'll be accepted into the program."]}),"\n",(0,a.jsx)(t.p,{children:"That's all for today..."})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},8453:(e,t,o)=>{o.d(t,{R:()=>r,x:()=>n});var a=o(6540);const s={},i=a.createContext(s);function r(e){const t=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function n(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(i.Provider,{value:t},e.children)}}}]);