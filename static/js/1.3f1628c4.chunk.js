(this.webpackJsonpgrandislibrary=this.webpackJsonpgrandislibrary||[]).push([[1],{104:function(e,a,t){"use strict";var n=t(23),l=t(0),r=t.n(l),c=t(195),s=t(183),i=t(192),m=t(182),o=t(168),u=t(102),E=t.n(u),d=t(103),p=t.n(d);t(169);function f(e){var a=e.animation,t=e.name,s=Object(l.useState)(!1),o=Object(n.a)(s,2),u=o[0],E=o[1];return r.a.createElement("span",null,r.a.createElement(c.a.Img,{className:"animation",variant:"top",src:a,onClick:function(){return E(!0)}}),r.a.createElement(i.a,{centered:!0,show:u,onHide:function(){return E(!1)},"aria-labelledby":"notable-skill",size:"lg"},r.a.createElement(i.a.Header,{closeButton:!0},r.a.createElement(i.a.Title,{id:"notable-skill"},t)),r.a.createElement(i.a.Body,null,r.a.createElement(m.a,{fluid:!0,src:a,className:"modal-animation"}))))}a.a=function(e){var a=e.skillData,t=e.name,n=e.shortDesc,l=e.properties,i=e.maxLevel,m=function(e,a){var t=Object.entries(e),n={};t.forEach((function(e){e[1].includes("]")||"action"===e[0]||"memo_PL"===e[0]||"Image<Rgba32>: 32x32"===e[1]||(n[e[0]]=o.a.evaluate(e[1],{x:a,d:Math.floor,u:Math.ceil,y:1}))})),n.cooltimeMS&&(n.cooltimeMS=.001*n.cooltimeMS);return n}(l,i);return r.a.createElement(c.a,{className:"skill-body"},r.a.createElement(c.a.Body,null,a.animations&&a.animations.map((function(e,a){return r.a.createElement(f,{key:a,animation:e,name:t})})),r.a.createElement(c.a.Title,null,a.icons.map((function(e,a){return r.a.createElement("img",{key:a,className:"icon",src:e,alt:""})})),r.a.createElement("strong",{className:"skill-name"},t),r.a.createElement(s.a,{variant:"secondary",className:"badge"},a.type),a.reqLev&&r.a.createElement(s.a,{variant:"secondary",className:"badge"},"Lv. ",a.reqLev)),r.a.createElement(c.a.Subtitle,{className:"master-level"},r.a.createElement("em",null,"Master Level: ",i)),a.desc&&r.a.createElement(c.a.Text,null,p()(E.a.sanitize(a.desc))),a.details&&r.a.createElement("div",{className:"skill-detail"},r.a.createElement("ul",null,a.details.map((function(e,a){return r.a.createElement("li",{key:a},p()(E.a.sanitize(e)))})))),r.a.createElement("div",null,n?n.replace(/#(\w+)/g,(function(e,a){return m[a]||e})).replace(/#c/g,"").replace(/#z/g,"0").replace(/#/g,"").replace(/mpCon/g,"0").replace(/\\r/g,"").replace(/\\N/g,"\\n").replace(/\\c/g,"").split("\\n").map((function(e){return r.a.createElement(c.a.Subtitle,{as:"p",className:"mb-2 text-muted short-desc"},e)})):null)))}},110:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(182);t(139);a.a=function(e){return l.a.createElement("div",{className:"outer-box"},l.a.createElement("div",{className:"header-box"},l.a.createElement(r.a,{fluid:!0,className:"header",src:e.imageUrl}),l.a.createElement("div",{className:"overlay"})))}},133:function(e,a,t){},136:function(e,a,t){"use strict";t.d(a,"c",(function(){return M})),t.d(a,"a",(function(){return H})),t.d(a,"b",(function(){return R}));var n=t(0),l=t.n(n),r=t(102),c=t.n(r),s=t(103),i=t.n(s),m=t(171),o=t(89),u=t(90),E=t(186),d=t(182),p=t(195),f=t(23),v=t(97),h=t(98),k=t(100),y=t(99),g=t(115),b=t.n(g),N=t(124),w=t.n(N),D=t(192),S=t(37),L=t(104),x=function(e){Object(k.a)(t,e);var a=Object(y.a)(t);function t(e){var n;return Object(v.a)(this,t),(n=a.call(this,e)).state={retrievedData:[],skillData:e.skillData,loading:!0},n}return Object(h.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.state.skillData;this._isMounted=!0,w()(b.a,{retries:3}),b.a.get("https://maplestory.io/api/GMS/".concat(S.f,"/job/skill/").concat(a.id)).then((function(a){if(e._isMounted){var t=[];t.push(a.data),e.setState({retrievedData:t,loading:!1})}})).catch((function(e){return console.log(e)}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this,a=this.state,t=a.loading,n=a.retrievedData;return l.a.createElement("div",null,t?l.a.createElement("div",{style:{margin:"2rem 40% 2rem 40%"}},l.a.createElement(d.a,{src:S.d}),l.a.createElement("div",{style:{paddingLeft:"0.5rem"}},"Loading!")):l.a.createElement("div",null,n.map((function(a,t){return l.a.createElement("div",{key:a.description.id},l.a.createElement(L.a,{skillData:e.state.skillData,name:a.description.name,desc:a.description.desc,shortDesc:a.description.shortDesc,properties:a.properties,maxLevel:a.properties.maxLevel}))}))))}}]),t}(n.Component);function j(e){var a=e.linkSkill;return l.a.createElement("div",null,l.a.createElement("h2",null,"Link Skill"),l.a.createElement(x,{skillData:a}))}function B(e){var a=e.skill,t=Object(n.useState)(!1),r=Object(f.a)(t,2),c=r[0],s=r[1];return l.a.createElement("span",null,l.a.createElement(d.a,{src:a.icons[0],className:"hvr-grow",style:{margin:"0 0.25rem 0.5rem 0.25rem",cursor:"pointer"},onClick:function(){return s(!0)}}),l.a.createElement(D.a,{centered:!0,show:c,onHide:function(){return s(!1)},"aria-labelledby":"notable-skill",size:"lg"},l.a.createElement(D.a.Header,{closeButton:!0},l.a.createElement(D.a.Title,{id:"notable-skill"},a.name)),l.a.createElement(D.a.Body,null,l.a.createElement(d.a,{src:a.animations[0],style:{width:"100%",backgroundImage:"url(https://www.publicdomainpictures.net/pictures/30000/velka/plain-white-background.jpg)"}}))))}function C(e){var a=e.skillData;return l.a.createElement(L.a,{skillData:a,name:a.name,desc:a.desc,shortDesc:a.shortDesc,properties:{},maxLevel:a.maxLevel})}function z(e){var a=e.linkSkill;return l.a.createElement("div",null,l.a.createElement("h2",null,"Link Skill"),l.a.createElement(C,{skillData:a}))}var O=t(194),P=t(185),I=t(88);var T=function(e){var a=e.tooltip;return l.a.createElement(O.a,{placement:"top",overlay:l.a.createElement(P.a,{style:{zIndex:"1"}},a)},l.a.createElement(I.a,{variant:"link"},l.a.createElement("span",{className:"info-button"})))};t(133);function M(e){var a=e.data;return l.a.createElement("div",null,l.a.createElement(m.a,null,l.a.createElement("h1",{className:"class-title"},a.class),l.a.createElement(o.a,null,l.a.createElement(u.a,{md:"auto",className:"property-container"},l.a.createElement(A,{content:a.content}),l.a.createElement(G,{skills:a.skill.notable,classType:a.content.classType})),l.a.createElement(u.a,{md:"auto",className:"pros-cons-container"},l.a.createElement(_,{pros:a.content.prosCons.pros,cons:a.content.prosCons.cons}),l.a.createElement(z,{linkSkill:a.content.linkSkill})))),l.a.createElement("hr",null),l.a.createElement(F,{content:a.content}))}function A(e){var a=e.content;return l.a.createElement("div",{className:"class-property"},l.a.createElement("h2",null,"Class Properties"),l.a.createElement(m.a,null,l.a.createElement(E.a,{borderless:!0},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("strong",null,"Class Group")),l.a.createElement("td",null,a.classGroup)),l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("strong",null,"Job Group")),l.a.createElement("td",null,a.jobGroup)),l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("strong",null,"Primary Stat")),l.a.createElement("td",null,a.mainStat)),l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("strong",null,"Secondary Stat")),l.a.createElement("td",null,a.secondaryStat)),l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("strong",null,"Legion Bonus")),l.a.createElement("td",null,a.legion)),l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("strong",null,"Primary Weapon")),l.a.createElement("td",null,a.equipment[0].weapon.map((function(e){return l.a.createElement(o.a,{key:e,style:{marginBottom:"0.2rem"}},l.a.createElement(u.a,null,l.a.createElement(d.a,{src:S.i[e][0],style:{verticalAlign:"middle"}})," ",S.i[e][1]))})))),l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("strong",null,"Secondary Weapon")),l.a.createElement("td",null,a.equipment[1].secondary.map((function(e){return l.a.createElement(o.a,{key:e,style:{marginBottom:"0.2rem"}},l.a.createElement(u.a,null,l.a.createElement(d.a,{src:S.e[e][0],style:{verticalAlign:"middle"}})," ",S.e[e][1]))})))),a.equipment[2]&&l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("strong",null,"Ammo")),l.a.createElement("td",null,l.a.createElement("div",null,l.a.createElement(d.a,{src:S.h[a.equipment[2].ammo][0],style:{verticalAlign:"middle"}})," ",S.h[a.equipment[2].ammo][1])))))))}function G(e){var a=e.skills,t=e.classType;return l.a.createElement("div",{style:{paddingLeft:"0.5rem"}},l.a.createElement("h5",null,"Notable Skills"),a.map((function(e){return l.a.createElement(B,{key:e.name,skill:e})})),l.a.createElement("h5",null,"Class Type"),l.a.createElement("ul",null,t.map((function(e){return l.a.createElement("li",{key:e},e)}))))}function _(e){var a=e.pros,t=e.cons;return l.a.createElement("div",{className:"pros-cons-container"},l.a.createElement("h2",null,"Pros and Cons"),l.a.createElement(m.a,null,l.a.createElement("h3",null,"Pros"),l.a.createElement("ul",null,a.map((function(e){return l.a.createElement("li",{key:e},i()(c.a.sanitize(e)))}))),l.a.createElement("h3",null,"Cons"),l.a.createElement("ul",null,t.map((function(e){return l.a.createElement("li",{key:e},i()(c.a.sanitize(e)))})))))}function F(e){var a=e.content;return l.a.createElement(m.a,null,l.a.createElement(o.a,null,l.a.createElement(u.a,{md:"auto",className:"base-stats-width"},l.a.createElement("h2",{className:"base-stat-title"},"Base Stats (From Skills)",l.a.createElement(T,{tooltip:i()(c.a.sanitize(a.baseStats[0]))})),l.a.createElement(E.a,{borderless:!0},l.a.createElement("tbody",null,a.baseStats[1].map((function(e,a){return l.a.createElement("tr",{key:a},l.a.createElement("td",{className:"stat-td"},i()(c.a.sanitize(e))))}))))),l.a.createElement(u.a,{md:"auto",className:"buff-width"},l.a.createElement("h2",null,"Buffs & Other Actives"),l.a.createElement(E.a,{size:"sm",borderless:!0},l.a.createElement("tbody",null,l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("strong",null,"Active Buffs"),":")," ",l.a.createElement("td",{className:"buff-td"},i()(c.a.sanitize(a.buffInfo.active)))),a.buffInfo.summons?l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("strong",null,"Summons"),":")," ",l.a.createElement("td",{className:"buff-td"},i()(c.a.sanitize(a.buffInfo.summons)))):l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("strong",null,"Summons"),":")," ",l.a.createElement("td",null,"None")),l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("strong",null,"Buffs with Cooldowns"),":")," ",l.a.createElement("td",{className:"buff-td"},i()(c.a.sanitize(a.buffInfo.buffCd)))),l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("strong",null,"5th Job Buffs"),":")," ",l.a.createElement("td",{className:"buff-td"},i()(c.a.sanitize(a.buffInfo.buffFifth)))),a.buffInfo.binds?l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("strong",null,"Binds"),":")," ",l.a.createElement("td",{className:"buff-td"},i()(c.a.sanitize(a.buffInfo.binds)))):l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("strong",null,"Binds"),":")," ",l.a.createElement("td",null,"None")),a.buffInfo.iFrame?l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("strong",null,"iFrames"),":")," ",l.a.createElement("td",{className:"buff-td"},i()(c.a.sanitize(a.buffInfo.iFrame)))):l.a.createElement("tr",null,l.a.createElement("th",null,l.a.createElement("strong",null,"iFrames"),":")," ",l.a.createElement("td",null,"None")))))),l.a.createElement("h2",null,"Skill Build Path"),l.a.createElement(E.a,{borderless:!0},l.a.createElement("tbody",null,a.buildPath.build.map((function(e,a){return l.a.createElement("tr",{key:a},l.a.createElement("th",null,e[0],":"),l.a.createElement("td",{className:"skill-td"},i()(c.a.sanitize(e[1]))))})))),l.a.createElement("ul",null,a.buildPath.details.map((function(e,a){return l.a.createElement("li",{key:a},i()(c.a.sanitize(e)))}))))}function H(e){var a=e.className,t=e.howToCreate;return l.a.createElement(m.a,null,l.a.createElement("h2",{className:"creation-title"},"How to create a ",a),l.a.createElement(d.a,{thumbnail:!0,src:t.image[0],width:t.image[1][0],height:t.image[1][1],className:"creation-image"}),t.npc.map((function(e){return l.a.createElement(d.a,{key:e,src:e[0],width:e[1][0],height:e[1][1],className:"creation-image"})})),l.a.createElement(p.a,{className:"extra-content-width"},l.a.createElement(p.a.Body,null,t.info.map((function(e){return l.a.createElement("p",{key:e},i()(c.a.sanitize(e,{ADD_ATTR:["target"]})))})))))}function R(e){var a=e.title,t=e.content;return l.a.createElement(m.a,null,l.a.createElement("h2",null,a),l.a.createElement(p.a,{className:"extra-content-width"},l.a.createElement(p.a.Body,null,i()(c.a.sanitize(t,{ADD_ATTR:["target"]})))))}a.d=function(e){var a=e.data;return l.a.createElement("div",null,l.a.createElement(m.a,null,l.a.createElement("h1",{className:"class-title"},a.class),l.a.createElement(o.a,null,l.a.createElement(u.a,{md:"auto",className:"property-container"},l.a.createElement(A,{content:a.content}),l.a.createElement(G,{skills:a.skill.notable,classType:a.content.classType})),l.a.createElement(u.a,{md:"auto",className:"pros-cons-container"},l.a.createElement(_,{pros:a.content.prosCons.pros,cons:a.content.prosCons.cons}),l.a.createElement(j,{linkSkill:a.content.linkSkill})))),l.a.createElement("hr",null),l.a.createElement(F,{content:a.content}))}},137:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=t(111),c=t(184),s=t(171),i=t(196),m=t(88),o=t(102),u=t.n(o),E=t(103),d=t.n(E),p=t(97),f=t(98),v=t(100),h=t(99),k=t(115),y=t.n(k),g=t(124),b=t.n(g),N=t(182),w=t(104),D=t(37),S=function(e){Object(v.a)(t,e);var a=Object(h.a)(t);function t(e){var n;return Object(p.a)(this,t),(n=a.call(this,e)).state={retrievedData:[],skillData:e.skillData,loading:!0},n}return Object(f.a)(t,[{key:"componentDidMount",value:function(){var e=this,a=this.state.skillData;this._isMounted=!0;var t=[],n=[],l=[];b()(y.a,{retries:5}),a.forEach((function(e,a){e.offline?l.push([e,a]):t.push(y.a.get("https://maplestory.io/api/GMS/".concat(D.f,"/job/skill/").concat(e.id)))})),y.a.all(t).then((function(a){a.forEach((function(e){return n.push(e.data)})),l.forEach((function(e){return n.splice(e[1],0,e[0])})),e._isMounted&&e.setState({retrievedData:n,loading:!1})})).catch((function(e){return console.log(e)}))}},{key:"componentWillUnmount",value:function(){this._isMounted=!1}},{key:"render",value:function(){var e=this,a=this.state,t=a.loading,n=a.retrievedData;return l.a.createElement("div",null,t?l.a.createElement("div",{style:{margin:"2rem 0% 2rem 45%"}},l.a.createElement(N.a,{src:D.d}),l.a.createElement("div",{style:{paddingLeft:"0.5rem"}},"Loading!")):l.a.createElement("div",null,n.map((function(a,t){return a.offline?l.a.createElement("div",{key:t},l.a.createElement(w.a,{skillData:a,name:a.name,properties:{},shortDesc:a.shortDesc,maxLevel:a.maxLevel})):l.a.createElement("div",{key:t},l.a.createElement(w.a,{skillData:e.state.skillData[t],name:a.description.name,desc:a.description.desc,shortDesc:a.description.shortDesc,properties:a.properties,levelProperties:a.levelProperties,maxLevel:a.properties.maxLevel}))})),l.a.createElement(m.a,{variant:"link"},l.a.createElement(r.HashLink,{smooth:!0,to:"#skill",scroll:function(e){return x(e)}},l.a.createElement("span",{className:"jump-button"})))))}}]),t}(n.Component);function L(e){var a=e.skillData;return l.a.createElement("div",null,a.map((function(e){return l.a.createElement("div",{key:e.id},l.a.createElement(w.a,{skillData:e,name:e.name,properties:{},shortDesc:e.shortDesc,maxLevel:"25 + 5"}))})))}var x=function(e){var a=e.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:a+-80,behavior:"smooth"})};function j(e){var a=[];return e.fifthCommon.forEach((function(e){return a.push(D.b[e])})),a}a.a=function(e){var a=e.primary,t=e.fifth,n=e.hyper,o=e.hyperSkillBuild,E=e.nodeInfo;return l.a.createElement(s.a,null,l.a.createElement("h2",null,"Skill Information"),l.a.createElement(i.a,null,function(e){return e.map((function(e,a){return l.a.createElement(c.a,{eventKey:e[0],title:e[0],key:a},l.a.createElement(S,{skillData:e[1]}))}))}(a),l.a.createElement(c.a,{eventKey:"fifth",title:"5th Job"},l.a.createElement("h4",null,"Recommended Skills for Boost Nodes"),l.a.createElement(s.a,null,d()(u.a.sanitize(E.recommended))),l.a.createElement("ul",null),l.a.createElement("h4",null,"All Possible Skills Obtainable for Boost Nodes"),l.a.createElement(s.a,null,d()(u.a.sanitize(E.possible))),l.a.createElement("h3",null,"Common V Skills"),l.a.createElement(L,{skillData:j(t)}),l.a.createElement("h3",null,"Class Specific V Skills"),l.a.createElement(L,{skillData:t.fifthMain}),l.a.createElement(m.a,{variant:"link"},l.a.createElement(r.HashLink,{smooth:!0,to:"#skill",scroll:function(e){return function(e){var a=e.getBoundingClientRect().top+window.pageYOffset;window.scrollTo({top:a+-80,behavior:"smooth"})}(e)}},l.a.createElement("span",{className:"jump-button"})))),n&&l.a.createElement(c.a,{eventKey:"hyper",title:"Hyper Skills"},l.a.createElement("h3",null,"Passive Build"),d()(u.a.sanitize(o.recommended)),l.a.createElement("h3",null,"Passive Skills"),l.a.createElement(S,{skillData:n.hyperPassive}),l.a.createElement("h3",null,"Active Skills"),l.a.createElement(S,{skillData:n.hyperActive}))))}},138:function(e,a,t){"use strict";var n=t(0),l=t.n(n),r=(t(133),t(193)),c=t(188),s=t(191),i=t(187),m=t(182),o=t(9),u=t(37);t(173),t(174);s.a.use([i.a]);var E=function(e){var a=e.classGroup;return l.a.createElement(r.a,{scrollbar:{draggable:!0,hide:!0},spaceBetween:10,slidesPerView:2,breakpoints:{360:{slidesPerView:3.5},490:{slidesPerView:4.5},770:{slidesPerView:5.5},991:{slidesPerView:8.5},1199:{slidesPerView:9.5}}},function(e){switch(e){case"Explorers":return u.a.explorers.map((function(e){return l.a.createElement(c.a,null,l.a.createElement(o.Link,{to:"/classes/".concat(e[0]),key:e,className:"hvr-float"},l.a.createElement(m.a,{src:"".concat("/kain-class-overview","/class-portrait/").concat(e[0],".jpg"),style:{width:"100px",margin:"1rem 0 1rem 0"}}),l.a.createElement("div",{className:"class-overlay"})))}));case"Cygnus Knights":return u.a.cygnusKnights.map((function(e){return l.a.createElement(c.a,null,l.a.createElement(o.Link,{to:"/classes/".concat(e[0]),key:e,className:"hvr-float"},l.a.createElement(m.a,{src:"".concat("/kain-class-overview","/class-portrait/").concat(e[0],".jpg"),style:{width:"100px",margin:"1rem 0 0 0"}}),l.a.createElement("div",{className:"class-overlay"})))}));case"Heroes":return u.a.heroes.map((function(e){return l.a.createElement(c.a,null,l.a.createElement(o.Link,{to:"/classes/".concat(e[0]),key:e,className:"hvr-float"},l.a.createElement(m.a,{src:"".concat("/kain-class-overview","/class-portrait/").concat(e[0],".jpg"),style:{width:"100px",margin:"1rem 0 1rem 0"}}),l.a.createElement("div",{className:"class-overlay"})))}));case"Resistance":case"Resistance (Xenon)":case"Resistance (Demon)":return u.a.resistance.map((function(e){return l.a.createElement(c.a,null,l.a.createElement(o.Link,{to:"/classes/".concat(e[0]),key:e,className:"hvr-float"},l.a.createElement(m.a,{src:"".concat("/kain-class-overview","/class-portrait/").concat(e[0],".jpg"),style:{width:"100px",margin:"1rem 0 1rem 0"}}),l.a.createElement("div",{className:"class-overlay"})))}));case"Nova":return u.a.nova.map((function(e){return l.a.createElement(c.a,null,l.a.createElement(o.Link,{to:"/classes/".concat(e[0]),key:e,className:"hvr-float"},l.a.createElement(m.a,{src:"".concat("/kain-class-overview","/class-portrait/").concat(e[0],".jpg"),style:{width:"100px",margin:"1rem 0 1rem 0"}}),l.a.createElement("div",{className:"class-overlay"})))}));case"Sengoku":return u.a.sengoku.map((function(e){return l.a.createElement(c.a,null,l.a.createElement(o.Link,{to:"/classes/".concat(e[0]),key:e,className:"hvr-float"},l.a.createElement(m.a,{src:"".concat("/kain-class-overview","/class-portrait/").concat(e[0],".jpg"),style:{width:"100px",margin:"1rem 0 1rem 0"}}),l.a.createElement("div",{className:"class-overlay"})))}));case"Flora":return u.a.flora.map((function(e){return l.a.createElement(c.a,null,l.a.createElement(o.Link,{to:"/classes/".concat(e[0]),key:e,className:"hvr-float"},l.a.createElement(m.a,{src:"".concat("/kain-class-overview","/class-portrait/").concat(e[0],".jpg"),style:{width:"100px",margin:"1rem 0 1rem 0"}}),l.a.createElement("div",{className:"class-overlay"})))}));case"Other":case"Other (Anima)":case"Other (FriendStory)":case"Other (Child of God)":case"Other (Beast Tamer)":return u.a.other.map((function(e){return l.a.createElement(c.a,null,l.a.createElement(o.Link,{to:"/classes/".concat(e[0]),key:e,className:"hvr-float"},l.a.createElement(m.a,{src:"".concat("/kain-class-overview","/class-portrait/").concat(e[0],".jpg"),style:{width:"100px",margin:"1rem 0 1rem 0"}}),l.a.createElement("div",{className:"class-overlay"})))}));default:return u.a.explorers.map((function(e){return l.a.createElement(c.a,null,l.a.createElement(o.Link,{to:"/classes/".concat(e[0]),key:e,className:"hvr-float"},l.a.createElement(m.a,{src:"".concat("/kain-class-overview","/class-portrait/").concat(e[0],".jpg"),style:{width:"100px",margin:"1rem 0 1rem 0"}}),l.a.createElement("div",{className:"class-overlay"})))}))}}(a))};function d(e){var a=e.className,t=e.moreInfo;return l.a.createElement("div",null,l.a.createElement("h5",null,"For more information about ",a," check out:"),t.map((function(e){return l.a.createElement("div",{className:"more-info-link",key:e},l.a.createElement("a",{href:e,target:"_blank",rel:"noopener noreferrer"},e))})))}function p(e){var a=e.classGroup;return l.a.createElement("div",null,l.a.createElement("h5",null,"Check out some more ",a," classes below:"),l.a.createElement(E,{classGroup:a}))}function f(e){var a=e.credits;return l.a.createElement("div",null,l.a.createElement("h3",null,"Credits"),a.map((function(e){return l.a.createElement("div",{className:"credit",key:e},l.a.createElement("strong",null,e[0]),": ",e[1])})))}a.a=function(e){var a=e.classGroup,t=e.className,n=e.moreInfo,r=e.credits;return l.a.createElement("div",null,l.a.createElement(d,{className:t,moreInfo:n}),l.a.createElement(p,{classGroup:a}),l.a.createElement(f,{credits:r}))}},139:function(e,a,t){},169:function(e,a,t){}}]);
//# sourceMappingURL=1.3f1628c4.chunk.js.map