(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{32:function(e,t,c){},33:function(e,t,c){},34:function(e,t,c){},37:function(e,t,c){},42:function(e,t,c){},43:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},48:function(e,t,c){"use strict";c.r(t);var n=c(1),i=c.n(n),s=c(12),r=c.n(s),j=(c(32),c(33),c(5)),a=(c(34),c(64)),l=c(22),o=c(65),d=(c(37),c(21),c(15)),b=c.n(d),u=c(16),x=c.n(u),O=c(0);var p=function(e){var t=e.visiblity,c=e.close,i=Object(n.useState)(!0),s=Object(j.a)(i,2),r=s[0],a=s[1],d=Object(n.useState)(!0),u=Object(j.a)(d,2),p=u[0],h=u[1],m=function(){h((function(e){return!e}))},f=function(){a((function(e){return!e}))};return Object(O.jsx)(l.a,{visible:t,onClose:c,className:"rodalModal",animation:"fade",children:Object(O.jsx)("div",{className:"SignInUp",children:r?Object(O.jsxs)("div",{className:"SignInUp__loginRegister",children:[Object(O.jsx)("p",{children:"\u0648\u0631\u0648\u062f \u0628\u0647 \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc"}),Object(O.jsxs)("form",{className:"SignInUp__loginRegister--form",children:[Object(O.jsx)("input",{type:"text",placeholder:"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc"}),Object(O.jsxs)("div",{className:"password-wrap",children:[Object(O.jsx)("input",{type:p?"password":"text",placeholder:"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631"}),p?Object(O.jsx)(b.a,{onClick:m}):Object(O.jsx)(x.a,{onClick:m})]}),Object(O.jsx)(o.a,{variant:"success",children:"login"})]}),Object(O.jsx)("div",{className:"SignInUp__loginRegister--footer",style:{bottom:"-60px"},children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"\u0641\u0631\u0627\u0645\u0648\u0634\u06cc \u0631\u0645\u0632 \u0639\u0628\u0648\u0631"}),Object(O.jsx)("li",{onClick:f,children:"\u062b\u0628\u062a \u0646\u0627\u0645"})]})})]}):Object(O.jsxs)("div",{className:"SignInUp__loginRegister",children:[Object(O.jsx)("p",{children:"\u0627\u06cc\u062c\u0627\u062f \u062d\u0633\u0627\u0628 \u06a9\u0627\u0631\u0628\u0631\u06cc"}),Object(O.jsxs)("form",{className:"SignInUp__loginRegister--form",children:[Object(O.jsx)("input",{type:"text",placeholder:"\u0646\u0627\u0645 \u06a9\u0627\u0631\u0628\u0631\u06cc"}),Object(O.jsxs)("div",{className:"password-wrap",children:[Object(O.jsx)("input",{type:p?"password":"text",placeholder:"\u0631\u0645\u0632 \u0639\u0628\u0648\u0631"}),p?Object(O.jsx)(b.a,{onClick:m}):Object(O.jsx)(x.a,{onClick:m})]}),Object(O.jsxs)("div",{className:"password-wrap",children:[Object(O.jsx)("input",{type:p?"password":"text",placeholder:"\u062a\u06a9\u0631\u0627\u0631 \u0631\u0645\u0632 \u0639\u0628\u0648\u0631"}),p?Object(O.jsx)(b.a,{onClick:m}):Object(O.jsx)(x.a,{onClick:m})]}),Object(O.jsx)("input",{type:"email",placeholder:"\u0627\u06cc\u0645\u06cc\u0644"}),Object(O.jsx)(o.a,{variant:"primary",children:"Register"})]}),Object(O.jsx)("div",{className:"SignInUp__loginRegister--footer",style:{bottom:"-10px"},children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"\u0641\u0631\u0627\u0645\u0648\u0634\u06cc \u0631\u0645\u0632 \u0639\u0628\u0648\u0631"}),Object(O.jsx)("li",{onClick:f,children:"\u0648\u0631\u0648\u062f"})]})})]})})})};var h=function(){var e=Object(n.useState)(!1),t=Object(j.a)(e,2),c=t[0],i=t[1];return Object(O.jsxs)("div",{className:"Header",children:[Object(O.jsx)("div",{className:"Header__right",children:Object(O.jsxs)("ul",{children:[Object(O.jsx)("li",{children:"\u0635\u0641\u062d\u0647 \u0627\u0635\u0644\u06cc"}),Object(O.jsx)("li",{onClick:function(){i(!0)},children:"\u0648\u0631\u0648\u062f"}),Object(O.jsx)(p,{visiblity:c,close:function(){i(!1)}})]})}),Object(O.jsx)("div",{className:"Header__left",children:Object(O.jsxs)("div",{className:"Header__left--searchBox",children:[Object(O.jsx)(a.a,{}),Object(O.jsx)("input",{type:"text",placeholder:"Search"})]})})]})},m=(c(42),c(19)),f=(c(43),c(44),c(25)),v=c.n(f),g=c(24),_=c.n(g),N=(c(45),c(66));var C=function(e){var t=Object(n.useState)(""),c=Object(j.a)(t,2),i=c[0],s=c[1],r=Object(n.useRef)(null);Object(n.useEffect)((function(){return r.current.focus()}));var a=function(e){s(e.target.value)};return Object(O.jsx)("div",{className:"TodoInput",children:Object(O.jsx)("form",{className:"TodoInput__form",onSubmit:function(t){t.preventDefault(),e.onSubmit({id:Object(N.a)(),text:i}),s("")},children:e.edit?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",{type:"text",placeholder:"\u0648\u06cc\u0631\u0627\u06cc\u0634",value:i,onChange:a,ref:r}),Object(O.jsx)("button",{children:"Update"})]}):Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("input",{type:"text",value:i,onChange:a,ref:r}),Object(O.jsx)("button",{children:"Add"})]})})})};var S=function(e){var t=e.list,c=(e.value,e.onRemove),i=e.onComplete,s=e.onEdit,r=Object(n.useState)({id:null,value:""}),a=Object(j.a)(r,2),l=a[0],d=a[1];return l.id?Object(O.jsx)(C,{edit:l,onSubmit:function(e){s(l.id,e),d({id:null,value:""})},textEdit:l.text}):t.map((function(e,t){return Object(O.jsxs)("div",{className:e.isComplete?"TodoItem complete":"TodoItem",children:[Object(O.jsx)("div",{onClick:function(){return i(e.id)},className:"TodoItem__text",children:Object(O.jsx)("p",{children:e.text})},e.id),Object(O.jsxs)("div",{className:"TodoItem__buttons",children:[Object(O.jsx)(o.a,{variant:"light",size:"sm",onClick:function(){return d({id:e.id,value:e.text})},children:Object(O.jsx)(_.a,{})}),Object(O.jsx)(o.a,{variant:"light",size:"sm",onClick:function(){return c(e.id)},children:Object(O.jsx)(v.a,{})})]})]},t)}))};var y=function(e){e.list,e.onRemove;var t=Object(n.useState)([]),c=Object(j.a)(t,2),i=c[0],s=c[1];return Object(O.jsxs)("div",{className:"TodoList",children:[Object(O.jsx)(C,{onSubmit:function(e){var t;if(e.text&&!/^\s*$/.test(e.text)){var c=[e].concat(Object(m.a)(i));s(c),(t=console).log.apply(t,[e].concat(Object(m.a)(i)))}},buttonText:"Add"}),Object(O.jsx)("div",{className:"TodoList__items",children:Object(O.jsx)(S,{list:i,onRemove:function(e){var t=i.filter((function(t){return t.id!==e}));s(t)},onComplete:function(e){var t=i.map((function(t){return t.id===e&&(t.isComplete=!t.isComplete),t}));s(t)},onEdit:function(e,t){t.text&&!/^\s*$/.test(t.text)&&s((function(c){return c.map((function(c){return c.id===e?t:c}))}))}})})]})};var k=function(){return Object(O.jsx)("div",{className:"Main",children:Object(O.jsx)(y,{})})};var I=function(){return Object(O.jsxs)("div",{className:"App",children:[Object(O.jsx)(h,{}),Object(O.jsx)(p,{}),Object(O.jsx)(k,{})]})};c(46);r.a.render(Object(O.jsx)(i.a.StrictMode,{children:Object(O.jsx)(I,{})}),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.a5305aec.chunk.js.map