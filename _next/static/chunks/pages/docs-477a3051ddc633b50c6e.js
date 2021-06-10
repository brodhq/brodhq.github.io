(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[172],{22122:function(e,t,r){"use strict";function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}r.d(t,{Z:function(){return n}})},21939:function(e,t,r){"use strict";r.d(t,{q:function(){return m},h:function(){return f}});var n=r(96156),i=r(85893),s=r(22122),c=r(20150);function o(){var e;return{baseUrl:null!==(e="https://krans.io")?e:c.CF.F}}var a=r(9008),u=(r(67294),r(32593)),l=r.n(u);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,n.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=function(e){var t,r=(0,s.Z)({},e),n=o().baseUrl;return(0,i.jsxs)(a.default,{children:[(0,i.jsx)("title",{children:r.title}),(0,i.jsx)("meta",{name:"description",content:r.description}),"(",(0,i.jsx)("meta",{property:"og:url",content:n}),(0,i.jsx)("meta",{property:"og:site_name",content:n}),(0,i.jsx)("meta",{property:"og:image",content:(t=l(),[n.replace(/\/$/,""),t].join(""))},"image"),(0,i.jsx)("meta",{property:"og:title",content:r.title}),(0,i.jsx)("meta",{property:"og:description",content:r.description}),(0,i.jsx)("meta",{name:"viewport",content:"initial-scale=1.0, width=device-width"}),(0,i.jsx)("meta",{property:"twitter:title",content:r.title}),(0,i.jsx)("meta",{name:"twitter:card",content:"summary"}),r.children]})},m=function(e){var t,r=(0,s.Z)({},e),n=o().baseUrl;return(0,i.jsxs)(f,d(d({},r),{},{children:[(0,i.jsx)("meta",{property:"og:type",content:"article"}),(0,i.jsx)("meta",{property:"og:image",content:(t=r.image,[n.replace(/\/$/,""),t].join(""))},"image"),r.author&&(0,i.jsx)("meta",{property:"article:author",content:r.author})]}))}},68399:function(e,t,r){"use strict";r.d(t,{V:function(){return a}});var n=r(85893),i=r(34699),s=r(17375),c=r(22152),o=r(23115),a=(r(67294),function(e){e.className;var t=e.releases,r=void 0===t?[]:t,a=e.namespace,p=void 0===a?"guides":a,d=(0,s.Z)(e,["className","releases","namespace"]),f=(0,o.MR)(r,"date","desc"),m=(0,i.Z)(f,1)[0];return(0,n.jsxs)("div",{className:"space-y-5",children:[m&&(0,n.jsxs)("a",{className:"underline text-xl text-gray-800",href:"#",children:["News: ",m.title]}),d.sections.map((function(e){return(0,n.jsx)(c.Menu,{title:e.name,children:e.guides.sort(l).map((function(e,t){return(0,n.jsxs)("div",{className:"flex text-gray-500",children:[(0,n.jsxs)("span",{className:"w-2.5",children:[t+1,"."]}),(0,n.jsx)("li",{className:"ml-2",children:(0,n.jsx)(c.NavLink,{href:u(p,e),reverse:!0,children:e.title})})]},e.slug)}))},e.name)}))]})}),u=function(e,t){return"/".concat(e,"/").concat(t.slug)},l=function(e,t){return e.number>t.number?1:0};r(54319),r(94184)},79776:function(e,t,r){"use strict";r.d(t,{k:function(){return c},G:function(){return s}});var n={home:[{title:i("Data to enrich your online business"),description:"Homepage for Krans"}],docs:[{title:i("API"),description:"Documentation for Krans"},function(e){return{title:i("API",e.title),description:e.title}}],guides:[{title:i("Guides"),description:"Guides for Krans"},function(e){return{title:i("Guides",e.title),description:e.title}}],examples:[{title:i("Examples"),description:"Practical code examples for Krans"},function(e){return{title:i("Examples",e.title),description:e.title}}],blog:[{title:i("Blog"),description:"Blog about web-scraping and data-integration in NodeJS"},function(e){return{title:i("Blog",e.title),description:e.summary}}]};function i(){for(var e=arguments.length,t=new Array(e),r=0;r<e;r++)t[r]=arguments[r];return["Krans"].concat(t).join(" | ")}function s(e){return n[e][0]}function c(e,t){return n[e][1](t)}},68274:function(e,t,r){"use strict";r.d(t,{V:function(){return n},v:function(){return i}});var n={};r.r(n),r.d(n,{A:function(){return p}});var i={};r.r(i),r.d(i,{A:function(){return d}});var s=r(85893),c=r(87329),o=r(17375),a=r(54319),u=r(21939),l=(r(67294),r(94503)),p=function(e){e.className;var t=e.breadcrumbs,r=void 0===t?[]:t,n=e.description,i=void 0===n?"":n,p=(0,o.Z)(e,["className","breadcrumbs","description"]),d=["Krans"].concat((0,c.Z)(r)).join(" | ");return(0,s.jsxs)(a.Content.Layout,{header:(0,s.jsx)(l.yW,{}),title:d,description:i,right:p.right,children:[(0,s.jsx)(u.h,{title:d,description:i}),p.children]})},d=function(e){e.className;var t=e.description,r=e.hero,n=(0,o.Z)(e,["className","description","hero"]);return(0,s.jsx)(a.Landing.Layout,{header:(0,s.jsxs)("div",{className:"h-screen",children:[(0,s.jsx)(l.h4,{brandClassName:"text-gray-400",itemClassName:"text-gray-300 hover:text-gray-400"}),r]}),title:n.title,description:t,children:n.children})}},73024:function(e,t,r){"use strict";r.r(t),r.d(t,{__N_SSG:function(){return f}});var n=r(85893),i=r(96156),s=r(17375),c=r(22152),o=r(68274),a=(r(67294),r(68399)),u=r(21939),l=r(79776);function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function d(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){(0,i.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var f=!0;t.default=function(e){var t=e.docs,r=(0,s.Z)(e,["docs"]),i=(0,l.G)("docs");return(0,n.jsxs)(o.V.A,{right:(0,n.jsx)(a.V,{namespace:"docs",sections:t,releases:r.releases}),children:[(0,n.jsx)(u.h,d({},i)),(0,n.jsxs)("div",{className:"space-y-5",children:[(0,n.jsx)("h2",{className:"prose prose-2xl",children:"API"}),(0,n.jsx)("p",{className:"prose",children:"Click on the cases below to learn more about how companies across different industries are using the power of Geis and its ecosystem to create and grow their businesses. Examples are listed in the order they have been published."}),(0,n.jsxs)("p",{className:"prose",children:["Want to see more companies? Check out the"," ",(0,n.jsx)(c.Link,{href:"/",children:"Geis Companies website"}),", which is maintained by the community."]})]})]})}},48348:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs",function(){return r(73024)}])},32593:function(e){e.exports="/_next/static/images/icon-brand-gradient-fill-bf8162a07751a42ce3538c2e2433fc70.png"}},function(e){e.O(0,[774,545,503,888,179],(function(){return t=48348,e(e.s=t);var t}));var t=e.O();_N_E=t}]);