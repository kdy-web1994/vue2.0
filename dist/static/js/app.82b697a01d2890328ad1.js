webpackJsonp([4],{"/ocq":function(t,e,n){t.exports=n("49fU")(142)},0:function(t,e,n){n("j1ja"),t.exports=n("NHnr")},"49fU":function(t,e){t.exports=vendor_library},"7+uW":function(t,e,n){t.exports=n("49fU")(139)},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n("7+uW"),o=n("/ocq");a.default.use(o.default);var u=new o.default({routes:[{path:"/",name:"HelloWorld",component:function(){return n.e(0).then(n.bind(null,"q/3a"))}}]}),r=n("v5o6"),i=n.n(r),c=n("NYxO"),s={state:{},mutations:{},actions:{}},f={state:{},mutations:{},actions:{}};a.default.use(c.default);var d,l=new c.default.Store({modules:{Home:s,Shop:f},state:{avatar:""},getters:{getAvatar:function(t){return t.avatar}},mutations:{changeAvatar:function(t,e){t.avatar=e}},actions:{commitAvatar:function(t,e){(0,t.commit)("changeAvatar",e)}}}),p=n("woOf"),m=n.n(p),h=n("mvHQ"),x=n.n(h),v=n("//Fk"),y=n.n(v),g=n("mtWM"),w=n.n(g),j=(localStorage.getItem("sessionId")&&localStorage.getItem("sessionId"),d=navigator.userAgent,!!d.match(/AppleWebKit.*Mobile.*/)||d.match(/AppleWebKit/),d.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/),-1<d.indexOf("androidToJs")||d.indexOf("Linux"),-1<d.indexOf("iPhone")||d.indexOf("Mapi/ads/StarRankingac"),d.indexOf("iPad"),d.indexOf("Safari"),d.toLowerCase().match(/MicroMessenger/i),"/api/");if("xx.xx.com"===window.location.host){var U="http://"+window.location.host;a.default.prototype.$shareUrl="https://xx.xx.com",a.default.prototype.$imgUrl=U,j="https://xx.xx.com"+j}w.a.defaults.timeout=1e4,w.a.defaults.retry=4,w.a.defaults.retryDelay=1e4,w.a.interceptors.request.use(function(t){return t},function(t){return y.a.reject(t)}),w.a.interceptors.response.use(function(t){return t},function(t){var e=t.config;if(t.message.match(/timeout of 10000ms exceeded/g))return e&&e.retry?(e.__retryCount=e.__retryCount||0,e.__retryCount>=e.retry?y.a.reject(t):(e.__retryCount+=1,e.retry+=1,new y.a(function(t){setTimeout(function(){t()},e.retryDelay||1)}).then(function(){return w()(e)}))):y.a.reject(t)});var O={UserLogin:function(t){var e=t.name,n=t.pwd,a=t.code;return function(o,r){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"post";return 3<arguments.length&&void 0!==arguments[3]&&arguments[3],new y.a(function(e,n){if("post"!==i&&(r.data={}),r.data)r.headers={"Content-Type":"application/json"};else{r.headers={"Content-Type":"multipart/form-data"},r.params.m="123";var t=new FormData;t.append("json",x()(r.params)),r.data=t,r.params=null}var a=m()({method:i,url:o},r);w()(a).then(function(t){1106===t.data.q.s?u.replace({name:"Home"}):e(t.data)}).catch(function(t){n(t)})})}(j+"XX/XX",{data:{n:"XX",s:"",q:{name:e,pwd:n,code:a}}})}},_=(n("jKll"),n("j1ja"),n("hKoQ")),b=n.n(_);"addEventListener"in document&&document.addEventListener("DOMContentLoaded",function(){i.a.attach(document.body)},!1),n.e(2).then(n.bind(null,"/eCH")).then(function(t){a.default.use(t)}),a.default.prototype.$Api=O,a.default.config.productionTip=!1,n("hKoQ").polyfill(),b.a.polyfill(),new a.default({el:"#app",router:u,store:l,components:{App:function(){return n.e(1).then(n.bind(null,"M93x"))}},template:"<App/>"})},NYxO:function(t,e,n){t.exports=n("49fU")(143)},hKoQ:function(t,e,n){t.exports=n("49fU")(364)},j1ja:function(t,e,n){t.exports=n("49fU")(163)},jKll:function(t,e){},mtWM:function(t,e,n){t.exports=n("49fU")(144)},v5o6:function(t,e,n){t.exports=n("49fU")(365)}},[0]);