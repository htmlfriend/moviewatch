(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{33:function(e,t,a){e.exports=a(75)},38:function(e,t,a){},40:function(e,t,a){},44:function(e,t,a){},64:function(e,t,a){},71:function(e,t,a){},73:function(e,t,a){},75:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),o=a(29),c=a.n(o),i=(a(38),a(6)),s=a(7),l=a(9),m=a(8),u=a(10),p=a(12),v=a(0),b=(a(40),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"about__container"},r.a.createElement("p",null,"About page"))}}]),t}(n.Component)),h=a(16),d=a.n(h),f=a(30),j=(a(44),a(31)),E=a.n(j),O=(a(64),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.movie,t=e.id,a=e.year,n=e.title,o=e.summary,c=e.torrents,i=e.small_cover_image,s=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement(p.b,{to:{pathname:"/movie/".concat(t),state:{year:a,id:t,title:n,summary:o,torrents:c,small_cover_image:i,genres:s}}},r.a.createElement("img",{src:i,alt:n,title:n}),r.a.createElement("div",{className:"movie__column"},r.a.createElement("h3",{className:"movie__title"},n),r.a.createElement("ul",{className:"movie__genres"},s.map(function(e,t){return r.a.createElement("li",{key:t,className:"genres__genre"},e)})),r.a.createElement("h4",{className:"movie__year"},a),r.a.createElement("p",{className:"movie__summary"},o.slice(0,140),"...."),r.a.createElement("ul",{className:"torrents"},c.map(function(e,t){return r.a.createElement("li",{className:"torrents__torent"},r.a.createElement("a",{key:t,href:e.url},"Download"))})))))}}]),t}(n.Component)),y=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(a=Object(l.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={isLoading:!0,movies:[]},a.getMovies=Object(f.a)(d.a.mark(function e(){var t,n;return d.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,E.a.get("https://yts.mx/api/v2/list_movies.json?sort_by=rating");case 2:t=e.sent,n=t.data.data.movies,a.setState({isLoading:!1,movies:n}),console.log(n);case 6:case"end":return e.stop()}},e)})),a}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,t=e.isLoading,a=e.movies;return r.a.createElement("section",{className:"container"},t?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading ...")):r.a.createElement("div",{className:"movies"},a.map(function(e){return r.a.createElement(O,{key:e.id,movie:e})})))}}]),t}(n.Component),_=(a(71),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"nav"},r.a.createElement(p.b,{to:"/"},"Main page"),r.a.createElement(p.b,{to:{pathname:"/about",state:{fromLocation:!0}}},"About page"))}}]),t}(n.Component)),g=(a(73),function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.location,a=e.history;void 0===t.state&&a.push("/")}},{key:"render",value:function(){var e=this.props.location;return e.state?r.a.createElement("div",{className:"about__container"},r.a.createElement("p",null,"About the film : ",r.a.createElement("span",null,e.state.title))):null}}]),t}(n.Component)),k=function(e){function t(){return Object(i.a)(this,t),Object(l.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement(p.a,null,r.a.createElement(_,null),r.a.createElement(v.a,{path:"/about",component:b}),r.a.createElement(v.a,{path:"/",exact:!0,component:y}),r.a.createElement(v.a,{path:"/movie/:id",component:g}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[33,2,1]]]);
//# sourceMappingURL=main.9667485b.chunk.js.map