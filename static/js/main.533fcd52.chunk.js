(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{10:function(e,t,n){e.exports={nav_link:"Navigation_nav_link__1JQ1c",nav:"Navigation_nav__16eL0"}},11:function(e,t,n){e.exports={wrapper:"Users_wrapper__UJgO7",ava:"Users_ava__1cU0p",description:"Users_description__2Q3Wm",currentPage:"Users_currentPage__V-LdM",preloader:"Users_preloader__1atKF",circle:"Users_circle__3XJDa",ItemsPreload:"Users_ItemsPreload__2SIH7"}},12:function(e,t,n){e.exports={header:"Header_header__k7DWt",title_blue:"Header_title_blue__1Bn_L",title:"Header_title__1lnKZ",searchButton:"Header_searchButton__149PC",input:"Header_input__1i2Ms",search:"Header_search__aUpf8"}},21:function(e,t,n){e.exports={item:"Post_item__UbIuW"}},24:function(e,t,n){e.exports={messages:"Messages_messages__3bKAO",item:"Messages_item__3LI5Y",dialog:"Messages_dialog__3JKPD"}},40:function(e,t,n){},41:function(e,t,n){e.exports={img:"ProfileInfo_img__10XM1"}},42:function(e,t,n){e.exports={posts:"MyPosts_posts__3VIxe"}},49:function(e,t,n){},5:function(e,t,n){e.exports={sign:"SignUp_sign__gARew",title:"SignUp_title__raVrl",subtitle:"SignUp_subtitle__3oZyv",registration:"SignUp_registration__3I7-a",authDescription:"SignUp_authDescription__2gjEJ",login:"SignUp_login__3M53_"}},50:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),c=n(18),r=n.n(c),i=(n(49),n(50),n(2)),o=n(6),u=n(5),l=n.n(u),j=n(0);var d=function(){var e=Object(s.useState)(""),t=Object(o.a)(e,2),n=t[0],a=t[1],c=Object(s.useState)(""),r=Object(o.a)(c,2),i=r[0],u=r[1],d=Object(s.useState)(""),b=Object(o.a)(d,2),g=b[0],h=b[1],p=Object(s.useState)({}),O=Object(o.a)(p,2),f=O[0],x=O[1];return Object(j.jsxs)("div",{className:l.a.sign,children:["I am page Music",Object(j.jsx)("input",{type:"text",value:n,onChange:function(e){return a(e.currentTarget.value)}}),Object(j.jsx)("input",{type:"text",value:i,onChange:function(e){return u(e.currentTarget.value)}}),Object(j.jsx)("input",{type:"text",value:g,onChange:function(e){return h(e.currentTarget.value)}}),Object(j.jsx)("button",{onClick:function(){return function(){x({name:arguments.length<=0?void 0:arguments[0],age:arguments.length<=1?void 0:arguments[1],weight:arguments.length<=2?void 0:arguments[2]})}(n,i,g)}}),Object(j.jsx)("span",{children:Object.entries(f)})]})};var b=function(){return Object(j.jsx)("div",{className:l.a.sign,children:"I am page Settings"})},g=n(12),h=n.n(g),p=n(10),O=n.n(p),f=n(4);function x(){return Object(j.jsxs)("nav",{className:O.a.nav,children:[Object(j.jsxs)("span",{children:[Object(j.jsx)(f.b,{to:"/profile",className:function(e){return e.isActive?"".concat(O.a.nav_link):""},children:"Profile"})," "]}),Object(j.jsx)("span",{children:Object(j.jsx)(f.b,{to:"/messages",className:function(e){return e.isActive?"".concat(O.a.nav_link):""},children:"Messages"})}),Object(j.jsx)("span",{children:Object(j.jsx)(f.b,{to:"/users",className:function(e){return e.isActive?"".concat(O.a.nav_link):""},children:"Users"})}),Object(j.jsx)("span",{children:Object(j.jsx)(f.b,{to:"/music",className:function(e){return e.isActive?"".concat(O.a.nav_link):""},children:"Music"})}),Object(j.jsx)("span",{children:Object(j.jsx)(f.b,{to:"/settings",className:function(e){return e.isActive?"".concat(O.a.nav_link):""},children:"Settings"})}),Object(j.jsx)("span",{children:Object(j.jsx)(f.b,{to:"/sign_up",className:function(e){return e.isActive?"".concat(O.a.nav_link):""},children:"Sign up"})})]})}function m(){return Object(j.jsxs)("header",{className:h.a.header,children:[Object(j.jsxs)("div",{className:h.a.title,children:[Object(j.jsx)("span",{className:h.a.title_blue,children:"TVER"}),"network"]}),Object(j.jsx)("div",{children:Object(j.jsx)(x,{})}),Object(j.jsxs)("div",{className:h.a.searchButton,children:[Object(j.jsx)("input",{className:h.a.input,type:"text",placeholder:"Search"}),Object(j.jsx)("span",{className:h.a.search,children:"+"})]})]})}var v=n(19),_=n(20),P=n(23),w=n(22),T=n(9),N=n(14),I=n(3),S=n(38),U=n.n(S).a.create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0/",headers:{"API-KEY":"b9ab541c-e0c5-4e3f-a6cb-7e9f4deadb80"}}),y="FOLLOWED",k="UNFOLLOWED",C="SET_USERS",D="SET_CURRENT_PAGE",A="SET_TOTAL_USERS_COUNT",E="SET_IS_FETCHING",F="SET_FOLLOW_IN_PROGRESS",M={users:[],pageSize:5,totalUsersCount:0,currentPage:1,isFetching:!1,folowInProgress:[]},L=function(e){return{type:E,isFetching:e}},R=function(e,t){return{type:F,isFetching:e,userId:t}},H=n(28),z=n(39),W=n.n(z),G=n(11),J=n.n(G),K=n(21),B=n.n(K);function V(e){var t=e.currentItems,n=Object(H.a)(e,["currentItems"]),s=n.isFetching?J.a.ItemsPreload:"";console.log("Items is mound");return Object(j.jsx)(j.Fragment,{children:t&&t.map((function(e){return Object(j.jsxs)("div",{className:"".concat(J.a.wrapper," ").concat(s),children:[Object(j.jsxs)("div",{className:J.a.ava,children:[Object(j.jsx)("div",{className:B.a.item,children:Object(j.jsx)(f.b,{to:"/profile/"+e.id,children:Object(j.jsx)("img",{src:e.photos.large?e.photos.large:e.photos.small?e.photos.small:q,alt:"avatar"})})}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{disabled:n.folowInProgress.some((function(t){return t===e.id})),onClick:function(){return t=e.id,void(e.followed?n.unFollow(t):n.follow(t));var t},children:e.followed?"unFollow":"follow"})})]}),Object(j.jsxs)("div",{className:J.a.description,children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:e.name}),Object(j.jsx)("div",{children:e.status})]}),Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:e.uniqueUrlName}),Object(j.jsx)("div",{children:"m.location.city"})]})]})]},e.id)}))})}function X(e){for(var t=e.itemsPerPage,n=Object(H.a)(e,["itemsPerPage"]),a=Math.ceil(n.totalUsersCount/n.pageSize),c=[],r=1;r<=a;r++)c.push(r);var i=Object(s.useState)(null),u=Object(o.a)(i,2),l=(u[0],u[1]),d=Object(s.useState)(0),b=Object(o.a)(d,2),g=b[0],h=b[1];Object(s.useEffect)((function(){var e=g+t;l(c.slice(g,e))}),[g,t]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)(V,{currentItems:n.users,unFollow:n.unFollow,follow:n.follow,isFetching:n.isFetching,folowInProgress:n.folowInProgress}),Object(j.jsx)(W.a,{className:"paginate",breakLabel:"...",nextLabel:" >",onPageChange:function(e){var s=e.selected*t%c.length;n.currentPageChanged(s),h(s)},pageRangeDisplayed:5,pageCount:a,previousLabel:"< ",renderOnZeroPageCount:function(){return null}})]})}var Y=function(){return Object(j.jsx)(j.Fragment,{children:Object(j.jsx)("span",{className:J.a.preloader})})},q="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaznFcbeSJTVKFzMptmjTuD6XEAkUuN7SxkA&usqp=CAU",Z=function(e){Object(P.a)(n,e);var t=Object(w.a)(n);function n(){var e;Object(v.a)(this,n);for(var s=arguments.length,a=new Array(s),c=0;c<s;c++)a[c]=arguments[c];return(e=t.call.apply(t,[this].concat(a))).currentPageChanged=function(t){e.props.getUsersThunk(t,e.props.pageSize),e.props.setCurrentPage(t)},e}return Object(_.a)(n,[{key:"componentDidMount",value:function(){this.props.getUsersThunk(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(j.jsx)("div",{className:l.a.sign,children:Object(j.jsxs)("div",{children:[this.props.isFetching?Object(j.jsx)(Y,{}):null,Object(j.jsx)(X,{itemsPerPage:this.props.pageSize,isFetching:this.props.isFetching,users:this.props.users,follow:this.props.followThunk,unFollow:this.props.unfollowThunk,currentPageChanged:this.currentPageChanged,totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,folowInProgress:this.props.folowInProgress})]})})}}]),n}(a.a.Component),Q=Object(T.b)((function(e){return{users:e.usersPage.users,pageSize:e.usersPage.pageSize,totalUsersCount:e.usersPage.totalUsersCount,currentPage:e.usersPage.currentPage,isFetching:e.usersPage.isFetching,folowInProgress:e.usersPage.folowInProgress}}),{followThunk:function(e){return function(t){t(R(!0,e)),function(e){return U.post("follow/".concat(e),{}).then((function(e){return e.data}))}(e).then((function(n){0===n.resultCode&&t({type:k,userID:e}),t(R(!1,e))}))}},unfollowThunk:function(e){return function(t){t(R(!0,e)),function(e){return U.delete("follow/".concat(e)).then((function(e){return e.data}))}(e).then((function(n){0===n.resultCode&&t({type:y,userID:e}),t(R(!1,e))}))}},setCurrentPage:function(e){return{type:D,currentPage:e}},setFollowProgress:R,getUsersThunk:function(e,t){return function(n){n(L(!0)),function(e,t){return U.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))}(e,t).then((function(e){var t,s;n((t=e.items,{type:C,users:t})),n((s=e.totalCount,{type:A,totalUsersCount:s})),n(L(!1))}))}}})(Z),$=n(40),ee=n.n($),te=n(41),ne=n.n(te),se=function(e){return Object(j.jsxs)("div",{children:["  ",e.profile.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("div",{children:Object(j.jsx)("img",{className:ne.a.img,src:e.photos.large?e.photos.large:"https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350"})}),Object(j.jsxs)("div",{children:["fullName:",e.fullName]}),Object(j.jsxs)("div",{children:["aboutMe:",e.aboutMe]}),Object(j.jsx)("div",{children:e.contacts.vk})]},e.userId)}))]})},ae=n(77),ce="ADD_POST",re="UPDATE_NEW_POST_TEXT",ie="SET_USER_PROFILE",oe={profile:[],posts:[{id:Object(ae.a)(),message:"Hi, how are you?",likesCount:3},{id:Object(ae.a)(),message:"It's my first post",likesCount:5},{id:Object(ae.a)(),message:"What are you doing maaaaaan?",likesCount:16}],newPostText:"learn React"},ue=function(e){return function(t){(function(e){return U.get("profile/".concat(e)).then((function(e){return e.data}))})(e).then((function(e){t({type:ie,userProfile:e})}))}},le=n(42),je=n.n(le),de=function(e){return Object(j.jsx)("div",{className:B.a.item,children:e.post.map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{alt:"photo",src:"https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/62/62d546ccdfc4a838b2e0d622b1b292bfa2af90ec_full.jpg"}),e.message,Object(j.jsx)("div",{children:Object(j.jsxs)("span",{children:["like ",e.likesCount]})})]},e.id)}))})},be=function(e){return Object(j.jsxs)("div",{children:["My posts",Object(j.jsxs)("div",{className:je.a.posts,children:[Object(j.jsx)("textarea",{onChange:function(t){e.updateNewPostText(t.currentTarget.value)},value:e.value}),Object(j.jsx)("button",{onClick:function(){e.addPost()},children:"Add post"})]}),Object(j.jsx)("div",{children:Object(j.jsx)(de,{post:e.statePost})})]})},ge=Object(T.b)((function(e){return{statePost:e.profilePage.posts,value:e.profilePage.newPostText}}),{addPost:function(){return{type:ce}},updateNewPostText:function(e){return{type:re,newText:e}}})(be),he=function(e){return Object(j.jsxs)("div",{className:"".concat(l.a.sign," ").concat(ee.a.profile),children:[Object(j.jsx)(se,{profile:e.profile}),Object(j.jsx)(ge,{})]})},pe=function(){var e=Object(T.c)(),t=Object(T.d)((function(e){return e.profilePage.profile})),n=Object(i.g)().userId,a=n;return Object(s.useEffect)((function(){a||(a="21570"),e(ue(a))}),[n]),Object(j.jsx)("div",{children:Object(j.jsx)(he,{profile:t})})};function Oe(e){return Object(j.jsxs)("div",{className:l.a.sign,children:[Object(j.jsx)("h1",{className:l.a.title,children:"Your Best Social Networks"}),Object(j.jsx)("p",{className:l.a.subtitle,children:"Make your creative works online and deliver to the world "}),e.isAuth?Object(j.jsxs)("div",{className:l.a.authDescription,children:["Your registration name is ",Object(j.jsx)("span",{className:l.a.login,children:e.login})]}):Object(j.jsx)(f.b,{to:"/login",children:Object(j.jsx)("div",{className:l.a.registration,children:"LOGIN"})})]})}var fe={userId:null,email:null,login:null,isAuth:!1},xe=function(e){Object(P.a)(n,e);var t=Object(w.a)(n);function n(){return Object(v.a)(this,n),t.apply(this,arguments)}return Object(_.a)(n,[{key:"componentDidMount",value:function(){this.props.setUserDataThunk()}},{key:"render",value:function(){return Object(j.jsx)(Oe,{login:this.props.login,isAuth:this.props.isAuth})}}]),n}(a.a.Component),me=Object(T.b)((function(e){return{isAuth:e.auth.isAuth,login:e.auth.login,userId:e.auth.userId,email:e.auth.email}}),{setUserDataThunk:function(){return function(e){U.get("auth/me").then((function(e){return e.data})).then((function(t){if(0===t.resultCode){var n=t.data,s=n.id,a=n.email,c=n.login;e(function(e,t,n){return{type:"SET_AUTH_USER_DATA",data:{userId:e,email:t,login:n}}}(s,a,c))}}))}}})(xe),ve="ADD_DIALOG_AC",_e="UPDATE_NEW_DIALOG_TEXT",Pe={dialogs:[{id:Object(ae.a)(),title:"How do you do?"},{id:Object(ae.a)(),title:"What was you learned in It"},{id:Object(ae.a)(),title:"Yo"},{id:Object(ae.a)(),title:"What a Fuck"},{id:Object(ae.a)(),title:"Go walk today"}],messages:[{id:Object(ae.a)(),name:"Pavel"},{id:Object(ae.a)(),name:"Ivan"},{id:Object(ae.a)(),name:"Roman"},{id:Object(ae.a)(),name:"Kostya"},{id:Object(ae.a)(),name:"Misha"}],newDialogText:"Hello!!!"};function we(e){return Object(j.jsx)("div",{children:e.stateMessage.map((function(e){return Object(j.jsxs)("div",{children:[" ",Object(j.jsx)(f.b,{to:"./".concat(e.id),children:e.name})," "]},e.id)}))})}var Te=n(24),Ne=n.n(Te);var Ie=Object(T.b)((function(e){return{stateDialogs:e.dialogsPage.dialogs,stateMessage:e.dialogsPage.messages,value:e.dialogsPage.newDialogText}}),{addDialog:function(){return{type:ve}},updateNewDialogText:function(e){return{type:_e,newText:e}}})((function(e){return Object(j.jsx)("div",{className:l.a.sign,children:Object(j.jsxs)("div",{className:Ne.a.messages,children:[Object(j.jsx)("div",{className:Ne.a.item,children:Object(j.jsx)(we,{stateMessage:e.stateMessage})}),Object(j.jsxs)("div",{className:Ne.a.dialog,children:[e.stateDialogs.map((function(e){return Object(j.jsx)("div",{children:e.title},e.id)})),Object(j.jsx)("textarea",{value:e.value,onChange:function(t){e.updateNewDialogText(t.currentTarget.value)}}),Object(j.jsx)("button",{onClick:function(){e.addDialog()},children:"add"})]})]})})})),Se=function(){return Object(j.jsxs)("div",{className:"wrapper_bg",children:[Object(j.jsx)(m,{}),Object(j.jsxs)(i.c,{children:[Object(j.jsx)(i.a,{path:"/profile",element:Object(j.jsx)(pe,{})}),Object(j.jsx)(i.a,{path:"/profile/:userId",element:Object(j.jsx)(pe,{})}),Object(j.jsx)(i.a,{path:"/messages/*",element:Object(j.jsx)(Ie,{})}),Object(j.jsx)(i.a,{path:"/users/*",element:Object(j.jsx)(Q,{})}),Object(j.jsx)(i.a,{path:"/music/*",element:Object(j.jsx)(d,{})}),Object(j.jsx)(i.a,{path:"/settings/*",element:Object(j.jsx)(b,{})}),Object(j.jsx)(i.a,{path:"/sign_up/*",element:Object(j.jsx)(me,{})})]})]})},Ue=n(25),ye=n(43),ke=Object(Ue.b)({profilePage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case ce:var n={id:Object(ae.a)(),message:e.newPostText,likesCount:0};return Object(I.a)(Object(I.a)({},e),{},{posts:[].concat(Object(N.a)(e.posts),[n]),newPostText:""});case re:return Object(I.a)(Object(I.a)({},e),{},{newPostText:t.newText});case ie:return Object(I.a)(Object(I.a)({},e),{},{profile:[t.userProfile]});default:return e}},dialogsPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Pe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _e:return Object(I.a)(Object(I.a)({},e),{},{newDialogText:t.newText});case ve:var n={id:Object(ae.a)(),title:e.newDialogText};return Object(I.a)(Object(I.a)({},e),{},{dialogs:[].concat(Object(N.a)(e.dialogs),[n]),newDialogText:""});default:return e}},usersPage:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:M,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:case k:return Object(I.a)(Object(I.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userID?Object(I.a)(Object(I.a)({},e),{},{followed:!e.followed}):e}))});case C:return Object(I.a)(Object(I.a)({},e),{},{users:t.users});case D:return Object(I.a)(Object(I.a)({},e),{},{currentPage:t.currentPage});case A:return Object(I.a)(Object(I.a)({},e),{},{totalUsersCount:t.totalUsersCount});case E:return Object(I.a)(Object(I.a)({},e),{},{isFetching:t.isFetching});case F:return t.isFetching?Object(I.a)(Object(I.a)({},e),{},{folowInProgress:[].concat(Object(N.a)(e.folowInProgress),[t.userId])}):Object(I.a)(Object(I.a)({},e),{},{folowInProgress:e.folowInProgress.filter((function(e){return e!==t.userId}))});default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:fe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SET_AUTH_USER_DATA":return Object(I.a)(Object(I.a)(Object(I.a)({},e),t.data),{},{isAuth:!0});default:return e}}}),Ce=Object(Ue.c)(ke,Object(Ue.a)(ye.a));window.store=Ce;var De=Ce;r.a.render(Object(j.jsx)(f.a,{children:Object(j.jsx)(T.a,{store:De,children:Object(j.jsx)(Se,{})})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.533fcd52.chunk.js.map