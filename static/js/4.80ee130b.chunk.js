(this["webpackJsonpreact-nw-app"]=this["webpackJsonpreact-nw-app"]||[]).push([[4],{218:function(e,t,r){e.exports={formControl:"FormControls_formControl__2dijs",error:"FormControls_error__35aL2",formSummaryError:"FormControls_formSummaryError__JkNzc"}},220:function(e,t,r){"use strict";r.d(t,"a",(function(){return c})),r.d(t,"b",(function(){return u}));var a=r(219),n=r(0),o=r.n(n),s=r(218),l=r.n(s),i=r(101);const c=e=>t=>{let r=t.input,n=t.meta,s=Object(a.a)(t,["input","meta"]);const i=n.touched&&n.error;return o.a.createElement("div",{className:l.a.formControl+" "+(i?l.a.error:"")},o.a.createElement("div",null,o.a.createElement(e,Object.assign({},r,s))),i&&o.a.createElement("span",null,n.error))},u=(e,t,r,a,n={},s="")=>o.a.createElement("div",null,o.a.createElement(i.a,Object.assign({placeholder:e,name:t,validate:r,component:a},n)),s)},222:function(e,t,r){"use strict";r.d(t,"b",(function(){return a})),r.d(t,"a",(function(){return n}));const a=e=>{if(!e)return"Field is required"},n=e=>t=>{if(t.length>e)return"Max length is ".concat(e," symbols")}},223:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r(0),n=r.n(a),o=r(6),s=r(22);let l=e=>({isAuth:e.auth.isAuth});const i=e=>{class t extends n.a.Component{render(){return this.props.isAuth?n.a.createElement(e,this.props):n.a.createElement(o.a,{to:"/login"})}}return Object(s.b)(l)(t)}},230:function(e,t,r){"use strict";function a(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,a=new Array(t);r<t;r++)a[r]=e[r];return a}function n(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var r=[],a=!0,n=!1,o=void 0;try{for(var s,l=e[Symbol.iterator]();!(a=(s=l.next()).done)&&(r.push(s.value),!t||r.length!==t);a=!0);}catch(i){n=!0,o=i}finally{try{a||null==l.return||l.return()}finally{if(n)throw o}}return r}}(e,t)||function(e,t){if(e){if("string"===typeof e)return a(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(r):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?a(e,t):void 0}}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}r.d(t,"a",(function(){return n}))},286:function(e,t,r){e.exports={descriptionBlock:"ProfileInfo_descriptionBlock__6hdoP",myDescriptionBlock:"ProfileInfo_myDescriptionBlock__2Mc5V"}},287:function(e,t,r){e.exports={postsBlock:"MyPosts_postsBlock__yzrYH",posts:"MyPosts_posts__2PX6x"}},288:function(e,t,r){e.exports={item:"Post_item__40C-V"}},290:function(e,t,r){"use strict";r.r(t);var a=r(0),n=r.n(a),o=r(286),s=r.n(o),l=r(43),i=r(230);var c=e=>{let t=Object(a.useState)(!1),r=Object(i.a)(t,2),o=r[0],s=r[1],l=Object(a.useState)(e.status),c=Object(i.a)(l,2),u=c[0],m=c[1];return n.a.createElement("div",null,!o&&n.a.createElement("div",null,n.a.createElement("span",{onDoubleClick:()=>{s(!0)}},e.status||"----")),o&&n.a.createElement("div",null,n.a.createElement("input",{onChange:e=>{m(e.currentTarget.value)},autoFocus:!0,onBlur:()=>{s(!1),e.updateStatus(u)},value:u})))};var u=({profile:e,status:t,updateStatus:r})=>e?n.a.createElement("div",null,n.a.createElement("div",{className:s.a.descriptionBlock},n.a.createElement("div",null,n.a.createElement("img",{src:e.photos.large,alt:""}),n.a.createElement(c,{status:t,updateStatus:r})))):n.a.createElement(l.a,null),m=r(52),p=r(287),d=r.n(p),f=r(288),h=r.n(f);var E=e=>n.a.createElement("div",{className:h.a.item},n.a.createElement("img",{src:"https://zm-cs.ru/files/avatars/1537189754.jpg",alt:"ava"}),e.message,n.a.createElement("div",null,e.likes," Like")),b=r(101),v=r(102),g=r(222),y=r(220);const _=Object(y.a)("textarea"),S=Object(g.a)(10),j=Object(v.a)({form:"addPost"})(e=>n.a.createElement("div",null,n.a.createElement("form",{onSubmit:e.handleSubmit},n.a.createElement("div",null,n.a.createElement(b.a,{component:_,name:"newPostText",placeholder:"Tell smth",validate:[g.b,S]})),n.a.createElement("div",null,n.a.createElement("button",null,"Post")))));var P=e=>{console.log("RENDER RENDER REKT");let t=e.posts.map(e=>n.a.createElement(E,{key:e.id,likes:e.likes,message:e.message}));return n.a.createElement("div",{className:d.a.postsBlock},n.a.createElement("h3",null,"My posts"),n.a.createElement("div",{className:d.a.posts},t),n.a.createElement(j,{onSubmit:t=>{e.addPost(t.newPostText)}}))},O=r(22);var k=Object(O.b)(e=>({posts:e.profilePage.posts,newPostText:e.profilePage.newPostText}),e=>({addPost:t=>{e(Object(m.a)(t))}}))(P);var x=e=>n.a.createElement("div",null,n.a.createElement(u,{profile:e.profile,status:e.status,updateStatus:e.updateStatus}),n.a.createElement(k,null)),w=r(6),C=r(18),A=r(223);class B extends n.a.Component{componentDidMount(){let e=this.props.match.params.userId;e||(e=this.props.authorizedUserId),this.props.getUserProfile(e),this.props.getStatus(e)}render(){return n.a.createElement(x,Object.assign({},this.props,{profile:this.props.profile,status:this.props.status,updateStatus:this.props.updateStatus}))}}t.default=Object(C.d)(Object(O.b)(e=>({profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.auth.userId,isAuth:e.auth.isAuth}),{getUserProfile:m.d,getStatus:m.c,updateStatus:m.e}),w.f,A.a)(B)}}]);
//# sourceMappingURL=4.80ee130b.chunk.js.map