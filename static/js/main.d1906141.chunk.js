(this.webpackJsonprasiely_test_form=this.webpackJsonprasiely_test_form||[]).push([[0],{56:function(e,a,t){e.exports=t.p+"static/media/user.b0054a50.svg"},63:function(e,a,t){e.exports=t.p+"static/media/email.20aa87c9.svg"},64:function(e,a,t){e.exports=t.p+"static/media/password.d8591e22.svg"},75:function(e,a,t){e.exports=t(88)},87:function(e,a,t){},88:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(62),i=t.n(l),o=t(71),s=t(91),c=t(74),m=t(89);var u=function(e){var a=e.iconSrc,t=(e.formik,Object(c.a)(e,["iconSrc","formik"]));return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"inputs-text"},r.a.createElement("img",{src:a,alt:"parallex img"}),r.a.createElement(m.a,t)))},d=t(90);var h=function(e){return r.a.createElement(r.a.Fragment,null,"  ",r.a.createElement("div",{className:"btn-container"},r.a.createElement(d.a,{type:"submit",className:"form-button-login"},e.children)))},f=t(63),v=t.n(f),p=t(64),g=t.n(p),E=t(56),w=t.n(E),b=t(70),k=t(42);var y=function(e){var a=e.formik,t=e.name;return"firstname"===t?r.a.createElement(r.a.Fragment,null,a.touched.firstname&&a.errors.firstname?r.a.createElement("div",{style:{color:"red"}},a.errors.firstname):null):"lastname"===t?r.a.createElement(r.a.Fragment,null,a.touched.lastname&&a.errors.lastname?r.a.createElement("div",{style:{color:"red"}},a.errors.lastname):null):"email"===t?r.a.createElement(r.a.Fragment,null,a.touched.email&&a.errors.email?r.a.createElement("div",{style:{color:"red"}},a.errors.email):null):"password"===t?r.a.createElement(r.a.Fragment,null,a.touched.password&&a.errors.password?r.a.createElement("div",{style:{color:"red"}},a.errors.password):null):void 0},S=t(59),F=t.n(S);var N=function(e,a){var t={firstName:a.firstname,lastName:a.lastName,email:a.email,password:a.password},n=JSON.stringify({data:t,campaignUuid:"46aa3270-d2ee-11ea-a9f0-e9a68ccff42a"});fetch("https://api.raisely.com/v3/signup",{method:"POST",mode:"cors",headers:{"Content-Type":"application/json"},body:n}).then((function(e){return e.json()})).then((function(a){a.errors?F.a.fire({title:"Error",text:"This account ".concat(a.errors[0].code),icon:"error",confirmButtonText:"Ok"}).then((function(){e.setFieldValue("email","")})):F.a.fire({title:"success!",text:"successfully Regiestered Account!",icon:"success",confirmButtonText:"Ok"}).then((function(){e.setFieldValue("firstname","",!1),e.setFieldValue("lastname","",!1),e.setFieldValue("email","",!1),e.setFieldValue("password","",!1)}))})).catch((function(e){console.log("error :  ",e)}))};var x=function(){var e=k.a({firstname:k.b().required("Required"),lastname:k.b().required("Required"),email:k.b().email("Invalid email address").required("Required"),password:k.b().min(8,"Enter at least 8 characters!!").required("Required")}),a=Object(b.a)({initialValues:{firstname:"",lastname:"",email:"",password:""},validationSchema:e,onSubmit:function(e){N(a,e)}});return r.a.createElement(s.a,{className:"sign-up",onSubmit:a.handleSubmit},r.a.createElement(u,{id:"firstname",iconSrc:w.a,type:"text",placeholder:"First Name ",name:"firstname",className:"input-text",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.firstname,valid:a.values.firstname.length>0&&!!(!a.touched.firstname||!a.errors.firstname),invalid:!(!a.touched.firstname||!a.errors.firstname),formik:a}),r.a.createElement(y,{formik:a,name:"firstname"}),r.a.createElement(u,{id:"lastname",iconSrc:w.a,type:"text",placeholder:"Last Name ",name:"lastname",className:"input-text",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.lastname,valid:a.values.lastname.length>0&&!!(!a.touched.lastname||!a.errors.lastname),invalid:!(!a.touched.lastname||!a.errors.lastname),formik:a}),r.a.createElement(y,{formik:a,name:"lastname"}),r.a.createElement(u,{id:"email",iconSrc:v.a,type:"email",placeholder:"Email",name:"email",className:"input-text",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.email,valid:a.values.email.length>0&&!!(!a.touched.email||!a.errors.email),invalid:!(!a.touched.email||!a.errors.email),formik:a}),r.a.createElement(y,{formik:a,name:"email"}),r.a.createElement(u,{id:"password",iconSrc:g.a,type:"password",placeholder:"Password",name:"password",className:"input-text",onChange:a.handleChange,onBlur:a.handleBlur,value:a.values.password,valid:a.values.password.length>0&&!!(!a.touched.password||!a.errors.password),invalid:!(!a.touched.password||!a.errors.password),formik:a}),r.a.createElement(y,{formik:a,name:"password"}),r.a.createElement(h,{children:"Sign Up "}))};var B=function(e){return r.a.createElement(r.a.Fragment,null,navigator.onLine?r.a.createElement(r.a.Fragment,null,e.children," "):r.a.createElement("div",null,"\u0627\u06cc\u0646\u062a\u0631\u0646\u062a \u0642\u0637\u0639 \u0634\u062f\u0647 \u0627\u0633\u062a"))};var C=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("button",{onClick:function(){return"SignIn"===e.children?e.setLogin(!0):e.setLogin(!1)},className:"SignIn"===e.children?"auth-btn-1 ".concat(e.login?"active":""," "):"".concat(e.login?"":"active"," ")},e.children))};var O=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"auth-btns"},e.children))};var j=function(e){var a={login:e.login,setLogin:e.setLogin};return r.a.createElement(O,null,r.a.createElement(C,a,"SignIn"),r.a.createElement(C,a," SignUp "))};var q=function(e){return r.a.createElement("div",{className:"auth-container"},e.children)};var L=function(){var e=Object(n.useState)(!1),a=Object(o.a)(e,2),t=a[0],l=a[1];return r.a.createElement(q,null,r.a.createElement(B,null,r.a.createElement(j,{login:t,setLogin:l}),t?r.a.createElement("p",null,"The Login Form"):r.a.createElement(x,null)))},T=t(68),V=t(69),I=t(73),R=t(72),_=function(e){Object(I.a)(t,e);var a=Object(R.a)(t);function t(e){var n;return Object(T.a)(this,t),(n=a.call(this,e)).state={hasError:!1},n}return Object(V.a)(t,[{key:"componentDidCatch",value:function(e,a){console.error("Error :"+Error),console.info("info : "+a)}},{key:"render",value:function(){return this.state.hasError?r.a.createElement("h1",null,"Something went wrong."):this.props.children}}],[{key:"getDerivedStateFromError",value:function(e){return{hasError:!0}}}]),t}(r.a.Component);var J=function(){return r.a.createElement(_,null,r.a.createElement(L,null))};t(86),t(87),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(J,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[75,1,2]]]);
//# sourceMappingURL=main.d1906141.chunk.js.map