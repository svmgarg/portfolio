(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{26:function(e,t,a){},27:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(20),s=a.n(r),c=(a(26),a(6)),o=a(7),l=a(9),d=a(8),m=(a(27),a(38)),h=a(12),u=a(39),j=a(40),v=a(1),g=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).onScroll=function(e){Array.from(document.getElementsByClassName("scroll-tracker")).forEach((function(e){if(n.isInViewport(e)){console.log("In View Port ==> "+e.id);var t=e.id.replace("Tracker",""),a=n.state.currentActive;if(a!==t)if(console.log("currentActive : "+a),console.log("sideBarName : "+t),null==n.state.sideBarMap){var i=new Map;Array.from(document.getElementsByClassName("scroll-sidebar")).forEach((function(e){i.set(e.id,e)})),i.get(t).classList.add("sidebar-active"),i.get(a).classList.remove("sidebar-active"),n.setState({sideBarMap:i,currentActive:t})}else n.state.sideBarMap.get(t).classList.add("sidebar-active"),n.state.sideBarMap.get(a).classList.remove("sidebar-active"),n.setState({currentActive:t})}}))},n.state={currentActive:"aboutPage"},n}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("scroll",this.onScroll)}},{key:"render",value:function(){var e={justifyContent:"Center",alignItems:"Center"};return Object(v.jsx)("div",{style:{backgroundColor:"#bd5d38",height:"100vh",width:"100%"},children:Object(v.jsxs)(m.a,{children:[Object(v.jsx)(u.a,{style:{height:"10vh"}}),Object(v.jsx)(u.a,{style:{height:"40vh",justifyContent:"Center",alignItems:"Center",pointerEvents:"none"},children:Object(v.jsx)(j.a,{style:{maxHeight:"75%",maxWidth:"75%",padding:"0.6rem",backgroundColor:"#cc7d62"},src:"https://kelvinwilliams.dev/img/profile.png",roundedCircle:!0})}),Object(v.jsxs)(u.a,{className:"scroll-sidebar sidebar-active",id:"aboutPage",style:Object(h.a)({},e),children:[" ",Object(v.jsx)("span",{children:"ABOUT"})]}),Object(v.jsx)(u.a,{style:{height:"2vh"}}),Object(v.jsxs)(u.a,{className:"scroll-sidebar",id:"experiencePage",style:e,children:[" ",Object(v.jsx)("span",{children:"EXPERIENCE"})]}),Object(v.jsx)(u.a,{style:{height:"2vh"}}),Object(v.jsxs)(u.a,{className:"scroll-sidebar",id:"skillsPage",style:e,children:[" ",Object(v.jsx)("span",{children:"SKILLS"})]}),Object(v.jsx)(u.a,{style:{height:"2vh"}}),Object(v.jsxs)(u.a,{className:"scroll-sidebar",id:"contactPage",style:e,children:[" ",Object(v.jsx)("span",{children:"CONTACT"})]}),Object(v.jsx)(u.a,{style:{height:"2vh"}})]})})}},{key:"isInViewport",value:function(e){var t=e.getBoundingClientRect();return t.top>=0&&t.bottom<=(window.innerHeight||document.documentElement.clientHeight)}}]),a}(i.a.Component),p=a(21),b=a(16),f=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e={fontSize:"5rem",marginBottom:"0vh"},t="svmgarg@gmail.com",a="mailto:"+t+"?subject=";return Object(v.jsxs)("div",{style:Object(h.a)(Object(h.a)({},{minHeight:"100vh",width:"100%",padding:"4%"}),{fontSize:"1.3rem"}),children:[Object(v.jsx)("div",{className:"scroll-tracker",id:"aboutPageTracker"}),Object(v.jsxs)(m.a,{children:[Object(v.jsxs)(u.a,{style:{marginTop:"9vh"},children:[Object(v.jsx)("span",{style:e,children:"Shivam"}),Object(v.jsx)("span",{style:Object(h.a)(Object(h.a)({},e),{color:"#bd5d38",marginBottom:"0vh",marginLeft:"2vw"}),children:"Garg"})]}),Object(v.jsxs)(u.a,{children:[Object(v.jsx)("span",{children:"Contact Email   -\xa0\xa0"}),Object(v.jsxs)("span",{children:[" ",Object(v.jsxs)("a",{href:a,children:[" ",t.toUpperCase()," "]})," "]})]}),Object(v.jsx)(u.a,{children:Object(v.jsxs)("span",{children:[" ",Object(v.jsx)("a",{href:"https://drive.google.com/file/d/0B_L5PyR_-ntmdGpxMDFaN0FRRW1hQzFiaGhXWl9wbHFYcHBv/view?usp=sharing&resourcekey=0-YR5VAPGLuBP4lUW-oRliKA",rel:"noreferrer",target:"_blank",children:"View PDF Resume"})," "]})}),Object(v.jsx)(u.a,{style:{marginTop:"8vh"},children:Object(v.jsx)("li",{children:Object(v.jsx)("span",{children:" Currently working as a backend developer (Java and Spring microservice) in Oracle. "})})}),Object(v.jsxs)(u.a,{style:{marginTop:"2vh"},children:[Object(v.jsxs)("li",{children:[Object(v.jsx)("span",{children:" Currently holding 6 years of experience in IT industry "})," "]})," "]}),Object(v.jsxs)(u.a,{style:{marginTop:"2vh"},children:[Object(v.jsxs)("li",{children:[Object(v.jsx)("span",{children:"Available for freelance opportunities."})," "]})," "]}),Object(v.jsxs)(u.a,{style:{marginTop:"2vh"},children:[Object(v.jsx)("li",{children:Object(v.jsx)("span",{children:"Enthusiastic about Frontend development, which is why I started this portfolio "})})," "]}),Object(v.jsx)(u.a,{style:{marginTop:"2vh"},children:Object(v.jsx)("li",{children:Object(v.jsxs)("span",{children:[" Contact me via ",Object(v.jsxs)("span",{children:[" ",Object(v.jsxs)("a",{href:a,children:[" ",t," "]})," "]}),"   or via the Contact form below"]})})}),Object(v.jsxs)(u.a,{style:{marginTop:"8vh",marginBottom:"2vh",maxHeight:"6vh"},children:[Object(v.jsxs)(p.a,{style:{flexGrow:0},children:[" ",Object(v.jsx)(b.SocialIcon,{url:"https://www.linkedin.com/in/svmgarg/",target:"_blank"}),"  "]}),Object(v.jsxs)(p.a,{style:{flexGrow:0},children:[" ",Object(v.jsx)(b.SocialIcon,{url:"https://stackoverflow.com/users/5474413/shivam",target:"_blank"}),"   "]}),Object(v.jsxs)(p.a,{style:{flexGrow:0},children:[" ",Object(v.jsx)(b.SocialIcon,{url:"https://telegram.me/svmgarg",target:"_blank"}),"   "]})]})]})]})}}]),a}(i.a.Component),O=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=[];return this.props.details.forEach((function(t,a){var n=[];t.projects.forEach((function(e,t){var a=i.a.createElement("span",{key:e.id+"-projectName"},e.name+" - "+e.role),r=[];e.responsiblities.forEach((function(e,t){r.push(i.a.createElement("li",{key:e.id},e.value))}));var s=i.a.createElement("li",{key:e.id,style:{marginBottom:"2vh"}},[a,i.a.createElement("ul",{key:e.id+"-responsiblityList",type:"circle"},r)]);n.push(s)}));var r=i.a.createElement(p.a,{},i.a.createElement("span",{key:t.id+"-companyName",style:{fontSize:"1.5rem"}},t.companyName)),s=i.a.createElement(p.a,{key:t.id+"-duration",style:{textAlign:"end"}},i.a.createElement("span",{key:a},t.from+" to "+t.to)),c=i.a.createElement("li",{key:t.id,style:{marginBottom:"4vh"}},[i.a.createElement(u.a,{style:{width:"100%"}},[r,s]),i.a.createElement(u.a,{},[i.a.createElement("ul",{key:t.id+"-projectDetails",type:"disc"},n)])]);e.push(c)})),i.a.createElement("ul",{type:"square"},e)}}]),a}(i.a.Component),y=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=this.getExperienceDetails();return Object(v.jsxs)("div",{style:{minHeight:"100vh",width:"100%",padding:"4%"},children:[Object(v.jsx)("div",{className:"scroll-tracker",id:"experiencePageTracker"}),Object(v.jsxs)(m.a,{children:[Object(v.jsx)(u.a,{style:{marginBottom:"4vh"},children:Object(v.jsx)("span",{style:{fontSize:"3rem",marginBottom:"0vh"},children:" Experience"})}),Object(v.jsx)(O,{details:e})]})]})}},{key:"getExperienceDetails",value:function(){var e=[];return e.push({id:1,companyName:"Oracle Corp",from:"Jul 2019",to:"Present",projects:[{id:1,name:"Eloqua Marketing Automation cloud",role:"Backend Developer",responsiblities:[{id:1,value:"Adding new features and enhancing existing features in existing apps(integrations) with various third party platforms like Salesforce, Oracle CX Sales."},{id:2,value:"Actively involved in migration of legacy code to Spring boot."},{id:3,value:"Handling the OSC Bulk API Integration with Eloqua for data Import and Export."},{id:4,value:"Adding new Integration between Salesforce and Eloqua."}]}]}),e.push({id:2,companyName:"Harman Connected Services",from:"Dec 2017",to:"Jun 2019",projects:[{id:1,name:"Harman - Ignite Platform",role:"Backend Developer",responsiblities:[{id:1,value:"Actively involved in all phases of project from development to deployment"},{id:2,value:"Created Micro services(Spring-boot, Spring-data, Spring-mongo, docker, Swagger-UI) for ignite platform"},{id:3,value:"Designed and implemented various micro-service and inter-communication between them"},{id:4,value:"Engaged in various code optimization task using sonar-qube"}]},{id:2,name:"Panasonic - Home Automation",role:"Backend Developer",responsiblities:[{id:1,value:"Exposed Rest-API for Mobile App to communicate to IOT device via cloud"},{id:2,value:"Integrated various modules like Spring-data-JPA, spring-data-mongo, Swagger-UI, Quartz Scheduler in application"},{id:3,value:"Designed and implemented framework for scheduling commands to IOT device"},{id:4,value:"Implemented Admin Dashboard in Angular along with Firebase integration for managing user, device, sensors."},{id:5,value:"Managing AWS Services for deployment"}]}]}),e.push({id:3,companyName:"Tata Consultancy Services",from:"Jul 2015",to:"Dec 2017",projects:[{id:1,name:"TalkTalk Group - CRM Application",role:"Backend Developer",responsiblities:[{id:1,value:"Exposed Rest-API for Customer Relation Management Application."},{id:2,value:"Development of Purging Old Data Module from database using PL\\SQL, Shell script."},{id:3,value:"Involved in Project Development, Optimization, Unit Testing and Deployment Stages."},{id:4,value:"Development of Customer\u2019s Order Admin Application using Spring-MVC."}]}]}),e}}]),a}(i.a.Component),x=a(13),E=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"render",value:function(){var e=i.a.createElement("span",{style:{fontSize:"3rem",marginBottom:"0vh"}},"Skills"),t=i.a.createElement("span",{style:{fontSize:"2rem",marginBottom:"0vh"}},"Programming Language and Tools"),a=this.getIconList();return i.a.createElement("div",{style:{minHeight:"100vh",width:"100%",padding:"4%"}},[i.a.createElement("div",{className:"scroll-tracker",id:"skillsPageTracker"}),i.a.createElement(m.a,{},[i.a.createElement(u.a,{style:{marginBottom:"4vh"}},e),i.a.createElement(u.a,{style:{marginBottom:"4vh"}},i.a.createElement(m.a,{},[i.a.createElement(u.a,{style:{marginBottom:"4vh"}},t),i.a.createElement(u.a,{},a)]))])])}},{key:"getIconList",value:function(){var e=[{name:"Java",iconName:x.c},{name:"GIT",iconName:x.b},{name:"Docker",iconName:x.a},{name:"Javascript",iconName:x.d},{name:"React",iconName:x.e}],t=[];return e.forEach((function(e){return t.push(i.a.createElement("div",{style:{margin:"2vh"}},[i.a.createElement(e.iconName,{size:"6em"}),i.a.createElement("p",{style:{fontSize:"1.5rem",textAlign:"center"}},e.name)]))})),t}}]),a}(i.a.Component),k=a(41),w=a(42),S=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(e=t.call.apply(t,[this].concat(i))).state={message:""},e}return Object(o.a)(a,[{key:"onSubmit",value:function(){console.log(this.state.message);var e=this.state.message;window.location.href="mailto:svmgarg@gmail.com?subject=Hi Shivam&body="+e}},{key:"messageChanged",value:function(e){var t=e.target.value;console.log("value is :::"+e.target.value+":::"),void 0!==t&&null!==t&&t.length>0&&t.length>400&&(t=t.substring(0,400)),this.setState({message:t}),console.log(this.state.message)}},{key:"render",value:function(){var e=i.a.createElement("span",{style:{fontSize:"3rem",marginBottom:"0vh"}},"Contact"),t=i.a.createElement("span",{style:{fontSize:"1.4rem",marginBottom:"0vh"}},"Contact me if you"),a=[];["need to hire a versatile freelance software developer.","have any questions and want to find out more about the services I provide.","just want to say 'hello'."].forEach((function(e){a.push(i.a.createElement("li",{},e))}));var n=this;return i.a.createElement("div",{style:{minHeight:"100vh",width:"100%",padding:"4%"}},[i.a.createElement("div",{className:"scroll-tracker",id:"contactPageTracker"}),i.a.createElement(m.a,{},[i.a.createElement(u.a,{style:{marginBottom:"3vh"}},e),i.a.createElement(u.a,{style:{marginBottom:"3vh"}},i.a.createElement(m.a,{},[i.a.createElement(u.a,{style:{marginBottom:"2vh"}},t),i.a.createElement(u.a,{},i.a.createElement("ul",{},a))])),i.a.createElement(u.a,{style:{marginBottom:"3vh"}},i.a.createElement(k.a,{},[i.a.createElement(k.a.Group,{style:{fontSize:"1.2rem"}},[i.a.createElement(k.a.Label,{},"Your Message"),i.a.createElement(k.a.Control,{as:"textarea",size:"lg",cols:100,rows:5,value:n.state.message,onChange:n.messageChanged.bind(n)}),i.a.createElement(k.a.Label,{style:{fontSize:"0.8rem",float:"right"}},"("+(null!=this.state.message?this.state.message.length:0)+" of 400)")]),i.a.createElement(k.a.Group,{},i.a.createElement(w.a,{type:"submit",onClick:n.onSubmit.bind(n)},"Send"))]))])])}}]),a}(i.a.Component),C=function(e){Object(l.a)(a,e);var t=Object(d.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(o.a)(a,[{key:"componentDidMount",value:function(){window.onbeforeunload=function(){window.scrollTo(0,0)}}},{key:"render",value:function(){return Object(v.jsx)("div",{onScroll:this.onScroll,className:"app",children:Object(v.jsxs)(m.a,{fluid:!0,style:{paddingLeft:"0px",paddingRight:"0px"},children:[Object(v.jsx)("div",{id:"sidePane",children:Object(v.jsx)(g,{})}),Object(v.jsxs)("div",{id:"contentPane",children:[Object(v.jsx)(f,{}),Object(v.jsx)("hr",{}),Object(v.jsx)(y,{}),Object(v.jsx)("hr",{}),Object(v.jsx)(E,{}),Object(v.jsx)("hr",{}),Object(v.jsx)(S,{})]})]})})}}]),a}(i.a.Component),B=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,43)).then((function(t){var a=t.getCLS,n=t.getFID,i=t.getFCP,r=t.getLCP,s=t.getTTFB;a(e),n(e),i(e),r(e),s(e)}))};s.a.render(Object(v.jsx)(i.a.StrictMode,{children:Object(v.jsx)(C,{})}),document.getElementById("root")),B()}},[[37,1,2]]]);
//# sourceMappingURL=main.e10d4ada.chunk.js.map