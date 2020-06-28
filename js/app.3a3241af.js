(function(t){function e(e){for(var n,i,c=e[0],u=e[1],l=e[2],s=0,f=[];s<c.length;s++)i=c[s],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(t[n]=u[n]);d&&d(e);while(f.length)f.shift()();return a.push.apply(a,l||[]),o()}function o(){for(var t,e=0;e<a.length;e++){for(var o=a[e],n=!0,i=1;i<o.length;i++){var u=o[i];0!==r[u]&&(n=!1)}n&&(a.splice(e--,1),t=c(c.s=o[0]))}return t}var n={},r={app:0},a=[];function i(t){return c.p+"js/"+({about:"about"}[t]||t)+"."+{about:"f5c37af4"}[t]+".js"}function c(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.e=function(t){var e=[],o=r[t];if(0!==o)if(o)e.push(o[2]);else{var n=new Promise((function(e,n){o=r[t]=[e,n]}));e.push(o[2]=n);var a,u=document.createElement("script");u.charset="utf-8",u.timeout=120,c.nc&&u.setAttribute("nonce",c.nc),u.src=i(t);var l=new Error;a=function(e){u.onerror=u.onload=null,clearTimeout(s);var o=r[t];if(0!==o){if(o){var n=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src;l.message="Loading chunk "+t+" failed.\n("+n+": "+a+")",l.name="ChunkLoadError",l.type=n,l.request=a,o[1](l)}r[t]=void 0}};var s=setTimeout((function(){a({type:"timeout",target:u})}),12e4);u.onerror=u.onload=a,document.head.appendChild(u)}return Promise.all(e)},c.m=t,c.c=n,c.d=function(t,e,o){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(o,n,function(e){return t[e]}.bind(null,n));return o},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="",c.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=e,u=u.slice();for(var s=0;s<u.length;s++)e(u[s]);var d=l;a.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"46fa":function(t,e,o){},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{attrs:{id:"app"}},[o("Header"),o("AddTodo",{on:{"add-todo":t.addTodo}}),o("Todos",{attrs:{todos:t.todos},on:{"del-todo":t.deleteTodo}})],1)},a=[],i=(o("99af"),o("4de4"),o("2909")),c=o("bc3a"),u=o.n(c),l=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("form",{staticClass:"addtodo",on:{submit:t.addTodo}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.title,expression:"title"}],attrs:{type:"text",name:"title",placeholder:"Add Todo.."},domProps:{value:t.title},on:{input:function(e){e.target.composing||(t.title=e.target.value)}}}),o("input",{staticClass:"btn",attrs:{type:"submit",value:"Submit"}})])},s=[],d={name:"AddTodo",data:function(){return{title:""}},methods:{addTodo:function(t){t.preventDefault();var e={id:4,title:this.title,completed:!1};this.$emit("add-todo",e),this.title=""}}},f=d,p=(o("7999"),o("2877")),m=Object(p["a"])(f,l,s,!1,null,"2a59f280",null),h=m.exports,v=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},b=[function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("header",{staticClass:"header"},[o("h1",[t._v("TodoList")])])}],_={name:"Header"},g=_,y=(o("998b"),Object(p["a"])(g,v,b,!1,null,"0307bfe0",null)),j=y.exports,T=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("ddiv",{staticClass:"todos"},t._l(t.todos,(function(e){return o("div",{key:e.id},[o("TodoItem",{attrs:{todo:e},on:{"del-todo":function(o){return t.$emit("del-todo",e.id)}}})],1)})),0)},O=[],w=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-item",class:{"is-complete":t.todo.completed}},[o("p",[o("input",{attrs:{type:"checkbox"},on:{change:t.markComplete}}),t._v(" "+t._s(t.todo.title)+" "),o("button",{staticClass:"del",on:{click:function(e){return t.$emit("del-todo",t.todo.id)}}},[t._v("X")])])])},x=[],C={name:"TodoItem",props:["todo"],methods:{markComplete:function(){this.todo.completed=!this.todo.completed}}},$=C,E=(o("bea4"),Object(p["a"])($,w,x,!1,null,"61d96269",null)),k=E.exports,P={name:"Todos",props:["todos"],components:{TodoItem:k}},H=P,A=Object(p["a"])(H,T,O,!1,null,null,null),S=A.exports,M={name:"app",components:{Todos:S,Header:j,AddTodo:h},data:function(){return{todos:[]}},methods:{deleteTodo:function(t){this.todos=this.todos.filter((function(e){return e.id!=t}))},addTodo:function(t){var e=this,o=t.title,n=t.completed;u.a.post("https://jsonplaceholder.typicode.com/todos",{title:o,completed:n}).then((function(t){return e.todos=[].concat(Object(i["a"])(e.todos),[t.data])})).catch((function(t){return console.log(t)}))}},created:function(){var t=this;u.a.get("https://jsonplaceholder.typicode.com/todos?_limit=15").then((function(e){return t.todos=e.data})).catch((function(t){return console.log(t)}))}},W=M,I=(o("034f"),Object(p["a"])(W,r,a,!1,null,null,null)),L=I.exports,J=(o("d3b7"),o("8c4f")),q=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"home"},[o("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},D=[],N=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"hello"},[t._v(t._s(t.msg))])},V=[],X={name:"HelloWorld",props:{msg:String}},Y=X,z=(o("a4cc"),Object(p["a"])(Y,N,V,!1,null,"233b701e",null)),B=z.exports,F={name:"Home",components:{HelloWorld:B}},G=F,K=Object(p["a"])(G,q,D,!1,null,null,null),Q=K.exports;n["a"].use(J["a"]);var R=[{path:"/",name:"Home",component:Q},{path:"/about",name:"About",component:function(){return o.e("about").then(o.bind(null,"f820"))}}],U=new J["a"]({mode:"history",base:"",routes:R}),Z=U;n["a"].config.productionTip=!1,new n["a"]({router:Z,render:function(t){return t(L)}}).$mount("#app")},7594:function(t,e,o){},7999:function(t,e,o){"use strict";var n=o("94ba"),r=o.n(n);r.a},"85ec":function(t,e,o){},"94ba":function(t,e,o){},"998b":function(t,e,o){"use strict";var n=o("7594"),r=o.n(n);r.a},a4cc:function(t,e,o){"use strict";var n=o("46fa"),r=o.n(n);r.a},bea4:function(t,e,o){"use strict";var n=o("efd1"),r=o.n(n);r.a},efd1:function(t,e,o){}});
//# sourceMappingURL=app.3a3241af.js.map