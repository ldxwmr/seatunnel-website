"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[99478],{3905:function(t,e,n){n.d(e,{Zo:function(){return c},kt:function(){return m}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function o(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function a(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?o(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var u=r.createContext({}),p=function(t){var e=r.useContext(u),n=e;return t&&(n="function"==typeof t?t(e):a(a({},e),t)),n},c=function(t){var e=p(t.components);return r.createElement(u.Provider,{value:e},t.children)},s={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,o=t.originalType,u=t.parentName,c=l(t,["components","mdxType","originalType","parentName"]),d=p(n),m=i,g=d["".concat(u,".").concat(m)]||d[m]||s[m]||o;return n?r.createElement(g,a(a({ref:e},c),{},{components:n})):r.createElement(g,a({ref:e},c))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var o=n.length,a=new Array(o);a[0]=d;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l.mdxType="string"==typeof t?t:i,a[1]=l;for(var p=2;p<o;p++)a[p]=n[p];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},85405:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return p},assets:function(){return c},toc:function(){return s},default:function(){return m}});var r=n(87462),i=n(63366),o=(n(67294),n(3905)),a=["components"],l={},u=void 0,p={unversionedId:"configuration/input-plugins/Socket",id:"version-1.x/configuration/input-plugins/Socket",title:"Socket",description:"Input plugin : Socket",source:"@site/versioned_docs/version-1.x/configuration/input-plugins/Socket.md",sourceDirName:"configuration/input-plugins",slug:"/configuration/input-plugins/Socket",permalink:"/docs/1.x/configuration/input-plugins/Socket",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-1.x/configuration/input-plugins/Socket.md",tags:[],version:"1.x",frontMatter:{},sidebar:"docs",previous:{title:"S3",permalink:"/docs/1.x/configuration/input-plugins/S3"},next:{title:"Output-Plugin",permalink:"/docs/1.x/category/output"}},c={},s=[{value:"Input plugin : Socket",id:"input-plugin--socket",level:2},{value:"Description",id:"description",level:3},{value:"Options",id:"options",level:3},{value:"host string",id:"host-string",level:5},{value:"port number",id:"port-number",level:5}],d={toc:s};function m(t){var e=t.components,n=(0,i.Z)(t,a);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"input-plugin--socket"},"Input plugin : Socket"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Author: InterestingLab"),(0,o.kt)("li",{parentName:"ul"},"Homepage: ",(0,o.kt)("a",{parentName:"li",href:"https://interestinglab.github.io/seatunnel-docs"},"https://interestinglab.github.io/seatunnel-docs")),(0,o.kt)("li",{parentName:"ul"},"Version: 1.1.0")),(0,o.kt)("h3",{id:"description"},"Description"),(0,o.kt)("p",null,"Read data over a TCP socket"),(0,o.kt)("h3",{id:"options"},"Options"),(0,o.kt)("table",null,(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"name"),(0,o.kt)("th",{parentName:"tr",align:null},"type"),(0,o.kt)("th",{parentName:"tr",align:null},"required"),(0,o.kt)("th",{parentName:"tr",align:null},"default value"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#host-string"},"host")),(0,o.kt)("td",{parentName:"tr",align:null},"string"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"localhost")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("a",{parentName:"td",href:"#port-number"},"port")),(0,o.kt)("td",{parentName:"tr",align:null},"number"),(0,o.kt)("td",{parentName:"tr",align:null},"no"),(0,o.kt)("td",{parentName:"tr",align:null},"9999")))),(0,o.kt)("h5",{id:"host-string"},"host ","[string]"),(0,o.kt)("p",null,"Socket server hostname"),(0,o.kt)("h5",{id:"port-number"},"port ","[number]"),(0,o.kt)("p",null,"Socket server port"))}m.isMDXComponent=!0}}]);