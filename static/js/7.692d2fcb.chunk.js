(this["webpackJsonpmy-social-app"]=this["webpackJsonpmy-social-app"]||[]).push([[7],{232:function(e,t,a){"use strict";a.d(t,"b",(function(){return m})),a.d(t,"a",(function(){return i}));var r=a(242),n=a(0),o=a.n(n),c=a(233),l=a.n(c),m=function(e){var t=e.input,a=e.meta,n=Object(r.a)(e,["input","meta"]),c=a.touched&&a.error;return o.a.createElement("div",{className:l.a.formControl+" "+(c&&l.a.error)},o.a.createElement("textarea",Object.assign({},t,n)),c&&o.a.createElement("div",null,o.a.createElement("span",null,a.error)))},i=function(e){var t=e.input,a=e.meta,n=Object(r.a)(e,["input","meta"]),c=a.touched&&a.error;return o.a.createElement("div",{className:l.a.formControl+" "+(c&&l.a.error)},o.a.createElement("input",Object.assign({},t,n)),c&&o.a.createElement("div",null,o.a.createElement("span",null,a.error)))}},233:function(e,t,a){e.exports={formControl:"FormsControl_formControl__wuZVb",error:"FormsControl_error___gyw5"}},234:function(e,t,a){"use strict";a.d(t,"b",(function(){return r})),a.d(t,"a",(function(){return n}));var r=function(e){if(!e)return"Field is required"},n=function(e){return function(t){if(t.length>e)return"Max length is ".concat(e," symbols")}}},241:function(e,t,a){e.exports={loginForm:"LoginForm_loginForm__2odaZ",formSummaryError:"LoginForm_formSummaryError__2dNse"}},311:function(e,t,a){e.exports={auth:"Login_auth__1OFR6"}},318:function(e,t,a){"use strict";a.r(t);var r=a(0),n=a.n(r),o=a(311),c=a.n(o),l=a(241),m=a.n(l),i=a(115),u=a(116),s=a(232),p=a(234),f=Object(u.a)({form:"login"})((function(e){var t=e.handleSubmit,a=e.error;return n.a.createElement("form",{className:m.a.loginForm,onSubmit:t},n.a.createElement("div",null,n.a.createElement(i.a,{component:s.a,name:"email",validate:[p.b],type:"text",placeholder:"email"})),n.a.createElement("div",null,n.a.createElement(i.a,{component:s.a,name:"password",validate:[p.b],type:"password",placeholder:"password"})),n.a.createElement("div",null,n.a.createElement(i.a,{component:s.a,name:"rememberMe",type:"checkbox"})," \u0417\u0430\u043f\u043e\u043c\u043d\u0438\u0442\u044c \u043c\u0435\u043d\u044f"),e.captchaUrl&&n.a.createElement("img",{src:e.captchaUrl,alt:"captcha"}),e.captchaUrl&&n.a.createElement(i.a,{component:"input",name:"captcha",validation:[p.b]}),a&&n.a.createElement("div",{className:m.a.formSummaryError},a),n.a.createElement("div",null,n.a.createElement("button",null,"Login me now!")))})),h=a(21),d=function(e){return e.isAuth?n.a.createElement(h.a,{to:"/profile"}):n.a.createElement("div",{className:c.a.auth},n.a.createElement("h1",null,"Enter site:"),n.a.createElement(f,{onSubmit:function(t){var a=t.email,r=t.password,n=t.rememberMe,o=t.captcha;e.loginThunk(a,r,n,o)},captchaUrl:e.captchaUrl}))},E=a(18),b=a(29);t.default=Object(E.b)((function(e){return{isAuth:e.auth.isAuth,captchaUrl:e.auth.captchaUrl}}),(function(e){return{loginThunk:b.d,getCaptchaUrlThunk:b.c}}))((function(e){return n.a.createElement(d,e)}))}}]);
//# sourceMappingURL=7.692d2fcb.chunk.js.map