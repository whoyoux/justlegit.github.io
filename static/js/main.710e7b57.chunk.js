(this["webpackJsonpJustLegit.pl"]=this["webpackJsonpJustLegit.pl"]||[]).push([[0],{19:function(e,a,t){e.exports=t(42)},3:function(e,a,t){},42:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),c=t(12),r=t.n(c),s=function(e){return n.a.createElement("nav",{className:"navbar abs unscrolled navbar-expand-lg navbar-dark fixed-top"},n.a.createElement("div",{className:"container-fluid"},n.a.createElement("button",{className:"navbar-toggler ml-auto",type:"button","data-toggle":"collapse","data-target":"#navbarResponsive","aria-controls":"navbarResponsive","aria-expanded":"false","aria-label":"Toggle navigation"},n.a.createElement("span",{className:"navbar-toggler-icon"})),n.a.createElement("div",{className:"collapse navbar-collapse rounded",id:"navbarResponsive"},n.a.createElement("a",{className:"navbar-brand",href:"/"},n.a.createElement("i",{className:"fas fa-cog mr-2"}),n.a.createElement("strong",null,"JustLegit.pl"),n.a.createElement("i",{className:"fab fa-discord m-3"}),n.a.createElement("i",{className:"fab fa-facebook m-3"}),n.a.createElement("i",{className:"fab fa-youtube m-3"})),n.a.createElement("ul",{className:"navbar-nav mx-auto text-center"},n.a.createElement("li",{className:"nav-item active"},n.a.createElement("a",{className:"nav-link",href:"/"},"Strona g\u0142\xf3wna",n.a.createElement("span",{className:"sr-only"},"(current)"))),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#admins"},"Zarz\u0105d")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#tutorials"},"Poradniki")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"/"},"Bany")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"#contact"},"Kontakt")),n.a.createElement("li",{className:"nav-item"},n.a.createElement("a",{className:"nav-link",href:"/"},"Sklep"))),n.a.createElement("div",{className:"socials"},n.a.createElement("i",{className:"fab fa-discord m-3"}),n.a.createElement("i",{className:"fab fa-facebook m-3"}),n.a.createElement("i",{className:"fab fa-youtube m-3"})),n.a.createElement("button",{type:"button",className:"btn btn-success"},"Jak pobra\u0107?"))))},m=(t(3),function(e){return n.a.createElement("header",null,n.a.createElement("div",{id:"carouselIndicators",className:"carousel slide","data-ride":"carousel"},n.a.createElement("ol",{className:"carousel-indicators"},n.a.createElement("li",{"data-target":"#carouselIndicators","data-slide-to":"0",className:"active"}),n.a.createElement("li",{"data-target":"#carouselIndicators","data-slide-to":"1"}),n.a.createElement("li",{"data-target":"#carouselIndicators","data-slide-to":"2"})),n.a.createElement("div",{className:"carousel-caption"},n.a.createElement("h2",{className:"display-4"},"JustLegit.pl"),n.a.createElement("p",{className:"lead"},"Lepsza wersja Minecraft'a 1.8.8!"),n.a.createElement("button",{type:"button",className:"btn btn-success btn-lg"},"Jak pobra\u0107?")),n.a.createElement("div",{className:"carousel-inner",role:"listbox"},n.a.createElement("div",{className:"carousel-item active imgC1"}),n.a.createElement("div",{className:"carousel-item imgC2"}),n.a.createElement("div",{className:"carousel-item imgC3"})),n.a.createElement("a",{className:"carousel-control-prev",href:"#carouselIndicators",role:"button","data-slide":"prev"},n.a.createElement("span",{className:"carousel-control-prev-icon","aria-hidden":"true"}),n.a.createElement("span",{className:"sr-only"},"Previous")),n.a.createElement("a",{className:"carousel-control-next",href:"#carouselIndicators",role:"button","data-slide":"next"},n.a.createElement("span",{className:"carousel-control-next-icon","aria-hidden":"true"}),n.a.createElement("span",{className:"sr-only"},"Next"))))}),o=function(e){return n.a.createElement("div",{className:"container color text-center"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col mt-4 mb-3"},n.a.createElement("h1",null,"STRONA W WERSJI TESTOWEJ! NIE JEST SKO\u0143CZONA!"),n.a.createElement("h2",null,"Sprawd\u017a nasz teaser!"))),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col"},n.a.createElement("div",{className:"embed-responsive embed-responsive-16by9 mb-5"},n.a.createElement("iframe",{title:"teaser",width:"560",height:"315",src:e.link,className:"embed-responsive-item"})))))},i=t(13),u=t(14),d=t(17),E=t(15),v=t(18),N=t(16),p=t.n(N),b=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(d.a)(this,Object(E.a)(a).call(this,e))).state={base64:null},t}return Object(v.a)(a,e),Object(u.a)(a,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://crafatar.com/avatars/".concat(this.props.uuid,"?size=512"),{responseType:"arraybuffer"}).then((function(a){var t=btoa(new Uint8Array(a.data).reduce((function(e,a){return e+String.fromCharCode(a)}),""));e.setState({base64:"data:".concat(a.headers["content-type"].toLowerCase(),";base64,").concat(t)})}))}},{key:"render",value:function(){return n.a.createElement("div",{className:"col p-0"},n.a.createElement("img",{alt:"avatar",src:this.state.base64,className:"imgAdm rounded"}),n.a.createElement("h1",null,this.props.name),n.a.createElement("h3",null,this.props.role),n.a.createElement("h4",null,this.props.disc),n.a.createElement("h5",null,this.props.desc))}}]),a}(l.Component),h=function(e){return n.a.createElement("div",{className:"container-fluid color pb-4 m-0",id:"admins"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col text-center mb-3 mt-3"},n.a.createElement("h2",null,"Zarz\u0105d"))),n.a.createElement("div",{className:"row text-center"},[{name:"pazJu",uuid:"8f242fd6-45a7-4e88-99c3-6b39191db3c1",role:"Manage control",desc:"Wsp\xf3\u0142w\u0142a\u015bciciel, Manage controller",disc:"paziu#4017"}].map((function(e){return n.a.createElement(b,{key:e.name,uuid:e.uuid,name:e.name,role:e.role,disc:e.disc,desc:e.desc,className:"mb-5 mr-5 ml-5"})}))))},f=function(e){return n.a.createElement("footer",{className:"footer color pt-3 mb-0 pb-0"},n.a.createElement("div",{className:"container text-center"},n.a.createElement("h5",null,"2020 JustLegit.pl \xa9 Wszelkie prawa zastrze\u017cone "),n.a.createElement("h6",{className:"text-muted"},"created by whoyou")))},g=function(e){return n.a.createElement("div",{className:"color container-fluid text-center mt-4 pt-3 pb-3 mb-4",id:"contact"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12 mb-3"},n.a.createElement("h2",null,"Kontakt z nami"))),n.a.createElement("div",{className:"row mx-auto"},n.a.createElement("div",{className:"col-xl-4 col-md-6"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("h3",null,n.a.createElement("u",null,"Moderator")),n.a.createElement("h4",null,"pazJu")),n.a.createElement("div",{className:"col-12"},n.a.createElement("h5",null,"Discrod: ",n.a.createElement("strong",null,"paziu#4017"))),n.a.createElement("div",{className:"col-12"},n.a.createElement("h5",null,"Email: ",n.a.createElement("strong",null,"#####@&&.PL"))))),n.a.createElement("div",{className:"col-xl-4 col-md-6"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("h3",null,n.a.createElement("u",null,"G\u0142\xf3wny zarz\u0105dca")),n.a.createElement("h4",null,"whoyou")),n.a.createElement("div",{className:"col-12"},n.a.createElement("h5",null,"Discrod: ",n.a.createElement("strong",null,"KillerQueen24/7#4749"))),n.a.createElement("div",{className:"col-12"},n.a.createElement("h5",null,"Email: ",n.a.createElement("strong",null,"#####@&&.PL"))))),n.a.createElement("div",{className:"col-xl-4 col-md-6"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"col-12"},n.a.createElement("h3",null,n.a.createElement("u",null,"Head Discroda")),n.a.createElement("h4",null,"pazJu")),n.a.createElement("div",{className:"col-12"},n.a.createElement("h5",null,"Discrod: ",n.a.createElement("strong",null,"paziu#4017"))),n.a.createElement("div",{className:"col-12"},n.a.createElement("h5",null,"Email: ",n.a.createElement("strong",null,"#####@&&.PL")))))))};var w=function(){return n.a.createElement("div",{className:"App container-fluid p-0"},n.a.createElement(s,null),n.a.createElement(m,null),n.a.createElement(o,{link:"https://www.youtube.com/embed/UcRtFYAz2Yo"}),n.a.createElement(h,{name:"sieha"}),n.a.createElement(g,null),n.a.createElement(f,null))};r.a.render(n.a.createElement(w,null),document.getElementById("root"))}},[[19,1,2]]]);
//# sourceMappingURL=main.710e7b57.chunk.js.map