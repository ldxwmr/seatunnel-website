"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[66220],{3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return f}});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)t=i[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=r.createContext({}),s=function(e){var n=r.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=s(e.components);return r.createElement(u.Provider,{value:n},e.children)},c={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=s(t),f=a,k=m["".concat(u,".").concat(f)]||m[f]||c[f]||i;return t?r.createElement(k,o(o({ref:n},p),{},{components:t})):r.createElement(k,o({ref:n},p))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var i=t.length,o=new Array(i);o[0]=m;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},92305:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return l},contentTitle:function(){return u},metadata:function(){return s},assets:function(){return p},toc:function(){return c},default:function(){return f}});var r=t(87462),a=t(63366),i=(t(67294),t(3905)),o=["components"],l={},u="Common Options",s={unversionedId:"flink/configuration/sink-plugins/sink-plugin",id:"version-2.1.0/flink/configuration/sink-plugins/sink-plugin",title:"Common Options",description:"Sink Common Options [Flink]",source:"@site/versioned_docs/version-2.1.0/flink/configuration/sink-plugins/sink-plugin.md",sourceDirName:"flink/configuration/sink-plugins",slug:"/flink/configuration/sink-plugins/sink-plugin",permalink:"/zh-CN/docs/2.1.0/flink/configuration/sink-plugins/sink-plugin",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/versioned_docs/version-2.1.0/flink/configuration/sink-plugins/sink-plugin.md",tags:[],version:"2.1.0",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Kafka",permalink:"/zh-CN/docs/2.1.0/flink/configuration/sink-plugins/Kafka"},next:{title:"Druid",permalink:"/zh-CN/docs/2.1.0/flink/configuration/source-plugins/Druid"}},p={},c=[{value:"Sink Plugin common parameters",id:"sink-plugin-common-parameters",level:2},{value:"source_table_name string",id:"source_table_name-string",level:3},{value:"Examples",id:"examples",level:2}],m={toc:c};function f(e){var n=e.components,t=(0,a.Z)(e,o);return(0,i.kt)("wrapper",(0,r.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"common-options"},"Common Options"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"Sink Common Options ","[Flink]")),(0,i.kt)("h2",{id:"sink-plugin-common-parameters"},"Sink Plugin common parameters"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"source_table_name"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h3",{id:"source_table_name-string"},"source_table_name ","[string]"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"source_table_name")," is not specified, the current plugin is processing the data set ",(0,i.kt)("inlineCode",{parentName:"p"},"(dataStream/dataset)")," output by the previous plugin in the configuration file;"),(0,i.kt)("p",null,"When ",(0,i.kt)("inlineCode",{parentName:"p"},"source_table_name")," is specified, the current plugin is processing the data set corresponding to this parameter."),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-bash"},'source {\n    FakeSourceStream {\n      result_table_name = "fake"\n      field_name = "name,age"\n    }\n}\n\ntransform {\n    sql {\n      source_table_name = "fake"\n      sql = "select name from fake"\n      result_table_name = "fake_name"\n    }\n    sql {\n      source_table_name = "fake"\n      sql = "select age from fake"\n      result_table_name = "fake_age"\n    }\n}\n\nsink {\n    console {\n      source_table_name = "fake_name"\n    }\n}\n')),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"If ",(0,i.kt)("inlineCode",{parentName:"p"},"source_table_name")," is not specified, the console outputs the data of the last transform, and if it is set to ",(0,i.kt)("inlineCode",{parentName:"p"},"fake_name")," , it will output the data of ",(0,i.kt)("inlineCode",{parentName:"p"},"fake_name"))))}f.isMDXComponent=!0}}]);