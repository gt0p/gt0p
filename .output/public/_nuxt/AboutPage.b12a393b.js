import{a as j,b as C,e as D,f as J,h as S,s as k,i as Y,j as G,r as o,o as i,c as b,w as e,k as t,l as r,t as c,u as m,m as p,F as I,p as A,q as U,v as T,x as E,y as O,z as K,A as Q,B as X}from"./entry.fd560b9b.js";const Z=j({__name:"SocialHead",props:{title:{type:String,required:!0},description:{type:String,required:!0},image:{type:String,default:"./images/Twitter-card.png"}},setup(s){const n=s;return C({meta:[{hid:"twitter:title",name:"twitter:title",content:n.title},{hid:"twitter:description",name:"twitter:description",content:n.description},{hid:"twitter:image",name:"twitter:image",content:n.image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:n.title},{hid:"og:title",property:"og:title",content:n.title},{hid:"og:description",property:"og:description",content:n.description},{hid:"og:image",property:"og:image",content:n.image}]}),(u,f)=>D("",!0)}}),ee={id:"timelineItemTooltipText"},te={class:"timeline-item-title text-left text-subtitle text-md-body-1 text-bold text-wrap font-weight-bold"},ne={class:"mb-0"},oe=["href"],ae={key:1,class:"text-secondary font-weight-bold"},se={class:"ma-0"},ie={class:"ma-2"},ce=j({__name:"TimelineSection",props:{content:{type:String,default:"experience",validator:s=>["experience","education"].includes(s)}},setup(s){const n=s,{mobile:u}=J(),f=S(()=>u.value?"vertical":"horizontal"),y=44,g=n.content==="education"?"start":"both",l=S(()=>n.content==="experience"?"Experience":n.content==="education"?"Education":"My Story"),_=S(()=>{if(n.content==="experience"){const{jobsList:d}=k(Y());return d.value}else if(n.content==="education"){const{studiesList:d}=k(G());return d.value}return[]});return(d,x)=>{const h=o("v-col"),v=o("v-row"),M=o("v-img"),B=o("v-avatar"),z=o("v-tooltip"),H=o("v-card-title"),L=o("v-card-subtitle"),W=o("v-card-text"),P=o("v-card-actions"),q=o("v-card"),F=o("v-timeline-item"),N=o("v-timeline"),R=o("v-container");return i(),b(R,{class:"pa-0"},{default:e(()=>[t(v,{align:"center",class:"justify-md-center justify-sm-left mb-8"},{default:e(()=>[t(h,{cols:"auto",class:""},{default:e(()=>[r("h1",null,c(m(l)),1)]),_:1})]),_:1}),t(v,{"no-gutters":""},{default:e(()=>[t(h,{cols:"12",class:"px-0"},{default:e(()=>[t(N,{align:"center",direction:m(f),side:"end","truncate-line":m(g)},{default:e(()=>[(i(!0),p(I,null,A(m(_),(a,V)=>(i(),b(F,{key:V,"fill-dot":"","dot-color":a.avatar.bgColor,elevation:"2",style:{"align-self":"flex-start"}},{icon:e(()=>[t(z,{location:"bottom","aria-labelledby":"timelineItemTooltipText"},{activator:e(({props:w})=>[t(B,U({size:y,class:"timeline-avatar"},w),{default:e(()=>[t(M,{contain:"",src:a.avatar.img,alt:a.avatar.alt,class:"firm-logo",width:"32",height:"32"},null,8,["src","alt"])]),_:2},1040)]),default:e(()=>[r("span",ee,c(a.avatar.label.text),1)]),_:2},1024)]),default:e(()=>[t(q,{class:"timeline-item-card"},{default:e(()=>[t(H,null,{default:e(()=>[r("span",te,c(a.title),1)]),_:2},1024),t(L,null,{default:e(()=>[r("span",null,c(a.period.start)+" - "+c(a.period.end),1),r("p",ne,[a.avatar.label.link?(i(),p("a",{key:0,class:"text-secondary font-weight-bold",href:a.avatar.label.link,target:"_blank",rel:"noopener noreferrer"},c(a.avatar.label.text),9,oe)):(i(),p("span",ae,c(a.avatar.label.text),1))])]),_:2},1024),t(W,null,{default:e(()=>[r("p",se,c(a.description),1),r("ul",ie,[(i(!0),p(I,null,A(a.tools,(w,$)=>(i(),p("li",{key:$,class:"text-left"},[r("span",null,c(w),1)]))),128))])]),_:2},1024),a.readMore!=""?(i(),b(P,{key:0},{default:e(()=>[T(" Read more ")]),_:1})):D("",!0)]),_:2},1024)]),_:2},1032,["dot-color"]))),128))]),_:1},8,["direction","truncate-line"])]),_:1})]),_:1})]),_:1})}}}),re=E(ce,[["__scopeId","data-v-e8af9700"]]),le=O("AboutMeStore",()=>{const s=new Date().getFullYear()-2017,n="As a kid, I was thinking that sooner or later I would find my dream job, the direction in which I was born to shine, having a unique and enviable talent. The mission was clear: find my specialty! My studies (BSc, MSc, and Erasmus periods) in Information Systems and Human-Computer Interaction at the Computer Science Department of the University of Crete seemed to offer me an appropriate opportunity to achieve my mission. And I was close, so close; finally, I only had to choose between the Web Development and User Experience Design fields.",u=`Well, for more than ${s} years (since 2016 when AngularJS was king), I have focused on utilizing the JavaScript ecosystem to build software platforms for the web. The last 3 years I have worked both as a professional Front and Back-End developer, transforming design mockups into usable pages and designing, developing, and testing RESTful APIs, as well as developing third-party integrations utilizing several AWS services.`;return{aboutMe:K([n,u,"As a partner, I seek trustworthy connections, and I enjoy being in work environments where meritocracy prevails. In such conditions, I feel like a productive and funny teammate ツ.","When I'm away from the keyboard, I like joining local meetups (DevStaff, Open Coffee Heraklion) as well as dance communities, learning and dancing mostly Argentinian Tango and Lindy Hop."])}}),de=s=>(Q("data-v-967ccf98"),s=s(),X(),s),pe=de(()=>r("p",{class:"text-center text-h5 text-sm-h5 text-md-h4"},[T(" What You "),r("span",{class:"text-primary"},"Read"),T(" is What you Get ")],-1)),ue=j({__name:"AboutPage",setup(s){C({title:"About",meta:[{hid:"description",name:"description",content:"About me page contains details about my personal hobbies, projects and goals."}]});const n={title:"About - Giorgos Topsis",description:"Learn more about me!",image:"./images/Twitter-card.png"},{aboutMe:u}=k(le());return(f,y)=>{const g=Z,l=o("v-col"),_=o("v-row"),d=o("v-container"),x=re;return i(),b(d,{class:"d-flex pa-0",fluid:"","full-width":"","fill-height":"",align:"center"},{default:e(()=>[t(g,{title:n.title,description:n.description,image:n.image},null,8,["title","description","image"]),t(_,{class:"page-container","no-gutters":"",justify:"center"},{default:e(()=>[t(l,{cols:"12",class:"section pa-0 mx-0"},{default:e(()=>[t(d,{class:"hero-container ma-0 pa-0","fill-height":""},{default:e(()=>[t(_,{"no-gutters":"",justify:"center",align:"center"},{default:e(()=>[t(l,{cols:"auto","align-self":"center"},{default:e(()=>[pe]),_:1})]),_:1})]),_:1})]),_:1}),t(l,{cols:"12",class:"section px-0 mb-16 mx-0"},{default:e(()=>[t(d,{class:"about-me-container",fluid:"","full-width":""},{default:e(()=>[t(_,{"full-width":"",justify:"center",align:"center"},{default:e(()=>[t(l,{cols:"12",md:"10",lg:"9",class:"px-4"},{default:e(()=>[(i(!0),p(I,null,A(m(u),(h,v)=>(i(),p("p",{key:v,class:"text-left text-body-1 mb-6",white:""},c(h),1))),128))]),_:1}),t(l,{cols:"12"})]),_:1})]),_:1})]),_:1}),t(l,{cols:"12",class:"section px-0 mb-16 mx-0"},{default:e(()=>[t(x,{content:"experience"})]),_:1}),t(l,{cols:"12",class:"section px-0 mb-16 mx-0"},{default:e(()=>[t(x,{content:"education"})]),_:1})]),_:1})]),_:1})}}});const me=E(ue,[["__scopeId","data-v-967ccf98"]]);export{me as default};
