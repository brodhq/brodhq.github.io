(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[86],{50676:function(e,r,n){"use strict";function t(e,r){(null==r||r>e.length)&&(r=e.length);for(var n=0,t=new Array(r);n<r;n++)t[n]=e[n];return t}n.d(r,{Z:function(){return t}})},17375:function(e,r,n){"use strict";function t(e,r){if(null==e)return{};var n,t,s=function(e,r){if(null==e)return{};var n,t,s={},a=Object.keys(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||(s[n]=e[n]);return s}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)n=a[t],r.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}n.d(r,{Z:function(){return t}})},34699:function(e,r,n){"use strict";n.d(r,{Z:function(){return s}});var t=n(82961);function s(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var n=[],t=!0,s=!1,a=void 0;try{for(var i,c=e[Symbol.iterator]();!(t=(i=c.next()).done)&&(n.push(i.value),!r||n.length!==r);t=!0);}catch(o){s=!0,a=o}finally{try{t||null==c.return||c.return()}finally{if(s)throw a}}return n}}(e,r)||(0,t.Z)(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}},82961:function(e,r,n){"use strict";n.d(r,{Z:function(){return s}});var t=n(50676);function s(e,r){if(e){if("string"===typeof e)return(0,t.Z)(e,r);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?(0,t.Z)(e,r):void 0}}},94184:function(e,r){var n;!function(){"use strict";var t={}.hasOwnProperty;function s(){for(var e=[],r=0;r<arguments.length;r++){var n=arguments[r];if(n){var a=typeof n;if("string"===a||"number"===a)e.push(n);else if(Array.isArray(n)){if(n.length){var i=s.apply(null,n);i&&e.push(i)}}else if("object"===a)if(n.toString===Object.prototype.toString)for(var c in n)t.call(n,c)&&n[c]&&e.push(c);else e.push(n.toString())}}return e.join(" ")}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(r,[]))||(e.exports=n)}()},68399:function(e,r,n){"use strict";n.d(r,{V:function(){return o}});var t=n(85893),s=n(34699),a=n(17375),i=n(22152),c=n(34465),o=(n(67294),function(e){e.className;var r=e.releases,n=void 0===r?[]:r,o=e.namespace,f=void 0===o?"guides":o,p=(0,a.Z)(e,["className","releases","namespace"]),d=(0,c.MR)(n,"date","desc"),m=(0,s.Z)(d,1)[0];return(0,t.jsxs)("div",{className:"space-y-5",children:[m&&(0,t.jsxs)("a",{className:"underline text-xl text-gray-800",href:"#",children:["News: ",m.title]}),p.sections.map((function(e){return(0,t.jsx)(i.Menu,{title:e.name,children:e.guides.sort(l).map((function(e,r){return(0,t.jsxs)("div",{className:"flex text-gray-500",children:[(0,t.jsxs)("span",{className:"w-2.5",children:[r+1,"."]}),(0,t.jsx)("li",{className:"ml-2",children:(0,t.jsx)(i.NavLink,{href:u(f,e),reverse:!0,children:e.title})})]},e.slug)}))},e.name)}))]})}),u=function(e,r){return"/".concat(e,"/").concat(r.slug)},l=function(e,r){return e.number>r.number?1:0};n(54319),n(94184)},62393:function(e,r,n){"use strict";n.d(r,{pG:function(){return u},KE:function(){return o},VO:function(){return t.V}});var t=n(68399),s=n(85893),a=n(17375),i=n(41664),c=(n(67294),n(34465)),o=function(e){e.className;var r=e.post;return(0,s.jsxs)("p",{className:"text-gray-400 prose-sm",children:[(0,s.jsx)("span",{className:"italic",children:(0,c.p6)(r.date)})," \xb7"," ",(0,s.jsxs)("span",{className:"italic",children:["by ",r.author]})," \xb7"," ",(0,s.jsxs)("span",{children:[(0,s.jsx)("span",{className:"italic",children:"in "}),(0,s.jsx)("a",{className:"underline",href:"",children:r.category})]})]})},u=function(e){e.className;var r=e.post,n=((0,a.Z)(e,["className","post"]),"/blog/".concat(r.slug));return(0,s.jsxs)("div",{className:"space-y-2",children:[(0,s.jsxs)("div",{children:[(0,s.jsx)("h2",{className:"prose prose-2xl uppercase",children:(0,s.jsx)(i.default,{href:n,children:(0,s.jsx)("span",{className:"no-underline cursor-pointer",children:r.title})})}),(0,s.jsx)(o,{post:r})]}),(0,s.jsx)("p",{className:"text-gray-600",children:r.summary}),(0,s.jsx)("span",{className:"text-primary-800 underline cursor-pointer",children:(0,s.jsx)(i.default,{href:n,children:"Continue reading \u2192"})})]})}},33148:function(e,r,n){"use strict";n.r(r),n.d(r,{__N_SSG:function(){return c}});var t=n(85893),s=n(54319),a=n(34465),i=n(62393),c=(n(67294),!0);r.default=function(e){return(0,t.jsxs)(s.Content.Layout,{className:"space-y-3",title:"Krans | Docs | ".concat(e.api.title),description:"",right:(0,t.jsx)(i.VO,{namespace:"docs",sections:e.sections,releases:e.releases}),children:[(0,t.jsx)("h2",{className:"text-gray-400",children:(0,a.MI)(e.api.section)}),(0,t.jsx)("h1",{className:"prose text-4xl",children:e.api.title}),(0,t.jsx)("ul",{className:"space-y-2 mt-10",children:e.api.subsections.map((function(e,r){return(0,t.jsxs)("li",{className:"flex",children:[(0,t.jsxs)("div",{className:"w-5 text-gray-500",children:[r+1,"."]}),(0,t.jsx)("a",{className:"text-primary-800 underline",href:"#".concat(e.slug),children:e.name})]},r)}))}),(0,t.jsx)("div",{className:"mt-10 space-y-5",dangerouslySetInnerHTML:{__html:e.api.content}})]})}},34465:function(e,r,n){"use strict";n.d(r,{p6:function(){return i},MR:function(){return l},MI:function(){return a}});var t=n(53406),s=n.n(t);function a(e){return s()(e.replace("-"," "))}function i(e){var r="string"===typeof e?new Date(e):e;return new Intl.DateTimeFormat(void 0,{dateStyle:"long"}).format(r)}var c=n(50676);var o=n(82961);function u(e){return function(e){if(Array.isArray(e))return(0,c.Z)(e)}(e)||function(e){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||(0,o.Z)(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function l(e,r,n){var t="asc"===n?function(e,n){return e[r]<n[r]?-1:1}:function(e,n){return e[r]>n[r]?-1:1};return u(e.sort(t))}},58797:function(e,r,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/[...slug]",function(){return n(33148)}])},53406:function(e){"use strict";const r=e=>{if("string"!==typeof e)throw new TypeError("Expected a string");return e.toLowerCase().replace(/(?:^|\s|-)\S/g,(e=>e.toUpperCase()))};e.exports=r,e.exports.default=r}},function(e){e.O(0,[774,474,319,888,179],(function(){return r=58797,e(e.s=r);var r}));var r=e.O();_N_E=r}]);