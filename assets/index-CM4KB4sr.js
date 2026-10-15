const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["assets/charts-island-dqEHi-fa.js","assets/_commonjsHelpers-Cpj98o6Y.js","assets/charts-island-6d2byHOn.css"])))=>i.map(i=>d[i]);
(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const a of s.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&n(a)}).observe(document,{childList:!0,subtree:!0});function t(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function n(i){if(i.ep)return;i.ep=!0;const s=t(i);fetch(i.href,s)}})();const B_="modulepreload",k_=function(r){return"/"+r},hh={},fp=function(e,t,n){let i=Promise.resolve();if(t&&t.length>0){let c=function(l){return Promise.all(l.map(f=>Promise.resolve(f).then(d=>({status:"fulfilled",value:d}),d=>({status:"rejected",reason:d}))))};document.getElementsByTagName("link");const a=document.querySelector("meta[property=csp-nonce]"),o=a?.nonce||a?.getAttribute("nonce");i=c(t.map(l=>{if(l=k_(l),l in hh)return;hh[l]=!0;const f=l.endsWith(".css"),d=f?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${d}`))return;const h=document.createElement("link");if(h.rel=f?"stylesheet":B_,f||(h.as="script"),h.crossOrigin="",h.href=l,o&&h.setAttribute("nonce",o),document.head.appendChild(h),f)return new Promise((u,g)=>{h.addEventListener("load",u),h.addEventListener("error",()=>g(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(a){const o=new Event("vite:preloadError",{cancelable:!0});if(o.payload=a,window.dispatchEvent(o),!o.defaultPrevented)throw a}return i.then(a=>{for(const o of a||[])o.status==="rejected"&&s(o.reason);return e().catch(s)})};function Oi(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function hp(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var Wn={autoSleep:120,force3D:"auto",nullTargetWarn:1,units:{lineHeight:""}},Oa={duration:.5,overwrite:!1,delay:0},af,sn,Rt,ti=1e8,Mt=1/ti,Bc=Math.PI*2,z_=Bc/4,V_=0,dp=Math.sqrt,G_=Math.cos,H_=Math.sin,nn=function(e){return typeof e=="string"},Ut=function(e){return typeof e=="function"},Yi=function(e){return typeof e=="number"},of=function(e){return typeof e>"u"},Ri=function(e){return typeof e=="object"},wn=function(e){return e!==!1},lf=function(){return typeof window<"u"},so=function(e){return Ut(e)||nn(e)},pp=typeof ArrayBuffer=="function"&&ArrayBuffer.isView||function(){},mn=Array.isArray,W_=/random\([^)]+\)/g,X_=/,\s*/g,dh=/(?:-?\.?\d|\.)+/gi,mp=/[-+=.]*\d+[.e\-+]*\d*[e\-+]*\d*/g,Cs=/[-+=.]*\d+[.e-]*\d*[a-z%]*/g,Nl=/[-+=.]*\d+\.?\d*(?:e-|e\+)?\d*/gi,_p=/[+-]=-?[.\d]+/,Y_=/[^,'"\[\]\s]+/gi,q_=/^[+\-=e\s\d]*\d+[.\d]*([a-z]*|%)\s*$/i,Lt,xi,kc,cf,Yn={},nl={},gp,xp=function(e){return(nl=zs(e,Yn))&&Dn},uf=function(e,t){return console.warn("Invalid property",e,"set to",t,"Missing plugin? gsap.registerPlugin()")},Ba=function(e,t){return!t&&console.warn(e)},vp=function(e,t){return e&&(Yn[e]=t)&&nl&&(nl[e]=t)||Yn},ka=function(){return 0},$_={suppressEvents:!0,isStart:!0,kill:!1},zo={suppressEvents:!0,kill:!1},K_={suppressEvents:!0},ff={},dr=[],zc={},Mp,Fn={},Fl={},ph=30,Vo=[],hf="",df=function(e){var t=e[0],n,i;if(Ri(t)||Ut(t)||(e=[e]),!(n=(t._gsap||{}).harness)){for(i=Vo.length;i--&&!Vo[i].targetTest(t););n=Vo[i]}for(i=e.length;i--;)e[i]&&(e[i]._gsap||(e[i]._gsap=new Gp(e[i],n)))||e.splice(i,1);return e},Vr=function(e){return e._gsap||df(ni(e))[0]._gsap},Sp=function(e,t,n){return(n=e[t])&&Ut(n)?e[t]():of(n)&&e.getAttribute&&e.getAttribute(t)||n},An=function(e,t){return(e=e.split(",")).forEach(t)||e},Bt=function(e){return Math.round(e*1e5)/1e5||0},Dt=function(e){return Math.round(e*1e7)/1e7||0},Ls=function(e,t){var n=t.charAt(0),i=parseFloat(t.substr(2));return e=parseFloat(e),n==="+"?e+i:n==="-"?e-i:n==="*"?e*i:e/i},Z_=function(e,t){for(var n=t.length,i=0;e.indexOf(t[i])<0&&++i<n;);return i<n},il=function(){var e=dr.length,t=dr.slice(0),n,i;for(zc={},dr.length=0,n=0;n<e;n++)i=t[n],i&&i._lazy&&(i.render(i._lazy[0],i._lazy[1],!0)._lazy=0)},pf=function(e){return!!(e._initted||e._startAt||e.add)},yp=function(e,t,n,i){dr.length&&!sn&&il(),e.render(t,n,!!(sn&&t<0&&pf(e))),dr.length&&!sn&&il()},bp=function(e){var t=parseFloat(e);return(t||t===0)&&(e+"").match(Y_).length<2?t:nn(e)?e.trim():e},Tp=function(e){return e},qn=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},J_=function(e){return function(t,n){for(var i in n)i in t||i==="duration"&&e||i==="ease"||(t[i]=n[i])}},zs=function(e,t){for(var n in t)e[n]=t[n];return e},mh=function r(e,t){for(var n in t)n!=="__proto__"&&n!=="constructor"&&n!=="prototype"&&(e[n]=Ri(t[n])?r(e[n]||(e[n]={}),t[n]):t[n]);return e},rl=function(e,t){var n={},i;for(i in e)i in t||(n[i]=e[i]);return n},wa=function(e){var t=e.parent||Lt,n=e.keyframes?J_(mn(e.keyframes)):qn;if(wn(e.inherit))for(;t;)n(e,t.vars.defaults),t=t.parent||t._dp;return e},Q_=function(e,t){for(var n=e.length,i=n===t.length;i&&n--&&e[n]===t[n];);return n<0},Ep=function(e,t,n,i,s){var a=e[i],o;if(s)for(o=t[s];a&&a[s]>o;)a=a._prev;return a?(t._next=a._next,a._next=t):(t._next=e[n],e[n]=t),t._next?t._next._prev=t:e[i]=t,t._prev=a,t.parent=t._dp=e,t},Tl=function(e,t,n,i){n===void 0&&(n="_first"),i===void 0&&(i="_last");var s=t._prev,a=t._next;s?s._next=a:e[n]===t&&(e[n]=a),a?a._prev=s:e[i]===t&&(e[i]=s),t._next=t._prev=t.parent=null},_r=function(e,t){e.parent&&(!t||e.parent.autoRemoveChildren)&&e.parent.remove&&e.parent.remove(e),e._act=0},Gr=function(e,t){if(e&&(!t||t._end>e._dur||t._start<0))for(var n=e;n;)n._dirty=1,n=n.parent;return e},j_=function(e){for(var t=e.parent;t&&t.parent;)t._dirty=1,t.totalDuration(),t=t.parent;return e},Vc=function(e,t,n,i){return e._startAt&&(sn?e._startAt.revert(zo):e.vars.immediateRender&&!e.vars.autoRevert||e._startAt.render(t,!0,i))},eg=function r(e){return!e||e._ts&&r(e.parent)},_h=function(e){return e._repeat?Vs(e._tTime,e=e.duration()+e._rDelay)*e:0},Vs=function(e,t){var n=Math.floor(e=Dt(e/t));return e&&n===e?n-1:n},sl=function(e,t){return(e-t._start)*t._ts+(t._ts>=0?0:t._dirty?t.totalDuration():t._tDur)},El=function(e){return e._end=Dt(e._start+(e._tDur/Math.abs(e._ts||e._rts||Mt)||0))},wl=function(e,t){var n=e._dp;return n&&n.smoothChildTiming&&e._ts&&(e._start=Dt(n._time-(e._ts>0?t/e._ts:((e._dirty?e.totalDuration():e._tDur)-t)/-e._ts)),El(e),n._dirty||Gr(n,e)),e},wp=function(e,t){var n;if((t._time||!t._dur&&t._initted||t._start<e._time&&(t._dur||!t.add))&&(n=sl(e.rawTime(),t),(!t._dur||eo(0,t.totalDuration(),n)-t._tTime>Mt)&&t.render(n,!0)),Gr(e,t)._dp&&e._initted&&e._time>=e._dur&&e._ts){if(e._dur<e.duration())for(n=e;n._dp;)n.rawTime()>=0&&n.totalTime(n._tTime),n=n._dp;e._zTime=-Mt}},Si=function(e,t,n,i){return t.parent&&_r(t),t._start=Dt((Yi(n)?n:n||e!==Lt?ei(e,n,t):e._time)+t._delay),t._end=Dt(t._start+(t.totalDuration()/Math.abs(t.timeScale())||0)),Ep(e,t,"_first","_last",e._sort?"_start":0),Gc(t)||(e._recent=t),i||wp(e,t),e._ts<0&&wl(e,e._tTime),e},Ap=function(e,t){return(Yn.ScrollTrigger||uf("scrollTrigger",t))&&Yn.ScrollTrigger.create(t,e)},Rp=function(e,t,n,i,s){if(_f(e,t,s),!e._initted)return 1;if(!n&&e._pt&&!sn&&(e._dur&&e.vars.lazy!==!1||!e._dur&&e.vars.lazy)&&Mp!==kn.frame)return dr.push(e),e._lazy=[s,i],1},tg=function r(e){var t=e.parent;return t&&t._ts&&t._initted&&!t._lock&&(t.rawTime()<0||r(t))},Gc=function(e){var t=e.data;return t==="isFromStart"||t==="isStart"},ng=function(e,t,n,i){var s=e.ratio,a=t<0||!t&&(!e._start&&tg(e)&&!(!e._initted&&Gc(e))||(e._ts<0||e._dp._ts<0)&&!Gc(e))?0:1,o=e._rDelay,c=0,l,f,d;if(o&&e._repeat&&(c=eo(0,e._tDur,t),f=Vs(c,o),e._yoyo&&f&1&&(a=1-a),f!==Vs(e._tTime,o)&&(s=1-a,e.vars.repeatRefresh&&e._initted&&e.invalidate())),a!==s||sn||i||e._zTime===Mt||!t&&e._zTime){if(!e._initted&&Rp(e,t,i,n,c))return;for(d=e._zTime,e._zTime=t||(n?Mt:0),n||(n=t&&!d),e.ratio=a,e._from&&(a=1-a),e._time=0,e._tTime=c,l=e._pt;l;)l.r(a,l.d),l=l._next;t<0&&Vc(e,t,n,!0),e._onUpdate&&!n&&Gn(e,"onUpdate"),c&&e._repeat&&!n&&e.parent&&Gn(e,"onRepeat"),(t>=e._tDur||t<0)&&e.ratio===a&&(a&&_r(e,1),!n&&!sn&&(Gn(e,a?"onComplete":"onReverseComplete",!0),e._prom&&e._prom()))}else e._zTime||(e._zTime=t)},ig=function(e,t,n){var i;if(n>t)for(i=e._first;i&&i._start<=n;){if(i.data==="isPause"&&i._start>t)return i;i=i._next}else for(i=e._last;i&&i._start>=n;){if(i.data==="isPause"&&i._start<t)return i;i=i._prev}},Gs=function(e,t,n,i){var s=e._repeat,a=Dt(t)||0,o=e._tTime/e._tDur;return o&&!i&&(e._time*=a/e._dur),e._dur=a,e._tDur=s?s<0?1e10:Dt(a*(s+1)+e._rDelay*s):a,o>0&&!i&&wl(e,e._tTime=e._tDur*o),e.parent&&El(e),n||Gr(e.parent,e),e},gh=function(e){return e instanceof Tn?Gr(e):Gs(e,e._dur)},rg={_start:0,endTime:ka,totalDuration:ka},ei=function r(e,t,n){var i=e.labels,s=e._recent||rg,a=e.duration()>=ti?s.endTime(!1):e._dur,o,c,l;return nn(t)&&(isNaN(t)||t in i)?(c=t.charAt(0),l=t.substr(-1)==="%",o=t.indexOf("="),c==="<"||c===">"?(o>=0&&(t=t.replace(/=/,"")),(c==="<"?s._start:s.endTime(s._repeat>=0))+(parseFloat(t.substr(1))||0)*(l?(o<0?s:n).totalDuration()/100:1)):o<0?(t in i||(i[t]=a),i[t]):(c=parseFloat(t.charAt(o-1)+t.substr(o+1)),l&&n&&(c=c/100*(mn(n)?n[0]:n).totalDuration()),o>1?r(e,t.substr(0,o-1),n)+c:a+c)):t==null?a:+t},Aa=function(e,t,n){var i=Yi(t[1]),s=(i?2:1)+(e<2?0:1),a=t[s],o,c;if(i&&(a.duration=t[1]),a.parent=n,e){for(o=a,c=n;c&&!("immediateRender"in o);)o=c.vars.defaults||{},c=wn(c.vars.inherit)&&c.parent;a.immediateRender=wn(o.immediateRender),e<2?a.runBackwards=1:a.startAt=t[s-1]}return new Wt(t[0],a,t[s+1])},Mr=function(e,t){return e||e===0?t(e):t},eo=function(e,t,n){return n<e?e:n>t?t:n},dn=function(e,t){return!nn(e)||!(t=q_.exec(e))?"":t[1]},sg=function(e,t,n){return Mr(n,function(i){return eo(e,t,i)})},Hc=[].slice,Cp=function(e,t){return e&&Ri(e)&&"length"in e&&(!t&&!e.length||e.length-1 in e&&Ri(e[0]))&&!e.nodeType&&e!==xi},ag=function(e,t,n){return n===void 0&&(n=[]),e.forEach(function(i){var s;return nn(i)&&!t||Cp(i,1)?(s=n).push.apply(s,ni(i)):n.push(i)})||n},ni=function(e,t,n){return Rt&&!t&&Rt.selector?Rt.selector(e):nn(e)&&!n&&(kc||!Hs())?Hc.call((t||cf).querySelectorAll(e),0):mn(e)?ag(e,n):Cp(e)?Hc.call(e,0):e?[e]:[]},Wc=function(e){return e=ni(e)[0]||Ba("Invalid scope")||{},function(t){var n=e.current||e.nativeElement||e;return ni(t,n.querySelectorAll?n:n===e?Ba("Invalid scope")||cf.createElement("div"):e)}},Pp=function(e){return e.sort(function(){return .5-Math.random()})},Dp=function(e){if(Ut(e))return e;var t=Ri(e)?e:{each:e},n=Hr(t.ease),i=t.from||0,s=parseFloat(t.base)||0,a={},o=i>0&&i<1,c=isNaN(i)||o,l=t.axis,f=i,d=i;return nn(i)?f=d={center:.5,edges:.5,end:1}[i]||0:!o&&c&&(f=i[0],d=i[1]),function(h,u,g){var _=(g||t).length,m=a[_],p,M,E,S,y,w,A,x,b;if(!m){if(b=t.grid==="auto"?0:(t.grid||[1,ti])[1],!b){for(A=-ti;A<(A=g[b++].getBoundingClientRect().left)&&b<_;);b<_&&b--}for(m=a[_]=[],p=c?Math.min(b,_)*f-.5:i%b,M=b===ti?0:c?_*d/b-.5:i/b|0,A=0,x=ti,w=0;w<_;w++)E=w%b-p,S=M-(w/b|0),m[w]=y=l?Math.abs(l==="y"?S:E):dp(E*E+S*S),y>A&&(A=y),y<x&&(x=y);i==="random"&&Pp(m),m.max=A-x,m.min=x,m.v=_=(parseFloat(t.amount)||parseFloat(t.each)*(b>_?_-1:l?l==="y"?_/b:b:Math.max(b,_/b))||0)*(i==="edges"?-1:1),m.b=_<0?s-_:s,m.u=dn(t.amount||t.each)||0,n=n&&_<0?vg(n):n}return _=(m[h]-m.min)/m.max||0,Dt(m.b+(n?n(_):_)*m.v)+m.u}},Xc=function(e){var t=Math.pow(10,((e+"").split(".")[1]||"").length);return function(n){var i=Dt(Math.round(parseFloat(n)/e)*e*t);return(i-i%1)/t+(Yi(n)?0:dn(n))}},Lp=function(e,t){var n=mn(e),i,s;return!n&&Ri(e)&&(i=n=e.radius||ti,e.values?(e=ni(e.values),(s=!Yi(e[0]))&&(i*=i)):e=Xc(e.increment)),Mr(t,n?Ut(e)?function(a){return s=e(a),Math.abs(s-a)<=i?s:a}:function(a){for(var o=parseFloat(s?a.x:a),c=parseFloat(s?a.y:0),l=ti,f=0,d=e.length,h,u;d--;)s?(h=e[d].x-o,u=e[d].y-c,h=h*h+u*u):h=Math.abs(e[d]-o),h<l&&(l=h,f=d);return f=!i||l<=i?e[f]:a,s||f===a||Yi(a)?f:f+dn(a)}:Xc(e))},Ip=function(e,t,n,i){return Mr(mn(e)?!t:n===!0?!!(n=0):!i,function(){return mn(e)?e[~~(Math.random()*e.length)]:(n=n||1e-5)&&(i=n<1?Math.pow(10,(n+"").length-2):1)&&Math.floor(Math.round((e-n/2+Math.random()*(t-e+n*.99))/n)*n*i)/i})},og=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return function(i){return t.reduce(function(s,a){return a(s)},i)}},lg=function(e,t){return function(n){return e(parseFloat(n))+(t||dn(n))}},cg=function(e,t,n){return Np(e,t,0,1,n)},Up=function(e,t,n){return Mr(n,function(i){return e[~~t(i)]})},ug=function r(e,t,n){var i=t-e;return mn(e)?Up(e,r(0,e.length),t):Mr(n,function(s){return(i+(s-e)%i)%i+e})},fg=function r(e,t,n){var i=t-e,s=i*2;return mn(e)?Up(e,r(0,e.length-1),t):Mr(n,function(a){return a=(s+(a-e)%s)%s||0,e+(a>i?s-a:a)})},za=function(e){return e.replace(W_,function(t){var n=t.indexOf("[")+1,i=t.substring(n||7,n?t.indexOf("]"):t.length-1).split(X_);return Ip(n?i:+i[0],n?0:+i[1],+i[2]||1e-5)})},Np=function(e,t,n,i,s){var a=t-e,o=i-n;return Mr(s,function(c){return n+((c-e)/a*o||0)})},hg=function r(e,t,n,i){var s=isNaN(e+t)?0:function(u){return(1-u)*e+u*t};if(!s){var a=nn(e),o={},c,l,f,d,h;if(n===!0&&(i=1)&&(n=null),a)e={p:e},t={p:t};else if(mn(e)&&!mn(t)){for(f=[],d=e.length,h=d-2,l=1;l<d;l++)f.push(r(e[l-1],e[l]));d--,s=function(g){g*=d;var _=Math.min(h,~~g);return f[_](g-_)},n=t}else i||(e=zs(mn(e)?[]:{},e));if(!f){for(c in t)mf.call(o,e,c,"get",t[c]);s=function(g){return vf(g,o)||(a?e.p:e)}}}return Mr(n,s)},xh=function(e,t,n){var i=e.labels,s=ti,a,o,c;for(a in i)o=i[a]-t,o<0==!!n&&o&&s>(o=Math.abs(o))&&(c=a,s=o);return c},Gn=function(e,t,n){var i=e.vars,s=i[t],a=Rt,o=e._ctx,c,l,f;if(s)return c=i[t+"Params"],l=i.callbackScope||e,n&&dr.length&&il(),o&&(Rt=o),f=c?s.apply(l,c):s.call(l),Rt=a,f},_a=function(e){return _r(e),e.scrollTrigger&&e.scrollTrigger.kill(!!sn),e.progress()<1&&Gn(e,"onInterrupt"),e},Ps,Fp=[],Op=function(e){if(e)if(e=!e.name&&e.default||e,lf()||e.headless){var t=e.name,n=Ut(e),i=t&&!n&&e.init?function(){this._props=[]}:e,s={init:ka,render:vf,add:mf,kill:Cg,modifier:Rg,rawVars:0},a={targetTest:0,get:0,getSetter:xf,aliases:{},register:0};if(Hs(),e!==i){if(Fn[t])return;qn(i,qn(rl(e,s),a)),zs(i.prototype,zs(s,rl(e,a))),Fn[i.prop=t]=i,e.targetTest&&(Vo.push(i),ff[t]=1),t=(t==="css"?"CSS":t.charAt(0).toUpperCase()+t.substr(1))+"Plugin"}vp(t,i),e.register&&e.register(Dn,i,Rn)}else Fp.push(e)},xt=255,ga={aqua:[0,xt,xt],lime:[0,xt,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,xt],navy:[0,0,128],white:[xt,xt,xt],olive:[128,128,0],yellow:[xt,xt,0],orange:[xt,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[xt,0,0],pink:[xt,192,203],cyan:[0,xt,xt],transparent:[xt,xt,xt,0]},Ol=function(e,t,n){return e+=e<0?1:e>1?-1:0,(e*6<1?t+(n-t)*e*6:e<.5?n:e*3<2?t+(n-t)*(2/3-e)*6:t)*xt+.5|0},Bp=function(e,t,n){var i=e?Yi(e)?[e>>16,e>>8&xt,e&xt]:0:ga.black,s,a,o,c,l,f,d,h,u,g;if(!i){if(e.substr(-1)===","&&(e=e.substr(0,e.length-1)),ga[e])i=ga[e];else if(e.charAt(0)==="#"){if(e.length<6&&(s=e.charAt(1),a=e.charAt(2),o=e.charAt(3),e="#"+s+s+a+a+o+o+(e.length===5?e.charAt(4)+e.charAt(4):"")),e.length===9)return i=parseInt(e.substr(1,6),16),[i>>16,i>>8&xt,i&xt,parseInt(e.substr(7),16)/255];e=parseInt(e.substr(1),16),i=[e>>16,e>>8&xt,e&xt]}else if(e.substr(0,3)==="hsl"){if(i=g=e.match(dh),!t)c=+i[0]%360/360,l=+i[1]/100,f=+i[2]/100,a=f<=.5?f*(l+1):f+l-f*l,s=f*2-a,i.length>3&&(i[3]*=1),i[0]=Ol(c+1/3,s,a),i[1]=Ol(c,s,a),i[2]=Ol(c-1/3,s,a);else if(~e.indexOf("="))return i=e.match(mp),n&&i.length<4&&(i[3]=1),i}else i=e.match(dh)||ga.transparent;i=i.map(Number)}return t&&!g&&(s=i[0]/xt,a=i[1]/xt,o=i[2]/xt,d=Math.max(s,a,o),h=Math.min(s,a,o),f=(d+h)/2,d===h?c=l=0:(u=d-h,l=f>.5?u/(2-d-h):u/(d+h),c=d===s?(a-o)/u+(a<o?6:0):d===a?(o-s)/u+2:(s-a)/u+4,c*=60),i[0]=~~(c+.5),i[1]=~~(l*100+.5),i[2]=~~(f*100+.5)),n&&i.length<4&&(i[3]=1),i},kp=function(e){var t=[],n=[],i=-1;return e.split(pr).forEach(function(s){var a=s.match(Cs)||[];t.push.apply(t,a),n.push(i+=a.length+1)}),t.c=n,t},vh=function(e,t,n){var i="",s=(e+i).match(pr),a=t?"hsla(":"rgba(",o=0,c,l,f,d;if(!s)return e;if(s=s.map(function(h){return(h=Bp(h,t,1))&&a+(t?h[0]+","+h[1]+"%,"+h[2]+"%,"+h[3]:h.join(","))+")"}),n&&(f=kp(e),c=n.c,c.join(i)!==f.c.join(i)))for(l=e.replace(pr,"1").split(Cs),d=l.length-1;o<d;o++)i+=l[o]+(~c.indexOf(o)?s.shift()||a+"0,0,0,0)":(f.length?f:s.length?s:n).shift());if(!l)for(l=e.split(pr),d=l.length-1;o<d;o++)i+=l[o]+s[o];return i+l[d]},pr=(function(){var r="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3,4}){1,2}\\b",e;for(e in ga)r+="|"+e+"\\b";return new RegExp(r+")","gi")})(),dg=/hsl[a]?\(/,zp=function(e){var t=e.join(" "),n;if(pr.lastIndex=0,pr.test(t))return n=dg.test(t),e[1]=vh(e[1],n),e[0]=vh(e[0],n,kp(e[1])),!0},Va,kn=(function(){var r=Date.now,e=500,t=33,n=r(),i=n,s=1e3/240,a=s,o=[],c,l,f,d,h,u,g=function _(m){var p=r()-i,M=m===!0,E,S,y,w;if((p>e||p<0)&&(n+=p-t),i+=p,y=i-n,E=y-a,(E>0||M)&&(w=++d.frame,h=y-d.time*1e3,d.time=y=y/1e3,a+=E+(E>=s?4:s-E),S=1),M||(c=l(_)),S)for(u=0;u<o.length;u++)o[u](y,h,w,m)};return d={time:0,frame:0,tick:function(){g(!0)},deltaRatio:function(m){return h/(1e3/(m||60))},wake:function(){gp&&(!kc&&lf()&&(xi=kc=window,cf=xi.document||{},Yn.gsap=Dn,(xi.gsapVersions||(xi.gsapVersions=[])).push(Dn.version),xp(nl||xi.GreenSockGlobals||!xi.gsap&&xi||{}),Fp.forEach(Op)),f=typeof requestAnimationFrame<"u"&&requestAnimationFrame,c&&d.sleep(),l=f||function(m){return setTimeout(m,a-d.time*1e3+1|0)},Va=1,g(2))},sleep:function(){(f?cancelAnimationFrame:clearTimeout)(c),Va=0,l=ka},lagSmoothing:function(m,p){e=m||1/0,t=Math.min(p||33,e)},fps:function(m){s=1e3/(m||240),a=d.time*1e3+s},add:function(m,p,M){var E=p?function(S,y,w,A){m(S,y,w,A),d.remove(E)}:m;return d.remove(m),o[M?"unshift":"push"](E),Hs(),E},remove:function(m,p){~(p=o.indexOf(m))&&o.splice(p,1)&&u>=p&&u--},_listeners:o},d})(),Hs=function(){return!Va&&kn.wake()},it={},pg=/^[\d.\-M][\d.\-,\s]/,mg=/["']/g,_g=function(e){for(var t={},n=e.substr(1,e.length-3).split(":"),i=n[0],s=1,a=n.length,o,c,l;s<a;s++)c=n[s],o=s!==a-1?c.lastIndexOf(","):c.length,l=c.substr(0,o),t[i]=isNaN(l)?l.replace(mg,"").trim():+l,i=c.substr(o+1).trim();return t},gg=function(e){var t=e.indexOf("(")+1,n=e.indexOf(")"),i=e.indexOf("(",t);return e.substring(t,~i&&i<n?e.indexOf(")",n+1):n)},xg=function(e){var t=(e+"").split("("),n=it[t[0]];return n&&t.length>1&&n.config?n.config.apply(null,~e.indexOf("{")?[_g(t[1])]:gg(e).split(",").map(bp)):it._CE&&pg.test(e)?it._CE("",e):n},vg=function(e){return function(t){return 1-e(1-t)}},Hr=function(e,t){return e&&(Ut(e)?e:it[e]||xg(e))||t},es=function(e,t,n,i){n===void 0&&(n=function(c){return 1-t(1-c)}),i===void 0&&(i=function(c){return c<.5?t(c*2)/2:1-t((1-c)*2)/2});var s={easeIn:t,easeOut:n,easeInOut:i},a;return An(e,function(o){it[o]=Yn[o]=s,it[a=o.toLowerCase()]=n;for(var c in s)it[a+(c==="easeIn"?".in":c==="easeOut"?".out":".inOut")]=it[o+"."+c]=s[c]}),s},Vp=function(e){return function(t){return t<.5?(1-e(1-t*2))/2:.5+e((t-.5)*2)/2}},Bl=function r(e,t,n){var i=t>=1?t:1,s=(n||(e?.3:.45))/(t<1?t:1),a=s/Bc*(Math.asin(1/i)||0),o=function(f){return f===1?1:i*Math.pow(2,-10*f)*H_((f-a)*s)+1},c=e==="out"?o:e==="in"?function(l){return 1-o(1-l)}:Vp(o);return s=Bc/s,c.config=function(l,f){return r(e,l,f)},c},kl=function r(e,t){t===void 0&&(t=1.70158);var n=function(a){return a?--a*a*((t+1)*a+t)+1:0},i=e==="out"?n:e==="in"?function(s){return 1-n(1-s)}:Vp(n);return i.config=function(s){return r(e,s)},i};An("Linear,Quad,Cubic,Quart,Quint,Strong",function(r,e){var t=e<5?e+1:e;es(r+",Power"+(t-1),e?function(n){return Math.pow(n,t)}:function(n){return n},function(n){return 1-Math.pow(1-n,t)},function(n){return n<.5?Math.pow(n*2,t)/2:1-Math.pow((1-n)*2,t)/2})});it.Linear.easeNone=it.none=it.Linear.easeIn;es("Elastic",Bl("in"),Bl("out"),Bl());(function(r,e){var t=1/e,n=2*t,i=2.5*t,s=function(o){return o<t?r*o*o:o<n?r*Math.pow(o-1.5/e,2)+.75:o<i?r*(o-=2.25/e)*o+.9375:r*Math.pow(o-2.625/e,2)+.984375};es("Bounce",function(a){return 1-s(1-a)},s)})(7.5625,2.75);es("Expo",function(r){return Math.pow(2,10*(r-1))*r+r*r*r*r*r*r*(1-r)});es("Circ",function(r){return-(dp(1-r*r)-1)});es("Sine",function(r){return r===1?1:-G_(r*z_)+1});es("Back",kl("in"),kl("out"),kl());it.SteppedEase=it.steps=Yn.SteppedEase={config:function(e,t){e===void 0&&(e=1);var n=1/e,i=e+(t?0:1),s=t?1:0,a=1-Mt;return function(o){return((i*eo(0,a,o)|0)+s)*n}}};Oa.ease=it["quad.out"];An("onComplete,onUpdate,onStart,onRepeat,onReverseComplete,onInterrupt",function(r){return hf+=r+","+r+"Params,"});var Gp=function(e,t){this.id=V_++,e._gsap=this,this.target=e,this.harness=t,this.get=t?t.get:Sp,this.set=t?t.getSetter:xf},Ga=(function(){function r(t){this.vars=t,this._delay=+t.delay||0,(this._repeat=t.repeat===1/0?-2:t.repeat||0)&&(this._rDelay=t.repeatDelay||0,this._yoyo=!!t.yoyo||!!t.yoyoEase),this._ts=1,Gs(this,+t.duration,1,1),this.data=t.data,Rt&&(this._ctx=Rt,Rt.data.push(this)),Va||kn.wake()}var e=r.prototype;return e.delay=function(n){return n||n===0?(this.parent&&this.parent.smoothChildTiming&&this.startTime(this._start+n-this._delay),this._delay=n,this):this._delay},e.duration=function(n){return arguments.length?this.totalDuration(this._repeat>0?n+(n+this._rDelay)*this._repeat:n):this.totalDuration()&&this._dur},e.totalDuration=function(n){return arguments.length?(this._dirty=0,Gs(this,this._repeat<0?n:(n-this._repeat*this._rDelay)/(this._repeat+1))):this._tDur},e.totalTime=function(n,i){if(Hs(),!arguments.length)return this._tTime;var s=this._dp;if(s&&s.smoothChildTiming&&this._ts){for(wl(this,n),!s._dp||s.parent||wp(s,this);s&&s.parent;)s.parent._time!==s._start+(s._ts>=0?s._tTime/s._ts:(s.totalDuration()-s._tTime)/-s._ts)&&s.totalTime(s._tTime,!0),s=s.parent;!this.parent&&this._dp.autoRemoveChildren&&(this._ts>0&&n<this._tDur||this._ts<0&&n>0||!this._tDur&&!n)&&Si(this._dp,this,this._start-this._delay)}return(this._tTime!==n||!this._dur&&!i||this._initted&&Math.abs(this._zTime)===Mt||!this._initted&&this._dur&&n||!n&&!this._initted&&(this.add||this._ptLookup))&&(this._ts||(this._pTime=n),yp(this,n,i)),this},e.time=function(n,i){return arguments.length?this.totalTime(Math.min(this.totalDuration(),n+_h(this))%(this._dur+this._rDelay)||(n?this._dur:0),i):this._time},e.totalProgress=function(n,i){return arguments.length?this.totalTime(this.totalDuration()*n,i):this.totalDuration()?Math.min(1,this._tTime/this._tDur):this.rawTime()>=0&&this._initted?1:0},e.progress=function(n,i){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&!(this.iteration()&1)?1-n:n)+_h(this),i):this.duration()?Math.min(1,this._time/this._dur):this.rawTime()>0?1:0},e.iteration=function(n,i){var s=this.duration()+this._rDelay;return arguments.length?this.totalTime(this._time+(n-1)*s,i):this._repeat?Vs(this._tTime,s)+1:1},e.timeScale=function(n,i){if(!arguments.length)return this._rts===-Mt?0:this._rts;if(this._rts===n)return this;var s=this.parent&&this._ts?sl(this.parent._time,this):this._tTime;return this._rts=+n||0,this._ts=this._ps||n===-Mt?0:this._rts,this.totalTime(eo(-Math.abs(this._delay),this.totalDuration(),s),i!==!1),El(this),j_(this)},e.paused=function(n){return arguments.length?(this._ps!==n&&(this._ps=n,n?(this._pTime=this._tTime||Math.max(-this._delay,this.rawTime()),this._ts=this._act=0):(Hs(),this._ts=this._rts,this.totalTime(this.parent&&!this.parent.smoothChildTiming?this.rawTime():this._tTime||this._pTime,this.progress()===1&&Math.abs(this._zTime)!==Mt&&(this._tTime-=Mt)))),this):this._ps},e.startTime=function(n){if(arguments.length){this._start=Dt(n);var i=this.parent||this._dp;return i&&(i._sort||!this.parent)&&Si(i,this,this._start-this._delay),this}return this._start},e.endTime=function(n){return this._start+(wn(n)?this.totalDuration():this.duration())/Math.abs(this._ts||1)},e.rawTime=function(n){var i=this.parent||this._dp;return i?n&&(!this._ts||this._repeat&&this._time&&this.totalProgress()<1)?this._tTime%(this._dur+this._rDelay):this._ts?sl(i.rawTime(n),this):this._tTime:this._tTime},e.revert=function(n){n===void 0&&(n=K_);var i=sn;return sn=n,pf(this)&&(this.timeline&&this.timeline.revert(n),this.totalTime(-.01,n.suppressEvents)),this.data!=="nested"&&n.kill!==!1&&this.kill(),sn=i,this},e.globalTime=function(n){for(var i=this,s=arguments.length?n:i.rawTime();i;)s=i._start+s/(Math.abs(i._ts)||1),i=i._dp;return!this.parent&&this._sat?this._sat.globalTime(n):s},e.repeat=function(n){return arguments.length?(this._repeat=n===1/0?-2:n,gh(this)):this._repeat===-2?1/0:this._repeat},e.repeatDelay=function(n){if(arguments.length){var i=this._time;return this._rDelay=n,gh(this),i?this.time(i):this}return this._rDelay},e.yoyo=function(n){return arguments.length?(this._yoyo=n,this):this._yoyo},e.seek=function(n,i){return this.totalTime(ei(this,n),wn(i))},e.restart=function(n,i){return this.play().totalTime(n?-this._delay:0,wn(i)),this._dur||(this._zTime=-Mt),this},e.play=function(n,i){return n!=null&&this.seek(n,i),this.reversed(!1).paused(!1)},e.reverse=function(n,i){return n!=null&&this.seek(n||this.totalDuration(),i),this.reversed(!0).paused(!1)},e.pause=function(n,i){return n!=null&&this.seek(n,i),this.paused(!0)},e.resume=function(){return this.paused(!1)},e.reversed=function(n){return arguments.length?(!!n!==this.reversed()&&this.timeScale(-this._rts||(n?-Mt:0)),this):this._rts<0},e.invalidate=function(){return this._initted=this._act=0,this._zTime=-Mt,this},e.isActive=function(){var n=this.parent||this._dp,i=this._start,s;return!!(!n||this._ts&&this._initted&&n.isActive()&&(s=n.rawTime(!0))>=i&&s<this.endTime(!0)-Mt)},e.eventCallback=function(n,i,s){var a=this.vars;return arguments.length>1?(i?(a[n]=i,s&&(a[n+"Params"]=s),n==="onUpdate"&&(this._onUpdate=i)):delete a[n],this):a[n]},e.then=function(n){var i=this,s=i._prom;return new Promise(function(a){var o=Ut(n)?n:Tp,c=function(){var f=i.then;i.then=null,s&&s(),Ut(o)&&(o=o(i))&&(o.then||o===i)&&(i.then=f),a(o),i.then=f};i._initted&&i.totalProgress()===1&&i._ts>=0||!i._tTime&&i._ts<0?c():i._prom=c})},e.kill=function(){_a(this)},r})();qn(Ga.prototype,{_time:0,_start:0,_end:0,_tTime:0,_tDur:0,_dirty:0,_repeat:0,_yoyo:!1,parent:null,_initted:!1,_rDelay:0,_ts:1,_dp:0,ratio:0,_zTime:-Mt,_prom:0,_ps:!1,_rts:1});var Tn=(function(r){hp(e,r);function e(n,i){var s;return n===void 0&&(n={}),s=r.call(this,n)||this,s.labels={},s.smoothChildTiming=!!n.smoothChildTiming,s.autoRemoveChildren=!!n.autoRemoveChildren,s._sort=wn(n.sortChildren),Lt&&Si(n.parent||Lt,Oi(s),i),n.reversed&&s.reverse(),n.paused&&s.paused(!0),n.scrollTrigger&&Ap(Oi(s),n.scrollTrigger),s}var t=e.prototype;return t.to=function(i,s,a){return Aa(0,arguments,this),this},t.from=function(i,s,a){return Aa(1,arguments,this),this},t.fromTo=function(i,s,a,o){return Aa(2,arguments,this),this},t.set=function(i,s,a){return s.duration=0,s.parent=this,wa(s).repeatDelay||(s.repeat=0),s.immediateRender=!!s.immediateRender,new Wt(i,s,ei(this,a),1),this},t.call=function(i,s,a){return Si(this,Wt.delayedCall(0,i,s),a)},t.staggerTo=function(i,s,a,o,c,l,f){return a.duration=s,a.stagger=a.stagger||o,a.onComplete=l,a.onCompleteParams=f,a.parent=this,new Wt(i,a,ei(this,c)),this},t.staggerFrom=function(i,s,a,o,c,l,f){return a.runBackwards=1,wa(a).immediateRender=wn(a.immediateRender),this.staggerTo(i,s,a,o,c,l,f)},t.staggerFromTo=function(i,s,a,o,c,l,f,d){return o.startAt=a,wa(o).immediateRender=wn(o.immediateRender),this.staggerTo(i,s,o,c,l,f,d)},t.render=function(i,s,a){var o=this._time,c=this._dirty?this.totalDuration():this._tDur,l=this._dur,f=i<=0?0:Dt(i),d=this._zTime<0!=i<0&&(this._initted||!l),h,u,g,_,m,p,M,E,S,y,w,A;if(this!==Lt&&f>c&&i>=0&&(f=c),f!==this._tTime||a||d){if(o!==this._time&&l&&(f+=this._time-o,i+=this._time-o),h=f,S=this._start,E=this._ts,p=!E,d&&(l||(o=this._zTime),(i||!s)&&(this._zTime=i)),this._repeat){if(w=this._yoyo,m=l+this._rDelay,this._repeat<-1&&i<0)return this.totalTime(m*100+i,s,a);if(h=Dt(f%m),f===c?(_=this._repeat,h=l):(y=Dt(f/m),_=~~y,_&&_===y&&(h=l,_--),h>l&&(h=l)),y=Vs(this._tTime,m),!o&&this._tTime&&y!==_&&this._tTime-y*m-this._dur<=0&&(y=_),w&&_&1&&(h=l-h,A=1),_!==y&&!this._lock){var x=w&&y&1,b=x===(w&&_&1);if(_<y&&(x=!x),o=x?0:f%l?l:f,this._lock=1,this.render(o||(A?0:Dt(_*m)),s,!l)._lock=0,this._tTime=f,!s&&this.parent&&Gn(this,"onRepeat"),this.vars.repeatRefresh&&!A&&(this.invalidate()._lock=1,y=_),o&&o!==this._time||p!==!this._ts||this.vars.onRepeat&&!this.parent&&!this._act)return this;if(l=this._dur,c=this._tDur,b&&(this._lock=2,o=x?l:-1e-4,this.render(o,!0),this.vars.repeatRefresh&&!A&&this.invalidate()),this._lock=0,!this._ts&&!p)return this}}if(this._hasPause&&!this._forcing&&this._lock<2&&(M=ig(this,Dt(o),Dt(h)),M&&(f-=h-(h=M._start))),this._tTime=f,this._time=h,this._act=!!E,this._initted||(this._onUpdate=this.vars.onUpdate,this._initted=1,this._zTime=i,o=0),!o&&f&&l&&!s&&!y&&(Gn(this,"onStart"),this._tTime!==f))return this;if(h>=o&&i>=0)for(u=this._first;u;){if(g=u._next,(u._act||h>=u._start)&&u._ts&&M!==u){if(u.parent!==this)return this.render(i,s,a);if(u.render(u._ts>0?(h-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(h-u._start)*u._ts,s,a),h!==this._time||!this._ts&&!p){M=0,g&&(f+=this._zTime=-Mt);break}}u=g}else{u=this._last;for(var C=i<0?i:h;u;){if(g=u._prev,(u._act||C<=u._end)&&u._ts&&M!==u){if(u.parent!==this)return this.render(i,s,a);if(u.render(u._ts>0?(C-u._start)*u._ts:(u._dirty?u.totalDuration():u._tDur)+(C-u._start)*u._ts,s,a||sn&&pf(u)),h!==this._time||!this._ts&&!p){M=0,g&&(f+=this._zTime=C?-Mt:Mt);break}}u=g}}if(M&&!s&&(this.pause(),M.render(h>=o?0:-Mt)._zTime=h>=o?1:-1,this._ts))return this._start=S,El(this),this.render(i,s,a);this._onUpdate&&!s&&Gn(this,"onUpdate",!0),(f===c&&this._tTime>=this.totalDuration()||!f&&o)&&(S===this._start||Math.abs(E)!==Math.abs(this._ts))&&(this._lock||((i||!l)&&(f===c&&this._ts>0||!f&&this._ts<0)&&_r(this,1),!s&&!(i<0&&!o)&&(f||o||!c)&&(Gn(this,f===c&&i>=0?"onComplete":"onReverseComplete",!0),this._prom&&!(f<c&&this.timeScale()>0)&&this._prom())))}return this},t.add=function(i,s){var a=this;if(Yi(s)||(s=ei(this,s,i)),!(i instanceof Ga)){if(mn(i))return i.forEach(function(o){return a.add(o,s)}),this;if(nn(i))return this.addLabel(i,s);if(Ut(i))i=Wt.delayedCall(0,i);else return this}return this!==i?Si(this,i,s):this},t.getChildren=function(i,s,a,o){i===void 0&&(i=!0),s===void 0&&(s=!0),a===void 0&&(a=!0),o===void 0&&(o=-ti);for(var c=[],l=this._first;l;)l._start>=o&&(l instanceof Wt?s&&c.push(l):(a&&c.push(l),i&&c.push.apply(c,l.getChildren(!0,s,a)))),l=l._next;return c},t.getById=function(i){for(var s=this.getChildren(1,1,1),a=s.length;a--;)if(s[a].vars.id===i)return s[a]},t.remove=function(i){return nn(i)?this.removeLabel(i):Ut(i)?this.killTweensOf(i):(i.parent===this&&Tl(this,i),i===this._recent&&(this._recent=this._last),Gr(this))},t.totalTime=function(i,s){return arguments.length?(this._forcing=1,!this._dp&&this._ts&&(this._start=Dt(kn.time-(this._ts>0?i/this._ts:(this.totalDuration()-i)/-this._ts))),r.prototype.totalTime.call(this,i,s),this._forcing=0,this):this._tTime},t.addLabel=function(i,s){return this.labels[i]=ei(this,s),this},t.removeLabel=function(i){return delete this.labels[i],this},t.addPause=function(i,s,a){var o=Wt.delayedCall(0,s||ka,a);return o.data="isPause",this._hasPause=1,Si(this,o,ei(this,i))},t.removePause=function(i){var s=this._first;for(i=ei(this,i);s;)s._start===i&&s.data==="isPause"&&_r(s),s=s._next},t.killTweensOf=function(i,s,a){for(var o=this.getTweensOf(i,a),c=o.length;c--;)lr!==o[c]&&o[c].kill(i,s);return this},t.getTweensOf=function(i,s){for(var a=[],o=ni(i),c=this._first,l=Yi(s),f;c;)c instanceof Wt?Z_(c._targets,o)&&(l?(!lr||c._initted&&c._ts)&&c.globalTime(0)<=s&&c.globalTime(c.totalDuration())>s:!s||c.isActive())&&a.push(c):(f=c.getTweensOf(o,s)).length&&a.push.apply(a,f),c=c._next;return a},t.tweenTo=function(i,s){s=s||{};var a=this,o=ei(a,i),c=s,l=c.startAt,f=c.onStart,d=c.onStartParams,h=c.immediateRender,u,g=Wt.to(a,qn({ease:s.ease||"none",lazy:!1,immediateRender:!1,time:o,overwrite:"auto",duration:s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale())||Mt,onStart:function(){if(a.pause(),!u){var m=s.duration||Math.abs((o-(l&&"time"in l?l.time:a._time))/a.timeScale());g._dur!==m&&Gs(g,m,0,1).render(g._time,!0,!0),u=1}f&&f.apply(g,d||[])}},s));return h?g.render(0):g},t.tweenFromTo=function(i,s,a){return this.tweenTo(s,qn({startAt:{time:ei(this,i)}},a))},t.recent=function(){return this._recent},t.nextLabel=function(i){return i===void 0&&(i=this._time),xh(this,ei(this,i))},t.previousLabel=function(i){return i===void 0&&(i=this._time),xh(this,ei(this,i),1)},t.currentLabel=function(i){return arguments.length?this.seek(i,!0):this.previousLabel(this._time+Mt)},t.shiftChildren=function(i,s,a){a===void 0&&(a=0);var o=this._first,c=this.labels,l;for(i=Dt(i);o;)o._start>=a&&(o._start+=i,o._end+=i),o=o._next;if(s)for(l in c)c[l]>=a&&(c[l]+=i);return Gr(this)},t.invalidate=function(i){var s=this._first;for(this._lock=0;s;)s.invalidate(i),s=s._next;return r.prototype.invalidate.call(this,i)},t.clear=function(i){i===void 0&&(i=!0);for(var s=this._first,a;s;)a=s._next,this.remove(s),s=a;return this._dp&&(this._time=this._tTime=this._pTime=0),i&&(this.labels={}),Gr(this)},t.totalDuration=function(i){var s=0,a=this,o=a._last,c=ti,l,f,d;if(arguments.length)return a.timeScale((a._repeat<0?a.duration():a.totalDuration())/(a.reversed()?-i:i));if(a._dirty){for(d=a.parent;o;)l=o._prev,o._dirty&&o.totalDuration(),f=o._start,f>c&&a._sort&&o._ts&&!a._lock?(a._lock=1,Si(a,o,f-o._delay,1)._lock=0):c=f,f<0&&o._ts&&(s-=f,(!d&&!a._dp||d&&d.smoothChildTiming)&&(a._start+=Dt(f/a._ts),a._time-=f,a._tTime-=f),a.shiftChildren(-f,!1,-1/0),c=0),o._end>s&&o._ts&&(s=o._end),o=l;Gs(a,a===Lt&&a._time>s?a._time:s,1,1),a._dirty=0}return a._tDur},e.updateRoot=function(i){if(Lt._ts&&(yp(Lt,sl(i,Lt)),Mp=kn.frame),kn.frame>=ph){ph+=Wn.autoSleep||120;var s=Lt._first;if((!s||!s._ts)&&Wn.autoSleep&&kn._listeners.length<2){for(;s&&!s._ts;)s=s._next;s||kn.sleep()}}},e})(Ga);qn(Tn.prototype,{_lock:0,_hasPause:0,_forcing:0});var Mg=function(e,t,n,i,s,a,o){var c=new Rn(this._pt,e,t,0,1,$p,null,s),l=0,f=0,d,h,u,g,_,m,p,M;for(c.b=n,c.e=i,n+="",i+="",(p=~i.indexOf("random("))&&(i=za(i)),a&&(M=[n,i],a(M,e,t),n=M[0],i=M[1]),h=n.match(Nl)||[];d=Nl.exec(i);)g=d[0],_=i.substring(l,d.index),u?u=(u+1)%5:_.substr(-5)==="rgba("&&(u=1),g!==h[f++]&&(m=parseFloat(h[f-1])||0,c._pt={_next:c._pt,p:_||f===1?_:",",s:m,c:g.charAt(1)==="="?Ls(m,g)-m:parseFloat(g)-m,m:u&&u<4?Math.round:0},l=Nl.lastIndex);return c.c=l<i.length?i.substring(l,i.length):"",c.fp=o,(_p.test(i)||p)&&(c.e=0),this._pt=c,c},mf=function(e,t,n,i,s,a,o,c,l,f){Ut(i)&&(i=i(s||0,e,a));var d=e[t],h=n!=="get"?n:Ut(d)?l?e[t.indexOf("set")||!Ut(e["get"+t.substr(3)])?t:"get"+t.substr(3)](l):e[t]():d,u=Ut(d)?l?Eg:Yp:gf,g;if(nn(i)&&(~i.indexOf("random(")&&(i=za(i)),i.charAt(1)==="="&&(g=Ls(h,i)+(dn(h)||0),(g||g===0)&&(i=g))),!f||h!==i||Yc)return!isNaN(h*i)&&i!==""?(g=new Rn(this._pt,e,t,+h||0,i-(h||0),typeof d=="boolean"?Ag:qp,0,u),l&&(g.fp=l),o&&g.modifier(o,this,e),this._pt=g):(!d&&!(t in e)&&uf(t,i),Mg.call(this,e,t,h,i,u,c||Wn.stringFilter,l))},Sg=function(e,t,n,i,s){if(Ut(e)&&(e=Ra(e,s,t,n,i)),!Ri(e)||e.style&&e.nodeType||mn(e)||pp(e))return nn(e)?Ra(e,s,t,n,i):e;var a={},o;for(o in e)a[o]=Ra(e[o],s,t,n,i);return a},Hp=function(e,t,n,i,s,a){var o,c,l,f;if(Fn[e]&&(o=new Fn[e]).init(s,o.rawVars?t[e]:Sg(t[e],i,s,a,n),n,i,a)!==!1&&(n._pt=c=new Rn(n._pt,s,e,0,1,o.render,o,0,o.priority),n!==Ps))for(l=n._ptLookup[n._targets.indexOf(s)],f=o._props.length;f--;)l[o._props[f]]=c;return o},lr,Yc,_f=function r(e,t,n){var i=e.vars,s=i.ease,a=i.startAt,o=i.immediateRender,c=i.lazy,l=i.onUpdate,f=i.runBackwards,d=i.yoyoEase,h=i.keyframes,u=i.autoRevert,g=e._dur,_=e._startAt,m=e._targets,p=e.parent,M=p&&p.data==="nested"?p.vars.targets:m,E=e._overwrite==="auto"&&!af,S=e.timeline,y=i.easeReverse||d,w,A,x,b,C,L,N,U,I,G,W,Y,se;if(S&&(!h||!s)&&(s="none"),e._ease=Hr(s,Oa.ease),e._rEase=y&&(Hr(y)||e._ease),e._from=!S&&!!i.runBackwards,e._from&&(e.ratio=1),!S||h&&!i.stagger){if(U=m[0]?Vr(m[0]).harness:0,Y=U&&i[U.prop],w=rl(i,ff),_&&(_._zTime<0&&_.progress(1),t<0&&f&&o&&!u?_.render(-1,!0):_.revert(f&&g?zo:$_),_._lazy=0),a){if(_r(e._startAt=Wt.set(m,qn({data:"isStart",overwrite:!1,parent:p,immediateRender:!0,lazy:!_&&wn(c),startAt:null,delay:0,onUpdate:l&&function(){return Gn(e,"onUpdate")},stagger:0},a))),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn||!o&&!u)&&e._startAt.revert(zo),o&&g&&t<=0&&n<=0){t&&(e._zTime=t);return}}else if(f&&g&&!_){if(t&&(o=!1),x=qn({overwrite:!1,data:"isFromStart",lazy:o&&!_&&wn(c),immediateRender:o,stagger:0,parent:p},w),Y&&(x[U.prop]=Y),_r(e._startAt=Wt.set(m,x)),e._startAt._dp=0,e._startAt._sat=e,t<0&&(sn?e._startAt.revert(zo):e._startAt.render(-1,!0)),e._zTime=t,!o)r(e._startAt,Mt,Mt);else if(!t)return}for(e._pt=e._ptCache=0,c=g&&wn(c)||c&&!g,A=0;A<m.length;A++){if(C=m[A],N=C._gsap||df(m)[A]._gsap,e._ptLookup[A]=G={},zc[N.id]&&dr.length&&il(),W=M===m?A:M.indexOf(C),U&&(I=new U).init(C,Y||w,e,W,M)!==!1&&(e._pt=b=new Rn(e._pt,C,I.name,0,1,I.render,I,0,I.priority),I._props.forEach(function(Q){G[Q]=b}),I.priority&&(L=1)),!U||Y)for(x in w)Fn[x]&&(I=Hp(x,w,e,W,C,M))?I.priority&&(L=1):G[x]=b=mf.call(e,C,x,"get",w[x],W,M,0,i.stringFilter);e._op&&e._op[A]&&e.kill(C,e._op[A]),E&&e._pt&&(lr=e,Lt.killTweensOf(C,G,e.globalTime(t)),se=!e.parent,lr=0),e._pt&&c&&(zc[N.id]=1)}L&&Kp(e),e._onInit&&e._onInit(e)}e._onUpdate=l,e._initted=(!e._op||e._pt)&&!se,h&&t<=0&&S.render(ti,!0,!0)},yg=function(e,t,n,i,s,a,o,c){var l=(e._pt&&e._ptCache||(e._ptCache={}))[t],f,d,h,u;if(!l)for(l=e._ptCache[t]=[],h=e._ptLookup,u=e._targets.length;u--;){if(f=h[u][t],f&&f.d&&f.d._pt)for(f=f.d._pt;f&&f.p!==t&&f.fp!==t;)f=f._next;if(!f)return Yc=1,e.vars[t]="+=0",_f(e,o),Yc=0,c?Ba(t+" not eligible for reset. Try splitting into individual properties"):1;l.push(f)}for(u=l.length;u--;)d=l[u],f=d._pt||d,f.s=(i||i===0)&&!s?i:f.s+(i||0)+a*f.c,f.c=n-f.s,d.e&&(d.e=Bt(n)+dn(d.e)),d.b&&(d.b=f.s+dn(d.b))},bg=function(e,t){var n=e[0]?Vr(e[0]).harness:0,i=n&&n.aliases,s,a,o,c;if(!i)return t;s=zs({},t);for(a in i)if(a in s)for(c=i[a].split(","),o=c.length;o--;)s[c[o]]=s[a];return s},Tg=function(e,t,n,i){var s=t.ease||i||"power1.inOut",a,o;if(mn(t))o=n[e]||(n[e]=[]),t.forEach(function(c,l){return o.push({t:l/(t.length-1)*100,v:c,e:s})});else for(a in t)o=n[a]||(n[a]=[]),a==="ease"||o.push({t:parseFloat(e),v:t[a],e:s})},Ra=function(e,t,n,i,s){return Ut(e)?e.call(t,n,i,s):nn(e)&&~e.indexOf("random(")?za(e):e},Wp=hf+"repeat,repeatDelay,yoyo,repeatRefresh,yoyoEase,easeReverse,autoRevert",Xp={};An(Wp+",id,stagger,delay,duration,paused,scrollTrigger",function(r){return Xp[r]=1});var Wt=(function(r){hp(e,r);function e(n,i,s,a){var o;typeof i=="number"&&(s.duration=i,i=s,s=null),o=r.call(this,a?i:wa(i))||this;var c=o.vars,l=c.duration,f=c.delay,d=c.immediateRender,h=c.stagger,u=c.overwrite,g=c.keyframes,_=c.defaults,m=c.scrollTrigger,p=i.parent||Lt,M=(mn(n)||pp(n)?Yi(n[0]):"length"in i)?[n]:ni(n),E,S,y,w,A,x,b,C;if(o._targets=M.length?df(M):Ba("GSAP target "+n+" not found. https://gsap.com",!Wn.nullTargetWarn)||[],o._ptLookup=[],o._overwrite=u,g||h||so(l)||so(f)){i=o.vars;var L=i.easeReverse||i.yoyoEase;if(E=o.timeline=new Tn({data:"nested",defaults:_||{},targets:p&&p.data==="nested"?p.vars.targets:M}),E.kill(),E.parent=E._dp=Oi(o),E._start=0,h||so(l)||so(f)){if(w=M.length,b=h&&Dp(h),Ri(h))for(A in h)~Wp.indexOf(A)&&(C||(C={}),C[A]=h[A]);for(S=0;S<w;S++)y=rl(i,Xp),y.stagger=0,L&&(y.easeReverse=L),C&&zs(y,C),x=M[S],y.duration=+Ra(l,Oi(o),S,x,M),y.delay=(+Ra(f,Oi(o),S,x,M)||0)-o._delay,!h&&w===1&&y.delay&&(o._delay=f=y.delay,o._start+=f,y.delay=0),E.to(x,y,b?b(S,x,M):0),E._ease=it.none;E.duration()?l=f=0:o.timeline=0}else if(g){wa(qn(E.vars.defaults,{ease:"none"})),E._ease=Hr(g.ease||i.ease||"none");var N=0,U,I,G;if(mn(g))g.forEach(function(W){return E.to(M,W,">")}),E.duration();else{y={};for(A in g)A==="ease"||A==="easeEach"||Tg(A,g[A],y,g.easeEach);for(A in y)for(U=y[A].sort(function(W,Y){return W.t-Y.t}),N=0,S=0;S<U.length;S++)I=U[S],G={ease:I.e,duration:(I.t-(S?U[S-1].t:0))/100*l},G[A]=I.v,E.to(M,G,N),N+=G.duration;E.duration()<l&&E.to({},{duration:l-E.duration()})}}l||o.duration(l=E.duration())}else o.timeline=0;return u===!0&&!af&&(lr=Oi(o),Lt.killTweensOf(M),lr=0),Si(p,Oi(o),s),i.reversed&&o.reverse(),i.paused&&o.paused(!0),(d||!l&&!g&&o._start===Dt(p._time)&&wn(d)&&eg(Oi(o))&&p.data!=="nested")&&(o._tTime=-Mt,o.render(Math.max(0,-f)||0)),m&&Ap(Oi(o),m),o}var t=e.prototype;return t.render=function(i,s,a){var o=this._time,c=this._tDur,l=this._dur,f=i<0,d=i>c-Mt&&!f?c:i<Mt?0:i,h,u,g,_,m,p,M,E;if(!l)ng(this,i,s,a);else if(d!==this._tTime||!i||a||!this._initted&&this._tTime||this._startAt&&this._zTime<0!==f||this._lazy){if(h=d,E=this.timeline,this._repeat){if(_=l+this._rDelay,this._repeat<-1&&f)return this.totalTime(_*100+i,s,a);if(h=Dt(d%_),d===c?(g=this._repeat,h=l):(m=Dt(d/_),g=~~m,g&&g===m?(h=l,g--):h>l&&(h=l)),p=this._yoyo&&g&1,p&&(h=l-h),m=Vs(this._tTime,_),h===o&&!a&&this._initted&&g===m)return this._tTime=d,this;g!==m&&this.vars.repeatRefresh&&!p&&!this._lock&&h!==_&&this._initted&&(this._lock=a=1,this.render(Dt(_*g),!0).invalidate()._lock=0)}if(!this._initted){if(Rp(this,f?i:h,a,s,d))return this._tTime=0,this;if(o!==this._time&&!(a&&this.vars.repeatRefresh&&g!==m))return this;if(l!==this._dur)return this.render(i,s,a)}if(this._rEase){var S=h<o;if(S!==this._inv){var y=S?o:l-o;this._inv=S,this._from&&(this.ratio=1-this.ratio),this._invRatio=this.ratio,this._invTime=o,this._invRecip=y?(S?-1:1)/y:0,this._invScale=S?-this.ratio:1-this.ratio,this._invEase=S?this._rEase:this._ease}this.ratio=M=this._invRatio+this._invScale*this._invEase((h-this._invTime)*this._invRecip)}else this.ratio=M=this._ease(h/l);if(this._from&&(this.ratio=M=1-M),this._tTime=d,this._time=h,!this._act&&this._ts&&(this._act=1,this._lazy=0),!o&&d&&!s&&!m&&(Gn(this,"onStart"),this._tTime!==d))return this;for(u=this._pt;u;)u.r(M,u.d),u=u._next;E&&E.render(i<0?i:E._dur*E._ease(h/this._dur),s,a)||this._startAt&&(this._zTime=i),this._onUpdate&&!s&&(f&&Vc(this,i,s,a),Gn(this,"onUpdate")),this._repeat&&g!==m&&this.vars.onRepeat&&!s&&this.parent&&Gn(this,"onRepeat"),(d===this._tDur||!d)&&this._tTime===d&&(f&&!this._onUpdate&&Vc(this,i,!0,!0),(i||!l)&&(d===this._tDur&&this._ts>0||!d&&this._ts<0)&&_r(this,1),!s&&!(f&&!o)&&(d||o||p)&&(Gn(this,d===c?"onComplete":"onReverseComplete",!0),this._prom&&!(d<c&&this.timeScale()>0)&&this._prom()))}return this},t.targets=function(){return this._targets},t.invalidate=function(i){return(!i||!this.vars.runBackwards)&&(this._startAt=0),this._pt=this._op=this._onUpdate=this._lazy=this.ratio=0,this._ptLookup=[],this.timeline&&this.timeline.invalidate(i),r.prototype.invalidate.call(this,i)},t.resetTo=function(i,s,a,o,c){Va||kn.wake(),this._ts||this.play();var l=Math.min(this._dur,(this._dp._time-this._start)*this._ts),f;return this._initted||_f(this,l),f=this._ease(l/this._dur),yg(this,i,s,a,o,f,l,c)?this.resetTo(i,s,a,o,1):(wl(this,0),this.parent||Ep(this._dp,this,"_first","_last",this._dp._sort?"_start":0),this.render(0))},t.kill=function(i,s){if(s===void 0&&(s="all"),!i&&(!s||s==="all"))return this._lazy=this._pt=0,this.parent?_a(this):this.scrollTrigger&&this.scrollTrigger.kill(!!sn),this;if(this.timeline){var a=this.timeline.totalDuration();return this.timeline.killTweensOf(i,s,lr&&lr.vars.overwrite!==!0)._first||_a(this),this.parent&&a!==this.timeline.totalDuration()&&Gs(this,this._dur*this.timeline._tDur/a,0,1),this}var o=this._targets,c=i?ni(i):o,l=this._ptLookup,f=this._pt,d,h,u,g,_,m,p;if((!s||s==="all")&&Q_(o,c))return s==="all"&&(this._pt=0),_a(this);for(d=this._op=this._op||[],s!=="all"&&(nn(s)&&(_={},An(s,function(M){return _[M]=1}),s=_),s=bg(o,s)),p=o.length;p--;)if(~c.indexOf(o[p])){h=l[p],s==="all"?(d[p]=s,g=h,u={}):(u=d[p]=d[p]||{},g=s);for(_ in g)m=h&&h[_],m&&((!("kill"in m.d)||m.d.kill(_)===!0)&&Tl(this,m,"_pt"),delete h[_]),u!=="all"&&(u[_]=1)}return this._initted&&!this._pt&&f&&_a(this),this},e.to=function(i,s){return new e(i,s,arguments[2])},e.from=function(i,s){return Aa(1,arguments)},e.delayedCall=function(i,s,a,o){return new e(s,0,{immediateRender:!1,lazy:!1,overwrite:!1,delay:i,onComplete:s,onReverseComplete:s,onCompleteParams:a,onReverseCompleteParams:a,callbackScope:o})},e.fromTo=function(i,s,a){return Aa(2,arguments)},e.set=function(i,s){return s.duration=0,s.repeatDelay||(s.repeat=0),new e(i,s)},e.killTweensOf=function(i,s,a){return Lt.killTweensOf(i,s,a)},e})(Ga);qn(Wt.prototype,{_targets:[],_lazy:0,_startAt:0,_op:0,_onInit:0});An("staggerTo,staggerFrom,staggerFromTo",function(r){Wt[r]=function(){var e=new Tn,t=Hc.call(arguments,0);return t.splice(r==="staggerFromTo"?5:4,0,0),e[r].apply(e,t)}});var gf=function(e,t,n){return e[t]=n},Yp=function(e,t,n){return e[t](n)},Eg=function(e,t,n,i){return e[t](i.fp,n)},wg=function(e,t,n){return e.setAttribute(t,n)},xf=function(e,t){return Ut(e[t])?Yp:of(e[t])&&e.setAttribute?wg:gf},qp=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e6)/1e6,t)},Ag=function(e,t){return t.set(t.t,t.p,!!(t.s+t.c*e),t)},$p=function(e,t){var n=t._pt,i="";if(!e&&t.b)i=t.b;else if(e===1&&t.e)i=t.e;else{for(;n;)i=n.p+(n.m?n.m(n.s+n.c*e):Math.round((n.s+n.c*e)*1e4)/1e4)+i,n=n._next;i+=t.c}t.set(t.t,t.p,i,t)},vf=function(e,t){for(var n=t._pt;n;)n.r(e,n.d),n=n._next},Rg=function(e,t,n,i){for(var s=this._pt,a;s;)a=s._next,s.p===i&&s.modifier(e,t,n),s=a},Cg=function(e){for(var t=this._pt,n,i;t;)i=t._next,t.p===e&&!t.op||t.op===e?Tl(this,t,"_pt"):t.dep||(n=1),t=i;return!n},Pg=function(e,t,n,i){i.mSet(e,t,i.m.call(i.tween,n,i.mt),i)},Kp=function(e){for(var t=e._pt,n,i,s,a;t;){for(n=t._next,i=s;i&&i.pr>t.pr;)i=i._next;(t._prev=i?i._prev:a)?t._prev._next=t:s=t,(t._next=i)?i._prev=t:a=t,t=n}e._pt=s},Rn=(function(){function r(t,n,i,s,a,o,c,l,f){this.t=n,this.s=s,this.c=a,this.p=i,this.r=o||qp,this.d=c||this,this.set=l||gf,this.pr=f||0,this._next=t,t&&(t._prev=this)}var e=r.prototype;return e.modifier=function(n,i,s){this.mSet=this.mSet||this.set,this.set=Pg,this.m=n,this.mt=s,this.tween=i},r})();An(hf+"parent,duration,ease,delay,overwrite,runBackwards,startAt,yoyo,immediateRender,repeat,repeatDelay,data,paused,reversed,lazy,callbackScope,stringFilter,id,yoyoEase,stagger,inherit,repeatRefresh,keyframes,autoRevert,scrollTrigger,easeReverse",function(r){return ff[r]=1});Yn.TweenMax=Yn.TweenLite=Wt;Yn.TimelineLite=Yn.TimelineMax=Tn;Lt=new Tn({sortChildren:!1,defaults:Oa,autoRemoveChildren:!0,id:"root",smoothChildTiming:!0});Wn.stringFilter=zp;var Wr=[],Go={},Dg=[],Mh=0,Lg=0,zl=function(e){return(Go[e]||Dg).map(function(t){return t()})},qc=function(){var e=Date.now(),t=[];e-Mh>2&&(zl("matchMediaInit"),Wr.forEach(function(n){var i=n.queries,s=n.conditions,a,o,c,l;for(o in i)a=xi.matchMedia(i[o]).matches,a&&(c=1),a!==s[o]&&(s[o]=a,l=1);l&&(n.revert(),c&&t.push(n))}),zl("matchMediaRevert"),t.forEach(function(n){return n.onMatch(n,function(i){return n.add(null,i)})}),Mh=e,zl("matchMedia"))},Zp=(function(){function r(t,n){this.selector=n&&Wc(n),this.data=[],this._r=[],this.isReverted=!1,this.id=Lg++,t&&this.add(t)}var e=r.prototype;return e.add=function(n,i,s){Ut(n)&&(s=i,i=n,n=Ut);var a=this,o=function(){var l=Rt,f=a.selector,d;return l&&l!==a&&l.data.push(a),s&&(a.selector=Wc(s)),Rt=a,d=i.apply(a,arguments),Ut(d)&&a._r.push(d),Rt=l,a.selector=f,a.isReverted=!1,d};return a.last=o,n===Ut?o(a,function(c){return a.add(null,c)}):n?a[n]=o:o},e.ignore=function(n){var i=Rt;Rt=null,n(this),Rt=i},e.getTweens=function(){var n=[];return this.data.forEach(function(i){return i instanceof r?n.push.apply(n,i.getTweens()):i instanceof Wt&&!(i.parent&&i.parent.data==="nested")&&n.push(i)}),n},e.clear=function(){this._r.length=this.data.length=0},e.kill=function(n,i){var s=this;if(n?(function(){for(var o=s.getTweens(),c=s.data.length,l;c--;)l=s.data[c],l.data==="isFlip"&&(l.revert(),l.getChildren(!0,!0,!1).forEach(function(f){return o.splice(o.indexOf(f),1)}));for(o.map(function(f){return{g:f._dur||f._delay||f._sat&&!f._sat.vars.immediateRender?f.globalTime(0):-1/0,t:f}}).sort(function(f,d){return d.g-f.g||-1/0}).forEach(function(f){return f.t.revert(n)}),c=s.data.length;c--;)l=s.data[c],l instanceof Tn?l.data!=="nested"&&(l.scrollTrigger&&l.scrollTrigger.revert(),l.kill()):!(l instanceof Wt)&&l.revert&&l.revert(n);s._r.forEach(function(f){return f(n,s)}),s.isReverted=!0})():this.data.forEach(function(o){return o.kill&&o.kill()}),this.clear(),i)for(var a=Wr.length;a--;)Wr[a].id===this.id&&Wr.splice(a,1)},e.revert=function(n){this.kill(n||{})},r})(),Ig=(function(){function r(t){this.contexts=[],this.scope=t,Rt&&Rt.data.push(this)}var e=r.prototype;return e.add=function(n,i,s){Ri(n)||(n={matches:n});var a=new Zp(0,s||this.scope),o=a.conditions={},c,l,f;Rt&&!a.selector&&(a.selector=Rt.selector),this.contexts.push(a),i=a.add("onMatch",i),a.queries=n;for(l in n)l==="all"?f=1:(c=xi.matchMedia(n[l]),c&&(Wr.indexOf(a)<0&&Wr.push(a),(o[l]=c.matches)&&(f=1),c.addListener?c.addListener(qc):c.addEventListener("change",qc)));return f&&i(a,function(d){return a.add(null,d)}),this},e.revert=function(n){this.kill(n||{})},e.kill=function(n){this.contexts.forEach(function(i){return i.kill(n,!0)})},r})(),al={registerPlugin:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.forEach(function(i){return Op(i)})},timeline:function(e){return new Tn(e)},getTweensOf:function(e,t){return Lt.getTweensOf(e,t)},getProperty:function(e,t,n,i){nn(e)&&(e=ni(e)[0]);var s=Vr(e||{}).get,a=n?Tp:bp;return n==="native"&&(n=""),e&&(t?a((Fn[t]&&Fn[t].get||s)(e,t,n,i)):function(o,c,l){return a((Fn[o]&&Fn[o].get||s)(e,o,c,l))})},quickSetter:function(e,t,n){if(e=ni(e),e.length>1){var i=e.map(function(f){return Dn.quickSetter(f,t,n)}),s=i.length;return function(f){for(var d=s;d--;)i[d](f)}}e=e[0]||{};var a=Fn[t],o=Vr(e),c=o.harness&&(o.harness.aliases||{})[t]||t,l=a?function(f){var d=new a;Ps._pt=0,d.init(e,n?f+n:f,Ps,0,[e]),d.render(1,d),Ps._pt&&vf(1,Ps)}:o.set(e,c);return a?l:function(f){return l(e,c,n?f+n:f,o,1)}},quickTo:function(e,t,n){var i,s=Dn.to(e,qn((i={},i[t]="+=0.1",i.paused=!0,i.stagger=0,i),n||{})),a=function(c,l,f){return s.resetTo(t,c,l,f)};return a.tween=s,a},isTweening:function(e){return Lt.getTweensOf(e,!0).length>0},defaults:function(e){return e&&e.ease&&(e.ease=Hr(e.ease,Oa.ease)),mh(Oa,e||{})},config:function(e){return mh(Wn,e||{})},registerEffect:function(e){var t=e.name,n=e.effect,i=e.plugins,s=e.defaults,a=e.extendTimeline;(i||"").split(",").forEach(function(o){return o&&!Fn[o]&&!Yn[o]&&Ba(t+" effect requires "+o+" plugin.")}),Fl[t]=function(o,c,l){return n(ni(o),qn(c||{},s),l)},a&&(Tn.prototype[t]=function(o,c,l){return this.add(Fl[t](o,Ri(c)?c:(l=c)&&{},this),l)})},registerEase:function(e,t){it[e]=Hr(t)},parseEase:function(e,t){return arguments.length?Hr(e,t):it},getById:function(e){return Lt.getById(e)},exportRoot:function(e,t){e===void 0&&(e={});var n=new Tn(e),i,s;for(n.smoothChildTiming=wn(e.smoothChildTiming),Lt.remove(n),n._dp=0,n._time=n._tTime=Lt._time,i=Lt._first;i;)s=i._next,(t||!(!i._dur&&i instanceof Wt&&i.vars.onComplete===i._targets[0]))&&Si(n,i,i._start-i._delay),i=s;return Si(Lt,n,0),n},context:function(e,t){return e?new Zp(e,t):Rt},matchMedia:function(e){return new Ig(e)},matchMediaRefresh:function(){return Wr.forEach(function(e){var t=e.conditions,n,i;for(i in t)t[i]&&(t[i]=!1,n=1);n&&e.revert()})||qc()},addEventListener:function(e,t){var n=Go[e]||(Go[e]=[]);~n.indexOf(t)||n.push(t)},removeEventListener:function(e,t){var n=Go[e],i=n&&n.indexOf(t);i>=0&&n.splice(i,1)},utils:{wrap:ug,wrapYoyo:fg,distribute:Dp,random:Ip,snap:Lp,normalize:cg,getUnit:dn,clamp:sg,splitColor:Bp,toArray:ni,selector:Wc,mapRange:Np,pipe:og,unitize:lg,interpolate:hg,shuffle:Pp},install:xp,effects:Fl,ticker:kn,updateRoot:Tn.updateRoot,plugins:Fn,globalTimeline:Lt,core:{PropTween:Rn,globals:vp,Tween:Wt,Timeline:Tn,Animation:Ga,getCache:Vr,_removeLinkedListItem:Tl,reverting:function(){return sn},context:function(e){return e&&Rt&&(Rt.data.push(e),e._ctx=Rt),Rt},suppressOverwrites:function(e){return af=e}}};An("to,from,fromTo,delayedCall,set,killTweensOf",function(r){return al[r]=Wt[r]});kn.add(Tn.updateRoot);Ps=al.to({},{duration:0});var Ug=function(e,t){for(var n=e._pt;n&&n.p!==t&&n.op!==t&&n.fp!==t;)n=n._next;return n},Ng=function(e,t){var n=e._targets,i,s,a;for(i in t)for(s=n.length;s--;)a=e._ptLookup[s][i],a&&(a=a.d)&&(a._pt&&(a=Ug(a,i)),a&&a.modifier&&a.modifier(t[i],e,n[s],i))},Vl=function(e,t){return{name:e,headless:1,rawVars:1,init:function(i,s,a){a._onInit=function(o){var c,l;if(nn(s)&&(c={},An(s,function(f){return c[f]=1}),s=c),t){c={};for(l in s)c[l]=t(s[l]);s=c}Ng(o,s)}}}},Dn=al.registerPlugin({name:"attr",init:function(e,t,n,i,s){var a,o,c;this.tween=n;for(a in t)c=e.getAttribute(a)||"",o=this.add(e,"setAttribute",(c||0)+"",t[a],i,s,0,0,a),o.op=a,o.b=c,this._props.push(a)},render:function(e,t){for(var n=t._pt;n;)sn?n.set(n.t,n.p,n.b,n):n.r(e,n.d),n=n._next}},{name:"endArray",headless:1,init:function(e,t){for(var n=t.length;n--;)this.add(e,n,e[n]||0,t[n],0,0,0,0,0,1)}},Vl("roundProps",Xc),Vl("modifiers"),Vl("snap",Lp))||al;Wt.version=Tn.version=Dn.version="3.15.0";gp=1;lf()&&Hs();it.Power0;it.Power1;it.Power2;it.Power3;it.Power4;it.Linear;it.Quad;it.Cubic;it.Quart;it.Quint;it.Strong;it.Elastic;it.Back;it.SteppedEase;it.Bounce;it.Sine;it.Expo;it.Circ;var Sh,cr,Is,Mf,Nr,yh,Sf,Fg=function(){return typeof window<"u"},qi={},Pr=180/Math.PI,Us=Math.PI/180,ls=Math.atan2,bh=1e8,yf=/([A-Z])/g,Og=/(left|right|width|margin|padding|x)/i,Bg=/[\s,\(]\S/,bi={autoAlpha:"opacity,visibility",scale:"scaleX,scaleY",alpha:"opacity"},$c=function(e,t){return t.set(t.t,t.p,Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},kg=function(e,t){return t.set(t.t,t.p,e===1?t.e:Math.round((t.s+t.c*e)*1e4)/1e4+t.u,t)},zg=function(e,t){return t.set(t.t,t.p,e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Vg=function(e,t){return t.set(t.t,t.p,e===1?t.e:e?Math.round((t.s+t.c*e)*1e4)/1e4+t.u:t.b,t)},Gg=function(e,t){var n=t.s+t.c*e;t.set(t.t,t.p,~~(n+(n<0?-.5:.5))+t.u,t)},Jp=function(e,t){return t.set(t.t,t.p,e?t.e:t.b,t)},Qp=function(e,t){return t.set(t.t,t.p,e!==1?t.b:t.e,t)},Hg=function(e,t,n){return e.style[t]=n},Wg=function(e,t,n){return e.style.setProperty(t,n)},Xg=function(e,t,n){return e._gsap[t]=n},Yg=function(e,t,n){return e._gsap.scaleX=e._gsap.scaleY=n},qg=function(e,t,n,i,s){var a=e._gsap;a.scaleX=a.scaleY=n,a.renderTransform(s,a)},$g=function(e,t,n,i,s){var a=e._gsap;a[t]=n,a.renderTransform(s,a)},It="transform",Cn=It+"Origin",Kg=function r(e,t){var n=this,i=this.target,s=i.style,a=i._gsap;if(e in qi&&s){if(this.tfm=this.tfm||{},e!=="transform")e=bi[e]||e,~e.indexOf(",")?e.split(",").forEach(function(o){return n.tfm[o]=Bi(i,o)}):this.tfm[e]=a.x?a[e]:Bi(i,e),e===Cn&&(this.tfm.zOrigin=a.zOrigin);else return bi.transform.split(",").forEach(function(o){return r.call(n,o,t)});if(this.props.indexOf(It)>=0)return;a.svg&&(this.svgo=i.getAttribute("data-svg-origin"),this.props.push(Cn,t,"")),e=It}(s||t)&&this.props.push(e,t,s[e])},jp=function(e){e.translate&&(e.removeProperty("translate"),e.removeProperty("scale"),e.removeProperty("rotate"))},Zg=function(){var e=this.props,t=this.target,n=t.style,i=t._gsap,s,a;for(s=0;s<e.length;s+=3)e[s+1]?e[s+1]===2?t[e[s]](e[s+2]):t[e[s]]=e[s+2]:e[s+2]?n[e[s]]=e[s+2]:n.removeProperty(e[s].substr(0,2)==="--"?e[s]:e[s].replace(yf,"-$1").toLowerCase());if(this.tfm){for(a in this.tfm)i[a]=this.tfm[a];i.svg&&(i.renderTransform(),t.setAttribute("data-svg-origin",this.svgo||"")),s=Sf(),(!s||!s.isStart)&&!n[It]&&(jp(n),i.zOrigin&&n[Cn]&&(n[Cn]+=" "+i.zOrigin+"px",i.zOrigin=0,i.renderTransform()),i.uncache=1)}},em=function(e,t){var n={target:e,props:[],revert:Zg,save:Kg};return e._gsap||Dn.core.getCache(e),t&&e.style&&e.nodeType&&t.split(",").forEach(function(i){return n.save(i)}),n},tm,Kc=function(e,t){var n=cr.createElementNS?cr.createElementNS((t||"http://www.w3.org/1999/xhtml").replace(/^https/,"http"),e):cr.createElement(e);return n&&n.style?n:cr.createElement(e)},Hn=function r(e,t,n){var i=getComputedStyle(e);return i[t]||i.getPropertyValue(t.replace(yf,"-$1").toLowerCase())||i.getPropertyValue(t)||!n&&r(e,Ws(t)||t,1)||""},Th="O,Moz,ms,Ms,Webkit".split(","),Ws=function(e,t,n){var i=t||Nr,s=i.style,a=5;if(e in s&&!n)return e;for(e=e.charAt(0).toUpperCase()+e.substr(1);a--&&!(Th[a]+e in s););return a<0?null:(a===3?"ms":a>=0?Th[a]:"")+e},Zc=function(){Fg()&&window.document&&(Sh=window,cr=Sh.document,Is=cr.documentElement,Nr=Kc("div")||{style:{}},Kc("div"),It=Ws(It),Cn=It+"Origin",Nr.style.cssText="border-width:0;line-height:0;position:absolute;padding:0",tm=!!Ws("perspective"),Sf=Dn.core.reverting,Mf=1)},Eh=function(e){var t=e.ownerSVGElement,n=Kc("svg",t&&t.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),i=e.cloneNode(!0),s;i.style.display="block",n.appendChild(i),Is.appendChild(n);try{s=i.getBBox()}catch{}return n.removeChild(i),Is.removeChild(n),s},wh=function(e,t){for(var n=t.length;n--;)if(e.hasAttribute(t[n]))return e.getAttribute(t[n])},nm=function(e){var t,n;try{t=e.getBBox()}catch{t=Eh(e),n=1}return t&&(t.width||t.height)||n||(t=Eh(e)),t&&!t.width&&!t.x&&!t.y?{x:+wh(e,["x","cx","x1"])||0,y:+wh(e,["y","cy","y1"])||0,width:0,height:0}:t},im=function(e){return!!(e.getCTM&&(!e.parentNode||e.ownerSVGElement)&&nm(e))},gr=function(e,t){if(t){var n=e.style,i;t in qi&&t!==Cn&&(t=It),n.removeProperty?(i=t.substr(0,2),(i==="ms"||t.substr(0,6)==="webkit")&&(t="-"+t),n.removeProperty(i==="--"?t:t.replace(yf,"-$1").toLowerCase())):n.removeAttribute(t)}},ur=function(e,t,n,i,s,a){var o=new Rn(e._pt,t,n,0,1,a?Qp:Jp);return e._pt=o,o.b=i,o.e=s,e._props.push(n),o},Ah={deg:1,rad:1,turn:1},Jg={grid:1,flex:1},xr=function r(e,t,n,i){var s=parseFloat(n)||0,a=(n+"").trim().substr((s+"").length)||"px",o=Nr.style,c=Og.test(t),l=e.tagName.toLowerCase()==="svg",f=(l?"client":"offset")+(c?"Width":"Height"),d=100,h=i==="px",u=i==="%",g,_,m,p;if(i===a||!s||Ah[i]||Ah[a])return s;if(a!=="px"&&!h&&(s=r(e,t,n,"px")),p=e.getCTM&&im(e),(u||a==="%")&&(qi[t]||~t.indexOf("adius")))return g=p?e.getBBox()[c?"width":"height"]:e[f],Bt(u?s/g*d:s/100*g);if(o[c?"width":"height"]=d+(h?a:i),_=i!=="rem"&&~t.indexOf("adius")||i==="em"&&e.appendChild&&!l?e:e.parentNode,p&&(_=(e.ownerSVGElement||{}).parentNode),(!_||_===cr||!_.appendChild)&&(_=cr.body),m=_._gsap,m&&u&&m.width&&c&&m.time===kn.time&&!m.uncache)return Bt(s/m.width*d);if(u&&(t==="height"||t==="width")){var M=e.style[t];e.style[t]=d+i,g=e[f],M?e.style[t]=M:gr(e,t)}else(u||a==="%")&&!Jg[Hn(_,"display")]&&(o.position=Hn(e,"position")),_===e&&(o.position="static"),_.appendChild(Nr),g=Nr[f],_.removeChild(Nr),o.position="absolute";return c&&u&&(m=Vr(_),m.time=kn.time,m.width=_[f]),Bt(h?g*s/d:g&&s?d/g*s:0)},Bi=function(e,t,n,i){var s;return Mf||Zc(),t in bi&&t!=="transform"&&(t=bi[t],~t.indexOf(",")&&(t=t.split(",")[0])),qi[t]&&t!=="transform"?(s=Wa(e,i),s=t!=="transformOrigin"?s[t]:s.svg?s.origin:ll(Hn(e,Cn))+" "+s.zOrigin+"px"):(s=e.style[t],(!s||s==="auto"||i||~(s+"").indexOf("calc("))&&(s=ol[t]&&ol[t](e,t,n)||Hn(e,t)||Sp(e,t)||(t==="opacity"?1:0))),n&&!~(s+"").trim().indexOf(" ")?xr(e,t,s,n)+n:s},Qg=function(e,t,n,i){if(!n||n==="none"){var s=Ws(t,e,1),a=s&&Hn(e,s,1);a&&a!==n?(t=s,n=a):t==="borderColor"&&(n=Hn(e,"borderTopColor"))}var o=new Rn(this._pt,e.style,t,0,1,$p),c=0,l=0,f,d,h,u,g,_,m,p,M,E,S,y;if(o.b=n,o.e=i,n+="",i+="",i.substring(0,6)==="var(--"&&(i=Hn(e,i.substring(4,i.indexOf(")")))),i==="auto"&&(_=e.style[t],e.style[t]=i,i=Hn(e,t)||i,_?e.style[t]=_:gr(e,t)),f=[n,i],zp(f),n=f[0],i=f[1],h=n.match(Cs)||[],y=i.match(Cs)||[],y.length){for(;d=Cs.exec(i);)m=d[0],M=i.substring(c,d.index),g?g=(g+1)%5:(M.substr(-5)==="rgba("||M.substr(-5)==="hsla(")&&(g=1),m!==(_=h[l++]||"")&&(u=parseFloat(_)||0,S=_.substr((u+"").length),m.charAt(1)==="="&&(m=Ls(u,m)+S),p=parseFloat(m),E=m.substr((p+"").length),c=Cs.lastIndex-E.length,E||(E=E||Wn.units[t]||S,c===i.length&&(i+=E,o.e+=E)),S!==E&&(u=xr(e,t,_,E)||0),o._pt={_next:o._pt,p:M||l===1?M:",",s:u,c:p-u,m:g&&g<4||t==="zIndex"?Math.round:0});o.c=c<i.length?i.substring(c,i.length):""}else o.r=t==="display"&&i==="none"?Qp:Jp;return _p.test(i)&&(o.e=0),this._pt=o,o},Rh={top:"0%",bottom:"100%",left:"0%",right:"100%",center:"50%"},jg=function(e){var t=e.split(" "),n=t[0],i=t[1]||"50%";return(n==="top"||n==="bottom"||i==="left"||i==="right")&&(e=n,n=i,i=e),t[0]=Rh[n]||n,t[1]=Rh[i]||i,t.join(" ")},e0=function(e,t){if(t.tween&&t.tween._time===t.tween._dur){var n=t.t,i=n.style,s=t.u,a=n._gsap,o,c,l;if(s==="all"||s===!0)i.cssText="",c=1;else for(s=s.split(","),l=s.length;--l>-1;)o=s[l],qi[o]&&(c=1,o=o==="transformOrigin"?Cn:It),gr(n,o);c&&(gr(n,It),a&&(a.svg&&n.removeAttribute("transform"),i.scale=i.rotate=i.translate="none",Wa(n,1),a.uncache=1,jp(i)))}},ol={clearProps:function(e,t,n,i,s){if(s.data!=="isFromStart"){var a=e._pt=new Rn(e._pt,t,n,0,0,e0);return a.u=i,a.pr=-10,a.tween=s,e._props.push(n),1}}},Ha=[1,0,0,1,0,0],rm={},sm=function(e){return e==="matrix(1, 0, 0, 1, 0, 0)"||e==="none"||!e},Ch=function(e){var t=Hn(e,It);return sm(t)?Ha:t.substr(7).match(mp).map(Bt)},bf=function(e,t){var n=e._gsap||Vr(e),i=e.style,s=Ch(e),a,o,c,l;return n.svg&&e.getAttribute("transform")?(c=e.transform.baseVal.consolidate().matrix,s=[c.a,c.b,c.c,c.d,c.e,c.f],s.join(",")==="1,0,0,1,0,0"?Ha:s):(s===Ha&&!e.offsetParent&&e!==Is&&!n.svg&&(c=i.display,i.display="block",a=e.parentNode,(!a||!e.offsetParent&&!e.getBoundingClientRect().width)&&(l=1,o=e.nextElementSibling,Is.appendChild(e)),s=Ch(e),c?i.display=c:gr(e,"display"),l&&(o?a.insertBefore(e,o):a?a.appendChild(e):Is.removeChild(e))),t&&s.length>6?[s[0],s[1],s[4],s[5],s[12],s[13]]:s)},Jc=function(e,t,n,i,s,a){var o=e._gsap,c=s||bf(e,!0),l=o.xOrigin||0,f=o.yOrigin||0,d=o.xOffset||0,h=o.yOffset||0,u=c[0],g=c[1],_=c[2],m=c[3],p=c[4],M=c[5],E=t.split(" "),S=parseFloat(E[0])||0,y=parseFloat(E[1])||0,w,A,x,b;n?c!==Ha&&(A=u*m-g*_)&&(x=S*(m/A)+y*(-_/A)+(_*M-m*p)/A,b=S*(-g/A)+y*(u/A)-(u*M-g*p)/A,S=x,y=b):(w=nm(e),S=w.x+(~E[0].indexOf("%")?S/100*w.width:S),y=w.y+(~(E[1]||E[0]).indexOf("%")?y/100*w.height:y)),i||i!==!1&&o.smooth?(p=S-l,M=y-f,o.xOffset=d+(p*u+M*_)-p,o.yOffset=h+(p*g+M*m)-M):o.xOffset=o.yOffset=0,o.xOrigin=S,o.yOrigin=y,o.smooth=!!i,o.origin=t,o.originIsAbsolute=!!n,e.style[Cn]="0px 0px",a&&(ur(a,o,"xOrigin",l,S),ur(a,o,"yOrigin",f,y),ur(a,o,"xOffset",d,o.xOffset),ur(a,o,"yOffset",h,o.yOffset)),e.setAttribute("data-svg-origin",S+" "+y)},Wa=function(e,t){var n=e._gsap||new Gp(e);if("x"in n&&!t&&!n.uncache)return n;var i=e.style,s=n.scaleX<0,a="px",o="deg",c=getComputedStyle(e),l=Hn(e,Cn)||"0",f,d,h,u,g,_,m,p,M,E,S,y,w,A,x,b,C,L,N,U,I,G,W,Y,se,Q,oe,ee,_e,ge,Ie,ke;return f=d=h=_=m=p=M=E=S=0,u=g=1,n.svg=!!(e.getCTM&&im(e)),c.translate&&((c.translate!=="none"||c.scale!=="none"||c.rotate!=="none")&&(i[It]=(c.translate!=="none"?"translate3d("+(c.translate+" 0 0").split(" ").slice(0,3).join(", ")+") ":"")+(c.rotate!=="none"?"rotate("+c.rotate+") ":"")+(c.scale!=="none"?"scale("+c.scale.split(" ").join(",")+") ":"")+(c[It]!=="none"?c[It]:"")),i.scale=i.rotate=i.translate="none"),A=bf(e,n.svg),n.svg&&(n.uncache?(se=e.getBBox(),l=n.xOrigin-se.x+"px "+(n.yOrigin-se.y)+"px",Y=""):Y=!t&&e.getAttribute("data-svg-origin"),Jc(e,Y||l,!!Y||n.originIsAbsolute,n.smooth!==!1,A)),y=n.xOrigin||0,w=n.yOrigin||0,A!==Ha&&(L=A[0],N=A[1],U=A[2],I=A[3],f=G=A[4],d=W=A[5],A.length===6?(u=Math.sqrt(L*L+N*N),g=Math.sqrt(I*I+U*U),_=L||N?ls(N,L)*Pr:0,M=U||I?ls(U,I)*Pr+_:0,M&&(g*=Math.abs(Math.cos(M*Us))),n.svg&&(f-=y-(y*L+w*U),d-=w-(y*N+w*I))):(ke=A[6],ge=A[7],oe=A[8],ee=A[9],_e=A[10],Ie=A[11],f=A[12],d=A[13],h=A[14],x=ls(ke,_e),m=x*Pr,x&&(b=Math.cos(-x),C=Math.sin(-x),Y=G*b+oe*C,se=W*b+ee*C,Q=ke*b+_e*C,oe=G*-C+oe*b,ee=W*-C+ee*b,_e=ke*-C+_e*b,Ie=ge*-C+Ie*b,G=Y,W=se,ke=Q),x=ls(-U,_e),p=x*Pr,x&&(b=Math.cos(-x),C=Math.sin(-x),Y=L*b-oe*C,se=N*b-ee*C,Q=U*b-_e*C,Ie=I*C+Ie*b,L=Y,N=se,U=Q),x=ls(N,L),_=x*Pr,x&&(b=Math.cos(x),C=Math.sin(x),Y=L*b+N*C,se=G*b+W*C,N=N*b-L*C,W=W*b-G*C,L=Y,G=se),m&&Math.abs(m)+Math.abs(_)>359.9&&(m=_=0,p=180-p),u=Bt(Math.sqrt(L*L+N*N+U*U)),g=Bt(Math.sqrt(W*W+ke*ke)),x=ls(G,W),M=Math.abs(x)>2e-4?x*Pr:0,S=Ie?1/(Ie<0?-Ie:Ie):0),n.svg&&(Y=e.getAttribute("transform"),n.forceCSS=e.setAttribute("transform","")||!sm(Hn(e,It)),Y&&e.setAttribute("transform",Y))),Math.abs(M)>90&&Math.abs(M)<270&&(s?(u*=-1,M+=_<=0?180:-180,_+=_<=0?180:-180):(g*=-1,M+=M<=0?180:-180)),t=t||n.uncache,n.x=f-((n.xPercent=f&&(!t&&n.xPercent||(Math.round(e.offsetWidth/2)===Math.round(-f)?-50:0)))?e.offsetWidth*n.xPercent/100:0)+a,n.y=d-((n.yPercent=d&&(!t&&n.yPercent||(Math.round(e.offsetHeight/2)===Math.round(-d)?-50:0)))?e.offsetHeight*n.yPercent/100:0)+a,n.z=h+a,n.scaleX=Bt(u),n.scaleY=Bt(g),n.rotation=Bt(_)+o,n.rotationX=Bt(m)+o,n.rotationY=Bt(p)+o,n.skewX=M+o,n.skewY=E+o,n.transformPerspective=S+a,(n.zOrigin=parseFloat(l.split(" ")[2])||!t&&n.zOrigin||0)&&(i[Cn]=ll(l)),n.xOffset=n.yOffset=0,n.force3D=Wn.force3D,n.renderTransform=n.svg?n0:tm?am:t0,n.uncache=0,n},ll=function(e){return(e=e.split(" "))[0]+" "+e[1]},Gl=function(e,t,n){var i=dn(t);return Bt(parseFloat(t)+parseFloat(xr(e,"x",n+"px",i)))+i},t0=function(e,t){t.z="0px",t.rotationY=t.rotationX="0deg",t.force3D=0,am(e,t)},Sr="0deg",na="0px",yr=") ",am=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.z,l=n.rotation,f=n.rotationY,d=n.rotationX,h=n.skewX,u=n.skewY,g=n.scaleX,_=n.scaleY,m=n.transformPerspective,p=n.force3D,M=n.target,E=n.zOrigin,S="",y=p==="auto"&&e&&e!==1||p===!0;if(E&&(d!==Sr||f!==Sr)){var w=parseFloat(f)*Us,A=Math.sin(w),x=Math.cos(w),b;w=parseFloat(d)*Us,b=Math.cos(w),a=Gl(M,a,A*b*-E),o=Gl(M,o,-Math.sin(w)*-E),c=Gl(M,c,x*b*-E+E)}m!==na&&(S+="perspective("+m+yr),(i||s)&&(S+="translate("+i+"%, "+s+"%) "),(y||a!==na||o!==na||c!==na)&&(S+=c!==na||y?"translate3d("+a+", "+o+", "+c+") ":"translate("+a+", "+o+yr),l!==Sr&&(S+="rotate("+l+yr),f!==Sr&&(S+="rotateY("+f+yr),d!==Sr&&(S+="rotateX("+d+yr),(h!==Sr||u!==Sr)&&(S+="skew("+h+", "+u+yr),(g!==1||_!==1)&&(S+="scale("+g+", "+_+yr),M.style[It]=S||"translate(0, 0)"},n0=function(e,t){var n=t||this,i=n.xPercent,s=n.yPercent,a=n.x,o=n.y,c=n.rotation,l=n.skewX,f=n.skewY,d=n.scaleX,h=n.scaleY,u=n.target,g=n.xOrigin,_=n.yOrigin,m=n.xOffset,p=n.yOffset,M=n.forceCSS,E=parseFloat(a),S=parseFloat(o),y,w,A,x,b;c=parseFloat(c),l=parseFloat(l),f=parseFloat(f),f&&(f=parseFloat(f),l+=f,c+=f),c||l?(c*=Us,l*=Us,y=Math.cos(c)*d,w=Math.sin(c)*d,A=Math.sin(c-l)*-h,x=Math.cos(c-l)*h,l&&(f*=Us,b=Math.tan(l-f),b=Math.sqrt(1+b*b),A*=b,x*=b,f&&(b=Math.tan(f),b=Math.sqrt(1+b*b),y*=b,w*=b)),y=Bt(y),w=Bt(w),A=Bt(A),x=Bt(x)):(y=d,x=h,w=A=0),(E&&!~(a+"").indexOf("px")||S&&!~(o+"").indexOf("px"))&&(E=xr(u,"x",a,"px"),S=xr(u,"y",o,"px")),(g||_||m||p)&&(E=Bt(E+g-(g*y+_*A)+m),S=Bt(S+_-(g*w+_*x)+p)),(i||s)&&(b=u.getBBox(),E=Bt(E+i/100*b.width),S=Bt(S+s/100*b.height)),b="matrix("+y+","+w+","+A+","+x+","+E+","+S+")",u.setAttribute("transform",b),M&&(u.style[It]=b)},i0=function(e,t,n,i,s){var a=360,o=nn(s),c=parseFloat(s)*(o&&~s.indexOf("rad")?Pr:1),l=c-i,f=i+l+"deg",d,h;return o&&(d=s.split("_")[1],d==="short"&&(l%=a,l!==l%(a/2)&&(l+=l<0?a:-a)),d==="cw"&&l<0?l=(l+a*bh)%a-~~(l/a)*a:d==="ccw"&&l>0&&(l=(l-a*bh)%a-~~(l/a)*a)),e._pt=h=new Rn(e._pt,t,n,i,l,kg),h.e=f,h.u="deg",e._props.push(n),h},Ph=function(e,t){for(var n in t)e[n]=t[n];return e},r0=function(e,t,n){var i=Ph({},n._gsap),s="perspective,force3D,transformOrigin,svgOrigin",a=n.style,o,c,l,f,d,h,u,g;i.svg?(l=n.getAttribute("transform"),n.setAttribute("transform",""),a[It]=t,o=Wa(n,1),gr(n,It),n.setAttribute("transform",l)):(l=getComputedStyle(n)[It],a[It]=t,o=Wa(n,1),a[It]=l);for(c in qi)l=i[c],f=o[c],l!==f&&s.indexOf(c)<0&&(u=dn(l),g=dn(f),d=u!==g?xr(n,c,l,g):parseFloat(l),h=parseFloat(f),e._pt=new Rn(e._pt,o,c,d,h-d,$c),e._pt.u=g||0,e._props.push(c));Ph(o,i)};An("padding,margin,Width,Radius",function(r,e){var t="Top",n="Right",i="Bottom",s="Left",a=(e<3?[t,n,i,s]:[t+s,t+n,i+n,i+s]).map(function(o){return e<2?r+o:"border"+o+r});ol[e>1?"border"+r:r]=function(o,c,l,f,d){var h,u;if(arguments.length<4)return h=a.map(function(g){return Bi(o,g,l)}),u=h.join(" "),u.split(h[0]).length===5?h[0]:u;h=(f+"").split(" "),u={},a.forEach(function(g,_){return u[g]=h[_]=h[_]||h[(_-1)/2|0]}),o.init(c,u,d)}});var om={name:"css",register:Zc,targetTest:function(e){return e.style&&e.nodeType},init:function(e,t,n,i,s){var a=this._props,o=e.style,c=n.vars.startAt,l,f,d,h,u,g,_,m,p,M,E,S,y,w,A,x,b;Mf||Zc(),this.styles=this.styles||em(e),x=this.styles.props,this.tween=n;for(_ in t)if(_!=="autoRound"&&(f=t[_],!(Fn[_]&&Hp(_,t,n,i,e,s)))){if(u=typeof f,g=ol[_],u==="function"&&(f=f.call(n,i,e,s),u=typeof f),u==="string"&&~f.indexOf("random(")&&(f=za(f)),g)g(this,e,_,f,n)&&(A=1);else if(_.substr(0,2)==="--")l=(getComputedStyle(e).getPropertyValue(_)+"").trim(),f+="",pr.lastIndex=0,pr.test(l)||(m=dn(l),p=dn(f),p?m!==p&&(l=xr(e,_,l,p)+p):m&&(f+=m)),this.add(o,"setProperty",l,f,i,s,0,0,_),a.push(_),x.push(_,0,o[_]);else if(u!=="undefined"){if(c&&_ in c?(l=typeof c[_]=="function"?c[_].call(n,i,e,s):c[_],nn(l)&&~l.indexOf("random(")&&(l=za(l)),dn(l+"")||l==="auto"||(l+=Wn.units[_]||dn(Bi(e,_))||""),(l+"").charAt(1)==="="&&(l=Bi(e,_))):l=Bi(e,_),h=parseFloat(l),M=u==="string"&&f.charAt(1)==="="&&f.substr(0,2),M&&(f=f.substr(2)),d=parseFloat(f),_ in bi&&(_==="autoAlpha"&&(h===1&&Bi(e,"visibility")==="hidden"&&d&&(h=0),x.push("visibility",0,o.visibility),ur(this,o,"visibility",h?"inherit":"hidden",d?"inherit":"hidden",!d)),_!=="scale"&&_!=="transform"&&(_=bi[_],~_.indexOf(",")&&(_=_.split(",")[0]))),E=_ in qi,E){if(this.styles.save(_),b=f,u==="string"&&f.substring(0,6)==="var(--"){if(f=Hn(e,f.substring(4,f.indexOf(")"))),f.substring(0,5)==="calc("){var C=e.style.perspective;e.style.perspective=f,f=Hn(e,"perspective"),C?e.style.perspective=C:gr(e,"perspective")}d=parseFloat(f)}if(S||(y=e._gsap,y.renderTransform&&!t.parseTransform||Wa(e,t.parseTransform),w=t.smoothOrigin!==!1&&y.smooth,S=this._pt=new Rn(this._pt,o,It,0,1,y.renderTransform,y,0,-1),S.dep=1),_==="scale")this._pt=new Rn(this._pt,y,"scaleY",y.scaleY,(M?Ls(y.scaleY,M+d):d)-y.scaleY||0,$c),this._pt.u=0,a.push("scaleY",_),_+="X";else if(_==="transformOrigin"){x.push(Cn,0,o[Cn]),f=jg(f),y.svg?Jc(e,f,0,w,0,this):(p=parseFloat(f.split(" ")[2])||0,p!==y.zOrigin&&ur(this,y,"zOrigin",y.zOrigin,p),ur(this,o,_,ll(l),ll(f)));continue}else if(_==="svgOrigin"){Jc(e,f,1,w,0,this);continue}else if(_ in rm){i0(this,y,_,h,M?Ls(h,M+f):f);continue}else if(_==="smoothOrigin"){ur(this,y,"smooth",y.smooth,f);continue}else if(_==="force3D"){y[_]=f;continue}else if(_==="transform"){r0(this,f,e);continue}}else _ in o||(_=Ws(_)||_);if(E||(d||d===0)&&(h||h===0)&&!Bg.test(f)&&_ in o)m=(l+"").substr((h+"").length),d||(d=0),p=dn(f)||(_ in Wn.units?Wn.units[_]:m),m!==p&&(h=xr(e,_,l,p)),this._pt=new Rn(this._pt,E?y:o,_,h,(M?Ls(h,M+d):d)-h,!E&&(p==="px"||_==="zIndex")&&t.autoRound!==!1?Gg:$c),this._pt.u=p||0,E&&b!==f?(this._pt.b=l,this._pt.e=b,this._pt.r=Vg):m!==p&&p!=="%"&&(this._pt.b=l,this._pt.r=zg);else if(_ in o)Qg.call(this,e,_,l,M?M+f:f);else if(_ in e)this.add(e,_,l||e[_],M?M+f:f,i,s);else if(_!=="parseTransform"){uf(_,f);continue}E||(_ in o?x.push(_,0,o[_]):typeof e[_]=="function"?x.push(_,2,e[_]()):x.push(_,1,l||e[_])),a.push(_)}}A&&Kp(this)},render:function(e,t){if(t.tween._time||!Sf())for(var n=t._pt;n;)n.r(e,n.d),n=n._next;else t.styles.revert()},get:Bi,aliases:bi,getSetter:function(e,t,n){var i=bi[t];return i&&i.indexOf(",")<0&&(t=i),t in qi&&t!==Cn&&(e._gsap.x||Bi(e,"x"))?n&&yh===n?t==="scale"?Yg:Xg:(yh=n||{})&&(t==="scale"?qg:$g):e.style&&!of(e.style[t])?Hg:~t.indexOf("-")?Wg:xf(e,t)},core:{_removeProperty:gr,_getMatrix:bf}};Dn.utils.checkPrefix=Ws;Dn.core.getStyleSaver=em;(function(r,e,t,n){var i=An(r+","+e+","+t,function(s){qi[s]=1});An(e,function(s){Wn.units[s]="deg",rm[s]=1}),bi[i[13]]=r+","+e,An(n,function(s){var a=s.split(":");bi[a[1]]=i[a[0]]})})("x,y,z,scale,scaleX,scaleY,xPercent,yPercent","rotation,rotationX,rotationY,skewX,skewY","transform,transformOrigin,svgOrigin,force3D,smoothOrigin,transformPerspective","0:translateX,1:translateY,2:translateZ,8:rotate,8:rotationZ,8:rotateZ,9:rotateX,10:rotateY");An("x,y,z,top,right,bottom,left,width,height,fontSize,padding,margin,perspective",function(r){Wn.units[r]="px"});Dn.registerPlugin(om);var fn=Dn.registerPlugin(om)||Dn;fn.core.Tween;var Vi,Xr,Tf,Al,xa,Ho,cl,Ca,ui="transform",Qc=ui+"Origin",lm,cm=function(e){var t=e.ownerDocument||e;for(!(ui in e.style)&&("msTransform"in e.style)&&(ui="msTransform",Qc=ui+"Origin");t.parentNode&&(t=t.parentNode););if(Xr=window,cl=new Kr,t){Vi=t,Tf=t.documentElement,Al=t.body,Ca=Vi.createElementNS("http://www.w3.org/2000/svg","g"),Ca.style.transform="none";var n=t.createElement("div"),i=t.createElement("div"),s=t&&(t.body||t.firstElementChild);s&&s.appendChild&&(s.appendChild(n),n.appendChild(i),n.style.position="static",n.style.transform="translate3d(0,0,1px)",lm=i.offsetParent!==n,s.removeChild(n))}return t},s0=function(e){for(var t,n;e&&e!==Al;)n=e._gsap,n&&n.uncache&&n.get(e,"x"),n&&!n.scaleX&&!n.scaleY&&n.renderTransform&&(n.scaleX=n.scaleY=1e-4,n.renderTransform(1,n),t?t.push(n):t=[n]),e=e.parentNode;return t},um=[],fm=[],a0=function(){return Xr.pageYOffset||Vi.scrollTop||Tf.scrollTop||Al.scrollTop||0},o0=function(){return Xr.pageXOffset||Vi.scrollLeft||Tf.scrollLeft||Al.scrollLeft||0},Ef=function(e){return e.ownerSVGElement||((e.tagName+"").toLowerCase()==="svg"?e:null)},l0=function r(e){if(Xr.getComputedStyle(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return r(e)},Hl=function r(e,t){if(e.parentNode&&(Vi||cm(e))){var n=Ef(e),i=n?n.getAttribute("xmlns")||"http://www.w3.org/2000/svg":"http://www.w3.org/1999/xhtml",s=n?t?"rect":"g":"div",a=t!==2?0:100,o=t===3?100:0,c={position:"absolute",display:"block",pointerEvents:"none",margin:"0",padding:"0"},l=Vi.createElementNS?Vi.createElementNS(i.replace(/^https/,"http"),s):Vi.createElement(s);return t&&(n?(Ho||(Ho=r(e)),l.setAttribute("width",.01),l.setAttribute("height",.01),l.setAttribute("transform","translate("+a+","+o+")"),l.setAttribute("fill","transparent"),Ho.appendChild(l)):(xa||(xa=r(e),Object.assign(xa.style,c)),Object.assign(l.style,c,{width:"0.1px",height:"0.1px",top:o+"px",left:a+"px"}),xa.appendChild(l))),l}throw"Need document and parent."},c0=function(e){for(var t=new Kr,n=0;n<e.numberOfItems;n++)t.multiply(e.getItem(n).matrix);return t},u0=function(e){var t=e.getCTM(),n;return t||(n=e.style[ui],e.style[ui]="none",e.appendChild(Ca),t=Ca.getCTM(),e.removeChild(Ca),n?e.style[ui]=n:e.style.removeProperty(ui.replace(/([A-Z])/g,"-$1").toLowerCase())),t||cl.clone()},f0=function(e,t){var n=Ef(e),i=e===n,s=n?um:fm,a=e.parentNode,o=a&&!n&&a.shadowRoot&&a.shadowRoot.appendChild?a.shadowRoot:a,c,l,f,d,h,u;if(e===Xr)return e;if(s.length||s.push(Hl(e,1),Hl(e,2),Hl(e,3)),c=n?Ho:xa,n)i?(f=u0(e),d=-f.e/f.a,h=-f.f/f.d,l=cl):e.getBBox?(f=e.getBBox(),l=e.transform?e.transform.baseVal:{},l=l.numberOfItems?l.numberOfItems>1?c0(l):l.getItem(0).matrix:cl,d=l.a*f.x+l.c*f.y,h=l.b*f.x+l.d*f.y):(l=new Kr,d=h=0),(i||!e.getBoundingClientRect().width?n:a).appendChild(c),c.setAttribute("transform","matrix("+l.a+","+l.b+","+l.c+","+l.d+","+(l.e+d)+","+(l.f+h)+")");else{if(d=h=0,lm)for(l=e.offsetParent,f=e;f&&(f=f.parentNode)&&f!==l&&f.parentNode;)(Xr.getComputedStyle(f)[ui]+"").length>4&&(d=f.offsetLeft,h=f.offsetTop,f=0);if(u=Xr.getComputedStyle(e),u.position!=="absolute"&&u.position!=="fixed")for(l=e.offsetParent;a&&a!==l;)d+=a.scrollLeft||0,h+=a.scrollTop||0,a=a.parentNode;f=c.style,f.top=e.offsetTop-h+"px",f.left=e.offsetLeft-d+"px",f[ui]=u[ui],f[Qc]=u[Qc],f.position=u.position==="fixed"?"fixed":"absolute",o.appendChild(c)}return c},Wl=function(e,t,n,i,s,a,o){return e.a=t,e.b=n,e.c=i,e.d=s,e.e=a,e.f=o,e},Kr=(function(){function r(t,n,i,s,a,o){t===void 0&&(t=1),n===void 0&&(n=0),i===void 0&&(i=0),s===void 0&&(s=1),a===void 0&&(a=0),o===void 0&&(o=0),Wl(this,t,n,i,s,a,o)}var e=r.prototype;return e.inverse=function(){var n=this.a,i=this.b,s=this.c,a=this.d,o=this.e,c=this.f,l=n*a-i*s||1e-10;return Wl(this,a/l,-i/l,-s/l,n/l,(s*c-a*o)/l,-(n*c-i*o)/l)},e.multiply=function(n){var i=this.a,s=this.b,a=this.c,o=this.d,c=this.e,l=this.f,f=n.a,d=n.c,h=n.b,u=n.d,g=n.e,_=n.f;return Wl(this,f*i+h*a,f*s+h*o,d*i+u*a,d*s+u*o,c+g*i+_*a,l+g*s+_*o)},e.clone=function(){return new r(this.a,this.b,this.c,this.d,this.e,this.f)},e.equals=function(n){var i=this.a,s=this.b,a=this.c,o=this.d,c=this.e,l=this.f;return i===n.a&&s===n.b&&a===n.c&&o===n.d&&c===n.e&&l===n.f},e.apply=function(n,i){i===void 0&&(i={});var s=n.x,a=n.y,o=this.a,c=this.b,l=this.c,f=this.d,d=this.e,h=this.f;return i.x=s*o+a*l+d||0,i.y=s*c+a*f+h||0,i},r})();function Dr(r,e,t,n){if(!r||!r.parentNode||(Vi||cm(r)).documentElement===r)return new Kr;var i=s0(r),s=Ef(r),a=s?um:fm,o=f0(r),c=a[0].getBoundingClientRect(),l=a[1].getBoundingClientRect(),f=a[2].getBoundingClientRect(),d=o.parentNode,h=l0(r),u=new Kr((l.left-c.left)/100,(l.top-c.top)/100,(f.left-c.left)/100,(f.top-c.top)/100,c.left+(h?0:o0()),c.top+(h?0:a0()));if(d.removeChild(o),i)for(c=i.length;c--;)l=i[c],l.scaleX=l.scaleY=0,l.renderTransform(1,l);return e?u.inverse():u}function Dh(r){if(r===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return r}function h0(r,e){r.prototype=Object.create(e.prototype),r.prototype.constructor=r,r.__proto__=e}var tt,vt,zn,di,Gi,Xl,ki,jc,va,fr,hm,eu,Xa,wf,Ma,Un,Sa,Wo,dm,tu,ul=0,pm=function(){return typeof window<"u"},mm=function(){return tt||pm()&&(tt=window.gsap)&&tt.registerPlugin&&tt},sr=function(e){return typeof e=="function"},Pa=function(e){return typeof e=="object"},li=function(e){return typeof e>"u"},Xo=function(){return!1},Da="transform",nu="transformOrigin",Mn=function(e){return Math.round(e*1e4)/1e4},ia=Array.isArray,ao=function(e,t){var n=zn.createElementNS?zn.createElementNS("http://www.w3.org/1999/xhtml".replace(/^https/,"http"),e):zn.createElement(e);return n.style?n:zn.createElement(e)},Lh=180/Math.PI,br=1e20,d0=new Kr,ji=Date.now||function(){return new Date().getTime()},Yr=[],Ns={},p0=0,m0=/^(?:a|input|textarea|button|select)$/i,Ih=0,cs={},Fi={},_m=function(e,t){var n={},i;for(i in e)n[i]=t?e[i]*t:e[i];return n},_0=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Uh=function r(e,t){for(var n=e.length,i;n--;)t?e[n].style.touchAction=t:e[n].style.removeProperty("touch-action"),i=e[n].children,i&&i.length&&r(i,t)},gm=function(){return Yr.forEach(function(e){return e()})},g0=function(e){Yr.push(e),Yr.length===1&&tt.ticker.add(gm)},Nh=function(){return!Yr.length&&tt.ticker.remove(gm)},Fh=function(e){for(var t=Yr.length;t--;)Yr[t]===e&&Yr.splice(t,1);tt.to(Nh,{overwrite:!0,delay:15,duration:0,onComplete:Nh,data:"_draggable"})},x0=function(e,t){for(var n in t)n in e||(e[n]=t[n]);return e},Yt=function(e,t,n,i){if(e.addEventListener){var s=Xa[t];i=i||(hm?{passive:!1}:null),e.addEventListener(s||t,n,i),s&&t!==s&&e.addEventListener(t,n,i)}},Ht=function(e,t,n,i){if(e.removeEventListener){var s=Xa[t];e.removeEventListener(s||t,n,i),s&&t!==s&&e.removeEventListener(t,n,i)}},Jn=function(e){e.preventDefault&&e.preventDefault(),e.preventManipulation&&e.preventManipulation()},v0=function(e,t){for(var n=e.length;n--;)if(e[n].identifier===t)return!0},M0=function r(e){wf=e.touches&&ul<e.touches.length,Ht(e.target,"touchend",r)},Oh=function(e){wf=e.touches&&ul<e.touches.length,Yt(e.target,"touchend",M0)},Fs=function(e){return vt.pageYOffset||e.scrollTop||e.documentElement.scrollTop||e.body.scrollTop||0},Os=function(e){return vt.pageXOffset||e.scrollLeft||e.documentElement.scrollLeft||e.body.scrollLeft||0},Bh=function r(e,t){Yt(e,"scroll",t),Xs(e.parentNode)||r(e.parentNode,t)},kh=function r(e,t){Ht(e,"scroll",t),Xs(e.parentNode)||r(e.parentNode,t)},Xs=function(e){return!e||e===di||e.nodeType===9||e===zn.body||e===vt||!e.nodeType||!e.parentNode},zh=function(e,t){var n=t==="x"?"Width":"Height",i="scroll"+n,s="client"+n;return Math.max(0,Xs(e)?Math.max(di[i],Gi[i])-(vt["inner"+n]||di[s]||Gi[s]):e[i]-e[s])},Yl=function r(e,t){var n=zh(e,"x"),i=zh(e,"y");Xs(e)?e=Fi:r(e.parentNode,t),e._gsMaxScrollX=n,e._gsMaxScrollY=i,t||(e._gsScrollX=e.scrollLeft||0,e._gsScrollY=e.scrollTop||0)},ql=function(e,t,n){var i=e.style;i&&(li(i[t])&&(t=va(t,e)||t),n==null?i.removeProperty&&i.removeProperty(t.replace(/([A-Z])/g,"-$1").toLowerCase()):i[t]=n)},Ya=function(e){return vt.getComputedStyle(e instanceof Element?e:e.host||(e.parentNode||{}).host||e)},Tr={},us=function(e){if(e===vt)return Tr.left=Tr.top=0,Tr.width=Tr.right=di.clientWidth||e.innerWidth||Gi.clientWidth||0,Tr.height=Tr.bottom=(e.innerHeight||0)-20<di.clientHeight?di.clientHeight:e.innerHeight||Gi.clientHeight||0,Tr;var t=e.ownerDocument||zn,n=li(e.pageX)?!e.nodeType&&!li(e.left)&&!li(e.top)?e:fr(e)[0].getBoundingClientRect():{left:e.pageX-Os(t),top:e.pageY-Fs(t),right:e.pageX-Os(t)+1,bottom:e.pageY-Fs(t)+1};return li(n.right)&&!li(n.width)?(n.right=n.left+n.width,n.bottom=n.top+n.height):li(n.width)&&(n={width:n.right-n.left,height:n.bottom-n.top,right:n.right,left:n.left,bottom:n.bottom,top:n.top}),n},Ot=function(e,t,n){var i=e.vars,s=i[n],a=e._listeners[t],o;return sr(s)&&(o=s.apply(i.callbackScope||e,i[n+"Params"]||[e.pointerEvent])),a&&e.dispatchEvent(t)===!1&&(o=!1),o},Vh=function(e,t){var n=fr(e)[0],i,s,a;return!n.nodeType&&n!==vt?li(e.left)?(s=e.min||e.minX||e.minRotation||0,i=e.min||e.minY||0,{left:s,top:i,width:(e.max||e.maxX||e.maxRotation||0)-s,height:(e.max||e.maxY||0)-i}):(a={x:0,y:0},{left:e.left-a.x,top:e.top-a.y,width:e.width,height:e.height}):S0(n,t)},Qn={},S0=function(e,t){t=fr(t)[0];var n=e.getBBox&&e.ownerSVGElement,i=e.ownerDocument||zn,s,a,o,c,l,f,d,h,u,g,_,m,p;if(e===vt)o=Fs(i),s=Os(i),a=s+(i.documentElement.clientWidth||e.innerWidth||i.body.clientWidth||0),c=o+((e.innerHeight||0)-20<i.documentElement.clientHeight?i.documentElement.clientHeight:e.innerHeight||i.body.clientHeight||0);else{if(t===vt||li(t))return e.getBoundingClientRect();s=o=0,n?(g=e.getBBox(),_=g.width,m=g.height):(e.viewBox&&(g=e.viewBox.baseVal)&&(s=g.x||0,o=g.y||0,_=g.width,m=g.height),_||(p=Ya(e),g=p.boxSizing==="border-box",_=(parseFloat(p.width)||e.clientWidth||0)+(g?0:parseFloat(p.borderLeftWidth)+parseFloat(p.borderRightWidth)),m=(parseFloat(p.height)||e.clientHeight||0)+(g?0:parseFloat(p.borderTopWidth)+parseFloat(p.borderBottomWidth)))),a=_,c=m}return e===t?{left:s,top:o,width:a-s,height:c-o}:(l=Dr(t,!0).multiply(Dr(e)),f=l.apply({x:s,y:o}),d=l.apply({x:a,y:o}),h=l.apply({x:a,y:c}),u=l.apply({x:s,y:c}),s=Math.min(f.x,d.x,h.x,u.x),o=Math.min(f.y,d.y,h.y,u.y),{left:s,top:o,width:Math.max(f.x,d.x,h.x,u.x)-s,height:Math.max(f.y,d.y,h.y,u.y)-o})},$l=function(e,t,n,i,s,a){var o={},c,l,f;if(t)if(s!==1&&t instanceof Array){if(o.end=c=[],f=t.length,Pa(t[0]))for(l=0;l<f;l++)c[l]=_m(t[l],s);else for(l=0;l<f;l++)c[l]=t[l]*s;n+=1.1,i-=1.1}else sr(t)?o.end=function(d){var h=t.call(e,d),u,g;if(s!==1)if(Pa(h)){u={};for(g in h)u[g]=h[g]*s;h=u}else h*=s;return h}:o.end=t;return(n||n===0)&&(o.max=n),(i||i===0)&&(o.min=i),a&&(o.velocity=0),o},y0=function r(e){var t;return!e||!e.getAttribute||e===Gi?!1:(t=e.getAttribute("data-clickable"))==="true"||t!=="false"&&(m0.test(e.nodeName+"")||e.getAttribute("contentEditable")==="true")?!0:r(e.parentNode)},oo=function(e,t){for(var n=e.length,i;n--;)i=e[n],i.ondragstart=i.onselectstart=t?null:Xo,tt.set(i,{lazy:!0,userSelect:t?"text":"none"})},b0=function r(e){if(Ya(e).position==="fixed")return!0;if(e=e.parentNode,e&&e.nodeType===1)return r(e)},xm,iu,T0=function(e,t){e=tt.utils.toArray(e)[0],t=t||{};var n=document.createElement("div"),i=n.style,s=e.firstChild,a=0,o=0,c=e.scrollTop,l=e.scrollLeft,f=e.scrollWidth,d=e.scrollHeight,h=0,u=0,g=0,_,m,p,M,E,S;xm&&t.force3D!==!1?(E="translate3d(",S="px,0px)"):Da&&(E="translate(",S="px)"),this.scrollTop=function(y,w){if(!arguments.length)return-this.top();this.top(-y,w)},this.scrollLeft=function(y,w){if(!arguments.length)return-this.left();this.left(-y,w)},this.left=function(y,w){if(!arguments.length)return-(e.scrollLeft+o);var A=e.scrollLeft-l,x=o;if((A>2||A<-2)&&!w){l=e.scrollLeft,tt.killTweensOf(this,{left:1,scrollLeft:1}),this.left(-l),t.onKill&&t.onKill();return}y=-y,y<0?(o=y-.5|0,y=0):y>u?(o=y-u|0,y=u):o=0,(o||x)&&(this._skip||(i[Da]=E+-o+"px,"+-a+S),o+h>=0&&(i.paddingRight=o+h+"px")),e.scrollLeft=y|0,l=e.scrollLeft},this.top=function(y,w){if(!arguments.length)return-(e.scrollTop+a);var A=e.scrollTop-c,x=a;if((A>2||A<-2)&&!w){c=e.scrollTop,tt.killTweensOf(this,{top:1,scrollTop:1}),this.top(-c),t.onKill&&t.onKill();return}y=-y,y<0?(a=y-.5|0,y=0):y>g?(a=y-g|0,y=g):a=0,(a||x)&&(this._skip||(i[Da]=E+-o+"px,"+-a+S)),e.scrollTop=y|0,c=e.scrollTop},this.maxScrollTop=function(){return g},this.maxScrollLeft=function(){return u},this.disable=function(){for(s=n.firstChild;s;)M=s.nextSibling,e.appendChild(s),s=M;e===n.parentNode&&e.removeChild(n)},this.enable=function(){if(s=e.firstChild,s!==n){for(;s;)M=s.nextSibling,n.appendChild(s),s=M;e.appendChild(n),this.calibrate()}},this.calibrate=function(y){var w=e.clientWidth===_,A,x,b;c=e.scrollTop,l=e.scrollLeft,!(w&&e.clientHeight===m&&n.offsetHeight===p&&f===e.scrollWidth&&d===e.scrollHeight&&!y)&&((a||o)&&(x=this.left(),b=this.top(),this.left(-e.scrollLeft),this.top(-e.scrollTop)),A=Ya(e),(!w||y)&&(i.display="block",i.width="auto",i.paddingRight="0px",h=Math.max(0,e.scrollWidth-e.clientWidth),h&&(h+=parseFloat(A.paddingLeft)+(iu?parseFloat(A.paddingRight):0))),i.display="inline-block",i.position="relative",i.overflow="visible",i.verticalAlign="top",i.boxSizing="content-box",i.width="100%",i.paddingRight=h+"px",iu&&(i.paddingBottom=A.paddingBottom),_=e.clientWidth,m=e.clientHeight,f=e.scrollWidth,d=e.scrollHeight,u=e.scrollWidth-_,g=e.scrollHeight-m,p=n.offsetHeight,i.display="block",(x||b)&&(this.left(x),this.top(b)))},this.content=n,this.element=e,this._skip=!1,this.enable()},Kl=function(e){if(pm()&&document.body){var t=window&&window.navigator;vt=window,zn=document,di=zn.documentElement,Gi=zn.body,Xl=ao("div"),Wo=!!window.PointerEvent,ki=ao("div"),ki.style.cssText="visibility:hidden;height:1px;top:-1px;pointer-events:none;position:relative;clear:both;cursor:grab",Sa=ki.style.cursor==="grab"?"grab":"move",Ma=t&&t.userAgent.toLowerCase().indexOf("android")!==-1,eu="ontouchstart"in di&&"orientation"in vt||t&&(t.MaxTouchPoints>0||t.msMaxTouchPoints>0),iu=(function(){var n=ao("div"),i=ao("div"),s=i.style,a=Gi,o;return s.display="inline-block",s.position="relative",n.style.cssText="width:90px;height:40px;padding:10px;overflow:auto;visibility:hidden",n.appendChild(i),a.appendChild(n),o=i.offsetHeight+18>n.scrollHeight,a.removeChild(n),o})(),Xa=(function(n){for(var i=n.split(","),s=("onpointerdown"in Xl?"pointerdown,pointermove,pointerup,pointercancel":"onmspointerdown"in Xl?"MSPointerDown,MSPointerMove,MSPointerUp,MSPointerCancel":n).split(","),a={},o=4;--o>-1;)a[i[o]]=s[o],a[s[o]]=i[o];try{di.addEventListener("test",null,Object.defineProperty({},"passive",{get:function(){hm=1}}))}catch{}return a})("touchstart,touchmove,touchend,touchcancel"),Yt(zn,"touchcancel",Xo),Yt(vt,"touchmove",Xo),Gi&&Gi.addEventListener("touchstart",Xo),Yt(zn,"contextmenu",function(){for(var n in Ns)Ns[n].isPressed&&Ns[n].endDrag()}),tt=jc=mm()}tt?(Un=tt.plugins.inertia,dm=tt.core.context||function(){},va=tt.utils.checkPrefix,Da=va(Da),nu=va(nu),fr=tt.utils.toArray,tu=tt.core.getStyleSaver,xm=!!va("perspective")):e&&console.warn("Please gsap.registerPlugin(Draggable)")},E0=(function(){function r(t){this._listeners={},this.target=t||this}var e=r.prototype;return e.addEventListener=function(n,i){var s=this._listeners[n]||(this._listeners[n]=[]);~s.indexOf(i)||s.push(i)},e.removeEventListener=function(n,i){var s=this._listeners[n],a=s&&s.indexOf(i);a>=0&&s.splice(a,1)},e.dispatchEvent=function(n){var i=this,s;return(this._listeners[n]||[]).forEach(function(a){return a.call(i,{type:n,target:i.target})===!1&&(s=!1)}),s},r})(),Js=(function(r){h0(e,r);function e(t,n){var i;i=r.call(this)||this,jc||Kl(1),t=fr(t)[0],i.styles=tu&&tu(t,"transform,left,top"),Un||(Un=tt.plugins.inertia),i.vars=n=_m(n||{}),i.target=t,i.x=i.y=i.rotation=0,i.dragResistance=parseFloat(n.dragResistance)||0,i.edgeResistance=isNaN(n.edgeResistance)?1:parseFloat(n.edgeResistance)||0,i.lockAxis=n.lockAxis,i.autoScroll=n.autoScroll||0,i.lockedAxis=null,i.allowEventDefault=!!n.allowEventDefault,tt.getProperty(t,"x");var s=(n.type||"x,y").toLowerCase(),a=~s.indexOf("x")||~s.indexOf("y"),o=s.indexOf("rotation")!==-1,c=o?"rotation":a?"x":"left",l=a?"y":"top",f=!!(~s.indexOf("x")||~s.indexOf("left")||s==="scroll"),d=!!(~s.indexOf("y")||~s.indexOf("top")||s==="scroll"),h=n.minimumMovement||2,u=Dh(i),g=fr(n.trigger||n.handle||t),_={},m=0,p=!1,M=n.autoScrollMarginTop||40,E=n.autoScrollMarginRight||40,S=n.autoScrollMarginBottom||40,y=n.autoScrollMarginLeft||40,w=n.clickableTest||y0,A=0,x=t._gsap||tt.core.getCache(t),b=b0(t),C=function(P,O){return parseFloat(x.get(t,P,O))},L=t.ownerDocument||zn,N,U,I,G,W,Y,se,Q,oe,ee,_e,ge,Ie,ke,Ge,j,te,me,Oe,xe,Ve,mt,Ue,Me,Qe,Be,Ye,St,zt,ut,Ze,z,Ct,rt=function(P){return Jn(P),P.stopImmediatePropagation&&P.stopImmediatePropagation(),!1},R=function ne(P){if(u.autoScroll&&u.isDragging&&(p||te)){var O=t,V=u.autoScroll*15,Z,he,pe,ze,Re,ft,je,lt;for(p=!1,Fi.scrollTop=vt.pageYOffset!=null?vt.pageYOffset:L.documentElement.scrollTop!=null?L.documentElement.scrollTop:L.body.scrollTop,Fi.scrollLeft=vt.pageXOffset!=null?vt.pageXOffset:L.documentElement.scrollLeft!=null?L.documentElement.scrollLeft:L.body.scrollLeft,ze=u.pointerX-Fi.scrollLeft,Re=u.pointerY-Fi.scrollTop;O&&!he;)he=Xs(O.parentNode),Z=he?Fi:O.parentNode,pe=he?{bottom:Math.max(di.clientHeight,vt.innerHeight||0),right:Math.max(di.clientWidth,vt.innerWidth||0),left:0,top:0}:Z.getBoundingClientRect(),ft=je=0,d&&(lt=Z._gsMaxScrollY-Z.scrollTop,lt<0?je=lt:Re>pe.bottom-S&&lt?(p=!0,je=Math.min(lt,V*(1-Math.max(0,pe.bottom-Re)/S)|0)):Re<pe.top+M&&Z.scrollTop&&(p=!0,je=-Math.min(Z.scrollTop,V*(1-Math.max(0,Re-pe.top)/M)|0)),je&&(Z.scrollTop+=je)),f&&(lt=Z._gsMaxScrollX-Z.scrollLeft,lt<0?ft=lt:ze>pe.right-E&&lt?(p=!0,ft=Math.min(lt,V*(1-Math.max(0,pe.right-ze)/E)|0)):ze<pe.left+y&&Z.scrollLeft&&(p=!0,ft=-Math.min(Z.scrollLeft,V*(1-Math.max(0,ze-pe.left)/y)|0)),ft&&(Z.scrollLeft+=ft)),he&&(ft||je)&&(vt.scrollTo(Z.scrollLeft,Z.scrollTop),we(u.pointerX+ft,u.pointerY+je)),O=Z}if(te){var Tt=u.x,Jt=u.y;o?(u.deltaX=Tt-parseFloat(x.rotation),u.rotation=Tt,x.rotation=Tt+"deg",x.renderTransform(1,x)):U?(d&&(u.deltaY=Jt-U.top(),U.top(Jt)),f&&(u.deltaX=Tt-U.left(),U.left(Tt))):a?(d&&(u.deltaY=Jt-parseFloat(x.y),x.y=Jt+"px"),f&&(u.deltaX=Tt-parseFloat(x.x),x.x=Tt+"px"),x.renderTransform(1,x)):(d&&(u.deltaY=Jt-parseFloat(t.style.top||0),t.style.top=Jt+"px"),f&&(u.deltaX=Tt-parseFloat(t.style.left||0),t.style.left=Tt+"px")),Q&&!P&&!St&&(St=!0,Ot(u,"drag","onDrag")===!1&&(f&&(u.x-=u.deltaX),d&&(u.y-=u.deltaY),ne(!0)),St=!1)}te=!1},v=function(P,O){var V=u.x,Z=u.y,he,pe;t._gsap||(x=tt.core.getCache(t)),x.uncache&&tt.getProperty(t,"x"),a?(u.x=parseFloat(x.x),u.y=parseFloat(x.y)):o?u.x=u.rotation=Mn(parseFloat(x.rotation)):U?(u.y=U.top(),u.x=U.left()):(u.y=parseFloat(t.style.top||(pe=Ya(t))&&pe.top)||0,u.x=parseFloat(t.style.left||(pe||{}).left)||0),(Oe||xe||Ve)&&!O&&(u.isDragging||u.isThrowing)&&(Ve&&(cs.x=u.x,cs.y=u.y,he=Ve(cs),he.x!==u.x&&(u.x=he.x,te=!0),he.y!==u.y&&(u.y=he.y,te=!0)),Oe&&(he=Oe(u.x),he!==u.x&&(u.x=he,o&&(u.rotation=he),te=!0)),xe&&(he=xe(u.y),he!==u.y&&(u.y=he),te=!0)),te&&R(!0),P||(u.deltaX=u.x-V,u.deltaY=u.y-Z,Ot(u,"throwupdate","onThrowUpdate"))},D=function(P,O,V,Z){return O==null&&(O=-br),V==null&&(V=br),sr(P)?function(he){var pe=u.isPressed?1-u.edgeResistance:1;return P.call(u,(he>V?V+(he-V)*pe:he<O?O+(he-O)*pe:he)*Z)*Z}:ia(P)?function(he){for(var pe=P.length,ze=0,Re=br,ft,je;--pe>-1;)ft=P[pe],je=ft-he,je<0&&(je=-je),je<Re&&ft>=O&&ft<=V&&(ze=pe,Re=je);return P[ze]}:isNaN(P)?function(he){return he}:function(){return P*Z}},F=function(P,O,V,Z,he,pe,ze){return pe=pe&&pe<br?pe*pe:br,sr(P)?function(Re){var ft=u.isPressed?1-u.edgeResistance:1,je=Re.x,lt=Re.y,Tt,Jt,Kn;return Re.x=je=je>V?V+(je-V)*ft:je<O?O+(je-O)*ft:je,Re.y=lt=lt>he?he+(lt-he)*ft:lt<Z?Z+(lt-Z)*ft:lt,Tt=P.call(u,Re),Tt!==Re&&(Re.x=Tt.x,Re.y=Tt.y),ze!==1&&(Re.x*=ze,Re.y*=ze),pe<br&&(Jt=Re.x-je,Kn=Re.y-lt,Jt*Jt+Kn*Kn>pe&&(Re.x=je,Re.y=lt)),Re}:ia(P)?function(Re){for(var ft=P.length,je=0,lt=br,Tt,Jt,Kn,xn;--ft>-1;)Kn=P[ft],Tt=Kn.x-Re.x,Jt=Kn.y-Re.y,xn=Tt*Tt+Jt*Jt,xn<lt&&(je=ft,lt=xn);return lt<=pe?P[je]:Re}:function(Re){return Re}},H=function(){var P,O,V,Z;se=!1,U?(U.calibrate(),u.minX=_e=-U.maxScrollLeft(),u.minY=Ie=-U.maxScrollTop(),u.maxX=ee=u.maxY=ge=0,se=!0):n.bounds&&(P=Vh(n.bounds,t.parentNode),o?(u.minX=_e=P.left,u.maxX=ee=P.left+P.width,u.minY=Ie=u.maxY=ge=0):!li(n.bounds.maxX)||!li(n.bounds.maxY)?(P=n.bounds,u.minX=_e=P.minX,u.minY=Ie=P.minY,u.maxX=ee=P.maxX,u.maxY=ge=P.maxY):(O=Vh(t,t.parentNode),u.minX=_e=Math.round(C(c,"px")+P.left-O.left),u.minY=Ie=Math.round(C(l,"px")+P.top-O.top),u.maxX=ee=Math.round(_e+(P.width-O.width)),u.maxY=ge=Math.round(Ie+(P.height-O.height))),_e>ee&&(u.minX=ee,u.maxX=ee=_e,_e=u.minX),Ie>ge&&(u.minY=ge,u.maxY=ge=Ie,Ie=u.minY),o&&(u.minRotation=_e,u.maxRotation=ee),se=!0),n.liveSnap&&(V=n.liveSnap===!0?n.snap||{}:n.liveSnap,Z=ia(V)||sr(V),o?(Oe=D(Z?V:V.rotation,_e,ee,1),xe=null):V.points?Ve=F(Z?V:V.points,_e,ee,Ie,ge,V.radius,U?-1:1):(f&&(Oe=D(Z?V:V.x||V.left||V.scrollLeft,_e,ee,U?-1:1)),d&&(xe=D(Z?V:V.y||V.top||V.scrollTop,Ie,ge,U?-1:1))))},ue=function(){u.isThrowing=!1,Ot(u,"throwcomplete","onThrowComplete")},fe=function(){u.isThrowing=!1},K=function(P,O){var V,Z,he,pe;P&&Un?(P===!0&&(V=n.snap||n.liveSnap||{},Z=ia(V)||sr(V),P={resistance:(n.throwResistance||n.resistance||1e3)/(o?10:1)},o?P.rotation=$l(u,Z?V:V.rotation,ee,_e,1,O):(f&&(P[c]=$l(u,Z?V:V.points||V.x||V.left,ee,_e,U?-1:1,O||u.lockedAxis==="x")),d&&(P[l]=$l(u,Z?V:V.points||V.y||V.top,ge,Ie,U?-1:1,O||u.lockedAxis==="y")),(V.points||ia(V)&&Pa(V[0]))&&(P.linkedProps=c+","+l,P.radius=V.radius))),u.isThrowing=!0,pe=isNaN(n.overshootTolerance)?n.edgeResistance===1?0:1-u.edgeResistance+.2:n.overshootTolerance,P.duration||(P.duration={max:Math.max(n.minDuration||0,"maxDuration"in n?n.maxDuration:2),min:isNaN(n.minDuration)?pe===0||Pa(P)&&P.resistance>1e3?0:.5:n.minDuration,overshoot:pe}),u.tween=he=tt.to(U||t,{inertia:P,data:"_draggable",inherit:!1,onComplete:ue,onInterrupt:fe,onUpdate:n.fastMode?Ot:v,onUpdateParams:n.fastMode?[u,"onthrowupdate","onThrowUpdate"]:V&&V.radius?[!1,!0]:[]}),n.fastMode||(U&&(U._skip=!0),he.render(1e9,!0,!0),v(!0,!0),u.endX=u.x,u.endY=u.y,o&&(u.endRotation=u.x),he.play(0),v(!0,!0),U&&(U._skip=!1))):se&&u.applyBounds()},ie=function(P){var O=Me,V;Me=Dr(t.parentNode,!0),P&&u.isPressed&&!Me.equals(O||new Kr)&&(V=O.inverse().apply({x:I,y:G}),Me.apply(V,V),I=V.x,G=V.y),Me.equals(d0)&&(Me=null)},de=function(){var P=1-u.edgeResistance,O=b?Os(L):0,V=b?Fs(L):0,Z,he,pe;a&&(x.x=C(c,"px")+"px",x.y=C(l,"px")+"px",x.renderTransform()),ie(!1),Qn.x=u.pointerX-O,Qn.y=u.pointerY-V,Me&&Me.apply(Qn,Qn),I=Qn.x,G=Qn.y,te&&(we(u.pointerX,u.pointerY),R(!0)),z=Dr(t),U?(H(),Y=U.top(),W=U.left()):(Ee()?(v(!0,!0),H()):u.applyBounds(),o?(Z=t.ownerSVGElement?[x.xOrigin-t.getBBox().x,x.yOrigin-t.getBBox().y]:(Ya(t)[nu]||"0 0").split(" "),j=u.rotationOrigin=Dr(t).apply({x:parseFloat(Z[0])||0,y:parseFloat(Z[1])||0}),v(!0,!0),he=u.pointerX-j.x-O,pe=j.y-u.pointerY+V,W=u.x,Y=u.y=Math.atan2(pe,he)*Lh):(Y=C(l,"px"),W=C(c,"px"))),se&&P&&(W>ee?W=ee+(W-ee)/P:W<_e&&(W=_e-(_e-W)/P),o||(Y>ge?Y=ge+(Y-ge)/P:Y<Ie&&(Y=Ie-(Ie-Y)/P))),u.startX=W=Mn(W),u.startY=Y=Mn(Y)},Ee=function(){return u.tween&&u.tween.isActive()},re=function(){ki.parentNode&&!Ee()&&!u.isDragging&&ki.parentNode.removeChild(ki)},ce=function(P,O){var V;if(!N||u.isPressed||!P||(P.type==="mousedown"||P.type==="pointerdown")&&!O&&ji()-A<30&&Xa[u.pointerEvent.type]){Ze&&P&&N&&Jn(P);return}if(Qe=Ee(),Ct=!1,u.pointerEvent=P,Xa[P.type]?(Ue=~P.type.indexOf("touch")?P.currentTarget||P.target:L,Yt(Ue,"touchend",Fe),Yt(Ue,"touchmove",Se),Yt(Ue,"touchcancel",Fe),Yt(L,"touchstart",Oh)):(Ue=null,Yt(L,"mousemove",Se)),Ye=null,(!Wo||!Ue)&&(Yt(L,"mouseup",Fe),P&&P.target&&Yt(P.target,"mouseup",Fe)),mt=w.call(u,P.target)&&n.dragClickables===!1&&!O,mt){Yt(P.target,"change",Fe),Ot(u,"pressInit","onPressInit"),Ot(u,"press","onPress"),oo(g,!0),Ze=!1;return}if(Be=!Ue||f===d||u.vars.allowNativeTouchScrolling===!1||u.vars.allowContextMenu&&P&&(P.ctrlKey||P.which>2)?!1:f?"y":"x",Ze=!Be&&!u.allowEventDefault,Ze&&(Jn(P),Yt(vt,"touchforcechange",Jn)),P.changedTouches?(P=ke=P.changedTouches[0],Ge=P.identifier):P.pointerId?Ge=P.pointerId:ke=Ge=null,ul++,g0(R),G=u.pointerY=P.pageY,I=u.pointerX=P.pageX,Ot(u,"pressInit","onPressInit"),(Be||u.autoScroll)&&Yl(t.parentNode),t.parentNode&&u.autoScroll&&!U&&!o&&t.parentNode._gsMaxScrollX&&!ki.parentNode&&!t.getBBox&&(ki.style.width=t.parentNode.scrollWidth+"px",t.parentNode.appendChild(ki)),de(),u.tween&&u.tween.kill(),u.isThrowing=!1,tt.killTweensOf(U||t,_,!0),U&&tt.killTweensOf(t,{scrollTo:1},!0),u.tween=u.lockedAxis=null,(n.zIndexBoost||!o&&!U&&n.zIndexBoost!==!1)&&(t.style.zIndex=e.zIndex++),u.isPressed=!0,Q=!!(n.onDrag||u._listeners.drag),oe=!!(n.onMove||u._listeners.move),n.cursor!==!1||n.activeCursor)for(V=g.length;--V>-1;)tt.set(g[V],{cursor:n.activeCursor||n.cursor||(Sa==="grab"?"grabbing":Sa)});Ot(u,"press","onPress"),Un&&Un.track(U||t,a?"x,y":o?"rotation":"top,left")},Se=function(P){var O=P,V,Z,he,pe,ze,Re;if(!N||wf||!u.isPressed||!P){Ze&&P&&N&&Jn(P);return}if(u.pointerEvent=P,V=P.changedTouches,V){if(P=V[0],P!==ke&&P.identifier!==Ge){for(pe=V.length;--pe>-1&&(P=V[pe]).identifier!==Ge&&P.target!==t;);if(pe<0)return}}else if(P.pointerId&&Ge&&P.pointerId!==Ge)return;if(Ue&&Be&&!Ye&&(Qn.x=P.pageX-(b?Os(L):0),Qn.y=P.pageY-(b?Fs(L):0),Me&&Me.apply(Qn,Qn),Z=Qn.x,he=Qn.y,ze=Math.abs(Z-I),Re=Math.abs(he-G),(ze!==Re&&(ze>h||Re>h)||Ma&&Be===Ye)&&(Ye=ze>Re&&f?"x":"y",Be&&Ye!==Be&&Yt(vt,"touchforcechange",Jn),u.vars.lockAxisOnTouchScroll!==!1&&f&&d&&(u.lockedAxis=Ye==="x"?"y":"x",sr(u.vars.onLockAxis)&&u.vars.onLockAxis.call(u,O)),Ma&&Be===Ye))){Fe(O);return}!u.allowEventDefault&&(!Be||Ye&&Be!==Ye)&&O.cancelable!==!1?(Jn(O),Ze=!0):Ze&&(Ze=!1),u.autoScroll&&(p=!0),we(P.pageX,P.pageY,oe)},we=function(P,O,V){var Z=1-u.dragResistance,he=1-u.edgeResistance,pe=u.pointerX,ze=u.pointerY,Re=Y,ft=u.x,je=u.y,lt=u.endX,Tt=u.endY,Jt=u.endRotation,Kn=te,xn,on,Nt,Pt,ss,Qt;u.pointerX=P,u.pointerY=O,b&&(P-=Os(L),O-=Fs(L)),o?(Pt=Mn(Math.atan2(j.y-O,P-j.x)*Lh),ss=u.y-Pt,ss>180?(Y-=360,u.y=Pt):ss<-180&&(Y+=360,u.y=Pt),Me&&(Qt=P*Me.a+O*Me.c+Me.e,O=P*Me.b+O*Me.d+Me.f,P=Qt),u.x!==W||Math.max(Math.abs(I-P),Math.abs(G-O))>h?(u.y=Pt,Nt=Mn(W+(Y-Pt)*Z)):Nt=W):(Me&&(Qt=P*Me.a+O*Me.c+Me.e,O=P*Me.b+O*Me.d+Me.f,P=Qt),on=O-G,xn=P-I,on<h&&on>-h&&(on=0),xn<h&&xn>-h&&(xn=0),(u.lockAxis||u.lockedAxis)&&(xn||on)&&(Qt=u.lockedAxis,Qt||(u.lockedAxis=Qt=f&&Math.abs(xn)>Math.abs(on)?"y":d?"x":null,Qt&&sr(u.vars.onLockAxis)&&u.vars.onLockAxis.call(u,u.pointerEvent)),Qt==="y"?on=0:Qt==="x"&&(xn=0)),Nt=Mn(W+xn*Z),Pt=Mn(Y+on*Z)),(Oe||xe||Ve)&&(u.x!==Nt||u.y!==Pt&&!o)&&(Ve&&(cs.x=Nt,cs.y=Pt,Qt=Ve(cs),Nt=Mn(Qt.x),Pt=Mn(Qt.y)),Oe&&(Nt=Mn(Oe(Nt))),xe&&(Pt=Mn(xe(Pt)))),se&&(Nt>ee?Nt=ee+Math.round((Nt-ee)*he):Nt<_e&&(Nt=_e+Math.round((Nt-_e)*he)),o||(Pt>ge?Pt=Math.round(ge+(Pt-ge)*he):Pt<Ie&&(Pt=Math.round(Ie+(Pt-Ie)*he)))),(u.x!==Nt||u.y!==Pt&&!o)&&(o?(u.endRotation=u.x=u.endX=Mn(Nt),te=!0):(d&&(u.y=u.endY=Pt,te=!0),f&&(u.x=u.endX=Nt,te=!0)),!V||Ot(u,"move","onMove")!==!1?!u.isDragging&&u.isPressed&&(u.isDragging=Ct=!0,Ot(u,"dragstart","onDragStart")):(u.pointerX=pe,u.pointerY=ze,Y=Re,u.x=ft,u.y=je,u.endX=lt,u.endY=Tt,u.endRotation=Jt,te=Kn))},Fe=function ne(P,O){if(!N||!u.isPressed||P&&Ge!=null&&!O&&(P.pointerId&&P.pointerId!==Ge&&P.target!==t||P.changedTouches&&!v0(P.changedTouches,Ge))){Ze&&P&&N&&Jn(P);return}u.isPressed=!1;var V=P,Z=u.isDragging,he=u.vars.allowContextMenu&&P&&(P.ctrlKey||P.which>2),pe=tt.delayedCall(.001,re),ze,Re,ft,je,lt;if(Ue?(Ht(Ue,"touchend",ne),Ht(Ue,"touchmove",Se),Ht(Ue,"touchcancel",ne),Ht(L,"touchstart",Oh)):Ht(L,"mousemove",Se),Ht(vt,"touchforcechange",Jn),(!Wo||!Ue)&&(Ht(L,"mouseup",ne),P&&P.target&&Ht(P.target,"mouseup",ne)),te=!1,Z&&(m=Ih=ji(),u.isDragging=!1),Fh(R),mt&&!he){P&&(Ht(P.target,"change",ne),u.pointerEvent=V),oo(g,!1),Ot(u,"release","onRelease"),Ot(u,"click","onClick"),mt=!1;return}for(Re=g.length;--Re>-1;)ql(g[Re],"cursor",n.cursor||(n.cursor!==!1?Sa:null));if(ul--,P){if(ze=P.changedTouches,ze&&(P=ze[0],P!==ke&&P.identifier!==Ge)){for(Re=ze.length;--Re>-1&&(P=ze[Re]).identifier!==Ge&&P.target!==t;);if(Re<0&&!O)return}u.pointerEvent=V,u.pointerX=P.pageX,u.pointerY=P.pageY}return he&&V?(Jn(V),Ze=!0,Ot(u,"release","onRelease")):V&&!Z?(Ze=!1,Qe&&(n.snap||n.bounds)&&K(n.inertia||n.throwProps),Ot(u,"release","onRelease"),(!Ma||V.type!=="touchmove")&&V.type.indexOf("cancel")===-1&&(Ot(u,"click","onClick"),ji()-A<300&&Ot(u,"doubleclick","onDoubleClick"),je=V.target||t,A=ji(),lt=function(){A!==zt&&u.enabled()&&!u.isPressed&&!V.defaultPrevented&&(je.click?je.click():L.createEvent&&(ft=L.createEvent("MouseEvents"),ft.initMouseEvent("click",!0,!0,vt,1,u.pointerEvent.screenX,u.pointerEvent.screenY,u.pointerX,u.pointerY,!1,!1,!1,!1,0,null),je.dispatchEvent(ft)))},!Ma&&!V.defaultPrevented&&tt.delayedCall(.05,lt))):(K(n.inertia||n.throwProps),!u.allowEventDefault&&V&&(n.dragClickables!==!1||!w.call(u,V.target))&&Z&&(!Be||Ye&&Be===Ye)&&V.cancelable!==!1?(Ze=!0,Jn(V)):Ze=!1,Ot(u,"release","onRelease")),Ee()&&pe.duration(u.tween.duration()),Z&&Ot(u,"dragend","onDragEnd"),!0},B=function(P){if(P&&u.isDragging&&!U){var O=P.target||t.parentNode,V=O.scrollLeft-O._gsScrollX,Z=O.scrollTop-O._gsScrollY;(V||Z)&&(Me?(I-=V*Me.a+Z*Me.c,G-=Z*Me.d+V*Me.b):(I-=V,G-=Z),O._gsScrollX+=V,O._gsScrollY+=Z,we(u.pointerX,u.pointerY))}},ve=function(P){var O=ji(),V=O-A<100,Z=O-m<50,he=V&&zt===A,pe=u.pointerEvent&&u.pointerEvent.defaultPrevented,ze=V&&ut===A,Re=P.isTrusted||P.isTrusted==null&&V&&he;if((he||Z&&u.vars.suppressClickOnDrag!==!1)&&P.stopImmediatePropagation&&P.stopImmediatePropagation(),V&&!(u.pointerEvent&&u.pointerEvent.defaultPrevented)&&(!he||Re&&!ze)){Re&&he&&(ut=A),zt=A;return}(u.isPressed||Z||V)&&(!Re||!P.detail||!V||pe)&&Jn(P),!V&&!Z&&!Ct&&(P&&P.target&&(u.pointerEvent=P),Ot(u,"click","onClick"))},le=function(P){return Me?{x:P.x*Me.a+P.y*Me.c+Me.e,y:P.x*Me.b+P.y*Me.d+Me.f}:{x:P.x,y:P.y}};return me=e.get(t),me&&me.kill(),i.startDrag=function(ne,P){var O,V,Z,he;ce(ne||u.pointerEvent,!0),P&&!u.hitTest(ne||u.pointerEvent)&&(O=us(ne||u.pointerEvent),V=us(t),Z=le({x:O.left+O.width/2,y:O.top+O.height/2}),he=le({x:V.left+V.width/2,y:V.top+V.height/2}),I-=Z.x-he.x,G-=Z.y-he.y),u.isDragging||(u.isDragging=Ct=!0,Ot(u,"dragstart","onDragStart"))},i.drag=Se,i.endDrag=function(ne){return Fe(ne||u.pointerEvent,!0)},i.timeSinceDrag=function(){return u.isDragging?0:(ji()-m)/1e3},i.timeSinceClick=function(){return(ji()-A)/1e3},i.hitTest=function(ne,P){return e.hitTest(u.target,ne,P)},i.getDirection=function(ne,P){var O=ne==="velocity"&&Un?ne:Pa(ne)&&!o?"element":"start",V,Z,he,pe,ze,Re;return O==="element"&&(ze=us(u.target),Re=us(ne)),V=O==="start"?u.x-W:O==="velocity"?Un.getVelocity(t,c):ze.left+ze.width/2-(Re.left+Re.width/2),o?V<0?"counter-clockwise":"clockwise":(P=P||2,Z=O==="start"?u.y-Y:O==="velocity"?Un.getVelocity(t,l):ze.top+ze.height/2-(Re.top+Re.height/2),he=Math.abs(V/Z),pe=he<1/P?"":V<0?"left":"right",he<P&&(pe!==""&&(pe+="-"),pe+=Z<0?"up":"down"),pe)},i.applyBounds=function(ne,P){var O,V,Z,he,pe,ze;if(ne&&n.bounds!==ne)return n.bounds=ne,u.update(!0,P);if(v(!0),H(),se&&!Ee()){if(O=u.x,V=u.y,O>ee?O=ee:O<_e&&(O=_e),V>ge?V=ge:V<Ie&&(V=Ie),(u.x!==O||u.y!==V)&&(Z=!0,u.x=u.endX=O,o?u.endRotation=O:u.y=u.endY=V,te=!0,R(!0),u.autoScroll&&!u.isDragging))for(Yl(t.parentNode),he=t,Fi.scrollTop=vt.pageYOffset!=null?vt.pageYOffset:L.documentElement.scrollTop!=null?L.documentElement.scrollTop:L.body.scrollTop,Fi.scrollLeft=vt.pageXOffset!=null?vt.pageXOffset:L.documentElement.scrollLeft!=null?L.documentElement.scrollLeft:L.body.scrollLeft;he&&!ze;)ze=Xs(he.parentNode),pe=ze?Fi:he.parentNode,d&&pe.scrollTop>pe._gsMaxScrollY&&(pe.scrollTop=pe._gsMaxScrollY),f&&pe.scrollLeft>pe._gsMaxScrollX&&(pe.scrollLeft=pe._gsMaxScrollX),he=pe;u.isThrowing&&(Z||u.endX>ee||u.endX<_e||u.endY>ge||u.endY<Ie)&&K(n.inertia||n.throwProps,Z)}return u},i.update=function(ne,P,O){if(P&&u.isPressed){if(o)u.x=u.y=Mn(parseFloat(x.rotation));else{var V=Dr(t),Z=z.apply({x:u.x-W,y:u.y-Y}),he=Dr(t.parentNode,!0);he.apply({x:V.e-Z.x,y:V.f-Z.y},Z),u.x=Mn(u.x-(Z.x-he.e)),u.y=Mn(u.y-(Z.y-he.f))}R(!0),de()}var pe=u.x,ze=u.y;return ie(!P),ne?u.applyBounds():(te&&O&&R(!0),v(!0)),P&&(we(u.pointerX,u.pointerY),te&&R(!0)),u.isPressed&&!P&&(f&&Math.abs(pe-u.x)>.01||d&&Math.abs(ze-u.y)>.01&&!o)&&de(),u.autoScroll&&(Yl(t.parentNode,u.isDragging),p=u.isDragging,R(!0),kh(t,B),Bh(t,B)),u},i.enable=function(ne){var P={lazy:!0},O,V,Z;if(n.cursor!==!1&&(P.cursor=n.cursor||Sa),tt.utils.checkPrefix("touchCallout")&&(P.touchCallout="none"),ne!=="soft"){for(Uh(g,f===d?"none":n.allowNativeTouchScrolling&&t.scrollHeight===t.clientHeight==(t.scrollWidth===t.clientHeight)||n.allowEventDefault?"manipulation":f?"pan-y":"pan-x"),V=g.length;--V>-1;)Z=g[V],Wo||Yt(Z,"mousedown",ce),Yt(Z,"touchstart",ce),Yt(Z,"click",ve,!0),tt.set(Z,P),Z.getBBox&&Z.ownerSVGElement&&f!==d&&tt.set(Z.ownerSVGElement,{touchAction:n.allowNativeTouchScrolling||n.allowEventDefault?"manipulation":f?"pan-y":"pan-x"}),n.allowContextMenu||Yt(Z,"contextmenu",rt);oo(g,!1)}return Bh(t,B),N=!0,Un&&ne!=="soft"&&Un.track(U||t,a?"x,y":o?"rotation":"top,left"),t._gsDragID=O=t._gsDragID||"d"+p0++,Ns[O]=u,U&&(U.enable(),U.element._gsDragID=O),(n.bounds||o)&&de(),n.bounds&&u.applyBounds(),u},i.disable=function(ne){for(var P=u.isDragging,O=g.length,V;--O>-1;)ql(g[O],"cursor",null);if(ne!=="soft"){for(Uh(g,null),O=g.length;--O>-1;)V=g[O],ql(V,"touchCallout",null),Ht(V,"mousedown",ce),Ht(V,"touchstart",ce),Ht(V,"click",ve,!0),Ht(V,"contextmenu",rt);oo(g,!0),Ue&&(Ht(Ue,"touchcancel",Fe),Ht(Ue,"touchend",Fe),Ht(Ue,"touchmove",Se)),Ht(L,"mouseup",Fe),Ht(L,"mousemove",Se)}return kh(t,B),N=!1,Un&&ne!=="soft"&&(Un.untrack(U||t,a?"x,y":o?"rotation":"top,left"),u.tween&&u.tween.kill()),U&&U.disable(),Fh(R),u.isDragging=u.isPressed=mt=!1,P&&Ot(u,"dragend","onDragEnd"),u},i.enabled=function(ne,P){return arguments.length?ne?u.enable(P):u.disable(P):N},i.kill=function(){return u.isThrowing=!1,u.tween&&u.tween.kill(),u.disable(),tt.set(g,{clearProps:"userSelect"}),delete Ns[t._gsDragID],u},i.revert=function(){this.kill(),this.styles&&this.styles.revert()},~s.indexOf("scroll")&&(U=i.scrollProxy=new T0(t,_0({onKill:function(){u.isPressed&&Fe(null)}},n)),t.style.overflowY=d&&!eu?"auto":"hidden",t.style.overflowX=f&&!eu?"auto":"hidden",t=U.content),o?_.rotation=1:(f&&(_[c]=1),d&&(_[l]=1)),x.force3D="force3D"in n?n.force3D:!0,dm(Dh(i)),i.enable(),i}return e.register=function(n){tt=n,Kl()},e.create=function(n,i){return jc||Kl(!0),fr(n).map(function(s){return new e(s,i)})},e.get=function(n){return Ns[(fr(n)[0]||{})._gsDragID]},e.timeSinceDrag=function(){return(ji()-Ih)/1e3},e.hitTest=function(n,i,s){if(n===i)return!1;var a=us(n),o=us(i),c=a.top,l=a.left,f=a.right,d=a.bottom,h=a.width,u=a.height,g=o.left>f||o.right<l||o.top>d||o.bottom<c,_,m,p;return g||!s?!g:(p=(s+"").indexOf("%")!==-1,s=parseFloat(s)||0,_={left:Math.max(l,o.left),top:Math.max(c,o.top)},_.width=Math.min(f,o.right)-_.left,_.height=Math.min(d,o.bottom)-_.top,_.width<0||_.height<0?!1:p?(s*=.01,m=_.width*_.height,m>=h*u*s||m>=o.width*o.height*s):_.width>s&&_.height>s)},e})(E0);x0(Js.prototype,{pointerX:0,pointerY:0,startX:0,startY:0,deltaX:0,deltaY:0,isDragging:!1,isPressed:!1});Js.zIndex=1e3;Js.version="3.15.0";mm()&&tt.registerPlugin(Js);var vi,ru,La,vm,As,Lr,su,Mm,Sm=function(){return vi||typeof window<"u"&&(vi=window.gsap)},au={},w0=function(e){return Math.round(e*1e4)/1e4},ou=function(e){return Mm(e).id},ya=function(e){return au[ou(typeof e=="string"?La(e)[0]:e)]},Gh=function(e){var t=As,n;if(e-su>=.05)for(su=e;t;)n=t.g(t.t,t.p),(n!==t.v1||e-t.t1>.2)&&(t.v2=t.v1,t.v1=n,t.t2=t.t1,t.t1=e),t=t._next},A0={deg:360,rad:Math.PI*2},Zl=function(){vi=Sm(),vi&&(La=vi.utils.toArray,vm=vi.utils.getUnit,Mm=vi.core.getCache,Lr=vi.ticker,ru=1)},R0=function(e,t,n,i){this.t=e,this.p=t,this.g=e._gsap.get,this.rCap=A0[n||vm(this.g(e,t))],this.v1=this.v2=this.g(e,t),this.t1=this.t2=Lr.time,i&&(this._next=i,i._prev=this)},to=(function(){function r(t,n){ru||Zl(),this.target=La(t)[0],au[ou(this.target)]=this,this._props={},n&&this.add(n)}r.register=function(n){vi=n,Zl()};var e=r.prototype;return e.get=function(n,i){var s=this._props[n]||console.warn("Not tracking "+n+" velocity."),a,o,c;return a=parseFloat(i?s.v1:s.g(s.t,s.p)),o=a-parseFloat(s.v2),c=s.rCap,c&&(o=o%c,o!==o%(c/2)&&(o=o<0?o+c:o-c)),w0(o/((i?s.t1:Lr.time)-s.t2))},e.getAll=function(){var n={},i=this._props,s;for(s in i)n[s]=this.get(s);return n},e.isTracking=function(n){return n in this._props},e.add=function(n,i){var s=this._props[n];s?(s.v1=s.v2=s.g(s.t,s.p),s.t1=s.t2=Lr.time):(As||(Lr.add(Gh),su=Lr.time),As=this._props[n]=new R0(this.target,n,i,As))},e.remove=function(n){var i=this._props[n],s,a;i&&(s=i._prev,a=i._next,s&&(s._next=a),a?a._prev=s:As===i&&(Lr.remove(Gh),As=0),delete this._props[n])},e.kill=function(n){for(var i in this._props)this.remove(i);n||delete au[ou(this.target)]},r.track=function(n,i,s){ru||Zl();for(var a=[],o=La(n),c=i.split(","),l=(s||"").split(","),f=o.length,d,h;f--;){for(d=ya(o[f])||new r(o[f]),h=c.length;h--;)d.add(c[h],l[h]||l[0]);a.push(d)}return a},r.untrack=function(n,i){var s=i&&i.split(",");La(n).forEach(function(a){var o=ya(a);o&&(s?s.forEach(function(c){return o.remove(c)}):o.kill(1))})},r.isTracking=function(n,i){var s=ya(n);return s&&s.isTracking(i)},r.getVelocity=function(n,i){var s=ya(n);return!s||!s.isTracking(i)?console.warn("Not tracking velocity of "+i):s.get(i)},r})();to.getByTarget=ya;Sm()&&vi.registerPlugin(to);var qt,ym,Hh,bm,lu,Ia,Tm,Em,wm,Af,Am,Ua,cu,Rm,fl=to.getByTarget,Cm=function(){return qt||typeof window<"u"&&(qt=window.gsap)&&qt.registerPlugin&&qt},C0=function(e){return typeof e=="string"},qa=function(e){return typeof e=="number"},mr=function(e){return typeof e=="object"},uu=function(e){return typeof e=="function"},P0=1,Pm=Array.isArray,D0=function(e){return e},qr=1e10,Wh=1/qr,Dm=.05,L0=function(e){return Math.round(e*1e4)/1e4},I0=function(e,t,n){for(var i in t)!(i in e)&&i!==n&&(e[i]=t[i]);return e},U0=function r(e){var t={},n,i;for(n in e)t[n]=mr(i=e[n])&&!Pm(i)?r(i):i;return t},Xh=function(e,t,n,i,s){var a=t.length,o=0,c=qr,l,f,d,h;if(mr(e)){for(;a--;){l=t[a],f=0;for(d in e)h=l[d]-e[d],f+=h*h;f<c&&(o=a,c=f)}if((s||qr)<qr&&s<Math.sqrt(c))return e}else for(;a--;)l=t[a],f=l-e,f<0&&(f=-f),f<c&&l>=i&&l<=n&&(o=a,c=f);return t[o]},Lm=function(e,t,n,i,s,a,o){if(e.end==="auto")return e;var c=e.end,l,f;if(n=isNaN(n)?qr:n,i=isNaN(i)?-qr:i,mr(t)){if(l=t.calculated?t:(uu(c)?c(t,o):Xh(t,c,n,i,a))||t,!t.calculated){for(f in l)t[f]=l[f];t.calculated=!0}l=l[s]}else l=uu(c)?c(t,o):Pm(c)?Xh(t,c,n,i,a):parseFloat(c);return l>n?l=n:l<i&&(l=i),{max:l,min:l,unitFactor:e.unitFactor}},hl=function(e,t,n){return isNaN(e[t])?n:+e[t]},Rf=function(e,t){return t*Dm*e/Af},Yh=function(e,t,n){return Math.abs((t-e)*Af/n/Dm)},Im={resistance:1,checkpoint:1,preventOvershoot:1,linkedProps:1,radius:1,duration:1},Um=function(e,t,n,i){if(t.linkedProps){var s=t.linkedProps.split(","),a={},o,c,l,f,d,h;for(o=0;o<s.length;o++)c=s[o],l=t[c],l&&(qa(l.velocity)?f=l.velocity:(d=d||fl(e),f=d&&d.isTracking(c)?d.get(c):0),h=Math.abs(f/hl(l,"resistance",i)),a[c]=parseFloat(n(e,c))+Rf(f,h));return a}},N0=function(e,t,n,i,s,a){if(n===void 0&&(n=10),i===void 0&&(i=.2),s===void 0&&(s=1),C0(e)&&(e=bm(e)[0]),!e)return 0;var o=0,c=qr,l=t.inertia||t,f=wm(e).get,d=hl(l,"resistance",Ia.resistance),h,u,g,_,m,p,M,E,S,y;y=Um(e,l,f,d);for(h in l)Im[h]||(u=l[h],mr(u)||(E=E||fl(e),E&&E.isTracking(h)?u=qa(u)?{velocity:u}:{velocity:E.get(h)}:(_=+u||0,g=Math.abs(_/d))),mr(u)&&(qa(u.velocity)?_=u.velocity:(E=E||fl(e),_=E&&E.isTracking(h)?E.get(h):0),g=Am(i,n,Math.abs(_/hl(u,"resistance",d))),m=parseFloat(f(e,h))||0,p=m+Rf(_,g),"end"in u&&(u=Lm(u,y&&h in y?y:p,u.max,u.min,h,l.radius,_),Ua===t&&(Ua=l=U0(t)),l[h]=I0(u,l[h],"end")),"max"in u&&p>+u.max+Wh?(S=u.unitFactor||Ia.unitFactors[h]||1,M=m>u.max&&u.min!==u.max||_*S>-15&&_*S<45?i+(n-i)*.1:Yh(m,u.max,_),M+s<c&&(c=M+s)):"min"in u&&p<+u.min-Wh&&(S=u.unitFactor||Ia.unitFactors[h]||1,M=m<u.min&&u.min!==u.max||_*S>-45&&_*S<15?i+(n-i)*.1:Yh(m,u.min,_),M+s<c&&(c=M+s)),M>o&&(o=M)),g>o&&(o=g));return o>c&&(o=c),o>n?n:o<i?i:o},qh=function(){qt=Cm(),qt&&(Hh=qt.parseEase,bm=qt.utils.toArray,Tm=qt.utils.getUnit,wm=qt.core.getCache,Am=qt.utils.clamp,cu=qt.core.getStyleSaver,Rm=qt.core.reverting||function(){},lu=Hh("power3"),Af=lu(.05),Em=qt.core.PropTween,qt.config({resistance:100,unitFactors:{time:1e3,totalTime:1e3,progress:1e3,totalProgress:1e3}}),Ia=qt.config(),qt.registerPlugin(to),ym=1)},Cf={version:"3.15.0",name:"inertia",register:function(e){qt=e,qh()},init:function(e,t,n,i,s){ym||qh();var a=fl(e);if(t==="auto"){if(!a){console.warn("No inertia tracking on "+e+". InertiaPlugin.track(target) first.");return}t=a.getAll()}this.styles=cu&&typeof e.style=="object"&&cu(e),this.target=e,this.tween=n,Ua=t;var o=e._gsap,c=o.get,l=t.duration,f=mr(l),d=t.preventOvershoot||f&&l.overshoot===0,h=hl(t,"resistance",Ia.resistance),u=qa(l)?l:N0(e,t,f&&l.max||10,f&&l.min||.2,f&&"overshoot"in l?+l.overshoot:d?0:1),g,_,m,p,M,E,S,y,w;t=Ua,Ua=0,w=Um(e,t,c,h);for(g in t)Im[g]||(_=t[g],uu(_)&&(_=_(i,e,s)),qa(_)?M=_:mr(_)&&!isNaN(_.velocity)?M=+_.velocity:a&&a.isTracking(g)?M=a.get(g):console.warn("ERROR: No velocity was defined for "+e+" property: "+g),E=Rf(M,u),y=0,m=c(e,g),p=Tm(m),m=parseFloat(m),mr(_)&&(S=m+E,"end"in _&&(_=Lm(_,w&&g in w?w:S,_.max,_.min,g,t.radius,M)),"max"in _&&+_.max<S?d||_.preventOvershoot?E=_.max-m:y=_.max-m-E:"min"in _&&+_.min>S&&(d||_.preventOvershoot?E=_.min-m:y=_.min-m-E)),this._props.push(g),this.styles&&this.styles.save(g),this._pt=new Em(this._pt,e,g,m,0,D0,0,o.set(e,g,this)),this._pt.u=p||0,this._pt.c1=E,this._pt.c2=y);return n.duration(u),P0},render:function(e,t){var n=t._pt;if(e=lu(t.tween._time/t.tween._dur),e||!Rm())for(;n;)n.set(n.t,n.p,L0(n.s+n.c1*e+n.c2*e*e)+n.u,n.d,e),n=n._next;else t.styles.revert()}};"track,untrack,isTracking,getVelocity,getByTarget".split(",").forEach(function(r){return Cf[r]=to[r]});Cm()&&qt.registerPlugin(Cf);const Pf="186",F0=0,$h=1,O0=2,Yo=1,B0=2,ba=3,Zr=0,Pn=1,yi=2,Ei=0,Na=1,Fr=2,Kh=3,Zh=4,k0=5,Rs=100,z0=101,V0=102,G0=103,H0=104,W0=200,X0=201,Y0=202,q0=203,Nm=204,Fm=205,$0=206,K0=207,Z0=208,J0=209,Q0=210,j0=211,ex=212,tx=213,nx=214,fu=0,hu=1,du=2,$a=3,pu=4,mu=5,_u=6,gu=7,Om=0,ix=1,rx=2,wi=0,Df=1,Lf=2,If=3,Uf=4,Nf=5,Ff=6,Of=7,Bm=300,Jr=301,Ys=302,Jl=303,Ql=304,Rl=306,xu=1e3,Hi=1001,vu=1002,rn=1003,sx=1004,lo=1005,pn=1006,jl=1007,Or=1008,Vn=1009,km=1010,zm=1011,Ka=1012,Bf=1013,Ci=1014,fi=1015,yn=1016,kf=1017,zf=1018,Za=1020,Vm=35902,Gm=35899,Hm=1021,Wm=1022,hi=1023,$i=1026,Br=1027,Vf=1028,Gf=1029,Qr=1030,Hf=1031,Wf=1033,qo=33776,$o=33777,Ko=33778,Zo=33779,Mu=35840,Su=35841,yu=35842,bu=35843,Tu=36196,Eu=37492,wu=37496,Au=37488,Ru=37489,dl=37490,Cu=37491,Pu=37808,Du=37809,Lu=37810,Iu=37811,Uu=37812,Nu=37813,Fu=37814,Ou=37815,Bu=37816,ku=37817,zu=37818,Vu=37819,Gu=37820,Hu=37821,Wu=36492,Xu=36494,Yu=36495,qu=36283,$u=36284,pl=36285,Ku=36286,ax=3200,Zu=0,ox=1,or="",On="srgb",ml="srgb-linear",_l="linear",pt="srgb",ec=7680,lx=519,cx=512,ux=513,fx=514,Xf=515,hx=516,dx=517,Yf=518,px=519,mx=35044,Jh="300 es",Ti=2e3,Ja=2001;function _x(r){for(let e=r.length-1;e>=0;--e)if(r[e]>=65535)return!0;return!1}function gl(r){return document.createElementNS("http://www.w3.org/1999/xhtml",r)}function gx(){const r=gl("canvas");return r.style.display="block",r}const Qh={};function jh(...r){const e="THREE."+r.shift();console.log(e,...r)}function Xm(r){const e=r[0];if(typeof e=="string"&&e.startsWith("TSL:")){const t=r[1];t&&t.isStackTrace?r[0]+=" "+t.getLocation():r[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return r}function We(...r){r=Xm(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.warn(t.getError(e)):console.warn(e,...r)}}function at(...r){r=Xm(r);const e="THREE."+r.shift();{const t=r[0];t&&t.isStackTrace?console.error(t.getError(e)):console.error(e,...r)}}function Bs(...r){const e=r.join(" ");e in Qh||(Qh[e]=!0,We(...r))}function xx(r,e,t){return new Promise(function(n,i){function s(){switch(r.clientWaitSync(e,r.SYNC_FLUSH_COMMANDS_BIT,0)){case r.WAIT_FAILED:i();break;case r.TIMEOUT_EXPIRED:setTimeout(s,t);break;default:n()}}setTimeout(s,t)})}const vx={[fu]:hu,[du]:_u,[pu]:gu,[$a]:mu,[hu]:fu,[_u]:du,[gu]:pu,[mu]:$a};class ts{addEventListener(e,t){this._listeners===void 0&&(this._listeners={});const n=this._listeners;n[e]===void 0&&(n[e]=[]),n[e].indexOf(t)===-1&&n[e].push(t)}hasEventListener(e,t){const n=this._listeners;return n===void 0?!1:n[e]!==void 0&&n[e].indexOf(t)!==-1}removeEventListener(e,t){const n=this._listeners;if(n===void 0)return;const i=n[e];if(i!==void 0){const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}dispatchEvent(e){const t=this._listeners;if(t===void 0)return;const n=t[e.type];if(n!==void 0){e.target=this;const i=n.slice(0);for(let s=0,a=i.length;s<a;s++)i[s].call(this,e);e.target=null}}}const cn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],tc=Math.PI/180,Ju=180/Math.PI;function no(){const r=Math.random()*4294967295|0,e=Math.random()*4294967295|0,t=Math.random()*4294967295|0,n=Math.random()*4294967295|0;return(cn[r&255]+cn[r>>8&255]+cn[r>>16&255]+cn[r>>24&255]+"-"+cn[e&255]+cn[e>>8&255]+"-"+cn[e>>16&15|64]+cn[e>>24&255]+"-"+cn[t&63|128]+cn[t>>8&255]+"-"+cn[t>>16&255]+cn[t>>24&255]+cn[n&255]+cn[n>>8&255]+cn[n>>16&255]+cn[n>>24&255]).toLowerCase()}function nt(r,e,t){return Math.max(e,Math.min(t,r))}function Mx(r,e){return(r%e+e)%e}function nc(r,e,t){return(1-t)*r+t*e}function ra(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return r/4294967295;case Uint16Array:return r/65535;case Uint8Array:case Uint8ClampedArray:return r/255;case Int32Array:return Math.max(r/2147483647,-1);case Int16Array:return Math.max(r/32767,-1);case Int8Array:return Math.max(r/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function bn(r,e){switch(e.constructor){case Float32Array:return r;case Uint32Array:return Math.round(r*4294967295);case Uint16Array:return Math.round(r*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(r*255);case Int32Array:return Math.round(r*2147483647);case Int16Array:return Math.round(r*32767);case Int8Array:return Math.round(r*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}class He{static{He.prototype.isVector2=!0}constructor(e=0,t=0){this.x=e,this.y=t}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,t){return this.x=e,this.y=t,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;default:throw new Error("THREE.Vector2: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const t=this.x,n=this.y,i=e.elements;return this.x=i[0]*t+i[3]*n+i[6],this.y=i[1]*t+i[4]*n+i[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y;return t*t+n*n}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this}rotateAround(e,t){const n=Math.cos(t),i=Math.sin(t),s=this.x-e.x,a=this.y-e.y;return this.x=s*n-a*i+e.x,this.y=s*i+a*n+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Qs{constructor(e=0,t=0,n=0,i=1){this.isQuaternion=!0,this._x=e,this._y=t,this._z=n,this._w=i}static slerpFlat(e,t,n,i,s,a,o){let c=n[i+0],l=n[i+1],f=n[i+2],d=n[i+3],h=s[a+0],u=s[a+1],g=s[a+2],_=s[a+3];if(d!==_||c!==h||l!==u||f!==g){let m=c*h+l*u+f*g+d*_;m<0&&(h=-h,u=-u,g=-g,_=-_,m=-m);let p=1-o;if(m<.9995){const M=Math.acos(m),E=Math.sin(M);p=Math.sin(p*M)/E,o=Math.sin(o*M)/E,c=c*p+h*o,l=l*p+u*o,f=f*p+g*o,d=d*p+_*o}else{c=c*p+h*o,l=l*p+u*o,f=f*p+g*o,d=d*p+_*o;const M=1/Math.sqrt(c*c+l*l+f*f+d*d);c*=M,l*=M,f*=M,d*=M}}e[t]=c,e[t+1]=l,e[t+2]=f,e[t+3]=d}static multiplyQuaternionsFlat(e,t,n,i,s,a){const o=n[i],c=n[i+1],l=n[i+2],f=n[i+3],d=s[a],h=s[a+1],u=s[a+2],g=s[a+3];return e[t]=o*g+f*d+c*u-l*h,e[t+1]=c*g+f*h+l*d-o*u,e[t+2]=l*g+f*u+o*h-c*d,e[t+3]=f*g-o*d-c*h-l*u,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,t,n,i){return this._x=e,this._y=t,this._z=n,this._w=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,t=!0){const n=e._x,i=e._y,s=e._z,a=e._order,o=Math.cos,c=Math.sin,l=o(n/2),f=o(i/2),d=o(s/2),h=c(n/2),u=c(i/2),g=c(s/2);switch(a){case"XYZ":this._x=h*f*d+l*u*g,this._y=l*u*d-h*f*g,this._z=l*f*g+h*u*d,this._w=l*f*d-h*u*g;break;case"YXZ":this._x=h*f*d+l*u*g,this._y=l*u*d-h*f*g,this._z=l*f*g-h*u*d,this._w=l*f*d+h*u*g;break;case"ZXY":this._x=h*f*d-l*u*g,this._y=l*u*d+h*f*g,this._z=l*f*g+h*u*d,this._w=l*f*d-h*u*g;break;case"ZYX":this._x=h*f*d-l*u*g,this._y=l*u*d+h*f*g,this._z=l*f*g-h*u*d,this._w=l*f*d+h*u*g;break;case"YZX":this._x=h*f*d+l*u*g,this._y=l*u*d+h*f*g,this._z=l*f*g-h*u*d,this._w=l*f*d-h*u*g;break;case"XZY":this._x=h*f*d-l*u*g,this._y=l*u*d-h*f*g,this._z=l*f*g+h*u*d,this._w=l*f*d+h*u*g;break;default:We("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return t===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,t){const n=t/2,i=Math.sin(n);return this._x=e.x*i,this._y=e.y*i,this._z=e.z*i,this._w=Math.cos(n),this._onChangeCallback(),this}setFromRotationMatrix(e){const t=e.elements,n=t[0],i=t[4],s=t[8],a=t[1],o=t[5],c=t[9],l=t[2],f=t[6],d=t[10],h=n+o+d;if(h>0){const u=.5/Math.sqrt(h+1);this._w=.25/u,this._x=(f-c)*u,this._y=(s-l)*u,this._z=(a-i)*u}else if(n>o&&n>d){const u=2*Math.sqrt(1+n-o-d);this._w=(f-c)/u,this._x=.25*u,this._y=(i+a)/u,this._z=(s+l)/u}else if(o>d){const u=2*Math.sqrt(1+o-n-d);this._w=(s-l)/u,this._x=(i+a)/u,this._y=.25*u,this._z=(c+f)/u}else{const u=2*Math.sqrt(1+d-n-o);this._w=(a-i)/u,this._x=(s+l)/u,this._y=(c+f)/u,this._z=.25*u}return this._onChangeCallback(),this}setFromUnitVectors(e,t){let n=e.dot(t)+1;return n<1e-8?(n=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=n):(this._x=0,this._y=-e.z,this._z=e.y,this._w=n)):(this._x=e.y*t.z-e.z*t.y,this._y=e.z*t.x-e.x*t.z,this._z=e.x*t.y-e.y*t.x,this._w=n),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(nt(this.dot(e),-1,1)))}rotateTowards(e,t){const n=this.angleTo(e);if(n===0)return this;const i=Math.min(1,t/n);return this.slerp(e,i),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,t){const n=e._x,i=e._y,s=e._z,a=e._w,o=t._x,c=t._y,l=t._z,f=t._w;return this._x=n*f+a*o+i*l-s*c,this._y=i*f+a*c+s*o-n*l,this._z=s*f+a*l+n*c-i*o,this._w=a*f-n*o-i*c-s*l,this._onChangeCallback(),this}slerp(e,t){let n=e._x,i=e._y,s=e._z,a=e._w,o=this.dot(e);o<0&&(n=-n,i=-i,s=-s,a=-a,o=-o);let c=1-t;if(o<.9995){const l=Math.acos(o),f=Math.sin(l);c=Math.sin(c*l)/f,t=Math.sin(t*l)/f,this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this._onChangeCallback()}else this._x=this._x*c+n*t,this._y=this._y*c+i*t,this._z=this._z*c+s*t,this._w=this._w*c+a*t,this.normalize();return this}slerpQuaternions(e,t,n){return this.copy(e).slerp(t,n)}random(){const e=2*Math.PI*Math.random(),t=2*Math.PI*Math.random(),n=Math.random(),i=Math.sqrt(1-n),s=Math.sqrt(n);return this.set(i*Math.sin(e),i*Math.cos(e),s*Math.sin(t),s*Math.cos(t))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,t=0){return this._x=e[t],this._y=e[t+1],this._z=e[t+2],this._w=e[t+3],this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._w,e}fromBufferAttribute(e,t){return this._x=e.getX(t),this._y=e.getY(t),this._z=e.getZ(t),this._w=e.getW(t),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class X{static{X.prototype.isVector3=!0}constructor(e=0,t=0,n=0){this.x=e,this.y=t,this.z=n}set(e,t,n){return n===void 0&&(n=this.z),this.x=e,this.y=t,this.z=n,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;default:throw new Error("THREE.Vector3: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,t){return this.x=e.x*t.x,this.y=e.y*t.y,this.z=e.z*t.z,this}applyEuler(e){return this.applyQuaternion(ed.setFromEuler(e))}applyAxisAngle(e,t){return this.applyQuaternion(ed.setFromAxisAngle(e,t))}applyMatrix3(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[3]*n+s[6]*i,this.y=s[1]*t+s[4]*n+s[7]*i,this.z=s[2]*t+s[5]*n+s[8]*i,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=e.elements,a=1/(s[3]*t+s[7]*n+s[11]*i+s[15]);return this.x=(s[0]*t+s[4]*n+s[8]*i+s[12])*a,this.y=(s[1]*t+s[5]*n+s[9]*i+s[13])*a,this.z=(s[2]*t+s[6]*n+s[10]*i+s[14])*a,this}applyQuaternion(e){const t=this.x,n=this.y,i=this.z,s=e.x,a=e.y,o=e.z,c=e.w,l=2*(a*i-o*n),f=2*(o*t-s*i),d=2*(s*n-a*t);return this.x=t+c*l+a*d-o*f,this.y=n+c*f+o*l-s*d,this.z=i+c*d+s*f-a*l,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const t=this.x,n=this.y,i=this.z,s=e.elements;return this.x=s[0]*t+s[4]*n+s[8]*i,this.y=s[1]*t+s[5]*n+s[9]*i,this.z=s[2]*t+s[6]*n+s[10]*i,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,t){const n=e.x,i=e.y,s=e.z,a=t.x,o=t.y,c=t.z;return this.x=i*c-s*o,this.y=s*a-n*c,this.z=n*o-i*a,this}projectOnVector(e){const t=e.lengthSq();if(t===0)return this.set(0,0,0);const n=e.dot(this)/t;return this.copy(e).multiplyScalar(n)}projectOnPlane(e){return ic.copy(this).projectOnVector(e),this.sub(ic)}reflect(e){return this.sub(ic.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const t=Math.sqrt(this.lengthSq()*e.lengthSq());if(t===0)return Math.PI/2;const n=this.dot(e)/t;return Math.acos(nt(n,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const t=this.x-e.x,n=this.y-e.y,i=this.z-e.z;return t*t+n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,t,n){const i=Math.sin(t)*e;return this.x=i*Math.sin(n),this.y=Math.cos(t)*e,this.z=i*Math.cos(n),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,t,n){return this.x=e*Math.sin(t),this.y=n,this.z=e*Math.cos(t),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this}setFromMatrixScale(e){const t=this.setFromMatrixColumn(e,0).length(),n=this.setFromMatrixColumn(e,1).length(),i=this.setFromMatrixColumn(e,2).length();return this.x=t,this.y=n,this.z=i,this}setFromMatrixColumn(e,t){return this.fromArray(e.elements,t*4)}setFromMatrix3Column(e,t){return this.fromArray(e.elements,t*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,t=Math.random()*2-1,n=Math.sqrt(1-t*t);return this.x=n*Math.cos(e),this.y=t,this.z=n*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const ic=new X,ed=new Qs;class qe{static{qe.prototype.isMatrix3=!0}constructor(e,t,n,i,s,a,o,c,l){this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l)}set(e,t,n,i,s,a,o,c,l){const f=this.elements;return f[0]=e,f[1]=i,f[2]=o,f[3]=t,f[4]=s,f[5]=c,f[6]=n,f[7]=a,f[8]=l,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],this}extractBasis(e,t,n){return e.setFromMatrix3Column(this,0),t.setFromMatrix3Column(this,1),n.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const t=e.elements;return this.set(t[0],t[4],t[8],t[1],t[5],t[9],t[2],t[6],t[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[3],c=n[6],l=n[1],f=n[4],d=n[7],h=n[2],u=n[5],g=n[8],_=i[0],m=i[3],p=i[6],M=i[1],E=i[4],S=i[7],y=i[2],w=i[5],A=i[8];return s[0]=a*_+o*M+c*y,s[3]=a*m+o*E+c*w,s[6]=a*p+o*S+c*A,s[1]=l*_+f*M+d*y,s[4]=l*m+f*E+d*w,s[7]=l*p+f*S+d*A,s[2]=h*_+u*M+g*y,s[5]=h*m+u*E+g*w,s[8]=h*p+u*S+g*A,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[3]*=e,t[6]*=e,t[1]*=e,t[4]*=e,t[7]*=e,t[2]*=e,t[5]*=e,t[8]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8];return t*a*f-t*o*l-n*s*f+n*o*c+i*s*l-i*a*c}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],d=f*a-o*l,h=o*c-f*s,u=l*s-a*c,g=t*d+n*h+i*u;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const _=1/g;return e[0]=d*_,e[1]=(i*l-f*n)*_,e[2]=(o*n-i*a)*_,e[3]=h*_,e[4]=(f*t-i*c)*_,e[5]=(i*s-o*t)*_,e[6]=u*_,e[7]=(n*c-l*t)*_,e[8]=(a*t-n*s)*_,this}transpose(){let e;const t=this.elements;return e=t[1],t[1]=t[3],t[3]=e,e=t[2],t[2]=t[6],t[6]=e,e=t[5],t[5]=t[7],t[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const t=this.elements;return e[0]=t[0],e[1]=t[3],e[2]=t[6],e[3]=t[1],e[4]=t[4],e[5]=t[7],e[6]=t[2],e[7]=t[5],e[8]=t[8],this}setUvTransform(e,t,n,i,s,a,o){const c=Math.cos(s),l=Math.sin(s);return this.set(n*c,n*l,-n*(c*a+l*o)+a+e,-i*l,i*c,-i*(-l*a+c*o)+o+t,0,0,1),this}scale(e,t){return Bs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(rc.makeScale(e,t)),this}rotate(e){return Bs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(rc.makeRotation(-e)),this}translate(e,t){return Bs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(rc.makeTranslation(e,t)),this}makeTranslation(e,t){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,t,0,0,1),this}makeRotation(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,n,t,0,0,0,1),this}makeScale(e,t){return this.set(e,0,0,0,t,0,0,0,1),this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<9;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<9;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const rc=new qe,td=new qe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),nd=new qe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Sx(){const r={enabled:!0,workingColorSpace:ml,spaces:{},convert:function(i,s,a){return this.enabled===!1||s===a||!s||!a||(this.spaces[s].transfer===pt&&(i.r=Xi(i.r),i.g=Xi(i.g),i.b=Xi(i.b)),this.spaces[s].primaries!==this.spaces[a].primaries&&(i.applyMatrix3(this.spaces[s].toXYZ),i.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===pt&&(i.r=ks(i.r),i.g=ks(i.g),i.b=ks(i.b))),i},workingToColorSpace:function(i,s){return this.convert(i,this.workingColorSpace,s)},colorSpaceToWorking:function(i,s){return this.convert(i,s,this.workingColorSpace)},getPrimaries:function(i){return this.spaces[i].primaries},getTransfer:function(i){return i===or?_l:this.spaces[i].transfer},getToneMappingMode:function(i){return this.spaces[i].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(i,s=this.workingColorSpace){return i.fromArray(this.spaces[s].luminanceCoefficients)},define:function(i){Object.assign(this.spaces,i)},_getMatrix:function(i,s,a){return i.copy(this.spaces[s].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(i){return this.spaces[i].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(i=this.workingColorSpace){return this.spaces[i].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(i,s){return Bs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),r.workingToColorSpace(i,s)},toWorkingColorSpace:function(i,s){return Bs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),r.colorSpaceToWorking(i,s)}},e=[.64,.33,.3,.6,.15,.06],t=[.2126,.7152,.0722],n=[.3127,.329];return r.define({[ml]:{primaries:e,whitePoint:n,transfer:_l,toXYZ:td,fromXYZ:nd,luminanceCoefficients:t,workingColorSpaceConfig:{unpackColorSpace:On},outputColorSpaceConfig:{drawingBufferColorSpace:On}},[On]:{primaries:e,whitePoint:n,transfer:pt,toXYZ:td,fromXYZ:nd,luminanceCoefficients:t,outputColorSpaceConfig:{drawingBufferColorSpace:On}}}),r}const et=Sx();function Xi(r){return r<.04045?r*.0773993808:Math.pow(r*.9478672986+.0521327014,2.4)}function ks(r){return r<.0031308?r*12.92:1.055*Math.pow(r,.41666)-.055}let fs;class yx{static getDataURL(e,t="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let n;if(e instanceof HTMLCanvasElement)n=e;else{fs===void 0&&(fs=gl("canvas")),fs.width=e.width,fs.height=e.height;const i=fs.getContext("2d");e instanceof ImageData?i.putImageData(e,0,0):i.drawImage(e,0,0,e.width,e.height),n=fs}return n.toDataURL(t)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const t=gl("canvas");t.width=e.width,t.height=e.height;const n=t.getContext("2d");n.drawImage(e,0,0,e.width,e.height);const i=n.getImageData(0,0,e.width,e.height),s=i.data;for(let a=0;a<s.length;a++)s[a]=Xi(s[a]/255)*255;return n.putImageData(i,0,0),t}else if(e.data){const t=e.data.slice(0);for(let n=0;n<t.length;n++)t instanceof Uint8Array||t instanceof Uint8ClampedArray?t[n]=Math.floor(Xi(t[n]/255)*255):t[n]=Xi(t[n]);return{data:t,width:e.width,height:e.height}}else return We("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let bx=0;class qf{constructor(e=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:bx++}),this.uuid=no(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const t=this.data;return typeof HTMLVideoElement<"u"&&t instanceof HTMLVideoElement?e.set(t.videoWidth,t.videoHeight,0):typeof VideoFrame<"u"&&t instanceof VideoFrame?e.set(t.displayWidth,t.displayHeight,0):t!==null?e.set(t.width,t.height,t.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const n={uuid:this.uuid,url:""},i=this.data;if(i!==null){let s;if(Array.isArray(i)){s=[];for(let a=0,o=i.length;a<o;a++)i[a].isDataTexture?s.push(sc(i[a].image)):s.push(sc(i[a]))}else s=sc(i);n.url=s}return t||(e.images[this.uuid]=n),n}}function sc(r){return typeof HTMLImageElement<"u"&&r instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&r instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&r instanceof ImageBitmap?yx.getDataURL(r):r.data?{data:Array.from(r.data),width:r.width,height:r.height,type:r.data.constructor.name}:(We("Texture: Unable to serialize Texture."),{})}let Tx=0;const ac=new X;class _n extends ts{constructor(e=_n.DEFAULT_IMAGE,t=_n.DEFAULT_MAPPING,n=Hi,i=Hi,s=pn,a=Or,o=hi,c=Vn,l=_n.DEFAULT_ANISOTROPY,f=or){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Tx++}),this.uuid=no(),this.name="",this.source=new qf(e),this.mipmaps=[],this.mapping=t,this.channel=0,this.wrapS=n,this.wrapT=i,this.magFilter=s,this.minFilter=a,this.anisotropy=l,this.format=o,this.internalFormat=null,this.type=c,this.offset=new He(0,0),this.repeat=new He(1,1),this.center=new He(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new qe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(ac).x}get height(){return this.source.getSize(ac).y}get depth(){return this.source.getSize(ac).z}get image(){return this.source.data}set image(e){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.normalized=e.normalized,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const t in e){const n=e[t];if(n===void 0){We(`Texture.setValues(): parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){We(`Texture.setValues(): property '${t}' does not exist.`);continue}i&&n&&i.isVector2&&n.isVector2||i&&n&&i.isVector3&&n.isVector3||i&&n&&i.isMatrix3&&n.isMatrix3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";if(!t&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const n={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(n.userData=this.userData),t||(e.textures[this.uuid]=n),n}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==Bm)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case xu:e.x=e.x-Math.floor(e.x);break;case Hi:e.x=e.x<0?0:1;break;case vu:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case xu:e.y=e.y-Math.floor(e.y);break;case Hi:e.y=e.y<0?0:1;break;case vu:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}_n.DEFAULT_IMAGE=null;_n.DEFAULT_MAPPING=Bm;_n.DEFAULT_ANISOTROPY=1;class At{static{At.prototype.isVector4=!0}constructor(e=0,t=0,n=0,i=1){this.x=e,this.y=t,this.z=n,this.w=i}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,t,n,i){return this.x=e,this.y=t,this.z=n,this.w=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,t){switch(e){case 0:this.x=t;break;case 1:this.y=t;break;case 2:this.z=t;break;case 3:this.w=t;break;default:throw new Error("THREE.Vector4: index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,t){return this.x=e.x+t.x,this.y=e.y+t.y,this.z=e.z+t.z,this.w=e.w+t.w,this}addScaledVector(e,t){return this.x+=e.x*t,this.y+=e.y*t,this.z+=e.z*t,this.w+=e.w*t,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,t){return this.x=e.x-t.x,this.y=e.y-t.y,this.z=e.z-t.z,this.w=e.w-t.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const t=this.x,n=this.y,i=this.z,s=this.w,a=e.elements;return this.x=a[0]*t+a[4]*n+a[8]*i+a[12]*s,this.y=a[1]*t+a[5]*n+a[9]*i+a[13]*s,this.z=a[2]*t+a[6]*n+a[10]*i+a[14]*s,this.w=a[3]*t+a[7]*n+a[11]*i+a[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const t=Math.sqrt(1-e.w*e.w);return t<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/t,this.y=e.y/t,this.z=e.z/t),this}setAxisAngleFromRotationMatrix(e){let t,n,i,s;const c=e.elements,l=c[0],f=c[4],d=c[8],h=c[1],u=c[5],g=c[9],_=c[2],m=c[6],p=c[10];if(Math.abs(f-h)<.01&&Math.abs(d-_)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(d+_)<.1&&Math.abs(g+m)<.1&&Math.abs(l+u+p-3)<.1)return this.set(1,0,0,0),this;t=Math.PI;const E=(l+1)/2,S=(u+1)/2,y=(p+1)/2,w=(f+h)/4,A=(d+_)/4,x=(g+m)/4;return E>S&&E>y?E<.01?(n=0,i=.707106781,s=.707106781):(n=Math.sqrt(E),i=w/n,s=A/n):S>y?S<.01?(n=.707106781,i=0,s=.707106781):(i=Math.sqrt(S),n=w/i,s=x/i):y<.01?(n=.707106781,i=.707106781,s=0):(s=Math.sqrt(y),n=A/s,i=x/s),this.set(n,i,s,t),this}let M=Math.sqrt((m-g)*(m-g)+(d-_)*(d-_)+(h-f)*(h-f));return Math.abs(M)<.001&&(M=1),this.x=(m-g)/M,this.y=(d-_)/M,this.z=(h-f)/M,this.w=Math.acos((l+u+p-1)/2),this}setFromMatrixPosition(e){const t=e.elements;return this.x=t[12],this.y=t[13],this.z=t[14],this.w=t[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,t){return this.x=nt(this.x,e.x,t.x),this.y=nt(this.y,e.y,t.y),this.z=nt(this.z,e.z,t.z),this.w=nt(this.w,e.w,t.w),this}clampScalar(e,t){return this.x=nt(this.x,e,t),this.y=nt(this.y,e,t),this.z=nt(this.z,e,t),this.w=nt(this.w,e,t),this}clampLength(e,t){const n=this.length();return this.divideScalar(n||1).multiplyScalar(nt(n,e,t))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,t){return this.x+=(e.x-this.x)*t,this.y+=(e.y-this.y)*t,this.z+=(e.z-this.z)*t,this.w+=(e.w-this.w)*t,this}lerpVectors(e,t,n){return this.x=e.x+(t.x-e.x)*n,this.y=e.y+(t.y-e.y)*n,this.z=e.z+(t.z-e.z)*n,this.w=e.w+(t.w-e.w)*n,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,t=0){return this.x=e[t],this.y=e[t+1],this.z=e[t+2],this.w=e[t+3],this}toArray(e=[],t=0){return e[t]=this.x,e[t+1]=this.y,e[t+2]=this.z,e[t+3]=this.w,e}fromBufferAttribute(e,t){return this.x=e.getX(t),this.y=e.getY(t),this.z=e.getZ(t),this.w=e.getW(t),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Ex extends ts{constructor(e=1,t=1,n={}){super(),n=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:pn,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},n),this.isRenderTarget=!0,this.width=e,this.height=t,this.depth=n.depth,this.scissor=new At(0,0,e,t),this.scissorTest=!1,this.viewport=new At(0,0,e,t),this.textures=[];const i={width:e,height:t,depth:n.depth},s=new _n(i),a=n.count;for(let o=0;o<a;o++)this.textures[o]=s.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(n),this.depthBuffer=n.depthBuffer,this.stencilBuffer=n.stencilBuffer,this.resolveColorBuffer=n.resolveColorBuffer,this.resolveDepthBuffer=n.resolveDepthBuffer,this.resolveStencilBuffer=n.resolveStencilBuffer,this.storeMultisampledColorBuffer=n.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=n.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=n.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=n.depthTexture,this.samples=n.samples,this.multiview=n.multiview,this.useArrayDepthTexture=n.useArrayDepthTexture}_setTextureOptions(e={}){const t={minFilter:pn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(t.mapping=e.mapping),e.wrapS!==void 0&&(t.wrapS=e.wrapS),e.wrapT!==void 0&&(t.wrapT=e.wrapT),e.wrapR!==void 0&&(t.wrapR=e.wrapR),e.magFilter!==void 0&&(t.magFilter=e.magFilter),e.minFilter!==void 0&&(t.minFilter=e.minFilter),e.format!==void 0&&(t.format=e.format),e.type!==void 0&&(t.type=e.type),e.anisotropy!==void 0&&(t.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(t.colorSpace=e.colorSpace),e.flipY!==void 0&&(t.flipY=e.flipY),e.generateMipmaps!==void 0&&(t.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(t.internalFormat=e.internalFormat);for(let n=0;n<this.textures.length;n++)this.textures[n].setValues(t)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),e!==null&&e.renderTarget===null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,t,n=1){if(this.width!==e||this.height!==t||this.depth!==n){this.width=e,this.height=t,this.depth=n;for(let i=0,s=this.textures.length;i<s;i++)this.textures[i].image.width=e,this.textures[i].image.height=t,this.textures[i].image.depth=n,this.textures[i].isData3DTexture!==!0&&(this.textures[i].isArrayTexture=this.textures[i].image.depth>1);this.dispose()}this.viewport.set(0,0,e,t),this.scissor.set(0,0,e,t)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let t=0,n=e.textures.length;t<n;t++){this.textures[t]=e.textures[t].clone(),this.textures[t].isRenderTargetTexture=!0,this.textures[t].renderTarget=this;const i=Object.assign({},e.textures[t].image);this.textures[t].source=new qf(i)}if(this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveColorBuffer=e.resolveColorBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,this.storeMultisampledColorBuffer=e.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=e.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=e.storeMultisampledStencilBuffer,e.depthTexture!==null)if(e.depthTexture.renderTarget===e){const t=e.depthTexture.clone();t.renderTarget=null,this.depthTexture=t}else this.depthTexture=e.depthTexture;return this.samples=e.samples,this.multiview=e.multiview,this.useArrayDepthTexture=e.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}}class gn extends Ex{constructor(e=1,t=1,n={}){super(e,t,n),this.isWebGLRenderTarget=!0}}class Ym extends _n{constructor(e=null,t=1,n=1,i=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class wx extends _n{constructor(e=null,t=1,n=1,i=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:t,height:n,depth:i},this.magFilter=rn,this.minFilter=rn,this.wrapR=Hi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(e){return super.copy(e),this.wrapR=e.wrapR,this}}class ct{static{ct.prototype.isMatrix4=!0}constructor(e,t,n,i,s,a,o,c,l,f,d,h,u,g,_,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,t,n,i,s,a,o,c,l,f,d,h,u,g,_,m)}set(e,t,n,i,s,a,o,c,l,f,d,h,u,g,_,m){const p=this.elements;return p[0]=e,p[4]=t,p[8]=n,p[12]=i,p[1]=s,p[5]=a,p[9]=o,p[13]=c,p[2]=l,p[6]=f,p[10]=d,p[14]=h,p[3]=u,p[7]=g,p[11]=_,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new ct().fromArray(this.elements)}copy(e){const t=this.elements,n=e.elements;return t[0]=n[0],t[1]=n[1],t[2]=n[2],t[3]=n[3],t[4]=n[4],t[5]=n[5],t[6]=n[6],t[7]=n[7],t[8]=n[8],t[9]=n[9],t[10]=n[10],t[11]=n[11],t[12]=n[12],t[13]=n[13],t[14]=n[14],t[15]=n[15],this}copyPosition(e){const t=this.elements,n=e.elements;return t[12]=n[12],t[13]=n[13],t[14]=n[14],this}setFromMatrix3(e){const t=e.elements;return this.set(t[0],t[3],t[6],0,t[1],t[4],t[7],0,t[2],t[5],t[8],0,0,0,0,1),this}extractBasis(e,t,n){return this.determinantAffine()===0?(e.set(1,0,0),t.set(0,1,0),n.set(0,0,1),this):(e.setFromMatrixColumn(this,0),t.setFromMatrixColumn(this,1),n.setFromMatrixColumn(this,2),this)}makeBasis(e,t,n){return this.set(e.x,t.x,n.x,0,e.y,t.y,n.y,0,e.z,t.z,n.z,0,0,0,0,1),this}extractRotation(e){if(e.determinantAffine()===0)return this.identity();const t=this.elements,n=e.elements,i=1/hs.setFromMatrixColumn(e,0).length(),s=1/hs.setFromMatrixColumn(e,1).length(),a=1/hs.setFromMatrixColumn(e,2).length();return t[0]=n[0]*i,t[1]=n[1]*i,t[2]=n[2]*i,t[3]=0,t[4]=n[4]*s,t[5]=n[5]*s,t[6]=n[6]*s,t[7]=0,t[8]=n[8]*a,t[9]=n[9]*a,t[10]=n[10]*a,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromEuler(e){const t=this.elements,n=e.x,i=e.y,s=e.z,a=Math.cos(n),o=Math.sin(n),c=Math.cos(i),l=Math.sin(i),f=Math.cos(s),d=Math.sin(s);if(e.order==="XYZ"){const h=a*f,u=a*d,g=o*f,_=o*d;t[0]=c*f,t[4]=-c*d,t[8]=l,t[1]=u+g*l,t[5]=h-_*l,t[9]=-o*c,t[2]=_-h*l,t[6]=g+u*l,t[10]=a*c}else if(e.order==="YXZ"){const h=c*f,u=c*d,g=l*f,_=l*d;t[0]=h+_*o,t[4]=g*o-u,t[8]=a*l,t[1]=a*d,t[5]=a*f,t[9]=-o,t[2]=u*o-g,t[6]=_+h*o,t[10]=a*c}else if(e.order==="ZXY"){const h=c*f,u=c*d,g=l*f,_=l*d;t[0]=h-_*o,t[4]=-a*d,t[8]=g+u*o,t[1]=u+g*o,t[5]=a*f,t[9]=_-h*o,t[2]=-a*l,t[6]=o,t[10]=a*c}else if(e.order==="ZYX"){const h=a*f,u=a*d,g=o*f,_=o*d;t[0]=c*f,t[4]=g*l-u,t[8]=h*l+_,t[1]=c*d,t[5]=_*l+h,t[9]=u*l-g,t[2]=-l,t[6]=o*c,t[10]=a*c}else if(e.order==="YZX"){const h=a*c,u=a*l,g=o*c,_=o*l;t[0]=c*f,t[4]=_-h*d,t[8]=g*d+u,t[1]=d,t[5]=a*f,t[9]=-o*f,t[2]=-l*f,t[6]=u*d+g,t[10]=h-_*d}else if(e.order==="XZY"){const h=a*c,u=a*l,g=o*c,_=o*l;t[0]=c*f,t[4]=-d,t[8]=l*f,t[1]=h*d+_,t[5]=a*f,t[9]=u*d-g,t[2]=g*d-u,t[6]=o*f,t[10]=_*d+h}return t[3]=0,t[7]=0,t[11]=0,t[12]=0,t[13]=0,t[14]=0,t[15]=1,this}makeRotationFromQuaternion(e){return this.compose(Ax,e,Rx)}lookAt(e,t,n){const i=this.elements;return Ln.subVectors(e,t),Ln.lengthSq()===0&&(Ln.z=1),Ln.normalize(),er.crossVectors(n,Ln),er.lengthSq()===0&&(Math.abs(n.z)===1?Ln.x+=1e-4:Ln.z+=1e-4,Ln.normalize(),er.crossVectors(n,Ln)),er.normalize(),co.crossVectors(Ln,er),i[0]=er.x,i[4]=co.x,i[8]=Ln.x,i[1]=er.y,i[5]=co.y,i[9]=Ln.y,i[2]=er.z,i[6]=co.z,i[10]=Ln.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,t){const n=e.elements,i=t.elements,s=this.elements,a=n[0],o=n[4],c=n[8],l=n[12],f=n[1],d=n[5],h=n[9],u=n[13],g=n[2],_=n[6],m=n[10],p=n[14],M=n[3],E=n[7],S=n[11],y=n[15],w=i[0],A=i[4],x=i[8],b=i[12],C=i[1],L=i[5],N=i[9],U=i[13],I=i[2],G=i[6],W=i[10],Y=i[14],se=i[3],Q=i[7],oe=i[11],ee=i[15];return s[0]=a*w+o*C+c*I+l*se,s[4]=a*A+o*L+c*G+l*Q,s[8]=a*x+o*N+c*W+l*oe,s[12]=a*b+o*U+c*Y+l*ee,s[1]=f*w+d*C+h*I+u*se,s[5]=f*A+d*L+h*G+u*Q,s[9]=f*x+d*N+h*W+u*oe,s[13]=f*b+d*U+h*Y+u*ee,s[2]=g*w+_*C+m*I+p*se,s[6]=g*A+_*L+m*G+p*Q,s[10]=g*x+_*N+m*W+p*oe,s[14]=g*b+_*U+m*Y+p*ee,s[3]=M*w+E*C+S*I+y*se,s[7]=M*A+E*L+S*G+y*Q,s[11]=M*x+E*N+S*W+y*oe,s[15]=M*b+E*U+S*Y+y*ee,this}multiplyScalar(e){const t=this.elements;return t[0]*=e,t[4]*=e,t[8]*=e,t[12]*=e,t[1]*=e,t[5]*=e,t[9]*=e,t[13]*=e,t[2]*=e,t[6]*=e,t[10]*=e,t[14]*=e,t[3]*=e,t[7]*=e,t[11]*=e,t[15]*=e,this}determinant(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[12],a=e[1],o=e[5],c=e[9],l=e[13],f=e[2],d=e[6],h=e[10],u=e[14],g=e[3],_=e[7],m=e[11],p=e[15],M=c*u-l*h,E=o*u-l*d,S=o*h-c*d,y=a*u-l*f,w=a*h-c*f,A=a*d-o*f;return t*(_*M-m*E+p*S)-n*(g*M-m*y+p*w)+i*(g*E-_*y+p*A)-s*(g*S-_*w+m*A)}determinantAffine(){const e=this.elements,t=e[0],n=e[4],i=e[8],s=e[1],a=e[5],o=e[9],c=e[2],l=e[6],f=e[10];return t*(a*f-o*l)-n*(s*f-o*c)+i*(s*l-a*c)}transpose(){const e=this.elements;let t;return t=e[1],e[1]=e[4],e[4]=t,t=e[2],e[2]=e[8],e[8]=t,t=e[6],e[6]=e[9],e[9]=t,t=e[3],e[3]=e[12],e[12]=t,t=e[7],e[7]=e[13],e[13]=t,t=e[11],e[11]=e[14],e[14]=t,this}setPosition(e,t,n){const i=this.elements;return e.isVector3?(i[12]=e.x,i[13]=e.y,i[14]=e.z):(i[12]=e,i[13]=t,i[14]=n),this}invert(){const e=this.elements,t=e[0],n=e[1],i=e[2],s=e[3],a=e[4],o=e[5],c=e[6],l=e[7],f=e[8],d=e[9],h=e[10],u=e[11],g=e[12],_=e[13],m=e[14],p=e[15],M=t*o-n*a,E=t*c-i*a,S=t*l-s*a,y=n*c-i*o,w=n*l-s*o,A=i*l-s*c,x=f*_-d*g,b=f*m-h*g,C=f*p-u*g,L=d*m-h*_,N=d*p-u*_,U=h*p-u*m,I=M*U-E*N+S*L+y*C-w*b+A*x;if(I===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const G=1/I;return e[0]=(o*U-c*N+l*L)*G,e[1]=(i*N-n*U-s*L)*G,e[2]=(_*A-m*w+p*y)*G,e[3]=(h*w-d*A-u*y)*G,e[4]=(c*C-a*U-l*b)*G,e[5]=(t*U-i*C+s*b)*G,e[6]=(m*S-g*A-p*E)*G,e[7]=(f*A-h*S+u*E)*G,e[8]=(a*N-o*C+l*x)*G,e[9]=(n*C-t*N-s*x)*G,e[10]=(g*w-_*S+p*M)*G,e[11]=(d*S-f*w-u*M)*G,e[12]=(o*b-a*L-c*x)*G,e[13]=(t*L-n*b+i*x)*G,e[14]=(_*E-g*y-m*M)*G,e[15]=(f*y-d*E+h*M)*G,this}scale(e){const t=this.elements,n=e.x,i=e.y,s=e.z;return t[0]*=n,t[4]*=i,t[8]*=s,t[1]*=n,t[5]*=i,t[9]*=s,t[2]*=n,t[6]*=i,t[10]*=s,t[3]*=n,t[7]*=i,t[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,t=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],n=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],i=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(t,n,i))}makeTranslation(e,t,n){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,t,0,0,1,n,0,0,0,1),this}makeRotationX(e){const t=Math.cos(e),n=Math.sin(e);return this.set(1,0,0,0,0,t,-n,0,0,n,t,0,0,0,0,1),this}makeRotationY(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,0,n,0,0,1,0,0,-n,0,t,0,0,0,0,1),this}makeRotationZ(e){const t=Math.cos(e),n=Math.sin(e);return this.set(t,-n,0,0,n,t,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,t){const n=Math.cos(t),i=Math.sin(t),s=1-n,a=e.x,o=e.y,c=e.z,l=s*a,f=s*o;return this.set(l*a+n,l*o-i*c,l*c+i*o,0,l*o+i*c,f*o+n,f*c-i*a,0,l*c-i*o,f*c+i*a,s*c*c+n,0,0,0,0,1),this}makeScale(e,t,n){return this.set(e,0,0,0,0,t,0,0,0,0,n,0,0,0,0,1),this}makeShear(e,t,n,i,s,a){return this.set(1,n,s,0,e,1,a,0,t,i,1,0,0,0,0,1),this}compose(e,t,n){const i=this.elements,s=t._x,a=t._y,o=t._z,c=t._w,l=s+s,f=a+a,d=o+o,h=s*l,u=s*f,g=s*d,_=a*f,m=a*d,p=o*d,M=c*l,E=c*f,S=c*d,y=n.x,w=n.y,A=n.z;return i[0]=(1-(_+p))*y,i[1]=(u+S)*y,i[2]=(g-E)*y,i[3]=0,i[4]=(u-S)*w,i[5]=(1-(h+p))*w,i[6]=(m+M)*w,i[7]=0,i[8]=(g+E)*A,i[9]=(m-M)*A,i[10]=(1-(h+_))*A,i[11]=0,i[12]=e.x,i[13]=e.y,i[14]=e.z,i[15]=1,this}decompose(e,t,n){const i=this.elements;e.x=i[12],e.y=i[13],e.z=i[14];const s=this.determinantAffine();if(s===0)return n.set(1,1,1),t.identity(),this;let a=hs.set(i[0],i[1],i[2]).length();const o=hs.set(i[4],i[5],i[6]).length(),c=hs.set(i[8],i[9],i[10]).length();s<0&&(a=-a),ii.copy(this);const l=1/a,f=1/o,d=1/c;return ii.elements[0]*=l,ii.elements[1]*=l,ii.elements[2]*=l,ii.elements[4]*=f,ii.elements[5]*=f,ii.elements[6]*=f,ii.elements[8]*=d,ii.elements[9]*=d,ii.elements[10]*=d,t.setFromRotationMatrix(ii),n.x=a,n.y=o,n.z=c,this}makePerspective(e,t,n,i,s,a,o=Ti,c=!1){const l=this.elements,f=2*s/(t-e),d=2*s/(n-i),h=(t+e)/(t-e),u=(n+i)/(n-i);let g,_;if(c)g=s/(a-s),_=a*s/(a-s);else if(o===Ti)g=-(a+s)/(a-s),_=-2*a*s/(a-s);else if(o===Ja)g=-a/(a-s),_=-a*s/(a-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=h,l[12]=0,l[1]=0,l[5]=d,l[9]=u,l[13]=0,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=-1,l[15]=0,this}makeOrthographic(e,t,n,i,s,a,o=Ti,c=!1){const l=this.elements,f=2/(t-e),d=2/(n-i),h=-(t+e)/(t-e),u=-(n+i)/(n-i);let g,_;if(c)g=1/(a-s),_=a/(a-s);else if(o===Ti)g=-2/(a-s),_=-(a+s)/(a-s);else if(o===Ja)g=-1/(a-s),_=-s/(a-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return l[0]=f,l[4]=0,l[8]=0,l[12]=h,l[1]=0,l[5]=d,l[9]=0,l[13]=u,l[2]=0,l[6]=0,l[10]=g,l[14]=_,l[3]=0,l[7]=0,l[11]=0,l[15]=1,this}equals(e){const t=this.elements,n=e.elements;for(let i=0;i<16;i++)if(t[i]!==n[i])return!1;return!0}fromArray(e,t=0){for(let n=0;n<16;n++)this.elements[n]=e[n+t];return this}toArray(e=[],t=0){const n=this.elements;return e[t]=n[0],e[t+1]=n[1],e[t+2]=n[2],e[t+3]=n[3],e[t+4]=n[4],e[t+5]=n[5],e[t+6]=n[6],e[t+7]=n[7],e[t+8]=n[8],e[t+9]=n[9],e[t+10]=n[10],e[t+11]=n[11],e[t+12]=n[12],e[t+13]=n[13],e[t+14]=n[14],e[t+15]=n[15],e}}const hs=new X,ii=new ct,Ax=new X(0,0,0),Rx=new X(1,1,1),er=new X,co=new X,Ln=new X,id=new ct,rd=new Qs;class vr{constructor(e=0,t=0,n=0,i=vr.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=t,this._z=n,this._order=i}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,t,n,i=this._order){return this._x=e,this._y=t,this._z=n,this._order=i,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,t=this._order,n=!0){const i=e.elements,s=i[0],a=i[4],o=i[8],c=i[1],l=i[5],f=i[9],d=i[2],h=i[6],u=i[10];switch(t){case"XYZ":this._y=Math.asin(nt(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-f,u),this._z=Math.atan2(-a,s)):(this._x=Math.atan2(h,l),this._z=0);break;case"YXZ":this._x=Math.asin(-nt(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(o,u),this._z=Math.atan2(c,l)):(this._y=Math.atan2(-d,s),this._z=0);break;case"ZXY":this._x=Math.asin(nt(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-d,u),this._z=Math.atan2(-a,l)):(this._y=0,this._z=Math.atan2(c,s));break;case"ZYX":this._y=Math.asin(-nt(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(h,u),this._z=Math.atan2(c,s)):(this._x=0,this._z=Math.atan2(-a,l));break;case"YZX":this._z=Math.asin(nt(c,-1,1)),Math.abs(c)<.9999999?(this._x=Math.atan2(-f,l),this._y=Math.atan2(-d,s)):(this._x=0,this._y=Math.atan2(o,u));break;case"XZY":this._z=Math.asin(-nt(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(h,l),this._y=Math.atan2(o,s)):(this._x=Math.atan2(-f,u),this._y=0);break;default:We("Euler: .setFromRotationMatrix() encountered an unknown order: "+t)}return this._order=t,n===!0&&this._onChangeCallback(),this}setFromQuaternion(e,t,n){return id.makeRotationFromQuaternion(e),this.setFromRotationMatrix(id,t,n)}setFromVector3(e,t=this._order){return this.set(e.x,e.y,e.z,t)}reorder(e){return rd.setFromEuler(this),this.setFromQuaternion(rd,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],t=0){return e[t]=this._x,e[t+1]=this._y,e[t+2]=this._z,e[t+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}vr.DEFAULT_ORDER="XYZ";class $f{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let Cx=0;const sd=new X,ds=new Qs,Di=new ct,uo=new X,sa=new X,Px=new X,Dx=new Qs,ad=new X(1,0,0),od=new X(0,1,0),ld=new X(0,0,1),cd={type:"added"},Lx={type:"removed"},ps={type:"childadded",child:null},oc={type:"childremoved",child:null};class an extends ts{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:Cx++}),this.uuid=no(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=an.DEFAULT_UP.clone();const e=new X,t=new vr,n=new Qs,i=new X(1,1,1);function s(){n.setFromEuler(t,!1)}function a(){t.setFromQuaternion(n,void 0,!1)}t._onChange(s),n._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:t},quaternion:{configurable:!0,enumerable:!0,value:n},scale:{configurable:!0,enumerable:!0,value:i},modelViewMatrix:{value:new ct},normalMatrix:{value:new qe}}),this.matrix=new ct,this.matrixWorld=new ct,this.matrixAutoUpdate=an.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new $f,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,t){this.quaternion.setFromAxisAngle(e,t)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.multiply(ds),this}rotateOnWorldAxis(e,t){return ds.setFromAxisAngle(e,t),this.quaternion.premultiply(ds),this}rotateX(e){return this.rotateOnAxis(ad,e)}rotateY(e){return this.rotateOnAxis(od,e)}rotateZ(e){return this.rotateOnAxis(ld,e)}translateOnAxis(e,t){return sd.copy(e).applyQuaternion(this.quaternion),this.position.add(sd.multiplyScalar(t)),this}translateX(e){return this.translateOnAxis(ad,e)}translateY(e){return this.translateOnAxis(od,e)}translateZ(e){return this.translateOnAxis(ld,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(Di.copy(this.matrixWorld).invert())}lookAt(e,t,n){e.isVector3?uo.copy(e):uo.set(e,t,n);const i=this.parent;this.updateWorldMatrix(!0,!1),sa.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Di.lookAt(sa,uo,this.up):Di.lookAt(uo,sa,this.up),this.quaternion.setFromRotationMatrix(Di),i&&(Di.extractRotation(i.matrixWorld),ds.setFromRotationMatrix(Di),this.quaternion.premultiply(ds.invert()))}add(e){if(arguments.length>1){for(let t=0;t<arguments.length;t++)this.add(arguments[t]);return this}return e===this?(at("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(cd),ps.child=e,this.dispatchEvent(ps),ps.child=null):at("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.remove(arguments[n]);return this}const t=this.children.indexOf(e);return t!==-1&&(e.parent=null,this.children.splice(t,1),e.dispatchEvent(Lx),oc.child=e,this.dispatchEvent(oc),oc.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),Di.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),Di.multiply(e.parent.matrixWorld)),e.applyMatrix4(Di),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(cd),ps.child=e,this.dispatchEvent(ps),ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,t){if(this[e]===t)return this;for(let n=0,i=this.children.length;n<i;n++){const a=this.children[n].getObjectByProperty(e,t);if(a!==void 0)return a}}getObjectsByProperty(e,t,n=[]){this[e]===t&&n.push(this);const i=this.children;for(let s=0,a=i.length;s<a;s++)i[s].getObjectsByProperty(e,t,n);return n}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,e,Px),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(sa,Dx,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const t=this.matrixWorld.elements;return e.set(t[8],t[9],t[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(e){e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].traverseVisible(e)}traverseAncestors(e){const t=this.parent;t!==null&&(e(t),t.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);const e=this.pivot;if(e!==null){const t=e.x,n=e.y,i=e.z,s=this.matrix.elements;s[12]+=t-s[0]*t-s[4]*n-s[8]*i,s[13]+=n-s[1]*t-s[5]*n-s[9]*i,s[14]+=i-s[2]*t-s[6]*n-s[10]*i}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const t=this.children;for(let n=0,i=t.length;n<i;n++)t[n].updateMatrixWorld(e)}updateWorldMatrix(e,t,n=!1){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||n)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,n=!0),t===!0){const s=this.children;for(let a=0,o=s.length;a<o;a++)s[a].updateWorldMatrix(!1,!0,n)}}toJSON(e){const t=e===void 0||typeof e=="string",n={};t&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},n.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const i={};i.uuid=this.uuid,i.type=this.type,i.name=this.name,i.castShadow=this.castShadow,i.receiveShadow=this.receiveShadow,i.visible=this.visible,i.frustumCulled=this.frustumCulled,i.renderOrder=this.renderOrder,i.static=this.static,i.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(i.userData=this.userData),i.layers=this.layers.mask,i.matrix=this.matrix.toArray(),i.up=this.up.toArray(),this.pivot!==null&&(i.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(i.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(i.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(i.type="InstancedMesh",i.count=this.count,i.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(i.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(i.type="BatchedMesh",i.perObjectFrustumCulled=this.perObjectFrustumCulled,i.sortObjects=this.sortObjects,i.drawRanges=this._drawRanges,i.reservedRanges=this._reservedRanges,i.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),i.instanceInfo=this._instanceInfo.map(o=>({...o})),i.availableInstanceIds=this._availableInstanceIds.slice(),i.availableGeometryIds=this._availableGeometryIds.slice(),i.nextIndexStart=this._nextIndexStart,i.nextVertexStart=this._nextVertexStart,i.geometryCount=this._geometryCount,i.maxInstanceCount=this._maxInstanceCount,i.maxVertexCount=this._maxVertexCount,i.maxIndexCount=this._maxIndexCount,i.geometryInitialized=this._geometryInitialized,i.matricesTexture=this._matricesTexture.toJSON(e),i.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(i.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(i.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(i.boundingBox=this.boundingBox.toJSON()));function s(o,c){return o[c.uuid]===void 0&&(o[c.uuid]=c.toJSON(e)),c.uuid}if(this.isScene)this.background&&(this.background.isColor?i.background=this.background.toJSON():this.background.isTexture&&(i.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(i.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){i.geometry=s(e.geometries,this.geometry);const o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){const c=o.shapes;if(Array.isArray(c))for(let l=0,f=c.length;l<f;l++){const d=c[l];s(e.shapes,d)}else s(e.shapes,c)}}if(this.isSkinnedMesh&&(i.bindMode=this.bindMode,i.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),i.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const o=[];for(let c=0,l=this.material.length;c<l;c++)o.push(s(e.materials,this.material[c]));i.material=o}else i.material=s(e.materials,this.material);if(this.children.length>0){i.children=[];for(let o=0;o<this.children.length;o++)i.children.push(this.children[o].toJSON(e).object)}if(this.animations.length>0){i.animations=[];for(let o=0;o<this.animations.length;o++){const c=this.animations[o];i.animations.push(s(e.animations,c))}}if(t){const o=a(e.geometries),c=a(e.materials),l=a(e.textures),f=a(e.images),d=a(e.shapes),h=a(e.skeletons),u=a(e.animations),g=a(e.nodes);o.length>0&&(n.geometries=o),c.length>0&&(n.materials=c),l.length>0&&(n.textures=l),f.length>0&&(n.images=f),d.length>0&&(n.shapes=d),h.length>0&&(n.skeletons=h),u.length>0&&(n.animations=u),g.length>0&&(n.nodes=g)}return n.object=i,n;function a(o){const c=[];for(const l in o){const f=o[l];delete f.metadata,c.push(f)}return c}}clone(e){return new this.constructor().copy(this,e)}copy(e,t=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.pivot=e.pivot!==null?e.pivot.clone():null,this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.static=e.static,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),t===!0)for(let n=0;n<e.children.length;n++){const i=e.children[n];this.add(i.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}}an.DEFAULT_UP=new X(0,1,0);an.DEFAULT_MATRIX_AUTO_UPDATE=!0;an.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;class Ta extends an{constructor(){super(),this.isGroup=!0,this.type="Group"}}const Ix={type:"move"};class lc{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Ta,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Ta,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new X,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new X),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Ta,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new X,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new X,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const t=this._hand;if(t)for(const n of e.hand.values())this._getHandJoint(t,n)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,t,n){let i=null,s=null,a=null;const o=this._targetRay,c=this._grip,l=this._hand;if(e&&t.session.visibilityState!=="visible-blurred"){if(l&&e.hand){a=!0;for(const _ of e.hand.values()){const m=t.getJointPose(_,n),p=this._getHandJoint(l,_);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}const f=l.joints["index-finger-tip"],d=l.joints["thumb-tip"],h=f.position.distanceTo(d.position),u=.02,g=.005;l.inputState.pinching&&h>u+g?(l.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!l.inputState.pinching&&h<=u-g&&(l.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else c!==null&&e.gripSpace&&(s=t.getPose(e.gripSpace,n),s!==null&&(c.matrix.fromArray(s.transform.matrix),c.matrix.decompose(c.position,c.rotation,c.scale),c.matrixWorldNeedsUpdate=!0,s.linearVelocity?(c.hasLinearVelocity=!0,c.linearVelocity.copy(s.linearVelocity)):c.hasLinearVelocity=!1,s.angularVelocity?(c.hasAngularVelocity=!0,c.angularVelocity.copy(s.angularVelocity)):c.hasAngularVelocity=!1,c.eventsEnabled&&c.dispatchEvent({type:"gripUpdated",data:e,target:this})));o!==null&&(i=t.getPose(e.targetRaySpace,n),i===null&&s!==null&&(i=s),i!==null&&(o.matrix.fromArray(i.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,i.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(i.linearVelocity)):o.hasLinearVelocity=!1,i.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(i.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(Ix)))}return o!==null&&(o.visible=i!==null),c!==null&&(c.visible=s!==null),l!==null&&(l.visible=a!==null),this}_getHandJoint(e,t){if(e.joints[t.jointName]===void 0){const n=new Ta;n.matrixAutoUpdate=!1,n.visible=!1,e.joints[t.jointName]=n,e.add(n)}return e.joints[t.jointName]}}const qm={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},tr={h:0,s:0,l:0},fo={h:0,s:0,l:0};function cc(r,e,t){return t<0&&(t+=1),t>1&&(t-=1),t<1/6?r+(e-r)*6*t:t<1/2?e:t<2/3?r+(e-r)*6*(2/3-t):r}class Xe{constructor(e,t,n){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,t,n)}set(e,t,n){if(t===void 0&&n===void 0){const i=e;i&&i.isColor?this.copy(i):typeof i=="number"?this.setHex(i):typeof i=="string"&&this.setStyle(i)}else this.setRGB(e,t,n);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,t=On){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,et.colorSpaceToWorking(this,t),this}setRGB(e,t,n,i=et.workingColorSpace){return this.r=e,this.g=t,this.b=n,et.colorSpaceToWorking(this,i),this}setHSL(e,t,n,i=et.workingColorSpace){if(e=Mx(e,1),t=nt(t,0,1),n=nt(n,0,1),t===0)this.r=this.g=this.b=n;else{const s=n<=.5?n*(1+t):n+t-n*t,a=2*n-s;this.r=cc(a,s,e+1/3),this.g=cc(a,s,e),this.b=cc(a,s,e-1/3)}return et.colorSpaceToWorking(this,i),this}setStyle(e,t=On){function n(s){s!==void 0&&parseFloat(s)<1&&We("Color: Alpha component of "+e+" will be ignored.")}let i;if(i=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const a=i[1],o=i[2];switch(a){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,t);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,t);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return n(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,t);break;default:We("Color: Unknown color model "+e)}}else if(i=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=i[1],a=s.length;if(a===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,t);if(a===6)return this.setHex(parseInt(s,16),t);We("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,t);return this}setColorName(e,t=On){const n=qm[e.toLowerCase()];return n!==void 0?this.setHex(n,t):We("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=Xi(e.r),this.g=Xi(e.g),this.b=Xi(e.b),this}copyLinearToSRGB(e){return this.r=ks(e.r),this.g=ks(e.g),this.b=ks(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=On){return et.workingToColorSpace(un.copy(this),e),Math.round(nt(un.r*255,0,255))*65536+Math.round(nt(un.g*255,0,255))*256+Math.round(nt(un.b*255,0,255))}getHexString(e=On){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,t=et.workingColorSpace){et.workingToColorSpace(un.copy(this),t);const n=un.r,i=un.g,s=un.b,a=Math.max(n,i,s),o=Math.min(n,i,s);let c,l;const f=(o+a)/2;if(o===a)c=0,l=0;else{const d=a-o;switch(l=f<=.5?d/(a+o):d/(2-a-o),a){case n:c=(i-s)/d+(i<s?6:0);break;case i:c=(s-n)/d+2;break;case s:c=(n-i)/d+4;break}c/=6}return e.h=c,e.s=l,e.l=f,e}getRGB(e,t=et.workingColorSpace){return et.workingToColorSpace(un.copy(this),t),e.r=un.r,e.g=un.g,e.b=un.b,e}getStyle(e=On){et.workingToColorSpace(un.copy(this),e);const t=un.r,n=un.g,i=un.b;return e!==On?`color(${e} ${t.toFixed(3)} ${n.toFixed(3)} ${i.toFixed(3)})`:`rgb(${Math.round(t*255)},${Math.round(n*255)},${Math.round(i*255)})`}offsetHSL(e,t,n){return this.getHSL(tr),this.setHSL(tr.h+e,tr.s+t,tr.l+n)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,t){return this.r=e.r+t.r,this.g=e.g+t.g,this.b=e.b+t.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,t){return this.r+=(e.r-this.r)*t,this.g+=(e.g-this.g)*t,this.b+=(e.b-this.b)*t,this}lerpColors(e,t,n){return this.r=e.r+(t.r-e.r)*n,this.g=e.g+(t.g-e.g)*n,this.b=e.b+(t.b-e.b)*n,this}lerpHSL(e,t){this.getHSL(tr),e.getHSL(fo);const n=nc(tr.h,fo.h,t),i=nc(tr.s,fo.s,t),s=nc(tr.l,fo.l,t);return this.setHSL(n,i,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const t=this.r,n=this.g,i=this.b,s=e.elements;return this.r=s[0]*t+s[3]*n+s[6]*i,this.g=s[1]*t+s[4]*n+s[7]*i,this.b=s[2]*t+s[5]*n+s[8]*i,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,t=0){return this.r=e[t],this.g=e[t+1],this.b=e[t+2],this}toArray(e=[],t=0){return e[t]=this.r,e[t+1]=this.g,e[t+2]=this.b,e}fromBufferAttribute(e,t){return this.r=e.getX(t),this.g=e.getY(t),this.b=e.getZ(t),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const un=new Xe;Xe.NAMES=qm;class Kf{constructor(e,t=25e-5){this.isFogExp2=!0,this.name="",this.color=new Xe(e),this.density=t}clone(){return new Kf(this.color,this.density)}toJSON(){return{type:"FogExp2",name:this.name,color:this.color.getHex(),density:this.density}}}class Ux extends an{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new vr,this.environmentIntensity=1,this.environmentRotation=new vr,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,t){return super.copy(e,t),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const t=super.toJSON(e);return this.fog!==null&&(t.object.fog=this.fog.toJSON()),t.object.backgroundBlurriness=this.backgroundBlurriness,t.object.backgroundIntensity=this.backgroundIntensity,t.object.backgroundRotation=this.backgroundRotation.toArray(),t.object.environmentIntensity=this.environmentIntensity,t.object.environmentRotation=this.environmentRotation.toArray(),t}}const ri=new X,Li=new X,uc=new X,Ii=new X,ms=new X,_s=new X,ud=new X,fc=new X,hc=new X,dc=new X,pc=new At,mc=new At,_c=new At;class ci{constructor(e=new X,t=new X,n=new X){this.a=e,this.b=t,this.c=n}static getNormal(e,t,n,i){i.subVectors(n,t),ri.subVectors(e,t),i.cross(ri);const s=i.lengthSq();return s>0?i.multiplyScalar(1/Math.sqrt(s)):i.set(0,0,0)}static getBarycoord(e,t,n,i,s){ri.subVectors(i,t),Li.subVectors(n,t),uc.subVectors(e,t);const a=ri.dot(ri),o=ri.dot(Li),c=ri.dot(uc),l=Li.dot(Li),f=Li.dot(uc),d=a*l-o*o;if(d===0)return s.set(0,0,0),null;const h=1/d,u=(l*c-o*f)*h,g=(a*f-o*c)*h;return s.set(1-u-g,g,u)}static containsPoint(e,t,n,i){return this.getBarycoord(e,t,n,i,Ii)===null?!1:Ii.x>=0&&Ii.y>=0&&Ii.x+Ii.y<=1}static getInterpolation(e,t,n,i,s,a,o,c){return this.getBarycoord(e,t,n,i,Ii)===null?(c.x=0,c.y=0,"z"in c&&(c.z=0),"w"in c&&(c.w=0),null):(c.setScalar(0),c.addScaledVector(s,Ii.x),c.addScaledVector(a,Ii.y),c.addScaledVector(o,Ii.z),c)}static getInterpolatedAttribute(e,t,n,i,s,a){return pc.setScalar(0),mc.setScalar(0),_c.setScalar(0),pc.fromBufferAttribute(e,t),mc.fromBufferAttribute(e,n),_c.fromBufferAttribute(e,i),a.setScalar(0),a.addScaledVector(pc,s.x),a.addScaledVector(mc,s.y),a.addScaledVector(_c,s.z),a}static isFrontFacing(e,t,n,i){return ri.subVectors(n,t),Li.subVectors(e,t),ri.cross(Li).dot(i)<0}set(e,t,n){return this.a.copy(e),this.b.copy(t),this.c.copy(n),this}setFromPointsAndIndices(e,t,n,i){return this.a.copy(e[t]),this.b.copy(e[n]),this.c.copy(e[i]),this}setFromAttributeAndIndices(e,t,n,i){return this.a.fromBufferAttribute(e,t),this.b.fromBufferAttribute(e,n),this.c.fromBufferAttribute(e,i),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Li.subVectors(this.a,this.b),ri.cross(Li).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ci.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,t){return ci.getBarycoord(e,this.a,this.b,this.c,t)}getInterpolation(e,t,n,i,s){return ci.getInterpolation(e,this.a,this.b,this.c,t,n,i,s)}containsPoint(e){return ci.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ci.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,t){const n=this.a,i=this.b,s=this.c;let a,o;ms.subVectors(i,n),_s.subVectors(s,n),fc.subVectors(e,n);const c=ms.dot(fc),l=_s.dot(fc);if(c<=0&&l<=0)return t.copy(n);hc.subVectors(e,i);const f=ms.dot(hc),d=_s.dot(hc);if(f>=0&&d<=f)return t.copy(i);const h=c*d-f*l;if(h<=0&&c>=0&&f<=0)return a=c/(c-f),t.copy(n).addScaledVector(ms,a);dc.subVectors(e,s);const u=ms.dot(dc),g=_s.dot(dc);if(g>=0&&u<=g)return t.copy(s);const _=u*l-c*g;if(_<=0&&l>=0&&g<=0)return o=l/(l-g),t.copy(n).addScaledVector(_s,o);const m=f*g-u*d;if(m<=0&&d-f>=0&&u-g>=0)return ud.subVectors(s,i),o=(d-f)/(d-f+(u-g)),t.copy(i).addScaledVector(ud,o);const p=1/(m+_+h);return a=_*p,o=h*p,t.copy(n).addScaledVector(ms,a).addScaledVector(_s,o)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}class ns{constructor(e=new X(1/0,1/0,1/0),t=new X(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=t}set(e,t){return this.min.copy(e),this.max.copy(t),this}setFromArray(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t+=3)this.expandByPoint(si.fromArray(e,t));return this}setFromBufferAttribute(e){this.makeEmpty();for(let t=0,n=e.count;t<n;t++)this.expandByPoint(si.fromBufferAttribute(e,t));return this}setFromPoints(e){this.makeEmpty();for(let t=0,n=e.length;t<n;t++)this.expandByPoint(e[t]);return this}setFromCenterAndSize(e,t){const n=si.copy(t).multiplyScalar(.5);return this.min.copy(e).sub(n),this.max.copy(e).add(n),this}setFromObject(e,t=!1){return this.makeEmpty(),this.expandByObject(e,t)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,t=!1){e.updateWorldMatrix(!1,!1);const n=e.geometry;if(n!==void 0){const s=n.getAttribute("position");if(t===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let a=0,o=s.count;a<o;a++)e.isMesh===!0?e.getVertexPosition(a,si):si.fromBufferAttribute(s,a),si.applyMatrix4(e.matrixWorld),this.expandByPoint(si);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),ho.copy(e.boundingBox)):(n.boundingBox===null&&n.computeBoundingBox(),ho.copy(n.boundingBox)),ho.applyMatrix4(e.matrixWorld),this.union(ho)}const i=e.children;for(let s=0,a=i.length;s<a;s++)this.expandByObject(i[s],t);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,t){return t.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,si),si.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let t,n;return e.normal.x>0?(t=e.normal.x*this.min.x,n=e.normal.x*this.max.x):(t=e.normal.x*this.max.x,n=e.normal.x*this.min.x),e.normal.y>0?(t+=e.normal.y*this.min.y,n+=e.normal.y*this.max.y):(t+=e.normal.y*this.max.y,n+=e.normal.y*this.min.y),e.normal.z>0?(t+=e.normal.z*this.min.z,n+=e.normal.z*this.max.z):(t+=e.normal.z*this.max.z,n+=e.normal.z*this.min.z),t<=-e.constant&&n>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(aa),po.subVectors(this.max,aa),gs.subVectors(e.a,aa),xs.subVectors(e.b,aa),vs.subVectors(e.c,aa),nr.subVectors(xs,gs),ir.subVectors(vs,xs),Er.subVectors(gs,vs);let t=[0,-nr.z,nr.y,0,-ir.z,ir.y,0,-Er.z,Er.y,nr.z,0,-nr.x,ir.z,0,-ir.x,Er.z,0,-Er.x,-nr.y,nr.x,0,-ir.y,ir.x,0,-Er.y,Er.x,0];return!gc(t,gs,xs,vs,po)||(t=[1,0,0,0,1,0,0,0,1],!gc(t,gs,xs,vs,po))?!1:(mo.crossVectors(nr,ir),t=[mo.x,mo.y,mo.z],gc(t,gs,xs,vs,po))}clampPoint(e,t){return t.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,si).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(si).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Ui[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Ui[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Ui[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Ui[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Ui[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Ui[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Ui[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Ui[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Ui),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Ui=[new X,new X,new X,new X,new X,new X,new X,new X],si=new X,ho=new ns,gs=new X,xs=new X,vs=new X,nr=new X,ir=new X,Er=new X,aa=new X,po=new X,mo=new X,wr=new X;function gc(r,e,t,n,i){for(let s=0,a=r.length-3;s<=a;s+=3){wr.fromArray(r,s);const o=i.x*Math.abs(wr.x)+i.y*Math.abs(wr.y)+i.z*Math.abs(wr.z),c=e.dot(wr),l=t.dot(wr),f=n.dot(wr);if(Math.max(-Math.max(c,l,f),Math.min(c,l,f))>o)return!1}return!0}const Gt=new X,_o=new He;let Nx=0;class Xn extends ts{constructor(e,t,n=!1){if(super(),Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:Nx++}),this.name="",this.array=e,this.itemSize=t,this.count=e!==void 0?e.length/t:0,this.normalized=n,this.usage=mx,this.updateRanges=[],this.gpuType=fi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,t){this.updateRanges.push({start:e,count:t})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,t,n){e*=this.itemSize,n*=t.itemSize;for(let i=0,s=this.itemSize;i<s;i++)this.array[e+i]=t.array[n+i];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let t=0,n=this.count;t<n;t++)_o.fromBufferAttribute(this,t),_o.applyMatrix3(e),this.setXY(t,_o.x,_o.y);else if(this.itemSize===3)for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix3(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyMatrix4(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyMatrix4(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}applyNormalMatrix(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.applyNormalMatrix(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}transformDirection(e){for(let t=0,n=this.count;t<n;t++)Gt.fromBufferAttribute(this,t),Gt.transformDirection(e),this.setXYZ(t,Gt.x,Gt.y,Gt.z);return this}set(e,t=0){return this.array.set(e,t),this}getComponent(e,t){let n=this.array[e*this.itemSize+t];return this.normalized&&(n=ra(n,this.array)),n}setComponent(e,t,n){return this.normalized&&(n=bn(n,this.array)),this.array[e*this.itemSize+t]=n,this}getX(e){let t=this.array[e*this.itemSize];return this.normalized&&(t=ra(t,this.array)),t}setX(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize]=t,this}getY(e){let t=this.array[e*this.itemSize+1];return this.normalized&&(t=ra(t,this.array)),t}setY(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+1]=t,this}getZ(e){let t=this.array[e*this.itemSize+2];return this.normalized&&(t=ra(t,this.array)),t}setZ(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+2]=t,this}getW(e){let t=this.array[e*this.itemSize+3];return this.normalized&&(t=ra(t,this.array)),t}setW(e,t){return this.normalized&&(t=bn(t,this.array)),this.array[e*this.itemSize+3]=t,this}setXY(e,t,n){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),n=bn(n,this.array)),this.array[e+0]=t,this.array[e+1]=n,this}setXYZ(e,t,n,i){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),n=bn(n,this.array),i=bn(i,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this}setXYZW(e,t,n,i,s){return e*=this.itemSize,this.normalized&&(t=bn(t,this.array),n=bn(n,this.array),i=bn(i,this.array),s=bn(s,this.array)),this.array[e+0]=t,this.array[e+1]=n,this.array[e+2]=i,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return e.name=this.name,e.usage=this.usage,e.gpuType=this.gpuType,e}dispose(){this.dispatchEvent({type:"dispose"})}}class $m extends Xn{constructor(e,t,n){super(new Uint16Array(e),t,n)}}class Km extends Xn{constructor(e,t,n){super(new Uint32Array(e),t,n)}}class kt extends Xn{constructor(e,t,n){super(new Float32Array(e),t,n)}}const Fx=new ns,oa=new X,xc=new X;class is{constructor(e=new X,t=-1){this.isSphere=!0,this.center=e,this.radius=t}set(e,t){return this.center.copy(e),this.radius=t,this}setFromPoints(e,t){const n=this.center;t!==void 0?n.copy(t):Fx.setFromPoints(e).getCenter(n);let i=0;for(let s=0,a=e.length;s<a;s++)i=Math.max(i,n.distanceToSquared(e[s]));return this.radius=Math.sqrt(i),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const t=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=t*t}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,t){const n=this.center.distanceToSquared(e);return t.copy(e),n>this.radius*this.radius&&(t.sub(this.center).normalize(),t.multiplyScalar(this.radius).add(this.center)),t}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;oa.subVectors(e,this.center);const t=oa.lengthSq();if(t>this.radius*this.radius){const n=Math.sqrt(t),i=(n-this.radius)*.5;this.center.addScaledVector(oa,i/n),this.radius+=i}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(xc.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(oa.copy(e.center).add(xc)),this.expandByPoint(oa.copy(e.center).sub(xc))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}let Ox=0;const jn=new ct,vc=new an,Ms=new X,In=new ns,la=new ns,jt=new X;class tn extends ts{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:Ox++}),this.uuid=no(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_x(e)?Km:$m)(e,1):this.index=e,this}setIndirect(e,t=0){return this.indirect=e,this.indirectOffset=t,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,t){return this.attributes[e]=t,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,t,n=0){this.groups.push({start:e,count:t,materialIndex:n})}clearGroups(){this.groups=[]}setDrawRange(e,t){this.drawRange.start=e,this.drawRange.count=t}applyMatrix4(e){const t=this.attributes.position;t!==void 0&&(t.applyMatrix4(e),t.needsUpdate=!0);const n=this.attributes.normal;if(n!==void 0){const s=new qe().getNormalMatrix(e);n.applyNormalMatrix(s),n.needsUpdate=!0}const i=this.attributes.tangent;return i!==void 0&&(i.transformDirection(e),i.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(e){return jn.makeRotationFromQuaternion(e),this.applyMatrix4(jn),this}rotateX(e){return jn.makeRotationX(e),this.applyMatrix4(jn),this}rotateY(e){return jn.makeRotationY(e),this.applyMatrix4(jn),this}rotateZ(e){return jn.makeRotationZ(e),this.applyMatrix4(jn),this}translate(e,t,n){return jn.makeTranslation(e,t,n),this.applyMatrix4(jn),this}scale(e,t,n){return jn.makeScale(e,t,n),this.applyMatrix4(jn),this}lookAt(e){return vc.lookAt(e),vc.updateMatrix(),this.applyMatrix4(vc.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Ms).negate(),this.translate(Ms.x,Ms.y,Ms.z),this}setFromPoints(e){const t=this.getAttribute("position");if(t===void 0){const n=[];for(let i=0,s=e.length;i<s;i++){const a=e[i];n.push(a.x,a.y,a.z||0)}this.setAttribute("position",new kt(n,3))}else{const n=Math.min(e.length,t.count);for(let i=0;i<n;i++){const s=e[i];t.setXYZ(i,s.x,s.y,s.z||0)}e.length>t.count&&We("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),t.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new ns);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new X(-1/0,-1/0,-1/0),new X(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),t)for(let n=0,i=t.length;n<i;n++){const s=t[n];In.setFromBufferAttribute(s),this.morphTargetsRelative?(jt.addVectors(this.boundingBox.min,In.min),this.boundingBox.expandByPoint(jt),jt.addVectors(this.boundingBox.max,In.max),this.boundingBox.expandByPoint(jt)):(this.boundingBox.expandByPoint(In.min),this.boundingBox.expandByPoint(In.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&at('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new is);const e=this.attributes.position,t=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){at("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new X,1/0);return}if(e){const n=this.boundingSphere.center;if(In.setFromBufferAttribute(e),t)for(let s=0,a=t.length;s<a;s++){const o=t[s];la.setFromBufferAttribute(o),this.morphTargetsRelative?(jt.addVectors(In.min,la.min),In.expandByPoint(jt),jt.addVectors(In.max,la.max),In.expandByPoint(jt)):(In.expandByPoint(la.min),In.expandByPoint(la.max))}In.getCenter(n);let i=0;for(let s=0,a=e.count;s<a;s++)jt.fromBufferAttribute(e,s),i=Math.max(i,n.distanceToSquared(jt));if(t)for(let s=0,a=t.length;s<a;s++){const o=t[s],c=this.morphTargetsRelative;for(let l=0,f=o.count;l<f;l++)jt.fromBufferAttribute(o,l),c&&(Ms.fromBufferAttribute(e,l),jt.add(Ms)),i=Math.max(i,n.distanceToSquared(jt))}this.boundingSphere.radius=Math.sqrt(i),isNaN(this.boundingSphere.radius)&&at('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,t=this.attributes;if(e===null||t.position===void 0||t.normal===void 0||t.uv===void 0){at("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const n=t.position,i=t.normal,s=t.uv;let a=this.getAttribute("tangent");(a===void 0||a.count!==n.count)&&(a=new Xn(new Float32Array(4*n.count),4),this.setAttribute("tangent",a));const o=[],c=[];for(let x=0;x<n.count;x++)o[x]=new X,c[x]=new X;const l=new X,f=new X,d=new X,h=new He,u=new He,g=new He,_=new X,m=new X;function p(x,b,C){l.fromBufferAttribute(n,x),f.fromBufferAttribute(n,b),d.fromBufferAttribute(n,C),h.fromBufferAttribute(s,x),u.fromBufferAttribute(s,b),g.fromBufferAttribute(s,C),f.sub(l),d.sub(l),u.sub(h),g.sub(h);const L=1/(u.x*g.y-g.x*u.y);isFinite(L)&&(_.copy(f).multiplyScalar(g.y).addScaledVector(d,-u.y).multiplyScalar(L),m.copy(d).multiplyScalar(u.x).addScaledVector(f,-g.x).multiplyScalar(L),o[x].add(_),o[b].add(_),o[C].add(_),c[x].add(m),c[b].add(m),c[C].add(m))}let M=this.groups;M.length===0&&(M=[{start:0,count:e.count}]);for(let x=0,b=M.length;x<b;++x){const C=M[x],L=C.start,N=C.count;for(let U=L,I=L+N;U<I;U+=3)p(e.getX(U+0),e.getX(U+1),e.getX(U+2))}const E=new X,S=new X,y=new X,w=new X;function A(x){y.fromBufferAttribute(i,x),w.copy(y);const b=o[x];E.copy(b),E.sub(y.multiplyScalar(y.dot(b))).normalize(),S.crossVectors(w,b);const L=S.dot(c[x])<0?-1:1;a.setXYZW(x,E.x,E.y,E.z,L)}for(let x=0,b=M.length;x<b;++x){const C=M[x],L=C.start,N=C.count;for(let U=L,I=L+N;U<I;U+=3)A(e.getX(U+0)),A(e.getX(U+1)),A(e.getX(U+2))}this._transformed=!0}computeVertexNormals(){const e=this.index,t=this.getAttribute("position");if(t!==void 0){let n=this.getAttribute("normal");if(n===void 0||n.count!==t.count)n=new Xn(new Float32Array(t.count*3),3),this.setAttribute("normal",n);else for(let h=0,u=n.count;h<u;h++)n.setXYZ(h,0,0,0);const i=new X,s=new X,a=new X,o=new X,c=new X,l=new X,f=new X,d=new X;if(e)for(let h=0,u=e.count;h<u;h+=3){const g=e.getX(h+0),_=e.getX(h+1),m=e.getX(h+2);i.fromBufferAttribute(t,g),s.fromBufferAttribute(t,_),a.fromBufferAttribute(t,m),f.subVectors(a,s),d.subVectors(i,s),f.cross(d),o.fromBufferAttribute(n,g),c.fromBufferAttribute(n,_),l.fromBufferAttribute(n,m),o.add(f),c.add(f),l.add(f),n.setXYZ(g,o.x,o.y,o.z),n.setXYZ(_,c.x,c.y,c.z),n.setXYZ(m,l.x,l.y,l.z)}else for(let h=0,u=t.count;h<u;h+=3)i.fromBufferAttribute(t,h+0),s.fromBufferAttribute(t,h+1),a.fromBufferAttribute(t,h+2),f.subVectors(a,s),d.subVectors(i,s),f.cross(d),n.setXYZ(h+0,f.x,f.y,f.z),n.setXYZ(h+1,f.x,f.y,f.z),n.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),n.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let t=0,n=e.count;t<n;t++)jt.fromBufferAttribute(e,t),jt.normalize(),e.setXYZ(t,jt.x,jt.y,jt.z)}toNonIndexed(){function e(o,c){const l=o.array,f=o.itemSize,d=o.normalized,h=new l.constructor(c.length*f);let u=0,g=0;for(let _=0,m=c.length;_<m;_++){o.isInterleavedBufferAttribute?u=c[_]*o.data.stride+o.offset:u=c[_]*f;for(let p=0;p<f;p++)h[g++]=l[u++]}return new Xn(h,f,d)}if(this.index===null)return We("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const t=new tn,n=this.index.array,i=this.attributes;for(const o in i){const c=i[o],l=e(c,n);t.setAttribute(o,l)}const s=this.morphAttributes;for(const o in s){const c=[],l=s[o];for(let f=0,d=l.length;f<d;f++){const h=l[f],u=e(h,n);c.push(u)}t.morphAttributes[o]=c}t.morphTargetsRelative=this.morphTargetsRelative;const a=this.groups;for(let o=0,c=a.length;o<c;o++){const l=a[o];t.addGroup(l.start,l.count,l.materialIndex)}return t}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,e.name=this.name,Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){const c=this.parameters;for(const l in c)c[l]!==void 0&&(e[l]=c[l]);return e}e.data={attributes:{}};const t=this.index;t!==null&&(e.data.index={type:t.array.constructor.name,array:Array.prototype.slice.call(t.array)});const n=this.attributes;for(const c in n){const l=n[c];e.data.attributes[c]=l.toJSON(e.data)}const i={};let s=!1;for(const c in this.morphAttributes){const l=this.morphAttributes[c],f=[];for(let d=0,h=l.length;d<h;d++){const u=l[d];f.push(u.toJSON(e.data))}f.length>0&&(i[c]=f,s=!0)}s&&(e.data.morphAttributes=i,e.data.morphTargetsRelative=this.morphTargetsRelative);const a=this.groups;a.length>0&&(e.data.groups=JSON.parse(JSON.stringify(a)));const o=this.boundingSphere;return o!==null&&(e.data.boundingSphere=o.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const t={};this.name=e.name;const n=e.index;n!==null&&this.setIndex(n.clone());const i=e.attributes;for(const l in i){const f=i[l];this.setAttribute(l,f.clone(t))}const s=e.morphAttributes;for(const l in s){const f=[],d=s[l];for(let h=0,u=d.length;h<u;h++)f.push(d[h].clone(t));this.morphAttributes[l]=f}this.morphTargetsRelative=e.morphTargetsRelative;const a=e.groups;for(let l=0,f=a.length;l<f;l++){const d=a[l];this.addGroup(d.start,d.count,d.materialIndex)}const o=e.boundingBox;o!==null&&(this.boundingBox=o.clone());const c=e.boundingSphere;return c!==null&&(this.boundingSphere=c.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this._transformed=e._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}}const Mc=new X,Bx=new X,kx=new qe;class zi{constructor(e=new X(1,0,0),t=0){this.isPlane=!0,this.normal=e,this.constant=t}set(e,t){return this.normal.copy(e),this.constant=t,this}setComponents(e,t,n,i){return this.normal.set(e,t,n),this.constant=i,this}setFromNormalAndCoplanarPoint(e,t){return this.normal.copy(e),this.constant=-t.dot(this.normal),this}setFromCoplanarPoints(e,t,n){const i=Mc.subVectors(n,t).cross(Bx.subVectors(e,t)).normalize();return this.setFromNormalAndCoplanarPoint(i,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,t){return t.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,t,n=!0){const i=e.delta(Mc),s=this.normal.dot(i);if(s===0)return this.distanceToPoint(e.start)===0?t.copy(e.start):null;const a=-(e.start.dot(this.normal)+this.constant)/s;return n===!0&&(a<0||a>1)?null:t.copy(e.start).addScaledVector(i,a)}intersectsLine(e){const t=this.distanceToPoint(e.start),n=this.distanceToPoint(e.end);return t<0&&n>0||n<0&&t>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,t){const n=t||kx.getNormalMatrix(e),i=this.coplanarPoint(Mc).applyMatrix4(e),s=this.normal.applyMatrix3(n).normalize();return this.constant=-i.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(e){return this.normal.fromArray(e.normal),this.constant=e.constant,this}}let zx=0;class rs extends ts{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:zx++}),this.uuid=no(),this.name="",this.type="Material",this.blending=Na,this.side=Zr,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Nm,this.blendDst=Fm,this.blendEquation=Rs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new Xe(0,0,0),this.blendAlpha=0,this.depthFunc=$a,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=lx,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=ec,this.stencilZFail=ec,this.stencilZPass=ec,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const t in e){const n=e[t];if(n===void 0){We(`Material: parameter '${t}' has value of undefined.`);continue}const i=this[t];if(i===void 0){We(`Material: '${t}' is not a property of THREE.${this.type}.`);continue}i&&i.isColor?i.set(n):i&&i.isVector2&&n&&n.isVector2||i&&i.isEuler&&n&&n.isEuler||i&&i.isVector3&&n&&n.isVector3?i.copy(n):this[t]=n}}toJSON(e){const t=e===void 0||typeof e=="string";t&&(e={textures:{},images:{}});const n={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};n.uuid=this.uuid,n.type=this.type,n.blending=this.blending,n.side=this.side,n.shadowSide=this.shadowSide,n.vertexColors=this.vertexColors,n.opacity=this.opacity,n.transparent=this.transparent,n.blendSrc=this.blendSrc,n.blendDst=this.blendDst,n.blendEquation=this.blendEquation,n.blendSrcAlpha=this.blendSrcAlpha,n.blendDstAlpha=this.blendDstAlpha,n.blendEquationAlpha=this.blendEquationAlpha,n.blendColor=this.blendColor.getHex(),n.blendAlpha=this.blendAlpha,n.depthFunc=this.depthFunc,n.depthTest=this.depthTest,n.depthWrite=this.depthWrite,n.colorWrite=this.colorWrite,n.clipIntersection=this.clipIntersection,n.clipShadows=this.clipShadows,n.stencilWriteMask=this.stencilWriteMask,n.stencilFunc=this.stencilFunc,n.stencilRef=this.stencilRef,n.stencilFuncMask=this.stencilFuncMask,n.stencilFail=this.stencilFail,n.stencilZFail=this.stencilZFail,n.stencilZPass=this.stencilZPass,n.stencilWrite=this.stencilWrite,n.polygonOffset=this.polygonOffset,n.polygonOffsetFactor=this.polygonOffsetFactor,n.polygonOffsetUnits=this.polygonOffsetUnits,n.dithering=this.dithering,n.alphaTest=this.alphaTest,n.alphaHash=this.alphaHash,n.alphaToCoverage=this.alphaToCoverage,n.premultipliedAlpha=this.premultipliedAlpha,n.forceSinglePass=this.forceSinglePass,n.allowOverride=this.allowOverride,n.visible=this.visible,n.toneMapped=this.toneMapped,n.name=this.name,this.color&&this.color.isColor&&(n.color=this.color.getHex()),this.roughness!==void 0&&(n.roughness=this.roughness),this.metalness!==void 0&&(n.metalness=this.metalness),this.sheen!==void 0&&(n.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(n.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(n.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(n.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(n.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(n.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(n.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(n.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(n.shininess=this.shininess),this.clearcoat!==void 0&&(n.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(n.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(n.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(n.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(n.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,n.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(n.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(n.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(n.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(n.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(n.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(n.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(n.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(n.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(n.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(n.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(n.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(n.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(n.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(n.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(n.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(n.lightMap=this.lightMap.toJSON(e).uuid,n.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(n.aoMap=this.aoMap.toJSON(e).uuid,n.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(n.bumpMap=this.bumpMap.toJSON(e).uuid,n.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(n.normalMap=this.normalMap.toJSON(e).uuid,n.normalMapType=this.normalMapType,n.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(n.displacementMap=this.displacementMap.toJSON(e).uuid,n.displacementScale=this.displacementScale,n.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(n.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(n.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(n.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(n.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(n.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(n.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(n.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(n.combine=this.combine)),this.envMapRotation!==void 0&&(n.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(n.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(n.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(n.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(n.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(n.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(n.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(n.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(n.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&(n.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(n.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(n.size=this.size),this.sizeAttenuation!==void 0&&(n.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(n.clippingPlanes=this.clippingPlanes.map(s=>s.toJSON())),this.rotation!==void 0&&(n.rotation=this.rotation),this.depthPacking!==void 0&&(n.depthPacking=this.depthPacking),this.linewidth!==void 0&&(n.linewidth=this.linewidth),this.linecap!==void 0&&(n.linecap=this.linecap),this.linejoin!==void 0&&(n.linejoin=this.linejoin),this.dashSize!==void 0&&(n.dashSize=this.dashSize),this.gapSize!==void 0&&(n.gapSize=this.gapSize),this.scale!==void 0&&(n.scale=this.scale),this.wireframe!==void 0&&(n.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(n.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(n.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(n.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(n.flatShading=this.flatShading),this.fog!==void 0&&(n.fog=this.fog),Object.keys(this.userData).length>0&&(n.userData=this.userData);function i(s){const a=[];for(const o in s){const c=s[o];delete c.metadata,a.push(c)}return a}if(t){const s=i(e.textures),a=i(e.images);s.length>0&&(n.textures=s),a.length>0&&(n.images=a)}return n}fromJSON(e,t){if(e.uuid!==void 0&&(this.uuid=e.uuid),e.name!==void 0&&(this.name=e.name),e.color!==void 0&&this.color!==void 0&&this.color.setHex(e.color),e.roughness!==void 0&&(this.roughness=e.roughness),e.metalness!==void 0&&(this.metalness=e.metalness),e.sheen!==void 0&&(this.sheen=e.sheen),e.sheenColor!==void 0&&(this.sheenColor=new Xe().setHex(e.sheenColor)),e.sheenRoughness!==void 0&&(this.sheenRoughness=e.sheenRoughness),e.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(e.emissive),e.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(e.specular),e.specularIntensity!==void 0&&(this.specularIntensity=e.specularIntensity),e.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(e.specularColor),e.shininess!==void 0&&(this.shininess=e.shininess),e.clearcoat!==void 0&&(this.clearcoat=e.clearcoat),e.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=e.clearcoatRoughness),e.dispersion!==void 0&&(this.dispersion=e.dispersion),e.retroreflectivity!==void 0&&(this.retroreflectivity=e.retroreflectivity),e.iridescence!==void 0&&(this.iridescence=e.iridescence),e.iridescenceIOR!==void 0&&(this.iridescenceIOR=e.iridescenceIOR),e.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=e.iridescenceThicknessRange),e.transmission!==void 0&&(this.transmission=e.transmission),e.thickness!==void 0&&(this.thickness=e.thickness),e.attenuationDistance!==void 0&&(this.attenuationDistance=e.attenuationDistance),e.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(e.attenuationColor),e.anisotropy!==void 0&&(this.anisotropy=e.anisotropy),e.anisotropyRotation!==void 0&&(this.anisotropyRotation=e.anisotropyRotation),e.fog!==void 0&&(this.fog=e.fog),e.flatShading!==void 0&&(this.flatShading=e.flatShading),e.blending!==void 0&&(this.blending=e.blending),e.combine!==void 0&&(this.combine=e.combine),e.side!==void 0&&(this.side=e.side),e.shadowSide!==void 0&&(this.shadowSide=e.shadowSide),e.opacity!==void 0&&(this.opacity=e.opacity),e.transparent!==void 0&&(this.transparent=e.transparent),e.alphaTest!==void 0&&(this.alphaTest=e.alphaTest),e.alphaHash!==void 0&&(this.alphaHash=e.alphaHash),e.depthFunc!==void 0&&(this.depthFunc=e.depthFunc),e.depthTest!==void 0&&(this.depthTest=e.depthTest),e.depthWrite!==void 0&&(this.depthWrite=e.depthWrite),e.colorWrite!==void 0&&(this.colorWrite=e.colorWrite),e.clippingPlanes!==void 0&&(this.clippingPlanes=e.clippingPlanes.map(n=>new zi().fromJSON(n))),e.clipIntersection!==void 0&&(this.clipIntersection=e.clipIntersection),e.clipShadows!==void 0&&(this.clipShadows=e.clipShadows),e.depthPacking!==void 0&&(this.depthPacking=e.depthPacking),e.blendSrc!==void 0&&(this.blendSrc=e.blendSrc),e.blendDst!==void 0&&(this.blendDst=e.blendDst),e.blendEquation!==void 0&&(this.blendEquation=e.blendEquation),e.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=e.blendSrcAlpha),e.blendDstAlpha!==void 0&&(this.blendDstAlpha=e.blendDstAlpha),e.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=e.blendEquationAlpha),e.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(e.blendColor),e.blendAlpha!==void 0&&(this.blendAlpha=e.blendAlpha),e.stencilWriteMask!==void 0&&(this.stencilWriteMask=e.stencilWriteMask),e.stencilFunc!==void 0&&(this.stencilFunc=e.stencilFunc),e.stencilRef!==void 0&&(this.stencilRef=e.stencilRef),e.stencilFuncMask!==void 0&&(this.stencilFuncMask=e.stencilFuncMask),e.stencilFail!==void 0&&(this.stencilFail=e.stencilFail),e.stencilZFail!==void 0&&(this.stencilZFail=e.stencilZFail),e.stencilZPass!==void 0&&(this.stencilZPass=e.stencilZPass),e.stencilWrite!==void 0&&(this.stencilWrite=e.stencilWrite),e.wireframe!==void 0&&(this.wireframe=e.wireframe),e.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=e.wireframeLinewidth),e.wireframeLinecap!==void 0&&(this.wireframeLinecap=e.wireframeLinecap),e.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=e.wireframeLinejoin),e.rotation!==void 0&&(this.rotation=e.rotation),e.linewidth!==void 0&&(this.linewidth=e.linewidth),e.linecap!==void 0&&(this.linecap=e.linecap),e.linejoin!==void 0&&(this.linejoin=e.linejoin),e.dashSize!==void 0&&(this.dashSize=e.dashSize),e.gapSize!==void 0&&(this.gapSize=e.gapSize),e.scale!==void 0&&(this.scale=e.scale),e.polygonOffset!==void 0&&(this.polygonOffset=e.polygonOffset),e.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=e.polygonOffsetFactor),e.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=e.polygonOffsetUnits),e.dithering!==void 0&&(this.dithering=e.dithering),e.alphaToCoverage!==void 0&&(this.alphaToCoverage=e.alphaToCoverage),e.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=e.premultipliedAlpha),e.forceSinglePass!==void 0&&(this.forceSinglePass=e.forceSinglePass),e.allowOverride!==void 0&&(this.allowOverride=e.allowOverride),e.visible!==void 0&&(this.visible=e.visible),e.toneMapped!==void 0&&(this.toneMapped=e.toneMapped),e.userData!==void 0&&(this.userData=e.userData),e.vertexColors!==void 0&&(typeof e.vertexColors=="number"?this.vertexColors=e.vertexColors>0:this.vertexColors=e.vertexColors),e.size!==void 0&&(this.size=e.size),e.sizeAttenuation!==void 0&&(this.sizeAttenuation=e.sizeAttenuation),e.map!==void 0&&(this.map=t[e.map]||null),e.matcap!==void 0&&(this.matcap=t[e.matcap]||null),e.alphaMap!==void 0&&(this.alphaMap=t[e.alphaMap]||null),e.bumpMap!==void 0&&(this.bumpMap=t[e.bumpMap]||null),e.bumpScale!==void 0&&(this.bumpScale=e.bumpScale),e.normalMap!==void 0&&(this.normalMap=t[e.normalMap]||null),e.normalMapType!==void 0&&(this.normalMapType=e.normalMapType),e.normalScale!==void 0){let n=e.normalScale;Array.isArray(n)===!1&&(n=[n,n]),this.normalScale=new He().fromArray(n)}return e.displacementMap!==void 0&&(this.displacementMap=t[e.displacementMap]||null),e.displacementScale!==void 0&&(this.displacementScale=e.displacementScale),e.displacementBias!==void 0&&(this.displacementBias=e.displacementBias),e.roughnessMap!==void 0&&(this.roughnessMap=t[e.roughnessMap]||null),e.metalnessMap!==void 0&&(this.metalnessMap=t[e.metalnessMap]||null),e.emissiveMap!==void 0&&(this.emissiveMap=t[e.emissiveMap]||null),e.emissiveIntensity!==void 0&&(this.emissiveIntensity=e.emissiveIntensity),e.specularMap!==void 0&&(this.specularMap=t[e.specularMap]||null),e.specularIntensityMap!==void 0&&(this.specularIntensityMap=t[e.specularIntensityMap]||null),e.specularColorMap!==void 0&&(this.specularColorMap=t[e.specularColorMap]||null),e.envMap!==void 0&&(this.envMap=t[e.envMap]||null),e.envMapRotation!==void 0&&this.envMapRotation.fromArray(e.envMapRotation),e.envMapIntensity!==void 0&&(this.envMapIntensity=e.envMapIntensity),e.reflectivity!==void 0&&(this.reflectivity=e.reflectivity),e.refractionRatio!==void 0&&(this.refractionRatio=e.refractionRatio),e.lightMap!==void 0&&(this.lightMap=t[e.lightMap]||null),e.lightMapIntensity!==void 0&&(this.lightMapIntensity=e.lightMapIntensity),e.aoMap!==void 0&&(this.aoMap=t[e.aoMap]||null),e.aoMapIntensity!==void 0&&(this.aoMapIntensity=e.aoMapIntensity),e.gradientMap!==void 0&&(this.gradientMap=t[e.gradientMap]||null),e.clearcoatMap!==void 0&&(this.clearcoatMap=t[e.clearcoatMap]||null),e.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=t[e.clearcoatRoughnessMap]||null),e.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=t[e.clearcoatNormalMap]||null),e.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new He().fromArray(e.clearcoatNormalScale)),e.iridescenceMap!==void 0&&(this.iridescenceMap=t[e.iridescenceMap]||null),e.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=t[e.iridescenceThicknessMap]||null),e.transmissionMap!==void 0&&(this.transmissionMap=t[e.transmissionMap]||null),e.thicknessMap!==void 0&&(this.thicknessMap=t[e.thicknessMap]||null),e.anisotropyMap!==void 0&&(this.anisotropyMap=t[e.anisotropyMap]||null),e.sheenColorMap!==void 0&&(this.sheenColorMap=t[e.sheenColorMap]||null),e.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=t[e.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const t=e.clippingPlanes;let n=null;if(t!==null){const i=t.length;n=new Array(i);for(let s=0;s!==i;++s)n[s]=t[s].clone()}return this.clippingPlanes=n,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}const Ni=new X,Sc=new X,go=new X,xo=new X;class Cl{constructor(e=new X,t=new X(0,0,-1)){this.origin=e,this.direction=t}set(e,t){return this.origin.copy(e),this.direction.copy(t),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,t){return t.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Ni)),this}closestPointToPoint(e,t){t.subVectors(e,this.origin);const n=t.dot(this.direction);return n<0?t.copy(this.origin):t.copy(this.origin).addScaledVector(this.direction,n)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const t=Ni.subVectors(e,this.origin).dot(this.direction);return t<0?this.origin.distanceToSquared(e):(Ni.copy(this.origin).addScaledVector(this.direction,t),Ni.distanceToSquared(e))}distanceSqToSegment(e,t,n,i){Sc.copy(e).add(t).multiplyScalar(.5),go.copy(t).sub(e).normalize(),xo.copy(this.origin).sub(Sc);const s=e.distanceTo(t)*.5,a=-this.direction.dot(go),o=xo.dot(this.direction),c=-xo.dot(go),l=xo.lengthSq(),f=Math.abs(1-a*a);let d,h,u,g;if(f>0)if(d=a*c-o,h=a*o-c,g=s*f,d>=0)if(h>=-g)if(h<=g){const _=1/f;d*=_,h*=_,u=d*(d+a*h+2*o)+h*(a*d+h+2*c)+l}else h=s,d=Math.max(0,-(a*h+o)),u=-d*d+h*(h+2*c)+l;else h=-s,d=Math.max(0,-(a*h+o)),u=-d*d+h*(h+2*c)+l;else h<=-g?(d=Math.max(0,-(-a*s+o)),h=d>0?-s:Math.min(Math.max(-s,-c),s),u=-d*d+h*(h+2*c)+l):h<=g?(d=0,h=Math.min(Math.max(-s,-c),s),u=h*(h+2*c)+l):(d=Math.max(0,-(a*s+o)),h=d>0?s:Math.min(Math.max(-s,-c),s),u=-d*d+h*(h+2*c)+l);else h=a>0?-s:s,d=Math.max(0,-(a*h+o)),u=-d*d+h*(h+2*c)+l;return n&&n.copy(this.origin).addScaledVector(this.direction,d),i&&i.copy(Sc).addScaledVector(go,h),u}intersectSphere(e,t){if(e.radius<0)return null;Ni.subVectors(e.center,this.origin);const n=Ni.dot(this.direction),i=Ni.dot(Ni)-n*n,s=e.radius*e.radius;if(i>s)return null;const a=Math.sqrt(s-i),o=n-a,c=n+a;return c<0?null:o<0?this.at(c,t):this.at(o,t)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const t=e.normal.dot(this.direction);if(t===0)return e.distanceToPoint(this.origin)===0?0:null;const n=-(this.origin.dot(e.normal)+e.constant)/t;return n>=0?n:null}intersectPlane(e,t){const n=this.distanceToPlane(e);return n===null?null:this.at(n,t)}intersectsPlane(e){const t=e.distanceToPoint(this.origin);return t===0||e.normal.dot(this.direction)*t<0}intersectBox(e,t){let n,i,s,a,o,c;const l=1/this.direction.x,f=1/this.direction.y,d=1/this.direction.z,h=this.origin;return l>=0?(n=(e.min.x-h.x)*l,i=(e.max.x-h.x)*l):(n=(e.max.x-h.x)*l,i=(e.min.x-h.x)*l),f>=0?(s=(e.min.y-h.y)*f,a=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,a=(e.min.y-h.y)*f),n>a||s>i||((s>n||isNaN(n))&&(n=s),(a<i||isNaN(i))&&(i=a),d>=0?(o=(e.min.z-h.z)*d,c=(e.max.z-h.z)*d):(o=(e.max.z-h.z)*d,c=(e.min.z-h.z)*d),n>c||o>i)||((o>n||n!==n)&&(n=o),(c<i||i!==i)&&(i=c),i<0)?null:this.at(n>=0?n:i,t)}intersectsBox(e){return this.intersectBox(e,Ni)!==null}intersectTriangle(e,t,n,i,s){const a=this.origin,o=this.direction,c=o.x,l=o.y,f=o.z,d=e.x-a.x,h=e.y-a.y,u=e.z-a.z,g=t.x-a.x,_=t.y-a.y,m=t.z-a.z,p=n.x-a.x,M=n.y-a.y,E=n.z-a.z,S=Math.abs(c),y=Math.abs(l),w=Math.abs(f);let A,x,b,C,L,N,U,I,G,W,Y,se;if(S>=y&&S>=w?(b=c,N=d,G=g,se=p,c>=0?(A=l,x=f,C=h,L=u,U=_,I=m,W=M,Y=E):(A=f,x=l,C=u,L=h,U=m,I=_,W=E,Y=M)):y>=w?(b=l,N=h,G=_,se=M,l>=0?(A=f,x=c,C=u,L=d,U=m,I=g,W=E,Y=p):(A=c,x=f,C=d,L=u,U=g,I=m,W=p,Y=E)):(b=f,N=u,G=m,se=E,f>=0?(A=c,x=l,C=d,L=h,U=g,I=_,W=p,Y=M):(A=l,x=c,C=h,L=d,U=_,I=g,W=M,Y=p)),b===0)return null;const Q=A/b,oe=x/b,ee=1/b,_e=C-Q*N,ge=L-oe*N,Ie=U-Q*G,ke=I-oe*G,Ge=W-Q*se,j=Y-oe*se,te=Ge*ke-j*Ie,me=_e*j-ge*Ge,Oe=Ie*ge-ke*_e;if(i){if(te<0||me<0||Oe<0)return null}else if((te<0||me<0||Oe<0)&&(te>0||me>0||Oe>0))return null;const xe=te+me+Oe;if(xe===0)return null;const Ve=ee*(te*N+me*G+Oe*se);return(xe>0?Ve<0:Ve>0)?null:this.at(Ve/xe,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class oi extends rs{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new Xe(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.combine=Om,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const fd=new ct,Ar=new Cl,vo=new is,hd=new X,Mo=new X,So=new X,yo=new X,yc=new X,bo=new X,dd=new X,To=new X;class bt extends an{constructor(e=new tn,t=new oi){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}getVertexPosition(e,t){const n=this.geometry,i=n.attributes.position,s=n.morphAttributes.position,a=n.morphTargetsRelative;t.fromBufferAttribute(i,e);const o=this.morphTargetInfluences;if(s&&o){bo.set(0,0,0);for(let c=0,l=s.length;c<l;c++){const f=o[c],d=s[c];f!==0&&(yc.fromBufferAttribute(d,e),a?bo.addScaledVector(yc,f):bo.addScaledVector(yc.sub(t),f))}t.add(bo)}return t}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.material,s=this.matrixWorld;i!==void 0&&(n.boundingSphere===null&&n.computeBoundingSphere(),vo.copy(n.boundingSphere),vo.applyMatrix4(s),Ar.copy(e.ray).recast(e.near),!(vo.containsPoint(Ar.origin)===!1&&(Ar.intersectSphere(vo,hd)===null||Ar.origin.distanceToSquared(hd)>(e.far-e.near)**2))&&(fd.copy(s).invert(),Ar.copy(e.ray).applyMatrix4(fd),!(n.boundingBox!==null&&Ar.intersectsBox(n.boundingBox)===!1)&&this._computeIntersections(e,t,Ar)))}_computeIntersections(e,t,n){let i;const s=this.geometry,a=this.material,o=s.index,c=s.attributes.position,l=s.attributes.uv,f=s.attributes.uv1,d=s.attributes.normal,h=s.groups,u=s.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],M=Math.max(m.start,u.start),E=Math.min(o.count,Math.min(m.start+m.count,u.start+u.count));for(let S=M,y=E;S<y;S+=3){const w=o.getX(S),A=o.getX(S+1),x=o.getX(S+2);i=Eo(this,p,e,n,l,f,d,w,A,x),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,u.start),_=Math.min(o.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){const M=o.getX(m),E=o.getX(m+1),S=o.getX(m+2);i=Eo(this,a,e,n,l,f,d,M,E,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}else if(c!==void 0)if(Array.isArray(a))for(let g=0,_=h.length;g<_;g++){const m=h[g],p=a[m.materialIndex],M=Math.max(m.start,u.start),E=Math.min(c.count,Math.min(m.start+m.count,u.start+u.count));for(let S=M,y=E;S<y;S+=3){const w=S,A=S+1,x=S+2;i=Eo(this,p,e,n,l,f,d,w,A,x),i&&(i.faceIndex=Math.floor(S/3),i.face.materialIndex=m.materialIndex,t.push(i))}}else{const g=Math.max(0,u.start),_=Math.min(c.count,u.start+u.count);for(let m=g,p=_;m<p;m+=3){const M=m,E=m+1,S=m+2;i=Eo(this,a,e,n,l,f,d,M,E,S),i&&(i.faceIndex=Math.floor(m/3),t.push(i))}}}}function Vx(r,e,t,n,i,s,a,o){let c;if(e.side===Pn?c=n.intersectTriangle(a,s,i,!0,o):c=n.intersectTriangle(i,s,a,e.side===Zr,o),c===null)return null;To.copy(o),To.applyMatrix4(r.matrixWorld);const l=t.ray.origin.distanceTo(To);return l<t.near||l>t.far?null:{distance:l,point:To.clone(),object:r}}function Eo(r,e,t,n,i,s,a,o,c,l){r.getVertexPosition(o,Mo),r.getVertexPosition(c,So),r.getVertexPosition(l,yo);const f=Vx(r,e,t,n,Mo,So,yo,dd);if(f){const d=new X;ci.getBarycoord(dd,Mo,So,yo,d),i&&(f.uv=ci.getInterpolatedAttribute(i,o,c,l,d,new He)),s&&(f.uv1=ci.getInterpolatedAttribute(s,o,c,l,d,new He)),a&&(f.normal=ci.getInterpolatedAttribute(a,o,c,l,d,new X),f.normal.dot(n.direction)>0&&f.normal.multiplyScalar(-1));const h={a:o,b:c,c:l,normal:new X,materialIndex:0};ci.getNormal(Mo,So,yo,h.normal),f.face=h,f.barycoord=d}return f}class Zm extends _n{constructor(e=null,t=1,n=1,i,s,a,o,c,l=rn,f=rn,d,h){super(null,a,o,c,l,f,i,s,d,h),this.isDataTexture=!0,this.image={data:e,width:t,height:n},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class pd extends Xn{constructor(e,t,n,i=1){super(e,t,n),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=i}copy(e){return super.copy(e),this.meshPerAttribute=e.meshPerAttribute,this}toJSON(){const e=super.toJSON();return e.meshPerAttribute=this.meshPerAttribute,e.isInstancedBufferAttribute=!0,e}}const Ss=new ct,md=new ct,wo=[],_d=new ns,Gx=new ct,ca=new bt,ua=new is;class Ao extends bt{constructor(e,t,n){super(e,t),this.isInstancedMesh=!0,this.instanceMatrix=new pd(new Float32Array(n*16),16),this.instanceColor=null,this.morphTexture=null,this.count=n,this.boundingBox=null,this.boundingSphere=null;for(let i=0;i<n;i++)this.setMatrixAt(i,Gx)}computeBoundingBox(){const e=this.geometry,t=this.count;this.boundingBox===null&&(this.boundingBox=new ns),e.boundingBox===null&&e.computeBoundingBox(),this.boundingBox.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ss),_d.copy(e.boundingBox).applyMatrix4(Ss),this.boundingBox.union(_d)}computeBoundingSphere(){const e=this.geometry,t=this.count;this.boundingSphere===null&&(this.boundingSphere=new is),e.boundingSphere===null&&e.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let n=0;n<t;n++)this.getMatrixAt(n,Ss),ua.copy(e.boundingSphere).applyMatrix4(Ss),this.boundingSphere.union(ua)}copy(e,t){return super.copy(e,t),this.instanceMatrix.copy(e.instanceMatrix),e.morphTexture!==null&&(this.morphTexture=e.morphTexture.clone()),e.instanceColor!==null&&(this.instanceColor=e.instanceColor.clone()),this.count=e.count,e.boundingBox!==null&&(this.boundingBox=e.boundingBox.clone()),e.boundingSphere!==null&&(this.boundingSphere=e.boundingSphere.clone()),this}getColorAt(e,t){return this.instanceColor===null?t.setRGB(1,1,1):t.fromArray(this.instanceColor.array,e*3)}getMatrixAt(e,t){return t.fromArray(this.instanceMatrix.array,e*16)}getMorphAt(e,t){const n=t.morphTargetInfluences,i=this.morphTexture.source.data.data,s=n.length+1,a=e*s+1;for(let o=0;o<n.length;o++)n[o]=i[a+o]}raycast(e,t){const n=this.matrixWorld,i=this.count;if(ca.geometry=this.geometry,ca.material=this.material,ca.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ua.copy(this.boundingSphere),ua.applyMatrix4(n),e.ray.intersectsSphere(ua)!==!1))for(let s=0;s<i;s++){this.getMatrixAt(s,Ss),md.multiplyMatrices(n,Ss),ca.matrixWorld=md,ca.raycast(e,wo);for(let a=0,o=wo.length;a<o;a++){const c=wo[a];c.instanceId=s,c.object=this,t.push(c)}wo.length=0}}setColorAt(e,t){return this.instanceColor===null&&(this.instanceColor=new pd(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),t.toArray(this.instanceColor.array,e*3),this}setMatrixAt(e,t){return t.toArray(this.instanceMatrix.array,e*16),this}setMorphAt(e,t){const n=t.morphTargetInfluences,i=n.length+1;this.morphTexture===null&&(this.morphTexture=new Zm(new Float32Array(i*this.count),i,this.count,Vf,fi));const s=this.morphTexture.source.data.data;let a=0;for(let l=0;l<n.length;l++)a+=n[l];const o=this.geometry.morphTargetsRelative?1:1-a,c=i*e;return s[c]=o,s.set(n,c+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}}const Rr=new is,Hx=new He(.5,.5),Ro=new X;class Zf{constructor(e=new zi,t=new zi,n=new zi,i=new zi,s=new zi,a=new zi){this.planes=[e,t,n,i,s,a]}set(e,t,n,i,s,a){const o=this.planes;return o[0].copy(e),o[1].copy(t),o[2].copy(n),o[3].copy(i),o[4].copy(s),o[5].copy(a),this}copy(e){const t=this.planes;for(let n=0;n<6;n++)t[n].copy(e.planes[n]);return this}setFromProjectionMatrix(e,t=Ti,n=!1){const i=this.planes,s=e.elements,a=s[0],o=s[1],c=s[2],l=s[3],f=s[4],d=s[5],h=s[6],u=s[7],g=s[8],_=s[9],m=s[10],p=s[11],M=s[12],E=s[13],S=s[14],y=s[15];if(i[0].setComponents(l-a,u-f,p-g,y-M).normalize(),i[1].setComponents(l+a,u+f,p+g,y+M).normalize(),i[2].setComponents(l+o,u+d,p+_,y+E).normalize(),i[3].setComponents(l-o,u-d,p-_,y-E).normalize(),n)i[4].setComponents(c,h,m,S).normalize(),i[5].setComponents(l-c,u-h,p-m,y-S).normalize();else if(i[4].setComponents(l-c,u-h,p-m,y-S).normalize(),t===Ti)i[5].setComponents(l+c,u+h,p+m,y+S).normalize();else if(t===Ja)i[5].setComponents(c,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+t);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Rr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const t=e.geometry;t.boundingSphere===null&&t.computeBoundingSphere(),Rr.copy(t.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Rr)}intersectsSprite(e){Rr.center.set(0,0,0);const t=Hx.distanceTo(e.center);return Rr.radius=.7071067811865476+t,Rr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Rr)}intersectsSphere(e){const t=this.planes,n=e.center,i=-e.radius;for(let s=0;s<6;s++)if(t[s].distanceToPoint(n)<i)return!1;return!0}intersectsBox(e){const t=this.planes;for(let n=0;n<6;n++){const i=t[n];if(Ro.x=i.normal.x>0?e.max.x:e.min.x,Ro.y=i.normal.y>0?e.max.y:e.min.y,Ro.z=i.normal.z>0?e.max.z:e.min.z,i.distanceToPoint(Ro)<0)return!1}return!0}containsPoint(e){const t=this.planes;for(let n=0;n<6;n++)if(t[n].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class Jm extends rs{constructor(e){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new Xe(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.linewidth=e.linewidth,this.linecap=e.linecap,this.linejoin=e.linejoin,this.fog=e.fog,this}}const xl=new X,vl=new X,gd=new ct,fa=new Cl,Co=new is,bc=new X,xd=new X;class Wx extends an{constructor(e=new tn,t=new Jm){super(),this.isLine=!0,this.type="Line",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}computeLineDistances(){const e=this.geometry;if(e.index===null){const t=e.attributes.position,n=[0];for(let i=1,s=t.count;i<s;i++)xl.fromBufferAttribute(t,i-1),vl.fromBufferAttribute(t,i),n[i]=n[i-1],n[i]+=xl.distanceTo(vl);e.setAttribute("lineDistance",new kt(n,1))}else We("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Line.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Co.copy(n.boundingSphere),Co.applyMatrix4(i),Co.radius+=s,e.ray.intersectsSphere(Co)===!1)return;gd.copy(i).invert(),fa.copy(e.ray).applyMatrix4(gd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=this.isLineSegments?2:1,f=n.index,h=n.attributes.position;if(f!==null){const u=Math.max(0,a.start),g=Math.min(f.count,a.start+a.count);for(let _=u,m=g-1;_<m;_+=l){const p=f.getX(_),M=f.getX(_+1),E=Po(this,e,fa,c,p,M,_);E&&t.push(E)}if(this.isLineLoop){const _=f.getX(g-1),m=f.getX(u),p=Po(this,e,fa,c,_,m,g-1);p&&t.push(p)}}else{const u=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let _=u,m=g-1;_<m;_+=l){const p=Po(this,e,fa,c,_,_+1,_);p&&t.push(p)}if(this.isLineLoop){const _=Po(this,e,fa,c,g-1,u,g-1);_&&t.push(_)}}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Po(r,e,t,n,i,s,a){const o=r.geometry.attributes.position;if(xl.fromBufferAttribute(o,i),vl.fromBufferAttribute(o,s),t.distanceSqToSegment(xl,vl,bc,xd)>n)return;bc.applyMatrix4(r.matrixWorld);const l=e.ray.origin.distanceTo(bc);if(!(l<e.near||l>e.far))return{distance:l,point:xd.clone().applyMatrix4(r.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:r}}class Qu extends rs{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new Xe(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const vd=new ct,ju=new Cl,Do=new is,Lo=new X;class Md extends an{constructor(e=new tn,t=new Qu){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=t,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,t){return super.copy(e,t),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}intersectsFrustum(e){return e.intersectsObject(this)}raycast(e,t){const n=this.geometry,i=this.matrixWorld,s=e.params.Points.threshold,a=n.drawRange;if(n.boundingSphere===null&&n.computeBoundingSphere(),Do.copy(n.boundingSphere),Do.applyMatrix4(i),Do.radius+=s,e.ray.intersectsSphere(Do)===!1)return;vd.copy(i).invert(),ju.copy(e.ray).applyMatrix4(vd);const o=s/((this.scale.x+this.scale.y+this.scale.z)/3),c=o*o,l=n.index,d=n.attributes.position;if(l!==null){const h=Math.max(0,a.start),u=Math.min(l.count,a.start+a.count);for(let g=h,_=u;g<_;g++){const m=l.getX(g);Lo.fromBufferAttribute(d,m),Sd(Lo,m,c,i,e,t,this)}}else{const h=Math.max(0,a.start),u=Math.min(d.count,a.start+a.count);for(let g=h,_=u;g<_;g++)Lo.fromBufferAttribute(d,g),Sd(Lo,g,c,i,e,t,this)}}updateMorphTargets(){const t=this.geometry.morphAttributes,n=Object.keys(t);if(n.length>0){const i=t[n[0]];if(i!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,a=i.length;s<a;s++){const o=i[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=s}}}}}function Sd(r,e,t,n,i,s,a){const o=ju.distanceSqToPoint(r);if(o<t){const c=new X;ju.closestPointToPoint(r,c),c.applyMatrix4(n);const l=i.ray.origin.distanceTo(c);if(l<i.near||l>i.far)return;s.push({distance:l,distanceToRay:Math.sqrt(o),point:c,index:e,face:null,faceIndex:null,barycoord:null,object:a})}}class Qm extends _n{constructor(e=[],t=Jr,n,i,s,a,o,c,l,f){super(e,t,n,i,s,a,o,c,l,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class jm extends _n{constructor(e,t,n,i,s,a,o,c,l){super(e,t,n,i,s,a,o,c,l),this.isCanvasTexture=!0,this.needsUpdate=!0}}class Qa extends _n{constructor(e,t,n=Ci,i,s,a,o=rn,c=rn,l,f=$i,d=1){if(f!==$i&&f!==Br)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:t,depth:d};super(h,i,s,a,o,c,f,n,l),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new qf(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const t=super.toJSON(e);return t.compareFunction=this.compareFunction,t}}class Xx extends Qa{constructor(e,t=Ci,n=Jr,i,s,a=rn,o=rn,c,l=$i){const f={width:e,height:e,depth:1},d=[f,f,f,f,f,f];super(e,e,t,n,i,s,a,o,c,l),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class e_ extends _n{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class Nn extends tn{constructor(e=1,t=1,n=1,i=1,s=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:t,depth:n,widthSegments:i,heightSegments:s,depthSegments:a};const o=this;i=Math.floor(i),s=Math.floor(s),a=Math.floor(a);const c=[],l=[],f=[],d=[];let h=0,u=0;g("z","y","x",-1,-1,n,t,e,a,s,0),g("z","y","x",1,-1,n,t,-e,a,s,1),g("x","z","y",1,1,e,n,t,i,a,2),g("x","z","y",1,-1,e,n,-t,i,a,3),g("x","y","z",1,-1,e,t,n,i,s,4),g("x","y","z",-1,-1,e,t,-n,i,s,5),this.setIndex(c),this.setAttribute("position",new kt(l,3)),this.setAttribute("normal",new kt(f,3)),this.setAttribute("uv",new kt(d,2));function g(_,m,p,M,E,S,y,w,A,x,b){const C=S/A,L=y/x,N=S/2,U=y/2,I=w/2,G=A+1,W=x+1;let Y=0,se=0;const Q=new X;for(let oe=0;oe<W;oe++){const ee=oe*L-U;for(let _e=0;_e<G;_e++){const ge=_e*C-N;Q[_]=ge*M,Q[m]=ee*E,Q[p]=I,l.push(Q.x,Q.y,Q.z),Q[_]=0,Q[m]=0,Q[p]=w>0?1:-1,f.push(Q.x,Q.y,Q.z),d.push(_e/A),d.push(1-oe/x),Y+=1}}for(let oe=0;oe<x;oe++)for(let ee=0;ee<A;ee++){const _e=h+ee+G*oe,ge=h+ee+G*(oe+1),Ie=h+(ee+1)+G*(oe+1),ke=h+(ee+1)+G*oe;c.push(_e,ge,ke),c.push(ge,Ie,ke),se+=6}o.addGroup(u,se,b),u+=se,h+=Y}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Nn(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}class Jf extends tn{constructor(e=1,t=32,n=0,i=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:e,segments:t,thetaStart:n,thetaLength:i},t=Math.max(3,t);const s=[],a=[],o=[],c=[],l=new X,f=new He;a.push(0,0,0),o.push(0,0,1),c.push(.5,.5);for(let d=0,h=3;d<=t;d++,h+=3){const u=n+d/t*i;l.x=e*Math.cos(u),l.y=e*Math.sin(u),a.push(l.x,l.y,l.z),o.push(0,0,1),f.x=(a[h]/e+1)/2,f.y=(a[h+1]/e+1)/2,c.push(f.x,f.y)}for(let d=1;d<=t;d++)s.push(d,d+1,0);this.setIndex(s),this.setAttribute("position",new kt(a,3)),this.setAttribute("normal",new kt(o,3)),this.setAttribute("uv",new kt(c,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Jf(e.radius,e.segments,e.thetaStart,e.thetaLength)}}class Fa extends tn{constructor(e=1,t=1,n=1,i=32,s=1,a=!1,o=0,c=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:e,radiusBottom:t,height:n,radialSegments:i,heightSegments:s,openEnded:a,thetaStart:o,thetaLength:c};const l=this;i=Math.floor(i),s=Math.floor(s);const f=[],d=[],h=[],u=[];let g=0;const _=[],m=n/2;let p=0;M(),a===!1&&(e>0&&E(!0),t>0&&E(!1)),this.setIndex(f),this.setAttribute("position",new kt(d,3)),this.setAttribute("normal",new kt(h,3)),this.setAttribute("uv",new kt(u,2));function M(){const S=new X,y=new X;let w=0;const A=(t-e)/n;for(let x=0;x<=s;x++){const b=[],C=x/s,L=C*(t-e)+e;for(let N=0;N<=i;N++){const U=N/i,I=U*c+o,G=Math.sin(I),W=Math.cos(I);y.x=L*G,y.y=-C*n+m,y.z=L*W,d.push(y.x,y.y,y.z),S.set(G,A,W).normalize(),h.push(S.x,S.y,S.z),u.push(U,1-C),b.push(g++)}_.push(b)}for(let x=0;x<i;x++)for(let b=0;b<s;b++){const C=_[b][x],L=_[b+1][x],N=_[b+1][x+1],U=_[b][x+1];(e>0||b!==0)&&(f.push(C,L,U),w+=3),(t>0||b!==s-1)&&(f.push(L,N,U),w+=3)}l.addGroup(p,w,0),p+=w}function E(S){const y=g,w=new He,A=new X;let x=0;const b=S===!0?e:t,C=S===!0?1:-1;for(let N=1;N<=i;N++)d.push(0,m*C,0),h.push(0,C,0),u.push(.5,.5),g++;const L=g;for(let N=0;N<=i;N++){const I=N/i*c+o,G=Math.cos(I),W=Math.sin(I);A.x=b*W,A.y=m*C,A.z=b*G,d.push(A.x,A.y,A.z),h.push(0,C,0),w.x=G*.5+.5,w.y=W*.5*C+.5,u.push(w.x,w.y),g++}for(let N=0;N<i;N++){const U=y+N,I=L+N;S===!0?f.push(I,I+1,U):f.push(I+1,I,U),x+=3}l.addGroup(p,x,S===!0?1:2),p+=x}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Fa(e.radiusTop,e.radiusBottom,e.height,e.radialSegments,e.heightSegments,e.openEnded,e.thetaStart,e.thetaLength)}}class hr extends tn{constructor(e=1,t=1,n=1,i=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:t,widthSegments:n,heightSegments:i};const s=e/2,a=t/2,o=Math.floor(n),c=Math.floor(i),l=o+1,f=c+1,d=e/o,h=t/c,u=[],g=[],_=[],m=[];for(let p=0;p<f;p++){const M=p*h-a;for(let E=0;E<l;E++){const S=E*d-s;g.push(S,-M,0),_.push(0,0,1),m.push(E/o),m.push(1-p/c)}}for(let p=0;p<c;p++)for(let M=0;M<o;M++){const E=M+l*p,S=M+l*(p+1),y=M+1+l*(p+1),w=M+1+l*p;u.push(E,S,w),u.push(S,y,w)}this.setIndex(u),this.setAttribute("position",new kt(g,3)),this.setAttribute("normal",new kt(_,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new hr(e.width,e.height,e.widthSegments,e.heightSegments)}}class Ml extends tn{constructor(e=1,t=32,n=16,i=0,s=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:e,widthSegments:t,heightSegments:n,phiStart:i,phiLength:s,thetaStart:a,thetaLength:o},t=Math.max(3,Math.floor(t)),n=Math.max(2,Math.floor(n));const c=Math.min(a+o,Math.PI);let l=0;const f=[],d=new X,h=new X,u=[],g=[],_=[],m=[];for(let p=0;p<=n;p++){const M=[],E=p/n,S=a+E*o,y=e*Math.cos(S),w=Math.sqrt(e*e-y*y);let A=0;p===0&&a===0?A=.5/t:p===n&&c===Math.PI&&(A=-.5/t);for(let x=0;x<=t;x++){const b=x/t,C=i+b*s;d.x=-w*Math.cos(C),d.y=y,d.z=w*Math.sin(C),g.push(d.x,d.y,d.z),h.copy(d).normalize(),_.push(h.x,h.y,h.z),m.push(b+A,1-E),M.push(l++)}f.push(M)}for(let p=0;p<n;p++)for(let M=0;M<t;M++){const E=f[p][M+1],S=f[p][M],y=f[p+1][M],w=f[p+1][M+1];(p!==0||a>0)&&u.push(E,S,w),(p!==n-1||c<Math.PI)&&u.push(S,y,w)}this.setIndex(u),this.setAttribute("position",new kt(g,3)),this.setAttribute("normal",new kt(_,3)),this.setAttribute("uv",new kt(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new Ml(e.radius,e.widthSegments,e.heightSegments,e.phiStart,e.phiLength,e.thetaStart,e.thetaLength)}}function qs(r){const e={};for(const t in r){e[t]={};for(const n in r[t]){const i=r[t][n];if(yd(i))i.isRenderTargetTexture?(We("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[t][n]=null):e[t][n]=i.clone();else if(Array.isArray(i))if(yd(i[0])){const s=[];for(let a=0,o=i.length;a<o;a++)s[a]=i[a].clone();e[t][n]=s}else e[t][n]=i.slice();else e[t][n]=i}}return e}function Sn(r){const e={};for(let t=0;t<r.length;t++){const n=qs(r[t]);for(const i in n)e[i]=n[i]}return e}function yd(r){return r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)}function Yx(r){const e=[];for(let t=0;t<r.length;t++)e.push(r[t].clone());return e}function t_(r){const e=r.getRenderTarget();return e===null?r.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:et.workingColorSpace}const $s={clone:qs,merge:Sn};var qx=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,$x=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class en extends rs{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qx,this.fragmentShader=$x,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=qs(e.uniforms),this.uniformsGroups=Yx(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const t=super.toJSON(e);t.glslVersion=this.glslVersion,t.uniforms={};for(const i in this.uniforms){const a=this.uniforms[i].value;a&&a.isTexture?t.uniforms[i]={type:"t",value:a.toJSON(e).uuid}:a&&a.isColor?t.uniforms[i]={type:"c",value:a.getHex()}:a&&a.isVector2?t.uniforms[i]={type:"v2",value:a.toArray()}:a&&a.isVector3?t.uniforms[i]={type:"v3",value:a.toArray()}:a&&a.isVector4?t.uniforms[i]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?t.uniforms[i]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?t.uniforms[i]={type:"m4",value:a.toArray()}:t.uniforms[i]={value:a}}Object.keys(this.defines).length>0&&(t.defines=this.defines),t.vertexShader=this.vertexShader,t.fragmentShader=this.fragmentShader,t.lights=this.lights,t.clipping=this.clipping;const n={};for(const i in this.extensions)this.extensions[i]===!0&&(n[i]=!0);return Object.keys(n).length>0&&(t.extensions=n),t}fromJSON(e,t){if(super.fromJSON(e,t),e.uniforms!==void 0)for(const n in e.uniforms){const i=e.uniforms[n];switch(this.uniforms[n]={},i.type){case"t":this.uniforms[n].value=t[i.value]||null;break;case"c":this.uniforms[n].value=new Xe().setHex(i.value);break;case"v2":this.uniforms[n].value=new He().fromArray(i.value);break;case"v3":this.uniforms[n].value=new X().fromArray(i.value);break;case"v4":this.uniforms[n].value=new At().fromArray(i.value);break;case"m3":this.uniforms[n].value=new qe().fromArray(i.value);break;case"m4":this.uniforms[n].value=new ct().fromArray(i.value);break;default:this.uniforms[n].value=i.value}}if(e.defines!==void 0&&(this.defines=e.defines),e.vertexShader!==void 0&&(this.vertexShader=e.vertexShader),e.fragmentShader!==void 0&&(this.fragmentShader=e.fragmentShader),e.glslVersion!==void 0&&(this.glslVersion=e.glslVersion),e.extensions!==void 0)for(const n in e.extensions)this.extensions[n]=e.extensions[n];return e.lights!==void 0&&(this.lights=e.lights),e.clipping!==void 0&&(this.clipping=e.clipping),this}}class n_ extends en{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class Kx extends rs{constructor(e){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new Xe(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new Xe(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Zu,this.normalScale=new He(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new vr,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.defines={STANDARD:""},this.color.copy(e.color),this.roughness=e.roughness,this.metalness=e.metalness,this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.emissive.copy(e.emissive),this.emissiveMap=e.emissiveMap,this.emissiveIntensity=e.emissiveIntensity,this.bumpMap=e.bumpMap,this.bumpScale=e.bumpScale,this.normalMap=e.normalMap,this.normalMapType=e.normalMapType,this.normalScale.copy(e.normalScale),this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.roughnessMap=e.roughnessMap,this.metalnessMap=e.metalnessMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.envMapIntensity=e.envMapIntensity,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.flatShading=e.flatShading,this.fog=e.fog,this}}class Zx extends rs{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=ax,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class Jx extends rs{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class i_ extends an{constructor(e,t=1){super(),this.isLight=!0,this.type="Light",this.color=new Xe(e),this.intensity=t}copy(e,t){return super.copy(e,t),this.color.copy(e.color),this.intensity=e.intensity,this}toJSON(e){const t=super.toJSON(e);return t.object.color=this.color.getHex(),t.object.intensity=this.intensity,t}}const Tc=new ct,bd=new X,Td=new X;class Qx{constructor(e){this.camera=e,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new He(512,512),this.mapType=Vn,this.map=null,this.mapPass=null,this.matrix=new ct,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Zf,this._frameExtents=new He(1,1),this._viewportCount=1,this._viewports=[new At(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(e){const t=this.camera;bd.setFromMatrixPosition(e.matrixWorld),t.position.copy(bd),Td.setFromMatrixPosition(e.target.matrixWorld),t.lookAt(Td),t.updateMatrixWorld(),this._updateMatrix(t,this.matrix,this._frustum)}_updateMatrix(e,t,n,i){Tc.multiplyMatrices(e.projectionMatrix,e.matrixWorldInverse),n.setFromProjectionMatrix(Tc,e.coordinateSystem,e.reversedDepth);const s=this._frameExtents,a=i?i.z/s.x:1,o=i?i.w/s.y:1,c=i?i.x/s.x:0,l=i?i.y/s.y:0;e.coordinateSystem===Ja||e.reversedDepth?t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,1,0,0,0,0,1):t.set(.5*a,0,0,.5*a+c,0,.5*o,0,.5*o+l,0,0,.5,.5,0,0,0,1),t.multiply(Tc)}getViewport(e){return this._viewports[e]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(e){return this.camera=e.camera.clone(),this.intensity=e.intensity,this.bias=e.bias,this.radius=e.radius,this.autoUpdate=e.autoUpdate,this.needsUpdate=e.needsUpdate,this.normalBias=e.normalBias,this.blurSamples=e.blurSamples,this.mapSize.copy(e.mapSize),this.biasNode=e.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){const e={};return e.intensity=this.intensity,e.bias=this.bias,e.normalBias=this.normalBias,e.radius=this.radius,e.blurSamples=this.blurSamples,e.mapSize=this.mapSize.toArray(),e.camera=this.camera.toJSON(!1).object,delete e.camera.matrix,e}}const Io=new X,Uo=new Qs,mi=new X;class r_ extends an{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new ct,this.projectionMatrix=new ct,this.projectionMatrixInverse=new ct,this.coordinateSystem=Ti,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,t){return super.copy(e,t),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorld.decompose(Io,Uo,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Io,Uo,mi.set(1,1,1)).invert()}updateWorldMatrix(e,t,n=!1){super.updateWorldMatrix(e,t,n),this.matrixWorld.decompose(Io,Uo,mi),mi.x===1&&mi.y===1&&mi.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Io,Uo,mi.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}}const rr=new X,Ed=new He,wd=new He;class Bn extends r_{constructor(e=50,t=1,n=.1,i=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=n,this.far=i,this.focus=10,this.aspect=t,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const t=.5*this.getFilmHeight()/e;this.fov=Ju*2*Math.atan(t),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(tc*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return Ju*2*Math.atan(Math.tan(tc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,t,n){rr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),t.set(rr.x,rr.y).multiplyScalar(-e/rr.z),rr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(rr.x,rr.y).multiplyScalar(-e/rr.z)}getViewSize(e,t){return this.getViewBounds(e,Ed,wd),t.subVectors(wd,Ed)}setViewOffset(e,t,n,i,s,a){this.aspect=e/t,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let t=e*Math.tan(tc*.5*this.fov)/this.zoom,n=2*t,i=this.aspect*n,s=-.5*i;const a=this.view;if(this.view!==null&&this.view.enabled){const c=a.fullWidth,l=a.fullHeight;s+=a.offsetX*i/c,t-=a.offsetY*n/l,i*=a.width/c,n*=a.height/l}const o=this.filmOffset;o!==0&&(s+=e*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+i,t,t-n,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.fov=this.fov,t.object.zoom=this.zoom,t.object.near=this.near,t.object.far=this.far,t.object.focus=this.focus,t.object.aspect=this.aspect,this.view!==null&&(t.object.view=Object.assign({},this.view)),t.object.filmGauge=this.filmGauge,t.object.filmOffset=this.filmOffset,t}}class jx extends Qx{constructor(){super(new Bn(90,1,.5,500)),this.isPointLightShadow=!0}}class Ad extends i_{constructor(e,t,n=0,i=2){super(e,t),this.isPointLight=!0,this.type="PointLight",this.distance=n,this.decay=i,this.shadow=new jx}get power(){return this.intensity*4*Math.PI}set power(e){this.intensity=e/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(e,t){return super.copy(e,t),this.distance=e.distance,this.decay=e.decay,this.shadow=e.shadow.clone(),this}toJSON(e){const t=super.toJSON(e);return t.object.distance=this.distance,t.object.decay=this.decay,t.object.shadow=this.shadow.toJSON(),t}}class Qf extends r_{constructor(e=-1,t=1,n=1,i=-1,s=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=t,this.top=n,this.bottom=i,this.near=s,this.far=a,this.updateProjectionMatrix()}copy(e,t){return super.copy(e,t),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,t,n,i,s,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=t,this.view.offsetX=n,this.view.offsetY=i,this.view.width=s,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),t=(this.top-this.bottom)/(2*this.zoom),n=(this.right+this.left)/2,i=(this.top+this.bottom)/2;let s=n-e,a=n+e,o=i+t,c=i-t;if(this.view!==null&&this.view.enabled){const l=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=l*this.view.offsetX,a=s+l*this.view.width,o-=f*this.view.offsetY,c=o-f*this.view.height}this.projectionMatrix.makeOrthographic(s,a,o,c,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const t=super.toJSON(e);return t.object.zoom=this.zoom,t.object.left=this.left,t.object.right=this.right,t.object.top=this.top,t.object.bottom=this.bottom,t.object.near=this.near,t.object.far=this.far,this.view!==null&&(t.object.view=Object.assign({},this.view)),t}}class ev extends i_{constructor(e,t){super(e,t),this.isAmbientLight=!0,this.type="AmbientLight"}}const ys=-90,bs=1;class tv extends an{constructor(e,t,n){super(),this.type="CubeCamera",this.renderTarget=n,this.coordinateSystem=null,this.activeMipmapLevel=0;const i=new Bn(ys,bs,e,t);i.layers=this.layers,this.add(i);const s=new Bn(ys,bs,e,t);s.layers=this.layers,this.add(s);const a=new Bn(ys,bs,e,t);a.layers=this.layers,this.add(a);const o=new Bn(ys,bs,e,t);o.layers=this.layers,this.add(o);const c=new Bn(ys,bs,e,t);c.layers=this.layers,this.add(c);const l=new Bn(ys,bs,e,t);l.layers=this.layers,this.add(l)}updateCoordinateSystem(){const e=this.coordinateSystem,t=this.children.concat(),[n,i,s,a,o,c]=t;for(const l of t)this.remove(l);if(e===Ti)n.up.set(0,1,0),n.lookAt(1,0,0),i.up.set(0,1,0),i.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),c.up.set(0,1,0),c.lookAt(0,0,-1);else if(e===Ja)n.up.set(0,-1,0),n.lookAt(-1,0,0),i.up.set(0,-1,0),i.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),c.up.set(0,-1,0),c.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const l of t)this.add(l),l.updateMatrixWorld()}update(e,t){this.parent===null&&this.updateMatrixWorld();const{renderTarget:n,activeMipmapLevel:i}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,a,o,c,l,f]=this.children,d=e.getRenderTarget(),h=e.getActiveCubeFace(),u=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const _=n.texture.generateMipmaps;n.texture.generateMipmaps=!1;let m=!1;e.isWebGLRenderer===!0?m=e.state.buffers.depth.getReversed():m=e.reversedDepthBuffer,e.setRenderTarget(n,0,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,s),e.setRenderTarget(n,1,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,a),e.setRenderTarget(n,2,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,o),e.setRenderTarget(n,3,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,c),e.setRenderTarget(n,4,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,l),n.texture.generateMipmaps=_,e.setRenderTarget(n,5,i),m&&e.autoClear===!1&&e.clearDepth(),e.render(t,f),e.setRenderTarget(d,h,u),e.xr.enabled=g,n.texture.needsPMREMUpdate=!0}}class nv extends Bn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class iv{constructor(){this._previousTime=0,this._currentTime=0,this._startTime=performance.now(),this._delta=0,this._elapsed=0,this._timescale=1,this._document=null,this._pageVisibilityHandler=null}connect(e){this._document=e,e.hidden!==void 0&&(this._pageVisibilityHandler=rv.bind(this),e.addEventListener("visibilitychange",this._pageVisibilityHandler,!1))}disconnect(){this._pageVisibilityHandler!==null&&(this._document.removeEventListener("visibilitychange",this._pageVisibilityHandler),this._pageVisibilityHandler=null),this._document=null}getDelta(){return this._delta/1e3}getElapsed(){return this._elapsed/1e3}getTimescale(){return this._timescale}setTimescale(e){return this._timescale=e,this}reset(){return this._currentTime=performance.now()-this._startTime,this}dispose(){this.disconnect()}update(e){return this._pageVisibilityHandler!==null&&this._document.hidden===!0?this._delta=0:(this._previousTime=this._currentTime,this._currentTime=(e!==void 0?e:performance.now())-this._startTime,this._delta=(this._currentTime-this._previousTime)*this._timescale,this._elapsed+=this._delta),this}}function rv(){this._document.hidden===!1&&this.reset()}const Rd=new ct;class sv{constructor(e,t,n=0,i=1/0){this.ray=new Cl(e,t),this.near=n,this.far=i,this.camera=null,this.layers=new $f,this.params={Mesh:{},Line:{threshold:1},LOD:{},Points:{threshold:1},Sprite:{}}}set(e,t){this.ray.set(e,t)}setFromCamera(e,t){t.isPerspectiveCamera?(this.ray.origin.setFromMatrixPosition(t.matrixWorld),this.ray.direction.set(e.x,e.y,.5).unproject(t).sub(this.ray.origin).normalize(),this.camera=t):t.isOrthographicCamera?(this.ray.origin.set(e.x,e.y,t.projectionMatrix.elements[14]).unproject(t),this.ray.direction.set(0,0,-1).transformDirection(t.matrixWorld),this.camera=t):at("Raycaster: Unsupported camera type: "+t.type)}setFromXRController(e){return Rd.identity().extractRotation(e.matrixWorld),this.ray.origin.setFromMatrixPosition(e.matrixWorld),this.ray.direction.set(0,0,-1).applyMatrix4(Rd),this}intersectObject(e,t=!0,n=[]){return ef(e,this,n,t),n.sort(Cd),n}intersectObjects(e,t=!0,n=[]){for(let i=0,s=e.length;i<s;i++)ef(e[i],this,n,t);return n.sort(Cd),n}}function Cd(r,e){return r.distance-e.distance}function ef(r,e,t,n){let i=!0;if(r.layers.test(e.layers)&&r.raycast(e,t)===!1&&(i=!1),i===!0&&n===!0){const s=r.children;for(let a=0,o=s.length;a<o;a++)ef(s[a],e,t,!0)}}class s_{static{s_.prototype.isMatrix2=!0}constructor(e,t,n,i){this.elements=[1,0,0,1],e!==void 0&&this.set(e,t,n,i)}identity(){return this.set(1,0,0,1),this}fromArray(e,t=0){for(let n=0;n<4;n++)this.elements[n]=e[n+t];return this}set(e,t,n,i){const s=this.elements;return s[0]=e,s[2]=t,s[1]=n,s[3]=i,this}}function Pd(r,e,t,n){const i=av(n);switch(t){case Hm:return r*e;case Vf:return r*e/i.components*i.byteLength;case Gf:return r*e/i.components*i.byteLength;case Qr:return r*e*2/i.components*i.byteLength;case Hf:return r*e*2/i.components*i.byteLength;case Wm:return r*e*3/i.components*i.byteLength;case hi:return r*e*4/i.components*i.byteLength;case Wf:return r*e*4/i.components*i.byteLength;case qo:case $o:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case Ko:case Zo:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Su:case bu:return Math.max(r,16)*Math.max(e,8)/4;case Mu:case yu:return Math.max(r,8)*Math.max(e,8)/2;case Tu:case Eu:case Au:case Ru:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*8;case wu:case dl:case Cu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Pu:return Math.floor((r+3)/4)*Math.floor((e+3)/4)*16;case Du:return Math.floor((r+4)/5)*Math.floor((e+3)/4)*16;case Lu:return Math.floor((r+4)/5)*Math.floor((e+4)/5)*16;case Iu:return Math.floor((r+5)/6)*Math.floor((e+4)/5)*16;case Uu:return Math.floor((r+5)/6)*Math.floor((e+5)/6)*16;case Nu:return Math.floor((r+7)/8)*Math.floor((e+4)/5)*16;case Fu:return Math.floor((r+7)/8)*Math.floor((e+5)/6)*16;case Ou:return Math.floor((r+7)/8)*Math.floor((e+7)/8)*16;case Bu:return Math.floor((r+9)/10)*Math.floor((e+4)/5)*16;case ku:return Math.floor((r+9)/10)*Math.floor((e+5)/6)*16;case zu:return Math.floor((r+9)/10)*Math.floor((e+7)/8)*16;case Vu:return Math.floor((r+9)/10)*Math.floor((e+9)/10)*16;case Gu:return Math.floor((r+11)/12)*Math.floor((e+9)/10)*16;case Hu:return Math.floor((r+11)/12)*Math.floor((e+11)/12)*16;case Wu:case Xu:case Yu:return Math.ceil(r/4)*Math.ceil(e/4)*16;case qu:case $u:return Math.ceil(r/4)*Math.ceil(e/4)*8;case pl:case Ku:return Math.ceil(r/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${t} format.`)}function av(r){switch(r){case Vn:case km:return{byteLength:1,components:1};case Ka:case zm:case yn:return{byteLength:2,components:1};case kf:case zf:return{byteLength:2,components:4};case Ci:case Bf:case fi:return{byteLength:4,components:1};case Vm:case Gm:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${r}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:Pf}}));typeof window<"u"&&(window.__THREE__?We("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=Pf);function a_(){let r=null,e=!1,t=null,n=null;function i(s,a){n=r.requestAnimationFrame(i),t(s,a)}return{start:function(){e!==!0&&t!==null&&r!==null&&(n=r.requestAnimationFrame(i),e=!0)},stop:function(){r!==null&&r.cancelAnimationFrame(n),e=!1},setAnimationLoop:function(s){t=s},setContext:function(s){r=s}}}function ov(r){const e=new WeakMap;function t(o,c){const l=o.array,f=o.usage,d=l.byteLength,h=r.createBuffer();r.bindBuffer(c,h),r.bufferData(c,l,f),o.onUploadCallback();let u;if(l instanceof Float32Array)u=r.FLOAT;else if(typeof Float16Array<"u"&&l instanceof Float16Array)u=r.HALF_FLOAT;else if(l instanceof Uint16Array)o.isFloat16BufferAttribute?u=r.HALF_FLOAT:u=r.UNSIGNED_SHORT;else if(l instanceof Int16Array)u=r.SHORT;else if(l instanceof Uint32Array)u=r.UNSIGNED_INT;else if(l instanceof Int32Array)u=r.INT;else if(l instanceof Int8Array)u=r.BYTE;else if(l instanceof Uint8Array)u=r.UNSIGNED_BYTE;else if(l instanceof Uint8ClampedArray)u=r.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+l);return{buffer:h,type:u,bytesPerElement:l.BYTES_PER_ELEMENT,version:o.version,size:d}}function n(o,c,l){const f=c.array,d=c.updateRanges;if(r.bindBuffer(l,o),d.length===0)r.bufferSubData(l,0,f);else{d.sort((u,g)=>u.start-g.start);let h=0;for(let u=1;u<d.length;u++){const g=d[h],_=d[u];_.start<=g.start+g.count+1?g.count=Math.max(g.count,_.start+_.count-g.start):(++h,d[h]=_)}d.length=h+1;for(let u=0,g=d.length;u<g;u++){const _=d[u];r.bufferSubData(l,_.start*f.BYTES_PER_ELEMENT,f,_.start,_.count)}c.clearUpdateRanges()}c.onUploadCallback()}function i(o){return o.isInterleavedBufferAttribute&&(o=o.data),e.get(o)}function s(o){o.isInterleavedBufferAttribute&&(o=o.data);const c=e.get(o);c&&(r.deleteBuffer(c.buffer),e.delete(o))}function a(o,c){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){const f=e.get(o);(!f||f.version<o.version)&&e.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}const l=e.get(o);if(l===void 0)e.set(o,t(o,c));else if(l.version<o.version){if(l.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");n(l.buffer,o,c),l.version=o.version}}return{get:i,remove:s,update:a}}var lv=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,cv=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,uv=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fv=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,hv=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,dv=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,pv=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,mv=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,_v=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec4 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 );
	}
#endif`,gv=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,xv=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,vv=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mv=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,Sv=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,yv=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,bv=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,Tv=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Ev=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,wv=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Av=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Rv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Cv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Pv=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec4( 1.0 );
#endif
#ifdef USE_COLOR_ALPHA
	vColor *= color;
#elif defined( USE_COLOR )
	vColor.rgb *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.rgb *= instanceColor.rgb;
#endif
#ifdef USE_BATCHING_COLOR
	vColor *= getBatchingColor( getIndirectIndex( gl_DrawID ) );
#endif`,Dv=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
#define inverseTransformDirection transformDirectionByInverseViewMatrix
vec3 transformNormalByInverseViewMatrix( in vec3 normal, in mat4 viewMatrix ) {
	return normalize( ( vec4( normal, 0.0 ) * viewMatrix ).xyz );
}
vec3 transformDirectionByInverseViewMatrix( in vec3 dir, in mat4 viewMatrix ) {
	return normalize( ( vec4( dir, 0.0 ) * viewMatrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,Lv=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,Iv=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
#endif`,Uv=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Nv=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,Fv=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Ov=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Bv="gl_FragColor = linearToOutputTexel( gl_FragColor );",kv=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,zv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * reflectVec );
		#ifdef ENVMAP_BLENDING_MULTIPLY
			outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_MIX )
			outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
		#elif defined( ENVMAP_BLENDING_ADD )
			outgoingLight += envColor.xyz * specularStrength * reflectivity;
		#endif
	#endif
#endif`,Vv=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Gv=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,Hv=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,Wv=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,Xv=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Yv=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,qv=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$v=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,Kv=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,Zv=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Jv=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,Qv=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,jv=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_SUN_LIGHTS > 0
	struct SunLight {
		vec3 direction;
		vec3 color;
	};
	uniform SunLight sunLights[ NUM_SUN_LIGHTS ];
	void getSunLightInfo( const in SunLight sunLight, out IncidentLight light ) {
		light.color = sunLight.color;
		light.direction = sunLight.direction;
		light.visible = true;
	}
#endif
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif
#include <lightprobes_pars_fragment>`,eM=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = transformNormalByInverseViewMatrix( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = transformDirectionByInverseViewMatrix( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_RETROREFLECTION
		vec3 getIBLRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 retroVec = normalize( mix( viewDir, normal, pow4( roughness ) ) );
				retroVec = transformDirectionByInverseViewMatrix( retroVec, viewMatrix );
				vec4 envMapColor = textureCubeUV( envMap, envMapRotation * retroVec, roughness );
				return envMapColor.rgb * envMapIntensity;
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
		#ifdef USE_RETROREFLECTION
			vec3 getIBLAnisotropyRetroRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
				#ifdef ENVMAP_TYPE_CUBE_UV
					vec3 bentNormal = cross( bitangent, viewDir );
					bentNormal = normalize( cross( bentNormal, bitangent ) );
					bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
					return getIBLRetroRadiance( viewDir, bentNormal, roughness );
				#else
					return vec3( 0.0 );
				#endif
			}
		#endif
	#endif
#endif`,tM=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,nM=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,iM=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,rM=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,sM=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_RETROREFLECTION
	material.retroreflectivity = retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,aM=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	vec2 dfg;
	vec3 multiScatteringCompensation;
	#ifdef USE_RETROREFLECTION
		float retroreflectivity;
	#endif
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0Dielectric;
		vec3 iridescenceF0Metallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		return 0.5 / max( gv + gl, EPSILON );
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec2 fab, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec2 fab, const in vec3 specularColor, const in float specularF90, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( material.specularF90 - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
		#ifdef USE_CLEARCOAT
			vec3 Ncc = geometryClearcoatNormal;
			vec2 uvClearcoat = LTC_Uv( Ncc, viewDir, material.clearcoatRoughness );
			vec4 t1Clearcoat = texture2D( ltc_1, uvClearcoat );
			vec4 t2Clearcoat = texture2D( ltc_2, uvClearcoat );
			mat3 mInvClearcoat = mat3(
				vec3( t1Clearcoat.x, 0, t1Clearcoat.y ),
				vec3(             0, 1,             0 ),
				vec3( t1Clearcoat.z, 0, t1Clearcoat.w )
			);
			vec3 fresnelClearcoat = material.clearcoatF0 * t2Clearcoat.x + ( material.clearcoatF90 - material.clearcoatF0 ) * t2Clearcoat.y;
			clearcoatSpecularDirect += lightColor * fresnelClearcoat * LTC_Evaluate( Ncc, viewDir, position, mInvClearcoat, rectCoords );
		#endif
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	vec3 specularBRDF = BRDF_GGX( directLight.direction, geometryViewDir, geometryNormal, material );
	#ifdef USE_RETROREFLECTION
		vec3 retroViewDir = reflect( - geometryViewDir, geometryNormal );
		vec3 retroSpecularBRDF = BRDF_GGX( directLight.direction, retroViewDir, geometryNormal, material );
		specularBRDF = mix( specularBRDF, retroSpecularBRDF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directSpecular += irradiance * specularBRDF * material.multiScatteringCompensation;
	vec3 halfDir = normalize( directLight.direction + geometryViewDir );
	float dotVH = saturate( dot( geometryViewDir, halfDir ) );
	vec3 F = F_Schlick( material.specularColor, material.specularF90, dotVH );
	#ifdef USE_RETROREFLECTION
		vec3 retroHalfDir = normalize( directLight.direction + retroViewDir );
		float dotRetroVH = saturate( dot( retroViewDir, retroHalfDir ) );
		vec3 retroF = F_Schlick( material.specularColor, material.specularF90, dotRetroVH );
		F = mix( F, retroF, saturate( material.retroreflectivity ) );
	#endif
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - F );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 singleScattering = vec3( 0.0 );
	vec3 multiScattering = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScattering, multiScattering );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScattering, multiScattering );
	#endif
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution ) * ( 1.0 - singleScattering - multiScattering );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		sheenSpecularIndirect += irradiance * material.sheenColor * sheenAlbedo * RECIPROCAL_PI;
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( material.dfg, material.specularColor, material.specularF90, material.iridescence, material.iridescenceF0Dielectric, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( material.dfg, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceF0Metallic, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( material.dfg, material.specularColor, material.specularF90, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( material.dfg, material.diffuseColor, material.specularF90, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,oM=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		vec3 iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		vec3 iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( iridescenceFresnelDielectric, iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0Dielectric = Schlick_to_F0( iridescenceFresnelDielectric, 1.0, dotNVi );
		material.iridescenceF0Metallic = Schlick_to_F0( iridescenceFresnelMetallic, 1.0, dotNVi );
	}
#endif
#ifdef STANDARD
	float dotNVms = saturate( dot( geometryNormal, geometryViewDir ) );
	material.dfg = texture2D( dfgLUT, vec2( material.roughness, dotNVms ) ).rg;
	#if ( NUM_SUN_LIGHTS > 0 || NUM_DIR_LIGHTS > 0 || NUM_POINT_LIGHTS > 0 || NUM_SPOT_LIGHTS > 0 )
		float EssMs = material.dfg.x + material.dfg.y;
		material.multiScatteringCompensation = 1.0 + material.specularColorBlended * ( 1.0 / EssMs - 1.0 );
	#endif
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SUN_LIGHTS > 0 ) && defined( RE_Direct )
	SunLight sunLight;
	#if defined( USE_SHADOWMAP ) && NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHTS; i ++ ) {
		sunLight = sunLights[ i ];
		getSunLightInfo( sunLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SUN_LIGHT_SHADOWS )
		sunLightShadow = sunLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getSunShadow( sunShadowMap[ i ], sunLightShadow, UNROLLED_LOOP_INDEX ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
	#ifdef USE_LIGHT_PROBES_GRID
		vec3 probeWorldPos = ( ( vec4( geometryPosition, 1.0 ) - viewMatrix[ 3 ] ) * viewMatrix ).xyz;
		vec3 probeWorldNormal = transformNormalByInverseViewMatrix( geometryNormal, viewMatrix );
		irradiance += getLightProbeGridIrradiance( probeWorldPos, probeWorldNormal );
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,lM=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( ENVMAP_TYPE_CUBE_UV )
		#if defined( STANDARD ) || defined( LAMBERT ) || defined( PHONG )
			iblIrradiance += getIBLIrradiance( geometryNormal );
		#endif
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		vec3 iblRadiance = getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		vec3 iblRadiance = getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_RETROREFLECTION
		#ifdef USE_ANISOTROPY
			vec3 retroIBLRadiance = getIBLAnisotropyRetroRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
		#else
			vec3 retroIBLRadiance = getIBLRetroRadiance( geometryViewDir, geometryNormal, material.roughness );
		#endif
		iblRadiance = mix( iblRadiance, retroIBLRadiance, saturate( material.retroreflectivity ) );
	#endif
	radiance += iblRadiance;
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,cM=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,uM=`#ifdef USE_LIGHT_PROBES_GRID
uniform highp sampler3D probesSH;
uniform vec3 probesMin;
uniform vec3 probesMax;
uniform vec3 probesResolution;
vec3 getLightProbeGridIrradiance( vec3 worldPos, vec3 worldNormal ) {
	vec3 res = probesResolution;
	vec3 gridRange = probesMax - probesMin;
	vec3 resMinusOne = res - 1.0;
	vec3 probeSpacing = gridRange / resMinusOne;
	vec3 samplePos = worldPos + worldNormal * probeSpacing * 0.5;
	vec3 uvw = clamp( ( samplePos - probesMin ) / gridRange, 0.0, 1.0 );
	uvw = uvw * resMinusOne / res + 0.5 / res;
	float nz          = res.z;
	float paddedSlices = nz + 2.0;
	float atlasDepth  = 7.0 * paddedSlices;
	float uvZBase     = uvw.z * nz + 1.0;
	vec4 s0 = texture( probesSH, vec3( uvw.xy, ( uvZBase                       ) / atlasDepth ) );
	vec4 s1 = texture( probesSH, vec3( uvw.xy, ( uvZBase +       paddedSlices   ) / atlasDepth ) );
	vec4 s2 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 2.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s3 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 3.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s4 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 4.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s5 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 5.0 * paddedSlices   ) / atlasDepth ) );
	vec4 s6 = texture( probesSH, vec3( uvw.xy, ( uvZBase + 6.0 * paddedSlices   ) / atlasDepth ) );
	vec3 c0 = s0.xyz;
	vec3 c1 = vec3( s0.w, s1.xy );
	vec3 c2 = vec3( s1.zw, s2.x );
	vec3 c3 = s2.yzw;
	vec3 c4 = s3.xyz;
	vec3 c5 = vec3( s3.w, s4.xy );
	vec3 c6 = vec3( s4.zw, s5.x );
	vec3 c7 = s5.yzw;
	vec3 c8 = s6.xyz;
	float x = worldNormal.x, y = worldNormal.y, z = worldNormal.z;
	vec3 result = c0 * 0.886227;
	result += c1 * 2.0 * 0.511664 * y;
	result += c2 * 2.0 * 0.511664 * z;
	result += c3 * 2.0 * 0.511664 * x;
	result += c4 * 2.0 * 0.429043 * x * y;
	result += c5 * 2.0 * 0.429043 * y * z;
	result += c6 * ( 0.743125 * z * z - 0.247708 );
	result += c7 * 2.0 * 0.429043 * x * z;
	result += c8 * 0.429043 * ( x * x - y * y );
	return max( result, vec3( 0.0 ) );
}
#endif`,fM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,hM=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,dM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,pM=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,mM=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,_M=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,gM=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,xM=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,vM=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,MM=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,SM=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,yM=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,bM=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,TM=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,EM=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,wM=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#ifdef DOUBLE_SIDED
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#ifdef DOUBLE_SIDED
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,AM=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#if defined( USE_PACKED_NORMALMAP )
		mapN = vec3( mapN.xy, sqrt( saturate( 1.0 - dot( mapN.xy, mapN.xy ) ) ) );
	#endif
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,RM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,CM=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,PM=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,DM=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,LM=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,IM=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,UM=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,NM=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,FM=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,OM=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	#ifdef USE_REVERSED_DEPTH_BUFFER
	
		return depth * ( far - near ) - far;
	#else
		return depth * ( near - far ) - near;
	#endif
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	
	#ifdef USE_REVERSED_DEPTH_BUFFER
		return ( near * far ) / ( ( near - far ) * depth - near );
	#else
		return ( near * far ) / ( ( far - near ) * depth - far );
	#endif
}`,BM=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,kM=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,zM=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,VM=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,GM=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,HM=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,WM=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		#define SUN_LIGHT_CASCADES 2
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#else
			uniform sampler2D sunShadowMap[ NUM_SUN_LIGHT_SHADOWS ];
		#endif
		uniform mat4 sunShadowMatrix[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		uniform vec4 sunShadowCascade[ NUM_SUN_LIGHT_SHADOWS * SUN_LIGHT_CASCADES ];
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
		struct SunLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SunLightShadow sunLightShadows[ NUM_SUN_LIGHT_SHADOWS ];
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadowCoord.z -= shadowBias;
			#else
				shadowCoord.z += shadowBias;
			#endif
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_SUN_LIGHT_SHADOWS > 0
		float getSunShadow(
			#if defined( SHADOWMAP_TYPE_PCF )
				sampler2DShadow shadowMap,
			#else
				sampler2D shadowMap,
			#endif
			SunLightShadow sunLightShadow,
			int shadowIndex
		) {
			vec4 shadowWorldPosition = vec4( vSunShadowWorldPosition.xyz + vSunShadowWorldNormal * sunLightShadow.shadowNormalBias, 1.0 );
			float viewDepth = vSunShadowWorldPosition.w;
			int cascadeOffset = shadowIndex * SUN_LIGHT_CASCADES;
			float shadow = 1.0;
			for ( int i = SUN_LIGHT_CASCADES - 1; i >= 0; i -- ) {
				vec4 cascade = sunShadowCascade[ cascadeOffset + i ];
				if ( viewDepth >= cascade.x && viewDepth < cascade.y ) {
					float cascadeShadow = getShadow(
						shadowMap,
						sunLightShadow.shadowMapSize,
						sunLightShadow.shadowIntensity,
						sunLightShadow.shadowBias,
						sunLightShadow.shadowRadius,
						sunShadowMatrix[ cascadeOffset + i ] * shadowWorldPosition
					);
					shadow = mix( cascadeShadow, shadow, smoothstep( cascade.z, cascade.y, viewDepth ) );
				}
			}
			return shadow;
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			#ifdef USE_REVERSED_DEPTH_BUFFER
				float dp = ( shadowCameraNear * ( shadowCameraFar - viewSpaceZ ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp -= shadowBias;
			#else
				float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
				dp += shadowBias;
			#endif
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * PI2;
			vec2 sample0 = vogelDiskSample( 0, 5, phi );
			vec2 sample1 = vogelDiskSample( 1, 5, phi );
			vec2 sample2 = vogelDiskSample( 2, 5, phi );
			vec2 sample3 = vogelDiskSample( 3, 5, phi );
			vec2 sample4 = vogelDiskSample( 4, 5, phi );
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * sample0.x + bitangent * sample0.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample1.x + bitangent * sample1.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample2.x + bitangent * sample2.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample3.x + bitangent * sample3.y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * sample4.x + bitangent * sample4.y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			vec3 bd3D = normalize( lightToPosition );
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				depth = 1.0 - depth;
			#endif
			shadow = step( dp, depth );
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,XM=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
		varying vec4 vSunShadowWorldPosition;
		varying vec3 vSunShadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,YM=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	#ifdef HAS_NORMAL
		vec3 shadowWorldNormal = transformNormalByInverseViewMatrix( transformedNormal, viewMatrix );
	#else
		vec3 shadowWorldNormal = vec3( 0.0 );
	#endif
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_SUN_LIGHT_SHADOWS > 0
		vSunShadowWorldPosition = vec4( worldPosition.xyz, - mvPosition.z );
		vSunShadowWorldNormal = shadowWorldNormal;
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,qM=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_SUN_LIGHT_SHADOWS > 0
	SunLightShadow sunLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SUN_LIGHT_SHADOWS; i ++ ) {
		sunLight = sunLightShadows[ i ];
		shadow *= receiveShadow ? getSunShadow( sunShadowMap[ i ], sunLight, UNROLLED_LOOP_INDEX ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,$M=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,KM=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,ZM=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,JM=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,QM=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,jM=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,eS=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,tS=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,nS=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = transformNormalByInverseViewMatrix( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,iS=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,rS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,sS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,aS=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,oS=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const lS=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,cS=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,uS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,fS=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vWorldDirection );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,hS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,dS=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,pS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,mS=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,_S=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,gS=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,xS=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,vS=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,MS=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,SS=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,yS=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,bS=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,TS=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,ES=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,wS=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,AS=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,RS=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,CS=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,PS=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,DS=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,LS=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,IS=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_RETROREFLECTION
	uniform float retroreflectivity;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,US=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,NS=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,FS=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,OS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,BS=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,kS=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,zS=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,VS=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,Ke={alphahash_fragment:lv,alphahash_pars_fragment:cv,alphamap_fragment:uv,alphamap_pars_fragment:fv,alphatest_fragment:hv,alphatest_pars_fragment:dv,aomap_fragment:pv,aomap_pars_fragment:mv,batching_pars_vertex:_v,batching_vertex:gv,begin_vertex:xv,beginnormal_vertex:vv,bsdfs:Mv,iridescence_fragment:Sv,bumpmap_pars_fragment:yv,clipping_planes_fragment:bv,clipping_planes_pars_fragment:Tv,clipping_planes_pars_vertex:Ev,clipping_planes_vertex:wv,color_fragment:Av,color_pars_fragment:Rv,color_pars_vertex:Cv,color_vertex:Pv,common:Dv,cube_uv_reflection_fragment:Lv,defaultnormal_vertex:Iv,displacementmap_pars_vertex:Uv,displacementmap_vertex:Nv,emissivemap_fragment:Fv,emissivemap_pars_fragment:Ov,colorspace_fragment:Bv,colorspace_pars_fragment:kv,envmap_fragment:zv,envmap_common_pars_fragment:Vv,envmap_pars_fragment:Gv,envmap_pars_vertex:Hv,envmap_physical_pars_fragment:eM,envmap_vertex:Wv,fog_vertex:Xv,fog_pars_vertex:Yv,fog_fragment:qv,fog_pars_fragment:$v,gradientmap_pars_fragment:Kv,lightmap_pars_fragment:Zv,lights_lambert_fragment:Jv,lights_lambert_pars_fragment:Qv,lights_pars_begin:jv,lights_toon_fragment:tM,lights_toon_pars_fragment:nM,lights_phong_fragment:iM,lights_phong_pars_fragment:rM,lights_physical_fragment:sM,lights_physical_pars_fragment:aM,lights_fragment_begin:oM,lights_fragment_maps:lM,lights_fragment_end:cM,lightprobes_pars_fragment:uM,logdepthbuf_fragment:fM,logdepthbuf_pars_fragment:hM,logdepthbuf_pars_vertex:dM,logdepthbuf_vertex:pM,map_fragment:mM,map_pars_fragment:_M,map_particle_fragment:gM,map_particle_pars_fragment:xM,metalnessmap_fragment:vM,metalnessmap_pars_fragment:MM,morphinstance_vertex:SM,morphcolor_vertex:yM,morphnormal_vertex:bM,morphtarget_pars_vertex:TM,morphtarget_vertex:EM,normal_fragment_begin:wM,normal_fragment_maps:AM,normal_pars_fragment:RM,normal_pars_vertex:CM,normal_vertex:PM,normalmap_pars_fragment:DM,clearcoat_normal_fragment_begin:LM,clearcoat_normal_fragment_maps:IM,clearcoat_pars_fragment:UM,iridescence_pars_fragment:NM,opaque_fragment:FM,packing:OM,premultiplied_alpha_fragment:BM,project_vertex:kM,dithering_fragment:zM,dithering_pars_fragment:VM,roughnessmap_fragment:GM,roughnessmap_pars_fragment:HM,shadowmap_pars_fragment:WM,shadowmap_pars_vertex:XM,shadowmap_vertex:YM,shadowmask_pars_fragment:qM,skinbase_vertex:$M,skinning_pars_vertex:KM,skinning_vertex:ZM,skinnormal_vertex:JM,specularmap_fragment:QM,specularmap_pars_fragment:jM,tonemapping_fragment:eS,tonemapping_pars_fragment:tS,transmission_fragment:nS,transmission_pars_fragment:iS,uv_pars_fragment:rS,uv_pars_vertex:sS,uv_vertex:aS,worldpos_vertex:oS,background_vert:lS,background_frag:cS,backgroundCube_vert:uS,backgroundCube_frag:fS,cube_vert:hS,cube_frag:dS,depth_vert:pS,depth_frag:mS,distance_vert:_S,distance_frag:gS,equirect_vert:xS,equirect_frag:vS,linedashed_vert:MS,linedashed_frag:SS,meshbasic_vert:yS,meshbasic_frag:bS,meshlambert_vert:TS,meshlambert_frag:ES,meshmatcap_vert:wS,meshmatcap_frag:AS,meshnormal_vert:RS,meshnormal_frag:CS,meshphong_vert:PS,meshphong_frag:DS,meshphysical_vert:LS,meshphysical_frag:IS,meshtoon_vert:US,meshtoon_frag:NS,points_vert:FS,points_frag:OS,shadow_vert:BS,shadow_frag:kS,sprite_vert:zS,sprite_frag:VS},ye={common:{diffuse:{value:new Xe(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new qe}},envmap:{envMap:{value:null},envMapRotation:{value:new qe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new qe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new qe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new qe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new qe},normalScale:{value:new He(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new qe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new qe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new qe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new qe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new Xe(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new X},probesMax:{value:new X},probesResolution:{value:new X}},points:{diffuse:{value:new Xe(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0},uvTransform:{value:new qe}},sprite:{diffuse:{value:new Xe(16777215)},opacity:{value:1},center:{value:new He(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new qe},alphaMap:{value:null},alphaMapTransform:{value:new qe},alphaTest:{value:0}}},Mi={basic:{uniforms:Sn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.fog]),vertexShader:Ke.meshbasic_vert,fragmentShader:Ke.meshbasic_frag},lambert:{uniforms:Sn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Xe(0)},envMapIntensity:{value:1}}]),vertexShader:Ke.meshlambert_vert,fragmentShader:Ke.meshlambert_frag},phong:{uniforms:Sn([ye.common,ye.specularmap,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,ye.lights,{emissive:{value:new Xe(0)},specular:{value:new Xe(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphong_vert,fragmentShader:Ke.meshphong_frag},standard:{uniforms:Sn([ye.common,ye.envmap,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.roughnessmap,ye.metalnessmap,ye.fog,ye.lights,{emissive:{value:new Xe(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag},toon:{uniforms:Sn([ye.common,ye.aomap,ye.lightmap,ye.emissivemap,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.gradientmap,ye.fog,ye.lights,{emissive:{value:new Xe(0)}}]),vertexShader:Ke.meshtoon_vert,fragmentShader:Ke.meshtoon_frag},matcap:{uniforms:Sn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,ye.fog,{matcap:{value:null}}]),vertexShader:Ke.meshmatcap_vert,fragmentShader:Ke.meshmatcap_frag},points:{uniforms:Sn([ye.points,ye.fog]),vertexShader:Ke.points_vert,fragmentShader:Ke.points_frag},dashed:{uniforms:Sn([ye.common,ye.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:Ke.linedashed_vert,fragmentShader:Ke.linedashed_frag},depth:{uniforms:Sn([ye.common,ye.displacementmap]),vertexShader:Ke.depth_vert,fragmentShader:Ke.depth_frag},normal:{uniforms:Sn([ye.common,ye.bumpmap,ye.normalmap,ye.displacementmap,{opacity:{value:1}}]),vertexShader:Ke.meshnormal_vert,fragmentShader:Ke.meshnormal_frag},sprite:{uniforms:Sn([ye.sprite,ye.fog]),vertexShader:Ke.sprite_vert,fragmentShader:Ke.sprite_frag},background:{uniforms:{uvTransform:{value:new qe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:Ke.background_vert,fragmentShader:Ke.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new qe}},vertexShader:Ke.backgroundCube_vert,fragmentShader:Ke.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:Ke.cube_vert,fragmentShader:Ke.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:Ke.equirect_vert,fragmentShader:Ke.equirect_frag},distance:{uniforms:Sn([ye.common,ye.displacementmap,{referencePosition:{value:new X},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:Ke.distance_vert,fragmentShader:Ke.distance_frag},shadow:{uniforms:Sn([ye.lights,ye.fog,{color:{value:new Xe(0)},opacity:{value:1}}]),vertexShader:Ke.shadow_vert,fragmentShader:Ke.shadow_frag}};Mi.physical={uniforms:Sn([Mi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new qe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new qe},clearcoatNormalScale:{value:new He(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new qe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new qe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new qe},sheen:{value:0},sheenColor:{value:new Xe(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new qe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new qe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new qe},transmissionSamplerSize:{value:new He},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new qe},attenuationDistance:{value:0},attenuationColor:{value:new Xe(0)},specularColor:{value:new Xe(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new qe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new qe},anisotropyVector:{value:new He},anisotropyMap:{value:null},anisotropyMapTransform:{value:new qe}}]),vertexShader:Ke.meshphysical_vert,fragmentShader:Ke.meshphysical_frag};const No={r:0,b:0,g:0},GS=new ct,o_=new qe;o_.set(-1,0,0,0,1,0,0,0,1);function HS(r,e,t,n,i,s){const a=new Xe(0);let o=i===!0?0:1,c,l,f=null,d=0,h=null;function u(M){let E=M.isScene===!0?M.background:null;if(E&&E.isTexture){const S=M.backgroundBlurriness>0;E=e.get(E,S)}return E}function g(M){let E=!1;const S=u(M);S===null?m(a,o):S&&S.isColor&&(m(S,1),E=!0);const y=r.xr.getEnvironmentBlendMode();y==="additive"?t.buffers.color.setClear(0,0,0,1,s):y==="alpha-blend"&&t.buffers.color.setClear(0,0,0,0,s),(r.autoClear||E)&&(t.buffers.depth.setTest(!0),t.buffers.depth.setMask(!0),t.buffers.color.setMask(!0),r.clear(r.autoClearColor,r.autoClearDepth,r.autoClearStencil))}function _(M,E){const S=u(E);S&&(S.isCubeTexture||S.mapping===Rl)?(l===void 0&&(l=new bt(new Nn(1,1,1),new en({name:"BackgroundCubeMaterial",uniforms:qs(Mi.backgroundCube.uniforms),vertexShader:Mi.backgroundCube.vertexShader,fragmentShader:Mi.backgroundCube.fragmentShader,side:Pn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),l.geometry.deleteAttribute("uv"),l.onBeforeRender=function(y,w,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(l.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),n.update(l)),l.material.uniforms.envMap.value=S,l.material.uniforms.backgroundBlurriness.value=E.backgroundBlurriness,l.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,l.material.uniforms.backgroundRotation.value.setFromMatrix4(GS.makeRotationFromEuler(E.backgroundRotation)).transpose(),S.isCubeTexture&&S.isRenderTargetTexture===!1&&l.material.uniforms.backgroundRotation.value.premultiply(o_),l.material.toneMapped=et.getTransfer(S.colorSpace)!==pt,(f!==S||d!==S.version||h!==r.toneMapping)&&(l.material.needsUpdate=!0,f=S,d=S.version,h=r.toneMapping),l.layers.enableAll(),M.unshift(l,l.geometry,l.material,0,0,null)):S&&S.isTexture&&(c===void 0&&(c=new bt(new hr(2,2),new en({name:"BackgroundMaterial",uniforms:qs(Mi.background.uniforms),vertexShader:Mi.background.vertexShader,fragmentShader:Mi.background.fragmentShader,side:Zr,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),n.update(c)),c.material.uniforms.t2D.value=S,c.material.uniforms.backgroundIntensity.value=E.backgroundIntensity,c.material.toneMapped=et.getTransfer(S.colorSpace)!==pt,S.matrixAutoUpdate===!0&&S.updateMatrix(),c.material.uniforms.uvTransform.value.copy(S.matrix),(f!==S||d!==S.version||h!==r.toneMapping)&&(c.material.needsUpdate=!0,f=S,d=S.version,h=r.toneMapping),c.layers.enableAll(),M.unshift(c,c.geometry,c.material,0,0,null))}function m(M,E){M.getRGB(No,t_(r)),t.buffers.color.setClear(No.r,No.g,No.b,E,s)}function p(){l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(M,E=1){a.set(M),o=E,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(M){o=M,m(a,o)},render:g,addToRenderList:_,dispose:p}}function WS(r,e){const t=r.getParameter(r.MAX_VERTEX_ATTRIBS),n={},i=h(null);let s=i,a=!1;function o(L,N,U,I,G){let W=!1;const Y=d(L,I,U,N);s!==Y&&(s=Y,l(s.object)),W=u(L,I,U,G),W&&g(L,I,U,G),G!==null&&e.update(G,r.ELEMENT_ARRAY_BUFFER),(W||a)&&(a=!1,S(L,N,U,I),G!==null&&r.bindBuffer(r.ELEMENT_ARRAY_BUFFER,e.get(G).buffer))}function c(){return r.createVertexArray()}function l(L){return r.bindVertexArray(L)}function f(L){return r.deleteVertexArray(L)}function d(L,N,U,I){const G=I.wireframe===!0;let W=n[N.id];W===void 0&&(W={},n[N.id]=W);const Y=L.isInstancedMesh===!0?L.id:0;let se=W[Y];se===void 0&&(se={},W[Y]=se);let Q=se[U.id];Q===void 0&&(Q={},se[U.id]=Q);let oe=Q[G];return oe===void 0&&(oe=h(c()),Q[G]=oe),oe}function h(L){const N=[],U=[],I=[];for(let G=0;G<t;G++)N[G]=0,U[G]=0,I[G]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:N,enabledAttributes:U,attributeDivisors:I,object:L,attributes:{},index:null}}function u(L,N,U,I){const G=s.attributes,W=N.attributes;let Y=0;const se=U.getAttributes();for(const Q in se)if(se[Q].location>=0){const ee=G[Q];let _e=W[Q];if(_e===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(_e=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(_e=L.instanceColor)),ee===void 0||ee.attribute!==_e||_e&&ee.data!==_e.data)return!0;Y++}return s.attributesNum!==Y||s.index!==I}function g(L,N,U,I){const G={},W=N.attributes;let Y=0;const se=U.getAttributes();for(const Q in se)if(se[Q].location>=0){let ee=W[Q];ee===void 0&&(Q==="instanceMatrix"&&L.instanceMatrix&&(ee=L.instanceMatrix),Q==="instanceColor"&&L.instanceColor&&(ee=L.instanceColor));const _e={};_e.attribute=ee,ee&&ee.data&&(_e.data=ee.data),G[Q]=_e,Y++}s.attributes=G,s.attributesNum=Y,s.index=I}function _(){const L=s.newAttributes;for(let N=0,U=L.length;N<U;N++)L[N]=0}function m(L){p(L,0)}function p(L,N){const U=s.newAttributes,I=s.enabledAttributes,G=s.attributeDivisors;U[L]=1,I[L]===0&&(r.enableVertexAttribArray(L),I[L]=1),G[L]!==N&&(r.vertexAttribDivisor(L,N),G[L]=N)}function M(){const L=s.newAttributes,N=s.enabledAttributes;for(let U=0,I=N.length;U<I;U++)N[U]!==L[U]&&(r.disableVertexAttribArray(U),N[U]=0)}function E(L,N,U,I,G,W,Y){Y===!0?r.vertexAttribIPointer(L,N,U,G,W):r.vertexAttribPointer(L,N,U,I,G,W)}function S(L,N,U,I){_();const G=I.attributes,W=U.getAttributes(),Y=N.defaultAttributeValues;for(const se in W){const Q=W[se];if(Q.location>=0){let oe=G[se];if(oe===void 0&&(se==="instanceMatrix"&&L.instanceMatrix&&(oe=L.instanceMatrix),se==="instanceColor"&&L.instanceColor&&(oe=L.instanceColor)),oe!==void 0){const ee=oe.normalized,_e=oe.itemSize,ge=e.get(oe);if(ge===void 0)continue;const Ie=ge.buffer,ke=ge.type,Ge=ge.bytesPerElement,j=ke===r.INT||ke===r.UNSIGNED_INT||oe.gpuType===Bf;if(oe.isInterleavedBufferAttribute){const te=oe.data,me=te.stride,Oe=oe.offset;if(te.isInstancedInterleavedBuffer){for(let xe=0;xe<Q.locationSize;xe++)p(Q.location+xe,te.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=te.meshPerAttribute*te.count)}else for(let xe=0;xe<Q.locationSize;xe++)m(Q.location+xe);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let xe=0;xe<Q.locationSize;xe++)E(Q.location+xe,_e/Q.locationSize,ke,ee,me*Ge,(Oe+_e/Q.locationSize*xe)*Ge,j)}else{if(oe.isInstancedBufferAttribute){for(let te=0;te<Q.locationSize;te++)p(Q.location+te,oe.meshPerAttribute);L.isInstancedMesh!==!0&&I._maxInstanceCount===void 0&&(I._maxInstanceCount=oe.meshPerAttribute*oe.count)}else for(let te=0;te<Q.locationSize;te++)m(Q.location+te);r.bindBuffer(r.ARRAY_BUFFER,Ie);for(let te=0;te<Q.locationSize;te++)E(Q.location+te,_e/Q.locationSize,ke,ee,_e*Ge,_e/Q.locationSize*te*Ge,j)}}else if(Y!==void 0){const ee=Y[se];if(ee!==void 0)switch(ee.length){case 2:r.vertexAttrib2fv(Q.location,ee);break;case 3:r.vertexAttrib3fv(Q.location,ee);break;case 4:r.vertexAttrib4fv(Q.location,ee);break;default:r.vertexAttrib1fv(Q.location,ee)}}}}M()}function y(){b();for(const L in n){const N=n[L];for(const U in N){const I=N[U];for(const G in I){const W=I[G];for(const Y in W)f(W[Y].object),delete W[Y];delete I[G]}}delete n[L]}}function w(L){if(n[L.id]===void 0)return;const N=n[L.id];for(const U in N){const I=N[U];for(const G in I){const W=I[G];for(const Y in W)f(W[Y].object),delete W[Y];delete I[G]}}delete n[L.id]}function A(L){for(const N in n){const U=n[N];for(const I in U){const G=U[I];if(G[L.id]===void 0)continue;const W=G[L.id];for(const Y in W)f(W[Y].object),delete W[Y];delete G[L.id]}}}function x(L){for(const N in n){const U=n[N],I=L.isInstancedMesh===!0?L.id:0,G=U[I];if(G!==void 0){for(const W in G){const Y=G[W];for(const se in Y)f(Y[se].object),delete Y[se];delete G[W]}delete U[I],Object.keys(U).length===0&&delete n[N]}}}function b(){C(),a=!0,s!==i&&(s=i,l(s.object))}function C(){i.geometry=null,i.program=null,i.wireframe=!1}return{setup:o,reset:b,resetDefaultState:C,dispose:y,releaseStatesOfGeometry:w,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:_,enableAttribute:m,disableUnusedAttributes:M}}function XS(r,e,t){let n;function i(c){n=c}function s(c,l){r.drawArrays(n,c,l),t.update(l,n,1)}function a(c,l,f){f!==0&&(r.drawArraysInstanced(n,c,l,f),t.update(l,n,f))}function o(c,l,f){if(f===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(n,c,0,l,0,f);let h=0;for(let u=0;u<f;u++)h+=l[u];t.update(h,n,1)}this.setMode=i,this.render=s,this.renderInstances=a,this.renderMultiDraw=o}function YS(r,e,t,n){let i;function s(){if(i!==void 0)return i;if(e.has("EXT_texture_filter_anisotropic")===!0){const A=e.get("EXT_texture_filter_anisotropic");i=r.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else i=0;return i}function a(A){return!(A!==hi&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){const x=A===yn&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(A!==Vn&&A!==fi&&!x&&n.convert(A)!==r.getParameter(r.IMPLEMENTATION_COLOR_READ_TYPE))}function c(A){if(A==="highp"){if(r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.HIGH_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&r.getShaderPrecisionFormat(r.VERTEX_SHADER,r.MEDIUM_FLOAT).precision>0&&r.getShaderPrecisionFormat(r.FRAGMENT_SHADER,r.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let l=t.precision!==void 0?t.precision:"highp";const f=c(l);f!==l&&(We("WebGLRenderer:",l,"not supported, using",f,"instead."),l=f);const d=t.logarithmicDepthBuffer===!0,h=t.reversedDepthBuffer===!0&&e.has("EXT_clip_control");t.reversedDepthBuffer===!0&&h===!1&&We("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");const u=r.getParameter(r.MAX_TEXTURE_IMAGE_UNITS),g=r.getParameter(r.MAX_VERTEX_TEXTURE_IMAGE_UNITS),_=r.getParameter(r.MAX_TEXTURE_SIZE),m=r.getParameter(r.MAX_CUBE_MAP_TEXTURE_SIZE),p=r.getParameter(r.MAX_VERTEX_ATTRIBS),M=r.getParameter(r.MAX_VERTEX_UNIFORM_VECTORS),E=r.getParameter(r.MAX_VARYING_VECTORS),S=r.getParameter(r.MAX_FRAGMENT_UNIFORM_VECTORS),y=r.getParameter(r.MAX_SAMPLES),w=r.getParameter(r.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:c,textureFormatReadable:a,textureTypeReadable:o,precision:l,logarithmicDepthBuffer:d,reversedDepthBuffer:h,maxTextures:u,maxVertexTextures:g,maxTextureSize:_,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:M,maxVaryings:E,maxFragmentUniforms:S,maxSamples:y,samples:w}}function qS(r){const e=this;let t=null,n=0,i=!1,s=!1;const a=new zi,o=new qe,c={value:null,needsUpdate:!1};this.uniform=c,this.numPlanes=0,this.numIntersection=0,this.init=function(d,h){const u=d.length!==0||h||n!==0||i;return i=h,n=d.length,u},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(d,h){t=f(d,h,0)},this.setState=function(d,h,u){const g=d.clippingPlanes,_=d.clipIntersection,m=d.clipShadows,p=r.get(d);if(!i||g===null||g.length===0||s&&!m)s?f(null):l();else{const M=s?0:n,E=M*4;let S=p.clippingState||null;c.value=S,S=f(g,h,E,u);for(let y=0;y!==E;++y)S[y]=t[y];p.clippingState=S,this.numIntersection=_?this.numPlanes:0,this.numPlanes+=M}};function l(){c.value!==t&&(c.value=t,c.needsUpdate=n>0),e.numPlanes=n,e.numIntersection=0}function f(d,h,u,g){const _=d!==null?d.length:0;let m=null;if(_!==0){if(m=c.value,g!==!0||m===null){const p=u+_*4,M=h.matrixWorldInverse;o.getNormalMatrix(M),(m===null||m.length<p)&&(m=new Float32Array(p));for(let E=0,S=u;E!==_;++E,S+=4)a.copy(d[E]).applyMatrix4(M,o),a.normal.toArray(m,S),m[S+3]=a.constant}c.value=m,c.needsUpdate=!0}return e.numPlanes=_,e.numIntersection=0,m}}const Ds=4,$S=6,KS=20,ZS=256,ha=new Qf,Dd=new Xe;let Ec=null,wc=0,Ac=0,Rc=!1;const JS=new X,Cr=new X;class Ld{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,t=0,n=.1,i=100,s={}){const{size:a=256,position:o=JS}=s;Ec=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Ac=this._renderer.getActiveMipmapLevel(),Rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);const c=this._allocateTargets();return c.depthBuffer=!0,this._sceneToCubeUV(e,n,i,c,o),t>0&&this._blur(c,0,0,t),this._applyPMREM(c),this._cleanup(c),c}fromEquirectangular(e,t=null){return this._fromTexture(e,t)}fromCubemap(e,t=null){return this._fromTexture(e,t)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Nd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ud(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Ec,wc,Ac),this._renderer.xr.enabled=Rc,e.scissorTest=!1,Ts(e,0,0,e.width,e.height)}_fromTexture(e,t){e.mapping===Jr||e.mapping===Ys?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Ec=this._renderer.getRenderTarget(),wc=this._renderer.getActiveCubeFace(),Ac=this._renderer.getActiveMipmapLevel(),Rc=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const n=t||this._allocateTargets();return this._textureToCubeUV(e,n),this._applyPMREM(n),this._cleanup(n),n}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),t=4*this._cubeSize,n={magFilter:pn,minFilter:pn,generateMipmaps:!1,type:yn,format:hi,colorSpace:ml,depthBuffer:!1},i=Id(e,t,n);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==t){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Id(e,t,n);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=QS(s)),this._blurMaterial=ey(s,e,t),this._ggxMaterial=jS(s,e,t)}return i}_compileMaterial(e){const t=new bt(new tn,e);this._renderer.compile(t,ha)}_sceneToCubeUV(e,t,n,i,s){const c=new Bn(90,1,t,n),l=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],d=this._renderer,h=d.autoClear,u=d.toneMapping;d.getClearColor(Dd),d.toneMapping=wi,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(i),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new bt(new Nn,new oi({name:"PMREM.Background",side:Pn,depthWrite:!1,depthTest:!1})));const _=this._backgroundBox,m=_.material;let p=!1;const M=e.background;M?M.isColor&&(m.color.copy(M),e.background=null,p=!0):(m.color.copy(Dd),p=!0);for(let E=0;E<6;E++){const S=E%3;S===0?(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x+f[E],s.y,s.z)):S===1?(c.up.set(0,0,l[E]),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y+f[E],s.z)):(c.up.set(0,l[E],0),c.position.set(s.x,s.y,s.z),c.lookAt(s.x,s.y,s.z+f[E]));const y=this._cubeSize;Ts(i,S*y,E>2?y:0,y,y),d.setRenderTarget(i),p&&d.render(_,c),d.render(e,c)}d.toneMapping=u,d.autoClear=h,e.background=M}_textureToCubeUV(e,t){const n=this._renderer,i=e.mapping===Jr||e.mapping===Ys;i?(this._cubemapMaterial===null&&(this._cubemapMaterial=Nd()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ud());const s=i?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=s;const o=s.uniforms;o.envMap.value=e;const c=this._cubeSize;Ts(t,0,0,3*c,2*c),n.setRenderTarget(t),n.render(a,ha)}_applyPMREM(e){const t=this._renderer,n=t.autoClear;t.autoClear=!1;const i=this._lodMeshes.length;for(let s=1;s<i;s++)this._applyGGXFilter(e,s-1,s);t.autoClear=n}_applyGGXFilter(e,t,n){const i=this._renderer,s=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[n];o.material=a;const c=a.uniforms,l=n/(this._lodMeshes.length-1),f=t/(this._lodMeshes.length-1),d=Math.sqrt(l*l-f*f),h=l*1.25,u=d*h,{_lodMax:g}=this,_=this._sizeLods[n],m=3*_*(n>g-Ds?n-g+Ds:0),p=4*(this._cubeSize-_);c.envMap.value=e.texture,c.roughness.value=u,c.mipInt.value=g-t,Ts(s,m,p,3*_,2*_),i.setRenderTarget(s),i.render(o,ha),c.envMap.value=s.texture,c.roughness.value=0,c.mipInt.value=g-n,Ts(e,m,p,3*_,2*_),i.setRenderTarget(e),i.render(o,ha)}_blur(e,t,n,i){const s=this._pingPongRenderTarget,a=Math.min(i,Math.PI)/Math.SQRT2;this._blurPass(e,s,t,n,a),this._blurPass(s,e,n,n,a)}_blurPass(e,t,n,i,s){const a=this._renderer,o=this._blurMaterial,c=this._lodMeshes[i];c.material=o;const l=o.uniforms;l.envMap.value=e.texture,l.sigma.value=s,l.mipInt.value=this._lodMax-n;const f=this._sizeLods[i],d=3*f*(i>this._lodMax-Ds?i-this._lodMax+Ds:0),h=4*(this._cubeSize-f);Ts(t,d,h,3*f,2*f),a.setRenderTarget(t),a.render(c,ha)}}function QS(r){const e=[],t=[];let n=r;const i=r-Ds+1+$S;for(let s=0;s<i;s++){const a=Math.pow(2,n);e.push(a);const o=1/(a-2),c=-o,l=1+o,f=[c,c,l,c,l,l,c,c,l,l,c,l],d=6,h=6,u=3,g=new Float32Array(u*h*d),_=new Float32Array(u*h*d);for(let p=0;p<d;p++){const M=p%3*2/3-1,E=p>2?0:-1,S=[M,E,0,M+2/3,E,0,M+2/3,E+1,0,M,E,0,M+2/3,E+1,0,M,E+1,0];g.set(S,u*h*p);for(let y=0;y<h;y++){const w=f[y*2]*2-1,A=f[y*2+1]*2-1;p===0?Cr.set(1,A,w):p===1?Cr.set(-w,1,-A):p===2?Cr.set(-w,A,1):p===3?Cr.set(-1,A,-w):p===4?Cr.set(-w,-1,A):Cr.set(w,A,-1),Cr.toArray(_,(p*h+y)*u)}}const m=new tn;m.setAttribute("position",new Xn(g,u)),m.setAttribute("outputDirection",new Xn(_,u)),t.push(new bt(m,null)),n>Ds&&n--}return{lodMeshes:t,sizeLods:e}}function Id(r,e,t){const n=new gn(r,e,t);return n.texture.mapping=Rl,n.texture.name="PMREM.cubeUv",n.scissorTest=!0,n}function Ts(r,e,t,n,i){r.viewport.set(e,t,n,i),r.scissor.set(e,t,n,i)}function jS(r,e,t){return new en({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:ZS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Pl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 4.1: Orthonormal basis
				vec3 T1 = vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(V, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + V.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * V;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function ey(r,e,t){return new en({name:"SphericalGaussianBlur",defines:{SAMPLES:KS,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/t,CUBEUV_MAX_MIP:`${r}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:Pl(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float sigma;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359
			#define GOLDEN_ANGLE 2.39996322973

			void main() {

				if ( sigma == 0.0 ) {

					gl_FragColor = vec4( bilinearCubeUV( envMap, vOutputDirection, mipInt ), 1.0 );
					return;

				}

				vec3 outputDirection = normalize( vOutputDirection );

				vec3 up = abs( outputDirection.z ) < 0.999 ? vec3( 0.0, 0.0, 1.0 ) : vec3( 1.0, 0.0, 0.0 );
				vec3 tangent = normalize( cross( up, outputDirection ) );
				vec3 bitangent = cross( outputDirection, tangent );

				// Truncate the kernel at three standard deviations or at the antipode.
				float thetaMax = min( 3.0 * sigma, PI );
				float truncation = 1.0 - exp( - 0.5 * thetaMax * thetaMax / ( sigma * sigma ) );

				vec3 accumColor = vec3( 0.0 );
				float accumWeight = 0.0;

				for ( int i = 0; i < SAMPLES; i ++ ) {

					// Stratified inverse-CDF sampling of the Gaussian, placed on a golden-angle spiral.
					float stratum = ( float( i ) + 0.5 ) / float( SAMPLES );
					float theta = sigma * sqrt( - 2.0 * log( 1.0 - stratum * truncation ) );
					float phi = float( i ) * GOLDEN_ANGLE;

					vec3 offset = cos( phi ) * tangent + sin( phi ) * bitangent;
					vec3 sampleDirection = cos( theta ) * outputDirection + sin( theta ) * offset;

					// Correct the planar sample density to solid angle.
					float weight = sin( theta ) / theta;

					accumColor += weight * bilinearCubeUV( envMap, sampleDirection, mipInt );
					accumWeight += weight;

				}

				gl_FragColor = vec4( accumColor / accumWeight, 1.0 );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Ud(){return new en({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Nd(){return new en({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Pl(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:Ei,depthTest:!1,depthWrite:!1})}function Pl(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}class l_ extends gn{constructor(e=1,t={}){super(e,e,t),this.isWebGLCubeRenderTarget=!0;const n={width:e,height:e,depth:1},i=[n,n,n,n,n,n];this.texture=new Qm(i),this._setTextureOptions(t),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,t){this.texture.type=t.type,this.texture.colorSpace=t.colorSpace,this.texture.generateMipmaps=t.generateMipmaps,this.texture.minFilter=t.minFilter,this.texture.magFilter=t.magFilter;const n={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},i=new Nn(5,5,5),s=new en({name:"CubemapFromEquirect",uniforms:qs(n.uniforms),vertexShader:n.vertexShader,fragmentShader:n.fragmentShader,side:Pn,blending:Ei});s.uniforms.tEquirect.value=t;const a=new bt(i,s),o=t.minFilter;return t.minFilter===Or&&(t.minFilter=pn),new tv(1,10,this).update(e,a),t.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(e,t=!0,n=!0,i=!0){const s=e.getRenderTarget();for(let a=0;a<6;a++)e.setRenderTarget(this,a),e.clear(t,n,i);e.setRenderTarget(s)}}function ty(r){let e=new WeakMap,t=new WeakMap,n=null;function i(h,u=!1){return h==null?null:u?a(h):s(h)}function s(h){if(h&&h.isTexture){const u=h.mapping;if(u===Jl||u===Ql)if(e.has(h)){const g=e.get(h).texture;return o(g,h.mapping)}else{const g=h.image;if(g&&g.height>0){const _=new l_(g.height);return _.fromEquirectangularTexture(r,h),e.set(h,_),h.addEventListener("dispose",l),o(_.texture,h.mapping)}else return null}}return h}function a(h){if(h&&h.isTexture){const u=h.mapping,g=u===Jl||u===Ql,_=u===Jr||u===Ys;if(g||_){let m=t.get(h);const p=m!==void 0?m.texture.pmremVersion:0;if(h.isRenderTargetTexture&&h.pmremVersion!==p)return n===null&&(n=new Ld(r)),m=g?n.fromEquirectangular(h,m):n.fromCubemap(h,m),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),m.texture;if(m!==void 0)return m.texture;{const M=h.image;return g&&M&&M.height>0||_&&M&&c(M)?(n===null&&(n=new Ld(r)),m=g?n.fromEquirectangular(h):n.fromCubemap(h),m.texture.pmremVersion=h.pmremVersion,t.set(h,m),h.addEventListener("dispose",f),m.texture):null}}}return h}function o(h,u){return u===Jl?h.mapping=Jr:u===Ql&&(h.mapping=Ys),h}function c(h){let u=0;const g=6;for(let _=0;_<g;_++)h[_]!==void 0&&u++;return u===g}function l(h){const u=h.target;u.removeEventListener("dispose",l);const g=e.get(u);g!==void 0&&(e.delete(u),g.dispose())}function f(h){const u=h.target;u.removeEventListener("dispose",f);const g=t.get(u);g!==void 0&&(t.delete(u),g.dispose())}function d(){e=new WeakMap,t=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:d}}function ny(r){const e={};function t(n){if(e[n]!==void 0)return e[n];const i=r.getExtension(n);return e[n]=i,i}return{has:function(n){return t(n)!==null},init:function(){t("EXT_color_buffer_float"),t("WEBGL_clip_cull_distance"),t("OES_texture_float_linear"),t("EXT_color_buffer_half_float"),t("WEBGL_multisampled_render_to_texture"),t("WEBGL_render_shared_exponent")},get:function(n){const i=t(n);return i===null&&Bs("WebGLRenderer: "+n+" extension not supported."),i}}}function iy(r,e,t,n){const i={},s=new WeakMap;function a(d){const h=d.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",a),delete i[h.id];const u=s.get(h);u&&(e.remove(u),s.delete(h)),n.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,t.memory.geometries--}function o(d,h){return i[h.id]===!0||(h.addEventListener("dispose",a),i[h.id]=!0,t.memory.geometries++),h}function c(d){const h=d.attributes;for(const u in h)e.update(h[u],r.ARRAY_BUFFER)}function l(d){const h=[],u=d.index,g=d.attributes.position;let _=0;if(g===void 0)return;if(u!==null){const M=u.array;_=u.version;for(let E=0,S=M.length;E<S;E+=3){const y=M[E+0],w=M[E+1],A=M[E+2];h.push(y,w,w,A,A,y)}}else{const M=g.array;_=g.version;for(let E=0,S=M.length/3-1;E<S;E+=3){const y=E+0,w=E+1,A=E+2;h.push(y,w,w,A,A,y)}}const m=new(g.count>=65535?Km:$m)(h,1);m.version=_;const p=s.get(d);p&&e.remove(p),s.set(d,m)}function f(d){const h=s.get(d);if(h){const u=d.index;u!==null&&h.version<u.version&&l(d)}else l(d);return s.get(d)}return{get:o,update:c,getWireframeAttribute:f}}function ry(r,e,t){let n;function i(d){n=d}let s,a;function o(d){s=d.type,a=d.bytesPerElement}function c(d,h){r.drawElements(n,h,s,d*a),t.update(h,n,1)}function l(d,h,u){u!==0&&(r.drawElementsInstanced(n,h,s,d*a,u),t.update(h,n,u))}function f(d,h,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(n,h,0,s,d,0,u);let _=0;for(let m=0;m<u;m++)_+=h[m];t.update(_,n,1)}this.setMode=i,this.setIndex=o,this.render=c,this.renderInstances=l,this.renderMultiDraw=f}function sy(r){const e={geometries:0,textures:0},t={frame:0,calls:0,triangles:0,points:0,lines:0};function n(s,a,o){switch(t.calls++,a){case r.TRIANGLES:t.triangles+=o*(s/3);break;case r.LINES:t.lines+=o*(s/2);break;case r.LINE_STRIP:t.lines+=o*(s-1);break;case r.LINE_LOOP:t.lines+=o*s;break;case r.POINTS:t.points+=o*s;break;default:at("WebGLInfo: Unknown draw mode:",a);break}}function i(){t.calls=0,t.triangles=0,t.points=0,t.lines=0}return{memory:e,render:t,programs:null,autoReset:!0,reset:i,update:n}}function ay(r,e,t){const n=new WeakMap,i=new At;function s(a,o,c){const l=a.morphTargetInfluences,f=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=f!==void 0?f.length:0;let h=n.get(o);if(h===void 0||h.count!==d){let b=function(){A.dispose(),n.delete(o),o.removeEventListener("dispose",b)};h!==void 0&&h.texture.dispose();const u=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,_=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],M=o.morphAttributes.color||[];let E=0;u===!0&&(E=1),g===!0&&(E=2),_===!0&&(E=3);let S=o.attributes.position.count*E,y=1;S>e.maxTextureSize&&(y=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const w=new Float32Array(S*y*4*d),A=new Ym(w,S,y,d);A.type=fi,A.needsUpdate=!0;const x=E*4;for(let C=0;C<d;C++){const L=m[C],N=p[C],U=M[C],I=S*y*4*C;for(let G=0;G<L.count;G++){const W=G*x;u===!0&&(i.fromBufferAttribute(L,G),w[I+W+0]=i.x,w[I+W+1]=i.y,w[I+W+2]=i.z,w[I+W+3]=0),g===!0&&(i.fromBufferAttribute(N,G),w[I+W+4]=i.x,w[I+W+5]=i.y,w[I+W+6]=i.z,w[I+W+7]=0),_===!0&&(i.fromBufferAttribute(U,G),w[I+W+8]=i.x,w[I+W+9]=i.y,w[I+W+10]=i.z,w[I+W+11]=U.itemSize===4?i.w:1)}}h={count:d,texture:A,size:new He(S,y)},n.set(o,h),o.addEventListener("dispose",b)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)c.getUniforms().setValue(r,"morphTexture",a.morphTexture,t);else{let u=0;for(let _=0;_<l.length;_++)u+=l[_];const g=o.morphTargetsRelative?1:1-u;c.getUniforms().setValue(r,"morphTargetBaseInfluence",g),c.getUniforms().setValue(r,"morphTargetInfluences",l)}c.getUniforms().setValue(r,"morphTargetsTexture",h.texture,t),c.getUniforms().setValue(r,"morphTargetsTextureSize",h.size)}return{update:s}}function oy(r,e,t,n,i){let s=new WeakMap;function a(l){const f=i.render.frame,d=l.geometry,h=e.get(l,d);if(s.get(h)!==f&&(e.update(h),s.set(h,f)),l.isInstancedMesh&&(l.hasEventListener("dispose",c)===!1&&l.addEventListener("dispose",c),s.get(l)!==f&&(t.update(l.instanceMatrix,r.ARRAY_BUFFER),l.instanceColor!==null&&t.update(l.instanceColor,r.ARRAY_BUFFER),s.set(l,f))),l.isSkinnedMesh){const u=l.skeleton;s.get(u)!==f&&(u.update(),s.set(u,f))}return h}function o(){s=new WeakMap}function c(l){const f=l.target;f.removeEventListener("dispose",c),n.releaseStatesOfObject(f),t.remove(f.instanceMatrix),f.instanceColor!==null&&t.remove(f.instanceColor)}return{update:a,dispose:o}}const ly={[Df]:"LINEAR_TONE_MAPPING",[Lf]:"REINHARD_TONE_MAPPING",[If]:"CINEON_TONE_MAPPING",[Uf]:"ACES_FILMIC_TONE_MAPPING",[Ff]:"AGX_TONE_MAPPING",[Of]:"NEUTRAL_TONE_MAPPING",[Nf]:"CUSTOM_TONE_MAPPING"};function cy(r,e,t,n,i,s){const a=new gn(e,t,{type:r,depthBuffer:i,stencilBuffer:s,samples:n?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1});let o=null,c=null;const l=new tn;l.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),l.setAttribute("uv",new kt([0,2,0,0,2,0],2));const f=new n_({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),d=new bt(l,f),h=new Qf(-1,1,1,-1,0,1);let u=null,g=null,_=!1,m,p=null,M=[],E=!1;this.setSize=function(S,y){a.setSize(S,y),o!==null&&o.setSize(S,y),c!==null&&c.setSize(S,y);for(let w=0;w<M.length;w++){const A=M[w];A.setSize&&A.setSize(S,y)}},this.setEffects=function(S){M=S,E=M.length>0&&M[0].isRenderPass===!0;const y=a.width,w=a.height;M.length>0&&o===null&&(o=new gn(y,w,{type:yn,depthBuffer:!1,stencilBuffer:!1}),c=new gn(y,w,{type:yn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<M.length;A++){const x=M[A];x.setSize&&x.setSize(y,w)}},this.begin=function(S,y){if(_||S.toneMapping===wi&&M.length===0)return!1;if(p=y,y!==null){const w=y.width,A=y.height;(a.width!==w||a.height!==A)&&this.setSize(w,A)}return E===!1&&S.setRenderTarget(a),m=S.toneMapping,S.toneMapping=wi,!0},this.hasRenderPass=function(){return E},this.end=function(S,y){S.toneMapping=m,_=!0;let w=a,A=o;for(let x=0;x<M.length;x++){const b=M[x];b.enabled!==!1&&(b.render(S,A,w,y),b.needsSwap!==!1&&(w=A,A=A===o?c:o))}if(u!==S.outputColorSpace||g!==S.toneMapping){u=S.outputColorSpace,g=S.toneMapping,f.defines={},et.getTransfer(u)===pt&&(f.defines.SRGB_TRANSFER="");const x=ly[g];x&&(f.defines[x]=""),f.needsUpdate=!0}f.uniforms.tDiffuse.value=w.texture,S.setRenderTarget(p),S.render(d,h),p=null,_=!1},this.isCompositing=function(){return _},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),c!==null&&c.dispose(),l.dispose(),f.dispose()}}const c_=new _n,tf=new Qa(1,1),u_=new Ym,f_=new wx,h_=new Qm,Fd=[],Od=[],Bd=new Float32Array(16),kd=new Float32Array(9),zd=new Float32Array(4);function js(r,e,t){const n=r[0];if(n<=0||n>0)return r;const i=e*t;let s=Fd[i];if(s===void 0&&(s=new Float32Array(i),Fd[i]=s),e!==0){n.toArray(s,0);for(let a=1,o=0;a!==e;++a)o+=t,r[a].toArray(s,o)}return s}function Kt(r,e){if(r.length!==e.length)return!1;for(let t=0,n=r.length;t<n;t++)if(r[t]!==e[t])return!1;return!0}function Zt(r,e){for(let t=0,n=e.length;t<n;t++)r[t]=e[t]}function Dl(r,e){let t=Od[e];t===void 0&&(t=new Int32Array(e),Od[e]=t);for(let n=0;n!==e;++n)t[n]=r.allocateTextureUnit();return t}function uy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1f(this.addr,e),t[0]=e)}function fy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2f(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2fv(this.addr,e),Zt(t,e)}}function hy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3f(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else if(e.r!==void 0)(t[0]!==e.r||t[1]!==e.g||t[2]!==e.b)&&(r.uniform3f(this.addr,e.r,e.g,e.b),t[0]=e.r,t[1]=e.g,t[2]=e.b);else{if(Kt(t,e))return;r.uniform3fv(this.addr,e),Zt(t,e)}}function dy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4f(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4fv(this.addr,e),Zt(t,e)}}function py(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix2fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,n))return;zd.set(n),r.uniformMatrix2fv(this.addr,!1,zd),Zt(t,n)}}function my(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix3fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,n))return;kd.set(n),r.uniformMatrix3fv(this.addr,!1,kd),Zt(t,n)}}function _y(r,e){const t=this.cache,n=e.elements;if(n===void 0){if(Kt(t,e))return;r.uniformMatrix4fv(this.addr,!1,e),Zt(t,e)}else{if(Kt(t,n))return;Bd.set(n),r.uniformMatrix4fv(this.addr,!1,Bd),Zt(t,n)}}function gy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1i(this.addr,e),t[0]=e)}function xy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2i(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2iv(this.addr,e),Zt(t,e)}}function vy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3i(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3iv(this.addr,e),Zt(t,e)}}function My(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4i(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4iv(this.addr,e),Zt(t,e)}}function Sy(r,e){const t=this.cache;t[0]!==e&&(r.uniform1ui(this.addr,e),t[0]=e)}function yy(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y)&&(r.uniform2ui(this.addr,e.x,e.y),t[0]=e.x,t[1]=e.y);else{if(Kt(t,e))return;r.uniform2uiv(this.addr,e),Zt(t,e)}}function by(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z)&&(r.uniform3ui(this.addr,e.x,e.y,e.z),t[0]=e.x,t[1]=e.y,t[2]=e.z);else{if(Kt(t,e))return;r.uniform3uiv(this.addr,e),Zt(t,e)}}function Ty(r,e){const t=this.cache;if(e.x!==void 0)(t[0]!==e.x||t[1]!==e.y||t[2]!==e.z||t[3]!==e.w)&&(r.uniform4ui(this.addr,e.x,e.y,e.z,e.w),t[0]=e.x,t[1]=e.y,t[2]=e.z,t[3]=e.w);else{if(Kt(t,e))return;r.uniform4uiv(this.addr,e),Zt(t,e)}}function Ey(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i);let s;this.type===r.SAMPLER_2D_SHADOW?(tf.compareFunction=t.isReversedDepthBuffer()?Yf:Xf,s=tf):s=c_,t.setTexture2D(e||s,i)}function wy(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture3D(e||f_,i)}function Ay(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTextureCube(e||h_,i)}function Ry(r,e,t){const n=this.cache,i=t.allocateTextureUnit();n[0]!==i&&(r.uniform1i(this.addr,i),n[0]=i),t.setTexture2DArray(e||u_,i)}function Cy(r){switch(r){case 5126:return uy;case 35664:return fy;case 35665:return hy;case 35666:return dy;case 35674:return py;case 35675:return my;case 35676:return _y;case 5124:case 35670:return gy;case 35667:case 35671:return xy;case 35668:case 35672:return vy;case 35669:case 35673:return My;case 5125:return Sy;case 36294:return yy;case 36295:return by;case 36296:return Ty;case 35678:case 36198:case 36298:case 36306:case 35682:return Ey;case 35679:case 36299:case 36307:return wy;case 35680:case 36300:case 36308:case 36293:return Ay;case 36289:case 36303:case 36311:case 36292:return Ry}}function Py(r,e){r.uniform1fv(this.addr,e)}function Dy(r,e){const t=js(e,this.size,2);r.uniform2fv(this.addr,t)}function Ly(r,e){const t=js(e,this.size,3);r.uniform3fv(this.addr,t)}function Iy(r,e){const t=js(e,this.size,4);r.uniform4fv(this.addr,t)}function Uy(r,e){const t=js(e,this.size,4);r.uniformMatrix2fv(this.addr,!1,t)}function Ny(r,e){const t=js(e,this.size,9);r.uniformMatrix3fv(this.addr,!1,t)}function Fy(r,e){const t=js(e,this.size,16);r.uniformMatrix4fv(this.addr,!1,t)}function Oy(r,e){r.uniform1iv(this.addr,e)}function By(r,e){r.uniform2iv(this.addr,e)}function ky(r,e){r.uniform3iv(this.addr,e)}function zy(r,e){r.uniform4iv(this.addr,e)}function Vy(r,e){r.uniform1uiv(this.addr,e)}function Gy(r,e){r.uniform2uiv(this.addr,e)}function Hy(r,e){r.uniform3uiv(this.addr,e)}function Wy(r,e){r.uniform4uiv(this.addr,e)}function Xy(r,e,t){const n=this.cache,i=e.length,s=Dl(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Zt(n,s));let a;this.type===r.SAMPLER_2D_SHADOW?a=tf:a=c_;for(let o=0;o!==i;++o)t.setTexture2D(e[o]||a,s[o])}function Yy(r,e,t){const n=this.cache,i=e.length,s=Dl(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Zt(n,s));for(let a=0;a!==i;++a)t.setTexture3D(e[a]||f_,s[a])}function qy(r,e,t){const n=this.cache,i=e.length,s=Dl(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Zt(n,s));for(let a=0;a!==i;++a)t.setTextureCube(e[a]||h_,s[a])}function $y(r,e,t){const n=this.cache,i=e.length,s=Dl(t,i);Kt(n,s)||(r.uniform1iv(this.addr,s),Zt(n,s));for(let a=0;a!==i;++a)t.setTexture2DArray(e[a]||u_,s[a])}function Ky(r){switch(r){case 5126:return Py;case 35664:return Dy;case 35665:return Ly;case 35666:return Iy;case 35674:return Uy;case 35675:return Ny;case 35676:return Fy;case 5124:case 35670:return Oy;case 35667:case 35671:return By;case 35668:case 35672:return ky;case 35669:case 35673:return zy;case 5125:return Vy;case 36294:return Gy;case 36295:return Hy;case 36296:return Wy;case 35678:case 36198:case 36298:case 36306:case 35682:return Xy;case 35679:case 36299:case 36307:return Yy;case 35680:case 36300:case 36308:case 36293:return qy;case 36289:case 36303:case 36311:case 36292:return $y}}class Zy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.setValue=Cy(t.type)}}class Jy{constructor(e,t,n){this.id=e,this.addr=n,this.cache=[],this.type=t.type,this.size=t.size,this.setValue=Ky(t.type)}}class Qy{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,t,n){const i=this.seq;for(let s=0,a=i.length;s!==a;++s){const o=i[s];o.setValue(e,t[o.id],n)}}}const Cc=/(\w+)(\])?(\[|\.)?/g;function Vd(r,e){r.seq.push(e),r.map[e.id]=e}function jy(r,e,t){const n=r.name,i=n.length;for(Cc.lastIndex=0;;){const s=Cc.exec(n),a=Cc.lastIndex;let o=s[1];const c=s[2]==="]",l=s[3];if(c&&(o=o|0),l===void 0||l==="["&&a+2===i){Vd(t,l===void 0?new Zy(o,r,e):new Jy(o,r,e));break}else{let d=t.map[o];d===void 0&&(d=new Qy(o),Vd(t,d)),t=d}}}class Jo{constructor(e,t){this.seq=[],this.map={};const n=e.getProgramParameter(t,e.ACTIVE_UNIFORMS);for(let a=0;a<n;++a){const o=e.getActiveUniform(t,a),c=e.getUniformLocation(t,o.name);jy(o,c,this)}const i=[],s=[];for(const a of this.seq)a.type===e.SAMPLER_2D_SHADOW||a.type===e.SAMPLER_CUBE_SHADOW||a.type===e.SAMPLER_2D_ARRAY_SHADOW?i.push(a):s.push(a);i.length>0&&(this.seq=i.concat(s))}setValue(e,t,n,i){const s=this.map[t];s!==void 0&&s.setValue(e,n,i)}setOptional(e,t,n){const i=t[n];i!==void 0&&this.setValue(e,n,i)}static upload(e,t,n,i){for(let s=0,a=t.length;s!==a;++s){const o=t[s],c=n[o.id];c.needsUpdate!==!1&&o.setValue(e,c.value,i)}}static seqWithValue(e,t){const n=[];for(let i=0,s=e.length;i!==s;++i){const a=e[i];a.id in t&&n.push(a)}return n}}function Gd(r,e,t){const n=r.createShader(e);return r.shaderSource(n,t),r.compileShader(n),n}const eb=37297;let tb=0;function nb(r,e){const t=r.split(`
`),n=[],i=Math.max(e-6,0),s=Math.min(e+6,t.length);for(let a=i;a<s;a++){const o=a+1;n.push(`${o===e?">":" "} ${o}: ${t[a]}`)}return n.join(`
`)}const Hd=new qe;function ib(r){et._getMatrix(Hd,et.workingColorSpace,r);const e=`mat3( ${Hd.elements.map(t=>t.toFixed(4))} )`;switch(et.getTransfer(r)){case _l:return[e,"LinearTransferOETF"];case pt:return[e,"sRGBTransferOETF"];default:return We("WebGLProgram: Unsupported color space: ",r),[e,"LinearTransferOETF"]}}function Wd(r,e,t){const n=r.getShaderParameter(e,r.COMPILE_STATUS),s=(r.getShaderInfoLog(e)||"").trim();if(n&&s==="")return"";const a=/ERROR: 0:(\d+)/.exec(s);if(a){const o=parseInt(a[1]);return t.toUpperCase()+`

`+s+`

`+nb(r.getShaderSource(e),o)}else return s}function rb(r,e){const t=ib(e);return[`vec4 ${r}( vec4 value ) {`,`	return ${t[1]}( vec4( value.rgb * ${t[0]}, value.a ) );`,"}"].join(`
`)}const sb={[Df]:"Linear",[Lf]:"Reinhard",[If]:"Cineon",[Uf]:"ACESFilmic",[Ff]:"AgX",[Of]:"Neutral",[Nf]:"Custom"};function ab(r,e){const t=sb[e];return t===void 0?(We("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+r+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+r+"( vec3 color ) { return "+t+"ToneMapping( color ); }"}const Fo=new X;function ob(){et.getLuminanceCoefficients(Fo);const r=Fo.x.toFixed(4),e=Fo.y.toFixed(4),t=Fo.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${r}, ${e}, ${t} );`,"	return dot( weights, rgb );","}"].join(`
`)}function lb(r){return[r.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",r.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(Ea).join(`
`)}function cb(r){const e=[];for(const t in r){const n=r[t];n!==!1&&e.push("#define "+t+" "+n)}return e.join(`
`)}function ub(r,e){const t={},n=r.getProgramParameter(e,r.ACTIVE_ATTRIBUTES);for(let i=0;i<n;i++){const s=r.getActiveAttrib(e,i),a=s.name;let o=1;s.type===r.FLOAT_MAT2&&(o=2),s.type===r.FLOAT_MAT3&&(o=3),s.type===r.FLOAT_MAT4&&(o=4),t[a]={type:s.type,location:r.getAttribLocation(e,a),locationSize:o}}return t}function Ea(r){return r!==""}function Xd(r,e){const t=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return r.replace(/NUM_SUN_LIGHTS/g,e.numSunLights).replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,t).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,e.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function Yd(r,e){return r.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const fb=/^[ \t]*#include +<([\w\d./]+)>/gm;function nf(r){return r.replace(fb,db)}const hb=new Map;function db(r,e){let t=Ke[e];if(t===void 0){const n=hb.get(e);if(n!==void 0)t=Ke[n],We('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,n);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+e+">")}return nf(t)}const pb=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function qd(r){return r.replace(pb,mb)}function mb(r,e,t,n){let i="";for(let s=parseInt(e);s<parseInt(t);s++)i+=n.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return i}function $d(r){let e=`precision ${r.precision} float;
	precision ${r.precision} int;
	precision ${r.precision} sampler2D;
	precision ${r.precision} samplerCube;
	precision ${r.precision} sampler3D;
	precision ${r.precision} sampler2DArray;
	precision ${r.precision} sampler2DShadow;
	precision ${r.precision} samplerCubeShadow;
	precision ${r.precision} sampler2DArrayShadow;
	precision ${r.precision} isampler2D;
	precision ${r.precision} isampler3D;
	precision ${r.precision} isamplerCube;
	precision ${r.precision} isampler2DArray;
	precision ${r.precision} usampler2D;
	precision ${r.precision} usampler3D;
	precision ${r.precision} usamplerCube;
	precision ${r.precision} usampler2DArray;
	`;return r.precision==="highp"?e+=`
#define HIGH_PRECISION`:r.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:r.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const _b={[Yo]:"SHADOWMAP_TYPE_PCF",[ba]:"SHADOWMAP_TYPE_VSM"};function gb(r){return _b[r.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const xb={[Jr]:"ENVMAP_TYPE_CUBE",[Ys]:"ENVMAP_TYPE_CUBE",[Rl]:"ENVMAP_TYPE_CUBE_UV"};function vb(r){return r.envMap===!1?"ENVMAP_TYPE_CUBE":xb[r.envMapMode]||"ENVMAP_TYPE_CUBE"}const Mb={[Ys]:"ENVMAP_MODE_REFRACTION"};function Sb(r){return r.envMap===!1?"ENVMAP_MODE_REFLECTION":Mb[r.envMapMode]||"ENVMAP_MODE_REFLECTION"}const yb={[Om]:"ENVMAP_BLENDING_MULTIPLY",[ix]:"ENVMAP_BLENDING_MIX",[rx]:"ENVMAP_BLENDING_ADD"};function bb(r){return r.envMap===!1?"ENVMAP_BLENDING_NONE":yb[r.combine]||"ENVMAP_BLENDING_NONE"}function Tb(r){const e=r.envMapCubeUVHeight;if(e===null)return null;const t=Math.log2(e)-2,n=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,t),112)),texelHeight:n,maxMip:t}}function Eb(r,e,t,n){const i=r.getContext(),s=t.defines;let a=t.vertexShader,o=t.fragmentShader;const c=gb(t),l=vb(t),f=Sb(t),d=bb(t),h=Tb(t),u=lb(t),g=cb(s),_=i.createProgram();let m,p,M=t.glslVersion?"#version "+t.glslVersion+`
`:"";t.isRawShaderMaterial?(m=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ea).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g].filter(Ea).join(`
`),p.length>0&&(p+=`
`)):(m=[$d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",t.batching?"#define USE_BATCHING":"",t.batchingColor?"#define USE_BATCHING_COLOR":"",t.instancing?"#define USE_INSTANCING":"",t.instancingColor?"#define USE_INSTANCING_COLOR":"",t.instancingMorph?"#define USE_INSTANCING_MORPH":"",t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.map?"#define USE_MAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+f:"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.displacementMap?"#define USE_DISPLACEMENTMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.mapUv?"#define MAP_UV "+t.mapUv:"",t.alphaMapUv?"#define ALPHAMAP_UV "+t.alphaMapUv:"",t.lightMapUv?"#define LIGHTMAP_UV "+t.lightMapUv:"",t.aoMapUv?"#define AOMAP_UV "+t.aoMapUv:"",t.emissiveMapUv?"#define EMISSIVEMAP_UV "+t.emissiveMapUv:"",t.bumpMapUv?"#define BUMPMAP_UV "+t.bumpMapUv:"",t.normalMapUv?"#define NORMALMAP_UV "+t.normalMapUv:"",t.displacementMapUv?"#define DISPLACEMENTMAP_UV "+t.displacementMapUv:"",t.metalnessMapUv?"#define METALNESSMAP_UV "+t.metalnessMapUv:"",t.roughnessMapUv?"#define ROUGHNESSMAP_UV "+t.roughnessMapUv:"",t.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+t.anisotropyMapUv:"",t.clearcoatMapUv?"#define CLEARCOATMAP_UV "+t.clearcoatMapUv:"",t.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+t.clearcoatNormalMapUv:"",t.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+t.clearcoatRoughnessMapUv:"",t.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+t.iridescenceMapUv:"",t.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+t.iridescenceThicknessMapUv:"",t.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+t.sheenColorMapUv:"",t.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+t.sheenRoughnessMapUv:"",t.specularMapUv?"#define SPECULARMAP_UV "+t.specularMapUv:"",t.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+t.specularColorMapUv:"",t.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+t.specularIntensityMapUv:"",t.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+t.transmissionMapUv:"",t.thicknessMapUv?"#define THICKNESSMAP_UV "+t.thicknessMapUv:"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexNormals?"#define HAS_NORMAL":"",t.vertexColors?"#define USE_COLOR":"",t.vertexAlphas?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.flatShading?"#define FLAT_SHADED":"",t.skinning?"#define USE_SKINNING":"",t.morphTargets?"#define USE_MORPHTARGETS":"",t.morphNormals&&t.flatShading===!1?"#define USE_MORPHNORMALS":"",t.morphColors?"#define USE_MORPHCOLORS":"",t.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+t.morphTextureStride:"",t.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+t.morphTargetsCount:"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.sizeAttenuation?"#define USE_SIZEATTENUATION":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(Ea).join(`
`),p=[$d(t),"#define SHADER_TYPE "+t.shaderType,"#define SHADER_NAME "+t.shaderName,g,t.useFog&&t.fog?"#define USE_FOG":"",t.useFog&&t.fogExp2?"#define FOG_EXP2":"",t.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",t.map?"#define USE_MAP":"",t.matcap?"#define USE_MATCAP":"",t.envMap?"#define USE_ENVMAP":"",t.envMap?"#define "+l:"",t.envMap?"#define "+f:"",t.envMap?"#define "+d:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",t.lightMap?"#define USE_LIGHTMAP":"",t.aoMap?"#define USE_AOMAP":"",t.bumpMap?"#define USE_BUMPMAP":"",t.normalMap?"#define USE_NORMALMAP":"",t.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",t.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",t.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",t.emissiveMap?"#define USE_EMISSIVEMAP":"",t.anisotropy?"#define USE_ANISOTROPY":"",t.anisotropyMap?"#define USE_ANISOTROPYMAP":"",t.clearcoat?"#define USE_CLEARCOAT":"",t.clearcoatMap?"#define USE_CLEARCOATMAP":"",t.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",t.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",t.dispersion?"#define USE_DISPERSION":"",t.retroreflection?"#define USE_RETROREFLECTION":"",t.iridescence?"#define USE_IRIDESCENCE":"",t.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",t.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",t.specularMap?"#define USE_SPECULARMAP":"",t.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",t.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",t.roughnessMap?"#define USE_ROUGHNESSMAP":"",t.metalnessMap?"#define USE_METALNESSMAP":"",t.alphaMap?"#define USE_ALPHAMAP":"",t.alphaTest?"#define USE_ALPHATEST":"",t.alphaHash?"#define USE_ALPHAHASH":"",t.sheen?"#define USE_SHEEN":"",t.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",t.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",t.transmission?"#define USE_TRANSMISSION":"",t.transmissionMap?"#define USE_TRANSMISSIONMAP":"",t.thicknessMap?"#define USE_THICKNESSMAP":"",t.vertexTangents&&t.flatShading===!1?"#define USE_TANGENT":"",t.vertexColors||t.instancingColor?"#define USE_COLOR":"",t.vertexAlphas||t.batchingColor?"#define USE_COLOR_ALPHA":"",t.vertexUv1s?"#define USE_UV1":"",t.vertexUv2s?"#define USE_UV2":"",t.vertexUv3s?"#define USE_UV3":"",t.pointsUvs?"#define USE_POINTS_UV":"",t.gradientMap?"#define USE_GRADIENTMAP":"",t.flatShading?"#define FLAT_SHADED":"",t.doubleSided?"#define DOUBLE_SIDED":"",t.flipSided?"#define FLIP_SIDED":"",t.shadowMapEnabled?"#define USE_SHADOWMAP":"",t.shadowMapEnabled?"#define "+c:"",t.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",t.numLightProbes>0?"#define USE_LIGHT_PROBES":"",t.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",t.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",t.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",t.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",t.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",t.toneMapping!==wi?"#define TONE_MAPPING":"",t.toneMapping!==wi?Ke.tonemapping_pars_fragment:"",t.toneMapping!==wi?ab("toneMapping",t.toneMapping):"",t.dithering?"#define DITHERING":"",t.opaque?"#define OPAQUE":"",Ke.colorspace_pars_fragment,rb("linearToOutputTexel",t.outputColorSpace),ob(),t.useDepthPacking?"#define DEPTH_PACKING "+t.depthPacking:"",`
`].filter(Ea).join(`
`)),a=nf(a),a=Xd(a,t),a=Yd(a,t),o=nf(o),o=Xd(o,t),o=Yd(o,t),a=qd(a),o=qd(o),t.isRawShaderMaterial!==!0&&(M=`#version 300 es
`,m=[u,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",t.glslVersion===Jh?"":"layout(location = 0) out highp vec4 pc_fragColor;",t.glslVersion===Jh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);const E=M+m+a,S=M+p+o,y=Gd(i,i.VERTEX_SHADER,E),w=Gd(i,i.FRAGMENT_SHADER,S);i.attachShader(_,y),i.attachShader(_,w),t.index0AttributeName!==void 0?i.bindAttribLocation(_,0,t.index0AttributeName):t.hasPositionAttribute===!0&&i.bindAttribLocation(_,0,"position"),i.linkProgram(_);function A(L){if(r.debug.checkShaderErrors){const N=i.getProgramInfoLog(_)||"",U=i.getShaderInfoLog(y)||"",I=i.getShaderInfoLog(w)||"",G=N.trim(),W=U.trim(),Y=I.trim();let se=!0,Q=!0;if(i.getProgramParameter(_,i.LINK_STATUS)===!1)if(se=!1,typeof r.debug.onShaderError=="function")r.debug.onShaderError(i,_,y,w);else{const oe=Wd(i,y,"vertex"),ee=Wd(i,w,"fragment");at("WebGLProgram: Shader Error "+i.getError()+" - VALIDATE_STATUS "+i.getProgramParameter(_,i.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+G+`
`+oe+`
`+ee)}else G!==""?We("WebGLProgram: Program Info Log:",G):(W===""||Y==="")&&(Q=!1);Q&&(L.diagnostics={runnable:se,programLog:G,vertexShader:{log:W,prefix:m},fragmentShader:{log:Y,prefix:p}})}i.deleteShader(y),i.deleteShader(w),x=new Jo(i,_),b=ub(i,_)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let b;this.getAttributes=function(){return b===void 0&&A(this),b};let C=t.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=i.getProgramParameter(_,eb)),C},this.destroy=function(){n.releaseStatesOfProgram(this),i.deleteProgram(_),this.program=void 0},this.type=t.shaderType,this.name=t.shaderName,this.id=tb++,this.cacheKey=e,this.usedTimes=1,this.program=_,this.vertexShader=y,this.fragmentShader=w,this}let wb=0;class Ab{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e,t,n){const i=this._getShaderCacheForMaterial(e);return i.has(t)===!1&&(i.add(t),t.usedTimes++),i.has(n)===!1&&(i.add(n),n.usedTimes++),this}remove(e){const t=this.materialCache.get(e);for(const n of t)n.usedTimes--,n.usedTimes===0&&this.shaderCache.delete(n.code);return this.materialCache.delete(e),this}getVertexShaderStage(e){return this._getShaderStage(e.vertexShader)}getFragmentShaderStage(e){return this._getShaderStage(e.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const t=this.materialCache;let n=t.get(e);return n===void 0&&(n=new Set,t.set(e,n)),n}_getShaderStage(e){const t=this.shaderCache;let n=t.get(e);return n===void 0&&(n=new Rb(e),t.set(e,n)),n}}class Rb{constructor(e){this.id=wb++,this.code=e,this.usedTimes=0}}function Cb(r){return r===Qr||r===dl||r===pl}function Pb(r,e,t,n,i,s){const a=new $f,o=new Ab,c=new Set,l=[],f=new Map,d=n.logarithmicDepthBuffer;let h=n.precision;const u={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return c.add(x),x===0?"uv":`uv${x}`}function _(x,b,C,L,N,U){const I=L.fog,G=N.geometry,W=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?L.environment:null,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,se=e.get(x.envMap||W,Y),Q=se&&se.mapping===Rl?se.image.height:null,oe=u[x.type];x.precision!==null&&(h=n.getMaxPrecision(x.precision),h!==x.precision&&We("WebGLProgram.getParameters:",x.precision,"not supported, using",h,"instead."));const ee=G.morphAttributes.position||G.morphAttributes.normal||G.morphAttributes.color,_e=ee!==void 0?ee.length:0;let ge=0;G.morphAttributes.position!==void 0&&(ge=1),G.morphAttributes.normal!==void 0&&(ge=2),G.morphAttributes.color!==void 0&&(ge=3);let Ie,ke,Ge,j;if(oe){const he=Mi[oe];Ie=he.vertexShader,ke=he.fragmentShader}else{Ie=x.vertexShader,ke=x.fragmentShader;const he=o.getVertexShaderStage(x),pe=o.getFragmentShaderStage(x);o.update(x,he,pe),Ge=he.id,j=pe.id}const te=r.getRenderTarget(),me=r.state.buffers.depth.getReversed(),Oe=N.isInstancedMesh===!0,xe=N.isBatchedMesh===!0,Ve=!!x.map,mt=!!x.matcap,Ue=!!se,Me=!!x.aoMap,Qe=!!x.lightMap,Be=!!x.bumpMap&&x.wireframe===!1,Ye=!!x.normalMap,St=!!x.displacementMap,zt=!!x.emissiveMap,ut=!!x.metalnessMap,Ze=!!x.roughnessMap,z=x.anisotropy>0,Ct=x.clearcoat>0,rt=x.dispersion>0,R=x.retroreflectivity>0,v=x.iridescence>0,D=x.sheen>0,F=x.transmission>0,H=z&&!!x.anisotropyMap,ue=Ct&&!!x.clearcoatMap,fe=Ct&&!!x.clearcoatNormalMap,K=Ct&&!!x.clearcoatRoughnessMap,ie=v&&!!x.iridescenceMap,de=v&&!!x.iridescenceThicknessMap,Ee=D&&!!x.sheenColorMap,re=D&&!!x.sheenRoughnessMap,ce=!!x.specularMap,Se=!!x.specularColorMap,we=!!x.specularIntensityMap,Fe=F&&!!x.transmissionMap,B=F&&!!x.thicknessMap,ve=!!x.gradientMap,le=!!x.alphaMap,ne=x.alphaTest>0,P=!!x.alphaHash,O=!!x.extensions;let V=wi;x.toneMapped&&(te===null||te.isXRRenderTarget===!0)&&(V=r.toneMapping);const Z={shaderID:oe,shaderType:x.type,shaderName:x.name,vertexShader:Ie,fragmentShader:ke,defines:x.defines,customVertexShaderID:Ge,customFragmentShaderID:j,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:h,batching:xe,batchingColor:xe&&N._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&N.instanceColor!==null,instancingMorph:Oe&&N.morphTexture!==null,outputColorSpace:te===null?r.outputColorSpace:te.isXRRenderTarget===!0?te.texture.colorSpace:et.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:Ve,matcap:mt,envMap:Ue,envMapMode:Ue&&se.mapping,envMapCubeUVHeight:Q,aoMap:Me,lightMap:Qe,bumpMap:Be,normalMap:Ye,displacementMap:St,emissiveMap:zt,normalMapObjectSpace:Ye&&x.normalMapType===ox,normalMapTangentSpace:Ye&&x.normalMapType===Zu,packedNormalMap:Ye&&x.normalMapType===Zu&&Cb(x.normalMap.format),metalnessMap:ut,roughnessMap:Ze,anisotropy:z,anisotropyMap:H,clearcoat:Ct,clearcoatMap:ue,clearcoatNormalMap:fe,clearcoatRoughnessMap:K,dispersion:rt,retroreflection:R,iridescence:v,iridescenceMap:ie,iridescenceThicknessMap:de,sheen:D,sheenColorMap:Ee,sheenRoughnessMap:re,specularMap:ce,specularColorMap:Se,specularIntensityMap:we,transmission:F,transmissionMap:Fe,thicknessMap:B,gradientMap:ve,opaque:x.transparent===!1&&x.blending===Na&&x.alphaToCoverage===!1,alphaMap:le,alphaTest:ne,alphaHash:P,combine:x.combine,mapUv:Ve&&g(x.map.channel),aoMapUv:Me&&g(x.aoMap.channel),lightMapUv:Qe&&g(x.lightMap.channel),bumpMapUv:Be&&g(x.bumpMap.channel),normalMapUv:Ye&&g(x.normalMap.channel),displacementMapUv:St&&g(x.displacementMap.channel),emissiveMapUv:zt&&g(x.emissiveMap.channel),metalnessMapUv:ut&&g(x.metalnessMap.channel),roughnessMapUv:Ze&&g(x.roughnessMap.channel),anisotropyMapUv:H&&g(x.anisotropyMap.channel),clearcoatMapUv:ue&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:fe&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:K&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:ie&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:de&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Ee&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:re&&g(x.sheenRoughnessMap.channel),specularMapUv:ce&&g(x.specularMap.channel),specularColorMapUv:Se&&g(x.specularColorMap.channel),specularIntensityMapUv:we&&g(x.specularIntensityMap.channel),transmissionMapUv:Fe&&g(x.transmissionMap.channel),thicknessMapUv:B&&g(x.thicknessMap.channel),alphaMapUv:le&&g(x.alphaMap.channel),vertexTangents:!!G.attributes.tangent&&(Ye||z),vertexNormals:!!G.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!G.attributes.color&&G.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!G.attributes.uv&&(Ve||le),fog:!!I,useFog:x.fog===!0,fogExp2:!!I&&I.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||G.attributes.normal===void 0&&Ye===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:me,skinning:N.isSkinnedMesh===!0,hasPositionAttribute:G.attributes.position!==void 0,morphTargets:G.morphAttributes.position!==void 0,morphNormals:G.morphAttributes.normal!==void 0,morphColors:G.morphAttributes.color!==void 0,morphTargetsCount:_e,morphTextureStride:ge,numSunLights:b.sun.length,numDirLights:b.directional.length,numPointLights:b.point.length,numSpotLights:b.spot.length,numSpotLightMaps:b.spotLightMap.length,numRectAreaLights:b.rectArea.length,numHemiLights:b.hemi.length,numSunLightShadows:b.sunShadowMap.length,numDirLightShadows:b.directionalShadowMap.length,numPointLightShadows:b.pointShadowMap.length,numSpotLightShadows:b.spotShadowMap.length,numSpotLightShadowsWithMaps:b.numSpotLightShadowsWithMaps,numLightProbes:b.numLightProbes,numLightProbeGrids:U.length,numClippingPlanes:s.numPlanes,numClipIntersection:s.numIntersection,dithering:x.dithering,shadowMapEnabled:r.shadowMap.enabled&&C.length>0,shadowMapType:r.shadowMap.type,toneMapping:V,decodeVideoTexture:Ve&&x.map.isVideoTexture===!0&&et.getTransfer(x.map.colorSpace)===pt,decodeVideoTextureEmissive:zt&&x.emissiveMap.isVideoTexture===!0&&et.getTransfer(x.emissiveMap.colorSpace)===pt,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===yi,flipSided:x.side===Pn,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:O&&x.extensions.clipCullDistance===!0&&t.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(O&&x.extensions.multiDraw===!0||xe)&&t.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:t.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return Z.vertexUv1s=c.has(1),Z.vertexUv2s=c.has(2),Z.vertexUv3s=c.has(3),c.clear(),Z}function m(x){const b=[];if(x.shaderID?b.push(x.shaderID):(b.push(x.customVertexShaderID),b.push(x.customFragmentShaderID)),x.defines!==void 0)for(const C in x.defines)b.push(C),b.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(b,x),M(b,x),b.push(r.outputColorSpace)),b.push(x.customProgramCacheKey),b.join()}function p(x,b){x.push(b.precision),x.push(b.outputColorSpace),x.push(b.envMapMode),x.push(b.envMapCubeUVHeight),x.push(b.mapUv),x.push(b.alphaMapUv),x.push(b.lightMapUv),x.push(b.aoMapUv),x.push(b.bumpMapUv),x.push(b.normalMapUv),x.push(b.displacementMapUv),x.push(b.emissiveMapUv),x.push(b.metalnessMapUv),x.push(b.roughnessMapUv),x.push(b.anisotropyMapUv),x.push(b.clearcoatMapUv),x.push(b.clearcoatNormalMapUv),x.push(b.clearcoatRoughnessMapUv),x.push(b.iridescenceMapUv),x.push(b.iridescenceThicknessMapUv),x.push(b.sheenColorMapUv),x.push(b.sheenRoughnessMapUv),x.push(b.specularMapUv),x.push(b.specularColorMapUv),x.push(b.specularIntensityMapUv),x.push(b.transmissionMapUv),x.push(b.thicknessMapUv),x.push(b.combine),x.push(b.fogExp2),x.push(b.sizeAttenuation),x.push(b.morphTargetsCount),x.push(b.morphAttributeCount),x.push(b.numSunLights),x.push(b.numDirLights),x.push(b.numPointLights),x.push(b.numSpotLights),x.push(b.numSpotLightMaps),x.push(b.numHemiLights),x.push(b.numRectAreaLights),x.push(b.numSunLightShadows),x.push(b.numDirLightShadows),x.push(b.numPointLightShadows),x.push(b.numSpotLightShadows),x.push(b.numSpotLightShadowsWithMaps),x.push(b.numLightProbes),x.push(b.shadowMapType),x.push(b.toneMapping),x.push(b.numClippingPlanes),x.push(b.numClipIntersection),x.push(b.depthPacking)}function M(x,b){a.disableAll(),b.instancing&&a.enable(0),b.instancingColor&&a.enable(1),b.instancingMorph&&a.enable(2),b.matcap&&a.enable(3),b.envMap&&a.enable(4),b.normalMapObjectSpace&&a.enable(5),b.normalMapTangentSpace&&a.enable(6),b.clearcoat&&a.enable(7),b.iridescence&&a.enable(8),b.alphaTest&&a.enable(9),b.vertexColors&&a.enable(10),b.vertexAlphas&&a.enable(11),b.vertexUv1s&&a.enable(12),b.vertexUv2s&&a.enable(13),b.vertexUv3s&&a.enable(14),b.vertexTangents&&a.enable(15),b.anisotropy&&a.enable(16),b.alphaHash&&a.enable(17),b.batching&&a.enable(18),b.dispersion&&a.enable(19),b.retroreflection&&a.enable(24),b.batchingColor&&a.enable(20),b.gradientMap&&a.enable(21),b.packedNormalMap&&a.enable(22),b.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),b.fog&&a.enable(0),b.useFog&&a.enable(1),b.flatShading&&a.enable(2),b.logarithmicDepthBuffer&&a.enable(3),b.reversedDepthBuffer&&a.enable(4),b.skinning&&a.enable(5),b.morphTargets&&a.enable(6),b.morphNormals&&a.enable(7),b.morphColors&&a.enable(8),b.premultipliedAlpha&&a.enable(9),b.shadowMapEnabled&&a.enable(10),b.doubleSided&&a.enable(11),b.flipSided&&a.enable(12),b.useDepthPacking&&a.enable(13),b.dithering&&a.enable(14),b.transmission&&a.enable(15),b.sheen&&a.enable(16),b.opaque&&a.enable(17),b.pointsUvs&&a.enable(18),b.decodeVideoTexture&&a.enable(19),b.decodeVideoTextureEmissive&&a.enable(20),b.alphaToCoverage&&a.enable(21),b.numLightProbeGrids>0&&a.enable(22),b.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function E(x){const b=u[x.type];let C;if(b){const L=Mi[b];C=$s.clone(L.uniforms)}else C=x.uniforms;return C}function S(x,b){let C=f.get(b);return C!==void 0?++C.usedTimes:(C=new Eb(r,b,x,i),l.push(C),f.set(b,C)),C}function y(x){if(--x.usedTimes===0){const b=l.indexOf(x);l[b]=l[l.length-1],l.pop(),f.delete(x.cacheKey),x.destroy()}}function w(x){o.remove(x)}function A(){o.dispose()}return{getParameters:_,getProgramCacheKey:m,getUniforms:E,acquireProgram:S,releaseProgram:y,releaseShaderCache:w,programs:l,dispose:A}}function Db(){let r=new WeakMap;function e(a){return r.has(a)}function t(a){let o=r.get(a);return o===void 0&&(o={},r.set(a,o)),o}function n(a){r.delete(a)}function i(a,o,c){r.get(a)[o]=c}function s(){r=new WeakMap}return{has:e,get:t,remove:n,update:i,dispose:s}}function Lb(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.material.id!==e.material.id?r.material.id-e.material.id:r.materialVariant!==e.materialVariant?r.materialVariant-e.materialVariant:r.z!==e.z?r.z-e.z:r.id-e.id}function Kd(r,e){return r.groupOrder!==e.groupOrder?r.groupOrder-e.groupOrder:r.renderOrder!==e.renderOrder?r.renderOrder-e.renderOrder:r.z!==e.z?e.z-r.z:r.id-e.id}function Zd(){const r=[];let e=0;const t=[],n=[],i=[];function s(){e=0,t.length=0,n.length=0,i.length=0}function a(h){let u=0;return h.isInstancedMesh&&(u+=2),h.isSkinnedMesh&&(u+=1),u}function o(h,u,g,_,m,p){let M=r[e];return M===void 0?(M={id:h.id,object:h,geometry:u,material:g,materialVariant:a(h),groupOrder:_,renderOrder:h.renderOrder,z:m,group:p},r[e]=M):(M.id=h.id,M.object=h,M.geometry=u,M.material=g,M.materialVariant=a(h),M.groupOrder=_,M.renderOrder=h.renderOrder,M.z=m,M.group=p),e++,M}function c(h,u,g,_,m,p,M){M.reversedDepth===!0&&(m=-m);const E=o(h,u,g,_,m,p);g.transmission>0?n.push(E):g.transparent===!0?i.push(E):t.push(E)}function l(h,u,g,_,m,p){const M=o(h,u,g,_,m,p);g.transmission>0?n.unshift(M):g.transparent===!0?i.unshift(M):t.unshift(M)}function f(h,u){t.length>1&&t.sort(h||Lb),n.length>1&&n.sort(u||Kd),i.length>1&&i.sort(u||Kd)}function d(){for(let h=e,u=r.length;h<u;h++){const g=r[h];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:t,transmissive:n,transparent:i,init:s,push:c,unshift:l,finish:d,sort:f}}function Ib(){let r=new WeakMap;function e(n,i){const s=r.get(n);let a;return s===void 0?(a=new Zd,r.set(n,[a])):i>=s.length?(a=new Zd,s.push(a)):a=s[i],a}function t(){r=new WeakMap}return{get:e,dispose:t}}function Ub(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={direction:new X,color:new Xe};break;case"SpotLight":t={position:new X,direction:new X,color:new Xe,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":t={position:new X,color:new Xe,distance:0,decay:0};break;case"HemisphereLight":t={direction:new X,skyColor:new Xe,groundColor:new Xe};break;case"RectAreaLight":t={color:new Xe,position:new X,halfWidth:new X,halfHeight:new X};break}return r[e.id]=t,t}}}function Nb(){const r={};return{get:function(e){if(r[e.id]!==void 0)return r[e.id];let t;switch(e.type){case"SunLight":case"DirectionalLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"SpotLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He};break;case"PointLight":t={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new He,shadowCameraNear:1,shadowCameraFar:1e3};break}return r[e.id]=t,t}}}let Fb=0;function Ob(r,e){return(e.castShadow?2:0)-(r.castShadow?2:0)+(e.map?1:0)-(r.map?1:0)}function Bb(r){const e=new Ub,t=Nb(),n={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let l=0;l<9;l++)n.probe.push(new X);const i=new X,s=new ct,a=new ct;function o(l){let f=0,d=0,h=0;for(let N=0;N<9;N++)n.probe[N].set(0,0,0);let u=0,g=0,_=0,m=0,p=0,M=0,E=0,S=0,y=0,w=0,A=0,x=0,b=0,C=0;l.sort(Ob);for(let N=0,U=l.length;N<U;N++){const I=l[N],G=I.color,W=I.intensity,Y=I.distance;let se=null;if(I.shadow&&I.shadow.map&&(I.shadow.map.texture.format===Qr?se=I.shadow.map.texture:se=I.shadow.map.depthTexture||I.shadow.map.texture),I.isAmbientLight)f+=G.r*W,d+=G.g*W,h+=G.b*W;else if(I.isLightProbe){for(let Q=0;Q<9;Q++)n.probe[Q].addScaledVector(I.sh.coefficients[Q],W);C++}else if(I.isSunLight){const Q=e.get(I);if(Q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const oe=I.shadow,ee=t.get(I);ee.shadowIntensity=oe.intensity,ee.shadowBias=oe.bias,ee.shadowNormalBias=oe.normalBias,ee.shadowRadius=oe.radius,ee.shadowMapSize.copy(oe.mapSize).multiply(oe.getFrameExtents()),n.sunShadow[g]=ee,n.sunShadowMap[g]=se;const _e=oe.getViewportCount();for(let ge=0;ge<_e;ge++)n.sunShadowMatrix[_+ge]=oe.getMatrix(ge),n.sunShadowCascade[_+ge]=oe._cascadeData[ge];_+=_e,g++}n.sun[u]=Q,u++}else if(I.isDirectionalLight){const Q=e.get(I);if(Q.color.copy(I.color).multiplyScalar(I.intensity),I.castShadow){const oe=I.shadow,ee=t.get(I);ee.shadowIntensity=oe.intensity,ee.shadowBias=oe.bias,ee.shadowNormalBias=oe.normalBias,ee.shadowRadius=oe.radius,ee.shadowMapSize=oe.mapSize,n.directionalShadow[m]=ee,n.directionalShadowMap[m]=se,n.directionalShadowMatrix[m]=I.shadow.matrix,y++}n.directional[m]=Q,m++}else if(I.isSpotLight){const Q=e.get(I);Q.position.setFromMatrixPosition(I.matrixWorld),Q.color.copy(G).multiplyScalar(W),Q.distance=Y,Q.coneCos=Math.cos(I.angle),Q.penumbraCos=Math.cos(I.angle*(1-I.penumbra)),Q.decay=I.decay,n.spot[M]=Q;const oe=I.shadow;if(I.map&&(n.spotLightMap[x]=I.map,x++,oe.updateMatrices(I),I.castShadow&&b++),n.spotLightMatrix[M]=oe.matrix,I.castShadow){const ee=t.get(I);ee.shadowIntensity=oe.intensity,ee.shadowBias=oe.bias,ee.shadowNormalBias=oe.normalBias,ee.shadowRadius=oe.radius,ee.shadowMapSize=oe.mapSize,n.spotShadow[M]=ee,n.spotShadowMap[M]=se,A++}M++}else if(I.isRectAreaLight){const Q=e.get(I);Q.color.copy(G).multiplyScalar(W),Q.halfWidth.set(I.width*.5,0,0),Q.halfHeight.set(0,I.height*.5,0),n.rectArea[E]=Q,E++}else if(I.isPointLight){const Q=e.get(I);if(Q.color.copy(I.color).multiplyScalar(I.intensity),Q.distance=I.distance,Q.decay=I.decay,I.castShadow){const oe=I.shadow,ee=t.get(I);ee.shadowIntensity=oe.intensity,ee.shadowBias=oe.bias,ee.shadowNormalBias=oe.normalBias,ee.shadowRadius=oe.radius,ee.shadowMapSize=oe.mapSize,ee.shadowCameraNear=oe.camera.near,ee.shadowCameraFar=oe.camera.far,n.pointShadow[p]=ee,n.pointShadowMap[p]=se,n.pointShadowMatrix[p]=I.shadow.matrix,w++}n.point[p]=Q,p++}else if(I.isHemisphereLight){const Q=e.get(I);Q.skyColor.copy(I.color).multiplyScalar(W),Q.groundColor.copy(I.groundColor).multiplyScalar(W),n.hemi[S]=Q,S++}}E>0&&(r.has("OES_texture_float_linear")===!0?(n.rectAreaLTC1=ye.LTC_FLOAT_1,n.rectAreaLTC2=ye.LTC_FLOAT_2):(n.rectAreaLTC1=ye.LTC_HALF_1,n.rectAreaLTC2=ye.LTC_HALF_2)),n.ambient[0]=f,n.ambient[1]=d,n.ambient[2]=h;const L=n.hash;(L.sunLength!==u||L.directionalLength!==m||L.pointLength!==p||L.spotLength!==M||L.rectAreaLength!==E||L.hemiLength!==S||L.numSunShadows!==g||L.numDirectionalShadows!==y||L.numPointShadows!==w||L.numSpotShadows!==A||L.numSpotMaps!==x||L.numLightProbes!==C)&&(n.sun.length=u,n.directional.length=m,n.spot.length=M,n.rectArea.length=E,n.point.length=p,n.hemi.length=S,n.sunShadow.length=g,n.sunShadowMap.length=g,n.sunShadowMatrix.length=_,n.sunShadowCascade.length=_,n.directionalShadow.length=y,n.directionalShadowMap.length=y,n.directionalShadowMatrix.length=y,n.pointShadow.length=w,n.pointShadowMap.length=w,n.pointShadowMatrix.length=w,n.spotShadow.length=A,n.spotShadowMap.length=A,n.spotLightMatrix.length=A+x-b,n.spotLightMap.length=x,n.numSpotLightShadowsWithMaps=b,n.numLightProbes=C,L.sunLength=u,L.directionalLength=m,L.pointLength=p,L.spotLength=M,L.rectAreaLength=E,L.hemiLength=S,L.numSunShadows=g,L.numDirectionalShadows=y,L.numPointShadows=w,L.numSpotShadows=A,L.numSpotMaps=x,L.numLightProbes=C,n.version=Fb++)}function c(l,f){let d=0,h=0,u=0,g=0,_=0,m=0;const p=f.matrixWorldInverse;for(let M=0,E=l.length;M<E;M++){const S=l[M];if(S.isSunLight){const y=n.sun[d];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(p),d++}else if(S.isDirectionalLight){const y=n.directional[h];y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),h++}else if(S.isSpotLight){const y=n.spot[g];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),y.direction.setFromMatrixPosition(S.matrixWorld),i.setFromMatrixPosition(S.target.matrixWorld),y.direction.sub(i),y.direction.transformDirection(p),g++}else if(S.isRectAreaLight){const y=n.rectArea[_];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),a.identity(),s.copy(S.matrixWorld),s.premultiply(p),a.extractRotation(s),y.halfWidth.set(S.width*.5,0,0),y.halfHeight.set(0,S.height*.5,0),y.halfWidth.applyMatrix4(a),y.halfHeight.applyMatrix4(a),_++}else if(S.isPointLight){const y=n.point[u];y.position.setFromMatrixPosition(S.matrixWorld),y.position.applyMatrix4(p),u++}else if(S.isHemisphereLight){const y=n.hemi[m];y.direction.setFromMatrixPosition(S.matrixWorld),y.direction.transformDirection(p),m++}}}return{setup:o,setupView:c,state:n}}function Jd(r){const e=new Bb(r),t=[],n=[],i=[];function s(h){d.camera=h,t.length=0,n.length=0,i.length=0}function a(h){t.push(h)}function o(h){n.push(h)}function c(h){i.push(h)}function l(){e.setup(t)}function f(h){e.setupView(t,h)}const d={lightsArray:t,shadowsArray:n,lightProbeGridArray:i,camera:null,lights:e,transmissionRenderTarget:{},textureUnits:0};return{init:s,state:d,setupLights:l,setupLightsView:f,pushLight:a,pushShadow:o,pushLightProbeGrid:c}}function kb(r){let e=new WeakMap;function t(i,s=0){const a=e.get(i);let o;return a===void 0?(o=new Jd(r),e.set(i,[o])):s>=a.length?(o=new Jd(r),a.push(o)):o=a[s],o}function n(){e=new WeakMap}return{get:t,dispose:n}}const zb=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,Vb=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,Gb=[new X(1,0,0),new X(-1,0,0),new X(0,1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1)],Hb=[new X(0,-1,0),new X(0,-1,0),new X(0,0,1),new X(0,0,-1),new X(0,-1,0),new X(0,-1,0)],Qd=new ct,da=new X,Pc=new X;function Wb(r,e,t){let n=new Zf;const i=new He,s=new He,a=new At,o=new Zx,c=new Jx,l={},f=t.maxTextureSize,d={[Zr]:Pn,[Pn]:Zr,[yi]:yi},h=new en({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new He},radius:{value:4}},vertexShader:zb,fragmentShader:Vb}),u=h.clone();u.defines.HORIZONTAL_PASS=1;const g=new tn;g.setAttribute("position",new Xn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const _=new bt(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=Yo;let p=this.type;this.render=function(w,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||w.length===0)return;this.type===B0&&(We("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=Yo);const b=r.getRenderTarget(),C=r.getActiveCubeFace(),L=r.getActiveMipmapLevel(),N=r.state;N.setBlending(Ei),N.buffers.depth.getReversed()===!0?N.buffers.color.setClear(0,0,0,0):N.buffers.color.setClear(1,1,1,1),N.buffers.depth.setTest(!0),N.setScissorTest(!1);const U=p!==this.type;U&&A.traverse(function(I){I.material&&(Array.isArray(I.material)?I.material.forEach(G=>G.needsUpdate=!0):I.material.needsUpdate=!0)});for(let I=0,G=w.length;I<G;I++){const W=w[I],Y=W.shadow;if(Y===void 0){We("WebGLShadowMap:",W,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;i.copy(Y.mapSize);const se=Y.getFrameExtents();i.multiply(se),s.copy(Y.mapSize),(i.x>f||i.y>f)&&(i.x>f&&(s.x=Math.floor(f/se.x),i.x=s.x*se.x,Y.mapSize.x=s.x),i.y>f&&(s.y=Math.floor(f/se.y),i.y=s.y*se.y,Y.mapSize.y=s.y));const Q=r.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=Q,Y.map===null||U===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===ba){if(W.isPointLight){We("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new gn(i.x,i.y,{format:Qr,type:yn,minFilter:pn,magFilter:pn,generateMipmaps:!1}),Y.map.texture.name=W.name+".shadowMap",Y.map.depthTexture=new Qa(i.x,i.y,fi),Y.map.depthTexture.name=W.name+".shadowMapDepth",Y.map.depthTexture.format=$i,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=rn,Y.map.depthTexture.magFilter=rn}else W.isPointLight?(Y.map=new l_(i.x),Y.map.depthTexture=new Xx(i.x,Ci)):(Y.map=new gn(i.x,i.y),Y.map.depthTexture=new Qa(i.x,i.y,Ci)),Y.map.depthTexture.name=W.name+".shadowMap",Y.map.depthTexture.format=$i,this.type===Yo?(Y.map.depthTexture.compareFunction=Q?Yf:Xf,Y.map.depthTexture.minFilter=pn,Y.map.depthTexture.magFilter=pn):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=rn,Y.map.depthTexture.magFilter=rn);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==i.x||Y.map.height!==i.y)&&Y.map.setSize(i.x,i.y);const oe=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();W.isPointLight!==!0&&Y.updateMatrices(W,x);for(let ee=0;ee<oe;ee++){const _e=Y.getCamera(ee);if(W.isPointLight){const ge=Y.camera,Ie=Y.matrix,ke=W.distance||ge.far;ke!==ge.far&&(ge.far=ke,ge.updateProjectionMatrix()),da.setFromMatrixPosition(W.matrixWorld),ge.position.copy(da),Pc.copy(ge.position),Pc.add(Gb[ee]),ge.up.copy(Hb[ee]),ge.lookAt(Pc),ge.updateMatrixWorld(),Ie.makeTranslation(-da.x,-da.y,-da.z),Qd.multiplyMatrices(ge.projectionMatrix,ge.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(Qd,ge.coordinateSystem,ge.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)r.setRenderTarget(Y.map,ee),r.clear();else{ee===0&&(r.setRenderTarget(Y.map),r.clear());const ge=Y.getViewport(ee);a.set(s.x*ge.x,s.y*ge.y,s.x*ge.z,s.y*ge.w),N.viewport(a)}n=Y.getFrustum(ee),S(A,x,_e,W,this.type)}Y.isPointLightShadow!==!0&&this.type===ba&&M(Y,x),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,r.setRenderTarget(b,C,L)};function M(w,A){const x=e.update(_);h.defines.VSM_SAMPLES!==w.blurSamples&&(h.defines.VSM_SAMPLES=w.blurSamples,u.defines.VSM_SAMPLES=w.blurSamples,h.needsUpdate=!0,u.needsUpdate=!0),w.mapPass===null?w.mapPass=new gn(i.x,i.y,{format:Qr,type:yn}):(w.mapPass.width!==w.map.width||w.mapPass.height!==w.map.height)&&w.mapPass.setSize(w.map.width,w.map.height),h.uniforms.shadow_pass.value=w.map.depthTexture,h.uniforms.resolution.value.set(w.map.width,w.map.height),h.uniforms.radius.value=w.radius,r.setRenderTarget(w.mapPass),r.clear(),r.renderBufferDirect(A,null,x,h,_,null),u.uniforms.shadow_pass.value=w.mapPass.texture,u.uniforms.resolution.value.set(w.map.width,w.map.height),u.uniforms.radius.value=w.radius,r.setRenderTarget(w.map),r.clear(),r.renderBufferDirect(A,null,x,u,_,null)}function E(w,A,x,b){let C=null;const L=x.isPointLight===!0?w.customDistanceMaterial:w.customDepthMaterial;if(L!==void 0)C=L;else if(C=x.isPointLight===!0?c:o,r.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){const N=C.uuid,U=A.uuid;let I=l[N];I===void 0&&(I={},l[N]=I);let G=I[U];G===void 0&&(G=C.clone(),I[U]=G,A.addEventListener("dispose",y)),C=G}if(C.visible=A.visible,C.wireframe=A.wireframe,b===ba?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:d[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){const N=r.properties.get(C);N.light=x}return C}function S(w,A,x,b,C){if(w.visible===!1)return;if(w.layers.test(A.layers)&&(w.isMesh||w.isLine||w.isPoints)&&(w.castShadow||w.receiveShadow&&C===ba)&&(!w.frustumCulled||w.intersectsFrustum(n))){w.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,w.matrixWorld);const U=e.update(w),I=w.material;if(Array.isArray(I)){const G=U.groups;for(let W=0,Y=G.length;W<Y;W++){const se=G[W],Q=I[se.materialIndex];if(Q&&Q.visible){const oe=E(w,Q,b,C);w.onBeforeShadow(r,w,A,x,U,oe,se),r.renderBufferDirect(x,null,U,oe,w,se),w.onAfterShadow(r,w,A,x,U,oe,se)}}}else if(I.visible){const G=E(w,I,b,C);w.onBeforeShadow(r,w,A,x,U,G,null),r.renderBufferDirect(x,null,U,G,w,null),w.onAfterShadow(r,w,A,x,U,G,null)}}const N=w.children;for(let U=0,I=N.length;U<I;U++)S(N[U],A,x,b,C)}function y(w){w.target.removeEventListener("dispose",y);for(const x in l){const b=l[x],C=w.target.uuid;C in b&&(b[C].dispose(),delete b[C])}}}function Xb(r,e){function t(){let B=!1;const ve=new At;let le=null;const ne=new At(0,0,0,0);return{setMask:function(P){le!==P&&!B&&(r.colorMask(P,P,P,P),le=P)},setLocked:function(P){B=P},setClear:function(P,O,V,Z,he){he===!0&&(P*=Z,O*=Z,V*=Z),ve.set(P,O,V,Z),ne.equals(ve)===!1&&(r.clearColor(P,O,V,Z),ne.copy(ve))},reset:function(){B=!1,le=null,ne.set(-1,0,0,0)}}}function n(){let B=!1,ve=!1,le=null,ne=null,P=null;return{setReversed:function(O){if(ve!==O){const V=e.get("EXT_clip_control");O?V.clipControlEXT(V.LOWER_LEFT_EXT,V.ZERO_TO_ONE_EXT):V.clipControlEXT(V.LOWER_LEFT_EXT,V.NEGATIVE_ONE_TO_ONE_EXT),ve=O;const Z=P;P=null,this.setClear(Z)}},getReversed:function(){return ve},setTest:function(O){O?te(r.DEPTH_TEST):me(r.DEPTH_TEST)},setMask:function(O){le!==O&&!B&&(r.depthMask(O),le=O)},setFunc:function(O){if(ve&&(O=vx[O]),ne!==O){switch(O){case fu:r.depthFunc(r.NEVER);break;case hu:r.depthFunc(r.ALWAYS);break;case du:r.depthFunc(r.LESS);break;case $a:r.depthFunc(r.LEQUAL);break;case pu:r.depthFunc(r.EQUAL);break;case mu:r.depthFunc(r.GEQUAL);break;case _u:r.depthFunc(r.GREATER);break;case gu:r.depthFunc(r.NOTEQUAL);break;default:r.depthFunc(r.LEQUAL)}ne=O}},setLocked:function(O){B=O},setClear:function(O){P!==O&&(P=O,ve&&(O=1-O),r.clearDepth(O))},reset:function(){B=!1,le=null,ne=null,P=null,ve=!1}}}function i(){let B=!1,ve=null,le=null,ne=null,P=null,O=null,V=null,Z=null,he=null;return{setTest:function(pe){B||(pe?te(r.STENCIL_TEST):me(r.STENCIL_TEST))},setMask:function(pe){ve!==pe&&!B&&(r.stencilMask(pe),ve=pe)},setFunc:function(pe,ze,Re){(le!==pe||ne!==ze||P!==Re)&&(r.stencilFunc(pe,ze,Re),le=pe,ne=ze,P=Re)},setOp:function(pe,ze,Re){(O!==pe||V!==ze||Z!==Re)&&(r.stencilOp(pe,ze,Re),O=pe,V=ze,Z=Re)},setLocked:function(pe){B=pe},setClear:function(pe){he!==pe&&(r.clearStencil(pe),he=pe)},reset:function(){B=!1,ve=null,le=null,ne=null,P=null,O=null,V=null,Z=null,he=null}}}const s=new t,a=new n,o=new i,c=new WeakMap,l=new WeakMap;let f={},d={},h={},u=new WeakMap,g=[],_=null,m=!1,p=null,M=null,E=null,S=null,y=null,w=null,A=null,x=new Xe(0,0,0),b=0,C=!1,L=null,N=null,U=null,I=null,G=null;const W=r.getParameter(r.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let Y=!1,se=0;const Q=r.getParameter(r.VERSION);Q.indexOf("WebGL")!==-1?(se=parseFloat(/^WebGL (\d)/.exec(Q)[1]),Y=se>=1):Q.indexOf("OpenGL ES")!==-1&&(se=parseFloat(/^OpenGL ES (\d)/.exec(Q)[1]),Y=se>=2);let oe=null,ee={};const _e=r.getParameter(r.SCISSOR_BOX),ge=r.getParameter(r.VIEWPORT),Ie=new At().fromArray(_e),ke=new At().fromArray(ge);function Ge(B,ve,le,ne){const P=new Uint8Array(4),O=r.createTexture();r.bindTexture(B,O),r.texParameteri(B,r.TEXTURE_MIN_FILTER,r.NEAREST),r.texParameteri(B,r.TEXTURE_MAG_FILTER,r.NEAREST);for(let V=0;V<le;V++)B===r.TEXTURE_3D||B===r.TEXTURE_2D_ARRAY?r.texImage3D(ve,0,r.RGBA,1,1,ne,0,r.RGBA,r.UNSIGNED_BYTE,P):r.texImage2D(ve+V,0,r.RGBA,1,1,0,r.RGBA,r.UNSIGNED_BYTE,P);return O}const j={};j[r.TEXTURE_2D]=Ge(r.TEXTURE_2D,r.TEXTURE_2D,1),j[r.TEXTURE_CUBE_MAP]=Ge(r.TEXTURE_CUBE_MAP,r.TEXTURE_CUBE_MAP_POSITIVE_X,6),j[r.TEXTURE_2D_ARRAY]=Ge(r.TEXTURE_2D_ARRAY,r.TEXTURE_2D_ARRAY,1,1),j[r.TEXTURE_3D]=Ge(r.TEXTURE_3D,r.TEXTURE_3D,1,1),s.setClear(0,0,0,1),a.setClear(1),o.setClear(0),te(r.DEPTH_TEST),a.setFunc($a),Be(!1),Ye($h),te(r.CULL_FACE),Me(Ei);function te(B){f[B]!==!0&&(r.enable(B),f[B]=!0)}function me(B){f[B]!==!1&&(r.disable(B),f[B]=!1)}function Oe(B,ve){return h[B]!==ve?(r.bindFramebuffer(B,ve),h[B]=ve,B===r.DRAW_FRAMEBUFFER&&(h[r.FRAMEBUFFER]=ve),B===r.FRAMEBUFFER&&(h[r.DRAW_FRAMEBUFFER]=ve),!0):!1}function xe(B,ve){let le=g,ne=!1;if(B){le=u.get(ve),le===void 0&&(le=[],u.set(ve,le));const P=B.textures;if(le.length!==P.length||le[0]!==r.COLOR_ATTACHMENT0){for(let O=0,V=P.length;O<V;O++)le[O]=r.COLOR_ATTACHMENT0+O;le.length=P.length,ne=!0}}else le[0]!==r.BACK&&(le[0]=r.BACK,ne=!0);ne&&r.drawBuffers(le)}function Ve(B){return _!==B?(r.useProgram(B),_=B,!0):!1}const mt={[Rs]:r.FUNC_ADD,[z0]:r.FUNC_SUBTRACT,[V0]:r.FUNC_REVERSE_SUBTRACT};mt[G0]=r.MIN,mt[H0]=r.MAX;const Ue={[W0]:r.ZERO,[X0]:r.ONE,[Y0]:r.SRC_COLOR,[Nm]:r.SRC_ALPHA,[Q0]:r.SRC_ALPHA_SATURATE,[Z0]:r.DST_COLOR,[$0]:r.DST_ALPHA,[q0]:r.ONE_MINUS_SRC_COLOR,[Fm]:r.ONE_MINUS_SRC_ALPHA,[J0]:r.ONE_MINUS_DST_COLOR,[K0]:r.ONE_MINUS_DST_ALPHA,[j0]:r.CONSTANT_COLOR,[ex]:r.ONE_MINUS_CONSTANT_COLOR,[tx]:r.CONSTANT_ALPHA,[nx]:r.ONE_MINUS_CONSTANT_ALPHA};function Me(B,ve,le,ne,P,O,V,Z,he,pe){if(B===Ei){m===!0&&(me(r.BLEND),m=!1);return}if(m===!1&&(te(r.BLEND),m=!0),B!==k0){if(B!==p||pe!==C){if((M!==Rs||y!==Rs)&&(r.blendEquation(r.FUNC_ADD),M=Rs,y=Rs),pe)switch(B){case Na:r.blendFuncSeparate(r.ONE,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fr:r.blendFunc(r.ONE,r.ONE);break;case Kh:r.blendFuncSeparate(r.ZERO,r.ONE_MINUS_SRC_COLOR,r.ZERO,r.ONE);break;case Zh:r.blendFuncSeparate(r.DST_COLOR,r.ONE_MINUS_SRC_ALPHA,r.ZERO,r.ONE);break;default:at("WebGLState: Invalid blending: ",B);break}else switch(B){case Na:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE_MINUS_SRC_ALPHA,r.ONE,r.ONE_MINUS_SRC_ALPHA);break;case Fr:r.blendFuncSeparate(r.SRC_ALPHA,r.ONE,r.ONE,r.ONE);break;case Kh:at("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Zh:at("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:at("WebGLState: Invalid blending: ",B);break}E=null,S=null,w=null,A=null,x.set(0,0,0),b=0,p=B,C=pe}return}P=P||ve,O=O||le,V=V||ne,(ve!==M||P!==y)&&(r.blendEquationSeparate(mt[ve],mt[P]),M=ve,y=P),(le!==E||ne!==S||O!==w||V!==A)&&(r.blendFuncSeparate(Ue[le],Ue[ne],Ue[O],Ue[V]),E=le,S=ne,w=O,A=V),(Z.equals(x)===!1||he!==b)&&(r.blendColor(Z.r,Z.g,Z.b,he),x.copy(Z),b=he),p=B,C=!1}function Qe(B,ve){B.side===yi?me(r.CULL_FACE):te(r.CULL_FACE);let le=B.side===Pn;ve&&(le=!le),Be(le),B.blending===Na&&B.transparent===!1?Me(Ei):Me(B.blending,B.blendEquation,B.blendSrc,B.blendDst,B.blendEquationAlpha,B.blendSrcAlpha,B.blendDstAlpha,B.blendColor,B.blendAlpha,B.premultipliedAlpha),a.setFunc(B.depthFunc),a.setTest(B.depthTest),a.setMask(B.depthWrite),s.setMask(B.colorWrite);const ne=B.stencilWrite;o.setTest(ne),ne&&(o.setMask(B.stencilWriteMask),o.setFunc(B.stencilFunc,B.stencilRef,B.stencilFuncMask),o.setOp(B.stencilFail,B.stencilZFail,B.stencilZPass)),zt(B.polygonOffset,B.polygonOffsetFactor,B.polygonOffsetUnits),B.alphaToCoverage===!0?te(r.SAMPLE_ALPHA_TO_COVERAGE):me(r.SAMPLE_ALPHA_TO_COVERAGE)}function Be(B){L!==B&&(B?r.frontFace(r.CW):r.frontFace(r.CCW),L=B)}function Ye(B){B!==F0?(te(r.CULL_FACE),B!==N&&(B===$h?r.cullFace(r.BACK):B===O0?r.cullFace(r.FRONT):r.cullFace(r.FRONT_AND_BACK))):me(r.CULL_FACE),N=B}function St(B){B!==U&&(Y&&r.lineWidth(B),U=B)}function zt(B,ve,le){B?(te(r.POLYGON_OFFSET_FILL),(I!==ve||G!==le)&&(I=ve,G=le,a.getReversed()&&(ve=-ve),r.polygonOffset(ve,le))):me(r.POLYGON_OFFSET_FILL)}function ut(B){B?te(r.SCISSOR_TEST):me(r.SCISSOR_TEST)}function Ze(B){B===void 0&&(B=r.TEXTURE0+W-1),oe!==B&&(r.activeTexture(B),oe=B)}function z(B,ve,le){le===void 0&&(oe===null?le=r.TEXTURE0+W-1:le=oe);let ne=ee[le];ne===void 0&&(ne={type:void 0,texture:void 0},ee[le]=ne),(ne.type!==B||ne.texture!==ve)&&(oe!==le&&(r.activeTexture(le),oe=le),r.bindTexture(B,ve||j[B]),ne.type=B,ne.texture=ve)}function Ct(){const B=ee[oe];B!==void 0&&B.type!==void 0&&(r.bindTexture(B.type,null),B.type=void 0,B.texture=void 0)}function rt(){try{r.compressedTexImage2D(...arguments)}catch(B){at("WebGLState:",B)}}function R(){try{r.compressedTexImage3D(...arguments)}catch(B){at("WebGLState:",B)}}function v(){try{r.texSubImage2D(...arguments)}catch(B){at("WebGLState:",B)}}function D(){try{r.texSubImage3D(...arguments)}catch(B){at("WebGLState:",B)}}function F(){try{r.compressedTexSubImage2D(...arguments)}catch(B){at("WebGLState:",B)}}function H(){try{r.compressedTexSubImage3D(...arguments)}catch(B){at("WebGLState:",B)}}function ue(){try{r.texStorage2D(...arguments)}catch(B){at("WebGLState:",B)}}function fe(){try{r.texStorage3D(...arguments)}catch(B){at("WebGLState:",B)}}function K(){try{r.texImage2D(...arguments)}catch(B){at("WebGLState:",B)}}function ie(){try{r.texImage3D(...arguments)}catch(B){at("WebGLState:",B)}}function de(B){return d[B]!==void 0?d[B]:r.getParameter(B)}function Ee(B,ve){d[B]!==ve&&(r.pixelStorei(B,ve),d[B]=ve)}function re(B){Ie.equals(B)===!1&&(r.scissor(B.x,B.y,B.z,B.w),Ie.copy(B))}function ce(B){ke.equals(B)===!1&&(r.viewport(B.x,B.y,B.z,B.w),ke.copy(B))}function Se(B,ve){let le=l.get(ve);le===void 0&&(le=new WeakMap,l.set(ve,le));let ne=le.get(B);ne===void 0&&(ne=r.getUniformBlockIndex(ve,B.name),le.set(B,ne))}function we(B,ve){const ne=l.get(ve).get(B);c.get(ve)!==ne&&(r.uniformBlockBinding(ve,ne,B.__bindingPointIndex),c.set(ve,ne))}function Fe(){r.disable(r.BLEND),r.disable(r.CULL_FACE),r.disable(r.DEPTH_TEST),r.disable(r.POLYGON_OFFSET_FILL),r.disable(r.SCISSOR_TEST),r.disable(r.STENCIL_TEST),r.disable(r.SAMPLE_ALPHA_TO_COVERAGE),r.blendEquation(r.FUNC_ADD),r.blendFunc(r.ONE,r.ZERO),r.blendFuncSeparate(r.ONE,r.ZERO,r.ONE,r.ZERO),r.blendColor(0,0,0,0),r.colorMask(!0,!0,!0,!0),r.clearColor(0,0,0,0),r.depthMask(!0),r.depthFunc(r.LESS),a.setReversed(!1),r.clearDepth(1),r.stencilMask(4294967295),r.stencilFunc(r.ALWAYS,0,4294967295),r.stencilOp(r.KEEP,r.KEEP,r.KEEP),r.clearStencil(0),r.cullFace(r.BACK),r.frontFace(r.CCW),r.polygonOffset(0,0),r.activeTexture(r.TEXTURE0),r.bindFramebuffer(r.FRAMEBUFFER,null),r.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),r.bindFramebuffer(r.READ_FRAMEBUFFER,null),r.useProgram(null),r.lineWidth(1),r.scissor(0,0,r.canvas.width,r.canvas.height),r.viewport(0,0,r.canvas.width,r.canvas.height),r.pixelStorei(r.PACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_ALIGNMENT,4),r.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,!1),r.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),r.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,r.BROWSER_DEFAULT_WEBGL),r.pixelStorei(r.PACK_ROW_LENGTH,0),r.pixelStorei(r.PACK_SKIP_PIXELS,0),r.pixelStorei(r.PACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_ROW_LENGTH,0),r.pixelStorei(r.UNPACK_IMAGE_HEIGHT,0),r.pixelStorei(r.UNPACK_SKIP_PIXELS,0),r.pixelStorei(r.UNPACK_SKIP_ROWS,0),r.pixelStorei(r.UNPACK_SKIP_IMAGES,0),f={},d={},oe=null,ee={},h={},u=new WeakMap,g=[],_=null,m=!1,p=null,M=null,E=null,S=null,y=null,w=null,A=null,x=new Xe(0,0,0),b=0,C=!1,L=null,N=null,U=null,I=null,G=null,Ie.set(0,0,r.canvas.width,r.canvas.height),ke.set(0,0,r.canvas.width,r.canvas.height),s.reset(),a.reset(),o.reset()}return{buffers:{color:s,depth:a,stencil:o},enable:te,disable:me,bindFramebuffer:Oe,drawBuffers:xe,useProgram:Ve,setBlending:Me,setMaterial:Qe,setFlipSided:Be,setCullFace:Ye,setLineWidth:St,setPolygonOffset:zt,setScissorTest:ut,activeTexture:Ze,bindTexture:z,unbindTexture:Ct,compressedTexImage2D:rt,compressedTexImage3D:R,texImage2D:K,texImage3D:ie,pixelStorei:Ee,getParameter:de,updateUBOMapping:Se,uniformBlockBinding:we,texStorage2D:ue,texStorage3D:fe,texSubImage2D:v,texSubImage3D:D,compressedTexSubImage2D:F,compressedTexSubImage3D:H,scissor:re,viewport:ce,reset:Fe}}function Yb(r,e,t,n,i,s,a){const o=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,c=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),l=new He,f=new WeakMap,d=new Set;let h;const u=new WeakMap;let g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function _(R,v){return g?new OffscreenCanvas(R,v):gl("canvas")}function m(R,v,D){let F=1;const H=rt(R);if((H.width>D||H.height>D)&&(F=D/Math.max(H.width,H.height)),F<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){const ue=Math.floor(F*H.width),fe=Math.floor(F*H.height);h===void 0&&(h=_(ue,fe));const K=v?_(ue,fe):h;return K.width=ue,K.height=fe,K.getContext("2d").drawImage(R,0,0,ue,fe),We("WebGLRenderer: Texture has been resized from ("+H.width+"x"+H.height+") to ("+ue+"x"+fe+")."),K}else return"data"in R&&We("WebGLRenderer: Image in DataTexture is too big ("+H.width+"x"+H.height+")."),R;return R}function p(R){return R.generateMipmaps}function M(R){r.generateMipmap(R)}function E(R){return R.isWebGLCubeRenderTarget?r.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?r.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?r.TEXTURE_2D_ARRAY:r.TEXTURE_2D}function S(R,v,D,F,H,ue=!1){if(R!==null){if(r[R]!==void 0)return r[R];We("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let fe;F&&(fe=e.get("EXT_texture_norm16"),fe||We("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let K=v;if(v===r.RED&&(D===r.FLOAT&&(K=r.R32F),D===r.HALF_FLOAT&&(K=r.R16F),D===r.UNSIGNED_BYTE&&(K=r.R8),D===r.UNSIGNED_SHORT&&fe&&(K=fe.R16_EXT),D===r.SHORT&&fe&&(K=fe.R16_SNORM_EXT)),v===r.RED_INTEGER&&(D===r.UNSIGNED_BYTE&&(K=r.R8UI),D===r.UNSIGNED_SHORT&&(K=r.R16UI),D===r.UNSIGNED_INT&&(K=r.R32UI),D===r.BYTE&&(K=r.R8I),D===r.SHORT&&(K=r.R16I),D===r.INT&&(K=r.R32I)),v===r.RG&&(D===r.FLOAT&&(K=r.RG32F),D===r.HALF_FLOAT&&(K=r.RG16F),D===r.UNSIGNED_BYTE&&(K=r.RG8),D===r.UNSIGNED_SHORT&&fe&&(K=fe.RG16_EXT),D===r.SHORT&&fe&&(K=fe.RG16_SNORM_EXT)),v===r.RG_INTEGER&&(D===r.UNSIGNED_BYTE&&(K=r.RG8UI),D===r.UNSIGNED_SHORT&&(K=r.RG16UI),D===r.UNSIGNED_INT&&(K=r.RG32UI),D===r.BYTE&&(K=r.RG8I),D===r.SHORT&&(K=r.RG16I),D===r.INT&&(K=r.RG32I)),v===r.RGB_INTEGER&&(D===r.UNSIGNED_BYTE&&(K=r.RGB8UI),D===r.UNSIGNED_SHORT&&(K=r.RGB16UI),D===r.UNSIGNED_INT&&(K=r.RGB32UI),D===r.BYTE&&(K=r.RGB8I),D===r.SHORT&&(K=r.RGB16I),D===r.INT&&(K=r.RGB32I)),v===r.RGBA_INTEGER&&(D===r.UNSIGNED_BYTE&&(K=r.RGBA8UI),D===r.UNSIGNED_SHORT&&(K=r.RGBA16UI),D===r.UNSIGNED_INT&&(K=r.RGBA32UI),D===r.BYTE&&(K=r.RGBA8I),D===r.SHORT&&(K=r.RGBA16I),D===r.INT&&(K=r.RGBA32I)),v===r.RGB&&(D===r.UNSIGNED_SHORT&&fe&&(K=fe.RGB16_EXT),D===r.SHORT&&fe&&(K=fe.RGB16_SNORM_EXT),D===r.UNSIGNED_INT_5_9_9_9_REV&&(K=r.RGB9_E5),D===r.UNSIGNED_INT_10F_11F_11F_REV&&(K=r.R11F_G11F_B10F)),v===r.RGBA){const ie=ue?_l:et.getTransfer(H);D===r.FLOAT&&(K=r.RGBA32F),D===r.HALF_FLOAT&&(K=r.RGBA16F),D===r.UNSIGNED_BYTE&&(K=ie===pt?r.SRGB8_ALPHA8:r.RGBA8),D===r.UNSIGNED_SHORT&&fe&&(K=fe.RGBA16_EXT),D===r.SHORT&&fe&&(K=fe.RGBA16_SNORM_EXT),D===r.UNSIGNED_SHORT_4_4_4_4&&(K=r.RGBA4),D===r.UNSIGNED_SHORT_5_5_5_1&&(K=r.RGB5_A1)}return(K===r.R16F||K===r.R32F||K===r.RG16F||K===r.RG32F||K===r.RGBA16F||K===r.RGBA32F)&&e.get("EXT_color_buffer_float"),K}function y(R,v){let D;return R?v===null||v===Ci||v===Za?D=r.DEPTH24_STENCIL8:v===fi?D=r.DEPTH32F_STENCIL8:v===Ka&&(D=r.DEPTH24_STENCIL8,We("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):v===null||v===Ci||v===Za?D=r.DEPTH_COMPONENT24:v===fi?D=r.DEPTH_COMPONENT32F:v===Ka&&(D=r.DEPTH_COMPONENT16),D}function w(R,v){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==rn&&R.minFilter!==pn?Math.log2(Math.max(v.width,v.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?v.mipmaps.length:1}function A(R){const v=R.target;v.removeEventListener("dispose",A),b(v),v.isVideoTexture&&f.delete(v),v.isHTMLTexture&&d.delete(v)}function x(R){const v=R.target;v.removeEventListener("dispose",x),L(v)}function b(R){const v=n.get(R);if(v.__webglInit===void 0)return;const D=R.source,F=u.get(D);if(F){const H=F[v.__cacheKey];H.usedTimes--,H.usedTimes===0&&C(R),Object.keys(F).length===0&&u.delete(D)}n.remove(R)}function C(R){const v=n.get(R);r.deleteTexture(v.__webglTexture);const D=R.source,F=u.get(D);delete F[v.__cacheKey],a.memory.textures--}function L(R){const v=n.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),n.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let F=0;F<6;F++){if(Array.isArray(v.__webglFramebuffer[F]))for(let H=0;H<v.__webglFramebuffer[F].length;H++)r.deleteFramebuffer(v.__webglFramebuffer[F][H]);else r.deleteFramebuffer(v.__webglFramebuffer[F]);v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer[F])}else{if(Array.isArray(v.__webglFramebuffer))for(let F=0;F<v.__webglFramebuffer.length;F++)r.deleteFramebuffer(v.__webglFramebuffer[F]);else r.deleteFramebuffer(v.__webglFramebuffer);if(v.__webglDepthbuffer&&r.deleteRenderbuffer(v.__webglDepthbuffer),v.__webglMultisampledFramebuffer&&r.deleteFramebuffer(v.__webglMultisampledFramebuffer),v.__webglColorRenderbuffer)for(let F=0;F<v.__webglColorRenderbuffer.length;F++)v.__webglColorRenderbuffer[F]&&r.deleteRenderbuffer(v.__webglColorRenderbuffer[F]);v.__webglDepthRenderbuffer&&r.deleteRenderbuffer(v.__webglDepthRenderbuffer)}const D=R.textures;for(let F=0,H=D.length;F<H;F++){const ue=n.get(D[F]);ue.__webglTexture&&(r.deleteTexture(ue.__webglTexture),a.memory.textures--),n.remove(D[F])}n.remove(R)}let N=0;function U(){N=0}function I(){return N}function G(R){N=R}function W(){const R=N;return R>=i.maxTextures&&We("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+i.maxTextures),N+=1,R}function Y(R){const v=[];return v.push(R.wrapS),v.push(R.wrapT),v.push(R.wrapR||0),v.push(R.magFilter),v.push(R.minFilter),v.push(R.anisotropy),v.push(R.internalFormat),v.push(R.format),v.push(R.type),v.push(R.generateMipmaps),v.push(R.premultiplyAlpha),v.push(R.flipY),v.push(R.unpackAlignment),v.push(R.colorSpace),v.join()}function se(R,v){const D=n.get(R);if(R.isVideoTexture&&z(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&D.__version!==R.version){const F=R.image;if(F===null)We("WebGLRenderer: Texture marked for update but no image data found.");else if(F.complete===!1)We("WebGLRenderer: Texture marked for update but image is incomplete");else{me(D,R,v);return}}else R.isExternalTexture&&(D.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D,D.__webglTexture,r.TEXTURE0+v)}function Q(R,v){const D=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&D.__version!==R.version){me(D,R,v);return}else R.isExternalTexture&&(D.__webglTexture=R.sourceTexture?R.sourceTexture:null);t.bindTexture(r.TEXTURE_2D_ARRAY,D.__webglTexture,r.TEXTURE0+v)}function oe(R,v){const D=n.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&D.__version!==R.version){me(D,R,v);return}t.bindTexture(r.TEXTURE_3D,D.__webglTexture,r.TEXTURE0+v)}function ee(R,v){const D=n.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&D.__version!==R.version){Oe(D,R,v);return}t.bindTexture(r.TEXTURE_CUBE_MAP,D.__webglTexture,r.TEXTURE0+v)}const _e={[xu]:r.REPEAT,[Hi]:r.CLAMP_TO_EDGE,[vu]:r.MIRRORED_REPEAT},ge={[rn]:r.NEAREST,[sx]:r.NEAREST_MIPMAP_NEAREST,[lo]:r.NEAREST_MIPMAP_LINEAR,[pn]:r.LINEAR,[jl]:r.LINEAR_MIPMAP_NEAREST,[Or]:r.LINEAR_MIPMAP_LINEAR},Ie={[cx]:r.NEVER,[px]:r.ALWAYS,[ux]:r.LESS,[Xf]:r.LEQUAL,[fx]:r.EQUAL,[Yf]:r.GEQUAL,[hx]:r.GREATER,[dx]:r.NOTEQUAL};function ke(R,v){if(v.type===fi&&e.has("OES_texture_float_linear")===!1&&(v.magFilter===pn||v.magFilter===jl||v.magFilter===lo||v.magFilter===Or||v.minFilter===pn||v.minFilter===jl||v.minFilter===lo||v.minFilter===Or)&&We("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),r.texParameteri(R,r.TEXTURE_WRAP_S,_e[v.wrapS]),r.texParameteri(R,r.TEXTURE_WRAP_T,_e[v.wrapT]),(R===r.TEXTURE_3D||R===r.TEXTURE_2D_ARRAY)&&r.texParameteri(R,r.TEXTURE_WRAP_R,_e[v.wrapR]),r.texParameteri(R,r.TEXTURE_MAG_FILTER,ge[v.magFilter]),r.texParameteri(R,r.TEXTURE_MIN_FILTER,ge[v.minFilter]),v.compareFunction&&(r.texParameteri(R,r.TEXTURE_COMPARE_MODE,r.COMPARE_REF_TO_TEXTURE),r.texParameteri(R,r.TEXTURE_COMPARE_FUNC,Ie[v.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(v.magFilter===rn||v.minFilter!==lo&&v.minFilter!==Or||v.type===fi&&e.has("OES_texture_float_linear")===!1)return;if(v.anisotropy>1||n.get(v).__currentAnisotropy){const D=e.get("EXT_texture_filter_anisotropic");r.texParameterf(R,D.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(v.anisotropy,i.getMaxAnisotropy())),n.get(v).__currentAnisotropy=v.anisotropy}}}function Ge(R,v){let D=!1;R.__webglInit===void 0&&(R.__webglInit=!0,v.addEventListener("dispose",A));const F=v.source;let H=u.get(F);H===void 0&&(H={},u.set(F,H));const ue=Y(v);if(ue!==R.__cacheKey){H[ue]===void 0&&(H[ue]={texture:r.createTexture(),usedTimes:0},a.memory.textures++,D=!0),H[ue].usedTimes++;const fe=H[R.__cacheKey];fe!==void 0&&(H[R.__cacheKey].usedTimes--,fe.usedTimes===0&&C(v)),R.__cacheKey=ue,R.__webglTexture=H[ue].texture}return D}function j(R,v,D){return Math.floor(Math.floor(R/D)/v)}function te(R,v,D,F){const ue=R.updateRanges;if(ue.length===0)t.texSubImage2D(r.TEXTURE_2D,0,0,0,v.width,v.height,D,F,v.data);else{ue.sort((Ee,re)=>Ee.start-re.start);let fe=0;for(let Ee=1;Ee<ue.length;Ee++){const re=ue[fe],ce=ue[Ee],Se=re.start+re.count,we=j(ce.start,v.width,4),Fe=j(re.start,v.width,4);ce.start<=Se+1&&we===Fe&&j(ce.start+ce.count-1,v.width,4)===we?re.count=Math.max(re.count,ce.start+ce.count-re.start):(++fe,ue[fe]=ce)}ue.length=fe+1;const K=t.getParameter(r.UNPACK_ROW_LENGTH),ie=t.getParameter(r.UNPACK_SKIP_PIXELS),de=t.getParameter(r.UNPACK_SKIP_ROWS);t.pixelStorei(r.UNPACK_ROW_LENGTH,v.width);for(let Ee=0,re=ue.length;Ee<re;Ee++){const ce=ue[Ee],Se=Math.floor(ce.start/4),we=Math.ceil(ce.count/4),Fe=Se%v.width,B=Math.floor(Se/v.width),ve=we,le=1;t.pixelStorei(r.UNPACK_SKIP_PIXELS,Fe),t.pixelStorei(r.UNPACK_SKIP_ROWS,B),t.texSubImage2D(r.TEXTURE_2D,0,Fe,B,ve,le,D,F,v.data)}R.clearUpdateRanges(),t.pixelStorei(r.UNPACK_ROW_LENGTH,K),t.pixelStorei(r.UNPACK_SKIP_PIXELS,ie),t.pixelStorei(r.UNPACK_SKIP_ROWS,de)}}function me(R,v,D){let F=r.TEXTURE_2D;(v.isDataArrayTexture||v.isCompressedArrayTexture)&&(F=r.TEXTURE_2D_ARRAY),v.isData3DTexture&&(F=r.TEXTURE_3D);const H=Ge(R,v),ue=v.source;t.bindTexture(F,R.__webglTexture,r.TEXTURE0+D);const fe=n.get(ue);if(ue.version!==fe.__version||H===!0){if(t.activeTexture(r.TEXTURE0+D),(typeof ImageBitmap<"u"&&v.image instanceof ImageBitmap)===!1){const le=et.getPrimaries(et.workingColorSpace),ne=v.colorSpace===or?null:et.getPrimaries(v.colorSpace),P=v.colorSpace===or||le===ne?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,P)}t.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment);let ie=m(v.image,!1,i.maxTextureSize);ie=Ct(v,ie);const de=s.convert(v.format,v.colorSpace),Ee=s.convert(v.type);let re=S(v.internalFormat,de,Ee,v.normalized,v.colorSpace,v.isVideoTexture);ke(F,v);let ce;const Se=v.mipmaps,we=v.isVideoTexture!==!0,Fe=fe.__version===void 0||H===!0,B=ue.dataReady,ve=w(v,ie);if(v.isDepthTexture)re=y(v.format===Br,v.type),Fe&&(we?t.texStorage2D(r.TEXTURE_2D,1,re,ie.width,ie.height):t.texImage2D(r.TEXTURE_2D,0,re,ie.width,ie.height,0,de,Ee,null));else if(v.isDataTexture)if(Se.length>0){we&&Fe&&t.texStorage2D(r.TEXTURE_2D,ve,re,Se[0].width,Se[0].height);for(let le=0,ne=Se.length;le<ne;le++)ce=Se[le],we?B&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,ce.width,ce.height,de,Ee,ce.data):t.texImage2D(r.TEXTURE_2D,le,re,ce.width,ce.height,0,de,Ee,ce.data);v.generateMipmaps=!1}else we?(Fe&&t.texStorage2D(r.TEXTURE_2D,ve,re,ie.width,ie.height),B&&te(v,ie,de,Ee)):t.texImage2D(r.TEXTURE_2D,0,re,ie.width,ie.height,0,de,Ee,ie.data);else if(v.isCompressedTexture)if(v.isCompressedArrayTexture){we&&Fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ve,re,Se[0].width,Se[0].height,ie.depth);for(let le=0,ne=Se.length;le<ne;le++)if(ce=Se[le],v.format!==hi)if(de!==null)if(we){if(B)if(v.layerUpdates.size>0){const P=Pd(ce.width,ce.height,v.format,v.type);for(const O of v.layerUpdates){const V=ce.data.subarray(O*P/ce.data.BYTES_PER_ELEMENT,(O+1)*P/ce.data.BYTES_PER_ELEMENT);t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,O,ce.width,ce.height,1,de,V)}}else t.compressedTexSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,ce.width,ce.height,ie.depth,de,ce.data)}else t.compressedTexImage3D(r.TEXTURE_2D_ARRAY,le,re,ce.width,ce.height,ie.depth,0,ce.data,0,0);else We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else we?B&&t.texSubImage3D(r.TEXTURE_2D_ARRAY,le,0,0,0,ce.width,ce.height,ie.depth,de,Ee,ce.data):t.texImage3D(r.TEXTURE_2D_ARRAY,le,re,ce.width,ce.height,ie.depth,0,de,Ee,ce.data);v.layerUpdates.size>0&&v.clearLayerUpdates()}else{we&&Fe&&t.texStorage2D(r.TEXTURE_2D,ve,re,Se[0].width,Se[0].height);for(let le=0,ne=Se.length;le<ne;le++)ce=Se[le],v.format!==hi?de!==null?we?B&&t.compressedTexSubImage2D(r.TEXTURE_2D,le,0,0,ce.width,ce.height,de,ce.data):t.compressedTexImage2D(r.TEXTURE_2D,le,re,ce.width,ce.height,0,ce.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):we?B&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,ce.width,ce.height,de,Ee,ce.data):t.texImage2D(r.TEXTURE_2D,le,re,ce.width,ce.height,0,de,Ee,ce.data)}else if(v.isDataArrayTexture)if(we){if(Fe&&t.texStorage3D(r.TEXTURE_2D_ARRAY,ve,re,ie.width,ie.height,ie.depth),B)if(v.layerUpdates.size>0){const le=Pd(ie.width,ie.height,v.format,v.type);for(const ne of v.layerUpdates){const P=ie.data.subarray(ne*le/ie.data.BYTES_PER_ELEMENT,(ne+1)*le/ie.data.BYTES_PER_ELEMENT);t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,ne,ie.width,ie.height,1,de,Ee,P)}v.clearLayerUpdates()}else t.texSubImage3D(r.TEXTURE_2D_ARRAY,0,0,0,0,ie.width,ie.height,ie.depth,de,Ee,ie.data)}else t.texImage3D(r.TEXTURE_2D_ARRAY,0,re,ie.width,ie.height,ie.depth,0,de,Ee,ie.data);else if(v.isData3DTexture)we?(Fe&&t.texStorage3D(r.TEXTURE_3D,ve,re,ie.width,ie.height,ie.depth),B&&t.texSubImage3D(r.TEXTURE_3D,0,0,0,0,ie.width,ie.height,ie.depth,de,Ee,ie.data)):t.texImage3D(r.TEXTURE_3D,0,re,ie.width,ie.height,ie.depth,0,de,Ee,ie.data);else if(v.isFramebufferTexture){if(Fe)if(we)t.texStorage2D(r.TEXTURE_2D,ve,re,ie.width,ie.height);else{let le=ie.width,ne=ie.height;for(let P=0;P<ve;P++)t.texImage2D(r.TEXTURE_2D,P,re,le,ne,0,de,Ee,null),le>>=1,ne>>=1}}else if(v.isHTMLTexture){if("texElementImage2D"in r){const le=r.canvas;if(le.hasAttribute("layoutsubtree")||le.setAttribute("layoutsubtree","true"),ie.parentNode!==le){le.appendChild(ie),d.add(v),le.onpaint=ne=>{const P=ne.changedElements;for(const O of d)P.includes(O.image)&&(O.needsUpdate=!0)},le.requestPaint();return}if(r.texElementImage2D.length===3)r.texElementImage2D(r.TEXTURE_2D,r.RGBA8,ie);else{const P=r.RGBA,O=r.RGBA,V=r.UNSIGNED_BYTE;r.texElementImage2D(r.TEXTURE_2D,0,P,O,V,ie)}r.texParameteri(r.TEXTURE_2D,r.TEXTURE_MIN_FILTER,r.LINEAR),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_S,r.CLAMP_TO_EDGE),r.texParameteri(r.TEXTURE_2D,r.TEXTURE_WRAP_T,r.CLAMP_TO_EDGE)}}else if(Se.length>0){if(we&&Fe){const le=rt(Se[0]);t.texStorage2D(r.TEXTURE_2D,ve,re,le.width,le.height)}for(let le=0,ne=Se.length;le<ne;le++)ce=Se[le],we?B&&t.texSubImage2D(r.TEXTURE_2D,le,0,0,de,Ee,ce):t.texImage2D(r.TEXTURE_2D,le,re,de,Ee,ce);v.generateMipmaps=!1}else if(we){if(Fe){const le=rt(ie);t.texStorage2D(r.TEXTURE_2D,ve,re,le.width,le.height)}B&&t.texSubImage2D(r.TEXTURE_2D,0,0,0,de,Ee,ie)}else t.texImage2D(r.TEXTURE_2D,0,re,de,Ee,ie);p(v)&&M(F),fe.__version=ue.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function Oe(R,v,D){if(v.image.length!==6)return;const F=Ge(R,v),H=v.source;t.bindTexture(r.TEXTURE_CUBE_MAP,R.__webglTexture,r.TEXTURE0+D);const ue=n.get(H);if(H.version!==ue.__version||F===!0){t.activeTexture(r.TEXTURE0+D);const fe=et.getPrimaries(et.workingColorSpace),K=v.colorSpace===or?null:et.getPrimaries(v.colorSpace),ie=v.colorSpace===or||fe===K?r.NONE:r.BROWSER_DEFAULT_WEBGL;t.pixelStorei(r.UNPACK_FLIP_Y_WEBGL,v.flipY),t.pixelStorei(r.UNPACK_PREMULTIPLY_ALPHA_WEBGL,v.premultiplyAlpha),t.pixelStorei(r.UNPACK_ALIGNMENT,v.unpackAlignment),t.pixelStorei(r.UNPACK_COLORSPACE_CONVERSION_WEBGL,ie);const de=v.isCompressedTexture||v.image[0].isCompressedTexture,Ee=v.image[0]&&v.image[0].isDataTexture,re=[];for(let O=0;O<6;O++)!de&&!Ee?re[O]=m(v.image[O],!0,i.maxCubemapSize):re[O]=Ee?v.image[O].image:v.image[O],re[O]=Ct(v,re[O]);const ce=re[0],Se=s.convert(v.format,v.colorSpace),we=s.convert(v.type),Fe=S(v.internalFormat,Se,we,v.normalized,v.colorSpace),B=v.isVideoTexture!==!0,ve=ue.__version===void 0||F===!0,le=H.dataReady;let ne=w(v,ce);ke(r.TEXTURE_CUBE_MAP,v);let P;if(de){B&&ve&&t.texStorage2D(r.TEXTURE_CUBE_MAP,ne,Fe,ce.width,ce.height);for(let O=0;O<6;O++){P=re[O].mipmaps;for(let V=0;V<P.length;V++){const Z=P[V];v.format!==hi?Se!==null?B?le&&t.compressedTexSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,V,0,0,Z.width,Z.height,Se,Z.data):t.compressedTexImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,V,Fe,Z.width,Z.height,0,Z.data):We("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):B?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,V,0,0,Z.width,Z.height,Se,we,Z.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,V,Fe,Z.width,Z.height,0,Se,we,Z.data)}}}else{if(P=v.mipmaps,B&&ve){P.length>0&&ne++;const O=rt(re[0]);t.texStorage2D(r.TEXTURE_CUBE_MAP,ne,Fe,O.width,O.height)}for(let O=0;O<6;O++)if(Ee){B?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,re[O].width,re[O].height,Se,we,re[O].data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Fe,re[O].width,re[O].height,0,Se,we,re[O].data);for(let V=0;V<P.length;V++){const he=P[V].image[O].image;B?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,V+1,0,0,he.width,he.height,Se,we,he.data):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,V+1,Fe,he.width,he.height,0,Se,we,he.data)}}else{B?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,0,0,Se,we,re[O]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,0,Fe,Se,we,re[O]);for(let V=0;V<P.length;V++){const Z=P[V];B?le&&t.texSubImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,V+1,0,0,Se,we,Z.image[O]):t.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+O,V+1,Fe,Se,we,Z.image[O])}}}p(v)&&M(r.TEXTURE_CUBE_MAP),ue.__version=H.version,v.onUpdate&&v.onUpdate(v)}R.__version=v.version}function xe(R,v,D,F,H,ue){const fe=s.convert(D.format,D.colorSpace),K=s.convert(D.type),ie=S(D.internalFormat,fe,K,D.normalized,D.colorSpace),de=n.get(v),Ee=n.get(D);if(Ee.__renderTarget=v,!de.__hasExternalTextures){const re=Math.max(1,v.width>>ue),ce=Math.max(1,v.height>>ue);H===r.TEXTURE_3D||H===r.TEXTURE_2D_ARRAY?t.texImage3D(H,ue,ie,re,ce,v.depth,0,fe,K,null):t.texImage2D(H,ue,ie,re,ce,0,fe,K,null)}t.bindFramebuffer(r.FRAMEBUFFER,R),Ze(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,F,H,Ee.__webglTexture,0,ut(v)):(H===r.TEXTURE_2D||H>=r.TEXTURE_CUBE_MAP_POSITIVE_X&&H<=r.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&r.framebufferTexture2D(r.FRAMEBUFFER,F,H,Ee.__webglTexture,ue),t.bindFramebuffer(r.FRAMEBUFFER,null)}function Ve(R,v,D){if(r.bindRenderbuffer(r.RENDERBUFFER,R),v.depthBuffer){const F=v.depthTexture,H=F&&F.isDepthTexture?F.type:null,ue=y(v.stencilBuffer,H),fe=v.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;Ze(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut(v),ue,v.width,v.height):D?r.renderbufferStorageMultisample(r.RENDERBUFFER,ut(v),ue,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ue,v.width,v.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,fe,r.RENDERBUFFER,R)}else{const F=v.textures;for(let H=0;H<F.length;H++){const ue=F[H],fe=s.convert(ue.format,ue.colorSpace),K=s.convert(ue.type),ie=S(ue.internalFormat,fe,K,ue.normalized,ue.colorSpace);Ze(v)?o.renderbufferStorageMultisampleEXT(r.RENDERBUFFER,ut(v),ie,v.width,v.height):D?r.renderbufferStorageMultisample(r.RENDERBUFFER,ut(v),ie,v.width,v.height):r.renderbufferStorage(r.RENDERBUFFER,ie,v.width,v.height)}}r.bindRenderbuffer(r.RENDERBUFFER,null)}function mt(R,v,D){const F=v.isWebGLCubeRenderTarget===!0;if(t.bindFramebuffer(r.FRAMEBUFFER,R),!(v.depthTexture&&v.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");const H=n.get(v.depthTexture);if(H.__renderTarget=v,(!H.__webglTexture||v.depthTexture.image.width!==v.width||v.depthTexture.image.height!==v.height)&&(v.depthTexture.image.width=v.width,v.depthTexture.image.height=v.height,v.depthTexture.needsUpdate=!0),F){if(H.__webglInit===void 0&&(H.__webglInit=!0,v.depthTexture.addEventListener("dispose",A)),H.__webglTexture===void 0){H.__webglTexture=r.createTexture(),t.bindTexture(r.TEXTURE_CUBE_MAP,H.__webglTexture),ke(r.TEXTURE_CUBE_MAP,v.depthTexture);const de=s.convert(v.depthTexture.format),Ee=s.convert(v.depthTexture.type);let re;v.depthTexture.format===$i?re=r.DEPTH_COMPONENT24:v.depthTexture.format===Br&&(re=r.DEPTH24_STENCIL8);for(let ce=0;ce<6;ce++)r.texImage2D(r.TEXTURE_CUBE_MAP_POSITIVE_X+ce,0,re,v.width,v.height,0,de,Ee,null)}}else se(v.depthTexture,0);const ue=H.__webglTexture,fe=ut(v),K=F?r.TEXTURE_CUBE_MAP_POSITIVE_X+D:r.TEXTURE_2D,ie=v.depthTexture.format===Br?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;if(v.depthTexture.format===$i)Ze(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,K,ue,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,ie,K,ue,0);else if(v.depthTexture.format===Br)Ze(v)?o.framebufferTexture2DMultisampleEXT(r.FRAMEBUFFER,ie,K,ue,0,fe):r.framebufferTexture2D(r.FRAMEBUFFER,ie,K,ue,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function Ue(R){const v=n.get(R),D=R.isWebGLCubeRenderTarget===!0;if(v.__boundDepthTexture!==R.depthTexture){const F=R.depthTexture;if(v.__depthDisposeCallback&&v.__depthDisposeCallback(),F){const H=()=>{delete v.__boundDepthTexture,delete v.__depthDisposeCallback,F.removeEventListener("dispose",H)};F.addEventListener("dispose",H),v.__depthDisposeCallback=H}v.__boundDepthTexture=F}if(R.depthTexture&&!v.__autoAllocateDepthBuffer)if(D)for(let F=0;F<6;F++)mt(v.__webglFramebuffer[F],R,F);else{const F=R.texture.mipmaps;F&&F.length>0?mt(v.__webglFramebuffer[0],R,0):mt(v.__webglFramebuffer,R,0)}else if(D){v.__webglDepthbuffer=[];for(let F=0;F<6;F++)if(t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[F]),v.__webglDepthbuffer[F]===void 0)v.__webglDepthbuffer[F]=r.createRenderbuffer(),Ve(v.__webglDepthbuffer[F],R,!1);else{const H=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=v.__webglDepthbuffer[F];r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,H,r.RENDERBUFFER,ue)}}else{const F=R.texture.mipmaps;if(F&&F.length>0?t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer[0]):t.bindFramebuffer(r.FRAMEBUFFER,v.__webglFramebuffer),v.__webglDepthbuffer===void 0)v.__webglDepthbuffer=r.createRenderbuffer(),Ve(v.__webglDepthbuffer,R,!1);else{const H=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,ue=v.__webglDepthbuffer;r.bindRenderbuffer(r.RENDERBUFFER,ue),r.framebufferRenderbuffer(r.FRAMEBUFFER,H,r.RENDERBUFFER,ue)}}t.bindFramebuffer(r.FRAMEBUFFER,null)}function Me(R,v,D){const F=n.get(R);v!==void 0&&xe(F.__webglFramebuffer,R,R.texture,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,0),D!==void 0&&Ue(R)}function Qe(R){const v=R.texture,D=n.get(R),F=n.get(v);R.addEventListener("dispose",x);const H=R.textures,ue=R.isWebGLCubeRenderTarget===!0,fe=H.length>1;if(fe||(F.__webglTexture===void 0&&(F.__webglTexture=r.createTexture()),F.__version=v.version,a.memory.textures++),ue){D.__webglFramebuffer=[];for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer[K]=[];for(let ie=0;ie<v.mipmaps.length;ie++)D.__webglFramebuffer[K][ie]=r.createFramebuffer()}else D.__webglFramebuffer[K]=r.createFramebuffer()}else{if(v.mipmaps&&v.mipmaps.length>0){D.__webglFramebuffer=[];for(let K=0;K<v.mipmaps.length;K++)D.__webglFramebuffer[K]=r.createFramebuffer()}else D.__webglFramebuffer=r.createFramebuffer();if(fe)for(let K=0,ie=H.length;K<ie;K++){const de=n.get(H[K]);de.__webglTexture===void 0&&(de.__webglTexture=r.createTexture(),a.memory.textures++)}if(R.samples>0&&Ze(R)===!1){D.__webglMultisampledFramebuffer=r.createFramebuffer(),D.__webglColorRenderbuffer=[],t.bindFramebuffer(r.FRAMEBUFFER,D.__webglMultisampledFramebuffer);for(let K=0;K<H.length;K++){const ie=H[K];D.__webglColorRenderbuffer[K]=r.createRenderbuffer(),r.bindRenderbuffer(r.RENDERBUFFER,D.__webglColorRenderbuffer[K]);const de=s.convert(ie.format,ie.colorSpace),Ee=s.convert(ie.type),re=S(ie.internalFormat,de,Ee,ie.normalized,ie.colorSpace,R.isXRRenderTarget===!0),ce=ut(R);r.renderbufferStorageMultisample(r.RENDERBUFFER,ce,re,R.width,R.height),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+K,r.RENDERBUFFER,D.__webglColorRenderbuffer[K])}r.bindRenderbuffer(r.RENDERBUFFER,null),R.depthBuffer&&(D.__webglDepthRenderbuffer=r.createRenderbuffer(),Ve(D.__webglDepthRenderbuffer,R,!0)),t.bindFramebuffer(r.FRAMEBUFFER,null)}}if(ue){t.bindTexture(r.TEXTURE_CUBE_MAP,F.__webglTexture),ke(r.TEXTURE_CUBE_MAP,v);for(let K=0;K<6;K++)if(v.mipmaps&&v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)xe(D.__webglFramebuffer[K][ie],R,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,ie);else xe(D.__webglFramebuffer[K],R,v,r.COLOR_ATTACHMENT0,r.TEXTURE_CUBE_MAP_POSITIVE_X+K,0);p(v)&&M(r.TEXTURE_CUBE_MAP),t.unbindTexture()}else if(fe){for(let K=0,ie=H.length;K<ie;K++){const de=H[K],Ee=n.get(de);let re=r.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(re=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(re,Ee.__webglTexture),ke(re,de),xe(D.__webglFramebuffer,R,de,r.COLOR_ATTACHMENT0+K,re,0),p(de)&&M(re)}t.unbindTexture()}else{let K=r.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(K=R.isWebGL3DRenderTarget?r.TEXTURE_3D:r.TEXTURE_2D_ARRAY),t.bindTexture(K,F.__webglTexture),ke(K,v),v.mipmaps&&v.mipmaps.length>0)for(let ie=0;ie<v.mipmaps.length;ie++)xe(D.__webglFramebuffer[ie],R,v,r.COLOR_ATTACHMENT0,K,ie);else xe(D.__webglFramebuffer,R,v,r.COLOR_ATTACHMENT0,K,0);p(v)&&M(K),t.unbindTexture()}R.depthBuffer&&Ue(R)}function Be(R){const v=R.textures;for(let D=0,F=v.length;D<F;D++){const H=v[D];if(p(H)){const ue=E(R),fe=n.get(H).__webglTexture;t.bindTexture(ue,fe),M(ue),t.unbindTexture()}}}const Ye=[],St=[];function zt(R){if(R.samples>0){if(Ze(R)===!1){const v=R.textures,D=R.width,F=R.height;let H=r.COLOR_BUFFER_BIT;const ue=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT,fe=n.get(R),K=v.length>1;if(K)for(let de=0;de<v.length;de++)t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,null),t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,null,0);t.bindFramebuffer(r.READ_FRAMEBUFFER,fe.__webglMultisampledFramebuffer);const ie=R.texture.mipmaps;ie&&ie.length>0?t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglFramebuffer[0]):t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglFramebuffer);for(let de=0;de<v.length;de++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(H|=r.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(H|=r.STENCIL_BUFFER_BIT)),K){r.framebufferRenderbuffer(r.READ_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const Ee=n.get(v[de]).__webglTexture;r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0,r.TEXTURE_2D,Ee,0)}r.blitFramebuffer(0,0,D,F,0,0,D,F,H,r.NEAREST),c===!0&&(Ye.length=0,St.length=0,Ye.push(r.COLOR_ATTACHMENT0+de),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(Ye.push(ue),St.push(ue),r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,St)),r.invalidateFramebuffer(r.READ_FRAMEBUFFER,Ye))}if(t.bindFramebuffer(r.READ_FRAMEBUFFER,null),t.bindFramebuffer(r.DRAW_FRAMEBUFFER,null),K)for(let de=0;de<v.length;de++){t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglMultisampledFramebuffer),r.framebufferRenderbuffer(r.FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.RENDERBUFFER,fe.__webglColorRenderbuffer[de]);const Ee=n.get(v[de]).__webglTexture;t.bindFramebuffer(r.FRAMEBUFFER,fe.__webglFramebuffer),r.framebufferTexture2D(r.DRAW_FRAMEBUFFER,r.COLOR_ATTACHMENT0+de,r.TEXTURE_2D,Ee,0)}t.bindFramebuffer(r.DRAW_FRAMEBUFFER,fe.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&c){const v=R.stencilBuffer?r.DEPTH_STENCIL_ATTACHMENT:r.DEPTH_ATTACHMENT;r.invalidateFramebuffer(r.DRAW_FRAMEBUFFER,[v])}}}function ut(R){return Math.min(i.maxSamples,R.samples)}function Ze(R){const v=n.get(R);return R.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&v.__useRenderToTexture!==!1}function z(R){const v=a.render.frame;f.get(R)!==v&&(f.set(R,v),R.update())}function Ct(R,v){const D=R.colorSpace,F=R.format,H=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||D!==ml&&D!==or&&(et.getTransfer(D)===pt?(F!==hi||H!==Vn)&&We("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):at("WebGLTextures: Unsupported texture color space:",D)),v}function rt(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(l.width=R.naturalWidth||R.width,l.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(l.width=R.displayWidth,l.height=R.displayHeight):(l.width=R.width,l.height=R.height),l}this.allocateTextureUnit=W,this.resetTextureUnits=U,this.getTextureUnits=I,this.setTextureUnits=G,this.setTexture2D=se,this.setTexture2DArray=Q,this.setTexture3D=oe,this.setTextureCube=ee,this.rebindTextures=Me,this.setupRenderTarget=Qe,this.updateRenderTargetMipmap=Be,this.updateMultisampleRenderTarget=zt,this.setupDepthRenderbuffer=Ue,this.setupFrameBufferTexture=xe,this.useMultisampledRTT=Ze,this.isReversedDepthBuffer=function(){return t.buffers.depth.getReversed()}}function qb(r,e){function t(n,i=or){let s;const a=et.getTransfer(i);if(n===Vn)return r.UNSIGNED_BYTE;if(n===kf)return r.UNSIGNED_SHORT_4_4_4_4;if(n===zf)return r.UNSIGNED_SHORT_5_5_5_1;if(n===Vm)return r.UNSIGNED_INT_5_9_9_9_REV;if(n===Gm)return r.UNSIGNED_INT_10F_11F_11F_REV;if(n===km)return r.BYTE;if(n===zm)return r.SHORT;if(n===Ka)return r.UNSIGNED_SHORT;if(n===Bf)return r.INT;if(n===Ci)return r.UNSIGNED_INT;if(n===fi)return r.FLOAT;if(n===yn)return r.HALF_FLOAT;if(n===Hm)return r.ALPHA;if(n===Wm)return r.RGB;if(n===hi)return r.RGBA;if(n===$i)return r.DEPTH_COMPONENT;if(n===Br)return r.DEPTH_STENCIL;if(n===Vf)return r.RED;if(n===Gf)return r.RED_INTEGER;if(n===Qr)return r.RG;if(n===Hf)return r.RG_INTEGER;if(n===Wf)return r.RGBA_INTEGER;if(n===qo||n===$o||n===Ko||n===Zo)if(a===pt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(n===qo)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(n===$o)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(n===Ko)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(n===Zo)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(n===qo)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(n===$o)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(n===Ko)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(n===Zo)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(n===Mu||n===Su||n===yu||n===bu)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(n===Mu)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(n===Su)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(n===yu)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(n===bu)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(n===Tu||n===Eu||n===wu||n===Au||n===Ru||n===dl||n===Cu)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(n===Tu||n===Eu)return a===pt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(n===wu)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(n===Au)return s.COMPRESSED_R11_EAC;if(n===Ru)return s.COMPRESSED_SIGNED_R11_EAC;if(n===dl)return s.COMPRESSED_RG11_EAC;if(n===Cu)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(n===Pu||n===Du||n===Lu||n===Iu||n===Uu||n===Nu||n===Fu||n===Ou||n===Bu||n===ku||n===zu||n===Vu||n===Gu||n===Hu)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(n===Pu)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(n===Du)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(n===Lu)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(n===Iu)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(n===Uu)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(n===Nu)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(n===Fu)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(n===Ou)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(n===Bu)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(n===ku)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(n===zu)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(n===Vu)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(n===Gu)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(n===Hu)return a===pt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(n===Wu||n===Xu||n===Yu)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(n===Wu)return a===pt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(n===Xu)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(n===Yu)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(n===qu||n===$u||n===pl||n===Ku)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(n===qu)return s.COMPRESSED_RED_RGTC1_EXT;if(n===$u)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(n===pl)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(n===Ku)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return n===Za?r.UNSIGNED_INT_24_8:r[n]!==void 0?r[n]:null}return{convert:t}}const $b=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,Kb=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class Zb{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,t){if(this.texture===null){const n=new e_(e.texture);(e.depthNear!==t.depthNear||e.depthFar!==t.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=n}}getMesh(e){if(this.texture!==null&&this.mesh===null){const t=e.cameras[0].viewport,n=new en({vertexShader:$b,fragmentShader:Kb,uniforms:{depthColor:{value:this.texture},depthWidth:{value:t.z},depthHeight:{value:t.w}}});this.mesh=new bt(new hr(20,20),n)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class Jb extends ts{constructor(e,t){super();const n=this;let i=null,s=1,a=null,o="local-floor",c=1,l=null,f=null,d=null,h=null,u=null,g=null;const _=typeof XRWebGLBinding<"u",m=new Zb,p={},M=t.getContextAttributes();let E=null,S=null;const y=[],w=[],A=new He;let x=null,b=null;const C=new Bn;C.viewport=new At;const L=new Bn;L.viewport=new At;const N=[C,L],U=new nv;let I=null,G=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(j){let te=y[j];return te===void 0&&(te=new lc,y[j]=te),te.getTargetRaySpace()},this.getControllerGrip=function(j){let te=y[j];return te===void 0&&(te=new lc,y[j]=te),te.getGripSpace()},this.getHand=function(j){let te=y[j];return te===void 0&&(te=new lc,y[j]=te),te.getHandSpace()};function W(j){const te=w.indexOf(j.inputSource);if(te===-1)return;const me=y[te];me!==void 0&&(me.update(j.inputSource,j.frame,l||a),me.dispatchEvent({type:j.type,data:j.inputSource}))}function Y(){i.removeEventListener("select",W),i.removeEventListener("selectstart",W),i.removeEventListener("selectend",W),i.removeEventListener("squeeze",W),i.removeEventListener("squeezestart",W),i.removeEventListener("squeezeend",W),i.removeEventListener("end",Y),i.removeEventListener("inputsourceschange",se);for(let j=0;j<y.length;j++){const te=w[j];te!==null&&(w[j]=null,y[j].disconnect(te))}I=null,G=null,m.reset();for(const j in p)delete p[j];if(e.setRenderTarget(E),u=null,h=null,d=null,i=null,S=null,Ge.stop(),n.isPresenting=!1,e.setPixelRatio(x),e.setSize(A.width,A.height,!1),b!==null){const j=b.camera;j.fov=b.fov,j.zoom=b.zoom,j.updateProjectionMatrix(),b=null}n.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(j){s=j,n.isPresenting===!0&&We("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(j){o=j,n.isPresenting===!0&&We("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return l||a},this.setReferenceSpace=function(j){l=j},this.getBaseLayer=function(){return h!==null?h:u},this.getBinding=function(){return d===null&&_&&(d=new XRWebGLBinding(i,t)),d},this.getFrame=function(){return g},this.getSession=function(){return i},this.setSession=async function(j){if(i=j,i!==null){if(E=e.getRenderTarget(),i.addEventListener("select",W),i.addEventListener("selectstart",W),i.addEventListener("selectend",W),i.addEventListener("squeeze",W),i.addEventListener("squeezestart",W),i.addEventListener("squeezeend",W),i.addEventListener("end",Y),i.addEventListener("inputsourceschange",se),M.xrCompatible!==!0&&await t.makeXRCompatible(),x=e.getPixelRatio(),e.getSize(A),_&&"createProjectionLayer"in XRWebGLBinding.prototype){let me=null,Oe=null,xe=null;M.depth&&(xe=M.stencil?t.DEPTH24_STENCIL8:t.DEPTH_COMPONENT24,me=M.stencil?Br:$i,Oe=M.stencil?Za:Ci);const Ve={colorFormat:t.RGBA8,depthFormat:xe,scaleFactor:s};d=this.getBinding(),h=d.createProjectionLayer(Ve),i.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new gn(h.textureWidth,h.textureHeight,{format:hi,type:Vn,depthTexture:new Qa(h.textureWidth,h.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,me),stencilBuffer:M.stencil,colorSpace:e.outputColorSpace,samples:M.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1,storeMultisampledDepthBuffer:h.ignoreDepthValues===!1,storeMultisampledStencilBuffer:h.ignoreDepthValues===!1})}else{const me={antialias:M.antialias,alpha:!0,depth:M.depth,stencil:M.stencil,framebufferScaleFactor:s};u=new XRWebGLLayer(i,t,me),i.updateRenderState({baseLayer:u}),e.setPixelRatio(1),e.setSize(u.framebufferWidth,u.framebufferHeight,!1),S=new gn(u.framebufferWidth,u.framebufferHeight,{format:hi,type:Vn,colorSpace:e.outputColorSpace,stencilBuffer:M.stencil,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(c),l=null,a=await i.requestReferenceSpace(o),Ge.setContext(i),Ge.start(),n.isPresenting=!0,n.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(i!==null)return i.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function se(j){for(let te=0;te<j.removed.length;te++){const me=j.removed[te],Oe=w.indexOf(me);Oe>=0&&(w[Oe]=null,y[Oe].disconnect(me))}for(let te=0;te<j.added.length;te++){const me=j.added[te];let Oe=w.indexOf(me);if(Oe===-1){for(let Ve=0;Ve<y.length;Ve++)if(Ve>=w.length){w.push(me),Oe=Ve;break}else if(w[Ve]===null){w[Ve]=me,Oe=Ve;break}if(Oe===-1)break}const xe=y[Oe];xe&&xe.connect(me)}}const Q=new X,oe=new X;function ee(j,te,me){Q.setFromMatrixPosition(te.matrixWorld),oe.setFromMatrixPosition(me.matrixWorld);const Oe=Q.distanceTo(oe),xe=te.projectionMatrix.elements,Ve=me.projectionMatrix.elements,mt=xe[14]/(xe[10]-1),Ue=xe[14]/(xe[10]+1),Me=(xe[9]+1)/xe[5],Qe=(xe[9]-1)/xe[5],Be=(xe[8]-1)/xe[0],Ye=(Ve[8]+1)/Ve[0],St=mt*Be,zt=mt*Ye,ut=Oe/(-Be+Ye),Ze=ut*-Be;if(te.matrixWorld.decompose(j.position,j.quaternion,j.scale),j.translateX(Ze),j.translateZ(ut),j.matrixWorld.compose(j.position,j.quaternion,j.scale),j.matrixWorldInverse.copy(j.matrixWorld).invert(),xe[10]===-1)j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse);else{const z=mt+ut,Ct=Ue+ut,rt=St-Ze,R=zt+(Oe-Ze),v=Me*Ue/Ct*z,D=Qe*Ue/Ct*z;j.projectionMatrix.makePerspective(rt,R,v,D,z,Ct),j.projectionMatrixInverse.copy(j.projectionMatrix).invert()}}function _e(j,te){te===null?j.matrixWorld.copy(j.matrix):j.matrixWorld.multiplyMatrices(te.matrixWorld,j.matrix),j.matrixWorldInverse.copy(j.matrixWorld).invert()}this.updateCamera=function(j){if(i===null)return;let te=j.near,me=j.far;m.texture!==null&&(m.depthNear>0&&(te=m.depthNear),m.depthFar>0&&(me=m.depthFar)),U.near=L.near=C.near=te,U.far=L.far=C.far=me,(I!==U.near||G!==U.far)&&(i.updateRenderState({depthNear:U.near,depthFar:U.far}),I=U.near,G=U.far),U.layers.mask=j.layers.mask|6,C.layers.mask=U.layers.mask&-5,L.layers.mask=U.layers.mask&-3;const Oe=j.parent,xe=U.cameras;_e(U,Oe);for(let Ve=0;Ve<xe.length;Ve++)_e(xe[Ve],Oe);xe.length===2?ee(U,C,L):U.projectionMatrix.copy(C.projectionMatrix),b===null&&j.isPerspectiveCamera&&(b={camera:j,fov:j.fov,zoom:j.zoom}),ge(j,U,Oe)};function ge(j,te,me){me===null?j.matrix.copy(te.matrixWorld):(j.matrix.copy(me.matrixWorld),j.matrix.invert(),j.matrix.multiply(te.matrixWorld)),j.matrix.decompose(j.position,j.quaternion,j.scale),j.updateMatrixWorld(!0),j.projectionMatrix.copy(te.projectionMatrix),j.projectionMatrixInverse.copy(te.projectionMatrixInverse),j.isPerspectiveCamera&&(j.fov=Ju*2*Math.atan(1/j.projectionMatrix.elements[5]),j.zoom=1)}this.getCamera=function(){return U},this.getFoveation=function(){if(!(h===null&&u===null))return c},this.setFoveation=function(j){c=j,h!==null&&(h.fixedFoveation=j),u!==null&&u.fixedFoveation!==void 0&&(u.fixedFoveation=j)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(U)},this.getCameraTexture=function(j){return p[j]};let Ie=null;function ke(j,te){if(f=te.getViewerPose(l||a),g=te,f!==null){const me=f.views;u!==null&&(e.setRenderTargetFramebuffer(S,u.framebuffer),e.setRenderTarget(S));let Oe=!1;me.length!==U.cameras.length&&(U.cameras.length=0,Oe=!0);for(let Ue=0;Ue<me.length;Ue++){const Me=me[Ue];let Qe=null;if(u!==null)Qe=u.getViewport(Me);else{const Ye=d.getViewSubImage(h,Me);Qe=Ye.viewport,Ue===0&&(e.setRenderTargetTextures(S,Ye.colorTexture,Ye.depthStencilTexture),e.setRenderTarget(S))}let Be=N[Ue];Be===void 0&&(Be=new Bn,Be.layers.enable(Ue),Be.viewport=new At,N[Ue]=Be),Be.matrix.fromArray(Me.transform.matrix),Be.matrix.decompose(Be.position,Be.quaternion,Be.scale),Be.projectionMatrix.fromArray(Me.projectionMatrix),Be.projectionMatrixInverse.copy(Be.projectionMatrix).invert(),Be.viewport.set(Qe.x,Qe.y,Qe.width,Qe.height),Ue===0&&(U.matrix.copy(Be.matrix),U.matrix.decompose(U.position,U.quaternion,U.scale)),Oe===!0&&U.cameras.push(Be)}const xe=i.enabledFeatures;if(xe&&xe.includes("depth-sensing")&&i.depthUsage=="gpu-optimized"&&_){d=n.getBinding();const Ue=d.getDepthInformation(me[0]);Ue&&Ue.isValid&&Ue.texture&&m.init(Ue,i.renderState)}if(xe&&xe.includes("camera-access")&&_){e.state.unbindTexture(),d=n.getBinding();for(let Ue=0;Ue<me.length;Ue++){const Me=me[Ue].camera;if(Me){let Qe=p[Me];Qe||(Qe=new e_,p[Me]=Qe);const Be=d.getCameraImage(Me);Qe.sourceTexture=Be}}}}for(let me=0;me<y.length;me++){const Oe=w[me],xe=y[me];Oe!==null&&xe!==void 0&&xe.update(Oe,te,l||a)}Ie&&Ie(j,te),te.detectedPlanes&&n.dispatchEvent({type:"planesdetected",data:te}),g=null}const Ge=new a_;Ge.setAnimationLoop(ke),this.setAnimationLoop=function(j){Ie=j},this.dispose=function(){}}}const Qb=new ct,d_=new qe;d_.set(-1,0,0,0,1,0,0,0,1);function jb(r,e){function t(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function n(m,p){p.color.getRGB(m.fogColor.value,t_(r)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function i(m,p,M,E,S){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?s(m,p):p.isMeshLambertMaterial?(s(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(s(m,p),d(m,p)):p.isMeshPhongMaterial?(s(m,p),f(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(s(m,p),h(m,p),p.isMeshPhysicalMaterial&&u(m,p,S)):p.isMeshMatcapMaterial?(s(m,p),g(m,p)):p.isMeshDepthMaterial?s(m,p):p.isMeshDistanceMaterial?(s(m,p),_(m,p)):p.isMeshNormalMaterial?s(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?c(m,p,M,E):p.isSpriteMaterial?l(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function s(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,t(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Pn&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,t(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Pn&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,t(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,t(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,t(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);const M=e.get(p),E=M.envMap,S=M.envMapRotation;E&&(m.envMap.value=E,m.envMapRotation.value.setFromMatrix4(Qb.makeRotationFromEuler(S)).transpose(),E.isCubeTexture&&E.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(d_),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,t(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,t(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function c(m,p,M,E){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*M,m.scale.value=E*.5,p.map&&(m.map.value=p.map,t(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function l(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,t(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,t(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function f(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function h(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,t(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,t(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function u(m,p,M){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,t(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,t(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,t(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,t(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,t(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Pn&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,t(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,t(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=M.texture,m.transmissionSamplerSize.value.set(M.width,M.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,t(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,t(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,t(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,t(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,t(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function _(m,p){const M=e.get(p).light;m.referencePosition.value.setFromMatrixPosition(M.matrixWorld),m.nearDistance.value=M.shadow.camera.near,m.farDistance.value=M.shadow.camera.far}return{refreshFogUniforms:n,refreshMaterialUniforms:i}}function eT(r,e,t,n){let i={},s={},a=[];const o=r.getParameter(r.MAX_UNIFORM_BUFFER_BINDINGS);function c(S,y){const w=y.program;n.uniformBlockBinding(S,w)}function l(S,y){let w=i[S.id];w===void 0&&(m(S),w=f(S),i[S.id]=w,S.addEventListener("dispose",M));const A=y.program;n.updateUBOMapping(S,A);const x=e.render.frame;s[S.id]!==x&&(h(S),s[S.id]=x)}function f(S){const y=d();S.__bindingPointIndex=y;const w=r.createBuffer(),A=S.__size,x=S.usage;return r.bindBuffer(r.UNIFORM_BUFFER,w),r.bufferData(r.UNIFORM_BUFFER,A,x),r.bindBuffer(r.UNIFORM_BUFFER,null),r.bindBufferBase(r.UNIFORM_BUFFER,y,w),w}function d(){for(let S=0;S<o;S++)if(a.indexOf(S)===-1)return a.push(S),S;return at("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(S){const y=i[S.id],w=S.uniforms,A=S.__cache;r.bindBuffer(r.UNIFORM_BUFFER,y);for(let x=0,b=w.length;x<b;x++){const C=w[x];if(Array.isArray(C))for(let L=0,N=C.length;L<N;L++)u(C[L],x,L,A);else u(C,x,0,A)}r.bindBuffer(r.UNIFORM_BUFFER,null)}function u(S,y,w,A){if(_(S,y,w,A)===!0){const x=S.__offset,b=S.value;if(Array.isArray(b)){let C=0;for(let L=0;L<b.length;L++){const N=b[L],U=p(N);g(N,S.__data,C),typeof N!="number"&&typeof N!="boolean"&&!N.isMatrix3&&!ArrayBuffer.isView(N)&&(C+=U.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(b,S.__data,0);r.bufferSubData(r.UNIFORM_BUFFER,x,S.__data)}}function g(S,y,w){typeof S=="number"||typeof S=="boolean"?y[0]=S:S.isMatrix3?(y[0]=S.elements[0],y[1]=S.elements[1],y[2]=S.elements[2],y[3]=0,y[4]=S.elements[3],y[5]=S.elements[4],y[6]=S.elements[5],y[7]=0,y[8]=S.elements[6],y[9]=S.elements[7],y[10]=S.elements[8],y[11]=0):ArrayBuffer.isView(S)?y.set(new S.constructor(S.buffer,S.byteOffset,y.length)):S.toArray(y,w)}function _(S,y,w,A){const x=S.value,b=y+"_"+w;if(A[b]===void 0)return typeof x=="number"||typeof x=="boolean"?A[b]=x:ArrayBuffer.isView(x)?A[b]=x.slice():A[b]=x.clone(),!0;{const C=A[b];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return A[b]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(S){const y=S.uniforms;let w=0;const A=16;for(let b=0,C=y.length;b<C;b++){const L=Array.isArray(y[b])?y[b]:[y[b]];for(let N=0,U=L.length;N<U;N++){const I=L[N],G=Array.isArray(I.value)?I.value:[I.value];for(let W=0,Y=G.length;W<Y;W++){const se=G[W],Q=p(se),oe=w%A,ee=oe%Q.boundary,_e=oe+ee;w+=ee,_e!==0&&A-_e<Q.storage&&(w+=A-_e),I.__data=new Float32Array(Q.storage/Float32Array.BYTES_PER_ELEMENT),I.__offset=w,w+=Q.storage}}}const x=w%A;return x>0&&(w+=A-x),S.__size=w,S.__cache={},this}function p(S){const y={boundary:0,storage:0};return typeof S=="number"||typeof S=="boolean"?(y.boundary=4,y.storage=4):S.isVector2?(y.boundary=8,y.storage=8):S.isVector3||S.isColor?(y.boundary=16,y.storage=12):S.isVector4?(y.boundary=16,y.storage=16):S.isMatrix3?(y.boundary=48,y.storage=48):S.isMatrix4?(y.boundary=64,y.storage=64):S.isTexture?We("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(S)?(y.boundary=16,y.storage=S.byteLength):We("WebGLRenderer: Unsupported uniform value type.",S),y}function M(S){const y=S.target;y.removeEventListener("dispose",M);const w=a.indexOf(y.__bindingPointIndex);a.splice(w,1),r.deleteBuffer(i[y.id]),delete i[y.id],delete s[y.id]}function E(){for(const S in i)r.deleteBuffer(i[S]);a=[],i={},s={}}return{bind:c,update:l,dispose:E}}const tT=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let _i=null;function nT(){return _i===null&&(_i=new Zm(tT,16,16,Qr,yn),_i.name="DFG_LUT",_i.minFilter=pn,_i.magFilter=pn,_i.wrapS=Hi,_i.wrapT=Hi,_i.generateMipmaps=!1,_i.needsUpdate=!0),_i}class iT{constructor(e={}){const{canvas:t=gx(),context:n=null,depth:i=!0,stencil:s=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:c=!0,preserveDrawingBuffer:l=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:h=!1,outputBufferType:u=Vn}=e;this.isWebGLRenderer=!0;let g;if(n!==null){if(typeof WebGLRenderingContext<"u"&&n instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=n.getContextAttributes().alpha}else g=a;const _=u,m=new Set([Wf,Hf,Gf]),p=new Set([Vn,Ci,Ka,Za,kf,zf]),M=new Uint32Array(4),E=new Int32Array(4),S=new X;let y=null,w=null;const A=[],x=[];let b=null;this.domElement=t,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=wi,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const C=this;let L=!1,N=null,U=null,I=null,G=null;this._outputColorSpace=On;let W=0,Y=0,se=null,Q=-1,oe=null;const ee=new At,_e=new At;let ge=null;const Ie=new Xe(0);let ke=0,Ge=t.width,j=t.height,te=1,me=null,Oe=null;const xe=new At(0,0,Ge,j),Ve=new At(0,0,Ge,j);let mt=!1;const Ue=new Zf;let Me=!1,Qe=!1;const Be=new ct,Ye=new X,St=new At,zt={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ut=!1;function Ze(){return se===null?te:1}let z=n;function Ct(T,k){return t.getContext(T,k)}let rt,R,v,D,F,H,ue,fe,K,ie,de,Ee,re,ce,Se,we,Fe,B,ve,le,ne,P,O;try{const T={alpha:!0,depth:i,stencil:s,antialias:o,premultipliedAlpha:c,preserveDrawingBuffer:l,powerPreference:f,failIfMajorPerformanceCaveat:d};if("setAttribute"in t&&t.setAttribute("data-engine",`three.js r${Pf}`),t.addEventListener("webglcontextlost",he,!1),t.addEventListener("webglcontextrestored",pe,!1),t.addEventListener("webglcontextcreationerror",ze,!1),z===null){const k="webgl2";if(z=Ct(k,T),z===null)throw Ct(k)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}V()}catch(T){throw t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),at("WebGLRenderer: "+T.message),T}function V(){rt=new ny(z),rt.init(),ne=new qb(z,rt),R=new YS(z,rt,e,ne),v=new Xb(z,rt),R.reversedDepthBuffer&&h&&v.buffers.depth.setReversed(!0),U=z.createFramebuffer(),I=z.createFramebuffer(),G=z.createFramebuffer(),D=new sy(z),F=new Db,H=new Yb(z,rt,v,F,R,ne,D),ue=new ty(C),fe=new ov(z),P=new WS(z,fe),K=new iy(z,fe,D,P),ie=new oy(z,K,fe,P,D),B=new ay(z,R,H),Se=new qS(F),de=new Pb(C,ue,rt,R,P,Se),Ee=new jb(C,F),re=new Ib,ce=new kb(rt),Fe=new HS(C,ue,v,ie,g,c),we=new Wb(C,ie,R),O=new eT(z,D,R,v),ve=new XS(z,rt,D),le=new ry(z,rt,D),D.programs=de.programs,C.capabilities=R,C.extensions=rt,C.properties=F,C.renderLists=re,C.shadowMap=we,C.state=v,C.info=D}_!==Vn&&(b=new cy(_,t.width,t.height,o,i,s));const Z=new Jb(C,z);this.xr=Z,this.getContext=function(){return z},this.getContextAttributes=function(){return z.getContextAttributes()},this.forceContextLoss=function(){const T=rt.get("WEBGL_lose_context");T&&T.loseContext()},this.forceContextRestore=function(){const T=rt.get("WEBGL_lose_context");T&&T.restoreContext()},this.getPixelRatio=function(){return te},this.setPixelRatio=function(T){T!==void 0&&(te=T,this.setSize(Ge,j,!1))},this.getSize=function(T){return T.set(Ge,j)},this.setSize=function(T,k,J=!0){if(Z.isPresenting){We("WebGLRenderer: Can't change size while VR device is presenting.");return}Ge=T,j=k,t.width=Math.floor(T*te),t.height=Math.floor(k*te),J===!0&&(t.style.width=T+"px",t.style.height=k+"px"),b!==null&&b.setSize(t.width,t.height),this.setViewport(0,0,T,k)},this.getDrawingBufferSize=function(T){return T.set(Ge*te,j*te).floor()},this.setDrawingBufferSize=function(T,k,J){Ge=T,j=k,te=J,t.width=Math.floor(T*J),t.height=Math.floor(k*J),this.setViewport(0,0,T,k)},this.setEffects=function(T){if(_===Vn){at("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(T){for(let k=0;k<T.length;k++)if(T[k].isOutputPass===!0){We("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}b.setEffects(T||[])},this.getCurrentViewport=function(T){return T.copy(ee)},this.getViewport=function(T){return T.copy(xe)},this.setViewport=function(T,k,J,q){T.isVector4?xe.set(T.x,T.y,T.z,T.w):xe.set(T,k,J,q),v.viewport(ee.copy(xe).multiplyScalar(te).round())},this.getScissor=function(T){return T.copy(Ve)},this.setScissor=function(T,k,J,q){T.isVector4?Ve.set(T.x,T.y,T.z,T.w):Ve.set(T,k,J,q),v.scissor(_e.copy(Ve).multiplyScalar(te).round())},this.getScissorTest=function(){return mt},this.setScissorTest=function(T){v.setScissorTest(mt=T)},this.setOpaqueSort=function(T){me=T},this.setTransparentSort=function(T){Oe=T},this.getClearColor=function(T){return T.copy(Fe.getClearColor())},this.setClearColor=function(){Fe.setClearColor(...arguments)},this.getClearAlpha=function(){return Fe.getClearAlpha()},this.setClearAlpha=function(){Fe.setClearAlpha(...arguments)},this.clear=function(T=!0,k=!0,J=!0){let q=0;if(T){let $=!1;if(se!==null){const Te=se.texture.format;$=m.has(Te)}if($){const Te=se.texture.type,Ce=p.has(Te),be=Fe.getClearColor(),De=Fe.getClearAlpha(),Ne=be.r,$e=be.g,Je=be.b;Ce?(M[0]=Ne,M[1]=$e,M[2]=Je,M[3]=De,z.clearBufferuiv(z.COLOR,0,M)):(E[0]=Ne,E[1]=$e,E[2]=Je,E[3]=De,z.clearBufferiv(z.COLOR,0,E))}else q|=z.COLOR_BUFFER_BIT}k&&(q|=z.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),J&&(q|=z.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),q!==0&&z.clear(q)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(T){T.setRenderer(this),N=T},this.dispose=function(){t.removeEventListener("webglcontextlost",he,!1),t.removeEventListener("webglcontextrestored",pe,!1),t.removeEventListener("webglcontextcreationerror",ze,!1),Fe.dispose(),re.dispose(),ce.dispose(),F.dispose(),ue.dispose(),ie.dispose(),P.dispose(),O.dispose(),de.dispose(),Z.dispose(),Z.removeEventListener("sessionstart",Kn),Z.removeEventListener("sessionend",xn),on.stop()};function he(T){T.preventDefault(),jh("WebGLRenderer: Context Lost."),L=!0}function pe(){jh("WebGLRenderer: Context Restored."),L=!1;const T=D.autoReset,k=we.enabled,J=we.autoUpdate,q=we.needsUpdate,$=we.type;V(),D.autoReset=T,we.enabled=k,we.autoUpdate=J,we.needsUpdate=q,we.type=$}function ze(T){at("WebGLRenderer: A WebGL context could not be created. Reason: ",T.statusMessage)}function Re(T){const k=T.target;k.removeEventListener("dispose",Re),ft(k)}function ft(T){je(T),F.remove(T)}function je(T){const k=F.get(T).programs;k!==void 0&&(k.forEach(function(J){de.releaseProgram(J)}),T.isShaderMaterial&&de.releaseShaderCache(T))}this.renderBufferDirect=function(T,k,J,q,$,Te){k===null&&(k=zt);const Ce=$.isMesh&&$.matrixWorld.determinantAffine()<0,be=N_(T,k,J,q,$);v.setMaterial(q,Ce);let De=J.index,Ne=1;if(q.wireframe===!0){if(De=K.getWireframeAttribute(J),De===void 0)return;Ne=2}const $e=J.drawRange,Je=J.attributes.position;let Le=$e.start*Ne,ht=($e.start+$e.count)*Ne;Te!==null&&(Le=Math.max(Le,Te.start*Ne),ht=Math.min(ht,(Te.start+Te.count)*Ne)),De!==null?(Le=Math.max(Le,0),ht=Math.min(ht,De.count)):Je!=null&&(Le=Math.max(Le,0),ht=Math.min(ht,Je.count));const Vt=ht-Le;if(Vt<0||Vt===1/0)return;P.setup($,q,be,J,De);let Et,gt=ve;if(De!==null&&(Et=fe.get(De),gt=le,gt.setIndex(Et)),$.isMesh)q.wireframe===!0?(v.setLineWidth(q.wireframeLinewidth*Ze()),gt.setMode(z.LINES)):gt.setMode(z.TRIANGLES);else if($.isLine){let ln=q.linewidth;ln===void 0&&(ln=1),v.setLineWidth(ln*Ze()),$.isLineSegments?gt.setMode(z.LINES):$.isLineLoop?gt.setMode(z.LINE_LOOP):gt.setMode(z.LINE_STRIP)}else $.isPoints?gt.setMode(z.POINTS):$.isSprite&&gt.setMode(z.TRIANGLES);if($.isBatchedMesh)if(rt.get("WEBGL_multi_draw"))gt.renderMultiDraw($._multiDrawStarts,$._multiDrawCounts,$._multiDrawCount);else{const ln=$._multiDrawStarts,Ae=$._multiDrawCounts,vn=$._multiDrawCount,st=De?fe.get(De).bytesPerElement:1,Zn=F.get(q).currentProgram.getUniforms();for(let pi=0;pi<vn;pi++)Zn.setValue(z,"_gl_DrawID",pi),gt.render(ln[pi]/st,Ae[pi])}else if($.isInstancedMesh)gt.renderInstances(Le,Vt,$.count);else if(J.isInstancedBufferGeometry){const ln=J._maxInstanceCount!==void 0?J._maxInstanceCount:1/0,Ae=Math.min(J.instanceCount,ln);gt.renderInstances(Le,Vt,Ae)}else gt.render(Le,Vt)};function lt(T,k,J,q){N!==null&&T.isNodeMaterial&&N.setObject(q,T),Me===!0&&Se.setState(T,J,!1),T.transparent===!0&&T.side===yi&&T.forceSinglePass===!1?(T.side=Pn,T.needsUpdate=!0,ro(T,k,q),T.side=Zr,T.needsUpdate=!0,ro(T,k,q),T.side=yi):ro(T,k,q)}this.compile=function(T,k,J=null){J===null&&(J=T),N!==null&&N.renderStart(T,k,J),w=ce.get(J),w.init(k),x.push(w),J.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),T!==J&&T.traverseVisible(function($){$.isLight&&$.layers.test(k.layers)&&(w.pushLight($),$.castShadow&&w.pushShadow($))}),w.setupLights(),N!==null&&N.updateLights(w.state.lightsArray),Qe=this.localClippingEnabled,Me=Se.init(this.clippingPlanes,Qe),Me===!0&&Se.setGlobalState(this.clippingPlanes,k),N!==null&&we.render(w.state.shadowsArray,J,k);const q=new Set;return T.traverse(function($){if(!($.isMesh||$.isPoints||$.isLine||$.isSprite))return;const Te=$.material;if(Te)if(Array.isArray(Te))for(let Ce=0;Ce<Te.length;Ce++){const be=Te[Ce];lt(be,J,k,$),q.add(be)}else lt(Te,J,k,$),q.add(Te)}),w=x.pop(),N!==null&&N.renderEnd(),q},this.compileAsync=function(T,k,J=null){const q=this.compile(T,k,J);return new Promise($=>{function Te(){if(q.forEach(function(Ce){const De=F.get(Ce).currentProgram;(De===void 0||De.isReady())&&q.delete(Ce)}),q.size===0){$(T);return}setTimeout(Te,10)}rt.get("KHR_parallel_shader_compile")!==null?Te():setTimeout(Te,10)})};let Tt=null;function Jt(T){Tt&&Tt(T)}function Kn(){on.stop()}function xn(){on.start()}const on=new a_;on.setAnimationLoop(Jt),typeof self<"u"&&on.setContext(self),this.setAnimationLoop=function(T){Tt=T,Z.setAnimationLoop(T),T===null?on.stop():on.start()},Z.addEventListener("sessionstart",Kn),Z.addEventListener("sessionend",xn),this.render=function(T,k){if(k!==void 0&&k.isCamera!==!0){at("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(L===!0)return;N!==null&&N.renderStart(T,k);const J=Z.enabled===!0&&Z.isPresenting===!0,q=b!==null&&(se===null||J)&&b.begin(C,se);if(T.matrixWorldAutoUpdate===!0&&T.updateMatrixWorld(),k.parent===null&&k.matrixWorldAutoUpdate===!0&&k.updateMatrixWorld(),Z.enabled===!0&&Z.isPresenting===!0&&(b===null||b.isCompositing()===!1)&&(Z.cameraAutoUpdate===!0&&Z.updateCamera(k),k=Z.getCamera()),T.isScene===!0&&T.onBeforeRender(C,T,k,se),w=ce.get(T,x.length),w.init(k),w.state.textureUnits=H.getTextureUnits(),x.push(w),Be.multiplyMatrices(k.projectionMatrix,k.matrixWorldInverse),Ue.setFromProjectionMatrix(Be,Ti,k.reversedDepth),Qe=this.localClippingEnabled,Me=Se.init(this.clippingPlanes,Qe),y=re.get(T,A.length),y.init(),A.push(y),Z.enabled===!0&&Z.isPresenting===!0){const Ce=C.xr.getDepthSensingMesh();Ce!==null&&Nt(Ce,k,-1/0,C.sortObjects)}Nt(T,k,0,C.sortObjects),y.finish(),N!==null&&N.updateLights(w.state.lightsArray),C.sortObjects===!0&&y.sort(me,Oe),ut=Z.enabled===!1||Z.isPresenting===!1||Z.hasDepthSensing()===!1,ut&&Fe.addToRenderList(y,T),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),Me===!0&&Se.beginShadows();const $=w.state.shadowsArray;if(we.render($,T,k),Me===!0&&Se.endShadows(),(q&&b.hasRenderPass())===!1){const Ce=y.opaque,be=y.transmissive;if(w.setupLights(),k.isArrayCamera){const De=k.cameras;if(be.length>0)for(let Ne=0,$e=De.length;Ne<$e;Ne++){const Je=De[Ne];ss(Ce,be,T,Je)}ut&&Fe.render(T);for(let Ne=0,$e=De.length;Ne<$e;Ne++){const Je=De[Ne];Pt(y,T,Je,Je.viewport)}}else be.length>0&&ss(Ce,be,T,k),ut&&Fe.render(T),Pt(y,T,k)}se!==null&&Y===0&&(H.updateMultisampleRenderTarget(se),H.updateRenderTargetMipmap(se)),q&&b.end(C),T.isScene===!0&&T.onAfterRender(C,T,k),P.resetDefaultState(),Q=-1,oe=null,x.pop(),x.length>0?(w=x[x.length-1],H.setTextureUnits(w.state.textureUnits),Me===!0&&Se.setGlobalState(C.clippingPlanes,w.state.camera)):w=null,A.pop(),A.length>0?y=A[A.length-1]:y=null,N!==null&&N.renderEnd()};function Nt(T,k,J,q){if(T.visible===!1)return;if(T.layers.test(k.layers)){if(T.isGroup)J=T.renderOrder;else if(T.isLOD)T.autoUpdate===!0&&T.update(k);else if(T.isLightProbeGrid)w.pushLightProbeGrid(T);else if(T.isLight)w.pushLight(T),T.castShadow&&w.pushShadow(T);else if(T.isSprite){if(!T.frustumCulled||T.intersectsFrustum(Ue)){q&&St.setFromMatrixPosition(T.matrixWorld).applyMatrix4(Be);const Ce=ie.update(T),be=T.material;be.visible&&y.push(T,Ce,be,J,St.z,null,k)}}else if((T.isMesh||T.isLine||T.isPoints)&&(!T.frustumCulled||T.intersectsFrustum(Ue))){const Ce=ie.update(T),be=T.material;if(q&&(T.boundingSphere!==void 0?(T.boundingSphere===null&&T.computeBoundingSphere(),St.copy(T.boundingSphere.center)):(Ce.boundingSphere===null&&Ce.computeBoundingSphere(),St.copy(Ce.boundingSphere.center)),St.applyMatrix4(T.matrixWorld).applyMatrix4(Be)),Array.isArray(be)){const De=Ce.groups;for(let Ne=0,$e=De.length;Ne<$e;Ne++){const Je=De[Ne],Le=be[Je.materialIndex];Le&&Le.visible&&y.push(T,Ce,Le,J,St.z,Je,k)}}else be.visible&&y.push(T,Ce,be,J,St.z,null,k)}}const Te=T.children;for(let Ce=0,be=Te.length;Ce<be;Ce++)Nt(Te[Ce],k,J,q)}function Pt(T,k,J,q){const{opaque:$,transmissive:Te,transparent:Ce}=T;w.setupLightsView(J),Me===!0&&Se.setGlobalState(C.clippingPlanes,J),q&&v.viewport(ee.copy(q)),$.length>0&&Qt($,k,J),Te.length>0&&Qt(Te,k,J),Ce.length>0&&Qt(Ce,k,J),v.buffers.depth.setTest(!0),v.buffers.depth.setMask(!0),v.buffers.color.setMask(!0),v.setPolygonOffset(!1)}function ss(T,k,J,q){if((J.isScene===!0?J.overrideMaterial:null)!==null)return;if(w.state.transmissionRenderTarget[q.id]===void 0){const Le=rt.has("EXT_color_buffer_half_float")||rt.has("EXT_color_buffer_float");w.state.transmissionRenderTarget[q.id]=new gn(1,1,{generateMipmaps:!0,type:Le?yn:Vn,minFilter:Or,samples:Math.max(4,R.samples),stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:et.workingColorSpace})}const Te=w.state.transmissionRenderTarget[q.id],Ce=q.viewport||ee;Te.setSize(Ce.z*C.transmissionResolutionScale,Ce.w*C.transmissionResolutionScale);const be=C.getRenderTarget(),De=C.getActiveCubeFace(),Ne=C.getActiveMipmapLevel();C.setRenderTarget(Te),C.getClearColor(Ie),ke=C.getClearAlpha(),ke<1&&C.setClearColor(16777215,.5),C.clear(),ut&&Fe.render(J);const $e=C.toneMapping;C.toneMapping=wi;const Je=q.viewport;if(q.viewport!==void 0&&(q.viewport=void 0),w.setupLightsView(q),Me===!0&&Se.setGlobalState(C.clippingPlanes,q),Qt(T,J,q),H.updateMultisampleRenderTarget(Te),H.updateRenderTargetMipmap(Te),rt.has("WEBGL_multisampled_render_to_texture")===!1){let Le=!1;for(let ht=0,Vt=k.length;ht<Vt;ht++){const Et=k[ht],{object:gt,geometry:ln,material:Ae,group:vn}=Et;if(Ae.side===yi&&gt.layers.test(q.layers)){const st=Ae.side;Ae.side=Pn,Ae.needsUpdate=!0,oh(gt,J,q,ln,Ae,vn),Ae.side=st,Ae.needsUpdate=!0,Le=!0}}Le===!0&&(H.updateMultisampleRenderTarget(Te),H.updateRenderTargetMipmap(Te))}C.setRenderTarget(be,De,Ne),C.setClearColor(Ie,ke),Je!==void 0&&(q.viewport=Je),C.toneMapping=$e}function Qt(T,k,J){const q=k.isScene===!0?k.overrideMaterial:null;for(let $=0,Te=T.length;$<Te;$++){const Ce=T[$],{object:be,geometry:De,group:Ne}=Ce;let $e=Ce.material;$e.allowOverride===!0&&q!==null&&($e=q),be.layers.test(J.layers)&&oh(be,k,J,De,$e,Ne)}}function oh(T,k,J,q,$,Te){N!==null&&$.isNodeMaterial&&N.setObject(T,$),T.onBeforeRender(C,k,J,q,$,Te),T.modelViewMatrix.multiplyMatrices(J.matrixWorldInverse,T.matrixWorld),T.normalMatrix.getNormalMatrix(T.modelViewMatrix),$.onBeforeRender(C,k,J,q,T,Te),$.transparent===!0&&$.side===yi&&$.forceSinglePass===!1?($.side=Pn,$.needsUpdate=!0,C.renderBufferDirect(J,k,q,$,T,Te),$.side=Zr,$.needsUpdate=!0,C.renderBufferDirect(J,k,q,$,T,Te),$.side=yi):C.renderBufferDirect(J,k,q,$,T,Te),T.onAfterRender(C,k,J,q,$,Te)}function ro(T,k,J){k.isScene!==!0&&(k=zt);const q=F.get(T),$=w.state.lights,Te=w.state.shadowsArray,Ce=$.state.version,be=de.getParameters(T,$.state,Te,k,J,w.state.lightProbeGridArray),De=de.getProgramCacheKey(be);let Ne=q.programs;q.environment=T.isMeshStandardMaterial||T.isMeshLambertMaterial||T.isMeshPhongMaterial?k.environment:null,q.fog=k.fog;const $e=T.isMeshStandardMaterial||T.isMeshLambertMaterial&&!T.envMap||T.isMeshPhongMaterial&&!T.envMap;q.envMap=ue.get(T.envMap||q.environment,$e),q.envMapRotation=q.environment!==null&&T.envMap===null?k.environmentRotation:T.envMapRotation,Ne===void 0&&(T.addEventListener("dispose",Re),Ne=new Map,q.programs=Ne);let Je=Ne.get(De);if(Je!==void 0){if(q.currentProgram===Je&&q.lightsStateVersion===Ce)return ch(T,be),Je}else be.uniforms=de.getUniforms(T),N!==null&&T.isNodeMaterial&&N.build(T,J,be),T.onBeforeCompile(be,C),Je=de.acquireProgram(be,De),Ne.set(De,Je),q.uniforms=be.uniforms;const Le=q.uniforms;return(!T.isShaderMaterial&&!T.isRawShaderMaterial||T.clipping===!0)&&(Le.clippingPlanes=Se.uniform),ch(T,be),q.needsLights=O_(T),q.lightsStateVersion=Ce,q.needsLights&&(Le.ambientLightColor.value=$.state.ambient,Le.lightProbe.value=$.state.probe,Le.sunLights.value=$.state.sun,Le.sunLightShadows.value=$.state.sunShadow,Le.directionalLights.value=$.state.directional,Le.directionalLightShadows.value=$.state.directionalShadow,Le.spotLights.value=$.state.spot,Le.spotLightShadows.value=$.state.spotShadow,Le.rectAreaLights.value=$.state.rectArea,Le.ltc_1.value=$.state.rectAreaLTC1,Le.ltc_2.value=$.state.rectAreaLTC2,Le.pointLights.value=$.state.point,Le.pointLightShadows.value=$.state.pointShadow,Le.hemisphereLights.value=$.state.hemi,Le.sunShadowMatrix.value=$.state.sunShadowMatrix,Le.sunShadowCascade.value=$.state.sunShadowCascade,Le.directionalShadowMatrix.value=$.state.directionalShadowMatrix,Le.spotLightMatrix.value=$.state.spotLightMatrix,Le.spotLightMap.value=$.state.spotLightMap,Le.pointShadowMatrix.value=$.state.pointShadowMatrix),q.lightProbeGrid=w.state.lightProbeGridArray.length>0,q.currentProgram=Je,q.uniformsList=null,Je}function lh(T){if(T.uniformsList===null){const k=T.currentProgram.getUniforms();T.uniformsList=Jo.seqWithValue(k.seq,T.uniforms)}return T.uniformsList}function ch(T,k){const J=F.get(T);J.outputColorSpace=k.outputColorSpace,J.batching=k.batching,J.batchingColor=k.batchingColor,J.instancing=k.instancing,J.instancingColor=k.instancingColor,J.instancingMorph=k.instancingMorph,J.skinning=k.skinning,J.morphTargets=k.morphTargets,J.morphNormals=k.morphNormals,J.morphColors=k.morphColors,J.morphTargetsCount=k.morphTargetsCount,J.numClippingPlanes=k.numClippingPlanes,J.numIntersection=k.numClipIntersection,J.vertexAlphas=k.vertexAlphas,J.vertexTangents=k.vertexTangents,J.toneMapping=k.toneMapping}function U_(T,k){if(T.length===0)return null;if(T.length===1)return T[0].texture!==null?T[0]:null;S.setFromMatrixPosition(k.matrixWorld);for(let J=0,q=T.length;J<q;J++){const $=T[J];if($.texture!==null&&$.boundingBox.containsPoint(S))return $}return null}function N_(T,k,J,q,$){k.isScene!==!0&&(k=zt),H.resetTextureUnits();const Te=k.fog,Ce=q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial?k.environment:null,be=se===null?C.outputColorSpace:se.isXRRenderTarget===!0?se.texture.colorSpace:et.workingColorSpace,De=q.isMeshStandardMaterial||q.isMeshLambertMaterial&&!q.envMap||q.isMeshPhongMaterial&&!q.envMap,Ne=ue.get(q.envMap||Ce,De),$e=q.vertexColors===!0&&!!J.attributes.color&&J.attributes.color.itemSize===4,Je=!!J.attributes.tangent&&(!!q.normalMap||q.anisotropy>0),Le=!!J.morphAttributes.position,ht=!!J.morphAttributes.normal,Vt=!!J.morphAttributes.color;let Et=wi;q.toneMapped&&(se===null||se.isXRRenderTarget===!0)&&(Et=C.toneMapping);const gt=J.morphAttributes.position||J.morphAttributes.normal||J.morphAttributes.color,ln=gt!==void 0?gt.length:0,Ae=F.get(q),vn=w.state.lights;if(Me===!0&&(Qe===!0||T!==oe)){const yt=T===oe&&q.id===Q;Se.setState(q,T,yt)}let st=!1;q.version===Ae.__version?(Ae.needsLights&&Ae.lightsStateVersion!==vn.state.version||Ae.outputColorSpace!==be||$.isBatchedMesh&&Ae.batching===!1||!$.isBatchedMesh&&Ae.batching===!0||$.isBatchedMesh&&Ae.batchingColor===!0&&$._colorsTexture===null||$.isBatchedMesh&&Ae.batchingColor===!1&&$._colorsTexture!==null||$.isInstancedMesh&&Ae.instancing===!1||!$.isInstancedMesh&&Ae.instancing===!0||$.isSkinnedMesh&&Ae.skinning===!1||!$.isSkinnedMesh&&Ae.skinning===!0||$.isInstancedMesh&&Ae.instancingColor===!0&&$.instanceColor===null||$.isInstancedMesh&&Ae.instancingColor===!1&&$.instanceColor!==null||$.isInstancedMesh&&Ae.instancingMorph===!0&&$.morphTexture===null||$.isInstancedMesh&&Ae.instancingMorph===!1&&$.morphTexture!==null||Ae.envMap!==Ne||q.fog===!0&&Ae.fog!==Te||Ae.numClippingPlanes!==void 0&&(Ae.numClippingPlanes!==Se.numPlanes||Ae.numIntersection!==Se.numIntersection)||Ae.vertexAlphas!==$e||Ae.vertexTangents!==Je||Ae.morphTargets!==Le||Ae.morphNormals!==ht||Ae.morphColors!==Vt||Ae.toneMapping!==Et||Ae.morphTargetsCount!==ln||!!Ae.lightProbeGrid!=w.state.lightProbeGridArray.length>0)&&(st=!0):(st=!0,Ae.__version=q.version);let Zn=Ae.currentProgram;st===!0&&(Zn=ro(q,k,$),N&&q.isNodeMaterial&&N.onUpdateProgram(q,Zn,Ae));let pi=!1,Zi=!1,as=!1;const _t=Zn.getUniforms(),Ft=Ae.uniforms;if(v.useProgram(Zn.program)&&(pi=!0,Zi=!0,as=!0),q.id!==Q&&(Q=q.id,Zi=!0),Ae.needsLights){const yt=U_(w.state.lightProbeGridArray,$);Ae.lightProbeGrid!==yt&&(Ae.lightProbeGrid=yt,Zi=!0)}if(pi||oe!==T){v.buffers.depth.getReversed()&&T.reversedDepth!==!0&&(T._reversedDepth=!0,T.updateProjectionMatrix()),_t.setValue(z,"projectionMatrix",T.projectionMatrix),_t.setValue(z,"viewMatrix",T.matrixWorldInverse);const Qi=_t.map.cameraPosition;Qi!==void 0&&Qi.setValue(z,Ye.setFromMatrixPosition(T.matrixWorld)),R.logarithmicDepthBuffer&&_t.setValue(z,"logDepthBufFC",2/(Math.log(T.far+1)/Math.LN2)),(q.isMeshPhongMaterial||q.isMeshToonMaterial||q.isMeshLambertMaterial||q.isMeshBasicMaterial||q.isMeshStandardMaterial||q.isShaderMaterial)&&_t.setValue(z,"isOrthographic",T.isOrthographicCamera===!0),oe!==T&&(oe=T,Zi=!0,as=!0)}if(Ae.needsLights&&(vn.state.sunShadowMap.length>0&&_t.setValue(z,"sunShadowMap",vn.state.sunShadowMap,H),vn.state.directionalShadowMap.length>0&&_t.setValue(z,"directionalShadowMap",vn.state.directionalShadowMap,H),vn.state.spotShadowMap.length>0&&_t.setValue(z,"spotShadowMap",vn.state.spotShadowMap,H),vn.state.pointShadowMap.length>0&&_t.setValue(z,"pointShadowMap",vn.state.pointShadowMap,H)),$.isSkinnedMesh){_t.setOptional(z,$,"bindMatrix"),_t.setOptional(z,$,"bindMatrixInverse");const yt=$.skeleton;yt&&(yt.boneTexture===null&&yt.computeBoneTexture(),_t.setValue(z,"boneTexture",yt.boneTexture,H))}$.isBatchedMesh&&(_t.setOptional(z,$,"batchingTexture"),_t.setValue(z,"batchingTexture",$._matricesTexture,H),_t.setOptional(z,$,"batchingIdTexture"),_t.setValue(z,"batchingIdTexture",$._indirectTexture,H),_t.setOptional(z,$,"batchingColorTexture"),$._colorsTexture!==null&&_t.setValue(z,"batchingColorTexture",$._colorsTexture,H));const Ji=J.morphAttributes;if((Ji.position!==void 0||Ji.normal!==void 0||Ji.color!==void 0)&&B.update($,J,Zn),(Zi||Ae.receiveShadow!==$.receiveShadow)&&(Ae.receiveShadow=$.receiveShadow,_t.setValue(z,"receiveShadow",$.receiveShadow)),(q.isMeshStandardMaterial||q.isMeshLambertMaterial||q.isMeshPhongMaterial)&&q.envMap===null&&k.environment!==null&&(Ft.envMapIntensity.value=k.environmentIntensity),Ft.dfgLUT!==void 0&&(Ft.dfgLUT.value=nT()),Zi){if(_t.setValue(z,"toneMappingExposure",C.toneMappingExposure),Ae.needsLights&&F_(Ft,as),Te&&q.fog===!0&&Ee.refreshFogUniforms(Ft,Te),Ee.refreshMaterialUniforms(Ft,q,te,j,w.state.transmissionRenderTarget[T.id]),Ae.needsLights&&Ae.lightProbeGrid){const yt=Ae.lightProbeGrid;Ft.probesSH.value=yt.texture,Ft.probesMin.value.copy(yt.boundingBox.min),Ft.probesMax.value.copy(yt.boundingBox.max),Ft.probesResolution.value.copy(yt.resolution)}Jo.upload(z,lh(Ae),Ft,H)}if(q.isShaderMaterial&&q.uniformsNeedUpdate===!0&&(Jo.upload(z,lh(Ae),Ft,H),q.uniformsNeedUpdate=!1),q.isSpriteMaterial&&_t.setValue(z,"center",$.center),_t.setValue(z,"modelViewMatrix",$.modelViewMatrix),_t.setValue(z,"normalMatrix",$.normalMatrix),_t.setValue(z,"modelMatrix",$.matrixWorld),q.uniformsGroups!==void 0){const yt=q.uniformsGroups;for(let Qi=0,os=yt.length;Qi<os;Qi++){const fh=yt[Qi];O.update(fh,Zn),O.bind(fh,Zn)}}return Zn}function F_(T,k){T.ambientLightColor.needsUpdate=k,T.lightProbe.needsUpdate=k,T.sunLights.needsUpdate=k,T.sunLightShadows.needsUpdate=k,T.directionalLights.needsUpdate=k,T.directionalLightShadows.needsUpdate=k,T.pointLights.needsUpdate=k,T.pointLightShadows.needsUpdate=k,T.spotLights.needsUpdate=k,T.spotLightShadows.needsUpdate=k,T.rectAreaLights.needsUpdate=k,T.hemisphereLights.needsUpdate=k}function O_(T){return T.isMeshLambertMaterial||T.isMeshToonMaterial||T.isMeshPhongMaterial||T.isMeshStandardMaterial||T.isShadowMaterial||T.isShaderMaterial&&T.lights===!0}this.getActiveCubeFace=function(){return W},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return se},this.setRenderTargetTextures=function(T,k,J){const q=F.get(T);q.__autoAllocateDepthBuffer=T.resolveDepthBuffer===!1,q.__autoAllocateDepthBuffer===!1&&(q.__useRenderToTexture=!1),F.get(T.texture).__webglTexture=k,F.get(T.depthTexture).__webglTexture=q.__autoAllocateDepthBuffer?void 0:J,q.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(T,k){const J=F.get(T);J.__webglFramebuffer=k,J.__useDefaultFramebuffer=k===void 0},this.setRenderTarget=function(T,k=0,J=0){se=T,W=k,Y=J;let q=null,$=!1,Te=!1;if(T){const be=F.get(T);if(be.__useDefaultFramebuffer!==void 0){v.bindFramebuffer(z.FRAMEBUFFER,be.__webglFramebuffer),ee.copy(T.viewport),_e.copy(T.scissor),ge=T.scissorTest,v.viewport(ee),v.scissor(_e),v.setScissorTest(ge),Q=-1;return}else if(be.__webglFramebuffer===void 0)H.setupRenderTarget(T);else if(be.__hasExternalTextures)H.rebindTextures(T,F.get(T.texture).__webglTexture,F.get(T.depthTexture).__webglTexture);else if(T.depthBuffer){const $e=T.depthTexture;if(be.__boundDepthTexture!==$e){if($e!==null&&F.has($e)&&(T.width!==$e.image.width||T.height!==$e.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");H.setupDepthRenderbuffer(T)}}const De=T.texture;(De.isData3DTexture||De.isDataArrayTexture||De.isCompressedArrayTexture)&&(Te=!0);const Ne=F.get(T).__webglFramebuffer;T.isWebGLCubeRenderTarget?(Array.isArray(Ne[k])?q=Ne[k][J]:q=Ne[k],$=!0):T.samples>0&&H.useMultisampledRTT(T)===!1?q=F.get(T).__webglMultisampledFramebuffer:Array.isArray(Ne)?q=Ne[J]:q=Ne,ee.copy(T.viewport),_e.copy(T.scissor),ge=T.scissorTest}else ee.copy(xe).multiplyScalar(te).floor(),_e.copy(Ve).multiplyScalar(te).floor(),ge=mt;if(J!==0&&(q=U),v.bindFramebuffer(z.FRAMEBUFFER,q)&&v.drawBuffers(T,q),v.viewport(ee),v.scissor(_e),v.setScissorTest(ge),$){const be=F.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_CUBE_MAP_POSITIVE_X+k,be.__webglTexture,J)}else if(Te){const be=k;for(let De=0;De<T.textures.length;De++){const Ne=F.get(T.textures[De]);z.framebufferTextureLayer(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0+De,Ne.__webglTexture,J,be)}}else if(T!==null&&J!==0){const be=F.get(T.texture);z.framebufferTexture2D(z.FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,be.__webglTexture,J)}Q=-1};function uh(T){const k=F.get(T);return(k.__readFormat!==T.format||k.__readType!==T.type)&&(k.__readFormat=T.format,k.__readType=T.type,k.__formatReadable=R.textureFormatReadable(T.format),k.__typeReadable=R.textureTypeReadable(T.type)),k}this.readRenderTargetPixels=function(T,k,J,q,$,Te,Ce,be=0){if(!(T&&T.isWebGLRenderTarget)){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let De=F.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De){v.bindFramebuffer(z.FRAMEBUFFER,De);try{const Ne=T.textures[be],$e=Ne.format,Je=Ne.type;T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be);const Le=uh(Ne);if(Le.__formatReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Le.__typeReadable===!1){at("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}k>=0&&k<=T.width-q&&J>=0&&J<=T.height-$&&z.readPixels(k,J,q,$,ne.convert($e),ne.convert(Je),Te)}finally{const Ne=se!==null?F.get(se).__webglFramebuffer:null;v.bindFramebuffer(z.FRAMEBUFFER,Ne)}}},this.readRenderTargetPixelsAsync=async function(T,k,J,q,$,Te,Ce,be=0){if(!(T&&T.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let De=F.get(T).__webglFramebuffer;if(T.isWebGLCubeRenderTarget&&Ce!==void 0&&(De=De[Ce]),De)if(k>=0&&k<=T.width-q&&J>=0&&J<=T.height-$){v.bindFramebuffer(z.FRAMEBUFFER,De);const Ne=T.textures[be],$e=Ne.format,Je=Ne.type;T.textures.length>1&&z.readBuffer(z.COLOR_ATTACHMENT0+be);const Le=uh(Ne);if(Le.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Le.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const ht=z.createBuffer();z.bindBuffer(z.PIXEL_PACK_BUFFER,ht),z.bufferData(z.PIXEL_PACK_BUFFER,Te.byteLength,z.STREAM_READ),z.readPixels(k,J,q,$,ne.convert($e),ne.convert(Je),0),z.bindBuffer(z.PIXEL_PACK_BUFFER,null);const Vt=se!==null?F.get(se).__webglFramebuffer:null;v.bindFramebuffer(z.FRAMEBUFFER,Vt);const Et=z.fenceSync(z.SYNC_GPU_COMMANDS_COMPLETE,0);return z.flush(),await xx(z,Et,4),z.bindBuffer(z.PIXEL_PACK_BUFFER,ht),z.getBufferSubData(z.PIXEL_PACK_BUFFER,0,Te),z.bindBuffer(z.PIXEL_PACK_BUFFER,null),z.deleteBuffer(ht),z.deleteSync(Et),Te}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(T,k=null,J=0){const q=Math.pow(2,-J),$=Math.floor(T.image.width*q),Te=Math.floor(T.image.height*q),Ce=k!==null?k.x:0,be=k!==null?k.y:0;H.setTexture2D(T,0),z.copyTexSubImage2D(z.TEXTURE_2D,J,0,0,Ce,be,$,Te),v.unbindTexture()},this.copyTextureToTexture=function(T,k,J=null,q=null,$=0,Te=0){let Ce,be,De,Ne,$e,Je,Le,ht,Vt;const Et=T.isCompressedTexture?T.mipmaps[Te]:T.image;if(J!==null)Ce=J.max.x-J.min.x,be=J.max.y-J.min.y,De=J.isBox3?J.max.z-J.min.z:1,Ne=J.min.x,$e=J.min.y,Je=J.isBox3?J.min.z:0;else{const Ft=Math.pow(2,-$);Ce=Math.floor(Et.width*Ft),be=Math.floor(Et.height*Ft),T.isDataArrayTexture?De=Et.depth:T.isData3DTexture?De=Math.floor(Et.depth*Ft):De=1,Ne=0,$e=0,Je=0}q!==null?(Le=q.x,ht=q.y,Vt=q.z):(Le=0,ht=0,Vt=0);const gt=ne.convert(k.format),ln=ne.convert(k.type);let Ae;k.isData3DTexture?(H.setTexture3D(k,0),Ae=z.TEXTURE_3D):k.isDataArrayTexture||k.isCompressedArrayTexture?(H.setTexture2DArray(k,0),Ae=z.TEXTURE_2D_ARRAY):(H.setTexture2D(k,0),Ae=z.TEXTURE_2D),v.activeTexture(z.TEXTURE0),v.pixelStorei(z.UNPACK_FLIP_Y_WEBGL,k.flipY),v.pixelStorei(z.UNPACK_PREMULTIPLY_ALPHA_WEBGL,k.premultiplyAlpha),v.pixelStorei(z.UNPACK_ALIGNMENT,k.unpackAlignment);const vn=v.getParameter(z.UNPACK_ROW_LENGTH),st=v.getParameter(z.UNPACK_IMAGE_HEIGHT),Zn=v.getParameter(z.UNPACK_SKIP_PIXELS),pi=v.getParameter(z.UNPACK_SKIP_ROWS),Zi=v.getParameter(z.UNPACK_SKIP_IMAGES);v.pixelStorei(z.UNPACK_ROW_LENGTH,Et.width),v.pixelStorei(z.UNPACK_IMAGE_HEIGHT,Et.height),v.pixelStorei(z.UNPACK_SKIP_PIXELS,Ne),v.pixelStorei(z.UNPACK_SKIP_ROWS,$e),v.pixelStorei(z.UNPACK_SKIP_IMAGES,Je);const as=T.isDataArrayTexture||T.isData3DTexture,_t=k.isDataArrayTexture||k.isData3DTexture;if(T.isDepthTexture){const Ft=F.get(T),Ji=F.get(k),yt=F.get(Ft.__renderTarget),Qi=F.get(Ji.__renderTarget);v.bindFramebuffer(z.READ_FRAMEBUFFER,yt.__webglFramebuffer),v.bindFramebuffer(z.DRAW_FRAMEBUFFER,Qi.__webglFramebuffer);for(let os=0;os<De;os++)as&&(z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,F.get(T).__webglTexture,$,Je+os),z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,F.get(k).__webglTexture,Te,Vt+os)),z.blitFramebuffer(Ne,$e,Ce,be,Le,ht,Ce,be,z.DEPTH_BUFFER_BIT,z.NEAREST);v.bindFramebuffer(z.READ_FRAMEBUFFER,null),v.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else if($!==0||T.isRenderTargetTexture||F.has(T)){const Ft=F.get(T),Ji=F.get(k);v.bindFramebuffer(z.READ_FRAMEBUFFER,I),v.bindFramebuffer(z.DRAW_FRAMEBUFFER,G);for(let yt=0;yt<De;yt++)as?z.framebufferTextureLayer(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ft.__webglTexture,$,Je+yt):z.framebufferTexture2D(z.READ_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ft.__webglTexture,$),_t?z.framebufferTextureLayer(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,Ji.__webglTexture,Te,Vt+yt):z.framebufferTexture2D(z.DRAW_FRAMEBUFFER,z.COLOR_ATTACHMENT0,z.TEXTURE_2D,Ji.__webglTexture,Te),$!==0?z.blitFramebuffer(Ne,$e,Ce,be,Le,ht,Ce,be,z.COLOR_BUFFER_BIT,z.NEAREST):_t?z.copyTexSubImage3D(Ae,Te,Le,ht,Vt+yt,Ne,$e,Ce,be):z.copyTexSubImage2D(Ae,Te,Le,ht,Ne,$e,Ce,be);v.bindFramebuffer(z.READ_FRAMEBUFFER,null),v.bindFramebuffer(z.DRAW_FRAMEBUFFER,null)}else _t?T.isDataTexture||T.isData3DTexture?z.texSubImage3D(Ae,Te,Le,ht,Vt,Ce,be,De,gt,ln,Et.data):k.isCompressedArrayTexture?z.compressedTexSubImage3D(Ae,Te,Le,ht,Vt,Ce,be,De,gt,Et.data):z.texSubImage3D(Ae,Te,Le,ht,Vt,Ce,be,De,gt,ln,Et):T.isDataTexture?z.texSubImage2D(z.TEXTURE_2D,Te,Le,ht,Ce,be,gt,ln,Et.data):T.isCompressedTexture?z.compressedTexSubImage2D(z.TEXTURE_2D,Te,Le,ht,Et.width,Et.height,gt,Et.data):z.texSubImage2D(z.TEXTURE_2D,Te,Le,ht,Ce,be,gt,ln,Et);v.pixelStorei(z.UNPACK_ROW_LENGTH,vn),v.pixelStorei(z.UNPACK_IMAGE_HEIGHT,st),v.pixelStorei(z.UNPACK_SKIP_PIXELS,Zn),v.pixelStorei(z.UNPACK_SKIP_ROWS,pi),v.pixelStorei(z.UNPACK_SKIP_IMAGES,Zi),Te===0&&k.generateMipmaps&&z.generateMipmap(Ae),v.unbindTexture()},this.initRenderTarget=function(T){F.get(T).__webglFramebuffer===void 0&&H.setupRenderTarget(T)},this.initTexture=function(T){T.isCubeTexture?H.setTextureCube(T,0):T.isData3DTexture?H.setTexture3D(T,0):T.isDataArrayTexture||T.isCompressedArrayTexture?H.setTexture2DArray(T,0):H.setTexture2D(T,0),v.unbindTexture()},this.resetState=function(){W=0,Y=0,se=null,v.reset(),P.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ti}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const t=this.getContext();t.drawingBufferColorSpace=et._getDrawingBufferColorSpace(e),t.unpackColorSpace=et._getUnpackColorSpace()}}const Ks=[{n:"Purple club",h:r=>[285+Math.sin(r)*15,100]},{n:"Red rave",h:r=>[355,r%3===0?0:100]},{n:"Ice blue",h:r=>[190+r*4,100]},{n:"Warm",h:r=>[22+r*3,100]}],hn={idx:0,manual:-1},ai=(r,e,t=60)=>{const n=Ks[hn.idx].h(r);return`hsla(${n[0]},${n[1]}%,${n[1]?t:92}%,${Math.max(0,e)})`},rT=new Xe,gi=(r,e=.55)=>{const t=Ks[hn.idx].h(r);return rT.setHSL((t[0]%360+360)%360/360,t[1]/100,t[1]?e:.92)},ot={k:0,s:0,h:0,e:0,sl:new Array(8).fill(0)},ae={phase:"chill",build:0,kP:0,sP:0,bP:0,I:.6,ph:0,pat:1,jerk:0,kc:0,dEvt:-99,shot:0,shake:0,punch:0,camLock:-1,reduce:typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion: reduce)").matches},io={drop:()=>{},shots:5},jf=5;function p_(r){ae.kP=1,ae.jerk=1,ae.kc++,ae.shake=.07,r&&(ae.kc%16===0&&(ae.pat=(ae.pat+1+Math.floor(Math.random()*3))%jf),ae.kc%24===0&&ae.camLock<0&&(ae.shot=Math.floor(Math.random()*io.shots)))}function sT(r){ae.bP=1,r%16===0&&(ae.pat=(ae.pat+1+Math.floor(Math.random()*3))%jf),r%32===0&&ae.camLock<0&&(ae.shot=Math.floor(Math.random()*io.shots))}function m_(){ae.phase="drop",ae.build=0,hn.manual<0&&(hn.idx=(hn.idx+1)%Ks.length),ae.pat=(ae.pat+2)%jf,ae.camLock<0&&(ae.shot=3),ae.shake=.3,io.drop()}function aT(r){ae.kP*=.88,ae.sP*=.86,ae.bP*=.9;const e=ae.phase==="drop"?1.25:ae.phase==="break"?.3:ae.phase==="build"?.75+.35*ae.build:.65;ae.I+=(e-ae.I)*Math.min(1,r*3),ae.ph+=r*(ae.phase==="build"?1+ae.build*2.2:ae.phase==="drop"?1.7:ae.phase==="break"?.3:.8)*(.7+ot.e*.6)}class oT{canvas=document.createElement("canvas");app=null;ready=!1;constructor(){this.canvas.width=960,this.canvas.height=540,this.canvas.style.cssText="position:fixed;left:-10000px;top:0;width:960px;height:540px;pointer-events:none",document.body.appendChild(this.canvas)}async load(e){this.dispose(),this.canvas.getContext("webgl2",{preserveDrawingBuffer:!0,antialias:!0,alpha:!0});const{Application:t}=await fp(async()=>{const{Application:i}=await import("./runtime-updater-KWRKWDYN-DKHOS4HO.js").then(s=>s.gV);return{Application:i}},[]),n=new t(this.canvas);await n.load(e),this.app=n,this.ready=!0}feed(){const e=this.app;if(!e)return;const t={bass:ot.sl[0],mid:ot.sl[4],high:ot.h,energy:ot.e,kick:ae.kP,beat:ae.bP,build:ae.build,drop:ae.phase==="drop"?1:0};for(const n in t)try{e.setVariable(n,t[n])}catch{}}dispose(){try{this.app?.dispose?.()}catch{}this.app=null,this.ready=!1}}const Oo=["goom","spectrum","title","image","lyrics","spline"];class lT{constructor(e,t){this.clock=e,this.dur=t,this.tex=new jm(this.gc),this.tex.colorSpace=On,this.gx.fillStyle="#000",this.gx.fillRect(0,0,this.GW,this.GH)}clock;dur;GW=480;GH=270;mode="goom";img=null;lyrics=null;spline=null;title="Demo set";tex;gc=this.mk();bc=this.mk();gx=this.gc.getContext("2d");bx=this.bc.getContext("2d");rotDir=1;gfl=0;lyrI=-2;lyrAt=0;mk(){const e=document.createElement("canvas");return e.width=this.GW,e.height=this.GH,e}available(e){return e==="image"?!!this.img:e==="lyrics"?!!this.lyrics:e==="spline"?!!this.spline?.ready:!0}next(){let e=Oo.indexOf(this.mode);do e=(e+1)%Oo.length;while(!this.available(Oo[e]));return this.mode=Oo[e]}setLyrics(e){this.lyrics=e,this.lyrI=-2,e&&(this.mode="lyrics")}onDrop(){this.gfl=ae.reduce?.08:.35}draw(e){if(this.mode==="goom")this.goom(e);else{const t=this.gx,n=this.GW,i=this.GH;if(t.globalCompositeOperation="source-over",t.fillStyle="#050208",t.fillRect(0,0,n,i),t.globalCompositeOperation="lighter",this.mode==="spectrum")this.spectrum(e);else if(this.mode==="title")t.fillStyle=ai(2,.9,75),t.font=`bold ${34+ae.kP*8}px ui-sans-serif,system-ui,sans-serif`,t.textAlign="center",t.textBaseline="middle",t.shadowColor=ai(2,1,55),t.shadowBlur=24,t.fillText(this.title.split(" · ")[0].slice(0,28),n/2,i/2),t.shadowBlur=0;else if(this.mode==="image"&&this.img){const s=1.04+ae.kP*.06,a=this.img.naturalWidth/this.img.naturalHeight,o=a>n/i?i*a:n,c=a>n/i?i:n/a;t.globalCompositeOperation="source-over",t.drawImage(this.img,n/2-o*s/2,i/2-c*s/2,o*s,c*s),t.globalCompositeOperation="lighter",t.fillStyle=ai(1,.05+.15*ae.kP,60),t.fillRect(0,0,n,i)}else this.mode==="lyrics"&&this.lyrics?this.lyricsFrame(e):this.mode==="spline"&&this.spline?.ready&&(this.spline.feed(),t.globalCompositeOperation="source-over",t.drawImage(this.spline.canvas,0,0,n,i));t.globalCompositeOperation="source-over"}this.tex.needsUpdate=!0}spectrum(e){const t=this.gx,n=48,i=this.GW/n;for(let s=0;s<n;s++){const a=s/n*7,o=Math.floor(a),c=ot.sl[o]*(1-(a-o))+ot.sl[Math.min(7,o+1)]*(a-o),l=this.GH*.9*Math.min(1,c*(.7+ae.kP*.4)+.04*Math.sin(e*3+s));t.fillStyle=ai(s,.85,55),t.fillRect(s*i+2,this.GH-l,i-4,l),t.fillStyle=ai(s,.25,60),t.fillRect(s*i+2,0,i-4,l*.5)}}lyricsFrame(e){const t=this.lyrics,n=this.gx,i=this.GW,s=this.GH,a=this.clock();let o=-1;if(t[0].t===null){const f=this.dur()||t.length*4;o=Math.max(-1,Math.min(t.length-1,Math.floor(a/(f/t.length))))}else for(let f=0;f<t.length&&t[f].t<=a;f++)o=f;o!==this.lyrI&&(this.lyrI=o,this.lyrAt=e);const c=Math.min(1,(e-this.lyrAt)*5);n.textAlign="center",n.textBaseline="middle";const l=(f,d,h,u,g)=>{if(f<0||f>=t.length)return;const _=()=>`600 ${h}px ui-sans-serif,system-ui,sans-serif`;n.font=_();const m=t[f].s;for(;n.measureText(m).width>i-40&&h>12;)h-=2,n.font=_();n.shadowColor=ai(2,1,55),n.shadowBlur=g,n.fillStyle=ai(2,u,80),n.fillText(m,i/2,d)};l(o-2,s*.18,18,.18,0),l(o-1,s*.34,22,.35,0),l(o,s*.52+(1-c)*12,36+ae.kP*6,.95*c,22),l(o+1,s*.72,22,.4,0),l(o+2,s*.86,18,.2,0),n.shadowBlur=0}goom(e){const{gx:t,bx:n,GW:i,GH:s}=this;n.drawImage(this.gc,0,0),ae.kc%8===0&&ae.kP>.95&&(this.rotDir*=-1),t.globalCompositeOperation="source-over",t.fillStyle="#000",t.fillRect(0,0,i,s),t.save(),t.translate(i/2,s/2),t.rotate(this.rotDir*(.004+ae.sP*.03));const a=1.012+ae.kP*.05+ae.build*.02;t.scale(a,a),t.translate(-i/2,-s/2),t.globalAlpha=.9,t.drawImage(this.bc,0,0),t.restore(),t.globalAlpha=1,t.globalCompositeOperation="lighter",t.lineWidth=2,t.strokeStyle=ai(2,.9,65),t.beginPath();for(let o=0;o<=6.3;o+=.06){let c=55+ae.kP*25;for(let d=0;d<8;d++)c+=ot.sl[d]*14*Math.sin(o*(d+2)+e*(d+1)*.8);const l=i/2+Math.cos(o)*c*1.3,f=s/2+Math.sin(o)*c;o?t.lineTo(l,f):t.moveTo(l,f)}t.stroke();for(let o=0;o<2;o++){t.strokeStyle=ai(o*3+1,.8,60),t.beginPath();for(let c=0;c<=i;c+=6){let l=s*(.25+o*.5);for(let f=0;f<8;f++)l+=ot.sl[f]*10*Math.sin(c*.02*(f+1)+e*(2+f)*(o?-1:1));c?t.lineTo(c,l):t.moveTo(c,l)}t.stroke()}if(ae.kP>.9){t.strokeStyle=ai(4,.9,85);for(let o=0;o<22;o++){const c=Math.random()*6.3,l=20+Math.random()*30,f=l+40+Math.random()*90*ae.I;t.beginPath(),t.moveTo(i/2+Math.cos(c)*l,s/2+Math.sin(c)*l),t.lineTo(i/2+Math.cos(c)*f,s/2+Math.sin(c)*f),t.stroke()}}t.fillStyle=ai(5,.9,85);for(let o=0;o<ot.h*24;o++)t.fillRect(Math.random()*i,Math.random()*s,2,2);this.gfl>0&&(t.fillStyle=`rgba(255,255,255,${this.gfl})`,t.fillRect(0,0,i,s),this.gfl*=.85),t.globalCompositeOperation="source-over"}}const Qo={name:"CopyShader",uniforms:{tDiffuse:{value:null},opacity:{value:1}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform float opacity;

		uniform sampler2D tDiffuse;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );
			gl_FragColor = opacity * texel;


		}`};class ea{constructor(){this.isPass=!0,this.enabled=!0,this.needsSwap=!0,this.clear=!1,this.renderToScreen=!1}setSize(){}render(){console.error("THREE.Pass: .render() must be implemented in derived pass.")}dispose(){}}const cT=new Qf(-1,1,1,-1,0,1);class uT extends tn{constructor(){super(),this.setAttribute("position",new kt([-1,3,0,-1,-1,0,3,-1,0],3)),this.setAttribute("uv",new kt([0,2,0,0,2,0],2))}}const fT=new uT;class eh{constructor(e){this._mesh=new bt(fT,e)}dispose(){this._mesh.geometry.dispose()}render(e){e.render(this._mesh,cT)}get material(){return this._mesh.material}set material(e){this._mesh.material=e}}class __ extends ea{constructor(e,t="tDiffuse"){super(),this.textureID=t,this.uniforms=null,this.material=null,e instanceof en?(this.uniforms=e.uniforms,this.material=e):e&&(this.uniforms=$s.clone(e.uniforms),this.material=new en({name:e.name!==void 0?e.name:"unspecified",defines:Object.assign({},e.defines),uniforms:this.uniforms,vertexShader:e.vertexShader,fragmentShader:e.fragmentShader})),this._fsQuad=new eh(this.material)}render(e,t,n){this.uniforms[this.textureID]&&(this.uniforms[this.textureID].value=n.texture),this._fsQuad.material=this.material,this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class jd extends ea{constructor(e,t){super(),this.scene=e,this.camera=t,this.clear=!0,this.needsSwap=!1,this.inverse=!1}render(e,t,n){const i=e.getContext(),s=e.state;s.buffers.color.setMask(!1),s.buffers.depth.setMask(!1),s.buffers.color.setLocked(!0),s.buffers.depth.setLocked(!0);let a,o;this.inverse?(a=0,o=1):(a=1,o=0),s.buffers.stencil.setTest(!0),s.buffers.stencil.setOp(i.REPLACE,i.REPLACE,i.REPLACE),s.buffers.stencil.setFunc(i.ALWAYS,a,4294967295),s.buffers.stencil.setClear(o),s.buffers.stencil.setLocked(!0),e.setRenderTarget(n),this.clear&&e.clear(),e.render(this.scene,this.camera),e.setRenderTarget(t),this.clear&&e.clear(),e.render(this.scene,this.camera),s.buffers.color.setLocked(!1),s.buffers.depth.setLocked(!1),s.buffers.color.setMask(!0),s.buffers.depth.setMask(!0),s.buffers.stencil.setLocked(!1),s.buffers.stencil.setFunc(i.EQUAL,1,4294967295),s.buffers.stencil.setOp(i.KEEP,i.KEEP,i.KEEP),s.buffers.stencil.setLocked(!0)}}class hT extends ea{constructor(){super(),this.needsSwap=!1}render(e){e.state.buffers.stencil.setLocked(!1),e.state.buffers.stencil.setTest(!1)}}class dT{constructor(e,t){if(this.renderer=e,this._pixelRatio=e.getPixelRatio(),t===void 0){const n=e.getSize(new He);this._width=n.width,this._height=n.height,t=new gn(this._width*this._pixelRatio,this._height*this._pixelRatio,{type:yn}),t.texture.name="EffectComposer.rt1"}else this._width=t.width,this._height=t.height;this.renderTarget1=t,this.renderTarget2=t.clone(),this.renderTarget2.texture.name="EffectComposer.rt2",this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2,this.renderToScreen=!0,this.passes=[],this.copyPass=new __(Qo),this.copyPass.material.blending=Ei,this.timer=new iv}swapBuffers(){const e=this.readBuffer;this.readBuffer=this.writeBuffer,this.writeBuffer=e}addPass(e){this.passes.push(e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}insertPass(e,t){this.passes.splice(t,0,e),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}removePass(e){const t=this.passes.indexOf(e);t!==-1&&this.passes.splice(t,1)}isLastEnabledPass(e){for(let t=e+1;t<this.passes.length;t++)if(this.passes[t].enabled)return!1;return!0}render(e){this.timer.update(),e===void 0&&(e=this.timer.getDelta());const t=this.renderer.getRenderTarget();let n=!1;for(let i=0,s=this.passes.length;i<s;i++){const a=this.passes[i];if(a.enabled!==!1){if(a.renderToScreen=this.renderToScreen&&this.isLastEnabledPass(i),a.render(this.renderer,this.writeBuffer,this.readBuffer,e,n),a.needsSwap){if(n){const o=this.renderer.getContext(),c=this.renderer.state.buffers.stencil;c.setFunc(o.NOTEQUAL,1,4294967295),this.copyPass.render(this.renderer,this.writeBuffer,this.readBuffer,e),c.setFunc(o.EQUAL,1,4294967295)}this.swapBuffers()}jd!==void 0&&(a instanceof jd?n=!0:a instanceof hT&&(n=!1))}}this.renderer.setRenderTarget(t)}reset(e){if(e===void 0){const t=this.renderer.getSize(new He);this._pixelRatio=this.renderer.getPixelRatio(),this._width=t.width,this._height=t.height,e=this.renderTarget1.clone(),e.setSize(this._width*this._pixelRatio,this._height*this._pixelRatio)}this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.renderTarget1=e,this.renderTarget2=e.clone(),this.writeBuffer=this.renderTarget1,this.readBuffer=this.renderTarget2}setSize(e,t){this._width=e,this._height=t;const n=this._width*this._pixelRatio,i=this._height*this._pixelRatio;this.renderTarget1.setSize(n,i),this.renderTarget2.setSize(n,i);for(let s=0;s<this.passes.length;s++)this.passes[s].setSize(n,i)}setPixelRatio(e){this._pixelRatio=e,this.setSize(this._width,this._height)}dispose(){this.renderTarget1.dispose(),this.renderTarget2.dispose(),this.copyPass.dispose()}}class pT extends ea{constructor(e,t,n=null,i=null,s=null){super(),this.scene=e,this.camera=t,this.overrideMaterial=n,this.clearColor=i,this.clearAlpha=s,this.clear=!0,this.clearDepth=!1,this.needsSwap=!1,this.isRenderPass=!0,this._oldClearColor=new Xe}render(e,t,n){const i=e.autoClear;e.autoClear=!1;let s,a;this.overrideMaterial!==null&&(a=this.scene.overrideMaterial,this.scene.overrideMaterial=this.overrideMaterial),this.clearColor!==null&&(e.getClearColor(this._oldClearColor),e.setClearColor(this.clearColor,e.getClearAlpha())),this.clearAlpha!==null&&(s=e.getClearAlpha(),e.setClearAlpha(this.clearAlpha)),this.clearDepth==!0&&e.clearDepth(),e.setRenderTarget(this.renderToScreen?null:n),this.clear===!0&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),e.render(this.scene,this.camera),this.clearColor!==null&&e.setClearColor(this._oldClearColor),this.clearAlpha!==null&&e.setClearAlpha(s),this.overrideMaterial!==null&&(this.scene.overrideMaterial=a),e.autoClear=i}}const mT={uniforms:{tDiffuse:{value:null},luminosityThreshold:{value:1},smoothWidth:{value:1},defaultColor:{value:new Xe(0)},defaultOpacity:{value:0}},vertexShader:`

		varying vec2 vUv;

		void main() {

			vUv = uv;

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		uniform sampler2D tDiffuse;
		uniform vec3 defaultColor;
		uniform float defaultOpacity;
		uniform float luminosityThreshold;
		uniform float smoothWidth;

		varying vec2 vUv;

		void main() {

			vec4 texel = texture2D( tDiffuse, vUv );

			float v = luminance( texel.xyz );

			vec4 outputColor = vec4( defaultColor.rgb, defaultOpacity );

			float alpha = smoothstep( luminosityThreshold, luminosityThreshold + smoothWidth, v );

			gl_FragColor = mix( outputColor, texel, alpha );

		}`};class Zs extends ea{constructor(e,t=1,n,i){super(),this.strength=t,this.radius=n,this.threshold=i,this.resolution=e!==void 0?new He(e.x,e.y):new He(256,256),this.clearColor=new Xe(0,0,0),this.needsSwap=!1,this.renderTargetsHorizontal=[],this.renderTargetsVertical=[],this.nMips=5;let s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);this.renderTargetBright=new gn(s,a,{type:yn,depthBuffer:!1}),this.renderTargetBright.texture.name="UnrealBloomPass.bright",this.renderTargetBright.texture.generateMipmaps=!1;for(let f=0;f<this.nMips;f++){const d=new gn(s,a,{type:yn,depthBuffer:!1});d.texture.name="UnrealBloomPass.h"+f,d.texture.generateMipmaps=!1,this.renderTargetsHorizontal.push(d);const h=new gn(s,a,{type:yn,depthBuffer:!1});h.texture.name="UnrealBloomPass.v"+f,h.texture.generateMipmaps=!1,this.renderTargetsVertical.push(h),s=Math.round(s/2),a=Math.round(a/2)}const o=mT;this.highPassUniforms=$s.clone(o.uniforms),this.highPassUniforms.luminosityThreshold.value=i,this.highPassUniforms.smoothWidth.value=.01,this.materialHighPassFilter=new en({uniforms:this.highPassUniforms,vertexShader:o.vertexShader,fragmentShader:o.fragmentShader}),this.separableBlurMaterials=[];const c=[6,10,14,18,22];s=Math.round(this.resolution.x/2),a=Math.round(this.resolution.y/2);for(let f=0;f<this.nMips;f++)this.separableBlurMaterials.push(this._getSeparableBlurMaterial(c[f])),this.separableBlurMaterials[f].uniforms.invSize.value=new He(1/s,1/a),s=Math.round(s/2),a=Math.round(a/2);this.compositeMaterial=this._getCompositeMaterial(this.nMips),this.compositeMaterial.uniforms.blurTexture1.value=this.renderTargetsVertical[0].texture,this.compositeMaterial.uniforms.blurTexture2.value=this.renderTargetsVertical[1].texture,this.compositeMaterial.uniforms.blurTexture3.value=this.renderTargetsVertical[2].texture,this.compositeMaterial.uniforms.blurTexture4.value=this.renderTargetsVertical[3].texture,this.compositeMaterial.uniforms.blurTexture5.value=this.renderTargetsVertical[4].texture,this.compositeMaterial.uniforms.bloomStrength.value=t,this.compositeMaterial.uniforms.bloomRadius.value=.1;const l=[1,.8,.6,.4,.2];this.compositeMaterial.uniforms.bloomFactors.value=l,this.bloomTintColors=[new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1),new X(1,1,1)],this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,this.copyUniforms=$s.clone(Qo.uniforms),this.blendMaterial=new en({uniforms:this.copyUniforms,vertexShader:Qo.vertexShader,fragmentShader:Qo.fragmentShader,premultipliedAlpha:!0,blending:Fr,depthTest:!1,depthWrite:!1,transparent:!0}),this._oldClearColor=new Xe,this._oldClearAlpha=1,this._basic=new oi,this._fsQuad=new eh(null)}dispose(){for(let e=0;e<this.renderTargetsHorizontal.length;e++)this.renderTargetsHorizontal[e].dispose();for(let e=0;e<this.renderTargetsVertical.length;e++)this.renderTargetsVertical[e].dispose();this.renderTargetBright.dispose();for(let e=0;e<this.separableBlurMaterials.length;e++)this.separableBlurMaterials[e].dispose();this.compositeMaterial.dispose(),this.blendMaterial.dispose(),this._basic.dispose(),this._fsQuad.dispose()}setSize(e,t){let n=Math.round(e/2),i=Math.round(t/2);this.renderTargetBright.setSize(n,i);for(let s=0;s<this.nMips;s++)this.renderTargetsHorizontal[s].setSize(n,i),this.renderTargetsVertical[s].setSize(n,i),this.separableBlurMaterials[s].uniforms.invSize.value=new He(1/n,1/i),n=Math.round(n/2),i=Math.round(i/2)}render(e,t,n,i,s){e.getClearColor(this._oldClearColor),this._oldClearAlpha=e.getClearAlpha();const a=e.autoClear;e.autoClear=!1,e.setClearColor(this.clearColor,0),s&&e.state.buffers.stencil.setTest(!1),this.renderToScreen&&(this._fsQuad.material=this._basic,this._basic.map=n.texture,e.setRenderTarget(null),e.clear(),this._fsQuad.render(e)),this.highPassUniforms.tDiffuse.value=n.texture,this.highPassUniforms.luminosityThreshold.value=this.threshold,this._fsQuad.material=this.materialHighPassFilter,e.setRenderTarget(this.renderTargetBright),e.clear(),this._fsQuad.render(e);let o=this.renderTargetBright;for(let c=0;c<this.nMips;c++)this._fsQuad.material=this.separableBlurMaterials[c],this.separableBlurMaterials[c].uniforms.colorTexture.value=o.texture,this.separableBlurMaterials[c].uniforms.direction.value=Zs.BlurDirectionX,e.setRenderTarget(this.renderTargetsHorizontal[c]),e.clear(),this._fsQuad.render(e),this.separableBlurMaterials[c].uniforms.colorTexture.value=this.renderTargetsHorizontal[c].texture,this.separableBlurMaterials[c].uniforms.direction.value=Zs.BlurDirectionY,e.setRenderTarget(this.renderTargetsVertical[c]),e.clear(),this._fsQuad.render(e),o=this.renderTargetsVertical[c];this._fsQuad.material=this.compositeMaterial,this.compositeMaterial.uniforms.bloomStrength.value=this.strength,this.compositeMaterial.uniforms.bloomRadius.value=this.radius,this.compositeMaterial.uniforms.bloomTintColors.value=this.bloomTintColors,e.setRenderTarget(this.renderTargetsHorizontal[0]),e.clear(),this._fsQuad.render(e),this._fsQuad.material=this.blendMaterial,this.copyUniforms.tDiffuse.value=this.renderTargetsHorizontal[0].texture,s&&e.state.buffers.stencil.setTest(!0),this.renderToScreen?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(n),this._fsQuad.render(e)),e.setClearColor(this._oldClearColor,this._oldClearAlpha),e.autoClear=a}_getSeparableBlurMaterial(e){const t=[],n=e/3;for(let a=0;a<e;a++)t.push(.39894*Math.exp(-.5*a*a/(n*n))/n);const i=[],s=[];for(let a=1;a<e;a+=2){const o=t[a],c=a+1<e?t[a+1]:0,l=o+c;i.push((a*o+(a+1)*c)/l),s.push(l)}return new en({defines:{KERNEL_PAIRS:i.length},uniforms:{colorTexture:{value:null},invSize:{value:new He(.5,.5)},direction:{value:new He(.5,.5)},centerWeight:{value:t[0]},gaussianOffsets:{value:i},gaussianWeights:{value:s}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				#include <common>

				varying vec2 vUv;

				uniform sampler2D colorTexture;
				uniform vec2 invSize;
				uniform vec2 direction;
				uniform float centerWeight;
				uniform float gaussianOffsets[KERNEL_PAIRS];
				uniform float gaussianWeights[KERNEL_PAIRS];

				void main() {

					vec3 diffuseSum = texture2D( colorTexture, vUv ).rgb * centerWeight;

					for ( int i = 0; i < KERNEL_PAIRS; i ++ ) {

						vec2 uvOffset = direction * invSize * gaussianOffsets[ i ];
						vec3 sample1 = texture2D( colorTexture, vUv + uvOffset ).rgb;
						vec3 sample2 = texture2D( colorTexture, vUv - uvOffset ).rgb;
						diffuseSum += ( sample1 + sample2 ) * gaussianWeights[ i ];

					}

					gl_FragColor = vec4( diffuseSum, 1.0 );

				}`})}_getCompositeMaterial(e){return new en({defines:{NUM_MIPS:e},uniforms:{blurTexture1:{value:null},blurTexture2:{value:null},blurTexture3:{value:null},blurTexture4:{value:null},blurTexture5:{value:null},bloomStrength:{value:1},bloomFactors:{value:null},bloomTintColors:{value:null},bloomRadius:{value:0}},vertexShader:`

				varying vec2 vUv;

				void main() {

					vUv = uv;
					gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

				}`,fragmentShader:`

				varying vec2 vUv;

				uniform sampler2D blurTexture1;
				uniform sampler2D blurTexture2;
				uniform sampler2D blurTexture3;
				uniform sampler2D blurTexture4;
				uniform sampler2D blurTexture5;
				uniform float bloomStrength;
				uniform float bloomRadius;
				uniform float bloomFactors[NUM_MIPS];
				uniform vec3 bloomTintColors[NUM_MIPS];

				float lerpBloomFactor( const in float factor ) {

					float mirrorFactor = 1.2 - factor;
					return mix( factor, mirrorFactor, bloomRadius );

				}

				void main() {

					// 3.0 for backwards compatibility with previous alpha-based intensity
					vec3 bloom = 3.0 * bloomStrength * (
						lerpBloomFactor( bloomFactors[ 0 ] ) * bloomTintColors[ 0 ] * texture2D( blurTexture1, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 1 ] ) * bloomTintColors[ 1 ] * texture2D( blurTexture2, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 2 ] ) * bloomTintColors[ 2 ] * texture2D( blurTexture3, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 3 ] ) * bloomTintColors[ 3 ] * texture2D( blurTexture4, vUv ).rgb +
						lerpBloomFactor( bloomFactors[ 4 ] ) * bloomTintColors[ 4 ] * texture2D( blurTexture5, vUv ).rgb
					);

					float bloomAlpha = max( bloom.r, max( bloom.g, bloom.b ) );
					gl_FragColor = vec4( bloom, bloomAlpha );

				}`})}}Zs.BlurDirectionX=new He(1,0);Zs.BlurDirectionY=new He(0,1);const Bo={name:"OutputShader",uniforms:{tDiffuse:{value:null},toneMappingExposure:{value:1}},vertexShader:`
		precision highp float;

		uniform mat4 modelViewMatrix;
		uniform mat4 projectionMatrix;

		attribute vec3 position;
		attribute vec2 uv;

		varying vec2 vUv;

		void main() {

			vUv = uv;
			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

		}`,fragmentShader:`

		precision highp float;

		uniform sampler2D tDiffuse;

		#include <tonemapping_pars_fragment>
		#include <colorspace_pars_fragment>

		varying vec2 vUv;

		void main() {

			gl_FragColor = texture2D( tDiffuse, vUv );

			// tone mapping

			#ifdef LINEAR_TONE_MAPPING

				gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );

			#elif defined( REINHARD_TONE_MAPPING )

				gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );

			#elif defined( CINEON_TONE_MAPPING )

				gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );

			#elif defined( ACES_FILMIC_TONE_MAPPING )

				gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );

			#elif defined( AGX_TONE_MAPPING )

				gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );

			#elif defined( NEUTRAL_TONE_MAPPING )

				gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );

			#elif defined( CUSTOM_TONE_MAPPING )

				gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );

			#endif

			// color space

			#ifdef SRGB_TRANSFER

				gl_FragColor = sRGBTransferOETF( gl_FragColor );

			#endif

		}`};class _T extends ea{constructor(){super(),this.isOutputPass=!0,this.uniforms=$s.clone(Bo.uniforms),this.material=new n_({name:Bo.name,uniforms:this.uniforms,vertexShader:Bo.vertexShader,fragmentShader:Bo.fragmentShader}),this._fsQuad=new eh(this.material),this._outputColorSpace=null,this._toneMapping=null}render(e,t,n){this.uniforms.tDiffuse.value=n.texture,this.uniforms.toneMappingExposure.value=e.toneMappingExposure,(this._outputColorSpace!==e.outputColorSpace||this._toneMapping!==e.toneMapping)&&(this._outputColorSpace=e.outputColorSpace,this._toneMapping=e.toneMapping,this.material.defines={},et.getTransfer(this._outputColorSpace)===pt&&(this.material.defines.SRGB_TRANSFER=""),this._toneMapping===Df?this.material.defines.LINEAR_TONE_MAPPING="":this._toneMapping===Lf?this.material.defines.REINHARD_TONE_MAPPING="":this._toneMapping===If?this.material.defines.CINEON_TONE_MAPPING="":this._toneMapping===Uf?this.material.defines.ACES_FILMIC_TONE_MAPPING="":this._toneMapping===Ff?this.material.defines.AGX_TONE_MAPPING="":this._toneMapping===Of?this.material.defines.NEUTRAL_TONE_MAPPING="":this._toneMapping===Nf&&(this.material.defines.CUSTOM_TONE_MAPPING=""),this.material.needsUpdate=!0),this.renderToScreen===!0?(e.setRenderTarget(null),this._fsQuad.render(e)):(e.setRenderTarget(t),this.clear&&e.clear(e.autoClearColor,e.autoClearDepth,e.autoClearStencil),this._fsQuad.render(e))}dispose(){this.material.dispose(),this._fsQuad.dispose()}}class Ll extends bt{constructor(e,t={}){super(e),this.isReflector=!0,this.type="Reflector",this.forceUpdate=!1,this._reflectionCameras=new WeakMap;const n=this,i=t.color!==void 0?new Xe(t.color):new Xe(8355711),s=t.textureWidth||512,a=t.textureHeight||512,o=t.clipBias||0,c=t.shader||Ll.ReflectorShader,l=t.multisample!==void 0?t.multisample:4,f=new zi,d=new X,h=new X,u=new X,g=new ct,_=new X(0,0,-1),m=new At,p=new X,M=new X,E=new At,S=new ct,y=new gn(s,a,{samples:l,type:yn}),w=new en({name:c.name!==void 0?c.name:"unspecified",uniforms:$s.clone(c.uniforms),fragmentShader:c.fragmentShader,vertexShader:c.vertexShader});w.uniforms.tDiffuse.value=y.texture,w.uniforms.color.value=i,w.uniforms.textureMatrix.value=S,this.material=w,this.onBeforeRender=function(A,x,b){const C=this.getReflectionCamera(b);if(h.setFromMatrixPosition(n.matrixWorld),u.setFromMatrixPosition(b.matrixWorld),g.extractRotation(n.matrixWorld),d.set(0,0,1),d.applyMatrix4(g),p.subVectors(h,u),p.dot(d)>0===!0&&this.forceUpdate===!1)return;p.reflect(d).negate(),p.add(h),g.extractRotation(b.matrixWorld),_.set(0,0,-1),_.applyMatrix4(g),_.add(u),M.subVectors(h,_),M.reflect(d).negate(),M.add(h),C.position.copy(p),C.up.set(0,1,0),C.up.applyMatrix4(g),C.up.reflect(d),C.lookAt(M),C.far=b.far,C.updateMatrixWorld(),C.projectionMatrix.copy(b.projectionMatrix),S.set(.5,0,0,.5,0,.5,0,.5,0,0,.5,.5,0,0,0,1),S.multiply(C.projectionMatrix),S.multiply(C.matrixWorldInverse),S.multiply(n.matrixWorld),f.setFromNormalAndCoplanarPoint(d,h),f.applyMatrix4(C.matrixWorldInverse),m.set(f.normal.x,f.normal.y,f.normal.z,f.constant);const N=C.projectionMatrix;C.isOrthographicCamera?(E.x=(Math.sign(m.x)+N.elements[8])/N.elements[0],E.y=(Math.sign(m.y)+N.elements[9])/N.elements[5],E.z=-b.far,E.w=1):(E.x=(Math.sign(m.x)+N.elements[8])/N.elements[0],E.y=(Math.sign(m.y)+N.elements[9])/N.elements[5],E.z=-1,E.w=(1+N.elements[10])/N.elements[14]),m.multiplyScalar(2/m.dot(E)),N.elements[2]=m.x,N.elements[6]=m.y,C.isOrthographicCamera?(N.elements[10]=m.z-o,N.elements[14]=m.w-1):(N.elements[10]=m.z+1-o,N.elements[14]=m.w),n.visible=!1;const U=A.getRenderTarget(),I=A.xr.enabled,G=A.shadowMap.autoUpdate;A.xr.enabled=!1,A.shadowMap.autoUpdate=!1,A.setRenderTarget(y),A.state.buffers.depth.setMask(!0),A.autoClear===!1&&A.clear(),A.render(x,C),A.xr.enabled=I,A.shadowMap.autoUpdate=G,A.setRenderTarget(U);const W=b.viewport;W!==void 0&&A.state.viewport(W),n.visible=!0,this.forceUpdate=!1},this.getRenderTarget=function(){return y},this.dispose=function(){y.dispose(),n.material.dispose()},this.getReflectionCamera=function(A){let x=this._reflectionCameras.get(A);return x===void 0&&(x=A.clone(),this._reflectionCameras.set(A,x)),x}}}Ll.ReflectorShader={name:"ReflectorShader",uniforms:{color:{value:null},tDiffuse:{value:null},textureMatrix:{value:null}},vertexShader:`
		uniform mat4 textureMatrix;
		varying vec4 vUv;

		#include <common>
		#include <logdepthbuf_pars_vertex>

		void main() {

			vUv = textureMatrix * vec4( position, 1.0 );

			gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );

			#include <logdepthbuf_vertex>

		}`,fragmentShader:`
		uniform vec3 color;
		uniform sampler2D tDiffuse;
		varying vec4 vUv;

		#include <logdepthbuf_pars_fragment>

		float blendOverlay( float base, float blend ) {

			return( base < 0.5 ? ( 2.0 * base * blend ) : ( 1.0 - 2.0 * ( 1.0 - base ) * ( 1.0 - blend ) ) );

		}

		vec3 blendOverlay( vec3 base, vec3 blend ) {

			return vec3( blendOverlay( base.r, blend.r ), blendOverlay( base.g, blend.g ), blendOverlay( base.b, blend.b ) );

		}

		void main() {

			#include <logdepthbuf_fragment>

			vec4 base = texture2DProj( tDiffuse, vUv );
			gl_FragColor = vec4( blendOverlay( base.rgb, color ), 1.0 );

			#include <tonemapping_fragment>
			#include <colorspace_fragment>

		}`};const g_=[[0,3.2,18,0,5.5,-4],[-10,4.5,13,0,5,-4],[10,7.5,14,0,4.5,-4],[0,12.5,17,0,2.5,-2],[0,2.2,9,0,5.5,-5]],gT=g_.length,xT=["fan","cross","sweep","parallel","converge"],x_=8,Es=240,pa=260,vT="varying vec3 vN;varying vec3 vV;varying float vY;void main(){vY=-position.y/26.;vN=normalize(normalMatrix*normal);vec4 mv=modelViewMatrix*vec4(position,1.);vV=-mv.xyz;gl_Position=projectionMatrix*mv;}",MT="uniform vec3 c;uniform float o,tm;varying vec3 vN;varying vec3 vV;varying float vY;void main(){float d=abs(dot(normalize(vN),normalize(vV)));float e=pow(d,1.4);float fall=pow(1.-vY,1.3);float n=.8+.2*sin(vY*14.-tm*3.)*sin(vY*5.+tm);gl_FragColor=vec4(c*(.4+.8*e*e),o*e*fall*n*1.6);}",ST="varying vec2 vUv;void main(){vUv=uv;gl_Position=projectionMatrix*modelViewMatrix*vec4(position,1.);}",yT="uniform sampler2D tDiffuse;uniform float t,ca;varying vec2 vUv;float h(vec2 p){return fract(sin(dot(p,vec2(12.9898,78.233))+t)*43758.5453);}void main(){vec2 d=vUv-.5;float r=dot(d,d);vec2 o=d*ca*(1.+r*8.);vec3 c=vec3(texture2D(tDiffuse,vUv+o).r,texture2D(tDiffuse,vUv).g,texture2D(tDiffuse,vUv-o).b);c*=1.-r*1.1;c+=(h(vUv*800.)-.5)*.03;gl_FragColor=vec4(c,1.);}";function bT(r,e){const t=r-(x_-1)/2;switch(xT[ae.pat]){case"fan":return t*.2*(.6+.4*Math.sin(e*.7));case"cross":return(t<0?1:-1)*(.35+.35*Math.sin(e*.9))*(1+Math.abs(t)*.08);case"sweep":return Math.sin(e*1.1+r*.55)*.85;case"parallel":return Math.sin(e*.8)*.55;default:return-t*.16+Math.sin(e)*.2}}function TT(r,e){let t=innerWidth,n=innerHeight,i=Math.min(devicePixelRatio||1,1.5);const s=new iT({antialias:!1,powerPreference:"high-performance"});s.setPixelRatio(i),s.setSize(t,n),r.appendChild(s.domElement);const a=new Ux;a.background=new Xe(131078),a.fog=new Kf(458772,.016);const o=new Bn(58,t/n,.1,200),c=(D,F,H)=>new Kx({color:D,roughness:F,metalness:H}),l=new bt(new hr(80,80),c(460044,.35,.5));l.rotation.x=-Math.PI/2,a.add(l);const f=new bt(new Nn(26,.6,11),c(723218,.22,.75));if(f.position.set(0,.3,-3),a.add(f),innerWidth>=800){const D=new Ll(new hr(26,11),{clipBias:.003,textureWidth:512,textureHeight:512,color:4868696});D.rotation.x=-Math.PI/2,D.position.set(0,.62,-3),a.add(D)}a.add(new ev(2232627,.6));const d=new Ad(11158783,50,30,1);d.position.set(0,4.5,-4.5),a.add(d);const h=new Ad(16777215,8,20,1);h.position.set(0,6,3),a.add(h);const u=new oi({map:e,toneMapped:!1,fog:!1}),g=new bt(new hr(16,9),u);g.position.set(0,5.6,-7.6),a.add(g);for(const D of[-1,1]){const F=new bt(new hr(4,9),u);F.position.set(D*10.3,5.6,-6.6),F.rotation.y=-D*.5,a.add(F)}const _=c(1314844,.5,.6),m=new bt(new Nn(16.4,9.4,.2),_);m.position.set(0,5.6,-7.75),a.add(m);const p=10.2,M=-2.5;for(const D of[0,-1.2]){const F=new bt(new Nn(24,.18,.18),_);F.position.set(0,p+D*.1,M+D),a.add(F)}for(const D of[-11.5,11.5]){const F=new bt(new Nn(.2,p,.2),_);F.position.set(D,p/2,M-.6),a.add(F)}const E=new Fa(.06,2.4,26,24,1,!0).translate(0,-13,0),S=new Jf(1,24).rotateX(-Math.PI/2),y=Array.from({length:x_},(D,F)=>{const H=new Ta;H.position.set(-10.5+3*F,p-.3,M),a.add(H);const ue=new en({uniforms:{c:{value:new Xe(11158783)},o:{value:.2},tm:{value:0}},transparent:!0,blending:Fr,depthWrite:!1,side:yi,vertexShader:vT,fragmentShader:MT}),fe=new bt(E,ue);H.add(fe);const K=new bt(new Ml(.25,10,8),new oi({color:16777215,fog:!1}));H.add(K);const ie=new oi({color:11158783,transparent:!0,opacity:.4,blending:Fr,depthWrite:!1,fog:!1}),de=new bt(S,ie);return de.position.y=.03,a.add(de),{piv:H,beam:fe,bm:ue,lamp:K,spot:de,sm:ie,p:0,vp:0,t:-.3,vt:0,pop:0}}),w=new Nn(.3,1,.3),A=Array.from({length:14},(D,F)=>{const H=new bt(w,new oi({color:11158783,fog:!1}));return H.position.set(-9.8+F*1.51,.6,-6.8),a.add(H),H}),x=new bt(new Nn(26,.12,.12),new oi({color:11158783,fog:!1}));x.position.set(0,.66,2.45),a.add(x);const b=Array.from({length:5},(D,F)=>{const H=new bt(new Nn(.35,1.6,.35),new oi({color:16777215,fog:!1}));return H.position.set(-8+4*F,1.4,-.5),a.add(H),H}),C=document.createElement("canvas");C.width=C.height=64;{const D=C.getContext("2d"),F=D.createRadialGradient(32,32,0,32,32,32);F.addColorStop(0,"rgba(255,255,255,.5)"),F.addColorStop(1,"rgba(255,255,255,0)"),D.fillStyle=F,D.fillRect(0,0,64,64)}const L=new Float32Array(300*3);for(let D=0;D<300;D++)L[D*3]=(Math.random()-.5)*34,L[D*3+1]=Math.random()*11,L[D*3+2]=-8+Math.random()*22;const N=new tn;N.setAttribute("position",new Xn(L,3));const U=new Qu({size:5,map:new jm(C),transparent:!0,opacity:.12,depthWrite:!1,blending:Fr,color:11158783,fog:!1}),I=new Md(N,U);a.add(I);const G=Array.from({length:12},(D,F)=>{const H=new tn().setFromPoints([new X(0,0,0),new X(0,0,45)]),ue=new Wx(H,new Jm({color:4521898,transparent:!0,opacity:0,blending:Fr,depthWrite:!1,fog:!1}));return ue.position.set(-10+F*1.8,1.2,2.2),a.add(ue),ue}),W=new Float32Array(pa*3).fill(-100),Y=new Float32Array(pa*3),se=new Float32Array(pa*3),Q=new tn;Q.setAttribute("position",new Xn(W,3)),Q.setAttribute("color",new Xn(Y,3));const oe=new Md(Q,new Qu({size:.28,vertexColors:!0,transparent:!0,depthWrite:!1,fog:!1}));oe.frustumCulled=!1,a.add(oe);function ee(){if(!ae.reduce){for(let D=0;D<pa;D++){W[D*3]=(Math.random()-.5)*20,W[D*3+1]=11+Math.random()*2,W[D*3+2]=-2+Math.random()*10,se[D*3]=(Math.random()-.5)*3,se[D*3+1]=-Math.random()*3,se[D*3+2]=(Math.random()-.5)*3;const F=gi(D,.6);Y[D*3]=F.r,Y[D*3+1]=F.g,Y[D*3+2]=F.b}Q.attributes.color.needsUpdate=!0}}function _e(D,F){for(let H=0;H<pa;H++)W[H*3+1]<-50||(se[H*3+1]=Math.max(-3.5,se[H*3+1]-4*D),W[H*3]+=(se[H*3]+Math.sin(F*3+H)*.8)*D,W[H*3+1]+=se[H*3+1]*D,W[H*3+2]+=se[H*3+2]*D,W[H*3+1]<.05&&(W[H*3+1]=-100));Q.attributes.position.needsUpdate=!0}const ge=new oi({color:262664}),Ie=[];for(let D=0;D<11;D++)for(let F=0;F<22&&Ie.length<Es;F++)Ie.push({x:-9.5+F*.9+D%2*.45+(Math.random()-.5)*.3,z:5+D*.95+(Math.random()-.5)*.3,q:Math.random(),w:Math.random()*6});const ke=new Ao(new Fa(.26,.3,1,8),ge,Es),Ge=new Ao(new Ml(.17,8,6),ge,Es),j=new Ao(new Fa(.055,.055,1,5),ge,Es*2),te=new Ao(new Nn(.1,.16,.02),new oi({color:13625599,fog:!1}),Es);for(const D of[ke,Ge,j,te])D.frustumCulled=!1,a.add(D);const me=new an;function Oe(D){const F=ae.phase,H=F==="drop"?.9:F==="build"?.15+ae.build*.6:F==="break"?.1:.12,ue=F==="chill"||F==="break"?.3:0;for(let fe=0;fe<Es;fe++){const K=Ie[fe],ie=K.q<H,de=ae.kP*(ie?.2:.07);me.rotation.set(0,0,0),me.scale.set(1,1.1,1),me.position.set(K.x,.55+de,K.z),me.updateMatrix(),ke.setMatrixAt(fe,me.matrix),me.scale.set(1,1,1),me.position.set(K.x,1.3+de,K.z),me.updateMatrix(),Ge.setMatrixAt(fe,me.matrix);for(let re=0;re<2;re++){const ce=re?1:-1;if(me.position.set(K.x+ce*.33,1+de,K.z),ie){const Se=.9*(.75+.25*Math.sin(D*6+K.w));me.scale.set(1,Se,1),me.rotation.set(0,0,-ce*(.15+.2*Math.sin(D*5+K.w+re))),me.position.y+=Se/2}else me.scale.set(1,.001,1),me.rotation.set(0,0,0);me.updateMatrix(),j.setMatrixAt(fe*2+re,me.matrix)}const Ee=!ie&&K.q>.6&&K.q<.6+ue;me.rotation.set(-.3,0,0),me.scale.setScalar(Ee?1+.15*Math.sin(D*3+K.w):.001),me.position.set(K.x+.25,1.75+de,K.z-.15),me.updateMatrix(),te.setMatrixAt(fe,me.matrix)}for(const fe of[ke,Ge,j,te])fe.instanceMatrix.needsUpdate=!0}const xe=new dT(s);xe.addPass(new pT(a,o));const Ve=new Zs(new He(t,n),.9,.6,.2);xe.addPass(Ve);const mt=new __({uniforms:{tDiffuse:{value:null},t:{value:0},ca:{value:.0015}},vertexShader:ST,fragmentShader:yT});xe.addPass(mt),xe.addPass(new _T);const Ue=new X(0,3.2,18),Me=new X(0,5.5,-4),Qe=new X,Be=new X,Ye={yaw:0,pit:0,zoom:1,px:0,py:0};let St=-1;function zt(){Ue.set(0,17,44),Me.set(0,7,-4),St=-1,fn.from(s.domElement,{opacity:0,duration:2.2,ease:"power2.out"})}let ut=0,Ze=0;function z(){s.setPixelRatio(i),s.setSize(t,n),xe.setPixelRatio(i),xe.setSize(t,n)}function Ct(D,F){const H=ae.I,ue=ae.kP,fe=Math.min(1,ot.sl[1]*.5+ue*.4+ot.e*.4),K=(ot.h>.45||ae.phase==="drop"&&ot.h>.3)&&Math.floor(D*14)%2===0&&!ae.reduce;d.color.copy(gi(2,.55)),d.intensity=(25+90*fe)*H,h.intensity=6+ue*14,u.color.setScalar((.55+.5*fe)*(K?1.4:1)*Math.min(1.3,.5+H*.6)),y.forEach((re,ce)=>{const Se=-.45+.45*Math.sin(ae.ph*.6+ce*.5)*(ae.phase==="break"?.3:1)-.25*ae.build+(ae.phase==="drop"?-.1:0);re.vp+=(bT(ce,ae.ph)-re.p)*30*F+(ae.jerk?(ce%2?1:-1)*.9*H:0),re.vp*=Math.exp(-6*F),re.p+=re.vp*F*3.2,re.vt+=(Se-re.t)*30*F+(ae.jerk?.3*H:0),re.vt*=Math.exp(-6*F),re.t+=re.vt*F*3.2,re.piv.rotation.set(re.t,0,re.p),re.pop*=.93;const we=Math.min(1,ot.sl[ce]*.7+ue*.35+(ae.phase==="drop"?.2:0)+re.pop),Fe=K?ce%2?1:.15:1,B=ae.phase==="drop"?1.5+we*.4:ae.phase==="build"?1-.4*ae.build:.9+we*.5;if(re.beam.scale.set(B,1,B),re.bm.uniforms.tm.value=D,re.bm.uniforms.c.value.copy(gi(ce,.6)),re.bm.uniforms.o.value=(.05+.4*we)*H*Fe,re.lamp.material.color.copy(gi(ce,.8)),re.lamp.scale.setScalar(.8+we),Be.set(0,-1,0).applyEuler(re.piv.rotation),Be.y<-.06){const ve=(.04-re.piv.position.y)/Be.y;re.spot.visible=!0,re.spot.position.set(re.piv.position.x+Be.x*ve,.04,re.piv.position.z+Be.z*ve),re.spot.scale.setScalar(1+we*1.4),re.sm.color.copy(gi(ce,.6)),re.sm.opacity=(.1+.5*we)*H*Fe}else re.spot.visible=!1}),ae.jerk=0,A.forEach((re,ce)=>{const Se=Math.min(1,ot.sl[ce>>1]*(.5+.5*H)+Math.max(0,1-Math.abs(ce-D*8%14)/2.5)*ue*.4),we=.4+5*Se;re.scale.y=we,re.position.y=.6+we/2,re.material.color.copy(gi(ce,.3+.4*Se))}),x.material.color.copy(gi(1,.25+.45*fe+.2*ae.bP)),b.forEach((re,ce)=>re.material.color.setScalar(.12+.7*ot.sl[ce]*H)),I.rotation.y+=F*.01,U.color.copy(gi(3,.55)),U.opacity=(.07+.16*fe)*H,Oe(D);const ie=(ae.phase==="drop"||ae.build>.5)&&!ae.reduce?1:0;if(G.forEach((re,ce)=>{const Se=re.material;Se.opacity+=(ie*(.5+.4*Math.sin(D*10+ce))-Se.opacity)*.2,Se.color.copy(gi(ce+2,.6)),re.rotation.set(-.15-.25*(.5+.5*Math.sin(D*1.7+ce*.5)),Math.sin(D*1.1+ce*.7)*.5,0)}),_e(F,D),ae.shot!==St){St=ae.shot;const re=g_[ae.shot],ce=ae.phase==="drop"?1.3:2.6;fn.to(Ue,{x:re[0],y:re[1],z:re[2],duration:ce,ease:"power3.inOut",overwrite:!0}),fn.to(Me,{x:re[3],y:re[4],z:re[5],duration:ce,ease:"power3.inOut",overwrite:!0})}Qe.copy(Ue).sub(Me).multiplyScalar(Ye.zoom);const de=Math.cos(Ye.yaw),Ee=Math.sin(Ye.yaw);return ae.shake*=.9,o.position.set(Me.x+Qe.x*de+Qe.z*Ee+Ye.px*1.1+(Math.random()-.5)*ae.shake,Me.y+Qe.y+Ye.pit*10-Ye.py*.5+(Math.random()-.5)*ae.shake,Me.z-Qe.x*Ee+Qe.z*de),o.fov=58-(ae.reduce?0:7*ae.punch),o.updateProjectionMatrix(),o.lookAt(Me),ut+=F,++Ze>=90&&(ut/Ze>.03&&i>.76&&(i-=.25,z()),ut=Ze=0),fe}function rt(D,F,H){Ve.strength=(.4+.8*H+ae.punch*1.2)*(ae.reduce?.7:1),mt.uniforms.ca.value=.0015+(ae.reduce?0:ae.kP*.004),mt.uniforms.t.value=D%7,xe.render(F)}function R(){t=innerWidth,n=innerHeight,o.aspect=t/n,o.updateProjectionMatrix(),z()}function v(D,F){let H=-1,ue=44;if(y.forEach((K,ie)=>{const de=K.piv.position.clone().project(o);if(de.z>1)return;const Ee=Math.hypot((de.x*.5+.5)*t-D,(-de.y*.5+.5)*n-F);Ee<ue&&(ue=Ee,H=ie)}),H>=0)return y[H].pop=1,"fixture";const fe=new sv;return fe.setFromCamera(new He(D/t*2-1,-(F/n)*2+1),o),fe.intersectObject(g).length?"wall":null}return{R:s,update:Ct,render:rt,resize:R,pick:v,burst:ee,intro:zt,view:Ye}}const dt=r=>document.getElementById(r);function ET(r){const e=dt("isl"),t=dt("mn");let n=!1;const i={play:()=>{},seek:M=>{},open:M=>{}};r.forEach(M=>{const E=document.createElement("button");E.dataset.id=M.id,E.textContent=M.label,E.onclick=()=>M.run(),t.appendChild(E)});const s=M=>t.querySelector(`[data-id="${M}"]`);function a(M){n=M===void 0?!n:M,i.open(n);const E=Math.min(innerWidth-24,n?400:280);fn.to(e,{width:E,duration:.5,ease:"power3.out"}),fn.to("#ip",{height:n?"auto":0,opacity:n?1:0,duration:.45,ease:"power3.out"}),n&&fn.from("#mn>*",{y:8,opacity:0,stagger:.015,duration:.35,delay:.08})}dt("bMore").onclick=()=>a(),dt("bPlay").onclick=()=>i.play();let o=0,c=r;const l=dt("pal"),f=dt("pq"),d=()=>{const M=f.value.toLowerCase();c=r.filter(E=>E.label.toLowerCase().includes(M)),o=Math.min(o,Math.max(0,c.length-1)),dt("pl").innerHTML=c.map((E,S)=>`<div class="pi${S===o?" sel":""}" data-i="${S}">${E.label}</div>`).join("")};function h(M){l.classList.toggle("show",M),M?(f.value="",o=0,d(),f.focus(),fn.from("#pbox",{y:-10,opacity:0,scale:.97,duration:.3,ease:"power3.out"})):f.blur()}const u=M=>{const E=c[M];h(!1),E?.run()};f.oninput=()=>{o=0,d()},dt("pl").onclick=M=>{const E=M.target.closest(".pi");E&&u(+E.dataset.i)},l.onclick=M=>{M.target===l&&h(!1)},addEventListener("keydown",M=>{const E=l.classList.contains("show"),S=/INPUT|TEXTAREA/.test(M.target.tagName);if(M.key==="k"&&(M.metaKey||M.ctrlKey)||M.key==="/"&&!E&&!S){M.preventDefault(),h(!E);return}E&&(M.key==="Escape"?h(!1):M.key==="ArrowDown"?(M.preventDefault(),o=Math.min(c.length-1,o+1),d()):M.key==="ArrowUp"?(M.preventDefault(),o=Math.max(0,o-1),d()):M.key==="Enter"&&u(o))});function g(M,E={}){return new Promise(S=>{const y=dt("ask"),w=dt("ain"),A=dt("ata"),x=E.multi?A:w;dt("atitle").textContent=M,w.style.display=E.multi?"none":"block",A.style.display=E.multi?"block":"none",x.placeholder=E.placeholder||"",x.value=E.value||"",y.classList.add("show"),setTimeout(()=>x.focus(),30);const b=C=>{y.classList.remove("show"),S(C)};dt("aok").onclick=()=>b(x.value.trim()||null),dt("ano").onclick=()=>b(null),w.onkeydown=C=>{C.key==="Enter"&&b(w.value.trim()||null),C.key==="Escape"&&b(null)},y.onclick=C=>{C.target===y&&b(null)}})}function _(M){const E=dt("toast");E.textContent=M,fn.killTweensOf(E),fn.fromTo(E,{opacity:0},{opacity:1,duration:.3}),fn.to(E,{opacity:0,delay:3.6,duration:.5})}function m(M){const E=dt("tl");dt("tlw").style.display="block",E.width=E.clientWidth*2,E.height=68;const S=E.getContext("2d"),y=Math.max(...M.e3)||1,w=E.width/M.secN;for(let A=0;A<M.secN;A++){const x=M.e3[A]/y,b=M.drops.some(L=>A>=L&&A<L+12),C=M.drops.some(L=>A>=L-8&&A<L);S.fillStyle=b?"#ff4fd8":C?"#ffb04f":M.typeAt[A]===3?"#3b4a8a":"#8f5bff",S.fillRect(A*w,68-x*64,Math.max(1,w-.5),x*64)}}dt("tl").onclick=M=>{const E=M.target.getBoundingClientRect();i.seek((M.clientX-E.left)/E.width)};function p(){return new Promise(M=>{const E=dt("warn"),S=y=>{fn.to(E,{opacity:0,duration:.5,onComplete:()=>E.remove()}),fn.from("#isl",{y:30,opacity:0,duration:.9,delay:.5,ease:"power3.out"}),M(y)};dt("w1").onclick=()=>S(!1),dt("w2").onclick=()=>S(!0)})}return{hooks:i,toggle:a,palette:h,ask:g,toast:_,drawTL:m,start:p,chartsHost:dt("gr"),get isOpen(){return n},modal:()=>dt("pal").classList.contains("show")||dt("ask").classList.contains("show"),label:(M,E)=>{const S=s(M);S&&(S.textContent=E)},active:(M,E)=>s(M)?.classList.toggle("on",E),status:M=>{dt("st").textContent=M},meta:M=>{dt("meta").textContent=M},play:M=>{dt("bPlay").textContent=M},accent:M=>document.documentElement.style.setProperty("--ac",M),playhead:M=>{dt("ph").style.left=Math.max(0,Math.min(1,M))*100+"%"},tlVisible:M=>{dt("tlw").style.display=M?"block":"none"},visible:M=>dt("bar").classList.toggle("hide",!M)}}function th(r){return new Promise((e,t)=>{r.oncomplete=r.onsuccess=()=>e(r.result),r.onabort=r.onerror=()=>t(r.error)})}function wT(r,e){let t;const n=()=>{if(t)return t;const i=indexedDB.open(r);return i.onupgradeneeded=()=>i.result.createObjectStore(e),t=th(i),t.then(s=>{s.onclose=()=>t=void 0},()=>{t=void 0}),t};return(i,s)=>n().then(a=>s(a.transaction(e,i).objectStore(e)))}let Dc;function v_(){return Dc||(Dc=wT("keyval-store","keyval")),Dc}function AT(r,e=v_()){return e("readonly",t=>th(t.get(r)))}function M_(r,e,t=v_()){return t("readwrite",n=>(n.put(e,r),th(n.transaction)))}function RT(r){return new Worker("/assets/analysis.worker-7EHZfnke.js",{type:"module",name:r?.name})}let Ir=null,kr,rf;function S_(){Ir||(Ir=new AudioContext,kr=Ir.createAnalyser(),kr.fftSize=1024,kr.smoothingTimeConstant=.55,rf=new Uint8Array(kr.frequencyBinCount)),Ir.state==="suspended"&&Ir.resume()}async function CT(){S_();const r=await navigator.mediaDevices.getUserMedia({audio:{echoCancellation:!1,noiseSuppression:!1,autoGainControl:!1}});return Ir.createMediaStreamSource(r).connect(kr),r}async function PT(){S_();const r=await navigator.mediaDevices.getDisplayMedia({video:!0,audio:!0});if(!r.getAudioTracks().length)throw r.getTracks().forEach(e=>e.stop()),new Error("no-audio");return r.getVideoTracks().forEach(e=>e.stop()),Ir.createMediaStreamSource(new MediaStream(r.getAudioTracks())).connect(kr),r}const ep=[1,3,6,10,16,26,45,80,160],DT=[1,1,1.1,1.2,1.4,1.7,2,2.5];function LT(){kr.getByteFrequencyData(rf);const r=(t,n)=>{let i=0;for(let s=t;s<n;s++)i+=rf[s];return i/(n-t)/255},e=[];for(let t=0;t<8;t++)e.push(Math.min(1,r(ep[t],ep[t+1])*DT[t]));return{k:r(1,4),s:r(5,14)*1.5,h:r(100,300)*3,e:r(1,200)*2.2,sl:e}}async function IT(r,e){const t=`${r.name}|${r.size}|${r.lastModified}`,n=await AT(t).catch(()=>{});if(n&&n.beats)return{track:n,key:t};const i=await new OfflineAudioContext(1,1,44100).decodeAudioData(await r.arrayBuffer()),s=new Float32Array(i.length);for(let o=0;o<i.numberOfChannels;o++){const c=i.getChannelData(o);for(let l=0;l<i.length;l++)s[l]+=c[l]/i.numberOfChannels}const a=await new Promise((o,c)=>{const l=new RT;l.onmessage=f=>{f.data.p!==void 0?e(f.data.p):f.data.error?(c(new Error(f.data.error)),l.terminate()):(o(f.data.track),l.terminate())},l.onerror=f=>c(new Error(f.message)),l.postMessage({mono:s,sr:i.sampleRate},[s.buffer])});return M_(t,a).catch(()=>{}),{track:a,key:t}}const y_=(r,e)=>M_(r,e).catch(()=>{});function tp(r){const e=r*124/60,t=e%96,n=e%1,i=t<32?0:t<48?1:t<80?2:3,s=Math.pow(1-n,3),a=Math.floor(e)%2===1;let o=0,c=0,l=.05,f=.12;if(i===0)o=s*.7,l=.1,f=.3;else if(i===1){const h=(t-32)/16;o=s*.7,c=Math.pow(1-e*(1+h*3)%1,3)*h,l=.2+.5*h,f=.3+.35*h}else i===2&&(o=s,c=a?Math.pow(1-n,4)*.9:0,l=e*2%1<.2?.7:.2,f=.9);const d=[];for(let h=0;h<8;h++)d.push(Math.min(1,o*(h<3?1:.15)+c*(h>=3&&h<7?.9:.1)+l*(h>=5?1:.1)+f*.15));return{k:o,s:c,h:l,e:f,sl:d}}let Lc=0,Ic=0,np=-1,ip=-1,ws=0,ma=0,Uc=0,Nc=-99;function ko(r,e,t){ot.k=r.k,ot.s=r.s,ot.h+=(Math.min(1,r.h)-ot.h)*.5,ot.e=r.e;for(let i=0;i<8;i++)ot.sl[i]+=(r.sl[i]-ot.sl[i])*.6;Lc+=(r.k-Lc)*.04,Ic+=(r.s-Ic)*.04;let n=!1;r.k>Lc*1.3+.07&&r.k>.35&&e-np>.2&&(np=e,n=!0,p_(!0)),r.s>Ic*1.3+.07&&r.s>.3&&e-ip>.12&&(ip=e,ae.sP=1),ws+=(r.e-ws)*Math.min(1,t/.4),ma+=(r.e-ma)*Math.min(1,t/5),Uc=Math.max(0,Math.min(1,Uc+(r.h>.3&&ws>ma*1.05?t*.25:-t*.4))),ae.build=Uc,ae.phase!=="drop"?n&&ws>ma*1.35&&ws>.3&&e-Nc>10?(Nc=e,ae.dEvt=e,m_()):ws<ma*.55?ae.phase="break":ae.phase=ae.build>.4?"build":"chill":e-Nc>12&&(ae.phase="chill")}const Xt={lastFi:0,lastPT:0,fired:-1,bi:0};function UT(){Xt.lastFi=0,Xt.lastPT=0,Xt.fired=-1,Xt.bi=0}function NT(r,e){const t=Math.max(0,Math.min(r.F-1,Math.floor((e+.04)*r.fps)));if(e<Xt.lastPT-.3||e>Xt.lastPT+1){Xt.lastFi=t-1,Xt.fired=-1;const s=r.beats.findIndex(a=>a>e);Xt.bi=s<0?r.beats.length:s}Xt.lastPT=e,ot.k=r.k[t],ot.s=r.s[t],ot.h+=(r.h[t]-ot.h)*.5,ot.e=r.e[t];for(let s=0;s<8;s++)ot.sl[s]+=(r.sl[s][t]-ot.sl[s])*.6;for(let s=Xt.lastFi+1;s<=t;s++)r.kh[s]&&p_(!1),r.sh[s]&&(ae.sP=1);for(Xt.lastFi=t;Xt.bi<r.beats.length&&r.beats[Xt.bi]<=e+.04;)sT(Xt.bi),Xt.bi++;let n=null,i=null;for(const s of r.drops)e>=s&&e<s+12?n=s:s>e&&i===null&&(i=s);ae.build=0,n!==null?(ae.dEvt=n,Xt.fired!==n&&(Xt.fired=n,m_()),ae.phase="drop"):(Xt.fired=-1,i!==null&&(ae.dEvt=i),i!==null&&i-e<8?(ae.build=1-(i-e)/8,ae.phase="build"):ae.phase=r.typeAt[Math.floor(e)]===3?"break":"chill")}function FT(r){const e=[];let t=!1;for(const n of r.split(/\r?\n/)){const i=[...n.matchAll(/\[(\d+):(\d+(?:\.\d+)?)\]/g)],s=n.replace(/\[[^\]]*\]/g,"").trim();i.length?(t=!0,s&&i.forEach(a=>e.push({t:+a[1]*60+ +a[2],s}))):s&&!/^\s*\[/.test(n)&&e.push({t:null,s})}return e.length?t?e.filter(n=>n.t!==null).sort((n,i)=>n.t-i.t):e:null}function nh(r,e=""){const t=r.replace(/\(.*?\)|\[.*?\]/g," ").replace(/\b(official|music video|lyric video|lyrics?|audio|video|hd|4k|visualizer)\b/gi," ").replace(/\s+/g," ").trim(),n=t.split(/\s[-\u2013\u2014|]\s/);return n.length>=2?{artist:n[0].trim(),track:n.slice(1).join(" ").trim()}:{artist:e.replace(/\s*-\s*Topic$|VEVO$/i,"").trim(),track:t}}const rp="https://lrclib.net/api";async function ih(r,e,t){try{const n=new URLSearchParams({artist_name:r,track_name:e});t&&n.set("duration",String(Math.round(t)));let i=await fetch(`${rp}/get?${n}`);if(i.ok){const s=await i.json(),a=s.syncedLyrics||s.plainLyrics;if(a)return a}if(i=await fetch(`${rp}/search?${new URLSearchParams({q:`${r} ${e}`.trim()})}`),i.ok){const s=await i.json(),a=s.find(o=>o.syncedLyrics)||s.find(o=>o.plainLyrics);return a?a.syncedLyrics||a.plainLyrics:null}}catch{}return null}function OT(r){const e=r.match(/(?:youtu\.be\/|[?&]v=|embed\/|shorts\/|live\/)([\w-]{11})/);return e?e[1]:/^[\w-]{11}$/.test(r.trim())?r.trim():null}let BT=null;function kT(){return window.YT?.Player?Promise.resolve():BT??=new Promise((r,e)=>{window.onYouTubeIframeAPIReady=()=>r();const t=document.createElement("script");t.src="https://www.youtube.com/iframe_api",t.onerror=()=>e(new Error("YouTube API blocked")),document.head.appendChild(t)})}class zT{p=null;async open(e,t){return await kT(),this.close(),e.innerHTML='<div id="ytp-inner"></div>',new Promise(n=>{this.p=new window.YT.Player("ytp-inner",{videoId:t,playerVars:{playsinline:1,rel:0,modestbranding:1},events:{onReady:i=>{const s=i.target.getVideoData();n({title:s.title||"",author:s.author||"",duration:i.target.getDuration()||0}),i.target.playVideo()}}})})}get active(){return!!this.p}time(){return this.p?.getCurrentTime?.()??0}duration(){return this.p?.getDuration?.()??0}playing(){return this.p?.getPlayerState?.()===1}toggle(){this.p&&(this.playing()?this.p.pauseVideo():this.p.playVideo())}close(){try{this.p?.destroy()}catch{}this.p=null}}function b_(r,e){const t=document.createElement("a");t.href=URL.createObjectURL(r),t.download=e,document.body.appendChild(t),t.click(),t.remove(),setTimeout(()=>URL.revokeObjectURL(t.href),2e3)}class VT{rec=null;chunks=[];get active(){return!!this.rec}start(e,t){const n=e.captureStream(60);try{t?.captureStream?.()?.getAudioTracks().forEach(s=>n.addTrack(s))}catch{}const i=["video/webm;codecs=vp9,opus","video/webm;codecs=vp8,opus","video/webm"].find(s=>MediaRecorder.isTypeSupported(s));this.chunks=[],this.rec=new MediaRecorder(n,{mimeType:i,videoBitsPerSecond:8e6}),this.rec.ondataavailable=s=>{s.data.size&&this.chunks.push(s.data)},this.rec.onstop=()=>{b_(new Blob(this.chunks,{type:"video/webm"}),`stage-lights-${Date.now()}.webm`),this.rec=null},this.rec.start(250)}stop(){this.rec?.stop()}}const jr=r=>document.getElementById(r),En=jr("au");fn.registerPlugin(Js,Cf);const Wi=new zT,Fc=new VT,sp=new oT;let $t="idle",$r="Load a song to start",ap=!0,wt=null,Il="",Sl=null,Ki=!1,T_="",E_=performance.now()/1e3;const op={k:0,s:0,h:0,e:.1,sl:[.1,.1,.1,.1,.1,.1,.1,.1]},GT=()=>Ki?Wi.time():$t==="file"?En.currentTime:performance.now()/1e3-E_,HT=()=>Ki?Wi.duration():$t==="file"&&wt?wt.dur:0,$n=new lT(GT,HT);$n.title=$r;$n.mode="title";const Pi=TT(jr("app"),$n.tex);io.shots=gT;io.drop=()=>{Pi.burst(),$n.onDrop(),ae.reduce||fn.fromTo(ae,{punch:1},{punch:0,duration:1.4,ease:"expo.out"})};function rh(){Sl?.getTracks().forEach(r=>r.stop()),Sl=null}function ja(){Wi.close(),Ki=!1,jr("yt").classList.remove("show")}function Ai(r,e,t=!1){$t=r,$r=e,$n.title=e,r!=="idle"&&r!=="busy"&&ap&&(ap=!1,$n.mode="goom"),r!=="mic"&&rh(),r!=="file"&&(En.pause(),Pe.tlVisible(!1)),!t&&Ki&&ja();for(const[n,i]of[["demo","demo"],["mic","mic"],["song","file"],["yt","yt"]])Pe.active(n,r===i)}const WT=()=>Ai("demo","Demo set");async function XT(){try{rh();const r=await CT();Ai("mic","Listening"),Sl=r}catch{Pe.toast("Microphone was blocked or unavailable")}}async function YT(){try{rh();const r=await PT();Ai("mic",Ki?$r:"Tab audio",!0),Sl=r,Pe.toast("Reacting to the shared tab audio")}catch(r){Pe.toast(r?.message==="no-audio"?'No audio shared. Tick "Share tab audio" and try again.':"Tab capture was cancelled or blocked")}}async function Ul(r){ja(),Ai("busy","Loading "+r.name);try{const e=await IT(r,n=>Pe.status("Analysing "+n+"%"));wt=e.track,Il=e.key,UT(),En.src=URL.createObjectURL(r);const t=r.name.replace(/\.[^.]+$/,"");Ai("file",`${t} · ${wt.bpm} BPM · ${wt.drops.length} drop${wt.drops.length===1?"":"s"}`),Pe.drawTL(wt),En.play(),qT(t,wt.dur)}catch(e){Ai("idle","Load a song to start"),Pe.toast(e?.message||"Could not read that file. Try mp3, wav or m4a.")}}function ta(r){const e=FT(r);return e?(T_=r,E_=performance.now()/1e3,$n.setLyrics(e),Pe.label("screen","Screen: lyrics"),!0):(Pe.toast("No lyrics found in that text"),!1)}async function qT(r,e){const{artist:t,track:n}=nh(r),i=await ih(t,n,e);i&&ta(i)?Pe.toast("Lyrics found. Screen is now on lyrics."):Pe.toast("No lyrics found online. Try Find lyrics or Paste lyrics.")}async function $T(){const r=await Pe.ask("Find lyrics (LRCLIB)",{placeholder:"Artist - Song title"});if(!r)return;const{artist:e,track:t}=nh(r.includes(" - ")?r:" - "+r);Pe.toast("Searching…");const n=await ih(e,t||r);n&&ta(n)?Pe.toast("Lyrics found"):Pe.toast("Nothing found. You can paste lyrics instead.")}async function w_(){const r=await Pe.ask("Paste lyrics (plain text or synced .lrc)",{multi:!0,placeholder:"Plain text, or lines like [01:23.45] text"});r&&ta(r)}async function KT(){const r=await Pe.ask("YouTube link",{placeholder:"https://youtu.be/…"});if(!r)return;const e=OT(r);if(!e){Pe.toast("That does not look like a YouTube link");return}try{ja(),Pe.toggle(!1),jr("yt").classList.add("show"),Ai("yt","Loading video",!0);const t=await Wi.open(jr("ytp"),e);Ki=!0,Ai("yt",t.title||"YouTube",!0),Pe.toast("Video loaded. Lights are generic; use Tab audio to react to the real sound.");const{artist:n,track:i}=nh(t.title,t.author),s=await ih(n,i,t.duration);s&&ta(s)&&Pe.toast("Lyrics found and synced to the video")}catch{ja(),Ai("idle","Load a song to start"),Pe.toast("Could not load YouTube (offline or blocked)")}}jr("ytx").onclick=()=>{ja(),Ai("idle","Load a song to start")};const Ur=(r,e)=>{const t=document.createElement("input");t.type="file",t.accept=r,t.onchange=()=>{const n=t.files?.[0];n&&e(n)},t.click()};function sh(){hn.manual=hn.manual>=Ks.length-1?-1:hn.manual+1,hn.manual>=0&&(hn.idx=hn.manual),Pe.label("scene","Scene: "+(hn.manual<0?"auto":Ks[hn.manual].n.toLowerCase()))}function A_(){ae.camLock=ae.camLock>=2?-1:ae.camLock+1,ae.camLock>=0&&(ae.shot=[0,4,3][ae.camLock]),Pi.view.yaw=Pi.view.pit=0,Pe.label("cam","Cam: "+["auto","wide","close","high"][ae.camLock+1])}const ah=()=>Pe.label("screen","Screen: "+$n.next());function ZT(r){const e=new Image;e.onload=()=>{$n.img=e,$n.mode="image",Pe.label("screen","Screen: image")},e.src=URL.createObjectURL(r)}function JT(){if($t!=="file"||!wt){Pe.toast("Load a song to edit its drops");return}const r=En.currentTime,e=wt.drops.findIndex(t=>Math.abs(t-r)<4);e>=0?wt.drops.splice(e,1):(wt.drops.push(r),wt.drops.sort((t,n)=>t-n)),Pe.drawTL(wt),y_(Il,wt)}function QT(){ae.reduce=!ae.reduce,Pe.label("flash","Flashing: "+(ae.reduce?"reduced":"full"))}function jT(){Fc.active?(Fc.stop(),Pe.label("rec","Record video"),Pe.toast("Saving recording…")):(Fc.start(Pi.R.domElement,$t==="file"?En:null),Pe.label("rec","Stop recording"),Pe.toast($t==="file"?"Recording with audio":"Recording video only"))}function eE(){const r={v:1,name:$r,key:Il,drops:wt?.drops??[],lyrics:T_,sceneManual:hn.manual,reduce:ae.reduce};b_(new Blob([JSON.stringify(r,null,1)],{type:"application/json"}),"show.json")}async function tE(r){try{const e=JSON.parse(await r.text());wt&&Array.isArray(e.drops)&&(wt.drops=e.drops,Pe.drawTL(wt),y_(Il,wt)),e.lyrics&&ta(e.lyrics),typeof e.sceneManual=="number"&&(hn.manual=e.sceneManual-1,sh()),Pe.toast("Show file loaded")}catch{Pe.toast("That is not a valid show file")}}async function nE(){const r=await Pe.ask("Spline scene URL (.splinecode)",{placeholder:"https://prod.spline.design/…/scene.splinecode",value:localStorage.getItem("spline.url")||""});r&&await R_(r,!0)}async function R_(r,e=!1){Pe.toast("Loading Spline scene…");try{await sp.load(r),e&&localStorage.setItem("spline.url",r),$n.spline=sp,$n.mode="spline",Pe.label("screen","Screen: spline"),Pe.toast("Spline scene is on the LED screens")}catch{Pe.toast("Could not load that Spline scene")}}const C_=()=>{(document.fullscreenElement?document.exitFullscreen():document.documentElement.requestFullscreen()).catch(()=>{})};function P_(){Ki?Wi.toggle():$t==="file"?En.paused?En.play():En.pause():$t==="idle"?Ur("audio/*",Ul):Pe.toggle(!0)}const iE=[{id:"demo",label:"Demo set",run:WT},{id:"mic",label:"Microphone",run:XT},{id:"tab",label:"Tab audio",run:YT},{id:"song",label:"Load song",run:()=>Ur("audio/*",Ul)},{id:"yt",label:"YouTube link",run:KT},{id:"find",label:"Find lyrics",run:$T},{id:"paste",label:"Paste lyrics",run:w_},{id:"lrc",label:"Lyrics file",run:()=>Ur(".lrc,.txt,text/plain",async r=>{ta(await r.text())})},{id:"scene",label:"Scene: auto",run:sh},{id:"cam",label:"Cam: auto",run:A_},{id:"screen",label:"Screen: goom",run:ah},{id:"img",label:"Screen image",run:()=>Ur("image/*",ZT)},{id:"spline",label:"Spline scene",run:nE},{id:"splinef",label:"Spline file",run:()=>Ur(".splinecode",r=>{R_(URL.createObjectURL(r))})},{id:"drop",label:"Mark drop",run:JT},{id:"flash",label:"Flashing: full",run:QT},{id:"rec",label:"Record video",run:jT},{id:"save",label:"Export show",run:eE},{id:"load",label:"Import show",run:()=>Ur(".json,application/json",tE)},{id:"fs",label:"Fullscreen",run:C_},{id:"hide",label:"Hide UI",run:()=>Pe.visible(!1)},{id:"cmd",label:"Commands ⌘K",run:()=>Pe.palette(!0)}],Pe=ET(iE);ae.reduce&&Pe.label("flash","Flashing: reduced");Pe.hooks.play=P_;let D_=null,Oc=null;Pe.hooks.open=async r=>{if(r&&(Oc??=fp(()=>import("./charts-island-dqEHi-fa.js"),__vite__mapDeps([0,1,2]))),!Oc)return;const e=await Oc;D_=e.feedCharts,Pe.isOpen?e.mountCharts(Pe.chartsHost):e.unmountCharts()};Js.create("#yt",{type:"x,y",trigger:"#yth",inertia:!0,bounds:document.body});Pe.hooks.seek=r=>{$t==="file"&&wt&&(En.currentTime=r*wt.dur)};Pe.start().then(r=>{r&&(ae.reduce=!0,Pe.label("flash","Flashing: reduced")),Pi.intro(),Ur("audio/*",Ul)});const ar=Pi.view,sf=(r,e,t)=>Math.max(e,Math.min(t,r)),zr=new Map;let yl=!1,bl=0,jo=0,el=0,tl=0;const L_=r=>!!r?.closest?.("#bar,#tlw,#warn,#pal,#ask,#yt");addEventListener("pointerdown",r=>{L_(r.target)||(zr.set(r.pointerId,r),yl=!0,bl=0,jo=r.clientX,el=r.clientY)});addEventListener("pointermove",r=>{if(!yl){r.pointerType!=="touch"&&fn.to(ar,{px:r.clientX/innerWidth-.5,py:r.clientY/innerHeight-.5,duration:1.2,ease:"power3.out",overwrite:!0});return}if(zr.has(r.pointerId)&&zr.set(r.pointerId,r),zr.size>=2){const e=[...zr.values()],t=Math.hypot(e[0].clientX-e[1].clientX,e[0].clientY-e[1].clientY);tl&&(ar.zoom=sf(ar.zoom*tl/t,.5,1.6)),tl=t,bl=99;return}ar.yaw-=(r.clientX-jo)*.006,ar.pit=sf(ar.pit+(r.clientY-el)*.004,-.4,.5),bl+=Math.abs(r.clientX-jo)+Math.abs(r.clientY-el),jo=r.clientX,el=r.clientY});addEventListener("pointerup",r=>{if(zr.delete(r.pointerId),tl=0,yl&&bl<8&&!L_(r.target)){Pe.visible(!0);const e=Pi.pick(r.clientX,r.clientY);e==="wall"?ah():e===null&&Pe.toggle(!1)}zr.size||(yl=!1)});addEventListener("wheel",r=>{ar.zoom=sf(ar.zoom*(1+r.deltaY*.001),.5,1.6)},{passive:!0});addEventListener("resize",()=>Pi.resize());addEventListener("dragover",r=>r.preventDefault());addEventListener("drop",r=>{r.preventDefault();const e=r.dataTransfer?.files?.[0];e&&e.type.startsWith("audio")&&Ul(e)});addEventListener("keydown",r=>{if(/INPUT|TEXTAREA/.test(r.target.tagName)||r.metaKey||r.ctrlKey||Pe.modal())return;const e=r.key.toLowerCase();e===" "?(r.preventDefault(),P_()):e==="c"?A_():e==="s"?sh():e==="g"?ah():e==="h"?Pe.visible(!1):e==="f"?C_():e==="l"&&w_()});let lp=0,cp=0;const up=jr("fl");function I_(r){const e=r/1e3,t=Math.min(e-lp,.05)||.016;lp=e,$t==="file"&&wt?(NT(wt,En.currentTime),Pe.playhead(En.currentTime/wt.dur)):$t==="demo"?ko(tp(e),e,t):$t==="yt"?ko(Wi.playing()?tp(e):op,e,t):$t==="mic"?ko(LT(),e,t):$t==="idle"&&(ko(op,e,t),ae.phase="break"),aT(t),$n.draw(e);const n=Pi.update(e,t);Pi.render(e,t,n),Pe.isOpen&&D_?.(Math.min(1,ot.e*.9+ae.kP*.2));const i=($t==="file"?En.currentTime:e)-ae.dEvt;let s=0,a="0,0,0";i>=-.3&&i<0?s=ae.reduce?.25:.85:i>=0&&i<.35&&(s=(ae.reduce?.12:.5)*(1-i/.35),a="255,255,255"),up.style.background=`rgb(${a})`,up.style.opacity=String(s),e-cp>.4&&(cp=e,Pe.status($t==="busy"||$t==="idle"?$r:$r.split(" · ")[0]+" · "+ae.phase),Pe.meta($r.split(" · ").slice(1).join(" · ")+($t==="file"?" · ":"")+Ks[hn.idx].n.toLowerCase()),Pe.play(Ki?Wi.playing()?"❚❚":"▶":$t==="file"?En.paused?"▶":"❚❚":"♪"),Pe.accent("#"+gi(2,.6).getHexString()),Ki&&Pe.playhead(Wi.time()/(Wi.duration()||1))),requestAnimationFrame(I_)}requestAnimationFrame(I_);export{fp as _};
