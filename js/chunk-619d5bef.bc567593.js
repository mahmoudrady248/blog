(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-619d5bef"],{"06c2":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[t._m(0),n("form",{on:{submit:function(e){return e.preventDefault(),t.savePost(e)}}},[n("b-field",{attrs:{label:"ID"}},[n("b-input",{model:{value:t.post_id,callback:function(e){t.post_id=e},expression:"post_id"}})],1),n("b-field",{attrs:{label:"Title"}},[n("b-input",{model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),n("b-field",{attrs:{label:"Content"}},[n("b-input",{attrs:{type:"textarea"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),n("button",{staticClass:"button is-primary",attrs:{type:"submit"}},[t._v("\n             Send message\n         ")])],1)])},i=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"content text-center"},[n("h2",[t._v("Add Post")])])}],o=n("1dfc"),l={data:function(){return{post_id:null,title:null,content:null,created_at:""}},methods:{savePost:function(){var t=this;o["a"].collection("/blogs/drB2C5hyY7HhmVNdAjG8/news").add({post_id:this.post_id,title:this.title,content:this.content,like:0,created_at:new Date}).then(function(e){t.$router.push("/"),t.$store.dispatch("getAllPosts")}).catch(function(t){return console.log(err)})}}},a=l,c=(n("6a07"),n("2877")),r=Object(c["a"])(a,s,i,!1,null,null,null);r.options.__file="addPost.vue";e["default"]=r.exports},"6a07":function(t,e,n){"use strict";var s=n("7769"),i=n.n(s);i.a},7769:function(t,e,n){}}]);
//# sourceMappingURL=chunk-619d5bef.bc567593.js.map