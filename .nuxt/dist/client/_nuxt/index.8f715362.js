import{_ as V}from"./nuxt-link.883967cd.js";import{a as b,j as o,o as l,c as m,w as e,k as t,l as h,v as d,t as r,y as F,z as U,x,f as j,r as L,h as P,s as I,m as D,F as H,p as M,u as T,b as B}from"./entry.661f3ce0.js";const N=s=>(F("data-v-4e747455"),s=s(),U(),s),O={class:"headline text-h5 text-md-h5 text-lg-h4"},R=N(()=>h("br",null,null,-1)),W=b({__name:"HeroSection",setup(s){const n={pre:"I'm ",name:{text:"Giorgos",pronunciation:"(/ɡi.ɔ̌ːr.ɡ.os/)"},post:"a Full-Stack Web Developer based in Heraklion of Crete."};return(f,p)=>{const c=V,a=o("v-col"),v=o("v-row"),i=o("v-container");return l(),m(i,{class:"hero-container pa-0 d-flex","fill-height":""},{default:e(()=>[t(v,{"no-gutters":""},{default:e(()=>[t(a,{class:"px-0",cols:"12","align-self":"center"},{default:e(()=>[h("h1",O,[h("span",null,[d(r(n.pre)+" ",1),t(c,{to:{name:"AboutPage"},class:"first-name text-secondary"},{default:e(()=>[d(r(n.name.text),1)]),_:1}),d(" "+r(n.name.pronunciation)+",",1),R,d(" "+r(n.post),1)])])]),_:1})]),_:1})]),_:1})}}});const J=x(W,[["__scopeId","data-v-4e747455"]]),z=j("ProjectsStore",()=>{const s=L([{src:"/images/website-cs352-showcase.webp",imageDescription:"A browser window which contains a part of the website of the course cs352. This part is the the logo, navigation bar and some basic info of the course.",title:"Website for course cs-352",description:"Static website for the course cs352 (year 2017-2018) in Computer Science department at UOC. It was serving the content (lectures, tutorials, assignments and course project) of the course to the students.",demo:"https://gtopsis.github.io/Course-cs352-website/",code:"https://github.com/gtopsis/Course-cs352-website"},{src:"/images/loan-calculator-showcase.webp",title:"Simple loan calculator",imageDescription:"A browser window which contains a small modal window with a form. This form represents the calculator of the monthly payment based on a loan's duration and payment-in-advance amount.",description:"A simple calculator for the monthly payment of a loan, based on the payment-in-advance and its duration.",demo:"https://gtopsis.github.io/loan-calculator/",code:"https://github.com/gtopsis/loan-calculator"},{src:"/images/music-app-api-showcase.webp",title:"Simple music app API",imageDescription:"A browser window which contains a subset of the documented API endpoints about Artists, Recordings, etc. of the music app.",description:"The backend side of a music app in which albums, artists and tracks are associated properly.",demo:"#",code:"https://github.com/gtopsis/music-app"},{src:"/images/website-uoc-radio-showcase.webp",title:"Website for the UoC radio station",imageDescription:"A browser window which contains a part of the website for the FM radio of University of Crete. This part is the logo, the navigation menu, a background image and an one-line music player.",description:"A responsive and usable website (showcase - not the current one) of RASTAPANK, the team behind the FM radio station of university of Crete.",demo:"https://gtopsis.github.io/Uoc-radio-website/index.html",code:"https://github.com/gtopsis/Uoc-radio-website"}]);return{projectsList:P(()=>s)}}),E={class:"project-description"},G=b({__name:"ProjectsList",setup(s){const n="Personal Projects",{projectsList:f}=I(z()),p=f.value;function c(a){window.open(a,"_blank")}return(a,v)=>{const i=o("v-col"),w=o("v-row"),y=o("v-card-title"),k=o("v-img"),C=o("v-card-text"),g=o("v-btn"),u=o("v-card-actions"),S=o("v-card"),A=o("v-container");return l(),m(A,{fluid:"","full-width":""},{default:e(()=>[t(w,{align:"center",class:"justify-md-center justify-sm-left"},{default:e(()=>[t(i,{cols:"auto",class:"mb-8"},{default:e(()=>[h("h1",null,r(n))]),_:1})]),_:1}),t(w,{dense:""},{default:e(()=>[(l(!0),D(H,null,M(T(p),_=>(l(),m(i,{key:_.title,cols:"12",md:"4"},{default:e(()=>[t(S,{class:"mx-auto","max-width":"400"},{default:e(()=>[t(k,{class:"align-end text-white",height:"200",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",cover:"",src:_.src,alt:_.imageDescription},{default:e(()=>[t(y,{textContent:r(_.title)},null,8,["textContent"])]),_:2},1032,["src","alt"]),t(C,null,{default:e(()=>[h("p",E,r(_.description),1)]),_:2},1024),t(u,null,{default:e(()=>[t(g,{color:"secondary",onClick:$=>c(_.demo)},{default:e(()=>[d(" Demo ")]),_:2},1032,["onClick"]),t(g,{color:"secondary",onClick:$=>c(_.code)},{default:e(()=>[d(" Code ")]),_:2},1032,["onClick"])]),_:2},1024)]),_:2},1024)]),_:2},1024))),128))]),_:1})]),_:1})}}});const K=x(G,[["__scopeId","data-v-fc96023e"]]),q=j("MeetupsStore",()=>{const s=L([{src:"/images/devstaff-meetup.webp",title:"DevStaff: A developer community in Crete",link:"https://www.meetup.com/devstaff/",description:"A meetup which is called DevStaff and it is a developer community in Crete."},{src:"/images/opencoffe-meetup.webp",title:"Open Coffee Heraklion",link:"https://www.meetup.com/opencoffeeher/",description:"A meetup which is called Open Coffee Heraklion and it gathers motivated youngsters & professionals from Crete, who have as common ground the urge of sharing business ideas"},{src:"/images/vuejs-athens-meetups.webp",title:"VueJS Athens",link:"https://www.meetup.com/vuejsathens/",description:"A meetup which is called VueJS Athens and it is a community of people that is eager to learn more about Vue.js"}]);return{meetupsList:P(()=>s)}}),Q=b({__name:"MeetupsList",setup(s){const n="Participation on several Meetups",{meetupsList:f}=I(q()),p=f.value;function c(a){window.open(a,"_blank")}return(a,v)=>{const i=o("v-col"),w=o("v-row"),y=o("v-card-title"),k=o("v-img"),C=o("v-card"),g=o("v-container");return l(),m(g,{fluid:"","full-width":""},{default:e(()=>[t(w,{align:"center",class:"justify-md-center justify-sm-left"},{default:e(()=>[t(i,{cols:"auto",class:"mb-8"},{default:e(()=>[h("h1",null,r(n))]),_:1})]),_:1}),t(w,{dense:"",justify:"center"},{default:e(()=>[(l(!0),D(H,null,M(T(p),(u,S)=>(l(),m(i,{key:S,cols:"12",md:"3"},{default:e(()=>[t(C,{class:"meetup-card mx-auto","max-width":"400",onClick:A=>c(u.link)},{default:e(()=>[t(k,{class:"white--text align-end",src:u.src,alt:u.description,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px"},{default:e(()=>[t(y,{textContent:r(u.title)},null,8,["textContent"])]),_:2},1032,["src","alt"])]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1})]),_:1})}}});const X=x(Q,[["__scopeId","data-v-2fbf0c48"]]),Y=b({__name:"index",setup(s){return B({title:"Home",meta:[{hid:"description",name:"description",content:"Home page of personal website. It contains details about my work experience and my education background."}]}),(n,f)=>{const p=J,c=o("v-col"),a=K,v=X,i=o("v-row");return l(),m(i,{class:"page-container","no-gutters":"",justify:"center"},{default:e(()=>[t(c,{cols:"12",class:"section pa-0 mx-0"},{default:e(()=>[t(p)]),_:1}),t(c,{cols:"12",class:"section mb-16 mx-0"},{default:e(()=>[t(a)]),_:1}),t(c,{cols:"12",class:"section mb-16 mx-0"},{default:e(()=>[t(v)]),_:1})]),_:1})}}});const te=x(Y,[["__scopeId","data-v-681c1a58"]]);export{te as default};
