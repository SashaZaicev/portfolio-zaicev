(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{10:function(e,t,a){e.exports={container:"Header_container__iC5XH",contButton:"Header_contButton__3PNff",link:"Header_link__2sW4_",isCloseMenuLogo:"Header_isCloseMenuLogo__CpQcl",isOpenMenuLogo:"Header_isOpenMenuLogo__42KTt"}},12:function(e,t,a){e.exports={skill:"Skill_skill__2p3Bz",icon:"Skill_icon__2BNMI",skillTitle:"Skill_skillTitle__2yB-V",description:"Skill_description__9uPmI"}},21:function(e,t,a){e.exports={skills:"Skills_skills__zmCaz",container:"Skills_container__AT7aC",skillsWrapper:"Skills_skillsWrapper__369lS",skill:"Skills_skill__o-9_C",icon:"Skills_icon__2ZAsR",fadeInUp:"Skills_fadeInUp__I6C4c"}},22:function(e,t,a){e.exports={slogan:"Slogan_slogan__3dgRe",container:"Slogan_container__1pw6h",btnShow:"Slogan_btnShow__DGGY3"}},23:function(e,t,a){e.exports={projects:"Projects_projects__2zfhj",container:"Projects_container__zk-6c",headerTitle:"Projects_headerTitle__2Eq8L",projectsWrapper:"Projects_projectsWrapper__2cAAX",line:"Projects_line__1KAEF"}},32:function(e,t,a){e.exports={blockTitle:"BlockTitle_blockTitle__28E7C"}},42:function(e,t,a){},43:function(e,t,a){},5:function(e,t,a){e.exports={project:"Project_project__1typs",btnShow:"Project_btnShow__1zqGw",projectImg:"Project_projectImg__3EzW9",description:"Project_description__2YBCZ",projectTitle:"Project_projectTitle__219hS"}},53:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),i=a(13),o=a.n(i),r=(a(42),a(37)),s=(a(43),a(21)),l=a.n(s),m=a(15),p=a(16),d=a(20),u=a(19),_=a(12),h=a.n(_),E=a.p+"static/media/html-icon.285bdcd4.svg",f=a.p+"static/media/react-icon.af74c0ff.svg",v=a.p+"static/media/js-icon.6a563750.svg",g=a.p+"static/media/ts2.932cb697.svg",b=f,k=v,N=E,w=g,y=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(e){var n;return Object(m.a)(this,a),(n=t.call(this,e)).state=[{icon:N,title:"HTML & CSS",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur dicta "},{icon:k,title:"JS",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur dicta distinctio"},{icon:b,title:"REACT",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur dicta distinctio "},,{icon:w,title:"TYPE SCRIPT",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur dicta distinctio "}],n}return Object(p.a)(a,[{key:"render",value:function(){return c.a.createElement("div",{className:h.a.skill},c.a.createElement("div",{className:h.a.icon},c.a.createElement("img",{src:this.props.icon,alt:""})),c.a.createElement("span",{className:h.a.skillTitle},this.props.title),c.a.createElement("span",{className:h.a.description},this.props.description," "))}}]),a}(c.a.Component),S=a(32),C=a.n(S);var j=function(e){return c.a.createElement("div",{className:C.a.blockTitle},e.title)},T=a(4),A=a.n(T);var I=function(e){var t=f,a=v,n=E;return c.a.createElement("div",{className:l.a.skills,id:"skills"},c.a.createElement(A.a,{bottom:!0},c.a.createElement("div",{className:l.a.container},c.a.createElement(j,{title:"My skills"}),c.a.createElement("div",{className:l.a.skillsWrapper},c.a.createElement(y,{icon:t,title:"REACT",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur dicta distinctio "}),c.a.createElement(y,{icon:a,title:"JS",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur dicta distinctio"}),c.a.createElement(y,{icon:g,title:"TYPESCRIPT",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur dicta distinctio "}),c.a.createElement(y,{icon:n,title:"HTML & CSS",description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Atque commodi consequatur dicta "})))))},O=a(9),M=a.n(O),B=a.p+"static/media/CV Zaitsau.4df5fc11.pdf";var L=function(){return c.a.createElement("div",{className:M.a.main,id:"main"},c.a.createElement("div",{className:M.a.container},c.a.createElement("div",{className:M.a.greeting},c.a.createElement("span",null,"Hello!"),c.a.createElement("span",null,"My name ",c.a.createElement("span",null,"Alexander")),c.a.createElement("h1",null,"I am front-end-developer"),c.a.createElement("div",{className:M.a.downloadCV},c.a.createElement("span",null,"My CV: ",c.a.createElement("div",null,"View  ",c.a.createElement("a",{href:B,target:"_blank"},"<<<","HERE",">>>")),c.a.createElement("div",null,"Download  ",c.a.createElement("a",{href:B,download:!0},"<<<","HERE",">>>"))))),c.a.createElement("div",{className:M.a.photo},c.a.createElement("div",{className:M.a.image}))))},P=a(10),q=a.n(P),z=a.p+"static/media/menuLogo.52223e71.png",x=a(18),W=a(29),R="CHANGE_NAVBAR",H={isOpenNavBar:!1,sectionsMenu:["main","skills","projects","contacts"]},F=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:H,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case R:return Object(W.a)(Object(W.a)({},e),{},{isOpenNavBar:t.isOpenNavBar});default:return e}},Z=function(e){Object(d.a)(a,e);var t=Object(u.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=t.call.apply(t,[this].concat(c))).state={styleLink:{color:""},styleNav:{background:""}},e.isOpenNav=function(){e.props.changeNavBarAC(!0)},e.isCloseNav=function(){e.props.changeNavBarAC(!1)},e.changedTheme=function(){e.props.setChangesTheme(!e.props.changesTheme)},e}return Object(p.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("scroll",(function(){window.scrollY,e.setState({styleLink:{color:"#3d4451"},styleNav:{}})}))}},{key:"render",value:function(){var e=this,t=this.props.sectionsMenu.map((function(t,a){return c.a.createElement("a",{className:q.a.link,style:e.state.styleLink,key:a,onClick:e.isCloseNav,href:"#"+t,title:t},c.a.createElement("span",null,t," "))}));return c.a.createElement("div",{className:q.a.wrapper},c.a.createElement("button",{className:q.a.contButton,onClick:this.changedTheme},"TypeColor CLICK ME"),this.props.isOpenNavBar?c.a.createElement("div",{className:q.a.container,style:this.state.styleNav},c.a.createElement("img",{className:q.a.isOpenMenuLogo,src:z,onClick:this.isCloseNav}),c.a.createElement("nav",null,t)):c.a.createElement("img",{className:q.a.isCloseMenuLogo,src:z,alt:"menu",title:"menu",onClick:this.isOpenNav}))}}]),a}(n.Component),D=Object(x.b)((function(e){return{isOpenNavBar:e.isOpenNavBar,sectionsMenu:e.sectionsMenu,changeTheme:e.changesTheme}}),{changeNavBarAC:function(e){return{type:R,isOpenNavBar:e}}})(Z),G=a(22),V=a.n(G);var K=function(){return c.a.createElement("div",{className:V.a.slogan},c.a.createElement(A.a,{bottom:!0},c.a.createElement("div",{className:V.a.container},c.a.createElement(j,{title:"I am considering options for remote work"}),c.a.createElement("a",{className:V.a.btnShow,href:""},"Employ"))))},Y=a(23),J=a.n(Y),X=a.p+"static/media/todolist.ef42c283.png",U=a.p+"static/media/social-network.91e20c0c.jpg",Q=a.p+"static/media/phone-shop.051b33d8.png",$=a.p+"static/media/webPhoto.1cc216a3.png",ee=a(5),te=a.n(ee);var ae=function(e){return c.a.createElement("div",{className:te.a.project},c.a.createElement("div",{className:te.a.projectImg,style:e.style},c.a.createElement("a",{className:te.a.btnShow,href:e.href_first},"SITE"),c.a.createElement("a",{className:te.a.btnShow,href:e.href_second},"CODE"),c.a.createElement("br",null),e.href_third&&e.href_fourth?c.a.createElement("div",null,c.a.createElement("a",{className:te.a.btnShow,href:e.href_third},"SITE TS"),c.a.createElement("a",{className:te.a.btnShow,href:e.href_fourth},"CODE TS")):""),c.a.createElement("span",{className:te.a.projectTitle},e.title),c.a.createElement("span",{className:te.a.description},e.description))};var ne=function(){var e={backgroundImage:"url(".concat(X,")")},t={backgroundImage:"url(".concat(U,")")},a={backgroundImage:"url(".concat(Q,")")},n={backgroundImage:"url(".concat($,")")};return c.a.createElement("div",{className:J.a.projects,id:"projects"},c.a.createElement(A.a,{bottom:!0},c.a.createElement("div",{className:J.a.container},c.a.createElement(j,{title:"My projects"}),c.a.createElement("div",{className:J.a.projectsWrapper},c.a.createElement(ae,{title:"To do list",style:e,description:"To do list for every day on the week",href_first:"https://sashazaicev.github.io/to-do-list-zaicev/",href_second:"https://github.com/SashaZaicev/to-do-list-zaicev"}),c.a.createElement(ae,{title:"Socialnetwork",style:t,description:"Social network: research project,\nsharpening skills",href_first:"https://sashazaicev.github.io/social_network_zaicev/",href_second:"https://github.com/SashaZaicev/social_network_zaicev",href_third:"https://sashazaicev.github.io/social-network-ts/",href_fourth:"https://github.com/SashaZaicev/social-network-ts"}),c.a.createElement(ae,{title:"Phone-shop",style:a,description:"Mobile phone shop with use paypal",href_first:"https://react-phone-store-zaicev.netlify.com/",href_second:"https://github.com/SashaZaicev/react-phone-store"}),c.a.createElement(ae,{title:"Web-Photo",style:n,description:"For photographer with reverse form",href_first:"https://sashazaicev.github.io/photo_web/",href_second:"https://github.com/SashaZaicev/photo_web"})))))},ce=a(8),ie=a.n(ce),oe=a(34),re=a.n(oe);var se=function(){return c.a.createElement("div",{id:"contacts",className:ie.a.contacts},c.a.createElement(A.a,{bottom:!0},c.a.createElement("div",{className:ie.a.container},c.a.createElement(j,{title:"Contacts"}),c.a.createElement("form",{className:ie.a.formWrapper,onSubmit:function(e){console.log(e),e.preventDefault(),e.target.reset(),re.a.sendForm("service_1i4a8m8","template_f61p9zj",e.target,"user_UvAgBrcpDMGIoNpmxFnZ0").then((function(e){console.log(e.text)}),(function(e){console.log(e.text)}))},id:"contactform",name:"contact",method:"post"},c.a.createElement("input",{type:"hidden",name:"contact_number"}),c.a.createElement("input",{className:ie.a.formArea,name:"from_name",placeholder:"Name",type:"text",cols:"30"}),c.a.createElement("input",{className:ie.a.formArea,name:"user_email",placeholder:"e-mail",type:"email"}),c.a.createElement("textarea",{className:ie.a.messageArea,name:"message",placeholder:"This form works, but sends your message to a test mail. Please, if you want to write to me, use the contacts listed below.",id:"",cols:"30",rows:"10"}),c.a.createElement("button",{className:ie.a.btnSubmit,value:"Send",type:"submit"},"SEND")))))},le=a(6),me=a.n(le),pe=a.p+"static/media/telegram2.9fc32b6a.svg",de=a.p+"static/media/vk.33e7f5db.svg",ue=a.p+"static/media/facebook.e149981a.svg",_e=a.p+"static/media/linkedin.1b0c0a42.svg";var he=function(){return c.a.createElement("div",{className:me.a.footer},c.a.createElement(A.a,{bottom:!0},c.a.createElement("div",{className:me.a.container},c.a.createElement(j,{title:"Alexander"}),c.a.createElement("div",{className:me.a.socialBlock},c.a.createElement("div",{className:me.a.socialIcon},c.a.createElement("a",{target:"_blank",href:"https://t.me/SashaZaitsau"},c.a.createElement("img",{src:pe,alt:""}))),c.a.createElement("div",{className:me.a.socialIcon},c.a.createElement("a",{target:"_blank",href:"https://www.facebook.com/profile.php?id=100005987055173&ref=bookmarks"},c.a.createElement("img",{src:ue,alt:""}))),c.a.createElement("div",{className:me.a.socialIcon},c.a.createElement("a",{target:"_blank",href:"https://www.instagram.com/wildbunnyboy/?hl=ru"},c.a.createElement("img",{src:_e,alt:""}))),c.a.createElement("div",{className:me.a.socialIcon},c.a.createElement("a",{target:"_blank",href:"https://vk.com/id53738228"},c.a.createElement("img",{src:de,alt:""})))),c.a.createElement("span",{className:me.a.copyRight},"\xa9 2019 All Rights Reserved."))))},Ee=a(35),fe=a.n(Ee),ve={particles:{number:{value:150,density:{enable:!0,value_area:800}}}},ge={particles:{number:{value:150,density:{enable:!0,value_area:800}},color:{value:"#ff0303"},line_linked:{color:"#ff0303"}}};var be=function(){var e=Object(n.useState)(!0),t=Object(r.a)(e,2),a=t[0],i=t[1];return c.a.createElement("div",{className:"App"},c.a.createElement(fe.a,{className:"particles",params:a?ve:ge}),c.a.createElement(D,{changesTheme:a,setChangesTheme:i}),c.a.createElement(L,null),c.a.createElement(I,null),c.a.createElement(ne,null),c.a.createElement(K,null),c.a.createElement(se,null),c.a.createElement(he,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ke=a(17),Ne=Object(ke.b)(F),we=a(36);o.a.render(c.a.createElement(we.a,null,c.a.createElement(x.a,{store:Ne},c.a.createElement(be,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},6:function(e,t,a){e.exports={footer:"Footer_footer__3ya82",container:"Footer_container__3KAnv",socialBlock:"Footer_socialBlock__3jzGq",socialIcon:"Footer_socialIcon__34CdI",headerTitle:"Footer_headerTitle__1AoQP",line:"Footer_line__yGimE",copyRight:"Footer_copyRight__1XdkX"}},8:function(e,t,a){e.exports={contacts:"Contacts_contacts__KpWEw",container:"Contacts_container__3E3mH",formWrapper:"Contacts_formWrapper__3ygTi",formArea:"Contacts_formArea__2S3Wl",messageArea:"Contacts_messageArea__1G9nl",btnSubmit:"Contacts_btnSubmit__34z2_"}},9:function(e,t,a){e.exports={main:"Main_main__L5Kq2",container:"Main_container__19sNk",greeting:"Main_greeting__2kEZl",downloadCV:"Main_downloadCV__3yCR7",photo:"Main_photo__2dETw",image:"Main_image__28v_z"}}},[[53,1,2]]]);
//# sourceMappingURL=main.35f437ad.chunk.js.map