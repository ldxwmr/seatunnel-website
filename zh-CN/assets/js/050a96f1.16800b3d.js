"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[55645],{3905:function(t,e,n){n.d(e,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function i(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){i(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function l(t,e){if(null==t)return{};var n,r,i=function(t,e){if(null==t)return{};var n,r,i={},a=Object.keys(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||(i[n]=t[n]);return i}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(r=0;r<a.length;r++)n=a[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(i[n]=t[n])}return i}var c=r.createContext({}),s=function(t){var e=r.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},p=function(t){var e=s(t.components);return r.createElement(c.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,i=t.mdxType,a=t.originalType,c=t.parentName,p=l(t,["components","mdxType","originalType","parentName"]),d=s(n),m=i,g=d["".concat(c,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(g,o(o({ref:e},p),{},{components:n})):r.createElement(g,o({ref:e},p))}));function m(t,e){var n=arguments,i=e&&e.mdxType;if("string"==typeof t||i){var a=n.length,o=new Array(a);o[0]=d;var l={};for(var c in e)hasOwnProperty.call(e,c)&&(l[c]=e[c]);l.originalType=t,l.mdxType="string"==typeof t?t:i,o[1]=l;for(var s=2;s<a;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},67052:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return p},toc:function(){return u},default:function(){return m}});var r=n(87462),i=n(63366),a=(n(67294),n(3905)),o=["components"],l={},c="MongoDB",s={unversionedId:"connector/sink/MongoDB",id:"connector/sink/MongoDB",title:"MongoDB",description:"Description",source:"@site/docs/connector/sink/MongoDB.md",sourceDirName:"connector/sink",slug:"/connector/sink/MongoDB",permalink:"/zh-CN/docs/connector/sink/MongoDB",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector/sink/MongoDB.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Kudu",permalink:"/zh-CN/docs/connector/sink/Kudu"},next:{title:"Phoenix",permalink:"/zh-CN/docs/connector/sink/Phoenix"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"writeconfig.uri string",id:"writeconfiguri-string",level:3},{value:"writeconfig.database string",id:"writeconfigdatabase-string",level:3},{value:"writeconfig.collection string",id:"writeconfigcollection-string",level:3},{value:"writeconfig.* string",id:"writeconfig-string",level:3},{value:"Examples",id:"examples",level:2}],d={toc:u};function m(t){var e=t.components,n=(0,i.Z)(t,o);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"mongodb"},"MongoDB"),(0,a.kt)("h2",{id:"description"},"Description"),(0,a.kt)("p",null,"Write data to ",(0,a.kt)("inlineCode",{parentName:"p"},"MongoDB")),(0,a.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,a.kt)("div",{parentName:"div",className:"admonition-heading"},(0,a.kt)("h5",{parentName:"div"},(0,a.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,a.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,a.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,a.kt)("div",{parentName:"div",className:"admonition-content"},(0,a.kt)("p",{parentName:"div"},"Engine Supported and plugin name"),(0,a.kt)("ul",{parentName:"div",className:"contains-task-list"},(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","Spark: MongoDB"),(0,a.kt)("li",{parentName:"ul",className:"task-list-item"},(0,a.kt)("input",{parentName:"li",type:"checkbox",checked:!1,disabled:!0})," ","Flink")))),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",{parentName:"tr",align:null},"name"),(0,a.kt)("th",{parentName:"tr",align:null},"type"),(0,a.kt)("th",{parentName:"tr",align:null},"required"),(0,a.kt)("th",{parentName:"tr",align:null},"default value"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"writeconfig.uri"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"writeconfig.database"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"writeconfig.collection"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"yes"),(0,a.kt)("td",{parentName:"tr",align:null},"-")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",{parentName:"tr",align:null},"writeconfig.*"),(0,a.kt)("td",{parentName:"tr",align:null},"string"),(0,a.kt)("td",{parentName:"tr",align:null},"no"),(0,a.kt)("td",{parentName:"tr",align:null},"-")))),(0,a.kt)("h3",{id:"writeconfiguri-string"},"writeconfig.uri ","[string]"),(0,a.kt)("p",null,"uri to write to mongoDB"),(0,a.kt)("h3",{id:"writeconfigdatabase-string"},"writeconfig.database ","[string]"),(0,a.kt)("p",null,"database to write to mongoDB"),(0,a.kt)("h3",{id:"writeconfigcollection-string"},"writeconfig.collection ","[string]"),(0,a.kt)("p",null,"collection to write to mongoDB"),(0,a.kt)("h3",{id:"writeconfig-string"},"writeconfig.* ","[string]"),(0,a.kt)("p",null,"More other parameters can be configured here, see ",(0,a.kt)("a",{parentName:"p",href:"https://docs.mongodb.com/spark-connector/current/configuration/"},"MongoDB Configuration")," for details, see the Output Configuration section. The way to specify parameters is to add a prefix to the original parameter name ",(0,a.kt)("inlineCode",{parentName:"p"},"writeconfig.")," For example, the way to set ",(0,a.kt)("inlineCode",{parentName:"p"},"localThreshold")," is ",(0,a.kt)("inlineCode",{parentName:"p"},"writeconfig.localThreshold=20")," . If you do not specify these optional parameters, the default values of the official MongoDB documentation will be used."),(0,a.kt)("h2",{id:"examples"},"Examples"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},'mongodb {\n    writeconfig.uri = "mongodb://username:password@127.0.0.1:27017/test_db"\n    writeconfig.database = "test_db"\n    writeconfig.collection = "test_collection"\n}\n')))}m.isMDXComponent=!0}}]);