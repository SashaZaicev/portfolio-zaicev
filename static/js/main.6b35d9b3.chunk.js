(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{10:function(e,t,a){e.exports={main:"Main_main__L5Kq2",container:"Main_container__19sNk",greeting:"Main_greeting__2kEZl",photo:"Main_photo__2dETw",image:"Main_image__28v_z"}},12:function(e,t,a){e.exports={skill:"Skill_skill__2p3Bz",icon:"Skill_icon__2BNMI",skillTitle:"Skill_skillTitle__2yB-V",description:"Skill_description__9uPmI"}},21:function(e,t,a){e.exports={skills:"Skills_skills__zmCaz",container:"Skills_container__AT7aC",skillsWrapper:"Skills_skillsWrapper__369lS",skill:"Skills_skill__o-9_C",icon:"Skills_icon__2ZAsR",fadeInUp:"Skills_fadeInUp__I6C4c"}},22:function(e,t,a){e.exports={slogan:"Slogan_slogan__3dgRe",container:"Slogan_container__1pw6h",btnShow:"Slogan_btnShow__DGGY3"}},23:function(e,t,a){e.exports={projects:"Projects_projects__2zfhj",container:"Projects_container__zk-6c",headerTitle:"Projects_headerTitle__2Eq8L",projectsWrapper:"Projects_projectsWrapper__2cAAX",line:"Projects_line__1KAEF"}},32:function(e,t,a){e.exports={blockTitle:"BlockTitle_blockTitle__28E7C"}},42:function(e,t,a){},43:function(e,t,a){},5:function(e,t,a){e.exports={project:"Project_project__1typs",btnShow:"Project_btnShow__1zqGw",projectImg:"Project_projectImg__3EzW9",description:"Project_description__2YBCZ",projectTitle:"Project_projectTitle__219hS"}},53:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(13),o=a.n(i),r=(a(42),a(37)),s=(a(43),a(21)),l=a.n(s),m=a(15),p=a(16),u=a(20),_=a(19),d=a(12),h=a.n(d),v=a.p+"static/media/html-icon.285bdcd4.svg",f=a.p+"static/media/react-icon.af74c0ff.svg",E=a.p+"static/media/js-icon.6a563750.svg",g=f,b=E,k=v,N=function(e){Object(u.a)(a,e);var t=Object(_.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state=[{icon:k,title:"HTML & CSS",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur dicta "},{icon:b,title:"JS",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur dicta distinctio"},{icon:g,title:"REACT",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur dicta distinctio "}],n}return Object(p.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:h.a.skill},c.a.createElement("div",{className:h.a.icon},c.a.createElement("img",{src:this.props.icon,alt:""})),c.a.createElement("span",{className:h.a.skillTitle},this.props.title),c.a.createElement("span",{className:h.a.description},this.props.description," "))}}]),a}(c.a.Component),S=a(32),w=a.n(S);var y=function(e){return c.a.createElement("div",{className:w.a.blockTitle},e.title)},j=a(4),C=a.n(j);var T=function(e){var t=f,a=E,n=v;return c.a.createElement("div",{className:l.a.skills,id:"skills"},c.a.createElement(C.a,{bottom:!0},c.a.createElement("div",{className:l.a.container},c.a.createElement(y,{title:"My skills"}),c.a.createElement("div",{className:l.a.skillsWrapper},c.a.createElement(N,{icon:n,title:"HTML & CSS",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur dicta "}),c.a.createElement(N,{icon:a,title:"JS",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur dicta distinctio"}),c.a.createElement(N,{icon:t,title:"REACT",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur dicta distinctio "}),c.a.createElement(N,{icon:t,title:"TYPESCRIPT",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur dicta distinctio "})))))},A=a(10),O=a.n(A);var I=function(){return c.a.createElement("div",{className:O.a.main,id:"main"},c.a.createElement("div",{className:O.a.container},c.a.createElement("div",{className:O.a.greeting},c.a.createElement("span",null,"Hello!"),c.a.createElement("span",null,"My name ",c.a.createElement("span",null,"Alexander")),c.a.createElement("h1",null,"I am front-end-developer")),c.a.createElement("div",{className:O.a.photo},c.a.createElement("div",{className:O.a.image}))))},M=a(9),B=a.n(M),L=a.p+"static/media/menuLogo.52223e71.png",z=a(18),q=a(29),P="CHANGE_NAVBAR",x={isOpenNavBar:!1,sectionsMenu:["main","skills","projects","contacts"]},W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case P:return Object(q.a)(Object(q.a)({},e),{},{isOpenNavBar:t.isOpenNavBar});default:return e}},F=function(e){Object(u.a)(a,e);var t=Object(_.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={styleLink:{color:""},styleNav:{background:""}},e.isOpenNav=function(){e.props.changeNavBarAC(!0)},e.isCloseNav=function(){e.props.changeNavBarAC(!1)},e.changedTheme=function(){e.props.setChangesTheme(!e.props.changesTheme)},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){window.scrollY,e.setState({styleLink:{color:"#3d4451"},styleNav:{}})}))}},{key:"render",value:function(){var e=this,t=this.props.sectionsMenu.map((function(t,a){return c.a.createElement("a",{className:B.a.link,style:e.state.styleLink,key:a,onClick:e.isCloseNav,href:"#"+t,title:t},c.a.createElement("span",null,t," "))}));return c.a.createElement("div",{className:B.a.wrapper},c.a.createElement("button",{className:B.a.contButton,onClick:this.changedTheme},"TypeColor CLICK ME"),this.props.isOpenNavBar?c.a.createElement("div",{className:B.a.container,style:this.state.styleNav},c.a.createElement("img",{className:B.a.isOpenMenuLogo,src:L,onClick:this.isCloseNav}),c.a.createElement("nav",null,t)):c.a.createElement("img",{className:B.a.isCloseMenuLogo,src:L,alt:"menu",title:"menu",onClick:this.isOpenNav}))}}]),a}(n.Component),H=Object(z.b)((function(e){return{isOpenNavBar:e.isOpenNavBar,sectionsMenu:e.sectionsMenu,changeTheme:e.changesTheme}}),{changeNavBarAC:function(e){return{type:P,isOpenNavBar:e}}})(F),R=a(22),Z=a.n(R);var G=function(){return c.a.createElement("div",{className:Z.a.slogan},c.a.createElement(C.a,{bottom:!0},c.a.createElement("div",{className:Z.a.container},c.a.createElement(y,{title:"I am considering options for remote work"}),c.a.createElement("a",{className:Z.a.btnShow,href:""},"Employ"))))},D=a(23),K=a.n(D),J=a.p+"static/media/todolist.ef42c283.png",X=a.p+"static/media/social-network.91e20c0c.jpg",Y=a.p+"static/media/phone-shop.051b33d8.png",U=a.p+"static/media/webPhoto.1cc216a3.png",Q=a(5),V=a.n(Q);var $=function(e){return c.a.createElement("div",{className:V.a.project},c.a.createElement("div",{className:V.a.projectImg,style:e.style},c.a.createElement("a",{className:V.a.btnShow,href:e.href_first},"SITE"),c.a.createElement("a",{className:V.a.btnShow,href:e.href_second},"CODE"),c.a.createElement("br",null),e.href_third&&e.href_fourth?c.a.createElement("div",null,c.a.createElement("a",{className:V.a.btnShow,href:e.href_third},"SITE TS"),c.a.createElement("a",{className:V.a.btnShow,href:e.href_fourth},"CODE TS")):""),c.a.createElement("span",{className:V.a.projectTitle},e.title),c.a.createElement("span",{className:V.a.description},e.description))};var ee=function(){var e={backgroundImage:"url(".concat(J,")")},t={backgroundImage:"url(".concat(X,")")},a={backgroundImage:"url(".concat(Y,")")},n={backgroundImage:"url(".concat(U,")")};return c.a.createElement("div",{className:K.a.projects,id:"projects"},c.a.createElement(C.a,{bottom:!0},c.a.createElement("div",{className:K.a.container},c.a.createElement(y,{title:"My projects"}),c.a.createElement("div",{className:K.a.projectsWrapper},c.a.createElement($,{title:"To do list",style:e,description:"To do list for every day on the week",href_first:"https://sashazaicev.github.io/to-do-list-zaicev/",href_second:"https://github.com/SashaZaicev/to-do-list-zaicev"}),c.a.createElement($,{title:"Socialnetwork",style:t,description:"Social network: research project,\nsharpening skills",href_first:"https://sashazaicev.github.io/social_network_zaicev/",href_second:"https://github.com/SashaZaicev/social_network_zaicev",href_third:"https://sashazaicev.github.io/social-network-ts/",href_fourth:"https://github.com/SashaZaicev/social-network-ts"}),c.a.createElement($,{title:"Phone-shop",style:a,description:"Mobile phone shop with use paypal",href_first:"https://react-phone-store-zaicev.netlify.com/",href_second:"https://github.com/SashaZaicev/react-phone-store"}),c.a.createElement($,{title:"Web-Photo",style:n,description:"For photographer with reverse form",href_first:"https://sashazaicev.github.io/photo_web/",href_second:"https://github.com/SashaZaicev/photo_web"})))))},te=a(8),ae=a.n(te),ne=a(34),ce=a.n(ne);var ie=function(){return c.a.createElement("div",{id:"contacts",className:ae.a.contacts},c.a.createElement(C.a,{bottom:!0},c.a.createElement("div",{className:ae.a.container},c.a.createElement(y,{title:"Contacts"}),c.a.createElement("form",{className:ae.a.formWrapper,onSubmit:function(e){console.log(e),e.preventDefault(),e.target.reset(),ce.a.sendForm("service_1i4a8m8","template_f61p9zj",e.target,"user_UvAgBrcpDMGIoNpmxFnZ0").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))},id:"contactform",name:"contact",method:"post"},c.a.createElement("input",{type:"hidden",name:"contact_number"}),c.a.createElement("input",{className:ae.a.formArea,name:"from_name",placeholder:"Name",type:"text",cols:"30"}),c.a.createElement("input",{className:ae.a.formArea,name:"user_email",placeholder:"e-mail",type:"email"}),c.a.createElement("textarea",{className:ae.a.messageArea,name:"message",placeholder:"Message",id:"",cols:"30",rows:"10"}),c.a.createElement("button",{className:ae.a.btnSubmit,value:"Send",type:"submit"},"SEND")))))},oe=a(6),re=a.n(oe),se=a.p+"static/media/telegram2.9fc32b6a.svg",le=a.p+"static/media/vk.33e7f5db.svg",me=a.p+"static/media/facebook.e149981a.svg",pe=a.p+"static/media/linkedin.1b0c0a42.svg";var ue=function(){return c.a.createElement("div",{className:re.a.footer},c.a.createElement(C.a,{bottom:!0},c.a.createElement("div",{className:re.a.container},c.a.createElement(y,{title:"Alexander"}),c.a.createElement("div",{className:re.a.socialBlock},c.a.createElement("div",{className:re.a.socialIcon},c.a.createElement("a",{target:"_blank",href:"https://t.me/SashaZaitsau"},c.a.createElement("img",{src:se,alt:""}))),c.a.createElement("div",{className:re.a.socialIcon},c.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/profile.php?id=100005987055173&ref=bookmarks"},c.a.createElement("img",{src:me,alt:""}))),c.a.createElement("div",{className:re.a.socialIcon},c.a.createElement("a",{target:"_blank",href:"https://www.instagram.com/wildbunnyboy/?hl=ru"},c.a.createElement("img",{src:pe,alt:""}))),c.a.createElement("div",{className:re.a.socialIcon},c.a.createElement("a",{target:"_blank",href:"https://vk.com/id53738228"},c.a.createElement("img",{src:le,alt:""})))),c.a.createElement("span",{className:re.a.copyRight},"\xa9 2019 All Rights Reserved."))))},_e=a(35),de=a.n(_e),he={particles:{number:{value:150,density:{enable:!0,value_area:800}}}},ve={particles:{number:{value:150,density:{enable:!0,value_area:800}},color:{value:"#ff0303"},line_linked:{color:"#ff0303"}}};var fe=function(){var e=Object(n.useState)(!0),t=Object(r.a)(e,2),a=t[0],i=t[1];return c.a.createElement("div",{className:"App"},c.a.createElement(de.a,{className:"particles",params:a?he:ve}),c.a.createElement(H,{changesTheme:a,setChangesTheme:i}),c.a.createElement(I,null),c.a.createElement(T,null),c.a.createElement(ee,null),c.a.createElement(G,null),c.a.createElement(ie,null),c.a.createElement(ue,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ee=a(17),ge=Object(Ee.b)(W),be=a(36);o.a.render(c.a.createElement(be.a,null,c.a.createElement(z.a,{store:ge},c.a.createElement(fe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,a){e.exports={footer:"Footer_footer__3ya82",container:"Footer_container__3KAnv",socialBlock:"Footer_socialBlock__3jzGq",socialIcon:"Footer_socialIcon__34CdI",headerTitle:"Footer_headerTitle__1AoQP",line:"Footer_line__yGimE",copyRight:"Footer_copyRight__1XdkX"}},8:function(e,t,a){e.exports={contacts:"Contacts_contacts__KpWEw",container:"Contacts_container__3E3mH",formWrapper:"Contacts_formWrapper__3ygTi",formArea:"Contacts_formArea__2S3Wl",messageArea:"Contacts_messageArea__1G9nl",btnSubmit:"Contacts_btnSubmit__34z2_"}},9:function(e,t,a){e.exports={container:"Header_container__iC5XH",contButton:"Header_contButton__3PNff",link:"Header_link__2sW4_",isCloseMenuLogo:"Header_isCloseMenuLogo__CpQcl",isOpenMenuLogo:"Header_isOpenMenuLogo__42KTt"}}},[[53,1,2]]]);
//# sourceMappingURL=main.6b35d9b3.chunk.js.map