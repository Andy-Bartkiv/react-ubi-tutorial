(this["webpackJsonpreact-ubi-tutorial"]=this["webpackJsonpreact-ubi-tutorial"]||[]).push([[0],{16:function(e,t,n){e.exports={my_btn:"MyButton_my_btn__moEPu"}},17:function(e,t,n){e.exports={my_input:"MyInput_my_input__20u9v"}},18:function(e,t,n){e.exports={my_select:"MySelect_my_select__p_LXI"}},25:function(e,t,n){},29:function(e,t,n){},30:function(e,t,n){},31:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(6),r=n.n(a),o=n(12),i=n(4),s=(n(25),n(0));var l=function(){var e=Object(c.useState)(new Date),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(c.useEffect)((function(){var e=setInterval((function(){return a(new Date)}),1e3);return function(){return clearInterval(e)}}),[]),Object(s.jsx)("h3",{className:"clock",children:n.toLocaleTimeString()})},u=n(2),j=n(15),b=n(16),d=n.n(b),O=["children"],m=function(e){var t=e.children,n=Object(j.a)(e,O);return Object(s.jsx)("button",Object(u.a)(Object(u.a)({},n),{},{className:d.a.my_btn,children:t}))},h=function(e){return Object(s.jsxs)("div",{className:"post",children:[Object(s.jsxs)("div",{className:"post_content",children:[Object(s.jsxs)("strong",{children:[" ",e.number,". ",e.post.title," "]}),Object(s.jsx)("div",{children:e.post.body})]}),Object(s.jsx)("div",{className:"post_btns",children:Object(s.jsx)(m,{onClick:function(){return e.deletePost(e.post)},children:"Del"})})]})},p=n(33),f=n(32),v=function(e){var t=e.posts,n=e.deletePost,c=t.length>0?"Post List #1":"No Posts to Show";return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:c}),Object(s.jsx)(p.a,{children:t.map((function(e,t){return Object(s.jsx)(f.a,{timeout:500,classNames:"item",children:Object(s.jsx)(h,{number:t+1,post:e,deletePost:n})},e.id)}))})]})},x=n(17),y=n.n(x),_=function(e){return Object(s.jsx)("input",Object(u.a)(Object(u.a)({},e),{},{className:y.a.my_input}))};n(29);var g=function(e){var t=Object(c.useState)({title:"",body:""}),n=Object(i.a)(t,2),a=n[0],r=n[1];return Object(s.jsxs)("form",{className:"post_form",children:[Object(s.jsx)(_,{type:"text",placeholder:"Post Title",value:a.title,onChange:function(e){return r(Object(u.a)(Object(u.a)({},a),{},{title:e.target.value}))}}),Object(s.jsx)(_,{type:"text",placeholder:"Post Description",value:a.body,onChange:function(e){return r(Object(u.a)(Object(u.a)({},a),{},{body:e.target.value}))}}),Object(s.jsx)(m,{onClick:function(t){t.preventDefault();var n=Object(u.a)(Object(u.a)({},a),{},{id:Date.now()});e.addPost(n),r({title:"",body:""})},children:"Create Post"})]})},C=n(18),N=n.n(C),P=function(e){var t=e.options,n=e.defaultValue,c=e.value,a=e.onChange;return Object(s.jsxs)("select",{className:N.a.my_select,value:c,onChange:function(e){return a(e.target.value)},children:[Object(s.jsx)("option",{disabled:!0,value:"",children:n}),t.map((function(e){return Object(s.jsx)("option",{value:e.value,children:e.name},e.value)}))]})},S=function(e){var t=e.filter,n=e.setFilter;return Object(s.jsxs)("div",{children:[Object(s.jsx)(_,{placeholder:"Search by Title or Description...",value:t.search,onChange:function(e){return n(Object(u.a)(Object(u.a)({},t),{},{search:e.target.value}))}}),Object(s.jsx)(P,{value:t.sort,onChange:function(e){return n(Object(u.a)(Object(u.a)({},t),{},{sort:e}))},defaultValue:"Sort Mode:",options:[{value:"title",name:"By Title"},{value:"body",name:"By Description"}]})]})},M=n(9),k=n.n(M),w=function(e){var t=e.children,n=e.visible,c=e.setVisible,a=n?[k.a.my_modal,k.a.active]:[k.a.my_modal];return Object(s.jsx)("div",{className:a.join(" "),onClick:function(){return c(!1)},children:Object(s.jsx)("div",{className:k.a.modal_content,onClick:function(e){return e.stopPropagation()},children:t})})},D=(n(30),function(e,t){var n=t.sort,a=t.search,r=function(e,t){return Object(c.useMemo)((function(){return t?Object(o.a)(e).sort((function(e,n){return e[t].localeCompare(n[t])})):e}),[t,e])}(e,n);return Object(c.useMemo)((function(){return a?r.filter((function(e){return e.title.toLowerCase().includes(a)||e.body.toLowerCase().includes(a)})):r}),[a,r])});var L=function(){console.log;var e=Object(c.useState)([{id:1,title:"a-JavaScript",body:"c-23 Lorem ipsum dolor sit amet"},{id:2,title:"b-JavaScript",body:"b-13 Lorem ipsum dolor sit amet"},{id:3,title:"c-JavaScript",body:"a-12 Lorem ipsum dolor sit amet"}]),t=Object(i.a)(e,2),n=t[0],a=t[1],r=Object(c.useState)({sort:"",search:""}),u=Object(i.a)(r,2),j=u[0],b=u[1],d=D(n,j),O=Object(c.useState)(!1),h=Object(i.a)(O,2),p=h[0],f=h[1];return Object(s.jsxs)("div",{className:"App",children:[Object(s.jsxs)("div",{className:"App-header",children:[Object(s.jsx)(m,{style:{marginLeft:"1em"},onClick:function(){return f(!0)},children:"Create New Post"}),Object(s.jsx)("h2",{children:"React UbiTV-Tutorial"}),Object(s.jsx)(l,{})]}),Object(s.jsxs)("div",{className:"App-body",children:[Object(s.jsx)(w,{visible:p,setVisible:f,children:Object(s.jsx)(g,{addPost:function(e){a([].concat(Object(o.a)(n),[e])),f(!1)}})}),Object(s.jsx)(S,{filter:j,setFilter:b}),Object(s.jsx)("hr",{style:{margin:".5em 0",background:"orange",border:"none",height:".025em"}}),Object(s.jsx)(v,{posts:d,deletePost:function(e){a(n.filter((function(t){return t.id!==e.id})))}})]})]})};r.a.render(Object(s.jsx)(L,{}),document.getElementById("root"))},9:function(e,t,n){e.exports={my_modal:"MyModal_my_modal__DCa8t",modal_content:"MyModal_modal_content__1QGTU",active:"MyModal_active__33RIW"}}},[[31,1,2]]]);
//# sourceMappingURL=main.a51b3e82.chunk.js.map