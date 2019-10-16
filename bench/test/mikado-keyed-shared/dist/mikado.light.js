/**!
 * Mikado.js v0.6.5 (Light)
 * Copyright 2019 Nextapps GmbH
 * Author: Thomas Wilkerling
 * Licence: Apache-2.0
 * https://github.com/nextapps-de/mikado
 */
(function(){'use strict';var p;var t={reuse:!0,prefetch:!0,pool:!0,cache:!0},w={},y={},A={},B={},C={};function D(a,b,c){a.nodeType||(c=b,b=a,a=null);a?this.mount(a):(this.f=this.b=null,this.length=0);this.init(b,c)}var E=D.register=function(a,b){b||(b=a,a=b.n);y[a]=b;return D},F=D.new=function(a,b,c){return new D(a,b,c)};
D.prototype.mount=function(a){if(this.f!==a){this.key&&this.f&&(this.f._o=this.g,this.g=a._o||{});this.f=a;G(this);var b;if(!(b=a._d)){b=a.children;for(var c=b.length,e=Array(c),f=0,d;f<c;f++)d=b[f],d._i=f,e[f]=d;b=a._d=e}this.b=b;this.length=this.b.length}return this};D.prototype.index=function(a){return a._i};D.prototype.node=function(a){return this.b[a]};
D.prototype.init=function(a,b){"string"===typeof a?a=y[a]:(b||!a||a.n||(b=a,a=null),a?a.n&&E(a):a=y[this.o]);this.C=b=b?Object.assign({},this.C||t,b):t;this.B=b.reuse;this.state=b.state||w;this.cache=b.cache;var c=a.n;this.o!==c&&(this.o=c,this.u=a.d,this.v=this.l=null,this.w=b.prefetch&&H(this,a),G(this),this.g=(this.key=a.k)&&{},this.m=this.B&&b.pool&&(B[c]||(B[c]=[])),this.A=this.key&&(b.keep||this.m)&&(C[c]||(C[c]={})),this.size=this.m&&b.size);return this};
D.once=function(a,b,c,e,f){var d=F(a,b);"function"===typeof e&&(f=e,e=null);if(f){var g=f;f=function(){d.destroy(!0);g()}}d.render(c,e,f);f||d.destroy(!0);return D};function G(a){if(a.f){var b=a.f._t;b!==a.o&&(a.f._t=a.o,b&&(a.key&&(a.g={}),a.length=0,a.remove(0,a.length)))}}p=D.prototype;
p.create=function(a,b,c){var e=this.key,f=e&&a[e],d,g;if(e&&((g=this.A)&&(d=g[f])||(d=this.g[f])))if(g){if(g[f]=null,g=this.m){var k=d._n;d._n=null;var h=g.pop();h!==d&&(h._n=k,g[k]=h)}}else e=!1;else if((d=this.m)&&d.length)d=d.pop(),g&&(d._n=null,g[d._k]=null);else{var m=1;d=this.w}this.apply(d,a,b,c);m&&(d=this.w.cloneNode(!0));e&&(d._k=f,this.g[f]=d);return d};p.apply=function(a,b,c,e){this.w||(this.w=H(this,y[this.o]));if(!this.u)return a||(a=this.w),this.v(a._p||I(this,a),a.$,b,e,c)};
p.render=function(a,b){var c=this.length;var e=a.length;if("undefined"===typeof e)a=[a],e=1;else if(!e)return this.remove(0,c);var f=this.key;f||this.B||(this.remove(0,c,e),c=0);var d=c<e?c:e,g=0;if(g<d)for(;g<d;g++){var k=this.b[g],h=a[g],m=void 0;if(f&&k._k!==(m=h[f]))if(m=this.g[m]){var u=b,n=g,q=m._i;m._i=n;k._i=q;this.b[n]=m;this.b[q]=k;this.f.insertBefore(m,k);this.apply(m,h,u,n)}else this.replace(k,h,b,g);else this.update(k,h,b,g)}if(g<e)for(;g<e;g++)this.add(a[g],b);else e<c&&this.remove(e,
c-e);return this};p.add=function(a,b,c,e){if(!e)if("number"===typeof b){c=b;b=null;var f=!0}else if(c||0===c)f=!0;c=e||f?c:this.length;a=this.create(a,b,c);a._i=c;if(f)for(this.f.insertBefore(a,this.b[c]||null),this.b.splice(c,0,a),this.length++;++c<this.length;)this.b[c]._i=c;else e?this.f.replaceChild(a,e):(this.f.appendChild(a),this.length++),this.b[c]=a;return this};p.clear=function(){return this.remove(0,this.length)};
p.destroy=function(a){a&&this.unload();this.w=this.v=this.l=this.o=this.f=this.b=null;this.length=0;this.g={}};p.append=function(a,b,c){if("number"===typeof b){c=b;b=null;var e=!0}else e=c||0===c;for(var f=a.length,d=0;d<f;d++)this.add(a[d],b,e?c++:null);return this};
p.remove=function(a,b,c){var e=this.length;a&&("object"===typeof a?a=a._i:0>a&&(a=e+a-1));if(!e||a>=e)return this;0>b?(a-=b+1,0>a&&(a=0),b*=-1):b||(b=1);if(!a&&b>=e){var f=this.b;b=f.length;this.f.textContent="";this.f._d=this.b=c?Array(c):[];e=0}else f=this.b.splice(a,b),e-=b;this.length=e;if(a<e)for(;a<e;a++)this.b[a]._i=a;var d;if(this.m){a=this.m.length;if(d=this.size){if(a>=d)return this;a+b>d&&(f.splice(d-a),b=f.length)}if(this.cache&&1<b&&!this.key){d=f;c=d.length;for(var g=c/2|0,k=0,h;k<g;k++)h=
d[k],d[k]=d[c-k-1],d[c-k-1]=h}d=a+1;B[this.o]=this.m=a?this.m.concat(f):f}a=this.key;c=this.A;for(g=0;g<b;g++)k=f[g],e&&this.f.removeChild(k),a&&(h=k._k,this.g[h]=null,c&&(c[h]=k,d&&(k._n=d+g-1)));return this};p.replace=function(a,b,c,e){"undefined"===typeof e&&(e=a._i);this.add(b,c,e,a);this.key&&(b=a._k,this.g[b]=null,this.A&&(this.A[b]=a));this.m&&(b=this.m,this.key&&(a._n=b.length),b[b.length]=a);return this};
p.update=function(a,b,c,e){"undefined"===typeof e&&("number"===typeof a?(e=a,a=this.b[a]):e=a._i);if(this.key){var f=a._k,d=b[this.key];f!==d&&(this.g[f]=null,this.g[d]=a,a._k=d)}return this.apply(a,b,c,e)};
function I(a,b){for(var c=a.l.length,e={},f=Array(c),d=0,g;d<c;d++){g=a.l[d];var k=d,h;if(!(h=e[g])){h=b;for(var m=0,u=g.length,n="";m<u;m++){var q=g[m];n+=q;e[n]?h=e[n]:(">"===q?h=h.firstElementChild:"+"===q?h=h.nextElementSibling:"|"===q&&(h=h.firstChild),e[n]=h)}}f[k]=h}a.cache&&(b.$={});return b._p=f}var J;
function H(a,b,c,e,f){if(!c){var d=A[b.n+(a.cache?"$":"")];if(d)return a.v=d.v,a.u=d.u,a.l=d.l,d.node}d=document.createElement(b.t||"div");c||(c=0,e="&",J="",a.l=[],d._p=f=[],d.$={});var g=b.s,k=b.i,h=b.x,m=b.h,u=b.a,n=b.c,q=b.j,l=a.l.length,r=0,v="";q&&(v+=";"+q,-1<v.indexOf("self")&&(r=2));n&&("object"===typeof n?(n=n[0],v+=a.cache?";v="+n+";if(s._c"+l+"!==v){s._c"+l+"=v;self.className=v}":";self.className="+n,r++):d.className=n);if(u){var z;u&&(z=Object.keys(u));for(n=0;n<z.length;n++){q=z[n];
var x=void 0;!u||(x=u[q]);"object"===typeof x?(x=x[0],v+=a.cache?";v="+x+";if(s['_a_"+q+l+"']!==v){s['_a_"+q+l+"']=v;self.setAttribute('"+q+"',v)}":";self.setAttribute('"+q+"',"+x+")",r++):d.setAttribute(q,x)}}g&&("string"===typeof g?d.style.cssText=g:g.length&&(g=g[0],v+=a.cache?";v="+g+";if(s._cs"+l+"!==v){s._cs"+l+"=v;(self._s||(self._s=self.style)).cssText=v}":";self.style.cssText="+g,r++));k||(h?((z="object"===typeof h)&&(h=h[0]),g=document.createTextNode(h),z&&(r&&l++,a.l[l]=e+"|",f[l]=g,K(r,
a.cache?";v="+h+";if(s._x"+l+"!==v){s._x"+l+"=v;self.nodeValue=v}":";self.nodeValue="+h,l),r&&l--),d.appendChild(g)):m&&("object"===typeof m?(m=m[0],v+=a.cache?";v="+m+";if(s._h"+l+"!==v){s._h"+l+"=v;self.innerHTML=v}":";self.innerHTML="+m,r++):d.innerHTML=m));r?(a.l[l]=e,f[l]=d,a.u=!1,K(r,v,l)):v&&(J+=v);if(k)if(k.length)for(h=">",l=0;l<k.length;l++)l&&(h+="+"),r=k[l],d.appendChild(H(a,r,c+l+1,e+h,f));else d.appendChild(H(a,k,c+1,e+">",f));c||(!a.u&&J&&(a.v=Function("p","s","data","index","view",
'"use strict";var self,v'+J)),A[b.n+(a.cache?"$":"")]={v:a.v,u:a.u,l:a.l,node:d});return d}function K(a,b,c){J=1<a?J+(";self=p["+c+"]"+b):J+b.replace(/self/g,"p["+c+"]")}D.prototype.unload=function(a){a?"object"===typeof a&&(a=a.n):a=this.o;a&&(y[a]=A[a]=null,B[a]=[],C[a]={},A[a+"$"]=null);return this};D.unregister=D.unload=D.prototype.unload;(function(){var a=this||window,b;(b=a.define)&&b.amd?b([],function(){return D}):(b=a.modules)?b.mikado=D:"object"===typeof a.exports?a.module.exports=D:a.Mikado=D})();}).call(this);
