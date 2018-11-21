var tns=function(){var t=window,Di=t.requestAnimationFrame||t.webkitRequestAnimationFrame||t.mozRequestAnimationFrame||t.msRequestAnimationFrame||function(t){return setTimeout(t,16)},e=window,Oi=e.cancelAnimationFrame||e.mozCancelAnimationFrame||function(t){clearTimeout(t)};function Ii(){for(var t,e,n,i=arguments[0]||{},a=1,r=arguments.length;a<r;a++)if(null!==(t=arguments[a]))for(e in t)i!==(n=t[e])&&void 0!==n&&(i[e]=n);return i}function Pi(t){return 0<=["true","false"].indexOf(t)?JSON.parse(t):t}function Hi(t,e,n,i){if(i)try{t.setItem(e,n)}catch(t){}return n}function Ri(){var t=document,e=t.body;return e||((e=t.createElement("body")).fake=!0),e}var n=document.documentElement;function Wi(t){var e="";return t.fake&&(e=n.style.overflow,t.style.background="",t.style.overflow=n.style.overflow="hidden",n.appendChild(t)),e}function zi(t,e){t.fake&&(t.remove(),n.style.overflow=e,n.offsetHeight)}function qi(t,e,n,i){"insertRule"in t?t.insertRule(e+"{"+n+"}",i):t.addRule(e,n,i)}function ji(t){return("insertRule"in t?t.cssRules:t.rules).length}function Fi(t,e,n){for(var i=0,a=t.length;i<a;i++)e.call(n,t[i],i)}var i="classList"in document.createElement("_"),Qi=i?function(t,e){return t.classList.contains(e)}:function(t,e){return 0<=t.className.indexOf(e)},Vi=i?function(t,e){Qi(t,e)||t.classList.add(e)}:function(t,e){Qi(t,e)||(t.className+=" "+e)},Xi=i?function(t,e){Qi(t,e)&&t.classList.remove(e)}:function(t,e){Qi(t,e)&&(t.className=t.className.replace(e,""))};function Yi(t,e){return t.hasAttribute(e)}function Ki(t,e){return t.getAttribute(e)}function r(t){return void 0!==t.item}function Ui(t,e){if(t=r(t)||t instanceof Array?t:[t],"[object Object]"===Object.prototype.toString.call(e))for(var n=t.length;n--;)for(var i in e)t[n].setAttribute(i,e[i])}function Gi(t,e){t=r(t)||t instanceof Array?t:[t];for(var n=(e=e instanceof Array?e:[e]).length,i=t.length;i--;)for(var a=n;a--;)t[i].removeAttribute(e[a])}function Ji(t){for(var e=[],n=0,i=t.length;n<i;n++)e.push(t[n]);return e}function _i(t,e){"none"!==t.style.display&&(t.style.display="none")}function Zi(t,e){"none"===t.style.display&&(t.style.display="")}function $i(t){return"none"!==window.getComputedStyle(t).display}function ta(e){if("string"==typeof e){var n=[e],i=e.charAt(0).toUpperCase()+e.substr(1);["Webkit","Moz","ms","O"].forEach(function(t){"ms"===t&&"transform"!==e||n.push(t+i)}),e=n}for(var t=document.createElement("fakeelement"),a=(e.length,0);a<e.length;a++){var r=e[a];if(void 0!==t.style[r])return r}return!1}function ea(t,e){var n=!1;return/^Webkit/.test(t)?n="webkit"+e+"End":/^O/.test(t)?n="o"+e+"End":t&&(n=e.toLowerCase()+"end"),n}function na(t,e){for(var n in e)t.addEventListener(n,e[n],!1)}var a=!1;try{var o=Object.defineProperty({},"passive",{get:function(){a=!0}});window.addEventListener("test",null,o)}catch(t){}var u=!!a&&{passive:!0};function ia(t,e){for(var n in e){var i=0<=["touchstart","touchmove"].indexOf(n)&&u;t.removeEventListener(n,e[n],i)}}function aa(){return{topics:{},on:function(t,e){this.topics[t]=this.topics[t]||[],this.topics[t].push(e)},off:function(t,e){if(this.topics[t])for(var n=0;n<this.topics[t].length;n++)if(this.topics[t][n]===e){this.topics[t].splice(n,1);break}},emit:function(e,n){n.type=e,this.topics[e]&&this.topics[e].forEach(function(t){t(n,e)})}}}Object.keys||(Object.keys=function(t){var e=[];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&e.push(n);return e}),"remove"in Element.prototype||(Element.prototype.remove=function(){this.parentNode&&this.parentNode.removeChild(this)});var ra=function(m){m=Ii({container:".slider",mode:"carousel",axis:"horizontal",items:1,gutter:0,edgePadding:0,fixedWidth:!1,autoWidth:!1,viewportMax:!1,slideBy:1,controls:!0,controlsPosition:"top",controlsText:["prev","next"],controlsContainer:!1,prevButton:!1,nextButton:!1,nav:!0,navPosition:"top",navContainer:!1,navAsThumbnails:!1,arrowKeys:!1,speed:300,autoplay:!1,autoplayPosition:"top",autoplayTimeout:5e3,autoplayDirection:"forward",autoplayText:["start","stop"],autoplayHoverPause:!1,autoplayButton:!1,autoplayButtonOutput:!0,autoplayResetOnVisibility:!0,animateIn:"tns-fadeIn",animateOut:"tns-fadeOut",animateNormal:"tns-normal",animateDelay:!1,loop:!0,rewind:!1,autoHeight:!1,responsive:!1,lazyload:!1,lazyloadSelector:".tns-lazy-img",touch:!0,mouseDrag:!1,swipeAngle:15,nested:!1,preventActionWhenRunning:!1,preventScrollOnTouch:"auto",freezable:!0,onInit:!1,useLocalStorage:!0},m||{});var L=document,h=window,u=13,s=32,l=33,c=34,f=35,d=36,v=37,p=38,y=39,g=40,e={},n=m.useLocalStorage;if(n){var t=navigator.userAgent,i=new Date;try{(e=h.localStorage)?(e.setItem(i,i),n=e.getItem(i)==i,e.removeItem(i)):n=!1,n||(e={})}catch(t){n=!1}n&&(e.tnsApp&&e.tnsApp!==t&&["tC","tPL","tMQ","tTf","t3D","tTDu","tTDe","tADu","tADe","tTE","tAE"].forEach(function(t){e.removeItem(t)}),localStorage.tnsApp=t)}var a,r,o,x,b,w,C,A=e.tC?Pi(e.tC):Hi(e,"tC",function(){var t=document,e=Ri(),n=Wi(e),i=t.createElement("div"),a=!1;e.appendChild(i);try{for(var r,o="(10px * 10)",u=["calc"+o,"-moz-calc"+o,"-webkit-calc"+o],s=0;s<3;s++)if(r=u[s],i.style.width=r,100===i.offsetWidth){a=r.replace(o,"");break}}catch(t){}return e.fake?zi(e,n):i.remove(),a}(),n),M=e.tPL?Pi(e.tPL):Hi(e,"tPL",function(){var t,e=document,n=Ri(),i=Wi(n),a=e.createElement("div"),r=e.createElement("div"),o="";a.className="tns-t-subp2",r.className="tns-t-ct";for(var u=0;u<70;u++)o+="<div></div>";return r.innerHTML=o,a.appendChild(r),n.appendChild(a),t=Math.abs(a.getBoundingClientRect().left-r.children[67].getBoundingClientRect().left)<2,n.fake?zi(n,i):a.remove(),t}(),n),S=e.tMQ?Pi(e.tMQ):Hi(e,"tMQ",(r=document,o=Ri(),x=Wi(o),b=r.createElement("div"),w=r.createElement("style"),C="@media all and (min-width:1px){.tns-mq-test{position:absolute}}",w.type="text/css",b.className="tns-mq-test",o.appendChild(w),o.appendChild(b),w.styleSheet?w.styleSheet.cssText=C:w.appendChild(r.createTextNode(C)),a=window.getComputedStyle?window.getComputedStyle(b).position:b.currentStyle.position,o.fake?zi(o,x):b.remove(),"absolute"===a),n),T=e.tTf?Pi(e.tTf):Hi(e,"tTf",ta("transform"),n),E=e.t3D?Pi(e.t3D):Hi(e,"t3D",function(t){if(!t)return!1;if(!window.getComputedStyle)return!1;var e,n=document,i=Ri(),a=Wi(i),r=n.createElement("p"),o=9<t.length?"-"+t.slice(0,-9).toLowerCase()+"-":"";return o+="transform",i.insertBefore(r,null),r.style[t]="translate3d(1px,1px,1px)",e=window.getComputedStyle(r).getPropertyValue(o),i.fake?zi(i,a):r.remove(),void 0!==e&&0<e.length&&"none"!==e}(T),n),B=e.tTDu?Pi(e.tTDu):Hi(e,"tTDu",ta("transitionDuration"),n),k=e.tTDe?Pi(e.tTDe):Hi(e,"tTDe",ta("transitionDelay"),n),N=e.tADu?Pi(e.tADu):Hi(e,"tADu",ta("animationDuration"),n),D=e.tADe?Pi(e.tADe):Hi(e,"tADe",ta("animationDelay"),n),O=e.tTE?Pi(e.tTE):Hi(e,"tTE",ea(B,"Transition"),n),I=e.tAE?Pi(e.tAE):Hi(e,"tAE",ea(N,"Animation"),n),P=h.console&&"function"==typeof h.console.warn,H=["container","controlsContainer","prevButton","nextButton","navContainer","autoplayButton"],R={};if(H.forEach(function(t){if("string"==typeof m[t]){var e=m[t],n=L.querySelector(e);if(R[t]=e,!n||!n.nodeName)return void(P&&console.warn("Can't find",m[t]));m[t]=n}}),!(m.container.children.length<1)){var W=m.responsive,z=m.nested,q="carousel"===m.mode;if(W){0 in W&&(m=Ii(m,W[0]),delete W[0]);var j={};for(var F in W){var Q=W[F];Q="number"==typeof Q?{items:Q}:Q,j[F]=Q}W=j,j=null}if(q&&"outer"!==z||function t(e){for(var n in e)q||("slideBy"===n&&(e[n]="page"),"edgePadding"===n&&(e[n]=!1),"autoHeight"===n&&(e[n]=!1)),"outer"===z&&"autoHeight"===n&&(e[n]=!0),"responsive"===n&&t(e[n])}(m),!q){m.axis="horizontal",m.slideBy="page",m.edgePadding=!1;var V=m.animateIn,X=m.animateOut,Y=m.animateDelay,K=m.animateNormal}var U,G="horizontal"===m.axis,J=L.createElement("div"),_=L.createElement("div"),Z=m.container,$=Z.parentNode,tt=Z.outerHTML,et=Z.children,nt=et.length,it=mn(),at=!1;W&&In();var rt,ot,ut,st,lt,ct,ft,dt=m.autoWidth,vt=gn("fixedWidth"),pt=gn("edgePadding"),mt=gn("gutter"),ht=hn(),yt=dt?1:Math.floor(gn("items")),gt=gn("slideBy"),xt=m.viewportMax||m.fixedWidthViewportWidth,bt=gn("arrowKeys"),wt=gn("speed"),Ct=m.rewind,At=!Ct&&m.loop,Mt=gn("autoHeight"),Tt=gn("controls"),Et=gn("controlsText"),Bt=gn("nav"),kt=gn("touch"),Nt=gn("mouseDrag"),Lt=gn("autoplay"),St=gn("autoplayTimeout"),Dt=gn("autoplayText"),Ot=gn("autoplayHoverPause"),It=gn("autoplayResetOnVisibility"),Pt=(ft=document.createElement("style"),ct&&ft.setAttribute("media",ct),document.querySelector("head").appendChild(ft),ft.sheet?ft.sheet:ft.styleSheet),Ht=m.lazyload,Rt=m.lazyloadSelector,Wt=[],zt=At?(st=function(){{if(dt||vt&&!xt)return nt-1;var t=vt?"fixedWidth":"items",e=[];if((vt||m[t]<nt)&&e.push(m[t]),W)for(var n in W){var i=W[n][t];i&&(vt||i<nt)&&e.push(i)}return e.length||e.push(0),Math.ceil(vt?xt/Math.min.apply(null,e):Math.max.apply(null,e))}}(),lt=q?Math.ceil((5*st-nt)/2):4*st-nt,lt=Math.max(st,lt),yn("edgePadding")?lt+1:lt):0,qt=q?nt+2*zt:nt+zt,jt=!(!vt&&!dt||At),Ft=vt?ai():null,Qt=!q||!At,Vt=G?"left":"top",Xt="",Yt="",Kt=vt?function(){return Math.ceil(-Ft/(vt+mt))}:dt?function(){for(var t=qt,e=t-1;t--;)rt[t]>-Ft&&(e=t);return e}:function(){return At||q?Math.max(0,qt-Math.ceil(yt)):qt-1},Ut=vn(gn("startIndex")),Gt=Ut,Jt=(dn(),0),_t=dt?null:Kt(),Zt=m.preventActionWhenRunning,$t=m.swipeAngle,te=!$t||"?",ee=!1,ne=m.onInit,ie=new aa,ae=" tns-slider tns-"+m.mode,re=Z.id||(ut=window.tnsId,window.tnsId=ut?ut+1:1,"tns"+window.tnsId),oe=gn("disable"),ue=!1,se=m.freezable,le=!(!se||dt)&&On(),ce=!1,fe={click:vi,keydown:function(t){switch((t=wi(t)).keyCode){case v:case p:case l:De.disabled||vi(t,-1);break;case y:case g:case c:Oe.disabled||vi(t,1);break;case d:di("first",t);break;case f:di("last",t)}}},de={click:function(t){if(ee){if(Zt)return;fi()}var e,n=(t=wi(t)).target||t.srcElement;for(;n!==Re&&!Yi(n,"data-nav");)n=n.parentNode;Yi(n,"data-nav")&&(di(e=je=[].indexOf.call(He,n),t),Fe===e&&(Ue&&gi(),je=-1))},keydown:function(t){var e=L.activeElement;if(!Yi(e,"data-nav"))return;var n=(t=wi(t)).keyCode,i=[].indexOf.call(He,e),a=ze.length,r=ze.indexOf(i);m.navContainer&&(a=nt,r=i);function o(t){return m.navContainer?t:ze[t]}switch(n){case v:case l:0<r&&bi(He[o(r-1)]);break;case p:case d:0<r&&bi(He[o(0)]);break;case y:case c:r<a-1&&bi(He[o(r+1)]);break;case g:case f:r<a-1&&bi(He[o(a-1)]);break;case u:case s:di(je=i,t)}}},ve={mouseover:function(){Ue&&(mi(),Ge=!0)},mouseout:function(){Ge&&(pi(),Ge=!1)}},pe={visibilitychange:function(){L.hidden?Ue&&(mi(),_e=!0):_e&&(pi(),_e=!1)}},me={keydown:function(t){switch((t=wi(t)).keyCode){case v:vi(t,-1);break;case y:vi(t,1)}}},he={touchstart:Ei,touchmove:Bi,touchend:ki,touchcancel:ki},ye={mousedown:Ei,mousemove:Bi,mouseup:ki,mouseleave:ki},ge=yn("controls"),xe=yn("nav"),be=!!dt||m.navAsThumbnails,we=yn("autoplay"),Ce=yn("touch"),Ae=yn("mouseDrag"),Me="tns-slide-active",Te="tns-complete",Ee={load:function(t){qn(Ci(t))},error:function(t){jn(Ci(t))}},Be="force"===m.preventScrollOnTouch;if(ge)var ke,Ne,Le=m.controlsContainer,Se=m.controlsContainer?m.controlsContainer.outerHTML:"",De=m.prevButton,Oe=m.nextButton,Ie=m.prevButton?m.prevButton.outerHTML:"",Pe=m.nextButton?m.nextButton.outerHTML:"";if(xe)var He,Re=m.navContainer,We=m.navContainer?m.navContainer.outerHTML:"",ze=[],qe=ze,je=-1,Fe=pn(),Qe=Fe,Ve="tns-nav-active",Xe="Carousel Page ",Ye=" (Current Slide)";if(we)var Ke,Ue,Ge,Je,_e,Ze="forward"===m.autoplayDirection?1:-1,$e=m.autoplayButton,tn=m.autoplayButton?m.autoplayButton.outerHTML:"",en=["<span class='tns-visually-hidden'>"," animation</span>"];if(Ce||Ae)var nn,an,rn={},on={},un=!1,sn=G?function(t,e){return t.x-e.x}:function(t,e){return t.y-e.y};dt||fn(oe||le),T&&(Vt=T,Xt="translate",E?(Xt+=G?"3d(":"3d(0px, ",Yt=G?", 0px, 0px)":", 0px)"):(Xt+=G?"X(":"Y(",Yt=")")),function(){W&&In();!function(){yn("gutter");J.className="tns-outer",_.className="tns-inner",J.id=re+"-ow",_.id=re+"-iw",Mt&&(_.className+=" tns-ah");""===Z.id&&(Z.id=re);ae+=M||dt?" tns-subpixel":" tns-no-subpixel",ae+=A?" tns-calc":" tns-no-calc",dt&&(ae+=" tns-autowidth");if(ae+=" tns-"+m.axis,Z.className+=ae,q){var t=L.createElement("div");t.className="tns-ovh",J.appendChild(t),t.appendChild(_)}else J.appendChild(_);$.insertBefore(J,Z),_.appendChild(Z)}();for(var t=0;t<nt;t++){var e=et[t];e.id||(e.id=re+"-item"+t),Vi(e,"tns-item"),!q&&K&&Vi(e,K),Ui(e,{"aria-hidden":"true",tabindex:"-1"})}if(zt){for(var n=L.createDocumentFragment(),i=L.createDocumentFragment(),a=zt;a--;){var r=a%nt,o=et[r].cloneNode(!0);if(Gi(o,"id"),i.insertBefore(o,i.firstChild),q){var u=et[nt-1-r].cloneNode(!0);Gi(u,"id"),n.appendChild(u)}}Z.insertBefore(n,Z.firstChild),Z.appendChild(i),et=Z.children}(function(){for(var t=Ut,e=Ut+Math.min(nt,yt);t<e;t++){var n=et[t];Ui(n,{"aria-hidden":"false"}),Gi(n,["tabindex"]),Vi(n,Me),q||(n.style.left=100*(t-Ut)/yt+"%",Vi(n,V),Xi(n,K))}G&&(M||dt?(qi(Pt,"#"+re+" > .tns-item","font-size:"+h.getComputedStyle(et[0]).fontSize+";",ji(Pt)),qi(Pt,"#"+re,"font-size:0;",ji(Pt))):q&&Fi(et,function(t,e){var n;t.style.marginLeft=(n=e,A?A+"("+100*n+"% / "+qt+")":100*n/qt+"%")}));if(S){var i=xn(m.edgePadding,m.gutter,m.fixedWidth,m.speed,m.autoHeight);qi(Pt,"#"+re+"-iw",i,ji(Pt)),q&&(i=G&&!dt?"width:"+bn(m.fixedWidth,m.gutter,m.items)+";":"",B&&(i+=Mn(wt)),qi(Pt,"#"+re,i,ji(Pt))),i=G&&!dt?wn(m.fixedWidth,m.gutter,m.items):"",m.gutter&&(i+=Cn(m.gutter)),q||(B&&(i+=Mn(wt)),N&&(i+=Tn(wt))),i&&qi(Pt,"#"+re+" > .tns-item",i,ji(Pt))}else{_.style.cssText=xn(pt,mt,vt,Mt),q&&G&&!dt&&(Z.style.width=bn(vt,mt,yt));var i=G&&!dt?wn(vt,mt,yt):"";mt&&(i+=Cn(mt)),i&&qi(Pt,"#"+re+" > .tns-item",i,ji(Pt))}if(W&&S)for(var a in W){a=parseInt(a);var r=W[a],i="",o="",u="",s="",l=dt?null:gn("items",a),c=gn("fixedWidth",a),f=gn("speed",a),d=gn("edgePadding",a),v=gn("autoHeight",a),p=gn("gutter",a);("edgePadding"in r||"gutter"in r)&&(o="#"+re+"-iw{"+xn(d,p,c,f,v)+"}"),q&&G&&!dt&&("fixedWidth"in r||"items"in r||vt&&"gutter"in r)&&(u="width:"+bn(c,p,l)+";"),B&&"speed"in r&&(u+=Mn(f)),u&&(u="#"+re+"{"+u+"}"),("fixedWidth"in r||vt&&"gutter"in r||!q&&"items"in r)&&(s+=wn(c,p,l)),"gutter"in r&&(s+=Cn(p)),!q&&"speed"in r&&(B&&(s+=Mn(f)),N&&(s+=Tn(f))),s&&(s="#"+re+" > .tns-item{"+s+"}"),(i=o+u+s)&&Pt.insertRule("@media (min-width: "+a/16+"em) {"+i+"}",Pt.cssRules.length)}})(),En()}();var ln=At?q?function(){var t=Jt,e=_t;t+=gt,e-=gt,pt?(t+=1,e-=1):vt&&ht%(vt+mt)&&(e-=1),zt&&(e<Ut?Ut-=nt:Ut<t&&(Ut+=nt))}:function(){if(_t<Ut)for(;Jt+nt<=Ut;)Ut-=nt;else if(Ut<Jt)for(;Ut<=_t-nt;)Ut+=nt}:function(){Ut=Math.max(Jt,Math.min(_t,Ut))},cn=q?function(){var e,n,i,a,t,r,o,u,s,l,c;ni(Z,""),B||!wt?(ui(),wt&&$i(Z)||fi()):(e=Z,n=Vt,i=Xt,a=Yt,t=ri(),r=wt,o=fi,u=Math.min(r,10),s=0<=t.indexOf("%")?"%":"px",t=t.replace(s,""),l=Number(e.style[n].replace(i,"").replace(a,"").replace(s,"")),c=(t-l)/r*u,setTimeout(function t(){r-=u,l+=c,e.style[n]=i+l+s+a,0<r?setTimeout(t,u):o()},u)),G||Ni()}:function(){Wt=[];var t={};t[O]=t[I]=fi,ia(et[Gt],t),na(et[Ut],t),si(Gt,V,X,!0),si(Ut,K,V),O&&I&&wt&&$i(Z)||fi()};return{version:"2.8.8",getInfo:Si,events:ie,goTo:di,play:function(){Lt&&!Ue&&(yi(),Je=!1)},pause:function(){Ue&&(gi(),Je=!0)},isOn:at,updateSliderHeight:Gn,refresh:En,destroy:function(){if(Pt.disabled=!0,Pt.ownerNode&&Pt.ownerNode.remove(),ia(h,{resize:Sn}),bt&&ia(L,me),Le&&ia(Le,fe),Re&&ia(Re,de),ia(Z,ve),ia(Z,pe),$e&&ia($e,{click:xi}),Lt&&clearInterval(Ke),q&&O){var t={};t[O]=fi,ia(Z,t)}kt&&ia(Z,he),Nt&&ia(Z,ye);var r=[tt,Se,Ie,Pe,We,tn];for(var e in H.forEach(function(t,e){var n="container"===t?J:m[t];if("object"==typeof n){var i=!!n.previousElementSibling&&n.previousElementSibling,a=n.parentNode;n.outerHTML=r[e],m[t]=i?i.nextElementSibling:a.firstElementChild}}),H=V=X=Y=K=G=J=_=Z=$=tt=et=nt=U=it=dt=vt=pt=mt=ht=yt=gt=xt=bt=wt=Ct=At=Mt=Pt=Ht=rt=Wt=zt=qt=jt=Ft=Qt=Vt=Xt=Yt=Kt=Ut=Gt=Jt=_t=$t=te=ee=ne=ie=ae=re=oe=ue=se=le=ce=fe=de=ve=pe=me=he=ye=ge=xe=be=we=Ce=Ae=Me=Te=Ee=ot=Tt=Et=Le=Se=De=Oe=ke=Ne=Bt=Re=We=He=ze=qe=je=Fe=Qe=Ve=Xe=Ye=Lt=St=Ze=Dt=Ot=$e=tn=It=en=Ke=Ue=Ge=Je=_e=rn=on=nn=un=an=sn=kt=Nt=null,this)"rebuild"!==e&&(this[e]=null);at=!1},rebuild:function(){return ra(Ii(m,R))}}}function fn(t){t&&(Tt=Bt=kt=Nt=bt=Lt=Ot=It=!1)}function dn(){for(var t=q?Ut-zt:Ut;t<0;)t+=nt;return t%nt+1}function vn(t){return t=t?Math.max(0,Math.min(At?nt-1:nt-yt,t)):0,q?t+zt:t}function pn(t){for(null==t&&(t=Ut),q&&(t-=zt);t<0;)t+=nt;return Math.floor(t%nt)}function mn(){return h.innerWidth||L.documentElement.clientWidth||L.body.clientWidth}function hn(){return function t(e){var n,i=L.createElement("div");return e.appendChild(i),n=i.offsetWidth,i.remove(),n||t(e.parentNode)}($)-(2*pt-mt)}function yn(t){if(m[t])return!0;if(W)for(var e in W)if(W[e][t])return!0;return!1}function gn(t,e){if(null==e&&(e=it),"items"===t&&vt)return Math.floor(ht/(vt+mt))||1;var n=m[t];if(W)for(var i in W)e>=parseInt(i)&&t in W[i]&&(n=W[i][t]);return"slideBy"===t&&"page"===n&&(n=gn("items")),q||"slideBy"!==t&&"items"!==t||(n=Math.floor(n)),n}function xn(t,e,n,i,a){var r="";if(void 0!==t){var o=t;e&&(o-=e),r=G?"margin: 0 "+o+"px 0 "+t+"px;":"margin: "+t+"px 0 "+o+"px 0;"}else if(e&&!n){var u="-"+e+"px";r="margin: 0 "+(G?u+" 0 0":"0 "+u+" 0")+";"}return a&&B&&i&&(r+=Mn(i)),r}function bn(t,e,n){return t?(t+e)*qt+"px":A?A+"("+100*qt+"% / "+n+")":100*qt/n+"%"}function wn(t,e,n){var i;if(t)i=t+e+"px";else{q||(n=Math.floor(n));var a=q?qt:n;i=A?A+"(100% / "+a+")":100/a+"%"}return i="width:"+i,"inner"!==z?i+";":i+" !important;"}function Cn(t){var e="";!1!==t&&(e=(G?"padding-":"margin-")+(G?"right":"bottom")+": "+t+"px;");return e}function An(t,e){var n=t.substring(0,t.length-e).toLowerCase();return n&&(n="-"+n+"-"),n}function Mn(t){return An(B,18)+"transition-duration:"+t/1e3+"s;"}function Tn(t){return An(N,17)+"animation-duration:"+t/1e3+"s;"}function En(){if(yn("autoHeight")||dt||!G){var t=Z.querySelectorAll("img");Fi(t,function(t){var e=t.src;e.indexOf("data:image")<0?(na(t,Ee),t.src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==",t.src=e,Vi(t,"loading"),Qn(t)):Ht||qn(t)}),Di(function(){Yn(Ji(t),function(){ot=!0})}),!dt&&G&&(t=Vn(Ut,yt)),Ht?Bn():Di(function(){Yn(Ji(t),Bn)})}else q&&oi(),Nn(),Ln()}function Bn(){if(dt){var e=At?Ut:nt-1;!function t(){et[e-1].getBoundingClientRect().right.toFixed(2)===et[e].getBoundingClientRect().left.toFixed(2)?kn():setTimeout(function(){t()},16)}()}else kn()}function kn(){G&&!dt||(Jn(),dt?(Ft=ai(),se&&(le=On()),_t=Kt(),fn(oe||le)):Ni()),q&&oi(),Nn(),Ln()}function Nn(){if(we){var t=Lt?"stop":"start";$e?Ui($e,{"data-action":t}):m.autoplayButtonOutput&&(J.insertAdjacentHTML("top"!==m.autoplayPosition?"beforeend":"afterbegin",'<button data-action="'+t+'" type="button">'+en[0]+t+en[1]+Dt[0]+"</button>"),$e=J.querySelector("[data-action]")),$e&&na($e,{click:xi}),Lt&&(yi(),Ot&&na(Z,ve),It&&na(Z,pe))}if(xe){var n=q?zt:0;if(Re)Ui(Re,{"aria-label":"Carousel Pagination"}),Fi(He=Re.children,function(t,e){Ui(t,{"data-nav":e,tabindex:"-1","aria-controls":et[n+e].id,"aria-label":Xe+(e+1)})});else{for(var e="",i=be?"":'style="display:none"',a=0;a<nt;a++)e+='<button data-nav="'+a+'" tabindex="-1" aria-controls="'+et[n+a].id+'" '+i+' type="button" aria-label="'+Xe+(a+1)+'"></button>';e='<div class="tns-nav" aria-label="Carousel Pagination">'+e+"</div>",J.insertAdjacentHTML("top"!==m.navPosition?"beforeend":"afterbegin",e),Re=J.querySelector(".tns-nav"),He=Re.children}if(Li(),B){var r=B.substring(0,B.length-18).toLowerCase(),o="transition: all "+wt/1e3+"s";r&&(o="-"+r+"-"+o),qi(Pt,"[aria-controls^="+re+"-item]",o,ji(Pt))}Ui(He[Fe],{tabindex:"0","aria-label":Xe+(Fe+1)+Ye}),Vi(He[Fe],Ve),na(Re,de)}ge&&(Le||De&&Oe||(J.insertAdjacentHTML("top"!==m.controlsPosition?"beforeend":"afterbegin",'<div class="tns-controls" aria-label="Carousel Navigation" tabindex="0"><button data-controls="prev" tabindex="-1" aria-controls="'+re+'" type="button">'+Et[0]+'</button><button data-controls="next" tabindex="-1" aria-controls="'+re+'" type="button">'+Et[1]+"</button></div>"),Le=J.querySelector(".tns-controls")),De&&Oe||(De=Le.children[0],Oe=Le.children[1]),m.controlsContainer&&Ui(Le,{"aria-label":"Carousel Navigation",tabindex:"0"}),(m.controlsContainer||m.prevButton&&m.nextButton)&&Ui([De,Oe],{"aria-controls":re,tabindex:"-1"}),(m.controlsContainer||m.prevButton&&m.nextButton)&&(Ui(De,{"data-controls":"prev"}),Ui(Oe,{"data-controls":"next"})),ke=Zn(De),Ne=Zn(Oe),ei(),Le?na(Le,fe):(na(De,fe),na(Oe,fe))),Pn()}function Ln(){if(q&&O){var t={};t[O]=fi,na(Z,t)}kt&&na(Z,he),Nt&&na(Z,ye),bt&&na(L,me),"inner"===z?ie.on("outerResized",function(){Dn(),ie.emit("innerLoaded",Si())}):(W||vt||dt||Mt||!G)&&na(h,{resize:Sn}),"outer"===z?ie.on("innerLoaded",Xn):Mt&&!oe&&Xn(),zn(),oe?Wn():le&&Rn(),ie.on("indexChanged",Kn),"inner"===z&&ie.emit("innerLoaded",Si()),"function"==typeof ne&&ne(Si()),at=!0}function Sn(t){Di(function(){Dn(wi(t))})}function Dn(t){if(at){"outer"===z&&ie.emit("outerResized",Si(t)),it=mn();var e,n=U,i=!1;W&&(In(),(e=n!==U)&&ie.emit("newBreakpointStart",Si(t)));var a,r,o,u,s=yt,l=oe,c=le,f=bt,d=Tt,v=Bt,p=kt,m=Nt,h=Lt,y=Ot,g=It,x=Ut;if(e){var b=vt,w=Mt,C=Et,A=Dt;if(!S)var M=mt,T=pt}if(bt=gn("arrowKeys"),Tt=gn("controls"),Bt=gn("nav"),kt=gn("touch"),Nt=gn("mouseDrag"),Lt=gn("autoplay"),Ot=gn("autoplayHoverPause"),It=gn("autoplayResetOnVisibility"),e&&(oe=gn("disable"),vt=gn("fixedWidth"),wt=gn("speed"),Mt=gn("autoHeight"),Et=gn("controlsText"),Dt=gn("autoplayText"),St=gn("autoplayTimeout"),S||(pt=gn("edgePadding"),mt=gn("gutter"))),fn(oe),ht=hn(),G&&!dt||oe||(Jn(),G||(Ni(),i=!0)),(vt||dt)&&(Ft=ai(),_t=Kt()),(e||vt)&&(yt=gn("items"),gt=gn("slideBy"),(r=yt!==s)&&(vt||dt||(_t=Kt()),ln())),e&&oe!==l&&(oe?Wn():function(){if(!ue)return;if(Pt.disabled=!1,Z.className+=ae,oi(),At)for(var t=zt;t--;)q&&Zi(et[t]),Zi(et[qt-t-1]);if(!q)for(var e=Ut,n=Ut+nt;e<n;e++){var i=et[e],a=e<Ut+yt?V:K;i.style.left=100*(e-Ut)/yt+"%",Vi(i,a)}Hn(),ue=!1}()),se&&(e||vt||dt)&&(le=On())!==c&&(le?(ui(ri(vn(0))),Rn()):(!function(){if(!ce)return;pt&&S&&(_.style.margin="");if(zt)for(var t="tns-transparent",e=zt;e--;)q&&Xi(et[e],t),Xi(et[qt-e-1],t);Hn(),ce=!1}(),i=!0)),fn(oe||le),Lt||(Ot=It=!1),bt!==f&&(bt?na(L,me):ia(L,me)),Tt!==d&&(Tt?Le?Zi(Le):(De&&Zi(De),Oe&&Zi(Oe)):Le?_i(Le):(De&&_i(De),Oe&&_i(Oe))),Bt!==v&&(Bt?(Zi(Re),Li()):_i(Re)),kt!==p&&(kt?na(Z,he):ia(Z,he)),Nt!==m&&(Nt?na(Z,ye):ia(Z,ye)),Lt!==h&&(Lt?($e&&Zi($e),Ue||Je||yi()):($e&&_i($e),Ue&&gi())),Ot!==y&&(Ot?na(Z,ve):ia(Z,ve)),It!==g&&(It?na(L,pe):ia(L,pe)),e&&(vt!==b&&(i=!0),Mt!==w&&(Mt||(_.style.height="")),Tt&&Et!==C&&(De.innerHTML=Et[0],Oe.innerHTML=Et[1]),$e&&Dt!==A)){var E=Lt?1:0,B=$e.innerHTML,k=B.length-A[E].length;B.substring(k)===A[E]&&($e.innerHTML=B.substring(0,k)+Dt[E])}if((a=Ut!==x)&&(ie.emit("indexChanged",Si()),i=!0),r&&(a||Kn(),q||function(){for(var t=Ut+Math.min(nt,yt),e=qt;e--;){var n=et[e];Ut<=e&&e<t?(Vi(n,"tns-moving"),n.style.left=100*(e-Ut)/yt+"%",Vi(n,V),Xi(n,K)):n.style.left&&(n.style.left="",Vi(n,K),Xi(n,V)),Xi(n,X)}setTimeout(function(){Fi(et,function(t){Xi(t,"tns-moving")})},300)}()),!oe&&!le){if(e&&!S&&(pt===T&&mt===M||(_.style.cssText=xn(pt,mt,vt,wt,Mt)),G)){q&&(Z.style.width=bn(vt,mt,yt));var N=wn(vt,mt,yt)+Cn(mt);u=ji(o=Pt)-1,"deleteRule"in o?o.deleteRule(u):o.removeRule(u),qi(Pt,"#"+re+" > .tns-item",N,ji(Pt))}Mt&&Xn(),i&&(oi(),Gt=Ut)}e&&ie.emit("newBreakpointEnd",Si(t))}}function On(){return vt||dt?vt?(vt+mt)*nt<=ht+2*pt:(At?rt[nt]:ii())<=ht+2*pt:nt<=yt}function In(){for(var t in U=0,W)(t=parseInt(t))<=it&&(U=t)}function Pn(){!Lt&&$e&&_i($e),!Bt&&Re&&_i(Re),Tt||(Le?_i(Le):(De&&_i(De),Oe&&_i(Oe)))}function Hn(){Lt&&$e&&Zi($e),Bt&&Re&&Zi(Re),Tt&&(Le?Zi(Le):(De&&Zi(De),Oe&&Zi(Oe)))}function Rn(){if(!ce){if(pt&&(_.style.margin="0px"),zt)for(var t="tns-transparent",e=zt;e--;)q&&Vi(et[e],t),Vi(et[qt-e-1],t);Pn(),ce=!0}}function Wn(){if(!ue){if(Pt.disabled=!0,Z.className=Z.className.replace(ae.substring(1),""),Gi(Z,["style"]),At)for(var t=zt;t--;)q&&_i(et[t]),_i(et[qt-t-1]);if(G&&q||Gi(_,["style"]),!q)for(var e=Ut,n=Ut+nt;e<n;e++){var i=et[e];Gi(i,["style"]),Xi(i,V),Xi(i,K)}Pn(),ue=!0}}function zn(){if(Ht&&!oe){var t=Ut;if(dt)for(var e=Ut+1,n=e,i=rt[Ut]+ht+pt-mt;rt[e]<i;)n=++e;else n=Ut+yt;for(pt&&(t-=1,dt||(n+=1)),t=Math.floor(Math.max(t,0)),n=Math.ceil(Math.min(n,qt));t<n;t++)Fi(et[t].querySelectorAll(Rt),function(t){if(!Qi(t,Te)){var e={};e[O]=function(t){t.stopPropagation()},na(t,e),na(t,Ee);var n=Ki(t,"data-srcset");n&&(t.srcset=n),t.src=Ki(t,"data-src"),Vi(t,"loading"),Qn(t)}})}}function qn(t){Vi(t,"loaded"),Fn(t)}function jn(t){Vi(t,"failed"),Fn(t)}function Fn(t){Vi(t,"tns-complete"),Xi(t,"loading"),ia(t,Ee)}function Qn(t){t.complete&&(0!==t.naturalWidth?qn(t):jn(t))}function Vn(t,e){for(var n=[],i=t,a=Math.min(t+e,qt);i<a;i++)Fi(et[i].querySelectorAll("img"),function(t){n.push(t)});return n}function Xn(){var t=Mt?Vn(Ut,yt):Vn(zt,nt);Di(function(){Yn(t,Gn)})}function Yn(n,t){return ot?t():(n.forEach(function(t,e){Qi(t,Te)&&n.splice(e,1)}),n.length?void Di(function(){Yn(n,t)}):t())}function Kn(){zn(),function(){for(var t=Ut+Math.min(nt,yt),e=qt;e--;){var n=et[e];Ut<=e&&e<t?Yi(n,"tabindex")&&(Ui(n,{"aria-hidden":"false"}),Gi(n,["tabindex"]),Vi(n,Me)):(Yi(n,"tabindex")||Ui(n,{"aria-hidden":"true",tabindex:"-1"}),Qi(n,Me)&&Xi(n,Me))}}(),ei(),Li(),function(){if(Bt&&(Fe=0<=je?je:pn(),je=-1,Fe!==Qe)){var t=He[Qe],e=He[Fe];Ui(t,{tabindex:"-1","aria-label":Xe+(Qe+1)}),Ui(e,{tabindex:"0","aria-label":Xe+(Fe+1)+Ye}),Xi(t,Ve),Vi(e,Ve),Qe=Fe}}()}function Un(t,e){for(var n=[],i=t,a=Math.min(t+e,qt);i<a;i++)n.push(et[i].offsetHeight);return Math.max.apply(null,n)}function Gn(){var t=Mt?Un(Ut,yt):Un(zt,nt);_.style.height!==t&&(_.style.height=t+"px")}function Jn(){rt=[0];for(var t,e=G?"left":"top",n=et[0].getBoundingClientRect()[e],i=1;i<qt;i++)t=et[i].getBoundingClientRect()[e],rt.push(t-n)}function _n(t){return t.nodeName.toLowerCase()}function Zn(t){return"button"===_n(t)}function $n(t){return"true"===t.getAttribute("aria-disabled")}function ti(t,e,n){t?e.disabled=n:e.setAttribute("aria-disabled",n.toString())}function ei(){if(Tt&&!Ct&&!At){var t=ke?De.disabled:$n(De),e=Ne?Oe.disabled:$n(Oe),n=Ut<=Jt,i=!Ct&&_t<=Ut;n&&!t&&ti(ke,De,!0),!n&&t&&ti(ke,De,!1),i&&!e&&ti(Ne,Oe,!0),!i&&e&&ti(Ne,Oe,!1)}}function ni(t,e){B&&(t.style[B]=e)}function ii(){return vt?(vt+mt)*qt:rt[qt-1]+et[qt-1].getBoundingClientRect().width}function ai(){var t=ht-(ii()-mt);return pt&&(t+=pt-mt),0<t&&(t=0),t}function ri(t){var e;(null==t&&(t=Ut),G&&!dt)?e=vt?-(vt+mt)*t:100*-t/(T?qt:yt):e=-rt[t];return jt&&(e=Math.max(e,Ft)),e+=!G||dt||vt?"px":"%"}function oi(t){ni(Z,"0s"),ui(t)}function ui(t){null==t&&(t=ri()),Z.style[Vt]=Xt+t+Yt}function si(t,e,n,i){var a=t+yt;At||(a=Math.min(a,qt));for(var r=t;r<a;r++){var o=et[r];i||(o.style.left=100*(r-Ut)/yt+"%"),Y&&k&&(o.style[k]=o.style[D]=Y*(r-t)/1e3+"s"),Xi(o,e),Vi(o,n),i&&Wt.push(o)}}function li(t,e){Qt&&ln(),(Ut!==Gt||e)&&(ie.emit("indexChanged",Si()),ie.emit("transitionStart",Si()),Mt&&Xn(),Ue&&t&&0<=["click","keydown"].indexOf(t.type)&&gi(),ee=!0,cn())}function ci(t){return t.toLowerCase().replace(/-/g,"")}function fi(t){if(q||ee){if(ie.emit("transitionEnd",Si(t)),!q&&0<Wt.length)for(var e=0;e<Wt.length;e++){var n=Wt[e];n.style.left="",D&&k&&(n.style[D]="",n.style[k]=""),Xi(n,X),Vi(n,K)}if(!t||!q&&t.target.parentNode===Z||t.target===Z&&ci(t.propertyName)===ci(Vt)){if(!Qt){var i=Ut;ln(),Ut!==i&&(ie.emit("indexChanged",Si()),oi())}"inner"===z&&ie.emit("innerLoaded",Si()),ee=!1,Gt=Ut}}}function di(t,e){if(!le)if("prev"===t)vi(e,-1);else if("next"===t)vi(e,1);else{if(ee){if(Zt)return;fi()}var n=pn(),i=0;if("first"===t?i=-n:"last"===t?i=q?nt-yt-n:nt-1-n:("number"!=typeof t&&(t=parseInt(t)),isNaN(t)||(e||(t=Math.max(0,Math.min(nt-1,t))),i=t-n)),!q&&i&&Math.abs(i)<yt){var a=0<i?1:-1;i+=Jt<=Ut+i-nt?nt*a:2*nt*a*-1}Ut+=i,q&&At&&(Ut<Jt&&(Ut+=nt),_t<Ut&&(Ut-=nt)),pn(Ut)!==pn(Gt)&&li(e)}}function vi(t,e){if(ee){if(Zt)return;fi()}var n;if(!e){for(var i=(t=wi(t)).target||t.srcElement;i!==Le&&[De,Oe].indexOf(i)<0;)i=i.parentNode;var a=[De,Oe].indexOf(i);0<=a&&(n=!0,e=0===a?-1:1)}if(Ct){if(Ut===Jt&&-1===e)return void di("last",t);if(Ut===_t&&1===e)return void di("first",t)}e&&(Ut+=gt*e,dt&&(Ut=Math.floor(Ut)),li(n||t&&"keydown"===t.type?t:null))}function pi(){Ke=setInterval(function(){vi(null,Ze)},St),Ue=!0}function mi(){clearInterval(Ke),Ue=!1}function hi(t,e){Ui($e,{"data-action":t}),$e.innerHTML=en[0]+t+en[1]+e}function yi(){pi(),$e&&hi("stop",Dt[1])}function gi(){mi(),$e&&hi("start",Dt[0])}function xi(){Ue?(gi(),Je=!0):(yi(),Je=!1)}function bi(t){t.focus()}function wi(t){return Ai(t=t||h.event)?t.changedTouches[0]:t}function Ci(t){return t.target||h.event.srcElement}function Ai(t){return 0<=t.type.indexOf("touch")}function Mi(t){t.preventDefault?t.preventDefault():t.returnValue=!1}function Ti(){return a=on.y-rn.y,r=on.x-rn.x,t=Math.atan2(a,r)*(180/Math.PI),e=$t,n=!1,i=Math.abs(90-Math.abs(t)),90-e<=i?n="horizontal":i<=e&&(n="vertical"),n===m.axis;var t,e,n,i,a,r}function Ei(t){if(ee){if(Zt)return;fi()}Lt&&Ue&&mi(),un=!0,an&&(Oi(an),an=null);var e=wi(t);ie.emit(Ai(t)?"touchStart":"dragStart",Si(t)),!Ai(t)&&0<=["img","a"].indexOf(_n(Ci(t)))&&Mi(t),on.x=rn.x=parseInt(e.clientX),on.y=rn.y=parseInt(e.clientY),q&&(nn=parseFloat(Z.style[Vt].replace(Xt,"").replace(Yt,"")),ni(Z,"0s"))}function Bi(t){if(un){var e=wi(t);on.x=parseInt(e.clientX),on.y=parseInt(e.clientY),q?an||(an=Di(function(){!function t(e){if(!te)return void(un=!1);Oi(an);un&&(an=Di(function(){t(e)}));"?"===te&&(te=Ti());if(te){!Be&&Ai(e)&&(Be=!0);try{e.type&&ie.emit(Ai(e)?"touchMove":"dragMove",Si(e))}catch(t){}var n=nn,i=sn(on,rn);if(!G||vt||dt)n+=i,n+="px";else{var a=T?i*yt*100/(ht*qt):100*i/ht;n+=a,n+="%"}Z.style[Vt]=Xt+n+Yt}}(t)})):("?"===te&&(te=Ti()),te&&(Be=!0)),Be&&t.preventDefault()}}function ki(i){if(un){an&&(Oi(an),an=null),q&&ni(Z,""),un=!1;var t=wi(i);on.x=parseInt(t.clientX),on.y=parseInt(t.clientY);var a=sn(on,rn);if(Math.abs(a)){if(!Ai(i)){var n=Ci(i);na(n,{click:function t(e){Mi(e),ia(n,{click:t})}})}q?an=Di(function(){if(G&&!dt){var t=-a*yt/ht;t=0<a?Math.floor(t):Math.ceil(t),Ut+=t}else{var e=-(nn+a);if(e<=0)Ut=Jt;else if(e>=rt[rt.length-1])Ut=_t;else for(var n=0;n<qt&&e>=rt[n];)e>rt[Ut=n]&&a<0&&(Ut+=1),n++}li(i,a),ie.emit(Ai(i)?"touchEnd":"dragEnd",Si(i))}):te&&vi(i,0<a?-1:1)}}"auto"===m.preventScrollOnTouch&&(Be=!1),$t&&(te="?"),Lt&&!Ue&&pi()}function Ni(){_.style.height=rt[Ut+yt]-rt[Ut]+"px"}function Li(){Bt&&!be&&(!function(){ze=[];for(var t=pn()%yt;t<nt;)q&&!At&&nt<t+yt&&(t=nt-yt),ze.push(t),t+=yt;(At&&ze.length*yt<nt||!At&&0<ze[0])&&ze.unshift(0)}(),ze!==qe&&(Fi(He,function(t,e){ze.indexOf(e)<0?_i(t):Zi(t)}),qe=ze))}function Si(t){return{container:Z,slideItems:et,navContainer:Re,navItems:He,controlsContainer:Le,hasControls:ge,prevButton:De,nextButton:Oe,items:yt,slideBy:gt,cloneCount:zt,slideCount:nt,slideCountNew:qt,index:Ut,indexCached:Gt,displayIndex:dn(),navCurrentIndex:Fe,navCurrentIndexCached:Qe,visibleNavIndexes:ze,visibleNavIndexesCached:qe,sheet:Pt,isOn:at,event:t||{}}}P&&console.warn("No slides found in",m.container)};return ra}();
//# sourceMappingURL=../sourcemaps/tiny-slider.js.map
