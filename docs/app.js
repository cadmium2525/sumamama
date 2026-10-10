var Ye=(n,t,e)=>()=>{if(e)throw e[0];try{return n&&(t=n(n=0)),t}catch(i){throw e=[i],i}};var Jf=(n,t)=>()=>{try{return t||n((t={exports:{}}).exports,t),t.exports}catch(e){throw t=0,e}};function $f(n){for(let t=n.length-1;t>=0;--t)if(n[t]>=65535)return!0;return!1}function jf(n){return ArrayBuffer.isView(n)&&!(n instanceof DataView)}function fa(n){return document.createElementNS("http://www.w3.org/1999/xhtml",n)}function fd(){let n=fa("canvas");return n.style.display="block",n}function pa(...n){let t="THREE."+n.shift();Mr?Mr("log",t,...n):console.log(t,...n)}function pd(n){let t=n[0];if(typeof t=="string"&&t.startsWith("TSL:")){let e=n[1];e&&e.isStackTrace?n[0]+=" "+e.getLocation():n[1]='Stack trace not available. Enable "THREE.Node.captureStackTrace" to capture stack traces.'}return n}function oe(...n){n=pd(n);let t="THREE."+n.shift();if(Mr)Mr("warn",t,...n);else{let e=n[0];e&&e.isStackTrace?console.warn(e.getError(t)):console.warn(t,...n)}}function ue(...n){n=pd(n);let t="THREE."+n.shift();if(Mr)Mr("error",t,...n);else{let e=n[0];e&&e.isStackTrace?console.error(e.getError(t)):console.error(t,...n)}}function Fs(...n){let t=n.join(" ");t in Q0||(Q0[t]=!0,oe(...n))}function md(n,t,e){return new Promise(function(i,s){function r(){switch(n.clientWaitSync(t,n.SYNC_FLUSH_COMMANDS_BIT,0)){case n.WAIT_FAILED:s();break;case n.TIMEOUT_EXPIRED:setTimeout(r,e);break;default:i()}}setTimeout(r,e)})}function jn(){let n=Math.random()*4294967295|0,t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(Ii[n&255]+Ii[n>>8&255]+Ii[n>>16&255]+Ii[n>>24&255]+"-"+Ii[t&255]+Ii[t>>8&255]+"-"+Ii[t>>16&15|64]+Ii[t>>24&255]+"-"+Ii[e&63|128]+Ii[e>>8&255]+"-"+Ii[e>>16&255]+Ii[e>>24&255]+Ii[i&255]+Ii[i>>8&255]+Ii[i>>16&255]+Ii[i>>24&255]).toLowerCase()}function Me(n,t,e){return Math.max(t,Math.min(e,n))}function Kf(n,t){return(n%t+t)%t}function Jc(n,t,e){return(1-e)*n+e*t}function An(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return n/4294967295;case Uint16Array:return n/65535;case Uint8Array:case Uint8ClampedArray:return n/255;case Int32Array:return Math.max(n/2147483647,-1);case Int16Array:return Math.max(n/32767,-1);case Int8Array:return Math.max(n/127,-1);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function $e(n,t){switch(t.constructor){case Float32Array:return n;case Uint32Array:return Math.round(n*4294967295);case Uint16Array:return Math.round(n*65535);case Uint8Array:case Uint8ClampedArray:return Math.round(n*255);case Int32Array:return Math.round(n*2147483647);case Int16Array:return Math.round(n*32767);case Int8Array:return Math.round(n*127);default:throw new Error("THREE.MathUtils: Invalid component type.")}}function Qf(){let n={enabled:!0,workingColorSpace:ua,spaces:{},convert:function(s,r,a){return this.enabled===!1||r===a||!r||!a||(this.spaces[r].transfer===We&&(s.r=Kn(s.r),s.g=Kn(s.g),s.b=Kn(s.b)),this.spaces[r].primaries!==this.spaces[a].primaries&&(s.applyMatrix3(this.spaces[r].toXYZ),s.applyMatrix3(this.spaces[a].fromXYZ)),this.spaces[a].transfer===We&&(s.r=yr(s.r),s.g=yr(s.g),s.b=yr(s.b))),s},workingToColorSpace:function(s,r){return this.convert(s,this.workingColorSpace,r)},colorSpaceToWorking:function(s,r){return this.convert(s,r,this.workingColorSpace)},getPrimaries:function(s){return this.spaces[s].primaries},getTransfer:function(s){return s===ss?da:this.spaces[s].transfer},getToneMappingMode:function(s){return this.spaces[s].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(s,r=this.workingColorSpace){return s.fromArray(this.spaces[r].luminanceCoefficients)},define:function(s){Object.assign(this.spaces,s)},_getMatrix:function(s,r,a){return s.copy(this.spaces[r].toXYZ).multiply(this.spaces[a].fromXYZ)},_getDrawingBufferColorSpace:function(s){return this.spaces[s].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(s=this.workingColorSpace){return this.spaces[s].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(s,r){return Fs("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),n.workingToColorSpace(s,r)},toWorkingColorSpace:function(s,r){return Fs("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),n.colorSpaceToWorking(s,r)}},t=[.64,.33,.3,.6,.15,.06],e=[.2126,.7152,.0722],i=[.3127,.329];return n.define({[ua]:{primaries:t,whitePoint:i,transfer:da,toXYZ:eu,fromXYZ:iu,luminanceCoefficients:e,workingColorSpaceConfig:{unpackColorSpace:Ai},outputColorSpaceConfig:{drawingBufferColorSpace:Ai}},[Ai]:{primaries:t,whitePoint:i,transfer:We,toXYZ:eu,fromXYZ:iu,luminanceCoefficients:e,outputColorSpaceConfig:{drawingBufferColorSpace:Ai}}}),n}function Kn(n){return n<.04045?n*.0773993808:Math.pow(n*.9478672986+.0521327014,2.4)}function yr(n){return n<.0031308?n*12.92:1.055*Math.pow(n,.41666)-.055}function Kc(n){return typeof HTMLImageElement<"u"&&n instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&n instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&n instanceof ImageBitmap?Qo.getDataURL(n):n.data?{data:Array.from(n.data),width:n.width,height:n.height,type:n.data.constructor.name}:(oe("Texture: Unable to serialize Texture."),{})}function eh(n,t,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?n+(t-n)*6*e:e<1/2?t:e<2/3?n+(t-n)*6*(2/3-e):n}function ch(n,t,e,i,s){for(let r=0,a=n.length-3;r<=a;r+=3){Ds.fromArray(n,r);let o=s.x*Math.abs(Ds.x)+s.y*Math.abs(Ds.y)+s.z*Math.abs(Ds.z),l=t.dot(Ds),c=e.dot(Ds),h=i.dot(Ds);if(Math.max(-Math.max(l,c,h),Math.min(l,c,h))>o)return!1}return!0}function bo(n,t,e,i,s,r){fr.subVectors(n,e).addScalar(.5).multiply(i),s!==void 0?(ia.x=r*fr.x-s*fr.y,ia.y=s*fr.x+r*fr.y):ia.copy(fr),n.copy(t),n.x+=ia.x,n.y+=ia.y,n.applyMatrix4(yd)}function mp(n,t,e,i,s,r,a,o){let l;if(t.side===Ze?l=i.intersectTriangle(a,r,s,!0,o):l=i.intersectTriangle(s,r,a,t.side===Vi,o),l===null)return null;Co.copy(o),Co.applyMatrix4(n.matrixWorld);let c=e.ray.origin.distanceTo(Co);return c<e.near||c>e.far?null:{distance:c,point:Co.clone(),object:n}}function Lo(n,t,e,i,s,r,a,o,l,c){n.getVertexPosition(o,wo),n.getVertexPosition(l,To),n.getVertexPosition(c,Ro);let h=mp(n,t,e,i,wo,To,Ro,mu);if(h){let d=new I;$n.getBarycoord(mu,wo,To,Ro,d),s&&(h.uv=$n.getInterpolatedAttribute(s,o,l,c,d,new vt)),r&&(h.uv1=$n.getInterpolatedAttribute(r,o,l,c,d,new vt)),a&&(h.normal=$n.getInterpolatedAttribute(a,o,l,c,d,new I),h.normal.dot(i.direction)>0&&h.normal.multiplyScalar(-1));let u={a:o,b:l,c,normal:new I,materialIndex:0};$n.getNormal(wo,To,Ro,u.normal),h.face=u,h.barycoord=d}return h}function Uo(n,t,e,i,s,r,a){let o=n.geometry.attributes.position;if(il.fromBufferAttribute(o,s),nl.fromBufferAttribute(o,r),e.distanceSqToSegment(il,nl,gh,vu)>i)return;gh.applyMatrix4(n.matrixWorld);let c=t.ray.origin.distanceTo(gh);if(!(c<t.near||c>t.far))return{distance:c,point:vu.clone().applyMatrix4(n.matrixWorld),index:a,face:null,faceIndex:null,barycoord:null,object:n}}function bu(n,t,e,i,s,r,a){let o=Th.distanceSqToPoint(n);if(o<e){let l=new I;Th.closestPointToPoint(n,l),l.applyMatrix4(i);let c=s.ray.origin.distanceTo(l);if(c<s.near||c>s.far)return;r.push({distance:c,distanceToRay:Math.sqrt(o),point:l,index:t,face:null,faceIndex:null,barycoord:null,object:a})}}function t0(){let n=0,t=0,e=0,i=0;function s(r,a,o,l){n=r,t=o,e=-3*r+3*a-2*o-l,i=2*r-2*a+o+l}return{initCatmullRom:function(r,a,o,l,c){s(a,o,c*(o-r),c*(l-a))},initNonuniformCatmullRom:function(r,a,o,l,c,h,d){let u=(a-r)/c-(o-r)/(c+h)+(o-a)/h,f=(o-a)/h-(l-a)/(h+d)+(l-o)/d;u*=h,f*=h,s(a,o,u,f)},calc:function(r){let a=r*r,o=a*r;return n+t*r+e*a+i*o}}}function Eu(n,t,e,i,s){let r=(i-t)*.5,a=(s-e)*.5,o=n*n,l=n*o;return(2*e-2*i+r+a)*l+(-3*e+3*i-2*r-a)*o+r*n+e}function yp(n,t){let e=1-n;return e*e*t}function vp(n,t){return 2*(1-n)*n*t}function _p(n,t){return n*n*t}function la(n,t,e,i){return yp(n,t)+vp(n,e)+_p(n,i)}function bp(n,t){let e=1-n;return e*e*e*t}function Mp(n,t){let e=1-n;return 3*e*e*n*t}function Sp(n,t){return 3*(1-n)*n*n*t}function Ep(n,t){return n*n*n*t}function ca(n,t,e,i,s){return bp(n,t)+Mp(n,e)+Sp(n,i)+Ep(n,s)}function wp(n,t,e=2){let i=t&&t.length,s=i?t[0]*e:n.length,r=vd(n,0,s,e,!0),a=[];if(!r||r.next===r.prev)return a;let o,l,c;if(i&&(r=Lp(n,t,r,e)),n.length>80*e){o=n[0],l=n[1];let h=o,d=l;for(let u=e;u<s;u+=e){let f=n[u],g=n[u+1];f<o&&(o=f),g<l&&(l=g),f>h&&(h=f),g>d&&(d=g)}c=Math.max(h-o,d-l),c=c!==0?32767/c:0}return Ca(r,a,e,o,l,c,0),a}function vd(n,t,e,i,s){let r;if(s===zp(n,t,e,i)>0)for(let a=t;a<e;a+=i)r=wu(a/i|0,n[a],n[a+1],r);else for(let a=e-i;a>=t;a-=i)r=wu(a/i|0,n[a],n[a+1],r);return r&&Dr(r,r.next)&&(Pa(r),r=r.next),r}function Os(n,t){if(!n)return n;t||(t=n);let e=n,i;do if(i=!1,!e.steiner&&(Dr(e,e.next)||li(e.prev,e,e.next)===0)){if(Pa(e),e=t=e.prev,e===e.next)break;i=!0}else e=e.next;while(i||e!==t);return t}function Ca(n,t,e,i,s,r,a){if(!n)return;!a&&r&&Np(n,i,s,r);let o=n;for(;n.prev!==n.next;){let l=n.prev,c=n.next;if(r?Rp(n,i,s,r):Tp(n)){t.push(l.i,n.i,c.i),Pa(n),n=c.next,o=c.next;continue}if(n=c,n===o){a?a===1?(n=Ap(Os(n),t),Ca(n,t,e,i,s,r,2)):a===2&&Cp(n,t,e,i,s,r):Ca(Os(n),t,e,i,s,r,1);break}}}function Tp(n){let t=n.prev,e=n,i=n.next;if(li(t,e,i)>=0)return!1;let s=t.x,r=e.x,a=i.x,o=t.y,l=e.y,c=i.y,h=Math.min(s,r,a),d=Math.min(o,l,c),u=Math.max(s,r,a),f=Math.max(o,l,c),g=i.next;for(;g!==t;){if(g.x>=h&&g.x<=u&&g.y>=d&&g.y<=f&&oa(s,o,r,l,a,c,g.x,g.y)&&li(g.prev,g,g.next)>=0)return!1;g=g.next}return!0}function Rp(n,t,e,i){let s=n.prev,r=n,a=n.next;if(li(s,r,a)>=0)return!1;let o=s.x,l=r.x,c=a.x,h=s.y,d=r.y,u=a.y,f=Math.min(o,l,c),g=Math.min(h,d,u),v=Math.max(o,l,c),m=Math.max(h,d,u),p=Rh(f,g,t,e,i),b=Rh(v,m,t,e,i),w=n.prevZ,_=n.nextZ;for(;w&&w.z>=p&&_&&_.z<=b;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&oa(o,h,l,d,c,u,w.x,w.y)&&li(w.prev,w,w.next)>=0||(w=w.prevZ,_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&oa(o,h,l,d,c,u,_.x,_.y)&&li(_.prev,_,_.next)>=0))return!1;_=_.nextZ}for(;w&&w.z>=p;){if(w.x>=f&&w.x<=v&&w.y>=g&&w.y<=m&&w!==s&&w!==a&&oa(o,h,l,d,c,u,w.x,w.y)&&li(w.prev,w,w.next)>=0)return!1;w=w.prevZ}for(;_&&_.z<=b;){if(_.x>=f&&_.x<=v&&_.y>=g&&_.y<=m&&_!==s&&_!==a&&oa(o,h,l,d,c,u,_.x,_.y)&&li(_.prev,_,_.next)>=0)return!1;_=_.nextZ}return!0}function Ap(n,t){let e=n;do{let i=e.prev,s=e.next.next;!Dr(i,s)&&bd(i,e,e.next,s)&&La(i,s)&&La(s,i)&&(t.push(i.i,e.i,s.i),Pa(e),Pa(e.next),e=n=s),e=e.next}while(e!==n);return Os(e)}function Cp(n,t,e,i,s,r){let a=n;do{let o=a.next.next;for(;o!==a.prev;){if(a.i!==o.i&&kp(a,o)){let l=Md(a,o);a=Os(a,a.next),l=Os(l,l.next),Ca(a,t,e,i,s,r,0),Ca(l,t,e,i,s,r,0);return}o=o.next}a=a.next}while(a!==n)}function Lp(n,t,e,i){let s=[];for(let r=0,a=t.length;r<a;r++){let o=t[r]*i,l=r<a-1?t[r+1]*i:n.length,c=vd(n,o,l,i,!1);c===c.next&&(c.steiner=!0),s.push(Bp(c))}s.sort(Pp);for(let r=0;r<s.length;r++)e=Ip(s[r],e);return e}function Pp(n,t){let e=n.x-t.x;if(e===0&&(e=n.y-t.y,e===0)){let i=(n.next.y-n.y)/(n.next.x-n.x),s=(t.next.y-t.y)/(t.next.x-t.x);e=i-s}return e}function Ip(n,t){let e=Dp(n,t);if(!e)return t;let i=Md(e,n);return Os(i,i.next),Os(e,e.next)}function Dp(n,t){let e=t,i=n.x,s=n.y,r=-1/0,a;if(Dr(n,e))return e;do{if(Dr(n,e.next))return e.next;if(s<=e.y&&s>=e.next.y&&e.next.y!==e.y){let d=e.x+(s-e.y)*(e.next.x-e.x)/(e.next.y-e.y);if(d<=i&&d>r&&(r=d,a=e.x<e.next.x?e:e.next,d===i))return a}e=e.next}while(e!==t);if(!a)return null;let o=a,l=a.x,c=a.y,h=1/0;e=a;do{if(i>=e.x&&e.x>=l&&i!==e.x&&_d(s<c?i:r,s,l,c,s<c?r:i,s,e.x,e.y)){let d=Math.abs(s-e.y)/(i-e.x);La(e,n)&&(d<h||d===h&&(e.x>a.x||e.x===a.x&&Up(a,e)))&&(a=e,h=d)}e=e.next}while(e!==o);return a}function Up(n,t){return li(n.prev,n,t.prev)<0&&li(t.next,n,n.next)<0}function Np(n,t,e,i){let s=n;do s.z===0&&(s.z=Rh(s.x,s.y,t,e,i)),s.prevZ=s.prev,s.nextZ=s.next,s=s.next;while(s!==n);s.prevZ.nextZ=null,s.prevZ=null,Fp(s)}function Fp(n){let t,e=1;do{let i=n,s;n=null;let r=null;for(t=0;i;){t++;let a=i,o=0;for(let c=0;c<e&&(o++,a=a.nextZ,!!a);c++);let l=e;for(;o>0||l>0&&a;)o!==0&&(l===0||!a||i.z<=a.z)?(s=i,i=i.nextZ,o--):(s=a,a=a.nextZ,l--),r?r.nextZ=s:n=s,s.prevZ=r,r=s;i=a}r.nextZ=null,e*=2}while(t>1);return n}function Rh(n,t,e,i,s){return n=(n-e)*s|0,t=(t-i)*s|0,n=(n|n<<8)&16711935,n=(n|n<<4)&252645135,n=(n|n<<2)&858993459,n=(n|n<<1)&1431655765,t=(t|t<<8)&16711935,t=(t|t<<4)&252645135,t=(t|t<<2)&858993459,t=(t|t<<1)&1431655765,n|t<<1}function Bp(n){let t=n,e=n;do(t.x<e.x||t.x===e.x&&t.y<e.y)&&(e=t),t=t.next;while(t!==n);return e}function _d(n,t,e,i,s,r,a,o){return(s-a)*(t-o)>=(n-a)*(r-o)&&(n-a)*(i-o)>=(e-a)*(t-o)&&(e-a)*(r-o)>=(s-a)*(i-o)}function oa(n,t,e,i,s,r,a,o){return!(n===a&&t===o)&&_d(n,t,e,i,s,r,a,o)}function kp(n,t){return n.next.i!==t.i&&n.prev.i!==t.i&&!Op(n,t)&&(La(n,t)&&La(t,n)&&Hp(n,t)&&(li(n.prev,n,t.prev)||li(n,t.prev,t))||Dr(n,t)&&li(n.prev,n,n.next)>0&&li(t.prev,t,t.next)>0)}function li(n,t,e){return(t.y-n.y)*(e.x-t.x)-(t.x-n.x)*(e.y-t.y)}function Dr(n,t){return n.x===t.x&&n.y===t.y}function bd(n,t,e,i){let s=ko(li(n,t,e)),r=ko(li(n,t,i)),a=ko(li(e,i,n)),o=ko(li(e,i,t));return!!(s!==r&&a!==o||s===0&&Bo(n,e,t)||r===0&&Bo(n,i,t)||a===0&&Bo(e,n,i)||o===0&&Bo(e,t,i))}function Bo(n,t,e){return t.x<=Math.max(n.x,e.x)&&t.x>=Math.min(n.x,e.x)&&t.y<=Math.max(n.y,e.y)&&t.y>=Math.min(n.y,e.y)}function ko(n){return n>0?1:n<0?-1:0}function Op(n,t){let e=n;do{if(e.i!==n.i&&e.next.i!==n.i&&e.i!==t.i&&e.next.i!==t.i&&bd(e,e.next,n,t))return!0;e=e.next}while(e!==n);return!1}function La(n,t){return li(n.prev,n,n.next)<0?li(n,t,n.next)>=0&&li(n,n.prev,t)>=0:li(n,t,n.prev)<0||li(n,n.next,t)<0}function Hp(n,t){let e=n,i=!1,s=(n.x+t.x)/2,r=(n.y+t.y)/2;do e.y>r!=e.next.y>r&&e.next.y!==e.y&&s<(e.next.x-e.x)*(r-e.y)/(e.next.y-e.y)+e.x&&(i=!i),e=e.next;while(e!==n);return i}function Md(n,t){let e=Ah(n.i,n.x,n.y),i=Ah(t.i,t.x,t.y),s=n.next,r=t.prev;return n.next=t,t.prev=n,e.next=s,s.prev=e,i.next=e,e.prev=i,r.next=i,i.prev=r,i}function wu(n,t,e,i){let s=Ah(n,t,e);return i?(s.next=i.next,s.prev=i,i.next.prev=s,i.next=s):(s.prev=s,s.next=s),s}function Pa(n){n.next.prev=n.prev,n.prev.next=n.next,n.prevZ&&(n.prevZ.nextZ=n.nextZ),n.nextZ&&(n.nextZ.prevZ=n.prevZ)}function Ah(n,t,e){return{i:n,x:t,y:e,prev:null,next:null,z:0,prevZ:null,nextZ:null,steiner:!1}}function zp(n,t,e,i){let s=0;for(let r=t,a=e-i;r<e;r+=i)s+=(n[a]-n[r])*(n[r+1]+n[a+1]),a=r;return s}function Tu(n){let t=n.length;t>2&&n[t-1].equals(n[0])&&n.pop()}function Ru(n,t){for(let e=0;e<t.length;e++)n.push(t[e].x),n.push(t[e].y)}function Vp(n,t,e){if(e.shapes=[],Array.isArray(n))for(let i=0,s=n.length;i<s;i++){let r=n[i];e.shapes.push(r.uuid)}else e.shapes.push(n.uuid);return e.options=Object.assign({},t),t.extrudePath!==void 0&&(e.options.extrudePath=t.extrudePath.toJSON()),e}function Wp(n,t){if(t.shapes=[],Array.isArray(n))for(let e=0,i=n.length;e<i;e++){let s=n[e];t.shapes.push(s.uuid)}else t.shapes.push(n.uuid);return t}function Xs(n){let t={};for(let e in n){t[e]={};for(let i in n[e]){let s=n[e][i];if(Au(s))s.isRenderTargetTexture?(oe("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),t[e][i]=null):t[e][i]=s.clone();else if(Array.isArray(s))if(Au(s[0])){let r=[];for(let a=0,o=s.length;a<o;a++)r[a]=s[a].clone();t[e][i]=r}else t[e][i]=s.slice();else t[e][i]=s}}return t}function Ui(n){let t={};for(let e=0;e<n.length;e++){let i=Xs(n[e]);for(let s in i)t[s]=i[s]}return t}function Au(n){return n&&(n.isColor||n.isMatrix3||n.isMatrix4||n.isVector2||n.isVector3||n.isVector4||n.isTexture||n.isQuaternion)}function Xp(n){let t=[];for(let e=0;e<n.length;e++)t.push(n[e].clone());return t}function e0(n){let t=n.getRenderTarget();return t===null?n.outputColorSpace:t.isXRRenderTarget===!0?t.texture.colorSpace:Te.workingColorSpace}function mr(n,t){return!n||n.constructor===t?n:typeof t.BYTES_PER_ELEMENT=="number"?new t(n):Array.prototype.slice.call(n)}function _h(n){return n!==void 0&&n.inTangents!==void 0&&n.outTangents!==void 0}function Ed(n,t,e,i,s){let r=1-n;return r*r*r*t+3*r*r*n*e+3*r*n*n*i+n*n*n*s}function Zp(n,t,e,i,s){let r=1-n;return 3*r*r*(e-t)+6*r*n*(i-e)+3*n*n*(s-i)}function Jp(n,t,e,i,s){let r=(n-t)/(s-t);for(let a=0;a<8;a++){let o=Ed(r,t,e,i,s)-n;if(Math.abs(o)<1e-10)break;let l=Zp(r,t,e,i,s);if(Math.abs(l)<1e-10)break;r=Math.max(0,Math.min(1,r-o/l))}return r}function Cu(n,t){for(let e=0,i=n.length;e!==i;e+=2)n[e]*=t}function s0(n,t,e,i){let s=sm(i);switch(e){case $h:return n*t;case Or:return n*t/s.components*s.byteLength;case Dl:return n*t/s.components*s.byteLength;case ws:return n*t*2/s.components*s.byteLength;case Ul:return n*t*2/s.components*s.byteLength;case jh:return n*t*3/s.components*s.byteLength;case on:return n*t*4/s.components*s.byteLength;case Nl:return n*t*4/s.components*s.byteLength;case Ga:case Va:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Wa:case Xa:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Bl:case Ol:return Math.max(n,16)*Math.max(t,8)/4;case Fl:case kl:return Math.max(n,8)*Math.max(t,8)/2;case Hl:case zl:case Vl:case Wl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*8;case Gl:case qa:case Xl:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case ql:return Math.floor((n+3)/4)*Math.floor((t+3)/4)*16;case Yl:return Math.floor((n+4)/5)*Math.floor((t+3)/4)*16;case Zl:return Math.floor((n+4)/5)*Math.floor((t+4)/5)*16;case Jl:return Math.floor((n+5)/6)*Math.floor((t+4)/5)*16;case $l:return Math.floor((n+5)/6)*Math.floor((t+5)/6)*16;case jl:return Math.floor((n+7)/8)*Math.floor((t+4)/5)*16;case Kl:return Math.floor((n+7)/8)*Math.floor((t+5)/6)*16;case Ql:return Math.floor((n+7)/8)*Math.floor((t+7)/8)*16;case tc:return Math.floor((n+9)/10)*Math.floor((t+4)/5)*16;case ec:return Math.floor((n+9)/10)*Math.floor((t+5)/6)*16;case ic:return Math.floor((n+9)/10)*Math.floor((t+7)/8)*16;case nc:return Math.floor((n+9)/10)*Math.floor((t+9)/10)*16;case sc:return Math.floor((n+11)/12)*Math.floor((t+9)/10)*16;case rc:return Math.floor((n+11)/12)*Math.floor((t+11)/12)*16;case ac:case oc:case lc:return Math.ceil(n/4)*Math.ceil(t/4)*16;case cc:case hc:return Math.ceil(n/4)*Math.ceil(t/4)*8;case Ya:case uc:return Math.ceil(n/4)*Math.ceil(t/4)*16}throw new Error(`Unable to determine texture byte length for ${e} format.`)}function sm(n){switch(n){case Wi:case qh:return{byteLength:1,components:1};case Br:case Yh:case bn:return{byteLength:2,components:1};case Pl:case Il:return{byteLength:2,components:4};case _n:case Ll:case an:return{byteLength:4,components:1};case Zh:case Jh:return{byteLength:4,components:3}}throw new Error(`THREE.TextureUtils: Unknown texture type ${n}.`)}var Uu,Uh,Nu,ka,Fu,Fr,Vi,Ze,ke,On,bs,Xe,Nh,Fh,Bu,Vs,ku,Ou,Hu,zu,Gu,Vu,Wu,Xu,Bh,kh,qu,Yu,Zu,Ju,$u,ju,Ku,Qu,td,Vo,Wo,Xo,vr,qo,Yo,Zo,Jo,Tl,ed,id,vn,Oh,Hh,zh,Gh,Vh,Wh,Oa,Xh,Ms,Ws,Rl,Al,Ha,_r,Cn,$o,pi,nd,za,Ci,Cl,Ss,Wi,qh,Yh,Br,Ll,_n,an,bn,Pl,Il,kr,Zh,Jh,$h,jh,on,Pn,Es,Or,Dl,ws,Ul,Nl,Ga,Va,Wa,Xa,Fl,Bl,kl,Ol,Hl,zl,Gl,Vl,Wl,qa,Xl,ql,Yl,Zl,Jl,$l,jl,Kl,Ql,tc,ec,ic,nc,sc,rc,ac,oc,lc,cc,hc,Ya,uc,ha,jo,zo,Mh,Sh,Eh,wh,sd,Hr,rd,ss,Ai,ua,da,We,Go,ad,od,ld,cd,dc,hd,ud,fc,dd,Kh,Za,Qh,xn,br,Q0,Mr,gd,In,Ii,Zc,Ko,vt,Dn,I,$c,tu,pe,jc,eu,iu,Te,tr,Qo,tp,Sr,ep,Qc,ki,Qe,tl,Hi,ma,el,Ie,er,fn,ip,np,us,uo,Zi,nu,su,Un,ga,sp,ru,ir,Xn,fo,jr,rp,ap,au,ou,lu,cu,op,nr,th,se,zt,lp,Er,xd,ds,po,gt,Di,Qn,pn,qn,ih,Yn,sr,rr,hu,nh,sh,rh,ah,oh,lh,$n,Nn,Zn,mn,mo,ar,or,lr,fs,ps,Is,Kr,go,xo,Ds,fi,yo,cp,He,xa,ya,ae,hp,Qr,hh,Fn,up,rn,uh,cr,Ji,ta,Mi,xe,va,Bi,wr,dh,dp,fp,gn,pp,$i,yi,hr,ea,ur,dr,fr,ia,yd,vo,na,_o,uu,fh,du,Si,Jn,ph,Mo,So,Tr,Se,fu,Us,Eo,pu,wo,To,Ro,mh,Ao,mu,Co,At,Bs,Rr,pr,gu,Po,xu,gp,sa,ra,_a,Ns,xp,Io,Ar,Cr,il,nl,yu,aa,Do,gh,vu,ba,Lr,_u,Th,No,Fo,Pr,Ma,ts,gs,sl,Sa,Ne,ks,Bn,Fe,le,rl,ji,Ir,al,Mu,Su,xh,yh,vh,yn,Ea,ol,wa,ll,Ta,Ra,xs,cl,hl,Aa,ci,Ch,Ln,zi,Gp,Hs,Gi,es,Ia,kn,Ct,ti,is,Sd,qp,Yp,ai,ul,Be,zs,Da,dl,fl,ys,pl,ml,gl,xl,Ki,vs,yl,vl,_l,Ua,_s,bl,Ml,wd,Sl,Ur,Gs,bh,Lu,Pu,Na,Oo,Ho,Rn,Fa,ms,Iu,Du,xi,Lh,Ba,Nr,Ph,ns,gr,xr,El,wl,i0,$p,n0,jp,Kp,Qp,tm,em,im,nm,Ih,ri,mv,Dh,r0=Ye(()=>{Uu=0,Uh=1,Nu=2,ka=1,Fu=2,Fr=3,Vi=0,Ze=1,ke=2,On=0,bs=1,Xe=2,Nh=3,Fh=4,Bu=5,Vs=100,ku=101,Ou=102,Hu=103,zu=104,Gu=200,Vu=201,Wu=202,Xu=203,Bh=204,kh=205,qu=206,Yu=207,Zu=208,Ju=209,$u=210,ju=211,Ku=212,Qu=213,td=214,Vo=0,Wo=1,Xo=2,vr=3,qo=4,Yo=5,Zo=6,Jo=7,Tl=0,ed=1,id=2,vn=0,Oh=1,Hh=2,zh=3,Gh=4,Vh=5,Wh=6,Oa=7,Xh=300,Ms=301,Ws=302,Rl=303,Al=304,Ha=306,_r=1e3,Cn=1001,$o=1002,pi=1003,nd=1004,za=1005,Ci=1006,Cl=1007,Ss=1008,Wi=1009,qh=1010,Yh=1011,Br=1012,Ll=1013,_n=1014,an=1015,bn=1016,Pl=1017,Il=1018,kr=1020,Zh=35902,Jh=35899,$h=1021,jh=1022,on=1023,Pn=1026,Es=1027,Or=1028,Dl=1029,ws=1030,Ul=1031,Nl=1033,Ga=33776,Va=33777,Wa=33778,Xa=33779,Fl=35840,Bl=35841,kl=35842,Ol=35843,Hl=36196,zl=37492,Gl=37496,Vl=37488,Wl=37489,qa=37490,Xl=37491,ql=37808,Yl=37809,Zl=37810,Jl=37811,$l=37812,jl=37813,Kl=37814,Ql=37815,tc=37816,ec=37817,ic=37818,nc=37819,sc=37820,rc=37821,ac=36492,oc=36494,lc=36495,cc=36283,hc=36284,Ya=36285,uc=36286,ha=2300,jo=2301,zo=2302,Mh=2303,Sh=2400,Eh=2401,wh=2402,sd=3200,Hr=0,rd=1,ss="",Ai="srgb",ua="srgb-linear",da="linear",We="srgb",Go=7680,ad=519,od=512,ld=513,cd=514,dc=515,hd=516,ud=517,fc=518,dd=519,Kh=35044,Za=35048,Qh="300 es",xn=2e3,br=2001;Q0={},Mr=null;gd={[Vo]:Wo,[Xo]:Zo,[qo]:Jo,[vr]:Yo,[Wo]:Vo,[Zo]:Xo,[Jo]:qo,[Yo]:vr},In=class{addEventListener(t,e){this._listeners===void 0&&(this._listeners={});let i=this._listeners;i[t]===void 0&&(i[t]=[]),i[t].indexOf(e)===-1&&i[t].push(e)}hasEventListener(t,e){let i=this._listeners;return i===void 0?!1:i[t]!==void 0&&i[t].indexOf(e)!==-1}removeEventListener(t,e){let i=this._listeners;if(i===void 0)return;let s=i[t];if(s!==void 0){let r=s.indexOf(e);r!==-1&&s.splice(r,1)}}dispatchEvent(t){let e=this._listeners;if(e===void 0)return;let i=e[t.type];if(i!==void 0){t.target=this;let s=i.slice(0);for(let r=0,a=s.length;r<a;r++)s[r].call(this,t);t.target=null}}},Ii=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],Zc=Math.PI/180,Ko=180/Math.PI;vt=class n{static{n.prototype.isVector2=!0}constructor(t=0,e=0){this.x=t,this.y=e}get width(){return this.x}set width(t){this.x=t}get height(){return this.y}set height(t){this.y=t}set(t,e){return this.x=t,this.y=e,this}setScalar(t){return this.x=t,this.y=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;default:throw new Error("THREE.Vector2: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;default:throw new Error("THREE.Vector2: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y)}copy(t){return this.x=t.x,this.y=t.y,this}add(t){return this.x+=t.x,this.y+=t.y,this}addScalar(t){return this.x+=t,this.y+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this}subScalar(t){return this.x-=t,this.y-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this}multiply(t){return this.x*=t.x,this.y*=t.y,this}multiplyScalar(t){return this.x*=t,this.y*=t,this}divide(t){return this.x/=t.x,this.y/=t.y,this}divideScalar(t){return this.multiplyScalar(1/t)}applyMatrix3(t){let e=this.x,i=this.y,s=t.elements;return this.x=s[0]*e+s[3]*i+s[6],this.y=s[1]*e+s[4]*i+s[7],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(t){return this.x*t.x+this.y*t.y}cross(t){return this.x*t.y-this.y*t.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y;return e*e+i*i}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this}equals(t){return t.x===this.x&&t.y===this.y}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this}rotateAround(t,e){let i=Math.cos(e),s=Math.sin(e),r=this.x-t.x,a=this.y-t.y;return this.x=r*i-a*s+t.x,this.y=r*s+a*i+t.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}},Dn=class{constructor(t=0,e=0,i=0,s=1){this.isQuaternion=!0,this._x=t,this._y=e,this._z=i,this._w=s}static slerpFlat(t,e,i,s,r,a,o){let l=i[s+0],c=i[s+1],h=i[s+2],d=i[s+3],u=r[a+0],f=r[a+1],g=r[a+2],v=r[a+3];if(d!==v||l!==u||c!==f||h!==g){let m=l*u+c*f+h*g+d*v;m<0&&(u=-u,f=-f,g=-g,v=-v,m=-m);let p=1-o;if(m<.9995){let b=Math.acos(m),w=Math.sin(b);p=Math.sin(p*b)/w,o=Math.sin(o*b)/w,l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+v*o}else{l=l*p+u*o,c=c*p+f*o,h=h*p+g*o,d=d*p+v*o;let b=1/Math.sqrt(l*l+c*c+h*h+d*d);l*=b,c*=b,h*=b,d*=b}}t[e]=l,t[e+1]=c,t[e+2]=h,t[e+3]=d}static multiplyQuaternionsFlat(t,e,i,s,r,a){let o=i[s],l=i[s+1],c=i[s+2],h=i[s+3],d=r[a],u=r[a+1],f=r[a+2],g=r[a+3];return t[e]=o*g+h*d+l*f-c*u,t[e+1]=l*g+h*u+c*d-o*f,t[e+2]=c*g+h*f+o*u-l*d,t[e+3]=h*g-o*d-l*u-c*f,t}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get w(){return this._w}set w(t){this._w=t,this._onChangeCallback()}set(t,e,i,s){return this._x=t,this._y=e,this._z=i,this._w=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(t){return this._x=t.x,this._y=t.y,this._z=t.z,this._w=t.w,this._onChangeCallback(),this}setFromEuler(t,e=!0){let i=t._x,s=t._y,r=t._z,a=t._order,o=Math.cos,l=Math.sin,c=o(i/2),h=o(s/2),d=o(r/2),u=l(i/2),f=l(s/2),g=l(r/2);switch(a){case"XYZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"YXZ":this._x=u*h*d+c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"ZXY":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d-u*f*g;break;case"ZYX":this._x=u*h*d-c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d+u*f*g;break;case"YZX":this._x=u*h*d+c*f*g,this._y=c*f*d+u*h*g,this._z=c*h*g-u*f*d,this._w=c*h*d-u*f*g;break;case"XZY":this._x=u*h*d-c*f*g,this._y=c*f*d-u*h*g,this._z=c*h*g+u*f*d,this._w=c*h*d+u*f*g;break;default:oe("Quaternion: .setFromEuler() encountered an unknown order: "+a)}return e===!0&&this._onChangeCallback(),this}setFromAxisAngle(t,e){let i=e/2,s=Math.sin(i);return this._x=t.x*s,this._y=t.y*s,this._z=t.z*s,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(t){let e=t.elements,i=e[0],s=e[4],r=e[8],a=e[1],o=e[5],l=e[9],c=e[2],h=e[6],d=e[10],u=i+o+d;if(u>0){let f=.5/Math.sqrt(u+1);this._w=.25/f,this._x=(h-l)*f,this._y=(r-c)*f,this._z=(a-s)*f}else if(i>o&&i>d){let f=2*Math.sqrt(1+i-o-d);this._w=(h-l)/f,this._x=.25*f,this._y=(s+a)/f,this._z=(r+c)/f}else if(o>d){let f=2*Math.sqrt(1+o-i-d);this._w=(r-c)/f,this._x=(s+a)/f,this._y=.25*f,this._z=(l+h)/f}else{let f=2*Math.sqrt(1+d-i-o);this._w=(a-s)/f,this._x=(r+c)/f,this._y=(l+h)/f,this._z=.25*f}return this._onChangeCallback(),this}setFromUnitVectors(t,e){let i=t.dot(e)+1;return i<1e-8?(i=0,Math.abs(t.x)>Math.abs(t.z)?(this._x=-t.y,this._y=t.x,this._z=0,this._w=i):(this._x=0,this._y=-t.z,this._z=t.y,this._w=i)):(this._x=t.y*e.z-t.z*e.y,this._y=t.z*e.x-t.x*e.z,this._z=t.x*e.y-t.y*e.x,this._w=i),this.normalize()}angleTo(t){return 2*Math.acos(Math.abs(Me(this.dot(t),-1,1)))}rotateTowards(t,e){let i=this.angleTo(t);if(i===0)return this;let s=Math.min(1,e/i);return this.slerp(t,s),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(t){return this._x*t._x+this._y*t._y+this._z*t._z+this._w*t._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let t=this.length();return t===0?(this._x=0,this._y=0,this._z=0,this._w=1):(t=1/t,this._x=this._x*t,this._y=this._y*t,this._z=this._z*t,this._w=this._w*t),this._onChangeCallback(),this}multiply(t){return this.multiplyQuaternions(this,t)}premultiply(t){return this.multiplyQuaternions(t,this)}multiplyQuaternions(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=e._x,l=e._y,c=e._z,h=e._w;return this._x=i*h+a*o+s*c-r*l,this._y=s*h+a*l+r*o-i*c,this._z=r*h+a*c+i*l-s*o,this._w=a*h-i*o-s*l-r*c,this._onChangeCallback(),this}slerp(t,e){let i=t._x,s=t._y,r=t._z,a=t._w,o=this.dot(t);o<0&&(i=-i,s=-s,r=-r,a=-a,o=-o);let l=1-e;if(o<.9995){let c=Math.acos(o),h=Math.sin(c);l=Math.sin(l*c)/h,e=Math.sin(e*c)/h,this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this._onChangeCallback()}else this._x=this._x*l+i*e,this._y=this._y*l+s*e,this._z=this._z*l+r*e,this._w=this._w*l+a*e,this.normalize();return this}slerpQuaternions(t,e,i){return this.copy(t).slerp(e,i)}random(){let t=2*Math.PI*Math.random(),e=2*Math.PI*Math.random(),i=Math.random(),s=Math.sqrt(1-i),r=Math.sqrt(i);return this.set(s*Math.sin(t),s*Math.cos(t),r*Math.sin(e),r*Math.cos(e))}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._w===this._w}fromArray(t,e=0){return this._x=t[e],this._y=t[e+1],this._z=t[e+2],this._w=t[e+3],this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._w,t}fromBufferAttribute(t,e){return this._x=t.getX(e),this._y=t.getY(e),this._z=t.getZ(e),this._w=t.getW(e),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}},I=class n{static{n.prototype.isVector3=!0}constructor(t=0,e=0,i=0){this.x=t,this.y=e,this.z=i}set(t,e,i){return i===void 0&&(i=this.z),this.x=t,this.y=e,this.z=i,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;default:throw new Error("THREE.Vector3: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("THREE.Vector3: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this}multiplyVectors(t,e){return this.x=t.x*e.x,this.y=t.y*e.y,this.z=t.z*e.z,this}applyEuler(t){return this.applyQuaternion(tu.setFromEuler(t))}applyAxisAngle(t,e){return this.applyQuaternion(tu.setFromAxisAngle(t,e))}applyMatrix3(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[3]*i+r[6]*s,this.y=r[1]*e+r[4]*i+r[7]*s,this.z=r[2]*e+r[5]*i+r[8]*s,this}applyNormalMatrix(t){return this.applyMatrix3(t).normalize()}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=t.elements,a=1/(r[3]*e+r[7]*i+r[11]*s+r[15]);return this.x=(r[0]*e+r[4]*i+r[8]*s+r[12])*a,this.y=(r[1]*e+r[5]*i+r[9]*s+r[13])*a,this.z=(r[2]*e+r[6]*i+r[10]*s+r[14])*a,this}applyQuaternion(t){let e=this.x,i=this.y,s=this.z,r=t.x,a=t.y,o=t.z,l=t.w,c=2*(a*s-o*i),h=2*(o*e-r*s),d=2*(r*i-a*e);return this.x=e+l*c+a*d-o*h,this.y=i+l*h+o*c-r*d,this.z=s+l*d+r*h-a*c,this}project(t){return this.applyMatrix4(t.matrixWorldInverse).applyMatrix4(t.projectionMatrix)}unproject(t){return this.applyMatrix4(t.projectionMatrixInverse).applyMatrix4(t.matrixWorld)}transformDirection(t){let e=this.x,i=this.y,s=this.z,r=t.elements;return this.x=r[0]*e+r[4]*i+r[8]*s,this.y=r[1]*e+r[5]*i+r[9]*s,this.z=r[2]*e+r[6]*i+r[10]*s,this.normalize()}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this}divideScalar(t){return this.multiplyScalar(1/t)}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this.z=Me(this.z,t.z,e.z),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this.z=Me(this.z,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this}cross(t){return this.crossVectors(this,t)}crossVectors(t,e){let i=t.x,s=t.y,r=t.z,a=e.x,o=e.y,l=e.z;return this.x=s*l-r*o,this.y=r*a-i*l,this.z=i*o-s*a,this}projectOnVector(t){let e=t.lengthSq();if(e===0)return this.set(0,0,0);let i=t.dot(this)/e;return this.copy(t).multiplyScalar(i)}projectOnPlane(t){return $c.copy(this).projectOnVector(t),this.sub($c)}reflect(t){return this.sub($c.copy(t).multiplyScalar(2*this.dot(t)))}angleTo(t){let e=Math.sqrt(this.lengthSq()*t.lengthSq());if(e===0)return Math.PI/2;let i=this.dot(t)/e;return Math.acos(Me(i,-1,1))}distanceTo(t){return Math.sqrt(this.distanceToSquared(t))}distanceToSquared(t){let e=this.x-t.x,i=this.y-t.y,s=this.z-t.z;return e*e+i*i+s*s}manhattanDistanceTo(t){return Math.abs(this.x-t.x)+Math.abs(this.y-t.y)+Math.abs(this.z-t.z)}setFromSpherical(t){return this.setFromSphericalCoords(t.radius,t.phi,t.theta)}setFromSphericalCoords(t,e,i){let s=Math.sin(e)*t;return this.x=s*Math.sin(i),this.y=Math.cos(e)*t,this.z=s*Math.cos(i),this}setFromCylindrical(t){return this.setFromCylindricalCoords(t.radius,t.theta,t.y)}setFromCylindricalCoords(t,e,i){return this.x=t*Math.sin(e),this.y=i,this.z=t*Math.cos(e),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this}setFromMatrixScale(t){let e=this.setFromMatrixColumn(t,0).length(),i=this.setFromMatrixColumn(t,1).length(),s=this.setFromMatrixColumn(t,2).length();return this.x=e,this.y=i,this.z=s,this}setFromMatrixColumn(t,e){return this.fromArray(t.elements,e*4)}setFromMatrix3Column(t,e){return this.fromArray(t.elements,e*3)}setFromEuler(t){return this.x=t._x,this.y=t._y,this.z=t._z,this}setFromColor(t){return this.x=t.r,this.y=t.g,this.z=t.b,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){let t=Math.random()*Math.PI*2,e=Math.random()*2-1,i=Math.sqrt(1-e*e);return this.x=i*Math.cos(t),this.y=e,this.z=i*Math.sin(t),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}},$c=new I,tu=new Dn,pe=class n{static{n.prototype.isMatrix3=!0}constructor(t,e,i,s,r,a,o,l,c){this.elements=[1,0,0,0,1,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c)}set(t,e,i,s,r,a,o,l,c){let h=this.elements;return h[0]=t,h[1]=s,h[2]=o,h[3]=e,h[4]=r,h[5]=l,h[6]=i,h[7]=a,h[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],this}extractBasis(t,e,i){return t.setFromMatrix3Column(this,0),e.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(t){let e=t.elements;return this.set(e[0],e[4],e[8],e[1],e[5],e[9],e[2],e[6],e[10]),this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[3],l=i[6],c=i[1],h=i[4],d=i[7],u=i[2],f=i[5],g=i[8],v=s[0],m=s[3],p=s[6],b=s[1],w=s[4],_=s[7],E=s[2],S=s[5],A=s[8];return r[0]=a*v+o*b+l*E,r[3]=a*m+o*w+l*S,r[6]=a*p+o*_+l*A,r[1]=c*v+h*b+d*E,r[4]=c*m+h*w+d*S,r[7]=c*p+h*_+d*A,r[2]=u*v+f*b+g*E,r[5]=u*m+f*w+g*S,r[8]=u*p+f*_+g*A,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[3]*=t,e[6]*=t,e[1]*=t,e[4]*=t,e[7]*=t,e[2]*=t,e[5]*=t,e[8]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8];return e*a*h-e*o*c-i*r*h+i*o*l+s*r*c-s*a*l}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=h*a-o*c,u=o*l-h*r,f=c*r-a*l,g=e*d+i*u+s*f;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);let v=1/g;return t[0]=d*v,t[1]=(s*c-h*i)*v,t[2]=(o*i-s*a)*v,t[3]=u*v,t[4]=(h*e-s*l)*v,t[5]=(s*r-o*e)*v,t[6]=f*v,t[7]=(i*l-c*e)*v,t[8]=(a*e-i*r)*v,this}transpose(){let t,e=this.elements;return t=e[1],e[1]=e[3],e[3]=t,t=e[2],e[2]=e[6],e[6]=t,t=e[5],e[5]=e[7],e[7]=t,this}getNormalMatrix(t){return this.setFromMatrix4(t).invert().transpose()}transposeIntoArray(t){let e=this.elements;return t[0]=e[0],t[1]=e[3],t[2]=e[6],t[3]=e[1],t[4]=e[4],t[5]=e[7],t[6]=e[2],t[7]=e[5],t[8]=e[8],this}setUvTransform(t,e,i,s,r,a,o){let l=Math.cos(r),c=Math.sin(r);return this.set(i*l,i*c,-i*(l*a+c*o)+a+t,-s*c,s*l,-s*(-c*a+l*o)+o+e,0,0,1),this}scale(t,e){return Fs("Matrix3: .scale() is deprecated. Use .makeScale() instead."),this.premultiply(jc.makeScale(t,e)),this}rotate(t){return Fs("Matrix3: .rotate() is deprecated. Use .makeRotation() instead."),this.premultiply(jc.makeRotation(-t)),this}translate(t,e){return Fs("Matrix3: .translate() is deprecated. Use .makeTranslation() instead."),this.premultiply(jc.makeTranslation(t,e)),this}makeTranslation(t,e){return t.isVector2?this.set(1,0,t.x,0,1,t.y,0,0,1):this.set(1,0,t,0,1,e,0,0,1),this}makeRotation(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,i,e,0,0,0,1),this}makeScale(t,e){return this.set(t,0,0,0,e,0,0,0,1),this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<9;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<9;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t}clone(){return new this.constructor().fromArray(this.elements)}},jc=new pe,eu=new pe().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),iu=new pe().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);Te=Qf();Qo=class{static getDataURL(t,e="image/png"){if(/^data:/i.test(t.src)||typeof HTMLCanvasElement>"u")return t.src;let i;if(t instanceof HTMLCanvasElement)i=t;else{tr===void 0&&(tr=fa("canvas")),tr.width=t.width,tr.height=t.height;let s=tr.getContext("2d");t instanceof ImageData?s.putImageData(t,0,0):s.drawImage(t,0,0,t.width,t.height),i=tr}return i.toDataURL(e)}static sRGBToLinear(t){if(typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap){let e=fa("canvas");e.width=t.width,e.height=t.height;let i=e.getContext("2d");i.drawImage(t,0,0,t.width,t.height);let s=i.getImageData(0,0,t.width,t.height),r=s.data;for(let a=0;a<r.length;a++)r[a]=Kn(r[a]/255)*255;return i.putImageData(s,0,0),e}else if(t.data){let e=t.data.slice(0);for(let i=0;i<e.length;i++)e instanceof Uint8Array||e instanceof Uint8ClampedArray?e[i]=Math.floor(Kn(e[i]/255)*255):e[i]=Kn(e[i]);return{data:e,width:t.width,height:t.height}}else return oe("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),t}},tp=0,Sr=class{constructor(t=null){this.isTextureSource=!0,Object.defineProperty(this,"id",{value:tp++}),this.uuid=jn(),this.data=t,this.dataReady=!0,this.version=0}getSize(t){let e=this.data;return typeof HTMLVideoElement<"u"&&e instanceof HTMLVideoElement?t.set(e.videoWidth,e.videoHeight,0):typeof VideoFrame<"u"&&e instanceof VideoFrame?t.set(e.displayWidth,e.displayHeight,0):e!==null?t.set(e.width,e.height,e.depth||0):t.set(0,0,0),t}set needsUpdate(t){t===!0&&this.version++}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.images[this.uuid]!==void 0)return t.images[this.uuid];let i={uuid:this.uuid,url:""},s=this.data;if(s!==null){let r;if(Array.isArray(s)){r=[];for(let a=0,o=s.length;a<o;a++)s[a].isDataTexture?r.push(Kc(s[a].image)):r.push(Kc(s[a]))}else r=Kc(s);i.url=r}return e||(t.images[this.uuid]=i),i}};ep=0,Qc=new I,ki=class n extends In{constructor(t=n.DEFAULT_IMAGE,e=n.DEFAULT_MAPPING,i=Cn,s=Cn,r=Ci,a=Ss,o=on,l=Wi,c=n.DEFAULT_ANISOTROPY,h=ss){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:ep++}),this.uuid=jn(),this.name="",this.source=new Sr(t),this.mipmaps=[],this.mapping=e,this.channel=0,this.wrapS=i,this.wrapT=s,this.magFilter=r,this.minFilter=a,this.anisotropy=c,this.format=o,this.internalFormat=null,this.type=l,this.offset=new vt(0,0),this.repeat=new vt(1,1),this.center=new vt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new pe,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=h,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(t&&t.depth&&t.depth>1),this.pmremVersion=0,this.normalized=!1}get width(){return this.source.getSize(Qc).x}get height(){return this.source.getSize(Qc).y}get depth(){return this.source.getSize(Qc).z}get image(){return this.source.data}set image(t){this.source.data=t}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(t){return this.name=t.name,this.source=t.source,this.mipmaps=t.mipmaps.slice(0),this.mapping=t.mapping,this.channel=t.channel,this.wrapS=t.wrapS,this.wrapT=t.wrapT,this.magFilter=t.magFilter,this.minFilter=t.minFilter,this.anisotropy=t.anisotropy,this.format=t.format,this.internalFormat=t.internalFormat,this.type=t.type,this.normalized=t.normalized,this.offset.copy(t.offset),this.repeat.copy(t.repeat),this.center.copy(t.center),this.rotation=t.rotation,this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrix.copy(t.matrix),this.generateMipmaps=t.generateMipmaps,this.premultiplyAlpha=t.premultiplyAlpha,this.flipY=t.flipY,this.unpackAlignment=t.unpackAlignment,this.colorSpace=t.colorSpace,this.renderTarget=t.renderTarget,this.isRenderTargetTexture=t.isRenderTargetTexture,this.isArrayTexture=t.isArrayTexture,this.userData=JSON.parse(JSON.stringify(t.userData)),this.needsUpdate=!0,this}setValues(t){for(let e in t){let i=t[e];if(i===void 0){oe(`Texture.setValues(): parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Texture.setValues(): property '${e}' does not exist.`);continue}s&&i&&s.isVector2&&i.isVector2||s&&i&&s.isVector3&&i.isVector3||s&&i&&s.isMatrix3&&i.isMatrix3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";if(!e&&t.textures[this.uuid]!==void 0)return t.textures[this.uuid];let i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(t).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,normalized:this.normalized,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),e||(t.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(t){if(this.mapping!==Xh)return t;if(t.applyMatrix3(this.matrix),t.x<0||t.x>1)switch(this.wrapS){case _r:t.x=t.x-Math.floor(t.x);break;case Cn:t.x=t.x<0?0:1;break;case $o:Math.abs(Math.floor(t.x)%2)===1?t.x=Math.ceil(t.x)-t.x:t.x=t.x-Math.floor(t.x);break}if(t.y<0||t.y>1)switch(this.wrapT){case _r:t.y=t.y-Math.floor(t.y);break;case Cn:t.y=t.y<0?0:1;break;case $o:Math.abs(Math.floor(t.y)%2)===1?t.y=Math.ceil(t.y)-t.y:t.y=t.y-Math.floor(t.y);break}return this.flipY&&(t.y=1-t.y),t}set needsUpdate(t){t===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(t){t===!0&&this.pmremVersion++}};ki.DEFAULT_IMAGE=null;ki.DEFAULT_MAPPING=Xh;ki.DEFAULT_ANISOTROPY=1;Qe=class n{static{n.prototype.isVector4=!0}constructor(t=0,e=0,i=0,s=1){this.x=t,this.y=e,this.z=i,this.w=s}get width(){return this.z}set width(t){this.z=t}get height(){return this.w}set height(t){this.w=t}set(t,e,i,s){return this.x=t,this.y=e,this.z=i,this.w=s,this}setScalar(t){return this.x=t,this.y=t,this.z=t,this.w=t,this}setX(t){return this.x=t,this}setY(t){return this.y=t,this}setZ(t){return this.z=t,this}setW(t){return this.w=t,this}setComponent(t,e){switch(t){case 0:this.x=e;break;case 1:this.y=e;break;case 2:this.z=e;break;case 3:this.w=e;break;default:throw new Error("THREE.Vector4: index is out of range: "+t)}return this}getComponent(t){switch(t){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("THREE.Vector4: index is out of range: "+t)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(t){return this.x=t.x,this.y=t.y,this.z=t.z,this.w=t.w!==void 0?t.w:1,this}add(t){return this.x+=t.x,this.y+=t.y,this.z+=t.z,this.w+=t.w,this}addScalar(t){return this.x+=t,this.y+=t,this.z+=t,this.w+=t,this}addVectors(t,e){return this.x=t.x+e.x,this.y=t.y+e.y,this.z=t.z+e.z,this.w=t.w+e.w,this}addScaledVector(t,e){return this.x+=t.x*e,this.y+=t.y*e,this.z+=t.z*e,this.w+=t.w*e,this}sub(t){return this.x-=t.x,this.y-=t.y,this.z-=t.z,this.w-=t.w,this}subScalar(t){return this.x-=t,this.y-=t,this.z-=t,this.w-=t,this}subVectors(t,e){return this.x=t.x-e.x,this.y=t.y-e.y,this.z=t.z-e.z,this.w=t.w-e.w,this}multiply(t){return this.x*=t.x,this.y*=t.y,this.z*=t.z,this.w*=t.w,this}multiplyScalar(t){return this.x*=t,this.y*=t,this.z*=t,this.w*=t,this}applyMatrix4(t){let e=this.x,i=this.y,s=this.z,r=this.w,a=t.elements;return this.x=a[0]*e+a[4]*i+a[8]*s+a[12]*r,this.y=a[1]*e+a[5]*i+a[9]*s+a[13]*r,this.z=a[2]*e+a[6]*i+a[10]*s+a[14]*r,this.w=a[3]*e+a[7]*i+a[11]*s+a[15]*r,this}divide(t){return this.x/=t.x,this.y/=t.y,this.z/=t.z,this.w/=t.w,this}divideScalar(t){return this.multiplyScalar(1/t)}setAxisAngleFromQuaternion(t){this.w=2*Math.acos(t.w);let e=Math.sqrt(1-t.w*t.w);return e<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=t.x/e,this.y=t.y/e,this.z=t.z/e),this}setAxisAngleFromRotationMatrix(t){let e,i,s,r,l=t.elements,c=l[0],h=l[4],d=l[8],u=l[1],f=l[5],g=l[9],v=l[2],m=l[6],p=l[10];if(Math.abs(h-u)<.01&&Math.abs(d-v)<.01&&Math.abs(g-m)<.01){if(Math.abs(h+u)<.1&&Math.abs(d+v)<.1&&Math.abs(g+m)<.1&&Math.abs(c+f+p-3)<.1)return this.set(1,0,0,0),this;e=Math.PI;let w=(c+1)/2,_=(f+1)/2,E=(p+1)/2,S=(h+u)/4,A=(d+v)/4,x=(g+m)/4;return w>_&&w>E?w<.01?(i=0,s=.707106781,r=.707106781):(i=Math.sqrt(w),s=S/i,r=A/i):_>E?_<.01?(i=.707106781,s=0,r=.707106781):(s=Math.sqrt(_),i=S/s,r=x/s):E<.01?(i=.707106781,s=.707106781,r=0):(r=Math.sqrt(E),i=A/r,s=x/r),this.set(i,s,r,e),this}let b=Math.sqrt((m-g)*(m-g)+(d-v)*(d-v)+(u-h)*(u-h));return Math.abs(b)<.001&&(b=1),this.x=(m-g)/b,this.y=(d-v)/b,this.z=(u-h)/b,this.w=Math.acos((c+f+p-1)/2),this}setFromMatrixPosition(t){let e=t.elements;return this.x=e[12],this.y=e[13],this.z=e[14],this.w=e[15],this}min(t){return this.x=Math.min(this.x,t.x),this.y=Math.min(this.y,t.y),this.z=Math.min(this.z,t.z),this.w=Math.min(this.w,t.w),this}max(t){return this.x=Math.max(this.x,t.x),this.y=Math.max(this.y,t.y),this.z=Math.max(this.z,t.z),this.w=Math.max(this.w,t.w),this}clamp(t,e){return this.x=Me(this.x,t.x,e.x),this.y=Me(this.y,t.y,e.y),this.z=Me(this.z,t.z,e.z),this.w=Me(this.w,t.w,e.w),this}clampScalar(t,e){return this.x=Me(this.x,t,e),this.y=Me(this.y,t,e),this.z=Me(this.z,t,e),this.w=Me(this.w,t,e),this}clampLength(t,e){let i=this.length();return this.divideScalar(i||1).multiplyScalar(Me(i,t,e))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(t){return this.x*t.x+this.y*t.y+this.z*t.z+this.w*t.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(t){return this.normalize().multiplyScalar(t)}lerp(t,e){return this.x+=(t.x-this.x)*e,this.y+=(t.y-this.y)*e,this.z+=(t.z-this.z)*e,this.w+=(t.w-this.w)*e,this}lerpVectors(t,e,i){return this.x=t.x+(e.x-t.x)*i,this.y=t.y+(e.y-t.y)*i,this.z=t.z+(e.z-t.z)*i,this.w=t.w+(e.w-t.w)*i,this}equals(t){return t.x===this.x&&t.y===this.y&&t.z===this.z&&t.w===this.w}fromArray(t,e=0){return this.x=t[e],this.y=t[e+1],this.z=t[e+2],this.w=t[e+3],this}toArray(t=[],e=0){return t[e]=this.x,t[e+1]=this.y,t[e+2]=this.z,t[e+3]=this.w,t}fromBufferAttribute(t,e){return this.x=t.getX(e),this.y=t.getY(e),this.z=t.getZ(e),this.w=t.getW(e),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}},tl=class extends In{constructor(t=1,e=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:Ci,depthBuffer:!0,stencilBuffer:!1,resolveColorBuffer:!0,resolveDepthBuffer:!0,resolveStencilBuffer:!0,storeMultisampledColorBuffer:!0,storeMultisampledDepthBuffer:!0,storeMultisampledStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1,useArrayDepthTexture:!1},i),this.isRenderTarget=!0,this.width=t,this.height=e,this.depth=i.depth,this.scissor=new Qe(0,0,t,e),this.scissorTest=!1,this.viewport=new Qe(0,0,t,e),this.textures=[];let s={width:t,height:e,depth:i.depth},r=new ki(s),a=i.count;for(let o=0;o<a;o++)this.textures[o]=r.clone(),this.textures[o].isRenderTargetTexture=!0,this.textures[o].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveColorBuffer=i.resolveColorBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this.storeMultisampledColorBuffer=i.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=i.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=i.storeMultisampledStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview,this.useArrayDepthTexture=i.useArrayDepthTexture}_setTextureOptions(t={}){let e={minFilter:Ci,generateMipmaps:!1,flipY:!1,internalFormat:null};t.mapping!==void 0&&(e.mapping=t.mapping),t.wrapS!==void 0&&(e.wrapS=t.wrapS),t.wrapT!==void 0&&(e.wrapT=t.wrapT),t.wrapR!==void 0&&(e.wrapR=t.wrapR),t.magFilter!==void 0&&(e.magFilter=t.magFilter),t.minFilter!==void 0&&(e.minFilter=t.minFilter),t.format!==void 0&&(e.format=t.format),t.type!==void 0&&(e.type=t.type),t.anisotropy!==void 0&&(e.anisotropy=t.anisotropy),t.colorSpace!==void 0&&(e.colorSpace=t.colorSpace),t.flipY!==void 0&&(e.flipY=t.flipY),t.generateMipmaps!==void 0&&(e.generateMipmaps=t.generateMipmaps),t.internalFormat!==void 0&&(e.internalFormat=t.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(e)}get texture(){return this.textures[0]}set texture(t){this.textures[0]=t}set depthTexture(t){this._depthTexture!==null&&this._depthTexture.renderTarget===this&&(this._depthTexture.renderTarget=null),t!==null&&t.renderTarget===null&&(t.renderTarget=this),this._depthTexture=t}get depthTexture(){return this._depthTexture}setSize(t,e,i=1){if(this.width!==t||this.height!==e||this.depth!==i){this.width=t,this.height=e,this.depth=i;for(let s=0,r=this.textures.length;s<r;s++)this.textures[s].image.width=t,this.textures[s].image.height=e,this.textures[s].image.depth=i,this.textures[s].isData3DTexture!==!0&&(this.textures[s].isArrayTexture=this.textures[s].image.depth>1);this.dispose()}this.viewport.set(0,0,t,e),this.scissor.set(0,0,t,e)}clone(){return new this.constructor().copy(this)}copy(t){this.width=t.width,this.height=t.height,this.depth=t.depth,this.scissor.copy(t.scissor),this.scissorTest=t.scissorTest,this.viewport.copy(t.viewport),this.textures.length=0;for(let e=0,i=t.textures.length;e<i;e++){this.textures[e]=t.textures[e].clone(),this.textures[e].isRenderTargetTexture=!0,this.textures[e].renderTarget=this;let s=Object.assign({},t.textures[e].image);this.textures[e].source=new Sr(s)}if(this.depthBuffer=t.depthBuffer,this.stencilBuffer=t.stencilBuffer,this.resolveColorBuffer=t.resolveColorBuffer,this.resolveDepthBuffer=t.resolveDepthBuffer,this.resolveStencilBuffer=t.resolveStencilBuffer,this.storeMultisampledColorBuffer=t.storeMultisampledColorBuffer,this.storeMultisampledDepthBuffer=t.storeMultisampledDepthBuffer,this.storeMultisampledStencilBuffer=t.storeMultisampledStencilBuffer,t.depthTexture!==null)if(t.depthTexture.renderTarget===t){let e=t.depthTexture.clone();e.renderTarget=null,this.depthTexture=e}else this.depthTexture=t.depthTexture;return this.samples=t.samples,this.multiview=t.multiview,this.useArrayDepthTexture=t.useArrayDepthTexture,this}dispose(){this.dispatchEvent({type:"dispose"})}},Hi=class extends tl{constructor(t=1,e=1,i={}){super(t,e,i),this.isWebGLRenderTarget=!0}},ma=class extends ki{constructor(t=null,e=1,i=1,s=1){super(null),this.isDataArrayTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=pi,this.minFilter=pi,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}addLayerUpdate(t){this.layerUpdates.add(t)}clearLayerUpdates(){this.layerUpdates.clear()}},el=class extends ki{constructor(t=null,e=1,i=1,s=1){super(null),this.isData3DTexture=!0,this.image={data:t,width:e,height:i,depth:s},this.magFilter=pi,this.minFilter=pi,this.wrapR=Cn,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}copy(t){return super.copy(t),this.wrapR=t.wrapR,this}},Ie=class n{static{n.prototype.isMatrix4=!0}constructor(t,e,i,s,r,a,o,l,c,h,d,u,f,g,v,m){this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],t!==void 0&&this.set(t,e,i,s,r,a,o,l,c,h,d,u,f,g,v,m)}set(t,e,i,s,r,a,o,l,c,h,d,u,f,g,v,m){let p=this.elements;return p[0]=t,p[4]=e,p[8]=i,p[12]=s,p[1]=r,p[5]=a,p[9]=o,p[13]=l,p[2]=c,p[6]=h,p[10]=d,p[14]=u,p[3]=f,p[7]=g,p[11]=v,p[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new n().fromArray(this.elements)}copy(t){let e=this.elements,i=t.elements;return e[0]=i[0],e[1]=i[1],e[2]=i[2],e[3]=i[3],e[4]=i[4],e[5]=i[5],e[6]=i[6],e[7]=i[7],e[8]=i[8],e[9]=i[9],e[10]=i[10],e[11]=i[11],e[12]=i[12],e[13]=i[13],e[14]=i[14],e[15]=i[15],this}copyPosition(t){let e=this.elements,i=t.elements;return e[12]=i[12],e[13]=i[13],e[14]=i[14],this}setFromMatrix3(t){let e=t.elements;return this.set(e[0],e[3],e[6],0,e[1],e[4],e[7],0,e[2],e[5],e[8],0,0,0,0,1),this}extractBasis(t,e,i){return this.determinantAffine()===0?(t.set(1,0,0),e.set(0,1,0),i.set(0,0,1),this):(t.setFromMatrixColumn(this,0),e.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(t,e,i){return this.set(t.x,e.x,i.x,0,t.y,e.y,i.y,0,t.z,e.z,i.z,0,0,0,0,1),this}extractRotation(t){if(t.determinantAffine()===0)return this.identity();let e=this.elements,i=t.elements,s=1/er.setFromMatrixColumn(t,0).length(),r=1/er.setFromMatrixColumn(t,1).length(),a=1/er.setFromMatrixColumn(t,2).length();return e[0]=i[0]*s,e[1]=i[1]*s,e[2]=i[2]*s,e[3]=0,e[4]=i[4]*r,e[5]=i[5]*r,e[6]=i[6]*r,e[7]=0,e[8]=i[8]*a,e[9]=i[9]*a,e[10]=i[10]*a,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromEuler(t){let e=this.elements,i=t.x,s=t.y,r=t.z,a=Math.cos(i),o=Math.sin(i),l=Math.cos(s),c=Math.sin(s),h=Math.cos(r),d=Math.sin(r);if(t.order==="XYZ"){let u=a*h,f=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=-l*d,e[8]=c,e[1]=f+g*c,e[5]=u-v*c,e[9]=-o*l,e[2]=v-u*c,e[6]=g+f*c,e[10]=a*l}else if(t.order==="YXZ"){let u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u+v*o,e[4]=g*o-f,e[8]=a*c,e[1]=a*d,e[5]=a*h,e[9]=-o,e[2]=f*o-g,e[6]=v+u*o,e[10]=a*l}else if(t.order==="ZXY"){let u=l*h,f=l*d,g=c*h,v=c*d;e[0]=u-v*o,e[4]=-a*d,e[8]=g+f*o,e[1]=f+g*o,e[5]=a*h,e[9]=v-u*o,e[2]=-a*c,e[6]=o,e[10]=a*l}else if(t.order==="ZYX"){let u=a*h,f=a*d,g=o*h,v=o*d;e[0]=l*h,e[4]=g*c-f,e[8]=u*c+v,e[1]=l*d,e[5]=v*c+u,e[9]=f*c-g,e[2]=-c,e[6]=o*l,e[10]=a*l}else if(t.order==="YZX"){let u=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=v-u*d,e[8]=g*d+f,e[1]=d,e[5]=a*h,e[9]=-o*h,e[2]=-c*h,e[6]=f*d+g,e[10]=u-v*d}else if(t.order==="XZY"){let u=a*l,f=a*c,g=o*l,v=o*c;e[0]=l*h,e[4]=-d,e[8]=c*h,e[1]=u*d+v,e[5]=a*h,e[9]=f*d-g,e[2]=g*d-f,e[6]=o*h,e[10]=v*d+u}return e[3]=0,e[7]=0,e[11]=0,e[12]=0,e[13]=0,e[14]=0,e[15]=1,this}makeRotationFromQuaternion(t){return this.compose(ip,t,np)}lookAt(t,e,i){let s=this.elements;return Zi.subVectors(t,e),Zi.lengthSq()===0&&(Zi.z=1),Zi.normalize(),us.crossVectors(i,Zi),us.lengthSq()===0&&(Math.abs(i.z)===1?Zi.x+=1e-4:Zi.z+=1e-4,Zi.normalize(),us.crossVectors(i,Zi)),us.normalize(),uo.crossVectors(Zi,us),s[0]=us.x,s[4]=uo.x,s[8]=Zi.x,s[1]=us.y,s[5]=uo.y,s[9]=Zi.y,s[2]=us.z,s[6]=uo.z,s[10]=Zi.z,this}multiply(t){return this.multiplyMatrices(this,t)}premultiply(t){return this.multiplyMatrices(t,this)}multiplyMatrices(t,e){let i=t.elements,s=e.elements,r=this.elements,a=i[0],o=i[4],l=i[8],c=i[12],h=i[1],d=i[5],u=i[9],f=i[13],g=i[2],v=i[6],m=i[10],p=i[14],b=i[3],w=i[7],_=i[11],E=i[15],S=s[0],A=s[4],x=s[8],T=s[12],C=s[1],D=s[5],H=s[9],z=s[13],F=s[2],q=s[6],Q=s[10],Y=s[14],mt=s[3],nt=s[7],lt=s[11],ut=s[15];return r[0]=a*S+o*C+l*F+c*mt,r[4]=a*A+o*D+l*q+c*nt,r[8]=a*x+o*H+l*Q+c*lt,r[12]=a*T+o*z+l*Y+c*ut,r[1]=h*S+d*C+u*F+f*mt,r[5]=h*A+d*D+u*q+f*nt,r[9]=h*x+d*H+u*Q+f*lt,r[13]=h*T+d*z+u*Y+f*ut,r[2]=g*S+v*C+m*F+p*mt,r[6]=g*A+v*D+m*q+p*nt,r[10]=g*x+v*H+m*Q+p*lt,r[14]=g*T+v*z+m*Y+p*ut,r[3]=b*S+w*C+_*F+E*mt,r[7]=b*A+w*D+_*q+E*nt,r[11]=b*x+w*H+_*Q+E*lt,r[15]=b*T+w*z+_*Y+E*ut,this}multiplyScalar(t){let e=this.elements;return e[0]*=t,e[4]*=t,e[8]*=t,e[12]*=t,e[1]*=t,e[5]*=t,e[9]*=t,e[13]*=t,e[2]*=t,e[6]*=t,e[10]*=t,e[14]*=t,e[3]*=t,e[7]*=t,e[11]*=t,e[15]*=t,this}determinant(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[12],a=t[1],o=t[5],l=t[9],c=t[13],h=t[2],d=t[6],u=t[10],f=t[14],g=t[3],v=t[7],m=t[11],p=t[15],b=l*f-c*u,w=o*f-c*d,_=o*u-l*d,E=a*f-c*h,S=a*u-l*h,A=a*d-o*h;return e*(v*b-m*w+p*_)-i*(g*b-m*E+p*S)+s*(g*w-v*E+p*A)-r*(g*_-v*S+m*A)}determinantAffine(){let t=this.elements,e=t[0],i=t[4],s=t[8],r=t[1],a=t[5],o=t[9],l=t[2],c=t[6],h=t[10];return e*(a*h-o*c)-i*(r*h-o*l)+s*(r*c-a*l)}transpose(){let t=this.elements,e;return e=t[1],t[1]=t[4],t[4]=e,e=t[2],t[2]=t[8],t[8]=e,e=t[6],t[6]=t[9],t[9]=e,e=t[3],t[3]=t[12],t[12]=e,e=t[7],t[7]=t[13],t[13]=e,e=t[11],t[11]=t[14],t[14]=e,this}setPosition(t,e,i){let s=this.elements;return t.isVector3?(s[12]=t.x,s[13]=t.y,s[14]=t.z):(s[12]=t,s[13]=e,s[14]=i),this}invert(){let t=this.elements,e=t[0],i=t[1],s=t[2],r=t[3],a=t[4],o=t[5],l=t[6],c=t[7],h=t[8],d=t[9],u=t[10],f=t[11],g=t[12],v=t[13],m=t[14],p=t[15],b=e*o-i*a,w=e*l-s*a,_=e*c-r*a,E=i*l-s*o,S=i*c-r*o,A=s*c-r*l,x=h*v-d*g,T=h*m-u*g,C=h*p-f*g,D=d*m-u*v,H=d*p-f*v,z=u*p-f*m,F=b*z-w*H+_*D+E*C-S*T+A*x;if(F===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);let q=1/F;return t[0]=(o*z-l*H+c*D)*q,t[1]=(s*H-i*z-r*D)*q,t[2]=(v*A-m*S+p*E)*q,t[3]=(u*S-d*A-f*E)*q,t[4]=(l*C-a*z-c*T)*q,t[5]=(e*z-s*C+r*T)*q,t[6]=(m*_-g*A-p*w)*q,t[7]=(h*A-u*_+f*w)*q,t[8]=(a*H-o*C+c*x)*q,t[9]=(i*C-e*H-r*x)*q,t[10]=(g*S-v*_+p*b)*q,t[11]=(d*_-h*S-f*b)*q,t[12]=(o*T-a*D-l*x)*q,t[13]=(e*D-i*T+s*x)*q,t[14]=(v*w-g*E-m*b)*q,t[15]=(h*E-d*w+u*b)*q,this}scale(t){let e=this.elements,i=t.x,s=t.y,r=t.z;return e[0]*=i,e[4]*=s,e[8]*=r,e[1]*=i,e[5]*=s,e[9]*=r,e[2]*=i,e[6]*=s,e[10]*=r,e[3]*=i,e[7]*=s,e[11]*=r,this}getMaxScaleOnAxis(){let t=this.elements,e=t[0]*t[0]+t[1]*t[1]+t[2]*t[2],i=t[4]*t[4]+t[5]*t[5]+t[6]*t[6],s=t[8]*t[8]+t[9]*t[9]+t[10]*t[10];return Math.sqrt(Math.max(e,i,s))}makeTranslation(t,e,i){return t.isVector3?this.set(1,0,0,t.x,0,1,0,t.y,0,0,1,t.z,0,0,0,1):this.set(1,0,0,t,0,1,0,e,0,0,1,i,0,0,0,1),this}makeRotationX(t){let e=Math.cos(t),i=Math.sin(t);return this.set(1,0,0,0,0,e,-i,0,0,i,e,0,0,0,0,1),this}makeRotationY(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,0,i,0,0,1,0,0,-i,0,e,0,0,0,0,1),this}makeRotationZ(t){let e=Math.cos(t),i=Math.sin(t);return this.set(e,-i,0,0,i,e,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(t,e){let i=Math.cos(e),s=Math.sin(e),r=1-i,a=t.x,o=t.y,l=t.z,c=r*a,h=r*o;return this.set(c*a+i,c*o-s*l,c*l+s*o,0,c*o+s*l,h*o+i,h*l-s*a,0,c*l-s*o,h*l+s*a,r*l*l+i,0,0,0,0,1),this}makeScale(t,e,i){return this.set(t,0,0,0,0,e,0,0,0,0,i,0,0,0,0,1),this}makeShear(t,e,i,s,r,a){return this.set(1,i,r,0,t,1,a,0,e,s,1,0,0,0,0,1),this}compose(t,e,i){let s=this.elements,r=e._x,a=e._y,o=e._z,l=e._w,c=r+r,h=a+a,d=o+o,u=r*c,f=r*h,g=r*d,v=a*h,m=a*d,p=o*d,b=l*c,w=l*h,_=l*d,E=i.x,S=i.y,A=i.z;return s[0]=(1-(v+p))*E,s[1]=(f+_)*E,s[2]=(g-w)*E,s[3]=0,s[4]=(f-_)*S,s[5]=(1-(u+p))*S,s[6]=(m+b)*S,s[7]=0,s[8]=(g+w)*A,s[9]=(m-b)*A,s[10]=(1-(u+v))*A,s[11]=0,s[12]=t.x,s[13]=t.y,s[14]=t.z,s[15]=1,this}decompose(t,e,i){let s=this.elements;t.x=s[12],t.y=s[13],t.z=s[14];let r=this.determinantAffine();if(r===0)return i.set(1,1,1),e.identity(),this;let a=er.set(s[0],s[1],s[2]).length(),o=er.set(s[4],s[5],s[6]).length(),l=er.set(s[8],s[9],s[10]).length();r<0&&(a=-a),fn.copy(this);let c=1/a,h=1/o,d=1/l;return fn.elements[0]*=c,fn.elements[1]*=c,fn.elements[2]*=c,fn.elements[4]*=h,fn.elements[5]*=h,fn.elements[6]*=h,fn.elements[8]*=d,fn.elements[9]*=d,fn.elements[10]*=d,e.setFromRotationMatrix(fn),i.x=a,i.y=o,i.z=l,this}makePerspective(t,e,i,s,r,a,o=xn,l=!1){let c=this.elements,h=2*r/(e-t),d=2*r/(i-s),u=(e+t)/(e-t),f=(i+s)/(i-s),g,v;if(l)g=r/(a-r),v=a*r/(a-r);else if(o===xn)g=-(a+r)/(a-r),v=-2*a*r/(a-r);else if(o===br)g=-a/(a-r),v=-a*r/(a-r);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=u,c[12]=0,c[1]=0,c[5]=d,c[9]=f,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(t,e,i,s,r,a,o=xn,l=!1){let c=this.elements,h=2/(e-t),d=2/(i-s),u=-(e+t)/(e-t),f=-(i+s)/(i-s),g,v;if(l)g=1/(a-r),v=a/(a-r);else if(o===xn)g=-2/(a-r),v=-(a+r)/(a-r);else if(o===br)g=-1/(a-r),v=-r/(a-r);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+o);return c[0]=h,c[4]=0,c[8]=0,c[12]=u,c[1]=0,c[5]=d,c[9]=0,c[13]=f,c[2]=0,c[6]=0,c[10]=g,c[14]=v,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(t){let e=this.elements,i=t.elements;for(let s=0;s<16;s++)if(e[s]!==i[s])return!1;return!0}fromArray(t,e=0){for(let i=0;i<16;i++)this.elements[i]=t[i+e];return this}toArray(t=[],e=0){let i=this.elements;return t[e]=i[0],t[e+1]=i[1],t[e+2]=i[2],t[e+3]=i[3],t[e+4]=i[4],t[e+5]=i[5],t[e+6]=i[6],t[e+7]=i[7],t[e+8]=i[8],t[e+9]=i[9],t[e+10]=i[10],t[e+11]=i[11],t[e+12]=i[12],t[e+13]=i[13],t[e+14]=i[14],t[e+15]=i[15],t}},er=new I,fn=new Ie,ip=new I(0,0,0),np=new I(1,1,1),us=new I,uo=new I,Zi=new I,nu=new Ie,su=new Dn,Un=class n{constructor(t=0,e=0,i=0,s=n.DEFAULT_ORDER){this.isEuler=!0,this._x=t,this._y=e,this._z=i,this._order=s}get x(){return this._x}set x(t){this._x=t,this._onChangeCallback()}get y(){return this._y}set y(t){this._y=t,this._onChangeCallback()}get z(){return this._z}set z(t){this._z=t,this._onChangeCallback()}get order(){return this._order}set order(t){this._order=t,this._onChangeCallback()}set(t,e,i,s=this._order){return this._x=t,this._y=e,this._z=i,this._order=s,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(t){return this._x=t._x,this._y=t._y,this._z=t._z,this._order=t._order,this._onChangeCallback(),this}setFromRotationMatrix(t,e=this._order,i=!0){let s=t.elements,r=s[0],a=s[4],o=s[8],l=s[1],c=s[5],h=s[9],d=s[2],u=s[6],f=s[10];switch(e){case"XYZ":this._y=Math.asin(Me(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(-h,f),this._z=Math.atan2(-a,r)):(this._x=Math.atan2(u,c),this._z=0);break;case"YXZ":this._x=Math.asin(-Me(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(o,f),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-d,r),this._z=0);break;case"ZXY":this._x=Math.asin(Me(u,-1,1)),Math.abs(u)<.9999999?(this._y=Math.atan2(-d,f),this._z=Math.atan2(-a,c)):(this._y=0,this._z=Math.atan2(l,r));break;case"ZYX":this._y=Math.asin(-Me(d,-1,1)),Math.abs(d)<.9999999?(this._x=Math.atan2(u,f),this._z=Math.atan2(l,r)):(this._x=0,this._z=Math.atan2(-a,c));break;case"YZX":this._z=Math.asin(Me(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-h,c),this._y=Math.atan2(-d,r)):(this._x=0,this._y=Math.atan2(o,f));break;case"XZY":this._z=Math.asin(-Me(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(u,c),this._y=Math.atan2(o,r)):(this._x=Math.atan2(-h,f),this._y=0);break;default:oe("Euler: .setFromRotationMatrix() encountered an unknown order: "+e)}return this._order=e,i===!0&&this._onChangeCallback(),this}setFromQuaternion(t,e,i){return nu.makeRotationFromQuaternion(t),this.setFromRotationMatrix(nu,e,i)}setFromVector3(t,e=this._order){return this.set(t.x,t.y,t.z,e)}reorder(t){return su.setFromEuler(this),this.setFromQuaternion(su,t)}equals(t){return t._x===this._x&&t._y===this._y&&t._z===this._z&&t._order===this._order}fromArray(t){return this._x=t[0],this._y=t[1],this._z=t[2],t[3]!==void 0&&(this._order=t[3]),this._onChangeCallback(),this}toArray(t=[],e=0){return t[e]=this._x,t[e+1]=this._y,t[e+2]=this._z,t[e+3]=this._order,t}_onChange(t){return this._onChangeCallback=t,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}};Un.DEFAULT_ORDER="XYZ";ga=class{constructor(){this.mask=1}set(t){this.mask=(1<<t|0)>>>0}enable(t){this.mask|=1<<t|0}enableAll(){this.mask=-1}toggle(t){this.mask^=1<<t|0}disable(t){this.mask&=~(1<<t|0)}disableAll(){this.mask=0}test(t){return(this.mask&t.mask)!==0}isEnabled(t){return(this.mask&(1<<t|0))!==0}},sp=0,ru=new I,ir=new Dn,Xn=new Ie,fo=new I,jr=new I,rp=new I,ap=new Dn,au=new I(1,0,0),ou=new I(0,1,0),lu=new I(0,0,1),cu={type:"added"},op={type:"removed"},nr={type:"childadded",child:null},th={type:"childremoved",child:null},se=class n extends In{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:sp++}),this.uuid=jn(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=n.DEFAULT_UP.clone();let t=new I,e=new Un,i=new Dn,s=new I(1,1,1);function r(){i.setFromEuler(e,!1)}function a(){e.setFromQuaternion(i,void 0,!1)}e._onChange(r),i._onChange(a),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:t},rotation:{configurable:!0,enumerable:!0,value:e},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:s},modelViewMatrix:{value:new Ie},normalMatrix:{value:new pe}}),this.matrix=new Ie,this.matrixWorld=new Ie,this.matrixAutoUpdate=n.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=n.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new ga,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.static=!1,this.userData={},this.pivot=null}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(t){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(t),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(t){return this.quaternion.premultiply(t),this}setRotationFromAxisAngle(t,e){this.quaternion.setFromAxisAngle(t,e)}setRotationFromEuler(t){this.quaternion.setFromEuler(t,!0)}setRotationFromMatrix(t){this.quaternion.setFromRotationMatrix(t)}setRotationFromQuaternion(t){this.quaternion.copy(t)}rotateOnAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.multiply(ir),this}rotateOnWorldAxis(t,e){return ir.setFromAxisAngle(t,e),this.quaternion.premultiply(ir),this}rotateX(t){return this.rotateOnAxis(au,t)}rotateY(t){return this.rotateOnAxis(ou,t)}rotateZ(t){return this.rotateOnAxis(lu,t)}translateOnAxis(t,e){return ru.copy(t).applyQuaternion(this.quaternion),this.position.add(ru.multiplyScalar(e)),this}translateX(t){return this.translateOnAxis(au,t)}translateY(t){return this.translateOnAxis(ou,t)}translateZ(t){return this.translateOnAxis(lu,t)}localToWorld(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(this.matrixWorld)}worldToLocal(t){return this.updateWorldMatrix(!0,!1),t.applyMatrix4(Xn.copy(this.matrixWorld).invert())}lookAt(t,e,i){t.isVector3?fo.copy(t):fo.set(t,e,i);let s=this.parent;this.updateWorldMatrix(!0,!1),jr.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?Xn.lookAt(jr,fo,this.up):Xn.lookAt(fo,jr,this.up),this.quaternion.setFromRotationMatrix(Xn),s&&(Xn.extractRotation(s.matrixWorld),ir.setFromRotationMatrix(Xn),this.quaternion.premultiply(ir.invert()))}add(t){if(arguments.length>1){for(let e=0;e<arguments.length;e++)this.add(arguments[e]);return this}return t===this?(ue("Object3D.add: object can't be added as a child of itself.",t),this):(t&&t.isObject3D?(t.removeFromParent(),t.parent=this,this.children.push(t),t.dispatchEvent(cu),nr.child=t,this.dispatchEvent(nr),nr.child=null):ue("Object3D.add: object not an instance of THREE.Object3D.",t),this)}remove(t){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}let e=this.children.indexOf(t);return e!==-1&&(t.parent=null,this.children.splice(e,1),t.dispatchEvent(op),th.child=t,this.dispatchEvent(th),th.child=null),this}removeFromParent(){let t=this.parent;return t!==null&&t.remove(this),this}clear(){return this.remove(...this.children)}attach(t){return this.updateWorldMatrix(!0,!1),Xn.copy(this.matrixWorld).invert(),t.parent!==null&&(t.parent.updateWorldMatrix(!0,!1),Xn.multiply(t.parent.matrixWorld)),t.applyMatrix4(Xn),t.removeFromParent(),t.parent=this,this.children.push(t),t.updateWorldMatrix(!1,!0),t.dispatchEvent(cu),nr.child=t,this.dispatchEvent(nr),nr.child=null,this}getObjectById(t){return this.getObjectByProperty("id",t)}getObjectByName(t){return this.getObjectByProperty("name",t)}getObjectByProperty(t,e){if(this[t]===e)return this;for(let i=0,s=this.children.length;i<s;i++){let a=this.children[i].getObjectByProperty(t,e);if(a!==void 0)return a}}getObjectsByProperty(t,e,i=[]){this[t]===e&&i.push(this);let s=this.children;for(let r=0,a=s.length;r<a;r++)s[r].getObjectsByProperty(t,e,i);return i}getWorldPosition(t){return this.updateWorldMatrix(!0,!1),t.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,t,rp),t}getWorldScale(t){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(jr,ap,t),t}getWorldDirection(t){this.updateWorldMatrix(!0,!1);let e=this.matrixWorld.elements;return t.set(e[8],e[9],e[10]).normalize()}raycast(){}intersectsFrustum(){}traverse(t){t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverse(t)}traverseVisible(t){if(this.visible===!1)return;t(this);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].traverseVisible(t)}traverseAncestors(t){let e=this.parent;e!==null&&(t(e),e.traverseAncestors(t))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale);let t=this.pivot;if(t!==null){let e=t.x,i=t.y,s=t.z,r=this.matrix.elements;r[12]+=e-r[0]*e-r[4]*i-r[8]*s,r[13]+=i-r[1]*e-r[5]*i-r[9]*s,r[14]+=s-r[2]*e-r[6]*i-r[10]*s}this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(t){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||t)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,t=!0);let e=this.children;for(let i=0,s=e.length;i<s;i++)e[i].updateMatrixWorld(t)}updateWorldMatrix(t,e,i=!1){let s=this.parent;if(t===!0&&s!==null&&s.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||i)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,i=!0),e===!0){let r=this.children;for(let a=0,o=r.length;a<o;a++)r[a].updateWorldMatrix(!1,!0,i)}}toJSON(t){let e=t===void 0||typeof t=="string",i={};e&&(t={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});let s={};s.uuid=this.uuid,s.type=this.type,s.name=this.name,s.castShadow=this.castShadow,s.receiveShadow=this.receiveShadow,s.visible=this.visible,s.frustumCulled=this.frustumCulled,s.renderOrder=this.renderOrder,s.static=this.static,s.matrixAutoUpdate=this.matrixAutoUpdate,Object.keys(this.userData).length>0&&(s.userData=this.userData),s.layers=this.layers.mask,s.matrix=this.matrix.toArray(),s.up=this.up.toArray(),this.pivot!==null&&(s.pivot=this.pivot.toArray()),this.morphTargetDictionary!==void 0&&(s.morphTargetDictionary=Object.assign({},this.morphTargetDictionary)),this.morphTargetInfluences!==void 0&&(s.morphTargetInfluences=this.morphTargetInfluences.slice()),this.isInstancedMesh&&(s.type="InstancedMesh",s.count=this.count,s.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(s.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(s.type="BatchedMesh",s.perObjectFrustumCulled=this.perObjectFrustumCulled,s.sortObjects=this.sortObjects,s.drawRanges=this._drawRanges,s.reservedRanges=this._reservedRanges,s.geometryInfo=this._geometryInfo.map(o=>({...o,boundingBox:o.boundingBox?o.boundingBox.toJSON():void 0,boundingSphere:o.boundingSphere?o.boundingSphere.toJSON():void 0})),s.instanceInfo=this._instanceInfo.map(o=>({...o})),s.availableInstanceIds=this._availableInstanceIds.slice(),s.availableGeometryIds=this._availableGeometryIds.slice(),s.nextIndexStart=this._nextIndexStart,s.nextVertexStart=this._nextVertexStart,s.geometryCount=this._geometryCount,s.maxInstanceCount=this._maxInstanceCount,s.maxVertexCount=this._maxVertexCount,s.maxIndexCount=this._maxIndexCount,s.geometryInitialized=this._geometryInitialized,s.matricesTexture=this._matricesTexture.toJSON(t),s.indirectTexture=this._indirectTexture.toJSON(t),this._colorsTexture!==null&&(s.colorsTexture=this._colorsTexture.toJSON(t)),this.boundingSphere!==null&&(s.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(s.boundingBox=this.boundingBox.toJSON()));function r(o,l){return o[l.uuid]===void 0&&(o[l.uuid]=l.toJSON(t)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?s.background=this.background.toJSON():this.background.isTexture&&(s.background=this.background.toJSON(t).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(s.environment=this.environment.toJSON(t).uuid);else if(this.isMesh||this.isLine||this.isPoints){s.geometry=r(t.geometries,this.geometry);let o=this.geometry.parameters;if(o!==void 0&&o.shapes!==void 0){let l=o.shapes;if(Array.isArray(l))for(let c=0,h=l.length;c<h;c++){let d=l[c];r(t.shapes,d)}else r(t.shapes,l)}}if(this.isSkinnedMesh&&(s.bindMode=this.bindMode,s.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(r(t.skeletons,this.skeleton),s.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){let o=[];for(let l=0,c=this.material.length;l<c;l++)o.push(r(t.materials,this.material[l]));s.material=o}else s.material=r(t.materials,this.material);if(this.children.length>0){s.children=[];for(let o=0;o<this.children.length;o++)s.children.push(this.children[o].toJSON(t).object)}if(this.animations.length>0){s.animations=[];for(let o=0;o<this.animations.length;o++){let l=this.animations[o];s.animations.push(r(t.animations,l))}}if(e){let o=a(t.geometries),l=a(t.materials),c=a(t.textures),h=a(t.images),d=a(t.shapes),u=a(t.skeletons),f=a(t.animations),g=a(t.nodes);o.length>0&&(i.geometries=o),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),h.length>0&&(i.images=h),d.length>0&&(i.shapes=d),u.length>0&&(i.skeletons=u),f.length>0&&(i.animations=f),g.length>0&&(i.nodes=g)}return i.object=s,i;function a(o){let l=[];for(let c in o){let h=o[c];delete h.metadata,l.push(h)}return l}}clone(t){return new this.constructor().copy(this,t)}copy(t,e=!0){if(this.name=t.name,this.up.copy(t.up),this.position.copy(t.position),this.rotation.order=t.rotation.order,this.quaternion.copy(t.quaternion),this.scale.copy(t.scale),this.pivot=t.pivot!==null?t.pivot.clone():null,this.matrix.copy(t.matrix),this.matrixWorld.copy(t.matrixWorld),this.matrixAutoUpdate=t.matrixAutoUpdate,this.matrixWorldAutoUpdate=t.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=t.matrixWorldNeedsUpdate,this.layers.mask=t.layers.mask,this.visible=t.visible,this.castShadow=t.castShadow,this.receiveShadow=t.receiveShadow,this.frustumCulled=t.frustumCulled,this.renderOrder=t.renderOrder,this.static=t.static,this.animations=t.animations.slice(),this.userData=JSON.parse(JSON.stringify(t.userData)),e===!0)for(let i=0;i<t.children.length;i++){let s=t.children[i];this.add(s.clone())}return this}dispose(){this.dispatchEvent({type:"dispose"})}};se.DEFAULT_UP=new I(0,1,0);se.DEFAULT_MATRIX_AUTO_UPDATE=!0;se.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;zt=class extends se{constructor(){super(),this.isGroup=!0,this.type="Group"}},lp={type:"move"},Er=class{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new zt,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new zt,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new I,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new I),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new zt,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new I,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new I,this._grip.eventsEnabled=!1),this._grip}dispatchEvent(t){return this._targetRay!==null&&this._targetRay.dispatchEvent(t),this._grip!==null&&this._grip.dispatchEvent(t),this._hand!==null&&this._hand.dispatchEvent(t),this}connect(t){if(t&&t.hand){let e=this._hand;if(e)for(let i of t.hand.values())this._getHandJoint(e,i)}return this.dispatchEvent({type:"connected",data:t}),this}disconnect(t){return this.dispatchEvent({type:"disconnected",data:t}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(t,e,i){let s=null,r=null,a=null,o=this._targetRay,l=this._grip,c=this._hand;if(t&&e.session.visibilityState!=="visible-blurred"){if(c&&t.hand){a=!0;for(let v of t.hand.values()){let m=e.getJointPose(v,i),p=this._getHandJoint(c,v);m!==null&&(p.matrix.fromArray(m.transform.matrix),p.matrix.decompose(p.position,p.rotation,p.scale),p.matrixWorldNeedsUpdate=!0,p.jointRadius=m.radius),p.visible=m!==null}let h=c.joints["index-finger-tip"],d=c.joints["thumb-tip"],u=h.position.distanceTo(d.position),f=.02,g=.005;c.inputState.pinching&&u>f+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:t.handedness,target:this})):!c.inputState.pinching&&u<=f-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:t.handedness,target:this}))}else l!==null&&t.gripSpace&&(r=e.getPose(t.gripSpace,i),r!==null&&(l.matrix.fromArray(r.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,r.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(r.linearVelocity)):l.hasLinearVelocity=!1,r.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(r.angularVelocity)):l.hasAngularVelocity=!1,l.eventsEnabled&&l.dispatchEvent({type:"gripUpdated",data:t,target:this})));o!==null&&(s=e.getPose(t.targetRaySpace,i),s===null&&r!==null&&(s=r),s!==null&&(o.matrix.fromArray(s.transform.matrix),o.matrix.decompose(o.position,o.rotation,o.scale),o.matrixWorldNeedsUpdate=!0,s.linearVelocity?(o.hasLinearVelocity=!0,o.linearVelocity.copy(s.linearVelocity)):o.hasLinearVelocity=!1,s.angularVelocity?(o.hasAngularVelocity=!0,o.angularVelocity.copy(s.angularVelocity)):o.hasAngularVelocity=!1,this.dispatchEvent(lp)))}return o!==null&&(o.visible=s!==null),l!==null&&(l.visible=r!==null),c!==null&&(c.visible=a!==null),this}_getHandJoint(t,e){if(t.joints[e.jointName]===void 0){let i=new zt;i.matrixAutoUpdate=!1,i.visible=!1,t.joints[e.jointName]=i,t.add(i)}return t.joints[e.jointName]}},xd={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},ds={h:0,s:0,l:0},po={h:0,s:0,l:0};gt=class{constructor(t,e,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(t,e,i)}set(t,e,i){if(e===void 0&&i===void 0){let s=t;s&&s.isColor?this.copy(s):typeof s=="number"?this.setHex(s):typeof s=="string"&&this.setStyle(s)}else this.setRGB(t,e,i);return this}setScalar(t){return this.r=t,this.g=t,this.b=t,this}setHex(t,e=Ai){return t=Math.floor(t),this.r=(t>>16&255)/255,this.g=(t>>8&255)/255,this.b=(t&255)/255,Te.colorSpaceToWorking(this,e),this}setRGB(t,e,i,s=Te.workingColorSpace){return this.r=t,this.g=e,this.b=i,Te.colorSpaceToWorking(this,s),this}setHSL(t,e,i,s=Te.workingColorSpace){if(t=Kf(t,1),e=Me(e,0,1),i=Me(i,0,1),e===0)this.r=this.g=this.b=i;else{let r=i<=.5?i*(1+e):i+e-i*e,a=2*i-r;this.r=eh(a,r,t+1/3),this.g=eh(a,r,t),this.b=eh(a,r,t-1/3)}return Te.colorSpaceToWorking(this,s),this}setStyle(t,e=Ai){function i(r){r!==void 0&&parseFloat(r)<1&&oe("Color: Alpha component of "+t+" will be ignored.")}let s;if(s=/^(\w+)\(([^\)]*)\)/.exec(t)){let r,a=s[1],o=s[2];switch(a){case"rgb":case"rgba":if(r=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(255,parseInt(r[1],10))/255,Math.min(255,parseInt(r[2],10))/255,Math.min(255,parseInt(r[3],10))/255,e);if(r=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setRGB(Math.min(100,parseInt(r[1],10))/100,Math.min(100,parseInt(r[2],10))/100,Math.min(100,parseInt(r[3],10))/100,e);break;case"hsl":case"hsla":if(r=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(o))return i(r[4]),this.setHSL(parseFloat(r[1])/360,parseFloat(r[2])/100,parseFloat(r[3])/100,e);break;default:oe("Color: Unknown color model "+t)}}else if(s=/^\#([A-Fa-f\d]+)$/.exec(t)){let r=s[1],a=r.length;if(a===3)return this.setRGB(parseInt(r.charAt(0),16)/15,parseInt(r.charAt(1),16)/15,parseInt(r.charAt(2),16)/15,e);if(a===6)return this.setHex(parseInt(r,16),e);oe("Color: Invalid hex color "+t)}else if(t&&t.length>0)return this.setColorName(t,e);return this}setColorName(t,e=Ai){let i=xd[t.toLowerCase()];return i!==void 0?this.setHex(i,e):oe("Color: Unknown color "+t),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(t){return this.r=t.r,this.g=t.g,this.b=t.b,this}copySRGBToLinear(t){return this.r=Kn(t.r),this.g=Kn(t.g),this.b=Kn(t.b),this}copyLinearToSRGB(t){return this.r=yr(t.r),this.g=yr(t.g),this.b=yr(t.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(t=Ai){return Te.workingToColorSpace(Di.copy(this),t),Math.round(Me(Di.r*255,0,255))*65536+Math.round(Me(Di.g*255,0,255))*256+Math.round(Me(Di.b*255,0,255))}getHexString(t=Ai){return("000000"+this.getHex(t).toString(16)).slice(-6)}getHSL(t,e=Te.workingColorSpace){Te.workingToColorSpace(Di.copy(this),e);let i=Di.r,s=Di.g,r=Di.b,a=Math.max(i,s,r),o=Math.min(i,s,r),l,c,h=(o+a)/2;if(o===a)l=0,c=0;else{let d=a-o;switch(c=h<=.5?d/(a+o):d/(2-a-o),a){case i:l=(s-r)/d+(s<r?6:0);break;case s:l=(r-i)/d+2;break;case r:l=(i-s)/d+4;break}l/=6}return t.h=l,t.s=c,t.l=h,t}getRGB(t,e=Te.workingColorSpace){return Te.workingToColorSpace(Di.copy(this),e),t.r=Di.r,t.g=Di.g,t.b=Di.b,t}getStyle(t=Ai){Te.workingToColorSpace(Di.copy(this),t);let e=Di.r,i=Di.g,s=Di.b;return t!==Ai?`color(${t} ${e.toFixed(3)} ${i.toFixed(3)} ${s.toFixed(3)})`:`rgb(${Math.round(e*255)},${Math.round(i*255)},${Math.round(s*255)})`}offsetHSL(t,e,i){return this.getHSL(ds),this.setHSL(ds.h+t,ds.s+e,ds.l+i)}add(t){return this.r+=t.r,this.g+=t.g,this.b+=t.b,this}addColors(t,e){return this.r=t.r+e.r,this.g=t.g+e.g,this.b=t.b+e.b,this}addScalar(t){return this.r+=t,this.g+=t,this.b+=t,this}sub(t){return this.r=Math.max(0,this.r-t.r),this.g=Math.max(0,this.g-t.g),this.b=Math.max(0,this.b-t.b),this}multiply(t){return this.r*=t.r,this.g*=t.g,this.b*=t.b,this}multiplyScalar(t){return this.r*=t,this.g*=t,this.b*=t,this}lerp(t,e){return this.r+=(t.r-this.r)*e,this.g+=(t.g-this.g)*e,this.b+=(t.b-this.b)*e,this}lerpColors(t,e,i){return this.r=t.r+(e.r-t.r)*i,this.g=t.g+(e.g-t.g)*i,this.b=t.b+(e.b-t.b)*i,this}lerpHSL(t,e){this.getHSL(ds),t.getHSL(po);let i=Jc(ds.h,po.h,e),s=Jc(ds.s,po.s,e),r=Jc(ds.l,po.l,e);return this.setHSL(i,s,r),this}setFromVector3(t){return this.r=t.x,this.g=t.y,this.b=t.z,this}applyMatrix3(t){let e=this.r,i=this.g,s=this.b,r=t.elements;return this.r=r[0]*e+r[3]*i+r[6]*s,this.g=r[1]*e+r[4]*i+r[7]*s,this.b=r[2]*e+r[5]*i+r[8]*s,this}equals(t){return t.r===this.r&&t.g===this.g&&t.b===this.b}fromArray(t,e=0){return this.r=t[e],this.g=t[e+1],this.b=t[e+2],this}toArray(t=[],e=0){return t[e]=this.r,t[e+1]=this.g,t[e+2]=this.b,t}fromBufferAttribute(t,e){return this.r=t.getX(e),this.g=t.getY(e),this.b=t.getZ(e),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}},Di=new gt;gt.NAMES=xd;Qn=class extends se{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new Un,this.environmentIntensity=1,this.environmentRotation=new Un,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(t,e){return super.copy(t,e),t.background!==null&&(this.background=t.background.clone()),t.environment!==null&&(this.environment=t.environment.clone()),t.fog!==null&&(this.fog=t.fog.clone()),this.backgroundBlurriness=t.backgroundBlurriness,this.backgroundIntensity=t.backgroundIntensity,this.backgroundRotation.copy(t.backgroundRotation),this.environmentIntensity=t.environmentIntensity,this.environmentRotation.copy(t.environmentRotation),t.overrideMaterial!==null&&(this.overrideMaterial=t.overrideMaterial.clone()),this.matrixAutoUpdate=t.matrixAutoUpdate,this}toJSON(t){let e=super.toJSON(t);return this.fog!==null&&(e.object.fog=this.fog.toJSON()),e.object.backgroundBlurriness=this.backgroundBlurriness,e.object.backgroundIntensity=this.backgroundIntensity,e.object.backgroundRotation=this.backgroundRotation.toArray(),e.object.environmentIntensity=this.environmentIntensity,e.object.environmentRotation=this.environmentRotation.toArray(),e}},pn=new I,qn=new I,ih=new I,Yn=new I,sr=new I,rr=new I,hu=new I,nh=new I,sh=new I,rh=new I,ah=new Qe,oh=new Qe,lh=new Qe,$n=class n{constructor(t=new I,e=new I,i=new I){this.a=t,this.b=e,this.c=i}static getNormal(t,e,i,s){s.subVectors(i,e),pn.subVectors(t,e),s.cross(pn);let r=s.lengthSq();return r>0?s.multiplyScalar(1/Math.sqrt(r)):s.set(0,0,0)}static getBarycoord(t,e,i,s,r){pn.subVectors(s,e),qn.subVectors(i,e),ih.subVectors(t,e);let a=pn.dot(pn),o=pn.dot(qn),l=pn.dot(ih),c=qn.dot(qn),h=qn.dot(ih),d=a*c-o*o;if(d===0)return r.set(0,0,0),null;let u=1/d,f=(c*l-o*h)*u,g=(a*h-o*l)*u;return r.set(1-f-g,g,f)}static containsPoint(t,e,i,s){return this.getBarycoord(t,e,i,s,Yn)===null?!1:Yn.x>=0&&Yn.y>=0&&Yn.x+Yn.y<=1}static getInterpolation(t,e,i,s,r,a,o,l){return this.getBarycoord(t,e,i,s,Yn)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(r,Yn.x),l.addScaledVector(a,Yn.y),l.addScaledVector(o,Yn.z),l)}static getInterpolatedAttribute(t,e,i,s,r,a){return ah.setScalar(0),oh.setScalar(0),lh.setScalar(0),ah.fromBufferAttribute(t,e),oh.fromBufferAttribute(t,i),lh.fromBufferAttribute(t,s),a.setScalar(0),a.addScaledVector(ah,r.x),a.addScaledVector(oh,r.y),a.addScaledVector(lh,r.z),a}static isFrontFacing(t,e,i,s){return pn.subVectors(i,e),qn.subVectors(t,e),pn.cross(qn).dot(s)<0}set(t,e,i){return this.a.copy(t),this.b.copy(e),this.c.copy(i),this}setFromPointsAndIndices(t,e,i,s){return this.a.copy(t[e]),this.b.copy(t[i]),this.c.copy(t[s]),this}setFromAttributeAndIndices(t,e,i,s){return this.a.fromBufferAttribute(t,e),this.b.fromBufferAttribute(t,i),this.c.fromBufferAttribute(t,s),this}clone(){return new this.constructor().copy(this)}copy(t){return this.a.copy(t.a),this.b.copy(t.b),this.c.copy(t.c),this}getArea(){return pn.subVectors(this.c,this.b),qn.subVectors(this.a,this.b),pn.cross(qn).length()*.5}getMidpoint(t){return t.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(t){return n.getNormal(this.a,this.b,this.c,t)}getPlane(t){return t.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(t,e){return n.getBarycoord(t,this.a,this.b,this.c,e)}getInterpolation(t,e,i,s,r){return n.getInterpolation(t,this.a,this.b,this.c,e,i,s,r)}containsPoint(t){return n.containsPoint(t,this.a,this.b,this.c)}isFrontFacing(t){return n.isFrontFacing(this.a,this.b,this.c,t)}intersectsBox(t){return t.intersectsTriangle(this)}closestPointToPoint(t,e){let i=this.a,s=this.b,r=this.c,a,o;sr.subVectors(s,i),rr.subVectors(r,i),nh.subVectors(t,i);let l=sr.dot(nh),c=rr.dot(nh);if(l<=0&&c<=0)return e.copy(i);sh.subVectors(t,s);let h=sr.dot(sh),d=rr.dot(sh);if(h>=0&&d<=h)return e.copy(s);let u=l*d-h*c;if(u<=0&&l>=0&&h<=0)return a=l/(l-h),e.copy(i).addScaledVector(sr,a);rh.subVectors(t,r);let f=sr.dot(rh),g=rr.dot(rh);if(g>=0&&f<=g)return e.copy(r);let v=f*c-l*g;if(v<=0&&c>=0&&g<=0)return o=c/(c-g),e.copy(i).addScaledVector(rr,o);let m=h*g-f*d;if(m<=0&&d-h>=0&&f-g>=0)return hu.subVectors(r,s),o=(d-h)/(d-h+(f-g)),e.copy(s).addScaledVector(hu,o);let p=1/(m+v+u);return a=v*p,o=u*p,e.copy(i).addScaledVector(sr,a).addScaledVector(rr,o)}equals(t){return t.a.equals(this.a)&&t.b.equals(this.b)&&t.c.equals(this.c)}},Nn=class{constructor(t=new I(1/0,1/0,1/0),e=new I(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=t,this.max=e}set(t,e){return this.min.copy(t),this.max.copy(e),this}setFromArray(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e+=3)this.expandByPoint(mn.fromArray(t,e));return this}setFromBufferAttribute(t){this.makeEmpty();for(let e=0,i=t.count;e<i;e++)this.expandByPoint(mn.fromBufferAttribute(t,e));return this}setFromPoints(t){this.makeEmpty();for(let e=0,i=t.length;e<i;e++)this.expandByPoint(t[e]);return this}setFromCenterAndSize(t,e){let i=mn.copy(e).multiplyScalar(.5);return this.min.copy(t).sub(i),this.max.copy(t).add(i),this}setFromObject(t,e=!1){return this.makeEmpty(),this.expandByObject(t,e)}clone(){return new this.constructor().copy(this)}copy(t){return this.min.copy(t.min),this.max.copy(t.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(t){return this.isEmpty()?t.set(0,0,0):t.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(t){return this.isEmpty()?t.set(0,0,0):t.subVectors(this.max,this.min)}expandByPoint(t){return this.min.min(t),this.max.max(t),this}expandByVector(t){return this.min.sub(t),this.max.add(t),this}expandByScalar(t){return this.min.addScalar(-t),this.max.addScalar(t),this}expandByObject(t,e=!1){t.updateWorldMatrix(!1,!1);let i=t.geometry;if(i!==void 0){let r=i.getAttribute("position");if(e===!0&&r!==void 0&&t.isInstancedMesh!==!0)for(let a=0,o=r.count;a<o;a++)t.isMesh===!0?t.getVertexPosition(a,mn):mn.fromBufferAttribute(r,a),mn.applyMatrix4(t.matrixWorld),this.expandByPoint(mn);else t.boundingBox!==void 0?(t.boundingBox===null&&t.computeBoundingBox(),mo.copy(t.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),mo.copy(i.boundingBox)),mo.applyMatrix4(t.matrixWorld),this.union(mo)}let s=t.children;for(let r=0,a=s.length;r<a;r++)this.expandByObject(s[r],e);return this}containsPoint(t){return t.x>=this.min.x&&t.x<=this.max.x&&t.y>=this.min.y&&t.y<=this.max.y&&t.z>=this.min.z&&t.z<=this.max.z}containsBox(t){return this.min.x<=t.min.x&&t.max.x<=this.max.x&&this.min.y<=t.min.y&&t.max.y<=this.max.y&&this.min.z<=t.min.z&&t.max.z<=this.max.z}getParameter(t,e){return e.set((t.x-this.min.x)/(this.max.x-this.min.x),(t.y-this.min.y)/(this.max.y-this.min.y),(t.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(t){return t.max.x>=this.min.x&&t.min.x<=this.max.x&&t.max.y>=this.min.y&&t.min.y<=this.max.y&&t.max.z>=this.min.z&&t.min.z<=this.max.z}intersectsSphere(t){return this.clampPoint(t.center,mn),mn.distanceToSquared(t.center)<=t.radius*t.radius}intersectsPlane(t){let e,i;return t.normal.x>0?(e=t.normal.x*this.min.x,i=t.normal.x*this.max.x):(e=t.normal.x*this.max.x,i=t.normal.x*this.min.x),t.normal.y>0?(e+=t.normal.y*this.min.y,i+=t.normal.y*this.max.y):(e+=t.normal.y*this.max.y,i+=t.normal.y*this.min.y),t.normal.z>0?(e+=t.normal.z*this.min.z,i+=t.normal.z*this.max.z):(e+=t.normal.z*this.max.z,i+=t.normal.z*this.min.z),e<=-t.constant&&i>=-t.constant}intersectsTriangle(t){if(this.isEmpty())return!1;this.getCenter(Kr),go.subVectors(this.max,Kr),ar.subVectors(t.a,Kr),or.subVectors(t.b,Kr),lr.subVectors(t.c,Kr),fs.subVectors(or,ar),ps.subVectors(lr,or),Is.subVectors(ar,lr);let e=[0,-fs.z,fs.y,0,-ps.z,ps.y,0,-Is.z,Is.y,fs.z,0,-fs.x,ps.z,0,-ps.x,Is.z,0,-Is.x,-fs.y,fs.x,0,-ps.y,ps.x,0,-Is.y,Is.x,0];return!ch(e,ar,or,lr,go)||(e=[1,0,0,0,1,0,0,0,1],!ch(e,ar,or,lr,go))?!1:(xo.crossVectors(fs,ps),e=[xo.x,xo.y,xo.z],ch(e,ar,or,lr,go))}clampPoint(t,e){return e.copy(t).clamp(this.min,this.max)}distanceToPoint(t){return this.clampPoint(t,mn).distanceTo(t)}getBoundingSphere(t){return this.isEmpty()?t.makeEmpty():(this.getCenter(t.center),t.radius=this.getSize(mn).length()*.5),t}intersect(t){return this.min.max(t.min),this.max.min(t.max),this.isEmpty()&&this.makeEmpty(),this}union(t){return this.min.min(t.min),this.max.max(t.max),this}applyMatrix4(t){return this.isEmpty()?this:(Zn[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(t),Zn[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(t),Zn[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(t),Zn[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(t),Zn[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(t),Zn[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(t),Zn[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(t),Zn[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(t),this.setFromPoints(Zn),this)}translate(t){return this.min.add(t),this.max.add(t),this}equals(t){return t.min.equals(this.min)&&t.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(t){return this.min.fromArray(t.min),this.max.fromArray(t.max),this}},Zn=[new I,new I,new I,new I,new I,new I,new I,new I],mn=new I,mo=new Nn,ar=new I,or=new I,lr=new I,fs=new I,ps=new I,Is=new I,Kr=new I,go=new I,xo=new I,Ds=new I;fi=new I,yo=new vt,cp=0,He=class extends In{constructor(t,e,i=!1){if(super(),Array.isArray(t))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:cp++}),this.name="",this.array=t,this.itemSize=e,this.count=t!==void 0?t.length/e:0,this.normalized=i,this.usage=Kh,this.updateRanges=[],this.gpuType=an,this.version=0}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.name=t.name,this.array=new t.array.constructor(t.array),this.itemSize=t.itemSize,this.count=t.count,this.normalized=t.normalized,this.usage=t.usage,this.gpuType=t.gpuType,this}copyAt(t,e,i){t*=this.itemSize,i*=e.itemSize;for(let s=0,r=this.itemSize;s<r;s++)this.array[t+s]=e.array[i+s];return this}copyArray(t){return this.array.set(t),this}applyMatrix3(t){if(this.itemSize===2)for(let e=0,i=this.count;e<i;e++)yo.fromBufferAttribute(this,e),yo.applyMatrix3(t),this.setXY(e,yo.x,yo.y);else if(this.itemSize===3)for(let e=0,i=this.count;e<i;e++)fi.fromBufferAttribute(this,e),fi.applyMatrix3(t),this.setXYZ(e,fi.x,fi.y,fi.z);return this}applyMatrix4(t){for(let e=0,i=this.count;e<i;e++)fi.fromBufferAttribute(this,e),fi.applyMatrix4(t),this.setXYZ(e,fi.x,fi.y,fi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)fi.fromBufferAttribute(this,e),fi.applyNormalMatrix(t),this.setXYZ(e,fi.x,fi.y,fi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)fi.fromBufferAttribute(this,e),fi.transformDirection(t),this.setXYZ(e,fi.x,fi.y,fi.z);return this}set(t,e=0){return this.array.set(t,e),this}getComponent(t,e){let i=this.array[t*this.itemSize+e];return this.normalized&&(i=An(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=$e(i,this.array)),this.array[t*this.itemSize+e]=i,this}getX(t){let e=this.array[t*this.itemSize];return this.normalized&&(e=An(e,this.array)),e}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize]=e,this}getY(t){let e=this.array[t*this.itemSize+1];return this.normalized&&(e=An(e,this.array)),e}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+1]=e,this}getZ(t){let e=this.array[t*this.itemSize+2];return this.normalized&&(e=An(e,this.array)),e}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+2]=e,this}getW(t){let e=this.array[t*this.itemSize+3];return this.normalized&&(e=An(e,this.array)),e}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.array[t*this.itemSize+3]=e,this}setXY(t,e,i){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array)),this.array[t+0]=e,this.array[t+1]=i,this}setXYZ(t,e,i,s){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),s=$e(s,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t*=this.itemSize,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.array[t+0]=e,this.array[t+1]=i,this.array[t+2]=s,this.array[t+3]=r,this}onUpload(t){return this.onUploadCallback=t,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){let t={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return t.name=this.name,t.usage=this.usage,t.gpuType=this.gpuType,t}dispose(){this.dispatchEvent({type:"dispose"})}},xa=class extends He{constructor(t,e,i){super(new Uint16Array(t),e,i)}},ya=class extends He{constructor(t,e,i){super(new Uint32Array(t),e,i)}},ae=class extends He{constructor(t,e,i){super(new Float32Array(t),e,i)}},hp=new Nn,Qr=new I,hh=new I,Fn=class{constructor(t=new I,e=-1){this.isSphere=!0,this.center=t,this.radius=e}set(t,e){return this.center.copy(t),this.radius=e,this}setFromPoints(t,e){let i=this.center;e!==void 0?i.copy(e):hp.setFromPoints(t).getCenter(i);let s=0;for(let r=0,a=t.length;r<a;r++)s=Math.max(s,i.distanceToSquared(t[r]));return this.radius=Math.sqrt(s),this}copy(t){return this.center.copy(t.center),this.radius=t.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(t){return t.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(t){return t.distanceTo(this.center)-this.radius}intersectsSphere(t){let e=this.radius+t.radius;return t.center.distanceToSquared(this.center)<=e*e}intersectsBox(t){return t.intersectsSphere(this)}intersectsPlane(t){return Math.abs(t.distanceToPoint(this.center))<=this.radius}clampPoint(t,e){let i=this.center.distanceToSquared(t);return e.copy(t),i>this.radius*this.radius&&(e.sub(this.center).normalize(),e.multiplyScalar(this.radius).add(this.center)),e}getBoundingBox(t){return this.isEmpty()?(t.makeEmpty(),t):(t.set(this.center,this.center),t.expandByScalar(this.radius),t)}applyMatrix4(t){return this.center.applyMatrix4(t),this.radius=this.radius*t.getMaxScaleOnAxis(),this}translate(t){return this.center.add(t),this}expandByPoint(t){if(this.isEmpty())return this.center.copy(t),this.radius=0,this;Qr.subVectors(t,this.center);let e=Qr.lengthSq();if(e>this.radius*this.radius){let i=Math.sqrt(e),s=(i-this.radius)*.5;this.center.addScaledVector(Qr,s/i),this.radius+=s}return this}union(t){return t.isEmpty()?this:this.isEmpty()?(this.copy(t),this):(this.center.equals(t.center)===!0?this.radius=Math.max(this.radius,t.radius):(hh.subVectors(t.center,this.center).setLength(t.radius),this.expandByPoint(Qr.copy(t.center).add(hh)),this.expandByPoint(Qr.copy(t.center).sub(hh))),this)}equals(t){return t.center.equals(this.center)&&t.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(t){return this.radius=t.radius,this.center.fromArray(t.center),this}},up=0,rn=new Ie,uh=new se,cr=new I,Ji=new Nn,ta=new Nn,Mi=new I,xe=class n extends In{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:up++}),this.uuid=jn(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={},this._transformed=!1}getIndex(){return this.index}setIndex(t){return Array.isArray(t)?this.index=new($f(t)?ya:xa)(t,1):this.index=t,this}setIndirect(t,e=0){return this.indirect=t,this.indirectOffset=e,this}getIndirect(){return this.indirect}getAttribute(t){return this.attributes[t]}setAttribute(t,e){return this.attributes[t]=e,this}deleteAttribute(t){return delete this.attributes[t],this}hasAttribute(t){return this.attributes[t]!==void 0}addGroup(t,e,i=0){this.groups.push({start:t,count:e,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(t,e){this.drawRange.start=t,this.drawRange.count=e}applyMatrix4(t){let e=this.attributes.position;e!==void 0&&(e.applyMatrix4(t),e.needsUpdate=!0);let i=this.attributes.normal;if(i!==void 0){let r=new pe().getNormalMatrix(t);i.applyNormalMatrix(r),i.needsUpdate=!0}let s=this.attributes.tangent;return s!==void 0&&(s.transformDirection(t),s.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this._transformed=!0,this}applyQuaternion(t){return rn.makeRotationFromQuaternion(t),this.applyMatrix4(rn),this}rotateX(t){return rn.makeRotationX(t),this.applyMatrix4(rn),this}rotateY(t){return rn.makeRotationY(t),this.applyMatrix4(rn),this}rotateZ(t){return rn.makeRotationZ(t),this.applyMatrix4(rn),this}translate(t,e,i){return rn.makeTranslation(t,e,i),this.applyMatrix4(rn),this}scale(t,e,i){return rn.makeScale(t,e,i),this.applyMatrix4(rn),this}lookAt(t){return uh.lookAt(t),uh.updateMatrix(),this.applyMatrix4(uh.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(cr).negate(),this.translate(cr.x,cr.y,cr.z),this}setFromPoints(t){let e=this.getAttribute("position");if(e===void 0){let i=[];for(let s=0,r=t.length;s<r;s++){let a=t[s];i.push(a.x,a.y,a.z||0)}this.setAttribute("position",new ae(i,3))}else{let i=Math.min(t.length,e.count);for(let s=0;s<i;s++){let r=t[s];e.setXYZ(s,r.x,r.y,r.z||0)}t.length>e.count&&oe("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),e.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Nn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new I(-1/0,-1/0,-1/0),new I(1/0,1/0,1/0));return}if(t!==void 0){if(this.boundingBox.setFromBufferAttribute(t),e)for(let i=0,s=e.length;i<s;i++){let r=e[i];Ji.setFromBufferAttribute(r),this.morphTargetsRelative?(Mi.addVectors(this.boundingBox.min,Ji.min),this.boundingBox.expandByPoint(Mi),Mi.addVectors(this.boundingBox.max,Ji.max),this.boundingBox.expandByPoint(Mi)):(this.boundingBox.expandByPoint(Ji.min),this.boundingBox.expandByPoint(Ji.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&ue('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Fn);let t=this.attributes.position,e=this.morphAttributes.position;if(t&&t.isGLBufferAttribute){ue("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new I,1/0);return}if(t){let i=this.boundingSphere.center;if(Ji.setFromBufferAttribute(t),e)for(let r=0,a=e.length;r<a;r++){let o=e[r];ta.setFromBufferAttribute(o),this.morphTargetsRelative?(Mi.addVectors(Ji.min,ta.min),Ji.expandByPoint(Mi),Mi.addVectors(Ji.max,ta.max),Ji.expandByPoint(Mi)):(Ji.expandByPoint(ta.min),Ji.expandByPoint(ta.max))}Ji.getCenter(i);let s=0;for(let r=0,a=t.count;r<a;r++)Mi.fromBufferAttribute(t,r),s=Math.max(s,i.distanceToSquared(Mi));if(e)for(let r=0,a=e.length;r<a;r++){let o=e[r],l=this.morphTargetsRelative;for(let c=0,h=o.count;c<h;c++)Mi.fromBufferAttribute(o,c),l&&(cr.fromBufferAttribute(t,c),Mi.add(cr)),s=Math.max(s,i.distanceToSquared(Mi))}this.boundingSphere.radius=Math.sqrt(s),isNaN(this.boundingSphere.radius)&&ue('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){let t=this.index,e=this.attributes;if(t===null||e.position===void 0||e.normal===void 0||e.uv===void 0){ue("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}let i=e.position,s=e.normal,r=e.uv,a=this.getAttribute("tangent");(a===void 0||a.count!==i.count)&&(a=new He(new Float32Array(4*i.count),4),this.setAttribute("tangent",a));let o=[],l=[];for(let x=0;x<i.count;x++)o[x]=new I,l[x]=new I;let c=new I,h=new I,d=new I,u=new vt,f=new vt,g=new vt,v=new I,m=new I;function p(x,T,C){c.fromBufferAttribute(i,x),h.fromBufferAttribute(i,T),d.fromBufferAttribute(i,C),u.fromBufferAttribute(r,x),f.fromBufferAttribute(r,T),g.fromBufferAttribute(r,C),h.sub(c),d.sub(c),f.sub(u),g.sub(u);let D=1/(f.x*g.y-g.x*f.y);isFinite(D)&&(v.copy(h).multiplyScalar(g.y).addScaledVector(d,-f.y).multiplyScalar(D),m.copy(d).multiplyScalar(f.x).addScaledVector(h,-g.x).multiplyScalar(D),o[x].add(v),o[T].add(v),o[C].add(v),l[x].add(m),l[T].add(m),l[C].add(m))}let b=this.groups;b.length===0&&(b=[{start:0,count:t.count}]);for(let x=0,T=b.length;x<T;++x){let C=b[x],D=C.start,H=C.count;for(let z=D,F=D+H;z<F;z+=3)p(t.getX(z+0),t.getX(z+1),t.getX(z+2))}let w=new I,_=new I,E=new I,S=new I;function A(x){E.fromBufferAttribute(s,x),S.copy(E);let T=o[x];w.copy(T),w.sub(E.multiplyScalar(E.dot(T))).normalize(),_.crossVectors(S,T);let D=_.dot(l[x])<0?-1:1;a.setXYZW(x,w.x,w.y,w.z,D)}for(let x=0,T=b.length;x<T;++x){let C=b[x],D=C.start,H=C.count;for(let z=D,F=D+H;z<F;z+=3)A(t.getX(z+0)),A(t.getX(z+1)),A(t.getX(z+2))}this._transformed=!0}computeVertexNormals(){let t=this.index,e=this.getAttribute("position");if(e!==void 0){let i=this.getAttribute("normal");if(i===void 0||i.count!==e.count)i=new He(new Float32Array(e.count*3),3),this.setAttribute("normal",i);else for(let u=0,f=i.count;u<f;u++)i.setXYZ(u,0,0,0);let s=new I,r=new I,a=new I,o=new I,l=new I,c=new I,h=new I,d=new I;if(t)for(let u=0,f=t.count;u<f;u+=3){let g=t.getX(u+0),v=t.getX(u+1),m=t.getX(u+2);s.fromBufferAttribute(e,g),r.fromBufferAttribute(e,v),a.fromBufferAttribute(e,m),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),o.fromBufferAttribute(i,g),l.fromBufferAttribute(i,v),c.fromBufferAttribute(i,m),o.add(h),l.add(h),c.add(h),i.setXYZ(g,o.x,o.y,o.z),i.setXYZ(v,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let u=0,f=e.count;u<f;u+=3)s.fromBufferAttribute(e,u+0),r.fromBufferAttribute(e,u+1),a.fromBufferAttribute(e,u+2),h.subVectors(a,r),d.subVectors(s,r),h.cross(d),i.setXYZ(u+0,h.x,h.y,h.z),i.setXYZ(u+1,h.x,h.y,h.z),i.setXYZ(u+2,h.x,h.y,h.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){let t=this.attributes.normal;for(let e=0,i=t.count;e<i;e++)Mi.fromBufferAttribute(t,e),Mi.normalize(),t.setXYZ(e,Mi.x,Mi.y,Mi.z)}toNonIndexed(){function t(o,l){let c=o.array,h=o.itemSize,d=o.normalized,u=new c.constructor(l.length*h),f=0,g=0;for(let v=0,m=l.length;v<m;v++){o.isInterleavedBufferAttribute?f=l[v]*o.data.stride+o.offset:f=l[v]*h;for(let p=0;p<h;p++)u[g++]=c[f++]}return new He(u,h,d)}if(this.index===null)return oe("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;let e=new n,i=this.index.array,s=this.attributes;for(let o in s){let l=s[o],c=t(l,i);e.setAttribute(o,c)}let r=this.morphAttributes;for(let o in r){let l=[],c=r[o];for(let h=0,d=c.length;h<d;h++){let u=c[h],f=t(u,i);l.push(f)}e.morphAttributes[o]=l}e.morphTargetsRelative=this.morphTargetsRelative;let a=this.groups;for(let o=0,l=a.length;o<l;o++){let c=a[o];e.addGroup(c.start,c.count,c.materialIndex)}return e}toJSON(){let t={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(t.uuid=this.uuid,t.type=this.parameters!==void 0&&this._transformed===!0?"BufferGeometry":this.type,t.name=this.name,Object.keys(this.userData).length>0&&(t.userData=this.userData),this.parameters!==void 0&&this._transformed!==!0){let l=this.parameters;for(let c in l)l[c]!==void 0&&(t[c]=l[c]);return t}t.data={attributes:{}};let e=this.index;e!==null&&(t.data.index={type:e.array.constructor.name,array:Array.prototype.slice.call(e.array)});let i=this.attributes;for(let l in i){let c=i[l];t.data.attributes[l]=c.toJSON(t.data)}let s={},r=!1;for(let l in this.morphAttributes){let c=this.morphAttributes[l],h=[];for(let d=0,u=c.length;d<u;d++){let f=c[d];h.push(f.toJSON(t.data))}h.length>0&&(s[l]=h,r=!0)}r&&(t.data.morphAttributes=s,t.data.morphTargetsRelative=this.morphTargetsRelative);let a=this.groups;a.length>0&&(t.data.groups=JSON.parse(JSON.stringify(a)));let o=this.boundingSphere;return o!==null&&(t.data.boundingSphere=o.toJSON()),t}clone(){return new this.constructor().copy(this)}copy(t){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;let e={};this.name=t.name;let i=t.index;i!==null&&this.setIndex(i.clone());let s=t.attributes;for(let c in s){let h=s[c];this.setAttribute(c,h.clone(e))}let r=t.morphAttributes;for(let c in r){let h=[],d=r[c];for(let u=0,f=d.length;u<f;u++)h.push(d[u].clone(e));this.morphAttributes[c]=h}this.morphTargetsRelative=t.morphTargetsRelative;let a=t.groups;for(let c=0,h=a.length;c<h;c++){let d=a[c];this.addGroup(d.start,d.count,d.materialIndex)}let o=t.boundingBox;o!==null&&(this.boundingBox=o.clone());let l=t.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=t.drawRange.start,this.drawRange.count=t.drawRange.count,this.userData=t.userData,this._transformed=t._transformed,this}dispose(){this.dispatchEvent({type:"dispose"})}},va=class{constructor(t,e){this.isInterleavedBuffer=!0,this.array=t,this.stride=e,this.count=t!==void 0?t.length/e:0,this.usage=Kh,this.updateRanges=[],this.version=0,this.uuid=jn()}onUploadCallback(){}set needsUpdate(t){t===!0&&this.version++}setUsage(t){return this.usage=t,this}addUpdateRange(t,e){this.updateRanges.push({start:t,count:e})}clearUpdateRanges(){this.updateRanges.length=0}copy(t){return this.array=new t.array.constructor(t.array),this.count=t.count,this.stride=t.stride,this.usage=t.usage,this}copyAt(t,e,i){t*=this.stride,i*=e.stride;for(let s=0,r=this.stride;s<r;s++)this.array[t+s]=e.array[i+s];return this}set(t,e=0){return this.array.set(t,e),this}clone(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=this.array.slice(0).buffer);let e=new this.array.constructor(t.arrayBuffers[this.array.buffer._uuid]),i=new this.constructor(e,this.stride);return i.setUsage(this.usage),i}onUpload(t){return this.onUploadCallback=t,this}toJSON(t){t.arrayBuffers===void 0&&(t.arrayBuffers={}),this.array.buffer._uuid===void 0&&(this.array.buffer._uuid=jn()),t.arrayBuffers[this.array.buffer._uuid]===void 0&&(t.arrayBuffers[this.array.buffer._uuid]=Array.from(new Uint32Array(this.array.buffer)));let e={uuid:this.uuid,buffer:this.array.buffer._uuid,type:this.array.constructor.name,stride:this.stride};return e.usage=this.usage,e}},Bi=new I,wr=class n{constructor(t,e,i,s=!1){this.isInterleavedBufferAttribute=!0,this.name="",this.data=t,this.itemSize=e,this.offset=i,this.normalized=s}get count(){return this.data.count}get array(){return this.data.array}set needsUpdate(t){this.data.needsUpdate=t}applyMatrix4(t){for(let e=0,i=this.data.count;e<i;e++)Bi.fromBufferAttribute(this,e),Bi.applyMatrix4(t),this.setXYZ(e,Bi.x,Bi.y,Bi.z);return this}applyNormalMatrix(t){for(let e=0,i=this.count;e<i;e++)Bi.fromBufferAttribute(this,e),Bi.applyNormalMatrix(t),this.setXYZ(e,Bi.x,Bi.y,Bi.z);return this}transformDirection(t){for(let e=0,i=this.count;e<i;e++)Bi.fromBufferAttribute(this,e),Bi.transformDirection(t),this.setXYZ(e,Bi.x,Bi.y,Bi.z);return this}getComponent(t,e){let i=this.array[t*this.data.stride+this.offset+e];return this.normalized&&(i=An(i,this.array)),i}setComponent(t,e,i){return this.normalized&&(i=$e(i,this.array)),this.data.array[t*this.data.stride+this.offset+e]=i,this}setX(t,e){return this.normalized&&(e=$e(e,this.array)),this.data.array[t*this.data.stride+this.offset]=e,this}setY(t,e){return this.normalized&&(e=$e(e,this.array)),this.data.array[t*this.data.stride+this.offset+1]=e,this}setZ(t,e){return this.normalized&&(e=$e(e,this.array)),this.data.array[t*this.data.stride+this.offset+2]=e,this}setW(t,e){return this.normalized&&(e=$e(e,this.array)),this.data.array[t*this.data.stride+this.offset+3]=e,this}getX(t){let e=this.data.array[t*this.data.stride+this.offset];return this.normalized&&(e=An(e,this.array)),e}getY(t){let e=this.data.array[t*this.data.stride+this.offset+1];return this.normalized&&(e=An(e,this.array)),e}getZ(t){let e=this.data.array[t*this.data.stride+this.offset+2];return this.normalized&&(e=An(e,this.array)),e}getW(t){let e=this.data.array[t*this.data.stride+this.offset+3];return this.normalized&&(e=An(e,this.array)),e}setXY(t,e,i){return t=t*this.data.stride+this.offset,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this}setXYZ(t,e,i,s){return t=t*this.data.stride+this.offset,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),s=$e(s,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this}setXYZW(t,e,i,s,r){return t=t*this.data.stride+this.offset,this.normalized&&(e=$e(e,this.array),i=$e(i,this.array),s=$e(s,this.array),r=$e(r,this.array)),this.data.array[t+0]=e,this.data.array[t+1]=i,this.data.array[t+2]=s,this.data.array[t+3]=r,this}clone(t){if(t===void 0){pa("InterleavedBufferAttribute.clone(): Cloning an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return new He(new this.array.constructor(e),this.itemSize,this.normalized)}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.clone(t)),new n(t.interleavedBuffers[this.data.uuid],this.itemSize,this.offset,this.normalized)}toJSON(t){if(t===void 0){pa("InterleavedBufferAttribute.toJSON(): Serializing an interleaved buffer attribute will de-interleave buffer data.");let e=[];for(let i=0;i<this.count;i++){let s=i*this.data.stride+this.offset;for(let r=0;r<this.itemSize;r++)e.push(this.data.array[s+r])}return{itemSize:this.itemSize,type:this.array.constructor.name,array:e,normalized:this.normalized}}else return t.interleavedBuffers===void 0&&(t.interleavedBuffers={}),t.interleavedBuffers[this.data.uuid]===void 0&&(t.interleavedBuffers[this.data.uuid]=this.data.toJSON(t)),{isInterleavedBufferAttribute:!0,itemSize:this.itemSize,data:this.data.uuid,offset:this.offset,normalized:this.normalized}}},dh=new I,dp=new I,fp=new pe,gn=class{constructor(t=new I(1,0,0),e=0){this.isPlane=!0,this.normal=t,this.constant=e}set(t,e){return this.normal.copy(t),this.constant=e,this}setComponents(t,e,i,s){return this.normal.set(t,e,i),this.constant=s,this}setFromNormalAndCoplanarPoint(t,e){return this.normal.copy(t),this.constant=-e.dot(this.normal),this}setFromCoplanarPoints(t,e,i){let s=dh.subVectors(i,e).cross(dp.subVectors(t,e)).normalize();return this.setFromNormalAndCoplanarPoint(s,t),this}copy(t){return this.normal.copy(t.normal),this.constant=t.constant,this}normalize(){let t=1/this.normal.length();return this.normal.multiplyScalar(t),this.constant*=t,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(t){return this.normal.dot(t)+this.constant}distanceToSphere(t){return this.distanceToPoint(t.center)-t.radius}projectPoint(t,e){return e.copy(t).addScaledVector(this.normal,-this.distanceToPoint(t))}intersectLine(t,e,i=!0){let s=t.delta(dh),r=this.normal.dot(s);if(r===0)return this.distanceToPoint(t.start)===0?e.copy(t.start):null;let a=-(t.start.dot(this.normal)+this.constant)/r;return i===!0&&(a<0||a>1)?null:e.copy(t.start).addScaledVector(s,a)}intersectsLine(t){let e=this.distanceToPoint(t.start),i=this.distanceToPoint(t.end);return e<0&&i>0||i<0&&e>0}intersectsBox(t){return t.intersectsPlane(this)}intersectsSphere(t){return t.intersectsPlane(this)}coplanarPoint(t){return t.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(t,e){let i=e||fp.getNormalMatrix(t),s=this.coplanarPoint(dh).applyMatrix4(t),r=this.normal.applyMatrix3(i).normalize();return this.constant=-s.dot(r),this}translate(t){return this.constant-=t.dot(this.normal),this}equals(t){return t.normal.equals(this.normal)&&t.constant===this.constant}clone(){return new this.constructor().copy(this)}toJSON(){return{normal:this.normal.toArray(),constant:this.constant}}fromJSON(t){return this.normal.fromArray(t.normal),this.constant=t.constant,this}},pp=0,$i=class extends In{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:pp++}),this.uuid=jn(),this.name="",this.type="Material",this.blending=bs,this.side=Vi,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=Bh,this.blendDst=kh,this.blendEquation=Vs,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new gt(0,0,0),this.blendAlpha=0,this.depthFunc=vr,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=ad,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Go,this.stencilZFail=Go,this.stencilZPass=Go,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(t){this._alphaTest>0!=t>0&&this.version++,this._alphaTest=t}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(t){if(t!==void 0)for(let e in t){let i=t[e];if(i===void 0){oe(`Material: parameter '${e}' has value of undefined.`);continue}let s=this[e];if(s===void 0){oe(`Material: '${e}' is not a property of THREE.${this.type}.`);continue}s&&s.isColor?s.set(i):s&&s.isVector2&&i&&i.isVector2||s&&s.isEuler&&i&&i.isEuler||s&&s.isVector3&&i&&i.isVector3?s.copy(i):this[e]=i}}toJSON(t){let e=t===void 0||typeof t=="string";e&&(t={textures:{},images:{}});let i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,i.blending=this.blending,i.side=this.side,i.shadowSide=this.shadowSide,i.vertexColors=this.vertexColors,i.opacity=this.opacity,i.transparent=this.transparent,i.blendSrc=this.blendSrc,i.blendDst=this.blendDst,i.blendEquation=this.blendEquation,i.blendSrcAlpha=this.blendSrcAlpha,i.blendDstAlpha=this.blendDstAlpha,i.blendEquationAlpha=this.blendEquationAlpha,i.blendColor=this.blendColor.getHex(),i.blendAlpha=this.blendAlpha,i.depthFunc=this.depthFunc,i.depthTest=this.depthTest,i.depthWrite=this.depthWrite,i.colorWrite=this.colorWrite,i.clipIntersection=this.clipIntersection,i.clipShadows=this.clipShadows,i.stencilWriteMask=this.stencilWriteMask,i.stencilFunc=this.stencilFunc,i.stencilRef=this.stencilRef,i.stencilFuncMask=this.stencilFuncMask,i.stencilFail=this.stencilFail,i.stencilZFail=this.stencilZFail,i.stencilZPass=this.stencilZPass,i.stencilWrite=this.stencilWrite,i.polygonOffset=this.polygonOffset,i.polygonOffsetFactor=this.polygonOffsetFactor,i.polygonOffsetUnits=this.polygonOffsetUnits,i.dithering=this.dithering,i.alphaTest=this.alphaTest,i.alphaHash=this.alphaHash,i.alphaToCoverage=this.alphaToCoverage,i.premultipliedAlpha=this.premultipliedAlpha,i.forceSinglePass=this.forceSinglePass,i.allowOverride=this.allowOverride,i.visible=this.visible,i.toneMapped=this.toneMapped,i.name=this.name,this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(t).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(t).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(t).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(t).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(t).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.retroreflectivity!==void 0&&(i.retroreflectivity=this.retroreflectivity),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(t).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(t).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(t).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(t).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(t).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(t).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(t).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(t).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(t).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(t).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(t).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(t).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(t).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(t).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(t).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(t).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(t).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(t).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(t).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(t).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(t).uuid),this.attenuationDistance!==void 0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),Array.isArray(this.clippingPlanes)&&this.clippingPlanes.length>0&&(i.clippingPlanes=this.clippingPlanes.map(r=>r.toJSON())),this.rotation!==void 0&&(i.rotation=this.rotation),this.depthPacking!==void 0&&(i.depthPacking=this.depthPacking),this.linewidth!==void 0&&(i.linewidth=this.linewidth),this.linecap!==void 0&&(i.linecap=this.linecap),this.linejoin!==void 0&&(i.linejoin=this.linejoin),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.wireframe!==void 0&&(i.wireframe=this.wireframe),this.wireframeLinewidth!==void 0&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!==void 0&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!==void 0&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading!==void 0&&(i.flatShading=this.flatShading),this.fog!==void 0&&(i.fog=this.fog),Object.keys(this.userData).length>0&&(i.userData=this.userData);function s(r){let a=[];for(let o in r){let l=r[o];delete l.metadata,a.push(l)}return a}if(e){let r=s(t.textures),a=s(t.images);r.length>0&&(i.textures=r),a.length>0&&(i.images=a)}return i}fromJSON(t,e){if(t.uuid!==void 0&&(this.uuid=t.uuid),t.name!==void 0&&(this.name=t.name),t.color!==void 0&&this.color!==void 0&&this.color.setHex(t.color),t.roughness!==void 0&&(this.roughness=t.roughness),t.metalness!==void 0&&(this.metalness=t.metalness),t.sheen!==void 0&&(this.sheen=t.sheen),t.sheenColor!==void 0&&(this.sheenColor=new gt().setHex(t.sheenColor)),t.sheenRoughness!==void 0&&(this.sheenRoughness=t.sheenRoughness),t.emissive!==void 0&&this.emissive!==void 0&&this.emissive.setHex(t.emissive),t.specular!==void 0&&this.specular!==void 0&&this.specular.setHex(t.specular),t.specularIntensity!==void 0&&(this.specularIntensity=t.specularIntensity),t.specularColor!==void 0&&this.specularColor!==void 0&&this.specularColor.setHex(t.specularColor),t.shininess!==void 0&&(this.shininess=t.shininess),t.clearcoat!==void 0&&(this.clearcoat=t.clearcoat),t.clearcoatRoughness!==void 0&&(this.clearcoatRoughness=t.clearcoatRoughness),t.dispersion!==void 0&&(this.dispersion=t.dispersion),t.retroreflectivity!==void 0&&(this.retroreflectivity=t.retroreflectivity),t.iridescence!==void 0&&(this.iridescence=t.iridescence),t.iridescenceIOR!==void 0&&(this.iridescenceIOR=t.iridescenceIOR),t.iridescenceThicknessRange!==void 0&&(this.iridescenceThicknessRange=t.iridescenceThicknessRange),t.transmission!==void 0&&(this.transmission=t.transmission),t.thickness!==void 0&&(this.thickness=t.thickness),t.attenuationDistance!==void 0&&(this.attenuationDistance=t.attenuationDistance),t.attenuationColor!==void 0&&this.attenuationColor!==void 0&&this.attenuationColor.setHex(t.attenuationColor),t.anisotropy!==void 0&&(this.anisotropy=t.anisotropy),t.anisotropyRotation!==void 0&&(this.anisotropyRotation=t.anisotropyRotation),t.fog!==void 0&&(this.fog=t.fog),t.flatShading!==void 0&&(this.flatShading=t.flatShading),t.blending!==void 0&&(this.blending=t.blending),t.combine!==void 0&&(this.combine=t.combine),t.side!==void 0&&(this.side=t.side),t.shadowSide!==void 0&&(this.shadowSide=t.shadowSide),t.opacity!==void 0&&(this.opacity=t.opacity),t.transparent!==void 0&&(this.transparent=t.transparent),t.alphaTest!==void 0&&(this.alphaTest=t.alphaTest),t.alphaHash!==void 0&&(this.alphaHash=t.alphaHash),t.depthFunc!==void 0&&(this.depthFunc=t.depthFunc),t.depthTest!==void 0&&(this.depthTest=t.depthTest),t.depthWrite!==void 0&&(this.depthWrite=t.depthWrite),t.colorWrite!==void 0&&(this.colorWrite=t.colorWrite),t.clippingPlanes!==void 0&&(this.clippingPlanes=t.clippingPlanes.map(i=>new gn().fromJSON(i))),t.clipIntersection!==void 0&&(this.clipIntersection=t.clipIntersection),t.clipShadows!==void 0&&(this.clipShadows=t.clipShadows),t.depthPacking!==void 0&&(this.depthPacking=t.depthPacking),t.blendSrc!==void 0&&(this.blendSrc=t.blendSrc),t.blendDst!==void 0&&(this.blendDst=t.blendDst),t.blendEquation!==void 0&&(this.blendEquation=t.blendEquation),t.blendSrcAlpha!==void 0&&(this.blendSrcAlpha=t.blendSrcAlpha),t.blendDstAlpha!==void 0&&(this.blendDstAlpha=t.blendDstAlpha),t.blendEquationAlpha!==void 0&&(this.blendEquationAlpha=t.blendEquationAlpha),t.blendColor!==void 0&&this.blendColor!==void 0&&this.blendColor.setHex(t.blendColor),t.blendAlpha!==void 0&&(this.blendAlpha=t.blendAlpha),t.stencilWriteMask!==void 0&&(this.stencilWriteMask=t.stencilWriteMask),t.stencilFunc!==void 0&&(this.stencilFunc=t.stencilFunc),t.stencilRef!==void 0&&(this.stencilRef=t.stencilRef),t.stencilFuncMask!==void 0&&(this.stencilFuncMask=t.stencilFuncMask),t.stencilFail!==void 0&&(this.stencilFail=t.stencilFail),t.stencilZFail!==void 0&&(this.stencilZFail=t.stencilZFail),t.stencilZPass!==void 0&&(this.stencilZPass=t.stencilZPass),t.stencilWrite!==void 0&&(this.stencilWrite=t.stencilWrite),t.wireframe!==void 0&&(this.wireframe=t.wireframe),t.wireframeLinewidth!==void 0&&(this.wireframeLinewidth=t.wireframeLinewidth),t.wireframeLinecap!==void 0&&(this.wireframeLinecap=t.wireframeLinecap),t.wireframeLinejoin!==void 0&&(this.wireframeLinejoin=t.wireframeLinejoin),t.rotation!==void 0&&(this.rotation=t.rotation),t.linewidth!==void 0&&(this.linewidth=t.linewidth),t.linecap!==void 0&&(this.linecap=t.linecap),t.linejoin!==void 0&&(this.linejoin=t.linejoin),t.dashSize!==void 0&&(this.dashSize=t.dashSize),t.gapSize!==void 0&&(this.gapSize=t.gapSize),t.scale!==void 0&&(this.scale=t.scale),t.polygonOffset!==void 0&&(this.polygonOffset=t.polygonOffset),t.polygonOffsetFactor!==void 0&&(this.polygonOffsetFactor=t.polygonOffsetFactor),t.polygonOffsetUnits!==void 0&&(this.polygonOffsetUnits=t.polygonOffsetUnits),t.dithering!==void 0&&(this.dithering=t.dithering),t.alphaToCoverage!==void 0&&(this.alphaToCoverage=t.alphaToCoverage),t.premultipliedAlpha!==void 0&&(this.premultipliedAlpha=t.premultipliedAlpha),t.forceSinglePass!==void 0&&(this.forceSinglePass=t.forceSinglePass),t.allowOverride!==void 0&&(this.allowOverride=t.allowOverride),t.visible!==void 0&&(this.visible=t.visible),t.toneMapped!==void 0&&(this.toneMapped=t.toneMapped),t.userData!==void 0&&(this.userData=t.userData),t.vertexColors!==void 0&&(typeof t.vertexColors=="number"?this.vertexColors=t.vertexColors>0:this.vertexColors=t.vertexColors),t.size!==void 0&&(this.size=t.size),t.sizeAttenuation!==void 0&&(this.sizeAttenuation=t.sizeAttenuation),t.map!==void 0&&(this.map=e[t.map]||null),t.matcap!==void 0&&(this.matcap=e[t.matcap]||null),t.alphaMap!==void 0&&(this.alphaMap=e[t.alphaMap]||null),t.bumpMap!==void 0&&(this.bumpMap=e[t.bumpMap]||null),t.bumpScale!==void 0&&(this.bumpScale=t.bumpScale),t.normalMap!==void 0&&(this.normalMap=e[t.normalMap]||null),t.normalMapType!==void 0&&(this.normalMapType=t.normalMapType),t.normalScale!==void 0){let i=t.normalScale;Array.isArray(i)===!1&&(i=[i,i]),this.normalScale=new vt().fromArray(i)}return t.displacementMap!==void 0&&(this.displacementMap=e[t.displacementMap]||null),t.displacementScale!==void 0&&(this.displacementScale=t.displacementScale),t.displacementBias!==void 0&&(this.displacementBias=t.displacementBias),t.roughnessMap!==void 0&&(this.roughnessMap=e[t.roughnessMap]||null),t.metalnessMap!==void 0&&(this.metalnessMap=e[t.metalnessMap]||null),t.emissiveMap!==void 0&&(this.emissiveMap=e[t.emissiveMap]||null),t.emissiveIntensity!==void 0&&(this.emissiveIntensity=t.emissiveIntensity),t.specularMap!==void 0&&(this.specularMap=e[t.specularMap]||null),t.specularIntensityMap!==void 0&&(this.specularIntensityMap=e[t.specularIntensityMap]||null),t.specularColorMap!==void 0&&(this.specularColorMap=e[t.specularColorMap]||null),t.envMap!==void 0&&(this.envMap=e[t.envMap]||null),t.envMapRotation!==void 0&&this.envMapRotation.fromArray(t.envMapRotation),t.envMapIntensity!==void 0&&(this.envMapIntensity=t.envMapIntensity),t.reflectivity!==void 0&&(this.reflectivity=t.reflectivity),t.refractionRatio!==void 0&&(this.refractionRatio=t.refractionRatio),t.lightMap!==void 0&&(this.lightMap=e[t.lightMap]||null),t.lightMapIntensity!==void 0&&(this.lightMapIntensity=t.lightMapIntensity),t.aoMap!==void 0&&(this.aoMap=e[t.aoMap]||null),t.aoMapIntensity!==void 0&&(this.aoMapIntensity=t.aoMapIntensity),t.gradientMap!==void 0&&(this.gradientMap=e[t.gradientMap]||null),t.clearcoatMap!==void 0&&(this.clearcoatMap=e[t.clearcoatMap]||null),t.clearcoatRoughnessMap!==void 0&&(this.clearcoatRoughnessMap=e[t.clearcoatRoughnessMap]||null),t.clearcoatNormalMap!==void 0&&(this.clearcoatNormalMap=e[t.clearcoatNormalMap]||null),t.clearcoatNormalScale!==void 0&&(this.clearcoatNormalScale=new vt().fromArray(t.clearcoatNormalScale)),t.iridescenceMap!==void 0&&(this.iridescenceMap=e[t.iridescenceMap]||null),t.iridescenceThicknessMap!==void 0&&(this.iridescenceThicknessMap=e[t.iridescenceThicknessMap]||null),t.transmissionMap!==void 0&&(this.transmissionMap=e[t.transmissionMap]||null),t.thicknessMap!==void 0&&(this.thicknessMap=e[t.thicknessMap]||null),t.anisotropyMap!==void 0&&(this.anisotropyMap=e[t.anisotropyMap]||null),t.sheenColorMap!==void 0&&(this.sheenColorMap=e[t.sheenColorMap]||null),t.sheenRoughnessMap!==void 0&&(this.sheenRoughnessMap=e[t.sheenRoughnessMap]||null),this}clone(){return new this.constructor().copy(this)}copy(t){this.name=t.name,this.blending=t.blending,this.side=t.side,this.vertexColors=t.vertexColors,this.opacity=t.opacity,this.transparent=t.transparent,this.blendSrc=t.blendSrc,this.blendDst=t.blendDst,this.blendEquation=t.blendEquation,this.blendSrcAlpha=t.blendSrcAlpha,this.blendDstAlpha=t.blendDstAlpha,this.blendEquationAlpha=t.blendEquationAlpha,this.blendColor.copy(t.blendColor),this.blendAlpha=t.blendAlpha,this.depthFunc=t.depthFunc,this.depthTest=t.depthTest,this.depthWrite=t.depthWrite,this.stencilWriteMask=t.stencilWriteMask,this.stencilFunc=t.stencilFunc,this.stencilRef=t.stencilRef,this.stencilFuncMask=t.stencilFuncMask,this.stencilFail=t.stencilFail,this.stencilZFail=t.stencilZFail,this.stencilZPass=t.stencilZPass,this.stencilWrite=t.stencilWrite;let e=t.clippingPlanes,i=null;if(e!==null){let s=e.length;i=new Array(s);for(let r=0;r!==s;++r)i[r]=e[r].clone()}return this.clippingPlanes=i,this.clipIntersection=t.clipIntersection,this.clipShadows=t.clipShadows,this.shadowSide=t.shadowSide,this.colorWrite=t.colorWrite,this.precision=t.precision,this.polygonOffset=t.polygonOffset,this.polygonOffsetFactor=t.polygonOffsetFactor,this.polygonOffsetUnits=t.polygonOffsetUnits,this.dithering=t.dithering,this.alphaTest=t.alphaTest,this.alphaHash=t.alphaHash,this.alphaToCoverage=t.alphaToCoverage,this.premultipliedAlpha=t.premultipliedAlpha,this.forceSinglePass=t.forceSinglePass,this.allowOverride=t.allowOverride,this.visible=t.visible,this.toneMapped=t.toneMapped,this.userData=JSON.parse(JSON.stringify(t.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(t){t===!0&&this.version++}},yi=class extends $i{constructor(t){super(),this.isSpriteMaterial=!0,this.type="SpriteMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.rotation=0,this.sizeAttenuation=!0,this.transparent=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.rotation=t.rotation,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},ea=new I,ur=new I,dr=new I,fr=new vt,ia=new vt,yd=new Ie,vo=new I,na=new I,_o=new I,uu=new vt,fh=new vt,du=new vt,Si=class extends se{constructor(t=new yi){if(super(),this.isSprite=!0,this.type="Sprite",hr===void 0){hr=new xe;let e=new Float32Array([-.5,-.5,0,0,0,.5,-.5,0,1,0,.5,.5,0,1,1,-.5,.5,0,0,1]),i=new va(e,5);hr.setIndex([0,1,2,0,2,3]),hr.setAttribute("position",new wr(i,3,0,!1)),hr.setAttribute("uv",new wr(i,2,3,!1))}this.geometry=hr,this.material=t,this.center=new vt(.5,.5),this.count=1}intersectsFrustum(t){return t.intersectsSprite(this)}raycast(t,e){t.camera===null&&ue('Sprite: "Raycaster.camera" needs to be set in order to raycast against sprites.'),ur.setFromMatrixScale(this.matrixWorld),yd.copy(t.camera.matrixWorld),this.modelViewMatrix.multiplyMatrices(t.camera.matrixWorldInverse,this.matrixWorld),dr.setFromMatrixPosition(this.modelViewMatrix),t.camera.isPerspectiveCamera&&this.material.sizeAttenuation===!1&&ur.multiplyScalar(-dr.z);let i=this.material.rotation,s,r;i!==0&&(r=Math.cos(i),s=Math.sin(i));let a=this.center;bo(vo.set(-.5,-.5,0),dr,a,ur,s,r),bo(na.set(.5,-.5,0),dr,a,ur,s,r),bo(_o.set(.5,.5,0),dr,a,ur,s,r),uu.set(0,0),fh.set(1,0),du.set(1,1);let o=t.ray.intersectTriangle(vo,na,_o,!1,ea);if(o===null&&(bo(na.set(-.5,.5,0),dr,a,ur,s,r),fh.set(0,1),o=t.ray.intersectTriangle(vo,_o,na,!1,ea),o===null))return;let l=t.ray.origin.distanceTo(ea);l<t.near||l>t.far||e.push({distance:l,point:ea.clone(),uv:$n.getInterpolation(ea,vo,na,_o,uu,fh,du,new vt),face:null,object:this})}copy(t,e){return super.copy(t,e),t.center!==void 0&&this.center.copy(t.center),this.material=t.material,this}};Jn=new I,ph=new I,Mo=new I,So=new I,Tr=class{constructor(t=new I,e=new I(0,0,-1)){this.origin=t,this.direction=e}set(t,e){return this.origin.copy(t),this.direction.copy(e),this}copy(t){return this.origin.copy(t.origin),this.direction.copy(t.direction),this}at(t,e){return e.copy(this.origin).addScaledVector(this.direction,t)}lookAt(t){return this.direction.copy(t).sub(this.origin).normalize(),this}recast(t){return this.origin.copy(this.at(t,Jn)),this}closestPointToPoint(t,e){e.subVectors(t,this.origin);let i=e.dot(this.direction);return i<0?e.copy(this.origin):e.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(t){return Math.sqrt(this.distanceSqToPoint(t))}distanceSqToPoint(t){let e=Jn.subVectors(t,this.origin).dot(this.direction);return e<0?this.origin.distanceToSquared(t):(Jn.copy(this.origin).addScaledVector(this.direction,e),Jn.distanceToSquared(t))}distanceSqToSegment(t,e,i,s){ph.copy(t).add(e).multiplyScalar(.5),Mo.copy(e).sub(t).normalize(),So.copy(this.origin).sub(ph);let r=t.distanceTo(e)*.5,a=-this.direction.dot(Mo),o=So.dot(this.direction),l=-So.dot(Mo),c=So.lengthSq(),h=Math.abs(1-a*a),d,u,f,g;if(h>0)if(d=a*l-o,u=a*o-l,g=r*h,d>=0)if(u>=-g)if(u<=g){let v=1/h;d*=v,u*=v,f=d*(d+a*u+2*o)+u*(a*d+u+2*l)+c}else u=r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u=-r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;else u<=-g?(d=Math.max(0,-(-a*r+o)),u=d>0?-r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c):u<=g?(d=0,u=Math.min(Math.max(-r,-l),r),f=u*(u+2*l)+c):(d=Math.max(0,-(a*r+o)),u=d>0?r:Math.min(Math.max(-r,-l),r),f=-d*d+u*(u+2*l)+c);else u=a>0?-r:r,d=Math.max(0,-(a*u+o)),f=-d*d+u*(u+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,d),s&&s.copy(ph).addScaledVector(Mo,u),f}intersectSphere(t,e){if(t.radius<0)return null;Jn.subVectors(t.center,this.origin);let i=Jn.dot(this.direction),s=Jn.dot(Jn)-i*i,r=t.radius*t.radius;if(s>r)return null;let a=Math.sqrt(r-s),o=i-a,l=i+a;return l<0?null:o<0?this.at(l,e):this.at(o,e)}intersectsSphere(t){return t.radius<0?!1:this.distanceSqToPoint(t.center)<=t.radius*t.radius}distanceToPlane(t){let e=t.normal.dot(this.direction);if(e===0)return t.distanceToPoint(this.origin)===0?0:null;let i=-(this.origin.dot(t.normal)+t.constant)/e;return i>=0?i:null}intersectPlane(t,e){let i=this.distanceToPlane(t);return i===null?null:this.at(i,e)}intersectsPlane(t){let e=t.distanceToPoint(this.origin);return e===0||t.normal.dot(this.direction)*e<0}intersectBox(t,e){let i,s,r,a,o,l,c=1/this.direction.x,h=1/this.direction.y,d=1/this.direction.z,u=this.origin;return c>=0?(i=(t.min.x-u.x)*c,s=(t.max.x-u.x)*c):(i=(t.max.x-u.x)*c,s=(t.min.x-u.x)*c),h>=0?(r=(t.min.y-u.y)*h,a=(t.max.y-u.y)*h):(r=(t.max.y-u.y)*h,a=(t.min.y-u.y)*h),i>a||r>s||((r>i||isNaN(i))&&(i=r),(a<s||isNaN(s))&&(s=a),d>=0?(o=(t.min.z-u.z)*d,l=(t.max.z-u.z)*d):(o=(t.max.z-u.z)*d,l=(t.min.z-u.z)*d),i>l||o>s)||((o>i||i!==i)&&(i=o),(l<s||s!==s)&&(s=l),s<0)?null:this.at(i>=0?i:s,e)}intersectsBox(t){return this.intersectBox(t,Jn)!==null}intersectTriangle(t,e,i,s,r){let a=this.origin,o=this.direction,l=o.x,c=o.y,h=o.z,d=t.x-a.x,u=t.y-a.y,f=t.z-a.z,g=e.x-a.x,v=e.y-a.y,m=e.z-a.z,p=i.x-a.x,b=i.y-a.y,w=i.z-a.z,_=Math.abs(l),E=Math.abs(c),S=Math.abs(h),A,x,T,C,D,H,z,F,q,Q,Y,mt;if(_>=E&&_>=S?(T=l,H=d,q=g,mt=p,l>=0?(A=c,x=h,C=u,D=f,z=v,F=m,Q=b,Y=w):(A=h,x=c,C=f,D=u,z=m,F=v,Q=w,Y=b)):E>=S?(T=c,H=u,q=v,mt=b,c>=0?(A=h,x=l,C=f,D=d,z=m,F=g,Q=w,Y=p):(A=l,x=h,C=d,D=f,z=g,F=m,Q=p,Y=w)):(T=h,H=f,q=m,mt=w,h>=0?(A=l,x=c,C=d,D=u,z=g,F=v,Q=p,Y=b):(A=c,x=l,C=u,D=d,z=v,F=g,Q=b,Y=p)),T===0)return null;let nt=A/T,lt=x/T,ut=1/T,Yt=C-nt*H,Ut=D-lt*H,ie=z-nt*q,ne=F-lt*q,de=Q-nt*mt,it=Y-lt*mt,ht=de*ne-it*ie,Tt=Yt*it-Ut*de,tt=ie*Ut-ne*Yt;if(s){if(ht<0||Tt<0||tt<0)return null}else if((ht<0||Tt<0||tt<0)&&(ht>0||Tt>0||tt>0))return null;let rt=ht+Tt+tt;if(rt===0)return null;let yt=ut*(ht*H+Tt*q+tt*mt);return(rt>0?yt<0:yt>0)?null:this.at(yt/rt,r)}applyMatrix4(t){return this.origin.applyMatrix4(t),this.direction.transformDirection(t),this}equals(t){return t.origin.equals(this.origin)&&t.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}},Se=class extends $i{constructor(t){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Tl,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},fu=new Ie,Us=new Tr,Eo=new Fn,pu=new I,wo=new I,To=new I,Ro=new I,mh=new I,Ao=new I,mu=new I,Co=new I,At=class extends se{constructor(t=new xe,e=new Se){super(),this.isMesh=!0,this.type="Mesh",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),t.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=t.morphTargetInfluences.slice()),t.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},t.morphTargetDictionary)),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}getVertexPosition(t,e){let i=this.geometry,s=i.attributes.position,r=i.morphAttributes.position,a=i.morphTargetsRelative;e.fromBufferAttribute(s,t);let o=this.morphTargetInfluences;if(r&&o){Ao.set(0,0,0);for(let l=0,c=r.length;l<c;l++){let h=o[l],d=r[l];h!==0&&(mh.fromBufferAttribute(d,t),a?Ao.addScaledVector(mh,h):Ao.addScaledVector(mh.sub(e),h))}e.add(Ao)}return e}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.material,r=this.matrixWorld;s!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Eo.copy(i.boundingSphere),Eo.applyMatrix4(r),Us.copy(t.ray).recast(t.near),!(Eo.containsPoint(Us.origin)===!1&&(Us.intersectSphere(Eo,pu)===null||Us.origin.distanceToSquared(pu)>(t.far-t.near)**2))&&(fu.copy(r).invert(),Us.copy(t.ray).applyMatrix4(fu),!(i.boundingBox!==null&&Us.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(t,e,Us)))}_computeIntersections(t,e,i){let s,r=this.geometry,a=this.material,o=r.index,l=r.attributes.position,c=r.attributes.uv,h=r.attributes.uv1,d=r.attributes.normal,u=r.groups,f=r.drawRange;if(o!==null)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(o.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,E=w;_<E;_+=3){let S=o.getX(_),A=o.getX(_+1),x=o.getX(_+2);s=Lo(this,p,t,i,c,h,d,S,A,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(o.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let b=o.getX(m),w=o.getX(m+1),_=o.getX(m+2);s=Lo(this,a,t,i,c,h,d,b,w,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}else if(l!==void 0)if(Array.isArray(a))for(let g=0,v=u.length;g<v;g++){let m=u[g],p=a[m.materialIndex],b=Math.max(m.start,f.start),w=Math.min(l.count,Math.min(m.start+m.count,f.start+f.count));for(let _=b,E=w;_<E;_+=3){let S=_,A=_+1,x=_+2;s=Lo(this,p,t,i,c,h,d,S,A,x),s&&(s.faceIndex=Math.floor(_/3),s.face.materialIndex=m.materialIndex,e.push(s))}}else{let g=Math.max(0,f.start),v=Math.min(l.count,f.start+f.count);for(let m=g,p=v;m<p;m+=3){let b=m,w=m+1,_=m+2;s=Lo(this,a,t,i,c,h,d,b,w,_),s&&(s.faceIndex=Math.floor(m/3),e.push(s))}}}};Bs=class extends ki{constructor(t=null,e=1,i=1,s,r,a,o,l,c=pi,h=pi,d,u){super(null,a,o,l,c,h,s,r,d,u),this.isDataTexture=!0,this.image={data:t,width:e,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}},Rr=class extends He{constructor(t,e,i,s=1){super(t,e,i),this.isInstancedBufferAttribute=!0,this.meshPerAttribute=s}copy(t){return super.copy(t),this.meshPerAttribute=t.meshPerAttribute,this}toJSON(){let t=super.toJSON();return t.meshPerAttribute=this.meshPerAttribute,t.isInstancedBufferAttribute=!0,t}},pr=new Ie,gu=new Ie,Po=[],xu=new Nn,gp=new Ie,sa=new At,ra=new Fn,_a=class extends At{constructor(t,e,i){super(t,e),this.isInstancedMesh=!0,this.instanceMatrix=new Rr(new Float32Array(i*16),16),this.instanceColor=null,this.morphTexture=null,this.count=i,this.boundingBox=null,this.boundingSphere=null;for(let s=0;s<i;s++)this.setMatrixAt(s,gp)}computeBoundingBox(){let t=this.geometry,e=this.count;this.boundingBox===null&&(this.boundingBox=new Nn),t.boundingBox===null&&t.computeBoundingBox(),this.boundingBox.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,pr),xu.copy(t.boundingBox).applyMatrix4(pr),this.boundingBox.union(xu)}computeBoundingSphere(){let t=this.geometry,e=this.count;this.boundingSphere===null&&(this.boundingSphere=new Fn),t.boundingSphere===null&&t.computeBoundingSphere(),this.boundingSphere.makeEmpty();for(let i=0;i<e;i++)this.getMatrixAt(i,pr),ra.copy(t.boundingSphere).applyMatrix4(pr),this.boundingSphere.union(ra)}copy(t,e){return super.copy(t,e),this.instanceMatrix.copy(t.instanceMatrix),t.morphTexture!==null&&(this.morphTexture=t.morphTexture.clone()),t.instanceColor!==null&&(this.instanceColor=t.instanceColor.clone()),this.count=t.count,t.boundingBox!==null&&(this.boundingBox=t.boundingBox.clone()),t.boundingSphere!==null&&(this.boundingSphere=t.boundingSphere.clone()),this}getColorAt(t,e){return this.instanceColor===null?e.setRGB(1,1,1):e.fromArray(this.instanceColor.array,t*3)}getMatrixAt(t,e){return e.fromArray(this.instanceMatrix.array,t*16)}getMorphAt(t,e){let i=e.morphTargetInfluences,s=this.morphTexture.source.data.data,r=i.length+1,a=t*r+1;for(let o=0;o<i.length;o++)i[o]=s[a+o]}raycast(t,e){let i=this.matrixWorld,s=this.count;if(sa.geometry=this.geometry,sa.material=this.material,sa.material!==void 0&&(this.boundingSphere===null&&this.computeBoundingSphere(),ra.copy(this.boundingSphere),ra.applyMatrix4(i),t.ray.intersectsSphere(ra)!==!1))for(let r=0;r<s;r++){this.getMatrixAt(r,pr),gu.multiplyMatrices(i,pr),sa.matrixWorld=gu,sa.raycast(t,Po);for(let a=0,o=Po.length;a<o;a++){let l=Po[a];l.instanceId=r,l.object=this,e.push(l)}Po.length=0}}setColorAt(t,e){return this.instanceColor===null&&(this.instanceColor=new Rr(new Float32Array(this.instanceMatrix.count*3).fill(1),3)),e.toArray(this.instanceColor.array,t*3),this}setMatrixAt(t,e){return e.toArray(this.instanceMatrix.array,t*16),this}setMorphAt(t,e){let i=e.morphTargetInfluences,s=i.length+1;this.morphTexture===null&&(this.morphTexture=new Bs(new Float32Array(s*this.count),s,this.count,Or,an));let r=this.morphTexture.source.data.data,a=0;for(let c=0;c<i.length;c++)a+=i[c];let o=this.geometry.morphTargetsRelative?1:1-a,l=s*t;return r[l]=o,r.set(i,l+1),this}updateMorphTargets(){}dispose(){super.dispose(),this.morphTexture!==null&&(this.morphTexture.dispose(),this.morphTexture=null)}},Ns=new Fn,xp=new vt(.5,.5),Io=new I,Ar=class{constructor(t=new gn,e=new gn,i=new gn,s=new gn,r=new gn,a=new gn){this.planes=[t,e,i,s,r,a]}set(t,e,i,s,r,a){let o=this.planes;return o[0].copy(t),o[1].copy(e),o[2].copy(i),o[3].copy(s),o[4].copy(r),o[5].copy(a),this}copy(t){let e=this.planes;for(let i=0;i<6;i++)e[i].copy(t.planes[i]);return this}setFromProjectionMatrix(t,e=xn,i=!1){let s=this.planes,r=t.elements,a=r[0],o=r[1],l=r[2],c=r[3],h=r[4],d=r[5],u=r[6],f=r[7],g=r[8],v=r[9],m=r[10],p=r[11],b=r[12],w=r[13],_=r[14],E=r[15];if(s[0].setComponents(c-a,f-h,p-g,E-b).normalize(),s[1].setComponents(c+a,f+h,p+g,E+b).normalize(),s[2].setComponents(c+o,f+d,p+v,E+w).normalize(),s[3].setComponents(c-o,f-d,p-v,E-w).normalize(),i)s[4].setComponents(l,u,m,_).normalize(),s[5].setComponents(c-l,f-u,p-m,E-_).normalize();else if(s[4].setComponents(c-l,f-u,p-m,E-_).normalize(),e===xn)s[5].setComponents(c+l,f+u,p+m,E+_).normalize();else if(e===br)s[5].setComponents(l,u,m,_).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+e);return this}intersectsObject(t){if(t.boundingSphere!==void 0)t.boundingSphere===null&&t.computeBoundingSphere(),Ns.copy(t.boundingSphere).applyMatrix4(t.matrixWorld);else{let e=t.geometry;e.boundingSphere===null&&e.computeBoundingSphere(),Ns.copy(e.boundingSphere).applyMatrix4(t.matrixWorld)}return this.intersectsSphere(Ns)}intersectsSprite(t){Ns.center.set(0,0,0);let e=xp.distanceTo(t.center);return Ns.radius=.7071067811865476+e,Ns.applyMatrix4(t.matrixWorld),this.intersectsSphere(Ns)}intersectsSphere(t){let e=this.planes,i=t.center,s=-t.radius;for(let r=0;r<6;r++)if(e[r].distanceToPoint(i)<s)return!1;return!0}intersectsBox(t){let e=this.planes;for(let i=0;i<6;i++){let s=e[i];if(Io.x=s.normal.x>0?t.max.x:t.min.x,Io.y=s.normal.y>0?t.max.y:t.min.y,Io.z=s.normal.z>0?t.max.z:t.min.z,s.distanceToPoint(Io)<0)return!1}return!0}containsPoint(t){let e=this.planes;for(let i=0;i<6;i++)if(e[i].distanceToPoint(t)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}},Cr=class extends $i{constructor(t){super(),this.isLineBasicMaterial=!0,this.type="LineBasicMaterial",this.color=new gt(16777215),this.map=null,this.linewidth=1,this.linecap="round",this.linejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.linewidth=t.linewidth,this.linecap=t.linecap,this.linejoin=t.linejoin,this.fog=t.fog,this}},il=new I,nl=new I,yu=new Ie,aa=new Tr,Do=new Fn,gh=new I,vu=new I,ba=class extends se{constructor(t=new xe,e=new Cr){super(),this.isLine=!0,this.type="Line",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}computeLineDistances(){let t=this.geometry;if(t.index===null){let e=t.attributes.position,i=[0];for(let s=1,r=e.count;s<r;s++)il.fromBufferAttribute(e,s-1),nl.fromBufferAttribute(e,s),i[s]=i[s-1],i[s]+=il.distanceTo(nl);t.setAttribute("lineDistance",new ae(i,1))}else oe("Line.computeLineDistances(): Computation only possible with non-indexed BufferGeometry.");return this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Line.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Do.copy(i.boundingSphere),Do.applyMatrix4(s),Do.radius+=r,t.ray.intersectsSphere(Do)===!1)return;yu.copy(s).invert(),aa.copy(t.ray).applyMatrix4(yu);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=this.isLineSegments?2:1,h=i.index,u=i.attributes.position;if(h!==null){let f=Math.max(0,a.start),g=Math.min(h.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){let p=h.getX(v),b=h.getX(v+1),w=Uo(this,t,aa,l,p,b,v);w&&e.push(w)}if(this.isLineLoop){let v=h.getX(g-1),m=h.getX(f),p=Uo(this,t,aa,l,v,m,g-1);p&&e.push(p)}}else{let f=Math.max(0,a.start),g=Math.min(u.count,a.start+a.count);for(let v=f,m=g-1;v<m;v+=c){let p=Uo(this,t,aa,l,v,v+1,v);p&&e.push(p)}if(this.isLineLoop){let v=Uo(this,t,aa,l,g-1,f,g-1);v&&e.push(v)}}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Lr=class extends $i{constructor(t){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new gt(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.alphaMap=t.alphaMap,this.size=t.size,this.sizeAttenuation=t.sizeAttenuation,this.fog=t.fog,this}},_u=new Ie,Th=new Tr,No=new Fn,Fo=new I,Pr=class extends se{constructor(t=new xe,e=new Lr){super(),this.isPoints=!0,this.type="Points",this.geometry=t,this.material=e,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(t,e){return super.copy(t,e),this.material=Array.isArray(t.material)?t.material.slice():t.material,this.geometry=t.geometry,this}intersectsFrustum(t){return t.intersectsObject(this)}raycast(t,e){let i=this.geometry,s=this.matrixWorld,r=t.params.Points.threshold,a=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),No.copy(i.boundingSphere),No.applyMatrix4(s),No.radius+=r,t.ray.intersectsSphere(No)===!1)return;_u.copy(s).invert(),Th.copy(t.ray).applyMatrix4(_u);let o=r/((this.scale.x+this.scale.y+this.scale.z)/3),l=o*o,c=i.index,d=i.attributes.position;if(c!==null){let u=Math.max(0,a.start),f=Math.min(c.count,a.start+a.count);for(let g=u,v=f;g<v;g++){let m=c.getX(g);Fo.fromBufferAttribute(d,m),bu(Fo,m,l,s,t,e,this)}}else{let u=Math.max(0,a.start),f=Math.min(d.count,a.start+a.count);for(let g=u,v=f;g<v;g++)Fo.fromBufferAttribute(d,g),bu(Fo,g,l,s,t,e,this)}}updateMorphTargets(){let e=this.geometry.morphAttributes,i=Object.keys(e);if(i.length>0){let s=e[i[0]];if(s!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let r=0,a=s.length;r<a;r++){let o=s[r].name||String(r);this.morphTargetInfluences.push(0),this.morphTargetDictionary[o]=r}}}}};Ma=class extends ki{constructor(t=[],e=Ms,i,s,r,a,o,l,c,h){super(t,e,i,s,r,a,o,l,c,h),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(t){this.image=t}},ts=class extends ki{constructor(t,e,i,s,r,a,o,l,c){super(t,e,i,s,r,a,o,l,c),this.isCanvasTexture=!0,this.needsUpdate=!0}},gs=class extends ki{constructor(t,e,i=_n,s,r,a,o=pi,l=pi,c,h=Pn,d=1){if(h!==Pn&&h!==Es)throw new Error("THREE.DepthTexture: format must be either THREE.DepthFormat or THREE.DepthStencilFormat");let u={width:t,height:e,depth:d};super(u,s,r,a,o,l,h,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(t){return super.copy(t),this.source=new Sr(Object.assign({},t.image)),this.compareFunction=t.compareFunction,this}toJSON(t){let e=super.toJSON(t);return e.compareFunction=this.compareFunction,e}},sl=class extends gs{constructor(t,e=_n,i=Ms,s,r,a=pi,o=pi,l,c=Pn){let h={width:t,height:t,depth:1},d=[h,h,h,h,h,h];super(t,t,e,i,s,r,a,o,l,c),this.image=d,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(t){this.image=t}},Sa=class extends ki{constructor(t=null){super(),this.sourceTexture=t,this.isExternalTexture=!0}copy(t){return super.copy(t),this.sourceTexture=t.sourceTexture,this}},Ne=class n extends xe{constructor(t=1,e=1,i=1,s=1,r=1,a=1){super(),this.type="BoxGeometry",this.parameters={width:t,height:e,depth:i,widthSegments:s,heightSegments:r,depthSegments:a};let o=this;s=Math.floor(s),r=Math.floor(r),a=Math.floor(a);let l=[],c=[],h=[],d=[],u=0,f=0;g("z","y","x",-1,-1,i,e,t,a,r,0),g("z","y","x",1,-1,i,e,-t,a,r,1),g("x","z","y",1,1,t,i,e,s,a,2),g("x","z","y",1,-1,t,i,-e,s,a,3),g("x","y","z",1,-1,t,e,i,s,r,4),g("x","y","z",-1,-1,t,e,-i,s,r,5),this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2));function g(v,m,p,b,w,_,E,S,A,x,T){let C=_/A,D=E/x,H=_/2,z=E/2,F=S/2,q=A+1,Q=x+1,Y=0,mt=0,nt=new I;for(let lt=0;lt<Q;lt++){let ut=lt*D-z;for(let Yt=0;Yt<q;Yt++){let Ut=Yt*C-H;nt[v]=Ut*b,nt[m]=ut*w,nt[p]=F,c.push(nt.x,nt.y,nt.z),nt[v]=0,nt[m]=0,nt[p]=S>0?1:-1,h.push(nt.x,nt.y,nt.z),d.push(Yt/A),d.push(1-lt/x),Y+=1}}for(let lt=0;lt<x;lt++)for(let ut=0;ut<A;ut++){let Yt=u+ut+q*lt,Ut=u+ut+q*(lt+1),ie=u+(ut+1)+q*(lt+1),ne=u+(ut+1)+q*lt;l.push(Yt,Ut,ne),l.push(Ut,ie,ne),mt+=6}o.addGroup(f,mt,T),f+=mt,u+=Y}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.depth,t.widthSegments,t.heightSegments,t.depthSegments)}},ks=class n extends xe{constructor(t=1,e=1,i=4,s=8,r=1){super(),this.type="CapsuleGeometry",this.parameters={radius:t,height:e,capSegments:i,radialSegments:s,heightSegments:r},e=Math.max(0,e),i=Math.max(1,Math.floor(i)),s=Math.max(3,Math.floor(s)),r=Math.max(1,Math.floor(r));let a=[],o=[],l=[],c=[],h=e/2,d=Math.PI/2*t,u=e,f=2*d+u,g=i*2+r,v=s+1,m=new I,p=new I;for(let b=0;b<=g;b++){let w=0,_=0,E=0,S=0;if(b<=i){let T=b/i,C=T*Math.PI/2;_=-h-t*Math.cos(C),E=t*Math.sin(C),S=-t*Math.cos(C),w=T*d}else if(b<=i+r){let T=(b-i)/r;_=-h+T*e,E=t,S=0,w=d+T*u}else{let T=(b-i-r)/i,C=T*Math.PI/2;_=h+t*Math.sin(C),E=t*Math.cos(C),S=t*Math.sin(C),w=d+u+T*d}let A=Math.max(0,Math.min(1,w/f)),x=0;b===0?x=.5/s:b===g&&(x=-.5/s);for(let T=0;T<=s;T++){let C=T/s,D=C*Math.PI*2,H=Math.sin(D),z=Math.cos(D);p.x=-E*z,p.y=_,p.z=E*H,o.push(p.x,p.y,p.z),m.set(-E*z,S,E*H),m.normalize(),l.push(m.x,m.y,m.z),c.push(C+x,A)}if(b>0){let T=(b-1)*v;for(let C=0;C<s;C++){let D=T+C,H=T+C+1,z=b*v+C,F=b*v+C+1;a.push(D,H,z),a.push(H,F,z)}}}this.setIndex(a),this.setAttribute("position",new ae(o,3)),this.setAttribute("normal",new ae(l,3)),this.setAttribute("uv",new ae(c,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.height,t.capSegments,t.radialSegments,t.heightSegments)}},Bn=class n extends xe{constructor(t=1,e=32,i=0,s=Math.PI*2){super(),this.type="CircleGeometry",this.parameters={radius:t,segments:e,thetaStart:i,thetaLength:s},e=Math.max(3,e);let r=[],a=[],o=[],l=[],c=new I,h=new vt;a.push(0,0,0),o.push(0,0,1),l.push(.5,.5);for(let d=0,u=3;d<=e;d++,u+=3){let f=i+d/e*s;c.x=t*Math.cos(f),c.y=t*Math.sin(f),a.push(c.x,c.y,c.z),o.push(0,0,1),h.x=(a[u]/t+1)/2,h.y=(a[u+1]/t+1)/2,l.push(h.x,h.y)}for(let d=1;d<=e;d++)r.push(d,d+1,0);this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("normal",new ae(o,3)),this.setAttribute("uv",new ae(l,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.segments,t.thetaStart,t.thetaLength)}},Fe=class n extends xe{constructor(t=1,e=1,i=1,s=32,r=1,a=!1,o=0,l=Math.PI*2){super(),this.type="CylinderGeometry",this.parameters={radiusTop:t,radiusBottom:e,height:i,radialSegments:s,heightSegments:r,openEnded:a,thetaStart:o,thetaLength:l};let c=this;s=Math.floor(s),r=Math.floor(r);let h=[],d=[],u=[],f=[],g=0,v=[],m=i/2,p=0;b(),a===!1&&(t>0&&w(!0),e>0&&w(!1)),this.setIndex(h),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(f,2));function b(){let _=new I,E=new I,S=0,A=(e-t)/i;for(let x=0;x<=r;x++){let T=[],C=x/r,D=C*(e-t)+t;for(let H=0;H<=s;H++){let z=H/s,F=z*l+o,q=Math.sin(F),Q=Math.cos(F);E.x=D*q,E.y=-C*i+m,E.z=D*Q,d.push(E.x,E.y,E.z),_.set(q,A,Q).normalize(),u.push(_.x,_.y,_.z),f.push(z,1-C),T.push(g++)}v.push(T)}for(let x=0;x<s;x++)for(let T=0;T<r;T++){let C=v[T][x],D=v[T+1][x],H=v[T+1][x+1],z=v[T][x+1];(t>0||T!==0)&&(h.push(C,D,z),S+=3),(e>0||T!==r-1)&&(h.push(D,H,z),S+=3)}c.addGroup(p,S,0),p+=S}function w(_){let E=g,S=new vt,A=new I,x=0,T=_===!0?t:e,C=_===!0?1:-1;for(let H=1;H<=s;H++)d.push(0,m*C,0),u.push(0,C,0),f.push(.5,.5),g++;let D=g;for(let H=0;H<=s;H++){let F=H/s*l+o,q=Math.cos(F),Q=Math.sin(F);A.x=T*Q,A.y=m*C,A.z=T*q,d.push(A.x,A.y,A.z),u.push(0,C,0),S.x=q*.5+.5,S.y=Q*.5*C+.5,f.push(S.x,S.y),g++}for(let H=0;H<s;H++){let z=E+H,F=D+H;_===!0?h.push(F,F+1,z):h.push(F+1,F,z),x+=3}c.addGroup(p,x,_===!0?1:2),p+=x}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radiusTop,t.radiusBottom,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},le=class n extends Fe{constructor(t=1,e=1,i=32,s=1,r=!1,a=0,o=Math.PI*2){super(0,t,e,i,s,r,a,o),this.type="ConeGeometry",this.parameters={radius:t,height:e,radialSegments:i,heightSegments:s,openEnded:r,thetaStart:a,thetaLength:o}}static fromJSON(t){return new n(t.radius,t.height,t.radialSegments,t.heightSegments,t.openEnded,t.thetaStart,t.thetaLength)}},rl=class n extends xe{constructor(t=[],e=[],i=1,s=0){super(),this.type="PolyhedronGeometry",this.parameters={vertices:t,indices:e,radius:i,detail:s};let r=[],a=[];o(s),c(i),h(),this.setAttribute("position",new ae(r,3)),this.setAttribute("normal",new ae(r.slice(),3)),this.setAttribute("uv",new ae(a,2)),s===0?this.computeVertexNormals():this.normalizeNormals();function o(b){let w=new I,_=new I,E=new I;for(let S=0;S<e.length;S+=3)f(e[S+0],w),f(e[S+1],_),f(e[S+2],E),l(w,_,E,b)}function l(b,w,_,E){let S=E+1,A=[];for(let x=0;x<=S;x++){A[x]=[];let T=b.clone().lerp(_,x/S),C=w.clone().lerp(_,x/S),D=S-x;for(let H=0;H<=D;H++)H===0&&x===S?A[x][H]=T:A[x][H]=T.clone().lerp(C,H/D)}for(let x=0;x<S;x++)for(let T=0;T<2*(S-x)-1;T++){let C=Math.floor(T/2);T%2===0?(u(A[x][C+1]),u(A[x+1][C]),u(A[x][C])):(u(A[x][C+1]),u(A[x+1][C+1]),u(A[x+1][C]))}}function c(b){let w=new I;for(let _=0;_<r.length;_+=3)w.x=r[_+0],w.y=r[_+1],w.z=r[_+2],w.normalize().multiplyScalar(b),r[_+0]=w.x,r[_+1]=w.y,r[_+2]=w.z}function h(){let b=new I;for(let w=0;w<r.length;w+=3){b.x=r[w+0],b.y=r[w+1],b.z=r[w+2];let _=m(b)/2/Math.PI+.5,E=p(b)/Math.PI+.5;a.push(_,1-E)}g(),d()}function d(){for(let b=0;b<a.length;b+=6){let w=a[b+0],_=a[b+2],E=a[b+4],S=Math.max(w,_,E),A=Math.min(w,_,E);S>.9&&A<.1&&(w<.2&&(a[b+0]+=1),_<.2&&(a[b+2]+=1),E<.2&&(a[b+4]+=1))}}function u(b){r.push(b.x,b.y,b.z)}function f(b,w){let _=b*3;w.x=t[_+0],w.y=t[_+1],w.z=t[_+2]}function g(){let b=new I,w=new I,_=new I,E=new I,S=new vt,A=new vt,x=new vt;for(let T=0,C=0;T<r.length;T+=9,C+=6){b.set(r[T+0],r[T+1],r[T+2]),w.set(r[T+3],r[T+4],r[T+5]),_.set(r[T+6],r[T+7],r[T+8]),S.set(a[C+0],a[C+1]),A.set(a[C+2],a[C+3]),x.set(a[C+4],a[C+5]),E.copy(b).add(w).add(_).divideScalar(3);let D=m(E);v(S,C+0,b,D),v(A,C+2,w,D),v(x,C+4,_,D)}}function v(b,w,_,E){E<0&&b.x===1&&(a[w]=b.x-1),_.x===0&&_.z===0&&(a[w]=E/2/Math.PI+.5)}function m(b){return Math.atan2(b.z,-b.x)}function p(b){return Math.atan2(-b.y,Math.sqrt(b.x*b.x+b.z*b.z))}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.vertices,t.indices,t.radius,t.detail)}},ji=class{constructor(){this.type="Curve",this.arcLengthDivisions=200,this.needsUpdate=!1,this.cacheArcLengths=null}getPoint(){oe("Curve: .getPoint() not implemented.")}getPointAt(t,e){let i=this.getUtoTmapping(t);return this.getPoint(i,e)}getPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return e}getSpacedPoints(t=5){let e=[];for(let i=0;i<=t;i++)e.push(this.getPointAt(i/t));return e}getLength(){let t=this.getLengths();return t[t.length-1]}getLengths(t=this.arcLengthDivisions){if(this.cacheArcLengths&&this.cacheArcLengths.length===t+1&&!this.needsUpdate)return this.cacheArcLengths;this.needsUpdate=!1;let e=[],i,s=this.getPoint(0),r=0;e.push(0);for(let a=1;a<=t;a++)i=this.getPoint(a/t),r+=i.distanceTo(s),e.push(r),s=i;return this.cacheArcLengths=e,e}updateArcLengths(){this.needsUpdate=!0,this.getLengths()}getUtoTmapping(t,e=null){let i=this.getLengths(),s=0,r=i.length,a;e?a=e:a=t*i[r-1];let o=0,l=r-1,c;for(;o<=l;)if(s=Math.floor(o+(l-o)/2),c=i[s]-a,c<0)o=s+1;else if(c>0)l=s-1;else{l=s;break}if(s=l,i[s]===a)return s/(r-1);let h=i[s],u=i[s+1]-h,f=(a-h)/u;return(s+f)/(r-1)}getTangent(t,e){let s=t-1e-4,r=t+1e-4;s<0&&(s=0),r>1&&(r=1);let a=this.getPoint(s),o=this.getPoint(r),l=e||(a.isVector2?new vt:new I);return l.copy(o).sub(a).normalize(),l}getTangentAt(t,e){let i=this.getUtoTmapping(t);return this.getTangent(i,e)}computeFrenetFrames(t,e=!1){let i=new I,s=[],r=[],a=[],o=new I,l=new Ie;for(let f=0;f<=t;f++){let g=f/t;s[f]=this.getTangentAt(g,new I)}r[0]=new I,a[0]=new I;let c=Number.MAX_VALUE,h=Math.abs(s[0].x),d=Math.abs(s[0].y),u=Math.abs(s[0].z);h<=c&&(c=h,i.set(1,0,0)),d<=c&&(c=d,i.set(0,1,0)),u<=c&&i.set(0,0,1),o.crossVectors(s[0],i).normalize(),r[0].crossVectors(s[0],o),a[0].crossVectors(s[0],r[0]);for(let f=1;f<=t;f++){if(r[f]=r[f-1].clone(),a[f]=a[f-1].clone(),o.crossVectors(s[f-1],s[f]),o.length()>Number.EPSILON){o.normalize();let g=Math.acos(Me(s[f-1].dot(s[f]),-1,1));r[f].applyMatrix4(l.makeRotationAxis(o,g))}a[f].crossVectors(s[f],r[f])}if(e===!0){let f=Math.acos(Me(r[0].dot(r[t]),-1,1));f/=t,s[0].dot(o.crossVectors(r[0],r[t]))>0&&(f=-f);for(let g=1;g<=t;g++)r[g].applyMatrix4(l.makeRotationAxis(s[g],f*g)),a[g].crossVectors(s[g],r[g])}return{tangents:s,normals:r,binormals:a}}clone(){return new this.constructor().copy(this)}copy(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}toJSON(){let t={metadata:{version:4.7,type:"Curve",generator:"Curve.toJSON"}};return t.arcLengthDivisions=this.arcLengthDivisions,t.type=this.type,t}fromJSON(t){return this.arcLengthDivisions=t.arcLengthDivisions,this}},Ir=class extends ji{constructor(t=0,e=0,i=1,s=1,r=0,a=Math.PI*2,o=!1,l=0){super(),this.isEllipseCurve=!0,this.type="EllipseCurve",this.aX=t,this.aY=e,this.xRadius=i,this.yRadius=s,this.aStartAngle=r,this.aEndAngle=a,this.aClockwise=o,this.aRotation=l}getPoint(t,e=new vt){let i=e,s=Math.PI*2,r=this.aEndAngle-this.aStartAngle,a=Math.abs(r)<Number.EPSILON;for(;r<0;)r+=s;for(;r>s;)r-=s;r<Number.EPSILON&&(a?r=0:r=s),this.aClockwise===!0&&!a&&(r===s?r=-s:r=r-s);let o=this.aStartAngle+t*r,l=this.aX+this.xRadius*Math.cos(o),c=this.aY+this.yRadius*Math.sin(o);if(this.aRotation!==0){let h=Math.cos(this.aRotation),d=Math.sin(this.aRotation),u=l-this.aX,f=c-this.aY;l=u*h-f*d+this.aX,c=u*d+f*h+this.aY}return i.set(l,c)}copy(t){return super.copy(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}toJSON(){let t=super.toJSON();return t.aX=this.aX,t.aY=this.aY,t.xRadius=this.xRadius,t.yRadius=this.yRadius,t.aStartAngle=this.aStartAngle,t.aEndAngle=this.aEndAngle,t.aClockwise=this.aClockwise,t.aRotation=this.aRotation,t}fromJSON(t){return super.fromJSON(t),this.aX=t.aX,this.aY=t.aY,this.xRadius=t.xRadius,this.yRadius=t.yRadius,this.aStartAngle=t.aStartAngle,this.aEndAngle=t.aEndAngle,this.aClockwise=t.aClockwise,this.aRotation=t.aRotation,this}},al=class extends Ir{constructor(t,e,i,s,r,a){super(t,e,i,i,s,r,a),this.isArcCurve=!0,this.type="ArcCurve"}};Mu=new I,Su=new I,xh=new t0,yh=new t0,vh=new t0,yn=class extends ji{constructor(t=[],e=!1,i="centripetal",s=.5){super(),this.isCatmullRomCurve3=!0,this.type="CatmullRomCurve3",this.points=t,this.closed=e,this.curveType=i,this.tension=s}getPoint(t,e=new I){let i=e,s=this.points,r=s.length,a=(r-(this.closed?0:1))*t,o=Math.floor(a),l=a-o;this.closed?o+=o>0?0:(Math.floor(Math.abs(o)/r)+1)*r:l===0&&o===r-1&&(o=r-2,l=1);let c,h;this.closed||o>0?c=s[(o-1)%r]:(Su.subVectors(s[0],s[1]).add(s[0]),c=Su);let d=s[o%r],u=s[(o+1)%r];if(this.closed||o+2<r?h=s[(o+2)%r]:(Mu.subVectors(s[r-1],s[r-2]).add(s[r-1]),h=Mu),this.curveType==="centripetal"||this.curveType==="chordal"){let f=this.curveType==="chordal"?.5:.25,g=Math.pow(c.distanceToSquared(d),f),v=Math.pow(d.distanceToSquared(u),f),m=Math.pow(u.distanceToSquared(h),f);v<1e-4&&(v=1),g<1e-4&&(g=v),m<1e-4&&(m=v),xh.initNonuniformCatmullRom(c.x,d.x,u.x,h.x,g,v,m),yh.initNonuniformCatmullRom(c.y,d.y,u.y,h.y,g,v,m),vh.initNonuniformCatmullRom(c.z,d.z,u.z,h.z,g,v,m)}else this.curveType==="catmullrom"&&(xh.initCatmullRom(c.x,d.x,u.x,h.x,this.tension),yh.initCatmullRom(c.y,d.y,u.y,h.y,this.tension),vh.initCatmullRom(c.z,d.z,u.z,h.z,this.tension));return i.set(xh.calc(l),yh.calc(l),vh.calc(l)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t.closed=this.closed,t.curveType=this.curveType,t.tension=this.tension,t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new I().fromArray(s))}return this.closed=t.closed,this.curveType=t.curveType,this.tension=t.tension,this}};Ea=class extends ji{constructor(t=new vt,e=new vt,i=new vt,s=new vt){super(),this.isCubicBezierCurve=!0,this.type="CubicBezierCurve",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new vt){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ca(t,s.x,r.x,a.x,o.x),ca(t,s.y,r.y,a.y,o.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},ol=class extends ji{constructor(t=new I,e=new I,i=new I,s=new I){super(),this.isCubicBezierCurve3=!0,this.type="CubicBezierCurve3",this.v0=t,this.v1=e,this.v2=i,this.v3=s}getPoint(t,e=new I){let i=e,s=this.v0,r=this.v1,a=this.v2,o=this.v3;return i.set(ca(t,s.x,r.x,a.x,o.x),ca(t,s.y,r.y,a.y,o.y),ca(t,s.z,r.z,a.z,o.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this.v3.copy(t.v3),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t.v3=this.v3.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this.v3.fromArray(t.v3),this}},wa=class extends ji{constructor(t=new vt,e=new vt){super(),this.isLineCurve=!0,this.type="LineCurve",this.v1=t,this.v2=e}getPoint(t,e=new vt){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new vt){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},ll=class extends ji{constructor(t=new I,e=new I){super(),this.isLineCurve3=!0,this.type="LineCurve3",this.v1=t,this.v2=e}getPoint(t,e=new I){let i=e;return t===1?i.copy(this.v2):(i.copy(this.v2).sub(this.v1),i.multiplyScalar(t).add(this.v1)),i}getPointAt(t,e){return this.getPoint(t,e)}getTangent(t,e=new I){return e.subVectors(this.v2,this.v1).normalize()}getTangentAt(t,e){return this.getTangent(t,e)}copy(t){return super.copy(t),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ta=class extends ji{constructor(t=new vt,e=new vt,i=new vt){super(),this.isQuadraticBezierCurve=!0,this.type="QuadraticBezierCurve",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new vt){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(la(t,s.x,r.x,a.x),la(t,s.y,r.y,a.y)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},Ra=class extends ji{constructor(t=new I,e=new I,i=new I){super(),this.isQuadraticBezierCurve3=!0,this.type="QuadraticBezierCurve3",this.v0=t,this.v1=e,this.v2=i}getPoint(t,e=new I){let i=e,s=this.v0,r=this.v1,a=this.v2;return i.set(la(t,s.x,r.x,a.x),la(t,s.y,r.y,a.y),la(t,s.z,r.z,a.z)),i}copy(t){return super.copy(t),this.v0.copy(t.v0),this.v1.copy(t.v1),this.v2.copy(t.v2),this}toJSON(){let t=super.toJSON();return t.v0=this.v0.toArray(),t.v1=this.v1.toArray(),t.v2=this.v2.toArray(),t}fromJSON(t){return super.fromJSON(t),this.v0.fromArray(t.v0),this.v1.fromArray(t.v1),this.v2.fromArray(t.v2),this}},xs=class extends ji{constructor(t=[]){super(),this.isSplineCurve=!0,this.type="SplineCurve",this.points=t}getPoint(t,e=new vt){let i=e,s=this.points,r=(s.length-1)*t,a=Math.floor(r),o=r-a,l=s[a===0?a:a-1],c=s[a],h=s[a>s.length-2?s.length-1:a+1],d=s[a>s.length-3?s.length-1:a+2];return i.set(Eu(o,l.x,c.x,h.x,d.x),Eu(o,l.y,c.y,h.y,d.y)),i}copy(t){super.copy(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.points=[];for(let e=0,i=this.points.length;e<i;e++){let s=this.points[e];t.points.push(s.toArray())}return t}fromJSON(t){super.fromJSON(t),this.points=[];for(let e=0,i=t.points.length;e<i;e++){let s=t.points[e];this.points.push(new vt().fromArray(s))}return this}},cl=Object.freeze({__proto__:null,ArcCurve:al,CatmullRomCurve3:yn,CubicBezierCurve:Ea,CubicBezierCurve3:ol,EllipseCurve:Ir,LineCurve:wa,LineCurve3:ll,QuadraticBezierCurve:Ta,QuadraticBezierCurve3:Ra,SplineCurve:xs}),hl=class extends ji{constructor(){super(),this.type="CurvePath",this.curves=[],this.autoClose=!1}add(t){this.curves.push(t)}closePath(){let t=this.curves[0].getPoint(0),e=this.curves[this.curves.length-1].getPoint(1);if(!t.equals(e)){let i=t.isVector2===!0?"LineCurve":"LineCurve3";this.curves.push(new cl[i](e,t))}return this}getPoint(t,e){let i=t*this.getLength(),s=this.getCurveLengths(),r=0;for(;r<s.length;){if(s[r]>=i){let a=s[r]-i,o=this.curves[r],l=o.getLength(),c=l===0?0:1-a/l;return o.getPointAt(c,e)}r++}return null}getLength(){let t=this.getCurveLengths();return t[t.length-1]}updateArcLengths(){this.needsUpdate=!0,this.cacheLengths=null,this.getCurveLengths()}getCurveLengths(){if(this.cacheLengths&&this.cacheLengths.length===this.curves.length)return this.cacheLengths;let t=[],e=0;for(let i=0,s=this.curves.length;i<s;i++)e+=this.curves[i].getLength(),t.push(e);return this.cacheLengths=t,t}getSpacedPoints(t=40){let e=[];for(let i=0;i<=t;i++)e.push(this.getPoint(i/t));return this.autoClose&&e.push(e[0]),e}getPoints(t=12){let e=[],i;for(let s=0,r=this.curves;s<r.length;s++){let a=r[s],o=a.isEllipseCurve?t*2:a.isLineCurve||a.isLineCurve3?1:a.isSplineCurve?t*a.points.length:t,l=a.getPoints(o);for(let c=0;c<l.length;c++){let h=l[c];i&&i.equals(h)||(e.push(h),i=h)}}return this.autoClose&&e.length>1&&!e[e.length-1].equals(e[0])&&e.push(e[0]),e}copy(t){super.copy(t),this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(s.clone())}return this.autoClose=t.autoClose,this}toJSON(){let t=super.toJSON();t.autoClose=this.autoClose,t.curves=[];for(let e=0,i=this.curves.length;e<i;e++){let s=this.curves[e];t.curves.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.autoClose=t.autoClose,this.curves=[];for(let e=0,i=t.curves.length;e<i;e++){let s=t.curves[e];this.curves.push(new cl[s.type]().fromJSON(s))}return this}},Aa=class extends hl{constructor(t){super(),this.type="Path",this.currentPoint=new vt,t&&this.setFromPoints(t)}setFromPoints(t){this.moveTo(t[0].x,t[0].y);for(let e=1,i=t.length;e<i;e++)this.lineTo(t[e].x,t[e].y);return this}moveTo(t,e){return this.currentPoint.set(t,e),this}lineTo(t,e){let i=new wa(this.currentPoint.clone(),new vt(t,e));return this.curves.push(i),this.currentPoint.set(t,e),this}quadraticCurveTo(t,e,i,s){let r=new Ta(this.currentPoint.clone(),new vt(t,e),new vt(i,s));return this.curves.push(r),this.currentPoint.set(i,s),this}bezierCurveTo(t,e,i,s,r,a){let o=new Ea(this.currentPoint.clone(),new vt(t,e),new vt(i,s),new vt(r,a));return this.curves.push(o),this.currentPoint.set(r,a),this}splineThru(t){let e=[this.currentPoint.clone()].concat(t),i=new xs(e);return this.curves.push(i),this.currentPoint.copy(t[t.length-1]),this}arc(t,e,i,s,r,a){let o=this.currentPoint.x,l=this.currentPoint.y;return this.absarc(t+o,e+l,i,s,r,a),this}absarc(t,e,i,s,r,a){return this.absellipse(t,e,i,i,s,r,a),this}ellipse(t,e,i,s,r,a,o,l){let c=this.currentPoint.x,h=this.currentPoint.y;return this.absellipse(t+c,e+h,i,s,r,a,o,l),this}absellipse(t,e,i,s,r,a,o,l){let c=new Ir(t,e,i,s,r,a,o,l);if(this.curves.length>0){let d=c.getPoint(0);d.equals(this.currentPoint)||this.lineTo(d.x,d.y)}this.curves.push(c);let h=c.getPoint(1);return this.currentPoint.copy(h),this}copy(t){return super.copy(t),this.currentPoint.copy(t.currentPoint),this}toJSON(){let t=super.toJSON();return t.currentPoint=this.currentPoint.toArray(),t}fromJSON(t){return super.fromJSON(t),this.currentPoint.fromArray(t.currentPoint),this}},ci=class extends Aa{constructor(t){super(t),this.uuid=jn(),this.type="Shape",this.holes=[]}getPointsHoles(t){let e=[];for(let i=0,s=this.holes.length;i<s;i++)e[i]=this.holes[i].getPoints(t);return e}extractPoints(t){return{shape:this.getPoints(t),holes:this.getPointsHoles(t)}}copy(t){super.copy(t),this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(s.clone())}return this}toJSON(){let t=super.toJSON();t.uuid=this.uuid,t.holes=[];for(let e=0,i=this.holes.length;e<i;e++){let s=this.holes[e];t.holes.push(s.toJSON())}return t}fromJSON(t){super.fromJSON(t),this.uuid=t.uuid,this.holes=[];for(let e=0,i=t.holes.length;e<i;e++){let s=t.holes[e];this.holes.push(new Aa().fromJSON(s))}return this}};Ch=class{static triangulate(t,e,i=2){return wp(t,e,i)}},Ln=class n{static area(t){let e=t.length,i=0;for(let s=e-1,r=0;r<e;s=r++)i+=t[s].x*t[r].y-t[r].x*t[s].y;return i*.5}static isClockWise(t){return n.area(t)<0}static triangulateShape(t,e){let i=[],s=[],r=[];Tu(t),Ru(i,t);let a=t.length;e.forEach(Tu);for(let l=0;l<e.length;l++)s.push(a),a+=e[l].length,Ru(i,e[l]);let o=Ch.triangulate(i,s);for(let l=0;l<o.length;l+=3)r.push(o.slice(l,l+3));return r}};zi=class n extends xe{constructor(t=new ci([new vt(.5,.5),new vt(-.5,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e={}){super(),this.type="ExtrudeGeometry",this.parameters={shapes:t,options:e},t=Array.isArray(t)?t:[t];let i=this,s=[],r=[];for(let o=0,l=t.length;o<l;o++){let c=t[o];a(c)}this.setAttribute("position",new ae(s,3)),this.setAttribute("uv",new ae(r,2)),this.computeVertexNormals();function a(o){let l=[],c=e.curveSegments!==void 0?e.curveSegments:12,h=e.steps!==void 0?e.steps:1,d=e.depth!==void 0?e.depth:1,u=e.bevelEnabled!==void 0?e.bevelEnabled:!0,f=e.bevelThickness!==void 0?e.bevelThickness:.2,g=e.bevelSize!==void 0?e.bevelSize:f-.1,v=e.bevelOffset!==void 0?e.bevelOffset:0,m=e.bevelSegments!==void 0?e.bevelSegments:3,p=e.extrudePath,b=e.UVGenerator!==void 0?e.UVGenerator:Gp,w,_=!1,E,S,A,x;if(p){w=p.getSpacedPoints(h),_=!0,u=!1;let P=p.isCatmullRomCurve3?p.closed:!1;E=p.computeFrenetFrames(h,P),S=new I,A=new I,x=new I}u||(m=0,f=0,g=0,v=0);let T=o.extractPoints(c),C=T.shape,D=T.holes;if(!Ln.isClockWise(C)){C=C.reverse();for(let P=0,G=D.length;P<G;P++){let st=D[P];Ln.isClockWise(st)&&(D[P]=st.reverse())}}function z(P){let st=10000000000000001e-36,$=P[0];for(let _t=1;_t<=P.length;_t++){let Pt=_t%P.length,Ht=P[Pt],kt=Ht.x-$.x,Wt=Ht.y-$.y,U=kt*kt+Wt*Wt,_e=Math.max(Math.abs(Ht.x),Math.abs(Ht.y),Math.abs($.x),Math.abs($.y)),ce=st*_e*_e;if(U<=ce){P.splice(Pt,1),_t--;continue}$=Ht}}z(C),D.forEach(z);let F=D.length,q=C;for(let P=0;P<F;P++){let G=D[P];C=C.concat(G)}function Q(P,G,st){return G||ue("ExtrudeGeometry: vec does not exist"),P.clone().addScaledVector(G,st)}let Y=C.length;function mt(P,G,st){let $,_t,Pt,Ht=P.x-G.x,kt=P.y-G.y,Wt=st.x-P.x,U=st.y-P.y,_e=Ht*Ht+kt*kt,ce=Ht*U-kt*Wt;if(Math.abs(ce)>Number.EPSILON){let R=Math.sqrt(_e),y=Math.sqrt(Wt*Wt+U*U),V=G.x-kt/R,J=G.y+Ht/R,ot=st.x-U/y,Et=st.y+Wt/y,Z=((ot-V)*U-(Et-J)*Wt)/(Ht*U-kt*Wt);$=V+Ht*Z-P.x,_t=J+kt*Z-P.y;let X=$*$+_t*_t;if(X<=2)return new vt($,_t);Pt=Math.sqrt(X/2)}else{let R=!1;Ht>Number.EPSILON?Wt>Number.EPSILON&&(R=!0):Ht<-Number.EPSILON?Wt<-Number.EPSILON&&(R=!0):Math.sign(kt)===Math.sign(U)&&(R=!0),R?($=-kt,_t=Ht,Pt=Math.sqrt(_e)):($=Ht,_t=kt,Pt=Math.sqrt(_e/2))}return new vt($/Pt,_t/Pt)}let nt=[];for(let P=0,G=q.length,st=G-1,$=P+1;P<G;P++,st++,$++)st===G&&(st=0),$===G&&($=0),nt[P]=mt(q[P],q[st],q[$]);let lt=[],ut,Yt=nt.concat();for(let P=0,G=F;P<G;P++){let st=D[P];ut=[];for(let $=0,_t=st.length,Pt=_t-1,Ht=$+1;$<_t;$++,Pt++,Ht++)Pt===_t&&(Pt=0),Ht===_t&&(Ht=0),ut[$]=mt(st[$],st[Pt],st[Ht]);lt.push(ut),Yt=Yt.concat(ut)}let Ut;if(m===0)Ut=Ln.triangulateShape(q,D);else{let P=[],G=[];for(let st=0;st<m;st++){let $=st/m,_t=f*Math.cos($*Math.PI/2),Pt=g*Math.sin($*Math.PI/2)+v;for(let Ht=0,kt=q.length;Ht<kt;Ht++){let Wt=Q(q[Ht],nt[Ht],Pt);Tt(Wt.x,Wt.y,-_t),$===0&&P.push(Wt)}for(let Ht=0,kt=F;Ht<kt;Ht++){let Wt=D[Ht];ut=lt[Ht];let U=[];for(let _e=0,ce=Wt.length;_e<ce;_e++){let R=Q(Wt[_e],ut[_e],Pt);Tt(R.x,R.y,-_t),$===0&&U.push(R)}$===0&&G.push(U)}}Ut=Ln.triangulateShape(P,G)}let ie=Ut.length,ne=g+v;for(let P=0;P<Y;P++){let G=u?Q(C[P],Yt[P],ne):C[P];_?(A.copy(E.normals[0]).multiplyScalar(G.x),S.copy(E.binormals[0]).multiplyScalar(G.y),x.copy(w[0]).add(A).add(S),Tt(x.x,x.y,x.z)):Tt(G.x,G.y,0)}for(let P=1;P<=h;P++)for(let G=0;G<Y;G++){let st=u?Q(C[G],Yt[G],ne):C[G];_?(A.copy(E.normals[P]).multiplyScalar(st.x),S.copy(E.binormals[P]).multiplyScalar(st.y),x.copy(w[P]).add(A).add(S),Tt(x.x,x.y,x.z)):Tt(st.x,st.y,d/h*P)}for(let P=m-1;P>=0;P--){let G=P/m,st=f*Math.cos(G*Math.PI/2),$=g*Math.sin(G*Math.PI/2)+v;for(let _t=0,Pt=q.length;_t<Pt;_t++){let Ht=Q(q[_t],nt[_t],$);Tt(Ht.x,Ht.y,d+st)}for(let _t=0,Pt=D.length;_t<Pt;_t++){let Ht=D[_t];ut=lt[_t];for(let kt=0,Wt=Ht.length;kt<Wt;kt++){let U=Q(Ht[kt],ut[kt],$);_?Tt(U.x,U.y+w[h-1].y,w[h-1].x+st):Tt(U.x,U.y,d+st)}}}de(),it();function de(){let P=s.length/3;if(u){let G=0,st=Y*G;for(let $=0;$<ie;$++){let _t=Ut[$];tt(_t[2]+st,_t[1]+st,_t[0]+st)}G=h+m*2,st=Y*G;for(let $=0;$<ie;$++){let _t=Ut[$];tt(_t[0]+st,_t[1]+st,_t[2]+st)}}else{for(let G=0;G<ie;G++){let st=Ut[G];tt(st[2],st[1],st[0])}for(let G=0;G<ie;G++){let st=Ut[G];tt(st[0]+Y*h,st[1]+Y*h,st[2]+Y*h)}}i.addGroup(P,s.length/3-P,0)}function it(){let P=s.length/3,G=0;ht(q,G),G+=q.length;for(let st=0,$=D.length;st<$;st++){let _t=D[st];ht(_t,G),G+=_t.length}i.addGroup(P,s.length/3-P,1)}function ht(P,G){let st=P.length;for(;--st>=0;){let $=st,_t=st-1;_t<0&&(_t=P.length-1);for(let Pt=0,Ht=h+m*2;Pt<Ht;Pt++){let kt=Y*Pt,Wt=Y*(Pt+1),U=G+$+kt,_e=G+_t+kt,ce=G+_t+Wt,R=G+$+Wt;rt(U,_e,ce,R)}}}function Tt(P,G,st){l.push(P),l.push(G),l.push(st)}function tt(P,G,st){yt(P),yt(G),yt(st);let $=s.length/3,_t=b.generateTopUV(i,s,$-3,$-2,$-1);bt(_t[0]),bt(_t[1]),bt(_t[2])}function rt(P,G,st,$){yt(P),yt(G),yt($),yt(G),yt(st),yt($);let _t=s.length/3,Pt=b.generateSideWallUV(i,s,_t-6,_t-3,_t-2,_t-1);bt(Pt[0]),bt(Pt[1]),bt(Pt[3]),bt(Pt[1]),bt(Pt[2]),bt(Pt[3])}function yt(P){s.push(l[P*3+0]),s.push(l[P*3+1]),s.push(l[P*3+2])}function bt(P){r.push(P.x),r.push(P.y)}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes,i=this.parameters.options;return Vp(e,i,t)}static fromJSON(t,e){let i=[];for(let r=0,a=t.shapes.length;r<a;r++){let o=e[t.shapes[r]];i.push(o)}let s=t.options.extrudePath;return s!==void 0&&(t.options.extrudePath=new cl[s.type]().fromJSON(s)),new n(i,t.options)}},Gp={generateTopUV:function(n,t,e,i,s){let r=t[e*3],a=t[e*3+1],o=t[i*3],l=t[i*3+1],c=t[s*3],h=t[s*3+1];return[new vt(r,a),new vt(o,l),new vt(c,h)]},generateSideWallUV:function(n,t,e,i,s,r){let a=t[e*3],o=t[e*3+1],l=t[e*3+2],c=t[i*3],h=t[i*3+1],d=t[i*3+2],u=t[s*3],f=t[s*3+1],g=t[s*3+2],v=t[r*3],m=t[r*3+1],p=t[r*3+2];return Math.abs(o-h)<Math.abs(a-c)?[new vt(a,1-l),new vt(c,1-d),new vt(u,1-g),new vt(v,1-p)]:[new vt(o,1-l),new vt(h,1-d),new vt(f,1-g),new vt(m,1-p)]}};Hs=class n extends xe{constructor(t=[new vt(0,-.5),new vt(.5,0),new vt(0,.5)],e=12,i=0,s=Math.PI*2){super(),this.type="LatheGeometry",this.parameters={points:t,segments:e,phiStart:i,phiLength:s},e=Math.floor(e),s=Me(s,0,Math.PI*2);let r=[],a=[],o=[],l=[],c=[],h=1/e,d=new I,u=new vt,f=new I,g=new I,v=new I,m=0,p=0;for(let b=0;b<=t.length-1;b++)switch(b){case 0:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,v.copy(f),f.normalize(),l.push(f.x,f.y,f.z);break;case t.length-1:l.push(v.x,v.y,v.z);break;default:m=t[b+1].x-t[b].x,p=t[b+1].y-t[b].y,f.x=p*1,f.y=-m,f.z=p*0,g.copy(f),f.x+=v.x,f.y+=v.y,f.z+=v.z,f.normalize(),l.push(f.x,f.y,f.z),v.copy(g)}for(let b=0;b<=e;b++){let w=i+b*h*s,_=Math.sin(w),E=Math.cos(w);for(let S=0;S<=t.length-1;S++){d.x=t[S].x*_,d.y=t[S].y,d.z=t[S].x*E,a.push(d.x,d.y,d.z),u.x=b/e,u.y=S/(t.length-1),o.push(u.x,u.y);let A=l[3*S+0]*_,x=l[3*S+1],T=l[3*S+0]*E;c.push(A,x,T)}}for(let b=0;b<e;b++)for(let w=0;w<t.length-1;w++){let _=w+b*t.length,E=_,S=_+t.length,A=_+t.length+1,x=_+1;r.push(E,S,x),r.push(A,x,S)}this.setIndex(r),this.setAttribute("position",new ae(a,3)),this.setAttribute("uv",new ae(o,2)),this.setAttribute("normal",new ae(c,3))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.points,t.segments,t.phiStart,t.phiLength)}},Gi=class n extends rl{constructor(t=1,e=0){let i=[1,0,0,-1,0,0,0,1,0,0,-1,0,0,0,1,0,0,-1],s=[0,2,4,0,4,3,0,3,5,0,5,2,1,2,5,1,5,3,1,3,4,1,4,2];super(i,s,t,e),this.type="OctahedronGeometry",this.parameters={radius:t,detail:e}}static fromJSON(t){return new n(t.radius,t.detail)}},es=class n extends xe{constructor(t=1,e=1,i=1,s=1){super(),this.type="PlaneGeometry",this.parameters={width:t,height:e,widthSegments:i,heightSegments:s};let r=t/2,a=e/2,o=Math.floor(i),l=Math.floor(s),c=o+1,h=l+1,d=t/o,u=e/l,f=[],g=[],v=[],m=[];for(let p=0;p<h;p++){let b=p*u-a;for(let w=0;w<c;w++){let _=w*d-r;g.push(_,-b,0),v.push(0,0,1),m.push(w/o),m.push(1-p/l)}}for(let p=0;p<l;p++)for(let b=0;b<o;b++){let w=b+c*p,_=b+c*(p+1),E=b+1+c*(p+1),S=b+1+c*p;f.push(w,_,S),f.push(_,E,S)}this.setIndex(f),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.width,t.height,t.widthSegments,t.heightSegments)}},Ia=class n extends xe{constructor(t=.5,e=1,i=32,s=1,r=0,a=Math.PI*2){super(),this.type="RingGeometry",this.parameters={innerRadius:t,outerRadius:e,thetaSegments:i,phiSegments:s,thetaStart:r,thetaLength:a},i=Math.max(3,i),s=Math.max(1,s);let o=[],l=[],c=[],h=[],d=t,u=(e-t)/s,f=new I,g=new vt;for(let v=0;v<=s;v++){for(let m=0;m<=i;m++){let p=r+m/i*a;f.x=d*Math.cos(p),f.y=d*Math.sin(p),l.push(f.x,f.y,f.z),c.push(0,0,1),g.x=(f.x/e+1)/2,g.y=(f.y/e+1)/2,h.push(g.x,g.y)}d+=u}for(let v=0;v<s;v++){let m=v*(i+1);for(let p=0;p<i;p++){let b=p+m,w=b,_=b+i+1,E=b+i+2,S=b+1;o.push(w,_,S),o.push(_,E,S)}}this.setIndex(o),this.setAttribute("position",new ae(l,3)),this.setAttribute("normal",new ae(c,3)),this.setAttribute("uv",new ae(h,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.innerRadius,t.outerRadius,t.thetaSegments,t.phiSegments,t.thetaStart,t.thetaLength)}},kn=class n extends xe{constructor(t=new ci([new vt(0,.5),new vt(-.5,-.5),new vt(.5,-.5)]),e=12){super(),this.type="ShapeGeometry",this.parameters={shapes:t,curveSegments:e};let i=[],s=[],r=[],a=[],o=0,l=0;if(Array.isArray(t)===!1)c(t);else for(let h=0;h<t.length;h++)c(t[h]),this.addGroup(o,l,h),o+=l,l=0;this.setIndex(i),this.setAttribute("position",new ae(s,3)),this.setAttribute("normal",new ae(r,3)),this.setAttribute("uv",new ae(a,2));function c(h){let d=s.length/3,u=h.extractPoints(e),f=u.shape,g=u.holes;Ln.isClockWise(f)===!1&&(f=f.reverse());for(let m=0,p=g.length;m<p;m++){let b=g[m];Ln.isClockWise(b)===!0&&(g[m]=b.reverse())}let v=Ln.triangulateShape(f,g);for(let m=0,p=g.length;m<p;m++){let b=g[m];f=f.concat(b)}for(let m=0,p=f.length;m<p;m++){let b=f[m];s.push(b.x,b.y,0),r.push(0,0,1),a.push(b.x,b.y)}for(let m=0,p=v.length;m<p;m++){let b=v[m],w=b[0]+d,_=b[1]+d,E=b[2]+d;i.push(w,_,E),l+=3}}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON(),e=this.parameters.shapes;return Wp(e,t)}static fromJSON(t,e){let i=[];for(let s=0,r=t.shapes.length;s<r;s++){let a=e[t.shapes[s]];i.push(a)}return new n(i,t.curveSegments)}};Ct=class n extends xe{constructor(t=1,e=32,i=16,s=0,r=Math.PI*2,a=0,o=Math.PI){super(),this.type="SphereGeometry",this.parameters={radius:t,widthSegments:e,heightSegments:i,phiStart:s,phiLength:r,thetaStart:a,thetaLength:o},e=Math.max(3,Math.floor(e)),i=Math.max(2,Math.floor(i));let l=Math.min(a+o,Math.PI),c=0,h=[],d=new I,u=new I,f=[],g=[],v=[],m=[];for(let p=0;p<=i;p++){let b=[],w=p/i,_=a+w*o,E=t*Math.cos(_),S=Math.sqrt(t*t-E*E),A=0;p===0&&a===0?A=.5/e:p===i&&l===Math.PI&&(A=-.5/e);for(let x=0;x<=e;x++){let T=x/e,C=s+T*r;d.x=-S*Math.cos(C),d.y=E,d.z=S*Math.sin(C),g.push(d.x,d.y,d.z),u.copy(d).normalize(),v.push(u.x,u.y,u.z),m.push(T+A,1-w),b.push(c++)}h.push(b)}for(let p=0;p<i;p++)for(let b=0;b<e;b++){let w=h[p][b+1],_=h[p][b],E=h[p+1][b],S=h[p+1][b+1];(p!==0||a>0)&&f.push(w,_,S),(p!==i-1||l<Math.PI)&&f.push(_,E,S)}this.setIndex(f),this.setAttribute("position",new ae(g,3)),this.setAttribute("normal",new ae(v,3)),this.setAttribute("uv",new ae(m,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.widthSegments,t.heightSegments,t.phiStart,t.phiLength,t.thetaStart,t.thetaLength)}},ti=class n extends xe{constructor(t=1,e=.4,i=12,s=48,r=Math.PI*2,a=0,o=Math.PI*2){super(),this.type="TorusGeometry",this.parameters={radius:t,tube:e,radialSegments:i,tubularSegments:s,arc:r,thetaStart:a,thetaLength:o},i=Math.floor(i),s=Math.floor(s);let l=[],c=[],h=[],d=[],u=new I,f=new I,g=new I;for(let v=0;v<=i;v++){let m=a+v/i*o;for(let p=0;p<=s;p++){let b=p/s*r;f.x=(t+e*Math.cos(m))*Math.cos(b),f.y=(t+e*Math.cos(m))*Math.sin(b),f.z=e*Math.sin(m),c.push(f.x,f.y,f.z),u.x=t*Math.cos(b),u.y=t*Math.sin(b),g.subVectors(f,u).normalize(),h.push(g.x,g.y,g.z),d.push(p/s),d.push(v/i)}}for(let v=1;v<=i;v++)for(let m=1;m<=s;m++){let p=(s+1)*v+m-1,b=(s+1)*(v-1)+m-1,w=(s+1)*(v-1)+m,_=(s+1)*v+m;l.push(p,b,_),l.push(b,w,_)}this.setIndex(l),this.setAttribute("position",new ae(c,3)),this.setAttribute("normal",new ae(h,3)),this.setAttribute("uv",new ae(d,2))}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}static fromJSON(t){return new n(t.radius,t.tube,t.radialSegments,t.tubularSegments,t.arc,t.thetaStart,t.thetaLength)}},is=class n extends xe{constructor(t=new Ra(new I(-1,-1,0),new I(-1,1,0),new I(1,1,0)),e=64,i=1,s=8,r=!1){super(),this.type="TubeGeometry",this.parameters={path:t,tubularSegments:e,radius:i,radialSegments:s,closed:r};let a=t.computeFrenetFrames(e,r);this.tangents=a.tangents,this.normals=a.normals,this.binormals=a.binormals;let o=new I,l=new I,c=new vt,h=new I,d=[],u=[],f=[],g=[];v(),this.setIndex(g),this.setAttribute("position",new ae(d,3)),this.setAttribute("normal",new ae(u,3)),this.setAttribute("uv",new ae(f,2));function v(){for(let w=0;w<e;w++)m(w);m(r===!1?e:0),b(),p()}function m(w){h=t.getPointAt(w/e,h);let _=a.normals[w],E=a.binormals[w];for(let S=0;S<=s;S++){let A=S/s*Math.PI*2,x=Math.sin(A),T=-Math.cos(A);l.x=T*_.x+x*E.x,l.y=T*_.y+x*E.y,l.z=T*_.z+x*E.z,l.normalize(),u.push(l.x,l.y,l.z),o.x=h.x+i*l.x,o.y=h.y+i*l.y,o.z=h.z+i*l.z,d.push(o.x,o.y,o.z)}}function p(){for(let w=1;w<=e;w++)for(let _=1;_<=s;_++){let E=(s+1)*(w-1)+(_-1),S=(s+1)*w+(_-1),A=(s+1)*w+_,x=(s+1)*(w-1)+_;g.push(E,S,x),g.push(S,A,x)}}function b(){for(let w=0;w<=e;w++)for(let _=0;_<=s;_++)c.x=w/e,c.y=_/s,f.push(c.x,c.y)}}copy(t){return super.copy(t),this.parameters=Object.assign({},t.parameters),this}toJSON(){let t=super.toJSON();return t.path=this.parameters.path.toJSON(),t}static fromJSON(t){return new n(new cl[t.path.type]().fromJSON(t.path),t.tubularSegments,t.radius,t.radialSegments,t.closed)}};Sd={clone:Xs,merge:Ui},qp=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,Yp=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`,ai=class extends $i{constructor(t){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=qp,this.fragmentShader=Yp,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,t!==void 0&&this.setValues(t)}copy(t){return super.copy(t),this.fragmentShader=t.fragmentShader,this.vertexShader=t.vertexShader,this.uniforms=Xs(t.uniforms),this.uniformsGroups=Xp(t.uniformsGroups),this.defines=Object.assign({},t.defines),this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.fog=t.fog,this.lights=t.lights,this.clipping=t.clipping,this.extensions=Object.assign({},t.extensions),this.glslVersion=t.glslVersion,this.defaultAttributeValues=Object.assign({},t.defaultAttributeValues),this.index0AttributeName=t.index0AttributeName,this.uniformsNeedUpdate=t.uniformsNeedUpdate,this}toJSON(t){let e=super.toJSON(t);e.glslVersion=this.glslVersion,e.uniforms={};for(let s in this.uniforms){let a=this.uniforms[s].value;a&&a.isTexture?e.uniforms[s]={type:"t",value:a.toJSON(t).uuid}:a&&a.isColor?e.uniforms[s]={type:"c",value:a.getHex()}:a&&a.isVector2?e.uniforms[s]={type:"v2",value:a.toArray()}:a&&a.isVector3?e.uniforms[s]={type:"v3",value:a.toArray()}:a&&a.isVector4?e.uniforms[s]={type:"v4",value:a.toArray()}:a&&a.isMatrix3?e.uniforms[s]={type:"m3",value:a.toArray()}:a&&a.isMatrix4?e.uniforms[s]={type:"m4",value:a.toArray()}:e.uniforms[s]={value:a}}Object.keys(this.defines).length>0&&(e.defines=this.defines),e.vertexShader=this.vertexShader,e.fragmentShader=this.fragmentShader,e.lights=this.lights,e.clipping=this.clipping;let i={};for(let s in this.extensions)this.extensions[s]===!0&&(i[s]=!0);return Object.keys(i).length>0&&(e.extensions=i),e}fromJSON(t,e){if(super.fromJSON(t,e),t.uniforms!==void 0)for(let i in t.uniforms){let s=t.uniforms[i];switch(this.uniforms[i]={},s.type){case"t":this.uniforms[i].value=e[s.value]||null;break;case"c":this.uniforms[i].value=new gt().setHex(s.value);break;case"v2":this.uniforms[i].value=new vt().fromArray(s.value);break;case"v3":this.uniforms[i].value=new I().fromArray(s.value);break;case"v4":this.uniforms[i].value=new Qe().fromArray(s.value);break;case"m3":this.uniforms[i].value=new pe().fromArray(s.value);break;case"m4":this.uniforms[i].value=new Ie().fromArray(s.value);break;default:this.uniforms[i].value=s.value}}if(t.defines!==void 0&&(this.defines=t.defines),t.vertexShader!==void 0&&(this.vertexShader=t.vertexShader),t.fragmentShader!==void 0&&(this.fragmentShader=t.fragmentShader),t.glslVersion!==void 0&&(this.glslVersion=t.glslVersion),t.extensions!==void 0)for(let i in t.extensions)this.extensions[i]=t.extensions[i];return t.lights!==void 0&&(this.lights=t.lights),t.clipping!==void 0&&(this.clipping=t.clipping),this}},ul=class extends ai{constructor(t){super(t),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}},Be=class extends $i{constructor(t){super(),this.isMeshStandardMaterial=!0,this.type="MeshStandardMaterial",this.defines={STANDARD:""},this.color=new gt(16777215),this.roughness=1,this.metalness=0,this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.roughnessMap=null,this.metalnessMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.envMapIntensity=1,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.defines={STANDARD:""},this.color.copy(t.color),this.roughness=t.roughness,this.metalness=t.metalness,this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.roughnessMap=t.roughnessMap,this.metalnessMap=t.metalnessMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.envMapIntensity=t.envMapIntensity,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},zs=class extends $i{constructor(t){super(),this.isMeshToonMaterial=!0,this.defines={TOON:""},this.type="MeshToonMaterial",this.color=new gt(16777215),this.map=null,this.gradientMap=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.alphaMap=null,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.gradientMap=t.gradientMap,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.alphaMap=t.alphaMap,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.fog=t.fog,this}},Da=class extends $i{constructor(t){super(),this.isMeshLambertMaterial=!0,this.type="MeshLambertMaterial",this.color=new gt(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.emissive=new gt(0),this.emissiveIntensity=1,this.emissiveMap=null,this.bumpMap=null,this.bumpScale=1,this.normalMap=null,this.normalMapType=Hr,this.normalScale=new vt(1,1),this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new Un,this.combine=Tl,this.reflectivity=1,this.envMapIntensity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.flatShading=!1,this.fog=!0,this.setValues(t)}copy(t){return super.copy(t),this.color.copy(t.color),this.map=t.map,this.lightMap=t.lightMap,this.lightMapIntensity=t.lightMapIntensity,this.aoMap=t.aoMap,this.aoMapIntensity=t.aoMapIntensity,this.emissive.copy(t.emissive),this.emissiveMap=t.emissiveMap,this.emissiveIntensity=t.emissiveIntensity,this.bumpMap=t.bumpMap,this.bumpScale=t.bumpScale,this.normalMap=t.normalMap,this.normalMapType=t.normalMapType,this.normalScale.copy(t.normalScale),this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.specularMap=t.specularMap,this.alphaMap=t.alphaMap,this.envMap=t.envMap,this.envMapRotation.copy(t.envMapRotation),this.combine=t.combine,this.reflectivity=t.reflectivity,this.envMapIntensity=t.envMapIntensity,this.refractionRatio=t.refractionRatio,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this.wireframeLinecap=t.wireframeLinecap,this.wireframeLinejoin=t.wireframeLinejoin,this.flatShading=t.flatShading,this.fog=t.fog,this}},dl=class extends $i{constructor(t){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=sd,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(t)}copy(t){return super.copy(t),this.depthPacking=t.depthPacking,this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this.wireframe=t.wireframe,this.wireframeLinewidth=t.wireframeLinewidth,this}},fl=class extends $i{constructor(t){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(t)}copy(t){return super.copy(t),this.map=t.map,this.alphaMap=t.alphaMap,this.displacementMap=t.displacementMap,this.displacementScale=t.displacementScale,this.displacementBias=t.displacementBias,this}};ys=class{constructor(t,e,i,s){this.parameterPositions=t,this._cachedIndex=0,this.resultBuffer=s!==void 0?s:new e.constructor(i),this.sampleValues=e,this.valueSize=i,this.settings=null,this.DefaultSettings_={}}evaluate(t){let e=this.parameterPositions,i=this._cachedIndex,s=e[i],r=e[i-1];i:{t:{let a;e:{n:if(!(t<s)){for(let o=i+2;;){if(s===void 0){if(t<r)break n;return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}if(i===o)break;if(r=s,s=e[++i],t<s)break t}a=e.length;break e}if(!(t>=r)){let o=e[1];t<o&&(i=2,r=o);for(let l=i-2;;){if(r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(i===l)break;if(s=r,r=e[--i-1],t>=r)break t}a=i,i=0;break e}break i}for(;i<a;){let o=i+a>>>1;t<e[o]?a=o:i=o+1}if(s=e[i],r=e[i-1],r===void 0)return this._cachedIndex=0,this.copySampleValue_(0);if(s===void 0)return i=e.length,this._cachedIndex=i,this.copySampleValue_(i-1)}this._cachedIndex=i,this.intervalChanged_(i,r,s)}return this.interpolate_(i,r,t,s)}getSettings_(){return this.settings||this.DefaultSettings_}copySampleValue_(t){let e=this.resultBuffer,i=this.sampleValues,s=this.valueSize,r=t*s;for(let a=0;a!==s;++a)e[a]=i[r+a];return e}interpolate_(){throw new Error("THREE.Interpolant: Call to abstract method.")}intervalChanged_(){}},pl=class extends ys{constructor(t,e,i,s){super(t,e,i,s),this._weightPrev=-0,this._offsetPrev=-0,this._weightNext=-0,this._offsetNext=-0,this.DefaultSettings_={endingStart:Sh,endingEnd:Sh}}intervalChanged_(t,e,i){let s=this.parameterPositions,r=t-2,a=t+1,o=s[r],l=s[a];if(o===void 0)switch(this.getSettings_().endingStart){case Eh:r=t,o=2*e-i;break;case wh:r=s.length-2,o=e+s[r]-s[r+1];break;default:r=t,o=i}if(l===void 0)switch(this.getSettings_().endingEnd){case Eh:a=t,l=2*i-e;break;case wh:a=1,l=i+s[1]-s[0];break;default:a=t-1,l=e}let c=(i-e)*.5,h=this.valueSize;this._weightPrev=c/(e-o),this._weightNext=c/(l-i),this._offsetPrev=r*h,this._offsetNext=a*h}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this._offsetPrev,d=this._offsetNext,u=this._weightPrev,f=this._weightNext,g=(i-e)/(s-e),v=g*g,m=v*g,p=-u*m+2*u*v-u*g,b=(1+u)*m+(-1.5-2*u)*v+(-.5+u)*g+1,w=(-1-f)*m+(1.5+f)*v+.5*g,_=f*m-f*v;for(let E=0;E!==o;++E)r[E]=p*a[h+E]+b*a[c+E]+w*a[l+E]+_*a[d+E];return r}},ml=class extends ys{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=(i-e)/(s-e),d=1-h;for(let u=0;u!==o;++u)r[u]=a[c+u]*d+a[l+u]*h;return r}},gl=class extends ys{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t){return this.copySampleValue_(t-1)}},xl=class extends ys{interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=t*o,c=l-o,h=this.inTangents,d=this.outTangents;if(!h||!d){let g=(i-e)/(s-e),v=1-g;for(let m=0;m!==o;++m)r[m]=a[c+m]*v+a[l+m]*g;return r}let u=o*2,f=t-1;for(let g=0;g!==o;++g){let v=a[c+g],m=a[l+g],p=f*u+g*2,b=d[p],w=d[p+1],_=t*u+g*2,E=h[_],S=h[_+1],A=Jp(i,e,b,E,s);r[g]=Ed(A,v,w,S,m)}return r}};Ki=class{constructor(t,e,i,s){if(t===void 0)throw new Error("THREE.KeyframeTrack: track name is undefined");if(e===void 0||e.length===0)throw new Error("THREE.KeyframeTrack: no keyframes in track named "+t);this.name=t,this.times=mr(e,this.TimeBufferType),this.values=mr(i,this.ValueBufferType),this.setInterpolation(s||this.DefaultInterpolation)}static toJSON(t){let e=t.constructor,i;if(e.toJSON!==this.toJSON)i=e.toJSON(t);else{i={name:t.name,times:mr(t.times,Array),values:mr(t.values,Array)};let s=t.getInterpolation();s!==t.DefaultInterpolation&&(i.interpolation=s),_h(t.settings)&&(i.settings={inTangents:mr(t.settings.inTangents,Array),outTangents:mr(t.settings.outTangents,Array)})}return i.type=t.ValueTypeName,i}InterpolantFactoryMethodDiscrete(t){return new gl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodLinear(t){return new ml(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodSmooth(t){return new pl(this.times,this.values,this.getValueSize(),t)}InterpolantFactoryMethodBezier(t){let e=new xl(this.times,this.values,this.getValueSize(),t);return this.settings&&(e.inTangents=this.settings.inTangents,e.outTangents=this.settings.outTangents),e}setInterpolation(t){let e;switch(t){case ha:e=this.InterpolantFactoryMethodDiscrete;break;case jo:e=this.InterpolantFactoryMethodLinear;break;case zo:e=this.InterpolantFactoryMethodSmooth;break;case Mh:e=this.InterpolantFactoryMethodBezier;break}if(e===void 0){let i="unsupported interpolation for "+this.ValueTypeName+" keyframe track named "+this.name;if(this.createInterpolant===void 0)if(t!==this.DefaultInterpolation)this.setInterpolation(this.DefaultInterpolation);else throw new Error(i);return oe("KeyframeTrack:",i),this}return this.createInterpolant=e,this}getInterpolation(){switch(this.createInterpolant){case this.InterpolantFactoryMethodDiscrete:return ha;case this.InterpolantFactoryMethodLinear:return jo;case this.InterpolantFactoryMethodSmooth:return zo;case this.InterpolantFactoryMethodBezier:return Mh}}getValueSize(){return this.values.length/this.times.length}shift(t){if(t!==0){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]+=t}return this}scale(t){if(t!==1){let e=this.times;for(let i=0,s=e.length;i!==s;++i)e[i]*=t;_h(this.settings)&&(Cu(this.settings.inTangents,t),Cu(this.settings.outTangents,t))}return this}trim(t,e){let i=this.times,s=i.length,r=0,a=s-1;for(;r!==s&&i[r]<t;)++r;for(;a!==-1&&i[a]>e;)--a;if(++a,r!==0||a!==s){r>=a&&(a=Math.max(a,1),r=a-1);let o=this.getValueSize();this.times=i.slice(r,a),this.values=this.values.slice(r*o,a*o)}return this}validate(){let t=!0,e=this.getValueSize();e-Math.floor(e)!==0&&(ue("KeyframeTrack: Invalid value size in track.",this),t=!1);let i=this.times,s=this.values,r=i.length;r===0&&(ue("KeyframeTrack: Track is empty.",this),t=!1);let a=null;for(let o=0;o!==r;o++){let l=i[o];if(typeof l=="number"&&isNaN(l)){ue("KeyframeTrack: Time is not a valid number.",this,o,l),t=!1;break}if(a!==null&&a>l){ue("KeyframeTrack: Out of order keys.",this,o,l,a),t=!1;break}a=l}if(s!==void 0&&jf(s))for(let o=0,l=s.length;o!==l;++o){let c=s[o];if(isNaN(c)){ue("KeyframeTrack: Value is not a valid number.",this,o,c),t=!1;break}}return t}optimize(){let t=this.times.slice(),e=this.values.slice(),i=this.getValueSize(),s=this.getInterpolation()===zo,r=t.length-1,a=1;for(let o=1;o<r;++o){let l=!1,c=t[o],h=t[o+1];if(c!==h&&(o!==1||c!==t[0]))if(s)l=!0;else{let d=o*i,u=d-i,f=d+i;for(let g=0;g!==i;++g){let v=e[d+g];if(v!==e[u+g]||v!==e[f+g]){l=!0;break}}}if(l){if(o!==a){t[a]=t[o];let d=o*i,u=a*i;for(let f=0;f!==i;++f)e[u+f]=e[d+f]}++a}}if(r>0){t[a]=t[r];for(let o=r*i,l=a*i,c=0;c!==i;++c)e[l+c]=e[o+c];++a}return a!==t.length?(this.times=t.slice(0,a),this.values=e.slice(0,a*i)):(this.times=t,this.values=e),this}clone(){let t=this.times.slice(),e=this.values.slice(),i=this.constructor,s=new i(this.name,t,e);return s.createInterpolant=this.createInterpolant,_h(this.settings)&&(s.settings={inTangents:this.settings.inTangents.slice(),outTangents:this.settings.outTangents.slice()}),s}};Ki.prototype.ValueTypeName="";Ki.prototype.TimeBufferType=Float32Array;Ki.prototype.ValueBufferType=Float32Array;Ki.prototype.DefaultInterpolation=jo;vs=class extends Ki{constructor(t,e,i){super(t,e,i)}};vs.prototype.ValueTypeName="bool";vs.prototype.ValueBufferType=Array;vs.prototype.DefaultInterpolation=ha;vs.prototype.InterpolantFactoryMethodLinear=void 0;vs.prototype.InterpolantFactoryMethodSmooth=void 0;yl=class extends Ki{constructor(t,e,i,s){super(t,e,i,s)}};yl.prototype.ValueTypeName="color";vl=class extends Ki{constructor(t,e,i,s){super(t,e,i,s)}};vl.prototype.ValueTypeName="number";_l=class extends ys{constructor(t,e,i,s){super(t,e,i,s)}interpolate_(t,e,i,s){let r=this.resultBuffer,a=this.sampleValues,o=this.valueSize,l=(i-e)/(s-e),c=t*o;for(let h=c+o;c!==h;c+=4)Dn.slerpFlat(r,0,a,c-o,a,c,l);return r}},Ua=class extends Ki{constructor(t,e,i,s){super(t,e,i,s)}InterpolantFactoryMethodLinear(t){return new _l(this.times,this.values,this.getValueSize(),t)}};Ua.prototype.ValueTypeName="quaternion";Ua.prototype.InterpolantFactoryMethodSmooth=void 0;_s=class extends Ki{constructor(t,e,i){super(t,e,i)}};_s.prototype.ValueTypeName="string";_s.prototype.ValueBufferType=Array;_s.prototype.DefaultInterpolation=ha;_s.prototype.InterpolantFactoryMethodLinear=void 0;_s.prototype.InterpolantFactoryMethodSmooth=void 0;bl=class extends Ki{constructor(t,e,i,s){super(t,e,i,s)}};bl.prototype.ValueTypeName="vector";Ml=class{constructor(t,e,i){let s=this,r=!1,a=0,o=0,l,c=[];this.onStart=void 0,this.onLoad=t,this.onProgress=e,this.onError=i,this._abortController=null,this.itemStart=function(h){o++,r===!1&&s.onStart!==void 0&&s.onStart(h,a,o),r=!0},this.itemEnd=function(h){a++,s.onProgress!==void 0&&s.onProgress(h,a,o),a===o&&(r=!1,s.onLoad!==void 0&&s.onLoad())},this.itemError=function(h){s.onError!==void 0&&s.onError(h)},this.resolveURL=function(h){return h=h.normalize("NFC"),l?l(h):h},this.setURLModifier=function(h){return l=h,this},this.addHandler=function(h,d){return c.push(h,d),this},this.removeHandler=function(h){let d=c.indexOf(h);return d!==-1&&c.splice(d,2),this},this.getHandler=function(h){for(let d=0,u=c.length;d<u;d+=2){let f=c[d],g=c[d+1];if(f.global&&(f.lastIndex=0),f.test(h))return g}return null},this.abort=function(){return this.abortController.abort(),this._abortController=null,this}}get abortController(){return this._abortController||(this._abortController=new AbortController),this._abortController}},wd=new Ml,Sl=class{constructor(t){this.manager=t!==void 0?t:wd,this.crossOrigin="anonymous",this.withCredentials=!1,this.path="",this.resourcePath="",this.requestHeader={},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}load(){}loadAsync(t,e){let i=this;return new Promise(function(s,r){i.load(t,s,e,r)})}parse(){}setCrossOrigin(t){return this.crossOrigin=t,this}setWithCredentials(t){return this.withCredentials=t,this}setPath(t){return this.path=t,this}setResourcePath(t){return this.resourcePath=t,this}setRequestHeader(t){return this.requestHeader=t,this}abort(){return this}};Sl.DEFAULT_MATERIAL_NAME="__DEFAULT";Ur=class extends se{constructor(t,e=1){super(),this.isLight=!0,this.type="Light",this.color=new gt(t),this.intensity=e}copy(t,e){return super.copy(t,e),this.color.copy(t.color),this.intensity=t.intensity,this}toJSON(t){let e=super.toJSON(t);return e.object.color=this.color.getHex(),e.object.intensity=this.intensity,e}},Gs=class extends Ur{constructor(t,e,i){super(t,i),this.isHemisphereLight=!0,this.type="HemisphereLight",this.position.copy(se.DEFAULT_UP),this.updateMatrix(),this.groundColor=new gt(e)}copy(t,e){return super.copy(t,e),this.groundColor.copy(t.groundColor),this}toJSON(t){let e=super.toJSON(t);return e.object.groundColor=this.groundColor.getHex(),e}},bh=new Ie,Lu=new I,Pu=new I,Na=class{constructor(t){this.camera=t,this.intensity=1,this.bias=0,this.biasNode=null,this.normalBias=0,this.radius=1,this.blurSamples=8,this.mapSize=new vt(512,512),this.mapType=Wi,this.map=null,this.mapPass=null,this.matrix=new Ie,this.autoUpdate=!0,this.needsUpdate=!1,this._frustum=new Ar,this._frameExtents=new vt(1,1),this._viewportCount=1,this._viewports=[new Qe(0,0,1,1)]}getViewportCount(){return this._viewportCount}getCamera(){return this.camera}getFrustum(){return this._frustum}updateMatrices(t){let e=this.camera;Lu.setFromMatrixPosition(t.matrixWorld),e.position.copy(Lu),Pu.setFromMatrixPosition(t.target.matrixWorld),e.lookAt(Pu),e.updateMatrixWorld(),this._updateMatrix(e,this.matrix,this._frustum)}_updateMatrix(t,e,i,s){bh.multiplyMatrices(t.projectionMatrix,t.matrixWorldInverse),i.setFromProjectionMatrix(bh,t.coordinateSystem,t.reversedDepth);let r=this._frameExtents,a=s?s.z/r.x:1,o=s?s.w/r.y:1,l=s?s.x/r.x:0,c=s?s.y/r.y:0;t.coordinateSystem===br||t.reversedDepth?e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,1,0,0,0,0,1):e.set(.5*a,0,0,.5*a+l,0,.5*o,0,.5*o+c,0,0,.5,.5,0,0,0,1),e.multiply(bh)}getViewport(t){return this._viewports[t]}getFrameExtents(){return this._frameExtents}dispose(){this.map&&this.map.dispose(),this.mapPass&&this.mapPass.dispose()}copy(t){return this.camera=t.camera.clone(),this.intensity=t.intensity,this.bias=t.bias,this.radius=t.radius,this.autoUpdate=t.autoUpdate,this.needsUpdate=t.needsUpdate,this.normalBias=t.normalBias,this.blurSamples=t.blurSamples,this.mapSize.copy(t.mapSize),this.biasNode=t.biasNode,this}clone(){return new this.constructor().copy(this)}toJSON(){let t={};return t.intensity=this.intensity,t.bias=this.bias,t.normalBias=this.normalBias,t.radius=this.radius,t.blurSamples=this.blurSamples,t.mapSize=this.mapSize.toArray(),t.camera=this.camera.toJSON(!1).object,delete t.camera.matrix,t}},Oo=new I,Ho=new Dn,Rn=new I,Fa=class extends se{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Ie,this.projectionMatrix=new Ie,this.projectionMatrixInverse=new Ie,this.coordinateSystem=xn,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(t,e){return super.copy(t,e),this.matrixWorldInverse.copy(t.matrixWorldInverse),this.projectionMatrix.copy(t.projectionMatrix),this.projectionMatrixInverse.copy(t.projectionMatrixInverse),this.coordinateSystem=t.coordinateSystem,this}getWorldDirection(t){return super.getWorldDirection(t).negate()}updateMatrixWorld(t){super.updateMatrixWorld(t),this.matrixWorld.decompose(Oo,Ho,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,Ho,Rn.set(1,1,1)).invert()}updateWorldMatrix(t,e,i=!1){super.updateWorldMatrix(t,e,i),this.matrixWorld.decompose(Oo,Ho,Rn),Rn.x===1&&Rn.y===1&&Rn.z===1?this.matrixWorldInverse.copy(this.matrixWorld).invert():this.matrixWorldInverse.compose(Oo,Ho,Rn.set(1,1,1)).invert()}clone(){return new this.constructor().copy(this)}},ms=new I,Iu=new vt,Du=new vt,xi=class extends Fa{constructor(t=50,e=1,i=.1,s=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=t,this.zoom=1,this.near=i,this.far=s,this.focus=10,this.aspect=e,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.fov=t.fov,this.zoom=t.zoom,this.near=t.near,this.far=t.far,this.focus=t.focus,this.aspect=t.aspect,this.view=t.view===null?null:Object.assign({},t.view),this.filmGauge=t.filmGauge,this.filmOffset=t.filmOffset,this}setFocalLength(t){let e=.5*this.getFilmHeight()/t;this.fov=Ko*2*Math.atan(e),this.updateProjectionMatrix()}getFocalLength(){let t=Math.tan(Zc*.5*this.fov);return .5*this.getFilmHeight()/t}getEffectiveFOV(){return Ko*2*Math.atan(Math.tan(Zc*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(t,e,i){ms.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),e.set(ms.x,ms.y).multiplyScalar(-t/ms.z),ms.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(ms.x,ms.y).multiplyScalar(-t/ms.z)}getViewSize(t,e){return this.getViewBounds(t,Iu,Du),e.subVectors(Du,Iu)}setViewOffset(t,e,i,s,r,a){this.aspect=t/e,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=this.near,e=t*Math.tan(Zc*.5*this.fov)/this.zoom,i=2*e,s=this.aspect*i,r=-.5*s,a=this.view;if(this.view!==null&&this.view.enabled){let l=a.fullWidth,c=a.fullHeight;r+=a.offsetX*s/l,e-=a.offsetY*i/c,s*=a.width/l,i*=a.height/c}let o=this.filmOffset;o!==0&&(r+=t*o/this.getFilmWidth()),this.projectionMatrix.makePerspective(r,r+s,e,e-i,t,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.fov=this.fov,e.object.zoom=this.zoom,e.object.near=this.near,e.object.far=this.far,e.object.focus=this.focus,e.object.aspect=this.aspect,this.view!==null&&(e.object.view=Object.assign({},this.view)),e.object.filmGauge=this.filmGauge,e.object.filmOffset=this.filmOffset,e}},Lh=class extends Na{constructor(){super(new xi(90,1,.5,500)),this.isPointLightShadow=!0}},Ba=class extends Ur{constructor(t,e,i=0,s=2){super(t,e),this.isPointLight=!0,this.type="PointLight",this.distance=i,this.decay=s,this.shadow=new Lh}get power(){return this.intensity*4*Math.PI}set power(t){this.intensity=t/(4*Math.PI)}dispose(){super.dispose(),this.shadow.dispose()}copy(t,e){return super.copy(t,e),this.distance=t.distance,this.decay=t.decay,this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.distance=this.distance,e.object.decay=this.decay,e.object.shadow=this.shadow.toJSON(),e}},Nr=class extends Fa{constructor(t=-1,e=1,i=1,s=-1,r=.1,a=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=t,this.right=e,this.top=i,this.bottom=s,this.near=r,this.far=a,this.updateProjectionMatrix()}copy(t,e){return super.copy(t,e),this.left=t.left,this.right=t.right,this.top=t.top,this.bottom=t.bottom,this.near=t.near,this.far=t.far,this.zoom=t.zoom,this.view=t.view===null?null:Object.assign({},t.view),this}setViewOffset(t,e,i,s,r,a){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=t,this.view.fullHeight=e,this.view.offsetX=i,this.view.offsetY=s,this.view.width=r,this.view.height=a,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){let t=(this.right-this.left)/(2*this.zoom),e=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,s=(this.top+this.bottom)/2,r=i-t,a=i+t,o=s+e,l=s-e;if(this.view!==null&&this.view.enabled){let c=(this.right-this.left)/this.view.fullWidth/this.zoom,h=(this.top-this.bottom)/this.view.fullHeight/this.zoom;r+=c*this.view.offsetX,a=r+c*this.view.width,o-=h*this.view.offsetY,l=o-h*this.view.height}this.projectionMatrix.makeOrthographic(r,a,o,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(t){let e=super.toJSON(t);return e.object.zoom=this.zoom,e.object.left=this.left,e.object.right=this.right,e.object.top=this.top,e.object.bottom=this.bottom,e.object.near=this.near,e.object.far=this.far,this.view!==null&&(e.object.view=Object.assign({},this.view)),e}},Ph=class extends Na{constructor(){super(new Nr(-5,5,5,-5,.5,500)),this.isDirectionalLightShadow=!0}},ns=class extends Ur{constructor(t,e){super(t,e),this.isDirectionalLight=!0,this.type="DirectionalLight",this.position.copy(se.DEFAULT_UP),this.updateMatrix(),this.target=new se,this.shadow=new Ph}dispose(){super.dispose(),this.shadow.dispose()}copy(t){return super.copy(t),this.target=t.target.clone(),this.shadow=t.shadow.clone(),this}toJSON(t){let e=super.toJSON(t);return e.object.shadow=this.shadow.toJSON(),e.object.target=this.target.uuid,e}},gr=-90,xr=1,El=class extends se{constructor(t,e,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;let s=new xi(gr,xr,t,e);s.layers=this.layers,this.add(s);let r=new xi(gr,xr,t,e);r.layers=this.layers,this.add(r);let a=new xi(gr,xr,t,e);a.layers=this.layers,this.add(a);let o=new xi(gr,xr,t,e);o.layers=this.layers,this.add(o);let l=new xi(gr,xr,t,e);l.layers=this.layers,this.add(l);let c=new xi(gr,xr,t,e);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){let t=this.coordinateSystem,e=this.children.concat(),[i,s,r,a,o,l]=e;for(let c of e)this.remove(c);if(t===xn)i.up.set(0,1,0),i.lookAt(1,0,0),s.up.set(0,1,0),s.lookAt(-1,0,0),r.up.set(0,0,-1),r.lookAt(0,1,0),a.up.set(0,0,1),a.lookAt(0,-1,0),o.up.set(0,1,0),o.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(t===br)i.up.set(0,-1,0),i.lookAt(-1,0,0),s.up.set(0,-1,0),s.lookAt(1,0,0),r.up.set(0,0,1),r.lookAt(0,1,0),a.up.set(0,0,-1),a.lookAt(0,-1,0),o.up.set(0,-1,0),o.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+t);for(let c of e)this.add(c),c.updateMatrixWorld()}update(t,e){this.parent===null&&this.updateMatrixWorld();let{renderTarget:i,activeMipmapLevel:s}=this;this.coordinateSystem!==t.coordinateSystem&&(this.coordinateSystem=t.coordinateSystem,this.updateCoordinateSystem());let[r,a,o,l,c,h]=this.children,d=t.getRenderTarget(),u=t.getActiveCubeFace(),f=t.getActiveMipmapLevel(),g=t.xr.enabled;t.xr.enabled=!1;let v=i.texture.generateMipmaps;i.texture.generateMipmaps=!1;let m=!1;t.isWebGLRenderer===!0?m=t.state.buffers.depth.getReversed():m=t.reversedDepthBuffer,t.setRenderTarget(i,0,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,r),t.setRenderTarget(i,1,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,a),t.setRenderTarget(i,2,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,o),t.setRenderTarget(i,3,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,l),t.setRenderTarget(i,4,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,c),i.texture.generateMipmaps=v,t.setRenderTarget(i,5,s),m&&t.autoClear===!1&&t.clearDepth(),t.render(e,h),t.setRenderTarget(d,u,f),t.xr.enabled=g,i.texture.needsPMREMUpdate=!0}},wl=class extends xi{constructor(t=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=t}},i0="\\[\\]\\.:\\/",$p=new RegExp("["+i0+"]","g"),n0="[^"+i0+"]",jp="[^"+i0.replace("\\.","")+"]",Kp=/((?:WC+[\/:])*)/.source.replace("WC",n0),Qp=/(WCOD+)?/.source.replace("WCOD",jp),tm=/(?:\.(WC+)(?:\[(.+)\])?)?/.source.replace("WC",n0),em=/\.(WC+)(?:\[(.+)\])?/.source.replace("WC",n0),im=new RegExp("^"+Kp+Qp+tm+em+"$"),nm=["material","materials","bones","map"],Ih=class{constructor(t,e,i){let s=i||ri.parseTrackName(e);this._targetGroup=t,this._bindings=t.subscribe_(e,s)}getValue(t,e){this.bind();let i=this._targetGroup.nCachedObjects_,s=this._bindings[i];s!==void 0&&s.getValue(t,e)}setValue(t,e){let i=this._bindings;for(let s=this._targetGroup.nCachedObjects_,r=i.length;s!==r;++s)i[s].setValue(t,e)}bind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].bind()}unbind(){let t=this._bindings;for(let e=this._targetGroup.nCachedObjects_,i=t.length;e!==i;++e)t[e].unbind()}},ri=class n{constructor(t,e,i){this.path=e,this.parsedPath=i||n.parseTrackName(e),this.node=n.findNode(t,this.parsedPath.nodeName),this.rootNode=t,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}static create(t,e,i){return t&&t.isAnimationObjectGroup?new n.Composite(t,e,i):new n(t,e,i)}static sanitizeNodeName(t){return t.replace(/\s/g,"_").replace($p,"")}static parseTrackName(t){let e=im.exec(t);if(e===null)throw new Error("THREE.PropertyBinding: Cannot parse trackName: "+t);let i={nodeName:e[2],objectName:e[3],objectIndex:e[4],propertyName:e[5],propertyIndex:e[6]},s=i.nodeName&&i.nodeName.lastIndexOf(".");if(s!==void 0&&s!==-1){let r=i.nodeName.substring(s+1);nm.indexOf(r)!==-1&&(i.nodeName=i.nodeName.substring(0,s),i.objectName=r)}if(i.propertyName===null||i.propertyName.length===0)throw new Error("THREE.PropertyBinding: can not parse propertyName from trackName: "+t);return i}static findNode(t,e){if(e===void 0||e===""||e==="."||e===-1||e===t.name||e===t.uuid)return t;if(t.skeleton){let i=t.skeleton.getBoneByName(e);if(i!==void 0)return i}if(t.children){let i=function(r){for(let a=0;a<r.length;a++){let o=r[a];if(o.name===e||o.uuid===e)return o;let l=i(o.children);if(l)return l}return null},s=i(t.children);if(s)return s}return null}_getValue_unavailable(){}_setValue_unavailable(){}_getValue_direct(t,e){t[e]=this.targetObject[this.propertyName]}_getValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)t[e++]=i[s]}_getValue_arrayElement(t,e){t[e]=this.resolvedProperty[this.propertyIndex]}_getValue_toArray(t,e){this.resolvedProperty.toArray(t,e)}_setValue_direct(t,e){this.targetObject[this.propertyName]=t[e]}_setValue_direct_setNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.needsUpdate=!0}_setValue_direct_setMatrixWorldNeedsUpdate(t,e){this.targetObject[this.propertyName]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_array(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++]}_setValue_array_setNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.needsUpdate=!0}_setValue_array_setMatrixWorldNeedsUpdate(t,e){let i=this.resolvedProperty;for(let s=0,r=i.length;s!==r;++s)i[s]=t[e++];this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_arrayElement(t,e){this.resolvedProperty[this.propertyIndex]=t[e]}_setValue_arrayElement_setNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.needsUpdate=!0}_setValue_arrayElement_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty[this.propertyIndex]=t[e],this.targetObject.matrixWorldNeedsUpdate=!0}_setValue_fromArray(t,e){this.resolvedProperty.fromArray(t,e)}_setValue_fromArray_setNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.needsUpdate=!0}_setValue_fromArray_setMatrixWorldNeedsUpdate(t,e){this.resolvedProperty.fromArray(t,e),this.targetObject.matrixWorldNeedsUpdate=!0}_getValue_unbound(t,e){this.bind(),this.getValue(t,e)}_setValue_unbound(t,e){this.bind(),this.setValue(t,e)}bind(){let t=this.node,e=this.parsedPath,i=e.objectName,s=e.propertyName,r=e.propertyIndex;if(t||(t=n.findNode(this.rootNode,e.nodeName),this.node=t),this.getValue=this._getValue_unavailable,this.setValue=this._setValue_unavailable,!t){oe("PropertyBinding: No target node found for track: "+this.path+".");return}if(i){let c=e.objectIndex;switch(i){case"materials":if(!t.material){ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.materials){ue("PropertyBinding: Can not bind to material.materials as node.material does not have a materials array.",this);return}t=t.material.materials;break;case"bones":if(!t.skeleton){ue("PropertyBinding: Can not bind to bones as node does not have a skeleton.",this);return}t=t.skeleton.bones;for(let h=0;h<t.length;h++)if(t[h].name===c){c=h;break}break;case"map":if("map"in t){t=t.map;break}if(!t.material){ue("PropertyBinding: Can not bind to material as node does not have a material.",this);return}if(!t.material.map){ue("PropertyBinding: Can not bind to material.map as node.material does not have a map.",this);return}t=t.material.map;break;default:if(t[i]===void 0){ue("PropertyBinding: Can not bind to objectName of node undefined.",this);return}t=t[i]}if(c!==void 0){if(t[c]===void 0){ue("PropertyBinding: Trying to bind to objectIndex of objectName, but is undefined.",this,t);return}t=t[c]}}let a=t[s];if(a===void 0){let c=e.nodeName;ue("PropertyBinding: Trying to update property for track: "+c+"."+s+" but it wasn't found.",t);return}let o=this.Versioning.None;this.targetObject=t,t.isMaterial===!0?o=this.Versioning.NeedsUpdate:t.isObject3D===!0&&(o=this.Versioning.MatrixWorldNeedsUpdate);let l=this.BindingType.Direct;if(r!==void 0){if(s==="morphTargetInfluences"){if(!t.geometry){ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.",this);return}if(!t.geometry.morphAttributes){ue("PropertyBinding: Can not bind to morphTargetInfluences because node does not have a geometry.morphAttributes.",this);return}t.morphTargetDictionary[r]!==void 0&&(r=t.morphTargetDictionary[r])}l=this.BindingType.ArrayElement,this.resolvedProperty=a,this.propertyIndex=r}else a.fromArray!==void 0&&a.toArray!==void 0?(l=this.BindingType.HasFromToArray,this.resolvedProperty=a):Array.isArray(a)?(l=this.BindingType.EntireArray,this.resolvedProperty=a):this.propertyName=s;this.getValue=this.GetterByBindingType[l],this.setValue=this.SetterByBindingTypeAndVersioning[l][o]}unbind(){this.node=null,this.getValue=this._getValue_unbound,this.setValue=this._setValue_unbound}};ri.Composite=Ih;ri.prototype.BindingType={Direct:0,EntireArray:1,ArrayElement:2,HasFromToArray:3};ri.prototype.Versioning={None:0,NeedsUpdate:1,MatrixWorldNeedsUpdate:2};ri.prototype.GetterByBindingType=[ri.prototype._getValue_direct,ri.prototype._getValue_array,ri.prototype._getValue_arrayElement,ri.prototype._getValue_toArray];ri.prototype.SetterByBindingTypeAndVersioning=[[ri.prototype._setValue_direct,ri.prototype._setValue_direct_setNeedsUpdate,ri.prototype._setValue_direct_setMatrixWorldNeedsUpdate],[ri.prototype._setValue_array,ri.prototype._setValue_array_setNeedsUpdate,ri.prototype._setValue_array_setMatrixWorldNeedsUpdate],[ri.prototype._setValue_arrayElement,ri.prototype._setValue_arrayElement_setNeedsUpdate,ri.prototype._setValue_arrayElement_setMatrixWorldNeedsUpdate],[ri.prototype._setValue_fromArray,ri.prototype._setValue_fromArray_setNeedsUpdate,ri.prototype._setValue_fromArray_setMatrixWorldNeedsUpdate]];mv=new Float32Array(1),Dh=class n{static{n.prototype.isMatrix2=!0}constructor(t,e,i,s){this.elements=[1,0,0,1],t!==void 0&&this.set(t,e,i,s)}identity(){return this.set(1,0,0,1),this}fromArray(t,e=0){for(let i=0;i<4;i++)this.elements[i]=t[i+e];return this}set(t,e,i,s){let r=this.elements;return r[0]=t,r[2]=e,r[1]=i,r[3]=s,this}};typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:"186"}}));typeof window<"u"&&(window.__THREE__?oe("WARNING: Multiple instances of Three.js being imported."):window.__THREE__="186")});function Yd(){let n=null,t=!1,e=null,i=null;function s(r,a){i=n.requestAnimationFrame(s),e(r,a)}return{start:function(){t!==!0&&e!==null&&n!==null&&(i=n.requestAnimationFrame(s),t=!0)},stop:function(){n!==null&&n.cancelAnimationFrame(i),t=!1},setAnimationLoop:function(r){e=r},setContext:function(r){n=r}}}function cm(n){let t=new WeakMap;function e(o,l){let c=o.array,h=o.usage,d=c.byteLength,u=n.createBuffer();n.bindBuffer(l,u),n.bufferData(l,c,h),o.onUploadCallback();let f;if(c instanceof Float32Array)f=n.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)f=n.HALF_FLOAT;else if(c instanceof Uint16Array)o.isFloat16BufferAttribute?f=n.HALF_FLOAT:f=n.UNSIGNED_SHORT;else if(c instanceof Int16Array)f=n.SHORT;else if(c instanceof Uint32Array)f=n.UNSIGNED_INT;else if(c instanceof Int32Array)f=n.INT;else if(c instanceof Int8Array)f=n.BYTE;else if(c instanceof Uint8Array)f=n.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)f=n.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:u,type:f,bytesPerElement:c.BYTES_PER_ELEMENT,version:o.version,size:d}}function i(o,l,c){let h=l.array,d=l.updateRanges;if(n.bindBuffer(c,o),d.length===0)n.bufferSubData(c,0,h);else{d.sort((f,g)=>f.start-g.start);let u=0;for(let f=1;f<d.length;f++){let g=d[u],v=d[f];v.start<=g.start+g.count+1?g.count=Math.max(g.count,v.start+v.count-g.start):(++u,d[u]=v)}d.length=u+1;for(let f=0,g=d.length;f<g;f++){let v=d[f];n.bufferSubData(c,v.start*h.BYTES_PER_ELEMENT,h,v.start,v.count)}l.clearUpdateRanges()}l.onUploadCallback()}function s(o){return o.isInterleavedBufferAttribute&&(o=o.data),t.get(o)}function r(o){o.isInterleavedBufferAttribute&&(o=o.data);let l=t.get(o);l&&(n.deleteBuffer(l.buffer),t.delete(o))}function a(o,l){if(o.isInterleavedBufferAttribute&&(o=o.data),o.isGLBufferAttribute){let h=t.get(o);(!h||h.version<o.version)&&t.set(o,{buffer:o.buffer,type:o.type,bytesPerElement:o.elementSize,version:o.version});return}let c=t.get(o);if(c===void 0)t.set(o,e(o,l));else if(c.version<o.version){if(c.size!==o.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,o,l),c.version=o.version}}return{get:s,remove:r,update:a}}function X1(n,t,e,i,s,r){let a=new gt(0),o=s===!0?0:1,l,c,h=null,d=0,u=null;function f(b){let w=b.isScene===!0?b.background:null;if(w&&w.isTexture){let _=b.backgroundBlurriness>0;w=t.get(w,_)}return w}function g(b){let w=!1,_=f(b);_===null?m(a,o):_&&_.isColor&&(m(_,1),w=!0);let E=n.xr.getEnvironmentBlendMode();E==="additive"?e.buffers.color.setClear(0,0,0,1,r):E==="alpha-blend"&&e.buffers.color.setClear(0,0,0,0,r),(n.autoClear||w)&&(e.buffers.depth.setTest(!0),e.buffers.depth.setMask(!0),e.buffers.color.setMask(!0),n.clear(n.autoClearColor,n.autoClearDepth,n.autoClearStencil))}function v(b,w){let _=f(w);_&&(_.isCubeTexture||_.mapping===Ha)?(c===void 0&&(c=new At(new Ne(1,1,1),new ai({name:"BackgroundCubeMaterial",uniforms:Xs(zn.backgroundCube.uniforms),vertexShader:zn.backgroundCube.vertexShader,fragmentShader:zn.backgroundCube.fragmentShader,side:Ze,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),c.geometry.deleteAttribute("uv"),c.onBeforeRender=function(E,S,A){this.matrixWorld.copyPosition(A.matrixWorld)},Object.defineProperty(c.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),i.update(c)),c.material.uniforms.envMap.value=_,c.material.uniforms.backgroundBlurriness.value=w.backgroundBlurriness,c.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,c.material.uniforms.backgroundRotation.value.setFromMatrix4(W1.makeRotationFromEuler(w.backgroundRotation)).transpose(),_.isCubeTexture&&_.isRenderTargetTexture===!1&&c.material.uniforms.backgroundRotation.value.premultiply(Zd),c.material.toneMapped=Te.getTransfer(_.colorSpace)!==We,(h!==_||d!==_.version||u!==n.toneMapping)&&(c.material.needsUpdate=!0,h=_,d=_.version,u=n.toneMapping),c.layers.enableAll(),b.unshift(c,c.geometry,c.material,0,0,null)):_&&_.isTexture&&(l===void 0&&(l=new At(new es(2,2),new ai({name:"BackgroundMaterial",uniforms:Xs(zn.background.uniforms),vertexShader:zn.background.vertexShader,fragmentShader:zn.background.fragmentShader,side:Vi,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),l.geometry.deleteAttribute("normal"),Object.defineProperty(l.material,"map",{get:function(){return this.uniforms.t2D.value}}),i.update(l)),l.material.uniforms.t2D.value=_,l.material.uniforms.backgroundIntensity.value=w.backgroundIntensity,l.material.toneMapped=Te.getTransfer(_.colorSpace)!==We,_.matrixAutoUpdate===!0&&_.updateMatrix(),l.material.uniforms.uvTransform.value.copy(_.matrix),(h!==_||d!==_.version||u!==n.toneMapping)&&(l.material.needsUpdate=!0,h=_,d=_.version,u=n.toneMapping),l.layers.enableAll(),b.unshift(l,l.geometry,l.material,0,0,null))}function m(b,w){b.getRGB(pc,e0(n)),e.buffers.color.setClear(pc.r,pc.g,pc.b,w,r)}function p(){c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0),l!==void 0&&(l.geometry.dispose(),l.material.dispose(),l=void 0)}return{getClearColor:function(){return a},setClearColor:function(b,w=1){a.set(b),o=w,m(a,o)},getClearAlpha:function(){return o},setClearAlpha:function(b){o=b,m(a,o)},render:g,addToRenderList:v,dispose:p}}function q1(n,t){let e=n.getParameter(n.MAX_VERTEX_ATTRIBS),i={},s=u(null),r=s,a=!1;function o(D,H,z,F,q){let Q=!1,Y=d(D,F,z,H);r!==Y&&(r=Y,c(r.object)),Q=f(D,F,z,q),Q&&g(D,F,z,q),q!==null&&t.update(q,n.ELEMENT_ARRAY_BUFFER),(Q||a)&&(a=!1,_(D,H,z,F),q!==null&&n.bindBuffer(n.ELEMENT_ARRAY_BUFFER,t.get(q).buffer))}function l(){return n.createVertexArray()}function c(D){return n.bindVertexArray(D)}function h(D){return n.deleteVertexArray(D)}function d(D,H,z,F){let q=F.wireframe===!0,Q=i[H.id];Q===void 0&&(Q={},i[H.id]=Q);let Y=D.isInstancedMesh===!0?D.id:0,mt=Q[Y];mt===void 0&&(mt={},Q[Y]=mt);let nt=mt[z.id];nt===void 0&&(nt={},mt[z.id]=nt);let lt=nt[q];return lt===void 0&&(lt=u(l()),nt[q]=lt),lt}function u(D){let H=[],z=[],F=[];for(let q=0;q<e;q++)H[q]=0,z[q]=0,F[q]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:H,enabledAttributes:z,attributeDivisors:F,object:D,attributes:{},index:null}}function f(D,H,z,F){let q=r.attributes,Q=H.attributes,Y=0,mt=z.getAttributes();for(let nt in mt)if(mt[nt].location>=0){let ut=q[nt],Yt=Q[nt];if(Yt===void 0&&(nt==="instanceMatrix"&&D.instanceMatrix&&(Yt=D.instanceMatrix),nt==="instanceColor"&&D.instanceColor&&(Yt=D.instanceColor)),ut===void 0||ut.attribute!==Yt||Yt&&ut.data!==Yt.data)return!0;Y++}return r.attributesNum!==Y||r.index!==F}function g(D,H,z,F){let q={},Q=H.attributes,Y=0,mt=z.getAttributes();for(let nt in mt)if(mt[nt].location>=0){let ut=Q[nt];ut===void 0&&(nt==="instanceMatrix"&&D.instanceMatrix&&(ut=D.instanceMatrix),nt==="instanceColor"&&D.instanceColor&&(ut=D.instanceColor));let Yt={};Yt.attribute=ut,ut&&ut.data&&(Yt.data=ut.data),q[nt]=Yt,Y++}r.attributes=q,r.attributesNum=Y,r.index=F}function v(){let D=r.newAttributes;for(let H=0,z=D.length;H<z;H++)D[H]=0}function m(D){p(D,0)}function p(D,H){let z=r.newAttributes,F=r.enabledAttributes,q=r.attributeDivisors;z[D]=1,F[D]===0&&(n.enableVertexAttribArray(D),F[D]=1),q[D]!==H&&(n.vertexAttribDivisor(D,H),q[D]=H)}function b(){let D=r.newAttributes,H=r.enabledAttributes;for(let z=0,F=H.length;z<F;z++)H[z]!==D[z]&&(n.disableVertexAttribArray(z),H[z]=0)}function w(D,H,z,F,q,Q,Y){Y===!0?n.vertexAttribIPointer(D,H,z,q,Q):n.vertexAttribPointer(D,H,z,F,q,Q)}function _(D,H,z,F){v();let q=F.attributes,Q=z.getAttributes(),Y=H.defaultAttributeValues;for(let mt in Q){let nt=Q[mt];if(nt.location>=0){let lt=q[mt];if(lt===void 0&&(mt==="instanceMatrix"&&D.instanceMatrix&&(lt=D.instanceMatrix),mt==="instanceColor"&&D.instanceColor&&(lt=D.instanceColor)),lt!==void 0){let ut=lt.normalized,Yt=lt.itemSize,Ut=t.get(lt);if(Ut===void 0)continue;let ie=Ut.buffer,ne=Ut.type,de=Ut.bytesPerElement,it=ne===n.INT||ne===n.UNSIGNED_INT||lt.gpuType===Ll;if(lt.isInterleavedBufferAttribute){let ht=lt.data,Tt=ht.stride,tt=lt.offset;if(ht.isInstancedInterleavedBuffer){for(let rt=0;rt<nt.locationSize;rt++)p(nt.location+rt,ht.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=ht.meshPerAttribute*ht.count)}else for(let rt=0;rt<nt.locationSize;rt++)m(nt.location+rt);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let rt=0;rt<nt.locationSize;rt++)w(nt.location+rt,Yt/nt.locationSize,ne,ut,Tt*de,(tt+Yt/nt.locationSize*rt)*de,it)}else{if(lt.isInstancedBufferAttribute){for(let ht=0;ht<nt.locationSize;ht++)p(nt.location+ht,lt.meshPerAttribute);D.isInstancedMesh!==!0&&F._maxInstanceCount===void 0&&(F._maxInstanceCount=lt.meshPerAttribute*lt.count)}else for(let ht=0;ht<nt.locationSize;ht++)m(nt.location+ht);n.bindBuffer(n.ARRAY_BUFFER,ie);for(let ht=0;ht<nt.locationSize;ht++)w(nt.location+ht,Yt/nt.locationSize,ne,ut,Yt*de,Yt/nt.locationSize*ht*de,it)}}else if(Y!==void 0){let ut=Y[mt];if(ut!==void 0)switch(ut.length){case 2:n.vertexAttrib2fv(nt.location,ut);break;case 3:n.vertexAttrib3fv(nt.location,ut);break;case 4:n.vertexAttrib4fv(nt.location,ut);break;default:n.vertexAttrib1fv(nt.location,ut)}}}}b()}function E(){T();for(let D in i){let H=i[D];for(let z in H){let F=H[z];for(let q in F){let Q=F[q];for(let Y in Q)h(Q[Y].object),delete Q[Y];delete F[q]}}delete i[D]}}function S(D){if(i[D.id]===void 0)return;let H=i[D.id];for(let z in H){let F=H[z];for(let q in F){let Q=F[q];for(let Y in Q)h(Q[Y].object),delete Q[Y];delete F[q]}}delete i[D.id]}function A(D){for(let H in i){let z=i[H];for(let F in z){let q=z[F];if(q[D.id]===void 0)continue;let Q=q[D.id];for(let Y in Q)h(Q[Y].object),delete Q[Y];delete q[D.id]}}}function x(D){for(let H in i){let z=i[H],F=D.isInstancedMesh===!0?D.id:0,q=z[F];if(q!==void 0){for(let Q in q){let Y=q[Q];for(let mt in Y)h(Y[mt].object),delete Y[mt];delete q[Q]}delete z[F],Object.keys(z).length===0&&delete i[H]}}}function T(){C(),a=!0,r!==s&&(r=s,c(r.object))}function C(){s.geometry=null,s.program=null,s.wireframe=!1}return{setup:o,reset:T,resetDefaultState:C,dispose:E,releaseStatesOfGeometry:S,releaseStatesOfObject:x,releaseStatesOfProgram:A,initAttributes:v,enableAttribute:m,disableUnusedAttributes:b}}function Y1(n,t,e){let i;function s(l){i=l}function r(l,c){n.drawArrays(i,l,c),e.update(c,i,1)}function a(l,c,h){h!==0&&(n.drawArraysInstanced(i,l,c,h),e.update(c,i,h))}function o(l,c,h){if(h===0)return;t.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,l,0,c,0,h);let u=0;for(let f=0;f<h;f++)u+=c[f];e.update(u,i,1)}this.setMode=s,this.render=r,this.renderInstances=a,this.renderMultiDraw=o}function Z1(n,t,e,i){let s;function r(){if(s!==void 0)return s;if(t.has("EXT_texture_filter_anisotropic")===!0){let A=t.get("EXT_texture_filter_anisotropic");s=n.getParameter(A.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else s=0;return s}function a(A){return!(A!==on&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_FORMAT))}function o(A){let x=A===bn&&(t.has("EXT_color_buffer_half_float")||t.has("EXT_color_buffer_float"));return!(A!==Wi&&A!==an&&!x&&i.convert(A)!==n.getParameter(n.IMPLEMENTATION_COLOR_READ_TYPE))}function l(A){if(A==="highp"){if(n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.HIGH_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.HIGH_FLOAT).precision>0)return"highp";A="mediump"}return A==="mediump"&&n.getShaderPrecisionFormat(n.VERTEX_SHADER,n.MEDIUM_FLOAT).precision>0&&n.getShaderPrecisionFormat(n.FRAGMENT_SHADER,n.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=e.precision!==void 0?e.precision:"highp",h=l(c);h!==c&&(oe("WebGLRenderer:",c,"not supported, using",h,"instead."),c=h);let d=e.logarithmicDepthBuffer===!0,u=e.reversedDepthBuffer===!0&&t.has("EXT_clip_control");e.reversedDepthBuffer===!0&&u===!1&&oe("WebGLRenderer: Unable to use reversed depth buffer due to missing EXT_clip_control extension. Fallback to default depth buffer.");let f=n.getParameter(n.MAX_TEXTURE_IMAGE_UNITS),g=n.getParameter(n.MAX_VERTEX_TEXTURE_IMAGE_UNITS),v=n.getParameter(n.MAX_TEXTURE_SIZE),m=n.getParameter(n.MAX_CUBE_MAP_TEXTURE_SIZE),p=n.getParameter(n.MAX_VERTEX_ATTRIBS),b=n.getParameter(n.MAX_VERTEX_UNIFORM_VECTORS),w=n.getParameter(n.MAX_VARYING_VECTORS),_=n.getParameter(n.MAX_FRAGMENT_UNIFORM_VECTORS),E=n.getParameter(n.MAX_SAMPLES),S=n.getParameter(n.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:r,getMaxPrecision:l,textureFormatReadable:a,textureTypeReadable:o,precision:c,logarithmicDepthBuffer:d,reversedDepthBuffer:u,maxTextures:f,maxVertexTextures:g,maxTextureSize:v,maxCubemapSize:m,maxAttributes:p,maxVertexUniforms:b,maxVaryings:w,maxFragmentUniforms:_,maxSamples:E,samples:S}}function J1(n){let t=this,e=null,i=0,s=!1,r=!1,a=new gn,o=new pe,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(d,u){let f=d.length!==0||u||i!==0||s;return s=u,i=d.length,f},this.beginShadows=function(){r=!0,h(null)},this.endShadows=function(){r=!1},this.setGlobalState=function(d,u){e=h(d,u,0)},this.setState=function(d,u,f){let g=d.clippingPlanes,v=d.clipIntersection,m=d.clipShadows,p=n.get(d);if(!s||g===null||g.length===0||r&&!m)r?h(null):c();else{let b=r?0:i,w=b*4,_=p.clippingState||null;l.value=_,_=h(g,u,w,f);for(let E=0;E!==w;++E)_[E]=e[E];p.clippingState=_,this.numIntersection=v?this.numPlanes:0,this.numPlanes+=b}};function c(){l.value!==e&&(l.value=e,l.needsUpdate=i>0),t.numPlanes=i,t.numIntersection=0}function h(d,u,f,g){let v=d!==null?d.length:0,m=null;if(v!==0){if(m=l.value,g!==!0||m===null){let p=f+v*4,b=u.matrixWorldInverse;o.getNormalMatrix(b),(m===null||m.length<p)&&(m=new Float32Array(p));for(let w=0,_=f;w!==v;++w,_+=4)a.copy(d[w]).applyMatrix4(b,o),a.normal.toArray(m,_),m[_+3]=a.constant}l.value=m,l.needsUpdate=!0}return t.numPlanes=v,t.numIntersection=0,m}}function tx(n){let t=[],e=[],i=n,s=n-Gr+1+$1;for(let r=0;r<s;r++){let a=Math.pow(2,i);t.push(a);let o=1/(a-2),l=-o,c=1+o,h=[l,l,c,l,c,c,l,l,c,c,l,c],d=6,u=6,f=3,g=new Float32Array(f*u*d),v=new Float32Array(f*u*d);for(let p=0;p<d;p++){let b=p%3*2/3-1,w=p>2?0:-1,_=[b,w,0,b+2/3,w,0,b+2/3,w+1,0,b,w,0,b+2/3,w+1,0,b,w+1,0];g.set(_,f*u*p);for(let E=0;E<u;E++){let S=h[E*2]*2-1,A=h[E*2+1]*2-1;p===0?qs.set(1,A,S):p===1?qs.set(-S,1,-A):p===2?qs.set(-S,A,1):p===3?qs.set(-1,A,-S):p===4?qs.set(-S,-1,A):qs.set(S,A,-1),qs.toArray(v,(p*u+E)*f)}}let m=new xe;m.setAttribute("position",new He(g,f)),m.setAttribute("outputDirection",new He(v,f)),e.push(new At(m,null)),i>Gr&&i--}return{lodMeshes:e,sizeLods:t}}function Rd(n,t,e){let i=new Hi(n,t,e);return i.texture.mapping=Ha,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function zr(n,t,e,i,s){n.viewport.set(t,e,i,s),n.scissor.set(t,e,i,s)}function ex(n,t,e){return new ai({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:K1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function ix(n,t,e){return new ai({name:"SphericalGaussianBlur",defines:{SAMPLES:j1,CUBEUV_TEXEL_WIDTH:1/t,CUBEUV_TEXEL_HEIGHT:1/e,CUBEUV_MAX_MIP:`${n}.0`},uniforms:{envMap:{value:null},sigma:{value:0},mipInt:{value:0}},vertexShader:yc(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Ad(){return new ai({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:yc(),fragmentShader:`

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
		`,blending:On,depthTest:!1,depthWrite:!1})}function Cd(){return new ai({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:yc(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:On,depthTest:!1,depthWrite:!1})}function yc(){return`

		precision mediump float;
		precision mediump int;

		attribute vec3 outputDirection;

		varying vec3 vOutputDirection;

		void main() {

			vOutputDirection = outputDirection;
			gl_Position = vec4( position, 1.0 );

		}
	`}function nx(n){let t=new WeakMap,e=new WeakMap,i=null;function s(u,f=!1){return u==null?null:f?a(u):r(u)}function r(u){if(u&&u.isTexture){let f=u.mapping;if(f===Rl||f===Al)if(t.has(u)){let g=t.get(u).texture;return o(g,u.mapping)}else{let g=u.image;if(g&&g.height>0){let v=new gc(g.height);return v.fromEquirectangularTexture(n,u),t.set(u,v),u.addEventListener("dispose",c),o(v.texture,u.mapping)}else return null}}return u}function a(u){if(u&&u.isTexture){let f=u.mapping,g=f===Rl||f===Al,v=f===Ms||f===Ws;if(g||v){let m=e.get(u),p=m!==void 0?m.texture.pmremVersion:0;if(u.isRenderTargetTexture&&u.pmremVersion!==p)return i===null&&(i=new Wr(n)),m=g?i.fromEquirectangular(u,m):i.fromCubemap(u,m),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),m.texture;if(m!==void 0)return m.texture;{let b=u.image;return g&&b&&b.height>0||v&&b&&l(b)?(i===null&&(i=new Wr(n)),m=g?i.fromEquirectangular(u):i.fromCubemap(u),m.texture.pmremVersion=u.pmremVersion,e.set(u,m),u.addEventListener("dispose",h),m.texture):null}}}return u}function o(u,f){return f===Rl?u.mapping=Ms:f===Al&&(u.mapping=Ws),u}function l(u){let f=0,g=6;for(let v=0;v<g;v++)u[v]!==void 0&&f++;return f===g}function c(u){let f=u.target;f.removeEventListener("dispose",c);let g=t.get(f);g!==void 0&&(t.delete(f),g.dispose())}function h(u){let f=u.target;f.removeEventListener("dispose",h);let g=e.get(f);g!==void 0&&(e.delete(f),g.dispose())}function d(){t=new WeakMap,e=new WeakMap,i!==null&&(i.dispose(),i=null)}return{get:s,dispose:d}}function sx(n){let t={};function e(i){if(t[i]!==void 0)return t[i];let s=n.getExtension(i);return t[i]=s,s}return{has:function(i){return e(i)!==null},init:function(){e("EXT_color_buffer_float"),e("WEBGL_clip_cull_distance"),e("OES_texture_float_linear"),e("EXT_color_buffer_half_float"),e("WEBGL_multisampled_render_to_texture"),e("WEBGL_render_shared_exponent")},get:function(i){let s=e(i);return s===null&&Fs("WebGLRenderer: "+i+" extension not supported."),s}}}function rx(n,t,e,i){let s={},r=new WeakMap;function a(d){let u=d.target;u.index!==null&&t.remove(u.index);for(let g in u.attributes)t.remove(u.attributes[g]);u.removeEventListener("dispose",a),delete s[u.id];let f=r.get(u);f&&(t.remove(f),r.delete(u)),i.releaseStatesOfGeometry(u),u.isInstancedBufferGeometry===!0&&delete u._maxInstanceCount,e.memory.geometries--}function o(d,u){return s[u.id]===!0||(u.addEventListener("dispose",a),s[u.id]=!0,e.memory.geometries++),u}function l(d){let u=d.attributes;for(let f in u)t.update(u[f],n.ARRAY_BUFFER)}function c(d){let u=[],f=d.index,g=d.attributes.position,v=0;if(g===void 0)return;if(f!==null){let b=f.array;v=f.version;for(let w=0,_=b.length;w<_;w+=3){let E=b[w+0],S=b[w+1],A=b[w+2];u.push(E,S,S,A,A,E)}}else{let b=g.array;v=g.version;for(let w=0,_=b.length/3-1;w<_;w+=3){let E=w+0,S=w+1,A=w+2;u.push(E,S,S,A,A,E)}}let m=new(g.count>=65535?ya:xa)(u,1);m.version=v;let p=r.get(d);p&&t.remove(p),r.set(d,m)}function h(d){let u=r.get(d);if(u){let f=d.index;f!==null&&u.version<f.version&&c(d)}else c(d);return r.get(d)}return{get:o,update:l,getWireframeAttribute:h}}function ax(n,t,e){let i;function s(d){i=d}let r,a;function o(d){r=d.type,a=d.bytesPerElement}function l(d,u){n.drawElements(i,u,r,d*a),e.update(u,i,1)}function c(d,u,f){f!==0&&(n.drawElementsInstanced(i,u,r,d*a,f),e.update(u,i,f))}function h(d,u,f){if(f===0)return;t.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,u,0,r,d,0,f);let v=0;for(let m=0;m<f;m++)v+=u[m];e.update(v,i,1)}this.setMode=s,this.setIndex=o,this.render=l,this.renderInstances=c,this.renderMultiDraw=h}function ox(n){let t={geometries:0,textures:0},e={frame:0,calls:0,triangles:0,points:0,lines:0};function i(r,a,o){switch(e.calls++,a){case n.TRIANGLES:e.triangles+=o*(r/3);break;case n.LINES:e.lines+=o*(r/2);break;case n.LINE_STRIP:e.lines+=o*(r-1);break;case n.LINE_LOOP:e.lines+=o*r;break;case n.POINTS:e.points+=o*r;break;default:ue("WebGLInfo: Unknown draw mode:",a);break}}function s(){e.calls=0,e.triangles=0,e.points=0,e.lines=0}return{memory:t,render:e,programs:null,autoReset:!0,reset:s,update:i}}function lx(n,t,e){let i=new WeakMap,s=new Qe;function r(a,o,l){let c=a.morphTargetInfluences,h=o.morphAttributes.position||o.morphAttributes.normal||o.morphAttributes.color,d=h!==void 0?h.length:0,u=i.get(o);if(u===void 0||u.count!==d){let T=function(){A.dispose(),i.delete(o),o.removeEventListener("dispose",T)};u!==void 0&&u.texture.dispose();let f=o.morphAttributes.position!==void 0,g=o.morphAttributes.normal!==void 0,v=o.morphAttributes.color!==void 0,m=o.morphAttributes.position||[],p=o.morphAttributes.normal||[],b=o.morphAttributes.color||[],w=0;f===!0&&(w=1),g===!0&&(w=2),v===!0&&(w=3);let _=o.attributes.position.count*w,E=1;_>t.maxTextureSize&&(E=Math.ceil(_/t.maxTextureSize),_=t.maxTextureSize);let S=new Float32Array(_*E*4*d),A=new ma(S,_,E,d);A.type=an,A.needsUpdate=!0;let x=w*4;for(let C=0;C<d;C++){let D=m[C],H=p[C],z=b[C],F=_*E*4*C;for(let q=0;q<D.count;q++){let Q=q*x;f===!0&&(s.fromBufferAttribute(D,q),S[F+Q+0]=s.x,S[F+Q+1]=s.y,S[F+Q+2]=s.z,S[F+Q+3]=0),g===!0&&(s.fromBufferAttribute(H,q),S[F+Q+4]=s.x,S[F+Q+5]=s.y,S[F+Q+6]=s.z,S[F+Q+7]=0),v===!0&&(s.fromBufferAttribute(z,q),S[F+Q+8]=s.x,S[F+Q+9]=s.y,S[F+Q+10]=s.z,S[F+Q+11]=z.itemSize===4?s.w:1)}}u={count:d,texture:A,size:new vt(_,E)},i.set(o,u),o.addEventListener("dispose",T)}if(a.isInstancedMesh===!0&&a.morphTexture!==null)l.getUniforms().setValue(n,"morphTexture",a.morphTexture,e);else{let f=0;for(let v=0;v<c.length;v++)f+=c[v];let g=o.morphTargetsRelative?1:1-f;l.getUniforms().setValue(n,"morphTargetBaseInfluence",g),l.getUniforms().setValue(n,"morphTargetInfluences",c)}l.getUniforms().setValue(n,"morphTargetsTexture",u.texture,e),l.getUniforms().setValue(n,"morphTargetsTextureSize",u.size)}return{update:r}}function cx(n,t,e,i,s){let r=new WeakMap;function a(c){let h=s.render.frame,d=c.geometry,u=t.get(c,d);if(r.get(u)!==h&&(t.update(u),r.set(u,h)),c.isInstancedMesh&&(c.hasEventListener("dispose",l)===!1&&c.addEventListener("dispose",l),r.get(c)!==h&&(e.update(c.instanceMatrix,n.ARRAY_BUFFER),c.instanceColor!==null&&e.update(c.instanceColor,n.ARRAY_BUFFER),r.set(c,h))),c.isSkinnedMesh){let f=c.skeleton;r.get(f)!==h&&(f.update(),r.set(f,h))}return u}function o(){r=new WeakMap}function l(c){let h=c.target;h.removeEventListener("dispose",l),i.releaseStatesOfObject(h),e.remove(h.instanceMatrix),h.instanceColor!==null&&e.remove(h.instanceColor)}return{update:a,dispose:o}}function ux(n,t,e,i,s,r){let a=new Hi(t,e,{type:n,depthBuffer:s,stencilBuffer:r,samples:i?4:0,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,resolveDepthBuffer:!1,resolveStencilBuffer:!1}),o=null,l=null,c=new xe;c.setAttribute("position",new ae([-1,3,0,-1,-1,0,3,-1,0],3)),c.setAttribute("uv",new ae([0,2,0,0,2,0],2));let h=new ul({uniforms:{tDiffuse:{value:null}},vertexShader:`
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
			}`,depthTest:!1,depthWrite:!1}),d=new At(c,h),u=new Nr(-1,1,1,-1,0,1),f=null,g=null,v=!1,m,p=null,b=[],w=!1;this.setSize=function(_,E){a.setSize(_,E),o!==null&&o.setSize(_,E),l!==null&&l.setSize(_,E);for(let S=0;S<b.length;S++){let A=b[S];A.setSize&&A.setSize(_,E)}},this.setEffects=function(_){b=_,w=b.length>0&&b[0].isRenderPass===!0;let E=a.width,S=a.height;b.length>0&&o===null&&(o=new Hi(E,S,{type:bn,depthBuffer:!1,stencilBuffer:!1}),l=new Hi(E,S,{type:bn,depthBuffer:!1,stencilBuffer:!1}));for(let A=0;A<b.length;A++){let x=b[A];x.setSize&&x.setSize(E,S)}},this.begin=function(_,E){if(v||_.toneMapping===vn&&b.length===0)return!1;if(p=E,E!==null){let S=E.width,A=E.height;(a.width!==S||a.height!==A)&&this.setSize(S,A)}return w===!1&&_.setRenderTarget(a),m=_.toneMapping,_.toneMapping=vn,!0},this.hasRenderPass=function(){return w},this.end=function(_,E){_.toneMapping=m,v=!0;let S=a,A=o;for(let x=0;x<b.length;x++){let T=b[x];T.enabled!==!1&&(T.render(_,A,S,E),T.needsSwap!==!1&&(S=A,A=A===o?l:o))}if(f!==_.outputColorSpace||g!==_.toneMapping){f=_.outputColorSpace,g=_.toneMapping,h.defines={},Te.getTransfer(f)===We&&(h.defines.SRGB_TRANSFER="");let x=hx[g];x&&(h.defines[x]=""),h.needsUpdate=!0}h.uniforms.tDiffuse.value=S.texture,_.setRenderTarget(p),_.render(d,u),p=null,v=!1},this.isCompositing=function(){return v},this.dispose=function(){a.dispose(),o!==null&&o.dispose(),l!==null&&l.dispose(),c.dispose(),h.dispose()}}function Xr(n,t,e){let i=n[0];if(i<=0||i>0)return n;let s=t*e,r=Ld[s];if(r===void 0&&(r=new Float32Array(s),Ld[s]=r),t!==0){i.toArray(r,0);for(let a=1,o=0;a!==t;++a)o+=e,n[a].toArray(r,o)}return r}function vi(n,t){if(n.length!==t.length)return!1;for(let e=0,i=n.length;e<i;e++)if(n[e]!==t[e])return!1;return!0}function _i(n,t){for(let e=0,i=t.length;e<i;e++)n[e]=t[e]}function vc(n,t){let e=Pd[t];e===void 0&&(e=new Int32Array(t),Pd[t]=e);for(let i=0;i!==t;++i)e[i]=n.allocateTextureUnit();return e}function dx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1f(this.addr,t),e[0]=t)}function fx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2f(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vi(e,t))return;n.uniform2fv(this.addr,t),_i(e,t)}}function px(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3f(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else if(t.r!==void 0)(e[0]!==t.r||e[1]!==t.g||e[2]!==t.b)&&(n.uniform3f(this.addr,t.r,t.g,t.b),e[0]=t.r,e[1]=t.g,e[2]=t.b);else{if(vi(e,t))return;n.uniform3fv(this.addr,t),_i(e,t)}}function mx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4f(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vi(e,t))return;n.uniform4fv(this.addr,t),_i(e,t)}}function gx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(vi(e,t))return;n.uniformMatrix2fv(this.addr,!1,t),_i(e,t)}else{if(vi(e,i))return;Ud.set(i),n.uniformMatrix2fv(this.addr,!1,Ud),_i(e,i)}}function xx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(vi(e,t))return;n.uniformMatrix3fv(this.addr,!1,t),_i(e,t)}else{if(vi(e,i))return;Dd.set(i),n.uniformMatrix3fv(this.addr,!1,Dd),_i(e,i)}}function yx(n,t){let e=this.cache,i=t.elements;if(i===void 0){if(vi(e,t))return;n.uniformMatrix4fv(this.addr,!1,t),_i(e,t)}else{if(vi(e,i))return;Id.set(i),n.uniformMatrix4fv(this.addr,!1,Id),_i(e,i)}}function vx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1i(this.addr,t),e[0]=t)}function _x(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2i(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vi(e,t))return;n.uniform2iv(this.addr,t),_i(e,t)}}function bx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3i(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(vi(e,t))return;n.uniform3iv(this.addr,t),_i(e,t)}}function Mx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4i(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vi(e,t))return;n.uniform4iv(this.addr,t),_i(e,t)}}function Sx(n,t){let e=this.cache;e[0]!==t&&(n.uniform1ui(this.addr,t),e[0]=t)}function Ex(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y)&&(n.uniform2ui(this.addr,t.x,t.y),e[0]=t.x,e[1]=t.y);else{if(vi(e,t))return;n.uniform2uiv(this.addr,t),_i(e,t)}}function wx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z)&&(n.uniform3ui(this.addr,t.x,t.y,t.z),e[0]=t.x,e[1]=t.y,e[2]=t.z);else{if(vi(e,t))return;n.uniform3uiv(this.addr,t),_i(e,t)}}function Tx(n,t){let e=this.cache;if(t.x!==void 0)(e[0]!==t.x||e[1]!==t.y||e[2]!==t.z||e[3]!==t.w)&&(n.uniform4ui(this.addr,t.x,t.y,t.z,t.w),e[0]=t.x,e[1]=t.y,e[2]=t.z,e[3]=t.w);else{if(vi(e,t))return;n.uniform4uiv(this.addr,t),_i(e,t)}}function Rx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s);let r;this.type===n.SAMPLER_2D_SHADOW?(d0.compareFunction=e.isReversedDepthBuffer()?fc:dc,r=d0):r=Jd,e.setTexture2D(t||r,s)}function Ax(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture3D(t||jd,s)}function Cx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTextureCube(t||Kd,s)}function Lx(n,t,e){let i=this.cache,s=e.allocateTextureUnit();i[0]!==s&&(n.uniform1i(this.addr,s),i[0]=s),e.setTexture2DArray(t||$d,s)}function Px(n){switch(n){case 5126:return dx;case 35664:return fx;case 35665:return px;case 35666:return mx;case 35674:return gx;case 35675:return xx;case 35676:return yx;case 5124:case 35670:return vx;case 35667:case 35671:return _x;case 35668:case 35672:return bx;case 35669:case 35673:return Mx;case 5125:return Sx;case 36294:return Ex;case 36295:return wx;case 36296:return Tx;case 35678:case 36198:case 36298:case 36306:case 35682:return Rx;case 35679:case 36299:case 36307:return Ax;case 35680:case 36300:case 36308:case 36293:return Cx;case 36289:case 36303:case 36311:case 36292:return Lx}}function Ix(n,t){n.uniform1fv(this.addr,t)}function Dx(n,t){let e=Xr(t,this.size,2);n.uniform2fv(this.addr,e)}function Ux(n,t){let e=Xr(t,this.size,3);n.uniform3fv(this.addr,e)}function Nx(n,t){let e=Xr(t,this.size,4);n.uniform4fv(this.addr,e)}function Fx(n,t){let e=Xr(t,this.size,4);n.uniformMatrix2fv(this.addr,!1,e)}function Bx(n,t){let e=Xr(t,this.size,9);n.uniformMatrix3fv(this.addr,!1,e)}function kx(n,t){let e=Xr(t,this.size,16);n.uniformMatrix4fv(this.addr,!1,e)}function Ox(n,t){n.uniform1iv(this.addr,t)}function Hx(n,t){n.uniform2iv(this.addr,t)}function zx(n,t){n.uniform3iv(this.addr,t)}function Gx(n,t){n.uniform4iv(this.addr,t)}function Vx(n,t){n.uniform1uiv(this.addr,t)}function Wx(n,t){n.uniform2uiv(this.addr,t)}function Xx(n,t){n.uniform3uiv(this.addr,t)}function qx(n,t){n.uniform4uiv(this.addr,t)}function Yx(n,t,e){let i=this.cache,s=t.length,r=vc(e,s);vi(i,r)||(n.uniform1iv(this.addr,r),_i(i,r));let a;this.type===n.SAMPLER_2D_SHADOW?a=d0:a=Jd;for(let o=0;o!==s;++o)e.setTexture2D(t[o]||a,r[o])}function Zx(n,t,e){let i=this.cache,s=t.length,r=vc(e,s);vi(i,r)||(n.uniform1iv(this.addr,r),_i(i,r));for(let a=0;a!==s;++a)e.setTexture3D(t[a]||jd,r[a])}function Jx(n,t,e){let i=this.cache,s=t.length,r=vc(e,s);vi(i,r)||(n.uniform1iv(this.addr,r),_i(i,r));for(let a=0;a!==s;++a)e.setTextureCube(t[a]||Kd,r[a])}function $x(n,t,e){let i=this.cache,s=t.length,r=vc(e,s);vi(i,r)||(n.uniform1iv(this.addr,r),_i(i,r));for(let a=0;a!==s;++a)e.setTexture2DArray(t[a]||$d,r[a])}function jx(n){switch(n){case 5126:return Ix;case 35664:return Dx;case 35665:return Ux;case 35666:return Nx;case 35674:return Fx;case 35675:return Bx;case 35676:return kx;case 5124:case 35670:return Ox;case 35667:case 35671:return Hx;case 35668:case 35672:return zx;case 35669:case 35673:return Gx;case 5125:return Vx;case 36294:return Wx;case 36295:return Xx;case 36296:return qx;case 35678:case 36198:case 36298:case 36306:case 35682:return Yx;case 35679:case 36299:case 36307:return Zx;case 35680:case 36300:case 36308:case 36293:return Jx;case 36289:case 36303:case 36311:case 36292:return $x}}function Nd(n,t){n.seq.push(t),n.map[t.id]=t}function Kx(n,t,e){let i=n.name,s=i.length;for(h0.lastIndex=0;;){let r=h0.exec(i),a=h0.lastIndex,o=r[1],l=r[2]==="]",c=r[3];if(l&&(o=o|0),c===void 0||c==="["&&a+2===s){Nd(e,c===void 0?new f0(o,n,t):new p0(o,n,t));break}else{let d=e.map[o];d===void 0&&(d=new m0(o),Nd(e,d)),e=d}}}function Fd(n,t,e){let i=n.createShader(t);return n.shaderSource(i,e),n.compileShader(i),i}function ey(n,t){let e=n.split(`
`),i=[],s=Math.max(t-6,0),r=Math.min(t+6,e.length);for(let a=s;a<r;a++){let o=a+1;i.push(`${o===t?">":" "} ${o}: ${e[a]}`)}return i.join(`
`)}function iy(n){Te._getMatrix(Bd,Te.workingColorSpace,n);let t=`mat3( ${Bd.elements.map(e=>e.toFixed(4))} )`;switch(Te.getTransfer(n)){case da:return[t,"LinearTransferOETF"];case We:return[t,"sRGBTransferOETF"];default:return oe("WebGLProgram: Unsupported color space: ",n),[t,"LinearTransferOETF"]}}function kd(n,t,e){let i=n.getShaderParameter(t,n.COMPILE_STATUS),r=(n.getShaderInfoLog(t)||"").trim();if(i&&r==="")return"";let a=/ERROR: 0:(\d+)/.exec(r);if(a){let o=parseInt(a[1]);return e.toUpperCase()+`

`+r+`

`+ey(n.getShaderSource(t),o)}else return r}function ny(n,t){let e=iy(t);return[`vec4 ${n}( vec4 value ) {`,`	return ${e[1]}( vec4( value.rgb * ${e[0]}, value.a ) );`,"}"].join(`
`)}function ry(n,t){let e=sy[t];return e===void 0?(oe("WebGLProgram: Unsupported toneMapping:",t),"vec3 "+n+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+n+"( vec3 color ) { return "+e+"ToneMapping( color ); }"}function ay(){Te.getLuminanceCoefficients(mc);let n=mc.x.toFixed(4),t=mc.y.toFixed(4),e=mc.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${n}, ${t}, ${e} );`,"	return dot( weights, rgb );","}"].join(`
`)}function oy(n){return[n.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",n.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ja).join(`
`)}function ly(n){let t=[];for(let e in n){let i=n[e];i!==!1&&t.push("#define "+e+" "+i)}return t.join(`
`)}function cy(n,t){let e={},i=n.getProgramParameter(t,n.ACTIVE_ATTRIBUTES);for(let s=0;s<i;s++){let r=n.getActiveAttrib(t,s),a=r.name,o=1;r.type===n.FLOAT_MAT2&&(o=2),r.type===n.FLOAT_MAT3&&(o=3),r.type===n.FLOAT_MAT4&&(o=4),e[a]={type:r.type,location:n.getAttribLocation(t,a),locationSize:o}}return e}function ja(n){return n!==""}function Od(n,t){let e=t.numSpotLightShadows+t.numSpotLightMaps-t.numSpotLightShadowsWithMaps;return n.replace(/NUM_SUN_LIGHTS/g,t.numSunLights).replace(/NUM_DIR_LIGHTS/g,t.numDirLights).replace(/NUM_SPOT_LIGHTS/g,t.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,t.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,e).replace(/NUM_RECT_AREA_LIGHTS/g,t.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,t.numPointLights).replace(/NUM_HEMI_LIGHTS/g,t.numHemiLights).replace(/NUM_SUN_LIGHT_SHADOWS/g,t.numSunLightShadows).replace(/NUM_DIR_LIGHT_SHADOWS/g,t.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,t.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,t.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,t.numPointLightShadows)}function Hd(n,t){return n.replace(/NUM_CLIPPING_PLANES/g,t.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,t.numClippingPlanes-t.numClipIntersection)}function g0(n){return n.replace(hy,dy)}function dy(n,t){let e=ye[t];if(e===void 0){let i=uy.get(t);if(i!==void 0)e=ye[i],oe('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',t,i);else throw new Error("THREE.WebGLProgram: Can not resolve #include <"+t+">")}return g0(e)}function zd(n){return n.replace(fy,py)}function py(n,t,e,i){let s="";for(let r=parseInt(t);r<parseInt(e);r++)s+=i.replace(/\[\s*i\s*\]/g,"[ "+r+" ]").replace(/UNROLLED_LOOP_INDEX/g,r);return s}function Gd(n){let t=`precision ${n.precision} float;
	precision ${n.precision} int;
	precision ${n.precision} sampler2D;
	precision ${n.precision} samplerCube;
	precision ${n.precision} sampler3D;
	precision ${n.precision} sampler2DArray;
	precision ${n.precision} sampler2DShadow;
	precision ${n.precision} samplerCubeShadow;
	precision ${n.precision} sampler2DArrayShadow;
	precision ${n.precision} isampler2D;
	precision ${n.precision} isampler3D;
	precision ${n.precision} isamplerCube;
	precision ${n.precision} isampler2DArray;
	precision ${n.precision} usampler2D;
	precision ${n.precision} usampler3D;
	precision ${n.precision} usamplerCube;
	precision ${n.precision} usampler2DArray;
	`;return n.precision==="highp"?t+=`
#define HIGH_PRECISION`:n.precision==="mediump"?t+=`
#define MEDIUM_PRECISION`:n.precision==="lowp"&&(t+=`
#define LOW_PRECISION`),t}function gy(n){return my[n.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}function yy(n){return n.envMap===!1?"ENVMAP_TYPE_CUBE":xy[n.envMapMode]||"ENVMAP_TYPE_CUBE"}function _y(n){return n.envMap===!1?"ENVMAP_MODE_REFLECTION":vy[n.envMapMode]||"ENVMAP_MODE_REFLECTION"}function My(n){return n.envMap===!1?"ENVMAP_BLENDING_NONE":by[n.combine]||"ENVMAP_BLENDING_NONE"}function Sy(n){let t=n.envMapCubeUVHeight;if(t===null)return null;let e=Math.log2(t)-2,i=1/t;return{texelWidth:1/(3*Math.max(Math.pow(2,e),112)),texelHeight:i,maxMip:e}}function Ey(n,t,e,i){let s=n.getContext(),r=e.defines,a=e.vertexShader,o=e.fragmentShader,l=gy(e),c=yy(e),h=_y(e),d=My(e),u=Sy(e),f=oy(e),g=ly(r),v=s.createProgram(),m,p,b=e.glslVersion?"#version "+e.glslVersion+`
`:"";e.isRawShaderMaterial?(m=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ja).join(`
`),m.length>0&&(m+=`
`),p=["#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g].filter(ja).join(`
`),p.length>0&&(p+=`
`)):(m=[Gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",e.batching?"#define USE_BATCHING":"",e.batchingColor?"#define USE_BATCHING_COLOR":"",e.instancing?"#define USE_INSTANCING":"",e.instancingColor?"#define USE_INSTANCING_COLOR":"",e.instancingMorph?"#define USE_INSTANCING_MORPH":"",e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.map?"#define USE_MAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+h:"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.displacementMap?"#define USE_DISPLACEMENTMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.mapUv?"#define MAP_UV "+e.mapUv:"",e.alphaMapUv?"#define ALPHAMAP_UV "+e.alphaMapUv:"",e.lightMapUv?"#define LIGHTMAP_UV "+e.lightMapUv:"",e.aoMapUv?"#define AOMAP_UV "+e.aoMapUv:"",e.emissiveMapUv?"#define EMISSIVEMAP_UV "+e.emissiveMapUv:"",e.bumpMapUv?"#define BUMPMAP_UV "+e.bumpMapUv:"",e.normalMapUv?"#define NORMALMAP_UV "+e.normalMapUv:"",e.displacementMapUv?"#define DISPLACEMENTMAP_UV "+e.displacementMapUv:"",e.metalnessMapUv?"#define METALNESSMAP_UV "+e.metalnessMapUv:"",e.roughnessMapUv?"#define ROUGHNESSMAP_UV "+e.roughnessMapUv:"",e.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+e.anisotropyMapUv:"",e.clearcoatMapUv?"#define CLEARCOATMAP_UV "+e.clearcoatMapUv:"",e.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+e.clearcoatNormalMapUv:"",e.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+e.clearcoatRoughnessMapUv:"",e.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+e.iridescenceMapUv:"",e.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+e.iridescenceThicknessMapUv:"",e.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+e.sheenColorMapUv:"",e.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+e.sheenRoughnessMapUv:"",e.specularMapUv?"#define SPECULARMAP_UV "+e.specularMapUv:"",e.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+e.specularColorMapUv:"",e.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+e.specularIntensityMapUv:"",e.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+e.transmissionMapUv:"",e.thicknessMapUv?"#define THICKNESSMAP_UV "+e.thicknessMapUv:"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexNormals?"#define HAS_NORMAL":"",e.vertexColors?"#define USE_COLOR":"",e.vertexAlphas?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.flatShading?"#define FLAT_SHADED":"",e.skinning?"#define USE_SKINNING":"",e.morphTargets?"#define USE_MORPHTARGETS":"",e.morphNormals&&e.flatShading===!1?"#define USE_MORPHNORMALS":"",e.morphColors?"#define USE_MORPHCOLORS":"",e.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+e.morphTextureStride:"",e.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+e.morphTargetsCount:"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.sizeAttenuation?"#define USE_SIZEATTENUATION":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ja).join(`
`),p=[Gd(e),"#define SHADER_TYPE "+e.shaderType,"#define SHADER_NAME "+e.shaderName,g,e.useFog&&e.fog?"#define USE_FOG":"",e.useFog&&e.fogExp2?"#define FOG_EXP2":"",e.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",e.map?"#define USE_MAP":"",e.matcap?"#define USE_MATCAP":"",e.envMap?"#define USE_ENVMAP":"",e.envMap?"#define "+c:"",e.envMap?"#define "+h:"",e.envMap?"#define "+d:"",u?"#define CUBEUV_TEXEL_WIDTH "+u.texelWidth:"",u?"#define CUBEUV_TEXEL_HEIGHT "+u.texelHeight:"",u?"#define CUBEUV_MAX_MIP "+u.maxMip+".0":"",e.lightMap?"#define USE_LIGHTMAP":"",e.aoMap?"#define USE_AOMAP":"",e.bumpMap?"#define USE_BUMPMAP":"",e.normalMap?"#define USE_NORMALMAP":"",e.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",e.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",e.packedNormalMap?"#define USE_PACKED_NORMALMAP":"",e.emissiveMap?"#define USE_EMISSIVEMAP":"",e.anisotropy?"#define USE_ANISOTROPY":"",e.anisotropyMap?"#define USE_ANISOTROPYMAP":"",e.clearcoat?"#define USE_CLEARCOAT":"",e.clearcoatMap?"#define USE_CLEARCOATMAP":"",e.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",e.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",e.dispersion?"#define USE_DISPERSION":"",e.retroreflection?"#define USE_RETROREFLECTION":"",e.iridescence?"#define USE_IRIDESCENCE":"",e.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",e.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",e.specularMap?"#define USE_SPECULARMAP":"",e.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",e.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",e.roughnessMap?"#define USE_ROUGHNESSMAP":"",e.metalnessMap?"#define USE_METALNESSMAP":"",e.alphaMap?"#define USE_ALPHAMAP":"",e.alphaTest?"#define USE_ALPHATEST":"",e.alphaHash?"#define USE_ALPHAHASH":"",e.sheen?"#define USE_SHEEN":"",e.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",e.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",e.transmission?"#define USE_TRANSMISSION":"",e.transmissionMap?"#define USE_TRANSMISSIONMAP":"",e.thicknessMap?"#define USE_THICKNESSMAP":"",e.vertexTangents&&e.flatShading===!1?"#define USE_TANGENT":"",e.vertexColors||e.instancingColor?"#define USE_COLOR":"",e.vertexAlphas||e.batchingColor?"#define USE_COLOR_ALPHA":"",e.vertexUv1s?"#define USE_UV1":"",e.vertexUv2s?"#define USE_UV2":"",e.vertexUv3s?"#define USE_UV3":"",e.pointsUvs?"#define USE_POINTS_UV":"",e.gradientMap?"#define USE_GRADIENTMAP":"",e.flatShading?"#define FLAT_SHADED":"",e.doubleSided?"#define DOUBLE_SIDED":"",e.flipSided?"#define FLIP_SIDED":"",e.shadowMapEnabled?"#define USE_SHADOWMAP":"",e.shadowMapEnabled?"#define "+l:"",e.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",e.numLightProbes>0?"#define USE_LIGHT_PROBES":"",e.numLightProbeGrids>0?"#define USE_LIGHT_PROBES_GRID":"",e.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",e.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",e.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",e.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",e.toneMapping!==vn?"#define TONE_MAPPING":"",e.toneMapping!==vn?ye.tonemapping_pars_fragment:"",e.toneMapping!==vn?ry("toneMapping",e.toneMapping):"",e.dithering?"#define DITHERING":"",e.opaque?"#define OPAQUE":"",ye.colorspace_pars_fragment,ny("linearToOutputTexel",e.outputColorSpace),ay(),e.useDepthPacking?"#define DEPTH_PACKING "+e.depthPacking:"",`
`].filter(ja).join(`
`)),a=g0(a),a=Od(a,e),a=Hd(a,e),o=g0(o),o=Od(o,e),o=Hd(o,e),a=zd(a),o=zd(o),e.isRawShaderMaterial!==!0&&(b=`#version 300 es
`,m=[f,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,p=["#define varying in",e.glslVersion===Qh?"":"layout(location = 0) out highp vec4 pc_fragColor;",e.glslVersion===Qh?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+p);let w=b+m+a,_=b+p+o,E=Fd(s,s.VERTEX_SHADER,w),S=Fd(s,s.FRAGMENT_SHADER,_);s.attachShader(v,E),s.attachShader(v,S),e.index0AttributeName!==void 0?s.bindAttribLocation(v,0,e.index0AttributeName):e.hasPositionAttribute===!0&&s.bindAttribLocation(v,0,"position"),s.linkProgram(v);function A(D){if(n.debug.checkShaderErrors){let H=s.getProgramInfoLog(v)||"",z=s.getShaderInfoLog(E)||"",F=s.getShaderInfoLog(S)||"",q=H.trim(),Q=z.trim(),Y=F.trim(),mt=!0,nt=!0;if(s.getProgramParameter(v,s.LINK_STATUS)===!1)if(mt=!1,typeof n.debug.onShaderError=="function")n.debug.onShaderError(s,v,E,S);else{let lt=kd(s,E,"vertex"),ut=kd(s,S,"fragment");ue("WebGLProgram: Shader Error "+s.getError()+" - VALIDATE_STATUS "+s.getProgramParameter(v,s.VALIDATE_STATUS)+`

Material Name: `+D.name+`
Material Type: `+D.type+`

Program Info Log: `+q+`
`+lt+`
`+ut)}else q!==""?oe("WebGLProgram: Program Info Log:",q):(Q===""||Y==="")&&(nt=!1);nt&&(D.diagnostics={runnable:mt,programLog:q,vertexShader:{log:Q,prefix:m},fragmentShader:{log:Y,prefix:p}})}s.deleteShader(E),s.deleteShader(S),x=new Vr(s,v),T=cy(s,v)}let x;this.getUniforms=function(){return x===void 0&&A(this),x};let T;this.getAttributes=function(){return T===void 0&&A(this),T};let C=e.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return C===!1&&(C=s.getProgramParameter(v,Qx)),C},this.destroy=function(){i.releaseStatesOfProgram(this),s.deleteProgram(v),this.program=void 0},this.type=e.shaderType,this.name=e.shaderName,this.id=ty++,this.cacheKey=t,this.usedTimes=1,this.program=v,this.vertexShader=E,this.fragmentShader=S,this}function Ty(n){return n===ws||n===qa||n===Ya}function Ry(n,t,e,i,s,r){let a=new ga,o=new x0,l=new Set,c=[],h=new Map,d=i.logarithmicDepthBuffer,u=i.precision,f={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function g(x){return l.add(x),x===0?"uv":`uv${x}`}function v(x,T,C,D,H,z){let F=D.fog,q=H.geometry,Q=x.isMeshStandardMaterial||x.isMeshLambertMaterial||x.isMeshPhongMaterial?D.environment:null,Y=x.isMeshStandardMaterial||x.isMeshLambertMaterial&&!x.envMap||x.isMeshPhongMaterial&&!x.envMap,mt=t.get(x.envMap||Q,Y),nt=mt&&mt.mapping===Ha?mt.image.height:null,lt=f[x.type];x.precision!==null&&(u=i.getMaxPrecision(x.precision),u!==x.precision&&oe("WebGLProgram.getParameters:",x.precision,"not supported, using",u,"instead."));let ut=q.morphAttributes.position||q.morphAttributes.normal||q.morphAttributes.color,Yt=ut!==void 0?ut.length:0,Ut=0;q.morphAttributes.position!==void 0&&(Ut=1),q.morphAttributes.normal!==void 0&&(Ut=2),q.morphAttributes.color!==void 0&&(Ut=3);let ie,ne,de,it;if(lt){let ft=zn[lt];ie=ft.vertexShader,ne=ft.fragmentShader}else{ie=x.vertexShader,ne=x.fragmentShader;let ft=o.getVertexShaderStage(x),Ft=o.getFragmentShaderStage(x);o.update(x,ft,Ft),de=ft.id,it=Ft.id}let ht=n.getRenderTarget(),Tt=n.state.buffers.depth.getReversed(),tt=H.isInstancedMesh===!0,rt=H.isBatchedMesh===!0,yt=!!x.map,bt=!!x.matcap,P=!!mt,G=!!x.aoMap,st=!!x.lightMap,$=!!x.bumpMap&&x.wireframe===!1,_t=!!x.normalMap,Pt=!!x.displacementMap,Ht=!!x.emissiveMap,kt=!!x.metalnessMap,Wt=!!x.roughnessMap,U=x.anisotropy>0,_e=x.clearcoat>0,ce=x.dispersion>0,R=x.retroreflectivity>0,y=x.iridescence>0,V=x.sheen>0,J=x.transmission>0,ot=U&&!!x.anisotropyMap,Et=_e&&!!x.clearcoatMap,Z=_e&&!!x.clearcoatNormalMap,X=_e&&!!x.clearcoatRoughnessMap,et=y&&!!x.iridescenceMap,xt=y&&!!x.iridescenceThicknessMap,Rt=V&&!!x.sheenColorMap,St=V&&!!x.sheenRoughnessMap,wt=!!x.specularMap,It=!!x.specularColorMap,Qt=!!x.specularIntensityMap,re=J&&!!x.transmissionMap,k=J&&!!x.thicknessMap,Nt=!!x.gradientMap,dt=!!x.alphaMap,Dt=x.alphaTest>0,Ot=!!x.alphaHash,L=!!x.extensions,B=vn;x.toneMapped&&(ht===null||ht.isXRRenderTarget===!0)&&(B=n.toneMapping);let ct={shaderID:lt,shaderType:x.type,shaderName:x.name,vertexShader:ie,fragmentShader:ne,defines:x.defines,customVertexShaderID:de,customFragmentShaderID:it,isRawShaderMaterial:x.isRawShaderMaterial===!0,glslVersion:x.glslVersion,precision:u,batching:rt,batchingColor:rt&&H._colorsTexture!==null,instancing:tt,instancingColor:tt&&H.instanceColor!==null,instancingMorph:tt&&H.morphTexture!==null,outputColorSpace:ht===null?n.outputColorSpace:ht.isXRRenderTarget===!0?ht.texture.colorSpace:Te.workingColorSpace,alphaToCoverage:!!x.alphaToCoverage,map:yt,matcap:bt,envMap:P,envMapMode:P&&mt.mapping,envMapCubeUVHeight:nt,aoMap:G,lightMap:st,bumpMap:$,normalMap:_t,displacementMap:Pt,emissiveMap:Ht,normalMapObjectSpace:_t&&x.normalMapType===rd,normalMapTangentSpace:_t&&x.normalMapType===Hr,packedNormalMap:_t&&x.normalMapType===Hr&&Ty(x.normalMap.format),metalnessMap:kt,roughnessMap:Wt,anisotropy:U,anisotropyMap:ot,clearcoat:_e,clearcoatMap:Et,clearcoatNormalMap:Z,clearcoatRoughnessMap:X,dispersion:ce,retroreflection:R,iridescence:y,iridescenceMap:et,iridescenceThicknessMap:xt,sheen:V,sheenColorMap:Rt,sheenRoughnessMap:St,specularMap:wt,specularColorMap:It,specularIntensityMap:Qt,transmission:J,transmissionMap:re,thicknessMap:k,gradientMap:Nt,opaque:x.transparent===!1&&x.blending===bs&&x.alphaToCoverage===!1,alphaMap:dt,alphaTest:Dt,alphaHash:Ot,combine:x.combine,mapUv:yt&&g(x.map.channel),aoMapUv:G&&g(x.aoMap.channel),lightMapUv:st&&g(x.lightMap.channel),bumpMapUv:$&&g(x.bumpMap.channel),normalMapUv:_t&&g(x.normalMap.channel),displacementMapUv:Pt&&g(x.displacementMap.channel),emissiveMapUv:Ht&&g(x.emissiveMap.channel),metalnessMapUv:kt&&g(x.metalnessMap.channel),roughnessMapUv:Wt&&g(x.roughnessMap.channel),anisotropyMapUv:ot&&g(x.anisotropyMap.channel),clearcoatMapUv:Et&&g(x.clearcoatMap.channel),clearcoatNormalMapUv:Z&&g(x.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:X&&g(x.clearcoatRoughnessMap.channel),iridescenceMapUv:et&&g(x.iridescenceMap.channel),iridescenceThicknessMapUv:xt&&g(x.iridescenceThicknessMap.channel),sheenColorMapUv:Rt&&g(x.sheenColorMap.channel),sheenRoughnessMapUv:St&&g(x.sheenRoughnessMap.channel),specularMapUv:wt&&g(x.specularMap.channel),specularColorMapUv:It&&g(x.specularColorMap.channel),specularIntensityMapUv:Qt&&g(x.specularIntensityMap.channel),transmissionMapUv:re&&g(x.transmissionMap.channel),thicknessMapUv:k&&g(x.thicknessMap.channel),alphaMapUv:dt&&g(x.alphaMap.channel),vertexTangents:!!q.attributes.tangent&&(_t||U),vertexNormals:!!q.attributes.normal,vertexColors:x.vertexColors,vertexAlphas:x.vertexColors===!0&&!!q.attributes.color&&q.attributes.color.itemSize===4,pointsUvs:H.isPoints===!0&&!!q.attributes.uv&&(yt||dt),fog:!!F,useFog:x.fog===!0,fogExp2:!!F&&F.isFogExp2,flatShading:x.wireframe===!1&&(x.flatShading===!0||q.attributes.normal===void 0&&_t===!1&&(x.isMeshLambertMaterial||x.isMeshPhongMaterial||x.isMeshStandardMaterial||x.isMeshPhysicalMaterial)),sizeAttenuation:x.sizeAttenuation===!0,logarithmicDepthBuffer:d,reversedDepthBuffer:Tt,skinning:H.isSkinnedMesh===!0,hasPositionAttribute:q.attributes.position!==void 0,morphTargets:q.morphAttributes.position!==void 0,morphNormals:q.morphAttributes.normal!==void 0,morphColors:q.morphAttributes.color!==void 0,morphTargetsCount:Yt,morphTextureStride:Ut,numSunLights:T.sun.length,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numSunLightShadows:T.sunShadowMap.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numLightProbeGrids:z.length,numClippingPlanes:r.numPlanes,numClipIntersection:r.numIntersection,dithering:x.dithering,shadowMapEnabled:n.shadowMap.enabled&&C.length>0,shadowMapType:n.shadowMap.type,toneMapping:B,decodeVideoTexture:yt&&x.map.isVideoTexture===!0&&Te.getTransfer(x.map.colorSpace)===We,decodeVideoTextureEmissive:Ht&&x.emissiveMap.isVideoTexture===!0&&Te.getTransfer(x.emissiveMap.colorSpace)===We,premultipliedAlpha:x.premultipliedAlpha,doubleSided:x.side===ke,flipSided:x.side===Ze,useDepthPacking:x.depthPacking>=0,depthPacking:x.depthPacking||0,index0AttributeName:x.index0AttributeName,extensionClipCullDistance:L&&x.extensions.clipCullDistance===!0&&e.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(L&&x.extensions.multiDraw===!0||rt)&&e.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:e.has("KHR_parallel_shader_compile"),customProgramCacheKey:x.customProgramCacheKey()};return ct.vertexUv1s=l.has(1),ct.vertexUv2s=l.has(2),ct.vertexUv3s=l.has(3),l.clear(),ct}function m(x){let T=[];if(x.shaderID?T.push(x.shaderID):(T.push(x.customVertexShaderID),T.push(x.customFragmentShaderID)),x.defines!==void 0)for(let C in x.defines)T.push(C),T.push(x.defines[C]);return x.isRawShaderMaterial===!1&&(p(T,x),b(T,x),T.push(n.outputColorSpace)),T.push(x.customProgramCacheKey),T.join()}function p(x,T){x.push(T.precision),x.push(T.outputColorSpace),x.push(T.envMapMode),x.push(T.envMapCubeUVHeight),x.push(T.mapUv),x.push(T.alphaMapUv),x.push(T.lightMapUv),x.push(T.aoMapUv),x.push(T.bumpMapUv),x.push(T.normalMapUv),x.push(T.displacementMapUv),x.push(T.emissiveMapUv),x.push(T.metalnessMapUv),x.push(T.roughnessMapUv),x.push(T.anisotropyMapUv),x.push(T.clearcoatMapUv),x.push(T.clearcoatNormalMapUv),x.push(T.clearcoatRoughnessMapUv),x.push(T.iridescenceMapUv),x.push(T.iridescenceThicknessMapUv),x.push(T.sheenColorMapUv),x.push(T.sheenRoughnessMapUv),x.push(T.specularMapUv),x.push(T.specularColorMapUv),x.push(T.specularIntensityMapUv),x.push(T.transmissionMapUv),x.push(T.thicknessMapUv),x.push(T.combine),x.push(T.fogExp2),x.push(T.sizeAttenuation),x.push(T.morphTargetsCount),x.push(T.morphAttributeCount),x.push(T.numSunLights),x.push(T.numDirLights),x.push(T.numPointLights),x.push(T.numSpotLights),x.push(T.numSpotLightMaps),x.push(T.numHemiLights),x.push(T.numRectAreaLights),x.push(T.numSunLightShadows),x.push(T.numDirLightShadows),x.push(T.numPointLightShadows),x.push(T.numSpotLightShadows),x.push(T.numSpotLightShadowsWithMaps),x.push(T.numLightProbes),x.push(T.shadowMapType),x.push(T.toneMapping),x.push(T.numClippingPlanes),x.push(T.numClipIntersection),x.push(T.depthPacking)}function b(x,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.retroreflection&&a.enable(24),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),T.packedNormalMap&&a.enable(22),T.vertexNormals&&a.enable(23),x.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),T.numLightProbeGrids>0&&a.enable(22),T.hasPositionAttribute&&a.enable(23),x.push(a.mask)}function w(x){let T=f[x.type],C;if(T){let D=zn[T];C=Sd.clone(D.uniforms)}else C=x.uniforms;return C}function _(x,T){let C=h.get(T);return C!==void 0?++C.usedTimes:(C=new Ey(n,T,x,s),c.push(C),h.set(T,C)),C}function E(x){if(--x.usedTimes===0){let T=c.indexOf(x);c[T]=c[c.length-1],c.pop(),h.delete(x.cacheKey),x.destroy()}}function S(x){o.remove(x)}function A(){o.dispose()}return{getParameters:v,getProgramCacheKey:m,getUniforms:w,acquireProgram:_,releaseProgram:E,releaseShaderCache:S,programs:c,dispose:A}}function Ay(){let n=new WeakMap;function t(a){return n.has(a)}function e(a){let o=n.get(a);return o===void 0&&(o={},n.set(a,o)),o}function i(a){n.delete(a)}function s(a,o,l){n.get(a)[o]=l}function r(){n=new WeakMap}return{has:t,get:e,remove:i,update:s,dispose:r}}function Cy(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.material.id!==t.material.id?n.material.id-t.material.id:n.materialVariant!==t.materialVariant?n.materialVariant-t.materialVariant:n.z!==t.z?n.z-t.z:n.id-t.id}function Vd(n,t){return n.groupOrder!==t.groupOrder?n.groupOrder-t.groupOrder:n.renderOrder!==t.renderOrder?n.renderOrder-t.renderOrder:n.z!==t.z?t.z-n.z:n.id-t.id}function Wd(){let n=[],t=0,e=[],i=[],s=[];function r(){t=0,e.length=0,i.length=0,s.length=0}function a(u){let f=0;return u.isInstancedMesh&&(f+=2),u.isSkinnedMesh&&(f+=1),f}function o(u,f,g,v,m,p){let b=n[t];return b===void 0?(b={id:u.id,object:u,geometry:f,material:g,materialVariant:a(u),groupOrder:v,renderOrder:u.renderOrder,z:m,group:p},n[t]=b):(b.id=u.id,b.object=u,b.geometry=f,b.material=g,b.materialVariant=a(u),b.groupOrder=v,b.renderOrder=u.renderOrder,b.z=m,b.group=p),t++,b}function l(u,f,g,v,m,p,b){b.reversedDepth===!0&&(m=-m);let w=o(u,f,g,v,m,p);g.transmission>0?i.push(w):g.transparent===!0?s.push(w):e.push(w)}function c(u,f,g,v,m,p){let b=o(u,f,g,v,m,p);g.transmission>0?i.unshift(b):g.transparent===!0?s.unshift(b):e.unshift(b)}function h(u,f){e.length>1&&e.sort(u||Cy),i.length>1&&i.sort(f||Vd),s.length>1&&s.sort(f||Vd)}function d(){for(let u=t,f=n.length;u<f;u++){let g=n[u];if(g.id===null)break;g.id=null,g.object=null,g.geometry=null,g.material=null,g.group=null}}return{opaque:e,transmissive:i,transparent:s,init:r,push:l,unshift:c,finish:d,sort:h}}function Ly(){let n=new WeakMap;function t(i,s){let r=n.get(i),a;return r===void 0?(a=new Wd,n.set(i,[a])):s>=r.length?(a=new Wd,r.push(a)):a=r[s],a}function e(){n=new WeakMap}return{get:t,dispose:e}}function Py(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={direction:new I,color:new gt};break;case"SpotLight":e={position:new I,direction:new I,color:new gt,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":e={position:new I,color:new gt,distance:0,decay:0};break;case"HemisphereLight":e={direction:new I,skyColor:new gt,groundColor:new gt};break;case"RectAreaLight":e={color:new gt,position:new I,halfWidth:new I,halfHeight:new I};break}return n[t.id]=e,e}}}function Iy(){let n={};return{get:function(t){if(n[t.id]!==void 0)return n[t.id];let e;switch(t.type){case"SunLight":case"DirectionalLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"SpotLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt};break;case"PointLight":e={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new vt,shadowCameraNear:1,shadowCameraFar:1e3};break}return n[t.id]=e,e}}}function Uy(n,t){return(t.castShadow?2:0)-(n.castShadow?2:0)+(t.map?1:0)-(n.map?1:0)}function Ny(n){let t=new Py,e=Iy(),i={version:0,hash:{sunLength:-1,directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numSunShadows:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],sun:[],sunShadow:[],sunShadowMap:[],sunShadowMatrix:[],sunShadowCascade:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new I);let s=new I,r=new Ie,a=new Ie;function o(c){let h=0,d=0,u=0;for(let H=0;H<9;H++)i.probe[H].set(0,0,0);let f=0,g=0,v=0,m=0,p=0,b=0,w=0,_=0,E=0,S=0,A=0,x=0,T=0,C=0;c.sort(Uy);for(let H=0,z=c.length;H<z;H++){let F=c[H],q=F.color,Q=F.intensity,Y=F.distance,mt=null;if(F.shadow&&F.shadow.map&&(F.shadow.map.texture.format===ws?mt=F.shadow.map.texture:mt=F.shadow.map.depthTexture||F.shadow.map.texture),F.isAmbientLight)h+=q.r*Q,d+=q.g*Q,u+=q.b*Q;else if(F.isLightProbe){for(let nt=0;nt<9;nt++)i.probe[nt].addScaledVector(F.sh.coefficients[nt],Q);C++}else if(F.isSunLight){let nt=t.get(F);if(nt.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let lt=F.shadow,ut=e.get(F);ut.shadowIntensity=lt.intensity,ut.shadowBias=lt.bias,ut.shadowNormalBias=lt.normalBias,ut.shadowRadius=lt.radius,ut.shadowMapSize.copy(lt.mapSize).multiply(lt.getFrameExtents()),i.sunShadow[g]=ut,i.sunShadowMap[g]=mt;let Yt=lt.getViewportCount();for(let Ut=0;Ut<Yt;Ut++)i.sunShadowMatrix[v+Ut]=lt.getMatrix(Ut),i.sunShadowCascade[v+Ut]=lt._cascadeData[Ut];v+=Yt,g++}i.sun[f]=nt,f++}else if(F.isDirectionalLight){let nt=t.get(F);if(nt.color.copy(F.color).multiplyScalar(F.intensity),F.castShadow){let lt=F.shadow,ut=e.get(F);ut.shadowIntensity=lt.intensity,ut.shadowBias=lt.bias,ut.shadowNormalBias=lt.normalBias,ut.shadowRadius=lt.radius,ut.shadowMapSize=lt.mapSize,i.directionalShadow[m]=ut,i.directionalShadowMap[m]=mt,i.directionalShadowMatrix[m]=F.shadow.matrix,E++}i.directional[m]=nt,m++}else if(F.isSpotLight){let nt=t.get(F);nt.position.setFromMatrixPosition(F.matrixWorld),nt.color.copy(q).multiplyScalar(Q),nt.distance=Y,nt.coneCos=Math.cos(F.angle),nt.penumbraCos=Math.cos(F.angle*(1-F.penumbra)),nt.decay=F.decay,i.spot[b]=nt;let lt=F.shadow;if(F.map&&(i.spotLightMap[x]=F.map,x++,lt.updateMatrices(F),F.castShadow&&T++),i.spotLightMatrix[b]=lt.matrix,F.castShadow){let ut=e.get(F);ut.shadowIntensity=lt.intensity,ut.shadowBias=lt.bias,ut.shadowNormalBias=lt.normalBias,ut.shadowRadius=lt.radius,ut.shadowMapSize=lt.mapSize,i.spotShadow[b]=ut,i.spotShadowMap[b]=mt,A++}b++}else if(F.isRectAreaLight){let nt=t.get(F);nt.color.copy(q).multiplyScalar(Q),nt.halfWidth.set(F.width*.5,0,0),nt.halfHeight.set(0,F.height*.5,0),i.rectArea[w]=nt,w++}else if(F.isPointLight){let nt=t.get(F);if(nt.color.copy(F.color).multiplyScalar(F.intensity),nt.distance=F.distance,nt.decay=F.decay,F.castShadow){let lt=F.shadow,ut=e.get(F);ut.shadowIntensity=lt.intensity,ut.shadowBias=lt.bias,ut.shadowNormalBias=lt.normalBias,ut.shadowRadius=lt.radius,ut.shadowMapSize=lt.mapSize,ut.shadowCameraNear=lt.camera.near,ut.shadowCameraFar=lt.camera.far,i.pointShadow[p]=ut,i.pointShadowMap[p]=mt,i.pointShadowMatrix[p]=F.shadow.matrix,S++}i.point[p]=nt,p++}else if(F.isHemisphereLight){let nt=t.get(F);nt.skyColor.copy(F.color).multiplyScalar(Q),nt.groundColor.copy(F.groundColor).multiplyScalar(Q),i.hemi[_]=nt,_++}}w>0&&(n.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=Gt.LTC_FLOAT_1,i.rectAreaLTC2=Gt.LTC_FLOAT_2):(i.rectAreaLTC1=Gt.LTC_HALF_1,i.rectAreaLTC2=Gt.LTC_HALF_2)),i.ambient[0]=h,i.ambient[1]=d,i.ambient[2]=u;let D=i.hash;(D.sunLength!==f||D.directionalLength!==m||D.pointLength!==p||D.spotLength!==b||D.rectAreaLength!==w||D.hemiLength!==_||D.numSunShadows!==g||D.numDirectionalShadows!==E||D.numPointShadows!==S||D.numSpotShadows!==A||D.numSpotMaps!==x||D.numLightProbes!==C)&&(i.sun.length=f,i.directional.length=m,i.spot.length=b,i.rectArea.length=w,i.point.length=p,i.hemi.length=_,i.sunShadow.length=g,i.sunShadowMap.length=g,i.sunShadowMatrix.length=v,i.sunShadowCascade.length=v,i.directionalShadow.length=E,i.directionalShadowMap.length=E,i.directionalShadowMatrix.length=E,i.pointShadow.length=S,i.pointShadowMap.length=S,i.pointShadowMatrix.length=S,i.spotShadow.length=A,i.spotShadowMap.length=A,i.spotLightMatrix.length=A+x-T,i.spotLightMap.length=x,i.numSpotLightShadowsWithMaps=T,i.numLightProbes=C,D.sunLength=f,D.directionalLength=m,D.pointLength=p,D.spotLength=b,D.rectAreaLength=w,D.hemiLength=_,D.numSunShadows=g,D.numDirectionalShadows=E,D.numPointShadows=S,D.numSpotShadows=A,D.numSpotMaps=x,D.numLightProbes=C,i.version=Dy++)}function l(c,h){let d=0,u=0,f=0,g=0,v=0,m=0,p=h.matrixWorldInverse;for(let b=0,w=c.length;b<w;b++){let _=c[b];if(_.isSunLight){let E=i.sun[d];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(p),d++}else if(_.isDirectionalLight){let E=i.directional[u];E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),u++}else if(_.isSpotLight){let E=i.spot[g];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),E.direction.setFromMatrixPosition(_.matrixWorld),s.setFromMatrixPosition(_.target.matrixWorld),E.direction.sub(s),E.direction.transformDirection(p),g++}else if(_.isRectAreaLight){let E=i.rectArea[v];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),a.identity(),r.copy(_.matrixWorld),r.premultiply(p),a.extractRotation(r),E.halfWidth.set(_.width*.5,0,0),E.halfHeight.set(0,_.height*.5,0),E.halfWidth.applyMatrix4(a),E.halfHeight.applyMatrix4(a),v++}else if(_.isPointLight){let E=i.point[f];E.position.setFromMatrixPosition(_.matrixWorld),E.position.applyMatrix4(p),f++}else if(_.isHemisphereLight){let E=i.hemi[m];E.direction.setFromMatrixPosition(_.matrixWorld),E.direction.transformDirection(p),m++}}}return{setup:o,setupView:l,state:i}}function Xd(n){let t=new Ny(n),e=[],i=[],s=[];function r(u){d.camera=u,e.length=0,i.length=0,s.length=0}function a(u){e.push(u)}function o(u){i.push(u)}function l(u){s.push(u)}function c(){t.setup(e)}function h(u){t.setupView(e,u)}let d={lightsArray:e,shadowsArray:i,lightProbeGridArray:s,camera:null,lights:t,transmissionRenderTarget:{},textureUnits:0};return{init:r,state:d,setupLights:c,setupLightsView:h,pushLight:a,pushShadow:o,pushLightProbeGrid:l}}function Fy(n){let t=new WeakMap;function e(s,r=0){let a=t.get(s),o;return a===void 0?(o=new Xd(n),t.set(s,[o])):r>=a.length?(o=new Xd(n),a.push(o)):o=a[r],o}function i(){t=new WeakMap}return{get:e,dispose:i}}function zy(n,t,e){let i=new Ar,s=new vt,r=new vt,a=new Qe,o=new dl,l=new fl,c={},h=e.maxTextureSize,d={[Vi]:Ze,[Ze]:Vi,[ke]:ke},u=new ai({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new vt},radius:{value:4}},vertexShader:By,fragmentShader:ky}),f=u.clone();f.defines.HORIZONTAL_PASS=1;let g=new xe;g.setAttribute("position",new He(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));let v=new At(g,u),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=ka;let p=this.type;this.render=function(S,A,x){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||S.length===0)return;this.type===Fu&&(oe("WebGLShadowMap: PCFSoftShadowMap has been removed. Using PCFShadowMap instead."),this.type=ka);let T=n.getRenderTarget(),C=n.getActiveCubeFace(),D=n.getActiveMipmapLevel(),H=n.state;H.setBlending(On),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);let z=p!==this.type;z&&A.traverse(function(F){F.material&&(Array.isArray(F.material)?F.material.forEach(q=>q.needsUpdate=!0):F.material.needsUpdate=!0)});for(let F=0,q=S.length;F<q;F++){let Q=S[F],Y=Q.shadow;if(Y===void 0){oe("WebGLShadowMap:",Q,"has no shadow.");continue}if(Y.autoUpdate===!1&&Y.needsUpdate===!1)continue;s.copy(Y.mapSize);let mt=Y.getFrameExtents();s.multiply(mt),r.copy(Y.mapSize),(s.x>h||s.y>h)&&(s.x>h&&(r.x=Math.floor(h/mt.x),s.x=r.x*mt.x,Y.mapSize.x=r.x),s.y>h&&(r.y=Math.floor(h/mt.y),s.y=r.y*mt.y,Y.mapSize.y=r.y));let nt=n.state.buffers.depth.getReversed();if(Y.camera._reversedDepth=nt,Y.map===null||z===!0){if(Y.map!==null&&(Y.map.depthTexture!==null&&(Y.map.depthTexture.dispose(),Y.map.depthTexture=null),Y.map.dispose()),this.type===Fr){if(Q.isPointLight){oe("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}Y.map=new Hi(s.x,s.y,{format:ws,type:bn,minFilter:Ci,magFilter:Ci,generateMipmaps:!1}),Y.map.texture.name=Q.name+".shadowMap",Y.map.depthTexture=new gs(s.x,s.y,an),Y.map.depthTexture.name=Q.name+".shadowMapDepth",Y.map.depthTexture.format=Pn,Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=pi,Y.map.depthTexture.magFilter=pi}else Q.isPointLight?(Y.map=new gc(s.x),Y.map.depthTexture=new sl(s.x,_n)):(Y.map=new Hi(s.x,s.y),Y.map.depthTexture=new gs(s.x,s.y,_n)),Y.map.depthTexture.name=Q.name+".shadowMap",Y.map.depthTexture.format=Pn,this.type===ka?(Y.map.depthTexture.compareFunction=nt?fc:dc,Y.map.depthTexture.minFilter=Ci,Y.map.depthTexture.magFilter=Ci):(Y.map.depthTexture.compareFunction=null,Y.map.depthTexture.minFilter=pi,Y.map.depthTexture.magFilter=pi);Y.camera.updateProjectionMatrix()}Y.map.isWebGLCubeRenderTarget!==!0&&(Y.map.width!==s.x||Y.map.height!==s.y)&&Y.map.setSize(s.x,s.y);let lt=Y.map.isWebGLCubeRenderTarget?6:Y.getViewportCount();Q.isPointLight!==!0&&Y.updateMatrices(Q,x);for(let ut=0;ut<lt;ut++){let Yt=Y.getCamera(ut);if(Q.isPointLight){let Ut=Y.camera,ie=Y.matrix,ne=Q.distance||Ut.far;ne!==Ut.far&&(Ut.far=ne,Ut.updateProjectionMatrix()),$a.setFromMatrixPosition(Q.matrixWorld),Ut.position.copy($a),u0.copy(Ut.position),u0.add(Oy[ut]),Ut.up.copy(Hy[ut]),Ut.lookAt(u0),Ut.updateMatrixWorld(),ie.makeTranslation(-$a.x,-$a.y,-$a.z),qd.multiplyMatrices(Ut.projectionMatrix,Ut.matrixWorldInverse),Y._frustum.setFromProjectionMatrix(qd,Ut.coordinateSystem,Ut.reversedDepth)}if(Y.map.isWebGLCubeRenderTarget)n.setRenderTarget(Y.map,ut),n.clear();else{ut===0&&(n.setRenderTarget(Y.map),n.clear());let Ut=Y.getViewport(ut);a.set(r.x*Ut.x,r.y*Ut.y,r.x*Ut.z,r.y*Ut.w),H.viewport(a)}i=Y.getFrustum(ut),_(A,x,Yt,Q,this.type)}Y.isPointLightShadow!==!0&&this.type===Fr&&b(Y,x),Y.needsUpdate=!1}p=this.type,m.needsUpdate=!1,n.setRenderTarget(T,C,D)};function b(S,A){let x=t.update(v);u.defines.VSM_SAMPLES!==S.blurSamples&&(u.defines.VSM_SAMPLES=S.blurSamples,f.defines.VSM_SAMPLES=S.blurSamples,u.needsUpdate=!0,f.needsUpdate=!0),S.mapPass===null?S.mapPass=new Hi(s.x,s.y,{format:ws,type:bn}):(S.mapPass.width!==S.map.width||S.mapPass.height!==S.map.height)&&S.mapPass.setSize(S.map.width,S.map.height),u.uniforms.shadow_pass.value=S.map.depthTexture,u.uniforms.resolution.value.set(S.map.width,S.map.height),u.uniforms.radius.value=S.radius,n.setRenderTarget(S.mapPass),n.clear(),n.renderBufferDirect(A,null,x,u,v,null),f.uniforms.shadow_pass.value=S.mapPass.texture,f.uniforms.resolution.value.set(S.map.width,S.map.height),f.uniforms.radius.value=S.radius,n.setRenderTarget(S.map),n.clear(),n.renderBufferDirect(A,null,x,f,v,null)}function w(S,A,x,T){let C=null,D=x.isPointLight===!0?S.customDistanceMaterial:S.customDepthMaterial;if(D!==void 0)C=D;else if(C=x.isPointLight===!0?l:o,n.localClippingEnabled&&A.clipShadows===!0&&Array.isArray(A.clippingPlanes)&&A.clippingPlanes.length!==0||A.displacementMap&&A.displacementScale!==0||A.alphaMap&&A.alphaTest>0||A.map&&A.alphaTest>0||A.alphaToCoverage===!0){let H=C.uuid,z=A.uuid,F=c[H];F===void 0&&(F={},c[H]=F);let q=F[z];q===void 0&&(q=C.clone(),F[z]=q,A.addEventListener("dispose",E)),C=q}if(C.visible=A.visible,C.wireframe=A.wireframe,T===Fr?C.side=A.shadowSide!==null?A.shadowSide:A.side:C.side=A.shadowSide!==null?A.shadowSide:d[A.side],C.alphaMap=A.alphaMap,C.alphaTest=A.alphaToCoverage===!0?.5:A.alphaTest,C.map=A.map,C.clipShadows=A.clipShadows,C.clippingPlanes=A.clippingPlanes,C.clipIntersection=A.clipIntersection,C.displacementMap=A.displacementMap,C.displacementScale=A.displacementScale,C.displacementBias=A.displacementBias,C.wireframeLinewidth=A.wireframeLinewidth,C.linewidth=A.linewidth,x.isPointLight===!0&&C.isMeshDistanceMaterial===!0){let H=n.properties.get(C);H.light=x}return C}function _(S,A,x,T,C){if(S.visible===!1)return;if(S.layers.test(A.layers)&&(S.isMesh||S.isLine||S.isPoints)&&(S.castShadow||S.receiveShadow&&C===Fr)&&(!S.frustumCulled||S.intersectsFrustum(i))){S.modelViewMatrix.multiplyMatrices(x.matrixWorldInverse,S.matrixWorld);let z=t.update(S),F=S.material;if(Array.isArray(F)){let q=z.groups;for(let Q=0,Y=q.length;Q<Y;Q++){let mt=q[Q],nt=F[mt.materialIndex];if(nt&&nt.visible){let lt=w(S,nt,T,C);S.onBeforeShadow(n,S,A,x,z,lt,mt),n.renderBufferDirect(x,null,z,lt,S,mt),S.onAfterShadow(n,S,A,x,z,lt,mt)}}}else if(F.visible){let q=w(S,F,T,C);S.onBeforeShadow(n,S,A,x,z,q,null),n.renderBufferDirect(x,null,z,q,S,null),S.onAfterShadow(n,S,A,x,z,q,null)}}let H=S.children;for(let z=0,F=H.length;z<F;z++)_(H[z],A,x,T,C)}function E(S){S.target.removeEventListener("dispose",E);for(let x in c){let T=c[x],C=S.target.uuid;C in T&&(T[C].dispose(),delete T[C])}}}function Gy(n,t){function e(){let k=!1,Nt=new Qe,dt=null,Dt=new Qe(0,0,0,0);return{setMask:function(Ot){dt!==Ot&&!k&&(n.colorMask(Ot,Ot,Ot,Ot),dt=Ot)},setLocked:function(Ot){k=Ot},setClear:function(Ot,L,B,ct,ft){ft===!0&&(Ot*=ct,L*=ct,B*=ct),Nt.set(Ot,L,B,ct),Dt.equals(Nt)===!1&&(n.clearColor(Ot,L,B,ct),Dt.copy(Nt))},reset:function(){k=!1,dt=null,Dt.set(-1,0,0,0)}}}function i(){let k=!1,Nt=!1,dt=null,Dt=null,Ot=null;return{setReversed:function(L){if(Nt!==L){let B=t.get("EXT_clip_control");L?B.clipControlEXT(B.LOWER_LEFT_EXT,B.ZERO_TO_ONE_EXT):B.clipControlEXT(B.LOWER_LEFT_EXT,B.NEGATIVE_ONE_TO_ONE_EXT),Nt=L;let ct=Ot;Ot=null,this.setClear(ct)}},getReversed:function(){return Nt},setTest:function(L){L?ht(n.DEPTH_TEST):Tt(n.DEPTH_TEST)},setMask:function(L){dt!==L&&!k&&(n.depthMask(L),dt=L)},setFunc:function(L){if(Nt&&(L=gd[L]),Dt!==L){switch(L){case Vo:n.depthFunc(n.NEVER);break;case Wo:n.depthFunc(n.ALWAYS);break;case Xo:n.depthFunc(n.LESS);break;case vr:n.depthFunc(n.LEQUAL);break;case qo:n.depthFunc(n.EQUAL);break;case Yo:n.depthFunc(n.GEQUAL);break;case Zo:n.depthFunc(n.GREATER);break;case Jo:n.depthFunc(n.NOTEQUAL);break;default:n.depthFunc(n.LEQUAL)}Dt=L}},setLocked:function(L){k=L},setClear:function(L){Ot!==L&&(Ot=L,Nt&&(L=1-L),n.clearDepth(L))},reset:function(){k=!1,dt=null,Dt=null,Ot=null,Nt=!1}}}function s(){let k=!1,Nt=null,dt=null,Dt=null,Ot=null,L=null,B=null,ct=null,ft=null;return{setTest:function(Ft){k||(Ft?ht(n.STENCIL_TEST):Tt(n.STENCIL_TEST))},setMask:function(Ft){Nt!==Ft&&!k&&(n.stencilMask(Ft),Nt=Ft)},setFunc:function(Ft,Zt,he){(dt!==Ft||Dt!==Zt||Ot!==he)&&(n.stencilFunc(Ft,Zt,he),dt=Ft,Dt=Zt,Ot=he)},setOp:function(Ft,Zt,he){(L!==Ft||B!==Zt||ct!==he)&&(n.stencilOp(Ft,Zt,he),L=Ft,B=Zt,ct=he)},setLocked:function(Ft){k=Ft},setClear:function(Ft){ft!==Ft&&(n.clearStencil(Ft),ft=Ft)},reset:function(){k=!1,Nt=null,dt=null,Dt=null,Ot=null,L=null,B=null,ct=null,ft=null}}}let r=new e,a=new i,o=new s,l=new WeakMap,c=new WeakMap,h={},d={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,b=null,w=null,_=null,E=null,S=null,A=null,x=new gt(0,0,0),T=0,C=!1,D=null,H=null,z=null,F=null,q=null,Q=n.getParameter(n.MAX_COMBINED_TEXTURE_IMAGE_UNITS),Y=!1,mt=0,nt=n.getParameter(n.VERSION);nt.indexOf("WebGL")!==-1?(mt=parseFloat(/^WebGL (\d)/.exec(nt)[1]),Y=mt>=1):nt.indexOf("OpenGL ES")!==-1&&(mt=parseFloat(/^OpenGL ES (\d)/.exec(nt)[1]),Y=mt>=2);let lt=null,ut={},Yt=n.getParameter(n.SCISSOR_BOX),Ut=n.getParameter(n.VIEWPORT),ie=new Qe().fromArray(Yt),ne=new Qe().fromArray(Ut);function de(k,Nt,dt,Dt){let Ot=new Uint8Array(4),L=n.createTexture();n.bindTexture(k,L),n.texParameteri(k,n.TEXTURE_MIN_FILTER,n.NEAREST),n.texParameteri(k,n.TEXTURE_MAG_FILTER,n.NEAREST);for(let B=0;B<dt;B++)k===n.TEXTURE_3D||k===n.TEXTURE_2D_ARRAY?n.texImage3D(Nt,0,n.RGBA,1,1,Dt,0,n.RGBA,n.UNSIGNED_BYTE,Ot):n.texImage2D(Nt+B,0,n.RGBA,1,1,0,n.RGBA,n.UNSIGNED_BYTE,Ot);return L}let it={};it[n.TEXTURE_2D]=de(n.TEXTURE_2D,n.TEXTURE_2D,1),it[n.TEXTURE_CUBE_MAP]=de(n.TEXTURE_CUBE_MAP,n.TEXTURE_CUBE_MAP_POSITIVE_X,6),it[n.TEXTURE_2D_ARRAY]=de(n.TEXTURE_2D_ARRAY,n.TEXTURE_2D_ARRAY,1,1),it[n.TEXTURE_3D]=de(n.TEXTURE_3D,n.TEXTURE_3D,1,1),r.setClear(0,0,0,1),a.setClear(1),o.setClear(0),ht(n.DEPTH_TEST),a.setFunc(vr),$(!1),_t(Uh),ht(n.CULL_FACE),G(On);function ht(k){h[k]!==!0&&(n.enable(k),h[k]=!0)}function Tt(k){h[k]!==!1&&(n.disable(k),h[k]=!1)}function tt(k,Nt){return u[k]!==Nt?(n.bindFramebuffer(k,Nt),u[k]=Nt,k===n.DRAW_FRAMEBUFFER&&(u[n.FRAMEBUFFER]=Nt),k===n.FRAMEBUFFER&&(u[n.DRAW_FRAMEBUFFER]=Nt),!0):!1}function rt(k,Nt){let dt=g,Dt=!1;if(k){dt=f.get(Nt),dt===void 0&&(dt=[],f.set(Nt,dt));let Ot=k.textures;if(dt.length!==Ot.length||dt[0]!==n.COLOR_ATTACHMENT0){for(let L=0,B=Ot.length;L<B;L++)dt[L]=n.COLOR_ATTACHMENT0+L;dt.length=Ot.length,Dt=!0}}else dt[0]!==n.BACK&&(dt[0]=n.BACK,Dt=!0);Dt&&n.drawBuffers(dt)}function yt(k){return v!==k?(n.useProgram(k),v=k,!0):!1}let bt={[Vs]:n.FUNC_ADD,[ku]:n.FUNC_SUBTRACT,[Ou]:n.FUNC_REVERSE_SUBTRACT};bt[Hu]=n.MIN,bt[zu]=n.MAX;let P={[Gu]:n.ZERO,[Vu]:n.ONE,[Wu]:n.SRC_COLOR,[Bh]:n.SRC_ALPHA,[$u]:n.SRC_ALPHA_SATURATE,[Zu]:n.DST_COLOR,[qu]:n.DST_ALPHA,[Xu]:n.ONE_MINUS_SRC_COLOR,[kh]:n.ONE_MINUS_SRC_ALPHA,[Ju]:n.ONE_MINUS_DST_COLOR,[Yu]:n.ONE_MINUS_DST_ALPHA,[ju]:n.CONSTANT_COLOR,[Ku]:n.ONE_MINUS_CONSTANT_COLOR,[Qu]:n.CONSTANT_ALPHA,[td]:n.ONE_MINUS_CONSTANT_ALPHA};function G(k,Nt,dt,Dt,Ot,L,B,ct,ft,Ft){if(k===On){m===!0&&(Tt(n.BLEND),m=!1);return}if(m===!1&&(ht(n.BLEND),m=!0),k!==Bu){if(k!==p||Ft!==C){if((b!==Vs||E!==Vs)&&(n.blendEquation(n.FUNC_ADD),b=Vs,E=Vs),Ft)switch(k){case bs:n.blendFuncSeparate(n.ONE,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xe:n.blendFunc(n.ONE,n.ONE);break;case Nh:n.blendFuncSeparate(n.ZERO,n.ONE_MINUS_SRC_COLOR,n.ZERO,n.ONE);break;case Fh:n.blendFuncSeparate(n.DST_COLOR,n.ONE_MINUS_SRC_ALPHA,n.ZERO,n.ONE);break;default:ue("WebGLState: Invalid blending: ",k);break}else switch(k){case bs:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE_MINUS_SRC_ALPHA,n.ONE,n.ONE_MINUS_SRC_ALPHA);break;case Xe:n.blendFuncSeparate(n.SRC_ALPHA,n.ONE,n.ONE,n.ONE);break;case Nh:ue("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case Fh:ue("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:ue("WebGLState: Invalid blending: ",k);break}w=null,_=null,S=null,A=null,x.set(0,0,0),T=0,p=k,C=Ft}return}Ot=Ot||Nt,L=L||dt,B=B||Dt,(Nt!==b||Ot!==E)&&(n.blendEquationSeparate(bt[Nt],bt[Ot]),b=Nt,E=Ot),(dt!==w||Dt!==_||L!==S||B!==A)&&(n.blendFuncSeparate(P[dt],P[Dt],P[L],P[B]),w=dt,_=Dt,S=L,A=B),(ct.equals(x)===!1||ft!==T)&&(n.blendColor(ct.r,ct.g,ct.b,ft),x.copy(ct),T=ft),p=k,C=!1}function st(k,Nt){k.side===ke?Tt(n.CULL_FACE):ht(n.CULL_FACE);let dt=k.side===Ze;Nt&&(dt=!dt),$(dt),k.blending===bs&&k.transparent===!1?G(On):G(k.blending,k.blendEquation,k.blendSrc,k.blendDst,k.blendEquationAlpha,k.blendSrcAlpha,k.blendDstAlpha,k.blendColor,k.blendAlpha,k.premultipliedAlpha),a.setFunc(k.depthFunc),a.setTest(k.depthTest),a.setMask(k.depthWrite),r.setMask(k.colorWrite);let Dt=k.stencilWrite;o.setTest(Dt),Dt&&(o.setMask(k.stencilWriteMask),o.setFunc(k.stencilFunc,k.stencilRef,k.stencilFuncMask),o.setOp(k.stencilFail,k.stencilZFail,k.stencilZPass)),Ht(k.polygonOffset,k.polygonOffsetFactor,k.polygonOffsetUnits),k.alphaToCoverage===!0?ht(n.SAMPLE_ALPHA_TO_COVERAGE):Tt(n.SAMPLE_ALPHA_TO_COVERAGE)}function $(k){D!==k&&(k?n.frontFace(n.CW):n.frontFace(n.CCW),D=k)}function _t(k){k!==Uu?(ht(n.CULL_FACE),k!==H&&(k===Uh?n.cullFace(n.BACK):k===Nu?n.cullFace(n.FRONT):n.cullFace(n.FRONT_AND_BACK))):Tt(n.CULL_FACE),H=k}function Pt(k){k!==z&&(Y&&n.lineWidth(k),z=k)}function Ht(k,Nt,dt){k?(ht(n.POLYGON_OFFSET_FILL),(F!==Nt||q!==dt)&&(F=Nt,q=dt,a.getReversed()&&(Nt=-Nt),n.polygonOffset(Nt,dt))):Tt(n.POLYGON_OFFSET_FILL)}function kt(k){k?ht(n.SCISSOR_TEST):Tt(n.SCISSOR_TEST)}function Wt(k){k===void 0&&(k=n.TEXTURE0+Q-1),lt!==k&&(n.activeTexture(k),lt=k)}function U(k,Nt,dt){dt===void 0&&(lt===null?dt=n.TEXTURE0+Q-1:dt=lt);let Dt=ut[dt];Dt===void 0&&(Dt={type:void 0,texture:void 0},ut[dt]=Dt),(Dt.type!==k||Dt.texture!==Nt)&&(lt!==dt&&(n.activeTexture(dt),lt=dt),n.bindTexture(k,Nt||it[k]),Dt.type=k,Dt.texture=Nt)}function _e(){let k=ut[lt];k!==void 0&&k.type!==void 0&&(n.bindTexture(k.type,null),k.type=void 0,k.texture=void 0)}function ce(){try{n.compressedTexImage2D(...arguments)}catch(k){ue("WebGLState:",k)}}function R(){try{n.compressedTexImage3D(...arguments)}catch(k){ue("WebGLState:",k)}}function y(){try{n.texSubImage2D(...arguments)}catch(k){ue("WebGLState:",k)}}function V(){try{n.texSubImage3D(...arguments)}catch(k){ue("WebGLState:",k)}}function J(){try{n.compressedTexSubImage2D(...arguments)}catch(k){ue("WebGLState:",k)}}function ot(){try{n.compressedTexSubImage3D(...arguments)}catch(k){ue("WebGLState:",k)}}function Et(){try{n.texStorage2D(...arguments)}catch(k){ue("WebGLState:",k)}}function Z(){try{n.texStorage3D(...arguments)}catch(k){ue("WebGLState:",k)}}function X(){try{n.texImage2D(...arguments)}catch(k){ue("WebGLState:",k)}}function et(){try{n.texImage3D(...arguments)}catch(k){ue("WebGLState:",k)}}function xt(k){return d[k]!==void 0?d[k]:n.getParameter(k)}function Rt(k,Nt){d[k]!==Nt&&(n.pixelStorei(k,Nt),d[k]=Nt)}function St(k){ie.equals(k)===!1&&(n.scissor(k.x,k.y,k.z,k.w),ie.copy(k))}function wt(k){ne.equals(k)===!1&&(n.viewport(k.x,k.y,k.z,k.w),ne.copy(k))}function It(k,Nt){let dt=c.get(Nt);dt===void 0&&(dt=new WeakMap,c.set(Nt,dt));let Dt=dt.get(k);Dt===void 0&&(Dt=n.getUniformBlockIndex(Nt,k.name),dt.set(k,Dt))}function Qt(k,Nt){let Dt=c.get(Nt).get(k);l.get(Nt)!==Dt&&(n.uniformBlockBinding(Nt,Dt,k.__bindingPointIndex),l.set(Nt,Dt))}function re(){n.disable(n.BLEND),n.disable(n.CULL_FACE),n.disable(n.DEPTH_TEST),n.disable(n.POLYGON_OFFSET_FILL),n.disable(n.SCISSOR_TEST),n.disable(n.STENCIL_TEST),n.disable(n.SAMPLE_ALPHA_TO_COVERAGE),n.blendEquation(n.FUNC_ADD),n.blendFunc(n.ONE,n.ZERO),n.blendFuncSeparate(n.ONE,n.ZERO,n.ONE,n.ZERO),n.blendColor(0,0,0,0),n.colorMask(!0,!0,!0,!0),n.clearColor(0,0,0,0),n.depthMask(!0),n.depthFunc(n.LESS),a.setReversed(!1),n.clearDepth(1),n.stencilMask(4294967295),n.stencilFunc(n.ALWAYS,0,4294967295),n.stencilOp(n.KEEP,n.KEEP,n.KEEP),n.clearStencil(0),n.cullFace(n.BACK),n.frontFace(n.CCW),n.polygonOffset(0,0),n.activeTexture(n.TEXTURE0),n.bindFramebuffer(n.FRAMEBUFFER,null),n.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),n.bindFramebuffer(n.READ_FRAMEBUFFER,null),n.useProgram(null),n.lineWidth(1),n.scissor(0,0,n.canvas.width,n.canvas.height),n.viewport(0,0,n.canvas.width,n.canvas.height),n.pixelStorei(n.PACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_ALIGNMENT,4),n.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,!1),n.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,!1),n.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,n.BROWSER_DEFAULT_WEBGL),n.pixelStorei(n.PACK_ROW_LENGTH,0),n.pixelStorei(n.PACK_SKIP_PIXELS,0),n.pixelStorei(n.PACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_ROW_LENGTH,0),n.pixelStorei(n.UNPACK_IMAGE_HEIGHT,0),n.pixelStorei(n.UNPACK_SKIP_PIXELS,0),n.pixelStorei(n.UNPACK_SKIP_ROWS,0),n.pixelStorei(n.UNPACK_SKIP_IMAGES,0),h={},d={},lt=null,ut={},u={},f=new WeakMap,g=[],v=null,m=!1,p=null,b=null,w=null,_=null,E=null,S=null,A=null,x=new gt(0,0,0),T=0,C=!1,D=null,H=null,z=null,F=null,q=null,ie.set(0,0,n.canvas.width,n.canvas.height),ne.set(0,0,n.canvas.width,n.canvas.height),r.reset(),a.reset(),o.reset()}return{buffers:{color:r,depth:a,stencil:o},enable:ht,disable:Tt,bindFramebuffer:tt,drawBuffers:rt,useProgram:yt,setBlending:G,setMaterial:st,setFlipSided:$,setCullFace:_t,setLineWidth:Pt,setPolygonOffset:Ht,setScissorTest:kt,activeTexture:Wt,bindTexture:U,unbindTexture:_e,compressedTexImage2D:ce,compressedTexImage3D:R,texImage2D:X,texImage3D:et,pixelStorei:Rt,getParameter:xt,updateUBOMapping:It,uniformBlockBinding:Qt,texStorage2D:Et,texStorage3D:Z,texSubImage2D:y,texSubImage3D:V,compressedTexSubImage2D:J,compressedTexSubImage3D:ot,scissor:St,viewport:wt,reset:re}}function Vy(n,t,e,i,s,r,a){let o=t.has("WEBGL_multisampled_render_to_texture")?t.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new vt,h=new WeakMap,d=new Set,u,f=new WeakMap,g=!1;try{g=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function v(R,y){return g?new OffscreenCanvas(R,y):fa("canvas")}function m(R,y,V){let J=1,ot=ce(R);if((ot.width>V||ot.height>V)&&(J=V/Math.max(ot.width,ot.height)),J<1)if(typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&R instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&R instanceof ImageBitmap||typeof VideoFrame<"u"&&R instanceof VideoFrame){let Et=Math.floor(J*ot.width),Z=Math.floor(J*ot.height);u===void 0&&(u=v(Et,Z));let X=y?v(Et,Z):u;return X.width=Et,X.height=Z,X.getContext("2d").drawImage(R,0,0,Et,Z),oe("WebGLRenderer: Texture has been resized from ("+ot.width+"x"+ot.height+") to ("+Et+"x"+Z+")."),X}else return"data"in R&&oe("WebGLRenderer: Image in DataTexture is too big ("+ot.width+"x"+ot.height+")."),R;return R}function p(R){return R.generateMipmaps}function b(R){n.generateMipmap(R)}function w(R){return R.isWebGLCubeRenderTarget?n.TEXTURE_CUBE_MAP:R.isWebGL3DRenderTarget?n.TEXTURE_3D:R.isWebGLArrayRenderTarget||R.isCompressedArrayTexture?n.TEXTURE_2D_ARRAY:n.TEXTURE_2D}function _(R,y,V,J,ot,Et=!1){if(R!==null){if(n[R]!==void 0)return n[R];oe("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+R+"'")}let Z;J&&(Z=t.get("EXT_texture_norm16"),Z||oe("WebGLRenderer: Unable to use normalized textures without EXT_texture_norm16 extension"));let X=y;if(y===n.RED&&(V===n.FLOAT&&(X=n.R32F),V===n.HALF_FLOAT&&(X=n.R16F),V===n.UNSIGNED_BYTE&&(X=n.R8),V===n.UNSIGNED_SHORT&&Z&&(X=Z.R16_EXT),V===n.SHORT&&Z&&(X=Z.R16_SNORM_EXT)),y===n.RED_INTEGER&&(V===n.UNSIGNED_BYTE&&(X=n.R8UI),V===n.UNSIGNED_SHORT&&(X=n.R16UI),V===n.UNSIGNED_INT&&(X=n.R32UI),V===n.BYTE&&(X=n.R8I),V===n.SHORT&&(X=n.R16I),V===n.INT&&(X=n.R32I)),y===n.RG&&(V===n.FLOAT&&(X=n.RG32F),V===n.HALF_FLOAT&&(X=n.RG16F),V===n.UNSIGNED_BYTE&&(X=n.RG8),V===n.UNSIGNED_SHORT&&Z&&(X=Z.RG16_EXT),V===n.SHORT&&Z&&(X=Z.RG16_SNORM_EXT)),y===n.RG_INTEGER&&(V===n.UNSIGNED_BYTE&&(X=n.RG8UI),V===n.UNSIGNED_SHORT&&(X=n.RG16UI),V===n.UNSIGNED_INT&&(X=n.RG32UI),V===n.BYTE&&(X=n.RG8I),V===n.SHORT&&(X=n.RG16I),V===n.INT&&(X=n.RG32I)),y===n.RGB_INTEGER&&(V===n.UNSIGNED_BYTE&&(X=n.RGB8UI),V===n.UNSIGNED_SHORT&&(X=n.RGB16UI),V===n.UNSIGNED_INT&&(X=n.RGB32UI),V===n.BYTE&&(X=n.RGB8I),V===n.SHORT&&(X=n.RGB16I),V===n.INT&&(X=n.RGB32I)),y===n.RGBA_INTEGER&&(V===n.UNSIGNED_BYTE&&(X=n.RGBA8UI),V===n.UNSIGNED_SHORT&&(X=n.RGBA16UI),V===n.UNSIGNED_INT&&(X=n.RGBA32UI),V===n.BYTE&&(X=n.RGBA8I),V===n.SHORT&&(X=n.RGBA16I),V===n.INT&&(X=n.RGBA32I)),y===n.RGB&&(V===n.UNSIGNED_SHORT&&Z&&(X=Z.RGB16_EXT),V===n.SHORT&&Z&&(X=Z.RGB16_SNORM_EXT),V===n.UNSIGNED_INT_5_9_9_9_REV&&(X=n.RGB9_E5),V===n.UNSIGNED_INT_10F_11F_11F_REV&&(X=n.R11F_G11F_B10F)),y===n.RGBA){let et=Et?da:Te.getTransfer(ot);V===n.FLOAT&&(X=n.RGBA32F),V===n.HALF_FLOAT&&(X=n.RGBA16F),V===n.UNSIGNED_BYTE&&(X=et===We?n.SRGB8_ALPHA8:n.RGBA8),V===n.UNSIGNED_SHORT&&Z&&(X=Z.RGBA16_EXT),V===n.SHORT&&Z&&(X=Z.RGBA16_SNORM_EXT),V===n.UNSIGNED_SHORT_4_4_4_4&&(X=n.RGBA4),V===n.UNSIGNED_SHORT_5_5_5_1&&(X=n.RGB5_A1)}return(X===n.R16F||X===n.R32F||X===n.RG16F||X===n.RG32F||X===n.RGBA16F||X===n.RGBA32F)&&t.get("EXT_color_buffer_float"),X}function E(R,y){let V;return R?y===null||y===_n||y===kr?V=n.DEPTH24_STENCIL8:y===an?V=n.DEPTH32F_STENCIL8:y===Br&&(V=n.DEPTH24_STENCIL8,oe("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===_n||y===kr?V=n.DEPTH_COMPONENT24:y===an?V=n.DEPTH_COMPONENT32F:y===Br&&(V=n.DEPTH_COMPONENT16),V}function S(R,y){return p(R)===!0||R.isFramebufferTexture&&R.minFilter!==pi&&R.minFilter!==Ci?Math.log2(Math.max(y.width,y.height))+1:R.mipmaps!==void 0&&R.mipmaps.length>0?R.mipmaps.length:R.isCompressedTexture&&Array.isArray(R.image)?y.mipmaps.length:1}function A(R){let y=R.target;y.removeEventListener("dispose",A),T(y),y.isVideoTexture&&h.delete(y),y.isHTMLTexture&&d.delete(y)}function x(R){let y=R.target;y.removeEventListener("dispose",x),D(y)}function T(R){let y=i.get(R);if(y.__webglInit===void 0)return;let V=R.source,J=f.get(V);if(J){let ot=J[y.__cacheKey];ot.usedTimes--,ot.usedTimes===0&&C(R),Object.keys(J).length===0&&f.delete(V)}i.remove(R)}function C(R){let y=i.get(R);n.deleteTexture(y.__webglTexture);let V=R.source,J=f.get(V);delete J[y.__cacheKey],a.memory.textures--}function D(R){let y=i.get(R);if(R.depthTexture&&(R.depthTexture.dispose(),i.remove(R.depthTexture)),R.isWebGLCubeRenderTarget)for(let J=0;J<6;J++){if(Array.isArray(y.__webglFramebuffer[J]))for(let ot=0;ot<y.__webglFramebuffer[J].length;ot++)n.deleteFramebuffer(y.__webglFramebuffer[J][ot]);else n.deleteFramebuffer(y.__webglFramebuffer[J]);y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer[J])}else{if(Array.isArray(y.__webglFramebuffer))for(let J=0;J<y.__webglFramebuffer.length;J++)n.deleteFramebuffer(y.__webglFramebuffer[J]);else n.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&n.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&n.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let J=0;J<y.__webglColorRenderbuffer.length;J++)y.__webglColorRenderbuffer[J]&&n.deleteRenderbuffer(y.__webglColorRenderbuffer[J]);y.__webglDepthRenderbuffer&&n.deleteRenderbuffer(y.__webglDepthRenderbuffer)}let V=R.textures;for(let J=0,ot=V.length;J<ot;J++){let Et=i.get(V[J]);Et.__webglTexture&&(n.deleteTexture(Et.__webglTexture),a.memory.textures--),i.remove(V[J])}i.remove(R)}let H=0;function z(){H=0}function F(){return H}function q(R){H=R}function Q(){let R=H;return R>=s.maxTextures&&oe("WebGLTextures: Trying to use "+(R+1)+" texture units while this GPU supports only "+s.maxTextures),H+=1,R}function Y(R){let y=[];return y.push(R.wrapS),y.push(R.wrapT),y.push(R.wrapR||0),y.push(R.magFilter),y.push(R.minFilter),y.push(R.anisotropy),y.push(R.internalFormat),y.push(R.format),y.push(R.type),y.push(R.generateMipmaps),y.push(R.premultiplyAlpha),y.push(R.flipY),y.push(R.unpackAlignment),y.push(R.colorSpace),y.join()}function mt(R,y){let V=i.get(R);if(R.isVideoTexture&&U(R),R.isRenderTargetTexture===!1&&R.isExternalTexture!==!0&&R.version>0&&V.__version!==R.version){let J=R.image;if(J===null)oe("WebGLRenderer: Texture marked for update but no image data found.");else if(J.complete===!1)oe("WebGLRenderer: Texture marked for update but image is incomplete");else{Tt(V,R,y);return}}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D,V.__webglTexture,n.TEXTURE0+y)}function nt(R,y){let V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Tt(V,R,y);return}else R.isExternalTexture&&(V.__webglTexture=R.sourceTexture?R.sourceTexture:null);e.bindTexture(n.TEXTURE_2D_ARRAY,V.__webglTexture,n.TEXTURE0+y)}function lt(R,y){let V=i.get(R);if(R.isRenderTargetTexture===!1&&R.version>0&&V.__version!==R.version){Tt(V,R,y);return}e.bindTexture(n.TEXTURE_3D,V.__webglTexture,n.TEXTURE0+y)}function ut(R,y){let V=i.get(R);if(R.isCubeDepthTexture!==!0&&R.version>0&&V.__version!==R.version){tt(V,R,y);return}e.bindTexture(n.TEXTURE_CUBE_MAP,V.__webglTexture,n.TEXTURE0+y)}let Yt={[_r]:n.REPEAT,[Cn]:n.CLAMP_TO_EDGE,[$o]:n.MIRRORED_REPEAT},Ut={[pi]:n.NEAREST,[nd]:n.NEAREST_MIPMAP_NEAREST,[za]:n.NEAREST_MIPMAP_LINEAR,[Ci]:n.LINEAR,[Cl]:n.LINEAR_MIPMAP_NEAREST,[Ss]:n.LINEAR_MIPMAP_LINEAR},ie={[od]:n.NEVER,[dd]:n.ALWAYS,[ld]:n.LESS,[dc]:n.LEQUAL,[cd]:n.EQUAL,[fc]:n.GEQUAL,[hd]:n.GREATER,[ud]:n.NOTEQUAL};function ne(R,y){if(y.type===an&&t.has("OES_texture_float_linear")===!1&&(y.magFilter===Ci||y.magFilter===Cl||y.magFilter===za||y.magFilter===Ss||y.minFilter===Ci||y.minFilter===Cl||y.minFilter===za||y.minFilter===Ss)&&oe("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),n.texParameteri(R,n.TEXTURE_WRAP_S,Yt[y.wrapS]),n.texParameteri(R,n.TEXTURE_WRAP_T,Yt[y.wrapT]),(R===n.TEXTURE_3D||R===n.TEXTURE_2D_ARRAY)&&n.texParameteri(R,n.TEXTURE_WRAP_R,Yt[y.wrapR]),n.texParameteri(R,n.TEXTURE_MAG_FILTER,Ut[y.magFilter]),n.texParameteri(R,n.TEXTURE_MIN_FILTER,Ut[y.minFilter]),y.compareFunction&&(n.texParameteri(R,n.TEXTURE_COMPARE_MODE,n.COMPARE_REF_TO_TEXTURE),n.texParameteri(R,n.TEXTURE_COMPARE_FUNC,ie[y.compareFunction])),t.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===pi||y.minFilter!==za&&y.minFilter!==Ss||y.type===an&&t.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){let V=t.get("EXT_texture_filter_anisotropic");n.texParameterf(R,V.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,s.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function de(R,y){let V=!1;R.__webglInit===void 0&&(R.__webglInit=!0,y.addEventListener("dispose",A));let J=y.source,ot=f.get(J);ot===void 0&&(ot={},f.set(J,ot));let Et=Y(y);if(Et!==R.__cacheKey){ot[Et]===void 0&&(ot[Et]={texture:n.createTexture(),usedTimes:0},a.memory.textures++,V=!0),ot[Et].usedTimes++;let Z=ot[R.__cacheKey];Z!==void 0&&(ot[R.__cacheKey].usedTimes--,Z.usedTimes===0&&C(y)),R.__cacheKey=Et,R.__webglTexture=ot[Et].texture}return V}function it(R,y,V){return Math.floor(Math.floor(R/V)/y)}function ht(R,y,V,J){let Et=R.updateRanges;if(Et.length===0)e.texSubImage2D(n.TEXTURE_2D,0,0,0,y.width,y.height,V,J,y.data);else{Et.sort((Rt,St)=>Rt.start-St.start);let Z=0;for(let Rt=1;Rt<Et.length;Rt++){let St=Et[Z],wt=Et[Rt],It=St.start+St.count,Qt=it(wt.start,y.width,4),re=it(St.start,y.width,4);wt.start<=It+1&&Qt===re&&it(wt.start+wt.count-1,y.width,4)===Qt?St.count=Math.max(St.count,wt.start+wt.count-St.start):(++Z,Et[Z]=wt)}Et.length=Z+1;let X=e.getParameter(n.UNPACK_ROW_LENGTH),et=e.getParameter(n.UNPACK_SKIP_PIXELS),xt=e.getParameter(n.UNPACK_SKIP_ROWS);e.pixelStorei(n.UNPACK_ROW_LENGTH,y.width);for(let Rt=0,St=Et.length;Rt<St;Rt++){let wt=Et[Rt],It=Math.floor(wt.start/4),Qt=Math.ceil(wt.count/4),re=It%y.width,k=Math.floor(It/y.width),Nt=Qt,dt=1;e.pixelStorei(n.UNPACK_SKIP_PIXELS,re),e.pixelStorei(n.UNPACK_SKIP_ROWS,k),e.texSubImage2D(n.TEXTURE_2D,0,re,k,Nt,dt,V,J,y.data)}R.clearUpdateRanges(),e.pixelStorei(n.UNPACK_ROW_LENGTH,X),e.pixelStorei(n.UNPACK_SKIP_PIXELS,et),e.pixelStorei(n.UNPACK_SKIP_ROWS,xt)}}function Tt(R,y,V){let J=n.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(J=n.TEXTURE_2D_ARRAY),y.isData3DTexture&&(J=n.TEXTURE_3D);let ot=de(R,y),Et=y.source;e.bindTexture(J,R.__webglTexture,n.TEXTURE0+V);let Z=i.get(Et);if(Et.version!==Z.__version||ot===!0){if(e.activeTexture(n.TEXTURE0+V),(typeof ImageBitmap<"u"&&y.image instanceof ImageBitmap)===!1){let dt=Te.getPrimaries(Te.workingColorSpace),Dt=y.colorSpace===ss?null:Te.getPrimaries(y.colorSpace),Ot=y.colorSpace===ss||dt===Dt?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,Ot)}e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment);let et=m(y.image,!1,s.maxTextureSize);et=_e(y,et);let xt=r.convert(y.format,y.colorSpace),Rt=r.convert(y.type),St=_(y.internalFormat,xt,Rt,y.normalized,y.colorSpace,y.isVideoTexture);ne(J,y);let wt,It=y.mipmaps,Qt=y.isVideoTexture!==!0,re=Z.__version===void 0||ot===!0,k=Et.dataReady,Nt=S(y,et);if(y.isDepthTexture)St=E(y.format===Es,y.type),re&&(Qt?e.texStorage2D(n.TEXTURE_2D,1,St,et.width,et.height):e.texImage2D(n.TEXTURE_2D,0,St,et.width,et.height,0,xt,Rt,null));else if(y.isDataTexture)if(It.length>0){Qt&&re&&e.texStorage2D(n.TEXTURE_2D,Nt,St,It[0].width,It[0].height);for(let dt=0,Dt=It.length;dt<Dt;dt++)wt=It[dt],Qt?k&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,wt.width,wt.height,xt,Rt,wt.data):e.texImage2D(n.TEXTURE_2D,dt,St,wt.width,wt.height,0,xt,Rt,wt.data);y.generateMipmaps=!1}else Qt?(re&&e.texStorage2D(n.TEXTURE_2D,Nt,St,et.width,et.height),k&&ht(y,et,xt,Rt)):e.texImage2D(n.TEXTURE_2D,0,St,et.width,et.height,0,xt,Rt,et.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){Qt&&re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Nt,St,It[0].width,It[0].height,et.depth);for(let dt=0,Dt=It.length;dt<Dt;dt++)if(wt=It[dt],y.format!==on)if(xt!==null)if(Qt){if(k)if(y.layerUpdates.size>0){let Ot=s0(wt.width,wt.height,y.format,y.type);for(let L of y.layerUpdates){let B=wt.data.subarray(L*Ot/wt.data.BYTES_PER_ELEMENT,(L+1)*Ot/wt.data.BYTES_PER_ELEMENT);e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,L,wt.width,wt.height,1,xt,B)}}else e.compressedTexSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,0,wt.width,wt.height,et.depth,xt,wt.data)}else e.compressedTexImage3D(n.TEXTURE_2D_ARRAY,dt,St,wt.width,wt.height,et.depth,0,wt.data,0,0);else oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else Qt?k&&e.texSubImage3D(n.TEXTURE_2D_ARRAY,dt,0,0,0,wt.width,wt.height,et.depth,xt,Rt,wt.data):e.texImage3D(n.TEXTURE_2D_ARRAY,dt,St,wt.width,wt.height,et.depth,0,xt,Rt,wt.data);y.layerUpdates.size>0&&y.clearLayerUpdates()}else{Qt&&re&&e.texStorage2D(n.TEXTURE_2D,Nt,St,It[0].width,It[0].height);for(let dt=0,Dt=It.length;dt<Dt;dt++)wt=It[dt],y.format!==on?xt!==null?Qt?k&&e.compressedTexSubImage2D(n.TEXTURE_2D,dt,0,0,wt.width,wt.height,xt,wt.data):e.compressedTexImage2D(n.TEXTURE_2D,dt,St,wt.width,wt.height,0,wt.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):Qt?k&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,wt.width,wt.height,xt,Rt,wt.data):e.texImage2D(n.TEXTURE_2D,dt,St,wt.width,wt.height,0,xt,Rt,wt.data)}else if(y.isDataArrayTexture)if(Qt){if(re&&e.texStorage3D(n.TEXTURE_2D_ARRAY,Nt,St,et.width,et.height,et.depth),k)if(y.layerUpdates.size>0){let dt=s0(et.width,et.height,y.format,y.type);for(let Dt of y.layerUpdates){let Ot=et.data.subarray(Dt*dt/et.data.BYTES_PER_ELEMENT,(Dt+1)*dt/et.data.BYTES_PER_ELEMENT);e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,Dt,et.width,et.height,1,xt,Rt,Ot)}y.clearLayerUpdates()}else e.texSubImage3D(n.TEXTURE_2D_ARRAY,0,0,0,0,et.width,et.height,et.depth,xt,Rt,et.data)}else e.texImage3D(n.TEXTURE_2D_ARRAY,0,St,et.width,et.height,et.depth,0,xt,Rt,et.data);else if(y.isData3DTexture)Qt?(re&&e.texStorage3D(n.TEXTURE_3D,Nt,St,et.width,et.height,et.depth),k&&e.texSubImage3D(n.TEXTURE_3D,0,0,0,0,et.width,et.height,et.depth,xt,Rt,et.data)):e.texImage3D(n.TEXTURE_3D,0,St,et.width,et.height,et.depth,0,xt,Rt,et.data);else if(y.isFramebufferTexture){if(re)if(Qt)e.texStorage2D(n.TEXTURE_2D,Nt,St,et.width,et.height);else{let dt=et.width,Dt=et.height;for(let Ot=0;Ot<Nt;Ot++)e.texImage2D(n.TEXTURE_2D,Ot,St,dt,Dt,0,xt,Rt,null),dt>>=1,Dt>>=1}}else if(y.isHTMLTexture){if("texElementImage2D"in n){let dt=n.canvas;if(dt.hasAttribute("layoutsubtree")||dt.setAttribute("layoutsubtree","true"),et.parentNode!==dt){dt.appendChild(et),d.add(y),dt.onpaint=Dt=>{let Ot=Dt.changedElements;for(let L of d)Ot.includes(L.image)&&(L.needsUpdate=!0)},dt.requestPaint();return}if(n.texElementImage2D.length===3)n.texElementImage2D(n.TEXTURE_2D,n.RGBA8,et);else{let Ot=n.RGBA,L=n.RGBA,B=n.UNSIGNED_BYTE;n.texElementImage2D(n.TEXTURE_2D,0,Ot,L,B,et)}n.texParameteri(n.TEXTURE_2D,n.TEXTURE_MIN_FILTER,n.LINEAR),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_S,n.CLAMP_TO_EDGE),n.texParameteri(n.TEXTURE_2D,n.TEXTURE_WRAP_T,n.CLAMP_TO_EDGE)}}else if(It.length>0){if(Qt&&re){let dt=ce(It[0]);e.texStorage2D(n.TEXTURE_2D,Nt,St,dt.width,dt.height)}for(let dt=0,Dt=It.length;dt<Dt;dt++)wt=It[dt],Qt?k&&e.texSubImage2D(n.TEXTURE_2D,dt,0,0,xt,Rt,wt):e.texImage2D(n.TEXTURE_2D,dt,St,xt,Rt,wt);y.generateMipmaps=!1}else if(Qt){if(re){let dt=ce(et);e.texStorage2D(n.TEXTURE_2D,Nt,St,dt.width,dt.height)}k&&e.texSubImage2D(n.TEXTURE_2D,0,0,0,xt,Rt,et)}else e.texImage2D(n.TEXTURE_2D,0,St,xt,Rt,et);p(y)&&b(J),Z.__version=Et.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function tt(R,y,V){if(y.image.length!==6)return;let J=de(R,y),ot=y.source;e.bindTexture(n.TEXTURE_CUBE_MAP,R.__webglTexture,n.TEXTURE0+V);let Et=i.get(ot);if(ot.version!==Et.__version||J===!0){e.activeTexture(n.TEXTURE0+V);let Z=Te.getPrimaries(Te.workingColorSpace),X=y.colorSpace===ss?null:Te.getPrimaries(y.colorSpace),et=y.colorSpace===ss||Z===X?n.NONE:n.BROWSER_DEFAULT_WEBGL;e.pixelStorei(n.UNPACK_FLIP_Y_WEBGL,y.flipY),e.pixelStorei(n.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),e.pixelStorei(n.UNPACK_ALIGNMENT,y.unpackAlignment),e.pixelStorei(n.UNPACK_COLORSPACE_CONVERSION_WEBGL,et);let xt=y.isCompressedTexture||y.image[0].isCompressedTexture,Rt=y.image[0]&&y.image[0].isDataTexture,St=[];for(let L=0;L<6;L++)!xt&&!Rt?St[L]=m(y.image[L],!0,s.maxCubemapSize):St[L]=Rt?y.image[L].image:y.image[L],St[L]=_e(y,St[L]);let wt=St[0],It=r.convert(y.format,y.colorSpace),Qt=r.convert(y.type),re=_(y.internalFormat,It,Qt,y.normalized,y.colorSpace),k=y.isVideoTexture!==!0,Nt=Et.__version===void 0||J===!0,dt=ot.dataReady,Dt=S(y,wt);ne(n.TEXTURE_CUBE_MAP,y);let Ot;if(xt){k&&Nt&&e.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,re,wt.width,wt.height);for(let L=0;L<6;L++){Ot=St[L].mipmaps;for(let B=0;B<Ot.length;B++){let ct=Ot[B];y.format!==on?It!==null?k?dt&&e.compressedTexSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,B,0,0,ct.width,ct.height,It,ct.data):e.compressedTexImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,B,re,ct.width,ct.height,0,ct.data):oe("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):k?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,B,0,0,ct.width,ct.height,It,Qt,ct.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,B,re,ct.width,ct.height,0,It,Qt,ct.data)}}}else{if(Ot=y.mipmaps,k&&Nt){Ot.length>0&&Dt++;let L=ce(St[0]);e.texStorage2D(n.TEXTURE_CUBE_MAP,Dt,re,L.width,L.height)}for(let L=0;L<6;L++)if(Rt){k?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,St[L].width,St[L].height,It,Qt,St[L].data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,re,St[L].width,St[L].height,0,It,Qt,St[L].data);for(let B=0;B<Ot.length;B++){let ft=Ot[B].image[L].image;k?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,B+1,0,0,ft.width,ft.height,It,Qt,ft.data):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,B+1,re,ft.width,ft.height,0,It,Qt,ft.data)}}else{k?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,0,0,It,Qt,St[L]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,0,re,It,Qt,St[L]);for(let B=0;B<Ot.length;B++){let ct=Ot[B];k?dt&&e.texSubImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,B+1,0,0,It,Qt,ct.image[L]):e.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+L,B+1,re,It,Qt,ct.image[L])}}}p(y)&&b(n.TEXTURE_CUBE_MAP),Et.__version=ot.version,y.onUpdate&&y.onUpdate(y)}R.__version=y.version}function rt(R,y,V,J,ot,Et){let Z=r.convert(V.format,V.colorSpace),X=r.convert(V.type),et=_(V.internalFormat,Z,X,V.normalized,V.colorSpace),xt=i.get(y),Rt=i.get(V);if(Rt.__renderTarget=y,!xt.__hasExternalTextures){let St=Math.max(1,y.width>>Et),wt=Math.max(1,y.height>>Et);ot===n.TEXTURE_3D||ot===n.TEXTURE_2D_ARRAY?e.texImage3D(ot,Et,et,St,wt,y.depth,0,Z,X,null):e.texImage2D(ot,Et,et,St,wt,0,Z,X,null)}e.bindFramebuffer(n.FRAMEBUFFER,R),Wt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,J,ot,Rt.__webglTexture,0,kt(y)):(ot===n.TEXTURE_2D||ot>=n.TEXTURE_CUBE_MAP_POSITIVE_X&&ot<=n.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&n.framebufferTexture2D(n.FRAMEBUFFER,J,ot,Rt.__webglTexture,Et),e.bindFramebuffer(n.FRAMEBUFFER,null)}function yt(R,y,V){if(n.bindRenderbuffer(n.RENDERBUFFER,R),y.depthBuffer){let J=y.depthTexture,ot=J&&J.isDepthTexture?J.type:null,Et=E(y.stencilBuffer,ot),Z=y.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;Wt(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,kt(y),Et,y.width,y.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,kt(y),Et,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,Et,y.width,y.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,Z,n.RENDERBUFFER,R)}else{let J=y.textures;for(let ot=0;ot<J.length;ot++){let Et=J[ot],Z=r.convert(Et.format,Et.colorSpace),X=r.convert(Et.type),et=_(Et.internalFormat,Z,X,Et.normalized,Et.colorSpace);Wt(y)?o.renderbufferStorageMultisampleEXT(n.RENDERBUFFER,kt(y),et,y.width,y.height):V?n.renderbufferStorageMultisample(n.RENDERBUFFER,kt(y),et,y.width,y.height):n.renderbufferStorage(n.RENDERBUFFER,et,y.width,y.height)}}n.bindRenderbuffer(n.RENDERBUFFER,null)}function bt(R,y,V){let J=y.isWebGLCubeRenderTarget===!0;if(e.bindFramebuffer(n.FRAMEBUFFER,R),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("THREE.WebGLTextures: renderTarget.depthTexture must be an instance of THREE.DepthTexture.");let ot=i.get(y.depthTexture);if(ot.__renderTarget=y,(!ot.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),J){if(ot.__webglInit===void 0&&(ot.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),ot.__webglTexture===void 0){ot.__webglTexture=n.createTexture(),e.bindTexture(n.TEXTURE_CUBE_MAP,ot.__webglTexture),ne(n.TEXTURE_CUBE_MAP,y.depthTexture);let xt=r.convert(y.depthTexture.format),Rt=r.convert(y.depthTexture.type),St;y.depthTexture.format===Pn?St=n.DEPTH_COMPONENT24:y.depthTexture.format===Es&&(St=n.DEPTH24_STENCIL8);for(let wt=0;wt<6;wt++)n.texImage2D(n.TEXTURE_CUBE_MAP_POSITIVE_X+wt,0,St,y.width,y.height,0,xt,Rt,null)}}else mt(y.depthTexture,0);let Et=ot.__webglTexture,Z=kt(y),X=J?n.TEXTURE_CUBE_MAP_POSITIVE_X+V:n.TEXTURE_2D,et=y.depthTexture.format===Es?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;if(y.depthTexture.format===Pn)Wt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,X,Et,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,et,X,Et,0);else if(y.depthTexture.format===Es)Wt(y)?o.framebufferTexture2DMultisampleEXT(n.FRAMEBUFFER,et,X,Et,0,Z):n.framebufferTexture2D(n.FRAMEBUFFER,et,X,Et,0);else throw new Error("THREE.WebGLTextures: Unknown depthTexture format.")}function P(R){let y=i.get(R),V=R.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==R.depthTexture){let J=R.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),J){let ot=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,J.removeEventListener("dispose",ot)};J.addEventListener("dispose",ot),y.__depthDisposeCallback=ot}y.__boundDepthTexture=J}if(R.depthTexture&&!y.__autoAllocateDepthBuffer)if(V)for(let J=0;J<6;J++)bt(y.__webglFramebuffer[J],R,J);else{let J=R.texture.mipmaps;J&&J.length>0?bt(y.__webglFramebuffer[0],R,0):bt(y.__webglFramebuffer,R,0)}else if(V){y.__webglDepthbuffer=[];for(let J=0;J<6;J++)if(e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[J]),y.__webglDepthbuffer[J]===void 0)y.__webglDepthbuffer[J]=n.createRenderbuffer(),yt(y.__webglDepthbuffer[J],R,!1);else{let ot=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=y.__webglDepthbuffer[J];n.bindRenderbuffer(n.RENDERBUFFER,Et),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,Et)}}else{let J=R.texture.mipmaps;if(J&&J.length>0?e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer[0]):e.bindFramebuffer(n.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=n.createRenderbuffer(),yt(y.__webglDepthbuffer,R,!1);else{let ot=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Et=y.__webglDepthbuffer;n.bindRenderbuffer(n.RENDERBUFFER,Et),n.framebufferRenderbuffer(n.FRAMEBUFFER,ot,n.RENDERBUFFER,Et)}}e.bindFramebuffer(n.FRAMEBUFFER,null)}function G(R,y,V){let J=i.get(R);y!==void 0&&rt(J.__webglFramebuffer,R,R.texture,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,0),V!==void 0&&P(R)}function st(R){let y=R.texture,V=i.get(R),J=i.get(y);R.addEventListener("dispose",x);let ot=R.textures,Et=R.isWebGLCubeRenderTarget===!0,Z=ot.length>1;if(Z||(J.__webglTexture===void 0&&(J.__webglTexture=n.createTexture()),J.__version=y.version,a.memory.textures++),Et){V.__webglFramebuffer=[];for(let X=0;X<6;X++)if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer[X]=[];for(let et=0;et<y.mipmaps.length;et++)V.__webglFramebuffer[X][et]=n.createFramebuffer()}else V.__webglFramebuffer[X]=n.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){V.__webglFramebuffer=[];for(let X=0;X<y.mipmaps.length;X++)V.__webglFramebuffer[X]=n.createFramebuffer()}else V.__webglFramebuffer=n.createFramebuffer();if(Z)for(let X=0,et=ot.length;X<et;X++){let xt=i.get(ot[X]);xt.__webglTexture===void 0&&(xt.__webglTexture=n.createTexture(),a.memory.textures++)}if(R.samples>0&&Wt(R)===!1){V.__webglMultisampledFramebuffer=n.createFramebuffer(),V.__webglColorRenderbuffer=[],e.bindFramebuffer(n.FRAMEBUFFER,V.__webglMultisampledFramebuffer);for(let X=0;X<ot.length;X++){let et=ot[X];V.__webglColorRenderbuffer[X]=n.createRenderbuffer(),n.bindRenderbuffer(n.RENDERBUFFER,V.__webglColorRenderbuffer[X]);let xt=r.convert(et.format,et.colorSpace),Rt=r.convert(et.type),St=_(et.internalFormat,xt,Rt,et.normalized,et.colorSpace,R.isXRRenderTarget===!0),wt=kt(R);n.renderbufferStorageMultisample(n.RENDERBUFFER,wt,St,R.width,R.height),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+X,n.RENDERBUFFER,V.__webglColorRenderbuffer[X])}n.bindRenderbuffer(n.RENDERBUFFER,null),R.depthBuffer&&(V.__webglDepthRenderbuffer=n.createRenderbuffer(),yt(V.__webglDepthRenderbuffer,R,!0)),e.bindFramebuffer(n.FRAMEBUFFER,null)}}if(Et){e.bindTexture(n.TEXTURE_CUBE_MAP,J.__webglTexture),ne(n.TEXTURE_CUBE_MAP,y);for(let X=0;X<6;X++)if(y.mipmaps&&y.mipmaps.length>0)for(let et=0;et<y.mipmaps.length;et++)rt(V.__webglFramebuffer[X][et],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,et);else rt(V.__webglFramebuffer[X],R,y,n.COLOR_ATTACHMENT0,n.TEXTURE_CUBE_MAP_POSITIVE_X+X,0);p(y)&&b(n.TEXTURE_CUBE_MAP),e.unbindTexture()}else if(Z){for(let X=0,et=ot.length;X<et;X++){let xt=ot[X],Rt=i.get(xt),St=n.TEXTURE_2D;(R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(St=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(St,Rt.__webglTexture),ne(St,xt),rt(V.__webglFramebuffer,R,xt,n.COLOR_ATTACHMENT0+X,St,0),p(xt)&&b(St)}e.unbindTexture()}else{let X=n.TEXTURE_2D;if((R.isWebGL3DRenderTarget||R.isWebGLArrayRenderTarget)&&(X=R.isWebGL3DRenderTarget?n.TEXTURE_3D:n.TEXTURE_2D_ARRAY),e.bindTexture(X,J.__webglTexture),ne(X,y),y.mipmaps&&y.mipmaps.length>0)for(let et=0;et<y.mipmaps.length;et++)rt(V.__webglFramebuffer[et],R,y,n.COLOR_ATTACHMENT0,X,et);else rt(V.__webglFramebuffer,R,y,n.COLOR_ATTACHMENT0,X,0);p(y)&&b(X),e.unbindTexture()}R.depthBuffer&&P(R)}function $(R){let y=R.textures;for(let V=0,J=y.length;V<J;V++){let ot=y[V];if(p(ot)){let Et=w(R),Z=i.get(ot).__webglTexture;e.bindTexture(Et,Z),b(Et),e.unbindTexture()}}}let _t=[],Pt=[];function Ht(R){if(R.samples>0){if(Wt(R)===!1){let y=R.textures,V=R.width,J=R.height,ot=n.COLOR_BUFFER_BIT,Et=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT,Z=i.get(R),X=y.length>1;if(X)for(let xt=0;xt<y.length;xt++)e.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,null),e.bindFramebuffer(n.FRAMEBUFFER,Z.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,null,0);e.bindFramebuffer(n.READ_FRAMEBUFFER,Z.__webglMultisampledFramebuffer);let et=R.texture.mipmaps;et&&et.length>0?e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Z.__webglFramebuffer[0]):e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Z.__webglFramebuffer);for(let xt=0;xt<y.length;xt++){if(R.resolveDepthBuffer&&(R.depthBuffer&&(ot|=n.DEPTH_BUFFER_BIT),R.stencilBuffer&&R.resolveStencilBuffer&&(ot|=n.STENCIL_BUFFER_BIT)),X){n.framebufferRenderbuffer(n.READ_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.RENDERBUFFER,Z.__webglColorRenderbuffer[xt]);let Rt=i.get(y[xt]).__webglTexture;n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0,n.TEXTURE_2D,Rt,0)}n.blitFramebuffer(0,0,V,J,0,0,V,J,ot,n.NEAREST),l===!0&&(_t.length=0,Pt.length=0,_t.push(n.COLOR_ATTACHMENT0+xt),R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&(_t.push(Et),Pt.push(Et),n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,Pt)),n.invalidateFramebuffer(n.READ_FRAMEBUFFER,_t))}if(e.bindFramebuffer(n.READ_FRAMEBUFFER,null),e.bindFramebuffer(n.DRAW_FRAMEBUFFER,null),X)for(let xt=0;xt<y.length;xt++){e.bindFramebuffer(n.FRAMEBUFFER,Z.__webglMultisampledFramebuffer),n.framebufferRenderbuffer(n.FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.RENDERBUFFER,Z.__webglColorRenderbuffer[xt]);let Rt=i.get(y[xt]).__webglTexture;e.bindFramebuffer(n.FRAMEBUFFER,Z.__webglFramebuffer),n.framebufferTexture2D(n.DRAW_FRAMEBUFFER,n.COLOR_ATTACHMENT0+xt,n.TEXTURE_2D,Rt,0)}e.bindFramebuffer(n.DRAW_FRAMEBUFFER,Z.__webglMultisampledFramebuffer)}else if(R.depthBuffer&&R.storeMultisampledDepthBuffer===!1&&l){let y=R.stencilBuffer?n.DEPTH_STENCIL_ATTACHMENT:n.DEPTH_ATTACHMENT;n.invalidateFramebuffer(n.DRAW_FRAMEBUFFER,[y])}}}function kt(R){return Math.min(s.maxSamples,R.samples)}function Wt(R){let y=i.get(R);return R.samples>0&&t.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function U(R){let y=a.render.frame;h.get(R)!==y&&(h.set(R,y),R.update())}function _e(R,y){let V=R.colorSpace,J=R.format,ot=R.type;return R.isCompressedTexture===!0||R.isVideoTexture===!0||V!==ua&&V!==ss&&(Te.getTransfer(V)===We?(J!==on||ot!==Wi)&&oe("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):ue("WebGLTextures: Unsupported texture color space:",V)),y}function ce(R){return typeof HTMLImageElement<"u"&&R instanceof HTMLImageElement?(c.width=R.naturalWidth||R.width,c.height=R.naturalHeight||R.height):typeof VideoFrame<"u"&&R instanceof VideoFrame?(c.width=R.displayWidth,c.height=R.displayHeight):(c.width=R.width,c.height=R.height),c}this.allocateTextureUnit=Q,this.resetTextureUnits=z,this.getTextureUnits=F,this.setTextureUnits=q,this.setTexture2D=mt,this.setTexture2DArray=nt,this.setTexture3D=lt,this.setTextureCube=ut,this.rebindTextures=G,this.setupRenderTarget=st,this.updateRenderTargetMipmap=$,this.updateMultisampleRenderTarget=Ht,this.setupDepthRenderbuffer=P,this.setupFrameBufferTexture=rt,this.useMultisampledRTT=Wt,this.isReversedDepthBuffer=function(){return e.buffers.depth.getReversed()}}function Wy(n,t){function e(i,s=ss){let r,a=Te.getTransfer(s);if(i===Wi)return n.UNSIGNED_BYTE;if(i===Pl)return n.UNSIGNED_SHORT_4_4_4_4;if(i===Il)return n.UNSIGNED_SHORT_5_5_5_1;if(i===Zh)return n.UNSIGNED_INT_5_9_9_9_REV;if(i===Jh)return n.UNSIGNED_INT_10F_11F_11F_REV;if(i===qh)return n.BYTE;if(i===Yh)return n.SHORT;if(i===Br)return n.UNSIGNED_SHORT;if(i===Ll)return n.INT;if(i===_n)return n.UNSIGNED_INT;if(i===an)return n.FLOAT;if(i===bn)return n.HALF_FLOAT;if(i===$h)return n.ALPHA;if(i===jh)return n.RGB;if(i===on)return n.RGBA;if(i===Pn)return n.DEPTH_COMPONENT;if(i===Es)return n.DEPTH_STENCIL;if(i===Or)return n.RED;if(i===Dl)return n.RED_INTEGER;if(i===ws)return n.RG;if(i===Ul)return n.RG_INTEGER;if(i===Nl)return n.RGBA_INTEGER;if(i===Ga||i===Va||i===Wa||i===Xa)if(a===We)if(r=t.get("WEBGL_compressed_texture_s3tc_srgb"),r!==null){if(i===Ga)return r.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===Va)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===Xa)return r.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(r=t.get("WEBGL_compressed_texture_s3tc"),r!==null){if(i===Ga)return r.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===Va)return r.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===Wa)return r.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===Xa)return r.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===Fl||i===Bl||i===kl||i===Ol)if(r=t.get("WEBGL_compressed_texture_pvrtc"),r!==null){if(i===Fl)return r.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===Bl)return r.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===kl)return r.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===Ol)return r.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===Hl||i===zl||i===Gl||i===Vl||i===Wl||i===qa||i===Xl)if(r=t.get("WEBGL_compressed_texture_etc"),r!==null){if(i===Hl||i===zl)return a===We?r.COMPRESSED_SRGB8_ETC2:r.COMPRESSED_RGB8_ETC2;if(i===Gl)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:r.COMPRESSED_RGBA8_ETC2_EAC;if(i===Vl)return r.COMPRESSED_R11_EAC;if(i===Wl)return r.COMPRESSED_SIGNED_R11_EAC;if(i===qa)return r.COMPRESSED_RG11_EAC;if(i===Xl)return r.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===ql||i===Yl||i===Zl||i===Jl||i===$l||i===jl||i===Kl||i===Ql||i===tc||i===ec||i===ic||i===nc||i===sc||i===rc)if(r=t.get("WEBGL_compressed_texture_astc"),r!==null){if(i===ql)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:r.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===Yl)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:r.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Zl)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:r.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===Jl)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:r.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===$l)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:r.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===jl)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:r.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Kl)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:r.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Ql)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:r.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===tc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:r.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===ec)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:r.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===ic)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:r.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===nc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:r.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===sc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:r.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===rc)return a===We?r.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:r.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===ac||i===oc||i===lc)if(r=t.get("EXT_texture_compression_bptc"),r!==null){if(i===ac)return a===We?r.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:r.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===oc)return r.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===lc)return r.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===cc||i===hc||i===Ya||i===uc)if(r=t.get("EXT_texture_compression_rgtc"),r!==null){if(i===cc)return r.COMPRESSED_RED_RGTC1_EXT;if(i===hc)return r.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Ya)return r.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===uc)return r.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===kr?n.UNSIGNED_INT_24_8:n[i]!==void 0?n[i]:null}return{convert:e}}function Zy(n,t){function e(m,p){m.matrixAutoUpdate===!0&&m.updateMatrix(),p.value.copy(m.matrix)}function i(m,p){p.color.getRGB(m.fogColor.value,e0(n)),p.isFog?(m.fogNear.value=p.near,m.fogFar.value=p.far):p.isFogExp2&&(m.fogDensity.value=p.density)}function s(m,p,b,w,_){p.isNodeMaterial?p.uniformsNeedUpdate=!1:p.isMeshBasicMaterial?r(m,p):p.isMeshLambertMaterial?(r(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshToonMaterial?(r(m,p),d(m,p)):p.isMeshPhongMaterial?(r(m,p),h(m,p),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)):p.isMeshStandardMaterial?(r(m,p),u(m,p),p.isMeshPhysicalMaterial&&f(m,p,_)):p.isMeshMatcapMaterial?(r(m,p),g(m,p)):p.isMeshDepthMaterial?r(m,p):p.isMeshDistanceMaterial?(r(m,p),v(m,p)):p.isMeshNormalMaterial?r(m,p):p.isLineBasicMaterial?(a(m,p),p.isLineDashedMaterial&&o(m,p)):p.isPointsMaterial?l(m,p,b,w):p.isSpriteMaterial?c(m,p):p.isShadowMaterial?(m.color.value.copy(p.color),m.opacity.value=p.opacity):p.isShaderMaterial&&(p.uniformsNeedUpdate=!1)}function r(m,p){m.opacity.value=p.opacity,p.color&&m.diffuse.value.copy(p.color),p.emissive&&m.emissive.value.copy(p.emissive).multiplyScalar(p.emissiveIntensity),p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.bumpMap&&(m.bumpMap.value=p.bumpMap,e(p.bumpMap,m.bumpMapTransform),m.bumpScale.value=p.bumpScale,p.side===Ze&&(m.bumpScale.value*=-1)),p.normalMap&&(m.normalMap.value=p.normalMap,e(p.normalMap,m.normalMapTransform),m.normalScale.value.copy(p.normalScale),p.side===Ze&&m.normalScale.value.negate()),p.displacementMap&&(m.displacementMap.value=p.displacementMap,e(p.displacementMap,m.displacementMapTransform),m.displacementScale.value=p.displacementScale,m.displacementBias.value=p.displacementBias),p.emissiveMap&&(m.emissiveMap.value=p.emissiveMap,e(p.emissiveMap,m.emissiveMapTransform)),p.specularMap&&(m.specularMap.value=p.specularMap,e(p.specularMap,m.specularMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest);let b=t.get(p),w=b.envMap,_=b.envMapRotation;w&&(m.envMap.value=w,m.envMapRotation.value.setFromMatrix4(Yy.makeRotationFromEuler(_)).transpose(),w.isCubeTexture&&w.isRenderTargetTexture===!1&&m.envMapRotation.value.premultiply(Qd),m.reflectivity.value=p.reflectivity,m.ior.value=p.ior,m.refractionRatio.value=p.refractionRatio),p.lightMap&&(m.lightMap.value=p.lightMap,m.lightMapIntensity.value=p.lightMapIntensity,e(p.lightMap,m.lightMapTransform)),p.aoMap&&(m.aoMap.value=p.aoMap,m.aoMapIntensity.value=p.aoMapIntensity,e(p.aoMap,m.aoMapTransform))}function a(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform))}function o(m,p){m.dashSize.value=p.dashSize,m.totalSize.value=p.dashSize+p.gapSize,m.scale.value=p.scale}function l(m,p,b,w){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.size.value=p.size*b,m.scale.value=w*.5,p.map&&(m.map.value=p.map,e(p.map,m.uvTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function c(m,p){m.diffuse.value.copy(p.color),m.opacity.value=p.opacity,m.rotation.value=p.rotation,p.map&&(m.map.value=p.map,e(p.map,m.mapTransform)),p.alphaMap&&(m.alphaMap.value=p.alphaMap,e(p.alphaMap,m.alphaMapTransform)),p.alphaTest>0&&(m.alphaTest.value=p.alphaTest)}function h(m,p){m.specular.value.copy(p.specular),m.shininess.value=Math.max(p.shininess,1e-4)}function d(m,p){p.gradientMap&&(m.gradientMap.value=p.gradientMap)}function u(m,p){m.metalness.value=p.metalness,p.metalnessMap&&(m.metalnessMap.value=p.metalnessMap,e(p.metalnessMap,m.metalnessMapTransform)),m.roughness.value=p.roughness,p.roughnessMap&&(m.roughnessMap.value=p.roughnessMap,e(p.roughnessMap,m.roughnessMapTransform)),p.envMap&&(m.envMapIntensity.value=p.envMapIntensity)}function f(m,p,b){m.ior.value=p.ior,p.sheen>0&&(m.sheenColor.value.copy(p.sheenColor).multiplyScalar(p.sheen),m.sheenRoughness.value=p.sheenRoughness,p.sheenColorMap&&(m.sheenColorMap.value=p.sheenColorMap,e(p.sheenColorMap,m.sheenColorMapTransform)),p.sheenRoughnessMap&&(m.sheenRoughnessMap.value=p.sheenRoughnessMap,e(p.sheenRoughnessMap,m.sheenRoughnessMapTransform))),p.clearcoat>0&&(m.clearcoat.value=p.clearcoat,m.clearcoatRoughness.value=p.clearcoatRoughness,p.clearcoatMap&&(m.clearcoatMap.value=p.clearcoatMap,e(p.clearcoatMap,m.clearcoatMapTransform)),p.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=p.clearcoatRoughnessMap,e(p.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),p.clearcoatNormalMap&&(m.clearcoatNormalMap.value=p.clearcoatNormalMap,e(p.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(p.clearcoatNormalScale),p.side===Ze&&m.clearcoatNormalScale.value.negate())),p.dispersion>0&&(m.dispersion.value=p.dispersion),p.retroreflectivity>0&&(m.retroreflectivity.value=p.retroreflectivity),p.iridescence>0&&(m.iridescence.value=p.iridescence,m.iridescenceIOR.value=p.iridescenceIOR,m.iridescenceThicknessMinimum.value=p.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=p.iridescenceThicknessRange[1],p.iridescenceMap&&(m.iridescenceMap.value=p.iridescenceMap,e(p.iridescenceMap,m.iridescenceMapTransform)),p.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=p.iridescenceThicknessMap,e(p.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),p.transmission>0&&(m.transmission.value=p.transmission,m.transmissionSamplerMap.value=b.texture,m.transmissionSamplerSize.value.set(b.width,b.height),p.transmissionMap&&(m.transmissionMap.value=p.transmissionMap,e(p.transmissionMap,m.transmissionMapTransform)),m.thickness.value=p.thickness,p.thicknessMap&&(m.thicknessMap.value=p.thicknessMap,e(p.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=p.attenuationDistance,m.attenuationColor.value.copy(p.attenuationColor)),p.anisotropy>0&&(m.anisotropyVector.value.set(p.anisotropy*Math.cos(p.anisotropyRotation),p.anisotropy*Math.sin(p.anisotropyRotation)),p.anisotropyMap&&(m.anisotropyMap.value=p.anisotropyMap,e(p.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=p.specularIntensity,m.specularColor.value.copy(p.specularColor),p.specularColorMap&&(m.specularColorMap.value=p.specularColorMap,e(p.specularColorMap,m.specularColorMapTransform)),p.specularIntensityMap&&(m.specularIntensityMap.value=p.specularIntensityMap,e(p.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,p){p.matcap&&(m.matcap.value=p.matcap)}function v(m,p){let b=t.get(p).light;m.referencePosition.value.setFromMatrixPosition(b.matrixWorld),m.nearDistance.value=b.shadow.camera.near,m.farDistance.value=b.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:s}}function Jy(n,t,e,i){let s={},r={},a=[],o=n.getParameter(n.MAX_UNIFORM_BUFFER_BINDINGS);function l(_,E){let S=E.program;i.uniformBlockBinding(_,S)}function c(_,E){let S=s[_.id];S===void 0&&(m(_),S=h(_),s[_.id]=S,_.addEventListener("dispose",b));let A=E.program;i.updateUBOMapping(_,A);let x=t.render.frame;r[_.id]!==x&&(u(_),r[_.id]=x)}function h(_){let E=d();_.__bindingPointIndex=E;let S=n.createBuffer(),A=_.__size,x=_.usage;return n.bindBuffer(n.UNIFORM_BUFFER,S),n.bufferData(n.UNIFORM_BUFFER,A,x),n.bindBuffer(n.UNIFORM_BUFFER,null),n.bindBufferBase(n.UNIFORM_BUFFER,E,S),S}function d(){for(let _=0;_<o;_++)if(a.indexOf(_)===-1)return a.push(_),_;return ue("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function u(_){let E=s[_.id],S=_.uniforms,A=_.__cache;n.bindBuffer(n.UNIFORM_BUFFER,E);for(let x=0,T=S.length;x<T;x++){let C=S[x];if(Array.isArray(C))for(let D=0,H=C.length;D<H;D++)f(C[D],x,D,A);else f(C,x,0,A)}n.bindBuffer(n.UNIFORM_BUFFER,null)}function f(_,E,S,A){if(v(_,E,S,A)===!0){let x=_.__offset,T=_.value;if(Array.isArray(T)){let C=0;for(let D=0;D<T.length;D++){let H=T[D],z=p(H);g(H,_.__data,C),typeof H!="number"&&typeof H!="boolean"&&!H.isMatrix3&&!ArrayBuffer.isView(H)&&(C+=z.storage/Float32Array.BYTES_PER_ELEMENT)}}else g(T,_.__data,0);n.bufferSubData(n.UNIFORM_BUFFER,x,_.__data)}}function g(_,E,S){typeof _=="number"||typeof _=="boolean"?E[0]=_:_.isMatrix3?(E[0]=_.elements[0],E[1]=_.elements[1],E[2]=_.elements[2],E[3]=0,E[4]=_.elements[3],E[5]=_.elements[4],E[6]=_.elements[5],E[7]=0,E[8]=_.elements[6],E[9]=_.elements[7],E[10]=_.elements[8],E[11]=0):ArrayBuffer.isView(_)?E.set(new _.constructor(_.buffer,_.byteOffset,E.length)):_.toArray(E,S)}function v(_,E,S,A){let x=_.value,T=E+"_"+S;if(A[T]===void 0)return typeof x=="number"||typeof x=="boolean"?A[T]=x:ArrayBuffer.isView(x)?A[T]=x.slice():A[T]=x.clone(),!0;{let C=A[T];if(typeof x=="number"||typeof x=="boolean"){if(C!==x)return A[T]=x,!0}else{if(ArrayBuffer.isView(x))return!0;if(C.equals(x)===!1)return C.copy(x),!0}}return!1}function m(_){let E=_.uniforms,S=0,A=16;for(let T=0,C=E.length;T<C;T++){let D=Array.isArray(E[T])?E[T]:[E[T]];for(let H=0,z=D.length;H<z;H++){let F=D[H],q=Array.isArray(F.value)?F.value:[F.value];for(let Q=0,Y=q.length;Q<Y;Q++){let mt=q[Q],nt=p(mt),lt=S%A,ut=lt%nt.boundary,Yt=lt+ut;S+=ut,Yt!==0&&A-Yt<nt.storage&&(S+=A-Yt),F.__data=new Float32Array(nt.storage/Float32Array.BYTES_PER_ELEMENT),F.__offset=S,S+=nt.storage}}}let x=S%A;return x>0&&(S+=A-x),_.__size=S,_.__cache={},this}function p(_){let E={boundary:0,storage:0};return typeof _=="number"||typeof _=="boolean"?(E.boundary=4,E.storage=4):_.isVector2?(E.boundary=8,E.storage=8):_.isVector3||_.isColor?(E.boundary=16,E.storage=12):_.isVector4?(E.boundary=16,E.storage=16):_.isMatrix3?(E.boundary=48,E.storage=48):_.isMatrix4?(E.boundary=64,E.storage=64):_.isTexture?oe("WebGLRenderer: Texture samplers can not be part of an uniforms group."):ArrayBuffer.isView(_)?(E.boundary=16,E.storage=_.byteLength):oe("WebGLRenderer: Unsupported uniform value type.",_),E}function b(_){let E=_.target;E.removeEventListener("dispose",b);let S=a.indexOf(E.__bindingPointIndex);a.splice(S,1),n.deleteBuffer(s[E.id]),delete s[E.id],delete r[E.id]}function w(){for(let _ in s)n.deleteBuffer(s[_]);a=[],s={},r={}}return{bind:l,update:c,dispose:w}}function jy(){return Hn===null&&(Hn=new Bs($y,16,16,ws,bn),Hn.name="DFG_LUT",Hn.minFilter=Ci,Hn.magFilter=Ci,Hn.wrapS=Cn,Hn.wrapT=Cn,Hn.generateMipmaps=!1,Hn.needsUpdate=!0),Hn}var hm,um,dm,fm,pm,mm,gm,xm,ym,vm,_m,bm,Mm,Sm,Em,wm,Tm,Rm,Am,Cm,Lm,Pm,Im,Dm,Um,Nm,Fm,Bm,km,Om,Hm,zm,Gm,Vm,Wm,Xm,qm,Ym,Zm,Jm,$m,jm,Km,Qm,tg,eg,ig,ng,sg,rg,ag,og,lg,cg,hg,ug,dg,fg,pg,mg,gg,xg,yg,vg,_g,bg,Mg,Sg,Eg,wg,Tg,Rg,Ag,Cg,Lg,Pg,Ig,Dg,Ug,Ng,Fg,Bg,kg,Og,Hg,zg,Gg,Vg,Wg,Xg,qg,Yg,Zg,Jg,$g,jg,Kg,Qg,t1,e1,i1,n1,s1,r1,a1,o1,l1,c1,h1,u1,d1,f1,p1,m1,g1,x1,y1,v1,_1,b1,M1,S1,E1,w1,T1,R1,A1,C1,L1,P1,I1,D1,U1,N1,F1,B1,k1,O1,H1,z1,G1,V1,ye,Gt,zn,pc,W1,Zd,Gr,$1,j1,K1,Ja,Td,a0,o0,l0,c0,Q1,qs,Wr,gc,hx,Jd,d0,$d,jd,Kd,Ld,Pd,Id,Dd,Ud,f0,p0,m0,h0,Vr,Qx,ty,Bd,sy,mc,hy,uy,fy,my,xy,vy,by,wy,x0,y0,Dy,By,ky,Oy,Hy,qd,$a,u0,Xy,qy,v0,_0,Yy,Qd,$y,Hn,xc,Ei=Ye(()=>{r0();r0();hm=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,um=`#ifdef USE_ALPHAHASH
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
#endif`,dm=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,fm=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,pm=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,mm=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,gm=`#ifdef USE_AOMAP
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
#endif`,xm=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,ym=`#ifdef USE_BATCHING
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
#endif`,vm=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,_m=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,bm=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,Mm=`float G_BlinnPhong_Implicit( ) {
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
} // validated`,Sm=`#ifdef USE_IRIDESCENCE
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
#endif`,Em=`#ifdef USE_BUMPMAP
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
#endif`,wm=`#if NUM_CLIPPING_PLANES > 0
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
#endif`,Tm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,Rm=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,Am=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,Cm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#endif`,Lm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#endif`,Pm=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec4 vColor;
#endif`,Im=`#if defined( USE_COLOR ) || defined( USE_COLOR_ALPHA ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
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
#endif`,Dm=`#define PI 3.141592653589793
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
} // validated`,Um=`#ifdef ENVMAP_TYPE_CUBE_UV
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
#endif`,Nm=`vec3 transformedNormal = objectNormal;
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
#endif`,Fm=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,Bm=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,km=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,Om=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,Hm="gl_FragColor = linearToOutputTexel( gl_FragColor );",zm=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,Gm=`#ifdef USE_ENVMAP
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
#endif`,Vm=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,Wm=`#ifdef USE_ENVMAP
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
#endif`,Xm=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,qm=`#ifdef USE_ENVMAP
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
#endif`,Ym=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,Zm=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,Jm=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,$m=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,jm=`#ifdef USE_GRADIENTMAP
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
}`,Km=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,Qm=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,tg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,eg=`uniform bool receiveShadow;
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
#include <lightprobes_pars_fragment>`,ig=`#ifdef USE_ENVMAP
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
#endif`,ng=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,sg=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,rg=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,ag=`varying vec3 vViewPosition;
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
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,og=`PhysicalMaterial material;
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
#endif`,lg=`uniform sampler2D dfgLUT;
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
}`,cg=`
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
#endif`,hg=`#if defined( RE_IndirectDiffuse )
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
#endif`,ug=`#if defined( RE_IndirectDiffuse )
	#if defined( LAMBERT ) || defined( PHONG )
		irradiance += iblIrradiance;
	#endif
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,dg=`#ifdef USE_LIGHT_PROBES_GRID
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
#endif`,fg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,pg=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,mg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,gg=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,xg=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,yg=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,vg=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
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
#endif`,_g=`#if defined( USE_POINTS_UV )
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
#endif`,bg=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,Mg=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Sg=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Eg=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,wg=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Tg=`#ifdef USE_MORPHTARGETS
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
#endif`,Rg=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Ag=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
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
vec3 nonPerturbedNormal = normal;`,Cg=`#ifdef USE_NORMALMAP_OBJECTSPACE
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
#endif`,Lg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Pg=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Ig=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
		#ifdef FLIP_SIDED
			vBitangent = - vBitangent;
		#endif
	#endif
#endif`,Dg=`#ifdef USE_NORMALMAP
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
#endif`,Ug=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,Ng=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,Fg=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,Bg=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,kg=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,Og=`vec3 packNormalToRGB( const in vec3 normal ) {
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
}`,Hg=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,zg=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,Gg=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,Vg=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,Wg=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,Xg=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,qg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Yg=`#if NUM_SPOT_LIGHT_COORDS > 0
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
#endif`,Zg=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_SUN_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
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
#endif`,Jg=`float getShadowMask() {
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
}`,$g=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,jg=`#ifdef USE_SKINNING
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
#endif`,Kg=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,Qg=`#ifdef USE_SKINNING
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
#endif`,t1=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,e1=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,i1=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,n1=`#ifndef saturate
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
vec3 CustomToneMapping( vec3 color ) { return color; }`,s1=`#ifdef USE_TRANSMISSION
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
#endif`,r1=`#ifdef USE_TRANSMISSION
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
#endif`,a1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,o1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,l1=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
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
#endif`,c1=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`,h1=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,u1=`uniform sampler2D t2D;
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
}`,d1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,f1=`#ifdef ENVMAP_TYPE_CUBE
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
}`,p1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,m1=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,g1=`#include <common>
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
}`,x1=`#if DEPTH_PACKING == 3200
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
}`,y1=`#define DISTANCE
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
}`,v1=`#define DISTANCE
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
}`,_1=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,b1=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,M1=`uniform float scale;
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
}`,S1=`uniform vec3 diffuse;
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
}`,E1=`#include <common>
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
}`,w1=`uniform vec3 diffuse;
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
}`,T1=`#define LAMBERT
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
}`,R1=`#define LAMBERT
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
}`,A1=`#define MATCAP
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
}`,C1=`#define MATCAP
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
}`,L1=`#define NORMAL
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
}`,P1=`#define NORMAL
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
}`,I1=`#define PHONG
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
}`,D1=`#define PHONG
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
}`,U1=`#define STANDARD
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
}`,N1=`#define STANDARD
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
}`,F1=`#define TOON
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
}`,B1=`#define TOON
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
}`,k1=`uniform float size;
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
}`,O1=`uniform vec3 diffuse;
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
}`,H1=`#include <common>
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
}`,z1=`uniform vec3 color;
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
}`,G1=`uniform float rotation;
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
}`,V1=`uniform vec3 diffuse;
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
}`,ye={alphahash_fragment:hm,alphahash_pars_fragment:um,alphamap_fragment:dm,alphamap_pars_fragment:fm,alphatest_fragment:pm,alphatest_pars_fragment:mm,aomap_fragment:gm,aomap_pars_fragment:xm,batching_pars_vertex:ym,batching_vertex:vm,begin_vertex:_m,beginnormal_vertex:bm,bsdfs:Mm,iridescence_fragment:Sm,bumpmap_pars_fragment:Em,clipping_planes_fragment:wm,clipping_planes_pars_fragment:Tm,clipping_planes_pars_vertex:Rm,clipping_planes_vertex:Am,color_fragment:Cm,color_pars_fragment:Lm,color_pars_vertex:Pm,color_vertex:Im,common:Dm,cube_uv_reflection_fragment:Um,defaultnormal_vertex:Nm,displacementmap_pars_vertex:Fm,displacementmap_vertex:Bm,emissivemap_fragment:km,emissivemap_pars_fragment:Om,colorspace_fragment:Hm,colorspace_pars_fragment:zm,envmap_fragment:Gm,envmap_common_pars_fragment:Vm,envmap_pars_fragment:Wm,envmap_pars_vertex:Xm,envmap_physical_pars_fragment:ig,envmap_vertex:qm,fog_vertex:Ym,fog_pars_vertex:Zm,fog_fragment:Jm,fog_pars_fragment:$m,gradientmap_pars_fragment:jm,lightmap_pars_fragment:Km,lights_lambert_fragment:Qm,lights_lambert_pars_fragment:tg,lights_pars_begin:eg,lights_toon_fragment:ng,lights_toon_pars_fragment:sg,lights_phong_fragment:rg,lights_phong_pars_fragment:ag,lights_physical_fragment:og,lights_physical_pars_fragment:lg,lights_fragment_begin:cg,lights_fragment_maps:hg,lights_fragment_end:ug,lightprobes_pars_fragment:dg,logdepthbuf_fragment:fg,logdepthbuf_pars_fragment:pg,logdepthbuf_pars_vertex:mg,logdepthbuf_vertex:gg,map_fragment:xg,map_pars_fragment:yg,map_particle_fragment:vg,map_particle_pars_fragment:_g,metalnessmap_fragment:bg,metalnessmap_pars_fragment:Mg,morphinstance_vertex:Sg,morphcolor_vertex:Eg,morphnormal_vertex:wg,morphtarget_pars_vertex:Tg,morphtarget_vertex:Rg,normal_fragment_begin:Ag,normal_fragment_maps:Cg,normal_pars_fragment:Lg,normal_pars_vertex:Pg,normal_vertex:Ig,normalmap_pars_fragment:Dg,clearcoat_normal_fragment_begin:Ug,clearcoat_normal_fragment_maps:Ng,clearcoat_pars_fragment:Fg,iridescence_pars_fragment:Bg,opaque_fragment:kg,packing:Og,premultiplied_alpha_fragment:Hg,project_vertex:zg,dithering_fragment:Gg,dithering_pars_fragment:Vg,roughnessmap_fragment:Wg,roughnessmap_pars_fragment:Xg,shadowmap_pars_fragment:qg,shadowmap_pars_vertex:Yg,shadowmap_vertex:Zg,shadowmask_pars_fragment:Jg,skinbase_vertex:$g,skinning_pars_vertex:jg,skinning_vertex:Kg,skinnormal_vertex:Qg,specularmap_fragment:t1,specularmap_pars_fragment:e1,tonemapping_fragment:i1,tonemapping_pars_fragment:n1,transmission_fragment:s1,transmission_pars_fragment:r1,uv_pars_fragment:a1,uv_pars_vertex:o1,uv_vertex:l1,worldpos_vertex:c1,background_vert:h1,background_frag:u1,backgroundCube_vert:d1,backgroundCube_frag:f1,cube_vert:p1,cube_frag:m1,depth_vert:g1,depth_frag:x1,distance_vert:y1,distance_frag:v1,equirect_vert:_1,equirect_frag:b1,linedashed_vert:M1,linedashed_frag:S1,meshbasic_vert:E1,meshbasic_frag:w1,meshlambert_vert:T1,meshlambert_frag:R1,meshmatcap_vert:A1,meshmatcap_frag:C1,meshnormal_vert:L1,meshnormal_frag:P1,meshphong_vert:I1,meshphong_frag:D1,meshphysical_vert:U1,meshphysical_frag:N1,meshtoon_vert:F1,meshtoon_frag:B1,points_vert:k1,points_frag:O1,shadow_vert:H1,shadow_frag:z1,sprite_vert:G1,sprite_frag:V1},Gt={common:{diffuse:{value:new gt(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new pe}},envmap:{envMap:{value:null},envMapRotation:{value:new pe},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new pe}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new pe}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new pe},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new pe},normalScale:{value:new vt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new pe},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new pe}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new pe}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new pe}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new gt(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},sunLights:{value:[],properties:{direction:{},color:{}}},sunLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},sunShadowMatrix:{value:[]},sunShadowCascade:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null},probesSH:{value:null},probesMin:{value:new I},probesMax:{value:new I},probesResolution:{value:new I}},points:{diffuse:{value:new gt(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0},uvTransform:{value:new pe}},sprite:{diffuse:{value:new gt(16777215)},opacity:{value:1},center:{value:new vt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new pe},alphaMap:{value:null},alphaMapTransform:{value:new pe},alphaTest:{value:0}}},zn={basic:{uniforms:Ui([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.fog]),vertexShader:ye.meshbasic_vert,fragmentShader:ye.meshbasic_frag},lambert:{uniforms:Ui([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new gt(0)},envMapIntensity:{value:1}}]),vertexShader:ye.meshlambert_vert,fragmentShader:ye.meshlambert_frag},phong:{uniforms:Ui([Gt.common,Gt.specularmap,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,Gt.lights,{emissive:{value:new gt(0)},specular:{value:new gt(1118481)},shininess:{value:30},envMapIntensity:{value:1}}]),vertexShader:ye.meshphong_vert,fragmentShader:ye.meshphong_frag},standard:{uniforms:Ui([Gt.common,Gt.envmap,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.roughnessmap,Gt.metalnessmap,Gt.fog,Gt.lights,{emissive:{value:new gt(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag},toon:{uniforms:Ui([Gt.common,Gt.aomap,Gt.lightmap,Gt.emissivemap,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.gradientmap,Gt.fog,Gt.lights,{emissive:{value:new gt(0)}}]),vertexShader:ye.meshtoon_vert,fragmentShader:ye.meshtoon_frag},matcap:{uniforms:Ui([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,Gt.fog,{matcap:{value:null}}]),vertexShader:ye.meshmatcap_vert,fragmentShader:ye.meshmatcap_frag},points:{uniforms:Ui([Gt.points,Gt.fog]),vertexShader:ye.points_vert,fragmentShader:ye.points_frag},dashed:{uniforms:Ui([Gt.common,Gt.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:ye.linedashed_vert,fragmentShader:ye.linedashed_frag},depth:{uniforms:Ui([Gt.common,Gt.displacementmap]),vertexShader:ye.depth_vert,fragmentShader:ye.depth_frag},normal:{uniforms:Ui([Gt.common,Gt.bumpmap,Gt.normalmap,Gt.displacementmap,{opacity:{value:1}}]),vertexShader:ye.meshnormal_vert,fragmentShader:ye.meshnormal_frag},sprite:{uniforms:Ui([Gt.sprite,Gt.fog]),vertexShader:ye.sprite_vert,fragmentShader:ye.sprite_frag},background:{uniforms:{uvTransform:{value:new pe},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:ye.background_vert,fragmentShader:ye.background_frag},backgroundCube:{uniforms:{envMap:{value:null},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new pe}},vertexShader:ye.backgroundCube_vert,fragmentShader:ye.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:ye.cube_vert,fragmentShader:ye.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:ye.equirect_vert,fragmentShader:ye.equirect_frag},distance:{uniforms:Ui([Gt.common,Gt.displacementmap,{referencePosition:{value:new I},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:ye.distance_vert,fragmentShader:ye.distance_frag},shadow:{uniforms:Ui([Gt.lights,Gt.fog,{color:{value:new gt(0)},opacity:{value:1}}]),vertexShader:ye.shadow_vert,fragmentShader:ye.shadow_frag}};zn.physical={uniforms:Ui([zn.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new pe},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new pe},clearcoatNormalScale:{value:new vt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new pe},dispersion:{value:0},retroreflectivity:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new pe},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new pe},sheen:{value:0},sheenColor:{value:new gt(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new pe},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new pe},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new pe},transmissionSamplerSize:{value:new vt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new pe},attenuationDistance:{value:0},attenuationColor:{value:new gt(0)},specularColor:{value:new gt(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new pe},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new pe},anisotropyVector:{value:new vt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new pe}}]),vertexShader:ye.meshphysical_vert,fragmentShader:ye.meshphysical_frag};pc={r:0,b:0,g:0},W1=new Ie,Zd=new pe;Zd.set(-1,0,0,0,1,0,0,0,1);Gr=4,$1=6,j1=20,K1=256,Ja=new Nr,Td=new gt,a0=null,o0=0,l0=0,c0=!1,Q1=new I,qs=new I,Wr=class{constructor(t){this._renderer=t,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(t,e=0,i=.1,s=100,r={}){let{size:a=256,position:o=Q1}=r;a0=this._renderer.getRenderTarget(),o0=this._renderer.getActiveCubeFace(),l0=this._renderer.getActiveMipmapLevel(),c0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(a);let l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(t,i,s,l,o),e>0&&this._blur(l,0,0,e),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(t,e=null){return this._fromTexture(t,e)}fromCubemap(t,e=null){return this._fromTexture(t,e)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=Cd(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=Ad(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(t){this._lodMax=Math.floor(Math.log2(t)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let t=0;t<this._lodMeshes.length;t++)this._lodMeshes[t].geometry.dispose()}_cleanup(t){this._renderer.setRenderTarget(a0,o0,l0),this._renderer.xr.enabled=c0,t.scissorTest=!1,zr(t,0,0,t.width,t.height)}_fromTexture(t,e){t.mapping===Ms||t.mapping===Ws?this._setSize(t.image.length===0?16:t.image[0].width||t.image[0].image.width):this._setSize(t.image.width/4),a0=this._renderer.getRenderTarget(),o0=this._renderer.getActiveCubeFace(),l0=this._renderer.getActiveMipmapLevel(),c0=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;let i=e||this._allocateTargets();return this._textureToCubeUV(t,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){let t=3*Math.max(this._cubeSize,112),e=4*this._cubeSize,i={magFilter:Ci,minFilter:Ci,generateMipmaps:!1,type:bn,format:on,colorSpace:ua,depthBuffer:!1},s=Rd(t,e,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==t||this._pingPongRenderTarget.height!==e){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=Rd(t,e,i);let{_lodMax:r}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods}=tx(r)),this._blurMaterial=ix(r,t,e),this._ggxMaterial=ex(r,t,e)}return s}_compileMaterial(t){let e=new At(new xe,t);this._renderer.compile(e,Ja)}_sceneToCubeUV(t,e,i,s,r){let l=new xi(90,1,e,i),c=[1,-1,1,1,1,1],h=[1,1,1,-1,-1,-1],d=this._renderer,u=d.autoClear,f=d.toneMapping;d.getClearColor(Td),d.toneMapping=vn,d.autoClear=!1,d.state.buffers.depth.getReversed()&&(d.setRenderTarget(s),d.clearDepth(),d.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new At(new Ne,new Se({name:"PMREM.Background",side:Ze,depthWrite:!1,depthTest:!1})));let v=this._backgroundBox,m=v.material,p=!1,b=t.background;b?b.isColor&&(m.color.copy(b),t.background=null,p=!0):(m.color.copy(Td),p=!0);for(let w=0;w<6;w++){let _=w%3;_===0?(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x+h[w],r.y,r.z)):_===1?(l.up.set(0,0,c[w]),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y+h[w],r.z)):(l.up.set(0,c[w],0),l.position.set(r.x,r.y,r.z),l.lookAt(r.x,r.y,r.z+h[w]));let E=this._cubeSize;zr(s,_*E,w>2?E:0,E,E),d.setRenderTarget(s),p&&d.render(v,l),d.render(t,l)}d.toneMapping=f,d.autoClear=u,t.background=b}_textureToCubeUV(t,e){let i=this._renderer,s=t.mapping===Ms||t.mapping===Ws;s?(this._cubemapMaterial===null&&(this._cubemapMaterial=Cd()),this._cubemapMaterial.uniforms.flipEnvMap.value=t.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=Ad());let r=s?this._cubemapMaterial:this._equirectMaterial,a=this._lodMeshes[0];a.material=r;let o=r.uniforms;o.envMap.value=t;let l=this._cubeSize;zr(e,0,0,3*l,2*l),i.setRenderTarget(e),i.render(a,Ja)}_applyPMREM(t){let e=this._renderer,i=e.autoClear;e.autoClear=!1;let s=this._lodMeshes.length;for(let r=1;r<s;r++)this._applyGGXFilter(t,r-1,r);e.autoClear=i}_applyGGXFilter(t,e,i){let s=this._renderer,r=this._pingPongRenderTarget,a=this._ggxMaterial,o=this._lodMeshes[i];o.material=a;let l=a.uniforms,c=i/(this._lodMeshes.length-1),h=e/(this._lodMeshes.length-1),d=Math.sqrt(c*c-h*h),u=c*1.25,f=d*u,{_lodMax:g}=this,v=this._sizeLods[i],m=3*v*(i>g-Gr?i-g+Gr:0),p=4*(this._cubeSize-v);l.envMap.value=t.texture,l.roughness.value=f,l.mipInt.value=g-e,zr(r,m,p,3*v,2*v),s.setRenderTarget(r),s.render(o,Ja),l.envMap.value=r.texture,l.roughness.value=0,l.mipInt.value=g-i,zr(t,m,p,3*v,2*v),s.setRenderTarget(t),s.render(o,Ja)}_blur(t,e,i,s){let r=this._pingPongRenderTarget,a=Math.min(s,Math.PI)/Math.SQRT2;this._blurPass(t,r,e,i,a),this._blurPass(r,t,i,i,a)}_blurPass(t,e,i,s,r){let a=this._renderer,o=this._blurMaterial,l=this._lodMeshes[s];l.material=o;let c=o.uniforms;c.envMap.value=t.texture,c.sigma.value=r,c.mipInt.value=this._lodMax-i;let h=this._sizeLods[s],d=3*h*(s>this._lodMax-Gr?s-this._lodMax+Gr:0),u=4*(this._cubeSize-h);zr(e,d,u,3*h,2*h),a.setRenderTarget(e),a.render(l,Ja)}};gc=class extends Hi{constructor(t=1,e={}){super(t,t,e),this.isWebGLCubeRenderTarget=!0;let i={width:t,height:t,depth:1},s=[i,i,i,i,i,i];this.texture=new Ma(s),this._setTextureOptions(e),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(t,e){this.texture.type=e.type,this.texture.colorSpace=e.colorSpace,this.texture.generateMipmaps=e.generateMipmaps,this.texture.minFilter=e.minFilter,this.texture.magFilter=e.magFilter;let i={uniforms:{tEquirect:{value:null}},vertexShader:`

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
			`},s=new Ne(5,5,5),r=new ai({name:"CubemapFromEquirect",uniforms:Xs(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Ze,blending:On});r.uniforms.tEquirect.value=e;let a=new At(s,r),o=e.minFilter;return e.minFilter===Ss&&(e.minFilter=Ci),new El(1,10,this).update(t,a),e.minFilter=o,a.geometry.dispose(),a.material.dispose(),this}clear(t,e=!0,i=!0,s=!0){let r=t.getRenderTarget();for(let a=0;a<6;a++)t.setRenderTarget(this,a),t.clear(e,i,s);t.setRenderTarget(r)}};hx={[Oh]:"LINEAR_TONE_MAPPING",[Hh]:"REINHARD_TONE_MAPPING",[zh]:"CINEON_TONE_MAPPING",[Gh]:"ACES_FILMIC_TONE_MAPPING",[Wh]:"AGX_TONE_MAPPING",[Oa]:"NEUTRAL_TONE_MAPPING",[Vh]:"CUSTOM_TONE_MAPPING"};Jd=new ki,d0=new gs(1,1),$d=new ma,jd=new el,Kd=new Ma,Ld=[],Pd=[],Id=new Float32Array(16),Dd=new Float32Array(9),Ud=new Float32Array(4);f0=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.setValue=Px(e.type)}},p0=class{constructor(t,e,i){this.id=t,this.addr=i,this.cache=[],this.type=e.type,this.size=e.size,this.setValue=jx(e.type)}},m0=class{constructor(t){this.id=t,this.seq=[],this.map={}}setValue(t,e,i){let s=this.seq;for(let r=0,a=s.length;r!==a;++r){let o=s[r];o.setValue(t,e[o.id],i)}}},h0=/(\w+)(\])?(\[|\.)?/g;Vr=class{constructor(t,e){this.seq=[],this.map={};let i=t.getProgramParameter(e,t.ACTIVE_UNIFORMS);for(let a=0;a<i;++a){let o=t.getActiveUniform(e,a),l=t.getUniformLocation(e,o.name);Kx(o,l,this)}let s=[],r=[];for(let a of this.seq)a.type===t.SAMPLER_2D_SHADOW||a.type===t.SAMPLER_CUBE_SHADOW||a.type===t.SAMPLER_2D_ARRAY_SHADOW?s.push(a):r.push(a);s.length>0&&(this.seq=s.concat(r))}setValue(t,e,i,s){let r=this.map[e];r!==void 0&&r.setValue(t,i,s)}setOptional(t,e,i){let s=e[i];s!==void 0&&this.setValue(t,i,s)}static upload(t,e,i,s){for(let r=0,a=e.length;r!==a;++r){let o=e[r],l=i[o.id];l.needsUpdate!==!1&&o.setValue(t,l.value,s)}}static seqWithValue(t,e){let i=[];for(let s=0,r=t.length;s!==r;++s){let a=t[s];a.id in e&&i.push(a)}return i}};Qx=37297,ty=0;Bd=new pe;sy={[Oh]:"Linear",[Hh]:"Reinhard",[zh]:"Cineon",[Gh]:"ACESFilmic",[Wh]:"AgX",[Oa]:"Neutral",[Vh]:"Custom"};mc=new I;hy=/^[ \t]*#include +<([\w\d./]+)>/gm;uy=new Map;fy=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;my={[ka]:"SHADOWMAP_TYPE_PCF",[Fr]:"SHADOWMAP_TYPE_VSM"};xy={[Ms]:"ENVMAP_TYPE_CUBE",[Ws]:"ENVMAP_TYPE_CUBE",[Ha]:"ENVMAP_TYPE_CUBE_UV"};vy={[Ws]:"ENVMAP_MODE_REFRACTION"};by={[Tl]:"ENVMAP_BLENDING_MULTIPLY",[ed]:"ENVMAP_BLENDING_MIX",[id]:"ENVMAP_BLENDING_ADD"};wy=0,x0=class{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(t,e,i){let s=this._getShaderCacheForMaterial(t);return s.has(e)===!1&&(s.add(e),e.usedTimes++),s.has(i)===!1&&(s.add(i),i.usedTimes++),this}remove(t){let e=this.materialCache.get(t);for(let i of e)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(t),this}getVertexShaderStage(t){return this._getShaderStage(t.vertexShader)}getFragmentShaderStage(t){return this._getShaderStage(t.fragmentShader)}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(t){let e=this.materialCache,i=e.get(t);return i===void 0&&(i=new Set,e.set(t,i)),i}_getShaderStage(t){let e=this.shaderCache,i=e.get(t);return i===void 0&&(i=new y0(t),e.set(t,i)),i}},y0=class{constructor(t){this.id=wy++,this.code=t,this.usedTimes=0}};Dy=0;By=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,ky=`uniform sampler2D shadow_pass;
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
}`,Oy=[new I(1,0,0),new I(-1,0,0),new I(0,1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1)],Hy=[new I(0,-1,0),new I(0,-1,0),new I(0,0,1),new I(0,0,-1),new I(0,-1,0),new I(0,-1,0)],qd=new Ie,$a=new I,u0=new I;Xy=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,qy=`
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

}`,v0=class{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(t,e){if(this.texture===null){let i=new Sa(t.texture);(t.depthNear!==e.depthNear||t.depthFar!==e.depthFar)&&(this.depthNear=t.depthNear,this.depthFar=t.depthFar),this.texture=i}}getMesh(t){if(this.texture!==null&&this.mesh===null){let e=t.cameras[0].viewport,i=new ai({vertexShader:Xy,fragmentShader:qy,uniforms:{depthColor:{value:this.texture},depthWidth:{value:e.z},depthHeight:{value:e.w}}});this.mesh=new At(new es(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}},_0=class extends In{constructor(t,e){super();let i=this,s=null,r=1,a=null,o="local-floor",l=1,c=null,h=null,d=null,u=null,f=null,g=null,v=typeof XRWebGLBinding<"u",m=new v0,p={},b=e.getContextAttributes(),w=null,_=null,E=[],S=[],A=new vt,x=null,T=null,C=new xi;C.viewport=new Qe;let D=new xi;D.viewport=new Qe;let H=[C,D],z=new wl,F=null,q=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(it){let ht=E[it];return ht===void 0&&(ht=new Er,E[it]=ht),ht.getTargetRaySpace()},this.getControllerGrip=function(it){let ht=E[it];return ht===void 0&&(ht=new Er,E[it]=ht),ht.getGripSpace()},this.getHand=function(it){let ht=E[it];return ht===void 0&&(ht=new Er,E[it]=ht),ht.getHandSpace()};function Q(it){let ht=S.indexOf(it.inputSource);if(ht===-1)return;let Tt=E[ht];Tt!==void 0&&(Tt.update(it.inputSource,it.frame,c||a),Tt.dispatchEvent({type:it.type,data:it.inputSource}))}function Y(){s.removeEventListener("select",Q),s.removeEventListener("selectstart",Q),s.removeEventListener("selectend",Q),s.removeEventListener("squeeze",Q),s.removeEventListener("squeezestart",Q),s.removeEventListener("squeezeend",Q),s.removeEventListener("end",Y),s.removeEventListener("inputsourceschange",mt);for(let it=0;it<E.length;it++){let ht=S[it];ht!==null&&(S[it]=null,E[it].disconnect(ht))}F=null,q=null,m.reset();for(let it in p)delete p[it];if(t.setRenderTarget(w),f=null,u=null,d=null,s=null,_=null,de.stop(),i.isPresenting=!1,t.setPixelRatio(x),t.setSize(A.width,A.height,!1),T!==null){let it=T.camera;it.fov=T.fov,it.zoom=T.zoom,it.updateProjectionMatrix(),T=null}i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(it){r=it,i.isPresenting===!0&&oe("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(it){o=it,i.isPresenting===!0&&oe("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||a},this.setReferenceSpace=function(it){c=it},this.getBaseLayer=function(){return u!==null?u:f},this.getBinding=function(){return d===null&&v&&(d=new XRWebGLBinding(s,e)),d},this.getFrame=function(){return g},this.getSession=function(){return s},this.setSession=async function(it){if(s=it,s!==null){if(w=t.getRenderTarget(),s.addEventListener("select",Q),s.addEventListener("selectstart",Q),s.addEventListener("selectend",Q),s.addEventListener("squeeze",Q),s.addEventListener("squeezestart",Q),s.addEventListener("squeezeend",Q),s.addEventListener("end",Y),s.addEventListener("inputsourceschange",mt),b.xrCompatible!==!0&&await e.makeXRCompatible(),x=t.getPixelRatio(),t.getSize(A),v&&"createProjectionLayer"in XRWebGLBinding.prototype){let Tt=null,tt=null,rt=null;b.depth&&(rt=b.stencil?e.DEPTH24_STENCIL8:e.DEPTH_COMPONENT24,Tt=b.stencil?Es:Pn,tt=b.stencil?kr:_n);let yt={colorFormat:e.RGBA8,depthFormat:rt,scaleFactor:r};d=this.getBinding(),u=d.createProjectionLayer(yt),s.updateRenderState({layers:[u]}),t.setPixelRatio(1),t.setSize(u.textureWidth,u.textureHeight,!1),_=new Hi(u.textureWidth,u.textureHeight,{format:on,type:Wi,depthTexture:new gs(u.textureWidth,u.textureHeight,tt,void 0,void 0,void 0,void 0,void 0,void 0,Tt),stencilBuffer:b.stencil,colorSpace:t.outputColorSpace,samples:b.antialias?4:0,resolveDepthBuffer:u.ignoreDepthValues===!1,resolveStencilBuffer:u.ignoreDepthValues===!1,storeMultisampledDepthBuffer:u.ignoreDepthValues===!1,storeMultisampledStencilBuffer:u.ignoreDepthValues===!1})}else{let Tt={antialias:b.antialias,alpha:!0,depth:b.depth,stencil:b.stencil,framebufferScaleFactor:r};f=new XRWebGLLayer(s,e,Tt),s.updateRenderState({baseLayer:f}),t.setPixelRatio(1),t.setSize(f.framebufferWidth,f.framebufferHeight,!1),_=new Hi(f.framebufferWidth,f.framebufferHeight,{format:on,type:Wi,colorSpace:t.outputColorSpace,stencilBuffer:b.stencil,resolveDepthBuffer:f.ignoreDepthValues===!1,resolveStencilBuffer:f.ignoreDepthValues===!1,storeMultisampledDepthBuffer:f.ignoreDepthValues===!1,storeMultisampledStencilBuffer:f.ignoreDepthValues===!1})}_.isXRRenderTarget=!0,this.setFoveation(l),c=null,a=await s.requestReferenceSpace(o),de.setContext(s),de.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(s!==null)return s.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function mt(it){for(let ht=0;ht<it.removed.length;ht++){let Tt=it.removed[ht],tt=S.indexOf(Tt);tt>=0&&(S[tt]=null,E[tt].disconnect(Tt))}for(let ht=0;ht<it.added.length;ht++){let Tt=it.added[ht],tt=S.indexOf(Tt);if(tt===-1){for(let yt=0;yt<E.length;yt++)if(yt>=S.length){S.push(Tt),tt=yt;break}else if(S[yt]===null){S[yt]=Tt,tt=yt;break}if(tt===-1)break}let rt=E[tt];rt&&rt.connect(Tt)}}let nt=new I,lt=new I;function ut(it,ht,Tt){nt.setFromMatrixPosition(ht.matrixWorld),lt.setFromMatrixPosition(Tt.matrixWorld);let tt=nt.distanceTo(lt),rt=ht.projectionMatrix.elements,yt=Tt.projectionMatrix.elements,bt=rt[14]/(rt[10]-1),P=rt[14]/(rt[10]+1),G=(rt[9]+1)/rt[5],st=(rt[9]-1)/rt[5],$=(rt[8]-1)/rt[0],_t=(yt[8]+1)/yt[0],Pt=bt*$,Ht=bt*_t,kt=tt/(-$+_t),Wt=kt*-$;if(ht.matrixWorld.decompose(it.position,it.quaternion,it.scale),it.translateX(Wt),it.translateZ(kt),it.matrixWorld.compose(it.position,it.quaternion,it.scale),it.matrixWorldInverse.copy(it.matrixWorld).invert(),rt[10]===-1)it.projectionMatrix.copy(ht.projectionMatrix),it.projectionMatrixInverse.copy(ht.projectionMatrixInverse);else{let U=bt+kt,_e=P+kt,ce=Pt-Wt,R=Ht+(tt-Wt),y=G*P/_e*U,V=st*P/_e*U;it.projectionMatrix.makePerspective(ce,R,y,V,U,_e),it.projectionMatrixInverse.copy(it.projectionMatrix).invert()}}function Yt(it,ht){ht===null?it.matrixWorld.copy(it.matrix):it.matrixWorld.multiplyMatrices(ht.matrixWorld,it.matrix),it.matrixWorldInverse.copy(it.matrixWorld).invert()}this.updateCamera=function(it){if(s===null)return;let ht=it.near,Tt=it.far;m.texture!==null&&(m.depthNear>0&&(ht=m.depthNear),m.depthFar>0&&(Tt=m.depthFar)),z.near=D.near=C.near=ht,z.far=D.far=C.far=Tt,(F!==z.near||q!==z.far)&&(s.updateRenderState({depthNear:z.near,depthFar:z.far}),F=z.near,q=z.far),z.layers.mask=it.layers.mask|6,C.layers.mask=z.layers.mask&-5,D.layers.mask=z.layers.mask&-3;let tt=it.parent,rt=z.cameras;Yt(z,tt);for(let yt=0;yt<rt.length;yt++)Yt(rt[yt],tt);rt.length===2?ut(z,C,D):z.projectionMatrix.copy(C.projectionMatrix),T===null&&it.isPerspectiveCamera&&(T={camera:it,fov:it.fov,zoom:it.zoom}),Ut(it,z,tt)};function Ut(it,ht,Tt){Tt===null?it.matrix.copy(ht.matrixWorld):(it.matrix.copy(Tt.matrixWorld),it.matrix.invert(),it.matrix.multiply(ht.matrixWorld)),it.matrix.decompose(it.position,it.quaternion,it.scale),it.updateMatrixWorld(!0),it.projectionMatrix.copy(ht.projectionMatrix),it.projectionMatrixInverse.copy(ht.projectionMatrixInverse),it.isPerspectiveCamera&&(it.fov=Ko*2*Math.atan(1/it.projectionMatrix.elements[5]),it.zoom=1)}this.getCamera=function(){return z},this.getFoveation=function(){if(!(u===null&&f===null))return l},this.setFoveation=function(it){l=it,u!==null&&(u.fixedFoveation=it),f!==null&&f.fixedFoveation!==void 0&&(f.fixedFoveation=it)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(z)},this.getCameraTexture=function(it){return p[it]};let ie=null;function ne(it,ht){if(h=ht.getViewerPose(c||a),g=ht,h!==null){let Tt=h.views;f!==null&&(t.setRenderTargetFramebuffer(_,f.framebuffer),t.setRenderTarget(_));let tt=!1;Tt.length!==z.cameras.length&&(z.cameras.length=0,tt=!0);for(let P=0;P<Tt.length;P++){let G=Tt[P],st=null;if(f!==null)st=f.getViewport(G);else{let _t=d.getViewSubImage(u,G);st=_t.viewport,P===0&&(t.setRenderTargetTextures(_,_t.colorTexture,_t.depthStencilTexture),t.setRenderTarget(_))}let $=H[P];$===void 0&&($=new xi,$.layers.enable(P),$.viewport=new Qe,H[P]=$),$.matrix.fromArray(G.transform.matrix),$.matrix.decompose($.position,$.quaternion,$.scale),$.projectionMatrix.fromArray(G.projectionMatrix),$.projectionMatrixInverse.copy($.projectionMatrix).invert(),$.viewport.set(st.x,st.y,st.width,st.height),P===0&&(z.matrix.copy($.matrix),z.matrix.decompose(z.position,z.quaternion,z.scale)),tt===!0&&z.cameras.push($)}let rt=s.enabledFeatures;if(rt&&rt.includes("depth-sensing")&&s.depthUsage=="gpu-optimized"&&v){d=i.getBinding();let P=d.getDepthInformation(Tt[0]);P&&P.isValid&&P.texture&&m.init(P,s.renderState)}if(rt&&rt.includes("camera-access")&&v){t.state.unbindTexture(),d=i.getBinding();for(let P=0;P<Tt.length;P++){let G=Tt[P].camera;if(G){let st=p[G];st||(st=new Sa,p[G]=st);let $=d.getCameraImage(G);st.sourceTexture=$}}}}for(let Tt=0;Tt<E.length;Tt++){let tt=S[Tt],rt=E[Tt];tt!==null&&rt!==void 0&&rt.update(tt,ht,c||a)}ie&&ie(it,ht),ht.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:ht}),g=null}let de=new Yd;de.setAnimationLoop(ne),this.setAnimationLoop=function(it){ie=it},this.dispose=function(){}}},Yy=new Ie,Qd=new pe;Qd.set(-1,0,0,0,1,0,0,0,1);$y=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]),Hn=null;xc=class{constructor(t={}){let{canvas:e=fd(),context:i=null,depth:s=!0,stencil:r=!1,alpha:a=!1,antialias:o=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:h="default",failIfMajorPerformanceCaveat:d=!1,reversedDepthBuffer:u=!1,outputBufferType:f=Wi}=t;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=a;let v=f,m=new Set([Nl,Ul,Dl]),p=new Set([Wi,_n,Br,kr,Pl,Il]),b=new Uint32Array(4),w=new Int32Array(4),_=new I,E=null,S=null,A=[],x=[],T=null;this.domElement=e,this.debug={checkShaderErrors:!0,diagnostics:{keywords:!1},onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=vn,this.toneMappingExposure=1,this.transmissionResolutionScale=1;let C=this,D=!1,H=null,z=null,F=null,q=null;this._outputColorSpace=Ai;let Q=0,Y=0,mt=null,nt=-1,lt=null,ut=new Qe,Yt=new Qe,Ut=null,ie=new gt(0),ne=0,de=e.width,it=e.height,ht=1,Tt=null,tt=null,rt=new Qe(0,0,de,it),yt=new Qe(0,0,de,it),bt=!1,P=new Ar,G=!1,st=!1,$=new Ie,_t=new I,Pt=new Qe,Ht={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0},kt=!1;function Wt(){return mt===null?ht:1}let U=i;function _e(M,O){return e.getContext(M,O)}let ce,R,y,V,J,ot,Et,Z,X,et,xt,Rt,St,wt,It,Qt,re,k,Nt,dt,Dt,Ot,L;try{let M={alpha:!0,depth:s,stencil:r,antialias:o,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:h,failIfMajorPerformanceCaveat:d};if("setAttribute"in e&&e.setAttribute("data-engine",`three.js r${"186"}`),e.addEventListener("webglcontextlost",ft,!1),e.addEventListener("webglcontextrestored",Ft,!1),e.addEventListener("webglcontextcreationerror",Zt,!1),U===null){let O="webgl2";if(U=_e(O,M),U===null)throw _e(O)?new Error("THREE.WebGLRenderer: Error creating WebGL context with your selected attributes."):new Error("THREE.WebGLRenderer: Error creating WebGL context.")}B()}catch(M){throw e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",Ft,!1),e.removeEventListener("webglcontextcreationerror",Zt,!1),ue("WebGLRenderer: "+M.message),M}function B(){ce=new sx(U),ce.init(),Dt=new Wy(U,ce),R=new Z1(U,ce,t,Dt),y=new Gy(U,ce),R.reversedDepthBuffer&&u&&y.buffers.depth.setReversed(!0),z=U.createFramebuffer(),F=U.createFramebuffer(),q=U.createFramebuffer(),V=new ox(U),J=new Ay,ot=new Vy(U,ce,y,J,R,Dt,V),Et=new nx(C),Z=new cm(U),Ot=new q1(U,Z),X=new rx(U,Z,V,Ot),et=new cx(U,X,Z,Ot,V),k=new lx(U,R,ot),It=new J1(J),xt=new Ry(C,Et,ce,R,Ot,It),Rt=new Zy(C,J),St=new Ly,wt=new Fy(ce),re=new X1(C,Et,y,et,g,l),Qt=new zy(C,et,R),L=new Jy(U,V,R,y),Nt=new Y1(U,ce,V),dt=new ax(U,ce,V),V.programs=xt.programs,C.capabilities=R,C.extensions=ce,C.properties=J,C.renderLists=St,C.shadowMap=Qt,C.state=y,C.info=V}v!==Wi&&(T=new ux(v,e.width,e.height,o,s,r));let ct=new _0(C,U);this.xr=ct,this.getContext=function(){return U},this.getContextAttributes=function(){return U.getContextAttributes()},this.forceContextLoss=function(){let M=ce.get("WEBGL_lose_context");M&&M.loseContext()},this.forceContextRestore=function(){let M=ce.get("WEBGL_lose_context");M&&M.restoreContext()},this.getPixelRatio=function(){return ht},this.setPixelRatio=function(M){M!==void 0&&(ht=M,this.setSize(de,it,!1))},this.getSize=function(M){return M.set(de,it)},this.setSize=function(M,O,at=!0){if(ct.isPresenting){oe("WebGLRenderer: Can't change size while VR device is presenting.");return}de=M,it=O,e.width=Math.floor(M*ht),e.height=Math.floor(O*ht),at===!0&&(e.style.width=M+"px",e.style.height=O+"px"),T!==null&&T.setSize(e.width,e.height),this.setViewport(0,0,M,O)},this.getDrawingBufferSize=function(M){return M.set(de*ht,it*ht).floor()},this.setDrawingBufferSize=function(M,O,at){de=M,it=O,ht=at,e.width=Math.floor(M*at),e.height=Math.floor(O*at),this.setViewport(0,0,M,O)},this.setEffects=function(M){if(v===Wi){ue("WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(M){for(let O=0;O<M.length;O++)if(M[O].isOutputPass===!0){oe("WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}T.setEffects(M||[])},this.getCurrentViewport=function(M){return M.copy(ut)},this.getViewport=function(M){return M.copy(rt)},this.setViewport=function(M,O,at,j){M.isVector4?rt.set(M.x,M.y,M.z,M.w):rt.set(M,O,at,j),y.viewport(ut.copy(rt).multiplyScalar(ht).round())},this.getScissor=function(M){return M.copy(yt)},this.setScissor=function(M,O,at,j){M.isVector4?yt.set(M.x,M.y,M.z,M.w):yt.set(M,O,at,j),y.scissor(Yt.copy(yt).multiplyScalar(ht).round())},this.getScissorTest=function(){return bt},this.setScissorTest=function(M){y.setScissorTest(bt=M)},this.setOpaqueSort=function(M){Tt=M},this.setTransparentSort=function(M){tt=M},this.getClearColor=function(M){return M.copy(re.getClearColor())},this.setClearColor=function(){re.setClearColor(...arguments)},this.getClearAlpha=function(){return re.getClearAlpha()},this.setClearAlpha=function(){re.setClearAlpha(...arguments)},this.clear=function(M=!0,O=!0,at=!0){let j=0;if(M){let K=!1;if(mt!==null){let Xt=mt.texture.format;K=m.has(Xt)}if(K){let Xt=mt.texture.type,$t=p.has(Xt),Vt=re.getClearColor(),jt=re.getClearAlpha(),te=Vt.r,ge=Vt.g,we=Vt.b;$t?(b[0]=te,b[1]=ge,b[2]=we,b[3]=jt,U.clearBufferuiv(U.COLOR,0,b)):(w[0]=te,w[1]=ge,w[2]=we,w[3]=jt,U.clearBufferiv(U.COLOR,0,w))}else j|=U.COLOR_BUFFER_BIT}O&&(j|=U.DEPTH_BUFFER_BIT,this.state.buffers.depth.setMask(!0)),at&&(j|=U.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),j!==0&&U.clear(j)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.setNodesHandler=function(M){M.setRenderer(this),H=M},this.dispose=function(){e.removeEventListener("webglcontextlost",ft,!1),e.removeEventListener("webglcontextrestored",Ft,!1),e.removeEventListener("webglcontextcreationerror",Zt,!1),re.dispose(),St.dispose(),wt.dispose(),J.dispose(),Et.dispose(),et.dispose(),Ot.dispose(),L.dispose(),xt.dispose(),ct.dispose(),ct.removeEventListener("sessionstart",os),ct.removeEventListener("sessionend",wi),Ti.stop()};function ft(M){M.preventDefault(),pa("WebGLRenderer: Context Lost."),D=!0}function Ft(){pa("WebGLRenderer: Context Restored."),D=!1;let M=V.autoReset,O=Qt.enabled,at=Qt.autoUpdate,j=Qt.needsUpdate,K=Qt.type;B(),V.autoReset=M,Qt.enabled=O,Qt.autoUpdate=at,Qt.needsUpdate=j,Qt.type=K}function Zt(M){ue("WebGLRenderer: A WebGL context could not be created. Reason: ",M.statusMessage)}function he(M){let O=M.target;O.removeEventListener("dispose",he),Ge(O)}function Ge(M){qe(M),J.remove(M)}function qe(M){let O=J.get(M).programs;O!==void 0&&(O.forEach(function(at){xt.releaseProgram(at)}),M.isShaderMaterial&&xt.releaseShaderCache(M))}this.renderBufferDirect=function(M,O,at,j,K,Xt){O===null&&(O=Ht);let $t=K.isMesh&&K.matrixWorld.determinantAffine()<0,Vt=$r(M,O,at,j,K);y.setMaterial(j,$t);let jt=at.index,te=1;if(j.wireframe===!0){if(jt=X.getWireframeAttribute(at),jt===void 0)return;te=2}let ge=at.drawRange,we=at.attributes.position,Kt=ge.start*te,Ve=(ge.start+ge.count)*te;Xt!==null&&(Kt=Math.max(Kt,Xt.start*te),Ve=Math.min(Ve,(Xt.start+Xt.count)*te)),jt!==null?(Kt=Math.max(Kt,0),Ve=Math.min(Ve,jt.count)):we!=null&&(Kt=Math.max(Kt,0),Ve=Math.min(Ve,we.count));let di=Ve-Kt;if(di<0||di===1/0)return;Ot.setup(K,j,Vt,at,jt);let si,Ke=Nt;if(jt!==null&&(si=Z.get(jt),Ke=dt,Ke.setIndex(si)),K.isMesh)j.wireframe===!0?(y.setLineWidth(j.wireframeLinewidth*Wt()),Ke.setMode(U.LINES)):Ke.setMode(U.TRIANGLES);else if(K.isLine){let Pi=j.linewidth;Pi===void 0&&(Pi=1),y.setLineWidth(Pi*Wt()),K.isLineSegments?Ke.setMode(U.LINES):K.isLineLoop?Ke.setMode(U.LINE_LOOP):Ke.setMode(U.LINE_STRIP)}else K.isPoints?Ke.setMode(U.POINTS):K.isSprite&&Ke.setMode(U.TRIANGLES);if(K.isBatchedMesh)if(ce.get("WEBGL_multi_draw"))Ke.renderMultiDraw(K._multiDrawStarts,K._multiDrawCounts,K._multiDrawCount);else{let Pi=K._multiDrawStarts,Jt=K._multiDrawCounts,Fi=K._multiDrawCount,Ue=jt?Z.get(jt).bytesPerElement:1,sn=J.get(j).currentProgram.getUniforms();for(let Tn=0;Tn<Fi;Tn++)sn.setValue(U,"_gl_DrawID",Tn),Ke.render(Pi[Tn]/Ue,Jt[Tn])}else if(K.isInstancedMesh)Ke.renderInstances(Kt,di,K.count);else if(at.isInstancedBufferGeometry){let Pi=at._maxInstanceCount!==void 0?at._maxInstanceCount:1/0,Jt=Math.min(at.instanceCount,Pi);Ke.renderInstances(Kt,di,Jt)}else Ke.render(Kt,di)};function je(M,O,at,j){H!==null&&M.isNodeMaterial&&H.setObject(j,M),G===!0&&It.setState(M,at,!1),M.transparent===!0&&M.side===ke&&M.forceSinglePass===!1?(M.side=Ze,M.needsUpdate=!0,Ri(M,O,j),M.side=Vi,M.needsUpdate=!0,Ri(M,O,j),M.side=ke):Ri(M,O,j)}this.compile=function(M,O,at=null){at===null&&(at=M),H!==null&&H.renderStart(M,O,at),S=wt.get(at),S.init(O),x.push(S),at.traverseVisible(function(K){K.isLight&&K.layers.test(O.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),M!==at&&M.traverseVisible(function(K){K.isLight&&K.layers.test(O.layers)&&(S.pushLight(K),K.castShadow&&S.pushShadow(K))}),S.setupLights(),H!==null&&H.updateLights(S.state.lightsArray),st=this.localClippingEnabled,G=It.init(this.clippingPlanes,st),G===!0&&It.setGlobalState(this.clippingPlanes,O),H!==null&&Qt.render(S.state.shadowsArray,at,O);let j=new Set;return M.traverse(function(K){if(!(K.isMesh||K.isPoints||K.isLine||K.isSprite))return;let Xt=K.material;if(Xt)if(Array.isArray(Xt))for(let $t=0;$t<Xt.length;$t++){let Vt=Xt[$t];je(Vt,at,O,K),j.add(Vt)}else je(Xt,at,O,K),j.add(Xt)}),S=x.pop(),H!==null&&H.renderEnd(),j},this.compileAsync=function(M,O,at=null){let j=this.compile(M,O,at);return new Promise(K=>{function Xt(){if(j.forEach(function($t){let jt=J.get($t).currentProgram;(jt===void 0||jt.isReady())&&j.delete($t)}),j.size===0){K(M);return}setTimeout(Xt,10)}ce.get("KHR_parallel_shader_compile")!==null?Xt():setTimeout(Xt,10)})};let ei=null;function wn(M){ei&&ei(M)}function os(){Ti.stop()}function wi(){Ti.start()}let Ti=new Yd;Ti.setAnimationLoop(wn),typeof self<"u"&&Ti.setContext(self),this.setAnimationLoop=function(M){ei=M,ct.setAnimationLoop(M),M===null?Ti.stop():Ti.start()},ct.addEventListener("sessionstart",os),ct.addEventListener("sessionend",wi),this.render=function(M,O){if(O!==void 0&&O.isCamera!==!0){ue("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(D===!0)return;H!==null&&H.renderStart(M,O);let at=ct.enabled===!0&&ct.isPresenting===!0,j=T!==null&&(mt===null||at)&&T.begin(C,mt);if(M.matrixWorldAutoUpdate===!0&&M.updateMatrixWorld(),O.parent===null&&O.matrixWorldAutoUpdate===!0&&O.updateMatrixWorld(),ct.enabled===!0&&ct.isPresenting===!0&&(T===null||T.isCompositing()===!1)&&(ct.cameraAutoUpdate===!0&&ct.updateCamera(O),O=ct.getCamera()),M.isScene===!0&&M.onBeforeRender(C,M,O,mt),S=wt.get(M,x.length),S.init(O),S.state.textureUnits=ot.getTextureUnits(),x.push(S),$.multiplyMatrices(O.projectionMatrix,O.matrixWorldInverse),P.setFromProjectionMatrix($,xn,O.reversedDepth),st=this.localClippingEnabled,G=It.init(this.clippingPlanes,st),E=St.get(M,A.length),E.init(),A.push(E),ct.enabled===!0&&ct.isPresenting===!0){let $t=C.xr.getDepthSensingMesh();$t!==null&&Yi($t,O,-1/0,C.sortObjects)}Yi(M,O,0,C.sortObjects),E.finish(),H!==null&&H.updateLights(S.state.lightsArray),C.sortObjects===!0&&E.sort(Tt,tt),kt=ct.enabled===!1||ct.isPresenting===!1||ct.hasDepthSensing()===!1,kt&&re.addToRenderList(E,M),this.info.render.frame++,this.info.autoReset===!0&&this.info.reset(),G===!0&&It.beginShadows();let K=S.state.shadowsArray;if(Qt.render(K,M,O),G===!0&&It.endShadows(),(j&&T.hasRenderPass())===!1){let $t=E.opaque,Vt=E.transmissive;if(S.setupLights(),O.isArrayCamera){let jt=O.cameras;if(Vt.length>0)for(let te=0,ge=jt.length;te<ge;te++){let we=jt[te];js($t,Vt,M,we)}kt&&re.render(M);for(let te=0,ge=jt.length;te<ge;te++){let we=jt[te];Ls(E,M,we,we.viewport)}}else Vt.length>0&&js($t,Vt,M,O),kt&&re.render(M),Ls(E,M,O)}mt!==null&&Y===0&&(ot.updateMultisampleRenderTarget(mt),ot.updateRenderTargetMipmap(mt)),j&&T.end(C),M.isScene===!0&&M.onAfterRender(C,M,O),Ot.resetDefaultState(),nt=-1,lt=null,x.pop(),x.length>0?(S=x[x.length-1],ot.setTextureUnits(S.state.textureUnits),G===!0&&It.setGlobalState(C.clippingPlanes,S.state.camera)):S=null,A.pop(),A.length>0?E=A[A.length-1]:E=null,H!==null&&H.renderEnd()};function Yi(M,O,at,j){if(M.visible===!1)return;if(M.layers.test(O.layers)){if(M.isGroup)at=M.renderOrder;else if(M.isLOD)M.autoUpdate===!0&&M.update(O);else if(M.isLightProbeGrid)S.pushLightProbeGrid(M);else if(M.isLight)S.pushLight(M),M.castShadow&&S.pushShadow(M);else if(M.isSprite){if(!M.frustumCulled||M.intersectsFrustum(P)){j&&Pt.setFromMatrixPosition(M.matrixWorld).applyMatrix4($);let $t=et.update(M),Vt=M.material;Vt.visible&&E.push(M,$t,Vt,at,Pt.z,null,O)}}else if((M.isMesh||M.isLine||M.isPoints)&&(!M.frustumCulled||M.intersectsFrustum(P))){let $t=et.update(M),Vt=M.material;if(j&&(M.boundingSphere!==void 0?(M.boundingSphere===null&&M.computeBoundingSphere(),Pt.copy(M.boundingSphere.center)):($t.boundingSphere===null&&$t.computeBoundingSphere(),Pt.copy($t.boundingSphere.center)),Pt.applyMatrix4(M.matrixWorld).applyMatrix4($)),Array.isArray(Vt)){let jt=$t.groups;for(let te=0,ge=jt.length;te<ge;te++){let we=jt[te],Kt=Vt[we.materialIndex];Kt&&Kt.visible&&E.push(M,$t,Kt,at,Pt.z,we,O)}}else Vt.visible&&E.push(M,$t,Vt,at,Pt.z,null,O)}}let Xt=M.children;for(let $t=0,Vt=Xt.length;$t<Vt;$t++)Yi(Xt[$t],O,at,j)}function Ls(M,O,at,j){let{opaque:K,transmissive:Xt,transparent:$t}=M;S.setupLightsView(at),G===!0&&It.setGlobalState(C.clippingPlanes,at),j&&y.viewport(ut.copy(j)),K.length>0&&Le(K,O,at),Xt.length>0&&Le(Xt,O,at),$t.length>0&&Le($t,O,at),y.buffers.depth.setTest(!0),y.buffers.depth.setMask(!0),y.buffers.color.setMask(!0),y.setPolygonOffset(!1)}function js(M,O,at,j){if((at.isScene===!0?at.overrideMaterial:null)!==null)return;if(S.state.transmissionRenderTarget[j.id]===void 0){let Kt=ce.has("EXT_color_buffer_half_float")||ce.has("EXT_color_buffer_float");S.state.transmissionRenderTarget[j.id]=new Hi(1,1,{generateMipmaps:!0,type:Kt?bn:Wi,minFilter:Ss,samples:Math.max(4,R.samples),stencilBuffer:r,resolveDepthBuffer:!1,resolveStencilBuffer:!1,storeMultisampledDepthBuffer:!1,storeMultisampledStencilBuffer:!1,colorSpace:Te.workingColorSpace})}let Xt=S.state.transmissionRenderTarget[j.id],$t=j.viewport||ut;Xt.setSize($t.z*C.transmissionResolutionScale,$t.w*C.transmissionResolutionScale);let Vt=C.getRenderTarget(),jt=C.getActiveCubeFace(),te=C.getActiveMipmapLevel();C.setRenderTarget(Xt),C.getClearColor(ie),ne=C.getClearAlpha(),ne<1&&C.setClearColor(16777215,.5),C.clear(),kt&&re.render(at);let ge=C.toneMapping;C.toneMapping=vn;let we=j.viewport;if(j.viewport!==void 0&&(j.viewport=void 0),S.setupLightsView(j),G===!0&&It.setGlobalState(C.clippingPlanes,j),Le(M,at,j),ot.updateMultisampleRenderTarget(Xt),ot.updateRenderTargetMipmap(Xt),ce.has("WEBGL_multisampled_render_to_texture")===!1){let Kt=!1;for(let Ve=0,di=O.length;Ve<di;Ve++){let si=O[Ve],{object:Ke,geometry:Pi,material:Jt,group:Fi}=si;if(Jt.side===ke&&Ke.layers.test(j.layers)){let Ue=Jt.side;Jt.side=Ze,Jt.needsUpdate=!0,Pe(Ke,at,j,Pi,Jt,Fi),Jt.side=Ue,Jt.needsUpdate=!0,Kt=!0}}Kt===!0&&(ot.updateMultisampleRenderTarget(Xt),ot.updateRenderTargetMipmap(Xt))}C.setRenderTarget(Vt,jt,te),C.setClearColor(ie,ne),we!==void 0&&(j.viewport=we),C.toneMapping=ge}function Le(M,O,at){let j=O.isScene===!0?O.overrideMaterial:null;for(let K=0,Xt=M.length;K<Xt;K++){let $t=M[K],{object:Vt,geometry:jt,group:te}=$t,ge=$t.material;ge.allowOverride===!0&&j!==null&&(ge=j),Vt.layers.test(at.layers)&&Pe(Vt,O,at,jt,ge,te)}}function Pe(M,O,at,j,K,Xt){H!==null&&K.isNodeMaterial&&H.setObject(M,K),M.onBeforeRender(C,O,at,j,K,Xt),M.modelViewMatrix.multiplyMatrices(at.matrixWorldInverse,M.matrixWorld),M.normalMatrix.getNormalMatrix(M.modelViewMatrix),K.onBeforeRender(C,O,at,j,M,Xt),K.transparent===!0&&K.side===ke&&K.forceSinglePass===!1?(K.side=Ze,K.needsUpdate=!0,C.renderBufferDirect(at,O,j,K,M,Xt),K.side=Vi,K.needsUpdate=!0,C.renderBufferDirect(at,O,j,K,M,Xt),K.side=ke):C.renderBufferDirect(at,O,j,K,M,Xt),M.onAfterRender(C,O,at,j,K,Xt)}function Ri(M,O,at){O.isScene!==!0&&(O=Ht);let j=J.get(M),K=S.state.lights,Xt=S.state.shadowsArray,$t=K.state.version,Vt=xt.getParameters(M,K.state,Xt,O,at,S.state.lightProbeGridArray),jt=xt.getProgramCacheKey(Vt),te=j.programs;j.environment=M.isMeshStandardMaterial||M.isMeshLambertMaterial||M.isMeshPhongMaterial?O.environment:null,j.fog=O.fog;let ge=M.isMeshStandardMaterial||M.isMeshLambertMaterial&&!M.envMap||M.isMeshPhongMaterial&&!M.envMap;j.envMap=Et.get(M.envMap||j.environment,ge),j.envMapRotation=j.environment!==null&&M.envMap===null?O.environmentRotation:M.envMapRotation,te===void 0&&(M.addEventListener("dispose",he),te=new Map,j.programs=te);let we=te.get(jt);if(we!==void 0){if(j.currentProgram===we&&j.lightsStateVersion===$t)return Wn(M,Vt),we}else Vt.uniforms=xt.getUniforms(M),H!==null&&M.isNodeMaterial&&H.build(M,at,Vt),M.onBeforeCompile(Vt,C),we=xt.acquireProgram(Vt,jt),te.set(jt,we),j.uniforms=Vt.uniforms;let Kt=j.uniforms;return(!M.isShaderMaterial&&!M.isRawShaderMaterial||M.clipping===!0)&&(Kt.clippingPlanes=It.uniform),Wn(M,Vt),j.needsLights=Zf(M),j.lightsStateVersion=$t,j.needsLights&&(Kt.ambientLightColor.value=K.state.ambient,Kt.lightProbe.value=K.state.probe,Kt.sunLights.value=K.state.sun,Kt.sunLightShadows.value=K.state.sunShadow,Kt.directionalLights.value=K.state.directional,Kt.directionalLightShadows.value=K.state.directionalShadow,Kt.spotLights.value=K.state.spot,Kt.spotLightShadows.value=K.state.spotShadow,Kt.rectAreaLights.value=K.state.rectArea,Kt.ltc_1.value=K.state.rectAreaLTC1,Kt.ltc_2.value=K.state.rectAreaLTC2,Kt.pointLights.value=K.state.point,Kt.pointLightShadows.value=K.state.pointShadow,Kt.hemisphereLights.value=K.state.hemi,Kt.sunShadowMatrix.value=K.state.sunShadowMatrix,Kt.sunShadowCascade.value=K.state.sunShadowCascade,Kt.directionalShadowMatrix.value=K.state.directionalShadowMatrix,Kt.spotLightMatrix.value=K.state.spotLightMatrix,Kt.spotLightMap.value=K.state.spotLightMap,Kt.pointShadowMatrix.value=K.state.pointShadowMatrix),j.lightProbeGrid=S.state.lightProbeGridArray.length>0,j.currentProgram=we,j.uniformsList=null,we}function Li(M){if(M.uniformsList===null){let O=M.currentProgram.getUniforms();M.uniformsList=Vr.seqWithValue(O.seq,M.uniforms)}return M.uniformsList}function Wn(M,O){let at=J.get(M);at.outputColorSpace=O.outputColorSpace,at.batching=O.batching,at.batchingColor=O.batchingColor,at.instancing=O.instancing,at.instancingColor=O.instancingColor,at.instancingMorph=O.instancingMorph,at.skinning=O.skinning,at.morphTargets=O.morphTargets,at.morphNormals=O.morphNormals,at.morphColors=O.morphColors,at.morphTargetsCount=O.morphTargetsCount,at.numClippingPlanes=O.numClippingPlanes,at.numIntersection=O.numClipIntersection,at.vertexAlphas=O.vertexAlphas,at.vertexTangents=O.vertexTangents,at.toneMapping=O.toneMapping}function Ps(M,O){if(M.length===0)return null;if(M.length===1)return M[0].texture!==null?M[0]:null;_.setFromMatrixPosition(O.matrixWorld);for(let at=0,j=M.length;at<j;at++){let K=M[at];if(K.texture!==null&&K.boundingBox.containsPoint(_))return K}return null}function $r(M,O,at,j,K){O.isScene!==!0&&(O=Ht),ot.resetTextureUnits();let Xt=O.fog,$t=j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial?O.environment:null,Vt=mt===null?C.outputColorSpace:mt.isXRRenderTarget===!0?mt.texture.colorSpace:Te.workingColorSpace,jt=j.isMeshStandardMaterial||j.isMeshLambertMaterial&&!j.envMap||j.isMeshPhongMaterial&&!j.envMap,te=Et.get(j.envMap||$t,jt),ge=j.vertexColors===!0&&!!at.attributes.color&&at.attributes.color.itemSize===4,we=!!at.attributes.tangent&&(!!j.normalMap||j.anisotropy>0),Kt=!!at.morphAttributes.position,Ve=!!at.morphAttributes.normal,di=!!at.morphAttributes.color,si=vn;j.toneMapped&&(mt===null||mt.isXRRenderTarget===!0)&&(si=C.toneMapping);let Ke=at.morphAttributes.position||at.morphAttributes.normal||at.morphAttributes.color,Pi=Ke!==void 0?Ke.length:0,Jt=J.get(j),Fi=S.state.lights;if(G===!0&&(st===!0||M!==lt)){let ii=M===lt&&j.id===nt;It.setState(j,M,ii)}let Ue=!1;j.version===Jt.__version?(Jt.needsLights&&Jt.lightsStateVersion!==Fi.state.version||Jt.outputColorSpace!==Vt||K.isBatchedMesh&&Jt.batching===!1||!K.isBatchedMesh&&Jt.batching===!0||K.isBatchedMesh&&Jt.batchingColor===!0&&K._colorsTexture===null||K.isBatchedMesh&&Jt.batchingColor===!1&&K._colorsTexture!==null||K.isInstancedMesh&&Jt.instancing===!1||!K.isInstancedMesh&&Jt.instancing===!0||K.isSkinnedMesh&&Jt.skinning===!1||!K.isSkinnedMesh&&Jt.skinning===!0||K.isInstancedMesh&&Jt.instancingColor===!0&&K.instanceColor===null||K.isInstancedMesh&&Jt.instancingColor===!1&&K.instanceColor!==null||K.isInstancedMesh&&Jt.instancingMorph===!0&&K.morphTexture===null||K.isInstancedMesh&&Jt.instancingMorph===!1&&K.morphTexture!==null||Jt.envMap!==te||j.fog===!0&&Jt.fog!==Xt||Jt.numClippingPlanes!==void 0&&(Jt.numClippingPlanes!==It.numPlanes||Jt.numIntersection!==It.numIntersection)||Jt.vertexAlphas!==ge||Jt.vertexTangents!==we||Jt.morphTargets!==Kt||Jt.morphNormals!==Ve||Jt.morphColors!==di||Jt.toneMapping!==si||Jt.morphTargetsCount!==Pi||!!Jt.lightProbeGrid!=S.state.lightProbeGridArray.length>0)&&(Ue=!0):(Ue=!0,Jt.__version=j.version);let sn=Jt.currentProgram;Ue===!0&&(sn=Ri(j,O,K),H&&j.isNodeMaterial&&H.onUpdateProgram(j,sn,Jt));let Tn=!1,ls=!1,Ks=!1,Je=sn.getUniforms(),ui=Jt.uniforms;if(y.useProgram(sn.program)&&(Tn=!0,ls=!0,Ks=!0),j.id!==nt&&(nt=j.id,ls=!0),Jt.needsLights){let ii=Ps(S.state.lightProbeGridArray,K);Jt.lightProbeGrid!==ii&&(Jt.lightProbeGrid=ii,ls=!0)}if(Tn||lt!==M){y.buffers.depth.getReversed()&&M.reversedDepth!==!0&&(M._reversedDepth=!0,M.updateProjectionMatrix()),Je.setValue(U,"projectionMatrix",M.projectionMatrix),Je.setValue(U,"viewMatrix",M.matrixWorldInverse);let hs=Je.map.cameraPosition;hs!==void 0&&hs.setValue(U,_t.setFromMatrixPosition(M.matrixWorld)),R.logarithmicDepthBuffer&&Je.setValue(U,"logDepthBufFC",2/(Math.log(M.far+1)/Math.LN2)),(j.isMeshPhongMaterial||j.isMeshToonMaterial||j.isMeshLambertMaterial||j.isMeshBasicMaterial||j.isMeshStandardMaterial||j.isShaderMaterial)&&Je.setValue(U,"isOrthographic",M.isOrthographicCamera===!0),lt!==M&&(lt=M,ls=!0,Ks=!0)}if(Jt.needsLights&&(Fi.state.sunShadowMap.length>0&&Je.setValue(U,"sunShadowMap",Fi.state.sunShadowMap,ot),Fi.state.directionalShadowMap.length>0&&Je.setValue(U,"directionalShadowMap",Fi.state.directionalShadowMap,ot),Fi.state.spotShadowMap.length>0&&Je.setValue(U,"spotShadowMap",Fi.state.spotShadowMap,ot),Fi.state.pointShadowMap.length>0&&Je.setValue(U,"pointShadowMap",Fi.state.pointShadowMap,ot)),K.isSkinnedMesh){Je.setOptional(U,K,"bindMatrix"),Je.setOptional(U,K,"bindMatrixInverse");let ii=K.skeleton;ii&&(ii.boneTexture===null&&ii.computeBoneTexture(),Je.setValue(U,"boneTexture",ii.boneTexture,ot))}K.isBatchedMesh&&(Je.setOptional(U,K,"batchingTexture"),Je.setValue(U,"batchingTexture",K._matricesTexture,ot),Je.setOptional(U,K,"batchingIdTexture"),Je.setValue(U,"batchingIdTexture",K._indirectTexture,ot),Je.setOptional(U,K,"batchingColorTexture"),K._colorsTexture!==null&&Je.setValue(U,"batchingColorTexture",K._colorsTexture,ot));let cs=at.morphAttributes;if((cs.position!==void 0||cs.normal!==void 0||cs.color!==void 0)&&k.update(K,at,sn),(ls||Jt.receiveShadow!==K.receiveShadow)&&(Jt.receiveShadow=K.receiveShadow,Je.setValue(U,"receiveShadow",K.receiveShadow)),(j.isMeshStandardMaterial||j.isMeshLambertMaterial||j.isMeshPhongMaterial)&&j.envMap===null&&O.environment!==null&&(ui.envMapIntensity.value=O.environmentIntensity),ui.dfgLUT!==void 0&&(ui.dfgLUT.value=jy()),ls){if(Je.setValue(U,"toneMappingExposure",C.toneMappingExposure),Jt.needsLights&&Yf(ui,Ks),Xt&&j.fog===!0&&Rt.refreshFogUniforms(ui,Xt),Rt.refreshMaterialUniforms(ui,j,ht,it,S.state.transmissionRenderTarget[M.id]),Jt.needsLights&&Jt.lightProbeGrid){let ii=Jt.lightProbeGrid;ui.probesSH.value=ii.texture,ui.probesMin.value.copy(ii.boundingBox.min),ui.probesMax.value.copy(ii.boundingBox.max),ui.probesResolution.value.copy(ii.resolution)}Vr.upload(U,Li(Jt),ui,ot)}if(j.isShaderMaterial&&j.uniformsNeedUpdate===!0&&(Vr.upload(U,Li(Jt),ui,ot),j.uniformsNeedUpdate=!1),j.isSpriteMaterial&&Je.setValue(U,"center",K.center),Je.setValue(U,"modelViewMatrix",K.modelViewMatrix),Je.setValue(U,"normalMatrix",K.normalMatrix),Je.setValue(U,"modelMatrix",K.matrixWorld),j.uniformsGroups!==void 0){let ii=j.uniformsGroups;for(let hs=0,Qs=ii.length;hs<Qs;hs++){let K0=ii[hs];L.update(K0,sn),L.bind(K0,sn)}}return sn}function Yf(M,O){M.ambientLightColor.needsUpdate=O,M.lightProbe.needsUpdate=O,M.sunLights.needsUpdate=O,M.sunLightShadows.needsUpdate=O,M.directionalLights.needsUpdate=O,M.directionalLightShadows.needsUpdate=O,M.pointLights.needsUpdate=O,M.pointLightShadows.needsUpdate=O,M.spotLights.needsUpdate=O,M.spotLightShadows.needsUpdate=O,M.rectAreaLights.needsUpdate=O,M.hemisphereLights.needsUpdate=O}function Zf(M){return M.isMeshLambertMaterial||M.isMeshToonMaterial||M.isMeshPhongMaterial||M.isMeshStandardMaterial||M.isShadowMaterial||M.isShaderMaterial&&M.lights===!0}this.getActiveCubeFace=function(){return Q},this.getActiveMipmapLevel=function(){return Y},this.getRenderTarget=function(){return mt},this.setRenderTargetTextures=function(M,O,at){let j=J.get(M);j.__autoAllocateDepthBuffer=M.resolveDepthBuffer===!1,j.__autoAllocateDepthBuffer===!1&&(j.__useRenderToTexture=!1),J.get(M.texture).__webglTexture=O,J.get(M.depthTexture).__webglTexture=j.__autoAllocateDepthBuffer?void 0:at,j.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(M,O){let at=J.get(M);at.__webglFramebuffer=O,at.__useDefaultFramebuffer=O===void 0},this.setRenderTarget=function(M,O=0,at=0){mt=M,Q=O,Y=at;let j=null,K=!1,Xt=!1;if(M){let Vt=J.get(M);if(Vt.__useDefaultFramebuffer!==void 0){y.bindFramebuffer(U.FRAMEBUFFER,Vt.__webglFramebuffer),ut.copy(M.viewport),Yt.copy(M.scissor),Ut=M.scissorTest,y.viewport(ut),y.scissor(Yt),y.setScissorTest(Ut),nt=-1;return}else if(Vt.__webglFramebuffer===void 0)ot.setupRenderTarget(M);else if(Vt.__hasExternalTextures)ot.rebindTextures(M,J.get(M.texture).__webglTexture,J.get(M.depthTexture).__webglTexture);else if(M.depthBuffer){let ge=M.depthTexture;if(Vt.__boundDepthTexture!==ge){if(ge!==null&&J.has(ge)&&(M.width!==ge.image.width||M.height!==ge.image.height))throw new Error("THREE.WebGLRenderer: Attached DepthTexture is initialized to the incorrect size.");ot.setupDepthRenderbuffer(M)}}let jt=M.texture;(jt.isData3DTexture||jt.isDataArrayTexture||jt.isCompressedArrayTexture)&&(Xt=!0);let te=J.get(M).__webglFramebuffer;M.isWebGLCubeRenderTarget?(Array.isArray(te[O])?j=te[O][at]:j=te[O],K=!0):M.samples>0&&ot.useMultisampledRTT(M)===!1?j=J.get(M).__webglMultisampledFramebuffer:Array.isArray(te)?j=te[at]:j=te,ut.copy(M.viewport),Yt.copy(M.scissor),Ut=M.scissorTest}else ut.copy(rt).multiplyScalar(ht).floor(),Yt.copy(yt).multiplyScalar(ht).floor(),Ut=bt;if(at!==0&&(j=z),y.bindFramebuffer(U.FRAMEBUFFER,j)&&y.drawBuffers(M,j),y.viewport(ut),y.scissor(Yt),y.setScissorTest(Ut),K){let Vt=J.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_CUBE_MAP_POSITIVE_X+O,Vt.__webglTexture,at)}else if(Xt){let Vt=O;for(let jt=0;jt<M.textures.length;jt++){let te=J.get(M.textures[jt]);U.framebufferTextureLayer(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0+jt,te.__webglTexture,at,Vt)}}else if(M!==null&&at!==0){let Vt=J.get(M.texture);U.framebufferTexture2D(U.FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,Vt.__webglTexture,at)}nt=-1};function j0(M){let O=J.get(M);return(O.__readFormat!==M.format||O.__readType!==M.type)&&(O.__readFormat=M.format,O.__readType=M.type,O.__formatReadable=R.textureFormatReadable(M.format),O.__typeReadable=R.textureTypeReadable(M.type)),O}this.readRenderTargetPixels=function(M,O,at,j,K,Xt,$t,Vt=0){if(!(M&&M.isWebGLRenderTarget)){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let jt=J.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&$t!==void 0&&(jt=jt[$t]),jt){y.bindFramebuffer(U.FRAMEBUFFER,jt);try{let te=M.textures[Vt],ge=te.format,we=te.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Vt);let Kt=j0(te);if(Kt.__formatReadable===!1){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(Kt.__typeReadable===!1){ue("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}O>=0&&O<=M.width-j&&at>=0&&at<=M.height-K&&U.readPixels(O,at,j,K,Dt.convert(ge),Dt.convert(we),Xt)}finally{let te=mt!==null?J.get(mt).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,te)}}},this.readRenderTargetPixelsAsync=async function(M,O,at,j,K,Xt,$t,Vt=0){if(!(M&&M.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let jt=J.get(M).__webglFramebuffer;if(M.isWebGLCubeRenderTarget&&$t!==void 0&&(jt=jt[$t]),jt)if(O>=0&&O<=M.width-j&&at>=0&&at<=M.height-K){y.bindFramebuffer(U.FRAMEBUFFER,jt);let te=M.textures[Vt],ge=te.format,we=te.type;M.textures.length>1&&U.readBuffer(U.COLOR_ATTACHMENT0+Vt);let Kt=j0(te);if(Kt.__formatReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(Kt.__typeReadable===!1)throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");let Ve=U.createBuffer();U.bindBuffer(U.PIXEL_PACK_BUFFER,Ve),U.bufferData(U.PIXEL_PACK_BUFFER,Xt.byteLength,U.STREAM_READ),U.readPixels(O,at,j,K,Dt.convert(ge),Dt.convert(we),0),U.bindBuffer(U.PIXEL_PACK_BUFFER,null);let di=mt!==null?J.get(mt).__webglFramebuffer:null;y.bindFramebuffer(U.FRAMEBUFFER,di);let si=U.fenceSync(U.SYNC_GPU_COMMANDS_COMPLETE,0);return U.flush(),await md(U,si,4),U.bindBuffer(U.PIXEL_PACK_BUFFER,Ve),U.getBufferSubData(U.PIXEL_PACK_BUFFER,0,Xt),U.bindBuffer(U.PIXEL_PACK_BUFFER,null),U.deleteBuffer(Ve),U.deleteSync(si),Xt}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(M,O=null,at=0){let j=Math.pow(2,-at),K=Math.floor(M.image.width*j),Xt=Math.floor(M.image.height*j),$t=O!==null?O.x:0,Vt=O!==null?O.y:0;ot.setTexture2D(M,0),U.copyTexSubImage2D(U.TEXTURE_2D,at,0,0,$t,Vt,K,Xt),y.unbindTexture()},this.copyTextureToTexture=function(M,O,at=null,j=null,K=0,Xt=0){let $t,Vt,jt,te,ge,we,Kt,Ve,di,si=M.isCompressedTexture?M.mipmaps[Xt]:M.image;if(at!==null)$t=at.max.x-at.min.x,Vt=at.max.y-at.min.y,jt=at.isBox3?at.max.z-at.min.z:1,te=at.min.x,ge=at.min.y,we=at.isBox3?at.min.z:0;else{let ui=Math.pow(2,-K);$t=Math.floor(si.width*ui),Vt=Math.floor(si.height*ui),M.isDataArrayTexture?jt=si.depth:M.isData3DTexture?jt=Math.floor(si.depth*ui):jt=1,te=0,ge=0,we=0}j!==null?(Kt=j.x,Ve=j.y,di=j.z):(Kt=0,Ve=0,di=0);let Ke=Dt.convert(O.format),Pi=Dt.convert(O.type),Jt;O.isData3DTexture?(ot.setTexture3D(O,0),Jt=U.TEXTURE_3D):O.isDataArrayTexture||O.isCompressedArrayTexture?(ot.setTexture2DArray(O,0),Jt=U.TEXTURE_2D_ARRAY):(ot.setTexture2D(O,0),Jt=U.TEXTURE_2D),y.activeTexture(U.TEXTURE0),y.pixelStorei(U.UNPACK_FLIP_Y_WEBGL,O.flipY),y.pixelStorei(U.UNPACK_PREMULTIPLY_ALPHA_WEBGL,O.premultiplyAlpha),y.pixelStorei(U.UNPACK_ALIGNMENT,O.unpackAlignment);let Fi=y.getParameter(U.UNPACK_ROW_LENGTH),Ue=y.getParameter(U.UNPACK_IMAGE_HEIGHT),sn=y.getParameter(U.UNPACK_SKIP_PIXELS),Tn=y.getParameter(U.UNPACK_SKIP_ROWS),ls=y.getParameter(U.UNPACK_SKIP_IMAGES);y.pixelStorei(U.UNPACK_ROW_LENGTH,si.width),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,si.height),y.pixelStorei(U.UNPACK_SKIP_PIXELS,te),y.pixelStorei(U.UNPACK_SKIP_ROWS,ge),y.pixelStorei(U.UNPACK_SKIP_IMAGES,we);let Ks=M.isDataArrayTexture||M.isData3DTexture,Je=O.isDataArrayTexture||O.isData3DTexture;if(M.isDepthTexture){let ui=J.get(M),cs=J.get(O),ii=J.get(ui.__renderTarget),hs=J.get(cs.__renderTarget);y.bindFramebuffer(U.READ_FRAMEBUFFER,ii.__webglFramebuffer),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,hs.__webglFramebuffer);for(let Qs=0;Qs<jt;Qs++)Ks&&(U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,J.get(M).__webglTexture,K,we+Qs),U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,J.get(O).__webglTexture,Xt,di+Qs)),U.blitFramebuffer(te,ge,$t,Vt,Kt,Ve,$t,Vt,U.DEPTH_BUFFER_BIT,U.NEAREST);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else if(K!==0||M.isRenderTargetTexture||J.has(M)){let ui=J.get(M),cs=J.get(O);y.bindFramebuffer(U.READ_FRAMEBUFFER,F),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,q);for(let ii=0;ii<jt;ii++)Ks?U.framebufferTextureLayer(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,ui.__webglTexture,K,we+ii):U.framebufferTexture2D(U.READ_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,ui.__webglTexture,K),Je?U.framebufferTextureLayer(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,cs.__webglTexture,Xt,di+ii):U.framebufferTexture2D(U.DRAW_FRAMEBUFFER,U.COLOR_ATTACHMENT0,U.TEXTURE_2D,cs.__webglTexture,Xt),K!==0?U.blitFramebuffer(te,ge,$t,Vt,Kt,Ve,$t,Vt,U.COLOR_BUFFER_BIT,U.NEAREST):Je?U.copyTexSubImage3D(Jt,Xt,Kt,Ve,di+ii,te,ge,$t,Vt):U.copyTexSubImage2D(Jt,Xt,Kt,Ve,te,ge,$t,Vt);y.bindFramebuffer(U.READ_FRAMEBUFFER,null),y.bindFramebuffer(U.DRAW_FRAMEBUFFER,null)}else Je?M.isDataTexture||M.isData3DTexture?U.texSubImage3D(Jt,Xt,Kt,Ve,di,$t,Vt,jt,Ke,Pi,si.data):O.isCompressedArrayTexture?U.compressedTexSubImage3D(Jt,Xt,Kt,Ve,di,$t,Vt,jt,Ke,si.data):U.texSubImage3D(Jt,Xt,Kt,Ve,di,$t,Vt,jt,Ke,Pi,si):M.isDataTexture?U.texSubImage2D(U.TEXTURE_2D,Xt,Kt,Ve,$t,Vt,Ke,Pi,si.data):M.isCompressedTexture?U.compressedTexSubImage2D(U.TEXTURE_2D,Xt,Kt,Ve,si.width,si.height,Ke,si.data):U.texSubImage2D(U.TEXTURE_2D,Xt,Kt,Ve,$t,Vt,Ke,Pi,si);y.pixelStorei(U.UNPACK_ROW_LENGTH,Fi),y.pixelStorei(U.UNPACK_IMAGE_HEIGHT,Ue),y.pixelStorei(U.UNPACK_SKIP_PIXELS,sn),y.pixelStorei(U.UNPACK_SKIP_ROWS,Tn),y.pixelStorei(U.UNPACK_SKIP_IMAGES,ls),Xt===0&&O.generateMipmaps&&U.generateMipmap(Jt),y.unbindTexture()},this.initRenderTarget=function(M){J.get(M).__webglFramebuffer===void 0&&ot.setupRenderTarget(M)},this.initTexture=function(M){M.isCubeTexture?ot.setTextureCube(M,0):M.isData3DTexture?ot.setTexture3D(M,0):M.isDataArrayTexture||M.isCompressedArrayTexture?ot.setTexture2DArray(M,0):ot.setTexture2D(M,0),y.unbindTexture()},this.resetState=function(){Q=0,Y=0,mt=null,y.reset(),Ot.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return xn}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(t){this._outputColorSpace=t;let e=this.getContext();e.drawingBufferColorSpace=Te._getDrawingBufferColorSpace(t),e.unpackColorSpace=Te._getUnpackColorSpace()}}});function qr(n){return new Da({color:0,emissive:16777215,emissiveIntensity:n})}var _c,tf=Ye(()=>{Ei();_c=class extends Qn{constructor(){super(),this.name="RoomEnvironment",this.position.y=-3.5;let t=new Ne;t.deleteAttribute("uv");let e=new Be({side:Ze}),i=new Be,s=new Ba(16777215,900,28,2);s.position.set(.418,16.199,.3),this.add(s);let r=new At(t,e);r.position.set(-.757,13.219,.717),r.scale.set(31.713,28.305,28.591),this.add(r);let a=new _a(t,i,6),o=new se;o.position.set(-10.906,2.009,1.846),o.rotation.set(0,-.195,0),o.scale.set(2.328,7.905,4.651),o.updateMatrix(),a.setMatrixAt(0,o.matrix),o.position.set(-5.607,-.754,-.758),o.rotation.set(0,.994,0),o.scale.set(1.97,1.534,3.955),o.updateMatrix(),a.setMatrixAt(1,o.matrix),o.position.set(6.167,.857,7.803),o.rotation.set(0,.561,0),o.scale.set(3.927,6.285,3.687),o.updateMatrix(),a.setMatrixAt(2,o.matrix),o.position.set(-2.017,.018,6.124),o.rotation.set(0,.333,0),o.scale.set(2.002,4.566,2.064),o.updateMatrix(),a.setMatrixAt(3,o.matrix),o.position.set(2.291,-.756,-2.621),o.rotation.set(0,-.286,0),o.scale.set(1.546,1.552,1.496),o.updateMatrix(),a.setMatrixAt(4,o.matrix),o.position.set(-2.193,-.369,-5.547),o.rotation.set(0,.516,0),o.scale.set(3.875,3.487,2.986),o.updateMatrix(),a.setMatrixAt(5,o.matrix),this.add(a);let l=new At(t,qr(50));l.position.set(-16.116,14.37,8.208),l.scale.set(.1,2.428,2.739),this.add(l);let c=new At(t,qr(50));c.position.set(-16.109,18.021,-8.207),c.scale.set(.1,2.425,2.751),this.add(c);let h=new At(t,qr(17));h.position.set(14.904,12.198,-1.832),h.scale.set(.15,4.265,6.331),this.add(h);let d=new At(t,qr(43));d.position.set(-.462,8.89,14.52),d.scale.set(4.38,5.441,.088),this.add(d);let u=new At(t,qr(20));u.position.set(3.235,11.486,-12.541),u.scale.set(2.5,2,.1),this.add(u);let f=new At(t,qr(100));f.position.set(0,20,0),f.scale.set(1,.1,1),this.add(f)}dispose(){let t=new Set;this.traverse(e=>{e.isMesh&&(t.add(e.geometry),t.add(e.material))});for(let e of t)e.dispose()}}});function Ky(){try{let n=localStorage.getItem("sumamama.quality");if(n==="high"||n==="low")return n}catch{}return bc?"low":"high"}function ef(n){let t=new xc({canvas:n,antialias:!0,powerPreference:"high-performance"});t.shadowMap.enabled=!1,t.toneMapping=Oa,t.toneMappingExposure=1,t.outputColorSpace=Ai;let e=new Qn,i=new Wr(t);e.environment=i.fromScene(new _c,.04).texture,e.environmentIntensity=.65,i.dispose();let s=new xi(38,window.innerWidth/window.innerHeight,.1,400);s.position.set(0,4,24),e.add(new Gs(13222655,2758712,1.05));let r=new ns(16773600,1.75);r.position.set(-8,16,12),e.add(r);let a=new ns(11832575,1.6);a.position.set(6,6,-12),e.add(a);let o={renderer:t,scene:e,camera:s,sun:r,quality:Ky(),resize(){let l=window.innerWidth,c=window.innerHeight,h=o.quality==="high"?2:1.25;t.setPixelRatio(Math.min(window.devicePixelRatio||1,h)),t.setSize(l,c,!1),s.aspect=l/c,s.updateProjectionMatrix()},setQuality(l){o.quality=l;try{localStorage.setItem("sumamama.quality",l)}catch{}o.resize()},render(){t.render(e,s)}};return o.resize(),window.addEventListener("resize",o.resize),window.addEventListener("orientationchange",()=>setTimeout(o.resize,200)),o}var bc,nf=Ye(()=>{Ei();tf();bc=typeof matchMedia<"u"&&matchMedia("(pointer: coarse)").matches});var Qy,Mc,sf=Ye(()=>{Qy=[{b:"attack",label:"\u653B\u6483",cls:"a"},{b:"special",label:"\u5FC5\u6BBA",cls:"b"},{b:"jump",label:"\u30B8\u30E3\u30F3\u30D7",cls:"y"},{b:"smash",label:"\u30B9\u30DE\u30C3\u30B7\u30E5",cls:"s"},{b:"shield",label:"\u30AC\u30FC\u30C9",cls:"r"},{b:"grab",label:"\u3064\u304B\u307F",cls:"z"}],Mc=class{constructor(t,e){this.state={x:0,y:0,jump:!1,attack:!1,special:!1,shield:!1,smash:!1,grab:!1},this.enabled=!1;let i=document.createElement("div");i.id="touch",i.className="hidden",i.innerHTML=`
      <div id="stickZone"></div>
      <div id="stickBase"><div id="stickKnob"></div></div>
      <div id="tbtns">${Qy.map(o=>`<div class="tb ${o.cls}" data-b="${o.b}"><span>${o.label}</span></div>`).join("")}</div>
      <div id="tpause">II</div>`,t.appendChild(i),this.el=i,this.base=i.querySelector("#stickBase"),this.knob=i.querySelector("#stickKnob"),this.stickId=null,this.origin={x:0,y:0},this.radius=56;let s=i.querySelector("#stickZone");this.zone=s,s.addEventListener("pointerdown",o=>{this.stickId!==null&&this.releaseStick(),this.stickId=o.pointerId;try{s.setPointerCapture(o.pointerId)}catch{}this.origin={x:o.clientX,y:o.clientY},this.base.style.left=o.clientX+"px",this.base.style.top=o.clientY+"px",this.base.classList.add("on"),this.moveStick(o.clientX,o.clientY),o.preventDefault()}),window.addEventListener("pointermove",o=>{o.pointerId===this.stickId&&this.moveStick(o.clientX,o.clientY)},!0);let r=o=>{o.pointerId===this.stickId&&this.releaseStick(),this.releaseButtonPointer(o.pointerId)};for(let o of["pointerup","pointercancel"])window.addEventListener(o,r,!0);s.addEventListener("lostpointercapture",o=>{o.pointerId===this.stickId&&this.releaseStick()});let a=o=>this.reconcile(o.touches);window.addEventListener("touchend",a,!0),window.addEventListener("touchcancel",a,!0),document.addEventListener("visibilitychange",()=>{document.hidden&&this.reset()}),window.addEventListener("blur",()=>this.reset()),window.addEventListener("pagehide",()=>this.reset()),this.btnPointers=new Map,this.btnEls={};for(let o of i.querySelectorAll(".tb")){let l=o.dataset.b;this.btnEls[l]=o,o.addEventListener("pointerdown",c=>{try{o.setPointerCapture(c.pointerId)}catch{}this.btnPointers.set(c.pointerId,l),this.state[l]=!0,o.classList.add("on"),navigator.vibrate&&navigator.vibrate(8),c.preventDefault()}),o.addEventListener("lostpointercapture",c=>this.releaseButtonPointer(c.pointerId))}i.querySelector("#tpause").addEventListener("pointerdown",o=>{o.preventDefault(),e()}),i.addEventListener("contextmenu",o=>o.preventDefault())}releaseStick(){this.stickId=null,this.state.x=0,this.state.y=0,this.base.classList.remove("on"),this.knob.style.transform="translate(-50%,-50%)"}releaseButtonPointer(t){let e=this.btnPointers.get(t);e&&(this.btnPointers.delete(t),[...this.btnPointers.values()].includes(e)||(this.state[e]=!1,this.btnEls[e].classList.remove("on")))}reconcile(t){if(!t||t.length===0){this.reset();return}let e=i=>{let s=i.getBoundingClientRect();for(let r of t)if(r.clientX>=s.left-30&&r.clientX<=s.right+30&&r.clientY>=s.top-30&&r.clientY<=s.bottom+30)return!0;return!1};if(this.stickId!==null){let i=this.zone.getBoundingClientRect(),s=!1;for(let r of t)r.clientX<=i.right+80&&(s=!0);s||this.releaseStick()}for(let[i,s]of[...this.btnPointers])e(this.btnEls[s])||this.releaseButtonPointer(i)}moveStick(t,e){let i=t-this.origin.x,s=e-this.origin.y,r=Math.hypot(i,s),a=this.radius;if(r>a*1.6){let u=(r-a*1.6)/r;this.origin.x+=i*u,this.origin.y+=s*u,this.base.style.left=this.origin.x+"px",this.base.style.top=this.origin.y+"px",i=t-this.origin.x,s=e-this.origin.y}let o=Math.min(1,Math.hypot(i,s)/a),l=Math.atan2(s,i),c=Math.cos(l)*o,h=Math.sin(l)*o,d=o<.18?0:1;this.state.x=c*d,this.state.y=-h*d,this.knob.style.transform=`translate(calc(-50% + ${c*a}px), calc(-50% + ${h*a}px))`}show(t){this.enabled=t,this.el.classList.toggle("hidden",!t),t||this.reset()}reset(){for(let t of Object.keys(this.state))this.state[t]=t==="x"||t==="y"?0:!1;this.releaseStick(),this.btnPointers.clear();for(let t of this.el.querySelectorAll(".tb"))t.classList.remove("on")}read(t){if(!this.enabled)return t;let e=this.state;Math.abs(e.x)>Math.abs(t.x)&&(t.x=e.x),Math.abs(e.y)>Math.abs(t.y)&&(t.y=e.y);for(let i of["jump","attack","special","shield","smash","grab"])e[i]&&(t[i]=!0);return t}}});function tv(){return Ys||(Ys=new Bs(new Uint8Array([70,150,235,255]),4,1,Or),Ys.minFilter=Ys.magFilter=pi,Ys.generateMipmaps=!1,Ys.needsUpdate=!0),Ys}function Mn(n,t={}){return new zs({color:n,gradientMap:tv(),...t})}function Ka(n,t=1){let e=new gt(n).multiplyScalar(t);return new Se({color:e})}function ev(n=656912,t=.018){let e=n+":"+t;if(b0.has(e))return b0.get(e);let i=new ai({uniforms:{color:{value:new gt(n)},thickness:{value:t}},vertexShader:`
      uniform float thickness;
      void main() {
        vec4 mv = modelViewMatrix * vec4(position, 1.0);
        vec3 n = normalize(normalMatrix * normal);
        mv.xyz += n * thickness * (1.0 + 0.02 * -mv.z);
        gl_Position = projectionMatrix * mv;
      }`,fragmentShader:`
      uniform vec3 color;
      void main() {
        gl_FragColor = vec4(color, 1.0);
        #include <colorspace_fragment>
      }`,side:Ze});return i.userData.shared=!0,b0.set(e,i),i}function iv(n,t,e){let i=new At(n.geometry,ev(t,e));return i.name="outline",i.castShadow=!1,i.receiveShadow=!1,i.userData.isOutline=!0,n.add(i),n}function Ts(n,t,{outline:e=656912,thick:i=.018,shadow:s=!0}={}){let r=new At(n,t);return r.castShadow=s,r.receiveShadow=!1,e!==null&&e!==!1&&iv(r,e,i),r}function Xi(){if(Sc)return Sc;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d"),e=t.createRadialGradient(32,32,0,32,32,32);return e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(.35,"rgba(255,255,255,0.6)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,64,64),Sc=new ts(n),Sc}function Tc(){if(Ec)return Ec;let n=document.createElement("canvas");n.width=n.height=64;let t=n.getContext("2d");t.translate(32,32);let e=t.createRadialGradient(0,0,0,0,0,30);e.addColorStop(0,"rgba(255,255,255,1)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.beginPath();for(let i=0;i<8;i++){let s=i/8*Math.PI*2,r=i%2===0?31:7;t.lineTo(Math.cos(s)*r,Math.sin(s)*r)}return t.closePath(),t.fill(),Ec=new ts(n),Ec}function rf(){if(wc)return wc;let n=document.createElement("canvas");n.width=n.height=128;let t=n.getContext("2d"),e=t.createRadialGradient(64,64,40,64,64,63);return e.addColorStop(0,"rgba(255,255,255,0)"),e.addColorStop(.6,"rgba(255,255,255,0.9)"),e.addColorStop(1,"rgba(255,255,255,0)"),t.fillStyle=e,t.fillRect(0,0,128,128),wc=new ts(n),wc}var Ys,b0,Sc,Ec,wc,Qa=Ye(()=>{Ei();Ys=null;b0=new Map;Sc=null,Ec=null,wc=null});function M0(n,t,e,i,s,r){let a=s-e,o=r-i,l=a*a+o*o,c=l>0?((n-e)*a+(t-i)*o)/l:0;c=Re(c,0,1);let h=e+a*c,d=i+o*c;return Math.hypot(n-h,t-d)}var Zs,mM,Re,oi,Bt,Qi,Ee,ee,af,ln=Ye(()=>{Zs=Math.PI/180,mM=Math.PI*2,Re=(n,t,e)=>n<t?t:n>e?e:n,oi=(n,t,e)=>n<t?Math.min(n+e,t):Math.max(n-e,t),Bt=(n,t)=>n+Math.random()*(t-n),Qi=(n,t)=>Math.floor(Bt(n,t+1)),Ee=n=>Math.random()<n,ee=n=>n>0?1:n<0?-1:0,af=n=>1-(1-n)*(1-n)});var nv,Rc,Ac,S0=Ye(()=>{Ei();Qa();ln();nv=500,Rc=class{constructor(t){this.scene=t,this.group=new zt,t.add(this.group),this.free=[],this.live=[];for(let e=0;e<nv;e++){let i=new Si(new yi({map:Xi(),transparent:!0,depthWrite:!1,blending:Xe}));i.visible=!1,i.renderOrder=10,this.group.add(i),this.free.push(i)}this.meshFx=[]}spawn({x:t,y:e,z:i=.3,vx:s=0,vy:r=0,vz:a=0,life:o=20,size:l=.5,size1:c=null,color:h=16777215,tex:d="soft",additive:u=!0,gravity:f=0,drag:g=1,opacity:v=1,rot:m=0,spin:p=0}){let b=this.free.pop();if(!b)return null;let w=b.material;return w.map=d==="star"?Tc():d==="ring"?rf():Xi(),w.color.set(h),w.blending=u?Xe:bs,w.opacity=v,w.rotation=m,b.position.set(t,e,i),b.scale.set(l,l,1),b.visible=!0,b.userData={vx:s,vy:r,vz:a,life:o,max:o,size:l,size1:c===null?l:c,gravity:f,drag:g,opacity:v,spin:p},this.live.push(b),b}hitSpark(t,e,i,s=.5,r=1){let a=Math.min(1.5,s),o=new gt(i);this.spawn({x:t,y:e,z:.6,life:8,size:1.2+a*1.8,size1:.3,color:16777215,tex:"star",rot:Bt(0,3)}),this.spawn({x:t,y:e,z:.5,life:14,size:.4,size1:2.2+a*2.2,color:o,tex:"ring"});let l=6+Math.floor(a*10);for(let c=0;c<l;c++){let h=Bt(0,Math.PI*2),d=Bt(.08,.2)*(.7+a);this.spawn({x:t,y:e,z:.5,vx:Math.cos(h)*d+r*.05*a,vy:Math.sin(h)*d,life:Bt(10,20),size:Bt(.15,.35)*(1+a*.5),size1:.02,color:c%2?16777215:o,tex:c%3?"soft":"star",drag:.9})}}shieldSpark(t,e,i){this.spawn({x:t,y:e,z:.6,life:10,size:1.3,size1:.2,color:16777215,tex:"star"});for(let s=0;s<6;s++){let r=Bt(0,Math.PI*2);this.spawn({x:t,y:e,z:.5,vx:Math.cos(r)*.12,vy:Math.sin(r)*.12,life:12,size:.25,size1:.02,color:i,drag:.88})}}dust(t,e,i=4,s=0){for(let r=0;r<i;r++)this.spawn({x:t+Bt(-.2,.2),y:e+.1,z:Bt(-.3,.5),vx:s*Bt(.01,.05)+Bt(-.03,.03),vy:Bt(.005,.03),life:Bt(18,30),size:Bt(.3,.5),size1:Bt(.8,1.2),color:13156584,additive:!1,opacity:.55,drag:.94})}smoke(t,e,i=14209264){this.spawn({x:t+Bt(-.1,.1),y:e+Bt(-.1,.1),z:.2,vx:Bt(-.01,.01),vy:Bt(0,.01),life:26,size:.45,size1:.9,color:i,additive:!1,opacity:.45,drag:.95})}sparkle(t,e,i=16777215,s=1,r=.4){for(let a=0;a<s;a++)this.spawn({x:t+Bt(-r,r),y:e+Bt(-r,r),z:Bt(0,.6),vy:Bt(.005,.02),life:Bt(14,26),size:Bt(.15,.32),size1:.02,color:i,tex:"star",rot:Bt(0,3)})}ring(t,e,i,s=2,r=16){this.spawn({x:t,y:e,z:.5,life:r,size:.3,size1:s,color:i,tex:"ring"})}koBlast(t,e,i){let s=new gt(i),r=new vt(-t,-e*.6+2).normalize(),a=new le(2.4,18,24,1,!0);a.translate(0,-9,0);let o=new Se({color:s.clone().multiplyScalar(1.6),transparent:!0,opacity:.95,blending:Xe,depthWrite:!1,side:ke}),l=new At(a,o);l.position.set(t,e,0),l.rotation.z=Math.atan2(r.y,r.x)+Math.PI/2,this.group.add(l);let c=new At(new le(.9,16,16,1,!0),new Se({color:16777215,transparent:!0,blending:Xe,depthWrite:!1}));c.geometry.translate(0,-8,0),c.position.copy(l.position),c.rotation.copy(l.rotation),this.group.add(c),this.meshFx.push({mesh:l,life:50,max:50,kind:"blast"},{mesh:c,life:40,max:40,kind:"blast"});for(let h=0;h<40;h++){let d=Math.atan2(r.y,r.x)+Bt(-.6,.6),u=Bt(.15,.6);this.spawn({x:t,y:e,z:Bt(-1,1),vx:Math.cos(d)*u,vy:Math.sin(d)*u,life:Bt(25,50),size:Bt(.4,1),size1:.05,color:h%3?s:16777215,tex:h%2?"star":"soft",drag:.94})}this.spawn({x:t,y:e,z:1,life:30,size:2,size1:14,color:s,tex:"ring"}),this.spawn({x:t,y:e,z:1,life:18,size:10,size1:2,color:16777215})}update(){for(let t=this.live.length-1;t>=0;t--){let e=this.live[t],i=e.userData;if(i.life--,i.life<=0){e.visible=!1,this.live.splice(t,1),this.free.push(e);continue}i.vx*=i.drag,i.vy*=i.drag,i.vz*=i.drag,i.vy-=i.gravity,e.position.x+=i.vx,e.position.y+=i.vy,e.position.z+=i.vz;let s=1-i.life/i.max,r=i.size+(i.size1-i.size)*s;e.scale.set(r,r,1),e.material.opacity=i.opacity*(1-s*s),e.material.rotation+=i.spin}for(let t=this.meshFx.length-1;t>=0;t--){let e=this.meshFx[t];e.life--;let i=1-e.life/e.max;e.kind==="blast"&&(e.mesh.scale.set(1-i*.7,.6+i*.6,1-i*.7),e.mesh.material.opacity=1-i),e.life<=0&&(this.group.remove(e.mesh),e.mesh.geometry.dispose(),e.mesh.material.dispose(),this.meshFx.splice(t,1))}}clear(){for(let t of this.live)t.visible=!1,this.free.push(t);this.live.length=0;for(let t of this.meshFx)this.group.remove(t.mesh),t.mesh.geometry.dispose(),t.mesh.material.dispose();this.meshFx.length=0}},Ac=class{constructor(t,e,i=14){this.max=i,this.samples=[];let s=new xe;this.pos=new Float32Array(i*2*3),this.alpha=new Float32Array(i*2),this.posAttr=new He(this.pos,3),this.aAttr=new He(this.alpha,1),s.setAttribute("position",this.posAttr),s.setAttribute("alpha",this.aAttr);let r=[];for(let a=0;a<i-1;a++){let o=a*2,l=o+1,c=o+2,h=o+3;r.push(o,l,c,l,h,c)}s.setIndex(r),this.mat=new ai({transparent:!0,depthWrite:!1,blending:Xe,side:ke,uniforms:{color:{value:new gt(e).multiplyScalar(1.4)}},vertexShader:"attribute float alpha; varying float vA; void main(){ vA = alpha; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:"uniform vec3 color; varying float vA; void main(){ gl_FragColor = vec4(color*vA, vA); }"}),this.mesh=new At(s,this.mat),this.mesh.frustumCulled=!1,this.mesh.renderOrder=9,t.add(this.mesh),this.a=new I,this.b=new I}update(t,e){e&&t&&(t[0].getWorldPosition(this.a),t[1].getWorldPosition(this.b),this.samples.unshift({a:this.a.clone(),b:this.b.clone(),life:1}));for(let s of this.samples)s.life-=.14;for(;this.samples.length>this.max||this.samples.length&&this.samples[this.samples.length-1].life<=0;)this.samples.pop();let i=this.samples.length;for(let s=0;s<this.max;s++){let r=this.samples[Math.min(s,i-1)],a=s*6;if(!r){this.alpha[s*2]=this.alpha[s*2+1]=0;continue}this.pos[a]=r.a.x,this.pos[a+1]=r.a.y,this.pos[a+2]=r.a.z,this.pos[a+3]=r.b.x,this.pos[a+4]=r.b.y,this.pos[a+5]=r.b.z;let o=s<i?Math.max(0,r.life)*(1-s/this.max):0;this.alpha[s*2]=o*.25,this.alpha[s*2+1]=o*.9}this.posAttr.needsUpdate=!0,this.aAttr.needsUpdate=!0,this.mesh.visible=i>1}dispose(){this.mesh.parent&&this.mesh.parent.remove(this.mesh),this.mesh.geometry.dispose(),this.mat.dispose()}}});function lf(n,t=!1){let e=n[0].index!==null,i=new Set(Object.keys(n[0].attributes)),s=new Set(Object.keys(n[0].morphAttributes)),r={},a={},o=n[0].morphTargetsRelative,l=new xe,c=0;for(let h=0;h<n.length;++h){let d=n[h],u=0;if(e!==(d.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(let f in d.attributes){if(!i.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+'. All geometries must have compatible attributes; make sure "'+f+'" attribute exists among all geometries, or in none of them.'),null;r[f]===void 0&&(r[f]=[]),r[f].push(d.attributes[f]),u++}if(u!==i.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". Make sure all geometries have the same number of attributes."),null;if(o!==d.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(let f in d.morphAttributes){if(!s.has(f))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+".  .morphAttributes must be consistent throughout all geometries."),null;a[f]===void 0&&(a[f]=[]),a[f].push(d.morphAttributes[f])}if(t){let f;if(e)f=d.index.count;else if(d.attributes.position!==void 0)f=d.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+h+". The geometry must have either an index or a position attribute"),null;l.addGroup(c,f,h),c+=f}}if(e){let h=0,d=[];for(let u=0;u<n.length;++u){let f=n[u].index;for(let g=0;g<f.count;++g)d.push(f.getX(g)+h);h+=n[u].attributes.position.count}l.setIndex(d)}for(let h in r){let d=of(r[h]);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" attribute."),null;l.setAttribute(h,d)}for(let h in a){let d=a[h][0].length;if(d!==0){l.morphAttributes=l.morphAttributes||{},l.morphAttributes[h]=[];for(let u=0;u<d;++u){let f=[];for(let v=0;v<a[h].length;++v)f.push(a[h][v][u]);let g=of(f);if(!g)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+h+" morphAttribute."),null;l.morphAttributes[h].push(g)}}}return l}function of(n){let t,e,i,s=-1,r=0;for(let c=0;c<n.length;++c){let h=n[c];if(t===void 0&&(t=h.array.constructor),t!==h.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(e===void 0&&(e=h.itemSize),e!==h.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(i===void 0&&(i=h.normalized),i!==h.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;if(s===-1&&(s=h.gpuType),s!==h.gpuType)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.gpuType must be consistent across matching attributes."),null;r+=h.count*e}let a=new t(r),o=new He(a,e,i),l=0;for(let c=0;c<n.length;++c){let h=n[c];if(h.isInterleavedBufferAttribute){let d=l/e;for(let u=0,f=h.count;u<f;u++)for(let g=0;g<e;g++){let v=h.getComponent(u,g);o.setComponent(u+d,g,v)}}else a.set(h.array,l);l+=h.count*e}return s!==void 0&&(o.gpuType=s),o}var cf=Ye(()=>{Ei()});function Gn(n,{rough:t=.25,metal:e=.9,env:i=1,emissive:s=0,map:r=null}={}){return new Be({color:n,roughness:t,metalness:e,envMapIntensity:i,emissive:s,map:r})}function mi(n,{rough:t=.35,metal:e=.1,env:i=.9,emissive:s=0,side:r=Vi}={}){return new Be({color:n,roughness:t,metalness:e,envMapIntensity:i,emissive:s,side:r})}function hi(n,t=1,e={}){return new Se({color:new gt(n).multiplyScalar(t),...e})}function cn(n,t,e){let i=[],s=[],r=[],a=new I;for(let l=0;l<=t;l++)for(let c=0;c<=n;c++){let h=c/n,d=l/t;e(h,d,a),i.push(a.x,a.y,a.z),s.push(h,d)}for(let l=0;l<t;l++)for(let c=0;c<n;c++){let h=l*(n+1)+c,d=h+1,u=h+n+1,f=u+1;r.push(h,u,d,d,u,f)}let o=new xe;return o.setAttribute("position",new ae(i,3)),o.setAttribute("uv",new ae(s,2)),o.setIndex(r),o.computeVertexNormals(),o}function gi(n,t,e){let i=new zt,s=new At(n,t);if(i.add(s),e){let r=new At(n,e);r.userData.inner=!0,i.add(r)}return i}function Ce(n,t=24,e=0,i=Math.PI*2){let s=n[0][1]>n[n.length-1][1]?[...n].reverse():n;return new Hs(s.map(([r,a])=>sv(Math.max(5e-4,r),a)),t,e,i)}function N(n,t,e=0,i=0,s=0,r=0,a=0,o=0,l=null){return n.position.set(e,i,s),n.rotation.set(r,a,o),l&&(Array.isArray(l)?n.scale.set(...l):n.scale.setScalar(l)),t.add(n),n}function W(n,t){return new At(n,t)}function Vn(n){let t=[];n.traverse(e=>{e.isObject3D&&!e.isMesh&&t.push(e)});for(let e of t){let i=[],s=(l,c)=>{for(let h of l.children){if(h.userData.joint||h.userData.keep)continue;let d=new Ie().multiplyMatrices(c,h.matrix);if(h.isMesh){if(h.children.every(u=>u.isMesh&&u.children.length===0)){i.push({mesh:h,m:d});for(let u of h.children)u.updateMatrix(),i.push({mesh:u,m:new Ie().multiplyMatrices(d,u.matrix)})}}else h.type==="Group"&&!h.userData.joint&&s(h,d)}};e.updateMatrix();for(let l of e.children)l.updateMatrix();let r=l=>{l.updateMatrix(),l.children.forEach(r)};if(e.children.forEach(r),s(e,new Ie),i.length<2)continue;let a=new Map;for(let l of i){let c=l.mesh.material.uuid+(l.mesh.geometry.index?"i":"n");a.has(c)||a.set(c,[]),a.get(c).push(l)}for(let l of a.values()){if(l.length<2&&!l[0].mesh.parent.isMesh)continue;let c=l.map(({mesh:f,m:g})=>{let v=f.geometry.clone();for(let m of Object.keys(v.attributes))["position","normal","uv","color"].includes(m)||v.deleteAttribute(m);return v.attributes.uv||v.setAttribute("uv",new ae(new Float32Array(v.attributes.position.count*2),2)),v.attributes.normal||v.computeVertexNormals(),v.applyMatrix4(g),v});if(c.some(f=>f.attributes.color)&&!c.every(f=>f.attributes.color))continue;let d=lf(c,!1);if(!d)continue;let u=new At(d,l[0].mesh.material);u.userData.inner=l[0].mesh.userData.inner;for(let{mesh:f}of l)f.parent&&f.parent.remove(f);e.add(u)}let o=l=>{for(let c of[...l.children])c.userData.joint||c.userData.keep||c.isMesh||(o(c),c.type==="Group"&&c.children.length===0&&l.remove(c))};o(e)}}function E0({c1:n=5983743,c2:t=12606719,c3:e=16743128,line:i=16049407,scale:s=5,bright:r=1}={}){return new ai({side:Ze,uniforms:{time:{value:0},c1:{value:new gt(n)},c2:{value:new gt(t)},c3:{value:new gt(e)},line:{value:new gt(i)},scale:{value:s},bright:{value:r},flash:{value:new Qe(1,1,1,0)}},vertexShader:"varying vec2 vUv; void main(){ vUv = uv; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
      uniform float time, scale, bright; uniform vec3 c1, c2, c3, line; uniform vec4 flash; varying vec2 vUv;
      float caustic(vec2 p, float t){
        vec2 i = p; float c = 1.0; float inten = 0.006;
        for (int n = 0; n < 4; n++) {
          float tt = t * (1.0 - (3.5 / float(n + 1)));
          i = p + vec2(cos(tt - i.x) + sin(tt + i.y), sin(tt - i.y) + cos(tt + i.x));
          c += 1.0 / length(vec2(p.x / (sin(i.x + tt) / inten), p.y / (cos(i.y + tt) / inten)));
        }
        c /= 4.0; c = 1.17 - pow(c, 1.4);
        return clamp(pow(abs(c), 6.0), 0.0, 1.0);
      }
      void main(){
        vec2 p = vec2(vUv.x * scale * 2.0, vUv.y * scale) + 20.0;
        float k = caustic(p, time * 0.5);
        vec3 col = mix(c1, c2, smoothstep(0.1, 0.8, vUv.y));
        col = mix(col, c3, smoothstep(0.82, 1.0, vUv.y));
        col += line * (1.0 - k) * 0.55; // \u6FC3\u3044\u5730\u306B\u660E\u308B\u3044\u7DB2\u76EE
        col *= bright;
        col = mix(col, flash.rgb, flash.a);
        gl_FragColor = vec4(col, 1.0);
        #include <tonemapping_fragment>
        #include <colorspace_fragment>
      }`})}function hn(n,t,e,{repeat:i=null,srgb:s=!0}={}){let r=document.createElement("canvas");r.width=n,r.height=t,e(r.getContext("2d"),n,t);let a=new ts(r);return s&&(a.colorSpace=Ai),a.anisotropy=4,i&&(a.wrapS=a.wrapT=_r,a.repeat.set(...i)),a}function hf(n="#f0c450",t="#a8741c"){return hn(512,256,(e,i,s)=>{let r=e.createLinearGradient(0,0,0,s);r.addColorStop(0,"#fff0b0"),r.addColorStop(.5,n),r.addColorStop(1,"#c8902c"),e.fillStyle=r,e.fillRect(0,0,i,s),e.strokeStyle=t,e.lineWidth=7,e.lineCap="round",e.strokeRect(14,14,i-28,s-28),e.lineWidth=6;let a=(l,c,h,d)=>{e.beginPath(),e.moveTo(l,c),e.bezierCurveTo(l+40*h*d,c-60*h,l+110*h*d,c-20*h,l+90*h*d,c+25*h),e.bezierCurveTo(l+75*h*d,c+55*h,l+40*h*d,c+30*h,l+55*h*d,c+10*h),e.stroke()};e.beginPath(),e.moveTo(30,s/2),e.bezierCurveTo(160,40,300,220,490,s/2),e.stroke();for(let l=0;l<4;l++)a(60+l*110,s/2+(l%2?30:-30),.9,1);e.fillStyle=t;for(let l=0;l<6;l++)e.beginPath(),e.arc(50+l*85,l%2?60:s-60,9,0,Math.PI*2),e.fill();let o=e.createLinearGradient(0,0,i,s);o.addColorStop(.3,"rgba(255,255,255,0)"),o.addColorStop(.45,"rgba(255,255,240,0.35)"),o.addColorStop(.6,"rgba(255,255,255,0)"),e.fillStyle=o,e.fillRect(0,0,i,s)})}function uf(n="#f2c44c",t="#b07a18"){return hn(512,512,(e,i,s)=>{let r=i/2,a=s/2,o=e.createRadialGradient(r-60,a-70,20,r,a,256);o.addColorStop(0,"#fff4c0"),o.addColorStop(.45,n),o.addColorStop(1,"#b8841f"),e.fillStyle=o,e.fillRect(0,0,i,s),e.strokeStyle=t,e.lineWidth=6,e.beginPath(),e.arc(r,a,238,0,Math.PI*2),e.stroke(),e.beginPath(),e.arc(r,a,168,0,Math.PI*2),e.stroke(),e.fillStyle=t,e.font="bold 42px serif",e.textAlign="center",e.textBaseline="middle";let l="\u16A0\u16A2\u16A6\u16A8\u16B1\u16B2\u16B7\u16B9\u16BA\u16BE\u16C1\u16C3\u16C7\u16C8\u16C9\u16CA\u16CF\u16D2\u16D6\u16D7\u16DA\u16DC\u16DE\u16DF",c=26;for(let d=0;d<c;d++){let u=d/c*Math.PI*2;e.save(),e.translate(r+Math.cos(u)*203,a+Math.sin(u)*203),e.rotate(u+Math.PI/2),e.fillText(l[d%l.length],0,0),e.restore()}let h=e.createRadialGradient(r-50,a-60,0,r-50,a-60,150);h.addColorStop(0,"rgba(255,255,230,0.55)"),h.addColorStop(1,"rgba(255,255,255,0)"),e.fillStyle=h,e.fillRect(0,0,i,s)})}function df(n="#e5431a",t="#9c1e08",e="#ff8a3a"){return hn(256,256,(i,s,r)=>{i.fillStyle=n,i.fillRect(0,0,s,r);let a=s/2,o=r/2;for(let l=0;l<120;l++){let c=Math.random()*Math.PI*2;i.strokeStyle=Math.random()<.5?t:e,i.globalAlpha=.35+Math.random()*.4,i.lineWidth=1+Math.random()*2.5,i.beginPath(),i.moveTo(a+Math.cos(c)*30,o+Math.sin(c)*30),i.lineTo(a+Math.cos(c)*128,o+Math.sin(c)*128),i.stroke()}i.globalAlpha=1})}function ve(n,t,e=0,i=0,s=0){let r=new zt;return r.name=n,r.userData.joint=!0,r.position.set(e,i,s),t.add(r),r}function Rs(n=0,t=null,e=1){let i=hn(128,128,(a,o,l)=>{let c=a.createRadialGradient(64,64,0,64,64,64);c.addColorStop(0,"rgba(255,255,255,0.95)"),c.addColorStop(.55,"rgba(255,255,255,0.8)"),c.addColorStop(1,"rgba(255,255,255,0)"),a.fillStyle=c,a.fillRect(0,0,o,l)},{srgb:!1}),s=new At(new es(1,1),new Se({color:n,map:i,transparent:!0,opacity:.75,depthWrite:!1}));s.rotation.x=-Math.PI/2,s.scale.set(e,e*.62,1),s.renderOrder=2;let r=new zt;if(r.add(s),t){let a=new At(new Ia(.42,.5,40),new Se({color:new gt(t).multiplyScalar(1.3),transparent:!0,opacity:.45,depthWrite:!1,blending:Xe}));a.rotation.x=-Math.PI/2,a.scale.set(e,e*.62,1),a.position.y=.002,r.add(a)}return r}var sv,Js=Ye(()=>{Ei();cf();sv=(n,t)=>new vt(n,t)});function w0(n){let t=ze.main;if(n>t.top||n<t.bottom)return-1;if(n>=t.lip)return t.half;let e=(t.lip-n)/(t.lip-t.bottom);return t.half+(t.bottomHalf-t.half)*e}function eo(n,t){let e=w0(t);return e>0&&Math.abs(n)<e}var ze,to,Cc,io=Ye(()=>{Ei();Qa();Js();ze={main:{half:8,top:0,lip:-1,bottom:-5,bottomHalf:3.4},platforms:[{x1:-6.2,x2:-2.6,y:2.7},{x1:2.6,x2:6.2,y:2.7},{x1:-1.8,x2:1.8,y:5.3}],ledges:[{x:-8,y:0,side:-1},{x:8,y:0,side:1}],blast:{left:-21,right:21,top:16.5,bottom:-11},spawns:[{x:-4.4,y:0},{x:4.4,y:0}],respawn:{x:0,y:8.2}},to={x1:-ze.main.half,x2:ze.main.half,y:0,main:!0};Cc=class{constructor(t){this.scene=t,this.group=new zt,t.add(this.group),this.time=0,this.type="battlefield",this.activePlatforms=ze.platforms,this.buildSky(),this.buildMain(),this.buildPlatforms(),this.buildScenery(),Vn(this.group)}setType(t){this.type=t;let e=t==="battlefield";this.activePlatforms=e?ze.platforms:[],this.platGroup.visible=e}buildSky(){let t=new Ct(180,32,16),e=new ai({side:Ze,depthWrite:!1,uniforms:{time:{value:0}},vertexShader:"varying vec3 vP; void main(){ vP = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }",fragmentShader:`
        varying vec3 vP; uniform float time;
        void main(){
          float h = vP.y;
          vec3 top = vec3(0.02,0.02,0.09);
          vec3 mid = vec3(0.13,0.05,0.26);
          vec3 hor = vec3(0.55,0.2,0.45);
          vec3 low = vec3(0.08,0.03,0.14);
          vec3 c = h > 0.0 ? mix(mix(hor, mid, smoothstep(0.0,0.25,h)), top, smoothstep(0.25,0.8,h)) : mix(hor, low, smoothstep(0.0,-0.3,h));
          float band = exp(-pow((h-0.03)*14.0,2.0));
          c += vec3(0.5,0.25,0.4)*band*0.35;
          gl_FragColor = vec4(c,1.0);
          #include <colorspace_fragment>
        }`});this.sky=new At(t,e),this.scene.add(this.sky);let i=900,s=new Float32Array(i*3),r=new Float32Array(i);for(let c=0;c<i;c++){let h=Math.random()*2-1,d=Math.random()*Math.PI*2,u=Math.abs(h)*.95+.05,f=Math.sqrt(1-u*u);s[c*3]=Math.cos(d)*f*170,s[c*3+1]=u*170-10,s[c*3+2]=Math.sin(d)*f*170,r[c]=Math.random()*2.2+.6}let a=new xe;a.setAttribute("position",new He(s,3)),a.setAttribute("size",new He(r,1)),this.starMat=new ai({transparent:!0,depthWrite:!1,blending:Xe,uniforms:{time:{value:0}},vertexShader:`attribute float size; uniform float time; varying float vA;
        void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); gl_PointSize = size*(1.0+0.4*sin(time*2.0+position.x)); vA = 0.6+0.4*sin(time*3.0+position.z*0.3);
        gl_Position = projectionMatrix*mv; }`,fragmentShader:"varying float vA; void main(){ vec2 d = gl_PointCoord-0.5; float a = smoothstep(0.5,0.0,length(d)); gl_FragColor = vec4(vec3(1.0,0.92,1.0)*1.4, a*vA); }"}),this.scene.add(new Pr(a,this.starMat));let o=new At(new Bn(9,48),new Se({color:new gt(16773846).multiplyScalar(1.25),fog:!1}));o.position.set(-38,34,-120),o.lookAt(0,0,0),this.scene.add(o);let l=new Si(new yi({map:Xi(),color:16759016,transparent:!0,opacity:.35,depthWrite:!1,blending:Xe}));l.scale.set(60,60,1),l.position.copy(o.position).multiplyScalar(1.03),this.scene.add(l)}buildMain(){let t=ze.main,e=new zt;e.position.z=-2.65,this.group.add(e);let i=new ci;i.moveTo(-t.half,t.top),i.lineTo(t.half,t.top),i.lineTo(t.half,t.lip),i.lineTo(t.bottomHalf,t.bottom),i.lineTo(-t.bottomHalf,t.bottom),i.lineTo(-t.half,t.lip),i.lineTo(-t.half,t.top);let s=6,r=new zi(i,{depth:s,bevelEnabled:!0,bevelSize:.15,bevelThickness:.2,bevelSegments:2});r.translate(0,0,-s/2);let a=Ts(r,Mn(3813212),{outline:788248,thick:.05});a.receiveShadow=!0,e.add(a);let o=new At(new Ne(t.half*2+.4,.22,s+.5),Mn(9143992));o.position.y=-.09,o.receiveShadow=!0,e.add(o);let l=new At(new Ne(t.half*2-.6,.02,s-1.2),Mn(7301792));l.position.y=.025,l.receiveShadow=!0,e.add(l);let c=Mn(15777856,{emissive:new gt(3811840)}),h=Ts(new Ne(t.half*2+.5,.14,.14),c,{outline:2101248,thick:.02});h.position.set(0,-.2,s/2+.26),e.add(h);for(let g of[-1,1]){let v=Ts(new Ne(.14,.14,s+.5),c,{outline:2101248,thick:.02});v.position.set(g*(t.half+.2),-.2,0),e.add(v);let m=Ts(new Fe(.22,.26,1.1,12),Mn(13617390),{outline:788248,thick:.03});m.position.set(g*(t.half-.6),.55,.2),m.castShadow=!0,e.add(m);let p=new At(new Ct(.2,16,12),Ka(16759039,1.6));p.position.set(g*(t.half-.6),1.3,.2),p.userData.keep=!0,e.add(p),this.orbs=this.orbs||[],this.orbs.push(p)}let d=Ka(10120191,1.3);for(let g=-3;g<=3;g++){let v=new At(new ti(.28,.035,6,16),d);v.position.set(g*2.1,-.65,s/2+.21),e.add(v);let m=new At(new Gi(.12,0),d);m.position.set(g*2.1,-.65,s/2+.22),e.add(m)}this.crystals=[];let u=new zs({color:11898111,emissive:new gt(5909696),gradientMap:null}),f=[[-2.6,-5,1.2],[.4,-5,1.9],[2.4,-5,1],[-1.2,-5,1.4],[-5.2,-2.6,.8],[5.4,-2.4,.9]];for(let[g,v,m]of f){let p=Ts(new le(.35*m,1.8*m,5),u,{outline:1706032,thick:.03});p.rotation.x=Math.PI,p.position.set(g,v-.9*m+.1,(Math.random()-.5)*2),e.add(p)}}buildPlatforms(){this.platGroup=new zt,this.platGroup.userData.keep=!0,this.group.add(this.platGroup);let t=Mn(11117272),e=Mn(15777856,{emissive:new gt(3811840)}),i=new Se({color:new gt(12946687).multiplyScalar(1.2),transparent:!0,opacity:.7});this.platMeshes=[];for(let s of ze.platforms){let r=s.x2-s.x1,a=new zt;a.position.set((s.x1+s.x2)/2,s.y,0);let o=Ts(new Ne(r,.22,3.2),t,{outline:788248,thick:.03});o.position.y=-.11,o.receiveShadow=!0,o.castShadow=!0,a.add(o);let l=Ts(new Ne(r+.1,.08,.1),e,{outline:null});l.position.set(0,-.2,1.62),a.add(l);let c=new At(new Ne(r*.85,.06,2.6),i);c.position.y=-.26,a.add(c);let h=new At(new Gi(.22,0),Ka(16751856,1.3));h.position.y=-.62,h.userData.keep=!0,a.add(h),this.platMeshes.push({grp:a,gem:h}),this.platGroup.add(a)}}buildScenery(){let t=Mn(2366014),e=Mn(5128058);this.isles=[];let i=[[-34,-6,-45,5],[30,-2,-55,6],[-12,8,-80,4],[48,10,-90,7],[-55,4,-70,6],[12,-14,-40,3]];for(let[o,l,c,h]of i){let d=new zt,u=new At(new le(h,h*2.2,7),t);u.rotation.x=Math.PI,u.position.y=-h*1.1;let f=new At(new Fe(h*1.02,h,h*.3,7),e);d.add(u,f);let g=new At(new Fe(h*.12,h*.15,h*1.2,8),Mn(7234216));g.position.set(h*.3,h*.6,0);let v=new At(new Ct(h*.1,8,6),Ka(16766090,1.5));v.position.set(h*.3,h*1.25,0),d.add(g,v),d.position.set(o,l,c),d.userData.baseY=l,d.userData.phase=Math.random()*6,this.scene.add(d),this.isles.push(d)}let s=140,r=new Float32Array(s*3);for(let o=0;o<s;o++)r[o*3]=(Math.random()-.5)*60,r[o*3+1]=Math.random()*30-8,r[o*3+2]=-Math.random()*30-4;let a=new xe;a.setAttribute("position",new He(r,3)),this.motes=new Pr(a,new Lr({map:Xi(),size:.5,color:14264575,transparent:!0,opacity:.8,depthWrite:!1,blending:Xe})),this.scene.add(this.motes)}update(t){this.time+=t;let e=this.time;this.starMat.uniforms.time.value=e;for(let s of this.isles)s.position.y=s.userData.baseY+Math.sin(e*.4+s.userData.phase)*.6;for(let{gem:s}of this.platMeshes)s.rotation.y=e*1.5,s.position.y=-.62+Math.sin(e*2)*.06;this.orbs&&this.orbs.forEach((s,r)=>{s.position.y=1.3+Math.sin(e*1.8+r)*.08});let i=this.motes.geometry.attributes.position;for(let s=0;s<i.count;s++){let r=i.getY(s)+.012;r>22&&(r=-8),i.setY(s,r),i.setX(s,i.getX(s)+Math.sin(e+s)*.004)}i.needsUpdate=!0}}});function Sn(){return{x:0,y:0,cx:0,cy:0,jump:!1,attack:!1,special:!1,shield:!1,smash:!1,grab:!1,start:!1,any:!1}}function Dc(n,t){let e=navigator.getGamepads?navigator.getGamepads():[],i=e&&e[n];if(!i)return t;let s=h=>Math.abs(h)<.22?0:h,r=h=>i.buttons[h]&&i.buttons[h].pressed,a=s(i.axes[0]||0),o=-s(i.axes[1]||0);r(14)&&(a=-1),r(15)&&(a=1),r(12)&&(o=1),r(13)&&(o=-1),Math.abs(a)>Math.abs(t.x)&&(t.x=a),Math.abs(o)>Math.abs(t.y)&&(t.y=o);let l=s(i.axes[2]||0),c=-s(i.axes[3]||0);return Math.hypot(l,c)>.6&&(t.cx=l,t.cy=c),r(0)&&(t.attack=!0),r(1)&&(t.special=!0),(r(2)||r(3))&&(t.jump=!0),(r(4)||r(5))&&(t.grab=!0),(r(6)||r(7))&&(t.shield=!0),r(9)&&(t.start=!0),t}var Lc,T0,Pc,Ic,Uc=Ye(()=>{Lc=["jump","attack","special","shield","smash","grab"],T0=[{left:["KeyA"],right:["KeyD"],up:["KeyW"],down:["KeyS"],jump:["Space"],attack:["KeyJ","KeyF"],special:["KeyK","KeyG"],shield:["KeyL","KeyH"],smash:["KeyI","KeyR"],grab:["KeyU","KeyT"]},{left:["ArrowLeft"],right:["ArrowRight"],up:["ArrowUp"],down:["ArrowDown"],jump:["Numpad0","ShiftRight"],attack:["Numpad1","Comma"],special:["Numpad2","Period"],shield:["Numpad3","Slash"],smash:["Numpad5","Semicolon"],grab:["Numpad4","KeyM"]}];Pc=class{constructor(){this.down=new Set,this.pressedOnce=new Set,window.addEventListener("keydown",t=>{this.down.has(t.code)||this.pressedOnce.add(t.code),this.down.add(t.code),["Space","ArrowUp","ArrowDown","ArrowLeft","ArrowRight","Slash","Tab"].includes(t.code)&&t.preventDefault()}),window.addEventListener("keyup",t=>this.down.delete(t.code)),window.addEventListener("blur",()=>this.down.clear())}take(t){return this.pressedOnce.has(t)?(this.pressedOnce.delete(t),!0):!1}clearOnce(){this.pressedOnce.clear()}any(t){return t.some(e=>this.down.has(e))}read(t,e){for(let i of t){let s=this.any(i.right),r=this.any(i.left),a=this.any(i.up),o=this.any(i.down);s&&!r?e.x=1:r&&!s&&(e.x=-1),a&&!o?e.y=1:o&&!a&&(e.y=-1);for(let l of Lc)this.any(i[l])&&(e[l]=!0)}return e}};Ic=class{constructor(){this.raw=Sn(),this.prev=Sn(),this.pressed={},this.buf={},this.stick={x:0,y:0},this.dirBuf={up:0,down:0,left:0,right:0},this.dirPressed={up:!1,down:!1,left:!1,right:!1},this.cBuf=0,this.cDir={x:0,y:0},this.mash=0,this.tapJump=!0;for(let t of Lc)this.pressed[t]=!1,this.buf[t]=0}latch(t){this.prev=this.raw,this.raw=t,this.mash=0;for(let a of Lc)this.pressed[a]=t[a]&&!this.prev[a],this.pressed[a]?(this.buf[a]=7,this.mash++):this.buf[a]>0&&this.buf[a]--;this.stick.x=t.x,this.stick.y=t.y;let e=.6,i=this.dirPressed;i.up=t.y>e&&!(this.prev.y>e),i.down=t.y<-e&&!(this.prev.y<-e),i.right=t.x>e&&!(this.prev.x>e),i.left=t.x<-e&&!(this.prev.x<-e);for(let a of["up","down","left","right"])i[a]?(this.dirBuf[a]=7,this.mash++):this.dirBuf[a]>0&&this.dirBuf[a]--;let s=Math.hypot(t.cx,t.cy)>.6,r=Math.hypot(this.prev.cx,this.prev.cy)>.6;s&&!r?(this.cBuf=7,this.cDir={x:t.cx,y:t.cy}):this.cBuf>0&&this.cBuf--}consume(t){this.buf[t]=0}consumeDir(t){this.dirBuf[t]=0}clearAll(){for(let t of Lc)this.buf[t]=0;for(let t in this.dirBuf)this.dirBuf[t]=0;this.cBuf=0}sidePressed(){return this.dirBuf.left>0?-1:this.dirBuf.right>0?1:0}}});function av(n,t,e){let i={};for(let s of pf){let r=n[s],a=t[s];if(!r&&!a)continue;let o=r||Nc,l=a||Nc;i[s]=[o[0]+(l[0]-o[0])*e,o[1]+(l[1]-o[1])*e,o[2]+(l[2]-o[2])*e]}for(let s of rv){let r=n[s]||0,a=t[s]||0;(r||a)&&(i[s]=r+(a-r)*e)}return i}function mf(n,t){if(t<=n[0][0])return n[0][1];for(let e=0;e<n.length-1;e++){let[i,s]=n[e],[r,a]=n[e+1];if(t<r)return av(s,a,af((t-i)/(r-i)))}return n[n.length-1][1]}function no(n,t,e){for(let s of pf){let r=n.j[s];if(!r)continue;let a=t[s]||Nc,o=n.base[s]||Nc,l=o[0]+a[0],c=o[1]+a[1],h=o[2]+a[2];s==="body"&&(r.rotation.x=R0(r.rotation.x,l),r.rotation.y=R0(r.rotation.y,c),r.rotation.z=R0(r.rotation.z,h)),r.rotation.x+=(l-r.rotation.x)*e,r.rotation.y+=(c-r.rotation.y)*e,r.rotation.z+=(h-r.rotation.z)*e}let i=n.j.body;i.position.y+=(n.hipY+(t.by||0)-i.position.y)*e,i.position.z+=((t.bz||0)-i.position.z)*e,n.flare+=((t.flare||0)-n.flare)*e}function R0(n,t){for(;n-t>Math.PI;)n-=ff;for(;t-n>Math.PI;)n+=ff;return n}function Fc(n){for(let t of["body","hips","torso"]){let e=n.j[t];if(e)for(let i of["x","y","z"]){let s=e.rotation[i];s=((s+Math.PI)%(Math.PI*2)+Math.PI*2)%(Math.PI*2)-Math.PI,e.rotation[i]=s}}}var pf,rv,Nc,ff,A0=Ye(()=>{ln();pf=["body","hips","torso","head","armL","foreL","armR","foreR","legL","shinL","legR","shinR","wep","earL","earR","wisp"],rv=["by","bz","flare"],Nc=[0,0,0];ff=Math.PI*2});var C0,pt,rs=Ye(()=>{C0=class{constructor(){this.ctx=null,this.muted=!1,this.musicOn=!0,this.bgm=null}init(){if(this.ctx){this.ctx.state==="suspended"&&this.ctx.resume();return}let t=window.AudioContext||window.webkitAudioContext;if(!t)return;this.ctx=new t;let e=this.ctx;this.master=e.createGain(),this.master.gain.value=.55;let i=e.createDynamicsCompressor();i.threshold.value=-14,i.ratio.value=4,this.master.connect(i).connect(e.destination),this.sfxBus=e.createGain(),this.sfxBus.gain.value=.9,this.sfxBus.connect(this.master),this.musicBus=e.createGain(),this.musicBus.gain.value=.28,this.musicBus.connect(this.master);let s=e.sampleRate*1.5;this.noiseBuf=e.createBuffer(1,s,e.sampleRate);let r=this.noiseBuf.getChannelData(0);for(let a=0;a<s;a++)r[a]=Math.random()*2-1}get ok(){return this.ctx&&!this.muted}setMuted(t){this.muted=t,this.master&&(this.master.gain.value=t?0:.55)}tone(t,e,{type:i="sine",vol:s=.3,slide:r=null,delay:a=0,attack:o=.005,bus:l=null}={}){if(!this.ok)return;let c=this.ctx,h=c.currentTime+a,d=c.createOscillator(),u=c.createGain();d.type=i,d.frequency.setValueAtTime(t,h),r&&d.frequency.exponentialRampToValueAtTime(Math.max(20,r),h+e),u.gain.setValueAtTime(1e-4,h),u.gain.exponentialRampToValueAtTime(s,h+o),u.gain.exponentialRampToValueAtTime(1e-4,h+e),d.connect(u).connect(l||this.sfxBus),d.start(h),d.stop(h+e+.05)}noise(t,{vol:e=.3,freq:i=2e3,type:s="bandpass",q:r=1,slide:a=null,delay:o=0,bus:l=null}={}){if(!this.ok)return;let c=this.ctx,h=c.currentTime+o,d=c.createBufferSource();d.buffer=this.noiseBuf;let u=c.createBiquadFilter();u.type=s,u.frequency.setValueAtTime(i,h),a&&u.frequency.exponentialRampToValueAtTime(Math.max(40,a),h+t),u.Q.value=r;let f=c.createGain();f.gain.setValueAtTime(e,h),f.gain.exponentialRampToValueAtTime(1e-4,h+t),d.connect(u).connect(f).connect(l||this.sfxBus),d.start(h,Math.random()*.5),d.stop(h+t+.05)}hit(t=.5){let e=Math.min(1.4,t);this.tone(160-e*40,.12+e*.12,{type:"sine",vol:.5+e*.3,slide:40}),this.noise(.06+e*.1,{vol:.35+e*.25,freq:2400-e*900,q:.8,slide:500}),e>.7&&(this.noise(.35,{vol:.25,freq:900,type:"lowpass",slide:120}),this.tone(90,.3,{type:"triangle",vol:.35,slide:30}))}slash(t=.5){this.noise(.12+t*.1,{vol:.16,freq:4e3,q:2,slide:900})}whoosh(t=.5){this.noise(.14+t*.08,{vol:.08+t*.05,freq:700,q:1.2,slide:2200})}jump(){this.tone(300,.1,{type:"triangle",vol:.12,slide:620})}djump(){this.tone(420,.14,{type:"triangle",vol:.12,slide:900}),this.noise(.1,{vol:.05,freq:3e3})}land(){this.noise(.07,{vol:.1,freq:500,type:"lowpass"})}dash(){this.noise(.09,{vol:.07,freq:900,type:"lowpass"})}shieldHit(){this.tone(900,.12,{type:"square",vol:.07,slide:500}),this.noise(.08,{vol:.12,freq:3500,q:3})}shieldBreak(){this.tone(700,.5,{type:"sawtooth",vol:.15,slide:80}),this.noise(.5,{vol:.3,freq:3e3,slide:200})}grab(){this.tone(220,.06,{type:"square",vol:.08})}throwS(){this.noise(.2,{vol:.15,freq:900,slide:2500})}ledge(){this.tone(500,.05,{type:"triangle",vol:.1})}dodge(){this.noise(.12,{vol:.08,freq:5e3,q:2,slide:2e3})}charge(){this.tone(300,.08,{type:"sine",vol:.05,slide:360})}orb(){this.tone(520,.25,{type:"sine",vol:.18,slide:180}),this.tone(780,.2,{type:"triangle",vol:.08,slide:300})}warp(){this.tone(200,.3,{type:"sine",vol:.18,slide:1400}),this.noise(.3,{vol:.08,freq:6e3,q:4,slide:1500})}reflect(){this.tone(1200,.2,{type:"triangle",vol:.14,slide:2400})}counter(){this.tone(1500,.12,{type:"square",vol:.1}),this.tone(2200,.3,{type:"triangle",vol:.12,delay:.05})}armor(){this.tone(180,.1,{type:"square",vol:.1})}tech(){this.noise(.08,{vol:.12,freq:4e3,q:3})}star(){this.tone(1800,.15,{type:"triangle",vol:.06})}ko(){this.tone(120,1.1,{type:"sawtooth",vol:.3,slide:30}),this.noise(1.2,{vol:.5,freq:1800,type:"lowpass",slide:80}),this.tone(60,1,{type:"sine",vol:.6,slide:25})}fire(){this.noise(.45,{vol:.22,freq:700,type:"lowpass",slide:250}),this.noise(.3,{vol:.1,freq:2600,q:.6,slide:900})}fsReady(){[660,880,1100,1320,1760].forEach((t,e)=>this.tone(t,.3,{type:"triangle",vol:.1,delay:e*.06})),this.noise(.6,{vol:.2,freq:5e3,q:2,slide:1500})}fsStart(){this.tone(110,1.2,{type:"sawtooth",vol:.18,slide:440}),this.noise(1,{vol:.25,freq:400,slide:4e3,q:1}),[523,659,784].forEach((t,e)=>this.tone(t,.8,{type:"square",vol:.06,delay:.3+e*.1}))}fsBoom(){this.tone(70,1.4,{type:"sine",vol:.7,slide:25}),this.noise(1.3,{vol:.55,freq:2500,type:"lowpass",slide:100}),this.tone(200,.8,{type:"sawtooth",vol:.2,slide:40})}countdown(){this.tone(660,.18,{type:"square",vol:.12})}go(){this.tone(990,.5,{type:"square",vol:.14}),this.tone(1320,.5,{type:"triangle",vol:.1})}game(){[523,659,784,1046].forEach((t,e)=>this.tone(t,.5,{type:"square",vol:.09,delay:e*.09}))}menuMove(){this.tone(880,.05,{type:"square",vol:.05})}menuOk(){this.tone(660,.08,{type:"square",vol:.08}),this.tone(990,.12,{type:"square",vol:.08,delay:.07})}menuBack(){this.tone(500,.1,{type:"square",vol:.07,slide:300})}playMusic(t="battle"){if(!this.ctx||(this.stopMusic(),!this.musicOn))return;let e=this.ctx,s=60/(t==="battle"?148:104)/4,r=t==="battle"?[[57,60,64],[53,57,60],[48,52,55],[55,59,62],[50,53,57],[53,57,60],[52,56,59],[52,56,59]]:[[57,60,64],[53,57,60],[48,52,55],[55,59,62]],a=t==="battle"?[76,-1,74,72,74,-1,76,-1,79,-1,76,74,72,-1,69,-1]:[],o=h=>440*Math.pow(2,(h-69)/12),l={stepIdx:0,next:e.currentTime+.1,timer:0},c=()=>{for(;l.next<e.currentTime+.12;){let h=l.stepIdx,d=Math.floor(h/16)%r.length,u=h%16,f=r[d],v=l.next-e.currentTime;if(!this.muted){u%2===0&&this.tone(o(f[0]-24),s*1.8,{type:"sawtooth",vol:u%4===0?.22:.14,delay:v,bus:this.musicBus});let m=f[[0,1,2,1][u%4]]+(u>=8?12:0);if(this.tone(o(m),s*.9,{type:"square",vol:.045,delay:v,bus:this.musicBus}),t==="battle"){u%4===0&&this.tone(140,.14,{type:"sine",vol:.5,slide:40,delay:v,bus:this.musicBus}),u%8===4&&this.noise(.14,{vol:.28,freq:1800,q:.7,delay:v,bus:this.musicBus}),u%2===1&&this.noise(.03,{vol:.08,freq:8e3,type:"highpass",delay:v,bus:this.musicBus});let p=a[u];d%2===1&&p>0&&this.tone(o(p+(d>=4?-2:0)),s*1.9,{type:"triangle",vol:.12,delay:v,bus:this.musicBus})}else u===0&&f.forEach(p=>this.tone(o(p+12),s*14,{type:"triangle",vol:.05,delay:v,attack:.3,bus:this.musicBus}))}l.stepIdx++,l.next+=s}};l.timer=setInterval(c,30),this.bgm=l}stopMusic(){this.bgm&&clearInterval(this.bgm.timer),this.bgm=null}},pt=new C0});function xf(n,t,e,i,s){return((n/10+n*t/20)*(200/(e+100))*1.4+18)*(i/100)+s}function so(n,t){return t&&n>=t[0]&&n<=t[1]}var ro,Bc,L0,P0,gf,ov,kc,yf=Ye(()=>{Ei();io();ln();A0();S0();rs();ro=.0027,Bc=.0046,L0=.26,P0=50,gf=Math.PI/2-.42;ov=new Set(["idle","walk","dash","run","skid","turn","crouch","hitstun","jumpsquat","land","knockdown","tumble"]),kc=class{constructor(t,e,i,{input:s,variant:r=0,color:a,stocks:o=3,cpu:l=!1,label:c}){this.battle=t,this.slot=e,this.def=i,this.s=i.stats,this.input=s,this.cpu=l,this.color=new gt(a),this.label=c,this.model=i.buildModel(r),t.scene.add(this.model.root);for(let h of this.model.worldObjects)t.scene.add(h);this.model.shadow&&t.scene.add(this.model.shadow),this.trail=new Ac(t.scene,this.model.trailColor),this.shieldMesh=new At(new Ct(1,24,16),new Se({color:this.color.clone().multiplyScalar(.9),transparent:!0,opacity:.4,depthWrite:!1,blending:Xe})),this.shieldMesh.visible=!1,t.scene.add(this.shieldMesh),this.platMesh=new At(new Fe(.9,.5,.18,24),new Se({color:this.color.clone().multiplyScalar(1.3),transparent:!0,opacity:.85})),this.platMesh.visible=!1,t.scene.add(this.platMesh),this.stocks=o,this.stats={kos:0,falls:0,dealt:0,taken:0,sds:0},this.damage=0,this.animT=0,this.phase=0,this.flashT=0,this.fsReady=!1,this.visYaw=gf,this.shake=0,this.reset(ze.spawns[e%2].x,ze.spawns[e%2].y,e%2===0?1:-1)}reset(t,e,i){this.x=t,this.y=e,this.prevX=t,this.prevY=e,this.vx=0,this.vy=0,this.kx=0,this.ky=0,this.facing=i,this.grounded=!0,this.surface=to;for(let s of ze.platforms)Math.abs(s.y-e)<.01&&t>=s.x1&&t<=s.x2&&(this.surface=s);this.jumpsLeft=this.s.airJumps,this.fastfall=!1,this.state="idle",this.sf=0,this.move=null,this.moveName="",this.mf=0,this.hitIds=new Set,this.hitlag=0,this.hitstun=0,this.tumble=!1,this.pendingLaunch=null,this.invuln=0,this.shieldHP=P0,this.upBUsed=!1,this.sideBUsed=!1,this.airdodgeUsed=!1,this.dropTimer=0,this.ledgeRegrab=0,this.ledge=null,this.ledgeIntangUsed=!1,this.grabbing=null,this.grabbedBy=null,this.grabTimer=0,this.tapTimer=0,this.jsTap=!1,this.techWindow=0,this.techCool=0,this.landLag=0,this.helplessLag=20,this.charge=0,this.charging=!1,this.chargeDone=!1,this.chargeBtn="attack",this.counterDmg=0,this.djTimer=0,this.lastHitBy=null,this.lastHitTimer=0,this.noGrav=!1,this.gravMult=1,this.vars={},this.hidden=!1}get height(){return this.s.height}get alive(){return this.state!=="dead"&&this.stocks>0}endHook(){let t=this.move;t&&t.onEnd&&!this.ending&&(this.ending=!0,t.onEnd(this),this.ending=!1)}setState(t){this.state==="attack"&&t!=="attack"&&(this.endHook(),this.move=null,Fc(this.model.rig)),this.state=t,this.sf=0,this.tapTimer=0,this.hidden=!1}update(){if(this.prevX=this.x,this.prevY=this.y,this.flashT>0&&this.flashT--,this.state==="dead"){--this.deadTimer<=0&&this.stocks>0&&this.respawn();return}if(this.hitlag>0){if(this.hitlag--,this.pendingLaunch&&this.input.dirPressed){let t=this.input.dirPressed;t.left&&(this.x-=.06),t.right&&(this.x+=.06),t.up&&(this.y+=.06),t.down&&!this.grounded&&(this.y-=.06)}this.hitlag===0&&this.pendingLaunch&&this.launch();return}this.invuln>0&&this.invuln--,this.dropTimer>0&&this.dropTimer--,this.ledgeRegrab>0&&this.ledgeRegrab--,this.techWindow>0&&this.techWindow--,this.techCool>0&&this.techCool--,this.djTimer>0&&this.djTimer--,this.lastHitTimer>0?this.lastHitTimer--:this.lastHitBy=null,this.state!=="shield"&&this.state!=="shieldstun"&&(this.shieldHP=Math.min(P0,this.shieldHP+.09)),this.sf++,this.animT++,this.fsReady&&this.animT%4===0&&this.battle.effects.sparkle(this.x,this.y+this.height*.5,[16740464,16769136,7405456,7385343,13660415][this.animT/4%5],1,.7),this.noGrav=!1,this.gravMult=1,this.stateStep(),this.physics(),this.collide(),this.checkLedge()}stateStep(){switch(this.state){case"idle":return this.stIdle();case"walk":return this.stWalk();case"dash":return this.stDash();case"run":return this.stRun();case"skid":return this.stSkid();case"turn":return this.stTurn();case"crouch":return this.stCrouch();case"jumpsquat":return this.stJumpsquat();case"land":return this.stLand();case"air":return this.stAir();case"tumble":return this.stAir(!0);case"helpless":return this.stHelpless();case"airdodge":return this.stAirdodge();case"shield":return this.stShield();case"shieldstun":return this.stShieldstun();case"shieldoff":return this.stTimed(7,"idle");case"roll":return this.stRoll();case"spotdodge":return this.stTimed(22,"idle",!0);case"hitstun":return this.stHitstun();case"knockdown":return this.stKnockdown();case"getup":return this.stTimed(26,"idle",!0);case"tech":return this.stTimed(22,"idle",!0);case"ledge":return this.stLedge();case"ledgeclimb":return this.stLedgeClimb();case"grabbing":return this.stGrabbing();case"grabbed":return this.stGrabbed();case"shieldbreak":this.friction();return;case"dizzy":return this.stDizzy();case"respawn":return this.stRespawn();case"attack":return this.updateMove();case"victory":case"frozen":this.friction();return;case"trapped":return this.stTrapped()}}friction(t=1){this.vx=oi(this.vx,0,this.s.traction*t)}drift(t=1){let e=this.s,i=this.input.stick.x;Math.abs(i)>.2?this.vx=oi(this.vx,i*e.airSpeed*t,e.airAccel*Math.max(.3,t)):this.vx=oi(this.vx,0,e.airFriction)}stTimed(t,e,i=!0){i&&this.friction(1.2),this.sf>=t&&this.setState(this.grounded?e:"air")}onPlatform(){return this.grounded&&this.surface&&!this.surface.main}dropCheck(){return this.input.dirPressed.down&&this.onPlatform()?(this.grounded=!1,this.surface=null,this.y-=.04,this.vy=-.02,this.dropTimer=12,this.setState("air"),!0):!1}waitDir(t,e){let i=this.input;return i.buf[t]>7-e&&Math.hypot(i.stick.x,i.stick.y)<.3}groundActions(){let t=this.input;if(t.buf.special&&!this.waitDir("special",2))return t.consume("special"),this.special(),!0;if(t.buf.grab||t.buf.attack&&t.raw.shield)return t.consume("grab"),t.consume("attack"),this.turnToStick(),this.startMove(this.state==="dash"||this.state==="run"?"dashgrab":"grab"),!0;if(t.cBuf||t.buf.smash&&!this.waitDir("smash",3)){let e=t.cBuf?t.cDir:t.stick;return this.chargeBtn=t.cBuf?null:"smash",t.cBuf=0,t.consume("smash"),this.smashAttack(e),!0}if(t.buf.attack&&!this.waitDir("attack",1))return t.consume("attack"),this.chargeBtn="attack",this.groundAttack(),!0;if(t.buf.jump||t.tapJump&&t.dirBuf.up){let e=!t.buf.jump;return t.consume("jump"),t.consumeDir("up"),this.setState("jumpsquat"),this.jsTap=e,!0}return t.raw.shield?(this.setState("shield"),!0):!1}turnToStick(){let t=this.input.stick.x;Math.abs(t)>.5&&(this.facing=ee(t))}groundAttack(){let{x:t,y:e}=this.input.stick;return this.state==="dash"||this.state==="run"?this.startMove("dashattack"):e>.5&&e>=Math.abs(t)*.8?this.startMove("utilt"):e<-.5&&-e>=Math.abs(t)*.8?this.startMove("dtilt"):Math.abs(t)>.4?(this.facing=ee(t),this.startMove("ftilt")):this.startMove("jab1")}smashAttack(t){return t.y>.5&&t.y>=Math.abs(t.x)?this.startMove("usmash"):t.y<-.5&&-t.y>=Math.abs(t.x)?this.startMove("dsmash"):(Math.abs(t.x)>.3&&(this.facing=ee(t.x)),this.startMove("fsmash"))}aerial(t){return t.y>.5&&t.y>=Math.abs(t.x)?this.startMove("uair"):t.y<-.5&&-t.y>=Math.abs(t.x)?this.startMove("dair"):Math.abs(t.x)>.4?this.startMove(ee(t.x)===this.facing?"fair":"bair"):this.startMove("nair")}special(){let{x:t,y:e}=this.input.stick;return this.chargeBtn="special",this.fsReady&&this.def.moves.final?(this.fsReady=!1,Math.abs(t)>.4&&(this.facing=ee(t)),this.startMove("final")):e>.5&&e>=Math.abs(t)*.7?this.startMove("upb"):e<-.5&&-e>=Math.abs(t)?this.startMove("downb"):Math.abs(t)>.4?this.sideBUsed&&!this.grounded?!1:(this.facing=ee(t),this.startMove("sideb")):this.startMove("neutralb")}stIdle(){if(!this.grounded)return this.setState("air");if(this.groundActions()||this.dropCheck())return;let t=this.input.stick.x;if(Math.abs(t)>.25){Math.abs(t)>.75?this.startDash(ee(t)):(this.facing=ee(t),this.setState("walk"));return}if(this.input.stick.y<-.6)return this.setState("crouch");this.friction()}startDash(t){this.facing=t,this.setState("dash"),this.vx=t*this.s.dashSpeed,pt.dash(),this.battle.effects.dust(this.x-t*.3,this.y,3,-t)}stWalk(){if(!this.grounded)return this.setState("air");if(this.groundActions()||this.dropCheck())return;let t=this.input.stick.x;if(Math.abs(t)<.25)return this.setState("idle");if(this.input.stick.y<-.6)return this.setState("crouch");if(Math.abs(t)>.75&&(this.input.dirPressed.left||this.input.dirPressed.right))return this.startDash(ee(t));this.facing=ee(t),this.vx=oi(this.vx,t*this.s.walkSpeed*1.3,.012)}stDash(){if(!this.grounded)return this.setState("air");if(this.groundActions())return;let t=this.input.stick.x;if(ee(t)===-this.facing&&Math.abs(t)>.6)return this.startDash(-this.facing);this.vx=oi(this.vx,this.facing*this.s.dashSpeed,.05),this.sf>=this.s.dashFrames&&(ee(t)===this.facing&&Math.abs(t)>.5?this.setState("run"):this.setState("skid"))}stRun(){if(!this.grounded)return this.setState("air");if(this.groundActions()||this.dropCheck())return;let t=this.input.stick.x;if(this.input.stick.y<-.6)return this.setState("crouch");if(Math.abs(t)<.3)return this.setState("skid");if(ee(t)===-this.facing)return this.setState("turn");this.vx=oi(this.vx,this.facing*this.s.runSpeed,.02),this.animT%16===0&&this.battle.effects.dust(this.x-this.facing*.2,this.y,1,-this.facing)}stSkid(){if(!this.grounded)return this.setState("air");if(this.groundActions())return;let t=this.input.stick.x;if(Math.abs(t)>.75&&(this.input.dirPressed.left||this.input.dirPressed.right))return this.startDash(ee(t));this.friction(1.6),this.sf>=8&&this.setState("idle")}stTurn(){if(!this.grounded)return this.setState("air");if(!this.groundActions()&&(this.friction(2.2),this.sf===1&&this.battle.effects.dust(this.x,this.y,3,this.facing),this.sf===5&&(this.facing=-this.facing),this.sf>=10)){let t=this.input.stick.x;ee(t)===this.facing&&Math.abs(t)>.5?this.setState("run"):this.setState("idle")}}stCrouch(){if(!this.grounded)return this.setState("air");if(!this.groundActions()&&!this.dropCheck()){if(this.input.stick.y>-.5)return this.setState("idle");this.friction(1.5)}}stJumpsquat(){let t=this.input,e=this.s;if(this.friction(.6),!this.grounded)return this.setState("air");if(this.jsTap){if(t.buf.attack&&this.sf<=2)return t.consume("attack"),this.chargeBtn="attack",this.startMove("utilt");if(t.buf.smash)return t.consume("smash"),this.chargeBtn="smash",this.startMove("usmash");if(t.buf.special)return t.consume("special"),this.special();if(t.buf.grab)return t.consume("grab"),this.startMove("grab")}else if(t.buf.special&&t.stick.y>.5)return t.consume("special"),this.special();if(this.sf>=e.jumpsquat){let i=this.jsTap?t.raw.y>.5:t.raw.jump;this.vy=i?e.jumpV:e.hopV;let s=Re(this.vx*.85,-e.airSpeed*1.2,e.airSpeed*1.2);this.vx=s+t.stick.x*e.airSpeed*.35,this.grounded=!1,this.surface=null,this.fastfall=!1,this.setState("air"),pt.jump(),this.battle.effects.dust(this.x,this.y,4,0)}}stLand(){if(this.friction(1.4),!this.grounded)return this.setState("air");this.sf>=this.landLag&&this.setState("idle")}landing(t){this.setState("land"),this.landLag=t}airActions(){let t=this.input;if(t.buf.special&&!this.waitDir("special",2)&&(t.consume("special"),this.special()!==!1))return!0;if(t.cBuf||t.buf.smash&&!this.waitDir("smash",2)){let e=t.cBuf?t.cDir:t.stick;return t.cBuf=0,t.consume("smash"),this.aerial(e),!0}return t.buf.attack||t.buf.grab?(t.consume("attack"),t.consume("grab"),this.aerial(t.stick),!0):t.buf.shield&&!this.airdodgeUsed?(t.consume("shield"),this.startAirdodge(),!0):t.buf.jump&&this.jumpsLeft>0?(t.consume("jump"),this.doubleJump(),!0):(t.tapJump&&t.dirBuf.up&&this.jumpsLeft>0&&this.tapTimer===0&&(t.consumeDir("up"),this.tapTimer=3),this.tapTimer>0&&(this.tapTimer--,this.tapTimer===0)?(this.doubleJump(),!0):!1)}doubleJump(){let t=this.s;this.jumpsLeft--,this.vy=t.djV,this.ky=Math.max(0,this.ky),this.kx*=.5,this.vx=this.input.stick.x*t.airSpeed,this.fastfall=!1,this.djTimer=24,this.setState("air"),pt.djump(),this.battle.effects.ring(this.x,this.y+.1,this.def.color,1.8,14)}fastfallCheck(){this.input.dirPressed.down&&!this.fastfall&&this.vy<=.03&&!this.grounded&&(this.fastfall=!0,this.vy=-this.s.fastFall,this.battle.effects.sparkle(this.x,this.y+this.height*.5,16777215,2,.3))}stAir(t=!1){if(this.grounded)return this.setState("idle");t&&this.updateTech(),!this.airActions()&&(this.drift(),this.fastfallCheck())}stHelpless(){if(this.grounded)return this.landing(this.helplessLag);this.drift(.65),this.fastfallCheck()}startAirdodge(){this.setState("airdodge"),this.airdodgeUsed=!0;let{x:t,y:e}=this.input.stick,i=Math.hypot(t,e);this.fastfall=!1,i>.5?(this.adDir=!0,this.vx=t/i*.3,this.vy=e/i*.3,this.kx=0,this.ky=0):this.adDir=!1,pt.dodge()}stAirdodge(){this.adDir?(this.sf<14&&(this.noGrav=!0,this.vx*=.88,this.vy*=.88),this.sf>=38&&this.setState("air")):(this.drift(.8),this.sf>=30&&this.setState("air")),this.sf%3===0&&this.battle.effects.sparkle(this.x,this.y+this.height*.5,16777215,1,.4)}stShield(){let t=this.input;if(!this.grounded)return this.setState("air");if(this.friction(1.5),this.shieldHP-=.13,this.shieldHP<=0)return this.shieldBreak();if(t.buf.jump||t.tapJump&&t.dirBuf.up){t.consume("jump"),t.consumeDir("up"),this.setState("jumpsquat"),this.jsTap=!1;return}if(t.buf.attack||t.buf.grab)return t.consume("attack"),t.consume("grab"),this.startMove("grab");if(t.buf.special&&t.stick.y>.5)return t.consume("special"),this.special();let e=t.sidePressed();if(e)return t.consumeDir(e<0?"left":"right"),this.startRoll(e);if(t.dirBuf.down){t.consumeDir("down"),this.setState("spotdodge"),pt.dodge();return}!t.raw.shield&&this.sf>=4&&this.setState("shieldoff")}stShieldstun(){this.friction(.8),--this.shieldstun<=0&&this.setState(this.input.raw.shield?"shield":"shieldoff")}shieldBreak(){pt.shieldBreak(),this.battle.effects.hitSpark(this.x,this.y+1,this.color,1.2),this.shieldHP=30,this.setState("shieldbreak"),this.grounded=!1,this.surface=null,this.vy=.24,this.vx=0,this.battle.shakeCam(.4)}stDizzy(){this.friction(),this.dizzyT-=1+this.input.mash*4,this.animT%20===0&&this.battle.effects.sparkle(this.x,this.y+this.height+.2,16772744,1,.3),this.dizzyT<=0&&this.setState("idle")}startRoll(t){this.setState("roll"),this.rollDir=t,pt.dodge()}stRoll(){let t=this.sf;t>=3&&t<=20?this.vx=this.rollDir*this.s.rollSpeed*(t<16?1:.5):this.friction(2),t>=27&&(this.facing=-this.rollDir,this.setState(this.grounded?"idle":"air"))}updateTech(){this.input.pressed.shield&&this.techCool===0&&(this.techWindow=11,this.techCool=40)}stHitstun(){this.updateTech(),this.hitstun--,this.grounded?this.friction(.6):this.hitstun<6&&this.drift(.4),this.hitstun<=0&&(this.grounded?this.setState("idle"):this.setState(this.tumble?"tumble":"air")),!this.grounded&&Math.hypot(this.kx,this.ky)>.18&&this.animT%2===0&&this.battle.effects.smoke(this.x,this.y+this.height*.5)}stKnockdown(){let t=this.input;if(this.friction(2),this.sf>14){if(t.buf.attack)return t.consume("attack"),this.startMove("getupattack");let e=t.sidePressed();if(e)return t.consumeDir(e<0?"left":"right"),this.startRoll(e);(t.dirBuf.up||t.buf.jump||t.buf.shield||this.sf>80)&&(t.consume("jump"),t.consume("shield"),this.setState("getup"))}}checkLedge(){if(this.grounded||this.ledgeRegrab>0)return;let t=this.state,e=t==="air"||t==="helpless"||t==="tumble"||t==="airdodge"&&this.sf>14;if(t==="attack"&&this.move&&this.move.ledgeGrab!==void 0&&this.mf>=this.move.ledgeGrab&&(e=!0),!!e&&!(this.vy+this.ky>.05&&t!=="attack")&&!(this.input.stick.y<-.6))for(let i of ze.ledges){let s=(this.x-i.x)*i.side,r=i.y-this.y;if(s<-.4||s>1.15||r<.45||r>this.height*1.25)continue;let a=this.battle.fighters.find(o=>o!==this&&o.state==="ledge"&&o.ledge===i);if(a){if(a.sf<8)continue;a.setState("air"),a.ledge=null,a.vx=i.side*.08,a.vy=.05,a.ledgeRegrab=40}this.grabLedge(i);return}}grabLedge(t){this.move=null,this.setState("ledge"),this.ledge=t,this.x=t.x+t.side*.32,this.y=t.y-this.height*.84,this.vx=this.vy=this.kx=this.ky=0,this.facing=-t.side,this.jumpsLeft=this.s.airJumps,this.upBUsed=!1,this.sideBUsed=!1,this.airdodgeUsed=!1,this.fastfall=!1,this.ledgeIntangUsed||(this.invuln=36,this.ledgeIntangUsed=!0),this.input.clearAll(),pt.ledge()}stLedge(){let t=this.input,e=this.ledge;if(this.x=e.x+e.side*.32,this.y=e.y-this.height*.84,this.sf<7)return;let i=-e.side,s=t.stick.x;if(t.buf.jump||t.dirBuf.up){t.consume("jump"),t.consumeDir("up"),this.setState("air"),this.ledge=null,this.y=e.y-this.height*.5,this.vy=this.s.jumpV*1.02,this.vx=i*.07,this.ledgeRegrab=20,pt.jump();return}if(t.buf.attack||t.buf.special)return t.consume("attack"),t.consume("special"),this.startClimb("attack");if(t.buf.shield)return t.consume("shield"),this.startClimb("roll");if(ee(s)===i&&Math.abs(s)>.6)return this.startClimb("climb");if(t.dirBuf.down||ee(s)===-i&&Math.abs(s)>.6||this.sf>330){t.consumeDir("down"),this.setState("air"),this.ledge=null,this.x+=e.side*.15,this.ledgeRegrab=24;return}}startClimb(t){this.climbAction=t,this.climbFrom={x:this.x,y:this.y},this.setState("ledgeclimb")}stLedgeClimb(){let t=this.ledge,e=16,i=Math.min(1,this.sf/e),s=t.x-t.side*.55;this.x=this.climbFrom.x+(s-this.climbFrom.x)*i,this.y=this.climbFrom.y+(t.y-this.climbFrom.y)*Math.min(1,i*1.6),this.sf>=e&&(this.x=s,this.y=t.y,this.grounded=!0,this.surface=to,this.ledge=null,this.vx=0,this.vy=0,this.climbAction==="attack"?this.startMove("ledgeattack"):this.climbAction==="roll"?this.startRoll(-t.side):this.setState("idle"))}grabOpponent(t){this.state==="attack"&&(this.move=null,this.setState("grabbing"),this.grabbing=t,this.grabTimer=Math.min(240,80+t.damage*.9),t.move=null,t.setState("grabbed"),t.grabbedBy=this,t.vx=t.vy=t.kx=t.ky=0,t.pendingLaunch=null,t.facing=-this.facing,this.vx=0,pt.grab())}commandGrab(t,e){this.state==="attack"&&(t.grabbing&&t.releaseGrabQuiet(),t.move=null,t.setState("grabbed"),t.grabbedBy=this,t.vx=t.vy=t.kx=t.ky=0,t.pendingLaunch=null,t.facing=-this.facing,this.grabbing=t,pt.grab(),this.startMove(e,!0))}holdVictim(t){let e=this.grabbing;if(!e)return;let i=t||this.def.grabHold;e.x=this.x+this.facing*i[0],e.y=this.y+i[1],e.facing=-this.facing,e.grounded=!1}stGrabbing(){let t=this.grabbing,e=this.input;if(!t||t.state!=="grabbed")return this.grabbing=null,this.setState("idle");if(this.friction(2),this.holdVictim(),this.grabTimer-=1+t.input.mash*5,this.grabTimer<=0)return this.releaseGrab();if(this.sf<6)return;if(e.buf.attack)return e.consume("attack"),this.startMove("pummel",!0);let{x:i,y:s}=e.stick;if(s>.6)return this.startMove("uthrow",!0);if(s<-.6)return this.startMove("dthrow",!0);if(Math.abs(i)>.6)return this.startMove(ee(i)===this.facing?"fthrow":"bthrow",!0);if(e.cBuf){let r=e.cDir;return e.cBuf=0,r.y>.6?this.startMove("uthrow",!0):r.y<-.6?this.startMove("dthrow",!0):this.startMove(ee(r.x)===this.facing?"fthrow":"bthrow",!0)}}releaseGrab(){let t=this.grabbing;this.grabbing=null,t&&t.state==="grabbed"&&(t.grabbedBy=null,t.setState("hitstun"),t.hitstun=18,t.tumble=!1,t.y=this.y,t.grounded=this.grounded,t.surface=this.surface,t.kx=this.facing*.14,t.ky=0,t.grounded||(t.vy=.1)),this.landing(14),this.vx=-this.facing*.08}stGrabbed(){this.input.pressed.shield&&this.techCool===0&&(this.techWindow=11,this.techCool=40);let t=this.grabbedBy;(!t||t.state!=="grabbing"&&!(t.state==="attack"&&t.grabbing===this))&&(this.grabbedBy=null,this.setState("air"))}doThrow(t){let e=this.grabbing;e&&(this.grabbing=null,e.grabbedBy=null,e.setState("hitstun"),this.battle.applyHit(this,e,{dmg:t.dmg,ang:t.ang,bkb:t.bkb,kbg:t.kbg,sfx:"hit",throwHit:!0},e.x,e.y+e.height*.5,this.facing),pt.throwS())}startMove(t,e=!1){let i=this.def.moves[t];return i?(e||this.grabbing&&t!=="pummel"&&(this.grabbing=null),this.state==="attack"&&(this.endHook(),Fc(this.model.rig)),this.state="attack",this.sf=0,this.tapTimer=0,this.move=i,this.moveName=t,this.mf=-1,this.hitIds=new Set,this.charge=0,this.charging=!1,this.chargeDone=!1,this.vars={},this.hidden=!1,i.onStart&&i.onStart(this),this.updateMove(),!0):!1}chargeHeld(){let t=this.chargeBtn;return t?this.input.raw[t]:!1}get chargeRatio(){return this.move&&this.move.charge?this.charge/this.move.charge.max:0}updateMove(){let t=this.move;if(!t)return this.setState(this.grounded?"idle":"air");if(this.charging){if(this.chargeHeld()&&this.charge<t.charge.max){this.charge++,this.moveGravity(t),this.grounded?this.friction():this.drift(.4),this.charge%6===0&&this.battle.effects.sparkle(this.x,this.y+this.height*.6,this.def.color,1,.5),this.charge%12===0&&pt.charge(),t.onCharge&&t.onCharge(this);return}this.charging=!1}this.mf++;let e=this.mf;if(t.charge&&e===t.charge.f&&!this.chargeDone&&(this.chargeDone=!0,this.chargeHeld()&&(this.charging=!0,this.charge=0)),this.moveGravity(t),this.grounded?t.keepVel||this.friction(t.friction??1):t.noDrift||this.drift(t.drift??(t.aerial?1:.6)),t.aerial&&this.fastfallCheck(),t.sfx&&t.sfx[0]===e&&pt[t.sfx[1]]&&pt[t.sfx[1]](t.sfx[2]??.5),t.hold&&this.grabbing?this.holdVictim(t.hold(e,this)):this.grabbing&&(this.moveName==="pummel"||t.throwHit)&&this.holdVictim(),t.pummelAt===e&&this.grabbing){let i=this.grabbing;i.damage=Math.min(999,i.damage+t.pummelDmg),this.stats.dealt+=t.pummelDmg,i.stats.taken+=t.pummelDmg,i.flashT=6,this.battle.effects.hitSpark(i.x,i.y+i.height*.6,this.color,.2),pt.hit(.2),this.hitlag=4,i.hitlag=0}if(t.throwHit&&e===t.throwAt&&this.doThrow(t.throwHit),t.onFrame&&t.onFrame(this,e),!(this.state!=="attack"||this.move!==t)){if(t.next&&so(e,t.nextWin)&&this.input.buf.attack){this.input.consume("attack"),this.startMove(t.next);return}t.iasa&&e>=t.iasa&&this.grounded&&this.groundActionsLite()||e>=t.total&&this.endMove()}}groundActionsLite(){let t=this.input;return t.buf.attack||t.buf.special||t.buf.jump||t.buf.smash||t.raw.shield||Math.abs(t.stick.x)>.7?(this.move=null,this.setState("idle"),this.stIdle(),!0):!1}moveGravity(t){t.noGravity&&so(this.mf,t.noGravity)&&(this.noGrav=!0),t.fall!==void 0&&(this.gravMult=t.fall)}endMove(){let t=this.move;if(this.endHook(),this.moveName==="pummel"&&this.grabbing){this.move=null,this.state="grabbing",this.sf=10,Fc(this.model.rig);return}this.move=null,this.grounded?this.setState(t.endState||"idle"):(this.setState(t.helpless?"helpless":"air"),t.helpless&&(this.helplessLag=t.helplessLag||20))}landDuringMove(t){let e=this.move;if(e.onLand&&e.onLand(this)==="continue"||e.landContinue)return;let i;if(e.aerial){let s=e.acBefore!==void 0&&this.mf<e.acBefore||e.acAfter!==void 0&&this.mf>=e.acAfter;if(i=s?4:e.landLag||8,!s&&e.landHit){this.startMove(e.landHit);return}}else e.helpless?i=e.helplessLag||20:i=e.landLag||10;this.endHook(),this.move=null,this.landing(i),pt.land()}activeHitboxes(){let t=[],e=this.move;if(this.state!=="attack"||!e||!e.hit||this.charging)return t;let i=this.mf;for(let s of e.hit){if(i<s.f[0]||i>s.f[1])continue;let r=s.x,a=s.y;if(s.path){let o=s.f[1]>s.f[0]?(i-s.f[0])/(s.f[1]-s.f[0]):0;r=s.path[0][0]+(s.path[1][0]-s.path[0][0])*o,a=s.path[0][1]+(s.path[1][1]-s.path[0][1])*o}t.push({h:s,x:this.x+r*this.facing,y:this.y+a,r:s.r})}return t}hurtbox(){let t=this.s,e=t.height,i=t.radius;return(this.state==="crouch"||this.state==="attack"&&this.moveName==="dtilt")&&(e*=.65),this.state==="knockdown"&&(e*=.4),{ax:this.x,ay:this.y+i,bx:this.x,by:this.y+e-i,r:i}}isIntangible(){if(this.invuln>0)return!0;let t=this.sf;switch(this.state){case"roll":return t>=3&&t<=18;case"spotdodge":return t>=3&&t<=16;case"airdodge":return t>=2&&t<=(this.adDir?20:24);case"getup":return t<=20;case"tech":return t<=18;case"ledgeclimb":return!0;case"respawn":case"dead":return!0;case"attack":{let e=this.move;return!!(e&&e.intang&&so(this.mf,e.intang))}}return!1}inWindow(t){return this.state==="attack"&&this.move&&this.move[t]&&so(this.mf,this.move[t])}receiveKnockback(t,e,i,s,r){let a=Math.min(20,Math.floor(s*.45+4));if(this.grabbing&&this.releaseGrabQuiet(),this.grabbedBy){let o=this.grabbedBy;this.grabbedBy=null,o.grabbing===this&&(o.grabbing=null)}return this.endHook(),this.move=null,this.setState("hitstun"),this.pendingLaunch={kb:t,ang:e,dir:i},this.hitlag=a,this.hitstun=Math.floor(t*.4),this.tumble=t>=80,this.vx=0,this.vy=0,this.kx=0,this.ky=0,this.fastfall=!1,this.upBUsed=!1,this.sideBUsed=!1,this.airdodgeUsed=!1,this.charging=!1,this.flashT=8,this.lastHitBy=r,this.lastHitTimer=600,a}releaseGrabQuiet(){let t=this.grabbing;this.grabbing=null,t&&t.state==="grabbed"&&(t.grabbedBy=null,t.setState("air"),t.vy=.12)}launch(){let{kb:t,ang:e,dir:i,link:s}=this.pendingLaunch;if(this.pendingLaunch=null,s){this.kx=s.vx+(s.x+s.facing*.35-this.x)*.12,this.ky=Math.max(0,s.vy)+(s.y+1.3-this.y)*.12,this.vy=0,this.ky>.01&&(this.grounded=!1,this.surface=null,this.y+=.02);return}let r=e*Zs,a=Math.cos(r)*i,o=Math.sin(r);if(t>30){let h=this.input.stick.x,d=this.input.stick.y,f=Re(h*-o+d*a,-1,1)*15*Zs,g=Math.cos(f),v=Math.sin(f),m=a*g-o*v,p=a*v+o*g;a=m,o=p}let l=a*t*ro,c=o*t*ro;this.grounded&&(c<0&&(t>70?c=-c*.75:c=0),c>.03||this.tumble?(this.grounded=!1,this.surface=null,this.y+=.02):c=0),this.kx=l,this.ky=c}physics(){let t=this.s,e=this.state;if(!(e==="ledge"||e==="grabbed"||e==="ledgeclimb"||e==="respawn"||e==="dead"||e==="trapped")){if(this.grounded)this.vy=0,this.kx&&(this.kx=oi(this.kx,0,Bc+t.traction*.8)),this.ky=0;else{this.noGrav?this.noGrav:this.fastfall&&this.vy<=0?this.vy=-t.fastFall:this.vy=Math.max(this.vy-t.gravity*this.gravMult,-t.fallSpeed);let i=Math.hypot(this.kx,this.ky);if(i>0){let s=Math.max(0,i-Bc);this.kx*=s/i,this.ky*=s/i}}this.px=this.x,this.py=this.y,this.x+=this.vx+this.kx,this.y+=this.vy+this.ky}}collide(){let t=this.state;if(t==="ledge"||t==="grabbed"||t==="ledgeclimb"||t==="respawn"||t==="dead"||t==="trapped")return;let e=this.px,i=this.py,s=this.battle.stage.activePlatforms;if(this.grounded){let r=this.surface||to;this.y=r.y,(this.x<r.x1||this.x>r.x2)&&(ov.has(t)||t==="attack"&&this.move&&this.move.canLeaveGround?(this.grounded=!1,this.surface=null,t==="attack"||t==="hitstun"||t==="tumble"||(t==="knockdown"?this.setState("air"):t!=="jumpsquat"&&this.setState("air"))):(this.x=Re(this.x,r.x1,r.x2),this.vx=0,this.kx=0))}else{let r=this.y-i;if(r<=0){let a=ze.main;if(i>=a.top-1e-6&&this.y<a.top&&Math.abs(this.x)<=a.half+.08){this.x=Re(this.x,-a.half,a.half),this.land(to,r);return}if(this.dropTimer<=0&&!(this.input.stick.y<-.6&&(t==="air"||t==="tumble")&&this.fastfall)){for(let o of s)if(i>=o.y-1e-6&&this.y<o.y&&this.x>=o.x1-.05&&this.x<=o.x2+.05){this.x=Re(this.x,o.x1,o.x2),this.land(o,r);return}}}this.resolveSolid(e,i)}}resolveSolid(t,e){let i=this.height,s=ze.main;for(let r=0;r<2;r++){let a=!1;for(let o of[.05,.5,.95]){let l=this.y+i*o,c=w0(l);if(c<0||c+L0-Math.abs(this.x)<=0)continue;let d=e+i;if(Math.abs(this.x)<s.bottomHalf+L0&&d<=s.bottom+.25&&o>.5)this.y=s.bottom-i-.01,this.vy>0&&(this.vy=0),this.ky>0&&(this.ky=this.state==="hitstun"?-this.ky*.4:0);else{let u=ee(this.x)||ee(t)||1;this.x=u*(c+L0+.002),ee(this.vx)===-u&&(this.vx=0),ee(this.kx)===-u&&(this.kx=this.state==="hitstun"?-this.kx*.4:0)}a=!0;break}if(!a)break}}land(t,e){let i=this.s;this.grounded=!0,this.surface=t,this.y=t.y,this.vy=0,this.jumpsLeft=i.airJumps,this.fastfall=!1,this.upBUsed=!1,this.sideBUsed=!1,this.airdodgeUsed=!1,this.ledgeIntangUsed=!1,this.djTimer=0;let s=this.state;if(s==="hitstun"||s==="tumble"){if(s==="tumble"||this.tumble){if(this.ky=0,this.techWindow>0){this.techWindow=0,this.kx=0,pt.tech(),this.battle.effects.sparkle(this.x,this.y+.5,16777215,6,.6);let a=this.input.stick.x;Math.abs(a)>.5?this.startRoll(ee(a)):this.setState("tech");return}this.kx*=.5,this.setState("knockdown"),this.battle.effects.dust(this.x,this.y,6,0),pt.land(),this.battle.shakeCam(.08);return}this.ky=0;return}if(this.ky=0,this.kx*=.5,s==="attack")return this.landDuringMove(e);if(s==="shieldbreak"){this.setState("dizzy"),this.dizzyT=200;return}if(s==="helpless"){this.landing(this.helplessLag),pt.land();return}if(s==="airdodge"){this.landing(this.adDir?10:3);return}s!=="grabbed"&&(this.landing(3),pt.land(),e<-.12&&this.battle.effects.dust(this.x,this.y,4,0))}stTrapped(){let t=this.trap;if(!t||!t.by||t.by.state!=="attack"||!t.by.move||!t.by.move.fs)return this.trap=null,this.setState("air");this.x+=(t.x-this.x)*.08,this.y+=(t.y-this.height*.5-this.y)*.08}die(){this.endHook(),this.state="dead",this.move=null,this.deadTimer=80,this.stocks--,this.stats.falls++,this.fsReady&&(this.fsReady=!1,this.battle.app.hud.setFs(this.slot,!1)),this.model.root.visible=!1,this.shieldMesh.visible=!1,this.grabbing=null,this.grabbedBy&&(this.grabbedBy.grabbing=null,this.grabbedBy=null)}respawn(){let t=ze.respawn;this.reset(t.x,t.y,this.slot%2===0?1:-1),this.damage=0,this.state="respawn",this.grounded=!1,this.surface=null,this.model.root.visible=!0,this.model.update(1/60,{vx:0,vy:0,snap:!0})}stRespawn(){let t=this.input,e=ze.respawn;this.x=e.x,this.y=e.y;let i=t.buf.jump||t.buf.attack||t.buf.special||t.buf.shield||Math.abs(t.stick.x)>.5||t.stick.y<-.5;(this.sf>40&&i||this.sf>300)&&(this.setState("air"),this.invuln=120,this.vy=0,this.jumpsLeft=this.s.airJumps)}animate(){let t=this.def.anims,e=this.state,i,s=.3,r=this.sf;switch(e){case"idle":case"respawn":i=t.idle(this.animT),s=.22;break;case"walk":this.phase+=Math.abs(this.vx)*4.2,i=t.walk(this.phase);break;case"dash":case"run":this.phase+=Math.abs(this.vx)*3.2,i=t.run(this.phase),s=.4;break;case"skid":case"turn":i=t.skid(),s=.4;break;case"crouch":i=t.crouch(this.animT),s=.4;break;case"jumpsquat":case"land":i=t.squat(),s=.55;break;case"air":case"tumble":if(e==="tumble"){i=t.tumbleIdle(this.animT),s=.2;break}this.djTimer>0?(i=t.djump(24-this.djTimer),s=.45):i=this.vy>.02?t.jump():t.fall(this.animT),s=this.djTimer>0?.45:.15;break;case"helpless":i=t.helpless(this.animT),s=.2;break;case"hitstun":i=this.tumble?t.tumble(this.animT):t.hurt(),s=this.tumble?.5:.6;break;case"shield":case"shieldstun":case"shieldoff":i=t.shield(),s=.5;break;case"roll":i=t.roll(r,this.rollDir===this.facing),s=.6;break;case"spotdodge":i=t.spotdodge(r),s=.5;break;case"airdodge":i=t.airdodge(r),s=.4;break;case"ledge":i=t.ledge(this.animT),s=.4;break;case"ledgeclimb":i=t.climb(r),s=.5;break;case"knockdown":i=t.knockdown(),s=.4;break;case"getup":case"tech":i=t.getup(r),s=.4;break;case"grabbing":i=t.hold(),s=.4;break;case"grabbed":case"trapped":i=t.grabbed(this.animT),s=.4;break;case"shieldbreak":case"dizzy":i=t.dizzy(this.animT),s=.3;break;case"victory":i=t.victory(r),s=.3;break;case"frozen":i=t.idle(this.animT),s=.2;break;case"attack":{let a=this.move;i=a&&a.anim?mf(a.anim,Math.max(0,this.mf)):t.idle(this.animT),s=a&&a.alpha!==void 0?a.alpha:.55;break}default:i=t.idle(this.animT)}no(this.model.rig,i,s)}render(t,e){let i=this.model;if(this.state==="dead"){i.root.visible=!1,i.shadow&&(i.shadow.visible=!1),this.shieldMesh.visible=!1,this.platMesh.visible=!1,this.trail.update(null,!1);return}i.root.visible=!this.hidden;let s=this.prevX+(this.x-this.prevX)*t,r=this.prevY+(this.y-this.prevY)*t,a=0,o=0;this.hitlag>0&&this.pendingLaunch&&(a=Bt(-.07,.07),o=Bt(-.04,.04)),i.root.position.set(s+a,r+o,0),this.updateShadow(s,r);let l=this.facing*gf;this.visYaw+=(l-this.visYaw)*.35,i.root.rotation.y=this.visYaw;let c=0,h=new gt(1,1,1);this.flashT>0?(c=.7*(this.flashT/8),h.set(16777215)):this.fsReady?(c=.3+.2*Math.sin(this.animT*.3),h.setHSL(this.animT*.01%1,1,.6)):this.state==="attack"&&this.move&&this.move.fs?(c=.25,h.set(this.def.color)):this.charging&&!(this.move&&this.move.noChargeFlash)?(c=.25+.25*Math.sin(this.animT*.6),h.set(16777130)):this.invuln>0&&this.state!=="respawn"&&this.state!=="ledge"?(c=Math.floor(this.animT/3)%2*.5,h.set(16777215)):this.state==="respawn"?(c=.25+.15*Math.sin(this.animT*.2),h.copy(this.color)):this.state==="helpless"?(c=.35,h.set(0)):this.inWindow("counter")||this.inWindow("reflect")?(c=.35,h.set(10479871)):this.inWindow("armor")&&(c=.3,h.set(16765024)),i.setFlash(h,c),i.update(e,{vx:this.vx+this.kx,vy:this.vy+this.ky,air:!this.grounded});let d=this.move,u=d&&d.trail&&this.state==="attack"&&so(this.mf,d.trailF||[0,999])&&!this.charging;if(this.trail.update(u?i.trails[d.trail]:null,u),this.state==="shield"||this.state==="shieldstun"){let f=.35+.75*(this.shieldHP/P0);this.shieldMesh.visible=!0,this.shieldMesh.position.set(s,r+this.height*.52,0),this.shieldMesh.scale.setScalar(f*(this.height/1.8)),this.shieldMesh.material.opacity=.28+.2*(this.state==="shieldstun"?1:0)}else this.shieldMesh.visible=!1;this.state==="respawn"?(this.platMesh.visible=!0,this.platMesh.position.set(s,r-.09,0),this.platMesh.rotation.y+=.05):this.platMesh.visible=!1}updateShadow(t,e){let i=this.model.shadow;if(!i)return;let s=null;Math.abs(t)<=ze.main.half+.1&&e>=-.05&&(s=0);for(let l of this.battle.stage.activePlatforms)t>=l.x1-.1&&t<=l.x2+.1&&e>=l.y-.05&&(s===null||l.y>s)&&(s=l.y);let r=this.state==="dead"||s===null||this.hidden;if(i.visible=!r,r)return;let a=Math.max(0,e-s),o=Math.max(.25,1-a/6);i.position.set(t,s+.012,.05),i.scale.setScalar(o),i.children[0].material.opacity=.75*o}dispose(){let t=this.battle.scene;t.remove(this.model.root);for(let e of this.model.worldObjects)t.remove(e);this.model.shadow&&t.remove(this.model.shadow),this.model.dispose(),this.trail.dispose(),t.remove(this.shieldMesh),t.remove(this.platMesh);for(let e of[this.shieldMesh,this.platMesh])e.geometry.dispose(),e.material.dispose()}}});var vf,Oc,_f=Ye(()=>{Uc();io();ln();vf=["jump","attack","special","shield","smash","grab"],Oc=class{constructor(t,e,i=5){this.b=t,this.f=e,this.level=Re(i,1,9);let s=this.level;this.react=Math.max(2,Math.round(26-s*2.7)),this.defendP=.04+s*.075,this.techP=s*.1,this.diP=s*.1,this.aggro=.35+s*.06,this.q={},this.last=Sn(),this.sx=0,this.sy=0,this.flickQ=null,this.timer=Qi(10,30),this.busy=0,this.ledgeWait=-1,this.techTried=!1,this.jumpCd=0,this.aimAfter=null,this.diSet=!1,this.wander=0}press(t,e=1){this.q[t]={n:e,gap:this.last[t]?1:0}}flick(t,e,i=3){this.flickQ={x:t,y:e,n:i,gap:1}}holding(t){return!!this.q[t]}update(){let t=Sn();this.think();for(let s of vf){let r=this.q[s];if(r){if(r.gap>0){r.gap--;continue}t[s]=!0,--r.n<=0&&delete this.q[s]}}let e=this.sx,i=this.sy;if(this.flickQ){let s=this.flickQ;s.gap>0?(s.gap--,e=0,i=0):(e=s.x,i=s.y,--s.n<=0&&(this.flickQ=null))}return t.x=Re(e,-1,1),t.y=Re(i,-1,1),this.last=t,t}opponent(){let t=null,e=1e9;for(let i of this.b.fighters){if(i===this.f||i.state==="dead"||i.stocks<=0)continue;let s=Math.abs(i.x-this.f.x)+Math.abs(i.y-this.f.y);s<e&&(e=s,t=i)}return t}think(){let t=this.f;if(this.jumpCd>0&&this.jumpCd--,this.b.phase!=="fight"){this.sx=0,this.sy=0;return}let e=t.state,i=this.opponent();if(this.aimAfter){--this.aimAfter.n<=0&&(this.sx=this.aimAfter.x,this.sy=this.aimAfter.y,this.aimAfter=null);return}switch(e!=="hitstun"&&(this.diSet=!1),e!=="hitstun"&&e!=="tumble"&&(this.techTried=!1),e){case"dead":this.sx=0,this.sy=0;return;case"respawn":this.sx=0,this.sy=0,t.sf>50+Qi(0,60)-this.level*5&&this.flick(0,-1,2);return;case"grabbed":case"dizzy":Ee(.1+this.level*.04)&&this.press(vf[Qi(1,2)]),Ee(.15)&&this.flick(Ee(.5)?1:-1,0,1);return;case"grabbing":return this.doThrow(i);case"ledge":return this.doLedge();case"knockdown":if(t.sf>16&&Ee(.1+this.level*.02)){let r=Math.random();r<.35?this.press("attack"):r<.65?this.flick(-ee(t.x)||1,0,2):this.flick(0,1,2)}return;case"hitstun":case"tumble":return this.doHitstun()}if(this.ledgeWait=-1,e==="attack"||e==="airdodge"||e==="roll"||e==="spotdodge"||e==="ledgeclimb"){let r=t.def.id==="illumine"&&t.moveName==="upb"&&t.mf<=7;!t.grounded&&this.offstage()&&!r&&this.steerToLedge();return}if(!t.grounded&&this.offstage())return this.recover();if(e==="helpless"){this.offstage()?this.steerToLedge():this.sx=0;return}if(e==="shield"&&this.holding("shield")){i&&i.state!=="attack"&&Math.abs(i.x-t.x)<1.4&&Ee(.25+this.level*.05)&&(this.q={},this.press("attack"));return}if(this.busy>0){this.busy--,this.edgeSafety();return}if(--this.timer>0){this.edgeSafety();return}if(this.timer=this.react+Qi(0,Math.max(1,10-this.level)),!i){this.sx=Math.abs(t.x)>1.5?-ee(t.x):0;return}if(i.state==="respawn"||i.invuln>30){this.neutralWait(i);return}if(this.defend(i)||t.fsReady&&this.tryFinal(i))return;let s=this.b.ball;if(!(s&&s.life>0&&!t.fsReady&&Math.abs(s.x)<ze.main.half+.5&&this.chaseBall(s,i))){if(this.opOffstage(i))return this.edgeguard(i);t.grounded?this.groundPlay(i):this.airPlay(i),this.edgeSafety()}}tryFinal(t){let e=this.f;if(t.state==="dead"||t.state==="respawn"||t.invuln>0)return!1;let i=t.x-e.x,s=t.y-e.y;return!(e.def.id==="illumine"?Math.hypot(i,s)<4.8:Math.abs(s)<1.8&&Math.abs(i)<14)||!Ee(.5)?!1:(this.sx=ee(i)*.6,this.sy=0,this.press("special"),this.busy=20,!0)}chaseBall(t,e){let i=this.f,s=t.x-i.x,r=t.y-(i.y+i.height*.5),a=Math.abs(e.x-i.x)+Math.abs(e.y-i.y);if(Math.abs(s)+Math.abs(r)>a+3&&!Ee(.3))return!1;let l=ee(s)||i.facing;return this.sy=0,Math.abs(s)<1.5&&Math.abs(r)<1.4?(i.grounded&&r>.7?(this.sx=0,this.sy=1,this.press("attack")):i.grounded?(this.sx=l,this.press("attack")):(this.sx=(l===i.facing,l),this.sy=r>.8?1:r<-.8?-1:0,this.press("attack")),this.after(()=>{this.sy=0},3),this.busy=12,!0):(this.sx=l,r>1.3&&(i.grounded||i.jumpsLeft>0&&i.vy<.02)&&this.jumpCd<=0&&(this.press("jump",i.grounded?8:1),this.jumpCd=16),this.edgeSafety(),this.busy=3,!0)}steerToLedge(){let t=this.f,e=ee(t.x)||1,r=(t.y<-.3?e*(ze.main.half+.45):e*(ze.main.half-1))-t.x;this.sx=Math.abs(r)<.15?0:Math.max(-1,Math.min(1,r*2)),this.sy=0}offstage(){let t=this.f;return Math.abs(t.x)>ze.main.half+.1||t.y<-.4}opOffstage(t){return!t.grounded&&(Math.abs(t.x)>ze.main.half+.4||t.y<-.8)||t.state==="ledge"}edgeSafety(){let t=this.f;t.grounded&&Math.abs(t.x)>ze.main.half-1.1&&ee(this.sx)===ee(t.x)&&(this.sx=0)}neutralWait(t){let e=this.f,i=t.x-e.x;this.sx=Math.abs(i)>4?ee(i)*.5:0,this.sy=0,e.grounded&&Ee(.02)&&this.press("jump")}defend(t){let e=this.f,i=t.x-e.x,s=Math.abs(i),r=t.y-e.y;for(let o of this.b.projectiles){if(o.owner===e)continue;let l=e.x-o.x;if(Math.abs(l)<3.2&&ee(o.vx)===ee(l)&&Math.abs(o.y-(e.y+.9))<1.2&&Ee(this.defendP))return e.def.id==="illumine"&&Ee(.5)?(this.sx=0,this.sy=-1,this.press("special"),this.aimAfter={n:3,x:0,y:0},!0):e.grounded&&Ee(.5)?(this.press("shield",16),!0):(this.press("jump"),!0)}if(t.state!=="attack"||!t.move||!t.move.hit||s>2.8||Math.abs(r)>2.2)return!1;let a=Math.min(...t.move.hit.map(o=>o.f[0]));if(t.mf>a+2||t.move.hit.every(o=>o.type==="grab")||!Ee(this.defendP))return!1;if(e.grounded){let o=Math.random();e.def.counterMove&&o<.15&&this.level>=4?(this.sx=0,this.sy=-1,this.press("special"),this.aimAfter={n:3,x:0,y:0}):o<.65?this.press("shield",Qi(12,24)):o<.8?(this.press("shield",3),this.flick(0,-1,2)):o<.92?(this.press("shield",3),this.flick(-ee(i)||1,0,2)):this.press("jump")}else Ee(.5)&&this.press("shield");return this.busy=6,!0}groundPlay(t){let e=this.f,i=t.x-e.x,s=Math.abs(i),r=t.y-e.y,a=ee(i)||e.facing,o=e.def.id==="illumine",l=o?1.35:1.9,c=t.damage>(o?105:85)-this.level*2;if(this.sy=0,r>1.6&&s<1.4){Ee(.5)?(this.sx=0,this.sy=0,this.press("smash"),this.sy=1,this.busy=20):(this.sx=a*.4,this.press("jump",r>2.5?8:1),this.busy=4);return}if(r>2&&s<4&&Ee(.6)){this.sx=a,this.press("jump",10),this.busy=8;return}if(r<-1.5&&e.onPlatform()&&s<4){this.sx=0,this.flick(0,-1,2),this.busy=4;return}if(s<l&&Math.abs(r)<1.3){this.sx=0;let h=Math.random();if(t.state==="shield"&&h<.5){this.press("grab"),this.busy=20;return}if(c&&h<.55){this.sx=a,this.sy=0,this.press("smash",Qi(1,12)),this.busy=30;return}if(h<.2){this.sx=0,this.press("attack"),this.after(()=>this.press("attack"),7),this.after(()=>this.press("attack"),14),this.busy=22;return}if(h<.45){this.sx=a,this.press("attack"),this.busy=18;return}if(h<.6){this.sx=0,this.sy=-1,this.press("attack"),this.busy=14,this.after(()=>{this.sy=0},3);return}if(h<.72){this.press("grab"),this.busy=20;return}if(h<.85&&r>.3){this.sy=1,this.sx=0,this.press("attack"),this.busy=16,this.after(()=>{this.sy=0},3);return}this.sx=a,this.press("smash",Qi(1,20)),this.busy=30;return}if(o&&e.def.id!=="doros"&&s>5&&Ee(.18)&&Math.abs(r)<1.5){e.facing===a?this.sx=0:this.sx=a*.3,this.press("special",Ee(.4)?Qi(10,50):1),this.busy=30;return}if(e.def.id==="doros"&&e.grounded&&Math.abs(r)<1){if((t.state==="dizzy"||t.state==="shieldbreak"||t.state==="knockdown"&&t.sf<20)&&s<2.2&&s>.8){this.sx=e.facing===a?0:a*.3,this.sy=0,this.press("special"),this.busy=110;return}if(s>2&&s<4.6&&Ee(.2)){this.sx=a,this.sy=0,this.press("special"),this.busy=45;return}if(s>1.6&&s<4&&Ee(.1)){this.sx=0,this.sy=-1,this.press("special"),this.busy=50,this.after(()=>{this.sy=0},3);return}}if(e.def.id==="dragon"&&s>1.2&&s<3.4&&Math.abs(r)<1&&Ee(.22)){this.sx=e.facing===a?0:a*.3,this.sy=0,this.press("special",Qi(15,45)),this.busy=40;return}if(!o&&s>3.2&&s<6.5&&Ee(.08)&&Math.abs(r)<1){this.sx=a,this.press("special"),this.busy=40;return}if(s<4.2&&s>1.6&&Ee(.28*this.aggro)){this.sx=a,this.press("jump"),this.busy=3,this.after(()=>{this.sx=a,this.press("attack")},o?6:8);return}if(s<3.2&&s>1.8&&Ee(.12)){this.sx=a,this.after(()=>this.press("attack"),4),this.busy=20;return}this.sx=s>2.2?a:a*.5,Ee(.03*(10-this.level))&&(this.sx=0)}airPlay(t){let e=this.f,i=t.x-e.x,s=Math.abs(i),r=t.y-e.y,a=ee(i)||e.facing;if(this.sx=a,this.sy=0,s<1.9&&Math.abs(r)<1.8){r<-.8&&s<.9?(this.sx=0,this.sy=-1):r>.8&&s<1?(this.sx=0,this.sy=1):a!==e.facing?this.sx=a:s<.9?this.sx=0:this.sx=a,this.press("attack"),this.after(()=>{this.sy=0},3),this.busy=10;return}r>1.5&&e.jumpsLeft>0&&Ee(.2)&&this.jumpCd<=0&&(this.press("jump"),this.jumpCd=20),r<-1&&e.vy<0&&Ee(.3)&&this.flick(a*.3,-1,2)}edgeguard(t){let e=this.f,i=ee(t.x)||1,s=i*(ze.main.half-1.3);if(!e.grounded){this.sx=ee(s-e.x);return}if(Math.abs(e.x-s)>.5){this.sx=ee(s-e.x);return}if(this.sx=0,t.state==="ledgeclimb"||t.state==="getup"||t.state==="attack"&&t.moveName==="ledgeattack"){Ee(.3+this.level*.05)&&(this.press("shield",10),this.busy=10);return}let r=Math.abs(t.x-e.x),a=t.y-e.y;if(t.state!=="ledge"&&r<2.2&&a>-1.5&&a<1.5&&Ee(.3+this.level*.05)){this.sx=i,this.press("smash",Qi(1,6)),this.busy=30;return}if(e.def.id==="illumine"&&t.state!=="ledge"&&r>3&&Ee(.1)){this.sx=e.facing===i?0:i*.3,this.press("special"),this.busy=30;return}this.level>=6&&t.state!=="ledge"&&t.y>-3&&r<4&&Ee(.05*(this.level-5))&&(this.sx=i,this.press("jump"),this.after(()=>{this.sx=i,this.press("attack")},8),this.busy=30)}recover(){let t=this.f,e=ee(t.x)||1,i=ze.ledges.find(o=>o.side===e);this.sx=-e,this.sy=0;let s=t.vy+t.ky,r=Math.abs(t.x)-ze.main.half;if(s>.04&&t.y>-1)return;let a=t.def.id==="illumine";if(t.jumpsLeft>0&&this.jumpCd<=0&&(t.y<.8||r>2.5)&&(t.y>-4.5||t.upBUsed||a)){this.press("jump"),this.jumpCd=a?16:22;return}if(!t.upBUsed&&(t.y<-1.4||r>3.2)){if(r>(a?5:4.2)&&!t.sideBUsed&&t.y>(a?-2.6:-4.2)&&t.y<1.5){this.sx=-e,this.sy=0,this.press("special");return}if(t.y<-.9||r>4)if(this.sx=-e*.3,this.sy=1,this.press("special"),a){let o=i.x-e*.2,l=i.y+.4,c=o-t.x,h=l-t.y,d=Math.hypot(c,h)||1;if(c/=d,h/=d,d>5.4){h=Math.max(h,.55);let u=Math.hypot(c,h);c/=u,h/=u}this.aimAfter={n:2,x:c,y:h}}else this.after(()=>{this.sx=-e*.8,this.sy=0},3)}}doLedge(){let t=this.f;if(this.sx=0,this.sy=0,this.ledgeWait<0&&(this.ledgeWait=Qi(6,50-this.level*3)),--this.ledgeWait>0)return;let e=-t.ledge.side,i=Math.random();i<.4?this.flick(e,0,3):i<.65?this.press("jump"):i<.85?this.press("attack"):this.press("shield"),this.ledgeWait=60}doHitstun(){let t=this.f;if(t.pendingLaunch&&!this.diSet)if(this.diSet=!0,Ee(this.diP)){let s=-ee(t.x)||1;this.sx=s*.8,this.sy=.6}else this.sx=Bt(-1,1)*.3,this.sy=0;let e=t.vy+t.ky,i=Math.abs(t.x)<=ze.main.half?0:-99;if(!this.techTried&&(t.tumble||t.state==="tumble")&&e<0&&t.y-i<1.2+Math.abs(e)*4&&(this.techTried=!0,Ee(this.techP)&&(this.press("shield"),this.sx=Ee(.5)?Bt(-1,1):0)),t.state==="tumble"){if(this.offstage())return this.recover();Ee(.05)&&this.press("jump")}}doThrow(t){let e=this.f;if(e.sf<8+Qi(0,10))return;let i=ee(e.x)||e.facing,s;t&&t.damage>90&&Math.abs(e.x)>4?s=i===e.facing?[e.facing,0]:[-e.facing,0]:Ee(.3)?s=[0,-1]:Ee(.3)?s=[0,1]:Ee(.3)?this.press("attack"):s=[e.facing,0],s&&this.flick(s[0],s[1],3)}after(t,e){this.b.later(e,t)}}});function qi(n,t,e,i=12){let s=[];for(let a=0;a<=6;a++){let o=-Math.PI/2+a/6*(Math.PI/2);s.push(new vt(Math.max(1e-4,e*Math.cos(o)),-n+e*Math.sin(o)))}for(let a=1;a<=6;a++){let o=a/6*(Math.PI/2);s.push(new vt(Math.max(1e-4,t*Math.cos(o)),t*Math.sin(o)))}return new Hs(s,i)}function as(n){let t=new Set;n.traverse(e=>{e.geometry&&!t.has(e.geometry)&&(t.add(e.geometry),e.geometry.dispose());let i=Array.isArray(e.material)?e.material:e.material?[e.material]:[];for(let s of i)t.has(s)||s.userData.shared||(t.add(s),s.dispose())})}var Hc,ao=Ye(()=>{Ei();Hc=class{constructor({segments:t=16,radial:e=6,segLen:i=.12,radius:s=o=>.05,colors:r,flat:a=.55}){this.n=t+1,this.radial=e,this.segLen=i,this.radius=s,this.flat=a,this.p=[],this.o=[];for(let u=0;u<this.n;u++)this.p.push(new I),this.o.push(new I);let o=this.n*e;this.posArr=new Float32Array(o*3);let l=new Float32Array(o*3),c=new gt;for(let u=0;u<this.n;u++){let f=u/(this.n-1);r(f,c);for(let g=0;g<e;g++){let v=(u*e+g)*3;l[v]=c.r,l[v+1]=c.g,l[v+2]=c.b}}let h=[];for(let u=0;u<this.n-1;u++)for(let f=0;f<e;f++){let g=u*e+f,v=u*e+(f+1)%e,m=g+e,p=v+e;h.push(g,m,v,v,m,p)}let d=new xe;this.attr=new He(this.posArr,3),this.attr.setUsage(Za),d.setAttribute("position",this.attr),d.setAttribute("color",new He(l,3)),d.setIndex(h),this.mesh=new At(d,new Se({vertexColors:!0,side:ke})),this.mesh.frustumCulled=!1,this.inited=!1,this._t=new I,this._n=new I,this._b=new I}reset(t,e){for(let i=0;i<this.n;i++)this.p[i].copy(t).addScaledVector(e,i*this.segLen),this.o[i].copy(this.p[i]);this.inited=!0}simulate(t,e,i=.9){let{p:s,o:r,n:a}=this;this.inited||this.reset(t,new I(0,-1,0)),s[0].copy(t),r[0].copy(t);let o=new I;for(let l=1;l<a;l++){let c=s[l],h=(c.x-r[l].x)*i,d=(c.y-r[l].y)*i,u=(c.z-r[l].z)*i;r[l].copy(c),o.set(0,0,0),e(l,l/(a-1),o),c.x+=h+o.x,c.y+=d+o.y,c.z+=u+o.z}for(let l=0;l<3;l++)for(let c=1;c<a;c++){let h=s[c-1],d=s[c],u=d.x-h.x,f=d.y-h.y,g=d.z-h.z,v=Math.hypot(u,f,g)||1e-6,m=this.segLen/v;d.x=h.x+u*m,d.y=h.y+f*m,d.z=h.z+g*m}this.rebuild()}rebuild(){let{p:t,n:e,radial:i,posArr:s}=this,r=this._t,a=this._n,o=this._b;for(let l=0;l<e;l++){let c=t[Math.max(0,l-1)],h=t[Math.min(e-1,l+1)];r.subVectors(h,c).normalize(),a.set(0,0,1).cross(r),a.lengthSq()<1e-4&&a.set(1,0,0),a.normalize(),o.crossVectors(r,a).normalize();let d=l/(e-1),u=this.radius(d),f=(this.waveAmp||0)*d*Math.sin(d*(this.waveFreq||10)-(this.waveT||0)),g=(this.twist||0)*d,v=Math.cos(g),m=Math.sin(g);for(let p=0;p<i;p++){let b=p/i*Math.PI*2,w=Math.cos(b)*u,_=Math.sin(b)*u*this.flat,E=w*v-_*m+f,S=w*m+_*v,A=(l*i+p)*3;s[A]=t[l].x+a.x*E+o.x*S,s[A+1]=t[l].y+a.y*E+o.y*S,s[A+2]=t[l].z+a.z*E+o.z*S}}this.attr.needsUpdate=!0}}});function Mf(n=0){let t=bf[n%bf.length],e=new zt,i={},s={},r=mi(t.skin,{rough:.78,metal:.04,env:.4,emissive:new gt(t.skin).multiplyScalar(.16)}),a=new gt(t.skin).multiplyScalar(2.2),o=mi(a,{rough:.88,metal:.02,env:.3,emissive:a.clone().multiplyScalar(.16)});o.map=hn(512,8,(L,B,ct)=>{L.fillStyle="#b4b4b4",L.fillRect(0,0,B,ct);let ft=7,Ft=()=>(ft=ft*16807%2147483647)/2147483647;for(let Zt=0;Zt<46;Zt++){let he=40+Ft()*(B-80),Ge=4+Ft()*16,qe=Ft()<.55,je=L.createLinearGradient(he-Ge,0,he+Ge,0),ei=qe?"255,255,255":"40,30,50";je.addColorStop(0,`rgba(${ei},0)`),je.addColorStop(.5,`rgba(${ei},${qe?.52:.36})`),je.addColorStop(1,`rgba(${ei},0)`),L.fillStyle=je,L.fillRect(he-Ge,0,Ge*2,ct)}},{repeat:[1,1]});let l=E0(t.glow),c=(L,B)=>new gt(L).lerp(new gt(16777215),B).getHex(),h=E0({...t.glow,c1:c(t.glow.c1,.55),c2:c(t.glow.c2,.3),c3:t.glow.c3}),d=hi(t.mark,1.25),u=hi(t.eye,1.7),f=hi(t.curl,1.1),g=[r,o],v=g.map(L=>L.emissive.clone()),m=ve("body",e,0,zc,0);i.body=m;let p=ve("hips",m);i.hips=p;let b=ve("torso",p);i.torso=b,N(W(Ce([[.001,-.02],[.08,0],[.07,.1],[.05,.22],[.056,.3],[.08,.37],[.098,.42],[.088,.455],[.045,.49],[.023,.515],[.02,.6],[.001,.62]],20),r),b,0,0,0,0,0,0,[1,1,.78]);for(let L of[-1,1])N(W(new Ct(1,12,8),d),b,L*.038,.43,.064,0,L*.35,L*-.55,[.024,.012,.007]);for(let L of[-1,1])N(W(new Ct(1,10,8),d),b,L*.03,.365,.05,0,L*.4,0,[.008,.009,.005]);let w=ve("head",b,0,.55,0);i.head=w,w.scale.setScalar(.84);let _=[[5e-4,0],[.05,.003],[.09,.024],[.112,.058],[.118,.098],[.119,.135],[.116,.185],[.104,.23],[.076,.264],[5e-4,.28]],E=new xs(_.map(([L,B])=>new vt(L,B))).getPoints(40),S=.94,A=L=>{if(L<=0)return 5e-4;for(let B=1;B<E.length;B++){let ct=E[B-1],ft=E[B];if(L<=ft.y)return ct.x+(ft.x-ct.x)*((L-ct.y)/Math.max(1e-6,ft.y-ct.y))}return 5e-4};N(W(Ce(E.map(L=>[L.x,L.y]),40),r),w,0,0,0,0,0,0,[1,1,S]);let x=1.2,T=.27,C=hn(1024,512,(L,B,ct)=>{L.clearRect(0,0,B,ct);let ft=B/(2*x*.117),Ft=ct/T,Zt=new gt(t.eye),he=(je,ei,wn=1)=>`rgba(${Math.round(Math.min(1,je.r*ei)*255)},${Math.round(Math.min(1,je.g*ei)*255)},${Math.round(Math.min(1,je.b*ei)*255)},${wn})`,Ge=Zt.clone().lerp(new gt(16777215),.74),qe=Zt.clone().lerp(new gt(16179455),.62);for(let je of[-1,1]){let ei=je*.75,wn=.104;L.save(),L.translate((ei+x)/(2*x)*B,(1-wn/T)*ct),L.scale(ft*je,Ft),L.rotate(-.28);let os=L.createRadialGradient(0,0,.01,0,0,.06);os.addColorStop(0,"rgba(12,4,20,0.4)"),os.addColorStop(1,"rgba(12,4,20,0)"),L.fillStyle=os,L.beginPath(),L.arc(0,0,.06,0,Math.PI*2),L.fill();let wi=.047;L.beginPath(),L.moveTo(-wi,.014),L.bezierCurveTo(-wi*.7,-.016,wi*.45,-.05,wi*.9,-.026),L.bezierCurveTo(wi*1.35,0,wi*.5,.042,-wi,.014),L.closePath();let Ti=L.createLinearGradient(-wi*.6,.024,wi*.7,-.026);Ti.addColorStop(0,he(qe,.96)),Ti.addColorStop(.5,he(Ge,.97)),Ti.addColorStop(1,he(Ge,1.06)),L.fillStyle=Ti,L.fill(),L.lineWidth=.0012,L.strokeStyle=he(qe,.8,.6),L.stroke();let Yi=L.createRadialGradient(-wi*.25,-.012,0,-wi*.25,-.012,.012);Yi.addColorStop(0,"rgba(255,255,255,0.8)"),Yi.addColorStop(.5,"rgba(255,255,255,0.35)"),Yi.addColorStop(1,"rgba(255,255,255,0)"),L.save(),L.clip(),L.fillStyle=Yi,L.beginPath(),L.arc(-wi*.25,-.012,.012,0,Math.PI*2),L.fill(),L.restore(),L.restore()}});C.flipY=!1;let D=cn(28,16,(L,B,ct)=>{let ft=-x+L*2*x,Ft=T*(1-B),Zt=A(Ft)*1.012+8e-4;ct.set(Math.sin(ft)*Zt,Ft,Math.cos(ft)*Zt*S)}),H=new Se({map:C,transparent:!0,depthWrite:!1,polygonOffset:!0,polygonOffsetFactor:-2,polygonOffsetUnits:-2});N(W(D,H),w,0,0,0),N(W(new Ct(1,10,6),f),b,0,.548,.026,0,0,0,[.014,.002,.005]);let z=new zt;z.userData.keep=!0,N(z,w,0,0,0);let F=(L,B,ct)=>{let ft=Math.max(0,Math.min(1,(ct-L)/(B-L)));return ft*ft*(3-2*ft)},q=.68,Q=1.2,Y=.115,mt=L=>L<q?0:Math.pow(Math.sin(Math.min(1,(L-q)/.13)*Math.PI/2),.3),nt=(L,B,ct)=>{let ft=B*Q,Ft=Math.sin(ft)/Math.sin(Q),Zt=mt(B)*Math.asin(Math.min(.95,Y/Math.max(.14,.245*Ft))),he=Zt+L*(Math.PI*2-2*Zt),Ge=Math.pow(Math.sin(he),2),qe=Math.cos(he*6)*B*B*B,je=.435-(.33+.03*Ge)*(1-Math.cos(ft))/(1-Math.cos(Q)),ei=(.245+.195*Ge+.34*Math.pow(Math.max(0,-Math.cos(he)),1.5))*Ft+.04*qe+.024*Math.cos(he*14)*Math.pow(B,1.3);ct.set(Math.sin(he)*ei,je+.035*(qe-B*B*B)-.07*Math.max(0,-Math.cos(he))*B*B,Math.cos(he)*ei*.95-.07)};N(W(new Ct(1,20,14),hi(new gt(t.skin).multiplyScalar(.45))),z,0,.21,-.08,0,0,0,[.19,.12,.14]);let lt=cn(72,24,nt);{let L=lt.attributes.position,B=lt.attributes.normal;for(let ct=0;ct<=24;ct++){let ft=ct*73,Ft=ft+72;if(Math.abs(L.getX(ft)-L.getX(Ft))+Math.abs(L.getZ(ft)-L.getZ(Ft))>1e-4)continue;let Zt=new I(B.getX(ft)+B.getX(Ft),B.getY(ft)+B.getY(Ft),B.getZ(ft)+B.getZ(Ft)).normalize();B.setXYZ(ft,Zt.x,Zt.y,Zt.z),B.setXYZ(Ft,Zt.x,Zt.y,Zt.z)}}N(gi(lt,o,h),z,0,0,0);let ut=(L,B,ct)=>{let ft=.2-.3*B,Ft=.19+.07*Math.sin(B*Math.PI/2)+.08*Math.pow(B,2.6),Zt=Math.asin(Math.min(.95,(Y*1.03+Math.max(0,.03-ft)*.55)/Ft)),he=Zt+L*(Math.PI*2-2*Zt),Ge=Math.pow(Math.sin(he),2),qe=Math.cos(he*8),je=.2-(.3+.12*Ge)*B+.045*(qe-1)*B*B*B,ei=.19+.07*Math.sin(B*Math.PI/2)+(.08+.2*Ge+.36*Math.pow(Math.max(0,-Math.cos(he)),1.5))*Math.pow(B,2.2)+.04*qe*B*B+.012*Math.cos(he*16)*B;ct.set(Math.sin(he)*ei,je-.05*Math.max(0,-Math.cos(he))*B,Math.cos(he)*ei*.9-.05)};N(gi(cn(64,16,ut),o,h),z,0,0,0);let Yt=hi(15260872,1),Ut=(L,B,ct=!1)=>N(W(new is(new yn(L,ct),L.length*2,B,5,ct),Yt),z,0,0,0),ie=new I,ne=(L,B,ct,ft=1.012)=>(L(B,ct,ie),new I(ie.x*ft,ie.y,ie.z*ft+.002));{let L=[];for(let ft=0;ft<=24;ft++)L.push(ne(nt,1,1-(1-q)*ft/24));for(let ft=1;ft<=24;ft++)L.push(ne(nt,0,q+(1-q)*ft/24));Ut(L,.0026);for(let ft of[0,1]){let Ft=[];for(let Zt=0;Zt<=16;Zt++)Ft.push(ne(ut,ft,.4+.6*Zt/16));Ut(Ft,.0026)}let B=[],ct=[];for(let ft=0;ft<=96;ft++)B.push(ne(nt,.06+.88*ft/96,1,1.003)),ct.push(ne(ut,ft/96,1,1.003));Ut(B,.0025),Ut(ct,.0025)}{let L=[];for(let Le=0;Le<=160;Le++)for(let Pe=0;Pe<=50;Pe++)nt(Le/160,Pe/50,ie),ie.z>-.05&&L.push(ie.x,ie.y,ie.z);let B=(Le,Pe)=>{let Ri=A(Pe)*S*Math.sqrt(Math.max(0,1-Math.pow(Le/Math.max(.001,A(Pe)),2)));for(let Li=0;Li<L.length;Li+=3)Math.abs(L[Li]-Le)<.014&&Math.abs(L[Li+1]-Pe)<.014&&L[Li+2]>Ri&&(Ri=L[Li+2]);return Ri},ct=[[0,.272],[-.06,.272],[-.12,.258],[-.175,.228],[-.212,.19],[-.22,.155],[-.205,.125],[-.178,.113],[-.152,.126],[-.145,.15],[-.156,.17],[-.172,.166]].map(([Le,Pe])=>[Le*.86,.262+(Pe-.272)*.97]),ft=ct.map(([Le,Pe])=>B(Le,Pe));for(let Le=0;Le<3;Le++)for(let Pe=0;Pe<ft.length;Pe++)ft[Pe]=Math.max(ft[Pe],((ft[Pe-1]??ft[Pe])+(ft[Pe+1]??ft[Pe]))/2);let Ft=ct.map(([Le,Pe],Ri)=>new I(Le,Pe,ft[Ri]+.012)),Zt=new yn(Ft),he=80,Ge=8,qe=Zt.computeFrenetFrames(he,!1),je=[],ei=[],wn=[],os=new gt(t.skin).lerp(new gt(t.glow.c2),.45).lerp(new gt(16777215),.08),wi=new gt(t.curl),Ti=new gt,Yi=new I;for(let Le=0;Le<=he;Le++){let Pe=Le/he;Zt.getPointAt(Pe,Yi);let Ri=.0065+.0055*Math.sin(Math.min(1,Pe*4)*Math.PI/2)-.0055*Pe;Ti.copy(os).lerp(wi,F(.02,.45,Pe));for(let Li=0;Li<=Ge;Li++){let Wn=Li/Ge*Math.PI*2,Ps=Math.cos(Wn)*Ri,$r=Math.sin(Wn)*Ri*.7;je.push(Yi.x+qe.normals[Le].x*Ps+qe.binormals[Le].x*$r,Yi.y+qe.normals[Le].y*Ps+qe.binormals[Le].y*$r,Yi.z+qe.normals[Le].z*Ps+qe.binormals[Le].z*$r),ei.push(Ti.r,Ti.g,Ti.b)}}for(let Le=0;Le<he;Le++)for(let Pe=0;Pe<Ge;Pe++){let Ri=Le*(Ge+1)+Pe,Li=Ri+1,Wn=Ri+Ge+1,Ps=Wn+1;wn.push(Ri,Wn,Li,Li,Wn,Ps)}let Ls=new xe;Ls.setAttribute("position",new ae(je,3)),Ls.setAttribute("color",new ae(ei,3)),Ls.setIndex(wn),N(W(Ls,new Se({vertexColors:!0,side:ke})),z,0,0,0);let js=Ft[Ft.length-1];N(W(new Ct(.02,12,10),f),z,js.x,js.y,js.z+.002)}let de=[[.001,0],[.03,.012],[.052,.07],[.062,.13],[.056,.19],[.034,.25],[.012,.295],[.001,.315]],it=new xs(de.map(([L,B])=>new vt(L,B))).getPoints(24),ht=Ce(it.map(L=>[L.x,L.y]),18),Tt=L=>{for(let B=1;B<it.length;B++)if(L<=it[B].y)return it[B].x;return .001},tt=t.ear.map(L=>new gt(L)),rt=new gt(t.skin).lerp(new gt(t.ear[0]),.12),yt=new Float32Array(ht.attributes.position.count*3),bt=new gt;for(let L=0;L<ht.attributes.position.count;L++){let B=ht.attributes.position.getY(L)/.315;B<.3?bt.copy(rt).lerp(tt[0],F(.2,.3,B)):B<.58?bt.copy(tt[0]).lerp(tt[1],(B-.3)/.28):bt.copy(tt[1]).lerp(tt[2],Math.min(1,(B-.58)/.3)),yt[L*3]=bt.r,yt[L*3+1]=bt.g,yt[L*3+2]=bt.b}ht.setAttribute("color",new He(yt,3));let P=new Be({vertexColors:!0,roughness:.6,metalness:0,emissive:2758688}),G=hi(t.dots,1.1),st=.55,$=.06,_t=.92;for(let L of[-1,1]){let B=L<0?"earR":"earL",ct=ve(B,w,L*.066,.325,.085);s[B]=[.06,0,L*-.37],ct.rotation.set(...s[B]),N(W(new Fe(.014,.026,.08,12),r),ct,0,.025,0);let ft=new zt;N(ft,ct,0,$,0,0,0,0,_t),N(W(ht,P),ft,0,0,0,0,0,0,[1.1,1,st]),[[-.5,.5],[-1,0,1],[-1.5,-.5,.5,1.5]].forEach((Zt,he)=>{for(let Ge of Zt){let qe=Ge*.025,je=.018+he*.03+Math.abs(Ge)*.003,ei=Tt(je);if(Math.abs(qe)>ei*.86)continue;let wn=st*Math.sqrt(ei*ei-qe*qe)+.001;N(W(new Ct(1,8,6),G),ft,qe,je,wn,0,0,Ge*-.12,[.009,.013,.004])}})}let Pt=cn(40,12,(L,B,ct)=>{let ft=L*Math.PI*2,Ft=.05+.205*Math.pow(Math.sin(B*2.1),.85)+.035*Math.cos(ft*5)*B*B,Zt=.03-.5*B+.045*Math.cos(ft*5)*B*B*B;ct.set(Math.sin(ft)*Ft,Zt,Math.cos(ft)*Ft)}),Ht={},kt=[];for(let L of[-1,1]){let B=L<0,ct=ve(B?"armR":"armL",b,L*.092,.445,0);i[B?"armR":"armL"]=ct,N(W(qi(.22,.026,.021,10),r),ct,0,0,0);let ft=ve(B?"foreR":"foreL",ct,0,-.22,0);i[B?"foreR":"foreL"]=ft,N(W(qi(.18,.021,.019,10),r),ft,0,0,0),N(W(new Fe(.023,.054,.17,14,1,!0),o),ft,0,-.085,0);let Ft=new zt;Ft.userData.keep=!0,N(Ft,ft,0,-.16,0,.3,0,L*.5),N(gi(Pt,o,l),Ft,0,0,0),N(W(new Bn(.06,16),hi(t.glow.c2,.9,{side:ke})),Ft,0,-.06,0,Math.PI/2,0,0),kt.push(Ft);let Zt=new se;Zt.position.set(0,-.05,0),ft.add(Zt);let he=new se;he.position.set(0,-.6,0),ft.add(he),Ht[B?"handR":"handL"]=[Zt,he]}let Wt=new zt;Wt.userData.keep=!0,p.add(Wt);let U=(L,B,ct)=>{let ft=L*Math.PI*2,Ft=.055+.35*Math.pow(Math.sin(B*Math.PI/2),.72);Ft*=1+.1*Math.cos(ft*5)*B*B;let Zt=.3-.36*Math.pow(B,1.1)+.055*Math.cos(ft*5)*B*B;ct.set(Math.sin(ft)*Ft,Zt,Math.cos(ft)*Ft*.9)};N(gi(cn(60,12,U),o,l),Wt,0,0,0);let _e=[],ce=new I;for(let L=-36;L<=36;L++)U((L+120)%120/120,.985,ce),_e.push(ce.clone().multiplyScalar(1.004));N(W(new is(new yn(_e,!1),120,.003,5,!1),Yt),Wt,0,0,0);for(let L of[-1,1]){let B=L<0?.93:.07;U(B,.5,ce);let ct=B*Math.PI*2;N(W(new Ct(1,12,8),d),Wt,ce.x*1.02,ce.y+.01,ce.z*1.02,-.9,ct,0,[.03,.017,.008])}let R=1.05,y=cn(64,18,(L,B,ct)=>{let ft=R+L*(Math.PI*2-2*R),Ft=Math.min(L,1-L)*(Math.PI*2-2*R),Zt=1-F(0,1.1,Ft),he=.12+.39*Math.pow(Math.sin(B*2.05),.9)+.03*Math.cos(ft*7)*B*B,Ge=.14-(.82-.34*Zt)*B+.045*Math.cos(ft*7)*B*B*B;ct.set(Math.sin(ft)*he*1.02,Ge,Math.cos(ft)*he*.9-.03-.02*B)});N(gi(y,o,l),Wt,0,0,0);for(let L of[-1,1]){let B=L<0,ct=ve(B?"legR":"legL",p,L*.08,.02,0);i[B?"legR":"legL"]=ct,N(W(Ce([[.001,.06],[.05,.04],[.074,-.02],[.079,-.1],[.068,-.24],[.045,-.37],[.034,-.44],[.001,-.47]],16),r),ct,0,0,0,0,0,0,[1.3,1,1.2]);let ft=ve(B?"shinR":"shinL",ct,0,-.44,0);i[B?"shinR":"shinL"]=ft,N(W(Ce([[.001,.03],[.033,.01],[.038,-.1],[.032,-.22],[.02,-.34],[.012,-.42],[.001,-.48]],14),r),ft,0,0,0,0,0,0,[1.4,1,1.5]);let Ft=new se;ft.add(Ft);let Zt=new se;Zt.position.set(0,-.48,.02),ft.add(Zt),Ht[B?"footR":"footL"]=[Ft,Zt]}let V=new zt;V.userData.keep=!0,V.visible=!1,i.foreL.add(V),V.position.set(0,-.36,0);let J=mi(656656,{rough:.2,metal:.6,env:1.2,emissive:new gt(1705520)}),ot=hi(t.glow.c2,1.4),Et=[];for(let L=0;L<=16;L++){let B=L/16*2-1,ct=B*.52,ft=-.13*(1-B*B)+.05*Math.pow(Math.abs(B),6);Et.push(new I(0,ft,ct))}V.add(new At(new is(new yn(Et),40,.02,6),J)),V.add(N(W(new Fe(.03,.03,.14,8),J),new zt,0,-.13,0,Math.PI/2,0,0));for(let L of[-.52,.52]){let B=W(new le(.028,.12,6),ot);B.position.set(0,.05,L+Math.sign(L)*.05),B.rotation.x=Math.sign(L)*Math.PI/2,V.add(B)}V.add(N(W(new Gi(.035,0),ot),new zt,0,-.15,0));let Z=new Float32Array(9),X=new xe;X.setAttribute("position",new He(Z,3));let et=new ba(X,new Cr({color:new gt(t.glow.line).multiplyScalar(1.3)}));et.frustumCulled=!1,V.add(et);let xt=new zt;xt.add(N(W(new Fe(.012,.012,.6,5),hi(1312796)),new zt,0,-.3,0)),xt.add(N(W(new le(.04,.12,6),ot),new zt,0,-.62,0,Math.PI,0,0)),V.add(xt);let Rt=L=>{let B=.05+L*.32;Z.set([0,.05,-.52,0,B,0,0,.05,.52]),X.attributes.position.needsUpdate=!0,xt.position.y=B};Rt(0),Vn(e);let St=t.wisp.map(L=>new gt(L)),wt=(L,B)=>{L<.14?B.copy(St[0]):L<.3?B.copy(St[0]).lerp(St[1],(L-.14)/.16):L<.5?B.copy(St[1]):L<.64?B.copy(St[1]).lerp(St[2],(L-.5)/.14):B.copy(St[2]).lerp(St[3],Math.min(1,(L-.64)/.12)),B.multiplyScalar(1.05)},It=new zt,Qt=[-1,1].map(L=>{let B=new Hc({segments:24,radial:6,segLen:.06,flat:.3,colors:wt,radius:ft=>.008+.048*F(.14,.5,ft)*(ft<.92?1:1-(ft-.92)/.08*.6)});B.waveAmp=.09,B.waveFreq=16,B.twist=2.2,B.mesh.material=new Se({vertexColors:!0,side:ke}),It.add(B.mesh);let ct=new se;return ct.position.set(L*.3,.1,-.05),w.add(ct),{tube:B,anchor:ct,s:L}}),re=new se;re.position.set(0,.25,.55),m.add(re);let k=Rs(t.shadow,t.ring,1.25),Nt={j:i,base:s,hipY:zc,flare:0},dt=new I,Dt=new I,Ot=0;return{root:e,rig:Nt,trails:Ht,worldObjects:[It],orbPoint:re,shadow:k,height:1.75,headY:2.2,trailColor:n?7334143:16743136,update(L,B){Ot+=L,l.uniforms.time.value=Ot,h.uniforms.time.value=Ot;let ct=Nt.flare;Wt.scale.set(1+ct*.3,1-ct*.18,1+ct*.3);let ft=e.rotation.y,Ft=B.vx*Math.sin(ft);Wt.rotation.x+=(Math.max(-.35,Math.min(.35,-Ft*1.6))+Math.max(-.15,Math.min(.2,B.vy*.8))-Wt.rotation.x)*.15,z.rotation.x+=(Math.max(-.07,Math.min(.07,-Ft*.4))-z.rotation.x)*.12;for(let Zt of kt)Zt.scale.setScalar(1+ct*.2);e.updateMatrixWorld(!0);for(let Zt of Qt)Zt.anchor.getWorldPosition(dt),Zt.tube.waveT=Ot*5+Zt.s,(!Zt.tube.inited||B.snap)&&(Dt.set(Zt.s*.7,-.7,-.1).applyQuaternion(e.quaternion).normalize(),Zt.tube.reset(dt,Dt)),Dt.set(Zt.s,-.25,-.2).applyQuaternion(e.quaternion).normalize(),Zt.tube.simulate(dt,(he,Ge,qe)=>{let je=.0021*(1-Ge*.2);qe.x=Dt.x*je,qe.y=-.0027+Math.sin(Ot*2.3-Ge*6)*9e-4+Ge*.0016,qe.z=Dt.z*je},.84);It.visible=e.visible},setBow(L,B=0,ct=!0){V.visible=L,xt.visible=L&&ct,Rt(B)},setFlash(L,B){g.forEach((ct,ft)=>{ct.emissive.copy(v[ft]),B>0&&ct.emissive.lerp(L,B*.8)}),l.uniforms.flash.value.set(L.r,L.g,L.b,B*.6),h.uniforms.flash.value.copy(l.uniforms.flash.value)},dispose(){It.parent&&It.parent.remove(It),as(e),as(It)}}}var bf,zc,Sf=Ye(()=>{Ei();Js();ao();bf=[{skin:2890806,eye:16754402,mark:16746188,curl:16770802,glow:{c1:11575551,c2:10910975,c3:14965992,line:15255807,bright:1,scale:8},ear:[15235228,16765108,16774360],dots:16757988,wisp:[10112511,16744358,16760992,16773836],shadow:1311775,ring:10112511},{skin:1189426,eye:9434111,mark:6284543,curl:14482431,glow:{c1:1731839,c2:2283728,c3:9075711,line:14745593},ear:[6281471,12124144,16056310],dots:4507903,wisp:[3832831,4187856,12124128,16777215],shadow:200728,ring:4184319}],zc=.9});function As(n){let t=n.idle,e=n.hipY;return{...{idle:s=>{let r=Math.sin(s*.055);return{...t,by:(t.by||0)+r*.018*(n.bob||1),torso:I0(t.torso,[r*.03,0,0]),armR:I0(t.armR,[0,0,-r*.04]),armL:I0(t.armL,[0,0,r*.04])}},walk:s=>{let r=Math.sin(s),a=Math.cos(s);return{legR:[-.55*r,0,-.04],legL:[.55*r,0,.04],shinR:[.1+.7*Math.max(0,a),0,0],shinL:[.1+.7*Math.max(0,-a),0,0],armR:[.4*r,0,-.18],armL:[-.4*r,0,.18],foreR:[-.3,0,0],foreL:[-.3,0,0],torso:[.08,.12*r,0],by:-.03+.03*Math.abs(a),...n.walkExtra||{}}},run:s=>{let r=Math.sin(s),a=Math.cos(s);return{legR:[-.95*r-.2,0,-.04],legL:[.95*r-.2,0,.04],shinR:[.3+1.3*Math.max(0,a),0,0],shinL:[.3+1.3*Math.max(0,-a),0,0],armR:[.8*r,0,-.25],armL:[-.8*r,0,.25],foreR:[-1.2,0,0],foreL:[-1.2,0,0],torso:[.35,.2*r,0],head:[-.2,0,0],by:-.06+.06*Math.abs(a),...n.runExtra?n.runExtra(s):{}}},skid:()=>({torso:[-.3,0,0],legR:[-.8,0,-.1],shinR:[.2,0,0],legL:[.3,0,.1],shinL:[1,0,0],armR:[-.5,0,-.8],armL:[-.5,0,.8],by:-.14}),crouch:s=>({by:-e*.4,torso:[.4,0,0],head:[-.25,0,0],legR:[-1.25,0,-.18],shinR:[2.1,0,0],legL:[-1.25,0,.18],shinL:[2.1,0,0],armR:[-.4,0,-.35],armL:[-.4,0,.35],foreR:[-.6,0,0],foreL:[-.6,0,0]}),squat:()=>({by:-e*.22,torso:[.3,0,0],legR:[-.8,0,-.1],shinR:[1.3,0,0],legL:[-.8,0,.1],shinL:[1.3,0,0],armR:[.3,0,-.4],armL:[.3,0,.4]}),jump:()=>({legR:[-.9,0,-.05],shinR:[1.3,0,0],legL:[.15,0,.05],shinL:[.6,0,0],armR:[-.6,0,-.5],armL:[-.4,0,.6],torso:[-.1,0,0],head:[-.15,0,0]}),fall:s=>({legR:[-.35,0,-.1],shinR:[.5,0,0],legL:[.15,0,.1],shinL:[.35,0,0],armR:[-.3,0,-1+Math.sin(s*.2)*.1],armL:[-.3,0,1-Math.sin(s*.2)*.1],torso:[.05,0,0]}),djump:s=>({body:[Math.min(1,s/20)*Math.PI*2,0,0],legR:[-1.4,0,-.1],shinR:[2,0,0],legL:[-1.4,0,.1],shinL:[2,0,0],armR:[-1.2,0,-.4],armL:[-1.2,0,.4],foreR:[-1,0,0],foreL:[-1,0,0]}),helpless:s=>({body:[.15,0,Math.sin(s*.15)*.15],armR:[-2.6,0,-.5+Math.sin(s*.3)*.3],armL:[-2.6,0,.5-Math.sin(s*.3)*.3],legR:[-.2,0,-.1],shinR:[.6,0,0],legL:[.2,0,.1],shinL:[.3,0,0],head:[-.3,0,0]}),hurt:()=>({torso:[-.45,0,0],head:[-.5,0,0],armR:[-.9,0,-1],armL:[-.9,0,1],legR:[-.5,0,-.1],shinR:[.9,0,0],legL:[.3,0,.1],shinL:[.4,0,0]}),tumble:s=>({body:[-s*.32,0,.3],torso:[-.3,0,0],armR:[-1,0,-1.3],armL:[-1,0,1.3],legR:[-.6,0,-.3],shinR:[.8,0,0],legL:[.3,0,.3],shinL:[.8,0,0]}),tumbleIdle:s=>({body:[-.35,0,Math.sin(s*.1)*.2],torso:[-.2,0,0],armR:[-1.4,0,-1],armL:[-1.4,0,1],legR:[-.4,0,-.2],shinR:[.9,0,0],legL:[.2,0,.2],shinL:[.6,0,0]}),shield:()=>({...t,by:(t.by||0)-.12,torso:[.3,0,0],armR:[-1.1,0,.3],foreR:[-1.3,0,0],armL:[-1.1,0,-.3],foreL:[-1.3,0,0],...n.shieldExtra||{}}),roll:(s,r)=>{let a=Math.min(1,Math.max(0,(s-2)/22));return{body:[(r?1:-1)*a*Math.PI*2,0,0],by:-e*.35*Math.sin(a*Math.PI),legR:[-1.5,0,-.1],shinR:[2.2,0,0],legL:[-1.5,0,.1],shinL:[2.2,0,0],armR:[-1.4,0,.2],armL:[-1.4,0,-.2],foreR:[-1.3,0,0],foreL:[-1.3,0,0],torso:[.8,0,0]}},spotdodge:s=>({by:-.25,torso:[.2,0,.3],head:[.3,0,0],legR:[-.9,0,-.2],shinR:[1.5,0,0],legL:[-.4,0,.2],shinL:[1.2,0,0],armR:[.4,0,-.9],armL:[.4,0,.9]}),airdodge:s=>({body:[.3,Math.min(1,s/18)*Math.PI*2,0],legR:[-1.3,0,-.1],shinR:[1.9,0,0],legL:[-1.3,0,.1],shinL:[1.9,0,0],armR:[-1.3,0,.3],armL:[-1.3,0,-.3],foreR:[-1.4,0,0],foreL:[-1.4,0,0]}),ledge:s=>({bz:.12,armR:[-2.95,0,-.2],armL:[-2.95,0,.2],foreR:[0,0,0],foreL:[0,0,0],torso:[.1,0,0],head:[-.4,0,0],legR:[-.2+Math.sin(s*.08)*.1,0,-.1],shinR:[.4,0,0],legL:[.1-Math.sin(s*.08)*.1,0,.1],shinL:[.3,0,0]}),climb:s=>({by:-e*.25,torso:[.6,0,0],legR:[-1.5,0,-.1],shinR:[1.8,0,0],legL:[-.4,0,.1],shinL:[1.5,0,0],armR:[-1.6,0,-.2],armL:[-1.6,0,.2]}),knockdown:()=>({body:[-1.5,0,0],by:-e+.18,armR:[-2.4,0,-.5],armL:[-2.4,0,.5],legR:[-.1,0,-.1],legL:[.1,0,.1],shinR:[.3,0,0],head:[.3,0,0]}),getup:s=>({by:-e*.3,torso:[.5,0,0],legR:[-1.4,0,-.1],shinR:[2,0,0],legL:[.2,0,.1],shinL:[1.9,0,0],armR:[-.4,0,-.5],armL:[-.4,0,.5]}),hold:()=>({...t,armR:[-1.35,0,.05],foreR:[-.3,0,0],armL:[-1.35,0,-.05],foreL:[-.3,0,0],torso:[.15,0,0],...n.holdExtra||{}}),grabbed:s=>({torso:[-.3,0,Math.sin(s*.5)*.1],head:[-.3,0,0],armR:[-.7,0,-.9+Math.sin(s*.7)*.3],armL:[-.7,0,.9-Math.sin(s*.7)*.3],legR:[-.4,0,-.1],shinR:[.8,0,0],legL:[.2,0,.1],shinL:[.5,0,0]}),dizzy:s=>({torso:[.25,0,Math.sin(s*.08)*.25],head:[.35,Math.sin(s*.12)*.4,0],armR:[.2,0,-.15],armL:[.2,0,.15],legR:[-.1,0,-.1],shinR:[.4,0,0],legL:[.1,0,.1],shinL:[.4,0,0],by:-.08}),victory:s=>t},...n.override||{}}}var I0,oo=Ye(()=>{I0=(n=[0,0,0],t=[0,0,0])=>[n[0]+t[0],n[1]+t[1],n[2]+t[2]]});function Ef(n=16766048,t=16777215){let e=new zt,i=new Se({color:new gt(n).multiplyScalar(1.6),transparent:!0,opacity:.9,blending:Xe,depthWrite:!1,side:ke}),s=new At(new ti(1.9,.32,10,40,Math.PI),i);s.rotation.z=-Math.PI/2;let r=new At(new ti(1.9,.12,8,40,Math.PI),new Se({color:t,transparent:!0,blending:Xe,depthWrite:!1}));r.rotation.z=-Math.PI/2;let a=new Si(new yi({map:Xi(),color:n,transparent:!0,opacity:.8,blending:Xe,depthWrite:!1}));return a.scale.set(6,6,1),e.add(a,s,r),e}function wf(n){return{illumine:"\u30A8\u30BF\u30FC\u30CA\u30EB\u30FB\u30A8\u30AF\u30EA\u30D7\u30B9",dullahan:"\u30BD\u30FC\u30E9\u30FC\u30FB\u30B8\u30E3\u30C3\u30B8\u30E1\u30F3\u30C8",dragon:"\u30C9\u30E9\u30B4\u30F3\u30FB\u30A4\u30F3\u30D5\u30A7\u30EB\u30CE",doros:"\u9B54\u7363\u30C9\u30ED\u30B9"}[n.id]||"\u6700\u5F8C\u306E\u5207\u308A\u3075\u3060"}var Gc,Vc,D0=Ye(()=>{Ei();Qa();ln();rs();Gc=class{constructor(t){this.b=t,this.x=Bt(-5,5),this.y=15,this.vx=0,this.vy=-.05,this.r=.55,this.hp=40,this.life=1320,this.t=0,this.flash=0,this.target={x:Bt(-7,7),y:Bt(2,7)},this.dead=!1;let e=new zt;this.mat=new ai({uniforms:{time:{value:0},flash:{value:0}},vertexShader:"varying vec3 vN; varying vec3 vP; void main(){ vN = normalize(normalMatrix*normal); vP = position; gl_Position = projectionMatrix*modelViewMatrix*vec4(position,1.0); }",fragmentShader:`
        varying vec3 vN; varying vec3 vP; uniform float time; uniform float flash;
        vec3 hue(float h){ return clamp(abs(mod(h*6.0+vec3(0.0,4.0,2.0),6.0)-3.0)-1.0,0.0,1.0); }
        void main(){
          float a = atan(vP.z, vP.x) + vP.y*2.5 + time*2.0;
          vec3 c = hue(fract(a/6.2831 + time*0.1));
          float band = smoothstep(0.08,0.0,abs(vP.y)) + smoothstep(0.08,0.0,abs(vP.x));
          c = mix(c, vec3(1.0), clamp(band,0.0,1.0)*0.9);
          float rim = pow(1.0 - abs(vN.z), 2.0);
          c += rim*0.6 + flash;
          gl_FragColor = vec4(c*1.3, 1.0);
          #include <colorspace_fragment>
        }`}),this.core=new At(new Ct(this.r,28,20),this.mat);let i=new Si(new yi({map:Xi(),color:16771488,transparent:!0,opacity:.8,blending:Xe,depthWrite:!1}));i.scale.setScalar(3.2);let s=new Si(new yi({map:Tc(),color:16777215,transparent:!0,opacity:.7,blending:Xe,depthWrite:!1}));s.scale.setScalar(2.4),this.star=s,e.add(i,s,this.core),this.mesh=e,t.scene.add(e),this.px=this.x,this.py=this.y}update(){if(this.t++,this.px=this.x,this.py=this.y,this.life--,this.flash>0&&(this.flash-=.1),this.life<0)this.vy=Math.min(.2,this.vy+.008),this.vx*=.97,this.y>20&&this.remove();else{(this.t%100===0||Math.hypot(this.target.x-this.x,this.target.y-this.y)<.6)&&(this.target={x:Bt(-8,8),y:Bt(1.8,8.5)});let t=Re(this.target.x-this.x,-1,1)*.003,e=Re(this.target.y-this.y,-1,1)*.003;this.vx=Re((this.vx+t)*.985,-.08,.08),this.vy=Re((this.vy+e)*.985,-.08,.08)}this.x+=this.vx,this.y+=this.vy+Math.sin(this.t*.07)*.01,this.x=Re(this.x,-14,14),this.t%3===0&&this.b.effects.sparkle(this.x,this.y,[16740464,16769136,7405456,7385343,13660415][this.t%5],1,.6)}hit(t,e){return this.hp-=t,this.flash=1,this.vx=e*.12,this.vy=.05,this.target={x:this.x+e*3,y:Re(this.y+1,2,8)},this.b.effects.hitSpark(this.x,this.y,16769136,.4,e),pt.hit(.3),pt.star(),this.hp<=0}render(t){let e=this.px+(this.x-this.px)*t,i=this.py+(this.y-this.py)*t;this.mesh.position.set(e,i,.4),this.mat.uniforms.time.value=this.t/60,this.mat.uniforms.flash.value=Math.max(0,this.flash),this.core.rotation.y=this.t*.03,this.star.material.rotation=this.t*.02}remove(){this.dead||(this.dead=!0,this.b.scene.remove(this.mesh),this.mesh.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()}))}},Vc=class{constructor(t,e,i){this.b=t;let s=new ai({transparent:!0,depthWrite:!1,side:ke,uniforms:{time:{value:0},fade:{value:1}},vertexShader:"varying vec3 vN; varying vec3 vV; void main(){ vec4 mv = modelViewMatrix*vec4(position,1.0); vV = -mv.xyz; vN = normalMatrix*normal; gl_Position = projectionMatrix*mv; }",fragmentShader:`
        varying vec3 vN; varying vec3 vV; uniform float time; uniform float fade;
        void main(){
          float f = 1.0 - abs(dot(normalize(vN), normalize(vV)));
          vec3 core = vec3(0.04,0.0,0.09);
          vec3 rim = mix(vec3(0.6,0.2,1.0), vec3(1.0,0.4,0.85), 0.5+0.5*sin(time*3.0));
          vec3 c = mix(core, rim*1.6, pow(f, 2.2));
          gl_FragColor = vec4(c, (0.72 + 0.28*f) * fade);
          #include <colorspace_fragment>
        }`});this.mat=s,this.mesh=new At(new Ct(1,40,28),s),this.mesh.position.set(e,i,0),this.mesh.renderOrder=8,this.mesh.scale.setScalar(.1),t.scene.add(this.mesh),this.t=0}setRadius(t){this.mesh.scale.setScalar(t)}update(){this.t++,this.mat.uniforms.time.value=this.t/60}remove(){this.b.scene.remove(this.mesh),this.mesh.geometry.dispose(),this.mat.dispose()}}});var Ae,fe,tn,lo,lv,U0,Tf=Ye(()=>{Sf();oo();ln();rs();D0();Ae=(n,t,e,i,s,r,a,o,l,c={})=>({f:[n,t],x:e,y:i,r:s,dmg:r,ang:a,bkb:o,kbg:l,...c}),fe={armR:[.18,0,-.74],foreR:[-.1,0,.1],armL:[.18,0,.74],foreL:[-.1,0,-.1],legR:[.02,0,-.04],legL:[-.6,0,-.1],shinL:[1.1,0,-.2],torso:[.12,0,.03],head:[-.03,0,.1],by:.02},tn={legR:[-.35,0,-.1],shinR:[.6,0,0],legL:[.15,0,.1],shinL:[.4,0,0],armR:[-.3,0,-.9],armL:[-.3,0,.9],torso:[.05,0,0]},lo={legR:[-1.2,0,-.1],shinR:[1.8,0,0],legL:[-1,0,.1],shinL:[1.6,0,0]},lv={jab1:{total:18,next:"jab2",nextWin:[5,17],trail:"handR",trailF:[2,6],sfx:[2,"whoosh",.2],hit:[Ae(3,4,.75,1.1,.42,2.5,75,6,22)],anim:[[0,fe],[2,{...fe,armR:[-.6,0,-.6],foreR:[-1.4,0,0],torso:[.1,-.3,0]}],[4,{...fe,armR:[-1.55,0,-.1],foreR:[-.05,0,0],torso:[.15,.35,0]}],[12,{...fe,armR:[-1.4,0,-.1],foreR:[-.2,0,0],torso:[.12,.3,0]}],[18,fe]]},jab2:{total:18,next:"jab3",nextWin:[5,17],trail:"handL",trailF:[2,6],sfx:[2,"whoosh",.2],hit:[Ae(3,4,.8,1,.42,2.5,75,6,22)],anim:[[0,{...fe,armR:[-1.4,0,-.1],torso:[.12,.3,0]}],[4,{...fe,armL:[-1.55,0,.1],foreL:[-.05,0,0],torso:[.15,-.35,0]}],[12,{...fe,armL:[-1.4,0,.1],torso:[.12,-.3,0]}],[18,fe]]},jab3:{total:30,trail:"handR",trailF:[3,9],sfx:[4,"whoosh",.5],hit:[Ae(5,7,.95,1.05,.62,4.5,40,45,70)],onFrame(n,t){t===5&&n.battle.effects.ring(n.x+n.facing*1,n.y+1.05,13660415,1.6)},anim:[[0,fe],[3,{...fe,armR:[-.5,0,-.4],armL:[-.5,0,.4],foreR:[-1.5,0,0],foreL:[-1.5,0,0],torso:[-.1,0,0],flare:.2}],[6,{...fe,armR:[-1.5,0,.15],armL:[-1.5,0,-.15],foreR:[0,0,0],foreL:[0,0,0],torso:[.25,0,0],bz:.12,flare:.5}],[18,{...fe,armR:[-1.4,0,.1],armL:[-1.4,0,-.1],torso:[.2,0,0]}],[30,fe]]},ftilt:{total:27,trail:"footR",trailF:[5,10],sfx:[5,"whoosh",.4],hit:[Ae(6,8,1.05,.9,.48,8,36,28,100),Ae(6,8,.5,.9,.4,8,36,28,100)],anim:[[0,fe],[4,{...fe,legR:[.4,0,-.1],shinR:[1.2,0,0],torso:[.1,-.3,0],armR:[.2,0,-.8],armL:[.2,0,.8]}],[7,{legR:[-1.55,0,-.1],shinR:[.05,0,0],torso:[-.35,.25,0],legL:[.15,0,.05],shinL:[.25,0,0],armR:[.4,0,-1.1],armL:[.3,0,1.1],head:[-.1,0,0],flare:.3}],[14,{legR:[-1.45,0,-.1],shinR:[.2,0,0],torso:[-.3,.2,0],armR:[.4,0,-1],armL:[.3,0,1]}],[27,fe]]},utilt:{total:28,trail:"handR",trailF:[5,12],sfx:[5,"whoosh",.4],hit:[Ae(6,10,0,0,.55,7,96,38,100,{path:[[.75,1.55],[-.6,1.7]]}),Ae(6,10,0,0,.5,7,96,38,100,{path:[[.5,2.25],[-.4,2.35]]})],anim:[[0,fe],[4,{...fe,torso:[.35,0,0],head:[.4,0,0],armR:[.4,0,-.4],armL:[.4,0,.4],by:-.1,earR:[.8,0,0],earL:[.8,0,0]}],[8,{torso:[-.3,0,0],head:[-.5,0,0],armR:[-2.9,0,-.2],foreR:[0,0,0],armL:[-2.9,0,.2],foreL:[0,0,0],earR:[-1.2,0,0],earL:[-1.2,0,0],by:.05}],[14,{torso:[-.25,0,0],head:[-.4,0,0],armR:[-2.8,0,-.3],armL:[-2.8,0,.3],earR:[-1,0,0],earL:[-1,0,0]}],[28,fe]]},dtilt:{total:20,trail:"footR",trailF:[4,8],sfx:[4,"whoosh",.3],hit:[Ae(5,7,1.05,.25,.45,6,78,45,45),Ae(5,7,.5,.25,.4,6,78,45,45)],anim:[[0,{by:-.3,torso:[.4,0,0],legR:[-1.2,0,-.18],shinR:[2,0,0],legL:[-1.2,0,.18],shinL:[2,0,0]}],[4,{by:-.33,torso:[.5,0,0],legR:[-1.45,0,-.2],shinR:[.2,0,0],legL:[-.9,0,.15],shinL:[2,0,0],armR:[-.3,0,-.6],armL:[-.3,0,.6]}],[12,{by:-.33,torso:[.5,0,0],legR:[-1.4,0,-.2],shinR:[.3,0,0],legL:[-.9,0,.15],shinL:[2,0,0]}],[20,{by:-.3,torso:[.4,0,0],legR:[-1.2,0,-.18],shinR:[2,0,0],legL:[-1.2,0,.18],shinL:[2,0,0]}]]},dashattack:{total:34,keepVel:!0,trail:"handR",trailF:[3,16],sfx:[3,"whoosh",.6],hit:[Ae(5,8,.7,.85,.62,9,55,55,70),Ae(9,16,.7,.85,.55,6,60,40,50)],onStart(n){n.vx=n.facing*.2},onFrame(n,t){t<=15?n.vx=oi(n.vx,n.facing*.15,.01):n.friction(2.2),t%3===0&&t<16&&n.battle.effects.sparkle(n.x-n.facing*.3,n.y+.6,13929727,1,.3)},anim:[[0,fe],[3,{body:[.45,0,0],armR:[-1.5,0,-.7],armL:[-1.5,0,.7],foreR:[0,0,0],foreL:[0,0,0],legR:[.4,0,-.05],shinR:[.9,0,0],legL:[.25,0,.05],shinL:[.5,0,0],flare:.5,head:[-.3,0,0]}],[16,{body:[.4,0,0],armR:[-1.4,0,-.6],armL:[-1.4,0,.6],legR:[.3,0,0],shinR:[.8,0,0],legL:[.2,0,0],shinL:[.5,0,0],flare:.4}],[34,fe]]},fsmash:{total:50,smash:!0,charge:{f:6,max:60},trail:"handR",trailF:[12,17],sfx:[12,"whoosh",.8],hit:[Ae(13,16,1.4,1,.72,15,38,34,102),Ae(13,16,.7,1,.5,13,38,34,100)],onFrame(n,t){if(t===13){let e=n.battle.effects;e.ring(n.x+n.facing*1.4,n.y+1,11820287,2.6,18),e.sparkle(n.x+n.facing*1.5,n.y+1,16751856,6,.6)}},anim:[[0,fe],[5,{torso:[-.2,-.7,0],armR:[.9,0,-.6],foreR:[-1.2,0,0],armL:[-.9,0,.5],foreL:[-.3,0,0],legR:[.5,0,-.1],shinR:[.5,0,0],legL:[-.5,0,.1],shinL:[.4,0,0],by:-.1,flare:.2}],[11,{torso:[-.25,-.8,0],armR:[1,0,-.6],foreR:[-1.3,0,0],armL:[-1,0,.5],legR:[.55,0,-.1],shinR:[.5,0,0],legL:[-.55,0,.1],shinL:[.45,0,0],by:-.12}],[13,{torso:[.35,.6,0],armR:[-1.6,0,-.05],foreR:[0,0,0],armL:[.7,0,.5],foreL:[-.2,0,0],legR:[.6,0,-.1],shinR:[.4,0,0],legL:[-.7,0,.1],shinL:[.2,0,0],by:-.12,bz:.25,flare:.45}],[26,{torso:[.3,.5,0],armR:[-1.5,0,-.05],armL:[.6,0,.5],legR:[.5,0,-.1],legL:[-.6,0,.1],by:-.1,bz:.2}],[50,fe]]},usmash:{total:46,smash:!0,charge:{f:5,max:60},trail:"handR",trailF:[10,16],sfx:[10,"whoosh",.8],hit:[Ae(11,16,.2,2.15,.8,14,88,38,100),Ae(11,16,.3,1.25,.55,12,85,38,100)],onFrame(n,t){t>=11&&t<=16&&n.battle.effects.sparkle(n.x,n.y+1.2+(t-11)*.3,t%2?16751856:16773296,2,.4)},anim:[[0,fe],[4,{by:-.3,torso:[.35,0,0],armR:[.5,0,-.3],armL:[.5,0,.3],legR:[-.7,0,-.1],shinR:[1.3,0,0],legL:[-.7,0,.1],shinL:[1.3,0,0],earR:[.6,0,0],earL:[.6,0,0]}],[11,{by:.12,torso:[-.25,0,0],head:[-.4,0,0],armR:[-3,0,-.15],foreR:[0,0,0],armL:[-3,0,.15],foreL:[0,0,0],legR:[.1,0,-.05],legL:[.1,0,.05],earR:[-.9,0,0],earL:[-.9,0,0],flare:.35}],[22,{by:.08,torso:[-.2,0,0],armR:[-2.9,0,-.2],armL:[-2.9,0,.2],earR:[-.7,0,0],earL:[-.7,0,0]}],[46,fe]]},dsmash:{total:44,smash:!0,charge:{f:5,max:60},alpha:.85,sfx:[8,"whoosh",.8],hit:[Ae(9,11,1.1,.35,.55,12,32,34,96,{away:!0}),Ae(9,11,-1.1,.35,.55,12,32,34,96,{away:!0}),Ae(12,13,.6,.35,.5,10,32,30,90,{away:!0}),Ae(12,13,-.6,.35,.5,10,32,30,90,{away:!0})],onFrame(n,t){t===9&&n.battle.effects.ring(n.x,n.y+.3,11820287,3,16)},anim:(()=>{let n={by:-.28,torso:[.3,0,0],armR:[.2,0,-1.2],armL:[.2,0,1.2],legR:[-.8,0,-.3],shinR:[1.4,0,0],legL:[-.8,0,.3],shinL:[1.4,0,0],flare:.3},t={...n,armR:[0,0,-1.5],armL:[0,0,1.5],flare:1.1};return[[0,fe],[5,n],[9,{...t,body:[0,0,0]}],[13,{...t,body:[0,Math.PI*2,0]}],[22,{...n,body:[0,Math.PI*2,0],flare:.6}],[44,{...fe,body:[0,Math.PI*2,0]}]]})()},nair:{total:36,aerial:!0,landLag:7,acBefore:3,acAfter:26,alpha:.85,sfx:[4,"whoosh",.5],hit:[Ae(4,7,0,.85,1,9,45,28,88,{away:!0}),Ae(8,18,0,.85,.95,5,45,20,70,{away:!0})],anim:(()=>{let n={armR:[0,0,-1.4],armL:[0,0,1.4],legR:[-.5,0,-.3],shinR:[.8,0,0],legL:[-.5,0,.3],shinL:[.8,0,0],flare:1};return[[0,tn],[3,{...n,body:[0,0,0]}],[11,{...n,body:[0,Math.PI*2,0]}],[18,{...n,body:[0,Math.PI*4,0],flare:.7}],[36,{...tn,body:[0,Math.PI*4,0]}]]})()},fair:{total:34,aerial:!0,landLag:10,acBefore:4,acAfter:24,trail:"handR",trailF:[7,12],sfx:[7,"whoosh",.6],hit:[Ae(8,11,0,0,.62,11,40,30,96,{path:[[.9,1.75],[1.15,.45]]})],anim:[[0,tn],[5,{...lo,armR:[-2.9,0,-.3],foreR:[-.2,0,0],torso:[-.3,.35,0],armL:[.3,0,.8]}],[8,{...lo,armR:[-2.7,0,-.3],torso:[-.3,.35,0],armL:[.3,0,.8]}],[11,{legR:[-.8,0,0],shinR:[1.2,0,0],legL:[.3,0,0],shinL:[.8,0,0],armR:[-.5,0,-.1],foreR:[0,0,0],torso:[.45,.35,0],armL:[.5,0,.8]}],[20,{legR:[-.7,0,0],shinR:[1.1,0,0],armR:[-.6,0,-.1],torso:[.4,.3,0],armL:[.5,0,.8]}],[34,tn]]},bair:{total:36,aerial:!0,landLag:11,acBefore:4,acAfter:26,trail:"footL",trailF:[6,11],sfx:[6,"whoosh",.6],hit:[Ae(7,9,-1.05,.85,.62,13,145,32,100),Ae(10,14,-.9,.85,.5,8,145,20,80)],anim:[[0,tn],[5,{legL:[-.6,0,.1],shinL:[1.6,0,0],legR:[-.6,0,-.1],shinR:[1.3,0,0],torso:[.2,-.3,0],head:[.2,-.4,0],armR:[-.4,0,-.8],armL:[-.4,0,.8]}],[8,{legL:[1.45,0,.05],shinL:[.05,0,0],legR:[-.8,0,-.1],shinR:[1.3,0,0],torso:[.45,-.35,0],head:[-.1,-.6,0],armR:[-.8,0,-.6],armL:[-.8,0,.6]}],[16,{legL:[1.3,0,.05],shinL:[.2,0,0],legR:[-.7,0,-.1],shinR:[1.2,0,0],torso:[.4,-.3,0],armR:[-.7,0,-.6],armL:[-.7,0,.6]}],[36,tn]]},uair:{total:30,aerial:!0,landLag:8,acBefore:3,acAfter:22,trail:"handR",trailF:[5,11],sfx:[5,"whoosh",.5],hit:[Ae(6,10,0,0,.6,9,85,32,96,{path:[[.75,1.75],[-.7,1.85]]}),Ae(6,10,0,0,.55,9,85,32,96,{path:[[.45,2.35],[-.45,2.35]]})],anim:[[0,tn],[4,{...lo,torso:[.3,0,0],armR:[.4,0,-.5],armL:[.4,0,.5],earR:[.8,0,0],earL:[.8,0,0]}],[8,{...lo,body:[-.4,0,0],torso:[-.3,0,0],head:[-.5,0,0],armR:[-3,0,-.2],foreR:[0,0,0],armL:[-3,0,.2],foreL:[0,0,0],earR:[-1.3,0,0],earL:[-1.3,0,0]}],[16,{...lo,body:[-.3,0,0],armR:[-2.8,0,-.3],armL:[-2.8,0,.3],earR:[-1,0,0],earL:[-1,0,0]}],[30,tn]]},dair:{total:44,aerial:!0,landLag:16,acBefore:3,acAfter:34,trail:"footR",trailF:[11,16],sfx:[11,"whoosh",.7],hit:[Ae(12,15,.05,-.1,.55,12,270,28,82),Ae(16,22,0,.05,.5,7,60,20,70)],onFrame(n,t){t<11&&(n.gravMult=.35)},anim:[[0,tn],[8,{legR:[-1.4,0,-.1],shinR:[2,0,0],legL:[-1.4,0,.1],shinL:[2,0,0],armR:[-2.6,0,-.4],armL:[-2.6,0,.4],torso:[-.1,0,0],by:.15}],[12,{legR:[.15,0,-.03],shinR:[0,0,0],legL:[.15,0,.03],shinL:[0,0,0],armR:[-2.8,0,-.6],armL:[-2.8,0,.6],torso:[-.2,0,0],by:-.1,flare:.5}],[22,{legR:[.1,0,-.03],legL:[.1,0,.03],armR:[-2.7,0,-.6],armL:[-2.7,0,.6],flare:.4}],[44,tn]]},neutralb:{total:34,charge:{f:8,max:70},fall:.5,landContinue:!0,onStart(n){n.model.setBow(!0,.15)},onCharge(n){let t=n.charge/70;if(n.model.setBow(!0,.35+t*.65),n.charge%5===0){let e=n.model.orbPoint.getWorldPosition(n.battle.tmpV);n.battle.effects.sparkle(e.x,e.y,t>.95?16777215:11820287,1,.25)}},onFrame(n,t){if(t<8&&n.model.setBow(!0,.15+t*.03),t===10){let e=n.charge/70;n.battle.spawnProjectile(n,{x:n.x+n.facing*.8,y:n.y+1.12,vx:n.facing*(.32+.16*e),vy:0,r:.16+.14*e,dmg:5+11*e,ang:38,bkb:22+28*e,kbg:62,life:60,color:11820287,kind:"arrow"}),n.model.setBow(!0,0,!1),pt.whoosh(.4+e*.6),pt.orb()}t===28&&n.model.setBow(!1)},onEnd(n){n.model.setBow(!1)},anim:[[0,fe],[6,{armL:[-1.5,0,.05],foreL:[0,0,0],armR:[-1.45,0,.3],foreR:[-1.5,0,0],torso:[.08,-.55,0],head:[0,.4,0],legR:[-.3,0,-.1],legL:[.3,0,.1],shinL:[.3,0,0]}],[9,{armL:[-1.5,0,.05],foreL:[0,0,0],armR:[-1.4,0,.45],foreR:[-2.1,0,0],torso:[.08,-.6,0],head:[0,.45,0],legR:[-.3,0,-.1],legL:[.3,0,.1],shinL:[.3,0,0]}],[11,{armL:[-1.55,0,.05],foreL:[0,0,0],armR:[-1.1,0,-.7],foreR:[-.3,0,0],torso:[.12,-.5,0],head:[0,.4,0],legR:[-.3,0,-.1],legL:[.3,0,.1],flare:.3}],[22,{armL:[-1.45,0,.1],armR:[-.9,0,-.7],torso:[.1,-.4,0]}],[34,fe]]},sideb:{total:40,keepVel:!0,noDrift:!0,noGravity:[0,22],canLeaveGround:!0,ledgeGrab:8,landContinue:!0,trail:"handR",trailF:[7,20],hit:[Ae(7,18,.5,.85,.62,9,42,50,62)],onStart(n){n.grounded||(n.sideBUsed=!0),n.vy=0},onFrame(n,t){t<7?(n.vx=oi(n.vx,0,.02),n.grounded||(n.vy=.005)):t<=20?(n.vx=n.facing*.34,n.vy=0,t===7&&pt.whoosh(.9),n.battle.effects.sparkle(n.x-n.facing*.4,n.y+.8,t%2?16751856:16773296,1,.3)):n.vx*=.86},anim:[[0,fe],[4,{body:[-.3,0,0],armR:[.6,0,-.4],armL:[.6,0,.4],legR:[-.8,0,0],shinR:[1.3,0,0],legL:[-.6,0,0],shinL:[1.2,0,0]}],[7,{body:[1.25,0,0],armR:[-2.9,0,-.15],foreR:[0,0,0],armL:[-2.9,0,.15],foreL:[0,0,0],legR:[.2,0,-.05],legL:[.2,0,.05],flare:.2,head:[-.9,0,0]}],[20,{body:[1.2,0,0],armR:[-2.9,0,-.15],armL:[-2.9,0,.15],legR:[.2,0,-.05],legL:[.2,0,.05],head:[-.9,0,0]}],[32,tn]]},upb:{total:38,helpless:!0,helplessLag:22,intang:[6,16],noGravity:[0,24],noDrift:!0,keepVel:!0,ledgeGrab:16,hit:[Ae(16,17,0,.9,.95,7,80,55,60,{away:!0})],onStart(n){n.upBUsed=!0,n.vx*=.3,n.vy=0},onFrame(n,t){let e=n.battle.effects;if(t<6&&(n.vx*=.8,n.vy=.01),t===6){let{x:i,y:s}=n.input.stick,r=Math.hypot(i,s),a=0,o=1;r>.3&&(a=i/r,o=s/r),n.grounded&&o<0&&(o=0,a=a?ee(a):n.facing),n.vars.dir=[a,o],Math.abs(a)>.2&&(n.facing=ee(a)),n.hidden=!0,pt.warp(),e.ring(n.x,n.y+.9,13660415,2.2,14),e.sparkle(n.x,n.y+.9,16751856,8,.6)}if(t>=7&&t<=14){let[i,s]=n.vars.dir;n.vx=i*.7,n.vy=s*.7,s>.1&&n.grounded&&(n.grounded=!1,n.surface=null,n.y+=.02),n.hidden=!0,e.spawn({x:n.x,y:n.y+.9,life:14,size:.7,size1:.1,color:11820287})}if(t===15){let[i]=n.vars.dir;n.vx=i*.06,n.vy=.02,n.hidden=!1,e.ring(n.x,n.y+.9,16751856,2.4,14),e.sparkle(n.x,n.y+.9,16773296,8,.7)}t>15&&(n.vx*=.95)},anim:[[0,fe],[5,{armR:[-1.2,0,.6],foreR:[-1.5,0,0],armL:[-1.2,0,-.6],foreL:[-1.5,0,0],legR:[-.6,0,0],shinR:[1.2,0,0],legL:[-.6,0,0],shinL:[1.2,0,0],body:[0,0,0]}],[14,{armR:[-1.2,0,.6],armL:[-1.2,0,-.6],body:[0,0,0]}],[16,{armR:[-.5,0,-1.3],armL:[-.5,0,1.3],foreR:[0,0,0],foreL:[0,0,0],flare:.9,body:[0,0,0]}],[38,tn]]},downb:{total:32,reflect:[3,22],fall:.35,landContinue:!0,alpha:.7,hit:[Ae(3,4,0,.85,1,5,80,55,35,{away:!0})],onStart(n){n.grounded||(n.vy=Math.max(n.vy,0))},onFrame(n,t){t>=3&&t<=22&&t%3===0&&n.battle.effects.ring(n.x,n.y+.9,10479871,2.3,10),t===3&&pt.reflect()},anim:[[0,fe],[3,{armR:[0,0,-1.6],armL:[0,0,1.6],foreR:[0,0,0],foreL:[0,0,0],flare:.9,head:[-.2,0,0],torso:[-.1,0,0]}],[22,{armR:[0,0,-1.5],armL:[0,0,1.5],flare:.7}],[32,fe]]},final:{total:150,fs:!0,intang:[0,150],noGravity:[0,150],noDrift:!0,keepVel:!0,alpha:.35,onStart(n){n.vx=0,n.vy=0,n.battle.startCine(n,48)},onFrame(n,t){let e=n.battle,i=e.effects;n.vx=0,t<48?(n.vy=t<30?.03:0,n.grounded&&(n.grounded=!1,n.surface=null,n.y+=.03),t%2===0&&i.sparkle(n.x,n.y+.9,t%4?13660415:16773296,2,1.2)):n.vy=0;let s=n.x,r=n.y+.9;t===48&&(n.vars.sphere=e.addFx(new Vc(e,s,r)),pt.warp(),e.shakeCam(.3));let a=n.vars.sphere;if(a){if(t>=48&&t<=66){let o=.5+(t-48)/18*6;a.setRadius(o),e.fsTrap(n,s,r,o)}t>66&&t<130&&t%7===0&&(e.fsDamage(n,3),i.ring(s,r,16751856,5,12)),t===130&&(e.fsLaunch(n,{dmg:10,ang:55,bkb:110,kbg:105}),i.koBlast(s,r,13660415),i.ring(s,r,16777215,12,30),e.shakeCam(.7),pt.fsBoom()),t>130&&a.setRadius(Math.max(.01,a.mesh.scale.x*.7)),t===140&&(e.removeFx(a),n.vars.sphere=null)}},onEnd(n){n.vars.sphere&&(n.battle.removeFx(n.vars.sphere),n.vars.sphere=null),n.battle.fsRelease(n)},anim:[[0,fe],[20,{body:[-.2,0,0],armR:[-2.8,0,-.5],armL:[-2.8,0,.5],foreR:[0,0,0],foreL:[0,0,0],legR:[.1,0,-.05],legL:[.1,0,.05],head:[-.4,0,0],earR:[-.6,0,0],earL:[-.6,0,0],flare:1.2}],[48,{armR:[0,0,-1.6],armL:[0,0,1.6],foreR:[0,0,0],foreL:[0,0,0],legR:[-.3,0,-.1],legL:[-.3,0,.1],shinR:[.5,0,0],shinL:[.5,0,0],head:[-.2,0,0],flare:1.4}],[130,{armR:[0,0,-1.5],armL:[0,0,1.5],flare:1.3}],[150,tn]]},grab:{total:30,hit:[Ae(6,7,.75,1,.45,0,0,0,0,{type:"grab"})],anim:[[0,fe],[6,{armR:[-1.5,0,.1],foreR:[0,0,0],armL:[-1.5,0,-.1],foreL:[0,0,0],torso:[.25,0,0],bz:.1}],[14,{armR:[-1.4,0,.1],armL:[-1.4,0,-.1],torso:[.2,0,0]}],[30,fe]]},dashgrab:{total:36,keepVel:!0,hit:[Ae(8,9,.95,1,.5,0,0,0,0,{type:"grab"})],onFrame(n){n.friction(1.2)},anim:[[0,fe],[8,{armR:[-1.5,0,.1],foreR:[0,0,0],armL:[-1.5,0,-.1],foreL:[0,0,0],torso:[.35,0,0],bz:.15}],[20,{armR:[-1.4,0,.1],armL:[-1.4,0,-.1],torso:[.3,0,0]}],[36,fe]]},pummel:{total:16,pummelAt:5,pummelDmg:1.5,anim:[[0,{armR:[-1.35,0,.05],armL:[-1.35,0,-.05],torso:[.15,0,0]}],[5,{armR:[-1.35,0,.05],armL:[-1.35,0,-.05],torso:[.3,0,0],head:[.4,0,0],earR:[1,0,0],earL:[1,0,0]}],[16,{armR:[-1.35,0,.05],armL:[-1.35,0,-.05],torso:[.15,0,0]}]]},fthrow:{total:30,throwAt:10,throwHit:{dmg:8,ang:40,bkb:65,kbg:65},hold:n=>[.75+Math.max(0,n-6)*.08,.15],anim:[[0,{armR:[-1.35,0,.05],armL:[-1.35,0,-.05]}],[6,{armR:[-.8,0,.1],foreR:[-1.4,0,0],armL:[-.8,0,-.1],foreL:[-1.4,0,0],torso:[-.1,0,0]}],[10,{armR:[-1.6,0,-.1],foreR:[0,0,0],armL:[-1.6,0,.1],foreL:[0,0,0],torso:[.3,0,0],bz:.15,flare:.4}],[30,fe]]},bthrow:{total:34,throwAt:14,throwHit:{dmg:10,ang:140,bkb:55,kbg:85},hold:n=>{let t=Math.min(1,n/14);return[.8*Math.cos(Math.PI*t),.25+.6*Math.sin(Math.PI*t)]},anim:[[0,{armR:[-1.35,0,.05],armL:[-1.35,0,-.05]}],[14,{body:[0,Math.PI,0],armR:[-2.2,0,-.3],armL:[-2.2,0,.3],flare:.8}],[22,{body:[0,Math.PI*2,0],armR:[-1.4,0,-.3],armL:[-1.4,0,.3]}],[34,{...fe,body:[0,Math.PI*2,0]}]]},uthrow:{total:36,throwAt:12,throwHit:{dmg:8,ang:90,bkb:75,kbg:72},hold:n=>[.5-n*.03,.2+n*.13],anim:[[0,{armR:[-1.35,0,.05],armL:[-1.35,0,-.05]}],[12,{armR:[-3,0,-.1],foreR:[0,0,0],armL:[-3,0,.1],foreL:[0,0,0],by:.1,earR:[-1,0,0],earL:[-1,0,0]}],[36,fe]]},dthrow:{total:36,throwAt:14,throwHit:{dmg:6,ang:75,bkb:55,kbg:45},hold:n=>[.75,Math.max(0,.15-n*.02)],onFrame(n,t){t===14&&n.battle.effects.dust(n.x+n.facing*.7,n.y,6,0)},anim:[[0,{armR:[-1.35,0,.05],armL:[-1.35,0,-.05]}],[8,{by:.2,legR:[-1.2,0,-.1],shinR:[1.6,0,0],armR:[-2.5,0,-.5],armL:[-2.5,0,.5]}],[14,{by:-.1,legR:[-.6,0,-.1],shinR:[.2,0,0],torso:[.3,0,0],armR:[-.5,0,-.8],armL:[-.5,0,.8]}],[36,fe]]},getupattack:{total:30,intang:[0,9],alpha:.8,hit:[Ae(8,10,1,.4,.6,7,40,60,50,{away:!0}),Ae(8,10,-1,.4,.6,7,40,60,50,{away:!0})],anim:[[0,{by:-.5,torso:[.4,0,0]}],[8,{by:-.3,body:[0,0,0],legR:[-1.4,0,-.5],armR:[0,0,-1.4],armL:[0,0,1.4],flare:1}],[14,{by:-.3,body:[0,Math.PI*2,0],legR:[-1.4,0,-.5],flare:.8}],[30,{...fe,body:[0,Math.PI*2,0]}]]},ledgeattack:{total:34,intang:[0,10],trail:"footR",trailF:[8,14],hit:[Ae(10,13,1,.5,.65,8,40,60,50)],anim:[[0,{by:-.3,torso:[.5,0,0]}],[10,{legR:[-1.55,0,-.1],shinR:[.1,0,0],torso:[-.3,.2,0],armR:[.4,0,-1.1],armL:[.3,0,1.1]}],[18,{legR:[-1.4,0,-.1],torso:[-.2,0,0]}],[34,fe]]}},U0={id:"illumine",name:"\u30A4\u30EB\u30DF\u30CD",en:"ILLUMINE",title:"\u5BB5\u95C7\u306E\u86FE\u59EB",color:12938239,css:"#c56bff",desc:"\u5149\u308B\u88CF\u5730\u306E\u8863\u3092\u307E\u3068\u3044\u3001\u7A7A\u4E2D\u30B8\u30E3\u30F3\u30D72\u56DE\u3068\u30EF\u30FC\u30D7\u3067\u81EA\u5728\u306B\u821E\u3046\u8EFD\u91CF\u7D1A\u306E\u9B54\u6CD5\u30D5\u30A1\u30A4\u30BF\u30FC\u3002",specials:["\u30B7\u30E3\u30C9\u30A6\u30A2\u30ED\u30FC\uFF08\u6F06\u9ED2\u306E\u5F13\u30FB\u305F\u3081\u6483\u3061\uFF09","\u30A6\u30A3\u30B9\u30D7\u30C0\u30C3\u30B7\u30E5\uFF08\u7A81\u9032\uFF09","\u30E0\u30FC\u30F3\u30EF\u30FC\u30D7\uFF08\u77AC\u9593\u79FB\u52D5\uFF09","\u30A8\u30AF\u30EA\u30D7\u30B9\u30F4\u30A7\u30FC\u30EB\uFF08\u53CD\u5C04\uFF09"],stats:{weight:82,height:1.75,radius:.36,walkSpeed:.085,dashSpeed:.175,dashFrames:10,runSpeed:.16,traction:.009,airSpeed:.105,airAccel:.009,airFriction:.0025,gravity:.0078,fallSpeed:.145,fastFall:.23,jumpV:.216,hopV:.136,djV:.2,airJumps:2,jumpsquat:3,rollSpeed:.14},grabHold:[.75,.15],buildModel:Mf,anims:As({idle:fe,hipY:zc,bob:1.6,runExtra:n=>({armR:[.9,0,-.35],armL:[.9,0,.35],foreR:[-.3,0,0],foreL:[-.3,0,0],torso:[.45,0,0],flare:.25}),override:{victory:n=>{let t=n*.05;return{body:[0,Math.min(1,n/40)*Math.PI*2,0],armR:[-2.6,0,-.6+Math.sin(t)*.1],armL:[.2,0,.5],foreR:[-.3,0,0],legR:[-.2,0,-.1],legL:[.3,0,.2],shinL:[.8,0,0],torso:[-.1,0,.1],head:[-.2,0,.15],flare:.3+Math.sin(t*2)*.1,by:.12+Math.sin(t)*.05}}}}),moves:lv}});function Af(n=0){let t=Rf[n%Rf.length],e=new zt,i={},s={},r=Gn(t.silver,{rough:.33,metal:.8,env:1}),a=Gn(t.gold,{rough:.34,metal:.78,env:1}),o=a.clone();o.side=ke;let l=mi(t.navy,{rough:.7,metal:.2,env:.4,side:Ze}),c=mi(t.navy,{rough:.7,metal:.2,env:.4}),h=Gn(t.blade,{rough:.12,metal:1,env:1.3}),d=new Be({color:1316638,roughness:.3,metalness:.6,envMapIntensity:.6,side:ke}),u=new Be({map:df(...t.plume),roughness:.8,metalness:0,envMapIntensity:.25,side:ke,color:10132122}),f=hf(t.goldHex,t.ink),g=new Be({map:f,metalness:.6,roughness:.45,envMapIntensity:.45,emissive:2892806}),v=new Be({map:uf(t.goldHex,t.ink),metalness:.6,roughness:.4,envMapIntensity:.9,emissive:3813384}),m=hi(t.eye,1.15),p=Gn(t.gem,{rough:.1,metal:.3,env:1.4,emissive:new gt(t.gem).multiplyScalar(.25)}),b=r.clone();b.flatShading=!0;let w=[b,r,a,o,g,v,h],_=w.map(Z=>Z.emissive.clone()),E=ve("body",e,0,Wc,0);i.body=E;let S=ve("hips",E);i.hips=S;let A=ve("torso",S);i.torso=A;let x=new zt;x.scale.set(.74,1,.76),S.add(x),N(W(new Ct(.15,20,14),c),x,0,.14,0,0,0,0,[.9,.5,.75]),N(gi(Ce([[.215,.18],[.225,.2],[.225,.27],[.215,.29]],28),r,l),x,0,0,0,0,0,0,[1,1,.82]),N(W(new ti(.222,.016,8,32),a),x,0,.29,0,Math.PI/2,0,0,[1,.82,1]);let T=(Z,X,et,xt)=>{let Rt=gi(Ce([[.22,.18],[.255,.1],[.3,.02],[.33,-.03-et]],20,Z,X),r,l);Rt.scale.set(1,1,.84),xt.add(Rt);let St=W(new ti(.33,.015,6,20,X),a);St.rotation.set(Math.PI/2,0,-Z+Math.PI/2-X),St.position.y=-.03-et,St.scale.set(1,.84,1),xt.add(St)};T(Math.PI*.2,Math.PI*.55,.12,x),T(Math.PI*.78,Math.PI*.44,.08,x),T(Math.PI*1.25,Math.PI*.42,.04,x),T(Math.PI*1.7,Math.PI*.46,-.13,x);let C=new zt;N(C,x,-.09,.14,.215,.12,-.3,0,1.05);let D=new ci;D.moveTo(0,.1),D.lineTo(.065,.06),D.lineTo(.06,-.05),D.lineTo(0,-.13),D.lineTo(-.06,-.05),D.lineTo(-.065,.06),D.lineTo(0,.1),N(W(new zi(D,{depth:.02,bevelEnabled:!0,bevelSize:.008,bevelThickness:.008,bevelSegments:2}),a),C,0,-.02,.012),N(W(new Ct(.03,14,10),p),C,0,0,.045,0,0,0,[1,.8,.6]),N(W(new Fe(.13,.14,.14,20,1,!0),c),A,0,.3,0),N(gi(Ce([[.165,.27],[.15,.32],[.162,.385]],24),r,l),A,0,0,.01,0,0,0,[1,1,.8]),N(gi(Ce([[.12,.35],[.18,.39],[.275,.47],[.32,.56],[.295,.635],[.2,.685],[.14,.7]],32),r,l),A,0,0,.02,0,0,0,[.84,1,.72]),N(W(new ti(.152,.024,8,28),a),A,0,.69,.03,Math.PI/2+.22,0,0,[1,.8,1]);for(let Z=0;Z<4;Z++){let X=.64-Z*.075,et=[.25,.3,.29,.25][Z],xt=W(new le(.036,.11,4),a);N(xt,A,0,X,.02+et*.78+.01,.35,0,0,[1,1,.6])}N(W(new Ne(.045,.3,.03),a),A,0,.5,.02+.3*.78-.005,-.05),N(W(new Fe(.07,.08,.1,12),c),A,0,.72,0);for(let Z of[-1,1]){let X=new zt;N(X,A,Z*.315,.63,0,0,0,Z*-.3,.9),N(gi(new Ct(.2,24,16,0,Math.PI*2,0,Math.PI*.6),r,l),X,0,0,0,0,0,0,[1.12,.88,1.08]),N(W(new ti(.2*Math.sin(Math.PI*.6)*1.12,.034,8,28,Math.PI*1.3),a),X,0,.2*Math.cos(Math.PI*.6)*.88,0,Math.PI/2,0,Z>0?-Math.PI*.65:Math.PI*.35,[1,.98,1.1]);let et=W(new le(.075,.4,10),a);N(et,X,Z*.15,.2,.02,0,0,Z*-.5);let xt=W(new le(.06,.24,10),a);N(xt,X,Z*.22,.03,-.09,-.5,0,Z*-1.15),N(W(new le(.058,.22,10),a),X,Z*.2,.05,.11,.6,0,Z*-1.05)}let z=new zt;N(z,A,0,.31,-.27,-.08,Math.PI,0,.92);let F=new Bn(.36,48),q=F.attributes.position;for(let Z=0;Z<q.count;Z++){let X=Math.hypot(q.getX(Z),q.getY(Z))/.36;q.setZ(Z,.07*(1-X*X))}F.computeVertexNormals(),N(W(F,v),z,0,0,0),N(W(new Ct(.5,32,10,0,Math.PI*2,0,.37),a),z,0,0,-.43,Math.PI/2,0,0),N(W(new ti(.385,.055,12,48),r),z,0,0,0,0,0,0,[1,1,.45]),N(W(new Bn(.39,32),c),z,0,0,-.03,0,Math.PI,0);let Q=ve("head",A,0,.7,0);i.head=Q;let Y=new zt;N(Y,Q,0,.02,.02,0,0,0,[.84,.74,.84]),N(gi(Ce([[.155,.18],[.152,.23],[.135,.29],[.095,.335],[.045,.358],[0,.364]],28),r,l),Y,0,0,0,0,0,0,[.96,1,1.05]);let mt=cn(40,8,(Z,X,et)=>{let xt=-.03+.215*X,Rt=Math.PI*(.05+.2*Math.pow(X,.8)),St=Rt+Z*(Math.PI*2-2*Rt),wt=.158-.03*Math.pow(1-X,2)+.03*Math.pow(1-X,5);et.set(-Math.sin(St)*wt,xt,Math.cos(St)*wt)});N(gi(mt,r,l),Y,0,0,0,0,0,0,[.96,1,1.05]),N(W(new ti(.16,.014,6,30,Math.PI*1.86),a),Y,0,-.03,0,Math.PI/2,0,Math.PI*.57,[.96,1.05,1]),N(W(new Ct(.128,18,14),hi(656904)),Y,0,.11,0),N(W(new Ct(.03,14,10),m),Y,0,.138,.112,0,0,0,[1.9,.8,.5]),N(W(new Ct(.016,10,8),hi(16764992,1.3)),Y,0,.133,.126,0,0,0,[1.3,.5,.5]);let nt=hn(64,64,Z=>{let X=Z.createRadialGradient(32,32,0,32,32,32);X.addColorStop(0,"rgba(255,255,255,1)"),X.addColorStop(1,"rgba(255,255,255,0)"),Z.fillStyle=X,Z.fillRect(0,0,64,64)}),lt=new Si(new yi({map:nt,color:t.eye,transparent:!0,opacity:.55,blending:Xe,depthWrite:!1}));lt.scale.setScalar(.16),lt.position.set(0,.136,.14),lt.userData.keep=!0,Y.add(lt);let ut=cn(96,10,(Z,X,et)=>{let xt=(Z-.5)*2.2,Rt=Math.pow(Math.abs(Math.cos((Z-.5)*Math.PI*9)),.6),St=.045+X*(.15+.007*Rt),wt=Math.sin(xt)*St,It=.165+Math.cos(xt)*St,Qt=wt/.165,re=Math.max(0,(It-.17)/.19),k=.18-.05*re*re+.016*Rt*(.4+.6*X)+.022*Math.sin(Math.PI*X);et.set(Math.sin(Qt)*k*.96,It,Math.cos(Qt)*k*1.05)});N(W(ut,o),Y,0,0,0);let Yt=[[-.105,.15,.108,.5,.15],[-.058,.18,.142,.25,.135],[0,.19,.154,0,.105],[.058,.18,.142,-.25,.135],[.105,.15,.108,-.5,.15]];for(let[Z,X,et,xt,Rt]of Yt){let St=new le(.026,X,4);St.rotateY(Math.PI/4),St.scale(1,1,.5),N(W(St,a),Y,Z*(1-.12),Rt-X/2,et,Math.PI+.1,-xt,Z*-1.8)}for(let Z of[-1,1])N(W(new Ct(.048,16,12),a),Y,Z*.152,.15,-.005,0,0,0,[.6,1,1]);let Ut=new ci,ie=.13,ne=.4,de=26,it=.45,ht=Math.PI-.1;Ut.moveTo(ie*Math.cos(it),ie*Math.sin(it));for(let Z=0;Z<=de;Z++){let X=it+Z/de*(ht-it),et=ne*(Z%2?.95:1)*(.72+.28*Math.sin(Z/de*Math.PI*.75+.5));Ut.lineTo(et*Math.cos(X),et*Math.sin(X))}for(let Z=de;Z>=0;Z--){let X=it+Z/de*(ht-it);Ut.lineTo(ie*Math.cos(X),ie*Math.sin(X))}let Tt=new zi(Ut,{depth:.04,bevelEnabled:!0,bevelSize:.012,bevelThickness:.016,bevelSegments:2,curveSegments:4});Tt.translate(0,0,-.02);let tt=Tt.attributes.uv;for(let Z=0;Z<tt.count;Z++)tt.setXY(Z,tt.getX(Z)/.84+.5,tt.getY(Z)/.84+.5);let rt=W(Tt,u);N(rt,Y,0,.2,-.02,0,-Math.PI/2,0);let yt={},bt={};for(let Z of[-1,1]){let X=Z<0,et=ve(X?"armR":"armL",A,Z*.325,.57,0);i[X?"armR":"armL"]=et,N(W(new Ct(.075,14,10),c),et,0,-.02,0),N(gi(Ce([[.095,-.05],[.112,-.11],[.112,-.18],[.098,-.25],[.082,-.3]],20),r,l),et,0,0,0,0,0,0,[.84,1,.84]),N(W(new Ct(.06,12,10),c),et,0,-.35,0);let xt=ve(X?"foreR":"foreL",et,0,-.35,0);i[X?"foreR":"foreL"]=xt,N(gi(Ce([[.128,.01],[.116,-.06],[.09,-.17],[.086,-.27],[.094,-.3]],20),r,l),xt,0,0,0,0,0,0,[.86,1,.86]),N(W(new ti(.126,.013,8,22),a),xt,0,.005,0,Math.PI/2,0,0,[1,1,1.4]);let Rt=new zt;Rt.userData.joint=!0,N(Rt,xt,0,-.42,0,0,0,0,1.55),bt[Z]=Rt;let St=X;N(W(new Ct(.06,14,10),r),Rt,0,0,0,0,0,0,[1,1.15,.7]),N(W(new Fe(.058,.062,.05,12),r),Rt,0,.055,0),N(W(new ti(.058,.01,6,16),a),Rt,0,.08,0,Math.PI/2,0,0);for(let It=0;It<4;It++){let Qt=(It-1.5)*.028,re=new zt;N(re,Rt,Qt*Z,-.07,.01,St?-1.2:-.35,0,0),N(W(new ks(.014,.035,3,6),r),re,0,-.025,0);let k=new zt;N(k,re,0,-.055,0,St?-1.3:-.5,0,0),N(W(new ks(.013,.03,3,6),r),k,0,-.02,0)}let wt=new zt;N(wt,Rt,Z*-.055,-.02,.03,-.6,0,Z*.7),N(W(new ks(.015,.05,3,6),r),wt,0,-.03,0),yt[X?"handR":"handL"]=null}let P=ve("wep",bt[-1],0,-.02,0);P.scale.setScalar(.76),i.wep=P,N(W(new Fe(.024,.026,.26,12),a),P,0,0,-.01,Math.PI/2,0,0);for(let Z of[-.09,0,.08])N(W(new ti(.027,.007,6,14),a),P,0,0,Z);N(W(new Fe(.04,.045,.05,8),a),P,0,0,-.16,Math.PI/2,0,0),N(W(new Ct(.03,10,8),a),P,0,0,-.195);let G=new ci;G.moveTo(0,.05),G.quadraticCurveTo(.09,.32,-.26,.42),G.quadraticCurveTo(-.03,.25,-.1,.05),G.lineTo(0,.05);let st=new zi(G,{depth:.07,bevelEnabled:!0,bevelSize:.016,bevelThickness:.014,bevelSegments:2,curveSegments:10});st.translate(0,0,-.035),N(W(st,o),P,0,0,.15,0,-Math.PI/2,0,[.75,-.75,1.2]),N(W(new Ne(.07,.2,.06),a),P,0,0,.15);let $=new ci;$.moveTo(.14,-.095),$.lineTo(1.2,-.08),$.lineTo(1.46,0),$.lineTo(1.2,.08),$.lineTo(.14,.095),$.lineTo(.14,-.095);let _t=new zi($,{depth:.012,bevelEnabled:!0,bevelSize:.014,bevelThickness:.012,bevelSegments:2});_t.translate(0,0,-.006),N(W(_t,h),P,0,0,0,0,-Math.PI/2,0);let Pt=new ci;Pt.moveTo(.45,-.035),Pt.lineTo(1.2,-.025),Pt.lineTo(1.36,0),Pt.lineTo(1.2,.025),Pt.lineTo(.45,.035),Pt.lineTo(.45,-.035);let Ht=new kn(Pt);for(let Z of[-1,1])N(W(Ht,d),P,Z*.0195,0,0,0,-Math.PI/2,0);let kt=new ci;kt.moveTo(.13,-.11),kt.lineTo(.44,-.098),kt.lineTo(.56,0),kt.lineTo(.44,.098),kt.lineTo(.13,.11),kt.lineTo(.13,-.11);let Wt=new zi(kt,{depth:.03,bevelEnabled:!0,bevelSize:.01,bevelThickness:.008,bevelSegments:2});Wt.translate(0,0,-.015);let U=Wt.attributes.uv;for(let Z=0;Z<U.count;Z++)U.setXY(Z,(U.getX(Z)-.13)/.43,(U.getY(Z)+.11)/.22);N(W(Wt,g),P,0,0,0,0,-Math.PI/2,0);let _e=new se;_e.position.set(0,0,.45),P.add(_e);let ce=new se;ce.position.set(0,0,1.45),P.add(ce),yt.sword=[_e,ce],yt.handR=yt.sword;let R=new se;R.position.set(0,-.05,0),bt[1].add(R);let y=new se;y.position.set(.1,-.35,.2),bt[1].add(y),yt.handL=[R,y];for(let Z of[-1,1]){let X=Z<0,et=ve(X?"legR":"legL",S,Z*.17,-.02,0);i[X?"legR":"legL"]=et,N(W(new Ct(.05,12,10),c),et,0,-.1,0);{let It=Ce([[.165,-.1],[.172,-.16],[.146,-.32],[.11,-.46]],6);It.rotateY(Math.PI/6),N(gi(It,r,l),et,0,0,0,0,0,0,[.86,1,.68])}N(W(new Ct(.058,12,10),c),et,0,-.49,0);let xt=ve(X?"shinR":"shinL",et,0,-.5,0);i[X?"shinR":"shinL"]=xt,N(W(new Ct(.06,12,8,0,Math.PI*2,0,Math.PI/2),a),xt,0,0,.07,Math.PI/2,0,0,[1,1,.6]),N(W(new le(.065,.22,6),a),xt,0,.1,.105,-.12,0,0,[1,1,.5]);for(let It of[-1,1])N(W(new le(.04,.12,5),a),xt,It*.055,.05,.1,-.2,0,It*-.5,[1,1,.5]);N(gi(Ce([[.136,.02],[.122,-.08],[.114,-.23],[.078,-.42],[.07,-.52],[.074,-.57]],24),r,l),xt,0,0,-.015,0,0,0,[.86,1,1.05]),N(W(new le(.04,.12,4),r),xt,0,-.02,.095,Math.PI,0,0,[1,1,.4]);let Rt=new zt;N(Rt,xt,0,-.62,.03,0,0,0,[1.08,1.08,1.2]),N(W(new Ne(.09,.012,.22),Gn(10122288,{rough:.5,metal:.5,env:.7})),Rt,0,-.055,.035),N(W(new Ct(1,16,12),r),Rt,0,-.005,.05,0,0,0,[.066,.058,.15]),N(W(new le(.045,.1,8),r),Rt,0,-.02,.2,Math.PI/2,0,0,[1,1,.6]);for(let It=0;It<3;It++){let Qt=W(new Fe(.06,.065,.13,14,1,!1,-Math.PI/2,Math.PI),r);N(Qt,Rt,0,0,-.03+It*.065,Math.PI/2,0,Math.PI/2,[1,1,.75-It*.12])}N(W(new Ct(.06,12,8),r),Rt,0,-.005,.14,0,0,0,[1,.55,1.1]),N(W(new ti(.063,.01,6,16,Math.PI),a),Rt,0,0,.06,0,Math.PI/2,0,[1,1,1]);let St=new se;St.position.set(0,-.35,.05),xt.add(St);let wt=new se;wt.position.set(0,-.7,.18),xt.add(wt),yt[X?"footR":"footL"]=[St,wt]}Vn(e),e.traverse(Z=>{Z.isMesh&&(Z.castShadow=!1,Z.receiveShadow=!1)});let V={j:i,base:s,hipY:Wc,flare:0},J=new se;J.position.set(0,.3,.9),E.add(J);let ot=Rs(0,null,1.1),Et=0;return{root:e,rig:V,trails:yt,worldObjects:[],orbPoint:J,shadow:ot,height:2.1,headY:2.55,trailColor:n?9425151:16769930,update(Z){Et+=Z,lt.material.opacity=.45+.2*Math.sin(Et*9)*Math.sin(Et*3.1)},setFlash(Z,X){w.forEach((et,xt)=>{et.emissive.copy(_[xt]),X>0&&et.emissive.lerp(Z,X*.8)})},dispose(){as(e)}}}var Rf,Wc,Cf=Ye(()=>{Ei();Js();ao();Rf=[{silver:13684944,gold:15910990,navy:1448747,plume:["#d2330c","#8a1604","#ff6a24"],eye:16747038,blade:16119802,gem:10473727,goldHex:"#f0c04a",ink:"#a8741c"},{silver:4870244,gold:13161188,navy:724504,plume:["#2d7bff","#0c3aa0","#7ac4ff"],eye:5236479,blade:15265528,gem:16738954,goldHex:"#c8d2e4",ink:"#6a7890"}],Wc=1.2});var be,qt,En,en,nn,cv,N0,Lf=Ye(()=>{Cf();oo();ln();rs();be=(n,t,e,i,s,r,a,o,l,c={})=>({f:[n,t],x:e,y:i,r:s,dmg:r,ang:a,bkb:o,kbg:l,...c}),qt={legR:[-.34,0,-.08],shinR:[.5,0,0],legL:[.14,0,.1],shinL:[.4,0,0],by:-.03,hips:[0,.12,.04],torso:[.06,.06,-.05],head:[.08,-.12,.04],armR:[-.95,-.46,-.87],foreR:[-2.3,0,0],wep:[.37,-.2,-.43],armL:[.05,0,.28],foreL:[-.55,0,0]},En={legR:[-.5,0,-.1],shinR:[.8,0,0],legL:[.2,0,.1],shinL:[.5,0,0],armR:[-.5,0,-.5],foreR:[-.6,0,0],wep:[1.2,0,0],armL:[-.6,0,.5],foreL:[-1,0,0],torso:[.1,0,0]},en={legR:[-1.1,0,-.1],shinR:[1.6,0,0],legL:[-.8,0,.1],shinL:[1.4,0,0]},nn={legR:[-.9,0,-.1],shinR:[.8,0,0],legL:[.7,0,.1],shinL:[.15,0,0],by:-.22},cv={jab1:{total:20,next:"jab2",nextWin:[7,19],trail:"sword",trailF:[3,8],sfx:[3,"slash",.3],hit:[be(5,6,1.2,1.15,.5,4,72,8,25),be(5,6,.6,1.1,.45,4,72,8,25)],anim:[[0,qt],[3,{...qt,armR:[-1.3,0,-.9],foreR:[-.3,0,0],wep:[1.4,0,0],torso:[.1,-.35,0]}],[6,{...qt,armR:[-1.45,0,.25],foreR:[-.1,0,0],wep:[1.5,0,0],torso:[.15,.45,0]}],[14,{...qt,armR:[-1.3,0,.1],foreR:[-.2,0,0],wep:[1.4,0,0],torso:[.12,.35,0]}],[20,qt]]},jab2:{total:28,trail:"handL",trailF:[3,8],sfx:[3,"whoosh",.5],hit:[be(5,7,.95,1.1,.62,5,40,45,72)],anim:[[0,{...qt,armR:[-1.3,0,.1],torso:[.12,.35,0]}],[5,{...qt,armL:[-1.45,0,.1],foreL:[-.3,0,0],torso:[.25,-.6,0],armR:[.3,0,-.5],bz:.18}],[16,{...qt,armL:[-1.35,0,.1],foreL:[-.4,0,0],torso:[.2,-.5,0],bz:.12}],[28,qt]]},ftilt:{total:34,trail:"sword",trailF:[8,13],sfx:[8,"slash",.6],hit:[be(9,11,1.8,1.1,.45,11,35,34,96),be(9,11,1.05,1.1,.5,10,35,34,96)],anim:[[0,qt],[6,{...qt,armR:[.2,0,-.3],foreR:[-1.6,0,0],wep:[1.4,0,0],torso:[-.1,-.4,0]}],[9,{...nn,armR:[-1.5,0,-.1],foreR:[0,0,0],wep:[1.25,0,0],torso:[.25,.5,0],armL:[-.3,0,.5],foreL:[-1,0,0],bz:.25}],[18,{...nn,armR:[-1.45,0,-.1],foreR:[0,0,0],wep:[1.25,0,0],torso:[.2,.45,0],armL:[-.3,0,.5],bz:.2}],[34,qt]]},utilt:{total:34,trail:"sword",trailF:[7,14],sfx:[7,"slash",.6],hit:[be(8,13,0,0,.6,10,92,40,95,{path:[[1.1,1.7],[-.9,1.6]]}),be(8,13,0,0,.62,10,92,40,95,{path:[[.9,2.6],[-.6,2.6]]})],anim:[[0,qt],[5,{...qt,armR:[-.9,0,-.6],foreR:[-.2,0,0],wep:[.8,0,0],torso:[.2,0,0]}],[8,{...qt,armR:[-1.85,0,-.4],foreR:[-.1,0,0],wep:[1,0,0],torso:[-.05,.1,0],head:[-.3,0,0]}],[13,{...qt,armR:[-2.9,0,-.2],foreR:[-.1,0,0],wep:[.6,0,0],torso:[-.2,.1,0],head:[-.3,0,0]}],[20,{...qt,armR:[-2.85,0,-.2],foreR:[-.1,0,0],wep:[.6,0,0],torso:[-.15,0,0]}],[34,qt]]},dtilt:{total:26,trail:"sword",trailF:[6,10],sfx:[6,"slash",.4],hit:[be(7,9,1.65,.35,.45,8,30,40,60),be(7,9,.9,.35,.45,8,30,40,60)],anim:[[0,{by:-.36,torso:[.45,0,0],legR:[-1.2,0,-.18],shinR:[2,0,0],legL:[-1.2,0,.18],shinL:[2,0,0],armR:[-.4,0,-.3],foreR:[-.6,0,0],wep:[1.3,0,0],armL:[-.6,0,.3],foreL:[-1,0,0]}],[7,{by:-.38,torso:[.6,.3,0],legR:[-1.3,0,-.1],shinR:[1.7,0,0],legL:[-.3,0,.1],shinL:[1.9,0,0],armR:[-1,0,-.2],foreR:[0,0,0],wep:[.55,0,0],armL:[-.4,0,.4],foreL:[-1,0,0]}],[16,{by:-.38,torso:[.55,.25,0],legR:[-1.3,0,-.1],shinR:[1.7,0,0],legL:[-.3,0,.1],shinL:[1.9,0,0],armR:[-.95,0,-.2],wep:[.6,0,0]}],[26,{by:-.36,torso:[.45,0,0],legR:[-1.2,0,-.18],shinR:[2,0,0],legL:[-1.2,0,.18],shinL:[2,0,0]}]]},dashattack:{total:42,keepVel:!0,trail:"handL",trailF:[7,18],sfx:[7,"whoosh",.7],hit:[be(8,14,.85,1,.7,12,45,55,72),be(15,20,.8,1,.6,8,45,40,60)],onStart(n){n.vx=n.facing*.2},onFrame(n,t){t<=18?n.vx=oi(n.vx,n.facing*.16,.01):n.friction(2.2),t%4===0&&t<18&&n.battle.effects.dust(n.x,n.y,1,-n.facing)},anim:[[0,qt],[6,{...qt,armL:[-.4,0,.6],foreL:[-1.4,0,0],torso:[.1,-.3,0]}],[9,{legR:[.5,0,-.1],shinR:[.6,0,0],legL:[-.7,0,.1],shinL:[.5,0,0],armL:[-1.5,0,.1],foreL:[-.2,0,0],torso:[.35,-.6,0],armR:[.3,0,-.5],foreR:[-.6,0,0],wep:[1.2,0,0],bz:.2,by:-.1}],[22,{legR:[.4,0,-.1],legL:[-.5,0,.1],armL:[-1.4,0,.1],torso:[.3,-.5,0],armR:[.3,0,-.5],wep:[1.2,0,0],bz:.15}],[42,qt]]},fsmash:{total:58,smash:!0,charge:{f:7,max:60},trail:"sword",trailF:[14,20],sfx:[14,"slash",1],hit:[be(16,18,1.85,.75,.72,19,36,40,100),be(16,18,1,1.25,.62,16,36,38,98)],onFrame(n,t){t===17&&(n.battle.effects.ring(n.x+n.facing*1.9,n.y+.2,16765024,2.6,16),n.battle.effects.dust(n.x+n.facing*1.9,n.y,6,n.facing),n.battle.shakeCam(.08))},anim:[[0,qt],[6,{...qt,armR:[-2.9,0,-.3],foreR:[-.4,0,0],wep:[.3,0,0],torso:[-.3,-.3,0],head:[-.2,0,0],legR:[-.2,0,-.1],legL:[.4,0,.1]}],[14,{...qt,armR:[-3,0,-.3],foreR:[-.5,0,0],wep:[.2,0,0],torso:[-.35,-.35,0],legR:[-.2,0,-.1],legL:[.45,0,.1]}],[17,{...nn,armR:[-1.7,0,-.1],foreR:[-.1,0,0],wep:[1.6,0,0],torso:[.5,.3,0],armL:[-.2,0,.6],foreL:[-1,0,0],by:-.28,bz:.3}],[30,{...nn,armR:[-1.6,0,-.1],foreR:[-.1,0,0],wep:[1.6,0,0],torso:[.45,.3,0],by:-.26,bz:.25}],[58,qt]]},usmash:{total:54,smash:!0,charge:{f:6,max:60},trail:"sword",trailF:[11,18],sfx:[11,"slash",1],hit:[be(13,17,.3,2.8,.75,17,88,40,98),be(13,17,.3,1.75,.6,15,85,40,96)],onFrame(n,t){t===13&&n.battle.effects.sparkle(n.x+n.facing*.3,n.y+2.8,16773296,6,.4)},anim:[[0,qt],[6,{by:-.3,torso:[.3,0,0],legR:[-.8,0,-.15],shinR:[1.4,0,0],legL:[-.8,0,.15],shinL:[1.4,0,0],armR:[-.3,0,-.3],foreR:[-1.3,0,0],wep:[.5,0,0],armL:[-.6,0,.3],foreL:[-1.2,0,0]}],[13,{by:.06,torso:[-.15,0,0],head:[-.3,0,0],legR:[.05,0,-.1],legL:[.05,0,.1],armR:[-3.05,0,-.1],foreR:[0,0,0],wep:[1.45,0,0],armL:[-.4,0,.5],foreL:[-1.2,0,0]}],[26,{by:.04,torso:[-.1,0,0],armR:[-3,0,-.1],foreR:[0,0,0],wep:[1.4,0,0],armL:[-.4,0,.5]}],[54,qt]]},dsmash:{total:58,smash:!0,charge:{f:6,max:60},trail:"sword",trailF:[8,22],sfx:[8,"slash",.9],hit:[be(10,11,1.55,.3,.6,15,30,36,98),be(10,11,.8,.3,.5,13,30,36,96),be(19,20,-1.55,.3,.6,16,150,38,98),be(19,20,-.8,.3,.5,14,150,36,96)],anim:[[0,qt],[6,{by:-.35,torso:[.5,-.5,0],legR:[-1,0,-.3],shinR:[1.3,0,0],legL:[-.2,0,.3],shinL:[1.6,0,0],armR:[-1,0,-1],foreR:[0,0,0],wep:[.8,0,0]}],[10,{by:-.38,torso:[.5,.6,0],legR:[-1,0,-.3],shinR:[1.3,0,0],legL:[-.2,0,.3],shinL:[1.6,0,0],armR:[-1.1,0,.4],foreR:[0,0,0],wep:[.8,0,0]}],[15,{by:-.38,body:[0,0,0],torso:[.5,.6,0],armR:[-1.1,0,.4],wep:[1.9,0,0],legR:[-1,0,-.3],shinR:[1.3,0,0],legL:[-.2,0,.3],shinL:[1.6,0,0]}],[19,{by:-.38,body:[0,Math.PI,0],torso:[.5,.6,0],armR:[-1.1,0,.4],wep:[1.9,0,0],legR:[-1,0,-.3],shinR:[1.3,0,0],legL:[-.2,0,.3],shinL:[1.6,0,0]}],[32,{by:-.3,body:[0,Math.PI,0],torso:[.4,.4,0],armR:[-1,0,.3],wep:[1.8,0,0]}],[58,{...qt,body:[0,Math.PI*2,0]}]]},nair:{total:40,aerial:!0,landLag:10,acBefore:5,acAfter:30,alpha:.85,trail:"sword",trailF:[6,13],sfx:[6,"slash",.7],hit:[be(7,12,0,.95,1.35,10,45,30,90,{away:!0})],anim:(()=>{let n={...en,armR:[-1.5,0,-1.1],foreR:[0,0,0],wep:[1.5,0,0],armL:[-.8,0,.8],foreL:[-1.2,0,0]};return[[0,En],[6,{...n,body:[0,0,0]}],[13,{...n,body:[0,Math.PI*2,0]}],[20,{...n,body:[0,Math.PI*2,0]}],[40,{...En,body:[0,Math.PI*2,0]}]]})()},fair:{total:42,aerial:!0,landLag:14,acBefore:4,acAfter:32,trail:"sword",trailF:[8,15],sfx:[9,"slash",.7],hit:[be(10,13,0,0,.7,13,40,32,95,{path:[[1.1,2.2],[1.45,.3]]}),be(10,13,.6,1.2,.5,10,40,30,90)],anim:[[0,En],[6,{...en,armR:[-2.9,0,-.3],foreR:[-.4,0,0],wep:[.3,0,0],torso:[-.3,.2,0],armL:[-.6,0,.5],foreL:[-1.2,0,0]}],[10,{...en,armR:[-2.6,0,-.3],foreR:[-.3,0,0],wep:[.4,0,0],torso:[-.3,.2,0]}],[13,{...en,armR:[-.6,0,-.1],foreR:[-.1,0,0],wep:[1.3,0,0],torso:[.5,.25,0],armL:[-.3,0,.6]}],[24,{...en,armR:[-.5,0,-.1],wep:[1.3,0,0],torso:[.45,.2,0]}],[42,En]]},bair:{total:38,aerial:!0,landLag:12,acBefore:4,acAfter:28,trail:"handL",trailF:[6,12],sfx:[7,"whoosh",.7],hit:[be(8,11,-1.15,1,.72,12,145,38,95)],anim:[[0,En],[5,{...en,torso:[.1,.5,0],armL:[-1.2,0,.3],foreL:[-.8,0,0],head:[0,.3,0]}],[9,{...en,torso:[.2,-1.1,0],head:[0,-.8,0],armL:[1.3,0,.5],foreL:[-.3,0,0],armR:[-.8,0,-.6],wep:[1.2,0,0]}],[18,{...en,torso:[.2,-1,0],head:[0,-.7,0],armL:[1.2,0,.5],foreL:[-.3,0,0]}],[38,En]]},uair:{total:38,aerial:!0,landLag:10,acBefore:3,acAfter:28,trail:"sword",trailF:[6,12],sfx:[6,"slash",.6],hit:[be(7,11,0,0,.7,11,85,32,95,{path:[[1,2.1],[-.9,2.1]]})],anim:[[0,En],[5,{...en,armR:[-1.2,0,-.3],foreR:[-.2,0,0],wep:[.8,0,0],torso:[.1,0,0]}],[8,{...en,body:[-.3,0,0],armR:[-2,0,-.2],foreR:[0,0,0],wep:[.7,0,0],head:[-.4,0,0]}],[12,{...en,body:[-.35,0,0],armR:[-2.9,0,-.2],foreR:[0,0,0],wep:[.8,0,0],head:[-.4,0,0]}],[22,{...en,body:[-.2,0,0],armR:[-2.8,0,-.2],wep:[.8,0,0]}],[38,En]]},dair:{total:52,aerial:!0,landLag:22,acBefore:3,acAfter:42,trail:"sword",trailF:[12,22],sfx:[13,"slash",.8],hit:[be(14,18,.1,-.4,.58,15,270,30,88),be(19,30,.1,-.3,.5,10,70,25,70)],onFrame(n,t){t<13&&(n.gravMult=.25),t===14&&!n.grounded&&(n.vy=Math.min(n.vy,-.26))},anim:[[0,En],[8,{...en,armR:[-2.6,0,-.3],foreR:[-.4,0,0],wep:[2,0,0],torso:[-.1,0,0],by:.1}],[14,{legR:[-.3,0,-.1],shinR:[.5,0,0],legL:[-.1,0,.1],shinL:[.4,0,0],armR:[-.3,0,-.1],foreR:[-.6,0,0],wep:[2.4,0,0],torso:[.2,0,0],armL:[-.6,0,.5],foreL:[-1,0,0]}],[30,{legR:[-.3,0,-.1],shinR:[.5,0,0],armR:[-.3,0,-.1],foreR:[-.6,0,0],wep:[2.4,0,0],torso:[.2,0,0]}],[52,En]]},neutralb:{total:44,charge:{f:6,max:60},chargeScale:1.2,keepVel:!0,fall:.45,landContinue:!0,trail:"sword",trailF:[13,18],sfx:[13,"slash",.9],hit:[be(14,17,1.95,1.1,.55,9,38,36,86,{shield:20}),be(14,17,1.15,1.1,.5,8,38,34,84,{shield:18})],onFrame(n,t){if(t===13?n.vx=n.facing*.2:n.grounded?n.friction(1.2):n.vx*=.94,t===14){let e=n.chargeRatio;n.battle.effects.sparkle(n.x+n.facing*2,n.y+1.1,16773296,4+Math.floor(e*8),.4),e>.7&&n.battle.effects.ring(n.x+n.facing*2,n.y+1.1,16765024,3,16)}},onCharge(n){if(n.charge%4===0){let t=n.model.trails.sword[1].getWorldPosition(n.battle.tmpV);n.battle.effects.sparkle(t.x,t.y,16769930,1,.15)}},anim:[[0,qt],[6,{armR:[.6,0,-.3],foreR:[-1.8,0,0],wep:[1.2,0,0],torso:[-.2,-.6,0],by:-.15,legR:[-.5,0,-.1],shinR:[.6,0,0],legL:[.5,0,.1],shinL:[.4,0,0],armL:[-.6,0,.4],foreL:[-1.3,0,0]}],[14,{...nn,armR:[-1.55,0,-.05],foreR:[0,0,0],wep:[1.3,0,0],torso:[.3,.6,0],by:-.25,bz:.35,armL:[-.2,0,.6]}],[26,{...nn,armR:[-1.5,0,-.05],foreR:[0,0,0],wep:[1.28,0,0],torso:[.25,.5,0],bz:.25}],[44,qt]]},sideb:{total:48,armor:[8,30],noGravity:[0,30],keepVel:!0,noDrift:!0,canLeaveGround:!0,ledgeGrab:10,landContinue:!0,hit:[be(8,30,.85,1,.72,10,42,60,65)],onStart(n){n.grounded||(n.sideBUsed=!0),n.vy=0},onFrame(n,t){t<8?(n.vx=oi(n.vx,0,.02),n.grounded||(n.vy=.004)):t<=30?(n.vx=n.facing*.28,n.vy=n.grounded?0:.025,t===8&&pt.whoosh(1),t%3===0&&(n.grounded&&n.battle.effects.dust(n.x-n.facing*.4,n.y,1,-n.facing),n.battle.effects.sparkle(n.x+n.facing*.9,n.y+1,16769930,1,.4))):n.vx*=.85},anim:[[0,qt],[6,{...qt,armL:[-.3,0,.6],foreL:[-1.5,0,0],torso:[-.1,-.4,0],by:-.2,legR:[-.6,0,-.1],shinR:[.9,0,0],legL:[.4,0,.1],shinL:[.6,0,0]}],[9,{armL:[-1.5,0,.15],foreL:[-.3,0,0],torso:[.4,-.7,0],armR:[.4,0,-.4],foreR:[-.8,0,0],wep:[1,0,0],legR:[.6,0,-.1],shinR:[.4,0,0],legL:[-.7,0,.1],shinL:[.6,0,0],by:-.12,bz:.2}],[30,{armL:[-1.5,0,.15],foreL:[-.3,0,0],torso:[.4,-.7,0],armR:[.4,0,-.4],wep:[1,0,0],legR:[-.6,0,-.1],shinR:[.4,0,0],legL:[.6,0,.1],shinL:[.6,0,0],by:-.12,bz:.2}],[48,qt]]},upb:{total:42,helpless:!0,helplessLag:24,ledgeGrab:14,noDrift:!0,keepVel:!0,noGravity:[4,24],alpha:.9,trail:"sword",trailF:[4,24],hit:[be(5,7,.3,1.2,.95,3,88,40,8,{group:1,link:!0}),be(9,11,.3,1.3,.95,3,88,40,8,{group:2,link:!0}),be(13,15,.3,1.4,.95,3,88,40,8,{group:3,link:!0}),be(19,22,.3,1.9,1.05,6,75,60,90,{group:4})],onStart(n){n.upBUsed=!0,n.vx*=.4},onFrame(n,t){t<4&&(n.vy=n.grounded?0:Math.max(n.vy,0)*.5),t===4&&(n.grounded=!1,n.surface=null,n.y+=.02,pt.whoosh(1),n.battle.effects.ring(n.x,n.y+.2,16765024,2,14)),t>=4&&t<=24&&(n.vy=.36*(1-(t-4)/21)+.015,n.vx=oi(n.vx,n.input.stick.x*.12,.014),t%2===0&&n.battle.effects.sparkle(n.x,n.y+1,16769930,1,.5)),t>24&&n.drift(.6),t%4===1&&t<22&&pt.slash(.3)},anim:(()=>{let n={armR:[-2.2,0,-.9],foreR:[0,0,0],wep:[1.2,0,0],armL:[-.5,0,.8],foreL:[-1.2,0,0],legR:[-.3,0,-.1],shinR:[.6,0,0],legL:[.1,0,.1],shinL:[.3,0,0],head:[-.3,0,0]};return[[0,{...qt,by:-.25,legR:[-.8,0,-.15],shinR:[1.4,0,0],legL:[-.8,0,.15],shinL:[1.4,0,0]}],[4,{...n,body:[0,0,0]}],[12,{...n,body:[0,Math.PI*3,0]}],[22,{...n,body:[0,Math.PI*6,0]}],[42,{...En,body:[0,Math.PI*6,0]}]]})()},downb:{total:50,counter:[5,28],fall:.3,landContinue:!0,onFrame(n,t){t===5&&pt.counter()},anim:[[0,qt],[5,{armL:[-1.5,0,.35],foreL:[-.6,0,0],torso:[.1,-.7,0],armR:[.3,0,-.5],foreR:[-.8,0,0],wep:[.9,0,0],by:-.14,legR:[-.5,0,-.1],shinR:[.7,0,0],legL:[.5,0,.1],shinL:[.4,0,0]}],[28,{armL:[-1.45,0,.35],foreL:[-.6,0,0],torso:[.1,-.6,0],armR:[.3,0,-.5],wep:[.9,0,0],by:-.12}],[50,qt]]},counterhit:{total:36,intang:[0,14],trail:"sword",trailF:[4,10],sfx:[5,"slash",1],alpha:.7,hit:[be(6,9,1.5,1.1,.85,n=>Re(n.counterDmg*1.3,8,35),38,60,88)],onFrame(n,t){t===6&&n.battle.effects.ring(n.x+n.facing*1.4,n.y+1.1,16773296,3,14)},anim:[[0,{...qt,armR:[-2.9,0,-.3],foreR:[-.4,0,0],wep:[.3,0,0],torso:[-.3,-.3,0]}],[6,{...nn,armR:[-1.6,0,.2],foreR:[0,0,0],wep:[1.3,0,0],torso:[.5,.5,0],bz:.3}],[20,{...nn,armR:[-1.5,0,.2],wep:[1.3,0,0],torso:[.4,.4,0],bz:.25}],[36,qt]]},final:{total:100,fs:!0,intang:[0,100],noGravity:[0,100],noDrift:!0,keepVel:!0,trail:"sword",trailF:[50,60],onStart(n){n.vx=0,n.vy=0,n.battle.startCine(n,45)},onFrame(n,t){let e=n.battle,i=e.effects;if(n.vx=0,n.grounded||(n.vy=0),t<45&&t%2===0){let s=n.model.trails.sword[1].getWorldPosition(e.tmpV);i.sparkle(s.x,s.y,t%4?16765024:16777215,2,.4)}t===54&&(e.spawnProjectile(n,{x:n.x+n.facing*1.6,y:n.y+1.2,vx:n.facing*.42,vy:0,r:1.9,dmg:32,ang:38,bkb:110,kbg:92,life:90,color:16765024,kind:"fswave",fs:!0}),e.shakeCam(.5),pt.fsBoom())},anim:[[0,qt],[20,{...qt,armR:[-3,0,-.2],foreR:[0,0,0],wep:[1.5,0,0],torso:[-.2,0,0],head:[-.4,0,0],armL:[-.4,0,.6],legR:[-.2,0,-.15],legL:[.2,0,.15]}],[45,{...qt,armR:[-3,0,-.2],foreR:[0,0,0],wep:[1.5,0,0],torso:[-.25,0,0],head:[-.4,0,0]}],[50,{...qt,armR:[-2.9,0,-.3],foreR:[-.4,0,0],wep:[.3,0,0],torso:[-.35,-.3,0]}],[55,{...nn,armR:[-1.7,0,-.1],foreR:[-.1,0,0],wep:[1.6,0,0],torso:[.5,.3,0],by:-.28,bz:.3}],[80,{...nn,armR:[-1.6,0,-.1],wep:[1.6,0,0],torso:[.45,.3,0],by:-.26,bz:.25}],[100,qt]]},grab:{total:34,hit:[be(7,8,.85,1.05,.5,0,0,0,0,{type:"grab"})],anim:[[0,qt],[7,{...qt,armL:[-1.5,0,-.1],foreL:[0,0,0],armR:[-1,0,-.3],torso:[.25,-.3,0],bz:.12}],[16,{...qt,armL:[-1.4,0,-.1],foreL:[-.1,0,0],torso:[.2,-.2,0]}],[34,qt]]},dashgrab:{total:40,keepVel:!0,hit:[be(9,10,1.05,1.05,.55,0,0,0,0,{type:"grab"})],onFrame(n){n.friction(1.2)},anim:[[0,qt],[9,{...qt,armL:[-1.5,0,-.1],foreL:[0,0,0],torso:[.35,-.3,0],bz:.15}],[22,{...qt,armL:[-1.4,0,-.1],torso:[.3,-.2,0]}],[40,qt]]},pummel:{total:18,pummelAt:6,pummelDmg:2,anim:[[0,{...qt,armL:[-1.35,0,-.05]}],[6,{...qt,armL:[-1.35,0,-.05],armR:[-1.2,0,.3],foreR:[-.9,0,0],torso:[.2,.4,0]}],[18,{...qt,armL:[-1.35,0,-.05]}]]},fthrow:{total:34,throwAt:12,throwHit:{dmg:9,ang:40,bkb:70,kbg:68},hold:n=>[.85,.2],anim:[[0,{...qt,armL:[-1.35,0,-.05]}],[8,{...qt,armL:[-.4,0,.5],foreL:[-1.5,0,0],torso:[-.1,-.5,0]}],[12,{...nn,armL:[-1.5,0,.1],foreL:[-.2,0,0],torso:[.35,-.6,0],bz:.25}],[34,qt]]},bthrow:{total:40,throwAt:16,throwHit:{dmg:11,ang:140,bkb:60,kbg:88},hold:n=>{let t=Math.min(1,n/16);return[.85*Math.cos(Math.PI*t),.3+.5*Math.sin(Math.PI*t)]},anim:[[0,{...qt,armL:[-1.35,0,-.05]}],[16,{...qt,body:[0,Math.PI,0],armL:[-2,0,.3],torso:[.2,0,0]}],[24,{...qt,body:[0,Math.PI*2,0]}],[40,{...qt,body:[0,Math.PI*2,0]}]]},uthrow:{total:40,throwAt:14,throwHit:{dmg:9,ang:90,bkb:75,kbg:75},hold:n=>[.6-n*.03,.2+n*.13],anim:[[0,{...qt,armL:[-1.35,0,-.05]}],[14,{...qt,armL:[-3,0,.1],foreL:[0,0,0],by:.05,head:[-.4,0,0]}],[40,qt]]},dthrow:{total:40,throwAt:16,throwHit:{dmg:7,ang:80,bkb:60,kbg:40},hold:n=>[.85,Math.max(0,.2-n*.02)],onFrame(n,t){t===16&&(n.battle.effects.dust(n.x+n.facing*.8,n.y,8,0),n.battle.shakeCam(.06))},anim:[[0,{...qt,armL:[-1.35,0,-.05]}],[10,{...qt,armL:[-2.6,0,.3],armR:[-2.4,0,-.3],wep:[.4,0,0],by:.05}],[16,{...qt,armL:[-.8,0,.3],armR:[-.8,0,-.3],wep:[1.8,0,0],torso:[.5,0,0],by:-.25}],[40,qt]]},getupattack:{total:32,intang:[0,9],alpha:.8,trail:"sword",trailF:[7,12],hit:[be(8,10,1.2,.4,.62,7,40,60,50,{away:!0}),be(8,10,-1.2,.4,.62,7,40,60,50,{away:!0})],anim:[[0,{by:-.5,torso:[.4,0,0]}],[8,{by:-.3,body:[0,0,0],armR:[-1.4,0,-1.2],wep:[1.5,0,0]}],[14,{by:-.3,body:[0,Math.PI*2,0],armR:[-1.4,0,-1.2],wep:[1.5,0,0]}],[32,{...qt,body:[0,Math.PI*2,0]}]]},ledgeattack:{total:36,intang:[0,10],trail:"sword",trailF:[8,14],sfx:[9,"slash",.6],hit:[be(10,13,1.2,.5,.7,8,40,60,50)],anim:[[0,{by:-.3,torso:[.5,0,0]}],[10,{...nn,armR:[-1,0,.3],foreR:[0,0,0],wep:[1,0,0],torso:[.4,.4,0]}],[20,{...nn,armR:[-.9,0,.3],wep:[1,0,0],torso:[.3,.3,0]}],[36,qt]]}},N0={id:"dullahan",name:"\u30C7\u30E5\u30E9\u30CF\u30F3",en:"DULLAHAN",title:"\u9EC4\u91D1\u306E\u9996\u306A\u3057\u9A0E\u58EB",color:16762938,css:"#ffc83a",desc:"\u515C\u306E\u5965\u306B\u708E\u3060\u3051\u304C\u706F\u308B\u3001\u4E2D\u8EAB\u306E\u306A\u3044\u751F\u3051\u308B\u7532\u5191\u3002\u5927\u5263\u306E\u30EA\u30FC\u30C1\u3068\u4E00\u6483\u306E\u91CD\u3055\u3001\u30A2\u30FC\u30DE\u30FC\u7A81\u9032\u3068\u30AB\u30A6\u30F3\u30BF\u30FC\u304C\u6B66\u5668\u306E\u91CD\u91CF\u7D1A\u3002",specials:["\u30B5\u30F3\u30E9\u30F3\u30B9\uFF08\u305F\u3081\u7A81\u304D\uFF09","\u30B4\u30FC\u30EB\u30C7\u30F3\u30E9\u30C3\u30B7\u30E5\uFF08\u30A2\u30FC\u30DE\u30FC\u4F53\u5F53\u305F\u308A\uFF09","\u30E9\u30A4\u30B8\u30F3\u30B0\u30AF\u30EC\u30B9\u30C8\uFF08\u4E0A\u6607\u65AC\u308A\uFF09","\u30D6\u30EB\u30EF\u30FC\u30AF\uFF08\u30AB\u30A6\u30F3\u30BF\u30FC\uFF09"],stats:{weight:116,height:2.05,radius:.46,walkSpeed:.075,dashSpeed:.15,dashFrames:12,runSpeed:.135,traction:.011,airSpeed:.088,airAccel:.0065,airFriction:.003,gravity:.0095,fallSpeed:.18,fastFall:.28,jumpV:.25,hopV:.16,djV:.235,airJumps:1,jumpsquat:4,rollSpeed:.125},grabHold:[.85,.2],counterMove:"counterhit",buildModel:Af,anims:As({idle:qt,hipY:Wc,bob:.8,shieldExtra:{armL:[-1.4,0,.2],foreL:[-.5,0,0],armR:[.2,0,-.4],foreR:[-.8,0,0],wep:[1.2,0,0]},holdExtra:{armR:[-.35,0,-.3],foreR:[-.8,0,0],wep:[1.6,0,0],armL:[-1.4,0,-.05],foreL:[-.2,0,0]},runExtra:()=>({armR:[-.3,0,-.3],foreR:[-.9,0,0],wep:[1.9,0,0]}),override:{victory:n=>({armR:[-3*Math.min(1,n/30),0,-.25],foreR:[0,0,0],wep:[1.55,0,0],armL:[-.4,0,.3],foreL:[-1.2,0,0],legR:[-.2,0,-.15],legL:[.2,0,.15],torso:[-.1,.1,0],head:[-.25,0,0]})}}),moves:cv}});function If(n=0){let t=Pf[n%Pf.length],e=new zt,i={},s={},r=mi(t.red,{rough:.6,metal:.02,env:.45,emissive:new gt(t.dark).multiplyScalar(.1)});r.flatShading=!0;let a=mi(t.belly,{rough:.55,metal:.03,env:.5}),o=mi(t.claw,{rough:.3,metal:.05,env:.8}),l=mi(t.frill,{rough:.5,metal:.1,env:.6,emissive:new gt(t.frill).multiplyScalar(.06),side:ke}),c=mi(5900296,{rough:.6}),h=mi(14173966,{rough:.7,env:.3}),d=hi(t.eye,1),u=new Be({color:t.membrane,roughness:.75,metalness:0,envMapIntensity:.5,side:Vi}),f=new Be({color:new gt(t.red).multiplyScalar(.82),roughness:.95,metalness:0,envMapIntensity:.15,side:Ze}),g=[r,a,l],v=g.map(P=>P.emissive.clone()),m=ve("body",e,0,Xc,0);i.body=m;let p=ve("hips",m);i.hips=p;let b=ve("torso",p);i.torso=b,N(W(new Ct(.25,10,7),r),p,0,.02,-.02,0,0,0,[1,.8,.95]);let w=new F0(t),_=new zt;_.userData.keep=!0,w.mesh.userData.keep=!0,w.tip.userData.keep=!0,_.add(w.mesh,w.tip),_.position.set(0,.02,-.08),p.add(_);let E=new se;i.wisp=E,e.add(E),N(W(Ce([[.15,0],[.16,.12],[.22,.3],[.35,.48],[.4,.6],[.33,.71],[.18,.78],[.12,.8]],10),r),b,0,0,0,0,0,0,[.82,1,.74]);for(let P of[-1,1])N(W(new Ct(1,7,5),r),b,P*.13,.57,.17,0,0,P*-.2,[.16,.13,.11]),N(W(new Ct(1,7,5),r),b,P*.24,.68,-.02,0,0,P*.4,[.15,.12,.15]),N(W(new Ct(1,6,5),r),b,P*.16,.3,.12,0,0,0,[.08,.15,.085]);for(let P=0;P<9;P++){let G=.72-P*.082,st=.2-P*.008,$=[.2,.28,.35,.35,.3,.25,.23,.2,.19][P];N(W(new Ct(1,14,6),a),b,0,G,$*.74+(P<4?.035:0),-.12,0,0,[st*1.2,.058,.07])}for(let P=0;P<3;P++)N(W(new Ct(1,12,6),a),p,0,0-P*.075,.2-P*.03,.25+P*.25,0,0,[.15-P*.02,.05,.06]);let S=r.clone();S.color=new gt(t.red).lerp(new gt(t.dark),.55);for(let P=0;P<5;P++){let G=W(new le(.2-P*.012,.2,4),S);N(G,b,0,.2+P*.125,-[.17,.21,.27,.32,.28][P],Math.PI-.15,0,0,[1,1,.22])}for(let P=0;P<4;P++){let G=W(new le(.1,.16,4),r);N(G,b,0,.3+P*.12,-.24-(P===2?.02:0),-1.9,0,0,[1,1,.45])}let A=ve("head",b,0,.74,.04);i.head=A,N(W(qi(.3,.13,.17,8),r),A,0,.28,.06,-.35,0,0);for(let P=0;P<4;P++)N(W(new Ct(1,8,5),a),A,0,.04+P*.075,.125+P*.035,-.3,0,0,[.085,.04,.045]);let x=new zt;N(x,A,0,.4,.13,.05,0,0,1.08);let T=(P,G,st,$,_t,Pt,Ht,kt,Wt=r)=>{let U=Ce(P,4);return U.rotateY(Math.PI/4),N(W(U,Wt),G,st,$,_t,Pt,0,0,[Ht,1,kt])};N(W(new Ct(.15,10,8),r),x,0,0,.02,0,0,0,[1.05,.8,1.25]);{let P=Ce([[.125,0],[.105,.12],[.078,.25],[.045,.33],[0,.35]],6);N(W(P,r),x,0,0,.1,Math.PI/2-.08,0,0,[.72,1,.6])}let C=new zt;N(C,x,0,-.06,.06,.68,0,0);{let P=Ce([[.1,0],[.08,.12],[.05,.24],[.015,.3],[0,.31]],6);N(W(P,r),C,0,-.02,0,Math.PI/2,0,0,[.95,1,.4])}{let P=Ce([[.11,0],[.092,.12],[.066,.25],[.03,.32]],6);N(W(P,c),x,0,-.03,.1,Math.PI/2-.08,0,0,[.66,1,.3])}{let P=Ce([[.09,0],[.07,.12],[.042,.24],[.01,.29]],6);N(W(P,c),C,0,-.002,0,Math.PI/2,0,0,[.9,1,.3])}N(W(new Ct(.075,8,6),c),x,0,-.05,.08,0,0,0,[1,.8,1]),N(W(new Ct(1,8,6),h),C,0,.02,.11,0,0,0,[.046,.02,.11]);for(let P of[-1,1]){for(let $=0;$<6;$++){let _t=.15+$*.038,Pt=P*(.085-$*.011);N(W(new le(.005,.018,4),o),x,Pt*.82,-.058-$*.003,_t,Math.PI,0,0),N(W(new le(.0045,.016,4),o),C,P*(.048-$*.006),.022,.05+$*.04,0,0,0)}N(W(new Ne(.1,.035,.12),r),x,P*.085,.085,.12,.35,P*-.25,P*.5),N(W(new Ct(.03,8,6),c),x,P*.083,.05,.148,0,0,0,[1.3,.8,.8]),N(W(new Ct(.014,8,6),d),x,P*.085,.05,.168,0,0,P*.4,[1.5,.38,.7]);let G=new ci;G.moveTo(0,.02),G.lineTo(.11,.07),G.lineTo(.085,.015),G.lineTo(.125,-.02),G.lineTo(.08,-.035),G.lineTo(.1,-.085),G.lineTo(0,-.05);let st=new kn(G);N(W(st,l),x,P*.12,-.01,0,0,P<0?Math.PI+.75:-.75,P*.1,1.1),N(W(new le(.07,.22,5),r),x,P*.11,.13,-.05,-.3,0,P*-.9,[1,1,.5]),N(W(new le(.045,.14,5),r),x,P*.14,.04,-.06,-.3,0,P*-1.25,[1,1,.5])}N(W(new le(.085,.3,5),r),x,0,.21,-.05,-.3,0,0,[1,1,.5]),N(W(new Ct(1,8,5),r),x,0,.09,-.07,-.3,0,0,[.17,.09,.04]),N(W(new le(.03,.1,4),r),x,0,.07,.36,.5,0,0);let D={};for(let P of[-1,1]){let G=P<0,st=ve(G?"armR":"armL",b,P*.33,.6,0);i[G?"armR":"armL"]=st,st.scale.setScalar(1.15),N(W(new Ct(.12,8,6),r),st,0,0,0),N(W(qi(.3,.095,.078,8),r),st,0,0,0),N(W(new Ct(1,7,5),r),st,0,-.14,.05,0,0,0,[.105,.14,.105]);let $=ve(G?"foreR":"foreL",st,0,-.3,0);i[G?"foreR":"foreL"]=$,N(W(qi(.3,.085,.062,10),r),$,0,0,0),N(W(new Ct(1,7,5),r),$,0,-.08,-.02,0,0,0,[.095,.11,.09]);let _t=new zt;N(_t,$,0,-.3,.02,0,0,0,1.3),N(W(new Ct(1,12,10),r),_t,0,0,0,0,0,0,[.075,.065,.085]);for(let kt=0;kt<4;kt++){let Wt=new zt;N(Wt,_t,(kt-1.5)*.045*P,-.04,.04,-.3,0,(kt-1.5)*.22*P),N(W(qi(.06,.022,.018,8),r),Wt,0,0,0);let U=new zt;N(U,Wt,0,-.06,0,-.5,0,0),N(W(qi(.04,.018,.014,8),r),U,0,0,0),N(W(new le(.017,.1,5),o),U,0,-.075,0,Math.PI,0,0)}let Pt=new se;$.add(Pt);let Ht=new se;Ht.position.set(0,-.45,.05),$.add(Ht),D[G?"handR":"handL"]=[Pt,Ht]}for(let P of[-1,1]){let G=P<0,st=ve(G?"legR":"legL",p,P*.17,-.02,0);i[G?"legR":"legL"]=st,N(W(qi(.52,.19,.13,12),r),st,0,0,0,0,0,0,[1,1,1.3]),N(W(new Ct(1,10,8),r),st,P*.07,-.17,.06,0,0,0,[.15,.26,.2]);let $=ve(G?"shinR":"shinL",st,0,-.53,0);$.scale.setScalar(1.3),i[G?"shinR":"shinL"]=$;let _t=(Wt,U,_e,ce)=>{let R=new I(...Wt),y=new I(...U),V=R.distanceTo(y),J=new Fe(ce,_e,V,10);J.translate(0,V/2,0);let ot=W(J,r);ot.position.copy(R),ot.quaternion.setFromUnitVectors(new I(0,1,0),y.clone().sub(R).normalize()),$.add(ot)};N(W(new Ct(.13,10,8),r),$,0,0,0),_t([0,0,0],[0,-.27,-.15],.125,.085),N(W(new Ct(.09,10,8),r),$,0,-.27,-.15),_t([0,-.27,-.15],[0,-.46,.03],.085,.075),N(W(new Ct(1,8,6),r),$,0,-.13,-.11,0,0,0,[.1,.13,.09]),N(W(new le(.035,.16,6),o),$,0,-.27,-.24,-2,0,0);let Pt=new zt;N(Pt,$,0,-.47,.05,-.45,0,P*-.42),N(W(new Ct(1,10,6),r),Pt,0,0,.08,0,0,0,[.16,.075,.23]);for(let Wt=0;Wt<4;Wt++){let U=(Wt-1.5)*.075;N(W(new Ct(1,10,8),r),Pt,U,-.01,.27,0,0,0,[.04,.04,.08]),N(W(new le(.036,.15,5),o),Pt,U,-.025,.37,Math.PI/2+.3,0,0)}let Ht=new se;$.add(Ht);let kt=new se;kt.position.set(0,-.5,.2),$.add(kt),D[G?"footR":"footL"]=[Ht,kt]}D.tail=[new se,new se],p.add(D.tail[0]),p.add(D.tail[1]),D.tail[0].position.set(0,0,-.5),D.tail[1].position.set(0,-.3,-1.6);let H=P=>.16*P*P,z=new ci,F=[0,0],q=[.3,.36],Q=[.62,.58],Y=[1.45,.56],mt=[2.1,-.2],nt=[1.4,-.48],lt=[.9,-.2],ut=[.58,-.06],Yt=[.2,-.06],Ut=(P,G)=>[(P[0]+G[0])/2*.55+Q[0]*.45,(P[1]+G[1])/2*.55+Q[1]*.45];z.moveTo(...F),z.lineTo(...q),z.lineTo(...Q),z.quadraticCurveTo(...Y,...mt);for(let[P,G]of[[mt,nt],[nt,lt],[lt,ut],[ut,Yt]])z.quadraticCurveTo(...Ut(P,G),...G);z.lineTo(...F);let ie=new kn(z,10),ne=ie.attributes.position;for(let P=0;P<ne.count;P++){let G=ne.getX(P),st=ne.getY(P);ne.setZ(P,H(G)-.08*Math.sin(Math.min(1,Math.hypot(G-Q[0],st-Q[1])/1.2)*Math.PI))}ie.computeVertexNormals();let de=(P,G,st,$,_t)=>{let Pt=new I(P[0],P[1],H(P[0])),Ht=new I(G[0],G[1],H(G[0])),kt=Pt.distanceTo(Ht),Wt=new Fe($,st,kt,7);Wt.translate(0,kt/2,0);let U=new At(Wt,r);U.position.copy(Pt),U.quaternion.setFromUnitVectors(new I(0,1,0),Ht.clone().sub(Pt).normalize()),_t.add(U)},it=[];for(let P of[-1,1]){let G=P<0?"earR":"earL",st=ve(G,b,P*.14,.64,-.2);s[G]=[-.3,P*-.3,P*-.05],st.rotation.set(...s[G]),i[G]=st;let $=new zt;$.userData.keep=!0,$.scale.set(P*1.35,1.3,1.3),st.add($),$.add(gi(ie,u,f)),de(F,q,.055,.045,$),de(q,Q,.045,.035,$);let _t=[(Q[0]+2*Y[0]+mt[0])/4,(Q[1]+2*Y[1]+mt[1])/4];de(Q,_t,.032,.022,$),de(_t,mt,.022,.01,$);for(let Pt of[nt,lt,ut])de(Q,Pt,.028,.01,$);N(W(new le(.035,.14,6),o),$,Q[0],Q[1]+.06,H(Q[0]),0,0,0),it.push($)}Vn(e);let ht={j:i,base:s,hipY:Xc,flare:0},Tt=new se;Tt.position.set(0,-.06,.34),x.add(Tt);let tt=Tt,rt=Rs(0,null,1.5),yt=0,bt=0;return{root:e,rig:ht,trails:D,worldObjects:[],orbPoint:tt,mouth:Tt,shadow:rt,height:2.25,headY:2.7,trailColor:n?7330047:16752704,update(P,G){yt+=P;let st=E.rotation.x,$=E.rotation.y,_t=e.rotation.y,Pt=(G.vx||0)*Math.sin(_t);w.update(st+Math.min(.4,Math.abs(Pt)*2),$,yt);let Ht=G.air?G.vy>.02?1:.4:0;bt+=(Ht-bt)*.1;let kt=Math.sin(yt*14)*.45*bt;it[0].rotation.z=-kt,it[1].rotation.z=kt},setFlash(P,G){g.forEach((st,$)=>{st.emissive.copy(v[$]),G>0&&st.emissive.lerp(P,G*.8)}),w.mat.emissive.setRGB(0,0,0),G>0&&w.mat.emissive.copy(P).multiplyScalar(G*.8)},dispose(){as(e)}}}var Pf,Xc,F0,Df=Ye(()=>{Ei();Js();ao();Js();Pf=[{red:9311500,dark:5638662,belly:12622416,membrane:10254914,claw:16051440,spike:16765482,frill:11042860,eye:6195758},{red:2375818,dark:1320534,belly:13030630,membrane:5933752,claw:15791359,spike:6285055,frill:9427199,eye:16765514}],Xc=1.26,F0=class{constructor(t,e=20,i=12){this.n=e,this.radial=i;let s=(e+1)*i;this.pos=new Float32Array(s*3);let r=new Float32Array(s*3),a=new gt(t.red),o=new gt(t.belly),l=new gt(t.dark),c=new gt;for(let f=0;f<=e;f++)for(let g=0;g<i;g++){let v=g/i*Math.PI*2,m=Math.cos(v)<-.35;c.copy(m?o:a),f%2===0&&c.lerp(l,m?.18:.25);let p=(f*i+g)*3;r[p]=c.r,r[p+1]=c.g,r[p+2]=c.b}let h=[];for(let f=0;f<e;f++)for(let g=0;g<i;g++){let v=f*i+g,m=f*i+(g+1)%i,p=v+i,b=m+i;h.push(v,m,p,m,b,p)}let d=new xe;this.attr=new He(this.pos,3),this.attr.setUsage(Za),d.setAttribute("position",this.attr),d.setAttribute("color",new He(r,3)),d.setIndex(h),this.geo=d,this.mat=new Be({vertexColors:!0,roughness:.6,metalness:.02,envMapIntensity:.45,flatShading:!0}),this.mesh=new At(d,this.mat),this.mesh.frustumCulled=!1,this.pts=Array.from({length:e+1},()=>new I),this.tip=new zt;let u=new Be({color:t.spike,emissive:new gt(t.spike).multiplyScalar(.35),roughness:.3,metalness:.2});for(let[f,g,v]of[[0,0,.42],[.55,.35,.34],[-.55,.35,.34],[.3,-.5,.28],[-.3,-.5,.28]]){let m=new At(new le(.035,v,5),u);m.geometry.translate(0,v/2,0),m.rotation.set(Math.PI/2+g*.6,f,0),this.tip.add(m)}this.tip.scale.setScalar(2),this._t=new I,this._n=new I,this._b=new I}update(t,e,i){let{n:s,pts:r}=this;for(let u=0;u<=s;u++){let f=u/s,g=Math.sin(i*2.2-f*4)*.08*f,v=e*f*1.6+g,m=1.95*f,p=.02-2.3*f+1.3*f*f+t*f*f*1.2;r[u].set(Math.sin(v)*m,p,-Math.cos(v)*m-.12)}let a=this._t,o=this._n,l=this._b,c=new I(0,1,0);for(let u=0;u<=s;u++){let f=u/s,g=r[Math.max(0,u-1)],v=r[Math.min(s,u+1)];a.subVectors(v,g).normalize(),o.crossVectors(a,c).normalize(),l.crossVectors(o,a).normalize();let m=.2*Math.pow(1-f,.9)+.018;u%2===1&&(m*=1.16);for(let p=0;p<this.radial;p++){let b=p/this.radial*Math.PI*2,w=Math.sin(b)*m,_=Math.cos(b)*m*.9,E=(u*this.radial+p)*3;this.pos[E]=r[u].x+o.x*w+l.x*_,this.pos[E+1]=r[u].y+o.y*w+l.y*_,this.pos[E+2]=r[u].z+o.z*w+l.z*_}}this.attr.needsUpdate=!0,this.geo.computeVertexNormals();let h=r[s],d=r[s-1];this.tip.position.copy(h),a.subVectors(h,d).normalize(),this.tip.quaternion.setFromUnitVectors(new I(0,0,1),a)}}});function Uf(n,t=1.1,e=.02){let i=n.model.mouth.getWorldPosition(n.battle.tmpV);n.battle.spawnProjectile(n,{x:i.x+n.facing*.15,y:i.y,vx:n.facing*(.24+Bt(0,.04)),vy:-.025+Bt(-e,e),r:.18,rMax:.72,dmg:t,ang:35,bkb:10,kbg:22,life:22,color:16738842,kind:"flame"})}var De,Lt,bi,un,Cs,B0,k0,O0,H0,Yr,hv,z0,Nf=Ye(()=>{Df();oo();ln();rs();De=(n,t,e,i,s,r,a,o,l,c={})=>({f:[n,t],x:e,y:i,r:s,dmg:r,ang:a,bkb:o,kbg:l,...c}),Lt={by:-.05,legR:[-.85,0,-.45],shinR:[1.3,0,0],legL:[-.8,0,.45],shinL:[1.25,0,0],torso:[.36,0,0],head:[-.3,0,0],armR:[-.25,0,-.95],foreR:[-.75,0,.55],armL:[-.25,0,.95],foreL:[-.75,0,-.55],wisp:[0,.36,0]},bi={legR:[-.8,0,-.2],shinR:[1.2,0,0],legL:[-.5,0,.2],shinL:[1,0,0],armR:[-.6,0,-.8],foreR:[-.8,0,0],armL:[-.6,0,.8],foreL:[-.8,0,0],torso:[.15,0,0],head:[-.2,0,0]},un={legR:[-1.3,0,-.2],shinR:[1.8,0,0],legL:[-1.2,0,.2],shinL:[1.7,0,0]},Cs={...Lt,armR:[-1.55,0,-.05],foreR:[0,0,0],torso:[.28,.45,0],bz:.15},B0={...Lt,armL:[-1.55,0,.05],foreL:[0,0,0],torso:[.28,-.45,0],bz:.15},k0={...Lt,armR:[.4,0,-.6],foreR:[-1.6,0,0],torso:[.1,-.4,0]},O0={...Lt,armR:[-2.9,0,-.25],foreR:[-.6,0,0],armL:[-2.9,0,.25],foreL:[-.6,0,0],torso:[-.2,0,0],head:[-.4,0,0],by:.21},H0={...Lt,armR:[-1,0,.25],foreR:[-.1,0,0],armL:[-1,0,-.25],foreL:[-.1,0,0],torso:[.6,0,0],head:[-.4,0,0],by:-.01,bz:.25},Yr={...Lt,torso:[-.15,0,0],head:[-.6,0,0],armR:[-.6,0,-1.1],armL:[-.6,0,1.1],earL:[0,0,.55],earR:[0,0,-.55]};hv={jab1:{total:20,next:"jab2",nextWin:[6,19],trail:"handR",trailF:[3,7],sfx:[3,"whoosh",.3],hit:[De(4,5,.95,1.3,.5,3,70,8,25)],anim:[[0,Lt],[2,k0],[5,Cs],[13,Cs],[20,Lt]]},jab2:{total:20,next:"jab3",nextWin:[6,19],trail:"handL",trailF:[3,7],sfx:[3,"whoosh",.3],hit:[De(4,5,.95,1.3,.5,4,70,8,25)],anim:[[0,Cs],[5,B0],[13,B0],[20,Lt]]},jab3:{total:32,trail:"handR",trailF:[4,10],sfx:[4,"whoosh",.6],hit:[De(6,8,.9,1.55,.62,6,50,50,80)],anim:[[0,B0],[4,{...Lt,armR:[.2,0,-.4],foreR:[-1.2,0,0],torso:[.3,-.3,0],by:.03}],[7,{...Lt,armR:[-2.5,0,-.2],foreR:[-.4,0,0],torso:[-.1,.4,0],by:.23}],[18,{...Lt,armR:[-2.3,0,-.2],torso:[-.05,.3,0]}],[32,Lt]]},ftilt:{total:34,trail:"handR",trailF:[7,12],sfx:[7,"whoosh",.7],hit:[De(9,11,1.3,1.25,.55,11,36,34,96),De(9,11,.7,1.25,.5,10,36,34,96)],anim:[[0,Lt],[6,k0],[10,{...Cs,legR:[-.8,0,-.18],shinR:[.8,0,0],legL:[.2,0,.18],by:.03,bz:.3}],[20,{...Cs,bz:.25}],[34,Lt]]},utilt:{total:32,trail:"handR",trailF:[6,12],sfx:[6,"whoosh",.6],hit:[De(7,12,0,0,.62,10,88,40,95,{path:[[.95,1.9],[-.6,2.2]]})],anim:[[0,Lt],[5,{...Lt,armR:[-.8,0,-.5],foreR:[-.3,0,0],torso:[.3,0,0]}],[9,{...Lt,armR:[-2.6,0,-.3],foreR:[-.2,0,0],torso:[-.1,.2,0],head:[-.5,0,0],by:.21}],[13,{...Lt,armR:[-3.1,0,-.1],foreR:[-.3,0,0],torso:[-.25,.2,0],head:[-.5,0,0],by:.21}],[32,Lt]]},dtilt:{total:30,alpha:.8,trail:"tail",trailF:[3,12],sfx:[4,"whoosh",.6],hit:[De(6,9,1.35,.25,.62,8,72,45,55),De(6,9,.6,.25,.5,8,72,45,55)],anim:[[0,{...Lt,by:-.04}],[3,{...Lt,by:-.09,body:[0,0,0],wisp:[-.4,0,0]}],[7,{...Lt,by:-.09,body:[0,Math.PI,0],wisp:[-.6,0,0],torso:[.5,0,0]}],[14,{...Lt,by:-.07,body:[0,Math.PI*2,0],wisp:[-.3,0,0]}],[30,{...Lt,body:[0,Math.PI*2,0]}]]},dashattack:{total:44,keepVel:!0,sfx:[7,"whoosh",.8],hit:[De(8,14,.9,1.1,.75,12,45,55,72),De(15,20,.85,1.1,.65,8,45,40,60)],onStart(n){n.vx=n.facing*.2},onFrame(n,t){t<=18?n.vx=oi(n.vx,n.facing*.16,.01):n.friction(2.2),t%4===0&&t<18&&n.battle.effects.dust(n.x,n.y,1,-n.facing)},anim:[[0,Lt],[8,{...Lt,torso:[.6,-.5,0],armL:[-1.2,0,.3],armR:[.3,0,-.6],legR:[.4,0,-.1],legL:[-.8,0,.1],shinL:[.8,0,0],bz:.25,head:[-.5,0,0]}],[24,{...Lt,torso:[.5,-.4,0],bz:.2}],[44,Lt]]},fsmash:{total:58,smash:!0,charge:{f:8,max:60},trail:"handR",trailF:[14,20],sfx:[15,"whoosh",1],hit:[De(17,19,1.35,.8,.8,19,36,40,100),De(17,19,.7,1.4,.6,16,36,38,98)],onFrame(n,t){t===18&&(n.battle.effects.ring(n.x+n.facing*1.4,n.y+.1,16752704,2.8,16),n.battle.effects.dust(n.x+n.facing*1.4,n.y,8,n.facing),n.battle.shakeCam(.12))},anim:[[0,Lt],[7,O0],[15,{...O0,torso:[-.3,0,0]}],[18,H0],[32,H0],[58,Lt]]},usmash:{total:54,smash:!0,charge:{f:7,max:60},sfx:[12,"whoosh",1],hit:[De(13,17,.25,2.35,.8,17,88,40,98),De(13,17,.3,1.7,.6,15,85,40,96)],onFrame(n,t){t===13&&n.battle.effects.sparkle(n.x+n.facing*.3,n.y+2.5,16760928,6,.4)},anim:[[0,Lt],[7,{...Lt,by:-.09,torso:[.7,0,0],head:[.5,0,0],legR:[-.8,0,-.2],shinR:[1.3,0,0],legL:[-.8,0,.2],shinL:[1.3,0,0]}],[13,{...Yr,by:.31,torso:[-.25,0,0],head:[-.9,0,0],legR:[0,0,-.1],shinR:[.1,0,0],legL:[0,0,.1],shinL:[.1,0,0]}],[26,{...Yr,torso:[-.2,0,0],head:[-.8,0,0]}],[54,Lt]]},dsmash:{total:56,smash:!0,charge:{f:7,max:60},alpha:.85,trail:"tail",trailF:[9,20],sfx:[10,"whoosh",1],hit:[De(11,14,1.5,.35,.72,15,32,38,98,{away:!0}),De(11,14,-1.5,.35,.72,15,32,38,98,{away:!0}),De(15,17,.9,.35,.6,12,32,34,92,{away:!0})],anim:[[0,Lt],[7,{...Lt,by:-.09,torso:[.4,0,0],wisp:[-.5,0,0]}],[11,{...Lt,by:-.09,body:[0,0,0],wisp:[-.6,0,0],torso:[.4,0,0]}],[17,{...Lt,by:-.09,body:[0,Math.PI*2,0],wisp:[-.6,0,0],torso:[.4,0,0]}],[30,{...Lt,body:[0,Math.PI*2,0]}],[56,{...Lt,body:[0,Math.PI*2,0]}]]},nair:{total:42,aerial:!0,landLag:10,acBefore:5,acAfter:32,alpha:.85,trail:"tail",trailF:[6,14],sfx:[6,"whoosh",.8],hit:[De(7,13,0,.9,1.4,11,45,30,90,{away:!0})],anim:[[0,bi],[6,{...un,armR:[-.4,0,-1.2],armL:[-.4,0,1.2],body:[0,0,0],wisp:[.3,0,0]}],[14,{...un,armR:[-.4,0,-1.2],armL:[-.4,0,1.2],body:[0,Math.PI*2,0],wisp:[.3,0,0]}],[42,{...bi,body:[0,Math.PI*2,0]}]]},fair:{total:40,aerial:!0,landLag:13,acBefore:4,acAfter:30,trail:"handR",trailF:[8,14],sfx:[9,"whoosh",.8],hit:[De(10,13,0,0,.7,13,40,32,95,{path:[[1,2],[1.25,.6]]})],anim:[[0,bi],[7,{...un,armR:[-2.9,0,-.3],foreR:[-.3,0,0],torso:[-.2,.3,0]}],[12,{...un,armR:[-.7,0,-.1],foreR:[-.1,0,0],torso:[.5,.3,0]}],[24,{...un,armR:[-.6,0,-.1],torso:[.4,.2,0]}],[40,bi]]},bair:{total:40,aerial:!0,landLag:12,acBefore:4,acAfter:30,trail:"tail",trailF:[6,13],sfx:[7,"whoosh",.9],hit:[De(8,11,-1.55,.9,.72,14,145,38,98),De(8,11,-.8,.9,.6,12,145,34,92)],anim:[[0,bi],[5,{...un,wisp:[-.6,.5,0],torso:[.2,.3,0]}],[9,{...un,wisp:[1.1,-.2,0],torso:[.45,-.4,0],head:[0,-.6,0]}],[18,{...un,wisp:[.9,0,0],torso:[.4,-.3,0]}],[40,bi]]},uair:{total:38,aerial:!0,landLag:10,acBefore:3,acAfter:28,trail:"handR",trailF:[6,12],sfx:[6,"whoosh",.7],hit:[De(7,11,0,0,.72,11,85,32,95,{path:[[.85,2.2],[-.85,2.2]]})],anim:[[0,bi],[5,{...un,armR:[-1.4,0,-.4],armL:[-1.4,0,.4]}],[9,{...un,armR:[-3,0,-.3],armL:[-3,0,.3],foreR:[-.3,0,0],foreL:[-.3,0,0],head:[-.6,0,0],body:[-.2,0,0]}],[20,{...un,armR:[-2.8,0,-.3],armL:[-2.8,0,.3]}],[38,bi]]},dair:{total:50,aerial:!0,landLag:22,acBefore:3,acAfter:40,trail:"footR",trailF:[10,18],sfx:[11,"whoosh",.9],hit:[De(12,16,.05,-.15,.62,15,270,30,90),De(17,26,.05,0,.55,9,65,25,70)],onFrame(n,t){t<11&&(n.gravMult=.3),t===12&&!n.grounded&&(n.vy=Math.min(n.vy,-.3))},onLand(n){n.battle.effects.ring(n.x,n.y+.1,16752704,2.2,14),n.battle.effects.dust(n.x,n.y,8,0),n.battle.shakeCam(.1)},anim:[[0,bi],[8,{...un,legR:[-1.6,0,-.1],shinR:[2.2,0,0],legL:[-1.6,0,.1],shinL:[2.2,0,0],armR:[-2.6,0,-.5],armL:[-2.6,0,.5],earL:[0,0,.5],earR:[0,0,-.5],by:.36}],[12,{legR:[.1,0,-.08],shinR:[.05,0,0],legL:[.1,0,.08],shinL:[.05,0,0],armR:[-2.8,0,-.6],armL:[-2.8,0,.6],torso:[-.1,0,0],head:[.2,0,0],earL:[0,0,.7],earR:[0,0,-.7],by:.11}],[26,{legR:[.05,0,-.08],legL:[.05,0,.08],armR:[-2.6,0,-.6],armL:[-2.6,0,.6],earL:[0,0,.5],earR:[0,0,-.5]}],[50,bi]]},neutralb:{total:30,charge:{f:8,max:80},fall:.45,landContinue:!0,alpha:.5,noChargeFlash:!0,onCharge(n){let t=n.model.mouth.getWorldPosition(n.battle.tmpV);n.battle.effects.spawn({x:t.x,y:t.y,z:.35,vx:n.facing*Bt(.18,.26),vy:Bt(-.035,0),life:12,size:.25,size1:.9,color:n.charge%2?16742938:16765008}),n.charge%4===0&&Uf(n),n.charge%12===0&&pt.fire()},onFrame(n,t){t===8&&pt.fire(),t>=8&&t<=16&&t%3===2&&Uf(n)},anim:[[0,Lt],[6,{...Lt,torso:[.05,0,0],head:[-.5,0,0],armR:[-.3,0,-.8],armL:[-.3,0,.8]}],[8,{...Lt,torso:[.3,0,0],head:[.05,0,0],bz:.12,armR:[-.4,0,-.9],armL:[-.4,0,.9]}],[18,{...Lt,torso:[.28,0,0],head:[0,0,0],bz:.1}],[30,Lt]]},sideb:{total:48,noGravity:[0,32],keepVel:!0,noDrift:!0,canLeaveGround:!0,ledgeGrab:10,landContinue:!0,hit:[De(9,30,.8,1.1,.82,13,40,55,75)],onStart(n){n.grounded||(n.sideBUsed=!0),n.vy=0},onFrame(n,t){let e=n.battle.effects;if(t<9)n.vx=oi(n.vx,0,.02),n.grounded||(n.vy=.004),t===4&&pt.fire();else if(t<=30){n.vx=n.facing*.3,n.vy=n.grounded?0:.02,t===9&&pt.whoosh(1);for(let i=0;i<2;i++)e.spawn({x:n.x+n.facing*Bt(0,.9),y:n.y+Bt(.5,1.7),z:.4,vx:-n.facing*.05,vy:.02,life:16,size:Bt(.4,.8),size1:.1,color:i?16734740:16765024})}else n.vx*=.85},anim:[[0,Lt],[8,{...Lt,torso:[.2,-.5,0],by:.01,armL:[-.4,0,.6],foreL:[-1.4,0,0]}],[10,{...Lt,torso:[.7,-.5,0],head:[-.6,0,0],armL:[-1.4,0,.3],foreL:[-.4,0,0],armR:[.4,0,-.5],legR:[.5,0,-.1],legL:[-.9,0,.1],shinL:[.8,0,0],earL:[0,0,-.3],earR:[0,0,.3],bz:.25}],[30,{...Lt,torso:[.7,-.5,0],head:[-.6,0,0],armL:[-1.4,0,.3],armR:[.4,0,-.5],earL:[0,0,-.3],earR:[0,0,.3],bz:.25}],[48,Lt]]},upb:{total:44,helpless:!0,helplessLag:24,ledgeGrab:14,noDrift:!0,keepVel:!0,noGravity:[4,26],hit:[De(5,10,0,1.2,1.15,8,80,60,70,{away:!0})],onStart(n){n.upBUsed=!0,n.vx*=.5},onFrame(n,t){t<4&&(n.vy=n.grounded?0:Math.max(n.vy,0)*.5),t===4&&(n.grounded=!1,n.surface=null,n.y+=.02,pt.whoosh(1),n.battle.effects.dust(n.x,n.y,8,0),n.battle.effects.ring(n.x,n.y+.4,16752704,2.4,14)),t>=4&&t<=26&&(n.vy=.34*(1-(t-4)/23)+.012,n.vx=oi(n.vx,n.input.stick.x*.11,.012),t%6===4&&pt.whoosh(.5)),t>26&&n.drift(.6)},anim:[[0,{...Lt,by:-.04}],[4,{...bi,earL:[0,0,.8],earR:[0,0,-.8],head:[-.5,0,0]}],[8,{...bi,earL:[0,0,-.6],earR:[0,0,.6],head:[-.5,0,0]}],[12,{...bi,earL:[0,0,.8],earR:[0,0,-.8]}],[16,{...bi,earL:[0,0,-.6],earR:[0,0,.6]}],[20,{...bi,earL:[0,0,.8],earR:[0,0,-.8]}],[24,{...bi,earL:[0,0,-.5],earR:[0,0,.5]}],[44,bi]]},downb:{total:48,landContinue:!0,alpha:.75,trail:"tail",trailF:[10,16],sfx:[11,"whoosh",1],hit:[De(14,16,1.3,.3,.8,13,80,60,70,{away:!0}),De(14,16,-1.3,.3,.8,13,80,60,70,{away:!0}),De(14,16,0,.5,.95,13,80,60,70,{away:!0})],onFrame(n,t){if(t===2&&n.grounded&&(n.vy=.13,n.grounded=!1,n.surface=null,n.y+=.02),t===12&&!n.grounded&&(n.vy=Math.min(n.vy,-.2)),t===14){let e=n.battle.effects;e.ring(n.x,n.y+.1,16752704,3.4,16),e.dust(n.x-1,n.y,6,-1),e.dust(n.x+1,n.y,6,1),n.battle.shakeCam(.18),pt.hit(.8)}},anim:[[0,{...Lt,by:-.04}],[5,{...bi,wisp:[1.3,0,0],body:[0,0,0]}],[12,{...bi,wisp:[1.3,0,0],body:[0,Math.PI,0]}],[15,{...Lt,wisp:[-.7,0,0],body:[0,Math.PI*2,0],by:-.09,torso:[.5,0,0]}],[30,{...Lt,body:[0,Math.PI*2,0]}],[48,{...Lt,body:[0,Math.PI*2,0]}]]},final:{total:110,fs:!0,intang:[0,110],noGravity:[0,110],noDrift:!0,keepVel:!0,onStart(n){n.vx=0,n.vy=0,n.battle.startCine(n,45)},onFrame(n,t){let e=n.battle;if(n.vx=0,n.grounded||(n.vy=0),t<45&&t%3===0){let i=n.model.mouth.getWorldPosition(e.tmpV);e.effects.sparkle(i.x,i.y,t%6?16744496:16769136,2,.4)}if(t===55&&(e.spawnProjectile(n,{x:n.x+n.facing*1.6,y:n.y+1.3,vx:n.facing*.42,vy:0,r:1.9,dmg:32,ang:38,bkb:110,kbg:92,life:90,color:16732176,core:16769136,kind:"fswave",fs:!0}),e.shakeCam(.5),pt.fsBoom(),pt.fire()),t>=50&&t<=80){let i=n.model.mouth.getWorldPosition(e.tmpV);e.effects.spawn({x:i.x+n.facing*.3,y:i.y,z:.4,vx:n.facing*Bt(.2,.35),vy:Bt(-.04,.04),life:22,size:Bt(.6,1.2),size1:2,color:t%2?16734740:16765024})}},anim:[[0,Lt],[25,Yr],[45,Yr],[52,{...Lt,torso:[.4,0,0],head:[.1,0,0],bz:.2,earL:[0,0,.3],earR:[0,0,-.3]}],[85,{...Lt,torso:[.35,0,0],bz:.15}],[110,Lt]]},grab:{total:34,hit:[De(7,8,.95,1.1,.55,0,0,0,0,{type:"grab"})],anim:[[0,Lt],[7,{...Lt,armR:[-1.5,0,.1],foreR:[0,0,0],armL:[-1.5,0,-.1],foreL:[0,0,0],torso:[.35,0,0],bz:.15}],[16,{...Lt,armR:[-1.4,0,.1],armL:[-1.4,0,-.1],torso:[.3,0,0]}],[34,Lt]]},dashgrab:{total:40,keepVel:!0,hit:[De(9,10,1.1,1.1,.6,0,0,0,0,{type:"grab"})],onFrame(n){n.friction(1.2)},anim:[[0,Lt],[9,{...Lt,armR:[-1.5,0,.1],foreR:[0,0,0],armL:[-1.5,0,-.1],foreL:[0,0,0],torso:[.45,0,0],bz:.2}],[22,{...Lt,armR:[-1.4,0,.1],armL:[-1.4,0,-.1],torso:[.4,0,0]}],[40,Lt]]},pummel:{total:18,pummelAt:6,pummelDmg:2,anim:[[0,{...Lt,armL:[-1.4,0,-.1],armR:[-1.4,0,.1]}],[6,{...Lt,armL:[-1.4,0,-.1],armR:[-1.4,0,.1],head:[.5,0,0],torso:[.4,0,0]}],[18,{...Lt,armL:[-1.4,0,-.1],armR:[-1.4,0,.1]}]]},fthrow:{total:34,throwAt:12,throwHit:{dmg:9,ang:40,bkb:70,kbg:70},hold:()=>[.95,.25],anim:[[0,{...Lt,armL:[-1.4,0,-.1]}],[8,k0],[12,{...Cs,bz:.3}],[34,Lt]]},bthrow:{total:40,throwAt:16,throwHit:{dmg:12,ang:140,bkb:60,kbg:90},hold:n=>{let t=Math.min(1,n/16);return[.95*Math.cos(Math.PI*t),.3+.7*Math.sin(Math.PI*t)]},anim:[[0,{...Lt,armL:[-1.4,0,-.1]}],[16,{...Lt,body:[0,Math.PI,0],armL:[-2.4,0,.3],armR:[-2.4,0,-.3],wisp:[.6,0,0]}],[24,{...Lt,body:[0,Math.PI*2,0]}],[40,{...Lt,body:[0,Math.PI*2,0]}]]},uthrow:{total:40,throwAt:14,throwHit:{dmg:10,ang:90,bkb:75,kbg:76},hold:n=>[.6-n*.03,.25+n*.14],onFrame(n,t){if(t>=15&&t<=26){let e=n.model.mouth.getWorldPosition(n.battle.tmpV);n.battle.effects.spawn({x:e.x,y:e.y+.1,z:.4,vy:.2,vx:Bt(-.03,.03),life:16,size:.5,size1:1.2,color:t%2?16734740:16765024})}},anim:[[0,{...Lt,armL:[-1.4,0,-.1]}],[14,{...Yr,armR:[-3,0,-.2],armL:[-3,0,.2]}],[40,Lt]]},dthrow:{total:40,throwAt:16,throwHit:{dmg:8,ang:80,bkb:60,kbg:42},hold:n=>[.95,Math.max(0,.25-n*.02)],onFrame(n,t){t===16&&(n.battle.effects.dust(n.x+n.facing*.9,n.y,8,0),n.battle.shakeCam(.08))},anim:[[0,{...Lt,armL:[-1.4,0,-.1]}],[10,O0],[16,H0],[40,Lt]]},getupattack:{total:32,intang:[0,9],alpha:.8,trail:"tail",trailF:[6,12],hit:[De(8,10,1.3,.35,.65,7,40,60,50,{away:!0}),De(8,10,-1.3,.35,.65,7,40,60,50,{away:!0})],anim:[[0,{...Lt,by:-.29}],[8,{...Lt,by:-.14,body:[0,0,0]}],[14,{...Lt,by:-.14,body:[0,Math.PI*2,0]}],[32,{...Lt,body:[0,Math.PI*2,0]}]]},ledgeattack:{total:36,intang:[0,10],trail:"handR",trailF:[8,14],sfx:[9,"whoosh",.6],hit:[De(10,13,1.2,.6,.7,8,40,60,50)],anim:[[0,{...Lt,by:-.14}],[10,{...Cs,bz:.3}],[20,Cs],[36,Lt]]}},z0={id:"dragon",name:"\u30C9\u30E9\u30B4\u30F3",en:"DRAGON",title:"\u7D05\u84EE\u306E\u7FFC\u7ADC",color:16734762,css:"#ff5a2a",desc:"\u92FC\u306E\u7B4B\u8089\u3068\u5DE8\u5927\u306A\u7FFC\u3092\u6301\u3064\u91CD\u91CF\u7D1A\u3002\u62F3\u3068\u5C3B\u5C3E\u306E\u91CD\u3044\u4E00\u6483\u3001\u706B\u708E\u30D6\u30EC\u30B9\u3067\u62BC\u3057\u5207\u308B\u3002",specials:["\u30D5\u30A1\u30A4\u30A2\u30D6\u30EC\u30B9\uFF08\u62BC\u3057\u3063\u3071\u306A\u3057\u3067\u5410\u304D\u7D9A\u3051\u308B\uFF09","\u30D5\u30EC\u30A4\u30E0\u30BF\u30C3\u30AF\u30EB\uFF08\u708E\u306E\u4F53\u5F53\u305F\u308A\uFF09","\u30A6\u30A3\u30F3\u30B0\u30E9\u30A4\u30BA\uFF08\u7FBD\u3070\u305F\u304D\u4E0A\u6607\uFF09","\u30C6\u30A4\u30EB\u30B9\u30E9\u30E0\uFF08\u5C3B\u5C3E\u306E\u53E9\u304D\u3064\u3051\uFF09"],stats:{weight:128,height:2.05,radius:.52,walkSpeed:.07,dashSpeed:.145,dashFrames:12,runSpeed:.128,traction:.012,airSpeed:.086,airAccel:.006,airFriction:.003,gravity:.0098,fallSpeed:.19,fastFall:.29,jumpV:.255,hopV:.16,djV:.24,airJumps:1,jumpsquat:5,rollSpeed:.12},grabHold:[.95,.25],buildModel:If,anims:As({idle:Lt,hipY:Xc,bob:.9,runExtra:()=>({armR:[.6,0,-.5],armL:[.6,0,.5],foreR:[-1.2,0,0],foreL:[-1.2,0,0],torso:[.5,0,0],head:[-.4,0,0],earL:[0,0,-.25],earR:[0,0,.25]}),override:{victory:n=>{let t=Math.min(1,n/30);return{...Yr,earL:[0,0,.55+Math.sin(n*.25)*.2*t],earR:[0,0,-.55-Math.sin(n*.25)*.2*t],armR:[-1.2*t,0,-1.2],armL:[-1.2*t,0,1.2]}}}}),moves:hv}});function Bf(n,t){return hn(256,t?512:256,(e,i,s)=>{e.fillStyle=n.redCss,e.fillRect(0,0,i,s),e.strokeStyle=n.goldCss,e.fillStyle=n.goldCss,e.lineWidth=i*.035,e.lineJoin="miter";let r=(o,l,c,h,d)=>{e.beginPath(),e.moveTo(o,l-h),e.lineTo(o+c,l),e.lineTo(o,l+h),e.lineTo(o-c,l),e.closePath(),d?e.fill():e.stroke()},a=s*(t?.52:.55);r(i/2,a-s*.1,i*.11,s*.1,!1),r(i/2,a+s*.08,i*.07,s*.06,!0),e.beginPath(),e.moveTo(i*.36,a-s*.02),e.lineTo(i*.5,a+s*.2),e.lineTo(i*.64,a-s*.02),e.stroke();for(let o of[-1,1]){let l=i/2+o*i*.33;e.beginPath(),e.moveTo(l,s*.3),e.bezierCurveTo(l-o*i*.14,s*.45,l+o*i*.12,s*.55,l-o*i*.04,s*.68),e.bezierCurveTo(l-o*i*.16,s*.76,l+o*i*.1,s*.8,l,s*.9),e.stroke(),r(l-o*i*.02,s*.5,i*.03,s*.025,!0)}})}function uv(){return hn(128,128,(n,t,e)=>{n.fillStyle="#9a9a9e",n.fillRect(0,0,t,e),n.strokeStyle="rgba(20,20,24,0.75)",n.lineWidth=2.5;for(let i=0;i<9;i++)for(let s=-1;s<9;s++){let r=s*16+(i%2?8:0),a=i*16;n.beginPath(),n.arc(r+8,a,9,.15,Math.PI-.15),n.stroke()}},{repeat:[3,3]})}function kf(n=0){let t=Ff[n%Ff.length],e=new zt,i={},s={},r=mi(t.skin,{rough:.7,metal:.02,env:.35}),a=mi(t.hair,{rough:.75,metal:.02,env:.25});a.flatShading=!0;let o=Gn(t.iron,{rough:.6,metal:.55,env:.6}),l=new Be({color:t.iron,map:uv(),roughness:.65,metalness:.5,envMapIntensity:.5}),c=Gn(t.gold,{rough:.5,metal:.65,env:.7}),h=mi(t.cloth,{rough:.9,metal:.02,env:.2}),d=mi(t.fur,{rough:1,metal:0,env:.15});d.flatShading=!0;let u=new Be({color:t.gem,roughness:.2,metalness:.2,envMapIntensity:1.2,emissive:new gt(t.gem).multiplyScalar(.35)}),f=hi(16734768,1.1),g=mi(t.red,{rough:.9,metal:0,env:.2,side:ke}),v=Bf(t,!0);v.flipY=!1;let m=new Be({map:v,roughness:.9,metalness:0,envMapIntensity:.2,side:Ze}),p=new Be({color:t.redIn,roughness:.95,metalness:0,envMapIntensity:.1,side:Vi}),b=new Be({map:Bf(t,!0),roughness:.9,metalness:0,envMapIntensity:.2,side:ke}),w=Gn(12106952,{rough:.2,metal:1,env:1.2}),_=[r,o,l,h,m,g],E=_.map(tt=>tt.emissive.clone()),S=(tt,rt,yt,bt,P=.04,G=0,st=0)=>{let $=new zt;N($,tt,rt,yt,bt,G,st,0),N(W(new Fe(P*1.45,P*1.45,P*.4,8),c),$,0,0,0,Math.PI/2,0,0),N(W(new Gi(P,0),u),$,0,0,P*.35,0,0,0,[1,1,.6])},A=(tt,rt,yt,bt,P=.022)=>N(W(new Gi(P,0),c),tt,rt,yt,bt),x=(tt,rt,yt,bt=.045)=>N(W(new ti(yt,bt,5,12),d),tt,0,rt,0,Math.PI/2,0,0),T=ve("body",e,0,qc,0);i.body=T;let C=ve("hips",T);i.hips=C;let D=ve("torso",C);i.torso=D,D.scale.setScalar(.88),N(W(new Ct(.3,16,12),h),C,0,.02,0,0,0,0,[1.05,.8,.9]),N(W(Ce([[.31,.22],[.325,.16],[.325,.08],[.31,.04]],24),o),C,0,0,0,0,0,0,[1,1,.88]);for(let tt of[.22,.04])N(W(new ti(.32,.012,5,28),c),C,0,tt,0,Math.PI/2,0,0,[1,.88,1]);for(let tt=0;tt<10;tt++){let rt=(tt+.5)/10*Math.PI*2;Math.abs(Math.sin(rt))<.25&&Math.cos(rt)>0||A(C,Math.sin(rt)*.33,.13,Math.cos(rt)*.29)}S(C,0,.13,.295,.055);for(let tt of[-1,1])N(W(new le(.04,.12,4),c),C,tt*.11,.13,.29,0,0,tt*1.57,[1,1,.4]);let H=(tt,rt,yt,bt)=>{let P=new es(bt,yt,1,4);P.translate(0,-yt/2,0);let G=new zt;N(G,C,0,.06,tt,rt?.08:-.08,rt,0),G.add(new At(P,b)),N(W(new Ne(bt*1.04,.05,.02),c),G,0,-yt-.02,0);for(let st of[-1,1])N(W(new Ne(.018,yt,.012),c),G,st*bt/2,-yt/2,.002)};H(.3,0,.72,.3),H(-.27,Math.PI,.5,.3);for(let tt of[-1,1]){let rt=new zt;N(rt,C,tt*.3,.06,.1,0,tt*1.1,tt*.12);let yt=new ci;yt.moveTo(-.14,0),yt.lineTo(.14,0),yt.lineTo(.16,-.36),yt.lineTo(0,-.52),yt.lineTo(-.16,-.36),yt.lineTo(-.14,0),N(W(new zi(yt,{depth:.03,bevelEnabled:!1}),o),rt,0,0,0);let bt=new ci;bt.moveTo(-.1,-.06),bt.lineTo(.1,-.06),bt.lineTo(.115,-.33),bt.lineTo(0,-.44),bt.lineTo(-.115,-.33),bt.lineTo(-.1,-.06);let P=bt.getPoints().map(G=>new I(G.x,G.y,.036));N(W(new is(new yn(P,!0,"catmullrom",0),24,.012,4,!0),c),rt,0,0,0),S(rt,0,-.2,.034,.035)}N(W(Ce([[.29,0],[.31,.14],[.345,.32],[.4,.5],[.42,.62],[.36,.73],[.22,.8],[.15,.82]],24),l),D,0,0,0,0,0,0,[1,1,.84]),N(W(new Ct(1,16,10),l),D,0,.56,.2,-.1,0,0,[.34,.2,.14]);for(let tt=-2;tt<=2;tt++){let rt=tt*.36;S(D,Math.sin(rt)*.36,.71-Math.cos(rt)*.1-(tt===0?.02:0),.14+Math.cos(rt)*.19,tt===0?.055:Math.abs(tt)===2?.05:.035,-.25,rt)}N(W(new ti(.34,.014,5,20,Math.PI*.6),c),D,0,.66,.05,Math.PI/2+.28,0,Math.PI*.2,[1,.95,1]),N(W(qi(.1,.13,.135,12),r),D,0,.88,0);for(let tt of[-1,1]){let rt=new zt;N(rt,D,tt*.5,.74,0,0,0,tt*-.18,.95);let yt=Ce([[.02,.1],[.2,.04],[.3,-.1]],4);yt.rotateY(Math.PI/4),N(W(yt,o),rt,0,0,0,0,0,0,[1.05,1,1.15]);let bt=Ce([[.3,-.1],[.32,-.14]],4);bt.rotateY(Math.PI/4),N(W(bt,c),rt,0,0,0,0,0,0,[1.05,1,1.15]);let P=Ce([[.18,-.1],[.27,-.22],[.28,-.26]],4);P.rotateY(Math.PI/4),N(W(P,o),rt,tt*.04,0,0,0,0,0,[1,1,1.1]);for(let[G,st]of[[.1,.12],[-.1,.12],[.1,-.12],[-.1,-.12],[.17,0]])A(rt,tt*G,.045-Math.abs(G)*.15,st,.026)}let z=new zt;z.userData.keep=!0,N(z,D,0,.78,-.2);let F=cn(24,14,(tt,rt,yt)=>{let bt=(tt-.5)*2.2,P=.46+.62*rt,G=rt>.85?.16*Math.abs(Math.sin(tt*Math.PI*12.5))*(rt-.85)/.15:0;yt.set(Math.sin(bt)*P,-2.1*rt+G+.04*Math.cos(bt)*(1-rt),-Math.cos(bt)*.1-.12*rt+.05*Math.sin(tt*Math.PI*5)*rt)});z.add(new At(F,m));let q=new At(F,p);q.userData.inner=!0,z.add(q),N(W(Ce([[.2,.76],[.23,.88],[.25,.99]],20,Math.PI*.45,Math.PI*1.1),g),D,0,0,-.03,0,0,0,[1.05,1,.9]),N(W(new Ct(1,14,8,0,Math.PI*2,0,Math.PI/2),g),D,0,.76,-.2,0,0,0,[.44,.1,.2]),N(W(new Ct(1,12,8),g),D,0,.6,-.27,0,0,0,[.36,.2,.08]);for(let[tt,rt]of[[-.3,.05],[0,.06],[.3,.05]])S(D,tt,.66-(tt===0?.06:0),-.36,rt,0,Math.PI);let Q=ve("head",D,0,.86,.03);i.head=Q;let Y=new zt;N(Y,Q,0,0,0,0,0,0,1.12),N(W(new Ct(.15,18,14),r),Y,0,.17,0,0,0,0,[.95,1.05,1.02]),N(W(Ce([[.07,-.03],[.115,.03],[.13,.12],[.125,.2]],12),r),Y,0,0,.015),N(W(new Ne(.21,.045,.07),r),Y,0,.215,.12,.4,0,0);for(let tt of[-1,1])N(W(new Ne(.085,.022,.03),a),Y,tt*.06,.222,.152,.3,0,tt*.36),N(W(new Ct(.024,8,6),hi(1313802)),Y,tt*.057,.183,.125,0,0,0,[1.4,.9,.6]),N(W(new Ct(.013,8,6),hi(15261904)),Y,tt*.057,.181,.138,0,0,tt*.3,[1.5,.7,.6]),N(W(new Ct(.006,6,5),hi(2099208)),Y,tt*.055,.181,.146),N(W(new le(.034,.08,5),r),Y,tt*.15,.2,-.01,-.5,0,tt*-.5,[1,1,.45]),N(W(new le(.045,.2,5),a),Y,tt*.13,.12,.03,Math.PI,0,tt*.12,[.7,1,1.2]);N(W(new le(.046,.17,4),r),Y,0,.16,.15,.6,Math.PI/4,0,[.85,1,1.4]);for(let tt of[-1,1])N(W(new Ne(.05,.01,.01),hi(1840144)),Y,tt*.022,.058,.13,0,0,tt*-.25);S(Y,0,.262,.148,.026,-.25),N(W(new le(.022,.05,4),c),Y,0,.305,.14,-.3,0,0,[1,1,.4]);for(let tt of[-1,1])N(W(new Ne(.1,.022,.014),c),Y,tt*.085,.262,.118,-.2,tt*.6,tt*-.12),A(Y,tt*.085,.262,.128,.016);N(W(new Ct(.165,10,8),a),Y,0,.245,-.075,0,0,0,[1.04,.95,1]);let mt=3,nt=()=>(mt=mt*16807%2147483647)/2147483647;for(let tt=0;tt<4;tt++)for(let rt=0;rt<6;rt++){let yt=(rt-2.5)/2.5,bt=.15+nt()*.06+(tt===1?.03:0);N(W(new le(.075,bt,5),a),Y,yt*(.115-tt*.005),.31+.05*(1-Math.abs(yt))-tt*.04,.02-tt*.07,-.3-tt*.45,0,yt*-.45)}let lt={},ut={};for(let tt of[-1,1]){let rt=tt<0,yt=ve(rt?"armR":"armL",D,tt*.47,.62,0);i[rt?"armR":"armL"]=yt,N(W(new Ct(.16,12,10),r),yt,0,0,0),N(W(qi(.34,.165,.13,12),r),yt,0,0,0),N(W(new Ct(1,10,8),r),yt,0,-.15,.05,0,0,0,[.15,.17,.14]);let bt=ve(rt?"foreR":"foreL",yt,0,-.36,0);i[rt?"foreR":"foreL"]=bt,N(W(Ce([[.14,0],[.15,-.08],[.135,-.22],[.11,-.32]],14),o),bt,0,0,0),x(bt,.02,.135,.05),N(W(new ti(.148,.012,5,18),c),bt,0,-.07,0,Math.PI/2,0,0),N(W(new ti(.114,.014,5,18),c),bt,0,-.31,0,Math.PI/2,0,0),S(bt,tt*.142,-.17,0,.04,0,tt*Math.PI/2),S(bt,0,-.17,.142,.032);let P=new zt;P.userData.joint=!0,N(P,bt,0,-.41,0),ut[tt]=P,N(W(new Ct(.125,12,10),r),P,0,0,.01,0,0,0,[1,1,.9]);for(let $=0;$<4;$++)N(W(new Ct(.038,6,5),r),P,($-1.5)*.056,-.09,.05);let G=new se;G.position.set(0,-.1,0),bt.add(G);let st=new se;st.position.set(0,-.55,0),bt.add(st),lt[rt?"handR":"handL"]=[G,st]}let Yt=ve("wep",ut[-1],0,0,0);i.wep=Yt;let Ut=new zt;Ut.userData.keep=!0,Ut.visible=!1,Yt.add(Ut);{let tt=(G,st,$,_t,Pt=0,Ht=0,kt=0)=>(N(G,Ut,st,$,_t,Pt,Ht,kt),G);tt(new At(new Fe(.03,.032,.36,8),o),0,0,-.04,Math.PI/2,0,0),tt(new At(new Gi(.055,0),u),0,0,-.25),tt(new At(new Ne(.08,.66,.1),c),0,0,.15);for(let G of[-1,1])tt(new At(new le(.055,.2,4),c),0,G*.38,.21,G>0?.6:Math.PI-.6,0,0);tt(new At(new Gi(.05,0),u),.045,0,.15),tt(new At(new Gi(.05,0),u),-.045,0,.15);let rt=new ci;rt.moveTo(.18,-.2),rt.lineTo(1.5,-.17),rt.lineTo(1.9,0),rt.lineTo(1.5,.17),rt.lineTo(.18,.2),rt.lineTo(.18,-.2);let yt=new zi(rt,{depth:.012,bevelEnabled:!0,bevelSize:.014,bevelThickness:.012,bevelSegments:1});yt.translate(0,0,-.006),tt(new At(yt,w),0,0,0,0,-Math.PI/2,0);let bt=new ci;bt.moveTo(.2,-.06),bt.lineTo(1.4,-.045),bt.lineTo(1.55,0),bt.lineTo(1.4,.045),bt.lineTo(.2,.06),bt.lineTo(.2,-.06);let P=new Be({color:2762288,roughness:.35,metalness:.8,side:ke});for(let G of[-1,1])tt(new At(new kn(bt),P),G*.0195,0,0,0,-Math.PI/2,0)}let ie=new se;ie.position.set(0,0,.4),Yt.add(ie);let ne=new se;ne.position.set(0,0,1.85),Yt.add(ne),lt.sword=[ie,ne];for(let tt of[-1,1]){let rt=tt<0,yt=ve(rt?"legR":"legL",C,tt*.19,-.02,0);i[rt?"legR":"legL"]=yt,N(W(qi(.58,.21,.16,12),h),yt,0,0,0);let bt=ve(rt?"shinR":"shinL",yt,0,-.62,0);i[rt?"shinR":"shinL"]=bt;let P=Ce([[.02,.2],[.17,.02],[.02,-.16]],4);P.rotateY(Math.PI/4),N(W(P,o),bt,0,.02,.12,0,0,0,[1,1,.45]);let G=Ce([[.17,.02],[.19,.02]],4);G.rotateY(Math.PI/4),N(W(G,c),bt,0,.02,.12,0,0,0,[1,6,.45]),S(bt,0,.03,.2,.042),x(bt,-.02,.17,.06),N(W(Ce([[.17,-.02],[.18,-.16],[.155,-.44],[.15,-.6]],14),o),bt,0,0,0);for(let Pt of[-.2,-.42])N(W(new ti(.172-(Pt<-.3?.014:0),.016,5,18),c),bt,0,Pt,0,Math.PI/2,0,0);x(bt,-.58,.15,.045);let st=new zt;N(st,bt,0,-.67,.03),N(W(new Ct(1,12,8),o),st,0,.01,.08,0,0,0,[.165,.1,.27]),N(W(new Ct(1,10,6,0,Math.PI*2,0,Math.PI/2),c),st,0,-.03,.3,Math.PI/2-.5,0,0,[.12,.07,.07]),N(W(new ti(.15,.018,5,16,Math.PI),c),st,0,-.01,.1,0,0,0,[1.1,.75,1]),N(W(new Ne(.3,.035,.5),o),st,0,-.085,.1);let $=new se;bt.add($);let _t=new se;_t.position.set(0,-.75,.25),bt.add(_t),lt[rt?"footR":"footL"]=[$,_t]}Vn(e);let de={j:i,base:s,hipY:qc,flare:0},it=new se;it.position.set(0,.5,.9),T.add(it);let ht=Rs(0,null,1.4),Tt=0;return{root:e,rig:de,trails:lt,worldObjects:[],orbPoint:it,shadow:ht,hands:ut,height:2.4,headY:2.85,trailColor:n?6336767:11550975,update(tt,rt){Tt+=tt;let yt=e.rotation.y,bt=(rt.vx||0)*Math.sin(yt),P=Math.max(-.1,Math.min(.9,bt*4+(rt.vy<0?-rt.vy*2.2:0)))+Math.sin(Tt*2.4)*.02;z.rotation.x+=(P-z.rotation.x)*.12},setSword(tt){Ut.visible=tt},setFlash(tt,rt){_.forEach((yt,bt)=>{yt.emissive.copy(E[bt]),rt>0&&yt.emissive.lerp(tt,rt*.8)})},dispose(){as(e)}}}var Ff,qc,Of=Ye(()=>{Ei();Js();ao();Ff=[{skin:4869182,hair:10102802,iron:2894896,gold:10122272,red:5378066,redIn:3541516,gem:13637672,fur:8156264,cloth:2763308,goldCss:"#a07c34",redCss:"#521012"},{skin:5659238,hair:14211300,iron:2107452,gold:11844808,red:1846374,redIn:923192,gem:4247807,fur:10133680,cloth:1843248,goldCss:"#c0c8d8",redCss:"#1c2c66"}],qc=1.48});function Ni(n,t,e,i=1,s=.6){for(let r=0;r<i;r++)n.battle.effects.spawn({x:t+Bt(-.25,.25),y:e+Bt(-.25,.25),z:.4,vx:Bt(-.03,.03),vy:Bt(.01,.06),life:18,size:Bt(s*.6,s),size1:.1,color:r%2?dn:W0})}function co(n,t=-1){return n.model.hands[t].getWorldPosition(n.battle.tmpV)}function Gf(n,t){let e=n.grabbing;e&&(e.damage=Math.min(999,e.damage+t),n.stats.dealt+=t,e.stats.taken+=t,e.flashT=6,n.battle.app.hud.bump(e.slot),n.battle.effects.hitSpark(e.x,e.y+e.height*.6,dn,.3),pt.hit(.3))}var me,dn,W0,Mt,Oe,Hf,zf,Vf,G0,V0,dv,X0,Wf=Ye(()=>{Ei();Of();oo();ln();rs();me=(n,t,e,i,s,r,a,o,l,c={})=>({f:[n,t],x:e,y:i,r:s,dmg:r,ang:a,bkb:o,kbg:l,...c}),dn=11550975,W0=5905050,Mt={legR:[-.1,0,-.1],shinR:[.18,0,0],legL:[.04,0,.1],shinL:[.14,0,0],torso:[.12,0,0],head:[-.06,0,0],armR:[.05,0,-.32],foreR:[-.35,0,.1],armL:[.05,0,.32],foreL:[-.35,0,-.1]},Oe={legR:[-.5,0,-.12],shinR:[.8,0,0],legL:[.15,0,.12],shinL:[.5,0,0],armR:[-.3,0,-.6],foreR:[-.7,0,0],armL:[-.3,0,.6],foreL:[-.7,0,0],torso:[.1,0,0]},Hf={...Mt,armR:[-3.3,0,-.15],foreR:[-.2,0,0],wep:[1.3,0,0],torso:[-.25,.2,0],armL:[-.5,0,.5],legR:[.2,0,-.15],legL:[-.3,0,.15],shinL:[.3,0,0]},zf={...Mt,armR:[-.95,0,-.05],foreR:[-.1,0,0],wep:[1.57,0,0],torso:[.55,.3,0],armL:[.3,0,.5],legR:[.4,0,-.15],shinR:[.3,0,0],legL:[-.8,0,.15],shinL:[.9,0,0],by:-.08,bz:.25};Vf=n=>n.vars.air?n.vars.rev?40:38:n.vars.rev?37:30,G0={onStart(n){n.model.setSword(!0)},onEnd(n){n.model.setSword(!1)}},V0=class{constructor(t,e,i,s){this.b=t,this.x=e,this.y=i,this.dir=s,this.t=0,this.vx=0;let r=new zt,a=new Be({color:1841706,roughness:.7,metalness:.2,emissive:2099256}),o=new Be({color:13783068,roughness:.6,emissive:4198400}),l=new Be({color:15788240,roughness:.4}),c=new Se({color:16764992}),h=(d,u,f,g,v,m=0,p=0,b=0,w=null)=>{let _=new At(d,u);return _.position.set(f,g,v),_.rotation.set(m,p,b),w&&_.scale.set(...w),r.add(_),_};h(new Ct(1,16,12),a,0,2.4,0,0,0,0,[2,1.9,1.6]),h(new Ct(1,14,10),a,1.9,2.9,0,0,0,0,[1.1,1,1]),h(new Ct(1,12,8),a,2.9,2.5,0,0,0,0,[.8,.6,.7]);for(let d of[-1,1])h(new le(.22,1.3,6),l,2.9,2.7,d*.6,0,0,-.9),h(new le(.3,1.6,6),l,1.6,4,d*.7,d*.5,0,-.5),h(new Ct(.14,8,6),c,2.55,3.2,d*.55),h(new Fe(.5,.42,2.2,8),a,.9,1,d*.9),h(new Fe(.55,.45,2,8),a,-1.1,.9,d*.9),h(new Ne(.16,3.6,.5),new Be({color:12106952,metalness:1,roughness:.2}),2.4,3.6,d*1.7,0,0,-.7);for(let d=0;d<7;d++)h(new le(.4,1.4,5),o,1.2-d*.45,4.1-d*.12,0,0,0,.5+d*.1);r.scale.set(.01,.01,.01),this.mesh=r,t.scene.add(r)}update(){this.t++,this.x+=this.vx;let t=Math.min(1,this.t/14);this.mesh.scale.set(this.dir*t,t,t),this.mesh.position.set(this.x,this.y+(this.vx?Math.abs(Math.sin(this.t*.6))*.3:0),0),this.t%2===0&&this.b.effects.spawn({x:this.x+Bt(-2,2),y:this.y+Bt(.5,4.5),z:.8,vy:.05,life:20,size:Bt(.8,1.6),size1:.2,color:this.t%4?dn:W0})}remove(){this.dead||(this.dead=!0,this.b.scene.remove(this.mesh),this.mesh.traverse(t=>{t.geometry&&t.geometry.dispose(),t.material&&t.material.dispose()}))}},dv={jab1:{total:34,trail:"handR",trailF:[5,10],sfx:[6,"whoosh",.5],hit:[me(8,10,1.15,1.45,.5,11,361,30,100),me(8,10,.6,1.45,.45,8,361,30,90)],onFrame(n,t){if(t>=7&&t<=11){let e=co(n);Ni(n,e.x,e.y,1,.4),n.battle.effects.sparkle(e.x,e.y,13676799,1,.3)}},anim:[[0,Mt],[5,{...Mt,armR:[.3,0,-.5],foreR:[-1.6,0,0],torso:[.05,-.4,0]}],[8,{...Mt,armR:[-1.55,0,-.05],foreR:[0,0,0],torso:[.15,.45,0],bz:.12,legL:[-.3,0,.14],shinL:[.3,0,0]}],[18,{...Mt,armR:[-1.5,0,-.05],torso:[.12,.4,0],bz:.1}],[34,Mt]]},ftilt:{total:39,trail:"footR",trailF:[8,13],sfx:[9,"whoosh",.7],hit:[me(10,12,1.45,1.15,.5,14,30,30,96),me(10,12,.8,1.15,.5,13,30,28,94)],anim:[[0,Mt],[6,{...Mt,legR:[-1.2,0,-.1],shinR:[1.8,0,0],torso:[-.15,0,0],armR:[.3,0,-.5],armL:[-.4,0,.6]}],[10,{...Mt,legR:[-1.5,0,-.05],shinR:[.05,0,0],torso:[-.3,0,0],armR:[.5,0,-.6],armL:[-.3,0,.7],bz:.1}],[20,{...Mt,legR:[-1.4,0,-.05],shinR:[.2,0,0],torso:[-.25,0,0]}],[39,Mt]]},utilt:{total:112,trail:"footR",trailF:[56,64],hit:[me(60,62,1.1,.5,1.15,24,70,40,92,{shield:40}),me(60,62,1,1.6,.8,24,70,40,92,{shield:40})],onFrame(n,t){let e=n.battle.effects;if(t>=12&&t<58){t%4===0&&e.spawn({x:n.x+n.facing*Bt(1.5,3.5),y:n.y+Bt(.2,1.6),z:.3,vx:-n.facing*.1,vy:.01,life:14,size:.3,size1:.05,color:13680895});for(let i of n.battle.fighters){if(i===n||!i.alive||i.state==="grabbed"||i.state==="ledge")continue;let s=(i.x-n.x)*n.facing;s>.3&&s<4&&Math.abs(i.y-n.y)<1.5&&(i.x-=n.facing*.012)}}if(t===56&&pt.whoosh(1),t===60){let i=n.x+n.facing*1.15;e.ring(i,n.y+.1,dn,4.2,18),e.dust(i,n.y,10,0),Ni(n,i,n.y+.6,10,1.4),n.battle.shakeCam(.3),pt.fsBoom&&pt.hit(1)}},anim:[[0,Mt],[14,{...Mt,legR:[-2.2,0,-.1],shinR:[.6,0,0],torso:[-.2,0,0],armR:[.4,0,-.6],armL:[.3,0,.7],legL:[.1,0,.14]}],[55,{...Mt,legR:[-2.75,0,-.1],shinR:[.1,0,0],torso:[-.3,0,0],armR:[.5,0,-.7],armL:[.3,0,.8],legL:[.12,0,.14]}],[60,{...Mt,legR:[-.9,0,-.05],shinR:[.1,0,0],torso:[.35,0,0],legL:[.1,0,.14],shinL:[.5,0,0],by:-.05}],[84,{...Mt,legR:[-.8,0,-.05],shinR:[.3,0,0],torso:[.3,0,0],by:-.05}],[112,Mt]]},dtilt:{total:35,trail:"footR",trailF:[8,13],sfx:[9,"whoosh",.6],hit:[me(10,12,1.5,.3,.5,14,80,50,60),me(10,12,.8,.3,.48,14,80,50,60)],anim:[[0,{...Mt,by:-.18,legL:[-1.2,0,.2],shinL:[2,0,0],legR:[-1.2,0,-.2],shinR:[2,0,0],torso:[.4,0,0]}],[10,{...Mt,by:-.23,legL:[-1.3,0,.2],shinL:[2.2,0,0],legR:[-1.5,0,-.05],shinR:[.05,0,0],torso:[.1,0,0],armL:[.6,0,.5],armR:[.4,0,-.6]}],[20,{...Mt,by:-.23,legL:[-1.3,0,.2],shinL:[2.2,0,0],legR:[-1.45,0,-.05],shinR:[.2,0,0],torso:[.15,0,0]}],[35,Mt]]},dashattack:{total:39,keepVel:!0,sfx:[9,"whoosh",.8],hit:[me(10,13,.9,1.2,.72,15,60,70,60),me(14,19,.85,1.2,.62,11,60,55,55)],onStart(n){n.vx=n.facing*.19},onFrame(n,t){t<=18?n.vx=oi(n.vx,n.facing*.15,.01):n.friction(2.4),t%4===0&&t<18&&n.battle.effects.dust(n.x,n.y,1,-n.facing)},anim:[[0,Mt],[9,{...Mt,torso:[.5,-.6,0],armL:[-.6,0,.2],foreL:[-1.6,0,0],armR:[.5,0,-.5],legR:[.5,0,-.1],legL:[-.9,0,.1],shinL:[.9,0,0],bz:.25,by:-.05,head:[-.3,.5,0]}],[22,{...Mt,torso:[.45,-.5,0],armL:[-.6,0,.2],foreL:[-1.6,0,0],bz:.2,by:-.05}],[39,Mt]]},fsmash:{total:78,smash:!0,charge:{f:12,max:60},trail:"sword",trailF:[26,36],sfx:[28,"whoosh",1],...G0,hit:[me(31,34,0,0,.75,24,45,30,100,{path:[[.6,3],[2.1,.5]]}),me(31,34,0,0,.6,24,45,30,100,{path:[[.3,2],[1.2,.6]]})],onFrame(n,t){t===34&&(n.battle.effects.dust(n.x+n.facing*2,n.y,8,n.facing),n.battle.shakeCam(.18))},anim:[[0,{...Mt,wep:[1.3,0,0]}],[12,Hf],[28,{...Hf,torso:[-.35,.25,0]}],[34,zf],[52,zf],[78,Mt]]},usmash:{total:59,smash:!0,charge:{f:9,max:60},trail:"sword",trailF:[17,30],sfx:[19,"whoosh",1],...G0,hit:[me(20,28,0,0,.75,24,80,30,96,{path:[[2,1],[-1.6,2.6]]}),me(20,28,0,0,.7,21,80,30,94,{path:[[1,1.4],[-.6,2.4]]}),me(22,26,.2,3.3,.8,24,85,30,96)],anim:[[0,{...Mt,wep:[1.57,0,0]}],[9,{...Mt,armR:[-.5,0,-.2],foreR:[-.3,0,0],wep:[1.57,0,0],torso:[.35,.3,0],by:-.07}],[19,{...Mt,armR:[-1.2,0,-.1],foreR:[0,0,0],wep:[1.57,0,0],torso:[.2,.2,0]}],[24,{...Mt,armR:[-2.9,0,-.1],foreR:[0,0,0],wep:[1.57,0,0],torso:[-.4,0,0],head:[-.5,0,0],legL:[-.4,0,.1],shinL:[.4,0,0]}],[29,{...Mt,armR:[-4.3,0,-.1],foreR:[0,0,0],wep:[1.57,0,0],torso:[-.3,-.2,0]}],[42,{...Mt,armR:[-4.2,0,-.1],wep:[1.57,0,0],torso:[-.25,-.2,0]}],[59,Mt]]},dsmash:{total:62,smash:!0,charge:{f:6,max:60},trail:"sword",trailF:[12,40],...G0,hit:[me(15,17,1.7,.6,.6,5,150,60,20,{group:0}),me(15,17,.9,.7,.55,5,150,60,20,{group:0}),me(35,38,-1.8,.7,.7,15,140,40,96,{group:1}),me(35,38,-.9,.8,.6,15,140,40,96,{group:1})],onFrame(n,t){(t===14||t===33)&&pt.whoosh(.9)},anim:[[0,{...Mt,wep:[1.57,0,0]}],[8,{...Mt,armR:[.3,0,-.3],foreR:[-1.3,0,0],wep:[1.57,0,0],torso:[.3,-.3,0],by:-.09}],[15,{...Mt,armR:[-1.15,0,-.05],foreR:[0,0,0],wep:[1.57,0,0],torso:[.5,.3,0],by:-.14,bz:.2,legL:[-.9,0,.14],shinL:[1.2,0,0],legR:[.4,0,-.14]}],[26,{...Mt,armR:[-.9,0,-.4],foreR:[-.6,0,0],wep:[1.57,0,0],torso:[.3,-.2,0],by:-.11}],[35,{...Mt,armR:[1.25,0,-.25],foreR:[0,0,0],wep:[1.57,0,0],torso:[.25,-.9,0],head:[0,-.7,0],by:-.14,legR:[-.8,0,-.14],shinR:[1.1,0,0],legL:[.4,0,.14]}],[46,{...Mt,armR:[1.15,0,-.25],wep:[1.57,0,0],torso:[.25,-.8,0],by:-.13}],[62,Mt]]},nair:{total:43,aerial:!0,landLag:11,acBefore:4,acAfter:36,trail:"footR",trailF:[5,24],hit:[me(7,9,.95,.9,.55,7,70,30,30,{group:0}),me(20,23,1.05,.95,.62,12,45,40,90,{group:1})],onFrame(n,t){(t===6||t===19)&&pt.whoosh(.6)},anim:[[0,Oe],[7,{...Oe,legR:[-1.4,0,-.05],shinR:[.1,0,0],torso:[-.2,0,0]}],[14,{...Oe,legR:[-.2,0,-.1],shinR:[1,0,0],legL:[-1,0,.1],shinL:[1.6,0,0]}],[20,{...Oe,legL:[-1.45,0,.05],shinL:[.1,0,0],legR:[.3,0,-.1],torso:[-.25,0,0]}],[30,{...Oe,legL:[-1.3,0,.05],shinL:[.3,0,0]}],[43,Oe]]},fair:{total:44,aerial:!0,landLag:16,acBefore:4,acAfter:37,trail:"handR",trailF:[11,18],sfx:[13,"whoosh",.9],hit:[me(14,17,0,0,.72,18,45,35,96,{path:[[.9,2.3],[1.3,.8]]})],anim:[[0,Oe],[10,{...Oe,armR:[-3.2,0,-.2],foreR:[-.5,0,0],torso:[-.25,.3,0]}],[15,{...Oe,armR:[-1,0,-.05],foreR:[0,0,0],torso:[.45,.35,0]}],[26,{...Oe,armR:[-.8,0,-.05],torso:[.4,.3,0]}],[44,Oe]]},bair:{total:34,aerial:!0,landLag:11,acBefore:4,acAfter:26,trail:"handR",trailF:[7,13],sfx:[9,"whoosh",.8],hit:[me(10,13,-1.25,1.45,.6,18.5,140,35,96),me(10,13,-.6,1.45,.5,17,140,35,94)],anim:[[0,Oe],[6,{...Oe,armR:[-1.3,0,.6],foreR:[-1.4,0,0],torso:[.1,.4,0]}],[10,{...Oe,armR:[1.5,0,-.2],foreR:[0,0,0],torso:[0,-1,0],head:[0,-.7,0]}],[18,{...Oe,armR:[1.4,0,-.2],torso:[0,-.9,0]}],[34,Oe]]},uair:{total:31,aerial:!0,landLag:10,acBefore:3,acAfter:26,trail:"footR",trailF:[4,16],sfx:[5,"whoosh",.7],hit:[me(6,9,0,0,.7,13,70,30,96,{path:[[1.1,1.6],[.2,2.9]]}),me(10,16,0,0,.65,8,172,30,55,{path:[[.1,2.9],[-1.1,1.5]]})],anim:[[0,Oe],[5,{body:[.5,0,0],legR:[-1.5,0,-.05],shinR:[.1,0,0],legL:[-.2,0,.1],shinL:[.8,0,0],armR:[.3,0,-.8],armL:[.3,0,.8]}],[16,{body:[-2.6,0,0],legR:[-1.5,0,-.05],shinR:[.1,0,0],legL:[-.2,0,.1],shinL:[.8,0,0],armR:[.3,0,-.8],armL:[.3,0,.8]}],[31,{...Oe,body:[-Math.PI*2,0,0]}]]},dair:{total:47,aerial:!0,landLag:17,acBefore:3,acAfter:38,trail:"footR",trailF:[13,20],sfx:[15,"whoosh",1],hit:[me(16,19,.05,-.1,.72,19,270,30,96)],onFrame(n,t){t>=16&&t<=19&&(Ni(n,n.x,n.y,2,.5),n.battle.effects.sparkle(n.x,n.y,13676799,1,.4))},anim:[[0,Oe],[12,{legR:[-1.7,0,-.08],shinR:[2.3,0,0],legL:[-1.7,0,.08],shinL:[2.3,0,0],armR:[-.4,0,-1],armL:[-.4,0,1],torso:[.3,0,0],by:.2}],[16,{legR:[-.25,0,-.04],shinR:[.3,0,0],legL:[-.25,0,.04],shinL:[.3,0,0],armR:[-.2,0,-1.5],armL:[-.2,0,1.5],foreR:[0,0,0],foreL:[0,0,0],torso:[.25,0,0],head:[.3,0,0]}],[28,{legR:[.05,0,-.06],legL:[.05,0,.06],armR:[-.5,0,-1.1],armL:[-.5,0,1.1]}],[47,Oe]]},neutralb:{total:118,armor:[11,68],landContinue:!0,fall:.6,drift:.3,hit:[me(70,73,1.25,1.35,.85,Vf,40,30,96),me(70,73,.5,1.35,.6,Vf,40,30,96)],onStart(n){n.vars.air=!n.grounded},onFrame(n,t){let e=n.battle.effects;if(t===2&&pt.charge(),t===22&&!n.vars.rev&&n.input.stick.x*n.facing<-.5&&(n.vars.rev=!0,n.facing=-n.facing,n.mf-=10),t>=8&&t<68){let i=co(n);t%2===0&&e.spawn({x:i.x+Bt(-.8,.8),y:i.y+Bt(-.8,.8),z:.4,vx:0,vy:0,life:10,size:.15,size1:.5,color:t%4?dn:14729471}),Ni(n,i.x,i.y,1,.4+t*.01),t%16===0&&pt.charge()}if(t===68&&pt.whoosh(1),t===70){let i=co(n);e.ring(i.x,i.y,dn,4.5,18),Ni(n,i.x,i.y,14,1.6),n.battle.shakeCam(.25),pt.fire(),n.grounded&&(n.vx=n.facing*.12)}},anim:[[0,Mt],[10,{...Mt,armR:[.9,0,-.6],foreR:[-1.9,0,0],armL:[-1.2,0,.3],foreL:[-.4,0,0],torso:[.1,-1.2,0],head:[0,1,0],legR:[.3,0,-.14],legL:[-.5,0,.14],shinL:[.5,0,0],by:-.05}],[66,{...Mt,armR:[1.1,0,-.6],foreR:[-2,0,0],armL:[-1.2,0,.3],foreL:[-.4,0,0],torso:[.05,-1.4,0],head:[0,1.1,0],legR:[.3,0,-.14],legL:[-.5,0,.14],shinL:[.5,0,0],by:-.06}],[70,{...Mt,armR:[-1.55,0,-.02],foreR:[0,0,0],armL:[.5,0,.5],torso:[.3,.75,0],legR:[.5,0,-.14],legL:[-.9,0,.14],shinL:[.9,0,0],by:-.09,bz:.35}],[92,{...Mt,armR:[-1.5,0,-.02],armL:[.5,0,.5],torso:[.28,.7,0],by:-.08,bz:.3}],[118,Mt]]},sideb:{total:60,keepVel:!0,noDrift:!0,canLeaveGround:!0,noGravity:[10,32],landContinue:!0,helpless:!0,helplessLag:22,hit:[me(16,30,.85,1.25,.55,0,0,0,0,{type:"grab",then:n=>n.grounded?"sidebchoke":"sidebdive"})],onStart(n){n.grounded||(n.sideBUsed=!0)},onFrame(n,t){if(t<16)n.vx=oi(n.vx,0,.02);else if(t<=30){n.vx=n.facing*(n.grounded?.27:.21),n.grounded||(n.vy=-.015),t===16&&pt.whoosh(.9);let e=co(n,1);Ni(n,e.x,e.y,1,.5)}else n.vx*=.8},anim:[[0,Mt],[12,{...Mt,armL:[.6,0,.5],foreL:[-1.5,0,0],torso:[.2,.5,0],by:-.05}],[16,{...Mt,armL:[-1.5,0,.05],foreL:[-.2,0,0],armR:[.6,0,-.5],torso:[.5,-.5,0],legR:[.6,0,-.14],legL:[-.9,0,.14],shinL:[.8,0,0],by:-.07,bz:.3}],[32,{...Mt,armL:[-1.45,0,.05],armR:[.6,0,-.5],torso:[.45,-.5,0],by:-.05,bz:.25}],[60,Mt]]},sidebchoke:{total:58,hold:n=>[.8,n<18?Math.min(.9,n*.07):Math.max(0,.9-(n-18)*.3)],onStart(n){n.vx=0},onFrame(n,t){if(n.vx=0,t<22&&Ni(n,n.x+n.facing*.8,n.y+1.6,2,.6),t===22){let e=n.grabbing;e&&(Gf(n,12),n.grabbing=null,e.grabbedBy=null,e.x=n.x+n.facing*.85,e.y=n.y,e.vx=e.vy=e.kx=e.ky=0,e.grounded=!0,e.surface=n.surface,e.techWindow>0?(e.techWindow=0,pt.tech(),e.setState("tech")):e.setState("knockdown"));let i=n.x+n.facing*.8;n.battle.effects.ring(i,n.y+.2,dn,3.2,16),Ni(n,i,n.y+.5,12,1.4),n.battle.shakeCam(.2),pt.fire()}},anim:[[0,{...Mt,armL:[-1.5,0,.05],foreL:[-.2,0,0],torso:[.3,-.4,0]}],[16,{...Mt,armL:[-2.2,0,.05],foreL:[-.2,0,0],torso:[0,-.3,0]}],[22,{...Mt,armL:[-.9,0,.05],foreL:[0,0,0],torso:[.6,-.3,0],by:-.14,legL:[-.9,0,.14],shinL:[1.2,0,0]}],[40,{...Mt,armL:[-.9,0,.05],torso:[.55,-.3,0],by:-.13}],[58,Mt]]},sidebdive:{total:400,noGravity:[0,400],keepVel:!0,noDrift:!0,hold:()=>[.7,.5],onFrame(n,t){if(n.vars.endAt){n.vx=0,t>=n.vars.endAt&&n.endMove();return}n.vx=0,n.vy=t<8?.02:-.36,Ni(n,n.x+n.facing*.7,n.y+1.4,1,.6)},onLand(n){if(!n.vars.endAt){n.vars.endAt=n.mf+30;let t=n.x+n.facing*.7;n.doThrow({dmg:15,ang:70,bkb:60,kbg:50}),n.battle.effects.ring(t,n.y+.2,dn,3.6,16),Ni(n,t,n.y+.5,12,1.4),n.battle.shakeCam(.25),pt.fire()}return"continue"},anim:[[0,{...Oe,armL:[-1.5,0,.05],foreL:[-.2,0,0]}],[8,{...Oe,armL:[-.7,0,.05],foreL:[0,0,0],torso:[.5,-.3,0]}],[400,{...Oe,armL:[-.7,0,.05],foreL:[0,0,0],torso:[.5,-.3,0]}]]},upb:{total:62,helpless:!0,helplessLag:26,ledgeGrab:20,noDrift:!0,keepVel:!0,noGravity:[14,40],hit:[me(14,30,.45,1.7,.6,0,0,0,0,{type:"grab",then:"upbshock"}),me(34,37,.5,2.3,.6,7,70,60,70)],onStart(n){n.upBUsed=!0,n.vx*=.4},onFrame(n,t){if(t<14&&(n.grounded||(n.vy=Math.max(n.vy,-.02)),Math.abs(n.input.stick.x)>.4&&t<6&&(n.facing=Math.sign(n.input.stick.x))),t===14&&(n.grounded=!1,n.surface=null,n.y+=.02,pt.whoosh(1)),t>=14&&t<=40){n.vy=.33*(1-(t-14)/30)+.01,n.vx=oi(n.vx,n.facing*.07+n.input.stick.x*.04,.012);let e=co(n,1);Ni(n,e.x,e.y,1,.45)}t>40&&n.drift(.5)},anim:[[0,{...Mt,by:-.09,legR:[-.8,0,-.14],shinR:[1.3,0,0],legL:[-.8,0,.14],shinL:[1.3,0,0],armL:[.4,0,.4]}],[14,{...Oe,armL:[-2.6,0,.1],foreL:[-.2,0,0],armR:[.3,0,-.5],torso:[-.1,0,0],head:[-.3,0,0]}],[32,{...Oe,armL:[-2.5,0,.1],foreL:[-.3,0,0],armR:[.4,0,-.5],foreR:[-1.4,0,0]}],[36,{...Oe,armR:[-2.9,0,-.1],foreR:[-.2,0,0],armL:[.3,0,.5],torso:[-.2,.3,0]}],[62,Oe]]},upbshock:{total:50,noGravity:[0,34],keepVel:!0,noDrift:!0,throwAt:30,throwHit:{dmg:9,ang:55,bkb:70,kbg:78},hold:()=>[.45,.75],onFrame(n,t){t<30&&(n.vx=0,n.vy=0),t<24&&t%6===5&&(Gf(n,1.5),n.battle.effects.sparkle(n.x+n.facing*.5,n.y+1.8,14729471,4,.6),Ni(n,n.x+n.facing*.5,n.y+1.8,3,.7)),t===30&&(n.battle.effects.ring(n.x+n.facing*.5,n.y+1.8,dn,3.4,16),Ni(n,n.x+n.facing*.5,n.y+1.8,12,1.4),pt.fire(),n.battle.shakeCam(.2),n.vy=.22,n.vx=-n.facing*.07,n.upBUsed=!1)},anim:[[0,{...Oe,armL:[-2.3,0,.1],foreL:[-.6,0,0],armR:[-2,0,-.1],foreR:[-.8,0,0]}],[28,{...Oe,armL:[-2.3,0,.1],foreL:[-.7,0,0],armR:[-2,0,-.1],foreR:[-.9,0,0],torso:[.15,0,0]}],[31,{...Oe,armL:[-2.6,0,.8],foreL:[0,0,0],armR:[-2.6,0,-.8],foreR:[0,0,0],torso:[-.3,0,0]}],[50,Oe]]},downb:{total:62,keepVel:!0,noDrift:!0,canLeaveGround:!0,landContinue:!0,noGravity:[16,36],hit:[me(16,22,.95,.75,.6,14,44,50,80),me(23,36,.9,.75,.55,12,44,40,70)],onStart(n){n.grounded||n.startMove("downbair")},onFrame(n,t){t<16?n.vx=oi(n.vx,0,.02):t<=36?(n.vx=n.facing*.27,n.grounded||(n.vy=0),t===16&&pt.whoosh(1),Ni(n,n.x+n.facing*.9,n.y+.7,2,.6),t%4===0&&n.grounded&&n.battle.effects.dust(n.x,n.y,1,-n.facing)):n.friction(2.5)},anim:[[0,Mt],[12,{...Mt,legR:[-1,0,-.1],shinR:[1.7,0,0],torso:[-.1,0,0],armR:[.3,0,-.6],armL:[-.5,0,.5],by:-.05}],[16,{...Mt,legR:[-1.45,0,-.03],shinR:[0,0,0],legL:[.5,0,.14],shinL:[.9,0,0],torso:[-.5,0,0],armR:[.6,0,-.7],armL:[.4,0,.7],by:-.11,bz:.2}],[36,{...Mt,legR:[-1.45,0,-.03],shinR:[0,0,0],legL:[.5,0,.14],shinL:[.9,0,0],torso:[-.5,0,0],armR:[.6,0,-.7],armL:[.4,0,.7],by:-.11,bz:.2}],[62,Mt]]},downbair:{total:600,keepVel:!0,noDrift:!0,noGravity:[0,600],hit:[me(16,19,.7,.1,.62,15,270,30,90),me(20,600,.7,.15,.55,14,55,45,75)],onStart(n){n.jumpsLeft=n.s.airJumps},onFrame(n,t){t<16?(n.vx*=.85,n.vy=Math.max(n.vy-.004,-.03)):(n.vx=n.facing*.2,n.vy=-.32,t===16&&pt.whoosh(1),Ni(n,n.x+n.facing*.6,n.y+.2,2,.6))},onLand(n){if(n.mf>=16)return n.startMove("downbland"),"continue"},anim:[[0,Oe],[12,{...Oe,legR:[-1.2,0,-.1],shinR:[1.8,0,0],armR:[.3,0,-.7],armL:[.3,0,.7]}],[16,{body:[.55,0,0],legR:[-.9,0,-.03],shinR:[0,0,0],legL:[-.2,0,.14],shinL:[1.6,0,0],armR:[.5,0,-.8],armL:[.5,0,.8],torso:[-.3,0,0]}],[600,{body:[.55,0,0],legR:[-.9,0,-.03],shinR:[0,0,0],legL:[-.2,0,.14],shinL:[1.6,0,0],armR:[.5,0,-.8],armL:[.5,0,.8],torso:[-.3,0,0]}]]},downbland:{total:34,hit:[me(1,3,.6,.3,.9,8,70,60,60,{away:!0}),me(1,3,-.6,.3,.8,8,70,60,60,{away:!0})],onStart(n){n.vx=0,n.battle.effects.ring(n.x,n.y+.1,dn,3,14),n.battle.effects.dust(n.x,n.y,8,0),n.battle.shakeCam(.15),pt.hit(.7)},anim:[[0,{...Mt,by:-.2,legR:[-1.3,0,-.2],shinR:[1.9,0,0],legL:[-.6,0,.2],shinL:[1.8,0,0],torso:[.4,0,0]}],[20,{...Mt,by:-.18,legR:[-1.2,0,-.2],shinR:[1.8,0,0],legL:[-.6,0,.2],shinL:[1.7,0,0],torso:[.35,0,0]}],[34,Mt]]},final:{total:150,fs:!0,intang:[0,150],noGravity:[0,150],noDrift:!0,keepVel:!0,onStart(n){n.vx=0,n.vy=0,n.battle.startCine(n,40)},onFrame(n,t){let e=n.battle;if(n.vx=0,n.grounded||(n.vy=0),t<40&&Ni(n,n.x,n.y+1.2,3,1+t*.03),t===40&&(n.hidden=!0,n.vars.beast=e.addFx(new V0(e,n.x-n.facing*1.5,n.y,n.facing)),pt.fsBoom(),e.shakeCam(.4)),t>40&&(n.hidden=!0),t===62){let i=n.x+n.facing*3.2;e.effects.ring(i,n.y+.2,dn,7,22),e.effects.dust(i,n.y,12,0),e.shakeCam(.6),pt.hit(1),e.fsTrap(n,i,n.y+1.2,3.2),e.fsDamage(n,10)}t===84&&(n.vars.beast.vx=n.facing*.75,e.fsLaunch(n,{dmg:40,ang:38,bkb:110,kbg:95}),e.spawnProjectile(n,{x:n.x+n.facing*2,y:n.y+1.8,vx:n.facing*.75,vy:0,r:2.4,dmg:40,ang:38,bkb:110,kbg:95,life:60,color:W0,core:dn,kind:"fswave",fs:!0}),e.shakeCam(.7),pt.fsBoom()),t>84&&t%6===0&&e.shakeCam(.2)},onEnd(n){n.hidden=!1,n.vars.beast&&(n.battle.removeFx(n.vars.beast),n.vars.beast=null),n.battle.fsRelease(n)},anim:[[0,Mt],[30,{...Mt,armR:[-.6,0,-1.2],armL:[-.6,0,1.2],foreR:[-1,0,0],foreL:[-1,0,0],torso:[-.25,0,0],head:[-.4,0,0]}],[150,Mt]]},grab:{total:37,hit:[me(7,8,.95,1.4,.5,0,0,0,0,{type:"grab"})],anim:[[0,Mt],[7,{...Mt,armL:[-1.5,0,.05],foreL:[-.1,0,0],torso:[.25,-.4,0],bz:.12}],[18,{...Mt,armL:[-1.4,0,.05],torso:[.2,-.35,0]}],[37,Mt]]},dashgrab:{total:44,keepVel:!0,hit:[me(10,11,1.1,1.4,.55,0,0,0,0,{type:"grab"})],onFrame(n){n.friction(1.2)},anim:[[0,Mt],[10,{...Mt,armL:[-1.5,0,.05],foreL:[-.1,0,0],torso:[.4,-.4,0],bz:.2}],[24,{...Mt,armL:[-1.4,0,.05],torso:[.35,-.35,0]}],[44,Mt]]},pummel:{total:20,pummelAt:6,pummelDmg:1.6,anim:[[0,{...Mt,armL:[-1.4,0,.05]}],[6,{...Mt,armL:[-1.4,0,.05],legR:[-1.3,0,-.05],shinR:[1.7,0,0],torso:[.2,0,0]}],[20,{...Mt,armL:[-1.4,0,.05]}]]},fthrow:{total:36,throwAt:12,throwHit:{dmg:13,ang:40,bkb:60,kbg:70},hold:()=>[.9,.3],anim:[[0,{...Mt,armL:[-1.4,0,.05]}],[8,{...Mt,armL:[-1.4,0,.05],armR:[.5,0,-.5],foreR:[-1.6,0,0],torso:[.05,-.4,0]}],[12,{...Mt,armR:[-1.4,0,-.05],foreR:[0,0,0],torso:[.25,.5,0],bz:.2}],[36,Mt]]},bthrow:{total:40,throwAt:16,throwHit:{dmg:10,ang:140,bkb:60,kbg:100},hold:n=>{let t=Math.min(1,n/14);return[.9*Math.cos(Math.PI*t),.3+.5*Math.sin(Math.PI*t)]},anim:[[0,{...Mt,armL:[-1.4,0,.05]}],[12,{...Mt,torso:[0,-1.2,0],armL:[1,0,.3]}],[16,{...Mt,torso:[-.2,-.6,0],legR:[1.3,0,-.05],shinR:[0,0,0]}],[40,Mt]]},uthrow:{total:38,throwAt:14,throwHit:{dmg:13,ang:88,bkb:70,kbg:70},hold:n=>[.7-n*.02,.3+n*.05],anim:[[0,{...Mt,armL:[-1.4,0,.05]}],[9,{...Mt,armL:[-1.8,0,.05],armR:[.4,0,-.4],foreR:[-1.6,0,0],by:-.07}],[14,{...Mt,armR:[-2.9,0,-.1],foreR:[0,0,0],torso:[-.15,.3,0],by:.05}],[38,Mt]]},dthrow:{total:38,throwAt:16,throwHit:{dmg:7,ang:70,bkb:70,kbg:45},hold:n=>[.85,n<10?.3+n*.09:Math.max(0,1.2-(n-10)*.2)],onFrame(n,t){t===16&&(n.battle.effects.dust(n.x+n.facing*.85,n.y,8,0),n.battle.shakeCam(.1))},anim:[[0,{...Mt,armL:[-1.4,0,.05]}],[10,{...Mt,armL:[-2.6,0,.05],torso:[-.1,0,0]}],[16,{...Mt,armL:[-.8,0,.05],foreL:[0,0,0],torso:[.6,-.2,0],by:-.14}],[38,Mt]]},getupattack:{total:40,intang:[0,14],trail:"footR",trailF:[12,22],hit:[me(15,17,1.2,.5,.65,7,48,60,50),me(20,22,-1.2,.5,.65,7,132,60,50,{group:1})],anim:[[0,{...Mt,by:-.32,torso:[.6,0,0]}],[15,{...Mt,by:-.18,legR:[-1.45,0,-.05],shinR:[0,0,0],torso:[-.2,0,0]}],[21,{...Mt,by:-.18,legR:[1.3,0,-.05],shinR:[0,0,0],torso:[.4,0,0]}],[40,Mt]]},ledgeattack:{total:40,intang:[0,12],trail:"handR",trailF:[10,16],sfx:[11,"whoosh",.6],hit:[me(12,15,1.1,.9,.7,10,45,60,50)],anim:[[0,{...Mt,by:-.14}],[12,{...Mt,armR:[-1.5,0,-.05],foreR:[0,0,0],torso:[.3,.45,0],bz:.25}],[24,{...Mt,armR:[-1.4,0,-.05],torso:[.25,.4,0]}],[40,Mt]]}},X0={id:"doros",name:"\u30C9\u30ED\u30B9",en:"DOROS",title:"\u9B54\u738B",color:10502399,css:"#a040ff",desc:"\u52D5\u304D\u306F\u91CD\u304F\u9045\u3044\u304C\u3001\u3069\u306E\u30EF\u30B6\u3082\u4E00\u6483\u5FC5\u6BBA\u7D1A\u3002\u95C7\u306E\u62F3\u3068\u5927\u5263\u3067\u76F8\u624B\u3092\u306D\u3058\u4F0F\u305B\u308B\u3002",specials:["\u6EC5\u7815\u62F3\uFF08\u9577\u3044\u6E9C\u3081\u30FB\u6E9C\u3081\u4E2D\u306F\u3075\u3063\u3068\u3070\u306A\u3044\u30FB\u632F\u308A\u5411\u304D\u3067\u5A01\u529B\u5897\uFF09","\u7344\u708E\u638C\uFF08\u7A81\u9032\u3064\u304B\u307F\u30FB\u7A7A\u4E2D\u3067\u306F\u9053\u9023\u308C\u6025\u964D\u4E0B\uFF09","\u96F7\u9583\u638C\uFF08\u4E0A\u6607\u3064\u304B\u307F\u2192\u7206\u767A\uFF09","\u70C8\u9707\u811A\uFF08\u5730\u4E0A\u306F\u7A81\u9032\u8E74\u308A\u30FB\u7A7A\u4E2D\u306F\u6025\u964D\u4E0B\u30E1\u30C6\u30AA\uFF09"],stats:{weight:118,height:2.4,radius:.52,walkSpeed:.055,dashSpeed:.125,dashFrames:13,runSpeed:.102,traction:.011,airSpeed:.066,airAccel:.005,airFriction:.003,gravity:.0108,fallSpeed:.195,fastFall:.31,jumpV:.25,hopV:.155,djV:.225,airJumps:1,jumpsquat:6,rollSpeed:.11},grabHold:[.9,.35],buildModel:kf,anims:As({idle:Mt,hipY:qc,bob:.7,override:{victory:n=>({...Mt,armR:[.1,0,-.5],foreR:[-2,0,.6],armL:[.1,0,.5],foreL:[-2,0,-.6],torso:[-.12,0,0],head:[-.2+Math.sin(n*.25)*.05,0,0]})}}),moves:dv}});var ho,Zr,q0=Ye(()=>{Tf();Lf();Nf();Wf();ho={illumine:U0,dullahan:N0,dragon:z0,doros:X0},Zr=[U0,N0,z0,X0]});var Xf,$s,Y0,Yc,qf=Ye(()=>{Ei();yf();_f();Uc();io();q0();rs();ln();Qa();D0();Xf=[16730714,4164863,16765498,4185194],$s=["#ff4a5a","#3f8cff","#ffd23a","#3fdc6a"],Y0=class{constructor(t,e,i){if(this.b=t,this.owner=e,Object.assign(this,i),this.hitIds=new Set,this.dead=!1,this.age=0,i.kind==="arrow"){let l=new zt,c=.75+i.r,h=new At(new Fe(.018,.018,c,6),new Se({color:1312796}));h.rotation.z=Math.PI/2;let d=new At(new le(.06+i.r*.12,.22,6),new Se({color:new gt(i.color).multiplyScalar(1.5)}));d.rotation.z=-Math.PI/2,d.position.x=c/2+.08;let u=new At(new le(.07,.16,3),new Se({color:2756672}));u.rotation.z=-Math.PI/2,u.position.x=-c/2+.05,u.scale.set(1,1,.2);let f=new Si(new yi({map:Xi(),color:i.color,transparent:!0,blending:Xe,depthWrite:!1}));f.scale.setScalar(.5+i.r*2),f.position.x=c/2,l.add(h,d,u,f),l.position.set(i.x,i.y,.25),l.rotation.z=Math.atan2(i.vy,i.vx),this.mesh=l,t.scene.add(l);return}if(i.kind==="flame"){let l=new zt,c=new Si(new yi({map:Xi(),color:16730634,transparent:!0,depthWrite:!1})),h=new Si(new yi({map:Xi(),color:new gt(16760880),transparent:!0,blending:Xe,depthWrite:!1}));l.add(c,h),l.position.set(i.x,i.y,.3),this.outer=c,this.inner=h,this.maxLife=i.life,this.mesh=l,t.scene.add(l);return}if(i.kind==="fswave"){this.mesh=Ef(i.color,i.core),this.mesh.position.set(i.x,i.y,.3),i.vx<0&&(this.mesh.rotation.y=Math.PI),t.scene.add(this.mesh);return}let s=new zt,r=new At(new Ct(1,16,12),new Se({color:new gt(i.core||16777215).multiplyScalar(1.4)}));r.scale.setScalar(i.r*.55);let a=new Si(new yi({map:Xi(),color:i.color,transparent:!0,blending:Xe,depthWrite:!1}));a.scale.setScalar(i.r*4);let o=new At(new Ct(1,16,12),new Se({color:new gt(i.color).multiplyScalar(1.1),transparent:!0,opacity:.55,blending:Xe,depthWrite:!1}));o.scale.setScalar(i.r),s.add(o,r,a),s.position.set(i.x,i.y,.2),this.mesh=s,this.shell=o,t.scene.add(s)}update(){if(this.age++,this.px=this.x,this.py=this.y,this.x+=this.vx,this.y+=this.vy,this.life--,this.kind==="flame"){this.vx*=.94,this.vy*=.94,this.r=Math.min(this.rMax||.7,this.r+.03),this.age%3===0&&this.b.effects.spawn({x:this.x,y:this.y+.1,z:.2,vy:.015,life:18,size:this.r*.8,size1:.1,color:3811882,additive:!1,opacity:.35}),(this.life<=0||eo(this.x,this.y))&&this.kill(!1);return}if(this.kind==="arrow"){this.age%2===0&&this.b.effects.spawn({x:this.x-this.vx*1.5,y:this.y,z:.2,life:12,size:.25+this.r,size1:.02,color:this.color}),(this.life<=0||eo(this.x,this.y)||Math.abs(this.x)>30)&&this.kill(!0);return}if(this.kind==="fswave"){for(let t=0;t<3;t++)this.b.effects.sparkle(this.x-this.vx*2,this.y+Bt(-1.8,1.8),t?this.color||16765024:16777215,1,.3);(this.life<=0||Math.abs(this.x)>26)&&this.kill(!1);return}this.age%2===0&&this.b.effects.spawn({x:this.x-this.vx*2,y:this.y+Bt(-.1,.1),z:.2,life:14,size:this.r*1.6,size1:.05,color:this.color}),(this.life<=0||eo(this.x,this.y)||Math.abs(this.x)>30)&&this.kill(!0)}kill(t){this.dead||(this.dead=!0,t&&this.b.effects.ring(this.x,this.y,this.color,1.5,12),this.b.scene.remove(this.mesh),this.mesh.traverse(e=>{e.geometry&&e.geometry.dispose(),e.material&&e.material.dispose()}))}render(t){let e=this.px===void 0?this.x:this.px+(this.x-this.px)*t,i=this.py===void 0?this.y:this.py+(this.y-this.py)*t;if(this.mesh.position.set(e,i,this.kind==="fswave"?.3:.2),this.kind==="flame"){let s=this.age/this.maxLife;this.outer.scale.setScalar(this.r*2.6),this.inner.scale.setScalar(this.r*1.3*(1-s*.6)),this.outer.material.opacity=.9*Math.max(0,1-s*s),this.inner.material.opacity=.8*Math.max(0,1-s),this.outer.material.color.setRGB(1,.2+.35*(1-s),.03);return}this.kind!=="arrow"&&(this.shell?this.shell.scale.setScalar(this.r*(1+Math.sin(this.age*.6)*.08)):this.mesh.scale.set(1,1+Math.sin(this.age*.5)*.05,1))}},Yc=class{constructor(t,e){this.app=t,this.scene=t.scene,this.stage=t.stage,this.effects=t.effects,this.camera=t.camera,this.cfg=e,this.stage.setType(e.stage),this.effects.clear(),this.tmpV=new I,this.projectiles=[],this.timers=[],this.frame=0,this.phase="countdown",this.phaseT=0,this.shake=0,this.slowmo=0,this.finalFocus=null,this.winner=null,this.hitboxDebug=!1,this.ballOn=e.ball!==!1,this.ball=null,this.ballTimer=60*Bt(16,26),this.cine=null,this.fsFx=[];let i=e.players.filter(r=>r.type==="human").length,s=e.players.map((r,a)=>e.players.slice(0,a).filter(o=>o.char===r.char).length);this.fighters=e.players.map((r,a)=>{let o=new Ic,l=new kc(this,a,ho[r.char],{input:o,variant:s[a],color:Xf[a],stocks:e.stocks,cpu:r.type==="cpu",label:r.type==="cpu"?"CPU":`P${a+1}`});return r.type==="cpu"&&(l.ai=new Oc(this,l,r.level)),l.keymaps=r.type==="human"?i===1?T0:[T0[a]]:[],l.padIndex=r.type==="human"?e.players.slice(0,a).filter(c=>c.type==="human").length:-1,l}),this.cam={x:0,y:2,d:22},this.updateCamera(1),this.dbg=new zt,this.scene.add(this.dbg),pt.playMusic("battle")}later(t,e){this.timers.push({t,fn:e})}shakeCam(t){this.shake=Math.max(this.shake,t)}tick(){this.frame++,this.phaseT++,this.phase==="fight"&&(this.fightFrames=(this.fightFrames||0)+1);for(let t=this.timers.length-1;t>=0;t--){let e=this.timers[t];--e.t<=0&&(this.timers.splice(t,1),e.fn())}for(let t of this.fighters){let e;t.ai?e=t.ai.update():(e=Sn(),this.app.kb.read(t.keymaps,e),t.padIndex>=0&&Dc(t.padIndex,e),t.padIndex===0&&this.app.touch.read(e)),(this.phase==="countdown"||this.phase==="gameover")&&(e=Sn()),t.input.latch(e)}if(this.phase==="countdown"){let t=3-Math.floor(this.phaseT/50);this.phaseT%50===1&&t>0&&(this.app.bigText(String(t),"count"),pt.countdown()),this.phaseT===150&&(this.phase="fight",this.app.bigText("GO!","go"),pt.go());for(let e of this.fighters)e.animT++,e.prevX=e.x,e.prevY=e.y,e.animate();this.effects.update();return}if(this.phase==="gameover"&&this.phaseT>50){for(let t of this.fighters)t.prevX=t.x,t.prevY=t.y,t.animT++,t.animate();this.effects.update(),this.phaseT===170&&this.app.showResults(this);return}if(this.cine){let t=this.cine;t.t++;for(let e of this.fighters)e!==t.user&&(e.prevX=e.x,e.prevY=e.y);t.user.update();for(let e of this.fighters)e.animate();for(let e of this.fsFx)e.update&&e.update();this.effects.update(),t.t>=t.len&&(this.cine=null,this.app.setCine(!1));return}for(let t of this.fighters)t.update();for(let t of this.projectiles)t.update();for(let t of this.fsFx)t.update&&t.update();this.updateBall(),this.resolveHits(),this.resolveProjectiles(),this.projectiles=this.projectiles.filter(t=>!t.dead),this.pushApart();for(let t of this.fighters)this.checkBlast(t);for(let t of this.fighters)t.animate();this.effects.update(),this.phase==="gameover"&&this.phaseT===170&&this.app.showResults(this)}resolveHits(){let t=[];for(let i of this.fighters){if(i.state!=="attack"||i.hitlag>0)continue;let s=i.activeHitboxes();if(s.length)for(let r of this.fighters){if(r===i||r.state==="dead"||r.state==="respawn")continue;let a=r.hurtbox();for(let o of s){let l=(o.h.group||0)+":"+r.slot;if(!i.hitIds.has(l)&&!(M0(o.x,o.y,a.ax,a.ay,a.bx,a.by)>o.r+a.r)&&!r.isIntangible()&&!(o.h.type==="grab"&&(r.state==="grabbed"||r.state==="ledge"||r.grabbing||i.grabbing))){i.hitIds.add(l),t.push({a:i,d:r,box:o});break}}}}for(let{a:i,d:s,box:r}of t)this.processHit(i,s,r);let e=this.ball;if(e&&!e.dead&&e.life>0){for(let i of this.fighters)if(!(i.state!=="attack"||i.hitlag>0||i.hitIds.has("ball")||i.fsReady)){for(let s of i.activeHitboxes())if(s.h.type!=="grab"&&!(Math.hypot(s.x-e.x,s.y-e.y)>s.r+e.r)){i.hitIds.add("ball"),i.hitlag=5,e.hit(this.calcDmg(i,s.h),ee(e.x-i.x)||i.facing)&&this.breakBall(i);break}if(!this.ball)break}}}updateBall(){if(!(!this.ballOn||this.phase!=="fight")){if(this.ball){this.ball.update(),this.ball.dead&&(this.ball=null,this.ballTimer=60*Bt(20,32));return}this.fighters.some(t=>t.fsReady||t.move&&t.move.fs)||--this.ballTimer<=0&&(this.ball=new Gc(this),pt.star())}}breakBall(t){let e=this.ball;this.effects.koBlast(e.x,e.y,16769136),this.effects.ring(e.x,e.y,16777215,5,24),this.shakeCam(.25),pt.fsReady(),e.remove(),this.ball=null,this.ballTimer=60*Bt(22,34),t.fsReady=!0,this.app.hud.setFs(t.slot,!0)}startCine(t,e){this.cine={user:t,t:0,len:e},this.app.setCine(!0,`${t.def.name}\u300C${wf(t.def)}\u300D`,t.def.css),pt.fsStart(),this.app.hud.setFs(t.slot,!1)}fsTrap(t,e,i,s){for(let r of this.fighters)r===t||r.state==="dead"||r.state==="respawn"||r.state==="trapped"||r.invuln>0||r.state==="ledgeclimb"||Math.hypot(r.x-e,r.y+r.height*.5-i)>s+.4||(r.move=null,r.grabbing&&r.releaseGrabQuiet(),r.grabbedBy&&(r.grabbedBy.grabbing=null,r.grabbedBy=null),r.setState("trapped"),r.trap={by:t,x:e,y:i},r.vx=r.vy=r.kx=r.ky=0,r.grounded=!1,r.surface=null,r.pendingLaunch=null)}fsTrapped(t){return this.fighters.filter(e=>e.state==="trapped"&&e.trap&&e.trap.by===t)}fsDamage(t,e){for(let i of this.fsTrapped(t))i.damage=Math.min(999,i.damage+e),t.stats.dealt+=e,i.stats.taken+=e,i.flashT=5,this.app.hud.bump(i.slot),this.effects.hitSpark(i.x+Bt(-.4,.4),i.y+i.height*.5+Bt(-.4,.4),t.def.color,.35),pt.hit(.35)}fsLaunch(t,e){for(let i of this.fsTrapped(t)){i.trap=null,i.setState("hitstun");let s=ee(i.x-t.x)||t.facing;this.applyHit(t,i,e,i.x,i.y+i.height*.5,s,e.dmg),i.hitlag=12}}fsRelease(t){for(let e of this.fsTrapped(t))e.trap=null,e.setState("air")}addFx(t){return this.fsFx.push(t),t}removeFx(t){let e=this.fsFx.indexOf(t);e>=0&&this.fsFx.splice(e,1),t.remove()}calcDmg(t,e){let i=typeof e.dmg=="function"?e.dmg(t):e.dmg,s=t.move;return s&&s.smash&&(i*=1+.4*t.chargeRatio),s&&s.chargeScale&&(i*=1+s.chargeScale*t.chargeRatio),Math.round(i*10)/10}processHit(t,e,i){let s=i.h;if(s.type==="grab"){t.state==="attack"&&e.state!=="grabbed"&&t.state!=="grabbed"&&(s.then?t.commandGrab(e,typeof s.then=="function"?s.then(t):s.then):t.grabOpponent(e));return}let r=this.calcDmg(t,s);if(e.inWindow("counter"))return this.triggerCounter(e,t,r);let a=s.away&&ee(e.x-t.x)||t.facing;if(e.state==="shield"||e.state==="shieldstun")return this.shieldHit(t,e,s,r,i.x,i.y,a);this.applyHit(t,e,s,i.x,i.y,a,r)}applyHit(t,e,i,s,r,a,o){let l=o??i.dmg;if(e.damage=Math.min(999,e.damage+l),t.stats.dealt+=l,e.stats.taken+=l,e.lastHitInfo={move:i.throwHit?"throw":i.projectile?"projectile":t.moveName,frame:this.frame,dmg:e.damage},this.app.hud.bump(e.slot),e.inWindow("armor")&&!i.throwHit){let g=Math.floor(l*.35+3);i.projectile||(t.hitlag=g),e.hitlag=g,e.flashT=6,this.effects.hitSpark(s,r,16765024,.3,a),pt.armor();return}let c=xf(e.damage,l,e.s.weight,i.kbg,i.bkb),h=i.ang;h===361&&(h=e.grounded&&c<60?0:40);let d=e.receiveKnockback(c,h,a,l,t);i.link&&e.pendingLaunch&&(e.pendingLaunch.link=t,e.hitstun=16,e.tumble=!1),!i.throwHit&&!i.projectile&&(t.hitlag=d);let u=c/140;this.effects.hitSpark(s,r,t.def.color,u,a),i.throwHit?pt.hit(u*.8):t.def.id==="dullahan"&&!i.projectile&&t.move&&t.move.trail==="sword"?(pt.slash(u),pt.hit(u*.9)):pt.hit(u),c>90&&this.shakeCam(Math.min(.5,c/500));let f=this.fighters.filter(g=>g.stocks>0&&g.state!=="dead");e.stocks===1&&f.length===2&&this.predictKO(e,c,h,a)&&(this.slowmo=50,this.finalFocus=e,this.effects.ring(e.x,e.y+1,16777215,6,30))}predictKO(t,e,i,s){let r=t.x,a=t.y,o=Math.cos(i*Zs)*s*e*ro,l=Math.sin(i*Zs)*e*ro,c=0,h=ze.blast;for(let d=0;d<240;d++){let u=Math.hypot(o,l);if(u>0){let f=Math.max(0,u-Bc);o*=f/u,l*=f/u}if(c=Math.max(c-t.s.gravity,-t.s.fallSpeed),r+=o,a+=l+c,r<h.left||r>h.right||a>h.top||a<h.bottom)return!0;if(eo(r,a)||u<.02&&d>10)return!1}return!1}shieldHit(t,e,i,s,r,a,o){e.shieldHP-=s+(i.shield||0),e.setState("shieldstun"),e.shieldstun=Math.floor(s*.75+2),e.vx=o*Math.min(.18,.03+s*.008),!i.projectile&&t.grounded&&(t.vx=-o*Math.min(.12,.01+s*.005));let l=Math.floor(s*.35+3);i.projectile||(t.hitlag=l),e.hitlag=l,this.effects.shieldSpark(r,a,e.color),pt.shieldHit(),e.shieldHP<=0&&e.shieldBreak()}triggerCounter(t,e,i){t.counterDmg=i,t.facing=ee(e.x-t.x)||t.facing,t.startMove(t.def.counterMove),t.invuln=Math.max(t.invuln,14),e.hitlag=14,this.effects.ring(t.x,t.y+1,10479871,3.5,18),this.effects.sparkle(t.x,t.y+1,16777215,8,.8),pt.counter(),this.shakeCam(.1)}resolveProjectiles(){for(let t of this.projectiles){if(t.dead)continue;let e=this.ball;if(e&&!e.dead&&e.life>0&&!t.fs&&!t.owner.fsReady&&Math.hypot(t.x-e.x,t.y-e.y)<t.r+e.r){e.hit(t.dmg,ee(t.vx)||1)&&this.breakBall(t.owner),t.kill(!0);continue}for(let i of this.fighters){if(i===t.owner||i.state==="dead"||i.state==="respawn"||t.hitIds.has(i.slot))continue;let s=i.hurtbox();if(M0(t.x,t.y,s.ax,s.ay,s.bx,s.by)>t.r+s.r)continue;if(t.fs){if(i.invuln>0)continue;t.hitIds.add(i.slot),i.grabbing&&i.releaseGrabQuiet(),i.move=null,this.applyHit(t.owner,i,{dmg:t.dmg,ang:t.ang,bkb:t.bkb,kbg:t.kbg,projectile:!0},i.x,i.y+i.height*.5,ee(t.vx)||1,t.dmg),i.hitlag=26,this.effects.koBlast(i.x,i.y+1,16765024),this.shakeCam(.5);continue}if(i.inWindow("reflect")){t.owner=i,t.vx=-t.vx*1.2,t.dmg*=1.4,t.life=90,t.hitIds.clear(),this.effects.ring(t.x,t.y,10479871,2,12),pt.reflect();continue}if(i.isIntangible())continue;t.hitIds.add(i.slot);let r={dmg:t.dmg,ang:t.ang,bkb:t.bkb,kbg:t.kbg,projectile:!0};if(i.inWindow("counter")){this.triggerCounter(i,t.owner,t.dmg),t.kill(!0);break}let a=ee(t.vx)||1;i.state==="shield"||i.state==="shieldstun"?this.shieldHit(t.owner,i,r,t.dmg,t.x,t.y,a):this.applyHit(t.owner,i,r,t.x,t.y,a,t.dmg),t.kill(!1);break}}}spawnProjectile(t,e){this.projectiles.push(new Y0(this,t,e))}pushApart(){let t=this.fighters;for(let e=0;e<t.length;e++)for(let i=e+1;i<t.length;i++){let s=t[e],r=t[i];if(!s.grounded||!r.grounded||s.surface!==r.surface||s.state==="grabbed"||r.state==="grabbed"||s.state==="dead"||r.state==="dead")continue;let a=r.x-s.x,o=(s.s.radius+r.s.radius)*.9;if(Math.abs(a)<o){let l=Math.min(.04,(o-Math.abs(a))*.25),c=ee(a)||(s.slot<r.slot?1:-1),h=s.surface||{x1:-99,x2:99};s.x=Re(s.x-c*l,h.x1,h.x2),r.x=Re(r.x+c*l,h.x1,h.x2)}}}checkBlast(t){if(t.state==="dead"||t.state==="respawn"||this.phase==="gameover")return;let e=ze.blast;if(t.x>e.left&&t.x<e.right&&t.y>e.bottom&&t.y<e.top)return;let i=Re(t.x,e.left+1,e.right-1),s=Re(t.y,e.bottom+1,e.top-1);this.effects.koBlast(i,s,Xf[t.slot]),pt.ko(),this.shakeCam(.7),t.lastHitBy&&t.lastHitBy!==t?t.lastHitBy.stats.kos++:t.stats.sds++,t.die(),this.app.hud.bump(t.slot),this.finalFocus===t&&(this.finalFocus=null);let r=this.fighters.filter(a=>a.stocks>0);r.length<=1&&this.phase==="fight"&&(this.phase="gameover",this.phaseT=0,this.winner=r[0]||null,this.slowmo=60,this.app.bigText("GAME!","game"),pt.game(),pt.stopMusic())}render(t,e){for(let i of this.fighters)i.render(t,e);for(let i of this.projectiles)i.render(t);this.ball&&this.ball.render(t),this.updateCamera(e),this.hitboxDebug?this.drawDebug():this.dbg.children.length&&this.dbg.clear()}updateCamera(t){let e=ze.blast,i=1e9,s=-1e9,r=1e9,a=-1e9,o=0;for(let _ of this.fighters){if(_.state==="dead")continue;let E=Re(_.x,e.left+3,e.right-3),S=Re(_.y,e.bottom+2,e.top-2);i=Math.min(i,E),s=Math.max(s,E),r=Math.min(r,S),a=Math.max(a,S+_.height),o++}o||(i=-4,s=4,r=0,a=2);let l=(i+s)/2,c=(r+a)/2,h=this.camera.aspect,d=Math.tan(this.camera.fov*Zs/2),u=s-i+9,f=a-r+6,g=Math.max(u/(2*d*h),f/(2*d));g=Re(g,15,34),l=Re(l,-11,11),c=Re(c,-2.5,9)+.6;let v=Math.min(1,t*4);if(this.cine){let _=this.cine.user;l=_.x,c=_.y+1.1,g=7.5,v=Math.min(1,t*5)}else this.finalFocus&&this.slowmo>0&&(l=this.finalFocus.x,c=this.finalFocus.y+1,g=9,v=Math.min(1,t*6));let m=this.cam;m.x+=(l-m.x)*v,m.y+=(c-m.y)*v,m.d+=(g-m.d)*v;let p=this.shake,b=p?Bt(-p,p):0,w=p?Bt(-p,p):0;this.shake=Math.max(0,this.shake-t*1.6),this.camera.position.set(m.x+b,m.y+m.d*.12+w,m.d),this.camera.lookAt(m.x+b*.5,m.y+w*.5,0)}drawDebug(){this.dbg.children.forEach(e=>{e.geometry.dispose(),e.material.dispose()}),this.dbg.clear();let t=(e,i,s,r,a=!1)=>{let o=new At(new Ct(s,12,8),new Se({color:r,transparent:!0,opacity:a?.9:.18,wireframe:a,depthTest:!1}));o.position.set(e,i,.5),this.dbg.add(o)};for(let e of this.fighters){if(e.state==="dead")continue;let i=e.hurtbox(),s=e.isIntangible()?4491519:16772659;for(let r=0;r<=1.001;r+=.25)t(i.ax,i.ay+(i.by-i.ay)*r,i.r,s);for(let r of e.activeHitboxes())t(r.x,r.y,r.r,r.h.type==="grab"?8930559:16720418,!0)}for(let e of this.projectiles)t(e.x,e.y,e.r,16720418,!0)}dispose(){for(let t of this.fighters)t.dispose();for(let t of this.projectiles)t.kill(!1);this.projectiles=[],this.ball&&this.ball.remove();for(let t of this.fsFx)t.remove();this.fsFx=[],this.app.setCine(!1),this.scene.remove(this.dbg),this.effects.clear(),pt.stopMusic()}}});var fv=Jf(()=>{Ei();nf();sf();S0();io();Uc();qf();q0();A0();rs();ln();var Jr=1/60,ni=n=>document.querySelector(n),Z0=class{constructor(t){this.app=t,this.el=ni("#cards"),this.tagsEl=ni("#tags"),this.cards=[],this.tags=[],this.v=new I}setup(t){this.el.innerHTML="",this.tagsEl.innerHTML="",this.cards=t.fighters.map((e,i)=>{let s=document.createElement("div");return s.className="card",s.style.setProperty("--pc",$s[i]),s.style.setProperty("--cc",e.def.css),s.innerHTML=`<div class="bg"></div><img src="${this.app.portrait(e.def.id,t.cfg.players.slice(0,i).filter(r=>r.char===e.def.id).length)}"><div class="ptag">${e.label}</div><div class="nm">${e.def.name}</div><div class="stocks"></div><div class="pct">0<small>%</small></div>`,this.el.appendChild(s),{el:s,pct:s.querySelector(".pct"),stocks:s.querySelector(".stocks"),last:-1,lastS:-1}}),this.tags=t.fighters.map((e,i)=>{let s=document.createElement("div");return s.className="ntag",s.textContent=e.label,s.style.background=$s[i],s.style.borderTopColor=$s[i],s.style.color="#fff",this.tagsEl.appendChild(s),s})}setFs(t,e){let i=this.cards[t];i&&i.el.classList.toggle("fs",e)}bump(t){let e=this.cards[t];e&&(e.el.classList.remove("bump"),e.el.offsetWidth,e.el.classList.add("bump"))}pctColor(t){let e=[[0,[255,255,255]],[50,[255,230,90]],[100,[255,150,50]],[150,[255,55,50]],[230,[170,0,20]]],i=e[0],s=e[e.length-1];for(let o=0;o<e.length-1;o++)if(t>=e[o][0]&&t<=e[o+1][0]){i=e[o],s=e[o+1];break}t>230&&(i=s);let r=s[0]===i[0]?0:(t-i[0])/(s[0]-i[0]),a=i[1].map((o,l)=>Math.round(o+(s[1][l]-o)*r));return`rgb(${a[0]},${a[1]},${a[2]})`}update(t){t.fighters.forEach((i,s)=>{let r=this.cards[s],a=Math.floor(i.damage),o=i.state==="dead";(a!==r.last||o!==r.dead)&&(r.pct.innerHTML=o?"":`${a}<small>%</small>`,r.pct.style.color=this.pctColor(a),r.last=a,r.dead=o),i.stocks!==r.lastS&&(r.stocks.innerHTML="<i></i>".repeat(Math.max(0,i.stocks)),r.lastS=i.stocks,r.el.classList.toggle("out",i.stocks<=0));let l=this.tags[s];if(o||i.stocks<=0){l.style.display="none";return}l.style.display="";let c=i.prevX+(i.x-i.prevX),h=i.y+i.model.headY+.15;this.v.set(c,h,0).project(this.app.camera);let d=window.innerWidth,u=window.innerHeight,f=(this.v.x*.5+.5)*d,g=(-this.v.y*.5+.5)*u,v=f<20||f>d-20||g<40||g>u-10;f=Re(f,30,d-30),g=Re(g,40,u-140),l.style.left=f+"px",l.style.top=g+"px",l.textContent=v?`${i.label} ${Math.floor(i.damage)}%`:i.label,l.classList.toggle("off",v)});let e=Math.floor((t.fightFrames||0)/60);ni("#timer").textContent=`${Math.floor(e/60)}:${String(e%60).padStart(2,"0")}`}},J0=class{constructor(){this.R=ef(ni("#gl")),this.scene=this.R.scene,this.camera=this.R.camera,this.stage=new Cc(this.scene),this.effects=new Rc(this.scene),this.kb=new Pc,this.hud=new Z0(this),this.isTouch=bc,this.touch=new Mc(ni("#app"),()=>this.togglePause()),this.setTouchMode(bc),this.mode="title",this.paused=!1,this.battle=null,this.acc=0,this.time=0,this.last=performance.now(),this.sel={players:[{char:"illumine",type:"human",level:5},{char:"dullahan",type:"cpu",level:5}],stocks:3,stage:"battlefield",ball:!0},this.previews=[],this.portraits={},this.padPrev=Sn(),this.makePortraits(),this.bindUI(),this.renderSelectPanels(),this.showScreen("title"),this.setPreviews([{char:"illumine",v:0},{char:"dullahan",v:0}]),this.layoutPreviews(),ni("#loading").classList.add("hidden"),requestAnimationFrame(t=>this.loop(t))}makePortraits(){let t=this.R.renderer,e=new Qn;e.environment=this.scene.environment,e.environmentIntensity=.8,e.add(new Gs(14209279,3153984,1.3));let i=new ns(16777215,2.2);i.position.set(-2,3,4),e.add(i);let s=new ns(12620031,2);s.position.set(3,2,-3),e.add(s);let r=new xi(30,1,.1,50),a=256,o=t.getSize(new vt),l=t.getPixelRatio(),c=t.toneMapping;t.setPixelRatio(1),t.setSize(a,a,!1);for(let h of Zr)for(let d of[0,1]){let u=h.buildModel(d);no(u.rig,h.anims.idle(0),1),u.root.rotation.y=.45,e.add(u.root),u.root.updateMatrixWorld(!0);let f={illumine:1.62,dullahan:1.92,dragon:2.3,doros:2.42}[h.id]||1.8;r.position.set(.1,f+.1,{illumine:2.6,dullahan:2.2,dragon:2.6,doros:2.3}[h.id]||2.4),r.lookAt(0,f-.05,0),e.background=new gt(h.color).multiplyScalar(.25),t.render(e,r);let g=document.createElement("canvas");g.width=g.height=a,g.getContext("2d").drawImage(t.domElement,0,0,a,a,0,0,a,a),this.portraits[`${h.id}:${d}`]=g.toDataURL(),e.remove(u.root)}t.toneMapping=c,t.setPixelRatio(l),t.setSize(o.x,o.y,!1),this.R.resize()}portrait(t,e=0){return this.portraits[`${t}:${e%2}`]}setPreviews(t){for(let e of this.previews)this.scene.remove(e.model.root),e.model.worldObjects.forEach(i=>this.scene.remove(i)),e.model.shadow&&this.scene.remove(e.model.shadow),e.model.dispose();this.previews=t.map(e=>{let i=ho[e.char],s=i.buildModel(e.v||0);return this.scene.add(s.root),s.worldObjects.forEach(r=>this.scene.add(r)),s.shadow&&this.scene.add(s.shadow),{def:i,model:s,t:Math.random()*100,victory:!!e.victory,x:0,yaw:0}})}layoutPreviews(){let t=this.previews.length;this.previews.forEach((e,i)=>{this.mode==="results"?(e.x=1.4,e.yaw=-.35):this.mode==="select"?(e.x=i===0?-2:2,e.yaw=i===0?.55:-.55):(e.x=i===0?-2.3:2.3,e.yaw=i===0?.5:-.5)})}animatePreviews(t){for(let e of this.previews){e.t+=1;let i=e.victory?e.def.anims.victory(e.t):e.def.anims.idle(e.t);no(e.model.rig,i,e.victory?.2:.25),e.model.root.position.set(e.x,0,0),e.model.shadow&&e.model.shadow.position.set(e.x,.01,0),e.model.root.rotation.y=e.yaw,e.model.setFlash(new gt,0),e.model.update(t,{vx:0,vy:0})}}setTouchMode(t){this.isTouch=t,document.body.classList.toggle("touch",t)}enterFullscreen(){if(!this.isTouch||document.fullscreenElement||matchMedia("(display-mode: fullscreen), (display-mode: standalone)").matches)return;let t=document.documentElement,e=t.requestFullscreen||t.webkitRequestFullscreen;if(e)try{let i=e.call(t,{navigationUI:"hide"});i&&i.then&&i.then(()=>screen.orientation&&screen.orientation.lock&&screen.orientation.lock("landscape").catch(()=>{})).catch(()=>{})}catch{}}showScreen(t){for(let i of["title","select","pause","results","howto"])ni("#"+i).classList.toggle("hidden",i!==t);let e=this.battle?this.battle.fighters.some(i=>!i.ai):!1;this.touch.show(t==="battle"&&this.isTouch&&e),ni("#hud").classList.toggle("hidden",t!=="battle"&&t!=="pause"),ni("#tags").classList.toggle("hidden",t!=="battle"&&t!=="pause")}go(t){this.mode=t,t==="title"?(this.endBattle(),this.setPreviews([{char:"illumine",v:0},{char:"dullahan",v:0}]),this.showScreen("title"),this.stage.setType("battlefield"),pt.ctx&&pt.playMusic("menu")):t==="select"&&(this.endBattle(),this.refreshSelectPreviews(),this.renderSelectPanels(),this.showScreen("select"),this.stage.setType(this.sel.stage),pt.ctx&&(!pt.bgm||this.musicKind!=="menu")&&pt.playMusic("menu"),this.musicKind="menu"),this.layoutPreviews()}refreshSelectPreviews(){let t=this.sel.players,e=t[1].char===t[0].char?1:0;this.setPreviews([{char:t[0].char,v:0},{char:t[1].char,v:e}]),this.layoutPreviews()}startBattle(){pt.init(),this.endBattle(),this.setPreviews([]),this.mode="battle",this.paused=!1,this.acc=0,this.battle=new Yc(this,JSON.parse(JSON.stringify(this.sel))),this.battle.hitboxDebug=ni("#dbgChk").checked,this.musicKind="battle",this.hud.setup(this.battle),this.showScreen("battle"),window.battle=this.battle}endBattle(){this.battle&&(this.battle.dispose(),this.battle=null),this.paused=!1;let t=ni("#bigtext");t.className="",t.textContent=""}togglePause(){this.mode!=="battle"||!this.battle||this.battle.phase==="gameover"||(this.paused=!this.paused,this.showScreen(this.paused?"pause":"battle"),ni("#hud").classList.remove("hidden"),pt.menuOk())}showResults(t){let e=t.fighters,i=t.winner,s=[...e].sort((o,l)=>(l===i)-(o===i)||l.stocks-o.stocks||o.damage-l.damage);ni("#resWinner").innerHTML=i?`<span style="color:${$s[i.slot]}">${i.label}</span> ${i.def.name}`:"DRAW",ni("#resTable").innerHTML=s.map((o,l)=>`
      <div class="rcard" style="--pc:${$s[o.slot]}">
        <span class="rank">${l+1}</span><h3>${o.label} ${o.def.name}</h3>
        <table>
          <tr><td>\u6483\u589C\u6570</td><td>${o.stats.kos}</td></tr>
          <tr><td>\u843D\u4E0B\u6570</td><td>${o.stats.falls-o.stats.sds}</td></tr>
          <tr><td>\u81EA\u6EC5\u6570</td><td>${o.stats.sds}</td></tr>
          <tr><td>\u4E0E\u3048\u305F\u30C0\u30E1\u30FC\u30B8</td><td>${Math.round(o.stats.dealt)}%</td></tr>
          <tr><td>\u53D7\u3051\u305F\u30C0\u30E1\u30FC\u30B8</td><td>${Math.round(o.stats.taken)}%</td></tr>
        </table>
      </div>`).join("");let r=i?i.def.id:e[0].def.id,a=i?t.cfg.players.slice(0,i.slot).filter(o=>o.char===r).length:0;this.endBattle(),this.mode="results",this.setPreviews([{char:r,v:a,victory:!0}]),this.layoutPreviews(),this.showScreen("results"),pt.playMusic("menu"),this.musicKind="menu"}setCine(t,e="",i="#fff"){if(ni("#cine").classList.toggle("on",t),t){let r=ni("#cineLabel");r.textContent=e,r.style.color=i,r.classList.remove("show"),r.offsetWidth,r.classList.add("show")}}bigText(t,e){let i=ni("#bigtext");i.className="",i.offsetWidth,i.textContent=t,i.className=e}bindUI(){document.addEventListener("click",e=>{pt.init();let i=e.target.closest("[data-act]");i&&this.action(i.dataset.act,i)});let t=()=>{pt.init(),!pt.bgm&&this.mode!=="battle"&&pt.playMusic("menu")};window.addEventListener("keydown",t,{once:!1}),window.addEventListener("pointerdown",t),ni("#dbgChk").addEventListener("change",e=>{this.battle&&(this.battle.hitboxDebug=e.target.checked)})}action(t,e){let i=this.sel.players;switch(t){case"start":pt.menuOk(),this.enterFullscreen(),this.go("select");break;case"howto":pt.menuOk(),this.howtoFrom=this.paused?"pause":this.mode,this.showScreen("howto");break;case"closehowto":pt.menuBack(),this.showScreen(this.howtoFrom==="pause"?"pause":this.howtoFrom==="battle"?"battle":this.howtoFrom),this.howtoFrom==="pause"&&ni("#hud").classList.remove("hidden");break;case"back":pt.menuBack(),this.go("title");break;case"stock-":this.sel.stocks=Re(this.sel.stocks-1,1,9),pt.menuMove(),this.renderSelectPanels();break;case"stock+":this.sel.stocks=Re(this.sel.stocks+1,1,9),pt.menuMove(),this.renderSelectPanels();break;case"stage":this.sel.stage=this.sel.stage==="battlefield"?"omega":"battlefield",this.stage.setType(this.sel.stage),pt.menuMove(),this.renderSelectPanels();break;case"ball":this.sel.ball=!this.sel.ball,pt.menuMove(),this.renderSelectPanels();break;case"quality":this.R.setQuality(this.R.quality==="high"?"low":"high"),pt.menuMove(),this.renderSelectPanels();break;case"fight":pt.menuOk(),this.startBattle();break;case"resume":this.togglePause();break;case"quit":pt.menuBack(),this.go("select");break;case"title":pt.menuBack(),this.go("title");break;case"rematch":pt.menuOk(),this.startBattle();break;case"char":{let s=+e.dataset.slot,r=+e.dataset.d;this.cycleChar(s,r);break}case"type":{let s=+e.dataset.slot;i[s].type=i[s].type==="human"?"cpu":"human",pt.menuMove(),this.renderSelectPanels();break}case"lv":{let s=+e.dataset.slot;i[s].level=Re(i[s].level+ +e.dataset.d,1,9),pt.menuMove(),this.renderSelectPanels();break}}}cycleChar(t,e){let i=this.sel.players,s=Zr.findIndex(r=>r.id===i[t].char);i[t].char=Zr[(s+e+Zr.length)%Zr.length].id,pt.menuMove(),this.renderSelectPanels(),this.refreshSelectPreviews()}renderSelectPanels(){let t=this.sel.players;ni("#stockVal").textContent=this.sel.stocks,ni("#stageBtn").textContent=this.sel.stage==="battlefield"?"\u6708\u591C\u306E\u8056\u57DF":"\u6708\u591C\u306E\u8056\u57DF\u30FB\u7D42\u70B9",ni("#ballBtn").textContent=this.sel.ball?"\u3042\u308A":"\u306A\u3057",ni("#qualityBtn").textContent=this.R.quality==="high"?"\u9AD8":"\u8EFD\u91CF",document.querySelectorAll(".panel").forEach(e=>{let i=+e.dataset.slot,s=t[i],r=ho[s.char],a=i===1&&t[0].char===t[1].char?1:0;e.style.setProperty("--pc",$s[i]),e.style.setProperty("--cc",r.css),e.innerHTML=`
        <div class="ph"><span class="tag">${s.type==="cpu"?"CPU":"P"+(i+1)}</span>
          <div style="display:flex;gap:8px;align-items:center">
            ${s.type==="cpu"?`<span class="lv"><button data-act="lv" data-slot="${i}" data-d="-1">\u2212</button>Lv.${s.level}<button data-act="lv" data-slot="${i}" data-d="1">\uFF0B</button></span>`:""}
            <button class="type" data-act="type" data-slot="${i}" title="\u30D7\u30EC\u30A4\u30E4\u30FC/CPU \u5207\u308A\u66FF\u3048">${s.type==="cpu"?"CPU":"PLAYER"} \u21C4</button>
          </div></div>
        <div class="charrow">
          <button class="arrow" data-act="char" data-slot="${i}" data-d="-1">\u25C0</button>
          <img class="portrait" src="${this.portrait(s.char,a)}">
          <div class="cname"><div class="t">${r.title}</div><div class="n">${r.name}</div><div class="e">${r.en}</div></div>
          <button class="arrow" data-act="char" data-slot="${i}" data-d="1">\u25B6</button>
        </div>
        <div class="desc">${r.desc}</div>
        <div class="sp">\u5FC5\u6BBA\u30EF\u30B6: ${r.specials.join(" / ")}</div>`})}menuKeys(){let t=this.kb,e=Dc(0,Sn()),i=e.attack&&!this.padPrev.attack,s=e.start&&!this.padPrev.start,r=e.special&&!this.padPrev.special,a=e.x<-.6&&!(this.padPrev.x<-.6),o=e.x>.6&&!(this.padPrev.x>.6);this.padPrev=e;let l=t.take("Enter")||t.take("NumpadEnter")||i||s,c=t.take("Escape")||r;switch(this.mode){case"title":if(!ni("#howto").classList.contains("hidden")){(l||c)&&this.action("closehowto");break}(l||t.take("Space"))&&this.action("start");break;case"select":(t.take("KeyA")||a)&&this.cycleChar(0,-1),(t.take("KeyD")||o)&&this.cycleChar(0,1),t.take("ArrowLeft")&&this.cycleChar(1,-1),t.take("ArrowRight")&&this.cycleChar(1,1),l?this.action("fight"):c&&this.action("back");break;case"results":l?this.action("rematch"):c&&this.action("quit");break;case"battle":if(!ni("#howto").classList.contains("hidden")){(l||c)&&this.action("closehowto");break}if((l||c||s)&&this.togglePause(),t.take("Backquote")||t.take("F2")){let h=ni("#dbgChk");h.checked=!h.checked,this.battle&&(this.battle.hitboxDebug=h.checked)}break}t.clearOnce()}loop(t){requestAnimationFrame(i=>this.loop(i));let e=Math.min(.1,(t-this.last)/1e3);if(this.last=t,this.time+=e,this.menuKeys(),this.mode==="battle"&&this.battle){let i=this.battle;if(!this.paused){let s=i.slowmo>0?.3:1;this.acc+=e*s;let r=0;for(;this.acc>=Jr&&r<6&&(i.tick(),i.slowmo>0&&i.slowmo--,this.acc-=Jr,r++,this.mode==="battle"););r>=6&&(this.acc=0)}this.battle&&(this.battle.render(this.paused?1:this.acc/Jr,this.paused?0:e),this.hud.update(this.battle))}else for(this.menuCamera(e),this.acc+=e;this.acc>=Jr;)this.acc-=Jr,this.effects.update(),this.animatePreviews(Jr);this.stage.update(e),this.R.render()}menuCamera(t){let e=this.camera,i=this.time;this.mode==="title"?(e.position.set(Math.sin(i*.15)*1.2,1.25+Math.sin(i*.2)*.1,6.4),e.lookAt(0,1.3,0)):this.mode==="select"?(e.position.set(0,1.9,7.4),e.lookAt(0,.6,0)):this.mode==="results"&&(e.position.set(.2,1.5,5.6),e.lookAt(.3,1.05,0))}},$0=new J0;window.app=$0;window.addEventListener("pointerdown",n=>{n.pointerType==="touch"&&!$0.isTouch&&$0.setTouchMode(!0)},{capture:!0});"serviceWorker"in navigator&&window.addEventListener("load",()=>navigator.serviceWorker.register("sw.js").catch(()=>{}))});export default fv();
