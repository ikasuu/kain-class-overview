(this.webpackJsonpgrandislibrary=this.webpackJsonpgrandislibrary||[]).push([[7],{189:function(e,t,a){"use strict";a.r(t),a.d(t,"ClassOverviewDemo",(function(){return y}));var n=a(97),r=a(98),o=a(100),l=a(99),c=a(0),i=a.n(c),s=a(31),u=a(109),d=a(137),h=a(136),m=a(138),f=a(171),p=a(43),y=function(e){Object(o.a)(a,e);var t=Object(l.a)(a);function a(e){var r;return Object(n.a)(this,a),(r=t.call(this,e)).state={data:{},loading:!0,fail:!1},r}return Object(r.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("./data/kain.json").then((function(e){return e.json()})).then((function(t){return e.setState({data:t,loading:!1,fail:!1})})).catch((function(t){return e.setState({fail:!0})}))}},{key:"componentDidUpdate",value:function(e,t){var a=this;if(e.match.params.id!==this.props.match.params.id&&(this.setState({loading:!0}),fetch("./data/".concat(this.props.match.params.id,".json")).then((function(e){return e.json()})).then((function(e){return a.setState({data:e,loading:!1,fail:!1})})).catch((function(e){return a.setState({fail:!0})}))),window.location.hash){var n=window.location.hash.replace("#","").split("#"),r=document.getElementById(n[1]);r&&r.scrollIntoView()}}},{key:"render",value:function(){var e=this.state,t=e.loading,a=e.fail,n=e.data;return i.a.createElement("div",null,i.a.createElement(u.a,{imageUrl:"".concat(s.c.library,".jpg")}),t?i.a.createElement(f.a,null,a?i.a.createElement("h3",null,"Looks like there was an error in the URL you entered, the page you are looking for may be moved or deleted."):""):i.a.createElement("div",null,i.a.createElement(p.a,null,i.a.createElement("title",null,"".concat(n.class," | Grandis Library")),i.a.createElement("meta",{name:n.meta,content:"description"})),i.a.createElement(f.a,null,i.a.createElement(h.c,{data:n}),n.content.howToCreate&&i.a.createElement(h.a,{className:n.class,howToCreate:n.content.howToCreate}),n.content.extraContent&&i.a.createElement(h.b,{title:n.content.extraContent.title,content:n.content.extraContent.content}),i.a.createElement("div",{id:"skill"}),i.a.createElement(d.a,{primary:n.skill.primary,fifth:n.skill.fifth,hyper:n.skill.hyper,hyperSkillBuild:n.content.hyperBuild,nodeInfo:n.content.nodeInfo}),i.a.createElement("hr",null),i.a.createElement(m.a,{classGroup:n.content.classGroup,className:n.class,moreInfo:n.content.moreInfo,credits:n.content.credits}))))}}]),a}(c.Component);t.default=y}}]);
//# sourceMappingURL=7.2e013f09.chunk.js.map