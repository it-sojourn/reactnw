(this["webpackJsonpreact-nw-app"]=this["webpackJsonpreact-nw-app"]||[]).push([[7],{218:function(e,t,r){e.exports={formControl:"FormControls_formControl__2dijs",error:"FormControls_error__35aL2",formSummaryError:"FormControls_formSummaryError__JkNzc"}},220:function(e,t,r){"use strict";r.d(t,"a",(function(){return i})),r.d(t,"b",(function(){return s}));var n=r(219),a=r(0),o=r.n(a),l=r(218),c=r.n(l),m=r(101);const i=e=>t=>{let r=t.input,a=t.meta,l=Object(n.a)(t,["input","meta"]);const m=a.touched&&a.error;return o.a.createElement("div",{className:c.a.formControl+" "+(m?c.a.error:"")},o.a.createElement("div",null,o.a.createElement(e,Object.assign({},r,l))),m&&o.a.createElement("span",null,a.error))},s=(e,t,r,n,a={},l="")=>o.a.createElement("div",null,o.a.createElement(m.a,Object.assign({placeholder:e,name:t,validate:r,component:n},a)),l)},222:function(e,t,r){"use strict";r.d(t,"b",(function(){return n})),r.d(t,"a",(function(){return a}));const n=e=>{if(!e)return"Field is required"},a=e=>t=>{if(t.length>e)return"Max length is ".concat(e," symbols")}},289:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(102),l=r(22),c=r(220),m=r(222),i=r(25),s=r(6),u=r(218),b=r.n(u);const p=Object(c.a)("input"),d=Object(o.a)({form:"login"})(({handleSubmit:e,error:t})=>a.a.createElement("form",{onSubmit:e},Object(c.b)("Email","email",[m.b],p),Object(c.b)("Password","password",[m.b],p,{type:"password"},""),Object(c.b)(null,"rememberMe",[],p,{type:"checkbox"},"Remember me"),t&&a.a.createElement("span",{className:b.a.formSummaryError},t),a.a.createElement("div",null,a.a.createElement("button",null,"Login"))));t.default=Object(l.b)(e=>({isAuth:e.auth.isAuth}),{login:i.c})(e=>e.isAuth?a.a.createElement(s.a,{to:"/profile"}):a.a.createElement("div",null,a.a.createElement("h1",null,"Login"),a.a.createElement(d,{onSubmit:t=>{e.login(t.email,t.password,t.rememberMe)}})))}}]);
//# sourceMappingURL=7.e98a7e9d.chunk.js.map