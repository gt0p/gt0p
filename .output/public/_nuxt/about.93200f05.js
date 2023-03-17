import{a as y,b as C,r as o,o as c,c as b,w as t,e,f as r,t as h,h as w,F as k,i as I,j as T,p as A,k as H,l as x}from"./entry.ff29fd33.js";const $={props:{title:{type:String,required:!0},description:{type:String,required:!0},image:{type:String,default:"./images/Twitter-card.png"}},head(){return{meta:[{hid:"twitter:title",name:"twitter:title",content:this.title},{hid:"twitter:description",name:"twitter:description",content:this.description},{hid:"twitter:image",name:"twitter:image",content:this.image},{hid:"twitter:image:alt",name:"twitter:image:alt",content:this.title},{hid:"og:title",property:"og:title",content:this.title},{hid:"og:description",property:"og:description",content:this.description},{hid:"og:image",property:"og:image",content:this.image}]}}};function D(i,s,m,v,l,d){return C("",!0)}const M=y($,[["render",D]]);const G={data(){return{title:"Proud member of Meetups",meetups:[{src:"/images/devstaff-meetup.jpg",title:"DevStaff: A developer community in Crete",link:"https://www.meetup.com/devstaff/"},{src:"/images/opencoffe-meetup.jpg",title:"Open Coffee Heraklion",link:"https://www.meetup.com/opencoffeeher/"},{src:"/images/gdg-meetup.jpg",title:"Google Developers Group Heraklion",link:"https://www.meetup.com/GDG-Heraklion/"}]}},methods:{navigateToMeetup(i){window.open(i.link)}}};function B(i,s,m,v,l,d){const n=o("v-col"),a=o("v-row"),p=o("v-card-title"),u=o("v-img"),_=o("v-card"),f=o("v-container");return c(),b(f,{fluid:"","full-width":""},{default:t(()=>[e(a,{align:"center",class:"justify-md-center justify-sm-left"},{default:t(()=>[e(n,{cols:"auto",class:"mb-3"},{default:t(()=>[r("h1",null,h(l.title),1)]),_:1})]),_:1}),e(a,{dense:"",justify:"center"},{default:t(()=>[(c(!0),w(k,null,I(l.meetups,(g,j)=>(c(),b(n,{key:j,cols:"12",md:"4",lg:"3"},{default:t(()=>[e(_,{class:"meetup-card",onClick:q=>d.navigateToMeetup(g)},{default:t(()=>[e(u,{src:g.src,class:"white--text align-end",gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px"},{default:t(()=>[e(p,{textContent:h(g.title)},null,8,["textContent"])]),_:2},1032,["src"])]),_:2},1032,["onClick"])]),_:2},1024))),128))]),_:1})]),_:1})}const E=y(G,[["render",B],["__scopeId","data-v-db188f2c"]]);const S=i=>(A("data-v-67452d88"),i=i(),H(),i),F={class:"main-layout page-container"},W=S(()=>r("h1",{class:"text-center text-h5 text-sm-h2 text-md-h4 mb-3",white:""}," Giorgos Topsis ",-1)),N=S(()=>r("p",{class:"text-center text-sm-h4 text-md-h6"},[x(" What You "),r("span",{class:"text-primary"},"Read"),x(" is What you Get ")],-1)),V={__name:"about",setup(i){T({title:"About",meta:[{hid:"description",name:"description",content:"About me page contains details about my personal hobbies, projects and goals."}]});const s={title:"About - Giorgos Topsis",description:"Learn more about me!",image:"./images/Twitter-card.png"},m=[`As a kid I was thinking that sooner or later I will find which is my dream job, in which direction I'm was born to shine having a unique and enviable talent. The mission was clear, to find my specialty!
My studies (BSc, MSc, Erasmus periods) in Information Systems and Human-Computer Interaction at Computer Science Department of University of Crete seemed to offer me an appropriate opportunity to achieve my mission. And I was close, so close; Finally, I only had to choose between Web Development and User Experience Design fields.`,`
Well, for more than 5 years (since 2016 when AngularJS was the king) I focus, utilizing the JavaScript ecosystem, on building software platforms for the web. The last 2 years I have worked both as a professional Front and Back End developer, transforming design mockups into usable pages and designing, developing and testing RESTful APIs and robust databases.`,`
As a member of a team, I seek honest and trustworthy connections. In such environments, I feel secure, efficient and funny ツ. I'm not a fan of life hack "Fake it until you make it" and also I'm trying to be social without having presence on most social networking platforms.
`,"When I'm away from keyboard I like joining local meetups (DevStaff, Open Coffee Heraklion) as well as dance communities, learning and dancing mostly Argentinian Tango and Lindy Hop. Moreover, I love cycling around the seaside part of Heraklion and playing football with good friends in 8x8 fields weekly."];return(v,l)=>{const d=M,n=o("v-col"),a=o("v-row"),p=o("v-container"),u=E;return c(),w("div",F,[e(d,{title:s.title,description:s.description,image:s.image},null,8,["title","description","image"]),e(a,{"no-gutters":"","justify-center":"",class:"page-container"},{default:t(()=>[e(n,{cols:"12",class:"section px-4 py-0 mx-0"},{default:t(()=>[e(p,{class:"headline-container d-flex align-center",fluid:"","full-width":"","fill-height":""},{default:t(()=>[e(a,{class:"no-gutters","full-width":"","fill-height":"","justify-center":"","align-center":""},{default:t(()=>[e(n,{cols:"12"},{default:t(()=>[W]),_:1}),e(n,{cols:"12"},{default:t(()=>[N]),_:1})]),_:1})]),_:1})]),_:1}),e(n,{cols:"12",class:"section px-4 py-0 mx-0"},{default:t(()=>[e(p,{class:"about-me-container",fluid:"","full-width":""},{default:t(()=>[e(a,{"full-width":"",justify:"center",align:"center"},{default:t(()=>[e(n,{cols:"12",md:"10",lg:"9",class:"px-4"},{default:t(()=>[(c(),w(k,null,I(m,(_,f)=>r("p",{key:f,class:"text-left",white:""},h(_),1)),64))]),_:1}),e(n,{cols:"12"})]),_:1})]),_:1})]),_:1}),e(n,{cols:"12",class:"section px-4 py-0 mx-0"},{default:t(()=>[e(u,{class:""})]),_:1})]),_:1})])}}},J=y(V,[["__scopeId","data-v-67452d88"]]);export{J as default};
