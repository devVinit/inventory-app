(this.webpackJsonpinventorymanager=this.webpackJsonpinventorymanager||[]).push([[0],{248:function(e,a,t){e.exports=t.p+"static/media/undraw_empty_xct9.fcc453b4.svg"},261:function(e,a,t){e.exports=t(430)},420:function(e,a,t){},428:function(e,a,t){},429:function(e,a,t){},430:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(39),i=t.n(r),c=t(84),o=t(451),d=t(449),m=t(18),u=t(116),s=t.n(u),E=t(441),p=t(448),f=t(431),y=t(62),v=t(447),h=t(445),b=t(20),g=t(54),I=t(443),O=t(439),D=t(440),C=t(442),w=t(75),N=function(e){var a=Object(b.b)(),t=Object(b.c)((function(e){return e.models.length})),r=Object(n.useState)(),i=Object(g.a)(r,2),c=i[0],d=i[1];return l.a.createElement(C.a,{trigger:l.a.createElement(f.a,{onClick:function(){return d(!0)}},l.a.createElement(y.a,{name:e.data?"eye":"add"}),l.a.createElement(o.a,{minWidth:768,style:{display:"inline-block"}},e.data?"View":"Add")),open:c,closeIcon:!0,onClose:function(){return d(!1)}},l.a.createElement(C.a.Header,null,"Model"),l.a.createElement(w.b,{enableReinitialize:!0,initialValues:e.data||{title:"",description:"",fields:[]},onSubmit:function(e){a({type:"ADD_MODEL",payload:e}),a({type:"ADD_INVENTORY",payload:{inventoryId:t,data:[]}}),d(!1)}},(function(a){var t=a.values,n=(a.touched,a.errors,a.dirty,a.isSubmitting,a.handleChange),r=a.setFieldValue,i=(a.handleBlur,a.handleSubmit);a.handleReset;return l.a.createElement(l.a.Fragment,null,l.a.createElement(C.a.Content,null,l.a.createElement(I.a,{onSubmit:i},l.a.createElement("fieldset",{disabled:e.data,style:{border:0}},l.a.createElement(C.a.Description,null,l.a.createElement(I.a.Field,null,l.a.createElement("label",null,"Name"),l.a.createElement(O.a,{name:"name",placeholder:"Name",value:t.name,onChange:n})),l.a.createElement(I.a.Field,null,l.a.createElement("label",null,"Description"),l.a.createElement(O.a,{name:"description",placeholder:"Description",value:t.description,onChange:n})),l.a.createElement(w.a,{name:"fields"},(function(e){return function(e,a){var t=e.values,n=e.handleChange,r=e.setFieldValue;return l.a.createElement(l.a.Fragment,null,l.a.createElement(f.a,{type:"button",onClick:function(){a.insert(0,{name:"",description:"",dataType:""})},fluid:!0},l.a.createElement(y.a,{name:"add"}),"Add Field"),t.fields&&t.fields.map((function(e,i){return l.a.createElement(v.a,{key:i},l.a.createElement("div",null,l.a.createElement("div",{style:{display:"flex",justifyContent:"space-between"}},l.a.createElement("h3",null,"Field ",i+1),l.a.createElement(f.a,{onClick:function(){return a.remove(i)}},"Remove")),l.a.createElement(I.a.Field,null,l.a.createElement("label",null,"Name"),l.a.createElement(O.a,{name:"fields.".concat(i,".name"),placeholder:"Name",value:t.fields[i].name,onChange:n})),l.a.createElement(I.a.Field,null,l.a.createElement("label",null,"Description"),l.a.createElement(O.a,{name:"fields.".concat(i,".description"),placeholder:"Description",value:t.fields[i].description,onChange:n})),l.a.createElement(I.a.Field,null,l.a.createElement("label",null,"Data Type"),l.a.createElement(D.a,{name:"fields.".concat(i,".dataType"),onChange:function(e,a){return r("fields.".concat(i,".dataType"),a.value)},placeholder:"Select DataType",value:t.fields[i].dataType,options:[{key:"text",value:"text",text:"Text"},{key:"number",value:"number",text:"Number"},{key:"date",value:"date",text:"date"}]}))))})))}({values:t,handleChange:n,setFieldValue:r},e)}))),l.a.createElement(C.a.Actions,{style:{marginTop:10}},l.a.createElement(I.a.Button,{fluid:!0,type:"submit",disabled:!1},"Proceed ",l.a.createElement(y.a,{name:"chevron right"})))))))})))},j=function(){var e=Object(b.b)(),a=Object(b.c)((function(e){return e.models}));return l.a.createElement(E.a,{style:{margin:20,paddingRight:window.innerWidth>768?20:0}},l.a.createElement(p.a,{as:"h2",attached:"top",style:{display:"flex",justifyContent:"space-between"}},l.a.createElement(o.a,{maxWidth:768},l.a.createElement(f.a,{size:"small",onClick:function(){return e({type:"TOGGLE_SIDEBAR",payload:!0})}},l.a.createElement(y.a,{name:"align left"}))),"Manage Models",l.a.createElement("div",{floated:"right"},l.a.createElement(N,null))),l.a.createElement(v.a,null,l.a.createElement(h.a,{singleLine:!0},l.a.createElement(h.a.Header,null,l.a.createElement(h.a.Row,null,l.a.createElement(h.a.HeaderCell,null,"Name"),l.a.createElement(h.a.HeaderCell,null,"Creation Date"),l.a.createElement(h.a.HeaderCell,null,"Actions"))),l.a.createElement(h.a.Body,null,a&&a.length>0&&a.map((function(e,a){return l.a.createElement(h.a.Row,{key:a},l.a.createElement(h.a.Cell,null,e.name),l.a.createElement(h.a.Cell,null,s()(e.creationDate).format("lll")),l.a.createElement(h.a.Cell,null,l.a.createElement(N,{data:e})))}))))))},x=t(250),T=function(e){var a=Object(b.b)(),t=Object(b.c)((function(e){return e.models})),r=Object(n.useState)([]),i=Object(g.a)(r,2),c=i[0],d=i[1],m=Object(n.useState)(),u=Object(g.a)(m,2),s=u[0],E=u[1];Object(n.useEffect)((function(){if(t){var a=t.find((function(a){return parseInt(a.inventoryId)===parseInt(e.inventoryId)}));d(a)}}),[t,e.inventoryId]);var p=!isNaN(e.inventoryModelIndex);return l.a.createElement(C.a,{trigger:l.a.createElement(f.a,{onClick:function(){return E(!0)}},l.a.createElement(y.a,{name:p?"pencil alternate":"add"}),l.a.createElement(o.a,{minWidth:768,style:{display:"inline-block"}},p?"Edit":"Add")),open:s,onClose:function(){return E(!1)},closeIcon:!0},l.a.createElement(C.a.Header,null,p?"Edit":"Add"," ",c.name),l.a.createElement(w.b,{enableReinitialize:!0,initialValues:{fields:p?e.inventoryModelData:c.fields},onSubmit:function(t){var n=e.inventoryId,l=e.inventoryModelIndex;a(p?{type:"UPDATE_INVENTORY_BY_ID",payload:{values:t.fields,inventoryId:n,inventoryModelIndex:l}}:{type:"ADD_INVENTORY_BY_ID",payload:{values:t.fields,inventoryId:n}}),E(!1)}},(function(e){var a=e.values,t=(e.touched,e.errors,e.dirty,e.isSubmitting,e.handleChange),n=e.setFieldValue,r=(e.handleBlur,e.handleSubmit);e.handleReset;return l.a.createElement(l.a.Fragment,null,l.a.createElement(C.a.Content,null,l.a.createElement(I.a,{onSubmit:r},l.a.createElement(C.a.Description,null,l.a.createElement(w.a,{name:"fields"},(function(e){return function(e,a){var t=e.values,n=e.handleChange;return l.a.createElement(l.a.Fragment,null,t.fields&&t.fields.map((function(e,a){return l.a.createElement(v.a,{key:a},l.a.createElement("div",null,l.a.createElement(I.a.Field,null,l.a.createElement("label",null,c.fields[a].name),l.a.createElement(O.a,{type:t.fields[a].dataType,name:"fields.".concat(a,".value"),placeholder:"Name",value:t.fields[a].value,onChange:n}))))})))}({values:a,handleChange:t,setFieldValue:n})}))),l.a.createElement(C.a.Actions,null,l.a.createElement(I.a.Button,{fluid:!0,type:"submit",disabled:!1},"Proceed ",l.a.createElement(y.a,{name:"chevron right"}))))))})))},_=t(248),S=t.n(_),k=function(e){var a=Object(b.b)(),t=Object(b.c)((function(e){return e.models})),r=Object(b.c)((function(e){return e.inventories})),i=Object(n.useState)(),c=Object(g.a)(i,2),m=c[0],u=c[1],I=Object(n.useState)([]),O=Object(g.a)(I,2),D=O[0],C=O[1];return Object(n.useEffect)((function(){if(r){var a=r.find((function(a){return parseInt(a.inventoryId)===parseInt(e.match.params.id)}));u(a.data)}if(t){var n=t.find((function(a){return parseInt(a.inventoryId)===parseInt(e.match.params.id)}));C(n)}}),[e.match.params.id,r,t]),l.a.createElement(E.a,{style:{margin:20,paddingRight:window.innerWidth>768?20:0}},l.a.createElement(p.a,{as:"h2",attached:"top",style:{display:"flex",justifyContent:"space-between"}},l.a.createElement(o.a,{maxWidth:768},l.a.createElement(f.a,{size:"small",onClick:function(){return a({type:"TOGGLE_SIDEBAR",payload:!0})}},l.a.createElement(y.a,{name:"align left"}))),D.name,l.a.createElement("div",{floated:"right"},l.a.createElement(T,{inventoryId:e.match.params.id}))),l.a.createElement(v.a,null,l.a.createElement(h.a,{singleLine:!0},l.a.createElement(h.a.Header,null,l.a.createElement(h.a.Row,null,D&&D.fields&&D.fields.length>0&&D.fields.map((function(e,a){return l.a.createElement(h.a.HeaderCell,{key:a},e.name)})),l.a.createElement(h.a.HeaderCell,null,"Actions"))),l.a.createElement(h.a.Body,null,m&&m.length>0&&m.map((function(t,r){return l.a.createElement(h.a.Row,{key:r},t&&t.length>0&&t.map((function(e,a){return l.a.createElement(n.Fragment,{key:a},l.a.createElement(h.a.Cell,null,"object"===typeof e.value?s()(e.value).format("lll"):e.value))})),l.a.createElement(h.a.Cell,null,l.a.createElement(T,{inventoryId:e.match.params.id,inventoryModelIndex:r,inventoryModelData:t}),l.a.createElement(f.a,{onClick:function(){return a({type:"DELETE_INVENTORY_BY_ID_FROM_INDEX",payload:{inventoryId:e.match.params.id,inventoryModelIndex:r}})}},l.a.createElement(y.a,{name:"delete"}),l.a.createElement(o.a,{minWidth:768,style:{display:"inline-block"}},"Delete"))))}))))),m&&0===m.length&&l.a.createElement(v.a,{size:"massive"},l.a.createElement(d.a,{centered:!0,columns:"1"},l.a.createElement(x.a,{size:"large",src:S.a}))))},B=function(){return l.a.createElement(m.d,null,l.a.createElement(m.b,{path:"/manage-models",component:j}),l.a.createElement(m.b,{path:"/inventory-profile/:id",component:k}),l.a.createElement(m.a,{from:"*",to:"/manage-models"}))},R=t(446),M=(t(420),function(e){return l.a.createElement(c.b,Object.assign({exact:!0},e,{activeClassName:"active"}))}),A=function(){var e=Object(b.b)(),a=Object(b.c)((function(e){return e.models})),t=function(){window.innerWidth<=768&&e({type:"TOGGLE_SIDEBAR",payload:!1})};return l.a.createElement("div",{className:"side-bar"},l.a.createElement(R.a,{fluid:!0,vertical:!0,tabular:!0},l.a.createElement(p.a,{icon:!0,textAlign:"center",style:{padding:20}},l.a.createElement(y.a,{name:"settings",circular:!0}),l.a.createElement("p",null,"Construction Machine Management Inc")),l.a.createElement(R.a.Item,{to:"/manage-models",as:M,name:"Manage Models",onClick:t}),l.a.createElement("div",null,a&&a.length>0&&a.map((function(e,a){return l.a.createElement(R.a.Item,{as:M,key:e.inventoryId,name:e.name,onClick:t,to:"/inventory-profile/".concat(e.inventoryId)})})))))};t(428);var F=function(){var e=Object(b.c)((function(e){return e.sideMenuBar.isShowSideNenuBar}));return l.a.createElement("div",{className:"App"},l.a.createElement(c.a,null,l.a.createElement(o.a,{minWidth:768},l.a.createElement(d.a,null,l.a.createElement(d.a.Column,{width:4,style:{paddingBottom:0}},l.a.createElement(A,null)),l.a.createElement(d.a.Column,{stretched:!0,width:12},l.a.createElement(B,null)))),l.a.createElement(o.a,{maxWidth:768},l.a.createElement("div",{style:{position:"absolute",top:0,left:0,zIndex:1,transition:"all 0.3s ease-in-out",width:e?"100%":0,overflow:"hidden"}},l.a.createElement(A,null)),l.a.createElement(B,null))))},V=t(69),Y=t(61),W=t(127),H=[{name:"Chainsaw",description:"Some description",creationDate:new Date,inventoryId:0,fields:[{name:"Model Number",description:"To vweify model number",dataType:"text"},{name:"Build Number",description:"To vweify build number",dataType:"text"}]},{name:"BullDozer",description:"Some description",creationDate:new Date,inventoryId:1,fields:[{name:"Orientation",dataType:"text",value:"hello"},{name:"Height",dataType:"text",value:"hello2"}]}],L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_MODEL":return e.push(Object(W.a)({inventoryId:e.length,creationDate:new Date},a.payload)),Object(Y.a)(e);default:return e}},z=[{inventoryId:0,data:[[{name:"modelNumber",dataType:"text",value:"hello"},{name:"modelNumber",dataType:"text",value:"hello2"}]]},{inventoryId:1,data:[[{name:"Orientation",dataType:"text",value:"hello"},{name:"Height",dataType:"text",value:"hello2"}]]}],G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:z,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"ADD_INVENTORY":return e.push(a.payload),Object(Y.a)(e);case"ADD_INVENTORY_BY_ID":var t=e.findIndex((function(e){return parseInt(e.inventoryId)===parseInt(a.payload.inventoryId)}));return e[t].data.unshift(a.payload.values),Object(Y.a)(e);case"UPDATE_INVENTORY_BY_ID":var n=e.findIndex((function(e){return parseInt(e.inventoryId)===parseInt(a.payload.inventoryId)}));return e[n].data[a.payload.inventoryModelIndex]=a.payload.values,Object(Y.a)(e);case"DELETE_INVENTORY_BY_ID_FROM_INDEX":var l=e.findIndex((function(e){return parseInt(e.inventoryId)===parseInt(a.payload.inventoryId)}));return e[l].data.splice(a.payload.inventoryModelIndex,1),Object(Y.a)(e);default:return e}},J={isShowSideNenuBar:!1},P=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:J,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"TOGGLE_SIDEBAR":return Object(W.a)({},e,{isShowSideNenuBar:a.payload});default:return e}},U=Object(V.b)({models:L,inventories:G,sideMenuBar:P}),X=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(a){return}}(),$=Object(V.c)(U,X);$.subscribe((function(){!function(e){try{var a=JSON.stringify(e);localStorage.setItem("state",a)}catch(t){}}($.getState())}));var q=$;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t(429);i.a.render(l.a.createElement(b.a,{store:q},l.a.createElement(F,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[261,1,2]]]);
//# sourceMappingURL=main.bb025418.chunk.js.map