import{a as x,A as M,v as S,B as j,r as o,o as p,h as y,e,w as t,f as l,x as C,u as b,y as D,t as m,c as k,F,i as I,k as h,C as N,m as E}from"./entry.bb782886.js";const V={class:"theme-toggle-container"},A={__name:"ThemeToggle",setup(f){const a=M(),r=S({get(){return a.global.current.value.dark?"light":"dark"}});j(()=>{const n=localStorage.getItem("dark_theme");a.global.name.value=n==="false"?"light":"dark"});function v(){a.global.name.value=a.global.current.value.dark?"light":"dark",localStorage.setItem("dark_theme",a.global.current.value.dark.toString())}return(n,d)=>{const i=o("v-tooltip"),s=o("v-col"),_=o("v-row");return p(),y("div",V,[e(_,{align:"center",justify:"center","no-gutters":""},{default:t(()=>[e(s,{class:"pa-0"},{default:t(()=>[e(i,{activator:"parent",location:"left"},{activator:t(({on:u,attrs:c})=>[l("span",C({class:"toggle"},c,{class:{"is-light-mode":b(r)==="dark"},onClick:v},D(u,!0)),null,16)]),default:t(()=>[l("span",null,"Enable "+m(b(r))+" mode",1)]),_:1})]),_:1})]),_:1})])}}},G=x(A,[["__scopeId","data-v-2b933413"]]);const H={data(){return{socials:[{icon:"linkedin",link:"https://www.linkedin.com/in/gtopsis"},{icon:"github",link:"https://github.com/gtopsis"}],personalMessage:"Build playing with Nuxt.js"}},computed:{footerText(){return`Giorgos Topsis ${new Date().getFullYear()}`}}},L=["href"],P={class:"text-center ma-0"},W={class:"text-center ma-0"};function Y(f,a,r,v,n,d){const i=o("fa"),s=o("v-col"),_=o("v-row"),u=o("v-container");return p(),k(u,{"pa-2":""},{default:t(()=>[e(_,null,{default:t(()=>[e(s,{cols:"12",class:"socials-list-container py-1"},{default:t(()=>[e(_,{class:"socials-list ma-0",justify:"center"},{default:t(()=>[(p(!0),y(F,null,I(n.socials,(c,g)=>(p(),k(s,{key:g,cols:"auto",class:"pa-1"},{default:t(()=>[l("a",{href:c.link,class:"social-link",target:"_blank",rel:"noopener noreferrer"},[e(i,{class:"social-icon",icon:["fab",c.icon]},null,8,["icon"])],8,L)]),_:2},1024))),128))]),_:1})]),_:1}),e(s,{cols:"12",class:"py-1"},{default:t(()=>[l("p",P,m(n.personalMessage),1),l("p",W,"\xA9 "+m(d.footerText),1)]),_:1})]),_:1})]),_:1})}const q=x(H,[["render",Y],["__scopeId","data-v-3c638566"]]);const z={class:"logo"},J={role:"navigation"},O={__name:"default",setup(f){const a="{GT}";return(r,v)=>{const n=E,d=o("v-toolbar-title"),i=o("v-spacer"),s=o("v-list-item"),_=o("v-list"),u=G,c=o("v-app-bar"),g=o("v-container"),w=o("v-main"),T=q,$=o("v-footer"),B=o("v-app");return p(),k(B,null,{default:t(()=>[e(c,{fixed:"",app:"","elevate-on-scroll":""},{default:t(()=>[e(d,null,{default:t(()=>[l("h2",z,[e(n,{to:"/"},{default:t(()=>[h(m(a))]),_:1})])]),_:1}),e(i),l("nav",J,[e(_,{nav:"",class:"nav d-inline-flex flex-row justify-end align-center"},{default:t(()=>[e(s,{class:"nav-item mb-0"},{default:t(()=>[e(n,{to:"/"},{default:t(()=>[h("Work")]),_:1})]),_:1}),e(s,{class:"nav-item mb-0"},{default:t(()=>[e(n,{to:"/about"},{default:t(()=>[h("About")]),_:1})]),_:1})]),_:1})]),e(u)]),_:1}),e(w,{role:"main"},{default:t(()=>[e(g,{fluid:"","fill-height":"","pa-0":""},{default:t(()=>[N(r.$slots,"default")]),_:3})]),_:3}),e($,{role:"contentinfo"},{default:t(()=>[e(T)]),_:1})]),_:3})}}};export{O as default};
