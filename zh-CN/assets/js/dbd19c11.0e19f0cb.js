"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[13565],{3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return h}});var r=n(67294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),d=s(n),h=o,f=d["".concat(c,".").concat(h)]||d[h]||p[h]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=d;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},24517:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return c},metadata:function(){return s},assets:function(){return u},toc:function(){return p},default:function(){return h}});var r=n(87462),o=n(63366),a=(n(67294),n(3905)),i=["components"],l={},c="How To Add New License",s={unversionedId:"contribution/new-license",id:"contribution/new-license",title:"How To Add New License",description:"ASF 3RD PARTY LICENSE POLICY",source:"@site/docs/contribution/new-license.md",sourceDirName:"contribution",slug:"/contribution/new-license",permalink:"/zh-CN/docs/contribution/new-license",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/contribution/new-license.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Set Up Develop Environment",permalink:"/zh-CN/docs/contribution/setup"},next:{title:"FAQ",permalink:"/zh-CN/docs/faq"}},u={},p=[{value:"ASF 3RD PARTY LICENSE POLICY",id:"asf-3rd-party-license-policy",level:3},{value:"How to Legally Use 3rd Party Open-source Software in the SeaTunnel",id:"how-to-legally-use-3rd-party-open-source-software-in-the-seatunnel",level:3},{value:"SeaTunnel-License Check Rules",id:"seatunnel-license-check-rules",level:3},{value:"References",id:"references",level:3}],d={toc:p};function h(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"how-to-add-new-license"},"How To Add New License"),(0,a.kt)("h3",{id:"asf-3rd-party-license-policy"},"ASF 3RD PARTY LICENSE POLICY"),(0,a.kt)("p",null,"You have to pay attention to the following open-source software protocols which Apache projects support when you intend to add a new feature to the SeaTunnel (or other Apache projects), which functions refers to other open-source software references."),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://apache.org/legal/resolved.html"},"ASF 3RD PARTY LICENSE POLICY")),(0,a.kt)("p",null,"If the 3rd party software is not present at the above policy, we could't that accept your code."),(0,a.kt)("h3",{id:"how-to-legally-use-3rd-party-open-source-software-in-the-seatunnel"},"How to Legally Use 3rd Party Open-source Software in the SeaTunnel"),(0,a.kt)("p",null,"Moreover, when we intend to refer a new software ( not limited to 3rd party jar, text, CSS, js, pics, icons, audios etc and modifications based on 3rd party files) to our project, we need to use them legally in addition to the permission of ASF. Refer to the following article:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apache.org/dev/licensing-howto.html"},'COMMUNITY-LED DEVELOPMENT "THE APACHE WAY"'))),(0,a.kt)("p",null,'For example, we should contain the NOTICE file (most of open-source project has NOTICE file, generally under root directory) of ZooKeeper in our project when we are using ZooKeeper. As the Apache explains, "Work" shall mean the work of authorship, whether in Source or Object form, made available under the License, as indicated by a copyright notice that is included in or attached to the work.'),(0,a.kt)("p",null,"We are not going to dive into every 3rd party open-source license policy in here, you may look up them if interested."),(0,a.kt)("h3",{id:"seatunnel-license-check-rules"},"SeaTunnel-License Check Rules"),(0,a.kt)("p",null,"In general, we would have our License-check scripts to our project. SeaTunnel-License-Check is provided by ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/apache/skywalking"},"SkyWalking")," which differ a bit from other open-source projects. All in all, we are trying to make sure avoiding the license issues at the first time."),(0,a.kt)("p",null,"We need to follow the following steps when we need to add new jars or external resources:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Add the name and the version of the jar file in the known-dependencies.txt"),(0,a.kt)("li",{parentName:"ul"},"Add relevant maven repository address under 'seatunnel-dist/release-docs/LICENSE' directory"),(0,a.kt)("li",{parentName:"ul"},"Append relevant NOTICE files under 'seatunnel-dist/release-docs/NOTICE' directory and make sure they are no different to the original repository"),(0,a.kt)("li",{parentName:"ul"},"Add relevant source code protocols under 'seatunnel-dist/release-docs/licenses' directory and the file name should be named as license+filename.txt. Eg: license-zk.txt")),(0,a.kt)("h3",{id:"references"},"References"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apache.org/dev/licensing-howto.html"},'COMMUNITY-LED DEVELOPMENT "THE APACHE WAY"')),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://apache.org/legal/resolved.html"},"ASF 3RD PARTY LICENSE POLICY"))))}h.isMDXComponent=!0}}]);