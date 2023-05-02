"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[1],{1:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r=t(5206),a=t(7689),o=(t(5462),t(1614)),i=t(1889),s=t(9176),c=t(6151),u=t(4554),l=t(890),d=t(4708),h=t(9439),x=t(2791),f=t(7445),m=t(4430),p=t(4922),g=t(2138),v=t(5899),j="Spinner_spinner__H2HDD",Z=t(184),b=function(n){var e=n.size;return(0,Z.jsx)(v.frZ,{size:e,className:j})},C=function(){var n=function(){var n=(0,m.wY)().data,e=(0,m.Tn)(),t=(0,h.Z)(e,2),r=t[0],a=t[1],o=a.isError,i=a.isLoading,s=a.isSuccess,c=(0,x.useState)(""),u=(0,h.Z)(c,2),l=u[0],d=u[1],v=(0,x.useState)(""),j=(0,h.Z)(v,2),Z=j[0],b=j[1],C=(0,x.useState)(!1),w=(0,h.Z)(C,2),k=w[0],P=w[1],y=(0,x.useState)(!1),L=(0,h.Z)(y,2),S=L[0],E=L[1];(0,x.useEffect)((function(){s&&((0,f.s)("Contact added"),_())}),[s]),(0,x.useEffect)((function(){o&&(0,f.x)("Ups! Something was wrong")}),[o]);var _=function(){d(""),b(""),P(!1),E(!1)};return{name:l,phone:Z,handleAddContact:function(e){if(e.preventDefault(),n.map((function(n){return n.name})).some((function(n){return n.toLowerCase()===l.toLowerCase()})))return P(!0),(0,f.x)("".concat(l," is already in contacts"));if(P(!1),(0,g.U)(Z))return E(!0);var t={name:(0,p.Q)(l),number:Z};r(t)},handleChangeName:function(n){return d(n.currentTarget.value)},handleChangePhone:function(n){return b(n.currentTarget.value)},isLoading:i,nameError:k,phoneError:S}}(),e=n.name,t=n.phone,r=n.handleAddContact,a=n.handleChangeName,o=n.handleChangePhone,v=n.isLoading,j=n.nameError,C=n.phoneError;return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsx)(l.Z,{component:"h1",variant:"h4",sx:{textAlign:"center",marginBottom:2},children:"Phonebook"}),(0,Z.jsxs)(u.Z,{sx:{padding:4,bgcolor:"#fff",borderRadius:4,"&:hover":{boxShadow:"0px 0px 42px -20px rgba(0,0,0,0.3)"}},children:[(0,Z.jsx)(d.ZP,{}),(0,Z.jsxs)(u.Z,{component:"form",noValidate:!0,onSubmit:r,sx:{},children:[(0,Z.jsxs)(i.ZP,{container:!0,spacing:2,children:[(0,Z.jsx)(i.ZP,{item:!0,xs:12,children:(0,Z.jsx)(s.Z,{error:j,type:"text",required:!0,fullWidth:!0,id:"name",label:"Name",name:"name",variant:"standard",onChange:a,value:e})}),(0,Z.jsx)(i.ZP,{item:!0,xs:12,children:(0,Z.jsx)(s.Z,{type:"tel",error:C,required:!0,fullWidth:!0,id:"number",label:"Phone",name:"number",variant:"standard",onChange:o,value:t,onKeyPress:function(n){return!/[0-9]/.test(n.key)&&n.preventDefault()}})})]}),(0,Z.jsxs)(c.Z,{type:"submit",disabled:e.length<3,fullWidth:!0,variant:"contained",sx:{mt:3,backgroundColor:"purple"},children:["Add contact ",v&&(0,Z.jsx)(b,{size:20})]})]})]})]})},w=t(5048),k=t(5193),P=t(1538),y=function(n){return n.contacts.filter},L=function(){var n=(0,w.I0)(),e=(0,w.v9)(y),t=(0,k.Z)("(min-width:600px)");return(0,Z.jsxs)(u.Z,{component:"div",sx:{marginTop:"".concat(t?"0px":"25px")},children:[(0,Z.jsx)(l.Z,{component:"h2",variant:"h6",sx:{textAlign:"center",marginBottom:2},children:"Your contacts"}),(0,Z.jsx)(s.Z,{fullWidth:!0,id:"filter",label:"Find contact by name",name:"filter",variant:"standard",onChange:function(e){n((0,P.T)(e.currentTarget.value))},value:e,sx:{"& label":{fontSize:14}}})]})},S=t(5861),E=t(4687),_=t.n(E),A=t(3400),T=t(7247),N=t(1286),F=function(n){var e=n.contact,t=e.id,r=e.name,o=e.number,i=(0,a.s0)(),s=(0,m.Nt)(),c=(0,h.Z)(s,2),d=c[0],x=c[1].isLoading,p=function(){var n=(0,S.Z)(_().mark((function n(){return _().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,d(t);case 3:(0,f.s)("Contact deleted successfully"),n.next=9;break;case 6:n.prev=6,n.t0=n.catch(0),(0,f.x)("Failed to delete contact");case 9:case"end":return n.stop()}}),n,null,[[0,6]])})));return function(){return n.apply(this,arguments)}}();return(0,Z.jsx)(Z.Fragment,{children:(0,Z.jsxs)(u.Z,{component:"li",sx:{display:"flex",alignItems:"center"},children:[(0,Z.jsxs)(l.Z,{component:"p",variant:"span",sx:{width:"45%"},children:[r,":"]}),(0,Z.jsx)(l.Z,{component:"p",variant:"span",sx:{textAlign:"left"},children:o}),(0,Z.jsx)(A.Z,{"aria-label":"edit",onClick:function(){return i("/contacts/edit/".concat(t))},sx:{marginLeft:"auto","&:hover, &:focus":{bgcolor:"#d7f0d0",color:"#468d46"}},children:(0,Z.jsx)(N.Z,{})}),(0,Z.jsx)(A.Z,{"aria-label":"delete",onClick:p,disabled:x,sx:{marginLeft:"3px","&:hover, &:focus":{bgcolor:"#f3dacf",color:"#d31616"}},children:x?(0,Z.jsx)(b,{size:20}):(0,Z.jsx)(T.Z,{})})]})})},z="ContactList_error__hlnhE",D=function(){var n=(0,m.wY)(),e=n.data,t=n.isError,r=n.refetch,a=(0,w.v9)(y),o=function(){var n=a.toLowerCase().trim();return null===e||void 0===e?void 0:e.filter((function(e){return e.name.toLowerCase().includes(n)}))}();return(0,x.useEffect)((function(){r()}),[r]),(0,Z.jsxs)(u.Z,{component:"ul",sx:{display:"flex",flexDirection:"column",rowGap:1,width:"100%",marginTop:2},children:[e&&(0,Z.jsx)(Z.Fragment,{children:0!==o.length?o.map((function(n){return(0,Z.jsx)(F,{contact:n},n.id)})):(0,Z.jsx)("li",{className:z,children:"Not found name"})}),t&&(0,Z.jsx)("li",{children:"Oops, something was wrong! Reload page, please"})]})},O=function(){return(0,Z.jsxs)(Z.Fragment,{children:[(0,Z.jsxs)(o.Z,{component:"main",sx:{paddingTop:4},children:[(0,Z.jsxs)(i.ZP,{container:!0,columnSpacing:{sm:5,md:10},children:[(0,Z.jsx)(i.ZP,{item:!0,xs:12,sm:5,children:(0,Z.jsx)(C,{})}),(0,Z.jsxs)(i.ZP,{item:!0,xs:12,sm:7,sx:{},children:[(0,Z.jsx)(L,{}),(0,Z.jsx)(D,{})]})]}),(0,Z.jsx)(r.Ix,{})]}),(0,Z.jsx)(a.j3,{})]})}},4922:function(n,e,t){t.d(e,{Q:function(){return r}});var r=function(n){return""===n?"":n.trim().split(/\s+/).map((function(n){return n[0].toUpperCase()+n.substring(1)})).join(" ")}},2138:function(n,e,t){t.d(e,{U:function(){return a}});var r=t(7445),a=function(n){return(n.length<7||""===n)&&((0,r.x)("Phone must have 7 character min"),!0)}},7445:function(n,e,t){t.d(e,{s:function(){return o},x:function(){return a}});var r=t(5206),a=function(n){return r.Am.error(n,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})},o=function(n){return r.Am.success(n,{position:"top-right",autoClose:2e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"dark"})}}}]);
//# sourceMappingURL=1.1df4b4fe.chunk.js.map