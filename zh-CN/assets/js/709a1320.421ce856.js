"use strict";(self.webpackChunkseatunnel_website=self.webpackChunkseatunnel_website||[]).push([[5768],{3905:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return d}});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=n.createContext({}),c=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},p=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=c(a),d=r,k=m["".concat(o,".").concat(d)]||m[d]||u[d]||l;return a?n.createElement(k,i(i({ref:t},p),{},{components:a})):n.createElement(k,i({ref:t},p))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=m;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:r,i[1]=s;for(var c=2;c<l;c++)i[c]=a[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}m.displayName="MDXCreateElement"},97919:function(e,t,a){a.r(t),a.d(t,{frontMatter:function(){return s},contentTitle:function(){return o},metadata:function(){return c},assets:function(){return p},toc:function(){return u},default:function(){return d}});var n=a(87462),r=a(63366),l=(a(67294),a(3905)),i=["components"],s={},o="Apache Iceberg",c={unversionedId:"connector-v2/source/Iceberg",id:"connector-v2/source/Iceberg",title:"Apache Iceberg",description:"Apache Iceberg source connector",source:"@site/docs/connector-v2/source/Iceberg.md",sourceDirName:"connector-v2/source",slug:"/connector-v2/source/Iceberg",permalink:"/zh-CN/docs/connector-v2/source/Iceberg",editUrl:"https://github.com/apache/incubator-seatunnel-website/edit/main/docs/connector-v2/source/Iceberg.md",tags:[],version:"current",frontMatter:{},sidebar:"docs",previous:{title:"Hudi",permalink:"/zh-CN/docs/connector-v2/source/Hudi"},next:{title:"InfluxDB",permalink:"/zh-CN/docs/connector-v2/source/InfluxDB"}},p={},u=[{value:"Description",id:"description",level:2},{value:"Key features",id:"key-features",level:2},{value:"Options",id:"options",level:2},{value:"catalog_name string",id:"catalog_name-string",level:3},{value:"catalog_type string",id:"catalog_type-string",level:3},{value:"uri string",id:"uri-string",level:3},{value:"warehouse string",id:"warehouse-string",level:3},{value:"namespace string",id:"namespace-string",level:3},{value:"table string",id:"table-string",level:3},{value:"case_sensitive boolean",id:"case_sensitive-boolean",level:3},{value:"fields array",id:"fields-array",level:3},{value:"start_snapshot_id long",id:"start_snapshot_id-long",level:3},{value:"start_snapshot_timestamp long",id:"start_snapshot_timestamp-long",level:3},{value:"end_snapshot_id long",id:"end_snapshot_id-long",level:3},{value:"use_snapshot_id long",id:"use_snapshot_id-long",level:3},{value:"use_snapshot_timestamp long",id:"use_snapshot_timestamp-long",level:3},{value:"stream_scan_strategy enum",id:"stream_scan_strategy-enum",level:3},{value:"common options",id:"common-options",level:3},{value:"Example",id:"example",level:2}],m={toc:u};function d(e){var t=e.components,a=(0,r.Z)(e,i);return(0,l.kt)("wrapper",(0,n.Z)({},m,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"apache-iceberg"},"Apache Iceberg"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"Apache Iceberg source connector")),(0,l.kt)("h2",{id:"description"},"Description"),(0,l.kt)("p",null,"Source connector for Apache Iceberg. It can support batch and stream mode."),(0,l.kt)("h2",{id:"key-features"},"Key features"),(0,l.kt)("ul",{className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/concept/connector-v2-features"},"batch"))),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/concept/connector-v2-features"},"stream"))),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/concept/connector-v2-features"},"exactly-once"))),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/concept/connector-v2-features"},"schema projection"))),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/concept/connector-v2-features"},"parallelism"))),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("input",{parentName:"p",type:"checkbox",checked:!1,disabled:!0})," ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/concept/connector-v2-features"},"support user-defined split"))),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ","data format"),(0,l.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","parquet"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","orc"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","avro"))),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("input",{parentName:"p",type:"checkbox",checked:!0,disabled:!0})," ","iceberg catalog"),(0,l.kt)("ul",{parentName:"li",className:"contains-task-list"},(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","hadoop(2.7.5)"),(0,l.kt)("li",{parentName:"ul",className:"task-list-item"},(0,l.kt)("input",{parentName:"li",type:"checkbox",checked:!0,disabled:!0})," ","hive(2.3.9)")))),(0,l.kt)("h2",{id:"options"},"Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"name"),(0,l.kt)("th",{parentName:"tr",align:null},"type"),(0,l.kt)("th",{parentName:"tr",align:null},"required"),(0,l.kt)("th",{parentName:"tr",align:null},"default value"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"catalog_name"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"catalog_type"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"uri"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"warehouse"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"namespace"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"table"),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"yes"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"case_sensitive"),(0,l.kt)("td",{parentName:"tr",align:null},"boolean"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"false")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"start_snapshot_timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"start_snapshot_id"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"end_snapshot_id"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"use_snapshot_id"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"use_snapshot_timestamp"),(0,l.kt)("td",{parentName:"tr",align:null},"long"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"stream_scan_strategy"),(0,l.kt)("td",{parentName:"tr",align:null},"enum"),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"FROM_LATEST_SNAPSHOT")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"common-options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"no"),(0,l.kt)("td",{parentName:"tr",align:null},"-")))),(0,l.kt)("h3",{id:"catalog_name-string"},"catalog_name ","[string]"),(0,l.kt)("p",null,"User-specified catalog name."),(0,l.kt)("h3",{id:"catalog_type-string"},"catalog_type ","[string]"),(0,l.kt)("p",null,"The optional values are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"hive: The hive metastore catalog."),(0,l.kt)("li",{parentName:"ul"},"hadoop: The hadoop catalog.")),(0,l.kt)("h3",{id:"uri-string"},"uri ","[string]"),(0,l.kt)("p",null,"The Hive metastore\u2019s thrift URI."),(0,l.kt)("h3",{id:"warehouse-string"},"warehouse ","[string]"),(0,l.kt)("p",null,"The location to store metadata files and data files."),(0,l.kt)("h3",{id:"namespace-string"},"namespace ","[string]"),(0,l.kt)("p",null,"The iceberg database name in the backend catalog."),(0,l.kt)("h3",{id:"table-string"},"table ","[string]"),(0,l.kt)("p",null,"The iceberg table name in the backend catalog."),(0,l.kt)("h3",{id:"case_sensitive-boolean"},"case_sensitive ","[boolean]"),(0,l.kt)("p",null,"If data columns where selected via fields(Collection), controls whether the match to the schema will be done with case sensitivity."),(0,l.kt)("h3",{id:"fields-array"},"fields ","[array]"),(0,l.kt)("p",null,"Use projection to select data columns and columns order."),(0,l.kt)("h3",{id:"start_snapshot_id-long"},"start_snapshot_id ","[long]"),(0,l.kt)("p",null,"Instructs this scan to look for changes starting from a particular snapshot (exclusive)."),(0,l.kt)("h3",{id:"start_snapshot_timestamp-long"},"start_snapshot_timestamp ","[long]"),(0,l.kt)("p",null,"Instructs this scan to look for changes starting from  the most recent snapshot for the table as of the timestamp. timestamp \u2013 the timestamp in millis since the Unix epoch"),(0,l.kt)("h3",{id:"end_snapshot_id-long"},"end_snapshot_id ","[long]"),(0,l.kt)("p",null,"Instructs this scan to look for changes up to a particular snapshot (inclusive)."),(0,l.kt)("h3",{id:"use_snapshot_id-long"},"use_snapshot_id ","[long]"),(0,l.kt)("p",null,"Instructs this scan to look for use the given snapshot ID."),(0,l.kt)("h3",{id:"use_snapshot_timestamp-long"},"use_snapshot_timestamp ","[long]"),(0,l.kt)("p",null,"Instructs this scan to look for use the most recent snapshot as of the given time in milliseconds. timestamp \u2013 the timestamp in millis since the Unix epoch"),(0,l.kt)("h3",{id:"stream_scan_strategy-enum"},"stream_scan_strategy ","[enum]"),(0,l.kt)("p",null,"Starting strategy for stream mode execution, Default to use ",(0,l.kt)("inlineCode",{parentName:"p"},"FROM_LATEST_SNAPSHOT")," if don\u2019t specify any value.\nThe optional values are:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"TABLE_SCAN_THEN_INCREMENTAL: Do a regular table scan then switch to the incremental mode."),(0,l.kt)("li",{parentName:"ul"},"FROM_LATEST_SNAPSHOT: Start incremental mode from the latest snapshot inclusive."),(0,l.kt)("li",{parentName:"ul"},"FROM_EARLIEST_SNAPSHOT: Start incremental mode from the earliest snapshot inclusive."),(0,l.kt)("li",{parentName:"ul"},"FROM_SNAPSHOT_ID: Start incremental mode from a snapshot with a specific id inclusive."),(0,l.kt)("li",{parentName:"ul"},"FROM_SNAPSHOT_TIMESTAMP: Start incremental mode from a snapshot with a specific timestamp inclusive.")),(0,l.kt)("h3",{id:"common-options"},"common options"),(0,l.kt)("p",null,"Source plugin common parameters, please refer to ",(0,l.kt)("a",{parentName:"p",href:"/zh-CN/docs/connector-v2/source/common-options"},"Source Common Options")," for details."),(0,l.kt)("h2",{id:"example"},"Example"),(0,l.kt)("p",null,"simple"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'source {\n  Iceberg {\n    catalog_name = "seatunnel"\n    catalog_type = "hadoop"\n    warehouse = "hdfs://your_cluster//tmp/seatunnel/iceberg/"\n    namespace = "your_iceberg_database"\n    table = "your_iceberg_table"\n  }\n}\n')),(0,l.kt)("p",null,"Or"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'source {\n  Iceberg {\n    catalog_name = "seatunnel"\n    catalog_type = "hive"\n    uri = "thrift://localhost:9083"\n    warehouse = "hdfs://your_cluster//tmp/seatunnel/iceberg/"\n    namespace = "your_iceberg_database"\n    table = "your_iceberg_table"\n  }\n}\n')),(0,l.kt)("p",null,"schema projection"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-hocon"},'source {\n  Iceberg {\n    catalog_name = "seatunnel"\n    catalog_type = "hadoop"\n    warehouse = "hdfs://your_cluster/tmp/seatunnel/iceberg/"\n    namespace = "your_iceberg_database"\n    table = "your_iceberg_table"\n\n    fields {\n      f2 = "boolean"\n      f1 = "bigint"\n      f3 = "int"\n      f4 = "bigint"\n    }\n  }\n}\n')))}d.isMDXComponent=!0}}]);