(window.webpackJsonp=window.webpackJsonp||[]).push([[11,4,6,7,9],{393:function(t,e,n){var content=n(401);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("1c0abc56",content,!0,{sourceMap:!1})},394:function(t,e,n){var content=n(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("6c7dcfac",content,!0,{sourceMap:!1})},395:function(t,e,n){var content=n(405);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("736f1cd3",content,!0,{sourceMap:!1})},396:function(t,e,n){var content=n(407);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("3ae5ac26",content,!0,{sourceMap:!1})},400:function(t,e,n){"use strict";n(393)},401:function(t,e,n){var o=n(19)(!1);o.push([t.i,".hero-container[data-v-403812ce]{height:60vh}.hero-icon[data-v-403812ce]{font-size:2.5rem!important}.headline[data-v-403812ce]{letter-spacing:.25rem!important}.first-name[data-v-403812ce]{height:50px;line-height:50px;text-decoration:none;border-bottom:4px dashed grey}",""]),t.exports=o},402:function(t,e,n){"use strict";n(394)},403:function(t,e,n){var o=n(19)(!1);o.push([t.i,".columns-container[data-v-45ff6363]{width:100%;height:100%}.column[data-v-45ff6363]{border:1px solid var(--v-accent-darken2);border-radius:4px;box-shadow:0 3px 1px -2px var(--v-accent-darken2)}.content__icon[data-v-45ff6363]{font-size:2.5rem;color:var(--v-secondary-base)}.tech-list[data-v-45ff6363]{list-style-type:none}.column__header[data-v-45ff6363],.column__main[data-v-45ff6363]{height:100px}@media only screen and (max-width:600px){.column__main[data-v-45ff6363]{height:90px}}.column__footer[data-v-45ff6363]{height:auto}",""]),t.exports=o},404:function(t,e,n){"use strict";n(395)},405:function(t,e,n){var o=n(19)(!1);o.push([t.i,".meetup-card[data-v-2decb840]:hover{cursor:pointer}",""]),t.exports=o},406:function(t,e,n){"use strict";n(396)},407:function(t,e,n){var o=n(19)(!1);o.push([t.i,".firm-link[data-v-03e328ca]{text-decoration:none}.firm-logo[data-v-03e328ca]{width:45px;height:45px;cursor:pointer}.timeline-item-title[data-v-03e328ca]{font-size:1.1rem}",""]),t.exports=o},410:function(t,e,n){var content=n(426);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(20).default)("0ca97010",content,!0,{sourceMap:!1})},414:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{headline:{pre:"I'm ",name:{text:"Giorgos",pronunciation:"(/ɡi.ɔ̌ːr.ɡ.os/)",route:"about"},post:"a Full Stack Web Developer based in Heraklion of Crete."}}}},r=(n(400),n(59)),c=n(68),l=n.n(c),d=n(379),v=n(389),f=n(380),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{staticClass:"hero-container px-0",attrs:{fluid:"","fill-height":""}},[n("v-row",{attrs:{"no-gutters":"",align:"center",justify:"center"}},[n("v-col",{staticClass:"px-0"},[n("h1",{staticClass:"headline text-h5 text-sm-h3 text-md-h4"},[t._v("\n        "+t._s(t.headline.pre)+"\n        "),n("nuxt-link",{staticClass:"first-name",attrs:{to:t.headline.name.route}},[t._v(t._s(t.headline.name.text))]),t._v("\n        "+t._s(t.headline.name.pronunciation)+","),n("br"),t._v("\n        "+t._s(t.headline.post)+"\n      ")],1)])],1)],1)}),[],!1,null,"403812ce",null);e.default=component.exports;l()(component,{VCol:d.a,VContainer:v.a,VRow:f.a})},415:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{title:"Technical Skills"}},computed:{skills:function(){return this.$store.state.skills.skills}}},r=(n(402),n(59)),c=n(68),l=n.n(c),d=n(379),v=n(389),f=n(380),m=n(386),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"justify-md-center justify-sm-left",attrs:{align:"center"}},[n("v-col",{staticClass:"mb-3",attrs:{cols:"auto"}},[n("h1",[t._v(t._s(t.title))])])],1),t._v(" "),n("v-row",{staticClass:"columns-container justify-md-space-between no-gutters"},t._l(t.skills,(function(e,o){return n("v-col",{key:o,staticClass:"column my-xs-3",class:{"mx-md-5":1==o},attrs:{cols:t.$vuetify.breakpoint.mdAndDown?12:void 0}},[n("div",{staticClass:"column__content pa-6"},[n("v-row",{attrs:{"no-gutters":""}},[n("v-col",{staticClass:"text-center column__header",attrs:{cols:"12"}},[n("fa",{staticClass:"content__icon mb-2",attrs:{icon:["fas",e.icon]}}),t._v(" "),n("h3",{},[t._v(t._s(e.title))])],1),t._v(" "),n("v-col",{staticClass:"column__main text-center",attrs:{cols:"12"}},[t._v("\n            "+t._s(e.desc)+"\n          ")]),t._v(" "),n("v-col",{staticClass:"column__footer",attrs:{cols:"12"}},[n("h4",{staticClass:"text-center secondary-text mb-2"},[t._v("\n              "+t._s(e.heading)+"\n            ")]),t._v(" "),n("ul",{staticClass:"ma-0 pa-0 tech-list text-center"},t._l(e.technologies,(function(e,o){return n("li",{key:o},[""==e.desc?n("span",[t._v(" "+t._s(e.title)+" ")]):n("v-tooltip",{attrs:{top:"",small:""},scopedSlots:t._u([{key:"activator",fn:function(o){var r=o.on,c=o.attrs;return[n("span",t._g(t._b({},"span",c,!1),r),[t._v(" "+t._s(e.title)+" ")])]}}],null,!0)},[t._v(" "),n("span",{staticStyle:{display:"block","max-width":"250px"}},[t._v(t._s(e.desc))])])],1)})),0)])],1)],1)])})),1)],1)}),[],!1,null,"45ff6363",null);e.default=component.exports;l()(component,{VCol:d.a,VContainer:v.a,VRow:f.a,VTooltip:m.a})},416:function(t,e,n){"use strict";n.r(e);n(252);var o={data:function(){return{title:"Personal Projects",meetups:[{src:"/images/portfolio.png",title:"Personal website",link:"https://gtopsis.github.io/"},{src:"/images/TangoPanoramaB.webp",title:"Tangoneon",link:"https://tangoneon.gr/"},{src:"/images/uoc-radio.png",title:"Uoc radio",link:"https://gtopsis.github.io/Uoc-radio-website/index.html"},{src:"/images/cs-352.png",title:"Website for course cs-352",link:"#"}]}},methods:{navigateToMeetup:function(t){window.open(t.link)}}},r=(n(404),n(59)),c=n(68),l=n.n(c),d=n(411),v=n(390),f=n(379),m=n(389),_=n(251),h=n(380),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:"","full-width":""}},[n("v-row",{staticClass:"justify-md-center justify-sm-left",attrs:{align:"center"}},[n("v-col",{staticClass:"mb-3",attrs:{cols:"auto"}},[n("h1",[t._v(t._s(t.title))])])],1),t._v(" "),n("v-row",{attrs:{dense:"",justify:""}},t._l(t.meetups,(function(e,o){return n("v-col",{key:o,attrs:{cols:"12",md:"4",lg:"3"}},[n("v-card",{staticClass:"meetup-card",on:{click:function(n){return t.navigateToMeetup(e)}}},[n("v-img",{staticClass:"white--text align-end",attrs:{src:e.src,gradient:"to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)",height:"200px"}},[n("v-card-title",{domProps:{textContent:t._s(e.title)}})],1)],1)],1)})),1)],1)}),[],!1,null,"2decb840",null);e.default=component.exports;l()(component,{VCard:d.a,VCardTitle:v.d,VCol:f.a,VContainer:m.a,VImg:_.a,VRow:h.a})},417:function(t,e,n){"use strict";n.r(e);n(50),n(8),n(49);var o={props:{content:{type:String,default:"experience",validator:function(t){return["experience","education"].includes(t)}}},data:function(){return{avatarSize:40}},computed:{isMobileDevice:function(){return this.$vuetify.breakpoint.smAndDown},timelineTitle:function(){return"experience"==this.content?"Experience":"education"==this.content?"Education":"My Story"},timelineItems:function(){return"experience"==this.content?this.$store.state.experience.jobs:"education"==this.content&&this.$store.state.education.studies||[]}},methods:{hasTimelineItemDetails:function(t){return t.description&&""!=t},navigateToCompany:function(t){if(t&&""!=t){var e=t;window.open(e,"_blank")}}}},r=(n(406),n(59)),c=n(68),l=n.n(c),d=n(433),v=n(411),f=n(390),m=n(379),_=n(389),h=n(251),x=n(380),C=n(434),y=n(437),w=n(386),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-container",{attrs:{fluid:""}},[n("v-row",{staticClass:"justify-md-center justify-sm-left",attrs:{align:"center"}},[n("v-col",{staticClass:"mb-3",attrs:{cols:"auto"}},[n("h1",[t._v(t._s(t.timelineTitle))])])],1),t._v(" "),n("v-row",{attrs:{align:"center",justify:"center"}},[n("v-col",{staticClass:"px-0",attrs:{cols:"12"}},[n("v-timeline",{attrs:{dense:""}},t._l(t.timelineItems,(function(e,i){return n("v-timeline-item",{key:i,scopedSlots:t._u([{key:"icon",fn:function(){return[n("v-tooltip",{attrs:{bottom:""},scopedSlots:t._u([{key:"activator",fn:function(o){var r=o.on,c=o.attrs;return[n("v-avatar",t._g(t._b({attrs:{size:t.avatarSize,color:e.avatar.bgColor,"align-center":"","justify-center":""}},"v-avatar",c,!1),r),[n("v-img",{staticClass:"firm-logo",attrs:{contain:"",src:e.avatar.img,alt:e.avatar.alt,width:"26",height:"26"}})],1)]}}],null,!0)},[t._v(" "),n("span",[t._v(t._s(e.avatar.label.text))])])]},proxy:!0}],null,!0)},[t._v(" "),n("v-card",{staticClass:"elevation-2 timeline-item"},[n("v-card-title",[n("strong",{staticClass:"timeline-item-title"},[t._v("\n                "+t._s(e.card.title)+"\n              ")])]),t._v(" "),n("v-card-subtitle",[t._v("\n              "+t._s(e.card.period.start)+" -\n              "+t._s(e.card.period.end)+"\n            ")]),t._v(" "),n("v-card-text",[n("p",{staticClass:"mb-0"},[e.avatar.label.link?n("a",{staticClass:"firm-link",attrs:{href:e.avatar.label.link,target:"_blank",rel:"noopener noreferrer"}},[t._v(t._s(e.avatar.label.text))]):n("span",[t._v(t._s(e.avatar.label.text))])]),t._v(" "),n("p",{staticClass:"ma-0"},[t._v("\n                "+t._s(e.card.description)+"\n              ")]),t._v(" "),n("ul",{staticClass:"ma-0"},t._l(e.card.tools,(function(t,e){return n("li",{key:e})})),0)]),t._v(" "),""!=e.card.readMore?n("v-card-actions",[t._v("\n              Read more\n            ")]):t._e()],1)],1)})),1)],1)],1)],1)}),[],!1,null,"03e328ca",null);e.default=component.exports;l()(component,{VAvatar:d.a,VCard:v.a,VCardActions:f.a,VCardSubtitle:f.b,VCardText:f.c,VCardTitle:f.d,VCol:m.a,VContainer:_.a,VImg:h.a,VRow:x.a,VTimeline:C.a,VTimelineItem:y.a,VTooltip:w.a})},425:function(t,e,n){"use strict";n(410)},426:function(t,e,n){var o=n(19)(!1);o.push([t.i,".section[data-v-11040eb6]{margin:100px 0}.page-container[data-v-11040eb6]{max-width:1100px!important;margin:0 auto}",""]),t.exports=o},436:function(t,e,n){"use strict";n.r(e);var o={data:function(){return{}},head:function(){return{title:"Home",meta:[{hid:"description",name:"description",content:"Home page of personal website. It contains details about my work experience and my education background."}]}}},r=(n(425),n(59)),c=n(68),l=n.n(c),d=n(379),v=n(380),component=Object(r.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"page-container",attrs:{"no-gutters":"","justify-center":""}},[n("v-col",{staticClass:"section px-4 py-0 mx-0",attrs:{cols:"12"}},[n("hero")],1),t._v(" "),n("v-col",{staticClass:"section px-4 py-0 mx-0",attrs:{cols:"12"}},[n("skills-collection")],1),t._v(" "),n("v-col",{staticClass:"section px-4 py-0 mx-0",attrs:{cols:"12"}},[n("projects")],1),t._v(" "),n("v-col",{staticClass:"section px-4 py-0 mx-0",attrs:{cols:"12"}},[n("v-row",{staticClass:"justify-space-between no-gutters"},[n("v-col",{attrs:{cols:"12",md:"5"}},[n("timeline",{attrs:{content:"experience"}})],1),t._v(" "),n("v-col",{attrs:{cols:"12",md:"5"}},[n("timeline",{attrs:{content:"education"}})],1)],1)],1)],1)}),[],!1,null,"11040eb6",null);e.default=component.exports;l()(component,{Hero:n(414).default,SkillsCollection:n(415).default,Projects:n(416).default,Timeline:n(417).default}),l()(component,{VCol:d.a,VRow:v.a})}}]);