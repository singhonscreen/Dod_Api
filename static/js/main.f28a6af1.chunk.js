(this.webpackJsonpdog_api=this.webpackJsonpdog_api||[]).push([[0],{34:function(e,t,n){},60:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),r=n(26),s=n.n(r),i=(n(34),n(29)),o=n(8),l=n.n(o),d=n(13),j=n(7),u=n(14),b=n.n(u),h=n(0),p=function(e){var t=e.imageSrc;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)("div",{className:"main_container",children:Object(h.jsx)("div",{className:"imgcontainer",children:Object(h.jsx)("img",{src:t,alt:"not found"})})})})},m=function(){var e=Object(a.useState)([]),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(),s=Object(j.a)(r,2),i=s[0],o=s[1],u=Object(a.useState)("african"),m=Object(j.a)(u,2),O=m[0],f=m[1];Object(a.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t,n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://dog.ceo/api/breeds/list/all");case 2:t=e.sent,n=Object.keys(t.data.message),c(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]),Object(a.useEffect)((function(){var e=function(){var e=Object(d.a)(l.a.mark((function e(){var t;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,b.a.get("https://dog.ceo/api/breed/".concat(O,"/images/random"));case 2:t=e.sent,o(t.data.message);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[O]);return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsxs)("div",{className:"main_container",children:[Object(h.jsx)("h4",{children:"BREEDS LIST"}),Object(h.jsx)("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdown","data-bs-toggle":"dropdown","aria-expanded":"true",children:O}),Object(h.jsx)("ul",{className:"dropdown-menu drop_down","aria-labelledby":"navbarDropdown",children:n.map((function(e){return Object(h.jsx)("li",{children:Object(h.jsx)("button",{className:"dropdown-item",onClick:function(){return function(e){var t=n.filter((function(t){return t===e}));f(t)}(e)},children:e})})}))})]}),Object(h.jsx)("div",{children:Object(h.jsx)(p,{imageSrc:i})})]})},O=n(5),f=Object(O.a)(),x=function(){var e=Object(a.useState)(""),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(""),s=Object(j.a)(r,2),i=s[0],o=s[1];return Object(h.jsx)(h.Fragment,{children:Object(h.jsxs)("div",{className:"login_container",children:[Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("h1",{children:"Dog Api"}),Object(h.jsx)("p",{children:"Here we can find random images of dogs"})]}),Object(h.jsxs)("div",{className:"form_container",children:[Object(h.jsxs)("form",{className:"form_field",onSubmit:function(){""===n&&""===i&&alert("Please fill the values"),"avadhesh65@yahoo.com"===n&&"Avadhesh12345"===i?f.push("/loggedin"):alert("Please fill the correct values")},autocomplete:"off",children:[Object(h.jsx)("div",{className:"input_field",children:Object(h.jsx)("input",{type:"email",name:"email",autocomplete:"off",placeholder:"Email",value:n,onChange:function(e){return c(e.target.value)}})}),Object(h.jsx)("div",{className:"input_field",children:Object(h.jsx)("input",{type:"password",name:"password",autocomplete:"off",placeholder:"Password",value:i,onChange:function(e){return o(e.target.value)}})}),Object(h.jsx)("div",{className:"input_field",children:Object(h.jsx)("input",{type:"submit",value:"Log In",className:"btn"})})]}),Object(h.jsx)("div",{className:"forgotten",children:Object(h.jsx)("a",{href:"#",children:"Forgotten password?"})}),Object(h.jsx)("hr",{}),Object(h.jsx)("button",{className:"btn2",children:" Create New Account "})]})]})})};var v=function(){return Object(h.jsx)("div",{className:"App",children:Object(h.jsx)(i.c,{history:f,children:Object(h.jsxs)(i.d,{children:[Object(h.jsx)(i.b,{exact:!0,path:"/",component:x}),Object(h.jsx)(i.b,{exact:!0,path:"/loggedin",component:m}),Object(h.jsx)(i.a,{to:"/"})]})})})};s.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.f28a6af1.chunk.js.map