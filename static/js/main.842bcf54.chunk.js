(this["webpackJsonpreact-ubi-tutorial"]=this["webpackJsonpreact-ubi-tutorial"]||[]).push([[0],{17:function(e,t,n){e.exports={my_modal:"MyModal_my_modal__DCa8t",modal_content:"MyModal_modal_content__1QGTU",active:"MyModal_active__33RIW"}},24:function(e,t,n){e.exports={container:"Loader_container__2ct9s",loader:"Loader_loader__3GeWT",spin:"Loader_spin__358En"}},26:function(e,t,n){e.exports={pages:"Pagination_pages__2etGQ",page_current:"Pagination_page_current__2udpD"}},36:function(e,t,n){e.exports={my_btn:"MyButton_my_btn__moEPu"}},37:function(e,t,n){e.exports={clock:"Clock_clock__2bUHZ"}},38:function(e,t,n){e.exports={my_input:"MyInput_my_input__20u9v"}},40:function(e,t,n){e.exports={my_select:"MySelect_my_select__p_LXI"}},49:function(e,t,n){},52:function(e,t,n){},55:function(e,t,n){},74:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(14),r=n.n(a),s=n(3),o=n(10),i=Object(c.createContext)(null),u=Object(c.createContext)(null),l=(n(49),n(5)),j=n(35),b=n(36),d=n.n(b),h=n(0),p=["children"],O=function(e){var t=e.children,n=Object(j.a)(e,p);return Object(h.jsx)("button",Object(l.a)(Object(l.a)({},n),{},{className:d.a.my_btn+" "+n.className,children:t}))},m=n(37),x=n.n(m);var f=function(){var e=Object(c.useState)(new Date),t=Object(s.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=setInterval((function(){return a(new Date)}),1e3);return function(){return clearInterval(e)}}),[]),Object(h.jsx)("h3",{className:x.a.clock,children:n.toLocaleTimeString()})},v=n(2),g=function(){var e=Object(c.useContext)(i).setModal,t="/posts"!==Object(v.f)().pathname?{z:"-1",op:"0"}:{z:"1",op:"1"};return Object(h.jsxs)("div",{className:"App-header",children:[Object(h.jsx)(O,{style:{marginLeft:"1em",fontSize:".75em",zIndex:t.z,opacity:t.op,transition:".25s"},onClick:function(){return e(!0)},children:"Create New Post"}),Object(h.jsx)("h2",{children:"React UlbiTV Tutorial"}),Object(h.jsx)(f,{})]})},y=function(){var e=Object(v.f)().pathname,t=Object(c.useContext)(u),n=t.setIsAuth,a=t.setPage,r=t.setLimit,s=e.slice(7);return Object(h.jsx)(h.Fragment,{children:"/login"!==e&&Object(h.jsxs)("ul",{className:"App-navbar",children:[Object(h.jsx)("li",{onClick:function(){n(!1),a(1),r(10),localStorage.removeItem("userAuth")},children:Object(h.jsx)(o.b,{to:"/login",children:"Logout"})}),Object(h.jsx)("div",{style:{flex:"1 1 0",padding:"0"}}),""!=s&&Object(h.jsx)("li",{className:"post_id active",children:Object(h.jsxs)("div",{children:["ID: ",s]})}),Object(h.jsx)("li",{className:"/posts"===e?"active":"",children:Object(h.jsx)(o.b,{to:"/posts",children:"Posts"})}),Object(h.jsx)("li",{className:"/about"===e?"active":"",children:Object(h.jsx)(o.b,{to:"/about",children:"About"})})]})})},_=function(){return Object(h.jsxs)("div",{className:"App-body",children:[Object(h.jsx)("br",{}),Object(h.jsx)("h3",{children:"React fundamentals Tutorial from UlbiTV"})]})},C=n(20),N=n(4),P=n.n(N),w=n(8),k=n(24),S=n.n(k);function A(){return Object(h.jsx)("div",{className:S.a.container,children:Object(h.jsx)("div",{className:S.a.loader,children:Object(h.jsx)("span",{children:"Loading..."})})})}var I=n(25),L=n.n(I),M=function(e){var t=e.post,n=e.highlight,c=e.deletePost,a=Object(v.g)();return Object(h.jsxs)("div",{className:"post",children:[Object(h.jsxs)("div",{className:"post_content",children:[Object(h.jsx)(L.a,{onClick:function(){return a("/posts/".concat(t.id))},className:"post_title",highlightClassName:"highlighter",searchWords:[n],autoEscape:!0,textToHighlight:"".concat(t.id,". ").concat(t.title)}),Object(h.jsx)("br",{}),Object(h.jsx)(L.a,{highlightClassName:"highlighter",className:"post_body",searchWords:[n],autoEscape:!0,textToHighlight:t.body})]}),Object(h.jsx)("div",{className:"post_btns",children:Object(h.jsx)(O,{onClick:function(){return c(t)},style:{padding:".25em .5em"},children:"X"})})]})},D=n(76),T=n(75),E=(n(52),function(e){var t=e.posts,n=e.highlight,c=e.deletePost,a=t.length>0?"Post List #1":"No Posts to Show";return Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:a}),Object(h.jsx)(D.a,{className:"post_list",children:t.map((function(e){return Object(h.jsx)(T.a,{timeout:500,classNames:"post",children:Object(h.jsx)(M,{post:e,highlight:n,deletePost:c})},e.id)}))})]})}),B=n(38),V=n.n(B),z=function(e){return Object(h.jsx)("input",Object(l.a)(Object(l.a)({},e),{},{className:V.a.my_input}))};n(55);var U=function(e){var t=Object(c.useState)({title:"",body:""}),n=Object(s.a)(t,2),a=n[0],r=n[1];return Object(h.jsxs)("form",{className:"post_form",children:[Object(h.jsx)(z,{type:"text",placeholder:"Post Title",value:a.title,onChange:function(e){return r(Object(l.a)(Object(l.a)({},a),{},{title:e.target.value}))}}),Object(h.jsx)(z,{type:"text",placeholder:"Post Description",value:a.body,onChange:function(e){return r(Object(l.a)(Object(l.a)({},a),{},{body:e.target.value}))}}),Object(h.jsx)(O,{onClick:function(t){t.preventDefault();var n=Object(l.a)(Object(l.a)({},a),{},{id:Date.now()});e.addPost(n),r({title:"",body:""})},children:"Create Post"})]})},W=n(39),F=n(40),G=n.n(F),H=function(e){var t=e.options,n=e.defaultValue,c=e.value,a=e.onChange;return Object(h.jsxs)("select",{className:G.a.my_select,value:c,onChange:function(e){return a(e.target.value)},children:[Object(h.jsx)("option",{disabled:!0,value:"",children:n}),t.map((function(e){return Object(h.jsx)("option",{value:e.value,children:e.name},e.value)}))]})},R=function(e){var t=e.filter,n=e.setFilter,c=Object(W.useContext)(u),a=c.setPage,r=c.limit,s=c.setLimit;return Object(h.jsxs)("div",{className:"post_filter",children:[Object(h.jsx)(H,{value:t.sort,onChange:function(e){return n(Object(l.a)(Object(l.a)({},t),{},{sort:e}))},defaultValue:"Sort Mode:",options:[{value:"title",name:"By Title"},{value:"body",name:"By Description"}]}),Object(h.jsx)(z,{placeholder:"Search by Title or Description...",value:t.search,onChange:function(e){return n(Object(l.a)(Object(l.a)({},t),{},{search:e.target.value.toLowerCase()}))}}),Object(h.jsx)(H,{value:r,onChange:function(e){return function(e){a(1),s(e)}(e)},defaultValue:"Posts on page:",options:[{value:5,name:"5"},{value:10,name:"10"},{value:25,name:"25"},{value:-1,name:"Show All"}]})]})},J=n(17),Q=n.n(J),X=function(e){var t=e.children,n=e.visible,c=e.setVisible,a=n?[Q.a.my_modal,Q.a.active]:[Q.a.my_modal];return Object(h.jsx)("div",{className:a.join(" "),onClick:function(){return c(!1)},children:Object(h.jsx)("div",{className:Q.a.modal_content,onClick:function(e){return e.stopPropagation()},children:t})})},Z=function(e,t){var n=t.sort,a=t.search,r=function(e,t){return Object(c.useMemo)((function(){return t?Object(C.a)(e).sort((function(e,n){return e[t].localeCompare(n[t])})):e}),[t,e])}(e,n);return Object(c.useMemo)((function(){return a?r.filter((function(e){return e.title.toLowerCase().includes(a)||e.body.toLowerCase().includes(a)})):r}),[a,r])},q=function(e){var t=Object(c.useState)(!1),n=Object(s.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)(""),i=Object(s.a)(o,2),u=i[0],l=i[1];function j(){return j=Object(w.a)(P.a.mark((function t(){var n,c,a,s=arguments;return P.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:for(t.prev=0,r(!0),n=s.length,c=new Array(n),a=0;a<n;a++)c[a]=s[a];return t.next=5,e(c);case 5:t.next=10;break;case 7:t.prev=7,t.t0=t.catch(0),l(t.t0.message);case 10:return t.prev=10,r(!1),t.finish(10);case 13:case"end":return t.stop()}}),t,null,[[0,7,10,13]])}))),j.apply(this,arguments)}return[function(){return j.apply(this,arguments)},a,u]},K=n(41),Y=n(42),$=n(21),ee=n.n($),te=function(){function e(){Object(K.a)(this,e)}return Object(Y.a)(e,null,[{key:"getAll",value:function(){var e=Object(w.a)(P.a.mark((function e(){var t,n,c,a=arguments;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t=a.length>0&&void 0!==a[0]?a[0]:10,n=a.length>1&&void 0!==a[1]?a[1]:1,e.next=4,ee.a.get("https://jsonplaceholder.typicode.com/posts",{params:{_limit:t,_page:n}});case 4:return c=e.sent,e.abrupt("return",c);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()},{key:"getPostByID",value:function(){var e=Object(w.a)(P.a.mark((function e(t){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee.a.get("https://jsonplaceholder.typicode.com/posts/"+t);case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},{key:"getCommentsByID",value:function(){var e=Object(w.a)(P.a.mark((function e(t){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ee.a.get("https://jsonplaceholder.typicode.com/posts/"+t+"/comments");case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}]),e}();function ne(e,t){return Math.ceil(e/t)}var ce=n(26),ae=n.n(ce),re=function(e){var t=e.totalPages,n=e.page,c=e.changePage,a=function(e){for(var t=[],n=0;n<e;n++)t.push(n+1);return t}(t);return Object(h.jsx)("div",{className:ae.a.pages,children:a.map((function(e){return Object(h.jsxs)(O,{className:n===e&&ae.a.page_current,onClick:function(){return c(e)},children:[" ",e]},e)}))})};var se=function(){var e=Object(c.useContext)(u),t=e.page,n=e.setPage,a=e.limit,r=Object(c.useContext)(i),o=r.modal,l=r.setModal,j=Object(c.useState)([]),b=Object(s.a)(j,2),d=b[0],p=b[1],O=Object(c.useState)({sort:"",search:""}),m=Object(s.a)(O,2),x=m[0],f=m[1],v=Object(c.useState)(0),g=Object(s.a)(v,2),y=g[0],_=g[1],N=q(Object(w.a)(P.a.mark((function e(){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.getAll(a,t);case 2:n=e.sent,p(n.data),_(ne(n.headers["x-total-count"],a));case 5:case"end":return e.stop()}}),e)})))),k=Object(s.a)(N,3),S=k[0],I=k[1],L=k[2];Object(c.useEffect)((function(){return S()}),[t,a]);var M=Z(d,x);return Object(h.jsxs)("div",{className:"App-body",children:[Object(h.jsx)(X,{visible:o,setVisible:l,children:Object(h.jsx)(U,{addPost:function(e){p([].concat(Object(C.a)(d),[e])),l(!1)}})}),Object(h.jsx)(R,{filter:x,setFilter:f}),Object(h.jsx)(re,{page:t,totalPages:y,changePage:function(e){return n(e)}}),Object(h.jsx)("hr",{style:{margin:".25em 0",background:"orange",border:"none",height:".025em"}}),L&&Object(h.jsxs)("h3",{style:{color:"orangered"},children:["Error: ",L]}),I?Object(h.jsx)(A,{}):Object(h.jsx)(E,{posts:M,highlight:x.search,deletePost:function(e){p(d.filter((function(t){return t.id!==e.id})))}})]})},oe=function(){var e=Object(c.useContext)(u).setIsAuth;return Object(h.jsxs)("div",{className:"App-body",style:{width:"50%",margin:"0 auto",marginTop:".5em"},children:[Object(h.jsx)("h2",{children:"Login Page"}),Object(h.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e(!0),localStorage.setItem("userAuth","true")},children:[Object(h.jsx)(z,{type:"text",placeholder:"Enter Login"}),Object(h.jsx)(z,{type:"password",placeholder:"Enter Password"}),Object(h.jsx)(O,{children:"Login"})]})]})},ie=function(){var e=Object(v.h)().id,t=Object(c.useState)({}),n=Object(s.a)(t,2),a=n[0],r=n[1],o=Object(c.useState)([]),i=Object(s.a)(o,2),u=i[0],l=i[1],j=q(function(){var e=Object(w.a)(P.a.mark((function e(t){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.getPostByID(t);case 2:n=e.sent,r(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()),b=Object(s.a)(j,3),d=b[0],p=b[1],O=(b[2],q(function(){var e=Object(w.a)(P.a.mark((function e(t){var n;return P.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,te.getCommentsByID(t);case 2:n=e.sent,l(n.data);case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())),m=Object(s.a)(O,3),x=m[0],f=m[1];m[2];return Object(c.useEffect)((function(){d(e),x(e)}),[]),Object(h.jsxs)("div",{className:"App-body",children:[Object(h.jsx)("br",{}),p?Object(h.jsx)(A,{}):Object(h.jsxs)("div",{children:[Object(h.jsx)("h3",{children:a.title}),Object(h.jsx)("hr",{style:{border:"none",margin:".25em 0",height:".05em",background:"whitesmoke"}}),Object(h.jsx)("p",{children:a.body})]}),Object(h.jsx)("br",{}),Object(h.jsx)("h4",{children:"Comments:"}),f?Object(h.jsx)(A,{}):Object(h.jsx)("ol",{style:{padding:".25em 1em"},children:u.map((function(e){return Object(h.jsxs)("li",{children:[Object(h.jsxs)("h5",{children:[e.email,":"]}),Object(h.jsx)("p",{children:e.name})]},e.id)}))})]})},ue=function(){var e=Object(c.useContext)(u),t=e.isAuth;return e.authInProgress?Object(h.jsx)("h3",{className:"App-body",children:"Authorization in Progress..."}):t?Object(h.jsxs)(v.d,{className:"App-body",children:[Object(h.jsx)(v.b,{path:"/posts",element:Object(h.jsx)(se,{})}),Object(h.jsx)(v.b,{path:"/posts/:id",element:Object(h.jsx)(ie,{})}),Object(h.jsx)(v.b,{path:"/about",element:Object(h.jsx)(_,{})}),Object(h.jsx)(v.b,{path:"/*",element:Object(h.jsx)(v.a,{replace:!0,to:"/posts"})})]}):Object(h.jsxs)(v.d,{className:"App-body",children:[Object(h.jsx)(v.b,{path:"/login",element:Object(h.jsx)(oe,{})}),Object(h.jsx)(v.b,{path:"/*",element:Object(h.jsx)(v.a,{replace:!0,to:"/login"})})]})};var le=function(){var e=Object(c.useState)(!1),t=Object(s.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)(!1),l=Object(s.a)(r,2),j=l[0],b=l[1],d=Object(c.useState)(!0),p=Object(s.a)(d,2),O=p[0],m=p[1],x=Object(c.useState)(1),f=Object(s.a)(x,2),v=f[0],_=f[1],C=Object(c.useState)(10),N=Object(s.a)(C,2),P=N[0],w=N[1];return Object(c.useEffect)((function(){localStorage.getItem("userAuth")&&b(!0),setTimeout((function(){return m(!1)}),500)}),[]),Object(h.jsx)(u.Provider,{value:{isAuth:j,setIsAuth:b,authInProgress:O,page:v,setPage:_,limit:P,setLimit:w},children:Object(h.jsx)(i.Provider,{value:{modal:n,setModal:a},children:Object(h.jsx)(o.a,{children:Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(g,{}),Object(h.jsx)(y,{}),Object(h.jsx)(ue,{})]})})})})};r.a.render(Object(h.jsx)(le,{}),document.getElementById("root"))}},[[74,1,2]]]);
//# sourceMappingURL=main.842bcf54.chunk.js.map