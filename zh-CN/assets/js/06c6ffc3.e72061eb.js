"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[11007],{3905:function(e,n,t){t.d(n,{Zo:function(){return c},kt:function(){return f}});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)t=l[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),s=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=s(e.components);return a.createElement(u.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},d=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=s(t),f=r,m=d["".concat(u,".").concat(f)]||d[f]||p[f]||l;return t?a.createElement(m,o(o({ref:n},c),{},{components:t})):a.createElement(m,o({ref:n},c))}));function f(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=t.length,o=new Array(l);o[0]=d;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var s=2;s<l;s++)o[s]=t[s];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}d.displayName="MDXCreateElement"},58215:function(e,n,t){t.d(n,{Z:function(){return r}});var a=t(67294);function r(e){var n=e.children,t=e.hidden,r=e.className;return a.createElement("div",{role:"tabpanel",hidden:t,className:r},n)}},9877:function(e,n,t){t.d(n,{Z:function(){return c}});var a=t(87462),r=t(67294),l=t(72389),o=t(65450),i=t(86010),u="tabItem_LplD";function s(e){var n,t,l,s=e.lazy,c=e.block,p=e.defaultValue,d=e.values,f=e.groupId,m=e.className,y=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=d?d:y.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),h=(0,o.lx)(k,(function(e,n){return e.value===n.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var v=null===p?p:null!=(n=null!=p?p:null==(t=y.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(l=y[0])?void 0:l.props.value;if(null!==v&&!k.some((function(e){return e.value===v})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+v+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var g=(0,o.UB)(),b=g.tabGroupChoices,w=g.setTabGroupChoices,T=(0,r.useState)(v),O=T[0],N=T[1],E=[],S=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=f){var x=b[f];null!=x&&x!==O&&k.some((function(e){return e.value===x}))&&N(x)}var C=function(e){var n=e.currentTarget,t=E.indexOf(n),a=k[t].value;a!==O&&(S(n),N(a),null!=f&&w(f,a))},D=function(e){var n,t=null;switch(e.key){case"ArrowRight":var a=E.indexOf(e.currentTarget)+1;t=E[a]||E[0];break;case"ArrowLeft":var r=E.indexOf(e.currentTarget)-1;t=E[r]||E[E.length-1]}null==(n=t)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":c},m)},k.map((function(e){var n=e.value,t=e.label,l=e.attributes;return r.createElement("li",(0,a.Z)({role:"tab",tabIndex:O===n?0:-1,"aria-selected":O===n,key:n,ref:function(e){return E.push(e)},onKeyDown:D,onFocus:C,onClick:C},l,{className:(0,i.Z)("tabs__item",u,null==l?void 0:l.className,{"tabs__item--active":O===n})}),null!=t?t:n)}))),s?(0,r.cloneElement)(y.filter((function(e){return e.props.value===O}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},y.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==O})}))))}function c(e){var n=(0,l.Z)();return r.createElement(s,(0,a.Z)({key:String(n)},e))}},97306:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return p},assets:function(){return d},toc:function(){return f},default:function(){return y}});var a=t(87462),r=t(63366),l=(t(67294),t(3905)),o=t(9877),i=t(58215),u=["components"],s={},c="Deployment",p={unversionedId:"deployment",id:"deployment",title:"Deployment",description:"This section will show you how to submit your SeaTunnel application in all kinds of cluster engine. If you still not installation",source:"@site/docs/deployment.mdx",sourceDirName:".",slug:"/deployment",permalink:"/zh-CN/docs/deployment",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/deployment.mdx",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Command usage",permalink:"/zh-CN/docs/command/usage"},next:{title:"Set Up Develop Environment",permalink:"/zh-CN/docs/contribution/setup"}},d={},f=[{value:"Deployment in All Kind of Engine",id:"deployment-in-all-kind-of-engine",level:2},{value:"Local Mode(Spark Only)",id:"local-modespark-only",level:3},{value:"Standalone Cluster",id:"standalone-cluster",level:3},{value:"Yarn Cluster",id:"yarn-cluster",level:3},{value:"Mesos Cluster(Spark Only)",id:"mesos-clusterspark-only",level:3},{value:"Run Your Engine in Scaling",id:"run-your-engine-in-scaling",level:2}],m={toc:f};function y(e){var n=e.components,t=(0,r.Z)(e,u);return(0,l.kt)("wrapper",(0,a.Z)({},m,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"deployment"},"Deployment"),(0,l.kt)("p",null,"This section will show you how to submit your SeaTunnel application in all kinds of cluster engine. If you still not installation\nSeaTunnel you could go to see ",(0,l.kt)("a",{parentName:"p",href:"/docs/category/start"},"quick start")," about how to prepare and change SeaTunnel configuration firstly."),(0,l.kt)("h2",{id:"deployment-in-all-kind-of-engine"},"Deployment in All Kind of Engine"),(0,l.kt)("h3",{id:"local-modespark-only"},"Local Mode(Spark Only)"),(0,l.kt)("p",null,"Local mode only support Spark engine for now."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"./bin/start-seatunnel-spark.sh \\\n--master local[4] \\\n--deploy-mode client \\\n--config ./config/application.conf\n")),(0,l.kt)("h3",{id:"standalone-cluster"},"Standalone Cluster"),(0,l.kt)(o.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"spark",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# client mode\n./bin/start-seatunnel-spark.sh \\\n--master spark://ip:7077 \\\n--deploy-mode client \\\n--config ./config/application.conf\n\n# cluster mode\n./bin/start-seatunnel-spark.sh \\\n--master spark://ip:7077 \\\n--deploy-mode cluster \\\n--config ./config/application.conf\n"))),(0,l.kt)(i.Z,{value:"flink",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"bin/start-seatunnel-flink.sh \\\n--config config-path\n\n# -p 2 specifies that the parallelism of flink job is 2. You can also specify more parameters, use flink run -h to view\nbin/start-seatunnel-flink.sh \\\n-p 2 \\\n--config config-path\n")))),(0,l.kt)("h3",{id:"yarn-cluster"},"Yarn Cluster"),(0,l.kt)(o.Z,{groupId:"engine-type",defaultValue:"spark",values:[{label:"Spark",value:"spark"},{label:"Flink",value:"flink"}],mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"spark",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# client mode\n./bin/start-seatunnel-spark.sh \\\n--master yarn \\\n--deploy-mode client \\\n--config ./config/application.conf\n\n# cluster mode\n./bin/start-seatunnel-spark.sh \\\n--master yarn \\\n--deploy-mode cluster \\\n--config ./config/application.conf\n"))),(0,l.kt)(i.Z,{value:"flink",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"bin/start-seatunnel-flink.sh \\\n-m yarn-cluster \\\n--config config-path\n\n# -ynm seatunnel specifies the name displayed in the yarn webUI as seatunnel, you can also specify more parameters, use flink run -h to view\nbin/start-seatunnel-flink.sh \\\n-m yarn-cluster \\\n-ynm seatunnel \\\n--config config-path\n")))),(0,l.kt)("h3",{id:"mesos-clusterspark-only"},"Mesos Cluster(Spark Only)"),(0,l.kt)("p",null,"Mesos cluster deployment only support Spark engine for now."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"# cluster mode\n./bin/start-seatunnel-spark.sh \\\n--master mesos://ip:7077 \\\n--deploy-mode cluster \\\n--config ./config/application.conf\n")),(0,l.kt)("h2",{id:"run-your-engine-in-scaling"},"Run Your Engine in Scaling"),(0,l.kt)("p",null,"(This section is about engine instead of SeaTunnel itself, it is background knowledge for user who not understand engine\ncluster type). Both Spark and Flink could be run in different kind of cluster and any scale. This guide only show the basic\nusage of SeaTunnel which build above engine Spark or Flink, if you want to scale your engine cluster see\n",(0,l.kt)("a",{parentName:"p",href:"https://spark.apache.org/docs/latest/running-on-kubernetes.html"},"Spark"),"\nor ",(0,l.kt)("a",{parentName:"p",href:"https://nightlies.apache.org/flink/flink-docs-release-1.14/docs/deployment/resource-providers/native_kubernetes/"},"Flink")," document."))}y.isMDXComponent=!0}}]);