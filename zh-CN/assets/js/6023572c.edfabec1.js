"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[89852],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),s=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),m=s(n),d=r,b=m["".concat(u,".").concat(d)]||m[d]||c[d]||l;return n?a.createElement(b,o(o({ref:t},p),{},{components:n})):a.createElement(b,o({ref:t},p))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},58215:function(e,t,n){n.d(t,{Z:function(){return r}});var a=n(67294);function r(e){var t=e.children,n=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:r},t)}},9877:function(e,t,n){n.d(t,{Z:function(){return p}});var a=n(87462),r=n(67294),l=n(72389),o=n(65450),i=n(86010),u="tabItem_LplD";function s(e){var t,n,l,s=e.lazy,p=e.block,c=e.defaultValue,m=e.values,d=e.groupId,b=e.className,f=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,o.lx)(k,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var g=null===c?c:null!=(t=null!=c?c:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(l=f[0])?void 0:l.props.value;if(null!==g&&!k.some((function(e){return e.value===g})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+g+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=(0,o.UB)(),y=v.tabGroupChoices,N=v.setTabGroupChoices,_=(0,r.useState)(g),w=_[0],C=_[1],T=[],O=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var x=y[d];null!=x&&x!==w&&k.some((function(e){return e.value===x}))&&C(x)}var E=function(e){var t=e.currentTarget,n=T.indexOf(t),a=k[n].value;a!==w&&(O(t),C(a),null!=d&&N(d,a))},S=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=T.indexOf(e.currentTarget)+1;n=T[a]||T[0];break;case"ArrowLeft":var r=T.indexOf(e.currentTarget)-1;n=T[r]||T[T.length-1]}null==(t=n)||t.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":p},b)},k.map((function(e){var t=e.value,n=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:w===t?0:-1,"aria-selected":w===t,key:t,ref:function(e){return T.push(e)},onKeyDown:S,onFocus:E,onClick:E},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":w===t})}),null!=n?n:t)}))),s?(0,r.cloneElement)(f.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==w})}))))}function p(e){var t=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(t)},e))}},48404:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return s},contentTitle:function(){return p},metadata:function(){return c},assets:function(){return m},toc:function(){return d},default:function(){return f}});var a=n(87462),r=n(63366),l=(n(67294),n(3905)),o=n(9877),i=n(58215),u=["components"],s={},p="Common Options",c={unversionedId:"connector/source/common-options",id:"connector/source/common-options",title:"Common Options",description:"Source common parameters",source:"@site/docs/connector/source/common-options.mdx",sourceDirName:"connector/source",slug:"/connector/source/common-options",permalink:"/zh-CN/docs/connector/source/common-options",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector/source/common-options.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"WebhookStream",permalink:"/zh-CN/docs/connector/source/Webhook"},next:{title:"Neo4j",permalink:"/zh-CN/docs/connector/source/neo4j"}},m={},d=[{value:"Source common parameters",id:"source-common-parameters",level:2},{value:"result_table_name string",id:"result_table_name-string",level:3},{value:"table_name string",id:"table_name-string",level:3},{value:"result_table_name string",id:"result_table_name-string-1",level:3},{value:"field_name string",id:"field_name-string",level:3},{value:"Example",id:"example",level:2}],b={toc:d};function f(e){var t=e.components,n=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},b,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"common-options"},"Common Options"),(0,l.kt)("h2",{id:"source-common-parameters"},"Source common parameters"),(0,l.kt)(o.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"spark",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result_table_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"result_table_name-string"},"result_table_name ","[string]"),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"result_table_name")," is not specified, the data processed by this plug-in will not be registered as a data set that can be directly accessed by other plugins, or called a temporary table (table);"),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"result_table_name")," is specified, the data processed by this plug-in will be registered as a data set (dataset) that can be directly accessed by other plug-ins, or called a temporary table (table). The dataset registered here can be directly accessed by other plugins by specifying ",(0,l.kt)("inlineCode",{parentName:"p"},"source_table_name"),"."),(0,l.kt)("h3",{id:"table_name-string"},"table_name ","[string]"),(0,l.kt)("p",null,"[Deprecated since v1.4]"," The function is the same as ",(0,l.kt)("inlineCode",{parentName:"p"},"result_table_name")," , this parameter will be deleted in subsequent Release versions, and ",(0,l.kt)("inlineCode",{parentName:"p"},"result_table_name"),"  parameter is recommended.")),(0,l.kt)(i.Z,{value:"flink",mdxType:"TabItem"},(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"result_table_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"field_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"result_table_name-string-1"},"result_table_name ","[string]"),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"result_table_name")," is not specified, the data processed by this plugin will not be registered as a data set ",(0,l.kt)("inlineCode",{parentName:"p"},"(dataStream/dataset)")," that can be directly accessed by other plugins, or called a temporary table ",(0,l.kt)("inlineCode",{parentName:"p"},"(table)")," ;"),(0,l.kt)("p",null,"When ",(0,l.kt)("inlineCode",{parentName:"p"},"result_table_name")," is specified, the data processed by this plugin will be registered as a data set ",(0,l.kt)("inlineCode",{parentName:"p"},"(dataStream/dataset)")," that can be directly accessed by other plugins, or called a temporary table ",(0,l.kt)("inlineCode",{parentName:"p"},"(table)")," . The data set ",(0,l.kt)("inlineCode",{parentName:"p"},"(dataStream/dataset)")," registered here can be directly accessed by other plugins by specifying ",(0,l.kt)("inlineCode",{parentName:"p"},"source_table_name")," ."),(0,l.kt)("h3",{id:"field_name-string"},"field_name ","[string]"),(0,l.kt)("p",null,"When the data is obtained from the upper-level plug-in, you can specify the name of the obtained field, which is convenient for use in subsequent sql plugins."))),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)(o.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"spark",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'fake {\n    result_table_name = "view_table"\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The result of the data source ",(0,l.kt)("inlineCode",{parentName:"p"},"fake")," will be registered as a temporary table named ",(0,l.kt)("inlineCode",{parentName:"p"},"view_table")," . This temporary table can be used by any Filter or Output plugin by specifying ",(0,l.kt)("inlineCode",{parentName:"p"},"source_table_name")," ."))),(0,l.kt)(i.Z,{value:"flink",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},'source {\n    FakeSourceStream {\n        result_table_name = "fake"\n        field_name = "name,age"\n    }\n}\n')),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"The result of the data source ",(0,l.kt)("inlineCode",{parentName:"p"},"FakeSourceStream")," will be registered as a temporary table named ",(0,l.kt)("inlineCode",{parentName:"p"},"fake")," . This temporary table can be used by any ",(0,l.kt)("inlineCode",{parentName:"p"},"Transform")," or ",(0,l.kt)("inlineCode",{parentName:"p"},"Sink")," plugin by specifying ",(0,l.kt)("inlineCode",{parentName:"p"},"source_table_name")," ."),(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("inlineCode",{parentName:"p"},"field_name")," names the two columns of the temporary table ",(0,l.kt)("inlineCode",{parentName:"p"},"name")," and ",(0,l.kt)("inlineCode",{parentName:"p"},"age")," respectively.")))))}f.isMDXComponent=!0}}]);