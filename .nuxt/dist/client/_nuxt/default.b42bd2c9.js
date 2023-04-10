import{_ as S}from"./nuxt-link.1a3b4114.js";import{a as x,z as $,i as y,A as C,r as o,o as m,c as k,w as e,j as t,p as F,u as h,k as r,t as d,v as w,l as I,F as N,m as D,s as g,B as E}from"./entry.71ffbdfc.js";const V=x({__name:"ThemeToggle",setup(b){const n=$(),_=y(()=>n.global.current.value.dark?"light":"dark");C(()=>{const s=localStorage.getItem("dark_theme");n.global.name.value=s==="false"?"light":"dark"});function u(){n.global.name.value=n.global.current.value.dark?"light":"dark",localStorage.setItem("dark_theme",n.global.current.value.dark.toString())}return(s,f)=>{const i=o("font-awesome-icon"),a=o("v-tooltip"),c=o("v-col"),p=o("v-row");return m(),k(p,{class:"theme-toggle-container mx-0",align:"center",justify:"center"},{default:e(()=>[t(c,{class:"px-2 py-1"},{default:e(()=>[t(a,{location:"bottom end"},{activator:e(({props:l})=>[t(i,F({class:"toggle",icon:["fas",h(_)==="light"?"sun":"moon"],onClick:u},l),null,16,["icon"])]),default:e(()=>[r("span",null,"Enable "+d(h(_))+" mode",1)]),_:1})]),_:1})]),_:1})}}});const A=w(V,[["__scopeId","data-v-fc0522a4"]]),G=["href"],z={class:"text-center ma-0"},L=x({__name:"MainFooter",setup(b){const n=[{icon:"linkedin",link:"https://www.linkedin.com/in/gtopsis"},{icon:"github",link:"https://github.com/gtopsis"}],_="Build playing with Nuxt.js",u=y(()=>"Giorgos Topsis 2022");return(s,f)=>{const i=o("font-awesome-icon"),a=o("v-col"),c=o("v-row"),p=o("v-container");return m(),k(p,{"pa-2":""},{default:e(()=>[t(c,null,{default:e(()=>[t(a,{cols:"12",class:"socials-list-container py-1"},{default:e(()=>[t(c,{class:"socials-list ma-0",justify:"center"},{default:e(()=>[(m(),I(N,null,D(n,(l,v)=>t(a,{key:v,cols:"auto",class:"pa-1"},{default:e(()=>[r("a",{href:l.link,class:"social-link text-secondary",target:"_blank",rel:"noopener noreferrer"},[t(i,{icon:["fab",l.icon]},null,8,["icon"])],8,G)]),_:2},1024)),64))]),_:1})]),_:1}),t(a,{cols:"12",class:"py-1"},{default:e(()=>[r("p",{class:"text-center ma-0"},d(_)),r("p",z,"© "+d(h(u)),1)]),_:1})]),_:1})]),_:1})}}});const P=w(L,[["__scopeId","data-v-aa921a51"]]),W={class:"logo text-subtitle-1 text-sm-h6 text-md-h5 text-wrap"},q={role:"navigation"},K=x({__name:"default",setup(b){const n="Giorgos Topsis";return(_,u)=>{const s=S,f=o("v-toolbar-title"),i=o("v-spacer"),a=o("v-list-item"),c=o("v-list"),p=A,l=o("v-app-bar"),v=o("v-container"),T=o("v-main"),B=P,j=o("v-footer"),M=o("v-app");return m(),k(M,null,{default:e(()=>[t(l,{class:"px-3",fixed:"",app:"","elevate-on-scroll":""},{append:e(()=>[r("nav",q,[t(c,{nav:"",class:"nav d-inline-flex flex-row justify-end",align:"center"},{default:e(()=>[t(a,{class:"nav-item mb-0"},{default:e(()=>[t(s,{to:"/",class:"text-subtitle-1 text-secondary"},{default:e(()=>[g("Work")]),_:1})]),_:1}),t(a,{class:"nav-item mb-0"},{default:e(()=>[t(s,{to:"/about",class:"text-subtitle-1 text-secondary"},{default:e(()=>[g("About")]),_:1})]),_:1})]),_:1})]),t(p)]),default:e(()=>[t(f,{class:"ml-0"},{default:e(()=>[r("h2",W,[t(s,{to:"/"},{default:e(()=>[g(d(n))]),_:1})])]),_:1}),t(i)]),_:1}),t(T,{role:"main"},{default:e(()=>[t(v,{fluid:"","fill-height":"","pa-0":""},{default:e(()=>[E(_.$slots,"default")]),_:3})]),_:3}),t(j,{role:"contentinfo"},{default:e(()=>[t(B)]),_:1})]),_:3})}}});export{K as default};
