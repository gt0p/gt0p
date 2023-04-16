import{a as j,b as E,e as M,f as J,r as D,h as g,i as q,s as k,j as a,o as r,c as y,w as e,k as t,l as c,t as l,u as _,m as u,F as I,p as C,q as $,v as T,x as A,y as Y,z as Q}from"./entry.e45653d7.js";const K=j({__name:"SocialHead",props:{title:{type:String,required:!0},description:{type:String,required:!0},image:{type:String,default:"./images/Twitter-card.png"}},setup(n){const o=n;return E({meta:[{hid:"twitter:title",name:"twitter:title",content:o.title},{hid:"twitter:description",name:"twitter:description",content:o.description},{hid:"twitter:image",name:"twitter:image",content:o.image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:o.title},{hid:"og:title",property:"og:title",content:o.title},{hid:"og:description",property:"og:description",content:o.description},{hid:"og:image",property:"og:image",content:o.image}]}),(m,f)=>M("",!0)}}),X=J("StudiesStore",()=>{const n=D([{id:1,avatar:{img:"/images/uoc_logo.png",alt:"Logo of University of Crete",bgColor:"#000",label:{text:"University of Crete",link:"https://www.uoc.gr/"}},title:"MSc in Computer Science - Human Computer Interaction, Information Systems",roles:[{jobTitle:"Back End Web Developer",period:{start:"September 2016",end:"November 2019"}}],period:{start:"September 2016",end:"November 2019"},description:"",tools:[],readMore:""},{id:2,avatar:{img:"/images/chalmers_logo.png",alt:"Logo of Chalmers University of Technology",bgColor:"#fff",label:{text:"Chalmers University of Technology",link:"https://www.chalmers.se/"}},title:"ERASMUS+ for Postgraduate studies - Interaction Design and Technologies",roles:[],period:{start:"August 2017",end:"January 2018"},description:"",tools:[],readMore:""},{id:3,avatar:{img:"/images/uoc_logo.png",alt:"Logo of University of Crete",bgColor:"#000",label:{text:"University of Crete",link:"https://www.uoc.gr/"}},title:"BSc in Computer Science",roles:[],period:{start:"September 2011",end:"March 2015"},description:"",tools:[],readMore:""},{id:4,avatar:{img:"/images/uoc_cyprus_logo.png",alt:"Logo of University of Cyprus",bgColor:"#fff",label:{text:"University of Cyprus",link:"https://www.uoc.gr/"}},title:"ERASMUS+ for Undergraduate studies",roles:[],period:{start:"September 2014",end:"January 2015"},description:"",tools:[],readMore:""}]);return{studiesList:g(()=>n)}}),Z=J("JobsStore",()=>{const n=D([{id:1,avatar:{img:"/images/fairlo_logo.png",alt:"Logo of software agency Fairlo",bgColor:"#fff",label:{text:"Fairlo",link:"https://fairlo.se"}},title:"Back-End Engineer",roles:[{jobTitle:"Back-End Engineer",period:{start:"September 2021",end:"February 2023"}}],period:{start:"September 2021",end:"February 2023"},description:"",tools:["TypeScript","Node.js","PostgreSQL","Jest","AWS ","Document RESTful APIs (OpenAPI specification)"],readMore:""},{id:2,avatar:{img:"/images/conveos_logo.png",alt:"Logo of software agency Conveos",bgColor:"#000",label:{text:"Conveos",link:"https://conveos.com"}},title:"Back-End Web Developer",roles:[{jobTitle:"Back-End Web Developer",period:{start:"January 2021",end:"June 2021"}}],period:{start:"January 2021",end:"June 2021"},description:"",tools:["JavaScript","Node.js","MongoDB","Jest","Document RESTful APIs (OpenAPI specification)"],readMore:""},{id:3,avatar:{img:"/images/conveos_logo.png",alt:"Logo of software agency Conveos",bgColor:"#000",label:{text:"Conveos",link:"https://conveos.com"}},title:"Back-End Web Developer",roles:[{jobTitle:"Back-End Web Developer",period:{start:"July 2019",end:"July 2020"}},{jobTitle:"Front-End Web Developer",period:{start:"July 2019",end:"July 2020"}}],period:{start:"July 2019",end:"July 2020"},description:"",tools:["JavaScript","Vue.js","Vuetify","Node.js","MongoDB","Document RESTful APIs (OpenAPI specification)"],readMore:""},{id:4,avatar:{img:"/images/forth_logo.png",alt:"Logo of FORTH in Greece",bgColor:"#fff",label:{text:"Laboratory HCI of ICS-FORTH",link:"https://www.ics.forth.gr/"}},title:"Graduate R&D assistant at Human-Computer Interaction Lab (HCI)",roles:[{jobTitle:"Back-End Web Developer",period:{start:"Jun 2016",end:"Jun 2019"}}],period:{start:"Jun 2016",end:"Jun 2019"},description:"",tools:["JavaScript","AngularJS (v1.6)","Foundation for Sites","Node.js","MongoDB","SocketIO","Invision","Gravid Designer","Presentator.io"],readMore:""}]);return{jobsList:g(()=>n)}}),ee={id:"timelineItemTooltipText"},te={class:"timeline-item-title text-left text-subtitle text-md-body-1 text-bold text-wrap font-weight-bold"},oe={class:"mb-0"},ne=["href"],ae={key:1,class:"text-secondary font-weight-bold"},se={class:"ma-0"},ie={class:"ma-2"},re=j({__name:"TimelineSection",props:{content:{type:String,default:"experience",validator:n=>["experience","education"].includes(n)}},setup(n){const o=n,{mobile:m}=q(),f=g(()=>m.value?"vertical":"horizontal"),w=44,v=o.content==="education"?"start":"both",i=g(()=>o.content==="experience"?"Experience":o.content==="education"?"Education":"My Story"),p=g(()=>{if(o.content==="experience"){const{jobsList:d}=k(Z());return d.value}else if(o.content==="education"){const{studiesList:d}=k(X());return d.value}return[]});return(d,x)=>{const b=a("v-col"),h=a("v-row"),L=a("v-img"),B=a("v-avatar"),W=a("v-tooltip"),U=a("v-card-title"),F=a("v-card-subtitle"),H=a("v-card-text"),R=a("v-card-actions"),P=a("v-card"),N=a("v-timeline-item"),O=a("v-timeline"),z=a("v-container");return r(),y(z,{class:"pa-0"},{default:e(()=>[t(h,{align:"center",class:"justify-md-center justify-sm-left mb-8"},{default:e(()=>[t(b,{cols:"auto",class:""},{default:e(()=>[c("h1",null,l(_(i)),1)]),_:1})]),_:1}),t(h,{"no-gutters":""},{default:e(()=>[t(b,{cols:"12",class:"px-0"},{default:e(()=>[t(O,{align:"center",direction:_(f),side:"end","truncate-line":_(v)},{default:e(()=>[(r(!0),u(I,null,C(_(p),(s,V)=>(r(),y(N,{key:V,"fill-dot":"","dot-color":s.avatar.bgColor,elevation:"2",style:{"align-self":"flex-start"}},{icon:e(()=>[t(W,{location:"bottom","aria-labelledby":"timelineItemTooltipText"},{activator:e(({props:S})=>[t(B,$({size:w,class:"timeline-avatar"},S),{default:e(()=>[t(L,{contain:"",src:s.avatar.img,alt:s.avatar.alt,class:"firm-logo",width:"32",height:"32"},null,8,["src","alt"])]),_:2},1040)]),default:e(()=>[c("span",ee,l(s.avatar.label.text),1)]),_:2},1024)]),default:e(()=>[t(P,{class:"timeline-item-card"},{default:e(()=>[t(U,null,{default:e(()=>[c("span",te,l(s.title),1)]),_:2},1024),t(F,null,{default:e(()=>[c("span",null,l(s.period.start)+" - "+l(s.period.end),1),c("p",oe,[s.avatar.label.link?(r(),u("a",{key:0,class:"text-secondary font-weight-bold",href:s.avatar.label.link,target:"_blank",rel:"noopener noreferrer"},l(s.avatar.label.text),9,ne)):(r(),u("span",ae,l(s.avatar.label.text),1))])]),_:2},1024),t(H,null,{default:e(()=>[c("p",se,l(s.description),1),c("ul",ie,[(r(!0),u(I,null,C(s.tools,(S,G)=>(r(),u("li",{key:G,class:"text-left"},[c("span",null,l(S),1)]))),128))])]),_:2},1024),s.readMore!=""?(r(),y(R,{key:0},{default:e(()=>[T(" Read more ")]),_:1})):M("",!0)]),_:2},1024)]),_:2},1032,["dot-color"]))),128))]),_:1},8,["direction","truncate-line"])]),_:1})]),_:1})]),_:1})}}});const le=A(re,[["__scopeId","data-v-e8af9700"]]),ce=J("AboutMeStore",()=>{const n=new Date().getFullYear()-2017,o="As a kid, I was thinking that sooner or later I would find my dream job, the direction in which I was born to shine, having a unique and enviable talent. The mission was clear: find my specialty! My studies (BSc, MSc, and Erasmus periods) in Information Systems and Human-Computer Interaction at the Computer Science Department of the University of Crete seemed to offer me an appropriate opportunity to achieve my mission. And I was close, so close; finally, I only had to choose between the Web Development and User Experience Design fields.",m=`Well, for more than ${n} years (since 2016 when AngularJS was king), I have focused on utilizing the JavaScript ecosystem to build software platforms for the web. The last 3 years I have worked both as a professional Front and Back-End developer, transforming design mockups into usable pages and designing, developing, and testing RESTful APIs, as well as developing third-party integrations utilizing several AWS services.`;return{aboutMe:D([o,m,"As a partner, I seek trustworthy connections, and I enjoy being in work environments where meritocracy prevails. In such conditions, I feel like a productive and funny teammate ツ.","When I'm away from the keyboard, I like joining local meetups (DevStaff, Open Coffee Heraklion) as well as dance communities, learning and dancing mostly Argentinian Tango and Lindy Hop."])}}),de=n=>(Y("data-v-3d5e9ea0"),n=n(),Q(),n),pe=de(()=>c("p",{class:"text-center text-h5 text-sm-h5 text-md-h4"},[T(" What You "),c("span",{class:"text-primary"},"Read"),T(" is What you Get ")],-1)),ue=j({__name:"about",setup(n){E({title:"About",meta:[{hid:"description",name:"description",content:"About me page contains details about my personal hobbies, projects and goals."}]});const o={title:"About - Giorgos Topsis",description:"Learn more about me!",image:"./images/Twitter-card.png"},{aboutMe:m}=k(ce());return(f,w)=>{const v=K,i=a("v-col"),p=a("v-row"),d=a("v-container"),x=le;return r(),y(d,{class:"d-flex pa-0",fluid:"","full-width":"","fill-height":"",align:"center"},{default:e(()=>[t(v,{title:o.title,description:o.description,image:o.image},null,8,["title","description","image"]),t(p,{class:"page-container","no-gutters":"",justify:"center"},{default:e(()=>[t(i,{cols:"12",class:"section pa-0 mx-0"},{default:e(()=>[t(d,{class:"hero-container ma-0 pa-0","fill-height":""},{default:e(()=>[t(p,{"no-gutters":"",justify:"center",align:"center"},{default:e(()=>[t(i,{cols:"auto","align-self":"center"},{default:e(()=>[pe]),_:1})]),_:1})]),_:1})]),_:1}),t(i,{cols:"12",class:"section px-0 mb-16 mx-0"},{default:e(()=>[t(d,{class:"about-me-container",fluid:"","full-width":""},{default:e(()=>[t(p,{"full-width":"",justify:"center",align:"center"},{default:e(()=>[t(i,{cols:"12",md:"10",lg:"9",class:"px-4"},{default:e(()=>[(r(!0),u(I,null,C(_(m),(b,h)=>(r(),u("p",{key:h,class:"text-left text-body-1 mb-6",white:""},l(b),1))),128))]),_:1}),t(i,{cols:"12"})]),_:1})]),_:1})]),_:1}),t(i,{cols:"12",class:"section px-0 mb-16 mx-0"},{default:e(()=>[t(p,{class:"justify-space-between no-gutters"},{default:e(()=>[t(i,{cols:"12",mb:"2"},{default:e(()=>[t(x,{content:"experience"})]),_:1})]),_:1})]),_:1}),t(i,{cols:"12",class:"section px-0 mb-16 mx-0"},{default:e(()=>[t(p,{class:"justify-space-between no-gutters"},{default:e(()=>[t(i,{cols:"12",mb:"2"},{default:e(()=>[t(x,{content:"education"})]),_:1})]),_:1})]),_:1})]),_:1})]),_:1})}}});const _e=A(ue,[["__scopeId","data-v-3d5e9ea0"]]);export{_e as default};
