"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[92407],{3905:function(t,e,n){n.d(e,{Zo:function(){return m},kt:function(){return c}});var r=n(67294);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},i=Object.keys(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(r=0;r<i.length;r++)n=i[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var s=r.createContext({}),p=function(t){var e=r.useContext(s),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},m=function(t){var e=p(t.components);return r.createElement(s.Provider,{value:e},t.children)},u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},d=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,i=t.originalType,s=t.parentName,m=o(t,["components","mdxType","originalType","parentName"]),d=p(n),c=a,k=d["".concat(s,".").concat(c)]||d[c]||u[c]||i;return n?r.createElement(k,l(l({ref:e},m),{},{components:n})):r.createElement(k,l({ref:e},m))}));function c(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var i=n.length,l=new Array(i);l[0]=d;var o={};for(var s in e)hasOwnProperty.call(e,s)&&(o[s]=e[s]);o.originalType=t,o.mdxType="string"==typeof t?t:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},80594:function(t,e,n){n.r(e),n.d(e,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return p},assets:function(){return m},toc:function(){return u},default:function(){return c}});var r=n(87462),a=n(63366),i=(n(67294),n(3905)),l=["components"],o={},s="IoTDB",p={unversionedId:"connector-v2/sink/IoTDB",id:"connector-v2/sink/IoTDB",title:"IoTDB",description:"IoTDB sink connector",source:"@site/docs/connector-v2/sink/IoTDB.md",sourceDirName:"connector-v2/sink",slug:"/connector-v2/sink/IoTDB",permalink:"/zh-CN/docs/connector-v2/sink/IoTDB",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/sink/IoTDB.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Http",permalink:"/zh-CN/docs/connector-v2/sink/Http"},next:{title:"JDBC",permalink:"/zh-CN/docs/connector-v2/sink/Jdbc"}},m={},u=[{value:"Description",id:"description",level:2},{value:"Options",id:"options",level:2},{value:"node_urls list",id:"node_urls-list",level:3},{value:"username string",id:"username-string",level:3},{value:"password string",id:"password-string",level:3},{value:"batch_size int",id:"batch_size-int",level:3},{value:"batch_interval_ms int",id:"batch_interval_ms-int",level:3},{value:"max_retries int",id:"max_retries-int",level:3},{value:"retry_backoff_multiplier_ms int",id:"retry_backoff_multiplier_ms-int",level:3},{value:"max_retry_backoff_ms int",id:"max_retry_backoff_ms-int",level:3},{value:"default_thrift_buffer_size int",id:"default_thrift_buffer_size-int",level:3},{value:"max_thrift_frame_size int",id:"max_thrift_frame_size-int",level:3},{value:"zone_id string",id:"zone_id-string",level:3},{value:"enable_rpc_compression boolean",id:"enable_rpc_compression-boolean",level:3},{value:"connection_timeout_in_ms int",id:"connection_timeout_in_ms-int",level:3},{value:"timeseries_options list",id:"timeseries_options-list",level:3},{value:"timeseries_options.path string",id:"timeseries_optionspath-string",level:3},{value:"timeseries_options.data_type string",id:"timeseries_optionsdata_type-string",level:3},{value:"common options string",id:"common-options-string",level:3},{value:"Examples",id:"examples",level:2}],d={toc:u};function c(t){var e=t.components,n=(0,a.Z)(t,l);return(0,i.kt)("wrapper",(0,r.Z)({},d,n,{components:e,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"iotdb"},"IoTDB"),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},"IoTDB sink connector")),(0,i.kt)("h2",{id:"description"},"Description"),(0,i.kt)("p",null,"Used to write data to IoTDB. Supports Batch and Streaming mode."),(0,i.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,i.kt)("div",{parentName:"div",className:"admonition-heading"},(0,i.kt)("h5",{parentName:"div"},(0,i.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,i.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,i.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,i.kt)("div",{parentName:"div",className:"admonition-content"},(0,i.kt)("p",{parentName:"div"},"There is a conflict of thrift version between IoTDB and Spark.Therefore, you need to execute ",(0,i.kt)("inlineCode",{parentName:"p"},"rm -f $SPARK_HOME/jars/libthrift*")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"cp $IOTDB_HOME/lib/libthrift* $SPARK_HOME/jars/")," to resolve it."))),(0,i.kt)("h2",{id:"options"},"Options"),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"name"),(0,i.kt)("th",{parentName:"tr",align:null},"type"),(0,i.kt)("th",{parentName:"tr",align:null},"required"),(0,i.kt)("th",{parentName:"tr",align:null},"default value"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"node_urls"),(0,i.kt)("td",{parentName:"tr",align:null},"list"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"username"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"password"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"yes"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"batch_size"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"1024")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"batch_interval_ms"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"max_retries"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"retry_backoff_multiplier_ms"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"max_retry_backoff_ms"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"default_thrift_buffer_size"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"max_thrift_frame_size"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"zone_id"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"enable_rpc_compression"),(0,i.kt)("td",{parentName:"tr",align:null},"boolean"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"connection_timeout_in_ms"),(0,i.kt)("td",{parentName:"tr",align:null},"int"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"timeseries_options"),(0,i.kt)("td",{parentName:"tr",align:null},"list"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"timeseries_options.path"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"timeseries_options.data_type"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"common-options"),(0,i.kt)("td",{parentName:"tr",align:null},"string"),(0,i.kt)("td",{parentName:"tr",align:null},"no"),(0,i.kt)("td",{parentName:"tr",align:null},"-")))),(0,i.kt)("h3",{id:"node_urls-list"},"node_urls ","[list]"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IoTDB")," cluster address, the format is ",(0,i.kt)("inlineCode",{parentName:"p"},'["host:port", ...]')),(0,i.kt)("h3",{id:"username-string"},"username ","[string]"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IoTDB")," user username"),(0,i.kt)("h3",{id:"password-string"},"password ","[string]"),(0,i.kt)("p",null,(0,i.kt)("inlineCode",{parentName:"p"},"IoTDB")," user password"),(0,i.kt)("h3",{id:"batch_size-int"},"batch_size ","[int]"),(0,i.kt)("p",null,"For batch writing, when the number of buffers reaches the number of ",(0,i.kt)("inlineCode",{parentName:"p"},"batch_size")," or the time reaches ",(0,i.kt)("inlineCode",{parentName:"p"},"batch_interval_ms"),", the data will be flushed into the IoTDB"),(0,i.kt)("h3",{id:"batch_interval_ms-int"},"batch_interval_ms ","[int]"),(0,i.kt)("p",null,"For batch writing, when the number of buffers reaches the number of ",(0,i.kt)("inlineCode",{parentName:"p"},"batch_size")," or the time reaches ",(0,i.kt)("inlineCode",{parentName:"p"},"batch_interval_ms"),", the data will be flushed into the IoTDB"),(0,i.kt)("h3",{id:"max_retries-int"},"max_retries ","[int]"),(0,i.kt)("p",null,"The number of retries to flush failed"),(0,i.kt)("h3",{id:"retry_backoff_multiplier_ms-int"},"retry_backoff_multiplier_ms ","[int]"),(0,i.kt)("p",null,"Using as a multiplier for generating the next delay for backoff"),(0,i.kt)("h3",{id:"max_retry_backoff_ms-int"},"max_retry_backoff_ms ","[int]"),(0,i.kt)("p",null,"The amount of time to wait before attempting to retry a request to ",(0,i.kt)("inlineCode",{parentName:"p"},"IoTDB")),(0,i.kt)("h3",{id:"default_thrift_buffer_size-int"},"default_thrift_buffer_size ","[int]"),(0,i.kt)("p",null,"Thrift init buffer size in ",(0,i.kt)("inlineCode",{parentName:"p"},"IoTDB")," client"),(0,i.kt)("h3",{id:"max_thrift_frame_size-int"},"max_thrift_frame_size ","[int]"),(0,i.kt)("p",null,"Thrift max frame size in ",(0,i.kt)("inlineCode",{parentName:"p"},"IoTDB")," client"),(0,i.kt)("h3",{id:"zone_id-string"},"zone_id ","[string]"),(0,i.kt)("p",null,"java.time.ZoneId in ",(0,i.kt)("inlineCode",{parentName:"p"},"IoTDB")," client"),(0,i.kt)("h3",{id:"enable_rpc_compression-boolean"},"enable_rpc_compression ","[boolean]"),(0,i.kt)("p",null,"Enable rpc compression in ",(0,i.kt)("inlineCode",{parentName:"p"},"IoTDB")," client"),(0,i.kt)("h3",{id:"connection_timeout_in_ms-int"},"connection_timeout_in_ms ","[int]"),(0,i.kt)("p",null,"The maximum time (in ms) to wait when connect ",(0,i.kt)("inlineCode",{parentName:"p"},"IoTDB")),(0,i.kt)("h3",{id:"timeseries_options-list"},"timeseries_options ","[list]"),(0,i.kt)("p",null,"Timeseries options"),(0,i.kt)("h3",{id:"timeseries_optionspath-string"},"timeseries_options.path ","[string]"),(0,i.kt)("p",null,"Timeseries path"),(0,i.kt)("h3",{id:"timeseries_optionsdata_type-string"},"timeseries_options.data_type ","[string]"),(0,i.kt)("p",null,"Timeseries data type"),(0,i.kt)("h3",{id:"common-options-string"},"common options ","[string]"),(0,i.kt)("p",null,"Sink plugin common parameters, please refer to ",(0,i.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/sink/common-options"},"Sink Common Options")," for details"),(0,i.kt)("h2",{id:"examples"},"Examples"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-hocon"},'sink {\n  IoTDB {\n    node_urls = ["localhost:6667"]\n    username = "root"\n    password = "root"\n    batch_size = 1024\n    batch_interval_ms = 1000\n  }\n}\n')))}c.isMDXComponent=!0}}]);